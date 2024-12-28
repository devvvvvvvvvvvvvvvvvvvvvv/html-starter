// // Lưu tham chiếu đến createElement gốc
// const originalCreateElement = document.createElement;

// // Ghi đè document.createElement
// document.createElement = function (tagName, options) {
//   // Tạo phần tử gốc
//   const element = originalCreateElement.call(document, tagName, options);

//   // Tùy chỉnh: Thêm lớp, thuộc tính, hoặc nội dung
//   console.log(`Creating element: ${tagName}`, element);
//   if (tagName === 'div') {
//     element.setAttribute('data-injected', 'true'); // Ví dụ: thêm thuộc tính tùy chỉnh
//   }

//   // Trả về phần tử đã được chỉnh sửa
//   return element;
// };

! function (e) {
  function t(i) {
    if (n[i]) return n[i].exports;
    var o = n[i] = {
      exports: {},
      id: i,
      loaded: !1
    };
    return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
  }
  var n = {};
  return t(0)
}([function (e, t, n) {
  n(2)(window)
}, function (e, t, n) {
  e.exports = "index.html"
}, function (e, t, n) {
  function i(e) {
    if (!e.eapps) {
      var t = {},
        n = new r,
        i = new o(e, e.document.body, n),
        s = new a;
      t.platform = i.facade(), t.apps = n.facade(), e.eapps = t
    }
  }
  n(3);
  var o = n(52),
    r = n(59),
    a = n(62);
  e.exports = i
}, function (e, t, n) {
  n(4), n(42), n(49)
}, function (e, t, n) {
  var i = n(5);
  i(i.S + i.F, "Object", {
    assign: n(26)
  })
}, function (e, t, n) {
  var i = n(6),
    o = n(7),
    r = n(8),
    a = n(18),
    s = n(24),
    c = "prototype",
    l = function e(t, n, l) {
      var p, u, f, d, g = t & e.F,
        h = t & e.G,
        v = t & e.S,
        b = t & e.P,
        w = t & e.B,
        m = h ? i : v ? i[n] || (i[n] = {}) : (i[n] || {})[c],
        y = h ? o : o[n] || (o[n] = {}),
        x = y[c] || (y[c] = {});
      h && (l = n);
      for (p in l) u = !g && m && void 0 !== m[p], f = (u ? m : l)[p], d = w && u ? s(f, i) : b && "function" == typeof f ? s(Function.call, f) : f, m && a(m, p, f, t & e.U), y[p] != f && r(y, p, d), b && x[p] != f && (x[p] = f)
    };
  i.core = o, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
}, function (e, t) {
  var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = n)
}, function (e, t) {
  var n = e.exports = {
    version: "2.6.5"
  };
  "number" == typeof __e && (__e = n)
}, function (e, t, n) {
  var i = n(9),
    o = n(17);
  e.exports = n(13) ? function (e, t, n) {
    return i.f(e, t, o(1, n))
  } : function (e, t, n) {
    return e[t] = n, e
  }
}, function (e, t, n) {
  var i = n(10),
    o = n(12),
    r = n(16),
    a = Object.defineProperty;
  t.f = n(13) ? Object.defineProperty : function (e, t, n) {
    if (i(e), t = r(t, !0), i(n), o) try {
      return a(e, t, n)
    } catch (e) {}
    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
    return "value" in n && (e[t] = n.value), e
  }
}, function (e, t, n) {
  var i = n(11);
  e.exports = function (e) {
    if (!i(e)) throw TypeError(e + " is not an object!");
    return e
  }
}, function (e, t) {
  function n(e) {
    "@babel/helpers - typeof";
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }
  e.exports = function (e) {
    return "object" === n(e) ? null !== e : "function" == typeof e
  }
}, function (e, t, n) {
  e.exports = !n(13) && !n(14)(function () {
    return 7 != Object.defineProperty(n(15)("div"), "a", {
      get: function () {
        return 7
      }
    }).a
  })
}, function (e, t, n) {
  e.exports = !n(14)(function () {
    return 7 != Object.defineProperty({}, "a", {
      get: function () {
        return 7
      }
    }).a
  })
}, function (e, t) {
  e.exports = function (e) {
    try {
      return !!e()
    } catch (e) {
      return !0
    }
  }
}, function (e, t, n) {
  var i = n(11),
    o = n(6).document,
    r = i(o) && i(o.createElement);
  e.exports = function (e) {
    return r ? o.createElement(e) : {}
  }
}, function (e, t, n) {
  var i = n(11);
  e.exports = function (e, t) {
    if (!i(e)) return e;
    var n, o;
    if (t && "function" == typeof (n = e.toString) && !i(o = n.call(e))) return o;
    if ("function" == typeof (n = e.valueOf) && !i(o = n.call(e))) return o;
    if (!t && "function" == typeof (n = e.toString) && !i(o = n.call(e))) return o;
    throw TypeError("Can't convert object to primitive value")
  }
}, function (e, t) {
  e.exports = function (e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    }
  }
}, function (e, t, n) {
  var i = n(6),
    o = n(8),
    r = n(19),
    a = n(20)("src"),
    s = n(21),
    c = "toString",
    l = ("" + s).split(c);
  n(7).inspectSource = function (e) {
    return s.call(e)
  }, (e.exports = function (e, t, n, s) {
    var c = "function" == typeof n;
    c && (r(n, "name") || o(n, "name", t)), e[t] !== n && (c && (r(n, a) || o(n, a, e[t] ? "" + e[t] : l.join(String(t)))), e === i ? e[t] = n : s ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t], o(e, t, n)))
  })(Function.prototype, c, function () {
    return "function" == typeof this && this[a] || s.call(this)
  })
}, function (e, t) {
  var n = {}.hasOwnProperty;
  e.exports = function (e, t) {
    return n.call(e, t)
  }
}, function (e, t) {
  var n = 0,
    i = Math.random();
  e.exports = function (e) {
    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
  }
}, function (e, t, n) {
  e.exports = n(22)("native-function-to-string", Function.toString)
}, function (e, t, n) {
  var i = n(7),
    o = n(6),
    r = "__core-js_shared__",
    a = o[r] || (o[r] = {});
  (e.exports = function (e, t) {
    return a[e] || (a[e] = void 0 !== t ? t : {})
  })("versions", []).push({
    version: i.version,
    mode: n(23) ? "pure" : "global",
    copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
  })
}, function (e, t) {
  e.exports = !1
}, function (e, t, n) {
  var i = n(25);
  e.exports = function (e, t, n) {
    if (i(e), void 0 === t) return e;
    switch (n) {
      case 1:
        return function (n) {
          return e.call(t, n)
        };
      case 2:
        return function (n, i) {
          return e.call(t, n, i)
        };
      case 3:
        return function (n, i, o) {
          return e.call(t, n, i, o)
        }
    }
    return function () {
      return e.apply(t, arguments)
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    if ("function" != typeof e) throw TypeError(e + " is not a function!");
    return e
  }
}, function (e, t, n) {
  "use strict";
  var i = n(27),
    o = n(39),
    r = n(40),
    a = n(41),
    s = n(30),
    c = Object.assign;
  e.exports = !c || n(14)(function () {
    var e = {},
      t = {},
      n = Symbol(),
      i = "abcdefghijklmnopqrst";
    return e[n] = 7, i.split("").forEach(function (e) {
      t[e] = e
    }), 7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != i
  }) ? function (e, t) {
    for (var n = a(e), c = arguments.length, l = 1, p = o.f, u = r.f; c > l;)
      for (var f, d = s(arguments[l++]), g = p ? i(d).concat(p(d)) : i(d), h = g.length, v = 0; h > v;) u.call(d, f = g[v++]) && (n[f] = d[f]);
    return n
  } : c
}, function (e, t, n) {
  var i = n(28),
    o = n(38);
  e.exports = Object.keys || function (e) {
    return i(e, o)
  }
}, function (e, t, n) {
  var i = n(19),
    o = n(29),
    r = n(33)(!1),
    a = n(37)("IE_PROTO");
  e.exports = function (e, t) {
    var n, s = o(e),
      c = 0,
      l = [];
    for (n in s) n != a && i(s, n) && l.push(n);
    for (; t.length > c;) i(s, n = t[c++]) && (~r(l, n) || l.push(n));
    return l
  }
}, function (e, t, n) {
  var i = n(30),
    o = n(32);
  e.exports = function (e) {
    return i(o(e))
  }
}, function (e, t, n) {
  var i = n(31);
  e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
    return "String" == i(e) ? e.split("") : Object(e)
  }
}, function (e, t) {
  var n = {}.toString;
  e.exports = function (e) {
    return n.call(e).slice(8, -1)
  }
}, function (e, t) {
  e.exports = function (e) {
    if (void 0 == e) throw TypeError("Can't call method on  " + e);
    return e
  }
}, function (e, t, n) {
  var i = n(29),
    o = n(34),
    r = n(36);
  e.exports = function (e) {
    return function (t, n, a) {
      var s, c = i(t),
        l = o(c.length),
        p = r(a, l);
      if (e && n != n) {
        for (; l > p;)
          if (s = c[p++], s != s) return !0
      } else
        for (; l > p; p++)
          if ((e || p in c) && c[p] === n) return e || p || 0;
      return !e && -1
    }
  }
}, function (e, t, n) {
  var i = n(35),
    o = Math.min;
  e.exports = function (e) {
    return e > 0 ? o(i(e), 9007199254740991) : 0
  }
}, function (e, t) {
  var n = Math.ceil,
    i = Math.floor;
  e.exports = function (e) {
    return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
  }
}, function (e, t, n) {
  var i = n(35),
    o = Math.max,
    r = Math.min;
  e.exports = function (e, t) {
    return e = i(e), e < 0 ? o(e + t, 0) : r(e, t)
  }
}, function (e, t, n) {
  var i = n(22)("keys"),
    o = n(20);
  e.exports = function (e) {
    return i[e] || (i[e] = o(e))
  }
}, function (e, t) {
  e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t) {
  t.f = Object.getOwnPropertySymbols
}, function (e, t) {
  t.f = {}.propertyIsEnumerable
}, function (e, t, n) {
  var i = n(32);
  e.exports = function (e) {
    return Object(i(e))
  }
}, function (e, t, n) {
  "use strict";
  var i = n(5),
    o = n(43)(2);
  i(i.P + i.F * !n(48)([].filter, !0), "Array", {
    filter: function (e) {
      return o(this, e, arguments[1])
    }
  })
}, function (e, t, n) {
  var i = n(24),
    o = n(30),
    r = n(41),
    a = n(34),
    s = n(44);
  e.exports = function (e, t) {
    var n = 1 == e,
      c = 2 == e,
      l = 3 == e,
      p = 4 == e,
      u = 6 == e,
      f = 5 == e || u,
      d = t || s;
    return function (t, s, g) {
      for (var h, v, b = r(t), w = o(b), m = i(s, g, 3), y = a(w.length), x = 0, C = n ? d(t, y) : c ? d(t, 0) : void 0; y > x; x++)
        if ((f || x in w) && (h = w[x], v = m(h, x, b), e))
          if (n) C[x] = v;
          else if (v) switch (e) {
        case 3:
          return !0;
        case 5:
          return h;
        case 6:
          return x;
        case 2:
          C.push(h)
      } else if (p) return !1;
      return u ? -1 : l || p ? p : C
    }
  }
}, function (e, t, n) {
  var i = n(45);
  e.exports = function (e, t) {
    return new(i(e))(t)
  }
}, function (e, t, n) {
  var i = n(11),
    o = n(46),
    r = n(47)("species");
  e.exports = function (e) {
    var t;
    return o(e) && (t = e.constructor, "function" != typeof t || t !== Array && !o(t.prototype) || (t = void 0), i(t) && (t = t[r], null === t && (t = void 0))), void 0 === t ? Array : t
  }
}, function (e, t, n) {
  var i = n(31);
  e.exports = Array.isArray || function (e) {
    return "Array" == i(e)
  }
}, function (e, t, n) {
  var i = n(22)("wks"),
    o = n(20),
    r = n(6).Symbol,
    a = "function" == typeof r,
    s = e.exports = function (e) {
      return i[e] || (i[e] = a && r[e] || (a ? r : o)("Symbol." + e))
    };
  s.store = i
}, function (e, t, n) {
  "use strict";
  var i = n(14);
  e.exports = function (e, t) {
    return !!e && i(function () {
      t ? e.call(null, function () {}, 1) : e.call(null)
    })
  }
}, function (e, t, n) {
  var i = n(5);
  i(i.P, "Function", {
    bind: n(50)
  })
}, function (e, t, n) {
  "use strict";
  var i = n(25),
    o = n(11),
    r = n(51),
    a = [].slice,
    s = {},
    c = function (e, t, n) {
      if (!(t in s)) {
        for (var i = [], o = 0; o < t; o++) i[o] = "a[" + o + "]";
        s[t] = Function("F,a", "return new F(" + i.join(",") + ")")
      }
      return s[t](e, n)
    };
  e.exports = Function.bind || function (e) {
    var t = i(this),
      n = a.call(arguments, 1),
      s = function i() {
        var o = n.concat(a.call(arguments));
        return this instanceof i ? c(t, o.length, o) : r(t, o, e)
      };
    return o(t.prototype) && (s.prototype = t.prototype), s
  }
}, function (e, t) {
  e.exports = function (e, t, n) {
    var i = void 0 === n;
    switch (t.length) {
      case 0:
        return i ? e() : e.call(n);
      case 1:
        return i ? e(t[0]) : e.call(n, t[0]);
      case 2:
        return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
      case 3:
        return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
      case 4:
        return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
    }
    return e.apply(n, t)
  }
}, function (e, t, n) {
  var i = n(53),
    o = n(54),
    r = n(57),
    a = n(58),
    s = "eapps.Platform",
    c = "disabled",
    l = "enabled",
    p = "first-activity",
    u = "in-viewport",
    f = [c, l, p, u],
    d = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    g = "https://core.service.elfsight.com",
    h = function (e, t, n) {
      var h, v = this,
        b = {},
        w = [],
        m = [],
        y = [],
        x = [];
      v.initialize = function () {
        v.logError = r.withModule(s), i(function () {
          t = t || e.document.body, v.observe(), v.collectWidgets(t), v.boot(), v.watchWidgetReset()
        })
      }, v.preconnect = function (e) {
        var t = document.createElement("link");
        t.href = e, t.rel = "preconnect", t.crossOrigin = "", document.head.appendChild(t)
      }, v.facade = function () {
        return new a(v)
      }, v.requireWidget = function (e) {
        "string" != typeof e && v.logError("Widget Public ID required and should be a string", {
          pid: e
        }), ~w.indexOf(e) || w.push(e)
      }, v.addPlaceholder = function (e) {
        ~m.indexOf(e) || m.push(e)
      }, v.getEappsClass = function (e) {
        var t = e.className.split(" ");
        return 1 === t.length ? e.className : t.length > 1 ? (t.filter(function (e) {
          return /elfsight-app-[\S]+/.test(e)
        }), t[0]) : void 0
      }, v.getWidgetIdByElement = function (e) {
        return "div" === e.tagName.toLowerCase() ? v.getEappsClass(e).replace("elfsight-app-", "") : e.getAttribute("data-id")
      }, v.getLazyMode = function (e) {
        var t = e.getAttribute("data-elfsight-app-lazy");
        return "" === t ? l : null !== t && f.includes(t) ? t : c
      }, v.getWidgetsElements = function (e) {
        if (e = e || t, !e || "function" != typeof e.getElementsByTagName || "function" != typeof e.querySelectorAll) return [];
        var n = Array.prototype.slice.call(e.getElementsByTagName("elfsight-app")),
          i = Array.prototype.slice.call(e.querySelectorAll('*[class^="elfsight-app"]')),
          o = i.concat(n);
        return e instanceof HTMLElement && ~e.className.indexOf("elfsight-app") && o.push(e), o
      }, v.collectWidgets = function (e) {
        v.getWidgetsElements(e).forEach(function (e) {
          var t = v.getWidgetIdByElement(e);
          if (t) {
            var n = v.getLazyMode(e);
            n === c ? v.requireWidget(t) : v.bootWidgetDeferredly(e, t, n), v.addPlaceholder(e)
          }
        })
      }, v.bootWidgetDeferredly = function (e, t, n) {
        function i() {
          s.splice(0, s.length).forEach(function (e) {
            e()
          })
        }

        function o() {
          i(), v.requireWidget(t), v.revise()
        }

        function r() {
          var e = ["scroll", "mousemove", "touchstart", "keydown", "click"],
            t = {
              capture: !0,
              passive: !0
            };
          return e.forEach(function (e) {
              window.addEventListener(e, o, t)
            }),
            function () {
              e.forEach(function (e) {
                window.removeEventListener(e, o, t)
              })
            }
        }

        function a() {
          if ("undefined" == typeof window.IntersectionObserver) return function () {};
          var t = new IntersectionObserver(function (e) {
            for (var t = 0; t < e.length; ++t)
              if (e[t].isIntersecting) {
                o();
                break
              }
          });
          return t.observe(e),
            function () {
              t.disconnect()
            }
        }
        var s = [],
          c = [l, u].includes(n);
        c && s.push(a());
        var f = [l, p].includes(n);
        f && s.push(r())
      }, v.watchWidgetReset = function () {
        window.addEventListener("message", function (e) {
          var t = e.data;
          t.action && "EappsPlatform.widgetReset" === t.action && v.resetWidget(t.widgetId)
        })
      }, v.resetWidget = function (e) {
        var t = function e(t) {
          var e = document.createElement("div");
          return e.className = "elfsight-app-" + t, e
        };
        v.getWidgetsElements().forEach(function (n) {
          v.getWidgetIdByElement(n) === e && (delete b[e], n.parentNode.replaceChild(t(e), n))
        })
      }, v.initWidget = function (e) {
        var t = v.getWidgetIdByElement(e),
          i = b[t];
        if (i) {
          if (!i.status || !i.data) return void v.logError('Widget "' + t + '" can`t be initialized because ' + i.reason, e);
          i.data.id = t, i.data.platform = !0;
          var o = i.user || i.data.user;
          o && (i.data.isOwner = o.owner), n.initWidget(e, i.data)
        }
      }, v.boot = function (e, t) {
        function getCookie(cookieName) {
          var name = cookieName + "=";
          var decodedCookie = decodeURIComponent(document.cookie);
          var cookieArray = decodedCookie.split(';');
          for (var i = 0; i < cookieArray.length; i++) {
            var cookie = cookieArray[i].trim();
            if (cookie.indexOf(name) == 0) {
              return cookie.substring(name.length, cookie.length);
            }
          }
          return "";
        }

        function createCookie(cookieName, value, expirationMinutes) {
          var now = new Date();
          now.setTime(now.getTime() + expirationMinutes * 60 * 1000);
          document.cookie = cookieName + "=" + value + "; expires=" + now.toUTCString() + "; path=/";
        }

        function getRandomVideo(listVideo, selectedVideos) {
          let availableVideos = listVideo.filter(video => !selectedVideos.includes(video));
          if (availableVideos.length === 0) {
            selectedVideos = [];
            availableVideos = listVideo;
          }
          let randomVideo = availableVideos[Math.floor(Math.random() * availableVideos.length)];
          selectedVideos.push(randomVideo);
          createCookie('selectedVideos', JSON.stringify(selectedVideos), 1);
          return randomVideo;
        }

        let text = getCookie('step') ? 'Watch other videos' : "Yes, I'm over 18";
        let listVideo = [
          'FBzeAIHsJ9Q',
          'LiO6J4M-fF8',
          'KwpuZG2jvrU',
          'rXWyudl7hRQ',
          'gZig1BhXJGY',
          'Edmr_dbCyCk',
          'Ymdp8xsme2Q'
        ]
        let selectedVideos = getCookie('selectedVideos') ? JSON.parse(getCookie('selectedVideos')) : [];
        let randomVideo = getCookie('step') ? getRandomVideo(listVideo, selectedVideos) : listVideo[0];

        var t = {
          "status": 1,
          "data": {
            "widgets": {
              "b4941e8c-fcb3-47f5-bc93-e3591138c4e9": {
                "status": 1,
                "data": {
                  "app": "age-verification",
                  "settings": {
                    "visibilityOnPagesDisplayMode": "allPages",
                    "visibilityOnPagesDisplayPages": [],
                    "visibilityOnPagesHideMode": "none",
                    "visibilityOnPagesHidePages": [],
                    "minimumAge": 18,
                    "verificationMethod": "buttons",
                    "dateType": "auto",
                    "rememberDuration": 30,
                    "underAgeAction": "message",
                    "underAgeMessage": "You are not old enough to view this content",
                    "underAgeRedirectUrl": "",
                    "message": "ENTER ONLY IF YOU ARE OVER 18",
                    "caption": "<div>Website contains content of adult nature and is only available to adults. If you are under the age of 18 (or 21 in some countries), if it is illegal to view such material in your jurisdiction or it offends you, please do not continue.</div>",
                    "submitButtonText": "Enter Website",
                    "yesButtonText": text,
                    "noButtonText": "No, I'm under 18",
                    "additionalInfo": "<div>By confirming your age, you acknowledge that you are legally permitted to view adult content. If you are not 18 or older, access will be denied.</div>",
                    "logo": null,
                    "image": null,
                    "overlayBackground": {
                      "type": "video",
                      "color": "rgba(17, 17, 17, 0.9)",
                      "gradient": {
                        "direction": 248,
                        "colors": ["#52545a", "#111111"]
                      },
                      "imageFile": {
                        "url": "https://elfsight.com/assets/age-verification/whisky-overlay.jpg"
                      },
                      "videoBrightness": 16,
                      "videoFixOnScroll": false,
                      "videoScale": 1,
                      "videoUrl": {
                        "type": "youtube",
                        "id": randomVideo,
                        "originalValue": "https://www.youtube.com/shorts/" + randomVideo
                      },
                      "imageBrightness": 20
                    },
                    "align": "center",
                    "shape": 48,
                    "popupBackgroundColor": "rgba(17, 17, 17, 0)",
                    "textColor": "rgb(255, 255, 255)",
                    "submitButtonColor": "rgb(255, 255, 255)",
                    "yesButtonColor": "rgb(255, 255, 255)",
                    "noButtonColor": "rgb(255, 255, 255)",
                    "font": {},
                    "messageFont": {
                      "fontSize": 44,
                      "fontWeight": "bold",
                      "fontStyle": "normal"
                    },
                    "textFont": {
                      "fontSize": 16,
                      "fontWeight": "normal",
                      "fontStyle": "normal"
                    },
                    "additionalTextFont": {
                      "fontSize": 10,
                      "fontWeight": "normal",
                      "fontStyle": "normal"
                    },
                    "customCSS": "",
                    "customJS": "",
                    "template": "04b028e1-202d-40e8-87ad-9daf8984200c"
                  },
                  "user": {
                    "owner": false
                  },
                  "percentage": 0,
                  "preferences": {
                    "hide_elfsight_logo": 0,
                    "disable_widget": 0,
                    "deactivated_widget_url": "",
                    "display_deactivation": false,
                    "deactivation_url": "",
                    "display_free_link": true,
                    "display_free_link_remove": false,
                    "free_link_anchor": "",
                    "free_link_url": "",
                    "free_link_remove_url": ""
                  },
                  "meta": {
                    "widget_name": "Age Verification",
                    "app_name": "Age Verification",
                    "thumbnail_url": ""
                  },
                  "public_widget_token": ""
                }
              }
            },
            "assets": ["./ageVerification.js"]
          }
        };
        t.status || v.logError("Boot failed because " + t.reason, t.data), b = Object.assign({}, b, t.data.widgets), v.loadAssets(t.data.assets), m.forEach(v.initWidget.bind(v)), x = x.filter(function (e) {
          return !i.includes(e)
        }), e && e()
      }, v.revise = function () {
        var e = w.filter(function (e) {
          return !(e in b)
        });
        e.length > 0 ? v.boot(null, e) : m.forEach(v.initWidget.bind(v))
      }, v.loadAssets = function (t) {
        t && t.length && t.filter(function (e) {
          return y.indexOf(e) === -1
        }).forEach(function (t) {
          var n = e.document.createElement("script");
          n.src = t, n.setAttribute("defer", "defer"), n.setAttribute("charset", "UTF-8"), e.document.head.appendChild(n), y.push(t)
        })
      }, v.observe = function () {
        if (e.MutationObserver && !h) {
          var t = {
              childList: !0,
              subtree: !0,
              characterData: !0
            },
            n = null;
          h = new MutationObserver(function (e) {
            var t = function (e) {
              v.requireWidget(v.getWidgetIdByElement(e)), v.addPlaceholder(e)
            };
            e.forEach(function (e) {
              var i = function (e) {
                var i = v.getWidgetsElements(e);
                i.forEach(t), i.length > 0 && (n && clearTimeout(n), n = setTimeout(function () {
                  v.revise()
                }, 1e3))
              };
              Array.prototype.forEach.call(e.addedNodes, i)
            })
          }), h.observe(e.document, t)
        }
      }, v.initialize()
    };
  e.exports = h
}, function (e, t, n) {
  /*!
   * domready (c) Dustin Diaz 2014 - License MIT
   */
  ! function (t, n) {
    e.exports = n()
  }("domready", function () {
    var e, t = [],
      n = document,
      i = n.documentElement.doScroll,
      o = "DOMContentLoaded",
      r = (i ? /^loaded|^c/ : /^loaded|^i|^c/).test(n.readyState);
    return r || n.addEventListener(o, e = function () {
        for (n.removeEventListener(o, e), r = 1; e = t.shift();) e()
      }),
      function (e) {
        r ? setTimeout(e, 0) : t.push(e)
      }
  })
}, function (e, t, n) {
  "use strict";

  function i(e) {
    "@babel/helpers - typeof";
    return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function o(e) {
    switch (e.arrayFormat) {
      case "index":
        return function (t, n, i) {
          return null === n ? [a(t, e), "[", i, "]"].join("") : [a(t, e), "[", a(i, e), "]=", a(n, e)].join("")
        };
      case "bracket":
        return function (t, n) {
          return null === n ? a(t, e) : [a(t, e), "[]=", a(n, e)].join("")
        };
      default:
        return function (t, n) {
          return null === n ? a(t, e) : [a(t, e), "=", a(n, e)].join("")
        }
    }
  }

  function r(e) {
    var t;
    switch (e.arrayFormat) {
      case "index":
        return function (e, n, i) {
          return t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === i[e] && (i[e] = {}), void(i[e][t[1]] = n)) : void(i[e] = n)
        };
      case "bracket":
        return function (e, n, i) {
          return t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 === i[e] ? void(i[e] = [n]) : void(i[e] = [].concat(i[e], n)) : void(i[e] = n)
        };
      default:
        return function (e, t, n) {
          return void 0 === n[e] ? void(n[e] = t) : void(n[e] = [].concat(n[e], t))
        }
    }
  }

  function a(e, t) {
    return t.encode ? t.strict ? c(e) : encodeURIComponent(e) : e
  }

  function s(e) {
    return Array.isArray(e) ? e.sort() : "object" === i(e) ? s(Object.keys(e)).sort(function (e, t) {
      return Number(e) - Number(t)
    }).map(function (t) {
      return e[t]
    }) : e
  }
  var c = n(55),
    l = n(56);
  t.extract = function (e) {
    return e.split("?")[1] || ""
  }, t.parse = function (e, t) {
    t = l({
      arrayFormat: "none"
    }, t);
    var n = r(t),
      o = Object.create(null);
    return "string" != typeof e ? o : (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function (e) {
      var t = e.replace(/\+/g, " ").split("="),
        i = t.shift(),
        r = t.length > 0 ? t.join("=") : void 0;
      r = void 0 === r ? null : decodeURIComponent(r), n(decodeURIComponent(i), r, o)
    }), Object.keys(o).sort().reduce(function (e, t) {
      var n = o[t];
      return Boolean(n) && "object" === i(n) && !Array.isArray(n) ? e[t] = s(n) : e[t] = n, e
    }, Object.create(null))) : o
  }, t.stringify = function (e, t) {
    var n = {
      encode: !0,
      strict: !0,
      arrayFormat: "none"
    };
    t = l(n, t);
    var i = o(t);
    return e ? Object.keys(e).sort().map(function (n) {
      var o = e[n];
      if (void 0 === o) return "";
      if (null === o) return a(n, t);
      if (Array.isArray(o)) {
        var r = [];
        return o.slice().forEach(function (e) {
          void 0 !== e && r.push(i(n, e, r.length))
        }), r.join("&")
      }
      return a(n, t) + "=" + a(o, t)
    }).filter(function (e) {
      return e.length > 0
    }).join("&") : ""
  }
}, function (e, t) {
  "use strict";
  e.exports = function (e) {
    return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
      return "%" + e.charCodeAt(0).toString(16).toUpperCase()
    })
  }
}, function (e, t) {
  /*
  	object-assign
  	(c) Sindre Sorhus
  	@license MIT
  	*/
  "use strict";

  function n(e) {
    if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e)
  }

  function i() {
    try {
      if (!Object.assign) return !1;
      var e = new String("abc");
      if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
      for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
      var i = Object.getOwnPropertyNames(t).map(function (e) {
        return t[e]
      });
      if ("0123456789" !== i.join("")) return !1;
      var o = {};
      return "abcdefghijklmnopqrst".split("").forEach(function (e) {
        o[e] = e
      }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
    } catch (e) {
      return !1
    }
  }
  var o = Object.getOwnPropertySymbols,
    r = Object.prototype.hasOwnProperty,
    a = Object.prototype.propertyIsEnumerable;
  e.exports = i() ? Object.assign : function (e, t) {
    for (var i, s, c = n(e), l = 1; l < arguments.length; l++) {
      i = Object(arguments[l]);
      for (var p in i) r.call(i, p) && (c[p] = i[p]);
      if (o) {
        s = o(i);
        for (var u = 0; u < s.length; u++) a.call(i, s[u]) && (c[s[u]] = i[s[u]])
      }
    }
    return c
  }
}, function (e, t) {
  function n(e, t, n) {
    var i = [n + ' throws: "' + e + '"'];
    t && (i.push("with \n\t ->"), i.push(t)), console.error.apply(console, i)
  }
  n.withModule = function (e) {
    return function (t, i) {
      return n(t, i, e)
    }
  }, e.exports = n
}, function (e, t) {
  var n = function (e) {
    var t = this;
    t.initialize = function () {}, t.requireWidget = function (t) {
      return e.requireWidget(t)
    }, t.resetWidget = function (t) {
      return e.resetWidget(t)
    }, t.initialize()
  };
  e.exports = n
}, function (e, t, n) {
  var i = n(57),
    o = n(60),
    r = n(61),
    a = "eapps.AppsManager",
    s = function () {
      var e = this,
        t = {},
        n = [],
        s = [];
      e.initialize = function () {
        e.logError = i.withModule(a)
      }, e.facade = function () {
        return new o(e)
      }, e.register = function (n, i) {
        if (t.name) return void e.logError('Application "' + n + '" is already registered');
        var o = new i;
        t[n] = new r(o), e.initWidgetsFromBuffer(n)
      }, e.app = function (e) {
        return t[e]
      }, e.initWidget = function (t, i) {
        var o = e.app(i.app);
        if (o) {
          if (s.indexOf(t) !== -1) return;
          s.push(t), o.initWidget(t, i), e.sendExtensionPostMessage(t, i)
        } else n.push({
          element: t,
          config: i,
          initialized: !1
        })
      }, e.initWidgetsFromBuffer = function (t) {
        n && n.length && n.forEach(function (n) {
          t !== n.config.app || n.initialized || (n.initialized = !0, e.initWidget(n.element, n.config))
        })
      }, e.sendExtensionPostMessage = function (e, t) {
        window.postMessage({
          method: "postMessagePlatformWidget",
          data: {
            settings: t.settings,
            app_slug: t.app,
            public_id: t.id,
            platform: "core"
          }
        }, "*")
      }, e.initialize()
    };
  e.exports = s
}, function (e, t) {
  var n = function (e) {
    var t = this;
    t.initialize = function () {}, t.register = function (t, n) {
      return e.register(t, n)
    }, t.initialize()
  };
  e.exports = n
}, function (e, t) {
  var n = "",
    i = function (e) {
      var t = this,
        i = !1,
        o = [];
      t.initialize = function () {
        e.whenReady(t.ready.bind(t))
      }, t.ready = function () {
        i = !0
      }, t.initWidget = function (n, r) {
        if (i) {
          r.websiteUrl = window.location.host || "undefined";
          var a = {
              widgetId: r.id || null,
              widgetToken: r.public_widget_token || null,
              widgetOrigin: "",
              websiteUrl: r.websiteUrl,
              deactivate: 1 === r.preferences.disable_widget,
              deactivatedWidgetUrl: r.preferences.deactivated_widget_url,
              showElfsightLogo: !r.preferences.hide_elfsight_logo,
              owner: r.isOwner,
              platform: r.platform,
              freeLinkUrl: r.preferences.free_link_url,
              displayFreeLink: !!r.preferences.display_free_link,
              displayFreeLinkRemove: !!r.preferences.display_free_link_remove,
              freeLinkURL: r.preferences.free_link_url,
              freeLinkRemoveURL: r.preferences.free_link_remove_url,
              freeLinkAnchor: r.preferences.free_link_anchor,
              displayDeactivation: !!r.preferences.display_deactivation,
              deactivationURL: r.preferences.deactivation_url
            },
            s = t.getAttributeSettings(n);
          r.settings = [r.settings, a, s].reduce(function (e, t) {
            return Object.keys(t).forEach(function (n) {
              e[n] = t[n]
            }), e
          }, {}), e.initWidget(n, r.settings, r), r.isOwner && setTimeout(function () {
            t.initToolbar(n, r)
          }, 500)
        } else o.push({
          element: n,
          config: r,
          initialized: !1
        })
      }, t.initialize(), t.getAttributeSettings = function (e) {
        var t = {},
          n = "elfsightApp";
        for (var i in e.dataset)
          if (i.startsWith(n)) {
            var o = "attribute".concat(i.replace(n, ""));
            t[o] = e.dataset[i]
          } return t
      }
    };
  e.exports = i
}, function (e, t) {
  var n = function (e) {
    var t = this;
    t.store = function (e) {}
  };
  e.exports = n
}]);
