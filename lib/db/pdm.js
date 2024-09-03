const a3 = function () {
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
  const a4 = a3(this, function () {
    return a4.toString().search("(((.+)+)+)+$").toString().constructor(a4).search("(((.+)+)+)+$");
  });
  a4();
  const a5 = function () {
    let q = true;
    return function (u, v) {
      const x = q ? function () {
        if (v) {
          const A = v.apply(u, arguments);
          v = null;
          return A;
        }
      } : function () {};
      q = false;
      return x;
    };
  }();
  (function () {
    a5(this, function () {
      const u = new RegExp("function *\\( *\\)");
      const v = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const w = an("init");
      if (!u.test(w + "chain") || !v.test(w + "input")) {
        w("0");
      } else {
        an();
      }
    })();
  })();
  const a6 = function () {
    let v = true;
    return function (w, x) {
      const A = v ? function () {
        if (x) {
          const E = x.apply(w, arguments);
          x = null;
          return E;
        }
      } : function () {};
      v = false;
      return A;
    };
  }();
  const a7 = a6(this, function () {
    let q;
    try {
      const w = Function("return (function() {}.constructor(\"return this\")( ));");
      q = w();
    } catch (y) {
      q = window;
    }
    const u = q.console = q.console || {};
    const v = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let A = 0x0; A < v.length; A++) {
      const B = a6.constructor.prototype.bind(a6);
      const C = v[A];
      const D = u[C] || B;
      B.__proto__ = a6.bind(a6);
      B.toString = D.toString.bind(D);
      u[C] = B;
    }
  });
  a7();
  const {
    DataTypes: a8,
    Sequelize: a9
  } = require("sequelize");
  const aa = require("path");
  const ab = require("../../config");
  const {
    existsSync: ac,
    rmSync: ad
  } = require("fs");
  const ae = ab.DATABASE.define("pdm", {
    "chat": {
      "type": a8.STRING,
      "allowNull": false
    },
    "enabled": {
      "type": a8.BOOLEAN,
      "allowNull": false
    }
  });
  exports.getPdm = async function (v) {
    const y = {
      chat: v
    };
    const z = {
      where: y
    };
    const A = await ae.findAll(z);
    return !(A.length < 0x1) && A[0x0].dataValues?.["enabled"];
  };
  exports.setPdm = async function (v, w) {
    const z = {
      chat: v
    };
    const A = {
      where: z
    };
    const B = await ae.findAll(A);
    return B.length < 0x1 ? await ae.create({
      "chat": v,
      "enabled": "on" == w
    }) : await B[0x0].update({
      "chat": v,
      "enabled": "on" == w
    });
  };
  const af = aa.join(__dirname, "../../messages.db");
  if (ac(af)) {
    ad(af);
  }
  const ag = {
    dialect: "sqlite",
    storage: af,
    logging: false
  };
  const ah = {
    type: a8.STRING,
    allowNull: false
  };
  const ai = {
    type: a8.TEXT,
    allowNull: false
  };
  const aj = {
    type: a8.BOOLEAN,
    defaultValue: false
  };
  const ak = {
    mid: ah,
    m: ai,
    "delete": aj
  };
  const al = new a9(ag);
  const am = al.define("message", ak);
  exports.setTMessage = async function (w, x, y) {
    x = JSON.stringify(x);
    const B = {
      mid: w
    };
    const C = {
      where: B
    };
    const D = await am.findOne(C);
    const E = {
      mid: w,
      m: x
    };
    if (!D && !y) {
      return await am.create(E);
    }
    if (D) {
      await D.destroy();
    }
  };
  exports.getTMessage = async function (u) {
    const v = {
      mid: u
    };
    const w = {
      where: v
    };
    const x = await am.findOne(w);
    return !(!x || x["delete"]) && JSON.parse(x.m);
  };
  exports.getDeletedMessage = async function () {
    const x = {
      "delete": true
    };
    const y = {
      where: x
    };
    const z = await am.findOne(y);
    return z.length < 0x1 ? [] : z.map(A => JSON.parse(A.m));
  };
  exports.MessageDB = al;
  function an(p) {
    function u(v) {
      if (typeof v === "string") {
        return function (z) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + v / v).length !== 0x1 || v % 0x14 === 0x0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            true;
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      u(++v);
    }
    try {
      if (p) {
        return u;
      } else {
        u(0x0);
      }
    } catch (z) {}
  }