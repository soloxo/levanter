const al = function () {
    let z = true;
    return function (A, B) {
      const D = z ? function () {
        if (B) {
          const G = B.apply(A, arguments);
          B = null;
          return G;
        }
      } : function () {};
      z = false;
      return D;
    };
  }();
  const am = al(this, function () {
    return am.toString().search("(((.+)+)+)+$").toString().constructor(am).search("(((.+)+)+)+$");
  });
  am();
  const an = function () {
    let z = true;
    return function (A, B) {
      const E = z ? function () {
        if (B) {
          const H = B.apply(A, arguments);
          B = null;
          return H;
        }
      } : function () {};
      z = false;
      return E;
    };
  }();
  (function () {
    an(this, function () {
      const A = new RegExp("function *\\( *\\)");
      const B = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const C = aG("init");
      if (!A.test(C + "chain") || !B.test(C + "input")) {
        C("0");
      } else {
        aG();
      }
    })();
  })();
  const ao = function () {
    let z = true;
    return function (A, B) {
      const E = z ? function () {
        if (B) {
          const H = B.apply(A, arguments);
          B = null;
          return H;
        }
      } : function () {};
      z = false;
      return E;
    };
  }();
  const ap = ao(this, function () {
    const z = function () {
      let F;
      try {
        F = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (H) {
        F = window;
      }
      return F;
    };
    const A = z();
    const B = A.console = A.console || {};
    const C = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let D = 0x0; D < C.length; D++) {
      const F = ao.constructor.prototype.bind(ao);
      const G = C[D];
      const H = B[G] || F;
      F.__proto__ = ao.bind(ao);
      F.toString = H.toString.bind(H);
      B[G] = F;
    }
  });
  ap();
  const aq = require("fluent-ffmpeg");
  const ar = require("fs");
  const {
    exec: as
  } = require("child_process");
  const at = require("node-webpmux");
  const au = require("../config");
  const av = require("fs-extra");
  const {
    join: aw
  } = require("path");
  const {
    ytJsong: ax
  } = require("./utils");
  const {
    iChecker: az
  } = require("./test/test");
  const aA = az();
  const aB = require("google-tts-api");
  const aC = require("sharp");
  const aD = aA == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
  const aF = z => {
    if (!z.includes("mention")) {
      ar.unlink(z, () => {});
    }
  };
  if (aD) {
    const aJ = async function (z, A, B, C = ["🥰"], D = {}) {
      const [F, G] = "false" == au.STICKER_PACKNAME ? [] : au.STICKER_PACKNAME.split(",");
      B = B || G;
      if (!Array.isArray(C)) {
        C = [C];
      }
      if (A) {
        const [N, O, P] = A.split(",");
        A = N;
        B = O;
        C = P;
      } else {
        A = F;
      }
      let H = new at.Image();
      const I = {
        "sticker-pack-id": "a855bd1fa49c0a05940f8ec2f47dca0b64bbd801e3b2d29e1f654574d4b294c5",
        "sticker-pack-name": A,
        "sticker-pack-publisher": B,
        "emojis": C,
        ...D
      };
      let K = Buffer.from([0x49, 0x49, 0x2a, 0x0, 0x8, 0x0, 0x0, 0x0, 0x1, 0x0, 0x41, 0x57, 0x7, 0x0, 0x0, 0x0, 0x0, 0x0, 0x16, 0x0, 0x0, 0x0]);
      let L = Buffer.from(JSON.stringify(I), "utf8");
      let M = Buffer.concat([K, L]);
      M.writeUIntLE(L.length, 0xe, 0x4);
      await H.load(z);
      H.exif = M;
      return await H.save(null);
    };
    exports.addExif = aJ;
    const aK = {
      nonanimated: ["-y", "-vcodec libwebp", "-vf", "scale=2006:2006:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2006:2006:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1"],
      newnonanimated: ["-vcodec", "libwebp", "-vf", "crop=w='min(min(iw,ih),512)':h='min(min(iw,ih),512)',scale=2006:2006,setsar=1"],
      animated2: ["-y", "-vf", "scale='512:512':force_original_aspect_ratio=decrease,fps=15, pad=512:512:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", "0", "-ss", "00:00:00", "-t", "00:00:15", "-preset", "default", "-an", "-vsync", "0", "-s 512:512"],
      animated1: ["-y", "-vf", "scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1,fps=20", "-lossless 0", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512:512"],
      newanimated1: ["-vcodec", "libwebp", "-vf", "crop=w='min(min(iw,ih),512)':h='min(min(iw,ih),512)',scale=512:512,setsar=1", "-loop", "0", "-lossless 1", "-preset", "default", "-an", "-vsync", "0", "-s", "512:512"],
      newanimated2: ["-vcodec", "libwebp", "-vf", "crop=w='min(min(iw,ih),512)':h='min(min(iw,ih),512)',scale=512:512,setsar=1,fps=20", "-loop", "0", "-lossless 0", "-preset", "default", "-an", "-vsync", "0", "-s", "512:512"],
      left: ["-vf", "transpose=2"],
      right: ["-vf", "transpose=1"],
      flip: ["-vf", "transpose=2,transpose=2"],
      videor: ["-y", "-vf", "reverse", "-af", "areverse"],
      audior: ["-y", "-af", "areverse"],
      compress: ["-vcodec", "libx265", "-crf", "28"],
      "mp3": ["-map", "0:a"],
      "tts": ["-codec:a", "libopus"],
      photo: [],
      lowmp3: ["-y", "-af", "asetrate=44100*1.3"],
      avec: ["-y", "-filter_complex", "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]", "-map", "[v]", "-map 0:a"],
      pitch: ["-y", "-af", "asetrate=44100*0.9"],
      bass: ["-y", "-af", "bass=g=10"],
      treble: ["-y", "-af", "treble=g=10"],
      histo: ["-filter_complex",, "[0:a]ahistogram=s=hd480:slide=scroll:scale=log,format=yuv420p[v]", "-map", "[v]", "-map", "0:a", "-b:a", "360k"],
      vector: ["-filter_complex", "[0:a]avectorscope=s=512x512:zoom=1.5:rc=0:gc=200:bc=0:rf=0:gf=40:bf=0,format=yuv420p[v]", "-map", "[v]", "-map", "0:a", "-b:v", "700k", "-b:a", "360k"],
      crop: ["-y", "-vf", "crop=cw:ch:w:h"]
    };
    exports.getFfmpegBuffer = async (y, z, A) => {
      let C = "false";
      let D = "false";
      if (/bass,/.test(A)) {
        C = A.split(",")[0x1];
        A = A.split(",")[0x0];
      }
      if (/treble,/.test(A)) {
        D = A.split(",")[0x1];
        A = A.split(",")[0x0];
      }
      let E = aK[A];
      if ("false" != C) {
        E[0x2] = "bass=g=" + C;
      }
      if ("false" != D) {
        E[0x2] = "treble=g=" + D;
      }
      try {
        return await new Promise(function (G, H) {
          aq(y).outputOptions(E).save(z).on("error", I => H(new Error(I.message))).on("end", async () => {
            aF(y);
            const K = ar.readFileSync(z);
            aF(z);
            G(K);
          });
        });
      } catch (G) {
        return console.log(G);
      }
    };
    const aM = y => new Promise(z => {
      aq.ffprobe(y, (B, C) => {
        z(C);
      });
    });
    exports.cropsticker = (y, z, A = 0x1, B = "🥰") => {
      let D = aK.newnonanimated;
      if (0x2 == A) {
        D = aK.newanimated1;
      }
      if (0x3 == A) {
        D = aK.newanimated2;
      }
      return new Promise(function (E, F) {
        aq(z).outputOptions(D).save(y + "c.webp").on("error", I => F(new Error(I.message))).on("end", async () => {
          const I = await aJ(y + "c.webp", undefined, undefined, [B])["catch"](J => new Error(J.message));
          aF(z);
          aF(y + "c.webp");
          E(I);
        });
      });
    };
    exports.sticker = (y, z, A = 0x1, B = "🥰") => {
      let D = aK.nonanimated;
      if (0x2 == A) {
        D = aK.animated2;
      }
      if (0x3 == A) {
        D = aK.animated1;
      }
      return new Promise((E, F) => {
        aq(z).addOutputOptions(D).save(y + ".webp").on("error", H => F(new Error(H.message))).toFormat("webp").on("end", async () => {
          const I = await aJ(ar.readFileSync(y + ".webp"), undefined, undefined, [B])["catch"](J => F(new Error(J.message)));
          aF(z);
          aF(y + ".webp");
          E(I);
        });
      });
    };
    exports.song = async y => new Promise(async (z, A) => {
      try {
        if (!(await ax(y))) {
          return z(false);
        }
        const C = aw(__dirname, "../" + y + ".mp3");
        const D = aw(__dirname, "../" + y + ".m4a");
        aq(D).audioBitrate(0xc0).audioFrequency(0xac44).save(C).on("error", E => A(new Error(E.message))).on("end", () => {
          const E = ar.readFileSync(C);
          z(E);
          ar.unlink(C, () => {});
          ar.unlink(D, () => {});
        });
      } catch (F) {
        z(false);
      }
    });
    exports.audioCut = (y, z, A, B = "cut") => new Promise(function (C, D) {
      aq(y).setStartTime(z).setDuration(A).save(B + ".mp3").on("error", F => D(new Error(F.message))).on("end", () => {
        const F = ar.readFileSync(B + ".mp3");
        C(F);
        aF(y);
        aF(B + ".mp3");
      });
    });
    exports.avm = y => (y = y.reverse(), new Promise(function (z, A) {
      let C = aq();
      y.forEach(D => C.input(aw(__dirname, "../media/avm/" + D)));
      C.outputOptions(["-map", "0:v", "-map", "1:a", "-c:v", "copy", "-shortest"]);
      C.save("audvid.mp4");
      C.on("error", D => A(new Error(D.message)));
      C.on("end", () => {
        av.emptyDirSync(aw(__dirname, "../media/avm"));
        z(ar.readFileSync("audvid.mp4"));
        aF("audvid.mp4");
      });
    }));
    exports.videoHeightWidth = async z => {
      const {
        streams: B
      } = await aM(z);
      const C = {
        width: B[0x0].width,
        height: B[0x0].height
      };
      return C;
    };
    exports.videoTrim = (y, z, A) => new Promise(function (B, C) {
      aq(y).setStartTime(z.trim()).setDuration(A.trim()).withVideoCodec("copy").withAudioCodec("copy").on("error", E => C(new Error(E.message))).save("videotrim.mp4").on("end", async () => {
        let G = ar.readFileSync("videotrim.mp4");
        aF("videotrim.mp4");
        aF(y);
        B(G);
      });
    });
    exports.mergeVideo = y => new Promise((z, A) => {
      let C = '';
      for (let D = 0x1; D <= y; D++) {
        C += "file './media/merge/" + D + ".mp4'\n";
      }
      ar.writeFile("video.txt", C, E => {
        if (E) {
          av.emptyDir("./media/merge");
          throw new Error("Error writing video.txt");
        }
        as("ffmpeg -f concat -safe 0 -i video.txt -c copy merge.mp4", H => {
          if (H) {
            av.emptyDir("./media/merge");
            throw new Error("ffmpeg execution failed");
          }
          av.emptyDir("./media/merge").then(() => {
            ar.readFile("merge.mp4", (L, M) => {
              if (L) {
                throw new Error("Error reading merge.mp4");
              }
              ar.unlink("merge.mp4", O => {
                if (O) {
                  throw new Error("Error deleting merge.mp4");
                }
                z(M);
              });
            });
          })["catch"](K => {
            A(K);
          });
        });
      });
    });
    exports.blackVideo = y => new Promise(function (z, A) {
      as("ffmpeg -y -i " + y + " toblack.aac", () => {
        as("ffmpeg -y -loop 1 -framerate 1 -i " + aw(__dirname, "../media/black.jpg") + " -i toblack.aac -map 0 -map 1:a -c:v libx264 -preset ultrafast -profile:v baseline -tune stillimage -vf \"scale='min(360,iw)':-2,format=yuv420p\" -c:a copy -shortest black.mp4\n    ", D => {
          if (D) {
            A(new Error("black failed"));
          } else {
            const G = ar.readFileSync("black.mp4");
            aF(y);
            aF("black.mp4");
            z(G);
          }
        });
      });
    });
    exports.cropVideo = (y, z, A, B, C) => new Promise(function (D, E) {
      as("ffmpeg -y -i " + y + " -vf \"crop=" + z + ":" + A + ":" + B + ":" + C + "\" -c:v libx264 -crf 1 -c:a copy croped.mp4", G => {
        if (G) {
          E(new Error("crop failed"));
        } else {
          const K = ar.readFileSync("croped.mp4");
          aF("croped.mp4");
          aF(y);
          D(K);
        }
      });
    });
  }
  exports.gifToVideo = async y => {
    const A = y + ".mp4";
    return new Promise(function (B, C) {
      aq(y).save(A).outputOptions(["-pix_fmt yuv420p", "-c:v libx264", "-movflags +faststart", "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'"]).on("error", F => C(new Error(F.message))).on("end", function () {
        const G = ar.readFileSync(A);
        B(G);
        aF(y);
        aF(A);
      });
    });
  };
  exports.videoToGif = async y => {
    const A = y + ".gif";
    return new Promise(function (B, C) {
      aq(y).save(A).on("error", E => C(new Error(E.message))).on("end", function () {
        const F = ar.readFileSync(A);
        B(F);
        aF(y);
        aF(A);
      });
    });
  };
  exports.circleSticker = async (A, B) => {
    const D = B ? await exports.videoToGif(A) : ar.readFileSync(A);
    const E = {
      r: 0x0,
      g: 0x0,
      b: 0x0,
      alpha: 0x0
    };
    const F = {
      quality: 0x64,
      lossless: false
    };
    aF(A);
    return await exports.addExif(await aC(D).resize(0x200, 0x200, {
      "fit": "cover"
    }).composite([{
      "input": Buffer.from("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" viewBox=\"0 0 512 512\">\n\t<!-- Outer circle (black) -->\n\t<circle cx=\"256\" cy=\"256\" r=\"254\" fill=\"" + E + "\"/>\n\t\t\t</svg>"),
      "blend": "dest-in"
    }, {
      "input": Buffer.from("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" viewBox=\"0 0 512 512\">\n\t\t\t  <!-- Inner circle with light gray border -->\n\t\t\t  <circle cx=\"256\" cy=\"256\" r=\"254\" fill=\"rgba(255, 255, 255, 0)\" stroke=\"rgba(110, 110, 110, 1)\" stroke-width=\"2\" />\n\t\t\t</svg>"),
      "blend": "over"
    }]).webp(F).toBuffer(), undefined, undefined, []);
  };
  exports.SpeachToText = async (z, A) => {
    try {
      const D = {
        lang: z,
        slow: false,
        host: "https://translate.google.com"
      };
      const E = await aB.getAllAudioBase64(A, D);
      ar.writeFileSync("tts.mp3", Buffer.from(E.map(F => F.base64).join(), "base64"), {
        "encoding": "base64"
      });
      return new Promise(function (F) {
        aq("tts.mp3").audioCodec("libopus").save("tts.opus").on("end", async () => {
          aF("tts.mp3");
          F(ar.readFileSync("tts.opus"));
          aF("tts.opus");
        });
      });
    } catch (F) {
      throw new Error(F.message);
    }
  };
  function aG(z) {
    const A = {
      "ACOyQ": function (C, D) {
        return C !== D;
      },
      "eySzu": "LOEMa",
      "uTtMK": function (C, D) {
        return C(D);
      },
      "tiLCU": function (C, D) {
        return C(D);
      },
      "iqjqf": function (C, D) {
        return C(D);
      },
      "qygUM": function (C, D) {
        return C(D);
      },
      "XBQEB": "-pix_fmt yuv420p",
      "HdJVM": "-c:v libx264",
      "MNKEK": "-movflags +faststart",
      "pntUr": "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
      "aJoQT": "error",
      "aclmX": "end",
      "eShtA": function (C, D, E) {
        return C(D, E);
      },
      "bwacq": "../media/avm",
      "jUTKC": function (C, D) {
        return C(D);
      },
      "ZlnHD": "audvid.mp4",
      "xPhps": function (C) {
        return C();
      },
      "gyuRJ": "-map",
      "fGCXu": "0:v",
      "OJewx": "1:a",
      "fxNWl": "-c:v",
      "Zwfcy": "copy",
      "IUHiJ": "-shortest",
      "oNNbt": function (C, D) {
        return C + D;
      },
      "RhzTi": "debu",
      "seZGi": "gger",
      "gchiZ": "action",
      "MXGOy": "return (function() ",
      "obPzJ": "{}.constructor(\"return this\")( )",
      "ZSkJM": function (C, D) {
        return C === D;
      },
      "gqkMh": "HnWaz",
      "vDnlu": "VXXHU",
      "XOjql": "jELPJ",
      "UCZZh": function (C, D) {
        return C === D;
      },
      "nKbap": "string",
      "iJqrR": "eYQZl",
      "jNGbD": "cMwRA",
      "OvBvT": "while (true) {}",
      "JYLNR": "counter",
      "fANDh": function (C, D) {
        return C !== D;
      },
      "pkEmJ": "elNlr",
      "ZZyuX": function (C, D) {
        return C + D;
      },
      "HzjSn": function (C, D) {
        return C / D;
      },
      "cchEN": "length",
      "KaeCF": function (C, D) {
        return C === D;
      },
      "ppcyi": function (C, D) {
        return C % D;
      },
      "klvHo": "AhNUK",
      "WasgE": function (C, D) {
        return C + D;
      },
      "YTqnb": function (C, D) {
        return C !== D;
      },
      "LIgUb": "OvfYR",
      "jnYGI": "iKdKU",
      "wzWax": function (C, D) {
        return C + D;
      },
      "AGsdZ": "stateObject",
      "rSMnb": function (C, D) {
        return C(D);
      },
      "MQtFv": function (C, D) {
        return C(D);
      },
      "rJZVL": function (C, D) {
        return C(D);
      },
      "pRZZe": function (C, D) {
        return C(D);
      },
      "JddrE": function (C, D) {
        return C === D;
      },
      "seehC": "UbYRI",
      "AOmEf": "RGtrh",
      "jHsmQ": "YfKDt",
      "QSGOW": "Mazhg",
      "hXGZU": "rqQRm",
      "fTQzn": "JoazW",
      "ENMqe": function (C, D) {
        return C(D);
      }
    };
    function B(C) {
      const D = {
        "uRZmt": function (E, F, G) {
          return A.eShtA(E, F, G);
        },
        "dvEtY": A.bwacq,
        "ndDbU": function (E, F) {
          return A.jUTKC(E, F);
        },
        "jmTJD": A.ZlnHD,
        "kkBzR": function (E) {
          return A.xPhps(E);
        },
        "sQiDS": A.gyuRJ,
        "dWcsK": A.fGCXu,
        "EsgTs": A.OJewx,
        "TuasD": A.fxNWl,
        "ohHYx": A.Zwfcy,
        "xLzaE": A.IUHiJ,
        "cGVaw": A.aJoQT,
        "tMfaR": A.aclmX,
        "hDozp": function (E, F) {
          return A.oNNbt(E, F);
        },
        "Aagml": A.RhzTi,
        "xkbaa": A.seZGi,
        "cOhAg": A.gchiZ,
        "QZqax": function (E, F) {
          return A.qygUM(E, F);
        },
        "bkrni": function (E, F) {
          return A.oNNbt(E, F);
        },
        "BTwcf": A.MXGOy,
        "jGjqx": A.obPzJ,
        "rtMGs": function (E, F) {
          return A.ZSkJM(E, F);
        },
        "kOxSD": A.gqkMh,
        "koSYS": A.vDnlu
      };
      if (A.ACOyQ(A.XOjql, A.XOjql)) {
        throw new A(B.message);
      } else {
        if (A.UCZZh(typeof C, A.nKbap)) {
          if (A.ZSkJM(A.iJqrR, A.jNGbD)) {
            const G = {
              "yPPgs": function (I, J, K) {
                return D.uRZmt(I, J, K);
              },
              "ebFde": D.dvEtY,
              "zlGwU": function (I, J) {
                return D.ndDbU(I, J);
              },
              "VdGLI": D.jmTJD,
              "tWbRj": function (I, J) {
                return D.ndDbU(I, J);
              }
            };
            let H = D.kkBzR(K);
            L.forEach(Z => H.input(H(X, "../media/avm/" + Z)));
            H.outputOptions([D.sQiDS, D.dWcsK, D.sQiDS, D.EsgTs, D.TuasD, D.ohHYx, D.xLzaE]);
            H.save(D.jmTJD);
            H.on(D.cGVaw, Z => H(new X(Z.message)));
            H.on(D.tMfaR, () => {
              H.emptyDirSync(D.uRZmt(X, Y, G.ebFde));
              D.ndDbU(Z, a0.readFileSync(G.VdGLI));
              D.ndDbU(a1, G.VdGLI);
            });
          } else {
            return function (G) {}.constructor(A.OvBvT).apply(A.JYLNR);
          }
        } else {
          if (A.fANDh(A.pkEmJ, A.pkEmJ)) {
            (function () {
              return true;
            }).constructor(D.hDozp(D.Aagml, D.xkbaa)).call(D.cOhAg);
          } else {
            if (A.fANDh(A.ZZyuX('', A.HzjSn(C, C))[A.cchEN], 0x1) || A.KaeCF(A.ppcyi(C, 0x14), 0x0)) {
              if (A.fANDh(A.klvHo, A.klvHo)) {
                const I = B.apply(C, arguments);
                D = null;
                return I;
              } else {
                (function () {
                  if (A.ACOyQ(A.eySzu, A.eySzu)) {
                    const [J, K, L] = C.split(",");
                    D = J;
                    E = K;
                    F = L;
                  } else {
                    return true;
                  }
                }).constructor(A.WasgE(A.RhzTi, A.seZGi)).call(A.gchiZ);
              }
            } else {
              if (A.YTqnb(A.LIgUb, A.jnYGI)) {
                (function () {
                  const I = {
                    "MUgzx": function (J, K) {
                      return D.QZqax(J, K);
                    },
                    "bmkwy": function (J, K) {
                      return D.hDozp(J, K);
                    },
                    "PTsbc": function (J, K) {
                      return D.bkrni(J, K);
                    },
                    "uqOIe": D.BTwcf,
                    "XtHOj": D.jGjqx
                  };
                  if (D.rtMGs(D.kOxSD, D.koSYS)) {
                    A = D.QZqax(B, D.hDozp(D.bkrni(I.uqOIe, I.XtHOj), ");"))();
                  } else {
                    return false;
                  }
                }).constructor(A.wzWax(A.RhzTi, A.seZGi)).apply(A.AGsdZ);
              } else {
                A.qygUM(K, L).save(M).outputOptions([A.XBQEB, A.HdJVM, A.MNKEK, A.pntUr]).on(A.aJoQT, Z => W(new X(Z.message))).on(A.aclmX, function () {
                  const a4 = W.readFileSync(X);
                  A.uTtMK(Y, a4);
                  A.tiLCU(Z, a0);
                  A.iqjqf(a1, a2);
                });
              }
            }
          }
        }
        A.uTtMK(B, ++C);
      }
    }
    try {
      if (A.JddrE(A.seehC, A.AOmEf)) {
        const D = F.readFileSync(G);
        A.rSMnb(H, D);
        A.MQtFv(I, J);
        A.qygUM(K, L);
      } else {
        if (z) {
          if (A.ACOyQ(A.jHsmQ, A.QSGOW)) {
            return B;
          } else {
            A.rSMnb(A, B);
          }
        } else {
          if (A.fANDh(A.hXGZU, A.fTQzn)) {
            A.ENMqe(B, 0x0);
          } else {
            const F = F.readFileSync(G + ".mp3");
            A.rJZVL(H, F);
            A.pRZZe(I, J);
            A.pRZZe(K, L + ".mp3");
          }
        }
      }
    } catch (F) {}
  }