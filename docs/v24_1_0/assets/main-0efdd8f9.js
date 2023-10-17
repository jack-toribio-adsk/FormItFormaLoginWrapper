function Sc(e, n) {
  for (var t = 0; t < n.length; t++) {
    const r = n[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = t(l);
    fetch(l.href, o);
  }
})();
function kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ns = { exports: {} },
  rl = {},
  ts = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zt = Symbol.for("react.element"),
  Ec = Symbol.for("react.portal"),
  Cc = Symbol.for("react.fragment"),
  xc = Symbol.for("react.strict_mode"),
  _c = Symbol.for("react.profiler"),
  Pc = Symbol.for("react.provider"),
  Nc = Symbol.for("react.context"),
  zc = Symbol.for("react.forward_ref"),
  Lc = Symbol.for("react.suspense"),
  Tc = Symbol.for("react.memo"),
  Rc = Symbol.for("react.lazy"),
  Ai = Symbol.iterator;
function Oc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ai && e[Ai]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var rs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ls = Object.assign,
  os = {};
function ut(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = os),
    (this.updater = t || rs);
}
ut.prototype.isReactComponent = {};
ut.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
ut.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function is() {}
is.prototype = ut.prototype;
function Ho(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = os),
    (this.updater = t || rs);
}
var Wo = (Ho.prototype = new is());
Wo.constructor = Ho;
ls(Wo, ut.prototype);
Wo.isPureReactComponent = !0;
var Vi = Array.isArray,
  us = Object.prototype.hasOwnProperty,
  Qo = { current: null },
  ss = { key: !0, ref: !0, __self: !0, __source: !0 };
function as(e, n, t) {
  var r,
    l = {},
    o = null,
    i = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (i = n.ref),
    n.key !== void 0 && (o = "" + n.key),
    n))
      us.call(n, r) && !ss.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Zt,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Qo.current,
  };
}
function Ic(e, n) {
  return {
    $$typeof: Zt,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ko(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zt;
}
function Fc(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Bi = /\/+/g;
function El(e, n) {
  return typeof e == "object" && e !== null && e.key != null
    ? Fc("" + e.key)
    : n.toString(36);
}
function Sr(e, n, t, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zt:
          case Ec:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + El(i, 0) : r),
      Vi(l)
        ? ((t = ""),
          e != null && (t = e.replace(Bi, "$&/") + "/"),
          Sr(l, n, t, "", function (c) {
            return c;
          }))
        : l != null &&
          (Ko(l) &&
            (l = Ic(
              l,
              t +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Bi, "$&/") + "/") +
                e
            )),
          n.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Vi(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + El(o, u);
      i += Sr(o, n, t, s, l);
    }
  else if (((s = Oc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + El(o, u++)), (i += Sr(o, n, t, s, l));
  else if (o === "object")
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function rr(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Sr(e, r, "", "", function (o) {
      return n.call(t, o, l++);
    }),
    r
  );
}
function Mc(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  kr = { transition: null },
  Dc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: kr,
    ReactCurrentOwner: Qo,
  };
T.Children = {
  map: rr,
  forEach: function (e, n, t) {
    rr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      rr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      rr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Ko(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = ut;
T.Fragment = Cc;
T.Profiler = _c;
T.PureComponent = Ho;
T.StrictMode = xc;
T.Suspense = Lc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dc;
T.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ls({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((o = n.ref), (i = Qo.current)),
      n.key !== void 0 && (l = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in n)
      us.call(n, s) &&
        !ss.hasOwnProperty(s) &&
        (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Zt, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: Nc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Pc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = as;
T.createFactory = function (e) {
  var n = as.bind(null, e);
  return (n.type = e), n;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: zc, render: e };
};
T.isValidElement = Ko;
T.lazy = function (e) {
  return { $$typeof: Rc, _payload: { _status: -1, _result: e }, _init: Mc };
};
T.memo = function (e, n) {
  return { $$typeof: Tc, type: e, compare: n === void 0 ? null : n };
};
T.startTransition = function (e) {
  var n = kr.transition;
  kr.transition = {};
  try {
    e();
  } finally {
    kr.transition = n;
  }
};
T.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
T.useCallback = function (e, n) {
  return se.current.useCallback(e, n);
};
T.useContext = function (e) {
  return se.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
T.useEffect = function (e, n) {
  return se.current.useEffect(e, n);
};
T.useId = function () {
  return se.current.useId();
};
T.useImperativeHandle = function (e, n, t) {
  return se.current.useImperativeHandle(e, n, t);
};
T.useInsertionEffect = function (e, n) {
  return se.current.useInsertionEffect(e, n);
};
T.useLayoutEffect = function (e, n) {
  return se.current.useLayoutEffect(e, n);
};
T.useMemo = function (e, n) {
  return se.current.useMemo(e, n);
};
T.useReducer = function (e, n, t) {
  return se.current.useReducer(e, n, t);
};
T.useRef = function (e) {
  return se.current.useRef(e);
};
T.useState = function (e) {
  return se.current.useState(e);
};
T.useSyncExternalStore = function (e, n, t) {
  return se.current.useSyncExternalStore(e, n, t);
};
T.useTransition = function () {
  return se.current.useTransition();
};
T.version = "18.2.0";
ts.exports = T;
var J = ts.exports;
const jc = kc(J),
  Uc = Sc({ __proto__: null, default: jc }, [J]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $c = J,
  Ac = Symbol.for("react.element"),
  Vc = Symbol.for("react.fragment"),
  Bc = Object.prototype.hasOwnProperty,
  Hc = $c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Wc = { key: !0, ref: !0, __self: !0, __source: !0 };
function cs(e, n, t) {
  var r,
    l = {},
    o = null,
    i = null;
  t !== void 0 && (o = "" + t),
    n.key !== void 0 && (o = "" + n.key),
    n.ref !== void 0 && (i = n.ref);
  for (r in n) Bc.call(n, r) && !Wc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return {
    $$typeof: Ac,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Hc.current,
  };
}
rl.Fragment = Vc;
rl.jsx = cs;
rl.jsxs = cs;
ns.exports = rl;
var Yo = ns.exports;
const fs = Yo.Fragment,
  Q = Yo.jsx,
  Fn = Yo.jsxs;
var Xl = {},
  ds = { exports: {} },
  we = {},
  ps = { exports: {} },
  ms = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(C, z) {
    var L = C.length;
    C.push(z);
    e: for (; 0 < L; ) {
      var H = (L - 1) >>> 1,
        G = C[H];
      if (0 < l(G, z)) (C[H] = z), (C[L] = G), (L = H);
      else break e;
    }
  }
  function t(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var z = C[0],
      L = C.pop();
    if (L !== z) {
      C[0] = L;
      e: for (var H = 0, G = C.length, nr = G >>> 1; H < nr; ) {
        var yn = 2 * (H + 1) - 1,
          kl = C[yn],
          gn = yn + 1,
          tr = C[gn];
        if (0 > l(kl, L))
          gn < G && 0 > l(tr, kl)
            ? ((C[H] = tr), (C[gn] = L), (H = gn))
            : ((C[H] = kl), (C[yn] = L), (H = yn));
        else if (gn < G && 0 > l(tr, L)) (C[H] = tr), (C[gn] = L), (H = gn);
        else break e;
      }
    }
    return z;
  }
  function l(C, z) {
    var L = C.sortIndex - z.sortIndex;
    return L !== 0 ? L : C.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    g = !1,
    S = !1,
    w = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var z = t(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= C)
        r(c), (z.sortIndex = z.expirationTime), n(s, z);
      else break;
      z = t(c);
    }
  }
  function v(C) {
    if (((w = !1), d(C), !S))
      if (t(s) !== null) (S = !0), wl(k);
      else {
        var z = t(c);
        z !== null && Sl(v, z.startTime - C);
      }
  }
  function k(C, z) {
    (S = !1), w && ((w = !1), f(P), (P = -1)), (g = !0);
    var L = p;
    try {
      for (
        d(z), m = t(s);
        m !== null && (!(m.expirationTime > z) || (C && !Ne()));

      ) {
        var H = m.callback;
        if (typeof H == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var G = H(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof G == "function" ? (m.callback = G) : m === t(s) && r(s),
            d(z);
        } else r(s);
        m = t(s);
      }
      if (m !== null) var nr = !0;
      else {
        var yn = t(c);
        yn !== null && Sl(v, yn.startTime - z), (nr = !1);
      }
      return nr;
    } finally {
      (m = null), (p = L), (g = !1);
    }
  }
  var x = !1,
    _ = null,
    P = -1,
    B = 5,
    R = -1;
  function Ne() {
    return !(e.unstable_now() - R < B);
  }
  function ct() {
    if (_ !== null) {
      var C = e.unstable_now();
      R = C;
      var z = !0;
      try {
        z = _(!0, C);
      } finally {
        z ? ft() : ((x = !1), (_ = null));
      }
    } else x = !1;
  }
  var ft;
  if (typeof a == "function")
    ft = function () {
      a(ct);
    };
  else if (typeof MessageChannel < "u") {
    var $i = new MessageChannel(),
      wc = $i.port2;
    ($i.port1.onmessage = ct),
      (ft = function () {
        wc.postMessage(null);
      });
  } else
    ft = function () {
      N(ct, 0);
    };
  function wl(C) {
    (_ = C), x || ((x = !0), ft());
  }
  function Sl(C, z) {
    P = N(function () {
      C(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || g || ((S = !0), wl(k));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var L = p;
      p = z;
      try {
        return C();
      } finally {
        p = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, z) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var L = p;
      p = C;
      try {
        return z();
      } finally {
        p = L;
      }
    }),
    (e.unstable_scheduleCallback = function (C, z, L) {
      var H = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? H + L : H))
          : (L = H),
        C)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = L + G),
        (C = {
          id: h++,
          callback: z,
          priorityLevel: C,
          startTime: L,
          expirationTime: G,
          sortIndex: -1,
        }),
        L > H
          ? ((C.sortIndex = L),
            n(c, C),
            t(s) === null &&
              C === t(c) &&
              (w ? (f(P), (P = -1)) : (w = !0), Sl(v, L - H)))
          : ((C.sortIndex = G), n(s, C), S || g || ((S = !0), wl(k))),
        C
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (C) {
      var z = p;
      return function () {
        var L = p;
        p = z;
        try {
          return C.apply(this, arguments);
        } finally {
          p = L;
        }
      };
    });
})(ms);
ps.exports = ms;
var Qc = ps.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hs = J,
  ge = Qc;
function y(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var vs = new Set(),
  It = {};
function On(e, n) {
  et(e, n), et(e + "Capture", n);
}
function et(e, n) {
  for (It[e] = n, e = 0; e < n.length; e++) vs.add(n[e]);
}
var Qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gl = Object.prototype.hasOwnProperty,
  Kc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Hi = {},
  Wi = {};
function Yc(e) {
  return Gl.call(Wi, e)
    ? !0
    : Gl.call(Hi, e)
    ? !1
    : Kc.test(e)
    ? (Wi[e] = !0)
    : ((Hi[e] = !0), !1);
}
function Xc(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Gc(e, n, t, r) {
  if (n === null || typeof n > "u" || Xc(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ae(e, n, t, r, l, o, i) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  ne[n] = new ae(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xo = /[\-:]([a-z])/g;
function Go(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Xo, Go);
    ne[n] = new ae(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Xo, Go);
    ne[n] = new ae(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(Xo, Go);
  ne[n] = new ae(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zo(e, n, t, r) {
  var l = ne.hasOwnProperty(n) ? ne[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Gc(n, t, l, r) && (t = null),
    r || l === null
      ? Yc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ge = hs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  lr = Symbol.for("react.element"),
  Dn = Symbol.for("react.portal"),
  jn = Symbol.for("react.fragment"),
  Jo = Symbol.for("react.strict_mode"),
  Zl = Symbol.for("react.profiler"),
  ys = Symbol.for("react.provider"),
  gs = Symbol.for("react.context"),
  qo = Symbol.for("react.forward_ref"),
  Jl = Symbol.for("react.suspense"),
  ql = Symbol.for("react.suspense_list"),
  bo = Symbol.for("react.memo"),
  Je = Symbol.for("react.lazy"),
  ws = Symbol.for("react.offscreen"),
  Qi = Symbol.iterator;
function dt(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qi && e[Qi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var A = Object.assign,
  Cl;
function St(e) {
  if (Cl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      Cl = (n && n[1]) || "";
    }
  return (
    `
` +
    Cl +
    e
  );
}
var xl = !1;
function _l(e, n) {
  if (!e || xl) return "";
  xl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (xl = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? St(e) : "";
}
function Zc(e) {
  switch (e.tag) {
    case 5:
      return St(e.type);
    case 16:
      return St("Lazy");
    case 13:
      return St("Suspense");
    case 19:
      return St("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = _l(e.type, !1)), e;
    case 11:
      return (e = _l(e.type.render, !1)), e;
    case 1:
      return (e = _l(e.type, !0)), e;
    default:
      return "";
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case jn:
      return "Fragment";
    case Dn:
      return "Portal";
    case Zl:
      return "Profiler";
    case Jo:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case gs:
        return (e.displayName || "Context") + ".Consumer";
      case ys:
        return (e._context.displayName || "Context") + ".Provider";
      case qo:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bo:
        return (
          (n = e.displayName || null), n !== null ? n : bl(e.type) || "Memo"
        );
      case Je:
        (n = e._payload), (e = e._init);
        try {
          return bl(e(n));
        } catch {}
    }
  return null;
}
function Jc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bl(n);
    case 8:
      return n === Jo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function dn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ss(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function qc(e) {
  var n = Ss(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var l = t.get,
      o = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function or(e) {
  e._valueTracker || (e._valueTracker = qc(e));
}
function ks(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return (
    e && (r = Ss(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Or(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function eo(e, n) {
  var t = n.checked;
  return A({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Ki(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = dn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function Es(e, n) {
  (n = n.checked), n != null && Zo(e, "checked", n, !1);
}
function no(e, n) {
  Es(e, n);
  var t = dn(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? to(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && to(e, n.type, dn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Yi(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function to(e, n, t) {
  (n !== "number" || Or(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var kt = Array.isArray;
function Xn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + dn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ro(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return A({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xi(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(y(92));
      if (kt(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: dn(t) };
}
function Cs(e, n) {
  var t = dn(n.value),
    r = dn(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function Gi(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function xs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lo(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? xs(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ir,
  _s = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        ir = ir || document.createElement("div"),
          ir.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = ir.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function Ft(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var xt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  bc = ["Webkit", "ms", "Moz", "O"];
Object.keys(xt).forEach(function (e) {
  bc.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (xt[n] = xt[e]);
  });
});
function Ps(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (xt.hasOwnProperty(e) && xt[e])
    ? ("" + n).trim()
    : n + "px";
}
function Ns(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = Ps(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var ef = A(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function oo(e, n) {
  if (n) {
    if (ef[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(y(62));
  }
}
function io(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var uo = null;
function ei(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var so = null,
  Gn = null,
  Zn = null;
function Zi(e) {
  if ((e = bt(e))) {
    if (typeof so != "function") throw Error(y(280));
    var n = e.stateNode;
    n && ((n = sl(n)), so(e.stateNode, e.type, n));
  }
}
function zs(e) {
  Gn ? (Zn ? Zn.push(e) : (Zn = [e])) : (Gn = e);
}
function Ls() {
  if (Gn) {
    var e = Gn,
      n = Zn;
    if (((Zn = Gn = null), Zi(e), n)) for (e = 0; e < n.length; e++) Zi(n[e]);
  }
}
function Ts(e, n) {
  return e(n);
}
function Rs() {}
var Pl = !1;
function Os(e, n, t) {
  if (Pl) return e(n, t);
  Pl = !0;
  try {
    return Ts(e, n, t);
  } finally {
    (Pl = !1), (Gn !== null || Zn !== null) && (Rs(), Ls());
  }
}
function Mt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = sl(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(y(231, n, typeof t));
  return t;
}
var ao = !1;
if (Qe)
  try {
    var pt = {};
    Object.defineProperty(pt, "passive", {
      get: function () {
        ao = !0;
      },
    }),
      window.addEventListener("test", pt, pt),
      window.removeEventListener("test", pt, pt);
  } catch {
    ao = !1;
  }
function nf(e, n, t, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (h) {
    this.onError(h);
  }
}
var _t = !1,
  Ir = null,
  Fr = !1,
  co = null,
  tf = {
    onError: function (e) {
      (_t = !0), (Ir = e);
    },
  };
function rf(e, n, t, r, l, o, i, u, s) {
  (_t = !1), (Ir = null), nf.apply(tf, arguments);
}
function lf(e, n, t, r, l, o, i, u, s) {
  if ((rf.apply(this, arguments), _t)) {
    if (_t) {
      var c = Ir;
      (_t = !1), (Ir = null);
    } else throw Error(y(198));
    Fr || ((Fr = !0), (co = c));
  }
}
function In(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Is(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function Ji(e) {
  if (In(e) !== e) throw Error(y(188));
}
function of(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = In(e)), n === null)) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === t) return Ji(l), e;
        if (o === r) return Ji(l), n;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) (t = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === t) {
          (i = !0), (t = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (t = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === t) {
            (i = !0), (t = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (t = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function Fs(e) {
  return (e = of(e)), e !== null ? Ms(e) : null;
}
function Ms(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Ms(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Ds = ge.unstable_scheduleCallback,
  qi = ge.unstable_cancelCallback,
  uf = ge.unstable_shouldYield,
  sf = ge.unstable_requestPaint,
  W = ge.unstable_now,
  af = ge.unstable_getCurrentPriorityLevel,
  ni = ge.unstable_ImmediatePriority,
  js = ge.unstable_UserBlockingPriority,
  Mr = ge.unstable_NormalPriority,
  cf = ge.unstable_LowPriority,
  Us = ge.unstable_IdlePriority,
  ll = null,
  Ue = null;
function ff(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : mf,
  df = Math.log,
  pf = Math.LN2;
function mf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((df(e) / pf) | 0)) | 0;
}
var ur = 64,
  sr = 4194304;
function Et(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Dr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Et(u)) : ((o &= i), o !== 0 && (r = Et(o)));
  } else (i = t & ~l), i !== 0 ? (r = Et(i)) : o !== 0 && (r = Et(o));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (o = n & -n), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Oe(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function hf(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function vf(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Oe(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & t) || u & r) && (l[i] = hf(u, n))
      : s <= n && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function fo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function $s() {
  var e = ur;
  return (ur <<= 1), !(ur & 4194240) && (ur = 64), e;
}
function Nl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Jt(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Oe(n)),
    (e[n] = t);
}
function yf(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Oe(t),
      o = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~o);
  }
}
function ti(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Oe(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var I = 0;
function As(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Vs,
  ri,
  Bs,
  Hs,
  Ws,
  po = !1,
  ar = [],
  rn = null,
  ln = null,
  on = null,
  Dt = new Map(),
  jt = new Map(),
  be = [],
  gf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function bi(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      Dt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      jt.delete(n.pointerId);
  }
}
function mt(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      n !== null && ((n = bt(n)), n !== null && ri(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function wf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (rn = mt(rn, e, n, t, r, l)), !0;
    case "dragenter":
      return (ln = mt(ln, e, n, t, r, l)), !0;
    case "mouseover":
      return (on = mt(on, e, n, t, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Dt.set(o, mt(Dt.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), jt.set(o, mt(jt.get(o) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function Qs(e) {
  var n = kn(e.target);
  if (n !== null) {
    var t = In(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = Is(t)), n !== null)) {
          (e.blockedOn = n),
            Ws(e.priority, function () {
              Bs(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Er(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = mo(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (uo = r), t.target.dispatchEvent(r), (uo = null);
    } else return (n = bt(t)), n !== null && ri(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function eu(e, n, t) {
  Er(e) && t.delete(n);
}
function Sf() {
  (po = !1),
    rn !== null && Er(rn) && (rn = null),
    ln !== null && Er(ln) && (ln = null),
    on !== null && Er(on) && (on = null),
    Dt.forEach(eu),
    jt.forEach(eu);
}
function ht(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    po ||
      ((po = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, Sf)));
}
function Ut(e) {
  function n(l) {
    return ht(l, e);
  }
  if (0 < ar.length) {
    ht(ar[0], e);
    for (var t = 1; t < ar.length; t++) {
      var r = ar[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rn !== null && ht(rn, e),
      ln !== null && ht(ln, e),
      on !== null && ht(on, e),
      Dt.forEach(n),
      jt.forEach(n),
      t = 0;
    t < be.length;
    t++
  )
    (r = be[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && ((t = be[0]), t.blockedOn === null); )
    Qs(t), t.blockedOn === null && be.shift();
}
var Jn = Ge.ReactCurrentBatchConfig,
  jr = !0;
function kf(e, n, t, r) {
  var l = I,
    o = Jn.transition;
  Jn.transition = null;
  try {
    (I = 1), li(e, n, t, r);
  } finally {
    (I = l), (Jn.transition = o);
  }
}
function Ef(e, n, t, r) {
  var l = I,
    o = Jn.transition;
  Jn.transition = null;
  try {
    (I = 4), li(e, n, t, r);
  } finally {
    (I = l), (Jn.transition = o);
  }
}
function li(e, n, t, r) {
  if (jr) {
    var l = mo(e, n, t, r);
    if (l === null) jl(e, n, r, Ur, t), bi(e, r);
    else if (wf(l, e, n, t, r)) r.stopPropagation();
    else if ((bi(e, r), n & 4 && -1 < gf.indexOf(e))) {
      for (; l !== null; ) {
        var o = bt(l);
        if (
          (o !== null && Vs(o),
          (o = mo(e, n, t, r)),
          o === null && jl(e, n, r, Ur, t),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else jl(e, n, r, null, t);
  }
}
var Ur = null;
function mo(e, n, t, r) {
  if (((Ur = null), (e = ei(r)), (e = kn(e)), e !== null))
    if (((n = In(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = Is(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Ur = e), null;
}
function Ks(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (af()) {
        case ni:
          return 1;
        case js:
          return 4;
        case Mr:
        case cf:
          return 16;
        case Us:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null,
  oi = null,
  Cr = null;
function Ys() {
  if (Cr) return Cr;
  var e,
    n = oi,
    t = n.length,
    r,
    l = "value" in nn ? nn.value : nn.textContent,
    o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++);
  return (Cr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function xr(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function cr() {
  return !0;
}
function nu() {
  return !1;
}
function Se(e) {
  function n(t, r, l, o, i) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? cr
        : nu),
      (this.isPropagationStopped = nu),
      this
    );
  }
  return (
    A(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = cr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = cr));
      },
      persist: function () {},
      isPersistent: cr,
    }),
    n
  );
}
var st = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ii = Se(st),
  qt = A({}, st, { view: 0, detail: 0 }),
  Cf = Se(qt),
  zl,
  Ll,
  vt,
  ol = A({}, qt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ui,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vt &&
            (vt && e.type === "mousemove"
              ? ((zl = e.screenX - vt.screenX), (Ll = e.screenY - vt.screenY))
              : (Ll = zl = 0),
            (vt = e)),
          zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ll;
    },
  }),
  tu = Se(ol),
  xf = A({}, ol, { dataTransfer: 0 }),
  _f = Se(xf),
  Pf = A({}, qt, { relatedTarget: 0 }),
  Tl = Se(Pf),
  Nf = A({}, st, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zf = Se(Nf),
  Lf = A({}, st, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Tf = Se(Lf),
  Rf = A({}, st, { data: 0 }),
  ru = Se(Rf),
  Of = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  If = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ff = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Mf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Ff[e]) ? !!n[e] : !1;
}
function ui() {
  return Mf;
}
var Df = A({}, qt, {
    key: function (e) {
      if (e.key) {
        var n = Of[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = xr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? If[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ui,
    charCode: function (e) {
      return e.type === "keypress" ? xr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? xr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  jf = Se(Df),
  Uf = A({}, ol, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  lu = Se(Uf),
  $f = A({}, qt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ui,
  }),
  Af = Se($f),
  Vf = A({}, st, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bf = Se(Vf),
  Hf = A({}, ol, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Wf = Se(Hf),
  Qf = [9, 13, 27, 32],
  si = Qe && "CompositionEvent" in window,
  Pt = null;
Qe && "documentMode" in document && (Pt = document.documentMode);
var Kf = Qe && "TextEvent" in window && !Pt,
  Xs = Qe && (!si || (Pt && 8 < Pt && 11 >= Pt)),
  ou = String.fromCharCode(32),
  iu = !1;
function Gs(e, n) {
  switch (e) {
    case "keyup":
      return Qf.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Zs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function Yf(e, n) {
  switch (e) {
    case "compositionend":
      return Zs(n);
    case "keypress":
      return n.which !== 32 ? null : ((iu = !0), ou);
    case "textInput":
      return (e = n.data), e === ou && iu ? null : e;
    default:
      return null;
  }
}
function Xf(e, n) {
  if (Un)
    return e === "compositionend" || (!si && Gs(e, n))
      ? ((e = Ys()), (Cr = oi = nn = null), (Un = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Xs && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Gf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function uu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Gf[e.type] : n === "textarea";
}
function Js(e, n, t, r) {
  zs(r),
    (n = $r(n, "onChange")),
    0 < n.length &&
      ((t = new ii("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n }));
}
var Nt = null,
  $t = null;
function Zf(e) {
  sa(e, 0);
}
function il(e) {
  var n = Vn(e);
  if (ks(n)) return e;
}
function Jf(e, n) {
  if (e === "change") return n;
}
var qs = !1;
if (Qe) {
  var Rl;
  if (Qe) {
    var Ol = "oninput" in document;
    if (!Ol) {
      var su = document.createElement("div");
      su.setAttribute("oninput", "return;"),
        (Ol = typeof su.oninput == "function");
    }
    Rl = Ol;
  } else Rl = !1;
  qs = Rl && (!document.documentMode || 9 < document.documentMode);
}
function au() {
  Nt && (Nt.detachEvent("onpropertychange", bs), ($t = Nt = null));
}
function bs(e) {
  if (e.propertyName === "value" && il($t)) {
    var n = [];
    Js(n, $t, e, ei(e)), Os(Zf, n);
  }
}
function qf(e, n, t) {
  e === "focusin"
    ? (au(), (Nt = n), ($t = t), Nt.attachEvent("onpropertychange", bs))
    : e === "focusout" && au();
}
function bf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return il($t);
}
function ed(e, n) {
  if (e === "click") return il(n);
}
function nd(e, n) {
  if (e === "input" || e === "change") return il(n);
}
function td(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Fe = typeof Object.is == "function" ? Object.is : td;
function At(e, n) {
  if (Fe(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Gl.call(n, l) || !Fe(e[l], n[l])) return !1;
  }
  return !0;
}
function cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function fu(e, n) {
  var t = cu(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = cu(t);
  }
}
function ea(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? ea(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function na() {
  for (var e = window, n = Or(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Or(e.document);
  }
  return n;
}
function ai(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function rd(e) {
  var n = na(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    ea(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && ai(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = fu(t, o));
        var i = fu(t, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(n), e.extend(i.node, i.offset))
            : (n.setEnd(i.node, i.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ld = Qe && "documentMode" in document && 11 >= document.documentMode,
  $n = null,
  ho = null,
  zt = null,
  vo = !1;
function du(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  vo ||
    $n == null ||
    $n !== Or(r) ||
    ((r = $n),
    "selectionStart" in r && ai(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (zt && At(zt, r)) ||
      ((zt = r),
      (r = $r(ho, "onSelect")),
      0 < r.length &&
        ((n = new ii("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = $n))));
}
function fr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var An = {
    animationend: fr("Animation", "AnimationEnd"),
    animationiteration: fr("Animation", "AnimationIteration"),
    animationstart: fr("Animation", "AnimationStart"),
    transitionend: fr("Transition", "TransitionEnd"),
  },
  Il = {},
  ta = {};
Qe &&
  ((ta = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete An.animationend.animation,
    delete An.animationiteration.animation,
    delete An.animationstart.animation),
  "TransitionEvent" in window || delete An.transitionend.transition);
function ul(e) {
  if (Il[e]) return Il[e];
  if (!An[e]) return e;
  var n = An[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in ta) return (Il[e] = n[t]);
  return e;
}
var ra = ul("animationend"),
  la = ul("animationiteration"),
  oa = ul("animationstart"),
  ia = ul("transitionend"),
  ua = new Map(),
  pu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mn(e, n) {
  ua.set(e, n), On(n, [e]);
}
for (var Fl = 0; Fl < pu.length; Fl++) {
  var Ml = pu[Fl],
    od = Ml.toLowerCase(),
    id = Ml[0].toUpperCase() + Ml.slice(1);
  mn(od, "on" + id);
}
mn(ra, "onAnimationEnd");
mn(la, "onAnimationIteration");
mn(oa, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(ia, "onTransitionEnd");
et("onMouseEnter", ["mouseout", "mouseover"]);
et("onMouseLeave", ["mouseout", "mouseover"]);
et("onPointerEnter", ["pointerout", "pointerover"]);
et("onPointerLeave", ["pointerout", "pointerover"]);
On(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
On(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
On("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
On(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
On(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
On(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ct =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ud = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ct));
function mu(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), lf(r, n, void 0, e), (e.currentTarget = null);
}
function sa(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          mu(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          mu(l, u, c), (o = s);
        }
    }
  }
  if (Fr) throw ((e = co), (Fr = !1), (co = null), e);
}
function M(e, n) {
  var t = n[ko];
  t === void 0 && (t = n[ko] = new Set());
  var r = e + "__bubble";
  t.has(r) || (aa(n, e, 2, !1), t.add(r));
}
function Dl(e, n, t) {
  var r = 0;
  n && (r |= 4), aa(t, e, r, n);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function Vt(e) {
  if (!e[dr]) {
    (e[dr] = !0),
      vs.forEach(function (t) {
        t !== "selectionchange" && (ud.has(t) || Dl(t, !1, e), Dl(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[dr] || ((n[dr] = !0), Dl("selectionchange", !1, n));
  }
}
function aa(e, n, t, r) {
  switch (Ks(n)) {
    case 1:
      var l = kf;
      break;
    case 4:
      l = Ef;
      break;
    default:
      l = li;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !ao ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function jl(e, n, t, r, l) {
  var o = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = kn(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Os(function () {
    var c = o,
      h = ei(t),
      m = [];
    e: {
      var p = ua.get(e);
      if (p !== void 0) {
        var g = ii,
          S = e;
        switch (e) {
          case "keypress":
            if (xr(t) === 0) break e;
          case "keydown":
          case "keyup":
            g = jf;
            break;
          case "focusin":
            (S = "focus"), (g = Tl);
            break;
          case "focusout":
            (S = "blur"), (g = Tl);
            break;
          case "beforeblur":
          case "afterblur":
            g = Tl;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = tu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = _f;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Af;
            break;
          case ra:
          case la:
          case oa:
            g = zf;
            break;
          case ia:
            g = Bf;
            break;
          case "scroll":
            g = Cf;
            break;
          case "wheel":
            g = Wf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Tf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = lu;
        }
        var w = (n & 4) !== 0,
          N = !w && e === "scroll",
          f = w ? (p !== null ? p + "Capture" : null) : p;
        w = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Mt(a, f)), v != null && w.push(Bt(a, v, d)))),
            N)
          )
            break;
          a = a.return;
        }
        0 < w.length &&
          ((p = new g(p, S, null, t, h)), m.push({ event: p, listeners: w }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            t !== uo &&
            (S = t.relatedTarget || t.fromElement) &&
            (kn(S) || S[Ke]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((S = t.relatedTarget || t.toElement),
              (g = c),
              (S = S ? kn(S) : null),
              S !== null &&
                ((N = In(S)), S !== N || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((g = null), (S = c)),
          g !== S)
        ) {
          if (
            ((w = tu),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = lu),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (N = g == null ? p : Vn(g)),
            (d = S == null ? p : Vn(S)),
            (p = new w(v, a + "leave", g, t, h)),
            (p.target = N),
            (p.relatedTarget = d),
            (v = null),
            kn(h) === c &&
              ((w = new w(f, a + "enter", S, t, h)),
              (w.target = d),
              (w.relatedTarget = N),
              (v = w)),
            (N = v),
            g && S)
          )
            n: {
              for (w = g, f = S, a = 0, d = w; d; d = Mn(d)) a++;
              for (d = 0, v = f; v; v = Mn(v)) d++;
              for (; 0 < a - d; ) (w = Mn(w)), a--;
              for (; 0 < d - a; ) (f = Mn(f)), d--;
              for (; a--; ) {
                if (w === f || (f !== null && w === f.alternate)) break n;
                (w = Mn(w)), (f = Mn(f));
              }
              w = null;
            }
          else w = null;
          g !== null && hu(m, p, g, w, !1),
            S !== null && N !== null && hu(m, N, S, w, !0);
        }
      }
      e: {
        if (
          ((p = c ? Vn(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var k = Jf;
        else if (uu(p))
          if (qs) k = nd;
          else {
            k = bf;
            var x = qf;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (k = ed);
        if (k && (k = k(e, c))) {
          Js(m, k, t, h);
          break e;
        }
        x && x(e, p, c),
          e === "focusout" &&
            (x = p._wrapperState) &&
            x.controlled &&
            p.type === "number" &&
            to(p, "number", p.value);
      }
      switch (((x = c ? Vn(c) : window), e)) {
        case "focusin":
          (uu(x) || x.contentEditable === "true") &&
            (($n = x), (ho = c), (zt = null));
          break;
        case "focusout":
          zt = ho = $n = null;
          break;
        case "mousedown":
          vo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (vo = !1), du(m, t, h);
          break;
        case "selectionchange":
          if (ld) break;
        case "keydown":
        case "keyup":
          du(m, t, h);
      }
      var _;
      if (si)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Un
          ? Gs(e, t) && (P = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Xs &&
          t.locale !== "ko" &&
          (Un || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Un && (_ = Ys())
            : ((nn = h),
              (oi = "value" in nn ? nn.value : nn.textContent),
              (Un = !0))),
        (x = $r(c, P)),
        0 < x.length &&
          ((P = new ru(P, e, null, t, h)),
          m.push({ event: P, listeners: x }),
          _ ? (P.data = _) : ((_ = Zs(t)), _ !== null && (P.data = _)))),
        (_ = Kf ? Yf(e, t) : Xf(e, t)) &&
          ((c = $r(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new ru("onBeforeInput", "beforeinput", null, t, h)),
            m.push({ event: h, listeners: c }),
            (h.data = _)));
    }
    sa(m, n);
  });
}
function Bt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function $r(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Mt(e, t)),
      o != null && r.unshift(Bt(e, o, l)),
      (o = Mt(e, n)),
      o != null && r.push(Bt(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hu(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Mt(t, o)), s != null && i.unshift(Bt(t, s, u)))
        : l || ((s = Mt(t, o)), s != null && i.push(Bt(t, s, u)))),
      (t = t.return);
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var sd = /\r\n?/g,
  ad = /\u0000|\uFFFD/g;
function vu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      sd,
      `
`
    )
    .replace(ad, "");
}
function pr(e, n, t) {
  if (((n = vu(n)), vu(e) !== n && t)) throw Error(y(425));
}
function Ar() {}
var yo = null,
  go = null;
function wo(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var So = typeof setTimeout == "function" ? setTimeout : void 0,
  cd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  yu = typeof Promise == "function" ? Promise : void 0,
  fd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof yu < "u"
      ? function (e) {
          return yu.resolve(null).then(e).catch(dd);
        }
      : So;
function dd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ul(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(l), Ut(n);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = l;
  } while (t);
  Ut(n);
}
function un(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function gu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var at = Math.random().toString(36).slice(2),
  je = "__reactFiber$" + at,
  Ht = "__reactProps$" + at,
  Ke = "__reactContainer$" + at,
  ko = "__reactEvents$" + at,
  pd = "__reactListeners$" + at,
  md = "__reactHandles$" + at;
function kn(e) {
  var n = e[je];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Ke] || t[je])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = gu(e); e !== null; ) {
          if ((t = e[je])) return t;
          e = gu(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function bt(e) {
  return (
    (e = e[je] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function sl(e) {
  return e[Ht] || null;
}
var Eo = [],
  Bn = -1;
function hn(e) {
  return { current: e };
}
function D(e) {
  0 > Bn || ((e.current = Eo[Bn]), (Eo[Bn] = null), Bn--);
}
function F(e, n) {
  Bn++, (Eo[Bn] = e.current), (e.current = n);
}
var pn = {},
  oe = hn(pn),
  de = hn(!1),
  Nn = pn;
function nt(e, n) {
  var t = e.type.contextTypes;
  if (!t) return pn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in t) l[o] = n[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Vr() {
  D(de), D(oe);
}
function wu(e, n, t) {
  if (oe.current !== pn) throw Error(y(168));
  F(oe, n), F(de, t);
}
function ca(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, Jc(e) || "Unknown", l));
  return A({}, t, r);
}
function Br(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pn),
    (Nn = oe.current),
    F(oe, e),
    F(de, de.current),
    !0
  );
}
function Su(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t
    ? ((e = ca(e, n, Nn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      D(de),
      D(oe),
      F(oe, e))
    : D(de),
    F(de, t);
}
var Ve = null,
  al = !1,
  $l = !1;
function fa(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function hd(e) {
  (al = !0), fa(e);
}
function vn() {
  if (!$l && Ve !== null) {
    $l = !0;
    var e = 0,
      n = I;
    try {
      var t = Ve;
      for (I = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (al = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Ds(ni, vn), l);
    } finally {
      (I = n), ($l = !1);
    }
  }
  return null;
}
var Hn = [],
  Wn = 0,
  Hr = null,
  Wr = 0,
  ke = [],
  Ee = 0,
  zn = null,
  Be = 1,
  He = "";
function wn(e, n) {
  (Hn[Wn++] = Wr), (Hn[Wn++] = Hr), (Hr = e), (Wr = n);
}
function da(e, n, t) {
  (ke[Ee++] = Be), (ke[Ee++] = He), (ke[Ee++] = zn), (zn = e);
  var r = Be;
  e = He;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var o = 32 - Oe(n) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Be = (1 << (32 - Oe(n) + l)) | (t << l) | r),
      (He = o + e);
  } else (Be = (1 << o) | (t << l) | r), (He = e);
}
function ci(e) {
  e.return !== null && (wn(e, 1), da(e, 1, 0));
}
function fi(e) {
  for (; e === Hr; )
    (Hr = Hn[--Wn]), (Hn[Wn] = null), (Wr = Hn[--Wn]), (Hn[Wn] = null);
  for (; e === zn; )
    (zn = ke[--Ee]),
      (ke[Ee] = null),
      (He = ke[--Ee]),
      (ke[Ee] = null),
      (Be = ke[--Ee]),
      (ke[Ee] = null);
}
var ye = null,
  ve = null,
  j = !1,
  Re = null;
function pa(e, n) {
  var t = Ce(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function ku(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (ye = e), (ve = un(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (ye = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = zn !== null ? { id: Be, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = Ce(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (ye = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Co(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xo(e) {
  if (j) {
    var n = ve;
    if (n) {
      var t = n;
      if (!ku(e, n)) {
        if (Co(e)) throw Error(y(418));
        n = un(t.nextSibling);
        var r = ye;
        n && ku(e, n)
          ? pa(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (j = !1), (ye = e));
      }
    } else {
      if (Co(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (j = !1), (ye = e);
    }
  }
}
function Eu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function mr(e) {
  if (e !== ye) return !1;
  if (!j) return Eu(e), (j = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !wo(e.type, e.memoizedProps))),
    n && (n = ve))
  ) {
    if (Co(e)) throw (ma(), Error(y(418)));
    for (; n; ) pa(e, n), (n = un(n.nextSibling));
  }
  if ((Eu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              ve = un(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function ma() {
  for (var e = ve; e; ) e = un(e.nextSibling);
}
function tt() {
  (ve = ye = null), (j = !1);
}
function di(e) {
  Re === null ? (Re = [e]) : Re.push(e);
}
var vd = Ge.ReactCurrentBatchConfig;
function Le(e, n) {
  if (e && e.defaultProps) {
    (n = A({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var Qr = hn(null),
  Kr = null,
  Qn = null,
  pi = null;
function mi() {
  pi = Qn = Kr = null;
}
function hi(e) {
  var n = Qr.current;
  D(Qr), (e._currentValue = n);
}
function _o(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function qn(e, n) {
  (Kr = e),
    (pi = Qn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (fe = !0), (e.firstContext = null));
}
function _e(e) {
  var n = e._currentValue;
  if (pi !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Qn === null)) {
      if (Kr === null) throw Error(y(308));
      (Qn = e), (Kr.dependencies = { lanes: 0, firstContext: e });
    } else Qn = Qn.next = e;
  return n;
}
var En = null;
function vi(e) {
  En === null ? (En = [e]) : En.push(e);
}
function ha(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), vi(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    Ye(e, r)
  );
}
function Ye(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var qe = !1;
function yi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function va(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function We(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function sn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      Ye(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), vi(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    Ye(e, t)
  );
}
function _r(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), ti(e, t);
  }
}
function Cu(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      o = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var i = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (t = t.next);
      } while (t !== null);
      o === null ? (l = o = n) : (o = o.next = n);
    } else l = o = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function Yr(e, n, t, r) {
  var l = e.updateQueue;
  qe = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (h = c = s = null), (u = o);
    do {
      var p = u.lane,
        g = u.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            w = u;
          switch (((p = n), (g = t), w.tag)) {
            case 1:
              if (((S = w.payload), typeof S == "function")) {
                m = S.call(g, m, p);
                break e;
              }
              m = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = w.payload),
                (p = typeof S == "function" ? S.call(g, m, p) : S),
                p == null)
              )
                break e;
              m = A({}, m, p);
              break e;
            case 2:
              qe = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = g), (s = m)) : (h = h.next = g),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (i |= l.lane), (l = l.next);
      while (l !== n);
    } else o === null && (l.shared.lanes = 0);
    (Tn |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function xu(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var ya = new hs.Component().refs;
function Po(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : A({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? In(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = ue(),
      l = cn(e),
      o = We(r, l);
    (o.payload = n),
      t != null && (o.callback = t),
      (n = sn(e, o, l)),
      n !== null && (Ie(n, e, l, r), _r(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = ue(),
      l = cn(e),
      o = We(r, l);
    (o.tag = 1),
      (o.payload = n),
      t != null && (o.callback = t),
      (n = sn(e, o, l)),
      n !== null && (Ie(n, e, l, r), _r(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = ue(),
      r = cn(e),
      l = We(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = sn(e, l, r)),
      n !== null && (Ie(n, e, r, t), _r(n, e, r));
  },
};
function _u(e, n, t, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : n.prototype && n.prototype.isPureReactComponent
      ? !At(t, r) || !At(l, o)
      : !0
  );
}
function ga(e, n, t) {
  var r = !1,
    l = pn,
    o = n.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = _e(o))
      : ((l = pe(n) ? Nn : oe.current),
        (r = n.contextTypes),
        (o = (r = r != null) ? nt(e, l) : pn)),
    (n = new n(t, o)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = cl),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    n
  );
}
function Pu(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && cl.enqueueReplaceState(n, n.state, null);
}
function No(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = ya), yi(e);
  var o = n.contextType;
  typeof o == "object" && o !== null
    ? (l.context = _e(o))
    : ((o = pe(n) ? Nn : oe.current), (l.context = nt(e, o))),
    (l.state = e.memoizedState),
    (o = n.getDerivedStateFromProps),
    typeof o == "function" && (Po(e, n, o, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && cl.enqueueReplaceState(l, l.state, null),
      Yr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function yt(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === o
        ? n.ref
        : ((n = function (i) {
            var u = l.refs;
            u === ya && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (n._stringRef = o),
          n);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function hr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e
      )
    ))
  );
}
function Nu(e) {
  var n = e._init;
  return n(e._payload);
}
function wa(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e) return null;
    for (; a !== null; ) n(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = fn(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = Kl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var k = d.type;
    return k === jn
      ? h(f, a, d.props.children, v, d.key)
      : a !== null &&
        (a.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Je &&
            Nu(k) === a.type))
      ? ((v = l(a, d.props)), (v.ref = yt(f, a, d)), (v.return = f), v)
      : ((v = Rr(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = yt(f, a, d)),
        (v.return = f),
        v);
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Yl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function h(f, a, d, v, k) {
    return a === null || a.tag !== 7
      ? ((a = Pn(d, f.mode, v, k)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Kl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case lr:
          return (
            (d = Rr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = yt(f, null, a)),
            (d.return = f),
            d
          );
        case Dn:
          return (a = Yl(a, f.mode, d)), (a.return = f), a;
        case Je:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (kt(a) || dt(a))
        return (a = Pn(a, f.mode, d, null)), (a.return = f), a;
      hr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var k = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return k !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          return d.key === k ? s(f, a, d, v) : null;
        case Dn:
          return d.key === k ? c(f, a, d, v) : null;
        case Je:
          return (k = d._init), p(f, a, k(d._payload), v);
      }
      if (kt(d) || dt(d)) return k !== null ? null : h(f, a, d, v, null);
      hr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, k) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(d) || null), u(a, f, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case lr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, k);
        case Dn:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, k);
        case Je:
          var x = v._init;
          return g(f, a, d, x(v._payload), k);
      }
      if (kt(v) || dt(v)) return (f = f.get(d) || null), h(a, f, v, k, null);
      hr(a, v);
    }
    return null;
  }
  function S(f, a, d, v) {
    for (
      var k = null, x = null, _ = a, P = (a = 0), B = null;
      _ !== null && P < d.length;
      P++
    ) {
      _.index > P ? ((B = _), (_ = null)) : (B = _.sibling);
      var R = p(f, _, d[P], v);
      if (R === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && R.alternate === null && n(f, _),
        (a = o(R, a, P)),
        x === null ? (k = R) : (x.sibling = R),
        (x = R),
        (_ = B);
    }
    if (P === d.length) return t(f, _), j && wn(f, P), k;
    if (_ === null) {
      for (; P < d.length; P++)
        (_ = m(f, d[P], v)),
          _ !== null &&
            ((a = o(_, a, P)), x === null ? (k = _) : (x.sibling = _), (x = _));
      return j && wn(f, P), k;
    }
    for (_ = r(f, _); P < d.length; P++)
      (B = g(_, f, P, d[P], v)),
        B !== null &&
          (e && B.alternate !== null && _.delete(B.key === null ? P : B.key),
          (a = o(B, a, P)),
          x === null ? (k = B) : (x.sibling = B),
          (x = B));
    return (
      e &&
        _.forEach(function (Ne) {
          return n(f, Ne);
        }),
      j && wn(f, P),
      k
    );
  }
  function w(f, a, d, v) {
    var k = dt(d);
    if (typeof k != "function") throw Error(y(150));
    if (((d = k.call(d)), d == null)) throw Error(y(151));
    for (
      var x = (k = null), _ = a, P = (a = 0), B = null, R = d.next();
      _ !== null && !R.done;
      P++, R = d.next()
    ) {
      _.index > P ? ((B = _), (_ = null)) : (B = _.sibling);
      var Ne = p(f, _, R.value, v);
      if (Ne === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && Ne.alternate === null && n(f, _),
        (a = o(Ne, a, P)),
        x === null ? (k = Ne) : (x.sibling = Ne),
        (x = Ne),
        (_ = B);
    }
    if (R.done) return t(f, _), j && wn(f, P), k;
    if (_ === null) {
      for (; !R.done; P++, R = d.next())
        (R = m(f, R.value, v)),
          R !== null &&
            ((a = o(R, a, P)), x === null ? (k = R) : (x.sibling = R), (x = R));
      return j && wn(f, P), k;
    }
    for (_ = r(f, _); !R.done; P++, R = d.next())
      (R = g(_, f, P, R.value, v)),
        R !== null &&
          (e && R.alternate !== null && _.delete(R.key === null ? P : R.key),
          (a = o(R, a, P)),
          x === null ? (k = R) : (x.sibling = R),
          (x = R));
    return (
      e &&
        _.forEach(function (ct) {
          return n(f, ct);
        }),
      j && wn(f, P),
      k
    );
  }
  function N(f, a, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === jn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case lr:
          e: {
            for (var k = d.key, x = a; x !== null; ) {
              if (x.key === k) {
                if (((k = d.type), k === jn)) {
                  if (x.tag === 7) {
                    t(f, x.sibling),
                      (a = l(x, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  x.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Je &&
                    Nu(k) === x.type)
                ) {
                  t(f, x.sibling),
                    (a = l(x, d.props)),
                    (a.ref = yt(f, x, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                t(f, x);
                break;
              } else n(f, x);
              x = x.sibling;
            }
            d.type === jn
              ? ((a = Pn(d.props.children, f.mode, v, d.key)),
                (a.return = f),
                (f = a))
              : ((v = Rr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = yt(f, a, d)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case Dn:
          e: {
            for (x = d.key; a !== null; ) {
              if (a.key === x)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  t(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              else n(f, a);
              a = a.sibling;
            }
            (a = Yl(d, f.mode, v)), (a.return = f), (f = a);
          }
          return i(f);
        case Je:
          return (x = d._init), N(f, a, x(d._payload), v);
      }
      if (kt(d)) return S(f, a, d, v);
      if (dt(d)) return w(f, a, d, v);
      hr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (t(f, a), (a = Kl(d, f.mode, v)), (a.return = f), (f = a)),
        i(f))
      : t(f, a);
  }
  return N;
}
var rt = wa(!0),
  Sa = wa(!1),
  er = {},
  $e = hn(er),
  Wt = hn(er),
  Qt = hn(er);
function Cn(e) {
  if (e === er) throw Error(y(174));
  return e;
}
function gi(e, n) {
  switch ((F(Qt, n), F(Wt, e), F($e, er), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : lo(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = lo(n, e));
  }
  D($e), F($e, n);
}
function lt() {
  D($e), D(Wt), D(Qt);
}
function ka(e) {
  Cn(Qt.current);
  var n = Cn($e.current),
    t = lo(n, e.type);
  n !== t && (F(Wt, e), F($e, t));
}
function wi(e) {
  Wt.current === e && (D($e), D(Wt));
}
var U = hn(0);
function Xr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Al = [];
function Si() {
  for (var e = 0; e < Al.length; e++)
    Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var Pr = Ge.ReactCurrentDispatcher,
  Vl = Ge.ReactCurrentBatchConfig,
  Ln = 0,
  $ = null,
  Y = null,
  Z = null,
  Gr = !1,
  Lt = !1,
  Kt = 0,
  yd = 0;
function te() {
  throw Error(y(321));
}
function ki(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Fe(e[t], n[t])) return !1;
  return !0;
}
function Ei(e, n, t, r, l, o) {
  if (
    ((Ln = o),
    ($ = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (Pr.current = e === null || e.memoizedState === null ? kd : Ed),
    (e = t(r, l)),
    Lt)
  ) {
    o = 0;
    do {
      if (((Lt = !1), (Kt = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (Z = Y = null),
        (n.updateQueue = null),
        (Pr.current = Cd),
        (e = t(r, l));
    } while (Lt);
  }
  if (
    ((Pr.current = Zr),
    (n = Y !== null && Y.next !== null),
    (Ln = 0),
    (Z = Y = $ = null),
    (Gr = !1),
    n)
  )
    throw Error(y(300));
  return e;
}
function Ci() {
  var e = Kt !== 0;
  return (Kt = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? ($.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Pe() {
  if (Y === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var n = Z === null ? $.memoizedState : Z.next;
  if (n !== null) (Z = n), (Y = e);
  else {
    if (e === null) throw Error(y(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? ($.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Yt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Bl(e) {
  var n = Pe(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    o = t.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (t.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      c = o;
    do {
      var h = c.lane;
      if ((Ln & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          ($.lanes |= h),
          (Tn |= h);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      Fe(r, n.memoizedState) || (fe = !0),
      (n.memoizedState = r),
      (n.baseState = i),
      (n.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), ($.lanes |= o), (Tn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Hl(e) {
  var n = Pe(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Fe(o, n.memoizedState) || (fe = !0),
      (n.memoizedState = o),
      n.baseQueue === null && (n.baseState = o),
      (t.lastRenderedState = o);
  }
  return [o, r];
}
function Ea() {}
function Ca(e, n) {
  var t = $,
    r = Pe(),
    l = n(),
    o = !Fe(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    xi(Pa.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || o || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Xt(9, _a.bind(null, t, r, l, n), void 0, null),
      q === null)
    )
      throw Error(y(349));
    Ln & 30 || xa(t, n, l);
  }
  return l;
}
function xa(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = $.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        ($.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function _a(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), Na(n) && za(e);
}
function Pa(e, n, t) {
  return t(function () {
    Na(n) && za(e);
  });
}
function Na(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Fe(e, t);
  } catch {
    return !0;
  }
}
function za(e) {
  var n = Ye(e, 1);
  n !== null && Ie(n, e, 1, -1);
}
function zu(e) {
  var n = De();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yt,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = Sd.bind(null, $, e)),
    [n.memoizedState, e]
  );
}
function Xt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = $.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        ($.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function La() {
  return Pe().memoizedState;
}
function Nr(e, n, t, r) {
  var l = De();
  ($.flags |= e),
    (l.memoizedState = Xt(1 | n, t, void 0, r === void 0 ? null : r));
}
function fl(e, n, t, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var i = Y.memoizedState;
    if (((o = i.destroy), r !== null && ki(r, i.deps))) {
      l.memoizedState = Xt(n, t, o, r);
      return;
    }
  }
  ($.flags |= e), (l.memoizedState = Xt(1 | n, t, o, r));
}
function Lu(e, n) {
  return Nr(8390656, 8, e, n);
}
function xi(e, n) {
  return fl(2048, 8, e, n);
}
function Ta(e, n) {
  return fl(4, 2, e, n);
}
function Ra(e, n) {
  return fl(4, 4, e, n);
}
function Oa(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function Ia(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), fl(4, 4, Oa.bind(null, n, e), t)
  );
}
function _i() {}
function Fa(e, n) {
  var t = Pe();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && ki(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Ma(e, n) {
  var t = Pe();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && ki(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function Da(e, n, t) {
  return Ln & 21
    ? (Fe(t, n) || ((t = $s()), ($.lanes |= t), (Tn |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = t));
}
function gd(e, n) {
  var t = I;
  (I = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Vl.transition;
  Vl.transition = {};
  try {
    e(!1), n();
  } finally {
    (I = t), (Vl.transition = r);
  }
}
function ja() {
  return Pe().memoizedState;
}
function wd(e, n, t) {
  var r = cn(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ua(e))
  )
    $a(n, t);
  else if (((t = ha(e, n, t, r)), t !== null)) {
    var l = ue();
    Ie(t, e, r, l), Aa(t, n, r);
  }
}
function Sd(e, n, t) {
  var r = cn(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ua(e)) $a(n, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = n.lastRenderedReducer), o !== null)
    )
      try {
        var i = n.lastRenderedState,
          u = o(i, t);
        if (((l.hasEagerState = !0), (l.eagerState = u), Fe(u, i))) {
          var s = n.interleaved;
          s === null
            ? ((l.next = l), vi(n))
            : ((l.next = s.next), (s.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = ha(e, n, l, r)),
      t !== null && ((l = ue()), Ie(t, e, r, l), Aa(t, n, r));
  }
}
function Ua(e) {
  var n = e.alternate;
  return e === $ || (n !== null && n === $);
}
function $a(e, n) {
  Lt = Gr = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function Aa(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), ti(e, t);
  }
}
var Zr = {
    readContext: _e,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  kd = {
    readContext: _e,
    useCallback: function (e, n) {
      return (De().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: _e,
    useEffect: Lu,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        Nr(4194308, 4, Oa.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return Nr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return Nr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = De();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = De();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = wd.bind(null, $, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = De();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: zu,
    useDebugValue: _i,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = zu(!1),
        n = e[0];
      return (e = gd.bind(null, e[1])), (De().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = $,
        l = De();
      if (j) {
        if (t === void 0) throw Error(y(407));
        t = t();
      } else {
        if (((t = n()), q === null)) throw Error(y(349));
        Ln & 30 || xa(r, n, t);
      }
      l.memoizedState = t;
      var o = { value: t, getSnapshot: n };
      return (
        (l.queue = o),
        Lu(Pa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Xt(9, _a.bind(null, r, o, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = De(),
        n = q.identifierPrefix;
      if (j) {
        var t = He,
          r = Be;
        (t = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = Kt++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":");
      } else (t = yd++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  Ed = {
    readContext: _e,
    useCallback: Fa,
    useContext: _e,
    useEffect: xi,
    useImperativeHandle: Ia,
    useInsertionEffect: Ta,
    useLayoutEffect: Ra,
    useMemo: Ma,
    useReducer: Bl,
    useRef: La,
    useState: function () {
      return Bl(Yt);
    },
    useDebugValue: _i,
    useDeferredValue: function (e) {
      var n = Pe();
      return Da(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Yt)[0],
        n = Pe().memoizedState;
      return [e, n];
    },
    useMutableSource: Ea,
    useSyncExternalStore: Ca,
    useId: ja,
    unstable_isNewReconciler: !1,
  },
  Cd = {
    readContext: _e,
    useCallback: Fa,
    useContext: _e,
    useEffect: xi,
    useImperativeHandle: Ia,
    useInsertionEffect: Ta,
    useLayoutEffect: Ra,
    useMemo: Ma,
    useReducer: Hl,
    useRef: La,
    useState: function () {
      return Hl(Yt);
    },
    useDebugValue: _i,
    useDeferredValue: function (e) {
      var n = Pe();
      return Y === null ? (n.memoizedState = e) : Da(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl(Yt)[0],
        n = Pe().memoizedState;
      return [e, n];
    },
    useMutableSource: Ea,
    useSyncExternalStore: Ca,
    useId: ja,
    unstable_isNewReconciler: !1,
  };
function ot(e, n) {
  try {
    var t = "",
      r = n;
    do (t += Zc(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Wl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function zo(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var xd = typeof WeakMap == "function" ? WeakMap : Map;
function Va(e, n, t) {
  (t = We(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      qr || ((qr = !0), (Uo = r)), zo(e, n);
    }),
    t
  );
}
function Ba(e, n, t) {
  (t = We(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        zo(e, n);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (t.callback = function () {
        zo(e, n),
          typeof r != "function" &&
            (an === null ? (an = new Set([this])) : an.add(this));
        var i = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    t
  );
}
function Tu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new xd();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = Ud.bind(null, e, n, t)), n.then(e, e));
}
function Ru(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ou(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = We(-1, 1)), (n.tag = 2), sn(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var _d = Ge.ReactCurrentOwner,
  fe = !1;
function ie(e, n, t, r) {
  n.child = e === null ? Sa(n, null, t, r) : rt(n, e.child, t, r);
}
function Iu(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return (
    qn(n, l),
    (r = Ei(e, n, t, r, o, l)),
    (t = Ci()),
    e !== null && !fe
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, n, l))
      : (j && t && ci(n), (n.flags |= 1), ie(e, n, r, l), n.child)
  );
}
function Fu(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" &&
      !Ii(o) &&
      o.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = o), Ha(e, n, o, r, l))
      : ((e = Rr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : At), t(i, r) && e.ref === n.ref)
    )
      return Xe(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = fn(o, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Ha(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (At(o, r) && e.ref === n.ref)
      if (((fe = !1), (n.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (n.lanes = e.lanes), Xe(e, n, l);
  }
  return Lo(e, n, t, r, l);
}
function Wa(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(Yn, he),
        (he |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          F(Yn, he),
          (he |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : t),
        F(Yn, he),
        (he |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | t), (n.memoizedState = null)) : (r = t),
      F(Yn, he),
      (he |= r);
  return ie(e, n, l, t), n.child;
}
function Qa(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function Lo(e, n, t, r, l) {
  var o = pe(t) ? Nn : oe.current;
  return (
    (o = nt(n, o)),
    qn(n, l),
    (t = Ei(e, n, t, r, o, l)),
    (r = Ci()),
    e !== null && !fe
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, n, l))
      : (j && r && ci(n), (n.flags |= 1), ie(e, n, t, l), n.child)
  );
}
function Mu(e, n, t, r, l) {
  if (pe(t)) {
    var o = !0;
    Br(n);
  } else o = !1;
  if ((qn(n, l), n.stateNode === null))
    zr(e, n), ga(n, t, r), No(n, t, r, l), (r = !0);
  else if (e === null) {
    var i = n.stateNode,
      u = n.memoizedProps;
    i.props = u;
    var s = i.context,
      c = t.contextType;
    typeof c == "object" && c !== null
      ? (c = _e(c))
      : ((c = pe(t) ? Nn : oe.current), (c = nt(n, c)));
    var h = t.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Pu(n, i, r, c)),
      (qe = !1);
    var p = n.memoizedState;
    (i.state = p),
      Yr(n, r, i, l),
      (s = n.memoizedState),
      u !== r || p !== s || de.current || qe
        ? (typeof h == "function" && (Po(n, t, h, r), (s = n.memoizedState)),
          (u = qe || _u(n, t, u, r, p, s, c))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (n.flags |= 4194308),
          (r = !1));
  } else {
    (i = n.stateNode),
      va(e, n),
      (u = n.memoizedProps),
      (c = n.type === n.elementType ? u : Le(n.type, u)),
      (i.props = c),
      (m = n.pendingProps),
      (p = i.context),
      (s = t.contextType),
      typeof s == "object" && s !== null
        ? (s = _e(s))
        : ((s = pe(t) ? Nn : oe.current), (s = nt(n, s)));
    var g = t.getDerivedStateFromProps;
    (h =
      typeof g == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || p !== s) && Pu(n, i, r, s)),
      (qe = !1),
      (p = n.memoizedState),
      (i.state = p),
      Yr(n, r, i, l);
    var S = n.memoizedState;
    u !== m || p !== S || de.current || qe
      ? (typeof g == "function" && (Po(n, t, g, r), (S = n.memoizedState)),
        (c = qe || _u(n, t, c, r, p, S, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, S, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, S, s)),
            typeof i.componentDidUpdate == "function" && (n.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return To(e, n, t, r, o, l);
}
function To(e, n, t, r, l, o) {
  Qa(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && Su(n, t, !1), Xe(e, n, o);
  (r = n.stateNode), (_d.current = n);
  var u =
    i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && i
      ? ((n.child = rt(n, e.child, null, o)), (n.child = rt(n, null, u, o)))
      : ie(e, n, u, o),
    (n.memoizedState = r.state),
    l && Su(n, t, !0),
    n.child
  );
}
function Ka(e) {
  var n = e.stateNode;
  n.pendingContext
    ? wu(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && wu(e, n.context, !1),
    gi(e, n.containerInfo);
}
function Du(e, n, t, r, l) {
  return tt(), di(l), (n.flags |= 256), ie(e, n, t, r), n.child;
}
var Ro = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ya(e, n, t) {
  var r = n.pendingProps,
    l = U.current,
    o = !1,
    i = (n.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    F(U, l & 1),
    e === null)
  )
    return (
      xo(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = n.mode),
              (o = n.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = ml(i, r, 0, null)),
              (e = Pn(e, r, t, null)),
              (o.return = n),
              (e.return = n),
              (o.sibling = e),
              (n.child = o),
              (n.child.memoizedState = Oo(t)),
              (n.memoizedState = Ro),
              e)
            : Pi(n, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Pd(e, n, i, r, u, l, t);
  if (o) {
    (o = r.fallback), (i = n.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (n.deletions = null))
        : ((r = fn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = fn(u, o)) : ((o = Pn(o, i, t, null)), (o.flags |= 2)),
      (o.return = n),
      (r.return = n),
      (r.sibling = o),
      (n.child = r),
      (r = o),
      (o = n.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Oo(t)
          : {
              baseLanes: i.baseLanes | t,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~t),
      (n.memoizedState = Ro),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = fn(o, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function Pi(e, n) {
  return (
    (n = ml({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function vr(e, n, t, r) {
  return (
    r !== null && di(r),
    rt(n, e.child, null, t),
    (e = Pi(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function Pd(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Wl(Error(y(422)))), vr(e, n, i, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((o = r.fallback),
        (l = n.mode),
        (r = ml({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Pn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = n),
        (o.return = n),
        (r.sibling = o),
        (n.child = r),
        n.mode & 1 && rt(n, e.child, null, i),
        (n.child.memoizedState = Oo(i)),
        (n.memoizedState = Ro),
        o);
  if (!(n.mode & 1)) return vr(e, n, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(y(419))), (r = Wl(o, r, void 0)), vr(e, n, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), fe || u)) {
    if (((r = q), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ye(e, l), Ie(r, e, l, -1));
    }
    return Oi(), (r = Wl(Error(y(421)))), vr(e, n, i, r);
  }
  return l.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = $d.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = o.treeContext),
      (ve = un(l.nextSibling)),
      (ye = n),
      (j = !0),
      (Re = null),
      e !== null &&
        ((ke[Ee++] = Be),
        (ke[Ee++] = He),
        (ke[Ee++] = zn),
        (Be = e.id),
        (He = e.overflow),
        (zn = n)),
      (n = Pi(n, r.children)),
      (n.flags |= 4096),
      n);
}
function ju(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), _o(e.return, n, t);
}
function Ql(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((o.isBackwards = n),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = t),
      (o.tailMode = l));
}
function Xa(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ie(e, n, r.children, t), (r = U.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ju(e, t, n);
        else if (e.tag === 19) ju(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(U, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && Xr(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          Ql(n, !1, l, t, o);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Xr(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Ql(n, !0, t, null, o);
        break;
      case "together":
        Ql(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function zr(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Xe(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (Tn |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (
      e = n.child, t = fn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = fn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function Nd(e, n, t) {
  switch (n.tag) {
    case 3:
      Ka(n), tt();
      break;
    case 5:
      ka(n);
      break;
    case 1:
      pe(n.type) && Br(n);
      break;
    case 4:
      gi(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      F(Qr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(U, U.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? Ya(e, n, t)
          : (F(U, U.current & 1),
            (e = Xe(e, n, t)),
            e !== null ? e.sibling : null);
      F(U, U.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return Xa(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        F(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Wa(e, n, t);
  }
  return Xe(e, n, t);
}
var Ga, Io, Za, Ja;
Ga = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Io = function () {};
Za = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), Cn($e.current);
    var o = null;
    switch (t) {
      case "input":
        (l = eo(e, l)), (r = eo(e, r)), (o = []);
        break;
      case "select":
        (l = A({}, l, { value: void 0 })),
          (r = A({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = ro(e, l)), (r = ro(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ar);
    }
    oo(t, r);
    var i;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (t || (t = {}), (t[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (It.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (t || (t = {}), (t[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (t || (t = {}), (t[i] = s[i]));
          } else t || (o || (o = []), o.push(c, t)), (t = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (It.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && M("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(c, s));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Ja = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function gt(e, n) {
  if (!j)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function zd(e, n, t) {
  var r = n.pendingProps;
  switch ((fi(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(n), null;
    case 1:
      return pe(n.type) && Vr(), re(n), null;
    case 3:
      return (
        (r = n.stateNode),
        lt(),
        D(de),
        D(oe),
        Si(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Re !== null && (Vo(Re), (Re = null)))),
        Io(e, n),
        re(n),
        null
      );
    case 5:
      wi(n);
      var l = Cn(Qt.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        Za(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return re(n), null;
        }
        if (((e = Cn($e.current)), mr(n))) {
          (r = n.stateNode), (t = n.type);
          var o = n.memoizedProps;
          switch (((r[je] = n), (r[Ht] = o), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              M("cancel", r), M("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ct.length; l++) M(Ct[l], r);
              break;
            case "source":
              M("error", r);
              break;
            case "img":
            case "image":
            case "link":
              M("error", r), M("load", r);
              break;
            case "details":
              M("toggle", r);
              break;
            case "input":
              Ki(r, o), M("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                M("invalid", r);
              break;
            case "textarea":
              Xi(r, o), M("invalid", r);
          }
          oo(t, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : It.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  M("scroll", r);
            }
          switch (t) {
            case "input":
              or(r), Yi(r, o, !0);
              break;
            case "textarea":
              or(r), Gi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ar);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = xs(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(t, { is: r.is }))
                : ((e = i.createElement(t)),
                  t === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, t)),
            (e[je] = n),
            (e[Ht] = r),
            Ga(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((i = io(t, r)), t)) {
              case "dialog":
                M("cancel", e), M("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ct.length; l++) M(Ct[l], e);
                l = r;
                break;
              case "source":
                M("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                M("error", e), M("load", e), (l = r);
                break;
              case "details":
                M("toggle", e), (l = r);
                break;
              case "input":
                Ki(e, r), (l = eo(e, r)), M("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = A({}, r, { value: void 0 })),
                  M("invalid", e);
                break;
              case "textarea":
                Xi(e, r), (l = ro(e, r)), M("invalid", e);
                break;
              default:
                l = r;
            }
            oo(t, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? Ns(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && _s(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (t !== "textarea" || s !== "") && Ft(e, s)
                    : typeof s == "number" && Ft(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (It.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && M("scroll", e)
                      : s != null && Zo(e, o, s, i));
              }
            switch (t) {
              case "input":
                or(e), Yi(e, r, !1);
                break;
              case "textarea":
                or(e), Gi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Xn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Xn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ar);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return re(n), null;
    case 6:
      if (e && n.stateNode != null) Ja(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
        if (((t = Cn(Qt.current)), Cn($e.current), mr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[je] = n),
            (o = r.nodeValue !== t) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                pr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          o && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[je] = n),
            (n.stateNode = r);
      }
      return re(n), null;
    case 13:
      if (
        (D(U),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (j && ve !== null && n.mode & 1 && !(n.flags & 128))
          ma(), tt(), (n.flags |= 98560), (o = !1);
        else if (((o = mr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = n.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[je] = n;
          } else
            tt(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          re(n), (o = !1);
        } else Re !== null && (Vo(Re), (Re = null)), (o = !0);
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || U.current & 1 ? X === 0 && (X = 3) : Oi())),
          n.updateQueue !== null && (n.flags |= 4),
          re(n),
          null);
    case 4:
      return (
        lt(), Io(e, n), e === null && Vt(n.stateNode.containerInfo), re(n), null
      );
    case 10:
      return hi(n.type._context), re(n), null;
    case 17:
      return pe(n.type) && Vr(), re(n), null;
    case 19:
      if ((D(U), (o = n.memoizedState), o === null)) return re(n), null;
      if (((r = (n.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) gt(o, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((i = Xr(e)), i !== null)) {
                for (
                  n.flags |= 128,
                    gt(o, !1),
                    r = i.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (o = t),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return F(U, (U.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            W() > it &&
            ((n.flags |= 128), (r = !0), gt(o, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xr(i)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              gt(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !j)
            )
              return re(n), null;
          } else
            2 * W() - o.renderingStartTime > it &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), gt(o, !1), (n.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = n.child), (n.child = i))
          : ((t = o.last),
            t !== null ? (t.sibling = i) : (n.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((n = o.tail),
          (o.rendering = n),
          (o.tail = n.sibling),
          (o.renderingStartTime = W()),
          (n.sibling = null),
          (t = U.current),
          F(U, r ? (t & 1) | 2 : t & 1),
          n)
        : (re(n), null);
    case 22:
    case 23:
      return (
        Ri(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? he & 1073741824 && (re(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : re(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function Ld(e, n) {
  switch ((fi(n), n.tag)) {
    case 1:
      return (
        pe(n.type) && Vr(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        lt(),
        D(de),
        D(oe),
        Si(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return wi(n), null;
    case 13:
      if ((D(U), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(y(340));
        tt();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return D(U), null;
    case 4:
      return lt(), null;
    case 10:
      return hi(n.type._context), null;
    case 22:
    case 23:
      return Ri(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yr = !1,
  le = !1,
  Td = typeof WeakSet == "function" ? WeakSet : Set,
  E = null;
function Kn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        V(e, n, r);
      }
    else t.current = null;
}
function Fo(e, n, t) {
  try {
    t();
  } catch (r) {
    V(e, n, r);
  }
}
var Uu = !1;
function Rd(e, n) {
  if (((yo = jr), (e = na()), ai(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, o.nodeType;
          } catch {
            t = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          n: for (;;) {
            for (
              var g;
              m !== t || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (g = m.firstChild) !== null;

            )
              (p = m), (m = g);
            for (;;) {
              if (m === e) break n;
              if (
                (p === t && ++c === l && (u = i),
                p === o && ++h === r && (s = i),
                (g = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = g;
          }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (go = { focusedElem: e, selectionRange: t }, jr = !1, E = n; E !== null; )
    if (((n = E), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (E = e);
    else
      for (; E !== null; ) {
        n = E;
        try {
          var S = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var w = S.memoizedProps,
                    N = S.memoizedState,
                    f = n.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? w : Le(n.type, w),
                      N
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          V(n, n.return, v);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (E = e);
          break;
        }
        E = n.return;
      }
  return (S = Uu), (Uu = !1), S;
}
function Tt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Fo(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Mo(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function qa(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), qa(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[je], delete n[Ht], delete n[ko], delete n[pd], delete n[md])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ba(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $u(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ba(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Do(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Ar));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Do(e, n, t), e = e.sibling; e !== null; ) Do(e, n, t), (e = e.sibling);
}
function jo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (jo(e, n, t), e = e.sibling; e !== null; ) jo(e, n, t), (e = e.sibling);
}
var b = null,
  Te = !1;
function Ze(e, n, t) {
  for (t = t.child; t !== null; ) ec(e, n, t), (t = t.sibling);
}
function ec(e, n, t) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(ll, t);
    } catch {}
  switch (t.tag) {
    case 5:
      le || Kn(t, n);
    case 6:
      var r = b,
        l = Te;
      (b = null),
        Ze(e, n, t),
        (b = r),
        (Te = l),
        b !== null &&
          (Te
            ? ((e = b),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : b.removeChild(t.stateNode));
      break;
    case 18:
      b !== null &&
        (Te
          ? ((e = b),
            (t = t.stateNode),
            e.nodeType === 8
              ? Ul(e.parentNode, t)
              : e.nodeType === 1 && Ul(e, t),
            Ut(e))
          : Ul(b, t.stateNode));
      break;
    case 4:
      (r = b),
        (l = Te),
        (b = t.stateNode.containerInfo),
        (Te = !0),
        Ze(e, n, t),
        (b = r),
        (Te = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Fo(t, n, i),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, n, t);
      break;
    case 1:
      if (
        !le &&
        (Kn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          V(t, n, u);
        }
      Ze(e, n, t);
      break;
    case 21:
      Ze(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((le = (r = le) || t.memoizedState !== null), Ze(e, n, t), (le = r))
        : Ze(e, n, t);
      break;
    default:
      Ze(e, n, t);
  }
}
function Au(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new Td()),
      n.forEach(function (r) {
        var l = Ad.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function ze(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e,
          i = n,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (Te = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (Te = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (Te = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(y(160));
        ec(o, i, l), (b = null), (Te = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        V(l, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) nc(n, e), (n = n.sibling);
}
function nc(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(n, e), Me(e), r & 4)) {
        try {
          Tt(3, e, e.return), dl(3, e);
        } catch (w) {
          V(e, e.return, w);
        }
        try {
          Tt(5, e, e.return);
        } catch (w) {
          V(e, e.return, w);
        }
      }
      break;
    case 1:
      ze(n, e), Me(e), r & 512 && t !== null && Kn(t, t.return);
      break;
    case 5:
      if (
        (ze(n, e),
        Me(e),
        r & 512 && t !== null && Kn(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Ft(l, "");
        } catch (w) {
          V(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = t !== null ? t.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Es(l, o),
              io(u, i);
            var c = io(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                m = s[i + 1];
              h === "style"
                ? Ns(l, m)
                : h === "dangerouslySetInnerHTML"
                ? _s(l, m)
                : h === "children"
                ? Ft(l, m)
                : Zo(l, h, m, c);
            }
            switch (u) {
              case "input":
                no(l, o);
                break;
              case "textarea":
                Cs(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Xn(l, !!o.multiple, g, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Xn(l, !!o.multiple, o.defaultValue, !0)
                      : Xn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Ht] = o;
          } catch (w) {
            V(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((ze(n, e), Me(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          V(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (ze(n, e), Me(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          Ut(n.containerInfo);
        } catch (w) {
          V(e, e.return, w);
        }
      break;
    case 4:
      ze(n, e), Me(e);
      break;
    case 13:
      ze(n, e),
        Me(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Li = W())),
        r & 4 && Au(e);
      break;
    case 22:
      if (
        ((h = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || h), ze(n, e), (le = c)) : ze(n, e),
        Me(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (E = e, h = e.child; h !== null; ) {
            for (m = E = h; E !== null; ) {
              switch (((p = E), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tt(4, p, p.return);
                  break;
                case 1:
                  Kn(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = p), (t = p.return);
                    try {
                      (n = r),
                        (S.props = n.memoizedProps),
                        (S.state = n.memoizedState),
                        S.componentWillUnmount();
                    } catch (w) {
                      V(r, t, w);
                    }
                  }
                  break;
                case 5:
                  Kn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Bu(m);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (E = g)) : Bu(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Ps("display", i)));
              } catch (w) {
                V(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (w) {
                V(e, e.return, w);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      ze(n, e), Me(e), r & 4 && Au(e);
      break;
    case 21:
      break;
    default:
      ze(n, e), Me(e);
  }
}
function Me(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (ba(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ft(l, ""), (r.flags &= -33));
          var o = $u(e);
          jo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = $u(e);
          Do(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function Od(e, n, t) {
  (E = e), tc(e);
}
function tc(e, n, t) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || yr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = yr;
        var c = le;
        if (((yr = i), (le = s) && !c))
          for (E = l; E !== null; )
            (i = E),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Hu(l)
                : s !== null
                ? ((s.return = i), (E = s))
                : Hu(l);
        for (; o !== null; ) (E = o), tc(o), (o = o.sibling);
        (E = l), (yr = u), (le = c);
      }
      Vu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (E = o)) : Vu(e);
  }
}
function Vu(e) {
  for (; E !== null; ) {
    var n = E;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              le || dl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !le)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Le(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = n.updateQueue;
              o !== null && xu(n, o, r);
              break;
            case 3:
              var i = n.updateQueue;
              if (i !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                xu(n, i, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Ut(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        le || (n.flags & 512 && Mo(n));
      } catch (p) {
        V(n, n.return, p);
      }
    }
    if (n === e) {
      E = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (E = t);
      break;
    }
    E = n.return;
  }
}
function Bu(e) {
  for (; E !== null; ) {
    var n = E;
    if (n === e) {
      E = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (E = t);
      break;
    }
    E = n.return;
  }
}
function Hu(e) {
  for (; E !== null; ) {
    var n = E;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            dl(4, n);
          } catch (s) {
            V(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(n, l, s);
            }
          }
          var o = n.return;
          try {
            Mo(n);
          } catch (s) {
            V(n, o, s);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Mo(n);
          } catch (s) {
            V(n, i, s);
          }
      }
    } catch (s) {
      V(n, n.return, s);
    }
    if (n === e) {
      E = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      (u.return = n.return), (E = u);
      break;
    }
    E = n.return;
  }
}
var Id = Math.ceil,
  Jr = Ge.ReactCurrentDispatcher,
  Ni = Ge.ReactCurrentOwner,
  xe = Ge.ReactCurrentBatchConfig,
  O = 0,
  q = null,
  K = null,
  ee = 0,
  he = 0,
  Yn = hn(0),
  X = 0,
  Gt = null,
  Tn = 0,
  pl = 0,
  zi = 0,
  Rt = null,
  ce = null,
  Li = 0,
  it = 1 / 0,
  Ae = null,
  qr = !1,
  Uo = null,
  an = null,
  gr = !1,
  tn = null,
  br = 0,
  Ot = 0,
  $o = null,
  Lr = -1,
  Tr = 0;
function ue() {
  return O & 6 ? W() : Lr !== -1 ? Lr : (Lr = W());
}
function cn(e) {
  return e.mode & 1
    ? O & 2 && ee !== 0
      ? ee & -ee
      : vd.transition !== null
      ? (Tr === 0 && (Tr = $s()), Tr)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ks(e.type))),
        e)
    : 1;
}
function Ie(e, n, t, r) {
  if (50 < Ot) throw ((Ot = 0), ($o = null), Error(y(185)));
  Jt(e, t, r),
    (!(O & 2) || e !== q) &&
      (e === q && (!(O & 2) && (pl |= t), X === 4 && en(e, ee)),
      me(e, r),
      t === 1 && O === 0 && !(n.mode & 1) && ((it = W() + 500), al && vn()));
}
function me(e, n) {
  var t = e.callbackNode;
  vf(e, n);
  var r = Dr(e, e === q ? ee : 0);
  if (r === 0)
    t !== null && qi(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && qi(t), n === 1))
      e.tag === 0 ? hd(Wu.bind(null, e)) : fa(Wu.bind(null, e)),
        fd(function () {
          !(O & 6) && vn();
        }),
        (t = null);
    else {
      switch (As(r)) {
        case 1:
          t = ni;
          break;
        case 4:
          t = js;
          break;
        case 16:
          t = Mr;
          break;
        case 536870912:
          t = Us;
          break;
        default:
          t = Mr;
      }
      t = cc(t, rc.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function rc(e, n) {
  if (((Lr = -1), (Tr = 0), O & 6)) throw Error(y(327));
  var t = e.callbackNode;
  if (bn() && e.callbackNode !== t) return null;
  var r = Dr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = el(e, r);
  else {
    n = r;
    var l = O;
    O |= 2;
    var o = oc();
    (q !== e || ee !== n) && ((Ae = null), (it = W() + 500), _n(e, n));
    do
      try {
        Dd();
        break;
      } catch (u) {
        lc(e, u);
      }
    while (1);
    mi(),
      (Jr.current = o),
      (O = l),
      K !== null ? (n = 0) : ((q = null), (ee = 0), (n = X));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = fo(e)), l !== 0 && ((r = l), (n = Ao(e, l)))), n === 1)
    )
      throw ((t = Gt), _n(e, 0), en(e, r), me(e, W()), t);
    if (n === 6) en(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Fd(l) &&
          ((n = el(e, r)),
          n === 2 && ((o = fo(e)), o !== 0 && ((r = o), (n = Ao(e, o)))),
          n === 1))
      )
        throw ((t = Gt), _n(e, 0), en(e, r), me(e, W()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Sn(e, ce, Ae);
          break;
        case 3:
          if (
            (en(e, r), (r & 130023424) === r && ((n = Li + 500 - W()), 10 < n))
          ) {
            if (Dr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = So(Sn.bind(null, e, ce, Ae), n);
            break;
          }
          Sn(e, ce, Ae);
          break;
        case 4:
          if ((en(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Oe(r);
            (o = 1 << i), (i = n[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = W() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Id(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = So(Sn.bind(null, e, ce, Ae), r);
            break;
          }
          Sn(e, ce, Ae);
          break;
        case 5:
          Sn(e, ce, Ae);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, W()), e.callbackNode === t ? rc.bind(null, e) : null;
}
function Ao(e, n) {
  var t = Rt;
  return (
    e.current.memoizedState.isDehydrated && (_n(e, n).flags |= 256),
    (e = el(e, n)),
    e !== 2 && ((n = ce), (ce = t), n !== null && Vo(n)),
    e
  );
}
function Vo(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function Fd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Fe(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function en(e, n) {
  for (
    n &= ~zi,
      n &= ~pl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Oe(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Wu(e) {
  if (O & 6) throw Error(y(327));
  bn();
  var n = Dr(e, 0);
  if (!(n & 1)) return me(e, W()), null;
  var t = el(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = fo(e);
    r !== 0 && ((n = r), (t = Ao(e, r)));
  }
  if (t === 1) throw ((t = Gt), _n(e, 0), en(e, n), me(e, W()), t);
  if (t === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    Sn(e, ce, Ae),
    me(e, W()),
    null
  );
}
function Ti(e, n) {
  var t = O;
  O |= 1;
  try {
    return e(n);
  } finally {
    (O = t), O === 0 && ((it = W() + 500), al && vn());
  }
}
function Rn(e) {
  tn !== null && tn.tag === 0 && !(O & 6) && bn();
  var n = O;
  O |= 1;
  var t = xe.transition,
    r = I;
  try {
    if (((xe.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (xe.transition = t), (O = n), !(O & 6) && vn();
  }
}
function Ri() {
  (he = Yn.current), D(Yn);
}
function _n(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), cd(t)), K !== null))
    for (t = K.return; t !== null; ) {
      var r = t;
      switch ((fi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Vr();
          break;
        case 3:
          lt(), D(de), D(oe), Si();
          break;
        case 5:
          wi(r);
          break;
        case 4:
          lt();
          break;
        case 13:
          D(U);
          break;
        case 19:
          D(U);
          break;
        case 10:
          hi(r.type._context);
          break;
        case 22:
        case 23:
          Ri();
      }
      t = t.return;
    }
  if (
    ((q = e),
    (K = e = fn(e.current, null)),
    (ee = he = n),
    (X = 0),
    (Gt = null),
    (zi = pl = Tn = 0),
    (ce = Rt = null),
    En !== null)
  ) {
    for (n = 0; n < En.length; n++)
      if (((t = En[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          o = t.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        t.pending = r;
      }
    En = null;
  }
  return e;
}
function lc(e, n) {
  do {
    var t = K;
    try {
      if ((mi(), (Pr.current = Zr), Gr)) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Gr = !1;
      }
      if (
        ((Ln = 0),
        (Z = Y = $ = null),
        (Lt = !1),
        (Kt = 0),
        (Ni.current = null),
        t === null || t.return === null)
      ) {
        (X = 1), (Gt = n), (K = null);
        break;
      }
      e: {
        var o = e,
          i = t.return,
          u = t,
          s = n;
        if (
          ((n = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = Ru(i);
          if (g !== null) {
            (g.flags &= -257),
              Ou(g, i, u, o, n),
              g.mode & 1 && Tu(o, c, n),
              (n = g),
              (s = c);
            var S = n.updateQueue;
            if (S === null) {
              var w = new Set();
              w.add(s), (n.updateQueue = w);
            } else S.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              Tu(o, c, n), Oi();
              break e;
            }
            s = Error(y(426));
          }
        } else if (j && u.mode & 1) {
          var N = Ru(i);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              Ou(N, i, u, o, n),
              di(ot(s, u));
            break e;
          }
        }
        (o = s = ot(s, u)),
          X !== 4 && (X = 2),
          Rt === null ? (Rt = [o]) : Rt.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (n &= -n), (o.lanes |= n);
              var f = Va(o, s, n);
              Cu(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (an === null || !an.has(d))))
              ) {
                (o.flags |= 65536), (n &= -n), (o.lanes |= n);
                var v = Ba(o, u, n);
                Cu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      uc(t);
    } catch (k) {
      (n = k), K === t && t !== null && (K = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function oc() {
  var e = Jr.current;
  return (Jr.current = Zr), e === null ? Zr : e;
}
function Oi() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    q === null || (!(Tn & 268435455) && !(pl & 268435455)) || en(q, ee);
}
function el(e, n) {
  var t = O;
  O |= 2;
  var r = oc();
  (q !== e || ee !== n) && ((Ae = null), _n(e, n));
  do
    try {
      Md();
      break;
    } catch (l) {
      lc(e, l);
    }
  while (1);
  if ((mi(), (O = t), (Jr.current = r), K !== null)) throw Error(y(261));
  return (q = null), (ee = 0), X;
}
function Md() {
  for (; K !== null; ) ic(K);
}
function Dd() {
  for (; K !== null && !uf(); ) ic(K);
}
function ic(e) {
  var n = ac(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    n === null ? uc(e) : (K = n),
    (Ni.current = null);
}
function uc(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = Ld(t, n)), t !== null)) {
        (t.flags &= 32767), (K = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((t = zd(t, n, he)), t !== null)) {
      K = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      K = n;
      return;
    }
    K = n = e;
  } while (n !== null);
  X === 0 && (X = 5);
}
function Sn(e, n, t) {
  var r = I,
    l = xe.transition;
  try {
    (xe.transition = null), (I = 1), jd(e, n, t, r);
  } finally {
    (xe.transition = l), (I = r);
  }
  return null;
}
function jd(e, n, t, r) {
  do bn();
  while (tn !== null);
  if (O & 6) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = t.lanes | t.childLanes;
  if (
    (yf(e, o),
    e === q && ((K = q = null), (ee = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      gr ||
      ((gr = !0),
      cc(Mr, function () {
        return bn(), null;
      })),
    (o = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || o)
  ) {
    (o = xe.transition), (xe.transition = null);
    var i = I;
    I = 1;
    var u = O;
    (O |= 4),
      (Ni.current = null),
      Rd(e, t),
      nc(t, e),
      rd(go),
      (jr = !!yo),
      (go = yo = null),
      (e.current = t),
      Od(t),
      sf(),
      (O = u),
      (I = i),
      (xe.transition = o);
  } else e.current = t;
  if (
    (gr && ((gr = !1), (tn = e), (br = l)),
    (o = e.pendingLanes),
    o === 0 && (an = null),
    ff(t.stateNode),
    me(e, W()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (qr) throw ((qr = !1), (e = Uo), (Uo = null), e);
  return (
    br & 1 && e.tag !== 0 && bn(),
    (o = e.pendingLanes),
    o & 1 ? (e === $o ? Ot++ : ((Ot = 0), ($o = e))) : (Ot = 0),
    vn(),
    null
  );
}
function bn() {
  if (tn !== null) {
    var e = As(br),
      n = xe.transition,
      t = I;
    try {
      if (((xe.transition = null), (I = 16 > e ? 16 : e), tn === null))
        var r = !1;
      else {
        if (((e = tn), (tn = null), (br = 0), O & 6)) throw Error(y(331));
        var l = O;
        for (O |= 4, E = e.current; E !== null; ) {
          var o = E,
            i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (E = c; E !== null; ) {
                  var h = E;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tt(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (E = m);
                  else
                    for (; E !== null; ) {
                      h = E;
                      var p = h.sibling,
                        g = h.return;
                      if ((qa(h), h === c)) {
                        E = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (E = p);
                        break;
                      }
                      E = g;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var w = S.child;
                if (w !== null) {
                  S.child = null;
                  do {
                    var N = w.sibling;
                    (w.sibling = null), (w = N);
                  } while (w !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (E = i);
          else
            e: for (; E !== null; ) {
              if (((o = E), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tt(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (E = f);
                break e;
              }
              E = o.return;
            }
        }
        var a = e.current;
        for (E = a; E !== null; ) {
          i = E;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (E = d);
          else
            e: for (i = a; E !== null; ) {
              if (((u = E), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dl(9, u);
                  }
                } catch (k) {
                  V(u, u.return, k);
                }
              if (u === i) {
                E = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (E = v);
                break e;
              }
              E = u.return;
            }
        }
        if (
          ((O = l), vn(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(ll, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = t), (xe.transition = n);
    }
  }
  return !1;
}
function Qu(e, n, t) {
  (n = ot(t, n)),
    (n = Va(e, n, 1)),
    (e = sn(e, n, 1)),
    (n = ue()),
    e !== null && (Jt(e, 1, n), me(e, n));
}
function V(e, n, t) {
  if (e.tag === 3) Qu(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Qu(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (an === null || !an.has(r)))
        ) {
          (e = ot(t, e)),
            (e = Ba(n, e, 1)),
            (n = sn(n, e, 1)),
            (e = ue()),
            n !== null && (Jt(n, 1, e), me(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Ud(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = ue()),
    (e.pingedLanes |= e.suspendedLanes & t),
    q === e &&
      (ee & t) === t &&
      (X === 4 || (X === 3 && (ee & 130023424) === ee && 500 > W() - Li)
        ? _n(e, 0)
        : (zi |= t)),
    me(e, n);
}
function sc(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = sr), (sr <<= 1), !(sr & 130023424) && (sr = 4194304))
      : (n = 1));
  var t = ue();
  (e = Ye(e, n)), e !== null && (Jt(e, n, t), me(e, t));
}
function $d(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), sc(e, t);
}
function Ad(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), sc(e, t);
}
var ac;
ac = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (fe = !1), Nd(e, n, t);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), j && n.flags & 1048576 && da(n, Wr, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      zr(e, n), (e = n.pendingProps);
      var l = nt(n, oe.current);
      qn(n, t), (l = Ei(null, n, r, e, l, t));
      var o = Ci();
      return (
        (n.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            pe(r) ? ((o = !0), Br(n)) : (o = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            yi(n),
            (l.updater = cl),
            (n.stateNode = l),
            (l._reactInternals = n),
            No(n, r, e, t),
            (n = To(null, n, r, !0, o, t)))
          : ((n.tag = 0), j && o && ci(n), ie(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (zr(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = Bd(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            n = Lo(null, n, r, e, t);
            break e;
          case 1:
            n = Mu(null, n, r, e, t);
            break e;
          case 11:
            n = Iu(null, n, r, e, t);
            break e;
          case 14:
            n = Fu(null, n, r, Le(r.type, e), t);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Le(r, l)),
        Lo(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Le(r, l)),
        Mu(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((Ka(n), e === null)) throw Error(y(387));
        (r = n.pendingProps),
          (o = n.memoizedState),
          (l = o.element),
          va(e, n),
          Yr(n, r, null, t);
        var i = n.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (n.updateQueue.baseState = o),
            (n.memoizedState = o),
            n.flags & 256)
          ) {
            (l = ot(Error(y(423)), n)), (n = Du(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = ot(Error(y(424)), n)), (n = Du(e, n, r, t, l));
            break e;
          } else
            for (
              ve = un(n.stateNode.containerInfo.firstChild),
                ye = n,
                j = !0,
                Re = null,
                t = Sa(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((tt(), r === l)) {
            n = Xe(e, n, t);
            break e;
          }
          ie(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        ka(n),
        e === null && xo(n),
        (r = n.type),
        (l = n.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        wo(r, l) ? (i = null) : o !== null && wo(r, o) && (n.flags |= 32),
        Qa(e, n),
        ie(e, n, i, t),
        n.child
      );
    case 6:
      return e === null && xo(n), null;
    case 13:
      return Ya(e, n, t);
    case 4:
      return (
        gi(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = rt(n, null, r, t)) : ie(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Le(r, l)),
        Iu(e, n, r, l, t)
      );
    case 7:
      return ie(e, n, n.pendingProps, t), n.child;
    case 8:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (o = n.memoizedProps),
          (i = l.value),
          F(Qr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Fe(o.value, i)) {
            if (o.children === l.children && !de.current) {
              n = Xe(e, n, t);
              break e;
            }
          } else
            for (o = n.child, o !== null && (o.return = n); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = We(-1, t & -t)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= t),
                      (s = o.alternate),
                      s !== null && (s.lanes |= t),
                      _o(o.return, t, n),
                      (u.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === n.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(y(341));
                (i.lanes |= t),
                  (u = i.alternate),
                  u !== null && (u.lanes |= t),
                  _o(i, t, n),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === n) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ie(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        qn(n, t),
        (l = _e(l)),
        (r = r(l)),
        (n.flags |= 1),
        ie(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = Le(r, n.pendingProps)),
        (l = Le(r.type, l)),
        Fu(e, n, r, l, t)
      );
    case 15:
      return Ha(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Le(r, l)),
        zr(e, n),
        (n.tag = 1),
        pe(r) ? ((e = !0), Br(n)) : (e = !1),
        qn(n, t),
        ga(n, r, l),
        No(n, r, l, t),
        To(null, n, r, !0, e, t)
      );
    case 19:
      return Xa(e, n, t);
    case 22:
      return Wa(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function cc(e, n) {
  return Ds(e, n);
}
function Vd(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, n, t, r) {
  return new Vd(e, n, t, r);
}
function Ii(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Bd(e) {
  if (typeof e == "function") return Ii(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qo)) return 11;
    if (e === bo) return 14;
  }
  return 2;
}
function fn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = Ce(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Rr(e, n, t, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ii(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case jn:
        return Pn(t.children, l, o, n);
      case Jo:
        (i = 8), (l |= 8);
        break;
      case Zl:
        return (
          (e = Ce(12, t, n, l | 2)), (e.elementType = Zl), (e.lanes = o), e
        );
      case Jl:
        return (e = Ce(13, t, n, l)), (e.elementType = Jl), (e.lanes = o), e;
      case ql:
        return (e = Ce(19, t, n, l)), (e.elementType = ql), (e.lanes = o), e;
      case ws:
        return ml(t, l, o, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ys:
              i = 10;
              break e;
            case gs:
              i = 9;
              break e;
            case qo:
              i = 11;
              break e;
            case bo:
              i = 14;
              break e;
            case Je:
              (i = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = Ce(i, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = o), n
  );
}
function Pn(e, n, t, r) {
  return (e = Ce(7, e, r, n)), (e.lanes = t), e;
}
function ml(e, n, t, r) {
  return (
    (e = Ce(22, e, r, n)),
    (e.elementType = ws),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Kl(e, n, t) {
  return (e = Ce(6, e, null, n)), (e.lanes = t), e;
}
function Yl(e, n, t) {
  return (
    (n = Ce(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function Hd(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Nl(0)),
    (this.expirationTimes = Nl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Nl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Fi(e, n, t, r, l, o, i, u, s) {
  return (
    (e = new Hd(e, n, t, u, s)),
    n === 1 ? ((n = 1), o === !0 && (n |= 8)) : (n = 0),
    (o = Ce(3, null, null, n)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yi(o),
    e
  );
}
function Wd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function fc(e) {
  if (!e) return pn;
  e = e._reactInternals;
  e: {
    if (In(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (pe(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (pe(t)) return ca(e, t, n);
  }
  return n;
}
function dc(e, n, t, r, l, o, i, u, s) {
  return (
    (e = Fi(t, r, !0, e, l, o, i, u, s)),
    (e.context = fc(null)),
    (t = e.current),
    (r = ue()),
    (l = cn(t)),
    (o = We(r, l)),
    (o.callback = n ?? null),
    sn(t, o, l),
    (e.current.lanes = l),
    Jt(e, l, r),
    me(e, r),
    e
  );
}
function hl(e, n, t, r) {
  var l = n.current,
    o = ue(),
    i = cn(l);
  return (
    (t = fc(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = We(o, i)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = sn(l, n, i)),
    e !== null && (Ie(e, l, i, o), _r(e, l, i)),
    i
  );
}
function nl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ku(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Mi(e, n) {
  Ku(e, n), (e = e.alternate) && Ku(e, n);
}
function Qd() {
  return null;
}
var pc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Di(e) {
  this._internalRoot = e;
}
vl.prototype.render = Di.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  hl(e, n, null, null);
};
vl.prototype.unmount = Di.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Rn(function () {
      hl(null, e, null, null);
    }),
      (n[Ke] = null);
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Hs();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < be.length && n !== 0 && n < be[t].priority; t++);
    be.splice(t, 0, e), t === 0 && Qs(e);
  }
};
function ji(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Yu() {}
function Kd(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = nl(i);
        o.call(c);
      };
    }
    var i = dc(n, r, e, 0, null, !1, !1, "", Yu);
    return (
      (e._reactRootContainer = i),
      (e[Ke] = i.current),
      Vt(e.nodeType === 8 ? e.parentNode : e),
      Rn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = nl(s);
      u.call(c);
    };
  }
  var s = Fi(e, 0, !1, null, null, !1, !1, "", Yu);
  return (
    (e._reactRootContainer = s),
    (e[Ke] = s.current),
    Vt(e.nodeType === 8 ? e.parentNode : e),
    Rn(function () {
      hl(n, s, t, r);
    }),
    s
  );
}
function gl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = nl(i);
        u.call(s);
      };
    }
    hl(n, i, e, l);
  } else i = Kd(t, n, e, l, r);
  return nl(i);
}
Vs = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = Et(n.pendingLanes);
        t !== 0 &&
          (ti(n, t | 1), me(n, W()), !(O & 6) && ((it = W() + 500), vn()));
      }
      break;
    case 13:
      Rn(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = ue();
          Ie(r, e, 1, l);
        }
      }),
        Mi(e, 1);
  }
};
ri = function (e) {
  if (e.tag === 13) {
    var n = Ye(e, 134217728);
    if (n !== null) {
      var t = ue();
      Ie(n, e, 134217728, t);
    }
    Mi(e, 134217728);
  }
};
Bs = function (e) {
  if (e.tag === 13) {
    var n = cn(e),
      t = Ye(e, n);
    if (t !== null) {
      var r = ue();
      Ie(t, e, n, r);
    }
    Mi(e, n);
  }
};
Hs = function () {
  return I;
};
Ws = function (e, n) {
  var t = I;
  try {
    return (I = e), n();
  } finally {
    I = t;
  }
};
so = function (e, n, t) {
  switch (n) {
    case "input":
      if ((no(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = sl(r);
            if (!l) throw Error(y(90));
            ks(r), no(r, l);
          }
        }
      }
      break;
    case "textarea":
      Cs(e, t);
      break;
    case "select":
      (n = t.value), n != null && Xn(e, !!t.multiple, n, !1);
  }
};
Ts = Ti;
Rs = Rn;
var Yd = { usingClientEntryPoint: !1, Events: [bt, Vn, sl, zs, Ls, Ti] },
  wt = {
    findFiberByHostInstance: kn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Xd = {
    bundleType: wt.bundleType,
    version: wt.version,
    rendererPackageName: wt.rendererPackageName,
    rendererConfig: wt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Fs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wt.findFiberByHostInstance || Qd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wr.isDisabled && wr.supportsFiber)
    try {
      (ll = wr.inject(Xd)), (Ue = wr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yd;
we.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ji(n)) throw Error(y(200));
  return Wd(e, n, null, t);
};
we.createRoot = function (e, n) {
  if (!ji(e)) throw Error(y(299));
  var t = !1,
    r = "",
    l = pc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = Fi(e, 1, !1, null, null, t, !1, r, l)),
    (e[Ke] = n.current),
    Vt(e.nodeType === 8 ? e.parentNode : e),
    new Di(n)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Fs(n)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return Rn(e);
};
we.hydrate = function (e, n, t) {
  if (!yl(n)) throw Error(y(200));
  return gl(null, e, n, !0, t);
};
we.hydrateRoot = function (e, n, t) {
  if (!ji(e)) throw Error(y(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    o = "",
    i = pc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (n = dc(n, null, e, 1, t ?? null, l, !1, o, i)),
    (e[Ke] = n.current),
    Vt(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new vl(n);
};
we.render = function (e, n, t) {
  if (!yl(n)) throw Error(y(200));
  return gl(null, e, n, !1, t);
};
we.unmountComponentAtNode = function (e) {
  if (!yl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Rn(function () {
        gl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ke] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = Ti;
we.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!yl(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return gl(e, n, t, !1, r);
};
we.version = "18.2.0-next-9e3b772b8-20220608";
function mc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mc);
    } catch (e) {
      console.error(e);
    }
}
mc(), (ds.exports = we);
var Gd = ds.exports,
  Xu = Gd;
(Xl.createRoot = Xu.createRoot), (Xl.hydrateRoot = Xu.hydrateRoot);
/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tl() {
  return (
    (tl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
    tl.apply(this, arguments)
  );
}
var xn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(xn || (xn = {}));
const Gu = "popstate";
function Zd(e) {
  e === void 0 && (e = {});
  function n(l, o) {
    let {
      pathname: i = "/",
      search: u = "",
      hash: s = "",
    } = Ui(l.location.hash.substr(1));
    return (
      !i.startsWith("/") && !i.startsWith(".") && (i = "/" + i),
      Bo(
        "",
        { pathname: i, search: u, hash: s },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default"
      )
    );
  }
  function t(l, o) {
    let i = l.document.querySelector("base"),
      u = "";
    if (i && i.getAttribute("href")) {
      let s = l.location.href,
        c = s.indexOf("#");
      u = c === -1 ? s : s.slice(0, c);
    }
    return u + "#" + (typeof o == "string" ? o : vc(o));
  }
  function r(l, o) {
    Jd(
      l.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(o) +
        ")"
    );
  }
  return bd(n, t, r, e);
}
function hc(e, n) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(n);
}
function Jd(e, n) {
  if (!e) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function qd() {
  return Math.random().toString(36).substr(2, 8);
}
function Zu(e, n) {
  return { usr: e.state, key: e.key, idx: n };
}
function Bo(e, n, t, r) {
  return (
    t === void 0 && (t = null),
    tl(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof n == "string" ? Ui(n) : n,
      { state: t, key: (n && n.key) || r || qd() }
    )
  );
}
function vc(e) {
  let { pathname: n = "/", search: t = "", hash: r = "" } = e;
  return (
    t && t !== "?" && (n += t.charAt(0) === "?" ? t : "?" + t),
    r && r !== "#" && (n += r.charAt(0) === "#" ? r : "#" + r),
    n
  );
}
function Ui(e) {
  let n = {};
  if (e) {
    let t = e.indexOf("#");
    t >= 0 && ((n.hash = e.substr(t)), (e = e.substr(0, t)));
    let r = e.indexOf("?");
    r >= 0 && ((n.search = e.substr(r)), (e = e.substr(0, r))),
      e && (n.pathname = e);
  }
  return n;
}
function bd(e, n, t, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = xn.Pop,
    s = null,
    c = h();
  c == null && ((c = 0), i.replaceState(tl({}, i.state, { idx: c }), ""));
  function h() {
    return (i.state || { idx: null }).idx;
  }
  function m() {
    u = xn.Pop;
    let N = h(),
      f = N == null ? null : N - c;
    (c = N), s && s({ action: u, location: w.location, delta: f });
  }
  function p(N, f) {
    u = xn.Push;
    let a = Bo(w.location, N, f);
    t && t(a, N), (c = h() + 1);
    let d = Zu(a, c),
      v = w.createHref(a);
    try {
      i.pushState(d, "", v);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      l.location.assign(v);
    }
    o && s && s({ action: u, location: w.location, delta: 1 });
  }
  function g(N, f) {
    u = xn.Replace;
    let a = Bo(w.location, N, f);
    t && t(a, N), (c = h());
    let d = Zu(a, c),
      v = w.createHref(a);
    i.replaceState(d, "", v),
      o && s && s({ action: u, location: w.location, delta: 0 });
  }
  function S(N) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      a = typeof N == "string" ? N : vc(N);
    return (
      hc(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          a
      ),
      new URL(a, f)
    );
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(N) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Gu, m),
        (s = N),
        () => {
          l.removeEventListener(Gu, m), (s = null);
        }
      );
    },
    createHref(N) {
      return n(l, N);
    },
    createURL: S,
    encodeLocation(N) {
      let f = S(N);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: p,
    replace: g,
    go(N) {
      return i.go(N);
    },
  };
  return w;
}
var Ju;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ju || (Ju = {}));
function ep(e, n) {
  if (n === "/") return e;
  if (!e.toLowerCase().startsWith(n.toLowerCase())) return null;
  let t = n.endsWith("/") ? n.length - 1 : n.length,
    r = e.charAt(t);
  return r && r !== "/" ? null : e.slice(t) || "/";
}
const yc = ["post", "put", "patch", "delete"];
new Set(yc);
const np = ["get", ...yc];
new Set(np);
/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const tp = J.createContext(null),
  gc = J.createContext(null);
function rp() {
  return J.useContext(gc) != null;
}
function lp(e) {
  let {
    basename: n = "/",
    children: t = null,
    location: r,
    navigationType: l = xn.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  rp() && hc(!1);
  let u = n.replace(/^\/*/, "/"),
    s = J.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = Ui(r));
  let {
      pathname: c = "/",
      search: h = "",
      hash: m = "",
      state: p = null,
      key: g = "default",
    } = r,
    S = J.useMemo(() => {
      let w = ep(c, u);
      return w == null
        ? null
        : {
            location: { pathname: w, search: h, hash: m, state: p, key: g },
            navigationType: l,
          };
    }, [u, c, h, m, p, g, l]);
  return S == null
    ? null
    : J.createElement(
        tp.Provider,
        { value: s },
        J.createElement(gc.Provider, { children: t, value: S })
      );
}
new Promise(() => {});
/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const op = "startTransition",
  qu = Uc[op];
function ip(e) {
  let { basename: n, children: t, future: r, window: l } = e,
    o = J.useRef();
  o.current == null && (o.current = Zd({ window: l, v5Compat: !0 }));
  let i = o.current,
    [u, s] = J.useState({ action: i.action, location: i.location }),
    { v7_startTransition: c } = r || {},
    h = J.useCallback(
      (m) => {
        c && qu ? qu(() => s(m)) : s(m);
      },
      [s, c]
    );
  return (
    J.useLayoutEffect(() => i.listen(h), [i, h]),
    J.createElement(lp, {
      basename: n,
      children: t,
      location: u.location,
      navigationType: u.action,
      navigator: i,
    })
  );
}
var bu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(bu || (bu = {}));
var es;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(es || (es = {}));
class up {
  getCookie(n) {
    const t = n.length + 1;
    return (
      document.cookie
        .split(";")
        .map((r) => r.trim())
        .filter((r) => r.substring(0, t) === `${n}=`)
        .map((r) => decodeURIComponent(r.substring(t)))[0] || null
    );
  }
  accessSpacemaker(n, t) {
    let r = null,
      l = "app.autodeskforma.eu";
    if ((t === "us" && (l = "app.autodeskforma.com"), n)) {
      const i = `${`https://${l}/web-components/FormIt-Forma/index.html`}?args=region%3B${t}%3BcallingUrl%3B${
        window.location
      }`;
      r = window.open(
        `https://${l}/auth/login?rd=${i}`,
        "_blank",
        "width= 500px, height=500px"
      );
      let u = setInterval(() => {
        this.getCookie("ajs_user_id") !== null &&
          (clearInterval(u), r !== null && r.close());
      }, 1e3);
    } else {
      const i = `${`https://${l}/web-components/FormIt-Forma/index.html`}?args=region%3B${t}%3BcallingUrl%3B${
        window.location
      }`;
      window.location.replace(`https://${l}/auth/login?rd=${i}`);
    }
  }
}
const sp = new up();
class ap extends J.Component {
  static login(n) {
    return sp.accessSpacemaker(!1, n), null;
  }
  render() {
    return Q(fs, {});
  }
}
function cp() {
  function e() {
    ap.login(t);
  }
  function n(l) {
    let o = document.getElementsByClassName("region");
    Array.prototype.forEach.call(o, function (i) {
      i.classList.remove("chosen"),
        i.id === l.currentTarget.id &&
          (i.classList.add("chosen"), r(l.currentTarget.id));
    });
  }
  const [t, r] = J.useState("eu");
  return Q("div", {
    id: "PluginWrapper",
    children: Fn("div", {
      id: "PluginContainer",
      children: [
        Q("h3", {
          className: "title",
          children: "Send data between FormIt and Forma",
        }),
        Q("div", {
          id: "AppControls",
          children: Q("div", {
            className: "container mt-3",
            children: Fn("div", {
              id: "app",
              children: [
                Q("div", {
                  id: "lblExplanation",
                  children: "Select a region to start and view projects",
                }),
                Fn("div", {
                  id: "region-selector",
                  children: [
                    Q("label", { id: "lblRegion", children: "Regions: " }),
                    Q("label", {
                      id: "eu",
                      className: "region chosen",
                      onClick: n.bind(this),
                      children: "EU",
                    }),
                    Q("label", {
                      id: "us",
                      className: "region",
                      onClick: n.bind(this),
                      children: "US",
                    }),
                  ],
                }),
                Q("div", {
                  id: "LoginControls",
                  className: "",
                  children: Fn("button", {
                    id: "LoginButton",
                    className: "button is-link",
                    onClick: e,
                    children: [
                      Q("span", { children: "Login to Forma" }),
                      Q("i", { className: "fab fa-github fa-lg" }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
        Fn("div", {
          id: "NoAccess",
          hidden: !0,
          children: [
            Q("div", { children: Q("div", { className: "alertIcon" }) }),
            Fn("div", {
              children: [
                "It looks like your web browser is in private or incognito mode. FormIt-Forma plugin needs to save data to the local storage, so it can only be used in standard browsing mode.",
                Q("br", {}),
                Q("br", {}),
                "To use FormIt Plugin Facade, please switch to standard browsing mode.",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const fp = Xl.createRoot(document.getElementById("root"));
fp.render(
  Q(fs, {
    children: Q("div", {
      id: "MainControls",
      children: Q(ip, { children: Q(cp, {}) }),
    }),
  })
);
