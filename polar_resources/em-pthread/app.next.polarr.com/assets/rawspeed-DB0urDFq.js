var va = Object.defineProperty;
var a = (F, B) => va(F, "name", {
    value: B,
    configurable: !0
});
(function() {
    try {
        var F = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , B = new F.Error().stack;
        B && (F._sentryDebugIds = F._sentryDebugIds || {},
        F._sentryDebugIds[B] = "97efa033-4c57-4349-83f2-fb06e7b9f05f",
        F._sentryDebugIdIdentifier = "sentry-dbid-97efa033-4c57-4349-83f2-fb06e7b9f05f")
    } catch {}
}
)();
var ca = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
ca.SENTRY_RELEASE = {
    id: "2.2.12+7b192bf"
};
var da = ( () => {
    var F = import.meta.url;
    return async function(B={}) {
        var lr, l = B, vr, cr, _n = new Promise( (r, e) => {
            vr = r,
            cr = e
        }
        ), Ur = typeof window == "object", G = typeof WorkerGlobalScope < "u";
        typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && process.type != "renderer";
        var p = G && self.name?.startsWith("em-pthread")
          , Hr = Object.assign({}, l)
          , Or = "./this.program"
          , xr = a( (r, e) => {
            throw e
        }
        , "quit_")
          , C = "";
        function pn(r) {
            return l.locateFile ? l.locateFile(r, C) : C + r
        }
        a(pn, "locateFile");
        var jr, dr;
        (Ur || G) && (G ? C = self.location.href : typeof document < "u" && document.currentScript && (C = document.currentScript.src),
        F && (C = F),
        C.startsWith("blob:") ? C = "" : C = C.slice(0, C.replace(/[?#].*/, "").lastIndexOf("/") + 1),
        G && (dr = a(r => {
            var e = new XMLHttpRequest;
            return e.open("GET", r, !1),
            e.responseType = "arraybuffer",
            e.send(null),
            new Uint8Array(e.response)
        }
        , "readBinary")),
        jr = a(async r => {
            var e = await fetch(r, {
                credentials: "same-origin"
            });
            if (e.ok)
                return e.arrayBuffer();
            throw new Error(e.status + " : " + e.url)
        }
        , "readAsync"));
        var Vr = l.print || console.log.bind(console)
          , W = l.printErr || console.error.bind(console);
        Object.assign(l, Hr),
        Hr = null,
        l.arguments && l.arguments,
        l.thisProgram && (Or = l.thisProgram);
        var Z = l.wasmBinary, b, Br, J = !1, N, M, Nr, Lr, Dr, Gr, zr, Yr, I, Kr, Xr, qr = !1;
        function z() {
            return b.buffer != M.buffer && P(),
            M
        }
        a(z, "GROWABLE_HEAP_I8");
        function E() {
            return b.buffer != M.buffer && P(),
            Nr
        }
        a(E, "GROWABLE_HEAP_U8");
        function Q() {
            return b.buffer != M.buffer && P(),
            Lr
        }
        a(Q, "GROWABLE_HEAP_I16");
        function _r() {
            return b.buffer != M.buffer && P(),
            Dr
        }
        a(_r, "GROWABLE_HEAP_U16");
        function x() {
            return b.buffer != M.buffer && P(),
            Gr
        }
        a(x, "GROWABLE_HEAP_I32");
        function g() {
            return b.buffer != M.buffer && P(),
            zr
        }
        a(g, "GROWABLE_HEAP_U32");
        function hn() {
            return b.buffer != M.buffer && P(),
            Yr
        }
        a(hn, "GROWABLE_HEAP_F32");
        function rr() {
            return b.buffer != M.buffer && P(),
            Xr
        }
        if (a(rr, "GROWABLE_HEAP_F64"),
        p) {
            let r = function(...t) {
                var i = t.join(" ");
                console.error(i)
            }
              , e = function(...t) {
                var i = t.join(" ");
                postMessage({
                    cmd: "alert",
                    text: i,
                    threadId: ur()
                })
            }
              , n = function(t) {
                try {
                    var i = t.data
                      , f = i.cmd;
                    if (f === "load") {
                        let o = [];
                        self.onmessage = s => o.push(s),
                        self.startWorker = s => {
                            postMessage({
                                cmd: "loaded"
                            });
                            for (let u of o)
                                n(u);
                            self.onmessage = n
                        }
                        ;
                        for (const s of i.handlers)
                            (!l[s] || l[s].proxy) && (l[s] = (...u) => {
                                postMessage({
                                    cmd: "callHandler",
                                    handler: s,
                                    args: u
                                })
                            }
                            ,
                            s == "print" && (Vr = l[s]),
                            s == "printErr" && (W = l[s]));
                        b = i.wasmMemory,
                        P(),
                        Zr(i.wasmModule)
                    } else if (f === "run") {
                        Mn(i.pthread_ptr),
                        Mr(i.pthread_ptr, 0, 0, 1, 0, 0),
                        _.threadInitTLS(),
                        Wr(i.pthread_ptr),
                        pr || (nn(),
                        pr = !0);
                        try {
                            Sn(i.start_routine, i.arg)
                        } catch (o) {
                            if (o != "unwind")
                                throw o
                        }
                    } else
                        i.target === "setimmediate" || (f === "checkMailbox" ? pr && sr() : f && (W(`worker: received unknown command ${f}`),
                        W(i)))
                } catch (o) {
                    throw tn(),
                    o
                }
            };
            a(r, "threadPrintErr"),
            a(e, "threadAlert"),
            a(n, "handleMessage");
            var Zr, pr = !1;
            l.printErr || (W = r),
            self.alert = e,
            self.onunhandledrejection = t => {
                throw t.reason || t
            }
            ,
            self.onmessage = n
        }
        function P() {
            var r = b.buffer;
            l.HEAP8 = M = new Int8Array(r),
            l.HEAP16 = Lr = new Int16Array(r),
            l.HEAPU8 = Nr = new Uint8Array(r),
            l.HEAPU16 = Dr = new Uint16Array(r),
            l.HEAP32 = Gr = new Int32Array(r),
            l.HEAPU32 = zr = new Uint32Array(r),
            l.HEAPF32 = Yr = new Float32Array(r),
            l.HEAPF64 = Xr = new Float64Array(r),
            l.HEAP64 = I = new BigInt64Array(r),
            l.HEAPU64 = Kr = new BigUint64Array(r)
        }
        if (a(P, "updateMemoryViews"),
        !p) {
            if (l.wasmMemory)
                b = l.wasmMemory;
            else {
                var gn = l.INITIAL_MEMORY || 67108864;
                b = new WebAssembly.Memory({
                    initial: gn / 65536,
                    maximum: 16384,
                    shared: !0
                })
            }
            P()
        }
        function mn() {
            if (l.preRun)
                for (typeof l.preRun == "function" && (l.preRun = [l.preRun]); l.preRun.length; )
                    fe(l.preRun.shift());
            oe(se)
        }
        a(mn, "preRun");
        function Jr() {
            if (qr = !0,
            p)
                return startWorker(l);
            m.da()
        }
        a(Jr, "initRuntime");
        function yn() {
            if (!p) {
                if (l.postRun)
                    for (typeof l.postRun == "function" && (l.postRun = [l.postRun]); l.postRun.length; )
                        Cn(l.postRun.shift());
                oe(_e)
            }
        }
        a(yn, "postRun");
        var j = 0
          , Y = null;
        function Qr(r) {
            j++,
            l.monitorRunDependencies?.(j)
        }
        a(Qr, "addRunDependency");
        function re(r) {
            if (j--,
            l.monitorRunDependencies?.(j),
            j == 0 && Y) {
                var e = Y;
                Y = null,
                e()
            }
        }
        a(re, "removeRunDependency");
        function hr(r) {
            l.onAbort?.(r),
            r = "Aborted(" + r + ")",
            W(r),
            J = !0,
            r += ". Build with -sASSERTIONS for more info.",
            qr && fn();
            var e = new WebAssembly.RuntimeError(r);
            throw cr(e),
            e
        }
        a(hr, "abort");
        var gr;
        function bn() {
            return l.locateFile ? pn("@assets/rawspeed.wasm") : new URL("/assets/rawspeed-BR8Zo8cF.wasm",import.meta.url).href
        }
        a(bn, "findWasmBinary");
        function wn(r) {
            if (r == gr && Z)
                return new Uint8Array(Z);
            if (dr)
                return dr(r);
            throw "both async and sync fetching of the wasm failed"
        }
        a(wn, "getBinarySync");
        async function Tn(r) {
            if (!Z)
                try {
                    var e = await jr(r);
                    return new Uint8Array(e)
                } catch {}
            return wn(r)
        }
        a(Tn, "getWasmBinary");
        async function An(r, e) {
            try {
                var n = await Tn(r)
                  , t = await WebAssembly.instantiate(n, e);
                return t
            } catch (i) {
                W(`failed to asynchronously prepare wasm: ${i}`),
                hr(i)
            }
        }
        a(An, "instantiateArrayBuffer");
        async function En(r, e, n) {
            if (!r && typeof WebAssembly.instantiateStreaming == "function")
                try {
                    var t = fetch(e, {
                        credentials: "same-origin"
                    })
                      , i = await WebAssembly.instantiateStreaming(t, n);
                    return i
                } catch (f) {
                    W(`wasm streaming compile failed: ${f}`),
                    W("falling back to ArrayBuffer instantiation")
                }
            return An(e, n)
        }
        a(En, "instantiateAsync");
        function ee() {
            return ua(),
            {
                a: rn
            }
        }
        a(ee, "getWasmImports");
        async function kn() {
            function r(f, o) {
                return m = f.exports,
                $n(m.ka),
                pe = m.ea,
                Br = o,
                re(),
                m
            }
            a(r, "receiveInstance"),
            Qr();
            function e(f) {
                return r(f.instance, f.module)
            }
            a(e, "receiveInstantiationResult");
            var n = ee();
            if (l.instantiateWasm)
                return new Promise( (f, o) => {
                    l.instantiateWasm(n, (s, u) => {
                        r(s, u),
                        f(s.exports)
                    }
                    )
                }
                );
            if (p)
                return new Promise(f => {
                    Zr = a(o => {
                        var s = new WebAssembly.Instance(o,ee());
                        f(r(s, o))
                    }
                    , "wasmModuleReceived")
                }
                );
            gr ??= bn();
            try {
                var t = await En(Z, gr, n)
                  , i = e(t);
                return i
            } catch (f) {
                return cr(f),
                Promise.reject(f)
            }
        }
        a(kn, "createWasm");
        var ne = {
            984552: (r, e) => {
                throw new Error(nr(r) + ": " + nr(e))
            }
        };
        class te {
            static{a(this, "ExitStatus")
            }name = "ExitStatus";
            constructor(e) {
                this.message = `Program terminated with exit(${e})`,
                this.status = e
            }
        }
        var ae = a(r => {
            r.terminate(),
            r.onmessage = e => {}
        }
        , "terminateWorker")
          , ie = a(r => {
            var e = _.pthreads[r];
            _.returnWorkerToPool(e)
        }
        , "cleanupThread")
          , oe = a(r => {
            for (; r.length > 0; )
                r.shift()(l)
        }
        , "callRuntimeCallbacks")
          , se = []
          , fe = a(r => se.unshift(r), "addOnPreRun")
          , ue = a(r => {
            var e = _.getNewWorker();
            if (!e)
                return 6;
            _.runningWorkers.push(e),
            _.pthreads[r.pthread_ptr] = e,
            e.pthread_ptr = r.pthread_ptr;
            var n = {
                cmd: "run",
                start_routine: r.startRoutine,
                arg: r.arg,
                pthread_ptr: r.pthread_ptr
            };
            return e.postMessage(n, r.transferList),
            0
        }
        , "spawnThread")
          , mr = 0
          , yr = a( () => ge || mr > 0, "keepRuntimeAlive")
          , le = a( () => cn(), "stackSave")
          , br = a(r => ln(r), "stackRestore")
          , wr = a(r => vn(r), "stackAlloc")
          , Wn = 9007199254740992
          , Pn = -9007199254740992
          , Rn = a(r => r < Pn || r > Wn ? NaN : Number(r), "bigintToI53Checked")
          , T = a( (r, e, n, ...t) => {
            for (var i = t.length * 2, f = le(), o = wr(i * 8), s = o >> 3, u = 0; u < t.length; u++) {
                var v = t[u];
                typeof v == "bigint" ? (I[s + 2 * u] = 1n,
                I[s + 2 * u + 1] = v) : (I[s + 2 * u] = 0n,
                rr()[s + 2 * u + 1] = v)
            }
            var c = an(r, e, i, o, n);
            return br(f),
            c
        }
        , "proxyToMainThread");
        function ve(r) {
            if (p)
                return T(0, 0, 1, r);
            N = r,
            yr() || (_.terminateAllThreads(),
            l.onExit?.(r),
            J = !0),
            xr(r, new te(r))
        }
        a(ve, "_proc_exit");
        var ce = a(r => {
            if (r instanceof te || r == "unwind")
                return N;
            xr(1, r)
        }
        , "handleException");
        function de(r) {
            if (p)
                return T(1, 0, 0, r);
            Tr(r)
        }
        a(de, "exitOnMainThread");
        var Fn = a( (r, e) => {
            if (N = r,
            p)
                throw de(r),
                "unwind";
            ve(r)
        }
        , "exitJS"), Tr = Fn, _ = {
            unusedWorkers: [],
            runningWorkers: [],
            tlsInitFunctions: [],
            pthreads: {},
            init() {
                p || _.initMainThread()
            },
            initMainThread() {
                for (var r = 4; r--; )
                    _.allocateUnusedWorker();
                fe( () => {
                    Qr(),
                    _.loadWasmModuleToAllWorkers( () => re())
                }
                )
            },
            terminateAllThreads: () => {
                for (var r of _.runningWorkers)
                    ae(r);
                for (var r of _.unusedWorkers)
                    ae(r);
                _.unusedWorkers = [],
                _.runningWorkers = [],
                _.pthreads = {}
            }
            ,
            returnWorkerToPool: r => {
                var e = r.pthread_ptr;
                delete _.pthreads[e],
                _.unusedWorkers.push(r),
                _.runningWorkers.splice(_.runningWorkers.indexOf(r), 1),
                r.pthread_ptr = 0,
                on(e)
            }
            ,
            threadInitTLS() {
                _.tlsInitFunctions.forEach(r => r())
            },
            loadWasmModuleToWorker: r => new Promise(e => {
                r.onmessage = f => {
                    var o = f.data
                      , s = o.cmd;
                    if (o.targetThread && o.targetThread != ur()) {
                        var u = _.pthreads[o.targetThread];
                        u ? u.postMessage(o, o.transferList) : W(`Internal error! Worker sent a message "${s}" to target pthread ${o.targetThread}, but that thread no longer exists!`);
                        return
                    }
                    s === "checkMailbox" ? sr() : s === "spawnThread" ? ue(o) : s === "cleanupThread" ? ie(o.thread) : s === "loaded" ? (r.loaded = !0,
                    e(r)) : s === "alert" ? alert(`Thread ${o.threadId}: ${o.text}`) : o.target === "setimmediate" ? r.postMessage(o) : s === "callHandler" ? l[o.handler](...o.args) : s && W(`worker sent an unknown command ${s}`)
                }
                ,
                r.onerror = f => {
                    var o = "worker sent an error!";
                    throw W(`${o} ${f.filename}:${f.lineno}: ${f.message}`),
                    f
                }
                ;
                var n = []
                  , t = ["onExit", "onAbort", "print", "printErr"];
                for (var i of t)
                    l.propertyIsEnumerable(i) && n.push(i);
                r.postMessage({
                    cmd: "load",
                    handlers: n,
                    wasmMemory: b,
                    wasmModule: Br
                })
            }
            ),
            loadWasmModuleToAllWorkers(r) {
                if (p)
                    return r();
                Promise.all(_.unusedWorkers.map(_.loadWasmModuleToWorker)).then(r)
            },
            allocateUnusedWorker() {
                var r;
                r = new Worker(self.location.href,{
                    type: "module",
                    name: "em-pthread"
                }),
                _.unusedWorkers.push(r)
            },
            getNewWorker() {
                if (_.unusedWorkers.length != 0)
                    return _.unusedWorkers.pop()
            }
        }, _e = [], Cn = a(r => _e.unshift(r), "addOnPostRun"), Mn = a(r => {
            P();
            var e = g()[r + 52 >> 2]
              , n = g()[r + 56 >> 2]
              , t = e - n;
            un(e, t),
            br(e)
        }
        , "establishStackSpace"), er = [], pe, he = a(r => {
            var e = er[r];
            return e || (r >= er.length && (er.length = r + 1),
            er[r] = e = pe.get(r)),
            e
        }
        , "getWasmTableEntry"), Sn = a( (r, e) => {
            mr = 0,
            ge = 0;
            var n = he(r)(e);
            function t(i) {
                yr() ? N = i : Sr(i)
            }
            a(t, "finish"),
            t(n)
        }
        , "invokeEntryPoint"), ge = l.noExitRuntime || !0, $n = a(r => _.tlsInitFunctions.push(r), "registerTLSInit");
        function me(r, e, n, t) {
            return p ? T(2, 0, 1, r, e, n, t) : ye(r, e, n, t)
        }
        a(me, "pthreadCreateProxied");
        var In = a( () => typeof SharedArrayBuffer < "u", "_emscripten_has_threading_support")
          , ye = a( (r, e, n, t) => {
            if (!In())
                return 6;
            var i = []
              , f = 0;
            if (p && (i.length === 0 || f))
                return me(r, e, n, t);
            var o = {
                startRoutine: n,
                pthread_ptr: r,
                arg: t,
                transferList: i
            };
            return p ? (o.cmd = "spawnThread",
            postMessage(o, i),
            0) : ue(o)
        }
        , "___pthread_create_js")
          , be = typeof TextDecoder < "u" ? new TextDecoder : void 0
          , we = a( (r, e=0, n=NaN) => {
            for (var t = e + n, i = e; r[i] && !(i >= t); )
                ++i;
            if (i - e > 16 && r.buffer && be)
                return be.decode(r.buffer instanceof ArrayBuffer ? r.subarray(e, i) : r.slice(e, i));
            for (var f = ""; e < i; ) {
                var o = r[e++];
                if (!(o & 128)) {
                    f += String.fromCharCode(o);
                    continue
                }
                var s = r[e++] & 63;
                if ((o & 224) == 192) {
                    f += String.fromCharCode((o & 31) << 6 | s);
                    continue
                }
                var u = r[e++] & 63;
                if ((o & 240) == 224 ? o = (o & 15) << 12 | s << 6 | u : o = (o & 7) << 18 | s << 12 | u << 6 | r[e++] & 63,
                o < 65536)
                    f += String.fromCharCode(o);
                else {
                    var v = o - 65536;
                    f += String.fromCharCode(55296 | v >> 10, 56320 | v & 1023)
                }
            }
            return f
        }
        , "UTF8ArrayToString")
          , nr = a( (r, e) => r ? we(E(), r, e) : "", "UTF8ToString");
        function Te(r, e, n) {
            return p ? T(3, 0, 1, r, e, n) : 0
        }
        a(Te, "___syscall_fcntl64");
        var Un = a( (r, e, n, t) => {
            if (!(t > 0))
                return 0;
            for (var i = n, f = n + t - 1, o = 0; o < r.length; ++o) {
                var s = r.charCodeAt(o);
                if (s >= 55296 && s <= 57343) {
                    var u = r.charCodeAt(++o);
                    s = 65536 + ((s & 1023) << 10) | u & 1023
                }
                if (s <= 127) {
                    if (n >= f)
                        break;
                    e[n++] = s
                } else if (s <= 2047) {
                    if (n + 1 >= f)
                        break;
                    e[n++] = 192 | s >> 6,
                    e[n++] = 128 | s & 63
                } else if (s <= 65535) {
                    if (n + 2 >= f)
                        break;
                    e[n++] = 224 | s >> 12,
                    e[n++] = 128 | s >> 6 & 63,
                    e[n++] = 128 | s & 63
                } else {
                    if (n + 3 >= f)
                        break;
                    e[n++] = 240 | s >> 18,
                    e[n++] = 128 | s >> 12 & 63,
                    e[n++] = 128 | s >> 6 & 63,
                    e[n++] = 128 | s & 63
                }
            }
            return e[n] = 0,
            n - i
        }
        , "stringToUTF8Array")
          , L = a( (r, e, n) => Un(r, E(), e, n), "stringToUTF8");
        function Ae(r, e, n) {
            if (p)
                return T(4, 0, 1, r, e, n)
        }
        a(Ae, "___syscall_getdents64");
        function Ee(r, e, n) {
            return p ? T(5, 0, 1, r, e, n) : 0
        }
        a(Ee, "___syscall_ioctl");
        function ke(r, e, n, t) {
            if (p)
                return T(6, 0, 1, r, e, n, t)
        }
        a(ke, "___syscall_openat");
        function We(r, e, n) {
            if (p)
                return T(7, 0, 1, r, e, n)
        }
        a(We, "___syscall_unlinkat");
        var Hn = a( () => hr(""), "__abort_js")
          , tr = {}
          , Ar = a(r => {
            for (; r.length; ) {
                var e = r.pop()
                  , n = r.pop();
                n(e)
            }
        }
        , "runDestructors");
        function ar(r) {
            return this.fromWireType(g()[r >> 2])
        }
        a(ar, "readPointer");
        var D = {}, V = {}, ir = {}, Pe, Re = a(r => {
            throw new Pe(r)
        }
        , "throwInternalError"), Fe = a( (r, e, n) => {
            r.forEach(s => ir[s] = e);
            function t(s) {
                var u = n(s);
                u.length !== r.length && Re("Mismatched type converter count");
                for (var v = 0; v < r.length; ++v)
                    S(r[v], u[v])
            }
            a(t, "onComplete");
            var i = new Array(e.length)
              , f = []
              , o = 0;
            e.forEach( (s, u) => {
                V.hasOwnProperty(s) ? i[u] = V[s] : (f.push(s),
                D.hasOwnProperty(s) || (D[s] = []),
                D[s].push( () => {
                    i[u] = V[s],
                    ++o,
                    o === f.length && t(i)
                }
                ))
            }
            ),
            f.length === 0 && t(i)
        }
        , "whenDependentTypesAreResolved"), On = a(r => {
            var e = tr[r];
            delete tr[r];
            var n = e.rawConstructor
              , t = e.rawDestructor
              , i = e.fields
              , f = i.map(o => o.getterReturnType).concat(i.map(o => o.setterArgumentType));
            Fe([r], f, o => {
                var s = {};
                return i.forEach( (u, v) => {
                    var c = u.fieldName
                      , d = o[v]
                      , y = u.getter
                      , R = u.getterContext
                      , h = o[v + i.length]
                      , $ = u.setter
                      , Ir = u.setterContext;
                    s[c] = {
                        read: q => d.fromWireType(y(R, q)),
                        write: (q, la) => {
                            var dn = [];
                            $(Ir, q, h.toWireType(dn, la)),
                            Ar(dn)
                        }
                    }
                }
                ),
                [{
                    name: e.name,
                    fromWireType: u => {
                        var v = {};
                        for (var c in s)
                            v[c] = s[c].read(u);
                        return t(u),
                        v
                    }
                    ,
                    toWireType: (u, v) => {
                        for (var c in s)
                            if (!(c in v))
                                throw new TypeError(`Missing field: "${c}"`);
                        var d = n();
                        for (c in s)
                            s[c].write(d, v[c]);
                        return u !== null && u.push(t, d),
                        d
                    }
                    ,
                    argPackAdvance: U,
                    readValueFromPointer: ar,
                    destructorFunction: t
                }]
            }
            )
        }
        , "__embind_finalize_value_object"), xn = a(r => {
            if (r === null)
                return "null";
            var e = typeof r;
            return e === "object" || e === "array" || e === "function" ? r.toString() : "" + r
        }
        , "embindRepr"), jn = a( () => {
            for (var r = new Array(256), e = 0; e < 256; ++e)
                r[e] = String.fromCharCode(e);
            Ce = r
        }
        , "embind_init_charCodes"), Ce, A = a(r => {
            for (var e = "", n = r; E()[n]; )
                e += Ce[E()[n++]];
            return e
        }
        , "readLatin1String"), Me, k = a(r => {
            throw new Me(r)
        }
        , "throwBindingError");
        function Vn(r, e, n={}) {
            var t = e.name;
            if (r || k(`type "${t}" must have a positive integer typeid pointer`),
            V.hasOwnProperty(r)) {
                if (n.ignoreDuplicateRegistrations)
                    return;
                k(`Cannot register type '${t}' twice`)
            }
            if (V[r] = e,
            delete ir[r],
            D.hasOwnProperty(r)) {
                var i = D[r];
                delete D[r],
                i.forEach(f => f())
            }
        }
        a(Vn, "sharedRegisterType");
        function S(r, e, n={}) {
            return Vn(r, e, n)
        }
        a(S, "registerType");
        var Se = a( (r, e, n) => {
            switch (e) {
            case 1:
                return n ? t => z()[t] : t => E()[t];
            case 2:
                return n ? t => Q()[t >> 1] : t => _r()[t >> 1];
            case 4:
                return n ? t => x()[t >> 2] : t => g()[t >> 2];
            case 8:
                return n ? t => I[t >> 3] : t => Kr[t >> 3];
            default:
                throw new TypeError(`invalid integer width (${e}): ${r}`)
            }
        }
        , "integerReadValueFromPointer")
          , Bn = a( (r, e, n, t, i) => {
            e = A(e);
            var f = e.indexOf("u") != -1;
            S(r, {
                name: e,
                fromWireType: o => o,
                toWireType: function(o, s) {
                    if (typeof s != "bigint" && typeof s != "number")
                        throw new TypeError(`Cannot convert "${xn(s)}" to ${this.name}`);
                    return typeof s == "number" && (s = BigInt(s)),
                    s
                },
                argPackAdvance: U,
                readValueFromPointer: Se(e, n, !f),
                destructorFunction: null
            })
        }
        , "__embind_register_bigint")
          , U = 8
          , Nn = a( (r, e, n, t) => {
            e = A(e),
            S(r, {
                name: e,
                fromWireType: function(i) {
                    return !!i
                },
                toWireType: function(i, f) {
                    return f ? n : t
                },
                argPackAdvance: U,
                readValueFromPointer: function(i) {
                    return this.fromWireType(E()[i])
                },
                destructorFunction: null
            })
        }
        , "__embind_register_bool")
          , Er = []
          , H = []
          , kr = a(r => {
            r > 9 && --H[r + 1] === 0 && (H[r] = void 0,
            Er.push(r))
        }
        , "__emval_decref")
          , Ln = a( () => H.length / 2 - 5 - Er.length, "count_emval_handles")
          , Dn = a( () => {
            H.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1),
            l.count_emval_handles = Ln
        }
        , "init_emval")
          , w = {
            toValue: r => (r || k("Cannot use deleted val. handle = " + r),
            H[r]),
            toHandle: r => {
                switch (r) {
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
                        const e = Er.pop() || H.length;
                        return H[e] = r,
                        H[e + 1] = 1,
                        e
                    }
                }
            }
        }
          , Gn = {
            name: "emscripten::val",
            fromWireType: r => {
                var e = w.toValue(r);
                return kr(r),
                e
            }
            ,
            toWireType: (r, e) => w.toHandle(e),
            argPackAdvance: U,
            readValueFromPointer: ar,
            destructorFunction: null
        }
          , zn = a(r => S(r, Gn), "__embind_register_emval")
          , Yn = a( (r, e) => {
            switch (e) {
            case 4:
                return function(n) {
                    return this.fromWireType(hn()[n >> 2])
                }
                ;
            case 8:
                return function(n) {
                    return this.fromWireType(rr()[n >> 3])
                }
                ;
            default:
                throw new TypeError(`invalid float width (${e}): ${r}`)
            }
        }
        , "floatReadValueFromPointer")
          , Kn = a( (r, e, n) => {
            e = A(e),
            S(r, {
                name: e,
                fromWireType: t => t,
                toWireType: (t, i) => i,
                argPackAdvance: U,
                readValueFromPointer: Yn(e, n),
                destructorFunction: null
            })
        }
        , "__embind_register_float")
          , or = a( (r, e) => Object.defineProperty(e, "name", {
            value: r
        }), "createNamedFunction");
        function $e(r) {
            for (var e = 1; e < r.length; ++e)
                if (r[e] !== null && r[e].destructorFunction === void 0)
                    return !0;
            return !1
        }
        a($e, "usesDestructorStack");
        function Ie(r, e) {
            if (!(r instanceof Function))
                throw new TypeError(`new_ called with constructor type ${typeof r} which is not a function`);
            var n = or(r.name || "unknownFunctionName", function() {});
            n.prototype = r.prototype;
            var t = new n
              , i = r.apply(t, e);
            return i instanceof Object ? i : t
        }
        a(Ie, "newFunc");
        function Xn(r, e, n, t) {
            var i = $e(r)
              , f = r.length - 2
              , o = []
              , s = ["fn"];
            e && s.push("thisWired");
            for (var u = 0; u < f; ++u)
                o.push(`arg${u}`),
                s.push(`arg${u}Wired`);
            o = o.join(","),
            s = s.join(",");
            var v = `return function (${o}) {
`;
            i && (v += `var destructors = [];
`);
            var c = i ? "destructors" : "null"
              , d = ["humanName", "throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
            e && (v += `var thisWired = classParam['toWireType'](${c}, this);
`);
            for (var u = 0; u < f; ++u)
                v += `var arg${u}Wired = argType${u}['toWireType'](${c}, arg${u});
`,
                d.push(`argType${u}`);
            if (v += (n || t ? "var rv = " : "") + `invoker(${s});
`,
            i)
                v += `runDestructors(destructors);
`;
            else
                for (var u = e ? 1 : 2; u < r.length; ++u) {
                    var y = u === 1 ? "thisWired" : "arg" + (u - 2) + "Wired";
                    r[u].destructorFunction !== null && (v += `${y}_dtor(${y});
`,
                    d.push(`${y}_dtor`))
                }
            return n && (v += `var ret = retType['fromWireType'](rv);
return ret;
`),
            v += `}
`,
            [d, v]
        }
        a(Xn, "createJsInvoker");
        function qn(r, e, n, t, i, f) {
            var o = e.length;
            o < 2 && k("argTypes array size mismatch! Must at least get return value and 'this' types!");
            for (var s = e[1] !== null && n !== null, u = $e(e), v = e[0].name !== "void", c = [r, k, t, i, Ar, e[0], e[1]], d = 0; d < o - 2; ++d)
                c.push(e[d + 2]);
            if (!u)
                for (var d = s ? 1 : 2; d < e.length; ++d)
                    e[d].destructorFunction !== null && c.push(e[d].destructorFunction);
            let[y,R] = Xn(e, s, v, f);
            y.push(R);
            var h = Ie(Function, y)(...c);
            return or(r, h)
        }
        a(qn, "craftInvokerFunction");
        var Zn = a( (r, e, n) => {
            if (r[e].overloadTable === void 0) {
                var t = r[e];
                r[e] = function(...i) {
                    return r[e].overloadTable.hasOwnProperty(i.length) || k(`Function '${n}' called with an invalid number of arguments (${i.length}) - expects one of (${r[e].overloadTable})!`),
                    r[e].overloadTable[i.length].apply(this, i)
                }
                ,
                r[e].overloadTable = [],
                r[e].overloadTable[t.argCount] = t
            }
        }
        , "ensureOverloadTable"), Jn = a( (r, e, n) => {
            l.hasOwnProperty(r) ? ((n === void 0 || l[r].overloadTable !== void 0 && l[r].overloadTable[n] !== void 0) && k(`Cannot register public name '${r}' twice`),
            Zn(l, r, r),
            l[r].overloadTable.hasOwnProperty(n) && k(`Cannot register multiple overloads of a function with the same number of arguments (${n})!`),
            l[r].overloadTable[n] = e) : (l[r] = e,
            l[r].argCount = n)
        }
        , "exposePublicSymbol"), Qn = a( (r, e) => {
            for (var n = [], t = 0; t < r; t++)
                n.push(g()[e + t * 4 >> 2]);
            return n
        }
        , "heap32VectorToArray"), rt = a( (r, e, n) => {
            l.hasOwnProperty(r) || Re("Replacing nonexistent public symbol"),
            l[r].overloadTable !== void 0 && n !== void 0 ? l[r].overloadTable[n] = e : (l[r] = e,
            l[r].argCount = n)
        }
        , "replacePublicSymbol"), K = a( (r, e) => {
            r = A(r);
            function n() {
                return he(e)
            }
            a(n, "makeDynCaller");
            var t = n();
            return typeof t != "function" && k(`unknown function pointer with signature ${r}: ${e}`),
            t
        }
        , "embind__requireFunction"), et = a( (r, e) => {
            var n = or(e, function(t) {
                this.name = e,
                this.message = t;
                var i = new Error(t).stack;
                i !== void 0 && (this.stack = this.toString() + `
` + i.replace(/^Error(:[^\n]*)?\n/, ""))
            });
            return n.prototype = Object.create(r.prototype),
            n.prototype.constructor = n,
            n.prototype.toString = function() {
                return this.message === void 0 ? this.name : `${this.name}: ${this.message}`
            }
            ,
            n
        }
        , "extendError"), Ue, He = a(r => {
            var e = en(r)
              , n = A(e);
            return O(e),
            n
        }
        , "getTypeName"), nt = a( (r, e) => {
            var n = []
              , t = {};
            function i(f) {
                if (!t[f] && !V[f]) {
                    if (ir[f]) {
                        ir[f].forEach(i);
                        return
                    }
                    n.push(f),
                    t[f] = !0
                }
            }
            throw a(i, "visit"),
            e.forEach(i),
            new Ue(`${r}: ` + n.map(He).join([", "]))
        }
        , "throwUnboundTypeError"), tt = a(r => {
            r = r.trim();
            const e = r.indexOf("(");
            return e === -1 ? r : r.slice(0, e)
        }
        , "getFunctionName"), at = a( (r, e, n, t, i, f, o, s) => {
            var u = Qn(e, n);
            r = A(r),
            r = tt(r),
            i = K(t, i),
            Jn(r, function() {
                nt(`Cannot call ${r} due to unbound types`, u)
            }, e - 1),
            Fe([], u, v => {
                var c = [v[0], null].concat(v.slice(1));
                return rt(r, qn(r, c, null, i, f, o), e - 1),
                []
            }
            )
        }
        , "__embind_register_function"), it = a( (r, e, n, t, i) => {
            e = A(e);
            var f = a(c => c, "fromWireType");
            if (t === 0) {
                var o = 32 - 8 * n;
                f = a(c => c << o >>> o, "fromWireType")
            }
            var s = e.includes("unsigned"), u = a( (c, d) => {}
            , "checkAssertions"), v;
            s ? v = a(function(c, d) {
                return u(d, this.name),
                d >>> 0
            }, "toWireType") : v = a(function(c, d) {
                return u(d, this.name),
                d
            }, "toWireType"),
            S(r, {
                name: e,
                fromWireType: f,
                toWireType: v,
                argPackAdvance: U,
                readValueFromPointer: Se(e, n, t !== 0),
                destructorFunction: null
            })
        }
        , "__embind_register_integer"), ot = a( (r, e, n) => {
            var t = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array]
              , i = t[e];
            function f(o) {
                var s = g()[o >> 2]
                  , u = g()[o + 4 >> 2];
                return new i(z().buffer,u,s)
            }
            a(f, "decodeMemoryView"),
            n = A(n),
            S(r, {
                name: n,
                fromWireType: f,
                argPackAdvance: U,
                readValueFromPointer: f
            }, {
                ignoreDuplicateRegistrations: !0
            })
        }
        , "__embind_register_memory_view"), Oe = a(r => {
            for (var e = 0, n = 0; n < r.length; ++n) {
                var t = r.charCodeAt(n);
                t <= 127 ? e++ : t <= 2047 ? e += 2 : t >= 55296 && t <= 57343 ? (e += 4,
                ++n) : e += 3
            }
            return e
        }
        , "lengthBytesUTF8"), st = a( (r, e) => {
            e = A(e),
            S(r, {
                name: e,
                fromWireType(n) {
                    for (var t = g()[n >> 2], i = n + 4, f, o, s = i, o = 0; o <= t; ++o) {
                        var u = i + o;
                        if (o == t || E()[u] == 0) {
                            var v = u - s
                              , c = nr(s, v);
                            f === void 0 ? f = c : (f += "\0",
                            f += c),
                            s = u + 1
                        }
                    }
                    return O(n),
                    f
                },
                toWireType(n, t) {
                    t instanceof ArrayBuffer && (t = new Uint8Array(t));
                    var i, f = typeof t == "string";
                    f || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array || k("Cannot pass non-string to std::string"),
                    f ? i = Oe(t) : i = t.length;
                    var o = Cr(4 + i + 1)
                      , s = o + 4;
                    if (g()[o >> 2] = i,
                    f)
                        L(t, s, i + 1);
                    else if (f)
                        for (var u = 0; u < i; ++u) {
                            var v = t.charCodeAt(u);
                            v > 255 && (O(o),
                            k("String has UTF-16 code units that do not fit in 8 bits")),
                            E()[s + u] = v
                        }
                    else
                        for (var u = 0; u < i; ++u)
                            E()[s + u] = t[u];
                    return n !== null && n.push(O, o),
                    o
                },
                argPackAdvance: U,
                readValueFromPointer: ar,
                destructorFunction(n) {
                    O(n)
                }
            })
        }
        , "__embind_register_std_string"), xe = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, ft = a( (r, e) => {
            for (var n = r, t = n >> 1, i = t + e / 2; !(t >= i) && _r()[t]; )
                ++t;
            if (n = t << 1,
            n - r > 32 && xe)
                return xe.decode(E().slice(r, n));
            for (var f = "", o = 0; !(o >= e / 2); ++o) {
                var s = Q()[r + o * 2 >> 1];
                if (s == 0)
                    break;
                f += String.fromCharCode(s)
            }
            return f
        }
        , "UTF16ToString"), ut = a( (r, e, n) => {
            if (n ??= 2147483647,
            n < 2)
                return 0;
            n -= 2;
            for (var t = e, i = n < r.length * 2 ? n / 2 : r.length, f = 0; f < i; ++f) {
                var o = r.charCodeAt(f);
                Q()[e >> 1] = o,
                e += 2
            }
            return Q()[e >> 1] = 0,
            e - t
        }
        , "stringToUTF16"), lt = a(r => r.length * 2, "lengthBytesUTF16"), vt = a( (r, e) => {
            for (var n = 0, t = ""; !(n >= e / 4); ) {
                var i = x()[r + n * 4 >> 2];
                if (i == 0)
                    break;
                if (++n,
                i >= 65536) {
                    var f = i - 65536;
                    t += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023)
                } else
                    t += String.fromCharCode(i)
            }
            return t
        }
        , "UTF32ToString"), ct = a( (r, e, n) => {
            if (n ??= 2147483647,
            n < 4)
                return 0;
            for (var t = e, i = t + n - 4, f = 0; f < r.length; ++f) {
                var o = r.charCodeAt(f);
                if (o >= 55296 && o <= 57343) {
                    var s = r.charCodeAt(++f);
                    o = 65536 + ((o & 1023) << 10) | s & 1023
                }
                if (x()[e >> 2] = o,
                e += 4,
                e + 4 > i)
                    break
            }
            return x()[e >> 2] = 0,
            e - t
        }
        , "stringToUTF32"), dt = a(r => {
            for (var e = 0, n = 0; n < r.length; ++n) {
                var t = r.charCodeAt(n);
                t >= 55296 && t <= 57343 && ++n,
                e += 4
            }
            return e
        }
        , "lengthBytesUTF32"), _t = a( (r, e, n) => {
            n = A(n);
            var t, i, f, o;
            e === 2 ? (t = ft,
            i = ut,
            o = lt,
            f = a(s => _r()[s >> 1], "readCharAt")) : e === 4 && (t = vt,
            i = ct,
            o = dt,
            f = a(s => g()[s >> 2], "readCharAt")),
            S(r, {
                name: n,
                fromWireType: s => {
                    for (var u = g()[s >> 2], v, c = s + 4, d = 0; d <= u; ++d) {
                        var y = s + 4 + d * e;
                        if (d == u || f(y) == 0) {
                            var R = y - c
                              , h = t(c, R);
                            v === void 0 ? v = h : (v += "\0",
                            v += h),
                            c = y + e
                        }
                    }
                    return O(s),
                    v
                }
                ,
                toWireType: (s, u) => {
                    typeof u != "string" && k(`Cannot pass non-string to C++ string type ${n}`);
                    var v = o(u)
                      , c = Cr(4 + v + e);
                    return g()[c >> 2] = v / e,
                    i(u, c + 4, v + e),
                    s !== null && s.push(O, c),
                    c
                }
                ,
                argPackAdvance: U,
                readValueFromPointer: ar,
                destructorFunction(s) {
                    O(s)
                }
            })
        }
        , "__embind_register_std_wstring"), pt = a( (r, e, n, t, i, f) => {
            tr[r] = {
                name: A(e),
                rawConstructor: K(n, t),
                rawDestructor: K(i, f),
                fields: []
            }
        }
        , "__embind_register_value_object"), ht = a( (r, e, n, t, i, f, o, s, u, v) => {
            tr[r].fields.push({
                fieldName: A(e),
                getterReturnType: n,
                getter: K(t, i),
                getterContext: f,
                setterArgumentType: o,
                setter: K(s, u),
                setterContext: v
            })
        }
        , "__embind_register_value_object_field"), gt = a( (r, e) => {
            e = A(e),
            S(r, {
                isVoid: !0,
                name: e,
                argPackAdvance: 0,
                fromWireType: () => {}
                ,
                toWireType: (n, t) => {}
            })
        }
        , "__embind_register_void"), mt = a(r => {
            Mr(r, !G, 1, !Ur, 65536, !1),
            _.threadInitTLS()
        }
        , "__emscripten_init_main_thread_js"), yt = a( () => {
            if (!yr())
                try {
                    p ? Sr(N) : Tr(N)
                } catch (r) {
                    ce(r)
                }
        }
        , "maybeExit"), bt = a(r => {
            if (!J)
                try {
                    r(),
                    yt()
                } catch (e) {
                    ce(e)
                }
        }
        , "callUserCallback"), Wr = a(r => {
            if (typeof Atomics.waitAsync == "function") {
                var e = Atomics.waitAsync(x(), r >> 2, r);
                e.value.then(sr);
                var n = r + 128;
                Atomics.store(x(), n >> 2, 1)
            }
        }
        , "__emscripten_thread_mailbox_await"), sr = a( () => {
            var r = ur();
            r && (Wr(r),
            bt(sn))
        }
        , "checkMailbox"), wt = a( (r, e) => {
            if (r == e)
                setTimeout(sr);
            else if (p)
                postMessage({
                    targetThread: r,
                    cmd: "checkMailbox"
                });
            else {
                var n = _.pthreads[r];
                if (!n)
                    return;
                n.postMessage({
                    cmd: "checkMailbox"
                })
            }
        }
        , "__emscripten_notify_mailbox_postmessage"), fr = [], Tt = a( (r, e, n, t, i) => {
            t /= 2,
            fr.length = t;
            for (var f = i >> 3, o = 0; o < t; o++)
                I[f + 2 * o] ? fr[o] = I[f + 2 * o + 1] : fr[o] = rr()[f + 2 * o + 1];
            var s = e ? ne[e] : fa[r];
            _.currentProxiedOperationCallerThread = n;
            var u = s(...fr);
            return _.currentProxiedOperationCallerThread = 0,
            u
        }
        , "__emscripten_receive_on_main_thread_js"), At = a(r => {
            p ? postMessage({
                cmd: "cleanupThread",
                thread: r
            }) : ie(r)
        }
        , "__emscripten_thread_cleanup"), Et = a(r => {}
        , "__emscripten_thread_set_strongref"), Pr = [], kt = a( (r, e, n, t) => (r = Pr[r],
        e = w.toValue(e),
        r(null, e, n, t)), "__emval_call"), Wt = {}, je = a(r => {
            var e = Wt[r];
            return e === void 0 ? A(r) : e
        }
        , "getStringOrSymbol"), Ve = a( () => typeof globalThis == "object" ? globalThis : function() {
            return Function
        }()("return this")(), "emval_get_global"), Pt = a(r => r === 0 ? w.toHandle(Ve()) : (r = je(r),
        w.toHandle(Ve()[r])), "__emval_get_global"), Rt = a(r => {
            var e = Pr.length;
            return Pr.push(r),
            e
        }
        , "emval_addMethodCaller"), Be = a( (r, e) => {
            var n = V[r];
            return n === void 0 && k(`${e} has unknown type ${He(r)}`),
            n
        }
        , "requireRegisteredType"), Ft = a( (r, e) => {
            for (var n = new Array(r), t = 0; t < r; ++t)
                n[t] = Be(g()[e + t * 4 >> 2], "parameter " + t);
            return n
        }
        , "emval_lookupTypes"), Ct = a( (r, e, n) => {
            var t = []
              , i = r.toWireType(t, n);
            return t.length && (g()[e >> 2] = w.toHandle(t)),
            i
        }
        , "emval_returnValue"), Mt = a( (r, e, n) => {
            var t = Ft(r, e)
              , i = t.shift();
            r--;
            var f = `return function (obj, func, destructorsRef, args) {
`
              , o = 0
              , s = [];
            n === 0 && s.push("obj");
            for (var u = ["retType"], v = [i], c = 0; c < r; ++c)
                s.push("arg" + c),
                u.push("argType" + c),
                v.push(t[c]),
                f += `  var arg${c} = argType${c}.readValueFromPointer(args${o ? "+" + o : ""});
`,
                o += t[c].argPackAdvance;
            var d = n === 1 ? "new func" : "func.call";
            f += `  var rv = ${d}(${s.join(", ")});
`,
            i.isVoid || (u.push("emval_returnValue"),
            v.push(Ct),
            f += `  return emval_returnValue(retType, destructorsRef, rv);
`),
            f += `};
`,
            u.push(f);
            var y = Ie(Function, u)(...v)
              , R = `methodCaller<(${t.map(h => h.name).join(", ")}) => ${i.name}>`;
            return Rt(or(R, y))
        }
        , "__emval_get_method_caller"), St = a(r => {
            r > 9 && (H[r + 1] += 1)
        }
        , "__emval_incref"), $t = a( () => w.toHandle([]), "__emval_new_array"), It = a(r => {
            r = w.toValue(r);
            for (var e = new Array(r.length), n = 0; n < r.length; n++)
                e[n] = r[n];
            return w.toHandle(e)
        }
        , "__emval_new_array_from_memory_view"), Ut = a(r => w.toHandle(je(r)), "__emval_new_cstring"), Ht = a( () => w.toHandle({}), "__emval_new_object"), Ot = a(r => {
            var e = w.toValue(r);
            Ar(e),
            kr(r)
        }
        , "__emval_run_destructors"), xt = a( (r, e, n) => {
            r = w.toValue(r),
            e = w.toValue(e),
            n = w.toValue(n),
            r[e] = n
        }
        , "__emval_set_property"), jt = a( (r, e) => {
            r = Be(r, "_emval_take_value");
            var n = r.readValueFromPointer(e);
            return w.toHandle(n)
        }
        , "__emval_take_value"), Vt = a( (r, e, n, t) => {
            var i = new Date().getFullYear()
              , f = new Date(i,0,1)
              , o = new Date(i,6,1)
              , s = f.getTimezoneOffset()
              , u = o.getTimezoneOffset()
              , v = Math.max(s, u);
            g()[r >> 2] = v * 60,
            x()[e >> 2] = +(s != u);
            var c = a(R => {
                var h = R >= 0 ? "-" : "+"
                  , $ = Math.abs(R)
                  , Ir = String(Math.floor($ / 60)).padStart(2, "0")
                  , q = String($ % 60).padStart(2, "0");
                return `UTC${h}${Ir}${q}`
            }
            , "extractZone")
              , d = c(s)
              , y = c(u);
            u < s ? (L(d, n, 17),
            L(y, t, 17)) : (L(d, t, 17),
            L(y, n, 17))
        }
        , "__tzset_js"), Ne = a( () => performance.timeOrigin + performance.now(), "_emscripten_get_now"), Le = a( () => Date.now(), "_emscripten_date_now"), Bt = a(r => r >= 0 && r <= 3, "checkWasiClock");
        function Nt(r, e, n) {
            if (!Bt(r))
                return 28;
            var t;
            r === 0 ? t = Le() : t = Ne();
            var i = Math.round(t * 1e3 * 1e3);
            return I[n >> 3] = BigInt(i),
            0
        }
        a(Nt, "_clock_time_get");
        var Rr = []
          , Lt = a( (r, e) => {
            Rr.length = 0;
            for (var n; n = E()[r++]; ) {
                var t = n != 105;
                t &= n != 112,
                e += t && e % 8 ? 4 : 0,
                Rr.push(n == 112 ? g()[e >> 2] : n == 106 ? I[e >> 3] : n == 105 ? x()[e >> 2] : rr()[e >> 3]),
                e += t ? 8 : 4
            }
            return Rr
        }
        , "readEmAsmArgs")
          , Dt = a( (r, e, n) => {
            var t = Lt(e, n);
            return ne[r](...t)
        }
        , "runEmAsmFunction")
          , Gt = a( (r, e, n) => Dt(r, e, n), "_emscripten_asm_const_int")
          , zt = a( () => {}
        , "_emscripten_check_blocking_allowed")
          , Yt = a( () => {
            mr += 1
        }
        , "runtimeKeepalivePush")
          , Kt = a( () => {
            throw Yt(),
            "unwind"
        }
        , "_emscripten_exit_with_live_runtime")
          , De = a( () => 1073741824, "getHeapMax")
          , Xt = a( () => De(), "_emscripten_get_heap_max")
          , qt = a( () => navigator.hardwareConcurrency, "_emscripten_num_logical_cores")
          , Zt = a( (r, e) => Math.ceil(r / e) * e, "alignMemory")
          , Ge = a(r => {
            hr("OOM")
        }
        , "abortOnCannotGrowMemory")
          , Jt = a(r => {
            var e = b.buffer
              , n = (r - e.byteLength + 65535) / 65536 | 0;
            try {
                return b.grow(n),
                P(),
                1
            } catch {}
        }
        , "growMemory")
          , Qt = a(r => {
            var e = E().length;
            if (r >>>= 0,
            r <= e)
                return !1;
            var n = De();
            r > n && Ge();
            for (var t = 1; t <= 4; t *= 2) {
                var i = e * (1 + .2 / t);
                i = Math.min(i, r + 100663296);
                var f = Math.min(n, Zt(Math.max(r, i), 65536))
                  , o = Jt(f);
                if (o)
                    return !0
            }
            Ge()
        }
        , "_emscripten_resize_heap")
          , ra = a( () => {
            throw "unwind"
        }
        , "_emscripten_unwind_to_js_event_loop")
          , Fr = {}
          , ea = a( () => Or || "./this.program", "getExecutableName")
          , X = a( () => {
            if (!X.strings) {
                var r = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8"
                  , e = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: r,
                    _: ea()
                };
                for (var n in Fr)
                    Fr[n] === void 0 ? delete e[n] : e[n] = Fr[n];
                var t = [];
                for (var n in e)
                    t.push(`${n}=${e[n]}`);
                X.strings = t
            }
            return X.strings
        }
        , "getEnvStrings")
          , na = a( (r, e) => {
            for (var n = 0; n < r.length; ++n)
                z()[e++] = r.charCodeAt(n);
            z()[e] = 0
        }
        , "stringToAscii")
          , ze = a(function(r, e) {
            if (p)
                return T(8, 0, 1, r, e);
            var n = 0;
            return X().forEach( (t, i) => {
                var f = e + n;
                g()[r + i * 4 >> 2] = f,
                na(t, f),
                n += t.length + 1
            }
            ),
            0
        }, "_environ_get")
          , Ye = a(function(r, e) {
            if (p)
                return T(9, 0, 1, r, e);
            var n = X();
            g()[r >> 2] = n.length;
            var t = 0;
            return n.forEach(i => t += i.length + 1),
            g()[e >> 2] = t,
            0
        }, "_environ_sizes_get");
        function Ke(r) {
            return p ? T(10, 0, 1, r) : 52
        }
        a(Ke, "_fd_close");
        function Xe(r, e, n, t) {
            return p ? T(11, 0, 1, r, e, n, t) : 52
        }
        a(Xe, "_fd_read");
        function qe(r, e, n, t) {
            return p ? T(12, 0, 1, r, e, n, t) : (e = Rn(e),
            70)
        }
        a(qe, "_fd_seek");
        var ta = [null, [], []]
          , aa = a( (r, e) => {
            var n = ta[r];
            e === 0 || e === 10 ? ((r === 1 ? Vr : W)(we(n)),
            n.length = 0) : n.push(e)
        }
        , "printChar");
        function Ze(r, e, n, t) {
            if (p)
                return T(13, 0, 1, r, e, n, t);
            for (var i = 0, f = 0; f < n; f++) {
                var o = g()[e >> 2]
                  , s = g()[e + 4 >> 2];
                e += 8;
                for (var u = 0; u < s; u++)
                    aa(r, E()[o + u]);
                i += s
            }
            return g()[t >> 2] = i,
            0
        }
        a(Ze, "_fd_write");
        var Je = a(r => {
            var e = l["_" + r];
            return e
        }
        , "getCFunc")
          , ia = a( (r, e) => {
            z().set(r, e)
        }
        , "writeArrayToMemory")
          , oa = a(r => {
            var e = Oe(r) + 1
              , n = wr(e);
            return L(r, n, e),
            n
        }
        , "stringToUTF8OnStack")
          , Qe = a( (r, e, n, t, i) => {
            var f = {
                string: h => {
                    var $ = 0;
                    return h != null && h !== 0 && ($ = oa(h)),
                    $
                }
                ,
                array: h => {
                    var $ = wr(h.length);
                    return ia(h, $),
                    $
                }
            };
            function o(h) {
                return e === "string" ? nr(h) : e === "boolean" ? !!h : h
            }
            a(o, "convertReturnValue");
            var s = Je(r)
              , u = []
              , v = 0;
            if (t)
                for (var c = 0; c < t.length; c++) {
                    var d = f[n[c]];
                    d ? (v === 0 && (v = le()),
                    u[c] = d(t[c])) : u[c] = t[c]
                }
            var y = s(...u);
            function R(h) {
                return v !== 0 && br(v),
                o(h)
            }
            return a(R, "onDone"),
            y = R(y),
            y
        }
        , "ccall")
          , sa = a( (r, e, n, t) => {
            var i = !n || n.every(o => o === "number" || o === "boolean")
              , f = e !== "string";
            return f && i && !t ? Je(r) : (...o) => Qe(r, e, n, o)
        }
        , "cwrap");
        _.init(),
        Pe = l.InternalError = class extends Error {
            static{a(this, "InternalError")
            }constructor(e) {
                super(e),
                this.name = "InternalError"
            }
        }
        ,
        jn(),
        Me = l.BindingError = class extends Error {
            static{a(this, "BindingError")
            }constructor(e) {
                super(e),
                this.name = "BindingError"
            }
        }
        ,
        Dn(),
        Ue = l.UnboundTypeError = et(Error, "UnboundTypeError");
        var fa = [ve, de, me, Te, Ae, Ee, ke, We, ze, Ye, Ke, Xe, qe, Ze], rn;
        function ua() {
            rn = {
                J: ye,
                y: Te,
                H: Ae,
                P: Ee,
                q: ke,
                D: We,
                U: Hn,
                t: On,
                A: Bn,
                Z: Nn,
                X: zn,
                z: Kn,
                n: at,
                j: it,
                e: ot,
                Y: st,
                s: _t,
                T: pt,
                c: ht,
                _: gt,
                O: mt,
                E: wt,
                L: Tt,
                u: At,
                N: Wr,
                R: Et,
                g: kt,
                b: kr,
                i: Pt,
                h: Mt,
                d: St,
                ba: $t,
                $: It,
                p: Ut,
                aa: Ht,
                l: Ot,
                k: xt,
                f: jt,
                B: Vt,
                K: Nt,
                ca: Gt,
                v: zt,
                S: Le,
                Q: Kt,
                F: Xt,
                m: Ne,
                G: qt,
                C: Qt,
                I: ra,
                V: ze,
                W: Ye,
                r: Tr,
                o: Ke,
                w: Xe,
                M: qe,
                x: Ze,
                a: b
            }
        }
        a(ua, "assignWasmImports");
        var m = await kn()
          , ur = a( () => (ur = m.fa)(), "_pthread_self")
          , Cr = l._malloc = r => (Cr = l._malloc = m.ga)(r)
          , en = a(r => (en = m.ha)(r), "___getTypeName")
          , nn = a( () => (nn = m.ia)(), "__embind_initialize_bindings")
          , O = l._free = r => (O = l._free = m.ja)(r)
          , Mr = a( (r, e, n, t, i, f) => (Mr = m.la)(r, e, n, t, i, f), "__emscripten_thread_init")
          , tn = a( () => (tn = m.ma)(), "__emscripten_thread_crashed")
          , an = a( (r, e, n, t, i) => (an = m.na)(r, e, n, t, i), "__emscripten_run_on_main_thread_js")
          , on = a(r => (on = m.oa)(r), "__emscripten_thread_free_data")
          , Sr = a(r => (Sr = m.pa)(r), "__emscripten_thread_exit")
          , sn = a( () => (sn = m.qa)(), "__emscripten_check_mailbox")
          , fn = a( () => (fn = m.ra)(), "___trap")
          , un = a( (r, e) => (un = m.sa)(r, e), "_emscripten_stack_set_limits")
          , ln = a(r => (ln = m.ta)(r), "__emscripten_stack_restore")
          , vn = a(r => (vn = m.ua)(r), "__emscripten_stack_alloc")
          , cn = a( () => (cn = m.va)(), "_emscripten_stack_get_current");
        l.wasmMemory = b,
        l.ccall = Qe,
        l.cwrap = sa;
        function $r() {
            if (j > 0) {
                Y = $r;
                return
            }
            if (p) {
                vr(l),
                Jr();
                return
            }
            if (mn(),
            j > 0) {
                Y = $r;
                return
            }
            function r() {
                l.calledRun = !0,
                !J && (Jr(),
                vr(l),
                l.onRuntimeInitialized?.(),
                yn())
            }
            a(r, "doRun"),
            l.setStatus ? (l.setStatus("Running..."),
            setTimeout( () => {
                setTimeout( () => l.setStatus(""), 1),
                r()
            }
            , 1)) : r()
        }
        if (a($r, "run"),
        l.preInit)
            for (typeof l.preInit == "function" && (l.preInit = [l.preInit]); l.preInit.length > 0; )
                l.preInit.pop()();
        return $r(),
        lr = _n,
        lr
    }
}
)()
  , _a = globalThis.self?.name?.startsWith("em-pthread");
_a && da();
//# sourceMappingURL=rawspeed-DB0urDFq.js.map
