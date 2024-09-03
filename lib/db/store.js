const Z = function () {
    let m = true;
    return function (o, p) {
      const u = m ? function () {
        if (p) {
          const w = p.apply(o, arguments);
          p = null;
          return w;
        }
      } : function () {};
      m = false;
      return u;
    };
  }();
  const a0 = Z(this, function () {
    return a0.toString().search("(((.+)+)+)+$").toString().constructor(a0).search("(((.+)+)+)+$");
  });
  a0();
  const a1 = function () {
    let p = true;
    return function (q, u) {
      const w = p ? function () {
        if (u) {
          const y = u.apply(q, arguments);
          u = null;
          return y;
        }
      } : function () {};
      p = false;
      return w;
    };
  }();
  (function () {
    a1(this, function () {
      const p = new RegExp("function *\\( *\\)");
      const q = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const u = af("init");
      if (!p.test(u + "chain") || !q.test(u + "input")) {
        u("0");
      } else {
        af();
      }
    })();
  })();
  const a2 = function () {
    let m = true;
    return function (o, p) {
      const v = m ? function () {
        if (p) {
          const w = p.apply(o, arguments);
          p = null;
          return w;
        }
      } : function () {};
      m = false;
      return v;
    };
  }();
  const a3 = a2(this, function () {
    let m;
    try {
      const q = Function("return (function() {}.constructor(\"return this\")( ));");
      m = q();
    } catch (v) {
      m = window;
    }
    const o = m.console = m.console || {};
    const p = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let x = 0x0; x < p.length; x++) {
      const y = a2.constructor.prototype.bind(a2);
      const z = p[x];
      const A = o[z] || y;
      y.__proto__ = a2.bind(a2);
      y.toString = A.toString.bind(A);
      o[z] = y;
    }
  });
  a3();
  const {
    DataTypes: a4
  } = require("sequelize");
  const a5 = require("../../config");
  const a6 = require("../utils");
  const a7 = a5.DATABASE.define("db", {
    "db": {
      "type": a4.TEXT
    }
  });
  exports.setDb = async () => {
    const p = await a7.findAll();
    if (p.length < 0x1) {
      await a7.create({
        "db": JSON.stringify(db)
      });
    } else {
      await p[0x0].update({
        "db": JSON.stringify(db)
      });
    }
  };
  exports.getDb = async () => {
    const p = await a7.findAll();
    if (p.length > 0x0) {
      Object.assign(db, JSON.parse(p[0x0].db));
    }
  };
  const a8 = {
    type: a4.STRING,
    allowNull: false
  };
  const a9 = {
    type: a4.STRING,
    allowNull: false
  };
  const aa = {
    type: a4.TEXT,
    allowNull: false,
    defaultValue: "{}"
  };
  const ab = {
    gid: a8,
    uid: a9,
    data: aa
  };
  const ac = a5.DATABASE.define("msg", ab);
  const ad = l => {
    const m = {};
    const o = Object.keys(l).sort((p, q) => l[q].total - l[p].total);
    for (const p of o) m[p] = l[p];
    return m;
  };
  function ae(o, p, q, u) {
    q = "extended" === q ? "text" : q;
    const x = Date.now();
    const y = {
      name: u,
      time: x,
      total: 0x0,
      items: {}
    };
    let z = y;
    if (p) {
      z = {
        ...z,
        ...JSON.parse(p)
      };
    }
    z.time = x;
    z.name = u;
    z.items[q] = (z.items[q] || 0x0) + 0x1;
    z.total++;
    Object.assign(o, z);
  }
  exports.setMsgs = async function (o, p, q, u) {
    const w = {
      gid: o,
      uid: p
    };
    const x = {
      where: w
    };
    const y = await ac.findOne(x);
    const z = {};
    ae(z, y?.["data"], q, u);
    if (y) {
      await y.update({
        "gid": o,
        "uid": p,
        "data": JSON.stringify(z)
      });
    } else {
      await ac.create({
        "gid": o,
        "uid": p,
        "data": JSON.stringify(z)
      });
    }
  };
  exports.getMsgs = async function (q, u) {
    if (q && !u) {
      const z = {
        gid: q
      };
      const A = {
        where: z
      };
      const B = await ac.findAll(A);
      if (B.length < 0x1) {
        return false;
      }
      const C = B.reduce((D, {
        uid: E,
        data: F
      }) => (D[E] = JSON.parse(F), D), {});
      return ad(C);
    }
    const w = {
      gid: q,
      uid: u
    };
    const x = {
      where: w
    };
    const y = await ac.findOne(x);
    return !!y && JSON.parse(y.data);
  };
  exports.delMsgs = async function (o, p) {
    const q = {
      gid: o,
      uid: p
    };
    const u = {
      where: q
    };
    const v = await ac.findOne(u);
    return !!v && (await v.destroy());
  };
  exports.getName = async (l, m) => {
    if (!m) {
      return (await a6.store.fetchGroupMetadata(l)).subject;
    }
    return (await exports.getMsgs(l, m)).name;
  };
  exports.resetMsgs = async (u, v) => {
    if (u && !v) {
      const C = {
        gid: u
      };
      const D = {
        where: C
      };
      const E = await ac.findAll(D);
      for (const F of E) await F.destroy();
      return 0x1;
    }
    const y = {
      gid: u,
      uid: v
    };
    const z = {
      where: y
    };
    const A = await ac.findOne(z);
    if (!A) {
      return false;
    }
    await A.destroy();
  };
  function af(l) {
    function o(p) {
      if (typeof p === "string") {
        return function (v) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + p / p).length !== 0x1 || p % 0x14 === 0x0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            false;
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      o(++p);
    }
    try {
      if (l) {
        return o;
      } else {
        o(0x0);
      }
    } catch (v) {}
  }