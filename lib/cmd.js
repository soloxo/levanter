(function (_0x19e2e0, _0x4a5f1a) {
    const _0x4deca5 = _0x19e2e0();
    while (true) {
      try {
        const _0x553233 = -parseInt(_0x1e66(507, "0x5ae")) / 1 * (-parseInt(_0x2d11(616, "Nl6B")) / 2) + parseInt(_0x1e66(608, "0x613")) / 3 * (-parseInt(_0x2d11(626, "[jRG")) / 4) + -parseInt(_0x1e66(524, "0x2a7")) / 5 * (parseInt(_0x2d11(582, "FQWc")) / 6) + -parseInt(_0x1e66(501, "0x425")) / 7 + -parseInt(_0x1e66(592, "0x339")) / 8 * (-parseInt(_0x1e66(488, "0x2a1")) / 9) + parseInt(_0x1e66(558, "0x5e5")) / 10 * (parseInt(_0x2d11(622, "sb0w")) / 11) + -parseInt(_0x2d11(611, "HHg7")) / 12;
        if (_0x553233 === _0x4a5f1a) {
          break;
        } else {
          _0x4deca5.push(_0x4deca5.shift());
        }
      } catch (_0x398a43) {
        _0x4deca5.push(_0x4deca5.shift());
      }
    }
  })(_0x1a2e, 600116);
  const _0x397da2 = function () {
    let _0x1ca9ca = true;
    return function (_0x34a67a, _0x552c37) {
      const _0x3ff71a = _0x1ca9ca ? function () {
        if (_0x552c37) {
          const _0x1d5538 = _0x552c37.apply(_0x34a67a, arguments);
          _0x552c37 = null;
          return _0x1d5538;
        }
      } : function () {};
      _0x1ca9ca = false;
      return _0x3ff71a;
    };
  }();
  const _0x16eab1 = _0x397da2(this, function () {
    const _0x33a1f9 = {
      mVCTZ: "(((.+)+)+)+$"
    };
    return _0x16eab1[_0x2d11("0x1f1112", "Q*10") + "tri" + "ng"]().search(_0x33a1f9[_0x1e66("0x183160", "0x184") + "TZ"]).toString()[_0x1e66("0xbe447", "0xa6") + "str" + _0x2d11("0x1ea112", "rfqo") + "or"](_0x16eab1)[_0x1e66("0x172160", "0x171") + "rch"]("(((.+)+)+)+$");
  });
  _0x16eab1();
  const _0x5c7ace = function () {
    let _0x119d9c = true;
    return function (_0x17e2f1, _0x151928) {
      const _0xda4a16 = _0x119d9c ? function () {
        if (_0x151928) {
          const _0x31fa30 = _0x151928.apply(_0x17e2f1, arguments);
          _0x151928 = null;
          return _0x31fa30;
        }
      } : function () {};
      _0x119d9c = false;
      return _0xda4a16;
    };
  }();
  (function () {
    _0x5c7ace(this, function () {
      const _0x498aea = new RegExp("function *\\( *\\)");
      const _0x2189df = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const _0x2962ed = _0x2214ba("init");
      if (!_0x498aea.test(_0x2962ed + "chain") || !_0x2189df.test(_0x2962ed + "input")) {
        _0x2962ed("0");
      } else {
        _0x2214ba();
      }
    })();
  })();
  const {
    setDb: _0x2981e3,
    getDb: _0x4e27b3
  } = require("./db/store");
  const {
    iChecker: _0x5a196b
  } = require("./test/test");
  function _0x30fa9b(_0x4a96a1, _0x54bbad, _0x29133a) {
    return _0x1e66(_0x54bbad + 33, _0x29133a);
  }
  const _0x5d5364 = _0x5a196b();
  const _0x555c69 = _0x5d5364 == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
  if (_0x555c69) {
    exports.setCmd = async (_0x1005ce, {
      message: _0x41d023,
      type: _0x43aff6
    }) => {
      const {
        fileSha256: _0x196d1b
      } = _0x41d023.message[_0x43aff6];
      const _0x3dfa23 = _0x196d1b?.["toString"]("base64");
      if (!_0x3dfa23) {
        return -1;
      }
      db.cmd = {
        ...db.cmd,
        [_0x3dfa23]: _0x1005ce
      };
      await _0x2981e3();
    };
    exports.getCmd = async () => {
      await _0x4e27b3();
      const _0x426d55 = [];
      for (const _0x4b050b in db.cmd) _0x426d55.push(db.cmd[_0x4b050b]);
      return _0x426d55;
    };
    exports.delCmd = async _0x2337e2 => {
      if (typeof _0x2337e2 == _0x2d11(2720823, "2UkK") + "ing") {
        const _0x25f5fe = Object.keys(db[_0x2d11(1607047, "K&Ng")]).filter(_0x461576 => db.cmd[_0x461576] === _0x2337e2);
        if (!_0x25f5fe[_0x2d11(1586567, "Q*10") + "gth"]) {
          return -1;
        }
        _0x25f5fe.forEach(_0x2e9c63 => delete db.cmd[_0x2e9c63]);
      } else {
        const _0x294fb4 = _0x2337e2?.["message"]?.["message"]?.[_0x2337e2.type]?.["fileSha256"]?.["toString"]("bas" + _0x2d11(2114951, ")4Lr"));
        if (!_0x294fb4) {
          return -1;
        }
        delete db.cmd[_0x294fb4];
      }
      await _0x2981e3();
    };
  }
  const _0x67b408 = {
    manufacturer: "Xiaomi"
  };
  function _0x193f90(_0x333216, _0x2f4544, _0x197208) {
    return _0x1e66(_0x197208 + 418, _0x333216);
  }
  _0x67b408.model = "POCO F1";
  const _0xde9489 = {
    manufacturer: "Xiaomi",
    model: "Redmi 9A"
  };
  const _0x136423 = {};
  function _0x1586a2(_0x1c2ad5, _0x508f7d, _0x1064e7) {
    return _0x2d11(_0x508f7d + 734, _0x1064e7);
  }
  _0x136423.manufacturer = "Xiaomi";
  _0x136423.model = "Xiaomi Mi 4";
  function _0xadc3e8(_0x50b60b, _0x1f393d, _0x569287) {
    return _0x2d11(_0x1f393d - "0x30c", _0x50b60b);
  }
  const _0x35e879 = {};
  function _0x2d11(_0x348b06, _0x48dba0) {
    const _0x16d381 = _0x1a2e();
    _0x2d11 = function (_0xe5f99a, _0x43e7cc) {
      _0xe5f99a = _0xe5f99a - 486;
      let _0x5b2c7e = _0x16d381[_0xe5f99a];
      if (_0x2d11.fRgeRq === undefined) {
        var _0x2d6f0b = function (_0x482d78) {
          let _0xaa2a63 = '';
          let _0x5f0501 = '';
          let _0x3fb048 = _0xaa2a63 + _0x2d6f0b;
          let _0x453f73 = 0;
          let _0x21362a;
          let _0x170c6c;
          for (let _0xc6fcb1 = 0; _0x170c6c = _0x482d78.charAt(_0xc6fcb1++); ~_0x170c6c && (_0x21362a = _0x453f73 % 4 ? _0x21362a * 64 + _0x170c6c : _0x170c6c, _0x453f73++ % 4) ? _0xaa2a63 += _0x3fb048.charCodeAt(_0xc6fcb1 + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x21362a >> (-2 * _0x453f73 & 6)) : _0x453f73 : 0) {
            _0x170c6c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x170c6c);
          }
          let _0xb464db = 0;
          for (let _0x27a0e9 = _0xaa2a63.length; _0xb464db < _0x27a0e9; _0xb464db++) {
            _0x5f0501 += "%" + ("00" + _0xaa2a63.charCodeAt(_0xb464db).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x5f0501);
        };
        const _0xb89e08 = function (_0x16dc86, _0x4b0285) {
          let _0x5b6af6 = [];
          let _0x1f6161 = 0;
          let _0x2734ed;
          let _0x277325 = '';
          _0x16dc86 = _0x2d6f0b(_0x16dc86);
          let _0x3ec3f9;
          for (_0x3ec3f9 = 0; _0x3ec3f9 < 256; _0x3ec3f9++) {
            _0x5b6af6[_0x3ec3f9] = _0x3ec3f9;
          }
          for (_0x3ec3f9 = 0; _0x3ec3f9 < 256; _0x3ec3f9++) {
            _0x1f6161 = (_0x1f6161 + _0x5b6af6[_0x3ec3f9] + _0x4b0285.charCodeAt(_0x3ec3f9 % _0x4b0285.length)) % 256;
            _0x2734ed = _0x5b6af6[_0x3ec3f9];
            _0x5b6af6[_0x3ec3f9] = _0x5b6af6[_0x1f6161];
            _0x5b6af6[_0x1f6161] = _0x2734ed;
          }
          _0x3ec3f9 = 0;
          _0x1f6161 = 0;
          for (let _0xefcf7 = 0; _0xefcf7 < _0x16dc86.length; _0xefcf7++) {
            _0x3ec3f9 = (_0x3ec3f9 + 1) % 256;
            _0x1f6161 = (_0x1f6161 + _0x5b6af6[_0x3ec3f9]) % 256;
            _0x2734ed = _0x5b6af6[_0x3ec3f9];
            _0x5b6af6[_0x3ec3f9] = _0x5b6af6[_0x1f6161];
            _0x5b6af6[_0x1f6161] = _0x2734ed;
            _0x277325 += String.fromCharCode(_0x16dc86.charCodeAt(_0xefcf7) ^ _0x5b6af6[(_0x5b6af6[_0x3ec3f9] + _0x5b6af6[_0x1f6161]) % 256]);
          }
          return _0x277325;
        };
        _0x2d11.Haffkm = _0xb89e08;
        _0x348b06 = arguments;
        _0x2d11.fRgeRq = true;
      }
      const _0x574d61 = _0x16d381[0];
      const _0x2cb617 = _0xe5f99a + _0x574d61;
      const _0x3a15c1 = _0x348b06[_0x2cb617];
      if (!_0x3a15c1) {
        if (_0x2d11.dhhjoa === undefined) {
          const _0x4bd703 = function (_0x1e9d75) {
            this.YYmTDt = _0x1e9d75;
            this.VHWOzm = [1, 0, 0];
            this.SQUaHT = function () {
              return "newState";
            };
            this.lQPolG = "\\w+ *\\(\\) *{\\w+ *";
            this.lJBhrC = "['|\"].+['|\"];? *}";
          };
          _0x4bd703.prototype.yrUiDH = function () {
            const _0x1f3f4d = new RegExp(this.lQPolG + this.lJBhrC);
            const _0x19b295 = _0x1f3f4d.test(this.SQUaHT.toString()) ? --this.VHWOzm[1] : --this.VHWOzm[0];
            return this.HDkgkX(_0x19b295);
          };
          _0x4bd703.prototype.HDkgkX = function (_0x275a11) {
            if (!Boolean(~_0x275a11)) {
              return _0x275a11;
            }
            return this.ZmZxPf(this.YYmTDt);
          };
          _0x4bd703.prototype.ZmZxPf = function (_0x268077) {
            let _0x369ece = 0;
            for (let _0x32e826 = this.VHWOzm.length; _0x369ece < _0x32e826; _0x369ece++) {
              this.VHWOzm.push(Math.round(Math.random()));
              _0x32e826 = this.VHWOzm.length;
            }
            return _0x268077(this.VHWOzm[0]);
          };
          new _0x4bd703(_0x2d11).yrUiDH();
          _0x2d11.dhhjoa = true;
        }
        _0x5b2c7e = _0x2d11.Haffkm(_0x5b2c7e, _0x43e7cc);
        _0x348b06[_0x2cb617] = _0x5b2c7e;
      } else {
        _0x5b2c7e = _0x3a15c1;
      }
      return _0x5b2c7e;
    };
    return _0x2d11(_0x348b06, _0x48dba0);
  }
  _0x35e879.manufacturer = "Vivo";
  function _0x1a2e() {
    const _0x196859 = ["AGJdTWdcKYhdGLybEXqKhG", "z2v0", "EhzK", "whfb", "W7qaW74", "Aw5N", "kwbs", "uSkeWOy", "mZe3nZGWnhDpuhLSqW", "A2v5", "WRhdJYm", "t25L", "Bvzd", "Aw5P", "DhLW", "b0Kk", "WRnwiW", "Cbeu", "DCodEG", "bKuD", "y291", "w2eT", "uLnv", "mtbxuxPmtu8", "ugX1", "iv8h", "FCoqW5e", "y21K", "W4jEW64", "jSkbrW", "zfNcNW", "zgvI", "ycZcLW", "BwvZ", "DhjP", "BYbz", "yhRcNa", "sf7cRa", "Durc", "yti1", "CMnO", "Aw5W", "DgvZ", "xmoCW6O", "WRxdNYm", "hvVdGW", "B21P", "jrRcM1RdKWNdQq", "yJi5", "DwiZ", "ywXH", "W6VdQ2G", "Dgvp", "wgLH", "rwfJ", "WOBdHZq", "wvC1", "mtzxs0HHEgW", "C3rY", "vML2", "lxPb", "omkzpq", "W6RcSg4", "W63cHCkC", "WQldJti", "y2fS", "zvnO", "lLNcSW", "WQGlvq", "cv/cPG", "mte4mdi4ndzUAKTYCwi", "xmozW78", "tSkulW", "mtiWmtG0mKzmB1fQCW", "xuhcJW", "Bw9K", "y0RdG0CHWQb+i381W5SSfq", "W5z0cG", "DwzH", "mW/cNq", "m0XB", "W71/fxRcJdLICmkmWRtcJmot", "WP3cRZ51uSk4aKm", "kbldKW", "nKep", "ybSp", "W4bwW5e", "WPqXqb1SWPxcISkvpmkaWRhcN8oInq", "WQJdIZ4", "C2fN", "xmk3hW", "W7hdUrLnx1ur", "b03dVq", "W7vsW7C", "W6JdGYC", "tSoufq", "BguG", "iW/cHG", "WQPfWQHpgCowWPxcLSkRjCk7WQq", "FCojaG", "prRcMG", "zYbh", "y29U", "Dg9t", "y3r1", "mZqYnty4ogDLsuDnEa", "idGG", "CLPx", "ExHQ", "Dg9Y", "DglcMW", "ALJcMG", "W6yqW6i", "CMvY", "xfBcOW", "FCoFAG", "iINcRG", "ruVcSG", "oda4nJa1y25JA1re", "FSoFCG", "kSkCsG", "udxcKG", "W4/dSG0", "yY3cJG", "mvHwyNDVCa", "ihT9", "w8oJxq", "p1ux", "oWJcHW", "wtjO", "zdnH", "WRNcUSkC", "WO3cSqC", "vJvI", "tCk0ha", "ngxcGa", "cL/dIa", "Aw9U", "kd86", "oLtdPW", "WRCQW6q", "mJyWmtu3nuLkD1jeva", "cePu", "nKjTuwzXvW", "W7eXWOi", "lI9K", "W4W2tq", "C2vH", "W78AWQS", "BwfU", "D2HP", "zMLS"];
    _0x1a2e = function () {
      return _0x196859;
    };
    return _0x1a2e();
  }
  _0x35e879.model = "Vivo Y20T";
  const _0x376ea8 = {
    manufacturer: "OnePlus"
  };
  function _0x42bb1a(_0x592856, _0x32b199, _0x10544e) {
    return _0x1e66(_0x10544e - "0x1db", _0x592856);
  }
  _0x376ea8.model = "OnePlus 8T";
  function _0x3beb6a(_0x4fc2b5, _0x51b931, _0x1f9817) {
    return _0x2d11(_0x4fc2b5 - "0x383", _0x1f9817);
  }
  function _0x1e66(_0x476904, _0x5ece18) {
    const _0x3e1309 = _0x1a2e();
    _0x1e66 = function (_0x382af1, _0x29cf7d) {
      _0x382af1 = _0x382af1 - 486;
      let _0x3b3288 = _0x3e1309[_0x382af1];
      if (_0x1e66.MuyYaK === undefined) {
        var _0x34758e = function (_0x2ba9da) {
          let _0x4a9048 = '';
          let _0x53ae99 = '';
          let _0x55d1a4 = _0x4a9048 + _0x34758e;
          let _0x5a7cd1 = 0;
          let _0x1cc5cd;
          let _0x23fc04;
          for (let _0x207e64 = 0; _0x23fc04 = _0x2ba9da.charAt(_0x207e64++); ~_0x23fc04 && (_0x1cc5cd = _0x5a7cd1 % 4 ? _0x1cc5cd * 64 + _0x23fc04 : _0x23fc04, _0x5a7cd1++ % 4) ? _0x4a9048 += _0x55d1a4.charCodeAt(_0x207e64 + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x1cc5cd >> (-2 * _0x5a7cd1 & 6)) : _0x5a7cd1 : 0) {
            _0x23fc04 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x23fc04);
          }
          let _0x4fa414 = 0;
          for (let _0x5db9ea = _0x4a9048.length; _0x4fa414 < _0x5db9ea; _0x4fa414++) {
            _0x53ae99 += "%" + ("00" + _0x4a9048.charCodeAt(_0x4fa414).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x53ae99);
        };
        _0x1e66.pxdcnT = _0x34758e;
        _0x476904 = arguments;
        _0x1e66.MuyYaK = true;
      }
      const _0x529aa7 = _0x3e1309[0];
      const _0x2f49ff = _0x382af1 + _0x529aa7;
      const _0x1ffeb2 = _0x476904[_0x2f49ff];
      if (!_0x1ffeb2) {
        const _0x4f9c9b = function (_0x431138) {
          this.twjWCC = _0x431138;
          this.amjEAQ = [1, 0, 0];
          this.QMdIqR = function () {
            return "newState";
          };
          this.EVIVop = "\\w+ *\\(\\) *{\\w+ *";
          this.DdYAkI = "['|\"].+['|\"];? *}";
        };
        _0x4f9c9b.prototype.BOzGaQ = function () {
          const _0xbd658e = new RegExp(this.EVIVop + this.DdYAkI);
          const _0x436aaf = _0xbd658e.test(this.QMdIqR.toString()) ? --this.amjEAQ[1] : --this.amjEAQ[0];
          return this.EpcLaK(_0x436aaf);
        };
        _0x4f9c9b.prototype.EpcLaK = function (_0x295bfb) {
          if (!Boolean(~_0x295bfb)) {
            return _0x295bfb;
          }
          return this.QepNpm(this.twjWCC);
        };
        _0x4f9c9b.prototype.QepNpm = function (_0x30bcb9) {
          let _0x57e1c0 = 0;
          for (let _0x2820e7 = this.amjEAQ.length; _0x57e1c0 < _0x2820e7; _0x57e1c0++) {
            this.amjEAQ.push(Math.round(Math.random()));
            _0x2820e7 = this.amjEAQ.length;
          }
          return _0x30bcb9(this.amjEAQ[0]);
        };
        new _0x4f9c9b(_0x1e66).BOzGaQ();
        _0x3b3288 = _0x1e66.pxdcnT(_0x3b3288);
        _0x476904[_0x2f49ff] = _0x3b3288;
      } else {
        _0x3b3288 = _0x1ffeb2;
      }
      return _0x3b3288;
    };
    return _0x1e66(_0x476904, _0x5ece18);
  }
  const _0x565c2b = {
    manufacturer: "Realme",
    model: "Realme 8 5G"
  };
  const _0xeb79e1 = {
    manufacturer: "Samsung",
    model: "Samsung Galaxy M51"
  };
  exports.phonesList = [_0x67b408, _0xde9489, _0x136423, _0x35e879, _0x376ea8, _0x565c2b, _0xeb79e1];
  function _0x2214ba(_0x245983) {
    const _0x517b92 = {
      "NmhLX": "string",
      "gNvfd": "while (tr" + _0x2d11(20188639, "e[3F") + " {}",
      "ggbmO": function (_0x50ebf1, _0x2e3f2a) {
        return _0x50ebf1 !== _0x2e3f2a;
      },
      "IaPqr": function (_0x1abb40, _0x524773) {
        return _0x1abb40 / _0x524773;
      },
      "uDBoE": "length",
      "cyaNb": function (_0x10f375, _0x1cf8dc) {
        return _0x10f375 === _0x1cf8dc;
      },
      "HSKkC": function (_0x3c3931, _0x5a21d8) {
        return _0x3c3931 % _0x5a21d8;
      },
      "NbJch": _0x2d11(16649695, "%]M1") + "u",
      "QrdDu": "action",
      "HGNMi": function (_0x294de9, _0x28146c) {
        return _0x294de9 + _0x28146c;
      },
      "XqAum": _0x2d11(4812496, "WQPx") + "r",
      "AqmSE": "stateO" + _0x2d11(23399903, "[xFc") + "ct",
      "DrsGG": function (_0x2e7889, _0x5b9164) {
        return _0x2e7889(_0x5b9164);
      }
    };
    function _0x4f28ea(_0x3f8580) {
      if (typeof _0x3f8580 === "string") {
        return function (_0x45ff16) {}.constructor(_0x517b92.gNvfd).apply("counter");
      } else {
        if (('' + _0x3f8580 / _0x3f8580)[_0x517b92[_0x1e66(106439301, "0x14") + "oE"]] !== 1 || _0x3f8580 % 20 === 0) {
          (function () {
            return true;
          })["con" + _0x1e66(2688317, "0x24a") + "uct" + "or"](_0x517b92.NbJch + "gger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debu" + _0x517b92[_0x1e66(3457696, "0x33f") + "um"]).apply(_0x517b92.AqmSE);
        }
      }
      _0x4f28ea(++_0x3f8580);
    }
    try {
      if (_0x245983) {
        return _0x4f28ea;
      } else {
        _0x4f28ea(0);
      }
    } catch (_0x1273ee) {}
  }