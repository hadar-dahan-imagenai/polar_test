import { wrap } from 'https://unpkg.com/comlink@4.3.1/dist/esm/comlink.mjs';

// 🧩 Minimal RawLoader class using both workers
class RawLoader {
    constructor(rawProxy, metadataProxy) {
        this.rawProxy = rawProxy;
        this.metadataProxy = metadataProxy;
    }

    async loadRawFile(file) {
        console.log('Loading RAW file:', file);
        // 👇 Use metadata worker first
        const metadata = await this.metadataProxy.getMetadata(file);
        console.log('metadata:', metadata);

        // 👇 Decode RAW using the main worker
        const result = await this.rawProxy.loadRaw(file, { metadata });

        return result;
    }
}

// 🔧 Helper: Create a Comlink proxy for any worker
async function createProxy(workerPath) {
    const worker = new Worker(workerPath, { type: 'module' });
    return wrap(worker);
}

class Ey extends EY {
    static{l(this, "RawIOAdapter")
    }static supportedExtensions = [".dng", ".cr2", ".cr3", ".crw", ".pef", ".nef", ".arw", ".rw2", ".raw", ".raf", ".orf"];
    rawConnection;
    rawMetadataConnection;
    highlightsReconPass;
    demosaicRcdPass;
    demosaicXtransPass;
    profileCache;
    measurements = [];
    constructor(e) {
        super(),
            this.rawConnection = e.rawConnection,
            this.rawMetadataConnection = e.rawMetadataConnection,
            this.profileCache = new Map
    }
    printPerformanceStats() {
        const e = this.measurements
            , s = l(c => {
                const u = Math.min(...c)
                    , d = Math.max(...c)
                    , f = c.reduce( (h, m) => h + m, 0) / c.length;
                return {
                    min: u,
                    avg: f,
                    max: d
                }
            }
            , "calcStats")
            , n = e.reduce( (c, u) => (c[u.format] = c[u.format] || [],
            c[u.format]?.push(u),
            c), {})
            , r = [];
        for (const [c,u] of Object.entries(n)) {
            const d = s(u.map(m => m.loadTime))
                , f = s(u.map(m => m.renderTime))
                , h = s(u.map(m => m.loadProfilesTime));
            r.push({
                FORMAT: c,
                COUNT: u.length,
                "AVG LOAD TIME": d.avg,
                "AVG RENDER TIME": f.avg,
                "AVG LOAD PROFILES TIME": h.avg
            })
        }
        const o = s(e.map(c => c.loadTime))
            , a = s(e.map(c => c.renderTime))
            , i = s(e.map(c => c.loadProfilesTime));
        r.push({
            FORMAT: "TOTAL",
            COUNT: e.length,
            "AVG LOAD TIME": o.avg,
            "AVG RENDER TIME": a.avg,
            "AVG LOAD PROFILES TIME": i.avg
        }),
            console.table(r)
    }
    canLoad(e) {
        return w2(e, Ey.supportedExtensions)
    }
    async load(e, s, n) {
        s.performanceCounters.beginLogicalBlock("load-raw-pipeline"),
        this.highlightsReconPass || (this.highlightsReconPass = new l6t(s,"highlights-reconstruction")),
        this.demosaicRcdPass || (this.demosaicRcdPass = new E6t(s,"demosaic-rcd")),
        this.demosaicXtransPass || (this.demosaicXtransPass = new P6t(s,"demosaic-xtrans"));
        const r = this.rawConnection.proxy
            , o = this.rawMetadataConnection?.proxy;
        if (!r)
            return;
        let a = n.metadata;
        a || (a = await o?.getMetadata(e)),
            n.metadata = a,
            n.signal?.throwIfAborted(),
            n.signal?.addEventListener("abort", () => {
                    `${s.label}`,
                        n.photoId,
                        r.cancelLoading()
                }
            );
        const i = n.adjustments ?? e0(e);
        `${s.label}`,
            n.photoId;
        const c = await r.loadRaw(e, {
            metadata: a
        });
        `${s.label}`,
            n.photoId,
            `${c.decodeTime ?? 0}`,
            s.performanceCounters.add("decodeSourceFile", c.decodeTime ?? 0, 0),
            n.signal?.throwIfAborted();
        let u = performance.now();
        const d = this.getCameraID(c, n.metadata);
        c.skip_profile || (c.profile = await this.loadCameraProfile(d),
        c.profile && (`${d}`,
            c.profile)),
            c.lensProfile = await _6t(c, n.metadata),
        c.lensProfile && c.lensProfile,
            u = performance.now() - u,
            n.signal?.throwIfAborted(),
            `${s.label}`,
            n.photoId;
        const f = performance.now();
        this.loadRawData(s, c, {
            ...n,
            enableHalfResolution: n.enableHalfResolution,
            adjustments: i
        }),
            this.measurements.push({
                format: Af(e).toLowerCase(),
                loadTime: c.decodeTime ?? 0,
                renderTime: performance.now() - f,
                loadProfilesTime: u
            }),
            s.performanceCounters.endLogicalBlock("load-raw-pipeline")
    }
    loadRawData(e, s, n) {
        const r = n.enableDenoise ?? !0
            , o = n.adjustments
            , a = this.getCroppedDimensions(s)
            , i = this.getOrientation(s)
            , c = this.getEmbeddedProfile(s, n)
            , u = 0
            , d = this.createRawTexture(e, s)
            , {texture: f, whiteBalance: h} = this.renderRawTexture(e, s, d, n);
        c && (o.colorProfile = C0.Embedded),
        r && (e.performanceCounters.begin("renderDenoise"),
            _Y(e, {
                iso: n.metadata?.iso ?? 400,
                shutterSpeed: n.metadata?.shutterSpeed ?? .01,
                isJpeg: !1
            }),
            e.performanceCounters.end("renderDenoise")),
            e.denoiseEnabled = r,
            e.photo = new V9({
                id: n.photoId,
                type: "raw",
                texture: f,
                whiteBalance: h,
                adjustments: o,
                orientation: i[0],
                exposureBias: u,
                originalImageSize: [a.width, a.height]
            }),
            e.profileManager.setProfile(e.photo, s.profile, s.profile_tone_curve),
            e.profileManager.setLensProfile(s.lensProfile),
            e.profileManager.setEmbeddedProfile(c ?? null)
    }
    createRawTexture(e, s) {
        e.sourceTexture = e.sourceTexture ?? e.backend.createTexture({
            label: "renderer.sourceTexture",
            min: "nearest",
            mag: "nearest"
        });
        const n = s.bytes_per_pixel === 12
            , r = n ? new Uint32Array(s.raw_data,s.raw_data_offset,s.raw_data_length >> 2) : new Uint16Array(s.raw_data,s.raw_data_offset,s.raw_data_length >> 1)
            , o = this.getCroppedDimensions(s)
            , a = s.is_cfa ? s.padding : 0
            , c = (s.pitch_in_bytes + a) / s.bytes_per_pixel
            , u = o.y
            , d = o.height
            , f = o.width + o.x;
        return s.is_cfa ? e.sourceTexture.update({
            format: s.components_per_pixel === 2 ? "rg16uint" : "r16uint",
            width: f,
            height: d,
            data: r,
            skipRows: u,
            rowLength: c
        }) : e.sourceTexture.update({
            format: n ? "rgb32uint" : "rgb16uint",
            width: f,
            height: d,
            data: r,
            skipRows: u,
            rowLength: c
        }),
            e.sourceTexture
    }
    renderRawTexture(e, s, n, r) {
        const o = this.getBlackWhiteLevels(s)
            , a = this.getCroppedDimensions(s)
            , c = this.getEmbeddedProfile(s, r) ? new u6t(s) : new d6t(s)
            , u = c.camToPCS
            , d = c.whiteBalanceMultipliers
            , f = c.whiteBalance.temperature
            , h = c.whiteBalance.tint
            , m = r.enableHalfResolution && s.is_cfa
            , g = s.cfa_height === 6 && s.cfa_width === 6;
        let x = a.width
            , v = a.height;
        if (m && (g ? (x = Math.floor(x / 3),
            v = Math.floor(v / 3)) : (x = Math.floor(x / 2),
            v = Math.floor(v / 2))),
            e.inputTexture.update({
                format: e.backend.textureFormat,
                data: null,
                width: x,
                height: v
            }),
            e.originalDualBuffers.readBuffer.update({
                format: e.backend.textureFormat,
                data: null,
                width: x,
                height: v
            }),
            e.originalDualBuffers.writeBuffer.update({
                format: e.backend.textureFormat,
                data: null,
                width: x,
                height: v
            }),
            e.originalDualBuffers.writeBuffer.bindFramebuffer(),
            n.bind(0),
            !s.is_cfa)
            e.performanceCounters.begin("renderDemosaicedRaw"),
                e.backend.shaders.raw.render({
                    source: 0,
                    offset: [a.x, 0],
                    wbCoeffs: d,
                    blackLevel: o[0],
                    whitePoint: o[1]
                }),
                e.performanceCounters.end("renderDemosaicedRaw");
        else if (m) {
            if (e.performanceCounters.begin("halfSizeDemosaicAndRenderRaw"),
                g) {
                const b = this.getFujiMultipliers(s, [3 + a.x, a.y]);
                e.backend.shaders.demosaicHalfXTrans.render({
                    source: 0,
                    offset: [a.x, 0],
                    redMultiplierA: b.a.r,
                    greenMultiplierA: b.a.g,
                    blueMultiplierA: b.a.b,
                    redMultiplierB: b.b.r,
                    greenMultiplierB: b.b.g,
                    blueMultiplierB: b.b.b,
                    wbCoeffs: d,
                    blackLevel: o[0],
                    whitePoint: o[1]
                })
            } else {
                const b = this.getChannelMultipliers(s);
                e.backend.shaders.demosaicHalf.render({
                    source: 0,
                    offset: [a.x, 0],
                    redMultiplier: b.r,
                    greenMultiplier: b.g,
                    blueMultiplier: b.b,
                    wbCoeffs: d,
                    blackLevel: o[0],
                    whitePoint: o[1]
                })
            }
            e.performanceCounters.end("halfSizeDemosaicAndRenderRaw")
        } else {
            if (e.performanceCounters.begin(`fullSizeDemosaicAndRenderRaw-${x}x${v}`),
                g)
                this.demosaicXtransPass?.render(n, {
                    croppedOffset: [a.x, a.y],
                    outputWidth: x,
                    outputHeight: v,
                    whiteBalanceMultipliers: d,
                    levels: o,
                    cfaArray: Array.from(s.cfa_array),
                    fastMode: !0
                });
            else {
                if (a.x % 2 != 0 || a.y % 2 != 0) {
                    const b = new Error("Cropped dimensions are not even for RCD demosaicing, cfaArray needs adjustment.");
                    console.error(b),
                        Wt(b)
                }
                this.demosaicRcdPass?.render(n, {
                    offset: [a.x, 0],
                    outputWidth: x,
                    outputHeight: v,
                    whiteBalanceMultipliers: d,
                    levels: o,
                    cfaArray: Array.from(s.cfa_array)
                })
            }
            e.performanceCounters.end(`fullSizeDemosaicAndRenderRaw-${x}x${v}`)
        }
        return e.performanceCounters.begin("renderHighlightsReconstruction"),
            this.highlightsReconPass?.render(e.originalDualBuffers.writeBuffer, e.inputTexture, {
                wbCoeffs: d,
                camToXYZ: u,
                computeChrominan: !1
            }),
            e.performanceCounters.end("renderHighlightsReconstruction"),
            e.inputTexture.generateMipmap(),
            e.sourceTexture?.delete(),
            e.sourceTexture = null,
            e.originalDualBuffers.reset(),
            {
                texture: e.inputTexture,
                whiteBalance: {
                    asShotTemperature: f,
                    asShotTint: h
                }
            }
    }
    getFujiMultipliers(e, s) {
        const n = new Array(e.cfa_array.length)
            , r = l( (d, f, h) => (f = (f % 6 + 6) % 6,
            h = (h % 6 + 6) % 6,
        d.cfa_array[f + h * 6] || 0), "getCFAColor");
        for (let d = 0; d < 6; ++d)
            for (let f = 0; f < 6; ++f) {
                const h = f * 6 + d;
                n[h] = r(e, d + s[0], f + s[1])
            }
        const o = [0, 0, 0, 0, 0, 0, 0, 0, 0]
            , a = {
            a: {
                r: o.slice(),
                g: o.slice(),
                b: o.slice()
            },
            b: {
                r: o.slice(),
                g: o.slice(),
                b: o.slice()
            }
        }
            , i = [0, 1, 2, 6, 7, 8, 12, 13, 14]
            , c = [3, 4, 5, 9, 10, 11, 15, 16, 17]
            , u = l( (d, f) => {
                const h = []
                    , m = []
                    , g = [];
                f.forEach( (x, v) => {
                        switch (n[x]) {
                            case 0:
                                h.push(v);
                                break;
                            case 1:
                                m.push(v);
                                break;
                            case 2:
                                g.push(v);
                                break
                        }
                    }
                ),
                    h.forEach(x => {
                            d.r[x] = 1 / h.length
                        }
                    ),
                    m.forEach(x => {
                            d.g[x] = 1 / m.length
                        }
                    ),
                    g.forEach(x => {
                            d.b[x] = 1 / g.length
                        }
                    )
            }
            , "computeMultipliers");
        return u(a.a, i),
            u(a.b, c),
            a
    }
    getChannelMultipliers(e) {
        switch (e.cfa_array?.indexOf(0)) {
            case 0:
                return {
                    r: [1, 0, 0, 0],
                    g: [0, .5, .5, 0],
                    b: [0, 0, 0, 1]
                };
            case 1:
                return {
                    r: [0, 1, 0, 0],
                    g: [0, 0, .5, .5],
                    b: [1, 0, 0, 0]
                };
            case 2:
                return {
                    r: [0, 0, 1, 0],
                    g: [.5, 0, 0, .5],
                    b: [0, 1, 0, 0]
                };
            default:
                return {
                    r: [0, 0, 0, 1],
                    g: [0, .5, .5, 0],
                    b: [1, 0, 0, 0]
                }
        }
    }
    getBlackWhiteLevels(e) {
        const s = e.white_point;
        let n = e.black_level;
        return (n < 0 || n !== (e.raw_black_level_separate[0] || n)) && (n = (e.raw_black_level_separate[0] + e.raw_black_level_separate[1] + e.raw_black_level_separate[2] + e.raw_black_level_separate[3]) / 4),
            [n, s]
    }
    getCroppedDimensions(e) {
        let {crop_x: s, crop_y: n, crop_width: r, crop_height: o} = e;
        const a = 0;
        return s = s + a,
            n = n + a,
            r = r - a,
            o = o - a,
            {
                x: s,
                y: n,
                width: r,
                height: o
            }
    }
    getEmbeddedProfile(e, s) {
        if (e.profile_name !== "Apple Embedded Color Profile")
            return;
        let n = s.metadata?.auxiliaryData?.baselineExposure ?? 0;
        return e.profile_gain_table_map && s.metadata?.fNumber && (n -= Math.min(s.metadata?.fNumber ?? 0, 1.9)),
            {
                name: e.profile_name,
                baselineExposure: n,
                gainTableMap: e.profile_gain_table_map
            }
    }
    getOrientation(e) {
        switch (e.orientation) {
            case 1:
                return [0, 1, 1];
            case 2:
                return [0, -1, 1];
            case 3:
                return [2, 1, 1];
            case 4:
                return [0, 1, -1];
            case 5:
                return [1, -1, 1];
            case 6:
                return [1, 1, 1];
            case 7:
                return [-1, -1, 1];
            case 8:
                return [-1, 1, 1];
            default:
                return [0, 1, 1]
        }
    }
    getCameraID(e, s) {
        const n = e.camera_maker.split(" ")[0] ?? "";
        if (n === "Apple")
            return p6t(e.camera_model, s);
        const r = m6t(e.camera_model);
        return r.startsWith(n) ? r : `${n} ${r}`
    }
    async loadCameraProfile(e) {
        if (this.profileCache.has(e))
            return this.profileCache.get(e);
        try {
            const n = Object.assign({
                "/assets/camera-profiles/CANON EOS 1000D.json": RY,
                "/assets/camera-profiles/CANON EOS 100D.json": PY,
                "/assets/camera-profiles/CANON EOS 10D.json": kY,
                "/assets/camera-profiles/CANON EOS 1100D.json": MY,
                "/assets/camera-profiles/CANON EOS 1200D.json": TY,
                "/assets/camera-profiles/CANON EOS 1300D.json": jY,
                "/assets/camera-profiles/CANON EOS 1500D.json": DY,
                "/assets/camera-profiles/CANON EOS 200D.json": LY,
                "/assets/camera-profiles/CANON EOS 20D.json": OY,
                "/assets/camera-profiles/CANON EOS 20DA.json": FY,
                "/assets/camera-profiles/CANON EOS 250D.json": $Y,
                "/assets/camera-profiles/CANON EOS 3000D.json": BY,
                "/assets/camera-profiles/CANON EOS 300D.json": VY,
                "/assets/camera-profiles/CANON EOS 30D.json": HY,
                "/assets/camera-profiles/CANON EOS 350D.json": zY,
                "/assets/camera-profiles/CANON EOS 400D.json": GY,
                "/assets/camera-profiles/CANON EOS 40D.json": UY,
                "/assets/camera-profiles/CANON EOS 450D.json": WY,
                "/assets/camera-profiles/CANON EOS 500D.json": XY,
                "/assets/camera-profiles/CANON EOS 50D.json": ZY,
                "/assets/camera-profiles/CANON EOS 550D.json": YY,
                "/assets/camera-profiles/CANON EOS 5D MARK II.json": KY,
                "/assets/camera-profiles/CANON EOS 5D MARK III.json": qY,
                "/assets/camera-profiles/CANON EOS 5D MARK IV.json": QY,
                "/assets/camera-profiles/CANON EOS 5D.json": JY,
                "/assets/camera-profiles/CANON EOS 5DS R.json": eK,
                "/assets/camera-profiles/CANON EOS 5DS.json": tK,
                "/assets/camera-profiles/CANON EOS 600D.json": sK,
                "/assets/camera-profiles/CANON EOS 60D.json": nK,
                "/assets/camera-profiles/CANON EOS 60DA.json": rK,
                "/assets/camera-profiles/CANON EOS 650D.json": oK,
                "/assets/camera-profiles/CANON EOS 6D MARK II.json": aK,
                "/assets/camera-profiles/CANON EOS 6D.json": iK,
                "/assets/camera-profiles/CANON EOS 700D.json": cK,
                "/assets/camera-profiles/CANON EOS 70D.json": lK,
                "/assets/camera-profiles/CANON EOS 750D.json": uK,
                "/assets/camera-profiles/CANON EOS 760D.json": dK,
                "/assets/camera-profiles/CANON EOS 77D.json": fK,
                "/assets/camera-profiles/CANON EOS 7D MARK II.json": hK,
                "/assets/camera-profiles/CANON EOS 7D.json": pK,
                "/assets/camera-profiles/CANON EOS 800D.json": mK,
                "/assets/camera-profiles/CANON EOS 80D.json": gK,
                "/assets/camera-profiles/CANON EOS 850D.json": xK,
                "/assets/camera-profiles/CANON EOS 90D.json": vK,
                "/assets/camera-profiles/CANON EOS D30.json": bK,
                "/assets/camera-profiles/CANON EOS D60.json": yK,
                "/assets/camera-profiles/CANON EOS M.json": CK,
                "/assets/camera-profiles/CANON EOS M10.json": wK,
                "/assets/camera-profiles/CANON EOS M100.json": AK,
                "/assets/camera-profiles/CANON EOS M2.json": IK,
                "/assets/camera-profiles/CANON EOS M200.json": SK,
                "/assets/camera-profiles/CANON EOS M3.json": _K,
                "/assets/camera-profiles/CANON EOS M5.json": EK,
                "/assets/camera-profiles/CANON EOS M50 MARK II.json": NK,
                "/assets/camera-profiles/CANON EOS M50.json": RK,
                "/assets/camera-profiles/CANON EOS M6 MARK II.json": PK,
                "/assets/camera-profiles/CANON EOS M6.json": kK,
                "/assets/camera-profiles/CANON EOS R.json": MK,
                "/assets/camera-profiles/CANON EOS R10.json": TK,
                "/assets/camera-profiles/CANON EOS R100.json": jK,
                "/assets/camera-profiles/CANON EOS R3.json": DK,
                "/assets/camera-profiles/CANON EOS R5 C.json": LK,
                "/assets/camera-profiles/CANON EOS R5.json": OK,
                "/assets/camera-profiles/CANON EOS R50.json": FK,
                "/assets/camera-profiles/CANON EOS R6 MARK II.json": $K,
                "/assets/camera-profiles/CANON EOS R6.json": BK,
                "/assets/camera-profiles/CANON EOS R7.json": VK,
                "/assets/camera-profiles/CANON EOS R8.json": HK,
                "/assets/camera-profiles/CANON EOS RA.json": zK,
                "/assets/camera-profiles/CANON EOS RP.json": GK,
                "/assets/camera-profiles/CANON EOS-1D C.json": UK,
                "/assets/camera-profiles/CANON EOS-1D MARK II N.json": WK,
                "/assets/camera-profiles/CANON EOS-1D MARK II.json": XK,
                "/assets/camera-profiles/CANON EOS-1D MARK III.json": ZK,
                "/assets/camera-profiles/CANON EOS-1D MARK IV.json": YK,
                "/assets/camera-profiles/CANON EOS-1D X MARK II.json": KK,
                "/assets/camera-profiles/CANON EOS-1D X MARK III.json": qK,
                "/assets/camera-profiles/CANON EOS-1D X.json": QK,
                "/assets/camera-profiles/CANON EOS-1D.json": JK,
                "/assets/camera-profiles/CANON EOS-1DS MARK II.json": eq,
                "/assets/camera-profiles/CANON EOS-1DS MARK III.json": tq,
                "/assets/camera-profiles/CANON EOS-1DS.json": sq,
                "/assets/camera-profiles/CANON POWERSHOT G1 X MARK II.json": nq,
                "/assets/camera-profiles/CANON POWERSHOT G1 X MARK III.json": rq,
                "/assets/camera-profiles/CANON POWERSHOT G1 X.json": oq,
                "/assets/camera-profiles/CANON POWERSHOT G10.json": aq,
                "/assets/camera-profiles/CANON POWERSHOT G11.json": iq,
                "/assets/camera-profiles/CANON POWERSHOT G12.json": cq,
                "/assets/camera-profiles/CANON POWERSHOT G15.json": lq,
                "/assets/camera-profiles/CANON POWERSHOT G16.json": uq,
                "/assets/camera-profiles/CANON POWERSHOT G2.json": dq,
                "/assets/camera-profiles/CANON POWERSHOT G3 X.json": fq,
                "/assets/camera-profiles/CANON POWERSHOT G3.json": hq,
                "/assets/camera-profiles/CANON POWERSHOT G5 X MARK II.json": pq,
                "/assets/camera-profiles/CANON POWERSHOT G5 X.json": mq,
                "/assets/camera-profiles/CANON POWERSHOT G5.json": gq,
                "/assets/camera-profiles/CANON POWERSHOT G6.json": xq,
                "/assets/camera-profiles/CANON POWERSHOT G7 X MARK II.json": vq,
                "/assets/camera-profiles/CANON POWERSHOT G7 X MARK III.json": bq,
                "/assets/camera-profiles/CANON POWERSHOT G7 X.json": yq,
                "/assets/camera-profiles/CANON POWERSHOT G9 X MARK II.json": Cq,
                "/assets/camera-profiles/CANON POWERSHOT G9 X.json": wq,
                "/assets/camera-profiles/CANON POWERSHOT G9.json": Aq,
                "/assets/camera-profiles/CANON POWERSHOT PRO1.json": Iq,
                "/assets/camera-profiles/CANON POWERSHOT S100.json": Sq,
                "/assets/camera-profiles/CANON POWERSHOT S110.json": _q,
                "/assets/camera-profiles/CANON POWERSHOT S120.json": Eq,
                "/assets/camera-profiles/CANON POWERSHOT S30.json": Nq,
                "/assets/camera-profiles/CANON POWERSHOT S40.json": Rq,
                "/assets/camera-profiles/CANON POWERSHOT S45.json": Pq,
                "/assets/camera-profiles/CANON POWERSHOT S50.json": kq,
                "/assets/camera-profiles/CANON POWERSHOT S60.json": Mq,
                "/assets/camera-profiles/CANON POWERSHOT S70.json": Tq,
                "/assets/camera-profiles/CANON POWERSHOT S90.json": jq,
                "/assets/camera-profiles/CANON POWERSHOT S95.json": Dq,
                "/assets/camera-profiles/CANON POWERSHOT SX1 IS.json": Lq,
                "/assets/camera-profiles/CANON POWERSHOT SX50 HS.json": Oq,
                "/assets/camera-profiles/CANON POWERSHOT SX60 HS.json": Fq,
                "/assets/camera-profiles/CANON POWERSHOT SX70 HS.json": $q,
                "/assets/camera-profiles/CASIO EX-F1.json": Bq,
                "/assets/camera-profiles/CASIO EX-FH100.json": Vq,
                "/assets/camera-profiles/CONTAX N DIGITAL.json": Hq,
                "/assets/camera-profiles/DJI FC3411.json": zq,
                "/assets/camera-profiles/DJI FC3582.json": Gq,
                "/assets/camera-profiles/DJI FC4170.json": Uq,
                "/assets/camera-profiles/DJI FC4370 MAVIC3PRO.json": Wq,
                "/assets/camera-profiles/DJI FC4382 MAVIC3PRO.json": Xq,
                "/assets/camera-profiles/DJI FC7303.json": Zq,
                "/assets/camera-profiles/DJI FC8282 AIR3.json": Yq,
                "/assets/camera-profiles/DJI FC8284 AIR3.json": Kq,
                "/assets/camera-profiles/DJI FC8482 MINI4 PRO.json": qq,
                "/assets/camera-profiles/DJI PP-101 OSMOPOCKET3.json": Qq,
                "/assets/camera-profiles/DXO ONE.json": Jq,
                "/assets/camera-profiles/EPSON R-D1.json": eQ,
                "/assets/camera-profiles/EPSON R-D1S.json": tQ,
                "/assets/camera-profiles/EPSON R-D1X.json": sQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX E550.json": nQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX E900.json": rQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX F550EXR.json": oQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX F600EXR.json": aQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX F700.json": iQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX F710.json": cQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX F770EXR.json": lQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX F800EXR.json": uQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX F810.json": dQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX F900EXR.json": fQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX HS10 HS11.json": hQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX HS20EXR.json": pQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX HS30EXR.json": mQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX HS50EXR.json": gQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX S1.json": xQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX S100FS.json": vQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX S200EXR.json": bQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX S20PRO.json": yQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX S2PRO.json": CQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX S3PRO.json": wQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX S5000.json": AQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX S5100.json": IQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX S5200.json": SQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX S5500.json": _Q,
                "/assets/camera-profiles/FUJIFILM FINEPIX S5PRO.json": EQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX S6000FD.json": NQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX S7000.json": RQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX S9000.json": PQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX S9100.json": kQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX SL1000.json": MQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX X10.json": TQ,
                "/assets/camera-profiles/FUJIFILM FINEPIX X100.json": jQ,
                "/assets/camera-profiles/FUJIFILM GFX 100 II.json": DQ,
                "/assets/camera-profiles/FUJIFILM GFX 100 IR.json": LQ,
                "/assets/camera-profiles/FUJIFILM GFX 100.json": OQ,
                "/assets/camera-profiles/FUJIFILM GFX 100S.json": FQ,
                "/assets/camera-profiles/FUJIFILM GFX 50R.json": $Q,
                "/assets/camera-profiles/FUJIFILM GFX 50S II.json": BQ,
                "/assets/camera-profiles/FUJIFILM GFX 50S.json": VQ,
                "/assets/camera-profiles/FUJIFILM IS-1.json": HQ,
                "/assets/camera-profiles/FUJIFILM X-A1.json": zQ,
                "/assets/camera-profiles/FUJIFILM X-A10.json": GQ,
                "/assets/camera-profiles/FUJIFILM X-A2.json": UQ,
                "/assets/camera-profiles/FUJIFILM X-A20.json": WQ,
                "/assets/camera-profiles/FUJIFILM X-A3.json": XQ,
                "/assets/camera-profiles/FUJIFILM X-A5.json": ZQ,
                "/assets/camera-profiles/FUJIFILM X-A7.json": YQ,
                "/assets/camera-profiles/FUJIFILM X-E1.json": KQ,
                "/assets/camera-profiles/FUJIFILM X-E2.json": qQ,
                "/assets/camera-profiles/FUJIFILM X-E2S.json": QQ,
                "/assets/camera-profiles/FUJIFILM X-E3.json": JQ,
                "/assets/camera-profiles/FUJIFILM X-E4.json": eJ,
                "/assets/camera-profiles/FUJIFILM X-H1.json": tJ,
                "/assets/camera-profiles/FUJIFILM X-H2.json": sJ,
                "/assets/camera-profiles/FUJIFILM X-H2S.json": nJ,
                "/assets/camera-profiles/FUJIFILM X-M1.json": rJ,
                "/assets/camera-profiles/FUJIFILM X-PRO1.json": oJ,
                "/assets/camera-profiles/FUJIFILM X-PRO2.json": aJ,
                "/assets/camera-profiles/FUJIFILM X-PRO3.json": iJ,
                "/assets/camera-profiles/FUJIFILM X-S1.json": cJ,
                "/assets/camera-profiles/FUJIFILM X-S10.json": lJ,
                "/assets/camera-profiles/FUJIFILM X-S20.json": uJ,
                "/assets/camera-profiles/FUJIFILM X-T1 IR.json": dJ,
                "/assets/camera-profiles/FUJIFILM X-T1.json": fJ,
                "/assets/camera-profiles/FUJIFILM X-T10.json": hJ,
                "/assets/camera-profiles/FUJIFILM X-T100.json": pJ,
                "/assets/camera-profiles/FUJIFILM X-T2.json": mJ,
                "/assets/camera-profiles/FUJIFILM X-T20.json": gJ,
                "/assets/camera-profiles/FUJIFILM X-T200.json": xJ,
                "/assets/camera-profiles/FUJIFILM X-T3.json": vJ,
                "/assets/camera-profiles/FUJIFILM X-T30 II.json": bJ,
                "/assets/camera-profiles/FUJIFILM X-T30.json": yJ,
                "/assets/camera-profiles/FUJIFILM X-T4.json": CJ,
                "/assets/camera-profiles/FUJIFILM X-T5.json": wJ,
                "/assets/camera-profiles/FUJIFILM X100F.json": AJ,
                "/assets/camera-profiles/FUJIFILM X100S.json": IJ,
                "/assets/camera-profiles/FUJIFILM X100T.json": SJ,
                "/assets/camera-profiles/FUJIFILM X100V.json": _J,
                "/assets/camera-profiles/FUJIFILM X20.json": EJ,
                "/assets/camera-profiles/FUJIFILM X30.json": NJ,
                "/assets/camera-profiles/FUJIFILM X70.json": RJ,
                "/assets/camera-profiles/FUJIFILM XF1.json": PJ,
                "/assets/camera-profiles/FUJIFILM XF10.json": kJ,
                "/assets/camera-profiles/FUJIFILM XQ1.json": MJ,
                "/assets/camera-profiles/FUJIFILM XQ2.json": TJ,
                "/assets/camera-profiles/GOOGLE PIXEL 3 FRONT STANDARD CAMERA.json": jJ,
                "/assets/camera-profiles/GOOGLE PIXEL 3 FRONT WIDE CAMERA.json": DJ,
                "/assets/camera-profiles/GOOGLE PIXEL 3 REAR CAMERA.json": LJ,
                "/assets/camera-profiles/GOOGLE PIXEL 3 XL FRONT STANDARD CAMERA.json": OJ,
                "/assets/camera-profiles/GOOGLE PIXEL 3 XL FRONT WIDE CAMERA.json": FJ,
                "/assets/camera-profiles/GOOGLE PIXEL 3 XL REAR CAMERA.json": $J,
                "/assets/camera-profiles/GOOGLE PIXEL 4 FRONT CAMERA.json": BJ,
                "/assets/camera-profiles/GOOGLE PIXEL 4 REAR TELEPHOTO CAMERA.json": VJ,
                "/assets/camera-profiles/GOOGLE PIXEL 4 REAR WIDE CAMERA.json": HJ,
                "/assets/camera-profiles/GOOGLE PIXEL 4 XL FRONT CAMERA.json": zJ,
                "/assets/camera-profiles/GOOGLE PIXEL 4 XL REAR TELEPHOTO CAMERA.json": GJ,
                "/assets/camera-profiles/GOOGLE PIXEL 4 XL REAR WIDE CAMERA.json": UJ,
                "/assets/camera-profiles/GOOGLE PIXEL 4A FRONT CAMERA.json": WJ,
                "/assets/camera-profiles/GOOGLE PIXEL 4A REAR WIDE CAMERA.json": XJ,
                "/assets/camera-profiles/GOOGLE PIXEL 5 FRONT CAMERA.json": ZJ,
                "/assets/camera-profiles/GOOGLE PIXEL 5 REAR MAIN CAMERA.json": YJ,
                "/assets/camera-profiles/GOOGLE PIXEL 5 REAR ULTRA WIDE CAMERA.json": KJ,
                "/assets/camera-profiles/GOOGLE PIXEL 5A FRONT CAMERA.json": qJ,
                "/assets/camera-profiles/GOOGLE PIXEL 5A REAR MAIN CAMERA.json": QJ,
                "/assets/camera-profiles/GOOGLE PIXEL 5A REAR ULTRA WIDE CAMERA.json": JJ,
                "/assets/camera-profiles/GOOGLE PIXEL 6 FRONT CAMERA.json": eee,
                "/assets/camera-profiles/GOOGLE PIXEL 6 PRO FRONT CAMERA.json": tee,
                "/assets/camera-profiles/GOOGLE PIXEL 6 PRO REAR MAIN CAMERA.json": see,
                "/assets/camera-profiles/GOOGLE PIXEL 6 PRO REAR TELEPHOTO CAMERA.json": nee,
                "/assets/camera-profiles/GOOGLE PIXEL 6 PRO REAR ULTRAWIDE CAMERA.json": ree,
                "/assets/camera-profiles/GOOGLE PIXEL 6 REAR MAIN CAMERA.json": oee,
                "/assets/camera-profiles/GOOGLE PIXEL 6 REAR ULTRAWIDE CAMERA.json": aee,
                "/assets/camera-profiles/GOOGLE PIXEL 6A FRONT CAMERA.json": iee,
                "/assets/camera-profiles/GOOGLE PIXEL 6A REAR MAIN CAMERA.json": cee,
                "/assets/camera-profiles/GOOGLE PIXEL 6A REAR ULTRAWIDE CAMERA.json": lee,
                "/assets/camera-profiles/GOOGLE PIXEL 7 FRONT CAMERA.json": uee,
                "/assets/camera-profiles/GOOGLE PIXEL 7 PRO FRONT CAMERA.json": dee,
                "/assets/camera-profiles/GOOGLE PIXEL 7 PRO TELEPHOTO CAMERA.json": fee,
                "/assets/camera-profiles/GOOGLE PIXEL 7 PRO ULTRAWIDE CAMERA.json": hee,
                "/assets/camera-profiles/GOOGLE PIXEL 7 PRO WIDE CAMERA.json": pee,
                "/assets/camera-profiles/GOOGLE PIXEL 7 ULTRAWIDE CAMERA.json": mee,
                "/assets/camera-profiles/GOOGLE PIXEL 7 WIDE CAMERA.json": gee,
                "/assets/camera-profiles/GOOGLE PIXEL 7A FRONT CAMERA.json": xee,
                "/assets/camera-profiles/GOOGLE PIXEL 7A ULTRAWIDE CAMERA.json": vee,
                "/assets/camera-profiles/GOOGLE PIXEL 7A WIDE CAMERA.json": bee,
                "/assets/camera-profiles/GOOGLE PIXEL 8 FRONT CAMERA.json": yee,
                "/assets/camera-profiles/GOOGLE PIXEL 8 PRO FRONT CAMERA.json": Cee,
                "/assets/camera-profiles/GOOGLE PIXEL 8 PRO TELEPHOTO CAMERA.json": wee,
                "/assets/camera-profiles/GOOGLE PIXEL 8 PRO ULTRAWIDE CAMERA.json": Aee,
                "/assets/camera-profiles/GOOGLE PIXEL 8 PRO WIDE CAMERA.json": Iee,
                "/assets/camera-profiles/GOOGLE PIXEL 8 ULTRAWIDE CAMERA.json": See,
                "/assets/camera-profiles/GOOGLE PIXEL 8 WIDE CAMERA.json": _ee,
                "/assets/camera-profiles/GOOGLE PIXEL FOLD FRONT CAMERA.json": Eee,
                "/assets/camera-profiles/GOOGLE PIXEL FOLD INNER CAMERA.json": Nee,
                "/assets/camera-profiles/GOOGLE PIXEL FOLD TELEPHOTO CAMERA.json": Ree,
                "/assets/camera-profiles/GOOGLE PIXEL FOLD ULTRAWIDE CAMERA.json": Pee,
                "/assets/camera-profiles/GOOGLE PIXEL FOLD WIDE CAMERA.json": kee,
                "/assets/camera-profiles/GOPRO HERO10 BLACK.json": Mee,
                "/assets/camera-profiles/GOPRO HERO7 BLACK.json": Tee,
                "/assets/camera-profiles/GR II.json": jee,
                "/assets/camera-profiles/GR.json": Dee,
                "/assets/camera-profiles/HASSELBLAD 100-20-COATED6.json": Lee,
                "/assets/camera-profiles/HASSELBLAD 39-COATED.json": Oee,
                "/assets/camera-profiles/HASSELBLAD 50-15-COATED5.json": Fee,
                "/assets/camera-profiles/HASSELBLAD L1D-20C.json": $ee,
                "/assets/camera-profiles/HASSELBLAD L2D-20C.json": Bee,
                "/assets/camera-profiles/HMD GLOBAL NOKIA 9 PUREVIEW FRONT CAMERA.json": Vee,
                "/assets/camera-profiles/HMD GLOBAL NOKIA 9 PUREVIEW REAR CAMERA.json": Hee,
                "/assets/camera-profiles/HUAWEI HONOR 20 PRO REAR MAIN CAMERA.json": zee,
                "/assets/camera-profiles/HUAWEI HONOR 20 PRO REAR TELEPHOTO CAMERA.json": Gee,
                "/assets/camera-profiles/HUAWEI HONOR 20 PRO REAR WIDE CAMERA.json": Uee,
                "/assets/camera-profiles/HUAWEI MATE 10 PRO REAR CAMERA.json": Wee,
                "/assets/camera-profiles/HUAWEI P30 PRO REAR MAIN CAMERA.json": Xee,
                "/assets/camera-profiles/HUAWEI P30 PRO REAR TELEPHOTO CAMERA.json": Zee,
                "/assets/camera-profiles/HUAWEI P30 PRO REAR WIDE CAMERA.json": Yee,
                "/assets/camera-profiles/HUAWEI P30 REAR MAIN CAMERA.json": Kee,
                "/assets/camera-profiles/HUAWEI P30 REAR TELEPHOTO CAMERA.json": qee,
                "/assets/camera-profiles/HUAWEI P30 REAR WIDE CAMERA.json": Qee,
                "/assets/camera-profiles/HUAWEI P9 LITE.json": Jee,
                "/assets/camera-profiles/IPAD13,1 BACK CAMERA.json": ete,
                "/assets/camera-profiles/IPAD13,10 BACK CAMERA.json": tte,
                "/assets/camera-profiles/IPAD13,11 BACK CAMERA.json": ste,
                "/assets/camera-profiles/IPAD13,16 BACK CAMERA.json": nte,
                "/assets/camera-profiles/IPAD13,18 BACK CAMERA.json": rte,
                "/assets/camera-profiles/IPAD13,4 BACK CAMERA.json": ote,
                "/assets/camera-profiles/IPAD13,5 BACK CAMERA.json": ate,
                "/assets/camera-profiles/IPAD13,6 BACK CAMERA.json": ite,
                "/assets/camera-profiles/IPAD13,7 BACK CAMERA.json": cte,
                "/assets/camera-profiles/IPAD13,8 BACK CAMERA.json": lte,
                "/assets/camera-profiles/IPAD13,9 BACK CAMERA.json": ute,
                "/assets/camera-profiles/IPAD14,2 BACK CAMERA.json": dte,
                "/assets/camera-profiles/IPAD14,3 BACK CAMERA.json": fte,
                "/assets/camera-profiles/IPAD14,5 BACK CAMERA.json": hte,
                "/assets/camera-profiles/IPAD6,3 BACK CAMERA.json": pte,
                "/assets/camera-profiles/IPAD6,4 BACK CAMERA.json": mte,
                "/assets/camera-profiles/IPAD7,1 BACK CAMERA.json": gte,
                "/assets/camera-profiles/IPAD7,2 BACK CAMERA.json": xte,
                "/assets/camera-profiles/IPAD7,3 BACK CAMERA.json": vte,
                "/assets/camera-profiles/IPAD7,4 BACK CAMERA.json": bte,
                "/assets/camera-profiles/IPAD8,1 BACK CAMERA.json": yte,
                "/assets/camera-profiles/IPAD8,11 BACK CAMERA.json": Cte,
                "/assets/camera-profiles/IPAD8,2 BACK CAMERA.json": wte,
                "/assets/camera-profiles/IPAD8,3 BACK CAMERA.json": Ate,
                "/assets/camera-profiles/IPAD8,4 BACK CAMERA.json": Ite,
                "/assets/camera-profiles/IPAD8,5 BACK CAMERA.json": Ste,
                "/assets/camera-profiles/IPAD8,6 BACK CAMERA.json": _te,
                "/assets/camera-profiles/IPAD8,7 BACK CAMERA.json": Ete,
                "/assets/camera-profiles/IPAD8,8 BACK CAMERA.json": Nte,
                "/assets/camera-profiles/IPAD8,9 BACK CAMERA.json": Rte,
                "/assets/camera-profiles/IPHONE10,1 BACK CAMERA.json": Pte,
                "/assets/camera-profiles/IPHONE10,2 BACK CAMERA.json": kte,
                "/assets/camera-profiles/IPHONE10,2 BACK TELEPHOTO CAMERA.json": Mte,
                "/assets/camera-profiles/IPHONE10,3 BACK CAMERA.json": Tte,
                "/assets/camera-profiles/IPHONE10,3 BACK TELEPHOTO CAMERA.json": jte,
                "/assets/camera-profiles/IPHONE10,4 BACK CAMERA.json": Dte,
                "/assets/camera-profiles/IPHONE10,5 BACK CAMERA.json": Lte,
                "/assets/camera-profiles/IPHONE10,5 BACK TELEPHOTO CAMERA.json": Ote,
                "/assets/camera-profiles/IPHONE10,6 BACK CAMERA.json": Fte,
                "/assets/camera-profiles/IPHONE10,6 BACK TELEPHOTO CAMERA.json": $te,
                "/assets/camera-profiles/IPHONE11,2 BACK CAMERA.json": Bte,
                "/assets/camera-profiles/IPHONE11,2 BACK TELEPHOTO CAMERA.json": Vte,
                "/assets/camera-profiles/IPHONE11,4 BACK CAMERA.json": Hte,
                "/assets/camera-profiles/IPHONE11,4 BACK TELEPHOTO CAMERA.json": zte,
                "/assets/camera-profiles/IPHONE11,6 BACK CAMERA.json": Gte,
                "/assets/camera-profiles/IPHONE11,6 BACK TELEPHOTO CAMERA.json": Ute,
                "/assets/camera-profiles/IPHONE11,8 BACK CAMERA.json": Wte,
                "/assets/camera-profiles/IPHONE12,1 BACK CAMERA.json": Xte,
                "/assets/camera-profiles/IPHONE12,3 BACK CAMERA.json": Zte,
                "/assets/camera-profiles/IPHONE12,3 BACK TELEPHOTO CAMERA.json": Yte,
                "/assets/camera-profiles/IPHONE12,5 BACK CAMERA.json": Kte,
                "/assets/camera-profiles/IPHONE12,5 BACK TELEPHOTO CAMERA.json": qte,
                "/assets/camera-profiles/IPHONE12,8 BACK CAMERA.json": Qte,
                "/assets/camera-profiles/IPHONE13,1 BACK CAMERA.json": Jte,
                "/assets/camera-profiles/IPHONE13,1 BACK ULTRA WIDE CAMERA.json": e0e,
                "/assets/camera-profiles/IPHONE13,2 BACK CAMERA.json": t0e,
                "/assets/camera-profiles/IPHONE13,2 BACK ULTRA WIDE CAMERA.json": s0e,
                "/assets/camera-profiles/IPHONE13,3 BACK CAMERA.json": n0e,
                "/assets/camera-profiles/IPHONE13,3 BACK TELEPHOTO CAMERA.json": r0e,
                "/assets/camera-profiles/IPHONE13,3 BACK ULTRA WIDE CAMERA.json": o0e,
                "/assets/camera-profiles/IPHONE13,3 FRONT CAMERA.json": a0e,
                "/assets/camera-profiles/IPHONE13,4 BACK CAMERA.json": i0e,
                "/assets/camera-profiles/IPHONE13,4 BACK TELEPHOTO CAMERA.json": c0e,
                "/assets/camera-profiles/IPHONE13,4 BACK ULTRA WIDE CAMERA.json": l0e,
                "/assets/camera-profiles/IPHONE13,4 FRONT CAMERA.json": u0e,
                "/assets/camera-profiles/IPHONE14,2 BACK CAMERA.json": d0e,
                "/assets/camera-profiles/IPHONE14,2 BACK TELEPHOTO CAMERA.json": f0e,
                "/assets/camera-profiles/IPHONE14,2 BACK ULTRA WIDE CAMERA.json": h0e,
                "/assets/camera-profiles/IPHONE14,2 FRONT CAMERA.json": p0e,
                "/assets/camera-profiles/IPHONE14,3 BACK CAMERA.json": m0e,
                "/assets/camera-profiles/IPHONE14,3 BACK TELEPHOTO CAMERA.json": g0e,
                "/assets/camera-profiles/IPHONE14,3 BACK ULTRA WIDE CAMERA.json": x0e,
                "/assets/camera-profiles/IPHONE14,3 FRONT CAMERA.json": v0e,
                "/assets/camera-profiles/IPHONE14,4 BACK CAMERA.json": b0e,
                "/assets/camera-profiles/IPHONE14,4 BACK ULTRA WIDE CAMERA.json": y0e,
                "/assets/camera-profiles/IPHONE14,4 FRONT CAMERA.json": C0e,
                "/assets/camera-profiles/IPHONE14,5 BACK CAMERA.json": w0e,
                "/assets/camera-profiles/IPHONE14,5 BACK ULTRA WIDE CAMERA.json": A0e,
                "/assets/camera-profiles/IPHONE14,5 FRONT CAMERA.json": I0e,
                "/assets/camera-profiles/IPHONE14,6 BACK CAMERA.json": S0e,
                "/assets/camera-profiles/IPHONE14,6 FRONT CAMERA.json": _0e,
                "/assets/camera-profiles/IPHONE14,7 BACK CAMERA.json": E0e,
                "/assets/camera-profiles/IPHONE14,7 BACK ULTRA WIDE CAMERA.json": N0e,
                "/assets/camera-profiles/IPHONE14,7 FRONT CAMERA.json": R0e,
                "/assets/camera-profiles/IPHONE14,8 BACK CAMERA.json": P0e,
                "/assets/camera-profiles/IPHONE14,8 BACK ULTRA WIDE CAMERA.json": k0e,
                "/assets/camera-profiles/IPHONE14,8 FRONT CAMERA.json": M0e,
                "/assets/camera-profiles/IPHONE15,2 BACK CAMERA.json": T0e,
                "/assets/camera-profiles/IPHONE15,2 BACK TELEPHOTO CAMERA.json": j0e,
                "/assets/camera-profiles/IPHONE15,2 BACK ULTRA WIDE CAMERA.json": D0e,
                "/assets/camera-profiles/IPHONE15,2 FRONT CAMERA.json": L0e,
                "/assets/camera-profiles/IPHONE15,3 BACK CAMERA.json": O0e,
                "/assets/camera-profiles/IPHONE15,3 BACK TELEPHOTO CAMERA.json": F0e,
                "/assets/camera-profiles/IPHONE15,3 BACK ULTRA WIDE CAMERA.json": $0e,
                "/assets/camera-profiles/IPHONE15,3 FRONT CAMERA.json": B0e,
                "/assets/camera-profiles/IPHONE15,4 BACK CAMERA.json": V0e,
                "/assets/camera-profiles/IPHONE15,4 BACK ULTRA WIDE CAMERA.json": H0e,
                "/assets/camera-profiles/IPHONE15,4 FRONT CAMERA.json": z0e,
                "/assets/camera-profiles/IPHONE15,5 BACK CAMERA.json": G0e,
                "/assets/camera-profiles/IPHONE15,5 BACK ULTRA WIDE CAMERA.json": U0e,
                "/assets/camera-profiles/IPHONE15,5 FRONT CAMERA.json": W0e,
                "/assets/camera-profiles/IPHONE16,1 BACK CAMERA.json": X0e,
                "/assets/camera-profiles/IPHONE16,1 BACK TELEPHOTO CAMERA.json": Z0e,
                "/assets/camera-profiles/IPHONE16,1 BACK ULTRA WIDE CAMERA.json": Y0e,
                "/assets/camera-profiles/IPHONE16,1 FRONT CAMERA.json": K0e,
                "/assets/camera-profiles/IPHONE16,2 BACK CAMERA.json": q0e,
                "/assets/camera-profiles/IPHONE16,2 BACK TELEPHOTO CAMERA.json": Q0e,
                "/assets/camera-profiles/IPHONE16,2 BACK ULTRA WIDE CAMERA.json": J0e,
                "/assets/camera-profiles/IPHONE16,2 FRONT CAMERA.json": e1e,
                "/assets/camera-profiles/IPHONE8,1 BACK CAMERA.json": t1e,
                "/assets/camera-profiles/IPHONE8,2 BACK CAMERA.json": s1e,
                "/assets/camera-profiles/IPHONE8,4 BACK CAMERA.json": n1e,
                "/assets/camera-profiles/IPHONE9,1 BACK CAMERA.json": r1e,
                "/assets/camera-profiles/IPHONE9,2 BACK CAMERA.json": o1e,
                "/assets/camera-profiles/IPHONE9,2 BACK TELEPHOTO CAMERA.json": a1e,
                "/assets/camera-profiles/IPHONE9,3 BACK CAMERA.json": i1e,
                "/assets/camera-profiles/IPHONE9,4 BACK CAMERA.json": c1e,
                "/assets/camera-profiles/IPHONE9,4 BACK TELEPHOTO CAMERA.json": l1e,
                "/assets/camera-profiles/KODAK Z1015 IS.json": u1e,
                "/assets/camera-profiles/KODAK Z980.json": d1e,
                "/assets/camera-profiles/KODAK Z981.json": f1e,
                "/assets/camera-profiles/KODAK Z990.json": h1e,
                "/assets/camera-profiles/KONICA MINOLTA DIMAGE A2.json": p1e,
                "/assets/camera-profiles/KONICA MINOLTA DIMAGE A200.json": m1e,
                "/assets/camera-profiles/KONICA MINOLTA MAXXUM 5D.json": g1e,
                "/assets/camera-profiles/KONICA MINOLTA MAXXUM 7D.json": x1e,
                "/assets/camera-profiles/LEAF AFI 54S.json": v1e,
                "/assets/camera-profiles/LEAF AFI 65S.json": b1e,
                "/assets/camera-profiles/LEAF AFI 75S.json": y1e,
                "/assets/camera-profiles/LEAF APTUS 17.json": C1e,
                "/assets/camera-profiles/LEAF APTUS 22.json": w1e,
                "/assets/camera-profiles/LEAF APTUS 54S.json": A1e,
                "/assets/camera-profiles/LEAF APTUS 65.json": I1e,
                "/assets/camera-profiles/LEAF APTUS 65S.json": S1e,
                "/assets/camera-profiles/LEAF APTUS 75.json": _1e,
                "/assets/camera-profiles/LEAF APTUS 75S.json": E1e,
                "/assets/camera-profiles/LEAF C-MOST.json": N1e,
                "/assets/camera-profiles/LEAF CREDO 40.json": R1e,
                "/assets/camera-profiles/LEAF CREDO 50.json": P1e,
                "/assets/camera-profiles/LEAF CREDO 60.json": k1e,
                "/assets/camera-profiles/LEAF CREDO 80.json": M1e,
                "/assets/camera-profiles/LEAF VALEO 11.json": T1e,
                "/assets/camera-profiles/LEAF VALEO 17.json": j1e,
                "/assets/camera-profiles/LEAF VALEO 22.json": D1e,
                "/assets/camera-profiles/LEAF VALEO 6.json": L1e,
                "/assets/camera-profiles/LEICA C (TYP 112).json": O1e,
                "/assets/camera-profiles/LEICA C-LUX.json": F1e,
                "/assets/camera-profiles/LEICA CL.json": $1e,
                "/assets/camera-profiles/LEICA D-LUX (TYP 109).json": B1e,
                "/assets/camera-profiles/LEICA D-LUX 3.json": V1e,
                "/assets/camera-profiles/LEICA D-LUX 4.json": H1e,
                "/assets/camera-profiles/LEICA D-LUX 5.json": z1e,
                "/assets/camera-profiles/LEICA D-LUX 6.json": G1e,
                "/assets/camera-profiles/LEICA D-LUX 7.json": U1e,
                "/assets/camera-profiles/LEICA D-LUX2.json": W1e,
                "/assets/camera-profiles/LEICA DIGILUX 2.json": X1e,
                "/assets/camera-profiles/LEICA DIGILUX 3.json": Z1e,
                "/assets/camera-profiles/LEICA M (TYP 240).json": Y1e,
                "/assets/camera-profiles/LEICA M (TYP 262).json": K1e,
                "/assets/camera-profiles/LEICA M-D (TYP 262).json": q1e,
                "/assets/camera-profiles/LEICA M10-D.json": Q1e,
                "/assets/camera-profiles/LEICA M10-P.json": J1e,
                "/assets/camera-profiles/LEICA M10-R.json": ese,
                "/assets/camera-profiles/LEICA M10.json": tse,
                "/assets/camera-profiles/LEICA M11.json": sse,
                "/assets/camera-profiles/LEICA M8 DIGITAL CAMERA.json": nse,
                "/assets/camera-profiles/LEICA M8 DIGITAL.json": rse,
                "/assets/camera-profiles/LEICA M8.json": ose,
                "/assets/camera-profiles/LEICA Q (TYP 116).json": ase,
                "/assets/camera-profiles/LEICA Q2.json": ise,
                "/assets/camera-profiles/LEICA Q3.json": cse,
                "/assets/camera-profiles/LEICA S (TYP 006).json": lse,
                "/assets/camera-profiles/LEICA S (TYP 007).json": use,
                "/assets/camera-profiles/LEICA S2.json": dse,
                "/assets/camera-profiles/LEICA S3.json": fse,
                "/assets/camera-profiles/LEICA SL (TYP 601).json": hse,
                "/assets/camera-profiles/LEICA SL2-S.json": pse,
                "/assets/camera-profiles/LEICA SL2.json": mse,
                "/assets/camera-profiles/LEICA T (TYP 701).json": gse,
                "/assets/camera-profiles/LEICA TL.json": xse,
                "/assets/camera-profiles/LEICA TL2.json": vse,
                "/assets/camera-profiles/LEICA V-LUX (TYP 114).json": bse,
                "/assets/camera-profiles/LEICA V-LUX 1.json": yse,
                "/assets/camera-profiles/LEICA V-LUX 2.json": Cse,
                "/assets/camera-profiles/LEICA V-LUX 3.json": wse,
                "/assets/camera-profiles/LEICA V-LUX 4.json": Ase,
                "/assets/camera-profiles/LEICA V-LUX 5.json": Ise,
                "/assets/camera-profiles/LEICA X (TYP 113).json": Sse,
                "/assets/camera-profiles/LEICA X VARIO (TYP 107).json": _se,
                "/assets/camera-profiles/LEICA X-U (TYP 113).json": Ese,
                "/assets/camera-profiles/LEICA X1.json": Nse,
                "/assets/camera-profiles/LEICA X2.json": Rse,
                "/assets/camera-profiles/LG G7 THINQ FRONT CAMERA.json": Pse,
                "/assets/camera-profiles/LG G7 THINQ REAR MAIN CAMERA.json": kse,
                "/assets/camera-profiles/LG G7 THINQ REAR WIDE CAMERA.json": Mse,
                "/assets/camera-profiles/LG G8 THINQ FRONT CAMERA.json": Tse,
                "/assets/camera-profiles/LG G8 THINQ REAR MAIN CAMERA.json": jse,
                "/assets/camera-profiles/LG G8 THINQ REAR WIDE CAMERA.json": Dse,
                "/assets/camera-profiles/LG V40 THINQ FRONT STANDARD CAMERA.json": Lse,
                "/assets/camera-profiles/LG V40 THINQ REAR MAIN CAMERA.json": Ose,
                "/assets/camera-profiles/LG V40 THINQ REAR WIDE CAMERA.json": Fse,
                "/assets/camera-profiles/LG V50S THINQ FRONT CAMERA.json": $se,
                "/assets/camera-profiles/LG V50S THINQ REAR MAIN CAMERA.json": Bse,
                "/assets/camera-profiles/LG V50S THINQ REAR WIDE CAMERA.json": Vse,
                "/assets/camera-profiles/LG V60 THINQ FRONT CAMERA.json": Hse,
                "/assets/camera-profiles/LG V60 THINQ REAR MAIN CAMERA.json": zse,
                "/assets/camera-profiles/LG VELVET FRONT CAMERA.json": Gse,
                "/assets/camera-profiles/LG VELVET REAR MAIN CAMERA.json": Use,
                "/assets/camera-profiles/LG VELVET REAR WIDE CAMERA.json": Wse,
                "/assets/camera-profiles/LG WING FRONT CAMERA.json": Xse,
                "/assets/camera-profiles/LG WING REAR MAIN CAMERA.json": Zse,
                "/assets/camera-profiles/LG WING REAR WIDE CAMERA.json": Yse,
                "/assets/camera-profiles/M8 DIGITAL CAMERA.json": Kse,
                "/assets/camera-profiles/M9 DIGITAL CAMERA.json": qse,
                "/assets/camera-profiles/MAMIYA M18.json": Qse,
                "/assets/camera-profiles/MAMIYA M22.json": Jse,
                "/assets/camera-profiles/MAMIYA M31.json": ene,
                "/assets/camera-profiles/MAMIYA ZD.json": tne,
                "/assets/camera-profiles/MINOLTA DIMAGE 5.json": sne,
                "/assets/camera-profiles/MINOLTA DIMAGE 7.json": nne,
                "/assets/camera-profiles/MINOLTA DIMAGE 7HI.json": rne,
                "/assets/camera-profiles/MINOLTA DIMAGE 7I.json": one,
                "/assets/camera-profiles/MINOLTA DIMAGE A1.json": ane,
                "/assets/camera-profiles/MOTO G POWER (2021) FRONT CAMERA.json": ine,
                "/assets/camera-profiles/MOTO G POWER (2021) REAR MACRO CAMERA.json": cne,
                "/assets/camera-profiles/MOTO G POWER (2021) REAR WIDE CAMERA.json": lne,
                "/assets/camera-profiles/NIKON 1 AW1.json": une,
                "/assets/camera-profiles/NIKON 1 J1.json": dne,
                "/assets/camera-profiles/NIKON 1 J2.json": fne,
                "/assets/camera-profiles/NIKON 1 J3.json": hne,
                "/assets/camera-profiles/NIKON 1 J4.json": pne,
                "/assets/camera-profiles/NIKON 1 J5.json": mne,
                "/assets/camera-profiles/NIKON 1 S1.json": gne,
                "/assets/camera-profiles/NIKON 1 S2.json": xne,
                "/assets/camera-profiles/NIKON 1 V1.json": vne,
                "/assets/camera-profiles/NIKON 1 V2.json": bne,
                "/assets/camera-profiles/NIKON 1 V3.json": yne,
                "/assets/camera-profiles/NIKON COOLPIX 5400.json": Cne,
                "/assets/camera-profiles/NIKON COOLPIX 8400.json": wne,
                "/assets/camera-profiles/NIKON COOLPIX 8700.json": Ane,
                "/assets/camera-profiles/NIKON COOLPIX 8800.json": Ine,
                "/assets/camera-profiles/NIKON COOLPIX A.json": Sne,
                "/assets/camera-profiles/NIKON COOLPIX A1000.json": _ne,
                "/assets/camera-profiles/NIKON COOLPIX B700.json": Ene,
                "/assets/camera-profiles/NIKON COOLPIX P1000.json": Nne,
                "/assets/camera-profiles/NIKON COOLPIX P330.json": Rne,
                "/assets/camera-profiles/NIKON COOLPIX P340.json": Pne,
                "/assets/camera-profiles/NIKON COOLPIX P6000.json": kne,
                "/assets/camera-profiles/NIKON COOLPIX P7000.json": Mne,
                "/assets/camera-profiles/NIKON COOLPIX P7100.json": Tne,
                "/assets/camera-profiles/NIKON COOLPIX P7700.json": jne,
                "/assets/camera-profiles/NIKON COOLPIX P7800.json": Dne,
                "/assets/camera-profiles/NIKON COOLPIX P950.json": Lne,
                "/assets/camera-profiles/NIKON D1.json": One,
                "/assets/camera-profiles/NIKON D100.json": Fne,
                "/assets/camera-profiles/NIKON D1H.json": $ne,
                "/assets/camera-profiles/NIKON D1X.json": Bne,
                "/assets/camera-profiles/NIKON D200.json": Vne,
                "/assets/camera-profiles/NIKON D2H.json": Hne,
                "/assets/camera-profiles/NIKON D2HS.json": zne,
                "/assets/camera-profiles/NIKON D2X.json": Gne,
                "/assets/camera-profiles/NIKON D2XS.json": Une,
                "/assets/camera-profiles/NIKON D3.json": Wne,
                "/assets/camera-profiles/NIKON D300.json": Xne,
                "/assets/camera-profiles/NIKON D3000.json": Zne,
                "/assets/camera-profiles/NIKON D300S.json": Yne,
                "/assets/camera-profiles/NIKON D3100.json": Kne,
                "/assets/camera-profiles/NIKON D3200.json": qne,
                "/assets/camera-profiles/NIKON D3300.json": Qne,
                "/assets/camera-profiles/NIKON D3400.json": Jne,
                "/assets/camera-profiles/NIKON D3500.json": ere,
                "/assets/camera-profiles/NIKON D3S.json": tre,
                "/assets/camera-profiles/NIKON D3X.json": sre,
                "/assets/camera-profiles/NIKON D4.json": nre,
                "/assets/camera-profiles/NIKON D40.json": rre,
                "/assets/camera-profiles/NIKON D40X.json": ore,
                "/assets/camera-profiles/NIKON D4S.json": are,
                "/assets/camera-profiles/NIKON D5.json": ire,
                "/assets/camera-profiles/NIKON D50.json": cre,
                "/assets/camera-profiles/NIKON D500.json": lre,
                "/assets/camera-profiles/NIKON D5000.json": ure,
                "/assets/camera-profiles/NIKON D5100.json": dre,
                "/assets/camera-profiles/NIKON D5200.json": fre,
                "/assets/camera-profiles/NIKON D5300.json": hre,
                "/assets/camera-profiles/NIKON D5500.json": pre,
                "/assets/camera-profiles/NIKON D5600.json": mre,
                "/assets/camera-profiles/NIKON D6.json": gre,
                "/assets/camera-profiles/NIKON D60.json": xre,
                "/assets/camera-profiles/NIKON D600.json": vre,
                "/assets/camera-profiles/NIKON D610.json": bre,
                "/assets/camera-profiles/NIKON D70.json": yre,
                "/assets/camera-profiles/NIKON D700.json": Cre,
                "/assets/camera-profiles/NIKON D7000.json": wre,
                "/assets/camera-profiles/NIKON D70S.json": Are,
                "/assets/camera-profiles/NIKON D7100.json": Ire,
                "/assets/camera-profiles/NIKON D7200.json": Sre,
                "/assets/camera-profiles/NIKON D750.json": _re,
                "/assets/camera-profiles/NIKON D7500.json": Ere,
                "/assets/camera-profiles/NIKON D780.json": Nre,
                "/assets/camera-profiles/NIKON D80.json": Rre,
                "/assets/camera-profiles/NIKON D800.json": Pre,
                "/assets/camera-profiles/NIKON D800E.json": kre,
                "/assets/camera-profiles/NIKON D810.json": Mre,
                "/assets/camera-profiles/NIKON D810A.json": Tre,
                "/assets/camera-profiles/NIKON D850.json": jre,
                "/assets/camera-profiles/NIKON D90.json": Dre,
                "/assets/camera-profiles/NIKON DF.json": Lre,
                "/assets/camera-profiles/NIKON Z 30.json": Ore,
                "/assets/camera-profiles/NIKON Z 5.json": Fre,
                "/assets/camera-profiles/NIKON Z 50.json": $re,
                "/assets/camera-profiles/NIKON Z 6 2.json": Bre,
                "/assets/camera-profiles/NIKON Z 6.json": Vre,
                "/assets/camera-profiles/NIKON Z 7 2.json": Hre,
                "/assets/camera-profiles/NIKON Z 7.json": zre,
                "/assets/camera-profiles/NIKON Z 8.json": Gre,
                "/assets/camera-profiles/NIKON Z 9.json": Ure,
                "/assets/camera-profiles/NIKON Z F.json": Wre,
                "/assets/camera-profiles/NIKON Z FC.json": Xre,
                "/assets/camera-profiles/OLYMPUS AIR A01.json": Zre,
                "/assets/camera-profiles/OLYMPUS C-5050Z.json": Yre,
                "/assets/camera-profiles/OLYMPUS C-5060WZ.json": Kre,
                "/assets/camera-profiles/OLYMPUS C-7000Z.json": qre,
                "/assets/camera-profiles/OLYMPUS C-7070WZ.json": Qre,
                "/assets/camera-profiles/OLYMPUS C-8080WZ.json": Jre,
                "/assets/camera-profiles/OLYMPUS E-1.json": eoe,
                "/assets/camera-profiles/OLYMPUS E-10.json": toe,
                "/assets/camera-profiles/OLYMPUS E-20.json": soe,
                "/assets/camera-profiles/OLYMPUS E-3.json": noe,
                "/assets/camera-profiles/OLYMPUS E-30.json": roe,
                "/assets/camera-profiles/OLYMPUS E-300.json": ooe,
                "/assets/camera-profiles/OLYMPUS E-330.json": aoe,
                "/assets/camera-profiles/OLYMPUS E-400.json": ioe,
                "/assets/camera-profiles/OLYMPUS E-410.json": coe,
                "/assets/camera-profiles/OLYMPUS E-420.json": loe,
                "/assets/camera-profiles/OLYMPUS E-450.json": uoe,
                "/assets/camera-profiles/OLYMPUS E-5.json": doe,
                "/assets/camera-profiles/OLYMPUS E-500.json": foe,
                "/assets/camera-profiles/OLYMPUS E-510.json": hoe,
                "/assets/camera-profiles/OLYMPUS E-520.json": poe,
                "/assets/camera-profiles/OLYMPUS E-620.json": moe,
                "/assets/camera-profiles/OLYMPUS E-M1 MARK II.json": goe,
                "/assets/camera-profiles/OLYMPUS E-M1 MARK III.json": xoe,
                "/assets/camera-profiles/OLYMPUS E-M1.json": voe,
                "/assets/camera-profiles/OLYMPUS E-M10 MARK II.json": boe,
                "/assets/camera-profiles/OLYMPUS E-M10 MARK III.json": yoe,
                "/assets/camera-profiles/OLYMPUS E-M10 MARK IV.json": Coe,
                "/assets/camera-profiles/OLYMPUS E-M10.json": woe,
                "/assets/camera-profiles/OLYMPUS E-M1X.json": Aoe,
                "/assets/camera-profiles/OLYMPUS E-M5 MARK II.json": Ioe,
                "/assets/camera-profiles/OLYMPUS E-M5 MARK III.json": Soe,
                "/assets/camera-profiles/OLYMPUS E-M5.json": _oe,
                "/assets/camera-profiles/OLYMPUS E-P1.json": Eoe,
                "/assets/camera-profiles/OLYMPUS E-P2.json": Noe,
                "/assets/camera-profiles/OLYMPUS E-P3.json": Roe,
                "/assets/camera-profiles/OLYMPUS E-P5.json": Poe,
                "/assets/camera-profiles/OLYMPUS E-P7.json": koe,
                "/assets/camera-profiles/OLYMPUS E-PL1.json": Moe,
                "/assets/camera-profiles/OLYMPUS E-PL10.json": Toe,
                "/assets/camera-profiles/OLYMPUS E-PL1S.json": joe,
                "/assets/camera-profiles/OLYMPUS E-PL2.json": Doe,
                "/assets/camera-profiles/OLYMPUS E-PL3.json": Loe,
                "/assets/camera-profiles/OLYMPUS E-PL5.json": Ooe,
                "/assets/camera-profiles/OLYMPUS E-PL6.json": Foe,
                "/assets/camera-profiles/OLYMPUS E-PL7.json": $oe,
                "/assets/camera-profiles/OLYMPUS E-PL8.json": Boe,
                "/assets/camera-profiles/OLYMPUS E-PL9.json": Voe,
                "/assets/camera-profiles/OLYMPUS E-PM1.json": Hoe,
                "/assets/camera-profiles/OLYMPUS E-PM2.json": zoe,
                "/assets/camera-profiles/OLYMPUS PEN-F.json": Goe,
                "/assets/camera-profiles/OLYMPUS SH-2.json": Uoe,
                "/assets/camera-profiles/OLYMPUS SH-3.json": Woe,
                "/assets/camera-profiles/OLYMPUS SP-310.json": Xoe,
                "/assets/camera-profiles/OLYMPUS SP-320.json": Zoe,
                "/assets/camera-profiles/OLYMPUS SP-350.json": Yoe,
                "/assets/camera-profiles/OLYMPUS SP-500UZ.json": Koe,
                "/assets/camera-profiles/OLYMPUS SP-510UZ.json": qoe,
                "/assets/camera-profiles/OLYMPUS SP-550UZ.json": Qoe,
                "/assets/camera-profiles/OLYMPUS SP-560UZ.json": Joe,
                "/assets/camera-profiles/OLYMPUS SP-565UZ.json": e2e,
                "/assets/camera-profiles/OLYMPUS SP-570UZ.json": t2e,
                "/assets/camera-profiles/OLYMPUS STYLUS 1.json": s2e,
                "/assets/camera-profiles/OLYMPUS STYLUS 1S.json": n2e,
                "/assets/camera-profiles/OLYMPUS TG-4.json": r2e,
                "/assets/camera-profiles/OLYMPUS TG-5.json": o2e,
                "/assets/camera-profiles/OLYMPUS TG-6.json": a2e,
                "/assets/camera-profiles/OLYMPUS XZ-1.json": i2e,
                "/assets/camera-profiles/OLYMPUS XZ-10.json": c2e,
                "/assets/camera-profiles/OLYMPUS XZ-2.json": l2e,
                "/assets/camera-profiles/OM DIGITAL SOLUTIONS OM-1.json": u2e,
                "/assets/camera-profiles/OM DIGITAL SOLUTIONS OM-5.json": d2e,
                "/assets/camera-profiles/OM DIGITAL SOLUTIONS TG-7.json": f2e,
                "/assets/camera-profiles/ONEPLUS 7T FRONT CAMERA.json": h2e,
                "/assets/camera-profiles/ONEPLUS 7T REAR MAIN CAMERA.json": p2e,
                "/assets/camera-profiles/ONEPLUS 8 FRONT CAMERA.json": m2e,
                "/assets/camera-profiles/ONEPLUS 8 PRO FRONT CAMERA.json": g2e,
                "/assets/camera-profiles/ONEPLUS 8 PRO REAR MAIN CAMERA.json": x2e,
                "/assets/camera-profiles/ONEPLUS 8 REAR MAIN CAMERA.json": v2e,
                "/assets/camera-profiles/PANASONIC DC-FZ1000M2.json": b2e,
                "/assets/camera-profiles/PANASONIC DC-FZ80.json": y2e,
                "/assets/camera-profiles/PANASONIC DC-G100.json": C2e,
                "/assets/camera-profiles/PANASONIC DC-G9.json": w2e,
                "/assets/camera-profiles/PANASONIC DC-G99.json": A2e,
                "/assets/camera-profiles/PANASONIC DC-G9M2.json": I2e,
                "/assets/camera-profiles/PANASONIC DC-GF10.json": S2e,
                "/assets/camera-profiles/PANASONIC DC-GF9.json": _2e,
                "/assets/camera-profiles/PANASONIC DC-GH5.json": E2e,
                "/assets/camera-profiles/PANASONIC DC-GH5M2.json": N2e,
                "/assets/camera-profiles/PANASONIC DC-GH5S.json": R2e,
                "/assets/camera-profiles/PANASONIC DC-GH6.json": P2e,
                "/assets/camera-profiles/PANASONIC DC-GX9.json": k2e,
                "/assets/camera-profiles/PANASONIC DC-LX100M2.json": M2e,
                "/assets/camera-profiles/PANASONIC DC-S1.json": T2e,
                "/assets/camera-profiles/PANASONIC DC-S1H.json": j2e,
                "/assets/camera-profiles/PANASONIC DC-S1R.json": D2e,
                "/assets/camera-profiles/PANASONIC DC-S5.json": L2e,
                "/assets/camera-profiles/PANASONIC DC-S5M2.json": O2e,
                "/assets/camera-profiles/PANASONIC DC-S5M2X.json": F2e,
                "/assets/camera-profiles/PANASONIC DC-ZS200.json": $2e,
                "/assets/camera-profiles/PANASONIC DC-ZS70.json": B2e,
                "/assets/camera-profiles/PANASONIC DC-ZS80.json": V2e,
                "/assets/camera-profiles/PANASONIC DMC-CM1.json": H2e,
                "/assets/camera-profiles/PANASONIC DMC-CM10.json": z2e,
                "/assets/camera-profiles/PANASONIC DMC-FX150.json": G2e,
                "/assets/camera-profiles/PANASONIC DMC-FZ100.json": U2e,
                "/assets/camera-profiles/PANASONIC DMC-FZ1000.json": W2e,
                "/assets/camera-profiles/PANASONIC DMC-FZ150.json": X2e,
                "/assets/camera-profiles/PANASONIC DMC-FZ18.json": Z2e,
                "/assets/camera-profiles/PANASONIC DMC-FZ200.json": Y2e,
                "/assets/camera-profiles/PANASONIC DMC-FZ2500.json": K2e,
                "/assets/camera-profiles/PANASONIC DMC-FZ28.json": q2e,
                "/assets/camera-profiles/PANASONIC DMC-FZ30.json": Q2e,
                "/assets/camera-profiles/PANASONIC DMC-FZ300.json": J2e,
                "/assets/camera-profiles/PANASONIC DMC-FZ35.json": eae,
                "/assets/camera-profiles/PANASONIC DMC-FZ40.json": tae,
                "/assets/camera-profiles/PANASONIC DMC-FZ50.json": sae,
                "/assets/camera-profiles/PANASONIC DMC-FZ70.json": nae,
                "/assets/camera-profiles/PANASONIC DMC-FZ8.json": rae,
                "/assets/camera-profiles/PANASONIC DMC-G1.json": oae,
                "/assets/camera-profiles/PANASONIC DMC-G10.json": aae,
                "/assets/camera-profiles/PANASONIC DMC-G2.json": iae,
                "/assets/camera-profiles/PANASONIC DMC-G3.json": cae,
                "/assets/camera-profiles/PANASONIC DMC-G5.json": lae,
                "/assets/camera-profiles/PANASONIC DMC-G6.json": uae,
                "/assets/camera-profiles/PANASONIC DMC-G7.json": dae,
                "/assets/camera-profiles/PANASONIC DMC-G8.json": fae,
                "/assets/camera-profiles/PANASONIC DMC-GF1.json": hae,
                "/assets/camera-profiles/PANASONIC DMC-GF2.json": pae,
                "/assets/camera-profiles/PANASONIC DMC-GF3.json": mae,
                "/assets/camera-profiles/PANASONIC DMC-GF5.json": gae,
                "/assets/camera-profiles/PANASONIC DMC-GF6.json": xae,
                "/assets/camera-profiles/PANASONIC DMC-GF7.json": vae,
                "/assets/camera-profiles/PANASONIC DMC-GF8.json": bae,
                "/assets/camera-profiles/PANASONIC DMC-GH1.json": yae,
                "/assets/camera-profiles/PANASONIC DMC-GH2.json": Cae,
                "/assets/camera-profiles/PANASONIC DMC-GH3.json": wae,
                "/assets/camera-profiles/PANASONIC DMC-GH4.json": Aae,
                "/assets/camera-profiles/PANASONIC DMC-GM1.json": Iae,
                "/assets/camera-profiles/PANASONIC DMC-GM5.json": Sae,
                "/assets/camera-profiles/PANASONIC DMC-GX1.json": _ae,
                "/assets/camera-profiles/PANASONIC DMC-GX7.json": Eae,
                "/assets/camera-profiles/PANASONIC DMC-GX8.json": Nae,
                "/assets/camera-profiles/PANASONIC DMC-GX85.json": Rae,
                "/assets/camera-profiles/PANASONIC DMC-L1.json": Pae,
                "/assets/camera-profiles/PANASONIC DMC-L10.json": kae,
                "/assets/camera-profiles/PANASONIC DMC-LC1.json": Mae,
                "/assets/camera-profiles/PANASONIC DMC-LF1.json": Tae,
                "/assets/camera-profiles/PANASONIC DMC-LX1.json": jae,
                "/assets/camera-profiles/PANASONIC DMC-LX100.json": Dae,
                "/assets/camera-profiles/PANASONIC DMC-LX2.json": Lae,
                "/assets/camera-profiles/PANASONIC DMC-LX3.json": Oae,
                "/assets/camera-profiles/PANASONIC DMC-LX5.json": Fae,
                "/assets/camera-profiles/PANASONIC DMC-LX7.json": $ae,
                "/assets/camera-profiles/PANASONIC DMC-LX9.json": Bae,
                "/assets/camera-profiles/PANASONIC DMC-ZS100.json": Vae,
                "/assets/camera-profiles/PANASONIC DMC-ZS40.json": Hae,
                "/assets/camera-profiles/PANASONIC DMC-ZS50.json": zae,
                "/assets/camera-profiles/PANASONIC DMC-ZS60.json": Gae,
                "/assets/camera-profiles/PARROT ANAFI AI.json": Uae,
                "/assets/camera-profiles/PARROT ANAFI.json": Wae,
                "/assets/camera-profiles/PENTAX 645D.json": Xae,
                "/assets/camera-profiles/PENTAX 645Z.json": Zae,
                "/assets/camera-profiles/PENTAX K-01.json": Yae,
                "/assets/camera-profiles/PENTAX K-1 MARK II.json": Kae,
                "/assets/camera-profiles/PENTAX K-1.json": qae,
                "/assets/camera-profiles/PENTAX K-3 II.json": Qae,
                "/assets/camera-profiles/PENTAX K-3 MARK III.json": Jae,
                "/assets/camera-profiles/PENTAX K-3.json": eie,
                "/assets/camera-profiles/PENTAX K-30.json": tie,
                "/assets/camera-profiles/PENTAX K-5 II S.json": sie,
                "/assets/camera-profiles/PENTAX K-5 II.json": nie,
                "/assets/camera-profiles/PENTAX K-5.json": rie,
                "/assets/camera-profiles/PENTAX K-50.json": oie,
                "/assets/camera-profiles/PENTAX K-500.json": aie,
                "/assets/camera-profiles/PENTAX K-7.json": iie,
                "/assets/camera-profiles/PENTAX K-70.json": cie,
                "/assets/camera-profiles/PENTAX K-M.json": lie,
                "/assets/camera-profiles/PENTAX K-R.json": uie,
                "/assets/camera-profiles/PENTAX K-S1.json": die,
                "/assets/camera-profiles/PENTAX K-S2.json": fie,
                "/assets/camera-profiles/PENTAX K-X.json": hie,
                "/assets/camera-profiles/PENTAX K100D SUPER.json": pie,
                "/assets/camera-profiles/PENTAX K100D.json": mie,
                "/assets/camera-profiles/PENTAX K10D.json": gie,
                "/assets/camera-profiles/PENTAX K110D.json": xie,
                "/assets/camera-profiles/PENTAX K2000.json": vie,
                "/assets/camera-profiles/PENTAX K200D.json": bie,
                "/assets/camera-profiles/PENTAX K20D.json": yie,
                "/assets/camera-profiles/PENTAX KF.json": Cie,
                "/assets/camera-profiles/PENTAX KP.json": wie,
                "/assets/camera-profiles/PENTAX MX-1.json": Aie,
                "/assets/camera-profiles/PENTAX Q.json": Iie,
                "/assets/camera-profiles/PENTAX Q10.json": Sie,
                "/assets/camera-profiles/PENTAX Q7.json": _ie,
                "/assets/camera-profiles/PHASE ONE H25.json": Eie,
                "/assets/camera-profiles/PHASE ONE IQ140.json": Nie,
                "/assets/camera-profiles/PHASE ONE IQ150.json": Rie,
                "/assets/camera-profiles/PHASE ONE IQ160.json": Pie,
                "/assets/camera-profiles/PHASE ONE IQ180.json": kie,
                "/assets/camera-profiles/PHASE ONE IQ250.json": Mie,
                "/assets/camera-profiles/PHASE ONE IQ260.json": Tie,
                "/assets/camera-profiles/PHASE ONE IQ280.json": jie,
                "/assets/camera-profiles/PHASE ONE IQ3 100MP TRICHR.json": Die,
                "/assets/camera-profiles/PHASE ONE IQ3 100MP.json": Lie,
                "/assets/camera-profiles/PHASE ONE IQ3 50MP.json": Oie,
                "/assets/camera-profiles/PHASE ONE IQ3 60MP.json": Fie,
                "/assets/camera-profiles/PHASE ONE IQ3 80MP.json": $ie,
                "/assets/camera-profiles/PHASE ONE IQ4 150MP.json": Bie,
                "/assets/camera-profiles/PHASE ONE P20+.json": Vie,
                "/assets/camera-profiles/PHASE ONE P20.json": Hie,
                "/assets/camera-profiles/PHASE ONE P21+.json": zie,
                "/assets/camera-profiles/PHASE ONE P21.json": Gie,
                "/assets/camera-profiles/PHASE ONE P25+.json": Uie,
                "/assets/camera-profiles/PHASE ONE P25.json": Wie,
                "/assets/camera-profiles/PHASE ONE P30+.json": Xie,
                "/assets/camera-profiles/PHASE ONE P30.json": Zie,
                "/assets/camera-profiles/PHASE ONE P40+.json": Yie,
                "/assets/camera-profiles/PHASE ONE P45+.json": Kie,
                "/assets/camera-profiles/PHASE ONE P45.json": qie,
                "/assets/camera-profiles/PHASE ONE P65+.json": Qie,
                "/assets/camera-profiles/PIXEL 2 XL-GOOGLE-GOOGLE.json": Jie,
                "/assets/camera-profiles/PIXEL 2-GOOGLE-GOOGLE.json": e9e,
                "/assets/camera-profiles/PIXEL 3 XL-GOOGLE-GOOGLE.json": t9e,
                "/assets/camera-profiles/PIXEL 3-GOOGLE-GOOGLE.json": s9e,
                "/assets/camera-profiles/PIXEL XL-GOOGLE-GOOGLE.json": n9e,
                "/assets/camera-profiles/PIXEL-GOOGLE-GOOGLE.json": r9e,
                "/assets/camera-profiles/PIXII CAMERA (A1571).json": o9e,
                "/assets/camera-profiles/RICOH GR A12 50MM F2.5 MACRO.json": a9e,
                "/assets/camera-profiles/RICOH GR DIGITAL 3.json": i9e,
                "/assets/camera-profiles/RICOH GR DIGITAL 4.json": c9e,
                "/assets/camera-profiles/RICOH GR III.json": l9e,
                "/assets/camera-profiles/RICOH GR IIIX.json": u9e,
                "/assets/camera-profiles/RICOH GR LENS A12 28MM F2.5.json": d9e,
                "/assets/camera-profiles/RICOH GXR MOUNT A12.json": f9e,
                "/assets/camera-profiles/RICOH RICOH GX200.json": h9e,
                "/assets/camera-profiles/RICOH RICOH LENS A16 24-85MM F3.5-5.5.json": p9e,
                "/assets/camera-profiles/RICOH S10 24-72MM F2.5-4.4 VC.json": m9e,
                "/assets/camera-profiles/RICOH THETA Z1.json": g9e,
                "/assets/camera-profiles/S2.json": x9e,
                "/assets/camera-profiles/SAMSUNG EX1.json": v9e,
                "/assets/camera-profiles/SAMSUNG EX2F.json": b9e,
                "/assets/camera-profiles/SAMSUNG GALAXY NOTE 20 REAR MAIN CAMERA.json": y9e,
                "/assets/camera-profiles/SAMSUNG GALAXY NOTE 20 ULTRA REAR MAIN CAMERA.json": C9e,
                "/assets/camera-profiles/SAMSUNG GALAXY NOTE 9.json": w9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S20 FRONT CAMERA.json": A9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S20 REAR MAIN CAMERA.json": I9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S20 ULTRA FRONT CAMERA.json": S9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S20 ULTRA REAR MAIN CAMERA.json": _9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S20+ FRONT CAMERA.json": E9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S20+ REAR MAIN CAMERA.json": N9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S21 REAR MAIN CAMERA.json": R9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S21 REAR WIDE CAMERA.json": P9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S21 ULTRA REAR MAIN CAMERA.json": k9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S21 ULTRA REAR SUPER TELEPHOTO CAMERA.json": M9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S21 ULTRA REAR TELEPHOTO CAMERA.json": T9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S21 ULTRA REAR WIDE CAMERA.json": j9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S21+ REAR MAIN CAMERA.json": D9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S21+ REAR WIDE CAMERA.json": L9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S22 FRONT CAMERA.json": O9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S22 REAR TELEPHOTO CAMERA.json": F9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S22 REAR ULTRAWIDE CAMERA.json": $9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S22 REAR WIDE CAMERA.json": B9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S22 ULTRA FRONT CAMERA.json": V9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S22 ULTRA REAR SUPER TELEPHOTO CAMERA.json": H9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S22 ULTRA REAR TELEPHOTO CAMERA.json": z9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S22 ULTRA REAR ULTRAWIDE CAMERA.json": G9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S22 ULTRA REAR WIDE CAMERA.json": U9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S22+ FRONT CAMERA ADOBE STANDARD.json": W9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S22+ FRONT CAMERA.json": X9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S22+ REAR TELEPHOTO CAMERA.json": Z9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S22+ REAR ULTRAWIDE CAMERA.json": Y9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S22+ REAR WIDE CAMERA.json": K9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S23 FRONT CAMERA.json": q9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S23 REAR TELEPHOTO CAMERA.json": Q9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S23 REAR ULTRAWIDE CAMERA.json": J9e,
                "/assets/camera-profiles/SAMSUNG GALAXY S23 REAR WIDE CAMERA.json": e3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S23 ULTRA FRONT CAMERA.json": t3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S23 ULTRA REAR SUPER TELEPHOTO CAMERA.json": s3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S23 ULTRA REAR TELEPHOTO CAMERA.json": n3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S23 ULTRA REAR ULTRAWIDE CAMERA.json": r3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S23 ULTRA REAR WIDE CAMERA.json": o3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S23+ FRONT CAMERA.json": a3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S23+ REAR TELEPHOTO CAMERA.json": i3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S23+ REAR ULTRAWIDE CAMERA.json": c3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S23+ REAR WIDE CAMERA.json": l3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S6 EDGE.json": u3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S6.json": d3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S7 EDGE.json": f3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S7.json": h3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S8+.json": p3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S8.json": m3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S9+.json": g3e,
                "/assets/camera-profiles/SAMSUNG GALAXY S9.json": x3e,
                "/assets/camera-profiles/SAMSUNG GALAXY Z FOLD3 REAR MAIN CAMERA.json": v3e,
                "/assets/camera-profiles/SAMSUNG GALAXY Z FOLD3 REAR TELEPHOTO CAMERA.json": b3e,
                "/assets/camera-profiles/SAMSUNG GALAXY Z FOLD3 REAR ULTRAWIDE CAMERA.json": y3e,
                "/assets/camera-profiles/SAMSUNG GALAXY Z FOLD4 REAR TELEPHOTO CAMERA.json": C3e,
                "/assets/camera-profiles/SAMSUNG GALAXY Z FOLD4 REAR ULTRAWIDE CAMERA.json": w3e,
                "/assets/camera-profiles/SAMSUNG GALAXY Z FOLD4 REAR WIDE CAMERA.json": A3e,
                "/assets/camera-profiles/SAMSUNG GALAXY Z FOLD5 FRONT CAMERA.json": I3e,
                "/assets/camera-profiles/SAMSUNG GALAXY Z FOLD5 REAR TELEPHOTO CAMERA.json": S3e,
                "/assets/camera-profiles/SAMSUNG GALAXY Z FOLD5 REAR ULTRAWIDE CAMERA.json": _3e,
                "/assets/camera-profiles/SAMSUNG GALAXY Z FOLD5 REAR WIDE CAMERA.json": E3e,
                "/assets/camera-profiles/SAMSUNG GX-1L.json": N3e,
                "/assets/camera-profiles/SAMSUNG GX-1S.json": R3e,
                "/assets/camera-profiles/SAMSUNG GX10.json": P3e,
                "/assets/camera-profiles/SAMSUNG GX20.json": k3e,
                "/assets/camera-profiles/SAMSUNG NX MINI.json": M3e,
                "/assets/camera-profiles/SAMSUNG NX U.json": T3e,
                "/assets/camera-profiles/SAMSUNG NX1.json": j3e,
                "/assets/camera-profiles/SAMSUNG NX10.json": D3e,
                "/assets/camera-profiles/SAMSUNG NX100.json": L3e,
                "/assets/camera-profiles/SAMSUNG NX1000.json": O3e,
                "/assets/camera-profiles/SAMSUNG NX11.json": F3e,
                "/assets/camera-profiles/SAMSUNG NX1100.json": $3e,
                "/assets/camera-profiles/SAMSUNG NX20.json": B3e,
                "/assets/camera-profiles/SAMSUNG NX200.json": V3e,
                "/assets/camera-profiles/SAMSUNG NX2000.json": H3e,
                "/assets/camera-profiles/SAMSUNG NX210.json": z3e,
                "/assets/camera-profiles/SAMSUNG NX30.json": G3e,
                "/assets/camera-profiles/SAMSUNG NX300.json": U3e,
                "/assets/camera-profiles/SAMSUNG NX3000.json": W3e,
                "/assets/camera-profiles/SAMSUNG NX3300.json": X3e,
                "/assets/camera-profiles/SAMSUNG NX5.json": Z3e,
                "/assets/camera-profiles/SAMSUNG NX500.json": Y3e,
                "/assets/camera-profiles/SAMSUNG WB2000.json": K3e,
                "/assets/camera-profiles/SIGMA FP L.json": q3e,
                "/assets/camera-profiles/SIGMA FP.json": Q3e,
                "/assets/camera-profiles/SKYDIO 2.json": J3e,
                "/assets/camera-profiles/SONY DCZV1B.json": e5e,
                "/assets/camera-profiles/SONY DSC-HX95.json": t5e,
                "/assets/camera-profiles/SONY DSC-HX99.json": s5e,
                "/assets/camera-profiles/SONY DSC-R1.json": n5e,
                "/assets/camera-profiles/SONY DSC-RX0.json": r5e,
                "/assets/camera-profiles/SONY DSC-RX0M2.json": o5e,
                "/assets/camera-profiles/SONY DSC-RX1.json": a5e,
                "/assets/camera-profiles/SONY DSC-RX10.json": i5e,
                "/assets/camera-profiles/SONY DSC-RX100.json": c5e,
                "/assets/camera-profiles/SONY DSC-RX100M2.json": l5e,
                "/assets/camera-profiles/SONY DSC-RX100M3.json": u5e,
                "/assets/camera-profiles/SONY DSC-RX100M4.json": d5e,
                "/assets/camera-profiles/SONY DSC-RX100M5.json": f5e,
                "/assets/camera-profiles/SONY DSC-RX100M5A.json": h5e,
                "/assets/camera-profiles/SONY DSC-RX100M6.json": p5e,
                "/assets/camera-profiles/SONY DSC-RX100M7.json": m5e,
                "/assets/camera-profiles/SONY DSC-RX10M2.json": g5e,
                "/assets/camera-profiles/SONY DSC-RX10M3.json": x5e,
                "/assets/camera-profiles/SONY DSC-RX10M4.json": v5e,
                "/assets/camera-profiles/SONY DSC-RX1R.json": b5e,
                "/assets/camera-profiles/SONY DSC-RX1RM2.json": y5e,
                "/assets/camera-profiles/SONY DSC-V3.json": C5e,
                "/assets/camera-profiles/SONY DSLR-A100.json": w5e,
                "/assets/camera-profiles/SONY DSLR-A200.json": A5e,
                "/assets/camera-profiles/SONY DSLR-A230.json": I5e,
                "/assets/camera-profiles/SONY DSLR-A290.json": S5e,
                "/assets/camera-profiles/SONY DSLR-A300.json": _5e,
                "/assets/camera-profiles/SONY DSLR-A330.json": E5e,
                "/assets/camera-profiles/SONY DSLR-A350.json": N5e,
                "/assets/camera-profiles/SONY DSLR-A380.json": R5e,
                "/assets/camera-profiles/SONY DSLR-A390.json": P5e,
                "/assets/camera-profiles/SONY DSLR-A450.json": k5e,
                "/assets/camera-profiles/SONY DSLR-A500.json": M5e,
                "/assets/camera-profiles/SONY DSLR-A550.json": T5e,
                "/assets/camera-profiles/SONY DSLR-A560.json": j5e,
                "/assets/camera-profiles/SONY DSLR-A580.json": D5e,
                "/assets/camera-profiles/SONY DSLR-A700.json": L5e,
                "/assets/camera-profiles/SONY DSLR-A850.json": O5e,
                "/assets/camera-profiles/SONY DSLR-A900.json": F5e,
                "/assets/camera-profiles/SONY ILCA-68.json": $5e,
                "/assets/camera-profiles/SONY ILCA-77M2.json": B5e,
                "/assets/camera-profiles/SONY ILCA-99M2.json": V5e,
                "/assets/camera-profiles/SONY ILCE-1.json": H5e,
                "/assets/camera-profiles/SONY ILCE-3000.json": z5e,
                "/assets/camera-profiles/SONY ILCE-5000.json": G5e,
                "/assets/camera-profiles/SONY ILCE-5100.json": U5e,
                "/assets/camera-profiles/SONY ILCE-6000.json": W5e,
                "/assets/camera-profiles/SONY ILCE-6100.json": X5e,
                "/assets/camera-profiles/SONY ILCE-6300.json": Z5e,
                "/assets/camera-profiles/SONY ILCE-6400.json": Y5e,
                "/assets/camera-profiles/SONY ILCE-6500.json": K5e,
                "/assets/camera-profiles/SONY ILCE-6600.json": q5e,
                "/assets/camera-profiles/SONY ILCE-6700.json": Q5e,
                "/assets/camera-profiles/SONY ILCE-7.json": J5e,
                "/assets/camera-profiles/SONY ILCE-7C.json": e4e,
                "/assets/camera-profiles/SONY ILCE-7CM2.json": t4e,
                "/assets/camera-profiles/SONY ILCE-7CR.json": s4e,
                "/assets/camera-profiles/SONY ILCE-7M2.json": n4e,
                "/assets/camera-profiles/SONY ILCE-7M3.json": r4e,
                "/assets/camera-profiles/SONY ILCE-7M4.json": o4e,
                "/assets/camera-profiles/SONY ILCE-7R.json": a4e,
                "/assets/camera-profiles/SONY ILCE-7RM2.json": i4e,
                "/assets/camera-profiles/SONY ILCE-7RM3.json": c4e,
                "/assets/camera-profiles/SONY ILCE-7RM3A.json": l4e,
                "/assets/camera-profiles/SONY ILCE-7RM4.json": u4e,
                "/assets/camera-profiles/SONY ILCE-7RM4A.json": d4e,
                "/assets/camera-profiles/SONY ILCE-7RM5.json": f4e,
                "/assets/camera-profiles/SONY ILCE-7S.json": h4e,
                "/assets/camera-profiles/SONY ILCE-7SM2.json": p4e,
                "/assets/camera-profiles/SONY ILCE-7SM3.json": m4e,
                "/assets/camera-profiles/SONY ILCE-9.json": g4e,
                "/assets/camera-profiles/SONY ILCE-9M2.json": x4e,
                "/assets/camera-profiles/SONY ILCE-9M3.json": v4e,
                "/assets/camera-profiles/SONY ILCE-QX1.json": b4e,
                "/assets/camera-profiles/SONY ILME-FX3.json": y4e,
                "/assets/camera-profiles/SONY ILME-FX30.json": C4e,
                "/assets/camera-profiles/SONY NEX-3.json": w4e,
                "/assets/camera-profiles/SONY NEX-3N.json": A4e,
                "/assets/camera-profiles/SONY NEX-5.json": I4e,
                "/assets/camera-profiles/SONY NEX-5N.json": S4e,
                "/assets/camera-profiles/SONY NEX-5R.json": _4e,
                "/assets/camera-profiles/SONY NEX-5T.json": E4e,
                "/assets/camera-profiles/SONY NEX-6.json": N4e,
                "/assets/camera-profiles/SONY NEX-7.json": R4e,
                "/assets/camera-profiles/SONY NEX-C3.json": P4e,
                "/assets/camera-profiles/SONY NEX-F3.json": k4e,
                "/assets/camera-profiles/SONY NEX-VG20.json": M4e,
                "/assets/camera-profiles/SONY NEX-VG30.json": T4e,
                "/assets/camera-profiles/SONY NEX-VG900.json": j4e,
                "/assets/camera-profiles/SONY SLT-A33.json": D4e,
                "/assets/camera-profiles/SONY SLT-A35.json": L4e,
                "/assets/camera-profiles/SONY SLT-A37.json": O4e,
                "/assets/camera-profiles/SONY SLT-A55V.json": F4e,
                "/assets/camera-profiles/SONY SLT-A57.json": $4e,
                "/assets/camera-profiles/SONY SLT-A58.json": B4e,
                "/assets/camera-profiles/SONY SLT-A65.json": V4e,
                "/assets/camera-profiles/SONY SLT-A77.json": H4e,
                "/assets/camera-profiles/SONY SLT-A99V.json": z4e,
                "/assets/camera-profiles/SONY XPERIA 1 II TELEPHOTO CAMERA.json": G4e,
                "/assets/camera-profiles/SONY XPERIA 1 II ULTRA WIDE-ANGLE CAMERA.json": U4e,
                "/assets/camera-profiles/SONY XPERIA 1 II WIDE-ANGLE CAMERA.json": W4e,
                "/assets/camera-profiles/SONY XPERIA 1 III SUPER TELEPHOTO CAMERA.json": X4e,
                "/assets/camera-profiles/SONY XPERIA 1 III TELEPHOTO CAMERA.json": Z4e,
                "/assets/camera-profiles/SONY XPERIA 1 III ULTRA WIDE-ANGLE CAMERA.json": Y4e,
                "/assets/camera-profiles/SONY XPERIA 1 III WIDE-ANGLE CAMERA.json": K4e,
                "/assets/camera-profiles/SONY XPERIA 1 IV ULTRAWIDE CAMERA.json": q4e,
                "/assets/camera-profiles/SONY XPERIA 1 IV WIDE CAMERA.json": Q4e,
                "/assets/camera-profiles/SONY XPERIA 1 IV ZOOM CAMERA.json": J4e,
                "/assets/camera-profiles/SONY XPERIA 1 V FRONT CAMERA.json": e8e,
                "/assets/camera-profiles/SONY XPERIA 1 V ULTRAWIDE CAMERA.json": t8e,
                "/assets/camera-profiles/SONY XPERIA 1 V WIDE CAMERA.json": s8e,
                "/assets/camera-profiles/SONY XPERIA 1 V ZOOM CAMERA.json": n8e,
                "/assets/camera-profiles/SONY XPERIA 1 WIDE-ANGLE CAMERA.json": r8e,
                "/assets/camera-profiles/SONY XPERIA 5 II TELEPHOTO CAMERA.json": o8e,
                "/assets/camera-profiles/SONY XPERIA 5 II ULTRA WIDE-ANGLE CAMERA.json": a8e,
                "/assets/camera-profiles/SONY XPERIA 5 II WIDE-ANGLE CAMERA.json": i8e,
                "/assets/camera-profiles/SONY XPERIA 5 III SUPER TELEPHOTO CAMERA.json": c8e,
                "/assets/camera-profiles/SONY XPERIA 5 III TELEPHOTO CAMERA.json": l8e,
                "/assets/camera-profiles/SONY XPERIA 5 III ULTRA WIDE-ANGLE CAMERA.json": u8e,
                "/assets/camera-profiles/SONY XPERIA 5 III WIDE-ANGLE CAMERA.json": d8e,
                "/assets/camera-profiles/SONY XPERIA 5 IV TELEPHOTO CAMERA.json": f8e,
                "/assets/camera-profiles/SONY XPERIA 5 IV ULTRAWIDE CAMERA.json": h8e,
                "/assets/camera-profiles/SONY XPERIA 5 IV WIDE CAMERA.json": p8e,
                "/assets/camera-profiles/SONY XPERIA 5 WIDE-ANGLE CAMERA.json": m8e,
                "/assets/camera-profiles/SONY XPERIA PRO-I TELEPHOTO CAMERA.json": g8e,
                "/assets/camera-profiles/SONY XPERIA PRO-I ULTRAWIDE CAMERA.json": x8e,
                "/assets/camera-profiles/SONY XPERIA PRO-I WIDE CAMERA.json": v8e,
                "/assets/camera-profiles/SONY ZV-1M2.json": b8e,
                "/assets/camera-profiles/SONY ZV-E1.json": y8e,
                "/assets/camera-profiles/SONY ZV-E10.json": C8e,
                "/assets/camera-profiles/XIAOMI 12S PRO REAR TELEPHOTO CAMERA.json": w8e,
                "/assets/camera-profiles/XIAOMI 12S PRO REAR ULTRAWIDE CAMERA.json": A8e,
                "/assets/camera-profiles/XIAOMI 12S PRO REAR WIDE CAMERA.json": I8e,
                "/assets/camera-profiles/XIAOMI 12S REAR ULTRAWIDE CAMERA.json": S8e,
                "/assets/camera-profiles/XIAOMI 12S REAR WIDE CAMERA.json": _8e,
                "/assets/camera-profiles/XIAOMI 12S ULTRA REAR TELEPHOTO CAMERA.json": E8e,
                "/assets/camera-profiles/XIAOMI 12S ULTRA REAR ULTRAWIDE CAMERA.json": N8e,
                "/assets/camera-profiles/XIAOMI 12S ULTRA REAR WIDE CAMERA.json": R8e,
                "/assets/camera-profiles/XIAOMI 13 PRO REAR TELEPHOTO CAMERA.json": P8e,
                "/assets/camera-profiles/XIAOMI 13 PRO REAR ULTRAWIDE CAMERA.json": k8e,
                "/assets/camera-profiles/XIAOMI 13 PRO REAR WIDE CAMERA.json": M8e,
                "/assets/camera-profiles/XIAOMI 13 REAR TELEPHOTO CAMERA.json": T8e,
                "/assets/camera-profiles/XIAOMI 13 REAR ULTRAWIDE CAMERA.json": j8e,
                "/assets/camera-profiles/XIAOMI 13 REAR WIDE CAMERA.json": D8e,
                "/assets/camera-profiles/XIAOMI 13 ULTRA REAR SUPER TELEPHOTO CAMERA.json": L8e,
                "/assets/camera-profiles/XIAOMI 13 ULTRA REAR TELEPHOTO CAMERA.json": O8e,
                "/assets/camera-profiles/XIAOMI 13 ULTRA REAR ULTRAWIDE CAMERA.json": F8e,
                "/assets/camera-profiles/XIAOMI 13 ULTRA REAR WIDE CAMERA.json": $8e,
                "/assets/camera-profiles/XIAOMI 13T FRONT CAMERA.json": B8e,
                "/assets/camera-profiles/XIAOMI 13T PRO FRONT CAMERA.json": V8e,
                "/assets/camera-profiles/XIAOMI 13T PRO REAR TELEPHOTO CAMERA.json": H8e,
                "/assets/camera-profiles/XIAOMI 13T PRO REAR ULTRAWIDE CAMERA.json": z8e,
                "/assets/camera-profiles/XIAOMI 13T PRO REAR WIDE CAMERA.json": G8e,
                "/assets/camera-profiles/XIAOMI 13T REAR TELEPHOTO CAMERA.json": U8e,
                "/assets/camera-profiles/XIAOMI 13T REAR ULTRAWIDE CAMERA.json": W8e,
                "/assets/camera-profiles/XIAOMI 13T REAR WIDE CAMERA.json": X8e,
                "/assets/camera-profiles/XIAOMI MI 11 LITE FRONT CAMERA.json": Z8e,
                "/assets/camera-profiles/XIAOMI MI 11 LITE REAR ULTRAWIDE CAMERA.json": Y8e,
                "/assets/camera-profiles/XIAOMI MI 11 LITE REAR WIDE CAMERA.json": K8e,
                "/assets/camera-profiles/XIAOMI MIX FOLD 3 REAR SUPER TELEPHOTO CAMERA.json": q8e,
                "/assets/camera-profiles/XIAOMI MIX FOLD 3 REAR TELEPHOTO CAMERA.json": Q8e,
                "/assets/camera-profiles/XIAOMI MIX FOLD 3 REAR ULTRAWIDE CAMERA.json": J8e,
                "/assets/camera-profiles/XIAOMI MIX FOLD 3 REAR WIDE CAMERA.json": e6e,
                "/assets/camera-profiles/YUNEEC ION L1 PRO.json": t6e,
                "/assets/camera-profiles/ZEISS ZX1.json": s6e
            })[`/assets/camera-profiles/${e.toUpperCase()}.json`];
            if (!n)
                return;
            const r = await fetch(n);
            if (!r.ok)
                return;
            const o = await r.json()
                , a = Pke(o);
            return this.profileCache.set(e, a),
                a
        } catch (s) {
            console.error(`Could not find matching DCP profile for ${e}`, s),
                Wt(s)
        }
    }
}



let cP = class {
        static{l(this, "Editor")
        }backend;
        renderer;
        mainViewport;
        comparisonViewport = null;
        histogram;
        healingSourceDetector;
        previewPhoto;
        originalPhoto;
        viewMode = "after";
        events = new r6;
        ioAdapters;
        maskOverlayIds = null;
        waitingSync = !1;
        renderPending = !1;
        importPending = !1;
        constructor(e={}) {
            this.backend = new Y8t(e.gl),
                this.mainViewport = new BT(this.backend),
                this.renderer = new W3t(this.backend,{
                    label: e.label,
                    resolvers: e.resolvers
                }),
                this.ioAdapters = e.io ?? [],
                this.histogram = new pS(this.renderer,{
                    isEnabled: e.isHistogramEnabled ?? !0
                }),
                this.healingSourceDetector = new r6t(this.renderer),
                this.originalPhoto = this.renderer.photo
        }
        get photo() {
            return this.renderer.photo
        }
        get canvas() {
            return this.backend.canvas
        }
        get shaders() {
            return this.backend.shaders
        }
        get imageScale() {
            return this.mainViewport.imageScale
        }
        get croppedImageScale() {
            return this.mainViewport.croppedImageScale
        }
        get zoom() {
            return this.mainViewport.croppedImageScale
        }
        get offset() {
            return this.mainViewport.offset
        }
        get adjustments() {
            return this.photo.adjustments
        }
        get whiteBalance() {
            return this.photo.whiteBalance
        }
        get imageSize() {
            return this.photo.imageState.imageSize
        }
        get originalImageSize() {
            return this.photo.imageState.originalImageSize
        }
        get croppedImageSize() {
            return this.photo.imageState.croppedImageSize
        }
        get cropMatrix() {
            return this.photo.imageState.cropMatrix
        }
        get crop() {
            return this.photo.imageState.crop
        }
        get initialOrientation() {
            return this.photo.initialOrientation
        }
        get orientation() {
            return this.photo.initialOrientation + this.photo.adjustments.orientation
        }
        get rotation() {
            return this.photo.initialOrientation * 90 + this.photo.adjustments.orientation * 90 + this.photo.adjustments.cropStraighten
        }
        get healingCurrentStroke() {
            return this.renderer.healingPass.healingCurrentStroke
        }
        set healingCurrentStroke(e) {
            this.renderer.healingPass.healingCurrentStroke = e,
            e && (this.render({
                reason: "set-healing-stroke",
                isDownsampled: !0
            }),
                this.renderWithDebounce())
        }
        set enableHealing(e) {
            this.renderer.healingPass.enabled = e
        }
        async import(e, s) {
            this.renderer.performanceCounters.reset();
            for (const n of this.ioAdapters)
                if (n.canLoad(e)) {
                    this.importPending = !0,
                        this.renderer.assets.cleanup(),
                        this.renderer.healingPass.healingCurrentStroke = null,
                        await n.load(e, this.renderer, s),
                        await this.renderer.assets.resolveAll(this.photo),
                        this.originalPhoto = this.photo.clone({}),
                        this.previewPhoto = void 0,
                        this.importPending = !1,
                    s.skipRenderOnLoad || this.render({
                        reason: "import-full-size"
                    }),
                        this.histogram.update(this.photo);
                    return
                }
            e.name
        }
        startSamplingColor(e) {
            this.render({
                reason: "start-sampling-color"
            }),
                this.renderer.colorSampler.startSampling(e)
        }
        stopSamplingColor() {
            this.renderer.colorSampler.stopSampling(),
                this.render({
                    reason: "stop-sampling-color"
                })
        }
        async sampleColor(e) {
            return this.renderer.colorSampler.sampleThrottled(e)
        }
        clearViewport() {
            this.renderer.previewTexture.update({
                data: null
            }),
                this.renderer.photo = new V9({
                    type: "bitmap",
                    texture: this.renderer.previewTexture
                }),
                this.mainViewport.setTexture(null),
                this.render({
                    reason: "clear-viewport"
                })
        }
        setViewMode(e) {
            e !== this.viewMode && (this.viewMode = e,
                this.mainViewport.setCropView(e === "crop"),
                this.viewMode === "compare" ? (this.comparisonViewport = new BT(this.backend),
                    this.comparisonViewport.setViewportRect(0, 0, .5, 1),
                    this.mainViewport.setViewportRect(.5, 0, .5, 1)) : (this.comparisonViewport = null,
                    this.mainViewport.setViewportRect(0, 0, 1, 1)),
                this.render({
                    reason: "set-view-mode"
                }))
        }
        toggleColorClipping(e, s, n=!0) {
            (this.histogram.showsHighlightsClipping !== e || this.histogram.showsShadowsClipping !== s) && (this.histogram.setColorClipping(e, s),
            n && this.render({
                reason: "toggle-color-clipping"
            }))
        }
        setAdjustments(e) {
            this.photo.adjustments = {
                ...this.photo.adjustments,
                ...e
            },
                this.renderer.assets.shouldResolveArtefactsForAdjustments(this.photo.adjustments) ? this.renderer.assets.resolveAll(this.photo).then( () => {
                        this.render({
                            reason: "set-adjustments-after-resolve"
                        })
                    }
                ) : (this.render({
                    reason: "set-adjustments",
                    isDownsampled: !0
                }),
                    this.renderWithDebounce())
        }
        setViewport(e) {
            e.offsetX != null && (this.mainViewport.offset[0] = e.offsetX),
            e.offsetY != null && (this.mainViewport.offset[1] = e.offsetY),
            e.relativeZoom != null && (this.mainViewport.relativeZoom = e.relativeZoom),
            e.zoom != null && (e.zoom === "fit" ? this.mainViewport.relativeZoom = 1 : this.mainViewport.relativeZoom = e.zoom / this.mainViewport.croppedFitScale),
                this.renderViewport(),
                this.renderWithDebounce()
        }
        setCanvasSize(e, s) {
            this.backend.setCanvasSize(e, s),
            !(e <= 0 || s <= 0) && (this.renderViewport(),
                this.renderWithDebounce())
        }
        setOverlays(e) {
            this.maskOverlayIds = e,
                this.render({
                    reason: "set-overlays"
                })
        }
        render = (e={}) => {
            if (this.renderPending = !0,
                !this.waitingSync) {
                if (this.importPending && !e.isForced) {
                    `${this.renderer.label}${e.reason}`;
                    return
                }
                e.reason ? `${this.renderer.label}${e.reason}` : `${this.renderer.label}`,
                    this.renderOutput(e),
                    this.renderPending = !1,
                    this.waitingSync = !0,
                    this.backend.waitClientSync( () => {
                            this.renderPending ? (this.renderOutput(e),
                                this.renderPending = !1,
                                this.backend.waitClientSync( () => this.waitingSync = !1)) : this.waitingSync = !1
                        }
                    )
            }
        }
        ;
        renderPreview(e) {
            const {image: s, originalImage: n} = e
                , r = e.imageColorSpace ?? Ka.displayP3;
            s && s.width > 0 && s.height > 0 && (this.renderer.previewTexture.update({
                width: s.width,
                height: s.height,
                data: s
            }),
                this.previewPhoto = new V9({
                    id: O0(),
                    type: "bitmap",
                    texture: this.renderer.previewTexture,
                    originalImageSize: [s.width, s.height]
                }),
                this.previewPhoto.computeState(),
                this.mainViewport.setTexture(this.renderer.previewTexture),
                this.mainViewport.render(this.previewPhoto.imageState, o => {
                        this.renderViewportTexture(o, r)
                    }
                )),
            n && n.width > 0 && n.height > 0 && (this.renderer.scratchTexture.update({
                width: n.width,
                height: n.height,
                data: n
            }),
                this.renderComparisonViewport(this.renderer.scratchTexture))
        }
        renderWithDebounce() {
            this.render({
                reason: "render-with-debounce"
            })
        }
        renderViewportTexture = (e, s) => {
            if (!e.texture)
                return;
            const n = this.viewMode === "crop" ? e.cropViewMatrix : e.viewMatrix;
            e.texture?.bind(0),
                this.backend.shaders.viewport.render({
                    viewMatrix: n,
                    inputTexture: 0,
                    inputColorSpace: s ?? Ka.displayP3,
                    filterNearest: this.mainViewport.croppedImageScale > 2
                })
        }
        ;
        renderComparisonViewportTexture = e => {
            if (!e.texture)
                return;
            const s = this.mainViewport.viewMatrix;
            e.texture?.bind(0),
                this.backend.shaders.viewport.render({
                    viewMatrix: s,
                    inputTexture: 0,
                    filterNearest: this.mainViewport.croppedImageScale > 2
                })
        }
        ;
        renderViewport() {
            if (this.canvas.width == 0 || this.canvas.height == 0)
                return;
            const e = this.previewPhoto ?? this.photo;
            e.computeState(),
                this.mainViewport.render(e.imageState, this.renderViewportTexture),
                this.renderComparisonViewport(),
                this.events.publish({
                    type: "render"
                })
        }
        renderComparisonViewport(e) {
            if (this.canvas.width == 0 || this.canvas.height == 0)
                return;
            const s = this.previewPhoto ?? this.photo;
            this.comparisonViewport && (e && this.comparisonViewport?.setTexture(e),
                this.comparisonViewport.relativeZoom = this.mainViewport.relativeZoom,
                this.comparisonViewport.offset = this.mainViewport.offset,
                this.comparisonViewport.render(s.imageState, this.renderComparisonViewportTexture))
        }
        renderOutput(e={}) {
            const s = this.photo.texture;
            if (!s.width || !s.height)
                return;
            this.photo.computeState(),
                this.mainViewport.computeState(this.photo.imageState);
            let n, r, o;
            this.viewMode === "crop" ? (n = !0,
                r = this.imageSize,
                o = this.imageScale) : (n = !1,
                r = this.croppedImageSize,
                o = this.croppedImageScale);
            let a = Math.min(r[0] * o, r[0])
                , i = Math.min(r[1] * o, r[1]);
            if (e.isDownsampled) {
                const u = Math.max(r[0] >> 1, 2048)
                    , d = Math.max(r[1] >> 1, 2048)
                    , f = Math.min(u / a, d / i, 1);
                a *= f,
                    i *= f
            }
            const c = this.renderer.render(this.photo, {
                width: a,
                height: i,
                ignoreCrop: n,
                maskOverlayIds: this.maskOverlayIds,
                showHighlightsClipping: this.histogram.showsHighlightsClipping,
                showShadowsClipping: this.histogram.showsShadowsClipping
            });
            if (this.mainViewport.setTexture(c),
            this.viewMode === "before" || this.viewMode === "compare") {
                this.originalPhoto.computeState(),
                    this.renderer.originalInputTexture.update({
                        format: this.renderer.backend.textureFormat,
                        width: a,
                        height: i
                    });
                const u = this.renderer.renderWithoutAdjustments(this.originalPhoto, {
                    width: a,
                    height: i,
                    outputTexture: this.renderer.originalInputTexture
                });
                this.viewMode === "compare" ? this.comparisonViewport?.setTexture(u) : this.mainViewport.setTexture(u)
            }
            this.renderViewport(),
            this.previewPhoto && this.mainViewport.computeState(this.originalPhoto.imageState),
                this.healingSourceDetector.run(),
            e.isDownsampled && this.histogram.update(this.photo)
        }
    }
;
// 🚀 Main entry
const fileInput = document.getElementById('fileInput');
const output = document.getElementById('output');

fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    output.textContent = 'Initializing...';

    // Create worker proxies
    const rawProxy = await createProxy('./assets/raw-loader.worker.js');
    const metadataProxy = await createProxy('./assets/raw-metadata-loader.worker.js');

    // Initialize the loader
    const loader = new RawLoader(rawProxy, metadataProxy);

    output.textContent = 'Loading RAW...';

    try {
        const result = await loader.loadRawFile(file);
        output.textContent = `Decoded RAW:\n\n${JSON.stringify(result, null, 2)}`;
    } catch (err) {
        output.textContent = `❌ Error:\n${err.message}`;
    }
});
