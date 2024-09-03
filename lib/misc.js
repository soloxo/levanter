const a3 = function () {
    let x = true;
    return function (y, z) {
      const C = x ? function () {
        if (z) {
          const E = z.apply(y, arguments);
          z = null;
          return E;
        }
      } : function () {};
      x = false;
      return C;
    };
  }();
  const a4 = a3(this, function () {
    return a4.toString().search("(((.+)+)+)+$").toString().constructor(a4).search("(((.+)+)+)+$");
  });
  a4();
  const a5 = function () {
    let x = true;
    return function (y, z) {
      const B = x ? function () {
        if (z) {
          const D = z.apply(y, arguments);
          z = null;
          return D;
        }
      } : function () {};
      x = false;
      return B;
    };
  }();
  (function () {
    a5(this, function () {
      const A = new RegExp("function *\\( *\\)");
      const B = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const C = an("init");
      if (!A.test(C + "chain") || !B.test(C + "input")) {
        C("0");
      } else {
        an();
      }
    })();
  })();
  const a6 = function () {
    let z = true;
    return function (A, B) {
      const E = z ? function () {
        if (B) {
          const F = B.apply(A, arguments);
          B = null;
          return F;
        }
      } : function () {};
      z = false;
      return E;
    };
  }();
  const a7 = a6(this, function () {
    let x;
    try {
      const A = Function("return (function() {}.constructor(\"return this\")( ));");
      x = A();
    } catch (C) {
      x = window;
    }
    const y = x.console = x.console || {};
    const z = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let E = 0x0; E < z.length; E++) {
      const F = a6.constructor.prototype.bind(a6);
      const G = z[E];
      const H = y[G] || F;
      F.__proto__ = a6.bind(a6);
      F.toString = H.toString.bind(H);
      y[G] = F;
    }
  });
  a7();
  const a8 = (...w) => import("node-fetch").then(({
    default: x
  }) => x(...w));
  const {
    genButtonMessage: a9
  } = require("./utils");
  const aa = require("cheerio");
  const {
    join: ab
  } = require("path");
  const ac = require("pdfkit");
  const {
    readFileSync: ad,
    emptyDirSync: ae,
    readdirSync: af,
    createWriteStream: ag
  } = require("fs-extra");
  const {
    getSpam: ah
  } = require("./db");
  const {
    spamCheck: ai
  } = require("./antilink");
  const aj = require("../config");
  exports.getImgUrl = async w => {
    const y = await a8(w);
    if (!y.ok) {
      throw new Error("Failed to fetch data: " + y.statusText);
    }
    const z = await y.text();
    return aa.load(z)("#il_fi").attr("src");
  };
  exports.getCommon = function (w, x) {
    if (x) {
      const A = new Map();
      for (const C of w) for (const D of C) A.set(D, (A.get(D) || 0x0) + 0x1);
      const B = [];
      for (const [E, F] of A.entries()) if (F > 0x1) {
        B.push(E);
      }
      return B;
    }
    return w.reduce((G, H) => G.filter(I => H.includes(I)));
  };
  exports.buttonMessage = async (w, x) => {
    let z;
    const A = [];
    const B = w[0x0];
    const C = w[0x1];
    for (let D = 0x2; D < w.length; D++) {
      if (w[D].length > 0x0) {
        A.push({
          "id": w[D],
          "text": w[D]
        });
      }
    }
    if (x.reply_message && x.reply_message.mimetype) {
      z = {
        [x.reply_message.image ? "image" : x.reply_message.video ? "video" : "document"]: x.reply_message.message.message[x.reply_message.type]
      };
    }
    return await a9(A, B, C, z, x);
  };
  exports.toPdf = async function () {
    const x = af("./pdf");
    if (0x0 == x.length) {
      throw new Error("Not added pages, Use page command");
    }
    return await new Promise(y => {
      const A = [841.89, 1190.55];
      const B = new ac({
        "margin": 0x0,
        "size": A
      });
      for (let C = 0x0; C < x.length; C++) {
        B.image(ab(__dirname, "../pdf/" + x[C]), 0x0, 0x0, {
          "fit": A,
          "align": "center",
          "valign": "center"
        });
        if (x.length != C + 0x1) {
          B.addPage();
        }
      }
      B.end();
      B.pipe(ag("./pdf.pdf")).on("finish", function () {
        ae("./pdf");
        y(ad("./pdf.pdf"));
      });
    });
  };
  exports.isSpam = async function (w, x, y, z, A, B) {
    const {
      enabled: D,
      type: E
    } = await ah(w);
    return !!D && ai(w, x, z, A, B);
  };
  const ak = {
    messages: [],
    t: 0x0
  };
  exports.getGPTResponse = async function (z) {
    const B = new Date().getTime() / 0x3e8;
    if (B - 0x0 > 0x12c) {
      ak.messages = [];
    }
    ak.t = B;
    ak.messages.push({
      "role": "user",
      "content": z
    });
    if ("free" === aj.GPT) {
      const E = {
        messages: ak.messages
      };
      const G = await a8("https://levanter.onrender.com/api/gpt", {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(E)
      });
      const H = await G.json();
      if (0xc8 !== H.code) {
        throw new Error("Something Wrong!");
      }
      return H.content.trim();
    }
    const C = {
      messages: ak.messages,
      model: aj.MODEL,
      temperature: 0.5
    };
    const D = JSON.stringify(C);
    try {
      const J = await a8("https://api.openai.com/v1/chat/completions", {
        "method": "post",
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + aj.GPT
        },
        "body": D
      });
      const K = await J.json();
      if (K.error) {
        throw new Error(K.error.message);
      }
      const L = K.choices[0x0].message.content.trim();
      const M = {
        role: "assistant",
        content: L
      };
      ak.messages.push(M);
      return L;
    } catch (O) {
      throw new Error(O.message);
    }
  };
  exports.getDallEResponse = async function (y, z = "512x512") {
    if ("free" === aj.GPT) {
      const C = {
        prompt: y,
        type: "json"
      };
      const F = await a8("https://levanter.onrender.com/api/dallea", {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(C)
      });
      const G = await F.json();
      if (0xc8 !== G.code) {
        throw new Error("Something Wrong!");
      }
      return G.ul;
    }
    try {
      const H = {
        prompt: y,
        n: 0x1,
        size: z
      };
      const I = await a8("https://api.openai.com/v1/images/generations", {
        "method": "post",
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + aj.GPT
        },
        "body": JSON.stringify(H)
      });
      const J = await I.json();
      if (J.error) {
        throw new Error(J.error.message);
      }
      return J.data[0x0].url;
    } catch (L) {
      throw new Error(L.message);
    }
  };
  function an(w) {
    function z(A) {
      if (typeof A === "string") {
        return function (D) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + A / A).length !== 0x1 || A % 0x14 === 0x0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      z(++A);
    }
    try {
      if (w) {
        return z;
      } else {
        z(0x0);
      }
    } catch (B) {}
  }