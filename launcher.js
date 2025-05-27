import * as AppModule from './app_polar.js'; // adjust path if needed

const fileInput = document.getElementById('fileInput');
const status = document.getElementById('status');
const canvas = document.getElementById('glcanvas');

let appInstance;


function drawRedCircle(gl, canvas) {
    // ---------- 1. minimal shader pair ----------
    const vsSrc = `#version 300 es
  in  vec2 a_position;
  uniform float u_aspect;        // height / width
  void main() {
    vec2 p = a_position;
    p.x *= u_aspect;             // keep the circle perfectly round
    gl_Position = vec4(p, 0.0, 1.0);
  }`;

    const fsSrc = `#version 300 es
  precision mediump float;
  out vec4 outColor;
  void main() { outColor = vec4(1.0, 0.0, 0.0, 1.0); }`;

    const prog   = linkProgram(gl, vsSrc, fsSrc);
    const aspect = canvas.height / canvas.width;
    gl.useProgram(prog);
    gl.uniform1f(gl.getUniformLocation(prog, 'u_aspect'), aspect);

    // ---------- 2. unit-circle geometry ----------
    const N = 128;                       // resolution
    const verts = new Float32Array((N + 2) * 2);
    verts.set([0, 0]);                   // fan centre
    for (let i = 0; i <= N; ++i) {
        const a = i * 2 * Math.PI / N;
        verts[2 + 2 * i]     = Math.cos(a);
        verts[2 + 2 * i + 1] = Math.sin(a);
    }
    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    const loc = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    // ---------- 3. render ----------
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.BLEND);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, N + 2);

    // (optional) clean-up if the editor will keep rendering
    gl.deleteBuffer(vbo);
    gl.deleteProgram(prog);
}

function linkProgram(gl, vsSrc, fsSrc) {
    function compile(type, src) {
        const sh = gl.createShader(type);
        gl.shaderSource(sh, src);
        gl.compileShader(sh);
        if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS))
            throw new Error(gl.getShaderInfoLog(sh));
        return sh;
    }
    const vs = compile(gl.VERTEX_SHADER, vsSrc);
    const fs = compile(gl.FRAGMENT_SHADER, fsSrc);
    const pr = gl.createProgram();
    gl.attachShader(pr, vs); gl.attachShader(pr, fs);
    gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS))
        throw new Error(gl.getProgramInfoLog(pr));
    gl.deleteShader(vs); gl.deleteShader(fs);
    return pr;
}

function attachSliderListeners(app) {
    const controls = [
        { name: 'exposure', default: 0 },
        { name: 'contrast', default: 0 },
        { name: 'highlights', default: 0 },
        { name: 'shadows', default: 0 },
        { name: 'whites', default: 0 },
        { name: 'blacks', default: 0 }
    ];

    window.resetSlider = async function (controlName, defaultValue) {
        const slider = document.getElementById(`${controlName}Slider`);
        const valueSpan = document.getElementById(`${controlName}Value`);
        if (slider) {
            slider.value = defaultValue;
            valueSpan.textContent = defaultValue;
            app.adjustments[controlName] = defaultValue;
            status.textContent = `Resetting ${controlName}...`;
            await app.render({ reason: `reset-${controlName}` });
            status.textContent = 'Updated.';
        }
    };

    controls.forEach(({ name, default: defaultValue }) => {
        const slider = document.getElementById(`${name}Slider`);
        const valueSpan = document.getElementById(`${name}Value`);
        if (slider && valueSpan) {
            slider.addEventListener('input', async () => {
                const val = parseFloat(slider.value);
                app.adjustments[name] = val;
                valueSpan.textContent = val;
                status.textContent = `Updating ${name}...`;
                await app.render({ reason: `slider-${name}` });
                status.textContent = 'Updated.';
            });
        }
    });
}

fileInput.addEventListener('change', async () => {

    const file = fileInput.files[0];
    if (!file) return;

    status.textContent = 'Loading image...';

    try {
        // Assuming your app instance has an import or load method
        // Expect A0 (getEditor) to return the full editing instance
        if (typeof AppModule.A0 === 'function') {
            appInstance = AppModule.A0();
            // console.log("Editor instance created via A0()");
        } else {
            console.error("App module doesn't export A0()");
            status.textContent = "Editor init failed";
            return;
        }
        console.log("here")
        if (typeof appInstance.import === 'function') {
            console.log(" await appInstance.import(file);")
            // const file = fileInput.files[0];
            // const app = AppModule.A0();
            const app = appInstance;
            document.getElementById('canvasContainer').appendChild(app.canvas);

        // document.body.appendChild(app.canvas);
        // give the canvas CSS size (for layout) …
        app.canvas.style.width  = '100%';
        app.canvas.style.height = '100%';   
        app.canvas.width  = 1250;
        app.canvas.height = 1250;     


            const metadata = undefined; // later use real EXIF if you want
            const adjustments = {
                blacks: 0,
                calibrationBlueHue: 0,
                calibrationBlueSat: 0,
                calibrationGreenHue: 0,
                calibrationGreenSat: 0,
                calibrationRedHue: 0,
                calibrationRedSat: 0,
                clarity: 0,
                colorMatchImageId: null,
                colorMatchSkinToneOptimized: true,
                colorMatchStrength: 1,
                colorNoiseReduction: 0.75,
                colorProfile: null,
                contrast: 0,
                correctLensChromaticAberration: true,
                correctLensDistortion: true,
                correctLensVignette: true,
                crop: [0, 0, 1, 1],
                cropRatio: [0, 0],
                cropStraighten: 0,
                curvesAll: [[0, 0],  [255, 255]],
                curvesBlue: [[0, 0],  [255, 255]],
                curvesGreen: [[0, 0],  [255, 255]],
                curvesRed: [[0, 0],  [255, 255]],
                defringeGreenAmount: 0,
                defringeGreenHueRange: [0.28, 0.39],
                defringePurpleAmount: 0,
                defringePurpleHueRange: [0.713, 0.948],
                dehaze: 0,
                exposure: 0,
                flipX: false,
                flipY: false,
                gradingBalance: 0,
                gradingBlending: 0.5,
                gradingGlobalHue: 0,
                gradingGlobalLuminance: 0,
                gradingGlobalSaturation: 0,
                gradingHighlightsHue: 0,
                gradingHighlightsLuminance: 0,
                gradingHighlightsSaturation: 0,
                gradingMidtonesHue: 0,
                gradingMidtonesLuminance: 0,
                gradingMidtonesSaturation: 0,
                gradingShadowsHue: 0,
                gradingShadowsLuminance: 0,
                gradingShadowsSaturation: 0,
                grainAmount: 0,
                grainRoughness: 0.5,
                grainSize: 0.25,
                healingMasks: [],
                highlights: 0,
                hueAqua: 0,
                hueBlue: 0,
                hueGreen: 0,
                hueMagenta: 0,
                hueOrange: 0,
                huePurple: 0,
                hueRed: 0,
                hueYellow: 0,
                ignoreEmbeddedLensCorrection: false,
                lensDistortion: 0,
                lensDistortionCorrectionFactor: 1,
                lensVignetteCorrectionFactor: 1,
                localAdjustments: [],
                luminanceAqua: 0,
                luminanceBlue: 0,
                luminanceGreen: 0,
                luminanceMagenta: 0,
                luminanceNoiseReduction: 0,
                luminanceOrange: 0,
                luminancePurple: 0,
                luminanceRed: 0,
                luminanceYellow: 0,
                orientation: 0,
                parametricDarks: 0,
                parametricDarksStop: 0.25,
                parametricHighlights: 0,
                parametricLights: 0,
                parametricLightsStop: 0.75,
                parametricMidsStop: 0.5,
                parametricShadows: 0,
                perspectiveAspect: 0,
                perspectiveHorizontal: 0,
                perspectiveOffsetX: 0,
                perspectiveOffsetY: 0,
                perspectiveRotate: 0,
                perspectiveScale: 1,
                perspectiveVertical: 0,
                pointColors: [],
                saturation: 0,
                saturationAqua: 0,
                saturationBlue: 0,
                saturationGreen: 0,
                saturationMagenta: 0,
                saturationOrange: 0,
                saturationPurple: 0,
                saturationRed: 0,
                saturationYellow: 0,
                shadows: 0,
                sharpen: 0.4,
                temperature: undefined,
                texture: 0,
                tint: undefined,
                userLutId: undefined,
                userLutStrength: 1,
                userLutTitle: undefined,
                vibrance: 0,
                vignette: 0,
                vignetteFeather: 0.5,
                vignetteHighlights: 0,
                vignetteMidpoint: 1,
                vignetteRoundness: 0,
                whites: 0
            };
            console.log("file",file)

            await app.import(file, {
                photoId: file.name,
                metadata,
                adjustments,
                enableHalfResolution: false,
                enableDenoise: true
            });
            attachSliderListeners(app);

            status.textContent = 'Rendering image...';

     //       await app.render({  reason: "import-full-size"});
            // await appInstance.render({  reason: "import-full-size"});
            console.log("Rendered photo object:", app.photo);

            status.textContent = 'Done.1';

            const gl = app.gl || app.canvas?.getContext("webgl2");
            // drawRedCircle(gl, app.canvas);        //  <-- add this

            //now draw a circle on the canvas?
//             const texture = app.renderer.photo.texture.texture;
//             const width = app.renderer.photo.texture.width;
//             const height = app.renderer.photo.texture.height;
//
// // Check for support
//             const ext = gl.getExtension('EXT_color_buffer_float') || gl.getExtension('WEBGL_color_buffer_float');
//             if (!ext) {
//                 console.error("FLOAT framebuffer not supported");
//             }
//
// // Create and bind framebuffer
//             const fb = gl.createFramebuffer();
//             gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
//             gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
//
//             if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
//                 console.error("Framebuffer not complete");
//             }
//
// // Use Float32Array for RGBA16F
//             const pixelBuffer = new Float32Array(width * height * 4);
//             gl.readPixels(0, 0, width, height, gl.RGBA, gl.FLOAT, pixelBuffer);
//
// // Extract RGB
//             const red = [], green = [], blue = [];
//             for (let i = 0; i < pixelBuffer.length; i += 4) {
//                 red.push(pixelBuffer[i]);
//                 green.push(pixelBuffer[i + 1]);
//                 blue.push(pixelBuffer[i + 2]);
//             }
//
//             console.log("Red:", red);
//             console.log("Green:", green);
//             console.log("Blue:", blue);
//
// // Cleanup
//             gl.bindFramebuffer(gl.FRAMEBUFFER, null);
//             //get the matrix for debug
//             // Setup width and height of your render target (usually canvas or framebuffer)
//


// Now pixels contains [R, G, B, A, R, G, B, A, ...] for each pixel


        } 

         else {
            status.textContent = 'App module does not expose import/load method.';
        }
    } catch (err) {
        status.textContent = 'Error: ' + err.message;
        console.error(err);
    }
});
