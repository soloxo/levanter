const H = function () {
    let l = true;
    return function (m, o) {
      const q = l ? function () {
        if (o) {
          const u = o.apply(m, arguments);
          o = null;
          return u;
        }
      } : function () {};
      l = false;
      return q;
    };
  }();
  const I = H(this, function () {
    return I.toString().search("(((.+)+)+)+$").toString().constructor(I).search("(((.+)+)+)+$");
  });
  I();
  const J = function () {
    let o = true;
    return function (p, q) {
      const u = o ? function () {
        if (q) {
          const w = q.apply(p, arguments);
          q = null;
          return w;
        }
      } : function () {};
      o = false;
      return u;
    };
  }();
  (function () {
    J(this, function () {
      const l = new RegExp("function *\\( *\\)");
      const m = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const o = R("init");
      if (!l.test(o + "chain") || !m.test(o + "input")) {
        o("0");
      } else {
        R();
      }
    })();
  })();
  const K = function () {
    let l = true;
    return function (m, o) {
      const q = l ? function () {
        if (o) {
          const x = o.apply(m, arguments);
          o = null;
          return x;
        }
      } : function () {};
      l = false;
      return q;
    };
  }();
  const L = K(this, function () {
    const l = function () {
      let s;
      try {
        s = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (v) {
        s = window;
      }
      return s;
    };
    const m = l();
    const o = m.console = m.console || {};
    const p = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let q = 0x0; q < p.length; q++) {
      const u = K.constructor.prototype.bind(K);
      const v = p[q];
      const w = o[v] || u;
      u.__proto__ = K.bind(K);
      u.toString = w.toString.bind(w);
      o[v] = u;
    }
  });
  L();
  const M = require("../../config");
  const {
    DataTypes: N
  } = require("sequelize");
  const O = M.DATABASE.define("lydia", {
    "chat": {
      "type": N.STRING,
      "allowNull": false
    },
    "context": {
      "type": N.TEXT,
      "allowNull": false
    }
  });
  const P = M.DATABASE.define("truecaller", {
    "token": {
      "type": N.STRING,
      "allowNull": false
    },
    "num": {
      "type": N.STRING,
      "allowNull": false
    }
  });
  const Q = new Map();
  exports.setLydia = async (s, u, v) => {
    const y = v || s;
    const z = s + "-" + y;
    Q["delete"](z);
    const A = {
      chat: s
    };
    const B = {
      where: A
    };
    let C = await O.findOne(B);
    const D = {
      chat: s,
      context: "{}"
    };
    if (!C) {
      C = await O.create(D);
    }
    const E = JSON.parse(C.context);
    if (false === u && (undefined === E[y] || false === E[y])) {
      throw new Error("lydia not active on " + y + "\n");
    }
    if (true === u && true === E[y]) {
      throw new Error("lydia already active on " + y + "\n");
    }
    E[y] = u;
    await C.update({
      "context": JSON.stringify(E)
    });
  };
  exports.getLydia = async (p, q) => {
    const v = q || p;
    const w = p + "-" + v;
    if (Q.has(w)) {
      return Q.get(w);
    }
    const x = {
      chat: p
    };
    const y = {
      where: x
    };
    const z = await O.findOne(y);
    if (!z) {
      Q.set(w, false);
      return false;
    }
    const A = JSON.parse(z.context)[v] ?? false;
    Q.set(w, A);
    return A;
  };
  exports.setTruecaller = async (m, o) => {
    const p = await P.findOne();
    const q = {
      token: m,
      "num": o
    };
    const s = {
      token: m,
      "num": o
    };
    if (p) {
      p.update(q);
    } else {
      await P.create(s);
    }
  };
  exports.getTruecaller = async k => {
    const l = await P.findOne();
    return k ? l && l.token : l && "number : " + l.num + "\ntoken : " + l.token;
  };
  exports.delTruecaller = async () => {
    const k = await P.findOne();
    return k ? (await k.destroy(), true) : k;
  };
  function R(k) {
    function m(o) {
      if (typeof o === "string") {
        return function (q) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + o / o).length !== 0x1 || o % 0x14 === 0x0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      m(++o);
    }
    try {
      if (k) {
        return m;
      } else {
        m(0x0);
      }
    } catch (s) {}
  }