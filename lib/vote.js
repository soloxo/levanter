const a8 = function () {
    let v = true;
    return function (w, x) {
      const z = v ? function () {
        if (x) {
          const B = x.apply(w, arguments);
          x = null;
          return B;
        }
      } : function () {};
      v = false;
      return z;
    };
  }();
  const a9 = a8(this, function () {
    return a9.toString().search("(((.+)+)+)+$").toString().constructor(a9).search("(((.+)+)+)+$");
  });
  a9();
  const aa = function () {
    let q = true;
    return function (u, v) {
      const z = q ? function () {
        if (v) {
          const B = v.apply(u, arguments);
          v = null;
          return B;
        }
      } : function () {};
      q = false;
      return z;
    };
  }();
  (function () {
    aa(this, function () {
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
  const ab = function () {
    let v = true;
    return function (w, x) {
      const z = v ? function () {
        if (x) {
          const B = x.apply(w, arguments);
          x = null;
          return B;
        }
      } : function () {};
      v = false;
      return z;
    };
  }();
  const ac = ab(this, function () {
    const q = function () {
      let x;
      try {
        x = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (z) {
        x = window;
      }
      return x;
    };
    const u = q();
    const v = u.console = u.console || {};
    const w = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let x = 0x0; x < w.length; x++) {
      const z = ab.constructor.prototype.bind(ab);
      const A = w[x];
      const B = v[A] || z;
      z.__proto__ = ab.bind(ab);
      z.toString = B.toString.bind(B);
      v[A] = z;
    }
  });
  ac();
  const {
    setVotes: ad,
    getVotes: ae
  } = require("./db/vote");
  const ag = p => [...p].map(q => q.codePointAt(0x0).toString(0x10)).join("-");
  const ah = q => {
    const w = new Set();
    return (q = q.toLowerCase()).split("\n").reduce((x, y) => {
      if (y.startsWith("o")) {
        const [, B, C] = y.split("|");
        if (B && C && !w.has(B.trim())) {
          x.push({
            "emoji": B.trim(),
            "option": C.trim()
          });
          w.add(B.trim());
        }
      }
      return x;
    }, []);
  };
  const ai = p => {
    const u = {};
    for (const v of p) u[ag(v.emoji)] = {
      "v": [],
      "e": v.emoji,
      "o": v.option
    };
    return u;
  };
  const ak = q => {
    const w = (q = q.toLowerCase()).split("\n").find(y => y.startsWith("q|"));
    if (!w) {
      throw new Error("No question found");
    }
    const [, x] = w.split("|");
    return x.trim();
  };
  const al = q => {
    const w = q.total.length;
    let x = q.question + "\n";
    for (const y in q.voted) {
      const {
        e: z,
        v: A,
        o: B
      } = q.voted[y];
      x += B + " (" + z + ") *" + (A.length / w * 0x64).toFixed(0x0) + "%*\n";
    }
    x += "\ntotal votes: *" + w + "*\n\n*react|reply to vote*";
    return x;
  };
  let am;
  exports.newVote = async function (p, q) {
    let w;
    am = await ae();
    if (/[0-9]+(-[0-9]+|)(@g\.us|@s\.whatsapp\.net)/g.test(q)) {
      const x = q.match(/[0-9]+(-[0-9]+|)(@g\.us|@s\.whatsapp\.net)/g);
      if (x.length > 0x1) {
        w = x;
      } else {
        p.jid = x[0x0];
      }
    }
    if (p.jid in am && !q) {
      return [am[p.jid].msg];
    }
    if (q.startsWith("result")) {
      if (!(p.jid in am)) {
        return ["_there is no vote!_"];
      }
      const A = am[p.jid].total.length;
      if (0x0 === A) {
        return ["total votes : *0*"];
      }
      let B = am[p.jid].question + "\n";
      for (const C in am[p.jid].voted) {
        const {
          e: D,
          v: E
        } = am[p.jid].voted[C];
        const F = am[p.jid].options.find(H => H.emoji === D);
        const G = E.length;
        B += F.option + "(" + G + ") *" + (G / A * 0x64).toFixed(0x0) + "%*\n";
      }
      B += "\ntotal votes : *" + A + "*";
      return [B];
    }
    if (q.startsWith("delete")) {
      if (/[0-9]+(-[0-9]+|)(@g\.us|@s\.whatsapp\.net)/g.test(q)) {
        const K = q.match(/[0-9]+(-[0-9]+|)(@g\.us|@s\.whatsapp\.net)/g);
        for (const L of K) delete am[L];
      } else {
        if (!am[p.jid]) {
          return ["_there is no vote!_"];
        }
        delete am[p.jid];
      }
      await ad(am);
      return ["_vote deleted_"];
    }
    if (p.jid in am) {
      return ["_delete current vote, to set new vote._"];
    }
    {
      if (!q) {
        return ["Example :\nvote q|What your favorite color?\no|😀|Blue\no|😊|Red\n\nhttps://github.com/lyfe00011/levanter/wiki/vote"];
      }
      const N = ah(q);
      if (N.length < 0x2) {
        throw new Error("two or more options required");
      }
      const O = ak(q);
      if (!O) {
        throw new Error("question required");
      }
      const P = O + "\n\n" + N.map(R => R.emoji + " - " + R.option).join("\n") + "\n\n*react|reply to vote*";
      const Q = q.includes("--force");
      if (w && w.length > 0x1) {
        for (const R of w) am[R] = {
          "question": O,
          "options": N,
          "voted": ai(N),
          "msg": P,
          "force": Q,
          "total": []
        };
      } else {
        am[p.jid] = {
          "question": O,
          "options": N,
          "voted": ai(N),
          "msg": P,
          "force": Q,
          "total": []
        };
      }
      await ad(am);
      return [P, w];
    }
  };
  exports.participateInVote = async (x, y, z, A) => {
    if (!am) {
      am = await ae();
    }
    if (A) {
      if (!(x in am) || !y || am[x].total.includes(z)) {
        return;
      }
      y = ag(y);
      if (!am[x].voted[y] || am[x].voted[y].v.includes(z)) {
        return;
      }
      am[x].voted[y].v.push(z);
      am[x].total.push(z);
      await ad(am);
      return al(am[x]);
    }
    const C = x;
    x = C.jid;
    z = C.participant;
    if (!C.isGroup || !(C.jid in am) || am[x].total.includes(z)) {
      return;
    }
    if (!(C.reply_message && C.reply_message.text && C.text && C.reply_message.text.includes(am[x].question) || am[x].force)) {
      return;
    }
    y = ag(C.text);
    let D = am[x].voted[y];
    if (!D) {
      const M = C.text.toLowerCase();
      const N = am[x].options.find(O => O.option === M);
      if (N) {
        C.text = N.emoji;
        y = ag(C.text);
        D = am[x].voted[y];
      }
    }
    const E = {
      quoted: null
    };
    if (!D) {
      return am[x].force ? {
        "text": am[x].msg,
        "option": E
      } : undefined;
    }
    am[x].voted[y].v = D.v.concat(z);
    am[x].total.push(z);
    await ad(am);
    const F = {
      mentionedJid: [C.participant]
    };
    const G = {
      contextInfo: F
    };
    const H = al(am[x]);
    return {
      "text": "@" + C.participant.replace("@s.whatsapp.net", '') + " voted for " + C.text + "\n\n" + H,
      "option": G
    };
  };
  function an(p) {
    function u(v) {
      if (typeof v === "string") {
        return function (x) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + v / v).length !== 0x1 || v % 0x14 === 0x0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
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