const W = function () {
    let q = true;
    return function (u, v) {
      const y = q ? function () {
        if (v) {
          const A = v.apply(u, arguments);
          v = null;
          return A;
        }
      } : function () {};
      q = false;
      return y;
    };
  }();
  const X = W(this, function () {
    return X.toString().search("(((.+)+)+)+$").toString().constructor(X).search("(((.+)+)+)+$");
  });
  X();
  const Y = function () {
    let m = true;
    return function (p, q) {
      const w = m ? function () {
        if (q) {
          const A = q.apply(p, arguments);
          q = null;
          return A;
        }
      } : function () {};
      m = false;
      return w;
    };
  }();
  (function () {
    Y(this, function () {
      const q = new RegExp("function *\\( *\\)");
      const u = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const v = a9("init");
      if (!q.test(v + "chain") || !u.test(v + "input")) {
        v("0");
      } else {
        a9();
      }
    })();
  })();
  const Z = function () {
    let q = true;
    return function (u, v) {
      const x = q ? function () {
        if (v) {
          const z = v.apply(u, arguments);
          v = null;
          return z;
        }
      } : function () {};
      q = false;
      return x;
    };
  }();
  const a0 = Z(this, function () {
    const m = function () {
      let x;
      try {
        x = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (z) {
        x = window;
      }
      return x;
    };
    const p = m();
    const q = p.console = p.console || {};
    const u = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let v = 0x0; v < u.length; v++) {
      const x = Z.constructor.prototype.bind(Z);
      const y = u[v];
      const z = q[y] || x;
      x.__proto__ = Z.bind(Z);
      x.toString = z.toString.bind(z);
      q[y] = x;
    }
  });
  a0();
  const a1 = require("baileys");
  const a2 = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');
  const a3 = (l = '') => l.replace("@s.whatsapp.net", '');
  const a4 = require("./utils");
  function a5(m) {
    const p = {
      id: m,
      longest_word: '',
      word_count: 0x0,
      letter_count: 0x0
    };
    return p;
  }
  function a6(m) {
    for (let u = m.length - 0x1; u > 0x0; u--) {
      const w = Math.floor(Math.random() * (u + 0x1));
      const x = m[u];
      m[u] = m[w];
      m[w] = x;
    }
    return m;
  }
  function a8(l) {
    const m = new Date(null);
    m.setSeconds(l);
    return m.toISOString().slice(0xb, 0x13);
  }
  exports.wcg = {
    "ie": '',
    "session": '',
    "bind": function (l) {
      this.session = l;
    },
    "room": {},
    "end": async function (m, p) {
      if (this.room[m] && this.room[m].c === p) {
        this.room[m].state = -0x1;
        delete this.room[m];
        await this.session.sendMessage(m, {
          "text": "Game Ends"
        }, {
          "ephemeralExpiration": a4.expiration[m]
        });
      }
    },
    "quit": async function (m, p) {
      if (0x0 === this.room[m].state && this.room[m].players[p]) {
        delete this.room[m].players[p];
        this.room[m].participants = this.room[m].participants.filter(v => v != p);
      }
    },
    "get_char": function (m, p) {
      const v = "random" === this.room[m].mode ? a2[Math.round(Math.random() * a2.length)] || "L" : p.charAt(p.length - 0x1).toUpperCase();
      this.room[m].current.letter = v;
    },
    "start_game": async function (p, q, u, v = "easy") {
      const y = {
        player: '',
        size: 0x3,
        time: 0x28,
        next: '',
        letter: ''
      };
      if (!(p in this.room)) {
        this.room[p] = {
          "m": "hard" === v.toLowerCase(),
          "mode": u,
          "c": q,
          "start": 0x0,
          "state": 0x0,
          "paused": false,
          "used": [],
          "players": {},
          "joined": 0x0,
          "time": 0x3b,
          "words": 0x0,
          "round": 0x0,
          "i": 0x0,
          "cool": 0x28,
          "participants": [],
          "current": y
        };
        await this.main(p, q);
      }
    },
    "exist": function (l) {
      return this.ie.isWord(l.toLowerCase());
    },
    "start": async function (m, p) {
      if (m in this.room && 0x0 == this.room[m].state && this.room[m].c === p) {
        this.room[m].time = 0x0;
      }
    },
    "isWord": async function (v, w, x, y) {
      if (!(v in this.room) || 0x1 != this.room[v].state || this.room[v].current.player != w || !this.room[v].participants.includes(w)) {
        return false;
      }
      if (this.room[v].paused) {
        return;
      }
      const B = {
        text: "_Already Used this Word!_"
      };
      x = x.toLowerCase();
      if (this.room[v].used.includes(x)) {
        return await this.session.sendMessage(v, B, {
          "ephemeralExpiration": a4.expiration[v],
          "quoted": y
        });
      }
      if (x.charAt(0x0).toUpperCase() != this.room[v].current.letter) {
        return await this.session.sendMessage(v, {
          "text": "_Not Starting with " + this.room[v].current.letter + "_"
        }, {
          "ephemeralExpiration": a4.expiration[v],
          "quoted": y
        });
      }
      if (x.length < this.room[v].current.size) {
        return await this.session.sendMessage(v, {
          "text": "_This word length is less than " + this.room[v].current.size + "_"
        }, {
          "ephemeralExpiration": a4.expiration[v],
          "quoted": y
        });
      }
      const C = {
        text: "_This word is not in my words list_"
      };
      if (!this.ie.isWord(x)) {
        return await this.session.sendMessage(v, C, {
          "ephemeralExpiration": a4.expiration[v],
          "quoted": y
        });
      }
      this.room[v].paused = true;
      this.room[v].current.time = this.room[v].cool;
      this.room[v].used.push(x);
      this.room[v].words++;
      const D = {
        text: "✅",
        key: y.key
      };
      const E = {
        react: D
      };
      this.get_char(v, x);
      this.room[v].players[w].word_count++;
      if (x.length > this.room[v].players[w].letter_count) {
        this.room[v].players[w].longest_word = x;
        this.room[v].players[w].letter_count = x.length;
      }
      await this.trun(v);
      await a1.delay(0xc8);
      await this.session.sendMessage(v, E, {
        "ephemeralExpiration": a4.expiration[v]
      });
      return true;
    },
    "trun": async function (l) {
      if (this.room[l]) {
        if (this.room[l].i <= 0x0) {
          this.room[l].i = this.room[l].participants.length;
          if (this.room[l].m && this.room[l].current.size < 0xd || this.room[l].round % 0x3 == 0x0 && this.room[l].current.size < 0xd) {
            this.room[l].current.size++;
          }
          if (this.room[l].m && this.room[l].cool > 0x14 || this.room[l].cool > 0x14 && this.room[l].round % 0x4 == 0x0) {
            this.room[l].cool -= 0x5;
          }
          this.room[l].round++;
        }
        this.room[l].i--;
        this.room[l].current.time = this.room[l].cool;
        this.room[l].current.player = this.room[l].participants[0x0];
        this.room[l].current.next = this.room[l].participants[0x1];
        this.room[l].participants.push(this.room[l].participants.shift());
        await this.session.sendMessage(l, {
          "text": "🎲Turn : @" + a3(this.room[l].current.player) + "\n🙌Next : @" + a3(this.room[l].current.next) + "\n🆎Your word must start with *" + this.room[l].current.letter + "* and include at least *" + this.room[l].current.size + "* letters\n🏆Players remaining : " + this.room[l].participants.length + "/" + this.room[l].joined + "\n⏳You have *" + this.room[l].current.time + "s* to answer\n📝Total words : " + this.room[l].words,
          "mentions": [this.room[l].current.player, this.room[l].current.next]
        }, {
          "ephemeralExpiration": a4.expiration[l]
        });
        this.room[l].paused = false;
      }
    },
    "sub_main": async function (l) {
      if (this.room[l]) {
        this.room[l].start = new Date().getTime();
        this.room[l].participants = a6(this.room[l].participants);
        this.room[l].current.letter = a2[Math.round(Math.random() * a2.length)] || "L";
        this.room[l].i = this.room[l].participants.length;
        for (await this.trun(l); 0x1 == this.room[l].state;) {
          await a1.delay(0x3e8);
          if (!this.session) {
            continue;
          }
          this.room[l].current.time--;
          const q = this.room[l].participants.length;
          const u = this.room[l].current.player;
          const v = this.room[l].current.next;
          if (this.room[l].current.time < 0x0) {
            this.room[l].participants = this.room[l].participants.filter(x => x != u);
            await this.session.sendMessage(l, {
              "text": "@" + a3(u) + " ran out of time! They're out! 🚫",
              "mentions": [u]
            }, {
              "ephemeralExpiration": a4.expiration[l]
            });
            if (0x2 == q) {
              const y = new Date().getTime() / 0x3e8 - this.room[l].start / 0x3e8;
              const z = Object.values(this.room[l].players).reduce((A, B) => B.letter_count > A.letter_count ? B : A);
              this.room[l].state = -0x1;
              await this.session.sendMessage(l, {
                "text": "@" + a3(v) + " Won 🏆\nWords : *" + this.room[l].words + "*\nLongest word : *" + z.longest_word + " (" + z.letter_count + ")* by @" + a3(z.id) + " 📚\nTime : *" + a8(y) + "* ⏱️",
                "mentions": [v, z.id]
              }, {
                "ephemeralExpiration": a4.expiration[l]
              });
              return delete this.room[l];
            }
            await this.trun(l);
          }
        }
      }
    },
    "join": async function (l, m) {
      return l in this.room && !(m in this.room[l].players) && 0x0 == this.room[l].state && !this.room[l].paused && (this.room[l].players[m] = a5(m), this.room[l].participants.push(m), this.room[l].joined++, await this.session.sendMessage(l, {
        "text": "@" + a3(m) + " Joined 👏",
        "mentions": [m]
      }, {
        "ephemeralExpiration": a4.expiration[l]
      }), true);
    },
    "main": async function (l, m) {
      await this.session.sendMessage(l, {
        "text": "🎮 Game starting...\n👥 Needs 2 or more players 🙋‍♂️🙋‍♀️\n⏳ 60 seconds left to join ⏳\n🧩 Mode " + (this.room[l].m ? "hard" : "easy")
      }, {
        "ephemeralExpiration": a4.expiration[l]
      });
      await a1.delay(0xc8);
      for (await this.join(l, m); this.room[l] && 0x0 == this.room[l].state;) {
        if (!this.room[l]) {
          return;
        }
        await a1.delay(0x3e8);
        if (this.session) {
          if (!(this.room[l].time > 0x0)) {
            return this.room[l].participants.length < 0x2 ? (this.room[l].paused = true, await this.session.sendMessage(l, {
              "text": "_Not enough players. Game terminated._"
            }, {
              "ephemeralExpiration": a4.expiration[l]
            }), void delete this.room[l]) : (this.room[l].state = 0x1, void this.sub_main(l));
          }
          this.room[l].time--;
          if ([0xf, 0x1e, 0x2c].includes(this.room[l].time)) {
            await this.session.sendMessage(l, {
              "text": "🎮 Game starts in " + this.room[l].time + " seconds ⏳\nType *join* to play 🙋‍♂️🙋‍♀️\n🧩 Mode " + (this.room[l].m ? "hard" : "easy") + (this.room[l].participants.length > 0x1 ? "\n\n👥 " + this.room[l].participants.length + " players joined." : '')
            }, {
              "ephemeralExpiration": a4.expiration[l]
            });
          }
        }
      }
    }
  };
  function a9(l) {
    function p(q) {
      if (typeof q === "string") {
        return function (x) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + q / q).length !== 0x1 || q % 0x14 === 0x0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      p(++q);
    }
    try {
      if (l) {
        return p;
      } else {
        p(0x0);
      }
    } catch (w) {}
  }