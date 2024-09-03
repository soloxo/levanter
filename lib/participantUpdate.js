const a8 = function () {
    let D = true;
    return function (E, F) {
      const I = D ? function () {
        if (F) {
          const J = F.apply(E, arguments);
          F = null;
          return J;
        }
      } : function () {};
      D = false;
      return I;
    };
  }();
  const a9 = a8(this, function () {
    return a9.toString().search("(((.+)+)+)+$").toString().constructor(a9).search("(((.+)+)+)+$");
  });
  a9();
  const aa = function () {
    let D = true;
    return function (E, F) {
      const G = D ? function () {
        if (F) {
          const J = F.apply(E, arguments);
          F = null;
          return J;
        }
      } : function () {};
      D = false;
      return G;
    };
  }();
  (function () {
    aa(this, function () {
      const E = new RegExp("function *\\( *\\)");
      const F = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const G = ax("init");
      if (!E.test(G + "chain") || !F.test(G + "input")) {
        G("0");
      } else {
        ax();
      }
    })();
  })();
  const ab = function () {
    let D = true;
    return function (E, F) {
      const H = D ? function () {
        if (F) {
          const L = F.apply(E, arguments);
          F = null;
          return L;
        }
      } : function () {};
      D = false;
      return H;
    };
  }();
  const ac = ab(this, function () {
    let D;
    try {
      const G = Function("return (function() {}.constructor(\"return this\")( ));");
      D = G();
    } catch (I) {
      D = window;
    }
    const E = D.console = D.console || {};
    const F = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let K = 0x0; K < F.length; K++) {
      const M = ab.constructor.prototype.bind(ab);
      const N = F[K];
      const O = E[N] || M;
      M.__proto__ = ab.bind(ab);
      M.toString = O.toString.bind(O);
      E[N] = M;
    }
  });
  ac();
  const {
    isAdmin: ad,
    jidToNum: ae,
    logger: af
  } = require(".");
  const {
    getMessage: ag,
    getFake: ah,
    getPdm: ai
  } = require("./db");
  const {
    resetMsgs: aj
  } = require("./db/store");
  const {
    download: ak,
    getBuffer: al
  } = require("./fetch");
  const {
    genGreetings: am
  } = require("./greetings");
  const {
    prepareMessage: an
  } = require("./sendMessage");
  const {
    isUrl: ao,
    store: ap
  } = require("./utils");
  const aq = require("path");
  const ar = require("fs");
  const as = C => C.replace(/\+/g, '');
  const at = {};
  async function au(C, D) {
    const E = {
      "WWXDH": function (X, Y, Z) {
        return X(Y, Z);
      },
      "LlhYj": "welcome",
      "qbqdO": "error : ",
      "AZSXi": function (X, Y) {
        return X(Y);
      },
      "yDDWT": function (X, Y) {
        return X !== Y;
      },
      "qkAQn": "add",
      "GYXzT": function (X, Y) {
        return X === Y;
      },
      "dCGPg": "QguNf",
      "imTkQ": function (X, Y) {
        return X === Y;
      },
      "jRojf": "VVZZA",
      "aHlDK": "KqMXI",
      "BCONm": "remove",
      "rbNFa": "text",
      "gFQSx": function (X, Y) {
        return X(Y);
      },
      "kydXM": "http",
      "nIAXE": "&desc",
      "lvALR": "&name",
      "OQbHi": "&size",
      "zmWnP": function (X, Y) {
        return X in Y;
      },
      "thxxr": "PrtCC",
      "UgRvU": "yHVmJ",
      "owDOP": function (X, Y, Z) {
        return X(Y, Z);
      },
      "uTZia": function (X, Y) {
        return X + Y;
      },
      "lFMaH": "../media/welFolder/",
      "egpNO": function (X, Y) {
        return X + Y;
      },
      "QohIN": function (X, Y) {
        return X + Y;
      },
      "zVcpL": function (X, Y) {
        return X === Y;
      },
      "rqZep": "NjpPn",
      "Vnkyo": "GYVny",
      "yyfBT": "&pp",
      "Zpgtv": function (X, Y) {
        return X === Y;
      },
      "snMox": "QzDnq",
      "LYiaM": "EGQSd",
      "opnDK": "image",
      "CvZuP": function (X, Y) {
        return X(Y);
      },
      "blitl": function (X, Y) {
        return X != Y;
      },
      "qZUha": function (X, Y) {
        return X && Y;
      },
      "nqqyo": "mp4",
      "peBOD": "video",
      "oZTVO": function (X, Y, Z, a0, a1, a2) {
        return X(Y, Z, a0, a1, a2);
      },
      "VJWMN": function (X, Y, Z, a0, a1) {
        return X(Y, Z, a0, a1);
      }
    };
    const H = await E.WWXDH(ag, C.id, E.LlhYj);
    if (!H || !H.enabled) {
      return;
    }
    let I = await ap.fetchGroupMetadata(C.id);
    if (!I) {
      I = await ap.fetchGroupMetadata(C.id);
    }
    if (!I) {
      return af.log(E.qbqdO, C.id);
    }
    const {
      participants: J,
      desc: K,
      subject: L
    } = I;
    const N = C.participants[0x0];
    const O = await E.AZSXi(ah, C.id);
    if (E.yDDWT(E.qkAQn, C.action) && shift && (O?.["enabled"] || H?.["enabled"]) && O && E.GYXzT(true, O.enabled)) {
      if (E.GYXzT(E.dCGPg, E.dCGPg)) {
        let X = E.AZSXi(as, O.code);
        let Y = true;
        const Z = X.match(/![0-9]+/g)?.["map"](a1 => a1.slice(0x1))["join"]("|");
        if (Z) {
          Y = false;
          X = "^(" + Z + ")";
        }
        const a0 = new RegExp(X, "g");
        if (O.enabled && E.imTkQ(a0.test(N), Y)) {
          if (E.imTkQ(E.jRojf, E.aHlDK)) {
            if (G) {
              const a2 = K.apply(L, arguments);
              M = null;
              return a2;
            }
          } else {
            if (!(await E.WWXDH(ad, J, D.user.jid))) {
              return;
            }
            await D.groupParticipantsUpdate(C.id, [N], E.BCONm);
          }
        }
      } else {
        E = F;
      }
    }
    let P;
    let Q = greets.welfiles.find(a3 => a3.startsWith(C.id));
    let R = null;
    let S = E.rbNFa;
    let T = E.gFQSx(ao, H.message);
    const U = /&pp/.test(H.message);
    T = !(!T || !T.startsWith(E.kydXM)) && T;
    H.message = H.message.replace(E.nIAXE, K?.["toString"]() || '').replace(E.lvALR, L).replace(E.OQbHi, J.length);
    if (!U && E.GYXzT(undefined, Q) && T && !E.zmWnP(C.id, at)) {
      if (E.yDDWT(E.thxxr, E.UgRvU)) {
        const a3 = await E.owDOP(ak, T, aq.join(__dirname, E.uTZia(E.lFMaH, H.chat)));
        if (!a3.error) {
          H.message = H.message.replace(T, '');
          greets.welfiles.push(E.egpNO(E.uTZia(H.chat, "."), a3.ext));
          Q = E.QohIN(E.QohIN(H.chat, "."), a3.ext);
          S = a3.type;
        }
      } else {
        const a5 = F.apply(G, arguments);
        H = null;
        return a5;
      }
    }
    if (U) {
      if (E.zVcpL(E.rqZep, E.Vnkyo)) {
        return D;
      } else {
        H.message = H.message.replace(E.yyfBT, '');
        try {
          if (E.Zpgtv(E.snMox, E.LYiaM)) {
            const a7 = I ? function () {
              if (a7) {
                const ay = S.apply(T, arguments);
                U = null;
                return ay;
              }
            } : function () {};
            N = false;
            return a7;
          } else {
            P = await D.profilePictureUrl(C.participants[0x0], E.opnDK);
            const {
              buffer: a7
            } = await E.CvZuP(al, P);
            R = a7;
            S = E.opnDK;
          }
        } catch (ay) {}
      }
    } else if (E.blitl(null, Q)) {
      if (E.qZUha(Q, T)) {
        H.message = H.message.replace(T, '');
      }
      R = ar.readFileSync(aq.join(__dirname, "../media/welFolder/" + Q));
      S = Q.endsWith(E.nqqyo) ? E.peBOD : E.opnDK;
    }
    const V = await E.oZTVO(am, R, H.message, N, S, D);
    if (shift) {
      await E.VJWMN(an, C.id, {
        [V.type || E.rbNFa]: V.msg,
        ...V.options
      }, V.options, D);
    }
  }
  async function av(C, D) {
    const F = C.participants[0x0];
    aj(C.id, F == D.user.jid ? undefined : F);
    const G = await ag(C.id, "goodbye");
    if (!G || !G.enabled) {
      return;
    }
    let H;
    let I = greets.goodfiles.find(O => O.startsWith(C.id));
    let J = null;
    let K = "text";
    let L = ao(G.message);
    L = !(!L || !L.startsWith("http")) && L;
    const M = /&pp/.test(G.message);
    if (/&desc|&name|&size/.test(G.message)) {
      const {
        participants: O,
        subject: P,
        desc: Q
      } = await ap.fetchGroupMetadata(C.id);
      G.message = G.message.replace("&desc", Q?.["toString"]() || '').replace("&name", P).replace("&size", O.length);
    }
    if (!M && undefined === I && L && !(C.id in at)) {
      const S = await ak(L, aq.join(__dirname, "../media/goodFolder/" + G.chat));
      if (!S.error) {
        G.message = G.message.replace(L, '');
        greets.goodfiles.push(G.chat + "." + S.ext);
        I = G.chat + "." + S.ext;
        K = S.type;
      }
    }
    if (M) {
      G.message = G.message.replace("&pp", '');
      try {
        H = await D.profilePictureUrl(C.participants[0x0], "image");
        const {
          buffer: U
        } = await al(H);
        J = U;
        K = "image";
      } catch (W) {}
    } else if (null != I) {
      if (I && L) {
        G.message = G.message.replace(L, '');
      }
      J = ar.readFileSync(aq.join(__dirname, "../media/goodFolder/" + I));
      K = I.endsWith("mp4") ? "video" : "image";
    }
    const N = await am(J, G.message, C.participants[0x0], K, D);
    try {
      await an(C.id, {
        [N.type || "text"]: N.msg,
        ...N.options
      }, N.options, D);
    } catch (Z) {
      af.error(Z);
    }
  }
  async function aw(C, D) {
    if (!(await ai(C.id))) {
      return;
    }
    const {
      announce: F,
      participants: G
    } = await ap.fetchGroupMetadata(C.id);
    const [H] = G.filter(I => I.id == D.user.jid);
    if (!F || H.admin) {
      try {
        await an(C.id, {
          "text": "_@" + ae(C.from) + " " + ("demote" == C.action ? "demoted" : "promoted") + " @" + ae(C.participants[0x0]) + "_",
          "contextInfo": {
            "mentionedJid": [C.from, C.participants[0x0]]
          }
        }, {}, D);
      } catch (J) {
        af.error(J);
      }
    }
  }
  exports.participantUpdate = async (C, D) => {
    if (0x0 !== C.participants.length) {
      try {
        switch (C.action) {
          case "invite":
          case "add":
            await au(C, D);
            break;
          case "remove":
            await av(C, D);
            break;
          case "promote":
          case "demote":
            await aw(C, D);
        }
      } catch (G) {
        af.error(G);
      }
    }
  };
  function ax(C) {
    function E(F) {
      if (typeof F === "string") {
        return function (G) {}.constructor("while (true) {}").apply("counter");
      } else if (('' + F / F).length !== 0x1 || F % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
      E(++F);
    }
    try {
      if (C) {
        return E;
      } else {
        E(0x0);
      }
    } catch (F) {}
  }