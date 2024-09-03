const W = function () {
    let p = true;
    return function (q, s) {
      const w = p ? function () {
        if (s) {
          const y = s.apply(q, arguments);
          s = null;
          return y;
        }
      } : function () {};
      p = false;
      return w;
    };
  }();
  const X = W(this, function () {
    return X.toString().search("(((.+)+)+)+$").toString().constructor(X).search("(((.+)+)+)+$");
  });
  X();
  const Y = function () {
    let p = true;
    return function (q, s) {
      const v = p ? function () {
        if (s) {
          const w = s.apply(q, arguments);
          s = null;
          return w;
        }
      } : function () {};
      p = false;
      return v;
    };
  }();
  (function () {
    Y(this, function () {
      const p = new RegExp("function *\\( *\\)");
      const q = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const s = a9("init");
      if (!p.test(s + "chain") || !q.test(s + "input")) {
        s("0");
      } else {
        a9();
      }
    })();
  })();
  const Z = function () {
    let p = true;
    return function (q, s) {
      const w = p ? function () {
        if (s) {
          const A = s.apply(q, arguments);
          s = null;
          return A;
        }
      } : function () {};
      p = false;
      return w;
    };
  }();
  const a0 = Z(this, function () {
    let p;
    try {
      const u = Function("return (function() {}.constructor(\"return this\")( ));");
      p = u();
    } catch (w) {
      p = window;
    }
    const q = p.console = p.console || {};
    const s = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let y = 0x0; y < s.length; y++) {
      const z = Z.constructor.prototype.bind(Z);
      const A = s[y];
      const B = q[A] || z;
      z.__proto__ = Z.bind(Z);
      z.toString = B.toString.bind(B);
      q[A] = z;
    }
  });
  a0();
  const a1 = require("cheerio");
  const a2 = {};
  const a3 = require("got");
  const a4 = require("../fetch");
  const {
    iChecker: a6
  } = require("../test/test");
  const a7 = a6();
  const a8 = a7 == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
  if (a8) {
    exports.y2mate = {
      "get": async function (v) {
        try {
          const J = await a4.getJson("https://right-annmaria-lev-8a3a4814.koyeb.app/y2get?id=" + v);
          if (J) {
            return J;
          }
        } catch (L) {}
        const x = {
          "url": "https://www.youtube.com/watch?v=" + v,
          q_auto: 0x0,
          ajax: 0x1
        };
        const z = await a3.post("https://www.y2mate.com/mates/analyze/ajax", {
          "headers": {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "cookie": "_ga=GA1.2.1405332118.1641699259; _gid=GA1.2.70284915.1642387108; _gat_gtag_UA_84863187_23=1",
            "origin": "https://www.y2mate.com"
          },
          "form": x
        }).json();
        const A = a1.load(z.result);
        const B = (/var k__id = "(.*?)"/.exec(A.html()) || ['', ''])[0x1];
        const C = (/var k_data_vid = "(.*?)"/.exec(A.html()) || ['', ''])[0x1];
        const D = A(".video-thumbnail > img").attr("src");
        const E = A("div.caption > b").text().trim();
        const F = {};
        const G = {};
        A("#mp4 > table > tbody > tr").each(function () {
          const N = A(this).find("td");
          const O = "mp4" == N.find("a").attr("data-ftype");
          const P = N.find("a").attr("data-fquality");
          const Q = A(this).find("td:nth-child(2)").text();
          const R = P.includes("p") ? P : P + "p";
          if (O) {
            F[R] = {
              "quality": P,
              "fileSizeH": Q,
              "fileSize": parseFloat(Q) * (/MB$/.test(Q) ? 0x3e8 : 0x1),
              "download": {
                "_id": B,
                "v_id": C,
                "ftype": "mp4",
                "fquality": P
              }
            };
          }
        });
        A("#mp3 > table > tbody > tr").each(function () {
          const N = A(this).find("td").find("a").attr("data-fquality");
          const O = A(this).find("td:nth-child(2)").text();
          G[N] = {
            "quality": N,
            "fileSizeH": O,
            "fileSize": parseFloat(O) * (/MB$/.test(O) ? 0x3e8 : 0x1),
            "download": {
              "_id": B,
              "v_id": C,
              "ftype": "mp3",
              "fquality": N
            }
          };
        });
        const H = {
          title: E,
          thumbnail: D,
          video: F,
          audio: G
        };
        a2[v] = H;
        return H;
      },
      "dl": async (m, q, v) => {
        try {
          const F = await a4.getJson("https://right-annmaria-lev-8a3a4814.koyeb.app/y2dl?id=" + m + "&t=" + q + "&q=" + (v || "128kbps"));
          if (F) {
            return F;
          }
        } catch (G) {}
        if (!a2[m] && (await exports.y2mate.get(m), !a2[m])) {
          return false;
        }
        if (!("audio" != q || v)) {
          v = Object.keys(a2[m][q])[0x0];
        }
        const {
          _id: x,
          v_id: y,
          ftype: z,
          fquality: A
        } = a2[m][q][v].download;
        const B = {
          "type": "youtube",
          "_id": x,
          "v_id": y,
          "ajax": "1",
          "token": '',
          "ftype": z,
          "fquality": A
        };
        const C = await a3("https://www.y2mate.com/mates/convert", {
          "method": "POST",
          "headers": {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "cookie": "_ga=GA1.2.1405332118.1641699259; _gid=GA1.2.1117783105.1641699259; MarketGidStorage=%7B%220%22%3A%7B%7D%2C%22C702514%22%3A%7B%22page%22%3A2%2C%22time%22%3A1641701743540%7D%7D; _PN_SBSCRBR_FALLBACK_DENIED=1641701744162",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
          },
          "form": B
        }).json();
        const D = a1.load(C.result)("a[href]").attr("href");
        return "https://app.y2mate.com/download" !== D && D;
      }
    };
  }
  function a9(m) {
    function q(s) {
      if (typeof s === "string") {
        return function (x) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + s / s).length !== 0x1 || s % 0x14 === 0x0) {
          (function () {
            false;
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      q(++s);
    }
    try {
      if (m) {
        return q;
      } else {
        q(0x0);
      }
    } catch (v) {}
  }