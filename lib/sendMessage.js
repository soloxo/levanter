const aa = function () {
    let z = true;
    return function (A, B) {
      const E = z ? function () {
        if (B) {
          const G = B.apply(A, arguments);
          B = null;
          return G;
        }
      } : function () {};
      z = false;
      return E;
    };
  }();
  const ab = aa(this, function () {
    return ab.toString().search("(((.+)+)+)+$").toString().constructor(ab).search("(((.+)+)+)+$");
  });
  ab();
  const ac = function () {
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
  (function () {
    ac(this, function () {
      const y = new RegExp("function *\\( *\\)");
      const z = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const A = au("init");
      if (!y.test(A + "chain") || !z.test(A + "input")) {
        A("0");
      } else {
        au();
      }
    })();
  })();
  const ad = function () {
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
  const ae = ad(this, function () {
    const x = function () {
      let C;
      try {
        C = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (E) {
        C = window;
      }
      return C;
    };
    const y = x();
    const z = y.console = y.console || {};
    const A = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let B = 0x0; B < A.length; B++) {
      const C = ad.constructor.prototype.bind(ad);
      const D = A[B];
      const E = z[D] || C;
      C.__proto__ = ad.bind(ad);
      C.toString = E.toString.bind(E);
      z[D] = C;
    }
  });
  ae();
  const af = {
    stdTTL: 0xe10,
    useClones: false
  };
  const {
    WAProto: ag,
    generateWAMessageFromContent: ah,
    prepareWAMessageMedia: ai,
    extractUrlFromText: aj,
    isJidGroup: ak
  } = require("baileys");
  const al = require("node-cache");
  const {
    getUrlInfo: am
  } = require("../node_modules/baileys/lib/Utils/link-preview");
  const {
    genThumbnail: an,
    extractVideoThumb: ao,
    chats: ap
  } = require("./constant");
  const aq = new al(af);
  const ar = require("./utils");
  async function as(w) {
    if (!ak(w)) {
      return "0";
    }
    const y = await ar.store.fetchGroupMetadata(w);
    return y?.["ephemeralDuration"];
  }
  const at = async (B, C) => {
    if (C.linkPreview) {
      if (!C?.["contextInfo"]) {
        C.contextInfo = {};
      }
      C.contextInfo.externalAdReply = {
        ...C.linkPreview,
        "title": C?.["linkPreview"]["head"]
      };
      delete C.linkPreview;
    }
    let E = {};
    if ("text" in B) {
      const F = aj(B.text);
      const G = {
        ...B
      };
      let H = C?.["LinkPreview"] || aq.get(F);
      if (!H && F && !aq.has(F)) {
        try {
          const J = {
            uploadImage: C.upload
          };
          H = await am(F, J);
        } catch (K) {
          aq.set(F, null);
        }
      }
      if (H && H.title) {
        G.canonicalUrl = H["canonical-url"];
        G.matchedText = H["matched-text"];
        G.jpegThumbnail = H.jpegThumbnail;
        G.description = H.description;
        G.title = H.title;
        G.previewType = 0x0;
        const M = H.highQualityThumbnail;
        if (M) {
          G.thumbnailDirectPath = M.directPath;
          G.mediaKey = M.mediaKey;
          G.mediaKeyTimestamp = M.mediaKeyTimestamp;
          G.thumbnailWidth = M.width;
          G.thumbnailHeight = M.height;
          G.thumbnailSha256 = M.fileSha256;
          G.thumbnailEncSha256 = M.fileEncSha256;
        }
      }
      E.extendedTextMessage = G;
    } else {
      if ("contacts" in B) {
        const P = B.contacts.contacts.length;
        if (!P) {
          throw new Error("require atleast 1 contact");
        }
        if (0x1 === P) {
          E.contactMessage = ag.Message.ContactMessage.fromObject(B.contacts.contacts[0x0]);
        } else {
          E.contactsArrayMessage = ag.Message.ContactsArrayMessage.fromObject(B.contacts);
        }
      } else {
        if ("location" in B) {
          E.locationMessage = ag.Message.LocationMessage.fromObject(B.location);
        } else {
          if ("button" in B) {
            const S = B.button;
            Object.assign(S, E);
            E = {
              "buttonsMessage": S
            };
          } else {
            if ("react" in B) {
              B.react.senderTimestampMs = Date.now();
              E.reactionMessage = ag.Message.ReactionMessage.fromObject(B.react);
            } else {
              if ("list" in B) {
                const T = {
                  listMessage: B.list
                };
                E = T;
              } else {
                if ("template" in B) {
                  const W = {
                    hydratedTemplate: B.template
                  };
                  const X = {
                    templateMessage: W
                  };
                  E = X;
                } else {
                  if ("invite" in B) {
                    E = {
                      "groupInviteMessage": ag.Message.GroupInviteMessage.fromObject(B.invite)
                    };
                  } else {
                    if ("delete" in B) {
                      E.protocolMessage = {
                        "key": B["delete"],
                        "type": 0x0
                      };
                    } else {
                      if ("edit" in B) {
                        E = {
                          "protocolMessage": {
                            "key": B.edit.key,
                            "type": 0xe,
                            "editedMessage": B.edit.message ? B.edit.message : {
                              "conversation": B.edit.text
                            }
                          }
                        };
                      } else {
                        if ("image" in B) {
                          B.jpegThumbnail = await an(B.image);
                        } else {
                          if ("video" in B) {
                            const {
                              thumbnail: a2,
                              duration: a3
                            } = await ao(B.video);
                            B.jpegThumbnail = a2;
                            B.seconds = a3;
                          }
                        }
                        const a0 = {
                          ...B,
                          ...C
                        };
                        E = await ai(a0, C);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if ("viewOnce" in C) {
      E = {
        "viewOnceMessage": {
          "message": E
        }
      };
    }
    if ("contextInfo" in C) {
      const [a4] = Object.keys(E);
      E[a4].contextInfo = {
        ...E[a4]?.["contextInfo"],
        ...C.contextInfo
      } || {};
    }
    return E;
  };
  exports.prepareMessage = async (A, B, C, D) => {
    if (C.linkPreview) {
      if (!C.contextInfo) {
        C.contextInfo = {};
      }
      C.contextInfo.externalAdReply = {
        ...C.linkPreview,
        "title": C?.["linkPreview"]["head"]
      };
      delete C.linkPreview;
    }
    if (!(B.contacts || B.react || B.invite || B["delete"] || B.edit)) {
      if ("text" in B && !C.linkPreview) {
        const K = aj(B.text);
        if (K) {
          let L = aq.get(K);
          if (!L && !aq.has(K)) {
            try {
              const M = {
                uploadImage: D.waUploadToServer
              };
              L = await am(K, M);
              if (L) {
                aq.set(K, L);
              }
            } catch (O) {
              aq.set(K, null);
            }
          }
          B.linkPreview = L;
        }
      }
      if ("poll" in B) {
        B.poll.selectableCount = B.poll.selectableOptionsCount;
        B.poll.values = B.poll.options.map(({
          optionName: R
        }) => R);
      }
      B.mentions = !!C.contextInfo && C.contextInfo.mentionedJid || [];
      B.caption = !!C.caption && C.caption || undefined;
      B.gifPlayback = !!C.gifPlayback && C.gifPlayback || undefined;
      if (!C.ephemeralExpiration) {
        C.ephemeralExpiration = ar.expiration[A] || (await as(A));
      }
      if ("image" in B) {
        B.jpegThumbnail = await an(B.image);
      } else {
        if ("video" in B) {
          const {
            thumbnail: R,
            duration: S
          } = await ao(B.video);
          B.jpegThumbnail = R;
          B.seconds = S;
        }
      }
      C.getUrlInfo = null;
      try {
        const U = await D.sendMessage(A, B, C);
        ap.set('' + U.key.remoteJid + U.key.id, U);
        if (process.env.EMIT_OWN_EVENT) {
          process.nextTick(() => {
            const X = {
              messages: [U],
              type: "notify"
            };
            D.processingMutex.mutex(() => D.ev.emit("messages.upsert", X));
          });
        }
        return U;
      } catch (W) {
        throw W;
      }
    }
    const F = {};
    if ("delete" in B) {
      if (!B["delete"].fromMe && B["delete"].me) {
        const Z = B["delete"].id;
        const a0 = Math.floor(0x1 * Date.now() / 0x3e8);
        const a1 = {
          id: Z,
          fromMe: false,
          timestamp: a0
        };
        const a2 = {
          messages: [a1]
        };
        const a3 = {
          clear: a2
        };
        return await D.chatModify(a3, A, []);
      }
      F.edit = !B["delete"].fromMe && B["delete"].remoteJid.endsWith("@g.us") ? "8" : "7";
    }
    C.ephemeralExpiration = C.ephemeralExpiration ?? ar.expiration[A] ?? (await as(A));
    C.upload = D.waUploadToServer;
    if ("template" in B || "poll" in B) {
      C.ephemeralExpiration = 0x0;
    }
    C.userJid = D.user.id;
    const G = await at(B, C);
    const H = ah(A, G, C);
    try {
      await D.relayMessage(A, H.message, {
        "messageId": H.key.id,
        "additionalAttributes": F
      });
      ap.set('' + H.key.remoteJid + H.key.id, H);
      if (process.env.EMIT_OWN_EVENT) {
        process.nextTick(() => {
          const a5 = {
            messages: [H],
            type: "notify"
          };
          D.processingMutex.mutex(() => D.ev.emit("messages.upsert", a5));
        });
      }
      return H;
    } catch (a5) {
      console.log(a5);
    }
  };
  function au(w) {
    function z(A) {
      if (typeof A === "string") {
        return function (B) {}.constructor("while (true) {}").apply("counter");
      } else if (('' + A / A).length !== 0x1 || A % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
      z(++A);
    }
    try {
      if (w) {
        return z;
      } else {
        z(0x0);
      }
    } catch (A) {}
  }