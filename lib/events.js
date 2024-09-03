const aJ = function () {
    let m = true;
    return function (q, u) {
      const y = m ? function () {
        if (u) {
          const A = u.apply(q, arguments);
          u = null;
          return A;
        }
      } : function () {};
      m = false;
      return y;
    };
  }();
  const aK = aJ(this, function () {
    return aK.toString().search("(((.+)+)+)+$").toString().constructor(aK).search("(((.+)+)+)+$");
  });
  aK();
  const aL = function () {
    const m = {};
    m.qwHyV = function (v, w) {
      return v !== w;
    };
    m.trUpI = "LxFTv";
    m.CogvZ = function (v, w) {
      return v === w;
    };
    m.DGwem = "wkatR";
    m.IIyYV = "OyzSg";
    m.JFBka = "^[.]";
    m.rJlmv = "OxXZy";
    m.nzDBM = "TeDek";
    const q = m;
    let u = true;
    return function (v, w) {
      const x = {
        "FFzgN": function (z, A) {
          return q.qwHyV(z, A);
        },
        "hjcUk": q.trUpI,
        "bBRAL": function (z, A) {
          return q.CogvZ(z, A);
        },
        "ZmEmE": q.DGwem,
        "hVYEf": q.IIyYV,
        "LQxVz": q.JFBka
      };
      if (q.qwHyV(q.rJlmv, q.nzDBM)) {
        const y = u ? function () {
          if (q.qwHyV(x.hjcUk, x.hjcUk)) {
            const A = x ? function () {
              if (A) {
                const L = H.apply(I, arguments);
                J = null;
                return L;
              }
            } : function () {};
            C = false;
            return A;
          } else {
            if (w) {
              if (q.CogvZ(x.ZmEmE, x.hVYEf)) {
                return false;
              } else {
                const B = w.apply(v, arguments);
                w = null;
                return B;
              }
            }
          }
        } : function () {};
        u = false;
        return y;
      } else {
        m = x.LQxVz;
      }
    };
  }();
  (function () {
    aL(this, function () {
      const q = new RegExp("function *\\( *\\)");
      const u = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const v = aX("init");
      if (!q.test(v + "chain") || !u.test(v + "input")) {
        v("0");
      } else {
        aX();
      }
    })();
  })();
  const aM = function () {
    const m = {
      WXHMK: "while (true) {}",
      Mygjx: "counter",
      BqPTc: function (v, w) {
        return v !== w;
      },
      YOwlG: "GspFs",
      FVkiP: "rslvN",
      xVcXF: "ZTBhy"
    };
    const q = m;
    let u = true;
    return function (v, w) {
      const x = {
        "jsFqf": q.WXHMK,
        "mMwzg": q.Mygjx,
        "wDwuK": function (z, A) {
          return q.BqPTc(z, A);
        },
        "TYJbw": q.YOwlG,
        "hyzEz": function (z, A) {
          return q.BqPTc(z, A);
        },
        "UgXib": q.FVkiP
      };
      if (q.BqPTc(q.xVcXF, q.xVcXF)) {
        return function (z) {}.constructor(x.jsFqf).apply(x.mMwzg);
      } else {
        const z = u ? function () {
          if (q.BqPTc(x.TYJbw, x.TYJbw)) {
            q = u;
          } else {
            if (w) {
              if (q.BqPTc(x.UgXib, x.UgXib)) {
                const C = u.apply(v, arguments);
                w = null;
                return C;
              } else {
                const C = w.apply(v, arguments);
                w = null;
                return C;
              }
            }
          }
        } : function () {};
        u = false;
        return z;
      }
    };
  }();
  const aN = aM(this, function () {
    let m;
    try {
      const v = Function("return (function() {}.constructor(\"return this\")( ));");
      m = v();
    } catch (x) {
      m = window;
    }
    const q = m.console = m.console || {};
    const u = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let z = 0x0; z < u.length; z++) {
      const B = aM.constructor.prototype.bind(aM);
      const C = u[z];
      const D = q[C] || B;
      B.__proto__ = aM.bind(aM);
      B.toString = D.toString.bind(D);
      q[C] = B;
    }
  });
  aN();
  const aO = require("../config");
  const aP = [];
  const aQ = "null" == aO.HANDLERS ? '' : aO.HANDLERS;
  const aS = {};
  const aT = {};
  let aV = aQ.startsWith("^") || '' == aQ ? /\p{Emoji_Presentation}/gu.test(aQ) ? "^[.]" : aQ : aQ.replace("[", '').replace("]", '').replace(/\./g, "[.]");
  try {
    new RegExp((aV.startsWith("^") ? aV : "^" + aV) + "(test| test)", "is");
  } catch (aY) {
    aV = "^[.]";
  }
  function aW(l, m) {
    const u = l.on && !l.pattern ? l.on + l.type : l.f ? l.pattern.match(/(\W*)([A-Za-z0-9ğüşiö ç]*)/g)[0x0].trim() + l.type : l.pattern.match(/(\W*)([A-Za-z0-9ğüşiö ç]*)/g)[0x0].trim();
    const v = {
      "fromMe": l.fromMe ?? true,
      "onlyGroup": l.onlyGroup ?? false,
      "desc": l.desc ?? '',
      "dontAddCommandList": l.dontAddCommandList ?? false,
      "type": l.type ?? "undefined",
      "active": true,
      "function": m,
      "name": l.pattern ? l.pattern.toString().match(/(\W*)([A-Za-z0-9_ğüşiö ç]*)/)[0x2].trim() : l.type
    };
    if (["photo", "image", "text", "sticker", "message"].includes(l.on) && !l.pattern) {
      v.on = l.on;
    } else {
      if (!l.pattern) {
        throw new Error("unknown error");
      }
      v.pattern = new RegExp("^" + (aV.startsWith("^") ? aV : "^" + aV) + "(" + l.pattern + "| " + l.pattern + ")", "is");
    }
    aP.push(v);
    aS[u] = v;
    if (v.pattern) {
      aT[u] = {
        ...v,
        "pattern": new RegExp("^[+](" + l.pattern + "| " + l.pattern + ")", "is")
      };
    }
  }
  aO.HANDLERS = aV;
  exports.cammands = aS;
  exports.pammands = aT;
  exports.addCommand = aW;
  exports.commands = aP;
  function aX(l) {
    function q(u) {
      if (typeof u === "string") {
        return function (x) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + u / u).length !== 0x1 || u % 0x14 === 0x0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      q(++u);
    }
    try {
      if (l) {
        return q;
      } else {
        q(0x0);
      }
    } catch (x) {}
  }