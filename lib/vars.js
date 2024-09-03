const a5 = function () {
    let B = true;
    return function (C, D) {
      const G = B ? function () {
        if (D) {
          const I = D.apply(C, arguments);
          D = null;
          return I;
        }
      } : function () {};
      B = false;
      return G;
    };
  }();
  const a6 = a5(this, function () {
    return a6.toString().search("(((.+)+)+)+$").toString().constructor(a6).search("(((.+)+)+)+$");
  });
  a6();
  const a7 = function () {
    const z = {
      zBcRt: function (C, D) {
        return C === D;
      },
      zUXll: "render : invalid api_key, https://dashboard.render.com/u/settings#api-keys update RENDER_API_KEY",
      Blkna: function (C, D) {
        return C + D;
      },
      WjULN: "debu",
      jnuVp: "gger",
      GbmkM: "stateObject",
      pSYOr: function (C, D) {
        return C !== D;
      },
      PFavb: "dNbzn",
      tiXkX: "OIoAh",
      mRYTy: "pobgO",
      TrwMA: "OyMwN",
      tXEOQ: "MhSEc",
      YGfvC: "zNZGJ"
    };
    const A = z;
    let B = true;
    return function (C, D) {
      const F = {
        "maqac": function (G, H) {
          return A.zBcRt(G, H);
        },
        "UqoTK": A.zUXll,
        "zwGwt": function (G, H) {
          return A.Blkna(G, H);
        },
        "thcmW": A.WjULN,
        "TWETP": A.jnuVp,
        "OMAkY": A.GbmkM,
        "wyqyS": function (G, H) {
          return A.pSYOr(G, H);
        },
        "WqnBs": A.PFavb,
        "Tpvbz": A.tiXkX,
        "ezCqw": A.mRYTy,
        "rWonU": A.TrwMA
      };
      if (A.zBcRt(A.tXEOQ, A.YGfvC)) {
        if (F.response && A.zBcRt(0x191, G.response.status)) {
          throw new H(F.UqoTK);
        }
        throw new I("render : " + (J.response && K.response.statusText));
      } else {
        const H = B ? function () {
          if (A.pSYOr(F.WqnBs, F.Tpvbz)) {
            if (D) {
              if (A.zBcRt(F.ezCqw, F.rWonU)) {
                (function () {
                  return false;
                }).constructor(A.Blkna(F.thcmW, F.TWETP)).apply(F.OMAkY);
              } else {
                const J = D.apply(C, arguments);
                D = null;
                return J;
              }
            }
          } else {
            A = B;
          }
        } : function () {};
        B = false;
        return H;
      }
    };
  }();
  (function () {
    a7(this, function () {
      const B = new RegExp("function *\\( *\\)");
      const C = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const D = ar("init");
      if (!B.test(D + "chain") || !C.test(D + "input")) {
        D("0");
      } else {
        ar();
      }
    })();
  })();
  const a8 = function () {
    let z = true;
    return function (A, B) {
      const D = z ? function () {
        if (B) {
          const F = B.apply(A, arguments);
          B = null;
          return F;
        }
      } : function () {};
      z = false;
      return D;
    };
  }();
  const a9 = a8(this, function () {
    let z;
    try {
      const C = Function("return (function() {}.constructor(\"return this\")( ));");
      z = C();
    } catch (F) {
      z = window;
    }
    const A = z.console = z.console || {};
    const B = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let H = 0x0; H < B.length; H++) {
      const I = a8.constructor.prototype.bind(a8);
      const J = B[H];
      const K = A[J] || I;
      I.__proto__ = a8.bind(a8);
      I.toString = K.toString.bind(K);
      A[J] = I;
    }
  });
  a9();
  const aa = require("../config");
  const {
    default: ac
  } = require("axios");
  const ad = require("fs-extra");
  const ae = require("path");
  const af = require("dotenv");
  const ag = require("heroku-client");
  const ah = require("./pm2");
  const ai = new ag({
    "token": aa.HEROKU_API_KEY
  });
  const aj = ["FORCE_LOGOUT", "SESSION_ID", "PREFIX", "ANTIWORDS"];
  const ak = (x, z) => {
    aa.SYNC_VAR = true;
    aa[x] = z;
    process.env[x] = z;
  };
  const al = (x, z) => {
    let B = false;
    const [C] = Object.keys(x);
    z.env = z.env.map(D => (D.key === C && (B = true, D.value = x[C], ak(C, x[C])), D));
    if (!B) {
      ak(C, x[C]);
      z.env.push({
        "key": C,
        "value": x[C]
      });
    }
    return z;
  };
  const am = {
    "render": {
      "serviceId": '',
      "headers": {
        "headers": {
          "Authorization": "Bearer " + aa.RENDER_API_KEY
        }
      },
      "getRenderServices": async () => {
        if (am.render.serviceId) {
          return am.render.serviceId;
        }
        try {
          const F = {
            Authorization: "Bearer " + aa.RENDER_API_KEY
          };
          const G = {
            headers: F
          };
          const H = await ac.get("https://api.render.com/v1/services", G);
          const I = 0x1 === H.data.length ? H.data[0x0] : H.data.find(J => J.service.name === aa.RENDER_NAME || J.service.name === process.env.name);
          if (I && I.service.id) {
            am.render.serviceId = I.service.id;
            return I.service.id;
          }
        } catch (J) {
          if (J.response && 0x191 === J.response.status) {
            throw new Error("render : invalid api_key, https://dashboard.render.com/u/settings#api-keys update RENDER_API_KEY");
          }
          throw new Error("render : " + (J.response && J.response.statusText));
        }
      },
      "getVars": async () => {
        const B = await am.render.getRenderServices();
        if (!B) {
          throw new Error("render: " + aa.RENDER_NAME + " app not found, please update RENDER_NAME");
        }
        try {
          const C = await ac.get("https://api.render.com/v1/services/" + B + "/env-vars", am.render.headers);
          const D = {};
          for (const F of C.data) D[F.envVar.key] = F.envVar.value;
          return D;
        } catch (H) {
          throw new Error(H.message);
        }
      },
      "setVar": async x => {
        const A = await am.render.getRenderServices();
        if (!A) {
          throw new Error("render: " + aa.RENDER_NAME + " app not found, please update RENDER_NAME");
        }
        try {
          const [C] = Object.entries(x);
          const [D, F] = C;
          const G = await am.render.getVars();
          const H = Object.entries(G);
          const I = [];
          if (!G[D]) {
            I.push({
              "key": D,
              "value": F
            });
            ak(D, F);
          }
          for (const J of H) {
            let [L, M] = J;
            if (D === L) {
              ak(D, F);
              M = F;
            }
            I.push({
              "key": L,
              "value": M
            });
          }
          await ac.put("https://api.render.com/v1/services/" + A + "/env-vars/", I, am.render.headers);
          await exports.updateRender("do_not_clear");
        } catch (N) {
          throw new Error(N.message);
        }
      },
      "delVar": async z => {
        const B = [];
        const C = await am.render.getVars();
        const D = Object.entries(C);
        for (const G of D) {
          const I = G[0x0];
          if (I !== z) {
            B.push({
              "key": I,
              "value": G[0x1]
            });
          } else {
            ak(z, '');
          }
        }
        const F = await am.render.getRenderServices();
        if (!F) {
          throw new Error("render: " + aa.RENDER_NAME + " app not found, please update RENDER_NAME");
        }
        try {
          const J = {
            value: value
          };
          await ac.put("https://api.render.com/v1/services/" + F + "/env-vars/" + key, J, am.render.headers);
          await exports.updateRender("do_not_clear");
        } catch (L) {
          throw new Error(L.message);
        }
      }
    },
    "koyeb": {
      "headers": {
        "content-type": "application/json",
        "authorization": "Bearer " + aa.KOYEB_API
      },
      "getVars": async x => {
        const A = await an();
        const B = await ao(A.did);
        const C = {};
        if (x) {
          C.def = B;
          C.id = A.id;
          C.env = {};
          for (const D of B.env) {
            if (x) {
              C.env.scopes = D.scopes;
            }
            C.env[D.key] = D.value;
          }
          return C;
        }
        for (const G of B.env) {
          if (x) {
            C.scopes = G.scopes;
          }
          C[G.key] = G.value;
        }
        return C;
      },
      "setVar": async z => {
        const B = {
          headers: am.koyeb.headers
        };
        const C = await an();
        const D = await ac.get("https://app.koyeb.com/v1/deployments/" + C.did, B);
        const F = al(z, D.data.deployment.definition);
        await ap(F, C.id, true);
      },
      "delVar": async x => {
        const A = await am.koyeb.getVars(0x1);
        delete A.env[x];
        const B = [];
        for (const C in A.env) if ("scopes" != C) {
          const F = {
            scopes: A.env.scopes,
            key: C,
            value: A.env[C]
          };
          B.push(F);
        }
        A.def.env = B;
        await ap(A.def, A.id, true);
        return B;
      }
    },
    "heroku": {
      "base": "/apps/" + aa.HEROKU_APP_NAME + "/config-vars",
      "setVar": async z => {
        try {
          const C = {
            body: z
          };
          await ai.patch(am.heroku.base, C);
        } catch (D) {
          throw new Error("HEROKU : " + D.message);
        }
      },
      "getVars": async () => {
        try {
          return await ai.get(am.heroku.base);
        } catch (A) {
          throw new Error("HEROKU : " + A.message);
        }
      },
      "delVar": async x => {
        try {
          const B = await ai.get(am.heroku.base);
          const C = x.trim().toUpperCase();
          if (B[C]) {
            await ai.patch(am.heroku.base, {
              "body": {
                [C]: null
              }
            });
          }
        } catch (D) {
          throw new Error("HEROKU : " + D.message);
        }
      }
    },
    "vps": {
      "getVars": async function () {
        return ad.existsSync(ae.join(__dirname, "../config.env")) ? af.parse(ad.readFileSync(ae.join(__dirname, "../config.env"))) : (ad.writeFileSync(ae.join(__dirname, "../config.env"), "{}"), {});
      },
      "setVar": async function (x) {
        const [A] = Object.keys(x);
        const B = await am.vps.getVars();
        Object.assign(B, x);
        let C = '';
        for (const D in B) C += D + " = \"" + B[D] + "\"\n";
        ad.writeFileSync(ae.join(__dirname, "../config.env"), C.trim());
        if (aj.includes(A)) {
          setTimeout(() => {
            ah.restartInstance(process.env.pm_id, "var updated");
          }, 0xbb8);
        } else {
          ak(A, x[A]);
        }
      },
      "delVar": async function (x) {
        const A = await am.vps.getVars();
        if (A[x]) {
          delete A[x];
          let C = '';
          for (const D in A) C += D + " = \"" + A[D] + "\"\n";
          ad.writeFileSync(ae.join(__dirname, "../config.env"), C.trim());
          setTimeout(() => {
            ah.restartInstance(process.env.pm_id, "var updated");
          }, 0xbb8);
        }
      }
    },
    "false": {
      "message": "Failed detect the Platform, Please enter Heroku or Koyeb or VPS config respectively\nhttps://github.com/lyfe00011/levanter/wiki/platform",
      "setVar": () => {
        throw new Error(am["false"].message);
      },
      "delVar": () => {
        throw new Error(am["false"].message);
      },
      "getVars": () => {
        throw new Error(am["false"].message);
      }
    }
  };
  async function an() {
    try {
      const D = {
        headers: am.koyeb.headers
      };
      const F = (await ac.get("https://app.koyeb.com/v1/services", D)).data.services;
      const G = 0x1 == F.length ? F[0x0] : F.find(J => J.name == aa.KOYEB_NAME || J.name === process.env.KOYEB_SERVICE_NAME);
      if (!G) {
        throw new Error("koyeb: app *" + aa.KOYEB_NAME + "* not found, please update KOYEB_NAME");
      }
      const H = G.id;
      const I = {
        id: H,
        did: G.active_deployment_id
      };
      return I;
    } catch (K) {
      if (K.response && 0x191 === K.response.status) {
        throw new Error("koyeb: invalid api_key, please update KOYEB_API");
      }
      throw new Error(K.message);
    }
  }
  async function ao(z) {
    const A = {
      headers: am.koyeb.headers
    };
    return (await ac.get("https://app.koyeb.com/v1/deployments/" + z, A)).data.deployment.definition;
  }
  async function ap(B, C, D) {
    try {
      const H = {
        definition: B,
        skip_build: D
      };
      const I = {
        headers: am.koyeb.headers
      };
      await ac.patch("https://app.koyeb.com/v1/services/" + C, H, I);
    } catch (K) {
      throw new Error(K?.["response"]?.["data"]?.["code"] || "koyeb");
    }
  }
  const aq = aa.HEROKU_API_KEY && aa.HEROKU_APP_NAME ? "heroku" : aa.KOYEB_API && aa.KOYEB_NAME ? "koyeb" : aa.RENDER_NAME && aa.RENDER_API_KEY ? "render" : aa.VPS ? "vps" : "false";
  exports.upKoyeb = async function () {
    const z = await am.koyeb.getVars(0x1);
    await ap(z.def, z.id, false);
  };
  exports.updateRender = async z => {
    const C = await am.render.getRenderServices();
    if (!C) {
      throw new Error("render: " + aa.RENDER_NAME + " app not found, please update RENDER_NAME");
    }
    try {
      await ac.post("https://api.render.com/v1/services/" + C + "/deploys", {
        "clearCache": z || "clear"
      }, am.render.headers);
    } catch (F) {}
  };
  exports.setVar = am[aq].setVar;
  exports.getVars = am[aq].getVars;
  exports.delVar = am[aq].delVar;
  function ar(x) {
    function A(B) {
      if (typeof B === "string") {
        return function (F) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + B / B).length !== 0x1 || B % 0x14 === 0x0) {
          (function () {
            true;
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      A(++B);
    }
    try {
      if (x) {
        return A;
      } else {
        A(0x0);
      }
    } catch (B) {}
  }