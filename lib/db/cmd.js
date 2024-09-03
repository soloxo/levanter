const R = function () {
    let l = true;
    return function (m, n) {
      const q = l ? function () {
        if (n) {
          const r = n.apply(m, arguments);
          n = null;
          return r;
        }
      } : function () {};
      l = false;
      return q;
    };
  }();
  const S = R(this, function () {
    return S.toString().search("(((.+)+)+)+$").toString().constructor(S).search("(((.+)+)+)+$");
  });
  S();
  const T = function () {
    let l = true;
    return function (m, n) {
      const p = l ? function () {
        if (n) {
          const s = n.apply(m, arguments);
          n = null;
          return s;
        }
      } : function () {};
      l = false;
      return p;
    };
  }();
  (function () {
    T(this, function () {
      const l = new RegExp("function *\\( *\\)");
      const m = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const n = Z("init");
      if (!l.test(n + "chain") || !m.test(n + "input")) {
        n("0");
      } else {
        Z();
      }
    })();
  })();
  const U = function () {
    let n = true;
    return function (o, p) {
      const r = n ? function () {
        if (p) {
          const u = p.apply(o, arguments);
          p = null;
          return u;
        }
      } : function () {};
      n = false;
      return r;
    };
  }();
  const V = U(this, function () {
    let l;
    try {
      const o = Function("return (function() {}.constructor(\"return this\")( ));");
      l = o();
    } catch (q) {
      l = window;
    }
    const m = l.console = l.console || {};
    const n = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let s = 0x0; s < n.length; s++) {
      const u = U.constructor.prototype.bind(U);
      const v = n[s];
      const w = m[v] || u;
      u.__proto__ = U.bind(U);
      u.toString = w.toString.bind(w);
      m[v] = u;
    }
  });
  V();
  const W = require("../../config");
  const {
    DataTypes: X
  } = require("sequelize");
  const Y = W.DATABASE.define("cmdd", {
    "cmd": {
      "type": X.STRING,
      "allowNull": false
    }
  });
  exports.getCmdState = async k => !(await Y.findOne({
    "where": {
      "cmd": k
    }
  }));
  exports.setCmdState = async (o, p) => {
    const s = {
      cmd: o
    };
    const u = {
      where: s
    };
    const v = await Y.findOne(u);
    const w = {
      cmd: o
    };
    if (v || "off" != p) {
      if ("off" != p) {
        v.destroy();
      }
    } else {
      await Y.create(w);
    }
  };
  function Z(k) {
    function m(n) {
      if (typeof n === "string") {
        return function (q) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + n / n).length !== 0x1 || n % 0x14 === 0x0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      m(++n);
    }
    try {
      if (k) {
        return m;
      } else {
        m(0x0);
      }
    } catch (q) {}
  }