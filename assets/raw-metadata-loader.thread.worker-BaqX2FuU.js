var iy = Object.defineProperty;
var i = (e, t) => iy(e, "name", {
  value: t,
  configurable: !0
});
(function() {
      try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
            , t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
            e._sentryDebugIds[t] = "3edbc7e0-b73a-4575-a161-cd3c601cdfd7",
            e._sentryDebugIdIdentifier = "sentry-dbid-3edbc7e0-b73a-4575-a161-cd3c601cdfd7")
      } catch {}
    }
)();
var oy = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
oy.SENTRY_RELEASE = {
  id: "2.2.10+c54b50e"
};
var ay = ( () => {
      var e = import.meta.url;
      return async function(t={}) {
        var n, r = t, s, o, c = new Promise( (a, u) => {
              s = a,
                  o = u
            }
        ), l = typeof window == "object", f = typeof importScripts == "function", h = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
        if (h) {
          const {createRequire: a} = await Promise.resolve().then(function() {
            return Rk
          });
          var p = a(import.meta.url)
        }
        var y = Object.assign({}, r)
            , v = "./this.program"
            , b = i( (a, u) => {
              throw u
            }
            , "quit_")
            , S = "";
        function R(a) {
          return r.locateFile ? r.locateFile(a, S) : S + a
        }
        i(R, "locateFile");
        var k, O;
        if (h) {
          var L = p("fs")
              , U = p("path");
          S = p("url").fileURLToPath(new URL("./",import.meta.url)),
              O = i(a => {
                    a = tn(a) ? new URL(a) : U.normalize(a);
                    var u = L.readFileSync(a);
                    return u
                  }
                  , "readBinary"),
              k = i( (a, u=!0) => (a = tn(a) ? new URL(a) : U.normalize(a),
                  new Promise( (d, m) => {
                        L.readFile(a, u ? void 0 : "utf8", (_, E) => {
                              _ ? m(_) : d(u ? E.buffer : E)
                            }
                        )
                      }
                  )), "readAsync"),
          !r.thisProgram && process.argv.length > 1 && (v = process.argv[1].replace(/\\/g, "/")),
              process.argv.slice(2),
              b = i( (a, u) => {
                    throw process.exitCode = a,
                        u
                  }
                  , "quit_")
        } else
          (l || f) && (f ? S = self.location.href : typeof document < "u" && document.currentScript && (S = document.currentScript.src),
          e && (S = e),
              S.startsWith("blob:") ? S = "" : S = S.substr(0, S.replace(/[?#].*/, "").lastIndexOf("/") + 1),
          f && (O = i(a => {
                var u = new XMLHttpRequest;
                return u.open("GET", a, !1),
                    u.responseType = "arraybuffer",
                    u.send(null),
                    new Uint8Array(u.response)
              }
              , "readBinary")),
              k = i(a => tn(a) ? new Promise( (u, d) => {
                    var m = new XMLHttpRequest;
                    m.open("GET", a, !0),
                        m.responseType = "arraybuffer",
                        m.onload = () => {
                          if (m.status == 200 || m.status == 0 && m.response) {
                            u(m.response);
                            return
                          }
                          d(m.status)
                        }
                        ,
                        m.onerror = d,
                        m.send(null)
                  }
              ) : fetch(a, {
                credentials: "same-origin"
              }).then(u => u.ok ? u.arrayBuffer() : Promise.reject(new Error(u.status + " : " + u.url))), "readAsync"));
        var V = r.print || console.log.bind(console)
            , q = r.printErr || console.error.bind(console);
        Object.assign(r, y),
            y = null,
        r.arguments && r.arguments,
        r.thisProgram && (v = r.thisProgram);
        var x = r.wasmBinary, N, F = !1, H, C, z, X, M, Y, Fe, re;
        function xe() {
          var a = N.buffer;
          r.HEAP8 = H = new Int8Array(a),
              r.HEAP16 = z = new Int16Array(a),
              r.HEAPU8 = C = new Uint8Array(a),
              r.HEAPU16 = X = new Uint16Array(a),
              r.HEAP32 = M = new Int32Array(a),
              r.HEAPU32 = Y = new Uint32Array(a),
              r.HEAPF32 = Fe = new Float32Array(a),
              r.HEAPF64 = re = new Float64Array(a)
        }
        i(xe, "updateMemoryViews");
        var fe = []
            , qe = []
            , dt = []
            , Or = !1;
        function Xi() {
          if (r.preRun)
            for (typeof r.preRun == "function" && (r.preRun = [r.preRun]); r.preRun.length; )
              Pr(r.preRun.shift());
          Qi(fe)
        }
        i(Xi, "preRun");
        function Wn() {
          Or = !0,
          !r.noFSInit && !g.initialized && g.init(),
              g.ignorePermissions = !1,
              Qi(qe)
        }
        i(Wn, "initRuntime");
        function bn() {
          if (r.postRun)
            for (typeof r.postRun == "function" && (r.postRun = [r.postRun]); r.postRun.length; )
              Tr(r.postRun.shift());
          Qi(dt)
        }
        i(bn, "postRun");
        function Pr(a) {
          fe.unshift(a)
        }
        i(Pr, "addOnPreRun");
        function Nr(a) {
          qe.unshift(a)
        }
        i(Nr, "addOnInit");
        function Tr(a) {
          dt.unshift(a)
        }
        i(Tr, "addOnPostRun");
        var _t = 0
            , en = null;
        function xr(a) {
          return a
        }
        i(xr, "getUniqueRunDependency");
        function Vn(a) {
          _t++,
              r.monitorRunDependencies?.(_t)
        }
        i(Vn, "addRunDependency");
        function Gn(a) {
          if (_t--,
              r.monitorRunDependencies?.(_t),
          _t == 0 && en) {
            var u = en;
            en = null,
                u()
          }
        }
        i(Gn, "removeRunDependency");
        function Yn(a) {
          r.onAbort?.(a),
              a = "Aborted(" + a + ")",
              q(a),
              F = !0,
              a += ". Build with -sASSERTIONS for more info.",
          Or && Yc();
          var u = new WebAssembly.RuntimeError(a);
          throw o(u),
              u
        }
        i(Yn, "abort");
        var Ft = "data:application/octet-stream;base64,"
            , Rt = i(a => a.startsWith(Ft), "isDataURI")
            , tn = i(a => a.startsWith("file://"), "isFileURI");
        function Cr() {
          if (r.locateFile) {
            var a = "/exiv2wasm.wasm";
            return Rt(a) ? a : R(a)
          }
          return new URL("/exiv2wasm.wasm",import.meta.url).href
        }
        i(Cr, "findWasmBinary");
        var Dt;
        function Kn(a) {
          if (a == Dt && x)
            return new Uint8Array(x);
          if (O)
            return O(a);
          throw "both async and sync fetching of the wasm failed"
        }
        i(Kn, "getBinarySync");
        function ge(a) {
          return x ? Promise.resolve().then( () => Kn(a)) : k(a).then(u => new Uint8Array(u), () => Kn(a))
        }
        i(ge, "getBinaryPromise");
        function tt(a, u, d) {
          return ge(a).then(m => WebAssembly.instantiate(m, u)).then(d, m => {
                q(`failed to asynchronously prepare wasm: ${m}`),
                    Yn(m)
              }
          )
        }
        i(tt, "instantiateArrayBuffer");
        function ce(a, u, d, m) {
          return !a && typeof WebAssembly.instantiateStreaming == "function" && !Rt(u) && !tn(u) && !h && typeof fetch == "function" ? fetch(u, {
            credentials: "same-origin"
          }).then(_ => {
                var E = WebAssembly.instantiateStreaming(_, d);
                return E.then(m, function(w) {
                  return q(`wasm streaming compile failed: ${w}`),
                      q("falling back to ArrayBuffer instantiation"),
                      tt(u, d, m)
                })
              }
          ) : tt(u, d, m)
        }
        i(ce, "instantiateAsync");
        function Ae() {
          return {
            a: ny
          }
        }
        i(Ae, "getWasmImports");
        function _e() {
          var a = Ae();
          function u(m, _) {
            return Ce = m.exports,
                N = Ce.L,
                r.wasmMemory = N,
                xe(),
                Cc = Ce.P,
                Nr(Ce.M),
                Gn(),
                Ce
          }
          i(u, "receiveInstance"),
              Vn();
          function d(m) {
            u(m.instance)
          }
          if (i(d, "receiveInstantiationResult"),
              r.instantiateWasm)
            try {
              return r.instantiateWasm(a, u)
            } catch (m) {
              q(`Module.instantiateWasm callback failed with error: ${m}`),
                  o(m)
            }
          return Dt || (Dt = Cr()),
              ce(x, Dt, a, d).catch(o),
              {}
        }
        i(_e, "createWasm");
        var Q, De;
        function lp(a) {
          this.name = "ExitStatus",
              this.message = `Program terminated with exit(${a})`,
              this.status = a
        }
        i(lp, "ExitStatus");
        var Qi = i(a => {
              for (; a.length > 0; )
                a.shift()(r)
            }
            , "callRuntimeCallbacks"), fp = r.noExitRuntime || !0, Rc = typeof TextDecoder < "u" ? new TextDecoder : void 0, wn = i( (a, u, d) => {
              for (var m = u + d, _ = u; a[_] && !(_ >= m); )
                ++_;
              if (_ - u > 16 && a.buffer && Rc)
                return Rc.decode(a.subarray(u, _));
              for (var E = ""; u < _; ) {
                var w = a[u++];
                if (!(w & 128)) {
                  E += String.fromCharCode(w);
                  continue
                }
                var I = a[u++] & 63;
                if ((w & 224) == 192) {
                  E += String.fromCharCode((w & 31) << 6 | I);
                  continue
                }
                var A = a[u++] & 63;
                if ((w & 240) == 224 ? w = (w & 15) << 12 | I << 6 | A : w = (w & 7) << 18 | I << 12 | A << 6 | a[u++] & 63,
                w < 65536)
                  E += String.fromCharCode(w);
                else {
                  var P = w - 65536;
                  E += String.fromCharCode(55296 | P >> 10, 56320 | P & 1023)
                }
              }
              return E
            }
            , "UTF8ArrayToString"), Mr = i( (a, u) => a ? wn(C, a, u) : "", "UTF8ToString"), dp = i( (a, u, d, m) => {
              Yn(`Assertion failed: ${Mr(a)}, at: ` + [u ? Mr(u) : "unknown filename", d, m ? Mr(m) : "unknown function"])
            }
            , "___assert_fail"), hp = i( () => {
              Yn("")
            }
            , "__abort_js"), pp = i( (a, u, d, m, _) => {}
            , "__embind_register_bigint"), mp = i( () => {
              for (var a = new Array(256), u = 0; u < 256; ++u)
                a[u] = String.fromCharCode(u);
              Ac = a
            }
            , "embind_init_charCodes"), Ac, vt = i(a => {
              for (var u = "", d = a; C[d]; )
                u += Ac[C[d++]];
              return u
            }
            , "readLatin1String"), Xn = {}, In = {}, Es = {}, kc, ot = i(a => {
              throw new kc(a)
            }
            , "throwBindingError"), Oc, Pc = i(a => {
              throw new Oc(a)
            }
            , "throwInternalError"), yp = i( (a, u, d) => {
              a.forEach(I => Es[I] = u);
              function m(I) {
                var A = d(I);
                A.length !== a.length && Pc("Mismatched type converter count");
                for (var P = 0; P < a.length; ++P)
                  Lt(a[P], A[P])
              }
              i(m, "onComplete");
              var _ = new Array(u.length)
                  , E = []
                  , w = 0;
              u.forEach( (I, A) => {
                    In.hasOwnProperty(I) ? _[A] = In[I] : (E.push(I),
                    Xn.hasOwnProperty(I) || (Xn[I] = []),
                        Xn[I].push( () => {
                              _[A] = In[I],
                                  ++w,
                              w === E.length && m(_)
                            }
                        ))
                  }
              ),
              E.length === 0 && m(_)
            }
            , "whenDependentTypesAreResolved");
        function gp(a, u, d={}) {
          var m = u.name;
          if (a || ot(`type "${m}" must have a positive integer typeid pointer`),
              In.hasOwnProperty(a)) {
            if (d.ignoreDuplicateRegistrations)
              return;
            ot(`Cannot register type '${m}' twice`)
          }
          if (In[a] = u,
              delete Es[a],
              Xn.hasOwnProperty(a)) {
            var _ = Xn[a];
            delete Xn[a],
                _.forEach(E => E())
          }
        }
        i(gp, "sharedRegisterType");
        function Lt(a, u, d={}) {
          return gp(a, u, d)
        }
        i(Lt, "registerType");
        var Rn = 8
            , _p = i( (a, u, d, m) => {
              u = vt(u),
                  Lt(a, {
                    name: u,
                    fromWireType: function(_) {
                      return !!_
                    },
                    toWireType: function(_, E) {
                      return E ? d : m
                    },
                    argPackAdvance: Rn,
                    readValueFromPointer: function(_) {
                      return this.fromWireType(C[_])
                    },
                    destructorFunction: null
                  })
            }
            , "__embind_register_bool")
            , Ji = []
            , Ut = []
            , Zi = i(a => {
              a > 9 && --Ut[a + 1] === 0 && (Ut[a] = void 0,
                  Ji.push(a))
            }
            , "__emval_decref")
            , vp = i( () => Ut.length / 2 - 5 - Ji.length, "count_emval_handles")
            , Sp = i( () => {
              Ut.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1),
                  r.count_emval_handles = vp
            }
            , "init_emval")
            , ht = {
          toValue: a => (a || ot("Cannot use deleted val. handle = " + a),
              Ut[a]),
          toHandle: a => {
            switch (a) {
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
                const u = Ji.pop() || Ut.length;
                return Ut[u] = a,
                    Ut[u + 1] = 1,
                    u
              }
            }
          }
        };
        function eo(a) {
          return this.fromWireType(Y[a >> 2])
        }
        i(eo, "readPointer");
        var Ep = {
          name: "emscripten::val",
          fromWireType: a => {
            var u = ht.toValue(a);
            return Zi(a),
                u
          }
          ,
          toWireType: (a, u) => ht.toHandle(u),
          argPackAdvance: Rn,
          readValueFromPointer: eo,
          destructorFunction: null
        }
            , bp = i(a => Lt(a, Ep), "__embind_register_emval")
            , wp = i( (a, u) => {
              switch (u) {
                case 4:
                  return function(d) {
                    return this.fromWireType(Fe[d >> 2])
                  }
                      ;
                case 8:
                  return function(d) {
                    return this.fromWireType(re[d >> 3])
                  }
                      ;
                default:
                  throw new TypeError(`invalid float width (${u}): ${a}`)
              }
            }
            , "floatReadValueFromPointer")
            , Ip = i( (a, u, d) => {
              u = vt(u),
                  Lt(a, {
                    name: u,
                    fromWireType: m => m,
                    toWireType: (m, _) => _,
                    argPackAdvance: Rn,
                    readValueFromPointer: wp(u, d),
                    destructorFunction: null
                  })
            }
            , "__embind_register_float")
            , bs = i( (a, u) => Object.defineProperty(u, "name", {
          value: a
        }), "createNamedFunction")
            , Nc = i(a => {
              for (; a.length; ) {
                var u = a.pop()
                    , d = a.pop();
                d(u)
              }
            }
            , "runDestructors");
        function Tc(a) {
          for (var u = 1; u < a.length; ++u)
            if (a[u] !== null && a[u].destructorFunction === void 0)
              return !0;
          return !1
        }
        i(Tc, "usesDestructorStack");
        function xc(a, u) {
          if (!(a instanceof Function))
            throw new TypeError(`new_ called with constructor type ${typeof a} which is not a function`);
          var d = bs(a.name || "unknownFunctionName", function() {});
          d.prototype = a.prototype;
          var m = new d
              , _ = a.apply(m, u);
          return _ instanceof Object ? _ : m
        }
        i(xc, "newFunc");
        function Rp(a, u, d, m) {
          var _ = Tc(a)
              , E = a.length - 2
              , w = []
              , I = ["fn"];
          u && I.push("thisWired");
          for (var A = 0; A < E; ++A)
            w.push(`arg${A}`),
                I.push(`arg${A}Wired`);
          w = w.join(","),
              I = I.join(",");
          var P = `
        return function (${w}) {
        if (arguments.length !== ${E}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${E}');
        }`;
          _ && (P += `var destructors = [];
`);
          var $ = _ ? "destructors" : "null"
              , j = ["humanName", "throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
          u && (P += `var thisWired = classParam['toWireType'](${$}, this);
`);
          for (var A = 0; A < E; ++A)
            P += `var arg${A}Wired = argType${A}['toWireType'](${$}, arg${A});
`,
                j.push(`argType${A}`);
          if (P += (d || m ? "var rv = " : "") + `invoker(${I});
`,
              _)
            P += `runDestructors(destructors);
`;
          else
            for (var A = u ? 1 : 2; A < a.length; ++A) {
              var W = A === 1 ? "thisWired" : "arg" + (A - 2) + "Wired";
              a[A].destructorFunction !== null && (P += `${W}_dtor(${W});
`,
                  j.push(`${W}_dtor`))
            }
          return d && (P += `var ret = retType['fromWireType'](rv);
return ret;
`),
              P += `}
`,
              [j, P]
        }
        i(Rp, "createJsInvoker");
        function Ap(a, u, d, m, _, E) {
          var w = u.length;
          w < 2 && ot("argTypes array size mismatch! Must at least get return value and 'this' types!");
          for (var I = u[1] !== null && d !== null, A = Tc(u), P = u[0].name !== "void", $ = [a, ot, m, _, Nc, u[0], u[1]], j = 0; j < w - 2; ++j)
            $.push(u[j + 2]);
          if (!A)
            for (var j = I ? 1 : 2; j < u.length; ++j)
              u[j].destructorFunction !== null && $.push(u[j].destructorFunction);
          let[W,G] = Rp(u, I, P, E);
          W.push(G);
          var K = xc(Function, W)(...$);
          return bs(a, K)
        }
        i(Ap, "craftInvokerFunction");
        var kp = i( (a, u, d) => {
              if (a[u].overloadTable === void 0) {
                var m = a[u];
                a[u] = function(..._) {
                  return a[u].overloadTable.hasOwnProperty(_.length) || ot(`Function '${d}' called with an invalid number of arguments (${_.length}) - expects one of (${a[u].overloadTable})!`),
                      a[u].overloadTable[_.length].apply(this, _)
                }
                    ,
                    a[u].overloadTable = [],
                    a[u].overloadTable[m.argCount] = m
              }
            }
            , "ensureOverloadTable"), Op = i( (a, u, d) => {
              r.hasOwnProperty(a) ? ((d === void 0 || r[a].overloadTable !== void 0 && r[a].overloadTable[d] !== void 0) && ot(`Cannot register public name '${a}' twice`),
                  kp(r, a, a),
              r.hasOwnProperty(d) && ot(`Cannot register multiple overloads of a function with the same number of arguments (${d})!`),
                  r[a].overloadTable[d] = u) : (r[a] = u,
              d !== void 0 && (r[a].numArguments = d))
            }
            , "exposePublicSymbol"), Pp = i( (a, u) => {
              for (var d = [], m = 0; m < a; m++)
                d.push(Y[u + m * 4 >> 2]);
              return d
            }
            , "heap32VectorToArray"), Np = i( (a, u, d) => {
              r.hasOwnProperty(a) || Pc("Replacing nonexistent public symbol"),
                  r[a].overloadTable !== void 0 && d !== void 0 ? r[a].overloadTable[d] = u : (r[a] = u,
                      r[a].argCount = d)
            }
            , "replacePublicSymbol"), Tp = i( (a, u, d) => {
              a = a.replace(/p/g, "i");
              var m = r["dynCall_" + a];
              return m(u, ...d)
            }
            , "dynCallLegacy"), ws = [], Cc, Mc = i(a => {
              var u = ws[a];
              return u || (a >= ws.length && (ws.length = a + 1),
                  ws[a] = u = Cc.get(a)),
                  u
            }
            , "getWasmTableEntry"), xp = i( (a, u, d=[]) => {
              if (a.includes("j"))
                return Tp(a, u, d);
              var m = Mc(u)(...d);
              return m
            }
            , "dynCall"), Cp = i( (a, u) => (...d) => xp(a, u, d), "getDynCaller"), Mp = i( (a, u) => {
              a = vt(a);
              function d() {
                return a.includes("j") ? Cp(a, u) : Mc(u)
              }
              i(d, "makeDynCaller");
              var m = d();
              return typeof m != "function" && ot(`unknown function pointer with signature ${a}: ${u}`),
                  m
            }
            , "embind__requireFunction"), Fp = i( (a, u) => {
              var d = bs(u, function(m) {
                this.name = u,
                    this.message = m;
                var _ = new Error(m).stack;
                _ !== void 0 && (this.stack = this.toString() + `
` + _.replace(/^Error(:[^\n]*)?\n/, ""))
              });
              return d.prototype = Object.create(a.prototype),
                  d.prototype.constructor = d,
                  d.prototype.toString = function() {
                    return this.message === void 0 ? this.name : `${this.name}: ${this.message}`
                  }
                  ,
                  d
            }
            , "extendError"), Fc, Dc = i(a => {
              var u = Vc(a)
                  , d = vt(u);
              return $t(u),
                  d
            }
            , "getTypeName"), Dp = i( (a, u) => {
              var d = []
                  , m = {};
              function _(E) {
                if (!m[E] && !In[E]) {
                  if (Es[E]) {
                    Es[E].forEach(_);
                    return
                  }
                  d.push(E),
                      m[E] = !0
                }
              }
              throw i(_, "visit"),
                  u.forEach(_),
                  new Fc(`${a}: ` + d.map(Dc).join([", "]))
            }
            , "throwUnboundTypeError"), Lp = i(a => {
              a = a.trim();
              const u = a.indexOf("(");
              return u !== -1 ? a.substr(0, u) : a
            }
            , "getFunctionName"), Up = i( (a, u, d, m, _, E, w, I) => {
              var A = Pp(u, d);
              a = vt(a),
                  a = Lp(a),
                  _ = Mp(m, _),
                  Op(a, function() {
                    Dp(`Cannot call ${a} due to unbound types`, A)
                  }, u - 1),
                  yp([], A, P => {
                        var $ = [P[0], null].concat(P.slice(1));
                        return Np(a, Ap(a, $, null, _, E, w), u - 1),
                            []
                      }
                  )
            }
            , "__embind_register_function"), Bp = i( (a, u, d) => {
              switch (u) {
                case 1:
                  return d ? m => H[m] : m => C[m];
                case 2:
                  return d ? m => z[m >> 1] : m => X[m >> 1];
                case 4:
                  return d ? m => M[m >> 2] : m => Y[m >> 2];
                default:
                  throw new TypeError(`invalid integer width (${u}): ${a}`)
              }
            }
            , "integerReadValueFromPointer"), $p = i( (a, u, d, m, _) => {
              u = vt(u);
              var E = i($ => $, "fromWireType");
              if (m === 0) {
                var w = 32 - 8 * d;
                E = i($ => $ << w >>> w, "fromWireType")
              }
              var I = u.includes("unsigned"), A = i( ($, j) => {}
                  , "checkAssertions"), P;
              I ? P = i(function($, j) {
                return A(j, this.name),
                j >>> 0
              }, "toWireType") : P = i(function($, j) {
                return A(j, this.name),
                    j
              }, "toWireType"),
                  Lt(a, {
                    name: u,
                    fromWireType: E,
                    toWireType: P,
                    argPackAdvance: Rn,
                    readValueFromPointer: Bp(u, d, m !== 0),
                    destructorFunction: null
                  })
            }
            , "__embind_register_integer"), Hp = i( (a, u, d) => {
              var m = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array]
                  , _ = m[u];
              function E(w) {
                var I = Y[w >> 2]
                    , A = Y[w + 4 >> 2];
                return new _(H.buffer,A,I)
              }
              i(E, "decodeMemoryView"),
                  d = vt(d),
                  Lt(a, {
                    name: d,
                    fromWireType: E,
                    argPackAdvance: Rn,
                    readValueFromPointer: E
                  }, {
                    ignoreDuplicateRegistrations: !0
                  })
            }
            , "__embind_register_memory_view"), to = i( (a, u, d, m) => {
              if (!(m > 0))
                return 0;
              for (var _ = d, E = d + m - 1, w = 0; w < a.length; ++w) {
                var I = a.charCodeAt(w);
                if (I >= 55296 && I <= 57343) {
                  var A = a.charCodeAt(++w);
                  I = 65536 + ((I & 1023) << 10) | A & 1023
                }
                if (I <= 127) {
                  if (d >= E)
                    break;
                  u[d++] = I
                } else if (I <= 2047) {
                  if (d + 1 >= E)
                    break;
                  u[d++] = 192 | I >> 6,
                      u[d++] = 128 | I & 63
                } else if (I <= 65535) {
                  if (d + 2 >= E)
                    break;
                  u[d++] = 224 | I >> 12,
                      u[d++] = 128 | I >> 6 & 63,
                      u[d++] = 128 | I & 63
                } else {
                  if (d + 3 >= E)
                    break;
                  u[d++] = 240 | I >> 18,
                      u[d++] = 128 | I >> 12 & 63,
                      u[d++] = 128 | I >> 6 & 63,
                      u[d++] = 128 | I & 63
                }
              }
              return u[d] = 0,
              d - _
            }
            , "stringToUTF8Array"), Fr = i( (a, u, d) => to(a, C, u, d), "stringToUTF8"), no = i(a => {
              for (var u = 0, d = 0; d < a.length; ++d) {
                var m = a.charCodeAt(d);
                m <= 127 ? u++ : m <= 2047 ? u += 2 : m >= 55296 && m <= 57343 ? (u += 4,
                    ++d) : u += 3
              }
              return u
            }
            , "lengthBytesUTF8"), jp = i( (a, u) => {
              u = vt(u);
              var d = u === "std::string";
              Lt(a, {
                name: u,
                fromWireType(m) {
                  var _ = Y[m >> 2], E = m + 4, w;
                  if (d)
                    for (var I = E, A = 0; A <= _; ++A) {
                      var P = E + A;
                      if (A == _ || C[P] == 0) {
                        var $ = P - I
                            , j = Mr(I, $);
                        w === void 0 ? w = j : (w += "\0",
                            w += j),
                            I = P + 1
                      }
                    }
                  else {
                    for (var W = new Array(_), A = 0; A < _; ++A)
                      W[A] = String.fromCharCode(C[E + A]);
                    w = W.join("")
                  }
                  return $t(m),
                      w
                },
                toWireType(m, _) {
                  _ instanceof ArrayBuffer && (_ = new Uint8Array(_));
                  var E, w = typeof _ == "string";
                  w || _ instanceof Uint8Array || _ instanceof Uint8ClampedArray || _ instanceof Int8Array || ot("Cannot pass non-string to std::string"),
                      d && w ? E = no(_) : E = _.length;
                  var I = uo(4 + E + 1)
                      , A = I + 4;
                  if (Y[I >> 2] = E,
                  d && w)
                    Fr(_, A, E + 1);
                  else if (w)
                    for (var P = 0; P < E; ++P) {
                      var $ = _.charCodeAt(P);
                      $ > 255 && ($t(A),
                          ot("String has UTF-16 code units that do not fit in 8 bits")),
                          C[A + P] = $
                    }
                  else
                    for (var P = 0; P < E; ++P)
                      C[A + P] = _[P];
                  return m !== null && m.push($t, I),
                      I
                },
                argPackAdvance: Rn,
                readValueFromPointer: eo,
                destructorFunction(m) {
                  $t(m)
                }
              })
            }
            , "__embind_register_std_string"), Lc = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, qp = i( (a, u) => {
              for (var d = a, m = d >> 1, _ = m + u / 2; !(m >= _) && X[m]; )
                ++m;
              if (d = m << 1,
              d - a > 32 && Lc)
                return Lc.decode(C.subarray(a, d));
              for (var E = "", w = 0; !(w >= u / 2); ++w) {
                var I = z[a + w * 2 >> 1];
                if (I == 0)
                  break;
                E += String.fromCharCode(I)
              }
              return E
            }
            , "UTF16ToString"), zp = i( (a, u, d) => {
              if (d ??= 2147483647,
              d < 2)
                return 0;
              d -= 2;
              for (var m = u, _ = d < a.length * 2 ? d / 2 : a.length, E = 0; E < _; ++E) {
                var w = a.charCodeAt(E);
                z[u >> 1] = w,
                    u += 2
              }
              return z[u >> 1] = 0,
              u - m
            }
            , "stringToUTF16"), Wp = i(a => a.length * 2, "lengthBytesUTF16"), Vp = i( (a, u) => {
              for (var d = 0, m = ""; !(d >= u / 4); ) {
                var _ = M[a + d * 4 >> 2];
                if (_ == 0)
                  break;
                if (++d,
                _ >= 65536) {
                  var E = _ - 65536;
                  m += String.fromCharCode(55296 | E >> 10, 56320 | E & 1023)
                } else
                  m += String.fromCharCode(_)
              }
              return m
            }
            , "UTF32ToString"), Gp = i( (a, u, d) => {
              if (d ??= 2147483647,
              d < 4)
                return 0;
              for (var m = u, _ = m + d - 4, E = 0; E < a.length; ++E) {
                var w = a.charCodeAt(E);
                if (w >= 55296 && w <= 57343) {
                  var I = a.charCodeAt(++E);
                  w = 65536 + ((w & 1023) << 10) | I & 1023
                }
                if (M[u >> 2] = w,
                    u += 4,
                u + 4 > _)
                  break
              }
              return M[u >> 2] = 0,
              u - m
            }
            , "stringToUTF32"), Yp = i(a => {
              for (var u = 0, d = 0; d < a.length; ++d) {
                var m = a.charCodeAt(d);
                m >= 55296 && m <= 57343 && ++d,
                    u += 4
              }
              return u
            }
            , "lengthBytesUTF32"), Kp = i( (a, u, d) => {
              d = vt(d);
              var m, _, E, w;
              u === 2 ? (m = qp,
                  _ = zp,
                  w = Wp,
                  E = i(I => X[I >> 1], "readCharAt")) : u === 4 && (m = Vp,
                  _ = Gp,
                  w = Yp,
                  E = i(I => Y[I >> 2], "readCharAt")),
                  Lt(a, {
                    name: d,
                    fromWireType: I => {
                      for (var A = Y[I >> 2], P, $ = I + 4, j = 0; j <= A; ++j) {
                        var W = I + 4 + j * u;
                        if (j == A || E(W) == 0) {
                          var G = W - $
                              , K = m($, G);
                          P === void 0 ? P = K : (P += "\0",
                              P += K),
                              $ = W + u
                        }
                      }
                      return $t(I),
                          P
                    }
                    ,
                    toWireType: (I, A) => {
                      typeof A != "string" && ot(`Cannot pass non-string to C++ string type ${d}`);
                      var P = w(A)
                          , $ = uo(4 + P + u);
                      return Y[$ >> 2] = P / u,
                          _(A, $ + 4, P + u),
                      I !== null && I.push($t, $),
                          $
                    }
                    ,
                    argPackAdvance: Rn,
                    readValueFromPointer: eo,
                    destructorFunction(I) {
                      $t(I)
                    }
                  })
            }
            , "__embind_register_std_wstring"), Xp = i( (a, u) => {
              u = vt(u),
                  Lt(a, {
                    isVoid: !0,
                    name: u,
                    argPackAdvance: 0,
                    fromWireType: () => {}
                    ,
                    toWireType: (d, m) => {}
                  })
            }
            , "__embind_register_void"), Qp = i( (a, u, d) => C.copyWithin(a, u, u + d), "__emscripten_memcpy_js"), Jp = {}, Uc = i(a => {
              var u = Jp[a];
              return u === void 0 ? vt(a) : u
            }
            , "getStringOrSymbol"), ro = [], Zp = i( (a, u, d, m, _) => (a = ro[a],
            u = ht.toValue(u),
            d = Uc(d),
            a(u, u[d], m, _)), "__emval_call_method"), em = i(a => {
              var u = ro.length;
              return ro.push(a),
                  u
            }
            , "emval_addMethodCaller"), Bc = i( (a, u) => {
              var d = In[a];
              return d === void 0 && ot(`${u} has unknown type ${Dc(a)}`),
                  d
            }
            , "requireRegisteredType"), tm = i( (a, u) => {
              for (var d = new Array(a), m = 0; m < a; ++m)
                d[m] = Bc(Y[u + m * 4 >> 2], "parameter " + m);
              return d
            }
            , "emval_lookupTypes"), nm = i( (a, u, d) => {
              var m = []
                  , _ = a.toWireType(m, d);
              return m.length && (Y[u >> 2] = ht.toHandle(m)),
                  _
            }
            , "emval_returnValue"), rm = i( (a, u, d) => {
              var m = tm(a, u)
                  , _ = m.shift();
              a--;
              var E = `return function (obj, func, destructorsRef, args) {
`
                  , w = 0
                  , I = [];
              d === 0 && I.push("obj");
              for (var A = ["retType"], P = [_], $ = 0; $ < a; ++$)
                I.push("arg" + $),
                    A.push("argType" + $),
                    P.push(m[$]),
                    E += `  var arg${$} = argType${$}.readValueFromPointer(args${w ? "+" + w : ""});
`,
                    w += m[$].argPackAdvance;
              var j = d === 1 ? "new func" : "func.call";
              E += `  var rv = ${j}(${I.join(", ")});
`,
              _.isVoid || (A.push("emval_returnValue"),
                  P.push(nm),
                  E += `  return emval_returnValue(retType, destructorsRef, rv);
`),
                  E += `};
`,
                  A.push(E);
              var W = xc(Function, A)(...P)
                  , G = `methodCaller<(${m.map(K => K.name).join(", ")}) => ${_.name}>`;
              return em(bs(G, W))
            }
            , "__emval_get_method_caller"), sm = i(a => {
              a > 9 && (Ut[a + 1] += 1)
            }
            , "__emval_incref"), im = i( () => ht.toHandle([]), "__emval_new_array"), om = i(a => ht.toHandle(Uc(a)), "__emval_new_cstring"), am = i( () => ht.toHandle({}), "__emval_new_object"), cm = i(a => {
              var u = ht.toValue(a);
              Nc(u),
                  Zi(a)
            }
            , "__emval_run_destructors"), um = i( (a, u, d) => {
              a = ht.toValue(a),
                  u = ht.toValue(u),
                  d = ht.toValue(d),
                  a[u] = d
            }
            , "__emval_set_property"), lm = i( (a, u) => {
              a = Bc(a, "_emval_take_value");
              var d = a.readValueFromPointer(u);
              return ht.toHandle(d)
            }
            , "__emval_take_value"), so = i( (a, u) => u + 2097152 >>> 0 < 4194305 - !!a ? (a >>> 0) + u * 4294967296 : NaN, "convertI32PairToI53Checked");
        function fm(a, u, d) {
          var m = so(a, u)
              , _ = new Date(m * 1e3);
          M[d >> 2] = _.getUTCSeconds(),
              M[d + 4 >> 2] = _.getUTCMinutes(),
              M[d + 8 >> 2] = _.getUTCHours(),
              M[d + 12 >> 2] = _.getUTCDate(),
              M[d + 16 >> 2] = _.getUTCMonth(),
              M[d + 20 >> 2] = _.getUTCFullYear() - 1900,
              M[d + 24 >> 2] = _.getUTCDay();
          var E = Date.UTC(_.getUTCFullYear(), 0, 1, 0, 0, 0, 0)
              , w = (_.getTime() - E) / (1e3 * 60 * 60 * 24) | 0;
          M[d + 28 >> 2] = w
        }
        i(fm, "__gmtime_js");
        var dm = i(a => a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0), "isLeapYear")
            , hm = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
            , pm = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
            , $c = i(a => {
              var u = dm(a.getFullYear())
                  , d = u ? hm : pm
                  , m = d[a.getMonth()] + a.getDate() - 1;
              return m
            }
            , "ydayFromDate");
        function mm(a, u, d) {
          var m = so(a, u)
              , _ = new Date(m * 1e3);
          M[d >> 2] = _.getSeconds(),
              M[d + 4 >> 2] = _.getMinutes(),
              M[d + 8 >> 2] = _.getHours(),
              M[d + 12 >> 2] = _.getDate(),
              M[d + 16 >> 2] = _.getMonth(),
              M[d + 20 >> 2] = _.getFullYear() - 1900,
              M[d + 24 >> 2] = _.getDay();
          var E = $c(_) | 0;
          M[d + 28 >> 2] = E,
              M[d + 36 >> 2] = -(_.getTimezoneOffset() * 60);
          var w = new Date(_.getFullYear(),0,1)
              , I = new Date(_.getFullYear(),6,1).getTimezoneOffset()
              , A = w.getTimezoneOffset()
              , P = (I != A && _.getTimezoneOffset() == Math.min(A, I)) | 0;
          M[d + 32 >> 2] = P
        }
        i(mm, "__localtime_js");
        var ym = i(a => Kc(a), "setTempRet0")
            , gm = i(function(a) {
          var u = ( () => {
                var d = new Date(M[a + 20 >> 2] + 1900,M[a + 16 >> 2],M[a + 12 >> 2],M[a + 8 >> 2],M[a + 4 >> 2],M[a >> 2],0)
                    , m = M[a + 32 >> 2]
                    , _ = d.getTimezoneOffset()
                    , E = new Date(d.getFullYear(),0,1)
                    , w = new Date(d.getFullYear(),6,1).getTimezoneOffset()
                    , I = E.getTimezoneOffset()
                    , A = Math.min(I, w);
                if (m < 0)
                  M[a + 32 >> 2] = +(w != I && A == _);
                else if (m > 0 != (A == _)) {
                  var P = Math.max(I, w)
                      , $ = m > 0 ? A : P;
                  d.setTime(d.getTime() + ($ - _) * 6e4)
                }
                M[a + 24 >> 2] = d.getDay();
                var j = $c(d) | 0;
                M[a + 28 >> 2] = j,
                    M[a >> 2] = d.getSeconds(),
                    M[a + 4 >> 2] = d.getMinutes(),
                    M[a + 8 >> 2] = d.getHours(),
                    M[a + 12 >> 2] = d.getDate(),
                    M[a + 16 >> 2] = d.getMonth(),
                    M[a + 20 >> 2] = d.getYear();
                var W = d.getTime();
                return isNaN(W) ? -1 : W / 1e3
              }
          )();
          return ym((Q = u,
              +Math.abs(Q) >= 1 ? Q > 0 ? +Math.floor(Q / 4294967296) >>> 0 : ~~+Math.ceil((Q - +(~~Q >>> 0)) / 4294967296) >>> 0 : 0)),
          u >>> 0
        }, "__mktime_js")
            , _m = i( (a, u, d, m) => {
              var _ = new Date().getFullYear()
                  , E = new Date(_,0,1)
                  , w = new Date(_,6,1)
                  , I = E.getTimezoneOffset()
                  , A = w.getTimezoneOffset()
                  , P = Math.max(I, A);
              Y[a >> 2] = P * 60,
                  M[u >> 2] = +(I != A);
              var $ = i(G => {
                    var K = G >= 0 ? "-" : "+"
                        , de = Math.abs(G)
                        , ke = String(Math.floor(de / 60)).padStart(2, "0")
                        , be = String(de % 60).padStart(2, "0");
                    return `UTC${K}${ke}${be}`
                  }
                  , "extractZone")
                  , j = $(I)
                  , W = $(A);
              A < I ? (Fr(j, d, 17),
                  Fr(W, m, 17)) : (Fr(j, m, 17),
                  Fr(W, d, 17))
            }
            , "__tzset_js")
            , vm = i( () => Date.now(), "_emscripten_date_now")
            , Sm = i(a => a < 0 || a === 0 && 1 / a === -1 / 0, "reallyNegative")
            , Em = i( (a, u) => (a >>> 0) + u * 4294967296, "convertI32PairToI53")
            , bm = i( (a, u) => (a >>> 0) + (u >>> 0) * 4294967296, "convertU32PairToI53")
            , Hc = i( (a, u) => {
              if (a <= 0)
                return a;
              var d = u <= 32 ? Math.abs(1 << u - 1) : Math.pow(2, u - 1);
              return a >= d && (u <= 32 || a > d) && (a = -2 * d + a),
                  a
            }
            , "reSign")
            , jc = i( (a, u) => a >= 0 ? a : u <= 32 ? 2 * Math.abs(1 << u - 1) + a : Math.pow(2, u) + a, "unSign")
            , wm = i(a => {
              for (var u = a; C[u]; )
                ++u;
              return u - a
            }
            , "strLen");
        function io(a, u, d) {
          var m = d > 0 ? d : no(a) + 1
              , _ = new Array(m)
              , E = to(a, _, 0, _.length);
          return u && (_.length = E),
              _
        }
        i(io, "intArrayFromString");
        var Im = i( (a, u) => {
              var d = a
                  , m = u;
              function _(kt, Ht) {
                return (Ht === "double" || Ht === "i64") && kt & 7 && (kt += 4),
                    kt
              }
              i(_, "prepVararg");
              function E(kt) {
                var Ht;
                return m = _(m, kt),
                    kt === "double" ? (Ht = re[m >> 3],
                        m += 8) : kt == "i64" ? (Ht = [M[m >> 2], M[m + 4 >> 2]],
                        m += 8) : (kt = "i32",
                        Ht = M[m >> 2],
                        m += 4),
                    Ht
              }
              i(E, "getNextArg");
              for (var w = [], I, A, P; ; ) {
                var $ = d;
                if (I = H[d],
                I === 0)
                  break;
                if (A = H[d + 1],
                I == 37) {
                  var j = !1
                      , W = !1
                      , G = !1
                      , K = !1
                      , de = !1;
                  e: for (; ; ) {
                    switch (A) {
                      case 43:
                        j = !0;
                        break;
                      case 45:
                        W = !0;
                        break;
                      case 35:
                        G = !0;
                        break;
                      case 48:
                        if (K)
                          break e;
                        K = !0;
                        break;
                      case 32:
                        de = !0;
                        break;
                      default:
                        break e
                    }
                    d++,
                        A = H[d + 1]
                  }
                  var ke = 0;
                  if (A == 42)
                    ke = E("i32"),
                        d++,
                        A = H[d + 1];
                  else
                    for (; A >= 48 && A <= 57; )
                      ke = ke * 10 + (A - 48),
                          d++,
                          A = H[d + 1];
                  var be = !1
                      , Se = -1;
                  if (A == 46) {
                    if (Se = 0,
                        be = !0,
                        d++,
                        A = H[d + 1],
                    A == 42)
                      Se = E("i32"),
                          d++;
                    else
                      for (; ; ) {
                        var Ge = H[d + 1];
                        if (Ge < 48 || Ge > 57)
                          break;
                        Se = Se * 10 + (Ge - 48),
                            d++
                      }
                    A = H[d + 1]
                  }
                  Se < 0 && (Se = 6,
                      be = !1);
                  var Oe;
                  switch (String.fromCharCode(A)) {
                    case "h":
                      var nt = H[d + 2];
                      nt == 104 ? (d++,
                          Oe = 1) : Oe = 2;
                      break;
                    case "l":
                      var nt = H[d + 2];
                      nt == 108 ? (d++,
                          Oe = 8) : Oe = 4;
                      break;
                    case "L":
                    case "q":
                    case "j":
                      Oe = 8;
                      break;
                    case "z":
                    case "t":
                    case "I":
                      Oe = 4;
                      break;
                    default:
                      Oe = null
                  }
                  switch (Oe && d++,
                      A = H[d + 1],
                      String.fromCharCode(A)) {
                    case "d":
                    case "i":
                    case "u":
                    case "o":
                    case "x":
                    case "X":
                    case "p":
                    {
                      var nn = A == 100 || A == 105;
                      Oe = Oe || 4,
                          P = E("i" + Oe * 8);
                      var B;
                      if (Oe == 8 && (P = A == 117 ? bm(P[0], P[1]) : Em(P[0], P[1])),
                      Oe <= 4) {
                        var ry = Math.pow(256, Oe) - 1;
                        P = (nn ? Hc : jc)(P & ry, Oe * 8)
                      }
                      var Ur = Math.abs(P)
                          , rt = "";
                      if (A == 100 || A == 105)
                        B = Hc(P, 8 * Oe).toString(10);
                      else if (A == 117)
                        B = jc(P, 8 * Oe).toString(10),
                            P = Math.abs(P);
                      else if (A == 111)
                        B = (G ? "0" : "") + Ur.toString(8);
                      else if (A == 120 || A == 88) {
                        if (rt = G && P != 0 ? "0x" : "",
                        P < 0) {
                          P = -P,
                              B = (Ur - 1).toString(16);
                          for (var Qc = [], At = 0; At < B.length; At++)
                            Qc.push((15 - parseInt(B[At], 16)).toString(16));
                          for (B = Qc.join(""); B.length < Oe * 2; )
                            B = "f" + B
                        } else
                          B = Ur.toString(16);
                        A == 88 && (rt = rt.toUpperCase(),
                            B = B.toUpperCase())
                      } else
                        A == 112 && (Ur === 0 ? B = "(nil)" : (rt = "0x",
                            B = Ur.toString(16)));
                      if (be)
                        for (; B.length < Se; )
                          B = "0" + B;
                      for (P >= 0 && (j ? rt = "+" + rt : de && (rt = " " + rt)),
                           B.charAt(0) == "-" && (rt = "-" + rt,
                               B = B.substr(1)); rt.length + B.length < ke; )
                        W ? B += " " : K ? B = "0" + B : rt = " " + rt;
                      B = rt + B,
                          B.split("").forEach(kt => w.push(kt.charCodeAt(0)));
                      break
                    }
                    case "f":
                    case "F":
                    case "e":
                    case "E":
                    case "g":
                    case "G":
                    {
                      P = E("double");
                      var B;
                      if (isNaN(P))
                        B = "nan",
                            K = !1;
                      else if (!isFinite(P))
                        B = (P < 0 ? "-" : "") + "inf",
                            K = !1;
                      else {
                        var Jc = !1
                            , Br = Math.min(Se, 20);
                        if (A == 103 || A == 71) {
                          Jc = !0,
                              Se = Se || 1;
                          var lo = parseInt(P.toExponential(Br).split("e")[1], 10);
                          Se > lo && lo >= -4 ? (A = (A == 103 ? "f" : "F").charCodeAt(0),
                              Se -= lo + 1) : (A = (A == 103 ? "e" : "E").charCodeAt(0),
                              Se--),
                              Br = Math.min(Se, 20)
                        }
                        A == 101 || A == 69 ? (B = P.toExponential(Br),
                        /[eE][-+]\d$/.test(B) && (B = B.slice(0, -1) + "0" + B.slice(-1))) : (A == 102 || A == 70) && (B = P.toFixed(Br),
                        P === 0 && Sm(P) && (B = "-" + B));
                        var St = B.split("e");
                        if (Jc && !G)
                          for (; St[0].length > 1 && St[0].includes(".") && (St[0].slice(-1) == "0" || St[0].slice(-1) == "."); )
                            St[0] = St[0].slice(0, -1);
                        else
                          for (G && B.indexOf(".") == -1 && (St[0] += "."); Se > Br++; )
                            St[0] += "0";
                        B = St[0] + (St.length > 1 ? "e" + St[1] : ""),
                        A == 69 && (B = B.toUpperCase()),
                        P >= 0 && (j ? B = "+" + B : de && (B = " " + B))
                      }
                      for (; B.length < ke; )
                        W ? B += " " : K && (B[0] == "-" || B[0] == "+") ? B = B[0] + "0" + B.slice(1) : B = (K ? "0" : " ") + B;
                      A < 97 && (B = B.toUpperCase()),
                          B.split("").forEach(Ht => w.push(Ht.charCodeAt(0)));
                      break
                    }
                    case "s":
                    {
                      var As = E("i8*")
                          , Qn = As ? wm(As) : 6;
                      if (be && (Qn = Math.min(Qn, Se)),
                          !W)
                        for (; Qn < ke--; )
                          w.push(32);
                      if (As)
                        for (var At = 0; At < Qn; At++)
                          w.push(C[As++]);
                      else
                        w = w.concat(io("(null)".substr(0, Qn), !0));
                      if (W)
                        for (; Qn < ke--; )
                          w.push(32);
                      break
                    }
                    case "c":
                    {
                      for (W && w.push(E("i8")); --ke > 0; )
                        w.push(32);
                      W || w.push(E("i8"));
                      break
                    }
                    case "n":
                    {
                      var sy = E("i32*");
                      M[sy >> 2] = w.length;
                      break
                    }
                    case "%":
                    {
                      w.push(I);
                      break
                    }
                    default:
                      for (var At = $; At < d + 2; At++)
                        w.push(H[At])
                  }
                  d += 2
                } else
                  w.push(I),
                      d += 1
              }
              return w
            }
            , "formatString");
        function Rm() {
          return new Error().stack.toString()
        }
        i(Rm, "jsStackTrace");
        var Is = i(a => {
              Is.shown ||= {},
              Is.shown[a] || (Is.shown[a] = 1,
              h && (a = "warning: " + a),
                  q(a))
            }
            , "warnOnce");
        function Am(a) {
          var u = Rm()
              , d = u.lastIndexOf("_emscripten_log")
              , m = u.lastIndexOf("_emscripten_get_callstack")
              , _ = u.indexOf(`
`, Math.max(d, m)) + 1;
          u = u.slice(_),
          a & 8 && typeof emscripten_source_map > "u" && (Is('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),
              a ^= 8,
              a |= 16);
          var E = u.split(`
`);
          u = "";
          var w = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)")
              , I = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?")
              , A = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
          for (var P in E) {
            var $ = E[P]
                , j = ""
                , W = ""
                , G = 0
                , K = 0
                , de = A.exec($);
            if (de && de.length == 5)
              j = de[1],
                  W = de[2],
                  G = de[3],
                  K = de[4];
            else if (de = w.exec($),
            de || (de = I.exec($)),
            de && de.length >= 4)
              j = de[1],
                  W = de[2],
                  G = de[3],
                  K = de[4] | 0;
            else {
              u += $ + `
`;
              continue
            }
            var ke = !1;
            if (a & 8) {
              var be = emscripten_source_map.originalPositionFor({
                line: G,
                column: K
              });
              ke = be?.source,
              ke && (a & 64 && (be.source = be.source.substring(be.source.replace(/\\/g, "/").lastIndexOf("/") + 1)),
                  u += `    at ${j} (${be.source}:${be.line}:${be.column})
`)
            }
            (a & 16 || !ke) && (a & 64 && (W = W.substring(W.replace(/\\/g, "/").lastIndexOf("/") + 1)),
                u += (ke ? `     = ${j}` : `    at ${j}`) + ` (${W}:${G}:${K})
`)
          }
          return u = u.replace(/\s+$/, ""),
              u
        }
        i(Am, "getCallstack");
        var km = i( (a, u) => {
              a & 24 && (u = u.replace(/\s+$/, ""),
                  u += (u.length > 0 ? `
` : "") + Am(a)),
                  a & 1 ? a & 4 ? console.error(u) : a & 2 || a & 512 || a & 256 : a & 6 ? q(u) : V(u)
            }
            , "emscriptenLog")
            , Om = i( (a, u, d) => {
              var m = Im(u, d)
                  , _ = wn(m, 0);
              km(a, _)
            }
            , "_emscripten_log")
            , Pm = i( () => 2147483648, "getHeapMax")
            , qc = i( (a, u) => Math.ceil(a / u) * u, "alignMemory")
            , Nm = i(a => {
              var u = N.buffer
                  , d = (a - u.byteLength + 65535) / 65536;
              try {
                return N.grow(d),
                    xe(),
                    1
              } catch {}
            }
            , "growMemory")
            , Tm = i(a => {
              var u = C.length;
              a >>>= 0;
              var d = Pm();
              if (a > d)
                return !1;
              for (var m = 1; m <= 4; m *= 2) {
                var _ = u * (1 + .2 / m);
                _ = Math.min(_, a + 100663296);
                var E = Math.min(d, qc(Math.max(a, _), 65536))
                    , w = Nm(E);
                if (w)
                  return !0
              }
              return !1
            }
            , "_emscripten_resize_heap")
            , oo = {}
            , xm = i( () => v || "./this.program", "getExecutableName")
            , Dr = i( () => {
              if (!Dr.strings) {
                var a = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8"
                    , u = {
                  USER: "web_user",
                  LOGNAME: "web_user",
                  PATH: "/",
                  PWD: "/",
                  HOME: "/home/web_user",
                  LANG: a,
                  _: xm()
                };
                for (var d in oo)
                  oo[d] === void 0 ? delete u[d] : u[d] = oo[d];
                var m = [];
                for (var d in u)
                  m.push(`${d}=${u[d]}`);
                Dr.strings = m
              }
              return Dr.strings
            }
            , "getEnvStrings")
            , Cm = i( (a, u) => {
              for (var d = 0; d < a.length; ++d)
                H[u++] = a.charCodeAt(d);
              H[u] = 0
            }
            , "stringToAscii")
            , Mm = i( (a, u) => {
              var d = 0;
              return Dr().forEach( (m, _) => {
                    var E = u + d;
                    Y[a + _ * 4 >> 2] = E,
                        Cm(m, E),
                        d += m.length + 1
                  }
              ),
                  0
            }
            , "_environ_get")
            , Fm = i( (a, u) => {
              var d = Dr();
              Y[a >> 2] = d.length;
              var m = 0;
              return d.forEach(_ => m += _.length + 1),
                  Y[u >> 2] = m,
                  0
            }
            , "_environ_sizes_get")
            , Dm = 0
            , Lm = i( () => fp || Dm > 0, "keepRuntimeAlive")
            , Um = i(a => {
              Lm() || (r.onExit?.(a),
                  F = !0),
                  b(a, new lp(a))
            }
            , "_proc_exit")
            , Bm = i( (a, u) => {
              Um(a)
            }
            , "exitJS")
            , $m = Bm
            , Ee = {
          isAbs: a => a.charAt(0) === "/",
          splitPath: a => {
            var u = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
            return u.exec(a).slice(1)
          }
          ,
          normalizeArray: (a, u) => {
            for (var d = 0, m = a.length - 1; m >= 0; m--) {
              var _ = a[m];
              _ === "." ? a.splice(m, 1) : _ === ".." ? (a.splice(m, 1),
                  d++) : d && (a.splice(m, 1),
                  d--)
            }
            if (u)
              for (; d; d--)
                a.unshift("..");
            return a
          }
          ,
          normalize: a => {
            var u = Ee.isAbs(a)
                , d = a.substr(-1) === "/";
            return a = Ee.normalizeArray(a.split("/").filter(m => !!m), !u).join("/"),
            !a && !u && (a = "."),
            a && d && (a += "/"),
            (u ? "/" : "") + a
          }
          ,
          dirname: a => {
            var u = Ee.splitPath(a)
                , d = u[0]
                , m = u[1];
            return !d && !m ? "." : (m && (m = m.substr(0, m.length - 1)),
            d + m)
          }
          ,
          basename: a => {
            if (a === "/")
              return "/";
            a = Ee.normalize(a),
                a = a.replace(/\/$/, "");
            var u = a.lastIndexOf("/");
            return u === -1 ? a : a.substr(u + 1)
          }
          ,
          join: (...a) => Ee.normalize(a.join("/")),
          join2: (a, u) => Ee.normalize(a + "/" + u)
        }
            , Hm = i( () => {
              if (typeof crypto == "object" && typeof crypto.getRandomValues == "function")
                return m => crypto.getRandomValues(m);
              if (h)
                try {
                  var a = p("crypto")
                      , u = a.randomFillSync;
                  if (u)
                    return m => a.randomFillSync(m);
                  var d = a.randomBytes;
                  return m => (m.set(d(m.byteLength)),
                      m)
                } catch {}
              Yn("initRandomDevice")
            }
            , "initRandomFill")
            , zc = i(a => (zc = Hm())(a), "randomFill")
            , Bt = {
          resolve: (...a) => {
            for (var u = "", d = !1, m = a.length - 1; m >= -1 && !d; m--) {
              var _ = m >= 0 ? a[m] : g.cwd();
              if (typeof _ != "string")
                throw new TypeError("Arguments to path.resolve must be strings");
              if (!_)
                return "";
              u = _ + "/" + u,
                  d = Ee.isAbs(_)
            }
            return u = Ee.normalizeArray(u.split("/").filter(E => !!E), !d).join("/"),
            (d ? "/" : "") + u || "."
          }
          ,
          relative: (a, u) => {
            a = Bt.resolve(a).substr(1),
                u = Bt.resolve(u).substr(1);
            function d(P) {
              for (var $ = 0; $ < P.length && P[$] === ""; $++)
                ;
              for (var j = P.length - 1; j >= 0 && P[j] === ""; j--)
                ;
              return $ > j ? [] : P.slice($, j - $ + 1)
            }
            i(d, "trim");
            for (var m = d(a.split("/")), _ = d(u.split("/")), E = Math.min(m.length, _.length), w = E, I = 0; I < E; I++)
              if (m[I] !== _[I]) {
                w = I;
                break
              }
            for (var A = [], I = w; I < m.length; I++)
              A.push("..");
            return A = A.concat(_.slice(w)),
                A.join("/")
          }
        }
            , ao = []
            , jm = i( () => {
              if (!ao.length) {
                var a = null;
                if (h) {
                  var u = 256
                      , d = Buffer.alloc(u)
                      , m = 0
                      , _ = process.stdin.fd;
                  try {
                    m = L.readSync(_, d, 0, u)
                  } catch (E) {
                    if (E.toString().includes("EOF"))
                      m = 0;
                    else
                      throw E
                  }
                  m > 0 && (a = d.slice(0, m).toString("utf-8"))
                } else
                  typeof window < "u" && typeof window.prompt == "function" && (a = window.prompt("Input: "),
                  a !== null && (a += `
`));
                if (!a)
                  return null;
                ao = io(a, !0)
              }
              return ao.shift()
            }
            , "FS_stdin_getChar")
            , An = {
          ttys: [],
          init() {},
          shutdown() {},
          register(a, u) {
            An.ttys[a] = {
              input: [],
              output: [],
              ops: u
            },
                g.registerDevice(a, An.stream_ops)
          },
          stream_ops: {
            open(a) {
              var u = An.ttys[a.node.rdev];
              if (!u)
                throw new g.ErrnoError(43);
              a.tty = u,
                  a.seekable = !1
            },
            close(a) {
              a.tty.ops.fsync(a.tty)
            },
            fsync(a) {
              a.tty.ops.fsync(a.tty)
            },
            read(a, u, d, m, _) {
              if (!a.tty || !a.tty.ops.get_char)
                throw new g.ErrnoError(60);
              for (var E = 0, w = 0; w < m; w++) {
                var I;
                try {
                  I = a.tty.ops.get_char(a.tty)
                } catch {
                  throw new g.ErrnoError(29)
                }
                if (I === void 0 && E === 0)
                  throw new g.ErrnoError(6);
                if (I == null)
                  break;
                E++,
                    u[d + w] = I
              }
              return E && (a.node.timestamp = Date.now()),
                  E
            },
            write(a, u, d, m, _) {
              if (!a.tty || !a.tty.ops.put_char)
                throw new g.ErrnoError(60);
              try {
                for (var E = 0; E < m; E++)
                  a.tty.ops.put_char(a.tty, u[d + E])
              } catch {
                throw new g.ErrnoError(29)
              }
              return m && (a.node.timestamp = Date.now()),
                  E
            }
          },
          default_tty_ops: {
            get_char(a) {
              return jm()
            },
            put_char(a, u) {
              u === null || u === 10 ? (V(wn(a.output, 0)),
                  a.output = []) : u != 0 && a.output.push(u)
            },
            fsync(a) {
              a.output && a.output.length > 0 && (V(wn(a.output, 0)),
                  a.output = [])
            },
            ioctl_tcgets(a) {
              return {
                c_iflag: 25856,
                c_oflag: 5,
                c_cflag: 191,
                c_lflag: 35387,
                c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              }
            },
            ioctl_tcsets(a, u, d) {
              return 0
            },
            ioctl_tiocgwinsz(a) {
              return [24, 80]
            }
          },
          default_tty1_ops: {
            put_char(a, u) {
              u === null || u === 10 ? (q(wn(a.output, 0)),
                  a.output = []) : u != 0 && a.output.push(u)
            },
            fsync(a) {
              a.output && a.output.length > 0 && (q(wn(a.output, 0)),
                  a.output = [])
            }
          }
        }
            , qm = i( (a, u) => (C.fill(0, a, a + u),
            a), "zeroMemory")
            , Wc = i(a => {
              a = qc(a, 65536);
              var u = Gc(65536, a);
              return u ? qm(u, a) : 0
            }
            , "mmapAlloc")
            , ie = {
          ops_table: null,
          mount(a) {
            return ie.createNode(null, "/", 16895, 0)
          },
          createNode(a, u, d, m) {
            if (g.isBlkdev(d) || g.isFIFO(d))
              throw new g.ErrnoError(63);
            ie.ops_table ||= {
              dir: {
                node: {
                  getattr: ie.node_ops.getattr,
                  setattr: ie.node_ops.setattr,
                  lookup: ie.node_ops.lookup,
                  mknod: ie.node_ops.mknod,
                  rename: ie.node_ops.rename,
                  unlink: ie.node_ops.unlink,
                  rmdir: ie.node_ops.rmdir,
                  readdir: ie.node_ops.readdir,
                  symlink: ie.node_ops.symlink
                },
                stream: {
                  llseek: ie.stream_ops.llseek
                }
              },
              file: {
                node: {
                  getattr: ie.node_ops.getattr,
                  setattr: ie.node_ops.setattr
                },
                stream: {
                  llseek: ie.stream_ops.llseek,
                  read: ie.stream_ops.read,
                  write: ie.stream_ops.write,
                  allocate: ie.stream_ops.allocate,
                  mmap: ie.stream_ops.mmap,
                  msync: ie.stream_ops.msync
                }
              },
              link: {
                node: {
                  getattr: ie.node_ops.getattr,
                  setattr: ie.node_ops.setattr,
                  readlink: ie.node_ops.readlink
                },
                stream: {}
              },
              chrdev: {
                node: {
                  getattr: ie.node_ops.getattr,
                  setattr: ie.node_ops.setattr
                },
                stream: g.chrdev_stream_ops
              }
            };
            var _ = g.createNode(a, u, d, m);
            return g.isDir(_.mode) ? (_.node_ops = ie.ops_table.dir.node,
                _.stream_ops = ie.ops_table.dir.stream,
                _.contents = {}) : g.isFile(_.mode) ? (_.node_ops = ie.ops_table.file.node,
                _.stream_ops = ie.ops_table.file.stream,
                _.usedBytes = 0,
                _.contents = null) : g.isLink(_.mode) ? (_.node_ops = ie.ops_table.link.node,
                _.stream_ops = ie.ops_table.link.stream) : g.isChrdev(_.mode) && (_.node_ops = ie.ops_table.chrdev.node,
                _.stream_ops = ie.ops_table.chrdev.stream),
                _.timestamp = Date.now(),
            a && (a.contents[u] = _,
                a.timestamp = _.timestamp),
                _
          },
          getFileDataAsTypedArray(a) {
            return a.contents ? a.contents.subarray ? a.contents.subarray(0, a.usedBytes) : new Uint8Array(a.contents) : new Uint8Array(0)
          },
          expandFileStorage(a, u) {
            var d = a.contents ? a.contents.length : 0;
            if (!(d >= u)) {
              var m = 1024 * 1024;
              u = Math.max(u, d * (d < m ? 2 : 1.125) >>> 0),
              d != 0 && (u = Math.max(u, 256));
              var _ = a.contents;
              a.contents = new Uint8Array(u),
              a.usedBytes > 0 && a.contents.set(_.subarray(0, a.usedBytes), 0)
            }
          },
          resizeFileStorage(a, u) {
            if (a.usedBytes != u)
              if (u == 0)
                a.contents = null,
                    a.usedBytes = 0;
              else {
                var d = a.contents;
                a.contents = new Uint8Array(u),
                d && a.contents.set(d.subarray(0, Math.min(u, a.usedBytes))),
                    a.usedBytes = u
              }
          },
          node_ops: {
            getattr(a) {
              var u = {};
              return u.dev = g.isChrdev(a.mode) ? a.id : 1,
                  u.ino = a.id,
                  u.mode = a.mode,
                  u.nlink = 1,
                  u.uid = 0,
                  u.gid = 0,
                  u.rdev = a.rdev,
                  g.isDir(a.mode) ? u.size = 4096 : g.isFile(a.mode) ? u.size = a.usedBytes : g.isLink(a.mode) ? u.size = a.link.length : u.size = 0,
                  u.atime = new Date(a.timestamp),
                  u.mtime = new Date(a.timestamp),
                  u.ctime = new Date(a.timestamp),
                  u.blksize = 4096,
                  u.blocks = Math.ceil(u.size / u.blksize),
                  u
            },
            setattr(a, u) {
              u.mode !== void 0 && (a.mode = u.mode),
              u.timestamp !== void 0 && (a.timestamp = u.timestamp),
              u.size !== void 0 && ie.resizeFileStorage(a, u.size)
            },
            lookup(a, u) {
              throw g.genericErrors[44]
            },
            mknod(a, u, d, m) {
              return ie.createNode(a, u, d, m)
            },
            rename(a, u, d) {
              if (g.isDir(a.mode)) {
                var m;
                try {
                  m = g.lookupNode(u, d)
                } catch {}
                if (m)
                  for (var _ in m.contents)
                    throw new g.ErrnoError(55)
              }
              delete a.parent.contents[a.name],
                  a.parent.timestamp = Date.now(),
                  a.name = d,
                  u.contents[d] = a,
                  u.timestamp = a.parent.timestamp
            },
            unlink(a, u) {
              delete a.contents[u],
                  a.timestamp = Date.now()
            },
            rmdir(a, u) {
              var d = g.lookupNode(a, u);
              for (var m in d.contents)
                throw new g.ErrnoError(55);
              delete a.contents[u],
                  a.timestamp = Date.now()
            },
            readdir(a) {
              var u = [".", ".."];
              for (var d of Object.keys(a.contents))
                u.push(d);
              return u
            },
            symlink(a, u, d) {
              var m = ie.createNode(a, u, 41471, 0);
              return m.link = d,
                  m
            },
            readlink(a) {
              if (!g.isLink(a.mode))
                throw new g.ErrnoError(28);
              return a.link
            }
          },
          stream_ops: {
            read(a, u, d, m, _) {
              var E = a.node.contents;
              if (_ >= a.node.usedBytes)
                return 0;
              var w = Math.min(a.node.usedBytes - _, m);
              if (w > 8 && E.subarray)
                u.set(E.subarray(_, _ + w), d);
              else
                for (var I = 0; I < w; I++)
                  u[d + I] = E[_ + I];
              return w
            },
            write(a, u, d, m, _, E) {
              if (u.buffer === H.buffer && (E = !1),
                  !m)
                return 0;
              var w = a.node;
              if (w.timestamp = Date.now(),
              u.subarray && (!w.contents || w.contents.subarray)) {
                if (E)
                  return w.contents = u.subarray(d, d + m),
                      w.usedBytes = m,
                      m;
                if (w.usedBytes === 0 && _ === 0)
                  return w.contents = u.slice(d, d + m),
                      w.usedBytes = m,
                      m;
                if (_ + m <= w.usedBytes)
                  return w.contents.set(u.subarray(d, d + m), _),
                      m
              }
              if (ie.expandFileStorage(w, _ + m),
              w.contents.subarray && u.subarray)
                w.contents.set(u.subarray(d, d + m), _);
              else
                for (var I = 0; I < m; I++)
                  w.contents[_ + I] = u[d + I];
              return w.usedBytes = Math.max(w.usedBytes, _ + m),
                  m
            },
            llseek(a, u, d) {
              var m = u;
              if (d === 1 ? m += a.position : d === 2 && g.isFile(a.node.mode) && (m += a.node.usedBytes),
              m < 0)
                throw new g.ErrnoError(28);
              return m
            },
            allocate(a, u, d) {
              ie.expandFileStorage(a.node, u + d),
                  a.node.usedBytes = Math.max(a.node.usedBytes, u + d)
            },
            mmap(a, u, d, m, _) {
              if (!g.isFile(a.node.mode))
                throw new g.ErrnoError(43);
              var E, w, I = a.node.contents;
              if (!(_ & 2) && I && I.buffer === H.buffer)
                w = !1,
                    E = I.byteOffset;
              else {
                if (w = !0,
                    E = Wc(u),
                    !E)
                  throw new g.ErrnoError(48);
                I && ((d > 0 || d + u < I.length) && (I.subarray ? I = I.subarray(d, d + u) : I = Array.prototype.slice.call(I, d, d + u)),
                    H.set(I, E))
              }
              return {
                ptr: E,
                allocated: w
              }
            },
            msync(a, u, d, m, _) {
              return ie.stream_ops.write(a, u, 0, m, d, !1),
                  0
            }
          }
        }
            , zm = i( (a, u, d, m) => {
              var _ = m ? "" : `al ${a}`;
              k(a).then(E => {
                    u(new Uint8Array(E)),
                    _ && Gn()
                  }
                  , E => {
                    if (d)
                      d();
                    else
                      throw `Loading data file "${a}" failed.`
                  }
              ),
              _ && Vn()
            }
            , "asyncLoad")
            , Wm = i( (a, u, d, m, _, E) => {
              g.createDataFile(a, u, d, m, _, E)
            }
            , "FS_createDataFile")
            , Vm = r.preloadPlugins || []
            , Gm = i( (a, u, d, m) => {
              typeof Browser < "u" && Browser.init();
              var _ = !1;
              return Vm.forEach(E => {
                    _ || E.canHandle(u) && (E.handle(a, u, d, m),
                        _ = !0)
                  }
              ),
                  _
            }
            , "FS_handledByPreloadPlugin")
            , Ym = i( (a, u, d, m, _, E, w, I, A, P) => {
              var $ = u ? Bt.resolve(Ee.join2(a, u)) : a;
              function j(W) {
                function G(K) {
                  P?.(),
                  I || Wm(a, u, K, m, _, A),
                      E?.(),
                      Gn()
                }
                i(G, "finish"),
                !Gm(W, $, G, () => {
                      w?.(),
                          Gn()
                    }
                ) && G(W)
              }
              i(j, "processData"),
                  Vn(),
                  typeof d == "string" ? zm(d, j, w) : j(d)
            }
            , "FS_createPreloadedFile")
            , Km = i(a => {
              var u = {
                r: 0,
                "r+": 2,
                w: 577,
                "w+": 578,
                a: 1089,
                "a+": 1090
              }
                  , d = u[a];
              if (typeof d > "u")
                throw new Error(`Unknown file open mode: ${a}`);
              return d
            }
            , "FS_modeStringToFlags")
            , co = i( (a, u) => {
              var d = 0;
              return a && (d |= 365),
              u && (d |= 146),
                  d
            }
            , "FS_getMode")
            , g = {
          root: null,
          mounts: [],
          devices: {},
          streams: [],
          nextInode: 1,
          nameTable: null,
          currentPath: "/",
          initialized: !1,
          ignorePermissions: !0,
          ErrnoError: class {
            constructor(a) {
              this.name = "ErrnoError",
                  this.errno = a
            }
          }
          ,
          genericErrors: {},
          filesystems: null,
          syncFSRequests: 0,
          FSStream: class {
            constructor() {
              this.shared = {}
            }
            get object() {
              return this.node
            }
            set object(a) {
              this.node = a
            }
            get isRead() {
              return (this.flags & 2097155) !== 1
            }
            get isWrite() {
              return (this.flags & 2097155) !== 0
            }
            get isAppend() {
              return this.flags & 1024
            }
            get flags() {
              return this.shared.flags
            }
            set flags(a) {
              this.shared.flags = a
            }
            get position() {
              return this.shared.position
            }
            set position(a) {
              this.shared.position = a
            }
          }
          ,
          FSNode: class {
            constructor(a, u, d, m) {
              a || (a = this),
                  this.parent = a,
                  this.mount = a.mount,
                  this.mounted = null,
                  this.id = g.nextInode++,
                  this.name = u,
                  this.mode = d,
                  this.node_ops = {},
                  this.stream_ops = {},
                  this.rdev = m,
                  this.readMode = 365,
                  this.writeMode = 146
            }
            get read() {
              return (this.mode & this.readMode) === this.readMode
            }
            set read(a) {
              a ? this.mode |= this.readMode : this.mode &= ~this.readMode
            }
            get write() {
              return (this.mode & this.writeMode) === this.writeMode
            }
            set write(a) {
              a ? this.mode |= this.writeMode : this.mode &= ~this.writeMode
            }
            get isFolder() {
              return g.isDir(this.mode)
            }
            get isDevice() {
              return g.isChrdev(this.mode)
            }
          }
          ,
          lookupPath(a, u={}) {
            if (a = Bt.resolve(a),
                !a)
              return {
                path: "",
                node: null
              };
            var d = {
              follow_mount: !0,
              recurse_count: 0
            };
            if (u = Object.assign(d, u),
            u.recurse_count > 8)
              throw new g.ErrnoError(32);
            for (var m = a.split("/").filter(j => !!j), _ = g.root, E = "/", w = 0; w < m.length; w++) {
              var I = w === m.length - 1;
              if (I && u.parent)
                break;
              if (_ = g.lookupNode(_, m[w]),
                  E = Ee.join2(E, m[w]),
              g.isMountpoint(_) && (!I || I && u.follow_mount) && (_ = _.mounted.root),
              !I || u.follow)
                for (var A = 0; g.isLink(_.mode); ) {
                  var P = g.readlink(E);
                  E = Bt.resolve(Ee.dirname(E), P);
                  var $ = g.lookupPath(E, {
                    recurse_count: u.recurse_count + 1
                  });
                  if (_ = $.node,
                  A++ > 40)
                    throw new g.ErrnoError(32)
                }
            }
            return {
              path: E,
              node: _
            }
          },
          getPath(a) {
            for (var u; ; ) {
              if (g.isRoot(a)) {
                var d = a.mount.mountpoint;
                return u ? d[d.length - 1] !== "/" ? `${d}/${u}` : d + u : d
              }
              u = u ? `${a.name}/${u}` : a.name,
                  a = a.parent
            }
          },
          hashName(a, u) {
            for (var d = 0, m = 0; m < u.length; m++)
              d = (d << 5) - d + u.charCodeAt(m) | 0;
            return (a + d >>> 0) % g.nameTable.length
          },
          hashAddNode(a) {
            var u = g.hashName(a.parent.id, a.name);
            a.name_next = g.nameTable[u],
                g.nameTable[u] = a
          },
          hashRemoveNode(a) {
            var u = g.hashName(a.parent.id, a.name);
            if (g.nameTable[u] === a)
              g.nameTable[u] = a.name_next;
            else
              for (var d = g.nameTable[u]; d; ) {
                if (d.name_next === a) {
                  d.name_next = a.name_next;
                  break
                }
                d = d.name_next
              }
          },
          lookupNode(a, u) {
            var d = g.mayLookup(a);
            if (d)
              throw new g.ErrnoError(d);
            for (var m = g.hashName(a.id, u), _ = g.nameTable[m]; _; _ = _.name_next) {
              var E = _.name;
              if (_.parent.id === a.id && E === u)
                return _
            }
            return g.lookup(a, u)
          },
          createNode(a, u, d, m) {
            var _ = new g.FSNode(a,u,d,m);
            return g.hashAddNode(_),
                _
          },
          destroyNode(a) {
            g.hashRemoveNode(a)
          },
          isRoot(a) {
            return a === a.parent
          },
          isMountpoint(a) {
            return !!a.mounted
          },
          isFile(a) {
            return (a & 61440) === 32768
          },
          isDir(a) {
            return (a & 61440) === 16384
          },
          isLink(a) {
            return (a & 61440) === 40960
          },
          isChrdev(a) {
            return (a & 61440) === 8192
          },
          isBlkdev(a) {
            return (a & 61440) === 24576
          },
          isFIFO(a) {
            return (a & 61440) === 4096
          },
          isSocket(a) {
            return (a & 49152) === 49152
          },
          flagsToPermissionString(a) {
            var u = ["r", "w", "rw"][a & 3];
            return a & 512 && (u += "w"),
                u
          },
          nodePermissions(a, u) {
            return g.ignorePermissions ? 0 : u.includes("r") && !(a.mode & 292) || u.includes("w") && !(a.mode & 146) || u.includes("x") && !(a.mode & 73) ? 2 : 0
          },
          mayLookup(a) {
            if (!g.isDir(a.mode))
              return 54;
            var u = g.nodePermissions(a, "x");
            return u || (a.node_ops.lookup ? 0 : 2)
          },
          mayCreate(a, u) {
            try {
              var d = g.lookupNode(a, u);
              return 20
            } catch {}
            return g.nodePermissions(a, "wx")
          },
          mayDelete(a, u, d) {
            var m;
            try {
              m = g.lookupNode(a, u)
            } catch (E) {
              return E.errno
            }
            var _ = g.nodePermissions(a, "wx");
            if (_)
              return _;
            if (d) {
              if (!g.isDir(m.mode))
                return 54;
              if (g.isRoot(m) || g.getPath(m) === g.cwd())
                return 10
            } else if (g.isDir(m.mode))
              return 31;
            return 0
          },
          mayOpen(a, u) {
            return a ? g.isLink(a.mode) ? 32 : g.isDir(a.mode) && (g.flagsToPermissionString(u) !== "r" || u & 512) ? 31 : g.nodePermissions(a, g.flagsToPermissionString(u)) : 44
          },
          MAX_OPEN_FDS: 4096,
          nextfd() {
            for (var a = 0; a <= g.MAX_OPEN_FDS; a++)
              if (!g.streams[a])
                return a;
            throw new g.ErrnoError(33)
          },
          getStreamChecked(a) {
            var u = g.getStream(a);
            if (!u)
              throw new g.ErrnoError(8);
            return u
          },
          getStream: a => g.streams[a],
          createStream(a, u=-1) {
            return a = Object.assign(new g.FSStream, a),
            u == -1 && (u = g.nextfd()),
                a.fd = u,
                g.streams[u] = a,
                a
          },
          closeStream(a) {
            g.streams[a] = null
          },
          dupStream(a, u=-1) {
            var d = g.createStream(a, u);
            return d.stream_ops?.dup?.(d),
                d
          },
          chrdev_stream_ops: {
            open(a) {
              var u = g.getDevice(a.node.rdev);
              a.stream_ops = u.stream_ops,
                  a.stream_ops.open?.(a)
            },
            llseek() {
              throw new g.ErrnoError(70)
            }
          },
          major: a => a >> 8,
          minor: a => a & 255,
          makedev: (a, u) => a << 8 | u,
          registerDevice(a, u) {
            g.devices[a] = {
              stream_ops: u
            }
          },
          getDevice: a => g.devices[a],
          getMounts(a) {
            for (var u = [], d = [a]; d.length; ) {
              var m = d.pop();
              u.push(m),
                  d.push(...m.mounts)
            }
            return u
          },
          syncfs(a, u) {
            typeof a == "function" && (u = a,
                a = !1),
                g.syncFSRequests++,
            g.syncFSRequests > 1 && q(`warning: ${g.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
            var d = g.getMounts(g.root.mount)
                , m = 0;
            function _(w) {
              return g.syncFSRequests--,
                  u(w)
            }
            i(_, "doCallback");
            function E(w) {
              if (w)
                return E.errored ? void 0 : (E.errored = !0,
                    _(w));
              ++m >= d.length && _(null)
            }
            i(E, "done"),
                d.forEach(w => {
                      if (!w.type.syncfs)
                        return E(null);
                      w.type.syncfs(w, a, E)
                    }
                )
          },
          mount(a, u, d) {
            var m = d === "/", _ = !d, E;
            if (m && g.root)
              throw new g.ErrnoError(10);
            if (!m && !_) {
              var w = g.lookupPath(d, {
                follow_mount: !1
              });
              if (d = w.path,
                  E = w.node,
                  g.isMountpoint(E))
                throw new g.ErrnoError(10);
              if (!g.isDir(E.mode))
                throw new g.ErrnoError(54)
            }
            var I = {
              type: a,
              opts: u,
              mountpoint: d,
              mounts: []
            }
                , A = a.mount(I);
            return A.mount = I,
                I.root = A,
                m ? g.root = A : E && (E.mounted = I,
                E.mount && E.mount.mounts.push(I)),
                A
          },
          unmount(a) {
            var u = g.lookupPath(a, {
              follow_mount: !1
            });
            if (!g.isMountpoint(u.node))
              throw new g.ErrnoError(28);
            var d = u.node
                , m = d.mounted
                , _ = g.getMounts(m);
            Object.keys(g.nameTable).forEach(w => {
                  for (var I = g.nameTable[w]; I; ) {
                    var A = I.name_next;
                    _.includes(I.mount) && g.destroyNode(I),
                        I = A
                  }
                }
            ),
                d.mounted = null;
            var E = d.mount.mounts.indexOf(m);
            d.mount.mounts.splice(E, 1)
          },
          lookup(a, u) {
            return a.node_ops.lookup(a, u)
          },
          mknod(a, u, d) {
            var m = g.lookupPath(a, {
              parent: !0
            })
                , _ = m.node
                , E = Ee.basename(a);
            if (!E || E === "." || E === "..")
              throw new g.ErrnoError(28);
            var w = g.mayCreate(_, E);
            if (w)
              throw new g.ErrnoError(w);
            if (!_.node_ops.mknod)
              throw new g.ErrnoError(63);
            return _.node_ops.mknod(_, E, u, d)
          },
          create(a, u) {
            return u = u !== void 0 ? u : 438,
                u &= 4095,
                u |= 32768,
                g.mknod(a, u, 0)
          },
          mkdir(a, u) {
            return u = u !== void 0 ? u : 511,
                u &= 1023,
                u |= 16384,
                g.mknod(a, u, 0)
          },
          mkdirTree(a, u) {
            for (var d = a.split("/"), m = "", _ = 0; _ < d.length; ++_)
              if (d[_]) {
                m += "/" + d[_];
                try {
                  g.mkdir(m, u)
                } catch (E) {
                  if (E.errno != 20)
                    throw E
                }
              }
          },
          mkdev(a, u, d) {
            return typeof d > "u" && (d = u,
                u = 438),
                u |= 8192,
                g.mknod(a, u, d)
          },
          symlink(a, u) {
            if (!Bt.resolve(a))
              throw new g.ErrnoError(44);
            var d = g.lookupPath(u, {
              parent: !0
            })
                , m = d.node;
            if (!m)
              throw new g.ErrnoError(44);
            var _ = Ee.basename(u)
                , E = g.mayCreate(m, _);
            if (E)
              throw new g.ErrnoError(E);
            if (!m.node_ops.symlink)
              throw new g.ErrnoError(63);
            return m.node_ops.symlink(m, _, a)
          },
          rename(a, u) {
            var d = Ee.dirname(a), m = Ee.dirname(u), _ = Ee.basename(a), E = Ee.basename(u), w, I, A;
            if (w = g.lookupPath(a, {
              parent: !0
            }),
                I = w.node,
                w = g.lookupPath(u, {
                  parent: !0
                }),
                A = w.node,
            !I || !A)
              throw new g.ErrnoError(44);
            if (I.mount !== A.mount)
              throw new g.ErrnoError(75);
            var P = g.lookupNode(I, _)
                , $ = Bt.relative(a, m);
            if ($.charAt(0) !== ".")
              throw new g.ErrnoError(28);
            if ($ = Bt.relative(u, d),
            $.charAt(0) !== ".")
              throw new g.ErrnoError(55);
            var j;
            try {
              j = g.lookupNode(A, E)
            } catch {}
            if (P !== j) {
              var W = g.isDir(P.mode)
                  , G = g.mayDelete(I, _, W);
              if (G)
                throw new g.ErrnoError(G);
              if (G = j ? g.mayDelete(A, E, W) : g.mayCreate(A, E),
                  G)
                throw new g.ErrnoError(G);
              if (!I.node_ops.rename)
                throw new g.ErrnoError(63);
              if (g.isMountpoint(P) || j && g.isMountpoint(j))
                throw new g.ErrnoError(10);
              if (A !== I && (G = g.nodePermissions(I, "w"),
                  G))
                throw new g.ErrnoError(G);
              g.hashRemoveNode(P);
              try {
                I.node_ops.rename(P, A, E),
                    P.parent = A
              } catch (K) {
                throw K
              } finally {
                g.hashAddNode(P)
              }
            }
          },
          rmdir(a) {
            var u = g.lookupPath(a, {
              parent: !0
            })
                , d = u.node
                , m = Ee.basename(a)
                , _ = g.lookupNode(d, m)
                , E = g.mayDelete(d, m, !0);
            if (E)
              throw new g.ErrnoError(E);
            if (!d.node_ops.rmdir)
              throw new g.ErrnoError(63);
            if (g.isMountpoint(_))
              throw new g.ErrnoError(10);
            d.node_ops.rmdir(d, m),
                g.destroyNode(_)
          },
          readdir(a) {
            var u = g.lookupPath(a, {
              follow: !0
            })
                , d = u.node;
            if (!d.node_ops.readdir)
              throw new g.ErrnoError(54);
            return d.node_ops.readdir(d)
          },
          unlink(a) {
            var u = g.lookupPath(a, {
              parent: !0
            })
                , d = u.node;
            if (!d)
              throw new g.ErrnoError(44);
            var m = Ee.basename(a)
                , _ = g.lookupNode(d, m)
                , E = g.mayDelete(d, m, !1);
            if (E)
              throw new g.ErrnoError(E);
            if (!d.node_ops.unlink)
              throw new g.ErrnoError(63);
            if (g.isMountpoint(_))
              throw new g.ErrnoError(10);
            d.node_ops.unlink(d, m),
                g.destroyNode(_)
          },
          readlink(a) {
            var u = g.lookupPath(a)
                , d = u.node;
            if (!d)
              throw new g.ErrnoError(44);
            if (!d.node_ops.readlink)
              throw new g.ErrnoError(28);
            return Bt.resolve(g.getPath(d.parent), d.node_ops.readlink(d))
          },
          stat(a, u) {
            var d = g.lookupPath(a, {
              follow: !u
            })
                , m = d.node;
            if (!m)
              throw new g.ErrnoError(44);
            if (!m.node_ops.getattr)
              throw new g.ErrnoError(63);
            return m.node_ops.getattr(m)
          },
          lstat(a) {
            return g.stat(a, !0)
          },
          chmod(a, u, d) {
            var m;
            if (typeof a == "string") {
              var _ = g.lookupPath(a, {
                follow: !d
              });
              m = _.node
            } else
              m = a;
            if (!m.node_ops.setattr)
              throw new g.ErrnoError(63);
            m.node_ops.setattr(m, {
              mode: u & 4095 | m.mode & -4096,
              timestamp: Date.now()
            })
          },
          lchmod(a, u) {
            g.chmod(a, u, !0)
          },
          fchmod(a, u) {
            var d = g.getStreamChecked(a);
            g.chmod(d.node, u)
          },
          chown(a, u, d, m) {
            var _;
            if (typeof a == "string") {
              var E = g.lookupPath(a, {
                follow: !m
              });
              _ = E.node
            } else
              _ = a;
            if (!_.node_ops.setattr)
              throw new g.ErrnoError(63);
            _.node_ops.setattr(_, {
              timestamp: Date.now()
            })
          },
          lchown(a, u, d) {
            g.chown(a, u, d, !0)
          },
          fchown(a, u, d) {
            var m = g.getStreamChecked(a);
            g.chown(m.node, u, d)
          },
          truncate(a, u) {
            if (u < 0)
              throw new g.ErrnoError(28);
            var d;
            if (typeof a == "string") {
              var m = g.lookupPath(a, {
                follow: !0
              });
              d = m.node
            } else
              d = a;
            if (!d.node_ops.setattr)
              throw new g.ErrnoError(63);
            if (g.isDir(d.mode))
              throw new g.ErrnoError(31);
            if (!g.isFile(d.mode))
              throw new g.ErrnoError(28);
            var _ = g.nodePermissions(d, "w");
            if (_)
              throw new g.ErrnoError(_);
            d.node_ops.setattr(d, {
              size: u,
              timestamp: Date.now()
            })
          },
          ftruncate(a, u) {
            var d = g.getStreamChecked(a);
            if (!(d.flags & 2097155))
              throw new g.ErrnoError(28);
            g.truncate(d.node, u)
          },
          utime(a, u, d) {
            var m = g.lookupPath(a, {
              follow: !0
            })
                , _ = m.node;
            _.node_ops.setattr(_, {
              timestamp: Math.max(u, d)
            })
          },
          open(a, u, d) {
            if (a === "")
              throw new g.ErrnoError(44);
            u = typeof u == "string" ? Km(u) : u,
                u & 64 ? (d = typeof d > "u" ? 438 : d,
                    d = d & 4095 | 32768) : d = 0;
            var m;
            if (typeof a == "object")
              m = a;
            else {
              a = Ee.normalize(a);
              try {
                var _ = g.lookupPath(a, {
                  follow: !(u & 131072)
                });
                m = _.node
              } catch {}
            }
            var E = !1;
            if (u & 64)
              if (m) {
                if (u & 128)
                  throw new g.ErrnoError(20)
              } else
                m = g.mknod(a, d, 0),
                    E = !0;
            if (!m)
              throw new g.ErrnoError(44);
            if (g.isChrdev(m.mode) && (u &= -513),
            u & 65536 && !g.isDir(m.mode))
              throw new g.ErrnoError(54);
            if (!E) {
              var w = g.mayOpen(m, u);
              if (w)
                throw new g.ErrnoError(w)
            }
            u & 512 && !E && g.truncate(m, 0),
                u &= -131713;
            var I = g.createStream({
              node: m,
              path: g.getPath(m),
              flags: u,
              seekable: !0,
              position: 0,
              stream_ops: m.stream_ops,
              ungotten: [],
              error: !1
            });
            return I.stream_ops.open && I.stream_ops.open(I),
            r.logReadFiles && !(u & 1) && (g.readFiles || (g.readFiles = {}),
            a in g.readFiles || (g.readFiles[a] = 1)),
                I
          },
          close(a) {
            if (g.isClosed(a))
              throw new g.ErrnoError(8);
            a.getdents && (a.getdents = null);
            try {
              a.stream_ops.close && a.stream_ops.close(a)
            } catch (u) {
              throw u
            } finally {
              g.closeStream(a.fd)
            }
            a.fd = null
          },
          isClosed(a) {
            return a.fd === null
          },
          llseek(a, u, d) {
            if (g.isClosed(a))
              throw new g.ErrnoError(8);
            if (!a.seekable || !a.stream_ops.llseek)
              throw new g.ErrnoError(70);
            if (d != 0 && d != 1 && d != 2)
              throw new g.ErrnoError(28);
            return a.position = a.stream_ops.llseek(a, u, d),
                a.ungotten = [],
                a.position
          },
          read(a, u, d, m, _) {
            if (m < 0 || _ < 0)
              throw new g.ErrnoError(28);
            if (g.isClosed(a))
              throw new g.ErrnoError(8);
            if ((a.flags & 2097155) === 1)
              throw new g.ErrnoError(8);
            if (g.isDir(a.node.mode))
              throw new g.ErrnoError(31);
            if (!a.stream_ops.read)
              throw new g.ErrnoError(28);
            var E = typeof _ < "u";
            if (!E)
              _ = a.position;
            else if (!a.seekable)
              throw new g.ErrnoError(70);
            var w = a.stream_ops.read(a, u, d, m, _);
            return E || (a.position += w),
                w
          },
          write(a, u, d, m, _, E) {
            if (m < 0 || _ < 0)
              throw new g.ErrnoError(28);
            if (g.isClosed(a))
              throw new g.ErrnoError(8);
            if (!(a.flags & 2097155))
              throw new g.ErrnoError(8);
            if (g.isDir(a.node.mode))
              throw new g.ErrnoError(31);
            if (!a.stream_ops.write)
              throw new g.ErrnoError(28);
            a.seekable && a.flags & 1024 && g.llseek(a, 0, 2);
            var w = typeof _ < "u";
            if (!w)
              _ = a.position;
            else if (!a.seekable)
              throw new g.ErrnoError(70);
            var I = a.stream_ops.write(a, u, d, m, _, E);
            return w || (a.position += I),
                I
          },
          allocate(a, u, d) {
            if (g.isClosed(a))
              throw new g.ErrnoError(8);
            if (u < 0 || d <= 0)
              throw new g.ErrnoError(28);
            if (!(a.flags & 2097155))
              throw new g.ErrnoError(8);
            if (!g.isFile(a.node.mode) && !g.isDir(a.node.mode))
              throw new g.ErrnoError(43);
            if (!a.stream_ops.allocate)
              throw new g.ErrnoError(138);
            a.stream_ops.allocate(a, u, d)
          },
          mmap(a, u, d, m, _) {
            if (m & 2 && !(_ & 2) && (a.flags & 2097155) !== 2)
              throw new g.ErrnoError(2);
            if ((a.flags & 2097155) === 1)
              throw new g.ErrnoError(2);
            if (!a.stream_ops.mmap)
              throw new g.ErrnoError(43);
            if (!u)
              throw new g.ErrnoError(28);
            return a.stream_ops.mmap(a, u, d, m, _)
          },
          msync(a, u, d, m, _) {
            return a.stream_ops.msync ? a.stream_ops.msync(a, u, d, m, _) : 0
          },
          ioctl(a, u, d) {
            if (!a.stream_ops.ioctl)
              throw new g.ErrnoError(59);
            return a.stream_ops.ioctl(a, u, d)
          },
          readFile(a, u={}) {
            if (u.flags = u.flags || 0,
                u.encoding = u.encoding || "binary",
            u.encoding !== "utf8" && u.encoding !== "binary")
              throw new Error(`Invalid encoding type "${u.encoding}"`);
            var d, m = g.open(a, u.flags), _ = g.stat(a), E = _.size, w = new Uint8Array(E);
            return g.read(m, w, 0, E, 0),
                u.encoding === "utf8" ? d = wn(w, 0) : u.encoding === "binary" && (d = w),
                g.close(m),
                d
          },
          writeFile(a, u, d={}) {
            d.flags = d.flags || 577;
            var m = g.open(a, d.flags, d.mode);
            if (typeof u == "string") {
              var _ = new Uint8Array(no(u) + 1)
                  , E = to(u, _, 0, _.length);
              g.write(m, _, 0, E, void 0, d.canOwn)
            } else if (ArrayBuffer.isView(u))
              g.write(m, u, 0, u.byteLength, void 0, d.canOwn);
            else
              throw new Error("Unsupported data type");
            g.close(m)
          },
          cwd: () => g.currentPath,
          chdir(a) {
            var u = g.lookupPath(a, {
              follow: !0
            });
            if (u.node === null)
              throw new g.ErrnoError(44);
            if (!g.isDir(u.node.mode))
              throw new g.ErrnoError(54);
            var d = g.nodePermissions(u.node, "x");
            if (d)
              throw new g.ErrnoError(d);
            g.currentPath = u.path
          },
          createDefaultDirectories() {
            g.mkdir("/tmp"),
                g.mkdir("/home"),
                g.mkdir("/home/web_user")
          },
          createDefaultDevices() {
            g.mkdir("/dev"),
                g.registerDevice(g.makedev(1, 3), {
                  read: () => 0,
                  write: (m, _, E, w, I) => w
                }),
                g.mkdev("/dev/null", g.makedev(1, 3)),
                An.register(g.makedev(5, 0), An.default_tty_ops),
                An.register(g.makedev(6, 0), An.default_tty1_ops),
                g.mkdev("/dev/tty", g.makedev(5, 0)),
                g.mkdev("/dev/tty1", g.makedev(6, 0));
            var a = new Uint8Array(1024)
                , u = 0
                , d = i( () => (u === 0 && (u = zc(a).byteLength),
                a[--u]), "randomByte");
            g.createDevice("/dev", "random", d),
                g.createDevice("/dev", "urandom", d),
                g.mkdir("/dev/shm"),
                g.mkdir("/dev/shm/tmp")
          },
          createSpecialDirectories() {
            g.mkdir("/proc");
            var a = g.mkdir("/proc/self");
            g.mkdir("/proc/self/fd"),
                g.mount({
                  mount() {
                    var u = g.createNode(a, "fd", 16895, 73);
                    return u.node_ops = {
                      lookup(d, m) {
                        var _ = +m
                            , E = g.getStreamChecked(_)
                            , w = {
                          parent: null,
                          mount: {
                            mountpoint: "fake"
                          },
                          node_ops: {
                            readlink: () => E.path
                          }
                        };
                        return w.parent = w,
                            w
                      }
                    },
                        u
                  }
                }, {}, "/proc/self/fd")
          },
          createStandardStreams(a, u, d) {
            a ? g.createDevice("/dev", "stdin", a) : g.symlink("/dev/tty", "/dev/stdin"),
                u ? g.createDevice("/dev", "stdout", null, u) : g.symlink("/dev/tty", "/dev/stdout"),
                d ? g.createDevice("/dev", "stderr", null, d) : g.symlink("/dev/tty1", "/dev/stderr"),
                g.open("/dev/stdin", 0),
                g.open("/dev/stdout", 1),
                g.open("/dev/stderr", 1)
          },
          staticInit() {
            [44].forEach(a => {
                  g.genericErrors[a] = new g.ErrnoError(a),
                      g.genericErrors[a].stack = "<generic error, no stack>"
                }
            ),
                g.nameTable = new Array(4096),
                g.mount(ie, {}, "/"),
                g.createDefaultDirectories(),
                g.createDefaultDevices(),
                g.createSpecialDirectories(),
                g.filesystems = {
                  MEMFS: ie
                }
          },
          init(a, u, d) {
            g.initialized = !0,
                a ??= r.stdin,
                u ??= r.stdout,
                d ??= r.stderr,
                g.createStandardStreams(a, u, d)
          },
          quit() {
            g.initialized = !1;
            for (var a = 0; a < g.streams.length; a++) {
              var u = g.streams[a];
              u && g.close(u)
            }
          },
          findObject(a, u) {
            var d = g.analyzePath(a, u);
            return d.exists ? d.object : null
          },
          analyzePath(a, u) {
            try {
              var d = g.lookupPath(a, {
                follow: !u
              });
              a = d.path
            } catch {}
            var m = {
              isRoot: !1,
              exists: !1,
              error: 0,
              name: null,
              path: null,
              object: null,
              parentExists: !1,
              parentPath: null,
              parentObject: null
            };
            try {
              var d = g.lookupPath(a, {
                parent: !0
              });
              m.parentExists = !0,
                  m.parentPath = d.path,
                  m.parentObject = d.node,
                  m.name = Ee.basename(a),
                  d = g.lookupPath(a, {
                    follow: !u
                  }),
                  m.exists = !0,
                  m.path = d.path,
                  m.object = d.node,
                  m.name = d.node.name,
                  m.isRoot = d.path === "/"
            } catch (_) {
              m.error = _.errno
            }
            return m
          },
          createPath(a, u, d, m) {
            a = typeof a == "string" ? a : g.getPath(a);
            for (var _ = u.split("/").reverse(); _.length; ) {
              var E = _.pop();
              if (E) {
                var w = Ee.join2(a, E);
                try {
                  g.mkdir(w)
                } catch {}
                a = w
              }
            }
            return w
          },
          createFile(a, u, d, m, _) {
            var E = Ee.join2(typeof a == "string" ? a : g.getPath(a), u)
                , w = co(m, _);
            return g.create(E, w)
          },
          createDataFile(a, u, d, m, _, E) {
            var w = u;
            a && (a = typeof a == "string" ? a : g.getPath(a),
                w = u ? Ee.join2(a, u) : a);
            var I = co(m, _)
                , A = g.create(w, I);
            if (d) {
              if (typeof d == "string") {
                for (var P = new Array(d.length), $ = 0, j = d.length; $ < j; ++$)
                  P[$] = d.charCodeAt($);
                d = P
              }
              g.chmod(A, I | 146);
              var W = g.open(A, 577);
              g.write(W, d, 0, d.length, 0, E),
                  g.close(W),
                  g.chmod(A, I)
            }
          },
          createDevice(a, u, d, m) {
            var _ = Ee.join2(typeof a == "string" ? a : g.getPath(a), u)
                , E = co(!!d, !!m);
            g.createDevice.major || (g.createDevice.major = 64);
            var w = g.makedev(g.createDevice.major++, 0);
            return g.registerDevice(w, {
              open(I) {
                I.seekable = !1
              },
              close(I) {
                m?.buffer?.length && m(10)
              },
              read(I, A, P, $, j) {
                for (var W = 0, G = 0; G < $; G++) {
                  var K;
                  try {
                    K = d()
                  } catch {
                    throw new g.ErrnoError(29)
                  }
                  if (K === void 0 && W === 0)
                    throw new g.ErrnoError(6);
                  if (K == null)
                    break;
                  W++,
                      A[P + G] = K
                }
                return W && (I.node.timestamp = Date.now()),
                    W
              },
              write(I, A, P, $, j) {
                for (var W = 0; W < $; W++)
                  try {
                    m(A[P + W])
                  } catch {
                    throw new g.ErrnoError(29)
                  }
                return $ && (I.node.timestamp = Date.now()),
                    W
              }
            }),
                g.mkdev(_, E, w)
          },
          forceLoadFile(a) {
            if (a.isDevice || a.isFolder || a.link || a.contents)
              return !0;
            if (typeof XMLHttpRequest < "u")
              throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
            try {
              a.contents = O(a.url),
                  a.usedBytes = a.contents.length
            } catch {
              throw new g.ErrnoError(29)
            }
          },
          createLazyFile(a, u, d, m, _) {
            class E {
              static{i(this, "LazyUint8Array")
              }constructor() {
                this.lengthKnown = !1,
                    this.chunks = []
              }
              get(G) {
                if (!(G > this.length - 1 || G < 0)) {
                  var K = G % this.chunkSize
                      , de = G / this.chunkSize | 0;
                  return this.getter(de)[K]
                }
              }
              setDataGetter(G) {
                this.getter = G
              }
              cacheLength() {
                var G = new XMLHttpRequest;
                if (G.open("HEAD", d, !1),
                    G.send(null),
                    !(G.status >= 200 && G.status < 300 || G.status === 304))
                  throw new Error("Couldn't load " + d + ". Status: " + G.status);
                var K = Number(G.getResponseHeader("Content-length")), de, ke = (de = G.getResponseHeader("Accept-Ranges")) && de === "bytes", be = (de = G.getResponseHeader("Content-Encoding")) && de === "gzip", Se = 1024 * 1024;
                ke || (Se = K);
                var Ge = i( (nt, nn) => {
                      if (nt > nn)
                        throw new Error("invalid range (" + nt + ", " + nn + ") or no bytes requested!");
                      if (nn > K - 1)
                        throw new Error("only " + K + " bytes available! programmer error!");
                      var B = new XMLHttpRequest;
                      if (B.open("GET", d, !1),
                      K !== Se && B.setRequestHeader("Range", "bytes=" + nt + "-" + nn),
                          B.responseType = "arraybuffer",
                      B.overrideMimeType && B.overrideMimeType("text/plain; charset=x-user-defined"),
                          B.send(null),
                          !(B.status >= 200 && B.status < 300 || B.status === 304))
                        throw new Error("Couldn't load " + d + ". Status: " + B.status);
                      return B.response !== void 0 ? new Uint8Array(B.response || []) : io(B.responseText || "", !0)
                    }
                    , "doXHR")
                    , Oe = this;
                Oe.setDataGetter(nt => {
                      var nn = nt * Se
                          , B = (nt + 1) * Se - 1;
                      if (B = Math.min(B, K - 1),
                      typeof Oe.chunks[nt] > "u" && (Oe.chunks[nt] = Ge(nn, B)),
                      typeof Oe.chunks[nt] > "u")
                        throw new Error("doXHR failed!");
                      return Oe.chunks[nt]
                    }
                ),
                (be || !K) && (Se = K = 1,
                    K = this.getter(0).length,
                    Se = K,
                    V("LazyFiles on gzip forces download of the whole file when length is accessed")),
                    this._length = K,
                    this._chunkSize = Se,
                    this.lengthKnown = !0
              }
              get length() {
                return this.lengthKnown || this.cacheLength(),
                    this._length
              }
              get chunkSize() {
                return this.lengthKnown || this.cacheLength(),
                    this._chunkSize
              }
            }
            if (typeof XMLHttpRequest < "u") {
              if (!f)
                throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
              var w = new E
                  , I = {
                isDevice: !1,
                contents: w
              }
            } else
              var I = {
                isDevice: !1,
                url: d
              };
            var A = g.createFile(a, u, I, m, _);
            I.contents ? A.contents = I.contents : I.url && (A.contents = null,
                A.url = I.url),
                Object.defineProperties(A, {
                  usedBytes: {
                    get: function() {
                      return this.contents.length
                    }
                  }
                });
            var P = {}
                , $ = Object.keys(A.stream_ops);
            $.forEach(W => {
                  var G = A.stream_ops[W];
                  P[W] = (...K) => (g.forceLoadFile(A),
                      G(...K))
                }
            );
            function j(W, G, K, de, ke) {
              var be = W.node.contents;
              if (ke >= be.length)
                return 0;
              var Se = Math.min(be.length - ke, de);
              if (be.slice)
                for (var Ge = 0; Ge < Se; Ge++)
                  G[K + Ge] = be[ke + Ge];
              else
                for (var Ge = 0; Ge < Se; Ge++)
                  G[K + Ge] = be.get(ke + Ge);
              return Se
            }
            return i(j, "writeChunks"),
                P.read = (W, G, K, de, ke) => (g.forceLoadFile(A),
                    j(W, G, K, de, ke)),
                P.mmap = (W, G, K, de, ke) => {
                  g.forceLoadFile(A);
                  var be = Wc(G);
                  if (!be)
                    throw new g.ErrnoError(48);
                  return j(W, H, be, G, K),
                      {
                        ptr: be,
                        allocated: !0
                      }
                }
                ,
                A.stream_ops = P,
                A
          }
        }
            , Lr = {
          DEFAULT_POLLMASK: 5,
          calculateAt(a, u, d) {
            if (Ee.isAbs(u))
              return u;
            var m;
            if (a === -100)
              m = g.cwd();
            else {
              var _ = Lr.getStreamFromFD(a);
              m = _.path
            }
            if (u.length == 0) {
              if (!d)
                throw new g.ErrnoError(44);
              return m
            }
            return Ee.join2(m, u)
          },
          doStat(a, u, d) {
            var m = a(u);
            M[d >> 2] = m.dev,
                M[d + 4 >> 2] = m.mode,
                Y[d + 8 >> 2] = m.nlink,
                M[d + 12 >> 2] = m.uid,
                M[d + 16 >> 2] = m.gid,
                M[d + 20 >> 2] = m.rdev,
                De = [m.size >>> 0, (Q = m.size,
                    +Math.abs(Q) >= 1 ? Q > 0 ? +Math.floor(Q / 4294967296) >>> 0 : ~~+Math.ceil((Q - +(~~Q >>> 0)) / 4294967296) >>> 0 : 0)],
                M[d + 24 >> 2] = De[0],
                M[d + 28 >> 2] = De[1],
                M[d + 32 >> 2] = 4096,
                M[d + 36 >> 2] = m.blocks;
            var _ = m.atime.getTime()
                , E = m.mtime.getTime()
                , w = m.ctime.getTime();
            return De = [Math.floor(_ / 1e3) >>> 0, (Q = Math.floor(_ / 1e3),
                +Math.abs(Q) >= 1 ? Q > 0 ? +Math.floor(Q / 4294967296) >>> 0 : ~~+Math.ceil((Q - +(~~Q >>> 0)) / 4294967296) >>> 0 : 0)],
                M[d + 40 >> 2] = De[0],
                M[d + 44 >> 2] = De[1],
                Y[d + 48 >> 2] = _ % 1e3 * 1e3 * 1e3,
                De = [Math.floor(E / 1e3) >>> 0, (Q = Math.floor(E / 1e3),
                    +Math.abs(Q) >= 1 ? Q > 0 ? +Math.floor(Q / 4294967296) >>> 0 : ~~+Math.ceil((Q - +(~~Q >>> 0)) / 4294967296) >>> 0 : 0)],
                M[d + 56 >> 2] = De[0],
                M[d + 60 >> 2] = De[1],
                Y[d + 64 >> 2] = E % 1e3 * 1e3 * 1e3,
                De = [Math.floor(w / 1e3) >>> 0, (Q = Math.floor(w / 1e3),
                    +Math.abs(Q) >= 1 ? Q > 0 ? +Math.floor(Q / 4294967296) >>> 0 : ~~+Math.ceil((Q - +(~~Q >>> 0)) / 4294967296) >>> 0 : 0)],
                M[d + 72 >> 2] = De[0],
                M[d + 76 >> 2] = De[1],
                Y[d + 80 >> 2] = w % 1e3 * 1e3 * 1e3,
                De = [m.ino >>> 0, (Q = m.ino,
                    +Math.abs(Q) >= 1 ? Q > 0 ? +Math.floor(Q / 4294967296) >>> 0 : ~~+Math.ceil((Q - +(~~Q >>> 0)) / 4294967296) >>> 0 : 0)],
                M[d + 88 >> 2] = De[0],
                M[d + 92 >> 2] = De[1],
                0
          },
          doMsync(a, u, d, m, _) {
            if (!g.isFile(u.node.mode))
              throw new g.ErrnoError(43);
            if (m & 2)
              return 0;
            var E = C.slice(a, a + d);
            g.msync(u, E, _, d, m)
          },
          getStreamFromFD(a) {
            var u = g.getStreamChecked(a);
            return u
          },
          varargs: void 0,
          getStr(a) {
            var u = Mr(a);
            return u
          }
        };
        function Xm(a) {
          try {
            var u = Lr.getStreamFromFD(a);
            return g.close(u),
                0
          } catch (d) {
            if (typeof g > "u" || d.name !== "ErrnoError")
              throw d;
            return d.errno
          }
        }
        i(Xm, "_fd_close");
        var Qm = i( (a, u, d, m) => {
              for (var _ = 0, E = 0; E < d; E++) {
                var w = Y[u >> 2]
                    , I = Y[u + 4 >> 2];
                u += 8;
                var A = g.read(a, H, w, I, m);
                if (A < 0)
                  return -1;
                if (_ += A,
                A < I)
                  break;
                typeof m < "u" && (m += A)
              }
              return _
            }
            , "doReadv");
        function Jm(a, u, d, m) {
          try {
            var _ = Lr.getStreamFromFD(a)
                , E = Qm(_, u, d);
            return Y[m >> 2] = E,
                0
          } catch (w) {
            if (typeof g > "u" || w.name !== "ErrnoError")
              throw w;
            return w.errno
          }
        }
        i(Jm, "_fd_read");
        function Zm(a, u, d, m, _) {
          var E = so(u, d);
          try {
            if (isNaN(E))
              return 61;
            var w = Lr.getStreamFromFD(a);
            return g.llseek(w, E, m),
                De = [w.position >>> 0, (Q = w.position,
                    +Math.abs(Q) >= 1 ? Q > 0 ? +Math.floor(Q / 4294967296) >>> 0 : ~~+Math.ceil((Q - +(~~Q >>> 0)) / 4294967296) >>> 0 : 0)],
                M[_ >> 2] = De[0],
                M[_ + 4 >> 2] = De[1],
            w.getdents && E === 0 && m === 0 && (w.getdents = null),
                0
          } catch (I) {
            if (typeof g > "u" || I.name !== "ErrnoError")
              throw I;
            return I.errno
          }
        }
        i(Zm, "_fd_seek");
        var ey = i( (a, u, d, m) => {
              for (var _ = 0, E = 0; E < d; E++) {
                var w = Y[u >> 2]
                    , I = Y[u + 4 >> 2];
                u += 8;
                var A = g.write(a, H, w, I, m);
                if (A < 0)
                  return -1;
                if (_ += A,
                A < I)
                  break;
                typeof m < "u" && (m += A)
              }
              return _
            }
            , "doWritev");
        function ty(a, u, d, m) {
          try {
            var _ = Lr.getStreamFromFD(a)
                , E = ey(_, u, d);
            return Y[m >> 2] = E,
                0
          } catch (w) {
            if (typeof g > "u" || w.name !== "ErrnoError")
              throw w;
            return w.errno
          }
        }
        i(ty, "_fd_write"),
            mp(),
            kc = r.BindingError = class extends Error {
              static{i(this, "BindingError")
              }constructor(u) {
                super(u),
                    this.name = "BindingError"
              }
            }
            ,
            Oc = r.InternalError = class extends Error {
              static{i(this, "InternalError")
              }constructor(u) {
                super(u),
                    this.name = "InternalError"
              }
            }
            ,
            Sp(),
            Fc = r.UnboundTypeError = Fp(Error, "UnboundTypeError"),
            g.createPreloadedFile = Ym,
            g.staticInit();
        var ny = {
          b: dp,
          y: hp,
          x: pp,
          I: _p,
          H: bp,
          r: Ip,
          g: Up,
          i: $p,
          e: Hp,
          q: jp,
          j: Kp,
          J: Xp,
          E: Qp,
          l: Zp,
          a: Zi,
          m: rm,
          K: sm,
          n: im,
          f: om,
          h: am,
          k: cm,
          c: um,
          d: lm,
          t: fm,
          u: mm,
          v: gm,
          A: _m,
          p: vm,
          s: Om,
          z: Tm,
          B: Mm,
          C: Fm,
          G: $m,
          F: Xm,
          D: Jm,
          w: Zm,
          o: ty
        }
            , Ce = _e()
            , Vc = i(a => (Vc = Ce.N)(a), "___getTypeName")
            , $t = r._free = a => ($t = r._free = Ce.O)(a)
            , uo = r._malloc = a => (uo = r._malloc = Ce.Q)(a)
            , Gc = i( (a, u) => (Gc = Ce.R)(a, u), "_emscripten_builtin_memalign")
            , Yc = i( () => (Yc = Ce.S)(), "___trap")
            , Kc = i(a => (Kc = Ce.T)(a), "__emscripten_tempret_set");
        r.dynCall_iiji = (a, u, d, m, _) => (r.dynCall_iiji = Ce.U)(a, u, d, m, _),
            r.dynCall_jii = (a, u, d) => (r.dynCall_jii = Ce.V)(a, u, d),
            r.dynCall_viij = (a, u, d, m, _) => (r.dynCall_viij = Ce.W)(a, u, d, m, _),
            r.dynCall_jiji = (a, u, d, m, _) => (r.dynCall_jiji = Ce.X)(a, u, d, m, _),
            r.dynCall_ji = (a, u) => (r.dynCall_ji = Ce.Y)(a, u),
            r.dynCall_iijii = (a, u, d, m, _, E) => (r.dynCall_iijii = Ce.Z)(a, u, d, m, _, E),
            r.dynCall_viijii = (a, u, d, m, _, E, w) => (r.dynCall_viijii = Ce._)(a, u, d, m, _, E, w),
            r.dynCall_iiiiij = (a, u, d, m, _, E, w) => (r.dynCall_iiiiij = Ce.$)(a, u, d, m, _, E, w),
            r.dynCall_iiiiijj = (a, u, d, m, _, E, w, I, A) => (r.dynCall_iiiiijj = Ce.aa)(a, u, d, m, _, E, w, I, A),
            r.dynCall_iiiiiijj = (a, u, d, m, _, E, w, I, A, P) => (r.dynCall_iiiiiijj = Ce.ba)(a, u, d, m, _, E, w, I, A, P),
            r.wasmMemory = N;
        var Rs;
        en = i(function a() {
          Rs || Xc(),
          Rs || (en = a)
        }, "runCaller");
        function Xc() {
          if (_t > 0 || (Xi(),
          _t > 0))
            return;
          function a() {
            Rs || (Rs = !0,
                r.calledRun = !0,
            !F && (Wn(),
                s(r),
                r.onRuntimeInitialized?.(),
                bn()))
          }
          i(a, "doRun"),
              r.setStatus ? (r.setStatus("Running..."),
                  setTimeout( () => {
                        setTimeout( () => r.setStatus(""), 1),
                            a()
                      }
                      , 1)) : a()
        }
        if (i(Xc, "run"),
            r.preInit)
          for (typeof r.preInit == "function" && (r.preInit = [r.preInit]); r.preInit.length > 0; )
            r.preInit.pop()();
        return Xc(),
            n = c,
            n
      }
    }
)();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const tf = Symbol("Comlink.proxy")
    , cy = Symbol("Comlink.endpoint")
    , uy = Symbol("Comlink.releaseProxy")
    , fo = Symbol("Comlink.finalizer")
    , zs = Symbol("Comlink.thrown")
    , nf = i(e => typeof e == "object" && e !== null || typeof e == "function", "isObject$1")
    , ly = {
  canHandle: e => nf(e) && e[tf],
  serialize(e) {
    const {port1: t, port2: n} = new MessageChannel;
    return ba(e, t),
        [n, [n]]
  },
  deserialize(e) {
    return e.start(),
        py(e)
  }
}
    , fy = {
  canHandle: e => nf(e) && zs in e,
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
    , rf = new Map([["proxy", ly], ["throw", fy]]);
function dy(e, t) {
  for (const n of e)
    if (t === n || n === "*" || n instanceof RegExp && n.test(t))
      return !0;
  return !1
}
i(dy, "isAllowedOrigin");
function ba(e, t=globalThis, n=["*"]) {
  t.addEventListener("message", i(function r(s) {
    if (!s || !s.data)
      return;
    if (!dy(n, s.origin)) {
      `${s.origin}`;
      return
    }
    const {id: o, type: c, path: l} = Object.assign({
      path: []
    }, s.data)
        , f = (s.data.argumentList || []).map(kn);
    let h;
    try {
      const p = l.slice(0, -1).reduce( (v, b) => v[b], e)
          , y = l.reduce( (v, b) => v[b], e);
      switch (c) {
        case "GET":
          h = y;
          break;
        case "SET":
          p[l.slice(-1)[0]] = kn(s.data.value),
              h = !0;
          break;
        case "APPLY":
          h = y.apply(p, f);
          break;
        case "CONSTRUCT":
        {
          const v = new y(...f);
          h = vy(v)
        }
          break;
        case "ENDPOINT":
        {
          const {port1: v, port2: b} = new MessageChannel;
          ba(e, b),
              h = _y(v, [v])
        }
          break;
        case "RELEASE":
          h = void 0;
          break;
        default:
          return
      }
    } catch (p) {
      h = {
        value: p,
        [zs]: 0
      }
    }
    Promise.resolve(h).catch(p => ({
      value: p,
      [zs]: 0
    })).then(p => {
          const [y,v] = ii(p);
          t.postMessage(Object.assign(Object.assign({}, y), {
            id: o
          }), v),
          c === "RELEASE" && (t.removeEventListener("message", r),
              sf(t),
          fo in e && typeof e[fo] == "function" && e[fo]())
        }
    ).catch(p => {
          const [y,v] = ii({
            value: new TypeError("Unserializable return value"),
            [zs]: 0
          });
          t.postMessage(Object.assign(Object.assign({}, y), {
            id: o
          }), v)
        }
    )
  }, "callback")),
  t.start && t.start()
}
i(ba, "expose");
function hy(e) {
  return e.constructor.name === "MessagePort"
}
i(hy, "isMessagePort");
function sf(e) {
  hy(e) && e.close()
}
i(sf, "closeEndPoint");
function py(e, t) {
  const n = new Map;
  return e.addEventListener("message", i(function(s) {
    const {data: o} = s;
    if (!o || !o.id)
      return;
    const c = n.get(o.id);
    if (c)
      try {
        c(o)
      } finally {
        n.delete(o.id)
      }
  }, "handleMessage")),
      xo(e, n, [], t)
}
i(py, "wrap$1");
function ks(e) {
  if (e)
    throw new Error("Proxy has been released and is not useable")
}
i(ks, "throwIfProxyReleased");
function of(e) {
  return Zn(e, new Map, {
    type: "RELEASE"
  }).then( () => {
        sf(e)
      }
  )
}
i(of, "releaseEndpoint");
const ri = new WeakMap
    , si = "FinalizationRegistry"in globalThis && new FinalizationRegistry(e => {
      const t = (ri.get(e) || 0) - 1;
      ri.set(e, t),
      t === 0 && of(e)
    }
);
function my(e, t) {
  const n = (ri.get(t) || 0) + 1;
  ri.set(t, n),
  si && si.register(e, t, e)
}
i(my, "registerProxy");
function yy(e) {
  si && si.unregister(e)
}
i(yy, "unregisterProxy");
function xo(e, t, n=[], r=function() {}
) {
  let s = !1;
  const o = new Proxy(r,{
    get(c, l) {
      if (ks(s),
      l === uy)
        return () => {
          yy(o),
              of(e),
              t.clear(),
              s = !0
        }
            ;
      if (l === "then") {
        if (n.length === 0)
          return {
            then: () => o
          };
        const f = Zn(e, t, {
          type: "GET",
          path: n.map(h => h.toString())
        }).then(kn);
        return f.then.bind(f)
      }
      return xo(e, t, [...n, l])
    },
    set(c, l, f) {
      ks(s);
      const [h,p] = ii(f);
      return Zn(e, t, {
        type: "SET",
        path: [...n, l].map(y => y.toString()),
        value: h
      }, p).then(kn)
    },
    apply(c, l, f) {
      ks(s);
      const h = n[n.length - 1];
      if (h === cy)
        return Zn(e, t, {
          type: "ENDPOINT"
        }).then(kn);
      if (h === "bind")
        return xo(e, t, n.slice(0, -1));
      const [p,y] = Zc(f);
      return Zn(e, t, {
        type: "APPLY",
        path: n.map(v => v.toString()),
        argumentList: p
      }, y).then(kn)
    },
    construct(c, l) {
      ks(s);
      const [f,h] = Zc(l);
      return Zn(e, t, {
        type: "CONSTRUCT",
        path: n.map(p => p.toString()),
        argumentList: f
      }, h).then(kn)
    }
  });
  return my(o, e),
      o
}
i(xo, "createProxy");
function gy(e) {
  return Array.prototype.concat.apply([], e)
}
i(gy, "myFlat");
function Zc(e) {
  const t = e.map(ii);
  return [t.map(n => n[0]), gy(t.map(n => n[1]))]
}
i(Zc, "processArguments");
const af = new WeakMap;
function _y(e, t) {
  return af.set(e, t),
      e
}
i(_y, "transfer");
function vy(e) {
  return Object.assign(e, {
    [tf]: !0
  })
}
i(vy, "proxy");
function ii(e) {
  for (const [t,n] of rf)
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
  }, af.get(e) || []]
}
i(ii, "toWireValue");
function kn(e) {
  switch (e.type) {
    case "HANDLER":
      return rf.get(e.name).deserialize(e.value);
    case "RAW":
      return e.value
  }
}
i(kn, "fromWireValue");
function Zn(e, t, n, r) {
  return new Promise(s => {
        const o = Sy();
        t.set(o, s),
        e.start && e.start(),
            e.postMessage(Object.assign({
              id: o
            }, n), r)
      }
  )
}
i(Zn, "requestResponseMessage");
function Sy() {
  return new Array(4).fill(0).map( () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-")
}
i(Sy, "generateUUID");
function cf(e, t) {
  return i(function() {
    return e.apply(t, arguments)
  }, "wrap")
}
i(cf, "bind");
const {toString: Ey} = Object.prototype
    , {getPrototypeOf: wa} = Object
    , ki = (e => t => {
      const n = Ey.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
    }
)(Object.create(null))
    , Mt = i(e => (e = e.toLowerCase(),
    t => ki(t) === e), "kindOfTest")
    , Oi = i(e => t => typeof t === e, "typeOfTest")
    , {isArray: _r} = Array
    , Qr = Oi("undefined");
function by(e) {
  return e !== null && !Qr(e) && e.constructor !== null && !Qr(e.constructor) && mt(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
i(by, "isBuffer");
const uf = Mt("ArrayBuffer");
function wy(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && uf(e.buffer),
      t
}
i(wy, "isArrayBufferView");
const Iy = Oi("string")
    , mt = Oi("function")
    , lf = Oi("number")
    , Pi = i(e => e !== null && typeof e == "object", "isObject")
    , Ry = i(e => e === !0 || e === !1, "isBoolean")
    , Ws = i(e => {
      if (ki(e) !== "object")
        return !1;
      const t = wa(e);
      return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    }
    , "isPlainObject$2")
    , Ay = Mt("Date")
    , ky = Mt("File")
    , Oy = Mt("Blob")
    , Py = Mt("FileList")
    , Ny = i(e => Pi(e) && mt(e.pipe), "isStream")
    , Ty = i(e => {
      let t;
      return e && (typeof FormData == "function" && e instanceof FormData || mt(e.append) && ((t = ki(e)) === "formdata" || t === "object" && mt(e.toString) && e.toString() === "[object FormData]"))
    }
    , "isFormData")
    , xy = Mt("URLSearchParams")
    , Cy = i(e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), "trim");
function os(e, t, {allOwnKeys: n=!1}={}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]),
      _r(e))
    for (r = 0,
             s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
        , c = o.length;
    let l;
    for (r = 0; r < c; r++)
      l = o[r],
          t.call(null, e[l], l, e)
  }
}
i(os, "forEach");
function ff(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r],
    t === s.toLowerCase())
      return s;
  return null
}
i(ff, "findKey");
const df = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
    , hf = i(e => !Qr(e) && e !== df, "isContextDefined");
function Co() {
  const {caseless: e} = hf(this) && this || {}
      , t = {}
      , n = i( (r, s) => {
        const o = e && ff(t, s) || s;
        Ws(t[o]) && Ws(r) ? t[o] = Co(t[o], r) : Ws(r) ? t[o] = Co({}, r) : _r(r) ? t[o] = r.slice() : t[o] = r
      }
      , "assignValue");
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && os(arguments[r], n);
  return t
}
i(Co, "merge");
const My = i( (e, t, n, {allOwnKeys: r}={}) => (os(t, (s, o) => {
      n && mt(s) ? e[o] = cf(s, n) : e[o] = s
    }
    , {
      allOwnKeys: r
    }),
    e), "extend")
    , Fy = i(e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
    e), "stripBOM")
    , Dy = i( (e, t, n, r) => {
      e.prototype = Object.create(t.prototype, r),
          e.prototype.constructor = e,
          Object.defineProperty(e, "super", {
            value: t.prototype
          }),
      n && Object.assign(e.prototype, n)
    }
    , "inherits")
    , Ly = i( (e, t, n, r) => {
      let s, o, c;
      const l = {};
      if (t = t || {},
      e == null)
        return t;
      do {
        for (s = Object.getOwnPropertyNames(e),
                 o = s.length; o-- > 0; )
          c = s[o],
          (!r || r(c, e, t)) && !l[c] && (t[c] = e[c],
              l[c] = !0);
        e = n !== !1 && wa(e)
      } while (e && (!n || n(e, t)) && e !== Object.prototype);
      return t
    }
    , "toFlatObject")
    , Uy = i( (e, t, n) => {
      e = String(e),
      (n === void 0 || n > e.length) && (n = e.length),
          n -= t.length;
      const r = e.indexOf(t, n);
      return r !== -1 && r === n
    }
    , "endsWith")
    , By = i(e => {
      if (!e)
        return null;
      if (_r(e))
        return e;
      let t = e.length;
      if (!lf(t))
        return null;
      const n = new Array(t);
      for (; t-- > 0; )
        n[t] = e[t];
      return n
    }
    , "toArray")
    , $y = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && wa(Uint8Array))
    , Hy = i( (e, t) => {
      const r = (e && e[Symbol.iterator]).call(e);
      let s;
      for (; (s = r.next()) && !s.done; ) {
        const o = s.value;
        t.call(e, o[0], o[1])
      }
    }
    , "forEachEntry")
    , jy = i( (e, t) => {
      let n;
      const r = [];
      for (; (n = e.exec(t)) !== null; )
        r.push(n);
      return r
    }
    , "matchAll")
    , qy = Mt("HTMLFormElement")
    , zy = i(e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, i(function(n, r, s) {
  return r.toUpperCase() + s
}, "replacer")), "toCamelCase")
    , eu = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
    , Wy = Mt("RegExp")
    , pf = i( (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e)
          , r = {};
      os(n, (s, o) => {
            let c;
            (c = t(s, o, e)) !== !1 && (r[o] = c || s)
          }
      ),
          Object.defineProperties(e, r)
    }
    , "reduceDescriptors")
    , Vy = i(e => {
      pf(e, (t, n) => {
            if (mt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
              return !1;
            const r = e[n];
            if (mt(r)) {
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
    , Gy = i( (e, t) => {
      const n = {}
          , r = i(s => {
            s.forEach(o => {
                  n[o] = !0
                }
            )
          }
          , "define");
      return _r(e) ? r(e) : r(String(e).split(t)),
          n
    }
    , "toObjectSet")
    , Yy = i( () => {}
    , "noop$1")
    , Ky = i( (e, t) => (e = +e,
    Number.isFinite(e) ? e : t), "toFiniteNumber")
    , ho = "abcdefghijklmnopqrstuvwxyz"
    , tu = "0123456789"
    , mf = {
  DIGIT: tu,
  ALPHA: ho,
  ALPHA_DIGIT: ho + ho.toUpperCase() + tu
}
    , Xy = i( (e=16, t=mf.ALPHA_DIGIT) => {
      let n = "";
      const {length: r} = t;
      for (; e--; )
        n += t[Math.random() * r | 0];
      return n
    }
    , "generateString");
function Qy(e) {
  return !!(e && mt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
i(Qy, "isSpecCompliantForm");
const Jy = i(e => {
      const t = new Array(10)
          , n = i( (r, s) => {
            if (Pi(r)) {
              if (t.indexOf(r) >= 0)
                return;
              if (!("toJSON"in r)) {
                t[s] = r;
                const o = _r(r) ? [] : {};
                return os(r, (c, l) => {
                      const f = n(c, s + 1);
                      !Qr(f) && (o[l] = f)
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
    , Zy = Mt("AsyncFunction")
    , eg = i(e => e && (Pi(e) || mt(e)) && mt(e.then) && mt(e.catch), "isThenable$1");
var T = {
  isArray: _r,
  isArrayBuffer: uf,
  isBuffer: by,
  isFormData: Ty,
  isArrayBufferView: wy,
  isString: Iy,
  isNumber: lf,
  isBoolean: Ry,
  isObject: Pi,
  isPlainObject: Ws,
  isUndefined: Qr,
  isDate: Ay,
  isFile: ky,
  isBlob: Oy,
  isRegExp: Wy,
  isFunction: mt,
  isStream: Ny,
  isURLSearchParams: xy,
  isTypedArray: $y,
  isFileList: Py,
  forEach: os,
  merge: Co,
  extend: My,
  trim: Cy,
  stripBOM: Fy,
  inherits: Dy,
  toFlatObject: Ly,
  kindOf: ki,
  kindOfTest: Mt,
  endsWith: Uy,
  toArray: By,
  forEachEntry: Hy,
  matchAll: jy,
  isHTMLForm: qy,
  hasOwnProperty: eu,
  hasOwnProp: eu,
  reduceDescriptors: pf,
  freezeMethods: Vy,
  toObjectSet: Gy,
  toCamelCase: zy,
  noop: Yy,
  toFiniteNumber: Ky,
  findKey: ff,
  global: df,
  isContextDefined: hf,
  ALPHABET: mf,
  generateString: Xy,
  isSpecCompliantForm: Qy,
  toJSONObject: Jy,
  isAsyncFn: Zy,
  isThenable: eg
};
function pe(e, t, n, r, s) {
  Error.call(this),
      Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
      this.message = e,
      this.name = "AxiosError",
  t && (this.code = t),
  n && (this.config = n),
  r && (this.request = r),
  s && (this.response = s)
}
i(pe, "AxiosError");
T.inherits(pe, Error, {
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
      config: T.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    }
  }, "toJSON")
});
const yf = pe.prototype
    , gf = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
      gf[e] = {
        value: e
      }
    }
);
Object.defineProperties(pe, gf);
Object.defineProperty(yf, "isAxiosError", {
  value: !0
});
pe.from = (e, t, n, r, s, o) => {
  const c = Object.create(yf);
  return T.toFlatObject(e, c, i(function(f) {
    return f !== Error.prototype
  }, "filter"), l => l !== "isAxiosError"),
      pe.call(c, e.message, t, n, r, s),
      c.cause = e,
      c.name = e.name,
  o && Object.assign(c, o),
      c
}
;
var tg = null;
function Mo(e) {
  return T.isPlainObject(e) || T.isArray(e)
}
i(Mo, "isVisitable");
function _f(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e
}
i(_f, "removeBrackets");
function nu(e, t, n) {
  return e ? e.concat(t).map(i(function(s, o) {
    return s = _f(s),
        !n && o ? "[" + s + "]" : s
  }, "each")).join(n ? "." : "") : t
}
i(nu, "renderKey");
function ng(e) {
  return T.isArray(e) && !e.some(Mo)
}
i(ng, "isFlatArray");
const rg = T.toFlatObject(T, {}, null, i(function(t) {
  return /^is[A-Z]/.test(t)
}, "filter"));
function Ni(e, t, n) {
  if (!T.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData,
      n = T.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
      }, !1, i(function(R, k) {
        return !T.isUndefined(k[R])
      }, "defined"));
  const r = n.metaTokens
      , s = n.visitor || p
      , o = n.dots
      , c = n.indexes
      , f = (n.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(t);
  if (!T.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(S) {
    if (S === null)
      return "";
    if (T.isDate(S))
      return S.toISOString();
    if (!f && T.isBlob(S))
      throw new pe("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(S) || T.isTypedArray(S) ? f && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S
  }
  i(h, "convertValue");
  function p(S, R, k) {
    let O = S;
    if (S && !k && typeof S == "object") {
      if (T.endsWith(R, "{}"))
        R = r ? R : R.slice(0, -2),
            S = JSON.stringify(S);
      else if (T.isArray(S) && ng(S) || (T.isFileList(S) || T.endsWith(R, "[]")) && (O = T.toArray(S)))
        return R = _f(R),
            O.forEach(i(function(U, V) {
              !(T.isUndefined(U) || U === null) && t.append(c === !0 ? nu([R], V, o) : c === null ? R : R + "[]", h(U))
            }, "each")),
            !1
    }
    return Mo(S) ? !0 : (t.append(nu(k, R, o), h(S)),
        !1)
  }
  i(p, "defaultVisitor");
  const y = []
      , v = Object.assign(rg, {
    defaultVisitor: p,
    convertValue: h,
    isVisitable: Mo
  });
  function b(S, R) {
    if (!T.isUndefined(S)) {
      if (y.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + R.join("."));
      y.push(S),
          T.forEach(S, i(function(O, L) {
            (!(T.isUndefined(O) || O === null) && s.call(t, O, T.isString(L) ? L.trim() : L, R, v)) === !0 && b(O, R ? R.concat(L) : [L])
          }, "each")),
          y.pop()
    }
  }
  if (i(b, "build"),
      !T.isObject(e))
    throw new TypeError("data must be an object");
  return b(e),
      t
}
i(Ni, "toFormData");
function ru(e) {
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
i(ru, "encode$1");
function Ia(e, t) {
  this._pairs = [],
  e && Ni(e, this, t)
}
i(Ia, "AxiosURLSearchParams");
const vf = Ia.prototype;
vf.append = i(function(t, n) {
  this._pairs.push([t, n])
}, "append");
vf.toString = i(function(t) {
  const n = t ? function(r) {
        return t.call(this, r, ru)
      }
      : ru;
  return this._pairs.map(i(function(s) {
    return n(s[0]) + "=" + n(s[1])
  }, "each"), "").join("&")
}, "toString");
function sg(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
i(sg, "encode");
function Sf(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || sg
      , s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = T.isURLSearchParams(t) ? t.toString() : new Ia(t,n).toString(r),
      o) {
    const c = e.indexOf("#");
    c !== -1 && (e = e.slice(0, c)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + o
  }
  return e
}
i(Sf, "buildURL");
class su {
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
    T.forEach(this.handlers, i(function(r) {
      r !== null && t(r)
    }, "forEachHandler"))
  }
}
var Ef = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}
    , ig = typeof URLSearchParams < "u" ? URLSearchParams : Ia
    , og = typeof FormData < "u" ? FormData : null
    , ag = typeof Blob < "u" ? Blob : null
    , cg = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ig,
    FormData: og,
    Blob: ag
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const bf = typeof window < "u" && typeof document < "u"
    , ug = (e => bf && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product)
    , lg = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function";
var fg = Object.freeze({
  __proto__: null,
  hasBrowserEnv: bf,
  hasStandardBrowserEnv: ug,
  hasStandardBrowserWebWorkerEnv: lg
})
    , xt = {
  ...fg,
  ...cg
};
function dg(e, t) {
  return Ni(e, new xt.classes.URLSearchParams, Object.assign({
    visitor: function(n, r, s, o) {
      return xt.isNode && T.isBuffer(n) ? (this.append(r, n.toString("base64")),
          !1) : o.defaultVisitor.apply(this, arguments)
    }
  }, t))
}
i(dg, "toURLEncodedForm");
function hg(e) {
  return T.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
i(hg, "parsePropPath");
function pg(e) {
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
i(pg, "arrayToObject");
function wf(e) {
  function t(n, r, s, o) {
    let c = n[o++];
    if (c === "__proto__")
      return !0;
    const l = Number.isFinite(+c)
        , f = o >= n.length;
    return c = !c && T.isArray(s) ? s.length : c,
        f ? (T.hasOwnProp(s, c) ? s[c] = [s[c], r] : s[c] = r,
            !l) : ((!s[c] || !T.isObject(s[c])) && (s[c] = []),
        t(n, r, s[c], o) && T.isArray(s[c]) && (s[c] = pg(s[c])),
            !l)
  }
  if (i(t, "buildPath"),
  T.isFormData(e) && T.isFunction(e.entries)) {
    const n = {};
    return T.forEachEntry(e, (r, s) => {
          t(hg(r), s, n, 0)
        }
    ),
        n
  }
  return null
}
i(wf, "formDataToJSON");
function mg(e, t, n) {
  if (T.isString(e))
    try {
      return (t || JSON.parse)(e),
          T.trim(e)
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r
    }
  return (n || JSON.stringify)(e)
}
i(mg, "stringifySafely");
const Ra = {
  transitional: Ef,
  adapter: ["xhr", "http"],
  transformRequest: [i(function(t, n) {
    const r = n.getContentType() || ""
        , s = r.indexOf("application/json") > -1
        , o = T.isObject(t);
    if (o && T.isHTMLForm(t) && (t = new FormData(t)),
        T.isFormData(t))
      return s ? JSON.stringify(wf(t)) : t;
    if (T.isArrayBuffer(t) || T.isBuffer(t) || T.isStream(t) || T.isFile(t) || T.isBlob(t))
      return t;
    if (T.isArrayBufferView(t))
      return t.buffer;
    if (T.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
          t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return dg(t, this.formSerializer).toString();
      if ((l = T.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Ni(l ? {
          "files[]": t
        } : t, f && new f, this.formSerializer)
      }
    }
    return o || s ? (n.setContentType("application/json", !1),
        mg(t)) : t
  }, "transformRequest")],
  transformResponse: [i(function(t) {
    const n = this.transitional || Ra.transitional
        , r = n && n.forcedJSONParsing
        , s = this.responseType === "json";
    if (t && T.isString(t) && (r && !this.responseType || s)) {
      const c = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t)
      } catch (l) {
        if (c)
          throw l.name === "SyntaxError" ? pe.from(l, pe.ERR_BAD_RESPONSE, this, null, this.response) : l
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
    FormData: xt.classes.FormData,
    Blob: xt.classes.Blob
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
T.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
      Ra.headers[e] = {}
    }
);
var Aa = Ra;
const yg = T.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
var gg = i(e => {
      const t = {};
      let n, r, s;
      return e && e.split(`
`).forEach(i(function(c) {
        s = c.indexOf(":"),
            n = c.substring(0, s).trim().toLowerCase(),
            r = c.substring(s + 1).trim(),
        !(!n || t[n] && yg[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
      }, "parser")),
          t
    }
    , "parseHeaders");
const iu = Symbol("internals");
function $r(e) {
  return e && String(e).trim().toLowerCase()
}
i($r, "normalizeHeader");
function Vs(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(Vs) : String(e)
}
i(Vs, "normalizeValue");
function _g(e) {
  const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t
}
i(_g, "parseTokens");
const vg = i(e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()), "isValidHeaderName");
function po(e, t, n, r, s) {
  if (T.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n),
      !!T.isString(t)) {
    if (T.isString(r))
      return t.indexOf(r) !== -1;
    if (T.isRegExp(r))
      return r.test(t)
  }
}
i(po, "matchHeaderValue");
function Sg(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
i(Sg, "formatHeader");
function Eg(e, t) {
  const n = T.toCamelCase(" " + t);
  ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
          value: function(s, o, c) {
            return this[r].call(this, t, s, o, c)
          },
          configurable: !0
        })
      }
  )
}
i(Eg, "buildAccessors");
class Ti {
  static{i(this, "AxiosHeaders")
  }constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const s = this;
    function o(l, f, h) {
      const p = $r(f);
      if (!p)
        throw new Error("header name must be a non-empty string");
      const y = T.findKey(s, p);
      (!y || s[y] === void 0 || h === !0 || h === void 0 && s[y] !== !1) && (s[y || f] = Vs(l))
    }
    i(o, "setHeader");
    const c = i( (l, f) => T.forEach(l, (h, p) => o(h, p, f)), "setHeaders");
    return T.isPlainObject(t) || t instanceof this.constructor ? c(t, n) : T.isString(t) && (t = t.trim()) && !vg(t) ? c(gg(t), n) : t != null && o(n, t, r),
        this
  }
  get(t, n) {
    if (t = $r(t),
        t) {
      const r = T.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return _g(s);
        if (T.isFunction(n))
          return n.call(this, s, r);
        if (T.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function")
      }
    }
  }
  has(t, n) {
    if (t = $r(t),
        t) {
      const r = T.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || po(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(c) {
      if (c = $r(c),
          c) {
        const l = T.findKey(r, c);
        l && (!n || po(r, r[l], l, n)) && (delete r[l],
            s = !0)
      }
    }
    return i(o, "deleteHeader"),
        T.isArray(t) ? t.forEach(o) : o(t),
        s
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length
        , s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || po(this, this[o], o, t, !0)) && (delete this[o],
          s = !0)
    }
    return s
  }
  normalize(t) {
    const n = this
        , r = {};
    return T.forEach(this, (s, o) => {
          const c = T.findKey(r, o);
          if (c) {
            n[c] = Vs(s),
                delete n[o];
            return
          }
          const l = t ? Sg(o) : String(o).trim();
          l !== o && delete n[o],
              n[l] = Vs(s),
              r[l] = !0
        }
    ),
        this
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null);
    return T.forEach(this, (r, s) => {
          r != null && r !== !1 && (n[s] = t && T.isArray(r) ? r.join(", ") : r)
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
    const r = (this[iu] = this[iu] = {
      accessors: {}
    }).accessors
        , s = this.prototype;
    function o(c) {
      const l = $r(c);
      r[l] || (Eg(s, c),
          r[l] = !0)
    }
    return i(o, "defineAccessor"),
        T.isArray(t) ? t.forEach(o) : o(t),
        this
  }
}
Ti.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.reduceDescriptors(Ti.prototype, ({value: e}, t) => {
      let n = t[0].toUpperCase() + t.slice(1);
      return {
        get: () => e,
        set(r) {
          this[n] = r
        }
      }
    }
);
T.freezeMethods(Ti);
var Vt = Ti;
function mo(e, t) {
  const n = this || Aa
      , r = t || n
      , s = Vt.from(r.headers);
  let o = r.data;
  return T.forEach(e, i(function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0)
  }, "transform")),
      s.normalize(),
      o
}
i(mo, "transformData");
function If(e) {
  return !!(e && e.__CANCEL__)
}
i(If, "isCancel");
function as(e, t, n) {
  pe.call(this, e ?? "canceled", pe.ERR_CANCELED, t, n),
      this.name = "CanceledError"
}
i(as, "CanceledError");
T.inherits(as, pe, {
  __CANCEL__: !0
});
function bg(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new pe("Request failed with status code " + n.status,[pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
i(bg, "settle");
var wg = xt.hasStandardBrowserEnv ? {
  write(e, t, n, r, s, o) {
    const c = [e + "=" + encodeURIComponent(t)];
    T.isNumber(n) && c.push("expires=" + new Date(n).toGMTString()),
    T.isString(r) && c.push("path=" + r),
    T.isString(s) && c.push("domain=" + s),
    o === !0 && c.push("secure"),
        document.cookie = c.join("; ")
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
function Ig(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
i(Ig, "isAbsoluteURL");
function Rg(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
i(Rg, "combineURLs");
function Rf(e, t) {
  return e && !Ig(t) ? Rg(e, t) : t
}
i(Rf, "buildFullPath");
var Ag = xt.hasStandardBrowserEnv ? i(function() {
  const t = /(msie|trident)/i.test(navigator.userAgent)
      , n = document.createElement("a");
  let r;
  function s(o) {
    let c = o;
    return t && (n.setAttribute("href", c),
        c = n.href),
        n.setAttribute("href", c),
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
      i(function(c) {
        const l = T.isString(c) ? s(c) : c;
        return l.protocol === r.protocol && l.host === r.host
      }, "isURLSameOrigin")
}, "standardBrowserEnv")() : i(function() {
  return i(function() {
    return !0
  }, "isURLSameOrigin")
}, "nonStandardBrowserEnv")();
function kg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || ""
}
i(kg, "parseProtocol");
function Og(e, t) {
  e = e || 10;
  const n = new Array(e)
      , r = new Array(e);
  let s = 0, o = 0, c;
  return t = t !== void 0 ? t : 1e3,
      i(function(f) {
        const h = Date.now()
            , p = r[o];
        c || (c = h),
            n[s] = f,
            r[s] = h;
        let y = o
            , v = 0;
        for (; y !== s; )
          v += n[y++],
              y = y % e;
        if (s = (s + 1) % e,
        s === o && (o = (o + 1) % e),
        h - c < t)
          return;
        const b = p && h - p;
        return b ? Math.round(v * 1e3 / b) : void 0
      }, "push")
}
i(Og, "speedometer");
function ou(e, t) {
  let n = 0;
  const r = Og(50, 250);
  return s => {
    const o = s.loaded
        , c = s.lengthComputable ? s.total : void 0
        , l = o - n
        , f = r(l)
        , h = o <= c;
    n = o;
    const p = {
      loaded: o,
      total: c,
      progress: c ? o / c : void 0,
      bytes: l,
      rate: f || void 0,
      estimated: f && c && h ? (c - o) / f : void 0,
      event: s
    };
    p[t ? "download" : "upload"] = !0,
        e(p)
  }
}
i(ou, "progressEventReducer");
const Pg = typeof XMLHttpRequest < "u";
var Ng = Pg && function(e) {
      return new Promise(i(function(n, r) {
        let s = e.data;
        const o = Vt.from(e.headers).normalize();
        let {responseType: c, withXSRFToken: l} = e, f;
        function h() {
          e.cancelToken && e.cancelToken.unsubscribe(f),
          e.signal && e.signal.removeEventListener("abort", f)
        }
        i(h, "done");
        let p;
        if (T.isFormData(s)) {
          if (xt.hasStandardBrowserEnv || xt.hasStandardBrowserWebWorkerEnv)
            o.setContentType(!1);
          else if ((p = o.getContentType()) !== !1) {
            const [R,...k] = p ? p.split(";").map(O => O.trim()).filter(Boolean) : [];
            o.setContentType([R || "multipart/form-data", ...k].join("; "))
          }
        }
        let y = new XMLHttpRequest;
        if (e.auth) {
          const R = e.auth.username || ""
              , k = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
          o.set("Authorization", "Basic " + btoa(R + ":" + k))
        }
        const v = Rf(e.baseURL, e.url);
        y.open(e.method.toUpperCase(), Sf(v, e.params, e.paramsSerializer), !0),
            y.timeout = e.timeout;
        function b() {
          if (!y)
            return;
          const R = Vt.from("getAllResponseHeaders"in y && y.getAllResponseHeaders())
              , O = {
            data: !c || c === "text" || c === "json" ? y.responseText : y.response,
            status: y.status,
            statusText: y.statusText,
            headers: R,
            config: e,
            request: y
          };
          bg(i(function(U) {
            n(U),
                h()
          }, "_resolve"), i(function(U) {
            r(U),
                h()
          }, "_reject"), O),
              y = null
        }
        if (i(b, "onloadend"),
            "onloadend"in y ? y.onloadend = b : y.onreadystatechange = i(function() {
              !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(b)
            }, "handleLoad"),
            y.onabort = i(function() {
              y && (r(new pe("Request aborted",pe.ECONNABORTED,e,y)),
                  y = null)
            }, "handleAbort"),
            y.onerror = i(function() {
              r(new pe("Network Error",pe.ERR_NETWORK,e,y)),
                  y = null
            }, "handleError"),
            y.ontimeout = i(function() {
              let k = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
              const O = e.transitional || Ef;
              e.timeoutErrorMessage && (k = e.timeoutErrorMessage),
                  r(new pe(k,O.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED,e,y)),
                  y = null
            }, "handleTimeout"),
        xt.hasStandardBrowserEnv && (l && T.isFunction(l) && (l = l(e)),
        l || l !== !1 && Ag(v))) {
          const R = e.xsrfHeaderName && e.xsrfCookieName && wg.read(e.xsrfCookieName);
          R && o.set(e.xsrfHeaderName, R)
        }
        s === void 0 && o.setContentType(null),
        "setRequestHeader"in y && T.forEach(o.toJSON(), i(function(k, O) {
          y.setRequestHeader(O, k)
        }, "setRequestHeader")),
        T.isUndefined(e.withCredentials) || (y.withCredentials = !!e.withCredentials),
        c && c !== "json" && (y.responseType = e.responseType),
        typeof e.onDownloadProgress == "function" && y.addEventListener("progress", ou(e.onDownloadProgress, !0)),
        typeof e.onUploadProgress == "function" && y.upload && y.upload.addEventListener("progress", ou(e.onUploadProgress)),
        (e.cancelToken || e.signal) && (f = i(R => {
              y && (r(!R || R.type ? new as(null,e,y) : R),
                  y.abort(),
                  y = null)
            }
            , "onCanceled"),
        e.cancelToken && e.cancelToken.subscribe(f),
        e.signal && (e.signal.aborted ? f() : e.signal.addEventListener("abort", f)));
        const S = kg(v);
        if (S && xt.protocols.indexOf(S) === -1) {
          r(new pe("Unsupported protocol " + S + ":",pe.ERR_BAD_REQUEST,e));
          return
        }
        y.send(s || null)
      }, "dispatchXhrRequest"))
    }
;
const Fo = {
  http: tg,
  xhr: Ng
};
T.forEach(Fo, (e, t) => {
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
const au = i(e => `- ${e}`, "renderReason")
    , Tg = i(e => T.isFunction(e) || e === null || e === !1, "isResolvedHandle");
var Af = {
  getAdapter: e => {
    e = T.isArray(e) ? e : [e];
    const {length: t} = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let c;
      if (r = n,
      !Tg(n) && (r = Fo[(c = String(n)).toLowerCase()],
      r === void 0))
        throw new pe(`Unknown adapter '${c}'`);
      if (r)
        break;
      s[c || "#" + o] = r
    }
    if (!r) {
      const o = Object.entries(s).map( ([l,f]) => `adapter ${l} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build"));
      let c = t ? o.length > 1 ? `since :
` + o.map(au).join(`
`) : " " + au(o[0]) : "as no adapter specified";
      throw new pe("There is no suitable adapter to dispatch the request " + c,"ERR_NOT_SUPPORT")
    }
    return r
  }
  ,
  adapters: Fo
};
function yo(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(),
  e.signal && e.signal.aborted)
    throw new as(null,e)
}
i(yo, "throwIfCancellationRequested");
function cu(e) {
  return yo(e),
      e.headers = Vt.from(e.headers),
      e.data = mo.call(e, e.transformRequest),
  ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
      Af.getAdapter(e.adapter || Aa.adapter)(e).then(i(function(r) {
        return yo(e),
            r.data = mo.call(e, e.transformResponse, r),
            r.headers = Vt.from(r.headers),
            r
      }, "onAdapterResolution"), i(function(r) {
        return If(r) || (yo(e),
        r && r.response && (r.response.data = mo.call(e, e.transformResponse, r.response),
            r.response.headers = Vt.from(r.response.headers))),
            Promise.reject(r)
      }, "onAdapterRejection"))
}
i(cu, "dispatchRequest");
const uu = i(e => e instanceof Vt ? {
  ...e
} : e, "headersToObject");
function cr(e, t) {
  t = t || {};
  const n = {};
  function r(h, p, y) {
    return T.isPlainObject(h) && T.isPlainObject(p) ? T.merge.call({
      caseless: y
    }, h, p) : T.isPlainObject(p) ? T.merge({}, p) : T.isArray(p) ? p.slice() : p
  }
  i(r, "getMergedValue");
  function s(h, p, y) {
    if (T.isUndefined(p)) {
      if (!T.isUndefined(h))
        return r(void 0, h, y)
    } else
      return r(h, p, y)
  }
  i(s, "mergeDeepProperties");
  function o(h, p) {
    if (!T.isUndefined(p))
      return r(void 0, p)
  }
  i(o, "valueFromConfig2");
  function c(h, p) {
    if (T.isUndefined(p)) {
      if (!T.isUndefined(h))
        return r(void 0, h)
    } else
      return r(void 0, p)
  }
  i(c, "defaultToConfig2");
  function l(h, p, y) {
    if (y in t)
      return r(h, p);
    if (y in e)
      return r(void 0, h)
  }
  i(l, "mergeDirectKeys");
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    withXSRFToken: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: l,
    headers: (h, p) => s(uu(h), uu(p), !0)
  };
  return T.forEach(Object.keys(Object.assign({}, e, t)), i(function(p) {
    const y = f[p] || s
        , v = y(e[p], t[p], p);
    T.isUndefined(v) && y !== l || (n[p] = v)
  }, "computeConfigValue")),
      n
}
i(cr, "mergeConfig");
const kf = "1.6.8"
    , ka = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
      ka[e] = i(function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
      }, "validator")
    }
);
const lu = {};
ka.transitional = i(function(t, n, r) {
  function s(o, c) {
    return "[Axios v" + kf + "] Transitional option '" + o + "'" + c + (r ? ". " + r : "")
  }
  return i(s, "formatMessage"),
      (o, c, l) => {
        if (t === !1)
          throw new pe(s(c, " has been removed" + (n ? " in " + n : "")),pe.ERR_DEPRECATED);
        return n && !lu[c] && (lu[c] = !0,
            s(c, " has been deprecated since v" + n + " and will be removed in the near future")),
            t ? t(o, c, l) : !0
      }
}, "transitional");
function xg(e, t, n) {
  if (typeof e != "object")
    throw new pe("options must be an object",pe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s]
        , c = t[o];
    if (c) {
      const l = e[o]
          , f = l === void 0 || c(l, o, e);
      if (f !== !0)
        throw new pe("option " + o + " must be " + f,pe.ERR_BAD_OPTION_VALUE);
      continue
    }
    if (n !== !0)
      throw new pe("Unknown option " + o,pe.ERR_BAD_OPTION)
  }
}
i(xg, "assertOptions");
var Do = {
  assertOptions: xg,
  validators: ka
};
const rn = Do.validators;
class oi {
  static{i(this, "Axios")
  }constructor(t) {
    this.defaults = t,
        this.interceptors = {
          request: new su,
          response: new su
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
        n = cr(this.defaults, n);
    const {transitional: r, paramsSerializer: s, headers: o} = n;
    r !== void 0 && Do.assertOptions(r, {
      silentJSONParsing: rn.transitional(rn.boolean),
      forcedJSONParsing: rn.transitional(rn.boolean),
      clarifyTimeoutError: rn.transitional(rn.boolean)
    }, !1),
    s != null && (T.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Do.assertOptions(s, {
      encode: rn.function,
      serialize: rn.function
    }, !0)),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let c = o && T.merge(o.common, o[n.method]);
    o && T.forEach(["delete", "get", "head", "post", "put", "patch", "common"], S => {
          delete o[S]
        }
    ),
        n.headers = Vt.concat(c, o);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(i(function(R) {
      typeof R.runWhen == "function" && R.runWhen(n) === !1 || (f = f && R.synchronous,
          l.unshift(R.fulfilled, R.rejected))
    }, "unshiftRequestInterceptors"));
    const h = [];
    this.interceptors.response.forEach(i(function(R) {
      h.push(R.fulfilled, R.rejected)
    }, "pushResponseInterceptors"));
    let p, y = 0, v;
    if (!f) {
      const S = [cu.bind(this), void 0];
      for (S.unshift.apply(S, l),
               S.push.apply(S, h),
               v = S.length,
               p = Promise.resolve(n); y < v; )
        p = p.then(S[y++], S[y++]);
      return p
    }
    v = l.length;
    let b = n;
    for (y = 0; y < v; ) {
      const S = l[y++]
          , R = l[y++];
      try {
        b = S(b)
      } catch (k) {
        R.call(this, k);
        break
      }
    }
    try {
      p = cu.call(this, b)
    } catch (S) {
      return Promise.reject(S)
    }
    for (y = 0,
             v = h.length; y < v; )
      p = p.then(h[y++], h[y++]);
    return p
  }
  getUri(t) {
    t = cr(this.defaults, t);
    const n = Rf(t.baseURL, t.url);
    return Sf(n, t.params, t.paramsSerializer)
  }
}
T.forEach(["delete", "get", "head", "options"], i(function(t) {
  oi.prototype[t] = function(n, r) {
    return this.request(cr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }))
  }
}, "forEachMethodNoData"));
T.forEach(["post", "put", "patch"], i(function(t) {
  function n(r) {
    return i(function(o, c, l) {
      return this.request(cr(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: c
      }))
    }, "httpMethod")
  }
  i(n, "generateHTTPMethod"),
      oi.prototype[t] = n(),
      oi.prototype[t + "Form"] = n(!0)
}, "forEachMethodWithData"));
var Gs = oi;
class Oa {
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
          const c = new Promise(l => {
                r.subscribe(l),
                    o = l
              }
          ).then(s);
          return c.cancel = i(function() {
            r.unsubscribe(o)
          }, "reject"),
              c
        }
        ,
        t(i(function(o, c, l) {
          r.reason || (r.reason = new as(o,c,l),
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
      token: new Oa(i(function(s) {
        t = s
      }, "executor")),
      cancel: t
    }
  }
}
var Cg = Oa;
function Mg(e) {
  return i(function(n) {
    return e.apply(null, n)
  }, "wrap")
}
i(Mg, "spread");
function Fg(e) {
  return T.isObject(e) && e.isAxiosError === !0
}
i(Fg, "isAxiosError");
const Lo = {
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
Object.entries(Lo).forEach( ([e,t]) => {
      Lo[t] = e
    }
);
var Dg = Lo;
function Of(e) {
  const t = new Gs(e)
      , n = cf(Gs.prototype.request, t);
  return T.extend(n, Gs.prototype, t, {
    allOwnKeys: !0
  }),
      T.extend(n, t, null, {
        allOwnKeys: !0
      }),
      n.create = i(function(s) {
        return Of(cr(e, s))
      }, "create"),
      n
}
i(Of, "createInstance");
const Ue = Of(Aa);
Ue.Axios = Gs;
Ue.CanceledError = as;
Ue.CancelToken = Cg;
Ue.isCancel = If;
Ue.VERSION = kf;
Ue.toFormData = Ni;
Ue.AxiosError = pe;
Ue.Cancel = Ue.CanceledError;
Ue.all = i(function(t) {
  return Promise.all(t)
}, "all");
Ue.spread = Mg;
Ue.isAxiosError = Fg;
Ue.mergeConfig = cr;
Ue.AxiosHeaders = Vt;
Ue.formToJSON = e => wf(T.isHTMLForm(e) ? new FormData(e) : e);
Ue.getAdapter = Af.getAdapter;
Ue.HttpStatusCode = Dg;
Ue.default = Ue;
function Lg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
i(Lg, "getDefaultExportFromCjs");
const Ug = new Set(["ENOTFOUND", "ENETUNREACH", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_CRL", "UNABLE_TO_DECRYPT_CERT_SIGNATURE", "UNABLE_TO_DECRYPT_CRL_SIGNATURE", "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY", "CERT_SIGNATURE_FAILURE", "CRL_SIGNATURE_FAILURE", "CERT_NOT_YET_VALID", "CERT_HAS_EXPIRED", "CRL_NOT_YET_VALID", "CRL_HAS_EXPIRED", "ERROR_IN_CERT_NOT_BEFORE_FIELD", "ERROR_IN_CERT_NOT_AFTER_FIELD", "ERROR_IN_CRL_LAST_UPDATE_FIELD", "ERROR_IN_CRL_NEXT_UPDATE_FIELD", "OUT_OF_MEM", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "CERT_CHAIN_TOO_LONG", "CERT_REVOKED", "INVALID_CA", "PATH_LENGTH_EXCEEDED", "INVALID_PURPOSE", "CERT_UNTRUSTED", "CERT_REJECTED", "HOSTNAME_MISMATCH"]);
var Bg = i(e => !Ug.has(e && e.code), "isRetryAllowed")
    , $g = Lg(Bg);
const Pa = "axios-retry";
function Pf(e) {
  const t = ["ERR_CANCELED", "ECONNABORTED"];
  return e.response || !e.code || t.includes(e.code) ? !1 : $g(e)
}
i(Pf, "isNetworkError");
const Nf = ["get", "head", "options"]
    , Hg = Nf.concat(["put", "delete"]);
function Na(e) {
  return e.code !== "ECONNABORTED" && (!e.response || e.response.status === 429 || e.response.status >= 500 && e.response.status <= 599)
}
i(Na, "isRetryableError");
function jg(e) {
  return e.config?.method ? Na(e) && Nf.indexOf(e.config.method) !== -1 : !1
}
i(jg, "isSafeRequestError");
function Tf(e) {
  return e.config?.method ? Na(e) && Hg.indexOf(e.config.method) !== -1 : !1
}
i(Tf, "isIdempotentRequestError");
function xf(e) {
  return Pf(e) || Tf(e)
}
i(xf, "isNetworkOrIdempotentRequestError");
function Cf(e=void 0) {
  const t = e?.response?.headers["retry-after"];
  if (!t)
    return 0;
  let n = (Number(t) || 0) * 1e3;
  return n === 0 && (n = (new Date(t).valueOf() || 0) - Date.now()),
      Math.max(0, n)
}
i(Cf, "retryAfter");
function qg(e=0, t=void 0) {
  return Math.max(0, Cf(t))
}
i(qg, "noDelay");
function zg(e=0, t=void 0, n=100) {
  const r = 2 ** e * n
      , s = Math.max(r, Cf(t))
      , o = s * .2 * Math.random();
  return s + o
}
i(zg, "exponentialDelay");
const Wg = {
  retries: 3,
  retryCondition: xf,
  retryDelay: qg,
  shouldResetTimeout: !1,
  onRetry: () => {}
  ,
  onMaxRetryTimesExceeded: () => {}
  ,
  validateResponse: null
};
function Vg(e, t) {
  return {
    ...Wg,
    ...t,
    ...e[Pa]
  }
}
i(Vg, "getRequestOptions");
function fu(e, t) {
  const n = Vg(e, t || {});
  return n.retryCount = n.retryCount || 0,
      n.lastRequestTime = n.lastRequestTime || Date.now(),
      e[Pa] = n,
      n
}
i(fu, "setCurrentState");
function Gg(e, t) {
  e.defaults.agent === t.agent && delete t.agent,
  e.defaults.httpAgent === t.httpAgent && delete t.httpAgent,
  e.defaults.httpsAgent === t.httpsAgent && delete t.httpsAgent
}
i(Gg, "fixConfig");
async function Yg(e, t) {
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
i(Yg, "shouldRetry");
async function Kg(e, t, n, r) {
  t.retryCount += 1;
  const {retryDelay: s, shouldResetTimeout: o, onRetry: c} = t
      , l = s(t.retryCount, n);
  if (Gg(e, r),
  !o && r.timeout && t.lastRequestTime) {
    const f = Date.now() - t.lastRequestTime
        , h = r.timeout - f - l;
    if (h <= 0)
      return Promise.reject(n);
    r.timeout = h
  }
  return r.transformRequest = [f => f],
      await c(t.retryCount, n, r),
      r.signal?.aborted ? Promise.resolve(e(r)) : new Promise(f => {
            const h = i( () => {
                  clearTimeout(p),
                      f(e(r))
                }
                , "abortListener")
                , p = setTimeout( () => {
                  f(e(r)),
                  r.signal?.removeEventListener && r.signal.removeEventListener("abort", h)
                }
                , l);
            r.signal?.addEventListener && r.signal.addEventListener("abort", h, {
              once: !0
            })
          }
      )
}
i(Kg, "handleRetry");
async function Xg(e, t) {
  e.retryCount >= e.retries && await e.onMaxRetryTimesExceeded(t, e.retryCount)
}
i(Xg, "handleMaxRetryTimesExceeded");
const pn = i( (e, t) => {
      const n = e.interceptors.request.use(s => (fu(s, t),
      s[Pa]?.validateResponse && (s.validateStatus = () => !1),
          s))
          , r = e.interceptors.response.use(null, async s => {
            const {config: o} = s;
            if (!o)
              return Promise.reject(s);
            const c = fu(o, t);
            return s.response && c.validateResponse?.(s.response) ? s.response : await Yg(c, s) ? Kg(e, c, s, o) : (await Xg(c, s),
                Promise.reject(s))
          }
      );
      return {
        requestInterceptorId: n,
        responseInterceptorId: r
      }
    }
    , "axiosRetry");
pn.isNetworkError = Pf;
pn.isSafeRequestError = jg;
pn.isIdempotentRequestError = Tf;
pn.isNetworkOrIdempotentRequestError = xf;
pn.exponentialDelay = zg;
pn.isRetryableError = Na;
class xi {
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
const Ta = typeof window > "u" || "Deno"in window;
function bt() {}
i(bt, "noop");
function Qg(e, t) {
  return typeof e == "function" ? e(t) : e
}
i(Qg, "functionalUpdate");
function Jg(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0
}
i(Jg, "isValidTimeout");
function Zg(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0)
}
i(Zg, "timeUntilStale");
function Os(e, t, n) {
  return Ci(e) ? typeof t == "function" ? {
    ...n,
    queryKey: e,
    queryFn: t
  } : {
    ...t,
    queryKey: e
  } : e
}
i(Os, "parseQueryArgs");
function on(e, t, n) {
  return Ci(e) ? [{
    ...t,
    queryKey: e
  }, n] : [e || {}, t]
}
i(on, "parseFilterArgs");
function du(e, t) {
  const {type: n="all", exact: r, fetchStatus: s, predicate: o, queryKey: c, stale: l} = e;
  if (Ci(c)) {
    if (r) {
      if (t.queryHash !== xa(c, t.options))
        return !1
    } else if (!ai(t.queryKey, c))
      return !1
  }
  if (n !== "all") {
    const f = t.isActive();
    if (n === "active" && !f || n === "inactive" && f)
      return !1
  }
  return !(typeof l == "boolean" && t.isStale() !== l || typeof s < "u" && s !== t.state.fetchStatus || o && !o(t))
}
i(du, "matchQuery");
function hu(e, t) {
  const {exact: n, fetching: r, predicate: s, mutationKey: o} = e;
  if (Ci(o)) {
    if (!t.options.mutationKey)
      return !1;
    if (n) {
      if (On(t.options.mutationKey) !== On(o))
        return !1
    } else if (!ai(t.options.mutationKey, o))
      return !1
  }
  return !(typeof r == "boolean" && t.state.status === "loading" !== r || s && !s(t))
}
i(hu, "matchMutation");
function xa(e, t) {
  return (t?.queryKeyHashFn || On)(e)
}
i(xa, "hashQueryKeyByOptions");
function On(e) {
  return JSON.stringify(e, (t, n) => Uo(n) ? Object.keys(n).sort().reduce( (r, s) => (r[s] = n[s],
      r), {}) : n)
}
i(On, "hashQueryKey");
function ai(e, t) {
  return Mf(e, t)
}
i(ai, "partialMatchKey");
function Mf(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Mf(e[n], t[n])) : !1
}
i(Mf, "partialDeepEqual");
function Ff(e, t) {
  if (e === t)
    return e;
  const n = pu(e) && pu(t);
  if (n || Uo(e) && Uo(t)) {
    const r = n ? e.length : Object.keys(e).length
        , s = n ? t : Object.keys(t)
        , o = s.length
        , c = n ? [] : {};
    let l = 0;
    for (let f = 0; f < o; f++) {
      const h = n ? f : s[f];
      c[h] = Ff(e[h], t[h]),
      c[h] === e[h] && l++
    }
    return r === o && l === r ? e : c
  }
  return t
}
i(Ff, "replaceEqualDeep");
function pu(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length
}
i(pu, "isPlainArray");
function Uo(e) {
  if (!mu(e))
    return !1;
  const t = e.constructor;
  if (typeof t > "u")
    return !0;
  const n = t.prototype;
  return !(!mu(n) || !n.hasOwnProperty("isPrototypeOf"))
}
i(Uo, "isPlainObject$1");
function mu(e) {
  return Object.prototype.toString.call(e) === "[object Object]"
}
i(mu, "hasObjectPrototype");
function Ci(e) {
  return Array.isArray(e)
}
i(Ci, "isQueryKey");
function Df(e) {
  return new Promise(t => {
        setTimeout(t, e)
      }
  )
}
i(Df, "sleep");
function yu(e) {
  Df(0).then(e)
}
i(yu, "scheduleMicrotask");
function e_() {
  if (typeof AbortController == "function")
    return new AbortController
}
i(e_, "getAbortController");
function t_(e, t, n) {
  return n.isDataEqual != null && n.isDataEqual(e, t) ? e : typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Ff(e, t) : t
}
i(t_, "replaceData");
class n_ extends xi {
  static{i(this, "FocusManager")
  }constructor() {
    super(),
        this.setup = t => {
          if (!Ta && window.addEventListener) {
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
const Bo = new n_
    , gu = ["online", "offline"];
class r_ extends xi {
  static{i(this, "OnlineManager")
  }constructor() {
    super(),
        this.setup = t => {
          if (!Ta && window.addEventListener) {
            const n = i( () => t(), "listener");
            return gu.forEach(r => {
                  window.addEventListener(r, n, !1)
                }
            ),
                () => {
                  gu.forEach(r => {
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
const ci = new r_;
function s_(e) {
  return Math.min(1e3 * 2 ** e, 3e4)
}
i(s_, "defaultRetryDelay");
function Ca(e) {
  return (e ?? "online") === "online" ? ci.isOnline() : !0
}
i(Ca, "canFetch");
class Lf {
  static{i(this, "CancelledError")
  }constructor(t) {
    this.revert = t?.revert,
        this.silent = t?.silent
  }
}
function go(e) {
  return e instanceof Lf
}
i(go, "isCancelledError");
function Uf(e) {
  let t = !1, n = 0, r = !1, s, o, c;
  const l = new Promise( (k, O) => {
        o = k,
            c = O
      }
  )
      , f = i(k => {
        r || (b(new Lf(k)),
        e.abort == null || e.abort())
      }
      , "cancel")
      , h = i( () => {
        t = !0
      }
      , "cancelRetry")
      , p = i( () => {
        t = !1
      }
      , "continueRetry")
      , y = i( () => !Bo.isFocused() || e.networkMode !== "always" && !ci.isOnline(), "shouldPause")
      , v = i(k => {
        r || (r = !0,
        e.onSuccess == null || e.onSuccess(k),
            s?.(),
            o(k))
      }
      , "resolve")
      , b = i(k => {
        r || (r = !0,
        e.onError == null || e.onError(k),
            s?.(),
            c(k))
      }
      , "reject")
      , S = i( () => new Promise(k => {
        s = i(O => {
              const L = r || !y();
              return L && k(O),
                  L
            }
            , "continueFn"),
        e.onPause == null || e.onPause()
      }
  ).then( () => {
        s = void 0,
        r || e.onContinue == null || e.onContinue()
      }
  ), "pause")
      , R = i( () => {
        if (r)
          return;
        let k;
        try {
          k = e.fn()
        } catch (O) {
          k = Promise.reject(O)
        }
        Promise.resolve(k).then(v).catch(O => {
              var L, U;
              if (r)
                return;
              const V = (L = e.retry) != null ? L : 3
                  , q = (U = e.retryDelay) != null ? U : s_
                  , x = typeof q == "function" ? q(n, O) : q
                  , N = V === !0 || typeof V == "number" && n < V || typeof V == "function" && V(n, O);
              if (t || !N) {
                b(O);
                return
              }
              n++,
              e.onFail == null || e.onFail(n, O),
                  Df(x).then( () => {
                        if (y())
                          return S()
                      }
                  ).then( () => {
                        t ? b(O) : R()
                      }
                  )
            }
        )
      }
      , "run");
  return Ca(e.networkMode) ? R() : S().then(R),
      {
        promise: l,
        cancel: f,
        continue: () => s?.() ? l : Promise.resolve(),
        cancelRetry: h,
        continueRetry: p
      }
}
i(Uf, "createRetryer");
const Ma = console;
function i_() {
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
        let y;
        t++;
        try {
          y = p()
        } finally {
          t--,
          t || l()
        }
        return y
      }
      , "batch")
      , o = i(p => {
        t ? e.push(p) : yu( () => {
              n(p)
            }
        )
      }
      , "schedule")
      , c = i(p => (...y) => {
        o( () => {
              p(...y)
            }
        )
      }
      , "batchCalls")
      , l = i( () => {
        const p = e;
        e = [],
        p.length && yu( () => {
              r( () => {
                    p.forEach(y => {
                          n(y)
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
    batchCalls: c,
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
i(i_, "createNotifyManager");
const Xe = i_();
class Bf {
  static{i(this, "Removable")
  }destroy() {
    this.clearGcTimeout()
  }
  scheduleGc() {
    this.clearGcTimeout(),
    Jg(this.cacheTime) && (this.gcTimeout = setTimeout( () => {
          this.optionalRemove()
        }
        , this.cacheTime))
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(this.cacheTime || 0, t ?? (Ta ? 1 / 0 : 5 * 60 * 1e3))
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout),
        this.gcTimeout = void 0)
  }
}
class o_ extends Bf {
  static{i(this, "Query")
  }constructor(t) {
    super(),
        this.abortSignalConsumed = !1,
        this.defaultOptions = t.defaultOptions,
        this.setOptions(t.options),
        this.observers = [],
        this.cache = t.cache,
        this.logger = t.logger || Ma,
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        this.initialState = t.state || a_(this.options),
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
    const r = t_(this.state.data, t, this.options);
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
        r ? r.then(bt).catch(bt) : Promise.resolve()
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
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Zg(this.state.dataUpdatedAt, t)
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
      const b = this.observers.find(S => S.options.queryFn);
      b && this.setOptions(b.options)
    }
    const c = e_()
        , l = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }
        , f = i(b => {
          Object.defineProperty(b, "signal", {
            enumerable: !0,
            get: () => {
              if (c)
                return this.abortSignalConsumed = !0,
                    c.signal
            }
          })
        }
        , "addSignalProperty");
    f(l);
    const h = i( () => this.options.queryFn ? (this.abortSignalConsumed = !1,
        this.options.queryFn(l)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"), "fetchFn")
        , p = {
      fetchOptions: n,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: h
    };
    if (f(p),
    (r = this.options.behavior) == null || r.onFetch(p),
        this.revertState = this.state,
    this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((s = p.fetchOptions) == null ? void 0 : s.meta)) {
      var y;
      this.dispatch({
        type: "fetch",
        meta: (y = p.fetchOptions) == null ? void 0 : y.meta
      })
    }
    const v = i(b => {
          if (go(b) && b.silent || this.dispatch({
            type: "error",
            error: b
          }),
              !go(b)) {
            var S, R, k, O;
            (S = (R = this.cache.config).onError) == null || S.call(R, b, this),
            (k = (O = this.cache.config).onSettled) == null || k.call(O, this.state.data, b, this)
          }
          this.isFetchingOptimistic || this.scheduleGc(),
              this.isFetchingOptimistic = !1
        }
        , "onError");
    return this.retryer = Uf({
      fn: p.fetchFn,
      abort: c?.abort.bind(c),
      onSuccess: b => {
        var S, R, k, O;
        if (typeof b > "u") {
          v(new Error(this.queryHash + " data is undefined"));
          return
        }
        this.setData(b),
        (S = (R = this.cache.config).onSuccess) == null || S.call(R, b, this),
        (k = (O = this.cache.config).onSettled) == null || k.call(O, b, this.state.error, this),
        this.isFetchingOptimistic || this.scheduleGc(),
            this.isFetchingOptimistic = !1
      }
      ,
      onError: v,
      onFail: (b, S) => {
        this.dispatch({
          type: "failed",
          failureCount: b,
          error: S
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
                fetchStatus: Ca(this.options.networkMode) ? "fetching" : "paused",
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
              const c = t.error;
              return go(c) && c.revert && this.revertState ? {
                ...this.revertState,
                fetchStatus: "idle"
              } : {
                ...r,
                error: c,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: c,
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
        Xe.batch( () => {
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
function a_(e) {
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
i(a_, "getDefaultState$1");
class c_ extends xi {
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
        , c = (s = n.queryHash) != null ? s : xa(o, n);
    let l = this.get(c);
    return l || (l = new o_({
      cache: this,
      logger: t.getLogger(),
      queryKey: o,
      queryHash: c,
      options: t.defaultQueryOptions(n),
      state: r,
      defaultOptions: t.getQueryDefaults(o)
    }),
        this.add(l)),
        l
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
    Xe.batch( () => {
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
    const [r] = on(t, n);
    return typeof r.exact > "u" && (r.exact = !0),
        this.queries.find(s => du(r, s))
  }
  findAll(t, n) {
    const [r] = on(t, n);
    return Object.keys(r).length > 0 ? this.queries.filter(s => du(r, s)) : this.queries
  }
  notify(t) {
    Xe.batch( () => {
          this.listeners.forEach( ({listener: n}) => {
                n(t)
              }
          )
        }
    )
  }
  onFocus() {
    Xe.batch( () => {
          this.queries.forEach(t => {
                t.onFocus()
              }
          )
        }
    )
  }
  onOnline() {
    Xe.batch( () => {
          this.queries.forEach(t => {
                t.onOnline()
              }
          )
        }
    )
  }
}
class u_ extends Bf {
  static{i(this, "Mutation")
  }constructor(t) {
    super(),
        this.defaultOptions = t.defaultOptions,
        this.mutationId = t.mutationId,
        this.mutationCache = t.mutationCache,
        this.logger = t.logger || Ma,
        this.observers = [],
        this.state = t.state || l_(),
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
          var N;
          return this.retryer = Uf({
            fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
            onFail: (F, H) => {
              this.dispatch({
                type: "failed",
                failureCount: F,
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
            retry: (N = this.options.retry) != null ? N : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode
          }),
              this.retryer.promise
        }
        , "executeMutation")
        , n = this.state.status === "loading";
    try {
      var r, s, o, c, l, f, h, p;
      if (!n) {
        var y, v, b, S;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }),
            await ((y = (v = this.mutationCache.config).onMutate) == null ? void 0 : y.call(v, this.state.variables, this));
        const F = await ((b = (S = this.options).onMutate) == null ? void 0 : b.call(S, this.state.variables));
        F !== this.state.context && this.dispatch({
          type: "loading",
          context: F,
          variables: this.state.variables
        })
      }
      const N = await t();
      return await ((r = (s = this.mutationCache.config).onSuccess) == null ? void 0 : r.call(s, N, this.state.variables, this.state.context, this)),
          await ((o = (c = this.options).onSuccess) == null ? void 0 : o.call(c, N, this.state.variables, this.state.context)),
          await ((l = (f = this.mutationCache.config).onSettled) == null ? void 0 : l.call(f, N, null, this.state.variables, this.state.context, this)),
          await ((h = (p = this.options).onSettled) == null ? void 0 : h.call(p, N, null, this.state.variables, this.state.context)),
          this.dispatch({
            type: "success",
            data: N
          }),
          N
    } catch (N) {
      try {
        var R, k, O, L, U, V, q, x;
        throw await ((R = (k = this.mutationCache.config).onError) == null ? void 0 : R.call(k, N, this.state.variables, this.state.context, this)),
            await ((O = (L = this.options).onError) == null ? void 0 : O.call(L, N, this.state.variables, this.state.context)),
            await ((U = (V = this.mutationCache.config).onSettled) == null ? void 0 : U.call(V, void 0, N, this.state.variables, this.state.context, this)),
            await ((q = (x = this.options).onSettled) == null ? void 0 : q.call(x, void 0, N, this.state.variables, this.state.context)),
            N
      } finally {
        this.dispatch({
          type: "error",
          error: N
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
                isPaused: !Ca(this.options.networkMode),
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
        Xe.batch( () => {
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
function l_() {
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
i(l_, "getDefaultState");
class f_ extends xi {
  static{i(this, "MutationCache")
  }constructor(t) {
    super(),
        this.config = t || {},
        this.mutations = [],
        this.mutationId = 0
  }
  build(t, n, r) {
    const s = new u_({
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
    Xe.batch( () => {
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
        this.mutations.find(n => hu(t, n))
  }
  findAll(t) {
    return this.mutations.filter(n => hu(t, n))
  }
  notify(t) {
    Xe.batch( () => {
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
          return Xe.batch( () => n.reduce( (r, s) => r.then( () => s.continue().catch(bt)), Promise.resolve()))
        }
    ).then( () => {
          this.resuming = void 0
        }
    ),
        this.resuming
  }
}
function d_() {
  return {
    onFetch: e => {
      e.fetchFn = () => {
        var t, n, r, s, o, c;
        const l = (t = e.fetchOptions) == null || (n = t.meta) == null ? void 0 : n.refetchPage
            , f = (r = e.fetchOptions) == null || (s = r.meta) == null ? void 0 : s.fetchMore
            , h = f?.pageParam
            , p = f?.direction === "forward"
            , y = f?.direction === "backward"
            , v = ((o = e.state.data) == null ? void 0 : o.pages) || []
            , b = ((c = e.state.data) == null ? void 0 : c.pageParams) || [];
        let S = b
            , R = !1;
        const k = i(x => {
              Object.defineProperty(x, "signal", {
                enumerable: !0,
                get: () => {
                  var N;
                  if ((N = e.signal) != null && N.aborted)
                    R = !0;
                  else {
                    var F;
                    (F = e.signal) == null || F.addEventListener("abort", () => {
                          R = !0
                        }
                    )
                  }
                  return e.signal
                }
              })
            }
            , "addSignalProperty")
            , O = e.options.queryFn || ( () => Promise.reject("Missing queryFn for queryKey '" + e.options.queryHash + "'"))
            , L = i( (x, N, F, H) => (S = H ? [N, ...S] : [...S, N],
            H ? [F, ...x] : [...x, F]), "buildNewPages")
            , U = i( (x, N, F, H) => {
              if (R)
                return Promise.reject("Cancelled");
              if (typeof F > "u" && !N && x.length)
                return Promise.resolve(x);
              const C = {
                queryKey: e.queryKey,
                pageParam: F,
                meta: e.options.meta
              };
              k(C);
              const z = O(C);
              return Promise.resolve(z).then(M => L(x, F, M, H))
            }
            , "fetchPage");
        let V;
        if (!v.length)
          V = U([]);
        else if (p) {
          const x = typeof h < "u"
              , N = x ? h : _u(e.options, v);
          V = U(v, x, N)
        } else if (y) {
          const x = typeof h < "u"
              , N = x ? h : h_(e.options, v);
          V = U(v, x, N, !0)
        } else {
          S = [];
          const x = typeof e.options.getNextPageParam > "u";
          V = (l && v[0] ? l(v[0], 0, v) : !0) ? U([], x, b[0]) : Promise.resolve(L([], b[0], v[0]));
          for (let F = 1; F < v.length; F++)
            V = V.then(H => {
                  if (l && v[F] ? l(v[F], F, v) : !0) {
                    const z = x ? b[F] : _u(e.options, H);
                    return U(H, x, z)
                  }
                  return Promise.resolve(L(H, b[F], v[F]))
                }
            )
        }
        return V.then(x => ({
          pages: x,
          pageParams: S
        }))
      }
    }
  }
}
i(d_, "infiniteQueryBehavior");
function _u(e, t) {
  return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t)
}
i(_u, "getNextPageParam");
function h_(e, t) {
  return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t)
}
i(h_, "getPreviousPageParam");
class p_ {
  static{i(this, "QueryClient")
  }constructor(t={}) {
    this.queryCache = t.queryCache || new c_,
        this.mutationCache = t.mutationCache || new f_,
        this.logger = t.logger || Ma,
        this.defaultOptions = t.defaultOptions || {},
        this.queryDefaults = [],
        this.mutationDefaults = [],
        this.mountCount = 0
  }
  mount() {
    this.mountCount++,
    this.mountCount === 1 && (this.unsubscribeFocus = Bo.subscribe( () => {
          Bo.isFocused() && (this.resumePausedMutations(),
              this.queryCache.onFocus())
        }
    ),
        this.unsubscribeOnline = ci.subscribe( () => {
              ci.isOnline() && (this.resumePausedMutations(),
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
    const [r] = on(t, n);
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
    const s = Os(t, n, r)
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
        , c = Qg(n, o);
    if (typeof c > "u")
      return;
    const l = Os(t)
        , f = this.defaultQueryOptions(l);
    return this.queryCache.build(this, f).setData(c, {
      ...r,
      manual: !0
    })
  }
  setQueriesData(t, n, r) {
    return Xe.batch( () => this.getQueryCache().findAll(t).map( ({queryKey: s}) => [s, this.setQueryData(s, n, r)]))
  }
  getQueryState(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state
  }
  removeQueries(t, n) {
    const [r] = on(t, n)
        , s = this.queryCache;
    Xe.batch( () => {
          s.findAll(r).forEach(o => {
                s.remove(o)
              }
          )
        }
    )
  }
  resetQueries(t, n, r) {
    const [s,o] = on(t, n, r)
        , c = this.queryCache
        , l = {
      type: "active",
      ...s
    };
    return Xe.batch( () => (c.findAll(s).forEach(f => {
          f.reset()
        }
    ),
        this.refetchQueries(l, o)))
  }
  cancelQueries(t, n, r) {
    const [s,o={}] = on(t, n, r);
    typeof o.revert > "u" && (o.revert = !0);
    const c = Xe.batch( () => this.queryCache.findAll(s).map(l => l.cancel(o)));
    return Promise.all(c).then(bt).catch(bt)
  }
  invalidateQueries(t, n, r) {
    const [s,o] = on(t, n, r);
    return Xe.batch( () => {
          var c, l;
          if (this.queryCache.findAll(s).forEach(h => {
                h.invalidate()
              }
          ),
          s.refetchType === "none")
            return Promise.resolve();
          const f = {
            ...s,
            type: (c = (l = s.refetchType) != null ? l : s.type) != null ? c : "active"
          };
          return this.refetchQueries(f, o)
        }
    )
  }
  refetchQueries(t, n, r) {
    const [s,o] = on(t, n, r)
        , c = Xe.batch( () => this.queryCache.findAll(s).filter(f => !f.isDisabled()).map(f => {
          var h;
          return f.fetch(void 0, {
            ...o,
            cancelRefetch: (h = o?.cancelRefetch) != null ? h : !0,
            meta: {
              refetchPage: s.refetchPage
            }
          })
        }
    ));
    let l = Promise.all(c).then(bt);
    return o != null && o.throwOnError || (l = l.catch(bt)),
        l
  }
  fetchQuery(t, n, r) {
    const s = Os(t, n, r)
        , o = this.defaultQueryOptions(s);
    typeof o.retry > "u" && (o.retry = !1);
    const c = this.queryCache.build(this, o);
    return c.isStaleByTime(o.staleTime) ? c.fetch(o) : Promise.resolve(c.state.data)
  }
  prefetchQuery(t, n, r) {
    return this.fetchQuery(t, n, r).then(bt).catch(bt)
  }
  fetchInfiniteQuery(t, n, r) {
    const s = Os(t, n, r);
    return s.behavior = d_(),
        this.fetchQuery(s)
  }
  prefetchInfiniteQuery(t, n, r) {
    return this.fetchInfiniteQuery(t, n, r).then(bt).catch(bt)
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
    const r = this.queryDefaults.find(s => On(t) === On(s.queryKey));
    r ? r.defaultOptions = n : this.queryDefaults.push({
      queryKey: t,
      defaultOptions: n
    })
  }
  getQueryDefaults(t) {
    if (!t)
      return;
    const n = this.queryDefaults.find(r => ai(t, r.queryKey));
    return n?.defaultOptions
  }
  setMutationDefaults(t, n) {
    const r = this.mutationDefaults.find(s => On(t) === On(s.mutationKey));
    r ? r.defaultOptions = n : this.mutationDefaults.push({
      mutationKey: t,
      defaultOptions: n
    })
  }
  getMutationDefaults(t) {
    if (!t)
      return;
    const n = this.mutationDefaults.find(r => ai(t, r.mutationKey));
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
    return !n.queryHash && n.queryKey && (n.queryHash = xa(n.queryKey, n)),
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
const sn = "https://api.polarr.co/polarr-next";
new p_;
const $o = new Map;
function m_(e) {
  $o.set(e, !0),
      setTimeout( () => $o.delete(e), 1e4)
}
i(m_, "registerProjectIdAsDeleted");
function y_(e) {
  $o.delete(e)
}
i(y_, "removeProjectIdAsDeleted");
const Pe = Ue.create({
  baseURL: sn
});
pn(Pe, {
  retryDelay: pn.exponentialDelay
});
class vu {
  static{i(this, "PNApiOperations")
  }static basePaths = {
    payment: `${sn}/payment`,
    presets: `${sn}/presets`,
    projects: `${sn}/projects`,
    images: `${sn}/images`,
    serviceStatus: `${sn}/service-status`,
    signedUrls: `${sn}/upload/signed-urls`,
    users: `${sn}/iam/users`
  };
  static listImages = async t => (await Pe.get(this.basePaths.images, {
    params: t
  })).data;
  static getImage = async t => (await Pe.get(`${this.basePaths.images}/${t}`)).data;
  static createImage = async t => (await Pe.post(this.basePaths.images, t)).data;
  static deleteImage = async t => {
    await Pe.delete(`${this.basePaths.images}/${t}`)
  }
  ;
  static listPresets = async t => (await Pe.get(this.basePaths.presets, {
    params: t
  })).data;
  static getPreset = async t => (await Pe.get(`${this.basePaths.presets}/${t}`)).data;
  static createPreset = async t => (await Pe.post(this.basePaths.presets, t)).data;
  static updatePreset = async (t, n) => (await Pe.patch(`${this.basePaths.presets}/${t}`, n)).data;
  static deletePreset = async t => {
    await Pe.delete(`${this.basePaths.presets}/${t}`)
  }
  ;
  static listProjects = async t => (await Pe.get(this.basePaths.projects, {
    params: t
  })).data;
  static getProject = async t => (await Pe.get(`${this.basePaths.projects}/${t}`)).data;
  static createProject = async t => {
    const n = await Pe.post(this.basePaths.projects, t);
    return y_(n.data.projectId),
        n.data
  }
  ;
  static updateProject = async (t, n) => (await Pe.patch(`${this.basePaths.projects}/${t}`, n)).data;
  static deleteProject = async t => {
    await Pe.delete(`${this.basePaths.projects}/${t}`),
        m_(t)
  }
  ;
  static getSignedUrls = async t => {
    const n = {
      "content-types": t.map(s => s.contentType).join(","),
      "entity-types": t.map(s => s.entityType).join(","),
      "content-digests": t.map(s => s.contentDigest ?? "").join(",")
    };
    return (await Pe.get(this.basePaths.signedUrls, {
      params: n
    })).data.urls
  }
  ;
  static getCurrentUser = async () => (await Pe.get(`${this.basePaths.users}/@me`)).data;
  static deleteCurrentUser = async () => {
    const t = await Pe.delete(`${this.basePaths.users}/@me`);
    return t.status === 200 || t.status === 202 || t.status === 204
  }
  ;
  static getUserActivities = async t => {
    const n = `${this.basePaths.users}/@me/activity-events`;
    return (await Pe.get(n, {
      params: t
    })).data
  }
  ;
  static getServiceStatus = async () => (await fetch(this.basePaths.serviceStatus)).json();
  static getPaymentPlans = async () => (await fetch(`${this.basePaths.payment}/plans`)).json();
  static createStripeCheckoutSession = async t => (await Pe.post(`${this.basePaths.payment}/stripe/checkout-sessions`, t)).data;
  static createStripeCustomerPortalSession = async () => (await Pe.post(`${this.basePaths.payment}/stripe/customer-portal-sessions`)).data;
  static redeemPromoCode = async t => (await Pe.post(`${this.basePaths.payment}/promo-codes/redemptions`, t)).data;
  static reportCreditConsumptionEvents = async t => {
    await Pe.post(`${this.basePaths.payment}/credit-consumption/events`, t)
  }
  ;
  static uploadContent = async t => {
    const n = await Pe.put(t.url, t.data, {
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
const $f = Object.prototype.toString;
function Fa(e) {
  switch ($f.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return Kt(e, Error)
  }
}
i(Fa, "isError");
function vr(e, t) {
  return $f.call(e) === `[object ${t}]`
}
i(vr, "isBuiltin");
function Hf(e) {
  return vr(e, "ErrorEvent")
}
i(Hf, "isErrorEvent$2");
function Su(e) {
  return vr(e, "DOMError")
}
i(Su, "isDOMError");
function g_(e) {
  return vr(e, "DOMException")
}
i(g_, "isDOMException");
function Gt(e) {
  return vr(e, "String")
}
i(Gt, "isString");
function Da(e) {
  return typeof e == "object" && e !== null && "__sentry_template_string__"in e && "__sentry_template_values__"in e
}
i(Da, "isParameterizedString");
function La(e) {
  return e === null || Da(e) || typeof e != "object" && typeof e != "function"
}
i(La, "isPrimitive");
function ur(e) {
  return vr(e, "Object")
}
i(ur, "isPlainObject");
function Mi(e) {
  return typeof Event < "u" && Kt(e, Event)
}
i(Mi, "isEvent");
function __(e) {
  return typeof Element < "u" && Kt(e, Element)
}
i(__, "isElement$3");
function v_(e) {
  return vr(e, "RegExp")
}
i(v_, "isRegExp");
function Fi(e) {
  return !!(e && e.then && typeof e.then == "function")
}
i(Fi, "isThenable");
function S_(e) {
  return ur(e) && "nativeEvent"in e && "preventDefault"in e && "stopPropagation"in e
}
i(S_, "isSyntheticEvent");
function Kt(e, t) {
  try {
    return e instanceof t
  } catch {
    return !1
  }
}
i(Kt, "isInstanceOf");
function jf(e) {
  return !!(typeof e == "object" && e !== null && (e.__isVue || e._isVue))
}
i(jf, "isVueViewModel");
function or(e, t=0) {
  return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`
}
i(or, "truncate");
function Eu(e, t) {
  if (!Array.isArray(e))
    return "";
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    try {
      jf(s) ? n.push("[VueViewModel]") : n.push(String(s))
    } catch {
      n.push("[value cannot be serialized]")
    }
  }
  return n.join(t)
}
i(Eu, "safeJoin");
function E_(e, t, n=!1) {
  return Gt(e) ? v_(t) ? t.test(e) : Gt(t) ? n ? e === t : e.includes(t) : !1 : !1
}
i(E_, "isMatchingPattern");
function dn(e, t=[], n=!1) {
  return t.some(r => E_(e, r, n))
}
i(dn, "stringMatchesSomePattern");
function b_(e, t, n=250, r, s, o, c) {
  if (!o.exception || !o.exception.values || !c || !Kt(c.originalException, Error))
    return;
  const l = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
  l && (o.exception.values = w_(Ho(e, t, s, c.originalException, r, o.exception.values, l, 0), n))
}
i(b_, "applyAggregateErrorsToEvent");
function Ho(e, t, n, r, s, o, c, l) {
  if (o.length >= n + 1)
    return o;
  let f = [...o];
  if (Kt(r[s], Error)) {
    bu(c, l);
    const h = e(t, r[s])
        , p = f.length;
    wu(h, s, p, l),
        f = Ho(e, t, n, r[s], s, [h, ...f], h, p)
  }
  return Array.isArray(r.errors) && r.errors.forEach( (h, p) => {
        if (Kt(h, Error)) {
          bu(c, l);
          const y = e(t, h)
              , v = f.length;
          wu(y, `errors[${p}]`, v, l),
              f = Ho(e, t, n, h, s, [y, ...f], y, v)
        }
      }
  ),
      f
}
i(Ho, "aggregateExceptionsFromError");
function bu(e, t) {
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
i(bu, "applyExceptionGroupFieldsForParentException");
function wu(e, t, n, r) {
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
i(wu, "applyExceptionGroupFieldsForChildException");
function w_(e, t) {
  return e.map(n => (n.value && (n.value = or(n.value, t)),
      n))
}
i(w_, "truncateAggregateExceptions");
function qf(e) {
  if (e !== void 0)
    return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0
}
i(qf, "getBreadcrumbLogLevelFromHttpStatusCode");
const Cn = "8.37.1"
    , he = globalThis;
function Di(e, t, n) {
  const r = n || he
      , s = r.__SENTRY__ = r.__SENTRY__ || {}
      , o = s[Cn] = s[Cn] || {};
  return o[e] || (o[e] = t())
}
i(Di, "getGlobalSingleton");
const ar = he
    , I_ = 80;
function Xt(e, t={}) {
  if (!e)
    return "<unknown>";
  try {
    let n = e;
    const r = 5
        , s = [];
    let o = 0
        , c = 0;
    const l = " > "
        , f = l.length;
    let h;
    const p = Array.isArray(t) ? t : t.keyAttrs
        , y = !Array.isArray(t) && t.maxStringLength || I_;
    for (; n && o++ < r && (h = R_(n, p),
        !(h === "html" || o > 1 && c + s.length * f + h.length >= y)); )
      s.push(h),
          c += h.length,
          n = n.parentNode;
    return s.reverse().join(l)
  } catch {
    return "<unknown>"
  }
}
i(Xt, "htmlTreeAsString");
function R_(e, t) {
  const n = e
      , r = [];
  if (!n || !n.tagName)
    return "";
  if (ar.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent)
      return n.dataset.sentryComponent;
    if (n.dataset.sentryElement)
      return n.dataset.sentryElement
  }
  r.push(n.tagName.toLowerCase());
  const s = t && t.length ? t.filter(c => n.getAttribute(c)).map(c => [c, n.getAttribute(c)]) : null;
  if (s && s.length)
    s.forEach(c => {
          r.push(`[${c[0]}="${c[1]}"]`)
        }
    );
  else {
    n.id && r.push(`#${n.id}`);
    const c = n.className;
    if (c && Gt(c)) {
      const l = c.split(/\s+/);
      for (const f of l)
        r.push(`.${f}`)
    }
  }
  const o = ["aria-label", "type", "name", "title", "alt"];
  for (const c of o) {
    const l = n.getAttribute(c);
    l && r.push(`[${c}="${l}"]`)
  }
  return r.join("")
}
i(R_, "_htmlElementAsString");
function zf() {
  try {
    return ar.document.location.href
  } catch {
    return ""
  }
}
i(zf, "getLocationHref");
function A_(e) {
  return ar.document && ar.document.querySelector ? ar.document.querySelector(e) : null
}
i(A_, "getDomElement");
function Wf(e) {
  if (!ar.HTMLElement)
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
i(Wf, "getComponentName");
const Hn = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
    , k_ = "Sentry Logger "
    , jo = ["debug", "info", "warn", "error", "log", "assert", "trace"]
    , ui = {};
function Sr(e) {
  if (!("console"in he))
    return e();
  const t = he.console
      , n = {}
      , r = Object.keys(ui);
  r.forEach(s => {
        const o = ui[s];
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
i(Sr, "consoleSandbox");
function O_() {
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
  return Hn ? jo.forEach(n => {
        t[n] = (...r) => {
          e && Sr( () => {
                he.console[n](`${k_}[${n}]:`, ...r)
              }
          )
        }
      }
  ) : jo.forEach(n => {
        t[n] = () => {}
      }
  ),
      t
}
i(O_, "makeLogger");
const D = Di("logger", O_)
    , P_ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function N_(e) {
  return e === "http" || e === "https"
}
i(N_, "isValidProtocol");
function cs(e, t=!1) {
  const {host: n, path: r, pass: s, port: o, projectId: c, protocol: l, publicKey: f} = e;
  return `${l}://${f}${t && s ? `:${s}` : ""}@${n}${o ? `:${o}` : ""}/${r && `${r}/`}${c}`
}
i(cs, "dsnToString");
function T_(e) {
  const t = P_.exec(e);
  if (!t) {
    Sr( () => {
          console.error(`Invalid Sentry Dsn: ${e}`)
        }
    );
    return
  }
  const [n,r,s="",o="",c="",l=""] = t.slice(1);
  let f = ""
      , h = l;
  const p = h.split("/");
  if (p.length > 1 && (f = p.slice(0, -1).join("/"),
      h = p.pop()),
      h) {
    const y = h.match(/^\d+/);
    y && (h = y[0])
  }
  return Vf({
    host: o,
    pass: s,
    path: f,
    projectId: h,
    port: c,
    protocol: n,
    publicKey: r
  })
}
i(T_, "dsnFromString");
function Vf(e) {
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
i(Vf, "dsnFromComponents");
function x_(e) {
  if (!Hn)
    return !0;
  const {port: t, projectId: n, protocol: r} = e;
  return ["protocol", "publicKey", "host", "projectId"].find(c => e[c] ? !1 : (D.error(`Invalid Sentry Dsn: ${c} missing`),
      !0)) ? !1 : n.match(/^\d+$/) ? N_(r) ? t && isNaN(parseInt(t, 10)) ? (D.error(`Invalid Sentry Dsn: Invalid port ${t}`),
      !1) : !0 : (D.error(`Invalid Sentry Dsn: Invalid protocol ${r}`),
      !1) : (D.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
      !1)
}
i(x_, "validateDsn");
function C_(e) {
  const t = typeof e == "string" ? T_(e) : Vf(e);
  if (!(!t || !x_(t)))
    return t
}
i(C_, "makeDsn");
class Tt extends Error {
  static{i(this, "SentryError")
  }constructor(t, n="warn") {
    super(t),
        this.message = t,
        this.name = new.target.prototype.constructor.name,
        Object.setPrototypeOf(this, new.target.prototype),
        this.logLevel = n
  }
}
function it(e, t, n) {
  if (!(t in e))
    return;
  const r = e[t]
      , s = n(r);
  typeof s == "function" && Gf(s, r),
      e[t] = s
}
i(it, "fill");
function gt(e, t, n) {
  try {
    Object.defineProperty(e, t, {
      value: n,
      writable: !0,
      configurable: !0
    })
  } catch {
    Hn && D.log(`Failed to add non-enumerable property "${t}" to object`, e)
  }
}
i(gt, "addNonEnumerableProperty");
function Gf(e, t) {
  try {
    const n = t.prototype || {};
    e.prototype = t.prototype = n,
        gt(e, "__sentry_original__", t)
  } catch {}
}
i(Gf, "markFunctionWrapped");
function Ua(e) {
  return e.__sentry_original__
}
i(Ua, "getOriginalFunction");
function M_(e) {
  return Object.keys(e).map(t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&")
}
i(M_, "urlEncode");
function Yf(e) {
  if (Fa(e))
    return {
      message: e.message,
      name: e.name,
      stack: e.stack,
      ...Ru(e)
    };
  if (Mi(e)) {
    const t = {
      type: e.type,
      target: Iu(e.target),
      currentTarget: Iu(e.currentTarget),
      ...Ru(e)
    };
    return typeof CustomEvent < "u" && Kt(e, CustomEvent) && (t.detail = e.detail),
        t
  } else
    return e
}
i(Yf, "convertToPlainObject");
function Iu(e) {
  try {
    return __(e) ? Xt(e) : Object.prototype.toString.call(e)
  } catch {
    return "<unknown>"
  }
}
i(Iu, "serializeEventTarget");
function Ru(e) {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t
  } else
    return {}
}
i(Ru, "getOwnProperties");
function F_(e, t=40) {
  const n = Object.keys(Yf(e));
  n.sort();
  const r = n[0];
  if (!r)
    return "[object has no keys]";
  if (r.length >= t)
    return or(r, t);
  for (let s = n.length; s > 0; s--) {
    const o = n.slice(0, s).join(", ");
    if (!(o.length > t))
      return s === n.length ? o : or(o, t)
  }
  return ""
}
i(F_, "extractExceptionKeysForMessage");
function $e(e) {
  return qo(e, new Map)
}
i($e, "dropUndefinedKeys");
function qo(e, t) {
  if (D_(e)) {
    const n = t.get(e);
    if (n !== void 0)
      return n;
    const r = {};
    t.set(e, r);
    for (const s of Object.getOwnPropertyNames(e))
      typeof e[s] < "u" && (r[s] = qo(e[s], t));
    return r
  }
  if (Array.isArray(e)) {
    const n = t.get(e);
    if (n !== void 0)
      return n;
    const r = [];
    return t.set(e, r),
        e.forEach(s => {
              r.push(qo(s, t))
            }
        ),
        r
  }
  return e
}
i(qo, "_dropUndefinedKeys");
function D_(e) {
  if (!ur(e))
    return !1;
  try {
    const t = Object.getPrototypeOf(e).constructor.name;
    return !t || t === "Object"
  } catch {
    return !0
  }
}
i(D_, "isPojo");
const Kf = 50
    , Un = "?"
    , Au = /\(error: (.*)\)/
    , ku = /captureMessage|captureException/;
function Xf(...e) {
  const t = e.sort( (n, r) => n[0] - r[0]).map(n => n[1]);
  return (n, r=0, s=0) => {
    const o = []
        , c = n.split(`
`);
    for (let l = r; l < c.length; l++) {
      const f = c[l];
      if (f.length > 1024)
        continue;
      const h = Au.test(f) ? f.replace(Au, "$1") : f;
      if (!h.match(/\S*Error: /)) {
        for (const p of t) {
          const y = p(h);
          if (y) {
            o.push(y);
            break
          }
        }
        if (o.length >= Kf + s)
          break
      }
    }
    return U_(o.slice(s))
  }
}
i(Xf, "createStackParser");
function L_(e) {
  return Array.isArray(e) ? Xf(...e) : e
}
i(L_, "stackParserFromStackParserOptions");
function U_(e) {
  if (!e.length)
    return [];
  const t = Array.from(e);
  return /sentryWrapped/.test(Ps(t).function || "") && t.pop(),
      t.reverse(),
  ku.test(Ps(t).function || "") && (t.pop(),
  ku.test(Ps(t).function || "") && t.pop()),
      t.slice(0, Kf).map(n => ({
        ...n,
        filename: n.filename || Ps(t).filename,
        function: n.function || Un
      }))
}
i(U_, "stripSentryFramesAndReverse");
function Ps(e) {
  return e[e.length - 1] || {}
}
i(Ps, "getLastStackFrame");
const _o = "<anonymous>";
function Qt(e) {
  try {
    return !e || typeof e != "function" ? _o : e.name || _o
  } catch {
    return _o
  }
}
i(Qt, "getFunctionName");
function Ou(e) {
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
i(Ou, "getFramesFromEvent");
const Ys = {}
    , Pu = {};
function gn(e, t) {
  Ys[e] = Ys[e] || [],
      Ys[e].push(t)
}
i(gn, "addHandler$1");
function _n(e, t) {
  if (!Pu[e]) {
    Pu[e] = !0;
    try {
      t()
    } catch (n) {
      Hn && D.error(`Error while instrumenting ${e}`, n)
    }
  }
}
i(_n, "maybeInstrument");
function yt(e, t) {
  const n = e && Ys[e];
  if (n)
    for (const r of n)
      try {
        r(t)
      } catch (s) {
        Hn && D.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${Qt(r)}
Error:`, s)
      }
}
i(yt, "triggerHandlers$1");
function B_(e) {
  const t = "console";
  gn(t, e),
      _n(t, $_)
}
i(B_, "addConsoleInstrumentationHandler");
function $_() {
  "console"in he && jo.forEach(function(e) {
    e in he.console && it(he.console, e, function(t) {
      return ui[e] = t,
          function(...n) {
            yt("console", {
              args: n,
              level: e
            });
            const s = ui[e];
            s && s.apply(he.console, n)
          }
    })
  })
}
i($_, "instrumentConsole");
const zo = he;
function Qf() {
  if (!("fetch"in zo))
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
i(Qf, "supportsFetch");
function Wo(e) {
  return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
}
i(Wo, "isNativeFunction");
function H_() {
  if (typeof EdgeRuntime == "string")
    return !0;
  if (!Qf())
    return !1;
  if (Wo(zo.fetch))
    return !0;
  let e = !1;
  const t = zo.document;
  if (t && typeof t.createElement == "function")
    try {
      const n = t.createElement("iframe");
      n.hidden = !0,
          t.head.appendChild(n),
      n.contentWindow && n.contentWindow.fetch && (e = Wo(n.contentWindow.fetch)),
          t.head.removeChild(n)
    } catch (n) {
      Hn && D.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
    }
  return e
}
i(H_, "supportsNativeFetch");
const Jf = 1e3;
function us() {
  return Date.now() / Jf
}
i(us, "dateTimestampInSeconds");
function j_() {
  const {performance: e} = he;
  if (!e || !e.now)
    return us;
  const t = Date.now() - e.now()
      , n = e.timeOrigin == null ? t : e.timeOrigin;
  return () => (n + e.now()) / Jf
}
i(j_, "createUnixTimestampInSecondsFunc");
const Je = j_()
    , Ze = ( () => {
      const {performance: e} = he;
      if (!e || !e.now)
        return;
      const t = 3600 * 1e3
          , n = e.now()
          , r = Date.now()
          , s = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t
          , o = s < t
          , c = e.timing && e.timing.navigationStart
          , f = typeof c == "number" ? Math.abs(c + n - r) : t
          , h = f < t;
      return o || h ? s <= f ? e.timeOrigin : c : r
    }
)();
function Zf(e, t) {
  const n = "fetch";
  gn(n, e),
      _n(n, () => ed(void 0, t))
}
i(Zf, "addFetchInstrumentationHandler");
function q_(e) {
  const t = "fetch-body-resolved";
  gn(t, e),
      _n(t, () => ed(W_))
}
i(q_, "addFetchEndInstrumentationHandler");
function ed(e, t=!1) {
  t && !H_() || it(he, "fetch", function(n) {
    return function(...r) {
      const {method: s, url: o} = V_(r)
          , c = {
        args: r,
        fetchData: {
          method: s,
          url: o
        },
        startTimestamp: Je() * 1e3
      };
      e || yt("fetch", {
        ...c
      });
      const l = new Error().stack;
      return n.apply(he, r).then(async f => (e ? e(f) : yt("fetch", {
            ...c,
            endTimestamp: Je() * 1e3,
            response: f
          }),
              f), f => {
            throw yt("fetch", {
              ...c,
              endTimestamp: Je() * 1e3,
              error: f
            }),
            Fa(f) && f.stack === void 0 && (f.stack = l,
                gt(f, "framesToPop", 1)),
                f
          }
      )
    }
  })
}
i(ed, "instrumentFetch");
async function z_(e, t) {
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
      let c;
      try {
        c = setTimeout( () => {
              n.cancel().then(null, () => {}
              )
            }
            , 5e3);
        const {done: l} = await r.read();
        clearTimeout(c),
        l && (t(),
            o = !1)
      } catch {
        o = !1
      } finally {
        clearTimeout(c)
      }
    }
    clearTimeout(s),
        r.releaseLock(),
        n.cancel().then(null, () => {}
        )
  }
}
i(z_, "resolveResponse");
function W_(e) {
  let t;
  try {
    t = e.clone()
  } catch {
    return
  }
  z_(t, () => {
        yt("fetch-body-resolved", {
          endTimestamp: Je() * 1e3,
          response: e
        })
      }
  )
}
i(W_, "streamHandler");
function Vo(e, t) {
  return !!e && typeof e == "object" && !!e[t]
}
i(Vo, "hasProp");
function Nu(e) {
  return typeof e == "string" ? e : e ? Vo(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
}
i(Nu, "getUrlFromResource");
function V_(e) {
  if (e.length === 0)
    return {
      method: "GET",
      url: ""
    };
  if (e.length === 2) {
    const [n,r] = e;
    return {
      url: Nu(n),
      method: Vo(r, "method") ? String(r.method).toUpperCase() : "GET"
    }
  }
  const t = e[0];
  return {
    url: Nu(t),
    method: Vo(t, "method") ? String(t.method).toUpperCase() : "GET"
  }
}
i(V_, "parseFetchArgs");
let Ns = null;
function td(e) {
  const t = "error";
  gn(t, e),
      _n(t, G_)
}
i(td, "addGlobalErrorInstrumentationHandler");
function G_() {
  Ns = he.onerror,
      he.onerror = function(e, t, n, r, s) {
        return yt("error", {
          column: r,
          error: s,
          line: n,
          msg: e,
          url: t
        }),
            Ns && !Ns.__SENTRY_LOADER__ ? Ns.apply(this, arguments) : !1
      }
      ,
      he.onerror.__SENTRY_INSTRUMENTED__ = !0
}
i(G_, "instrumentError");
let Ts = null;
function nd(e) {
  const t = "unhandledrejection";
  gn(t, e),
      _n(t, Y_)
}
i(nd, "addGlobalUnhandledRejectionInstrumentationHandler");
function Y_() {
  Ts = he.onunhandledrejection,
      he.onunhandledrejection = function(e) {
        return yt("unhandledrejection", e),
            Ts && !Ts.__SENTRY_LOADER__ ? Ts.apply(this, arguments) : !0
      }
      ,
      he.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}
i(Y_, "instrumentUnhandledRejection");
function K_() {
  return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
}
i(K_, "isBrowserBundle");
function X_() {
  return "npm"
}
i(X_, "getSDKSource");
function Q_() {
  return !K_() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
}
i(Q_, "isNodeEnv");
function Tu() {
  return typeof window < "u" && (!Q_() || J_())
}
i(Tu, "isBrowser");
function J_() {
  return he.process !== void 0 && he.process.type === "renderer"
}
i(J_, "isElectronNodeRenderer");
function Z_() {
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
i(Z_, "memoBuilder");
function Ne() {
  const e = he
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
i(Ne, "uuid4");
function rd(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : void 0
}
i(rd, "getFirstException");
function an(e) {
  const {message: t, event_id: n} = e;
  if (t)
    return t;
  const r = rd(e);
  return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
}
i(an, "getEventDescription");
function Go(e, t, n) {
  const r = e.exception = e.exception || {}
      , s = r.values = r.values || []
      , o = s[0] = s[0] || {};
  o.value || (o.value = t || ""),
  o.type || (o.type = n || "Error")
}
i(Go, "addExceptionTypeValue");
function Jr(e, t) {
  const n = rd(e);
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
i(Jr, "addExceptionMechanism");
function xu(e) {
  if (e && e.__sentry_captured__)
    return !0;
  try {
    gt(e, "__sentry_captured__", !0)
  } catch {}
  return !1
}
i(xu, "checkOrSetAlreadyCaught");
function sd(e) {
  return Array.isArray(e) ? e : [e]
}
i(sd, "arrayify");
function Nt(e, t=100, n=1 / 0) {
  try {
    return Yo("", e, t, n)
  } catch (r) {
    return {
      ERROR: `**non-serializable** (${r})`
    }
  }
}
i(Nt, "normalize");
function id(e, t=3, n=100 * 1024) {
  const r = Nt(e, t);
  return rv(r) > n ? id(e, t - 1, n) : r
}
i(id, "normalizeToSize");
function Yo(e, t, n=1 / 0, r=1 / 0, s=Z_()) {
  const [o,c] = s;
  if (t == null || ["boolean", "string"].includes(typeof t) || typeof t == "number" && Number.isFinite(t))
    return t;
  const l = ev(e, t);
  if (!l.startsWith("[object "))
    return l;
  if (t.__sentry_skip_normalization__)
    return t;
  const f = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : n;
  if (f === 0)
    return l.replace("object ", "");
  if (o(t))
    return "[Circular ~]";
  const h = t;
  if (h && typeof h.toJSON == "function")
    try {
      const b = h.toJSON();
      return Yo("", b, f - 1, r, s)
    } catch {}
  const p = Array.isArray(t) ? [] : {};
  let y = 0;
  const v = Yf(t);
  for (const b in v) {
    if (!Object.prototype.hasOwnProperty.call(v, b))
      continue;
    if (y >= r) {
      p[b] = "[MaxProperties ~]";
      break
    }
    const S = v[b];
    p[b] = Yo(b, S, f - 1, r, s),
        y++
  }
  return c(t),
      p
}
i(Yo, "visit");
function ev(e, t) {
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
    if (jf(t))
      return "[VueViewModel]";
    if (S_(t))
      return "[SyntheticEvent]";
    if (typeof t == "number" && !Number.isFinite(t))
      return `[${t}]`;
    if (typeof t == "function")
      return `[Function: ${Qt(t)}]`;
    if (typeof t == "symbol")
      return `[${String(t)}]`;
    if (typeof t == "bigint")
      return `[BigInt: ${String(t)}]`;
    const n = tv(t);
    return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`
  } catch (n) {
    return `**non-serializable** (${n})`
  }
}
i(ev, "stringifyValue");
function tv(e) {
  const t = Object.getPrototypeOf(e);
  return t ? t.constructor.name : "null prototype"
}
i(tv, "getConstructorName");
function nv(e) {
  return ~-encodeURI(e).split(/%..|./).length
}
i(nv, "utf8Length");
function rv(e) {
  return nv(JSON.stringify(e))
}
i(rv, "jsonSize");
var qt;
(function(e) {
      e[e.PENDING = 0] = "PENDING";
      const n = 1;
      e[e.RESOLVED = n] = "RESOLVED";
      const r = 2;
      e[e.REJECTED = r] = "REJECTED"
    }
)(qt || (qt = {}));
function Jt(e) {
  return new pt(t => {
        t(e)
      }
  )
}
i(Jt, "resolvedSyncPromise");
function li(e) {
  return new pt( (t, n) => {
        n(e)
      }
  )
}
i(li, "rejectedSyncPromise");
class pt {
  static{i(this, "SyncPromise")
  }constructor(t) {
    pt.prototype.__init.call(this),
        pt.prototype.__init2.call(this),
        pt.prototype.__init3.call(this),
        pt.prototype.__init4.call(this),
        this._state = qt.PENDING,
        this._handlers = [];
    try {
      t(this._resolve, this._reject)
    } catch (n) {
      this._reject(n)
    }
  }
  then(t, n) {
    return new pt( (r, s) => {
          this._handlers.push([!1, o => {
            if (!t)
              r(o);
            else
              try {
                r(t(o))
              } catch (c) {
                s(c)
              }
          }
            , o => {
              if (!n)
                s(o);
              else
                try {
                  r(n(o))
                } catch (c) {
                  s(c)
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
    return new pt( (n, r) => {
          let s, o;
          return this.then(c => {
                o = !1,
                    s = c,
                t && t()
              }
              , c => {
                o = !0,
                    s = c,
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
      this._setResult(qt.RESOLVED, t)
    }
  }
  __init2() {
    this._reject = t => {
      this._setResult(qt.REJECTED, t)
    }
  }
  __init3() {
    this._setResult = (t, n) => {
      if (this._state === qt.PENDING) {
        if (Fi(n)) {
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
      if (this._state === qt.PENDING)
        return;
      const t = this._handlers.slice();
      this._handlers = [],
          t.forEach(n => {
                n[0] || (this._state === qt.RESOLVED && n[1](this._value),
                this._state === qt.REJECTED && n[2](this._value),
                    n[0] = !0)
              }
          )
    }
  }
}
function sv(e) {
  const t = [];
  function n() {
    return e === void 0 || t.length < e
  }
  i(n, "isReady");
  function r(c) {
    return t.splice(t.indexOf(c), 1)[0] || Promise.resolve(void 0)
  }
  i(r, "remove");
  function s(c) {
    if (!n())
      return li(new Tt("Not adding Promise because buffer limit was reached."));
    const l = c();
    return t.indexOf(l) === -1 && t.push(l),
        l.then( () => r(l)).then(null, () => r(l).then(null, () => {}
        )),
        l
  }
  i(s, "add");
  function o(c) {
    return new pt( (l, f) => {
          let h = t.length;
          if (!h)
            return l(!0);
          const p = setTimeout( () => {
                c && c > 0 && l(!1)
              }
              , c);
          t.forEach(y => {
                Jt(y).then( () => {
                      --h || (clearTimeout(p),
                          l(!0))
                    }
                    , f)
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
i(sv, "makePromiseBuffer");
function Mn(e) {
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
i(Mn, "parseUrl$1");
const iv = ["fatal", "error", "warning", "log", "info", "debug"];
function od(e) {
  return e === "warn" ? "warning" : iv.includes(e) ? e : "log"
}
i(od, "severityLevelFromString");
const er = "baggage"
    , Ba = "sentry-"
    , ov = /^sentry-/
    , av = 8192;
function ad(e) {
  const t = cv(e);
  if (!t)
    return;
  const n = Object.entries(t).reduce( (r, [s,o]) => {
        if (s.match(ov)) {
          const c = s.slice(Ba.length);
          r[c] = o
        }
        return r
      }
      , {});
  if (Object.keys(n).length > 0)
    return n
}
i(ad, "baggageHeaderToDynamicSamplingContext");
function cd(e) {
  if (!e)
    return;
  const t = Object.entries(e).reduce( (n, [r,s]) => (s && (n[`${Ba}${r}`] = s),
      n), {});
  return uv(t)
}
i(cd, "dynamicSamplingContextToSentryBaggageHeader");
function cv(e) {
  if (!(!e || !Gt(e) && !Array.isArray(e)))
    return Array.isArray(e) ? e.reduce( (t, n) => {
          const r = Cu(n);
          return Object.entries(r).forEach( ([s,o]) => {
                t[s] = o
              }
          ),
              t
        }
        , {}) : Cu(e)
}
i(cv, "parseBaggageHeader");
function Cu(e) {
  return e.split(",").map(t => t.split("=").map(n => decodeURIComponent(n.trim()))).reduce( (t, [n,r]) => (n && r && (t[n] = r),
      t), {})
}
i(Cu, "baggageHeaderToObject");
function uv(e) {
  if (Object.keys(e).length !== 0)
    return Object.entries(e).reduce( (t, [n,r], s) => {
          const o = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`
              , c = s === 0 ? o : `${t},${o}`;
          return c.length > av ? (Hn && D.warn(`Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`),
              t) : c
        }
        , "")
}
i(uv, "objectToBaggageHeader");
const lv = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
function fv(e) {
  if (!e)
    return;
  const t = e.match(lv);
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
i(fv, "extractTraceparentData");
function dv(e, t) {
  const n = fv(e)
      , r = ad(t)
      , {traceId: s, parentSpanId: o, parentSampled: c} = n || {};
  return n ? {
    traceId: s || Ne(),
    parentSpanId: o || Ne().substring(16),
    spanId: Ne().substring(16),
    sampled: c,
    dsc: r || {}
  } : {
    traceId: s || Ne(),
    spanId: Ne().substring(16)
  }
}
i(dv, "propagationContextFromHeaders");
function $a(e=Ne(), t=Ne().substring(16), n) {
  let r = "";
  return n !== void 0 && (r = n ? "-1" : "-0"),
      `${e}-${t}${r}`
}
i($a, "generateSentryTraceHeader");
function jn(e, t=[]) {
  return [e, t]
}
i(jn, "createEnvelope");
function hv(e, t) {
  const [n,r] = e;
  return [n, [...r, t]]
}
i(hv, "addItemToEnvelope");
function Mu(e, t) {
  const n = e[1];
  for (const r of n) {
    const s = r[0].type;
    if (t(r, s))
      return !0
  }
  return !1
}
i(Mu, "forEachEnvelopeItem");
function Ko(e) {
  return he.__SENTRY__ && he.__SENTRY__.encodePolyfill ? he.__SENTRY__.encodePolyfill(e) : new TextEncoder().encode(e)
}
i(Ko, "encodeUTF8");
function pv(e) {
  const [t,n] = e;
  let r = JSON.stringify(t);
  function s(o) {
    typeof r == "string" ? r = typeof o == "string" ? r + o : [Ko(r), o] : r.push(typeof o == "string" ? Ko(o) : o)
  }
  i(s, "append");
  for (const o of n) {
    const [c,l] = o;
    if (s(`
${JSON.stringify(c)}
`),
    typeof l == "string" || l instanceof Uint8Array)
      s(l);
    else {
      let f;
      try {
        f = JSON.stringify(l)
      } catch {
        f = JSON.stringify(Nt(l))
      }
      s(f)
    }
  }
  return typeof r == "string" ? r : mv(r)
}
i(pv, "serializeEnvelope");
function mv(e) {
  const t = e.reduce( (s, o) => s + o.length, 0)
      , n = new Uint8Array(t);
  let r = 0;
  for (const s of e)
    n.set(s, r),
        r += s.length;
  return n
}
i(mv, "concatBuffers");
function yv(e) {
  return [{
    type: "span"
  }, e]
}
i(yv, "createSpanEnvelopeItem");
function gv(e) {
  const t = typeof e.data == "string" ? Ko(e.data) : e.data;
  return [$e({
    type: "attachment",
    length: t.length,
    filename: e.filename,
    content_type: e.contentType,
    attachment_type: e.attachmentType
  }), t]
}
i(gv, "createAttachmentEnvelopeItem");
const _v = {
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
function Fu(e) {
  return _v[e]
}
i(Fu, "envelopeItemTypeToDataCategory");
function Ha(e) {
  if (!e || !e.sdk)
    return;
  const {name: t, version: n} = e.sdk;
  return {
    name: t,
    version: n
  }
}
i(Ha, "getSdkMetadataForEnvelopeHeader");
function ud(e, t, n, r) {
  const s = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...t && {
      sdk: t
    },
    ...!!n && r && {
      dsn: cs(r)
    },
    ...s && {
      trace: $e({
        ...s
      })
    }
  }
}
i(ud, "createEventEnvelopeHeaders");
function vv(e, t, n) {
  const r = [{
    type: "client_report"
  }, {
    timestamp: n || us(),
    discarded_events: e
  }];
  return jn(t ? {
    dsn: t
  } : {}, [r])
}
i(vv, "createClientReportEnvelope");
const Sv = 60 * 1e3;
function Ev(e, t=Date.now()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n))
    return n * 1e3;
  const r = Date.parse(`${e}`);
  return isNaN(r) ? Sv : r - t
}
i(Ev, "parseRetryAfterHeader");
function bv(e, t) {
  return e[t] || e.all || 0
}
i(bv, "disabledUntil");
function ld(e, t, n=Date.now()) {
  return bv(e, t) > n
}
i(ld, "isRateLimited");
function fd(e, {statusCode: t, headers: n}, r=Date.now()) {
  const s = {
    ...e
  }
      , o = n && n["x-sentry-rate-limits"]
      , c = n && n["retry-after"];
  if (o)
    for (const l of o.trim().split(",")) {
      const [f,h,,,p] = l.split(":", 5)
          , y = parseInt(f, 10)
          , v = (isNaN(y) ? 60 : y) * 1e3;
      if (!h)
        s.all = r + v;
      else
        for (const b of h.split(";"))
          b === "metric_bucket" ? (!p || p.split(";").includes("custom")) && (s[b] = r + v) : s[b] = r + v
    }
  else
    c ? s.all = r + Ev(c, r) : t === 429 && (s.all = r + 60 * 1e3);
  return s
}
i(fd, "updateRateLimits");
function wv(e, t) {
  return e ?? t()
}
i(wv, "_nullishCoalesce");
function ut(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const s = e[r]
        , o = e[r + 1];
    if (r += 2,
    (s === "optionalAccess" || s === "optionalCall") && n == null)
      return;
    s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...c) => n.call(t, ...c)),
        t = void 0)
  }
  return n
}
i(ut, "_optionalChain");
function fi() {
  return {
    traceId: Ne(),
    spanId: Ne().substring(16)
  }
}
i(fi, "generatePropagationContext");
const xs = he;
function Iv() {
  const e = xs.chrome
      , t = e && e.app && e.app.runtime
      , n = "history"in xs && !!xs.history.pushState && !!xs.history.replaceState;
  return !t && n
}
i(Iv, "supportsHistory");
const oe = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function Er() {
  return ja(he),
      he
}
i(Er, "getMainCarrier");
function ja(e) {
  const t = e.__SENTRY__ = e.__SENTRY__ || {};
  return t.version = t.version || Cn,
      t[Cn] = t[Cn] || {}
}
i(ja, "getSentryCarrier");
function Rv(e) {
  const t = Je()
      , n = {
    sid: Ne(),
    init: !0,
    timestamp: t,
    started: t,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: !1,
    toJSON: () => kv(n)
  };
  return e && lr(n, e),
      n
}
i(Rv, "makeSession$1");
function lr(e, t={}) {
  if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
  !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)),
      e.timestamp = t.timestamp || Je(),
  t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
  t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
  t.sid && (e.sid = t.sid.length === 32 ? t.sid : Ne()),
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
i(lr, "updateSession");
function Av(e, t) {
  let n = {};
  t ? n = {
    status: t
  } : e.status === "ok" && (n = {
    status: "exited"
  }),
      lr(e, n)
}
i(Av, "closeSession");
function kv(e) {
  return $e({
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
i(kv, "sessionToJSON");
const Xo = "_sentrySpan";
function Zr(e, t) {
  t ? gt(e, Xo, t) : delete e[Xo]
}
i(Zr, "_setSpanForScope");
function di(e) {
  return e[Xo]
}
i(di, "_getSpanForScope");
const Ov = 100;
class qa {
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
        this._propagationContext = fi()
  }
  clone() {
    const t = new qa;
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
        Zr(t, di(this)),
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
    this._session && lr(this._session, {
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
        , [r,s] = n instanceof mn ? [n.getScopeData(), n.getRequestSession()] : ur(n) ? [t, t.requestSession] : []
        , {tags: o, extra: c, user: l, contexts: f, level: h, fingerprint: p=[], propagationContext: y} = r || {};
    return this._tags = {
      ...this._tags,
      ...o
    },
        this._extra = {
          ...this._extra,
          ...c
        },
        this._contexts = {
          ...this._contexts,
          ...f
        },
    l && Object.keys(l).length && (this._user = l),
    h && (this._level = h),
    p.length && (this._fingerprint = p),
    y && (this._propagationContext = y),
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
        Zr(this, void 0),
        this._attachments = [],
        this._propagationContext = fi(),
        this._notifyScopeListeners(),
        this
  }
  addBreadcrumb(t, n) {
    const r = typeof n == "number" ? n : Ov;
    if (r <= 0)
      return this;
    const s = {
      timestamp: us(),
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
      span: di(this)
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
    const r = n && n.event_id ? n.event_id : Ne();
    if (!this._client)
      return D.warn("No client configured on scope - will not capture exception!"),
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
    const s = r && r.event_id ? r.event_id : Ne();
    if (!this._client)
      return D.warn("No client configured on scope - will not capture message!"),
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
    const r = n && n.event_id ? n.event_id : Ne();
    return this._client ? (this._client.captureEvent(t, {
      ...n,
      event_id: r
    }, this),
        r) : (D.warn("No client configured on scope - will not capture event!"),
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
const mn = qa;
function Pv() {
  return Di("defaultCurrentScope", () => new mn)
}
i(Pv, "getDefaultCurrentScope");
function Nv() {
  return Di("defaultIsolationScope", () => new mn)
}
i(Nv, "getDefaultIsolationScope");
class Tv {
  static{i(this, "AsyncContextStack")
  }constructor(t, n) {
    let r;
    t ? r = t : r = new mn;
    let s;
    n ? s = n : s = new mn,
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
    return Fi(r) ? r.then(s => (this._popScope(),
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
function fr() {
  const e = Er()
      , t = ja(e);
  return t.stack = t.stack || new Tv(Pv(),Nv())
}
i(fr, "getAsyncContextStack");
function xv(e) {
  return fr().withScope(e)
}
i(xv, "withScope$1");
function Cv(e, t) {
  const n = fr();
  return n.withScope( () => (n.getStackTop().scope = e,
      t(e)))
}
i(Cv, "withSetScope");
function Du(e) {
  return fr().withScope( () => e(fr().getIsolationScope()))
}
i(Du, "withIsolationScope");
function Mv() {
  return {
    withIsolationScope: Du,
    withScope: xv,
    withSetScope: Cv,
    withSetIsolationScope: (e, t) => Du(t),
    getCurrentScope: () => fr().getScope(),
    getIsolationScope: () => fr().getIsolationScope()
  }
}
i(Mv, "getStackAsyncContextStrategy");
function ls(e) {
  const t = ja(e);
  return t.acs ? t.acs : Mv()
}
i(ls, "getAsyncContextStrategy");
function Re() {
  const e = Er();
  return ls(e).getCurrentScope()
}
i(Re, "getCurrentScope");
function ft() {
  const e = Er();
  return ls(e).getIsolationScope()
}
i(ft, "getIsolationScope");
function Fv() {
  return Di("globalScope", () => new mn)
}
i(Fv, "getGlobalScope");
function za(...e) {
  const t = Er()
      , n = ls(t);
  if (e.length === 2) {
    const [r,s] = e;
    return r ? n.withSetScope(r, s) : n.withScope(s)
  }
  return n.withScope(e[0])
}
i(za, "withScope");
function ue() {
  return Re().getClient()
}
i(ue, "getClient");
const Dv = "_sentryMetrics";
function Qo(e) {
  const t = e[Dv];
  if (!t)
    return;
  const n = {};
  for (const [,[r,s]] of t)
    (n[r] || (n[r] = [])).push($e(s));
  return n
}
i(Qo, "getMetricSummaryJsonForSpan");
const Wt = "sentry.source"
    , dd = "sentry.sample_rate"
    , Bn = "sentry.op"
    , je = "sentry.origin"
    , Jo = "sentry.idle_span_finish_reason"
    , Li = "sentry.measurement_unit"
    , Ui = "sentry.measurement_value"
    , Lv = "sentry.profile_id"
    , Wa = "sentry.exclusive_time"
    , Uv = 0
    , hd = 1
    , He = 2;
function Bv(e) {
  if (e < 400 && e >= 100)
    return {
      code: hd
    };
  if (e >= 400 && e < 500)
    switch (e) {
      case 401:
        return {
          code: He,
          message: "unauthenticated"
        };
      case 403:
        return {
          code: He,
          message: "permission_denied"
        };
      case 404:
        return {
          code: He,
          message: "not_found"
        };
      case 409:
        return {
          code: He,
          message: "already_exists"
        };
      case 413:
        return {
          code: He,
          message: "failed_precondition"
        };
      case 429:
        return {
          code: He,
          message: "resource_exhausted"
        };
      case 499:
        return {
          code: He,
          message: "cancelled"
        };
      default:
        return {
          code: He,
          message: "invalid_argument"
        }
    }
  if (e >= 500 && e < 600)
    switch (e) {
      case 501:
        return {
          code: He,
          message: "unimplemented"
        };
      case 503:
        return {
          code: He,
          message: "unavailable"
        };
      case 504:
        return {
          code: He,
          message: "deadline_exceeded"
        };
      default:
        return {
          code: He,
          message: "internal_error"
        }
    }
  return {
    code: He,
    message: "unknown_error"
  }
}
i(Bv, "getSpanStatusFromHttpCode");
function pd(e, t) {
  e.setAttribute("http.response.status_code", t);
  const n = Bv(t);
  n.message !== "unknown_error" && e.setStatus(n)
}
i(pd, "setHttpStatus");
const md = 0
    , yd = 1;
function $v(e) {
  const {spanId: t, traceId: n} = e.spanContext()
      , {data: r, op: s, parent_span_id: o, status: c, origin: l} = ye(e);
  return $e({
    parent_span_id: o,
    span_id: t,
    trace_id: n,
    data: r,
    op: s,
    status: c,
    origin: l
  })
}
i($v, "spanToTransactionTraceContext");
function Hv(e) {
  const {spanId: t, traceId: n} = e.spanContext()
      , {parent_span_id: r} = ye(e);
  return $e({
    parent_span_id: r,
    span_id: t,
    trace_id: n
  })
}
i(Hv, "spanToTraceContext");
function gd(e) {
  const {traceId: t, spanId: n} = e.spanContext()
      , r = qn(e);
  return $a(t, n, r)
}
i(gd, "spanToTraceHeader");
function Fn(e) {
  return typeof e == "number" ? Lu(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? Lu(e.getTime()) : Je()
}
i(Fn, "spanTimeInputToSeconds");
function Lu(e) {
  return e > 9999999999 ? e / 1e3 : e
}
i(Lu, "ensureTimestampInSeconds");
function ye(e) {
  if (qv(e))
    return e.getSpanJSON();
  try {
    const {spanId: t, traceId: n} = e.spanContext();
    if (jv(e)) {
      const {attributes: r, startTime: s, name: o, endTime: c, parentSpanId: l, status: f} = e;
      return $e({
        span_id: t,
        trace_id: n,
        data: r,
        description: o,
        parent_span_id: l,
        start_timestamp: Fn(s),
        timestamp: Fn(c) || void 0,
        status: _d(f),
        op: r[Bn],
        origin: r[je],
        _metrics_summary: Qo(e)
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
i(ye, "spanToJSON");
function jv(e) {
  const t = e;
  return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
}
i(jv, "spanIsOpenTelemetrySdkTraceBaseSpan");
function qv(e) {
  return typeof e.getSpanJSON == "function"
}
i(qv, "spanIsSentrySpan");
function qn(e) {
  const {traceFlags: t} = e.spanContext();
  return t === yd
}
i(qn, "spanIsSampled");
function _d(e) {
  if (!(!e || e.code === Uv))
    return e.code === hd ? "ok" : e.message || "unknown_error"
}
i(_d, "getStatusMessage");
const Dn = "_sentryChildSpans"
    , Zo = "_sentryRootSpan";
function vd(e, t) {
  const n = e[Zo] || e;
  gt(t, Zo, n),
      e[Dn] ? e[Dn].add(t) : gt(e, Dn, new Set([t]))
}
i(vd, "addChildSpanToSpan");
function zv(e, t) {
  e[Dn] && e[Dn].delete(t)
}
i(zv, "removeChildSpanFromSpan");
function Ks(e) {
  const t = new Set;
  function n(r) {
    if (!t.has(r) && qn(r)) {
      t.add(r);
      const s = r[Dn] ? Array.from(r[Dn]) : [];
      for (const o of s)
        n(o)
    }
  }
  return i(n, "addSpanChildren"),
      n(e),
      Array.from(t)
}
i(Ks, "getSpanDescendants");
function We(e) {
  return e[Zo] || e
}
i(We, "getRootSpan");
function Ve() {
  const e = Er()
      , t = ls(e);
  return t.getActiveSpan ? t.getActiveSpan() : di(Re())
}
i(Ve, "getActiveSpan");
let Uu = !1;
function Wv() {
  Uu || (Uu = !0,
      td(ea),
      nd(ea))
}
i(Wv, "registerSpanErrorInstrumentation");
function ea() {
  const e = Ve()
      , t = e && We(e);
  if (t) {
    const n = "internal_error";
    oe && D.log(`[Tracing] Root span: ${n} -> Global error occurred`),
        t.setStatus({
          code: He,
          message: n
        })
  }
}
i(ea, "errorCallback");
ea.tag = "sentry_tracingErrorCallback";
const Sd = "_sentryScope"
    , Ed = "_sentryIsolationScope";
function Vv(e, t, n) {
  e && (gt(e, Ed, n),
      gt(e, Sd, t))
}
i(Vv, "setCapturedScopesOnSpan");
function Bu(e) {
  return {
    scope: e[Sd],
    isolationScope: e[Ed]
  }
}
i(Bu, "getCapturedScopesOnSpan");
function Zt(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__)
    return !1;
  const t = ue()
      , n = e || t && t.getOptions();
  return !!n && (n.enableTracing || "tracesSampleRate"in n || "tracesSampler"in n)
}
i(Zt, "hasTracingEnabled");
class br {
  static{i(this, "SentryNonRecordingSpan")
  }constructor(t={}) {
    this._traceId = t.traceId || Ne(),
        this._spanId = t.spanId || Ne().substring(16)
  }
  spanContext() {
    return {
      spanId: this._spanId,
      traceId: this._traceId,
      traceFlags: md
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
const Va = "production"
    , bd = "_frozenDsc";
function $u(e, t) {
  gt(e, bd, t)
}
i($u, "freezeDscOnSpan");
function Bi(e, t) {
  const n = t.getOptions()
      , {publicKey: r} = t.getDsn() || {}
      , s = $e({
    environment: n.environment || Va,
    release: n.release,
    public_key: r,
    trace_id: e
  });
  return t.emit("createDsc", s),
      s
}
i(Bi, "getDynamicSamplingContextFromClient");
function vn(e) {
  const t = ue();
  if (!t)
    return {};
  const n = Bi(ye(e).trace_id || "", t)
      , r = We(e)
      , s = r[bd];
  if (s)
    return s;
  const o = r.spanContext().traceState
      , c = o && o.get("sentry.dsc")
      , l = c && ad(c);
  if (l)
    return l;
  const f = ye(r)
      , h = f.data || {}
      , p = h[dd];
  p != null && (n.sample_rate = `${p}`);
  const y = h[Wt]
      , v = f.description;
  return y !== "url" && v && (n.transaction = v),
  Zt() && (n.sampled = String(qn(r))),
      t.emit("createDsc", n, r),
      n
}
i(vn, "getDynamicSamplingContextFromSpan");
function Gv(e) {
  if (!oe)
    return;
  const {description: t="< unknown name >", op: n="< unknown op >", parent_span_id: r} = ye(e)
      , {spanId: s} = e.spanContext()
      , o = qn(e)
      , c = We(e)
      , l = c === e
      , f = `[Tracing] Starting ${o ? "sampled" : "unsampled"} ${l ? "root " : ""}span`
      , h = [`op: ${n}`, `name: ${t}`, `ID: ${s}`];
  if (r && h.push(`parent ID: ${r}`),
      !l) {
    const {op: p, description: y} = ye(c);
    h.push(`root ID: ${c.spanContext().spanId}`),
    p && h.push(`root op: ${p}`),
    y && h.push(`root description: ${y}`)
  }
  D.log(`${f}
  ${h.join(`
  `)}`)
}
i(Gv, "logSpanStart");
function Yv(e) {
  if (!oe)
    return;
  const {description: t="< unknown name >", op: n="< unknown op >"} = ye(e)
      , {spanId: r} = e.spanContext()
      , o = We(e) === e
      , c = `[Tracing] Finishing "${n}" ${o ? "root " : ""}span "${t}" with ID ${r}`;
  D.log(c)
}
i(Yv, "logSpanEnd");
function hi(e) {
  if (typeof e == "boolean")
    return Number(e);
  const t = typeof e == "string" ? parseFloat(e) : e;
  if (typeof t != "number" || isNaN(t) || t < 0 || t > 1) {
    oe && D.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`);
    return
  }
  return t
}
i(hi, "parseSampleRate");
function Kv(e, t) {
  if (!Zt(e))
    return [!1];
  let n;
  typeof e.tracesSampler == "function" ? n = e.tracesSampler(t) : t.parentSampled !== void 0 ? n = t.parentSampled : typeof e.tracesSampleRate < "u" ? n = e.tracesSampleRate : n = 1;
  const r = hi(n);
  return r === void 0 ? (oe && D.warn("[Tracing] Discarding transaction because of invalid sample rate."),
      [!1]) : r ? Math.random() < r ? [!0, r] : (oe && D.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(n)})`),
      [!1, r]) : (oe && D.log(`[Tracing] Discarding transaction because ${typeof e.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`),
      [!1, r])
}
i(Kv, "sampleSpan");
function Xv(e, t) {
  return t && (e.sdk = e.sdk || {},
      e.sdk.name = e.sdk.name || t.name,
      e.sdk.version = e.sdk.version || t.version,
      e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []],
      e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []]),
      e
}
i(Xv, "enhanceEventWithSdkInfo");
function Qv(e, t, n, r) {
  const s = Ha(n)
      , o = {
    sent_at: new Date().toISOString(),
    ...s && {
      sdk: s
    },
    ...!!r && t && {
      dsn: cs(t)
    }
  }
      , c = "aggregates"in e ? [{
    type: "sessions"
  }, e] : [{
    type: "session"
  }, e.toJSON()];
  return jn(o, [c])
}
i(Qv, "createSessionEnvelope");
function Jv(e, t, n, r) {
  const s = Ha(n)
      , o = e.type && e.type !== "replay_event" ? e.type : "event";
  Xv(e, n && n.sdk);
  const c = ud(e, s, r, t);
  return delete e.sdkProcessingMetadata,
      jn(c, [[{
        type: o
      }, e]])
}
i(Jv, "createEventEnvelope");
function Zv(e, t) {
  function n(p) {
    return !!p.trace_id && !!p.public_key
  }
  i(n, "dscHasRequiredProps");
  const r = vn(e[0])
      , s = t && t.getDsn()
      , o = t && t.getOptions().tunnel
      , c = {
    sent_at: new Date().toISOString(),
    ...n(r) && {
      trace: r
    },
    ...!!o && s && {
      dsn: cs(s)
    }
  }
      , l = t && t.getOptions().beforeSendSpan
      , f = l ? p => l(ye(p)) : p => ye(p)
      , h = [];
  for (const p of e) {
    const y = f(p);
    y && h.push(yv(y))
  }
  return jn(c, h)
}
i(Zv, "createSpanEnvelope");
function eS(e, t, n, r=Ve()) {
  const s = r && We(r);
  s && s.addEvent(e, {
    [Ui]: t,
    [Li]: n
  })
}
i(eS, "setMeasurement");
function Hu(e) {
  if (!e || e.length === 0)
    return;
  const t = {};
  return e.forEach(n => {
        const r = n.attributes || {}
            , s = r[Li]
            , o = r[Ui];
        typeof s == "string" && typeof o == "number" && (t[n.name] = {
          value: o,
          unit: s
        })
      }
  ),
      t
}
i(Hu, "timedEventsToMeasurements");
const ju = 1e3;
class Ga {
  static{i(this, "SentrySpan")
  }constructor(t={}) {
    this._traceId = t.traceId || Ne(),
        this._spanId = t.spanId || Ne().substring(16),
        this._startTime = t.startTimestamp || Je(),
        this._attributes = {},
        this.setAttributes({
          [je]: "manual",
          [Bn]: t.op,
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
      traceFlags: r ? yd : md
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
    this._startTime = Fn(t)
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
    this._endTime || (this._endTime = Fn(t),
        Yv(this),
        this._onSpanEnded())
  }
  getSpanJSON() {
    return $e({
      data: this._attributes,
      description: this._name,
      op: this._attributes[Bn],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: _d(this._status),
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[je],
      _metrics_summary: Qo(this),
      profile_id: this._attributes[Lv],
      exclusive_time: this._attributes[Wa],
      measurements: Hu(this._events),
      is_segment: this._isStandaloneSpan && We(this) === this || void 0,
      segment_id: this._isStandaloneSpan ? We(this).spanContext().spanId : void 0
    })
  }
  isRecording() {
    return !this._endTime && !!this._sampled
  }
  addEvent(t, n, r) {
    oe && D.log("[Tracing] Adding an event to span:", t);
    const s = qu(n) ? n : r || Je()
        , o = qu(n) ? {} : n || {}
        , c = {
      name: t,
      time: Fn(s),
      attributes: o
    };
    return this._events.push(c),
        this
  }
  isStandaloneSpan() {
    return !!this._isStandaloneSpan
  }
  _onSpanEnded() {
    const t = ue();
    if (t && t.emit("spanEnd", this),
        !(this._isStandaloneSpan || this === We(this)))
      return;
    if (this._isStandaloneSpan) {
      this._sampled ? nS(Zv([this], t)) : (oe && D.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."),
      t && t.recordDroppedEvent("sample_rate", "span"));
      return
    }
    const r = this._convertSpanToTransaction();
    r && (Bu(this).scope || Re()).captureEvent(r)
  }
  _convertSpanToTransaction() {
    if (!zu(ye(this)))
      return;
    this._name || (oe && D.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
        this._name = "<unlabeled transaction>");
    const {scope: t, isolationScope: n} = Bu(this)
        , s = (t || Re()).getClient() || ue();
    if (this._sampled !== !0) {
      oe && D.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),
      s && s.recordDroppedEvent("sample_rate", "transaction");
      return
    }
    const c = Ks(this).filter(y => y !== this && !tS(y)).map(y => ye(y)).filter(zu)
        , l = this._attributes[Wt]
        , f = {
      contexts: {
        trace: $v(this)
      },
      spans: c.length > ju ? c.sort( (y, v) => y.start_timestamp - v.start_timestamp).slice(0, ju) : c,
      start_timestamp: this._startTime,
      timestamp: this._endTime,
      transaction: this._name,
      type: "transaction",
      sdkProcessingMetadata: {
        capturedSpanScope: t,
        capturedSpanIsolationScope: n,
        ...$e({
          dynamicSamplingContext: vn(this)
        })
      },
      _metrics_summary: Qo(this),
      ...l && {
        transaction_info: {
          source: l
        }
      }
    }
        , h = Hu(this._events);
    return h && Object.keys(h).length && (oe && D.log("[Measurements] Adding measurements to transaction event", JSON.stringify(h, void 0, 2)),
        f.measurements = h),
        f
  }
}
function qu(e) {
  return e && typeof e == "number" || e instanceof Date || Array.isArray(e)
}
i(qu, "isSpanTimeInput");
function zu(e) {
  return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
}
i(zu, "isFullFinishedSpan");
function tS(e) {
  return e instanceof Ga && e.isStandaloneSpan()
}
i(tS, "isStandaloneSpan");
function nS(e) {
  const t = ue();
  if (!t)
    return;
  const n = e[1];
  if (!n || n.length === 0) {
    t.recordDroppedEvent("before_send", "span");
    return
  }
  t.sendEnvelope(e)
}
i(nS, "sendSpanEnvelope");
const wd = "__SENTRY_SUPPRESS_TRACING__";
function Sn(e) {
  const t = Rd();
  if (t.startInactiveSpan)
    return t.startInactiveSpan(e);
  const n = sS(e)
      , {forceTransaction: r, parentSpan: s} = e;
  return (e.scope ? c => za(e.scope, c) : s !== void 0 ? c => Id(s, c) : c => c())( () => {
        const c = Re()
            , l = oS(c);
        return e.onlyIfParent && !l ? new br : rS({
          parentSpan: l,
          spanArguments: n,
          forceTransaction: r,
          scope: c
        })
      }
  )
}
i(Sn, "startInactiveSpan");
function Id(e, t) {
  const n = Rd();
  return n.withActiveSpan ? n.withActiveSpan(e, t) : za(r => (Zr(r, e || void 0),
      t(r)))
}
i(Id, "withActiveSpan");
function rS({parentSpan: e, spanArguments: t, forceTransaction: n, scope: r}) {
  if (!Zt())
    return new br;
  const s = ft();
  let o;
  if (e && !n)
    o = iS(e, r, t),
        vd(e, o);
  else if (e) {
    const c = vn(e)
        , {traceId: l, spanId: f} = e.spanContext()
        , h = qn(e);
    o = Wu({
      traceId: l,
      parentSpanId: f,
      ...t
    }, r, h),
        $u(o, c)
  } else {
    const {traceId: c, dsc: l, parentSpanId: f, sampled: h} = {
      ...s.getPropagationContext(),
      ...r.getPropagationContext()
    };
    o = Wu({
      traceId: c,
      parentSpanId: f,
      ...t
    }, r, h),
    l && $u(o, l)
  }
  return Gv(o),
      Vv(o, r, s),
      o
}
i(rS, "createChildOrRootSpan");
function sS(e) {
  const n = {
    isStandalone: (e.experimental || {}).standalone,
    ...e
  };
  if (e.startTime) {
    const r = {
      ...n
    };
    return r.startTimestamp = Fn(e.startTime),
        delete r.startTime,
        r
  }
  return n
}
i(sS, "parseSentrySpanArguments");
function Rd() {
  const e = Er();
  return ls(e)
}
i(Rd, "getAcs");
function Wu(e, t, n) {
  const r = ue()
      , s = r && r.getOptions() || {}
      , {name: o="", attributes: c} = e
      , [l,f] = t.getScopeData().sdkProcessingMetadata[wd] ? [!1] : Kv(s, {
    name: o,
    parentSampled: n,
    attributes: c,
    transactionContext: {
      name: o,
      parentSampled: n
    }
  })
      , h = new Ga({
    ...e,
    attributes: {
      [Wt]: "custom",
      ...e.attributes
    },
    sampled: l
  });
  return f !== void 0 && h.setAttribute(dd, f),
  r && r.emit("spanStart", h),
      h
}
i(Wu, "_startRootSpan");
function iS(e, t, n) {
  const {spanId: r, traceId: s} = e.spanContext()
      , o = t.getScopeData().sdkProcessingMetadata[wd] ? !1 : qn(e)
      , c = o ? new Ga({
    ...n,
    parentSpanId: r,
    traceId: s,
    sampled: o
  }) : new br({
    traceId: s
  });
  vd(e, c);
  const l = ue();
  return l && (l.emit("spanStart", c),
  n.endTimestamp && l.emit("spanEnd", c)),
      c
}
i(iS, "_startChildSpan");
function oS(e) {
  const t = di(e);
  if (!t)
    return;
  const n = ue();
  return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? We(t) : t
}
i(oS, "getParentSpan");
const Xs = {
  idleTimeout: 1e3,
  finalTimeout: 3e4,
  childSpanTimeout: 15e3
}
    , aS = "heartbeatFailed"
    , cS = "idleTimeout"
    , uS = "finalTimeout"
    , lS = "externalFinish";
function Ad(e, t={}) {
  const n = new Map;
  let r = !1, s, o = lS, c = !t.disableAutoFinish;
  const l = []
      , {idleTimeout: f=Xs.idleTimeout, finalTimeout: h=Xs.finalTimeout, childSpanTimeout: p=Xs.childSpanTimeout, beforeSpanEnd: y} = t
      , v = ue();
  if (!v || !Zt())
    return new br;
  const b = Re()
      , S = Ve()
      , R = fS(e);
  R.end = new Proxy(R.end,{
    apply(x, N, F) {
      y && y(R);
      const [H,...C] = F
          , z = H || Je()
          , X = Fn(z)
          , M = Ks(R).filter(fe => fe !== R);
      if (!M.length)
        return q(X),
            Reflect.apply(x, N, [X, ...C]);
      const Y = M.map(fe => ye(fe).timestamp).filter(fe => !!fe)
          , Fe = Y.length ? Math.max(...Y) : void 0
          , re = ye(R).start_timestamp
          , xe = Math.min(re ? re + h / 1e3 : 1 / 0, Math.max(re || -1 / 0, Math.min(X, Fe || 1 / 0)));
      return q(xe),
          Reflect.apply(x, N, [xe, ...C])
    }
  });
  function k() {
    s && (clearTimeout(s),
        s = void 0)
  }
  i(k, "_cancelIdleTimeout");
  function O(x) {
    k(),
        s = setTimeout( () => {
              !r && n.size === 0 && c && (o = cS,
                  R.end(x))
            }
            , f)
  }
  i(O, "_restartIdleTimeout");
  function L(x) {
    s = setTimeout( () => {
          !r && c && (o = aS,
              R.end(x))
        }
        , p)
  }
  i(L, "_restartChildSpanTimeout");
  function U(x) {
    k(),
        n.set(x, !0);
    const N = Je();
    L(N + p / 1e3)
  }
  i(U, "_pushActivity");
  function V(x) {
    if (n.has(x) && n.delete(x),
    n.size === 0) {
      const N = Je();
      O(N + f / 1e3)
    }
  }
  i(V, "_popActivity");
  function q(x) {
    r = !0,
        n.clear(),
        l.forEach(X => X()),
        Zr(b, S);
    const N = ye(R)
        , {start_timestamp: F} = N;
    if (!F)
      return;
    (N.data || {})[Jo] || R.setAttribute(Jo, o),
        D.log(`[Tracing] Idle span "${N.op}" finished`);
    const C = Ks(R).filter(X => X !== R);
    let z = 0;
    C.forEach(X => {
          X.isRecording() && (X.setStatus({
            code: He,
            message: "cancelled"
          }),
              X.end(x),
          oe && D.log("[Tracing] Cancelling span since span ended early", JSON.stringify(X, void 0, 2)));
          const M = ye(X)
              , {timestamp: Y=0, start_timestamp: Fe=0} = M
              , re = Fe <= x
              , xe = (h + f) / 1e3
              , fe = Y - Fe <= xe;
          if (oe) {
            const qe = JSON.stringify(X, void 0, 2);
            re ? fe || D.log("[Tracing] Discarding span since it finished after idle span final timeout", qe) : D.log("[Tracing] Discarding span since it happened after idle span was finished", qe)
          }
          (!fe || !re) && (zv(R, X),
              z++)
        }
    ),
    z > 0 && R.setAttribute("sentry.idle_span_discarded_spans", z)
  }
  return i(q, "onIdleSpanEnded"),
      l.push(v.on("spanStart", x => {
            if (r || x === R || ye(x).timestamp)
              return;
            Ks(R).includes(x) && U(x.spanContext().spanId)
          }
      )),
      l.push(v.on("spanEnd", x => {
            r || V(x.spanContext().spanId)
          }
      )),
      l.push(v.on("idleSpanEnableAutoFinish", x => {
            x === R && (c = !0,
                O(),
            n.size && L())
          }
      )),
  t.disableAutoFinish || O(),
      setTimeout( () => {
            r || (R.setStatus({
              code: He,
              message: "deadline_exceeded"
            }),
                o = uS,
                R.end())
          }
          , h),
      R
}
i(Ad, "startIdleSpan");
function fS(e) {
  const t = Sn(e);
  return Zr(Re(), t),
  oe && D.log("[Tracing] Started span is an idle span"),
      t
}
i(fS, "_startIdleSpan");
function ta(e, t, n, r=0) {
  return new pt( (s, o) => {
        const c = e[r];
        if (t === null || typeof c != "function")
          s(t);
        else {
          const l = c({
            ...t
          }, n);
          oe && c.id && l === null && D.log(`Event processor "${c.id}" dropped event`),
              Fi(l) ? l.then(f => ta(e, f, n, r + 1).then(s)).then(null, o) : ta(e, l, n, r + 1).then(s).then(null, o)
        }
      }
  )
}
i(ta, "notifyEventProcessors");
function dS(e, t) {
  const {fingerprint: n, span: r, breadcrumbs: s, sdkProcessingMetadata: o} = t;
  hS(e, t),
  r && yS(e, r),
      gS(e, n),
      pS(e, s),
      mS(e, o)
}
i(dS, "applyScopeDataToEvent");
function Vu(e, t) {
  const {extra: n, tags: r, user: s, contexts: o, level: c, sdkProcessingMetadata: l, breadcrumbs: f, fingerprint: h, eventProcessors: p, attachments: y, propagationContext: v, transactionName: b, span: S} = t;
  Hr(e, "extra", n),
      Hr(e, "tags", r),
      Hr(e, "user", s),
      Hr(e, "contexts", o),
      Hr(e, "sdkProcessingMetadata", l),
  c && (e.level = c),
  b && (e.transactionName = b),
  S && (e.span = S),
  f.length && (e.breadcrumbs = [...e.breadcrumbs, ...f]),
  h.length && (e.fingerprint = [...e.fingerprint, ...h]),
  p.length && (e.eventProcessors = [...e.eventProcessors, ...p]),
  y.length && (e.attachments = [...e.attachments, ...y]),
      e.propagationContext = {
        ...e.propagationContext,
        ...v
      }
}
i(Vu, "mergeScopeData");
function Hr(e, t, n) {
  if (n && Object.keys(n).length) {
    e[t] = {
      ...e[t]
    };
    for (const r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (e[t][r] = n[r])
  }
}
i(Hr, "mergeAndOverwriteScopeData");
function hS(e, t) {
  const {extra: n, tags: r, user: s, contexts: o, level: c, transactionName: l} = t
      , f = $e(n);
  f && Object.keys(f).length && (e.extra = {
    ...f,
    ...e.extra
  });
  const h = $e(r);
  h && Object.keys(h).length && (e.tags = {
    ...h,
    ...e.tags
  });
  const p = $e(s);
  p && Object.keys(p).length && (e.user = {
    ...p,
    ...e.user
  });
  const y = $e(o);
  y && Object.keys(y).length && (e.contexts = {
    ...y,
    ...e.contexts
  }),
  c && (e.level = c),
  l && e.type !== "transaction" && (e.transaction = l)
}
i(hS, "applyDataToEvent");
function pS(e, t) {
  const n = [...e.breadcrumbs || [], ...t];
  e.breadcrumbs = n.length ? n : void 0
}
i(pS, "applyBreadcrumbsToEvent");
function mS(e, t) {
  e.sdkProcessingMetadata = {
    ...e.sdkProcessingMetadata,
    ...t
  }
}
i(mS, "applySdkMetadataToEvent");
function yS(e, t) {
  e.contexts = {
    trace: Hv(t),
    ...e.contexts
  },
      e.sdkProcessingMetadata = {
        dynamicSamplingContext: vn(t),
        ...e.sdkProcessingMetadata
      };
  const n = We(t)
      , r = ye(n).description;
  r && !e.transaction && e.type === "transaction" && (e.transaction = r)
}
i(yS, "applySpanToEvent");
function gS(e, t) {
  e.fingerprint = e.fingerprint ? sd(e.fingerprint) : [],
  t && (e.fingerprint = e.fingerprint.concat(t)),
  e.fingerprint && !e.fingerprint.length && delete e.fingerprint
}
i(gS, "applyFingerprintToEvent");
function kd(e, t, n, r, s, o) {
  const {normalizeDepth: c=3, normalizeMaxBreadth: l=1e3} = e
      , f = {
    ...t,
    event_id: t.event_id || n.event_id || Ne(),
    timestamp: t.timestamp || us()
  }
      , h = n.integrations || e.integrations.map(k => k.name);
  _S(f, e),
      ES(f, h),
  s && s.emit("applyFrameMetadata", t),
  t.type === void 0 && vS(f, e.stackParser);
  const p = wS(r, n.captureContext);
  n.mechanism && Jr(f, n.mechanism);
  const y = s ? s.getEventProcessors() : []
      , v = Fv().getScopeData();
  if (o) {
    const k = o.getScopeData();
    Vu(v, k)
  }
  if (p) {
    const k = p.getScopeData();
    Vu(v, k)
  }
  const b = [...n.attachments || [], ...v.attachments];
  b.length && (n.attachments = b),
      dS(f, v);
  const S = [...y, ...v.eventProcessors];
  return ta(S, f, n).then(k => (k && SS(k),
      typeof c == "number" && c > 0 ? bS(k, c, l) : k))
}
i(kd, "prepareEvent");
function _S(e, t) {
  const {environment: n, release: r, dist: s, maxValueLength: o=250} = t;
  "environment"in e || (e.environment = "environment"in t ? n : Va),
  e.release === void 0 && r !== void 0 && (e.release = r),
  e.dist === void 0 && s !== void 0 && (e.dist = s),
  e.message && (e.message = or(e.message, o));
  const c = e.exception && e.exception.values && e.exception.values[0];
  c && c.value && (c.value = or(c.value, o));
  const l = e.request;
  l && l.url && (l.url = or(l.url, o))
}
i(_S, "applyClientOptions");
const Gu = new WeakMap;
function vS(e, t) {
  const n = he._sentryDebugIds;
  if (!n)
    return;
  let r;
  const s = Gu.get(t);
  s ? r = s : (r = new Map,
      Gu.set(t, r));
  const o = Object.entries(n).reduce( (c, [l,f]) => {
        let h;
        const p = r.get(l);
        p ? h = p : (h = t(l),
            r.set(l, h));
        for (let y = h.length - 1; y >= 0; y--) {
          const v = h[y];
          if (v.filename) {
            c[v.filename] = f;
            break
          }
        }
        return c
      }
      , {});
  try {
    e.exception.values.forEach(c => {
          c.stacktrace.frames.forEach(l => {
                l.filename && (l.debug_id = o[l.filename])
              }
          )
        }
    )
  } catch {}
}
i(vS, "applyDebugIds");
function SS(e) {
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
i(SS, "applyDebugMeta");
function ES(e, t) {
  t.length > 0 && (e.sdk = e.sdk || {},
      e.sdk.integrations = [...e.sdk.integrations || [], ...t])
}
i(ES, "applyIntegrationsMetadata");
function bS(e, t, n) {
  if (!e)
    return null;
  const r = {
    ...e,
    ...e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map(s => ({
        ...s,
        ...s.data && {
          data: Nt(s.data, t, n)
        }
      }))
    },
    ...e.user && {
      user: Nt(e.user, t, n)
    },
    ...e.contexts && {
      contexts: Nt(e.contexts, t, n)
    },
    ...e.extra && {
      extra: Nt(e.extra, t, n)
    }
  };
  return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace,
  e.contexts.trace.data && (r.contexts.trace.data = Nt(e.contexts.trace.data, t, n))),
  e.spans && (r.spans = e.spans.map(s => ({
    ...s,
    ...s.data && {
      data: Nt(s.data, t, n)
    }
  }))),
      r
}
i(bS, "normalizeEvent");
function wS(e, t) {
  if (!t)
    return e;
  const n = e ? e.clone() : new mn;
  return n.update(t),
      n
}
i(wS, "getFinalScope");
function IS(e) {
  if (e)
    return RS(e) ? {
      captureContext: e
    } : kS(e) ? {
      captureContext: e
    } : e
}
i(IS, "parseEventHintOrCaptureContext");
function RS(e) {
  return e instanceof mn || typeof e == "function"
}
i(RS, "hintIsScopeOrFunction");
const AS = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
function kS(e) {
  return Object.keys(e).some(t => AS.includes(t))
}
i(kS, "hintIsScopeContext");
function Pn(e, t) {
  return Re().captureException(e, IS(t))
}
i(Pn, "captureException");
function Od(e, t) {
  return Re().captureEvent(e, t)
}
i(Od, "captureEvent");
function Ya(e, t) {
  ft().setContext(e, t)
}
i(Ya, "setContext");
function OS(e) {
  ft().setUser(e)
}
i(OS, "setUser");
function PS(e) {
  ft().addEventProcessor(e)
}
i(PS, "addEventProcessor");
function Yu(e) {
  const t = ue()
      , n = ft()
      , r = Re()
      , {release: s, environment: o=Va} = t && t.getOptions() || {}
      , {userAgent: c} = he.navigator || {}
      , l = Rv({
    release: s,
    environment: o,
    user: r.getUser() || n.getUser(),
    ...c && {
      userAgent: c
    },
    ...e
  })
      , f = n.getSession();
  return f && f.status === "ok" && lr(f, {
    status: "exited"
  }),
      Pd(),
      n.setSession(l),
      r.setSession(l),
      l
}
i(Yu, "startSession");
function Pd() {
  const e = ft()
      , t = Re()
      , n = t.getSession() || e.getSession();
  n && Av(n),
      Nd(),
      e.setSession(),
      t.setSession()
}
i(Pd, "endSession");
function Nd() {
  const e = ft()
      , t = Re()
      , n = ue()
      , r = t.getSession() || e.getSession();
  r && n && n.captureSession(r)
}
i(Nd, "_sendSessionUpdate");
function Ku(e=!1) {
  if (e) {
    Pd();
    return
  }
  Nd()
}
i(Ku, "captureSession");
const NS = "7";
function TS(e) {
  const t = e.protocol ? `${e.protocol}:` : ""
      , n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`
}
i(TS, "getBaseApiEndpoint");
function xS(e) {
  return `${TS(e)}${e.projectId}/envelope/`
}
i(xS, "_getIngestEndpoint");
function CS(e, t) {
  return M_({
    sentry_key: e.publicKey,
    sentry_version: NS,
    ...t && {
      sentry_client: `${t.name}/${t.version}`
    }
  })
}
i(CS, "_encodedAuth");
function MS(e, t, n) {
  return t || `${xS(e)}?${CS(e, n)}`
}
i(MS, "getEnvelopeEndpointWithUrlEncodedAuth");
const Xu = [];
function FS(e) {
  const t = {};
  return e.forEach(n => {
        const {name: r} = n
            , s = t[r];
        s && !s.isDefaultInstance && n.isDefaultInstance || (t[r] = n)
      }
  ),
      Object.values(t)
}
i(FS, "filterDuplicates");
function DS(e) {
  const t = e.defaultIntegrations || []
      , n = e.integrations;
  t.forEach(c => {
        c.isDefaultInstance = !0
      }
  );
  let r;
  Array.isArray(n) ? r = [...t, ...n] : typeof n == "function" ? r = sd(n(t)) : r = t;
  const s = FS(r)
      , o = s.findIndex(c => c.name === "Debug");
  if (o > -1) {
    const [c] = s.splice(o, 1);
    s.push(c)
  }
  return s
}
i(DS, "getIntegrationsToSetup");
function LS(e, t) {
  const n = {};
  return t.forEach(r => {
        r && Td(e, r, n)
      }
  ),
      n
}
i(LS, "setupIntegrations");
function Qu(e, t) {
  for (const n of t)
    n && n.afterAllSetup && n.afterAllSetup(e)
}
i(Qu, "afterSetupIntegrations");
function Td(e, t, n) {
  if (n[t.name]) {
    oe && D.log(`Integration skipped because it was already installed: ${t.name}`);
    return
  }
  if (n[t.name] = t,
  Xu.indexOf(t.name) === -1 && typeof t.setupOnce == "function" && (t.setupOnce(),
      Xu.push(t.name)),
  t.setup && typeof t.setup == "function" && t.setup(e),
  typeof t.preprocessEvent == "function") {
    const r = t.preprocessEvent.bind(t);
    e.on("preprocessEvent", (s, o) => r(s, o, e))
  }
  if (typeof t.processEvent == "function") {
    const r = t.processEvent.bind(t)
        , s = Object.assign( (o, c) => r(o, c, e), {
      id: t.name
    });
    e.addEventProcessor(s)
  }
  oe && D.log(`Integration installed: ${t.name}`)
}
i(Td, "setupIntegration");
const Ju = "Not capturing exception because it's already been captured.";
class US {
  static{i(this, "BaseClient")
  }constructor(t) {
    if (this._options = t,
        this._integrations = {},
        this._numProcessing = 0,
        this._outcomes = {},
        this._hooks = {},
        this._eventProcessors = [],
        t.dsn ? this._dsn = C_(t.dsn) : oe && D.warn("No DSN provided, client will not send events."),
        this._dsn) {
      const n = MS(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : void 0);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: n
      })
    }
  }
  captureException(t, n, r) {
    const s = Ne();
    if (xu(t))
      return oe && D.log(Ju),
          s;
    const o = {
      event_id: s,
      ...n
    };
    return this._process(this.eventFromException(t, o).then(c => this._captureEvent(c, o, r))),
        o.event_id
  }
  captureMessage(t, n, r, s) {
    const o = {
      event_id: Ne(),
      ...r
    }
        , c = Da(t) ? t : String(t)
        , l = La(t) ? this.eventFromMessage(c, n, o) : this.eventFromException(t, o);
    return this._process(l.then(f => this._captureEvent(f, o, s))),
        o.event_id
  }
  captureEvent(t, n, r) {
    const s = Ne();
    if (n && n.originalException && xu(n.originalException))
      return oe && D.log(Ju),
          s;
    const o = {
      event_id: s,
      ...n
    }
        , l = (t.sdkProcessingMetadata || {}).capturedSpanScope;
    return this._process(this._captureEvent(t, o, l || r)),
        o.event_id
  }
  captureSession(t) {
    typeof t.release != "string" ? oe && D.warn("Discarded session because of missing or non-string release") : (this.sendSession(t),
        lr(t, {
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
        this._isClientDoneProcessing(t).then(r => n.flush(t).then(s => r && s))) : Jt(!0)
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
    Td(this, t, this._integrations),
    n || Qu(this, [t])
  }
  sendEvent(t, n={}) {
    this.emit("beforeSendEvent", t, n);
    let r = Jv(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const o of n.attachments || [])
      r = hv(r, gv(o));
    const s = this.sendEnvelope(r);
    s && s.then(o => this.emit("afterSendEvent", t, o), null)
  }
  sendSession(t) {
    const n = Qv(t, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(n)
  }
  recordDroppedEvent(t, n, r) {
    if (this._options.sendClientReports) {
      const s = typeof r == "number" ? r : 1
          , o = `${t}:${n}`;
      oe && D.log(`Recording outcome: "${o}"${s > 1 ? ` (${s} times)` : ""}`),
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
        this._isEnabled() && this._transport ? this._transport.send(t).then(null, n => (oe && D.error("Error while sending envelope:", n),
            n)) : (oe && D.error("Transport disabled"),
            Jt({}))
  }
  _setupIntegrations() {
    const {integrations: t} = this._options;
    this._integrations = LS(this, t),
        Qu(this, t)
  }
  _updateSessionFromEvent(t, n) {
    let r = !1
        , s = !1;
    const o = n.exception && n.exception.values;
    if (o) {
      s = !0;
      for (const f of o) {
        const h = f.mechanism;
        if (h && h.handled === !1) {
          r = !0;
          break
        }
      }
    }
    const c = t.status === "ok";
    (c && t.errors === 0 || c && r) && (lr(t, {
      ...r && {
        status: "crashed"
      },
      errors: t.errors || Number(s || r)
    }),
        this.captureSession(t))
  }
  _isClientDoneProcessing(t) {
    return new pt(n => {
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
  _prepareEvent(t, n, r, s=ft()) {
    const o = this.getOptions()
        , c = Object.keys(this._integrations);
    return !n.integrations && c.length > 0 && (n.integrations = c),
        this.emit("preprocessEvent", t, n),
    t.type || s.setLastEventId(t.event_id || n.event_id),
        kd(o, t, n, r, this, s).then(l => {
              if (l === null)
                return l;
              const f = {
                ...s.getPropagationContext(),
                ...r ? r.getPropagationContext() : void 0
              };
              if (!(l.contexts && l.contexts.trace) && f) {
                const {traceId: p, spanId: y, parentSpanId: v, dsc: b} = f;
                l.contexts = {
                  trace: $e({
                    trace_id: p,
                    span_id: y,
                    parent_span_id: v
                  }),
                  ...l.contexts
                };
                const S = b || Bi(p, this);
                l.sdkProcessingMetadata = {
                  dynamicSamplingContext: S,
                  ...l.sdkProcessingMetadata
                }
              }
              return l
            }
        )
  }
  _captureEvent(t, n={}, r) {
    return this._processEvent(t, n, r).then(s => s.event_id, s => {
          if (oe) {
            const o = s;
            o.logLevel === "log" ? D.log(o.message) : D.warn(o)
          }
        }
    )
  }
  _processEvent(t, n, r) {
    const s = this.getOptions()
        , {sampleRate: o} = s
        , c = Cd(t)
        , l = xd(t)
        , f = t.type || "error"
        , h = `before send for type \`${f}\``
        , p = typeof o > "u" ? void 0 : hi(o);
    if (l && typeof p == "number" && Math.random() > p)
      return this.recordDroppedEvent("sample_rate", "error", t),
          li(new Tt(`Discarding event because it's not included in the random sample (sampling rate = ${o})`,"log"));
    const y = f === "replay_event" ? "replay" : f
        , b = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
    return this._prepareEvent(t, n, r, b).then(S => {
          if (S === null)
            throw this.recordDroppedEvent("event_processor", y, t),
                new Tt("An event processor returned `null`, will not send event.","log");
          if (n.data && n.data.__sentry__ === !0)
            return S;
          const k = $S(this, s, S, n);
          return BS(k, h)
        }
    ).then(S => {
          if (S === null) {
            if (this.recordDroppedEvent("before_send", y, t),
                c) {
              const L = 1 + (t.spans || []).length;
              this.recordDroppedEvent("before_send", "span", L)
            }
            throw new Tt(`${h} returned \`null\`, will not send event.`,"log")
          }
          const R = r && r.getSession();
          if (!c && R && this._updateSessionFromEvent(R, S),
              c) {
            const O = S.sdkProcessingMetadata && S.sdkProcessingMetadata.spanCountBeforeProcessing || 0
                , L = S.spans ? S.spans.length : 0
                , U = O - L;
            U > 0 && this.recordDroppedEvent("before_send", "span", U)
          }
          const k = S.transaction_info;
          if (c && k && S.transaction !== t.transaction) {
            const O = "custom";
            S.transaction_info = {
              ...k,
              source: O
            }
          }
          return this.sendEvent(S, n),
              S
        }
    ).then(null, S => {
          throw S instanceof Tt ? S : (this.captureException(S, {
            data: {
              __sentry__: !0
            },
            originalException: S
          }),
              new Tt(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${S}`))
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
    oe && D.log("Flushing outcomes...");
    const t = this._clearOutcomes();
    if (t.length === 0) {
      oe && D.log("No outcomes to send");
      return
    }
    if (!this._dsn) {
      oe && D.log("No dsn provided, will not send outcomes");
      return
    }
    oe && D.log("Sending outcomes:", t);
    const n = vv(t, this._options.tunnel && cs(this._dsn));
    this.sendEnvelope(n)
  }
}
function BS(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (Fi(e))
    return e.then(r => {
          if (!ur(r) && r !== null)
            throw new Tt(n);
          return r
        }
        , r => {
          throw new Tt(`${t} rejected with ${r}`)
        }
    );
  if (!ur(e) && e !== null)
    throw new Tt(n);
  return e
}
i(BS, "_validateBeforeSendResult");
function $S(e, t, n, r) {
  const {beforeSend: s, beforeSendTransaction: o, beforeSendSpan: c} = t;
  if (xd(n) && s)
    return s(n, r);
  if (Cd(n)) {
    if (n.spans && c) {
      const l = [];
      for (const f of n.spans) {
        const h = c(f);
        h ? l.push(h) : e.recordDroppedEvent("before_send", "span")
      }
      n.spans = l
    }
    if (o) {
      if (n.spans) {
        const l = n.spans.length;
        n.sdkProcessingMetadata = {
          ...n.sdkProcessingMetadata,
          spanCountBeforeProcessing: l
        }
      }
      return o(n, r)
    }
  }
  return n
}
i($S, "processBeforeSend");
function xd(e) {
  return e.type === void 0
}
i(xd, "isErrorEvent$1");
function Cd(e) {
  return e.type === "transaction"
}
i(Cd, "isTransactionEvent$1");
function HS(e, t) {
  t.debug === !0 && (oe ? D.enable() : Sr( () => {}
  )),
      Re().update(t.initialScope);
  const r = new e(t);
  return jS(r),
      r.init(),
      r
}
i(HS, "initAndBind");
function jS(e) {
  Re().setClient(e)
}
i(jS, "setCurrentClient");
const qS = 64;
function zS(e, t, n=sv(e.bufferSize || qS)) {
  let r = {};
  const s = i(c => n.drain(c), "flush");
  function o(c) {
    const l = [];
    if (Mu(c, (y, v) => {
          const b = Fu(v);
          if (ld(r, b)) {
            const S = Zu(y, v);
            e.recordDroppedEvent("ratelimit_backoff", b, S)
          } else
            l.push(y)
        }
    ),
    l.length === 0)
      return Jt({});
    const f = jn(c[0], l)
        , h = i(y => {
          Mu(f, (v, b) => {
                const S = Zu(v, b);
                e.recordDroppedEvent(y, Fu(b), S)
              }
          )
        }
        , "recordEnvelopeLoss")
        , p = i( () => t({
      body: pv(f)
    }).then(y => (y.statusCode !== void 0 && (y.statusCode < 200 || y.statusCode >= 300) && oe && D.warn(`Sentry responded with status code ${y.statusCode} to sent event.`),
            r = fd(r, y),
            y), y => {
          throw h("network_error"),
              y
        }
    ), "requestTask");
    return n.add(p).then(y => y, y => {
          if (y instanceof Tt)
            return oe && D.error("Skipped sending event because buffer is full."),
                h("queue_overflow"),
                Jt({});
          throw y
        }
    )
  }
  return i(o, "send"),
      {
        send: o,
        flush: s
      }
}
i(zS, "createTransport");
function Zu(e, t) {
  if (!(t !== "event" && t !== "transaction"))
    return Array.isArray(e) ? e[1] : void 0
}
i(Zu, "getEventForEnvelopeItem");
function WS(e, t) {
  const n = t && t.getDsn()
      , r = t && t.getOptions().tunnel;
  return GS(e, n) || VS(e, r)
}
i(WS, "isSentryRequestUrl");
function VS(e, t) {
  return t ? el(e) === el(t) : !1
}
i(VS, "checkTunnel");
function GS(e, t) {
  return t ? e.includes(t.host) : !1
}
i(GS, "checkDsn");
function el(e) {
  return e[e.length - 1] === "/" ? e.slice(0, -1) : e
}
i(el, "removeTrailingSlash");
function Md(e, t, n=[t], r="npm") {
  const s = e._metadata || {};
  s.sdk || (s.sdk = {
    name: `sentry.javascript.${t}`,
    packages: n.map(o => ({
      name: `${r}:@sentry/${o}`,
      version: Cn
    })),
    version: Cn
  }),
      e._metadata = s
}
i(Md, "applySdkMetadata");
const YS = 100;
function yn(e, t) {
  const n = ue()
      , r = ft();
  if (!n)
    return;
  const {beforeBreadcrumb: s=null, maxBreadcrumbs: o=YS} = n.getOptions();
  if (o <= 0)
    return;
  const l = {
    timestamp: us(),
    ...e
  }
      , f = s ? Sr( () => s(l, t)) : l;
  f !== null && (n.emit && n.emit("beforeAddBreadcrumb", f, t),
      r.addBreadcrumb(f, o))
}
i(yn, "addBreadcrumb");
let tl;
const KS = "FunctionToString"
    , nl = new WeakMap
    , XS = i( () => ({
  name: KS,
  setupOnce() {
    tl = Function.prototype.toString;
    try {
      Function.prototype.toString = function(...e) {
        const t = Ua(this)
            , n = nl.has(ue()) && t !== void 0 ? t : this;
        return tl.apply(n, e)
      }
    } catch {}
  },
  setup(e) {
    nl.set(e, !0)
  }
}), "_functionToStringIntegration")
    , QS = XS
    , JS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler"]
    , ZS = "InboundFilters"
    , eE = i( (e={}) => ({
  name: ZS,
  processEvent(t, n, r) {
    const s = r.getOptions()
        , o = nE(e, s);
    return rE(t, o) ? null : t
  }
}), "_inboundFiltersIntegration")
    , tE = eE;
function nE(e={}, t={}) {
  return {
    allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
    denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
    ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : JS],
    ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []],
    ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
  }
}
i(nE, "_mergeOptions");
function rE(e, t) {
  return t.ignoreInternal && uE(e) ? (oe && D.warn(`Event dropped due to being internal Sentry Error.
Event: ${an(e)}`),
      !0) : sE(e, t.ignoreErrors) ? (oe && D.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${an(e)}`),
      !0) : fE(e) ? (oe && D.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${an(e)}`),
      !0) : iE(e, t.ignoreTransactions) ? (oe && D.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${an(e)}`),
      !0) : oE(e, t.denyUrls) ? (oe && D.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${an(e)}.
Url: ${pi(e)}`),
      !0) : aE(e, t.allowUrls) ? !1 : (oe && D.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${an(e)}.
Url: ${pi(e)}`),
      !0)
}
i(rE, "_shouldDropEvent$1");
function sE(e, t) {
  return e.type || !t || !t.length ? !1 : cE(e).some(n => dn(n, t))
}
i(sE, "_isIgnoredError");
function iE(e, t) {
  if (e.type !== "transaction" || !t || !t.length)
    return !1;
  const n = e.transaction;
  return n ? dn(n, t) : !1
}
i(iE, "_isIgnoredTransaction");
function oE(e, t) {
  if (!t || !t.length)
    return !1;
  const n = pi(e);
  return n ? dn(n, t) : !1
}
i(oE, "_isDeniedUrl");
function aE(e, t) {
  if (!t || !t.length)
    return !0;
  const n = pi(e);
  return n ? dn(n, t) : !0
}
i(aE, "_isAllowedUrl");
function cE(e) {
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
i(cE, "_getPossibleEventMessages");
function uE(e) {
  try {
    return e.exception.values[0].type === "SentryError"
  } catch {}
  return !1
}
i(uE, "_isSentryError");
function lE(e=[]) {
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
      return n.filename || null
  }
  return null
}
i(lE, "_getLastValidUrl");
function pi(e) {
  try {
    let t;
    try {
      t = e.exception.values[0].stacktrace.frames
    } catch {}
    return t ? lE(t) : null
  } catch {
    return oe && D.error(`Cannot extract url for event ${an(e)}`),
        null
  }
}
i(pi, "_getEventFilterUrl");
function fE(e) {
  return e.type || !e.exception || !e.exception.values || e.exception.values.length === 0 ? !1 : !e.message && !e.exception.values.some(t => t.stacktrace || t.type && t.type !== "Error" || t.value)
}
i(fE, "_isUselessError");
const dE = "Dedupe"
    , hE = i( () => {
      let e;
      return {
        name: dE,
        processEvent(t) {
          if (t.type)
            return t;
          try {
            if (mE(t, e))
              return oe && D.warn("Event dropped due to being a duplicate of previously captured event."),
                  null
          } catch {}
          return e = t
        }
      }
    }
    , "_dedupeIntegration")
    , pE = hE;
function mE(e, t) {
  return t ? !!(yE(e, t) || gE(e, t)) : !1
}
i(mE, "_shouldDropEvent");
function yE(e, t) {
  const n = e.message
      , r = t.message;
  return !(!n && !r || n && !r || !n && r || n !== r || !Dd(e, t) || !Fd(e, t))
}
i(yE, "_isSameMessageEvent");
function gE(e, t) {
  const n = rl(t)
      , r = rl(e);
  return !(!n || !r || n.type !== r.type || n.value !== r.value || !Dd(e, t) || !Fd(e, t))
}
i(gE, "_isSameExceptionEvent");
function Fd(e, t) {
  let n = Ou(e)
      , r = Ou(t);
  if (!n && !r)
    return !0;
  if (n && !r || !n && r || (n = n,
      r = r,
  r.length !== n.length))
    return !1;
  for (let s = 0; s < r.length; s++) {
    const o = r[s]
        , c = n[s];
    if (o.filename !== c.filename || o.lineno !== c.lineno || o.colno !== c.colno || o.function !== c.function)
      return !1
  }
  return !0
}
i(Fd, "_isSameStacktrace");
function Dd(e, t) {
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
i(Dd, "_isSameFingerprint");
function rl(e) {
  return e.exception && e.exception.values && e.exception.values[0]
}
i(rl, "_getExceptionFromEvent");
function _E(e, t, n, r, s="auto.http.browser") {
  if (!e.fetchData)
    return;
  const o = Zt() && t(e.fetchData.url);
  if (e.endTimestamp && o) {
    const S = e.fetchData.__span;
    if (!S)
      return;
    const R = r[S];
    R && (EE(R, e),
        delete r[S]);
    return
  }
  const c = Re()
      , l = ue()
      , {method: f, url: h} = e.fetchData
      , p = SE(h)
      , y = p ? Mn(p).host : void 0
      , v = !!Ve()
      , b = o && v ? Sn({
    name: `${f} ${h}`,
    attributes: {
      url: h,
      type: "fetch",
      "http.method": f,
      "http.url": p,
      "server.address": y,
      [je]: s,
      [Bn]: "http.client"
    }
  }) : new br;
  if (e.fetchData.__span = b.spanContext().spanId,
      r[b.spanContext().spanId] = b,
  n(e.fetchData.url) && l) {
    const S = e.args[0];
    e.args[1] = e.args[1] || {};
    const R = e.args[1];
    R.headers = vE(S, l, c, R, Zt() && v ? b : void 0)
  }
  return b
}
i(_E, "instrumentFetchRequest");
function vE(e, t, n, r, s) {
  const o = ft()
      , {traceId: c, spanId: l, sampled: f, dsc: h} = {
    ...o.getPropagationContext(),
    ...n.getPropagationContext()
  }
      , p = s ? gd(s) : $a(c, l, f)
      , y = cd(h || (s ? vn(s) : Bi(c, t)))
      , v = r.headers || (typeof Request < "u" && Kt(e, Request) ? e.headers : void 0);
  if (v)
    if (typeof Headers < "u" && Kt(v, Headers)) {
      const b = new Headers(v);
      if (b.set("sentry-trace", p),
          y) {
        const S = b.get(er);
        if (S) {
          const R = Cs(S);
          b.set(er, R ? `${R},${y}` : y)
        } else
          b.set(er, y)
      }
      return b
    } else if (Array.isArray(v)) {
      const b = [...v.filter(S => !(Array.isArray(S) && S[0] === "sentry-trace")).map(S => {
            if (Array.isArray(S) && S[0] === er && typeof S[1] == "string") {
              const [R,k,...O] = S;
              return [R, Cs(k), ...O]
            } else
              return S
          }
      ), ["sentry-trace", p]];
      return y && b.push([er, y]),
          b
    } else {
      const b = "baggage"in v ? v.baggage : void 0;
      let S = [];
      return Array.isArray(b) ? S = b.map(R => typeof R == "string" ? Cs(R) : R).filter(R => R === "") : b && S.push(Cs(b)),
      y && S.push(y),
          {
            ...v,
            "sentry-trace": p,
            baggage: S.length > 0 ? S.join(",") : void 0
          }
    }
  else
    return {
      "sentry-trace": p,
      baggage: y
    }
}
i(vE, "addTracingHeadersToFetchRequest");
function SE(e) {
  try {
    return new URL(e).href
  } catch {
    return
  }
}
i(SE, "getFullURL$1");
function EE(e, t) {
  if (t.response) {
    pd(e, t.response.status);
    const n = t.response && t.response.headers && t.response.headers.get("content-length");
    if (n) {
      const r = parseInt(n);
      r > 0 && e.setAttribute("http.response_content_length", r)
    }
  } else
    t.error && e.setStatus({
      code: He,
      message: "internal_error"
    });
  e.end()
}
i(EE, "endSpan");
function Cs(e) {
  return e.split(",").filter(t => !t.split("=")[0].startsWith(Ba)).join(",")
}
i(Cs, "stripBaggageHeaderOfSentryBaggageValues");
const se = he;
let na = 0;
function Ld() {
  return na > 0
}
i(Ld, "shouldIgnoreOnError");
function bE() {
  na++,
      setTimeout( () => {
            na--
          }
      )
}
i(bE, "ignoreNextOnError");
function dr(e, t={}, n) {
  if (typeof e != "function")
    return e;
  try {
    const s = e.__sentry_wrapped__;
    if (s)
      return typeof s == "function" ? s : e;
    if (Ua(e))
      return e
  } catch {
    return e
  }
  const r = i(function() {
    const s = Array.prototype.slice.call(arguments);
    try {
      const o = s.map(c => dr(c, t));
      return e.apply(this, o)
    } catch (o) {
      throw bE(),
          za(c => {
                c.addEventProcessor(l => (t.mechanism && (Go(l, void 0, void 0),
                    Jr(l, t.mechanism)),
                    l.extra = {
                      ...l.extra,
                      arguments: s
                    },
                    l)),
                    Pn(o)
              }
          ),
          o
    }
  }, "sentryWrapped");
  try {
    for (const s in e)
      Object.prototype.hasOwnProperty.call(e, s) && (r[s] = e[s])
  } catch {}
  Gf(r, e),
      gt(e, "__sentry_wrapped__", r);
  try {
    Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
      get() {
        return e.name
      }
    })
  } catch {}
  return r
}
i(dr, "wrap");
const It = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function Ka(e, t) {
  const n = Xa(e, t)
      , r = {
    type: kE(t),
    value: OE(t)
  };
  return n.length && (r.stacktrace = {
    frames: n
  }),
  r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"),
      r
}
i(Ka, "exceptionFromError");
function wE(e, t, n, r) {
  const s = ue()
      , o = s && s.getOptions().normalizeDepth
      , c = CE(t)
      , l = {
    __serialized__: id(t, o)
  };
  if (c)
    return {
      exception: {
        values: [Ka(e, c)]
      },
      extra: l
    };
  const f = {
    exception: {
      values: [{
        type: Mi(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
        value: TE(t, {
          isUnhandledRejection: r
        })
      }]
    },
    extra: l
  };
  if (n) {
    const h = Xa(e, n);
    h.length && (f.exception.values[0].stacktrace = {
      frames: h
    })
  }
  return f
}
i(wE, "eventFromPlainObject");
function vo(e, t) {
  return {
    exception: {
      values: [Ka(e, t)]
    }
  }
}
i(vo, "eventFromError");
function Xa(e, t) {
  const n = t.stacktrace || t.stack || ""
      , r = RE(t)
      , s = AE(t);
  try {
    return e(n, r, s)
  } catch {}
  return []
}
i(Xa, "parseStackFrames");
const IE = /Minified React error #\d+;/i;
function RE(e) {
  return e && IE.test(e.message) ? 1 : 0
}
i(RE, "getSkipFirstStackStringLines");
function AE(e) {
  return typeof e.framesToPop == "number" ? e.framesToPop : 0
}
i(AE, "getPopFirstTopFrames");
function Ud(e) {
  return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u" ? e instanceof WebAssembly.Exception : !1
}
i(Ud, "isWebAssemblyException");
function kE(e) {
  const t = e && e.name;
  return !t && Ud(e) ? e.message && Array.isArray(e.message) && e.message.length == 2 ? e.message[0] : "WebAssembly.Exception" : t
}
i(kE, "extractType");
function OE(e) {
  const t = e && e.message;
  return t ? t.error && typeof t.error.message == "string" ? t.error.message : Ud(e) && Array.isArray(e.message) && e.message.length == 2 ? e.message[1] : t : "No error message"
}
i(OE, "extractMessage");
function PE(e, t, n, r) {
  const s = n && n.syntheticException || void 0
      , o = Qa(e, t, s, r);
  return Jr(o),
      o.level = "error",
  n && n.event_id && (o.event_id = n.event_id),
      Jt(o)
}
i(PE, "eventFromException");
function NE(e, t, n="info", r, s) {
  const o = r && r.syntheticException || void 0
      , c = ra(e, t, o, s);
  return c.level = n,
  r && r.event_id && (c.event_id = r.event_id),
      Jt(c)
}
i(NE, "eventFromMessage");
function Qa(e, t, n, r, s) {
  let o;
  if (Hf(t) && t.error)
    return vo(e, t.error);
  if (Su(t) || g_(t)) {
    const c = t;
    if ("stack"in t)
      o = vo(e, t);
    else {
      const l = c.name || (Su(c) ? "DOMError" : "DOMException")
          , f = c.message ? `${l}: ${c.message}` : l;
      o = ra(e, f, n, r),
          Go(o, f)
    }
    return "code"in c && (o.tags = {
      ...o.tags,
      "DOMException.code": `${c.code}`
    }),
        o
  }
  return Fa(t) ? vo(e, t) : ur(t) || Mi(t) ? (o = wE(e, t, n, s),
      Jr(o, {
        synthetic: !0
      }),
      o) : (o = ra(e, t, n, r),
      Go(o, `${t}`, void 0),
      Jr(o, {
        synthetic: !0
      }),
      o)
}
i(Qa, "eventFromUnknownInput");
function ra(e, t, n, r) {
  const s = {};
  if (r && n) {
    const o = Xa(e, n);
    o.length && (s.exception = {
      values: [{
        value: t,
        stacktrace: {
          frames: o
        }
      }]
    })
  }
  if (Da(t)) {
    const {__sentry_template_string__: o, __sentry_template_values__: c} = t;
    return s.logentry = {
      message: o,
      params: c
    },
        s
  }
  return s.message = t,
      s
}
i(ra, "eventFromString");
function TE(e, {isUnhandledRejection: t}) {
  const n = F_(e)
      , r = t ? "promise rejection" : "exception";
  return Hf(e) ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\`` : Mi(e) ? `Event \`${xE(e)}\` (type=${e.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`
}
i(TE, "getNonErrorObjectExceptionValue");
function xE(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : void 0
  } catch {}
}
i(xE, "getObjectClassName");
function CE(e) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      const n = e[t];
      if (n instanceof Error)
        return n
    }
}
i(CE, "getErrorPropertyFromObject");
function ME(e, {metadata: t, tunnel: n, dsn: r}) {
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
      dsn: cs(r)
    }
  }
      , o = FE(e);
  return jn(s, [o])
}
i(ME, "createUserFeedbackEnvelope");
function FE(e) {
  return [{
    type: "user_report"
  }, e]
}
i(FE, "createUserFeedbackEnvelopeItem");
class DE extends US {
  static{i(this, "BrowserClient")
  }constructor(t) {
    const n = {
      parentSpanIsAlwaysRootSpan: !0,
      ...t
    }
        , r = se.SENTRY_SDK_SOURCE || X_();
    Md(n, "browser", ["browser"], r),
        super(n),
    n.sendClientReports && se.document && se.document.addEventListener("visibilitychange", () => {
          se.document.visibilityState === "hidden" && this._flushOutcomes()
        }
    )
  }
  eventFromException(t, n) {
    return PE(this._options.stackParser, t, n, this._options.attachStacktrace)
  }
  eventFromMessage(t, n="info", r) {
    return NE(this._options.stackParser, t, n, r, this._options.attachStacktrace)
  }
  captureUserFeedback(t) {
    if (!this._isEnabled()) {
      It && D.warn("SDK not enabled, will not capture user feedback.");
      return
    }
    const n = ME(t, {
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
const lt = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
    , LE = i( (e, t) => e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good", "getRating")
    , wr = i( (e, t, n, r) => {
      let s, o;
      return c => {
        t.value >= 0 && (c || r) && (o = t.value - (s || 0),
        (o || s === void 0) && (s = t.value,
            t.delta = o,
            t.rating = LE(t.value, n),
            e(t)))
      }
    }
    , "bindReporter")
    , ee = he
    , UE = i( () => `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`, "generateUniqueID")
    , fs = i( () => ee.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0], "getNavigationEntry")
    , ds = i( () => {
      const e = fs();
      return e && e.activationStart || 0
    }
    , "getActivationStart")
    , Ir = i( (e, t) => {
      const n = fs();
      let r = "navigate";
      return n && (ee.document && ee.document.prerendering || ds() > 0 ? r = "prerender" : ee.document && ee.document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))),
          {
            name: e,
            value: typeof t > "u" ? -1 : t,
            rating: "good",
            delta: 0,
            entries: [],
            id: UE(),
            navigationType: r
          }
    }
    , "initMetric")
    , zn = i( (e, t, n) => {
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
    , hs = i(e => {
      const t = i(n => {
            (n.type === "pagehide" || ee.document && ee.document.visibilityState === "hidden") && e(n)
          }
          , "onHiddenOrPageHide");
      ee.document && (addEventListener("visibilitychange", t, !0),
          addEventListener("pagehide", t, !0))
    }
    , "onHidden")
    , Ja = i(e => {
      let t = !1;
      return n => {
        t || (e(n),
            t = !0)
      }
    }
    , "runOnce");
let es = -1;
const BE = i( () => {
      es = ee.document.visibilityState === "hidden" && !ee.document.prerendering ? 0 : 1 / 0
    }
    , "initHiddenTime")
    , mi = i(e => {
      ee.document.visibilityState === "hidden" && es > -1 && (es = e.type === "visibilitychange" ? e.timeStamp : 0,
          removeEventListener("visibilitychange", mi, !0),
          removeEventListener("prerenderingchange", mi, !0))
    }
    , "onVisibilityUpdate")
    , $E = i( () => {
      addEventListener("visibilitychange", mi, !0),
          addEventListener("prerenderingchange", mi, !0)
    }
    , "addChangeListeners")
    , $i = i( () => (ee.document && es < 0 && (BE(),
    $E()),
    {
      get firstHiddenTime() {
        return es
      }
    }), "getVisibilityWatcher")
    , ps = i(e => {
      ee.document && ee.document.prerendering ? addEventListener("prerenderingchange", () => e(), !0) : e()
    }
    , "whenActivated")
    , HE = [1800, 3e3]
    , jE = i( (e, t={}) => {
      ps( () => {
            const n = $i()
                , r = Ir("FCP");
            let s;
            const c = zn("paint", i(l => {
                  l.forEach(f => {
                        f.name === "first-contentful-paint" && (c.disconnect(),
                        f.startTime < n.firstHiddenTime && (r.value = Math.max(f.startTime - ds(), 0),
                            r.entries.push(f),
                            s(!0)))
                      }
                  )
                }
                , "handleEntries"));
            c && (s = wr(e, r, HE, t.reportAllChanges))
          }
      )
    }
    , "onFCP")
    , qE = [.1, .25]
    , zE = i( (e, t={}) => {
      jE(Ja( () => {
            const n = Ir("CLS", 0);
            let r, s = 0, o = [];
            const c = i(f => {
                  f.forEach(h => {
                        if (!h.hadRecentInput) {
                          const p = o[0]
                              , y = o[o.length - 1];
                          s && p && y && h.startTime - y.startTime < 1e3 && h.startTime - p.startTime < 5e3 ? (s += h.value,
                              o.push(h)) : (s = h.value,
                              o = [h])
                        }
                      }
                  ),
                  s > n.value && (n.value = s,
                      n.entries = o,
                      r())
                }
                , "handleEntries")
                , l = zn("layout-shift", c);
            l && (r = wr(e, n, qE, t.reportAllChanges),
                hs( () => {
                      c(l.takeRecords()),
                          r(!0)
                    }
                ),
                setTimeout(r, 0))
          }
      ))
    }
    , "onCLS")
    , WE = [100, 300]
    , VE = i( (e, t={}) => {
      ps( () => {
            const n = $i()
                , r = Ir("FID");
            let s;
            const o = i(f => {
                  f.startTime < n.firstHiddenTime && (r.value = f.processingStart - f.startTime,
                      r.entries.push(f),
                      s(!0))
                }
                , "handleEntry")
                , c = i(f => {
                  f.forEach(o)
                }
                , "handleEntries")
                , l = zn("first-input", c);
            s = wr(e, r, WE, t.reportAllChanges),
            l && hs(Ja( () => {
                  c(l.takeRecords()),
                      l.disconnect()
                }
            ))
          }
      )
    }
    , "onFID");
let Bd = 0
    , So = 1 / 0
    , Ms = 0;
const GE = i(e => {
      e.forEach(t => {
            t.interactionId && (So = Math.min(So, t.interactionId),
                Ms = Math.max(Ms, t.interactionId),
                Bd = Ms ? (Ms - So) / 7 + 1 : 0)
          }
      )
    }
    , "updateEstimate");
let sa;
const YE = i( () => sa ? Bd : performance.interactionCount || 0, "getInteractionCount")
    , KE = i( () => {
      "interactionCount"in performance || sa || (sa = zn("event", GE, {
        type: "event",
        buffered: !0,
        durationThreshold: 0
      }))
    }
    , "initInteractionCountPolyfill")
    , XE = [200, 500]
    , QE = 0
    , $d = i( () => YE() - QE, "getInteractionCountForNavigation")
    , sl = 10
    , zt = []
    , Eo = {}
    , il = i(e => {
      const t = zt[zt.length - 1]
          , n = Eo[e.interactionId];
      if (n || zt.length < sl || t && e.duration > t.latency) {
        if (n)
          n.entries.push(e),
              n.latency = Math.max(n.latency, e.duration);
        else {
          const r = {
            id: e.interactionId,
            latency: e.duration,
            entries: [e]
          };
          Eo[r.id] = r,
              zt.push(r)
        }
        zt.sort( (r, s) => s.latency - r.latency),
            zt.splice(sl).forEach(r => {
                  delete Eo[r.id]
                }
            )
      }
    }
    , "processEntry")
    , JE = i( () => {
      const e = Math.min(zt.length - 1, Math.floor($d() / 50));
      return zt[e]
    }
    , "estimateP98LongestInteraction")
    , ZE = i( (e, t={}) => {
      ps( () => {
            KE();
            const n = Ir("INP");
            let r;
            const s = i(c => {
                  c.forEach(f => {
                        f.interactionId && il(f),
                        f.entryType === "first-input" && !zt.some(p => p.entries.some(y => f.duration === y.duration && f.startTime === y.startTime)) && il(f)
                      }
                  );
                  const l = JE();
                  l && l.latency !== n.value && (n.value = l.latency,
                      n.entries = l.entries,
                      r())
                }
                , "handleEntries")
                , o = zn("event", s, {
              durationThreshold: t.durationThreshold != null ? t.durationThreshold : 40
            });
            r = wr(e, n, XE, t.reportAllChanges),
            o && ("PerformanceEventTiming"in ee && "interactionId"in PerformanceEventTiming.prototype && o.observe({
              type: "first-input",
              buffered: !0
            }),
                hs( () => {
                      s(o.takeRecords()),
                      n.value < 0 && $d() > 0 && (n.value = 0,
                          n.entries = []),
                          r(!0)
                    }
                ))
          }
      )
    }
    , "onINP")
    , e0 = [2500, 4e3]
    , ol = {}
    , t0 = i( (e, t={}) => {
      ps( () => {
            const n = $i()
                , r = Ir("LCP");
            let s;
            const o = i(l => {
                  const f = l[l.length - 1];
                  f && f.startTime < n.firstHiddenTime && (r.value = Math.max(f.startTime - ds(), 0),
                      r.entries = [f],
                      s())
                }
                , "handleEntries")
                , c = zn("largest-contentful-paint", o);
            if (c) {
              s = wr(e, r, e0, t.reportAllChanges);
              const l = Ja( () => {
                    ol[r.id] || (o(c.takeRecords()),
                        c.disconnect(),
                        ol[r.id] = !0,
                        s(!0))
                  }
              );
              ["keydown", "click"].forEach(f => {
                    ee.document && addEventListener(f, () => setTimeout(l, 0), !0)
                  }
              ),
                  hs(l)
            }
          }
      )
    }
    , "onLCP")
    , n0 = [800, 1800]
    , ia = i(e => {
      ee.document && ee.document.prerendering ? ps( () => ia(e)) : ee.document && ee.document.readyState !== "complete" ? addEventListener("load", () => ia(e), !0) : setTimeout(e, 0)
    }
    , "whenReady")
    , r0 = i( (e, t={}) => {
      const n = Ir("TTFB")
          , r = wr(e, n, n0, t.reportAllChanges);
      ia( () => {
            const s = fs();
            if (s) {
              const o = s.responseStart;
              if (o <= 0 || o > performance.now())
                return;
              n.value = Math.max(o - ds(), 0),
                  n.entries = [s],
                  r(!0)
            }
          }
      )
    }
    , "onTTFB")
    , Vr = {}
    , yi = {};
let Hd, jd, qd, zd, Wd;
function Za(e, t=!1) {
  return ms("cls", e, i0, Hd, t)
}
i(Za, "addClsInstrumentationHandler");
function Vd(e, t=!1) {
  return ms("lcp", e, a0, qd, t)
}
i(Vd, "addLcpInstrumentationHandler");
function Gd(e) {
  return ms("fid", e, o0, jd)
}
i(Gd, "addFidInstrumentationHandler");
function s0(e) {
  return ms("ttfb", e, c0, zd)
}
i(s0, "addTtfbInstrumentationHandler");
function Yd(e) {
  return ms("inp", e, u0, Wd)
}
i(Yd, "addInpInstrumentationHandler");
function hr(e, t) {
  return Kd(e, t),
  yi[e] || (l0(e),
      yi[e] = !0),
      Xd(e, t)
}
i(hr, "addPerformanceInstrumentationHandler");
function Rr(e, t) {
  const n = Vr[e];
  if (!(!n || !n.length))
    for (const r of n)
      try {
        r(t)
      } catch (s) {
        lt && D.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${Qt(r)}
Error:`, s)
      }
}
i(Rr, "triggerHandlers");
function i0() {
  return zE(e => {
        Rr("cls", {
          metric: e
        }),
            Hd = e
      }
      , {
        reportAllChanges: !0
      })
}
i(i0, "instrumentCls");
function o0() {
  return VE(e => {
        Rr("fid", {
          metric: e
        }),
            jd = e
      }
  )
}
i(o0, "instrumentFid");
function a0() {
  return t0(e => {
        Rr("lcp", {
          metric: e
        }),
            qd = e
      }
      , {
        reportAllChanges: !0
      })
}
i(a0, "instrumentLcp");
function c0() {
  return r0(e => {
        Rr("ttfb", {
          metric: e
        }),
            zd = e
      }
  )
}
i(c0, "instrumentTtfb");
function u0() {
  return ZE(e => {
        Rr("inp", {
          metric: e
        }),
            Wd = e
      }
  )
}
i(u0, "instrumentInp");
function ms(e, t, n, r, s=!1) {
  Kd(e, t);
  let o;
  return yi[e] || (o = n(),
      yi[e] = !0),
  r && t({
    metric: r
  }),
      Xd(e, t, s ? o : void 0)
}
i(ms, "addMetricObserver");
function l0(e) {
  const t = {};
  e === "event" && (t.durationThreshold = 0),
      zn(e, n => {
            Rr(e, {
              entries: n
            })
          }
          , t)
}
i(l0, "instrumentPerformanceObserver");
function Kd(e, t) {
  Vr[e] = Vr[e] || [],
      Vr[e].push(t)
}
i(Kd, "addHandler");
function Xd(e, t, n) {
  return () => {
    n && n();
    const r = Vr[e];
    if (!r)
      return;
    const s = r.indexOf(t);
    s !== -1 && r.splice(s, 1)
  }
}
i(Xd, "getCleanupCallback");
function f0(e) {
  return "duration"in e
}
i(f0, "isPerformanceEventTiming");
function bo(e) {
  return typeof e == "number" && isFinite(e)
}
i(bo, "isMeasurementValue");
function $n(e, t, n, {...r}) {
  const s = ye(e).start_timestamp;
  return s && s > t && typeof e.updateStartTime == "function" && e.updateStartTime(t),
      Id(e, () => {
            const o = Sn({
              startTime: t,
              ...r
            });
            return o && o.end(n),
                o
          }
      )
}
i($n, "startAndEndSpan");
function Qd(e) {
  const t = ue();
  if (!t)
    return;
  const {name: n, transaction: r, attributes: s, startTime: o} = e
      , {release: c, environment: l} = t.getOptions()
      , f = t.getIntegrationByName("Replay")
      , h = f && f.getReplayId()
      , p = Re()
      , y = p.getUser()
      , v = y !== void 0 ? y.email || y.id || y.ip_address : void 0;
  let b;
  try {
    b = p.getScopeData().contexts.profile.profile_id
  } catch {}
  const S = {
    release: c,
    environment: l,
    user: v || void 0,
    profile_id: b || void 0,
    replay_id: h || void 0,
    transaction: r,
    "user_agent.original": ee.navigator && ee.navigator.userAgent,
    ...s
  };
  return Sn({
    name: n,
    attributes: S,
    startTime: o,
    experimental: {
      standalone: !0
    }
  })
}
i(Qd, "startStandaloneWebVitalSpan");
function ec() {
  return ee && ee.addEventListener && ee.performance
}
i(ec, "getBrowserPerformanceAPI");
function Me(e) {
  return e / 1e3
}
i(Me, "msToSec");
function d0() {
  let e = 0, t, n;
  if (!p0())
    return;
  let r = !1;
  function s() {
    r || (r = !0,
    n && h0(e, t, n),
        o())
  }
  i(s, "_collectClsOnce");
  const o = Za( ({metric: c}) => {
        const l = c.entries[c.entries.length - 1];
        l && (e = c.value,
            t = l)
      }
      , !0);
  hs( () => {
        s()
      }
  ),
      setTimeout( () => {
            const c = ue()
                , l = ut([c, "optionalAccess", y => y.on, "call", y => y("startNavigationSpan", () => {
                  s(),
                  l && l()
                }
            )])
                , f = Ve()
                , h = f && We(f)
                , p = h && ye(h);
            p && p.op === "pageload" && (n = h.spanContext().spanId)
          }
          , 0)
}
i(d0, "trackClsAsStandaloneSpan");
function h0(e, t, n) {
  lt && D.log(`Sending CLS span (${e})`);
  const r = Me((Ze || 0) + (ut([t, "optionalAccess", f => f.startTime]) || 0))
      , s = Re().getScopeData().transactionName
      , o = t ? Xt(ut([t, "access", f => f.sources, "access", f => f[0], "optionalAccess", f => f.node])) : "Layout shift"
      , c = $e({
    [je]: "auto.http.browser.cls",
    [Bn]: "ui.webvital.cls",
    [Wa]: ut([t, "optionalAccess", f => f.duration]) || 0,
    "sentry.pageload.span_id": n
  })
      , l = Qd({
    name: o,
    transaction: s,
    attributes: c,
    startTime: r
  });
  ut([l, "optionalAccess", f => f.addEvent, "call", f => f("cls", {
    [Li]: "",
    [Ui]: e
  })]),
      ut([l, "optionalAccess", f => f.end, "call", f => f(r)])
}
i(h0, "sendStandaloneClsSpan");
function p0() {
  try {
    return ut([PerformanceObserver, "access", e => e.supportedEntryTypes, "optionalAccess", e => e.includes, "call", e => e("layout-shift")])
  } catch {
    return !1
  }
}
i(p0, "supportsLayoutShift");
const m0 = 2147483647;
let al = 0, ze = {}, Pt, Gr;
function y0({recordClsStandaloneSpans: e}) {
  const t = ec();
  if (t && Ze) {
    t.mark && ee.performance.mark("sentry-tracing-init");
    const n = b0()
        , r = E0()
        , s = w0()
        , o = e ? d0() : S0();
    return () => {
      n(),
          r(),
          s(),
      o && o()
    }
  }
  return () => {}
}
i(y0, "startTrackingWebVitals");
function g0() {
  hr("longtask", ({entries: e}) => {
        const t = Ve();
        if (!t)
          return;
        const {op: n, start_timestamp: r} = ye(t);
        for (const s of e) {
          const o = Me(Ze + s.startTime)
              , c = Me(s.duration);
          n === "navigation" && r && o < r || $n(t, o, o + c, {
            name: "Main UI thread blocked",
            op: "ui.long-task",
            attributes: {
              [je]: "auto.ui.browser.metrics"
            }
          })
        }
      }
  )
}
i(g0, "startTrackingLongTasks");
function _0() {
  new PerformanceObserver(t => {
        if (Ve())
          for (const n of t.getEntries()) {
            if (!n.scripts[0])
              continue;
            const r = Me(Ze + n.startTime)
                , s = Me(n.duration)
                , o = {
              [je]: "auto.ui.browser.metrics"
            }
                , c = n.scripts[0]
                , {invoker: l, invokerType: f, sourceURL: h, sourceFunctionName: p, sourceCharPosition: y} = c;
            o["browser.script.invoker"] = l,
                o["browser.script.invoker_type"] = f,
            h && (o["code.filepath"] = h),
            p && (o["code.function"] = p),
            y !== -1 && (o["browser.script.source_char_position"] = y);
            const v = Sn({
              name: "Main UI thread blocked",
              op: "ui.long-animation-frame",
              startTime: r,
              attributes: o
            });
            v && v.end(r + s)
          }
      }
  ).observe({
    type: "long-animation-frame",
    buffered: !0
  })
}
i(_0, "startTrackingLongAnimationFrames");
function v0() {
  hr("event", ({entries: e}) => {
        if (Ve()) {
          for (const t of e)
            if (t.name === "click") {
              const n = Me(Ze + t.startTime)
                  , r = Me(t.duration)
                  , s = {
                name: Xt(t.target),
                op: `ui.interaction.${t.name}`,
                startTime: n,
                attributes: {
                  [je]: "auto.ui.browser.metrics"
                }
              }
                  , o = Wf(t.target);
              o && (s.attributes["ui.component_name"] = o);
              const c = Sn(s);
              c && c.end(n + r)
            }
        }
      }
  )
}
i(v0, "startTrackingInteractions");
function S0() {
  return Za( ({metric: e}) => {
        const t = e.entries[e.entries.length - 1];
        t && (lt && D.log(`[Measurements] Adding CLS ${e.value}`),
            ze.cls = {
              value: e.value,
              unit: ""
            },
            Gr = t)
      }
      , !0)
}
i(S0, "_trackCLS");
function E0() {
  return Vd( ({metric: e}) => {
        const t = e.entries[e.entries.length - 1];
        t && (lt && D.log("[Measurements] Adding LCP"),
            ze.lcp = {
              value: e.value,
              unit: "millisecond"
            },
            Pt = t)
      }
      , !0)
}
i(E0, "_trackLCP");
function b0() {
  return Gd( ({metric: e}) => {
        const t = e.entries[e.entries.length - 1];
        if (!t)
          return;
        const n = Me(Ze)
            , r = Me(t.startTime);
        lt && D.log("[Measurements] Adding FID"),
            ze.fid = {
              value: e.value,
              unit: "millisecond"
            },
            ze["mark.fid"] = {
              value: n + r,
              unit: "second"
            }
      }
  )
}
i(b0, "_trackFID");
function w0() {
  return s0( ({metric: e}) => {
        e.entries[e.entries.length - 1] && (lt && D.log("[Measurements] Adding TTFB"),
            ze.ttfb = {
              value: e.value,
              unit: "millisecond"
            })
      }
  )
}
i(w0, "_trackTtfb");
function I0(e, t) {
  const n = ec();
  if (!n || !ee.performance.getEntries || !Ze)
    return;
  lt && D.log("[Tracing] Adding & adjusting spans using Performance API");
  const r = Me(Ze)
      , s = n.getEntries()
      , {op: o, start_timestamp: c} = ye(e);
  if (s.slice(al).forEach(l => {
        const f = Me(l.startTime)
            , h = Me(Math.max(0, l.duration));
        if (!(o === "navigation" && c && r + f < c))
          switch (l.entryType) {
            case "navigation":
            {
              A0(e, l, r);
              break
            }
            case "mark":
            case "paint":
            case "measure":
            {
              R0(e, l, f, h, r);
              const p = $i()
                  , y = l.startTime < p.firstHiddenTime;
              l.name === "first-paint" && y && (lt && D.log("[Measurements] Adding FP"),
                  ze.fp = {
                    value: l.startTime,
                    unit: "millisecond"
                  }),
              l.name === "first-contentful-paint" && y && (lt && D.log("[Measurements] Adding FCP"),
                  ze.fcp = {
                    value: l.startTime,
                    unit: "millisecond"
                  });
              break
            }
            case "resource":
            {
              O0(e, l, l.name, f, h, r);
              break
            }
          }
      }
  ),
      al = Math.max(s.length - 1, 0),
      P0(e),
  o === "pageload") {
    T0(ze);
    const l = ze["mark.fid"];
    l && ze.fid && ($n(e, l.value, l.value + Me(ze.fid.value), {
      name: "first input delay",
      op: "ui.action",
      attributes: {
        [je]: "auto.ui.browser.metrics"
      }
    }),
        delete ze["mark.fid"]),
    (!("fcp"in ze) || !t.recordClsOnPageloadSpan) && delete ze.cls,
        Object.entries(ze).forEach( ([f,h]) => {
              eS(f, h.value, h.unit)
            }
        ),
        e.setAttribute("performance.timeOrigin", r),
        e.setAttribute("performance.activationStart", ds()),
        N0(e)
  }
  Pt = void 0,
      Gr = void 0,
      ze = {}
}
i(I0, "addPerformanceEntries");
function R0(e, t, n, r, s) {
  const o = fs()
      , c = Me(o ? o.requestStart : 0)
      , l = s + Math.max(n, c)
      , f = s + n
      , h = f + r
      , p = {
    [je]: "auto.resource.browser.metrics"
  };
  return l !== f && (p["sentry.browser.measure_happened_before_request"] = !0,
      p["sentry.browser.measure_start_time"] = l),
      $n(e, l, h, {
        name: t.name,
        op: t.entryType,
        attributes: p
      }),
      l
}
i(R0, "_addMeasureSpans");
function A0(e, t, n) {
  ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
        Fs(e, t, r, n)
      }
  ),
      Fs(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
      Fs(e, t, "fetch", n, "cache", "domainLookupStart"),
      Fs(e, t, "domainLookup", n, "DNS"),
      k0(e, t, n)
}
i(A0, "_addNavigationSpans");
function Fs(e, t, n, r, s, o) {
  const c = o ? t[o] : t[`${n}End`]
      , l = t[`${n}Start`];
  !l || !c || $n(e, r + Me(l), r + Me(c), {
    op: `browser.${s || n}`,
    name: t.name,
    attributes: {
      [je]: "auto.ui.browser.metrics"
    }
  })
}
i(Fs, "_addPerformanceNavigationTiming");
function k0(e, t, n) {
  const r = n + Me(t.requestStart)
      , s = n + Me(t.responseEnd)
      , o = n + Me(t.responseStart);
  t.responseEnd && ($n(e, r, s, {
    op: "browser.request",
    name: t.name,
    attributes: {
      [je]: "auto.ui.browser.metrics"
    }
  }),
      $n(e, o, s, {
        op: "browser.response",
        name: t.name,
        attributes: {
          [je]: "auto.ui.browser.metrics"
        }
      }))
}
i(k0, "_addRequest");
function O0(e, t, n, r, s, o) {
  if (t.initiatorType === "xmlhttprequest" || t.initiatorType === "fetch")
    return;
  const c = Mn(n)
      , l = {
    [je]: "auto.resource.browser.metrics"
  };
  wo(l, t, "transferSize", "http.response_transfer_size"),
      wo(l, t, "encodedBodySize", "http.response_content_length"),
      wo(l, t, "decodedBodySize", "http.decoded_response_content_length"),
  t.deliveryType != null && (l["http.response_delivery_type"] = t.deliveryType),
  "renderBlockingStatus"in t && (l["resource.render_blocking_status"] = t.renderBlockingStatus),
  c.protocol && (l["url.scheme"] = c.protocol.split(":").pop()),
  c.host && (l["server.address"] = c.host),
      l["url.same_origin"] = n.includes(ee.location.origin);
  const f = o + r
      , h = f + s;
  $n(e, f, h, {
    name: n.replace(ee.location.origin, ""),
    op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
    attributes: l
  })
}
i(O0, "_addResourceSpans");
function P0(e) {
  const t = ee.navigator;
  if (!t)
    return;
  const n = t.connection;
  n && (n.effectiveType && e.setAttribute("effectiveConnectionType", n.effectiveType),
  n.type && e.setAttribute("connectionType", n.type),
  bo(n.rtt) && (ze["connection.rtt"] = {
    value: n.rtt,
    unit: "millisecond"
  })),
  bo(t.deviceMemory) && e.setAttribute("deviceMemory", `${t.deviceMemory} GB`),
  bo(t.hardwareConcurrency) && e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency))
}
i(P0, "_trackNavigator");
function N0(e) {
  Pt && (lt && D.log("[Measurements] Adding LCP Data"),
  Pt.element && e.setAttribute("lcp.element", Xt(Pt.element)),
  Pt.id && e.setAttribute("lcp.id", Pt.id),
  Pt.url && e.setAttribute("lcp.url", Pt.url.trim().slice(0, 200)),
      e.setAttribute("lcp.size", Pt.size)),
  Gr && Gr.sources && (lt && D.log("[Measurements] Adding CLS Data"),
      Gr.sources.forEach( (t, n) => e.setAttribute(`cls.source.${n + 1}`, Xt(t.node))))
}
i(N0, "_setWebVitalAttributes");
function wo(e, t, n, r) {
  const s = t[n];
  s != null && s < m0 && (e[r] = s)
}
i(wo, "setResourceEntrySizeData");
function T0(e) {
  const t = fs();
  if (!t)
    return;
  const {responseStart: n, requestStart: r} = t;
  r <= n && (lt && D.log("[Measurements] Adding TTFB Request Time"),
      e["ttfb.requestTime"] = {
        value: n - r,
        unit: "millisecond"
      })
}
i(T0, "_addTtfbRequestTimeToMeasurements");
const x0 = 1e3;
let cl, oa, aa;
function Jd(e) {
  const t = "dom";
  gn(t, e),
      _n(t, C0)
}
i(Jd, "addClickKeypressInstrumentationHandler");
function C0() {
  if (!ee.document)
    return;
  const e = yt.bind(null, "dom")
      , t = ul(e, !0);
  ee.document.addEventListener("click", t, !1),
      ee.document.addEventListener("keypress", t, !1),
      ["EventTarget", "Node"].forEach(n => {
            const r = ee[n] && ee[n].prototype;
            !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (it(r, "addEventListener", function(s) {
              return function(o, c, l) {
                if (o === "click" || o == "keypress")
                  try {
                    const f = this
                        , h = f.__sentry_instrumentation_handlers__ = f.__sentry_instrumentation_handlers__ || {}
                        , p = h[o] = h[o] || {
                      refCount: 0
                    };
                    if (!p.handler) {
                      const y = ul(e);
                      p.handler = y,
                          s.call(this, o, y, l)
                    }
                    p.refCount++
                  } catch {}
                return s.call(this, o, c, l)
              }
            }),
                it(r, "removeEventListener", function(s) {
                  return function(o, c, l) {
                    if (o === "click" || o == "keypress")
                      try {
                        const f = this
                            , h = f.__sentry_instrumentation_handlers__ || {}
                            , p = h[o];
                        p && (p.refCount--,
                        p.refCount <= 0 && (s.call(this, o, p.handler, l),
                            p.handler = void 0,
                            delete h[o]),
                        Object.keys(h).length === 0 && delete f.__sentry_instrumentation_handlers__)
                      } catch {}
                    return s.call(this, o, c, l)
                  }
                }))
          }
      )
}
i(C0, "instrumentDOM");
function M0(e) {
  if (e.type !== oa)
    return !1;
  try {
    if (!e.target || e.target._sentryId !== aa)
      return !1
  } catch {}
  return !0
}
i(M0, "isSimilarToLastCapturedEvent");
function F0(e, t) {
  return e !== "keypress" ? !1 : !t || !t.tagName ? !0 : !(t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)
}
i(F0, "shouldSkipDOMEvent");
function ul(e, t=!1) {
  return n => {
    if (!n || n._sentryCaptured)
      return;
    const r = D0(n);
    if (F0(n.type, r))
      return;
    gt(n, "_sentryCaptured", !0),
    r && !r._sentryId && gt(r, "_sentryId", Ne());
    const s = n.type === "keypress" ? "input" : n.type;
    M0(n) || (e({
      event: n,
      name: s,
      global: t
    }),
        oa = n.type,
        aa = r ? r._sentryId : void 0),
        clearTimeout(cl),
        cl = ee.setTimeout( () => {
              aa = void 0,
                  oa = void 0
            }
            , x0)
  }
}
i(ul, "makeDOMEventHandler");
function D0(e) {
  try {
    return e.target
  } catch {
    return null
  }
}
i(D0, "getEventTarget$1");
let Ds;
function Hi(e) {
  const t = "history";
  gn(t, e),
      _n(t, L0)
}
i(Hi, "addHistoryInstrumentationHandler");
function L0() {
  if (!Iv())
    return;
  const e = ee.onpopstate;
  ee.onpopstate = function(...n) {
    const r = ee.location.href
        , s = Ds;
    if (Ds = r,
        yt("history", {
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
        const o = Ds
            , c = String(s);
        Ds = c,
            yt("history", {
              from: o,
              to: c
            })
      }
      return n.apply(this, r)
    }
  }
  i(t, "historyReplacementFunction"),
      it(ee.history, "pushState", t),
      it(ee.history, "replaceState", t)
}
i(L0, "instrumentHistory");
const Qs = {};
function Zd(e) {
  const t = Qs[e];
  if (t)
    return t;
  let n = ee[e];
  if (Wo(n))
    return Qs[e] = n.bind(ee);
  const r = ee.document;
  if (r && typeof r.createElement == "function")
    try {
      const s = r.createElement("iframe");
      s.hidden = !0,
          r.head.appendChild(s);
      const o = s.contentWindow;
      o && o[e] && (n = o[e]),
          r.head.removeChild(s)
    } catch (s) {
      lt && D.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, s)
    }
  return n && (Qs[e] = n.bind(ee))
}
i(Zd, "getNativeImplementation");
function ll(e) {
  Qs[e] = void 0
}
i(ll, "clearCachedImplementation");
function pr(...e) {
  return Zd("setTimeout")(...e)
}
i(pr, "setTimeout$3");
const Nn = "__sentry_xhr_v3__";
function eh(e) {
  const t = "xhr";
  gn(t, e),
      _n(t, U0)
}
i(eh, "addXhrInstrumentationHandler");
function U0() {
  if (!ee.XMLHttpRequest)
    return;
  const e = XMLHttpRequest.prototype;
  e.open = new Proxy(e.open,{
    apply(t, n, r) {
      const s = Je() * 1e3
          , o = Gt(r[0]) ? r[0].toUpperCase() : void 0
          , c = B0(r[1]);
      if (!o || !c)
        return t.apply(n, r);
      n[Nn] = {
        method: o,
        url: c,
        request_headers: {}
      },
      o === "POST" && c.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
      const l = i( () => {
            const f = n[Nn];
            if (f && n.readyState === 4) {
              try {
                f.status_code = n.status
              } catch {}
              const h = {
                endTimestamp: Je() * 1e3,
                startTimestamp: s,
                xhr: n
              };
              yt("xhr", h)
            }
          }
          , "onreadystatechangeHandler");
      return "onreadystatechange"in n && typeof n.onreadystatechange == "function" ? n.onreadystatechange = new Proxy(n.onreadystatechange,{
        apply(f, h, p) {
          return l(),
              f.apply(h, p)
        }
      }) : n.addEventListener("readystatechange", l),
          n.setRequestHeader = new Proxy(n.setRequestHeader,{
            apply(f, h, p) {
              const [y,v] = p
                  , b = h[Nn];
              return b && Gt(y) && Gt(v) && (b.request_headers[y.toLowerCase()] = v),
                  f.apply(h, p)
            }
          }),
          t.apply(n, r)
    }
  }),
      e.send = new Proxy(e.send,{
        apply(t, n, r) {
          const s = n[Nn];
          if (!s)
            return t.apply(n, r);
          r[0] !== void 0 && (s.body = r[0]);
          const o = {
            startTimestamp: Je() * 1e3,
            xhr: n
          };
          return yt("xhr", o),
              t.apply(n, r)
        }
      })
}
i(U0, "instrumentXHR");
function B0(e) {
  if (Gt(e))
    return e;
  try {
    return e.toString()
  } catch {}
}
i(B0, "parseUrl");
const Io = []
    , Js = new Map;
function $0() {
  if (ec() && Ze) {
    const t = H0();
    return () => {
      t()
    }
  }
  return () => {}
}
i($0, "startTrackingINP");
const fl = {
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
function H0() {
  return Yd( ({metric: e}) => {
        if (e.value == null)
          return;
        const t = e.entries.find(S => S.duration === e.value && fl[S.name]);
        if (!t)
          return;
        const {interactionId: n} = t
            , r = fl[t.name]
            , s = Me(Ze + t.startTime)
            , o = Me(e.value)
            , c = Ve()
            , l = c ? We(c) : void 0
            , h = (n != null ? Js.get(n) : void 0) || l
            , p = h ? ye(h).description : Re().getScopeData().transactionName
            , y = Xt(t.target)
            , v = $e({
          [je]: "auto.http.browser.inp",
          [Bn]: `ui.interaction.${r}`,
          [Wa]: t.duration
        })
            , b = Qd({
          name: y,
          transaction: p,
          attributes: v,
          startTime: s
        });
        ut([b, "optionalAccess", S => S.addEvent, "call", S => S("inp", {
          [Li]: "millisecond",
          [Ui]: e.value
        })]),
            ut([b, "optionalAccess", S => S.end, "call", S => S(s + o)])
      }
  )
}
i(H0, "_trackINP");
function j0(e) {
  const t = i( ({entries: n}) => {
        const r = Ve()
            , s = r && We(r);
        n.forEach(o => {
              if (!f0(o) || !s)
                return;
              const c = o.interactionId;
              if (c != null && !Js.has(c)) {
                if (Io.length > 10) {
                  const l = Io.shift();
                  Js.delete(l)
                }
                Io.push(c),
                    Js.set(c, s)
              }
            }
        )
      }
      , "handleEntries");
  hr("event", t),
      hr("first-input", t)
}
i(j0, "registerInpInteractionListener");
function q0(e, t=Zd("fetch")) {
  let n = 0
      , r = 0;
  function s(o) {
    const c = o.body.length;
    n += c,
        r++;
    const l = {
      body: o.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: e.headers,
      keepalive: n <= 6e4 && r < 15,
      ...e.fetchOptions
    };
    if (!t)
      return ll("fetch"),
          li("No fetch implementation available");
    try {
      return t(e.url, l).then(f => (n -= c,
          r--,
          {
            statusCode: f.status,
            headers: {
              "x-sentry-rate-limits": f.headers.get("X-Sentry-Rate-Limits"),
              "retry-after": f.headers.get("Retry-After")
            }
          }))
    } catch (f) {
      return ll("fetch"),
          n -= c,
          r--,
          li(f)
    }
  }
  return i(s, "makeRequest"),
      zS(e, s)
}
i(q0, "makeFetchTransport");
const z0 = 30
    , W0 = 50;
function ca(e, t, n, r) {
  const s = {
    filename: e,
    function: t === "<anonymous>" ? Un : t,
    in_app: !0
  };
  return n !== void 0 && (s.lineno = n),
  r !== void 0 && (s.colno = r),
      s
}
i(ca, "createFrame");
const V0 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i
    , G0 = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
    , Y0 = /\((\S*)(?::(\d+))(?::(\d+))\)/
    , K0 = i(e => {
      const t = V0.exec(e);
      if (t) {
        const [,r,s,o] = t;
        return ca(r, Un, +s, +o)
      }
      const n = G0.exec(e);
      if (n) {
        if (n[2] && n[2].indexOf("eval") === 0) {
          const c = Y0.exec(n[2]);
          c && (n[2] = c[1],
              n[3] = c[2],
              n[4] = c[3])
        }
        const [s,o] = th(n[1] || Un, n[2]);
        return ca(o, s, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
      }
    }
    , "chromeStackParserFn")
    , X0 = [z0, K0]
    , Q0 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
    , J0 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
    , Z0 = i(e => {
      const t = Q0.exec(e);
      if (t) {
        if (t[3] && t[3].indexOf(" > eval") > -1) {
          const o = J0.exec(t[3]);
          o && (t[1] = t[1] || "eval",
              t[3] = o[1],
              t[4] = o[2],
              t[5] = "")
        }
        let r = t[3]
            , s = t[1] || Un;
        return [s,r] = th(s, r),
            ca(r, s, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
      }
    }
    , "gecko")
    , eb = [W0, Z0]
    , tb = [X0, eb]
    , nb = Xf(...tb)
    , th = i( (e, t) => {
      const n = e.indexOf("safari-extension") !== -1
          , r = e.indexOf("safari-web-extension") !== -1;
      return n || r ? [e.indexOf("@") !== -1 ? e.split("@")[0] : Un, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
    }
    , "extractSafariExtensionDetails")
    , Ls = 1024
    , rb = "Breadcrumbs"
    , sb = i( (e={}) => {
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
        name: rb,
        setup(n) {
          t.console && B_(cb(n)),
          t.dom && Jd(ab(n, t.dom)),
          t.xhr && eh(ub(n)),
          t.fetch && Zf(lb(n)),
          t.history && Hi(fb(n)),
          t.sentry && n.on("beforeSendEvent", ob(n))
        }
      }
    }
    , "_breadcrumbsIntegration")
    , ib = sb;
function ob(e) {
  return i(function(n) {
    ue() === e && yn({
      category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
      event_id: n.event_id,
      level: n.level,
      message: an(n)
    }, {
      event: n
    })
  }, "addSentryBreadcrumb")
}
i(ob, "_getSentryBreadcrumbHandler");
function ab(e, t) {
  return i(function(r) {
    if (ue() !== e)
      return;
    let s, o, c = typeof t == "object" ? t.serializeAttribute : void 0, l = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : void 0;
    l && l > Ls && (It && D.warn(`\`dom.maxStringLength\` cannot exceed ${Ls}, but a value of ${l} was configured. Sentry will use ${Ls} instead.`),
        l = Ls),
    typeof c == "string" && (c = [c]);
    try {
      const h = r.event
          , p = db(h) ? h.target : h;
      s = Xt(p, {
        keyAttrs: c,
        maxStringLength: l
      }),
          o = Wf(p)
    } catch {
      s = "<unknown>"
    }
    if (s.length === 0)
      return;
    const f = {
      category: `ui.${r.name}`,
      message: s
    };
    o && (f.data = {
      "ui.component_name": o
    }),
        yn(f, {
          event: r.event,
          name: r.name,
          global: r.global
        })
  }, "_innerDomBreadcrumb")
}
i(ab, "_getDomBreadcrumbHandler");
function cb(e) {
  return i(function(n) {
    if (ue() !== e)
      return;
    const r = {
      category: "console",
      data: {
        arguments: n.args,
        logger: "console"
      },
      level: od(n.level),
      message: Eu(n.args, " ")
    };
    if (n.level === "assert")
      if (n.args[0] === !1)
        r.message = `Assertion failed: ${Eu(n.args.slice(1), " ") || "console.assert"}`,
            r.data.arguments = n.args.slice(1);
      else
        return;
    yn(r, {
      input: n.args,
      level: n.level
    })
  }, "_consoleBreadcrumb")
}
i(cb, "_getConsoleBreadcrumbHandler");
function ub(e) {
  return i(function(n) {
    if (ue() !== e)
      return;
    const {startTimestamp: r, endTimestamp: s} = n
        , o = n.xhr[Nn];
    if (!r || !s || !o)
      return;
    const {method: c, url: l, status_code: f, body: h} = o
        , p = {
      method: c,
      url: l,
      status_code: f
    }
        , y = {
      xhr: n.xhr,
      input: h,
      startTimestamp: r,
      endTimestamp: s
    }
        , v = qf(f);
    yn({
      category: "xhr",
      data: p,
      type: "http",
      level: v
    }, y)
  }, "_xhrBreadcrumb")
}
i(ub, "_getXhrBreadcrumbHandler");
function lb(e) {
  return i(function(n) {
    if (ue() !== e)
      return;
    const {startTimestamp: r, endTimestamp: s} = n;
    if (s && !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST"))
      if (n.error) {
        const o = n.fetchData
            , c = {
          data: n.error,
          input: n.args,
          startTimestamp: r,
          endTimestamp: s
        };
        yn({
          category: "fetch",
          data: o,
          level: "error",
          type: "http"
        }, c)
      } else {
        const o = n.response
            , c = {
          ...n.fetchData,
          status_code: o && o.status
        }
            , l = {
          input: n.args,
          response: o,
          startTimestamp: r,
          endTimestamp: s
        }
            , f = qf(c.status_code);
        yn({
          category: "fetch",
          data: c,
          type: "http",
          level: f
        }, l)
      }
  }, "_fetchBreadcrumb")
}
i(lb, "_getFetchBreadcrumbHandler");
function fb(e) {
  return i(function(n) {
    if (ue() !== e)
      return;
    let r = n.from
        , s = n.to;
    const o = Mn(se.location.href);
    let c = r ? Mn(r) : void 0;
    const l = Mn(s);
    (!c || !c.path) && (c = o),
    o.protocol === l.protocol && o.host === l.host && (s = l.relative),
    o.protocol === c.protocol && o.host === c.host && (r = c.relative),
        yn({
          category: "navigation",
          data: {
            from: r,
            to: s
          }
        })
  }, "_historyBreadcrumb")
}
i(fb, "_getHistoryBreadcrumbHandler");
function db(e) {
  return !!e && !!e.target
}
i(db, "_isEvent");
const hb = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
    , pb = "BrowserApiErrors"
    , mb = i( (e={}) => {
      const t = {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
        ...e
      };
      return {
        name: pb,
        setupOnce() {
          t.setTimeout && it(se, "setTimeout", dl),
          t.setInterval && it(se, "setInterval", dl),
          t.requestAnimationFrame && it(se, "requestAnimationFrame", gb),
          t.XMLHttpRequest && "XMLHttpRequest"in se && it(XMLHttpRequest.prototype, "send", _b);
          const n = t.eventTarget;
          n && (Array.isArray(n) ? n : hb).forEach(vb)
        }
      }
    }
    , "_browserApiErrorsIntegration")
    , yb = mb;
function dl(e) {
  return function(...t) {
    const n = t[0];
    return t[0] = dr(n, {
      mechanism: {
        data: {
          function: Qt(e)
        },
        handled: !1,
        type: "instrument"
      }
    }),
        e.apply(this, t)
  }
}
i(dl, "_wrapTimeFunction");
function gb(e) {
  return function(t) {
    return e.apply(this, [dr(t, {
      mechanism: {
        data: {
          function: "requestAnimationFrame",
          handler: Qt(e)
        },
        handled: !1,
        type: "instrument"
      }
    })])
  }
}
i(gb, "_wrapRAF");
function _b(e) {
  return function(...t) {
    const n = this;
    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(s => {
          s in n && typeof n[s] == "function" && it(n, s, function(o) {
            const c = {
              mechanism: {
                data: {
                  function: s,
                  handler: Qt(o)
                },
                handled: !1,
                type: "instrument"
              }
            }
                , l = Ua(o);
            return l && (c.mechanism.data.handler = Qt(l)),
                dr(o, c)
          })
        }
    ),
        e.apply(this, t)
  }
}
i(_b, "_wrapXHR");
function vb(e) {
  const t = se
      , n = t[e] && t[e].prototype;
  !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (it(n, "addEventListener", function(r) {
    return function(s, o, c) {
      try {
        typeof o.handleEvent == "function" && (o.handleEvent = dr(o.handleEvent, {
          mechanism: {
            data: {
              function: "handleEvent",
              handler: Qt(o),
              target: e
            },
            handled: !1,
            type: "instrument"
          }
        }))
      } catch {}
      return r.apply(this, [s, dr(o, {
        mechanism: {
          data: {
            function: "addEventListener",
            handler: Qt(o),
            target: e
          },
          handled: !1,
          type: "instrument"
        }
      }), c])
    }
  }),
      it(n, "removeEventListener", function(r) {
        return function(s, o, c) {
          const l = o;
          try {
            const f = l && l.__sentry_wrapped__;
            f && r.call(this, s, f, c)
          } catch {}
          return r.call(this, s, l, c)
        }
      }))
}
i(vb, "_wrapEventTarget");
const Sb = "GlobalHandlers"
    , Eb = i( (e={}) => {
      const t = {
        onerror: !0,
        onunhandledrejection: !0,
        ...e
      };
      return {
        name: Sb,
        setupOnce() {
          Error.stackTraceLimit = 50
        },
        setup(n) {
          t.onerror && (wb(n),
              hl("onerror")),
          t.onunhandledrejection && (Ib(n),
              hl("onunhandledrejection"))
        }
      }
    }
    , "_globalHandlersIntegration")
    , bb = Eb;
function wb(e) {
  td(t => {
        const {stackParser: n, attachStacktrace: r} = nh();
        if (ue() !== e || Ld())
          return;
        const {msg: s, url: o, line: c, column: l, error: f} = t
            , h = kb(Qa(n, f || s, void 0, r, !1), o, c, l);
        h.level = "error",
            Od(h, {
              originalException: f,
              mechanism: {
                handled: !1,
                type: "onerror"
              }
            })
      }
  )
}
i(wb, "_installGlobalOnErrorHandler");
function Ib(e) {
  nd(t => {
        const {stackParser: n, attachStacktrace: r} = nh();
        if (ue() !== e || Ld())
          return;
        const s = Rb(t)
            , o = La(s) ? Ab(s) : Qa(n, s, void 0, r, !0);
        o.level = "error",
            Od(o, {
              originalException: s,
              mechanism: {
                handled: !1,
                type: "onunhandledrejection"
              }
            })
      }
  )
}
i(Ib, "_installGlobalOnUnhandledRejectionHandler");
function Rb(e) {
  if (La(e))
    return e;
  try {
    if ("reason"in e)
      return e.reason;
    if ("detail"in e && "reason"in e.detail)
      return e.detail.reason
  } catch {}
  return e
}
i(Rb, "_getUnhandledRejectionError");
function Ab(e) {
  return {
    exception: {
      values: [{
        type: "UnhandledRejection",
        value: `Non-Error promise rejection captured with value: ${String(e)}`
      }]
    }
  }
}
i(Ab, "_eventFromRejectionWithPrimitive");
function kb(e, t, n, r) {
  const s = e.exception = e.exception || {}
      , o = s.values = s.values || []
      , c = o[0] = o[0] || {}
      , l = c.stacktrace = c.stacktrace || {}
      , f = l.frames = l.frames || []
      , h = isNaN(parseInt(r, 10)) ? void 0 : r
      , p = isNaN(parseInt(n, 10)) ? void 0 : n
      , y = Gt(t) && t.length > 0 ? t : zf();
  return f.length === 0 && f.push({
    colno: h,
    filename: y,
    function: Un,
    in_app: !0,
    lineno: p
  }),
      e
}
i(kb, "_enhanceEventWithInitialFrame");
function hl(e) {
  It && D.log(`Global Handler attached: ${e}`)
}
i(hl, "globalHandlerLog");
function nh() {
  const e = ue();
  return e && e.getOptions() || {
    stackParser: () => [],
    attachStacktrace: !1
  }
}
i(nh, "getOptions");
const Ob = () => ({
  name: "HttpContext",
  preprocessEvent(e) {
    if (!se.navigator && !se.location && !se.document)
      return;
    const t = e.request && e.request.url || se.location && se.location.href
        , {referrer: n} = se.document || {}
        , {userAgent: r} = se.navigator || {}
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
    , Pb = "cause"
    , Nb = 5
    , Tb = "LinkedErrors"
    , xb = i( (e={}) => {
      const t = e.limit || Nb
          , n = e.key || Pb;
      return {
        name: Tb,
        preprocessEvent(r, s, o) {
          const c = o.getOptions();
          b_(Ka, c.stackParser, c.maxValueLength, n, t, r, s)
        }
      }
    }
    , "_linkedErrorsIntegration")
    , rh = xb;
function Cb(e) {
  return [tE(), QS(), yb(), ib(), bb(), rh(), pE(), Ob()]
}
i(Cb, "getDefaultIntegrations");
function Mb(e={}) {
  const t = {
    defaultIntegrations: Cb(),
    release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : se.SENTRY_RELEASE && se.SENTRY_RELEASE.id ? se.SENTRY_RELEASE.id : void 0,
    autoSessionTracking: !0,
    sendClientReports: !0
  };
  return e.defaultIntegrations == null && delete e.defaultIntegrations,
      {
        ...t,
        ...e
      }
}
i(Mb, "applyDefaultOptions");
function Fb() {
  const e = typeof se.window < "u" && se;
  if (!e)
    return !1;
  const t = e.chrome ? "chrome" : "browser"
      , n = e[t]
      , r = n && n.runtime && n.runtime.id
      , s = se.location && se.location.href || ""
      , o = ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"]
      , c = !!r && se === se.top && o.some(f => s.startsWith(`${f}//`))
      , l = typeof e.nw < "u";
  return !!r && !c && !l
}
i(Fb, "shouldShowBrowserExtensionError");
function Db(e={}) {
  const t = Mb(e);
  if (!t.skipBrowserExtensionCheck && Fb()) {
    Sr( () => {
          console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
        }
    );
    return
  }
  It && (Qf() || D.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."));
  const n = {
    ...t,
    stackParser: L_(t.stackParser || nb),
    integrations: DS(t),
    transport: t.transport || q0
  }
      , r = HS(DE, n);
  return t.autoSessionTracking && Lb(),
      r
}
i(Db, "init$1");
function Lb() {
  if (typeof se.document > "u") {
    It && D.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
    return
  }
  Yu({
    ignoreDuration: !0
  }),
      Ku(),
      Hi( ({from: e, to: t}) => {
            e !== void 0 && e !== t && (Yu({
              ignoreDuration: !0
            }),
                Ku())
          }
      )
}
i(Lb, "startSessionTracking");
const Ie = he
    , tc = "sentryReplaySession"
    , Ub = "replay_event"
    , nc = "Unable to send Replay"
    , Bb = 3e5
    , $b = 9e5
    , Hb = 5e3
    , jb = 5500
    , qb = 6e4
    , zb = 5e3
    , Wb = 3
    , pl = 15e4
    , Us = 5e3
    , Vb = 3e3
    , Gb = 300
    , rc = 2e7
    , Yb = 4999
    , Kb = 15e3
    , ml = 36e5;
function ua(e, t) {
  return e ?? t()
}
i(ua, "_nullishCoalesce$1");
function ts(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const s = e[r]
        , o = e[r + 1];
    if (r += 2,
    (s === "optionalAccess" || s === "optionalCall") && n == null)
      return;
    s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...c) => n.call(t, ...c)),
        t = void 0)
  }
  return n
}
i(ts, "_optionalChain$5");
var Be;
(function(e) {
      e[e.Document = 0] = "Document",
          e[e.DocumentType = 1] = "DocumentType",
          e[e.Element = 2] = "Element",
          e[e.Text = 3] = "Text",
          e[e.CDATA = 4] = "CDATA",
          e[e.Comment = 5] = "Comment"
    }
)(Be || (Be = {}));
function Xb(e) {
  return e.nodeType === e.ELEMENT_NODE
}
i(Xb, "isElement$1");
function Yr(e) {
  const t = ts([e, "optionalAccess", n => n.host]);
  return ts([t, "optionalAccess", n => n.shadowRoot]) === e
}
i(Yr, "isShadowRoot");
function Kr(e) {
  return Object.prototype.toString.call(e) === "[object ShadowRoot]"
}
i(Kr, "isNativeShadowDom");
function Qb(e) {
  return e.includes(" background-clip: text;") && !e.includes(" -webkit-background-clip: text;") && (e = e.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")),
      e
}
i(Qb, "fixBrowserCompatibilityIssuesInCSS");
function Jb(e) {
  const {cssText: t} = e;
  if (t.split('"').length < 3)
    return t;
  const n = ["@import", `url(${JSON.stringify(e.href)})`];
  return e.layerName === "" ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`),
  e.supportsText && n.push(`supports(${e.supportsText})`),
  e.media.length && n.push(e.media.mediaText),
  n.join(" ") + ";"
}
i(Jb, "escapeImportStatement");
function gi(e) {
  try {
    const t = e.rules || e.cssRules;
    return t ? Qb(Array.from(t, sh).join("")) : null
  } catch {
    return null
  }
}
i(gi, "stringifyStylesheet");
function sh(e) {
  let t;
  if (ew(e))
    try {
      t = gi(e.styleSheet) || Jb(e)
    } catch {}
  else if (tw(e) && e.selectorText.includes(":"))
    return Zb(e.cssText);
  return t || e.cssText
}
i(sh, "stringifyRule");
function Zb(e) {
  const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return e.replace(t, "$1\\$2")
}
i(Zb, "fixSafariColons");
function ew(e) {
  return "styleSheet"in e
}
i(ew, "isCSSImportRule");
function tw(e) {
  return "selectorText"in e
}
i(tw, "isCSSStyleRule");
class ih {
  static{i(this, "Mirror")
  }constructor() {
    this.idNodeMap = new Map,
        this.nodeMetaMap = new WeakMap
  }
  getId(t) {
    if (!t)
      return -1;
    const n = ts([this, "access", r => r.getMeta, "call", r => r(t), "optionalAccess", r => r.id]);
    return ua(n, () => -1)
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
function nw() {
  return new ih
}
i(nw, "createMirror");
function ji({maskInputOptions: e, tagName: t, type: n}) {
  return t === "OPTION" && (t = "SELECT"),
      !!(e[t.toLowerCase()] || n && e[n] || n === "password" || t === "INPUT" && !n && e.text)
}
i(ji, "shouldMaskInput");
function ns({isMasked: e, element: t, value: n, maskInputFn: r}) {
  let s = n || "";
  return e ? (r && (s = r(s, t)),
      "*".repeat(s.length)) : s
}
i(ns, "maskInputValue");
function mr(e) {
  return e.toLowerCase()
}
i(mr, "toLowerCase");
function la(e) {
  return e.toUpperCase()
}
i(la, "toUpperCase");
const yl = "__rrweb_original__";
function rw(e) {
  const t = e.getContext("2d");
  if (!t)
    return !0;
  const n = 50;
  for (let r = 0; r < e.width; r += n)
    for (let s = 0; s < e.height; s += n) {
      const o = t.getImageData
          , c = yl in o ? o[yl] : o;
      if (new Uint32Array(c.call(t, r, s, Math.min(n, e.width - r), Math.min(n, e.height - s)).data.buffer).some(f => f !== 0))
        return !1
    }
  return !0
}
i(rw, "is2DCanvasBlank");
function sc(e) {
  const t = e.type;
  return e.hasAttribute("data-rr-is-password") ? "password" : t ? mr(t) : null
}
i(sc, "getInputType");
function _i(e, t, n) {
  return t === "INPUT" && (n === "radio" || n === "checkbox") ? e.getAttribute("value") || "" : e.value
}
i(_i, "getInputValue");
function oh(e, t) {
  let n;
  try {
    n = new URL(e,ua(t, () => window.location.href))
  } catch {
    return null
  }
  const r = /\.([0-9a-z]+)(?:$)/i
      , s = n.pathname.match(r);
  return ua(ts([s, "optionalAccess", o => o[1]]), () => null)
}
i(oh, "extractFileExtension");
const gl = {};
function ah(e) {
  const t = gl[e];
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
  return gl[e] = r.bind(window)
}
i(ah, "getImplementation$1");
function fa(...e) {
  return ah("setTimeout")(...e)
}
i(fa, "setTimeout$2");
function ch(...e) {
  return ah("clearTimeout")(...e)
}
i(ch, "clearTimeout$2");
let sw = 1;
const iw = new RegExp("[^a-z0-9-_:]")
    , rs = -2;
function ic() {
  return sw++
}
i(ic, "genId");
function ow(e) {
  if (e instanceof HTMLFormElement)
    return "form";
  const t = mr(e.tagName);
  return iw.test(t) ? "div" : t
}
i(ow, "getValidTagName");
function aw(e) {
  let t = "";
  return e.indexOf("//") > -1 ? t = e.split("/").slice(0, 3).join("/") : t = e.split("/")[0],
      t = t.split("?")[0],
      t
}
i(aw, "extractOrigin");
let Jn, _l;
const cw = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm
    , uw = /^(?:[a-z+]+:)?\/\//i
    , lw = /^www\..*/i
    , fw = /^(data:)([^,]*),(.*)/i;
function vi(e, t) {
  return (e || "").replace(cw, (n, r, s, o, c, l) => {
        const f = s || c || l
            , h = r || o || "";
        if (!f)
          return n;
        if (uw.test(f) || lw.test(f))
          return `url(${h}${f}${h})`;
        if (fw.test(f))
          return `url(${h}${f}${h})`;
        if (f[0] === "/")
          return `url(${h}${aw(t) + f}${h})`;
        const p = t.split("/")
            , y = f.split("/");
        p.pop();
        for (const v of y)
          v !== "." && (v === ".." ? p.pop() : p.push(v));
        return `url(${h}${p.join("/")}${h})`
      }
  )
}
i(vi, "absoluteToStylesheet");
const dw = /^[^ \t\n\r\u000c]+/
    , hw = /^[, \t\n\r\u000c]+/;
function pw(e, t) {
  if (t.trim() === "")
    return t;
  let n = 0;
  function r(o) {
    let c;
    const l = o.exec(t.substring(n));
    return l ? (c = l[0],
        n += c.length,
        c) : ""
  }
  i(r, "collectCharacters");
  const s = [];
  for (; r(hw),
             !(n >= t.length); ) {
    let o = r(dw);
    if (o.slice(-1) === ",")
      o = nr(e, o.substring(0, o.length - 1)),
          s.push(o);
    else {
      let c = "";
      o = nr(e, o);
      let l = !1;
      for (; ; ) {
        const f = t.charAt(n);
        if (f === "") {
          s.push((o + c).trim());
          break
        } else if (l)
          f === ")" && (l = !1);
        else if (f === ",") {
          n += 1,
              s.push((o + c).trim());
          break
        } else
          f === "(" && (l = !0);
        c += f,
            n += 1
      }
    }
  }
  return s.join(", ")
}
i(pw, "getAbsoluteSrcsetString");
const vl = new WeakMap;
function nr(e, t) {
  return !t || t.trim() === "" ? t : qi(e, t)
}
i(nr, "absoluteToDoc");
function mw(e) {
  return !!(e.tagName === "svg" || e.ownerSVGElement)
}
i(mw, "isSVGElement");
function qi(e, t) {
  let n = vl.get(e);
  if (n || (n = e.createElement("a"),
      vl.set(e, n)),
      !t)
    t = "";
  else if (t.startsWith("blob:") || t.startsWith("data:"))
    return t;
  return n.setAttribute("href", t),
      n.href
}
i(qi, "getHref");
function uh(e, t, n, r, s, o) {
  return r && (n === "src" || n === "href" && !(t === "use" && r[0] === "#") || n === "xlink:href" && r[0] !== "#" || n === "background" && (t === "table" || t === "td" || t === "th") ? nr(e, r) : n === "srcset" ? pw(e, r) : n === "style" ? vi(r, qi(e)) : t === "object" && n === "data" ? nr(e, r) : typeof o == "function" ? o(n, r, s) : r)
}
i(uh, "transformAttribute");
function lh(e, t, n) {
  return (e === "video" || e === "audio") && t === "autoplay"
}
i(lh, "ignoreAttribute");
function yw(e, t, n, r) {
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
i(yw, "_isBlockedElement");
function gw(e, t) {
  for (let n = e.classList.length; n--; ) {
    const r = e.classList[n];
    if (t.test(r))
      return !0
  }
  return !1
}
i(gw, "elementClassMatchesRegex");
function Tn(e, t, n=1 / 0, r=0) {
  return !e || e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : Tn(e.parentNode, t, n, r + 1)
}
i(Tn, "distanceToMatch");
function rr(e, t) {
  return n => {
    const r = n;
    if (r === null)
      return !1;
    try {
      if (e) {
        if (typeof e == "string") {
          if (r.matches(`.${e}`))
            return !0
        } else if (gw(r, e))
          return !0
      }
      return !!(t && r.matches(t))
    } catch {
      return !1
    }
  }
}
i(rr, "createMatchPredicate");
function yr(e, t, n, r, s, o) {
  try {
    const c = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
    if (c === null)
      return !1;
    if (c.tagName === "INPUT") {
      const h = c.getAttribute("autocomplete");
      if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(h))
        return !0
    }
    let l = -1
        , f = -1;
    if (o) {
      if (f = Tn(c, rr(r, s)),
      f < 0)
        return !0;
      l = Tn(c, rr(t, n), f >= 0 ? f : 1 / 0)
    } else {
      if (l = Tn(c, rr(t, n)),
      l < 0)
        return !1;
      f = Tn(c, rr(r, s), l >= 0 ? l : 1 / 0)
    }
    return l >= 0 ? f >= 0 ? l <= f : !0 : f >= 0 ? !1 : !!o
  } catch {}
  return !!o
}
i(yr, "needMaskingText");
function _w(e, t, n) {
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
    const l = fa( () => {
          s || (t(),
              s = !0)
        }
        , n);
    e.addEventListener("load", () => {
          ch(l),
              s = !0,
              t()
        }
    );
    return
  }
  const c = "about:blank";
  if (r.location.href !== c || e.src === c || e.src === "")
    return fa(t, 0),
        e.addEventListener("load", t);
  e.addEventListener("load", t)
}
i(_w, "onceIframeLoaded");
function vw(e, t, n) {
  let r = !1, s;
  try {
    s = e.sheet
  } catch {
    return
  }
  if (s)
    return;
  const o = fa( () => {
        r || (t(),
            r = !0)
      }
      , n);
  e.addEventListener("load", () => {
        ch(o),
            r = !0,
            t()
      }
  )
}
i(vw, "onceStylesheetLoaded");
function Sw(e, t) {
  const {doc: n, mirror: r, blockClass: s, blockSelector: o, unblockSelector: c, maskAllText: l, maskAttributeFn: f, maskTextClass: h, unmaskTextClass: p, maskTextSelector: y, unmaskTextSelector: v, inlineStylesheet: b, maskInputOptions: S={}, maskTextFn: R, maskInputFn: k, dataURLOptions: O={}, inlineImages: L, recordCanvas: U, keepIframeSrcFn: V, newlyAddedElement: q=!1} = t
      , x = Ew(n, r);
  switch (e.nodeType) {
    case e.DOCUMENT_NODE:
      return e.compatMode !== "CSS1Compat" ? {
        type: Be.Document,
        childNodes: [],
        compatMode: e.compatMode
      } : {
        type: Be.Document,
        childNodes: []
      };
    case e.DOCUMENT_TYPE_NODE:
      return {
        type: Be.DocumentType,
        name: e.name,
        publicId: e.publicId,
        systemId: e.systemId,
        rootId: x
      };
    case e.ELEMENT_NODE:
      return ww(e, {
        doc: n,
        blockClass: s,
        blockSelector: o,
        unblockSelector: c,
        inlineStylesheet: b,
        maskAttributeFn: f,
        maskInputOptions: S,
        maskInputFn: k,
        dataURLOptions: O,
        inlineImages: L,
        recordCanvas: U,
        keepIframeSrcFn: V,
        newlyAddedElement: q,
        rootId: x,
        maskAllText: l,
        maskTextClass: h,
        unmaskTextClass: p,
        maskTextSelector: y,
        unmaskTextSelector: v
      });
    case e.TEXT_NODE:
      return bw(e, {
        doc: n,
        maskAllText: l,
        maskTextClass: h,
        unmaskTextClass: p,
        maskTextSelector: y,
        unmaskTextSelector: v,
        maskTextFn: R,
        maskInputOptions: S,
        maskInputFn: k,
        rootId: x
      });
    case e.CDATA_SECTION_NODE:
      return {
        type: Be.CDATA,
        textContent: "",
        rootId: x
      };
    case e.COMMENT_NODE:
      return {
        type: Be.Comment,
        textContent: e.textContent || "",
        rootId: x
      };
    default:
      return !1
  }
}
i(Sw, "serializeNode");
function Ew(e, t) {
  if (!t.hasNode(e))
    return;
  const n = t.getId(e);
  return n === 1 ? void 0 : n
}
i(Ew, "getRootId");
function bw(e, t) {
  const {maskAllText: n, maskTextClass: r, unmaskTextClass: s, maskTextSelector: o, unmaskTextSelector: c, maskTextFn: l, maskInputOptions: f, maskInputFn: h, rootId: p} = t
      , y = e.parentNode && e.parentNode.tagName;
  let v = e.textContent;
  const b = y === "STYLE" ? !0 : void 0
      , S = y === "SCRIPT" ? !0 : void 0
      , R = y === "TEXTAREA" ? !0 : void 0;
  if (b && v) {
    try {
      e.nextSibling || e.previousSibling || ts([e, "access", O => O.parentNode, "access", O => O.sheet, "optionalAccess", O => O.cssRules]) && (v = gi(e.parentNode.sheet))
    } catch (O) {
      `${O}`
    }
    v = vi(v, qi(t.doc))
  }
  S && (v = "SCRIPT_PLACEHOLDER");
  const k = yr(e, r, o, s, c, n);
  if (!b && !S && !R && v && k && (v = l ? l(v, e.parentElement) : v.replace(/[\S]/g, "*")),
  R && v && (f.textarea || k) && (v = h ? h(v, e.parentNode) : v.replace(/[\S]/g, "*")),
  y === "OPTION" && v) {
    const O = ji({
      type: null,
      tagName: y,
      maskInputOptions: f
    });
    v = ns({
      isMasked: yr(e, r, o, s, c, O),
      element: e,
      value: v,
      maskInputFn: h
    })
  }
  return {
    type: Be.Text,
    textContent: v || "",
    isStyle: b,
    rootId: p
  }
}
i(bw, "serializeTextNode");
function ww(e, t) {
  const {doc: n, blockClass: r, blockSelector: s, unblockSelector: o, inlineStylesheet: c, maskInputOptions: l={}, maskAttributeFn: f, maskInputFn: h, dataURLOptions: p={}, inlineImages: y, recordCanvas: v, keepIframeSrcFn: b, newlyAddedElement: S=!1, rootId: R, maskAllText: k, maskTextClass: O, unmaskTextClass: L, maskTextSelector: U, unmaskTextSelector: V} = t
      , q = yw(e, r, s, o)
      , x = ow(e);
  let N = {};
  const F = e.attributes.length;
  for (let C = 0; C < F; C++) {
    const z = e.attributes[C];
    z.name && !lh(x, z.name, z.value) && (N[z.name] = uh(n, x, mr(z.name), z.value, e, f))
  }
  if (x === "link" && c) {
    const C = Array.from(n.styleSheets).find(X => X.href === e.href);
    let z = null;
    C && (z = gi(C)),
    z && (delete N.rel,
        delete N.href,
        N._cssText = vi(z, C.href))
  }
  if (x === "style" && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
    const C = gi(e.sheet);
    C && (N._cssText = vi(C, qi(n)))
  }
  if (x === "input" || x === "textarea" || x === "select" || x === "option") {
    const C = e
        , z = sc(C)
        , X = _i(C, la(x), z)
        , M = C.checked;
    if (z !== "submit" && z !== "button" && X) {
      const Y = yr(C, O, U, L, V, ji({
        type: z,
        tagName: la(x),
        maskInputOptions: l
      }));
      N.value = ns({
        isMasked: Y,
        element: C,
        value: X,
        maskInputFn: h
      })
    }
    M && (N.checked = M)
  }
  if (x === "option" && (e.selected && !l.select ? N.selected = !0 : delete N.selected),
  x === "canvas" && v) {
    if (e.__context === "2d")
      rw(e) || (N.rr_dataURL = e.toDataURL(p.type, p.quality));
    else if (!("__context"in e)) {
      const C = e.toDataURL(p.type, p.quality)
          , z = n.createElement("canvas");
      z.width = e.width,
          z.height = e.height;
      const X = z.toDataURL(p.type, p.quality);
      C !== X && (N.rr_dataURL = C)
    }
  }
  if (x === "img" && y) {
    Jn || (Jn = n.createElement("canvas"),
        _l = Jn.getContext("2d"));
    const C = e
        , z = C.currentSrc || C.getAttribute("src") || "<unknown-src>"
        , X = C.crossOrigin
        , M = i( () => {
          C.removeEventListener("load", M);
          try {
            Jn.width = C.naturalWidth,
                Jn.height = C.naturalHeight,
                _l.drawImage(C, 0, 0),
                N.rr_dataURL = Jn.toDataURL(p.type, p.quality)
          } catch (Y) {
            if (C.crossOrigin !== "anonymous") {
              C.crossOrigin = "anonymous",
                  C.complete && C.naturalWidth !== 0 ? M() : C.addEventListener("load", M);
              return
            } else
              `${z}${Y}`
          }
          C.crossOrigin === "anonymous" && (X ? N.crossOrigin = X : C.removeAttribute("crossorigin"))
        }
        , "recordInlineImage");
    C.complete && C.naturalWidth !== 0 ? M() : C.addEventListener("load", M)
  }
  if ((x === "audio" || x === "video") && (N.rr_mediaState = e.paused ? "paused" : "played",
      N.rr_mediaCurrentTime = e.currentTime),
  S || (e.scrollLeft && (N.rr_scrollLeft = e.scrollLeft),
  e.scrollTop && (N.rr_scrollTop = e.scrollTop)),
      q) {
    const {width: C, height: z} = e.getBoundingClientRect();
    N = {
      class: N.class,
      rr_width: `${C}px`,
      rr_height: `${z}px`
    }
  }
  x === "iframe" && !b(N.src) && (!q && !e.contentDocument && (N.rr_src = N.src),
      delete N.src);
  let H;
  try {
    customElements.get(x) && (H = !0)
  } catch {}
  return {
    type: Be.Element,
    tagName: x,
    attributes: N,
    childNodes: [],
    isSVG: mw(e) || void 0,
    needBlock: q,
    rootId: R,
    isCustom: H
  }
}
i(ww, "serializeElementNode");
function we(e) {
  return e == null ? "" : e.toLowerCase()
}
i(we, "lowerIfExists");
function Iw(e, t) {
  if (t.comment && e.type === Be.Comment)
    return !0;
  if (e.type === Be.Element) {
    if (t.script && (e.tagName === "script" || e.tagName === "link" && (e.attributes.rel === "preload" || e.attributes.rel === "modulepreload") && e.attributes.as === "script" || e.tagName === "link" && e.attributes.rel === "prefetch" && typeof e.attributes.href == "string" && oh(e.attributes.href) === "js"))
      return !0;
    if (t.headFavicon && (e.tagName === "link" && e.attributes.rel === "shortcut icon" || e.tagName === "meta" && (we(e.attributes.name).match(/^msapplication-tile(image|color)$/) || we(e.attributes.name) === "application-name" || we(e.attributes.rel) === "icon" || we(e.attributes.rel) === "apple-touch-icon" || we(e.attributes.rel) === "shortcut icon")))
      return !0;
    if (e.tagName === "meta") {
      if (t.headMetaDescKeywords && we(e.attributes.name).match(/^description|keywords$/))
        return !0;
      if (t.headMetaSocial && (we(e.attributes.property).match(/^(og|twitter|fb):/) || we(e.attributes.name).match(/^(og|twitter):/) || we(e.attributes.name) === "pinterest"))
        return !0;
      if (t.headMetaRobots && (we(e.attributes.name) === "robots" || we(e.attributes.name) === "googlebot" || we(e.attributes.name) === "bingbot"))
        return !0;
      if (t.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0)
        return !0;
      if (t.headMetaAuthorship && (we(e.attributes.name) === "author" || we(e.attributes.name) === "generator" || we(e.attributes.name) === "framework" || we(e.attributes.name) === "publisher" || we(e.attributes.name) === "progid" || we(e.attributes.property).match(/^article:/) || we(e.attributes.property).match(/^product:/)))
        return !0;
      if (t.headMetaVerification && (we(e.attributes.name) === "google-site-verification" || we(e.attributes.name) === "yandex-verification" || we(e.attributes.name) === "csrf-token" || we(e.attributes.name) === "p:domain_verify" || we(e.attributes.name) === "verify-v1" || we(e.attributes.name) === "verification" || we(e.attributes.name) === "shopify-checkout-api-token"))
        return !0
    }
  }
  return !1
}
i(Iw, "slimDOMExcluded");
function sr(e, t) {
  const {doc: n, mirror: r, blockClass: s, blockSelector: o, unblockSelector: c, maskAllText: l, maskTextClass: f, unmaskTextClass: h, maskTextSelector: p, unmaskTextSelector: y, skipChild: v=!1, inlineStylesheet: b=!0, maskInputOptions: S={}, maskAttributeFn: R, maskTextFn: k, maskInputFn: O, slimDOMOptions: L, dataURLOptions: U={}, inlineImages: V=!1, recordCanvas: q=!1, onSerialize: x, onIframeLoad: N, iframeLoadTimeout: F=5e3, onStylesheetLoad: H, stylesheetLoadTimeout: C=5e3, keepIframeSrcFn: z=i( () => !1, "keepIframeSrcFn"), newlyAddedElement: X=!1} = t;
  let {preserveWhiteSpace: M=!0} = t;
  const Y = Sw(e, {
    doc: n,
    mirror: r,
    blockClass: s,
    blockSelector: o,
    maskAllText: l,
    unblockSelector: c,
    maskTextClass: f,
    unmaskTextClass: h,
    maskTextSelector: p,
    unmaskTextSelector: y,
    inlineStylesheet: b,
    maskInputOptions: S,
    maskAttributeFn: R,
    maskTextFn: k,
    maskInputFn: O,
    dataURLOptions: U,
    inlineImages: V,
    recordCanvas: q,
    keepIframeSrcFn: z,
    newlyAddedElement: X
  });
  if (!Y)
    return null;
  let Fe;
  r.hasNode(e) ? Fe = r.getId(e) : Iw(Y, L) || !M && Y.type === Be.Text && !Y.isStyle && !Y.textContent.replace(/^\s+|\s+$/gm, "").length ? Fe = rs : Fe = ic();
  const re = Object.assign(Y, {
    id: Fe
  });
  if (r.add(e, re),
  Fe === rs)
    return null;
  x && x(e);
  let xe = !v;
  if (re.type === Be.Element) {
    xe = xe && !re.needBlock,
        delete re.needBlock;
    const fe = e.shadowRoot;
    fe && Kr(fe) && (re.isShadowHost = !0)
  }
  if ((re.type === Be.Document || re.type === Be.Element) && xe) {
    L.headWhitespace && re.type === Be.Element && re.tagName === "head" && (M = !1);
    const fe = {
      doc: n,
      mirror: r,
      blockClass: s,
      blockSelector: o,
      maskAllText: l,
      unblockSelector: c,
      maskTextClass: f,
      unmaskTextClass: h,
      maskTextSelector: p,
      unmaskTextSelector: y,
      skipChild: v,
      inlineStylesheet: b,
      maskInputOptions: S,
      maskAttributeFn: R,
      maskTextFn: k,
      maskInputFn: O,
      slimDOMOptions: L,
      dataURLOptions: U,
      inlineImages: V,
      recordCanvas: q,
      preserveWhiteSpace: M,
      onSerialize: x,
      onIframeLoad: N,
      iframeLoadTimeout: F,
      onStylesheetLoad: H,
      stylesheetLoadTimeout: C,
      keepIframeSrcFn: z
    };
    for (const qe of Array.from(e.childNodes)) {
      const dt = sr(qe, fe);
      dt && re.childNodes.push(dt)
    }
    if (Xb(e) && e.shadowRoot)
      for (const qe of Array.from(e.shadowRoot.childNodes)) {
        const dt = sr(qe, fe);
        dt && (Kr(e.shadowRoot) && (dt.isShadow = !0),
            re.childNodes.push(dt))
      }
  }
  return e.parentNode && Yr(e.parentNode) && Kr(e.parentNode) && (re.isShadow = !0),
  re.type === Be.Element && re.tagName === "iframe" && _w(e, () => {
        const fe = e.contentDocument;
        if (fe && N) {
          const qe = sr(fe, {
            doc: fe,
            mirror: r,
            blockClass: s,
            blockSelector: o,
            unblockSelector: c,
            maskAllText: l,
            maskTextClass: f,
            unmaskTextClass: h,
            maskTextSelector: p,
            unmaskTextSelector: y,
            skipChild: !1,
            inlineStylesheet: b,
            maskInputOptions: S,
            maskAttributeFn: R,
            maskTextFn: k,
            maskInputFn: O,
            slimDOMOptions: L,
            dataURLOptions: U,
            inlineImages: V,
            recordCanvas: q,
            preserveWhiteSpace: M,
            onSerialize: x,
            onIframeLoad: N,
            iframeLoadTimeout: F,
            onStylesheetLoad: H,
            stylesheetLoadTimeout: C,
            keepIframeSrcFn: z
          });
          qe && N(e, qe)
        }
      }
      , F),
  re.type === Be.Element && re.tagName === "link" && typeof re.attributes.rel == "string" && (re.attributes.rel === "stylesheet" || re.attributes.rel === "preload" && typeof re.attributes.href == "string" && oh(re.attributes.href) === "css") && vw(e, () => {
        if (H) {
          const fe = sr(e, {
            doc: n,
            mirror: r,
            blockClass: s,
            blockSelector: o,
            unblockSelector: c,
            maskAllText: l,
            maskTextClass: f,
            unmaskTextClass: h,
            maskTextSelector: p,
            unmaskTextSelector: y,
            skipChild: !1,
            inlineStylesheet: b,
            maskInputOptions: S,
            maskAttributeFn: R,
            maskTextFn: k,
            maskInputFn: O,
            slimDOMOptions: L,
            dataURLOptions: U,
            inlineImages: V,
            recordCanvas: q,
            preserveWhiteSpace: M,
            onSerialize: x,
            onIframeLoad: N,
            iframeLoadTimeout: F,
            onStylesheetLoad: H,
            stylesheetLoadTimeout: C,
            keepIframeSrcFn: z
          });
          fe && H(e, fe)
        }
      }
      , C),
      re
}
i(sr, "serializeNodeWithId");
function Rw(e, t) {
  const {mirror: n=new ih, blockClass: r="rr-block", blockSelector: s=null, unblockSelector: o=null, maskAllText: c=!1, maskTextClass: l="rr-mask", unmaskTextClass: f=null, maskTextSelector: h=null, unmaskTextSelector: p=null, inlineStylesheet: y=!0, inlineImages: v=!1, recordCanvas: b=!1, maskAllInputs: S=!1, maskAttributeFn: R, maskTextFn: k, maskInputFn: O, slimDOM: L=!1, dataURLOptions: U, preserveWhiteSpace: V, onSerialize: q, onIframeLoad: x, iframeLoadTimeout: N, onStylesheetLoad: F, stylesheetLoadTimeout: H, keepIframeSrcFn: C=i( () => !1, "keepIframeSrcFn")} = t || {};
  return sr(e, {
    doc: e,
    mirror: n,
    blockClass: r,
    blockSelector: s,
    unblockSelector: o,
    maskAllText: c,
    maskTextClass: l,
    unmaskTextClass: f,
    maskTextSelector: h,
    unmaskTextSelector: p,
    skipChild: !1,
    inlineStylesheet: y,
    maskInputOptions: S === !0 ? {
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
    } : S === !1 ? {} : S,
    maskAttributeFn: R,
    maskTextFn: k,
    maskInputFn: O,
    slimDOMOptions: L === !0 || L === "all" ? {
      script: !0,
      comment: !0,
      headFavicon: !0,
      headWhitespace: !0,
      headMetaDescKeywords: L === "all",
      headMetaSocial: !0,
      headMetaRobots: !0,
      headMetaHttpEquiv: !0,
      headMetaAuthorship: !0,
      headMetaVerification: !0
    } : L === !1 ? {} : L,
    dataURLOptions: U,
    inlineImages: v,
    recordCanvas: b,
    preserveWhiteSpace: V,
    onSerialize: q,
    onIframeLoad: x,
    iframeLoadTimeout: N,
    onStylesheetLoad: F,
    stylesheetLoadTimeout: H,
    keepIframeSrcFn: C,
    newlyAddedElement: !1
  })
}
i(Rw, "snapshot");
function cn(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const s = e[r]
        , o = e[r + 1];
    if (r += 2,
    (s === "optionalAccess" || s === "optionalCall") && n == null)
      return;
    s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...c) => n.call(t, ...c)),
        t = void 0)
  }
  return n
}
i(cn, "_optionalChain$4");
function Qe(e, t, n=document) {
  const r = {
    capture: !0,
    passive: !0
  };
  return n.addEventListener(e, t, r),
      () => n.removeEventListener(e, t, r)
}
i(Qe, "on");
const tr = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
let Sl = {
  map: {},
  getId() {
    return console.error(tr),
        -1
  },
  getNode() {
    return console.error(tr),
        null
  },
  removeNodeFromMap() {
    console.error(tr)
  },
  has() {
    return console.error(tr),
        !1
  },
  reset() {
    console.error(tr)
  }
};
typeof window < "u" && window.Proxy && window.Reflect && (Sl = new Proxy(Sl,{
  get(e, t, n) {
    return t === "map" && console.error(tr),
        Reflect.get(e, t, n)
  }
}));
function ss(e, t, n={}) {
  let r = null
      , s = 0;
  return function(...o) {
    const c = Date.now();
    !s && n.leading === !1 && (s = c);
    const l = t - (c - s)
        , f = this;
    l <= 0 || l > t ? (r && (xw(r),
        r = null),
        s = c,
        e.apply(f, o)) : !r && n.trailing !== !1 && (r = zi( () => {
          s = n.leading === !1 ? 0 : Date.now(),
              r = null,
              e.apply(f, o)
        }
        , l))
  }
}
i(ss, "throttle$1");
function fh(e, t, n, r, s=window) {
  const o = s.Object.getOwnPropertyDescriptor(e, t);
  return s.Object.defineProperty(e, t, r ? n : {
    set(c) {
      zi( () => {
            n.set.call(this, c)
          }
          , 0),
      o && o.set && o.set.call(this, c)
    }
  }),
      () => fh(e, t, o || {}, !0)
}
i(fh, "hookSetter");
function oc(e, t, n) {
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
i(oc, "patch");
let Si = Date.now;
/[1-9][0-9]{12}/.test(Date.now().toString()) || (Si = i( () => new Date().getTime(), "nowTimestamp"));
function dh(e) {
  const t = e.document;
  return {
    left: t.scrollingElement ? t.scrollingElement.scrollLeft : e.pageXOffset !== void 0 ? e.pageXOffset : cn([t, "optionalAccess", n => n.documentElement, "access", n => n.scrollLeft]) || cn([t, "optionalAccess", n => n.body, "optionalAccess", n => n.parentElement, "optionalAccess", n => n.scrollLeft]) || cn([t, "optionalAccess", n => n.body, "optionalAccess", n => n.scrollLeft]) || 0,
    top: t.scrollingElement ? t.scrollingElement.scrollTop : e.pageYOffset !== void 0 ? e.pageYOffset : cn([t, "optionalAccess", n => n.documentElement, "access", n => n.scrollTop]) || cn([t, "optionalAccess", n => n.body, "optionalAccess", n => n.parentElement, "optionalAccess", n => n.scrollTop]) || cn([t, "optionalAccess", n => n.body, "optionalAccess", n => n.scrollTop]) || 0
  }
}
i(dh, "getWindowScroll");
function hh() {
  return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
}
i(hh, "getWindowHeight");
function ph() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
}
i(ph, "getWindowWidth");
function mh(e) {
  return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null
}
i(mh, "closestElementOfNode");
function ct(e, t, n, r, s) {
  if (!e)
    return !1;
  const o = mh(e);
  if (!o)
    return !1;
  const c = rr(t, n);
  if (!s) {
    const h = r && o.matches(r);
    return c(o) && !h
  }
  const l = Tn(o, c);
  let f = -1;
  return l < 0 ? !1 : (r && (f = Tn(o, rr(null, r))),
      l > -1 && f < 0 ? !0 : l < f)
}
i(ct, "isBlocked");
function Aw(e, t) {
  return t.getId(e) !== -1
}
i(Aw, "isSerialized");
function Ro(e, t) {
  return t.getId(e) === rs
}
i(Ro, "isIgnored");
function yh(e, t) {
  if (Yr(e))
    return !1;
  const n = t.getId(e);
  return t.has(n) ? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE ? !1 : e.parentNode ? yh(e.parentNode, t) : !0 : !0
}
i(yh, "isAncestorRemoved");
function da(e) {
  return !!e.changedTouches
}
i(da, "legacy_isTouchEvent");
function kw(e=window) {
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
i(kw, "polyfill");
function gh(e, t) {
  return !!(e.nodeName === "IFRAME" && t.getMeta(e))
}
i(gh, "isSerializedIframe");
function _h(e, t) {
  return !!(e.nodeName === "LINK" && e.nodeType === e.ELEMENT_NODE && e.getAttribute && e.getAttribute("rel") === "stylesheet" && t.getMeta(e))
}
i(_h, "isSerializedStylesheet");
function ha(e) {
  return !!cn([e, "optionalAccess", t => t.shadowRoot])
}
i(ha, "hasShadowRoot");
class Ow {
  static{i(this, "StyleSheetMirror")
  }constructor() {
    this.id = 1,
        this.styleIDMap = new WeakMap,
        this.idStyleMap = new Map
  }
  getId(t) {
    return wv(this.styleIDMap.get(t), () => -1)
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
function vh(e) {
  let t = null;
  return cn([e, "access", n => n.getRootNode, "optionalCall", n => n(), "optionalAccess", n => n.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host),
      t
}
i(vh, "getShadowHost");
function Pw(e) {
  let t = e, n;
  for (; n = vh(t); )
    t = n;
  return t
}
i(Pw, "getRootShadowHost");
function Nw(e) {
  const t = e.ownerDocument;
  if (!t)
    return !1;
  const n = Pw(e);
  return t.contains(n)
}
i(Nw, "shadowHostInDom");
function Sh(e) {
  const t = e.ownerDocument;
  return t ? t.contains(e) || Nw(e) : !1
}
i(Sh, "inDom");
const El = {};
function ac(e) {
  const t = El[e];
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
  return El[e] = r.bind(window)
}
i(ac, "getImplementation");
function Tw(...e) {
  return ac("requestAnimationFrame")(...e)
}
i(Tw, "onRequestAnimationFrame");
function zi(...e) {
  return ac("setTimeout")(...e)
}
i(zi, "setTimeout$1");
function xw(...e) {
  return ac("clearTimeout")(...e)
}
i(xw, "clearTimeout$1");
var ae = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded",
    e[e.Load = 1] = "Load",
    e[e.FullSnapshot = 2] = "FullSnapshot",
    e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot",
    e[e.Meta = 4] = "Meta",
    e[e.Custom = 5] = "Custom",
    e[e.Plugin = 6] = "Plugin",
    e))(ae || {})
    , ne = (e => (e[e.Mutation = 0] = "Mutation",
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
    e))(ne || {})
    , Ke = (e => (e[e.MouseUp = 0] = "MouseUp",
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
    e))(Ke || {})
    , jt = (e => (e[e.Mouse = 0] = "Mouse",
    e[e.Pen = 1] = "Pen",
    e[e.Touch = 2] = "Touch",
    e))(jt || {});
function Cw(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const s = e[r]
        , o = e[r + 1];
    if (r += 2,
    (s === "optionalAccess" || s === "optionalCall") && n == null)
      return;
    s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...c) => n.call(t, ...c)),
        t = void 0)
  }
  return n
}
i(Cw, "_optionalChain$3");
function bl(e) {
  return "__ln"in e
}
i(bl, "isNodeInLinkedList");
class Mw {
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
      n = Cw([n, "optionalAccess", s => s.next]) || null;
    return n
  }
  addNode(t) {
    const n = {
      value: t,
      previous: null,
      next: null
    };
    if (t.__ln = n,
    t.previousSibling && bl(t.previousSibling)) {
      const r = t.previousSibling.__ln.next;
      n.next = r,
          n.previous = t.previousSibling.__ln,
          t.previousSibling.__ln.next = n,
      r && (r.previous = n)
    } else if (t.nextSibling && bl(t.nextSibling) && t.nextSibling.__ln.previous) {
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
const wl = i( (e, t) => `${e}@${t}`, "moveKey");
class Fw {
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
              , r = new Mw
              , s = i(f => {
                let h = f
                    , p = rs;
                for (; p === rs; )
                  h = h && h.nextSibling,
                      p = h && this.mirror.getId(h);
                return p
              }
              , "getNextId")
              , o = i(f => {
                if (!f.parentNode || !Sh(f))
                  return;
                const h = Yr(f.parentNode) ? this.mirror.getId(vh(f)) : this.mirror.getId(f.parentNode)
                    , p = s(f);
                if (h === -1 || p === -1)
                  return r.addNode(f);
                const y = sr(f, {
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
                  onSerialize: v => {
                    gh(v, this.mirror) && !ct(v, this.blockClass, this.blockSelector, this.unblockSelector, !1) && this.iframeManager.addIframe(v),
                    _h(v, this.mirror) && this.stylesheetManager.trackLinkElement(v),
                    ha(f) && this.shadowDomManager.addShadowRoot(f.shadowRoot, this.doc)
                  }
                  ,
                  onIframeLoad: (v, b) => {
                    ct(v, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (this.iframeManager.attachIframe(v, b),
                    v.contentWindow && this.canvasManager.addWindow(v.contentWindow),
                        this.shadowDomManager.observeAttachShadow(v))
                  }
                  ,
                  onStylesheetLoad: (v, b) => {
                    this.stylesheetManager.attachLinkElement(v, b)
                  }
                });
                y && (t.push({
                  parentId: h,
                  nextId: p,
                  node: y
                }),
                    n.add(y.id))
              }
              , "pushAdd");
          for (; this.mapRemoves.length; )
            this.mirror.removeNodeFromMap(this.mapRemoves.shift());
          for (const f of this.movedSet)
            Il(this.removes, f, this.mirror) && !this.movedSet.has(f.parentNode) || o(f);
          for (const f of this.addedSet)
            !Rl(this.droppedSet, f) && !Il(this.removes, f, this.mirror) || Rl(this.movedSet, f) ? o(f) : this.droppedSet.add(f);
          let c = null;
          for (; r.length; ) {
            let f = null;
            if (c) {
              const h = this.mirror.getId(c.value.parentNode)
                  , p = s(c.value);
              h !== -1 && p !== -1 && (f = c)
            }
            if (!f) {
              let h = r.tail;
              for (; h; ) {
                const p = h;
                if (h = h.previous,
                    p) {
                  const y = this.mirror.getId(p.value.parentNode);
                  if (s(p.value) === -1)
                    continue;
                  if (y !== -1) {
                    f = p;
                    break
                  } else {
                    const b = p.value;
                    if (b.parentNode && b.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                      const S = b.parentNode.host;
                      if (this.mirror.getId(S) !== -1) {
                        f = p;
                        break
                      }
                    }
                  }
                }
              }
            }
            if (!f) {
              for (; r.head; )
                r.removeNode(r.head.value);
              break
            }
            c = f.previous,
                r.removeNode(f.value),
                o(f.value)
          }
          const l = {
            texts: this.texts.map(f => ({
              id: this.mirror.getId(f.node),
              value: f.value
            })).filter(f => !n.has(f.id)).filter(f => this.mirror.has(f.id)),
            attributes: this.attributes.map(f => {
                  const {attributes: h} = f;
                  if (typeof h.style == "string") {
                    const p = JSON.stringify(f.styleDiff)
                        , y = JSON.stringify(f._unchangedStyles);
                    p.length < h.style.length && (p + y).split("var(").length === h.style.split("var(").length && (h.style = f.styleDiff)
                  }
                  return {
                    id: this.mirror.getId(f.node),
                    attributes: h
                  }
                }
            ).filter(f => !n.has(f.id)).filter(f => this.mirror.has(f.id)),
            removes: this.removes,
            adds: t
          };
          !l.texts.length && !l.attributes.length && !l.removes.length && !l.adds.length || (this.texts = [],
              this.attributes = [],
              this.attributeMap = new WeakMap,
              this.removes = [],
              this.addedSet = new Set,
              this.movedSet = new Set,
              this.droppedSet = new Set,
              this.movedMap = {},
              this.mutationCb(l))
        }
        ,
        this.processMutation = t => {
          if (!Ro(t.target, this.mirror))
            switch (t.type) {
              case "characterData":
              {
                const n = t.target.textContent;
                !ct(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) && n !== t.oldValue && this.texts.push({
                  value: yr(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && n ? this.maskTextFn ? this.maskTextFn(n, mh(t.target)) : n.replace(/[\S]/g, "*") : n,
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
                  const c = sc(n)
                      , l = n.tagName;
                  s = _i(n, l, c);
                  const f = ji({
                    maskInputOptions: this.maskInputOptions,
                    tagName: l,
                    type: c
                  })
                      , h = yr(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, f);
                  s = ns({
                    isMasked: h,
                    element: n,
                    value: s,
                    maskInputFn: this.maskInputFn
                  })
                }
                if (ct(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || s === t.oldValue)
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
                !lh(n.tagName, r) && (o.attributes[r] = uh(this.doc, mr(n.tagName), mr(r), s, n, this.maskAttributeFn),
                r === "style")) {
                  if (!this.unattachedDoc)
                    try {
                      this.unattachedDoc = document.implementation.createHTMLDocument()
                    } catch {
                      this.unattachedDoc = this.doc
                    }
                  const c = this.unattachedDoc.createElement("span");
                  t.oldValue && c.setAttribute("style", t.oldValue);
                  for (const l of Array.from(n.style)) {
                    const f = n.style.getPropertyValue(l)
                        , h = n.style.getPropertyPriority(l);
                    f !== c.style.getPropertyValue(l) || h !== c.style.getPropertyPriority(l) ? h === "" ? o.styleDiff[l] = f : o.styleDiff[l] = [f, h] : o._unchangedStyles[l] = [f, h]
                  }
                  for (const l of Array.from(c.style))
                    n.style.getPropertyValue(l) === "" && (o.styleDiff[l] = !1)
                }
                break
              }
              case "childList":
              {
                if (ct(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !0))
                  return;
                t.addedNodes.forEach(n => this.genAdds(n, t.target)),
                    t.removedNodes.forEach(n => {
                          const r = this.mirror.getId(n)
                              , s = Yr(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                          ct(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || Ro(n, this.mirror) || !Aw(n, this.mirror) || (this.addedSet.has(n) ? (pa(this.addedSet, n),
                              this.droppedSet.add(n)) : this.addedSet.has(t.target) && r === -1 || yh(t.target, this.mirror) || (this.movedSet.has(n) && this.movedMap[wl(r, s)] ? pa(this.movedSet, n) : this.removes.push({
                            parentId: s,
                            id: r,
                            isShadow: Yr(t.target) && Kr(t.target) ? !0 : void 0
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
              if (Ro(t, this.mirror))
                return;
              this.movedSet.add(t);
              let r = null;
              n && this.mirror.hasNode(n) && (r = this.mirror.getId(n)),
              r && r !== -1 && (this.movedMap[wl(this.mirror.getId(t), r)] = !0)
            } else
              this.addedSet.add(t),
                  this.droppedSet.delete(t);
            ct(t, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (t.childNodes.forEach(r => this.genAdds(r)),
            ha(t) && t.shadowRoot.childNodes.forEach(r => {
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
function pa(e, t) {
  e.delete(t),
      t.childNodes.forEach(n => pa(e, n))
}
i(pa, "deepDelete");
function Il(e, t, n) {
  return e.length === 0 ? !1 : Dw(e, t, n)
}
i(Il, "isParentRemoved");
function Dw(e, t, n) {
  let r = t.parentNode;
  for (; r; ) {
    const s = n.getId(r);
    if (e.some(o => o.id === s))
      return !0;
    r = r.parentNode
  }
  return !1
}
i(Dw, "_isParentRemoved");
function Rl(e, t) {
  return e.size === 0 ? !1 : Eh(e, t)
}
i(Rl, "isAncestorInSet");
function Eh(e, t) {
  const {parentNode: n} = t;
  return n ? e.has(n) ? !0 : Eh(e, n) : !1
}
i(Eh, "_isAncestorInSet");
let Xr;
function Lw(e) {
  Xr = e
}
i(Lw, "registerErrorHandler");
function Uw() {
  Xr = void 0
}
i(Uw, "unregisterErrorHandler");
const me = i(e => Xr ? i( (...n) => {
      try {
        return e(...n)
      } catch (r) {
        if (Xr && Xr(r) === !0)
          return () => {}
              ;
        throw r
      }
    }
    , "rrwebWrapped") : e, "callbackWrapper");
function wt(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const s = e[r]
        , o = e[r + 1];
    if (r += 2,
    (s === "optionalAccess" || s === "optionalCall") && n == null)
      return;
    s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...c) => n.call(t, ...c)),
        t = void 0)
  }
  return n
}
i(wt, "_optionalChain$2");
const ir = [];
function ys(e) {
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
i(ys, "getEventTarget");
function bh(e, t) {
  const n = new Fw;
  ir.push(n),
      n.init(e);
  let r = window.MutationObserver || window.__rrMutationObserver;
  const s = wt([window, "optionalAccess", c => c.Zone, "optionalAccess", c => c.__symbol__, "optionalCall", c => c("MutationObserver")]);
  s && window[s] && (r = window[s]);
  const o = new r(me(c => {
        e.onMutation && e.onMutation(c) === !1 || n.processMutations.bind(n)(c)
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
i(bh, "initMutationObserver");
function Bw({mousemoveCb: e, sampling: t, doc: n, mirror: r}) {
  if (t.mousemove === !1)
    return () => {}
        ;
  const s = typeof t.mousemove == "number" ? t.mousemove : 50
      , o = typeof t.mousemoveCallback == "number" ? t.mousemoveCallback : 500;
  let c = [], l;
  const f = ss(me(y => {
        const v = Date.now() - l;
        e(c.map(b => (b.timeOffset -= v,
            b)), y),
            c = [],
            l = null
      }
  ), o)
      , h = me(ss(me(y => {
        const v = ys(y)
            , {clientX: b, clientY: S} = da(y) ? y.changedTouches[0] : y;
        l || (l = Si()),
            c.push({
              x: b,
              y: S,
              id: r.getId(v),
              timeOffset: Si() - l
            }),
            f(typeof DragEvent < "u" && y instanceof DragEvent ? ne.Drag : y instanceof MouseEvent ? ne.MouseMove : ne.TouchMove)
      }
  ), s, {
    trailing: !1
  }))
      , p = [Qe("mousemove", h, n), Qe("touchmove", h, n), Qe("drag", h, n)];
  return me( () => {
        p.forEach(y => y())
      }
  )
}
i(Bw, "initMoveObserver");
function $w({mouseInteractionCb: e, doc: t, mirror: n, blockClass: r, blockSelector: s, unblockSelector: o, sampling: c}) {
  if (c.mouseInteraction === !1)
    return () => {}
        ;
  const l = c.mouseInteraction === !0 || c.mouseInteraction === void 0 ? {} : c.mouseInteraction
      , f = [];
  let h = null;
  const p = i(y => v => {
        const b = ys(v);
        if (ct(b, r, s, o, !0))
          return;
        let S = null
            , R = y;
        if ("pointerType"in v) {
          switch (v.pointerType) {
            case "mouse":
              S = jt.Mouse;
              break;
            case "touch":
              S = jt.Touch;
              break;
            case "pen":
              S = jt.Pen;
              break
          }
          S === jt.Touch ? Ke[y] === Ke.MouseDown ? R = "TouchStart" : Ke[y] === Ke.MouseUp && (R = "TouchEnd") : jt.Pen
        } else
          da(v) && (S = jt.Touch);
        S !== null ? (h = S,
        (R.startsWith("Touch") && S === jt.Touch || R.startsWith("Mouse") && S === jt.Mouse) && (S = null)) : Ke[y] === Ke.Click && (S = h,
            h = null);
        const k = da(v) ? v.changedTouches[0] : v;
        if (!k)
          return;
        const O = n.getId(b)
            , {clientX: L, clientY: U} = k;
        me(e)({
          type: Ke[R],
          id: O,
          x: L,
          y: U,
          ...S !== null && {
            pointerType: S
          }
        })
      }
      , "getHandler");
  return Object.keys(Ke).filter(y => Number.isNaN(Number(y)) && !y.endsWith("_Departed") && l[y] !== !1).forEach(y => {
        let v = mr(y);
        const b = p(y);
        if (window.PointerEvent)
          switch (Ke[y]) {
            case Ke.MouseDown:
            case Ke.MouseUp:
              v = v.replace("mouse", "pointer");
              break;
            case Ke.TouchStart:
            case Ke.TouchEnd:
              return
          }
        f.push(Qe(v, b, t))
      }
  ),
      me( () => {
            f.forEach(y => y())
          }
      )
}
i($w, "initMouseInteractionObserver");
function wh({scrollCb: e, doc: t, mirror: n, blockClass: r, blockSelector: s, unblockSelector: o, sampling: c}) {
  const l = me(ss(me(f => {
        const h = ys(f);
        if (!h || ct(h, r, s, o, !0))
          return;
        const p = n.getId(h);
        if (h === t && t.defaultView) {
          const y = dh(t.defaultView);
          e({
            id: p,
            x: y.left,
            y: y.top
          })
        } else
          e({
            id: p,
            x: h.scrollLeft,
            y: h.scrollTop
          })
      }
  ), c.scroll || 100));
  return Qe("scroll", l, t)
}
i(wh, "initScrollObserver");
function Hw({viewportResizeCb: e}, {win: t}) {
  let n = -1
      , r = -1;
  const s = me(ss(me( () => {
        const o = hh()
            , c = ph();
        (n !== o || r !== c) && (e({
          width: Number(c),
          height: Number(o)
        }),
            n = o,
            r = c)
      }
  ), 200));
  return Qe("resize", s, t)
}
i(Hw, "initViewportResizeObserver");
const jw = ["INPUT", "TEXTAREA", "SELECT"]
    , Al = new WeakMap;
function qw({inputCb: e, doc: t, mirror: n, blockClass: r, blockSelector: s, unblockSelector: o, ignoreClass: c, ignoreSelector: l, maskInputOptions: f, maskInputFn: h, sampling: p, userTriggeredOnInput: y, maskTextClass: v, unmaskTextClass: b, maskTextSelector: S, unmaskTextSelector: R}) {
  function k(N) {
    let F = ys(N);
    const H = N.isTrusted
        , C = F && la(F.tagName);
    if (C === "OPTION" && (F = F.parentElement),
    !F || !C || jw.indexOf(C) < 0 || ct(F, r, s, o, !0))
      return;
    const z = F;
    if (z.classList.contains(c) || l && z.matches(l))
      return;
    const X = sc(F);
    let M = _i(z, C, X)
        , Y = !1;
    const Fe = ji({
      maskInputOptions: f,
      tagName: C,
      type: X
    })
        , re = yr(F, v, S, b, R, Fe);
    (X === "radio" || X === "checkbox") && (Y = F.checked),
        M = ns({
          isMasked: re,
          element: F,
          value: M,
          maskInputFn: h
        }),
        O(F, y ? {
          text: M,
          isChecked: Y,
          userTriggered: H
        } : {
          text: M,
          isChecked: Y
        });
    const xe = F.name;
    X === "radio" && xe && Y && t.querySelectorAll(`input[type="radio"][name="${xe}"]`).forEach(fe => {
          if (fe !== F) {
            const qe = ns({
              isMasked: re,
              element: fe,
              value: _i(fe, C, X),
              maskInputFn: h
            });
            O(fe, y ? {
              text: qe,
              isChecked: !Y,
              userTriggered: !1
            } : {
              text: qe,
              isChecked: !Y
            })
          }
        }
    )
  }
  i(k, "eventHandler");
  function O(N, F) {
    const H = Al.get(N);
    if (!H || H.text !== F.text || H.isChecked !== F.isChecked) {
      Al.set(N, F);
      const C = n.getId(N);
      me(e)({
        ...F,
        id: C
      })
    }
  }
  i(O, "cbWithDedup");
  const U = (p.input === "last" ? ["change"] : ["input", "change"]).map(N => Qe(N, me(k), t))
      , V = t.defaultView;
  if (!V)
    return () => {
      U.forEach(N => N())
    }
        ;
  const q = V.Object.getOwnPropertyDescriptor(V.HTMLInputElement.prototype, "value")
      , x = [[V.HTMLInputElement.prototype, "value"], [V.HTMLInputElement.prototype, "checked"], [V.HTMLSelectElement.prototype, "value"], [V.HTMLTextAreaElement.prototype, "value"], [V.HTMLSelectElement.prototype, "selectedIndex"], [V.HTMLOptionElement.prototype, "selected"]];
  return q && q.set && U.push(...x.map(N => fh(N[0], N[1], {
    set() {
      me(k)({
        target: this,
        isTrusted: !1
      })
    }
  }, !1, V))),
      me( () => {
            U.forEach(N => N())
          }
      )
}
i(qw, "initInputObserver");
function Ei(e) {
  const t = [];
  function n(r, s) {
    if (Bs("CSSGroupingRule") && r.parentRule instanceof CSSGroupingRule || Bs("CSSMediaRule") && r.parentRule instanceof CSSMediaRule || Bs("CSSSupportsRule") && r.parentRule instanceof CSSSupportsRule || Bs("CSSConditionRule") && r.parentRule instanceof CSSConditionRule) {
      const c = Array.from(r.parentRule.cssRules).indexOf(r);
      s.unshift(c)
    } else if (r.parentStyleSheet) {
      const c = Array.from(r.parentStyleSheet.cssRules).indexOf(r);
      s.unshift(c)
    }
    return s
  }
  return i(n, "recurse"),
      n(e, t)
}
i(Ei, "getNestedCSSRulePositions");
function un(e, t, n) {
  let r, s;
  return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : s = n.getId(e),
      {
        styleId: s,
        id: r
      }) : {}
}
i(un, "getIdAndStyleId");
function zw({styleSheetRuleCb: e, mirror: t, stylesheetManager: n}, {win: r}) {
  if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype)
    return () => {}
        ;
  const s = r.CSSStyleSheet.prototype.insertRule;
  r.CSSStyleSheet.prototype.insertRule = new Proxy(s,{
    apply: me( (p, y, v) => {
          const [b,S] = v
              , {id: R, styleId: k} = un(y, t, n.styleMirror);
          return (R && R !== -1 || k && k !== -1) && e({
            id: R,
            styleId: k,
            adds: [{
              rule: b,
              index: S
            }]
          }),
              p.apply(y, v)
        }
    )
  });
  const o = r.CSSStyleSheet.prototype.deleteRule;
  r.CSSStyleSheet.prototype.deleteRule = new Proxy(o,{
    apply: me( (p, y, v) => {
          const [b] = v
              , {id: S, styleId: R} = un(y, t, n.styleMirror);
          return (S && S !== -1 || R && R !== -1) && e({
            id: S,
            styleId: R,
            removes: [{
              index: b
            }]
          }),
              p.apply(y, v)
        }
    )
  });
  let c;
  r.CSSStyleSheet.prototype.replace && (c = r.CSSStyleSheet.prototype.replace,
      r.CSSStyleSheet.prototype.replace = new Proxy(c,{
        apply: me( (p, y, v) => {
              const [b] = v
                  , {id: S, styleId: R} = un(y, t, n.styleMirror);
              return (S && S !== -1 || R && R !== -1) && e({
                id: S,
                styleId: R,
                replace: b
              }),
                  p.apply(y, v)
            }
        )
      }));
  let l;
  r.CSSStyleSheet.prototype.replaceSync && (l = r.CSSStyleSheet.prototype.replaceSync,
      r.CSSStyleSheet.prototype.replaceSync = new Proxy(l,{
        apply: me( (p, y, v) => {
              const [b] = v
                  , {id: S, styleId: R} = un(y, t, n.styleMirror);
              return (S && S !== -1 || R && R !== -1) && e({
                id: S,
                styleId: R,
                replaceSync: b
              }),
                  p.apply(y, v)
            }
        )
      }));
  const f = {};
  $s("CSSGroupingRule") ? f.CSSGroupingRule = r.CSSGroupingRule : ($s("CSSMediaRule") && (f.CSSMediaRule = r.CSSMediaRule),
  $s("CSSConditionRule") && (f.CSSConditionRule = r.CSSConditionRule),
  $s("CSSSupportsRule") && (f.CSSSupportsRule = r.CSSSupportsRule));
  const h = {};
  return Object.entries(f).forEach( ([p,y]) => {
        h[p] = {
          insertRule: y.prototype.insertRule,
          deleteRule: y.prototype.deleteRule
        },
            y.prototype.insertRule = new Proxy(h[p].insertRule,{
              apply: me( (v, b, S) => {
                    const [R,k] = S
                        , {id: O, styleId: L} = un(b.parentStyleSheet, t, n.styleMirror);
                    return (O && O !== -1 || L && L !== -1) && e({
                      id: O,
                      styleId: L,
                      adds: [{
                        rule: R,
                        index: [...Ei(b), k || 0]
                      }]
                    }),
                        v.apply(b, S)
                  }
              )
            }),
            y.prototype.deleteRule = new Proxy(h[p].deleteRule,{
              apply: me( (v, b, S) => {
                    const [R] = S
                        , {id: k, styleId: O} = un(b.parentStyleSheet, t, n.styleMirror);
                    return (k && k !== -1 || O && O !== -1) && e({
                      id: k,
                      styleId: O,
                      removes: [{
                        index: [...Ei(b), R]
                      }]
                    }),
                        v.apply(b, S)
                  }
              )
            })
      }
  ),
      me( () => {
            r.CSSStyleSheet.prototype.insertRule = s,
                r.CSSStyleSheet.prototype.deleteRule = o,
            c && (r.CSSStyleSheet.prototype.replace = c),
            l && (r.CSSStyleSheet.prototype.replaceSync = l),
                Object.entries(f).forEach( ([p,y]) => {
                      y.prototype.insertRule = h[p].insertRule,
                          y.prototype.deleteRule = h[p].deleteRule
                    }
                )
          }
      )
}
i(zw, "initStyleSheetObserver");
function Ih({mirror: e, stylesheetManager: t}, n) {
  let r = null;
  n.nodeName === "#document" ? r = e.getId(n) : r = e.getId(n.host);
  const s = n.nodeName === "#document" ? wt([n, "access", c => c.defaultView, "optionalAccess", c => c.Document]) : wt([n, "access", c => c.ownerDocument, "optionalAccess", c => c.defaultView, "optionalAccess", c => c.ShadowRoot])
      , o = wt([s, "optionalAccess", c => c.prototype]) ? Object.getOwnPropertyDescriptor(wt([s, "optionalAccess", c => c.prototype]), "adoptedStyleSheets") : void 0;
  return r === null || r === -1 || !s || !o ? () => {}
      : (Object.defineProperty(n, "adoptedStyleSheets", {
        configurable: o.configurable,
        enumerable: o.enumerable,
        get() {
          return wt([o, "access", c => c.get, "optionalAccess", c => c.call, "call", c => c(this)])
        },
        set(c) {
          const l = wt([o, "access", f => f.set, "optionalAccess", f => f.call, "call", f => f(this, c)]);
          if (r !== null && r !== -1)
            try {
              t.adoptStyleSheets(c, r)
            } catch {}
          return l
        }
      }),
          me( () => {
                Object.defineProperty(n, "adoptedStyleSheets", {
                  configurable: o.configurable,
                  enumerable: o.enumerable,
                  get: o.get,
                  set: o.set
                })
              }
          ))
}
i(Ih, "initAdoptedStyleSheetObserver");
function Ww({styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: n, stylesheetManager: r}, {win: s}) {
  const o = s.CSSStyleDeclaration.prototype.setProperty;
  s.CSSStyleDeclaration.prototype.setProperty = new Proxy(o,{
    apply: me( (l, f, h) => {
          const [p,y,v] = h;
          if (n.has(p))
            return o.apply(f, [p, y, v]);
          const {id: b, styleId: S} = un(wt([f, "access", R => R.parentRule, "optionalAccess", R => R.parentStyleSheet]), t, r.styleMirror);
          return (b && b !== -1 || S && S !== -1) && e({
            id: b,
            styleId: S,
            set: {
              property: p,
              value: y,
              priority: v
            },
            index: Ei(f.parentRule)
          }),
              l.apply(f, h)
        }
    )
  });
  const c = s.CSSStyleDeclaration.prototype.removeProperty;
  return s.CSSStyleDeclaration.prototype.removeProperty = new Proxy(c,{
    apply: me( (l, f, h) => {
          const [p] = h;
          if (n.has(p))
            return c.apply(f, [p]);
          const {id: y, styleId: v} = un(wt([f, "access", b => b.parentRule, "optionalAccess", b => b.parentStyleSheet]), t, r.styleMirror);
          return (y && y !== -1 || v && v !== -1) && e({
            id: y,
            styleId: v,
            remove: {
              property: p
            },
            index: Ei(f.parentRule)
          }),
              l.apply(f, h)
        }
    )
  }),
      me( () => {
            s.CSSStyleDeclaration.prototype.setProperty = o,
                s.CSSStyleDeclaration.prototype.removeProperty = c
          }
      )
}
i(Ww, "initStyleDeclarationObserver");
function Vw({mediaInteractionCb: e, blockClass: t, blockSelector: n, unblockSelector: r, mirror: s, sampling: o, doc: c}) {
  const l = me(h => ss(me(p => {
        const y = ys(p);
        if (!y || ct(y, t, n, r, !0))
          return;
        const {currentTime: v, volume: b, muted: S, playbackRate: R} = y;
        e({
          type: h,
          id: s.getId(y),
          currentTime: v,
          volume: b,
          muted: S,
          playbackRate: R
        })
      }
  ), o.media || 500))
      , f = [Qe("play", l(0), c), Qe("pause", l(1), c), Qe("seeked", l(2), c), Qe("volumechange", l(3), c), Qe("ratechange", l(4), c)];
  return me( () => {
        f.forEach(h => h())
      }
  )
}
i(Vw, "initMediaInteractionObserver");
function Gw({fontCb: e, doc: t}) {
  const n = t.defaultView;
  if (!n)
    return () => {}
        ;
  const r = []
      , s = new WeakMap
      , o = n.FontFace;
  n.FontFace = i(function(f, h, p) {
    const y = new o(f,h,p);
    return s.set(y, {
      family: f,
      buffer: typeof h != "string",
      descriptors: p,
      fontSource: typeof h == "string" ? h : JSON.stringify(Array.from(new Uint8Array(h)))
    }),
        y
  }, "FontFace");
  const c = oc(t.fonts, "add", function(l) {
    return function(f) {
      return zi(me( () => {
            const h = s.get(f);
            h && (e(h),
                s.delete(f))
          }
      ), 0),
          l.apply(this, [f])
    }
  });
  return r.push( () => {
        n.FontFace = o
      }
  ),
      r.push(c),
      me( () => {
            r.forEach(l => l())
          }
      )
}
i(Gw, "initFontObserver");
function Yw(e) {
  const {doc: t, mirror: n, blockClass: r, blockSelector: s, unblockSelector: o, selectionCb: c} = e;
  let l = !0;
  const f = me( () => {
        const h = t.getSelection();
        if (!h || l && wt([h, "optionalAccess", v => v.isCollapsed]))
          return;
        l = h.isCollapsed || !1;
        const p = []
            , y = h.rangeCount || 0;
        for (let v = 0; v < y; v++) {
          const b = h.getRangeAt(v)
              , {startContainer: S, startOffset: R, endContainer: k, endOffset: O} = b;
          ct(S, r, s, o, !0) || ct(k, r, s, o, !0) || p.push({
            start: n.getId(S),
            startOffset: R,
            end: n.getId(k),
            endOffset: O
          })
        }
        c({
          ranges: p
        })
      }
  );
  return f(),
      Qe("selectionchange", f)
}
i(Yw, "initSelectionObserver");
function Kw({doc: e, customElementCb: t}) {
  const n = e.defaultView;
  return !n || !n.customElements ? () => {}
      : oc(n.customElements, "define", function(s) {
        return function(o, c, l) {
          try {
            t({
              define: {
                name: o
              }
            })
          } catch {}
          return s.apply(this, [o, c, l])
        }
      })
}
i(Kw, "initCustomElementObserver");
function Xw(e, t={}) {
  const n = e.doc.defaultView;
  if (!n)
    return () => {}
        ;
  let r;
  e.recordDOM && (r = bh(e, e.doc));
  const s = Bw(e)
      , o = $w(e)
      , c = wh(e)
      , l = Hw(e, {
    win: n
  })
      , f = qw(e)
      , h = Vw(e);
  let p = i( () => {}
      , "styleSheetObserver")
      , y = i( () => {}
      , "adoptedStyleSheetObserver")
      , v = i( () => {}
      , "styleDeclarationObserver")
      , b = i( () => {}
      , "fontObserver");
  e.recordDOM && (p = zw(e, {
    win: n
  }),
      y = Ih(e, e.doc),
      v = Ww(e, {
        win: n
      }),
  e.collectFonts && (b = Gw(e)));
  const S = Yw(e)
      , R = Kw(e)
      , k = [];
  for (const O of e.plugins)
    k.push(O.observer(O.callback, n, O.options));
  return me( () => {
        ir.forEach(O => O.reset()),
            wt([r, "optionalAccess", O => O.disconnect, "call", O => O()]),
            s(),
            o(),
            c(),
            l(),
            f(),
            h(),
            p(),
            y(),
            v(),
            b(),
            S(),
            R(),
            k.forEach(O => O())
      }
  )
}
i(Xw, "initObservers");
function Bs(e) {
  return typeof window[e] < "u"
}
i(Bs, "hasNestedCSSRule");
function $s(e) {
  return !!(typeof window[e] < "u" && window[e].prototype && "insertRule"in window[e].prototype && "deleteRule"in window[e].prototype)
}
i($s, "canMonkeyPatchNestedCSSRule");
class ma {
  static{i(this, "CrossOriginIframeMirror")
  }constructor(t) {
    this.generateIdFn = t,
        this.iframeIdToRemoteIdMap = new WeakMap,
        this.iframeRemoteIdToIdMap = new WeakMap
  }
  getId(t, n, r, s) {
    const o = r || this.getIdToRemoteIdMap(t)
        , c = s || this.getRemoteIdToIdMap(t);
    let l = o.get(n);
    return l || (l = this.generateIdFn(),
        o.set(n, l),
        c.set(l, n)),
        l
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
function kl(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const s = e[r]
        , o = e[r + 1];
    if (r += 2,
    (s === "optionalAccess" || s === "optionalCall") && n == null)
      return;
    s === "access" || s === "optionalAccess" ? (t = n,
        n = o(n)) : (s === "call" || s === "optionalCall") && (n = o( (...c) => n.call(t, ...c)),
        t = void 0)
  }
  return n
}
i(kl, "_optionalChain$1");
class Qw {
  static{i(this, "IframeManagerNoop")
  }constructor() {
    this.crossOriginIframeMirror = new ma(ic),
        this.crossOriginIframeRootIdMap = new WeakMap
  }
  addIframe() {}
  addLoadListener() {}
  attachIframe() {}
}
class Jw {
  static{i(this, "IframeManager")
  }constructor(t) {
    this.iframes = new WeakMap,
        this.crossOriginIframeMap = new WeakMap,
        this.crossOriginIframeMirror = new ma(ic),
        this.crossOriginIframeRootIdMap = new WeakMap,
        this.mutationCb = t.mutationCb,
        this.wrappedEmit = t.wrappedEmit,
        this.stylesheetManager = t.stylesheetManager,
        this.recordCrossOriginIframes = t.recordCrossOriginIframes,
        this.crossOriginIframeStyleMirror = new ma(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),
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
        kl([this, "access", r => r.loadListener, "optionalCall", r => r(t)]),
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
      case ae.FullSnapshot:
      {
        this.crossOriginIframeMirror.reset(t),
            this.crossOriginIframeStyleMirror.reset(t),
            this.replaceIdOnNode(n.data.node, t);
        const r = n.data.node.id;
        return this.crossOriginIframeRootIdMap.set(t, r),
            this.patchRootIdOnNode(n.data.node, r),
            {
              timestamp: n.timestamp,
              type: ae.IncrementalSnapshot,
              data: {
                source: ne.Mutation,
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
      case ae.Meta:
      case ae.Load:
      case ae.DomContentLoaded:
        return !1;
      case ae.Plugin:
        return n;
      case ae.Custom:
        return this.replaceIds(n.data.payload, t, ["id", "parentId", "previousId", "nextId"]),
            n;
      case ae.IncrementalSnapshot:
        switch (n.data.source) {
          case ne.Mutation:
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
          case ne.Drag:
          case ne.TouchMove:
          case ne.MouseMove:
            return n.data.positions.forEach(r => {
                  this.replaceIds(r, t, ["id"])
                }
            ),
                n;
          case ne.ViewportResize:
            return !1;
          case ne.MediaInteraction:
          case ne.MouseInteraction:
          case ne.Scroll:
          case ne.CanvasMutation:
          case ne.Input:
            return this.replaceIds(n.data, t, ["id"]),
                n;
          case ne.StyleSheetRule:
          case ne.StyleDeclaration:
            return this.replaceIds(n.data, t, ["id"]),
                this.replaceStyleIds(n.data, t, ["styleId"]),
                n;
          case ne.Font:
            return n;
          case ne.Selection:
            return n.data.ranges.forEach(r => {
                  this.replaceIds(r, t, ["start", "end"])
                }
            ),
                n;
          case ne.AdoptedStyleSheet:
            return this.replaceIds(n.data, t, ["id"]),
                this.replaceStyleIds(n.data, t, ["styleIds"]),
                kl([n, "access", r => r.data, "access", r => r.styles, "optionalAccess", r => r.forEach, "call", r => r(s => {
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
    t.type !== Be.Document && !t.rootId && (t.rootId = n),
    "childNodes"in t && t.childNodes.forEach(r => {
          this.patchRootIdOnNode(r, n)
        }
    )
  }
}
class Zw {
  static{i(this, "ShadowDomManagerNoop")
  }init() {}
  addShadowRoot() {}
  observeAttachShadow() {}
  reset() {}
}
class e1 {
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
    if (!Kr(t) || this.shadowDoms.has(t))
      return;
    this.shadowDoms.add(t),
        this.bypassOptions.canvasManager.addShadowRoot(t);
    const r = bh({
      ...this.bypassOptions,
      doc: n,
      mutationCb: this.mutationCb,
      mirror: this.mirror,
      shadowDomManager: this
    }, t);
    this.restoreHandlers.push( () => r.disconnect()),
        this.restoreHandlers.push(wh({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: t,
          mirror: this.mirror
        })),
        zi( () => {
              t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets, this.mirror.getId(t.host)),
                  this.restoreHandlers.push(Ih({
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
    this.restoreHandlers.push(oc(t.prototype, "attachShadow", function(s) {
      return function(o) {
        const c = s.call(this, o);
        return this.shadowRoot && Sh(this) && r.addShadowRoot(this.shadowRoot, n),
            c
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
class Ol {
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
class t1 {
  static{i(this, "StylesheetManager")
  }constructor(t) {
    this.trackedLinkElements = new WeakSet,
        this.styleMirror = new Ow,
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
      let c;
      this.styleMirror.has(o) ? c = this.styleMirror.getId(o) : (c = this.styleMirror.add(o),
          s.push({
            styleId: c,
            rules: Array.from(o.rules || CSSRule, (l, f) => ({
              rule: sh(l),
              index: f
            }))
          })),
          r.styleIds.push(c)
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
class n1 {
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
        Tw( () => {
              this.nodeMap = new WeakMap,
                  this.active = !1
            }
        )),
        this.nodeMap.set(t, (this.nodeMap.get(t) || new Set).add(n))
  }
  destroy() {}
}
let Te, bi;
try {
  if (Array.from([1], e => e * 2)[0] !== 2) {
    const e = document.createElement("iframe");
    document.body.appendChild(e),
        Array.from = ut([e, "access", t => t.contentWindow, "optionalAccess", t => t.Array, "access", t => t.from]) || Array.from,
        document.body.removeChild(e)
  }
} catch (e) {}
const Et = nw();
function Yt(e={}) {
  const {emit: t, checkoutEveryNms: n, checkoutEveryNth: r, blockClass: s="rr-block", blockSelector: o=null, unblockSelector: c=null, ignoreClass: l="rr-ignore", ignoreSelector: f=null, maskAllText: h=!1, maskTextClass: p="rr-mask", unmaskTextClass: y=null, maskTextSelector: v=null, unmaskTextSelector: b=null, inlineStylesheet: S=!0, maskAllInputs: R, maskInputOptions: k, slimDOMOptions: O, maskAttributeFn: L, maskInputFn: U, maskTextFn: V, maxCanvasSize: q=null, packFn: x, sampling: N={}, dataURLOptions: F={}, mousemoveWait: H, recordDOM: C=!0, recordCanvas: z=!1, recordCrossOriginIframes: X=!1, recordAfter: M=e.recordAfter === "DOMContentLoaded" ? e.recordAfter : "load", userTriggeredOnInput: Y=!1, collectFonts: Fe=!1, inlineImages: re=!1, plugins: xe, keepIframeSrcFn: fe=i( () => !1, "keepIframeSrcFn"), ignoreCSSAttributes: qe=new Set([]), errorHandler: dt, onMutation: Or, getCanvasManager: Xi} = e;
  Lw(dt);
  const Wn = X ? window.parent === window : !0;
  let bn = !1;
  if (!Wn)
    try {
      window.parent.document && (bn = !1)
    } catch {
      bn = !0
    }
  if (Wn && !t)
    throw new Error("emit function is required");
  if (!Wn && !bn)
    return () => {}
        ;
  H !== void 0 && N.mousemove === void 0 && (N.mousemove = H),
      Et.reset();
  const Pr = R === !0 ? {
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
  } : k !== void 0 ? k : {}
      , Nr = O === !0 || O === "all" ? {
    script: !0,
    comment: !0,
    headFavicon: !0,
    headWhitespace: !0,
    headMetaSocial: !0,
    headMetaRobots: !0,
    headMetaHttpEquiv: !0,
    headMetaVerification: !0,
    headMetaAuthorship: O === "all",
    headMetaDescKeywords: O === "all"
  } : O || {};
  kw();
  let Tr, _t = 0;
  const en = i(ge => {
        for (const tt of xe || [])
          tt.eventProcessor && (ge = tt.eventProcessor(ge));
        return x && !bn && (ge = x(ge)),
            ge
      }
      , "eventProcessor");
  Te = i( (ge, tt) => {
        const ce = ge;
        if (ce.timestamp = Si(),
        ut([ir, "access", Ae => Ae[0], "optionalAccess", Ae => Ae.isFrozen, "call", Ae => Ae()]) && ce.type !== ae.FullSnapshot && !(ce.type === ae.IncrementalSnapshot && ce.data.source === ne.Mutation) && ir.forEach(Ae => Ae.unfreeze()),
            Wn)
          ut([t, "optionalCall", Ae => Ae(en(ce), tt)]);
        else if (bn) {
          const Ae = {
            type: "rrweb",
            event: en(ce),
            origin: window.location.origin,
            isCheckout: tt
          };
          window.parent.postMessage(Ae, "*")
        }
        if (ce.type === ae.FullSnapshot)
          Tr = ce,
              _t = 0;
        else if (ce.type === ae.IncrementalSnapshot) {
          if (ce.data.source === ne.Mutation && ce.data.isAttachIframe)
            return;
          _t++;
          const Ae = r && _t >= r
              , _e = n && Tr && ce.timestamp - Tr.timestamp > n;
          (Ae || _e) && Kn(!0)
        }
      }
      , "wrappedEmit");
  const xr = i(ge => {
        Te({
          type: ae.IncrementalSnapshot,
          data: {
            source: ne.Mutation,
            ...ge
          }
        })
      }
      , "wrappedMutationEmit")
      , Vn = i(ge => Te({
    type: ae.IncrementalSnapshot,
    data: {
      source: ne.Scroll,
      ...ge
    }
  }), "wrappedScrollEmit")
      , Gn = i(ge => Te({
    type: ae.IncrementalSnapshot,
    data: {
      source: ne.CanvasMutation,
      ...ge
    }
  }), "wrappedCanvasMutationEmit")
      , Yn = i(ge => Te({
    type: ae.IncrementalSnapshot,
    data: {
      source: ne.AdoptedStyleSheet,
      ...ge
    }
  }), "wrappedAdoptedStyleSheetEmit")
      , Ft = new t1({
    mutationCb: xr,
    adoptedStyleSheetCb: Yn
  })
      , Rt = typeof __RRWEB_EXCLUDE_IFRAME__ == "boolean" && __RRWEB_EXCLUDE_IFRAME__ ? new Qw : new Jw({
    mirror: Et,
    mutationCb: xr,
    stylesheetManager: Ft,
    recordCrossOriginIframes: X,
    wrappedEmit: Te
  });
  for (const ge of xe || [])
    ge.getMirror && ge.getMirror({
      nodeMirror: Et,
      crossOriginIframeMirror: Rt.crossOriginIframeMirror,
      crossOriginIframeStyleMirror: Rt.crossOriginIframeStyleMirror
    });
  const tn = new n1
      , Cr = s1(Xi, {
    mirror: Et,
    win: window,
    mutationCb: ge => Te({
      type: ae.IncrementalSnapshot,
      data: {
        source: ne.CanvasMutation,
        ...ge
      }
    }),
    recordCanvas: z,
    blockClass: s,
    blockSelector: o,
    unblockSelector: c,
    maxCanvasSize: q,
    sampling: N.canvas,
    dataURLOptions: F,
    errorHandler: dt
  })
      , Dt = typeof __RRWEB_EXCLUDE_SHADOW_DOM__ == "boolean" && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new Zw : new e1({
    mutationCb: xr,
    scrollCb: Vn,
    bypassOptions: {
      onMutation: Or,
      blockClass: s,
      blockSelector: o,
      unblockSelector: c,
      maskAllText: h,
      maskTextClass: p,
      unmaskTextClass: y,
      maskTextSelector: v,
      unmaskTextSelector: b,
      inlineStylesheet: S,
      maskInputOptions: Pr,
      dataURLOptions: F,
      maskAttributeFn: L,
      maskTextFn: V,
      maskInputFn: U,
      recordCanvas: z,
      inlineImages: re,
      sampling: N,
      slimDOMOptions: Nr,
      iframeManager: Rt,
      stylesheetManager: Ft,
      canvasManager: Cr,
      keepIframeSrcFn: fe,
      processedNodeManager: tn
    },
    mirror: Et
  })
      , Kn = i( (ge=!1) => {
        if (!C)
          return;
        Te({
          type: ae.Meta,
          data: {
            href: window.location.href,
            width: ph(),
            height: hh()
          }
        }, ge),
            Ft.reset(),
            Dt.init(),
            ir.forEach(ce => ce.lock());
        const tt = Rw(document, {
          mirror: Et,
          blockClass: s,
          blockSelector: o,
          unblockSelector: c,
          maskAllText: h,
          maskTextClass: p,
          unmaskTextClass: y,
          maskTextSelector: v,
          unmaskTextSelector: b,
          inlineStylesheet: S,
          maskAllInputs: Pr,
          maskAttributeFn: L,
          maskInputFn: U,
          maskTextFn: V,
          slimDOM: Nr,
          dataURLOptions: F,
          recordCanvas: z,
          inlineImages: re,
          onSerialize: ce => {
            gh(ce, Et) && Rt.addIframe(ce),
            _h(ce, Et) && Ft.trackLinkElement(ce),
            ha(ce) && Dt.addShadowRoot(ce.shadowRoot, document)
          }
          ,
          onIframeLoad: (ce, Ae) => {
            Rt.attachIframe(ce, Ae),
            ce.contentWindow && Cr.addWindow(ce.contentWindow),
                Dt.observeAttachShadow(ce)
          }
          ,
          onStylesheetLoad: (ce, Ae) => {
            Ft.attachLinkElement(ce, Ae)
          }
          ,
          keepIframeSrcFn: fe
        });
        if (!tt)
          return console.warn("Failed to snapshot the document");
        Te({
          type: ae.FullSnapshot,
          data: {
            node: tt,
            initialOffset: dh(window)
          }
        }),
            ir.forEach(ce => ce.unlock()),
        document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && Ft.adoptStyleSheets(document.adoptedStyleSheets, Et.getId(document))
      }
      , "takeFullSnapshot");
  bi = Kn;
  try {
    const ge = []
        , tt = i(Ae => me(Xw)({
      onMutation: Or,
      mutationCb: xr,
      mousemoveCb: (_e, Q) => Te({
        type: ae.IncrementalSnapshot,
        data: {
          source: Q,
          positions: _e
        }
      }),
      mouseInteractionCb: _e => Te({
        type: ae.IncrementalSnapshot,
        data: {
          source: ne.MouseInteraction,
          ..._e
        }
      }),
      scrollCb: Vn,
      viewportResizeCb: _e => Te({
        type: ae.IncrementalSnapshot,
        data: {
          source: ne.ViewportResize,
          ..._e
        }
      }),
      inputCb: _e => Te({
        type: ae.IncrementalSnapshot,
        data: {
          source: ne.Input,
          ..._e
        }
      }),
      mediaInteractionCb: _e => Te({
        type: ae.IncrementalSnapshot,
        data: {
          source: ne.MediaInteraction,
          ..._e
        }
      }),
      styleSheetRuleCb: _e => Te({
        type: ae.IncrementalSnapshot,
        data: {
          source: ne.StyleSheetRule,
          ..._e
        }
      }),
      styleDeclarationCb: _e => Te({
        type: ae.IncrementalSnapshot,
        data: {
          source: ne.StyleDeclaration,
          ..._e
        }
      }),
      canvasMutationCb: Gn,
      fontCb: _e => Te({
        type: ae.IncrementalSnapshot,
        data: {
          source: ne.Font,
          ..._e
        }
      }),
      selectionCb: _e => {
        Te({
          type: ae.IncrementalSnapshot,
          data: {
            source: ne.Selection,
            ..._e
          }
        })
      }
      ,
      customElementCb: _e => {
        Te({
          type: ae.IncrementalSnapshot,
          data: {
            source: ne.CustomElement,
            ..._e
          }
        })
      }
      ,
      blockClass: s,
      ignoreClass: l,
      ignoreSelector: f,
      maskAllText: h,
      maskTextClass: p,
      unmaskTextClass: y,
      maskTextSelector: v,
      unmaskTextSelector: b,
      maskInputOptions: Pr,
      inlineStylesheet: S,
      sampling: N,
      recordDOM: C,
      recordCanvas: z,
      inlineImages: re,
      userTriggeredOnInput: Y,
      collectFonts: Fe,
      doc: Ae,
      maskAttributeFn: L,
      maskInputFn: U,
      maskTextFn: V,
      keepIframeSrcFn: fe,
      blockSelector: o,
      unblockSelector: c,
      slimDOMOptions: Nr,
      dataURLOptions: F,
      mirror: Et,
      iframeManager: Rt,
      stylesheetManager: Ft,
      shadowDomManager: Dt,
      processedNodeManager: tn,
      canvasManager: Cr,
      ignoreCSSAttributes: qe,
      plugins: ut([xe, "optionalAccess", _e => _e.filter, "call", _e => _e(Q => Q.observer), "optionalAccess", _e => _e.map, "call", _e => _e(Q => ({
        observer: Q.observer,
        options: Q.options,
        callback: De => Te({
          type: ae.Plugin,
          data: {
            plugin: Q.name,
            payload: De
          }
        })
      }))]) || []
    }, {}), "observe");
    Rt.addLoadListener(Ae => {
          try {
            ge.push(tt(Ae.contentDocument))
          } catch (_e) {}
        }
    );
    const ce = i( () => {
          Kn(),
              ge.push(tt(document))
        }
        , "init");
    return document.readyState === "interactive" || document.readyState === "complete" ? ce() : (ge.push(Qe("DOMContentLoaded", () => {
          Te({
            type: ae.DomContentLoaded,
            data: {}
          }),
          M === "DOMContentLoaded" && ce()
        }
    )),
        ge.push(Qe("load", () => {
              Te({
                type: ae.Load,
                data: {}
              }),
              M === "load" && ce()
            }
            , window))),
        () => {
          ge.forEach(Ae => Ae()),
              tn.destroy(),
              bi = void 0,
              Uw()
        }
  } catch (ge) {}
}
i(Yt, "record");
function r1(e) {
  if (!bi)
    throw new Error("please take full snapshot after start recording");
  bi(e)
}
i(r1, "takeFullSnapshot");
Yt.mirror = Et;
Yt.takeFullSnapshot = r1;
function s1(e, t) {
  try {
    return e ? e(t) : new Ol
  } catch {
    return new Ol
  }
}
i(s1, "_getCanvasManager");
const J = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
    , Pl = ["info", "warn", "error", "log"]
    , Zs = "[Replay] ";
function Ao(e, t="info") {
  yn({
    category: "console",
    data: {
      logger: "replay"
    },
    level: t,
    message: `${Zs}${e}`
  }, {
    level: t
  })
}
i(Ao, "_addBreadcrumb");
function i1() {
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
  return J ? (Pl.forEach(r => {
            n[r] = (...s) => {
              D[r](Zs, ...s),
              t && Ao(s.join(""), od(r))
            }
          }
      ),
          n.exception = (r, ...s) => {
            s.length && n.error && n.error(...s),
                D.error(Zs, r),
                e ? Pn(r) : t && Ao(r, "error")
          }
          ,
          n.infoTick = (...r) => {
            D.info(Zs, ...r),
            t && setTimeout( () => Ao(r[0]), 0)
          }
  ) : Pl.forEach(r => {
        n[r] = () => {}
      }
  ),
      n
}
i(i1, "makeReplayLogger");
const Z = i1()
    , o1 = 3
    , a1 = 5;
function cc(e) {
  return e > 9999999999 ? e : e * 1e3
}
i(cc, "timestampToMs");
function ko(e) {
  return e > 9999999999 ? e / 1e3 : e
}
i(ko, "timestampToS");
function gs(e, t) {
  t.category !== "sentry.transaction" && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(),
      e.addUpdate( () => (e.throttledAddEvent({
        type: ae.Custom,
        timestamp: (t.timestamp || 0) * 1e3,
        data: {
          tag: "breadcrumb",
          payload: Nt(t, 10, 1e3)
        }
      }),
      t.category === "console")))
}
i(gs, "addBreadcrumbEvent");
const c1 = "button,a";
function Rh(e) {
  return e.closest(c1) || e
}
i(Rh, "getClosestInteractive");
function Ah(e) {
  const t = kh(e);
  return !t || !(t instanceof Element) ? t : Rh(t)
}
i(Ah, "getClickTargetNode");
function kh(e) {
  return u1(e) ? e.target : e
}
i(kh, "getTargetNode");
function u1(e) {
  return typeof e == "object" && !!e && "target"in e
}
i(u1, "isEventWithTarget");
let ln;
function l1(e) {
  return ln || (ln = [],
      f1()),
      ln.push(e),
      () => {
        const t = ln ? ln.indexOf(e) : -1;
        t > -1 && ln.splice(t, 1)
      }
}
i(l1, "onWindowOpen");
function f1() {
  it(Ie, "open", function(e) {
    return function(...t) {
      if (ln)
        try {
          ln.forEach(n => n())
        } catch {}
      return e.apply(Ie, t)
    }
  })
}
i(f1, "monkeyPatchWindowOpen");
const d1 = new Set([ne.Mutation, ne.StyleSheetRule, ne.StyleDeclaration, ne.AdoptedStyleSheet, ne.CanvasMutation, ne.Selection, ne.MediaInteraction]);
function h1(e, t, n) {
  e.handleClick(t, n)
}
i(h1, "handleClick");
class p1 {
  static{i(this, "ClickDetector")
  }constructor(t, n, r=gs) {
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
    const t = l1( () => {
          this._lastMutation = Nl()
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
    if (y1(n, this._ignoreSelector) || !g1(t))
      return;
    const r = {
      timestamp: ko(t.timestamp),
      clickBreadcrumb: t,
      clickCount: 0,
      node: n
    };
    this._clicks.some(s => s.node === r.node && Math.abs(s.timestamp - r.timestamp) < 1) || (this._clicks.push(r),
    this._clicks.length === 1 && this._scheduleCheckClicks())
  }
  registerMutation(t=Date.now()) {
    this._lastMutation = ko(t)
  }
  registerScroll(t=Date.now()) {
    this._lastScroll = ko(t)
  }
  registerClick(t) {
    const n = Rh(t);
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
        , n = Nl();
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
        , {clickCount: c, clickBreadcrumb: l} = t;
    if (o) {
      const f = Math.min(t.mutationAfter || this._timeout, this._timeout) * 1e3
          , h = f < this._timeout * 1e3 ? "mutation" : "timeout"
          , p = {
        type: "default",
        message: l.message,
        timestamp: l.timestamp,
        category: "ui.slowClickDetected",
        data: {
          ...l.data,
          url: Ie.location.href,
          route: n.getCurrentRoute(),
          timeAfterClickMs: f,
          endReason: h,
          clickCount: c || 1
        }
      };
      this._addBreadcrumbEvent(n, p);
      return
    }
    if (c > 1) {
      const f = {
        type: "default",
        message: l.message,
        timestamp: l.timestamp,
        category: "ui.multiClick",
        data: {
          ...l.data,
          url: Ie.location.href,
          route: n.getCurrentRoute(),
          clickCount: c,
          metric: !0
        }
      };
      this._addBreadcrumbEvent(n, f)
    }
  }
  _scheduleCheckClicks() {
    this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
        this._checkClickTimeout = pr( () => this._checkClicks(), 1e3)
  }
}
const m1 = ["A", "BUTTON", "INPUT"];
function y1(e, t) {
  return !!(!m1.includes(e.tagName) || e.tagName === "INPUT" && !["submit", "button"].includes(e.getAttribute("type") || "") || e.tagName === "A" && (e.hasAttribute("download") || e.hasAttribute("target") && e.getAttribute("target") !== "_self") || t && e.matches(t))
}
i(y1, "ignoreElement");
function g1(e) {
  return !!(e.data && typeof e.data.nodeId == "number" && e.timestamp)
}
i(g1, "isClickBreadcrumb");
function Nl() {
  return Date.now() / 1e3
}
i(Nl, "nowInSeconds");
function _1(e, t) {
  try {
    if (!v1(t))
      return;
    const {source: n} = t.data;
    if (d1.has(n) && e.registerMutation(t.timestamp),
    n === ne.Scroll && e.registerScroll(t.timestamp),
        S1(t)) {
      const {type: r, id: s} = t.data
          , o = Yt.mirror.getNode(s);
      o instanceof HTMLElement && r === Ke.Click && e.registerClick(o)
    }
  } catch {}
}
i(_1, "updateClickDetectorForRecordingEvent");
function v1(e) {
  return e.type === o1
}
i(v1, "isIncrementalEvent");
function S1(e) {
  return e.data.source === ne.MouseInteraction
}
i(S1, "isIncrementalMouseInteraction");
function Ct(e) {
  return {
    timestamp: Date.now() / 1e3,
    type: "default",
    ...e
  }
}
i(Ct, "createBreadcrumb");
var wi;
(function(e) {
      e[e.Document = 0] = "Document",
          e[e.DocumentType = 1] = "DocumentType",
          e[e.Element = 2] = "Element",
          e[e.Text = 3] = "Text",
          e[e.CDATA = 4] = "CDATA",
          e[e.Comment = 5] = "Comment"
    }
)(wi || (wi = {}));
const E1 = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]);
function b1(e) {
  const t = {};
  !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = e["data-sentry-element"]);
  for (const n in e)
    if (E1.has(n)) {
      let r = n;
      (n === "data-testid" || n === "data-test-id") && (r = "testId"),
          t[r] = e[n]
    }
  return t
}
i(b1, "getAttributesToRecord");
const w1 = i(e => t => {
      if (!e.isEnabled())
        return;
      const n = I1(t);
      if (!n)
        return;
      const r = t.name === "click"
          , s = r ? t.event : void 0;
      r && e.clickDetector && s && s.target && !s.altKey && !s.metaKey && !s.ctrlKey && !s.shiftKey && h1(e.clickDetector, n, Ah(t.event)),
          gs(e, n)
    }
    , "handleDomListener");
function Oh(e, t) {
  const n = Yt.mirror.getId(e)
      , r = n && Yt.mirror.getNode(n)
      , s = r && Yt.mirror.getMeta(r)
      , o = s && A1(s) ? s : null;
  return {
    message: t,
    data: o ? {
      nodeId: n,
      node: {
        id: n,
        tagName: o.tagName,
        textContent: Array.from(o.childNodes).map(c => c.type === wi.Text && c.textContent).filter(Boolean).map(c => c.trim()).join(""),
        attributes: b1(o.attributes)
      }
    } : {}
  }
}
i(Oh, "getBaseDomBreadcrumb");
function I1(e) {
  const {target: t, message: n} = R1(e);
  return Ct({
    category: `ui.${e.name}`,
    ...Oh(t, n)
  })
}
i(I1, "handleDom");
function R1(e) {
  const t = e.name === "click";
  let n, r = null;
  try {
    r = t ? Ah(e.event) : kh(e.event),
        n = Xt(r, {
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
i(R1, "getDomTarget");
function A1(e) {
  return e.type === wi.Element
}
i(A1, "isElement$2");
function k1(e, t) {
  if (!e.isEnabled())
    return;
  e.updateUserActivity();
  const n = O1(t);
  n && gs(e, n)
}
i(k1, "handleKeyboardEvent");
function O1(e) {
  const {metaKey: t, shiftKey: n, ctrlKey: r, altKey: s, key: o, target: c} = e;
  if (!c || P1(c) || !o)
    return null;
  const l = t || r || s
      , f = o.length === 1;
  if (!l && f)
    return null;
  const h = Xt(c, {
    maxStringLength: 200
  }) || "<unknown>"
      , p = Oh(c, h);
  return Ct({
    category: "ui.keyDown",
    message: h,
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
i(O1, "getKeyboardBreadcrumb");
function P1(e) {
  return e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable
}
i(P1, "isInputElement");
const N1 = {
  resource: F1,
  paint: C1,
  navigation: M1
};
function Hs(e, t) {
  return ({metric: n}) => void t.replayPerformanceEntries.push(e(n))
}
i(Hs, "webVitalHandler");
function T1(e) {
  return e.map(x1).filter(Boolean)
}
i(T1, "createPerformanceEntries");
function x1(e) {
  const t = N1[e.entryType];
  return t ? t(e) : null
}
i(x1, "createPerformanceEntry");
function gr(e) {
  return ((Ze || Ie.performance.timeOrigin) + e) / 1e3
}
i(gr, "getAbsoluteTime$1");
function C1(e) {
  const {duration: t, entryType: n, name: r, startTime: s} = e
      , o = gr(s);
  return {
    type: n,
    name: r,
    start: o,
    end: o + t,
    data: void 0
  }
}
i(C1, "createPaintEntry");
function M1(e) {
  const {entryType: t, name: n, decodedBodySize: r, duration: s, domComplete: o, encodedBodySize: c, domContentLoadedEventStart: l, domContentLoadedEventEnd: f, domInteractive: h, loadEventStart: p, loadEventEnd: y, redirectCount: v, startTime: b, transferSize: S, type: R} = e;
  return s === 0 ? null : {
    type: `${t}.${R}`,
    start: gr(b),
    end: gr(o),
    name: n,
    data: {
      size: S,
      decodedBodySize: r,
      encodedBodySize: c,
      duration: s,
      domInteractive: h,
      domContentLoadedEventStart: l,
      domContentLoadedEventEnd: f,
      loadEventStart: p,
      loadEventEnd: y,
      domComplete: o,
      redirectCount: v
    }
  }
}
i(M1, "createNavigationEntry");
function F1(e) {
  const {entryType: t, initiatorType: n, name: r, responseEnd: s, startTime: o, decodedBodySize: c, encodedBodySize: l, responseStatus: f, transferSize: h} = e;
  return ["fetch", "xmlhttprequest"].includes(n) ? null : {
    type: `${t}.${n}`,
    start: gr(o),
    end: gr(s),
    name: r,
    data: {
      size: h,
      statusCode: f,
      decodedBodySize: c,
      encodedBodySize: l
    }
  }
}
i(F1, "createResourceEntry");
function D1(e) {
  const t = e.entries[e.entries.length - 1]
      , n = t && t.element ? [t.element] : void 0;
  return Wi(e, "largest-contentful-paint", n)
}
i(D1, "getLargestContentfulPaint");
function L1(e) {
  return e.sources !== void 0
}
i(L1, "isLayoutShift");
function U1(e) {
  const t = []
      , n = [];
  for (const r of e.entries)
    if (L1(r)) {
      const s = [];
      for (const o of r.sources)
        if (o.node) {
          n.push(o.node);
          const c = Yt.mirror.getId(o.node);
          c && s.push(c)
        }
      t.push({
        value: r.value,
        nodeIds: s.length ? s : void 0
      })
    }
  return Wi(e, "cumulative-layout-shift", n, t)
}
i(U1, "getCumulativeLayoutShift");
function B1(e) {
  const t = e.entries[e.entries.length - 1]
      , n = t && t.target ? [t.target] : void 0;
  return Wi(e, "first-input-delay", n)
}
i(B1, "getFirstInputDelay");
function $1(e) {
  const t = e.entries[e.entries.length - 1]
      , n = t && t.target ? [t.target] : void 0;
  return Wi(e, "interaction-to-next-paint", n)
}
i($1, "getInteractionToNextPaint");
function Wi(e, t, n, r) {
  const s = e.value
      , o = e.rating
      , c = gr(s);
  return {
    type: "web-vital",
    name: t,
    start: c,
    end: c,
    data: {
      value: s,
      size: s,
      rating: o,
      nodeIds: n ? n.map(l => Yt.mirror.getId(l)) : void 0,
      attributions: r
    }
  }
}
i(Wi, "getWebVital");
function H1(e) {
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
        r.push(hr(s, n))
      }
  ),
      r.push(Vd(Hs(D1, e)), Za(Hs(U1, e)), Gd(Hs(B1, e)), Yd(Hs($1, e))),
      () => {
        r.forEach(s => s())
      }
}
i(H1, "setupPerformanceObserver");
const j1 = 'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=A(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},U=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=x(f,15),M=b.t,E=b.l,A=x(h,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=C[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(a[t]^a[t+1]<<A^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=U(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=U(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(J)return J.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),a=0,s=function(t){i[a++]=t},o=0;o<e;++o){if(a+5>i.length){var f=new t(a+8+(e-o<<1));f.set(i),i=f}var h=n.charCodeAt(o);h<128||r?s(h):h<2048?(s(192|h>>6),s(128|63&h)):h>55295&&h<57344?(s(240|(h=65536+(1047552&h)|1023&n.charCodeAt(++o))>>18),s(128|h>>12&63),s(128|h>>6&63),s(128|63&h)):(s(224|h>>12),s(128|h>>6&63),s(128|63&h))}return b(i,0,a)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});';
function q1() {
  const e = new Blob([j1]);
  return URL.createObjectURL(e)
}
i(q1, "e");
class uc extends Error {
  static{i(this, "EventBufferSizeExceededError")
  }constructor() {
    super(`Event buffer exceeded maximum size of ${rc}.`)
  }
}
class Ph {
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
    this._totalSize > rc)
      throw new uc;
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
    return t ? cc(t) : null
  }
}
class z1 {
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
    J && Z.info("Destroying compression worker"),
        this._worker.terminate()
  }
  postMessage(t, n) {
    const r = this._getAndIncrementId();
    return new Promise( (s, o) => {
          const c = i( ({data: l}) => {
                const f = l;
                if (f.method === t && f.id === r) {
                  if (this._worker.removeEventListener("message", c),
                      !f.success) {
                    J && Z.error("Error in compression worker: ", f.response),
                        o(new Error("Error in compression worker"));
                    return
                  }
                  s(f.response)
                }
              }
              , "listener");
          this._worker.addEventListener("message", c),
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
class W1 {
  static{i(this, "EventBufferCompressionWorker")
  }constructor(t) {
    this._worker = new z1(t),
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
    const n = cc(t.timestamp);
    (!this._earliestTimestamp || n < this._earliestTimestamp) && (this._earliestTimestamp = n);
    const r = JSON.stringify(t);
    return this._totalSize += r.length,
        this._totalSize > rc ? Promise.reject(new uc) : this._sendEventToWorker(r)
  }
  finish() {
    return this._finishRequest()
  }
  clear() {
    this._earliestTimestamp = null,
        this._totalSize = 0,
        this.hasCheckout = !1,
        this._worker.postMessage("clear").then(null, t => {
              J && Z.exception(t, 'Sending "clear" message to worker failed', t)
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
class V1 {
  static{i(this, "EventBufferProxy")
  }constructor(t) {
    this._fallback = new Ph,
        this._compression = new W1(t),
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
      J && Z.exception(t, "Failed to load the compression worker, falling back to simple buffer");
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
      J && Z.exception(s, "Failed to add events when switching buffers.")
    }
  }
}
function G1({useCompression: e, workerUrl: t}) {
  if (e && window.Worker) {
    const n = Y1(t);
    if (n)
      return n
  }
  return J && Z.info("Using simple buffer"),
      new Ph
}
i(G1, "createEventBuffer");
function Y1(e) {
  try {
    const t = e || K1();
    if (!t)
      return;
    J && Z.info(`Using compression worker${e ? ` from ${e}` : ""}`);
    const n = new Worker(t);
    return new V1(n)
  } catch (t) {
    J && Z.exception(t, "Failed to create compression worker")
  }
}
i(Y1, "_loadWorker");
function K1() {
  return typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ > "u" || !__SENTRY_EXCLUDE_REPLAY_WORKER__ ? q1() : ""
}
i(K1, "_getWorkerUrl");
function lc() {
  try {
    return "sessionStorage"in Ie && !!Ie.sessionStorage
  } catch {
    return !1
  }
}
i(lc, "hasSessionStorage");
function X1(e) {
  Q1(),
      e.session = void 0
}
i(X1, "clearSession");
function Q1() {
  if (lc())
    try {
      Ie.sessionStorage.removeItem(tc)
    } catch {}
}
i(Q1, "deleteSession");
function Nh(e) {
  return e === void 0 ? !1 : Math.random() < e
}
i(Nh, "isSampled");
function Th(e) {
  const t = Date.now()
      , n = e.id || Ne()
      , r = e.started || t
      , s = e.lastActivity || t
      , o = e.segmentId || 0
      , c = e.sampled
      , l = e.previousSessionId;
  return {
    id: n,
    started: r,
    lastActivity: s,
    segmentId: o,
    sampled: c,
    previousSessionId: l
  }
}
i(Th, "makeSession");
function fc(e) {
  if (lc())
    try {
      Ie.sessionStorage.setItem(tc, JSON.stringify(e))
    } catch {}
}
i(fc, "saveSession");
function J1(e, t) {
  return Nh(e) ? "session" : t ? "buffer" : !1
}
i(J1, "getSessionSampleType");
function Tl({sessionSampleRate: e, allowBuffering: t, stickySession: n=!1}, {previousSessionId: r}={}) {
  const s = J1(e, t)
      , o = Th({
    sampled: s,
    previousSessionId: r
  });
  return n && fc(o),
      o
}
i(Tl, "createSession");
function Z1() {
  if (!lc())
    return null;
  try {
    const e = Ie.sessionStorage.getItem(tc);
    if (!e)
      return null;
    const t = JSON.parse(e);
    return J && Z.infoTick("Loading existing session"),
        Th(t)
  } catch {
    return null
  }
}
i(Z1, "fetchSession");
function ya(e, t, n=+new Date) {
  return e === null || t === void 0 || t < 0 ? !0 : t === 0 ? !1 : e + t <= n
}
i(ya, "isExpired");
function xh(e, {maxReplayDuration: t, sessionIdleExpire: n, targetTime: r=Date.now()}) {
  return ya(e.started, t, r) || ya(e.lastActivity, n, r)
}
i(xh, "isSessionExpired");
function Ch(e, {sessionIdleExpire: t, maxReplayDuration: n}) {
  return !(!xh(e, {
    sessionIdleExpire: t,
    maxReplayDuration: n
  }) || e.sampled === "buffer" && e.segmentId === 0)
}
i(Ch, "shouldRefreshSession");
function Oo({sessionIdleExpire: e, maxReplayDuration: t, previousSessionId: n}, r) {
  const s = r.stickySession && Z1();
  return s ? Ch(s, {
    sessionIdleExpire: e,
    maxReplayDuration: t
  }) ? (J && Z.infoTick("Session in sessionStorage is expired, creating new one..."),
      Tl(r, {
        previousSessionId: s.id
      })) : s : (J && Z.infoTick("Creating new session"),
      Tl(r, {
        previousSessionId: n
      }))
}
i(Oo, "loadOrCreateSession");
function eI(e) {
  return e.type === ae.Custom
}
i(eI, "isCustomEvent");
function dc(e, t, n) {
  return Fh(e, t) ? (Mh(e, t, n),
      !0) : !1
}
i(dc, "addEventSync");
function tI(e, t, n) {
  return Fh(e, t) ? Mh(e, t, n) : Promise.resolve(null)
}
i(tI, "addEvent");
async function Mh(e, t, n) {
  if (!e.eventBuffer)
    return null;
  try {
    n && e.recordingMode === "buffer" && e.eventBuffer.clear(),
    n && (e.eventBuffer.hasCheckout = !0);
    const r = e.getOptions()
        , s = nI(t, r.beforeAddRecordingEvent);
    return s ? await e.eventBuffer.addEvent(s) : void 0
  } catch (r) {
    const s = r && r instanceof uc ? "addEventSizeExceeded" : "addEvent";
    e.handleException(r),
        await e.stop({
          reason: s
        });
    const o = ue();
    o && o.recordDroppedEvent("internal_sdk_error", "replay")
  }
}
i(Mh, "_addEvent");
function Fh(e, t) {
  if (!e.eventBuffer || e.isPaused() || !e.isEnabled())
    return !1;
  const n = cc(t.timestamp);
  return n + e.timeouts.sessionIdlePause < Date.now() ? !1 : n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration ? (J && Z.infoTick(`Skipping event with timestamp ${n} because it is after maxReplayDuration`),
      !1) : !0
}
i(Fh, "shouldAddEvent");
function nI(e, t) {
  try {
    if (typeof t == "function" && eI(e))
      return t(e)
  } catch (n) {
    return J && Z.exception(n, "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event..."),
        null
  }
  return e
}
i(nI, "maybeApplyCallback");
function hc(e) {
  return !e.type
}
i(hc, "isErrorEvent");
function ga(e) {
  return e.type === "transaction"
}
i(ga, "isTransactionEvent");
function rI(e) {
  return e.type === "replay_event"
}
i(rI, "isReplayEvent");
function xl(e) {
  return e.type === "feedback"
}
i(xl, "isFeedbackEvent");
function sI(e) {
  return (t, n) => {
    if (!e.isEnabled() || !hc(t) && !ga(t))
      return;
    const r = n && n.statusCode;
    if (!(!r || r < 200 || r >= 300)) {
      if (ga(t)) {
        iI(e, t);
        return
      }
      oI(e, t)
    }
  }
}
i(sI, "handleAfterSendEvent");
function iI(e, t) {
  const n = e.getContext();
  t.contexts && t.contexts.trace && t.contexts.trace.trace_id && n.traceIds.size < 100 && n.traceIds.add(t.contexts.trace.trace_id)
}
i(iI, "handleTransactionEvent");
function oI(e, t) {
  const n = e.getContext();
  if (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id),
  e.recordingMode !== "buffer" || !t.tags || !t.tags.replayId)
    return;
  const {beforeErrorSampling: r} = e.getOptions();
  typeof r == "function" && !r(t) || pr(async () => {
        try {
          await e.sendBufferedReplayOrFlush()
        } catch (s) {
          e.handleException(s)
        }
      }
  )
}
i(oI, "handleErrorEvent");
function aI(e) {
  return t => {
    !e.isEnabled() || !hc(t) || cI(e, t)
  }
}
i(aI, "handleBeforeSendEvent");
function cI(e, t) {
  const n = t.exception && t.exception.values && t.exception.values[0] && t.exception.values[0].value;
  if (typeof n == "string" && (n.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i))) {
    const r = Ct({
      category: "replay.hydrate-error",
      data: {
        url: zf()
      }
    });
    gs(e, r)
  }
}
i(cI, "handleHydrationError");
function uI(e) {
  const t = ue();
  t && t.on("beforeAddBreadcrumb", n => lI(e, n))
}
i(uI, "handleBreadcrumbs");
function lI(e, t) {
  if (!e.isEnabled() || !Dh(t))
    return;
  const n = fI(t);
  n && gs(e, n)
}
i(lI, "beforeAddBreadcrumb");
function fI(e) {
  return !Dh(e) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.") ? null : e.category === "console" ? dI(e) : Ct(e)
}
i(fI, "normalizeBreadcrumb");
function dI(e) {
  const t = e.data && e.data.arguments;
  if (!Array.isArray(t) || t.length === 0)
    return Ct(e);
  let n = !1;
  const r = t.map(s => {
        if (!s)
          return s;
        if (typeof s == "string")
          return s.length > Us ? (n = !0,
              `${s.slice(0, Us)}…`) : s;
        if (typeof s == "object")
          try {
            const o = Nt(s, 7);
            return JSON.stringify(o).length > Us ? (n = !0,
                `${JSON.stringify(o, null, 2).slice(0, Us)}…`) : o
          } catch {}
        return s
      }
  );
  return Ct({
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
i(dI, "normalizeConsoleBreadcrumb");
function Dh(e) {
  return !!e.category
}
i(Dh, "isBreadcrumbWithCategory");
function hI(e, t) {
  return e.type || !e.exception || !e.exception.values || !e.exception.values.length ? !1 : !!(t.originalException && t.originalException.__rrweb__)
}
i(hI, "isRrwebError");
function pI(e, t) {
  e.triggerUserActivity(),
      e.addUpdate( () => t.timestamp ? (e.throttledAddEvent({
        type: ae.Custom,
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
i(pI, "addFeedbackBreadcrumb");
function mI(e, t) {
  return e.recordingMode !== "buffer" || t.message === nc || !t.exception || t.type ? !1 : Nh(e.getOptions().errorSampleRate)
}
i(mI, "shouldSampleForBufferEvent");
function yI(e) {
  return Object.assign( (t, n) => !e.isEnabled() || e.isPaused() ? t : rI(t) ? (delete t.breadcrumbs,
      t) : !hc(t) && !ga(t) && !xl(t) || !e.checkAndHandleExpiredSession() ? t : xl(t) ? (e.flush(),
      t.contexts.feedback.replay_id = e.getSessionId(),
      pI(e, t),
      t) : hI(t, n) && !e.getOptions()._experiments.captureExceptions ? (J && Z.log("Ignoring error from rrweb internals", t),
      null) : ((mI(e, t) || e.recordingMode === "session") && (t.tags = {
    ...t.tags,
    replayId: e.getSessionId()
  }),
      t), {
    id: "Replay"
  })
}
i(yI, "handleGlobalEventListener");
function Vi(e, t) {
  return t.map( ({type: n, start: r, end: s, name: o, data: c}) => {
        const l = e.throttledAddEvent({
          type: ae.Custom,
          timestamp: r,
          data: {
            tag: "performanceSpan",
            payload: {
              op: n,
              description: o,
              startTimestamp: r,
              endTimestamp: s,
              data: c
            }
          }
        });
        return typeof l == "string" ? Promise.resolve(null) : l
      }
  )
}
i(Vi, "createPerformanceSpans");
function gI(e) {
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
i(gI, "handleHistory");
function _I(e) {
  return t => {
    if (!e.isEnabled())
      return;
    const n = gI(t);
    n !== null && (e.getContext().urls.push(n.name),
        e.triggerUserActivity(),
        e.addUpdate( () => (Vi(e, [n]),
            !1)))
  }
}
i(_I, "handleHistorySpanListener");
function vI(e, t) {
  return J && e.getOptions()._experiments.traceInternals ? !1 : WS(t, ue())
}
i(vI, "shouldFilterRequest");
function Lh(e, t) {
  e.isEnabled() && t !== null && (vI(e, t.name) || e.addUpdate( () => (Vi(e, [t]),
      !0)))
}
i(Lh, "addNetworkBreadcrumb");
function Gi(e) {
  if (!e)
    return;
  const t = new TextEncoder;
  try {
    if (typeof e == "string")
      return t.encode(e).length;
    if (e instanceof URLSearchParams)
      return t.encode(e.toString()).length;
    if (e instanceof FormData) {
      const n = Hh(e);
      return t.encode(n).length
    }
    if (e instanceof Blob)
      return e.size;
    if (e instanceof ArrayBuffer)
      return e.byteLength
  } catch {}
}
i(Gi, "getBodySize");
function Uh(e) {
  if (!e)
    return;
  const t = parseInt(e, 10);
  return isNaN(t) ? void 0 : t
}
i(Uh, "parseContentLengthHeader");
function Bh(e) {
  try {
    if (typeof e == "string")
      return [e];
    if (e instanceof URLSearchParams)
      return [e.toString()];
    if (e instanceof FormData)
      return [Hh(e)];
    if (!e)
      return [void 0]
  } catch (t) {
    return J && Z.exception(t, "Failed to serialize body", e),
        [void 0, "BODY_PARSE_ERROR"]
  }
  return J && Z.info("Skipping network body because of body type", e),
      [void 0, "UNPARSEABLE_BODY_TYPE"]
}
i(Bh, "getBodyString");
function Ii(e, t) {
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
i(Ii, "mergeWarning");
function $h(e, t) {
  if (!t)
    return null;
  const {startTimestamp: n, endTimestamp: r, url: s, method: o, statusCode: c, request: l, response: f} = t;
  return {
    type: e,
    start: n / 1e3,
    end: r / 1e3,
    name: s,
    data: $e({
      method: o,
      statusCode: c,
      request: l,
      response: f
    })
  }
}
i($h, "makeNetworkReplayBreadcrumb");
function is(e) {
  return {
    headers: {},
    size: e,
    _meta: {
      warnings: ["URL_SKIPPED"]
    }
  }
}
i(is, "buildSkippedNetworkRequestOrResponse");
function hn(e, t, n) {
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
      , {body: s, warnings: o} = SI(n);
  return r.body = s,
  o && o.length > 0 && (r._meta = {
    warnings: o
  }),
      r
}
i(hn, "buildNetworkRequestOrResponse");
function _a(e, t) {
  return Object.entries(e).reduce( (n, [r,s]) => {
        const o = r.toLowerCase();
        return t.includes(o) && e[r] && (n[o] = s),
            n
      }
      , {})
}
i(_a, "getAllowedHeaders");
function Hh(e) {
  return new URLSearchParams(e).toString()
}
i(Hh, "_serializeFormData");
function SI(e) {
  if (!e || typeof e != "string")
    return {
      body: e
    };
  const t = e.length > pl
      , n = EI(e);
  if (t) {
    const r = e.slice(0, pl);
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
i(SI, "normalizeNetworkBody");
function EI(e) {
  const t = e[0]
      , n = e[e.length - 1];
  return t === "[" && n === "]" || t === "{" && n === "}"
}
i(EI, "_strIsProbablyJson");
function Ri(e, t) {
  const n = bI(e);
  return dn(n, t)
}
i(Ri, "urlMatches");
function bI(e, t=Ie.document.baseURI) {
  if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(Ie.location.origin))
    return e;
  const n = new URL(e,t);
  if (n.origin !== new URL(t).origin)
    return e;
  const r = n.href;
  return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
}
i(bI, "getFullUrl");
async function wI(e, t, n) {
  try {
    const r = await RI(e, t, n)
        , s = $h("resource.fetch", r);
    Lh(n.replay, s)
  } catch (r) {
    J && Z.exception(r, "Failed to capture fetch breadcrumb")
  }
}
i(wI, "captureFetchBreadcrumbToReplay");
function II(e, t) {
  const {input: n, response: r} = t
      , s = n ? jh(n) : void 0
      , o = Gi(s)
      , c = r ? Uh(r.headers.get("content-length")) : void 0;
  o !== void 0 && (e.data.request_body_size = o),
  c !== void 0 && (e.data.response_body_size = c)
}
i(II, "enrichFetchBreadcrumb");
async function RI(e, t, n) {
  const r = Date.now()
      , {startTimestamp: s=r, endTimestamp: o=r} = t
      , {url: c, method: l, status_code: f=0, request_body_size: h, response_body_size: p} = e.data
      , y = Ri(c, n.networkDetailAllowUrls) && !Ri(c, n.networkDetailDenyUrls)
      , v = y ? AI(n, t.input, h) : is(h)
      , b = await kI(y, n, t.response, p);
  return {
    startTimestamp: s,
    endTimestamp: o,
    url: c,
    method: l,
    statusCode: f,
    request: v,
    response: b
  }
}
i(RI, "_prepareFetchData");
function AI({networkCaptureBodies: e, networkRequestHeaders: t}, n, r) {
  const s = n ? NI(n, t) : {};
  if (!e)
    return hn(s, r, void 0);
  const o = jh(n)
      , [c,l] = Bh(o)
      , f = hn(s, r, c);
  return l ? Ii(f, l) : f
}
i(AI, "_getRequestInfo");
async function kI(e, {networkCaptureBodies: t, networkResponseHeaders: n}, r, s) {
  if (!e && s !== void 0)
    return is(s);
  const o = r ? qh(r.headers, n) : {};
  if (!r || !t && s !== void 0)
    return hn(o, s, void 0);
  const [c,l] = await PI(r)
      , f = OI(c, {
    networkCaptureBodies: t,
    responseBodySize: s,
    captureDetails: e,
    headers: o
  });
  return l ? Ii(f, l) : f
}
i(kI, "_getResponseInfo");
function OI(e, {networkCaptureBodies: t, responseBodySize: n, captureDetails: r, headers: s}) {
  try {
    const o = e && e.length && n === void 0 ? Gi(e) : n;
    return r ? t ? hn(s, o, e) : hn(s, o, void 0) : is(o)
  } catch (o) {
    return J && Z.exception(o, "Failed to serialize response body"),
        hn(s, n, void 0)
  }
}
i(OI, "getResponseData");
async function PI(e) {
  const t = TI(e);
  if (!t)
    return [void 0, "BODY_PARSE_ERROR"];
  try {
    return [await xI(t)]
  } catch (n) {
    return n instanceof Error && n.message.indexOf("Timeout") > -1 ? (J && Z.warn("Parsing text body from response timed out"),
        [void 0, "BODY_PARSE_TIMEOUT"]) : (J && Z.exception(n, "Failed to get text body from response"),
        [void 0, "BODY_PARSE_ERROR"])
  }
}
i(PI, "_parseFetchResponseBody");
function jh(e=[]) {
  if (!(e.length !== 2 || typeof e[1] != "object"))
    return e[1].body
}
i(jh, "_getFetchRequestArgBody");
function qh(e, t) {
  const n = {};
  return t.forEach(r => {
        e.get(r) && (n[r] = e.get(r))
      }
  ),
      n
}
i(qh, "getAllHeaders");
function NI(e, t) {
  return e.length === 1 && typeof e[0] != "string" ? Cl(e[0], t) : e.length === 2 ? Cl(e[1], t) : {}
}
i(NI, "getRequestHeaders");
function Cl(e, t) {
  if (!e)
    return {};
  const n = e.headers;
  return n ? n instanceof Headers ? qh(n, t) : Array.isArray(n) ? {} : _a(n, t) : {}
}
i(Cl, "getHeadersFromOptions");
function TI(e) {
  try {
    return e.clone()
  } catch (t) {
    J && Z.exception(t, "Failed to clone response body")
  }
}
i(TI, "_tryCloneResponse");
function xI(e) {
  return new Promise( (t, n) => {
        const r = pr( () => n(new Error("Timeout while trying to read response body")), 500);
        CI(e).then(s => t(s), s => n(s)).finally( () => clearTimeout(r))
      }
  )
}
i(xI, "_tryGetResponseText");
async function CI(e) {
  return await e.text()
}
i(CI, "_getResponseText");
async function MI(e, t, n) {
  try {
    const r = DI(e, t, n)
        , s = $h("resource.xhr", r);
    Lh(n.replay, s)
  } catch (r) {
    J && Z.exception(r, "Failed to capture xhr breadcrumb")
  }
}
i(MI, "captureXhrBreadcrumbToReplay");
function FI(e, t) {
  const {xhr: n, input: r} = t;
  if (!n)
    return;
  const s = Gi(r)
      , o = n.getResponseHeader("content-length") ? Uh(n.getResponseHeader("content-length")) : $I(n.response, n.responseType);
  s !== void 0 && (e.data.request_body_size = s),
  o !== void 0 && (e.data.response_body_size = o)
}
i(FI, "enrichXhrBreadcrumb");
function DI(e, t, n) {
  const r = Date.now()
      , {startTimestamp: s=r, endTimestamp: o=r, input: c, xhr: l} = t
      , {url: f, method: h, status_code: p=0, request_body_size: y, response_body_size: v} = e.data;
  if (!f)
    return null;
  if (!l || !Ri(f, n.networkDetailAllowUrls) || Ri(f, n.networkDetailDenyUrls)) {
    const x = is(y)
        , N = is(v);
    return {
      startTimestamp: s,
      endTimestamp: o,
      url: f,
      method: h,
      statusCode: p,
      request: x,
      response: N
    }
  }
  const b = l[Nn]
      , S = b ? _a(b.request_headers, n.networkRequestHeaders) : {}
      , R = _a(LI(l), n.networkResponseHeaders)
      , [k,O] = n.networkCaptureBodies ? Bh(c) : [void 0]
      , [L,U] = n.networkCaptureBodies ? UI(l) : [void 0]
      , V = hn(S, y, k)
      , q = hn(R, v, L);
  return {
    startTimestamp: s,
    endTimestamp: o,
    url: f,
    method: h,
    statusCode: p,
    request: O ? Ii(V, O) : V,
    response: U ? Ii(q, U) : q
  }
}
i(DI, "_prepareXhrData");
function LI(e) {
  const t = e.getAllResponseHeaders();
  return t ? t.split(`\r
`).reduce( (n, r) => {
        const [s,o] = r.split(": ");
        return o && (n[s.toLowerCase()] = o),
            n
      }
      , {}) : {}
}
i(LI, "getResponseHeaders");
function UI(e) {
  const t = [];
  try {
    return [e.responseText]
  } catch (n) {
    t.push(n)
  }
  try {
    return BI(e.response, e.responseType)
  } catch (n) {
    t.push(n)
  }
  return J && Z.warn("Failed to get xhr response body", ...t),
      [void 0]
}
i(UI, "_getXhrResponseBody");
function BI(e, t) {
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
    return J && Z.exception(n, "Failed to serialize body", e),
        [void 0, "BODY_PARSE_ERROR"]
  }
  return J && Z.info("Skipping network body because of body type", e),
      [void 0, "UNPARSEABLE_BODY_TYPE"]
}
i(BI, "_parseXhrResponse");
function $I(e, t) {
  try {
    const n = t === "json" && e && typeof e == "object" ? JSON.stringify(e) : e;
    return Gi(n)
  } catch {
    return
  }
}
i($I, "_getBodySize");
function HI(e) {
  const t = ue();
  try {
    const {networkDetailAllowUrls: n, networkDetailDenyUrls: r, networkCaptureBodies: s, networkRequestHeaders: o, networkResponseHeaders: c} = e.getOptions()
        , l = {
      replay: e,
      networkDetailAllowUrls: n,
      networkDetailDenyUrls: r,
      networkCaptureBodies: s,
      networkRequestHeaders: o,
      networkResponseHeaders: c
    };
    t && t.on("beforeAddBreadcrumb", (f, h) => jI(l, f, h))
  } catch {}
}
i(HI, "handleNetworkBreadcrumbs");
function jI(e, t, n) {
  if (t.data)
    try {
      qI(t) && WI(n) && (FI(t, n),
          MI(t, n, e)),
      zI(t) && VI(n) && (II(t, n),
          wI(t, n, e))
    } catch (r) {
      J && Z.exception(r, "Error when enriching network breadcrumb")
    }
}
i(jI, "beforeAddNetworkBreadcrumb");
function qI(e) {
  return e.category === "xhr"
}
i(qI, "_isXhrBreadcrumb");
function zI(e) {
  return e.category === "fetch"
}
i(zI, "_isFetchBreadcrumb");
function WI(e) {
  return e && e.xhr
}
i(WI, "_isXhrHint");
function VI(e) {
  return e && e.response
}
i(VI, "_isFetchHint");
function GI(e) {
  const t = ue();
  Jd(w1(e)),
      Hi(_I(e)),
      uI(e),
      HI(e);
  const n = yI(e);
  PS(n),
  t && (t.on("beforeSendEvent", aI(e)),
      t.on("afterSendEvent", sI(e)),
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
i(GI, "addGlobalListeners");
async function YI(e) {
  try {
    return Promise.all(Vi(e, [KI(Ie.performance.memory)]))
  } catch {
    return []
  }
}
i(YI, "addMemoryEntry");
function KI(e) {
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
i(KI, "createMemoryEntry");
function XI(e, t, n) {
  let r, s, o;
  const c = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
  function l() {
    return f(),
        r = e(),
        r
  }
  i(l, "invokeFunc");
  function f() {
    s !== void 0 && clearTimeout(s),
    o !== void 0 && clearTimeout(o),
        s = o = void 0
  }
  i(f, "cancelTimers");
  function h() {
    return s !== void 0 || o !== void 0 ? l() : r
  }
  i(h, "flush");
  function p() {
    return s && clearTimeout(s),
        s = pr(l, t),
    c && o === void 0 && (o = pr(l, c)),
        r
  }
  return i(p, "debounced"),
      p.cancel = f,
      p.flush = h,
      p
}
i(XI, "debounce");
function QI(e) {
  let t = !1;
  return (n, r) => {
    if (!e.checkAndHandleExpiredSession()) {
      J && Z.warn("Received replay event after session expired.");
      return
    }
    const s = r || !t;
    t = !0,
    e.clickDetector && _1(e.clickDetector, n),
        e.addUpdate( () => {
              if (e.recordingMode === "buffer" && s && e.setInitialState(),
                  !dc(e, n, s))
                return !0;
              if (!s)
                return !1;
              const o = e.session;
              if (ZI(e, s),
              e.recordingMode === "buffer" && o && e.eventBuffer) {
                const c = e.eventBuffer.getEarliestTimestamp();
                c && (J && Z.info(`Updating session start time to earliest event in buffer to ${new Date(c)}`),
                    o.started = c,
                e.getOptions().stickySession && fc(o))
              }
              return o && o.previousSessionId || e.recordingMode === "session" && e.flush(),
                  !0
            }
        )
  }
}
i(QI, "getHandleRecordingEmit");
function JI(e) {
  const t = e.getOptions();
  return {
    type: ae.Custom,
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
i(JI, "createOptionsEvent");
function ZI(e, t) {
  !t || !e.session || e.session.segmentId !== 0 || dc(e, JI(e), !1)
}
i(ZI, "addSettingsEvent");
function eR() {
  const e = Re().getPropagationContext().dsc;
  e && delete e.replay_id;
  const t = Ve();
  if (t) {
    const n = vn(t);
    delete n.replay_id
  }
}
i(eR, "resetReplayIdOnDynamicSamplingContext");
function tR(e, t, n, r) {
  return jn(ud(e, Ha(e), r, n), [[{
    type: "replay_event"
  }, e], [{
    type: "replay_recording",
    length: typeof t == "string" ? new TextEncoder().encode(t).length : t.length
  }, t]])
}
i(tR, "createReplayEnvelope");
function nR({recordingData: e, headers: t}) {
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
i(nR, "prepareRecordingData");
async function rR({client: e, scope: t, replayId: n, event: r}) {
  const s = typeof e._integrations == "object" && e._integrations !== null && !Array.isArray(e._integrations) ? Object.keys(e._integrations) : void 0
      , o = {
    event_id: n,
    integrations: s
  };
  e.emit("preprocessEvent", r, o);
  const c = await kd(e.getOptions(), r, o, t, e, ft());
  if (!c)
    return null;
  c.platform = c.platform || "javascript";
  const l = e.getSdkMetadata()
      , {name: f, version: h} = l && l.sdk || {};
  return c.sdk = {
    ...c.sdk,
    name: f || "sentry.javascript.unknown",
    version: h || "0.0.0"
  },
      c
}
i(rR, "prepareReplayEvent");
async function sR({recordingData: e, replayId: t, segmentId: n, eventContext: r, timestamp: s, session: o}) {
  const c = nR({
    recordingData: e,
    headers: {
      segment_id: n
    }
  })
      , {urls: l, errorIds: f, traceIds: h, initialTimestamp: p} = r
      , y = ue()
      , v = Re()
      , b = y && y.getTransport()
      , S = y && y.getDsn();
  if (!y || !b || !S || !o.sampled)
    return Jt({});
  const R = {
    type: Ub,
    replay_start_timestamp: p / 1e3,
    timestamp: s / 1e3,
    error_ids: f,
    trace_ids: h,
    urls: l,
    replay_id: t,
    segment_id: n,
    replay_type: o.sampled
  }
      , k = await rR({
    scope: v,
    client: y,
    replayId: t,
    event: R
  });
  if (!k)
    return y.recordDroppedEvent("event_processor", "replay", R),
    J && Z.info("An event processor returned `null`, will not send event."),
        Jt({});
  delete k.sdkProcessingMetadata;
  const O = tR(k, c, S, y.getOptions().tunnel);
  let L;
  try {
    L = await b.send(O)
  } catch (V) {
    const q = new Error(nc);
    try {
      q.cause = V
    } catch {}
    throw q
  }
  if (typeof L.statusCode == "number" && (L.statusCode < 200 || L.statusCode >= 300))
    throw new zh(L.statusCode);
  const U = fd({}, L);
  if (ld(U, "replay"))
    throw new pc(U);
  return L
}
i(sR, "sendReplayRequest");
class zh extends Error {
  static{i(this, "TransportStatusCodeError")
  }constructor(t) {
    super(`Transport returned status code ${t}`)
  }
}
class pc extends Error {
  static{i(this, "RateLimitError")
  }constructor(t) {
    super("Rate limit hit"),
        this.rateLimits = t
  }
}
async function Wh(e, t={
  count: 0,
  interval: zb
}) {
  const {recordingData: n, onError: r} = e;
  if (n.length)
    try {
      return await sR(e),
          !0
    } catch (s) {
      if (s instanceof zh || s instanceof pc)
        throw s;
      if (Ya("Replays", {
        _retryCount: t.count
      }),
      r && r(s),
      t.count >= Wb) {
        const o = new Error(`${nc} - max retries exceeded`);
        try {
          o.cause = s
        } catch {}
        throw o
      }
      return t.interval *= ++t.count,
          new Promise( (o, c) => {
                pr(async () => {
                      try {
                        await Wh(e, t),
                            o(!0)
                      } catch (l) {
                        c(l)
                      }
                    }
                    , t.interval)
              }
          )
    }
}
i(Wh, "sendReplay");
const Vh = "__THROTTLED"
    , iR = "__SKIPPED";
function oR(e, t, n) {
  const r = new Map
      , s = i(l => {
        const f = l - n;
        r.forEach( (h, p) => {
              p < f && r.delete(p)
            }
        )
      }
      , "_cleanup")
      , o = i( () => [...r.values()].reduce( (l, f) => l + f, 0), "_getTotalCount");
  let c = !1;
  return (...l) => {
    const f = Math.floor(Date.now() / 1e3);
    if (s(f),
    o() >= t) {
      const p = c;
      return c = !0,
          p ? iR : Vh
    }
    c = !1;
    const h = r.get(f) || 0;
    return r.set(f, h + 1),
        e(...l)
  }
}
i(oR, "throttle");
class fn {
  static{i(this, "ReplayContainer")
  }constructor({options: t, recordingOptions: n}) {
    fn.prototype.__init.call(this),
        fn.prototype.__init2.call(this),
        fn.prototype.__init3.call(this),
        fn.prototype.__init4.call(this),
        fn.prototype.__init5.call(this),
        fn.prototype.__init6.call(this),
        this.eventBuffer = null,
        this.performanceEntries = [],
        this.replayPerformanceEntries = [],
        this.recordingMode = "session",
        this.timeouts = {
          sessionIdlePause: Bb,
          sessionIdleExpire: $b
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
        this._debouncedFlush = XI( () => this._flush(), this._options.flushMinDelay, {
          maxWait: this._options.flushMaxDelay
        }),
        this._throttledAddEvent = oR( (c, l) => tI(this, c, l), 300, 5);
    const {slowClickTimeout: r, slowClickIgnoreSelectors: s} = this.getOptions()
        , o = r ? {
      threshold: Math.min(Vb, r),
      timeout: r,
      scrollTimeout: Gb,
      ignoreSelector: s ? s.join(",") : ""
    } : void 0;
    if (o && (this.clickDetector = new p1(this,o)),
        J) {
      const c = t._experiments;
      Z.setConfig({
        captureExceptions: !!c.captureExceptions,
        traceInternals: !!c.traceInternals
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
    J && Z.exception(t),
    this._options.onError && this._options.onError(t)
  }
  initializeSampling(t) {
    const {errorSampleRate: n, sessionSampleRate: r} = this._options
        , s = n <= 0 && r <= 0;
    if (this._requiresManualStart = s,
        !s) {
      if (this._initializeSessionForSampling(t),
          !this.session) {
        J && Z.exception(new Error("Unable to initialize and create session"));
        return
      }
      this.session.sampled !== !1 && (this.recordingMode = this.session.sampled === "buffer" && this.session.segmentId === 0 ? "buffer" : "session",
      J && Z.infoTick(`Starting replay in ${this.recordingMode} mode`),
          this._initializeRecording())
    }
  }
  start() {
    if (this._isEnabled && this.recordingMode === "session") {
      J && Z.info("Recording is already in progress");
      return
    }
    if (this._isEnabled && this.recordingMode === "buffer") {
      J && Z.info("Buffering is in progress, call `flush()` to save the replay");
      return
    }
    J && Z.infoTick("Starting replay in session mode"),
        this._updateUserActivity();
    const t = Oo({
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
      J && Z.info("Buffering is in progress, call `flush()` to save the replay");
      return
    }
    J && Z.infoTick("Starting replay in buffer mode");
    const t = Oo({
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
      this._stopRecording = Yt({
        ...this._recordingOptions,
        ...this.recordingMode === "buffer" ? {
          checkoutEveryNms: qb
        } : this._options._experiments.continuousCheckout && {
          checkoutEveryNms: Math.max(36e4, this._options._experiments.continuousCheckout)
        },
        emit: QI(this),
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
        J && Z.info(`Stopping Replay${n ? ` triggered by ${n}` : ""}`),
            eR(),
            this._removeListeners(),
            this.stopRecording(),
            this._debouncedFlush.cancel(),
        t && await this._flush({
          force: !0
        }),
        this.eventBuffer && this.eventBuffer.destroy(),
            this.eventBuffer = null,
            X1(this)
      } catch (r) {
        this.handleException(r)
      }
    }
  }
  pause() {
    this._isPaused || (this._isPaused = !0,
        this.stopRecording(),
    J && Z.info("Pausing replay"))
  }
  resume() {
    !this._isPaused || !this._checkSession() || (this._isPaused = !1,
        this.startRecording(),
    J && Z.info("Resuming replay"))
  }
  async sendBufferedReplayOrFlush({continueRecording: t=!0}={}) {
    if (this.recordingMode === "session")
      return this.flushImmediate();
    const n = Date.now();
    J && Z.info("Converting buffer to session"),
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
    if (this._lastActivity && ya(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && this.session.sampled === "session") {
      this.pause();
      return
    }
    return !!this._checkSession()
  }
  setInitialState() {
    const t = `${Ie.location.pathname}${Ie.location.hash}${Ie.location.search}`
        , n = `${Ie.location.origin}${t}`;
    this.performanceEntries = [],
        this.replayPerformanceEntries = [],
        this._clearContext(),
        this._context.initialUrl = n,
        this._context.initialTimestamp = Date.now(),
        this._context.urls.push(n)
  }
  throttledAddEvent(t, n) {
    const r = this._throttledAddEvent(t, n);
    if (r === Vh) {
      const s = Ct({
        category: "replay.throttled"
      });
      this.addUpdate( () => !dc(this, {
        type: a1,
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
    const t = this.lastActiveSpan || Ve()
        , n = t && We(t)
        , s = (n && ye(n).data || {})[Wt];
    if (!(!n || !s || !["route", "custom"].includes(s)))
      return ye(n).description
  }
  _initializeRecording() {
    this.setInitialState(),
        this._updateSessionActivity(),
        this.eventBuffer = G1({
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
        , r = Oo({
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
    return Ch(t, {
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
      Ie.document.addEventListener("visibilitychange", this._handleVisibilityChange),
          Ie.addEventListener("blur", this._handleWindowBlur),
          Ie.addEventListener("focus", this._handleWindowFocus),
          Ie.addEventListener("keydown", this._handleKeyboardEvent),
      this.clickDetector && this.clickDetector.addListeners(),
      this._hasInitializedCoreListeners || (GI(this),
          this._hasInitializedCoreListeners = !0)
    } catch (t) {
      this.handleException(t)
    }
    this._performanceCleanupCallback = H1(this)
  }
  _removeListeners() {
    try {
      Ie.document.removeEventListener("visibilitychange", this._handleVisibilityChange),
          Ie.removeEventListener("blur", this._handleWindowBlur),
          Ie.removeEventListener("focus", this._handleWindowFocus),
          Ie.removeEventListener("keydown", this._handleKeyboardEvent),
      this.clickDetector && this.clickDetector.removeListeners(),
      this._performanceCleanupCallback && this._performanceCleanupCallback()
    } catch (t) {
      this.handleException(t)
    }
  }
  __init() {
    this._handleVisibilityChange = () => {
      Ie.document.visibilityState === "visible" ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
    }
  }
  __init2() {
    this._handleWindowBlur = () => {
      const t = Ct({
        category: "ui.blur"
      });
      this._doChangeToBackgroundTasks(t)
    }
  }
  __init3() {
    this._handleWindowFocus = () => {
      const t = Ct({
        category: "ui.focus"
      });
      this._doChangeToForegroundTasks(t)
    }
  }
  __init4() {
    this._handleKeyboardEvent = t => {
      k1(this, t)
    }
  }
  _doChangeToBackgroundTasks(t) {
    !this.session || xh(this.session, {
      maxReplayDuration: this._options.maxReplayDuration,
      sessionIdleExpire: this.timeouts.sessionIdleExpire
    }) || (t && this._createCustomBreadcrumb(t),
        this.conditionalFlush())
  }
  _doChangeToForegroundTasks(t) {
    if (!this.session)
      return;
    if (!this.checkAndHandleExpiredSession()) {
      J && Z.info("Document has become active, but session has expired");
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
            type: ae.Custom,
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
    let t = T1(this.performanceEntries).concat(this.replayPerformanceEntries);
    if (this.performanceEntries = [],
        this.replayPerformanceEntries = [],
        this._requiresManualStart) {
      const n = this._context.initialTimestamp / 1e3;
      t = t.filter(r => r.start >= n)
    }
    return Promise.all(Vi(this, t))
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
      J && Z.error("No session or eventBuffer found to flush.");
      return
    }
    if (await this._addPerformanceEntries(),
    !(!this.eventBuffer || !this.eventBuffer.hasEvents) && (await YI(this),
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
        await Wh({
          replayId: t,
          recordingData: o,
          segmentId: s,
          eventContext: r,
          session: this.session,
          timestamp: n,
          onError: c => this.handleException(c)
        })
      } catch (n) {
        this.handleException(n),
            this.stop({
              reason: "sendReplay"
            });
        const r = ue();
        if (r) {
          const s = n instanceof pc ? "ratelimit_backoff" : "send_error";
          r.recordDroppedEvent(s, "replay")
        }
      }
  }
  __init5() {
    this._flush = async ({force: t=!1}={}) => {
      if (!this._isEnabled && !t)
        return;
      if (!this.checkAndHandleExpiredSession()) {
        J && Z.error("Attempting to finish replay event after session expired.");
        return
      }
      if (!this.session)
        return;
      const n = this.session.started
          , s = Date.now() - n;
      this._debouncedFlush.cancel();
      const o = s < this._options.minReplayDuration
          , c = s > this._options.maxReplayDuration + 5e3;
      if (o || c) {
        J && Z.info(`Session duration (${Math.floor(s / 1e3)}s) is too ${o ? "short" : "long"}, not sending replay.`),
        o && this._debouncedFlush();
        return
      }
      const l = this.eventBuffer;
      l && this.session.segmentId === 0 && !l.hasCheckout && J && Z.info("Flushing initial segment without checkout.");
      const f = !!this._flushLock;
      this._flushLock || (this._flushLock = this._runFlush());
      try {
        await this._flushLock
      } catch (h) {
        this.handleException(h)
      } finally {
        this._flushLock = void 0,
        f && this._debouncedFlush()
      }
    }
  }
  _maybeSaveSession() {
    this.session && this._options.stickySession && fc(this.session)
  }
  __init6() {
    this._onMutationHandler = t => {
      const n = t.length
          , r = this._options.mutationLimit
          , s = this._options.mutationBreadcrumbLimit
          , o = r && n > r;
      if (n > s || o) {
        const c = Ct({
          category: "replay.mutations",
          data: {
            count: n,
            limit: o
          }
        });
        this._createCustomBreadcrumb(c)
      }
      return o ? (this.stop({
        reason: "mutationLimit",
        forceFlush: this.recordingMode === "session"
      }),
          !1) : !0
    }
  }
}
function jr(e, t) {
  return [...e, ...t].join(",")
}
i(jr, "getOption");
function aR({mask: e, unmask: t, block: n, unblock: r, ignore: s}) {
  const o = ['base[href="/"]']
      , c = jr(e, [".sentry-mask", "[data-sentry-mask]"])
      , l = jr(t, []);
  return {
    maskTextSelector: c,
    unmaskTextSelector: l,
    blockSelector: jr(n, [".sentry-block", "[data-sentry-block]", ...o]),
    unblockSelector: jr(r, []),
    ignoreSelector: jr(s, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
  }
}
i(aR, "getPrivacyOptions");
function cR({el: e, key: t, maskAttributes: n, maskAllText: r, privacyOptions: s, value: o}) {
  return !r || s.unmaskTextSelector && e.matches(s.unmaskTextSelector) ? o : n.includes(t) || t === "value" && e.tagName === "INPUT" && ["submit", "button"].includes(e.getAttribute("type") || "") ? o.replace(/[\S]/g, "*") : o
}
i(cR, "maskAttribute");
const Ml = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]'
    , uR = ["content-length", "content-type", "accept"];
let Fl = !1;
const lR = i(e => new Yi(e), "replayIntegration");
class Yi {
  static{i(this, "Replay")
  }static __initStatic() {
    this.id = "Replay"
  }
  constructor({flushMinDelay: t=Hb, flushMaxDelay: n=jb, minReplayDuration: r=Yb, maxReplayDuration: s=ml, stickySession: o=!0, useCompression: c=!0, workerUrl: l, _experiments: f={}, maskAllText: h=!0, maskAllInputs: p=!0, blockAllMedia: y=!0, mutationBreadcrumbLimit: v=750, mutationLimit: b=1e4, slowClickTimeout: S=7e3, slowClickIgnoreSelectors: R=[], networkDetailAllowUrls: k=[], networkDetailDenyUrls: O=[], networkCaptureBodies: L=!0, networkRequestHeaders: U=[], networkResponseHeaders: V=[], mask: q=[], maskAttributes: x=["title", "placeholder"], unmask: N=[], block: F=[], unblock: H=[], ignore: C=[], maskFn: z, beforeAddRecordingEvent: X, beforeErrorSampling: M, onError: Y}={}) {
    this.name = Yi.id;
    const Fe = aR({
      mask: q,
      unmask: N,
      block: F,
      unblock: H,
      ignore: C
    });
    if (this._recordingOptions = {
      maskAllInputs: p,
      maskAllText: h,
      maskInputOptions: {
        password: !0
      },
      maskTextFn: z,
      maskInputFn: z,
      maskAttributeFn: (re, xe, fe) => cR({
        maskAttributes: x,
        maskAllText: h,
        privacyOptions: Fe,
        key: re,
        value: xe,
        el: fe
      }),
      ...Fe,
      slimDOMOptions: "all",
      inlineStylesheet: !0,
      inlineImages: !1,
      collectFonts: !0,
      errorHandler: re => {
        try {
          re.__rrweb__ = !0
        } catch {}
      }
    },
        this._initialOptions = {
          flushMinDelay: t,
          flushMaxDelay: n,
          minReplayDuration: Math.min(r, Kb),
          maxReplayDuration: Math.min(s, ml),
          stickySession: o,
          useCompression: c,
          workerUrl: l,
          blockAllMedia: y,
          maskAllInputs: p,
          maskAllText: h,
          mutationBreadcrumbLimit: v,
          mutationLimit: b,
          slowClickTimeout: S,
          slowClickIgnoreSelectors: R,
          networkDetailAllowUrls: k,
          networkDetailDenyUrls: O,
          networkCaptureBodies: L,
          networkRequestHeaders: Dl(U),
          networkResponseHeaders: Dl(V),
          beforeAddRecordingEvent: X,
          beforeErrorSampling: M,
          onError: Y,
          _experiments: f
        },
    this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${Ml}` : Ml),
    this._isInitialized && Tu())
      throw new Error("Multiple Sentry Session Replay instances are not supported");
    this._isInitialized = !0
  }
  get _isInitialized() {
    return Fl
  }
  set _isInitialized(t) {
    Fl = t
  }
  afterAllSetup(t) {
    !Tu() || this._replay || (this._setup(t),
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
    const n = fR(this._initialOptions, t);
    this._replay = new fn({
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
Yi.__initStatic();
function fR(e, t) {
  const n = t.getOptions()
      , r = {
    sessionSampleRate: 0,
    errorSampleRate: 0,
    ...$e(e)
  }
      , s = hi(n.replaysSessionSampleRate)
      , o = hi(n.replaysOnErrorSampleRate);
  return s == null && o == null && Sr( () => {}
  ),
  s != null && (r.sessionSampleRate = s),
  o != null && (r.errorSampleRate = o),
      r
}
i(fR, "loadReplayOptionsFromClient");
function Dl(e) {
  return [...uR, ...e.map(t => t.toLowerCase())]
}
i(Dl, "_getMergedNetworkHeaders");
const Ll = new WeakMap
    , Po = new Map
    , ei = {
  traceFetch: !0,
  traceXHR: !0,
  enableHTTPTimings: !0,
  trackFetchStreamPerformance: !1
};
function dR(e, t) {
  const {traceFetch: n, traceXHR: r, trackFetchStreamPerformance: s, shouldCreateSpanForRequest: o, enableHTTPTimings: c, tracePropagationTargets: l} = {
    traceFetch: ei.traceFetch,
    traceXHR: ei.traceXHR,
    trackFetchStreamPerformance: ei.trackFetchStreamPerformance,
    ...t
  }
      , f = typeof o == "function" ? o : y => !0
      , h = i(y => yR(y, l), "shouldAttachHeadersWithTargets")
      , p = {};
  n && (e.addEventProcessor(y => (y.type === "transaction" && y.spans && y.spans.forEach(v => {
        if (v.op === "http.client") {
          const b = Po.get(v.span_id);
          b && (v.timestamp = b / 1e3,
              Po.delete(v.span_id))
        }
      }
  ),
      y)),
  s && q_(y => {
        if (y.response) {
          const v = Ll.get(y.response);
          v && y.endTimestamp && Po.set(v, y.endTimestamp)
        }
      }
  ),
      Zf(y => {
            const v = _E(y, f, h, p);
            if (y.response && y.fetchData.__span && Ll.set(y.response, y.fetchData.__span),
                v) {
              const b = Gh(y.fetchData.url)
                  , S = b ? Mn(b).host : void 0;
              v.setAttributes({
                "http.url": b,
                "server.address": S
              })
            }
            c && v && Ul(v)
          }
      )),
  r && eh(y => {
        const v = gR(y, f, h, p);
        c && v && Ul(v)
      }
  )
}
i(dR, "instrumentOutgoingRequests");
function hR(e) {
  return e.entryType === "resource" && "initiatorType"in e && typeof e.nextHopProtocol == "string" && (e.initiatorType === "fetch" || e.initiatorType === "xmlhttprequest")
}
i(hR, "isPerformanceResourceTiming");
function Ul(e) {
  const {url: t} = ye(e).data || {};
  if (!t || typeof t != "string")
    return;
  const n = hr("resource", ({entries: r}) => {
        r.forEach(s => {
              hR(s) && s.name.endsWith(t) && (mR(s).forEach(c => e.setAttribute(...c)),
                  setTimeout(n))
            }
        )
      }
  )
}
i(Ul, "addHTTPTimings");
function pR(e) {
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
i(pR, "extractNetworkProtocol");
function Ot(e=0) {
  return ((Ze || performance.timeOrigin) + e) / 1e3
}
i(Ot, "getAbsoluteTime");
function mR(e) {
  const {name: t, version: n} = pR(e.nextHopProtocol)
      , r = [];
  return r.push(["network.protocol.version", n], ["network.protocol.name", t]),
      Ze ? [...r, ["http.request.redirect_start", Ot(e.redirectStart)], ["http.request.fetch_start", Ot(e.fetchStart)], ["http.request.domain_lookup_start", Ot(e.domainLookupStart)], ["http.request.domain_lookup_end", Ot(e.domainLookupEnd)], ["http.request.connect_start", Ot(e.connectStart)], ["http.request.secure_connection_start", Ot(e.secureConnectionStart)], ["http.request.connection_end", Ot(e.connectEnd)], ["http.request.request_start", Ot(e.requestStart)], ["http.request.response_start", Ot(e.responseStart)], ["http.request.response_end", Ot(e.responseEnd)]] : r
}
i(mR, "resourceTimingEntryToSpanData");
function yR(e, t) {
  const n = se.location && se.location.href;
  if (n) {
    let r, s;
    try {
      r = new URL(e,n),
          s = new URL(n).origin
    } catch {
      return !1
    }
    const o = r.origin === s;
    return t ? dn(r.toString(), t) || o && dn(r.pathname, t) : o
  } else {
    const r = !!e.match(/^\/(?!\/)/);
    return t ? dn(e, t) : r
  }
}
i(yR, "shouldAttachHeaders");
function gR(e, t, n, r) {
  const s = e.xhr
      , o = s && s[Nn];
  if (!s || s.__sentry_own_request__ || !o)
    return;
  const c = Zt() && t(o.url);
  if (e.endTimestamp && c) {
    const v = s.__sentry_xhr_span_id__;
    if (!v)
      return;
    const b = r[v];
    b && o.status_code !== void 0 && (pd(b, o.status_code),
        b.end(),
        delete r[v]);
    return
  }
  const l = Gh(o.url)
      , f = l ? Mn(l).host : void 0
      , h = !!Ve()
      , p = c && h ? Sn({
    name: `${o.method} ${o.url}`,
    attributes: {
      type: "xhr",
      "http.method": o.method,
      "http.url": l,
      url: o.url,
      "server.address": f,
      [je]: "auto.http.browser",
      [Bn]: "http.client"
    }
  }) : new br;
  s.__sentry_xhr_span_id__ = p.spanContext().spanId,
      r[s.__sentry_xhr_span_id__] = p;
  const y = ue();
  return s.setRequestHeader && n(o.url) && y && _R(s, y, Zt() && h ? p : void 0),
      p
}
i(gR, "xhrCallback");
function _R(e, t, n) {
  const r = Re()
      , s = ft()
      , {traceId: o, spanId: c, sampled: l, dsc: f} = {
    ...s.getPropagationContext(),
    ...r.getPropagationContext()
  }
      , h = n && Zt() ? gd(n) : $a(o, c, l)
      , p = cd(f || (n ? vn(n) : Bi(o, t)));
  vR(e, h, p)
}
i(_R, "addTracingHeadersToXhrRequest");
function vR(e, t, n) {
  try {
    e.setRequestHeader("sentry-trace", t),
    n && e.setRequestHeader(er, n)
  } catch {}
}
i(vR, "setHeaderOnXhr");
function Gh(e) {
  try {
    return new URL(e,se.location.origin).href
  } catch {
    return
  }
}
i(Gh, "getFullURL");
function SR() {
  se && se.document ? se.document.addEventListener("visibilitychange", () => {
        const e = Ve();
        if (!e)
          return;
        const t = We(e);
        if (se.document.hidden && t) {
          const n = "cancelled"
              , {op: r, status: s} = ye(t);
          It && D.log(`[Tracing] Transaction: ${n} -> since tab moved to the background, op: ${r}`),
          s || t.setStatus({
            code: He,
            message: n
          }),
              t.setAttribute("sentry.cancellation_reason", "document.hidden"),
              t.end()
        }
      }
  ) : It && D.warn("[Tracing] Could not set up background tab detection due to lack of global document")
}
i(SR, "registerBackgroundTabDetection");
const ER = "BrowserTracing"
    , bR = {
  ...Xs,
  instrumentNavigation: !0,
  instrumentPageLoad: !0,
  markBackgroundSpan: !0,
  enableLongTask: !0,
  enableLongAnimationFrame: !0,
  enableInp: !0,
  _experiments: {},
  ...ei
}
    , wR = i( (e={}) => {
      Wv();
      const {enableInp: t, enableLongTask: n, enableLongAnimationFrame: r, _experiments: {enableInteractions: s, enableStandaloneClsSpans: o}, beforeStartSpan: c, idleTimeout: l, finalTimeout: f, childSpanTimeout: h, markBackgroundSpan: p, traceFetch: y, traceXHR: v, trackFetchStreamPerformance: b, shouldCreateSpanForRequest: S, enableHTTPTimings: R, instrumentPageLoad: k, instrumentNavigation: O} = {
        ...bR,
        ...e
      }
          , L = y0({
        recordClsStandaloneSpans: o || !1
      });
      t && $0(),
          r && he.PerformanceObserver && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame") ? _0() : n && g0(),
      s && v0();
      const U = {
        name: void 0,
        source: void 0
      };
      function V(q, x) {
        const N = x.op === "pageload"
            , F = c ? c(x) : x
            , H = F.attributes || {};
        x.name !== F.name && (H[Wt] = "custom",
            F.attributes = H),
            U.name = F.name,
            U.source = H[Wt];
        const C = Ad(F, {
          idleTimeout: l,
          finalTimeout: f,
          childSpanTimeout: h,
          disableAutoFinish: N,
          beforeSpanEnd: X => {
            L(),
                I0(X, {
                  recordClsOnPageloadSpan: !o
                })
          }
        });
        function z() {
          ["interactive", "complete"].includes(se.document.readyState) && q.emit("idleSpanEnableAutoFinish", C)
        }
        return i(z, "emitFinish"),
        N && se.document && (se.document.addEventListener("readystatechange", () => {
              z()
            }
        ),
            z()),
            C
      }
      return i(V, "_createRouteSpan"),
          {
            name: ER,
            afterAllSetup(q) {
              let x, N = se.location && se.location.href;
              q.on("startNavigationSpan", F => {
                    ue() === q && (x && !ye(x).timestamp && (It && D.log(`[Tracing] Finishing current root span with op: ${ye(x).op}`),
                        x.end()),
                        x = V(q, {
                          op: "navigation",
                          ...F
                        }))
                  }
              ),
                  q.on("startPageLoadSpan", (F, H={}) => {
                        if (ue() !== q)
                          return;
                        x && !ye(x).timestamp && (It && D.log(`[Tracing] Finishing current root span with op: ${ye(x).op}`),
                            x.end());
                        const C = H.sentryTrace || Bl("sentry-trace")
                            , z = H.baggage || Bl("baggage")
                            , X = dv(C, z);
                        Re().setPropagationContext(X),
                            x = V(q, {
                              op: "pageload",
                              ...F
                            })
                      }
                  ),
                  q.on("spanEnd", F => {
                        const H = ye(F).op;
                        if (F !== We(F) || H !== "navigation" && H !== "pageload")
                          return;
                        const C = Re()
                            , z = C.getPropagationContext();
                        C.setPropagationContext({
                          ...z,
                          sampled: z.sampled !== void 0 ? z.sampled : qn(F),
                          dsc: z.dsc || vn(F)
                        })
                      }
                  ),
              se.location && (k && IR(q, {
                name: se.location.pathname,
                startTime: Ze ? Ze / 1e3 : void 0,
                attributes: {
                  [Wt]: "url",
                  [je]: "auto.pageload.browser"
                }
              }),
              O && Hi( ({to: F, from: H}) => {
                    if (H === void 0 && N && N.indexOf(F) !== -1) {
                      N = void 0;
                      return
                    }
                    H !== F && (N = void 0,
                        RR(q, {
                          name: se.location.pathname,
                          attributes: {
                            [Wt]: "url",
                            [je]: "auto.navigation.browser"
                          }
                        }))
                  }
              )),
              p && SR(),
              s && AR(l, f, h, U),
              t && j0(),
                  dR(q, {
                    traceFetch: y,
                    traceXHR: v,
                    trackFetchStreamPerformance: b,
                    tracePropagationTargets: q.getOptions().tracePropagationTargets,
                    shouldCreateSpanForRequest: S,
                    enableHTTPTimings: R
                  })
            }
          }
    }
    , "browserTracingIntegration");
function IR(e, t, n) {
  e.emit("startPageLoadSpan", t, n),
      Re().setTransactionName(t.name);
  const r = Ve();
  return (r && ye(r).op) === "pageload" ? r : void 0
}
i(IR, "startBrowserTracingPageLoadSpan");
function RR(e, t) {
  ft().setPropagationContext(fi()),
      Re().setPropagationContext(fi()),
      e.emit("startNavigationSpan", t),
      Re().setTransactionName(t.name);
  const n = Ve();
  return (n && ye(n).op) === "navigation" ? n : void 0
}
i(RR, "startBrowserTracingNavigationSpan");
function Bl(e) {
  const t = A_(`meta[name=${e}]`);
  return t ? t.getAttribute("content") : void 0
}
i(Bl, "getMetaContent");
function AR(e, t, n, r) {
  let s;
  const o = i( () => {
        const c = "ui.action.click"
            , l = Ve()
            , f = l && We(l);
        if (f) {
          const h = ye(f).op;
          if (["navigation", "pageload"].includes(h)) {
            It && D.warn(`[Tracing] Did not create ${c} span because a pageload or navigation span is in progress.`);
            return
          }
        }
        if (s && (s.setAttribute(Jo, "interactionInterrupted"),
            s.end(),
            s = void 0),
            !r.name) {
          It && D.warn(`[Tracing] Did not create ${c} transaction because _latestRouteName is missing.`);
          return
        }
        s = Ad({
          name: r.name,
          op: c,
          attributes: {
            [Wt]: r.source || "url"
          }
        }, {
          idleTimeout: e,
          finalTimeout: t,
          childSpanTimeout: n
        })
      }
      , "registerInteractionTransaction");
  se.document && addEventListener("click", o, {
    once: !1,
    capture: !0
  })
}
i(AR, "registerInteractionListener");
var Yh = {
  exports: {}
}
    , le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _s = Symbol.for("react.element")
    , kR = Symbol.for("react.portal")
    , OR = Symbol.for("react.fragment")
    , PR = Symbol.for("react.strict_mode")
    , NR = Symbol.for("react.profiler")
    , TR = Symbol.for("react.provider")
    , xR = Symbol.for("react.context")
    , CR = Symbol.for("react.forward_ref")
    , MR = Symbol.for("react.suspense")
    , FR = Symbol.for("react.memo")
    , DR = Symbol.for("react.lazy")
    , $l = Symbol.iterator;
function LR(e) {
  return e === null || typeof e != "object" ? null : (e = $l && e[$l] || e["@@iterator"],
      typeof e == "function" ? e : null)
}
i(LR, "A");
var Kh = {
  isMounted: function() {
    return !1
  },
  enqueueForceUpdate: function() {},
  enqueueReplaceState: function() {},
  enqueueSetState: function() {}
}
    , Xh = Object.assign
    , Qh = {};
function Ar(e, t, n) {
  this.props = e,
      this.context = t,
      this.refs = Qh,
      this.updater = n || Kh
}
i(Ar, "E");
Ar.prototype.isReactComponent = {};
Ar.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
}
;
Ar.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Jh() {}
i(Jh, "F");
Jh.prototype = Ar.prototype;
function mc(e, t, n) {
  this.props = e,
      this.context = t,
      this.refs = Qh,
      this.updater = n || Kh
}
i(mc, "G");
var yc = mc.prototype = new Jh;
yc.constructor = mc;
Xh(yc, Ar.prototype);
yc.isPureReactComponent = !0;
var Hl = Array.isArray
    , Zh = Object.prototype.hasOwnProperty
    , gc = {
  current: null
}
    , ep = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function tp(e, t, n) {
  var r, s = {}, o = null, c = null;
  if (t != null)
    for (r in t.ref !== void 0 && (c = t.ref),
    t.key !== void 0 && (o = "" + t.key),
        t)
      Zh.call(t, r) && !ep.hasOwnProperty(r) && (s[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1)
    s.children = n;
  else if (1 < l) {
    for (var f = Array(l), h = 0; h < l; h++)
      f[h] = arguments[h + 2];
    s.children = f
  }
  if (e && e.defaultProps)
    for (r in l = e.defaultProps,
        l)
      s[r] === void 0 && (s[r] = l[r]);
  return {
    $$typeof: _s,
    type: e,
    key: o,
    ref: c,
    props: s,
    _owner: gc.current
  }
}
i(tp, "M");
function UR(e, t) {
  return {
    $$typeof: _s,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}
i(UR, "N");
function _c(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _s
}
i(_c, "O");
function BR(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n]
  })
}
i(BR, "escape");
var jl = /\/+/g;
function No(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? BR("" + e.key) : t.toString(36)
}
i(No, "Q");
function ti(e, t, n, r, s) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var c = !1;
  if (e === null)
    c = !0;
  else
    switch (o) {
      case "string":
      case "number":
        c = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case _s:
          case kR:
            c = !0
        }
    }
  if (c)
    return c = e,
        s = s(c),
        e = r === "" ? "." + No(c, 0) : r,
        Hl(s) ? (n = "",
        e != null && (n = e.replace(jl, "$&/") + "/"),
            ti(s, t, n, "", function(h) {
              return h
            })) : s != null && (_c(s) && (s = UR(s, n + (!s.key || c && c.key === s.key ? "" : ("" + s.key).replace(jl, "$&/") + "/") + e)),
            t.push(s)),
        1;
  if (c = 0,
      r = r === "" ? "." : r + ":",
      Hl(e))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var f = r + No(o, l);
      c += ti(o, t, n, f, s)
    }
  else if (f = LR(e),
  typeof f == "function")
    for (e = f.call(e),
             l = 0; !(o = e.next()).done; )
      o = o.value,
          f = r + No(o, l++),
          c += ti(o, t, n, f, s);
  else if (o === "object")
    throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return c
}
i(ti, "R");
function js(e, t, n) {
  if (e == null)
    return e;
  var r = []
      , s = 0;
  return ti(e, r, "", "", function(o) {
    return t.call(n, o, s++)
  }),
      r
}
i(js, "S");
function $R(e) {
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
i($R, "T");
var et = {
  current: null
}
    , ni = {
  transition: null
}
    , HR = {
  ReactCurrentDispatcher: et,
  ReactCurrentBatchConfig: ni,
  ReactCurrentOwner: gc
};
le.Children = {
  map: js,
  forEach: function(e, t, n) {
    js(e, function() {
      t.apply(this, arguments)
    }, n)
  },
  count: function(e) {
    var t = 0;
    return js(e, function() {
      t++
    }),
        t
  },
  toArray: function(e) {
    return js(e, function(t) {
      return t
    }) || []
  },
  only: function(e) {
    if (!_c(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e
  }
};
le.Component = Ar;
le.Fragment = OR;
le.Profiler = NR;
le.PureComponent = mc;
le.StrictMode = PR;
le.Suspense = MR;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = HR;
le.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Xh({}, e.props)
      , s = e.key
      , o = e.ref
      , c = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref,
        c = gc.current),
    t.key !== void 0 && (s = "" + t.key),
    e.type && e.type.defaultProps)
      var l = e.type.defaultProps;
    for (f in t)
      Zh.call(t, f) && !ep.hasOwnProperty(f) && (r[f] = t[f] === void 0 && l !== void 0 ? l[f] : t[f])
  }
  var f = arguments.length - 2;
  if (f === 1)
    r.children = n;
  else if (1 < f) {
    l = Array(f);
    for (var h = 0; h < f; h++)
      l[h] = arguments[h + 2];
    r.children = l
  }
  return {
    $$typeof: _s,
    type: e.type,
    key: s,
    ref: o,
    props: r,
    _owner: c
  }
}
;
le.createContext = function(e) {
  return e = {
    $$typeof: xR,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  },
      e.Provider = {
        $$typeof: TR,
        _context: e
      },
      e.Consumer = e
}
;
le.createElement = tp;
le.createFactory = function(e) {
  var t = tp.bind(null, e);
  return t.type = e,
      t
}
;
le.createRef = function() {
  return {
    current: null
  }
}
;
le.forwardRef = function(e) {
  return {
    $$typeof: CR,
    render: e
  }
}
;
le.isValidElement = _c;
le.lazy = function(e) {
  return {
    $$typeof: DR,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: $R
  }
}
;
le.memo = function(e, t) {
  return {
    $$typeof: FR,
    type: e,
    compare: t === void 0 ? null : t
  }
}
;
le.startTransition = function(e) {
  var t = ni.transition;
  ni.transition = {};
  try {
    e()
  } finally {
    ni.transition = t
  }
}
;
le.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.")
}
;
le.useCallback = function(e, t) {
  return et.current.useCallback(e, t)
}
;
le.useContext = function(e) {
  return et.current.useContext(e)
}
;
le.useDebugValue = function() {}
;
le.useDeferredValue = function(e) {
  return et.current.useDeferredValue(e)
}
;
le.useEffect = function(e, t) {
  return et.current.useEffect(e, t)
}
;
le.useId = function() {
  return et.current.useId()
}
;
le.useImperativeHandle = function(e, t, n) {
  return et.current.useImperativeHandle(e, t, n)
}
;
le.useInsertionEffect = function(e, t) {
  return et.current.useInsertionEffect(e, t)
}
;
le.useLayoutEffect = function(e, t) {
  return et.current.useLayoutEffect(e, t)
}
;
le.useMemo = function(e, t) {
  return et.current.useMemo(e, t)
}
;
le.useReducer = function(e, t, n) {
  return et.current.useReducer(e, t, n)
}
;
le.useRef = function(e) {
  return et.current.useRef(e)
}
;
le.useState = function(e) {
  return et.current.useState(e)
}
;
le.useSyncExternalStore = function(e, t, n) {
  return et.current.useSyncExternalStore(e, t, n)
}
;
le.useTransition = function() {
  return et.current.useTransition()
}
;
le.version = "18.2.0";
Yh.exports = le;
var jR = Yh.exports;
function qR(e) {
  const t = {
    ...e
  };
  return Md(t, "react"),
      Ya("react", {
        version: jR.version
      }),
      Db(t)
}
i(qR, "init");
var np = (e => (e[e.UnsupportedFormat = 0] = "UnsupportedFormat",
    e[e.Corrupted = 1] = "Corrupted",
    e[e.Unknown = 2] = "Unknown",
    e))(np || {});
const zR = {
  0: ["CameraMetadataException"],
  1: ["RawDecoderException", "TiffParserException", "RawParserException"],
  2: []
};
function WR(e) {
  if (!(e instanceof WebAssembly.RuntimeError))
    return 2;
  const t = e.message.toLowerCase()
      , n = Number(Object.entries(zR).find( ([r,s]) => s.some(o => t.includes(o.toLowerCase())))?.[0]);
  return Number.isInteger(n) ? n : 2
}
i(WR, "classifyRawError");
var VR = {
  exports: {}
};
(function(e) {
      var t = Object.prototype.hasOwnProperty
          , n = "~";
      function r() {}
      i(r, "Events"),
      Object.create && (r.prototype = Object.create(null),
      new r().__proto__ || (n = !1));
      function s(f, h, p) {
        this.fn = f,
            this.context = h,
            this.once = p || !1
      }
      i(s, "EE");
      function o(f, h, p, y, v) {
        if (typeof p != "function")
          throw new TypeError("The listener must be a function");
        var b = new s(p,y || f,v)
            , S = n ? n + h : h;
        return f._events[S] ? f._events[S].fn ? f._events[S] = [f._events[S], b] : f._events[S].push(b) : (f._events[S] = b,
            f._eventsCount++),
            f
      }
      i(o, "addListener");
      function c(f, h) {
        --f._eventsCount === 0 ? f._events = new r : delete f._events[h]
      }
      i(c, "clearEvent");
      function l() {
        this._events = new r,
            this._eventsCount = 0
      }
      i(l, "EventEmitter"),
          l.prototype.eventNames = i(function() {
            var h = [], p, y;
            if (this._eventsCount === 0)
              return h;
            for (y in p = this._events)
              t.call(p, y) && h.push(n ? y.slice(1) : y);
            return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(p)) : h
          }, "eventNames"),
          l.prototype.listeners = i(function(h) {
            var p = n ? n + h : h
                , y = this._events[p];
            if (!y)
              return [];
            if (y.fn)
              return [y.fn];
            for (var v = 0, b = y.length, S = new Array(b); v < b; v++)
              S[v] = y[v].fn;
            return S
          }, "listeners"),
          l.prototype.listenerCount = i(function(h) {
            var p = n ? n + h : h
                , y = this._events[p];
            return y ? y.fn ? 1 : y.length : 0
          }, "listenerCount"),
          l.prototype.emit = i(function(h, p, y, v, b, S) {
            var R = n ? n + h : h;
            if (!this._events[R])
              return !1;
            var k = this._events[R], O = arguments.length, L, U;
            if (k.fn) {
              switch (k.once && this.removeListener(h, k.fn, void 0, !0),
                  O) {
                case 1:
                  return k.fn.call(k.context),
                      !0;
                case 2:
                  return k.fn.call(k.context, p),
                      !0;
                case 3:
                  return k.fn.call(k.context, p, y),
                      !0;
                case 4:
                  return k.fn.call(k.context, p, y, v),
                      !0;
                case 5:
                  return k.fn.call(k.context, p, y, v, b),
                      !0;
                case 6:
                  return k.fn.call(k.context, p, y, v, b, S),
                      !0
              }
              for (U = 1,
                       L = new Array(O - 1); U < O; U++)
                L[U - 1] = arguments[U];
              k.fn.apply(k.context, L)
            } else {
              var V = k.length, q;
              for (U = 0; U < V; U++)
                switch (k[U].once && this.removeListener(h, k[U].fn, void 0, !0),
                    O) {
                  case 1:
                    k[U].fn.call(k[U].context);
                    break;
                  case 2:
                    k[U].fn.call(k[U].context, p);
                    break;
                  case 3:
                    k[U].fn.call(k[U].context, p, y);
                    break;
                  case 4:
                    k[U].fn.call(k[U].context, p, y, v);
                    break;
                  default:
                    if (!L)
                      for (q = 1,
                               L = new Array(O - 1); q < O; q++)
                        L[q - 1] = arguments[q];
                    k[U].fn.apply(k[U].context, L)
                }
            }
            return !0
          }, "emit"),
          l.prototype.on = i(function(h, p, y) {
            return o(this, h, p, y, !1)
          }, "on"),
          l.prototype.once = i(function(h, p, y) {
            return o(this, h, p, y, !0)
          }, "once"),
          l.prototype.removeListener = i(function(h, p, y, v) {
            var b = n ? n + h : h;
            if (!this._events[b])
              return this;
            if (!p)
              return c(this, b),
                  this;
            var S = this._events[b];
            if (S.fn)
              S.fn === p && (!v || S.once) && (!y || S.context === y) && c(this, b);
            else {
              for (var R = 0, k = [], O = S.length; R < O; R++)
                (S[R].fn !== p || v && !S[R].once || y && S[R].context !== y) && k.push(S[R]);
              k.length ? this._events[b] = k.length === 1 ? k[0] : k : c(this, b)
            }
            return this
          }, "removeListener"),
          l.prototype.removeAllListeners = i(function(h) {
            var p;
            return h ? (p = n ? n + h : h,
            this._events[p] && c(this, p)) : (this._events = new r,
                this._eventsCount = 0),
                this
          }, "removeAllListeners"),
          l.prototype.off = l.prototype.removeListener,
          l.prototype.addListener = l.prototype.on,
          l.prefixed = n,
          l.EventEmitter = l,
          e.exports = l
    }
)(VR);
const GR = i(e => WR(e) === np.Corrupted, "isCorruptedFileError")
    , ql = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope;
qR({
  enabled: !0,
  environment: "production",
  release: "2.2.10+c54b50e",
  dsn: "https://4890aafc8e8dce271cb8169b5dfde882@o239071.ingest.us.sentry.io/4508455574568960",
  ignoreErrors: [/Failed to register a ServiceWorker/i, /Operation has been aborted/i, /Unable to preload CSS/i, /Failed to fetch dynamically imported module/i],
  beforeSend(e) {
    return e.exception?.values?.some(t => GR(t.value)) ? null : e
  },
  integrations: [rh(), wR({
    instrumentPageLoad: !ql,
    instrumentNavigation: !ql
  }), lR({
    blockAllMedia: !1,
    maskAllInputs: !1,
    maskAllText: !1,
    networkDetailAllowUrls: [vu.basePaths.projects, vu.basePaths.presets]
  })],
  sampleRate: .5,
  tracesSampleRate: .01,
  tracePropagationTargets: ["localhost", /^https:\/\/polarrnext\.com/, /^https:\/\/polarr-next(.*)\.vercel\.app/],
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1
});
function vs(e) {
  return function(t, n, r) {
    const s = r.value
        , o = `${t.constructor.name}: ${e ?? n}`;
    r.value = function(...c) {
      const l = vc(o)
          , f = s.apply(this, c);
      return f instanceof Promise ? f.then(l).catch(h => {
            throw Pn(h),
                h
          }
      ) : l(),
          f
    }
  }
}
i(vs, "measured");
const vc = i(e => {
      const t = Sn({
        name: e
      });
      return performance.now(),
          () => {
            performance.now(),
                t?.end()
          }
    }
    , "startMeasurement");
Promise.prototype.measured = function(e) {
  const t = vc(e);
  return this.then(n => (t(),
      n))
}
;
Function.prototype.measured = function(e) {
  const t = this;
  return function() {
    const n = vc(e ?? t.name)
        , r = t.apply(this, arguments);
    return n(),
        r
  }
}
;
function zl(e) {
  return e instanceof File ? e.name.split(".").at(-1) ?? "unknown" : e.split(".").at(-1) ?? "unknown"
}
i(zl, "getFileExtension");
var ve = (e => (e[e.NewSubFileType = 254] = "NewSubFileType",
    e[e.SubFileType = 255] = "SubFileType",
    e[e.ImageWidth = 256] = "ImageWidth",
    e[e.ImageLength = 257] = "ImageLength",
    e[e.BitsPerSample = 258] = "BitsPerSample",
    e[e.Compression = 259] = "Compression",
    e[e.PhotometricInterpretation = 262] = "PhotometricInterpretation",
    e[e.Thresholding = 263] = "Thresholding",
    e[e.CellWidth = 264] = "CellWidth",
    e[e.CellLength = 265] = "CellLength",
    e[e.FillOrder = 266] = "FillOrder",
    e[e.ImageDescription = 270] = "ImageDescription",
    e[e.Make = 271] = "Make",
    e[e.Model = 272] = "Model",
    e[e.StripOffsets = 273] = "StripOffsets",
    e[e.Orientation = 274] = "Orientation",
    e[e.SamplesPerPixel = 277] = "SamplesPerPixel",
    e[e.RowsPerStrip = 278] = "RowsPerStrip",
    e[e.StripByteCounts = 279] = "StripByteCounts",
    e[e.MinSampleValue = 280] = "MinSampleValue",
    e[e.MaxSampleValue = 281] = "MaxSampleValue",
    e[e.XResolution = 282] = "XResolution",
    e[e.YResolution = 283] = "YResolution",
    e[e.PlanarConfiguration = 284] = "PlanarConfiguration",
    e[e.FreeOffsets = 285] = "FreeOffsets",
    e[e.FreeByteCounts = 286] = "FreeByteCounts",
    e[e.GrayResponseUnit = 290] = "GrayResponseUnit",
    e[e.GrayResponseCurve = 291] = "GrayResponseCurve",
    e[e.ResolutionUnit = 296] = "ResolutionUnit",
    e[e.TransferFunction = 301] = "TransferFunction",
    e[e.Software = 305] = "Software",
    e[e.DateTime = 306] = "DateTime",
    e[e.Artist = 315] = "Artist",
    e[e.HostComputer = 316] = "HostComputer",
    e[e.Predictor = 317] = "Predictor",
    e[e.WhitePoint = 318] = "WhitePoint",
    e[e.PrimaryChromaticities = 319] = "PrimaryChromaticities",
    e[e.ColorMap = 320] = "ColorMap",
    e[e.TileWidth = 322] = "TileWidth",
    e[e.TileLength = 323] = "TileLength",
    e[e.TileOffsets = 324] = "TileOffsets",
    e[e.TileByteCounts = 325] = "TileByteCounts",
    e[e.SubIFDs = 330] = "SubIFDs",
    e[e.ExtraSamples = 338] = "ExtraSamples",
    e[e.SampleFormat = 339] = "SampleFormat",
    e[e.JPEGTables = 347] = "JPEGTables",
    e[e.JPEGProc = 512] = "JPEGProc",
    e[e.JPEGInterchangeFormat = 513] = "JPEGInterchangeFormat",
    e[e.JPEGInterchangeFormatLength = 514] = "JPEGInterchangeFormatLength",
    e[e.YCbCrCoefficients = 529] = "YCbCrCoefficients",
    e[e.YCbCrSubSampling = 530] = "YCbCrSubSampling",
    e[e.YCbCrPositioning = 531] = "YCbCrPositioning",
    e[e.ReferenceBlackWhite = 532] = "ReferenceBlackWhite",
    e[e.XMP = 700] = "XMP",
    e[e.KodakCameraSerialNumber = 33405] = "KodakCameraSerialNumber",
    e[e.CFARepeatPatternDim = 33421] = "CFARepeatPatternDim",
    e[e.CFAPattern = 33422] = "CFAPattern",
    e[e.BatteryLevel = 33423] = "BatteryLevel",
    e[e.KodakDCRPrivateIFD = 33424] = "KodakDCRPrivateIFD",
    e[e.Copyright = 33432] = "Copyright",
    e[e.ExposureTime = 33434] = "ExposureTime",
    e[e.FNumber = 33437] = "FNumber",
    e[e.IPTC_NAA = 33723] = "IPTC_NAA",
    e[e.LeafPKTS = 34310] = "LeafPKTS",
    e[e.AdobeData = 34377] = "AdobeData",
    e[e.ExifIFD = 34665] = "ExifIFD",
    e[e.ICCProfile = 34675] = "ICCProfile",
    e[e.ExposureProgram = 34850] = "ExposureProgram",
    e[e.SpectralSensitivity = 34852] = "SpectralSensitivity",
    e[e.GPSInfo = 34853] = "GPSInfo",
    e[e.ISOSpeedRatings = 34855] = "ISOSpeedRatings",
    e[e.OECF = 34856] = "OECF",
    e[e.Interlace = 34857] = "Interlace",
    e[e.TimeZoneOffset = 34858] = "TimeZoneOffset",
    e[e.SelfTimerMode = 34859] = "SelfTimerMode",
    e[e.SensitivityType = 34864] = "SensitivityType",
    e[e.StandardOutputSensitivity = 34865] = "StandardOutputSensitivity",
    e[e.RecommendedExposureIndex = 34866] = "RecommendedExposureIndex",
    e[e.ISOSpeed = 34867] = "ISOSpeed",
    e[e.ISOSpeedLatitudeyyy = 34868] = "ISOSpeedLatitudeyyy",
    e[e.ISOSpeedLatitudezzz = 34869] = "ISOSpeedLatitudezzz",
    e[e.ExifVersion = 36864] = "ExifVersion",
    e[e.DateTimeOriginal = 36867] = "DateTimeOriginal",
    e[e.DateTimeDigitized = 36868] = "DateTimeDigitized",
    e[e.OffsetTime = 36880] = "OffsetTime",
    e[e.OffsetTimeOriginal = 36881] = "OffsetTimeOriginal",
    e[e.OffsetTimeDigitized = 36882] = "OffsetTimeDigitized",
    e[e.ComponentsConfiguration = 37121] = "ComponentsConfiguration",
    e[e.CompressedBitsPerPixel = 37122] = "CompressedBitsPerPixel",
    e[e.ShutterSpeedValue = 37377] = "ShutterSpeedValue",
    e[e.ApertureValue = 37378] = "ApertureValue",
    e[e.BrightnessValue = 37379] = "BrightnessValue",
    e[e.ExposureBiasValue = 37380] = "ExposureBiasValue",
    e[e.MaxApertureValue = 37381] = "MaxApertureValue",
    e[e.SubjectDistance = 37382] = "SubjectDistance",
    e[e.MeteringMode = 37383] = "MeteringMode",
    e[e.LightSource = 37384] = "LightSource",
    e[e.Flash = 37385] = "Flash",
    e[e.FocalLength = 37386] = "FocalLength",
    e[e.FlashEnergy = 37387] = "FlashEnergy",
    e[e.SpatialFrequencyResponse = 37388] = "SpatialFrequencyResponse",
    e[e.Noise = 37389] = "Noise",
    e[e.FocalPlaneXResolution = 37390] = "FocalPlaneXResolution",
    e[e.FocalPlaneYResolution = 37391] = "FocalPlaneYResolution",
    e[e.FocalPlaneResolutionUnit = 37392] = "FocalPlaneResolutionUnit",
    e[e.ImageNumber = 37393] = "ImageNumber",
    e[e.SecurityClassification = 37394] = "SecurityClassification",
    e[e.ImageHistory = 37395] = "ImageHistory",
    e[e.SubjectArea = 37396] = "SubjectArea",
    e[e.ExposureIndex = 37397] = "ExposureIndex",
    e[e.TIFF_EP_StandardID = 37398] = "TIFF_EP_StandardID",
    e[e.SensingMethod = 37399] = "SensingMethod",
    e[e.MakerNote = 37500] = "MakerNote",
    e[e.UserComment = 37510] = "UserComment",
    e[e.SubsecTime = 37520] = "SubsecTime",
    e[e.SubsecTimeOriginal = 37521] = "SubsecTimeOriginal",
    e[e.SubsecTimeDigitized = 37522] = "SubsecTimeDigitized",
    e[e.AdobeLayerData = 37724] = "AdobeLayerData",
    e[e.Temperature = 37888] = "Temperature",
    e[e.Humidity = 37889] = "Humidity",
    e[e.Pressure = 37890] = "Pressure",
    e[e.WaterDepth = 37891] = "WaterDepth",
    e[e.Acceleration = 37892] = "Acceleration",
    e[e.CameraElevationAngle = 37893] = "CameraElevationAngle",
    e[e.FlashPixVersion = 40960] = "FlashPixVersion",
    e[e.ColorSpace = 40961] = "ColorSpace",
    e[e.PixelXDimension = 40962] = "PixelXDimension",
    e[e.PixelYDimension = 40963] = "PixelYDimension",
    e[e.RelatedSoundFile = 40964] = "RelatedSoundFile",
    e[e.InteroperabilityIFD = 40965] = "InteroperabilityIFD",
    e[e.FlashEnergyExif = 41483] = "FlashEnergyExif",
    e[e.SpatialFrequencyResponseExif = 41484] = "SpatialFrequencyResponseExif",
    e[e.FocalPlaneXResolutionExif = 41486] = "FocalPlaneXResolutionExif",
    e[e.FocalPlaneYResolutionExif = 41487] = "FocalPlaneYResolutionExif",
    e[e.FocalPlaneResolutionUnitExif = 41488] = "FocalPlaneResolutionUnitExif",
    e[e.SubjectLocation = 41492] = "SubjectLocation",
    e[e.ExposureIndexExif = 41493] = "ExposureIndexExif",
    e[e.SensingMethodExif = 41495] = "SensingMethodExif",
    e[e.FileSource = 41728] = "FileSource",
    e[e.SceneType = 41729] = "SceneType",
    e[e.CFAPatternExif = 41730] = "CFAPatternExif",
    e[e.CustomRendered = 41985] = "CustomRendered",
    e[e.ExposureMode = 41986] = "ExposureMode",
    e[e.WhiteBalance = 41987] = "WhiteBalance",
    e[e.DigitalZoomRatio = 41988] = "DigitalZoomRatio",
    e[e.FocalLengthIn35mmFilm = 41989] = "FocalLengthIn35mmFilm",
    e[e.SceneCaptureType = 41990] = "SceneCaptureType",
    e[e.GainControl = 41991] = "GainControl",
    e[e.Contrast = 41992] = "Contrast",
    e[e.Saturation = 41993] = "Saturation",
    e[e.Sharpness = 41994] = "Sharpness",
    e[e.DeviceSettingDescription = 41995] = "DeviceSettingDescription",
    e[e.SubjectDistanceRange = 41996] = "SubjectDistanceRange",
    e[e.ImageUniqueID = 42016] = "ImageUniqueID",
    e[e.CameraOwnerNameExif = 42032] = "CameraOwnerNameExif",
    e[e.CameraSerialNumberExif = 42033] = "CameraSerialNumberExif",
    e[e.LensSpecificationExif = 42034] = "LensSpecificationExif",
    e[e.LensMakeExif = 42035] = "LensMakeExif",
    e[e.LensModelExif = 42036] = "LensModelExif",
    e[e.LensSerialNumberExif = 42037] = "LensSerialNumberExif",
    e[e.Gamma = 42240] = "Gamma",
    e[e.PrintImageMatchingInfo = 50341] = "PrintImageMatchingInfo",
    e[e.DNGVersion = 50706] = "DNGVersion",
    e[e.DNGBackwardVersion = 50707] = "DNGBackwardVersion",
    e[e.UniqueCameraModel = 50708] = "UniqueCameraModel",
    e[e.LocalizedCameraModel = 50709] = "LocalizedCameraModel",
    e[e.CFAPlaneColor = 50710] = "CFAPlaneColor",
    e[e.CFALayout = 50711] = "CFALayout",
    e[e.LinearizationTable = 50712] = "LinearizationTable",
    e[e.BlackLevelRepeatDim = 50713] = "BlackLevelRepeatDim",
    e[e.BlackLevel = 50714] = "BlackLevel",
    e[e.BlackLevelDeltaH = 50715] = "BlackLevelDeltaH",
    e[e.BlackLevelDeltaV = 50716] = "BlackLevelDeltaV",
    e[e.WhiteLevel = 50717] = "WhiteLevel",
    e[e.DefaultScale = 50718] = "DefaultScale",
    e[e.DefaultCropOrigin = 50719] = "DefaultCropOrigin",
    e[e.DefaultCropSize = 50720] = "DefaultCropSize",
    e[e.ColorMatrix1 = 50721] = "ColorMatrix1",
    e[e.ColorMatrix2 = 50722] = "ColorMatrix2",
    e[e.CameraCalibration1 = 50723] = "CameraCalibration1",
    e[e.CameraCalibration2 = 50724] = "CameraCalibration2",
    e[e.ReductionMatrix1 = 50725] = "ReductionMatrix1",
    e[e.ReductionMatrix2 = 50726] = "ReductionMatrix2",
    e[e.AnalogBalance = 50727] = "AnalogBalance",
    e[e.AsShotNeutral = 50728] = "AsShotNeutral",
    e[e.AsShotWhiteXY = 50729] = "AsShotWhiteXY",
    e[e.BaselineExposure = 50730] = "BaselineExposure",
    e[e.BaselineNoise = 50731] = "BaselineNoise",
    e[e.BaselineSharpness = 50732] = "BaselineSharpness",
    e[e.BayerGreenSplit = 50733] = "BayerGreenSplit",
    e[e.LinearResponseLimit = 50734] = "LinearResponseLimit",
    e[e.CameraSerialNumber = 50735] = "CameraSerialNumber",
    e[e.LensInfo = 50736] = "LensInfo",
    e[e.ChromaBlurRadius = 50737] = "ChromaBlurRadius",
    e[e.AntiAliasStrength = 50738] = "AntiAliasStrength",
    e[e.ShadowScale = 50739] = "ShadowScale",
    e[e.DNGPrivateData = 50740] = "DNGPrivateData",
    e[e.MakerNoteSafety = 50741] = "MakerNoteSafety",
    e[e.CalibrationIlluminant1 = 50778] = "CalibrationIlluminant1",
    e[e.CalibrationIlluminant2 = 50779] = "CalibrationIlluminant2",
    e[e.BestQualityScale = 50780] = "BestQualityScale",
    e[e.RawDataUniqueID = 50781] = "RawDataUniqueID",
    e[e.OriginalRawFileName = 50827] = "OriginalRawFileName",
    e[e.OriginalRawFileData = 50828] = "OriginalRawFileData",
    e[e.ActiveArea = 50829] = "ActiveArea",
    e[e.MaskedAreas = 50830] = "MaskedAreas",
    e[e.AsShotICCProfile = 50831] = "AsShotICCProfile",
    e[e.AsShotPreProfileMatrix = 50832] = "AsShotPreProfileMatrix",
    e[e.CurrentICCProfile = 50833] = "CurrentICCProfile",
    e[e.CurrentPreProfileMatrix = 50834] = "CurrentPreProfileMatrix",
    e[e.ColorimetricReference = 50879] = "ColorimetricReference",
    e[e.CameraCalibrationSignature = 50931] = "CameraCalibrationSignature",
    e[e.ProfileCalibrationSignature = 50932] = "ProfileCalibrationSignature",
    e[e.ExtraCameraProfiles = 50933] = "ExtraCameraProfiles",
    e[e.AsShotProfileName = 50934] = "AsShotProfileName",
    e[e.NoiseReductionApplied = 50935] = "NoiseReductionApplied",
    e[e.ProfileName = 50936] = "ProfileName",
    e[e.ProfileHueSatMapDims = 50937] = "ProfileHueSatMapDims",
    e[e.ProfileHueSatMapData1 = 50938] = "ProfileHueSatMapData1",
    e[e.ProfileHueSatMapData2 = 50939] = "ProfileHueSatMapData2",
    e[e.ProfileToneCurve = 50940] = "ProfileToneCurve",
    e[e.ProfileEmbedPolicy = 50941] = "ProfileEmbedPolicy",
    e[e.ProfileCopyright = 50942] = "ProfileCopyright",
    e[e.ForwardMatrix1 = 50964] = "ForwardMatrix1",
    e[e.ForwardMatrix2 = 50965] = "ForwardMatrix2",
    e[e.PreviewApplicationName = 50966] = "PreviewApplicationName",
    e[e.PreviewApplicationVersion = 50967] = "PreviewApplicationVersion",
    e[e.PreviewSettingsName = 50968] = "PreviewSettingsName",
    e[e.PreviewSettingsDigest = 50969] = "PreviewSettingsDigest",
    e[e.PreviewColorSpace = 50970] = "PreviewColorSpace",
    e[e.PreviewDateTime = 50971] = "PreviewDateTime",
    e[e.RawImageDigest = 50972] = "RawImageDigest",
    e[e.OriginalRawFileDigest = 50973] = "OriginalRawFileDigest",
    e[e.SubTileBlockSize = 50974] = "SubTileBlockSize",
    e[e.RowInterleaveFactor = 50975] = "RowInterleaveFactor",
    e[e.ProfileLookTableDims = 50981] = "ProfileLookTableDims",
    e[e.ProfileLookTableData = 50982] = "ProfileLookTableData",
    e[e.OpcodeList1 = 51008] = "OpcodeList1",
    e[e.OpcodeList2 = 51009] = "OpcodeList2",
    e[e.OpcodeList3 = 51022] = "OpcodeList3",
    e[e.NoiseProfile = 51041] = "NoiseProfile",
    e[e.OriginalDefaultFinalSize = 51089] = "OriginalDefaultFinalSize",
    e[e.OriginalBestQualityFinalSize = 51090] = "OriginalBestQualityFinalSize",
    e[e.OriginalDefaultCropSize = 51091] = "OriginalDefaultCropSize",
    e[e.ProfileHueSatMapEncoding = 51107] = "ProfileHueSatMapEncoding",
    e[e.ProfileLookTableEncoding = 51108] = "ProfileLookTableEncoding",
    e[e.BaselineExposureOffset = 51109] = "BaselineExposureOffset",
    e[e.DefaultBlackRender = 51110] = "DefaultBlackRender",
    e[e.NewRawImageDigest = 51111] = "NewRawImageDigest",
    e[e.RawToPreviewGain = 51112] = "RawToPreviewGain",
    e[e.CacheBlob = 51113] = "CacheBlob",
    e[e.CacheVersion = 51114] = "CacheVersion",
    e[e.DefaultUserCrop = 51125] = "DefaultUserCrop",
    e[e.DepthFormat = 51177] = "DepthFormat",
    e[e.DepthNear = 51178] = "DepthNear",
    e[e.DepthFar = 51179] = "DepthFar",
    e[e.DepthUnits = 51180] = "DepthUnits",
    e[e.DepthMeasureType = 51181] = "DepthMeasureType",
    e[e.EnhanceParams = 51182] = "EnhanceParams",
    e[e.KodakKDCPrivateIFD = 65024] = "KodakKDCPrivateIFD",
    e))(ve || {})
    , te = (e => (e[e.BYTE = 1] = "BYTE",
    e[e.ASCII = 2] = "ASCII",
    e[e.SHORT = 3] = "SHORT",
    e[e.LONG = 4] = "LONG",
    e[e.RATIONAL = 5] = "RATIONAL",
    e[e.SBYTE = 6] = "SBYTE",
    e[e.UNDEFINED = 7] = "UNDEFINED",
    e[e.SSHORT = 8] = "SSHORT",
    e[e.SLONG = 9] = "SLONG",
    e[e.SRATIONAL = 10] = "SRATIONAL",
    e[e.FLOAT = 11] = "FLOAT",
    e[e.DOUBLE = 12] = "DOUBLE",
    e))(te || {});
const YR = {
  1: 1,
  2: 1,
  3: 2,
  4: 4,
  5: 8,
  6: 1,
  7: 1,
  8: 2,
  9: 4,
  10: 8,
  11: 4,
  12: 8
};
function rp(e) {
  return e && typeof e == "object" && "length"in e ? typeof e?.length == "number" : !1
}
i(rp, "isArrayLike");
function KR(e) {
  return e.type === te.ASCII
}
i(KR, "needsPaddingByte");
function Sc(e) {
  return rp(e.value) ? KR(e) ? e.value.length + 1 : e.value.length : 1
}
i(Sc, "getTagCount");
function va(e) {
  const t = YR[e.type]
      , n = Sc(e);
  return t * n
}
i(va, "getTagSize");
function Wl(e) {
  let t = e.length * 12 + 6;
  for (const n of e) {
    const r = va(n);
    r > 4 && (t += r + 1 & -2)
  }
  return t
}
i(Wl, "getDirectorySize");
function Vl(e, t) {
  if (rp(t.value))
    for (let n = 0; n < Sc(t); n++)
      e[t.type].set(t.value[n] || 0);
  else
    e[t.type].set(t.value)
}
i(Vl, "writeTagValue");
function XR(e) {
  e.setUint16(e.littleEndian ? 18761 : 19789),
      e.setUint16(42),
      e.setUint32(8)
}
i(XR, "writeTiffHeader");
function Gl(e, t, n=e.offset, r=0) {
  let s = n + t.length * 12 + 6;
  e.setUint16(t.length);
  for (const o of t) {
    let c = va(o);
    if (e.setUint16(o.tag),
        e.setUint16(o.type),
        e.setUint32(Sc(o)),
    c <= 4)
      for (Vl(e, o); c < 4; )
        e.setUint8(0),
            c++;
    else
      e.setUint32(s),
          s += c + 1 & -2
  }
  e.setUint32(r);
  for (const o of t) {
    const c = va(o);
    c > 4 && (Vl(e, o),
    c & 1 && e.setUint8(0))
  }
}
i(Gl, "writeDirectory");
let qs;
function QR() {
  if (qs != null)
    return qs;
  const e = new ArrayBuffer(2);
  return new DataView(e).setInt16(0, 256, !0),
      qs = new Int16Array(e)[0] === 256,
      qs
}
i(QR, "isLittleEndian");
class Ln {
  static{i(this, "DataStream")
  }dataView;
  byteView;
  littleEndian;
  offset = 0;
  textDecoder = new TextDecoder;
  textEncoder = new TextEncoder;
  constructor(t=new ArrayBuffer(0), n) {
    this.dataView = t instanceof ArrayBuffer ? new DataView(t) : t,
        this.byteView = new Uint8Array(this.dataView.buffer),
        this.littleEndian = n?.littleEndian ?? QR()
  }
  setBuffer(t) {
    this.dataView = new DataView(t),
        this.byteView = new Uint8Array(t),
        this.offset = 0
  }
  [te.BYTE] = {
    set: t => this.setUint8(t),
    get: () => this.getUint8()
  };
  [te.ASCII] = {
    set: t => this.setUint8(t),
    get: () => this.getUint8()
  };
  [te.SHORT] = {
    set: t => this.setUint16(t),
    get: () => this.getUint16()
  };
  [te.LONG] = {
    set: t => this.setUint32(t),
    get: () => this.getUint32()
  };
  [te.RATIONAL] = {
    set: t => {
      const [n,r] = Ln.uRational(t);
      this.setUint32(n),
          this.setUint32(r)
    }
    ,
    get: () => this.getUint32() / this.getUint32()
  };
  [te.SBYTE] = {
    set: t => this.setInt8(t),
    get: () => this.getInt8()
  };
  [te.UNDEFINED] = {
    set: t => this.setUint8(t),
    get: () => this.getUint8()
  };
  [te.SSHORT] = {
    set: t => this.setInt16(t),
    get: () => this.getInt16()
  };
  [te.SLONG] = {
    set: t => this.setInt32(t),
    get: () => this.getInt32()
  };
  [te.SRATIONAL] = {
    set: t => {
      const [n,r] = Ln.sRational(t);
      this.setInt32(n),
          this.setInt32(r)
    }
    ,
    get: () => this.getInt32() / this.getInt32()
  };
  [te.FLOAT] = {
    set: t => this.setFloat32(t),
    get: () => this.getFloat32()
  };
  [te.DOUBLE] = {
    set: t => this.setFloat64(t),
    get: () => this.getFloat64()
  };
  getUint8() {
    const t = this.dataView.getUint8(this.offset);
    return this.offset += 1,
        t
  }
  getInt8() {
    const t = this.dataView.getInt8(this.offset);
    return this.offset += 1,
        t
  }
  getUint16() {
    const t = this.dataView.getUint16(this.offset, this.littleEndian);
    return this.offset += 2,
        t
  }
  getInt16() {
    const t = this.dataView.getInt16(this.offset, this.littleEndian);
    return this.offset += 2,
        t
  }
  getUint32() {
    const t = this.dataView.getUint32(this.offset, this.littleEndian);
    return this.offset += 4,
        t
  }
  getInt32() {
    const t = this.dataView.getInt32(this.offset, this.littleEndian);
    return this.offset += 4,
        t
  }
  getFloat32() {
    const t = this.dataView.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4,
        t
  }
  getFloat64() {
    const t = this.dataView.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8,
        t
  }
  setUint8(t) {
    this.dataView.setUint8(this.offset, t),
        this.offset += 1
  }
  setInt8(t) {
    this.dataView.setInt8(this.offset, t),
        this.offset += 1
  }
  setUint16(t) {
    this.dataView.setUint16(this.offset, t, this.littleEndian),
        this.offset += 2
  }
  setInt16(t) {
    this.dataView.setInt16(this.offset, t, this.littleEndian),
        this.offset += 2
  }
  setUint32(t) {
    this.dataView.setUint32(this.offset, t, this.littleEndian),
        this.offset += 4
  }
  setInt32(t) {
    this.dataView.setInt32(this.offset, t, this.littleEndian),
        this.offset += 4
  }
  setFloat32(t) {
    this.dataView.setFloat32(this.offset, t, this.littleEndian),
        this.offset += 4
  }
  setFloat64(t) {
    this.dataView.setFloat64(this.offset, t, this.littleEndian),
        this.offset += 8
  }
  getText(t) {
    const n = this.byteView.subarray(this.offset, this.offset + t);
    return this.offset += t,
        this.textDecoder.decode(n)
  }
  setText(t) {
    const n = this.textEncoder.encode(t);
    this.byteView.set(n, this.offset),
        this.offset += n.length
  }
  static sRational(t) {
    if (t === 0)
      return [0, 1];
    const n = Math.abs(t);
    let r;
    return n >= 32768 ? r = 1 : n >= 1 ? r = 32768 : r = 32768 * 32768,
        [Math.round(t * r), r]
  }
  static uRational(t) {
    return t <= 0 ? [0, 1] : Ln.sRational(t)
  }
}
var Ai = (e => (e[e.SOF0 = 65472] = "SOF0",
    e[e.SOF1 = 65473] = "SOF1",
    e[e.SOF2 = 65474] = "SOF2",
    e[e.SOF3 = 65475] = "SOF3",
    e[e.DHT = 65476] = "DHT",
    e[e.SOF5 = 65477] = "SOF5",
    e[e.SOF6 = 65478] = "SOF6",
    e[e.SOF7 = 65479] = "SOF7",
    e[e.JPG = 65480] = "JPG",
    e[e.SOF9 = 65481] = "SOF9",
    e[e.SOF10 = 65482] = "SOF10",
    e[e.SOF11 = 65483] = "SOF11",
    e[e.DAC = 65484] = "DAC",
    e[e.SOF13 = 65485] = "SOF13",
    e[e.SOF14 = 65486] = "SOF14",
    e[e.SOF15 = 65487] = "SOF15",
    e[e.RST0 = 65488] = "RST0",
    e[e.RST1 = 65489] = "RST1",
    e[e.RST2 = 65490] = "RST2",
    e[e.RST3 = 65491] = "RST3",
    e[e.RST4 = 65492] = "RST4",
    e[e.RST5 = 65493] = "RST5",
    e[e.RST6 = 65494] = "RST6",
    e[e.RST7 = 65495] = "RST7",
    e[e.SOI = 65496] = "SOI",
    e[e.EOI = 65497] = "EOI",
    e[e.SOS = 65498] = "SOS",
    e[e.DQT = 65499] = "DQT",
    e[e.DNL = 65500] = "DNL",
    e[e.DRI = 65501] = "DRI",
    e[e.DHP = 65502] = "DHP",
    e[e.EXP = 65503] = "EXP",
    e[e.APP0 = 65504] = "APP0",
    e[e.APP1 = 65505] = "APP1",
    e[e.APP2 = 65506] = "APP2",
    e[e.APP3 = 65507] = "APP3",
    e[e.APP4 = 65508] = "APP4",
    e[e.APP5 = 65509] = "APP5",
    e[e.APP6 = 65510] = "APP6",
    e[e.APP7 = 65511] = "APP7",
    e[e.APP8 = 65512] = "APP8",
    e[e.APP9 = 65513] = "APP9",
    e[e.APP10 = 65514] = "APP10",
    e[e.APP11 = 65515] = "APP11",
    e[e.APP12 = 65516] = "APP12",
    e[e.APP13 = 65517] = "APP13",
    e[e.APP14 = 65518] = "APP14",
    e[e.APP15 = 65519] = "APP15",
    e[e.JPG0 = 65520] = "JPG0",
    e[e.JPG1 = 65521] = "JPG1",
    e[e.JPG2 = 65522] = "JPG2",
    e[e.JPG3 = 65523] = "JPG3",
    e[e.JPG4 = 65524] = "JPG4",
    e[e.JPG5 = 65525] = "JPG5",
    e[e.JPG6 = 65526] = "JPG6",
    e[e.JPG7 = 65527] = "JPG7",
    e[e.JPG8 = 65528] = "JPG8",
    e[e.JPG9 = 65529] = "JPG9",
    e[e.JPG10 = 65530] = "JPG10",
    e[e.JPG11 = 65531] = "JPG11",
    e[e.JPG12 = 65532] = "JPG12",
    e[e.JPG13 = 65533] = "JPG13",
    e[e.COM = 65534] = "COM",
    e))(Ai || {});
async function JR(e) {
  const t = {}
      , n = await e.slice(0, 1024).arrayBuffer()
      , r = new Ln(n);
  if (r.littleEndian = !1,
  r.getUint16() !== 65496)
    throw new Error("Not a valid JPEG");
  for (; r.offset < n.byteLength - 8; ) {
    const o = r.offset
        , c = r.getUint16();
    if (c === 65498)
      break;
    const l = r.getUint16()
        , f = r.getText(4)
        , h = o + l + 2
        , p = Ai[c];
    p && (t[p] = {
      start: o,
      end: h,
      id: f
    }),
        r.offset = h
  }
  return t
}
i(JR, "getJpegMarkers");
function Yl(e, t, n) {
  const s = 4 + Math.max(6, t.length + 1)
      , o = new ArrayBuffer(s)
      , c = new Ln(o);
  return c.littleEndian = !1,
      c.setUint16(e),
      c.setUint16(n + s - 2),
      c.setText(t),
      o
}
i(Yl, "makeSegmentHeader");
const ZR = i(e => -1 * Math.log2(e), "encodeShutterSpeedValue")
    , eA = i(e => 2 * Math.log2(e), "encodeApertureValue");
function tA(e) {
  const t = e.TIFF
      , n = e.Exif
      , r = {
    tag: ve.ExifIFD,
    type: te.LONG,
    value: 0
  };
  t.push(r);
  const s = Wl(t)
      , o = Wl(n)
      , c = 8
      , l = s + o + c;
  r.value = s + c;
  const f = new ArrayBuffer(l)
      , h = new Ln(f);
  return XR(h),
      Gl(h, t, h.offset),
      Gl(h, n, h.offset),
      f
}
i(tA, "makeExif");
async function nA(e, t) {
  const n = await JR(e)
      , r = n.APP0
      , s = n.APP1
      , o = n.APP2
      , c = r?.start ?? s?.start ?? 2
      , l = o?.end ?? s?.end ?? r?.end ?? 2
      , f = [e.slice(0, c)]
      , h = tA(t)
      , p = Yl(Ai.APP1, "Exif", h.byteLength);
  if (f.push(p, h),
      t.ICCProfile) {
    const y = new Uint8Array([1, 1])
        , v = Yl(Ai.APP2, "ICC_PROFILE", t.ICCProfile.byteLength + y.byteLength);
    f.push(v, y, t.ICCProfile)
  }
  return f.push(e.slice(l)),
      new Blob(f,{
        type: e.type
      })
}
i(nA, "writeJpegExif");
const rA = i(e => {
      const t = Math.floor(Math.abs(e) / 60)
          , n = Math.abs(e) % 60
          , r = t.toString().padStart(2, "0")
          , s = n.toString().padStart(2, "0");
      return e < 0 ? `-${r}:${s}` : `${r}:${s}`
    }
    , "convertDateOffsetToExifString")
    , Kl = i( (e, t=0) => {
      e.setMinutes(e.getMinutes() - t);
      let n = e.toISOString();
      return n = n.split(".")[0],
          n = n.replace(/-/g, ":"),
          n.replace(/T/g, " ")
    }
    , "convertDateToExifString")
    , sA = new Uint8Array([0, 0, 2, 24, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 230, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 246, 214, 0, 1, 0, 0, 0, 0, 211, 45, 97, 112, 112, 108, 236, 253, 163, 142, 56, 133, 71, 195, 109, 180, 189, 79, 122, 218, 24, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 100, 101, 115, 99, 0, 0, 0, 252, 0, 0, 0, 48, 99, 112, 114, 116, 0, 0, 1, 44, 0, 0, 0, 80, 119, 116, 112, 116, 0, 0, 1, 124, 0, 0, 0, 20, 114, 88, 89, 90, 0, 0, 1, 144, 0, 0, 0, 20, 103, 88, 89, 90, 0, 0, 1, 164, 0, 0, 0, 20, 98, 88, 89, 90, 0, 0, 1, 184, 0, 0, 0, 20, 114, 84, 82, 67, 0, 0, 1, 204, 0, 0, 0, 32, 99, 104, 97, 100, 0, 0, 1, 236, 0, 0, 0, 44, 98, 84, 82, 67, 0, 0, 1, 204, 0, 0, 0, 32, 103, 84, 82, 67, 0, 0, 1, 204, 0, 0, 0, 32, 109, 108, 117, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 101, 110, 85, 83, 0, 0, 0, 20, 0, 0, 0, 28, 0, 68, 0, 105, 0, 115, 0, 112, 0, 108, 0, 97, 0, 121, 0, 32, 0, 80, 0, 51, 109, 108, 117, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 101, 110, 85, 83, 0, 0, 0, 52, 0, 0, 0, 28, 0, 67, 0, 111, 0, 112, 0, 121, 0, 114, 0, 105, 0, 103, 0, 104, 0, 116, 0, 32, 0, 65, 0, 112, 0, 112, 0, 108, 0, 101, 0, 32, 0, 73, 0, 110, 0, 99, 0, 46, 0, 44, 0, 32, 0, 50, 0, 48, 0, 50, 0, 50, 88, 89, 90, 32, 0, 0, 0, 0, 0, 0, 246, 213, 0, 1, 0, 0, 0, 0, 211, 44, 88, 89, 90, 32, 0, 0, 0, 0, 0, 0, 131, 223, 0, 0, 61, 191, 255, 255, 255, 187, 88, 89, 90, 32, 0, 0, 0, 0, 0, 0, 74, 191, 0, 0, 177, 55, 0, 0, 10, 185, 88, 89, 90, 32, 0, 0, 0, 0, 0, 0, 40, 56, 0, 0, 17, 11, 0, 0, 200, 185, 112, 97, 114, 97, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 102, 102, 0, 0, 242, 167, 0, 0, 13, 89, 0, 0, 19, 208, 0, 0, 10, 91, 115, 102, 51, 50, 0, 0, 0, 0, 0, 1, 12, 66, 0, 0, 5, 222, 255, 255, 243, 38, 0, 0, 7, 147, 0, 0, 253, 144, 255, 255, 251, 162, 255, 255, 253, 163, 0, 0, 3, 220, 0, 0, 192, 110])
    , iA = i(async (e, t, n, r) => {
      const {width: s, height: o, colorSpace: c} = n
          , l = Kl(new Date)
          , f = t.dateCreated ? Kl(new Date(t.dateCreated), t.dateCreatedOffset ?? 0) : l
          , h = t.dateCreatedOffset ? rA(t.dateCreatedOffset) : "00:00"
          , p = new TextEncoder
          , y = [{
        tag: ve.ImageWidth,
        type: te.LONG,
        value: s
      }, {
        tag: ve.ImageLength,
        type: te.LONG,
        value: o
      }, {
        tag: ve.Orientation,
        type: te.SHORT,
        value: 1
      }, {
        tag: ve.XResolution,
        type: te.RATIONAL,
        value: r
      }, {
        tag: ve.YResolution,
        type: te.RATIONAL,
        value: r
      }, {
        tag: ve.ResolutionUnit,
        type: te.SHORT,
        value: 2
      }, {
        tag: ve.Software,
        type: te.ASCII,
        value: p.encode("Polarr Next")
      }, {
        tag: ve.DateTime,
        type: te.ASCII,
        value: p.encode(l)
      }]
          , v = [{
        tag: ve.ExifVersion,
        type: te.UNDEFINED,
        value: p.encode("0231")
      }, {
        tag: ve.PixelXDimension,
        type: te.LONG,
        value: s
      }, {
        tag: ve.PixelYDimension,
        type: te.LONG,
        value: o
      }, {
        tag: ve.DateTimeDigitized,
        type: te.ASCII,
        value: p.encode(f)
      }, {
        tag: ve.DateTimeOriginal,
        type: te.ASCII,
        value: p.encode(f)
      }, {
        tag: ve.OffsetTime,
        type: te.ASCII,
        value: p.encode(h)
      }, {
        tag: ve.OffsetTimeOriginal,
        type: te.ASCII,
        value: p.encode(h)
      }, {
        tag: ve.OffsetTimeDigitized,
        type: te.ASCII,
        value: p.encode(h)
      }];
      if (t.iso && (v.push({
        tag: ve.ISOSpeed,
        type: te.LONG,
        value: t.iso
      }),
          v.push({
            tag: ve.ISOSpeedRatings,
            type: te.LONG,
            value: t.iso
          })),
      t.focalLength && v.push({
        tag: ve.FocalLength,
        type: te.RATIONAL,
        value: t.focalLength
      }),
          t.shutterSpeed) {
        const b = ZR(t.shutterSpeed);
        v.push({
          tag: ve.ShutterSpeedValue,
          type: te.SRATIONAL,
          value: b
        }),
            v.push({
              tag: ve.ExposureTime,
              type: te.RATIONAL,
              value: t.shutterSpeed
            })
      }
      if (t.fNumber) {
        const b = eA(t.fNumber);
        v.push({
          tag: ve.ApertureValue,
          type: te.RATIONAL,
          value: b
        }),
            v.push({
              tag: ve.FNumber,
              type: te.RATIONAL,
              value: t.fNumber
            })
      }
      return t.lensMake && v.push({
        tag: ve.LensMakeExif,
        type: te.ASCII,
        value: p.encode(t.lensMake)
      }),
      t.lensModel && v.push({
        tag: ve.LensModelExif,
        type: te.ASCII,
        value: p.encode(t.lensModel)
      }),
      t.flash != null && v.push({
        tag: ve.Flash,
        type: te.SHORT,
        value: t.flash
      }),
      t.cameraMake && y.push({
        tag: ve.Make,
        type: te.ASCII,
        value: p.encode(t.cameraMake)
      }),
      t.cameraModel && y.push({
        tag: ve.Model,
        type: te.ASCII,
        value: p.encode(t.cameraModel)
      }),
      t.artist && y.push({
        tag: ve.Artist,
        type: te.ASCII,
        value: p.encode(t.artist)
      }),
      t.copyright && y.push({
        tag: ve.Copyright,
        type: te.ASCII,
        value: p.encode(t.copyright)
      }),
          e = await nA(e, {
            TIFF: y,
            Exif: v,
            ICCProfile: c === "display-p3" ? sA : void 0
          }),
          e
    }
    , "writeJpegMetadataToBlob");
var at = (e => (e[e.small = 100] = "small",
    e[e.medium = 1200] = "medium",
    e[e.large = 2e3] = "large",
    e[e.fullSize = 6e3] = "fullSize",
    e))(at || {})
    , Ec = {}
    , Ki = {};
(function(e) {
      const t = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD"
          , n = t + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040"
          , r = "[" + t + "][" + n + "]*"
          , s = new RegExp("^" + r + "$")
          , o = i(function(l, f) {
        const h = [];
        let p = f.exec(l);
        for (; p; ) {
          const y = [];
          y.startIndex = f.lastIndex - p[0].length;
          const v = p.length;
          for (let b = 0; b < v; b++)
            y.push(p[b]);
          h.push(y),
              p = f.exec(l)
        }
        return h
      }, "getAllMatches")
          , c = i(function(l) {
        const f = s.exec(l);
        return !(f === null || typeof f > "u")
      }, "isName");
      e.isExist = function(l) {
        return typeof l < "u"
      }
          ,
          e.isEmptyObject = function(l) {
            return Object.keys(l).length === 0
          }
          ,
          e.merge = function(l, f, h) {
            if (f) {
              const p = Object.keys(f)
                  , y = p.length;
              for (let v = 0; v < y; v++)
                h === "strict" ? l[p[v]] = [f[p[v]]] : l[p[v]] = f[p[v]]
            }
          }
          ,
          e.getValue = function(l) {
            return e.isExist(l) ? l : ""
          }
          ,
          e.isName = c,
          e.getAllMatches = o,
          e.nameRegexp = r
    }
)(Ki);
const bc = Ki
    , oA = {
  allowBooleanAttributes: !1,
  unpairedTags: []
};
Ec.validate = function(e, t) {
  t = Object.assign({}, oA, t);
  const n = [];
  let r = !1
      , s = !1;
  e[0] === "\uFEFF" && (e = e.substr(1));
  for (let o = 0; o < e.length; o++)
    if (e[o] === "<" && e[o + 1] === "?") {
      if (o += 2,
          o = Ql(e, o),
          o.err)
        return o
    } else if (e[o] === "<") {
      let c = o;
      if (o++,
      e[o] === "!") {
        o = Jl(e, o);
        continue
      } else {
        let l = !1;
        e[o] === "/" && (l = !0,
            o++);
        let f = "";
        for (; o < e.length && e[o] !== ">" && e[o] !== " " && e[o] !== "	" && e[o] !== `
` && e[o] !== "\r"; o++)
          f += e[o];
        if (f = f.trim(),
        f[f.length - 1] === "/" && (f = f.substring(0, f.length - 1),
            o--),
            !pA(f)) {
          let y;
          return f.trim().length === 0 ? y = "Invalid space after '<'." : y = "Tag '" + f + "' is an invalid name.",
              Le("InvalidTag", y, st(e, o))
        }
        const h = uA(e, o);
        if (h === !1)
          return Le("InvalidAttr", "Attributes for '" + f + "' have open quote.", st(e, o));
        let p = h.value;
        if (o = h.index,
        p[p.length - 1] === "/") {
          const y = o - p.length;
          p = p.substring(0, p.length - 1);
          const v = Zl(p, t);
          if (v === !0)
            r = !0;
          else
            return Le(v.err.code, v.err.msg, st(e, y + v.err.line))
        } else if (l)
          if (h.tagClosed) {
            if (p.trim().length > 0)
              return Le("InvalidTag", "Closing tag '" + f + "' can't have attributes or invalid starting.", st(e, c));
            {
              const y = n.pop();
              if (f !== y.tagName) {
                let v = st(e, y.tagStartPos);
                return Le("InvalidTag", "Expected closing tag '" + y.tagName + "' (opened in line " + v.line + ", col " + v.col + ") instead of closing tag '" + f + "'.", st(e, c))
              }
              n.length == 0 && (s = !0)
            }
          } else
            return Le("InvalidTag", "Closing tag '" + f + "' doesn't have proper closing.", st(e, o));
        else {
          const y = Zl(p, t);
          if (y !== !0)
            return Le(y.err.code, y.err.msg, st(e, o - p.length + y.err.line));
          if (s === !0)
            return Le("InvalidXml", "Multiple possible root nodes found.", st(e, o));
          t.unpairedTags.indexOf(f) !== -1 || n.push({
            tagName: f,
            tagStartPos: c
          }),
              r = !0
        }
        for (o++; o < e.length; o++)
          if (e[o] === "<")
            if (e[o + 1] === "!") {
              o++,
                  o = Jl(e, o);
              continue
            } else if (e[o + 1] === "?") {
              if (o = Ql(e, ++o),
                  o.err)
                return o
            } else
              break;
          else if (e[o] === "&") {
            const y = dA(e, o);
            if (y == -1)
              return Le("InvalidChar", "char '&' is not expected.", st(e, o));
            o = y
          } else if (s === !0 && !Xl(e[o]))
            return Le("InvalidXml", "Extra text at the end", st(e, o));
        e[o] === "<" && o--
      }
    } else {
      if (Xl(e[o]))
        continue;
      return Le("InvalidChar", "char '" + e[o] + "' is not expected.", st(e, o))
    }
  if (r) {
    if (n.length == 1)
      return Le("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", st(e, n[0].tagStartPos));
    if (n.length > 0)
      return Le("InvalidXml", "Invalid '" + JSON.stringify(n.map(o => o.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
        line: 1,
        col: 1
      })
  } else
    return Le("InvalidXml", "Start tag expected.", 1);
  return !0
}
;
function Xl(e) {
  return e === " " || e === "	" || e === `
` || e === "\r"
}
i(Xl, "isWhiteSpace");
function Ql(e, t) {
  const n = t;
  for (; t < e.length; t++)
    if (e[t] == "?" || e[t] == " ") {
      const r = e.substr(n, t - n);
      if (t > 5 && r === "xml")
        return Le("InvalidXml", "XML declaration allowed only at the start of the document.", st(e, t));
      if (e[t] == "?" && e[t + 1] == ">") {
        t++;
        break
      } else
        continue
    }
  return t
}
i(Ql, "readPI");
function Jl(e, t) {
  if (e.length > t + 5 && e[t + 1] === "-" && e[t + 2] === "-") {
    for (t += 3; t < e.length; t++)
      if (e[t] === "-" && e[t + 1] === "-" && e[t + 2] === ">") {
        t += 2;
        break
      }
  } else if (e.length > t + 8 && e[t + 1] === "D" && e[t + 2] === "O" && e[t + 3] === "C" && e[t + 4] === "T" && e[t + 5] === "Y" && e[t + 6] === "P" && e[t + 7] === "E") {
    let n = 1;
    for (t += 8; t < e.length; t++)
      if (e[t] === "<")
        n++;
      else if (e[t] === ">" && (n--,
      n === 0))
        break
  } else if (e.length > t + 9 && e[t + 1] === "[" && e[t + 2] === "C" && e[t + 3] === "D" && e[t + 4] === "A" && e[t + 5] === "T" && e[t + 6] === "A" && e[t + 7] === "[") {
    for (t += 8; t < e.length; t++)
      if (e[t] === "]" && e[t + 1] === "]" && e[t + 2] === ">") {
        t += 2;
        break
      }
  }
  return t
}
i(Jl, "readCommentAndCDATA");
const aA = '"'
    , cA = "'";
function uA(e, t) {
  let n = ""
      , r = ""
      , s = !1;
  for (; t < e.length; t++) {
    if (e[t] === aA || e[t] === cA)
      r === "" ? r = e[t] : r !== e[t] || (r = "");
    else if (e[t] === ">" && r === "") {
      s = !0;
      break
    }
    n += e[t]
  }
  return r !== "" ? !1 : {
    value: n,
    index: t,
    tagClosed: s
  }
}
i(uA, "readAttributeStr");
const lA = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");
function Zl(e, t) {
  const n = bc.getAllMatches(e, lA)
      , r = {};
  for (let s = 0; s < n.length; s++) {
    if (n[s][1].length === 0)
      return Le("InvalidAttr", "Attribute '" + n[s][2] + "' has no space in starting.", qr(n[s]));
    if (n[s][3] !== void 0 && n[s][4] === void 0)
      return Le("InvalidAttr", "Attribute '" + n[s][2] + "' is without value.", qr(n[s]));
    if (n[s][3] === void 0 && !t.allowBooleanAttributes)
      return Le("InvalidAttr", "boolean attribute '" + n[s][2] + "' is not allowed.", qr(n[s]));
    const o = n[s][2];
    if (!hA(o))
      return Le("InvalidAttr", "Attribute '" + o + "' is an invalid name.", qr(n[s]));
    if (!r.hasOwnProperty(o))
      r[o] = 1;
    else
      return Le("InvalidAttr", "Attribute '" + o + "' is repeated.", qr(n[s]))
  }
  return !0
}
i(Zl, "validateAttributeString");
function fA(e, t) {
  let n = /\d/;
  for (e[t] === "x" && (t++,
      n = /[\da-fA-F]/); t < e.length; t++) {
    if (e[t] === ";")
      return t;
    if (!e[t].match(n))
      break
  }
  return -1
}
i(fA, "validateNumberAmpersand");
function dA(e, t) {
  if (t++,
  e[t] === ";")
    return -1;
  if (e[t] === "#")
    return t++,
        fA(e, t);
  let n = 0;
  for (; t < e.length; t++,
      n++)
    if (!(e[t].match(/\w/) && n < 20)) {
      if (e[t] === ";")
        break;
      return -1
    }
  return t
}
i(dA, "validateAmpersand");
function Le(e, t, n) {
  return {
    err: {
      code: e,
      msg: t,
      line: n.line || n,
      col: n.col
    }
  }
}
i(Le, "getErrorObject");
function hA(e) {
  return bc.isName(e)
}
i(hA, "validateAttrName");
function pA(e) {
  return bc.isName(e)
}
i(pA, "validateTagName");
function st(e, t) {
  const n = e.substring(0, t).split(/\r?\n/);
  return {
    line: n.length,
    col: n[n.length - 1].length + 1
  }
}
i(st, "getLineNumberForPosition");
function qr(e) {
  return e.startIndex + e[1].length
}
i(qr, "getPositionFromMatch");
var wc = {};
const sp = {
  preserveOrder: !1,
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  removeNSPrefix: !1,
  allowBooleanAttributes: !1,
  parseTagValue: !0,
  parseAttributeValue: !1,
  trimValues: !0,
  cdataPropName: !1,
  numberParseOptions: {
    hex: !0,
    leadingZeros: !0,
    eNotation: !0
  },
  tagValueProcessor: function(e, t) {
    return t
  },
  attributeValueProcessor: function(e, t) {
    return t
  },
  stopNodes: [],
  alwaysCreateTextNode: !1,
  isArray: () => !1,
  commentPropName: !1,
  unpairedTags: [],
  processEntities: !0,
  htmlEntities: !1,
  ignoreDeclaration: !1,
  ignorePiTags: !1,
  transformTagName: !1,
  transformAttributeName: !1,
  updateTag: function(e, t, n) {
    return e
  }
}
    , mA = i(function(e) {
  return Object.assign({}, sp, e)
}, "buildOptions$1");
wc.buildOptions = mA;
wc.defaultOptions = sp;
class yA {
  static{i(this, "XmlNode")
  }constructor(t) {
    this.tagname = t,
        this.child = [],
        this[":@"] = {}
  }
  add(t, n) {
    t === "__proto__" && (t = "#__proto__"),
        this.child.push({
          [t]: n
        })
  }
  addChild(t) {
    t.tagname === "__proto__" && (t.tagname = "#__proto__"),
        t[":@"] && Object.keys(t[":@"]).length > 0 ? this.child.push({
          [t.tagname]: t.child,
          ":@": t[":@"]
        }) : this.child.push({
          [t.tagname]: t.child
        })
  }
}
var gA = yA;
const _A = Ki;
function vA(e, t) {
  const n = {};
  if (e[t + 3] === "O" && e[t + 4] === "C" && e[t + 5] === "T" && e[t + 6] === "Y" && e[t + 7] === "P" && e[t + 8] === "E") {
    t = t + 9;
    let r = 1
        , s = !1
        , o = !1
        , c = "";
    for (; t < e.length; t++)
      if (e[t] === "<" && !o) {
        if (s && bA(e, t))
          t += 7,
              [entityName,val,t] = SA(e, t + 1),
          val.indexOf("&") === -1 && (n[AA(entityName)] = {
            regx: RegExp(`&${entityName};`, "g"),
            val
          });
        else if (s && wA(e, t))
          t += 8;
        else if (s && IA(e, t))
          t += 8;
        else if (s && RA(e, t))
          t += 9;
        else if (EA)
          o = !0;
        else
          throw new Error("Invalid DOCTYPE");
        r++,
            c = ""
      } else if (e[t] === ">") {
        if (o ? e[t - 1] === "-" && e[t - 2] === "-" && (o = !1,
            r--) : r--,
        r === 0)
          break
      } else
        e[t] === "[" ? s = !0 : c += e[t];
    if (r !== 0)
      throw new Error("Unclosed DOCTYPE")
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return {
    entities: n,
    i: t
  }
}
i(vA, "readDocType$1");
function SA(e, t) {
  let n = "";
  for (; t < e.length && e[t] !== "'" && e[t] !== '"'; t++)
    n += e[t];
  if (n = n.trim(),
  n.indexOf(" ") !== -1)
    throw new Error("External entites are not supported");
  const r = e[t++];
  let s = "";
  for (; t < e.length && e[t] !== r; t++)
    s += e[t];
  return [n, s, t]
}
i(SA, "readEntityExp");
function EA(e, t) {
  return e[t + 1] === "!" && e[t + 2] === "-" && e[t + 3] === "-"
}
i(EA, "isComment");
function bA(e, t) {
  return e[t + 1] === "!" && e[t + 2] === "E" && e[t + 3] === "N" && e[t + 4] === "T" && e[t + 5] === "I" && e[t + 6] === "T" && e[t + 7] === "Y"
}
i(bA, "isEntity");
function wA(e, t) {
  return e[t + 1] === "!" && e[t + 2] === "E" && e[t + 3] === "L" && e[t + 4] === "E" && e[t + 5] === "M" && e[t + 6] === "E" && e[t + 7] === "N" && e[t + 8] === "T"
}
i(wA, "isElement");
function IA(e, t) {
  return e[t + 1] === "!" && e[t + 2] === "A" && e[t + 3] === "T" && e[t + 4] === "T" && e[t + 5] === "L" && e[t + 6] === "I" && e[t + 7] === "S" && e[t + 8] === "T"
}
i(IA, "isAttlist");
function RA(e, t) {
  return e[t + 1] === "!" && e[t + 2] === "N" && e[t + 3] === "O" && e[t + 4] === "T" && e[t + 5] === "A" && e[t + 6] === "T" && e[t + 7] === "I" && e[t + 8] === "O" && e[t + 9] === "N"
}
i(RA, "isNotation");
function AA(e) {
  if (_A.isName(e))
    return e;
  throw new Error(`Invalid entity name ${e}`)
}
i(AA, "validateEntityName");
var kA = vA;
const OA = /^[-+]?0x[a-fA-F0-9]+$/
    , PA = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
!Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt);
!Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
const NA = {
  hex: !0,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
};
function TA(e, t={}) {
  if (t = Object.assign({}, NA, t),
  !e || typeof e != "string")
    return e;
  let n = e.trim();
  if (t.skipLike !== void 0 && t.skipLike.test(n))
    return e;
  if (t.hex && OA.test(n))
    return Number.parseInt(n, 16);
  {
    const r = PA.exec(n);
    if (r) {
      const s = r[1]
          , o = r[2];
      let c = xA(r[3]);
      const l = r[4] || r[6];
      if (!t.leadingZeros && o.length > 0 && s && n[2] !== ".")
        return e;
      if (!t.leadingZeros && o.length > 0 && !s && n[1] !== ".")
        return e;
      {
        const f = Number(n)
            , h = "" + f;
        return h.search(/[eE]/) !== -1 || l ? t.eNotation ? f : e : n.indexOf(".") !== -1 ? h === "0" && c === "" || h === c || s && h === "-" + c ? f : e : o ? c === h || s + c === h ? f : e : n === h || n === s + h ? f : e
      }
    } else
      return e
  }
}
i(TA, "toNumber$1");
function xA(e) {
  return e && e.indexOf(".") !== -1 && (e = e.replace(/0+$/, ""),
      e === "." ? e = "0" : e[0] === "." ? e = "0" + e : e[e.length - 1] === "." && (e = e.substr(0, e.length - 1))),
      e
}
i(xA, "trimZeros");
var CA = TA;
const Ic = Ki
    , zr = gA
    , MA = kA
    , FA = CA;
"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, Ic.nameRegexp);
let DA = class {
      static{i(this, "OrderedObjParser")
      }constructor(t) {
        this.options = t,
            this.currentNode = null,
            this.tagsNodeStack = [],
            this.docTypeEntities = {},
            this.lastEntities = {
              apos: {
                regex: /&(apos|#39|#x27);/g,
                val: "'"
              },
              gt: {
                regex: /&(gt|#62|#x3E);/g,
                val: ">"
              },
              lt: {
                regex: /&(lt|#60|#x3C);/g,
                val: "<"
              },
              quot: {
                regex: /&(quot|#34|#x22);/g,
                val: '"'
              }
            },
            this.ampEntity = {
              regex: /&(amp|#38|#x26);/g,
              val: "&"
            },
            this.htmlEntities = {
              space: {
                regex: /&(nbsp|#160);/g,
                val: " "
              },
              cent: {
                regex: /&(cent|#162);/g,
                val: "¢"
              },
              pound: {
                regex: /&(pound|#163);/g,
                val: "£"
              },
              yen: {
                regex: /&(yen|#165);/g,
                val: "¥"
              },
              euro: {
                regex: /&(euro|#8364);/g,
                val: "€"
              },
              copyright: {
                regex: /&(copy|#169);/g,
                val: "©"
              },
              reg: {
                regex: /&(reg|#174);/g,
                val: "®"
              },
              inr: {
                regex: /&(inr|#8377);/g,
                val: "₹"
              }
            },
            this.addExternalEntities = LA,
            this.parseXml = jA,
            this.parseTextData = UA,
            this.resolveNameSpace = BA,
            this.buildAttributesMap = HA,
            this.isItStopNode = VA,
            this.replaceEntitiesValue = zA,
            this.readStopNodeData = YA,
            this.saveTextToParentTag = WA,
            this.addChild = qA
      }
    }
;
function LA(e) {
  const t = Object.keys(e);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    this.lastEntities[r] = {
      regex: new RegExp("&" + r + ";","g"),
      val: e[r]
    }
  }
}
i(LA, "addExternalEntities");
function UA(e, t, n, r, s, o, c) {
  if (e !== void 0 && (this.options.trimValues && !r && (e = e.trim()),
  e.length > 0)) {
    c || (e = this.replaceEntitiesValue(e));
    const l = this.options.tagValueProcessor(t, e, n, s, o);
    return l == null ? e : typeof l != typeof e || l !== e ? l : this.options.trimValues ? Ea(e, this.options.parseTagValue, this.options.numberParseOptions) : e.trim() === e ? Ea(e, this.options.parseTagValue, this.options.numberParseOptions) : e
  }
}
i(UA, "parseTextData");
function BA(e) {
  if (this.options.removeNSPrefix) {
    const t = e.split(":")
        , n = e.charAt(0) === "/" ? "/" : "";
    if (t[0] === "xmlns")
      return "";
    t.length === 2 && (e = n + t[1])
  }
  return e
}
i(BA, "resolveNameSpace");
const $A = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");
function HA(e, t, n) {
  if (!this.options.ignoreAttributes && typeof e == "string") {
    const r = Ic.getAllMatches(e, $A)
        , s = r.length
        , o = {};
    for (let c = 0; c < s; c++) {
      const l = this.resolveNameSpace(r[c][1]);
      let f = r[c][4]
          , h = this.options.attributeNamePrefix + l;
      if (l.length)
        if (this.options.transformAttributeName && (h = this.options.transformAttributeName(h)),
        h === "__proto__" && (h = "#__proto__"),
        f !== void 0) {
          this.options.trimValues && (f = f.trim()),
              f = this.replaceEntitiesValue(f);
          const p = this.options.attributeValueProcessor(l, f, t);
          p == null ? o[h] = f : typeof p != typeof f || p !== f ? o[h] = p : o[h] = Ea(f, this.options.parseAttributeValue, this.options.numberParseOptions)
        } else
          this.options.allowBooleanAttributes && (o[h] = !0)
    }
    if (!Object.keys(o).length)
      return;
    if (this.options.attributesGroupName) {
      const c = {};
      return c[this.options.attributesGroupName] = o,
          c
    }
    return o
  }
}
i(HA, "buildAttributesMap");
const jA = i(function(e) {
  e = e.replace(/\r\n?/g, `
`);
  const t = new zr("!xml");
  let n = t
      , r = ""
      , s = "";
  for (let o = 0; o < e.length; o++)
    if (e[o] === "<")
      if (e[o + 1] === "/") {
        const l = xn(e, ">", o, "Closing Tag is not closed.");
        let f = e.substring(o + 2, l).trim();
        if (this.options.removeNSPrefix) {
          const y = f.indexOf(":");
          y !== -1 && (f = f.substr(y + 1))
        }
        this.options.transformTagName && (f = this.options.transformTagName(f)),
        n && (r = this.saveTextToParentTag(r, n, s));
        const h = s.substring(s.lastIndexOf(".") + 1);
        if (f && this.options.unpairedTags.indexOf(f) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${f}>`);
        let p = 0;
        h && this.options.unpairedTags.indexOf(h) !== -1 ? (p = s.lastIndexOf(".", s.lastIndexOf(".") - 1),
            this.tagsNodeStack.pop()) : p = s.lastIndexOf("."),
            s = s.substring(0, p),
            n = this.tagsNodeStack.pop(),
            r = "",
            o = l
      } else if (e[o + 1] === "?") {
        let l = Sa(e, o, !1, "?>");
        if (!l)
          throw new Error("Pi Tag is not closed.");
        if (r = this.saveTextToParentTag(r, n, s),
            !(this.options.ignoreDeclaration && l.tagName === "?xml" || this.options.ignorePiTags)) {
          const f = new zr(l.tagName);
          f.add(this.options.textNodeName, ""),
          l.tagName !== l.tagExp && l.attrExpPresent && (f[":@"] = this.buildAttributesMap(l.tagExp, s, l.tagName)),
              this.addChild(n, f, s)
        }
        o = l.closeIndex + 1
      } else if (e.substr(o + 1, 3) === "!--") {
        const l = xn(e, "-->", o + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const f = e.substring(o + 4, l - 2);
          r = this.saveTextToParentTag(r, n, s),
              n.add(this.options.commentPropName, [{
                [this.options.textNodeName]: f
              }])
        }
        o = l
      } else if (e.substr(o + 1, 2) === "!D") {
        const l = MA(e, o);
        this.docTypeEntities = l.entities,
            o = l.i
      } else if (e.substr(o + 1, 2) === "![") {
        const l = xn(e, "]]>", o, "CDATA is not closed.") - 2
            , f = e.substring(o + 9, l);
        if (r = this.saveTextToParentTag(r, n, s),
            this.options.cdataPropName)
          n.add(this.options.cdataPropName, [{
            [this.options.textNodeName]: f
          }]);
        else {
          let h = this.parseTextData(f, n.tagname, s, !0, !1, !0);
          h == null && (h = ""),
              n.add(this.options.textNodeName, h)
        }
        o = l + 2
      } else {
        let l = Sa(e, o, this.options.removeNSPrefix)
            , f = l.tagName;
        const h = l.rawTagName;
        let p = l.tagExp
            , y = l.attrExpPresent
            , v = l.closeIndex;
        this.options.transformTagName && (f = this.options.transformTagName(f)),
        n && r && n.tagname !== "!xml" && (r = this.saveTextToParentTag(r, n, s, !1));
        const b = n;
        if (b && this.options.unpairedTags.indexOf(b.tagname) !== -1 && (n = this.tagsNodeStack.pop(),
            s = s.substring(0, s.lastIndexOf("."))),
        f !== t.tagname && (s += s ? "." + f : f),
            this.isItStopNode(this.options.stopNodes, s, f)) {
          let S = "";
          if (p.length > 0 && p.lastIndexOf("/") === p.length - 1)
            o = l.closeIndex;
          else if (this.options.unpairedTags.indexOf(f) !== -1)
            o = l.closeIndex;
          else {
            const k = this.readStopNodeData(e, h, v + 1);
            if (!k)
              throw new Error(`Unexpected end of ${h}`);
            o = k.i,
                S = k.tagContent
          }
          const R = new zr(f);
          f !== p && y && (R[":@"] = this.buildAttributesMap(p, s, f)),
          S && (S = this.parseTextData(S, f, s, !0, y, !0, !0)),
              s = s.substr(0, s.lastIndexOf(".")),
              R.add(this.options.textNodeName, S),
              this.addChild(n, R, s)
        } else {
          if (p.length > 0 && p.lastIndexOf("/") === p.length - 1) {
            f[f.length - 1] === "/" ? (f = f.substr(0, f.length - 1),
                s = s.substr(0, s.length - 1),
                p = f) : p = p.substr(0, p.length - 1),
            this.options.transformTagName && (f = this.options.transformTagName(f));
            const S = new zr(f);
            f !== p && y && (S[":@"] = this.buildAttributesMap(p, s, f)),
                this.addChild(n, S, s),
                s = s.substr(0, s.lastIndexOf("."))
          } else {
            const S = new zr(f);
            this.tagsNodeStack.push(n),
            f !== p && y && (S[":@"] = this.buildAttributesMap(p, s, f)),
                this.addChild(n, S, s),
                n = S
          }
          r = "",
              o = v
        }
      }
    else
      r += e[o];
  return t.child
}, "parseXml");
function qA(e, t, n) {
  const r = this.options.updateTag(t.tagname, n, t[":@"]);
  r === !1 || (typeof r == "string" && (t.tagname = r),
      e.addChild(t))
}
i(qA, "addChild");
const zA = i(function(e) {
  if (this.options.processEntities) {
    for (let t in this.docTypeEntities) {
      const n = this.docTypeEntities[t];
      e = e.replace(n.regx, n.val)
    }
    for (let t in this.lastEntities) {
      const n = this.lastEntities[t];
      e = e.replace(n.regex, n.val)
    }
    if (this.options.htmlEntities)
      for (let t in this.htmlEntities) {
        const n = this.htmlEntities[t];
        e = e.replace(n.regex, n.val)
      }
    e = e.replace(this.ampEntity.regex, this.ampEntity.val)
  }
  return e
}, "replaceEntitiesValue$1");
function WA(e, t, n, r) {
  return e && (r === void 0 && (r = Object.keys(t.child).length === 0),
      e = this.parseTextData(e, t.tagname, n, !1, t[":@"] ? Object.keys(t[":@"]).length !== 0 : !1, r),
  e !== void 0 && e !== "" && t.add(this.options.textNodeName, e),
      e = ""),
      e
}
i(WA, "saveTextToParentTag");
function VA(e, t, n) {
  const r = "*." + n;
  for (const s in e) {
    const o = e[s];
    if (r === o || t === o)
      return !0
  }
  return !1
}
i(VA, "isItStopNode");
function GA(e, t, n=">") {
  let r, s = "";
  for (let o = t; o < e.length; o++) {
    let c = e[o];
    if (r)
      c === r && (r = "");
    else if (c === '"' || c === "'")
      r = c;
    else if (c === n[0])
      if (n[1]) {
        if (e[o + 1] === n[1])
          return {
            data: s,
            index: o
          }
      } else
        return {
          data: s,
          index: o
        };
    else
      c === "	" && (c = " ");
    s += c
  }
}
i(GA, "tagExpWithClosingIndex");
function xn(e, t, n, r) {
  const s = e.indexOf(t, n);
  if (s === -1)
    throw new Error(r);
  return s + t.length - 1
}
i(xn, "findClosingIndex");
function Sa(e, t, n, r=">") {
  const s = GA(e, t + 1, r);
  if (!s)
    return;
  let o = s.data;
  const c = s.index
      , l = o.search(/\s/);
  let f = o
      , h = !0;
  l !== -1 && (f = o.substr(0, l).replace(/\s\s*$/, ""),
      o = o.substr(l + 1));
  const p = f;
  if (n) {
    const y = f.indexOf(":");
    y !== -1 && (f = f.substr(y + 1),
        h = f !== s.data.substr(y + 1))
  }
  return {
    tagName: f,
    tagExp: o,
    closeIndex: c,
    attrExpPresent: h,
    rawTagName: p
  }
}
i(Sa, "readTagExp");
function YA(e, t, n) {
  const r = n;
  let s = 1;
  for (; n < e.length; n++)
    if (e[n] === "<")
      if (e[n + 1] === "/") {
        const o = xn(e, ">", n, `${t} is not closed`);
        if (e.substring(n + 2, o).trim() === t && (s--,
        s === 0))
          return {
            tagContent: e.substring(r, n),
            i: o
          };
        n = o
      } else if (e[n + 1] === "?")
        n = xn(e, "?>", n + 1, "StopNode is not closed.");
      else if (e.substr(n + 1, 3) === "!--")
        n = xn(e, "-->", n + 3, "StopNode is not closed.");
      else if (e.substr(n + 1, 2) === "![")
        n = xn(e, "]]>", n, "StopNode is not closed.") - 2;
      else {
        const o = Sa(e, n, ">");
        o && ((o && o.tagName) === t && o.tagExp[o.tagExp.length - 1] !== "/" && s++,
            n = o.closeIndex)
      }
}
i(YA, "readStopNodeData");
function Ea(e, t, n) {
  if (t && typeof e == "string") {
    const r = e.trim();
    return r === "true" ? !0 : r === "false" ? !1 : FA(e, n)
  } else
    return Ic.isExist(e) ? e : ""
}
i(Ea, "parseValue");
var KA = DA
    , ip = {};
function XA(e, t) {
  return op(e, t)
}
i(XA, "prettify$1");
function op(e, t, n) {
  let r;
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const c = e[o]
        , l = QA(c);
    let f = "";
    if (n === void 0 ? f = l : f = n + "." + l,
    l === t.textNodeName)
      r === void 0 ? r = c[l] : r += "" + c[l];
    else {
      if (l === void 0)
        continue;
      if (c[l]) {
        let h = op(c[l], t, f);
        const p = ZA(h, t);
        c[":@"] ? JA(h, c[":@"], f, t) : Object.keys(h).length === 1 && h[t.textNodeName] !== void 0 && !t.alwaysCreateTextNode ? h = h[t.textNodeName] : Object.keys(h).length === 0 && (t.alwaysCreateTextNode ? h[t.textNodeName] = "" : h = ""),
            s[l] !== void 0 && s.hasOwnProperty(l) ? (Array.isArray(s[l]) || (s[l] = [s[l]]),
                s[l].push(h)) : t.isArray(l, f, p) ? s[l] = [h] : s[l] = h
      }
    }
  }
  return typeof r == "string" ? r.length > 0 && (s[t.textNodeName] = r) : r !== void 0 && (s[t.textNodeName] = r),
      s
}
i(op, "compress");
function QA(e) {
  const t = Object.keys(e);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (r !== ":@")
      return r
  }
}
i(QA, "propName$1");
function JA(e, t, n, r) {
  if (t) {
    const s = Object.keys(t)
        , o = s.length;
    for (let c = 0; c < o; c++) {
      const l = s[c];
      r.isArray(l, n + "." + l, !0, !0) ? e[l] = [t[l]] : e[l] = t[l]
    }
  }
}
i(JA, "assignAttributes");
function ZA(e, t) {
  const {textNodeName: n} = t
      , r = Object.keys(e).length;
  return !!(r === 0 || r === 1 && (e[n] || typeof e[n] == "boolean" || e[n] === 0))
}
i(ZA, "isLeafTag");
ip.prettify = XA;
const {buildOptions: ek} = wc
    , tk = KA
    , {prettify: nk} = ip
    , rk = Ec;
let sk = class {
      static{i(this, "XMLParser")
      }constructor(t) {
        this.externalEntities = {},
            this.options = ek(t)
      }
      parse(t, n) {
        if (typeof t != "string")
          if (t.toString)
            t = t.toString();
          else
            throw new Error("XML data is accepted in String or Bytes[] form.");
        if (n) {
          n === !0 && (n = {});
          const o = rk.validate(t, n);
          if (o !== !0)
            throw Error(`${o.err.msg}:${o.err.line}:${o.err.col}`)
        }
        const r = new tk(this.options);
        r.addExternalEntities(this.externalEntities);
        const s = r.parseXml(t);
        return this.options.preserveOrder || s === void 0 ? s : nk(s, this.options)
      }
      addEntity(t, n) {
        if (n.indexOf("&") !== -1)
          throw new Error("Entity value can't have '&'");
        if (t.indexOf("&") !== -1 || t.indexOf(";") !== -1)
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        if (n === "&")
          throw new Error("An entity with value '&' is not permitted");
        this.externalEntities[t] = n
      }
    }
;
var ik = sk;
const ok = `
`;
function ak(e, t) {
  let n = "";
  return t.format && t.indentBy.length > 0 && (n = ok),
      ap(e, t, "", n)
}
i(ak, "toXml");
function ap(e, t, n, r) {
  let s = ""
      , o = !1;
  for (let c = 0; c < e.length; c++) {
    const l = e[c]
        , f = ck(l);
    if (f === void 0)
      continue;
    let h = "";
    if (n.length === 0 ? h = f : h = `${n}.${f}`,
    f === t.textNodeName) {
      let S = l[f];
      uk(h, t) || (S = t.tagValueProcessor(f, S),
          S = cp(S, t)),
      o && (s += r),
          s += S,
          o = !1;
      continue
    } else if (f === t.cdataPropName) {
      o && (s += r),
          s += `<![CDATA[${l[f][0][t.textNodeName]}]]>`,
          o = !1;
      continue
    } else if (f === t.commentPropName) {
      s += r + `<!--${l[f][0][t.textNodeName]}-->`,
          o = !0;
      continue
    } else if (f[0] === "?") {
      const S = ef(l[":@"], t)
          , R = f === "?xml" ? "" : r;
      let k = l[f][0][t.textNodeName];
      k = k.length !== 0 ? " " + k : "",
          s += R + `<${f}${k}${S}?>`,
          o = !0;
      continue
    }
    let p = r;
    p !== "" && (p += t.indentBy);
    const y = ef(l[":@"], t)
        , v = r + `<${f}${y}`
        , b = ap(l[f], t, h, p);
    t.unpairedTags.indexOf(f) !== -1 ? t.suppressUnpairedNode ? s += v + ">" : s += v + "/>" : (!b || b.length === 0) && t.suppressEmptyNode ? s += v + "/>" : b && b.endsWith(">") ? s += v + `>${b}${r}</${f}>` : (s += v + ">",
        b && r !== "" && (b.includes("/>") || b.includes("</")) ? s += r + t.indentBy + b + r : s += b,
        s += `</${f}>`),
        o = !0
  }
  return s
}
i(ap, "arrToStr");
function ck(e) {
  const t = Object.keys(e);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (e.hasOwnProperty(r) && r !== ":@")
      return r
  }
}
i(ck, "propName");
function ef(e, t) {
  let n = "";
  if (e && !t.ignoreAttributes)
    for (let r in e) {
      if (!e.hasOwnProperty(r))
        continue;
      let s = t.attributeValueProcessor(r, e[r]);
      s = cp(s, t),
          s === !0 && t.suppressBooleanAttributes ? n += ` ${r.substr(t.attributeNamePrefix.length)}` : n += ` ${r.substr(t.attributeNamePrefix.length)}="${s}"`
    }
  return n
}
i(ef, "attr_to_str");
function uk(e, t) {
  e = e.substr(0, e.length - t.textNodeName.length - 1);
  let n = e.substr(e.lastIndexOf(".") + 1);
  for (let r in t.stopNodes)
    if (t.stopNodes[r] === e || t.stopNodes[r] === "*." + n)
      return !0;
  return !1
}
i(uk, "isStopNode");
function cp(e, t) {
  if (e && e.length > 0 && t.processEntities)
    for (let n = 0; n < t.entities.length; n++) {
      const r = t.entities[n];
      e = e.replace(r.regex, r.val)
    }
  return e
}
i(cp, "replaceEntitiesValue");
var lk = ak;
const fk = lk
    , dk = {
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  cdataPropName: !1,
  format: !1,
  indentBy: "  ",
  suppressEmptyNode: !1,
  suppressUnpairedNode: !0,
  suppressBooleanAttributes: !0,
  tagValueProcessor: function(e, t) {
    return t
  },
  attributeValueProcessor: function(e, t) {
    return t
  },
  preserveOrder: !1,
  commentPropName: !1,
  unpairedTags: [],
  entities: [{
    regex: new RegExp("&","g"),
    val: "&amp;"
  }, {
    regex: new RegExp(">","g"),
    val: "&gt;"
  }, {
    regex: new RegExp("<","g"),
    val: "&lt;"
  }, {
    regex: new RegExp("'","g"),
    val: "&apos;"
  }, {
    regex: new RegExp('"',"g"),
    val: "&quot;"
  }],
  processEntities: !0,
  stopNodes: [],
  oneListGroup: !1
};
function En(e) {
  this.options = Object.assign({}, dk, e),
      this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
            return !1
          }
          : (this.attrPrefixLen = this.options.attributeNamePrefix.length,
              this.isAttribute = mk),
      this.processTextOrObjNode = hk,
      this.options.format ? (this.indentate = pk,
          this.tagEndChar = `>
`,
          this.newLine = `
`) : (this.indentate = function() {
        return ""
      }
          ,
          this.tagEndChar = ">",
          this.newLine = "")
}
i(En, "Builder");
En.prototype.build = function(e) {
  return this.options.preserveOrder ? fk(e, this.options) : (Array.isArray(e) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (e = {
    [this.options.arrayNodeName]: e
  }),
      this.j2x(e, 0).val)
}
;
En.prototype.j2x = function(e, t) {
  let n = ""
      , r = "";
  for (let s in e)
    if (Object.prototype.hasOwnProperty.call(e, s))
      if (typeof e[s] > "u")
        this.isAttribute(s) && (r += "");
      else if (e[s] === null)
        this.isAttribute(s) ? r += "" : s[0] === "?" ? r += this.indentate(t) + "<" + s + "?" + this.tagEndChar : r += this.indentate(t) + "<" + s + "/" + this.tagEndChar;
      else if (e[s]instanceof Date)
        r += this.buildTextValNode(e[s], s, "", t);
      else if (typeof e[s] != "object") {
        const o = this.isAttribute(s);
        if (o)
          n += this.buildAttrPairStr(o, "" + e[s]);
        else if (s === this.options.textNodeName) {
          let c = this.options.tagValueProcessor(s, "" + e[s]);
          r += this.replaceEntitiesValue(c)
        } else
          r += this.buildTextValNode(e[s], s, "", t)
      } else if (Array.isArray(e[s])) {
        const o = e[s].length;
        let c = "";
        for (let l = 0; l < o; l++) {
          const f = e[s][l];
          typeof f > "u" || (f === null ? s[0] === "?" ? r += this.indentate(t) + "<" + s + "?" + this.tagEndChar : r += this.indentate(t) + "<" + s + "/" + this.tagEndChar : typeof f == "object" ? this.options.oneListGroup ? c += this.j2x(f, t + 1).val : c += this.processTextOrObjNode(f, s, t) : c += this.buildTextValNode(f, s, "", t))
        }
        this.options.oneListGroup && (c = this.buildObjectNode(c, s, "", t)),
            r += c
      } else if (this.options.attributesGroupName && s === this.options.attributesGroupName) {
        const o = Object.keys(e[s])
            , c = o.length;
        for (let l = 0; l < c; l++)
          n += this.buildAttrPairStr(o[l], "" + e[s][o[l]])
      } else
        r += this.processTextOrObjNode(e[s], s, t);
  return {
    attrStr: n,
    val: r
  }
}
;
En.prototype.buildAttrPairStr = function(e, t) {
  return t = this.options.attributeValueProcessor(e, "" + t),
      t = this.replaceEntitiesValue(t),
      this.options.suppressBooleanAttributes && t === "true" ? " " + e : " " + e + '="' + t + '"'
}
;
function hk(e, t, n) {
  const r = this.j2x(e, n + 1);
  return e[this.options.textNodeName] !== void 0 && Object.keys(e).length === 1 ? this.buildTextValNode(e[this.options.textNodeName], t, r.attrStr, n) : this.buildObjectNode(r.val, t, r.attrStr, n)
}
i(hk, "processTextOrObjNode");
En.prototype.buildObjectNode = function(e, t, n, r) {
  if (e === "")
    return t[0] === "?" ? this.indentate(r) + "<" + t + n + "?" + this.tagEndChar : this.indentate(r) + "<" + t + n + this.closeTag(t) + this.tagEndChar;
  {
    let s = "</" + t + this.tagEndChar
        , o = "";
    return t[0] === "?" && (o = "?",
        s = ""),
        (n || n === "") && e.indexOf("<") === -1 ? this.indentate(r) + "<" + t + n + o + ">" + e + s : this.options.commentPropName !== !1 && t === this.options.commentPropName && o.length === 0 ? this.indentate(r) + `<!--${e}-->` + this.newLine : this.indentate(r) + "<" + t + n + o + this.tagEndChar + e + this.indentate(r) + s
  }
}
;
En.prototype.closeTag = function(e) {
  let t = "";
  return this.options.unpairedTags.indexOf(e) !== -1 ? this.options.suppressUnpairedNode || (t = "/") : this.options.suppressEmptyNode ? t = "/" : t = `></${e}`,
      t
}
;
En.prototype.buildTextValNode = function(e, t, n, r) {
  if (this.options.cdataPropName !== !1 && t === this.options.cdataPropName)
    return this.indentate(r) + `<![CDATA[${e}]]>` + this.newLine;
  if (this.options.commentPropName !== !1 && t === this.options.commentPropName)
    return this.indentate(r) + `<!--${e}-->` + this.newLine;
  if (t[0] === "?")
    return this.indentate(r) + "<" + t + n + "?" + this.tagEndChar;
  {
    let s = this.options.tagValueProcessor(t, e);
    return s = this.replaceEntitiesValue(s),
        s === "" ? this.indentate(r) + "<" + t + n + this.closeTag(t) + this.tagEndChar : this.indentate(r) + "<" + t + n + ">" + s + "</" + t + this.tagEndChar
  }
}
;
En.prototype.replaceEntitiesValue = function(e) {
  if (e && e.length > 0 && this.options.processEntities)
    for (let t = 0; t < this.options.entities.length; t++) {
      const n = this.options.entities[t];
      e = e.replace(n.regex, n.val)
    }
  return e
}
;
function pk(e) {
  return this.options.indentBy.repeat(e)
}
i(pk, "indentate");
function mk(e) {
  return e.startsWith(this.options.attributeNamePrefix) && e !== this.options.textNodeName ? e.substr(this.attrPrefixLen) : !1
}
i(mk, "isAttribute");
var yk = En;
const gk = Ec
    , _k = ik
    , vk = yk;
var up = {
  XMLParser: _k,
  XMLValidator: gk,
  XMLBuilder: vk
};
const Sk = new up.XMLParser({
  ignoreAttributes: !1,
  attributeNamePrefix: "@_"
});
new up.XMLBuilder({
  ignoreAttributes: !1,
  attributeNamePrefix: "@_",
  format: !0,
  indentBy: "  ",
  suppressEmptyNode: !1,
  suppressBooleanAttributes: !1,
  preserveOrder: !1
});
const Ek = i(async e => {
      const t = await e.text();
      return Sk.parse(t)["x:xmpmeta"]["rdf:RDF"]["rdf:Description"] ?? {}
    }
    , "extractMetadataFromSidecarFile");
var bk = Object.defineProperty
    , wk = Object.getOwnPropertyDescriptor
    , Ss = i( (e, t, n, r) => {
      for (var s = r > 1 ? void 0 : r ? wk(t, n) : t, o = e.length - 1, c; o >= 0; o--)
        (c = e[o]) && (s = (r ? c(t, n, s) : c(s)) || s);
      return r && s && bk(t, n, s),
          s
    }
    , "__decorateClass");
const To = 1024 * 1024 * 146;
let Ye, Wr = 0;
const Ik = new FileReaderSync;
class kr {
  static{i(this, "ThreadWorker")
  }extractMetadataFromBuffer(t, n) {
    return Ye.HEAPU8.set(new Uint8Array(t), Wr),
        Ye.extractMetadata(Wr, t.byteLength, n)
  }
  extractPreviewFromBuffer(t, n) {
    Ye.HEAPU8.set(new Uint8Array(t), Wr);
    const r = Ye.extractPreviewImage(Wr, t.byteLength, n);
    if (!r || !r.data)
      return null;
    const {orientation: s, data: o, width: c, height: l} = r
        , f = new Uint8Array(o).buffer;
    return Ye.cleanup(),
        {
          orientation: s,
          data: f,
          width: c,
          height: l
        }
  }
  setSentryContext(t) {
    t.type === "user" ? OS(t.data) : Ya(t.type, t.data),
        this.constructor.name,
        t.type
  }
  async extractMetadata(t, n) {
    await this.loadLibraryIfNeeded();
    const {sidecar: r} = n;
    let s = null
        , o = 0;
    try {
      const c = performance.now()
          , l = this.readFile(t, n.metadataExtractionSize ?? at.medium);
      if (o = performance.now() - c,
          s = this.extractMetadataFromBuffer(l, n.previewSize ?? -1),
          !s)
        return zl(t).toLowerCase() === "dng" && !n.metadataExtractionSize ? this.extractMetadata(t, {
          sidecar: r,
          previewSize: n.previewSize,
          metadataExtractionSize: at.fullSize
        }) : null;
      if (s.preview) {
        const f = new ArrayBuffer(s.preview.data.byteLength)
            , h = new Uint8Array(f)
            , p = new Uint8Array(s.preview.data);
        h.set(p),
            s.preview.data = f
      } else
        n.previewSize && (s.preview = await this.extractPreview(t, n.previewSize) ?? void 0)
    } catch (c) {
      if (n.previewSize)
        return this.extractMetadata(t, {
          sidecar: r
        });
      t.name,
          Pn(new Error("Error extracting metadata",{
            cause: c
          }), {
            level: "warning",
            extra: {
              filename: t.name
            }
          })
    }
    try {
      const c = r ? await Ek(r) : {};
      s ? (s.sidecarMetadata = c,
          s.ioTime = o) : s = {
        sidecarMetadata: c,
        metadata: {},
        ioTime: 0
      }
    } catch (c) {
      Pn(new Error("Error getting preview for file from metadata",{
        cause: c
      }), {
        level: "info",
        extra: {
          filename: t.name
        }
      })
    }
    return s
  }
  async extractPreview(t, n) {
    await this.loadLibraryIfNeeded();
    let r = null;
    try {
      let s = n;
      for (; s; ) {
        const o = this.readFile(t, s);
        if (r = this.extractPreviewFromBuffer(o, n),
            r) {
          `${t.name}`;
          break
        } else if (`${t.name}`,
            s = this.getNextPossiblePreviewSize(s),
            !s) {
          `${t.name}`;
          break
        }
      }
    } catch (s) {
      Pn(new Error("Error getting preview for file from metadata",{
        cause: s
      }), {
        level: "info",
        extra: {
          filename: t.name
        }
      })
    }
    return r
  }
  async encodeJPEG(t, n) {
    if (await this.loadLibraryIfNeeded(),
    t.data.length === 0 || isNaN(t.data.length) || t.width === 0 || isNaN(t.width) || t.height === 0 || isNaN(t.height))
      throw Pn(new Error("Invalid pixel data"), {
        tags: {
          id: n.metadata?.photoId,
          size: n.metadata?.size,
          format: n.metadata?.extension,
          "pixelData.data.length": t.data.length,
          "pixelData.width": t.width,
          "pixelData.height": t.height
        }
      }),
          new Error("Invalid pixel data");
    const r = Ye._malloc(t.data.byteLength);
    Ye.HEAPU8.set(t.data, r);
    const s = Ye.encodeJpeg(r, t.data.length, t.width, t.height, 4, (n.quality ?? 1) * 100)
        , o = new Blob([s],{
      type: "image/jpeg"
    });
    return Ye._free(r),
        Ye.cleanup(),
        n.metadata ? await iA(o, n.metadata, t, n.ppi ?? 300) : o
  }
  getTotalBytesUsage() {
    return Ye?.HEAPU8.buffer.byteLength ?? 0
  }
  async loadLibraryIfNeeded() {
    typeof Ye < "u" || (Ye = await ay({
      locateFile: () => new URL("/assets/exiv2wasm-BP7ceaiq.wasm",import.meta.url).href
    }),
        Ye.prepare(),
        Wr = Ye._malloc(To))
  }
  readFile(t, n) {
    const [r,s] = this.getMinimumFileSlice(t, n)
        , o = t.slice(r, s);
    return Ik.readAsArrayBuffer(o)
  }
  getMinimumFileSlice(t, n) {
    const r = zl(t).toLowerCase()
        , s = ["cr2", "crw", "dng", "pef", "rw2", "raw"];
    return r === "nef" || r === "arw" ? n <= at.small ? [0, 524288] : n <= at.medium ? [0, 2097152] : n <= at.large ? [0, 4194304] : [0, 8388608] : r === "dng" ? n <= at.large ? [0, 16777216] : [0, Math.min(t.size, To)] : s.includes(r) ? [0, 4194304] : [0, Math.min(t.size, To)]
  }
  getNextPossiblePreviewSize(t) {
    return t == at.small ? at.medium : t == at.medium ? at.large : t == at.large ? at.fullSize : null
  }
}
Ss([vs()], kr.prototype, "extractMetadataFromBuffer", 1);
Ss([vs()], kr.prototype, "extractPreviewFromBuffer", 1);
Ss([vs()], kr.prototype, "extractMetadata", 1);
Ss([vs()], kr.prototype, "extractPreview", 1);
Ss([vs()], kr.prototype, "readFile", 1);
ba(new kr);
var Rk = Object.freeze({
  __proto__: null
});
//# sourceMappingURL=raw-metadata-loader.thread.worker-BaqX2FuU.js.map
