const bY = function () {
    let a9 = true;
    return function (aa, ab) {
      const ac = a9 ? function () {
        if (ab) {
          const ah = ab.apply(aa, arguments);
          ab = null;
          return ah;
        }
      } : function () {};
      a9 = false;
      return ac;
    };
  }();
  const bZ = bY(this, function () {
    return bZ.toString().search("(((.+)+)+)+$").toString().constructor(bZ).search("(((.+)+)+)+$");
  });
  bZ();
  const c0 = function () {
    let ab = true;
    return function (ac, ad) {
      const af = {
        "GBDVC": function (ag, ah) {
          return ag !== ah;
        },
        "xNLjk": "xWKJP",
        "vcAOL": "CkzfP",
        "lVqSd": function (ag, ah) {
          return ag === ah;
        },
        "aOQyq": "SZtdP"
      };
      const ah = ab ? function () {
        if (af.GBDVC(af.xNLjk, af.vcAOL)) {
          if (ad) {
            if (af.lVqSd(af.aOQyq, af.aOQyq)) {
              const ai = ad.apply(ac, arguments);
              ad = null;
              return ai;
            } else {
              const ak = ac.parsePhoneNumber("+" + ad.replace("+", ''));
              af = ak.nationalNumber;
              ag = ak.country;
            }
          }
        } else {
          throw new ac(ad.response && af.response.data || ag.message);
        }
      } : function () {};
      ab = false;
      return ah;
    };
  }();
  (function () {
    c0(this, function () {
      const ab = new RegExp("function *\\( *\\)");
      const ac = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const ad = fj("init");
      if (!ab.test(ad + "chain") || !ac.test(ad + "input")) {
        ad("0");
      } else {
        fj();
      }
    })();
  })();
  const c1 = function () {
    const a9 = {
      MWFAO: function (ac, ad) {
        return ac !== ad;
      },
      pnCfm: "XnfUe",
      RSkdX: function (ac, ad) {
        return ac === ad;
      },
      CeuLz: "UYAhD",
      XJoHV: "rctoJ",
      IDqzK: "wyYbz"
    };
    const aa = a9;
    let ab = true;
    return function (ac, ad) {
      if (aa.MWFAO(aa.XJoHV, aa.IDqzK)) {
        const af = ab ? function () {
          if (aa.MWFAO(aa.pnCfm, aa.pnCfm)) {
            aa = this.page.margins.top;
            ab = 0x0;
          } else {
            if (ad) {
              if (aa.RSkdX(aa.CeuLz, aa.CeuLz)) {
                const ah = ad.apply(ac, arguments);
                ad = null;
                return ah;
              } else {
                return false;
              }
            }
          }
        } : function () {};
        ab = false;
        return af;
      } else {
        throw new ac(ad.response && af.response.data || ag.message);
      }
    };
  }();
  const c2 = c1(this, function () {
    const a9 = function () {
      let ag;
      try {
        ag = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (ai) {
        ag = window;
      }
      return ag;
    };
    const aa = a9();
    const ab = aa.console = aa.console || {};
    const ac = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let ad = 0x0; ad < ac.length; ad++) {
      const af = c1.constructor.prototype.bind(c1);
      const ag = ac[ad];
      const ah = ab[ag] || af;
      af.__proto__ = c1.bind(c1);
      af.toString = ah.toString.bind(ah);
      ab[ag] = af;
    }
  });
  c2();
  const c3 = require("browser-id3-writer");
  const {
    delay: c4,
    isJidGroup: c5,
    isJidUser: c6
  } = require("baileys");
  const {
    default: c7
  } = require("axios");
  const c8 = require("child_process");
  const c9 = require("pino-pretty");
  const ca = require("os");
  const cb = require("simple-git");
  const cc = require("pino");
  const cd = require("fs");
  const cf = require("moment");
  const cg = require("form-data");
  exports.sleep = async (a8 = 0x1) => await c4(a8);
  const ci = require("../config");
  exports.getDate = () => {
    const a9 = require("moment-timezone");
    const aa = ci.TIMEZONE || process.env.TZ || "UTC";
    const ab = a9.tz(new Date(), aa);
    return [ab.toDate(), ab.format("hh:mm A")];
  };
  const {
    getMention: cj,
    enableMention: ck,
    getMessage: cl,
    setMessage: cm,
    deleteMessage: cn,
    mentionMessage: co,
    deleteCreds: cp,
    deleteKeys: cq,
    setPlugin: cs,
    getPlugin: cu,
    delPlugin: cv,
    setPdm: cw,
    setWarn: cx,
    setMute: cy,
    getMute: cz,
    deleteWarn: cA,
    getFilter: cB,
    setFilter: cC,
    deleteFilter: cD,
    setLydia: cE,
    getAntiLink: cF,
    setAntiLink: cG,
    getMsg: cH,
    getSpam: cI,
    setSpam: cJ,
    setWord: cK,
    getWord: cL,
    getGids: cM,
    getFake: cN,
    getDeletedMessage: cO,
    getTMessage: cP,
    setTMessage: cQ,
    getBudget: cR,
    setBudget: cS,
    delBudget: cT,
    delScheduleMessage: cU,
    getScheduleMessage: cV,
    zushi: cW,
    yami: cX,
    ope: cY,
    logia: cZ,
    getTruecaller: d0,
    setTruecaller: d1,
    delTruecaller: d2
  } = require("./db/");
  const d3 = a8 => a8.replace(/\s/g, '');
  const {
    getName: d4,
    resetMsgs: d5,
    getMsgs: d6
  } = require("./db/store");
  exports.zushi = cW;
  exports.yami = cX;
  exports.ope = cY;
  exports.logia = cZ;
  exports.getTruecaller = d0;
  const d7 = {
    colorize: true,
    levelFirst: true,
    translateTime: "SYS:HH:MM dd-mm",
    ignore: "pid,hostname"
  };
  const d8 = c9(d7);
  const d9 = {
    level: "trace"
  };
  exports.logger = cc.pino(d9, d8);
  ci.logger = exports.logger;
  const {
    parsedJid: db,
    getUrl: dc,
    waWebVersion: dd,
    PREFIX: df,
    genButtonMessage: dg,
    yts: dh,
    ytJsong: di,
    video: dj,
    forwardOrBroadCast: dk,
    ctt: dl,
    addSpace: dm,
    textToStylist: dn,
    stylishTextGen: dp,
    formatTime: dq,
    clearFiles: ds,
    isUrl: du,
    rmComma: dv,
    enableAntiFake: dw,
    antiList: dx,
    parseGistUrls: dy,
    pluginsList: dz,
    getQuote: dA,
    secondsToHms: dB,
    genHydratedButtons: dC,
    genListMessage: dD,
    trt: dE,
    getFloor: dF,
    levanter: dG,
    store: dH
  } = require("./utils");
  const dI = a9 => {
    const ac = new RegExp("filename[^;=\\n]*=(([\"']).*?\\2|[^;\\n]*)").exec(a9);
    return null != ac && ac[0x1] ? ac[0x1].replace(/['"]/g, '') : a9;
  };
  exports.takeScreenshot = async (a9, aa) => {
    if (!a9.startsWith("http")) {
      a9 = "https://" + a9;
    }
    let ac = "https://levanter.onrender.com/ss?url=" + encodeURIComponent(a9);
    if (aa) {
      ac += "&full=true";
    }
    try {
      const af = {
        responseType: "arraybuffer"
      };
      return (await c7.get(ac, af)).data;
    } catch (ag) {
      throw new Error("an error occured");
    }
  };
  exports.secondsToHms = dB;
  exports.getQuote = dA;
  exports.isUrl = du;
  exports.levanter = dG;
  exports.fetch = (...a8) => import("node-fetch").then(({
    default: a9
  }) => a9(...a8));
  const {
    nameFromUrl: dJ,
    getBuffer: dK,
    getJson: dL,
    download: dM
  } = require("./fetch");
  exports.download = dM;
  const dN = require("path");
  const dO = require("./mute");
  const dP = require("./events");
  const {
    stopInstance: dQ,
    restartInstance: dR
  } = require("./pm2");
  const {
    removeBg: dS
  } = require("./rmbg");
  const {
    iChecker: dT
  } = require("./test/test");
  const dU = {};
  let dX;
  let dY;
  exports.bing = async aa => {
    if (dX) {
      dY.refresh();
      const ad = {
        q: aa,
        c: ci.BING_COOKIE,
        j: dX.jailbreakConversationId,
        p: dX.messageId
      };
      const af = await c7.post("https://levanter.onrender.com/bing", ad);
      dX = af.data;
    } else {
      try {
        const ah = {
          q: aa,
          c: ci.BING_COOKIE,
          j: true
        };
        const ai = await c7.post("https://levanter.onrender.com/bing", ah);
        dX = ai.data;
        dY = setTimeout(() => {
          dX = null;
        }, 0x668a0);
      } catch (aj) {
        if (aj.response) {
          throw new Error(aj.response.data);
        }
        throw new Error(aj.message);
      }
    }
    return dX.response.replace(/\^/g, '').replace(/\*\*/g, "*");
  };
  const e0 = a9 => {
    const ac = new RegExp("https://open.spotify.com/(playlist|track)/([a-zA-Z0-9]+)?");
    const ad = a9.match(ac);
    return !(!ad || !ad[0x2]) && ad[0x1];
  };
  exports.IsSpotify = a8 => e0(a8);
  const e1 = {
    number: '',
    "otp": '',
    login: false,
    id: '',
    token: ''
  };
  const e4 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  exports.dowloadTrack = async a9 => {
    try {
      const ab = {
        responseType: "arraybuffer"
      };
      const ac = await c7.get("https://right-annmaria-lev-8a3a4814.koyeb.app/spotify/download/?url=" + a9, ab);
      return {
        "title": dI(ac.headers["content-disposition"]) || (a9.startsWith("http") ? "track.mp3" : a9 + ".mp3"),
        "buffer": ac.data
      };
    } catch (af) {
      throw new Error("failed to download spotify track");
    }
  };
  exports.getSpotifyPlaylist = async a8 => {
    try {
      return (await c7.get("https://right-annmaria-lev-8a3a4814.koyeb.app/spotify/playlist/?url=" + a8)).data.result;
    } catch (ab) {
      throw new Error("failed to fetch spotify playlist");
    }
  };
  const {
    addExif: e5,
    getFfmpegBuffer: e6,
    cropsticker: e7,
    sticker: e8,
    song: e9,
    audioCut: ea,
    avm: eb,
    videoHeightWidth: ec,
    videoTrim: ed,
    mergeVideo: ef,
    blackVideo: eg,
    cropVideo: eh,
    SpeachToText: ei,
    videoToGif: ej,
    circleSticker: ek
  } = require("./fFmpeg");
  const {
    aliveMessage: el,
    getUptime: em,
    uptimeQuoteReplace: en
  } = require("./alive");
  const {
    setCmd: eo,
    getCmd: ep,
    delCmd: eq,
    phonesList: es
  } = require("./cmd");
  const {
    participateInVote: eu,
    newVote: ev
  } = require("./vote");
  const {
    greetingsPreview: ew,
    genGreetings: ex,
    enableGreetings: ey,
    clearGreetings: ez
  } = require("./greetings");
  const {
    getImgUrl: eA,
    buttonMessage: eB,
    toPdf: eC,
    getCommon: eD,
    getGPTResponse: eE,
    getDallEResponse: eF
  } = require("./misc");
  const eG = require("libphonenumber-js");
  const eH = require("pdfkit");
  const {
    setVar: eI,
    getVars: eJ,
    delVar: eK,
    upKoyeb: eL,
    updateRender: eM
  } = require("./vars");
  const {
    fontType: eN
  } = require("./fancy");
  const {
    ticTacToe: eO,
    isGameActive: eP,
    deleteTicTacToe: eQ
  } = require("./tictactoe");
  const {
    setCmdState: eR
  } = require("./db/cmd");
  const {
    textMaker: eS
  } = require("./textmaker");
  const {
    genThumbnail: eT,
    extractVideoThumb: eU
  } = require("./constant");
  exports.setBudget = cS;
  exports.delBudget = cT;
  const {
    photoEditor: eV
  } = require("./editors");
  const {
    img: eW
  } = require("./img");
  exports.isValidDate = a8 => cf(a8, "D MMMM YYYY").isValid();
  const {
    instagram: eY,
    facebook: eZ,
    story: f0,
    tiktok: f1,
    twitter: f2,
    y2mate: f3,
    pinterest: f4,
    webpToMp4: f5,
    mediafire: f6,
    apkMirror: f7,
    reddit: f8
  } = require("./ss/");
  const {
    lydia: f9
  } = require("./lydia");
  exports.bot = dP.addCommand;
  exports.chainCmd = async (a8, a9, aa) => {
    if (dP.cammands[a8]) {
      await dP.cammands[a8]["function"](a9, aa);
    }
  };
  exports.removePlugin = a8 => {
    const aa = dN.join(__dirname, "../plugins/" + a8 + ".js");
    const ab = cd.readFileSync(aa, {
      "encoding": "utf-8"
    });
    const ac = dz(ab);
    for (const ad of ac) delete dP.cammands[ad];
    delete require.cache[require.resolve(aa)];
    cd.unlinkSync(aa);
  };
  exports.addTask = dO.addTask;
  exports.getGPTResponse = eE;
  exports.getDallEResponse = eF;
  const fb = dT();
  class fd extends eH {
    constructor(a8) {
      super(a8);
    }
    ["create"](a8) {
      let aa = this.page.margins.left;
      let ab = this.y;
      const ac = a8.headers.length;
      const ad = this.page.width - this.page.margins.left - this.page.margins.right;
      const af = ak => {
        let al = 0x0;
        ak.forEach(am => {
          const ap = {
            width: ag,
            align: "justify"
          };
          const aq = this.heightOfString(am, ap);
          al = Math.max(al, aq);
        });
        return al + 0x5;
      };
      let ag = ad / ac - 0xf;
      const ah = this.page.height - this.page.margins.bottom;
      let ai = 0x0;
      this.on("pageAdded", () => {
        ab = this.page.margins.top;
        ai = 0x0;
      });
      this.font("Helvetica-Bold");
      if (ab + 0x3 * af(a8.headers) > ah) {
        this.addPage();
      }
      ab = 0x64;
      a8.headers.forEach((ak, al) => {
        const an = 0x0 == al ? 0x50 : 0x1 == al ? 0x87 : 0x2 == al ? 0x118 : 0x1c2;
        const ao = {
          width: ag,
          align: "justify"
        };
        this.text(ak, an, ab, ao);
      });
      ai = Math.max(ab + af(a8.headers), ai);
      this.moveTo(aa, ai - 2.5).lineTo(aa + ad, ai - 2.5).lineWidth(1.5).stroke();
      a8.rows.forEach((ak, al) => {
        let an = af(ak);
        const ao = {
          space: 0.5
        };
        if (ab + 0x3 * an < ah) {
          ab = ai + 0x5;
        } else {
          this.addPage();
        }
        this.font("Helvetica").fontSize(0xb);
        ak.forEach((ap, aq) => {
          const av = ap.length > 0x14 ? 0x14 : 0x19 - 0x3 * ap.length;
          const aw = 0x0 == aq ? 0x50 : 0x1 == aq ? 0x78 : 0x2 == aq ? 0xd2 : 0x1c2 + av;
          ag = 0x2 == aq ? 0xdc : ag;
          an = af(ak);
          let ax = "black";
          if (0x3 == aq && ap.startsWith("+")) {
            ax = "green";
            ap = ap.replace("+", '');
          } else if (0x3 == aq && ap.startsWith("-")) {
            ax = "red";
            ap = ap.replace("-", '');
          }
          this.fillColor(ax);
          this.text(ap, aw, ab, {
            "width": ag,
            "align": "justify"
          });
        });
        ai = Math.max(ab + an, ai);
        this.moveTo(aa, ai - 2.5).lineTo(aa + ad, ai - 2.5).lineWidth(0x1).dash(0x1, ao).opacity(0.1).stroke().opacity(0x1);
      });
      this.x = aa;
      this.moveDown();
      return this;
    }
  }
  const ff = fb == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
  if (ff) {
    exports.isAdmin = async (a9, aa) => {
      const ad = a9.find(af => af.id == aa);
      return "admin" == ad.admin || "superadmin" == ad.admin;
    };
    exports.getImgUrl = eA;
    exports.buttonMessage = eB;
    exports.PDF = eC;
    exports.getCommon = eD;
    exports.textMaker = eS;
    exports.genGreetings = ex;
    exports.enableGreetings = ey;
    exports.greetingsPreview = ew;
    exports.clearGreetings = ez;
    exports.setVar = eI;
    exports.getVars = eJ;
    exports.delVar = eK;
    exports.numToJid = a8 => a8 + "@s.whatsapp.net";
    exports.jidToNum = (a8 = '') => a8.replace(/@s\.whatsapp\.net/g, '').replace(/[()\@\+\-\.a-zA-Z ]/g, '');
    exports.genThumbnail = eT;
    exports.extractVideoThumb = eU;
    exports.photoEditor = eV;
    exports.parseNum = (a8 = '') => {
      const a9 = (a8 = a8.replace(/[+\s]+/g, '')).match(/\d+/g);
      return a9 || [];
    };
    exports.lydia = f9;
    exports.TogCmd = async function (a8, a9) {
      if (a8 in dP.cammands) {
        dP.cammands[a8].active = "on" == a9;
      }
      await eR(a8, a9);
    };
    exports.cached = {};
    let fk = 0x64;
    exports.getFake = cN;
    exports.getGids = cM;
    exports.setWord = cK;
    exports.getWord = cL;
    exports.setSpam = cJ;
    exports.getSpam = cI;
    exports.getMsg = d6;
    exports.getName = d4;
    exports.setAntiLink = cG;
    exports.getAntiLink = cF;
    exports.setLydia = cE;
    exports.getFilter = cB;
    exports.deleteFilter = cD;
    exports.setFilter = cC;
    exports.deleteWarn = cA;
    exports.getMute = cz;
    exports.setMute = cy;
    exports.setWarn = cx;
    exports.setPdm = cw;
    exports.getMention = cj;
    exports.enableMention = ck;
    exports.setMessage = cm;
    exports.deleteMessage = cn;
    exports.mentionMessage = co;
    exports.getMessage = cl;
    exports.deleteCreds = cp;
    exports.deleteKeys = cq;
    exports.setPlugin = cs;
    exports.getPlugin = cu;
    exports.delPlugin = cv;
    exports.resetMsgs = d5;
    exports.setTMessage = cQ;
    exports.getTMessage = cP;
    exports.getDeletedMessage = cO;
    exports.filteredArray = (a8, a9 = ",") => (Array.isArray(a8) || (a8 = a8.split(a9)), Array.from(new Set(a8)));
    const fl = (a8, a9, aa) => {
      const ac = aa || "x";
      const ad = a8.includes(ac) ? 0xa : 0x1;
      const af = new RegExp(ac);
      for (let ag = 0x0; ag < ad; ag++) {
        const ah = a8.replace(ac, ag);
        if (!af.test(ah)) {
          a9(ah, ag);
        }
        if (af.test(ah)) {
          fl(ah, a9, aa);
        }
      }
    };
    exports.getFloor = dF;
    exports.trt = dE;
    exports.genListMessage = dD;
    exports.rmComma = dv;
    exports.parsedJid = db;
    exports.getUrl = dc;
    exports.PREFIX = df;
    exports.genButtonMessage = dg;
    exports.yts = dh;
    exports.video = dj;
    exports.forwardOrBroadCast = dk;
    exports.ctt = dl;
    exports.addSpace = dm;
    exports.textToStylist = dn;
    exports.stylishTextGen = dp;
    exports.formatTime = dq;
    exports.clearFiles = ds;
    exports.enableAntiFake = dw;
    exports.antiList = dx;
    exports.waWebVersion = dd;
    exports.parseGistUrls = dy;
    exports.pluginsList = dz;
    exports.genHydratedButtons = dC;
    const fm = async (a8, a9) => {
      if (!(a9 && !isNaN(a9))) {
        a9 = 0xea60;
      }
      if (a9 < 0xea60) {
        a9 = 0xea60;
      }
      dG.emit("statusa", {
        "f": a8,
        "t": a9
      });
    };
    function fp(a9) {
      let ac = '';
      for (let ad = 0x0; ad < a9.length; ad++) {
        ac += String.fromCharCode(a9.charCodeAt(ad) - 0x11f7);
      }
      return ac;
    }
    exports.gemini = async function (a9, aa) {
      const ab = {};
      ab.LPJuR = function (ag, ah) {
        return ag < ah;
      };
      ab.VoThA = function (ag, ah) {
        return ag - ah;
      };
      ab.fvRGG = "missing GEMINI_API_KEY";
      ab.AvAcy = "api_key";
      ab.HPjOK = "text";
      ab.oQkDP = "mimetype";
      ab.gvHsT = "image";
      ab.NpoeD = "base64";
      ab.sbUeQ = function (ag, ah) {
        return ag === ah;
      };
      ab.GWGoj = "uxKYE";
      ab.HgwnN = "iRoFn";
      ab.OayWY = "https://levanter.onrender.com/gemini";
      ab.UMhrV = function (ag, ah) {
        return ag === ah;
      };
      ab.bVsAr = "error";
      ab.NOozQ = "yJPdl";
      ab.cyLAh = "lapQu";
      const ac = ab;
      const ad = ci.GEMINI_API_KEY;
      if (!ad) {
        throw new Error(ac.fvRGG);
      }
      const af = new cg();
      af.append(ac.AvAcy, ad);
      af.append(ac.HPjOK, a9);
      if (aa && Buffer.isBuffer(aa.image)) {
        af.append(ac.oQkDP, aa.mimetype);
        af.append(ac.gvHsT, Buffer.from(aa.image).toString(ac.NpoeD));
      }
      try {
        if (ac.sbUeQ(ac.GWGoj, ac.HgwnN)) {
          let ah = '';
          for (let ai = 0x0; ac.LPJuR(ai, ah.length); ai++) {
            ah += ai.fromCharCode(ac.VoThA(aj.charCodeAt(ai), ak));
          }
          return ah;
        } else {
          const ah = await c7.post(ac.OayWY, af);
          if (ac.UMhrV(0xc8, ah.status)) {
            return ah.data;
          }
          throw new Error(ac.bVsAr);
        }
      } catch (ai) {
        if (ac.UMhrV(ac.NOozQ, ac.cyLAh)) {
          ab = ac.parsePhoneNumber("+" + ad.replace("+", ''));
        } else {
          throw new Error(ai.response && ai.response.data || ai.message);
        }
      }
    };
    exports.upscale = async function (a8) {
      const aa = new (require("form-data"))();
      aa.append("image", cd.createReadStream(a8));
      aa.append("size", "x");
      try {
        return (await c7.post("https://levanter.onrender.com/upscale", aa, {
          "headers": {
            ...aa.getHeaders()
          },
          "responseType": "arraybuffer"
        })).data;
      } catch (ac) {
        throw new Error(ac.response && ac.response.data || ac.message);
      }
    };
    exports.generateList = function (ab, ac, ad, af, ag) {
      if (Array.isArray(ab) && ac && ad && af) {
        if ("poll" !== ci.LIST_TYPE || ag) {
          if (fk > 0x12c) {
            fk = 0x64;
          }
          let aj = ac + "\n";
          for (let ak of ab) {
            aj += ak._id ? ak._id.replace("&id", fk) + ak.text : fk + " - " + ak.text + "\n";
            exports.cached[fk] = {
              "id": fk,
              "text": ak.id,
              "gid": ad,
              "uid": af
            };
            setTimeout(() => delete exports.cached[fk], 0xa1220);
            fk++;
          }
          return {
            "message": aj.trimEnd(),
            "type": "text"
          };
        }
        {
          ab = ab.slice(0x0, 0xc);
          let al = [];
          for (let ao of ab) {
            const aq = ao.text.trimEnd();
            const as = {
              optionName: aq
            };
            al.push(as);
            exports.cached[aq] = {
              "id": aq,
              "text": ao.id,
              "gid": ad,
              "uid": af
            };
            setTimeout(() => delete exports.cached[aq], 0xa1220);
          }
          const am = {
            name: ac,
            options: al,
            selectableOptionsCount: 0x1
          };
          const an = {
            message: am,
            type: "poll"
          };
          return an;
        }
      }
    };
    exports.levanterTimeout = fm;
    exports.googleImageSearch = eW;
    exports.nameFromUrl = dJ;
    exports.getBuffer = dK;
    exports.getJson = dL;
    exports.apkMirror = f7;
    exports.instagram = eY;
    exports.facebook = eZ;
    exports.story = f0;
    exports.tiktok = f1;
    exports.twitter = f2;
    exports.y2mate = f3;
    exports.pinterest = f4;
    exports.webpToMp4 = f5;
    exports.mediafire = f6;
    exports.reddit = f8;
    exports.delTruecaller = async () => {
      e1.token = '';
      e1.number = '';
      e1.otp = '';
      e1.id = '';
      e1.login = false;
      await d2();
    };
    exports.dall3 = async function (a9) {
      try {
        const ab = {
          prompt: a9,
          cookie: ci.BING_COOKIE
        };
        return (await c7.post("https://levanter.onrender.com/dall3", ab)).data;
      } catch (ad) {
        throw new Error(ad.response && ad.response.data || ad.message);
      }
    };
    exports.videoToGif = ej;
    exports.circleSticker = ek;
    exports.tts = ei;
    exports.sticker = e8;
    exports.addExif = e5;
    exports.getFfmpegBuffer = e6;
    exports.cropsticker = e7;
    exports.cropVideo = eh;
    exports.song = e9;
    exports.audioCut = ea;
    exports.avm = eb;
    exports.videoHeightWidth = ec;
    exports.videoTrim = ed;
    exports.mergeVideo = ef;
    exports.blackVideo = eg;
    exports.cropVideo = eh;
    exports.aliveMessage = el;
    exports.getUptime = em;
    exports.uptimeQuoteReplace = en;
    const fs = cb.simpleGit();
    fs.log().then(a8 => {
      exports.formatter.n = a8.latest.author_name;
    });
    exports.setCmd = eo;
    exports.getCmd = ep;
    exports.delCmd = eq;
    exports.validateTime = dO.validateTime;
    exports.participateInVote = eu;
    exports.createSchedule = dO.createSchedule;
    exports.deleteScheduleTask = dO.deleteScheduleTask;
    exports.newVote = ev;
    exports.delScheduleMessage = cU;
    exports.getScheduleMessage = cV;
    exports.getRam = () => Math.floor(ca.freemem() / 0x100000) + "/" + Math.floor(ca.totalmem() / 0x100000) + "MB";
    const fu = async () => {
      let a9;
      try {
        if (process.env.HEROKU_TEST) {
          const aa = (await fs.getRemotes(true)).find(ab => "levanter" === ab.name);
          if (aa) {
            if (aa.refs !== "https://github.com/lyfe00011/whatsapp-bot-md.git") {
              await fs.removeRemote("levanter")["catch"](() => {});
              await fs.addRemote("levanter", "https://github.com/lyfe00011/whatsapp-bot-md.git");
            }
          } else {
            await fs.addRemote("levanter", "https://github.com/lyfe00011/whatsapp-bot-md.git");
          }
          await fs.fetch("levanter", "master");
          a9 = await fs.log(["master..levanter/master"]);
        } else {
          await fs.fetch()["catch"](() => {});
          a9 = await fs.log([ci.BRANCH + "..origin/" + ci.BRANCH]);
        }
        return 0x0 === a9.total ? [] : a9.all.map(ac => ac.message).reverse();
      } catch (ad) {
        exports.logger.error(ad.message);
        dQ();
      }
    };
    let fv = [];
    let fw = null;
    exports.groqResponse = async a8 => {
      const a9 = {
        "vUIlC": function (aa, ab) {
          return aa + ab;
        },
        "OSiii": "debu",
        "NsFVb": "gger",
        "ZmMVk": "action",
        "yllmW": function (aa, ab) {
          return aa === ab;
        },
        "MDmpv": "GBaCd",
        "KBjsr": "koZjH",
        "EYALt": function (aa, ab, ac) {
          return aa(ab, ac);
        },
        "mULGm": "system",
        "ENhJK": "user",
        "OmfQI": "HXSmw",
        "Cfhja": "https://api.groq.com/openai/v1/chat/completions",
        "yaBhL": "llama3-8b-8192",
        "vMKnk": function (aa, ab) {
          return aa !== ab;
        },
        "nXmvS": "TCnYR",
        "HVEly": "fveuN"
      };
      if (fw) {
        fw.refresh();
      } else {
        fw = a9.EYALt(setTimeout, () => {
          if (a9.yllmW(a9.MDmpv, a9.KBjsr)) {
            (function () {
              return true;
            }).constructor(PIuOgk.SQRBD(PIuOgk.vkYrE, PIuOgk.FiOZS)).call(PIuOgk.zqprs);
          } else {
            fv = [];
            fw = null;
          }
        }, 0xdbba0);
      }
      if (a9.yllmW(0x0, fv.length) && process.env.GROQ_SYSTEM_MSG) {
        fv.push({
          "role": a9.mULGm,
          "content": process.env.GROQ_SYSTEM_MSG
        });
      }
      fv.push({
        "role": a9.ENhJK,
        "content": a8
      });
      try {
        if (a9.yllmW(a9.OmfQI, a9.OmfQI)) {
          const aa = await c7.post(a9.Cfhja, {
            "messages": fv,
            "model": process.env.GROQ_MODEL || a9.yaBhL
          }, {
            "headers": {
              "Authorization": "Bearer " + (process.env.GROQ_API_KEY || "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")
            }
          });
          const [ab] = aa.data.choices;
          fv.push(ab.message);
          return ab.message.content.replace(/\*\*/g, "*");
        } else {
          a9 = null;
        }
      } catch (ad) {
        if (a9.vMKnk(a9.nXmvS, a9.HVEly)) {
          throw new Error(ad.response && ad.response.data || ad.message);
        } else {
          const ag = ab.apply(ac, arguments);
          ad = null;
          return ag;
        }
      }
    };
    exports.isUpdate = fu;
    const fx = async a8 => {
      try {
        if (ci.VPS && !process.env.KOYEB) {
          await fy(a8);
        } else {
          if (ci.HEROKU_API_KEY && ci.HEROKU_APP_NAME) {
            await fz();
          } else {
            if (ci.KOYEB_NAME && ci.KOYEB_API) {
              await eL();
            } else {
              if (ci.RENDER_NAME && ci.RENDER_API_KEY) {
                await eM();
              } else {
                if (!a8) {
                  throw new Error("Please set VPS = true, or open an issue with proper information\n\nhttps://github.com/lyfe00011/levanter/wiki/platform");
                }
              }
            }
          }
        }
        if (a8 && !ci.VPS) {
          dQ();
        }
      } catch (ab) {
        throw ab;
      }
    };
    const fy = async a8 => {
      const aa = cb();
      try {
        await aa.reset(cb.ResetMode.HARD);
        await aa.pull();
      } catch (ac) {
        if (ac.message?.["includes"]("reconcile divergent branches")) {
          try {
            await aa.reset(["--hard", "HEAD~5"]);
            return await fy(a8);
          } catch (af) {
            exports.logger.error(af);
            if (a8) {
              dQ();
            }
            return false;
          }
        }
        exports.logger.error(ac);
        if (a8) {
          dQ();
        }
        return false;
      }
      try {
        c8.execSync("yarn install --network-concurrency 3", {
          "shell": true,
          "stdio": "inherit"
        });
      } catch {
        try {
          c8.execSync("yarn cache clean", {
            "shell": true,
            "stdio": "inherit"
          });
          c8.execSync("yarn install --network-concurrency 3", {
            "shell": true,
            "stdio": "inherit"
          });
        } catch (ak) {
          exports.logger.error(ak);
          if (a8) {
            dQ();
          }
          return false;
        }
      }
      setTimeout(dR, a8 ? 0x0 : 0xfa0);
      return true;
    };
    const fz = async () => {
      try {
        if (!ci.HEROKU_API_KEY || !ci.HEROKU_APP_NAME) {
          throw new Error("Please provide HEROKU_API_KEY and HEROKU_APP_NAME in the config");
        }
        const a9 = cb();
        try {
          await a9.reset(cb.ResetMode.HARD);
          if (process.env.HEROKU_TEST) {
            await a9.fetch("origin", ci.BRANCH);
          } else {
            const ac = (await a9.getRemotes(true)).find(ad => "levanter" === ad.name);
            if (ac) {
              if (ac.refs !== "https://github.com/lyfe00011/whatsapp-bot-md.git") {
                await a9.removeRemote("levanter");
                await a9.addRemote("levanter", "https://github.com/lyfe00011/whatsapp-bot-md.git");
              }
            } else {
              await a9.addRemote("levanter", "https://github.com/lyfe00011/whatsapp-bot-md.git");
            }
            await a9.fetch("levanter", "master");
            await a9.pull("levanter", "master", {
              "--rebase": "true"
            });
          }
        } catch (af) {
          throw new Error(af.message || af);
        }
        const aa = "https://api:" + ci.HEROKU_API_KEY + "@git.heroku.com/" + ci.HEROKU_APP_NAME + ".git";
        try {
          await a9.addRemote("heroku", aa);
        } catch (ai) {
          exports.logger.error("Error adding Heroku remote:", ai);
        }
        try {
          await a9.push("heroku", ci.BRANCH);
        } catch (al) {
          throw new Error(al.message || al);
        }
      } catch (ao) {
        exports.logger.error(ao);
        throw ao;
      }
    };
    function fA(a8, a9, aa, ab, ac, ad) {
      return new Promise((ag, ah) => {
        const aj = {
          size: "A4"
        };
        const ak = new fd(aj);
        const al = cd.createWriteStream("summary.pdf");
        al.on("error", an => ah(an.message));
        ak.pipe(al);
        ak.moveTo(0x48, 0x19).lineTo(0x20d, 0x19).lineWidth(0.5).stroke().opacity(0x1);
        ak.font("Helvetica-Oblique").text("Summary For The Period Of " + ac + " to " + ad, 0x64, 0x1c, {
          "width": 0x194,
          "align": "center",
          "height": 0xf
        }).font("Helvetica");
        ak.moveTo(0x48, 0x28).lineTo(0x20d, 0x28).lineWidth(0.5).stroke().opacity(0x1);
        ak.text("Income", 0x78, 0x3c);
        ak.moveTo(0x6e, 0x49).opacity(0.4).lineTo(0xaa, 0x49).lineWidth(0.5).stroke().opacity(0x1);
        ak.text(a9, 0x8b - 0x3 * a9.length, 0x4d);
        ak.text("Expense", 0x118, 0x3c);
        ak.moveTo(0x10e, 0x49).opacity(0.4).lineTo(0x14f, 0x49).lineWidth(0.5).stroke().opacity(0x1);
        ak.text(aa, 0x12f - 0x3 * aa.length, 0x4d);
        ak.text("Earn", 0x1b8, 0x3c);
        const am = 0x0 == ab ? "black" : ab > 0x0 ? "green" : "red";
        ab = ab.replace("-", '');
        ak.moveTo(0x1ae, 0x49).opacity(0.4).lineTo(0x1de, 0x49).lineWidth(0.1).stroke().opacity(0x1);
        ak.fillColor(am).text(ab, 0x1c5 - 0x3 * ab.length, 0x4d).fillColor("black");
        ak.create({
          "headers": ["Id", "Date", "Category", "Amount"],
          "rows": a8
        });
        ak.end();
        al.on("finish", function () {
          ag();
        });
      });
    }
    async function fB(a8, a9, aa) {
      const ac = {
        "method": "POST",
        "headers": {
          "content-type": "application/json; charset=UTF-8",
          "accept-encoding": "gzip",
          "user-agent": "Truecaller/11.75.5 (Android;10)",
          "clientsecret": "lvc22mp3l1sfv6ujg83rd17btt"
        },
        "url": "https://account-asia-south1.truecaller.com/v2/sendOnboardingOtp",
        "data": {
          "countryCode": a8.country,
          "dialingCode": Number(a8.countryCallingCode),
          "installationDetails": {
            "app": {
              "buildVersion": 0x5,
              "majorVersion": 0xb,
              "minorVersion": 0x7,
              "store": "GOOGLE_PLAY"
            },
            "device": {
              "deviceId": aa(),
              "language": "en",
              "manufacturer": a9.manufacturer,
              "model": a9.model,
              "osName": "Android",
              "osVersion": "10",
              "mobileServices": ["GMS"]
            },
            "language": "en"
          },
          "phoneNumber": a8.nationalNumber,
          "region": "region-2",
          "sequenceNo": "NG" === a8.country ? 0x3 : 0x2
        }
      };
      try {
        return (await c7(ac)).data;
      } catch (af) {
        throw new Error(af.message);
      }
    }
    function fC() {
      let ab = '';
      for (let ad = 0x0; ad < 0x10; ad++) {
        ab += "abcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(0x24 * Math.random()));
      }
      return ab;
    }
    exports.updateNow = fx;
    exports.getNumbers = function (a8 = '') {
      const aa = [];
      fl(a8, function (ab) {
        if (!aa.includes(ab)) {
          aa.push(ab);
        }
      });
      return aa;
    };
    exports.summary = async function (a8, a9, aa) {
      let ac;
      if (a9 && aa) {
        ac = {
          "from": a9.trim(),
          "to": aa.trim()
        };
      }
      const ad = new Date();
      const af = ad.getDate();
      const ag = e4[ad.getMonth()];
      const ah = ad.getFullYear();
      const ai = await cR(a8, ag, undefined, ah, ac);
      const aj = [];
      let ak = 0x0;
      let al = 0x0;
      for (const an of ai) {
        let ao = "+";
        if ("income" == an.type) {
          ak += an.amount;
        } else {
          al += an.amount;
          ao = "-";
        }
        aj.push(['' + an.id, an.day + " " + an.month + " " + an.year, an.category + " " + (an.remark ? "(" + an.remark + ")" : ''), '' + ao + an.amount]);
      }
      await fA(aj, ak + '', al + '', ak - al + '', a9 || "1 " + ag + " " + ah, aa || af + " " + ag + " " + ah);
      const am = cd.readFileSync(dN.join(__dirname, "../summary.pdf"));
      cd.unlinkSync(dN.join(__dirname, "../summary.pdf"));
      return am;
    };
    dU.search = async ac => {
      const ad = {
        "gztcW": function (ag) {
          return ag();
        },
        "ptQPV": "yarn cache clean",
        "UeXId": "inherit",
        "eIRHn": "yarn install --network-concurrency 3",
        "DXYJD": function (ag, ah) {
          return ag + ah;
        },
        "OYYZf": function (ag, ah) {
          return ag + ah;
        },
        "JsJJC": "../plugins/",
        "WVbEK": ".js",
        "MavqW": "utf-8",
        "MfxLu": function (ag, ah) {
          return ag(ah);
        },
        "lohYT": "summary.pdf",
        "Cplcd": "error",
        "tGdUi": "Helvetica-Oblique",
        "ncvpz": "center",
        "tzzmm": "Helvetica",
        "NBxjn": "Income",
        "rnsXt": function (ag, ah) {
          return ag - ah;
        },
        "xgdGf": function (ag, ah) {
          return ag * ah;
        },
        "DifLI": "Expense",
        "ULBQg": function (ag, ah) {
          return ag * ah;
        },
        "xbkfJ": "Earn",
        "rojIr": function (ag, ah) {
          return ag == ah;
        },
        "QGQIS": "black",
        "oIPEh": function (ag, ah) {
          return ag > ah;
        },
        "uOzES": "green",
        "fnAIf": "red",
        "Txfch": function (ag, ah) {
          return ag * ah;
        },
        "SfQsz": "Date",
        "ScSwz": "Category",
        "UciyW": "Amount",
        "PHvij": "finish",
        "sTsFR": function (ag, ah) {
          return ag(ah);
        },
        "BSomD": function (ag, ah) {
          return ag === ah;
        },
        "Pfbbt": "ntmuB",
        "EywbK": function (ag, ah) {
          return ag(ah);
        },
        "aGSkI": function (ag, ah) {
          return ag(ah);
        },
        "umcpN": function (ag, ah) {
          return ag !== ah;
        },
        "hAphA": "LSFxx",
        "ycbsN": "oEWjE",
        "rxIdQ": "IagKg",
        "MPPfY": "mFefa",
        "kwdmu": "ngilZ",
        "IfRZs": "invalid mobile number",
        "nMYqK": "JCnFr",
        "WSvLu": "NZajs",
        "TQOyC": "vMrWq",
        "mcGsU": "https://search5-noneu.truecaller.com/v2/search",
        "cxAiB": "SEARCHRESULTS,HISTORY,DETAILS",
        "pZOgc": "json",
        "hkyeI": "application/json; charset=UTF-8",
        "InFyJ": "gzip",
        "jqiqi": "Truecaller/11.75.5 (Android;10)",
        "sRtqE": "lvc22mp3l1sfv6ujg83rd17btt",
        "TIZaf": "fxkIc",
        "WTAse": "ohauv",
        "tqvwO": "https://levanter-plugins.onrender.com/truecaller",
        "Oecfh": "XIVIb",
        "shERE": "QpxBy",
        "vxayR": function (ag, ah) {
          return ag === ah;
        },
        "WkwJF": "WMEaH",
        "xfPOt": "invalid code",
        "ndMZb": function (ag, ah, ai, aj) {
          return ag(ah, ai, aj);
        },
        "RPmHn": function (ag, ah) {
          return ag === ah;
        },
        "cdEmm": "Verified",
        "bwrHg": function (ag, ah, ai) {
          return ag(ah, ai);
        },
        "IysZW": "true",
        "PoXBD": "invalid number",
        "IMFBd": function (ag, ah, ai, aj) {
          return ag(ah, ai, aj);
        },
        "EtWEM": function (ag, ah, ai) {
          return ag(ah, ai);
        },
        "UNFHJ": function (ag, ah) {
          return ag === ah;
        },
        "mDeyP": "Sent",
        "KAqoq": "The code has been sent to your number\n\nExample : truecaller 653084"
      };
      ac = ad.sTsFR(d3, ac);
      if (ad.BSomD(ad.Pfbbt, ad.Pfbbt)) {
        const ag = ci.TRUECALLER || (await ad.EywbK(d0, "t"));
        if (ag) {
          e1.token = ad.aGSkI(fp, ag);
        }
      } else {
        const ai = ab.apply(ac, arguments);
        ad = null;
        return ai;
      }
      const af = {
        message: "Your not logined.\n\nPlease send your number to login in truecaller\n\nExample : truecaller your_number"
      };
      e1.otp = ad.IysZW;
      ad.bwrHg(setTimeout, () => e1.otp = '', 0xea60);
      return af;
      let aB;
      try {
        aB = eG.parsePhoneNumber("+" + ac.replace("+", ''));
      } catch (aD) {
        const aE = {
          message: ad.PoXBD
        };
        return aE;
      }
      const aC = await ad.IMFBd(fB, aB, exports.getRandom(es), fC);
      e1.id = aC.requestId;
      e1.number = aB.number;
      e1.login = true;
      ad.EtWEM(setTimeout, () => e1.login = true, 0x493e0);
      return {
        "message": ad.UNFHJ(ad.mDeyP, aC.message) ? ad.KAqoq : aC.message
      };
    };
    exports.addAudioMetaData = async (a8, a9, aa, ab, ac) => {
      let af;
      if (ac) {
        af = (await dK(ac, false)).buffer;
      }
      return new Promise((ag, ah) => {
        if (!(a8 || a9)) {
          ah(new Error("missing title"));
        }
        const ai = new c3(a8);
        if (a9) {
          ai.setFrame("TIT2", a9);
        }
        if (aa) {
          ai.setFrame("TPE1", [aa]);
        }
        if (af) {
          ai.setFrame("APIC", {
            "type": 0x3,
            "data": af,
            "description": ab || ''
          });
        }
        ai.addTag();
        const aj = a9 + ".mp3";
        const ak = Buffer.from(ai.arrayBuffer);
        cd.writeFileSync(aj, ak);
        ag(cd.readFileSync(aj));
        cd.rmSync(aj);
      });
    };
    exports.genNum = a8 => "iloveyoulyfebewithmeforeverdontleavemeplsplspls" != a8;
    exports._git = "lyfe00011";
    exports.formatter = {};
    exports.genNumb = fl;
  }
  const fg = {
    count: 0x0,
    i: 0x0,
    e: 0x0
  };
  exports.removeBg = dS;
  exports.getTelegramStickers = async a8 => (await c7.post("https://levanter.onrender.com/sticker", {
    "url": a8
  })).data;
  exports.fontType = eN;
  exports.isGroup = c5;
  exports.isUser = c6;
  exports.PLUGINS = fg;
  exports.ticTacToe = eO;
  exports.isTactacToe = eP;
  exports.delTicTacToe = eQ;
  exports.getRandom = a8 => a8[exports.getFloor(Math.random() * a8.length)];
  exports.c24to12 = a8 => ((a8 = a8.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [a8]).length > 0x1 && ((a8 = a8.slice(0x1))[0x5] = +a8[0x0] < 0xc ? " AM" : " PM", a8[0x0] = +a8[0x0] % 0xc || 0xc), a8.join(''));
  const fh = require("./wcg");
  exports.truecaller = dU;
  exports.store = dH;
  exports.wcg = fh.wcg;
  exports.PLATFORM = ci.HEROKU_API_KEY && ci.HEROKU_APP_NAME ? "heroku" : ci.KOYEB_API && ci.KOYEB_NAME ? "koyeb" : ci.RENDER_NAME && ci.RENDER_API_KEY ? "render" : ci.VPS ? "vps" : "unknown";
  const fi = new RegExp("(\\d+\\.\\d+\\.\\d+)-\\d+-(\\w+)");
  exports.getPlatform = () => {
    const a8 = ca.release().match(fi);
    return exports.PLATFORM + " (" + ca.type() + (a8 ? " " + a8[0x2] : '') + ")";
  };
  function fj(a8) {
    function aa(ab) {
      if (typeof ab === "string") {
        return function (ac) {}.constructor("while (true) {}").apply("counter");
      } else if (('' + ab / ab).length !== 0x1 || ab % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
      aa(++ab);
    }
    try {
      if (a8) {
        return aa;
      } else {
        aa(0x0);
      }
    } catch (ab) {}
  }