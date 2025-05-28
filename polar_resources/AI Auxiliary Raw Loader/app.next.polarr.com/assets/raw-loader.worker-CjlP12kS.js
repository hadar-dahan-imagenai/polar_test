var xm = Object.defineProperty;
var i = (e, t) => xm(e, "name", {
    value: t,
    configurable: !0
});
(function() {
    try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "0da8e6a0-714d-446a-bec4-bed189b32d2a",
        e._sentryDebugIdIdentifier = "sentry-dbid-0da8e6a0-714d-446a-bec4-bed189b32d2a")
    } catch {}
}
)();
var Mm = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
Mm.SENTRY_RELEASE = {
    id: "2.2.12+7b192bf"
};
var Hl = ( () => {
    var e = import.meta.url;
    return async function(t={}) {
        var n, r = t, s, o, a = new Promise( (l, h) => {
            s = l,
            o = h
        }
        ), c = typeof window == "object", u = typeof WorkerGlobalScope < "u";
        typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && process.type != "renderer";
        var d = u && self.name?.startsWith("em-pthread")
          , p = Object.assign({}, r)
          , f = "./this.program"
          , g = i( (l, h) => {
            throw h
        }
        , "quit_")
          , _ = "";
        function y(l) {
            return r.locateFile ? r.locateFile(l, _) : _ + l
        }
        i(y, "locateFile");
        var v, E;
        (c || u) && (u ? _ = self.location.href : typeof document < "u" && document.currentScript && (_ = document.currentScript.src),
        e && (_ = e),
        _.startsWith("blob:") ? _ = "" : _ = _.slice(0, _.replace(/[?#].*/, "").lastIndexOf("/") + 1),
        u && (E = i(l => {
            var h = new XMLHttpRequest;
            return h.open("GET", l, !1),
            h.responseType = "arraybuffer",
            h.send(null),
            new Uint8Array(h.response)
        }
        , "readBinary")),
        v = i(async l => {
            var h = await fetch(l, {
                credentials: "same-origin"
            });
            if (h.ok)
                return h.arrayBuffer();
            throw new Error(h.status + " : " + h.url)
        }
        , "readAsync"));
        var k = r.print || console.log.bind(console)
          , M = r.printErr || console.error.bind(console);
        Object.assign(r, p),
        p = null,
        r.arguments && r.arguments,
        r.thisProgram && (f = r.thisProgram);
        var P = r.wasmBinary, L, B, A = !1, R, x, H, D, U, W, re, le, fe, V, be, te = !1;
        function ke() {
            return L.buffer != x.buffer && Le(),
            x
        }
        i(ke, "GROWABLE_HEAP_I8");
        function ve() {
            return L.buffer != x.buffer && Le(),
            H
        }
        i(ve, "GROWABLE_HEAP_U8");
        function Zt() {
            return L.buffer != x.buffer && Le(),
            D
        }
        i(Zt, "GROWABLE_HEAP_I16");
        function tr() {
            return L.buffer != x.buffer && Le(),
            U
        }
        i(tr, "GROWABLE_HEAP_U16");
        function Ve() {
            return L.buffer != x.buffer && Le(),
            W
        }
        i(Ve, "GROWABLE_HEAP_I32");
        function de() {
            return L.buffer != x.buffer && Le(),
            re
        }
        i(de, "GROWABLE_HEAP_U32");
        function nr() {
            return L.buffer != x.buffer && Le(),
            le
        }
        i(nr, "GROWABLE_HEAP_F32");
        function Dt() {
            return L.buffer != x.buffer && Le(),
            be
        }
        if (i(Dt, "GROWABLE_HEAP_F64"),
        d) {
            let l = function(...S) {
                var b = S.join(" ");
                console.error(b)
            }
              , h = function(...S) {
                var b = S.join(" ");
                postMessage({
                    cmd: "alert",
                    text: b,
                    threadId: Gr()
                })
            }
              , m = function(S) {
                try {
                    var b = S.data
                      , I = b.cmd;
                    if (I === "load") {
                        let w = [];
                        self.onmessage = T => w.push(T),
                        self.startWorker = T => {
                            postMessage({
                                cmd: "loaded"
                            });
                            for (let O of w)
                                m(O);
                            self.onmessage = m
                        }
                        ;
                        for (const T of b.handlers)
                            (!r[T] || r[T].proxy) && (r[T] = (...O) => {
                                postMessage({
                                    cmd: "callHandler",
                                    handler: T,
                                    args: O
                                })
                            }
                            ,
                            T == "print" && (k = r[T]),
                            T == "printErr" && (M = r[T]));
                        L = b.wasmMemory,
                        Le(),
                        vn(b.wasmModule)
                    } else if (I === "run") {
                        Xp(b.pthread_ptr),
                        Ci(b.pthread_ptr, 0, 0, 1, 0, 0),
                        ue.threadInitTLS(),
                        wi(b.pthread_ptr),
                        en || (Lc(),
                        en = !0);
                        try {
                            Qp(b.start_routine, b.arg)
                        } catch (w) {
                            if (w != "unwind")
                                throw w
                        }
                    } else
                        b.target === "setimmediate" || (I === "checkMailbox" ? en && qr() : I && (M(`worker: received unknown command ${I}`),
                        M(b)))
                } catch (w) {
                    throw Fc(),
                    w
                }
            };
            i(l, "threadPrintErr"),
            i(h, "threadAlert"),
            i(m, "handleMessage");
            var vn, en = !1;
            r.printErr || (M = l),
            self.alert = h,
            self.onunhandledrejection = S => {
                throw S.reason || S
            }
            ,
            self.onmessage = m
        }
        function Le() {
            var l = L.buffer;
            r.HEAP8 = x = new Int8Array(l),
            r.HEAP16 = D = new Int16Array(l),
            r.HEAPU8 = H = new Uint8Array(l),
            r.HEAPU16 = U = new Uint16Array(l),
            r.HEAP32 = W = new Int32Array(l),
            r.HEAPU32 = re = new Uint32Array(l),
            r.HEAPF32 = le = new Float32Array(l),
            r.HEAPF64 = be = new Float64Array(l),
            r.HEAP64 = fe = new BigInt64Array(l),
            r.HEAPU64 = V = new BigUint64Array(l)
        }
        if (i(Le, "updateMemoryViews"),
        !d) {
            if (r.wasmMemory)
                L = r.wasmMemory;
            else {
                var En = r.INITIAL_MEMORY || 67108864;
                L = new WebAssembly.Memory({
                    initial: En / 65536,
                    maximum: 16384,
                    shared: !0
                })
            }
            Le()
        }
        function Lr() {
            if (r.preRun)
                for (typeof r.preRun == "function" && (r.preRun = [r.preRun]); r.preRun.length; )
                    ja(r.preRun.shift());
            Ba(Ha)
        }
        i(Lr, "preRun");
        function Fr() {
            if (te = !0,
            d)
                return startWorker(r);
            we.da()
        }
        i(Fr, "initRuntime");
        function pi() {
            if (!d) {
                if (r.postRun)
                    for (typeof r.postRun == "function" && (r.postRun = [r.postRun]); r.postRun.length; )
                        Jp(r.postRun.shift());
                Ba(Ka)
            }
        }
        i(pi, "postRun");
        var Fe = 0
          , Ke = null;
        function bn(l) {
            Fe++,
            r.monitorRunDependencies?.(Fe)
        }
        i(bn, "addRunDependency");
        function wn(l) {
            if (Fe--,
            r.monitorRunDependencies?.(Fe),
            Fe == 0 && Ke) {
                var h = Ke;
                Ke = null,
                h()
            }
        }
        i(wn, "removeRunDependency");
        function Lt(l) {
            r.onAbort?.(l),
            l = "Aborted(" + l + ")",
            M(l),
            A = !0,
            l += ". Build with -sASSERTIONS for more info.",
            te && Hc();
            var h = new WebAssembly.RuntimeError(l);
            throw o(h),
            h
        }
        i(Lt, "abort");
        var tn;
        function ae() {
            return r.locateFile ? y("@assets/rawspeed.wasm") : new URL("/assets/rawspeed-BR8Zo8cF.wasm",import.meta.url).href
        }
        i(ae, "findWasmBinary");
        function Ye(l) {
            if (l == tn && P)
                return new Uint8Array(P);
            if (E)
                return E(l);
            throw "both async and sync fetching of the wasm failed"
        }
        i(Ye, "getBinarySync");
        async function Q(l) {
            if (!P)
                try {
                    var h = await v(l);
                    return new Uint8Array(h)
                } catch {}
            return Ye(l)
        }
        i(Q, "getWasmBinary");
        async function ge(l, h) {
            try {
                var m = await Q(l)
                  , S = await WebAssembly.instantiate(m, h);
                return S
            } catch (b) {
                M(`failed to asynchronously prepare wasm: ${b}`),
                Lt(b)
            }
        }
        i(ge, "instantiateArrayBuffer");
        async function ce(l, h, m) {
            if (!l && typeof WebAssembly.instantiateStreaming == "function")
                try {
                    var S = fetch(h, {
                        credentials: "same-origin"
                    })
                      , b = await WebAssembly.instantiateStreaming(S, m);
                    return b
                } catch (I) {
                    M(`wasm streaming compile failed: ${I}`),
                    M("falling back to ArrayBuffer instantiation")
                }
            return ge(h, m)
        }
        i(ce, "instantiateAsync");
        function lt() {
            return Am(),
            {
                a: Nc
            }
        }
        i(lt, "getWasmImports");
        async function hi() {
            function l(I, w) {
                return we = I.exports,
                Zp(we.ka),
                Ya = we.ea,
                B = w,
                wn(),
                we
            }
            i(l, "receiveInstance"),
            bn();
            function h(I) {
                return l(I.instance, I.module)
            }
            i(h, "receiveInstantiationResult");
            var m = lt();
            if (r.instantiateWasm)
                return new Promise( (I, w) => {
                    r.instantiateWasm(m, (T, O) => {
                        l(T, O),
                        I(T.exports)
                    }
                    )
                }
                );
            if (d)
                return new Promise(I => {
                    vn = i(w => {
                        var T = new WebAssembly.Instance(w,lt());
                        I(l(T, w))
                    }
                    , "wasmModuleReceived")
                }
                );
            tn ??= ae();
            try {
                var S = await ce(P, tn, m)
                  , b = h(S);
                return b
            } catch (I) {
                return o(I),
                Promise.reject(I)
            }
        }
        i(hi, "createWasm");
        var La = {
            984552: (l, h) => {
                throw new Error($r(l) + ": " + $r(h))
            }
        };
        class Fa {
            static{i(this, "ExitStatus")
            }name = "ExitStatus";
            constructor(h) {
                this.message = `Program terminated with exit(${h})`,
                this.status = h
            }
        }
        var Ua = i(l => {
            l.terminate(),
            l.onmessage = h => {}
        }
        , "terminateWorker")
          , $a = i(l => {
            var h = ue.pthreads[l];
            ue.returnWorkerToPool(h)
        }
        , "cleanupThread")
          , Ba = i(l => {
            for (; l.length > 0; )
                l.shift()(r)
        }
        , "callRuntimeCallbacks")
          , Ha = []
          , ja = i(l => Ha.unshift(l), "addOnPreRun")
          , Wa = i(l => {
            var h = ue.getNewWorker();
            if (!h)
                return 6;
            ue.runningWorkers.push(h),
            ue.pthreads[l.pthread_ptr] = h,
            h.pthread_ptr = l.pthread_ptr;
            var m = {
                cmd: "run",
                start_routine: l.startRoutine,
                arg: l.arg,
                pthread_ptr: l.pthread_ptr
            };
            return h.postMessage(m, l.transferList),
            0
        }
        , "spawnThread")
          , mi = 0
          , gi = i( () => Xa || mi > 0, "keepRuntimeAlive")
          , qa = i( () => zc(), "stackSave")
          , yi = i(l => Wc(l), "stackRestore")
          , _i = i(l => qc(l), "stackAlloc")
          , Gp = 9007199254740992
          , Vp = -9007199254740992
          , Kp = i(l => l < Vp || l > Gp ? NaN : Number(l), "bigintToI53Checked")
          , qe = i( (l, h, m, ...S) => {
            for (var b = S.length * 2, I = qa(), w = _i(b * 8), T = w >> 3, O = 0; O < S.length; O++) {
                var F = S[O];
                typeof F == "bigint" ? (fe[T + 2 * O] = 1n,
                fe[T + 2 * O + 1] = F) : (fe[T + 2 * O] = 0n,
                Dt()[T + 2 * O + 1] = F)
            }
            var $ = Uc(l, h, b, w, m);
            return yi(I),
            $
        }
        , "proxyToMainThread");
        function za(l) {
            if (d)
                return qe(0, 0, 1, l);
            R = l,
            gi() || (ue.terminateAllThreads(),
            r.onExit?.(l),
            A = !0),
            g(l, new Fa(l))
        }
        i(za, "_proc_exit");
        var Ga = i(l => {
            if (l instanceof Fa || l == "unwind")
                return R;
            g(1, l)
        }
        , "handleException");
        function Va(l) {
            if (d)
                return qe(1, 0, 0, l);
            Si(l)
        }
        i(Va, "exitOnMainThread");
        var Yp = i( (l, h) => {
            if (R = l,
            d)
                throw Va(l),
                "unwind";
            za(l)
        }
        , "exitJS"), Si = Yp, ue = {
            unusedWorkers: [],
            runningWorkers: [],
            tlsInitFunctions: [],
            pthreads: {},
            init() {
                d || ue.initMainThread()
            },
            initMainThread() {
                for (var l = 4; l--; )
                    ue.allocateUnusedWorker();
                ja( () => {
                    bn(),
                    ue.loadWasmModuleToAllWorkers( () => wn())
                }
                )
            },
            terminateAllThreads: () => {
                for (var l of ue.runningWorkers)
                    Ua(l);
                for (var l of ue.unusedWorkers)
                    Ua(l);
                ue.unusedWorkers = [],
                ue.runningWorkers = [],
                ue.pthreads = {}
            }
            ,
            returnWorkerToPool: l => {
                var h = l.pthread_ptr;
                delete ue.pthreads[h],
                ue.unusedWorkers.push(l),
                ue.runningWorkers.splice(ue.runningWorkers.indexOf(l), 1),
                l.pthread_ptr = 0,
                $c(h)
            }
            ,
            threadInitTLS() {
                ue.tlsInitFunctions.forEach(l => l())
            },
            loadWasmModuleToWorker: l => new Promise(h => {
                l.onmessage = I => {
                    var w = I.data
                      , T = w.cmd;
                    if (w.targetThread && w.targetThread != Gr()) {
                        var O = ue.pthreads[w.targetThread];
                        O ? O.postMessage(w, w.transferList) : M(`Internal error! Worker sent a message "${T}" to target pthread ${w.targetThread}, but that thread no longer exists!`);
                        return
                    }
                    T === "checkMailbox" ? qr() : T === "spawnThread" ? Wa(w) : T === "cleanupThread" ? $a(w.thread) : T === "loaded" ? (l.loaded = !0,
                    h(l)) : T === "alert" ? alert(`Thread ${w.threadId}: ${w.text}`) : w.target === "setimmediate" ? l.postMessage(w) : T === "callHandler" ? r[w.handler](...w.args) : T && M(`worker sent an unknown command ${T}`)
                }
                ,
                l.onerror = I => {
                    var w = "worker sent an error!";
                    throw M(`${w} ${I.filename}:${I.lineno}: ${I.message}`),
                    I
                }
                ;
                var m = []
                  , S = ["onExit", "onAbort", "print", "printErr"];
                for (var b of S)
                    r.propertyIsEnumerable(b) && m.push(b);
                l.postMessage({
                    cmd: "load",
                    handlers: m,
                    wasmMemory: L,
                    wasmModule: B
                })
            }
            ),
            loadWasmModuleToAllWorkers(l) {
                if (d)
                    return l();
                Promise.all(ue.unusedWorkers.map(ue.loadWasmModuleToWorker)).then(l)
            },
            allocateUnusedWorker() {
                var l;
                l = new Worker(new URL("/assets/rawspeed-DB0urDFq.js",import.meta.url),{
                    type: "module",
                    name: "em-pthread"
                }),
                ue.unusedWorkers.push(l)
            },
            getNewWorker() {
                if (ue.unusedWorkers.length != 0)
                    return ue.unusedWorkers.pop()
            }
        }, Ka = [], Jp = i(l => Ka.unshift(l), "addOnPostRun"), Xp = i(l => {
            Le();
            var h = de()[l + 52 >> 2]
              , m = de()[l + 56 >> 2]
              , S = h - m;
            jc(h, S),
            yi(h)
        }
        , "establishStackSpace"), Ur = [], Ya, Ja = i(l => {
            var h = Ur[l];
            return h || (l >= Ur.length && (Ur.length = l + 1),
            Ur[l] = h = Ya.get(l)),
            h
        }
        , "getWasmTableEntry"), Qp = i( (l, h) => {
            mi = 0,
            Xa = 0;
            var m = Ja(l)(h);
            function S(b) {
                gi() ? R = b : Ai(b)
            }
            i(S, "finish"),
            S(m)
        }
        , "invokeEntryPoint"), Xa = r.noExitRuntime || !0, Zp = i(l => ue.tlsInitFunctions.push(l), "registerTLSInit");
        function Qa(l, h, m, S) {
            return d ? qe(2, 0, 1, l, h, m, S) : Za(l, h, m, S)
        }
        i(Qa, "pthreadCreateProxied");
        var eh = i( () => typeof SharedArrayBuffer < "u", "_emscripten_has_threading_support")
          , Za = i( (l, h, m, S) => {
            if (!eh())
                return 6;
            var b = []
              , I = 0;
            if (d && (b.length === 0 || I))
                return Qa(l, h, m, S);
            var w = {
                startRoutine: m,
                pthread_ptr: l,
                arg: S,
                transferList: b
            };
            return d ? (w.cmd = "spawnThread",
            postMessage(w, b),
            0) : Wa(w)
        }
        , "___pthread_create_js")
          , ec = typeof TextDecoder < "u" ? new TextDecoder : void 0
          , tc = i( (l, h=0, m=NaN) => {
            for (var S = h + m, b = h; l[b] && !(b >= S); )
                ++b;
            if (b - h > 16 && l.buffer && ec)
                return ec.decode(l.buffer instanceof ArrayBuffer ? l.subarray(h, b) : l.slice(h, b));
            for (var I = ""; h < b; ) {
                var w = l[h++];
                if (!(w & 128)) {
                    I += String.fromCharCode(w);
                    continue
                }
                var T = l[h++] & 63;
                if ((w & 224) == 192) {
                    I += String.fromCharCode((w & 31) << 6 | T);
                    continue
                }
                var O = l[h++] & 63;
                if ((w & 240) == 224 ? w = (w & 15) << 12 | T << 6 | O : w = (w & 7) << 18 | T << 12 | O << 6 | l[h++] & 63,
                w < 65536)
                    I += String.fromCharCode(w);
                else {
                    var F = w - 65536;
                    I += String.fromCharCode(55296 | F >> 10, 56320 | F & 1023)
                }
            }
            return I
        }
        , "UTF8ArrayToString")
          , $r = i( (l, h) => l ? tc(ve(), l, h) : "", "UTF8ToString");
        function nc(l, h, m) {
            return d ? qe(3, 0, 1, l, h, m) : 0
        }
        i(nc, "___syscall_fcntl64");
        var th = i( (l, h, m, S) => {
            if (!(S > 0))
                return 0;
            for (var b = m, I = m + S - 1, w = 0; w < l.length; ++w) {
                var T = l.charCodeAt(w);
                if (T >= 55296 && T <= 57343) {
                    var O = l.charCodeAt(++w);
                    T = 65536 + ((T & 1023) << 10) | O & 1023
                }
                if (T <= 127) {
                    if (m >= I)
                        break;
                    h[m++] = T
                } else if (T <= 2047) {
                    if (m + 1 >= I)
                        break;
                    h[m++] = 192 | T >> 6,
                    h[m++] = 128 | T & 63
                } else if (T <= 65535) {
                    if (m + 2 >= I)
                        break;
                    h[m++] = 224 | T >> 12,
                    h[m++] = 128 | T >> 6 & 63,
                    h[m++] = 128 | T & 63
                } else {
                    if (m + 3 >= I)
                        break;
                    h[m++] = 240 | T >> 18,
                    h[m++] = 128 | T >> 12 & 63,
                    h[m++] = 128 | T >> 6 & 63,
                    h[m++] = 128 | T & 63
                }
            }
            return h[m] = 0,
            m - b
        }
        , "stringToUTF8Array")
          , Tn = i( (l, h, m) => th(l, ve(), h, m), "stringToUTF8");
        function rc(l, h, m) {
            if (d)
                return qe(4, 0, 1, l, h, m)
        }
        i(rc, "___syscall_getdents64");
        function sc(l, h, m) {
            return d ? qe(5, 0, 1, l, h, m) : 0
        }
        i(sc, "___syscall_ioctl");
        function ic(l, h, m, S) {
            if (d)
                return qe(6, 0, 1, l, h, m, S)
        }
        i(ic, "___syscall_openat");
        function oc(l, h, m) {
            if (d)
                return qe(7, 0, 1, l, h, m)
        }
        i(oc, "___syscall_unlinkat");
        var nh = i( () => Lt(""), "__abort_js")
          , Br = {}
          , vi = i(l => {
            for (; l.length; ) {
                var h = l.pop()
                  , m = l.pop();
                m(h)
            }
        }
        , "runDestructors");
        function Hr(l) {
            return this.fromWireType(de()[l >> 2])
        }
        i(Hr, "readPointer");
        var In = {}, nn = {}, jr = {}, ac, cc = i(l => {
            throw new ac(l)
        }
        , "throwInternalError"), uc = i( (l, h, m) => {
            l.forEach(T => jr[T] = h);
            function S(T) {
                var O = m(T);
                O.length !== l.length && cc("Mismatched type converter count");
                for (var F = 0; F < l.length; ++F)
                    dt(l[F], O[F])
            }
            i(S, "onComplete");
            var b = new Array(h.length)
              , I = []
              , w = 0;
            h.forEach( (T, O) => {
                nn.hasOwnProperty(T) ? b[O] = nn[T] : (I.push(T),
                In.hasOwnProperty(T) || (In[T] = []),
                In[T].push( () => {
                    b[O] = nn[T],
                    ++w,
                    w === I.length && S(b)
                }
                ))
            }
            ),
            I.length === 0 && S(b)
        }
        , "whenDependentTypesAreResolved"), rh = i(l => {
            var h = Br[l];
            delete Br[l];
            var m = h.rawConstructor
              , S = h.rawDestructor
              , b = h.fields
              , I = b.map(w => w.getterReturnType).concat(b.map(w => w.setterArgumentType));
            uc([l], I, w => {
                var T = {};
                return b.forEach( (O, F) => {
                    var $ = O.fieldName
                      , X = w[F]
                      , Te = O.getter
                      , tt = O.getterContext
                      , ye = w[F + b.length]
                      , ft = O.setter
                      , xi = O.setterContext;
                    T[$] = {
                        read: ir => X.fromWireType(Te(tt, ir)),
                        write: (ir, Om) => {
                            var Gc = [];
                            ft(xi, ir, ye.toWireType(Gc, Om)),
                            vi(Gc)
                        }
                    }
                }
                ),
                [{
                    name: h.name,
                    fromWireType: O => {
                        var F = {};
                        for (var $ in T)
                            F[$] = T[$].read(O);
                        return S(O),
                        F
                    }
                    ,
                    toWireType: (O, F) => {
                        for (var $ in T)
                            if (!($ in F))
                                throw new TypeError(`Missing field: "${$}"`);
                        var X = m();
                        for ($ in T)
                            T[$].write(X, F[$]);
                        return O !== null && O.push(S, X),
                        X
                    }
                    ,
                    argPackAdvance: vt,
                    readValueFromPointer: Hr,
                    destructorFunction: S
                }]
            }
            )
        }
        , "__embind_finalize_value_object"), sh = i(l => {
            if (l === null)
                return "null";
            var h = typeof l;
            return h === "object" || h === "array" || h === "function" ? l.toString() : "" + l
        }
        , "embindRepr"), ih = i( () => {
            for (var l = new Array(256), h = 0; h < 256; ++h)
                l[h] = String.fromCharCode(h);
            lc = l
        }
        , "embind_init_charCodes"), lc, ze = i(l => {
            for (var h = "", m = l; ve()[m]; )
                h += lc[ve()[m++]];
            return h
        }
        , "readLatin1String"), dc, Je = i(l => {
            throw new dc(l)
        }
        , "throwBindingError");
        function oh(l, h, m={}) {
            var S = h.name;
            if (l || Je(`type "${S}" must have a positive integer typeid pointer`),
            nn.hasOwnProperty(l)) {
                if (m.ignoreDuplicateRegistrations)
                    return;
                Je(`Cannot register type '${S}' twice`)
            }
            if (nn[l] = h,
            delete jr[l],
            In.hasOwnProperty(l)) {
                var b = In[l];
                delete In[l],
                b.forEach(I => I())
            }
        }
        i(oh, "sharedRegisterType");
        function dt(l, h, m={}) {
            return oh(l, h, m)
        }
        i(dt, "registerType");
        var fc = i( (l, h, m) => {
            switch (h) {
            case 1:
                return m ? S => ke()[S] : S => ve()[S];
            case 2:
                return m ? S => Zt()[S >> 1] : S => tr()[S >> 1];
            case 4:
                return m ? S => Ve()[S >> 2] : S => de()[S >> 2];
            case 8:
                return m ? S => fe[S >> 3] : S => V[S >> 3];
            default:
                throw new TypeError(`invalid integer width (${h}): ${l}`)
            }
        }
        , "integerReadValueFromPointer")
          , ah = i( (l, h, m, S, b) => {
            h = ze(h);
            var I = h.indexOf("u") != -1;
            dt(l, {
                name: h,
                fromWireType: w => w,
                toWireType: function(w, T) {
                    if (typeof T != "bigint" && typeof T != "number")
                        throw new TypeError(`Cannot convert "${sh(T)}" to ${this.name}`);
                    return typeof T == "number" && (T = BigInt(T)),
                    T
                },
                argPackAdvance: vt,
                readValueFromPointer: fc(h, m, !I),
                destructorFunction: null
            })
        }
        , "__embind_register_bigint")
          , vt = 8
          , ch = i( (l, h, m, S) => {
            h = ze(h),
            dt(l, {
                name: h,
                fromWireType: function(b) {
                    return !!b
                },
                toWireType: function(b, I) {
                    return I ? m : S
                },
                argPackAdvance: vt,
                readValueFromPointer: function(b) {
                    return this.fromWireType(ve()[b])
                },
                destructorFunction: null
            })
        }
        , "__embind_register_bool")
          , Ei = []
          , Et = []
          , bi = i(l => {
            l > 9 && --Et[l + 1] === 0 && (Et[l] = void 0,
            Ei.push(l))
        }
        , "__emval_decref")
          , uh = i( () => Et.length / 2 - 5 - Ei.length, "count_emval_handles")
          , lh = i( () => {
            Et.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1),
            r.count_emval_handles = uh
        }
        , "init_emval")
          , De = {
            toValue: l => (l || Je("Cannot use deleted val. handle = " + l),
            Et[l]),
            toHandle: l => {
                switch (l) {
                case void 0:
                    return 2;
                case null:
                    return 4;
                case !0:
                    return 6;
                case !1:
                    return 8;
                default:
                    {
                        const h = Ei.pop() || Et.length;
                        return Et[h] = l,
                        Et[h + 1] = 1,
                        h
                    }
                }
            }
        }
          , dh = {
            name: "emscripten::val",
            fromWireType: l => {
                var h = De.toValue(l);
                return bi(l),
                h
            }
            ,
            toWireType: (l, h) => De.toHandle(h),
            argPackAdvance: vt,
            readValueFromPointer: Hr,
            destructorFunction: null
        }
          , fh = i(l => dt(l, dh), "__embind_register_emval")
          , ph = i( (l, h) => {
            switch (h) {
            case 4:
                return function(m) {
                    return this.fromWireType(nr()[m >> 2])
                }
                ;
            case 8:
                return function(m) {
                    return this.fromWireType(Dt()[m >> 3])
                }
                ;
            default:
                throw new TypeError(`invalid float width (${h}): ${l}`)
            }
        }
        , "floatReadValueFromPointer")
          , hh = i( (l, h, m) => {
            h = ze(h),
            dt(l, {
                name: h,
                fromWireType: S => S,
                toWireType: (S, b) => b,
                argPackAdvance: vt,
                readValueFromPointer: ph(h, m),
                destructorFunction: null
            })
        }
        , "__embind_register_float")
          , Wr = i( (l, h) => Object.defineProperty(h, "name", {
            value: l
        }), "createNamedFunction");
        function pc(l) {
            for (var h = 1; h < l.length; ++h)
                if (l[h] !== null && l[h].destructorFunction === void 0)
                    return !0;
            return !1
        }
        i(pc, "usesDestructorStack");
        function hc(l, h) {
            if (!(l instanceof Function))
                throw new TypeError(`new_ called with constructor type ${typeof l} which is not a function`);
            var m = Wr(l.name || "unknownFunctionName", function() {});
            m.prototype = l.prototype;
            var S = new m
              , b = l.apply(S, h);
            return b instanceof Object ? b : S
        }
        i(hc, "newFunc");
        function mh(l, h, m, S) {
            var b = pc(l)
              , I = l.length - 2
              , w = []
              , T = ["fn"];
            h && T.push("thisWired");
            for (var O = 0; O < I; ++O)
                w.push(`arg${O}`),
                T.push(`arg${O}Wired`);
            w = w.join(","),
            T = T.join(",");
            var F = `return function (${w}) {
`;
            b && (F += `var destructors = [];
`);
            var $ = b ? "destructors" : "null"
              , X = ["humanName", "throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
            h && (F += `var thisWired = classParam['toWireType'](${$}, this);
`);
            for (var O = 0; O < I; ++O)
                F += `var arg${O}Wired = argType${O}['toWireType'](${$}, arg${O});
`,
                X.push(`argType${O}`);
            if (F += (m || S ? "var rv = " : "") + `invoker(${T});
`,
            b)
                F += `runDestructors(destructors);
`;
            else
                for (var O = h ? 1 : 2; O < l.length; ++O) {
                    var Te = O === 1 ? "thisWired" : "arg" + (O - 2) + "Wired";
                    l[O].destructorFunction !== null && (F += `${Te}_dtor(${Te});
`,
                    X.push(`${Te}_dtor`))
                }
            return m && (F += `var ret = retType['fromWireType'](rv);
return ret;
`),
            F += `}
`,
            [X, F]
        }
        i(mh, "createJsInvoker");
        function gh(l, h, m, S, b, I) {
            var w = h.length;
            w < 2 && Je("argTypes array size mismatch! Must at least get return value and 'this' types!");
            for (var T = h[1] !== null && m !== null, O = pc(h), F = h[0].name !== "void", $ = [l, Je, S, b, vi, h[0], h[1]], X = 0; X < w - 2; ++X)
                $.push(h[X + 2]);
            if (!O)
                for (var X = T ? 1 : 2; X < h.length; ++X)
                    h[X].destructorFunction !== null && $.push(h[X].destructorFunction);
            let[Te,tt] = mh(h, T, F, I);
            Te.push(tt);
            var ye = hc(Function, Te)(...$);
            return Wr(l, ye)
        }
        i(gh, "craftInvokerFunction");
        var yh = i( (l, h, m) => {
            if (l[h].overloadTable === void 0) {
                var S = l[h];
                l[h] = function(...b) {
                    return l[h].overloadTable.hasOwnProperty(b.length) || Je(`Function '${m}' called with an invalid number of arguments (${b.length}) - expects one of (${l[h].overloadTable})!`),
                    l[h].overloadTable[b.length].apply(this, b)
                }
                ,
                l[h].overloadTable = [],
                l[h].overloadTable[S.argCount] = S
            }
        }
        , "ensureOverloadTable"), _h = i( (l, h, m) => {
            r.hasOwnProperty(l) ? ((m === void 0 || r[l].overloadTable !== void 0 && r[l].overloadTable[m] !== void 0) && Je(`Cannot register public name '${l}' twice`),
            yh(r, l, l),
            r[l].overloadTable.hasOwnProperty(m) && Je(`Cannot register multiple overloads of a function with the same number of arguments (${m})!`),
            r[l].overloadTable[m] = h) : (r[l] = h,
            r[l].argCount = m)
        }
        , "exposePublicSymbol"), Sh = i( (l, h) => {
            for (var m = [], S = 0; S < l; S++)
                m.push(de()[h + S * 4 >> 2]);
            return m
        }
        , "heap32VectorToArray"), vh = i( (l, h, m) => {
            r.hasOwnProperty(l) || cc("Replacing nonexistent public symbol"),
            r[l].overloadTable !== void 0 && m !== void 0 ? r[l].overloadTable[m] = h : (r[l] = h,
            r[l].argCount = m)
        }
        , "replacePublicSymbol"), rr = i( (l, h) => {
            l = ze(l);
            function m() {
                return Ja(h)
            }
            i(m, "makeDynCaller");
            var S = m();
            return typeof S != "function" && Je(`unknown function pointer with signature ${l}: ${h}`),
            S
        }
        , "embind__requireFunction"), Eh = i( (l, h) => {
            var m = Wr(h, function(S) {
                this.name = h,
                this.message = S;
                var b = new Error(S).stack;
                b !== void 0 && (this.stack = this.toString() + `
` + b.replace(/^Error(:[^\n]*)?\n/, ""))
            });
            return m.prototype = Object.create(l.prototype),
            m.prototype.constructor = m,
            m.prototype.toString = function() {
                return this.message === void 0 ? this.name : `${this.name}: ${this.message}`
            }
            ,
            m
        }
        , "extendError"), mc, gc = i(l => {
            var h = Dc(l)
              , m = ze(h);
            return bt(h),
            m
        }
        , "getTypeName"), bh = i( (l, h) => {
            var m = []
              , S = {};
            function b(I) {
                if (!S[I] && !nn[I]) {
                    if (jr[I]) {
                        jr[I].forEach(b);
                        return
                    }
                    m.push(I),
                    S[I] = !0
                }
            }
            throw i(b, "visit"),
            h.forEach(b),
            new mc(`${l}: ` + m.map(gc).join([", "]))
        }
        , "throwUnboundTypeError"), wh = i(l => {
            l = l.trim();
            const h = l.indexOf("(");
            return h === -1 ? l : l.slice(0, h)
        }
        , "getFunctionName"), Th = i( (l, h, m, S, b, I, w, T) => {
            var O = Sh(h, m);
            l = ze(l),
            l = wh(l),
            b = rr(S, b),
            _h(l, function() {
                bh(`Cannot call ${l} due to unbound types`, O)
            }, h - 1),
            uc([], O, F => {
                var $ = [F[0], null].concat(F.slice(1));
                return vh(l, gh(l, $, null, b, I, w), h - 1),
                []
            }
            )
        }
        , "__embind_register_function"), Ih = i( (l, h, m, S, b) => {
            h = ze(h);
            var I = i($ => $, "fromWireType");
            if (S === 0) {
                var w = 32 - 8 * m;
                I = i($ => $ << w >>> w, "fromWireType")
            }
            var T = h.includes("unsigned"), O = i( ($, X) => {}
            , "checkAssertions"), F;
            T ? F = i(function($, X) {
                return O(X, this.name),
                X >>> 0
            }, "toWireType") : F = i(function($, X) {
                return O(X, this.name),
                X
            }, "toWireType"),
            dt(l, {
                name: h,
                fromWireType: I,
                toWireType: F,
                argPackAdvance: vt,
                readValueFromPointer: fc(h, m, S !== 0),
                destructorFunction: null
            })
        }
        , "__embind_register_integer"), kh = i( (l, h, m) => {
            var S = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array]
              , b = S[h];
            function I(w) {
                var T = de()[w >> 2]
                  , O = de()[w + 4 >> 2];
                return new b(ke().buffer,O,T)
            }
            i(I, "decodeMemoryView"),
            m = ze(m),
            dt(l, {
                name: m,
                fromWireType: I,
                argPackAdvance: vt,
                readValueFromPointer: I
            }, {
                ignoreDuplicateRegistrations: !0
            })
        }
        , "__embind_register_memory_view"), yc = i(l => {
            for (var h = 0, m = 0; m < l.length; ++m) {
                var S = l.charCodeAt(m);
                S <= 127 ? h++ : S <= 2047 ? h += 2 : S >= 55296 && S <= 57343 ? (h += 4,
                ++m) : h += 3
            }
            return h
        }
        , "lengthBytesUTF8"), Rh = i( (l, h) => {
            h = ze(h),
            dt(l, {
                name: h,
                fromWireType(m) {
                    for (var S = de()[m >> 2], b = m + 4, I, w, T = b, w = 0; w <= S; ++w) {
                        var O = b + w;
                        if (w == S || ve()[O] == 0) {
                            var F = O - T
                              , $ = $r(T, F);
                            I === void 0 ? I = $ : (I += "\0",
                            I += $),
                            T = O + 1
                        }
                    }
                    return bt(m),
                    I
                },
                toWireType(m, S) {
                    S instanceof ArrayBuffer && (S = new Uint8Array(S));
                    var b, I = typeof S == "string";
                    I || S instanceof Uint8Array || S instanceof Uint8ClampedArray || S instanceof Int8Array || Je("Cannot pass non-string to std::string"),
                    I ? b = yc(S) : b = S.length;
                    var w = Ri(4 + b + 1)
                      , T = w + 4;
                    if (de()[w >> 2] = b,
                    I)
                        Tn(S, T, b + 1);
                    else if (I)
                        for (var O = 0; O < b; ++O) {
                            var F = S.charCodeAt(O);
                            F > 255 && (bt(w),
                            Je("String has UTF-16 code units that do not fit in 8 bits")),
                            ve()[T + O] = F
                        }
                    else
                        for (var O = 0; O < b; ++O)
                            ve()[T + O] = S[O];
                    return m !== null && m.push(bt, w),
                    w
                },
                argPackAdvance: vt,
                readValueFromPointer: Hr,
                destructorFunction(m) {
                    bt(m)
                }
            })
        }
        , "__embind_register_std_string"), _c = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, Ch = i( (l, h) => {
            for (var m = l, S = m >> 1, b = S + h / 2; !(S >= b) && tr()[S]; )
                ++S;
            if (m = S << 1,
            m - l > 32 && _c)
                return _c.decode(ve().slice(l, m));
            for (var I = "", w = 0; !(w >= h / 2); ++w) {
                var T = Zt()[l + w * 2 >> 1];
                if (T == 0)
                    break;
                I += String.fromCharCode(T)
            }
            return I
        }
        , "UTF16ToString"), Ah = i( (l, h, m) => {
            if (m ??= 2147483647,
            m < 2)
                return 0;
            m -= 2;
            for (var S = h, b = m < l.length * 2 ? m / 2 : l.length, I = 0; I < b; ++I) {
                var w = l.charCodeAt(I);
                Zt()[h >> 1] = w,
                h += 2
            }
            return Zt()[h >> 1] = 0,
            h - S
        }
        , "stringToUTF16"), Oh = i(l => l.length * 2, "lengthBytesUTF16"), xh = i( (l, h) => {
            for (var m = 0, S = ""; !(m >= h / 4); ) {
                var b = Ve()[l + m * 4 >> 2];
                if (b == 0)
                    break;
                if (++m,
                b >= 65536) {
                    var I = b - 65536;
                    S += String.fromCharCode(55296 | I >> 10, 56320 | I & 1023)
                } else
                    S += String.fromCharCode(b)
            }
            return S
        }
        , "UTF32ToString"), Mh = i( (l, h, m) => {
            if (m ??= 2147483647,
            m < 4)
                return 0;
            for (var S = h, b = S + m - 4, I = 0; I < l.length; ++I) {
                var w = l.charCodeAt(I);
                if (w >= 55296 && w <= 57343) {
                    var T = l.charCodeAt(++I);
                    w = 65536 + ((w & 1023) << 10) | T & 1023
                }
                if (Ve()[h >> 2] = w,
                h += 4,
                h + 4 > b)
                    break
            }
            return Ve()[h >> 2] = 0,
            h - S
        }
        , "stringToUTF32"), Ph = i(l => {
            for (var h = 0, m = 0; m < l.length; ++m) {
                var S = l.charCodeAt(m);
                S >= 55296 && S <= 57343 && ++m,
                h += 4
            }
            return h
        }
        , "lengthBytesUTF32"), Nh = i( (l, h, m) => {
            m = ze(m);
            var S, b, I, w;
            h === 2 ? (S = Ch,
            b = Ah,
            w = Oh,
            I = i(T => tr()[T >> 1], "readCharAt")) : h === 4 && (S = xh,
            b = Mh,
            w = Ph,
            I = i(T => de()[T >> 2], "readCharAt")),
            dt(l, {
                name: m,
                fromWireType: T => {
                    for (var O = de()[T >> 2], F, $ = T + 4, X = 0; X <= O; ++X) {
                        var Te = T + 4 + X * h;
                        if (X == O || I(Te) == 0) {
                            var tt = Te - $
                              , ye = S($, tt);
                            F === void 0 ? F = ye : (F += "\0",
                            F += ye),
                            $ = Te + h
                        }
                    }
                    return bt(T),
                    F
                }
                ,
                toWireType: (T, O) => {
                    typeof O != "string" && Je(`Cannot pass non-string to C++ string type ${m}`);
                    var F = w(O)
                      , $ = Ri(4 + F + h);
                    return de()[$ >> 2] = F / h,
                    b(O, $ + 4, F + h),
                    T !== null && T.push(bt, $),
                    $
                }
                ,
                argPackAdvance: vt,
                readValueFromPointer: Hr,
                destructorFunction(T) {
                    bt(T)
                }
            })
        }
        , "__embind_register_std_wstring"), Dh = i( (l, h, m, S, b, I) => {
            Br[l] = {
                name: ze(h),
                rawConstructor: rr(m, S),
                rawDestructor: rr(b, I),
                fields: []
            }
        }
        , "__embind_register_value_object"), Lh = i( (l, h, m, S, b, I, w, T, O, F) => {
            Br[l].fields.push({
                fieldName: ze(h),
                getterReturnType: m,
                getter: rr(S, b),
                getterContext: I,
                setterArgumentType: w,
                setter: rr(T, O),
                setterContext: F
            })
        }
        , "__embind_register_value_object_field"), Fh = i( (l, h) => {
            h = ze(h),
            dt(l, {
                isVoid: !0,
                name: h,
                argPackAdvance: 0,
                fromWireType: () => {}
                ,
                toWireType: (m, S) => {}
            })
        }
        , "__embind_register_void"), Uh = i(l => {
            Ci(l, !u, 1, !c, 65536, !1),
            ue.threadInitTLS()
        }
        , "__emscripten_init_main_thread_js"), $h = i( () => {
            if (!gi())
                try {
                    d ? Ai(R) : Si(R)
                } catch (l) {
                    Ga(l)
                }
        }
        , "maybeExit"), Bh = i(l => {
            if (!A)
                try {
                    l(),
                    $h()
                } catch (h) {
                    Ga(h)
                }
        }
        , "callUserCallback"), wi = i(l => {
            if (typeof Atomics.waitAsync == "function") {
                var h = Atomics.waitAsync(Ve(), l >> 2, l);
                h.value.then(qr);
                var m = l + 128;
                Atomics.store(Ve(), m >> 2, 1)
            }
        }
        , "__emscripten_thread_mailbox_await"), qr = i( () => {
            var l = Gr();
            l && (wi(l),
            Bh(Bc))
        }
        , "checkMailbox"), Hh = i( (l, h) => {
            if (l == h)
                setTimeout(qr);
            else if (d)
                postMessage({
                    targetThread: l,
                    cmd: "checkMailbox"
                });
            else {
                var m = ue.pthreads[l];
                if (!m)
                    return;
                m.postMessage({
                    cmd: "checkMailbox"
                })
            }
        }
        , "__emscripten_notify_mailbox_postmessage"), zr = [], jh = i( (l, h, m, S, b) => {
            S /= 2,
            zr.length = S;
            for (var I = b >> 3, w = 0; w < S; w++)
                fe[I + 2 * w] ? zr[w] = fe[I + 2 * w + 1] : zr[w] = Dt()[I + 2 * w + 1];
            var T = h ? La[h] : Cm[l];
            ue.currentProxiedOperationCallerThread = m;
            var O = T(...zr);
            return ue.currentProxiedOperationCallerThread = 0,
            O
        }
        , "__emscripten_receive_on_main_thread_js"), Wh = i(l => {
            d ? postMessage({
                cmd: "cleanupThread",
                thread: l
            }) : $a(l)
        }
        , "__emscripten_thread_cleanup"), qh = i(l => {}
        , "__emscripten_thread_set_strongref"), Ti = [], zh = i( (l, h, m, S) => (l = Ti[l],
        h = De.toValue(h),
        l(null, h, m, S)), "__emval_call"), Gh = {}, Sc = i(l => {
            var h = Gh[l];
            return h === void 0 ? ze(l) : h
        }
        , "getStringOrSymbol"), vc = i( () => typeof globalThis == "object" ? globalThis : function() {
            return Function
        }()("return this")(), "emval_get_global"), Vh = i(l => l === 0 ? De.toHandle(vc()) : (l = Sc(l),
        De.toHandle(vc()[l])), "__emval_get_global"), Kh = i(l => {
            var h = Ti.length;
            return Ti.push(l),
            h
        }
        , "emval_addMethodCaller"), Ec = i( (l, h) => {
            var m = nn[l];
            return m === void 0 && Je(`${h} has unknown type ${gc(l)}`),
            m
        }
        , "requireRegisteredType"), Yh = i( (l, h) => {
            for (var m = new Array(l), S = 0; S < l; ++S)
                m[S] = Ec(de()[h + S * 4 >> 2], "parameter " + S);
            return m
        }
        , "emval_lookupTypes"), Jh = i( (l, h, m) => {
            var S = []
              , b = l.toWireType(S, m);
            return S.length && (de()[h >> 2] = De.toHandle(S)),
            b
        }
        , "emval_returnValue"), Xh = i( (l, h, m) => {
            var S = Yh(l, h)
              , b = S.shift();
            l--;
            var I = `return function (obj, func, destructorsRef, args) {
`
              , w = 0
              , T = [];
            m === 0 && T.push("obj");
            for (var O = ["retType"], F = [b], $ = 0; $ < l; ++$)
                T.push("arg" + $),
                O.push("argType" + $),
                F.push(S[$]),
                I += `  var arg${$} = argType${$}.readValueFromPointer(args${w ? "+" + w : ""});
`,
                w += S[$].argPackAdvance;
            var X = m === 1 ? "new func" : "func.call";
            I += `  var rv = ${X}(${T.join(", ")});
`,
            b.isVoid || (O.push("emval_returnValue"),
            F.push(Jh),
            I += `  return emval_returnValue(retType, destructorsRef, rv);
`),
            I += `};
`,
            O.push(I);
            var Te = hc(Function, O)(...F)
              , tt = `methodCaller<(${S.map(ye => ye.name).join(", ")}) => ${b.name}>`;
            return Kh(Wr(tt, Te))
        }
        , "__emval_get_method_caller"), Qh = i(l => {
            l > 9 && (Et[l + 1] += 1)
        }
        , "__emval_incref"), Zh = i( () => De.toHandle([]), "__emval_new_array"), em = i(l => {
            l = De.toValue(l);
            for (var h = new Array(l.length), m = 0; m < l.length; m++)
                h[m] = l[m];
            return De.toHandle(h)
        }
        , "__emval_new_array_from_memory_view"), tm = i(l => De.toHandle(Sc(l)), "__emval_new_cstring"), nm = i( () => De.toHandle({}), "__emval_new_object"), rm = i(l => {
            var h = De.toValue(l);
            vi(h),
            bi(l)
        }
        , "__emval_run_destructors"), sm = i( (l, h, m) => {
            l = De.toValue(l),
            h = De.toValue(h),
            m = De.toValue(m),
            l[h] = m
        }
        , "__emval_set_property"), im = i( (l, h) => {
            l = Ec(l, "_emval_take_value");
            var m = l.readValueFromPointer(h);
            return De.toHandle(m)
        }
        , "__emval_take_value"), om = i( (l, h, m, S) => {
            var b = new Date().getFullYear()
              , I = new Date(b,0,1)
              , w = new Date(b,6,1)
              , T = I.getTimezoneOffset()
              , O = w.getTimezoneOffset()
              , F = Math.max(T, O);
            de()[l >> 2] = F * 60,
            Ve()[h >> 2] = +(T != O);
            var $ = i(tt => {
                var ye = tt >= 0 ? "-" : "+"
                  , ft = Math.abs(tt)
                  , xi = String(Math.floor(ft / 60)).padStart(2, "0")
                  , ir = String(ft % 60).padStart(2, "0");
                return `UTC${ye}${xi}${ir}`
            }
            , "extractZone")
              , X = $(T)
              , Te = $(O);
            O < T ? (Tn(X, m, 17),
            Tn(Te, S, 17)) : (Tn(X, S, 17),
            Tn(Te, m, 17))
        }
        , "__tzset_js"), bc = i( () => performance.timeOrigin + performance.now(), "_emscripten_get_now"), wc = i( () => Date.now(), "_emscripten_date_now"), am = i(l => l >= 0 && l <= 3, "checkWasiClock");
        function cm(l, h, m) {
            if (!am(l))
                return 28;
            var S;
            l === 0 ? S = wc() : S = bc();
            var b = Math.round(S * 1e3 * 1e3);
            return fe[m >> 3] = BigInt(b),
            0
        }
        i(cm, "_clock_time_get");
        var Ii = []
          , um = i( (l, h) => {
            Ii.length = 0;
            for (var m; m = ve()[l++]; ) {
                var S = m != 105;
                S &= m != 112,
                h += S && h % 8 ? 4 : 0,
                Ii.push(m == 112 ? de()[h >> 2] : m == 106 ? fe[h >> 3] : m == 105 ? Ve()[h >> 2] : Dt()[h >> 3]),
                h += S ? 8 : 4
            }
            return Ii
        }
        , "readEmAsmArgs")
          , lm = i( (l, h, m) => {
            var S = um(h, m);
            return La[l](...S)
        }
        , "runEmAsmFunction")
          , dm = i( (l, h, m) => lm(l, h, m), "_emscripten_asm_const_int")
          , fm = i( () => {}
        , "_emscripten_check_blocking_allowed")
          , pm = i( () => {
            mi += 1
        }
        , "runtimeKeepalivePush")
          , hm = i( () => {
            throw pm(),
            "unwind"
        }
        , "_emscripten_exit_with_live_runtime")
          , Tc = i( () => 1073741824, "getHeapMax")
          , mm = i( () => Tc(), "_emscripten_get_heap_max")
          , gm = i( () => navigator.hardwareConcurrency, "_emscripten_num_logical_cores")
          , ym = i( (l, h) => Math.ceil(l / h) * h, "alignMemory")
          , Ic = i(l => {
            Lt("OOM")
        }
        , "abortOnCannotGrowMemory")
          , _m = i(l => {
            var h = L.buffer
              , m = (l - h.byteLength + 65535) / 65536 | 0;
            try {
                return L.grow(m),
                Le(),
                1
            } catch {}
        }
        , "growMemory")
          , Sm = i(l => {
            var h = ve().length;
            if (l >>>= 0,
            l <= h)
                return !1;
            var m = Tc();
            l > m && Ic();
            for (var S = 1; S <= 4; S *= 2) {
                var b = h * (1 + .2 / S);
                b = Math.min(b, l + 100663296);
                var I = Math.min(m, ym(Math.max(l, b), 65536))
                  , w = _m(I);
                if (w)
                    return !0
            }
            Ic()
        }
        , "_emscripten_resize_heap")
          , vm = i( () => {
            throw "unwind"
        }
        , "_emscripten_unwind_to_js_event_loop")
          , ki = {}
          , Em = i( () => f || "./this.program", "getExecutableName")
          , sr = i( () => {
            if (!sr.strings) {
                var l = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8"
                  , h = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: l,
                    _: Em()
                };
                for (var m in ki)
                    ki[m] === void 0 ? delete h[m] : h[m] = ki[m];
                var S = [];
                for (var m in h)
                    S.push(`${m}=${h[m]}`);
                sr.strings = S
            }
            return sr.strings
        }
        , "getEnvStrings")
          , bm = i( (l, h) => {
            for (var m = 0; m < l.length; ++m)
                ke()[h++] = l.charCodeAt(m);
            ke()[h] = 0
        }
        , "stringToAscii")
          , kc = i(function(l, h) {
            if (d)
                return qe(8, 0, 1, l, h);
            var m = 0;
            return sr().forEach( (S, b) => {
                var I = h + m;
                de()[l + b * 4 >> 2] = I,
                bm(S, I),
                m += S.length + 1
            }
            ),
            0
        }, "_environ_get")
          , Rc = i(function(l, h) {
            if (d)
                return qe(9, 0, 1, l, h);
            var m = sr();
            de()[l >> 2] = m.length;
            var S = 0;
            return m.forEach(b => S += b.length + 1),
            de()[h >> 2] = S,
            0
        }, "_environ_sizes_get");
        function Cc(l) {
            return d ? qe(10, 0, 1, l) : 52
        }
        i(Cc, "_fd_close");
        function Ac(l, h, m, S) {
            return d ? qe(11, 0, 1, l, h, m, S) : 52
        }
        i(Ac, "_fd_read");
        function Oc(l, h, m, S) {
            return d ? qe(12, 0, 1, l, h, m, S) : (h = Kp(h),
            70)
        }
        i(Oc, "_fd_seek");
        var wm = [null, [], []]
          , Tm = i( (l, h) => {
            var m = wm[l];
            h === 0 || h === 10 ? ((l === 1 ? k : M)(tc(m)),
            m.length = 0) : m.push(h)
        }
        , "printChar");
        function xc(l, h, m, S) {
            if (d)
                return qe(13, 0, 1, l, h, m, S);
            for (var b = 0, I = 0; I < m; I++) {
                var w = de()[h >> 2]
                  , T = de()[h + 4 >> 2];
                h += 8;
                for (var O = 0; O < T; O++)
                    Tm(l, ve()[w + O]);
                b += T
            }
            return de()[S >> 2] = b,
            0
        }
        i(xc, "_fd_write");
        var Mc = i(l => {
            var h = r["_" + l];
            return h
        }
        , "getCFunc")
          , Im = i( (l, h) => {
            ke().set(l, h)
        }
        , "writeArrayToMemory")
          , km = i(l => {
            var h = yc(l) + 1
              , m = _i(h);
            return Tn(l, m, h),
            m
        }
        , "stringToUTF8OnStack")
          , Pc = i( (l, h, m, S, b) => {
            var I = {
                string: ye => {
                    var ft = 0;
                    return ye != null && ye !== 0 && (ft = km(ye)),
                    ft
                }
                ,
                array: ye => {
                    var ft = _i(ye.length);
                    return Im(ye, ft),
                    ft
                }
            };
            function w(ye) {
                return h === "string" ? $r(ye) : h === "boolean" ? !!ye : ye
            }
            i(w, "convertReturnValue");
            var T = Mc(l)
              , O = []
              , F = 0;
            if (S)
                for (var $ = 0; $ < S.length; $++) {
                    var X = I[m[$]];
                    X ? (F === 0 && (F = qa()),
                    O[$] = X(S[$])) : O[$] = S[$]
                }
            var Te = T(...O);
            function tt(ye) {
                return F !== 0 && yi(F),
                w(ye)
            }
            return i(tt, "onDone"),
            Te = tt(Te),
            Te
        }
        , "ccall")
          , Rm = i( (l, h, m, S) => {
            var b = !m || m.every(w => w === "number" || w === "boolean")
              , I = h !== "string";
            return I && b && !S ? Mc(l) : (...w) => Pc(l, h, m, w)
        }
        , "cwrap");
        ue.init(),
        ac = r.InternalError = class extends Error {
            static{i(this, "InternalError")
            }constructor(h) {
                super(h),
                this.name = "InternalError"
            }
        }
        ,
        ih(),
        dc = r.BindingError = class extends Error {
            static{i(this, "BindingError")
            }constructor(h) {
                super(h),
                this.name = "BindingError"
            }
        }
        ,
        lh(),
        mc = r.UnboundTypeError = Eh(Error, "UnboundTypeError");
        var Cm = [za, Va, Qa, nc, rc, sc, ic, oc, kc, Rc, Cc, Ac, Oc, xc], Nc;
        function Am() {
            Nc = {
                J: Za,
                y: nc,
                H: rc,
                P: sc,
                q: ic,
                D: oc,
                U: nh,
                t: rh,
                A: ah,
                Z: ch,
                X: fh,
                z: hh,
                n: Th,
                j: Ih,
                e: kh,
                Y: Rh,
                s: Nh,
                T: Dh,
                c: Lh,
                _: Fh,
                O: Uh,
                E: Hh,
                L: jh,
                u: Wh,
                N: wi,
                R: qh,
                g: zh,
                b: bi,
                i: Vh,
                h: Xh,
                d: Qh,
                ba: Zh,
                $: em,
                p: tm,
                aa: nm,
                l: rm,
                k: sm,
                f: im,
                B: om,
                K: cm,
                ca: dm,
                v: fm,
                S: wc,
                Q: hm,
                F: mm,
                m: bc,
                G: gm,
                C: Sm,
                I: vm,
                V: kc,
                W: Rc,
                r: Si,
                o: Cc,
                w: Ac,
                M: Oc,
                x: xc,
                a: L
            }
        }
        i(Am, "assignWasmImports");
        var we = await hi()
          , Gr = i( () => (Gr = we.fa)(), "_pthread_self")
          , Ri = r._malloc = l => (Ri = r._malloc = we.ga)(l)
          , Dc = i(l => (Dc = we.ha)(l), "___getTypeName")
          , Lc = i( () => (Lc = we.ia)(), "__embind_initialize_bindings")
          , bt = r._free = l => (bt = r._free = we.ja)(l)
          , Ci = i( (l, h, m, S, b, I) => (Ci = we.la)(l, h, m, S, b, I), "__emscripten_thread_init")
          , Fc = i( () => (Fc = we.ma)(), "__emscripten_thread_crashed")
          , Uc = i( (l, h, m, S, b) => (Uc = we.na)(l, h, m, S, b), "__emscripten_run_on_main_thread_js")
          , $c = i(l => ($c = we.oa)(l), "__emscripten_thread_free_data")
          , Ai = i(l => (Ai = we.pa)(l), "__emscripten_thread_exit")
          , Bc = i( () => (Bc = we.qa)(), "__emscripten_check_mailbox")
          , Hc = i( () => (Hc = we.ra)(), "___trap")
          , jc = i( (l, h) => (jc = we.sa)(l, h), "_emscripten_stack_set_limits")
          , Wc = i(l => (Wc = we.ta)(l), "__emscripten_stack_restore")
          , qc = i(l => (qc = we.ua)(l), "__emscripten_stack_alloc")
          , zc = i( () => (zc = we.va)(), "_emscripten_stack_get_current");
        r.wasmMemory = L,
        r.ccall = Pc,
        r.cwrap = Rm;
        function Oi() {
            if (Fe > 0) {
                Ke = Oi;
                return
            }
            if (d) {
                s(r),
                Fr();
                return
            }
            if (Lr(),
            Fe > 0) {
                Ke = Oi;
                return
            }
            function l() {
                r.calledRun = !0,
                !A && (Fr(),
                s(r),
                r.onRuntimeInitialized?.(),
                pi())
            }
            i(l, "doRun"),
            r.setStatus ? (r.setStatus("Running..."),
            setTimeout( () => {
                setTimeout( () => r.setStatus(""), 1),
                l()
            }
            , 1)) : l()
        }
        if (i(Oi, "run"),
        r.preInit)
            for (typeof r.preInit == "function" && (r.preInit = [r.preInit]); r.preInit.length > 0; )
                r.preInit.pop()();
        return Oi(),
        n = a,
        n
    }
}
)()
  , Pm = globalThis.self?.name?.startsWith("em-pthread");
Pm && Hl();
function Vc(e) {
    return `${e.name}|${e.size}`
}
i(Vc, "getFileId");
async function Nm(e) {
    e instanceof FileSystemFileHandle && (e = await e.getFile());
    const t = e instanceof File ? await e.arrayBuffer() : await fetch(e).then(n => n.arrayBuffer());
    return new Uint8Array(t)
}
i(Nm, "loadFileData");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const jl = Symbol("Comlink.proxy")
  , Dm = Symbol("Comlink.endpoint")
  , Lm = Symbol("Comlink.releaseProxy")
  , Mi = Symbol("Comlink.finalizer")
  , us = Symbol("Comlink.thrown")
  , Wl = i(e => typeof e == "object" && e !== null || typeof e == "function", "isObject$1")
  , Fm = {
    canHandle: e => Wl(e) && e[jl],
    serialize(e) {
        const {port1: t, port2: n} = new MessageChannel;
        return $o(e, t),
        [n, [n]]
    },
    deserialize(e) {
        return e.start(),
        Gl(e)
    }
}
  , Um = {
    canHandle: e => Wl(e) && us in e,
    serialize({value: e}) {
        let t;
        return e instanceof Error ? t = {
            isError: !0,
            value: {
                message: e.message,
                name: e.name,
                stack: e.stack
            }
        } : t = {
            isError: !1,
            value: e
        },
        [t, []]
    },
    deserialize(e) {
        throw e.isError ? Object.assign(new Error(e.value.message), e.value) : e.value
    }
}
  , ql = new Map([["proxy", Fm], ["throw", Um]]);
function $m(e, t) {
    for (const n of e)
        if (t === n || n === "*" || n instanceof RegExp && n.test(t))
            return !0;
    return !1
}
i($m, "isAllowedOrigin");
function $o(e, t=globalThis, n=["*"]) {
    t.addEventListener("message", i(function r(s) {
        if (!s || !s.data)
            return;
        if (!$m(n, s.origin)) {
            `${s.origin}`;
            return
        }
        const {id: o, type: a, path: c} = Object.assign({
            path: []
        }, s.data)
          , u = (s.data.argumentList || []).map(rn);
        let d;
        try {
            const p = c.slice(0, -1).reduce( (g, _) => g[_], e)
              , f = c.reduce( (g, _) => g[_], e);
            switch (a) {
            case "GET":
                d = f;
                break;
            case "SET":
                p[c.slice(-1)[0]] = rn(s.data.value),
                d = !0;
                break;
            case "APPLY":
                d = f.apply(p, u);
                break;
            case "CONSTRUCT":
                {
                    const g = new f(...u);
                    d = zm(g)
                }
                break;
            case "ENDPOINT":
                {
                    const {port1: g, port2: _} = new MessageChannel;
                    $o(e, _),
                    d = qm(g, [g])
                }
                break;
            case "RELEASE":
                d = void 0;
                break;
            default:
                return
            }
        } catch (p) {
            d = {
                value: p,
                [us]: 0
            }
        }
        Promise.resolve(d).catch(p => ({
            value: p,
            [us]: 0
        })).then(p => {
            const [f,g] = Ts(p);
            t.postMessage(Object.assign(Object.assign({}, f), {
                id: o
            }), g),
            a === "RELEASE" && (t.removeEventListener("message", r),
            zl(t),
            Mi in e && typeof e[Mi] == "function" && e[Mi]())
        }
        ).catch(p => {
            const [f,g] = Ts({
                value: new TypeError("Unserializable return value"),
                [us]: 0
            });
            t.postMessage(Object.assign(Object.assign({}, f), {
                id: o
            }), g)
        }
        )
    }, "callback")),
    t.start && t.start()
}
i($o, "expose");
function Bm(e) {
    return e.constructor.name === "MessagePort"
}
i(Bm, "isMessagePort");
function zl(e) {
    Bm(e) && e.close()
}
i(zl, "closeEndPoint");
function Gl(e, t) {
    const n = new Map;
    return e.addEventListener("message", i(function(s) {
        const {data: o} = s;
        if (!o || !o.id)
            return;
        const a = n.get(o.id);
        if (a)
            try {
                a(o)
            } finally {
                n.delete(o.id)
            }
    }, "handleMessage")),
    Xi(e, n, [], t)
}
i(Gl, "wrap$1");
function Vr(e) {
    if (e)
        throw new Error("Proxy has been released and is not useable")
}
i(Vr, "throwIfProxyReleased");
function Vl(e) {
    return Rn(e, new Map, {
        type: "RELEASE"
    }).then( () => {
        zl(e)
    }
    )
}
i(Vl, "releaseEndpoint");
const bs = new WeakMap
  , ws = "FinalizationRegistry"in globalThis && new FinalizationRegistry(e => {
    const t = (bs.get(e) || 0) - 1;
    bs.set(e, t),
    t === 0 && Vl(e)
}
);
function Hm(e, t) {
    const n = (bs.get(t) || 0) + 1;
    bs.set(t, n),
    ws && ws.register(e, t, e)
}
i(Hm, "registerProxy");
function jm(e) {
    ws && ws.unregister(e)
}
i(jm, "unregisterProxy");
function Xi(e, t, n=[], r=function() {}
) {
    let s = !1;
    const o = new Proxy(r,{
        get(a, c) {
            if (Vr(s),
            c === Lm)
                return () => {
                    jm(o),
                    Vl(e),
                    t.clear(),
                    s = !0
                }
                ;
            if (c === "then") {
                if (n.length === 0)
                    return {
                        then: () => o
                    };
                const u = Rn(e, t, {
                    type: "GET",
                    path: n.map(d => d.toString())
                }).then(rn);
                return u.then.bind(u)
            }
            return Xi(e, t, [...n, c])
        },
        set(a, c, u) {
            Vr(s);
            const [d,p] = Ts(u);
            return Rn(e, t, {
                type: "SET",
                path: [...n, c].map(f => f.toString()),
                value: d
            }, p).then(rn)
        },
        apply(a, c, u) {
            Vr(s);
            const d = n[n.length - 1];
            if (d === Dm)
                return Rn(e, t, {
                    type: "ENDPOINT"
                }).then(rn);
            if (d === "bind")
                return Xi(e, t, n.slice(0, -1));
            const [p,f] = Kc(u);
            return Rn(e, t, {
                type: "APPLY",
                path: n.map(g => g.toString()),
                argumentList: p
            }, f).then(rn)
        },
        construct(a, c) {
            Vr(s);
            const [u,d] = Kc(c);
            return Rn(e, t, {
                type: "CONSTRUCT",
                path: n.map(p => p.toString()),
                argumentList: u
            }, d).then(rn)
        }
    });
    return Hm(o, e),
    o
}
i(Xi, "createProxy");
function Wm(e) {
    return Array.prototype.concat.apply([], e)
}
i(Wm, "myFlat");
function Kc(e) {
    const t = e.map(Ts);
    return [t.map(n => n[0]), Wm(t.map(n => n[1]))]
}
i(Kc, "processArguments");
const Kl = new WeakMap;
function qm(e, t) {
    return Kl.set(e, t),
    e
}
i(qm, "transfer");
function zm(e) {
    return Object.assign(e, {
        [jl]: !0
    })
}
i(zm, "proxy");
function Ts(e) {
    for (const [t,n] of ql)
        if (n.canHandle(e)) {
            const [r,s] = n.serialize(e);
            return [{
                type: "HANDLER",
                name: t,
                value: r
            }, s]
        }
    return [{
        type: "RAW",
        value: e
    }, Kl.get(e) || []]
}
i(Ts, "toWireValue");
function rn(e) {
    switch (e.type) {
    case "HANDLER":
        return ql.get(e.name).deserialize(e.value);
    case "RAW":
        return e.value
    }
}
i(rn, "fromWireValue");
function Rn(e, t, n, r) {
    return new Promise(s => {
        const o = Gm();
        t.set(o, s),
        e.start && e.start(),
        e.postMessage(Object.assign({
            id: o
        }, n), r)
    }
    )
}
i(Rn, "requestResponseMessage");
function Gm() {
    return new Array(4).fill(0).map( () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-")
}
i(Gm, "generateUUID");
const Yc = i( () => {}
, "noop$2");
class Jc {
    static{i(this, "Deferred")
    }promise;
    reject = Yc;
    resolve = Yc;
    constructor() {
        this.promise = new Promise( (t, n) => {
            this.reject = n,
            this.resolve = t
        }
        )
    }
}
function Vm() {
    return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
}
i(Vm, "getGlobalObject");
function Km(e) {
    const t = Vm();
    try {
        t._sentryDebugIds = t._sentryDebugIds || {};
        for (const n in e)
            t._sentryDebugIds[n] = e[n];
        return JSON.stringify(t._sentryDebugIds)
    } catch {}
}
i(Km, "registerSentryDebugIds");
function Yl(e, t) {
    return i(function() {
        return e.apply(t, arguments)
    }, "wrap")
}
i(Yl, "bind");
const {toString: Ym} = Object.prototype
  , {getPrototypeOf: Bo} = Object
  , zs = (e => t => {
    const n = Ym.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , St = i(e => (e = e.toLowerCase(),
t => zs(t) === e), "kindOfTest")
  , Gs = i(e => t => typeof t === e, "typeOfTest")
  , {isArray: Gn} = Array
  , hr = Gs("undefined");
function Jm(e) {
    return e !== null && !hr(e) && e.constructor !== null && !hr(e.constructor) && rt(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
i(Jm, "isBuffer");
const Jl = St("ArrayBuffer");
function Xm(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Jl(e.buffer),
    t
}
i(Xm, "isArrayBufferView");
const Qm = Gs("string")
  , rt = Gs("function")
  , Xl = Gs("number")
  , Vs = i(e => e !== null && typeof e == "object", "isObject")
  , Zm = i(e => e === !0 || e === !1, "isBoolean")
  , ls = i(e => {
    if (zs(e) !== "object")
        return !1;
    const t = Bo(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
, "isPlainObject$2")
  , eg = St("Date")
  , tg = St("File")
  , ng = St("Blob")
  , rg = St("FileList")
  , sg = i(e => Vs(e) && rt(e.pipe), "isStream")
  , ig = i(e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || rt(e.append) && ((t = zs(e)) === "formdata" || t === "object" && rt(e.toString) && e.toString() === "[object FormData]"))
}
, "isFormData")
  , og = St("URLSearchParams")
  , ag = i(e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), "trim");
function wr(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, s;
    if (typeof e != "object" && (e = [e]),
    Gn(e))
        for (r = 0,
        s = e.length; r < s; r++)
            t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , a = o.length;
        let c;
        for (r = 0; r < a; r++)
            c = o[r],
            t.call(null, e[c], c, e)
    }
}
i(wr, "forEach");
function Ql(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, s;
    for (; r-- > 0; )
        if (s = n[r],
        t === s.toLowerCase())
            return s;
    return null
}
i(Ql, "findKey");
const Zl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , ed = i(e => !hr(e) && e !== Zl, "isContextDefined");
function Qi() {
    const {caseless: e} = ed(this) && this || {}
      , t = {}
      , n = i( (r, s) => {
        const o = e && Ql(t, s) || s;
        ls(t[o]) && ls(r) ? t[o] = Qi(t[o], r) : ls(r) ? t[o] = Qi({}, r) : Gn(r) ? t[o] = r.slice() : t[o] = r
    }
    , "assignValue");
    for (let r = 0, s = arguments.length; r < s; r++)
        arguments[r] && wr(arguments[r], n);
    return t
}
i(Qi, "merge");
const cg = i( (e, t, n, {allOwnKeys: r}={}) => (wr(t, (s, o) => {
    n && rt(s) ? e[o] = Yl(s, n) : e[o] = s
}
, {
    allOwnKeys: r
}),
e), "extend")
  , ug = i(e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e), "stripBOM")
  , lg = i( (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
, "inherits")
  , dg = i( (e, t, n, r) => {
    let s, o, a;
    const c = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (s = Object.getOwnPropertyNames(e),
        o = s.length; o-- > 0; )
            a = s[o],
            (!r || r(a, e, t)) && !c[a] && (t[a] = e[a],
            c[a] = !0);
        e = n !== !1 && Bo(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
, "toFlatObject")
  , fg = i( (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
, "endsWith")
  , pg = i(e => {
    if (!e)
        return null;
    if (Gn(e))
        return e;
    let t = e.length;
    if (!Xl(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
, "toArray")
  , hg = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Bo(Uint8Array))
  , mg = i( (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
        const o = s.value;
        t.call(e, o[0], o[1])
    }
}
, "forEachEntry")
  , gg = i( (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
, "matchAll")
  , yg = St("HTMLFormElement")
  , _g = i(e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, i(function(n, r, s) {
    return r.toUpperCase() + s
}, "replacer")), "toCamelCase")
  , Xc = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , Sg = St("RegExp")
  , td = i( (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    wr(n, (s, o) => {
        let a;
        (a = t(s, o, e)) !== !1 && (r[o] = a || s)
    }
    ),
    Object.defineProperties(e, r)
}
, "reduceDescriptors")
  , vg = i(e => {
    td(e, (t, n) => {
        if (rt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (rt(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
, "freezeMethods")
  , Eg = i( (e, t) => {
    const n = {}
      , r = i(s => {
        s.forEach(o => {
            n[o] = !0
        }
        )
    }
    , "define");
    return Gn(e) ? r(e) : r(String(e).split(t)),
    n
}
, "toObjectSet")
  , bg = i( () => {}
, "noop$1")
  , wg = i( (e, t) => (e = +e,
Number.isFinite(e) ? e : t), "toFiniteNumber")
  , Pi = "abcdefghijklmnopqrstuvwxyz"
  , Qc = "0123456789"
  , nd = {
    DIGIT: Qc,
    ALPHA: Pi,
    ALPHA_DIGIT: Pi + Pi.toUpperCase() + Qc
}
  , Tg = i( (e=16, t=nd.ALPHA_DIGIT) => {
    let n = "";
    const {length: r} = t;
    for (; e--; )
        n += t[Math.random() * r | 0];
    return n
}
, "generateString");
function Ig(e) {
    return !!(e && rt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
i(Ig, "isSpecCompliantForm");
const kg = i(e => {
    const t = new Array(10)
      , n = i( (r, s) => {
        if (Vs(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[s] = r;
                const o = Gn(r) ? [] : {};
                return wr(r, (a, c) => {
                    const u = n(a, s + 1);
                    !hr(u) && (o[c] = u)
                }
                ),
                t[s] = void 0,
                o
            }
        }
        return r
    }
    , "visit");
    return n(e, 0)
}
, "toJSONObject")
  , Rg = St("AsyncFunction")
  , Cg = i(e => e && (Vs(e) || rt(e)) && rt(e.then) && rt(e.catch), "isThenable$1");
var C = {
    isArray: Gn,
    isArrayBuffer: Jl,
    isBuffer: Jm,
    isFormData: ig,
    isArrayBufferView: Xm,
    isString: Qm,
    isNumber: Xl,
    isBoolean: Zm,
    isObject: Vs,
    isPlainObject: ls,
    isUndefined: hr,
    isDate: eg,
    isFile: tg,
    isBlob: ng,
    isRegExp: Sg,
    isFunction: rt,
    isStream: sg,
    isURLSearchParams: og,
    isTypedArray: hg,
    isFileList: rg,
    forEach: wr,
    merge: Qi,
    extend: cg,
    trim: ag,
    stripBOM: ug,
    inherits: lg,
    toFlatObject: dg,
    kindOf: zs,
    kindOfTest: St,
    endsWith: fg,
    toArray: pg,
    forEachEntry: mg,
    matchAll: gg,
    isHTMLForm: yg,
    hasOwnProperty: Xc,
    hasOwnProp: Xc,
    reduceDescriptors: td,
    freezeMethods: vg,
    toObjectSet: Eg,
    toCamelCase: _g,
    noop: bg,
    toFiniteNumber: wg,
    findKey: Ql,
    global: Zl,
    isContextDefined: ed,
    ALPHABET: nd,
    generateString: Tg,
    isSpecCompliantForm: Ig,
    toJSONObject: kg,
    isAsyncFn: Rg,
    isThenable: Cg
};
function se(e, t, n, r, s) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s)
}
i(se, "AxiosError");
C.inherits(se, Error, {
    toJSON: i(function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: C.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }, "toJSON")
});
const rd = se.prototype
  , sd = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    sd[e] = {
        value: e
    }
}
);
Object.defineProperties(se, sd);
Object.defineProperty(rd, "isAxiosError", {
    value: !0
});
se.from = (e, t, n, r, s, o) => {
    const a = Object.create(rd);
    return C.toFlatObject(e, a, i(function(u) {
        return u !== Error.prototype
    }, "filter"), c => c !== "isAxiosError"),
    se.call(a, e.message, t, n, r, s),
    a.cause = e,
    a.name = e.name,
    o && Object.assign(a, o),
    a
}
;
var Ag = null;
function Zi(e) {
    return C.isPlainObject(e) || C.isArray(e)
}
i(Zi, "isVisitable");
function id(e) {
    return C.endsWith(e, "[]") ? e.slice(0, -2) : e
}
i(id, "removeBrackets");
function Zc(e, t, n) {
    return e ? e.concat(t).map(i(function(s, o) {
        return s = id(s),
        !n && o ? "[" + s + "]" : s
    }, "each")).join(n ? "." : "") : t
}
i(Zc, "renderKey");
function Og(e) {
    return C.isArray(e) && !e.some(Zi)
}
i(Og, "isFlatArray");
const xg = C.toFlatObject(C, {}, null, i(function(t) {
    return /^is[A-Z]/.test(t)
}, "filter"));
function Ks(e, t, n) {
    if (!C.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = C.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, i(function(v, E) {
        return !C.isUndefined(E[v])
    }, "defined"));
    const r = n.metaTokens
      , s = n.visitor || p
      , o = n.dots
      , a = n.indexes
      , u = (n.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(t);
    if (!C.isFunction(s))
        throw new TypeError("visitor must be a function");
    function d(y) {
        if (y === null)
            return "";
        if (C.isDate(y))
            return y.toISOString();
        if (!u && C.isBlob(y))
            throw new se("Blob is not supported. Use a Buffer instead.");
        return C.isArrayBuffer(y) || C.isTypedArray(y) ? u && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y
    }
    i(d, "convertValue");
    function p(y, v, E) {
        let k = y;
        if (y && !E && typeof y == "object") {
            if (C.endsWith(v, "{}"))
                v = r ? v : v.slice(0, -2),
                y = JSON.stringify(y);
            else if (C.isArray(y) && Og(y) || (C.isFileList(y) || C.endsWith(v, "[]")) && (k = C.toArray(y)))
                return v = id(v),
                k.forEach(i(function(P, L) {
                    !(C.isUndefined(P) || P === null) && t.append(a === !0 ? Zc([v], L, o) : a === null ? v : v + "[]", d(P))
                }, "each")),
                !1
        }
        return Zi(y) ? !0 : (t.append(Zc(E, v, o), d(y)),
        !1)
    }
    i(p, "defaultVisitor");
    const f = []
      , g = Object.assign(xg, {
        defaultVisitor: p,
        convertValue: d,
        isVisitable: Zi
    });
    function _(y, v) {
        if (!C.isUndefined(y)) {
            if (f.indexOf(y) !== -1)
                throw Error("Circular reference detected in " + v.join("."));
            f.push(y),
            C.forEach(y, i(function(k, M) {
                (!(C.isUndefined(k) || k === null) && s.call(t, k, C.isString(M) ? M.trim() : M, v, g)) === !0 && _(k, v ? v.concat(M) : [M])
            }, "each")),
            f.pop()
        }
    }
    if (i(_, "build"),
    !C.isObject(e))
        throw new TypeError("data must be an object");
    return _(e),
    t
}
i(Ks, "toFormData");
function eu(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, i(function(r) {
        return t[r]
    }, "replacer"))
}
i(eu, "encode$1");
function Ho(e, t) {
    this._pairs = [],
    e && Ks(e, this, t)
}
i(Ho, "AxiosURLSearchParams");
const od = Ho.prototype;
od.append = i(function(t, n) {
    this._pairs.push([t, n])
}, "append");
od.toString = i(function(t) {
    const n = t ? function(r) {
        return t.call(this, r, eu)
    }
    : eu;
    return this._pairs.map(i(function(s) {
        return n(s[0]) + "=" + n(s[1])
    }, "each"), "").join("&")
}, "toString");
function Mg(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
i(Mg, "encode");
function ad(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || Mg
      , s = n && n.serialize;
    let o;
    if (s ? o = s(t, n) : o = C.isURLSearchParams(t) ? t.toString() : new Ho(t,n).toString(r),
    o) {
        const a = e.indexOf("#");
        a !== -1 && (e = e.slice(0, a)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}
i(ad, "buildURL");
class tu {
    static{i(this, "InterceptorManager")
    }constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        C.forEach(this.handlers, i(function(r) {
            r !== null && t(r)
        }, "forEachHandler"))
    }
}
var cd = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , Pg = typeof URLSearchParams < "u" ? URLSearchParams : Ho
  , Ng = typeof FormData < "u" ? FormData : null
  , Dg = typeof Blob < "u" ? Blob : null
  , Lg = {
    isBrowser: !0,
    classes: {
        URLSearchParams: Pg,
        FormData: Ng,
        Blob: Dg
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
};
const ud = typeof window < "u" && typeof document < "u"
  , Fg = (e => ud && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product)
  , Ug = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function";
var $g = Object.freeze({
    __proto__: null,
    hasBrowserEnv: ud,
    hasStandardBrowserEnv: Fg,
    hasStandardBrowserWebWorkerEnv: Ug
})
  , yt = {
    ...$g,
    ...Lg
};
function Bg(e, t) {
    return Ks(e, new yt.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, s, o) {
            return yt.isNode && C.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
i(Bg, "toURLEncodedForm");
function Hg(e) {
    return C.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
i(Hg, "parsePropPath");
function jg(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const s = n.length;
    let o;
    for (r = 0; r < s; r++)
        o = n[r],
        t[o] = e[o];
    return t
}
i(jg, "arrayToObject");
function ld(e) {
    function t(n, r, s, o) {
        let a = n[o++];
        if (a === "__proto__")
            return !0;
        const c = Number.isFinite(+a)
          , u = o >= n.length;
        return a = !a && C.isArray(s) ? s.length : a,
        u ? (C.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r,
        !c) : ((!s[a] || !C.isObject(s[a])) && (s[a] = []),
        t(n, r, s[a], o) && C.isArray(s[a]) && (s[a] = jg(s[a])),
        !c)
    }
    if (i(t, "buildPath"),
    C.isFormData(e) && C.isFunction(e.entries)) {
        const n = {};
        return C.forEachEntry(e, (r, s) => {
            t(Hg(r), s, n, 0)
        }
        ),
        n
    }
    return null
}
i(ld, "formDataToJSON");
function Wg(e, t, n) {
    if (C.isString(e))
        try {
            return (t || JSON.parse)(e),
            C.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
i(Wg, "stringifySafely");
const jo = {
    transitional: cd,
    adapter: ["xhr", "http"],
    transformRequest: [i(function(t, n) {
        const r = n.getContentType() || ""
          , s = r.indexOf("application/json") > -1
          , o = C.isObject(t);
        if (o && C.isHTMLForm(t) && (t = new FormData(t)),
        C.isFormData(t))
            return s ? JSON.stringify(ld(t)) : t;
        if (C.isArrayBuffer(t) || C.isBuffer(t) || C.isStream(t) || C.isFile(t) || C.isBlob(t))
            return t;
        if (C.isArrayBufferView(t))
            return t.buffer;
        if (C.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let c;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return Bg(t, this.formSerializer).toString();
            if ((c = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const u = this.env && this.env.FormData;
                return Ks(c ? {
                    "files[]": t
                } : t, u && new u, this.formSerializer)
            }
        }
        return o || s ? (n.setContentType("application/json", !1),
        Wg(t)) : t
    }, "transformRequest")],
    transformResponse: [i(function(t) {
        const n = this.transitional || jo.transitional
          , r = n && n.forcedJSONParsing
          , s = this.responseType === "json";
        if (t && C.isString(t) && (r && !this.responseType || s)) {
            const a = !(n && n.silentJSONParsing) && s;
            try {
                return JSON.parse(t)
            } catch (c) {
                if (a)
                    throw c.name === "SyntaxError" ? se.from(c, se.ERR_BAD_RESPONSE, this, null, this.response) : c
            }
        }
        return t
    }, "transformResponse")],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: yt.classes.FormData,
        Blob: yt.classes.Blob
    },
    validateStatus: i(function(t) {
        return t >= 200 && t < 300
    }, "validateStatus"),
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
C.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    jo.headers[e] = {}
}
);
var Wo = jo;
const qg = C.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
var zg = i(e => {
    const t = {};
    let n, r, s;
    return e && e.split(`
`).forEach(i(function(a) {
        s = a.indexOf(":"),
        n = a.substring(0, s).trim().toLowerCase(),
        r = a.substring(s + 1).trim(),
        !(!n || t[n] && qg[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }, "parser")),
    t
}
, "parseHeaders");
const nu = Symbol("internals");
function or(e) {
    return e && String(e).trim().toLowerCase()
}
i(or, "normalizeHeader");
function ds(e) {
    return e === !1 || e == null ? e : C.isArray(e) ? e.map(ds) : String(e)
}
i(ds, "normalizeValue");
function Gg(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
i(Gg, "parseTokens");
const Vg = i(e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()), "isValidHeaderName");
function Ni(e, t, n, r, s) {
    if (C.isFunction(r))
        return r.call(this, t, n);
    if (s && (t = n),
    !!C.isString(t)) {
        if (C.isString(r))
            return t.indexOf(r) !== -1;
        if (C.isRegExp(r))
            return r.test(t)
    }
}
i(Ni, "matchHeaderValue");
function Kg(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
i(Kg, "formatHeader");
function Yg(e, t) {
    const n = C.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(s, o, a) {
                return this[r].call(this, t, s, o, a)
            },
            configurable: !0
        })
    }
    )
}
i(Yg, "buildAccessors");
class Ys {
    static{i(this, "AxiosHeaders")
    }constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const s = this;
        function o(c, u, d) {
            const p = or(u);
            if (!p)
                throw new Error("header name must be a non-empty string");
            const f = C.findKey(s, p);
            (!f || s[f] === void 0 || d === !0 || d === void 0 && s[f] !== !1) && (s[f || u] = ds(c))
        }
        i(o, "setHeader");
        const a = i( (c, u) => C.forEach(c, (d, p) => o(d, p, u)), "setHeaders");
        return C.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : C.isString(t) && (t = t.trim()) && !Vg(t) ? a(zg(t), n) : t != null && o(n, t, r),
        this
    }
    get(t, n) {
        if (t = or(t),
        t) {
            const r = C.findKey(this, t);
            if (r) {
                const s = this[r];
                if (!n)
                    return s;
                if (n === !0)
                    return Gg(s);
                if (C.isFunction(n))
                    return n.call(this, s, r);
                if (C.isRegExp(n))
                    return n.exec(s);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = or(t),
        t) {
            const r = C.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Ni(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let s = !1;
        function o(a) {
            if (a = or(a),
            a) {
                const c = C.findKey(r, a);
                c && (!n || Ni(r, r[c], c, n)) && (delete r[c],
                s = !0)
            }
        }
        return i(o, "deleteHeader"),
        C.isArray(t) ? t.forEach(o) : o(t),
        s
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , s = !1;
        for (; r--; ) {
            const o = n[r];
            (!t || Ni(this, this[o], o, t, !0)) && (delete this[o],
            s = !0)
        }
        return s
    }
    normalize(t) {
        const n = this
          , r = {};
        return C.forEach(this, (s, o) => {
            const a = C.findKey(r, o);
            if (a) {
                n[a] = ds(s),
                delete n[o];
                return
            }
            const c = t ? Kg(o) : String(o).trim();
            c !== o && delete n[o],
            n[c] = ds(s),
            r[c] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return C.forEach(this, (r, s) => {
            r != null && r !== !1 && (n[s] = t && C.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(s => r.set(s)),
        r
    }
    static accessor(t) {
        const r = (this[nu] = this[nu] = {
            accessors: {}
        }).accessors
          , s = this.prototype;
        function o(a) {
            const c = or(a);
            r[c] || (Yg(s, a),
            r[c] = !0)
        }
        return i(o, "defineAccessor"),
        C.isArray(t) ? t.forEach(o) : o(t),
        this
    }
}
Ys.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.reduceDescriptors(Ys.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
}
);
C.freezeMethods(Ys);
var Rt = Ys;
function Di(e, t) {
    const n = this || Wo
      , r = t || n
      , s = Rt.from(r.headers);
    let o = r.data;
    return C.forEach(e, i(function(c) {
        o = c.call(n, o, s.normalize(), t ? t.status : void 0)
    }, "transform")),
    s.normalize(),
    o
}
i(Di, "transformData");
function dd(e) {
    return !!(e && e.__CANCEL__)
}
i(dd, "isCancel");
function Tr(e, t, n) {
    se.call(this, e ?? "canceled", se.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
i(Tr, "CanceledError");
C.inherits(Tr, se, {
    __CANCEL__: !0
});
function Jg(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new se("Request failed with status code " + n.status,[se.ERR_BAD_REQUEST, se.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
i(Jg, "settle");
var Xg = yt.hasStandardBrowserEnv ? {
    write(e, t, n, r, s, o) {
        const a = [e + "=" + encodeURIComponent(t)];
        C.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
        C.isString(r) && a.push("path=" + r),
        C.isString(s) && a.push("domain=" + s),
        o === !0 && a.push("secure"),
        document.cookie = a.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function Qg(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
i(Qg, "isAbsoluteURL");
function Zg(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
i(Zg, "combineURLs");
function fd(e, t) {
    return e && !Qg(t) ? Zg(e, t) : t
}
i(fd, "buildFullPath");
var ey = yt.hasStandardBrowserEnv ? i(function() {
    const t = /(msie|trident)/i.test(navigator.userAgent)
      , n = document.createElement("a");
    let r;
    function s(o) {
        let a = o;
        return t && (n.setAttribute("href", a),
        a = n.href),
        n.setAttribute("href", a),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return i(s, "resolveURL"),
    r = s(window.location.href),
    i(function(a) {
        const c = C.isString(a) ? s(a) : a;
        return c.protocol === r.protocol && c.host === r.host
    }, "isURLSameOrigin")
}, "standardBrowserEnv")() : i(function() {
    return i(function() {
        return !0
    }, "isURLSameOrigin")
}, "nonStandardBrowserEnv")();
function ty(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
i(ty, "parseProtocol");
function ny(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let s = 0, o = 0, a;
    return t = t !== void 0 ? t : 1e3,
    i(function(u) {
        const d = Date.now()
          , p = r[o];
        a || (a = d),
        n[s] = u,
        r[s] = d;
        let f = o
          , g = 0;
        for (; f !== s; )
            g += n[f++],
            f = f % e;
        if (s = (s + 1) % e,
        s === o && (o = (o + 1) % e),
        d - a < t)
            return;
        const _ = p && d - p;
        return _ ? Math.round(g * 1e3 / _) : void 0
    }, "push")
}
i(ny, "speedometer");
function ru(e, t) {
    let n = 0;
    const r = ny(50, 250);
    return s => {
        const o = s.loaded
          , a = s.lengthComputable ? s.total : void 0
          , c = o - n
          , u = r(c)
          , d = o <= a;
        n = o;
        const p = {
            loaded: o,
            total: a,
            progress: a ? o / a : void 0,
            bytes: c,
            rate: u || void 0,
            estimated: u && a && d ? (a - o) / u : void 0,
            event: s
        };
        p[t ? "download" : "upload"] = !0,
        e(p)
    }
}
i(ru, "progressEventReducer");
const ry = typeof XMLHttpRequest < "u";
var sy = ry && function(e) {
    return new Promise(i(function(n, r) {
        let s = e.data;
        const o = Rt.from(e.headers).normalize();
        let {responseType: a, withXSRFToken: c} = e, u;
        function d() {
            e.cancelToken && e.cancelToken.unsubscribe(u),
            e.signal && e.signal.removeEventListener("abort", u)
        }
        i(d, "done");
        let p;
        if (C.isFormData(s)) {
            if (yt.hasStandardBrowserEnv || yt.hasStandardBrowserWebWorkerEnv)
                o.setContentType(!1);
            else if ((p = o.getContentType()) !== !1) {
                const [v,...E] = p ? p.split(";").map(k => k.trim()).filter(Boolean) : [];
                o.setContentType([v || "multipart/form-data", ...E].join("; "))
            }
        }
        let f = new XMLHttpRequest;
        if (e.auth) {
            const v = e.auth.username || ""
              , E = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            o.set("Authorization", "Basic " + btoa(v + ":" + E))
        }
        const g = fd(e.baseURL, e.url);
        f.open(e.method.toUpperCase(), ad(g, e.params, e.paramsSerializer), !0),
        f.timeout = e.timeout;
        function _() {
            if (!f)
                return;
            const v = Rt.from("getAllResponseHeaders"in f && f.getAllResponseHeaders())
              , k = {
                data: !a || a === "text" || a === "json" ? f.responseText : f.response,
                status: f.status,
                statusText: f.statusText,
                headers: v,
                config: e,
                request: f
            };
            Jg(i(function(P) {
                n(P),
                d()
            }, "_resolve"), i(function(P) {
                r(P),
                d()
            }, "_reject"), k),
            f = null
        }
        if (i(_, "onloadend"),
        "onloadend"in f ? f.onloadend = _ : f.onreadystatechange = i(function() {
            !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(_)
        }, "handleLoad"),
        f.onabort = i(function() {
            f && (r(new se("Request aborted",se.ECONNABORTED,e,f)),
            f = null)
        }, "handleAbort"),
        f.onerror = i(function() {
            r(new se("Network Error",se.ERR_NETWORK,e,f)),
            f = null
        }, "handleError"),
        f.ontimeout = i(function() {
            let E = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
            const k = e.transitional || cd;
            e.timeoutErrorMessage && (E = e.timeoutErrorMessage),
            r(new se(E,k.clarifyTimeoutError ? se.ETIMEDOUT : se.ECONNABORTED,e,f)),
            f = null
        }, "handleTimeout"),
        yt.hasStandardBrowserEnv && (c && C.isFunction(c) && (c = c(e)),
        c || c !== !1 && ey(g))) {
            const v = e.xsrfHeaderName && e.xsrfCookieName && Xg.read(e.xsrfCookieName);
            v && o.set(e.xsrfHeaderName, v)
        }
        s === void 0 && o.setContentType(null),
        "setRequestHeader"in f && C.forEach(o.toJSON(), i(function(E, k) {
            f.setRequestHeader(k, E)
        }, "setRequestHeader")),
        C.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials),
        a && a !== "json" && (f.responseType = e.responseType),
        typeof e.onDownloadProgress == "function" && f.addEventListener("progress", ru(e.onDownloadProgress, !0)),
        typeof e.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", ru(e.onUploadProgress)),
        (e.cancelToken || e.signal) && (u = i(v => {
            f && (r(!v || v.type ? new Tr(null,e,f) : v),
            f.abort(),
            f = null)
        }
        , "onCanceled"),
        e.cancelToken && e.cancelToken.subscribe(u),
        e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
        const y = ty(g);
        if (y && yt.protocols.indexOf(y) === -1) {
            r(new se("Unsupported protocol " + y + ":",se.ERR_BAD_REQUEST,e));
            return
        }
        f.send(s || null)
    }, "dispatchXhrRequest"))
}
;
const eo = {
    http: Ag,
    xhr: sy
};
C.forEach(eo, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const su = i(e => `- ${e}`, "renderReason")
  , iy = i(e => C.isFunction(e) || e === null || e === !1, "isResolvedHandle");
var pd = {
    getAdapter: e => {
        e = C.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const s = {};
        for (let o = 0; o < t; o++) {
            n = e[o];
            let a;
            if (r = n,
            !iy(n) && (r = eo[(a = String(n)).toLowerCase()],
            r === void 0))
                throw new se(`Unknown adapter '${a}'`);
            if (r)
                break;
            s[a || "#" + o] = r
        }
        if (!r) {
            const o = Object.entries(s).map( ([c,u]) => `adapter ${c} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build"));
            let a = t ? o.length > 1 ? `since :
` + o.map(su).join(`
`) : " " + su(o[0]) : "as no adapter specified";
            throw new se("There is no suitable adapter to dispatch the request " + a,"ERR_NOT_SUPPORT")
        }
        return r
    }
    ,
    adapters: eo
};
function Li(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new Tr(null,e)
}
i(Li, "throwIfCancellationRequested");
function iu(e) {
    return Li(e),
    e.headers = Rt.from(e.headers),
    e.data = Di.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    pd.getAdapter(e.adapter || Wo.adapter)(e).then(i(function(r) {
        return Li(e),
        r.data = Di.call(e, e.transformResponse, r),
        r.headers = Rt.from(r.headers),
        r
    }, "onAdapterResolution"), i(function(r) {
        return dd(r) || (Li(e),
        r && r.response && (r.response.data = Di.call(e, e.transformResponse, r.response),
        r.response.headers = Rt.from(r.response.headers))),
        Promise.reject(r)
    }, "onAdapterRejection"))
}
i(iu, "dispatchRequest");
const ou = i(e => e instanceof Rt ? {
    ...e
} : e, "headersToObject");
function Ln(e, t) {
    t = t || {};
    const n = {};
    function r(d, p, f) {
        return C.isPlainObject(d) && C.isPlainObject(p) ? C.merge.call({
            caseless: f
        }, d, p) : C.isPlainObject(p) ? C.merge({}, p) : C.isArray(p) ? p.slice() : p
    }
    i(r, "getMergedValue");
    function s(d, p, f) {
        if (C.isUndefined(p)) {
            if (!C.isUndefined(d))
                return r(void 0, d, f)
        } else
            return r(d, p, f)
    }
    i(s, "mergeDeepProperties");
    function o(d, p) {
        if (!C.isUndefined(p))
            return r(void 0, p)
    }
    i(o, "valueFromConfig2");
    function a(d, p) {
        if (C.isUndefined(p)) {
            if (!C.isUndefined(d))
                return r(void 0, d)
        } else
            return r(void 0, p)
    }
    i(a, "defaultToConfig2");
    function c(d, p, f) {
        if (f in t)
            return r(d, p);
        if (f in e)
            return r(void 0, d)
    }
    i(c, "mergeDirectKeys");
    const u = {
        url: o,
        method: o,
        data: o,
        baseURL: a,
        transformRequest: a,
        transformResponse: a,
        paramsSerializer: a,
        timeout: a,
        timeoutMessage: a,
        withCredentials: a,
        withXSRFToken: a,
        adapter: a,
        responseType: a,
        xsrfCookieName: a,
        xsrfHeaderName: a,
        onUploadProgress: a,
        onDownloadProgress: a,
        decompress: a,
        maxContentLength: a,
        maxBodyLength: a,
        beforeRedirect: a,
        transport: a,
        httpAgent: a,
        httpsAgent: a,
        cancelToken: a,
        socketPath: a,
        responseEncoding: a,
        validateStatus: c,
        headers: (d, p) => s(ou(d), ou(p), !0)
    };
    return C.forEach(Object.keys(Object.assign({}, e, t)), i(function(p) {
        const f = u[p] || s
          , g = f(e[p], t[p], p);
        C.isUndefined(g) && f !== c || (n[p] = g)
    }, "computeConfigValue")),
    n
}
i(Ln, "mergeConfig");
const hd = "1.6.8"
  , qo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    qo[e] = i(function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }, "validator")
}
);
const au = {};
qo.transitional = i(function(t, n, r) {
    function s(o, a) {
        return "[Axios v" + hd + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "")
    }
    return i(s, "formatMessage"),
    (o, a, c) => {
        if (t === !1)
            throw new se(s(a, " has been removed" + (n ? " in " + n : "")),se.ERR_DEPRECATED);
        return n && !au[a] && (au[a] = !0,
        s(a, " has been deprecated since v" + n + " and will be removed in the near future")),
        t ? t(o, a, c) : !0
    }
}, "transitional");
function oy(e, t, n) {
    if (typeof e != "object")
        throw new se("options must be an object",se.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let s = r.length;
    for (; s-- > 0; ) {
        const o = r[s]
          , a = t[o];
        if (a) {
            const c = e[o]
              , u = c === void 0 || a(c, o, e);
            if (u !== !0)
                throw new se("option " + o + " must be " + u,se.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new se("Unknown option " + o,se.ERR_BAD_OPTION)
    }
}
i(oy, "assertOptions");
var to = {
    assertOptions: oy,
    validators: qo
};
const Ft = to.validators;
class Is {
    static{i(this, "Axios")
    }constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new tu,
            response: new tu
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let s;
                Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error;
                const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
                r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = Ln(this.defaults, n);
        const {transitional: r, paramsSerializer: s, headers: o} = n;
        r !== void 0 && to.assertOptions(r, {
            silentJSONParsing: Ft.transitional(Ft.boolean),
            forcedJSONParsing: Ft.transitional(Ft.boolean),
            clarifyTimeoutError: Ft.transitional(Ft.boolean)
        }, !1),
        s != null && (C.isFunction(s) ? n.paramsSerializer = {
            serialize: s
        } : to.assertOptions(s, {
            encode: Ft.function,
            serialize: Ft.function
        }, !0)),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let a = o && C.merge(o.common, o[n.method]);
        o && C.forEach(["delete", "get", "head", "post", "put", "patch", "common"], y => {
            delete o[y]
        }
        ),
        n.headers = Rt.concat(a, o);
        const c = [];
        let u = !0;
        this.interceptors.request.forEach(i(function(v) {
            typeof v.runWhen == "function" && v.runWhen(n) === !1 || (u = u && v.synchronous,
            c.unshift(v.fulfilled, v.rejected))
        }, "unshiftRequestInterceptors"));
        const d = [];
        this.interceptors.response.forEach(i(function(v) {
            d.push(v.fulfilled, v.rejected)
        }, "pushResponseInterceptors"));
        let p, f = 0, g;
        if (!u) {
            const y = [iu.bind(this), void 0];
            for (y.unshift.apply(y, c),
            y.push.apply(y, d),
            g = y.length,
            p = Promise.resolve(n); f < g; )
                p = p.then(y[f++], y[f++]);
            return p
        }
        g = c.length;
        let _ = n;
        for (f = 0; f < g; ) {
            const y = c[f++]
              , v = c[f++];
            try {
                _ = y(_)
            } catch (E) {
                v.call(this, E);
                break
            }
        }
        try {
            p = iu.call(this, _)
        } catch (y) {
            return Promise.reject(y)
        }
        for (f = 0,
        g = d.length; f < g; )
            p = p.then(d[f++], d[f++]);
        return p
    }
    getUri(t) {
        t = Ln(this.defaults, t);
        const n = fd(t.baseURL, t.url);
        return ad(n, t.params, t.paramsSerializer)
    }
}
C.forEach(["delete", "get", "head", "options"], i(function(t) {
    Is.prototype[t] = function(n, r) {
        return this.request(Ln(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
}, "forEachMethodNoData"));
C.forEach(["post", "put", "patch"], i(function(t) {
    function n(r) {
        return i(function(o, a, c) {
            return this.request(Ln(c || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: a
            }))
        }, "httpMethod")
    }
    i(n, "generateHTTPMethod"),
    Is.prototype[t] = n(),
    Is.prototype[t + "Form"] = n(!0)
}, "forEachMethodWithData"));
var fs = Is;
class zo {
    static{i(this, "CancelToken")
    }constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(i(function(o) {
            n = o
        }, "promiseExecutor"));
        const r = this;
        this.promise.then(s => {
            if (!r._listeners)
                return;
            let o = r._listeners.length;
            for (; o-- > 0; )
                r._listeners[o](s);
            r._listeners = null
        }
        ),
        this.promise.then = s => {
            let o;
            const a = new Promise(c => {
                r.subscribe(c),
                o = c
            }
            ).then(s);
            return a.cancel = i(function() {
                r.unsubscribe(o)
            }, "reject"),
            a
        }
        ,
        t(i(function(o, a, c) {
            r.reason || (r.reason = new Tr(o,a,c),
            n(r.reason))
        }, "cancel"))
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new zo(i(function(s) {
                t = s
            }, "executor")),
            cancel: t
        }
    }
}
var ay = zo;
function cy(e) {
    return i(function(n) {
        return e.apply(null, n)
    }, "wrap")
}
i(cy, "spread");
function uy(e) {
    return C.isObject(e) && e.isAxiosError === !0
}
i(uy, "isAxiosError");
const no = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(no).forEach( ([e,t]) => {
    no[t] = e
}
);
var ly = no;
function md(e) {
    const t = new fs(e)
      , n = Yl(fs.prototype.request, t);
    return C.extend(n, fs.prototype, t, {
        allOwnKeys: !0
    }),
    C.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = i(function(s) {
        return md(Ln(e, s))
    }, "create"),
    n
}
i(md, "createInstance");
const Re = md(Wo);
Re.Axios = fs;
Re.CanceledError = Tr;
Re.CancelToken = ay;
Re.isCancel = dd;
Re.VERSION = hd;
Re.toFormData = Ks;
Re.AxiosError = se;
Re.Cancel = Re.CanceledError;
Re.all = i(function(t) {
    return Promise.all(t)
}, "all");
Re.spread = cy;
Re.isAxiosError = uy;
Re.mergeConfig = Ln;
Re.AxiosHeaders = Rt;
Re.formToJSON = e => ld(C.isHTMLForm(e) ? new FormData(e) : e);
Re.getAdapter = pd.getAdapter;
Re.HttpStatusCode = ly;
Re.default = Re;
function dy(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
i(dy, "getDefaultExportFromCjs");
const fy = new Set(["ENOTFOUND", "ENETUNREACH", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_CRL", "UNABLE_TO_DECRYPT_CERT_SIGNATURE", "UNABLE_TO_DECRYPT_CRL_SIGNATURE", "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY", "CERT_SIGNATURE_FAILURE", "CRL_SIGNATURE_FAILURE", "CERT_NOT_YET_VALID", "CERT_HAS_EXPIRED", "CRL_NOT_YET_VALID", "CRL_HAS_EXPIRED", "ERROR_IN_CERT_NOT_BEFORE_FIELD", "ERROR_IN_CERT_NOT_AFTER_FIELD", "ERROR_IN_CRL_LAST_UPDATE_FIELD", "ERROR_IN_CRL_NEXT_UPDATE_FIELD", "OUT_OF_MEM", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "CERT_CHAIN_TOO_LONG", "CERT_REVOKED", "INVALID_CA", "PATH_LENGTH_EXCEEDED", "INVALID_PURPOSE", "CERT_UNTRUSTED", "CERT_REJECTED", "HOSTNAME_MISMATCH"]);
var py = i(e => !fy.has(e && e.code), "isRetryAllowed")
  , hy = dy(py);
const Go = "axios-retry";
function gd(e) {
    const t = ["ERR_CANCELED", "ECONNABORTED"];
    return e.response || !e.code || t.includes(e.code) ? !1 : hy(e)
}
i(gd, "isNetworkError");
const yd = ["get", "head", "options"]
  , my = yd.concat(["put", "delete"]);
function Vo(e) {
    return e.code !== "ECONNABORTED" && (!e.response || e.response.status === 429 || e.response.status >= 500 && e.response.status <= 599)
}
i(Vo, "isRetryableError");
function gy(e) {
    return e.config?.method ? Vo(e) && yd.indexOf(e.config.method) !== -1 : !1
}
i(gy, "isSafeRequestError");
function _d(e) {
    return e.config?.method ? Vo(e) && my.indexOf(e.config.method) !== -1 : !1
}
i(_d, "isIdempotentRequestError");
function Sd(e) {
    return gd(e) || _d(e)
}
i(Sd, "isNetworkOrIdempotentRequestError");
function vd(e=void 0) {
    const t = e?.response?.headers["retry-after"];
    if (!t)
        return 0;
    let n = (Number(t) || 0) * 1e3;
    return n === 0 && (n = (new Date(t).valueOf() || 0) - Date.now()),
    Math.max(0, n)
}
i(vd, "retryAfter");
function yy(e=0, t=void 0) {
    return Math.max(0, vd(t))
}
i(yy, "noDelay");
function _y(e=0, t=void 0, n=100) {
    const r = 2 ** e * n
      , s = Math.max(r, vd(t))
      , o = s * .2 * Math.random();
    return s + o
}
i(_y, "exponentialDelay");
const Sy = {
    retries: 3,
    retryCondition: Sd,
    retryDelay: yy,
    shouldResetTimeout: !1,
    onRetry: () => {}
    ,
    onMaxRetryTimesExceeded: () => {}
    ,
    validateResponse: null
};
function vy(e, t) {
    return {
        ...Sy,
        ...t,
        ...e[Go]
    }
}
i(vy, "getRequestOptions");
function cu(e, t) {
    const n = vy(e, t || {});
    return n.retryCount = n.retryCount || 0,
    n.lastRequestTime = n.lastRequestTime || Date.now(),
    e[Go] = n,
    n
}
i(cu, "setCurrentState");
function Ey(e, t) {
    e.defaults.agent === t.agent && delete t.agent,
    e.defaults.httpAgent === t.httpAgent && delete t.httpAgent,
    e.defaults.httpsAgent === t.httpsAgent && delete t.httpsAgent
}
i(Ey, "fixConfig");
async function by(e, t) {
    const {retries: n, retryCondition: r} = e
      , s = (e.retryCount || 0) < n && r(t);
    if (typeof s == "object")
        try {
            return await s !== !1
        } catch {
            return !1
        }
    return s
}
i(by, "shouldRetry");
async function wy(e, t, n, r) {
    t.retryCount += 1;
    const {retryDelay: s, shouldResetTimeout: o, onRetry: a} = t
      , c = s(t.retryCount, n);
    if (Ey(e, r),
    !o && r.timeout && t.lastRequestTime) {
        const u = Date.now() - t.lastRequestTime
          , d = r.timeout - u - c;
        if (d <= 0)
            return Promise.reject(n);
        r.timeout = d
    }
    return r.transformRequest = [u => u],
    await a(t.retryCount, n, r),
    r.signal?.aborted ? Promise.resolve(e(r)) : new Promise(u => {
        const d = i( () => {
            clearTimeout(p),
            u(e(r))
        }
        , "abortListener")
          , p = setTimeout( () => {
            u(e(r)),
            r.signal?.removeEventListener && r.signal.removeEventListener("abort", d)
        }
        , c);
        r.signal?.addEventListener && r.signal.addEventListener("abort", d, {
            once: !0
        })
    }
    )
}
i(wy, "handleRetry");
async function Ty(e, t) {
    e.retryCount >= e.retries && await e.onMaxRetryTimesExceeded(t, e.retryCount)
}
i(Ty, "handleMaxRetryTimesExceeded");
const Vt = i( (e, t) => {
    const n = e.interceptors.request.use(s => (cu(s, t),
    s[Go]?.validateResponse && (s.validateStatus = () => !1),
    s))
      , r = e.interceptors.response.use(null, async s => {
        const {config: o} = s;
        if (!o)
            return Promise.reject(s);
        const a = cu(o, t);
        return s.response && a.validateResponse?.(s.response) ? s.response : await by(a, s) ? wy(e, a, s, o) : (await Ty(a, s),
        Promise.reject(s))
    }
    );
    return {
        requestInterceptorId: n,
        responseInterceptorId: r
    }
}
, "axiosRetry");
Vt.isNetworkError = gd;
Vt.isSafeRequestError = gy;
Vt.isIdempotentRequestError = _d;
Vt.isNetworkOrIdempotentRequestError = Sd;
Vt.exponentialDelay = _y;
Vt.isRetryableError = Vo;
class Js {
    static{i(this, "Subscribable")
    }constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(t) {
        const n = {
            listener: t
        };
        return this.listeners.add(n),
        this.onSubscribe(),
        () => {
            this.listeners.delete(n),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
const Ko = typeof window > "u" || "Deno"in window;
function at() {}
i(at, "noop");
function Iy(e, t) {
    return typeof e == "function" ? e(t) : e
}
i(Iy, "functionalUpdate");
function ky(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
i(ky, "isValidTimeout");
function Ry(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
i(Ry, "timeUntilStale");
function Kr(e, t, n) {
    return Xs(e) ? typeof t == "function" ? {
        ...n,
        queryKey: e,
        queryFn: t
    } : {
        ...t,
        queryKey: e
    } : e
}
i(Kr, "parseQueryArgs");
function $t(e, t, n) {
    return Xs(e) ? [{
        ...t,
        queryKey: e
    }, n] : [e || {}, t]
}
i($t, "parseFilterArgs");
function uu(e, t) {
    const {type: n="all", exact: r, fetchStatus: s, predicate: o, queryKey: a, stale: c} = e;
    if (Xs(a)) {
        if (r) {
            if (t.queryHash !== Yo(a, t.options))
                return !1
        } else if (!ks(t.queryKey, a))
            return !1
    }
    if (n !== "all") {
        const u = t.isActive();
        if (n === "active" && !u || n === "inactive" && u)
            return !1
    }
    return !(typeof c == "boolean" && t.isStale() !== c || typeof s < "u" && s !== t.state.fetchStatus || o && !o(t))
}
i(uu, "matchQuery");
function lu(e, t) {
    const {exact: n, fetching: r, predicate: s, mutationKey: o} = e;
    if (Xs(o)) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (sn(t.options.mutationKey) !== sn(o))
                return !1
        } else if (!ks(t.options.mutationKey, o))
            return !1
    }
    return !(typeof r == "boolean" && t.state.status === "loading" !== r || s && !s(t))
}
i(lu, "matchMutation");
function Yo(e, t) {
    return (t?.queryKeyHashFn || sn)(e)
}
i(Yo, "hashQueryKeyByOptions");
function sn(e) {
    return JSON.stringify(e, (t, n) => ro(n) ? Object.keys(n).sort().reduce( (r, s) => (r[s] = n[s],
    r), {}) : n)
}
i(sn, "hashQueryKey");
function ks(e, t) {
    return Ed(e, t)
}
i(ks, "partialMatchKey");
function Ed(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Ed(e[n], t[n])) : !1
}
i(Ed, "partialDeepEqual");
function bd(e, t) {
    if (e === t)
        return e;
    const n = du(e) && du(t);
    if (n || ro(e) && ro(t)) {
        const r = n ? e.length : Object.keys(e).length
          , s = n ? t : Object.keys(t)
          , o = s.length
          , a = n ? [] : {};
        let c = 0;
        for (let u = 0; u < o; u++) {
            const d = n ? u : s[u];
            a[d] = bd(e[d], t[d]),
            a[d] === e[d] && c++
        }
        return r === o && c === r ? e : a
    }
    return t
}
i(bd, "replaceEqualDeep");
function du(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
i(du, "isPlainArray");
function ro(e) {
    if (!fu(e))
        return !1;
    const t = e.constructor;
    if (typeof t > "u")
        return !0;
    const n = t.prototype;
    return !(!fu(n) || !n.hasOwnProperty("isPrototypeOf"))
}
i(ro, "isPlainObject$1");
function fu(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
i(fu, "hasObjectPrototype");
function Xs(e) {
    return Array.isArray(e)
}
i(Xs, "isQueryKey");
function wd(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
i(wd, "sleep");
function pu(e) {
    wd(0).then(e)
}
i(pu, "scheduleMicrotask");
function Cy() {
    if (typeof AbortController == "function")
        return new AbortController
}
i(Cy, "getAbortController");
function Ay(e, t, n) {
    return n.isDataEqual != null && n.isDataEqual(e, t) ? e : typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? bd(e, t) : t
}
i(Ay, "replaceData");
class Oy extends Js {
    static{i(this, "FocusManager")
    }constructor() {
        super(),
        this.setup = t => {
            if (!Ko && window.addEventListener) {
                const n = i( () => t(), "listener");
                return window.addEventListener("visibilitychange", n, !1),
                window.addEventListener("focus", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n),
                    window.removeEventListener("focus", n)
                }
            }
        }
    }
    onSubscribe() {
        this.cleanup || this.setEventListener(this.setup)
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            var t;
            (t = this.cleanup) == null || t.call(this),
            this.cleanup = void 0
        }
    }
    setEventListener(t) {
        var n;
        this.setup = t,
        (n = this.cleanup) == null || n.call(this),
        this.cleanup = t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        )
    }
    setFocused(t) {
        this.focused !== t && (this.focused = t,
        this.onFocus())
    }
    onFocus() {
        this.listeners.forEach( ({listener: t}) => {
            t()
        }
        )
    }
    isFocused() {
        return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState)
    }
}
const so = new Oy
  , hu = ["online", "offline"];
class xy extends Js {
    static{i(this, "OnlineManager")
    }constructor() {
        super(),
        this.setup = t => {
            if (!Ko && window.addEventListener) {
                const n = i( () => t(), "listener");
                return hu.forEach(r => {
                    window.addEventListener(r, n, !1)
                }
                ),
                () => {
                    hu.forEach(r => {
                        window.removeEventListener(r, n)
                    }
                    )
                }
            }
        }
    }
    onSubscribe() {
        this.cleanup || this.setEventListener(this.setup)
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            var t;
            (t = this.cleanup) == null || t.call(this),
            this.cleanup = void 0
        }
    }
    setEventListener(t) {
        var n;
        this.setup = t,
        (n = this.cleanup) == null || n.call(this),
        this.cleanup = t(r => {
            typeof r == "boolean" ? this.setOnline(r) : this.onOnline()
        }
        )
    }
    setOnline(t) {
        this.online !== t && (this.online = t,
        this.onOnline())
    }
    onOnline() {
        this.listeners.forEach( ({listener: t}) => {
            t()
        }
        )
    }
    isOnline() {
        return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine
    }
}
const Rs = new xy;
function My(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
i(My, "defaultRetryDelay");
function Jo(e) {
    return (e ?? "online") === "online" ? Rs.isOnline() : !0
}
i(Jo, "canFetch");
class Td {
    static{i(this, "CancelledError")
    }constructor(t) {
        this.revert = t?.revert,
        this.silent = t?.silent
    }
}
function Fi(e) {
    return e instanceof Td
}
i(Fi, "isCancelledError");
function Id(e) {
    let t = !1, n = 0, r = !1, s, o, a;
    const c = new Promise( (E, k) => {
        o = E,
        a = k
    }
    )
      , u = i(E => {
        r || (_(new Td(E)),
        e.abort == null || e.abort())
    }
    , "cancel")
      , d = i( () => {
        t = !0
    }
    , "cancelRetry")
      , p = i( () => {
        t = !1
    }
    , "continueRetry")
      , f = i( () => !so.isFocused() || e.networkMode !== "always" && !Rs.isOnline(), "shouldPause")
      , g = i(E => {
        r || (r = !0,
        e.onSuccess == null || e.onSuccess(E),
        s?.(),
        o(E))
    }
    , "resolve")
      , _ = i(E => {
        r || (r = !0,
        e.onError == null || e.onError(E),
        s?.(),
        a(E))
    }
    , "reject")
      , y = i( () => new Promise(E => {
        s = i(k => {
            const M = r || !f();
            return M && E(k),
            M
        }
        , "continueFn"),
        e.onPause == null || e.onPause()
    }
    ).then( () => {
        s = void 0,
        r || e.onContinue == null || e.onContinue()
    }
    ), "pause")
      , v = i( () => {
        if (r)
            return;
        let E;
        try {
            E = e.fn()
        } catch (k) {
            E = Promise.reject(k)
        }
        Promise.resolve(E).then(g).catch(k => {
            var M, P;
            if (r)
                return;
            const L = (M = e.retry) != null ? M : 3
              , B = (P = e.retryDelay) != null ? P : My
              , A = typeof B == "function" ? B(n, k) : B
              , R = L === !0 || typeof L == "number" && n < L || typeof L == "function" && L(n, k);
            if (t || !R) {
                _(k);
                return
            }
            n++,
            e.onFail == null || e.onFail(n, k),
            wd(A).then( () => {
                if (f())
                    return y()
            }
            ).then( () => {
                t ? _(k) : v()
            }
            )
        }
        )
    }
    , "run");
    return Jo(e.networkMode) ? v() : y().then(v),
    {
        promise: c,
        cancel: u,
        continue: () => s?.() ? c : Promise.resolve(),
        cancelRetry: d,
        continueRetry: p
    }
}
i(Id, "createRetryer");
const Xo = console;
function Py() {
    let e = []
      , t = 0
      , n = i(p => {
        p()
    }
    , "notifyFn")
      , r = i(p => {
        p()
    }
    , "batchNotifyFn");
    const s = i(p => {
        let f;
        t++;
        try {
            f = p()
        } finally {
            t--,
            t || c()
        }
        return f
    }
    , "batch")
      , o = i(p => {
        t ? e.push(p) : pu( () => {
            n(p)
        }
        )
    }
    , "schedule")
      , a = i(p => (...f) => {
        o( () => {
            p(...f)
        }
        )
    }
    , "batchCalls")
      , c = i( () => {
        const p = e;
        e = [],
        p.length && pu( () => {
            r( () => {
                p.forEach(f => {
                    n(f)
                }
                )
            }
            )
        }
        )
    }
    , "flush");
    return {
        batch: s,
        batchCalls: a,
        schedule: o,
        setNotifyFunction: i(p => {
            n = p
        }
        , "setNotifyFunction"),
        setBatchNotifyFunction: i(p => {
            r = p
        }
        , "setBatchNotifyFunction")
    }
}
i(Py, "createNotifyManager");
const $e = Py();
class kd {
    static{i(this, "Removable")
    }destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        ky(this.cacheTime) && (this.gcTimeout = setTimeout( () => {
            this.optionalRemove()
        }
        , this.cacheTime))
    }
    updateCacheTime(t) {
        this.cacheTime = Math.max(this.cacheTime || 0, t ?? (Ko ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        this.gcTimeout && (clearTimeout(this.gcTimeout),
        this.gcTimeout = void 0)
    }
}
class Ny extends kd {
    static{i(this, "Query")
    }constructor(t) {
        super(),
        this.abortSignalConsumed = !1,
        this.defaultOptions = t.defaultOptions,
        this.setOptions(t.options),
        this.observers = [],
        this.cache = t.cache,
        this.logger = t.logger || Xo,
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        this.initialState = t.state || Dy(this.options),
        this.state = this.initialState,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    setOptions(t) {
        this.options = {
            ...this.defaultOptions,
            ...t
        },
        this.updateCacheTime(this.options.cacheTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this)
    }
    setData(t, n) {
        const r = Ay(this.state.data, t, this.options);
        return this.dispatch({
            data: r,
            type: "success",
            dataUpdatedAt: n?.updatedAt,
            manual: n?.manual
        }),
        r
    }
    setState(t, n) {
        this.dispatch({
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var n;
        const r = this.promise;
        return (n = this.retryer) == null || n.cancel(t),
        r ? r.then(at).catch(at) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(this.initialState)
    }
    isActive() {
        return this.observers.some(t => t.options.enabled !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive()
    }
    isStale() {
        return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(t => t.getCurrentResult().isStale)
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || !this.state.dataUpdatedAt || !Ry(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var t;
        const n = this.observers.find(r => r.shouldFetchOnWindowFocus());
        n && n.refetch({
            cancelRefetch: !1
        }),
        (t = this.retryer) == null || t.continue()
    }
    onOnline() {
        var t;
        const n = this.observers.find(r => r.shouldFetchOnReconnect());
        n && n.refetch({
            cancelRefetch: !1
        }),
        (t = this.retryer) == null || t.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        this.cache.notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
            revert: !0
        }) : this.retryer.cancelRetry()),
        this.scheduleGc()),
        this.cache.notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || this.dispatch({
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var r, s;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.dataUpdatedAt && n != null && n.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.promise) {
                var o;
                return (o = this.retryer) == null || o.continueRetry(),
                this.promise
            }
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const _ = this.observers.find(y => y.options.queryFn);
            _ && this.setOptions(_.options)
        }
        const a = Cy()
          , c = {
            queryKey: this.queryKey,
            pageParam: void 0,
            meta: this.meta
        }
          , u = i(_ => {
            Object.defineProperty(_, "signal", {
                enumerable: !0,
                get: () => {
                    if (a)
                        return this.abortSignalConsumed = !0,
                        a.signal
                }
            })
        }
        , "addSignalProperty");
        u(c);
        const d = i( () => this.options.queryFn ? (this.abortSignalConsumed = !1,
        this.options.queryFn(c)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"), "fetchFn")
          , p = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: d
        };
        if (u(p),
        (r = this.options.behavior) == null || r.onFetch(p),
        this.revertState = this.state,
        this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((s = p.fetchOptions) == null ? void 0 : s.meta)) {
            var f;
            this.dispatch({
                type: "fetch",
                meta: (f = p.fetchOptions) == null ? void 0 : f.meta
            })
        }
        const g = i(_ => {
            if (Fi(_) && _.silent || this.dispatch({
                type: "error",
                error: _
            }),
            !Fi(_)) {
                var y, v, E, k;
                (y = (v = this.cache.config).onError) == null || y.call(v, _, this),
                (E = (k = this.cache.config).onSettled) == null || E.call(k, this.state.data, _, this)
            }
            this.isFetchingOptimistic || this.scheduleGc(),
            this.isFetchingOptimistic = !1
        }
        , "onError");
        return this.retryer = Id({
            fn: p.fetchFn,
            abort: a?.abort.bind(a),
            onSuccess: _ => {
                var y, v, E, k;
                if (typeof _ > "u") {
                    g(new Error(this.queryHash + " data is undefined"));
                    return
                }
                this.setData(_),
                (y = (v = this.cache.config).onSuccess) == null || y.call(v, _, this),
                (E = (k = this.cache.config).onSettled) == null || E.call(k, _, this.state.error, this),
                this.isFetchingOptimistic || this.scheduleGc(),
                this.isFetchingOptimistic = !1
            }
            ,
            onError: g,
            onFail: (_, y) => {
                this.dispatch({
                    type: "failed",
                    failureCount: _,
                    error: y
                })
            }
            ,
            onPause: () => {
                this.dispatch({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.dispatch({
                    type: "continue"
                })
            }
            ,
            retry: p.options.retry,
            retryDelay: p.options.retryDelay,
            networkMode: p.options.networkMode
        }),
        this.promise = this.retryer.promise,
        this.promise
    }
    dispatch(t) {
        const n = i(r => {
            var s, o;
            switch (t.type) {
            case "failed":
                return {
                    ...r,
                    fetchFailureCount: t.failureCount,
                    fetchFailureReason: t.error
                };
            case "pause":
                return {
                    ...r,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...r,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...r,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: (s = t.meta) != null ? s : null,
                    fetchStatus: Jo(this.options.networkMode) ? "fetching" : "paused",
                    ...!r.dataUpdatedAt && {
                        error: null,
                        status: "loading"
                    }
                };
            case "success":
                return {
                    ...r,
                    data: t.data,
                    dataUpdateCount: r.dataUpdateCount + 1,
                    dataUpdatedAt: (o = t.dataUpdatedAt) != null ? o : Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...!t.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
            case "error":
                const a = t.error;
                return Fi(a) && a.revert && this.revertState ? {
                    ...this.revertState,
                    fetchStatus: "idle"
                } : {
                    ...r,
                    error: a,
                    errorUpdateCount: r.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: r.fetchFailureCount + 1,
                    fetchFailureReason: a,
                    fetchStatus: "idle",
                    status: "error"
                };
            case "invalidate":
                return {
                    ...r,
                    isInvalidated: !0
                };
            case "setState":
                return {
                    ...r,
                    ...t.state
                }
            }
        }
        , "reducer");
        this.state = n(this.state),
        $e.batch( () => {
            this.observers.forEach(r => {
                r.onQueryUpdate(t)
            }
            ),
            this.cache.notify({
                query: this,
                type: "updated",
                action: t
            })
        }
        )
    }
}
function Dy(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = typeof t < "u"
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "loading",
        fetchStatus: "idle"
    }
}
i(Dy, "getDefaultState$1");
class Ly extends Js {
    static{i(this, "QueryCache")
    }constructor(t) {
        super(),
        this.config = t || {},
        this.queries = [],
        this.queriesMap = {}
    }
    build(t, n, r) {
        var s;
        const o = n.queryKey
          , a = (s = n.queryHash) != null ? s : Yo(o, n);
        let c = this.get(a);
        return c || (c = new Ny({
            cache: this,
            logger: t.getLogger(),
            queryKey: o,
            queryHash: a,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(c)),
        c
    }
    add(t) {
        this.queriesMap[t.queryHash] || (this.queriesMap[t.queryHash] = t,
        this.queries.push(t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = this.queriesMap[t.queryHash];
        n && (t.destroy(),
        this.queries = this.queries.filter(r => r !== t),
        n === t && delete this.queriesMap[t.queryHash],
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        $e.batch( () => {
            this.queries.forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return this.queriesMap[t]
    }
    getAll() {
        return this.queries
    }
    find(t, n) {
        const [r] = $t(t, n);
        return typeof r.exact > "u" && (r.exact = !0),
        this.queries.find(s => uu(r, s))
    }
    findAll(t, n) {
        const [r] = $t(t, n);
        return Object.keys(r).length > 0 ? this.queries.filter(s => uu(r, s)) : this.queries
    }
    notify(t) {
        $e.batch( () => {
            this.listeners.forEach( ({listener: n}) => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        $e.batch( () => {
            this.queries.forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        $e.batch( () => {
            this.queries.forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
class Fy extends kd {
    static{i(this, "Mutation")
    }constructor(t) {
        super(),
        this.defaultOptions = t.defaultOptions,
        this.mutationId = t.mutationId,
        this.mutationCache = t.mutationCache,
        this.logger = t.logger || Xo,
        this.observers = [],
        this.state = t.state || Uy(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = {
            ...this.defaultOptions,
            ...t
        },
        this.updateCacheTime(this.options.cacheTime)
    }
    get meta() {
        return this.options.meta
    }
    setState(t) {
        this.dispatch({
            type: "setState",
            state: t
        })
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        this.mutationCache.notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers = this.observers.filter(n => n !== t),
        this.scheduleGc(),
        this.mutationCache.notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this))
    }
    continue() {
        var t, n;
        return (t = (n = this.retryer) == null ? void 0 : n.continue()) != null ? t : this.execute()
    }
    async execute() {
        const t = i( () => {
            var R;
            return this.retryer = Id({
                fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
                onFail: (x, H) => {
                    this.dispatch({
                        type: "failed",
                        failureCount: x,
                        error: H
                    })
                }
                ,
                onPause: () => {
                    this.dispatch({
                        type: "pause"
                    })
                }
                ,
                onContinue: () => {
                    this.dispatch({
                        type: "continue"
                    })
                }
                ,
                retry: (R = this.options.retry) != null ? R : 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode
            }),
            this.retryer.promise
        }
        , "executeMutation")
          , n = this.state.status === "loading";
        try {
            var r, s, o, a, c, u, d, p;
            if (!n) {
                var f, g, _, y;
                this.dispatch({
                    type: "loading",
                    variables: this.options.variables
                }),
                await ((f = (g = this.mutationCache.config).onMutate) == null ? void 0 : f.call(g, this.state.variables, this));
                const x = await ((_ = (y = this.options).onMutate) == null ? void 0 : _.call(y, this.state.variables));
                x !== this.state.context && this.dispatch({
                    type: "loading",
                    context: x,
                    variables: this.state.variables
                })
            }
            const R = await t();
            return await ((r = (s = this.mutationCache.config).onSuccess) == null ? void 0 : r.call(s, R, this.state.variables, this.state.context, this)),
            await ((o = (a = this.options).onSuccess) == null ? void 0 : o.call(a, R, this.state.variables, this.state.context)),
            await ((c = (u = this.mutationCache.config).onSettled) == null ? void 0 : c.call(u, R, null, this.state.variables, this.state.context, this)),
            await ((d = (p = this.options).onSettled) == null ? void 0 : d.call(p, R, null, this.state.variables, this.state.context)),
            this.dispatch({
                type: "success",
                data: R
            }),
            R
        } catch (R) {
            try {
                var v, E, k, M, P, L, B, A;
                throw await ((v = (E = this.mutationCache.config).onError) == null ? void 0 : v.call(E, R, this.state.variables, this.state.context, this)),
                await ((k = (M = this.options).onError) == null ? void 0 : k.call(M, R, this.state.variables, this.state.context)),
                await ((P = (L = this.mutationCache.config).onSettled) == null ? void 0 : P.call(L, void 0, R, this.state.variables, this.state.context, this)),
                await ((B = (A = this.options).onSettled) == null ? void 0 : B.call(A, void 0, R, this.state.variables, this.state.context)),
                R
            } finally {
                this.dispatch({
                    type: "error",
                    error: R
                })
            }
        }
    }
    dispatch(t) {
        const n = i(r => {
            switch (t.type) {
            case "failed":
                return {
                    ...r,
                    failureCount: t.failureCount,
                    failureReason: t.error
                };
            case "pause":
                return {
                    ...r,
                    isPaused: !0
                };
            case "continue":
                return {
                    ...r,
                    isPaused: !1
                };
            case "loading":
                return {
                    ...r,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: !Jo(this.options.networkMode),
                    status: "loading",
                    variables: t.variables
                };
            case "success":
                return {
                    ...r,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return {
                    ...r,
                    data: void 0,
                    error: t.error,
                    failureCount: r.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: "error"
                };
            case "setState":
                return {
                    ...r,
                    ...t.state
                }
            }
        }
        , "reducer");
        this.state = n(this.state),
        $e.batch( () => {
            this.observers.forEach(r => {
                r.onMutationUpdate(t)
            }
            ),
            this.mutationCache.notify({
                mutation: this,
                type: "updated",
                action: t
            })
        }
        )
    }
}
function Uy() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0
    }
}
i(Uy, "getDefaultState");
class $y extends Js {
    static{i(this, "MutationCache")
    }constructor(t) {
        super(),
        this.config = t || {},
        this.mutations = [],
        this.mutationId = 0
    }
    build(t, n, r) {
        const s = new Fy({
            mutationCache: this,
            logger: t.getLogger(),
            mutationId: ++this.mutationId,
            options: t.defaultMutationOptions(n),
            state: r,
            defaultOptions: n.mutationKey ? t.getMutationDefaults(n.mutationKey) : void 0
        });
        return this.add(s),
        s
    }
    add(t) {
        this.mutations.push(t),
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        this.mutations = this.mutations.filter(n => n !== t),
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    clear() {
        $e.batch( () => {
            this.mutations.forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return this.mutations
    }
    find(t) {
        return typeof t.exact > "u" && (t.exact = !0),
        this.mutations.find(n => lu(t, n))
    }
    findAll(t) {
        return this.mutations.filter(n => lu(t, n))
    }
    notify(t) {
        $e.batch( () => {
            this.listeners.forEach( ({listener: n}) => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        var t;
        return this.resuming = ((t = this.resuming) != null ? t : Promise.resolve()).then( () => {
            const n = this.mutations.filter(r => r.state.isPaused);
            return $e.batch( () => n.reduce( (r, s) => r.then( () => s.continue().catch(at)), Promise.resolve()))
        }
        ).then( () => {
            this.resuming = void 0
        }
        ),
        this.resuming
    }
}
function By() {
    return {
        onFetch: e => {
            e.fetchFn = () => {
                var t, n, r, s, o, a;
                const c = (t = e.fetchOptions) == null || (n = t.meta) == null ? void 0 : n.refetchPage
                  , u = (r = e.fetchOptions) == null || (s = r.meta) == null ? void 0 : s.fetchMore
                  , d = u?.pageParam
                  , p = u?.direction === "forward"
                  , f = u?.direction === "backward"
                  , g = ((o = e.state.data) == null ? void 0 : o.pages) || []
                  , _ = ((a = e.state.data) == null ? void 0 : a.pageParams) || [];
                let y = _
                  , v = !1;
                const E = i(A => {
                    Object.defineProperty(A, "signal", {
                        enumerable: !0,
                        get: () => {
                            var R;
                            if ((R = e.signal) != null && R.aborted)
                                v = !0;
                            else {
                                var x;
                                (x = e.signal) == null || x.addEventListener("abort", () => {
                                    v = !0
                                }
                                )
                            }
                            return e.signal
                        }
                    })
                }
                , "addSignalProperty")
                  , k = e.options.queryFn || ( () => Promise.reject("Missing queryFn for queryKey '" + e.options.queryHash + "'"))
                  , M = i( (A, R, x, H) => (y = H ? [R, ...y] : [...y, R],
                H ? [x, ...A] : [...A, x]), "buildNewPages")
                  , P = i( (A, R, x, H) => {
                    if (v)
                        return Promise.reject("Cancelled");
                    if (typeof x > "u" && !R && A.length)
                        return Promise.resolve(A);
                    const D = {
                        queryKey: e.queryKey,
                        pageParam: x,
                        meta: e.options.meta
                    };
                    E(D);
                    const U = k(D);
                    return Promise.resolve(U).then(re => M(A, x, re, H))
                }
                , "fetchPage");
                let L;
                if (!g.length)
                    L = P([]);
                else if (p) {
                    const A = typeof d < "u"
                      , R = A ? d : mu(e.options, g);
                    L = P(g, A, R)
                } else if (f) {
                    const A = typeof d < "u"
                      , R = A ? d : Hy(e.options, g);
                    L = P(g, A, R, !0)
                } else {
                    y = [];
                    const A = typeof e.options.getNextPageParam > "u";
                    L = (c && g[0] ? c(g[0], 0, g) : !0) ? P([], A, _[0]) : Promise.resolve(M([], _[0], g[0]));
                    for (let x = 1; x < g.length; x++)
                        L = L.then(H => {
                            if (c && g[x] ? c(g[x], x, g) : !0) {
                                const U = A ? _[x] : mu(e.options, H);
                                return P(H, A, U)
                            }
                            return Promise.resolve(M(H, _[x], g[x]))
                        }
                        )
                }
                return L.then(A => ({
                    pages: A,
                    pageParams: y
                }))
            }
        }
    }
}
i(By, "infiniteQueryBehavior");
function mu(e, t) {
    return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t)
}
i(mu, "getNextPageParam");
function Hy(e, t) {
    return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t)
}
i(Hy, "getPreviousPageParam");
class jy {
    static{i(this, "QueryClient")
    }constructor(t={}) {
        this.queryCache = t.queryCache || new Ly,
        this.mutationCache = t.mutationCache || new $y,
        this.logger = t.logger || Xo,
        this.defaultOptions = t.defaultOptions || {},
        this.queryDefaults = [],
        this.mutationDefaults = [],
        this.mountCount = 0
    }
    mount() {
        this.mountCount++,
        this.mountCount === 1 && (this.unsubscribeFocus = so.subscribe( () => {
            so.isFocused() && (this.resumePausedMutations(),
            this.queryCache.onFocus())
        }
        ),
        this.unsubscribeOnline = Rs.subscribe( () => {
            Rs.isOnline() && (this.resumePausedMutations(),
            this.queryCache.onOnline())
        }
        ))
    }
    unmount() {
        var t, n;
        this.mountCount--,
        this.mountCount === 0 && ((t = this.unsubscribeFocus) == null || t.call(this),
        this.unsubscribeFocus = void 0,
        (n = this.unsubscribeOnline) == null || n.call(this),
        this.unsubscribeOnline = void 0)
    }
    isFetching(t, n) {
        const [r] = $t(t, n);
        return r.fetchStatus = "fetching",
        this.queryCache.findAll(r).length
    }
    isMutating(t) {
        return this.mutationCache.findAll({
            ...t,
            fetching: !0
        }).length
    }
    getQueryData(t, n) {
        var r;
        return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data
    }
    ensureQueryData(t, n, r) {
        const s = Kr(t, n, r)
          , o = this.getQueryData(s.queryKey);
        return o ? Promise.resolve(o) : this.fetchQuery(s)
    }
    getQueriesData(t) {
        return this.getQueryCache().findAll(t).map( ({queryKey: n, state: r}) => {
            const s = r.data;
            return [n, s]
        }
        )
    }
    setQueryData(t, n, r) {
        const s = this.queryCache.find(t)
          , o = s?.state.data
          , a = Iy(n, o);
        if (typeof a > "u")
            return;
        const c = Kr(t)
          , u = this.defaultQueryOptions(c);
        return this.queryCache.build(this, u).setData(a, {
            ...r,
            manual: !0
        })
    }
    setQueriesData(t, n, r) {
        return $e.batch( () => this.getQueryCache().findAll(t).map( ({queryKey: s}) => [s, this.setQueryData(s, n, r)]))
    }
    getQueryState(t, n) {
        var r;
        return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state
    }
    removeQueries(t, n) {
        const [r] = $t(t, n)
          , s = this.queryCache;
        $e.batch( () => {
            s.findAll(r).forEach(o => {
                s.remove(o)
            }
            )
        }
        )
    }
    resetQueries(t, n, r) {
        const [s,o] = $t(t, n, r)
          , a = this.queryCache
          , c = {
            type: "active",
            ...s
        };
        return $e.batch( () => (a.findAll(s).forEach(u => {
            u.reset()
        }
        ),
        this.refetchQueries(c, o)))
    }
    cancelQueries(t, n, r) {
        const [s,o={}] = $t(t, n, r);
        typeof o.revert > "u" && (o.revert = !0);
        const a = $e.batch( () => this.queryCache.findAll(s).map(c => c.cancel(o)));
        return Promise.all(a).then(at).catch(at)
    }
    invalidateQueries(t, n, r) {
        const [s,o] = $t(t, n, r);
        return $e.batch( () => {
            var a, c;
            if (this.queryCache.findAll(s).forEach(d => {
                d.invalidate()
            }
            ),
            s.refetchType === "none")
                return Promise.resolve();
            const u = {
                ...s,
                type: (a = (c = s.refetchType) != null ? c : s.type) != null ? a : "active"
            };
            return this.refetchQueries(u, o)
        }
        )
    }
    refetchQueries(t, n, r) {
        const [s,o] = $t(t, n, r)
          , a = $e.batch( () => this.queryCache.findAll(s).filter(u => !u.isDisabled()).map(u => {
            var d;
            return u.fetch(void 0, {
                ...o,
                cancelRefetch: (d = o?.cancelRefetch) != null ? d : !0,
                meta: {
                    refetchPage: s.refetchPage
                }
            })
        }
        ));
        let c = Promise.all(a).then(at);
        return o != null && o.throwOnError || (c = c.catch(at)),
        c
    }
    fetchQuery(t, n, r) {
        const s = Kr(t, n, r)
          , o = this.defaultQueryOptions(s);
        typeof o.retry > "u" && (o.retry = !1);
        const a = this.queryCache.build(this, o);
        return a.isStaleByTime(o.staleTime) ? a.fetch(o) : Promise.resolve(a.state.data)
    }
    prefetchQuery(t, n, r) {
        return this.fetchQuery(t, n, r).then(at).catch(at)
    }
    fetchInfiniteQuery(t, n, r) {
        const s = Kr(t, n, r);
        return s.behavior = By(),
        this.fetchQuery(s)
    }
    prefetchInfiniteQuery(t, n, r) {
        return this.fetchInfiniteQuery(t, n, r).then(at).catch(at)
    }
    resumePausedMutations() {
        return this.mutationCache.resumePausedMutations()
    }
    getQueryCache() {
        return this.queryCache
    }
    getMutationCache() {
        return this.mutationCache
    }
    getLogger() {
        return this.logger
    }
    getDefaultOptions() {
        return this.defaultOptions
    }
    setDefaultOptions(t) {
        this.defaultOptions = t
    }
    setQueryDefaults(t, n) {
        const r = this.queryDefaults.find(s => sn(t) === sn(s.queryKey));
        r ? r.defaultOptions = n : this.queryDefaults.push({
            queryKey: t,
            defaultOptions: n
        })
    }
    getQueryDefaults(t) {
        if (!t)
            return;
        const n = this.queryDefaults.find(r => ks(t, r.queryKey));
        return n?.defaultOptions
    }
    setMutationDefaults(t, n) {
        const r = this.mutationDefaults.find(s => sn(t) === sn(s.mutationKey));
        r ? r.defaultOptions = n : this.mutationDefaults.push({
            mutationKey: t,
            defaultOptions: n
        })
    }
    getMutationDefaults(t) {
        if (!t)
            return;
        const n = this.mutationDefaults.find(r => ks(t, r.mutationKey));
        return n?.defaultOptions
    }
    defaultQueryOptions(t) {
        if (t != null && t._defaulted)
            return t;
        const n = {
            ...this.defaultOptions.queries,
            ...this.getQueryDefaults(t?.queryKey),
            ...t,
            _defaulted: !0
        };
        return !n.queryHash && n.queryKey && (n.queryHash = Yo(n.queryKey, n)),
        typeof n.refetchOnReconnect > "u" && (n.refetchOnReconnect = n.networkMode !== "always"),
        typeof n.useErrorBoundary > "u" && (n.useErrorBoundary = !!n.suspense),
        n
    }
    defaultMutationOptions(t) {
        return t != null && t._defaulted ? t : {
            ...this.defaultOptions.mutations,
            ...this.getMutationDefaults(t?.mutationKey),
            ...t,
            _defaulted: !0
        }
    }
    clear() {
        this.queryCache.clear(),
        this.mutationCache.clear()
    }
}
const Ut = "https://api.polarr.co/polarr-next";
new jy;
const io = new Map;
function Wy(e) {
    io.set(e, !0),
    setTimeout( () => io.delete(e), 1e4)
}
i(Wy, "registerProjectIdAsDeleted");
function qy(e) {
    io.delete(e)
}
i(qy, "removeProjectIdAsDeleted");
const _e = Re.create({
    baseURL: Ut
});
Vt(_e, {
    retryDelay: Vt.exponentialDelay
});
class gu {
    static{i(this, "PNApiOperations")
    }static basePaths = {
        payment: `${Ut}/payment`,
        presets: `${Ut}/presets`,
        projects: `${Ut}/projects`,
        images: `${Ut}/images`,
        serviceStatus: `${Ut}/service-status`,
        signedUrls: `${Ut}/upload/signed-urls`,
        users: `${Ut}/iam/users`
    };
    static listImages = async t => (await _e.get(this.basePaths.images, {
        params: t
    })).data;
    static getImage = async t => (await _e.get(`${this.basePaths.images}/${t}`)).data;
    static createImage = async t => (await _e.post(this.basePaths.images, t)).data;
    static deleteImage = async t => {
        await _e.delete(`${this.basePaths.images}/${t}`)
    }
    ;
    static listPresets = async t => (await _e.get(this.basePaths.presets, {
        params: t
    })).data;
    static getPreset = async t => (await _e.get(`${this.basePaths.presets}/${t}`)).data;
    static createPreset = async t => (await _e.post(this.basePaths.presets, t)).data;
    static updatePreset = async (t, n) => (await _e.patch(`${this.basePaths.presets}/${t}`, n)).data;
    static deletePreset = async t => {
        await _e.delete(`${this.basePaths.presets}/${t}`)
    }
    ;
    static listProjects = async t => (await _e.get(this.basePaths.projects, {
        params: t
    })).data;
    static getProject = async t => (await _e.get(`${this.basePaths.projects}/${t}`)).data;
    static createProject = async t => {
        const n = await _e.post(this.basePaths.projects, t);
        return qy(n.data.projectId),
        n.data
    }
    ;
    static updateProject = async (t, n) => (await _e.patch(`${this.basePaths.projects}/${t}`, n)).data;
    static deleteProject = async t => {
        await _e.delete(`${this.basePaths.projects}/${t}`),
        Wy(t)
    }
    ;
    static getSignedUrls = async t => {
        const n = {
            "content-types": t.map(s => s.contentType).join(","),
            "entity-types": t.map(s => s.entityType).join(","),
            "content-digests": t.map(s => s.contentDigest ?? "").join(",")
        };
        return (await _e.get(this.basePaths.signedUrls, {
            params: n
        })).data.urls
    }
    ;
    static getCurrentUser = async () => (await _e.get(`${this.basePaths.users}/@me`)).data;
    static deleteCurrentUser = async () => {
        const t = await _e.delete(`${this.basePaths.users}/@me`);
        return t.status === 200 || t.status === 202 || t.status === 204
    }
    ;
    static getUserActivities = async t => {
        const n = `${this.basePaths.users}/@me/activity-events`;
        return (await _e.get(n, {
            params: t
        })).data
    }
    ;
    static getServiceStatus = async () => (await fetch(this.basePaths.serviceStatus)).json();
    static getPaymentPlans = async () => (await fetch(`${this.basePaths.payment}/plans`)).json();
    static createStripeCheckoutSession = async t => (await _e.post(`${this.basePaths.payment}/stripe/checkout-sessions`, t)).data;
    static createStripeCustomerPortalSession = async () => (await _e.post(`${this.basePaths.payment}/stripe/customer-portal-sessions`)).data;
    static redeemPromoCode = async t => (await _e.post(`${this.basePaths.payment}/promo-codes/redemptions`, t)).data;
    static reportCreditConsumptionEvents = async t => {
        await _e.post(`${this.basePaths.payment}/credit-consumption/events`, t)
    }
    ;
    static uploadContent = async t => {
        const n = await _e.put(t.url, t.data, {
            transformRequest: (r, s) => (delete s.Authorization,
            s["Content-Type"] = t.contentType ?? t.data.type,
            r)
        });
        return {
            url: this.convertToCDNUrl(n.data.url)
        }
    }
    ;
    static convertToCDNUrl = t => {
        const n = new URL(t);
        return n.host === "polarr-playground-images.s3.us-west-1.amazonaws.com" && (n.host = "images.polarr.co"),
        n.toString()
    }
}
const Rd = Object.prototype.toString;
function Qo(e) {
    switch (Rd.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
        return !0;
    default:
        return Ot(e, Error)
    }
}
i(Qo, "isError");
function Vn(e, t) {
    return Rd.call(e) === `[object ${t}]`
}
i(Vn, "isBuiltin");
function Cd(e) {
    return Vn(e, "ErrorEvent")
}
i(Cd, "isErrorEvent$2");
function yu(e) {
    return Vn(e, "DOMError")
}
i(yu, "isDOMError");
function zy(e) {
    return Vn(e, "DOMException")
}
i(zy, "isDOMException");
function Ct(e) {
    return Vn(e, "String")
}
i(Ct, "isString");
function Zo(e) {
    return typeof e == "object" && e !== null && "__sentry_template_string__"in e && "__sentry_template_values__"in e
}
i(Zo, "isParameterizedString");
function ea(e) {
    return e === null || Zo(e) || typeof e != "object" && typeof e != "function"
}
i(ea, "isPrimitive");
function Fn(e) {
    return Vn(e, "Object")
}
i(Fn, "isPlainObject");
function Qs(e) {
    return typeof Event < "u" && Ot(e, Event)
}
i(Qs, "isEvent");
function Gy(e) {
    return typeof Element < "u" && Ot(e, Element)
}
i(Gy, "isElement$2");
function Vy(e) {
    return Vn(e, "RegExp")
}
i(Vy, "isRegExp");
function Zs(e) {
    return !!(e && e.then && typeof e.then == "function")
}
i(Zs, "isThenable");
function Ky(e) {
    return Fn(e) && "nativeEvent"in e && "preventDefault"in e && "stopPropagation"in e
}
i(Ky, "isSyntheticEvent");
function Ot(e, t) {
    try {
        return e instanceof t
    } catch {
        return !1
    }
}
i(Ot, "isInstanceOf");
function Ad(e) {
    return !!(typeof e == "object" && e !== null && (e.__isVue || e._isVue))
}
i(Ad, "isVueViewModel");
function Nn(e, t=0) {
    return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`
}
i(Nn, "truncate");
function _u(e, t) {
    if (!Array.isArray(e))
        return "";
    const n = [];
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        try {
            Ad(s) ? n.push("[VueViewModel]") : n.push(String(s))
        } catch {
            n.push("[value cannot be serialized]")
        }
    }
    return n.join(t)
}
i(_u, "safeJoin");
function Yy(e, t, n=!1) {
    return Ct(e) ? Vy(t) ? t.test(e) : Ct(t) ? n ? e === t : e.includes(t) : !1 : !1
}
i(Yy, "isMatchingPattern");
function zt(e, t=[], n=!1) {
    return t.some(r => Yy(e, r, n))
}
i(zt, "stringMatchesSomePattern");
function Jy(e, t, n=250, r, s, o, a) {
    if (!o.exception || !o.exception.values || !a || !Ot(a.originalException, Error))
        return;
    const c = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
    c && (o.exception.values = Xy(oo(e, t, s, a.originalException, r, o.exception.values, c, 0), n))
}
i(Jy, "applyAggregateErrorsToEvent");
function oo(e, t, n, r, s, o, a, c) {
    if (o.length >= n + 1)
        return o;
    let u = [...o];
    if (Ot(r[s], Error)) {
        Su(a, c);
        const d = e(t, r[s])
          , p = u.length;
        vu(d, s, p, c),
        u = oo(e, t, n, r[s], s, [d, ...u], d, p)
    }
    return Array.isArray(r.errors) && r.errors.forEach( (d, p) => {
        if (Ot(d, Error)) {
            Su(a, c);
            const f = e(t, d)
              , g = u.length;
            vu(f, `errors[${p}]`, g, c),
            u = oo(e, t, n, d, s, [f, ...u], f, g)
        }
    }
    ),
    u
}
i(oo, "aggregateExceptionsFromError");
function Su(e, t) {
    e.mechanism = e.mechanism || {
        type: "generic",
        handled: !0
    },
    e.mechanism = {
        ...e.mechanism,
        ...e.type === "AggregateError" && {
            is_exception_group: !0
        },
        exception_id: t
    }
}
i(Su, "applyExceptionGroupFieldsForParentException");
function vu(e, t, n, r) {
    e.mechanism = e.mechanism || {
        type: "generic",
        handled: !0
    },
    e.mechanism = {
        ...e.mechanism,
        type: "chained",
        source: t,
        exception_id: n,
        parent_id: r
    }
}
i(vu, "applyExceptionGroupFieldsForChildException");
function Xy(e, t) {
    return e.map(n => (n.value && (n.value = Nn(n.value, t)),
    n))
}
i(Xy, "truncateAggregateExceptions");
function Od(e) {
    if (e !== void 0)
        return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0
}
i(Od, "getBreadcrumbLogLevelFromHttpStatusCode");
const cn = "8.37.1"
  , ne = globalThis;
function ei(e, t, n) {
    const r = n || ne
      , s = r.__SENTRY__ = r.__SENTRY__ || {}
      , o = s[cn] = s[cn] || {};
    return o[e] || (o[e] = t())
}
i(ei, "getGlobalSingleton");
const Dn = ne
  , Qy = 80;
function xt(e, t={}) {
    if (!e)
        return "<unknown>";
    try {
        let n = e;
        const r = 5
          , s = [];
        let o = 0
          , a = 0;
        const c = " > "
          , u = c.length;
        let d;
        const p = Array.isArray(t) ? t : t.keyAttrs
          , f = !Array.isArray(t) && t.maxStringLength || Qy;
        for (; n && o++ < r && (d = Zy(n, p),
        !(d === "html" || o > 1 && a + s.length * u + d.length >= f)); )
            s.push(d),
            a += d.length,
            n = n.parentNode;
        return s.reverse().join(c)
    } catch {
        return "<unknown>"
    }
}
i(xt, "htmlTreeAsString");
function Zy(e, t) {
    const n = e
      , r = [];
    if (!n || !n.tagName)
        return "";
    if (Dn.HTMLElement && n instanceof HTMLElement && n.dataset) {
        if (n.dataset.sentryComponent)
            return n.dataset.sentryComponent;
        if (n.dataset.sentryElement)
            return n.dataset.sentryElement
    }
    r.push(n.tagName.toLowerCase());
    const s = t && t.length ? t.filter(a => n.getAttribute(a)).map(a => [a, n.getAttribute(a)]) : null;
    if (s && s.length)
        s.forEach(a => {
            r.push(`[${a[0]}="${a[1]}"]`)
        }
        );
    else {
        n.id && r.push(`#${n.id}`);
        const a = n.className;
        if (a && Ct(a)) {
            const c = a.split(/\s+/);
            for (const u of c)
                r.push(`.${u}`)
        }
    }
    const o = ["aria-label", "type", "name", "title", "alt"];
    for (const a of o) {
        const c = n.getAttribute(a);
        c && r.push(`[${a}="${c}"]`)
    }
    return r.join("")
}
i(Zy, "_htmlElementAsString");
function xd() {
    try {
        return Dn.document.location.href
    } catch {
        return ""
    }
}
i(xd, "getLocationHref");
function e_(e) {
    return Dn.document && Dn.document.querySelector ? Dn.document.querySelector(e) : null
}
i(e_, "getDomElement");
function Md(e) {
    if (!Dn.HTMLElement)
        return null;
    let t = e;
    const n = 5;
    for (let r = 0; r < n; r++) {
        if (!t)
            return null;
        if (t instanceof HTMLElement) {
            if (t.dataset.sentryComponent)
                return t.dataset.sentryComponent;
            if (t.dataset.sentryElement)
                return t.dataset.sentryElement
        }
        t = t.parentNode
    }
    return null
}
i(Md, "getComponentName");
const mn = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
  , t_ = "Sentry Logger "
  , ao = ["debug", "info", "warn", "error", "log", "assert", "trace"]
  , Cs = {};
function Kn(e) {
    if (!("console"in ne))
        return e();
    const t = ne.console
      , n = {}
      , r = Object.keys(Cs);
    r.forEach(s => {
        const o = Cs[s];
        n[s] = t[s],
        t[s] = o
    }
    );
    try {
        return e()
    } finally {
        r.forEach(s => {
            t[s] = n[s]
        }
        )
    }
}
i(Kn, "consoleSandbox");
function n_() {
    let e = !1;
    const t = {
        enable: () => {
            e = !0
        }
        ,
        disable: () => {
            e = !1
        }
        ,
        isEnabled: () => e
    };
    return mn ? ao.forEach(n => {
        t[n] = (...r) => {
            e && Kn( () => {
                ne.console[n](`${t_}[${n}]:`, ...r)
            }
            )
        }
    }
    ) : ao.forEach(n => {
        t[n] = () => {}
    }
    ),
    t
}
i(n_, "makeLogger");
const N = ei("logger", n_)
  , r_ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function s_(e) {
    return e === "http" || e === "https"
}
i(s_, "isValidProtocol");
function Ir(e, t=!1) {
    const {host: n, path: r, pass: s, port: o, projectId: a, protocol: c, publicKey: u} = e;
    return `${c}://${u}${t && s ? `:${s}` : ""}@${n}${o ? `:${o}` : ""}/${r && `${r}/`}${a}`
}
i(Ir, "dsnToString");
function i_(e) {
    const t = r_.exec(e);
    if (!t) {
        Kn( () => {
            console.error(`Invalid Sentry Dsn: ${e}`)
        }
        );
        return
    }
    const [n,r,s="",o="",a="",c=""] = t.slice(1);
    let u = ""
      , d = c;
    const p = d.split("/");
    if (p.length > 1 && (u = p.slice(0, -1).join("/"),
    d = p.pop()),
    d) {
        const f = d.match(/^\d+/);
        f && (d = f[0])
    }
    return Pd({
        host: o,
        pass: s,
        path: u,
        projectId: d,
        port: a,
        protocol: n,
        publicKey: r
    })
}
i(i_, "dsnFromString");
function Pd(e) {
    return {
        protocol: e.protocol,
        publicKey: e.publicKey || "",
        pass: e.pass || "",
        host: e.host,
        port: e.port || "",
        path: e.path || "",
        projectId: e.projectId
    }
}
i(Pd, "dsnFromComponents");
function o_(e) {
    if (!mn)
        return !0;
    const {port: t, projectId: n, protocol: r} = e;
    return ["protocol", "publicKey", "host", "projectId"].find(a => e[a] ? !1 : (N.error(`Invalid Sentry Dsn: ${a} missing`),
    !0)) ? !1 : n.match(/^\d+$/) ? s_(r) ? t && isNaN(parseInt(t, 10)) ? (N.error(`Invalid Sentry Dsn: Invalid port ${t}`),
    !1) : !0 : (N.error(`Invalid Sentry Dsn: Invalid protocol ${r}`),
    !1) : (N.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
    !1)
}
i(o_, "validateDsn");
function a_(e) {
    const t = typeof e == "string" ? i_(e) : Pd(e);
    if (!(!t || !o_(t)))
        return t
}
i(a_, "makeDsn");
class gt extends Error {
    static{i(this, "SentryError")
    }constructor(t, n="warn") {
        super(t),
        this.message = t,
        this.name = new.target.prototype.constructor.name,
        Object.setPrototypeOf(this, new.target.prototype),
        this.logLevel = n
    }
}
function Ge(e, t, n) {
    if (!(t in e))
        return;
    const r = e[t]
      , s = n(r);
    typeof s == "function" && Nd(s, r),
    e[t] = s
}
i(Ge, "fill");
function it(e, t, n) {
    try {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
        })
    } catch {
        mn && N.log(`Failed to add non-enumerable property "${t}" to object`, e)
    }
}
i(it, "addNonEnumerableProperty");
function Nd(e, t) {
    try {
        const n = t.prototype || {};
        e.prototype = t.prototype = n,
        it(e, "__sentry_original__", t)
    } catch {}
}
i(Nd, "markFunctionWrapped");
function ta(e) {
    return e.__sentry_original__
}
i(ta, "getOriginalFunction");
function c_(e) {
    return Object.keys(e).map(t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&")
}
i(c_, "urlEncode");
function Dd(e) {
    if (Qo(e))
        return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...bu(e)
        };
    if (Qs(e)) {
        const t = {
            type: e.type,
            target: Eu(e.target),
            currentTarget: Eu(e.currentTarget),
            ...bu(e)
        };
        return typeof CustomEvent < "u" && Ot(e, CustomEvent) && (t.detail = e.detail),
        t
    } else
        return e
}
i(Dd, "convertToPlainObject");
function Eu(e) {
    try {
        return Gy(e) ? xt(e) : Object.prototype.toString.call(e)
    } catch {
        return "<unknown>"
    }
}
i(Eu, "serializeEventTarget");
function bu(e) {
    if (typeof e == "object" && e !== null) {
        const t = {};
        for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t
    } else
        return {}
}
i(bu, "getOwnProperties");
function u_(e, t=40) {
    const n = Object.keys(Dd(e));
    n.sort();
    const r = n[0];
    if (!r)
        return "[object has no keys]";
    if (r.length >= t)
        return Nn(r, t);
    for (let s = n.length; s > 0; s--) {
        const o = n.slice(0, s).join(", ");
        if (!(o.length > t))
            return s === n.length ? o : Nn(o, t)
    }
    return ""
}
i(u_, "extractExceptionKeysForMessage");
function Ae(e) {
    return co(e, new Map)
}
i(Ae, "dropUndefinedKeys");
function co(e, t) {
    if (l_(e)) {
        const n = t.get(e);
        if (n !== void 0)
            return n;
        const r = {};
        t.set(e, r);
        for (const s of Object.getOwnPropertyNames(e))
            typeof e[s] < "u" && (r[s] = co(e[s], t));
        return r
    }
    if (Array.isArray(e)) {
        const n = t.get(e);
        if (n !== void 0)
            return n;
        const r = [];
        return t.set(e, r),
        e.forEach(s => {
            r.push(co(s, t))
        }
        ),
        r
    }
    return e
}
i(co, "_dropUndefinedKeys");
function l_(e) {
    if (!Fn(e))
        return !1;
    try {
        const t = Object.getPrototypeOf(e).constructor.name;
        return !t || t === "Object"
    } catch {
        return !0
    }
}
i(l_, "isPojo");
const Ld = 50
  , fn = "?"
  , wu = /\(error: (.*)\)/
  , Tu = /captureMessage|captureException/;
function Fd(...e) {
    const t = e.sort( (n, r) => n[0] - r[0]).map(n => n[1]);
    return (n, r=0, s=0) => {
        const o = []
          , a = n.split(`
`);
        for (let c = r; c < a.length; c++) {
            const u = a[c];
            if (u.length > 1024)
                continue;
            const d = wu.test(u) ? u.replace(wu, "$1") : u;
            if (!d.match(/\S*Error: /)) {
                for (const p of t) {
                    const f = p(d);
                    if (f) {
                        o.push(f);
                        break
                    }
                }
                if (o.length >= Ld + s)
                    break
            }
        }
        return f_(o.slice(s))
    }
}
i(Fd, "createStackParser");
function d_(e) {
    return Array.isArray(e) ? Fd(...e) : e
}
i(d_, "stackParserFromStackParserOptions");
function f_(e) {
    if (!e.length)
        return [];
    const t = Array.from(e);
    return /sentryWrapped/.test(Yr(t).function || "") && t.pop(),
    t.reverse(),
    Tu.test(Yr(t).function || "") && (t.pop(),
    Tu.test(Yr(t).function || "") && t.pop()),
    t.slice(0, Ld).map(n => ({
        ...n,
        filename: n.filename || Yr(t).filename,
        function: n.function || fn
    }))
}
i(f_, "stripSentryFramesAndReverse");
function Yr(e) {
    return e[e.length - 1] || {}
}
i(Yr, "getLastStackFrame");
const Ui = "<anonymous>";
function Mt(e) {
    try {
        return !e || typeof e != "function" ? Ui : e.name || Ui
    } catch {
        return Ui
    }
}
i(Mt, "getFunctionName");
function Iu(e) {
    const t = e.exception;
    if (t) {
        const n = [];
        try {
            return t.values.forEach(r => {
                r.stacktrace.frames && n.push(...r.stacktrace.frames)
            }
            ),
            n
        } catch {
            return
        }
    }
}
i(Iu, "getFramesFromEvent");
const ps = {}
  , ku = {};
function Jt(e, t) {
    ps[e] = ps[e] || [],
    ps[e].push(t)
}
i(Jt, "addHandler$1");
function Xt(e, t) {
    if (!ku[e]) {
        ku[e] = !0;
        try {
            t()
        } catch (n) {
            mn && N.error(`Error while instrumenting ${e}`, n)
        }
    }
}
i(Xt, "maybeInstrument");
function st(e, t) {
    const n = e && ps[e];
    if (n)
        for (const r of n)
            try {
                r(t)
            } catch (s) {
                mn && N.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${Mt(r)}
Error:`, s)
            }
}
i(st, "triggerHandlers$1");
function p_(e) {
    const t = "console";
    Jt(t, e),
    Xt(t, h_)
}
i(p_, "addConsoleInstrumentationHandler");
function h_() {
    "console"in ne && ao.forEach(function(e) {
        e in ne.console && Ge(ne.console, e, function(t) {
            return Cs[e] = t,
            function(...n) {
                st("console", {
                    args: n,
                    level: e
                });
                const s = Cs[e];
                s && s.apply(ne.console, n)
            }
        })
    })
}
i(h_, "instrumentConsole");
const uo = ne;
function Ud() {
    if (!("fetch"in uo))
        return !1;
    try {
        return new Headers,
        new Request("http://www.example.com"),
        new Response,
        !0
    } catch {
        return !1
    }
}
i(Ud, "supportsFetch");
function lo(e) {
    return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
}
i(lo, "isNativeFunction");
function m_() {
    if (typeof EdgeRuntime == "string")
        return !0;
    if (!Ud())
        return !1;
    if (lo(uo.fetch))
        return !0;
    let e = !1;
    const t = uo.document;
    if (t && typeof t.createElement == "function")
        try {
            const n = t.createElement("iframe");
            n.hidden = !0,
            t.head.appendChild(n),
            n.contentWindow && n.contentWindow.fetch && (e = lo(n.contentWindow.fetch)),
            t.head.removeChild(n)
        } catch (n) {
            mn && N.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
        }
    return e
}
i(m_, "supportsNativeFetch");
const $d = 1e3;
function kr() {
    return Date.now() / $d
}
i(kr, "dateTimestampInSeconds");
function g_() {
    const {performance: e} = ne;
    if (!e || !e.now)
        return kr;
    const t = Date.now() - e.now()
      , n = e.timeOrigin == null ? t : e.timeOrigin;
    return () => (n + e.now()) / $d
}
i(g_, "createUnixTimestampInSecondsFunc");
const He = g_()
  , je = ( () => {
    const {performance: e} = ne;
    if (!e || !e.now)
        return;
    const t = 3600 * 1e3
      , n = e.now()
      , r = Date.now()
      , s = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t
      , o = s < t
      , a = e.timing && e.timing.navigationStart
      , u = typeof a == "number" ? Math.abs(a + n - r) : t
      , d = u < t;
    return o || d ? s <= u ? e.timeOrigin : a : r
}
)();
function Bd(e, t) {
    const n = "fetch";
    Jt(n, e),
    Xt(n, () => Hd(void 0, t))
}
i(Bd, "addFetchInstrumentationHandler");
function y_(e) {
    const t = "fetch-body-resolved";
    Jt(t, e),
    Xt(t, () => Hd(S_))
}
i(y_, "addFetchEndInstrumentationHandler");
function Hd(e, t=!1) {
    t && !m_() || Ge(ne, "fetch", function(n) {
        return function(...r) {
            const {method: s, url: o} = v_(r)
              , a = {
                args: r,
                fetchData: {
                    method: s,
                    url: o
                },
                startTimestamp: He() * 1e3
            };
            e || st("fetch", {
                ...a
            });
            const c = new Error().stack;
            return n.apply(ne, r).then(async u => (e ? e(u) : st("fetch", {
                ...a,
                endTimestamp: He() * 1e3,
                response: u
            }),
            u), u => {
                throw st("fetch", {
                    ...a,
                    endTimestamp: He() * 1e3,
                    error: u
                }),
                Qo(u) && u.stack === void 0 && (u.stack = c,
                it(u, "framesToPop", 1)),
                u
            }
            )
        }
    })
}
i(Hd, "instrumentFetch");
async function __(e, t) {
    if (e && e.body) {
        const n = e.body
          , r = n.getReader()
          , s = setTimeout( () => {
            n.cancel().then(null, () => {}
            )
        }
        , 90 * 1e3);
        let o = !0;
        for (; o; ) {
            let a;
            try {
                a = setTimeout( () => {
                    n.cancel().then(null, () => {}
                    )
                }
                , 5e3);
                const {done: c} = await r.read();
                clearTimeout(a),
                c && (t(),
                o = !1)
            } catch {
                o = !1
            } finally {
                clearTimeout(a)
            }
        }
        clearTimeout(s),
        r.releaseLock(),
        n.cancel().then(null, () => {}
        )
    }
}
i(__, "resolveResponse");
function S_(e) {
    let t;
    try {
        t = e.clone()
    } catch {
        return
    }
    __(t, () => {
        st("fetch-body-resolved", {
            endTimestamp: He() * 1e3,
            response: e
        })
    }
    )
}
i(S_, "streamHandler");
function fo(e, t) {
    return !!e && typeof e == "object" && !!e[t]
}
i(fo, "hasProp");
function Ru(e) {
    return typeof e == "string" ? e : e ? fo(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
}
i(Ru, "getUrlFromResource");
function v_(e) {
    if (e.length === 0)
        return {
            method: "GET",
            url: ""
        };
    if (e.length === 2) {
        const [n,r] = e;
        return {
            url: Ru(n),
            method: fo(r, "method") ? String(r.method).toUpperCase() : "GET"
        }
    }
    const t = e[0];
    return {
        url: Ru(t),
        method: fo(t, "method") ? String(t.method).toUpperCase() : "GET"
    }
}
i(v_, "parseFetchArgs");
let Jr = null;
function jd(e) {
    const t = "error";
    Jt(t, e),
    Xt(t, E_)
}
i(jd, "addGlobalErrorInstrumentationHandler");
function E_() {
    Jr = ne.onerror,
    ne.onerror = function(e, t, n, r, s) {
        return st("error", {
            column: r,
            error: s,
            line: n,
            msg: e,
            url: t
        }),
        Jr && !Jr.__SENTRY_LOADER__ ? Jr.apply(this, arguments) : !1
    }
    ,
    ne.onerror.__SENTRY_INSTRUMENTED__ = !0
}
i(E_, "instrumentError");
let Xr = null;
function Wd(e) {
    const t = "unhandledrejection";
    Jt(t, e),
    Xt(t, b_)
}
i(Wd, "addGlobalUnhandledRejectionInstrumentationHandler");
function b_() {
    Xr = ne.onunhandledrejection,
    ne.onunhandledrejection = function(e) {
        return st("unhandledrejection", e),
        Xr && !Xr.__SENTRY_LOADER__ ? Xr.apply(this, arguments) : !0
    }
    ,
    ne.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}
i(b_, "instrumentUnhandledRejection");
function w_() {
    return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
}
i(w_, "isBrowserBundle");
function T_() {
    return "npm"
}
i(T_, "getSDKSource");
function I_() {
    return !w_() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
}
i(I_, "isNodeEnv");
function Cu() {
    return typeof window < "u" && (!I_() || k_())
}
i(Cu, "isBrowser");
function k_() {
    return ne.process !== void 0 && ne.process.type === "renderer"
}
i(k_, "isElectronNodeRenderer");
function R_() {
    const e = typeof WeakSet == "function"
      , t = e ? new WeakSet : [];
    function n(s) {
        if (e)
            return t.has(s) ? !0 : (t.add(s),
            !1);
        for (let o = 0; o < t.length; o++)
            if (t[o] === s)
                return !0;
        return t.push(s),
        !1
    }
    i(n, "memoize");
    function r(s) {
        if (e)
            t.delete(s);
        else
            for (let o = 0; o < t.length; o++)
                if (t[o] === s) {
                    t.splice(o, 1);
                    break
                }
    }
    return i(r, "unmemoize"),
    [n, r]
}
i(R_, "memoBuilder");
function Se() {
    const e = ne
      , t = e.crypto || e.msCrypto;
    let n = i( () => Math.random() * 16, "getRandomByte");
    try {
        if (t && t.randomUUID)
            return t.randomUUID().replace(/-/g, "");
        t && t.getRandomValues && (n = i( () => {
            const r = new Uint8Array(1);
            return t.getRandomValues(r),
            r[0]
        }
        , "getRandomByte"))
    } catch {}
    return ("10000000100040008000" + 1e11).replace(/[018]/g, r => (r ^ (n() & 15) >> r / 4).toString(16))
}
i(Se, "uuid4");
function qd(e) {
    return e.exception && e.exception.values ? e.exception.values[0] : void 0
}
i(qd, "getFirstException");
function Bt(e) {
    const {message: t, event_id: n} = e;
    if (t)
        return t;
    const r = qd(e);
    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
}
i(Bt, "getEventDescription");
function po(e, t, n) {
    const r = e.exception = e.exception || {}
      , s = r.values = r.values || []
      , o = s[0] = s[0] || {};
    o.value || (o.value = t || ""),
    o.type || (o.type = n || "Error")
}
i(po, "addExceptionTypeValue");
function mr(e, t) {
    const n = qd(e);
    if (!n)
        return;
    const r = {
        type: "generic",
        handled: !0
    }
      , s = n.mechanism;
    if (n.mechanism = {
        ...r,
        ...s,
        ...t
    },
    t && "data"in t) {
        const o = {
            ...s && s.data,
            ...t.data
        };
        n.mechanism.data = o
    }
}
i(mr, "addExceptionMechanism");
function Au(e) {
    if (e && e.__sentry_captured__)
        return !0;
    try {
        it(e, "__sentry_captured__", !0)
    } catch {}
    return !1
}
i(Au, "checkOrSetAlreadyCaught");
function zd(e) {
    return Array.isArray(e) ? e : [e]
}
i(zd, "arrayify");
function mt(e, t=100, n=1 / 0) {
    try {
        return ho("", e, t, n)
    } catch (r) {
        return {
            ERROR: `**non-serializable** (${r})`
        }
    }
}
i(mt, "normalize");
function Gd(e, t=3, n=100 * 1024) {
    const r = mt(e, t);
    return x_(r) > n ? Gd(e, t - 1, n) : r
}
i(Gd, "normalizeToSize");
function ho(e, t, n=1 / 0, r=1 / 0, s=R_()) {
    const [o,a] = s;
    if (t == null || ["boolean", "string"].includes(typeof t) || typeof t == "number" && Number.isFinite(t))
        return t;
    const c = C_(e, t);
    if (!c.startsWith("[object "))
        return c;
    if (t.__sentry_skip_normalization__)
        return t;
    const u = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : n;
    if (u === 0)
        return c.replace("object ", "");
    if (o(t))
        return "[Circular ~]";
    const d = t;
    if (d && typeof d.toJSON == "function")
        try {
            const _ = d.toJSON();
            return ho("", _, u - 1, r, s)
        } catch {}
    const p = Array.isArray(t) ? [] : {};
    let f = 0;
    const g = Dd(t);
    for (const _ in g) {
        if (!Object.prototype.hasOwnProperty.call(g, _))
            continue;
        if (f >= r) {
            p[_] = "[MaxProperties ~]";
            break
        }
        const y = g[_];
        p[_] = ho(_, y, u - 1, r, s),
        f++
    }
    return a(t),
    p
}
i(ho, "visit");
function C_(e, t) {
    try {
        if (e === "domain" && t && typeof t == "object" && t._events)
            return "[Domain]";
        if (e === "domainEmitter")
            return "[DomainEmitter]";
        if (typeof global < "u" && t === global)
            return "[Global]";
        if (typeof window < "u" && t === window)
            return "[Window]";
        if (typeof document < "u" && t === document)
            return "[Document]";
        if (Ad(t))
            return "[VueViewModel]";
        if (Ky(t))
            return "[SyntheticEvent]";
        if (typeof t == "number" && !Number.isFinite(t))
            return `[${t}]`;
        if (typeof t == "function")
            return `[Function: ${Mt(t)}]`;
        if (typeof t == "symbol")
            return `[${String(t)}]`;
        if (typeof t == "bigint")
            return `[BigInt: ${String(t)}]`;
        const n = A_(t);
        return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`
    } catch (n) {
        return `**non-serializable** (${n})`
    }
}
i(C_, "stringifyValue");
function A_(e) {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : "null prototype"
}
i(A_, "getConstructorName");
function O_(e) {
    return ~-encodeURI(e).split(/%..|./).length
}
i(O_, "utf8Length");
function x_(e) {
    return O_(JSON.stringify(e))
}
i(x_, "jsonSize");
var Tt;
(function(e) {
    e[e.PENDING = 0] = "PENDING";
    const n = 1;
    e[e.RESOLVED = n] = "RESOLVED";
    const r = 2;
    e[e.REJECTED = r] = "REJECTED"
}
)(Tt || (Tt = {}));
function Pt(e) {
    return new nt(t => {
        t(e)
    }
    )
}
i(Pt, "resolvedSyncPromise");
function As(e) {
    return new nt( (t, n) => {
        n(e)
    }
    )
}
i(As, "rejectedSyncPromise");
class nt {
    static{i(this, "SyncPromise")
    }constructor(t) {
        nt.prototype.__init.call(this),
        nt.prototype.__init2.call(this),
        nt.prototype.__init3.call(this),
        nt.prototype.__init4.call(this),
        this._state = Tt.PENDING,
        this._handlers = [];
        try {
            t(this._resolve, this._reject)
        } catch (n) {
            this._reject(n)
        }
    }
    then(t, n) {
        return new nt( (r, s) => {
            this._handlers.push([!1, o => {
                if (!t)
                    r(o);
                else
                    try {
                        r(t(o))
                    } catch (a) {
                        s(a)
                    }
            }
            , o => {
                if (!n)
                    s(o);
                else
                    try {
                        r(n(o))
                    } catch (a) {
                        s(a)
                    }
            }
            ]),
            this._executeHandlers()
        }
        )
    }
    catch(t) {
        return this.then(n => n, t)
    }
    finally(t) {
        return new nt( (n, r) => {
            let s, o;
            return this.then(a => {
                o = !1,
                s = a,
                t && t()
            }
            , a => {
                o = !0,
                s = a,
                t && t()
            }
            ).then( () => {
                if (o) {
                    r(s);
                    return
                }
                n(s)
            }
            )
        }
        )
    }
    __init() {
        this._resolve = t => {
            this._setResult(Tt.RESOLVED, t)
        }
    }
    __init2() {
        this._reject = t => {
            this._setResult(Tt.REJECTED, t)
        }
    }
    __init3() {
        this._setResult = (t, n) => {
            if (this._state === Tt.PENDING) {
                if (Zs(n)) {
                    n.then(this._resolve, this._reject);
                    return
                }
                this._state = t,
                this._value = n,
                this._executeHandlers()
            }
        }
    }
    __init4() {
        this._executeHandlers = () => {
            if (this._state === Tt.PENDING)
                return;
            const t = this._handlers.slice();
            this._handlers = [],
            t.forEach(n => {
                n[0] || (this._state === Tt.RESOLVED && n[1](this._value),
                this._state === Tt.REJECTED && n[2](this._value),
                n[0] = !0)
            }
            )
        }
    }
}
function M_(e) {
    const t = [];
    function n() {
        return e === void 0 || t.length < e
    }
    i(n, "isReady");
    function r(a) {
        return t.splice(t.indexOf(a), 1)[0] || Promise.resolve(void 0)
    }
    i(r, "remove");
    function s(a) {
        if (!n())
            return As(new gt("Not adding Promise because buffer limit was reached."));
        const c = a();
        return t.indexOf(c) === -1 && t.push(c),
        c.then( () => r(c)).then(null, () => r(c).then(null, () => {}
        )),
        c
    }
    i(s, "add");
    function o(a) {
        return new nt( (c, u) => {
            let d = t.length;
            if (!d)
                return c(!0);
            const p = setTimeout( () => {
                a && a > 0 && c(!1)
            }
            , a);
            t.forEach(f => {
                Pt(f).then( () => {
                    --d || (clearTimeout(p),
                    c(!0))
                }
                , u)
            }
            )
        }
        )
    }
    return i(o, "drain"),
    {
        $: t,
        add: s,
        drain: o
    }
}
i(M_, "makePromiseBuffer");
function un(e) {
    if (!e)
        return {};
    const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t)
        return {};
    const n = t[6] || ""
      , r = t[8] || "";
    return {
        host: t[4],
        path: t[5],
        protocol: t[2],
        search: n,
        hash: r,
        relative: t[5] + n + r
    }
}
i(un, "parseUrl$1");
const P_ = ["fatal", "error", "warning", "log", "info", "debug"];
function Vd(e) {
    return e === "warn" ? "warning" : P_.includes(e) ? e : "log"
}
i(Vd, "severityLevelFromString");
const Cn = "baggage"
  , na = "sentry-"
  , N_ = /^sentry-/
  , D_ = 8192;
function Kd(e) {
    const t = L_(e);
    if (!t)
        return;
    const n = Object.entries(t).reduce( (r, [s,o]) => {
        if (s.match(N_)) {
            const a = s.slice(na.length);
            r[a] = o
        }
        return r
    }
    , {});
    if (Object.keys(n).length > 0)
        return n
}
i(Kd, "baggageHeaderToDynamicSamplingContext");
function Yd(e) {
    if (!e)
        return;
    const t = Object.entries(e).reduce( (n, [r,s]) => (s && (n[`${na}${r}`] = s),
    n), {});
    return F_(t)
}
i(Yd, "dynamicSamplingContextToSentryBaggageHeader");
function L_(e) {
    if (!(!e || !Ct(e) && !Array.isArray(e)))
        return Array.isArray(e) ? e.reduce( (t, n) => {
            const r = Ou(n);
            return Object.entries(r).forEach( ([s,o]) => {
                t[s] = o
            }
            ),
            t
        }
        , {}) : Ou(e)
}
i(L_, "parseBaggageHeader");
function Ou(e) {
    return e.split(",").map(t => t.split("=").map(n => decodeURIComponent(n.trim()))).reduce( (t, [n,r]) => (n && r && (t[n] = r),
    t), {})
}
i(Ou, "baggageHeaderToObject");
function F_(e) {
    if (Object.keys(e).length !== 0)
        return Object.entries(e).reduce( (t, [n,r], s) => {
            const o = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`
              , a = s === 0 ? o : `${t},${o}`;
            return a.length > D_ ? (mn && N.warn(`Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`),
            t) : a
        }
        , "")
}
i(F_, "objectToBaggageHeader");
const U_ = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
function $_(e) {
    if (!e)
        return;
    const t = e.match(U_);
    if (!t)
        return;
    let n;
    return t[3] === "1" ? n = !0 : t[3] === "0" && (n = !1),
    {
        traceId: t[1],
        parentSampled: n,
        parentSpanId: t[2]
    }
}
i($_, "extractTraceparentData");
function B_(e, t) {
    const n = $_(e)
      , r = Kd(t)
      , {traceId: s, parentSpanId: o, parentSampled: a} = n || {};
    return n ? {
        traceId: s || Se(),
        parentSpanId: o || Se().substring(16),
        spanId: Se().substring(16),
        sampled: a,
        dsc: r || {}
    } : {
        traceId: s || Se(),
        spanId: Se().substring(16)
    }
}
i(B_, "propagationContextFromHeaders");
function ra(e=Se(), t=Se().substring(16), n) {
    let r = "";
    return n !== void 0 && (r = n ? "-1" : "-0"),
    `${e}-${t}${r}`
}
i(ra, "generateSentryTraceHeader");
function gn(e, t=[]) {
    return [e, t]
}
i(gn, "createEnvelope");
function H_(e, t) {
    const [n,r] = e;
    return [n, [...r, t]]
}
i(H_, "addItemToEnvelope");
function xu(e, t) {
    const n = e[1];
    for (const r of n) {
        const s = r[0].type;
        if (t(r, s))
            return !0
    }
    return !1
}
i(xu, "forEachEnvelopeItem");
function mo(e) {
    return ne.__SENTRY__ && ne.__SENTRY__.encodePolyfill ? ne.__SENTRY__.encodePolyfill(e) : new TextEncoder().encode(e)
}
i(mo, "encodeUTF8");
function j_(e) {
    const [t,n] = e;
    let r = JSON.stringify(t);
    function s(o) {
        typeof r == "string" ? r = typeof o == "string" ? r + o : [mo(r), o] : r.push(typeof o == "string" ? mo(o) : o)
    }
    i(s, "append");
    for (const o of n) {
        const [a,c] = o;
        if (s(`
${JSON.stringify(a)}
`),
        typeof c == "string" || c instanceof Uint8Array)
            s(c);
        else {
            let u;
            try {
                u = JSON.stringify(c)
            } catch {
                u = JSON.stringify(mt(c))
            }
            s(u)
        }
    }
    return typeof r == "string" ? r : W_(r)
}
i(j_, "serializeEnvelope");
function W_(e) {
    const t = e.reduce( (s, o) => s + o.length, 0)
      , n = new Uint8Array(t);
    let r = 0;
    for (const s of e)
        n.set(s, r),
        r += s.length;
    return n
}
i(W_, "concatBuffers");
function q_(e) {
    return [{
        type: "span"
    }, e]
}
i(q_, "createSpanEnvelopeItem");
function z_(e) {
    const t = typeof e.data == "string" ? mo(e.data) : e.data;
    return [Ae({
        type: "attachment",
        length: t.length,
        filename: e.filename,
        content_type: e.contentType,
        attachment_type: e.attachmentType
    }), t]
}
i(z_, "createAttachmentEnvelopeItem");
const G_ = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    statsd: "metric_bucket"
};
function Mu(e) {
    return G_[e]
}
i(Mu, "envelopeItemTypeToDataCategory");
function sa(e) {
    if (!e || !e.sdk)
        return;
    const {name: t, version: n} = e.sdk;
    return {
        name: t,
        version: n
    }
}
i(sa, "getSdkMetadataForEnvelopeHeader");
function Jd(e, t, n, r) {
    const s = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
    return {
        event_id: e.event_id,
        sent_at: new Date().toISOString(),
        ...t && {
            sdk: t
        },
        ...!!n && r && {
            dsn: Ir(r)
        },
        ...s && {
            trace: Ae({
                ...s
            })
        }
    }
}
i(Jd, "createEventEnvelopeHeaders");
function V_(e, t, n) {
    const r = [{
        type: "client_report"
    }, {
        timestamp: n || kr(),
        discarded_events: e
    }];
    return gn(t ? {
        dsn: t
    } : {}, [r])
}
i(V_, "createClientReportEnvelope");
const K_ = 60 * 1e3;
function Y_(e, t=Date.now()) {
    const n = parseInt(`${e}`, 10);
    if (!isNaN(n))
        return n * 1e3;
    const r = Date.parse(`${e}`);
    return isNaN(r) ? K_ : r - t
}
i(Y_, "parseRetryAfterHeader");
function J_(e, t) {
    return e[t] || e.all || 0
}
i(J_, "disabledUntil");
function Xd(e, t, n=Date.now()) {
    return J_(e, t) > n
}
i(Xd, "isRateLimited");
function Qd(e, {statusCode: t, headers: n}, r=Date.now()) {
    const s = {
        ...e
    }
      , o = n && n["x-sentry-rate-limits"]
      , a = n && n["retry-after"];
    if (o)
        for (const c of o.trim().split(",")) {
            const [u,d,,,p] = c.split(":", 5)
              , f = parseInt(u, 10)
              , g = (isNaN(f) ? 60 : f) * 1e3;
            if (!d)
                s.all = r + g;
            else
                for (const _ of d.split(";"))
                    _ === "metric_bucket" ? (!p || p.split(";").includes("custom")) && (s[_] = r + g) : s[_] = r + g
        }
    else
        a ? s.all = r + Y_(a, r) : t === 429 && (s.all = r + 60 * 1e3);
    return s
}
i(Qd, "updateRateLimits");
function X_(e, t) {
    return e ?? t()
}
i(X_, "_nullishCoalesce");
function Qe(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const s = e[r]
          , o = e[r + 1];
        if (r += 2,
        (s === "optionalAccess" || s === "optionalCall") && n == null)
            return;
        s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...a) => n.call(t, ...a)),
        t = void 0)
    }
    return n
}
i(Qe, "_optionalChain");
function Os() {
    return {
        traceId: Se(),
        spanId: Se().substring(16)
    }
}
i(Os, "generatePropagationContext");
const Qr = ne;
function Q_() {
    const e = Qr.chrome
      , t = e && e.app && e.app.runtime
      , n = "history"in Qr && !!Qr.history.pushState && !!Qr.history.replaceState;
    return !t && n
}
i(Q_, "supportsHistory");
const Y = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function Yn() {
    return ia(ne),
    ne
}
i(Yn, "getMainCarrier");
function ia(e) {
    const t = e.__SENTRY__ = e.__SENTRY__ || {};
    return t.version = t.version || cn,
    t[cn] = t[cn] || {}
}
i(ia, "getSentryCarrier");
function Z_(e) {
    const t = He()
      , n = {
        sid: Se(),
        init: !0,
        timestamp: t,
        started: t,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: () => tS(n)
    };
    return e && Un(n, e),
    n
}
i(Z_, "makeSession$1");
function Un(e, t={}) {
    if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
    !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)),
    e.timestamp = t.timestamp || He(),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = t.sid.length === 32 ? t.sid : Se()),
    t.init !== void 0 && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    typeof t.started == "number" && (e.started = t.started),
    e.ignoreDuration)
        e.duration = void 0;
    else if (typeof t.duration == "number")
        e.duration = t.duration;
    else {
        const n = e.timestamp - e.started;
        e.duration = n >= 0 ? n : 0
    }
    t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    typeof t.errors == "number" && (e.errors = t.errors),
    t.status && (e.status = t.status)
}
i(Un, "updateSession");
function eS(e, t) {
    let n = {};
    t ? n = {
        status: t
    } : e.status === "ok" && (n = {
        status: "exited"
    }),
    Un(e, n)
}
i(eS, "closeSession");
function tS(e) {
    return Ae({
        sid: `${e.sid}`,
        init: e.init,
        started: new Date(e.started * 1e3).toISOString(),
        timestamp: new Date(e.timestamp * 1e3).toISOString(),
        status: e.status,
        errors: e.errors,
        did: typeof e.did == "number" || typeof e.did == "string" ? `${e.did}` : void 0,
        duration: e.duration,
        abnormal_mechanism: e.abnormal_mechanism,
        attrs: {
            release: e.release,
            environment: e.environment,
            ip_address: e.ipAddress,
            user_agent: e.userAgent
        }
    })
}
i(tS, "sessionToJSON");
const go = "_sentrySpan";
function gr(e, t) {
    t ? it(e, go, t) : delete e[go]
}
i(gr, "_setSpanForScope");
function xs(e) {
    return e[go]
}
i(xs, "_getSpanForScope");
const nS = 100;
class oa {
    static{i(this, "ScopeClass")
    }constructor() {
        this._notifyingListeners = !1,
        this._scopeListeners = [],
        this._eventProcessors = [],
        this._breadcrumbs = [],
        this._attachments = [],
        this._user = {},
        this._tags = {},
        this._extra = {},
        this._contexts = {},
        this._sdkProcessingMetadata = {},
        this._propagationContext = Os()
    }
    clone() {
        const t = new oa;
        return t._breadcrumbs = [...this._breadcrumbs],
        t._tags = {
            ...this._tags
        },
        t._extra = {
            ...this._extra
        },
        t._contexts = {
            ...this._contexts
        },
        t._user = this._user,
        t._level = this._level,
        t._session = this._session,
        t._transactionName = this._transactionName,
        t._fingerprint = this._fingerprint,
        t._eventProcessors = [...this._eventProcessors],
        t._requestSession = this._requestSession,
        t._attachments = [...this._attachments],
        t._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata
        },
        t._propagationContext = {
            ...this._propagationContext
        },
        t._client = this._client,
        t._lastEventId = this._lastEventId,
        gr(t, xs(this)),
        t
    }
    setClient(t) {
        this._client = t
    }
    setLastEventId(t) {
        this._lastEventId = t
    }
    getClient() {
        return this._client
    }
    lastEventId() {
        return this._lastEventId
    }
    addScopeListener(t) {
        this._scopeListeners.push(t)
    }
    addEventProcessor(t) {
        return this._eventProcessors.push(t),
        this
    }
    setUser(t) {
        return this._user = t || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            username: void 0
        },
        this._session && Un(this._session, {
            user: t
        }),
        this._notifyScopeListeners(),
        this
    }
    getUser() {
        return this._user
    }
    getRequestSession() {
        return this._requestSession
    }
    setRequestSession(t) {
        return this._requestSession = t,
        this
    }
    setTags(t) {
        return this._tags = {
            ...this._tags,
            ...t
        },
        this._notifyScopeListeners(),
        this
    }
    setTag(t, n) {
        return this._tags = {
            ...this._tags,
            [t]: n
        },
        this._notifyScopeListeners(),
        this
    }
    setExtras(t) {
        return this._extra = {
            ...this._extra,
            ...t
        },
        this._notifyScopeListeners(),
        this
    }
    setExtra(t, n) {
        return this._extra = {
            ...this._extra,
            [t]: n
        },
        this._notifyScopeListeners(),
        this
    }
    setFingerprint(t) {
        return this._fingerprint = t,
        this._notifyScopeListeners(),
        this
    }
    setLevel(t) {
        return this._level = t,
        this._notifyScopeListeners(),
        this
    }
    setTransactionName(t) {
        return this._transactionName = t,
        this._notifyScopeListeners(),
        this
    }
    setContext(t, n) {
        return n === null ? delete this._contexts[t] : this._contexts[t] = n,
        this._notifyScopeListeners(),
        this
    }
    setSession(t) {
        return t ? this._session = t : delete this._session,
        this._notifyScopeListeners(),
        this
    }
    getSession() {
        return this._session
    }
    update(t) {
        if (!t)
            return this;
        const n = typeof t == "function" ? t(this) : t
          , [r,s] = n instanceof Kt ? [n.getScopeData(), n.getRequestSession()] : Fn(n) ? [t, t.requestSession] : []
          , {tags: o, extra: a, user: c, contexts: u, level: d, fingerprint: p=[], propagationContext: f} = r || {};
        return this._tags = {
            ...this._tags,
            ...o
        },
        this._extra = {
            ...this._extra,
            ...a
        },
        this._contexts = {
            ...this._contexts,
            ...u
        },
        c && Object.keys(c).length && (this._user = c),
        d && (this._level = d),
        p.length && (this._fingerprint = p),
        f && (this._propagationContext = f),
        s && (this._requestSession = s),
        this
    }
    clear() {
        return this._breadcrumbs = [],
        this._tags = {},
        this._extra = {},
        this._user = {},
        this._contexts = {},
        this._level = void 0,
        this._transactionName = void 0,
        this._fingerprint = void 0,
        this._requestSession = void 0,
        this._session = void 0,
        gr(this, void 0),
        this._attachments = [],
        this._propagationContext = Os(),
        this._notifyScopeListeners(),
        this
    }
    addBreadcrumb(t, n) {
        const r = typeof n == "number" ? n : nS;
        if (r <= 0)
            return this;
        const s = {
            timestamp: kr(),
            ...t
        }
          , o = this._breadcrumbs;
        return o.push(s),
        this._breadcrumbs = o.length > r ? o.slice(-r) : o,
        this._notifyScopeListeners(),
        this
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1]
    }
    clearBreadcrumbs() {
        return this._breadcrumbs = [],
        this._notifyScopeListeners(),
        this
    }
    addAttachment(t) {
        return this._attachments.push(t),
        this
    }
    clearAttachments() {
        return this._attachments = [],
        this
    }
    getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: xs(this)
        }
    }
    setSDKProcessingMetadata(t) {
        return this._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata,
            ...t
        },
        this
    }
    setPropagationContext(t) {
        return this._propagationContext = t,
        this
    }
    getPropagationContext() {
        return this._propagationContext
    }
    captureException(t, n) {
        const r = n && n.event_id ? n.event_id : Se();
        if (!this._client)
            return N.warn("No client configured on scope - will not capture exception!"),
            r;
        const s = new Error("Sentry syntheticException");
        return this._client.captureException(t, {
            originalException: t,
            syntheticException: s,
            ...n,
            event_id: r
        }, this),
        r
    }
    captureMessage(t, n, r) {
        const s = r && r.event_id ? r.event_id : Se();
        if (!this._client)
            return N.warn("No client configured on scope - will not capture message!"),
            s;
        const o = new Error(t);
        return this._client.captureMessage(t, n, {
            originalException: t,
            syntheticException: o,
            ...r,
            event_id: s
        }, this),
        s
    }
    captureEvent(t, n) {
        const r = n && n.event_id ? n.event_id : Se();
        return this._client ? (this._client.captureEvent(t, {
            ...n,
            event_id: r
        }, this),
        r) : (N.warn("No client configured on scope - will not capture event!"),
        r)
    }
    _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0,
        this._scopeListeners.forEach(t => {
            t(this)
        }
        ),
        this._notifyingListeners = !1)
    }
}
const Kt = oa;
function rS() {
    return ei("defaultCurrentScope", () => new Kt)
}
i(rS, "getDefaultCurrentScope");
function sS() {
    return ei("defaultIsolationScope", () => new Kt)
}
i(sS, "getDefaultIsolationScope");
class iS {
    static{i(this, "AsyncContextStack")
    }constructor(t, n) {
        let r;
        t ? r = t : r = new Kt;
        let s;
        n ? s = n : s = new Kt,
        this._stack = [{
            scope: r
        }],
        this._isolationScope = s
    }
    withScope(t) {
        const n = this._pushScope();
        let r;
        try {
            r = t(n)
        } catch (s) {
            throw this._popScope(),
            s
        }
        return Zs(r) ? r.then(s => (this._popScope(),
        s), s => {
            throw this._popScope(),
            s
        }
        ) : (this._popScope(),
        r)
    }
    getClient() {
        return this.getStackTop().client
    }
    getScope() {
        return this.getStackTop().scope
    }
    getIsolationScope() {
        return this._isolationScope
    }
    getStackTop() {
        return this._stack[this._stack.length - 1]
    }
    _pushScope() {
        const t = this.getScope().clone();
        return this._stack.push({
            client: this.getClient(),
            scope: t
        }),
        t
    }
    _popScope() {
        return this._stack.length <= 1 ? !1 : !!this._stack.pop()
    }
}
function $n() {
    const e = Yn()
      , t = ia(e);
    return t.stack = t.stack || new iS(rS(),sS())
}
i($n, "getAsyncContextStack");
function oS(e) {
    return $n().withScope(e)
}
i(oS, "withScope$1");
function aS(e, t) {
    const n = $n();
    return n.withScope( () => (n.getStackTop().scope = e,
    t(e)))
}
i(aS, "withSetScope");
function Pu(e) {
    return $n().withScope( () => e($n().getIsolationScope()))
}
i(Pu, "withIsolationScope");
function cS() {
    return {
        withIsolationScope: Pu,
        withScope: oS,
        withSetScope: aS,
        withSetIsolationScope: (e, t) => Pu(t),
        getCurrentScope: () => $n().getScope(),
        getIsolationScope: () => $n().getIsolationScope()
    }
}
i(cS, "getStackAsyncContextStrategy");
function Rr(e) {
    const t = ia(e);
    return t.acs ? t.acs : cS()
}
i(Rr, "getAsyncContextStrategy");
function pe() {
    const e = Yn();
    return Rr(e).getCurrentScope()
}
i(pe, "getCurrentScope");
function et() {
    const e = Yn();
    return Rr(e).getIsolationScope()
}
i(et, "getIsolationScope");
function uS() {
    return ei("globalScope", () => new Kt)
}
i(uS, "getGlobalScope");
function aa(...e) {
    const t = Yn()
      , n = Rr(t);
    if (e.length === 2) {
        const [r,s] = e;
        return r ? n.withSetScope(r, s) : n.withScope(s)
    }
    return n.withScope(e[0])
}
i(aa, "withScope");
function Z() {
    return pe().getClient()
}
i(Z, "getClient");
const lS = "_sentryMetrics";
function yo(e) {
    const t = e[lS];
    if (!t)
        return;
    const n = {};
    for (const [,[r,s]] of t)
        (n[r] || (n[r] = [])).push(Ae(s));
    return n
}
i(yo, "getMetricSummaryJsonForSpan");
const kt = "sentry.source"
  , Zd = "sentry.sample_rate"
  , pn = "sentry.op"
  , xe = "sentry.origin"
  , _o = "sentry.idle_span_finish_reason"
  , ti = "sentry.measurement_unit"
  , ni = "sentry.measurement_value"
  , dS = "sentry.profile_id"
  , ca = "sentry.exclusive_time"
  , fS = 0
  , ef = 1
  , Oe = 2;
function pS(e) {
    if (e < 400 && e >= 100)
        return {
            code: ef
        };
    if (e >= 400 && e < 500)
        switch (e) {
        case 401:
            return {
                code: Oe,
                message: "unauthenticated"
            };
        case 403:
            return {
                code: Oe,
                message: "permission_denied"
            };
        case 404:
            return {
                code: Oe,
                message: "not_found"
            };
        case 409:
            return {
                code: Oe,
                message: "already_exists"
            };
        case 413:
            return {
                code: Oe,
                message: "failed_precondition"
            };
        case 429:
            return {
                code: Oe,
                message: "resource_exhausted"
            };
        case 499:
            return {
                code: Oe,
                message: "cancelled"
            };
        default:
            return {
                code: Oe,
                message: "invalid_argument"
            }
        }
    if (e >= 500 && e < 600)
        switch (e) {
        case 501:
            return {
                code: Oe,
                message: "unimplemented"
            };
        case 503:
            return {
                code: Oe,
                message: "unavailable"
            };
        case 504:
            return {
                code: Oe,
                message: "deadline_exceeded"
            };
        default:
            return {
                code: Oe,
                message: "internal_error"
            }
        }
    return {
        code: Oe,
        message: "unknown_error"
    }
}
i(pS, "getSpanStatusFromHttpCode");
function tf(e, t) {
    e.setAttribute("http.response.status_code", t);
    const n = pS(t);
    n.message !== "unknown_error" && e.setStatus(n)
}
i(tf, "setHttpStatus");
const nf = 0
  , rf = 1;
function hS(e) {
    const {spanId: t, traceId: n} = e.spanContext()
      , {data: r, op: s, parent_span_id: o, status: a, origin: c} = oe(e);
    return Ae({
        parent_span_id: o,
        span_id: t,
        trace_id: n,
        data: r,
        op: s,
        status: a,
        origin: c
    })
}
i(hS, "spanToTransactionTraceContext");
function mS(e) {
    const {spanId: t, traceId: n} = e.spanContext()
      , {parent_span_id: r} = oe(e);
    return Ae({
        parent_span_id: r,
        span_id: t,
        trace_id: n
    })
}
i(mS, "spanToTraceContext");
function sf(e) {
    const {traceId: t, spanId: n} = e.spanContext()
      , r = yn(e);
    return ra(t, n, r)
}
i(sf, "spanToTraceHeader");
function ln(e) {
    return typeof e == "number" ? Nu(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? Nu(e.getTime()) : He()
}
i(ln, "spanTimeInputToSeconds");
function Nu(e) {
    return e > 9999999999 ? e / 1e3 : e
}
i(Nu, "ensureTimestampInSeconds");
function oe(e) {
    if (yS(e))
        return e.getSpanJSON();
    try {
        const {spanId: t, traceId: n} = e.spanContext();
        if (gS(e)) {
            const {attributes: r, startTime: s, name: o, endTime: a, parentSpanId: c, status: u} = e;
            return Ae({
                span_id: t,
                trace_id: n,
                data: r,
                description: o,
                parent_span_id: c,
                start_timestamp: ln(s),
                timestamp: ln(a) || void 0,
                status: of(u),
                op: r[pn],
                origin: r[xe],
                _metrics_summary: yo(e)
            })
        }
        return {
            span_id: t,
            trace_id: n
        }
    } catch {
        return {}
    }
}
i(oe, "spanToJSON");
function gS(e) {
    const t = e;
    return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
}
i(gS, "spanIsOpenTelemetrySdkTraceBaseSpan");
function yS(e) {
    return typeof e.getSpanJSON == "function"
}
i(yS, "spanIsSentrySpan");
function yn(e) {
    const {traceFlags: t} = e.spanContext();
    return t === rf
}
i(yn, "spanIsSampled");
function of(e) {
    if (!(!e || e.code === fS))
        return e.code === ef ? "ok" : e.message || "unknown_error"
}
i(of, "getStatusMessage");
const dn = "_sentryChildSpans"
  , So = "_sentryRootSpan";
function af(e, t) {
    const n = e[So] || e;
    it(t, So, n),
    e[dn] ? e[dn].add(t) : it(e, dn, new Set([t]))
}
i(af, "addChildSpanToSpan");
function _S(e, t) {
    e[dn] && e[dn].delete(t)
}
i(_S, "removeChildSpanFromSpan");
function hs(e) {
    const t = new Set;
    function n(r) {
        if (!t.has(r) && yn(r)) {
            t.add(r);
            const s = r[dn] ? Array.from(r[dn]) : [];
            for (const o of s)
                n(o)
        }
    }
    return i(n, "addSpanChildren"),
    n(e),
    Array.from(t)
}
i(hs, "getSpanDescendants");
function Pe(e) {
    return e[So] || e
}
i(Pe, "getRootSpan");
function Ne() {
    const e = Yn()
      , t = Rr(e);
    return t.getActiveSpan ? t.getActiveSpan() : xs(pe())
}
i(Ne, "getActiveSpan");
let Du = !1;
function SS() {
    Du || (Du = !0,
    jd(vo),
    Wd(vo))
}
i(SS, "registerSpanErrorInstrumentation");
function vo() {
    const e = Ne()
      , t = e && Pe(e);
    if (t) {
        const n = "internal_error";
        Y && N.log(`[Tracing] Root span: ${n} -> Global error occurred`),
        t.setStatus({
            code: Oe,
            message: n
        })
    }
}
i(vo, "errorCallback");
vo.tag = "sentry_tracingErrorCallback";
const cf = "_sentryScope"
  , uf = "_sentryIsolationScope";
function vS(e, t, n) {
    e && (it(e, uf, n),
    it(e, cf, t))
}
i(vS, "setCapturedScopesOnSpan");
function Lu(e) {
    return {
        scope: e[cf],
        isolationScope: e[uf]
    }
}
i(Lu, "getCapturedScopesOnSpan");
function Nt(e) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__)
        return !1;
    const t = Z()
      , n = e || t && t.getOptions();
    return !!n && (n.enableTracing || "tracesSampleRate"in n || "tracesSampler"in n)
}
i(Nt, "hasTracingEnabled");
class Jn {
    static{i(this, "SentryNonRecordingSpan")
    }constructor(t={}) {
        this._traceId = t.traceId || Se(),
        this._spanId = t.spanId || Se().substring(16)
    }
    spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: nf
        }
    }
    end(t) {}
    setAttribute(t, n) {
        return this
    }
    setAttributes(t) {
        return this
    }
    setStatus(t) {
        return this
    }
    updateName(t) {
        return this
    }
    isRecording() {
        return !1
    }
    addEvent(t, n, r) {
        return this
    }
    addLink(t) {
        return this
    }
    addLinks(t) {
        return this
    }
    recordException(t, n) {}
}
const ua = "production"
  , lf = "_frozenDsc";
function Fu(e, t) {
    it(e, lf, t)
}
i(Fu, "freezeDscOnSpan");
function ri(e, t) {
    const n = t.getOptions()
      , {publicKey: r} = t.getDsn() || {}
      , s = Ae({
        environment: n.environment || ua,
        release: n.release,
        public_key: r,
        trace_id: e
    });
    return t.emit("createDsc", s),
    s
}
i(ri, "getDynamicSamplingContextFromClient");
function Qt(e) {
    const t = Z();
    if (!t)
        return {};
    const n = ri(oe(e).trace_id || "", t)
      , r = Pe(e)
      , s = r[lf];
    if (s)
        return s;
    const o = r.spanContext().traceState
      , a = o && o.get("sentry.dsc")
      , c = a && Kd(a);
    if (c)
        return c;
    const u = oe(r)
      , d = u.data || {}
      , p = d[Zd];
    p != null && (n.sample_rate = `${p}`);
    const f = d[kt]
      , g = u.description;
    return f !== "url" && g && (n.transaction = g),
    Nt() && (n.sampled = String(yn(r))),
    t.emit("createDsc", n, r),
    n
}
i(Qt, "getDynamicSamplingContextFromSpan");
function ES(e) {
    if (!Y)
        return;
    const {description: t="< unknown name >", op: n="< unknown op >", parent_span_id: r} = oe(e)
      , {spanId: s} = e.spanContext()
      , o = yn(e)
      , a = Pe(e)
      , c = a === e
      , u = `[Tracing] Starting ${o ? "sampled" : "unsampled"} ${c ? "root " : ""}span`
      , d = [`op: ${n}`, `name: ${t}`, `ID: ${s}`];
    if (r && d.push(`parent ID: ${r}`),
    !c) {
        const {op: p, description: f} = oe(a);
        d.push(`root ID: ${a.spanContext().spanId}`),
        p && d.push(`root op: ${p}`),
        f && d.push(`root description: ${f}`)
    }
    N.log(`${u}
  ${d.join(`
  `)}`)
}
i(ES, "logSpanStart");
function bS(e) {
    if (!Y)
        return;
    const {description: t="< unknown name >", op: n="< unknown op >"} = oe(e)
      , {spanId: r} = e.spanContext()
      , o = Pe(e) === e
      , a = `[Tracing] Finishing "${n}" ${o ? "root " : ""}span "${t}" with ID ${r}`;
    N.log(a)
}
i(bS, "logSpanEnd");
function Ms(e) {
    if (typeof e == "boolean")
        return Number(e);
    const t = typeof e == "string" ? parseFloat(e) : e;
    if (typeof t != "number" || isNaN(t) || t < 0 || t > 1) {
        Y && N.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`);
        return
    }
    return t
}
i(Ms, "parseSampleRate");
function wS(e, t) {
    if (!Nt(e))
        return [!1];
    let n;
    typeof e.tracesSampler == "function" ? n = e.tracesSampler(t) : t.parentSampled !== void 0 ? n = t.parentSampled : typeof e.tracesSampleRate < "u" ? n = e.tracesSampleRate : n = 1;
    const r = Ms(n);
    return r === void 0 ? (Y && N.warn("[Tracing] Discarding transaction because of invalid sample rate."),
    [!1]) : r ? Math.random() < r ? [!0, r] : (Y && N.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(n)})`),
    [!1, r]) : (Y && N.log(`[Tracing] Discarding transaction because ${typeof e.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`),
    [!1, r])
}
i(wS, "sampleSpan");
function TS(e, t) {
    return t && (e.sdk = e.sdk || {},
    e.sdk.name = e.sdk.name || t.name,
    e.sdk.version = e.sdk.version || t.version,
    e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []],
    e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []]),
    e
}
i(TS, "enhanceEventWithSdkInfo");
function IS(e, t, n, r) {
    const s = sa(n)
      , o = {
        sent_at: new Date().toISOString(),
        ...s && {
            sdk: s
        },
        ...!!r && t && {
            dsn: Ir(t)
        }
    }
      , a = "aggregates"in e ? [{
        type: "sessions"
    }, e] : [{
        type: "session"
    }, e.toJSON()];
    return gn(o, [a])
}
i(IS, "createSessionEnvelope");
function kS(e, t, n, r) {
    const s = sa(n)
      , o = e.type && e.type !== "replay_event" ? e.type : "event";
    TS(e, n && n.sdk);
    const a = Jd(e, s, r, t);
    return delete e.sdkProcessingMetadata,
    gn(a, [[{
        type: o
    }, e]])
}
i(kS, "createEventEnvelope");
function RS(e, t) {
    function n(p) {
        return !!p.trace_id && !!p.public_key
    }
    i(n, "dscHasRequiredProps");
    const r = Qt(e[0])
      , s = t && t.getDsn()
      , o = t && t.getOptions().tunnel
      , a = {
        sent_at: new Date().toISOString(),
        ...n(r) && {
            trace: r
        },
        ...!!o && s && {
            dsn: Ir(s)
        }
    }
      , c = t && t.getOptions().beforeSendSpan
      , u = c ? p => c(oe(p)) : p => oe(p)
      , d = [];
    for (const p of e) {
        const f = u(p);
        f && d.push(q_(f))
    }
    return gn(a, d)
}
i(RS, "createSpanEnvelope");
function CS(e, t, n, r=Ne()) {
    const s = r && Pe(r);
    s && s.addEvent(e, {
        [ni]: t,
        [ti]: n
    })
}
i(CS, "setMeasurement");
function Uu(e) {
    if (!e || e.length === 0)
        return;
    const t = {};
    return e.forEach(n => {
        const r = n.attributes || {}
          , s = r[ti]
          , o = r[ni];
        typeof s == "string" && typeof o == "number" && (t[n.name] = {
            value: o,
            unit: s
        })
    }
    ),
    t
}
i(Uu, "timedEventsToMeasurements");
const $u = 1e3;
class la {
    static{i(this, "SentrySpan")
    }constructor(t={}) {
        this._traceId = t.traceId || Se(),
        this._spanId = t.spanId || Se().substring(16),
        this._startTime = t.startTimestamp || He(),
        this._attributes = {},
        this.setAttributes({
            [xe]: "manual",
            [pn]: t.op,
            ...t.attributes
        }),
        this._name = t.name,
        t.parentSpanId && (this._parentSpanId = t.parentSpanId),
        "sampled"in t && (this._sampled = t.sampled),
        t.endTimestamp && (this._endTime = t.endTimestamp),
        this._events = [],
        this._isStandaloneSpan = t.isStandalone,
        this._endTime && this._onSpanEnded()
    }
    addLink(t) {
        return this
    }
    addLinks(t) {
        return this
    }
    recordException(t, n) {}
    spanContext() {
        const {_spanId: t, _traceId: n, _sampled: r} = this;
        return {
            spanId: t,
            traceId: n,
            traceFlags: r ? rf : nf
        }
    }
    setAttribute(t, n) {
        return n === void 0 ? delete this._attributes[t] : this._attributes[t] = n,
        this
    }
    setAttributes(t) {
        return Object.keys(t).forEach(n => this.setAttribute(n, t[n])),
        this
    }
    updateStartTime(t) {
        this._startTime = ln(t)
    }
    setStatus(t) {
        return this._status = t,
        this
    }
    updateName(t) {
        return this._name = t,
        this
    }
    end(t) {
        this._endTime || (this._endTime = ln(t),
        bS(this),
        this._onSpanEnded())
    }
    getSpanJSON() {
        return Ae({
            data: this._attributes,
            description: this._name,
            op: this._attributes[pn],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: of(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[xe],
            _metrics_summary: yo(this),
            profile_id: this._attributes[dS],
            exclusive_time: this._attributes[ca],
            measurements: Uu(this._events),
            is_segment: this._isStandaloneSpan && Pe(this) === this || void 0,
            segment_id: this._isStandaloneSpan ? Pe(this).spanContext().spanId : void 0
        })
    }
    isRecording() {
        return !this._endTime && !!this._sampled
    }
    addEvent(t, n, r) {
        Y && N.log("[Tracing] Adding an event to span:", t);
        const s = Bu(n) ? n : r || He()
          , o = Bu(n) ? {} : n || {}
          , a = {
            name: t,
            time: ln(s),
            attributes: o
        };
        return this._events.push(a),
        this
    }
    isStandaloneSpan() {
        return !!this._isStandaloneSpan
    }
    _onSpanEnded() {
        const t = Z();
        if (t && t.emit("spanEnd", this),
        !(this._isStandaloneSpan || this === Pe(this)))
            return;
        if (this._isStandaloneSpan) {
            this._sampled ? OS(RS([this], t)) : (Y && N.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."),
            t && t.recordDroppedEvent("sample_rate", "span"));
            return
        }
        const r = this._convertSpanToTransaction();
        r && (Lu(this).scope || pe()).captureEvent(r)
    }
    _convertSpanToTransaction() {
        if (!Hu(oe(this)))
            return;
        this._name || (Y && N.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
        this._name = "<unlabeled transaction>");
        const {scope: t, isolationScope: n} = Lu(this)
          , s = (t || pe()).getClient() || Z();
        if (this._sampled !== !0) {
            Y && N.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),
            s && s.recordDroppedEvent("sample_rate", "transaction");
            return
        }
        const a = hs(this).filter(f => f !== this && !AS(f)).map(f => oe(f)).filter(Hu)
          , c = this._attributes[kt]
          , u = {
            contexts: {
                trace: hS(this)
            },
            spans: a.length > $u ? a.sort( (f, g) => f.start_timestamp - g.start_timestamp).slice(0, $u) : a,
            start_timestamp: this._startTime,
            timestamp: this._endTime,
            transaction: this._name,
            type: "transaction",
            sdkProcessingMetadata: {
                capturedSpanScope: t,
                capturedSpanIsolationScope: n,
                ...Ae({
                    dynamicSamplingContext: Qt(this)
                })
            },
            _metrics_summary: yo(this),
            ...c && {
                transaction_info: {
                    source: c
                }
            }
        }
          , d = Uu(this._events);
        return d && Object.keys(d).length && (Y && N.log("[Measurements] Adding measurements to transaction event", JSON.stringify(d, void 0, 2)),
        u.measurements = d),
        u
    }
}
function Bu(e) {
    return e && typeof e == "number" || e instanceof Date || Array.isArray(e)
}
i(Bu, "isSpanTimeInput");
function Hu(e) {
    return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
}
i(Hu, "isFullFinishedSpan");
function AS(e) {
    return e instanceof la && e.isStandaloneSpan()
}
i(AS, "isStandaloneSpan");
function OS(e) {
    const t = Z();
    if (!t)
        return;
    const n = e[1];
    if (!n || n.length === 0) {
        t.recordDroppedEvent("before_send", "span");
        return
    }
    t.sendEnvelope(e)
}
i(OS, "sendSpanEnvelope");
const df = "__SENTRY_SUPPRESS_TRACING__";
function _n(e) {
    const t = pf();
    if (t.startInactiveSpan)
        return t.startInactiveSpan(e);
    const n = MS(e)
      , {forceTransaction: r, parentSpan: s} = e;
    return (e.scope ? a => aa(e.scope, a) : s !== void 0 ? a => ff(s, a) : a => a())( () => {
        const a = pe()
          , c = NS(a);
        return e.onlyIfParent && !c ? new Jn : xS({
            parentSpan: c,
            spanArguments: n,
            forceTransaction: r,
            scope: a
        })
    }
    )
}
i(_n, "startInactiveSpan");
function ff(e, t) {
    const n = pf();
    return n.withActiveSpan ? n.withActiveSpan(e, t) : aa(r => (gr(r, e || void 0),
    t(r)))
}
i(ff, "withActiveSpan");
function xS({parentSpan: e, spanArguments: t, forceTransaction: n, scope: r}) {
    if (!Nt())
        return new Jn;
    const s = et();
    let o;
    if (e && !n)
        o = PS(e, r, t),
        af(e, o);
    else if (e) {
        const a = Qt(e)
          , {traceId: c, spanId: u} = e.spanContext()
          , d = yn(e);
        o = ju({
            traceId: c,
            parentSpanId: u,
            ...t
        }, r, d),
        Fu(o, a)
    } else {
        const {traceId: a, dsc: c, parentSpanId: u, sampled: d} = {
            ...s.getPropagationContext(),
            ...r.getPropagationContext()
        };
        o = ju({
            traceId: a,
            parentSpanId: u,
            ...t
        }, r, d),
        c && Fu(o, c)
    }
    return ES(o),
    vS(o, r, s),
    o
}
i(xS, "createChildOrRootSpan");
function MS(e) {
    const n = {
        isStandalone: (e.experimental || {}).standalone,
        ...e
    };
    if (e.startTime) {
        const r = {
            ...n
        };
        return r.startTimestamp = ln(e.startTime),
        delete r.startTime,
        r
    }
    return n
}
i(MS, "parseSentrySpanArguments");
function pf() {
    const e = Yn();
    return Rr(e)
}
i(pf, "getAcs");
function ju(e, t, n) {
    const r = Z()
      , s = r && r.getOptions() || {}
      , {name: o="", attributes: a} = e
      , [c,u] = t.getScopeData().sdkProcessingMetadata[df] ? [!1] : wS(s, {
        name: o,
        parentSampled: n,
        attributes: a,
        transactionContext: {
            name: o,
            parentSampled: n
        }
    })
      , d = new la({
        ...e,
        attributes: {
            [kt]: "custom",
            ...e.attributes
        },
        sampled: c
    });
    return u !== void 0 && d.setAttribute(Zd, u),
    r && r.emit("spanStart", d),
    d
}
i(ju, "_startRootSpan");
function PS(e, t, n) {
    const {spanId: r, traceId: s} = e.spanContext()
      , o = t.getScopeData().sdkProcessingMetadata[df] ? !1 : yn(e)
      , a = o ? new la({
        ...n,
        parentSpanId: r,
        traceId: s,
        sampled: o
    }) : new Jn({
        traceId: s
    });
    af(e, a);
    const c = Z();
    return c && (c.emit("spanStart", a),
    n.endTimestamp && c.emit("spanEnd", a)),
    a
}
i(PS, "_startChildSpan");
function NS(e) {
    const t = xs(e);
    if (!t)
        return;
    const n = Z();
    return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? Pe(t) : t
}
i(NS, "getParentSpan");
const ms = {
    idleTimeout: 1e3,
    finalTimeout: 3e4,
    childSpanTimeout: 15e3
}
  , DS = "heartbeatFailed"
  , LS = "idleTimeout"
  , FS = "finalTimeout"
  , US = "externalFinish";
function hf(e, t={}) {
    const n = new Map;
    let r = !1, s, o = US, a = !t.disableAutoFinish;
    const c = []
      , {idleTimeout: u=ms.idleTimeout, finalTimeout: d=ms.finalTimeout, childSpanTimeout: p=ms.childSpanTimeout, beforeSpanEnd: f} = t
      , g = Z();
    if (!g || !Nt())
        return new Jn;
    const _ = pe()
      , y = Ne()
      , v = $S(e);
    v.end = new Proxy(v.end,{
        apply(A, R, x) {
            f && f(v);
            const [H,...D] = x
              , U = H || He()
              , W = ln(U)
              , re = hs(v).filter(te => te !== v);
            if (!re.length)
                return B(W),
                Reflect.apply(A, R, [W, ...D]);
            const le = re.map(te => oe(te).timestamp).filter(te => !!te)
              , fe = le.length ? Math.max(...le) : void 0
              , V = oe(v).start_timestamp
              , be = Math.min(V ? V + d / 1e3 : 1 / 0, Math.max(V || -1 / 0, Math.min(W, fe || 1 / 0)));
            return B(be),
            Reflect.apply(A, R, [be, ...D])
        }
    });
    function E() {
        s && (clearTimeout(s),
        s = void 0)
    }
    i(E, "_cancelIdleTimeout");
    function k(A) {
        E(),
        s = setTimeout( () => {
            !r && n.size === 0 && a && (o = LS,
            v.end(A))
        }
        , u)
    }
    i(k, "_restartIdleTimeout");
    function M(A) {
        s = setTimeout( () => {
            !r && a && (o = DS,
            v.end(A))
        }
        , p)
    }
    i(M, "_restartChildSpanTimeout");
    function P(A) {
        E(),
        n.set(A, !0);
        const R = He();
        M(R + p / 1e3)
    }
    i(P, "_pushActivity");
    function L(A) {
        if (n.has(A) && n.delete(A),
        n.size === 0) {
            const R = He();
            k(R + u / 1e3)
        }
    }
    i(L, "_popActivity");
    function B(A) {
        r = !0,
        n.clear(),
        c.forEach(W => W()),
        gr(_, y);
        const R = oe(v)
          , {start_timestamp: x} = R;
        if (!x)
            return;
        (R.data || {})[_o] || v.setAttribute(_o, o),
        N.log(`[Tracing] Idle span "${R.op}" finished`);
        const D = hs(v).filter(W => W !== v);
        let U = 0;
        D.forEach(W => {
            W.isRecording() && (W.setStatus({
                code: Oe,
                message: "cancelled"
            }),
            W.end(A),
            Y && N.log("[Tracing] Cancelling span since span ended early", JSON.stringify(W, void 0, 2)));
            const re = oe(W)
              , {timestamp: le=0, start_timestamp: fe=0} = re
              , V = fe <= A
              , be = (d + u) / 1e3
              , te = le - fe <= be;
            if (Y) {
                const ke = JSON.stringify(W, void 0, 2);
                V ? te || N.log("[Tracing] Discarding span since it finished after idle span final timeout", ke) : N.log("[Tracing] Discarding span since it happened after idle span was finished", ke)
            }
            (!te || !V) && (_S(v, W),
            U++)
        }
        ),
        U > 0 && v.setAttribute("sentry.idle_span_discarded_spans", U)
    }
    return i(B, "onIdleSpanEnded"),
    c.push(g.on("spanStart", A => {
        if (r || A === v || oe(A).timestamp)
            return;
        hs(v).includes(A) && P(A.spanContext().spanId)
    }
    )),
    c.push(g.on("spanEnd", A => {
        r || L(A.spanContext().spanId)
    }
    )),
    c.push(g.on("idleSpanEnableAutoFinish", A => {
        A === v && (a = !0,
        k(),
        n.size && M())
    }
    )),
    t.disableAutoFinish || k(),
    setTimeout( () => {
        r || (v.setStatus({
            code: Oe,
            message: "deadline_exceeded"
        }),
        o = FS,
        v.end())
    }
    , d),
    v
}
i(hf, "startIdleSpan");
function $S(e) {
    const t = _n(e);
    return gr(pe(), t),
    Y && N.log("[Tracing] Started span is an idle span"),
    t
}
i($S, "_startIdleSpan");
function Eo(e, t, n, r=0) {
    return new nt( (s, o) => {
        const a = e[r];
        if (t === null || typeof a != "function")
            s(t);
        else {
            const c = a({
                ...t
            }, n);
            Y && a.id && c === null && N.log(`Event processor "${a.id}" dropped event`),
            Zs(c) ? c.then(u => Eo(e, u, n, r + 1).then(s)).then(null, o) : Eo(e, c, n, r + 1).then(s).then(null, o)
        }
    }
    )
}
i(Eo, "notifyEventProcessors");
function BS(e, t) {
    const {fingerprint: n, span: r, breadcrumbs: s, sdkProcessingMetadata: o} = t;
    HS(e, t),
    r && qS(e, r),
    zS(e, n),
    jS(e, s),
    WS(e, o)
}
i(BS, "applyScopeDataToEvent");
function Wu(e, t) {
    const {extra: n, tags: r, user: s, contexts: o, level: a, sdkProcessingMetadata: c, breadcrumbs: u, fingerprint: d, eventProcessors: p, attachments: f, propagationContext: g, transactionName: _, span: y} = t;
    ar(e, "extra", n),
    ar(e, "tags", r),
    ar(e, "user", s),
    ar(e, "contexts", o),
    ar(e, "sdkProcessingMetadata", c),
    a && (e.level = a),
    _ && (e.transactionName = _),
    y && (e.span = y),
    u.length && (e.breadcrumbs = [...e.breadcrumbs, ...u]),
    d.length && (e.fingerprint = [...e.fingerprint, ...d]),
    p.length && (e.eventProcessors = [...e.eventProcessors, ...p]),
    f.length && (e.attachments = [...e.attachments, ...f]),
    e.propagationContext = {
        ...e.propagationContext,
        ...g
    }
}
i(Wu, "mergeScopeData");
function ar(e, t, n) {
    if (n && Object.keys(n).length) {
        e[t] = {
            ...e[t]
        };
        for (const r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[t][r] = n[r])
    }
}
i(ar, "mergeAndOverwriteScopeData");
function HS(e, t) {
    const {extra: n, tags: r, user: s, contexts: o, level: a, transactionName: c} = t
      , u = Ae(n);
    u && Object.keys(u).length && (e.extra = {
        ...u,
        ...e.extra
    });
    const d = Ae(r);
    d && Object.keys(d).length && (e.tags = {
        ...d,
        ...e.tags
    });
    const p = Ae(s);
    p && Object.keys(p).length && (e.user = {
        ...p,
        ...e.user
    });
    const f = Ae(o);
    f && Object.keys(f).length && (e.contexts = {
        ...f,
        ...e.contexts
    }),
    a && (e.level = a),
    c && e.type !== "transaction" && (e.transaction = c)
}
i(HS, "applyDataToEvent");
function jS(e, t) {
    const n = [...e.breadcrumbs || [], ...t];
    e.breadcrumbs = n.length ? n : void 0
}
i(jS, "applyBreadcrumbsToEvent");
function WS(e, t) {
    e.sdkProcessingMetadata = {
        ...e.sdkProcessingMetadata,
        ...t
    }
}
i(WS, "applySdkMetadataToEvent");
function qS(e, t) {
    e.contexts = {
        trace: mS(t),
        ...e.contexts
    },
    e.sdkProcessingMetadata = {
        dynamicSamplingContext: Qt(t),
        ...e.sdkProcessingMetadata
    };
    const n = Pe(t)
      , r = oe(n).description;
    r && !e.transaction && e.type === "transaction" && (e.transaction = r)
}
i(qS, "applySpanToEvent");
function zS(e, t) {
    e.fingerprint = e.fingerprint ? zd(e.fingerprint) : [],
    t && (e.fingerprint = e.fingerprint.concat(t)),
    e.fingerprint && !e.fingerprint.length && delete e.fingerprint
}
i(zS, "applyFingerprintToEvent");
function mf(e, t, n, r, s, o) {
    const {normalizeDepth: a=3, normalizeMaxBreadth: c=1e3} = e
      , u = {
        ...t,
        event_id: t.event_id || n.event_id || Se(),
        timestamp: t.timestamp || kr()
    }
      , d = n.integrations || e.integrations.map(E => E.name);
    GS(u, e),
    YS(u, d),
    s && s.emit("applyFrameMetadata", t),
    t.type === void 0 && VS(u, e.stackParser);
    const p = XS(r, n.captureContext);
    n.mechanism && mr(u, n.mechanism);
    const f = s ? s.getEventProcessors() : []
      , g = uS().getScopeData();
    if (o) {
        const E = o.getScopeData();
        Wu(g, E)
    }
    if (p) {
        const E = p.getScopeData();
        Wu(g, E)
    }
    const _ = [...n.attachments || [], ...g.attachments];
    _.length && (n.attachments = _),
    BS(u, g);
    const y = [...f, ...g.eventProcessors];
    return Eo(y, u, n).then(E => (E && KS(E),
    typeof a == "number" && a > 0 ? JS(E, a, c) : E))
}
i(mf, "prepareEvent");
function GS(e, t) {
    const {environment: n, release: r, dist: s, maxValueLength: o=250} = t;
    "environment"in e || (e.environment = "environment"in t ? n : ua),
    e.release === void 0 && r !== void 0 && (e.release = r),
    e.dist === void 0 && s !== void 0 && (e.dist = s),
    e.message && (e.message = Nn(e.message, o));
    const a = e.exception && e.exception.values && e.exception.values[0];
    a && a.value && (a.value = Nn(a.value, o));
    const c = e.request;
    c && c.url && (c.url = Nn(c.url, o))
}
i(GS, "applyClientOptions");
const qu = new WeakMap;
function VS(e, t) {
    const n = ne._sentryDebugIds;
    if (!n)
        return;
    let r;
    const s = qu.get(t);
    s ? r = s : (r = new Map,
    qu.set(t, r));
    const o = Object.entries(n).reduce( (a, [c,u]) => {
        let d;
        const p = r.get(c);
        p ? d = p : (d = t(c),
        r.set(c, d));
        for (let f = d.length - 1; f >= 0; f--) {
            const g = d[f];
            if (g.filename) {
                a[g.filename] = u;
                break
            }
        }
        return a
    }
    , {});
    try {
        e.exception.values.forEach(a => {
            a.stacktrace.frames.forEach(c => {
                c.filename && (c.debug_id = o[c.filename])
            }
            )
        }
        )
    } catch {}
}
i(VS, "applyDebugIds");
function KS(e) {
    const t = {};
    try {
        e.exception.values.forEach(r => {
            r.stacktrace.frames.forEach(s => {
                s.debug_id && (s.abs_path ? t[s.abs_path] = s.debug_id : s.filename && (t[s.filename] = s.debug_id),
                delete s.debug_id)
            }
            )
        }
        )
    } catch {}
    if (Object.keys(t).length === 0)
        return;
    e.debug_meta = e.debug_meta || {},
    e.debug_meta.images = e.debug_meta.images || [];
    const n = e.debug_meta.images;
    Object.entries(t).forEach( ([r,s]) => {
        n.push({
            type: "sourcemap",
            code_file: r,
            debug_id: s
        })
    }
    )
}
i(KS, "applyDebugMeta");
function YS(e, t) {
    t.length > 0 && (e.sdk = e.sdk || {},
    e.sdk.integrations = [...e.sdk.integrations || [], ...t])
}
i(YS, "applyIntegrationsMetadata");
function JS(e, t, n) {
    if (!e)
        return null;
    const r = {
        ...e,
        ...e.breadcrumbs && {
            breadcrumbs: e.breadcrumbs.map(s => ({
                ...s,
                ...s.data && {
                    data: mt(s.data, t, n)
                }
            }))
        },
        ...e.user && {
            user: mt(e.user, t, n)
        },
        ...e.contexts && {
            contexts: mt(e.contexts, t, n)
        },
        ...e.extra && {
            extra: mt(e.extra, t, n)
        }
    };
    return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace,
    e.contexts.trace.data && (r.contexts.trace.data = mt(e.contexts.trace.data, t, n))),
    e.spans && (r.spans = e.spans.map(s => ({
        ...s,
        ...s.data && {
            data: mt(s.data, t, n)
        }
    }))),
    r
}
i(JS, "normalizeEvent");
function XS(e, t) {
    if (!t)
        return e;
    const n = e ? e.clone() : new Kt;
    return n.update(t),
    n
}
i(XS, "getFinalScope");
function QS(e) {
    if (e)
        return ZS(e) ? {
            captureContext: e
        } : tv(e) ? {
            captureContext: e
        } : e
}
i(QS, "parseEventHintOrCaptureContext");
function ZS(e) {
    return e instanceof Kt || typeof e == "function"
}
i(ZS, "hintIsScopeOrFunction");
const ev = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
function tv(e) {
    return Object.keys(e).some(t => ev.includes(t))
}
i(tv, "hintIsScopeContext");
function gf(e, t) {
    return pe().captureException(e, QS(t))
}
i(gf, "captureException");
function yf(e, t) {
    return pe().captureEvent(e, t)
}
i(yf, "captureEvent");
function da(e, t) {
    et().setContext(e, t)
}
i(da, "setContext");
function nv(e) {
    et().setUser(e)
}
i(nv, "setUser");
function rv(e) {
    et().addEventProcessor(e)
}
i(rv, "addEventProcessor");
function zu(e) {
    const t = Z()
      , n = et()
      , r = pe()
      , {release: s, environment: o=ua} = t && t.getOptions() || {}
      , {userAgent: a} = ne.navigator || {}
      , c = Z_({
        release: s,
        environment: o,
        user: r.getUser() || n.getUser(),
        ...a && {
            userAgent: a
        },
        ...e
    })
      , u = n.getSession();
    return u && u.status === "ok" && Un(u, {
        status: "exited"
    }),
    _f(),
    n.setSession(c),
    r.setSession(c),
    c
}
i(zu, "startSession");
function _f() {
    const e = et()
      , t = pe()
      , n = t.getSession() || e.getSession();
    n && eS(n),
    Sf(),
    e.setSession(),
    t.setSession()
}
i(_f, "endSession");
function Sf() {
    const e = et()
      , t = pe()
      , n = Z()
      , r = t.getSession() || e.getSession();
    r && n && n.captureSession(r)
}
i(Sf, "_sendSessionUpdate");
function Gu(e=!1) {
    if (e) {
        _f();
        return
    }
    Sf()
}
i(Gu, "captureSession");
const sv = "7";
function iv(e) {
    const t = e.protocol ? `${e.protocol}:` : ""
      , n = e.port ? `:${e.port}` : "";
    return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`
}
i(iv, "getBaseApiEndpoint");
function ov(e) {
    return `${iv(e)}${e.projectId}/envelope/`
}
i(ov, "_getIngestEndpoint");
function av(e, t) {
    return c_({
        sentry_key: e.publicKey,
        sentry_version: sv,
        ...t && {
            sentry_client: `${t.name}/${t.version}`
        }
    })
}
i(av, "_encodedAuth");
function cv(e, t, n) {
    return t || `${ov(e)}?${av(e, n)}`
}
i(cv, "getEnvelopeEndpointWithUrlEncodedAuth");
const Vu = [];
function uv(e) {
    const t = {};
    return e.forEach(n => {
        const {name: r} = n
          , s = t[r];
        s && !s.isDefaultInstance && n.isDefaultInstance || (t[r] = n)
    }
    ),
    Object.values(t)
}
i(uv, "filterDuplicates");
function lv(e) {
    const t = e.defaultIntegrations || []
      , n = e.integrations;
    t.forEach(a => {
        a.isDefaultInstance = !0
    }
    );
    let r;
    Array.isArray(n) ? r = [...t, ...n] : typeof n == "function" ? r = zd(n(t)) : r = t;
    const s = uv(r)
      , o = s.findIndex(a => a.name === "Debug");
    if (o > -1) {
        const [a] = s.splice(o, 1);
        s.push(a)
    }
    return s
}
i(lv, "getIntegrationsToSetup");
function dv(e, t) {
    const n = {};
    return t.forEach(r => {
        r && vf(e, r, n)
    }
    ),
    n
}
i(dv, "setupIntegrations");
function Ku(e, t) {
    for (const n of t)
        n && n.afterAllSetup && n.afterAllSetup(e)
}
i(Ku, "afterSetupIntegrations");
function vf(e, t, n) {
    if (n[t.name]) {
        Y && N.log(`Integration skipped because it was already installed: ${t.name}`);
        return
    }
    if (n[t.name] = t,
    Vu.indexOf(t.name) === -1 && typeof t.setupOnce == "function" && (t.setupOnce(),
    Vu.push(t.name)),
    t.setup && typeof t.setup == "function" && t.setup(e),
    typeof t.preprocessEvent == "function") {
        const r = t.preprocessEvent.bind(t);
        e.on("preprocessEvent", (s, o) => r(s, o, e))
    }
    if (typeof t.processEvent == "function") {
        const r = t.processEvent.bind(t)
          , s = Object.assign( (o, a) => r(o, a, e), {
            id: t.name
        });
        e.addEventProcessor(s)
    }
    Y && N.log(`Integration installed: ${t.name}`)
}
i(vf, "setupIntegration");
const Yu = "Not capturing exception because it's already been captured.";
class fv {
    static{i(this, "BaseClient")
    }constructor(t) {
        if (this._options = t,
        this._integrations = {},
        this._numProcessing = 0,
        this._outcomes = {},
        this._hooks = {},
        this._eventProcessors = [],
        t.dsn ? this._dsn = a_(t.dsn) : Y && N.warn("No DSN provided, client will not send events."),
        this._dsn) {
            const n = cv(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : void 0);
            this._transport = t.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...t.transportOptions,
                url: n
            })
        }
    }
    captureException(t, n, r) {
        const s = Se();
        if (Au(t))
            return Y && N.log(Yu),
            s;
        const o = {
            event_id: s,
            ...n
        };
        return this._process(this.eventFromException(t, o).then(a => this._captureEvent(a, o, r))),
        o.event_id
    }
    captureMessage(t, n, r, s) {
        const o = {
            event_id: Se(),
            ...r
        }
          , a = Zo(t) ? t : String(t)
          , c = ea(t) ? this.eventFromMessage(a, n, o) : this.eventFromException(t, o);
        return this._process(c.then(u => this._captureEvent(u, o, s))),
        o.event_id
    }
    captureEvent(t, n, r) {
        const s = Se();
        if (n && n.originalException && Au(n.originalException))
            return Y && N.log(Yu),
            s;
        const o = {
            event_id: s,
            ...n
        }
          , c = (t.sdkProcessingMetadata || {}).capturedSpanScope;
        return this._process(this._captureEvent(t, o, c || r)),
        o.event_id
    }
    captureSession(t) {
        typeof t.release != "string" ? Y && N.warn("Discarded session because of missing or non-string release") : (this.sendSession(t),
        Un(t, {
            init: !1
        }))
    }
    getDsn() {
        return this._dsn
    }
    getOptions() {
        return this._options
    }
    getSdkMetadata() {
        return this._options._metadata
    }
    getTransport() {
        return this._transport
    }
    flush(t) {
        const n = this._transport;
        return n ? (this.emit("flush"),
        this._isClientDoneProcessing(t).then(r => n.flush(t).then(s => r && s))) : Pt(!0)
    }
    close(t) {
        return this.flush(t).then(n => (this.getOptions().enabled = !1,
        this.emit("close"),
        n))
    }
    getEventProcessors() {
        return this._eventProcessors
    }
    addEventProcessor(t) {
        this._eventProcessors.push(t)
    }
    init() {
        (this._isEnabled() || this._options.integrations.some( ({name: t}) => t.startsWith("Spotlight"))) && this._setupIntegrations()
    }
    getIntegrationByName(t) {
        return this._integrations[t]
    }
    addIntegration(t) {
        const n = this._integrations[t.name];
        vf(this, t, this._integrations),
        n || Ku(this, [t])
    }
    sendEvent(t, n={}) {
        this.emit("beforeSendEvent", t, n);
        let r = kS(t, this._dsn, this._options._metadata, this._options.tunnel);
        for (const o of n.attachments || [])
            r = H_(r, z_(o));
        const s = this.sendEnvelope(r);
        s && s.then(o => this.emit("afterSendEvent", t, o), null)
    }
    sendSession(t) {
        const n = IS(t, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(n)
    }
    recordDroppedEvent(t, n, r) {
        if (this._options.sendClientReports) {
            const s = typeof r == "number" ? r : 1
              , o = `${t}:${n}`;
            Y && N.log(`Recording outcome: "${o}"${s > 1 ? ` (${s} times)` : ""}`),
            this._outcomes[o] = (this._outcomes[o] || 0) + s
        }
    }
    on(t, n) {
        const r = this._hooks[t] = this._hooks[t] || [];
        return r.push(n),
        () => {
            const s = r.indexOf(n);
            s > -1 && r.splice(s, 1)
        }
    }
    emit(t, ...n) {
        const r = this._hooks[t];
        r && r.forEach(s => s(...n))
    }
    sendEnvelope(t) {
        return this.emit("beforeEnvelope", t),
        this._isEnabled() && this._transport ? this._transport.send(t).then(null, n => (Y && N.error("Error while sending envelope:", n),
        n)) : (Y && N.error("Transport disabled"),
        Pt({}))
    }
    _setupIntegrations() {
        const {integrations: t} = this._options;
        this._integrations = dv(this, t),
        Ku(this, t)
    }
    _updateSessionFromEvent(t, n) {
        let r = !1
          , s = !1;
        const o = n.exception && n.exception.values;
        if (o) {
            s = !0;
            for (const u of o) {
                const d = u.mechanism;
                if (d && d.handled === !1) {
                    r = !0;
                    break
                }
            }
        }
        const a = t.status === "ok";
        (a && t.errors === 0 || a && r) && (Un(t, {
            ...r && {
                status: "crashed"
            },
            errors: t.errors || Number(s || r)
        }),
        this.captureSession(t))
    }
    _isClientDoneProcessing(t) {
        return new nt(n => {
            let r = 0;
            const s = 1
              , o = setInterval( () => {
                this._numProcessing == 0 ? (clearInterval(o),
                n(!0)) : (r += s,
                t && r >= t && (clearInterval(o),
                n(!1)))
            }
            , s)
        }
        )
    }
    _isEnabled() {
        return this.getOptions().enabled !== !1 && this._transport !== void 0
    }
    _prepareEvent(t, n, r, s=et()) {
        const o = this.getOptions()
          , a = Object.keys(this._integrations);
        return !n.integrations && a.length > 0 && (n.integrations = a),
        this.emit("preprocessEvent", t, n),
        t.type || s.setLastEventId(t.event_id || n.event_id),
        mf(o, t, n, r, this, s).then(c => {
            if (c === null)
                return c;
            const u = {
                ...s.getPropagationContext(),
                ...r ? r.getPropagationContext() : void 0
            };
            if (!(c.contexts && c.contexts.trace) && u) {
                const {traceId: p, spanId: f, parentSpanId: g, dsc: _} = u;
                c.contexts = {
                    trace: Ae({
                        trace_id: p,
                        span_id: f,
                        parent_span_id: g
                    }),
                    ...c.contexts
                };
                const y = _ || ri(p, this);
                c.sdkProcessingMetadata = {
                    dynamicSamplingContext: y,
                    ...c.sdkProcessingMetadata
                }
            }
            return c
        }
        )
    }
    _captureEvent(t, n={}, r) {
        return this._processEvent(t, n, r).then(s => s.event_id, s => {
            if (Y) {
                const o = s;
                o.logLevel === "log" ? N.log(o.message) : N.warn(o)
            }
        }
        )
    }
    _processEvent(t, n, r) {
        const s = this.getOptions()
          , {sampleRate: o} = s
          , a = bf(t)
          , c = Ef(t)
          , u = t.type || "error"
          , d = `before send for type \`${u}\``
          , p = typeof o > "u" ? void 0 : Ms(o);
        if (c && typeof p == "number" && Math.random() > p)
            return this.recordDroppedEvent("sample_rate", "error", t),
            As(new gt(`Discarding event because it's not included in the random sample (sampling rate = ${o})`,"log"));
        const f = u === "replay_event" ? "replay" : u
          , _ = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
        return this._prepareEvent(t, n, r, _).then(y => {
            if (y === null)
                throw this.recordDroppedEvent("event_processor", f, t),
                new gt("An event processor returned `null`, will not send event.","log");
            if (n.data && n.data.__sentry__ === !0)
                return y;
            const E = hv(this, s, y, n);
            return pv(E, d)
        }
        ).then(y => {
            if (y === null) {
                if (this.recordDroppedEvent("before_send", f, t),
                a) {
                    const M = 1 + (t.spans || []).length;
                    this.recordDroppedEvent("before_send", "span", M)
                }
                throw new gt(`${d} returned \`null\`, will not send event.`,"log")
            }
            const v = r && r.getSession();
            if (!a && v && this._updateSessionFromEvent(v, y),
            a) {
                const k = y.sdkProcessingMetadata && y.sdkProcessingMetadata.spanCountBeforeProcessing || 0
                  , M = y.spans ? y.spans.length : 0
                  , P = k - M;
                P > 0 && this.recordDroppedEvent("before_send", "span", P)
            }
            const E = y.transaction_info;
            if (a && E && y.transaction !== t.transaction) {
                const k = "custom";
                y.transaction_info = {
                    ...E,
                    source: k
                }
            }
            return this.sendEvent(y, n),
            y
        }
        ).then(null, y => {
            throw y instanceof gt ? y : (this.captureException(y, {
                data: {
                    __sentry__: !0
                },
                originalException: y
            }),
            new gt(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${y}`))
        }
        )
    }
    _process(t) {
        this._numProcessing++,
        t.then(n => (this._numProcessing--,
        n), n => (this._numProcessing--,
        n))
    }
    _clearOutcomes() {
        const t = this._outcomes;
        return this._outcomes = {},
        Object.entries(t).map( ([n,r]) => {
            const [s,o] = n.split(":");
            return {
                reason: s,
                category: o,
                quantity: r
            }
        }
        )
    }
    _flushOutcomes() {
        Y && N.log("Flushing outcomes...");
        const t = this._clearOutcomes();
        if (t.length === 0) {
            Y && N.log("No outcomes to send");
            return
        }
        if (!this._dsn) {
            Y && N.log("No dsn provided, will not send outcomes");
            return
        }
        Y && N.log("Sending outcomes:", t);
        const n = V_(t, this._options.tunnel && Ir(this._dsn));
        this.sendEnvelope(n)
    }
}
function pv(e, t) {
    const n = `${t} must return \`null\` or a valid event.`;
    if (Zs(e))
        return e.then(r => {
            if (!Fn(r) && r !== null)
                throw new gt(n);
            return r
        }
        , r => {
            throw new gt(`${t} rejected with ${r}`)
        }
        );
    if (!Fn(e) && e !== null)
        throw new gt(n);
    return e
}
i(pv, "_validateBeforeSendResult");
function hv(e, t, n, r) {
    const {beforeSend: s, beforeSendTransaction: o, beforeSendSpan: a} = t;
    if (Ef(n) && s)
        return s(n, r);
    if (bf(n)) {
        if (n.spans && a) {
            const c = [];
            for (const u of n.spans) {
                const d = a(u);
                d ? c.push(d) : e.recordDroppedEvent("before_send", "span")
            }
            n.spans = c
        }
        if (o) {
            if (n.spans) {
                const c = n.spans.length;
                n.sdkProcessingMetadata = {
                    ...n.sdkProcessingMetadata,
                    spanCountBeforeProcessing: c
                }
            }
            return o(n, r)
        }
    }
    return n
}
i(hv, "processBeforeSend");
function Ef(e) {
    return e.type === void 0
}
i(Ef, "isErrorEvent$1");
function bf(e) {
    return e.type === "transaction"
}
i(bf, "isTransactionEvent$1");
function mv(e, t) {
    t.debug === !0 && (Y ? N.enable() : Kn( () => {}
    )),
    pe().update(t.initialScope);
    const r = new e(t);
    return gv(r),
    r.init(),
    r
}
i(mv, "initAndBind");
function gv(e) {
    pe().setClient(e)
}
i(gv, "setCurrentClient");
const yv = 64;
function _v(e, t, n=M_(e.bufferSize || yv)) {
    let r = {};
    const s = i(a => n.drain(a), "flush");
    function o(a) {
        const c = [];
        if (xu(a, (f, g) => {
            const _ = Mu(g);
            if (Xd(r, _)) {
                const y = Ju(f, g);
                e.recordDroppedEvent("ratelimit_backoff", _, y)
            } else
                c.push(f)
        }
        ),
        c.length === 0)
            return Pt({});
        const u = gn(a[0], c)
          , d = i(f => {
            xu(u, (g, _) => {
                const y = Ju(g, _);
                e.recordDroppedEvent(f, Mu(_), y)
            }
            )
        }
        , "recordEnvelopeLoss")
          , p = i( () => t({
            body: j_(u)
        }).then(f => (f.statusCode !== void 0 && (f.statusCode < 200 || f.statusCode >= 300) && Y && N.warn(`Sentry responded with status code ${f.statusCode} to sent event.`),
        r = Qd(r, f),
        f), f => {
            throw d("network_error"),
            f
        }
        ), "requestTask");
        return n.add(p).then(f => f, f => {
            if (f instanceof gt)
                return Y && N.error("Skipped sending event because buffer is full."),
                d("queue_overflow"),
                Pt({});
            throw f
        }
        )
    }
    return i(o, "send"),
    {
        send: o,
        flush: s
    }
}
i(_v, "createTransport");
function Ju(e, t) {
    if (!(t !== "event" && t !== "transaction"))
        return Array.isArray(e) ? e[1] : void 0
}
i(Ju, "getEventForEnvelopeItem");
function Sv(e, t) {
    const n = t && t.getDsn()
      , r = t && t.getOptions().tunnel;
    return Ev(e, n) || vv(e, r)
}
i(Sv, "isSentryRequestUrl");
function vv(e, t) {
    return t ? Xu(e) === Xu(t) : !1
}
i(vv, "checkTunnel");
function Ev(e, t) {
    return t ? e.includes(t.host) : !1
}
i(Ev, "checkDsn");
function Xu(e) {
    return e[e.length - 1] === "/" ? e.slice(0, -1) : e
}
i(Xu, "removeTrailingSlash");
function wf(e, t, n=[t], r="npm") {
    const s = e._metadata || {};
    s.sdk || (s.sdk = {
        name: `sentry.javascript.${t}`,
        packages: n.map(o => ({
            name: `${r}:@sentry/${o}`,
            version: cn
        })),
        version: cn
    }),
    e._metadata = s
}
i(wf, "applySdkMetadata");
const bv = 100;
function Yt(e, t) {
    const n = Z()
      , r = et();
    if (!n)
        return;
    const {beforeBreadcrumb: s=null, maxBreadcrumbs: o=bv} = n.getOptions();
    if (o <= 0)
        return;
    const c = {
        timestamp: kr(),
        ...e
    }
      , u = s ? Kn( () => s(c, t)) : c;
    u !== null && (n.emit && n.emit("beforeAddBreadcrumb", u, t),
    r.addBreadcrumb(u, o))
}
i(Yt, "addBreadcrumb");
let Qu;
const wv = "FunctionToString"
  , Zu = new WeakMap
  , Tv = i( () => ({
    name: wv,
    setupOnce() {
        Qu = Function.prototype.toString;
        try {
            Function.prototype.toString = function(...e) {
                const t = ta(this)
                  , n = Zu.has(Z()) && t !== void 0 ? t : this;
                return Qu.apply(n, e)
            }
        } catch {}
    },
    setup(e) {
        Zu.set(e, !0)
    }
}), "_functionToStringIntegration")
  , Iv = Tv
  , kv = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler"]
  , Rv = "InboundFilters"
  , Cv = i( (e={}) => ({
    name: Rv,
    processEvent(t, n, r) {
        const s = r.getOptions()
          , o = Ov(e, s);
        return xv(t, o) ? null : t
    }
}), "_inboundFiltersIntegration")
  , Av = Cv;
function Ov(e={}, t={}) {
    return {
        allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
        denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
        ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : kv],
        ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []],
        ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
    }
}
i(Ov, "_mergeOptions");
function xv(e, t) {
    return t.ignoreInternal && Fv(e) ? (Y && N.warn(`Event dropped due to being internal Sentry Error.
Event: ${Bt(e)}`),
    !0) : Mv(e, t.ignoreErrors) ? (Y && N.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Bt(e)}`),
    !0) : $v(e) ? (Y && N.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Bt(e)}`),
    !0) : Pv(e, t.ignoreTransactions) ? (Y && N.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Bt(e)}`),
    !0) : Nv(e, t.denyUrls) ? (Y && N.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Bt(e)}.
Url: ${Ps(e)}`),
    !0) : Dv(e, t.allowUrls) ? !1 : (Y && N.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Bt(e)}.
Url: ${Ps(e)}`),
    !0)
}
i(xv, "_shouldDropEvent$1");
function Mv(e, t) {
    return e.type || !t || !t.length ? !1 : Lv(e).some(n => zt(n, t))
}
i(Mv, "_isIgnoredError");
function Pv(e, t) {
    if (e.type !== "transaction" || !t || !t.length)
        return !1;
    const n = e.transaction;
    return n ? zt(n, t) : !1
}
i(Pv, "_isIgnoredTransaction");
function Nv(e, t) {
    if (!t || !t.length)
        return !1;
    const n = Ps(e);
    return n ? zt(n, t) : !1
}
i(Nv, "_isDeniedUrl");
function Dv(e, t) {
    if (!t || !t.length)
        return !0;
    const n = Ps(e);
    return n ? zt(n, t) : !0
}
i(Dv, "_isAllowedUrl");
function Lv(e) {
    const t = [];
    e.message && t.push(e.message);
    let n;
    try {
        n = e.exception.values[e.exception.values.length - 1]
    } catch {}
    return n && n.value && (t.push(n.value),
    n.type && t.push(`${n.type}: ${n.value}`)),
    t
}
i(Lv, "_getPossibleEventMessages");
function Fv(e) {
    try {
        return e.exception.values[0].type === "SentryError"
    } catch {}
    return !1
}
i(Fv, "_isSentryError");
function Uv(e=[]) {
    for (let t = e.length - 1; t >= 0; t--) {
        const n = e[t];
        if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
            return n.filename || null
    }
    return null
}
i(Uv, "_getLastValidUrl");
function Ps(e) {
    try {
        let t;
        try {
            t = e.exception.values[0].stacktrace.frames
        } catch {}
        return t ? Uv(t) : null
    } catch {
        return Y && N.error(`Cannot extract url for event ${Bt(e)}`),
        null
    }
}
i(Ps, "_getEventFilterUrl");
function $v(e) {
    return e.type || !e.exception || !e.exception.values || e.exception.values.length === 0 ? !1 : !e.message && !e.exception.values.some(t => t.stacktrace || t.type && t.type !== "Error" || t.value)
}
i($v, "_isUselessError");
const Bv = "Dedupe"
  , Hv = i( () => {
    let e;
    return {
        name: Bv,
        processEvent(t) {
            if (t.type)
                return t;
            try {
                if (Wv(t, e))
                    return Y && N.warn("Event dropped due to being a duplicate of previously captured event."),
                    null
            } catch {}
            return e = t
        }
    }
}
, "_dedupeIntegration")
  , jv = Hv;
function Wv(e, t) {
    return t ? !!(qv(e, t) || zv(e, t)) : !1
}
i(Wv, "_shouldDropEvent");
function qv(e, t) {
    const n = e.message
      , r = t.message;
    return !(!n && !r || n && !r || !n && r || n !== r || !If(e, t) || !Tf(e, t))
}
i(qv, "_isSameMessageEvent");
function zv(e, t) {
    const n = el(t)
      , r = el(e);
    return !(!n || !r || n.type !== r.type || n.value !== r.value || !If(e, t) || !Tf(e, t))
}
i(zv, "_isSameExceptionEvent");
function Tf(e, t) {
    let n = Iu(e)
      , r = Iu(t);
    if (!n && !r)
        return !0;
    if (n && !r || !n && r || (n = n,
    r = r,
    r.length !== n.length))
        return !1;
    for (let s = 0; s < r.length; s++) {
        const o = r[s]
          , a = n[s];
        if (o.filename !== a.filename || o.lineno !== a.lineno || o.colno !== a.colno || o.function !== a.function)
            return !1
    }
    return !0
}
i(Tf, "_isSameStacktrace");
function If(e, t) {
    let n = e.fingerprint
      , r = t.fingerprint;
    if (!n && !r)
        return !0;
    if (n && !r || !n && r)
        return !1;
    n = n,
    r = r;
    try {
        return n.join("") === r.join("")
    } catch {
        return !1
    }
}
i(If, "_isSameFingerprint");
function el(e) {
    return e.exception && e.exception.values && e.exception.values[0]
}
i(el, "_getExceptionFromEvent");
function Gv(e, t, n, r, s="auto.http.browser") {
    if (!e.fetchData)
        return;
    const o = Nt() && t(e.fetchData.url);
    if (e.endTimestamp && o) {
        const y = e.fetchData.__span;
        if (!y)
            return;
        const v = r[y];
        v && (Yv(v, e),
        delete r[y]);
        return
    }
    const a = pe()
      , c = Z()
      , {method: u, url: d} = e.fetchData
      , p = Kv(d)
      , f = p ? un(p).host : void 0
      , g = !!Ne()
      , _ = o && g ? _n({
        name: `${u} ${d}`,
        attributes: {
            url: d,
            type: "fetch",
            "http.method": u,
            "http.url": p,
            "server.address": f,
            [xe]: s,
            [pn]: "http.client"
        }
    }) : new Jn;
    if (e.fetchData.__span = _.spanContext().spanId,
    r[_.spanContext().spanId] = _,
    n(e.fetchData.url) && c) {
        const y = e.args[0];
        e.args[1] = e.args[1] || {};
        const v = e.args[1];
        v.headers = Vv(y, c, a, v, Nt() && g ? _ : void 0)
    }
    return _
}
i(Gv, "instrumentFetchRequest");
function Vv(e, t, n, r, s) {
    const o = et()
      , {traceId: a, spanId: c, sampled: u, dsc: d} = {
        ...o.getPropagationContext(),
        ...n.getPropagationContext()
    }
      , p = s ? sf(s) : ra(a, c, u)
      , f = Yd(d || (s ? Qt(s) : ri(a, t)))
      , g = r.headers || (typeof Request < "u" && Ot(e, Request) ? e.headers : void 0);
    if (g)
        if (typeof Headers < "u" && Ot(g, Headers)) {
            const _ = new Headers(g);
            if (_.set("sentry-trace", p),
            f) {
                const y = _.get(Cn);
                if (y) {
                    const v = Zr(y);
                    _.set(Cn, v ? `${v},${f}` : f)
                } else
                    _.set(Cn, f)
            }
            return _
        } else if (Array.isArray(g)) {
            const _ = [...g.filter(y => !(Array.isArray(y) && y[0] === "sentry-trace")).map(y => {
                if (Array.isArray(y) && y[0] === Cn && typeof y[1] == "string") {
                    const [v,E,...k] = y;
                    return [v, Zr(E), ...k]
                } else
                    return y
            }
            ), ["sentry-trace", p]];
            return f && _.push([Cn, f]),
            _
        } else {
            const _ = "baggage"in g ? g.baggage : void 0;
            let y = [];
            return Array.isArray(_) ? y = _.map(v => typeof v == "string" ? Zr(v) : v).filter(v => v === "") : _ && y.push(Zr(_)),
            f && y.push(f),
            {
                ...g,
                "sentry-trace": p,
                baggage: y.length > 0 ? y.join(",") : void 0
            }
        }
    else
        return {
            "sentry-trace": p,
            baggage: f
        }
}
i(Vv, "addTracingHeadersToFetchRequest");
function Kv(e) {
    try {
        return new URL(e).href
    } catch {
        return
    }
}
i(Kv, "getFullURL$1");
function Yv(e, t) {
    if (t.response) {
        tf(e, t.response.status);
        const n = t.response && t.response.headers && t.response.headers.get("content-length");
        if (n) {
            const r = parseInt(n);
            r > 0 && e.setAttribute("http.response_content_length", r)
        }
    } else
        t.error && e.setStatus({
            code: Oe,
            message: "internal_error"
        });
    e.end()
}
i(Yv, "endSpan");
function Zr(e) {
    return e.split(",").filter(t => !t.split("=")[0].startsWith(na)).join(",")
}
i(Zr, "stripBaggageHeaderOfSentryBaggageValues");
const K = ne;
let bo = 0;
function kf() {
    return bo > 0
}
i(kf, "shouldIgnoreOnError");
function Jv() {
    bo++,
    setTimeout( () => {
        bo--
    }
    )
}
i(Jv, "ignoreNextOnError");
function Bn(e, t={}, n) {
    if (typeof e != "function")
        return e;
    try {
        const s = e.__sentry_wrapped__;
        if (s)
            return typeof s == "function" ? s : e;
        if (ta(e))
            return e
    } catch {
        return e
    }
    const r = i(function() {
        const s = Array.prototype.slice.call(arguments);
        try {
            const o = s.map(a => Bn(a, t));
            return e.apply(this, o)
        } catch (o) {
            throw Jv(),
            aa(a => {
                a.addEventProcessor(c => (t.mechanism && (po(c, void 0, void 0),
                mr(c, t.mechanism)),
                c.extra = {
                    ...c.extra,
                    arguments: s
                },
                c)),
                gf(o)
            }
            ),
            o
        }
    }, "sentryWrapped");
    try {
        for (const s in e)
            Object.prototype.hasOwnProperty.call(e, s) && (r[s] = e[s])
    } catch {}
    Nd(r, e),
    it(e, "__sentry_wrapped__", r);
    try {
        Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
            get() {
                return e.name
            }
        })
    } catch {}
    return r
}
i(Bn, "wrap");
const ut = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function fa(e, t) {
    const n = pa(e, t)
      , r = {
        type: tE(t),
        value: nE(t)
    };
    return n.length && (r.stacktrace = {
        frames: n
    }),
    r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"),
    r
}
i(fa, "exceptionFromError");
function Xv(e, t, n, r) {
    const s = Z()
      , o = s && s.getOptions().normalizeDepth
      , a = aE(t)
      , c = {
        __serialized__: Gd(t, o)
    };
    if (a)
        return {
            exception: {
                values: [fa(e, a)]
            },
            extra: c
        };
    const u = {
        exception: {
            values: [{
                type: Qs(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                value: iE(t, {
                    isUnhandledRejection: r
                })
            }]
        },
        extra: c
    };
    if (n) {
        const d = pa(e, n);
        d.length && (u.exception.values[0].stacktrace = {
            frames: d
        })
    }
    return u
}
i(Xv, "eventFromPlainObject");
function $i(e, t) {
    return {
        exception: {
            values: [fa(e, t)]
        }
    }
}
i($i, "eventFromError");
function pa(e, t) {
    const n = t.stacktrace || t.stack || ""
      , r = Zv(t)
      , s = eE(t);
    try {
        return e(n, r, s)
    } catch {}
    return []
}
i(pa, "parseStackFrames");
const Qv = /Minified React error #\d+;/i;
function Zv(e) {
    return e && Qv.test(e.message) ? 1 : 0
}
i(Zv, "getSkipFirstStackStringLines");
function eE(e) {
    return typeof e.framesToPop == "number" ? e.framesToPop : 0
}
i(eE, "getPopFirstTopFrames");
function Rf(e) {
    return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u" ? e instanceof WebAssembly.Exception : !1
}
i(Rf, "isWebAssemblyException");
function tE(e) {
    const t = e && e.name;
    return !t && Rf(e) ? e.message && Array.isArray(e.message) && e.message.length == 2 ? e.message[0] : "WebAssembly.Exception" : t
}
i(tE, "extractType");
function nE(e) {
    const t = e && e.message;
    return t ? t.error && typeof t.error.message == "string" ? t.error.message : Rf(e) && Array.isArray(e.message) && e.message.length == 2 ? e.message[1] : t : "No error message"
}
i(nE, "extractMessage");
function rE(e, t, n, r) {
    const s = n && n.syntheticException || void 0
      , o = ha(e, t, s, r);
    return mr(o),
    o.level = "error",
    n && n.event_id && (o.event_id = n.event_id),
    Pt(o)
}
i(rE, "eventFromException");
function sE(e, t, n="info", r, s) {
    const o = r && r.syntheticException || void 0
      , a = wo(e, t, o, s);
    return a.level = n,
    r && r.event_id && (a.event_id = r.event_id),
    Pt(a)
}
i(sE, "eventFromMessage");
function ha(e, t, n, r, s) {
    let o;
    if (Cd(t) && t.error)
        return $i(e, t.error);
    if (yu(t) || zy(t)) {
        const a = t;
        if ("stack"in t)
            o = $i(e, t);
        else {
            const c = a.name || (yu(a) ? "DOMError" : "DOMException")
              , u = a.message ? `${c}: ${a.message}` : c;
            o = wo(e, u, n, r),
            po(o, u)
        }
        return "code"in a && (o.tags = {
            ...o.tags,
            "DOMException.code": `${a.code}`
        }),
        o
    }
    return Qo(t) ? $i(e, t) : Fn(t) || Qs(t) ? (o = Xv(e, t, n, s),
    mr(o, {
        synthetic: !0
    }),
    o) : (o = wo(e, t, n, r),
    po(o, `${t}`, void 0),
    mr(o, {
        synthetic: !0
    }),
    o)
}
i(ha, "eventFromUnknownInput");
function wo(e, t, n, r) {
    const s = {};
    if (r && n) {
        const o = pa(e, n);
        o.length && (s.exception = {
            values: [{
                value: t,
                stacktrace: {
                    frames: o
                }
            }]
        })
    }
    if (Zo(t)) {
        const {__sentry_template_string__: o, __sentry_template_values__: a} = t;
        return s.logentry = {
            message: o,
            params: a
        },
        s
    }
    return s.message = t,
    s
}
i(wo, "eventFromString");
function iE(e, {isUnhandledRejection: t}) {
    const n = u_(e)
      , r = t ? "promise rejection" : "exception";
    return Cd(e) ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\`` : Qs(e) ? `Event \`${oE(e)}\` (type=${e.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`
}
i(iE, "getNonErrorObjectExceptionValue");
function oE(e) {
    try {
        const t = Object.getPrototypeOf(e);
        return t ? t.constructor.name : void 0
    } catch {}
}
i(oE, "getObjectClassName");
function aE(e) {
    for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) {
            const n = e[t];
            if (n instanceof Error)
                return n
        }
}
i(aE, "getErrorPropertyFromObject");
function cE(e, {metadata: t, tunnel: n, dsn: r}) {
    const s = {
        event_id: e.event_id,
        sent_at: new Date().toISOString(),
        ...t && t.sdk && {
            sdk: {
                name: t.sdk.name,
                version: t.sdk.version
            }
        },
        ...!!n && !!r && {
            dsn: Ir(r)
        }
    }
      , o = uE(e);
    return gn(s, [o])
}
i(cE, "createUserFeedbackEnvelope");
function uE(e) {
    return [{
        type: "user_report"
    }, e]
}
i(uE, "createUserFeedbackEnvelopeItem");
class lE extends fv {
    static{i(this, "BrowserClient")
    }constructor(t) {
        const n = {
            parentSpanIsAlwaysRootSpan: !0,
            ...t
        }
          , r = K.SENTRY_SDK_SOURCE || T_();
        wf(n, "browser", ["browser"], r),
        super(n),
        n.sendClientReports && K.document && K.document.addEventListener("visibilitychange", () => {
            K.document.visibilityState === "hidden" && this._flushOutcomes()
        }
        )
    }
    eventFromException(t, n) {
        return rE(this._options.stackParser, t, n, this._options.attachStacktrace)
    }
    eventFromMessage(t, n="info", r) {
        return sE(this._options.stackParser, t, n, r, this._options.attachStacktrace)
    }
    captureUserFeedback(t) {
        if (!this._isEnabled()) {
            ut && N.warn("SDK not enabled, will not capture user feedback.");
            return
        }
        const n = cE(t, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel
        });
        this.sendEnvelope(n)
    }
    _prepareEvent(t, n, r) {
        return t.platform = t.platform || "javascript",
        super._prepareEvent(t, n, r)
    }
}
const Ze = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
  , dE = i( (e, t) => e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good", "getRating")
  , Xn = i( (e, t, n, r) => {
    let s, o;
    return a => {
        t.value >= 0 && (a || r) && (o = t.value - (s || 0),
        (o || s === void 0) && (s = t.value,
        t.delta = o,
        t.rating = dE(t.value, n),
        e(t)))
    }
}
, "bindReporter")
  , z = ne
  , fE = i( () => `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`, "generateUniqueID")
  , Cr = i( () => z.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0], "getNavigationEntry")
  , Ar = i( () => {
    const e = Cr();
    return e && e.activationStart || 0
}
, "getActivationStart")
  , Qn = i( (e, t) => {
    const n = Cr();
    let r = "navigate";
    return n && (z.document && z.document.prerendering || Ar() > 0 ? r = "prerender" : z.document && z.document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))),
    {
        name: e,
        value: typeof t > "u" ? -1 : t,
        rating: "good",
        delta: 0,
        entries: [],
        id: fE(),
        navigationType: r
    }
}
, "initMetric")
  , Sn = i( (e, t, n) => {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            const r = new PerformanceObserver(s => {
                Promise.resolve().then( () => {
                    t(s.getEntries())
                }
                )
            }
            );
            return r.observe(Object.assign({
                type: e,
                buffered: !0
            }, n || {})),
            r
        }
    } catch {}
}
, "observe")
  , Or = i(e => {
    const t = i(n => {
        (n.type === "pagehide" || z.document && z.document.visibilityState === "hidden") && e(n)
    }
    , "onHiddenOrPageHide");
    z.document && (addEventListener("visibilitychange", t, !0),
    addEventListener("pagehide", t, !0))
}
, "onHidden")
  , ma = i(e => {
    let t = !1;
    return n => {
        t || (e(n),
        t = !0)
    }
}
, "runOnce");
let yr = -1;
const pE = i( () => {
    yr = z.document.visibilityState === "hidden" && !z.document.prerendering ? 0 : 1 / 0
}
, "initHiddenTime")
  , Ns = i(e => {
    z.document.visibilityState === "hidden" && yr > -1 && (yr = e.type === "visibilitychange" ? e.timeStamp : 0,
    removeEventListener("visibilitychange", Ns, !0),
    removeEventListener("prerenderingchange", Ns, !0))
}
, "onVisibilityUpdate")
  , hE = i( () => {
    addEventListener("visibilitychange", Ns, !0),
    addEventListener("prerenderingchange", Ns, !0)
}
, "addChangeListeners")
  , si = i( () => (z.document && yr < 0 && (pE(),
hE()),
{
    get firstHiddenTime() {
        return yr
    }
}), "getVisibilityWatcher")
  , xr = i(e => {
    z.document && z.document.prerendering ? addEventListener("prerenderingchange", () => e(), !0) : e()
}
, "whenActivated")
  , mE = [1800, 3e3]
  , gE = i( (e, t={}) => {
    xr( () => {
        const n = si()
          , r = Qn("FCP");
        let s;
        const a = Sn("paint", i(c => {
            c.forEach(u => {
                u.name === "first-contentful-paint" && (a.disconnect(),
                u.startTime < n.firstHiddenTime && (r.value = Math.max(u.startTime - Ar(), 0),
                r.entries.push(u),
                s(!0)))
            }
            )
        }
        , "handleEntries"));
        a && (s = Xn(e, r, mE, t.reportAllChanges))
    }
    )
}
, "onFCP")
  , yE = [.1, .25]
  , _E = i( (e, t={}) => {
    gE(ma( () => {
        const n = Qn("CLS", 0);
        let r, s = 0, o = [];
        const a = i(u => {
            u.forEach(d => {
                if (!d.hadRecentInput) {
                    const p = o[0]
                      , f = o[o.length - 1];
                    s && p && f && d.startTime - f.startTime < 1e3 && d.startTime - p.startTime < 5e3 ? (s += d.value,
                    o.push(d)) : (s = d.value,
                    o = [d])
                }
            }
            ),
            s > n.value && (n.value = s,
            n.entries = o,
            r())
        }
        , "handleEntries")
          , c = Sn("layout-shift", a);
        c && (r = Xn(e, n, yE, t.reportAllChanges),
        Or( () => {
            a(c.takeRecords()),
            r(!0)
        }
        ),
        setTimeout(r, 0))
    }
    ))
}
, "onCLS")
  , SE = [100, 300]
  , vE = i( (e, t={}) => {
    xr( () => {
        const n = si()
          , r = Qn("FID");
        let s;
        const o = i(u => {
            u.startTime < n.firstHiddenTime && (r.value = u.processingStart - u.startTime,
            r.entries.push(u),
            s(!0))
        }
        , "handleEntry")
          , a = i(u => {
            u.forEach(o)
        }
        , "handleEntries")
          , c = Sn("first-input", a);
        s = Xn(e, r, SE, t.reportAllChanges),
        c && Or(ma( () => {
            a(c.takeRecords()),
            c.disconnect()
        }
        ))
    }
    )
}
, "onFID");
let Cf = 0
  , Bi = 1 / 0
  , es = 0;
const EE = i(e => {
    e.forEach(t => {
        t.interactionId && (Bi = Math.min(Bi, t.interactionId),
        es = Math.max(es, t.interactionId),
        Cf = es ? (es - Bi) / 7 + 1 : 0)
    }
    )
}
, "updateEstimate");
let To;
const bE = i( () => To ? Cf : performance.interactionCount || 0, "getInteractionCount")
  , wE = i( () => {
    "interactionCount"in performance || To || (To = Sn("event", EE, {
        type: "event",
        buffered: !0,
        durationThreshold: 0
    }))
}
, "initInteractionCountPolyfill")
  , TE = [200, 500]
  , IE = 0
  , Af = i( () => bE() - IE, "getInteractionCountForNavigation")
  , tl = 10
  , It = []
  , Hi = {}
  , nl = i(e => {
    const t = It[It.length - 1]
      , n = Hi[e.interactionId];
    if (n || It.length < tl || t && e.duration > t.latency) {
        if (n)
            n.entries.push(e),
            n.latency = Math.max(n.latency, e.duration);
        else {
            const r = {
                id: e.interactionId,
                latency: e.duration,
                entries: [e]
            };
            Hi[r.id] = r,
            It.push(r)
        }
        It.sort( (r, s) => s.latency - r.latency),
        It.splice(tl).forEach(r => {
            delete Hi[r.id]
        }
        )
    }
}
, "processEntry")
  , kE = i( () => {
    const e = Math.min(It.length - 1, Math.floor(Af() / 50));
    return It[e]
}
, "estimateP98LongestInteraction")
  , RE = i( (e, t={}) => {
    xr( () => {
        wE();
        const n = Qn("INP");
        let r;
        const s = i(a => {
            a.forEach(u => {
                u.interactionId && nl(u),
                u.entryType === "first-input" && !It.some(p => p.entries.some(f => u.duration === f.duration && u.startTime === f.startTime)) && nl(u)
            }
            );
            const c = kE();
            c && c.latency !== n.value && (n.value = c.latency,
            n.entries = c.entries,
            r())
        }
        , "handleEntries")
          , o = Sn("event", s, {
            durationThreshold: t.durationThreshold != null ? t.durationThreshold : 40
        });
        r = Xn(e, n, TE, t.reportAllChanges),
        o && ("PerformanceEventTiming"in z && "interactionId"in PerformanceEventTiming.prototype && o.observe({
            type: "first-input",
            buffered: !0
        }),
        Or( () => {
            s(o.takeRecords()),
            n.value < 0 && Af() > 0 && (n.value = 0,
            n.entries = []),
            r(!0)
        }
        ))
    }
    )
}
, "onINP")
  , CE = [2500, 4e3]
  , rl = {}
  , AE = i( (e, t={}) => {
    xr( () => {
        const n = si()
          , r = Qn("LCP");
        let s;
        const o = i(c => {
            const u = c[c.length - 1];
            u && u.startTime < n.firstHiddenTime && (r.value = Math.max(u.startTime - Ar(), 0),
            r.entries = [u],
            s())
        }
        , "handleEntries")
          , a = Sn("largest-contentful-paint", o);
        if (a) {
            s = Xn(e, r, CE, t.reportAllChanges);
            const c = ma( () => {
                rl[r.id] || (o(a.takeRecords()),
                a.disconnect(),
                rl[r.id] = !0,
                s(!0))
            }
            );
            ["keydown", "click"].forEach(u => {
                z.document && addEventListener(u, () => setTimeout(c, 0), !0)
            }
            ),
            Or(c)
        }
    }
    )
}
, "onLCP")
  , OE = [800, 1800]
  , Io = i(e => {
    z.document && z.document.prerendering ? xr( () => Io(e)) : z.document && z.document.readyState !== "complete" ? addEventListener("load", () => Io(e), !0) : setTimeout(e, 0)
}
, "whenReady")
  , xE = i( (e, t={}) => {
    const n = Qn("TTFB")
      , r = Xn(e, n, OE, t.reportAllChanges);
    Io( () => {
        const s = Cr();
        if (s) {
            const o = s.responseStart;
            if (o <= 0 || o > performance.now())
                return;
            n.value = Math.max(o - Ar(), 0),
            n.entries = [s],
            r(!0)
        }
    }
    )
}
, "onTTFB")
  , ur = {}
  , Ds = {};
let Of, xf, Mf, Pf, Nf;
function ga(e, t=!1) {
    return Mr("cls", e, PE, Of, t)
}
i(ga, "addClsInstrumentationHandler");
function Df(e, t=!1) {
    return Mr("lcp", e, DE, Mf, t)
}
i(Df, "addLcpInstrumentationHandler");
function Lf(e) {
    return Mr("fid", e, NE, xf)
}
i(Lf, "addFidInstrumentationHandler");
function ME(e) {
    return Mr("ttfb", e, LE, Pf)
}
i(ME, "addTtfbInstrumentationHandler");
function Ff(e) {
    return Mr("inp", e, FE, Nf)
}
i(Ff, "addInpInstrumentationHandler");
function Hn(e, t) {
    return Uf(e, t),
    Ds[e] || (UE(e),
    Ds[e] = !0),
    $f(e, t)
}
i(Hn, "addPerformanceInstrumentationHandler");
function Zn(e, t) {
    const n = ur[e];
    if (!(!n || !n.length))
        for (const r of n)
            try {
                r(t)
            } catch (s) {
                Ze && N.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${Mt(r)}
Error:`, s)
            }
}
i(Zn, "triggerHandlers");
function PE() {
    return _E(e => {
        Zn("cls", {
            metric: e
        }),
        Of = e
    }
    , {
        reportAllChanges: !0
    })
}
i(PE, "instrumentCls");
function NE() {
    return vE(e => {
        Zn("fid", {
            metric: e
        }),
        xf = e
    }
    )
}
i(NE, "instrumentFid");
function DE() {
    return AE(e => {
        Zn("lcp", {
            metric: e
        }),
        Mf = e
    }
    , {
        reportAllChanges: !0
    })
}
i(DE, "instrumentLcp");
function LE() {
    return xE(e => {
        Zn("ttfb", {
            metric: e
        }),
        Pf = e
    }
    )
}
i(LE, "instrumentTtfb");
function FE() {
    return RE(e => {
        Zn("inp", {
            metric: e
        }),
        Nf = e
    }
    )
}
i(FE, "instrumentInp");
function Mr(e, t, n, r, s=!1) {
    Uf(e, t);
    let o;
    return Ds[e] || (o = n(),
    Ds[e] = !0),
    r && t({
        metric: r
    }),
    $f(e, t, s ? o : void 0)
}
i(Mr, "addMetricObserver");
function UE(e) {
    const t = {};
    e === "event" && (t.durationThreshold = 0),
    Sn(e, n => {
        Zn(e, {
            entries: n
        })
    }
    , t)
}
i(UE, "instrumentPerformanceObserver");
function Uf(e, t) {
    ur[e] = ur[e] || [],
    ur[e].push(t)
}
i(Uf, "addHandler");
function $f(e, t, n) {
    return () => {
        n && n();
        const r = ur[e];
        if (!r)
            return;
        const s = r.indexOf(t);
        s !== -1 && r.splice(s, 1)
    }
}
i($f, "getCleanupCallback");
function $E(e) {
    return "duration"in e
}
i($E, "isPerformanceEventTiming");
function ji(e) {
    return typeof e == "number" && isFinite(e)
}
i(ji, "isMeasurementValue");
function hn(e, t, n, {...r}) {
    const s = oe(e).start_timestamp;
    return s && s > t && typeof e.updateStartTime == "function" && e.updateStartTime(t),
    ff(e, () => {
        const o = _n({
            startTime: t,
            ...r
        });
        return o && o.end(n),
        o
    }
    )
}
i(hn, "startAndEndSpan");
function Bf(e) {
    const t = Z();
    if (!t)
        return;
    const {name: n, transaction: r, attributes: s, startTime: o} = e
      , {release: a, environment: c} = t.getOptions()
      , u = t.getIntegrationByName("Replay")
      , d = u && u.getReplayId()
      , p = pe()
      , f = p.getUser()
      , g = f !== void 0 ? f.email || f.id || f.ip_address : void 0;
    let _;
    try {
        _ = p.getScopeData().contexts.profile.profile_id
    } catch {}
    const y = {
        release: a,
        environment: c,
        user: g || void 0,
        profile_id: _ || void 0,
        replay_id: d || void 0,
        transaction: r,
        "user_agent.original": z.navigator && z.navigator.userAgent,
        ...s
    };
    return _n({
        name: n,
        attributes: y,
        startTime: o,
        experimental: {
            standalone: !0
        }
    })
}
i(Bf, "startStandaloneWebVitalSpan");
function ya() {
    return z && z.addEventListener && z.performance
}
i(ya, "getBrowserPerformanceAPI");
function Ie(e) {
    return e / 1e3
}
i(Ie, "msToSec");
function BE() {
    let e = 0, t, n;
    if (!jE())
        return;
    let r = !1;
    function s() {
        r || (r = !0,
        n && HE(e, t, n),
        o())
    }
    i(s, "_collectClsOnce");
    const o = ga( ({metric: a}) => {
        const c = a.entries[a.entries.length - 1];
        c && (e = a.value,
        t = c)
    }
    , !0);
    Or( () => {
        s()
    }
    ),
    setTimeout( () => {
        const a = Z()
          , c = Qe([a, "optionalAccess", f => f.on, "call", f => f("startNavigationSpan", () => {
            s(),
            c && c()
        }
        )])
          , u = Ne()
          , d = u && Pe(u)
          , p = d && oe(d);
        p && p.op === "pageload" && (n = d.spanContext().spanId)
    }
    , 0)
}
i(BE, "trackClsAsStandaloneSpan");
function HE(e, t, n) {
    Ze && N.log(`Sending CLS span (${e})`);
    const r = Ie((je || 0) + (Qe([t, "optionalAccess", u => u.startTime]) || 0))
      , s = pe().getScopeData().transactionName
      , o = t ? xt(Qe([t, "access", u => u.sources, "access", u => u[0], "optionalAccess", u => u.node])) : "Layout shift"
      , a = Ae({
        [xe]: "auto.http.browser.cls",
        [pn]: "ui.webvital.cls",
        [ca]: Qe([t, "optionalAccess", u => u.duration]) || 0,
        "sentry.pageload.span_id": n
    })
      , c = Bf({
        name: o,
        transaction: s,
        attributes: a,
        startTime: r
    });
    Qe([c, "optionalAccess", u => u.addEvent, "call", u => u("cls", {
        [ti]: "",
        [ni]: e
    })]),
    Qe([c, "optionalAccess", u => u.end, "call", u => u(r)])
}
i(HE, "sendStandaloneClsSpan");
function jE() {
    try {
        return Qe([PerformanceObserver, "access", e => e.supportedEntryTypes, "optionalAccess", e => e.includes, "call", e => e("layout-shift")])
    } catch {
        return !1
    }
}
i(jE, "supportsLayoutShift");
const WE = 2147483647;
let sl = 0, Me = {}, ht, lr;
function qE({recordClsStandaloneSpans: e}) {
    const t = ya();
    if (t && je) {
        t.mark && z.performance.mark("sentry-tracing-init");
        const n = JE()
          , r = YE()
          , s = XE()
          , o = e ? BE() : KE();
        return () => {
            n(),
            r(),
            s(),
            o && o()
        }
    }
    return () => {}
}
i(qE, "startTrackingWebVitals");
function zE() {
    Hn("longtask", ({entries: e}) => {
        const t = Ne();
        if (!t)
            return;
        const {op: n, start_timestamp: r} = oe(t);
        for (const s of e) {
            const o = Ie(je + s.startTime)
              , a = Ie(s.duration);
            n === "navigation" && r && o < r || hn(t, o, o + a, {
                name: "Main UI thread blocked",
                op: "ui.long-task",
                attributes: {
                    [xe]: "auto.ui.browser.metrics"
                }
            })
        }
    }
    )
}
i(zE, "startTrackingLongTasks");
function GE() {
    new PerformanceObserver(t => {
        if (Ne())
            for (const n of t.getEntries()) {
                if (!n.scripts[0])
                    continue;
                const r = Ie(je + n.startTime)
                  , s = Ie(n.duration)
                  , o = {
                    [xe]: "auto.ui.browser.metrics"
                }
                  , a = n.scripts[0]
                  , {invoker: c, invokerType: u, sourceURL: d, sourceFunctionName: p, sourceCharPosition: f} = a;
                o["browser.script.invoker"] = c,
                o["browser.script.invoker_type"] = u,
                d && (o["code.filepath"] = d),
                p && (o["code.function"] = p),
                f !== -1 && (o["browser.script.source_char_position"] = f);
                const g = _n({
                    name: "Main UI thread blocked",
                    op: "ui.long-animation-frame",
                    startTime: r,
                    attributes: o
                });
                g && g.end(r + s)
            }
    }
    ).observe({
        type: "long-animation-frame",
        buffered: !0
    })
}
i(GE, "startTrackingLongAnimationFrames");
function VE() {
    Hn("event", ({entries: e}) => {
        if (Ne()) {
            for (const t of e)
                if (t.name === "click") {
                    const n = Ie(je + t.startTime)
                      , r = Ie(t.duration)
                      , s = {
                        name: xt(t.target),
                        op: `ui.interaction.${t.name}`,
                        startTime: n,
                        attributes: {
                            [xe]: "auto.ui.browser.metrics"
                        }
                    }
                      , o = Md(t.target);
                    o && (s.attributes["ui.component_name"] = o);
                    const a = _n(s);
                    a && a.end(n + r)
                }
        }
    }
    )
}
i(VE, "startTrackingInteractions");
function KE() {
    return ga( ({metric: e}) => {
        const t = e.entries[e.entries.length - 1];
        t && (Ze && N.log(`[Measurements] Adding CLS ${e.value}`),
        Me.cls = {
            value: e.value,
            unit: ""
        },
        lr = t)
    }
    , !0)
}
i(KE, "_trackCLS");
function YE() {
    return Df( ({metric: e}) => {
        const t = e.entries[e.entries.length - 1];
        t && (Ze && N.log("[Measurements] Adding LCP"),
        Me.lcp = {
            value: e.value,
            unit: "millisecond"
        },
        ht = t)
    }
    , !0)
}
i(YE, "_trackLCP");
function JE() {
    return Lf( ({metric: e}) => {
        const t = e.entries[e.entries.length - 1];
        if (!t)
            return;
        const n = Ie(je)
          , r = Ie(t.startTime);
        Ze && N.log("[Measurements] Adding FID"),
        Me.fid = {
            value: e.value,
            unit: "millisecond"
        },
        Me["mark.fid"] = {
            value: n + r,
            unit: "second"
        }
    }
    )
}
i(JE, "_trackFID");
function XE() {
    return ME( ({metric: e}) => {
        e.entries[e.entries.length - 1] && (Ze && N.log("[Measurements] Adding TTFB"),
        Me.ttfb = {
            value: e.value,
            unit: "millisecond"
        })
    }
    )
}
i(XE, "_trackTtfb");
function QE(e, t) {
    const n = ya();
    if (!n || !z.performance.getEntries || !je)
        return;
    Ze && N.log("[Tracing] Adding & adjusting spans using Performance API");
    const r = Ie(je)
      , s = n.getEntries()
      , {op: o, start_timestamp: a} = oe(e);
    if (s.slice(sl).forEach(c => {
        const u = Ie(c.startTime)
          , d = Ie(Math.max(0, c.duration));
        if (!(o === "navigation" && a && r + u < a))
            switch (c.entryType) {
            case "navigation":
                {
                    eb(e, c, r);
                    break
                }
            case "mark":
            case "paint":
            case "measure":
                {
                    ZE(e, c, u, d, r);
                    const p = si()
                      , f = c.startTime < p.firstHiddenTime;
                    c.name === "first-paint" && f && (Ze && N.log("[Measurements] Adding FP"),
                    Me.fp = {
                        value: c.startTime,
                        unit: "millisecond"
                    }),
                    c.name === "first-contentful-paint" && f && (Ze && N.log("[Measurements] Adding FCP"),
                    Me.fcp = {
                        value: c.startTime,
                        unit: "millisecond"
                    });
                    break
                }
            case "resource":
                {
                    nb(e, c, c.name, u, d, r);
                    break
                }
            }
    }
    ),
    sl = Math.max(s.length - 1, 0),
    rb(e),
    o === "pageload") {
        ib(Me);
        const c = Me["mark.fid"];
        c && Me.fid && (hn(e, c.value, c.value + Ie(Me.fid.value), {
            name: "first input delay",
            op: "ui.action",
            attributes: {
                [xe]: "auto.ui.browser.metrics"
            }
        }),
        delete Me["mark.fid"]),
        (!("fcp"in Me) || !t.recordClsOnPageloadSpan) && delete Me.cls,
        Object.entries(Me).forEach( ([u,d]) => {
            CS(u, d.value, d.unit)
        }
        ),
        e.setAttribute("performance.timeOrigin", r),
        e.setAttribute("performance.activationStart", Ar()),
        sb(e)
    }
    ht = void 0,
    lr = void 0,
    Me = {}
}
i(QE, "addPerformanceEntries");
function ZE(e, t, n, r, s) {
    const o = Cr()
      , a = Ie(o ? o.requestStart : 0)
      , c = s + Math.max(n, a)
      , u = s + n
      , d = u + r
      , p = {
        [xe]: "auto.resource.browser.metrics"
    };
    return c !== u && (p["sentry.browser.measure_happened_before_request"] = !0,
    p["sentry.browser.measure_start_time"] = c),
    hn(e, c, d, {
        name: t.name,
        op: t.entryType,
        attributes: p
    }),
    c
}
i(ZE, "_addMeasureSpans");
function eb(e, t, n) {
    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
        ts(e, t, r, n)
    }
    ),
    ts(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
    ts(e, t, "fetch", n, "cache", "domainLookupStart"),
    ts(e, t, "domainLookup", n, "DNS"),
    tb(e, t, n)
}
i(eb, "_addNavigationSpans");
function ts(e, t, n, r, s, o) {
    const a = o ? t[o] : t[`${n}End`]
      , c = t[`${n}Start`];
    !c || !a || hn(e, r + Ie(c), r + Ie(a), {
        op: `browser.${s || n}`,
        name: t.name,
        attributes: {
            [xe]: "auto.ui.browser.metrics"
        }
    })
}
i(ts, "_addPerformanceNavigationTiming");
function tb(e, t, n) {
    const r = n + Ie(t.requestStart)
      , s = n + Ie(t.responseEnd)
      , o = n + Ie(t.responseStart);
    t.responseEnd && (hn(e, r, s, {
        op: "browser.request",
        name: t.name,
        attributes: {
            [xe]: "auto.ui.browser.metrics"
        }
    }),
    hn(e, o, s, {
        op: "browser.response",
        name: t.name,
        attributes: {
            [xe]: "auto.ui.browser.metrics"
        }
    }))
}
i(tb, "_addRequest");
function nb(e, t, n, r, s, o) {
    if (t.initiatorType === "xmlhttprequest" || t.initiatorType === "fetch")
        return;
    const a = un(n)
      , c = {
        [xe]: "auto.resource.browser.metrics"
    };
    Wi(c, t, "transferSize", "http.response_transfer_size"),
    Wi(c, t, "encodedBodySize", "http.response_content_length"),
    Wi(c, t, "decodedBodySize", "http.decoded_response_content_length"),
    t.deliveryType != null && (c["http.response_delivery_type"] = t.deliveryType),
    "renderBlockingStatus"in t && (c["resource.render_blocking_status"] = t.renderBlockingStatus),
    a.protocol && (c["url.scheme"] = a.protocol.split(":").pop()),
    a.host && (c["server.address"] = a.host),
    c["url.same_origin"] = n.includes(z.location.origin);
    const u = o + r
      , d = u + s;
    hn(e, u, d, {
        name: n.replace(z.location.origin, ""),
        op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
        attributes: c
    })
}
i(nb, "_addResourceSpans");
function rb(e) {
    const t = z.navigator;
    if (!t)
        return;
    const n = t.connection;
    n && (n.effectiveType && e.setAttribute("effectiveConnectionType", n.effectiveType),
    n.type && e.setAttribute("connectionType", n.type),
    ji(n.rtt) && (Me["connection.rtt"] = {
        value: n.rtt,
        unit: "millisecond"
    })),
    ji(t.deviceMemory) && e.setAttribute("deviceMemory", `${t.deviceMemory} GB`),
    ji(t.hardwareConcurrency) && e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency))
}
i(rb, "_trackNavigator");
function sb(e) {
    ht && (Ze && N.log("[Measurements] Adding LCP Data"),
    ht.element && e.setAttribute("lcp.element", xt(ht.element)),
    ht.id && e.setAttribute("lcp.id", ht.id),
    ht.url && e.setAttribute("lcp.url", ht.url.trim().slice(0, 200)),
    e.setAttribute("lcp.size", ht.size)),
    lr && lr.sources && (Ze && N.log("[Measurements] Adding CLS Data"),
    lr.sources.forEach( (t, n) => e.setAttribute(`cls.source.${n + 1}`, xt(t.node))))
}
i(sb, "_setWebVitalAttributes");
function Wi(e, t, n, r) {
    const s = t[n];
    s != null && s < WE && (e[r] = s)
}
i(Wi, "setResourceEntrySizeData");
function ib(e) {
    const t = Cr();
    if (!t)
        return;
    const {responseStart: n, requestStart: r} = t;
    r <= n && (Ze && N.log("[Measurements] Adding TTFB Request Time"),
    e["ttfb.requestTime"] = {
        value: n - r,
        unit: "millisecond"
    })
}
i(ib, "_addTtfbRequestTimeToMeasurements");
const ob = 1e3;
let il, ko, Ro;
function Hf(e) {
    const t = "dom";
    Jt(t, e),
    Xt(t, ab)
}
i(Hf, "addClickKeypressInstrumentationHandler");
function ab() {
    if (!z.document)
        return;
    const e = st.bind(null, "dom")
      , t = ol(e, !0);
    z.document.addEventListener("click", t, !1),
    z.document.addEventListener("keypress", t, !1),
    ["EventTarget", "Node"].forEach(n => {
        const r = z[n] && z[n].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (Ge(r, "addEventListener", function(s) {
            return function(o, a, c) {
                if (o === "click" || o == "keypress")
                    try {
                        const u = this
                          , d = u.__sentry_instrumentation_handlers__ = u.__sentry_instrumentation_handlers__ || {}
                          , p = d[o] = d[o] || {
                            refCount: 0
                        };
                        if (!p.handler) {
                            const f = ol(e);
                            p.handler = f,
                            s.call(this, o, f, c)
                        }
                        p.refCount++
                    } catch {}
                return s.call(this, o, a, c)
            }
        }),
        Ge(r, "removeEventListener", function(s) {
            return function(o, a, c) {
                if (o === "click" || o == "keypress")
                    try {
                        const u = this
                          , d = u.__sentry_instrumentation_handlers__ || {}
                          , p = d[o];
                        p && (p.refCount--,
                        p.refCount <= 0 && (s.call(this, o, p.handler, c),
                        p.handler = void 0,
                        delete d[o]),
                        Object.keys(d).length === 0 && delete u.__sentry_instrumentation_handlers__)
                    } catch {}
                return s.call(this, o, a, c)
            }
        }))
    }
    )
}
i(ab, "instrumentDOM");
function cb(e) {
    if (e.type !== ko)
        return !1;
    try {
        if (!e.target || e.target._sentryId !== Ro)
            return !1
    } catch {}
    return !0
}
i(cb, "isSimilarToLastCapturedEvent");
function ub(e, t) {
    return e !== "keypress" ? !1 : !t || !t.tagName ? !0 : !(t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)
}
i(ub, "shouldSkipDOMEvent");
function ol(e, t=!1) {
    return n => {
        if (!n || n._sentryCaptured)
            return;
        const r = lb(n);
        if (ub(n.type, r))
            return;
        it(n, "_sentryCaptured", !0),
        r && !r._sentryId && it(r, "_sentryId", Se());
        const s = n.type === "keypress" ? "input" : n.type;
        cb(n) || (e({
            event: n,
            name: s,
            global: t
        }),
        ko = n.type,
        Ro = r ? r._sentryId : void 0),
        clearTimeout(il),
        il = z.setTimeout( () => {
            Ro = void 0,
            ko = void 0
        }
        , ob)
    }
}
i(ol, "makeDOMEventHandler");
function lb(e) {
    try {
        return e.target
    } catch {
        return null
    }
}
i(lb, "getEventTarget$1");
let ns;
function ii(e) {
    const t = "history";
    Jt(t, e),
    Xt(t, db)
}
i(ii, "addHistoryInstrumentationHandler");
function db() {
    if (!Q_())
        return;
    const e = z.onpopstate;
    z.onpopstate = function(...n) {
        const r = z.location.href
          , s = ns;
        if (ns = r,
        st("history", {
            from: s,
            to: r
        }),
        e)
            try {
                return e.apply(this, n)
            } catch {}
    }
    ;
    function t(n) {
        return function(...r) {
            const s = r.length > 2 ? r[2] : void 0;
            if (s) {
                const o = ns
                  , a = String(s);
                ns = a,
                st("history", {
                    from: o,
                    to: a
                })
            }
            return n.apply(this, r)
        }
    }
    i(t, "historyReplacementFunction"),
    Ge(z.history, "pushState", t),
    Ge(z.history, "replaceState", t)
}
i(db, "instrumentHistory");
const gs = {};
function jf(e) {
    const t = gs[e];
    if (t)
        return t;
    let n = z[e];
    if (lo(n))
        return gs[e] = n.bind(z);
    const r = z.document;
    if (r && typeof r.createElement == "function")
        try {
            const s = r.createElement("iframe");
            s.hidden = !0,
            r.head.appendChild(s);
            const o = s.contentWindow;
            o && o[e] && (n = o[e]),
            r.head.removeChild(s)
        } catch (s) {
            Ze && N.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, s)
        }
    return n && (gs[e] = n.bind(z))
}
i(jf, "getNativeImplementation");
function al(e) {
    gs[e] = void 0
}
i(al, "clearCachedImplementation");
function jn(...e) {
    return jf("setTimeout")(...e)
}
i(jn, "setTimeout$3");
const on = "__sentry_xhr_v3__";
function Wf(e) {
    const t = "xhr";
    Jt(t, e),
    Xt(t, fb)
}
i(Wf, "addXhrInstrumentationHandler");
function fb() {
    if (!z.XMLHttpRequest)
        return;
    const e = XMLHttpRequest.prototype;
    e.open = new Proxy(e.open,{
        apply(t, n, r) {
            const s = He() * 1e3
              , o = Ct(r[0]) ? r[0].toUpperCase() : void 0
              , a = pb(r[1]);
            if (!o || !a)
                return t.apply(n, r);
            n[on] = {
                method: o,
                url: a,
                request_headers: {}
            },
            o === "POST" && a.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
            const c = i( () => {
                const u = n[on];
                if (u && n.readyState === 4) {
                    try {
                        u.status_code = n.status
                    } catch {}
                    const d = {
                        endTimestamp: He() * 1e3,
                        startTimestamp: s,
                        xhr: n
                    };
                    st("xhr", d)
                }
            }
            , "onreadystatechangeHandler");
            return "onreadystatechange"in n && typeof n.onreadystatechange == "function" ? n.onreadystatechange = new Proxy(n.onreadystatechange,{
                apply(u, d, p) {
                    return c(),
                    u.apply(d, p)
                }
            }) : n.addEventListener("readystatechange", c),
            n.setRequestHeader = new Proxy(n.setRequestHeader,{
                apply(u, d, p) {
                    const [f,g] = p
                      , _ = d[on];
                    return _ && Ct(f) && Ct(g) && (_.request_headers[f.toLowerCase()] = g),
                    u.apply(d, p)
                }
            }),
            t.apply(n, r)
        }
    }),
    e.send = new Proxy(e.send,{
        apply(t, n, r) {
            const s = n[on];
            if (!s)
                return t.apply(n, r);
            r[0] !== void 0 && (s.body = r[0]);
            const o = {
                startTimestamp: He() * 1e3,
                xhr: n
            };
            return st("xhr", o),
            t.apply(n, r)
        }
    })
}
i(fb, "instrumentXHR");
function pb(e) {
    if (Ct(e))
        return e;
    try {
        return e.toString()
    } catch {}
}
i(pb, "parseUrl");
const qi = []
  , ys = new Map;
function hb() {
    if (ya() && je) {
        const t = mb();
        return () => {
            t()
        }
    }
    return () => {}
}
i(hb, "startTrackingINP");
const cl = {
    click: "click",
    pointerdown: "click",
    pointerup: "click",
    mousedown: "click",
    mouseup: "click",
    touchstart: "click",
    touchend: "click",
    mouseover: "hover",
    mouseout: "hover",
    mouseenter: "hover",
    mouseleave: "hover",
    pointerover: "hover",
    pointerout: "hover",
    pointerenter: "hover",
    pointerleave: "hover",
    dragstart: "drag",
    dragend: "drag",
    drag: "drag",
    dragenter: "drag",
    dragleave: "drag",
    dragover: "drag",
    drop: "drag",
    keydown: "press",
    keyup: "press",
    keypress: "press",
    input: "press"
};
function mb() {
    return Ff( ({metric: e}) => {
        if (e.value == null)
            return;
        const t = e.entries.find(y => y.duration === e.value && cl[y.name]);
        if (!t)
            return;
        const {interactionId: n} = t
          , r = cl[t.name]
          , s = Ie(je + t.startTime)
          , o = Ie(e.value)
          , a = Ne()
          , c = a ? Pe(a) : void 0
          , d = (n != null ? ys.get(n) : void 0) || c
          , p = d ? oe(d).description : pe().getScopeData().transactionName
          , f = xt(t.target)
          , g = Ae({
            [xe]: "auto.http.browser.inp",
            [pn]: `ui.interaction.${r}`,
            [ca]: t.duration
        })
          , _ = Bf({
            name: f,
            transaction: p,
            attributes: g,
            startTime: s
        });
        Qe([_, "optionalAccess", y => y.addEvent, "call", y => y("inp", {
            [ti]: "millisecond",
            [ni]: e.value
        })]),
        Qe([_, "optionalAccess", y => y.end, "call", y => y(s + o)])
    }
    )
}
i(mb, "_trackINP");
function gb(e) {
    const t = i( ({entries: n}) => {
        const r = Ne()
          , s = r && Pe(r);
        n.forEach(o => {
            if (!$E(o) || !s)
                return;
            const a = o.interactionId;
            if (a != null && !ys.has(a)) {
                if (qi.length > 10) {
                    const c = qi.shift();
                    ys.delete(c)
                }
                qi.push(a),
                ys.set(a, s)
            }
        }
        )
    }
    , "handleEntries");
    Hn("event", t),
    Hn("first-input", t)
}
i(gb, "registerInpInteractionListener");
function yb(e, t=jf("fetch")) {
    let n = 0
      , r = 0;
    function s(o) {
        const a = o.body.length;
        n += a,
        r++;
        const c = {
            body: o.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: e.headers,
            keepalive: n <= 6e4 && r < 15,
            ...e.fetchOptions
        };
        if (!t)
            return al("fetch"),
            As("No fetch implementation available");
        try {
            return t(e.url, c).then(u => (n -= a,
            r--,
            {
                statusCode: u.status,
                headers: {
                    "x-sentry-rate-limits": u.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": u.headers.get("Retry-After")
                }
            }))
        } catch (u) {
            return al("fetch"),
            n -= a,
            r--,
            As(u)
        }
    }
    return i(s, "makeRequest"),
    _v(e, s)
}
i(yb, "makeFetchTransport");
const _b = 30
  , Sb = 50;
function Co(e, t, n, r) {
    const s = {
        filename: e,
        function: t === "<anonymous>" ? fn : t,
        in_app: !0
    };
    return n !== void 0 && (s.lineno = n),
    r !== void 0 && (s.colno = r),
    s
}
i(Co, "createFrame");
const vb = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i
  , Eb = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
  , bb = /\((\S*)(?::(\d+))(?::(\d+))\)/
  , wb = i(e => {
    const t = vb.exec(e);
    if (t) {
        const [,r,s,o] = t;
        return Co(r, fn, +s, +o)
    }
    const n = Eb.exec(e);
    if (n) {
        if (n[2] && n[2].indexOf("eval") === 0) {
            const a = bb.exec(n[2]);
            a && (n[2] = a[1],
            n[3] = a[2],
            n[4] = a[3])
        }
        const [s,o] = qf(n[1] || fn, n[2]);
        return Co(o, s, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
    }
}
, "chromeStackParserFn")
  , Tb = [_b, wb]
  , Ib = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
  , kb = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
  , Rb = i(e => {
    const t = Ib.exec(e);
    if (t) {
        if (t[3] && t[3].indexOf(" > eval") > -1) {
            const o = kb.exec(t[3]);
            o && (t[1] = t[1] || "eval",
            t[3] = o[1],
            t[4] = o[2],
            t[5] = "")
        }
        let r = t[3]
          , s = t[1] || fn;
        return [s,r] = qf(s, r),
        Co(r, s, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
    }
}
, "gecko")
  , Cb = [Sb, Rb]
  , Ab = [Tb, Cb]
  , Ob = Fd(...Ab)
  , qf = i( (e, t) => {
    const n = e.indexOf("safari-extension") !== -1
      , r = e.indexOf("safari-web-extension") !== -1;
    return n || r ? [e.indexOf("@") !== -1 ? e.split("@")[0] : fn, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
}
, "extractSafariExtensionDetails")
  , rs = 1024
  , xb = "Breadcrumbs"
  , Mb = i( (e={}) => {
    const t = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...e
    };
    return {
        name: xb,
        setup(n) {
            t.console && p_(Lb(n)),
            t.dom && Hf(Db(n, t.dom)),
            t.xhr && Wf(Fb(n)),
            t.fetch && Bd(Ub(n)),
            t.history && ii($b(n)),
            t.sentry && n.on("beforeSendEvent", Nb(n))
        }
    }
}
, "_breadcrumbsIntegration")
  , Pb = Mb;
function Nb(e) {
    return i(function(n) {
        Z() === e && Yt({
            category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
            event_id: n.event_id,
            level: n.level,
            message: Bt(n)
        }, {
            event: n
        })
    }, "addSentryBreadcrumb")
}
i(Nb, "_getSentryBreadcrumbHandler");
function Db(e, t) {
    return i(function(r) {
        if (Z() !== e)
            return;
        let s, o, a = typeof t == "object" ? t.serializeAttribute : void 0, c = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : void 0;
        c && c > rs && (ut && N.warn(`\`dom.maxStringLength\` cannot exceed ${rs}, but a value of ${c} was configured. Sentry will use ${rs} instead.`),
        c = rs),
        typeof a == "string" && (a = [a]);
        try {
            const d = r.event
              , p = Bb(d) ? d.target : d;
            s = xt(p, {
                keyAttrs: a,
                maxStringLength: c
            }),
            o = Md(p)
        } catch {
            s = "<unknown>"
        }
        if (s.length === 0)
            return;
        const u = {
            category: `ui.${r.name}`,
            message: s
        };
        o && (u.data = {
            "ui.component_name": o
        }),
        Yt(u, {
            event: r.event,
            name: r.name,
            global: r.global
        })
    }, "_innerDomBreadcrumb")
}
i(Db, "_getDomBreadcrumbHandler");
function Lb(e) {
    return i(function(n) {
        if (Z() !== e)
            return;
        const r = {
            category: "console",
            data: {
                arguments: n.args,
                logger: "console"
            },
            level: Vd(n.level),
            message: _u(n.args, " ")
        };
        if (n.level === "assert")
            if (n.args[0] === !1)
                r.message = `Assertion failed: ${_u(n.args.slice(1), " ") || "console.assert"}`,
                r.data.arguments = n.args.slice(1);
            else
                return;
        Yt(r, {
            input: n.args,
            level: n.level
        })
    }, "_consoleBreadcrumb")
}
i(Lb, "_getConsoleBreadcrumbHandler");
function Fb(e) {
    return i(function(n) {
        if (Z() !== e)
            return;
        const {startTimestamp: r, endTimestamp: s} = n
          , o = n.xhr[on];
        if (!r || !s || !o)
            return;
        const {method: a, url: c, status_code: u, body: d} = o
          , p = {
            method: a,
            url: c,
            status_code: u
        }
          , f = {
            xhr: n.xhr,
            input: d,
            startTimestamp: r,
            endTimestamp: s
        }
          , g = Od(u);
        Yt({
            category: "xhr",
            data: p,
            type: "http",
            level: g
        }, f)
    }, "_xhrBreadcrumb")
}
i(Fb, "_getXhrBreadcrumbHandler");
function Ub(e) {
    return i(function(n) {
        if (Z() !== e)
            return;
        const {startTimestamp: r, endTimestamp: s} = n;
        if (s && !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST"))
            if (n.error) {
                const o = n.fetchData
                  , a = {
                    data: n.error,
                    input: n.args,
                    startTimestamp: r,
                    endTimestamp: s
                };
                Yt({
                    category: "fetch",
                    data: o,
                    level: "error",
                    type: "http"
                }, a)
            } else {
                const o = n.response
                  , a = {
                    ...n.fetchData,
                    status_code: o && o.status
                }
                  , c = {
                    input: n.args,
                    response: o,
                    startTimestamp: r,
                    endTimestamp: s
                }
                  , u = Od(a.status_code);
                Yt({
                    category: "fetch",
                    data: a,
                    type: "http",
                    level: u
                }, c)
            }
    }, "_fetchBreadcrumb")
}
i(Ub, "_getFetchBreadcrumbHandler");
function $b(e) {
    return i(function(n) {
        if (Z() !== e)
            return;
        let r = n.from
          , s = n.to;
        const o = un(K.location.href);
        let a = r ? un(r) : void 0;
        const c = un(s);
        (!a || !a.path) && (a = o),
        o.protocol === c.protocol && o.host === c.host && (s = c.relative),
        o.protocol === a.protocol && o.host === a.host && (r = a.relative),
        Yt({
            category: "navigation",
            data: {
                from: r,
                to: s
            }
        })
    }, "_historyBreadcrumb")
}
i($b, "_getHistoryBreadcrumbHandler");
function Bb(e) {
    return !!e && !!e.target
}
i(Bb, "_isEvent");
const Hb = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
  , jb = "BrowserApiErrors"
  , Wb = i( (e={}) => {
    const t = {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
        ...e
    };
    return {
        name: jb,
        setupOnce() {
            t.setTimeout && Ge(K, "setTimeout", ul),
            t.setInterval && Ge(K, "setInterval", ul),
            t.requestAnimationFrame && Ge(K, "requestAnimationFrame", zb),
            t.XMLHttpRequest && "XMLHttpRequest"in K && Ge(XMLHttpRequest.prototype, "send", Gb);
            const n = t.eventTarget;
            n && (Array.isArray(n) ? n : Hb).forEach(Vb)
        }
    }
}
, "_browserApiErrorsIntegration")
  , qb = Wb;
function ul(e) {
    return function(...t) {
        const n = t[0];
        return t[0] = Bn(n, {
            mechanism: {
                data: {
                    function: Mt(e)
                },
                handled: !1,
                type: "instrument"
            }
        }),
        e.apply(this, t)
    }
}
i(ul, "_wrapTimeFunction");
function zb(e) {
    return function(t) {
        return e.apply(this, [Bn(t, {
            mechanism: {
                data: {
                    function: "requestAnimationFrame",
                    handler: Mt(e)
                },
                handled: !1,
                type: "instrument"
            }
        })])
    }
}
i(zb, "_wrapRAF");
function Gb(e) {
    return function(...t) {
        const n = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(s => {
            s in n && typeof n[s] == "function" && Ge(n, s, function(o) {
                const a = {
                    mechanism: {
                        data: {
                            function: s,
                            handler: Mt(o)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }
                  , c = ta(o);
                return c && (a.mechanism.data.handler = Mt(c)),
                Bn(o, a)
            })
        }
        ),
        e.apply(this, t)
    }
}
i(Gb, "_wrapXHR");
function Vb(e) {
    const t = K
      , n = t[e] && t[e].prototype;
    !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (Ge(n, "addEventListener", function(r) {
        return function(s, o, a) {
            try {
                typeof o.handleEvent == "function" && (o.handleEvent = Bn(o.handleEvent, {
                    mechanism: {
                        data: {
                            function: "handleEvent",
                            handler: Mt(o),
                            target: e
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }))
            } catch {}
            return r.apply(this, [s, Bn(o, {
                mechanism: {
                    data: {
                        function: "addEventListener",
                        handler: Mt(o),
                        target: e
                    },
                    handled: !1,
                    type: "instrument"
                }
            }), a])
        }
    }),
    Ge(n, "removeEventListener", function(r) {
        return function(s, o, a) {
            const c = o;
            try {
                const u = c && c.__sentry_wrapped__;
                u && r.call(this, s, u, a)
            } catch {}
            return r.call(this, s, c, a)
        }
    }))
}
i(Vb, "_wrapEventTarget");
const Kb = "GlobalHandlers"
  , Yb = i( (e={}) => {
    const t = {
        onerror: !0,
        onunhandledrejection: !0,
        ...e
    };
    return {
        name: Kb,
        setupOnce() {
            Error.stackTraceLimit = 50
        },
        setup(n) {
            t.onerror && (Xb(n),
            ll("onerror")),
            t.onunhandledrejection && (Qb(n),
            ll("onunhandledrejection"))
        }
    }
}
, "_globalHandlersIntegration")
  , Jb = Yb;
function Xb(e) {
    jd(t => {
        const {stackParser: n, attachStacktrace: r} = zf();
        if (Z() !== e || kf())
            return;
        const {msg: s, url: o, line: a, column: c, error: u} = t
          , d = tw(ha(n, u || s, void 0, r, !1), o, a, c);
        d.level = "error",
        yf(d, {
            originalException: u,
            mechanism: {
                handled: !1,
                type: "onerror"
            }
        })
    }
    )
}
i(Xb, "_installGlobalOnErrorHandler");
function Qb(e) {
    Wd(t => {
        const {stackParser: n, attachStacktrace: r} = zf();
        if (Z() !== e || kf())
            return;
        const s = Zb(t)
          , o = ea(s) ? ew(s) : ha(n, s, void 0, r, !0);
        o.level = "error",
        yf(o, {
            originalException: s,
            mechanism: {
                handled: !1,
                type: "onunhandledrejection"
            }
        })
    }
    )
}
i(Qb, "_installGlobalOnUnhandledRejectionHandler");
function Zb(e) {
    if (ea(e))
        return e;
    try {
        if ("reason"in e)
            return e.reason;
        if ("detail"in e && "reason"in e.detail)
            return e.detail.reason
    } catch {}
    return e
}
i(Zb, "_getUnhandledRejectionError");
function ew(e) {
    return {
        exception: {
            values: [{
                type: "UnhandledRejection",
                value: `Non-Error promise rejection captured with value: ${String(e)}`
            }]
        }
    }
}
i(ew, "_eventFromRejectionWithPrimitive");
function tw(e, t, n, r) {
    const s = e.exception = e.exception || {}
      , o = s.values = s.values || []
      , a = o[0] = o[0] || {}
      , c = a.stacktrace = a.stacktrace || {}
      , u = c.frames = c.frames || []
      , d = isNaN(parseInt(r, 10)) ? void 0 : r
      , p = isNaN(parseInt(n, 10)) ? void 0 : n
      , f = Ct(t) && t.length > 0 ? t : xd();
    return u.length === 0 && u.push({
        colno: d,
        filename: f,
        function: fn,
        in_app: !0,
        lineno: p
    }),
    e
}
i(tw, "_enhanceEventWithInitialFrame");
function ll(e) {
    ut && N.log(`Global Handler attached: ${e}`)
}
i(ll, "globalHandlerLog");
function zf() {
    const e = Z();
    return e && e.getOptions() || {
        stackParser: () => [],
        attachStacktrace: !1
    }
}
i(zf, "getOptions");
const nw = () => ({
    name: "HttpContext",
    preprocessEvent(e) {
        if (!K.navigator && !K.location && !K.document)
            return;
        const t = e.request && e.request.url || K.location && K.location.href
          , {referrer: n} = K.document || {}
          , {userAgent: r} = K.navigator || {}
          , s = {
            ...e.request && e.request.headers,
            ...n && {
                Referer: n
            },
            ...r && {
                "User-Agent": r
            }
        }
          , o = {
            ...e.request,
            ...t && {
                url: t
            },
            headers: s
        };
        e.request = o
    }
})
  , rw = "cause"
  , sw = 5
  , iw = "LinkedErrors"
  , ow = i( (e={}) => {
    const t = e.limit || sw
      , n = e.key || rw;
    return {
        name: iw,
        preprocessEvent(r, s, o) {
            const a = o.getOptions();
            Jy(fa, a.stackParser, a.maxValueLength, n, t, r, s)
        }
    }
}
, "_linkedErrorsIntegration")
  , Gf = ow;
function aw(e) {
    return [Av(), Iv(), qb(), Pb(), Jb(), Gf(), jv(), nw()]
}
i(aw, "getDefaultIntegrations");
function cw(e={}) {
    const t = {
        defaultIntegrations: aw(),
        release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : K.SENTRY_RELEASE && K.SENTRY_RELEASE.id ? K.SENTRY_RELEASE.id : void 0,
        autoSessionTracking: !0,
        sendClientReports: !0
    };
    return e.defaultIntegrations == null && delete e.defaultIntegrations,
    {
        ...t,
        ...e
    }
}
i(cw, "applyDefaultOptions");
function uw() {
    const e = typeof K.window < "u" && K;
    if (!e)
        return !1;
    const t = e.chrome ? "chrome" : "browser"
      , n = e[t]
      , r = n && n.runtime && n.runtime.id
      , s = K.location && K.location.href || ""
      , o = ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"]
      , a = !!r && K === K.top && o.some(u => s.startsWith(`${u}//`))
      , c = typeof e.nw < "u";
    return !!r && !a && !c
}
i(uw, "shouldShowBrowserExtensionError");
function lw(e={}) {
    const t = cw(e);
    if (!t.skipBrowserExtensionCheck && uw()) {
        Kn( () => {
            console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
        }
        );
        return
    }
    ut && (Ud() || N.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."));
    const n = {
        ...t,
        stackParser: d_(t.stackParser || Ob),
        integrations: lv(t),
        transport: t.transport || yb
    }
      , r = mv(lE, n);
    return t.autoSessionTracking && dw(),
    r
}
i(lw, "init$1");
function dw() {
    if (typeof K.document > "u") {
        ut && N.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
        return
    }
    zu({
        ignoreDuration: !0
    }),
    Gu(),
    ii( ({from: e, to: t}) => {
        e !== void 0 && e !== t && (zu({
            ignoreDuration: !0
        }),
        Gu())
    }
    )
}
i(dw, "startSessionTracking");
const me = ne
  , _a = "sentryReplaySession"
  , fw = "replay_event"
  , Sa = "Unable to send Replay"
  , pw = 3e5
  , hw = 9e5
  , mw = 5e3
  , gw = 5500
  , yw = 6e4
  , _w = 5e3
  , Sw = 3
  , dl = 15e4
  , ss = 5e3
  , vw = 3e3
  , Ew = 300
  , va = 2e7
  , bw = 4999
  , ww = 15e3
  , fl = 36e5;
function Ao(e, t) {
    return e ?? t()
}
i(Ao, "_nullishCoalesce$1");
function _r(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const s = e[r]
          , o = e[r + 1];
        if (r += 2,
        (s === "optionalAccess" || s === "optionalCall") && n == null)
            return;
        s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...a) => n.call(t, ...a)),
        t = void 0)
    }
    return n
}
i(_r, "_optionalChain$5");
var Ce;
(function(e) {
    e[e.Document = 0] = "Document",
    e[e.DocumentType = 1] = "DocumentType",
    e[e.Element = 2] = "Element",
    e[e.Text = 3] = "Text",
    e[e.CDATA = 4] = "CDATA",
    e[e.Comment = 5] = "Comment"
}
)(Ce || (Ce = {}));
function Tw(e) {
    return e.nodeType === e.ELEMENT_NODE
}
i(Tw, "isElement$1");
function dr(e) {
    const t = _r([e, "optionalAccess", n => n.host]);
    return _r([t, "optionalAccess", n => n.shadowRoot]) === e
}
i(dr, "isShadowRoot");
function fr(e) {
    return Object.prototype.toString.call(e) === "[object ShadowRoot]"
}
i(fr, "isNativeShadowDom");
function Iw(e) {
    return e.includes(" background-clip: text;") && !e.includes(" -webkit-background-clip: text;") && (e = e.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")),
    e
}
i(Iw, "fixBrowserCompatibilityIssuesInCSS");
function kw(e) {
    const {cssText: t} = e;
    if (t.split('"').length < 3)
        return t;
    const n = ["@import", `url(${JSON.stringify(e.href)})`];
    return e.layerName === "" ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`),
    e.supportsText && n.push(`supports(${e.supportsText})`),
    e.media.length && n.push(e.media.mediaText),
    n.join(" ") + ";"
}
i(kw, "escapeImportStatement");
function Ls(e) {
    try {
        const t = e.rules || e.cssRules;
        return t ? Iw(Array.from(t, Vf).join("")) : null
    } catch {
        return null
    }
}
i(Ls, "stringifyStylesheet");
function Vf(e) {
    let t;
    if (Cw(e))
        try {
            t = Ls(e.styleSheet) || kw(e)
        } catch {}
    else if (Aw(e) && e.selectorText.includes(":"))
        return Rw(e.cssText);
    return t || e.cssText
}
i(Vf, "stringifyRule");
function Rw(e) {
    const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
    return e.replace(t, "$1\\$2")
}
i(Rw, "fixSafariColons");
function Cw(e) {
    return "styleSheet"in e
}
i(Cw, "isCSSImportRule");
function Aw(e) {
    return "selectorText"in e
}
i(Aw, "isCSSStyleRule");
class Kf {
    static{i(this, "Mirror")
    }constructor() {
        this.idNodeMap = new Map,
        this.nodeMetaMap = new WeakMap
    }
    getId(t) {
        if (!t)
            return -1;
        const n = _r([this, "access", r => r.getMeta, "call", r => r(t), "optionalAccess", r => r.id]);
        return Ao(n, () => -1)
    }
    getNode(t) {
        return this.idNodeMap.get(t) || null
    }
    getIds() {
        return Array.from(this.idNodeMap.keys())
    }
    getMeta(t) {
        return this.nodeMetaMap.get(t) || null
    }
    removeNodeFromMap(t) {
        const n = this.getId(t);
        this.idNodeMap.delete(n),
        t.childNodes && t.childNodes.forEach(r => this.removeNodeFromMap(r))
    }
    has(t) {
        return this.idNodeMap.has(t)
    }
    hasNode(t) {
        return this.nodeMetaMap.has(t)
    }
    add(t, n) {
        const r = n.id;
        this.idNodeMap.set(r, t),
        this.nodeMetaMap.set(t, n)
    }
    replace(t, n) {
        const r = this.getNode(t);
        if (r) {
            const s = this.nodeMetaMap.get(r);
            s && this.nodeMetaMap.set(n, s)
        }
        this.idNodeMap.set(t, n)
    }
    reset() {
        this.idNodeMap = new Map,
        this.nodeMetaMap = new WeakMap
    }
}
function Ow() {
    return new Kf
}
i(Ow, "createMirror");
function oi({maskInputOptions: e, tagName: t, type: n}) {
    return t === "OPTION" && (t = "SELECT"),
    !!(e[t.toLowerCase()] || n && e[n] || n === "password" || t === "INPUT" && !n && e.text)
}
i(oi, "shouldMaskInput");
function Sr({isMasked: e, element: t, value: n, maskInputFn: r}) {
    let s = n || "";
    return e ? (r && (s = r(s, t)),
    "*".repeat(s.length)) : s
}
i(Sr, "maskInputValue");
function Wn(e) {
    return e.toLowerCase()
}
i(Wn, "toLowerCase");
function Oo(e) {
    return e.toUpperCase()
}
i(Oo, "toUpperCase");
const pl = "__rrweb_original__";
function xw(e) {
    const t = e.getContext("2d");
    if (!t)
        return !0;
    const n = 50;
    for (let r = 0; r < e.width; r += n)
        for (let s = 0; s < e.height; s += n) {
            const o = t.getImageData
              , a = pl in o ? o[pl] : o;
            if (new Uint32Array(a.call(t, r, s, Math.min(n, e.width - r), Math.min(n, e.height - s)).data.buffer).some(u => u !== 0))
                return !1
        }
    return !0
}
i(xw, "is2DCanvasBlank");
function Ea(e) {
    const t = e.type;
    return e.hasAttribute("data-rr-is-password") ? "password" : t ? Wn(t) : null
}
i(Ea, "getInputType");
function Fs(e, t, n) {
    return t === "INPUT" && (n === "radio" || n === "checkbox") ? e.getAttribute("value") || "" : e.value
}
i(Fs, "getInputValue");
function Yf(e, t) {
    let n;
    try {
        n = new URL(e,Ao(t, () => window.location.href))
    } catch {
        return null
    }
    const r = /\.([0-9a-z]+)(?:$)/i
      , s = n.pathname.match(r);
    return Ao(_r([s, "optionalAccess", o => o[1]]), () => null)
}
i(Yf, "extractFileExtension");
const hl = {};
function Jf(e) {
    const t = hl[e];
    if (t)
        return t;
    const n = window.document;
    let r = window[e];
    if (n && typeof n.createElement == "function")
        try {
            const s = n.createElement("iframe");
            s.hidden = !0,
            n.head.appendChild(s);
            const o = s.contentWindow;
            o && o[e] && (r = o[e]),
            n.head.removeChild(s)
        } catch {}
    return hl[e] = r.bind(window)
}
i(Jf, "getImplementation$1");
function xo(...e) {
    return Jf("setTimeout")(...e)
}
i(xo, "setTimeout$2");
function Xf(...e) {
    return Jf("clearTimeout")(...e)
}
i(Xf, "clearTimeout$2");
let Mw = 1;
const Pw = new RegExp("[^a-z0-9-_:]")
  , vr = -2;
function ba() {
    return Mw++
}
i(ba, "genId");
function Nw(e) {
    if (e instanceof HTMLFormElement)
        return "form";
    const t = Wn(e.tagName);
    return Pw.test(t) ? "div" : t
}
i(Nw, "getValidTagName");
function Dw(e) {
    let t = "";
    return e.indexOf("//") > -1 ? t = e.split("/").slice(0, 3).join("/") : t = e.split("/")[0],
    t = t.split("?")[0],
    t
}
i(Dw, "extractOrigin");
let kn, ml;
const Lw = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm
  , Fw = /^(?:[a-z+]+:)?\/\//i
  , Uw = /^www\..*/i
  , $w = /^(data:)([^,]*),(.*)/i;
function Us(e, t) {
    return (e || "").replace(Lw, (n, r, s, o, a, c) => {
        const u = s || a || c
          , d = r || o || "";
        if (!u)
            return n;
        if (Fw.test(u) || Uw.test(u))
            return `url(${d}${u}${d})`;
        if ($w.test(u))
            return `url(${d}${u}${d})`;
        if (u[0] === "/")
            return `url(${d}${Dw(t) + u}${d})`;
        const p = t.split("/")
          , f = u.split("/");
        p.pop();
        for (const g of f)
            g !== "." && (g === ".." ? p.pop() : p.push(g));
        return `url(${d}${p.join("/")}${d})`
    }
    )
}
i(Us, "absoluteToStylesheet");
const Bw = /^[^ \t\n\r\u000c]+/
  , Hw = /^[, \t\n\r\u000c]+/;
function jw(e, t) {
    if (t.trim() === "")
        return t;
    let n = 0;
    function r(o) {
        let a;
        const c = o.exec(t.substring(n));
        return c ? (a = c[0],
        n += a.length,
        a) : ""
    }
    i(r, "collectCharacters");
    const s = [];
    for (; r(Hw),
    !(n >= t.length); ) {
        let o = r(Bw);
        if (o.slice(-1) === ",")
            o = On(e, o.substring(0, o.length - 1)),
            s.push(o);
        else {
            let a = "";
            o = On(e, o);
            let c = !1;
            for (; ; ) {
                const u = t.charAt(n);
                if (u === "") {
                    s.push((o + a).trim());
                    break
                } else if (c)
                    u === ")" && (c = !1);
                else if (u === ",") {
                    n += 1,
                    s.push((o + a).trim());
                    break
                } else
                    u === "(" && (c = !0);
                a += u,
                n += 1
            }
        }
    }
    return s.join(", ")
}
i(jw, "getAbsoluteSrcsetString");
const gl = new WeakMap;
function On(e, t) {
    return !t || t.trim() === "" ? t : ai(e, t)
}
i(On, "absoluteToDoc");
function Ww(e) {
    return !!(e.tagName === "svg" || e.ownerSVGElement)
}
i(Ww, "isSVGElement");
function ai(e, t) {
    let n = gl.get(e);
    if (n || (n = e.createElement("a"),
    gl.set(e, n)),
    !t)
        t = "";
    else if (t.startsWith("blob:") || t.startsWith("data:"))
        return t;
    return n.setAttribute("href", t),
    n.href
}
i(ai, "getHref");
function Qf(e, t, n, r, s, o) {
    return r && (n === "src" || n === "href" && !(t === "use" && r[0] === "#") || n === "xlink:href" && r[0] !== "#" || n === "background" && (t === "table" || t === "td" || t === "th") ? On(e, r) : n === "srcset" ? jw(e, r) : n === "style" ? Us(r, ai(e)) : t === "object" && n === "data" ? On(e, r) : typeof o == "function" ? o(n, r, s) : r)
}
i(Qf, "transformAttribute");
function Zf(e, t, n) {
    return (e === "video" || e === "audio") && t === "autoplay"
}
i(Zf, "ignoreAttribute");
function qw(e, t, n, r) {
    try {
        if (r && e.matches(r))
            return !1;
        if (typeof t == "string") {
            if (e.classList.contains(t))
                return !0
        } else
            for (let s = e.classList.length; s--; ) {
                const o = e.classList[s];
                if (t.test(o))
                    return !0
            }
        if (n)
            return e.matches(n)
    } catch {}
    return !1
}
i(qw, "_isBlockedElement");
function zw(e, t) {
    for (let n = e.classList.length; n--; ) {
        const r = e.classList[n];
        if (t.test(r))
            return !0
    }
    return !1
}
i(zw, "elementClassMatchesRegex");
function an(e, t, n=1 / 0, r=0) {
    return !e || e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : an(e.parentNode, t, n, r + 1)
}
i(an, "distanceToMatch");
function xn(e, t) {
    return n => {
        const r = n;
        if (r === null)
            return !1;
        try {
            if (e) {
                if (typeof e == "string") {
                    if (r.matches(`.${e}`))
                        return !0
                } else if (zw(r, e))
                    return !0
            }
            return !!(t && r.matches(t))
        } catch {
            return !1
        }
    }
}
i(xn, "createMatchPredicate");
function qn(e, t, n, r, s, o) {
    try {
        const a = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (a === null)
            return !1;
        if (a.tagName === "INPUT") {
            const d = a.getAttribute("autocomplete");
            if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(d))
                return !0
        }
        let c = -1
          , u = -1;
        if (o) {
            if (u = an(a, xn(r, s)),
            u < 0)
                return !0;
            c = an(a, xn(t, n), u >= 0 ? u : 1 / 0)
        } else {
            if (c = an(a, xn(t, n)),
            c < 0)
                return !1;
            u = an(a, xn(r, s), c >= 0 ? c : 1 / 0)
        }
        return c >= 0 ? u >= 0 ? c <= u : !0 : u >= 0 ? !1 : !!o
    } catch {}
    return !!o
}
i(qn, "needMaskingText");
function Gw(e, t, n) {
    const r = e.contentWindow;
    if (!r)
        return;
    let s = !1, o;
    try {
        o = r.document.readyState
    } catch {
        return
    }
    if (o !== "complete") {
        const c = xo( () => {
            s || (t(),
            s = !0)
        }
        , n);
        e.addEventListener("load", () => {
            Xf(c),
            s = !0,
            t()
        }
        );
        return
    }
    const a = "about:blank";
    if (r.location.href !== a || e.src === a || e.src === "")
        return xo(t, 0),
        e.addEventListener("load", t);
    e.addEventListener("load", t)
}
i(Gw, "onceIframeLoaded");
function Vw(e, t, n) {
    let r = !1, s;
    try {
        s = e.sheet
    } catch {
        return
    }
    if (s)
        return;
    const o = xo( () => {
        r || (t(),
        r = !0)
    }
    , n);
    e.addEventListener("load", () => {
        Xf(o),
        r = !0,
        t()
    }
    )
}
i(Vw, "onceStylesheetLoaded");
function Kw(e, t) {
    const {doc: n, mirror: r, blockClass: s, blockSelector: o, unblockSelector: a, maskAllText: c, maskAttributeFn: u, maskTextClass: d, unmaskTextClass: p, maskTextSelector: f, unmaskTextSelector: g, inlineStylesheet: _, maskInputOptions: y={}, maskTextFn: v, maskInputFn: E, dataURLOptions: k={}, inlineImages: M, recordCanvas: P, keepIframeSrcFn: L, newlyAddedElement: B=!1} = t
      , A = Yw(n, r);
    switch (e.nodeType) {
    case e.DOCUMENT_NODE:
        return e.compatMode !== "CSS1Compat" ? {
            type: Ce.Document,
            childNodes: [],
            compatMode: e.compatMode
        } : {
            type: Ce.Document,
            childNodes: []
        };
    case e.DOCUMENT_TYPE_NODE:
        return {
            type: Ce.DocumentType,
            name: e.name,
            publicId: e.publicId,
            systemId: e.systemId,
            rootId: A
        };
    case e.ELEMENT_NODE:
        return Xw(e, {
            doc: n,
            blockClass: s,
            blockSelector: o,
            unblockSelector: a,
            inlineStylesheet: _,
            maskAttributeFn: u,
            maskInputOptions: y,
            maskInputFn: E,
            dataURLOptions: k,
            inlineImages: M,
            recordCanvas: P,
            keepIframeSrcFn: L,
            newlyAddedElement: B,
            rootId: A,
            maskAllText: c,
            maskTextClass: d,
            unmaskTextClass: p,
            maskTextSelector: f,
            unmaskTextSelector: g
        });
    case e.TEXT_NODE:
        return Jw(e, {
            doc: n,
            maskAllText: c,
            maskTextClass: d,
            unmaskTextClass: p,
            maskTextSelector: f,
            unmaskTextSelector: g,
            maskTextFn: v,
            maskInputOptions: y,
            maskInputFn: E,
            rootId: A
        });
    case e.CDATA_SECTION_NODE:
        return {
            type: Ce.CDATA,
            textContent: "",
            rootId: A
        };
    case e.COMMENT_NODE:
        return {
            type: Ce.Comment,
            textContent: e.textContent || "",
            rootId: A
        };
    default:
        return !1
    }
}
i(Kw, "serializeNode");
function Yw(e, t) {
    if (!t.hasNode(e))
        return;
    const n = t.getId(e);
    return n === 1 ? void 0 : n
}
i(Yw, "getRootId");
function Jw(e, t) {
    const {maskAllText: n, maskTextClass: r, unmaskTextClass: s, maskTextSelector: o, unmaskTextSelector: a, maskTextFn: c, maskInputOptions: u, maskInputFn: d, rootId: p} = t
      , f = e.parentNode && e.parentNode.tagName;
    let g = e.textContent;
    const _ = f === "STYLE" ? !0 : void 0
      , y = f === "SCRIPT" ? !0 : void 0
      , v = f === "TEXTAREA" ? !0 : void 0;
    if (_ && g) {
        try {
            e.nextSibling || e.previousSibling || _r([e, "access", k => k.parentNode, "access", k => k.sheet, "optionalAccess", k => k.cssRules]) && (g = Ls(e.parentNode.sheet))
        } catch (k) {
            `${k}`
        }
        g = Us(g, ai(t.doc))
    }
    y && (g = "SCRIPT_PLACEHOLDER");
    const E = qn(e, r, o, s, a, n);
    if (!_ && !y && !v && g && E && (g = c ? c(g, e.parentElement) : g.replace(/[\S]/g, "*")),
    v && g && (u.textarea || E) && (g = d ? d(g, e.parentNode) : g.replace(/[\S]/g, "*")),
    f === "OPTION" && g) {
        const k = oi({
            type: null,
            tagName: f,
            maskInputOptions: u
        });
        g = Sr({
            isMasked: qn(e, r, o, s, a, k),
            element: e,
            value: g,
            maskInputFn: d
        })
    }
    return {
        type: Ce.Text,
        textContent: g || "",
        isStyle: _,
        rootId: p
    }
}
i(Jw, "serializeTextNode");
function Xw(e, t) {
    const {doc: n, blockClass: r, blockSelector: s, unblockSelector: o, inlineStylesheet: a, maskInputOptions: c={}, maskAttributeFn: u, maskInputFn: d, dataURLOptions: p={}, inlineImages: f, recordCanvas: g, keepIframeSrcFn: _, newlyAddedElement: y=!1, rootId: v, maskAllText: E, maskTextClass: k, unmaskTextClass: M, maskTextSelector: P, unmaskTextSelector: L} = t
      , B = qw(e, r, s, o)
      , A = Nw(e);
    let R = {};
    const x = e.attributes.length;
    for (let D = 0; D < x; D++) {
        const U = e.attributes[D];
        U.name && !Zf(A, U.name, U.value) && (R[U.name] = Qf(n, A, Wn(U.name), U.value, e, u))
    }
    if (A === "link" && a) {
        const D = Array.from(n.styleSheets).find(W => W.href === e.href);
        let U = null;
        D && (U = Ls(D)),
        U && (delete R.rel,
        delete R.href,
        R._cssText = Us(U, D.href))
    }
    if (A === "style" && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
        const D = Ls(e.sheet);
        D && (R._cssText = Us(D, ai(n)))
    }
    if (A === "input" || A === "textarea" || A === "select" || A === "option") {
        const D = e
          , U = Ea(D)
          , W = Fs(D, Oo(A), U)
          , re = D.checked;
        if (U !== "submit" && U !== "button" && W) {
            const le = qn(D, k, P, M, L, oi({
                type: U,
                tagName: Oo(A),
                maskInputOptions: c
            }));
            R.value = Sr({
                isMasked: le,
                element: D,
                value: W,
                maskInputFn: d
            })
        }
        re && (R.checked = re)
    }
    if (A === "option" && (e.selected && !c.select ? R.selected = !0 : delete R.selected),
    A === "canvas" && g) {
        if (e.__context === "2d")
            xw(e) || (R.rr_dataURL = e.toDataURL(p.type, p.quality));
        else if (!("__context"in e)) {
            const D = e.toDataURL(p.type, p.quality)
              , U = n.createElement("canvas");
            U.width = e.width,
            U.height = e.height;
            const W = U.toDataURL(p.type, p.quality);
            D !== W && (R.rr_dataURL = D)
        }
    }
    if (A === "img" && f) {
        kn || (kn = n.createElement("canvas"),
        ml = kn.getContext("2d"));
        const D = e
          , U = D.currentSrc || D.getAttribute("src") || "<unknown-src>"
          , W = D.crossOrigin
          , re = i( () => {
            D.removeEventListener("load", re);
            try {
                kn.width = D.naturalWidth,
                kn.height = D.naturalHeight,
                ml.drawImage(D, 0, 0),
                R.rr_dataURL = kn.toDataURL(p.type, p.quality)
            } catch (le) {
                if (D.crossOrigin !== "anonymous") {
                    D.crossOrigin = "anonymous",
                    D.complete && D.naturalWidth !== 0 ? re() : D.addEventListener("load", re);
                    return
                } else
                    `${U}${le}`
            }
            D.crossOrigin === "anonymous" && (W ? R.crossOrigin = W : D.removeAttribute("crossorigin"))
        }
        , "recordInlineImage");
        D.complete && D.naturalWidth !== 0 ? re() : D.addEventListener("load", re)
    }
    if ((A === "audio" || A === "video") && (R.rr_mediaState = e.paused ? "paused" : "played",
    R.rr_mediaCurrentTime = e.currentTime),
    y || (e.scrollLeft && (R.rr_scrollLeft = e.scrollLeft),
    e.scrollTop && (R.rr_scrollTop = e.scrollTop)),
    B) {
        const {width: D, height: U} = e.getBoundingClientRect();
        R = {
            class: R.class,
            rr_width: `${D}px`,
            rr_height: `${U}px`
        }
    }
    A === "iframe" && !_(R.src) && (!B && !e.contentDocument && (R.rr_src = R.src),
    delete R.src);
    let H;
    try {
        customElements.get(A) && (H = !0)
    } catch {}
    return {
        type: Ce.Element,
        tagName: A,
        attributes: R,
        childNodes: [],
        isSVG: Ww(e) || void 0,
        needBlock: B,
        rootId: v,
        isCustom: H
    }
}
i(Xw, "serializeElementNode");
function he(e) {
    return e == null ? "" : e.toLowerCase()
}
i(he, "lowerIfExists");
function Qw(e, t) {
    if (t.comment && e.type === Ce.Comment)
        return !0;
    if (e.type === Ce.Element) {
        if (t.script && (e.tagName === "script" || e.tagName === "link" && (e.attributes.rel === "preload" || e.attributes.rel === "modulepreload") && e.attributes.as === "script" || e.tagName === "link" && e.attributes.rel === "prefetch" && typeof e.attributes.href == "string" && Yf(e.attributes.href) === "js"))
            return !0;
        if (t.headFavicon && (e.tagName === "link" && e.attributes.rel === "shortcut icon" || e.tagName === "meta" && (he(e.attributes.name).match(/^msapplication-tile(image|color)$/) || he(e.attributes.name) === "application-name" || he(e.attributes.rel) === "icon" || he(e.attributes.rel) === "apple-touch-icon" || he(e.attributes.rel) === "shortcut icon")))
            return !0;
        if (e.tagName === "meta") {
            if (t.headMetaDescKeywords && he(e.attributes.name).match(/^description|keywords$/))
                return !0;
            if (t.headMetaSocial && (he(e.attributes.property).match(/^(og|twitter|fb):/) || he(e.attributes.name).match(/^(og|twitter):/) || he(e.attributes.name) === "pinterest"))
                return !0;
            if (t.headMetaRobots && (he(e.attributes.name) === "robots" || he(e.attributes.name) === "googlebot" || he(e.attributes.name) === "bingbot"))
                return !0;
            if (t.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0)
                return !0;
            if (t.headMetaAuthorship && (he(e.attributes.name) === "author" || he(e.attributes.name) === "generator" || he(e.attributes.name) === "framework" || he(e.attributes.name) === "publisher" || he(e.attributes.name) === "progid" || he(e.attributes.property).match(/^article:/) || he(e.attributes.property).match(/^product:/)))
                return !0;
            if (t.headMetaVerification && (he(e.attributes.name) === "google-site-verification" || he(e.attributes.name) === "yandex-verification" || he(e.attributes.name) === "csrf-token" || he(e.attributes.name) === "p:domain_verify" || he(e.attributes.name) === "verify-v1" || he(e.attributes.name) === "verification" || he(e.attributes.name) === "shopify-checkout-api-token"))
                return !0
        }
    }
    return !1
}
i(Qw, "slimDOMExcluded");
function Mn(e, t) {
    const {doc: n, mirror: r, blockClass: s, blockSelector: o, unblockSelector: a, maskAllText: c, maskTextClass: u, unmaskTextClass: d, maskTextSelector: p, unmaskTextSelector: f, skipChild: g=!1, inlineStylesheet: _=!0, maskInputOptions: y={}, maskAttributeFn: v, maskTextFn: E, maskInputFn: k, slimDOMOptions: M, dataURLOptions: P={}, inlineImages: L=!1, recordCanvas: B=!1, onSerialize: A, onIframeLoad: R, iframeLoadTimeout: x=5e3, onStylesheetLoad: H, stylesheetLoadTimeout: D=5e3, keepIframeSrcFn: U=i( () => !1, "keepIframeSrcFn"), newlyAddedElement: W=!1} = t;
    let {preserveWhiteSpace: re=!0} = t;
    const le = Kw(e, {
        doc: n,
        mirror: r,
        blockClass: s,
        blockSelector: o,
        maskAllText: c,
        unblockSelector: a,
        maskTextClass: u,
        unmaskTextClass: d,
        maskTextSelector: p,
        unmaskTextSelector: f,
        inlineStylesheet: _,
        maskInputOptions: y,
        maskAttributeFn: v,
        maskTextFn: E,
        maskInputFn: k,
        dataURLOptions: P,
        inlineImages: L,
        recordCanvas: B,
        keepIframeSrcFn: U,
        newlyAddedElement: W
    });
    if (!le)
        return null;
    let fe;
    r.hasNode(e) ? fe = r.getId(e) : Qw(le, M) || !re && le.type === Ce.Text && !le.isStyle && !le.textContent.replace(/^\s+|\s+$/gm, "").length ? fe = vr : fe = ba();
    const V = Object.assign(le, {
        id: fe
    });
    if (r.add(e, V),
    fe === vr)
        return null;
    A && A(e);
    let be = !g;
    if (V.type === Ce.Element) {
        be = be && !V.needBlock,
        delete V.needBlock;
        const te = e.shadowRoot;
        te && fr(te) && (V.isShadowHost = !0)
    }
    if ((V.type === Ce.Document || V.type === Ce.Element) && be) {
        M.headWhitespace && V.type === Ce.Element && V.tagName === "head" && (re = !1);
        const te = {
            doc: n,
            mirror: r,
            blockClass: s,
            blockSelector: o,
            maskAllText: c,
            unblockSelector: a,
            maskTextClass: u,
            unmaskTextClass: d,
            maskTextSelector: p,
            unmaskTextSelector: f,
            skipChild: g,
            inlineStylesheet: _,
            maskInputOptions: y,
            maskAttributeFn: v,
            maskTextFn: E,
            maskInputFn: k,
            slimDOMOptions: M,
            dataURLOptions: P,
            inlineImages: L,
            recordCanvas: B,
            preserveWhiteSpace: re,
            onSerialize: A,
            onIframeLoad: R,
            iframeLoadTimeout: x,
            onStylesheetLoad: H,
            stylesheetLoadTimeout: D,
            keepIframeSrcFn: U
        };
        for (const ke of Array.from(e.childNodes)) {
            const ve = Mn(ke, te);
            ve && V.childNodes.push(ve)
        }
        if (Tw(e) && e.shadowRoot)
            for (const ke of Array.from(e.shadowRoot.childNodes)) {
                const ve = Mn(ke, te);
                ve && (fr(e.shadowRoot) && (ve.isShadow = !0),
                V.childNodes.push(ve))
            }
    }
    return e.parentNode && dr(e.parentNode) && fr(e.parentNode) && (V.isShadow = !0),
    V.type === Ce.Element && V.tagName === "iframe" && Gw(e, () => {
        const te = e.contentDocument;
        if (te && R) {
            const ke = Mn(te, {
                doc: te,
                mirror: r,
                blockClass: s,
                blockSelector: o,
                unblockSelector: a,
                maskAllText: c,
                maskTextClass: u,
                unmaskTextClass: d,
                maskTextSelector: p,
                unmaskTextSelector: f,
                skipChild: !1,
                inlineStylesheet: _,
                maskInputOptions: y,
                maskAttributeFn: v,
                maskTextFn: E,
                maskInputFn: k,
                slimDOMOptions: M,
                dataURLOptions: P,
                inlineImages: L,
                recordCanvas: B,
                preserveWhiteSpace: re,
                onSerialize: A,
                onIframeLoad: R,
                iframeLoadTimeout: x,
                onStylesheetLoad: H,
                stylesheetLoadTimeout: D,
                keepIframeSrcFn: U
            });
            ke && R(e, ke)
        }
    }
    , x),
    V.type === Ce.Element && V.tagName === "link" && typeof V.attributes.rel == "string" && (V.attributes.rel === "stylesheet" || V.attributes.rel === "preload" && typeof V.attributes.href == "string" && Yf(V.attributes.href) === "css") && Vw(e, () => {
        if (H) {
            const te = Mn(e, {
                doc: n,
                mirror: r,
                blockClass: s,
                blockSelector: o,
                unblockSelector: a,
                maskAllText: c,
                maskTextClass: u,
                unmaskTextClass: d,
                maskTextSelector: p,
                unmaskTextSelector: f,
                skipChild: !1,
                inlineStylesheet: _,
                maskInputOptions: y,
                maskAttributeFn: v,
                maskTextFn: E,
                maskInputFn: k,
                slimDOMOptions: M,
                dataURLOptions: P,
                inlineImages: L,
                recordCanvas: B,
                preserveWhiteSpace: re,
                onSerialize: A,
                onIframeLoad: R,
                iframeLoadTimeout: x,
                onStylesheetLoad: H,
                stylesheetLoadTimeout: D,
                keepIframeSrcFn: U
            });
            te && H(e, te)
        }
    }
    , D),
    V
}
i(Mn, "serializeNodeWithId");
function Zw(e, t) {
    const {mirror: n=new Kf, blockClass: r="rr-block", blockSelector: s=null, unblockSelector: o=null, maskAllText: a=!1, maskTextClass: c="rr-mask", unmaskTextClass: u=null, maskTextSelector: d=null, unmaskTextSelector: p=null, inlineStylesheet: f=!0, inlineImages: g=!1, recordCanvas: _=!1, maskAllInputs: y=!1, maskAttributeFn: v, maskTextFn: E, maskInputFn: k, slimDOM: M=!1, dataURLOptions: P, preserveWhiteSpace: L, onSerialize: B, onIframeLoad: A, iframeLoadTimeout: R, onStylesheetLoad: x, stylesheetLoadTimeout: H, keepIframeSrcFn: D=i( () => !1, "keepIframeSrcFn")} = t || {};
    return Mn(e, {
        doc: e,
        mirror: n,
        blockClass: r,
        blockSelector: s,
        unblockSelector: o,
        maskAllText: a,
        maskTextClass: c,
        unmaskTextClass: u,
        maskTextSelector: d,
        unmaskTextSelector: p,
        skipChild: !1,
        inlineStylesheet: f,
        maskInputOptions: y === !0 ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0
        } : y === !1 ? {} : y,
        maskAttributeFn: v,
        maskTextFn: E,
        maskInputFn: k,
        slimDOMOptions: M === !0 || M === "all" ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaDescKeywords: M === "all",
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaAuthorship: !0,
            headMetaVerification: !0
        } : M === !1 ? {} : M,
        dataURLOptions: P,
        inlineImages: g,
        recordCanvas: _,
        preserveWhiteSpace: L,
        onSerialize: B,
        onIframeLoad: A,
        iframeLoadTimeout: R,
        onStylesheetLoad: x,
        stylesheetLoadTimeout: H,
        keepIframeSrcFn: D,
        newlyAddedElement: !1
    })
}
i(Zw, "snapshot");
function Ht(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const s = e[r]
          , o = e[r + 1];
        if (r += 2,
        (s === "optionalAccess" || s === "optionalCall") && n == null)
            return;
        s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...a) => n.call(t, ...a)),
        t = void 0)
    }
    return n
}
i(Ht, "_optionalChain$4");
function Be(e, t, n=document) {
    const r = {
        capture: !0,
        passive: !0
    };
    return n.addEventListener(e, t, r),
    () => n.removeEventListener(e, t, r)
}
i(Be, "on");
const An = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
let yl = {
    map: {},
    getId() {
        return console.error(An),
        -1
    },
    getNode() {
        return console.error(An),
        null
    },
    removeNodeFromMap() {
        console.error(An)
    },
    has() {
        return console.error(An),
        !1
    },
    reset() {
        console.error(An)
    }
};
typeof window < "u" && window.Proxy && window.Reflect && (yl = new Proxy(yl,{
    get(e, t, n) {
        return t === "map" && console.error(An),
        Reflect.get(e, t, n)
    }
}));
function Er(e, t, n={}) {
    let r = null
      , s = 0;
    return function(...o) {
        const a = Date.now();
        !s && n.leading === !1 && (s = a);
        const c = t - (a - s)
          , u = this;
        c <= 0 || c > t ? (r && (oT(r),
        r = null),
        s = a,
        e.apply(u, o)) : !r && n.trailing !== !1 && (r = ci( () => {
            s = n.leading === !1 ? 0 : Date.now(),
            r = null,
            e.apply(u, o)
        }
        , c))
    }
}
i(Er, "throttle$1");
function ep(e, t, n, r, s=window) {
    const o = s.Object.getOwnPropertyDescriptor(e, t);
    return s.Object.defineProperty(e, t, r ? n : {
        set(a) {
            ci( () => {
                n.set.call(this, a)
            }
            , 0),
            o && o.set && o.set.call(this, a)
        }
    }),
    () => ep(e, t, o || {}, !0)
}
i(ep, "hookSetter");
function wa(e, t, n) {
    try {
        if (!(t in e))
            return () => {}
            ;
        const r = e[t]
          , s = n(r);
        return typeof s == "function" && (s.prototype = s.prototype || {},
        Object.defineProperties(s, {
            __rrweb_original__: {
                enumerable: !1,
                value: r
            }
        })),
        e[t] = s,
        () => {
            e[t] = r
        }
    } catch {
        return () => {}
    }
}
i(wa, "patch");
let $s = Date.now;
/[1-9][0-9]{12}/.test(Date.now().toString()) || ($s = i( () => new Date().getTime(), "nowTimestamp"));
function tp(e) {
    const t = e.document;
    return {
        left: t.scrollingElement ? t.scrollingElement.scrollLeft : e.pageXOffset !== void 0 ? e.pageXOffset : Ht([t, "optionalAccess", n => n.documentElement, "access", n => n.scrollLeft]) || Ht([t, "optionalAccess", n => n.body, "optionalAccess", n => n.parentElement, "optionalAccess", n => n.scrollLeft]) || Ht([t, "optionalAccess", n => n.body, "optionalAccess", n => n.scrollLeft]) || 0,
        top: t.scrollingElement ? t.scrollingElement.scrollTop : e.pageYOffset !== void 0 ? e.pageYOffset : Ht([t, "optionalAccess", n => n.documentElement, "access", n => n.scrollTop]) || Ht([t, "optionalAccess", n => n.body, "optionalAccess", n => n.parentElement, "optionalAccess", n => n.scrollTop]) || Ht([t, "optionalAccess", n => n.body, "optionalAccess", n => n.scrollTop]) || 0
    }
}
i(tp, "getWindowScroll");
function np() {
    return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
}
i(np, "getWindowHeight");
function rp() {
    return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
}
i(rp, "getWindowWidth");
function sp(e) {
    return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null
}
i(sp, "closestElementOfNode");
function Xe(e, t, n, r, s) {
    if (!e)
        return !1;
    const o = sp(e);
    if (!o)
        return !1;
    const a = xn(t, n);
    if (!s) {
        const d = r && o.matches(r);
        return a(o) && !d
    }
    const c = an(o, a);
    let u = -1;
    return c < 0 ? !1 : (r && (u = an(o, xn(null, r))),
    c > -1 && u < 0 ? !0 : c < u)
}
i(Xe, "isBlocked");
function eT(e, t) {
    return t.getId(e) !== -1
}
i(eT, "isSerialized");
function zi(e, t) {
    return t.getId(e) === vr
}
i(zi, "isIgnored");
function ip(e, t) {
    if (dr(e))
        return !1;
    const n = t.getId(e);
    return t.has(n) ? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE ? !1 : e.parentNode ? ip(e.parentNode, t) : !0 : !0
}
i(ip, "isAncestorRemoved");
function Mo(e) {
    return !!e.changedTouches
}
i(Mo, "legacy_isTouchEvent");
function tT(e=window) {
    "NodeList"in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
    "DOMTokenList"in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
    Node.prototype.contains || (Node.prototype.contains = (...t) => {
        let n = t[0];
        if (!(0 in t))
            throw new TypeError("1 argument is required");
        do
            if (this === n)
                return !0;
        while (n = n && n.parentNode);
        return !1
    }
    )
}
i(tT, "polyfill");
function op(e, t) {
    return !!(e.nodeName === "IFRAME" && t.getMeta(e))
}
i(op, "isSerializedIframe");
function ap(e, t) {
    return !!(e.nodeName === "LINK" && e.nodeType === e.ELEMENT_NODE && e.getAttribute && e.getAttribute("rel") === "stylesheet" && t.getMeta(e))
}
i(ap, "isSerializedStylesheet");
function Po(e) {
    return !!Ht([e, "optionalAccess", t => t.shadowRoot])
}
i(Po, "hasShadowRoot");
class nT {
    static{i(this, "StyleSheetMirror")
    }constructor() {
        this.id = 1,
        this.styleIDMap = new WeakMap,
        this.idStyleMap = new Map
    }
    getId(t) {
        return X_(this.styleIDMap.get(t), () => -1)
    }
    has(t) {
        return this.styleIDMap.has(t)
    }
    add(t, n) {
        if (this.has(t))
            return this.getId(t);
        let r;
        return n === void 0 ? r = this.id++ : r = n,
        this.styleIDMap.set(t, r),
        this.idStyleMap.set(r, t),
        r
    }
    getStyle(t) {
        return this.idStyleMap.get(t) || null
    }
    reset() {
        this.styleIDMap = new WeakMap,
        this.idStyleMap = new Map,
        this.id = 1
    }
    generateId() {
        return this.id++
    }
}
function cp(e) {
    let t = null;
    return Ht([e, "access", n => n.getRootNode, "optionalCall", n => n(), "optionalAccess", n => n.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host),
    t
}
i(cp, "getShadowHost");
function rT(e) {
    let t = e, n;
    for (; n = cp(t); )
        t = n;
    return t
}
i(rT, "getRootShadowHost");
function sT(e) {
    const t = e.ownerDocument;
    if (!t)
        return !1;
    const n = rT(e);
    return t.contains(n)
}
i(sT, "shadowHostInDom");
function up(e) {
    const t = e.ownerDocument;
    return t ? t.contains(e) || sT(e) : !1
}
i(up, "inDom");
const _l = {};
function Ta(e) {
    const t = _l[e];
    if (t)
        return t;
    const n = window.document;
    let r = window[e];
    if (n && typeof n.createElement == "function")
        try {
            const s = n.createElement("iframe");
            s.hidden = !0,
            n.head.appendChild(s);
            const o = s.contentWindow;
            o && o[e] && (r = o[e]),
            n.head.removeChild(s)
        } catch {}
    return _l[e] = r.bind(window)
}
i(Ta, "getImplementation");
function iT(...e) {
    return Ta("requestAnimationFrame")(...e)
}
i(iT, "onRequestAnimationFrame");
function ci(...e) {
    return Ta("setTimeout")(...e)
}
i(ci, "setTimeout$1");
function oT(...e) {
    return Ta("clearTimeout")(...e)
}
i(oT, "clearTimeout$1");
var J = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded",
e[e.Load = 1] = "Load",
e[e.FullSnapshot = 2] = "FullSnapshot",
e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot",
e[e.Meta = 4] = "Meta",
e[e.Custom = 5] = "Custom",
e[e.Plugin = 6] = "Plugin",
e))(J || {})
  , G = (e => (e[e.Mutation = 0] = "Mutation",
e[e.MouseMove = 1] = "MouseMove",
e[e.MouseInteraction = 2] = "MouseInteraction",
e[e.Scroll = 3] = "Scroll",
e[e.ViewportResize = 4] = "ViewportResize",
e[e.Input = 5] = "Input",
e[e.TouchMove = 6] = "TouchMove",
e[e.MediaInteraction = 7] = "MediaInteraction",
e[e.StyleSheetRule = 8] = "StyleSheetRule",
e[e.CanvasMutation = 9] = "CanvasMutation",
e[e.Font = 10] = "Font",
e[e.Log = 11] = "Log",
e[e.Drag = 12] = "Drag",
e[e.StyleDeclaration = 13] = "StyleDeclaration",
e[e.Selection = 14] = "Selection",
e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet",
e[e.CustomElement = 16] = "CustomElement",
e))(G || {})
  , Ue = (e => (e[e.MouseUp = 0] = "MouseUp",
e[e.MouseDown = 1] = "MouseDown",
e[e.Click = 2] = "Click",
e[e.ContextMenu = 3] = "ContextMenu",
e[e.DblClick = 4] = "DblClick",
e[e.Focus = 5] = "Focus",
e[e.Blur = 6] = "Blur",
e[e.TouchStart = 7] = "TouchStart",
e[e.TouchMove_Departed = 8] = "TouchMove_Departed",
e[e.TouchEnd = 9] = "TouchEnd",
e[e.TouchCancel = 10] = "TouchCancel",
e))(Ue || {})
  , wt = (e => (e[e.Mouse = 0] = "Mouse",
e[e.Pen = 1] = "Pen",
e[e.Touch = 2] = "Touch",
e))(wt || {});
function aT(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const s = e[r]
          , o = e[r + 1];
        if (r += 2,
        (s === "optionalAccess" || s === "optionalCall") && n == null)
            return;
        s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...a) => n.call(t, ...a)),
        t = void 0)
    }
    return n
}
i(aT, "_optionalChain$3");
function Sl(e) {
    return "__ln"in e
}
i(Sl, "isNodeInLinkedList");
class cT {
    static{i(this, "DoubleLinkedList")
    }constructor() {
        this.length = 0,
        this.head = null,
        this.tail = null
    }
    get(t) {
        if (t >= this.length)
            throw new Error("Position outside of list range");
        let n = this.head;
        for (let r = 0; r < t; r++)
            n = aT([n, "optionalAccess", s => s.next]) || null;
        return n
    }
    addNode(t) {
        const n = {
            value: t,
            previous: null,
            next: null
        };
        if (t.__ln = n,
        t.previousSibling && Sl(t.previousSibling)) {
            const r = t.previousSibling.__ln.next;
            n.next = r,
            n.previous = t.previousSibling.__ln,
            t.previousSibling.__ln.next = n,
            r && (r.previous = n)
        } else if (t.nextSibling && Sl(t.nextSibling) && t.nextSibling.__ln.previous) {
            const r = t.nextSibling.__ln.previous;
            n.previous = r,
            n.next = t.nextSibling.__ln,
            t.nextSibling.__ln.previous = n,
            r && (r.next = n)
        } else
            this.head && (this.head.previous = n),
            n.next = this.head,
            this.head = n;
        n.next === null && (this.tail = n),
        this.length++
    }
    removeNode(t) {
        const n = t.__ln;
        this.head && (n.previous ? (n.previous.next = n.next,
        n.next ? n.next.previous = n.previous : this.tail = n.previous) : (this.head = n.next,
        this.head ? this.head.previous = null : this.tail = null),
        t.__ln && delete t.__ln,
        this.length--)
    }
}
const vl = i( (e, t) => `${e}@${t}`, "moveKey");
class uT {
    static{i(this, "MutationBuffer")
    }constructor() {
        this.frozen = !1,
        this.locked = !1,
        this.texts = [],
        this.attributes = [],
        this.attributeMap = new WeakMap,
        this.removes = [],
        this.mapRemoves = [],
        this.movedMap = {},
        this.addedSet = new Set,
        this.movedSet = new Set,
        this.droppedSet = new Set,
        this.processMutations = t => {
            t.forEach(this.processMutation),
            this.emit()
        }
        ,
        this.emit = () => {
            if (this.frozen || this.locked)
                return;
            const t = []
              , n = new Set
              , r = new cT
              , s = i(u => {
                let d = u
                  , p = vr;
                for (; p === vr; )
                    d = d && d.nextSibling,
                    p = d && this.mirror.getId(d);
                return p
            }
            , "getNextId")
              , o = i(u => {
                if (!u.parentNode || !up(u))
                    return;
                const d = dr(u.parentNode) ? this.mirror.getId(cp(u)) : this.mirror.getId(u.parentNode)
                  , p = s(u);
                if (d === -1 || p === -1)
                    return r.addNode(u);
                const f = Mn(u, {
                    doc: this.doc,
                    mirror: this.mirror,
                    blockClass: this.blockClass,
                    blockSelector: this.blockSelector,
                    maskAllText: this.maskAllText,
                    unblockSelector: this.unblockSelector,
                    maskTextClass: this.maskTextClass,
                    unmaskTextClass: this.unmaskTextClass,
                    maskTextSelector: this.maskTextSelector,
                    unmaskTextSelector: this.unmaskTextSelector,
                    skipChild: !0,
                    newlyAddedElement: !0,
                    inlineStylesheet: this.inlineStylesheet,
                    maskInputOptions: this.maskInputOptions,
                    maskAttributeFn: this.maskAttributeFn,
                    maskTextFn: this.maskTextFn,
                    maskInputFn: this.maskInputFn,
                    slimDOMOptions: this.slimDOMOptions,
                    dataURLOptions: this.dataURLOptions,
                    recordCanvas: this.recordCanvas,
                    inlineImages: this.inlineImages,
                    onSerialize: g => {
                        op(g, this.mirror) && !Xe(g, this.blockClass, this.blockSelector, this.unblockSelector, !1) && this.iframeManager.addIframe(g),
                        ap(g, this.mirror) && this.stylesheetManager.trackLinkElement(g),
                        Po(u) && this.shadowDomManager.addShadowRoot(u.shadowRoot, this.doc)
                    }
                    ,
                    onIframeLoad: (g, _) => {
                        Xe(g, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (this.iframeManager.attachIframe(g, _),
                        g.contentWindow && this.canvasManager.addWindow(g.contentWindow),
                        this.shadowDomManager.observeAttachShadow(g))
                    }
                    ,
                    onStylesheetLoad: (g, _) => {
                        this.stylesheetManager.attachLinkElement(g, _)
                    }
                });
                f && (t.push({
                    parentId: d,
                    nextId: p,
                    node: f
                }),
                n.add(f.id))
            }
            , "pushAdd");
            for (; this.mapRemoves.length; )
                this.mirror.removeNodeFromMap(this.mapRemoves.shift());
            for (const u of this.movedSet)
                El(this.removes, u, this.mirror) && !this.movedSet.has(u.parentNode) || o(u);
            for (const u of this.addedSet)
                !bl(this.droppedSet, u) && !El(this.removes, u, this.mirror) || bl(this.movedSet, u) ? o(u) : this.droppedSet.add(u);
            let a = null;
            for (; r.length; ) {
                let u = null;
                if (a) {
                    const d = this.mirror.getId(a.value.parentNode)
                      , p = s(a.value);
                    d !== -1 && p !== -1 && (u = a)
                }
                if (!u) {
                    let d = r.tail;
                    for (; d; ) {
                        const p = d;
                        if (d = d.previous,
                        p) {
                            const f = this.mirror.getId(p.value.parentNode);
                            if (s(p.value) === -1)
                                continue;
                            if (f !== -1) {
                                u = p;
                                break
                            } else {
                                const _ = p.value;
                                if (_.parentNode && _.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                    const y = _.parentNode.host;
                                    if (this.mirror.getId(y) !== -1) {
                                        u = p;
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
                if (!u) {
                    for (; r.head; )
                        r.removeNode(r.head.value);
                    break
                }
                a = u.previous,
                r.removeNode(u.value),
                o(u.value)
            }
            const c = {
                texts: this.texts.map(u => ({
                    id: this.mirror.getId(u.node),
                    value: u.value
                })).filter(u => !n.has(u.id)).filter(u => this.mirror.has(u.id)),
                attributes: this.attributes.map(u => {
                    const {attributes: d} = u;
                    if (typeof d.style == "string") {
                        const p = JSON.stringify(u.styleDiff)
                          , f = JSON.stringify(u._unchangedStyles);
                        p.length < d.style.length && (p + f).split("var(").length === d.style.split("var(").length && (d.style = u.styleDiff)
                    }
                    return {
                        id: this.mirror.getId(u.node),
                        attributes: d
                    }
                }
                ).filter(u => !n.has(u.id)).filter(u => this.mirror.has(u.id)),
                removes: this.removes,
                adds: t
            };
            !c.texts.length && !c.attributes.length && !c.removes.length && !c.adds.length || (this.texts = [],
            this.attributes = [],
            this.attributeMap = new WeakMap,
            this.removes = [],
            this.addedSet = new Set,
            this.movedSet = new Set,
            this.droppedSet = new Set,
            this.movedMap = {},
            this.mutationCb(c))
        }
        ,
        this.processMutation = t => {
            if (!zi(t.target, this.mirror))
                switch (t.type) {
                case "characterData":
                    {
                        const n = t.target.textContent;
                        !Xe(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) && n !== t.oldValue && this.texts.push({
                            value: qn(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && n ? this.maskTextFn ? this.maskTextFn(n, sp(t.target)) : n.replace(/[\S]/g, "*") : n,
                            node: t.target
                        });
                        break
                    }
                case "attributes":
                    {
                        const n = t.target;
                        let r = t.attributeName
                          , s = t.target.getAttribute(r);
                        if (r === "value") {
                            const a = Ea(n)
                              , c = n.tagName;
                            s = Fs(n, c, a);
                            const u = oi({
                                maskInputOptions: this.maskInputOptions,
                                tagName: c,
                                type: a
                            })
                              , d = qn(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, u);
                            s = Sr({
                                isMasked: d,
                                element: n,
                                value: s,
                                maskInputFn: this.maskInputFn
                            })
                        }
                        if (Xe(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || s === t.oldValue)
                            return;
                        let o = this.attributeMap.get(t.target);
                        if (n.tagName === "IFRAME" && r === "src" && !this.keepIframeSrcFn(s))
                            if (!n.contentDocument)
                                r = "rr_src";
                            else
                                return;
                        if (o || (o = {
                            node: t.target,
                            attributes: {},
                            styleDiff: {},
                            _unchangedStyles: {}
                        },
                        this.attributes.push(o),
                        this.attributeMap.set(t.target, o)),
                        r === "type" && n.tagName === "INPUT" && (t.oldValue || "").toLowerCase() === "password" && n.setAttribute("data-rr-is-password", "true"),
                        !Zf(n.tagName, r) && (o.attributes[r] = Qf(this.doc, Wn(n.tagName), Wn(r), s, n, this.maskAttributeFn),
                        r === "style")) {
                            if (!this.unattachedDoc)
                                try {
                                    this.unattachedDoc = document.implementation.createHTMLDocument()
                                } catch {
                                    this.unattachedDoc = this.doc
                                }
                            const a = this.unattachedDoc.createElement("span");
                            t.oldValue && a.setAttribute("style", t.oldValue);
                            for (const c of Array.from(n.style)) {
                                const u = n.style.getPropertyValue(c)
                                  , d = n.style.getPropertyPriority(c);
                                u !== a.style.getPropertyValue(c) || d !== a.style.getPropertyPriority(c) ? d === "" ? o.styleDiff[c] = u : o.styleDiff[c] = [u, d] : o._unchangedStyles[c] = [u, d]
                            }
                            for (const c of Array.from(a.style))
                                n.style.getPropertyValue(c) === "" && (o.styleDiff[c] = !1)
                        }
                        break
                    }
                case "childList":
                    {
                        if (Xe(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !0))
                            return;
                        t.addedNodes.forEach(n => this.genAdds(n, t.target)),
                        t.removedNodes.forEach(n => {
                            const r = this.mirror.getId(n)
                              , s = dr(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                            Xe(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || zi(n, this.mirror) || !eT(n, this.mirror) || (this.addedSet.has(n) ? (No(this.addedSet, n),
                            this.droppedSet.add(n)) : this.addedSet.has(t.target) && r === -1 || ip(t.target, this.mirror) || (this.movedSet.has(n) && this.movedMap[vl(r, s)] ? No(this.movedSet, n) : this.removes.push({
                                parentId: s,
                                id: r,
                                isShadow: dr(t.target) && fr(t.target) ? !0 : void 0
                            })),
                            this.mapRemoves.push(n))
                        }
                        );
                        break
                    }
                }
        }
        ,
        this.genAdds = (t, n) => {
            if (!this.processedNodeManager.inOtherBuffer(t, this) && !(this.addedSet.has(t) || this.movedSet.has(t))) {
                if (this.mirror.hasNode(t)) {
                    if (zi(t, this.mirror))
                        return;
                    this.movedSet.add(t);
                    let r = null;
                    n && this.mirror.hasNode(n) && (r = this.mirror.getId(n)),
                    r && r !== -1 && (this.movedMap[vl(this.mirror.getId(t), r)] = !0)
                } else
                    this.addedSet.add(t),
                    this.droppedSet.delete(t);
                Xe(t, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (t.childNodes.forEach(r => this.genAdds(r)),
                Po(t) && t.shadowRoot.childNodes.forEach(r => {
                    this.processedNodeManager.add(r, this),
                    this.genAdds(r, t)
                }
                ))
            }
        }
    }
    init(t) {
        ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(n => {
            this[n] = t[n]
        }
        )
    }
    freeze() {
        this.frozen = !0,
        this.canvasManager.freeze()
    }
    unfreeze() {
        this.frozen = !1,
        this.canvasManager.unfreeze(),
        this.emit()
    }
    isFrozen() {
        return this.frozen
    }
    lock() {
        this.locked = !0,
        this.canvasManager.lock()
    }
    unlock() {
        this.locked = !1,
        this.canvasManager.unlock(),
        this.emit()
    }
    reset() {
        this.shadowDomManager.reset(),
        this.canvasManager.reset()
    }
}
function No(e, t) {
    e.delete(t),
    t.childNodes.forEach(n => No(e, n))
}
i(No, "deepDelete");
function El(e, t, n) {
    return e.length === 0 ? !1 : lT(e, t, n)
}
i(El, "isParentRemoved");
function lT(e, t, n) {
    let r = t.parentNode;
    for (; r; ) {
        const s = n.getId(r);
        if (e.some(o => o.id === s))
            return !0;
        r = r.parentNode
    }
    return !1
}
i(lT, "_isParentRemoved");
function bl(e, t) {
    return e.size === 0 ? !1 : lp(e, t)
}
i(bl, "isAncestorInSet");
function lp(e, t) {
    const {parentNode: n} = t;
    return n ? e.has(n) ? !0 : lp(e, n) : !1
}
i(lp, "_isAncestorInSet");
let pr;
function dT(e) {
    pr = e
}
i(dT, "registerErrorHandler");
function fT() {
    pr = void 0
}
i(fT, "unregisterErrorHandler");
const ie = i(e => pr ? i( (...n) => {
    try {
        return e(...n)
    } catch (r) {
        if (pr && pr(r) === !0)
            return () => {}
            ;
        throw r
    }
}
, "rrwebWrapped") : e, "callbackWrapper");
function ct(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const s = e[r]
          , o = e[r + 1];
        if (r += 2,
        (s === "optionalAccess" || s === "optionalCall") && n == null)
            return;
        s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...a) => n.call(t, ...a)),
        t = void 0)
    }
    return n
}
i(ct, "_optionalChain$2");
const Pn = [];
function Pr(e) {
    try {
        if ("composedPath"in e) {
            const t = e.composedPath();
            if (t.length)
                return t[0]
        } else if ("path"in e && e.path.length)
            return e.path[0]
    } catch {}
    return e && e.target
}
i(Pr, "getEventTarget");
function dp(e, t) {
    const n = new uT;
    Pn.push(n),
    n.init(e);
    let r = window.MutationObserver || window.__rrMutationObserver;
    const s = ct([window, "optionalAccess", a => a.Zone, "optionalAccess", a => a.__symbol__, "optionalCall", a => a("MutationObserver")]);
    s && window[s] && (r = window[s]);
    const o = new r(ie(a => {
        e.onMutation && e.onMutation(a) === !1 || n.processMutations.bind(n)(a)
    }
    ));
    return o.observe(t, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
    }),
    o
}
i(dp, "initMutationObserver");
function pT({mousemoveCb: e, sampling: t, doc: n, mirror: r}) {
    if (t.mousemove === !1)
        return () => {}
        ;
    const s = typeof t.mousemove == "number" ? t.mousemove : 50
      , o = typeof t.mousemoveCallback == "number" ? t.mousemoveCallback : 500;
    let a = [], c;
    const u = Er(ie(f => {
        const g = Date.now() - c;
        e(a.map(_ => (_.timeOffset -= g,
        _)), f),
        a = [],
        c = null
    }
    ), o)
      , d = ie(Er(ie(f => {
        const g = Pr(f)
          , {clientX: _, clientY: y} = Mo(f) ? f.changedTouches[0] : f;
        c || (c = $s()),
        a.push({
            x: _,
            y,
            id: r.getId(g),
            timeOffset: $s() - c
        }),
        u(typeof DragEvent < "u" && f instanceof DragEvent ? G.Drag : f instanceof MouseEvent ? G.MouseMove : G.TouchMove)
    }
    ), s, {
        trailing: !1
    }))
      , p = [Be("mousemove", d, n), Be("touchmove", d, n), Be("drag", d, n)];
    return ie( () => {
        p.forEach(f => f())
    }
    )
}
i(pT, "initMoveObserver");
function hT({mouseInteractionCb: e, doc: t, mirror: n, blockClass: r, blockSelector: s, unblockSelector: o, sampling: a}) {
    if (a.mouseInteraction === !1)
        return () => {}
        ;
    const c = a.mouseInteraction === !0 || a.mouseInteraction === void 0 ? {} : a.mouseInteraction
      , u = [];
    let d = null;
    const p = i(f => g => {
        const _ = Pr(g);
        if (Xe(_, r, s, o, !0))
            return;
        let y = null
          , v = f;
        if ("pointerType"in g) {
            switch (g.pointerType) {
            case "mouse":
                y = wt.Mouse;
                break;
            case "touch":
                y = wt.Touch;
                break;
            case "pen":
                y = wt.Pen;
                break
            }
            y === wt.Touch ? Ue[f] === Ue.MouseDown ? v = "TouchStart" : Ue[f] === Ue.MouseUp && (v = "TouchEnd") : wt.Pen
        } else
            Mo(g) && (y = wt.Touch);
        y !== null ? (d = y,
        (v.startsWith("Touch") && y === wt.Touch || v.startsWith("Mouse") && y === wt.Mouse) && (y = null)) : Ue[f] === Ue.Click && (y = d,
        d = null);
        const E = Mo(g) ? g.changedTouches[0] : g;
        if (!E)
            return;
        const k = n.getId(_)
          , {clientX: M, clientY: P} = E;
        ie(e)({
            type: Ue[v],
            id: k,
            x: M,
            y: P,
            ...y !== null && {
                pointerType: y
            }
        })
    }
    , "getHandler");
    return Object.keys(Ue).filter(f => Number.isNaN(Number(f)) && !f.endsWith("_Departed") && c[f] !== !1).forEach(f => {
        let g = Wn(f);
        const _ = p(f);
        if (window.PointerEvent)
            switch (Ue[f]) {
            case Ue.MouseDown:
            case Ue.MouseUp:
                g = g.replace("mouse", "pointer");
                break;
            case Ue.TouchStart:
            case Ue.TouchEnd:
                return
            }
        u.push(Be(g, _, t))
    }
    ),
    ie( () => {
        u.forEach(f => f())
    }
    )
}
i(hT, "initMouseInteractionObserver");
function fp({scrollCb: e, doc: t, mirror: n, blockClass: r, blockSelector: s, unblockSelector: o, sampling: a}) {
    const c = ie(Er(ie(u => {
        const d = Pr(u);
        if (!d || Xe(d, r, s, o, !0))
            return;
        const p = n.getId(d);
        if (d === t && t.defaultView) {
            const f = tp(t.defaultView);
            e({
                id: p,
                x: f.left,
                y: f.top
            })
        } else
            e({
                id: p,
                x: d.scrollLeft,
                y: d.scrollTop
            })
    }
    ), a.scroll || 100));
    return Be("scroll", c, t)
}
i(fp, "initScrollObserver");
function mT({viewportResizeCb: e}, {win: t}) {
    let n = -1
      , r = -1;
    const s = ie(Er(ie( () => {
        const o = np()
          , a = rp();
        (n !== o || r !== a) && (e({
            width: Number(a),
            height: Number(o)
        }),
        n = o,
        r = a)
    }
    ), 200));
    return Be("resize", s, t)
}
i(mT, "initViewportResizeObserver");
const gT = ["INPUT", "TEXTAREA", "SELECT"]
  , wl = new WeakMap;
function yT({inputCb: e, doc: t, mirror: n, blockClass: r, blockSelector: s, unblockSelector: o, ignoreClass: a, ignoreSelector: c, maskInputOptions: u, maskInputFn: d, sampling: p, userTriggeredOnInput: f, maskTextClass: g, unmaskTextClass: _, maskTextSelector: y, unmaskTextSelector: v}) {
    function E(R) {
        let x = Pr(R);
        const H = R.isTrusted
          , D = x && Oo(x.tagName);
        if (D === "OPTION" && (x = x.parentElement),
        !x || !D || gT.indexOf(D) < 0 || Xe(x, r, s, o, !0))
            return;
        const U = x;
        if (U.classList.contains(a) || c && U.matches(c))
            return;
        const W = Ea(x);
        let re = Fs(U, D, W)
          , le = !1;
        const fe = oi({
            maskInputOptions: u,
            tagName: D,
            type: W
        })
          , V = qn(x, g, y, _, v, fe);
        (W === "radio" || W === "checkbox") && (le = x.checked),
        re = Sr({
            isMasked: V,
            element: x,
            value: re,
            maskInputFn: d
        }),
        k(x, f ? {
            text: re,
            isChecked: le,
            userTriggered: H
        } : {
            text: re,
            isChecked: le
        });
        const be = x.name;
        W === "radio" && be && le && t.querySelectorAll(`input[type="radio"][name="${be}"]`).forEach(te => {
            if (te !== x) {
                const ke = Sr({
                    isMasked: V,
                    element: te,
                    value: Fs(te, D, W),
                    maskInputFn: d
                });
                k(te, f ? {
                    text: ke,
                    isChecked: !le,
                    userTriggered: !1
                } : {
                    text: ke,
                    isChecked: !le
                })
            }
        }
        )
    }
    i(E, "eventHandler");
    function k(R, x) {
        const H = wl.get(R);
        if (!H || H.text !== x.text || H.isChecked !== x.isChecked) {
            wl.set(R, x);
            const D = n.getId(R);
            ie(e)({
                ...x,
                id: D
            })
        }
    }
    i(k, "cbWithDedup");
    const P = (p.input === "last" ? ["change"] : ["input", "change"]).map(R => Be(R, ie(E), t))
      , L = t.defaultView;
    if (!L)
        return () => {
            P.forEach(R => R())
        }
        ;
    const B = L.Object.getOwnPropertyDescriptor(L.HTMLInputElement.prototype, "value")
      , A = [[L.HTMLInputElement.prototype, "value"], [L.HTMLInputElement.prototype, "checked"], [L.HTMLSelectElement.prototype, "value"], [L.HTMLTextAreaElement.prototype, "value"], [L.HTMLSelectElement.prototype, "selectedIndex"], [L.HTMLOptionElement.prototype, "selected"]];
    return B && B.set && P.push(...A.map(R => ep(R[0], R[1], {
        set() {
            ie(E)({
                target: this,
                isTrusted: !1
            })
        }
    }, !1, L))),
    ie( () => {
        P.forEach(R => R())
    }
    )
}
i(yT, "initInputObserver");
function Bs(e) {
    const t = [];
    function n(r, s) {
        if (is("CSSGroupingRule") && r.parentRule instanceof CSSGroupingRule || is("CSSMediaRule") && r.parentRule instanceof CSSMediaRule || is("CSSSupportsRule") && r.parentRule instanceof CSSSupportsRule || is("CSSConditionRule") && r.parentRule instanceof CSSConditionRule) {
            const a = Array.from(r.parentRule.cssRules).indexOf(r);
            s.unshift(a)
        } else if (r.parentStyleSheet) {
            const a = Array.from(r.parentStyleSheet.cssRules).indexOf(r);
            s.unshift(a)
        }
        return s
    }
    return i(n, "recurse"),
    n(e, t)
}
i(Bs, "getNestedCSSRulePositions");
function jt(e, t, n) {
    let r, s;
    return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : s = n.getId(e),
    {
        styleId: s,
        id: r
    }) : {}
}
i(jt, "getIdAndStyleId");
function _T({styleSheetRuleCb: e, mirror: t, stylesheetManager: n}, {win: r}) {
    if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype)
        return () => {}
        ;
    const s = r.CSSStyleSheet.prototype.insertRule;
    r.CSSStyleSheet.prototype.insertRule = new Proxy(s,{
        apply: ie( (p, f, g) => {
            const [_,y] = g
              , {id: v, styleId: E} = jt(f, t, n.styleMirror);
            return (v && v !== -1 || E && E !== -1) && e({
                id: v,
                styleId: E,
                adds: [{
                    rule: _,
                    index: y
                }]
            }),
            p.apply(f, g)
        }
        )
    });
    const o = r.CSSStyleSheet.prototype.deleteRule;
    r.CSSStyleSheet.prototype.deleteRule = new Proxy(o,{
        apply: ie( (p, f, g) => {
            const [_] = g
              , {id: y, styleId: v} = jt(f, t, n.styleMirror);
            return (y && y !== -1 || v && v !== -1) && e({
                id: y,
                styleId: v,
                removes: [{
                    index: _
                }]
            }),
            p.apply(f, g)
        }
        )
    });
    let a;
    r.CSSStyleSheet.prototype.replace && (a = r.CSSStyleSheet.prototype.replace,
    r.CSSStyleSheet.prototype.replace = new Proxy(a,{
        apply: ie( (p, f, g) => {
            const [_] = g
              , {id: y, styleId: v} = jt(f, t, n.styleMirror);
            return (y && y !== -1 || v && v !== -1) && e({
                id: y,
                styleId: v,
                replace: _
            }),
            p.apply(f, g)
        }
        )
    }));
    let c;
    r.CSSStyleSheet.prototype.replaceSync && (c = r.CSSStyleSheet.prototype.replaceSync,
    r.CSSStyleSheet.prototype.replaceSync = new Proxy(c,{
        apply: ie( (p, f, g) => {
            const [_] = g
              , {id: y, styleId: v} = jt(f, t, n.styleMirror);
            return (y && y !== -1 || v && v !== -1) && e({
                id: y,
                styleId: v,
                replaceSync: _
            }),
            p.apply(f, g)
        }
        )
    }));
    const u = {};
    os("CSSGroupingRule") ? u.CSSGroupingRule = r.CSSGroupingRule : (os("CSSMediaRule") && (u.CSSMediaRule = r.CSSMediaRule),
    os("CSSConditionRule") && (u.CSSConditionRule = r.CSSConditionRule),
    os("CSSSupportsRule") && (u.CSSSupportsRule = r.CSSSupportsRule));
    const d = {};
    return Object.entries(u).forEach( ([p,f]) => {
        d[p] = {
            insertRule: f.prototype.insertRule,
            deleteRule: f.prototype.deleteRule
        },
        f.prototype.insertRule = new Proxy(d[p].insertRule,{
            apply: ie( (g, _, y) => {
                const [v,E] = y
                  , {id: k, styleId: M} = jt(_.parentStyleSheet, t, n.styleMirror);
                return (k && k !== -1 || M && M !== -1) && e({
                    id: k,
                    styleId: M,
                    adds: [{
                        rule: v,
                        index: [...Bs(_), E || 0]
                    }]
                }),
                g.apply(_, y)
            }
            )
        }),
        f.prototype.deleteRule = new Proxy(d[p].deleteRule,{
            apply: ie( (g, _, y) => {
                const [v] = y
                  , {id: E, styleId: k} = jt(_.parentStyleSheet, t, n.styleMirror);
                return (E && E !== -1 || k && k !== -1) && e({
                    id: E,
                    styleId: k,
                    removes: [{
                        index: [...Bs(_), v]
                    }]
                }),
                g.apply(_, y)
            }
            )
        })
    }
    ),
    ie( () => {
        r.CSSStyleSheet.prototype.insertRule = s,
        r.CSSStyleSheet.prototype.deleteRule = o,
        a && (r.CSSStyleSheet.prototype.replace = a),
        c && (r.CSSStyleSheet.prototype.replaceSync = c),
        Object.entries(u).forEach( ([p,f]) => {
            f.prototype.insertRule = d[p].insertRule,
            f.prototype.deleteRule = d[p].deleteRule
        }
        )
    }
    )
}
i(_T, "initStyleSheetObserver");
function pp({mirror: e, stylesheetManager: t}, n) {
    let r = null;
    n.nodeName === "#document" ? r = e.getId(n) : r = e.getId(n.host);
    const s = n.nodeName === "#document" ? ct([n, "access", a => a.defaultView, "optionalAccess", a => a.Document]) : ct([n, "access", a => a.ownerDocument, "optionalAccess", a => a.defaultView, "optionalAccess", a => a.ShadowRoot])
      , o = ct([s, "optionalAccess", a => a.prototype]) ? Object.getOwnPropertyDescriptor(ct([s, "optionalAccess", a => a.prototype]), "adoptedStyleSheets") : void 0;
    return r === null || r === -1 || !s || !o ? () => {}
    : (Object.defineProperty(n, "adoptedStyleSheets", {
        configurable: o.configurable,
        enumerable: o.enumerable,
        get() {
            return ct([o, "access", a => a.get, "optionalAccess", a => a.call, "call", a => a(this)])
        },
        set(a) {
            const c = ct([o, "access", u => u.set, "optionalAccess", u => u.call, "call", u => u(this, a)]);
            if (r !== null && r !== -1)
                try {
                    t.adoptStyleSheets(a, r)
                } catch {}
            return c
        }
    }),
    ie( () => {
        Object.defineProperty(n, "adoptedStyleSheets", {
            configurable: o.configurable,
            enumerable: o.enumerable,
            get: o.get,
            set: o.set
        })
    }
    ))
}
i(pp, "initAdoptedStyleSheetObserver");
function ST({styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: n, stylesheetManager: r}, {win: s}) {
    const o = s.CSSStyleDeclaration.prototype.setProperty;
    s.CSSStyleDeclaration.prototype.setProperty = new Proxy(o,{
        apply: ie( (c, u, d) => {
            const [p,f,g] = d;
            if (n.has(p))
                return o.apply(u, [p, f, g]);
            const {id: _, styleId: y} = jt(ct([u, "access", v => v.parentRule, "optionalAccess", v => v.parentStyleSheet]), t, r.styleMirror);
            return (_ && _ !== -1 || y && y !== -1) && e({
                id: _,
                styleId: y,
                set: {
                    property: p,
                    value: f,
                    priority: g
                },
                index: Bs(u.parentRule)
            }),
            c.apply(u, d)
        }
        )
    });
    const a = s.CSSStyleDeclaration.prototype.removeProperty;
    return s.CSSStyleDeclaration.prototype.removeProperty = new Proxy(a,{
        apply: ie( (c, u, d) => {
            const [p] = d;
            if (n.has(p))
                return a.apply(u, [p]);
            const {id: f, styleId: g} = jt(ct([u, "access", _ => _.parentRule, "optionalAccess", _ => _.parentStyleSheet]), t, r.styleMirror);
            return (f && f !== -1 || g && g !== -1) && e({
                id: f,
                styleId: g,
                remove: {
                    property: p
                },
                index: Bs(u.parentRule)
            }),
            c.apply(u, d)
        }
        )
    }),
    ie( () => {
        s.CSSStyleDeclaration.prototype.setProperty = o,
        s.CSSStyleDeclaration.prototype.removeProperty = a
    }
    )
}
i(ST, "initStyleDeclarationObserver");
function vT({mediaInteractionCb: e, blockClass: t, blockSelector: n, unblockSelector: r, mirror: s, sampling: o, doc: a}) {
    const c = ie(d => Er(ie(p => {
        const f = Pr(p);
        if (!f || Xe(f, t, n, r, !0))
            return;
        const {currentTime: g, volume: _, muted: y, playbackRate: v} = f;
        e({
            type: d,
            id: s.getId(f),
            currentTime: g,
            volume: _,
            muted: y,
            playbackRate: v
        })
    }
    ), o.media || 500))
      , u = [Be("play", c(0), a), Be("pause", c(1), a), Be("seeked", c(2), a), Be("volumechange", c(3), a), Be("ratechange", c(4), a)];
    return ie( () => {
        u.forEach(d => d())
    }
    )
}
i(vT, "initMediaInteractionObserver");
function ET({fontCb: e, doc: t}) {
    const n = t.defaultView;
    if (!n)
        return () => {}
        ;
    const r = []
      , s = new WeakMap
      , o = n.FontFace;
    n.FontFace = i(function(u, d, p) {
        const f = new o(u,d,p);
        return s.set(f, {
            family: u,
            buffer: typeof d != "string",
            descriptors: p,
            fontSource: typeof d == "string" ? d : JSON.stringify(Array.from(new Uint8Array(d)))
        }),
        f
    }, "FontFace");
    const a = wa(t.fonts, "add", function(c) {
        return function(u) {
            return ci(ie( () => {
                const d = s.get(u);
                d && (e(d),
                s.delete(u))
            }
            ), 0),
            c.apply(this, [u])
        }
    });
    return r.push( () => {
        n.FontFace = o
    }
    ),
    r.push(a),
    ie( () => {
        r.forEach(c => c())
    }
    )
}
i(ET, "initFontObserver");
function bT(e) {
    const {doc: t, mirror: n, blockClass: r, blockSelector: s, unblockSelector: o, selectionCb: a} = e;
    let c = !0;
    const u = ie( () => {
        const d = t.getSelection();
        if (!d || c && ct([d, "optionalAccess", g => g.isCollapsed]))
            return;
        c = d.isCollapsed || !1;
        const p = []
          , f = d.rangeCount || 0;
        for (let g = 0; g < f; g++) {
            const _ = d.getRangeAt(g)
              , {startContainer: y, startOffset: v, endContainer: E, endOffset: k} = _;
            Xe(y, r, s, o, !0) || Xe(E, r, s, o, !0) || p.push({
                start: n.getId(y),
                startOffset: v,
                end: n.getId(E),
                endOffset: k
            })
        }
        a({
            ranges: p
        })
    }
    );
    return u(),
    Be("selectionchange", u)
}
i(bT, "initSelectionObserver");
function wT({doc: e, customElementCb: t}) {
    const n = e.defaultView;
    return !n || !n.customElements ? () => {}
    : wa(n.customElements, "define", function(s) {
        return function(o, a, c) {
            try {
                t({
                    define: {
                        name: o
                    }
                })
            } catch {}
            return s.apply(this, [o, a, c])
        }
    })
}
i(wT, "initCustomElementObserver");
function TT(e, t={}) {
    const n = e.doc.defaultView;
    if (!n)
        return () => {}
        ;
    let r;
    e.recordDOM && (r = dp(e, e.doc));
    const s = pT(e)
      , o = hT(e)
      , a = fp(e)
      , c = mT(e, {
        win: n
    })
      , u = yT(e)
      , d = vT(e);
    let p = i( () => {}
    , "styleSheetObserver")
      , f = i( () => {}
    , "adoptedStyleSheetObserver")
      , g = i( () => {}
    , "styleDeclarationObserver")
      , _ = i( () => {}
    , "fontObserver");
    e.recordDOM && (p = _T(e, {
        win: n
    }),
    f = pp(e, e.doc),
    g = ST(e, {
        win: n
    }),
    e.collectFonts && (_ = ET(e)));
    const y = bT(e)
      , v = wT(e)
      , E = [];
    for (const k of e.plugins)
        E.push(k.observer(k.callback, n, k.options));
    return ie( () => {
        Pn.forEach(k => k.reset()),
        ct([r, "optionalAccess", k => k.disconnect, "call", k => k()]),
        s(),
        o(),
        a(),
        c(),
        u(),
        d(),
        p(),
        f(),
        g(),
        _(),
        y(),
        v(),
        E.forEach(k => k())
    }
    )
}
i(TT, "initObservers");
function is(e) {
    return typeof window[e] < "u"
}
i(is, "hasNestedCSSRule");
function os(e) {
    return !!(typeof window[e] < "u" && window[e].prototype && "insertRule"in window[e].prototype && "deleteRule"in window[e].prototype)
}
i(os, "canMonkeyPatchNestedCSSRule");
class Do {
    static{i(this, "CrossOriginIframeMirror")
    }constructor(t) {
        this.generateIdFn = t,
        this.iframeIdToRemoteIdMap = new WeakMap,
        this.iframeRemoteIdToIdMap = new WeakMap
    }
    getId(t, n, r, s) {
        const o = r || this.getIdToRemoteIdMap(t)
          , a = s || this.getRemoteIdToIdMap(t);
        let c = o.get(n);
        return c || (c = this.generateIdFn(),
        o.set(n, c),
        a.set(c, n)),
        c
    }
    getIds(t, n) {
        const r = this.getIdToRemoteIdMap(t)
          , s = this.getRemoteIdToIdMap(t);
        return n.map(o => this.getId(t, o, r, s))
    }
    getRemoteId(t, n, r) {
        const s = r || this.getRemoteIdToIdMap(t);
        if (typeof n != "number")
            return n;
        const o = s.get(n);
        return o || -1
    }
    getRemoteIds(t, n) {
        const r = this.getRemoteIdToIdMap(t);
        return n.map(s => this.getRemoteId(t, s, r))
    }
    reset(t) {
        if (!t) {
            this.iframeIdToRemoteIdMap = new WeakMap,
            this.iframeRemoteIdToIdMap = new WeakMap;
            return
        }
        this.iframeIdToRemoteIdMap.delete(t),
        this.iframeRemoteIdToIdMap.delete(t)
    }
    getIdToRemoteIdMap(t) {
        let n = this.iframeIdToRemoteIdMap.get(t);
        return n || (n = new Map,
        this.iframeIdToRemoteIdMap.set(t, n)),
        n
    }
    getRemoteIdToIdMap(t) {
        let n = this.iframeRemoteIdToIdMap.get(t);
        return n || (n = new Map,
        this.iframeRemoteIdToIdMap.set(t, n)),
        n
    }
}
function Tl(e) {
    let t, n = e[0], r = 1;
    for (; r < e.length; ) {
        const s = e[r]
          , o = e[r + 1];
        if (r += 2,
        (s === "optionalAccess" || s === "optionalCall") && n == null)
            return;
        s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...a) => n.call(t, ...a)),
        t = void 0)
    }
    return n
}
i(Tl, "_optionalChain$1");
class IT {
    static{i(this, "IframeManagerNoop")
    }constructor() {
        this.crossOriginIframeMirror = new Do(ba),
        this.crossOriginIframeRootIdMap = new WeakMap
    }
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
}
class kT {
    static{i(this, "IframeManager")
    }constructor(t) {
        this.iframes = new WeakMap,
        this.crossOriginIframeMap = new WeakMap,
        this.crossOriginIframeMirror = new Do(ba),
        this.crossOriginIframeRootIdMap = new WeakMap,
        this.mutationCb = t.mutationCb,
        this.wrappedEmit = t.wrappedEmit,
        this.stylesheetManager = t.stylesheetManager,
        this.recordCrossOriginIframes = t.recordCrossOriginIframes,
        this.crossOriginIframeStyleMirror = new Do(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),
        this.mirror = t.mirror,
        this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
    }
    addIframe(t) {
        this.iframes.set(t, !0),
        t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t)
    }
    addLoadListener(t) {
        this.loadListener = t
    }
    attachIframe(t, n) {
        this.mutationCb({
            adds: [{
                parentId: this.mirror.getId(t),
                nextId: null,
                node: n
            }],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0
        }),
        Tl([this, "access", r => r.loadListener, "optionalCall", r => r(t)]),
        t.contentDocument && t.contentDocument.adoptedStyleSheets && t.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(t.contentDocument.adoptedStyleSheets, this.mirror.getId(t.contentDocument))
    }
    handleMessage(t) {
        const n = t;
        if (n.data.type !== "rrweb" || n.origin !== n.data.origin || !t.source)
            return;
        const s = this.crossOriginIframeMap.get(t.source);
        if (!s)
            return;
        const o = this.transformCrossOriginEvent(s, n.data.event);
        o && this.wrappedEmit(o, n.data.isCheckout)
    }
    transformCrossOriginEvent(t, n) {
        switch (n.type) {
        case J.FullSnapshot:
            {
                this.crossOriginIframeMirror.reset(t),
                this.crossOriginIframeStyleMirror.reset(t),
                this.replaceIdOnNode(n.data.node, t);
                const r = n.data.node.id;
                return this.crossOriginIframeRootIdMap.set(t, r),
                this.patchRootIdOnNode(n.data.node, r),
                {
                    timestamp: n.timestamp,
                    type: J.IncrementalSnapshot,
                    data: {
                        source: G.Mutation,
                        adds: [{
                            parentId: this.mirror.getId(t),
                            nextId: null,
                            node: n.data.node
                        }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                    }
                }
            }
        case J.Meta:
        case J.Load:
        case J.DomContentLoaded:
            return !1;
        case J.Plugin:
            return n;
        case J.Custom:
            return this.replaceIds(n.data.payload, t, ["id", "parentId", "previousId", "nextId"]),
            n;
        case J.IncrementalSnapshot:
            switch (n.data.source) {
            case G.Mutation:
                return n.data.adds.forEach(r => {
                    this.replaceIds(r, t, ["parentId", "nextId", "previousId"]),
                    this.replaceIdOnNode(r.node, t);
                    const s = this.crossOriginIframeRootIdMap.get(t);
                    s && this.patchRootIdOnNode(r.node, s)
                }
                ),
                n.data.removes.forEach(r => {
                    this.replaceIds(r, t, ["parentId", "id"])
                }
                ),
                n.data.attributes.forEach(r => {
                    this.replaceIds(r, t, ["id"])
                }
                ),
                n.data.texts.forEach(r => {
                    this.replaceIds(r, t, ["id"])
                }
                ),
                n;
            case G.Drag:
            case G.TouchMove:
            case G.MouseMove:
                return n.data.positions.forEach(r => {
                    this.replaceIds(r, t, ["id"])
                }
                ),
                n;
            case G.ViewportResize:
                return !1;
            case G.MediaInteraction:
            case G.MouseInteraction:
            case G.Scroll:
            case G.CanvasMutation:
            case G.Input:
                return this.replaceIds(n.data, t, ["id"]),
                n;
            case G.StyleSheetRule:
            case G.StyleDeclaration:
                return this.replaceIds(n.data, t, ["id"]),
                this.replaceStyleIds(n.data, t, ["styleId"]),
                n;
            case G.Font:
                return n;
            case G.Selection:
                return n.data.ranges.forEach(r => {
                    this.replaceIds(r, t, ["start", "end"])
                }
                ),
                n;
            case G.AdoptedStyleSheet:
                return this.replaceIds(n.data, t, ["id"]),
                this.replaceStyleIds(n.data, t, ["styleIds"]),
                Tl([n, "access", r => r.data, "access", r => r.styles, "optionalAccess", r => r.forEach, "call", r => r(s => {
                    this.replaceStyleIds(s, t, ["styleId"])
                }
                )]),
                n
            }
        }
        return !1
    }
    replace(t, n, r, s) {
        for (const o of s)
            !Array.isArray(n[o]) && typeof n[o] != "number" || (Array.isArray(n[o]) ? n[o] = t.getIds(r, n[o]) : n[o] = t.getId(r, n[o]));
        return n
    }
    replaceIds(t, n, r) {
        return this.replace(this.crossOriginIframeMirror, t, n, r)
    }
    replaceStyleIds(t, n, r) {
        return this.replace(this.crossOriginIframeStyleMirror, t, n, r)
    }
    replaceIdOnNode(t, n) {
        this.replaceIds(t, n, ["id", "rootId"]),
        "childNodes"in t && t.childNodes.forEach(r => {
            this.replaceIdOnNode(r, n)
        }
        )
    }
    patchRootIdOnNode(t, n) {
        t.type !== Ce.Document && !t.rootId && (t.rootId = n),
        "childNodes"in t && t.childNodes.forEach(r => {
            this.patchRootIdOnNode(r, n)
        }
        )
    }
}
class RT {
    static{i(this, "ShadowDomManagerNoop")
    }init() {}
    addShadowRoot() {}
    observeAttachShadow() {}
    reset() {}
}
class CT {
    static{i(this, "ShadowDomManager")
    }constructor(t) {
        this.shadowDoms = new WeakSet,
        this.restoreHandlers = [],
        this.mutationCb = t.mutationCb,
        this.scrollCb = t.scrollCb,
        this.bypassOptions = t.bypassOptions,
        this.mirror = t.mirror,
        this.init()
    }
    init() {
        this.reset(),
        this.patchAttachShadow(Element, document)
    }
    addShadowRoot(t, n) {
        if (!fr(t) || this.shadowDoms.has(t))
            return;
        this.shadowDoms.add(t),
        this.bypassOptions.canvasManager.addShadowRoot(t);
        const r = dp({
            ...this.bypassOptions,
            doc: n,
            mutationCb: this.mutationCb,
            mirror: this.mirror,
            shadowDomManager: this
        }, t);
        this.restoreHandlers.push( () => r.disconnect()),
        this.restoreHandlers.push(fp({
            ...this.bypassOptions,
            scrollCb: this.scrollCb,
            doc: t,
            mirror: this.mirror
        })),
        ci( () => {
            t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets, this.mirror.getId(t.host)),
            this.restoreHandlers.push(pp({
                mirror: this.mirror,
                stylesheetManager: this.bypassOptions.stylesheetManager
            }, t))
        }
        , 0)
    }
    observeAttachShadow(t) {
        !t.contentWindow || !t.contentDocument || this.patchAttachShadow(t.contentWindow.Element, t.contentDocument)
    }
    patchAttachShadow(t, n) {
        const r = this;
        this.restoreHandlers.push(wa(t.prototype, "attachShadow", function(s) {
            return function(o) {
                const a = s.call(this, o);
                return this.shadowRoot && up(this) && r.addShadowRoot(this.shadowRoot, n),
                a
            }
        }))
    }
    reset() {
        this.restoreHandlers.forEach(t => {
            try {
                t()
            } catch {}
        }
        ),
        this.restoreHandlers = [],
        this.shadowDoms = new WeakSet,
        this.bypassOptions.canvasManager.resetShadowRoots()
    }
}
class Il {
    static{i(this, "CanvasManagerNoop")
    }reset() {}
    freeze() {}
    unfreeze() {}
    lock() {}
    unlock() {}
    snapshot() {}
    addWindow() {}
    addShadowRoot() {}
    resetShadowRoots() {}
}
class AT {
    static{i(this, "StylesheetManager")
    }constructor(t) {
        this.trackedLinkElements = new WeakSet,
        this.styleMirror = new nT,
        this.mutationCb = t.mutationCb,
        this.adoptedStyleSheetCb = t.adoptedStyleSheetCb
    }
    attachLinkElement(t, n) {
        "_cssText"in n.attributes && this.mutationCb({
            adds: [],
            removes: [],
            texts: [],
            attributes: [{
                id: n.id,
                attributes: n.attributes
            }]
        }),
        this.trackLinkElement(t)
    }
    trackLinkElement(t) {
        this.trackedLinkElements.has(t) || (this.trackedLinkElements.add(t),
        this.trackStylesheetInLinkElement(t))
    }
    adoptStyleSheets(t, n) {
        if (t.length === 0)
            return;
        const r = {
            id: n,
            styleIds: []
        }
          , s = [];
        for (const o of t) {
            let a;
            this.styleMirror.has(o) ? a = this.styleMirror.getId(o) : (a = this.styleMirror.add(o),
            s.push({
                styleId: a,
                rules: Array.from(o.rules || CSSRule, (c, u) => ({
                    rule: Vf(c),
                    index: u
                }))
            })),
            r.styleIds.push(a)
        }
        s.length > 0 && (r.styles = s),
        this.adoptedStyleSheetCb(r)
    }
    reset() {
        this.styleMirror.reset(),
        this.trackedLinkElements = new WeakSet
    }
    trackStylesheetInLinkElement(t) {}
}
class OT {
    static{i(this, "ProcessedNodeManager")
    }constructor() {
        this.nodeMap = new WeakMap,
        this.active = !1
    }
    inOtherBuffer(t, n) {
        const r = this.nodeMap.get(t);
        return r && Array.from(r).some(s => s !== n)
    }
    add(t, n) {
        this.active || (this.active = !0,
        iT( () => {
            this.nodeMap = new WeakMap,
            this.active = !1
        }
        )),
        this.nodeMap.set(t, (this.nodeMap.get(t) || new Set).add(n))
    }
    destroy() {}
}
let Ee, Hs;
try {
    if (Array.from([1], e => e * 2)[0] !== 2) {
        const e = document.createElement("iframe");
        document.body.appendChild(e),
        Array.from = Qe([e, "access", t => t.contentWindow, "optionalAccess", t => t.Array, "access", t => t.from]) || Array.from,
        document.body.removeChild(e)
    }
} catch (e) {}
const ot = Ow();
function At(e={}) {
    const {emit: t, checkoutEveryNms: n, checkoutEveryNth: r, blockClass: s="rr-block", blockSelector: o=null, unblockSelector: a=null, ignoreClass: c="rr-ignore", ignoreSelector: u=null, maskAllText: d=!1, maskTextClass: p="rr-mask", unmaskTextClass: f=null, maskTextSelector: g=null, unmaskTextSelector: _=null, inlineStylesheet: y=!0, maskAllInputs: v, maskInputOptions: E, slimDOMOptions: k, maskAttributeFn: M, maskInputFn: P, maskTextFn: L, maxCanvasSize: B=null, packFn: A, sampling: R={}, dataURLOptions: x={}, mousemoveWait: H, recordDOM: D=!0, recordCanvas: U=!1, recordCrossOriginIframes: W=!1, recordAfter: re=e.recordAfter === "DOMContentLoaded" ? e.recordAfter : "load", userTriggeredOnInput: le=!1, collectFonts: fe=!1, inlineImages: V=!1, plugins: be, keepIframeSrcFn: te=i( () => !1, "keepIframeSrcFn"), ignoreCSSAttributes: ke=new Set([]), errorHandler: ve, onMutation: Zt, getCanvasManager: tr} = e;
    dT(ve);
    const Ve = W ? window.parent === window : !0;
    let de = !1;
    if (!Ve)
        try {
            window.parent.document && (de = !1)
        } catch {
            de = !0
        }
    if (Ve && !t)
        throw new Error("emit function is required");
    if (!Ve && !de)
        return () => {}
        ;
    H !== void 0 && R.mousemove === void 0 && (R.mousemove = H),
    ot.reset();
    const nr = v === !0 ? {
        color: !0,
        date: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
        textarea: !0,
        select: !0,
        radio: !0,
        checkbox: !0
    } : E !== void 0 ? E : {}
      , Dt = k === !0 || k === "all" ? {
        script: !0,
        comment: !0,
        headFavicon: !0,
        headWhitespace: !0,
        headMetaSocial: !0,
        headMetaRobots: !0,
        headMetaHttpEquiv: !0,
        headMetaVerification: !0,
        headMetaAuthorship: k === "all",
        headMetaDescKeywords: k === "all"
    } : k || {};
    tT();
    let vn, en = 0;
    const Le = i(ae => {
        for (const Ye of be || [])
            Ye.eventProcessor && (ae = Ye.eventProcessor(ae));
        return A && !de && (ae = A(ae)),
        ae
    }
    , "eventProcessor");
    Ee = i( (ae, Ye) => {
        const Q = ae;
        if (Q.timestamp = $s(),
        Qe([Pn, "access", ge => ge[0], "optionalAccess", ge => ge.isFrozen, "call", ge => ge()]) && Q.type !== J.FullSnapshot && !(Q.type === J.IncrementalSnapshot && Q.data.source === G.Mutation) && Pn.forEach(ge => ge.unfreeze()),
        Ve)
            Qe([t, "optionalCall", ge => ge(Le(Q), Ye)]);
        else if (de) {
            const ge = {
                type: "rrweb",
                event: Le(Q),
                origin: window.location.origin,
                isCheckout: Ye
            };
            window.parent.postMessage(ge, "*")
        }
        if (Q.type === J.FullSnapshot)
            vn = Q,
            en = 0;
        else if (Q.type === J.IncrementalSnapshot) {
            if (Q.data.source === G.Mutation && Q.data.isAttachIframe)
                return;
            en++;
            const ge = r && en >= r
              , ce = n && vn && Q.timestamp - vn.timestamp > n;
            (ge || ce) && tn(!0)
        }
    }
    , "wrappedEmit");
    const En = i(ae => {
        Ee({
            type: J.IncrementalSnapshot,
            data: {
                source: G.Mutation,
                ...ae
            }
        })
    }
    , "wrappedMutationEmit")
      , Lr = i(ae => Ee({
        type: J.IncrementalSnapshot,
        data: {
            source: G.Scroll,
            ...ae
        }
    }), "wrappedScrollEmit")
      , Fr = i(ae => Ee({
        type: J.IncrementalSnapshot,
        data: {
            source: G.CanvasMutation,
            ...ae
        }
    }), "wrappedCanvasMutationEmit")
      , pi = i(ae => Ee({
        type: J.IncrementalSnapshot,
        data: {
            source: G.AdoptedStyleSheet,
            ...ae
        }
    }), "wrappedAdoptedStyleSheetEmit")
      , Fe = new AT({
        mutationCb: En,
        adoptedStyleSheetCb: pi
    })
      , Ke = typeof __RRWEB_EXCLUDE_IFRAME__ == "boolean" && __RRWEB_EXCLUDE_IFRAME__ ? new IT : new kT({
        mirror: ot,
        mutationCb: En,
        stylesheetManager: Fe,
        recordCrossOriginIframes: W,
        wrappedEmit: Ee
    });
    for (const ae of be || [])
        ae.getMirror && ae.getMirror({
            nodeMirror: ot,
            crossOriginIframeMirror: Ke.crossOriginIframeMirror,
            crossOriginIframeStyleMirror: Ke.crossOriginIframeStyleMirror
        });
    const bn = new OT
      , wn = MT(tr, {
        mirror: ot,
        win: window,
        mutationCb: ae => Ee({
            type: J.IncrementalSnapshot,
            data: {
                source: G.CanvasMutation,
                ...ae
            }
        }),
        recordCanvas: U,
        blockClass: s,
        blockSelector: o,
        unblockSelector: a,
        maxCanvasSize: B,
        sampling: R.canvas,
        dataURLOptions: x,
        errorHandler: ve
    })
      , Lt = typeof __RRWEB_EXCLUDE_SHADOW_DOM__ == "boolean" && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new RT : new CT({
        mutationCb: En,
        scrollCb: Lr,
        bypassOptions: {
            onMutation: Zt,
            blockClass: s,
            blockSelector: o,
            unblockSelector: a,
            maskAllText: d,
            maskTextClass: p,
            unmaskTextClass: f,
            maskTextSelector: g,
            unmaskTextSelector: _,
            inlineStylesheet: y,
            maskInputOptions: nr,
            dataURLOptions: x,
            maskAttributeFn: M,
            maskTextFn: L,
            maskInputFn: P,
            recordCanvas: U,
            inlineImages: V,
            sampling: R,
            slimDOMOptions: Dt,
            iframeManager: Ke,
            stylesheetManager: Fe,
            canvasManager: wn,
            keepIframeSrcFn: te,
            processedNodeManager: bn
        },
        mirror: ot
    })
      , tn = i( (ae=!1) => {
        if (!D)
            return;
        Ee({
            type: J.Meta,
            data: {
                href: window.location.href,
                width: rp(),
                height: np()
            }
        }, ae),
        Fe.reset(),
        Lt.init(),
        Pn.forEach(Q => Q.lock());
        const Ye = Zw(document, {
            mirror: ot,
            blockClass: s,
            blockSelector: o,
            unblockSelector: a,
            maskAllText: d,
            maskTextClass: p,
            unmaskTextClass: f,
            maskTextSelector: g,
            unmaskTextSelector: _,
            inlineStylesheet: y,
            maskAllInputs: nr,
            maskAttributeFn: M,
            maskInputFn: P,
            maskTextFn: L,
            slimDOM: Dt,
            dataURLOptions: x,
            recordCanvas: U,
            inlineImages: V,
            onSerialize: Q => {
                op(Q, ot) && Ke.addIframe(Q),
                ap(Q, ot) && Fe.trackLinkElement(Q),
                Po(Q) && Lt.addShadowRoot(Q.shadowRoot, document)
            }
            ,
            onIframeLoad: (Q, ge) => {
                Ke.attachIframe(Q, ge),
                Q.contentWindow && wn.addWindow(Q.contentWindow),
                Lt.observeAttachShadow(Q)
            }
            ,
            onStylesheetLoad: (Q, ge) => {
                Fe.attachLinkElement(Q, ge)
            }
            ,
            keepIframeSrcFn: te
        });
        if (!Ye)
            return console.warn("Failed to snapshot the document");
        Ee({
            type: J.FullSnapshot,
            data: {
                node: Ye,
                initialOffset: tp(window)
            }
        }),
        Pn.forEach(Q => Q.unlock()),
        document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && Fe.adoptStyleSheets(document.adoptedStyleSheets, ot.getId(document))
    }
    , "takeFullSnapshot");
    Hs = tn;
    try {
        const ae = []
          , Ye = i(ge => ie(TT)({
            onMutation: Zt,
            mutationCb: En,
            mousemoveCb: (ce, lt) => Ee({
                type: J.IncrementalSnapshot,
                data: {
                    source: lt,
                    positions: ce
                }
            }),
            mouseInteractionCb: ce => Ee({
                type: J.IncrementalSnapshot,
                data: {
                    source: G.MouseInteraction,
                    ...ce
                }
            }),
            scrollCb: Lr,
            viewportResizeCb: ce => Ee({
                type: J.IncrementalSnapshot,
                data: {
                    source: G.ViewportResize,
                    ...ce
                }
            }),
            inputCb: ce => Ee({
                type: J.IncrementalSnapshot,
                data: {
                    source: G.Input,
                    ...ce
                }
            }),
            mediaInteractionCb: ce => Ee({
                type: J.IncrementalSnapshot,
                data: {
                    source: G.MediaInteraction,
                    ...ce
                }
            }),
            styleSheetRuleCb: ce => Ee({
                type: J.IncrementalSnapshot,
                data: {
                    source: G.StyleSheetRule,
                    ...ce
                }
            }),
            styleDeclarationCb: ce => Ee({
                type: J.IncrementalSnapshot,
                data: {
                    source: G.StyleDeclaration,
                    ...ce
                }
            }),
            canvasMutationCb: Fr,
            fontCb: ce => Ee({
                type: J.IncrementalSnapshot,
                data: {
                    source: G.Font,
                    ...ce
                }
            }),
            selectionCb: ce => {
                Ee({
                    type: J.IncrementalSnapshot,
                    data: {
                        source: G.Selection,
                        ...ce
                    }
                })
            }
            ,
            customElementCb: ce => {
                Ee({
                    type: J.IncrementalSnapshot,
                    data: {
                        source: G.CustomElement,
                        ...ce
                    }
                })
            }
            ,
            blockClass: s,
            ignoreClass: c,
            ignoreSelector: u,
            maskAllText: d,
            maskTextClass: p,
            unmaskTextClass: f,
            maskTextSelector: g,
            unmaskTextSelector: _,
            maskInputOptions: nr,
            inlineStylesheet: y,
            sampling: R,
            recordDOM: D,
            recordCanvas: U,
            inlineImages: V,
            userTriggeredOnInput: le,
            collectFonts: fe,
            doc: ge,
            maskAttributeFn: M,
            maskInputFn: P,
            maskTextFn: L,
            keepIframeSrcFn: te,
            blockSelector: o,
            unblockSelector: a,
            slimDOMOptions: Dt,
            dataURLOptions: x,
            mirror: ot,
            iframeManager: Ke,
            stylesheetManager: Fe,
            shadowDomManager: Lt,
            processedNodeManager: bn,
            canvasManager: wn,
            ignoreCSSAttributes: ke,
            plugins: Qe([be, "optionalAccess", ce => ce.filter, "call", ce => ce(lt => lt.observer), "optionalAccess", ce => ce.map, "call", ce => ce(lt => ({
                observer: lt.observer,
                options: lt.options,
                callback: hi => Ee({
                    type: J.Plugin,
                    data: {
                        plugin: lt.name,
                        payload: hi
                    }
                })
            }))]) || []
        }, {}), "observe");
        Ke.addLoadListener(ge => {
            try {
                ae.push(Ye(ge.contentDocument))
            } catch (ce) {}
        }
        );
        const Q = i( () => {
            tn(),
            ae.push(Ye(document))
        }
        , "init");
        return document.readyState === "interactive" || document.readyState === "complete" ? Q() : (ae.push(Be("DOMContentLoaded", () => {
            Ee({
                type: J.DomContentLoaded,
                data: {}
            }),
            re === "DOMContentLoaded" && Q()
        }
        )),
        ae.push(Be("load", () => {
            Ee({
                type: J.Load,
                data: {}
            }),
            re === "load" && Q()
        }
        , window))),
        () => {
            ae.forEach(ge => ge()),
            bn.destroy(),
            Hs = void 0,
            fT()
        }
    } catch (ae) {}
}
i(At, "record");
function xT(e) {
    if (!Hs)
        throw new Error("please take full snapshot after start recording");
    Hs(e)
}
i(xT, "takeFullSnapshot");
At.mirror = ot;
At.takeFullSnapshot = xT;
function MT(e, t) {
    try {
        return e ? e(t) : new Il
    } catch {
        return new Il
    }
}
i(MT, "_getCanvasManager");
const j = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
  , kl = ["info", "warn", "error", "log"]
  , _s = "[Replay] ";
function Gi(e, t="info") {
    Yt({
        category: "console",
        data: {
            logger: "replay"
        },
        level: t,
        message: `${_s}${e}`
    }, {
        level: t
    })
}
i(Gi, "_addBreadcrumb");
function PT() {
    let e = !1
      , t = !1;
    const n = {
        exception: () => {}
        ,
        infoTick: () => {}
        ,
        setConfig: r => {
            e = r.captureExceptions,
            t = r.traceInternals
        }
    };
    return j ? (kl.forEach(r => {
        n[r] = (...s) => {
            N[r](_s, ...s),
            t && Gi(s.join(""), Vd(r))
        }
    }
    ),
    n.exception = (r, ...s) => {
        s.length && n.error && n.error(...s),
        N.error(_s, r),
        e ? gf(r) : t && Gi(r, "error")
    }
    ,
    n.infoTick = (...r) => {
        N.info(_s, ...r),
        t && setTimeout( () => Gi(r[0]), 0)
    }
    ) : kl.forEach(r => {
        n[r] = () => {}
    }
    ),
    n
}
i(PT, "makeReplayLogger");
const q = PT()
  , NT = 3
  , DT = 5;
function Ia(e) {
    return e > 9999999999 ? e : e * 1e3
}
i(Ia, "timestampToMs");
function Vi(e) {
    return e > 9999999999 ? e / 1e3 : e
}
i(Vi, "timestampToS");
function Nr(e, t) {
    t.category !== "sentry.transaction" && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(),
    e.addUpdate( () => (e.throttledAddEvent({
        type: J.Custom,
        timestamp: (t.timestamp || 0) * 1e3,
        data: {
            tag: "breadcrumb",
            payload: mt(t, 10, 1e3)
        }
    }),
    t.category === "console")))
}
i(Nr, "addBreadcrumbEvent");
const LT = "button,a";
function hp(e) {
    return e.closest(LT) || e
}
i(hp, "getClosestInteractive");
function mp(e) {
    const t = gp(e);
    return !t || !(t instanceof Element) ? t : hp(t)
}
i(mp, "getClickTargetNode");
function gp(e) {
    return FT(e) ? e.target : e
}
i(gp, "getTargetNode");
function FT(e) {
    return typeof e == "object" && !!e && "target"in e
}
i(FT, "isEventWithTarget");
let Wt;
function UT(e) {
    return Wt || (Wt = [],
    $T()),
    Wt.push(e),
    () => {
        const t = Wt ? Wt.indexOf(e) : -1;
        t > -1 && Wt.splice(t, 1)
    }
}
i(UT, "onWindowOpen");
function $T() {
    Ge(me, "open", function(e) {
        return function(...t) {
            if (Wt)
                try {
                    Wt.forEach(n => n())
                } catch {}
            return e.apply(me, t)
        }
    })
}
i($T, "monkeyPatchWindowOpen");
const BT = new Set([G.Mutation, G.StyleSheetRule, G.StyleDeclaration, G.AdoptedStyleSheet, G.CanvasMutation, G.Selection, G.MediaInteraction]);
function HT(e, t, n) {
    e.handleClick(t, n)
}
i(HT, "handleClick");
class jT {
    static{i(this, "ClickDetector")
    }constructor(t, n, r=Nr) {
        this._lastMutation = 0,
        this._lastScroll = 0,
        this._clicks = [],
        this._timeout = n.timeout / 1e3,
        this._threshold = n.threshold / 1e3,
        this._scrollTimeout = n.scrollTimeout / 1e3,
        this._replay = t,
        this._ignoreSelector = n.ignoreSelector,
        this._addBreadcrumbEvent = r
    }
    addListeners() {
        const t = UT( () => {
            this._lastMutation = Rl()
        }
        );
        this._teardown = () => {
            t(),
            this._clicks = [],
            this._lastMutation = 0,
            this._lastScroll = 0
        }
    }
    removeListeners() {
        this._teardown && this._teardown(),
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
    }
    handleClick(t, n) {
        if (qT(n, this._ignoreSelector) || !zT(t))
            return;
        const r = {
            timestamp: Vi(t.timestamp),
            clickBreadcrumb: t,
            clickCount: 0,
            node: n
        };
        this._clicks.some(s => s.node === r.node && Math.abs(s.timestamp - r.timestamp) < 1) || (this._clicks.push(r),
        this._clicks.length === 1 && this._scheduleCheckClicks())
    }
    registerMutation(t=Date.now()) {
        this._lastMutation = Vi(t)
    }
    registerScroll(t=Date.now()) {
        this._lastScroll = Vi(t)
    }
    registerClick(t) {
        const n = hp(t);
        this._handleMultiClick(n)
    }
    _handleMultiClick(t) {
        this._getClicks(t).forEach(n => {
            n.clickCount++
        }
        )
    }
    _getClicks(t) {
        return this._clicks.filter(n => n.node === t)
    }
    _checkClicks() {
        const t = []
          , n = Rl();
        this._clicks.forEach(r => {
            !r.mutationAfter && this._lastMutation && (r.mutationAfter = r.timestamp <= this._lastMutation ? this._lastMutation - r.timestamp : void 0),
            !r.scrollAfter && this._lastScroll && (r.scrollAfter = r.timestamp <= this._lastScroll ? this._lastScroll - r.timestamp : void 0),
            r.timestamp + this._timeout <= n && t.push(r)
        }
        );
        for (const r of t) {
            const s = this._clicks.indexOf(r);
            s > -1 && (this._generateBreadcrumbs(r),
            this._clicks.splice(s, 1))
        }
        this._clicks.length && this._scheduleCheckClicks()
    }
    _generateBreadcrumbs(t) {
        const n = this._replay
          , r = t.scrollAfter && t.scrollAfter <= this._scrollTimeout
          , s = t.mutationAfter && t.mutationAfter <= this._threshold
          , o = !r && !s
          , {clickCount: a, clickBreadcrumb: c} = t;
        if (o) {
            const u = Math.min(t.mutationAfter || this._timeout, this._timeout) * 1e3
              , d = u < this._timeout * 1e3 ? "mutation" : "timeout"
              , p = {
                type: "default",
                message: c.message,
                timestamp: c.timestamp,
                category: "ui.slowClickDetected",
                data: {
                    ...c.data,
                    url: me.location.href,
                    route: n.getCurrentRoute(),
                    timeAfterClickMs: u,
                    endReason: d,
                    clickCount: a || 1
                }
            };
            this._addBreadcrumbEvent(n, p);
            return
        }
        if (a > 1) {
            const u = {
                type: "default",
                message: c.message,
                timestamp: c.timestamp,
                category: "ui.multiClick",
                data: {
                    ...c.data,
                    url: me.location.href,
                    route: n.getCurrentRoute(),
                    clickCount: a,
                    metric: !0
                }
            };
            this._addBreadcrumbEvent(n, u)
        }
    }
    _scheduleCheckClicks() {
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
        this._checkClickTimeout = jn( () => this._checkClicks(), 1e3)
    }
}
const WT = ["A", "BUTTON", "INPUT"];
function qT(e, t) {
    return !!(!WT.includes(e.tagName) || e.tagName === "INPUT" && !["submit", "button"].includes(e.getAttribute("type") || "") || e.tagName === "A" && (e.hasAttribute("download") || e.hasAttribute("target") && e.getAttribute("target") !== "_self") || t && e.matches(t))
}
i(qT, "ignoreElement");
function zT(e) {
    return !!(e.data && typeof e.data.nodeId == "number" && e.timestamp)
}
i(zT, "isClickBreadcrumb");
function Rl() {
    return Date.now() / 1e3
}
i(Rl, "nowInSeconds");
function GT(e, t) {
    try {
        if (!VT(t))
            return;
        const {source: n} = t.data;
        if (BT.has(n) && e.registerMutation(t.timestamp),
        n === G.Scroll && e.registerScroll(t.timestamp),
        KT(t)) {
            const {type: r, id: s} = t.data
              , o = At.mirror.getNode(s);
            o instanceof HTMLElement && r === Ue.Click && e.registerClick(o)
        }
    } catch {}
}
i(GT, "updateClickDetectorForRecordingEvent");
function VT(e) {
    return e.type === NT
}
i(VT, "isIncrementalEvent");
function KT(e) {
    return e.data.source === G.MouseInteraction
}
i(KT, "isIncrementalMouseInteraction");
function _t(e) {
    return {
        timestamp: Date.now() / 1e3,
        type: "default",
        ...e
    }
}
i(_t, "createBreadcrumb");
var js;
(function(e) {
    e[e.Document = 0] = "Document",
    e[e.DocumentType = 1] = "DocumentType",
    e[e.Element = 2] = "Element",
    e[e.Text = 3] = "Text",
    e[e.CDATA = 4] = "CDATA",
    e[e.Comment = 5] = "Comment"
}
)(js || (js = {}));
const YT = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]);
function JT(e) {
    const t = {};
    !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = e["data-sentry-element"]);
    for (const n in e)
        if (YT.has(n)) {
            let r = n;
            (n === "data-testid" || n === "data-test-id") && (r = "testId"),
            t[r] = e[n]
        }
    return t
}
i(JT, "getAttributesToRecord");
const XT = i(e => t => {
    if (!e.isEnabled())
        return;
    const n = QT(t);
    if (!n)
        return;
    const r = t.name === "click"
      , s = r ? t.event : void 0;
    r && e.clickDetector && s && s.target && !s.altKey && !s.metaKey && !s.ctrlKey && !s.shiftKey && HT(e.clickDetector, n, mp(t.event)),
    Nr(e, n)
}
, "handleDomListener");
function yp(e, t) {
    const n = At.mirror.getId(e)
      , r = n && At.mirror.getNode(n)
      , s = r && At.mirror.getMeta(r)
      , o = s && e0(s) ? s : null;
    return {
        message: t,
        data: o ? {
            nodeId: n,
            node: {
                id: n,
                tagName: o.tagName,
                textContent: Array.from(o.childNodes).map(a => a.type === js.Text && a.textContent).filter(Boolean).map(a => a.trim()).join(""),
                attributes: JT(o.attributes)
            }
        } : {}
    }
}
i(yp, "getBaseDomBreadcrumb");
function QT(e) {
    const {target: t, message: n} = ZT(e);
    return _t({
        category: `ui.${e.name}`,
        ...yp(t, n)
    })
}
i(QT, "handleDom");
function ZT(e) {
    const t = e.name === "click";
    let n, r = null;
    try {
        r = t ? mp(e.event) : gp(e.event),
        n = xt(r, {
            maxStringLength: 200
        }) || "<unknown>"
    } catch {
        n = "<unknown>"
    }
    return {
        target: r,
        message: n
    }
}
i(ZT, "getDomTarget");
function e0(e) {
    return e.type === js.Element
}
i(e0, "isElement");
function t0(e, t) {
    if (!e.isEnabled())
        return;
    e.updateUserActivity();
    const n = n0(t);
    n && Nr(e, n)
}
i(t0, "handleKeyboardEvent");
function n0(e) {
    const {metaKey: t, shiftKey: n, ctrlKey: r, altKey: s, key: o, target: a} = e;
    if (!a || r0(a) || !o)
        return null;
    const c = t || r || s
      , u = o.length === 1;
    if (!c && u)
        return null;
    const d = xt(a, {
        maxStringLength: 200
    }) || "<unknown>"
      , p = yp(a, d);
    return _t({
        category: "ui.keyDown",
        message: d,
        data: {
            ...p.data,
            metaKey: t,
            shiftKey: n,
            ctrlKey: r,
            altKey: s,
            key: o
        }
    })
}
i(n0, "getKeyboardBreadcrumb");
function r0(e) {
    return e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable
}
i(r0, "isInputElement");
const s0 = {
    resource: u0,
    paint: a0,
    navigation: c0
};
function as(e, t) {
    return ({metric: n}) => void t.replayPerformanceEntries.push(e(n))
}
i(as, "webVitalHandler");
function i0(e) {
    return e.map(o0).filter(Boolean)
}
i(i0, "createPerformanceEntries");
function o0(e) {
    const t = s0[e.entryType];
    return t ? t(e) : null
}
i(o0, "createPerformanceEntry");
function zn(e) {
    return ((je || me.performance.timeOrigin) + e) / 1e3
}
i(zn, "getAbsoluteTime$1");
function a0(e) {
    const {duration: t, entryType: n, name: r, startTime: s} = e
      , o = zn(s);
    return {
        type: n,
        name: r,
        start: o,
        end: o + t,
        data: void 0
    }
}
i(a0, "createPaintEntry");
function c0(e) {
    const {entryType: t, name: n, decodedBodySize: r, duration: s, domComplete: o, encodedBodySize: a, domContentLoadedEventStart: c, domContentLoadedEventEnd: u, domInteractive: d, loadEventStart: p, loadEventEnd: f, redirectCount: g, startTime: _, transferSize: y, type: v} = e;
    return s === 0 ? null : {
        type: `${t}.${v}`,
        start: zn(_),
        end: zn(o),
        name: n,
        data: {
            size: y,
            decodedBodySize: r,
            encodedBodySize: a,
            duration: s,
            domInteractive: d,
            domContentLoadedEventStart: c,
            domContentLoadedEventEnd: u,
            loadEventStart: p,
            loadEventEnd: f,
            domComplete: o,
            redirectCount: g
        }
    }
}
i(c0, "createNavigationEntry");
function u0(e) {
    const {entryType: t, initiatorType: n, name: r, responseEnd: s, startTime: o, decodedBodySize: a, encodedBodySize: c, responseStatus: u, transferSize: d} = e;
    return ["fetch", "xmlhttprequest"].includes(n) ? null : {
        type: `${t}.${n}`,
        start: zn(o),
        end: zn(s),
        name: r,
        data: {
            size: d,
            statusCode: u,
            decodedBodySize: a,
            encodedBodySize: c
        }
    }
}
i(u0, "createResourceEntry");
function l0(e) {
    const t = e.entries[e.entries.length - 1]
      , n = t && t.element ? [t.element] : void 0;
    return ui(e, "largest-contentful-paint", n)
}
i(l0, "getLargestContentfulPaint");
function d0(e) {
    return e.sources !== void 0
}
i(d0, "isLayoutShift");
function f0(e) {
    const t = []
      , n = [];
    for (const r of e.entries)
        if (d0(r)) {
            const s = [];
            for (const o of r.sources)
                if (o.node) {
                    n.push(o.node);
                    const a = At.mirror.getId(o.node);
                    a && s.push(a)
                }
            t.push({
                value: r.value,
                nodeIds: s.length ? s : void 0
            })
        }
    return ui(e, "cumulative-layout-shift", n, t)
}
i(f0, "getCumulativeLayoutShift");
function p0(e) {
    const t = e.entries[e.entries.length - 1]
      , n = t && t.target ? [t.target] : void 0;
    return ui(e, "first-input-delay", n)
}
i(p0, "getFirstInputDelay");
function h0(e) {
    const t = e.entries[e.entries.length - 1]
      , n = t && t.target ? [t.target] : void 0;
    return ui(e, "interaction-to-next-paint", n)
}
i(h0, "getInteractionToNextPaint");
function ui(e, t, n, r) {
    const s = e.value
      , o = e.rating
      , a = zn(s);
    return {
        type: "web-vital",
        name: t,
        start: a,
        end: a,
        data: {
            value: s,
            size: s,
            rating: o,
            nodeIds: n ? n.map(c => At.mirror.getId(c)) : void 0,
            attributions: r
        }
    }
}
i(ui, "getWebVital");
function m0(e) {
    function t(s) {
        e.performanceEntries.includes(s) || e.performanceEntries.push(s)
    }
    i(t, "addPerformanceEntry");
    function n({entries: s}) {
        s.forEach(t)
    }
    i(n, "onEntries");
    const r = [];
    return ["navigation", "paint", "resource"].forEach(s => {
        r.push(Hn(s, n))
    }
    ),
    r.push(Df(as(l0, e)), ga(as(f0, e)), Lf(as(p0, e)), Ff(as(h0, e))),
    () => {
        r.forEach(s => s())
    }
}
i(m0, "setupPerformanceObserver");
const g0 = 'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=A(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},U=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=x(f,15),M=b.t,E=b.l,A=x(h,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=C[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(a[t]^a[t+1]<<A^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=U(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=U(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(J)return J.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),a=0,s=function(t){i[a++]=t},o=0;o<e;++o){if(a+5>i.length){var f=new t(a+8+(e-o<<1));f.set(i),i=f}var h=n.charCodeAt(o);h<128||r?s(h):h<2048?(s(192|h>>6),s(128|63&h)):h>55295&&h<57344?(s(240|(h=65536+(1047552&h)|1023&n.charCodeAt(++o))>>18),s(128|h>>12&63),s(128|h>>6&63),s(128|63&h)):(s(224|h>>12),s(128|h>>6&63),s(128|63&h))}return b(i,0,a)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});';
function y0() {
    const e = new Blob([g0]);
    return URL.createObjectURL(e)
}
i(y0, "e");
class ka extends Error {
    static{i(this, "EventBufferSizeExceededError")
    }constructor() {
        super(`Event buffer exceeded maximum size of ${va}.`)
    }
}
class _p {
    static{i(this, "EventBufferArray")
    }constructor() {
        this.events = [],
        this._totalSize = 0,
        this.hasCheckout = !1
    }
    get hasEvents() {
        return this.events.length > 0
    }
    get type() {
        return "sync"
    }
    destroy() {
        this.events = []
    }
    async addEvent(t) {
        const n = JSON.stringify(t).length;
        if (this._totalSize += n,
        this._totalSize > va)
            throw new ka;
        this.events.push(t)
    }
    finish() {
        return new Promise(t => {
            const n = this.events;
            this.clear(),
            t(JSON.stringify(n))
        }
        )
    }
    clear() {
        this.events = [],
        this._totalSize = 0,
        this.hasCheckout = !1
    }
    getEarliestTimestamp() {
        const t = this.events.map(n => n.timestamp).sort()[0];
        return t ? Ia(t) : null
    }
}
class _0 {
    static{i(this, "WorkerHandler")
    }constructor(t) {
        this._worker = t,
        this._id = 0
    }
    ensureReady() {
        return this._ensureReadyPromise ? this._ensureReadyPromise : (this._ensureReadyPromise = new Promise( (t, n) => {
            this._worker.addEventListener("message", ({data: r}) => {
                r.success ? t() : n()
            }
            , {
                once: !0
            }),
            this._worker.addEventListener("error", r => {
                n(r)
            }
            , {
                once: !0
            })
        }
        ),
        this._ensureReadyPromise)
    }
    destroy() {
        j && q.info("Destroying compression worker"),
        this._worker.terminate()
    }
    postMessage(t, n) {
        const r = this._getAndIncrementId();
        return new Promise( (s, o) => {
            const a = i( ({data: c}) => {
                const u = c;
                if (u.method === t && u.id === r) {
                    if (this._worker.removeEventListener("message", a),
                    !u.success) {
                        j && q.error("Error in compression worker: ", u.response),
                        o(new Error("Error in compression worker"));
                        return
                    }
                    s(u.response)
                }
            }
            , "listener");
            this._worker.addEventListener("message", a),
            this._worker.postMessage({
                id: r,
                method: t,
                arg: n
            })
        }
        )
    }
    _getAndIncrementId() {
        return this._id++
    }
}
class S0 {
    static{i(this, "EventBufferCompressionWorker")
    }constructor(t) {
        this._worker = new _0(t),
        this._earliestTimestamp = null,
        this._totalSize = 0,
        this.hasCheckout = !1
    }
    get hasEvents() {
        return !!this._earliestTimestamp
    }
    get type() {
        return "worker"
    }
    ensureReady() {
        return this._worker.ensureReady()
    }
    destroy() {
        this._worker.destroy()
    }
    addEvent(t) {
        const n = Ia(t.timestamp);
        (!this._earliestTimestamp || n < this._earliestTimestamp) && (this._earliestTimestamp = n);
        const r = JSON.stringify(t);
        return this._totalSize += r.length,
        this._totalSize > va ? Promise.reject(new ka) : this._sendEventToWorker(r)
    }
    finish() {
        return this._finishRequest()
    }
    clear() {
        this._earliestTimestamp = null,
        this._totalSize = 0,
        this.hasCheckout = !1,
        this._worker.postMessage("clear").then(null, t => {
            j && q.exception(t, 'Sending "clear" message to worker failed', t)
        }
        )
    }
    getEarliestTimestamp() {
        return this._earliestTimestamp
    }
    _sendEventToWorker(t) {
        return this._worker.postMessage("addEvent", t)
    }
    async _finishRequest() {
        const t = await this._worker.postMessage("finish");
        return this._earliestTimestamp = null,
        this._totalSize = 0,
        t
    }
}
class v0 {
    static{i(this, "EventBufferProxy")
    }constructor(t) {
        this._fallback = new _p,
        this._compression = new S0(t),
        this._used = this._fallback,
        this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
    }
    get type() {
        return this._used.type
    }
    get hasEvents() {
        return this._used.hasEvents
    }
    get hasCheckout() {
        return this._used.hasCheckout
    }
    set hasCheckout(t) {
        this._used.hasCheckout = t
    }
    destroy() {
        this._fallback.destroy(),
        this._compression.destroy()
    }
    clear() {
        return this._used.clear()
    }
    getEarliestTimestamp() {
        return this._used.getEarliestTimestamp()
    }
    addEvent(t) {
        return this._used.addEvent(t)
    }
    async finish() {
        return await this.ensureWorkerIsLoaded(),
        this._used.finish()
    }
    ensureWorkerIsLoaded() {
        return this._ensureWorkerIsLoadedPromise
    }
    async _ensureWorkerIsLoaded() {
        try {
            await this._compression.ensureReady()
        } catch (t) {
            j && q.exception(t, "Failed to load the compression worker, falling back to simple buffer");
            return
        }
        await this._switchToCompressionWorker()
    }
    async _switchToCompressionWorker() {
        const {events: t, hasCheckout: n} = this._fallback
          , r = [];
        for (const s of t)
            r.push(this._compression.addEvent(s));
        this._compression.hasCheckout = n,
        this._used = this._compression;
        try {
            await Promise.all(r),
            this._fallback.clear()
        } catch (s) {
            j && q.exception(s, "Failed to add events when switching buffers.")
        }
    }
}
function E0({useCompression: e, workerUrl: t}) {
    if (e && window.Worker) {
        const n = b0(t);
        if (n)
            return n
    }
    return j && q.info("Using simple buffer"),
    new _p
}
i(E0, "createEventBuffer");
function b0(e) {
    try {
        const t = e || w0();
        if (!t)
            return;
        j && q.info(`Using compression worker${e ? ` from ${e}` : ""}`);
        const n = new Worker(t);
        return new v0(n)
    } catch (t) {
        j && q.exception(t, "Failed to create compression worker")
    }
}
i(b0, "_loadWorker");
function w0() {
    return typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ > "u" || !__SENTRY_EXCLUDE_REPLAY_WORKER__ ? y0() : ""
}
i(w0, "_getWorkerUrl");
function Ra() {
    try {
        return "sessionStorage"in me && !!me.sessionStorage
    } catch {
        return !1
    }
}
i(Ra, "hasSessionStorage");
function T0(e) {
    I0(),
    e.session = void 0
}
i(T0, "clearSession");
function I0() {
    if (Ra())
        try {
            me.sessionStorage.removeItem(_a)
        } catch {}
}
i(I0, "deleteSession");
function Sp(e) {
    return e === void 0 ? !1 : Math.random() < e
}
i(Sp, "isSampled");
function vp(e) {
    const t = Date.now()
      , n = e.id || Se()
      , r = e.started || t
      , s = e.lastActivity || t
      , o = e.segmentId || 0
      , a = e.sampled
      , c = e.previousSessionId;
    return {
        id: n,
        started: r,
        lastActivity: s,
        segmentId: o,
        sampled: a,
        previousSessionId: c
    }
}
i(vp, "makeSession");
function Ca(e) {
    if (Ra())
        try {
            me.sessionStorage.setItem(_a, JSON.stringify(e))
        } catch {}
}
i(Ca, "saveSession");
function k0(e, t) {
    return Sp(e) ? "session" : t ? "buffer" : !1
}
i(k0, "getSessionSampleType");
function Cl({sessionSampleRate: e, allowBuffering: t, stickySession: n=!1}, {previousSessionId: r}={}) {
    const s = k0(e, t)
      , o = vp({
        sampled: s,
        previousSessionId: r
    });
    return n && Ca(o),
    o
}
i(Cl, "createSession");
function R0() {
    if (!Ra())
        return null;
    try {
        const e = me.sessionStorage.getItem(_a);
        if (!e)
            return null;
        const t = JSON.parse(e);
        return j && q.infoTick("Loading existing session"),
        vp(t)
    } catch {
        return null
    }
}
i(R0, "fetchSession");
function Lo(e, t, n=+new Date) {
    return e === null || t === void 0 || t < 0 ? !0 : t === 0 ? !1 : e + t <= n
}
i(Lo, "isExpired");
function Ep(e, {maxReplayDuration: t, sessionIdleExpire: n, targetTime: r=Date.now()}) {
    return Lo(e.started, t, r) || Lo(e.lastActivity, n, r)
}
i(Ep, "isSessionExpired");
function bp(e, {sessionIdleExpire: t, maxReplayDuration: n}) {
    return !(!Ep(e, {
        sessionIdleExpire: t,
        maxReplayDuration: n
    }) || e.sampled === "buffer" && e.segmentId === 0)
}
i(bp, "shouldRefreshSession");
function Ki({sessionIdleExpire: e, maxReplayDuration: t, previousSessionId: n}, r) {
    const s = r.stickySession && R0();
    return s ? bp(s, {
        sessionIdleExpire: e,
        maxReplayDuration: t
    }) ? (j && q.infoTick("Session in sessionStorage is expired, creating new one..."),
    Cl(r, {
        previousSessionId: s.id
    })) : s : (j && q.infoTick("Creating new session"),
    Cl(r, {
        previousSessionId: n
    }))
}
i(Ki, "loadOrCreateSession");
function C0(e) {
    return e.type === J.Custom
}
i(C0, "isCustomEvent");
function Aa(e, t, n) {
    return Tp(e, t) ? (wp(e, t, n),
    !0) : !1
}
i(Aa, "addEventSync");
function A0(e, t, n) {
    return Tp(e, t) ? wp(e, t, n) : Promise.resolve(null)
}
i(A0, "addEvent");
async function wp(e, t, n) {
    if (!e.eventBuffer)
        return null;
    try {
        n && e.recordingMode === "buffer" && e.eventBuffer.clear(),
        n && (e.eventBuffer.hasCheckout = !0);
        const r = e.getOptions()
          , s = O0(t, r.beforeAddRecordingEvent);
        return s ? await e.eventBuffer.addEvent(s) : void 0
    } catch (r) {
        const s = r && r instanceof ka ? "addEventSizeExceeded" : "addEvent";
        e.handleException(r),
        await e.stop({
            reason: s
        });
        const o = Z();
        o && o.recordDroppedEvent("internal_sdk_error", "replay")
    }
}
i(wp, "_addEvent");
function Tp(e, t) {
    if (!e.eventBuffer || e.isPaused() || !e.isEnabled())
        return !1;
    const n = Ia(t.timestamp);
    return n + e.timeouts.sessionIdlePause < Date.now() ? !1 : n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration ? (j && q.infoTick(`Skipping event with timestamp ${n} because it is after maxReplayDuration`),
    !1) : !0
}
i(Tp, "shouldAddEvent");
function O0(e, t) {
    try {
        if (typeof t == "function" && C0(e))
            return t(e)
    } catch (n) {
        return j && q.exception(n, "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event..."),
        null
    }
    return e
}
i(O0, "maybeApplyCallback");
function Oa(e) {
    return !e.type
}
i(Oa, "isErrorEvent");
function Fo(e) {
    return e.type === "transaction"
}
i(Fo, "isTransactionEvent");
function x0(e) {
    return e.type === "replay_event"
}
i(x0, "isReplayEvent");
function Al(e) {
    return e.type === "feedback"
}
i(Al, "isFeedbackEvent");
function M0(e) {
    return (t, n) => {
        if (!e.isEnabled() || !Oa(t) && !Fo(t))
            return;
        const r = n && n.statusCode;
        if (!(!r || r < 200 || r >= 300)) {
            if (Fo(t)) {
                P0(e, t);
                return
            }
            N0(e, t)
        }
    }
}
i(M0, "handleAfterSendEvent");
function P0(e, t) {
    const n = e.getContext();
    t.contexts && t.contexts.trace && t.contexts.trace.trace_id && n.traceIds.size < 100 && n.traceIds.add(t.contexts.trace.trace_id)
}
i(P0, "handleTransactionEvent");
function N0(e, t) {
    const n = e.getContext();
    if (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id),
    e.recordingMode !== "buffer" || !t.tags || !t.tags.replayId)
        return;
    const {beforeErrorSampling: r} = e.getOptions();
    typeof r == "function" && !r(t) || jn(async () => {
        try {
            await e.sendBufferedReplayOrFlush()
        } catch (s) {
            e.handleException(s)
        }
    }
    )
}
i(N0, "handleErrorEvent");
function D0(e) {
    return t => {
        !e.isEnabled() || !Oa(t) || L0(e, t)
    }
}
i(D0, "handleBeforeSendEvent");
function L0(e, t) {
    const n = t.exception && t.exception.values && t.exception.values[0] && t.exception.values[0].value;
    if (typeof n == "string" && (n.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i))) {
        const r = _t({
            category: "replay.hydrate-error",
            data: {
                url: xd()
            }
        });
        Nr(e, r)
    }
}
i(L0, "handleHydrationError");
function F0(e) {
    const t = Z();
    t && t.on("beforeAddBreadcrumb", n => U0(e, n))
}
i(F0, "handleBreadcrumbs");
function U0(e, t) {
    if (!e.isEnabled() || !Ip(t))
        return;
    const n = $0(t);
    n && Nr(e, n)
}
i(U0, "beforeAddBreadcrumb");
function $0(e) {
    return !Ip(e) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.") ? null : e.category === "console" ? B0(e) : _t(e)
}
i($0, "normalizeBreadcrumb");
function B0(e) {
    const t = e.data && e.data.arguments;
    if (!Array.isArray(t) || t.length === 0)
        return _t(e);
    let n = !1;
    const r = t.map(s => {
        if (!s)
            return s;
        if (typeof s == "string")
            return s.length > ss ? (n = !0,
            `${s.slice(0, ss)}…`) : s;
        if (typeof s == "object")
            try {
                const o = mt(s, 7);
                return JSON.stringify(o).length > ss ? (n = !0,
                `${JSON.stringify(o, null, 2).slice(0, ss)}…`) : o
            } catch {}
        return s
    }
    );
    return _t({
        ...e,
        data: {
            ...e.data,
            arguments: r,
            ...n ? {
                _meta: {
                    warnings: ["CONSOLE_ARG_TRUNCATED"]
                }
            } : {}
        }
    })
}
i(B0, "normalizeConsoleBreadcrumb");
function Ip(e) {
    return !!e.category
}
i(Ip, "isBreadcrumbWithCategory");
function H0(e, t) {
    return e.type || !e.exception || !e.exception.values || !e.exception.values.length ? !1 : !!(t.originalException && t.originalException.__rrweb__)
}
i(H0, "isRrwebError");
function j0(e, t) {
    e.triggerUserActivity(),
    e.addUpdate( () => t.timestamp ? (e.throttledAddEvent({
        type: J.Custom,
        timestamp: t.timestamp * 1e3,
        data: {
            tag: "breadcrumb",
            payload: {
                timestamp: t.timestamp,
                type: "default",
                category: "sentry.feedback",
                data: {
                    feedbackId: t.event_id
                }
            }
        }
    }),
    !1) : !0)
}
i(j0, "addFeedbackBreadcrumb");
function W0(e, t) {
    return e.recordingMode !== "buffer" || t.message === Sa || !t.exception || t.type ? !1 : Sp(e.getOptions().errorSampleRate)
}
i(W0, "shouldSampleForBufferEvent");
function q0(e) {
    return Object.assign( (t, n) => !e.isEnabled() || e.isPaused() ? t : x0(t) ? (delete t.breadcrumbs,
    t) : !Oa(t) && !Fo(t) && !Al(t) || !e.checkAndHandleExpiredSession() ? t : Al(t) ? (e.flush(),
    t.contexts.feedback.replay_id = e.getSessionId(),
    j0(e, t),
    t) : H0(t, n) && !e.getOptions()._experiments.captureExceptions ? (j && q.log("Ignoring error from rrweb internals", t),
    null) : ((W0(e, t) || e.recordingMode === "session") && (t.tags = {
        ...t.tags,
        replayId: e.getSessionId()
    }),
    t), {
        id: "Replay"
    })
}
i(q0, "handleGlobalEventListener");
function li(e, t) {
    return t.map( ({type: n, start: r, end: s, name: o, data: a}) => {
        const c = e.throttledAddEvent({
            type: J.Custom,
            timestamp: r,
            data: {
                tag: "performanceSpan",
                payload: {
                    op: n,
                    description: o,
                    startTimestamp: r,
                    endTimestamp: s,
                    data: a
                }
            }
        });
        return typeof c == "string" ? Promise.resolve(null) : c
    }
    )
}
i(li, "createPerformanceSpans");
function z0(e) {
    const {from: t, to: n} = e
      , r = Date.now() / 1e3;
    return {
        type: "navigation.push",
        start: r,
        end: r,
        name: n,
        data: {
            previous: t
        }
    }
}
i(z0, "handleHistory");
function G0(e) {
    return t => {
        if (!e.isEnabled())
            return;
        const n = z0(t);
        n !== null && (e.getContext().urls.push(n.name),
        e.triggerUserActivity(),
        e.addUpdate( () => (li(e, [n]),
        !1)))
    }
}
i(G0, "handleHistorySpanListener");
function V0(e, t) {
    return j && e.getOptions()._experiments.traceInternals ? !1 : Sv(t, Z())
}
i(V0, "shouldFilterRequest");
function kp(e, t) {
    e.isEnabled() && t !== null && (V0(e, t.name) || e.addUpdate( () => (li(e, [t]),
    !0)))
}
i(kp, "addNetworkBreadcrumb");
function di(e) {
    if (!e)
        return;
    const t = new TextEncoder;
    try {
        if (typeof e == "string")
            return t.encode(e).length;
        if (e instanceof URLSearchParams)
            return t.encode(e.toString()).length;
        if (e instanceof FormData) {
            const n = Op(e);
            return t.encode(n).length
        }
        if (e instanceof Blob)
            return e.size;
        if (e instanceof ArrayBuffer)
            return e.byteLength
    } catch {}
}
i(di, "getBodySize");
function Rp(e) {
    if (!e)
        return;
    const t = parseInt(e, 10);
    return isNaN(t) ? void 0 : t
}
i(Rp, "parseContentLengthHeader");
function Cp(e) {
    try {
        if (typeof e == "string")
            return [e];
        if (e instanceof URLSearchParams)
            return [e.toString()];
        if (e instanceof FormData)
            return [Op(e)];
        if (!e)
            return [void 0]
    } catch (t) {
        return j && q.exception(t, "Failed to serialize body", e),
        [void 0, "BODY_PARSE_ERROR"]
    }
    return j && q.info("Skipping network body because of body type", e),
    [void 0, "UNPARSEABLE_BODY_TYPE"]
}
i(Cp, "getBodyString");
function Ws(e, t) {
    if (!e)
        return {
            headers: {},
            size: void 0,
            _meta: {
                warnings: [t]
            }
        };
    const n = {
        ...e._meta
    }
      , r = n.warnings || [];
    return n.warnings = [...r, t],
    e._meta = n,
    e
}
i(Ws, "mergeWarning");
function Ap(e, t) {
    if (!t)
        return null;
    const {startTimestamp: n, endTimestamp: r, url: s, method: o, statusCode: a, request: c, response: u} = t;
    return {
        type: e,
        start: n / 1e3,
        end: r / 1e3,
        name: s,
        data: Ae({
            method: o,
            statusCode: a,
            request: c,
            response: u
        })
    }
}
i(Ap, "makeNetworkReplayBreadcrumb");
function br(e) {
    return {
        headers: {},
        size: e,
        _meta: {
            warnings: ["URL_SKIPPED"]
        }
    }
}
i(br, "buildSkippedNetworkRequestOrResponse");
function Gt(e, t, n) {
    if (!t && Object.keys(e).length === 0)
        return;
    if (!t)
        return {
            headers: e
        };
    if (!n)
        return {
            headers: e,
            size: t
        };
    const r = {
        headers: e,
        size: t
    }
      , {body: s, warnings: o} = K0(n);
    return r.body = s,
    o && o.length > 0 && (r._meta = {
        warnings: o
    }),
    r
}
i(Gt, "buildNetworkRequestOrResponse");
function Uo(e, t) {
    return Object.entries(e).reduce( (n, [r,s]) => {
        const o = r.toLowerCase();
        return t.includes(o) && e[r] && (n[o] = s),
        n
    }
    , {})
}
i(Uo, "getAllowedHeaders");
function Op(e) {
    return new URLSearchParams(e).toString()
}
i(Op, "_serializeFormData");
function K0(e) {
    if (!e || typeof e != "string")
        return {
            body: e
        };
    const t = e.length > dl
      , n = Y0(e);
    if (t) {
        const r = e.slice(0, dl);
        return n ? {
            body: r,
            warnings: ["MAYBE_JSON_TRUNCATED"]
        } : {
            body: `${r}…`,
            warnings: ["TEXT_TRUNCATED"]
        }
    }
    if (n)
        try {
            return {
                body: JSON.parse(e)
            }
        } catch {}
    return {
        body: e
    }
}
i(K0, "normalizeNetworkBody");
function Y0(e) {
    const t = e[0]
      , n = e[e.length - 1];
    return t === "[" && n === "]" || t === "{" && n === "}"
}
i(Y0, "_strIsProbablyJson");
function qs(e, t) {
    const n = J0(e);
    return zt(n, t)
}
i(qs, "urlMatches");
function J0(e, t=me.document.baseURI) {
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(me.location.origin))
        return e;
    const n = new URL(e,t);
    if (n.origin !== new URL(t).origin)
        return e;
    const r = n.href;
    return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
}
i(J0, "getFullUrl");
async function X0(e, t, n) {
    try {
        const r = await Z0(e, t, n)
          , s = Ap("resource.fetch", r);
        kp(n.replay, s)
    } catch (r) {
        j && q.exception(r, "Failed to capture fetch breadcrumb")
    }
}
i(X0, "captureFetchBreadcrumbToReplay");
function Q0(e, t) {
    const {input: n, response: r} = t
      , s = n ? xp(n) : void 0
      , o = di(s)
      , a = r ? Rp(r.headers.get("content-length")) : void 0;
    o !== void 0 && (e.data.request_body_size = o),
    a !== void 0 && (e.data.response_body_size = a)
}
i(Q0, "enrichFetchBreadcrumb");
async function Z0(e, t, n) {
    const r = Date.now()
      , {startTimestamp: s=r, endTimestamp: o=r} = t
      , {url: a, method: c, status_code: u=0, request_body_size: d, response_body_size: p} = e.data
      , f = qs(a, n.networkDetailAllowUrls) && !qs(a, n.networkDetailDenyUrls)
      , g = f ? eI(n, t.input, d) : br(d)
      , _ = await tI(f, n, t.response, p);
    return {
        startTimestamp: s,
        endTimestamp: o,
        url: a,
        method: c,
        statusCode: u,
        request: g,
        response: _
    }
}
i(Z0, "_prepareFetchData");
function eI({networkCaptureBodies: e, networkRequestHeaders: t}, n, r) {
    const s = n ? sI(n, t) : {};
    if (!e)
        return Gt(s, r, void 0);
    const o = xp(n)
      , [a,c] = Cp(o)
      , u = Gt(s, r, a);
    return c ? Ws(u, c) : u
}
i(eI, "_getRequestInfo");
async function tI(e, {networkCaptureBodies: t, networkResponseHeaders: n}, r, s) {
    if (!e && s !== void 0)
        return br(s);
    const o = r ? Mp(r.headers, n) : {};
    if (!r || !t && s !== void 0)
        return Gt(o, s, void 0);
    const [a,c] = await rI(r)
      , u = nI(a, {
        networkCaptureBodies: t,
        responseBodySize: s,
        captureDetails: e,
        headers: o
    });
    return c ? Ws(u, c) : u
}
i(tI, "_getResponseInfo");
function nI(e, {networkCaptureBodies: t, responseBodySize: n, captureDetails: r, headers: s}) {
    try {
        const o = e && e.length && n === void 0 ? di(e) : n;
        return r ? t ? Gt(s, o, e) : Gt(s, o, void 0) : br(o)
    } catch (o) {
        return j && q.exception(o, "Failed to serialize response body"),
        Gt(s, n, void 0)
    }
}
i(nI, "getResponseData");
async function rI(e) {
    const t = iI(e);
    if (!t)
        return [void 0, "BODY_PARSE_ERROR"];
    try {
        return [await oI(t)]
    } catch (n) {
        return n instanceof Error && n.message.indexOf("Timeout") > -1 ? (j && q.warn("Parsing text body from response timed out"),
        [void 0, "BODY_PARSE_TIMEOUT"]) : (j && q.exception(n, "Failed to get text body from response"),
        [void 0, "BODY_PARSE_ERROR"])
    }
}
i(rI, "_parseFetchResponseBody");
function xp(e=[]) {
    if (!(e.length !== 2 || typeof e[1] != "object"))
        return e[1].body
}
i(xp, "_getFetchRequestArgBody");
function Mp(e, t) {
    const n = {};
    return t.forEach(r => {
        e.get(r) && (n[r] = e.get(r))
    }
    ),
    n
}
i(Mp, "getAllHeaders");
function sI(e, t) {
    return e.length === 1 && typeof e[0] != "string" ? Ol(e[0], t) : e.length === 2 ? Ol(e[1], t) : {}
}
i(sI, "getRequestHeaders");
function Ol(e, t) {
    if (!e)
        return {};
    const n = e.headers;
    return n ? n instanceof Headers ? Mp(n, t) : Array.isArray(n) ? {} : Uo(n, t) : {}
}
i(Ol, "getHeadersFromOptions");
function iI(e) {
    try {
        return e.clone()
    } catch (t) {
        j && q.exception(t, "Failed to clone response body")
    }
}
i(iI, "_tryCloneResponse");
function oI(e) {
    return new Promise( (t, n) => {
        const r = jn( () => n(new Error("Timeout while trying to read response body")), 500);
        aI(e).then(s => t(s), s => n(s)).finally( () => clearTimeout(r))
    }
    )
}
i(oI, "_tryGetResponseText");
async function aI(e) {
    return await e.text()
}
i(aI, "_getResponseText");
async function cI(e, t, n) {
    try {
        const r = lI(e, t, n)
          , s = Ap("resource.xhr", r);
        kp(n.replay, s)
    } catch (r) {
        j && q.exception(r, "Failed to capture xhr breadcrumb")
    }
}
i(cI, "captureXhrBreadcrumbToReplay");
function uI(e, t) {
    const {xhr: n, input: r} = t;
    if (!n)
        return;
    const s = di(r)
      , o = n.getResponseHeader("content-length") ? Rp(n.getResponseHeader("content-length")) : hI(n.response, n.responseType);
    s !== void 0 && (e.data.request_body_size = s),
    o !== void 0 && (e.data.response_body_size = o)
}
i(uI, "enrichXhrBreadcrumb");
function lI(e, t, n) {
    const r = Date.now()
      , {startTimestamp: s=r, endTimestamp: o=r, input: a, xhr: c} = t
      , {url: u, method: d, status_code: p=0, request_body_size: f, response_body_size: g} = e.data;
    if (!u)
        return null;
    if (!c || !qs(u, n.networkDetailAllowUrls) || qs(u, n.networkDetailDenyUrls)) {
        const A = br(f)
          , R = br(g);
        return {
            startTimestamp: s,
            endTimestamp: o,
            url: u,
            method: d,
            statusCode: p,
            request: A,
            response: R
        }
    }
    const _ = c[on]
      , y = _ ? Uo(_.request_headers, n.networkRequestHeaders) : {}
      , v = Uo(dI(c), n.networkResponseHeaders)
      , [E,k] = n.networkCaptureBodies ? Cp(a) : [void 0]
      , [M,P] = n.networkCaptureBodies ? fI(c) : [void 0]
      , L = Gt(y, f, E)
      , B = Gt(v, g, M);
    return {
        startTimestamp: s,
        endTimestamp: o,
        url: u,
        method: d,
        statusCode: p,
        request: k ? Ws(L, k) : L,
        response: P ? Ws(B, P) : B
    }
}
i(lI, "_prepareXhrData");
function dI(e) {
    const t = e.getAllResponseHeaders();
    return t ? t.split(`\r
`).reduce( (n, r) => {
        const [s,o] = r.split(": ");
        return o && (n[s.toLowerCase()] = o),
        n
    }
    , {}) : {}
}
i(dI, "getResponseHeaders");
function fI(e) {
    const t = [];
    try {
        return [e.responseText]
    } catch (n) {
        t.push(n)
    }
    try {
        return pI(e.response, e.responseType)
    } catch (n) {
        t.push(n)
    }
    return j && q.warn("Failed to get xhr response body", ...t),
    [void 0]
}
i(fI, "_getXhrResponseBody");
function pI(e, t) {
    try {
        if (typeof e == "string")
            return [e];
        if (e instanceof Document)
            return [e.body.outerHTML];
        if (t === "json" && e && typeof e == "object")
            return [JSON.stringify(e)];
        if (!e)
            return [void 0]
    } catch (n) {
        return j && q.exception(n, "Failed to serialize body", e),
        [void 0, "BODY_PARSE_ERROR"]
    }
    return j && q.info("Skipping network body because of body type", e),
    [void 0, "UNPARSEABLE_BODY_TYPE"]
}
i(pI, "_parseXhrResponse");
function hI(e, t) {
    try {
        const n = t === "json" && e && typeof e == "object" ? JSON.stringify(e) : e;
        return di(n)
    } catch {
        return
    }
}
i(hI, "_getBodySize");
function mI(e) {
    const t = Z();
    try {
        const {networkDetailAllowUrls: n, networkDetailDenyUrls: r, networkCaptureBodies: s, networkRequestHeaders: o, networkResponseHeaders: a} = e.getOptions()
          , c = {
            replay: e,
            networkDetailAllowUrls: n,
            networkDetailDenyUrls: r,
            networkCaptureBodies: s,
            networkRequestHeaders: o,
            networkResponseHeaders: a
        };
        t && t.on("beforeAddBreadcrumb", (u, d) => gI(c, u, d))
    } catch {}
}
i(mI, "handleNetworkBreadcrumbs");
function gI(e, t, n) {
    if (t.data)
        try {
            yI(t) && SI(n) && (uI(t, n),
            cI(t, n, e)),
            _I(t) && vI(n) && (Q0(t, n),
            X0(t, n, e))
        } catch (r) {
            j && q.exception(r, "Error when enriching network breadcrumb")
        }
}
i(gI, "beforeAddNetworkBreadcrumb");
function yI(e) {
    return e.category === "xhr"
}
i(yI, "_isXhrBreadcrumb");
function _I(e) {
    return e.category === "fetch"
}
i(_I, "_isFetchBreadcrumb");
function SI(e) {
    return e && e.xhr
}
i(SI, "_isXhrHint");
function vI(e) {
    return e && e.response
}
i(vI, "_isFetchHint");
function EI(e) {
    const t = Z();
    Hf(XT(e)),
    ii(G0(e)),
    F0(e),
    mI(e);
    const n = q0(e);
    rv(n),
    t && (t.on("beforeSendEvent", D0(e)),
    t.on("afterSendEvent", M0(e)),
    t.on("createDsc", r => {
        const s = e.getSessionId();
        s && e.isEnabled() && e.recordingMode === "session" && e.checkAndHandleExpiredSession() && (r.replay_id = s)
    }
    ),
    t.on("spanStart", r => {
        e.lastActiveSpan = r
    }
    ),
    t.on("spanEnd", r => {
        e.lastActiveSpan = r
    }
    ),
    t.on("beforeSendFeedback", (r, s) => {
        const o = e.getSessionId();
        s && s.includeReplay && e.isEnabled() && o && r.contexts && r.contexts.feedback && (r.contexts.feedback.replay_id = o)
    }
    ))
}
i(EI, "addGlobalListeners");
async function bI(e) {
    try {
        return Promise.all(li(e, [wI(me.performance.memory)]))
    } catch {
        return []
    }
}
i(bI, "addMemoryEntry");
function wI(e) {
    const {jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r} = e
      , s = Date.now() / 1e3;
    return {
        type: "memory",
        name: "memory",
        start: s,
        end: s,
        data: {
            memory: {
                jsHeapSizeLimit: t,
                totalJSHeapSize: n,
                usedJSHeapSize: r
            }
        }
    }
}
i(wI, "createMemoryEntry");
function TI(e, t, n) {
    let r, s, o;
    const a = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
    function c() {
        return u(),
        r = e(),
        r
    }
    i(c, "invokeFunc");
    function u() {
        s !== void 0 && clearTimeout(s),
        o !== void 0 && clearTimeout(o),
        s = o = void 0
    }
    i(u, "cancelTimers");
    function d() {
        return s !== void 0 || o !== void 0 ? c() : r
    }
    i(d, "flush");
    function p() {
        return s && clearTimeout(s),
        s = jn(c, t),
        a && o === void 0 && (o = jn(c, a)),
        r
    }
    return i(p, "debounced"),
    p.cancel = u,
    p.flush = d,
    p
}
i(TI, "debounce");
function II(e) {
    let t = !1;
    return (n, r) => {
        if (!e.checkAndHandleExpiredSession()) {
            j && q.warn("Received replay event after session expired.");
            return
        }
        const s = r || !t;
        t = !0,
        e.clickDetector && GT(e.clickDetector, n),
        e.addUpdate( () => {
            if (e.recordingMode === "buffer" && s && e.setInitialState(),
            !Aa(e, n, s))
                return !0;
            if (!s)
                return !1;
            const o = e.session;
            if (RI(e, s),
            e.recordingMode === "buffer" && o && e.eventBuffer) {
                const a = e.eventBuffer.getEarliestTimestamp();
                a && (j && q.info(`Updating session start time to earliest event in buffer to ${new Date(a)}`),
                o.started = a,
                e.getOptions().stickySession && Ca(o))
            }
            return o && o.previousSessionId || e.recordingMode === "session" && e.flush(),
            !0
        }
        )
    }
}
i(II, "getHandleRecordingEmit");
function kI(e) {
    const t = e.getOptions();
    return {
        type: J.Custom,
        timestamp: Date.now(),
        data: {
            tag: "options",
            payload: {
                shouldRecordCanvas: e.isRecordingCanvas(),
                sessionSampleRate: t.sessionSampleRate,
                errorSampleRate: t.errorSampleRate,
                useCompressionOption: t.useCompression,
                blockAllMedia: t.blockAllMedia,
                maskAllText: t.maskAllText,
                maskAllInputs: t.maskAllInputs,
                useCompression: e.eventBuffer ? e.eventBuffer.type === "worker" : !1,
                networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                networkCaptureBodies: t.networkCaptureBodies,
                networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                networkResponseHasHeaders: t.networkResponseHeaders.length > 0
            }
        }
    }
}
i(kI, "createOptionsEvent");
function RI(e, t) {
    !t || !e.session || e.session.segmentId !== 0 || Aa(e, kI(e), !1)
}
i(RI, "addSettingsEvent");
function CI() {
    const e = pe().getPropagationContext().dsc;
    e && delete e.replay_id;
    const t = Ne();
    if (t) {
        const n = Qt(t);
        delete n.replay_id
    }
}
i(CI, "resetReplayIdOnDynamicSamplingContext");
function AI(e, t, n, r) {
    return gn(Jd(e, sa(e), r, n), [[{
        type: "replay_event"
    }, e], [{
        type: "replay_recording",
        length: typeof t == "string" ? new TextEncoder().encode(t).length : t.length
    }, t]])
}
i(AI, "createReplayEnvelope");
function OI({recordingData: e, headers: t}) {
    let n;
    const r = `${JSON.stringify(t)}
`;
    if (typeof e == "string")
        n = `${r}${e}`;
    else {
        const o = new TextEncoder().encode(r);
        n = new Uint8Array(o.length + e.length),
        n.set(o),
        n.set(e, o.length)
    }
    return n
}
i(OI, "prepareRecordingData");
async function xI({client: e, scope: t, replayId: n, event: r}) {
    const s = typeof e._integrations == "object" && e._integrations !== null && !Array.isArray(e._integrations) ? Object.keys(e._integrations) : void 0
      , o = {
        event_id: n,
        integrations: s
    };
    e.emit("preprocessEvent", r, o);
    const a = await mf(e.getOptions(), r, o, t, e, et());
    if (!a)
        return null;
    a.platform = a.platform || "javascript";
    const c = e.getSdkMetadata()
      , {name: u, version: d} = c && c.sdk || {};
    return a.sdk = {
        ...a.sdk,
        name: u || "sentry.javascript.unknown",
        version: d || "0.0.0"
    },
    a
}
i(xI, "prepareReplayEvent");
async function MI({recordingData: e, replayId: t, segmentId: n, eventContext: r, timestamp: s, session: o}) {
    const a = OI({
        recordingData: e,
        headers: {
            segment_id: n
        }
    })
      , {urls: c, errorIds: u, traceIds: d, initialTimestamp: p} = r
      , f = Z()
      , g = pe()
      , _ = f && f.getTransport()
      , y = f && f.getDsn();
    if (!f || !_ || !y || !o.sampled)
        return Pt({});
    const v = {
        type: fw,
        replay_start_timestamp: p / 1e3,
        timestamp: s / 1e3,
        error_ids: u,
        trace_ids: d,
        urls: c,
        replay_id: t,
        segment_id: n,
        replay_type: o.sampled
    }
      , E = await xI({
        scope: g,
        client: f,
        replayId: t,
        event: v
    });
    if (!E)
        return f.recordDroppedEvent("event_processor", "replay", v),
        j && q.info("An event processor returned `null`, will not send event."),
        Pt({});
    delete E.sdkProcessingMetadata;
    const k = AI(E, a, y, f.getOptions().tunnel);
    let M;
    try {
        M = await _.send(k)
    } catch (L) {
        const B = new Error(Sa);
        try {
            B.cause = L
        } catch {}
        throw B
    }
    if (typeof M.statusCode == "number" && (M.statusCode < 200 || M.statusCode >= 300))
        throw new Pp(M.statusCode);
    const P = Qd({}, M);
    if (Xd(P, "replay"))
        throw new xa(P);
    return M
}
i(MI, "sendReplayRequest");
class Pp extends Error {
    static{i(this, "TransportStatusCodeError")
    }constructor(t) {
        super(`Transport returned status code ${t}`)
    }
}
class xa extends Error {
    static{i(this, "RateLimitError")
    }constructor(t) {
        super("Rate limit hit"),
        this.rateLimits = t
    }
}
async function Np(e, t={
    count: 0,
    interval: _w
}) {
    const {recordingData: n, onError: r} = e;
    if (n.length)
        try {
            return await MI(e),
            !0
        } catch (s) {
            if (s instanceof Pp || s instanceof xa)
                throw s;
            if (da("Replays", {
                _retryCount: t.count
            }),
            r && r(s),
            t.count >= Sw) {
                const o = new Error(`${Sa} - max retries exceeded`);
                try {
                    o.cause = s
                } catch {}
                throw o
            }
            return t.interval *= ++t.count,
            new Promise( (o, a) => {
                jn(async () => {
                    try {
                        await Np(e, t),
                        o(!0)
                    } catch (c) {
                        a(c)
                    }
                }
                , t.interval)
            }
            )
        }
}
i(Np, "sendReplay");
const Dp = "__THROTTLED"
  , PI = "__SKIPPED";
function NI(e, t, n) {
    const r = new Map
      , s = i(c => {
        const u = c - n;
        r.forEach( (d, p) => {
            p < u && r.delete(p)
        }
        )
    }
    , "_cleanup")
      , o = i( () => [...r.values()].reduce( (c, u) => c + u, 0), "_getTotalCount");
    let a = !1;
    return (...c) => {
        const u = Math.floor(Date.now() / 1e3);
        if (s(u),
        o() >= t) {
            const p = a;
            return a = !0,
            p ? PI : Dp
        }
        a = !1;
        const d = r.get(u) || 0;
        return r.set(u, d + 1),
        e(...c)
    }
}
i(NI, "throttle");
class qt {
    static{i(this, "ReplayContainer")
    }constructor({options: t, recordingOptions: n}) {
        qt.prototype.__init.call(this),
        qt.prototype.__init2.call(this),
        qt.prototype.__init3.call(this),
        qt.prototype.__init4.call(this),
        qt.prototype.__init5.call(this),
        qt.prototype.__init6.call(this),
        this.eventBuffer = null,
        this.performanceEntries = [],
        this.replayPerformanceEntries = [],
        this.recordingMode = "session",
        this.timeouts = {
            sessionIdlePause: pw,
            sessionIdleExpire: hw
        },
        this._lastActivity = Date.now(),
        this._isEnabled = !1,
        this._isPaused = !1,
        this._requiresManualStart = !1,
        this._hasInitializedCoreListeners = !1,
        this._context = {
            errorIds: new Set,
            traceIds: new Set,
            urls: [],
            initialTimestamp: Date.now(),
            initialUrl: ""
        },
        this._recordingOptions = n,
        this._options = t,
        this._debouncedFlush = TI( () => this._flush(), this._options.flushMinDelay, {
            maxWait: this._options.flushMaxDelay
        }),
        this._throttledAddEvent = NI( (a, c) => A0(this, a, c), 300, 5);
        const {slowClickTimeout: r, slowClickIgnoreSelectors: s} = this.getOptions()
          , o = r ? {
            threshold: Math.min(vw, r),
            timeout: r,
            scrollTimeout: Ew,
            ignoreSelector: s ? s.join(",") : ""
        } : void 0;
        if (o && (this.clickDetector = new jT(this,o)),
        j) {
            const a = t._experiments;
            q.setConfig({
                captureExceptions: !!a.captureExceptions,
                traceInternals: !!a.traceInternals
            })
        }
    }
    getContext() {
        return this._context
    }
    isEnabled() {
        return this._isEnabled
    }
    isPaused() {
        return this._isPaused
    }
    isRecordingCanvas() {
        return !!this._canvas
    }
    getOptions() {
        return this._options
    }
    handleException(t) {
        j && q.exception(t),
        this._options.onError && this._options.onError(t)
    }
    initializeSampling(t) {
        const {errorSampleRate: n, sessionSampleRate: r} = this._options
          , s = n <= 0 && r <= 0;
        if (this._requiresManualStart = s,
        !s) {
            if (this._initializeSessionForSampling(t),
            !this.session) {
                j && q.exception(new Error("Unable to initialize and create session"));
                return
            }
            this.session.sampled !== !1 && (this.recordingMode = this.session.sampled === "buffer" && this.session.segmentId === 0 ? "buffer" : "session",
            j && q.infoTick(`Starting replay in ${this.recordingMode} mode`),
            this._initializeRecording())
        }
    }
    start() {
        if (this._isEnabled && this.recordingMode === "session") {
            j && q.info("Recording is already in progress");
            return
        }
        if (this._isEnabled && this.recordingMode === "buffer") {
            j && q.info("Buffering is in progress, call `flush()` to save the replay");
            return
        }
        j && q.infoTick("Starting replay in session mode"),
        this._updateUserActivity();
        const t = Ki({
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 1,
            allowBuffering: !1
        });
        this.session = t,
        this._initializeRecording()
    }
    startBuffering() {
        if (this._isEnabled) {
            j && q.info("Buffering is in progress, call `flush()` to save the replay");
            return
        }
        j && q.infoTick("Starting replay in buffer mode");
        const t = Ki({
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 0,
            allowBuffering: !0
        });
        this.session = t,
        this.recordingMode = "buffer",
        this._initializeRecording()
    }
    startRecording() {
        try {
            const t = this._canvas;
            this._stopRecording = At({
                ...this._recordingOptions,
                ...this.recordingMode === "buffer" ? {
                    checkoutEveryNms: yw
                } : this._options._experiments.continuousCheckout && {
                    checkoutEveryNms: Math.max(36e4, this._options._experiments.continuousCheckout)
                },
                emit: II(this),
                onMutation: this._onMutationHandler,
                ...t ? {
                    recordCanvas: t.recordCanvas,
                    getCanvasManager: t.getCanvasManager,
                    sampling: t.sampling,
                    dataURLOptions: t.dataURLOptions
                } : {}
            })
        } catch (t) {
            this.handleException(t)
        }
    }
    stopRecording() {
        try {
            return this._stopRecording && (this._stopRecording(),
            this._stopRecording = void 0),
            !0
        } catch (t) {
            return this.handleException(t),
            !1
        }
    }
    async stop({forceFlush: t=!1, reason: n}={}) {
        if (this._isEnabled) {
            this._isEnabled = !1;
            try {
                j && q.info(`Stopping Replay${n ? ` triggered by ${n}` : ""}`),
                CI(),
                this._removeListeners(),
                this.stopRecording(),
                this._debouncedFlush.cancel(),
                t && await this._flush({
                    force: !0
                }),
                this.eventBuffer && this.eventBuffer.destroy(),
                this.eventBuffer = null,
                T0(this)
            } catch (r) {
                this.handleException(r)
            }
        }
    }
    pause() {
        this._isPaused || (this._isPaused = !0,
        this.stopRecording(),
        j && q.info("Pausing replay"))
    }
    resume() {
        !this._isPaused || !this._checkSession() || (this._isPaused = !1,
        this.startRecording(),
        j && q.info("Resuming replay"))
    }
    async sendBufferedReplayOrFlush({continueRecording: t=!0}={}) {
        if (this.recordingMode === "session")
            return this.flushImmediate();
        const n = Date.now();
        j && q.info("Converting buffer to session"),
        await this.flushImmediate();
        const r = this.stopRecording();
        !t || !r || this.recordingMode !== "session" && (this.recordingMode = "session",
        this.session && (this._updateUserActivity(n),
        this._updateSessionActivity(n),
        this._maybeSaveSession()),
        this.startRecording())
    }
    addUpdate(t) {
        const n = t();
        this.recordingMode !== "buffer" && n !== !0 && this._debouncedFlush()
    }
    triggerUserActivity() {
        if (this._updateUserActivity(),
        !this._stopRecording) {
            if (!this._checkSession())
                return;
            this.resume();
            return
        }
        this.checkAndHandleExpiredSession(),
        this._updateSessionActivity()
    }
    updateUserActivity() {
        this._updateUserActivity(),
        this._updateSessionActivity()
    }
    conditionalFlush() {
        return this.recordingMode === "buffer" ? Promise.resolve() : this.flushImmediate()
    }
    flush() {
        return this._debouncedFlush()
    }
    flushImmediate() {
        return this._debouncedFlush(),
        this._debouncedFlush.flush()
    }
    cancelFlush() {
        this._debouncedFlush.cancel()
    }
    getSessionId() {
        return this.session && this.session.id
    }
    checkAndHandleExpiredSession() {
        if (this._lastActivity && Lo(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && this.session.sampled === "session") {
            this.pause();
            return
        }
        return !!this._checkSession()
    }
    setInitialState() {
        const t = `${me.location.pathname}${me.location.hash}${me.location.search}`
          , n = `${me.location.origin}${t}`;
        this.performanceEntries = [],
        this.replayPerformanceEntries = [],
        this._clearContext(),
        this._context.initialUrl = n,
        this._context.initialTimestamp = Date.now(),
        this._context.urls.push(n)
    }
    throttledAddEvent(t, n) {
        const r = this._throttledAddEvent(t, n);
        if (r === Dp) {
            const s = _t({
                category: "replay.throttled"
            });
            this.addUpdate( () => !Aa(this, {
                type: DT,
                timestamp: s.timestamp || 0,
                data: {
                    tag: "breadcrumb",
                    payload: s,
                    metric: !0
                }
            }))
        }
        return r
    }
    getCurrentRoute() {
        const t = this.lastActiveSpan || Ne()
          , n = t && Pe(t)
          , s = (n && oe(n).data || {})[kt];
        if (!(!n || !s || !["route", "custom"].includes(s)))
            return oe(n).description
    }
    _initializeRecording() {
        this.setInitialState(),
        this._updateSessionActivity(),
        this.eventBuffer = E0({
            useCompression: this._options.useCompression,
            workerUrl: this._options.workerUrl
        }),
        this._removeListeners(),
        this._addListeners(),
        this._isEnabled = !0,
        this._isPaused = !1,
        this.startRecording()
    }
    _initializeSessionForSampling(t) {
        const n = this._options.errorSampleRate > 0
          , r = Ki({
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration,
            previousSessionId: t
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: this._options.sessionSampleRate,
            allowBuffering: n
        });
        this.session = r
    }
    _checkSession() {
        if (!this.session)
            return !1;
        const t = this.session;
        return bp(t, {
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
        }) ? (this._refreshSession(t),
        !1) : !0
    }
    async _refreshSession(t) {
        this._isEnabled && (await this.stop({
            reason: "refresh session"
        }),
        this.initializeSampling(t.id))
    }
    _addListeners() {
        try {
            me.document.addEventListener("visibilitychange", this._handleVisibilityChange),
            me.addEventListener("blur", this._handleWindowBlur),
            me.addEventListener("focus", this._handleWindowFocus),
            me.addEventListener("keydown", this._handleKeyboardEvent),
            this.clickDetector && this.clickDetector.addListeners(),
            this._hasInitializedCoreListeners || (EI(this),
            this._hasInitializedCoreListeners = !0)
        } catch (t) {
            this.handleException(t)
        }
        this._performanceCleanupCallback = m0(this)
    }
    _removeListeners() {
        try {
            me.document.removeEventListener("visibilitychange", this._handleVisibilityChange),
            me.removeEventListener("blur", this._handleWindowBlur),
            me.removeEventListener("focus", this._handleWindowFocus),
            me.removeEventListener("keydown", this._handleKeyboardEvent),
            this.clickDetector && this.clickDetector.removeListeners(),
            this._performanceCleanupCallback && this._performanceCleanupCallback()
        } catch (t) {
            this.handleException(t)
        }
    }
    __init() {
        this._handleVisibilityChange = () => {
            me.document.visibilityState === "visible" ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
        }
    }
    __init2() {
        this._handleWindowBlur = () => {
            const t = _t({
                category: "ui.blur"
            });
            this._doChangeToBackgroundTasks(t)
        }
    }
    __init3() {
        this._handleWindowFocus = () => {
            const t = _t({
                category: "ui.focus"
            });
            this._doChangeToForegroundTasks(t)
        }
    }
    __init4() {
        this._handleKeyboardEvent = t => {
            t0(this, t)
        }
    }
    _doChangeToBackgroundTasks(t) {
        !this.session || Ep(this.session, {
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
        }) || (t && this._createCustomBreadcrumb(t),
        this.conditionalFlush())
    }
    _doChangeToForegroundTasks(t) {
        if (!this.session)
            return;
        if (!this.checkAndHandleExpiredSession()) {
            j && q.info("Document has become active, but session has expired");
            return
        }
        t && this._createCustomBreadcrumb(t)
    }
    _updateUserActivity(t=Date.now()) {
        this._lastActivity = t
    }
    _updateSessionActivity(t=Date.now()) {
        this.session && (this.session.lastActivity = t,
        this._maybeSaveSession())
    }
    _createCustomBreadcrumb(t) {
        this.addUpdate( () => {
            this.throttledAddEvent({
                type: J.Custom,
                timestamp: t.timestamp || 0,
                data: {
                    tag: "breadcrumb",
                    payload: t
                }
            })
        }
        )
    }
    _addPerformanceEntries() {
        let t = i0(this.performanceEntries).concat(this.replayPerformanceEntries);
        if (this.performanceEntries = [],
        this.replayPerformanceEntries = [],
        this._requiresManualStart) {
            const n = this._context.initialTimestamp / 1e3;
            t = t.filter(r => r.start >= n)
        }
        return Promise.all(li(this, t))
    }
    _clearContext() {
        this._context.errorIds.clear(),
        this._context.traceIds.clear(),
        this._context.urls = []
    }
    _updateInitialTimestampFromEventBuffer() {
        const {session: t, eventBuffer: n} = this;
        if (!t || !n || this._requiresManualStart || t.segmentId)
            return;
        const r = n.getEarliestTimestamp();
        r && r < this._context.initialTimestamp && (this._context.initialTimestamp = r)
    }
    _popEventContext() {
        const t = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            urls: this._context.urls
        };
        return this._clearContext(),
        t
    }
    async _runFlush() {
        const t = this.getSessionId();
        if (!this.session || !this.eventBuffer || !t) {
            j && q.error("No session or eventBuffer found to flush.");
            return
        }
        if (await this._addPerformanceEntries(),
        !(!this.eventBuffer || !this.eventBuffer.hasEvents) && (await bI(this),
        !!this.eventBuffer && t === this.getSessionId()))
            try {
                this._updateInitialTimestampFromEventBuffer();
                const n = Date.now();
                if (n - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4)
                    throw new Error("Session is too long, not sending replay");
                const r = this._popEventContext()
                  , s = this.session.segmentId++;
                this._maybeSaveSession();
                const o = await this.eventBuffer.finish();
                await Np({
                    replayId: t,
                    recordingData: o,
                    segmentId: s,
                    eventContext: r,
                    session: this.session,
                    timestamp: n,
                    onError: a => this.handleException(a)
                })
            } catch (n) {
                this.handleException(n),
                this.stop({
                    reason: "sendReplay"
                });
                const r = Z();
                if (r) {
                    const s = n instanceof xa ? "ratelimit_backoff" : "send_error";
                    r.recordDroppedEvent(s, "replay")
                }
            }
    }
    __init5() {
        this._flush = async ({force: t=!1}={}) => {
            if (!this._isEnabled && !t)
                return;
            if (!this.checkAndHandleExpiredSession()) {
                j && q.error("Attempting to finish replay event after session expired.");
                return
            }
            if (!this.session)
                return;
            const n = this.session.started
              , s = Date.now() - n;
            this._debouncedFlush.cancel();
            const o = s < this._options.minReplayDuration
              , a = s > this._options.maxReplayDuration + 5e3;
            if (o || a) {
                j && q.info(`Session duration (${Math.floor(s / 1e3)}s) is too ${o ? "short" : "long"}, not sending replay.`),
                o && this._debouncedFlush();
                return
            }
            const c = this.eventBuffer;
            c && this.session.segmentId === 0 && !c.hasCheckout && j && q.info("Flushing initial segment without checkout.");
            const u = !!this._flushLock;
            this._flushLock || (this._flushLock = this._runFlush());
            try {
                await this._flushLock
            } catch (d) {
                this.handleException(d)
            } finally {
                this._flushLock = void 0,
                u && this._debouncedFlush()
            }
        }
    }
    _maybeSaveSession() {
        this.session && this._options.stickySession && Ca(this.session)
    }
    __init6() {
        this._onMutationHandler = t => {
            const n = t.length
              , r = this._options.mutationLimit
              , s = this._options.mutationBreadcrumbLimit
              , o = r && n > r;
            if (n > s || o) {
                const a = _t({
                    category: "replay.mutations",
                    data: {
                        count: n,
                        limit: o
                    }
                });
                this._createCustomBreadcrumb(a)
            }
            return o ? (this.stop({
                reason: "mutationLimit",
                forceFlush: this.recordingMode === "session"
            }),
            !1) : !0
        }
    }
}
function cr(e, t) {
    return [...e, ...t].join(",")
}
i(cr, "getOption");
function DI({mask: e, unmask: t, block: n, unblock: r, ignore: s}) {
    const o = ['base[href="/"]']
      , a = cr(e, [".sentry-mask", "[data-sentry-mask]"])
      , c = cr(t, []);
    return {
        maskTextSelector: a,
        unmaskTextSelector: c,
        blockSelector: cr(n, [".sentry-block", "[data-sentry-block]", ...o]),
        unblockSelector: cr(r, []),
        ignoreSelector: cr(s, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
    }
}
i(DI, "getPrivacyOptions");
function LI({el: e, key: t, maskAttributes: n, maskAllText: r, privacyOptions: s, value: o}) {
    return !r || s.unmaskTextSelector && e.matches(s.unmaskTextSelector) ? o : n.includes(t) || t === "value" && e.tagName === "INPUT" && ["submit", "button"].includes(e.getAttribute("type") || "") ? o.replace(/[\S]/g, "*") : o
}
i(LI, "maskAttribute");
const xl = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]'
  , FI = ["content-length", "content-type", "accept"];
let Ml = !1;
const UI = i(e => new fi(e), "replayIntegration");
class fi {
    static{i(this, "Replay")
    }static __initStatic() {
        this.id = "Replay"
    }
    constructor({flushMinDelay: t=mw, flushMaxDelay: n=gw, minReplayDuration: r=bw, maxReplayDuration: s=fl, stickySession: o=!0, useCompression: a=!0, workerUrl: c, _experiments: u={}, maskAllText: d=!0, maskAllInputs: p=!0, blockAllMedia: f=!0, mutationBreadcrumbLimit: g=750, mutationLimit: _=1e4, slowClickTimeout: y=7e3, slowClickIgnoreSelectors: v=[], networkDetailAllowUrls: E=[], networkDetailDenyUrls: k=[], networkCaptureBodies: M=!0, networkRequestHeaders: P=[], networkResponseHeaders: L=[], mask: B=[], maskAttributes: A=["title", "placeholder"], unmask: R=[], block: x=[], unblock: H=[], ignore: D=[], maskFn: U, beforeAddRecordingEvent: W, beforeErrorSampling: re, onError: le}={}) {
        this.name = fi.id;
        const fe = DI({
            mask: B,
            unmask: R,
            block: x,
            unblock: H,
            ignore: D
        });
        if (this._recordingOptions = {
            maskAllInputs: p,
            maskAllText: d,
            maskInputOptions: {
                password: !0
            },
            maskTextFn: U,
            maskInputFn: U,
            maskAttributeFn: (V, be, te) => LI({
                maskAttributes: A,
                maskAllText: d,
                privacyOptions: fe,
                key: V,
                value: be,
                el: te
            }),
            ...fe,
            slimDOMOptions: "all",
            inlineStylesheet: !0,
            inlineImages: !1,
            collectFonts: !0,
            errorHandler: V => {
                try {
                    V.__rrweb__ = !0
                } catch {}
            }
        },
        this._initialOptions = {
            flushMinDelay: t,
            flushMaxDelay: n,
            minReplayDuration: Math.min(r, ww),
            maxReplayDuration: Math.min(s, fl),
            stickySession: o,
            useCompression: a,
            workerUrl: c,
            blockAllMedia: f,
            maskAllInputs: p,
            maskAllText: d,
            mutationBreadcrumbLimit: g,
            mutationLimit: _,
            slowClickTimeout: y,
            slowClickIgnoreSelectors: v,
            networkDetailAllowUrls: E,
            networkDetailDenyUrls: k,
            networkCaptureBodies: M,
            networkRequestHeaders: Pl(P),
            networkResponseHeaders: Pl(L),
            beforeAddRecordingEvent: W,
            beforeErrorSampling: re,
            onError: le,
            _experiments: u
        },
        this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${xl}` : xl),
        this._isInitialized && Cu())
            throw new Error("Multiple Sentry Session Replay instances are not supported");
        this._isInitialized = !0
    }
    get _isInitialized() {
        return Ml
    }
    set _isInitialized(t) {
        Ml = t
    }
    afterAllSetup(t) {
        !Cu() || this._replay || (this._setup(t),
        this._initialize(t))
    }
    start() {
        this._replay && this._replay.start()
    }
    startBuffering() {
        this._replay && this._replay.startBuffering()
    }
    stop() {
        return this._replay ? this._replay.stop({
            forceFlush: this._replay.recordingMode === "session"
        }) : Promise.resolve()
    }
    flush(t) {
        return this._replay ? this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : (this._replay.start(),
        Promise.resolve()) : Promise.resolve()
    }
    getReplayId() {
        if (!(!this._replay || !this._replay.isEnabled()))
            return this._replay.getSessionId()
    }
    getRecordingMode() {
        if (!(!this._replay || !this._replay.isEnabled()))
            return this._replay.recordingMode
    }
    _initialize(t) {
        this._replay && (this._maybeLoadFromReplayCanvasIntegration(t),
        this._replay.initializeSampling())
    }
    _setup(t) {
        const n = $I(this._initialOptions, t);
        this._replay = new qt({
            options: n,
            recordingOptions: this._recordingOptions
        })
    }
    _maybeLoadFromReplayCanvasIntegration(t) {
        try {
            const n = t.getIntegrationByName("ReplayCanvas");
            if (!n)
                return;
            this._replay._canvas = n.getOptions()
        } catch {}
    }
}
fi.__initStatic();
function $I(e, t) {
    const n = t.getOptions()
      , r = {
        sessionSampleRate: 0,
        errorSampleRate: 0,
        ...Ae(e)
    }
      , s = Ms(n.replaysSessionSampleRate)
      , o = Ms(n.replaysOnErrorSampleRate);
    return s == null && o == null && Kn( () => {}
    ),
    s != null && (r.sessionSampleRate = s),
    o != null && (r.errorSampleRate = o),
    r
}
i($I, "loadReplayOptionsFromClient");
function Pl(e) {
    return [...FI, ...e.map(t => t.toLowerCase())]
}
i(Pl, "_getMergedNetworkHeaders");
const Nl = new WeakMap
  , Yi = new Map
  , Ss = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    trackFetchStreamPerformance: !1
};
function BI(e, t) {
    const {traceFetch: n, traceXHR: r, trackFetchStreamPerformance: s, shouldCreateSpanForRequest: o, enableHTTPTimings: a, tracePropagationTargets: c} = {
        traceFetch: Ss.traceFetch,
        traceXHR: Ss.traceXHR,
        trackFetchStreamPerformance: Ss.trackFetchStreamPerformance,
        ...t
    }
      , u = typeof o == "function" ? o : f => !0
      , d = i(f => qI(f, c), "shouldAttachHeadersWithTargets")
      , p = {};
    n && (e.addEventProcessor(f => (f.type === "transaction" && f.spans && f.spans.forEach(g => {
        if (g.op === "http.client") {
            const _ = Yi.get(g.span_id);
            _ && (g.timestamp = _ / 1e3,
            Yi.delete(g.span_id))
        }
    }
    ),
    f)),
    s && y_(f => {
        if (f.response) {
            const g = Nl.get(f.response);
            g && f.endTimestamp && Yi.set(g, f.endTimestamp)
        }
    }
    ),
    Bd(f => {
        const g = Gv(f, u, d, p);
        if (f.response && f.fetchData.__span && Nl.set(f.response, f.fetchData.__span),
        g) {
            const _ = Lp(f.fetchData.url)
              , y = _ ? un(_).host : void 0;
            g.setAttributes({
                "http.url": _,
                "server.address": y
            })
        }
        a && g && Dl(g)
    }
    )),
    r && Wf(f => {
        const g = zI(f, u, d, p);
        a && g && Dl(g)
    }
    )
}
i(BI, "instrumentOutgoingRequests");
function HI(e) {
    return e.entryType === "resource" && "initiatorType"in e && typeof e.nextHopProtocol == "string" && (e.initiatorType === "fetch" || e.initiatorType === "xmlhttprequest")
}
i(HI, "isPerformanceResourceTiming");
function Dl(e) {
    const {url: t} = oe(e).data || {};
    if (!t || typeof t != "string")
        return;
    const n = Hn("resource", ({entries: r}) => {
        r.forEach(s => {
            HI(s) && s.name.endsWith(t) && (WI(s).forEach(a => e.setAttribute(...a)),
            setTimeout(n))
        }
        )
    }
    )
}
i(Dl, "addHTTPTimings");
function jI(e) {
    let t = "unknown"
      , n = "unknown"
      , r = "";
    for (const s of e) {
        if (s === "/") {
            [t,n] = e.split("/");
            break
        }
        if (!isNaN(Number(s))) {
            t = r === "h" ? "http" : r,
            n = e.split(r)[1];
            break
        }
        r += s
    }
    return r === e && (t = r),
    {
        name: t,
        version: n
    }
}
i(jI, "extractNetworkProtocol");
function pt(e=0) {
    return ((je || performance.timeOrigin) + e) / 1e3
}
i(pt, "getAbsoluteTime");
function WI(e) {
    const {name: t, version: n} = jI(e.nextHopProtocol)
      , r = [];
    return r.push(["network.protocol.version", n], ["network.protocol.name", t]),
    je ? [...r, ["http.request.redirect_start", pt(e.redirectStart)], ["http.request.fetch_start", pt(e.fetchStart)], ["http.request.domain_lookup_start", pt(e.domainLookupStart)], ["http.request.domain_lookup_end", pt(e.domainLookupEnd)], ["http.request.connect_start", pt(e.connectStart)], ["http.request.secure_connection_start", pt(e.secureConnectionStart)], ["http.request.connection_end", pt(e.connectEnd)], ["http.request.request_start", pt(e.requestStart)], ["http.request.response_start", pt(e.responseStart)], ["http.request.response_end", pt(e.responseEnd)]] : r
}
i(WI, "resourceTimingEntryToSpanData");
function qI(e, t) {
    const n = K.location && K.location.href;
    if (n) {
        let r, s;
        try {
            r = new URL(e,n),
            s = new URL(n).origin
        } catch {
            return !1
        }
        const o = r.origin === s;
        return t ? zt(r.toString(), t) || o && zt(r.pathname, t) : o
    } else {
        const r = !!e.match(/^\/(?!\/)/);
        return t ? zt(e, t) : r
    }
}
i(qI, "shouldAttachHeaders");
function zI(e, t, n, r) {
    const s = e.xhr
      , o = s && s[on];
    if (!s || s.__sentry_own_request__ || !o)
        return;
    const a = Nt() && t(o.url);
    if (e.endTimestamp && a) {
        const g = s.__sentry_xhr_span_id__;
        if (!g)
            return;
        const _ = r[g];
        _ && o.status_code !== void 0 && (tf(_, o.status_code),
        _.end(),
        delete r[g]);
        return
    }
    const c = Lp(o.url)
      , u = c ? un(c).host : void 0
      , d = !!Ne()
      , p = a && d ? _n({
        name: `${o.method} ${o.url}`,
        attributes: {
            type: "xhr",
            "http.method": o.method,
            "http.url": c,
            url: o.url,
            "server.address": u,
            [xe]: "auto.http.browser",
            [pn]: "http.client"
        }
    }) : new Jn;
    s.__sentry_xhr_span_id__ = p.spanContext().spanId,
    r[s.__sentry_xhr_span_id__] = p;
    const f = Z();
    return s.setRequestHeader && n(o.url) && f && GI(s, f, Nt() && d ? p : void 0),
    p
}
i(zI, "xhrCallback");
function GI(e, t, n) {
    const r = pe()
      , s = et()
      , {traceId: o, spanId: a, sampled: c, dsc: u} = {
        ...s.getPropagationContext(),
        ...r.getPropagationContext()
    }
      , d = n && Nt() ? sf(n) : ra(o, a, c)
      , p = Yd(u || (n ? Qt(n) : ri(o, t)));
    VI(e, d, p)
}
i(GI, "addTracingHeadersToXhrRequest");
function VI(e, t, n) {
    try {
        e.setRequestHeader("sentry-trace", t),
        n && e.setRequestHeader(Cn, n)
    } catch {}
}
i(VI, "setHeaderOnXhr");
function Lp(e) {
    try {
        return new URL(e,K.location.origin).href
    } catch {
        return
    }
}
i(Lp, "getFullURL");
function KI() {
    K && K.document ? K.document.addEventListener("visibilitychange", () => {
        const e = Ne();
        if (!e)
            return;
        const t = Pe(e);
        if (K.document.hidden && t) {
            const n = "cancelled"
              , {op: r, status: s} = oe(t);
            ut && N.log(`[Tracing] Transaction: ${n} -> since tab moved to the background, op: ${r}`),
            s || t.setStatus({
                code: Oe,
                message: n
            }),
            t.setAttribute("sentry.cancellation_reason", "document.hidden"),
            t.end()
        }
    }
    ) : ut && N.warn("[Tracing] Could not set up background tab detection due to lack of global document")
}
i(KI, "registerBackgroundTabDetection");
const YI = "BrowserTracing"
  , JI = {
    ...ms,
    instrumentNavigation: !0,
    instrumentPageLoad: !0,
    markBackgroundSpan: !0,
    enableLongTask: !0,
    enableLongAnimationFrame: !0,
    enableInp: !0,
    _experiments: {},
    ...Ss
}
  , XI = i( (e={}) => {
    SS();
    const {enableInp: t, enableLongTask: n, enableLongAnimationFrame: r, _experiments: {enableInteractions: s, enableStandaloneClsSpans: o}, beforeStartSpan: a, idleTimeout: c, finalTimeout: u, childSpanTimeout: d, markBackgroundSpan: p, traceFetch: f, traceXHR: g, trackFetchStreamPerformance: _, shouldCreateSpanForRequest: y, enableHTTPTimings: v, instrumentPageLoad: E, instrumentNavigation: k} = {
        ...JI,
        ...e
    }
      , M = qE({
        recordClsStandaloneSpans: o || !1
    });
    t && hb(),
    r && ne.PerformanceObserver && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame") ? GE() : n && zE(),
    s && VE();
    const P = {
        name: void 0,
        source: void 0
    };
    function L(B, A) {
        const R = A.op === "pageload"
          , x = a ? a(A) : A
          , H = x.attributes || {};
        A.name !== x.name && (H[kt] = "custom",
        x.attributes = H),
        P.name = x.name,
        P.source = H[kt];
        const D = hf(x, {
            idleTimeout: c,
            finalTimeout: u,
            childSpanTimeout: d,
            disableAutoFinish: R,
            beforeSpanEnd: W => {
                M(),
                QE(W, {
                    recordClsOnPageloadSpan: !o
                })
            }
        });
        function U() {
            ["interactive", "complete"].includes(K.document.readyState) && B.emit("idleSpanEnableAutoFinish", D)
        }
        return i(U, "emitFinish"),
        R && K.document && (K.document.addEventListener("readystatechange", () => {
            U()
        }
        ),
        U()),
        D
    }
    return i(L, "_createRouteSpan"),
    {
        name: YI,
        afterAllSetup(B) {
            let A, R = K.location && K.location.href;
            B.on("startNavigationSpan", x => {
                Z() === B && (A && !oe(A).timestamp && (ut && N.log(`[Tracing] Finishing current root span with op: ${oe(A).op}`),
                A.end()),
                A = L(B, {
                    op: "navigation",
                    ...x
                }))
            }
            ),
            B.on("startPageLoadSpan", (x, H={}) => {
                if (Z() !== B)
                    return;
                A && !oe(A).timestamp && (ut && N.log(`[Tracing] Finishing current root span with op: ${oe(A).op}`),
                A.end());
                const D = H.sentryTrace || Ll("sentry-trace")
                  , U = H.baggage || Ll("baggage")
                  , W = B_(D, U);
                pe().setPropagationContext(W),
                A = L(B, {
                    op: "pageload",
                    ...x
                })
            }
            ),
            B.on("spanEnd", x => {
                const H = oe(x).op;
                if (x !== Pe(x) || H !== "navigation" && H !== "pageload")
                    return;
                const D = pe()
                  , U = D.getPropagationContext();
                D.setPropagationContext({
                    ...U,
                    sampled: U.sampled !== void 0 ? U.sampled : yn(x),
                    dsc: U.dsc || Qt(x)
                })
            }
            ),
            K.location && (E && QI(B, {
                name: K.location.pathname,
                startTime: je ? je / 1e3 : void 0,
                attributes: {
                    [kt]: "url",
                    [xe]: "auto.pageload.browser"
                }
            }),
            k && ii( ({to: x, from: H}) => {
                if (H === void 0 && R && R.indexOf(x) !== -1) {
                    R = void 0;
                    return
                }
                H !== x && (R = void 0,
                ZI(B, {
                    name: K.location.pathname,
                    attributes: {
                        [kt]: "url",
                        [xe]: "auto.navigation.browser"
                    }
                }))
            }
            )),
            p && KI(),
            s && ek(c, u, d, P),
            t && gb(),
            BI(B, {
                traceFetch: f,
                traceXHR: g,
                trackFetchStreamPerformance: _,
                tracePropagationTargets: B.getOptions().tracePropagationTargets,
                shouldCreateSpanForRequest: y,
                enableHTTPTimings: v
            })
        }
    }
}
, "browserTracingIntegration");
function QI(e, t, n) {
    e.emit("startPageLoadSpan", t, n),
    pe().setTransactionName(t.name);
    const r = Ne();
    return (r && oe(r).op) === "pageload" ? r : void 0
}
i(QI, "startBrowserTracingPageLoadSpan");
function ZI(e, t) {
    et().setPropagationContext(Os()),
    pe().setPropagationContext(Os()),
    e.emit("startNavigationSpan", t),
    pe().setTransactionName(t.name);
    const n = Ne();
    return (n && oe(n).op) === "navigation" ? n : void 0
}
i(ZI, "startBrowserTracingNavigationSpan");
function Ll(e) {
    const t = e_(`meta[name=${e}]`);
    return t ? t.getAttribute("content") : void 0
}
i(Ll, "getMetaContent");
function ek(e, t, n, r) {
    let s;
    const o = i( () => {
        const a = "ui.action.click"
          , c = Ne()
          , u = c && Pe(c);
        if (u) {
            const d = oe(u).op;
            if (["navigation", "pageload"].includes(d)) {
                ut && N.warn(`[Tracing] Did not create ${a} span because a pageload or navigation span is in progress.`);
                return
            }
        }
        if (s && (s.setAttribute(_o, "interactionInterrupted"),
        s.end(),
        s = void 0),
        !r.name) {
            ut && N.warn(`[Tracing] Did not create ${a} transaction because _latestRouteName is missing.`);
            return
        }
        s = hf({
            name: r.name,
            op: a,
            attributes: {
                [kt]: r.source || "url"
            }
        }, {
            idleTimeout: e,
            finalTimeout: t,
            childSpanTimeout: n
        })
    }
    , "registerInteractionTransaction");
    K.document && addEventListener("click", o, {
        once: !1,
        capture: !0
    })
}
i(ek, "registerInteractionListener");
var Fp = {
    exports: {}
}
  , ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr = Symbol.for("react.element")
  , tk = Symbol.for("react.portal")
  , nk = Symbol.for("react.fragment")
  , rk = Symbol.for("react.strict_mode")
  , sk = Symbol.for("react.profiler")
  , ik = Symbol.for("react.provider")
  , ok = Symbol.for("react.context")
  , ak = Symbol.for("react.forward_ref")
  , ck = Symbol.for("react.suspense")
  , uk = Symbol.for("react.memo")
  , lk = Symbol.for("react.lazy")
  , Fl = Symbol.iterator;
function dk(e) {
    return e === null || typeof e != "object" ? null : (e = Fl && e[Fl] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
i(dk, "A");
var Up = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , $p = Object.assign
  , Bp = {};
function er(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Bp,
    this.updater = n || Up
}
i(er, "E");
er.prototype.isReactComponent = {};
er.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
er.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Hp() {}
i(Hp, "F");
Hp.prototype = er.prototype;
function Ma(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Bp,
    this.updater = n || Up
}
i(Ma, "G");
var Pa = Ma.prototype = new Hp;
Pa.constructor = Ma;
$p(Pa, er.prototype);
Pa.isPureReactComponent = !0;
var Ul = Array.isArray
  , jp = Object.prototype.hasOwnProperty
  , Na = {
    current: null
}
  , Wp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function qp(e, t, n) {
    var r, s = {}, o = null, a = null;
    if (t != null)
        for (r in t.ref !== void 0 && (a = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            jp.call(t, r) && !Wp.hasOwnProperty(r) && (s[r] = t[r]);
    var c = arguments.length - 2;
    if (c === 1)
        s.children = n;
    else if (1 < c) {
        for (var u = Array(c), d = 0; d < c; d++)
            u[d] = arguments[d + 2];
        s.children = u
    }
    if (e && e.defaultProps)
        for (r in c = e.defaultProps,
        c)
            s[r] === void 0 && (s[r] = c[r]);
    return {
        $$typeof: Dr,
        type: e,
        key: o,
        ref: a,
        props: s,
        _owner: Na.current
    }
}
i(qp, "M");
function fk(e, t) {
    return {
        $$typeof: Dr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
i(fk, "N");
function Da(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Dr
}
i(Da, "O");
function pk(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
i(pk, "escape");
var $l = /\/+/g;
function Ji(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? pk("" + e.key) : t.toString(36)
}
i(Ji, "Q");
function vs(e, t, n, r, s) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var a = !1;
    if (e === null)
        a = !0;
    else
        switch (o) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Dr:
            case tk:
                a = !0
            }
        }
    if (a)
        return a = e,
        s = s(a),
        e = r === "" ? "." + Ji(a, 0) : r,
        Ul(s) ? (n = "",
        e != null && (n = e.replace($l, "$&/") + "/"),
        vs(s, t, n, "", function(d) {
            return d
        })) : s != null && (Da(s) && (s = fk(s, n + (!s.key || a && a.key === s.key ? "" : ("" + s.key).replace($l, "$&/") + "/") + e)),
        t.push(s)),
        1;
    if (a = 0,
    r = r === "" ? "." : r + ":",
    Ul(e))
        for (var c = 0; c < e.length; c++) {
            o = e[c];
            var u = r + Ji(o, c);
            a += vs(o, t, n, u, s)
        }
    else if (u = dk(e),
    typeof u == "function")
        for (e = u.call(e),
        c = 0; !(o = e.next()).done; )
            o = o.value,
            u = r + Ji(o, c++),
            a += vs(o, t, n, u, s);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}
i(vs, "R");
function cs(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , s = 0;
    return vs(e, r, "", "", function(o) {
        return t.call(n, o, s++)
    }),
    r
}
i(cs, "S");
function hk(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
i(hk, "T");
var We = {
    current: null
}
  , Es = {
    transition: null
}
  , mk = {
    ReactCurrentDispatcher: We,
    ReactCurrentBatchConfig: Es,
    ReactCurrentOwner: Na
};
ee.Children = {
    map: cs,
    forEach: function(e, t, n) {
        cs(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return cs(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return cs(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Da(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
ee.Component = er;
ee.Fragment = nk;
ee.Profiler = sk;
ee.PureComponent = Ma;
ee.StrictMode = rk;
ee.Suspense = ck;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mk;
ee.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = $p({}, e.props)
      , s = e.key
      , o = e.ref
      , a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        a = Na.current),
        t.key !== void 0 && (s = "" + t.key),
        e.type && e.type.defaultProps)
            var c = e.type.defaultProps;
        for (u in t)
            jp.call(t, u) && !Wp.hasOwnProperty(u) && (r[u] = t[u] === void 0 && c !== void 0 ? c[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = n;
    else if (1 < u) {
        c = Array(u);
        for (var d = 0; d < u; d++)
            c[d] = arguments[d + 2];
        r.children = c
    }
    return {
        $$typeof: Dr,
        type: e.type,
        key: s,
        ref: o,
        props: r,
        _owner: a
    }
}
;
ee.createContext = function(e) {
    return e = {
        $$typeof: ok,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: ik,
        _context: e
    },
    e.Consumer = e
}
;
ee.createElement = qp;
ee.createFactory = function(e) {
    var t = qp.bind(null, e);
    return t.type = e,
    t
}
;
ee.createRef = function() {
    return {
        current: null
    }
}
;
ee.forwardRef = function(e) {
    return {
        $$typeof: ak,
        render: e
    }
}
;
ee.isValidElement = Da;
ee.lazy = function(e) {
    return {
        $$typeof: lk,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: hk
    }
}
;
ee.memo = function(e, t) {
    return {
        $$typeof: uk,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
ee.startTransition = function(e) {
    var t = Es.transition;
    Es.transition = {};
    try {
        e()
    } finally {
        Es.transition = t
    }
}
;
ee.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
ee.useCallback = function(e, t) {
    return We.current.useCallback(e, t)
}
;
ee.useContext = function(e) {
    return We.current.useContext(e)
}
;
ee.useDebugValue = function() {}
;
ee.useDeferredValue = function(e) {
    return We.current.useDeferredValue(e)
}
;
ee.useEffect = function(e, t) {
    return We.current.useEffect(e, t)
}
;
ee.useId = function() {
    return We.current.useId()
}
;
ee.useImperativeHandle = function(e, t, n) {
    return We.current.useImperativeHandle(e, t, n)
}
;
ee.useInsertionEffect = function(e, t) {
    return We.current.useInsertionEffect(e, t)
}
;
ee.useLayoutEffect = function(e, t) {
    return We.current.useLayoutEffect(e, t)
}
;
ee.useMemo = function(e, t) {
    return We.current.useMemo(e, t)
}
;
ee.useReducer = function(e, t, n) {
    return We.current.useReducer(e, t, n)
}
;
ee.useRef = function(e) {
    return We.current.useRef(e)
}
;
ee.useState = function(e) {
    return We.current.useState(e)
}
;
ee.useSyncExternalStore = function(e, t, n) {
    return We.current.useSyncExternalStore(e, t, n)
}
;
ee.useTransition = function() {
    return We.current.useTransition()
}
;
ee.version = "18.2.0";
Fp.exports = ee;
var gk = Fp.exports;
function yk(e) {
    const t = {
        ...e
    };
    return wf(t, "react"),
    da("react", {
        version: gk.version
    }),
    lw(t)
}
i(yk, "init");
var zp = (e => (e[e.UnsupportedFormat = 0] = "UnsupportedFormat",
e[e.Corrupted = 1] = "Corrupted",
e[e.Unknown = 2] = "Unknown",
e))(zp || {});
const _k = {
    0: ["CameraMetadataException"],
    1: ["RawDecoderException", "TiffParserException", "RawParserException"],
    2: []
};
function Sk(e) {
    if (!(e instanceof WebAssembly.RuntimeError))
        return 2;
    const t = e.message.toLowerCase()
      , n = Number(Object.entries(_k).find( ([r,s]) => s.some(o => t.includes(o.toLowerCase())))?.[0]);
    return Number.isInteger(n) ? n : 2
}
i(Sk, "classifyRawError");
var vk = {
    exports: {}
};
(function(e) {
    var t = Object.prototype.hasOwnProperty
      , n = "~";
    function r() {}
    i(r, "Events"),
    Object.create && (r.prototype = Object.create(null),
    new r().__proto__ || (n = !1));
    function s(u, d, p) {
        this.fn = u,
        this.context = d,
        this.once = p || !1
    }
    i(s, "EE");
    function o(u, d, p, f, g) {
        if (typeof p != "function")
            throw new TypeError("The listener must be a function");
        var _ = new s(p,f || u,g)
          , y = n ? n + d : d;
        return u._events[y] ? u._events[y].fn ? u._events[y] = [u._events[y], _] : u._events[y].push(_) : (u._events[y] = _,
        u._eventsCount++),
        u
    }
    i(o, "addListener");
    function a(u, d) {
        --u._eventsCount === 0 ? u._events = new r : delete u._events[d]
    }
    i(a, "clearEvent");
    function c() {
        this._events = new r,
        this._eventsCount = 0
    }
    i(c, "EventEmitter"),
    c.prototype.eventNames = i(function() {
        var d = [], p, f;
        if (this._eventsCount === 0)
            return d;
        for (f in p = this._events)
            t.call(p, f) && d.push(n ? f.slice(1) : f);
        return Object.getOwnPropertySymbols ? d.concat(Object.getOwnPropertySymbols(p)) : d
    }, "eventNames"),
    c.prototype.listeners = i(function(d) {
        var p = n ? n + d : d
          , f = this._events[p];
        if (!f)
            return [];
        if (f.fn)
            return [f.fn];
        for (var g = 0, _ = f.length, y = new Array(_); g < _; g++)
            y[g] = f[g].fn;
        return y
    }, "listeners"),
    c.prototype.listenerCount = i(function(d) {
        var p = n ? n + d : d
          , f = this._events[p];
        return f ? f.fn ? 1 : f.length : 0
    }, "listenerCount"),
    c.prototype.emit = i(function(d, p, f, g, _, y) {
        var v = n ? n + d : d;
        if (!this._events[v])
            return !1;
        var E = this._events[v], k = arguments.length, M, P;
        if (E.fn) {
            switch (E.once && this.removeListener(d, E.fn, void 0, !0),
            k) {
            case 1:
                return E.fn.call(E.context),
                !0;
            case 2:
                return E.fn.call(E.context, p),
                !0;
            case 3:
                return E.fn.call(E.context, p, f),
                !0;
            case 4:
                return E.fn.call(E.context, p, f, g),
                !0;
            case 5:
                return E.fn.call(E.context, p, f, g, _),
                !0;
            case 6:
                return E.fn.call(E.context, p, f, g, _, y),
                !0
            }
            for (P = 1,
            M = new Array(k - 1); P < k; P++)
                M[P - 1] = arguments[P];
            E.fn.apply(E.context, M)
        } else {
            var L = E.length, B;
            for (P = 0; P < L; P++)
                switch (E[P].once && this.removeListener(d, E[P].fn, void 0, !0),
                k) {
                case 1:
                    E[P].fn.call(E[P].context);
                    break;
                case 2:
                    E[P].fn.call(E[P].context, p);
                    break;
                case 3:
                    E[P].fn.call(E[P].context, p, f);
                    break;
                case 4:
                    E[P].fn.call(E[P].context, p, f, g);
                    break;
                default:
                    if (!M)
                        for (B = 1,
                        M = new Array(k - 1); B < k; B++)
                            M[B - 1] = arguments[B];
                    E[P].fn.apply(E[P].context, M)
                }
        }
        return !0
    }, "emit"),
    c.prototype.on = i(function(d, p, f) {
        return o(this, d, p, f, !1)
    }, "on"),
    c.prototype.once = i(function(d, p, f) {
        return o(this, d, p, f, !0)
    }, "once"),
    c.prototype.removeListener = i(function(d, p, f, g) {
        var _ = n ? n + d : d;
        if (!this._events[_])
            return this;
        if (!p)
            return a(this, _),
            this;
        var y = this._events[_];
        if (y.fn)
            y.fn === p && (!g || y.once) && (!f || y.context === f) && a(this, _);
        else {
            for (var v = 0, E = [], k = y.length; v < k; v++)
                (y[v].fn !== p || g && !y[v].once || f && y[v].context !== f) && E.push(y[v]);
            E.length ? this._events[_] = E.length === 1 ? E[0] : E : a(this, _)
        }
        return this
    }, "removeListener"),
    c.prototype.removeAllListeners = i(function(d) {
        var p;
        return d ? (p = n ? n + d : d,
        this._events[p] && a(this, p)) : (this._events = new r,
        this._eventsCount = 0),
        this
    }, "removeAllListeners"),
    c.prototype.off = c.prototype.removeListener,
    c.prototype.addListener = c.prototype.on,
    c.prefixed = n,
    c.EventEmitter = c,
    e.exports = c
}
)(vk);
class Ek extends Error {
    static{i(this, "AbortError")
    }
}
const bk = i(e => e instanceof DOMException && e.name === "abort" || e === "abort" || e instanceof Ek ? !0 : e instanceof Error && e.name === "AbortError", "isAbortError")
  , wk = i(e => Sk(e) === zp.Corrupted, "isCorruptedFileError")
  , Bl = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope;
yk({
    enabled: !0,
    environment: "production",
    release: "2.2.12+7b192bf",
    dsn: "https://4890aafc8e8dce271cb8169b5dfde882@o239071.ingest.us.sentry.io/4508455574568960",
    ignoreErrors: [/Failed to register a ServiceWorker/i, /Operation has been aborted/i, /Unable to preload CSS/i, /Failed to fetch dynamically imported module/i],
    beforeSend(e) {
        return e.exception?.values?.some(t => wk(t.value)) ? null : e
    },
    integrations: [Gf(), XI({
        instrumentPageLoad: !Bl,
        instrumentNavigation: !Bl
    }), UI({
        blockAllMedia: !1,
        maskAllInputs: !1,
        maskAllText: !1,
        networkDetailAllowUrls: [gu.basePaths.projects, gu.basePaths.presets]
    })],
    sampleRate: .5,
    tracesSampleRate: .01,
    tracePropagationTargets: ["localhost", /^https:\/\/polarrnext\.com/, /^https:\/\/polarr-next(.*)\.vercel\.app/],
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 1
});
class Tk {
    static{i(this, "Peer")
    }dependencies = {};
    constructor() {
        this.constructor.name
    }
    setSentryContext(t) {
        t.type === "user" ? nv(t.data) : da(t.type, t.data),
        this.constructor.name,
        t.type
    }
    disableSentry() {
        pe().getClient()?.close(),
        this.constructor.name
    }
    static broadcast() {
        $o(new this);
        let t = "INIT";
        const n = self._sentryDebugIds;
        n && typeof n == "object" && (t += `|SENTRY-DEBUG-ID-MAP->${JSON.stringify(n)}`),
        postMessage(t)
    }
    onConnected() {}
    updateDebugIdMap(t) {
        const n = JSON.parse(t);
        typeof n == "object" && Km(n)
    }
    getDependencyPort(t) {
        const n = this.dependencies[t]?.port;
        if (!n)
            throw `[Peer] Missing dependency port ${t}.`;
        return n
    }
    getDependency(t) {
        const n = this.dependencies[t]?.remote;
        if (!n)
            throw `[Peer] Missing dependency ${t}.`;
        return n
    }
    registerDependencies(t) {
        for (const [n,r] of Object.entries(t))
            this.dependencies[n] = {
                remote: Gl(r),
                port: r
            }
    }
}
class Ik extends Tk {
    static{i(this, "RawLoaderWorker")
    }rawspeed;
    initState;
    shouldSkipLoadingSameFile = !0;
    pointers;
    lockedTimeout;
    locked;
    abortController = new AbortController;
    lastLoadedPointer = null;
    lastLoadedInfo = {
        info: null,
        id: null
    };
    constructor() {
        super(),
        this.prepare(),
        this.locked = new Jc,
        this.locked.resolve(),
        this.lockedTimeout = globalThis.setTimeout( () => {}
        )
    }
    setShouldSkipLoadingSameFile(t) {
        this.shouldSkipLoadingSameFile = t
    }
    cancelLoading() {
        this.abortController.abort(),
        this.abortController = new AbortController
    }
    async loadRaw(t, n={}) {
        if (!this.rawspeed)
            throw new Error("Raw decoder is not ready");
        await this.waitUnlock();
        let r;
        try {
            this.startLoading(),
            this.resetInitialState(t);
            const s = performance.now();
            r = await this.decodeRaw(t, n),
            r.decodeTime = performance.now() - s,
            this.abortController.signal.throwIfAborted()
        } catch (s) {
            throw bk(s) || console.error("Error decoding raw photo", s),
            s
        } finally {
            this.endLoading()
        }
        return r
    }
    getTotalBytesUsage() {
        return (this.initState?.byteLength ?? 0) + (this.rawspeed?.wasmMemory.buffer?.byteLength ?? 0) + (this.lastLoadedInfo.info?.raw_data?.byteLength ?? 0)
    }
    async decodeRaw(t, n={}) {
        if (!this.rawspeed)
            throw new Error("Raw decoder is not ready");
        const r = Vc(t);
        if (this.shouldSkipLoadingSameFile === !0 && r === this.lastLoadedInfo.id && this.lastLoadedInfo.info)
            return this.lastLoadedInfo.info;
        const s = await Nm(t);
        this.abortController.signal.throwIfAborted(),
        this.lastLoadedPointer = this.rawspeed._malloc(s.byteLength),
        this.rawspeed.HEAPU8.set(s, this.lastLoadedPointer),
        this.rawspeed.decodeRaw(this.lastLoadedPointer, s.byteLength, !1);
        const o = this.rawspeed.getRawInfo();
        if (!o || !o.raw_data)
            throw new Error("Empty raw data");
        this.abortController.signal.throwIfAborted();
        const a = o.raw_data;
        return o.raw_data = a.buffer,
        o.raw_data_offset = a.byteOffset,
        o.raw_data_length = a.byteLength,
        o.orientation = n.metadata?.orientation ?? o?.orientation ?? 1,
        this.shouldSkipLoadingSameFile === !0 && (this.lastLoadedInfo.info = o),
        o
    }
    getPointers() {
        return this.pointers || (this.pointers = {
            headerIndex: this.rawspeed._malloc(0)
        }),
        this.pointers
    }
    startLoading() {
        this.abortController = new AbortController,
        this.locked = new Jc,
        this.lockedTimeout = globalThis.setTimeout( () => {
            this.locked.resolve()
        }
        , 3e4)
    }
    endLoading() {
        globalThis.clearTimeout(this.lockedTimeout),
        this.locked.resolve()
    }
    waitUnlock() {
        return this.locked.promise
    }
    resetInitialState(t) {
        const n = Vc(t);
        if (!(this.shouldSkipLoadingSameFile == !0 && n === this.lastLoadedInfo.id))
            if (this.lastLoadedInfo = {
                id: n,
                info: null
            },
            this.lastLoadedPointer !== null && (this.rawspeed?._free(this.lastLoadedPointer),
            this.rawspeed?.releaseRaw(),
            this.lastLoadedPointer = null),
            this.initState)
                this.rawspeed?.HEAPU8.set(new Uint8Array(this.initState), 0);
            else {
                const {headerIndex: r} = this.getPointers();
                this.initState = this.rawspeed?.wasmMemory.buffer.slice(0, r)
            }
    }
    async prepare() {
        this.rawspeed = await Hl(),
        this.rawspeed?.setup(navigator.hardwareConcurrency)
    }
    cleanup() {
        this.resetInitialState(new File([],"empty-file")),
        this.lastLoadedInfo = {
            info: null,
            id: null
        }
    }
}
Ik.broadcast();
//# sourceMappingURL=raw-loader.worker-CjlP12kS.js.map
