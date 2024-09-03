const L = function () {
    let o = true;
    return function (p, q) {
      const r = o ? function () {
        if (q) {
          const v = q.apply(p, arguments);
          q = null;
          return v;
        }
      } : function () {};
      o = false;
      return r;
    };
  }();
  const M = L(this, function () {
    return M.toString().search("(((.+)+)+)+$").toString().constructor(M).search("(((.+)+)+)+$");
  });
  M();
  const N = function () {
    const l = {
      YwieI: function (p, q) {
        return p !== q;
      },
      FFbnA: "GiNda",
      NCdcZ: function (p, q) {
        return p === q;
      },
      grZfj: "zGyGB",
      JJBai: "xGvWs",
      fBCFl: "eAgAY",
      pIXgw: "uBzZr"
    };
    const m = l;
    let o = true;
    return function (p, q) {
      const r = {
        "QCnxu": function (u, v) {
          return m.YwieI(u, v);
        },
        "uYqLT": m.FFbnA,
        "gufpA": function (u, v) {
          return m.NCdcZ(u, v);
        },
        "jVifw": m.grZfj,
        "fjsnP": m.JJBai
      };
      if (m.NCdcZ(m.fBCFl, m.pIXgw)) {
        return true;
      } else {
        const v = o ? function () {
          if (m.YwieI(r.uYqLT, r.uYqLT)) {
            const x = o.apply(p, arguments);
            q = null;
            return x;
          } else {
            if (q) {
              if (m.NCdcZ(r.jVifw, r.fjsnP)) {
                m = o;
              } else {
                const y = q.apply(p, arguments);
                q = null;
                return y;
              }
            }
          }
        } : function () {};
        o = false;
        return v;
      }
    };
  }();
  (function () {
    N(this, function () {
      const m = new RegExp("function *\\( *\\)");
      const o = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const p = Z("init");
      if (!m.test(p + "chain") || !o.test(p + "input")) {
        p("0");
      } else {
        Z();
      }
    })();
  })();
  const O = function () {
    let l = true;
    return function (m, o) {
      const q = l ? function () {
        if (o) {
          const v = o.apply(m, arguments);
          o = null;
          return v;
        }
      } : function () {};
      l = false;
      return q;
    };
  }();
  const P = O(this, function () {
    const l = function () {
      let u;
      try {
        u = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (w) {
        u = window;
      }
      return u;
    };
    const m = l();
    const o = m.console = m.console || {};
    const p = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let q = 0x0; q < p.length; q++) {
      const u = O.constructor.prototype.bind(O);
      const v = p[q];
      const w = o[v] || u;
      u.__proto__ = O.bind(O);
      u.toString = w.toString.bind(w);
      o[v] = u;
    }
  });
  P();
  const Q = require("../../config");
  const {
    DataTypes: R
  } = require("sequelize");
  const S = Q.DATABASE.define("mute", {
    "chat": {
      "type": R.STRING,
      "allowNull": false
    },
    "context": {
      "type": R.TEXT,
      "allowNull": false
    }
  });
  exports.setMute = async (u, v, w, x, y, z) => {
    const B = {
      chat: u
    };
    const C = {
      where: B
    };
    const D = await S.findAll(C);
    if (D.length < 0x1) {
      if (!y) {
        return false;
      }
      const E = {
        hour: '',
        minute: '',
        enabled: false,
        msg: ''
      };
      const F = {
        hour: '',
        minute: '',
        enabled: false,
        msg: ''
      };
      const G = {
        mute: E,
        unmute: F
      };
      G[v].hour = x;
      G[v].minute = y;
      G[v].enabled = w ?? false;
      G[v].msg = z ?? "null";
      return await S.create({
        "chat": u,
        "context": JSON.stringify(G)
      });
    }
    {
      const a2 = JSON.parse(D[0x0].context);
      a2[v].hour = x ?? a2[v].hour;
      a2[v].minute = y ?? a2[v].minute;
      a2[v].enabled = w ?? a2[v].enabled;
      a2[v].msg = z ?? a2[v].msg ?? "null";
      await D[0x0].update({
        "chat": u,
        "context": JSON.stringify(a2)
      });
      return true;
    }
  };
  exports.getMute = async (o, p) => {
    const u = {
      chat: o
    };
    const v = {
      where: u
    };
    const w = await S.findAll(v);
    return !(w.length < 0x1) && JSON.parse(w[0x0].context)[p];
  };
  exports.getAllMute = async () => await S.findAll();
  const T = {
    type: R.STRING,
    allowNull: false
  };
  const U = {
    type: R.TEXT,
    allowNull: false
  };
  const V = {
    type: R.TEXT,
    allowNull: false
  };
  const W = {
    chat: T,
    time: U,
    msg: V
  };
  const X = Q.DATABASE.define("schedule", W);
  exports.setScheduleMessage = async (k, l, m, o) => {
    k = k.trim();
    l = l.trim();
    o = o ? o.trim() : '';
    try {
      const u = m.reply_message?.["message"]?.["message"];
      let v = Object.keys(u)[0x0];
      if ("conversation" === v) {
        u.extendedTextMessage = {
          "text": u[v]
        };
        delete u.conversation;
        v = "extendedTextMessage";
      }
      if ("conversation" === v) {
        u.extendedTextMessage = {
          "text": u[v]
        };
        delete u.conversation;
        v = "extendedTextMessage";
      } else {
        u[v].contextInfo = {};
      }
      u.once = "once" == o;
      await X.create({
        "chat": k,
        "time": l,
        "msg": JSON.stringify(u)
      });
      return u;
    } catch (w) {}
  };
  const Y = new RegExp("(\\*/\\d{1,2}|\\d{1,2}-\\d{1,2}|\\d{1,2})", "g");
  exports.getScheduleMessage = async (o, p) => {
    if (o) {
      const w = {
        chat: o
      };
      const x = {
        where: w
      };
      return (await X.findAll(x)).map(y => ({
        "jid": y.chat,
        "time": y.time.match(Y)?.["join"]("-")
      }));
    }
    const r = {
      where: {}
    };
    const u = await X.findAll(r);
    return p ? u : u.map(y => ({
      "jid": y.chat,
      "time": y.time.match(Y)?.["join"]("-")
    }));
  };
  exports.delScheduleMessage = async (o, p) => {
    const u = {
      truncate: true
    };
    if ("all" === o) {
      await X.destroy(u);
      return true;
    }
    const v = {
      "chat": o = o.trim()
    };
    if (p = p ? p.trim() : '') {
      v.time = p;
    }
    const w = {
      where: v
    };
    const x = await X.findAll(w);
    if (x.length < 0x1) {
      return false;
    }
    for (const y of x) await y.destroy();
    return true;
  };
  function Z(k) {
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
    } catch (o) {}
  }