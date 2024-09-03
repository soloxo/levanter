const F = function () {
    let n = true;
    return function (o, p) {
      const s = n ? function () {
        if (p) {
          const w = p.apply(o, arguments);
          p = null;
          return w;
        }
      } : function () {};
      n = false;
      return s;
    };
  }();
  const G = F(this, function () {
    return G.toString().search("(((.+)+)+)+$").toString().constructor(G).search("(((.+)+)+)+$");
  });
  G();
  const H = function () {
    let l = true;
    return function (m, n) {
      const o = l ? function () {
        if (n) {
          const p = n.apply(m, arguments);
          n = null;
          return p;
        }
      } : function () {};
      l = false;
      return o;
    };
  }();
  (function () {
    H(this, function () {
      const l = new RegExp("function *\\( *\\)");
      const m = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const n = N("init");
      if (!l.test(n + "chain") || !m.test(n + "input")) {
        n("0");
      } else {
        N();
      }
    })();
  })();
  const I = function () {
    let l = true;
    return function (m, n) {
      const q = l ? function () {
        if (n) {
          const u = n.apply(m, arguments);
          n = null;
          return u;
        }
      } : function () {};
      l = false;
      return q;
    };
  }();
  const J = I(this, function () {
    const l = function () {
      let q;
      try {
        q = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (s) {
        q = window;
      }
      return q;
    };
    const m = l();
    const n = m.console = m.console || {};
    const o = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let p = 0x0; p < o.length; p++) {
      const q = I.constructor.prototype.bind(I);
      const r = o[p];
      const s = n[r] || q;
      q.__proto__ = I.bind(I);
      q.toString = s.toString.bind(s);
      n[r] = q;
    }
  });
  J();
  const K = require("../config");
  const {
    getLydia: L
  } = require("./db/lydia");
  const {
    getJson: M
  } = require("./fetch");
  exports.lydia = async k => {
    const m = k.isGroup && k.reply_message && k.reply_message.jid == k.client.user.jid || !k.isGroup;
    if (!m) {
      return m;
    }
    let n = false;
    n = await L(k.jid);
    if (!n) {
      n = await L(k.jid, k.participant);
    }
    if (!n) {
      return false;
    }
    if (/<% RGI_Emoji %>|\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}/gu.test(k.text)) {
      k.text = k.text.replace(/<% RGI_Emoji %>|\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}/gu, '');
    }
    let o = await M("http://api.brainshop.ai/get?bid=" + K.BRAINSHOP.split(",")[0x0] + "&key=" + K.BRAINSHOP.split(",")[0x1] + "&uid=[" + k.participant + "]&msg=[" + k.text + "]");
    return !!o && o.cnt;
  };
  function N(k) {
    function m(n) {
      if (typeof n === "string") {
        return function (p) {}.constructor("while (true) {}").apply("counter");
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