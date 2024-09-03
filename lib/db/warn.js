const f = function () {
    let j = true;
    return function (k, l) {
      const m = j ? function () {
        if (l) {
          const n = l.apply(k, arguments);
          l = null;
          return n;
        }
      } : function () {};
      j = false;
      return m;
    };
  }();
  const e = f(this, function () {
    return e.toString().search("(((.+)+)+)+$").toString().constructor(e).search("(((.+)+)+)+$");
  });
  e();
  const d = function () {
    let j = true;
    return function (k, l) {
      const m = j ? function () {
        if (l) {
          const q = l.apply(k, arguments);
          l = null;
          return q;
        }
      } : function () {};
      j = false;
      return m;
    };
  }();
  (function () {
    d(this, function () {
      const l = new RegExp("function *\\( *\\)");
      const m = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const n = c("init");
      if (!l.test(n + "chain") || !m.test(n + "input")) {
        n("0");
      } else {
        c();
      }
    })();
  })();
  const b = function () {
    let j = true;
    return function (k, l) {
      const n = j ? function () {
        if (l) {
          const r = l.apply(k, arguments);
          l = null;
          return r;
        }
      } : function () {};
      j = false;
      return n;
    };
  }();
  const a = b(this, function () {
    const j = function () {
      let o;
      try {
        o = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (q) {
        o = window;
      }
      return o;
    };
    const k = j();
    const l = k.console = k.console || {};
    const m = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let n = 0x0; n < m.length; n++) {
      const p = b.constructor.prototype.bind(b);
      const q = m[n];
      const r = l[q] || p;
      p.__proto__ = b.bind(b);
      p.toString = r.toString.bind(r);
      l[q] = p;
    }
  });
  a();
  const config = require("../../config");
  const {
    DataTypes: DataTypes
  } = require("sequelize");
  const WarnsDB = config.DATABASE.define("warn", {
    "jid": {
      "type": DataTypes.STRING,
      "allowNull": false
    },
    "chat": {
      "type": DataTypes.STRING,
      "allowNull": false
    },
    "count": {
      "type": DataTypes.INTEGER
    }
  });
  exports.getWarnCount = async (k, l) => {
    const m = {
      "jid": k,
      "chat": l
    };
    const n = {
      where: m
    };
    const o = await WarnsDB.findOne(n);
    return !!o && o.count;
  };
  exports.setWarn = async (l, m, o = 0x1) => {
    const q = {
      "jid": l,
      "chat": m
    };
    const r = {
      where: q
    };
    const s = await WarnsDB.findOne(r);
    const u = {
      "jid": l,
      "chat": m,
      "count": 0x1
    };
    return s ? (o = isNaN(o) ? 0x1 : o, o = Math.max(s.count + o, 0x0), config.WARN_LIMIT - o >= 0x0 && (await s.update({
      "count": o
    })), o) : (await WarnsDB.create(u), 0x1);
  };
  exports.deleteWarn = async (k, l) => {
    const m = {
      "jid": k,
      "chat": l
    };
    const n = {
      "where": m,
      "limit": 0x1
    };
    await WarnsDB.destroy(n);
  };
  function c(i) {
    function k(l) {
      if (typeof l === "string") {
        return function (o) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + l / l).length !== 0x1 || l % 0x14 === 0x0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      k(++l);
    }
    try {
      if (i) {
        return k;
      } else {
        k(0x0);
      }
    } catch (o) {}
  }