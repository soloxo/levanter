const ah = function () {
    let H = true;
    return function (I, J) {
      const M = H ? function () {
        if (J) {
          const O = J.apply(I, arguments);
          J = null;
          return O;
        }
      } : function () {};
      H = false;
      return M;
    };
  }();
  const ai = ah(this, function () {
    return ai.toString().search("(((.+)+)+)+$").toString().constructor(ai).search("(((.+)+)+)+$");
  });
  ai();
  const aj = function () {
    let J = true;
    return function (K, L) {
      const N = J ? function () {
        if (L) {
          const P = L.apply(K, arguments);
          L = null;
          return P;
        }
      } : function () {};
      J = false;
      return N;
    };
  }();
  (function () {
    aj(this, function () {
      const I = new RegExp("function *\\( *\\)");
      const J = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const K = aC("init");
      if (!I.test(K + "chain") || !J.test(K + "input")) {
        K("0");
      } else {
        aC();
      }
    })();
  })();
  const ak = function () {
    const H = {
      aBYEj: function (K, L) {
        return K + L;
      },
      Wncfv: "debu",
      ozMdJ: "gger",
      ktbbt: "stateObject",
      KfIqi: function (K, L) {
        return K !== L;
      },
      xWDjg: "reXSr",
      jcsjM: "LPSSF",
      tFFpy: "OfQgN",
      PcPwu: "oiMyt",
      VXqzl: "filename[^;=\\n]*=(([\"']).*?\\2|[^;\\n]*)",
      fzUoG: function (K, L) {
        return K != L;
      },
      tyufY: function (K, L) {
        return K === L;
      },
      BJGSj: "yCKQp"
    };
    const I = H;
    let J = true;
    return function (K, L) {
      const M = {
        "tgppY": I.VXqzl,
        "uefDy": function (N, O) {
          return I.fzUoG(N, O);
        }
      };
      if (I.tyufY(I.BJGSj, I.BJGSj)) {
        const N = J ? function () {
          const O = {
            "Xhxqw": function (P, Q) {
              return I.aBYEj(P, Q);
            },
            "tBHpn": I.Wncfv,
            "PsVUA": I.ozMdJ,
            "txnnG": I.ktbbt
          };
          if (I.KfIqi(I.xWDjg, I.jcsjM)) {
            if (L) {
              if (I.KfIqi(I.tFFpy, I.PcPwu)) {
                const P = L.apply(K, arguments);
                L = null;
                return P;
              } else {
                (function () {
                  return false;
                }).constructor(I.aBYEj(O.tBHpn, O.PsVUA)).apply(O.txnnG);
              }
            }
          } else {
            const S = new J(M.tgppY).exec(K);
            return I.fzUoG(null, S) && S[0x1] ? S[0x1].replace(/['"]/g, '') : L;
          }
        } : function () {};
        J = false;
        return N;
      } else {
        I = J;
      }
    };
  }();
  const al = ak(this, function () {
    let H;
    try {
      const K = Function("return (function() {}.constructor(\"return this\")( ));");
      H = K();
    } catch (M) {
      H = window;
    }
    const I = H.console = H.console || {};
    const J = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let O = 0x0; O < J.length; O++) {
      const Q = ak.constructor.prototype.bind(ak);
      const R = J[O];
      const S = I[R] || Q;
      Q.__proto__ = ak.bind(ak);
      Q.toString = S.toString.bind(S);
      I[R] = Q;
    }
  });
  al();
  const am = {
    "mp4": "video/mp4",
    "mp3": "audio/mpeg",
    "png": "image/png",
    "pdf": "application/pdf",
    "zip": "application/zip",
    "apk": "application/vnd.android.package-archive",
    "jpg": "image/jpeg",
    jpeg: "image/jpeg",
    webp: "image/webp"
  };
  const {
    default: an
  } = require("axios");
  const {
    writeFile: ao,
    readFileSync: ap,
    writeFileSync: aq,
    createWriteStream: ar
  } = require("fs-extra");
  const as = require("path");
  const at = require("../config");
  const au = isNaN(at.MAX_UPLOAD) ? 0xe6 : at.MAX_UPLOAD;
  const av = Number(au > 0x7ce ? 0x7ce : au);
  const {
    iChecker: ay
  } = require("./test/test");
  const az = ay();
  const aA = az == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
  function aB(H) {
    try {
      new URL(H);
    } catch (L) {
      throw new Error("invalid url: " + H);
    }
  }
  if (aA) {
    const aE = require("https");
    const aF = require("http");
    const aG = async G => {
      const {
        fileTypeFromBuffer: I
      } = await import("file-type");
      const J = await I(G);
      return J?.["mime"];
    };
    const aH = async G => {
      const H = G.split(".").pop();
      return am[H];
    };
    const aI = H => {
      const K = new RegExp("filename[^;=\\n]*=(([\"']).*?\\2|[^;\\n]*)").exec(H);
      return null != K && K[0x1] ? K[0x1].replace(/['"]/g, '') : H;
    };
    const aJ = new Set();
    const aK = G => {
      let H = new URL(G);
      return as.basename(H.pathname);
    };
    function aL(H) {
      return new Promise((K, L) => {
        const O = [];
        H.on("data", P => O.push(P));
        H.on("end", () => K(Buffer.concat(O)));
        H.on("error", P => L(P));
      });
    }
    exports.nameFromUrl = aK;
    const aM = {
      "User-Agent": "APKUpdater-v1",
      Authorization: "Basic YXBpLWFwa3VwZGF0ZXI6cm01cmNmcnVVakt5MDRzTXB5TVBKWFc4",
      "Content-Type": "application/json"
    };
    const aN = {
      headers: aM
    };
    const aP = async (I, J = false, K, L) => {
      aB(I);
      try {
        const N = aK(I);
        if (J && N && aJ.has(N)) {
          const a0 = ap(N);
          const a1 = await aG(a0);
          return {
            "buffer": a0,
            "name": N,
            "mimetype": a1,
            "type": a1?.["split"]("/")[0x0]
          };
        }
        const O = {
          rejectUnauthorized: false,
          keepAlive: true
        };
        const P = {
          rejectUnauthorized: false,
          keepAlive: true
        };
        const Q = I.includes("apkmirror") ? aN : {
          "headers": {
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Linux\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
          }
        };
        const R = {
          "method": "get",
          "url": I,
          "responseType": "stream",
          "agent": "http:" == new URL(I).protocol ? new aF.Agent(O) : new aE.Agent(P),
          "rejectUnauthorized": false,
          ...Q
        };
        const S = await an(R);
        if (0xc8 != S.status) {
          return {
            "error": "error"
          };
        }
        const V = (S.headers["content-length"] / 0xf4240).toFixed(0x2);
        if (V > av) {
          return {
            "buffer": false,
            "size": V
          };
        }
        let W = S.headers["content-type"]?.["split"](";")[0x0];
        const X = S.headers["content-disposition"];
        const Y = X ? aI(X) : aK(S.request.res.responseUrl);
        if (Y && W && V > 0x50) {
          return {
            "data": true,
            "buffer": S.data,
            "name": Y,
            "size": V,
            "mimetype": W,
            "type": W?.["split"]("/")[0x0]
          };
        }
        const Z = await aL(S.data);
        if (!(!/octet/.test(W) && W)) {
          W = await aG(Z);
        }
        if (/application/.test(W)) {
          const a3 = await aH(Y);
          if (a3) {
            W = a3;
          }
        }
        if (J && Y && Y.split(".").length > 0x1) {
          ao(Y, Z, () => {
            aJ.add(Y);
          });
        }
        if (K) {
          process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0x1;
        }
        return {
          "type": W?.["split"]("/")[0x0],
          "size": V,
          "name": Y,
          "buffer": Z,
          "mimetype": W,
          "data": false
        };
      } catch (a6) {
        return a6.message && a6.message.includes("unable to verify") && !K ? (process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0x0, await aP(I, J, true)) : !L && a6.request && (I.includes("cdninstagram") || I.includes("fbcdn")) ? (I = "https://scontent.cdninstagram.com" + a6.request._options.path, await aP(I, J, false, true)) : I.startsWith("https://levanter.onrender.com/url") || I.includes("levanter.onrender") ? (I.startsWith("https://levanter.onrender.com/url") && (I = I.replace("https://levanter.onrender.com/url?url=", '')), {
          "error": "```status : " + (a6?.["response"]?.["status"] || a6) + "\nreason : " + (a6?.["response"]?.["statusText"] || a6.message) + "\nurl : " + I + "```"
        }) : await aP("https://levanter.onrender.com/url?url=" + I);
      }
    };
    exports.getBuffer = aP;
    exports.getJson = async G => {
      try {
        return (await an({
          "method": "get",
          "url": G,
          "responseType": "json",
          "timeout": 0x7d00,
          "rejectUnauthorized": false
        })).data;
      } catch (J) {
        throw new Error(J);
      }
    };
    exports.download = async (I, J) => {
      const L = {
        error: true,
        "ext": '',
        type: ''
      };
      if (aJ.has(I)) {
        return L;
      }
      const {
        buffer: M,
        name: N,
        type: O
      } = await aP(I);
      const P = {
        error: true,
        "ext": '',
        type: ''
      };
      if (0x0 == M || "video" != O && "image" != O) {
        aJ.add(I);
        console.log("Downloading %s Failed", I);
        return P;
      }
      const Q = J + "." + N.split(".").pop();
      aq(Q, M);
      return {
        "ext": N.split(".").pop(),
        "type": O,
        "error": false
      };
    };
  }
  function aC(G) {
    function I(J) {
      if (typeof J === "string") {
        return function (L) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + J / J).length !== 0x1 || J % 0x14 === 0x0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      I(++J);
    }
    try {
      if (G) {
        return I;
      } else {
        I(0x0);
      }
    } catch (M) {}
  }