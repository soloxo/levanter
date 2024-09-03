const aZ = function () {
    let v = true;
    return function (w, x) {
      const z = v ? function () {
        if (x) {
          const B = x.apply(w, arguments);
          x = null;
          return B;
        }
      } : function () {};
      v = false;
      return z;
    };
  }();
  const b0 = aZ(this, function () {
    return b0.toString().search("(((.+)+)+)+$").toString().constructor(b0).search("(((.+)+)+)+$");
  });
  b0();
  const b1 = function () {
    let p = true;
    return function (q, v) {
      const y = p ? function () {
        if (v) {
          const A = v.apply(q, arguments);
          v = null;
          return A;
        }
      } : function () {};
      p = false;
      return y;
    };
  }();
  (function () {
    b1(this, function () {
      const q = new RegExp("function *\\( *\\)");
      const v = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const w = bf("init");
      if (!q.test(w + "chain") || !v.test(w + "input")) {
        w("0");
      } else {
        bf();
      }
    })();
  })();
  const b2 = function () {
    let v = true;
    return function (w, x) {
      const y = v ? function () {
        if (x) {
          const B = x.apply(w, arguments);
          x = null;
          return B;
        }
      } : function () {};
      v = false;
      return y;
    };
  }();
  const b3 = b2(this, function () {
    const p = function () {
      let y;
      try {
        y = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (A) {
        y = window;
      }
      return y;
    };
    const q = p();
    const v = q.console = q.console || {};
    const w = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let x = 0x0; x < w.length; x++) {
      const z = b2.constructor.prototype.bind(b2);
      const A = w[x];
      const B = v[A] || z;
      z.__proto__ = b2.bind(b2);
      z.toString = B.toString.bind(B);
      v[A] = z;
    }
  });
  b3();
  const b4 = {
    mute: {},
    unmute: {},
    schedule: []
  };
  const b5 = require("node-cron");
  const b6 = require("../config");
  const b7 = require("./utils");
  const {
    getAllMute: b8,
    getScheduleMessage: b9,
    setScheduleMessage: ba
  } = require("./db/mute");
  exports.validateTime = m => {
    if (!m) {
      return m;
    }
    if (!m.length) {
      return m;
    }
    const p = m.split("-");
    const q = ["*", "*", "*", "*", "*"].map((w, x) => p[x] ? (w = p[x], isNaN(w) && !w.includes("*/") ? "*" : w.trim()) : "*").join(" ");
    const v = b5.validate(q);
    return v ? q : v;
  };
  const bc = (q, v, w, x, y) => {
    if ("off" == w) {
      return !!b4[v][q] && (b4[v][q].task.stop(), delete b4[v][q]);
    }
    if (!b5.validate(x + " " + w + " * * *") || "mute" != v && "unmute" != v) {
      return;
    }
    const B = b5.schedule(x + " " + w + " * * *", () => {
      console.log(v.replace("e", "ing") + " " + q);
      const E = y && "null" != y ? y : undefined;
      const F = "mute" == v ? "announcement" : "not_announcement";
      const G = {
        chat: q,
        "msg": E,
        action: F
      };
      b7.levanter.emit("mute", G);
    }, {
      "scheduled": true,
      "timezone": b6.TIMEZONE || process.env.TZ || "Asia/Kolkata"
    });
    const C = {
      task: B
    };
    if (b4[v][q]) {
      b4[v][q].task.stop();
      delete b4[v][q];
    }
    b4[v][q] = C;
    return true;
  };
  exports.addTask = bc;
  exports.groupMuteTask = async () => {
    const p = await b8();
    for (const q of p) {
      const {
        mute: v,
        unmute: w
      } = JSON.parse(q.context);
      if (0x1 == v.enabled) {
        bc(q.chat, "mute", v.hour, v.minute, v.msg);
      }
      if (0x1 == w.enabled) {
        bc(q.chat, "unmute", w.hour, w.minute, w.msg);
      }
    }
  };
  const be = async (q, v, w, x, y) => {
    if (x) {
      w = await ba(q, v, w, y);
    }
    const A = {
      scheduled: true,
      timezone: b6.TIMEZONE || process.env.TZ || "Asia/Kolkata"
    };
    const B = b5.schedule(v, () => b7.levanter.emit("schedule", {
      "chat": q,
      "msg": w,
      "time": v
    }), A);
    const C = {
      chat: q,
      time: v,
      task: B
    };
    b4.schedule.push(C);
  };
  exports.scheduleMessageTask = async () => {
    const p = await b9(0x0, 0x1);
    for (const q of p) await be(q.chat, q.time, JSON.parse(q.msg));
  };
  exports.deleteScheduleTask = async (p, q) => {
    if ("all" === p) {
      for (const z of b4.schedule) z.task.stop();
      return;
    }
    const x = b4.schedule.find(A => A.chat == p && A.time == q);
    if (x) {
      x.task.stop();
    }
  };
  exports.createSchedule = be;
  function bf(m) {
    function q(v) {
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
      q(++v);
    }
    try {
      if (m) {
        return q;
      } else {
        q(0x0);
      }
    } catch (z) {}
  }