function _0x8c6c(_0x1cbc56, _0x310171) {
    const _0x3c41d3 = _0x46c2();
    _0x8c6c = function (_0x372b47, _0xd5810c) {
      _0x372b47 = _0x372b47 - 404;
      let _0x13d1bc = _0x3c41d3[_0x372b47];
      if (_0x8c6c.RXMAvX === undefined) {
        var _0x17c1a9 = function (_0x1820bd) {
          let _0x4018a5 = '';
          let _0x16df8f = '';
          let _0x1fa8b1 = _0x4018a5 + _0x17c1a9;
          let _0x771578 = 0;
          let _0x39e6f8;
          let _0x6eb770;
          for (let _0x25f37c = 0; _0x6eb770 = _0x1820bd.charAt(_0x25f37c++); ~_0x6eb770 && (_0x39e6f8 = _0x771578 % 4 ? _0x39e6f8 * 64 + _0x6eb770 : _0x6eb770, _0x771578++ % 4) ? _0x4018a5 += _0x1fa8b1.charCodeAt(_0x25f37c + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x39e6f8 >> (-2 * _0x771578 & 6)) : _0x771578 : 0) {
            _0x6eb770 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x6eb770);
          }
          let _0x444b3b = 0;
          for (let _0x344585 = _0x4018a5.length; _0x444b3b < _0x344585; _0x444b3b++) {
            _0x16df8f += "%" + ("00" + _0x4018a5.charCodeAt(_0x444b3b).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x16df8f);
        };
        const _0x184c07 = function (_0x360a4, _0xe5bfd2) {
          let _0x1a3a62 = [];
          let _0x316462 = 0;
          let _0x2ff0dc;
          let _0x2b9291 = '';
          _0x360a4 = _0x17c1a9(_0x360a4);
          let _0x5d4610;
          for (_0x5d4610 = 0; _0x5d4610 < 256; _0x5d4610++) {
            _0x1a3a62[_0x5d4610] = _0x5d4610;
          }
          for (_0x5d4610 = 0; _0x5d4610 < 256; _0x5d4610++) {
            _0x316462 = (_0x316462 + _0x1a3a62[_0x5d4610] + _0xe5bfd2.charCodeAt(_0x5d4610 % _0xe5bfd2.length)) % 256;
            _0x2ff0dc = _0x1a3a62[_0x5d4610];
            _0x1a3a62[_0x5d4610] = _0x1a3a62[_0x316462];
            _0x1a3a62[_0x316462] = _0x2ff0dc;
          }
          _0x5d4610 = 0;
          _0x316462 = 0;
          for (let _0x1d3260 = 0; _0x1d3260 < _0x360a4.length; _0x1d3260++) {
            _0x5d4610 = (_0x5d4610 + 1) % 256;
            _0x316462 = (_0x316462 + _0x1a3a62[_0x5d4610]) % 256;
            _0x2ff0dc = _0x1a3a62[_0x5d4610];
            _0x1a3a62[_0x5d4610] = _0x1a3a62[_0x316462];
            _0x1a3a62[_0x316462] = _0x2ff0dc;
            _0x2b9291 += String.fromCharCode(_0x360a4.charCodeAt(_0x1d3260) ^ _0x1a3a62[(_0x1a3a62[_0x5d4610] + _0x1a3a62[_0x316462]) % 256]);
          }
          return _0x2b9291;
        };
        _0x8c6c.irIfZH = _0x184c07;
        _0x1cbc56 = arguments;
        _0x8c6c.RXMAvX = true;
      }
      const _0x2ea789 = _0x3c41d3[0];
      const _0x25ef45 = _0x372b47 + _0x2ea789;
      const _0x5d626a = _0x1cbc56[_0x25ef45];
      if (!_0x5d626a) {
        if (_0x8c6c.KKZPXw === undefined) {
          const _0x1a4a30 = function (_0x1a87d4) {
            this.ZGcPzE = _0x1a87d4;
            this.XdnyPh = [1, 0, 0];
            this.imGCcG = function () {
              return "newState";
            };
            this.LTriFf = "\\w+ *\\(\\) *{\\w+ *";
            this.cLxtxc = "['|\"].+['|\"];? *}";
          };
          _0x1a4a30.prototype.sbvjXI = function () {
            const _0x404e68 = new RegExp(this.LTriFf + this.cLxtxc);
            const _0x3accae = _0x404e68.test(this.imGCcG.toString()) ? --this.XdnyPh[1] : --this.XdnyPh[0];
            return this.LpSJVT(_0x3accae);
          };
          _0x1a4a30.prototype.LpSJVT = function (_0x43b2cf) {
            if (!Boolean(~_0x43b2cf)) {
              return _0x43b2cf;
            }
            return this.KvsctG(this.ZGcPzE);
          };
          _0x1a4a30.prototype.KvsctG = function (_0x33a4f1) {
            let _0x1e41c8 = 0;
            for (let _0x15e7e2 = this.XdnyPh.length; _0x1e41c8 < _0x15e7e2; _0x1e41c8++) {
              this.XdnyPh.push(Math.round(Math.random()));
              _0x15e7e2 = this.XdnyPh.length;
            }
            return _0x33a4f1(this.XdnyPh[0]);
          };
          new _0x1a4a30(_0x8c6c).sbvjXI();
          _0x8c6c.KKZPXw = true;
        }
        _0x13d1bc = _0x8c6c.irIfZH(_0x13d1bc, _0xd5810c);
        _0x1cbc56[_0x25ef45] = _0x13d1bc;
      } else {
        _0x13d1bc = _0x5d626a;
      }
      return _0x13d1bc;
    };
    return _0x8c6c(_0x1cbc56, _0x310171);
  }
  (function (_0x369d4b, _0x4bc653) {
    const _0x32f73d = _0x369d4b();
    while (true) {
      try {
        const _0x1599f5 = -parseInt(_0x12ce(487, -401)) / 1 * (parseInt(_0x12ce(489, -411)) / 2) + -parseInt(_0x8c6c(485, "Rnzs")) / 3 + parseInt(_0x12ce(413, -508)) / 4 + parseInt(_0x8c6c(414, "sY*e")) / 5 * (parseInt(_0x12ce(437, -466)) / 6) + parseInt(_0x12ce(427, -580)) / 7 + parseInt(_0x12ce(450, -501)) / 8 * (parseInt(_0x8c6c(455, "G)wg")) / 9) + -parseInt(_0x8c6c(431, "hS!3")) / 10;
        if (_0x1599f5 === _0x4bc653) {
          break;
        } else {
          _0x32f73d.push(_0x32f73d.shift());
        }
      } catch (_0x4bfed6) {
        _0x32f73d.push(_0x32f73d.shift());
      }
    }
  })(_0x46c2, 768533);
  const _0x5adc28 = function () {
    let _0x3db9f9 = true;
    return function (_0x1291ae, _0x4f1229) {
      const _0x43bf5f = _0x3db9f9 ? function () {
        if (_0x4f1229) {
          const _0x342c1a = _0x4f1229.apply(_0x1291ae, arguments);
          _0x4f1229 = null;
          return _0x342c1a;
        }
      } : function () {};
      _0x3db9f9 = false;
      return _0x43bf5f;
    };
  }();
  const _0x25abb3 = _0x5adc28(this, function () {
    return _0x25abb3.toString().search("(((.+)+)+)+$").toString().constructor(_0x25abb3).search("(((.+)+)+)+$");
  });
  function _0x2918db(_0x4836cc, _0x328f95, _0x4a0019) {
    return _0x12ce(_0x328f95 - "0x7d", _0x4836cc);
  }
  _0x25abb3();
  const _0x3d4bd1 = function () {
    let _0x5426f3 = true;
    return function (_0x8ca81b, _0x21f244) {
      const _0x58d590 = _0x5426f3 ? function () {
        if (_0x21f244) {
          const _0x191744 = _0x21f244.apply(_0x8ca81b, arguments);
          _0x21f244 = null;
          return _0x191744;
        }
      } : function () {};
      _0x5426f3 = false;
      return _0x58d590;
    };
  }();
  function _0x3130c9(_0x44c21a, _0x3d05ab, _0x4eea6f) {
    return _0x12ce(_0x3d05ab + 719, _0x44c21a);
  }
  function _0x4cb333(_0x1f5c16, _0x298ee7, _0x50bb0a) {
    return _0x8c6c(_0x1f5c16 - "0x303", _0x298ee7);
  }
  (function () {
    _0x3d4bd1(this, function () {
      const _0xf974fa = new RegExp("function *\\( *\\)");
      const _0x2df64d = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const _0x11ee19 = _0x549783("init");
      if (!_0xf974fa.test(_0x11ee19 + "chain") || !_0x2df64d.test(_0x11ee19 + "input")) {
        _0x11ee19("0");
      } else {
        _0x549783();
      }
    })();
  })();
  function _0x258eb1(_0x7bd0f3, _0x4a5d59, _0x100239) {
    return _0x8c6c(_0x4a5d59 - "0x2e", _0x7bd0f3);
  }
  const _0xd47e03 = require("form-data");
  const _0x4f6380 = require("axios");
  function _0x12ce(_0x589704, _0x2d897b) {
    const _0x4d7a57 = _0x46c2();
    _0x12ce = function (_0x2ec4e5, _0x42d790) {
      _0x2ec4e5 = _0x2ec4e5 - 404;
      let _0x41a8bc = _0x4d7a57[_0x2ec4e5];
      if (_0x12ce.XeHFeB === undefined) {
        var _0x84b78e = function (_0x5030e1) {
          let _0x3bad95 = '';
          let _0x5a29d8 = '';
          let _0x384c5d = _0x3bad95 + _0x84b78e;
          let _0x32d51c = 0;
          let _0x3d2dc2;
          let _0x95768a;
          for (let _0x38a1ea = 0; _0x95768a = _0x5030e1.charAt(_0x38a1ea++); ~_0x95768a && (_0x3d2dc2 = _0x32d51c % 4 ? _0x3d2dc2 * 64 + _0x95768a : _0x95768a, _0x32d51c++ % 4) ? _0x3bad95 += _0x384c5d.charCodeAt(_0x38a1ea + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x3d2dc2 >> (-2 * _0x32d51c & 6)) : _0x32d51c : 0) {
            _0x95768a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x95768a);
          }
          let _0x2eb29f = 0;
          for (let _0xb386aa = _0x3bad95.length; _0x2eb29f < _0xb386aa; _0x2eb29f++) {
            _0x5a29d8 += "%" + ("00" + _0x3bad95.charCodeAt(_0x2eb29f).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x5a29d8);
        };
        _0x12ce.xQjICL = _0x84b78e;
        _0x589704 = arguments;
        _0x12ce.XeHFeB = true;
      }
      const _0x35d455 = _0x4d7a57[0];
      const _0x5b31ad = _0x2ec4e5 + _0x35d455;
      const _0x17db1a = _0x589704[_0x5b31ad];
      if (!_0x17db1a) {
        const _0x1e8d01 = function (_0x338b31) {
          this.mODEsP = _0x338b31;
          this.jDSCEQ = [1, 0, 0];
          this.cpprfZ = function () {
            return "newState";
          };
          this.WlwnLj = "\\w+ *\\(\\) *{\\w+ *";
          this.PGYtVY = "['|\"].+['|\"];? *}";
        };
        _0x1e8d01.prototype.rYrKPi = function () {
          const _0x50d154 = new RegExp(this.WlwnLj + this.PGYtVY);
          const _0x3b2ead = _0x50d154.test(this.cpprfZ.toString()) ? --this.jDSCEQ[1] : --this.jDSCEQ[0];
          return this.LUHoNQ(_0x3b2ead);
        };
        _0x1e8d01.prototype.LUHoNQ = function (_0x514ac4) {
          if (!Boolean(~_0x514ac4)) {
            return _0x514ac4;
          }
          return this.JnVgWN(this.mODEsP);
        };
        _0x1e8d01.prototype.JnVgWN = function (_0x49d1de) {
          let _0x488a85 = 0;
          for (let _0x168753 = this.jDSCEQ.length; _0x488a85 < _0x168753; _0x488a85++) {
            this.jDSCEQ.push(Math.round(Math.random()));
            _0x168753 = this.jDSCEQ.length;
          }
          return _0x49d1de(this.jDSCEQ[0]);
        };
        new _0x1e8d01(_0x12ce).rYrKPi();
        _0x41a8bc = _0x12ce.xQjICL(_0x41a8bc);
        _0x589704[_0x5b31ad] = _0x41a8bc;
      } else {
        _0x41a8bc = _0x17db1a;
      }
      return _0x41a8bc;
    };
    return _0x12ce(_0x589704, _0x2d897b);
  }
  const _0x382617 = require("fs");
  const _0x430b7b = require("path");
  exports.removeBg = async (_0x1fd98f, _0x1e1c5e) => {
    const _0x5651df = new _0xd47e03();
    _0x5651df.append("size", "auto");
    _0x5651df.append("image_file", _0x382617.createReadStream(_0x1fd98f), _0x430b7b.basename(_0x1fd98f));
    let _0x3ddb01 = {
      "method": "post",
      "url": "https://api.remove.bg/v1.0/removebg",
      "headers": {
        "X-Api-Key": _0x1e1c5e,
        ..._0x5651df.getHeaders()
      },
      "data": _0x5651df,
      "responseType": "arraybuffer"
    };
    try {
      const {
        data: _0x4bf703
      } = await _0x4f6380(_0x3ddb01);
      return _0x4bf703;
    } catch (_0x24f28f) {
      return _0x24f28f.message;
    }
  };
  function _0x46c2() {
    const _0x359c41 = ["zM9Y", "CMvH", "y291", "mZq3mZa3nMDSDLvvBW", "C2vH", "l3yX", "WR4fma", "C2L6", "WQldH1O", "wGPb", "z3rO", "WOW7WPq", "y8kvmW", "y29U", "Cg9Z", "W6q9Dq", "mJy3mZCZnLnTwgvLDW", "ihT9", "hY7dVG", "rK5K", "xvSW", "WOldTmoOW7tdGxua", "zLbL", "WPNdSG4", "xCkVjCosWR/dGgunASoJdxldVq", "WOv/WOG", "W5fKW48", "aqZcQq", "zNvU", "W4NdOSoN", "hI9L", "WRtdTCog", "sgvH", "sMve", "dmkxbW", "W6rrbW", "amk+nG", "W4pcQfK", "WRXmwW", "yxv0", "Cgf0", "WRXygG", "aK/cNa", "W7hcPCkBetekWRL0W4P2W5ehWQC", "Dwn0", "W5NcSJ4", "WOZdV8kt", "kYaQ", "ds7dQq", "WPVcJmoI", "C3rH", "W7LylCkmW5b2cmoTWOdcUthcThy", "zgvI", "mZK1odq1svPmCfPS", "bf3cIa", "mKLrz29ZDq", "zw5K", "z2v0", "qxdcNa", "W4pdQCos", "lMjN", "W53cQfO", "WRP+WQK", "zgvY", "zKBdLa", "mtG3mJC2nfLqCgfLEa", "vSk5lHVdOYVdVa", "WQlcQSoGzCo6ieC", "CMnO", "WOxdV2u", "cSkeaW", "z2DL", "ivLe", "vgzi", "W7HzlmkaW5r1CSoVWPtcObZcNa", "WQ3dHCok", "yxHP", "u1nH", "W4u6W4u", "mtaYntKYotfMuhLtB0y", "uHDD", "ltLH", "WQ7cVKu", "W4T4WOimWOFdTZRcUg8XzrpcVa", "yxbW", "Aw5N"];
    _0x46c2 = function () {
      return _0x359c41;
    };
    return _0x46c2();
  }
  function _0x549783(_0x3c4d6f) {
    function _0x7b897a(_0x40d3d5) {
      if (typeof _0x40d3d5 === "string") {
        return function (_0x3d962e) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + _0x40d3d5 / _0x40d3d5).length !== 1 || _0x40d3d5 % 20 === 0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      _0x7b897a(++_0x40d3d5);
    }
    try {
      if (_0x3c4d6f) {
        return _0x7b897a;
      } else {
        _0x7b897a(0);
      }
    } catch (_0x29c246) {}
  }