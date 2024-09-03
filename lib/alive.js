const S = function () {
    let u = true;
    return function (v, w) {
      const z = u ? function () {
        if (w) {
          const D = w.apply(v, arguments);
          w = null;
          return D;
        }
      } : function () {};
      u = false;
      return z;
    };
  }();
  const T = S(this, function () {
    return T.toString().search("(((.+)+)+)+$").toString().constructor(T).search("(((.+)+)+)+$");
  });
  T();
  const U = function () {
    let u = true;
    return function (v, w) {
      const y = u ? function () {
        if (w) {
          const A = w.apply(v, arguments);
          w = null;
          return A;
        }
      } : function () {};
      u = false;
      return y;
    };
  }();
  (function () {
    U(this, function () {
      const u = new RegExp("function *\\( *\\)");
      const v = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const w = a8("init");
      if (!u.test(w + "chain") || !v.test(w + "input")) {
        w("0");
      } else {
        a8();
      }
    })();
  })();
  const V = function () {
    let u = true;
    return function (v, w) {
      const y = u ? function () {
        if (w) {
          const A = w.apply(v, arguments);
          w = null;
          return A;
        }
      } : function () {};
      u = false;
      return y;
    };
  }();
  const W = V(this, function () {
    const u = function () {
      let A;
      try {
        A = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (C) {
        A = window;
      }
      return A;
    };
    const v = u();
    const w = v.console = v.console || {};
    const x = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let y = 0x0; y < x.length; y++) {
      const A = V.constructor.prototype.bind(V);
      const B = x[y];
      const C = w[B] || A;
      A.__proto__ = V.bind(V);
      A.toString = C.toString.bind(C);
      w[B] = A;
    }
  });
  W();
  const {
    readFileSync: X,
    existsSync: Y
  } = require("fs");
  const Z = require("path");
  const {
    setAlive: a0,
    getAlive: a1
  } = require("./db/alive");
  const {
    secondsToHms: a2,
    download: a3,
    getQuote: a4,
    isUrl: a5
  } = require("./index");
  const a6 = q => {
    if (q) {
      const w = Number(process.uptime());
      const x = Math.floor(w / 0xe10);
      const y = Math.floor(w % 0xe10 / 0x3c);
      const z = Math.floor(w % 0xe10 % 0x3c);
      return (0x0 == x ? '' : x + "h ") + (0x0 == y ? '' : y + "m ") + (0x0 == z ? '' : z + "s");
    }
    return a2(process.uptime());
  };
  exports.getUptime = a6;
  const a7 = async (q, u) => {
    if (u) {
      q = q.replace(u, '');
    }
    q = q.replace("#uptime", a6()).trim();
    if (/#quote/.test(q)) {
      const x = await a4();
      q = q.replace("#quote", x || '');
    }
    return q;
  };
  exports.uptimeQuoteReplace = a7;
  exports.aliveMessage = async (w, x) => {
    let z = "text";
    if (w) {
      if ("get" == w) {
        const I = await a1();
        const J = {
          "msg": I?.["message"],
          options: {},
          type: z
        };
        return J;
      }
      let F = "null";
      let G = a5(w);
      if (G) {
        const K = await a3(G, Z.join(__dirname, "../media/alive"));
        if (K?.["ext"]) {
          F = K.ext;
          z = K.type;
        } else {
          G = "null";
        }
      }
      await a0(G, w, z, F);
    }
    const A = {};
    let B = '';
    const C = await a1();
    if (!C) {
      return {
        "msg": await a7("I'm alive\nUptime : #uptime"),
        "options": A,
        "type": z
      };
    }
    C.message = await a7(C.message, C.url);
    if ("text" != C.type) {
      if (!Y(Z.join(__dirname, "../media/alive." + C.ext))) {
        await a3(C.url, Z.join(__dirname, "../media/alive"));
      }
      B = X(Z.join(__dirname, "../media/alive." + C.ext));
      A.caption = C.message;
      const N = A.caption.includes("&gif");
      if (N) {
        A.caption = A.caption.replace("&gif", '');
        A.gifPlayback = N;
      }
      z = C.type;
    } else {
      B = C.message;
    }
    const D = {
      "msg": B,
      options: A,
      type: z
    };
    return D;
  };
  function a8(q) {
    function v(w) {
      if (typeof w === "string") {
        return function (A) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + w / w).length !== 0x1 || w % 0x14 === 0x0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      v(++w);
    }
    try {
      if (q) {
        return v;
      } else {
        v(0x0);
      }
    } catch (w) {}
  }