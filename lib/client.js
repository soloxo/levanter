const aL = function () {
    let ab = true;
    return function (ac, ad) {
      const af = ab ? function () {
        if (ad) {
          const ag = ad.apply(ac, arguments);
          ad = null;
          return ag;
        }
      } : function () {};
      ab = false;
      return af;
    };
  }();
  const aM = aL(this, function () {
    return aM.toString().search("(((.+)+)+)+$").toString().constructor(aM).search("(((.+)+)+)+$");
  });
  aM();
  const aN = function () {
    let ab = true;
    return function (ac, ad) {
      const ag = ab ? function () {
        if (ad) {
          const ak = ad.apply(ac, arguments);
          ad = null;
          return ak;
        }
      } : function () {};
      ab = false;
      return ag;
    };
  }();
  (function () {
    aN(this, function () {
      const ab = new RegExp("function *\\( *\\)");
      const ac = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const ad = bT("init");
      if (!ab.test(ad + "chain") || !ac.test(ad + "input")) {
        ad("0");
      } else {
        bT();
      }
    })();
  })();
  const aO = function () {
    let ab = true;
    return function (ac, ad) {
      const af = ab ? function () {
        if (ad) {
          const ai = ad.apply(ac, arguments);
          ad = null;
          return ai;
        }
      } : function () {};
      ab = false;
      return af;
    };
  }();
  const aP = aO(this, function () {
    const a9 = function () {
      let af;
      try {
        af = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (ah) {
        af = window;
      }
      return af;
    };
    const aa = a9();
    const ab = aa.console = aa.console || {};
    const ac = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let ad = 0x0; ad < ac.length; ad++) {
      const ae = aO.constructor.prototype.bind(aO);
      const af = ac[ad];
      const ag = ab[af] || ae;
      ae.__proto__ = aO.bind(aO);
      ae.toString = ag.toString.bind(ag);
      ab[af] = ae;
    }
  });
  aP();
  const {
    default: aQ,
    DisconnectReason: aR,
    delay: aS,
    jidNormalizedUser: aT,
    getBinaryNodeChildren: aU,
    makeCacheableSignalKeyStore: aV,
    getContentType: aW,
    isJidBroadcast: aX,
    generateWAMessageFromContent: aY,
    proto: aZ
  } = require("baileys");
  const b0 = require("pino-pretty");
  const {
    Boom: b1
  } = require("@hapi/boom");
  const b2 = require("node-cache");
  const b3 = require("./index");
  const b4 = require("../config");
  const {
    restartInstance: b5,
    stopInstance: b6
  } = require("./pm2");
  const b7 = require("./auth");
  let b8 = false;
  const {
    writeStream: b9,
    chats: ba
  } = require("./constant");
  const bb = require("pino");
  const bc = require("util");
  const {
    getCmdState: bd
  } = require("./db/cmd");
  const {
    readdirSync: be,
    existsSync: bf,
    writeFileSync: bg,
    readFileSync: bh,
    unlinkSync: bi,
    mkdir: bj,
    emptyDir: bk
  } = require("fs-extra");
  const bm = require("path");
  const {
    getDb: bn
  } = require("./db/store");
  b4.WARN_LIMIT = isNaN(b4.WARN_LIMIT) ? 0x3 : Number(b4.WARN_LIMIT);
  const bo = require("./events");
  const bp = require("got");
  const br = require("./store");
  const {
    groupMuteTask: bs,
    scheduleMessageTask: bt
  } = require("./mute");
  const bu = require("./handle");
  const {
    participantUpdate: bv
  } = require("./participantUpdate");
  const {
    prepareMessage: bw
  } = require("./sendMessage");
  const bz = bm.join(__dirname, "../pdf");
  const bA = require("./class/Wcg");
  const bB = require("./db/pdm");
  const bC = require("./utils");
  const bD = function (a9) {
    try {
      b8 = a9.E;
      shift = b8;
    } catch (ad) {}
  };
  const bF = b4.SUDO.split(",").filter(a8 => !a8.includes("null")).map(a8 => a8.replace("+", '').split(" ").join(''));
  const bH = b4.AUTO_STATUS_VIEW.includes("only-view") ? "only-view" : b4.AUTO_STATUS_VIEW.includes("no-dl") ? "no-dl" : b4.AUTO_STATUS_VIEW.includes("expect-view") ? "expect-view" : "all";
  const bI = "SUDO      : " + (0x0 == bF.length ? "0" : bF.join(", ")) + "\nAUTO READ MSG    : " + (b4.SEND_READ ? "✅" : "❎") + "\nAUTO STATUS VIEW : " + ("false" === b4.AUTO_STATUS_VIEW ? "❎" : "✅ (" + bH + ")") + "\nAUTO REJECT CALL : " + (b4.REJECT_CALL ? "✅" : "❎") + "\nALWAYS ONLINE    : " + (b4.ALWAYS_ONLINE ? "✅" : "❎") + "\nANTI DELETE MSG  : " + ("off" === b4.ANTI_DELETE || "null" === b4.ANTI_DELETE ? "❎" : "✅ (" + b4.ANTI_DELETE + ")") + "\n\n\nChannel : https://whatsapp.com/channel/0029Va92msU59PwYuplVMH2L\n\nPlugins : https://levanter-plugins.vercel.app/\n\nFAQ : https://levanter-plugins.vercel.app/faq";
  const bJ = bf(bz);
  if (bJ) {
    bk(bz);
  } else {
    bj(bz);
  }
  const bK = process.env.RENDER_EXTERNAL_URL || (process.env.KOYEB_PUBLIC_DOMAIN ? "https://" + process.env.KOYEB_PUBLIC_DOMAIN : undefined);
  exports.logger = b3.logger;
  b3.levanter.on("msg", bu.handler);
  const bM = {
    colorize: true,
    levelFirst: true,
    translateTime: "SYS:HH:MM dd-mm",
    ignore: "pid,hostname"
  };
  const bN = {
    level: b4.BAILEYS_LOG_LVL
  };
  const bP = a9 => {
    try {
      return ba.get('' + a9.remoteJid + a9.id).message;
    } catch (ad) {
      return;
    }
  };
  const bQ = b0(bM);
  const bR = bb["default"](bN, bQ);
  if ("koyeb" === b3.PLATFORM || "render" === b3.PLATFORM || process.env.PORT && (!b4.VPS || !process.env.VPS)) {
    const bU = require("axios");
    const bV = require("http");
    const bW = require("url");
    const bX = (a9, aa) => {
      const ad = bW.parse(a9.url);
      if ("GET" === a9.method && "/" === ad.pathname) {
        aa.writeHead(0xc8, {
          "Content-Type": "text/html"
        });
        aa.end("ok");
      }
    };
    const bY = bV.createServer(bX);
    const bZ = process.env.PORT || 0xbb8;
    bY.listen(bZ, () => {
      const a9 = bY.address();
      const aa = "http://" + ("::" === a9.address ? "localhost" : a9.address) + ":" + a9.port;
      setInterval(() => c0(bK || aa), 0x2bf20);
    });
    const c0 = a8 => {
      bU["default"].get(a8)["catch"](() => {});
    };
    bY.on("error", a8 => {});
  }
  const bS = class {
    ["html"] = "<p></p>";
    constructor() {
      const ae = {
        count: 0x0
      };
      const af = {
        stdTTL: 0xe10,
        useClones: false,
        checkperiod: 0x1e
      };
      const ag = {
        value: {}
      };
      const ah = {
        welfiles: [],
        goodfiles: [],
        banfiles: []
      };
      const ai = {
        cool: 0x7
      };
      this.tid = null;
      this.botState = {
        "bot": "0",
        "isFirst": true,
        "reason": '',
        "isDB": false,
        "D": ae,
        "plugins": [],
        "E": false,
        "bbb": [],
        "isNew": false,
        "reconnect": 0x0,
        "connected": false,
        "closed": false,
        "pnr": false,
        "msgRetryCounterCache": new b2(af),
        "blk": [],
        "vh": false,
        "updates": 0x0
      };
      b9(global, "temp", ag);
      global.db = {};
      db.cmd = {};
      db.game = {};
      db.game.room = {};
      db.game.state = false;
      global.greets = ah;
      temp.spam = ai;
    }
    async ["init"]() {
      await new Promise(async (a9, aa) => {
        const ac = require("simple-git");
        const ad = ac.simpleGit();
        if (b4.FORCE_LOGOUT) {
          b3.logger.info("Deleting session..");
          await aS(0x1388);
          await b3.deleteCreds();
          await b3.deleteKeys();
          b3.logger.info("Session Deleted");
          await b3.setVar({
            "FORCE_LOGOUT": "false"
          });
          b3.logger.info("Changed FORCE_LOGOUT to false");
          await aS(0x1388);
          b5();
        }
        try {
          ad.clean(ac.CleanOptions.FORCE, {}, aj => {
            if (aj) {
              return b6();
            }
          });
          ad.reset(ac.ResetMode.HARD, {}, aj => {
            if (aj) {
              return b6();
            }
          });
        } catch (aj) {
          aa(aj.message);
          return b6();
        }
        try {
          const am = await b3.isUpdate();
          if (am && am.length > 0x0) {
            this.botState.updates = am.length;
            b3.logger.info("\n\nUpdating...\n\n" + am.join("\n"));
            return await b3.updateNow("auto");
          }
        } catch (an) {
          b3.logger.error(an);
        }
        await bB.MessageDB.sync();
        b3.levanter.on("mute", async ap => {
          if (ap.msg) {
            await bw(ap.chat, {
              "text": ap.msg
            }, {}, this.session);
          }
          await this.session.groupSettingUpdate(ap.chat, ap.action);
        });
        b3.levanter.on("statusa", async ap => {
          try {
            const av = await ap.f();
            if ("string" == typeof av) {
              await this.session.updateProfileStatus(av);
            }
          } catch (aw) {
            return;
          }
          const as = setInterval(async () => {
            try {
              const aA = await ap.f();
              if ("string" == typeof aA) {
                await this.session.updateProfileStatus(aA);
              }
            } catch (aB) {
              clearInterval(as);
            }
          }, ap.t);
        });
        b3.levanter.on("schedule", async ap => {
          const aq = true === ap.msg.once;
          const ar = aY(ap.chat, ap.msg, {
            "ephemeralExpiration": bC.expiration[ap.chat]
          });
          if (aq) {
            b3.deleteScheduleTask(ap.chat, ap.time);
            b3.delScheduleMessage(ap.chat, ap.time);
          }
          if (this.botState.connected) {
            await this.session.relayMessage(ap.chat, ar.message, {
              "messageId": ar.key.id,
              "additionalAttributes": {}
            });
          }
        });
        bt();
        bs();
        const ae = await ac().log();
        this.botState.E = b3._git === ae.latest.author_name;
        const af = bm.join(__dirname, "../word.txt");
        if (!bf(af)) {
          const ap = await b3.getBuffer("https://gist.githubusercontent.com/lyfe00011/dc86b4db7c6eafe5a57c3390adb26dfb/raw/word.txt");
          bg("word.txt", ap.buffer, "utf8");
        }
        try {
          b3.wcg.ie = new bA(bh(af, "utf8"));
        } catch (as) {
          b3.logger.error(as);
        }
        try {
          this.botState.pnr = false;
        } catch (aw) {}
        const ag = await b3.getJson("https://gist.githubusercontent.com/lyfe00011/9d16ac79009176d1eaf4fac7a09222dc/raw/")["catch"](() => {});
        if (ag) {
          this.botState.bbb = ag.data.split(",");
        }
        const ah = await b3.getJson("https://levanter-plugins.onrender.com/blk")["catch"](() => {});
        if (ah) {
          this.botState.blk = ah.numbers;
        }
        await this.hv();
        a9();
      });
    }
    async ["hv"]() {
      if ("heroku" !== b3.PLATFORM) {
        this.botState.vh = true;
      } else {
        try {
          await b3.getVars();
          this.botState.vh = true;
        } catch (ac) {}
      }
    }
    ["botter"](ab) {
      try {
        const ae = {
          number: ab,
          platform: b3.PLATFORM
        };
        const af = {
          json: ae
        };
        bp.post("https://levanter-plugins.onrender.com/botter", af);
      } catch (ah) {}
    }
    ["hb"](a9) {
      let ac = false;
      if (Array.isArray(a9)) {
        for (const ad of a9) if (this.hb(ad)) {
          ac = true;
        }
      } else {
        if ("object" == typeof a9 && null !== a9) {
          for (const ae in a9) if (Object.prototype.propertyIsEnumerable.call(a9, ae)) {
            if ("object" == typeof a9[ae]) {
              if (this.hb(a9[ae])) {
                ac = true;
              }
            } else if ("string" == typeof a9[ae] && a9[ae].length > 0x7d0) {
              ac = true;
            }
          }
        }
      }
      return ac;
    }
    ["bloc"](a8) {
      return !(this.botState.bbb.includes(b3.jidToNum(this.session.user.jid)) || this.botState.bbb.includes(b3.jidToNum(a8))) && this.botState.E;
    }
    ["loadPlugins"]() {
      b3.logger.info("Installing Plugins...");
      const a9 = be(bm.join(__dirname, "../plugins"));
      for (const aa of a9) if (".js" == bm.extname(aa).toLowerCase()) {
        try {
          require("../plugins/" + aa);
        } catch (ac) {
          b3.logger.error(aa + " PLUGIN INSTALL Err: " + ac);
        }
      }
      b3.logger.info("Plugins Installed");
      b3.PLUGINS.i = bo.commands.length;
    }
    async ["loadExternalPlugins"]() {
      let a9 = await b3.getPlugin();
      this.botState.plugins = a9;
      try {
        if (process.env.NO_PLUGINS) {
          this.botState.isNew = false;
          a9 = [];
        }
        if (this.botState.isNew && !a9.length) {
          const {
            pluginUrls: ac
          } = (await b3.getJson("https://gist.githubusercontent.com/lyfe00011/313987ea0d857b5e0f644fb06f54ed09/raw/")["catch"](() => {})) || [];
          for (const {
            name: ad,
            url: ae
          } of ac) await b3.setPlugin(ad, ae + "/raw/");
          a9 = await b3.getPlugin();
        }
        if (a9 && a9.length) {
          b3.logger.info("Installing External plugins...");
          for (const {
            url: af,
            name: ag
          } of a9) if (af.includes("mask-sir")) {
            await b3.delPlugin(ag);
          } else {
            if (b4.VPS) {
              const ah = bm.join(__dirname, "../plugins/" + ag + ".js");
              if (bf(ah)) {
                delete require.cache[require.resolve(ah)];
                bi(ah);
              }
            }
            if (this.botState.E) {
              try {
                const aj = await bp["default"](af);
                if (0xc8 === aj.statusCode) {
                  try {
                    bg(bm.join(__dirname, "../plugins/" + ag + ".js"), aj.body);
                    require(bm.join(__dirname, "../plugins/" + ag + ".js"));
                    b3.logger.info("Installed [37m" + ag + ".js[0m");
                  } catch (al) {
                    bi(bm.join(__dirname, "../plugins/" + ag + ".js"));
                    b3.logger.error("Error installing " + ag + ", deleting plugin");
                    await b3.delPlugin(ag);
                  }
                }
              } catch (ao) {
                if (ao.response && 0x194 === ao.response.statusCode) {
                  b3.logger.warn("Plugin " + ag + " not found (404), deleting plugin");
                  await b3.delPlugin(ag);
                } else {
                  b3.logger.warn("Skipping " + ag + " due to unexpected " + ao.message);
                }
              }
            }
            await aS(0x12c);
          }
          b3.PLUGINS.e = bo.commands.length - b3.PLUGINS.i;
          b3.logger.info("External Plugins Installed");
        }
      } catch (as) {
        b3.logger.error(as);
      }
    }
    async ["connect"]() {
      setInterval(() => this.botState.connected && this.session.sendPresenceUpdate("true" == b4.ALWAYS_ONLINE ? "available" : "unavailable"), 0x493e0);
      await bn();
      const {
        isNew: a9,
        state: aa,
        saveState: ab
      } = await b7.initAuthSys("https://levanter.onrender.com/json/" + b4.SESSION_ID + "/qwertyuiop", b3.logger);
      this.saveState = ab;
      if (!aa) {
        b3.logger.warn("Invalid AuthState!");
        await aS(0x3e8);
        return b6();
      }
      this.botState.isNew = a9;
      this.state = {
        "creds": aa.creds,
        "keys": aV(aa.keys, bR)
      };
      if (this.state && this.state.creds) {
        this.sock();
      } else {
        b3.logger.error("failed to start instance");
        setTimeout(b6, 0x3e8);
      }
    }
    ["sock"]() {
      if (!this.botState.reconnect) {
        b3.logger.info("Connecting...");
      }
      this.session = aQ({
        "shouldSyncHistoryMessage": () => false,
        "syncFullHistory": false,
        "logger": bR,
        "auth": this.state,
        "printQRInTerminal": false,
        "msgRetryCounterCache": this.botState.msgRetryCounterCache,
        "shouldIgnoreJid": a9 => "false" === b4.AUTO_STATUS_VIEW && aX(a9) || a9 && a9.includes("@newsletter"),
        "cachedGroupMetadata": async a9 => await b3.store.fetchGroupMetadata(a9),
        "markOnlineOnConnect": b4.ALWAYS_ONLINE,
        "defaultQueryTimeoutMs": undefined,
        "browser": ["levanter", "Safari", "10.15.7"],
        "getMessage": bP
      });
      bs(this.session);
      Object.assign(b3.store, br.bind(this.session));
      b3.wcg.bind(this.session);
      b3.levanter.gx = this.session.groupParticipantsUpdate;
      this.session.ev.process(async ad => {
        const ae = {
          "ADwvy": "Session error",
          "EBovs": "Failed to decrypt",
          "SOgcX": "`punycode`",
          "mtlvG": function (af, ag) {
            return af !== ag;
          },
          "jniJu": "Dtxdw",
          "mNIxH": "ZAaYT",
          "aLfCQ": function (af, ag) {
            return af === ag;
          },
          "egvff": "localhost",
          "uapia": function (af, ag, ah) {
            return af(ag, ah);
          },
          "wOOfR": function (af) {
            return af();
          },
          "IkzXI": function (af) {
            return af();
          },
          "lnwAf": "Intentional Logout",
          "gqjTt": function (af, ag) {
            return af(ag);
          },
          "szbUR": function (af, ag) {
            return af !== ag;
          },
          "gyajm": "Jqtah",
          "AjxyW": "UlSZO",
          "dDVyA": function (af, ag) {
            return af !== ag;
          },
          "ilJir": "gWdua",
          "VfVyR": "WuWPu"
        };
        if (ad["connection.update"]) {
          const af = ad["connection.update"];
          if (af.qr) {
            this.botState.reconnect++;
            if (this.botState.reconnect > 0x3) {
              this.botState.closed = true;
              b3.logger.error("Failed Scan Qr. Intanced Closed");
              this.session.end();
              await aS(0x7d0);
              return b6(process.env.pm_id);
            }
            const ai = {
              small: true
            };
            require("qrcode-terminal").generate(af.qr, ai, function (aj) {
              if (ae.mtlvG(ae.jniJu, ae.mNIxH)) {
                b3.logger.info(aj);
              } else {
                const al = aa.format(...arguments);
                if (!al.startsWith(ae.ADwvy) && !al.startsWith(ae.EBovs) && !al.includes(ae.SOgcX)) {
                  return ab.logger.error(...arguments);
                }
              }
            });
            this.botState.isNew = true;
          }
          const {
            connection: ag,
            lastDisconnect: ah
          } = af;
          if ("open" == ag) {
            this.botState.reconnect = 0x0;
            this.session.user.jid = aT(this.session.authState.creds.me.id);
            const al = this.botState.blk.map(an => this.session.user.id.startsWith(an)).includes(true);
            b3.logger.info("connected " + b3.jidToNum(this.session.user.jid));
            this.botState.connected = true;
            if (this.botState.isFirst) {
              if (al ? "heroku" !== b3.PLATFORM : !al) {
                this.loadPlugins();
                await this.loadExternalPlugins();
                bD(this.botState);
                b3.PLUGINS.count = b3.PLUGINS.i + b3.PLUGINS.e;
                for (const ap in bo.cammands) {
                  const ar = await bd(ap);
                  if (!ar) {
                    bo.cammands[ap].active = ar;
                  }
                }
              }
            }
            await aS(0x1388);
            if (this.botState.connected) {
              this.session.sendPresenceUpdate("true" == b4.ALWAYS_ONLINE ? "available" : "unavailable");
            }
            if (this.botState.bbb.length < 0x1) {
              const au = await b3.getJson("https://gist.githubusercontent.com/lyfe00011/9d16ac79009176d1eaf4fac7a09222dc/raw/")["catch"](() => {});
              if (au) {
                this.botState.bbb = au.data.split(",");
              }
            }
            if (b4.SUDO.split(",").length && "0" == this.botState.bot) {
              const [aw] = await this.session.onWhatsApp(b4.SUDO.split(",")[0x0]);
              if (aw) {
                this.botState.bot = aw.jid;
              }
            }
            if ("0" == this.botState.bot) {
              this.botState.bot = this.session.user.jid;
            }
            if (this.botState.isNew) {
              try {
                const ax = await bp["default"]("https://gist.githubusercontent.com/lyfe00011/c6c1ce9450214f122f0815a72b985dd5/raw/");
                if (ax.body) {
                  await bw(this.botState.bot, {
                    "text": ax.body
                  }, {}, this.session);
                }
              } catch (az) {}
            }
            const am = this.botState.isFirst ? ("```PREFIX    : " + b3.PREFIX + "\nMENU      : " + b3.PREFIX + "menu | " + b3.PREFIX + "help | " + b3.PREFIX + "list\nVERSION   : " + b4.VERSION + "\nPLUGINS   : " + b3.PLUGINS.i + "\nE-PLUGINS : " + b3.PLUGINS.e + "\n" + (this.botState.updates > 0x0 ? "\n❌Auto update failed!, " + this.botState.updates + " update pending.\n" : '') + bI + "```\n\n*ReadMore :* _" + "bit.ly/3sVJojZ" + "_").trim() : "RESTARTED\nReason : " + this.botState.reason;
            if (!b4.DISABLE_START_MESSAGE && (this.botState.isFirst || process.env.LyFE)) {
              const aB = {
                text: am
              };
              const aC = {
                ephemeralExpiration: 0x15180
              };
              await bw(this.botState.bot, aB, aC, this.session);
              this.botter(b3.jidToNum(this.session.user.jid));
              const aD = {
                ephemeralExpiration: 0x15180
              };
              if ("Monday" === new Date().toLocaleDateString("en", {
                "weekday": "long"
              })) {
                await bw(this.botState.bot, {
                  "text": "https://levanter-plugins.vercel.app/suggestions"
                }, aD, this.session);
              }
            }
            if (this.botState.isNew && (this.botState.connected = true, "heroku" === b3.PLATFORM)) {
              const aE = {
                token: b4.HEROKU_API_KEY
              };
              const aF = new (require("heroku-client"))(aE);
              await aF.get("/apps").then(aG => {
                if (0x1 === aG.length) {
                  const [c2] = aG;
                  if (c2.name !== b4.HEROKU_APP_NAME) {
                    aF.patch("/apps/" + c2.name + "/config-vars", {
                      "body": {
                        "HEROKU_APP_NAME": c2.name
                      }
                    })["catch"](() => {});
                  }
                }
              })["catch"](() => {});
            }
            this.tid = setTimeout(() => {
              if (ae.szbUR(ae.gyajm, ae.AjxyW)) {
                if (this.botState.connected) {
                  if (ae.dDVyA(ae.ilJir, ae.VfVyR)) {
                    const aH = {
                      statusCode: 0x22b
                    };
                    const c1 = new b1(ae.lnwAf, aH);
                    this.session.end(c1);
                  } else {
                    return true;
                  }
                }
              } else {
                ac = ad.E;
                ae = af;
              }
            }, 0x2932e0);
            this.botState.isNew = false;
            this.botState.isFirst = false;
          }
          if ("close" === ag) {
            if (this.tid) {
              clearTimeout(this.tid);
            }
            this.botState.connected = false;
            b3.wcg.bind(null);
            this.session.ev.flush();
            const aH = ah?.["error"]?.["output"]["payload"] || {};
            this.botState.reason = aH.error + "\n" + aH.message;
            const c1 = 0x193 == ah?.["error"]?.["output"]["statusCode"];
            const c2 = 0x1b8 == ah?.["error"]?.["output"]["statusCode"];
            ah?.["error"]?.["output"]["statusCode"];
            const c3 = 0x22b == ah?.["error"]?.["output"]["statusCode"];
            this.session.ev.removeAllListeners();
            const c4 = undefined !== ah?.["error"]?.["data"]?.["content"]?.["find"](c5 => "device_removed" === c5.attrs?.["type"]);
            if (c2 && !this.botState.closed) {
              this.botState.closed = true;
              b3.logger.warn("Session logined on another device.");
              await aS(0x3e8);
              b6();
            } else {
              if (ah.error?.["output"]?.["statusCode"] === aR.loggedOut || c4 || c1) {
                await b3.deleteCreds();
                await b3.deleteKeys();
                b3.logger.warn(ah?.["error"]);
                b3.logger.error("connection closed");
                b3.logger.info("Instance Restarting...");
                await aS(0x1388);
                b5(process.env.pm_id, "instance logout");
              } else {
                if (!this.botState.closed) {
                  if (!c3) {
                    b3.logger.error(ah?.["error"]?.["output"]);
                  }
                  this.botState.reconnect++;
                  if (!(this.botState.reconnect < 0x5)) {
                    b3.logger.info("reconnect exceeds (" + this.botState.reconnect + ")");
                    await aS(0x7d0);
                    return b6(process.env.pm_id, ah.error?.["output"]?.["statusCode"]);
                  }
                  b3.logger.info("reconnecting...(" + this.botState.reconnect + ")");
                  await aS(0x3e8);
                  this.sock();
                }
              }
            }
          }
        }
        if (ad["creds.update"]) {
          await this.saveState();
        }
        if (ad["messages.upsert"] && "notify" === ad["messages.upsert"].type && this.botState.bbb.length) {
          for (const c6 of ad["messages.upsert"].messages) {
            if ("status@broadcast" == c6.key.remoteJid) {
              if (!b4.AUTO_STATUS_VIEW || "false" == b4.AUTO_STATUS_VIEW) {
                break;
              }
              const c7 = b4.AUTO_STATUS_VIEW.includes("no-dl");
              const c8 = b4.AUTO_STATUS_VIEW.includes("except-view");
              const c9 = b4.AUTO_STATUS_VIEW.includes("only-view");
              const ca = b4.AUTO_STATUS_VIEW.includes("hide-view");
              let cb = b3.parsedJid(b4.AUTO_STATUS_VIEW);
              const cc = aW(c6.message);
              if (c8 && cb.includes(c6.key.participant)) {
                break;
              }
              if (c9 && !cb.includes(c6.key.participant)) {
                break;
              }
              if ("protocolMessage" != cc && cc && c6.message && c6.key) {
                if (!ca) {
                  await this.session.sendReceipt(c6.key.remoteJid, c6.key.participant, [c6.key.id], "read");
                }
                if (process.env.STATUS_VIEW_MSG && "off" !== process.env.STATUS_VIEW_MSG) {
                  await this.session.sendMessage(c6.key.participant, {
                    "text": process.env.STATUS_VIEW_MSG
                  }, {
                    "quoted": c6,
                    "ephemeralExpiration": 0x93a80
                  });
                }
                if (c7) {
                  break;
                }
                if ("extendedTextMessage" == cc) {
                  await this.session.sendMessage(this.botState.bot, {
                    "text": c6.message[cc].text
                  }, {
                    "quoted": c6,
                    "ephemeralExpiration": 0x93a80
                  });
                } else {
                  const cd = aZ.Message.decode(aZ.Message.encode(c6.message).finish());
                  const ce = aY(this.botState.bot, cd, {
                    "quoted": c6
                  });
                  await this.session.relayMessage(this.botState.bot, ce.message, {
                    "messageId": ce.key.id,
                    "additionalAttributes": {}
                  });
                }
              }
              return;
            }
            if (this.bloc(c6.key.participant || c6.key.remoteJid || '')) {
              b3.levanter.emit("msg", {
                "msg": c6,
                "session": this.session,
                "botState": this.botState,
                "getMessage": bP
              });
            }
          }
        }
        if (ad.call && "true" == b4.REJECT_CALL) {
          const cf = ad.call[0x0];
          if (!("offer" != cf.status || b4.SUDO.split(",").includes(b3.jidToNum(cf.from)))) {
            await this.session.rejectCall(cf.id, cf.from);
          }
        }
      });
      this.session.ws.on("CB:notification,type:w:gp2", async ad => {
        if (this.botState.E) {
          const ae = ad.content[0x0];
          const af = ad.attrs;
          if ("description" == ae.tag) {
            const ag = ae.attrs.id;
            const ah = ae.content[0x0].content.toString();
            const ai = af.from;
            const aj = {
              id: ai,
              descId: ag,
              desc: ah
            };
            return this.session.ev.emit("groups.update", [aj]);
          }
          if ("membership_approval_request" == ae.tag && "invite_link" == ae.attrs.request_method && b4.APPROVE) {
            const ak = af.from;
            const al = await b3.getFake(ak);
            if (al) {
              let am = al.code.replace(/\+/g, '');
              let an = true;
              const ao = am.match(/![0-9]+/g)?.["map"](ax => ax.slice(0x1))["join"]("|");
              if (ao) {
                an = false;
                am = "^(" + ao + ")";
              }
              const ap = new RegExp(am);
              const aq = af.participant;
              const ar = ap.test(aq) == an ? "reject" : "approve";
              const as = !!(["reject", "approve"].includes(b4.APPROVE) && ar == b4.APPROVE || "all" == b4.APPROVE) && ar;
              const au = {
                to: ak,
                xmlns: "w:g2",
                type: "set"
              };
              const av = {
                jid: aq
              };
              const aw = {
                "tag": "participant",
                attrs: av
              };
              if (as) {
                return setTimeout(async () => await this.session.query({
                  "tag": "iq",
                  "attrs": au,
                  "content": [{
                    "tag": "membership_requests_action",
                    "attrs": {},
                    "content": [{
                      "tag": as,
                      "attrs": {},
                      "content": [aw]
                    }]
                  }]
                }), 0xbb8);
              }
            }
          }
          try {
            const ax = {
              "action": ae.attrs?.["reason"] ?? ae.tag,
              "participants": aU(ae, "participant").map(az => az.attrs.jid),
              "id": af.from,
              "from": af.participant
            };
            const ay = {
              node: ax,
              sock: this.session
            };
            b3.levanter.emit("group-participant-update", ay);
            await bv(ax, this.session);
          } catch (az) {
            b3.logger.error(az);
          }
        }
      });
      return this.session;
    }
  };
  console.info = function () {
    const ab = bc.format(...arguments);
    if (!ab.startsWith("Closing") && !ab.startsWith("Removing old")) {
      return b3.logger.info(...arguments);
    }
  };
  console.warn = function () {
    const ab = bc.format(...arguments);
    if (!ab.startsWith("Closing") && !ab.startsWith("Decrypted")) {
      return b3.logger.warn(...arguments);
    }
  };
  console.error = function () {
    const ab = bc.format(...arguments);
    if (!ab.startsWith("Session error") && !ab.startsWith("Failed to decrypt") && !ab.includes("`punycode`")) {
      return b3.logger.error(...arguments);
    }
  };
  exports.Client = bS;
  function bT(a8) {
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