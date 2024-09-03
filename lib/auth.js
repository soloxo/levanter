const ak = function () {
    let x = true;
    return function (z, A) {
      const D = x ? function () {
        if (A) {
          const F = A.apply(z, arguments);
          A = null;
          return F;
        }
      } : function () {};
      x = false;
      return D;
    };
  }();
  const al = ak(this, function () {
    return al.toString().search("(((.+)+)+)+$").toString().constructor(al).search("(((.+)+)+)+$");
  });
  al();
  const am = function () {
    let x = true;
    return function (z, A) {
      const C = x ? function () {
        if (A) {
          const F = A.apply(z, arguments);
          A = null;
          return F;
        }
      } : function () {};
      x = false;
      return C;
    };
  }();
  (function () {
    am(this, function () {
      const z = new RegExp("function *\\( *\\)");
      const A = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const B = aH("init");
      if (!z.test(B + "chain") || !A.test(B + "input")) {
        B("0");
      } else {
        aH();
      }
    })();
  })();
  const an = function () {
    let x = true;
    return function (z, A) {
      const C = x ? function () {
        if (A) {
          const F = A.apply(z, arguments);
          A = null;
          return F;
        }
      } : function () {};
      x = false;
      return C;
    };
  }();
  const ao = an(this, function () {
    let x;
    try {
      const C = Function("return (function() {}.constructor(\"return this\")( ));");
      x = C();
    } catch (D) {
      x = window;
    }
    const z = x.console = x.console || {};
    const A = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let F = 0x0; F < A.length; F++) {
      const H = an.constructor.prototype.bind(an);
      const J = A[F];
      const K = z[J] || H;
      H.__proto__ = an.bind(an);
      H.toString = K.toString.bind(K);
      z[J] = H;
    }
  });
  ao();
  const aq = (w = "null") => {
    const x = w.match(/(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/g);
    return !!x && x[0x0];
  };
  const {
    BufferJSON: ar,
    initAuthCreds: as,
    WAProto: at
  } = require("baileys");
  const {
    getBuffer: au,
    getJson: av
  } = require("./fetch");
  const {
    setKeys: aw,
    getCreds: ax,
    setCreds: ay,
    restoreKeys: az
  } = require("./db/index");
  const aA = require("../config");
  const {
    delKeys: aB,
    getKeys: aC
  } = require("./db/session");
  const aG = async (z, A) => {
    let C;
    let D = false;
    const E = await ax();
    if (!E) {
      A.info("Initiating New AuthState.");
    }
    if (E || aA.SESSION_ID || !aA.VPS) {
      if (!E && aA.SESSION_ID) {
        A.info("loading auth file");
        let F = false;
        let G = '';
        try {
          const H = await au(z, false);
          if (H.buffer) {
            F = H.buffer;
          } else {
            G = H;
          }
        } catch (K) {}
        if (!F) {
          G = JSON.stringify(G);
          const L = aq(G);
          const M = {
            state: false
          };
          G = G.replace(L, aA.SESSION_ID);
          A.error("\n\n\n" + aA.SESSION_ID + " INVALID SESSION ID, SCAN AGAIN!!!\n" + aA.SESSION_ID + " INVALID SESSION ID, SCAN AGAIN!!!\n" + aA.SESSION_ID + " INVALID SESSION ID, SCAN AGAIN!!!\n\n");
          return M;
        }
        {
          D = true;
          const P = F.toString();
          const Q = JSON.parse(P, ar.reviver);
          C = Q.creds;
          const R = Q.keys;
          for (const T in R) for (const U in R[T]) await aw(T, U, R[T][U]);
          await ay(C);
          A.info("session restored");
        }
      } else {
        const X = {
          state: false
        };
        if (!E) {
          return X;
        }
        C = E;
      }
    } else {
      A.info("Generating Qr...");
      C = as();
    }
    return {
      "state": {
        "creds": C,
        "keys": {
          "get": async (Y, Z) => {
            const a1 = {};
            await Promise.all(Z.map(async a2 => {
              let a5 = await aC(Y, a2);
              if ("app-state-sync-key" === Y && a5) {
                a5 = at.Message.AppStateSyncKeyData.fromObject(a5);
              }
              a1[a2] = a5;
            }));
            return a1;
          },
          "set": async Y => {
            const a0 = [];
            for (const a1 in Y) for (const a2 in Y[a1]) {
              const a3 = Y[a1][a2];
              a0.push(a3 ? aw(a1, a2, a3) : aB(a1, a2));
            }
            await Promise.all(a0);
          }
        }
      },
      "saveState": async () => await ay(C),
      "isNew": D
    };
  };
  exports.initAuthSys = aG;
  function aH(w) {
    function z(A) {
      if (typeof A === "string") {
        return function (C) {}.constructor("while (true) {}").apply("counter");
      } else if (('' + A / A).length !== 0x1 || A % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
      z(++A);
    }
    try {
      if (w) {
        return z;
      } else {
        z(0x0);
      }
    } catch (A) {}
  }