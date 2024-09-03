const au = function () {
    let m = true;
    return function (p, q) {
      const u = m ? function () {
        if (q) {
          const x = q.apply(p, arguments);
          q = null;
          return x;
        }
      } : function () {};
      m = false;
      return u;
    };
  }();
  const av = au(this, function () {
    return av.toString().search("(((.+)+)+)+$").toString().constructor(av).search("(((.+)+)+)+$");
  });
  av();
  const aw = function () {
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
  (function () {
    aw(this, function () {
      const p = new RegExp("function *\\( *\\)");
      const q = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const u = aF("init");
      if (!p.test(u + "chain") || !q.test(u + "input")) {
        u("0");
      } else {
        aF();
      }
    })();
  })();
  const ax = function () {
    let m = true;
    return function (p, q) {
      const w = m ? function () {
        if (q) {
          const x = q.apply(p, arguments);
          q = null;
          return x;
        }
      } : function () {};
      m = false;
      return w;
    };
  }();
  const ay = ax(this, function () {
    let m;
    try {
      const v = Function("return (function() {}.constructor(\"return this\")( ));");
      m = v();
    } catch (w) {
      m = window;
    }
    const p = m.console = m.console || {};
    const q = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let y = 0x0; y < q.length; y++) {
      const z = ax.constructor.prototype.bind(ax);
      const A = q[y];
      const B = p[A] || z;
      z.__proto__ = ax.bind(ax);
      z.toString = B.toString.bind(B);
      p[A] = z;
    }
  });
  ay();
  const az = require("got");
  const aB = require("../test/test");
  const aC = aB.iChecker();
  const aD = aC == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
  const aE = require("cheerio");
  if (aD) {
    function aG(...l) {
      function p(q, u, v) {
        const x = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/".split('');
        const y = x.slice(0x0, u);
        const z = x.slice(0x0, v);
        let A = q.split('').reverse().reduce(function (C, D, E) {
          if (-0x1 !== y.indexOf(D)) {
            return C + y.indexOf(D) * Math.pow(u, E);
          }
        }, 0x0);
        let B = '';
        for (; A > 0x0;) {
          B = z[A % v] + B;
          A = (A - A % v) / v;
        }
        return B || "0";
      }
      return function (q, u, v, w, x, y) {
        y = '';
        let z = 0x0;
        for (let A = q.length; z < A; z++) {
          let B = '';
          for (; q[z] !== v[x];) {
            B += q[z];
            z++;
          }
          for (let C = 0x0; C < v.length; C++) {
            B = B.replace(new RegExp(v[C], "g"), C.toString());
          }
          y += String.fromCharCode(p(B, x, 0xa) - w);
        }
        return decodeURIComponent(encodeURIComponent(y));
      }(...l);
    }
    const aH = {
      "id0": async m => {
        try {
          const v = await az("https://snaptik.app/ID");
          const w = v.headers["set-cookie"]?.["map"](E => E.split(";")[0x0])["join"]("; ");
          const x = aE.load(v.body);
          const y = await az("https://snaptik.app/abc2.php", {
            "headers": {
              "cookie": w || "PHPSESSID=gphtms9fofqm2fikr9ofqrld25; current_language=ID; ref=google; __cflb=04dToWzoGizosSfR1ww5Ce8foMmhJkC5absiUehuAK; _ga=GA1.2.500024560.1646295641; _gid=GA1.2.786638280.1646295641; __gads=ID=2d9fb59650bbba88-22611414cbd0004a:T=1646295642:RT=1646295642:S=ALNI_MbDUnOcA1ZoJcH9yeqYgALtEC3W2w; ads_new=1; __cfruid=e4d99b4f4c1cabd9c94cc558b0c7eee4d7508448-1646295654; _gat=1",
              "referer": "https://snaptik.app/ID",
              "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36"
            },
            "searchParams": {
              "url": encodeURI(m),
              "lang": "ID",
              "token": x("input[name=\"token\"]").val()
            }
          }).text();
          const z = y.split("))</script>")[0x0].split("decodeURIComponent(escape(r))}(")[0x1]?.["split"](",")?.["map"](E => E.replace(/^"/, '').replace(/"$/, '').trim());
          if (!Array.isArray(z) || 0x6 !== z.length) {
            return false;
          }
          const A = aG(...z);
          const B = A.split(".innerHTML =")?.[0x1]["split"]("$(\".contents\")")?.[0x0]?.["replace"](/\\(\\)?/g, '');
          if (!B) {
            return {};
          }
          const C = aE.load(B)("body > div > div.video-links").find("a");
          let D = C.eq(0x0).attr("href");
          if (!/https?:\/\//.test(D)) {
            D = "https://snaptik.app" + D;
          }
          return {
            "url1": C.eq(0x0).attr("href"),
            "url2": D
          };
        } catch (E) {
          return false;
        }
      },
      "id1": async l => {
        try {
          const u = await az("https://ssstik.io/id");
          const v = u.headers["set-cookie"]?.["map"](A => A.split(";")[0x0])["join"]("; ");
          const w = await az("https://ssstik.io/abc?url=dl", {
            "method": "POST",
            "headers": {
              "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
              "cookie": v || "PHPSESSID=gb6hgnvvpkfg28ulo80l1u2qrl; __cflb=02DiuEcwseaiqqyPC5pE7Qjdp2jcR2J5YEMX3jgTCHMYX; _ga=GA1.2.1294804934.1647840559; _gid=GA1.2.1211588131.1647840559; __gads=ID=3ba3f6d3a5959cb0-224bbeea15d100da:T=1647840559:RT=1647840559:S=ALNI_MYtTuJ9ICRAeHGfemUzb2rwyaT6lw; ga_show=2; _gat_UA-3524196-6=1",
              "hx-current-url": "https://ssstik.io/id",
              "hx-request": "true",
              "hx-target": "target",
              "hx-trigger": " _gcaptcha_pt",
              "origin": "https://ssstik.io",
              "referer": "https://ssstik.io/id",
              "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537"
            },
            "form": {
              "id": encodeURI(l),
              "locale": "id",
              "tt": "QjhzRjQ_"
            }
          }).text();
          const x = aE.load(w)("a.pure-button");
          let y = x.eq(0x0).attr("href");
          if (!/https?:\/\//.test(y) && y) {
            y = "https://ssstik.io" + y;
          }
          let z = x.eq(0x1).attr("href");
          if (y && "https://ssstik.io" !== y) {
            return {
              "url1": y,
              "url2": "#" === z ? y : z
            };
          }
        } catch (A) {
          false;
          return false;
        }
      },
      "id2": async q => {
        const u = {
          ykNiz: function (w, z) {
            return w === z;
          },
          yyBqX: "dZayD",
          WGxGV: "hPTen",
          TtknY: "https://api.tikmate.app/api/lookup",
          pbPlK: "*/*",
          OhIdu: "en-US,en;q=0.9",
          cHIrt: "application/x-www-form-urlencoded; charset=UTF-8",
          EoWbd: "https://tikmate.app",
          KFrUW: "https://tikmate.app/",
          QugQA: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
          RoLuC: "QuOay"
        };
        const v = u;
        try {
          if (v.ykNiz(v.yyBqX, v.WGxGV)) {
            const x = w ? function () {
              if (x) {
                const K = G.apply(H, arguments);
                I = null;
                return K;
              }
            } : function () {};
            B = false;
            return x;
          } else {
            const x = {
              url: q
            };
            const y = await az.post(v.TtknY, {
              "headers": {
                "accept": v.pbPlK,
                "accept-language": v.OhIdu,
                "content-type": v.cHIrt,
                "origin": v.EoWbd,
                "referer": v.KFrUW,
                "user-agent": v.QugQA
              },
              "form": x
            }).json();
            const z = {
              url1: "https://tikmate.app/download/" + y.token + "/" + y.id + ".mp4",
              url2: "https://tikmate.app/download/" + y.token + "/" + y.id + ".mp4?hd=1"
            };
            return z;
          }
        } catch (A) {
          if (v.ykNiz(v.RoLuC, v.RoLuC)) {
            return false;
          } else {
            const C = q.apply(u, arguments);
            v = null;
            return C;
          }
        }
      }
    };
    exports.tiktok = async m => {
      for (const u in aH) {
        const w = await aH[u](m);
        if (w) {
          return w;
        }
      }
      return false;
    };
    exports.tiktok("https://www.tiktok.com/@dangdhoet/video/7297108046092750086?is_from_webapp=1&sender_device=mobile&sender_web_id=7327884106363422216").then(l => console.log(l));
  }
  function aF(l) {
    function p(q) {
      if (typeof q === "string") {
        return function (w) {}.constructor("while (true) {}").apply("counter");
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
    } catch (q) {}
  }