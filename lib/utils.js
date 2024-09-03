const an = function () {
    let O = true;
    return function (P, Q) {
      const X = O ? function () {
        if (Q) {
          const Y = Q.apply(P, arguments);
          Q = null;
          return Y;
        }
      } : function () {};
      O = false;
      return X;
    };
  }();
  const ao = an(this, function () {
    return ao.toString().search("(((.+)+)+)+$").toString().constructor(ao).search("(((.+)+)+)+$");
  });
  ao();
  const ap = function () {
    let O = true;
    return function (P, Q) {
      const X = O ? function () {
        if (Q) {
          const Z = Q.apply(P, arguments);
          Q = null;
          return Z;
        }
      } : function () {};
      O = false;
      return X;
    };
  }();
  (function () {
    ap(this, function () {
      const O = new RegExp("function *\\( *\\)");
      const P = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const Q = aW("init");
      if (!O.test(Q + "chain") || !P.test(Q + "input")) {
        Q("0");
      } else {
        aW();
      }
    })();
  })();
  const aq = function () {
    let O = true;
    return function (P, Q) {
      const V = O ? function () {
        if (Q) {
          const Z = Q.apply(P, arguments);
          Q = null;
          return Z;
        }
      } : function () {};
      O = false;
      return V;
    };
  }();
  const ar = aq(this, function () {
    const O = function () {
      let X;
      try {
        X = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (Z) {
        X = window;
      }
      return X;
    };
    const P = O();
    const Q = P.console = P.console || {};
    const U = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let V = 0x0; V < U.length; V++) {
      const Y = aq.constructor.prototype.bind(aq);
      const Z = U[V];
      const a0 = Q[Z] || Y;
      Y.__proto__ = aq.bind(aq);
      Y.toString = a0.toString.bind(a0);
      Q[Z] = Y;
    }
  });
  ar();
  const as = require("axios")["default"];
  const {
    emptyDirSync: at
  } = require("fs-extra");
  const au = require("path");
  const av = require("translate-google-api");
  const aw = require("form-data");
  const ax = require("moment");
  const {
    generateWAMessageFromContent: ay,
    prepareWAMessageMedia: az,
    isJidGroup: aA,
    delay: aB,
    proto: aC
  } = require("baileys");
  const aD = require("fluent-ffmpeg");
  const aE = require("fs");
  const {
    getJson: aF,
    getBuffer: aG
  } = require("./fetch");
  const aI = require("../config");
  const {
    iChecker: aK
  } = require("./test/test");
  const aL = aK();
  const aM = aL == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
  const aN = require("./fonts");
  const aO = require("events");
  const aP = new aO();
  exports.levanter = aP;
  const aQ = {};
  async function aR(N) {
    if (!aA(N)) {
      return "0";
    }
    const P = await aQ.fetchGroupMetadata(N);
    return P?.["ephemeralDuration"];
  }
  let aU = false;
  const aV = {};
  exports.expiration = aV;
  if (aM) {
    const aY = require("youtubei.js");
    const {
      setFake: aZ,
      getFake: b0
    } = require("./db");
    const {
      genThumbnail: b1,
      extractVideoThumb: b2
    } = require("./constant");
    exports.parsedJid = N => N.match(/[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g) || [];
    const b3 = async N => {
      const P = new aw();
      P.append("image", aE.createReadStream(N));
      const Q = {
        "method": "post",
        "url": "https://api.imgur.com/3/upload",
        "headers": {
          "Authorization": "Client-ID 224becfa2d16b53",
          ...P.getHeaders()
        },
        "data": P
      };
      try {
        const V = await as(Q);
        const X = V?.["data"]?.["data"]?.["link"];
        aE.unlink(N, () => {});
        return X;
      } catch (Y) {
        return Y?.["response"]?.["statusText"];
      }
    };
    (async () => {
      aU = true;
    })("pRIZohFFOMo");
    const b4 = async Q => {
      const X = {
        "gif": "image/gif",
        jpeg: "image/jpeg",
        "jpg": "image/jpg",
        "png": "image/png",
        "mp4": "video/mp4"
      };
      const Z = Q.split(".").pop().toLowerCase();
      if (!(Z in X)) {
        throw new Error("Error: " + Z + "-file cannot be processed");
      }
      const a0 = X[Z];
      const a1 = aE.createReadStream(Q);
      try {
        const a2 = new aw();
        const a3 = {
          contentType: a0,
          filename: Q
        };
        a2.append("file", a1, a3);
        const a4 = await as.post("https://telegra.ph/upload", a2, {
          "headers": {
            ...a2.getHeaders()
          }
        });
        return "https://telegra.ph" + a4.data[0x0].src;
      } catch (a6) {
        throw new Error("Error uploading file: " + a6.message);
      }
    };
    exports.getUrl = async (N, O = true) => {
      if (true === O) {
        const U = new aw();
        U.append("file", aE.createReadStream(N));
        const V = {
          "method": "post",
          "url": "https://levanter.onrender.com/image/",
          "headers": {
            ...U.getHeaders()
          },
          "data": U
        };
        const {
          data: X
        } = await as(V)["catch"](Y => {
          console.log(Y);
        });
        aE.unlink(N, () => {});
        return X ? "https://levanter.onrender.com/get/" + X?.["url"] : undefined;
      }
      return "imgur" === O ? b3(N) : b4(N);
    };
    const b5 = async () => {
      let O = 0xa;
      return await (async () => {
        try {
          let {
            currentVersion: Q
          } = await aF("https://web.whatsapp.com/check-update?version=2.2228.6&platform=web");
          O--;
          return !Q && O > 0x0 ? await b5() : (Q = Q.split("."), [+Q[0x0], +Q[0x1], +Q[0x2]]);
        } catch (V) {}
      })();
    };
    exports.waWebVersion = b5;
    let b6;
    let b7 = '';
    try {
      b7 = ("null" == aI.HANDLERS ? '' : aI.HANDLERS.startsWith("^") ? aI.HANDLERS.match(/\[(\W*)\]/)[0x1][0x0] : aI.HANDLERS.replace(/\[/g, '').replace(/\]/g, '')).trim();
    } catch (be) {
      b7 = aI.HANDLERS;
    }
    exports.PREFIX = b7;
    exports.genButtonMessage = async (P, Q, U, V, X) => {
      const Z = [];
      for (const {
        id: a2,
        text: a3
      } of P) Z.push({
        "buttonId": '' + b7 + a2,
        "buttonText": {
          "displayText": a3
        },
        "type": 0x1
      });
      const a0 = {
        contentText: Q,
        footerText: U,
        buttons: Z,
        headerType: 0x1
      };
      if (V?.["location"] || V?.["document"]) {
        const a5 = V.location ? "locationMessage" : "documentMessage";
        a0.headerType = "locationMessage" == a5 ? 0x6 : 0x3;
        V = V.location || V.document;
        a0[a5] = "object" == typeof V ? V : {
          "jpegThumbnail": await b1(Buffer.isBuffer(V) ? V : (await aG(V, /ytimg/.test(V))).buffer)
        };
      } else {
        if (V) {
          const a6 = {};
          const a7 = "image" in V ? "image" : "video";
          a0.headerType = "image" == a7 ? 0x4 : 0x5;
          if ("object" != typeof V[a7] || Buffer.isBuffer(V[a7])) {
            if (!Buffer.isBuffer(V[a7])) {
              const {
                buffer: ac
              } = await aG(V[a7], /ytimg/.test(V));
              V[a7] = ac;
            }
            a6[a7] = V[a7];
            a6.jpegThumbnail = "image" == a7 ? await b1(a6[a7]) : (await b2(a6[a7])).thumbnail;
            const a9 = {
              upload: X.client.waUploadToServer
            };
            const aa = await az(a6, a9);
            if (aa.imageMessage) {
              a0.imageMessage = aa.imageMessage;
            } else {
              a0.videoMessage = aa.videoMessage;
            }
          } else {
            a0["image" == a7 ? "imageMessage" : "videoMessage"] = V[a7];
          }
        }
      }
      return a0;
    };
    const b8 = async O => {
      if (!(b6 && !O)) {
        b6 = await aY.Innertube.create({
          "visitor_data": "Cgs3NXRxTDFWejZlRSjuz-K1BjIKCgJERRIEEgAgDA%3D%3D",
          "po_token": "MnQ5QS8Kdy87_jl5qSaFgMS-bSJC_LjeyL3ykiyh0QmPl8CWgj6T5et_EHglwwVSKjn0_uoPiT22AyvqJq4szILf-UY9JoEuLoWDB_qzviZ15EXH3JI6op2yAW_iy3EhDhPI_0koZ-_XCEvEdR-CXulrz-9M2g==",
          "cache": new aY.UniversalCache(false),
          "generate_session_locally": true
        });
      }
    };
    const b9 = async (V, X = false, Y) => {
      if (aU) {
        let a2 = "https://right-annmaria-lev-8a3a4814.koyeb.app/yt/search?query=" + V + "&type=" + (Y ? "song" : "video");
        if (X) {
          a2 += "&id=1";
        }
        try {
          return (await as.get(a2)).data.result;
        } catch (a4) {}
      }
      let a0;
      await b8();
      const a1 = [];
      if (X) {
        const a6 = await b6.getInfo(V);
        const a7 = a6.primary_info;
        const a8 = a6.secondary_info;
        const a9 = {
          url: ''
        };
        const aa = {
          id: V,
          title: a7.title.text,
          view: a7.view_count.text,
          published: a7.published.text,
          description: a8.description.text || '',
          thumbnail: a6.basic_info.thumbnail?.[0x0] || a9,
          duration: a6.basic_info.duration,
          author: a6.basic_info.author
        };
        return [aa];
      }
      if (0x1 !== Y) {
        const ad = {
          type: "video"
        };
        a0 = await b6.search(V, ad);
        const ae = a0.results;
        for (const af of ae) {
          if ("DidYouMean" === af.type) {
            return await b9(af.corrected_query.text, X, Y);
          }
          if (af?.["published"]?.["text"]) {
            const ai = {
              id: af.id,
              title: af.title.text,
              thumbnail: af?.["thumbnails"][0x0]?.["url"] || '',
              author: af.author.name,
              published: af.published.text || '',
              view: af.short_view_count.text,
              duration: af.duration.text,
              seconds: af.duration.seconds
            };
            a1.push(ai);
          }
        }
      } else {
        const al = {
          type: "song"
        };
        a0 = await b6.music.search(V, al);
        const [am] = a0.contents;
        for (const aX of am.contents) {
          if ("DidYouMean" === aX.type) {
            return await search(aX.corrected_query.text, song, id);
          }
          if (aX.title) {
            const bf = {
              "id": aX.id,
              "title": aX.title,
              "thumbnail": aX?.["thumbnail"]?.["contents"][0x0]?.["url"] || '',
              "album": aX?.["album"]?.["name"] || '',
              "duration": aX.duration.text,
              "seconds": aX.duration.seconds,
              "author": aX?.["artists"]?.["map"](bg => bg.name)["join"](", ") || ''
            };
            a1.push(bf);
          }
        }
      }
      return a1;
    };
    exports.yts = b9;
    exports.ytJsong = async P => {
      if (aU) {
        try {
          const V = {
            responseType: "arraybuffer"
          };
          const X = await as.get("https://right-annmaria-lev-8a3a4814.koyeb.app/yt/download?id=" + P + "&type=song", V);
          const Y = au.join(__dirname, "../" + P + ".m4a");
          aE.writeFileSync(Y, X.data);
          return P;
        } catch (Z) {}
      }
      try {
        await b8();
        const a1 = {
          type: "audio",
          quality: "best",
          format: "mp4"
        };
        const a2 = await b6.download(P, a1);
        const a3 = au.join(__dirname, "../" + P + ".m4a");
        const a4 = aE.createWriteStream(a3);
        for await (const a5 of aY.Utils.streamToIterable(a2)) a4.write(a5);
        return P;
      } catch (a6) {
        aU = true;
        console.log(a6);
        await b8(0x1);
      }
    };
    exports.genListMessage = (Q, U, V, X = '', Y = String.fromCharCode(0x200e)) => {
      const a1 = [];
      for (const {
        id: a4,
        text: a5,
        desc: a6
      } of Q) a1.push({
        "title": a5,
        "rowId": '' + b7 + a4,
        "description": a6 || ''
      });
      const a2 = {
        title: X,
        rows: a1
      };
      const a3 = {
        title: U,
        buttonText: V,
        description: Y,
        sections: [a2],
        listType: 0x1
      };
      return a3;
    };
    exports.video = async O => {
      const P = {
        "wTXyH": function (Q, U) {
          return Q !== U;
        },
        "dWfJI": "bGXqb",
        "oXFWX": function (Q, U) {
          return Q(U);
        },
        "QEAoW": "while (true) {}",
        "CamAp": "counter",
        "Arsab": "oiCBQ",
        "joOGy": "QFwTg",
        "QXUrR": "error",
        "ZLzsn": "end",
        "maSnn": function (Q, U) {
          return Q === U;
        },
        "uWlTG": "eCMwN",
        "lTATQ": "pcNyI",
        "DpBIe": "qWnaO",
        "JGGpa": function (Q) {
          return Q();
        },
        "BweuL": "mp4",
        "ubyTu": "bestefficiency",
        "ucuLB": "video+audio",
        "uUWhx": function (Q, U) {
          return Q === U;
        },
        "hKUWy": "usYnD",
        "MbBxp": "eNdTy",
        "Lxvkc": "arraybuffer"
      };
      if (aU) {
        try {
          if (P.uUWhx(P.hKUWy, P.MbBxp)) {
            const U = Q.apply(U, arguments);
            V = null;
            return U;
          } else {
            const U = {
              responseType: P.Lxvkc
            };
            const V = await as.get("https://right-annmaria-lev-8a3a4814.koyeb.app/yt/download?id=" + O + "&type=video", U);
            const X = au.join(__dirname, "../" + O + ".mp4");
            aE.writeFileSync(X, V.data);
            const Y = au.join(__dirname, "../" + O + "_out.mp4");
            return new Promise((Z, a0) => {
              const a1 = {
                "uiyhq": function (a2, a3) {
                  return P.wTXyH(a2, a3);
                },
                "ORpiJ": P.dWfJI,
                "yCYXo": function (a2, a3) {
                  return P.oXFWX(a2, a3);
                },
                "VnVCb": P.QEAoW,
                "KiWWy": P.CamAp
              };
              if (P.wTXyH(P.Arsab, P.joOGy)) {
                P.oXFWX(aD, X).save(Y).on(P.QXUrR, a2 => a0(new Error(a2.message))).on(P.ZLzsn, () => {
                  if (P.wTXyH(a1.ORpiJ, a1.ORpiJ)) {
                    P = Q;
                  } else {
                    const a3 = aE.readFileSync(Y);
                    P.oXFWX(Z, a3);
                    aE.rmSync(X);
                    aE.rmSync(Y);
                  }
                });
              } else {
                return function (a3) {}.constructor(GUrpkY.VnVCb).apply(GUrpkY.KiWWy);
              }
            });
          }
        } catch (Z) {}
      }
      return new Promise(async (a0, a1) => {
        const a2 = {
          "DSgVi": function (a3, a4) {
            return P.maSnn(a3, a4);
          },
          "tHhMw": P.uWlTG,
          "clhZZ": function (a3, a4) {
            return P.oXFWX(a3, a4);
          }
        };
        if (P.maSnn(P.lTATQ, P.DpBIe)) {
          const a4 = X ? function () {
            if (a4) {
              const ab = a7.apply(a8, arguments);
              a9 = null;
              return ab;
            }
          } : function () {};
          a2 = false;
          return a4;
        } else {
          await P.JGGpa(b8);
          const a4 = {
            format: P.BweuL,
            quality: P.ubyTu,
            type: P.ucuLB
          };
          const a5 = await b6.download(O, a4);
          const a6 = au.join(__dirname, "../" + O + ".mp4");
          const a7 = au.join(__dirname, "../" + O + "_out.mp4");
          const a8 = aE.createWriteStream(a6);
          for await (const a9 of aY.Utils.streamToIterable(a5)) a8.write(a9);
          P.oXFWX(aD, a6).save(a7).on(P.QXUrR, aa => a1(new Error(aa.message))).on(P.ZLzsn, () => {
            if (a2.DSgVi(a2.tHhMw, a2.tHhMw)) {
              const aa = aE.readFileSync(a7);
              a2.clhZZ(a0, aa);
              aE.rmSync(a6);
              aE.rmSync(a7);
            } else {
              const ac = P.match(Q);
              return !!ac && ac[0x0];
            }
          });
        }
      });
    };
    exports.forwardOrBroadCast = async (N, O, P = {}) => {
      let U = O.reply_message?.["message"]?.["message"] || O.message?.["message"];
      if (!U) {
        return;
      }
      U = aC.Message.decode(aC.Message.encode(U).finish());
      if ("quoted" in P && !P.quoted) {
        P.quoted = O.message;
      }
      let V = Object.keys(U)[0x0];
      if ("conversation" === V) {
        U.extendedTextMessage = {
          "text": U[V]
        };
        delete U.conversation;
        V = "extendedTextMessage";
      }
      if ("conversation" === V) {
        U.extendedTextMessage = {
          "text": U[V]
        };
        delete U.conversation;
        V = "extendedTextMessage";
      } else {
        U[V].contextInfo = {};
      }
      if (0x0 == P.viewOnce) {
        delete U[V]?.["viewOnce"];
      }
      Object.assign(U[V], P);
      P.ephemeralExpiration = aV[N] ?? (await aR(N));
      const X = ay(N, U, P);
      if ("audioMessage" == V) {
        if (P?.["ptt"]) {
          if (X.message.ephemeralMessage) {
            X.message.ephemeralMessage.message[V].ptt = P.ptt;
          } else {
            X.message[V].ptt = P.ptt;
          }
        }
        if (P?.["duration"]) {
          if (X.message.ephemeralMessage) {
            X.message.ephemeralMessage.message[V].seconds = P.duration;
          } else {
            X.message[V].seconds = P.duration;
          }
        }
      }
      if (P.linkPreview) {
        if (!P?.["contextInfo"]) {
          P.contextInfo = {};
        }
        P.contextInfo.externalAdReply = {
          ...P.linkPreview,
          "title": P?.["linkPreview"]["head"]
        };
        delete P.linkPreview;
      }
      if (P.contextInfo) {
        if (X.message.ephemeralMessage) {
          X.message.ephemeralMessage.message[V].contextInfo = Object.assign(X.message.ephemeralMessage.message[V].contextInfo, {
            ...P.contextInfo
          });
        } else {
          X.message[V].contextInfo = Object.assign(X.message[V].contextInfo, {
            ...P.contextInfo
          });
        }
      }
      try {
        await O.client.relayMessage(N, X.message, {
          "messageId": X.key.id,
          "additionalAttributes": {}
        });
      } catch (Z) {
        throw Z;
      }
      await aB(0x676);
      return X;
    };
    exports.ctt = N => N.toString().replace(N.toString().match(/(\W*)([A-Za-z0-9_ğüşiö ç]*)/)[0x2], '').match(/(\W*)([A-Za-z0-9ğüşiö ç]*)/)[0x2].trim();
    const ba = (N, O) => " ".repeat(('' + O).length - ('' + N).length);
    exports.addSpace = ba;
    const bb = (O, P) => {
      let V = '';
      O.split('').forEach(X => {
        let Y = aN[P][X];
        V += null == Y ? X : Y;
      });
      return V;
    };
    exports.textToStylist = bb;
    exports.stylishTextGen = N => {
      let P = 0x1;
      let Q = '';
      for (let U in aN) {
        Q += P + " ".repeat("53".length - ('' + P).length) + " ";
        Q += bb(N, U);
        Q += "\n";
        P++;
      }
      return Q;
    };
    exports.formatTime = (N, O) => O ? ax(N).format("hh:mm a D-M-YYYY") : ax.unix(N).format("hh:mm a D-M-YYYY");
    exports.clearFiles = () => at(au.join(__dirname, "../media/mention/"));
    exports.isUrl = (N = "null") => {
      const O = N.match(/((http|https):\/\/)?(www\.)?([a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/);
      return !!O && O[0x0];
    };
    const bc = N => N.split(",").filter(O => '' != O).join(",");
    exports.rmComma = bc;
    exports.enableAntiFake = async (N, O) => {
      if ("on" != O && "off" != O) {
        const {
          enabled: Q
        } = await b0(N);
        O = bc(O.trim());
        await aZ(N, Q || true, "^(" + O.replace(/,/g, "|") + ")");
        const U = O.split(",");
        const V = U.filter(X => X.trim().startsWith("!"));
        return {
          "allow": V.map(X => X.replace("!", '')),
          "notallow": U.filter(X => !V.includes(X))
        };
      }
      await aZ(N, "on" == O);
    };
    exports.antiList = async (N, O) => {
      if ("fake" === O) {
        const {
          code: Q
        } = await b0(N);
        return !!Q && Q.replace("\\b", '').replace("\\b", '').replace("(", '').replace(")", '').replace("^", '').split("|");
      }
    };
    exports.parseGistUrls = N => {
      const O = N.match(/https:\/\/gist.(githubusercontent|github).com\/([-_.0-9A-Za-z]{0,37})\/([-_0-9A-Za-z]{32})/gm);
      return !!O && O.filter(P => !P.includes("mask-sir")).map(P => P + "/raw");
    };
    exports.pluginsList = N => N.match(/pattern: ["'](.*)["'],/gm).map(O => O.match(/["'](.*)["'],/gm)[0x0].split(" ")[0x0].replace(/'|"/g, ''));
    exports.getQuote = async () => {
      try {
        return (await aF("http://levanter.onrender.com/quote")["catch"](() => {})).content || '';
      } catch (O) {
        return '';
      }
    };
    exports.trt = async (N, O, P) => (await av(N, {
      "tld": "co.in",
      "to": O,
      "from": P
    }))?.["join"]();
    exports.secondsToHms = N => {
      N = Number(N);
      const P = Math.floor(N / 0x15180);
      const Q = Math.floor(N % 0x15180 / 0xe10);
      const U = Math.floor(N % 0xe10 / 0x3c);
      const V = Math.floor(N % 0x3c);
      return ((P > 0x0 ? P + (0x1 == P ? " day " : " days ") : '') + (Q > 0x0 ? Q + (0x1 == Q ? " hour " : " hours ") : '') + (U > 0x0 ? U + (0x1 == U ? " minute " : " minutes ") : '') + (V && !P > 0x0 ? V + (0x1 == V ? " second" : " seconds") : '')).trim();
    };
    exports.genHydratedButtons = async (P, Q, U, V, X) => {
      let Z = 0x1;
      const a0 = [];
      for (const a3 of P) {
        if (a3.urlButton) {
          a0.push({
            "index": Z,
            "urlButton": {
              "displayText": a3.urlButton.text,
              "url": a3.urlButton.url
            }
          });
          Z++;
        }
        if (a3.button) {
          a0.push({
            "index": Z,
            "quickReplyButton": {
              "displayText": a3.button.text,
              "id": a3.button.text != a3.button.id ? '' + b7 + a3.button.id : a3.button.id
            }
          });
          Z++;
        }
        if (a3.callButton) {
          a0.push({
            "index": Z,
            "callButton": {
              "displayText": a3.callButton.text,
              "phoneNumber": a3.callButton.number
            }
          });
          Z++;
        }
      }
      const a1 = {
        hydratedButtons: a0,
        hydratedContentText: Q,
        hydratedFooterText: U,
        headerType: 0x1
      };
      if (X?.["location"] || X?.["document"]) {
        const a4 = X.location ? "locationMessage" : "documentMessage";
        a1.headerType = "locationMessage" == a4 ? 0x6 : 0x3;
        X = X.location || X.document;
        a1[a4] = "object" == typeof X ? X : {
          "jpegThumbnail": await b1(Buffer.isBuffer(X) ? X : (await aG(X), /ytimg/.test(X)).buffer)
        };
      } else {
        if (X) {
          const a5 = {};
          const a6 = "image" in X ? "image" : "video";
          a1.headerType = "image" == a6 ? 0x4 : 0x5;
          if ("object" != typeof X[a6] || Buffer.isBuffer(X[a6])) {
            if (!Buffer.isBuffer(X[a6])) {
              const {
                buffer: a9
              } = await aG(X[a6], /ytimg/.test(X));
              X[a6] = a9;
            }
            a5[a6] = X[a6];
            a5.jpegThumbnail = "image" == a6 ? await b1(a5[a6]) : (await b2(a5[a6])).thumbnail;
            const a7 = {
              upload: V.client.waUploadToServer
            };
            const a8 = await az(a5, a7);
            if (a8.imageMessage) {
              a1.imageMessage = a8.imageMessage;
            } else {
              a1.videoMessage = a8.videoMessage;
            }
          } else {
            a1["image" == a6 ? "imageMessage" : "videoMessage"] = X[a6];
          }
        }
      }
      return a1;
    };
  }
  exports.getFloor = N => Math.floor(N);
  exports.store = aQ;
  function aW(N) {
    function P(Q) {
      if (typeof Q === "string") {
        return function (U) {}.constructor("while (true) {}").apply("counter");
      } else if (('' + Q / Q).length !== 0x1 || Q % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
      P(++Q);
    }
    try {
      if (N) {
        return P;
      } else {
        P(0x0);
      }
    } catch (Q) {}
  }