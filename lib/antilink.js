const bg = function () {
    let v = true;
    return function (w, x) {
      const A = v ? function () {
        if (x) {
          const C = x.apply(w, arguments);
          x = null;
          return C;
        }
      } : function () {};
      v = false;
      return A;
    };
  }();
  const bh = bg(this, function () {
    return bh.toString().search("(((.+)+)+)+$").toString().constructor(bh).search("(((.+)+)+)+$");
  });
  bh();
  const bi = function () {
    let v = true;
    return function (w, x) {
      const z = v ? function () {
        if (x) {
          const C = x.apply(w, arguments);
          x = null;
          return C;
        }
      } : function () {};
      v = false;
      return z;
    };
  }();
  (function () {
    bi(this, function () {
      const w = new RegExp("function *\\( *\\)");
      const x = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const y = bx("init");
      if (!w.test(y + "chain") || !x.test(y + "input")) {
        y("0");
      } else {
        bx();
      }
    })();
  })();
  const bj = function () {
    let x = true;
    return function (y, z) {
      const C = x ? function () {
        if (z) {
          const E = z.apply(y, arguments);
          z = null;
          return E;
        }
      } : function () {};
      x = false;
      return C;
    };
  }();
  const bk = bj(this, function () {
    const v = function () {
      let A;
      try {
        A = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (C) {
        A = window;
      }
      return A;
    };
    const w = v();
    const x = w.console = w.console || {};
    const y = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let z = 0x0; z < y.length; z++) {
      const B = bj.constructor.prototype.bind(bj);
      const C = y[z];
      const D = x[C] || B;
      B.__proto__ = bj.bind(bj);
      B.toString = D.toString.bind(D);
      x[C] = B;
    }
  });
  bk();
  const {
    ANTIWORDS: bl
  } = require("../config");
  const {
    getAntiLink: bm,
    getWord: bn
  } = require("./db");
  const {
    getFloor: bp
  } = require("./utils");
  const bq = require("http");
  const br = new RegExp("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b");
  const bs = new RegExp("^[0-9]");
  async function bt(u) {
    return await new Promise(w => {
      const y = {
        method: "HEAD",
        host: u
      };
      const z = bq.request(y, function (A) {
        w(true);
      });
      z.on("error", function (A) {
        w(false);
      });
      z.end();
    });
  }
  const bu = function (u = [], v = [], w = []) {
    let y = 0x0;
    let z = 0x0;
    for (const A of u) {
      for (const C of v) {
        if (new RegExp(C, "iu").test(A.startsWith("http") ? A : A.replace(".", "[.]")) || A == C) {
          y++;
        }
      }
      for (const E of w) {
        if (new RegExp(E, "iu").test(A.startsWith("http") ? A : A.replace(".", "[.]")) || A == E) {
          z++;
        }
      }
    }
    return w.length ? z > 0x0 && 0x0 == y : z > 0x0 || u.length != y;
  };
  const bv = new Map();
  exports.isAntiLink = async function (v, w) {
    let y = v.match(/(?:(http|https):\/\/)?(?:[\w-]+\.)+([\w.@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?\b/gi)?.["filter"](E => !bs.test(E));
    if (!y || !y.length) {
      return false;
    }
    const z = await bm(w);
    if (!z) {
      return false;
    }
    let {
      enabled: A,
      action: B,
      allowedUrls: C
    } = z;
    if (!A) {
      return false;
    }
    const D = [];
    for (const E of y) {
      let F = E;
      try {
        F = new URL(E).host;
      } catch (I) {}
      let G = false;
      if (!br.test(E)) {
        if (!bv.has(F)) {
          bv.set(F, await bt(F));
        }
        G = bv.get(F);
      }
      D.push({
        "u": E,
        "e": G
      });
    }
    y = D.filter(K => K.e).map(K => K.u);
    if (!y.length) {
      return false;
    }
    if ("null" == C) {
      return B;
    }
    if (C) {
      const L = C.split(",");
      const M = L.filter(O => 0x0 == O.startsWith("!"));
      const N = L.filter(O => 0x1 == O.startsWith("!")).map(O => O.replace("!", ''));
      return !!bu(y, M, N) && B;
    }
  };
  exports.spamCheck = function (v, w, x, y, z) {
    const B = bp(0x1 * new Date() / 0x3e8);
    const C = {
      cool: 0x0,
      keys: [],
      score: 0x0,
      index: 0x0,
      prev: ''
    };
    if (!(v in temp.spam)) {
      temp.spam[v] = {};
    }
    if (!(w in temp.spam[v])) {
      temp.spam[v][w] = C;
    }
    if (z) {
      if (temp.spam[v][w].prev == z) {
        y = y > 4.5 ? y : 4.5;
      }
      temp.spam[v][w].prev = z;
    }
    const D = B - temp.spam[v][w].cool;
    temp.spam[v][w].cool = B;
    temp.spam[v][w].keys.push(x);
    temp.spam[v][w].score += y;
    temp.spam[v][w].index++;
    if (D != B && D > 0x1e) {
      delete temp.spam[v][w];
    }
    return D < temp.spam.cool && (temp.spam[v][w].score > 0xa || temp.spam[v][w].score > 0x2 && temp.spam[v][w].index > 0x6);
  };
  const bw = bl.split(",").map(u => new RegExp(u.trim(), "iu"));
  exports.isWords = async (u, v) => {
    if (0x0 === bw.length) {
      return false;
    }
    const x = await bn(v);
    if (!x.enabled) {
      return false;
    }
    for (const y of bw) if (y.test(u)) {
      return x.action;
    }
    return false;
  };
  function bx(u) {
    function w(x) {
      if (typeof x === "string") {
        return function (C) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + x / x).length !== 0x1 || x % 0x14 === 0x0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      w(++x);
    }
    try {
      if (u) {
        return w;
      } else {
        w(0x0);
      }
    } catch (B) {}
  }