! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t(require("react")) : "function" == typeof define && define.amd ? define("Carousal", ["React"], t) : "object" == typeof exports ? exports.Carousal = t(require("react")) : e.Carousal = t(e.React)
}(window, (function(e) {
  return function(e) {
      var t = {};

      function r(n) {
          if (t[n]) return t[n].exports;
          var i = t[n] = {
              i: n,
              l: !1,
              exports: {}
          };
          return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
      }
      return r.m = e, r.c = t, r.d = function(e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, {
              enumerable: !0,
              get: n
          })
      }, r.r = function(e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module"
          }), Object.defineProperty(e, "__esModule", {
              value: !0
          })
      }, r.t = function(e, t) {
          if (1 & t && (e = r(e)), 8 & t) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var n = Object.create(null);
          if (r.r(n), Object.defineProperty(n, "default", {
                  enumerable: !0,
                  value: e
              }), 2 & t && "string" != typeof e)
              for (var i in e) r.d(n, i, function(t) {
                  return e[t]
              }.bind(null, i));
          return n
      }, r.n = function(e) {
          var t = e && e.__esModule ? function() {
              return e.default
          } : function() {
              return e
          };
          return r.d(t, "a", t), t
      }, r.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
      }, r.p = "/dist/", r(r.s = 2)
  }([function(t, r) {
      t.exports = e
  }, function(e, t, r) {
      e.exports = r(3)()
  }, function(e, t, r) {
      "use strict";
      r.r(t), r.d(t, "Carousel", (function() {
          return h
      }));
      var n = r(0),
          i = r.n(n),
          o = r(1),
          s = r.n(o);
      r(5);

      function a(e) {
          return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
      }

      function l(e, t) {
          for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
      }

      function c(e, t) {
          return (c = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t, e
          })(e, t)
      }

      function u(e) {
          var t = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
              } catch (e) {
                  return !1
              }
          }();
          return function() {
              var r, n = d(e);
              if (t) {
                  var i = d(this).constructor;
                  r = Reflect.construct(n, arguments, i)
              } else r = n.apply(this, arguments);
              return f(this, r)
          }
      }

      function f(e, t) {
          return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }

      function d(e) {
          return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
      }
      var p = r(9),
          h = function(e) {
              ! function(e, t) {
                  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                  e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                          value: e,
                          writable: !0,
                          configurable: !0
                      }
                  }), t && c(e, t)
              }(s, e);
              var t, r, n, o = u(s);

              function s(e) {
                  var t;
                  return function(e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                  }(this, s), (t = o.call(this, e)).state = {
                      slideTotal: 0,
                      slideCurrent: -1,
                      slides: [],
                      height: "0px"
                  }, t.interval = null, t
              }
              return t = s, (r = [{
                  key: "componentDidMount",
                  value: function() {
                      var e = this,
                          t = [];
                      this.props.slides.forEach((function(e) {
                          var r = {
                              class: "slider-single proactivede",
                              element: e
                          };
                          t.push(r)
                      })), this.setState((function(r, n) {
                          return {
                              slides: t,
                              slideTotal: e.props.slides.length - 1
                          }
                      })), -1 === this.state.slideCurrent && setTimeout((function() {
                          e.slideRight(), e.props.autoplay && (e.interval = setTimeout((function() {
                              e.slideRight()
                          }), e.props.interval))
                      }), 500)
                  }
              }, {
                  key: "componentDidUpdate",
                  value: function(e, t, r) {
                      var n = this;
                      if (e.slides && e.slides[0] && this.props.slides[0] && !p(e.slides[0], this.props.slides[0])) {
                          var i = [];
                          this.props.slides.forEach((function(e) {
                              var t = {
                                  class: "slider-single proactivede",
                                  element: e
                              };
                              i.push(t)
                          })), this.setState((function(e, t) {
                              return {
                                  slides: i,
                                  slideTotal: n.props.slides.length - 1,
                                  slideCurrent: -1
                              }
                          })), this.setState((function(e, t) {
                              return Object.assign({}, e)
                          })), setTimeout((function() {
                              n.slideRight(), n.props.autoplay && (clearTimeout(n.interval), n.interval = setTimeout((function() {
                                  n.slideRight()
                              }), n.props.interval))
                          }), 500)
                      }
                  }
              }, {
                  key: "slideRight",
                  value: function() {
                      var e, t, r = this,
                          n = this.state,
                          i = n.slideCurrent,
                          o = n.slideTotal,
                          s = this.state.slides;
                      if (o > 1) {
                          i < o ? i++ : i = 0, e = i > 0 ? s[i - 1] : s[o];
                          var a = s[i];
                          t = i < o ? s[i + 1] : s[0], s.forEach((function(e, t) {
                              e.class.includes("preactivede") && (e.class = "slider-single proactivede"), e.class.includes("preactive") && (e.class = "slider-single preactivede")
                          })), e.class = "slider-single preactive", a.class = "slider-single active", t.class = "slider-single proactive", this.setState((function(e, t) {
                              return {
                                  slides: s,
                                  slideCurrent: i
                              }
                          })), document.getElementsByClassName("slider-single active").length > 0 && setTimeout((function() {
                              var e = document.getElementsByClassName("slider-single active")[0].clientHeight;
                              r.setState((function(t, r) {
                                  return {
                                      height: e + "px"
                                  }
                              }))
                          }), 500), this.props.autoplay && (clearTimeout(this.interval), this.interval = setTimeout((function() {
                              r.slideRight()
                          }), this.props.interval))
                      } else "slider-single active" !== s[0].class && (s[0].class = "slider-single active", this.setState((function(e, t) {
                          return {
                              slides: s,
                              slideCurrent: 0
                          }
                      })))
                  }
              }, {
                  key: "slideLeft",
                  value: function() {
                      var e = this,
                          t = this.state,
                          r = t.slideCurrent,
                          n = t.slideTotal;
                      if (n > 1) {
                          var i, o, s = this.state.slides;
                          r > 0 ? r-- : r = n, o = r < n ? s[r + 1] : s[0];
                          var a = s[r];
                          i = r > 0 ? s[r - 1] : s[n], s.forEach((function(e, t) {
                              e.class.includes("proactivede") && (e.class = "slider-single preactivede"), e.class.includes("proactive") && (e.class = "slider-single proactivede")
                          })), i.class = "slider-single preactive", a.class = "slider-single active", o.class = "slider-single proactive", this.setState((function(e, t) {
                              return {
                                  slides: s,
                                  slideCurrent: r
                              }
                          })), document.getElementsByClassName("slider-single active").length > 0 && setTimeout((function() {
                              var t = document.getElementsByClassName("slider-single active")[0].clientHeight;
                              e.setState((function(e, r) {
                                  return {
                                      height: t + "px"
                                  }
                              }))
                          }), 500)
                      }
                  }
              }, {
                  key: "render",
                  value: function() {
                      var e = this;
                      return i.a.createElement("div", {
                          className: "react-3d-carousel",
                          style: {
                              height: this.state.height
                          }
                      }, this.state.slides && this.state.slides.length > 0 && i.a.createElement("div", {
                          className: "slider-container"
                      }, i.a.createElement("div", {
                          className: "slider-content"
                      }, this.state.slides.map((function(t, r) {
                          return i.a.createElement("div", {
                              className: t.class,
                              key: r
                          }, i.a.createElement("div", {
                              className: "slider-left",
                              onClick: e.slideLeft.bind(e)
                          }, i.a.createElement("div", null, i.a.createElement("i", {
                              className: "fa fa-arrow-left"
                          }))), i.a.createElement("div", {
                              className: "slider-right",
                              onClick: e.slideRight.bind(e)
                          }, i.a.createElement("div", null, i.a.createElement("i", {
                              className: "fa fa-arrow-right"
                          }))), i.a.createElement("div", {
                              className: "slider-single-content"
                          }, t.element))
                      })))))
                  }
              }]) && l(t.prototype, r), n && l(t, n), s
          }(i.a.Component);
      h.propTypes = {
          slides: s.a.arrayOf(s.a.element),
          autoplay: s.a.bool,
          interval: s.a.number
      }, h.defaultProps = {
          autoplay: !1,
          interval: 3e3
      }
  }, function(e, t, r) {
      "use strict";
      var n = r(4);

      function i() {}

      function o() {}
      o.resetWarningCache = i, e.exports = function() {
          function e(e, t, r, i, o, s) {
              if (s !== n) {
                  var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                  throw a.name = "Invariant Violation", a
              }
          }

          function t() {
              return e
          }
          e.isRequired = e;
          var r = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: o,
              resetWarningCache: i
          };
          return r.PropTypes = r, r
      }
  }, function(e, t, r) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  }, function(e, t, r) {
      var n = r(6),
          i = r(7);
      "string" == typeof(i = i.__esModule ? i.default : i) && (i = [
          [e.i, i, ""]
      ]);
      var o = {
          insert: "head",
          singleton: !1
      };
      n(i, o);
      e.exports = i.locals || {}
  }, function(e, t, r) {
      "use strict";
      var n, i = function() {
              return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n
          },
          o = function() {
              var e = {};
              return function(t) {
                  if (void 0 === e[t]) {
                      var r = document.querySelector(t);
                      if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                          r = r.contentDocument.head
                      } catch (e) {
                          r = null
                      }
                      e[t] = r
                  }
                  return e[t]
              }
          }(),
          s = [];

      function a(e) {
          for (var t = -1, r = 0; r < s.length; r++)
              if (s[r].identifier === e) {
                  t = r;
                  break
              }
          return t
      }

      function l(e, t) {
          for (var r = {}, n = [], i = 0; i < e.length; i++) {
              var o = e[i],
                  l = t.base ? o[0] + t.base : o[0],
                  c = r[l] || 0,
                  u = "".concat(l, " ").concat(c);
              r[l] = c + 1;
              var f = a(u),
                  d = {
                      css: o[1],
                      media: o[2],
                      sourceMap: o[3]
                  }; - 1 !== f ? (s[f].references++, s[f].updater(d)) : s.push({
                  identifier: u,
                  updater: m(d, t),
                  references: 1
              }), n.push(u)
          }
          return n
      }

      function c(e) {
          var t = document.createElement("style"),
              n = e.attributes || {};
          if (void 0 === n.nonce) {
              var i = r.nc;
              i && (n.nonce = i)
          }
          if (Object.keys(n).forEach((function(e) {
                  t.setAttribute(e, n[e])
              })), "function" == typeof e.insert) e.insert(t);
          else {
              var s = o(e.insert || "head");
              if (!s) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
              s.appendChild(t)
          }
          return t
      }
      var u, f = (u = [], function(e, t) {
          return u[e] = t, u.filter(Boolean).join("\n")
      });

      function d(e, t, r, n) {
          var i = r ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
          if (e.styleSheet) e.styleSheet.cssText = f(t, i);
          else {
              var o = document.createTextNode(i),
                  s = e.childNodes;
              s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(o, s[t]) : e.appendChild(o)
          }
      }

      function p(e, t, r) {
          var n = r.css,
              i = r.media,
              o = r.sourceMap;
          if (i ? e.setAttribute("media", i) : e.removeAttribute("media"), o && btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e.styleSheet) e.styleSheet.cssText = n;
          else {
              for (; e.firstChild;) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(n))
          }
      }
      var h = null,
          v = 0;

      function m(e, t) {
          var r, n, i;
          if (t.singleton) {
              var o = v++;
              r = h || (h = c(t)), n = d.bind(null, r, o, !1), i = d.bind(null, r, o, !0)
          } else r = c(t), n = p.bind(null, r, t), i = function() {
              ! function(e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e)
              }(r)
          };
          return n(e),
              function(t) {
                  if (t) {
                      if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                      n(e = t)
                  } else i()
              }
      }
      e.exports = function(e, t) {
          (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = i());
          var r = l(e = e || [], t);
          return function(e) {
              if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                  for (var n = 0; n < r.length; n++) {
                      var i = a(r[n]);
                      s[i].references--
                  }
                  for (var o = l(e, t), c = 0; c < r.length; c++) {
                      var u = a(r[c]);
                      0 === s[u].references && (s[u].updater(), s.splice(u, 1))
                  }
                  r = o
              }
          }
      }
  }, function(e, t, r) {
      (t = r(8)(!1)).push([e.i, "@keyframes heartbeat{0%{transform:scale(0)}25%{transform:scale(1.2)}50%{transform:scale(1)}75%{transform:scale(1.2)}100%{transform:scale(1)}}.react-3d-carousel{position:relative}.react-3d-carousel .slider-container{position:absolute;left:50%;top:0%;width:90%;margin:-0px auto 0px -45%}.react-3d-carousel .slider-container .slider-content{position:relative;left:50%;top:0%;width:70%;height:80%;transform:translateX(-50%)}.react-3d-carousel .slider-container .slider-content .slider-single{position:absolute;z-index:0;left:0;top:0;width:100%;transition:z-index 0ms 250ms}.react-3d-carousel .slider-container .slider-content .slider-single .slider-single-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;left:0;top:0;width:100%;;transition:500ms cubic-bezier(0.17, 0.67, 0.55, 1.43);transform:scale(0);opacity:0}.react-3d-carousel .slider-container .slider-content .slider-single .slider-single-content img{max-width:100%}.react-3d-carousel .slider-container .slider-content .slider-single.preactivede .slider-single-content{transform:translateX(-50%) scale(0)}.react-3d-carousel .slider-container .slider-content .slider-single.preactive{z-index:1}.react-3d-carousel .slider-container .slider-content .slider-single.preactive .slider-single-content{opacity:.3;transform:translateX(-25%) scale(0.8)}.react-3d-carousel .slider-container .slider-content .slider-single.proactive{z-index:1}.react-3d-carousel .slider-container .slider-content .slider-single.proactive .slider-single-content{opacity:.3;transform:translateX(25%) scale(0.8)}.react-3d-carousel .slider-container .slider-content .slider-single.proactivede .slider-single-content{transform:translateX(50%) scale(0)}.react-3d-carousel .slider-container .slider-content .slider-single.active{z-index:2}.react-3d-carousel .slider-container .slider-content .slider-single.active .slider-left,.react-3d-carousel .slider-container .slider-content .slider-single.active .slider-right{display:block}.react-3d-carousel .slider-container .slider-content .slider-single.active .slider-single-content{opacity:1;transform:translateX(0%) scale(1)}.react-3d-carousel .slider-container .slider-left{position:absolute;display:none;z-index:3;right:101%;margin-right:5px;padding:20px 15px;height:100%;cursor:pointer}.react-3d-carousel .slider-container .slider-left div{position:absolute;top:50%;left:0%;margin-top:-20px;color:#ffffff;transform:translateY(-50%);padding:10px 10px;}.react-3d-carousel .slider-container .slider-right{display:none;position:absolute;z-index:3;left:101%;padding:20px 15px;height:101%;cursor:pointer;margin-left:-2px}.react-3d-carousel .slider-container .slider-right div{position:absolute;top:50%;left:0%;margin-top:-20px;color:#ffffff;transform:translateY(-50%);padding:10px 10px;border-top:}\n", ""]), e.exports = t
  }, function(e, t, r) {
      "use strict";
      e.exports = function(e) {
          var t = [];
          return t.toString = function() {
              return this.map((function(t) {
                  var r = function(e, t) {
                      var r = e[1] || "",
                          n = e[3];
                      if (!n) return r;
                      if (t && "function" == typeof btoa) {
                          var i = (s = n, a = btoa(unescape(encodeURIComponent(JSON.stringify(s)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a), "/*# ".concat(l, " */")),
                              o = n.sources.map((function(e) {
                                  return "/*# sourceURL=".concat(n.sourceRoot || "").concat(e, " */")
                              }));
                          return [r].concat(o).concat([i]).join("\n")
                      }
                      var s, a, l;
                      return [r].join("\n")
                  }(t, e);
                  return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r
              })).join("")
          }, t.i = function(e, r, n) {
              "string" == typeof e && (e = [
                  [null, e, ""]
              ]);
              var i = {};
              if (n)
                  for (var o = 0; o < this.length; o++) {
                      var s = this[o][0];
                      null != s && (i[s] = !0)
                  }
              for (var a = 0; a < e.length; a++) {
                  var l = [].concat(e[a]);
                  n && i[l[0]] || (r && (l[2] ? l[2] = "".concat(r, " and ").concat(l[2]) : l[2] = r), t.push(l))
              }
          }, t
      }
  }, function(e, t) {
      var r = "undefined" != typeof Element,
          n = "function" == typeof Map,
          i = "function" == typeof Set,
          o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      e.exports = function(e, t) {
          try {
              return function e(t, s) {
                  if (t === s) return !0;
                  if (t && s && "object" == typeof t && "object" == typeof s) {
                      if (t.constructor !== s.constructor) return !1;
                      var a, l, c, u;
                      if (Array.isArray(t)) {
                          if ((a = t.length) != s.length) return !1;
                          for (l = a; 0 != l--;)
                              if (!e(t[l], s[l])) return !1;
                          return !0
                      }
                      if (n && t instanceof Map && s instanceof Map) {
                          if (t.size !== s.size) return !1;
                          for (u = t.entries(); !(l = u.next()).done;)
                              if (!s.has(l.value[0])) return !1;
                          for (u = t.entries(); !(l = u.next()).done;)
                              if (!e(l.value[1], s.get(l.value[0]))) return !1;
                          return !0
                      }
                      if (i && t instanceof Set && s instanceof Set) {
                          if (t.size !== s.size) return !1;
                          for (u = t.entries(); !(l = u.next()).done;)
                              if (!s.has(l.value[0])) return !1;
                          return !0
                      }
                      if (o && ArrayBuffer.isView(t) && ArrayBuffer.isView(s)) {
                          if ((a = t.length) != s.length) return !1;
                          for (l = a; 0 != l--;)
                              if (t[l] !== s[l]) return !1;
                          return !0
                      }
                      if (t.constructor === RegExp) return t.source === s.source && t.flags === s.flags;
                      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === s.valueOf();
                      if (t.toString !== Object.prototype.toString) return t.toString() === s.toString();
                      if ((a = (c = Object.keys(t)).length) !== Object.keys(s).length) return !1;
                      for (l = a; 0 != l--;)
                          if (!Object.prototype.hasOwnProperty.call(s, c[l])) return !1;
                      if (r && t instanceof Element) return !1;
                      for (l = a; 0 != l--;)
                          if (!("_owner" === c[l] && t.$$typeof || e(t[c[l]], s[c[l]]))) return !1;
                      return !0
                  }
                  return t != t && s != s
              }(e, t)
          } catch (e) {
              if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
              throw e
          }
      }
  }])
}));
