const U = function () {
    let y = true;
    return function (z, A) {
      const C = y ? function () {
        if (A) {
          const F = A.apply(z, arguments);
          A = null;
          return F;
        }
      } : function () {};
      y = false;
      return C;
    };
  }();
  const V = U(this, function () {
    return V.toString().search("(((.+)+)+)+$").toString().constructor(V).search("(((.+)+)+)+$");
  });
  V();
  const W = function () {
    let A = true;
    return function (B, C) {
      const E = A ? function () {
        if (C) {
          const G = C.apply(B, arguments);
          C = null;
          return G;
        }
      } : function () {};
      A = false;
      return E;
    };
  }();
  (function () {
    W(this, function () {
      const z = new RegExp("function *\\( *\\)");
      const A = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const B = aa("init");
      if (!z.test(B + "chain") || !A.test(B + "input")) {
        B("0");
      } else {
        aa();
      }
    })();
  })();
  const X = function () {
    let y = true;
    return function (z, A) {
      const C = y ? function () {
        if (A) {
          const E = A.apply(z, arguments);
          A = null;
          return E;
        }
      } : function () {};
      y = false;
      return C;
    };
  }();
  const Y = X(this, function () {
    const y = function () {
      let C;
      try {
        C = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (E) {
        C = window;
      }
      return C;
    };
    const z = y();
    const A = z.console = z.console || {};
    const B = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let C = 0x0; C < B.length; C++) {
      const E = X.constructor.prototype.bind(X);
      const F = B[C];
      const G = A[F] || E;
      E.__proto__ = X.bind(X);
      E.toString = G.toString.bind(G);
      A[F] = E;
    }
  });
  Y();
  const {
    prepareWAMessageMedia: Z
  } = require("baileys");
  const {
    getMessage: a0,
    setMessage: a1
  } = require("./db");
  const {
    getBuffer: a2
  } = require("./fetch");
  const {
    isUrl: a3,
    genHydratedButtons: a4,
    store: a5
  } = require("./utils");
  const {
    iChecker: a7
  } = require("./test/test");
  const a8 = a7();
  const a9 = a8 == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
  if (a9) {
    const ac = x => (x.match(/#button\\(.|\n)*?#/gm) || []).map(y => y.split("\\")[0x1].replace(/#/, ''));
    exports.getButtons = ac;
    const ad = x => (x.match(/#ubutton\\(.|\n)*?#/gm) || []).map(y => y.split("\\")[0x1].replace("#", ''));
    exports.getUrlButtons = ad;
    const ae = x => (x.match(/#cbutton\\(.|\n)*?#/gm) || []).map(y => y.split("\\")[0x1].replace("#", ''));
    exports.getCallButtons = ae;
    const af = x => (x.match(/#num\\(.|\n)*?#/gm) || []).map(y => y.split("\\")[0x1].replace("#", ''));
    exports.getBunNums = af;
    const ag = x => (x.match(/#url\\(.|\n)*?#/gm) || []).map(y => y.split("\\")[0x1].replace("#", ''));
    exports.getBunUrls = ag;
    const ah = x => (x.match(/#header\\(.|\n)*?#/gm) || []).map(y => y.split("\\")[0x1].replace("#", ''));
    exports.getHeader = ah;
    const ai = async (D, E, F, G, H) => {
      let J = false;
      let K = '';
      let L = '';
      let N = {};
      const O = [];
      const P = {};
      const Q = {
        mentionedJid: [F]
      };
      if (/&mention/.test(E)) {
        P.contextInfo = Q;
        E = E.replace(/&mention/g, "@" + F.split("@")[0x0]);
      }
      const R = ac(E);
      const S = ah(E);
      const ab = ad(E);
      const al = ag(E);
      const am = ae(E);
      const an = af(E);
      if (ab.length > 0x0 && al.length > 0x0 || am.length > 0x0 && an.length > 0x0) {
        J = true;
        const ap = [];
        for (let aq = 0x0; aq < ab.length; aq++) {
          E = E.replace("#ubutton\\" + ab[aq] + "#", '').trim().replace("#url\\" + al[aq] + "#", '').trim();
          ap.push({
            "urlButton": {
              "text": ab[aq],
              "url": al[aq]
            }
          });
        }
        for (let ar = 0x0; ar < am.length; ar++) {
          E = E.replace("#cbutton\\" + am[ar] + "#", '').trim().replace("#num\\" + an[ar] + "#", '').trim();
          ap.push({
            "callButton": {
              "text": am[ar],
              "number": an[ar]
            }
          });
        }
        for (let as = 0x0; as < R.length; as++) {
          E = E.replace("#button\\" + R[as] + "#", '').trim();
          ap.push({
            "button": {
              "text": R[as],
              "id": R[as]
            }
          });
        }
        if (S.length > 0x0) {
          E = E.replace("#header\\" + S[0x0] + "#", '').trim();
        }
        L = await a4(ap, E, S);
        K = "template";
        if (/image|video/.test(G)) {
          const au = {
            upload: H.waUploadToServer
          };
          const av = await Z({
            [G]: D,
            "gifPlayback": "video" == G
          }, au);
          N = av.videoMessage || av.imageMessage;
          if (av.videoMessage) {
            L.videoMessage = N;
          } else {
            L.imageMessage = N;
          }
        }
      } else {
        if (R.length > 0x0 && S.length > 0x0) {
          K = "button";
          J = true;
          R.forEach(ax => O.push({
            "buttonId": ax,
            "buttonText": {
              "displayText": ax
            },
            "type": 0x1
          }));
          for (const ax of R) E = E.replace("#button\\" + ax + "#", '').trim();
          const aw = {
            "contentText": (E = E.replace("#header\\" + S[0x0] + "#", '').trim()).trim(),
            "footerText": S[0x0],
            "buttons": O,
            "headerType": "image" == G ? 0x4 : "video" == G ? 0x5 : 0x1
          };
          if (/image|video/.test(G)) {
            const ay = {
              upload: H.waUploadToServer
            };
            const az = await Z({
              [G]: D,
              "gifPlayback": "video" == G
            }, ay);
            N = az.videoMessage || az.imageMessage;
            if (az.videoMessage) {
              aw.videoMessage = N;
            } else {
              aw.imageMessage = N;
            }
          }
          L = aw;
        }
      }
      P.gifPlayback = "video" == G;
      if (!J && /image|video/.test(G)) {
        L = D;
        K = G;
        P.caption = E.trim();
      }
      if (!L) {
        L = E.trim();
      }
      return {
        "msg": L,
        "options": P,
        "type": K
      };
    };
    exports.genGreetings = ai;
    exports.greetingsPreview = async (x, y) => {
      const z = {
        "Qbgfu": function (E, F) {
          return E(F);
        },
        "AthlX": function (E, F) {
          return E + F;
        },
        "VDgCL": "return (function() ",
        "DkVKP": "{}.constructor(\"return this\")( )",
        "ZiSau": function (E, F, G) {
          return E(F, G);
        },
        "KthOC": function (E, F) {
          return E || F;
        },
        "ecFkf": "http",
        "UIPNa": function (E, F) {
          return E === F;
        },
        "dQLgt": "ujfyg",
        "ziwHN": "NBxBP",
        "SZqjM": "&desc",
        "GoXgF": "&name",
        "sLjfn": "&size",
        "kgCQt": function (E, F) {
          return E === F;
        },
        "NUcgw": "pwmMF",
        "mHULD": "&pp",
        "znfZa": "swYnp",
        "DrUQR": "JQFNF",
        "qwLAg": "image",
        "WrDpl": function (E, F) {
          return E(F);
        },
        "ymNZc": function (E, F, G, H, I) {
          return E(F, G, H, I);
        },
        "rPHFF": "text",
        "huJzd": "video",
        "msIHK": function (E, F, G, H, I, J) {
          return E(F, G, H, I, J);
        }
      };
      const A = await z.ZiSau(a0, x.jid, y);
      if (!A) {
        return false;
      }
      let B = z.Qbgfu(a3, A.message);
      const C = /&pp/.test(A.message);
      B = !(z.KthOC(C, !B) || !B.startsWith(z.ecFkf)) && B;
      if (/&desc|&name|&size/.test(A.message)) {
        if (z.UIPNa(z.dQLgt, z.ziwHN)) {
          if (B) {
            const F = F.apply(G, arguments);
            H = null;
            return F;
          }
        } else {
          const {
            participants: F,
            subject: G,
            desc: H
          } = await a5.fetchGroupMetadata(x.jid);
          A.message = A.message.replace(z.SZqjM, H?.["toString"]() || '').replace(z.GoXgF, G).replace(z.sLjfn, F.length);
        }
      }
      if (C) {
        if (z.kgCQt(z.NUcgw, z.NUcgw)) {
          A.message = A.message.replace(z.mHULD, '');
          try {
            if (z.kgCQt(z.znfZa, z.DrUQR)) {
              z = oVPDxi.Qbgfu(A, oVPDxi.AthlX(oVPDxi.AthlX(oVPDxi.VDgCL, oVPDxi.DkVKP), ");"))();
            } else {
              B = await x.client.profilePictureUrl(x.participant, z.qwLAg);
            }
          } catch (J) {}
        } else {
          const L = D ? function () {
            if (L) {
              const R = N.apply(O, arguments);
              P = null;
              return R;
            }
          } : function () {};
          I = false;
          return L;
        }
      }
      const D = B && (await z.WrDpl(a2, B));
      if (!y && D?.["buffer"]) {
        await z.ymNZc(a1, A.chat, D?.["type"] || z.rPHFF, A.message, A.enabled);
      }
      if ([z.huJzd, z.qwLAg].includes(D?.["type"])) {
        A.message = A.message.replace(B, '');
      }
      return await z.msIHK(ai, D?.["buffer"], A.message, x.participant, D?.["type"] || z.rPHFF, x.client);
    };
    exports.enableGreetings = async (x, y, z) => {
      const {
        message: B,
        type: C
      } = await a0(x, y);
      return await a1(x, C, B, "on" == z);
    };
    const aj = {
      welcome: "welfiles",
      goodbye: "goodfiles",
      banbye: "banfiles"
    };
    exports.clearGreetings = (y, z) => {
      const C = greets[aj[z]].find(D => D.startsWith(y)) || true;
      if (0x1 != C) {
        greets[aj[z]].splice([greets[aj[z]].indexOf(C)], 0x1);
      }
    };
  }
  function aa(x) {
    function A(B) {
      if (typeof B === "string") {
        return function (E) {}.constructor("while (true) {}").apply("counter");
      } else if (('' + B / B).length !== 0x1 || B % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
      A(++B);
    }
    try {
      if (x) {
        return A;
      } else {
        A(0x0);
      }
    } catch (B) {}
  }