const P = function () {
    let q = true;
    return function (u, v) {
      const x = q ? function () {
        if (v) {
          const A = v.apply(u, arguments);
          v = null;
          return A;
        }
      } : function () {};
      q = false;
      return x;
    };
  }();
  const Q = P(this, function () {
    return Q.toString().search("(((.+)+)+)+$").toString().constructor(Q).search("(((.+)+)+)+$");
  });
  Q();
  const R = function () {
    let q = true;
    return function (u, v) {
      const x = q ? function () {
        if (v) {
          const B = v.apply(u, arguments);
          v = null;
          return B;
        }
      } : function () {};
      q = false;
      return x;
    };
  }();
  (function () {
    R(this, function () {
      const v = new RegExp("function *\\( *\\)");
      const w = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const x = a6("init");
      if (!v.test(x + "chain") || !w.test(x + "input")) {
        x("0");
      } else {
        a6();
      }
    })();
  })();
  const S = function () {
    let q = true;
    return function (u, v) {
      const y = q ? function () {
        if (v) {
          const B = v.apply(u, arguments);
          v = null;
          return B;
        }
      } : function () {};
      q = false;
      return y;
    };
  }();
  const T = S(this, function () {
    const q = function () {
      let x;
      try {
        x = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (z) {
        x = window;
      }
      return x;
    };
    const u = q();
    const v = u.console = u.console || {};
    const w = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let x = 0x0; x < w.length; x++) {
      const z = S.constructor.prototype.bind(S);
      const A = w[x];
      const B = v[A] || z;
      z.__proto__ = S.bind(S);
      z.toString = B.toString.bind(B);
      v[A] = z;
    }
  });
  T();
  const U = {
    "User-Agent": "APKUpdater-v1",
    Authorization: "Basic YXBpLWFwa3VwZGF0ZXI6cm01cmNmcnVVakt5MDRzTXB5TVBKWFc4",
    "Content-Type": "application/json"
  };
  const V = {
    headers: U
  };
  const W = (...p) => import("node-fetch").then(({
    default: q
  }) => q(...p));
  const X = require("cheerio");
  const {
    iChecker: a0
  } = require("../test/test");
  const a1 = a0();
  const a2 = a1 == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
  const a3 = async p => {
    const u = [];
    const v = await W("https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s=" + p, V);
    if (!v.ok) {
      throw new Error("Failed to fetch data: " + v.statusText);
    }
    const w = await v.text();
    const x = X.load(w);
    x("div.appRow > div.table-row > div.table-cell:nth-child(2) > div > h5.appRowTitle.wrapText.marginZero.block-on-mobile").each((y, z) => {
      const B = x(z).find("a").attr("href");
      const C = {
        "title": x(z).attr("title"),
        "url": "https://www.apkmirror.com" + B
      };
      u.push(C);
    });
    return {
      "result": u,
      "status": 0x195
    };
  };
  const a4 = async q => {
    const v = await W(q, V);
    if (!v.ok) {
      throw new Error("Failed to fetch data: " + v.statusText);
    }
    const w = await v.text();
    const x = X.load(w);
    const y = {};
    const z = x("div.table-cell.rowheight.addseparator.expand.pad.dowrap:nth-child(2)");
    const A = x("div.table-cell.rowheight.addseparator.expand.pad.dowrap:nth-child(1)");
    A.each((C, D) => {
      const E = x(z[C]).text();
      const F = x(D).find("a").attr("href");
      const G = x(D).find(".apkm-badge").text().includes("APK");
      if (!(E in y) && G) {
        y[E] = {
          "title": E,
          "url": "https://www.apkmirror.com" + F
        };
      }
    });
    if (0x0 === A.length) {
      const D = await W(q, V);
      y.noarch = {
        "title": "noarch",
        "url": D.url + "download"
      };
    }
    const B = {
      result: y,
      status: 0x12d
    };
    return B;
  };
  const a5 = async (p, q) => {
    if (p.endsWith("-download/")) {
      const A = await W(p, V);
      const B = await A.text();
      p = "https://www.apkmirror.com" + X.load(B)(".center.f-sm-50 > div > a").attr("href");
    }
    const v = await W(p, V)["catch"](D => console.log(D.message));
    const w = await v.text();
    const x = X.load(w);
    let y = x(".notes:nth-child(3) > span > a").attr("href");
    if (!y) {
      y = x("a[rel=\"nofollow\"]").attr("href");
    }
    const z = "https://www.apkmirror.com" + y;
    return z.includes("download.php?id=") || q ? {
      "result": z,
      "status": 0xc8
    } : a5(z, 0x1);
  };
  if (a2) {
    exports.apkMirror = async p => {
      const [u, v] = p.split(";;");
      return !v && u ? await a3(u) : "405" == u ? await a4(v) : "301" == u ? await a5(v) : undefined;
    };
  }
  function a6(p) {
    function u(v) {
      if (typeof v === "string") {
        return function (z) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + v / v).length !== 0x1 || v % 0x14 === 0x0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      u(++v);
    }
    try {
      if (p) {
        return u;
      } else {
        u(0x0);
      }
    } catch (w) {}
  }