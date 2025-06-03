const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const pixelmatchModule = require('pixelmatch');
const pixelmatch = pixelmatchModule.default || pixelmatchModule;
const PNG = require('pngjs').PNG;

async function compareImages(imgPath1, imgPath2) {
  return new Promise((resolve, reject) => {
    const img1 = fs.createReadStream(imgPath1).pipe(new PNG()).on('parsed', doneReading);
    const img2 = fs.createReadStream(imgPath2).pipe(new PNG()).on('parsed', doneReading);
    let filesRead = 0;

    function doneReading() {
      if (++filesRead < 2) return;

      if (img1.width !== img2.width || img1.height !== img2.height) {
        return reject(new Error('Images have different sizes'));
      }

      const diff = new PNG({ width: img1.width, height: img1.height });
      const numDiffPixels = pixelmatch(
        img1.data, img2.data, diff.data, img1.width, img1.height,
        { threshold: 0.01 }
      );

      if (numDiffPixels > 0) {
        const diffPath = imgPath1.replace(/\.png$/, '-diff.png');
        diff.pack().pipe(fs.createWriteStream(diffPath));
        reject(new Error(`Images differ by ${numDiffPixels} pixels. See diff image at ${diffPath}`));
      } else {
        resolve();
      }
    }
  });
}

async function test_reset_all(page, canvasesAfter, img_name) {
  // --- RESET ALL SLIDERS TEST ---
  // Get all reset buttons inside the sliders container
  const resetButtons = await page.$$('#sliders button');

  if (resetButtons.length === 0) {
    throw new Error('No reset buttons found');
  }

  // Click all reset buttons sequentially
  for (const btn of resetButtons) {
    await btn.click();
  }

  // Log that sliders are reset
  console.log('Clicked all individual reset buttons to reset sliders');

  // Wait for rendering to settle after resets
  await page.waitForTimeout(3000);

  // Take screenshot after reset
  const resetScreenshotPath = path.join(__dirname, 'reset-output.png');
  await canvasesAfter[0].screenshot({ path: resetScreenshotPath });
  console.log(`✅ Reset image saved as ${resetScreenshotPath}`);

  // Extract the actual file name from the directory path
  const actual_file_name = path.basename(img_name);
  const prefix = actual_file_name.split('__')[0];
  const targetRenderedPath = path.join(__dirname, 'rendered_targets', `${prefix}_target_rendered.png`);

  await page.waitForTimeout(3000); // Wait before image comparison
  if (!fs.existsSync(targetRenderedPath)) {
    throw new Error(`⚠️ ${prefix}_target_rendered.png not found, failing test.`);
  } else {
    try {
      await compareImages(resetScreenshotPath, targetRenderedPath);
      console.log('✅ Reset rendered image matches target_rendered.png!');
    } catch (err) {
      console.error('❌ Reset image comparison failed:', err.message);
      process.exit(1);
    }
  }
}

async function test_edit_sliders(page, img_name) {
  // Change multiple sliders as requested
  const slidersToChange = {
    exposureSlider: 0.9,
    contrastSlider: 0.8,
    highlightsSlider: -0.9,
    shadowsSlider: 1.1,
    whitesSlider: 0.3,
    blacksSlider: -0.5,
  };

  for (const [sliderId, value] of Object.entries(slidersToChange)) {
    await page.waitForTimeout(1000);

    const slider = await page.$(`#${sliderId}`);
    if (!slider) throw new Error(`Slider ${sliderId} not found`);
    await slider.fill(value.toString());
    // Trigger input event to simulate user moving slider
    await slider.evaluate((el, val) => {
      el.value = val;
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }, value.toString());
    
    // Also update the corresponding value display span if necessary
    const valueSpanId = sliderId.replace('Slider', 'Value');
    const valueSpan = await page.$(`#${valueSpanId}`);
    if (valueSpan) {
      await valueSpan.evaluate((el, val) => { el.textContent = val; }, value.toString());
    }
  }

  console.log('✅ Sliders updated with new values.');

  // Wait some time for rendering to settle after slider changes
  await page.waitForTimeout(3000);

  // Take new screenshot of the canvas after edits
  const editedScreenshotPath = path.join(__dirname, 'edited-output.png');
  const canvasesAfter = await page.$$('#canvasContainer canvas');
  await canvasesAfter[0].screenshot({ path: editedScreenshotPath });
  console.log(`✅ Edited image saved as ${editedScreenshotPath}`);
  await page.waitForTimeout(3000);

  // Extract the actual file name from the directory path
  const actual_file_name = path.basename(img_name);
  const prefix = actual_file_name.split('__')[0];
  const targetEditedPath = path.join(__dirname, 'edited_targets', `${prefix}_target_edited.png`);

  await page.waitForTimeout(3000); // Wait before image comparison
  if (!fs.existsSync(targetEditedPath)) {
    throw new Error(`⚠️ ${prefix}_target_edited.png not found, failing test.`);
  } else {
    try {
      await compareImages(editedScreenshotPath, targetEditedPath);
      console.log('✅ Edited rendered image matches target edited image!');
    } catch (err) {
      console.error('❌ Edited image comparison failed:', err.message);
      // Read and print slider values
      const sliderIds = ['exposureSlider', 'contrastSlider', 'highlightsSlider', 'shadowsSlider', 'whitesSlider', 'blacksSlider'];
      for (const sliderId of sliderIds) {
        const sliderValue = await page.$eval(`#${sliderId}`, el => el.value);
        console.log(`${sliderId} value:`, sliderValue);
      }
      process.exit(1); // Fail the test if images differ
    }
  }

  return editedScreenshotPath;
}

async function test_render_image(page, img_name) {
  // --- IMAGE UPLOAD TEST ---
  await page.waitForTimeout(3000);

  const rawImagePath = path.join(__dirname, img_name);
  if (!fs.existsSync(rawImagePath)) throw new Error('RAW image file not found');

  // Check if canvas exists before upload
  const canvasesBefore = await page.$$('canvas');
  console.log('Canvases before upload:', canvasesBefore.length);

  // Upload the RAW image file
  const fileInput = await page.$('#fileInput');
  if (!fileInput) throw new Error('Missing file input');
  await fileInput.setInputFiles(rawImagePath);

  // Wait for canvas container and then canvas inside it
  await page.waitForSelector('#canvasContainer', { timeout: 10000, state: 'attached' });
  await page.waitForSelector('#canvasContainer canvas', { timeout: 10000, state: 'attached' });

  await page.waitForTimeout(3000); // wait for rendering

  const canvasesAfter = await page.$$('#canvasContainer canvas');
  console.log('Canvases after upload:', canvasesAfter.length);
  if (canvasesAfter.length === 0) throw new Error('Canvas not found after image upload');

  // Take screenshot of the first canvas inside container
  const canvas = canvasesAfter[0];
  const screenshotPath = path.join(__dirname, 'rendered-output.png');
  await canvas.screenshot({ path: screenshotPath });

  console.log(`✅ RAW image uploaded and canvas rendered. Screenshot saved to ${screenshotPath}`);

  // Extract the actual file name from the directory path
  const actual_file_name = path.basename(img_name);
  const prefix = actual_file_name.split('__')[0];
  const targetPath = path.join(__dirname, 'rendered_targets', `${prefix}_target_rendered.png`);

  await page.waitForTimeout(3000); // Wait before image comparison
  if (!fs.existsSync(targetPath)) {
    throw new Error(`⚠️ ${prefix}_target_rendered.png not found, failing test.`);
  } 
  else {
    try {
      await compareImages(screenshotPath, targetPath);
      console.log('✅ Rendered image matches target image!');
    } catch (err) {
      console.error('❌ Image comparison failed:', err.message);
      process.exit(1); // Fail the test if images differ
    }
  }

  return canvasesAfter;
}

async function test_one_image(page) {
  const testImagesDir = path.join(__dirname, 'test_images');
  const file_list = fs.readdirSync(testImagesDir).filter(file => file.endsWith('.cr3'));

  for (const img_name of file_list) {
    console.log("****img_name", img_name,"****")
    const canvasesAfter = await test_render_image(page, path.join('test_images', img_name));
    const editedScreenshotPath = await test_edit_sliders(page, img_name);
    await test_reset_all(page, canvasesAfter, img_name);
  }
}

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Log page console and errors for easier debugging
  // page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err));

  // Load page from local HTTP server
  const fileUrl = 'http://localhost:4444/polar.html';
  await page.goto(fileUrl);

  // --- BASIC UI TESTS ---

  const title = await page.title();
  console.log('Page title:', title);
  if (title !== 'RAW Image GPU Renderer') throw new Error('Wrong page title');

  const fileInput = await page.$('#fileInput');
  if (!fileInput) throw new Error('Missing file input');

  const exposureSlider = await page.$('#exposureSlider');
  if (!exposureSlider) throw new Error('Exposure slider not found');

  const exposureValue = await page.$eval('#exposureSlider', el => el.value);
  console.log('Exposure default:', exposureValue);
  if (exposureValue !== '0') throw new Error('Wrong default exposure value');

  await page.fill('#contrastSlider', '2.5');
  const contrastValue = await page.$eval('#contrastSlider', el => el.value);
  console.log('Contrast new value:', contrastValue);
  if (contrastValue !== '2.5') throw new Error('Contrast slider failed to update');

  console.log('✅ UI loaded and sliders are working');

  await test_one_image(page);

  await browser.close();
})();
