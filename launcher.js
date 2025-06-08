import * as AppModule from './app_polar.js'; // adjust path if needed
import ZTt from './app_polar.js';
import Te from './app_polar.js';

//import qTt from './app_polar.js';
import { state_hadar_X8 } from './app_polar.js';

const fileInput = document.getElementById('fileInput');
const status = document.getElementById('status');
const canvas = document.getElementById('glcanvas');

let appInstance;
let current_file;
let asShotTemp;
let asShotTint;
const longSide = 1250;
const shortSide = 834;

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
        { name: 'temperature', default: asShotTemp },
        { name: 'tint', default: asShotTint },
        { name: 'exposure', default: 0 },
        { name: 'contrast', default: 0 },
        { name: 'highlights', default: 0 },
        { name: 'shadows', default: 0 },
        { name: 'whites', default: 0 },
        { name: 'blacks', default: 0 },
        { name: 'texture', default: 0 },
        { name: 'clarity', default: 0 },
        { name: 'dehaze', default: 0 },
        { name: 'vibrance', default: 0 },
        { name: 'saturation', default: 0 }
    ];

    window.resetSlider = async function (controlName, defaultValue) {
        const slider = document.getElementById(`${controlName}Slider`);
        const valueSpan = document.getElementById(`${controlName}Value`);

        if (slider) {
            if (controlName === 'temperature') {
                defaultValue = asShotTemp;
            } else if (controlName === 'tint') {
                defaultValue = asShotTint;
            }
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
                if (name === 'exposure' || name === 'temperature' || name === 'tint') {
                    app.adjustments[name] = val;
                } else {
                    app.adjustments[name] = val / 100;
                }
                valueSpan.textContent = val;
                status.textContent = `Updating ${name}...`;
                await app.render({ reason: `slider-${name}` });
                status.textContent = 'Updated.';
            });
        }
    });
}

const button = document.getElementById('pickDir');
const fileList = document.getElementById('fileList');
  // ✅ The picker must be triggered directly inside this handler
  button.addEventListener('click', async () => {
    try {
        console.log("picking directory")
      const dirHandle = await window.showDirectoryPicker(); // ← MUST be here
      fileList.innerHTML = ''; // Clear list
      state_hadar_X8.hadar_X8 = dirHandle;

      state_hadar_X8.hadar_latest_adjustments["adjustments"] = appInstance.adjustments;
    console.log("appInstance.adjustments",state_hadar_X8.hadar_latest_adjustments)
      const fileNameWithJpg = current_file.name.replace(/\.[^/.]+$/, "") + ".jpeg";

   
    state_hadar_X8.fileSystemFileHandler = await dirHandle.getFileHandle(fileNameWithJpg, {
        create: !0
    });
    const id = `${current_file.name}|${current_file.lastModified}`
    const imageData = [ //t  
        {
          adjustmentsDigest: "a05f9e52ce89ea8e225faa23e3090201",
          colorTag: null,
          currentTask: null,
          customSortingIndex: null,
          error: null,
          fileName: current_file.name,
          flag: "unflagged",
          historyIndex: 5,
          id: id,
          isAnchorImage: 0,
          isHidden: 0,
          isSuggestedImage: 0,
          isUnsupported: 0,
          kind: "locked",
          parentId: null,
          presetId: null,
          rating: 0,
          status: "none",
          styleId: null,
          styleVersion: null
        }
      ];
      
    const exportSettings = { //e  
        bitDepth: undefined,
        colorSpace: "srgb",
        filenameNumber: 1,
        filenamePrefix: "Untitled_",
        filenameType: "original",
        ppi: 300,
        projectId: "1156ed0e-0417-4026-9496-b9c38a1ee609",
        quality: 0.9,
        type: "jpg"
      };
    await ZTt(imageData, state_hadar_X8.hadar_X8, exportSettings);

    } catch (err) {
      console.error('Directory selection cancelled or failed:', err);
    }
  });
fileInput.addEventListener('change', async () => {

    const file = fileInput.files[0];
    if (!file) return;

    status.textContent = 'Loading image...';

    try {
        if (typeof AppModule.A0 === 'function') {
            appInstance = AppModule.A0();
        } else {
            console.error("App module doesn't export A0()");
            status.textContent = "Editor init failed";
            return;
        }
        if (typeof appInstance.import === 'function') {
            const app = appInstance;
            document.getElementById('canvasContainer').appendChild(app.canvas);

        // give the canvas CSS size (for layout) …
        app.canvas.style.width  = '100%';
        app.canvas.style.height = '100%';   
        app.canvas.width = longSide; //todo automatically set based on metadata??
        app.canvas.height = shortSide;

        const metadata = await app.ioAdapters[1].rawMetadataConnection.proxy.getMetadata(file);

        const adjustments = undefined;

        await app.import(file, {
            photoId: file.name,
            metadata,
            adjustments,
            enableHalfResolution: false,
            enableDenoise: true
        });

        asShotTemp = Math.round(app.renderer.photo.whiteBalance.asShotTemperature);
        asShotTint = Math.round(app.renderer.photo.whiteBalance.asShotTint);
        
        //update the html file temp and tint sliders with the asShotTemp and asShotTint
        document.getElementById('temperatureSlider').value = asShotTemp;
        document.getElementById('tintSlider').value = asShotTint;
        document.getElementById('temperatureValue').textContent = asShotTemp;
        document.getElementById('tintValue').textContent = asShotTint;

        attachSliderListeners(app);

        status.textContent = 'Rendering image...';

        console.log("Rendered photo object:", app.photo);

        status.textContent = 'Done.1';

         state_hadar_X8.hadar_file = file; 
         state_hadar_X8.hadar_latest_adjustments = app.adjustments;
         current_file = file;
                        
         const gl = app.gl || app.canvas?.getContext("webgl2");
        } 
         else {
            status.textContent = 'App module does not expose import/load method.';
        }
    } catch (err) {
        status.textContent = 'Error: ' + err.message;

        console.error(err);
    }
});
