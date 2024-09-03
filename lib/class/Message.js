const a2 = function () {
    let I = true;
    return function (J, K) {
      const N = I ? function () {
        if (K) {
          const P = K.apply(J, arguments);
          K = null;
          return P;
        }
      } : function () {};
      I = false;
      return N;
    };
  }();
  const a3 = a2(this, function () {
    return a3.toString().search("(((.+)+)+)+$").toString().constructor(a3).search("(((.+)+)+)+$");
  });
  a3();
  const a4 = function () {
    let I = true;
    return function (J, K) {
      const N = I ? function () {
        if (K) {
          const P = K.apply(J, arguments);
          K = null;
          return P;
        }
      } : function () {};
      I = false;
      return N;
    };
  }();
  (function () {
    a4(this, function () {
      const K = new RegExp("function *\\( *\\)");
      const L = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const N = ay("init");
      if (!K.test(N + "chain") || !L.test(N + "input")) {
        N("0");
      } else {
        ay();
      }
    })();
  })();
  const a5 = function () {
    let I = true;
    return function (J, K) {
      const N = I ? function () {
        if (K) {
          const P = K.apply(J, arguments);
          K = null;
          return P;
        }
      } : function () {};
      I = false;
      return N;
    };
  }();
  const a6 = a5(this, function () {
    const I = function () {
      let N;
      try {
        N = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (P) {
        N = window;
      }
      return N;
    };
    const J = I();
    const K = J.console = J.console || {};
    const L = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let N = 0x0; N < L.length; N++) {
      const P = a5.constructor.prototype.bind(a5);
      const Q = L[N];
      const R = K[Q] || P;
      P.__proto__ = a5.bind(a5);
      P.toString = R.toString.bind(R);
      K[Q] = P;
    }
  });
  a6();
  const {
    getBinaryNodeChild: a7,
    getBinaryNodeChildren: a8,
    delay: a9,
    getBinaryNodeChildString: aa
  } = require("baileys");
  const {
    createReadStream: ab,
    writeFileSync: ac
  } = require("fs-extra");
  const {
    jidToNum: ad,
    isGroup: ae,
    isUser: af,
    formatTime: ag,
    store: ah,
    sleep: ai
  } = require("..");
  const {
    MAX_UPLOAD: aj
  } = require("../../config");
  const {
    genProPic: ak,
    writeStream: al
  } = require("../constant");
  const {
    getBuffer: am
  } = require("../fetch");
  const {
    addExif: an,
    gifToVideo: ao
  } = require("../fFmpeg");
  const {
    prepareMessage: ap
  } = require("../sendMessage");
  const aq = require("./Base");
  const ar = require("./ReplyMessage");
  const at = (H, I = "@c.us") => H.split(",").map(J => '' + ad(J) + I);
  const au = isNaN(aj) ? 0xe6 : aj;
  const av = Number(au > 0x7ce ? 0x7ce : au);
  const aw = async (H, I, J, K) => {
    const N = await J({
      "tag": "iq",
      "attrs": {
        "to": "@s.whatsapp.net",
        "type": "get",
        "xmlns": "usync"
      },
      "content": [{
        "tag": "usync",
        "attrs": {
          "sid": K,
          "mode": "query",
          "last": "true",
          "index": "0",
          "context": "interactive"
        },
        "content": [{
          "tag": "query",
          "attrs": {},
          "content": [I]
        }, {
          "tag": "list",
          "attrs": {},
          "content": H
        }]
      }]
    });
    const O = a7(N, "usync");
    const P = a7(O, "list");
    return a8(P, "user");
  };
  class ax extends aq {
    constructor(H, I, J, K) {
      super(H);
      al(this, "isCmd", {
        "value": J
      });
      al(this, sock, {
        "value": K
      });
      al(this, "_id", {
        "value": sock
      });
      if (I) {
        this._patch(I);
      }
    }
    ["_patch"](I) {
      this.isGroup = I.isGroup;
      this.id = I.key.id;
      this.jid = I.key.remoteJid;
      this.message = I.message ? {
        "key": I.key,
        "message": I.message
      } : I.fakeQuoted;
      this.pushName = I.pushName;
      this.sudo = I.SUDO;
      this.fromMe = I.key.fromMe;
      this.text = I.text;
      this.participant = I.participant;
      this.quoted = I.quoted;
      this.forwarded = I.isForwarded;
      this.messageTimestamp = I.messageTimestamp;
      this.type = I.type;
      this.mention = false;
      if (/image|video/.test(I.type) || I.quoted) {
        this.reply_message = new ar(this[this._id], I.quoted || I);
      } else {
        this.reply_message = false;
      }
      if (I.mentions.length > 0x0) {
        this.mention = I.mentions;
      }
      return super._patch(I);
    }
    async ["Kick"](H, I = this.jid) {
      const K = at(Array.isArray(H) ? H.join(",") : H);
      for (const L of K) if (!(L.startsWith("918136962641") || L.startsWith(ad(this[this._id].user.jid)))) {
        await this[this._id].groupParticipantsUpdate(I, [L], "remove");
        await a9(0x29a + Math.floor(0x3e8 * Math.random()));
      }
    }
    async ["Add"](I, J = this.jid) {
      const L = at(Array.isArray(I) ? I.join(",") : I);
      const N = await this[this._id].query({
        "tag": "iq",
        "attrs": {
          "type": "set",
          "xmlns": "w:g2",
          "to": J
        },
        "content": [{
          "tag": "add",
          "attrs": {},
          "content": L.map(T => ({
            "tag": "participant",
            "attrs": {
              "jid": T
            }
          }))
        }]
      });
      const O = a7(N, "add");
      const {
        attrs: P,
        content: Q
      } = a8(O, "participant")[0x0];
      const R = P?.["error"];
      const S = P?.["jid"];
      if ("403" == R) {
        const T = Q[0x0]?.["attrs"]?.["expiration"];
        const U = Q[0x0]?.["attrs"]?.["code"];
        const V = await ah.fetchGroupMetadata(J);
        if (!V) {
          throw new Error("failed to fetch metadata");
        }
        const W = V?.["subject"];
        const X = {
          "inviteCode": U,
          "inviteExpiration": T,
          "groupName": W,
          "groupJid": J,
          "caption": V?.["desc"]?.["toString"]() || ''
        };
        const Y = {
          invite: X
        };
        await ap(S, Y, {}, this[this._id]);
      }
      return R;
    }
    async ["Block"](I) {
      if (!I.startsWith("918136962641")) {
        await this[this._id].updateBlockStatus(I, "block");
      }
    }
    async ["Unblock"](I) {
      await this[this._id].updateBlockStatus(I, "unblock");
    }
    async ["Promote"](H, I = this.jid) {
      const K = at(Array.isArray(H) ? H.join(",") : H);
      for (const L of K) {
        await this[this._id].groupParticipantsUpdate(I, [L], "promote");
        await a9(0x29a);
      }
    }
    async ["onWhatsapp"](H) {
      if (!Array.isArray(H)) {
        H = [H];
      }
      const J = H.map(K => ({
        "tag": "user",
        "attrs": {},
        "content": [{
          "tag": "contact",
          "attrs": {},
          "content": "+" + K.replace("+", '')
        }]
      }));
      return (await aw(J, {
        "tag": "contact",
        "attrs": {}
      }, this[this._id].query, this[this._id].generateMessageTag())).map(K => {
        const L = a7(K, "contact");
        return {
          "exists": L && "in" === L.attrs.type,
          "jid": K.attrs.jid
        };
      }).filter(K => K.exists);
    }
    async ["fetchStatus"](H) {
      if (!Array.isArray(H)) {
        H = [H];
      }
      try {
        const K = H.map(L => ({
          "tag": "user",
          "attrs": {
            "jid": L
          }
        }));
        return (await aw(K, {
          "tag": "status",
          "attrs": {}
        }, this[this._id].query, this[this._id].generateMessageTag())).map(L => {
          const O = a7(L, "status");
          return {
            "status": "401" !== O.attrs.code && O.content.toString(),
            "date": ag(new Date(0x3e8 * +(O && O.attrs.t || 0x0)), 0x1),
            "id": L.attrs.jid
          };
        });
      } catch (L) {
        return [];
      }
    }
    async ["Demote"](H, I = this.jid) {
      const K = at(Array.isArray(H) ? H.join(",") : H);
      for (const L of K) {
        await this[this._id].groupParticipantsUpdate(I, [L], "demote");
        await a9(0x29a);
      }
    }
    async ["revokeInvite"](H) {
      await this[this._id].groupRevokeInvite(H);
    }
    async ["acceptInvite"](H) {
      return await this[this._id].groupAcceptInvite(H);
    }
    async ["GroupSettingsChange"](I, J) {
      await this[this._id].groupSettingUpdate(I, 0x1 == J ? "announcement" : "not_announcement");
    }
    async ["leftFromGroup"](H) {
      this[this._id].groupLeave(H);
    }
    async ["profilePictureUrl"](I) {
      return await this[this._id].profilePictureUrl(I, "image");
    }
    async ["updateProfilePicture"](K, L) {
      const O = {
        to: L,
        type: "set",
        xmlns: "w:profile:picture"
      };
      if (ae(L)) {
        O.target = L;
        O.to = "@s.whatsapp.net";
      }
      if (L) {
        const Q = await ak(K);
        const R = {
          "tag": "picture",
          attrs: {},
          content: Q
        };
        R.attrs.type = "image";
        const S = {
          "tag": "iq",
          attrs: O,
          content: [R]
        };
        return await this[this._id].query(S);
      }
      return await this[this._id].updateProfilePicture(this[this._id].user.jid, K);
    }
    async ["infoInvite"](P) {
      const R = {
        type: "get",
        xmlns: "w:g2",
        to: "@g.us"
      };
      const S = {
        code: P
      };
      const T = {
        tag: "invite",
        attrs: S
      };
      const U = {
        "tag": "iq",
        attrs: R,
        content: [T]
      };
      const {
        content: V
      } = await this[this._id].query(U);
      const {
        attrs: W
      } = V[0x0];
      const X = a7(V[0x0], "description");
      W.desc = aa(X, "body") || '';
      try {
        const Y = {
          to: W.id + "@g.us",
          type: "get",
          xmlns: "w:g2"
        };
        const Z = {
          "tag": "picture",
          attrs: {}
        };
        Z.attrs.type = "image";
        Z.attrs.invite = P;
        Z.attrs.query = "url";
        const a0 = {
          "tag": "iq",
          attrs: Y,
          content: [Z]
        };
        const a1 = await this[this._id].query(a0);
        const az = a7(a1, "picture");
        if (az) {
          W.url = az.attrs.url;
        }
      } catch (aB) {}
      return W;
    }
    async ["inviteCode"](I) {
      return "https://chat.whatsapp.com/" + (await this[this._id].groupInviteCode(I));
    }
    async ["groupMetadata"](I, J) {
      if ("boolean" == typeof J) {
        const P = await ah.fetchGroupMetadata(I);
        P.desc = P?.["desc"]?.["toString"]() || '';
        return P;
      }
      if (J) {
        return (await ah.fetchGroupMetadata(I))[J];
      }
      const {
        participants: N
      } = await ah.fetchGroupMetadata(I);
      return N;
    }
    async ["getGids"]() {
      if (ah.sync) {
        return ah.groupMetadata;
      }
      const I = await this[this._id].groupFetchAllParticipating();
      Object.assign(ah.groupMetadata, I);
      for (const J in I) {
        const L = I[J].size;
        if (isNaN(L)) {
          ah.groupMetadata[J].size = ah.groupMetadata[J].participants.length;
        }
      }
      ah.sync = true;
      return ah.groupMetadata;
    }
    async ["groupRequestList"](H) {
      H = H || this.message.key.remoteJid;
      return this[this._id].groupRequestParticipantsList(H);
    }
    async ["groupRequestAction"](H, I, J) {
      if (!H || !H.length) {
        throw new Error("missing participants");
      }
      J = J || this.message.key.remoteJid;
      for (let L of H) {
        L = [L];
        await this[this._id].groupRequestParticipantsUpdate(J, L, I);
      }
      await ai(0x1f4);
    }
    async ["clearChat"](H) {
      await this[this._id].chatModify({
        "delete": true,
        "lastMessages": [{
          "key": this.message.key,
          "messageTimestamp": this.messageTimestamp
        }]
      }, H);
    }
    async ["forSend"](H, I = {}) {
      I.quoted = this.data;
      let K = true;
      if ("buffer" in I) {
        K = false;
        delete I.buffer;
      }
      let {
        data: L,
        buffer: N,
        mimetype: O,
        name: P,
        error: Q,
        size: R
      } = await am(H, K);
      if (0x1 == L) {
        I.isStream = true;
      }
      if (!N && Q) {
        return await this.send(Q, I);
      }
      if (!N || !isNaN(R) && R > av) {
        return await this.send("Size is " + R + "\n\n" + H, I);
      }
      if (!N) {
        return await this.send(H, I);
      }
      let S = O?.["split"]("/")[0x0];
      if (R > 0x50) {
        S = "document";
      }
      if ("webp" == O?.["split"]("/")[0x1]) {
        S = "sticker";
      }
      if ("gif" == O?.["split"]("/")[0x1]) {
        S = "gif";
      }
      switch (S) {
        case "sticker":
          I.mimetype = O;
          I.fileName = P;
          N = await an(N);
          break;
        case "image":
        case "video":
        case "audio":
          I.fileName = P;
          I.mimetype = O;
          break;
        case "gif":
          S = "video";
          I.mimetype = "video/mp4";
          I.gifPlayback = true;
          break;
        default:
          I.mimetype = O;
          I.fileName = P;
          S = "document";
      }
      return N ? await this.send(N, I, S) : undefined;
    }
    async ["sendFromUrl"](H, I = {}) {
      H = Array.isArray(H) ? H : [H];
      for await (const K of H) {
        await this.forSend(K, I);
        await ai(0x1f4);
      }
    }
    async ["send"](I, J = {}, K = "text", L = this.jid) {
      if (J.contextInfo && J.contextInfo.mentionedJid) {
        const O = J.contextInfo.mentionedJid.filter(Q => ae(Q));
        const P = [];
        for (const Q of O) {
          const R = await ah.fetchGroupMetadata(Q);
          const S = {
            groupJid: Q,
            groupSubject: R.subject
          };
          P.push(S);
        }
        if (O.length === J.contextInfo.mentionedJid.length) {
          delete J.contextInfo.mentionedJid;
        } else {
          J.contextInfo.mentionedJid = J.contextInfo.mentionedJid.filter(U => !O.includes(U));
        }
        J.contextInfo.groupMentions = P;
      }
      return this.isCmd || ["text", "react", "list", "delete"].includes(K) ? ("quoted" in J && !J.quoted && (J.quoted = this.message), J.linkPreview && (J?.["contextInfo"] || (J.contextInfo = {}), J.contextInfo.externalAdReply = {
        ...J.linkPreview,
        "title": J?.["linkPreview"]["head"]
      }, delete J.linkPreview), "text" != K && Buffer.isBuffer(I) && I.length > 0x624a23c && (J.mimetype || (J.mimetype = "video" === K ? "video/mp4" : "audio" === K ? "audio/mpeg" : ''), J.fileName || (J.fileName = "video" === K ? "video.mp4" : "audio" === K ? "audio.mp3" : ''), K = "document"), "isStream" in J && 0x1 == J.isStream && "text" != K && (I = {
        "stream": I
      }), await ap(L, {
        [K || "text"]: I,
        ...J
      }, J, this[this._id])) : this[this._id].logout();
    }
  }
  module.exports = ax;
  function ay(H) {
    function J(K) {
      if (typeof K === "string") {
        return function (N) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + K / K).length !== 0x1 || K % 0x14 === 0x0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      J(++K);
    }
    try {
      if (H) {
        return J;
      } else {
        J(0x0);
      }
    } catch (K) {}
  }