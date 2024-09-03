const W = function () {
    let l = true;
    return function (m, n) {
      const q = l ? function () {
        if (n) {
          const w = n.apply(m, arguments);
          n = null;
          return w;
        }
      } : function () {};
      l = false;
      return q;
    };
  }();
  const X = W(this, function () {
    return X.toString().search("(((.+)+)+)+$").toString().constructor(X).search("(((.+)+)+)+$");
  });
  X();
  const Y = function () {
    let n = true;
    return function (o, p) {
      const q = n ? function () {
        if (p) {
          const w = p.apply(o, arguments);
          p = null;
          return w;
        }
      } : function () {};
      n = false;
      return q;
    };
  }();
  (function () {
    Y(this, function () {
      const n = new RegExp("function *\\( *\\)");
      const o = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const p = a9("init");
      if (!n.test(p + "chain") || !o.test(p + "input")) {
        p("0");
      } else {
        a9();
      }
    })();
  })();
  const Z = function () {
    const l = {
      vKvLm: "(((.+)+)+)+$",
      cWtZW: "while (true) {}",
      aCKOK: "counter",
      fOaxo: function (o, p) {
        return o === p;
      },
      MSpIS: "jAGme",
      whqzf: "MrkgC",
      hssIV: "SzasD",
      xtrnj: function (o, p) {
        return o !== p;
      },
      HxyRS: "QldgK"
    };
    const m = l;
    let n = true;
    return function (o, p) {
      const q = {
        "WNIoh": m.cWtZW,
        "opRUJ": m.aCKOK,
        "LqfkP": function (u, v) {
          return m.fOaxo(u, v);
        },
        "YoQiQ": m.MSpIS,
        "erkwj": m.whqzf,
        "QcCnG": m.hssIV
      };
      if (m.xtrnj(m.HxyRS, m.HxyRS)) {
        return m.toString().search(m.vKvLm).toString().constructor(n).search(m.vKvLm);
      } else {
        const v = n ? function () {
          const w = {
            ppRlp: q.WNIoh,
            JSagV: q.opRUJ
          };
          if (m.fOaxo(q.YoQiQ, q.erkwj)) {
            m = n;
          } else {
            if (p) {
              if (m.fOaxo(q.QcCnG, q.QcCnG)) {
                const z = p.apply(o, arguments);
                p = null;
                return z;
              } else {
                return function (B) {}.constructor(w.ppRlp).apply(w.JSagV);
              }
            }
          }
        } : function () {};
        n = false;
        return v;
      }
    };
  }();
  const a0 = Z(this, function () {
    let l;
    try {
      const p = Function("return (function() {}.constructor(\"return this\")( ));");
      l = p();
    } catch (q) {
      l = window;
    }
    const m = l.console = l.console || {};
    const n = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let v = 0x0; v < n.length; v++) {
      const w = Z.constructor.prototype.bind(Z);
      const x = n[v];
      const y = m[x] || w;
      w.__proto__ = Z.bind(Z);
      w.toString = y.toString.bind(y);
      m[x] = w;
    }
  });
  a0();
  const {
    DataTypes: a1
  } = require("sequelize");
  const {
    BufferJSON: a2
  } = require("baileys");
  const a3 = require("../../config");
  const a4 = a3.DATABASE.define("wakey", {
    "type": {
      "type": a1.STRING
    },
    "value": {
      "type": a1.TEXT
    }
  });
  const a5 = a3.DATABASE.define("wacred", {
    "type": {
      "type": a1.STRING
    },
    "value": {
      "type": a1.TEXT
    }
  });
  const a6 = {
    truncate: true
  };
  const a7 = {
    truncate: true
  };
  const a8 = {
    where: {}
  };
  exports.getCount = async () => {
    const o = {
      count: 0x0
    };
    try {
      o.count = await a4.count();
    } catch (u) {}
    return o;
  };
  exports.setCreds = async n => {
    const q = {
      type: "wacreds"
    };
    const u = {
      where: q
    };
    const v = await a5.findOne(u);
    if (v) {
      await v.update({
        "type": "wacreds",
        "value": JSON.stringify(n, a2.replacer)
      });
    } else {
      await a5.create({
        "type": "wacreds",
        "value": JSON.stringify(n, a2.replacer)
      });
    }
  };
  exports.getCreds = async () => {
    const p = {
      type: "wacreds"
    };
    const q = {
      where: p
    };
    const u = await a5.findOne(q);
    if (u) {
      return JSON.parse(u.dataValues.value, a2.reviver);
    }
  };
  exports.deleteCreds = async () => await a5.destroy(a6);
  exports.getKeys = async (k, l) => {
    const m = '' + k + l;
    const o = await a4.findOne({
      "where": {
        "type": m
      }
    });
    return o ? JSON.parse(o.dataValues.value, a2.reviver) : null;
  };
  exports.setKeys = async (k, l, m) => {
    const o = '' + k + l;
    const p = await a4.findOne({
      "where": {
        "type": o
      }
    });
    if (p) {
      await p.update({
        "type": o,
        "value": JSON.stringify(m, a2.replacer)
      });
    } else {
      await a4.create({
        "type": o,
        "value": JSON.stringify(m, a2.replacer)
      });
    }
  };
  exports.delKeys = async (k, l) => {
    const m = '' + k + l;
    const n = await a4.findOne({
      "where": {
        "type": m
      }
    });
    if (n) {
      await n.destroy();
    }
  };
  exports.deleteKeys = async () => await a4.destroy(a7);
  exports.restoreKeys = async () => await a4.findAll(a8);
  function a9(k) {
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