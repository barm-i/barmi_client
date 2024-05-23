/*! For license information please see main.bundle.js.LICENSE.txt */
(() => {
  var t = {
      465: function (t) {
        (t.exports = (function () {
          "use strict";
          function t(t, e, n) {
            if ("function" == typeof t ? t === e : t.has(e))
              return arguments.length < 3 ? e : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          function e(t, e, n) {
            return (
              (e = l(e)),
              (function (t, e) {
                if (e && ("object" == typeof e || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(t);
              })(
                t,
                r()
                  ? Reflect.construct(e, n || [], l(t).constructor)
                  : e.apply(t, n)
              )
            );
          }
          function n(e, n) {
            return e.get(t(e, n));
          }
          function r() {
            try {
              var t = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (t) {}
            return (r = function () {
              return !!t;
            })();
          }
          function o(t) {
            var e = (function (t, e) {
              if ("object" != typeof t || !t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" != typeof r) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == typeof e ? e : e + "";
          }
          function i(t) {
            return (
              (i =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    }),
              i(t)
            );
          }
          function a(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function s(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, o(r.key), r);
            }
          }
          function c(t, e, n) {
            return (
              e && s(t.prototype, e),
              n && s(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          }
          function l(t) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  }),
              l(t)
            );
          }
          function u(t, e) {
            return (
              (u = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                    return (t.__proto__ = e), t;
                  }),
              u(t, e)
            );
          }
          function h() {
            return (
              (h =
                "undefined" != typeof Reflect && Reflect.get
                  ? Reflect.get.bind()
                  : function (t, e, n) {
                      var r = (function (t, e) {
                        for (
                          ;
                          !Object.prototype.hasOwnProperty.call(t, e) &&
                          null !== (t = l(t));

                        );
                        return t;
                      })(t, e);
                      if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, e);
                        return o.get
                          ? o.get.call(arguments.length < 3 ? t : n)
                          : o.value;
                      }
                    }),
              h.apply(this, arguments)
            );
          }
          function f(t, e) {
            return (
              (function (t) {
                if (Array.isArray(t)) return t;
              })(t) ||
              (function (t, e) {
                var n =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != n) {
                  var r,
                    o,
                    i,
                    a,
                    s = [],
                    c = !0,
                    l = !1;
                  try {
                    if (((i = (n = n.call(t)).next), 0 === e)) {
                      if (Object(n) !== n) return;
                      c = !1;
                    } else
                      for (
                        ;
                        !(c = (r = i.call(n)).done) &&
                        (s.push(r.value), s.length !== e);
                        c = !0
                      );
                  } catch (t) {
                    (l = !0), (o = t);
                  } finally {
                    try {
                      if (
                        !c &&
                        null != n.return &&
                        ((a = n.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (l) throw o;
                    }
                  }
                  return s;
                }
              })(t, e) ||
              p(t, e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function d(t) {
            return (
              (function (t) {
                if (Array.isArray(t)) return m(t);
              })(t) ||
              (function (t) {
                if (
                  ("undefined" != typeof Symbol &&
                    null != t[Symbol.iterator]) ||
                  null != t["@@iterator"]
                )
                  return Array.from(t);
              })(t) ||
              p(t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function p(t, e) {
            if (t) {
              if ("string" == typeof t) return m(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? m(t, e)
                  : void 0
              );
            }
          }
          function m(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
          }
          function v(t, e, n) {
            (function (t, e) {
              if (e.has(t))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(t, e),
              e.set(t, n);
          }
          var y = {},
            g = function (t) {
              return new Promise(function (e) {
                if (!t) return e();
                var n = window.scrollX,
                  r = window.scrollY;
                (y.restoreFocusTimeout = setTimeout(function () {
                  y.previousActiveElement instanceof HTMLElement
                    ? (y.previousActiveElement.focus(),
                      (y.previousActiveElement = null))
                    : document.body && document.body.focus(),
                    e();
                }, 100)),
                  window.scrollTo(n, r);
              });
            },
            w = "swal2-",
            b = [
              "container",
              "shown",
              "height-auto",
              "iosfix",
              "popup",
              "modal",
              "no-backdrop",
              "no-transition",
              "toast",
              "toast-shown",
              "show",
              "hide",
              "close",
              "title",
              "html-container",
              "actions",
              "confirm",
              "deny",
              "cancel",
              "default-outline",
              "footer",
              "icon",
              "icon-content",
              "image",
              "input",
              "file",
              "range",
              "select",
              "radio",
              "checkbox",
              "label",
              "textarea",
              "inputerror",
              "input-label",
              "validation-message",
              "progress-steps",
              "active-progress-step",
              "progress-step",
              "progress-step-line",
              "loader",
              "loading",
              "styled",
              "top",
              "top-start",
              "top-end",
              "top-left",
              "top-right",
              "center",
              "center-start",
              "center-end",
              "center-left",
              "center-right",
              "bottom",
              "bottom-start",
              "bottom-end",
              "bottom-left",
              "bottom-right",
              "grow-row",
              "grow-column",
              "grow-fullscreen",
              "rtl",
              "timer-progress-bar",
              "timer-progress-bar-container",
              "scrollbar-measure",
              "icon-success",
              "icon-warning",
              "icon-info",
              "icon-question",
              "icon-error",
            ].reduce(function (t, e) {
              return (t[e] = w + e), t;
            }, {}),
            E = ["success", "warning", "info", "question", "error"].reduce(
              function (t, e) {
                return (t[e] = w + e), t;
              },
              {}
            ),
            x = "SweetAlert2:",
            k = function (t) {
              return t.charAt(0).toUpperCase() + t.slice(1);
            },
            C = function (t) {
              console.warn(
                "".concat(x, " ").concat("object" === i(t) ? t.join(" ") : t)
              );
            },
            S = function (t) {
              console.error("".concat(x, " ").concat(t));
            },
            T = [],
            O = function (t, e) {
              var n;
              (n = '"'
                .concat(
                  t,
                  '" is deprecated and will be removed in the next major release. Please use "'
                )
                .concat(e, '" instead.')),
                T.includes(n) || (T.push(n), C(n));
            },
            L = function (t) {
              return "function" == typeof t ? t() : t;
            },
            P = function (t) {
              return t && "function" == typeof t.toPromise;
            },
            A = function (t) {
              return P(t) ? t.toPromise() : Promise.resolve(t);
            },
            B = function (t) {
              return t && Promise.resolve(t) === t;
            },
            j = function () {
              return document.body.querySelector(".".concat(b.container));
            },
            _ = function (t) {
              var e = j();
              return e ? e.querySelector(t) : null;
            },
            N = function (t) {
              return _(".".concat(t));
            },
            R = function () {
              return N(b.popup);
            },
            D = function () {
              return N(b.icon);
            },
            I = function () {
              return N(b.title);
            },
            F = function () {
              return N(b["html-container"]);
            },
            q = function () {
              return N(b.image);
            },
            U = function () {
              return N(b["progress-steps"]);
            },
            M = function () {
              return N(b["validation-message"]);
            },
            z = function () {
              return _(".".concat(b.actions, " .").concat(b.confirm));
            },
            G = function () {
              return _(".".concat(b.actions, " .").concat(b.cancel));
            },
            H = function () {
              return _(".".concat(b.actions, " .").concat(b.deny));
            },
            V = function () {
              return _(".".concat(b.loader));
            },
            W = function () {
              return N(b.actions);
            },
            Y = function () {
              return N(b.footer);
            },
            K = function () {
              return N(b["timer-progress-bar"]);
            },
            $ = function () {
              return N(b.close);
            },
            X = function () {
              var t = R();
              if (!t) return [];
              var e = t.querySelectorAll(
                  '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
                ),
                n = Array.from(e).sort(function (t, e) {
                  var n = parseInt(t.getAttribute("tabindex") || "0"),
                    r = parseInt(e.getAttribute("tabindex") || "0");
                  return n > r ? 1 : n < r ? -1 : 0;
                }),
                r = t.querySelectorAll(
                  '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
                ),
                o = Array.from(r).filter(function (t) {
                  return "-1" !== t.getAttribute("tabindex");
                });
              return d(new Set(n.concat(o))).filter(function (t) {
                return pt(t);
              });
            },
            J = function () {
              return (
                tt(document.body, b.shown) &&
                !tt(document.body, b["toast-shown"]) &&
                !tt(document.body, b["no-backdrop"])
              );
            },
            Z = function () {
              var t = R();
              return !!t && tt(t, b.toast);
            },
            Q = function (t, e) {
              if (((t.textContent = ""), e)) {
                var n = new DOMParser().parseFromString(e, "text/html"),
                  r = n.querySelector("head");
                r &&
                  Array.from(r.childNodes).forEach(function (e) {
                    t.appendChild(e);
                  });
                var o = n.querySelector("body");
                o &&
                  Array.from(o.childNodes).forEach(function (e) {
                    e instanceof HTMLVideoElement ||
                    e instanceof HTMLAudioElement
                      ? t.appendChild(e.cloneNode(!0))
                      : t.appendChild(e);
                  });
              }
            },
            tt = function (t, e) {
              if (!e) return !1;
              for (var n = e.split(/\s+/), r = 0; r < n.length; r++)
                if (!t.classList.contains(n[r])) return !1;
              return !0;
            },
            et = function (t, e, n) {
              if (
                ((function (t, e) {
                  Array.from(t.classList).forEach(function (n) {
                    Object.values(b).includes(n) ||
                      Object.values(E).includes(n) ||
                      Object.values(e.showClass || {}).includes(n) ||
                      t.classList.remove(n);
                  });
                })(t, e),
                e.customClass && e.customClass[n])
              ) {
                if (
                  "string" != typeof e.customClass[n] &&
                  !e.customClass[n].forEach
                )
                  return void C(
                    "Invalid type of customClass."
                      .concat(n, '! Expected string or iterable object, got "')
                      .concat(i(e.customClass[n]), '"')
                  );
                it(t, e.customClass[n]);
              }
            },
            nt = function (t, e) {
              if (!e) return null;
              switch (e) {
                case "select":
                case "textarea":
                case "file":
                  return t.querySelector(
                    ".".concat(b.popup, " > .").concat(b[e])
                  );
                case "checkbox":
                  return t.querySelector(
                    ".".concat(b.popup, " > .").concat(b.checkbox, " input")
                  );
                case "radio":
                  return (
                    t.querySelector(
                      "."
                        .concat(b.popup, " > .")
                        .concat(b.radio, " input:checked")
                    ) ||
                    t.querySelector(
                      "."
                        .concat(b.popup, " > .")
                        .concat(b.radio, " input:first-child")
                    )
                  );
                case "range":
                  return t.querySelector(
                    ".".concat(b.popup, " > .").concat(b.range, " input")
                  );
                default:
                  return t.querySelector(
                    ".".concat(b.popup, " > .").concat(b.input)
                  );
              }
            },
            rt = function (t) {
              if ((t.focus(), "file" !== t.type)) {
                var e = t.value;
                (t.value = ""), (t.value = e);
              }
            },
            ot = function (t, e, n) {
              t &&
                e &&
                ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)),
                e.forEach(function (e) {
                  Array.isArray(t)
                    ? t.forEach(function (t) {
                        n ? t.classList.add(e) : t.classList.remove(e);
                      })
                    : n
                    ? t.classList.add(e)
                    : t.classList.remove(e);
                }));
            },
            it = function (t, e) {
              ot(t, e, !0);
            },
            at = function (t, e) {
              ot(t, e, !1);
            },
            st = function (t, e) {
              for (var n = Array.from(t.children), r = 0; r < n.length; r++) {
                var o = n[r];
                if (o instanceof HTMLElement && tt(o, e)) return o;
              }
            },
            ct = function (t, e, n) {
              n === "".concat(parseInt(n)) && (n = parseInt(n)),
                n || 0 === parseInt(n)
                  ? t.style.setProperty(
                      e,
                      "number" == typeof n ? "".concat(n, "px") : n
                    )
                  : t.style.removeProperty(e);
            },
            lt = function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "flex";
              t && (t.style.display = e);
            },
            ut = function (t) {
              t && (t.style.display = "none");
            },
            ht = function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "block";
              t &&
                new MutationObserver(function () {
                  dt(t, t.innerHTML, e);
                }).observe(t, { childList: !0, subtree: !0 });
            },
            ft = function (t, e, n, r) {
              var o = t.querySelector(e);
              o && o.style.setProperty(n, r);
            },
            dt = function (t, e) {
              e
                ? lt(
                    t,
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "flex"
                  )
                : ut(t);
            },
            pt = function (t) {
              return !(
                !t ||
                !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
              );
            },
            mt = function (t) {
              return !!(t.scrollHeight > t.clientHeight);
            },
            vt = function (t) {
              var e = window.getComputedStyle(t),
                n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
                r = parseFloat(
                  e.getPropertyValue("transition-duration") || "0"
                );
              return n > 0 || r > 0;
            },
            yt = function (t) {
              var e =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = K();
              n &&
                pt(n) &&
                (e && ((n.style.transition = "none"), (n.style.width = "100%")),
                setTimeout(function () {
                  (n.style.transition = "width ".concat(t / 1e3, "s linear")),
                    (n.style.width = "0%");
                }, 10));
            },
            gt = function () {
              return (
                "undefined" == typeof window || "undefined" == typeof document
              );
            },
            wt = '\n <div aria-labelledby="'
              .concat(b.title, '" aria-describedby="')
              .concat(b["html-container"], '" class="')
              .concat(
                b.popup,
                '" tabindex="-1">\n   <button type="button" class="'
              )
              .concat(b.close, '"></button>\n   <ul class="')
              .concat(b["progress-steps"], '"></ul>\n   <div class="')
              .concat(b.icon, '"></div>\n   <img class="')
              .concat(b.image, '" />\n   <h2 class="')
              .concat(b.title, '" id="')
              .concat(b.title, '"></h2>\n   <div class="')
              .concat(b["html-container"], '" id="')
              .concat(b["html-container"], '"></div>\n   <input class="')
              .concat(b.input, '" id="')
              .concat(b.input, '" />\n   <input type="file" class="')
              .concat(b.file, '" />\n   <div class="')
              .concat(
                b.range,
                '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="'
              )
              .concat(b.select, '" id="')
              .concat(b.select, '"></select>\n   <div class="')
              .concat(b.radio, '"></div>\n   <label class="')
              .concat(b.checkbox, '">\n     <input type="checkbox" id="')
              .concat(b.checkbox, '" />\n     <span class="')
              .concat(b.label, '"></span>\n   </label>\n   <textarea class="')
              .concat(b.textarea, '" id="')
              .concat(b.textarea, '"></textarea>\n   <div class="')
              .concat(b["validation-message"], '" id="')
              .concat(b["validation-message"], '"></div>\n   <div class="')
              .concat(b.actions, '">\n     <div class="')
              .concat(b.loader, '"></div>\n     <button type="button" class="')
              .concat(
                b.confirm,
                '"></button>\n     <button type="button" class="'
              )
              .concat(b.deny, '"></button>\n     <button type="button" class="')
              .concat(b.cancel, '"></button>\n   </div>\n   <div class="')
              .concat(b.footer, '"></div>\n   <div class="')
              .concat(
                b["timer-progress-bar-container"],
                '">\n     <div class="'
              )
              .concat(b["timer-progress-bar"], '"></div>\n   </div>\n </div>\n')
              .replace(/(^|\n)\s*/g, ""),
            bt = function () {
              y.currentInstance.resetValidationMessage();
            },
            Et = function (t) {
              var e,
                n,
                r,
                o,
                i,
                a,
                s,
                c,
                l,
                u,
                h =
                  !!(e = j()) &&
                  (e.remove(),
                  at(
                    [document.documentElement, document.body],
                    [b["no-backdrop"], b["toast-shown"], b["has-column"]]
                  ),
                  !0);
              if (gt()) S("SweetAlert2 requires document to initialize");
              else {
                var f = document.createElement("div");
                (f.className = b.container),
                  h && it(f, b["no-transition"]),
                  Q(f, wt);
                var d =
                  "string" == typeof (u = t.target)
                    ? document.querySelector(u)
                    : u;
                d.appendChild(f),
                  (function (t) {
                    var e = R();
                    e.setAttribute("role", t.toast ? "alert" : "dialog"),
                      e.setAttribute(
                        "aria-live",
                        t.toast ? "polite" : "assertive"
                      ),
                      t.toast || e.setAttribute("aria-modal", "true");
                  })(t),
                  (function (t) {
                    "rtl" === window.getComputedStyle(t).direction &&
                      it(j(), b.rtl);
                  })(d),
                  (n = R()),
                  (r = st(n, b.input)),
                  (o = st(n, b.file)),
                  (i = n.querySelector(".".concat(b.range, " input"))),
                  (a = n.querySelector(".".concat(b.range, " output"))),
                  (s = st(n, b.select)),
                  (c = n.querySelector(".".concat(b.checkbox, " input"))),
                  (l = st(n, b.textarea)),
                  (r.oninput = bt),
                  (o.onchange = bt),
                  (s.onchange = bt),
                  (c.onchange = bt),
                  (l.oninput = bt),
                  (i.oninput = function () {
                    bt(), (a.value = i.value);
                  }),
                  (i.onchange = function () {
                    bt(), (a.value = i.value);
                  });
              }
            },
            xt = function (t, e) {
              t instanceof HTMLElement
                ? e.appendChild(t)
                : "object" === i(t)
                ? kt(t, e)
                : t && Q(e, t);
            },
            kt = function (t, e) {
              t.jquery ? Ct(e, t) : Q(e, t.toString());
            },
            Ct = function (t, e) {
              if (((t.textContent = ""), 0 in e))
                for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
              else t.appendChild(e.cloneNode(!0));
            },
            St = (function () {
              if (gt()) return !1;
              var t = document.createElement("div");
              return void 0 !== t.style.webkitAnimation
                ? "webkitAnimationEnd"
                : void 0 !== t.style.animation && "animationend";
            })(),
            Tt = function (t, e) {
              var n = W(),
                r = V();
              n &&
                r &&
                (e.showConfirmButton || e.showDenyButton || e.showCancelButton
                  ? lt(n)
                  : ut(n),
                et(n, e, "actions"),
                (function (t, e, n) {
                  var r = z(),
                    o = H(),
                    i = G();
                  r &&
                    o &&
                    i &&
                    (Ot(r, "confirm", n),
                    Ot(o, "deny", n),
                    Ot(i, "cancel", n),
                    (function (t, e, n, r) {
                      r.buttonsStyling
                        ? (it([t, e, n], b.styled),
                          r.confirmButtonColor &&
                            ((t.style.backgroundColor = r.confirmButtonColor),
                            it(t, b["default-outline"])),
                          r.denyButtonColor &&
                            ((e.style.backgroundColor = r.denyButtonColor),
                            it(e, b["default-outline"])),
                          r.cancelButtonColor &&
                            ((n.style.backgroundColor = r.cancelButtonColor),
                            it(n, b["default-outline"])))
                        : at([t, e, n], b.styled);
                    })(r, o, i, n),
                    n.reverseButtons &&
                      (n.toast
                        ? (t.insertBefore(i, r), t.insertBefore(o, r))
                        : (t.insertBefore(i, e),
                          t.insertBefore(o, e),
                          t.insertBefore(r, e))));
                })(n, r, e),
                Q(r, e.loaderHtml || ""),
                et(r, e, "loader"));
            };
          function Ot(t, e, n) {
            var r = k(e);
            dt(t, n["show".concat(r, "Button")], "inline-block"),
              Q(t, n["".concat(e, "ButtonText")] || ""),
              t.setAttribute(
                "aria-label",
                n["".concat(e, "ButtonAriaLabel")] || ""
              ),
              (t.className = b[e]),
              et(t, n, "".concat(e, "Button"));
          }
          var Lt = function (t, e) {
            var n = j();
            n &&
              ((function (t, e) {
                "string" == typeof e
                  ? (t.style.background = e)
                  : e ||
                    it(
                      [document.documentElement, document.body],
                      b["no-backdrop"]
                    );
              })(n, e.backdrop),
              (function (t, e) {
                e &&
                  (e in b
                    ? it(t, b[e])
                    : (C(
                        'The "position" parameter is not valid, defaulting to "center"'
                      ),
                      it(t, b.center)));
              })(n, e.position),
              (function (t, e) {
                e && it(t, b["grow-".concat(e)]);
              })(n, e.grow),
              et(n, e, "container"));
          };
          var Pt = { innerParams: new WeakMap(), domCache: new WeakMap() },
            At = [
              "input",
              "file",
              "range",
              "select",
              "radio",
              "checkbox",
              "textarea",
            ],
            Bt = function (t) {
              if (t.input)
                if (Ft[t.input]) {
                  var e = Dt(t.input),
                    n = Ft[t.input](e, t);
                  lt(e),
                    t.inputAutoFocus &&
                      setTimeout(function () {
                        rt(n);
                      });
                } else
                  S(
                    "Unexpected type of input! Expected "
                      .concat(Object.keys(Ft).join(" | "), ', got "')
                      .concat(t.input, '"')
                  );
            },
            jt = function (t, e) {
              var n = nt(R(), t);
              if (n)
                for (var r in ((function (t) {
                  for (var e = 0; e < t.attributes.length; e++) {
                    var n = t.attributes[e].name;
                    ["id", "type", "value", "style"].includes(n) ||
                      t.removeAttribute(n);
                  }
                })(n),
                e))
                  n.setAttribute(r, e[r]);
            },
            _t = function (t) {
              var e = Dt(t.input);
              "object" === i(t.customClass) && it(e, t.customClass.input);
            },
            Nt = function (t, e) {
              (t.placeholder && !e.inputPlaceholder) ||
                (t.placeholder = e.inputPlaceholder);
            },
            Rt = function (t, e, n) {
              if (n.inputLabel) {
                var r = document.createElement("label"),
                  o = b["input-label"];
                r.setAttribute("for", t.id),
                  (r.className = o),
                  "object" === i(n.customClass) &&
                    it(r, n.customClass.inputLabel),
                  (r.innerText = n.inputLabel),
                  e.insertAdjacentElement("beforebegin", r);
              }
            },
            Dt = function (t) {
              return st(R(), b[t] || b.input);
            },
            It = function (t, e) {
              ["string", "number"].includes(i(e))
                ? (t.value = "".concat(e))
                : B(e) ||
                  C(
                    'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                      i(e),
                      '"'
                    )
                  );
            },
            Ft = {};
          (Ft.text =
            Ft.email =
            Ft.password =
            Ft.number =
            Ft.tel =
            Ft.url =
            Ft.search =
            Ft.date =
            Ft["datetime-local"] =
            Ft.time =
            Ft.week =
            Ft.month =
              function (t, e) {
                return (
                  It(t, e.inputValue),
                  Rt(t, t, e),
                  Nt(t, e),
                  (t.type = e.input),
                  t
                );
              }),
            (Ft.file = function (t, e) {
              return Rt(t, t, e), Nt(t, e), t;
            }),
            (Ft.range = function (t, e) {
              var n = t.querySelector("input"),
                r = t.querySelector("output");
              return (
                It(n, e.inputValue),
                (n.type = e.input),
                It(r, e.inputValue),
                Rt(n, t, e),
                t
              );
            }),
            (Ft.select = function (t, e) {
              if (((t.textContent = ""), e.inputPlaceholder)) {
                var n = document.createElement("option");
                Q(n, e.inputPlaceholder),
                  (n.value = ""),
                  (n.disabled = !0),
                  (n.selected = !0),
                  t.appendChild(n);
              }
              return Rt(t, t, e), t;
            }),
            (Ft.radio = function (t) {
              return (t.textContent = ""), t;
            }),
            (Ft.checkbox = function (t, e) {
              var n = nt(R(), "checkbox");
              (n.value = "1"), (n.checked = Boolean(e.inputValue));
              var r = t.querySelector("span");
              return Q(r, e.inputPlaceholder), n;
            }),
            (Ft.textarea = function (t, e) {
              It(t, e.inputValue), Nt(t, e), Rt(t, t, e);
              return (
                setTimeout(function () {
                  if ("MutationObserver" in window) {
                    var n = parseInt(window.getComputedStyle(R()).width);
                    new MutationObserver(function () {
                      if (document.body.contains(t)) {
                        var r =
                          t.offsetWidth +
                          ((o = t),
                          parseInt(window.getComputedStyle(o).marginLeft) +
                            parseInt(window.getComputedStyle(o).marginRight));
                        r > n
                          ? (R().style.width = "".concat(r, "px"))
                          : ct(R(), "width", e.width);
                      }
                      var o;
                    }).observe(t, {
                      attributes: !0,
                      attributeFilter: ["style"],
                    });
                  }
                }),
                t
              );
            });
          var qt = function (t, e) {
              var n = F();
              n &&
                (ht(n),
                et(n, e, "htmlContainer"),
                e.html
                  ? (xt(e.html, n), lt(n, "block"))
                  : e.text
                  ? ((n.textContent = e.text), lt(n, "block"))
                  : ut(n),
                (function (t, e) {
                  var n = R();
                  if (n) {
                    var r = Pt.innerParams.get(t),
                      o = !r || e.input !== r.input;
                    At.forEach(function (t) {
                      var r = st(n, b[t]);
                      r &&
                        (jt(t, e.inputAttributes),
                        (r.className = b[t]),
                        o && ut(r));
                    }),
                      e.input && (o && Bt(e), _t(e));
                  }
                })(t, e));
            },
            Ut = function (t, e) {
              for (var n = 0, r = Object.entries(E); n < r.length; n++) {
                var o = f(r[n], 2),
                  i = o[0],
                  a = o[1];
                e.icon !== i && at(t, a);
              }
              it(t, e.icon && E[e.icon]), Gt(t, e), Mt(), et(t, e, "icon");
            },
            Mt = function () {
              var t = R();
              if (t)
                for (
                  var e = window
                      .getComputedStyle(t)
                      .getPropertyValue("background-color"),
                    n = t.querySelectorAll(
                      "[class^=swal2-success-circular-line], .swal2-success-fix"
                    ),
                    r = 0;
                  r < n.length;
                  r++
                )
                  n[r].style.backgroundColor = e;
            },
            zt = function (t, e) {
              if (e.icon || e.iconHtml) {
                var n = t.innerHTML,
                  r = "";
                e.iconHtml
                  ? (r = Ht(e.iconHtml))
                  : "success" === e.icon
                  ? ((r =
                      '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n'),
                    (n = n.replace(/ style=".*?"/g, "")))
                  : "error" === e.icon
                  ? (r =
                      '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n')
                  : e.icon &&
                    (r = Ht(
                      { question: "?", warning: "!", info: "i" }[e.icon]
                    )),
                  n.trim() !== r.trim() && Q(t, r);
              }
            },
            Gt = function (t, e) {
              if (e.iconColor) {
                (t.style.color = e.iconColor),
                  (t.style.borderColor = e.iconColor);
                for (
                  var n = 0,
                    r = [
                      ".swal2-success-line-tip",
                      ".swal2-success-line-long",
                      ".swal2-x-mark-line-left",
                      ".swal2-x-mark-line-right",
                    ];
                  n < r.length;
                  n++
                ) {
                  ft(t, r[n], "background-color", e.iconColor);
                }
                ft(t, ".swal2-success-ring", "border-color", e.iconColor);
              }
            },
            Ht = function (t) {
              return '<div class="'
                .concat(b["icon-content"], '">')
                .concat(t, "</div>");
            },
            Vt = function (t, e) {
              var n = e.showClass || {};
              (t.className = ""
                .concat(b.popup, " ")
                .concat(pt(t) ? n.popup : "")),
                e.toast
                  ? (it(
                      [document.documentElement, document.body],
                      b["toast-shown"]
                    ),
                    it(t, b.toast))
                  : it(t, b.modal),
                et(t, e, "popup"),
                "string" == typeof e.customClass && it(t, e.customClass),
                e.icon && it(t, b["icon-".concat(e.icon)]);
            },
            Wt = function (t) {
              var e = document.createElement("li");
              return it(e, b["progress-step"]), Q(e, t), e;
            },
            Yt = function (t) {
              var e = document.createElement("li");
              return (
                it(e, b["progress-step-line"]),
                t.progressStepsDistance &&
                  ct(e, "width", t.progressStepsDistance),
                e
              );
            },
            Kt = function (t, e) {
              (function (t, e) {
                var n = j(),
                  r = R();
                if (n && r) {
                  if (e.toast) {
                    ct(n, "width", e.width), (r.style.width = "100%");
                    var o = V();
                    o && r.insertBefore(o, D());
                  } else ct(r, "width", e.width);
                  ct(r, "padding", e.padding),
                    e.color && (r.style.color = e.color),
                    e.background && (r.style.background = e.background),
                    ut(M()),
                    Vt(r, e);
                }
              })(0, e),
                Lt(0, e),
                (function (t, e) {
                  var n = U();
                  if (n) {
                    var r = e.progressSteps,
                      o = e.currentProgressStep;
                    r && 0 !== r.length && void 0 !== o
                      ? (lt(n),
                        (n.textContent = ""),
                        o >= r.length &&
                          C(
                            "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
                          ),
                        r.forEach(function (t, i) {
                          var a = Wt(t);
                          if (
                            (n.appendChild(a),
                            i === o && it(a, b["active-progress-step"]),
                            i !== r.length - 1)
                          ) {
                            var s = Yt(e);
                            n.appendChild(s);
                          }
                        }))
                      : ut(n);
                  }
                })(0, e),
                (function (t, e) {
                  var n = Pt.innerParams.get(t),
                    r = D();
                  if (r) {
                    if (n && e.icon === n.icon) return zt(r, e), void Ut(r, e);
                    if (e.icon || e.iconHtml) {
                      if (e.icon && -1 === Object.keys(E).indexOf(e.icon))
                        return (
                          S(
                            'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                              e.icon,
                              '"'
                            )
                          ),
                          void ut(r)
                        );
                      lt(r),
                        zt(r, e),
                        Ut(r, e),
                        it(r, e.showClass && e.showClass.icon);
                    } else ut(r);
                  }
                })(t, e),
                (function (t, e) {
                  var n = q();
                  n &&
                    (e.imageUrl
                      ? (lt(n, ""),
                        n.setAttribute("src", e.imageUrl),
                        n.setAttribute("alt", e.imageAlt || ""),
                        ct(n, "width", e.imageWidth),
                        ct(n, "height", e.imageHeight),
                        (n.className = b.image),
                        et(n, e, "image"))
                      : ut(n));
                })(0, e),
                (function (t, e) {
                  var n = I();
                  n &&
                    (ht(n),
                    dt(n, e.title || e.titleText, "block"),
                    e.title && xt(e.title, n),
                    e.titleText && (n.innerText = e.titleText),
                    et(n, e, "title"));
                })(0, e),
                (function (t, e) {
                  var n = $();
                  n &&
                    (Q(n, e.closeButtonHtml || ""),
                    et(n, e, "closeButton"),
                    dt(n, e.showCloseButton),
                    n.setAttribute("aria-label", e.closeButtonAriaLabel || ""));
                })(0, e),
                qt(t, e),
                Tt(0, e),
                (function (t, e) {
                  var n = Y();
                  n &&
                    (ht(n),
                    dt(n, e.footer, "block"),
                    e.footer && xt(e.footer, n),
                    et(n, e, "footer"));
                })(0, e);
              var n = R();
              "function" == typeof e.didRender && n && e.didRender(n);
            },
            $t = function () {
              var t;
              return null === (t = z()) || void 0 === t ? void 0 : t.click();
            },
            Xt = Object.freeze({
              cancel: "cancel",
              backdrop: "backdrop",
              close: "close",
              esc: "esc",
              timer: "timer",
            }),
            Jt = function (t) {
              t.keydownTarget &&
                t.keydownHandlerAdded &&
                (t.keydownTarget.removeEventListener(
                  "keydown",
                  t.keydownHandler,
                  { capture: t.keydownListenerCapture }
                ),
                (t.keydownHandlerAdded = !1));
            },
            Zt = function (t, e) {
              var n,
                r = X();
              if (r.length)
                return (
                  (t += e) === r.length
                    ? (t = 0)
                    : -1 === t && (t = r.length - 1),
                  void r[t].focus()
                );
              null === (n = R()) || void 0 === n || n.focus();
            },
            Qt = ["ArrowRight", "ArrowDown"],
            te = ["ArrowLeft", "ArrowUp"],
            ee = function (t, e, n) {
              t &&
                (e.isComposing ||
                  229 === e.keyCode ||
                  (t.stopKeydownPropagation && e.stopPropagation(),
                  "Enter" === e.key
                    ? ne(e, t)
                    : "Tab" === e.key
                    ? re(e)
                    : [].concat(Qt, te).includes(e.key)
                    ? oe(e.key)
                    : "Escape" === e.key && ie(e, t, n)));
            },
            ne = function (t, e) {
              if (L(e.allowEnterKey)) {
                var n = nt(R(), e.input);
                if (
                  t.target &&
                  n &&
                  t.target instanceof HTMLElement &&
                  t.target.outerHTML === n.outerHTML
                ) {
                  if (["textarea", "file"].includes(e.input)) return;
                  $t(), t.preventDefault();
                }
              }
            },
            re = function (t) {
              for (var e = t.target, n = X(), r = -1, o = 0; o < n.length; o++)
                if (e === n[o]) {
                  r = o;
                  break;
                }
              t.shiftKey ? Zt(r, -1) : Zt(r, 1),
                t.stopPropagation(),
                t.preventDefault();
            },
            oe = function (t) {
              var e = W(),
                n = z(),
                r = H(),
                o = G();
              if (e && n && r && o) {
                var i = [n, r, o];
                if (
                  !(document.activeElement instanceof HTMLElement) ||
                  i.includes(document.activeElement)
                ) {
                  var a = Qt.includes(t)
                      ? "nextElementSibling"
                      : "previousElementSibling",
                    s = document.activeElement;
                  if (s) {
                    for (var c = 0; c < e.children.length; c++) {
                      if (!(s = s[a])) return;
                      if (s instanceof HTMLButtonElement && pt(s)) break;
                    }
                    s instanceof HTMLButtonElement && s.focus();
                  }
                }
              }
            },
            ie = function (t, e, n) {
              L(e.allowEscapeKey) && (t.preventDefault(), n(Xt.esc));
            },
            ae = {
              swalPromiseResolve: new WeakMap(),
              swalPromiseReject: new WeakMap(),
            },
            se = function () {
              Array.from(document.body.children).forEach(function (t) {
                t.hasAttribute("data-previous-aria-hidden")
                  ? (t.setAttribute(
                      "aria-hidden",
                      t.getAttribute("data-previous-aria-hidden") || ""
                    ),
                    t.removeAttribute("data-previous-aria-hidden"))
                  : t.removeAttribute("aria-hidden");
              });
            },
            ce = "undefined" != typeof window && !!window.GestureEvent,
            le = function () {
              var t,
                e = j();
              e &&
                ((e.ontouchstart = function (e) {
                  t = ue(e);
                }),
                (e.ontouchmove = function (e) {
                  t && (e.preventDefault(), e.stopPropagation());
                }));
            },
            ue = function (t) {
              var e = t.target,
                n = j(),
                r = F();
              return !(
                !n ||
                !r ||
                he(t) ||
                fe(t) ||
                (e !== n &&
                  (mt(n) ||
                    !(e instanceof HTMLElement) ||
                    "INPUT" === e.tagName ||
                    "TEXTAREA" === e.tagName ||
                    (mt(r) && r.contains(e))))
              );
            },
            he = function (t) {
              return (
                t.touches &&
                t.touches.length &&
                "stylus" === t.touches[0].touchType
              );
            },
            fe = function (t) {
              return t.touches && t.touches.length > 1;
            },
            de = null,
            pe = function (t) {
              null === de &&
                (document.body.scrollHeight > window.innerHeight ||
                  "scroll" === t) &&
                ((de = parseInt(
                  window
                    .getComputedStyle(document.body)
                    .getPropertyValue("padding-right")
                )),
                (document.body.style.paddingRight = "".concat(
                  de +
                    (function () {
                      var t = document.createElement("div");
                      (t.className = b["scrollbar-measure"]),
                        document.body.appendChild(t);
                      var e = t.getBoundingClientRect().width - t.clientWidth;
                      return document.body.removeChild(t), e;
                    })(),
                  "px"
                )));
            };
          function me(t, e, n, r) {
            Z()
              ? ke(t, r)
              : (g(n).then(function () {
                  return ke(t, r);
                }),
                Jt(y)),
              ce
                ? (e.setAttribute("style", "display:none !important"),
                  e.removeAttribute("class"),
                  (e.innerHTML = ""))
                : e.remove(),
              J() &&
                (null !== de &&
                  ((document.body.style.paddingRight = "".concat(de, "px")),
                  (de = null)),
                (function () {
                  if (tt(document.body, b.iosfix)) {
                    var t = parseInt(document.body.style.top, 10);
                    at(document.body, b.iosfix),
                      (document.body.style.top = ""),
                      (document.body.scrollTop = -1 * t);
                  }
                })(),
                se()),
              at(
                [document.documentElement, document.body],
                [b.shown, b["height-auto"], b["no-backdrop"], b["toast-shown"]]
              );
          }
          function ve(t) {
            t = be(t);
            var e = ae.swalPromiseResolve.get(this),
              n = ye(this);
            this.isAwaitingPromise
              ? t.isDismissed || (we(this), e(t))
              : n && e(t);
          }
          var ye = function (t) {
            var e = R();
            if (!e) return !1;
            var n = Pt.innerParams.get(t);
            if (!n || tt(e, n.hideClass.popup)) return !1;
            at(e, n.showClass.popup), it(e, n.hideClass.popup);
            var r = j();
            return (
              at(r, n.showClass.backdrop),
              it(r, n.hideClass.backdrop),
              Ee(t, e, n),
              !0
            );
          };
          function ge(t) {
            var e = ae.swalPromiseReject.get(this);
            we(this), e && e(t);
          }
          var we = function (t) {
              t.isAwaitingPromise &&
                (delete t.isAwaitingPromise,
                Pt.innerParams.get(t) || t._destroy());
            },
            be = function (t) {
              return void 0 === t
                ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
                : Object.assign(
                    { isConfirmed: !1, isDenied: !1, isDismissed: !1 },
                    t
                  );
            },
            Ee = function (t, e, n) {
              var r = j(),
                o = St && vt(e);
              "function" == typeof n.willClose && n.willClose(e),
                o
                  ? xe(t, e, r, n.returnFocus, n.didClose)
                  : me(t, r, n.returnFocus, n.didClose);
            },
            xe = function (t, e, n, r, o) {
              St &&
                ((y.swalCloseEventFinishedCallback = me.bind(null, t, n, r, o)),
                e.addEventListener(St, function (t) {
                  t.target === e &&
                    (y.swalCloseEventFinishedCallback(),
                    delete y.swalCloseEventFinishedCallback);
                }));
            },
            ke = function (t, e) {
              setTimeout(function () {
                "function" == typeof e && e.bind(t.params)(),
                  t._destroy && t._destroy();
              });
            },
            Ce = function (t) {
              var e = R();
              if ((e || new or(), (e = R()))) {
                var n = V();
                Z() ? ut(D()) : Se(e, t),
                  lt(n),
                  e.setAttribute("data-loading", "true"),
                  e.setAttribute("aria-busy", "true"),
                  e.focus();
              }
            },
            Se = function (t, e) {
              var n = W(),
                r = V();
              n &&
                r &&
                (!e && pt(z()) && (e = z()),
                lt(n),
                e &&
                  (ut(e),
                  r.setAttribute("data-button-to-replace", e.className),
                  n.insertBefore(r, e)),
                it([t, n], b.loading));
            },
            Te = function (t) {
              return t.checked ? 1 : 0;
            },
            Oe = function (t) {
              return t.checked ? t.value : null;
            },
            Le = function (t) {
              return t.files && t.files.length
                ? null !== t.getAttribute("multiple")
                  ? t.files
                  : t.files[0]
                : null;
            },
            Pe = function (t, e) {
              var n = R();
              if (n) {
                var r = function (t) {
                  "select" === e.input
                    ? (function (t, e, n) {
                        var r = st(t, b.select);
                        if (r) {
                          var o = function (t, e, r) {
                            var o = document.createElement("option");
                            (o.value = r),
                              Q(o, e),
                              (o.selected = je(r, n.inputValue)),
                              t.appendChild(o);
                          };
                          e.forEach(function (t) {
                            var e = t[0],
                              n = t[1];
                            if (Array.isArray(n)) {
                              var i = document.createElement("optgroup");
                              (i.label = e),
                                (i.disabled = !1),
                                r.appendChild(i),
                                n.forEach(function (t) {
                                  return o(i, t[1], t[0]);
                                });
                            } else o(r, n, e);
                          }),
                            r.focus();
                        }
                      })(n, Be(t), e)
                    : "radio" === e.input &&
                      (function (t, e, n) {
                        var r = st(t, b.radio);
                        if (r) {
                          e.forEach(function (t) {
                            var e = t[0],
                              o = t[1],
                              i = document.createElement("input"),
                              a = document.createElement("label");
                            (i.type = "radio"),
                              (i.name = b.radio),
                              (i.value = e),
                              je(e, n.inputValue) && (i.checked = !0);
                            var s = document.createElement("span");
                            Q(s, o),
                              (s.className = b.label),
                              a.appendChild(i),
                              a.appendChild(s),
                              r.appendChild(a);
                          });
                          var o = r.querySelectorAll("input");
                          o.length && o[0].focus();
                        }
                      })(n, Be(t), e);
                };
                P(e.inputOptions) || B(e.inputOptions)
                  ? (Ce(z()),
                    A(e.inputOptions).then(function (e) {
                      t.hideLoading(), r(e);
                    }))
                  : "object" === i(e.inputOptions)
                  ? r(e.inputOptions)
                  : S(
                      "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(
                        i(e.inputOptions)
                      )
                    );
              }
            },
            Ae = function (t, e) {
              var n = t.getInput();
              n &&
                (ut(n),
                A(e.inputValue)
                  .then(function (r) {
                    (n.value =
                      "number" === e.input
                        ? "".concat(parseFloat(r) || 0)
                        : "".concat(r)),
                      lt(n),
                      n.focus(),
                      t.hideLoading();
                  })
                  .catch(function (e) {
                    S("Error in inputValue promise: ".concat(e)),
                      (n.value = ""),
                      lt(n),
                      n.focus(),
                      t.hideLoading();
                  }));
            };
          var Be = function t(e) {
              var n = [];
              return (
                e instanceof Map
                  ? e.forEach(function (e, r) {
                      var o = e;
                      "object" === i(o) && (o = t(o)), n.push([r, o]);
                    })
                  : Object.keys(e).forEach(function (r) {
                      var o = e[r];
                      "object" === i(o) && (o = t(o)), n.push([r, o]);
                    }),
                n
              );
            },
            je = function (t, e) {
              return !!e && e.toString() === t.toString();
            },
            _e = void 0,
            Ne = function (t, e) {
              var n = Pt.innerParams.get(t);
              if (n.input) {
                var r = t.getInput(),
                  o = (function (t, e) {
                    var n = t.getInput();
                    if (!n) return null;
                    switch (e.input) {
                      case "checkbox":
                        return Te(n);
                      case "radio":
                        return Oe(n);
                      case "file":
                        return Le(n);
                      default:
                        return e.inputAutoTrim ? n.value.trim() : n.value;
                    }
                  })(t, n);
                n.inputValidator
                  ? Re(t, o, e)
                  : r && !r.checkValidity()
                  ? (t.enableButtons(),
                    t.showValidationMessage(
                      n.validationMessage || r.validationMessage
                    ))
                  : "deny" === e
                  ? De(t, o)
                  : qe(t, o);
              } else
                S(
                  'The "input" parameter is needed to be set when using returnInputValueOn'.concat(
                    k(e)
                  )
                );
            },
            Re = function (t, e, n) {
              var r = Pt.innerParams.get(t);
              t.disableInput(),
                Promise.resolve()
                  .then(function () {
                    return A(r.inputValidator(e, r.validationMessage));
                  })
                  .then(function (r) {
                    t.enableButtons(),
                      t.enableInput(),
                      r
                        ? t.showValidationMessage(r)
                        : "deny" === n
                        ? De(t, e)
                        : qe(t, e);
                  });
            },
            De = function (t, e) {
              var n = Pt.innerParams.get(t || _e);
              n.showLoaderOnDeny && Ce(H()),
                n.preDeny
                  ? ((t.isAwaitingPromise = !0),
                    Promise.resolve()
                      .then(function () {
                        return A(n.preDeny(e, n.validationMessage));
                      })
                      .then(function (n) {
                        !1 === n
                          ? (t.hideLoading(), we(t))
                          : t.close({
                              isDenied: !0,
                              value: void 0 === n ? e : n,
                            });
                      })
                      .catch(function (e) {
                        return Fe(t || _e, e);
                      }))
                  : t.close({ isDenied: !0, value: e });
            },
            Ie = function (t, e) {
              t.close({ isConfirmed: !0, value: e });
            },
            Fe = function (t, e) {
              t.rejectPromise(e);
            },
            qe = function (t, e) {
              var n = Pt.innerParams.get(t || _e);
              n.showLoaderOnConfirm && Ce(),
                n.preConfirm
                  ? (t.resetValidationMessage(),
                    (t.isAwaitingPromise = !0),
                    Promise.resolve()
                      .then(function () {
                        return A(n.preConfirm(e, n.validationMessage));
                      })
                      .then(function (n) {
                        pt(M()) || !1 === n
                          ? (t.hideLoading(), we(t))
                          : Ie(t, void 0 === n ? e : n);
                      })
                      .catch(function (e) {
                        return Fe(t || _e, e);
                      }))
                  : Ie(t, e);
            };
          function Ue() {
            var t = Pt.innerParams.get(this);
            if (t) {
              var e = Pt.domCache.get(this);
              ut(e.loader),
                Z() ? t.icon && lt(D()) : Me(e),
                at([e.popup, e.actions], b.loading),
                e.popup.removeAttribute("aria-busy"),
                e.popup.removeAttribute("data-loading"),
                (e.confirmButton.disabled = !1),
                (e.denyButton.disabled = !1),
                (e.cancelButton.disabled = !1);
            }
          }
          var Me = function (t) {
            var e = t.popup.getElementsByClassName(
              t.loader.getAttribute("data-button-to-replace")
            );
            e.length
              ? lt(e[0], "inline-block")
              : !pt(z()) && !pt(H()) && !pt(G()) && ut(t.actions);
          };
          function ze() {
            var t = Pt.innerParams.get(this),
              e = Pt.domCache.get(this);
            return e ? nt(e.popup, t.input) : null;
          }
          function Ge(t, e, n) {
            var r = Pt.domCache.get(t);
            e.forEach(function (t) {
              r[t].disabled = n;
            });
          }
          function He(t, e) {
            var n = R();
            if (n && t)
              if ("radio" === t.type)
                for (
                  var r = n.querySelectorAll('[name="'.concat(b.radio, '"]')),
                    o = 0;
                  o < r.length;
                  o++
                )
                  r[o].disabled = e;
              else t.disabled = e;
          }
          function Ve() {
            Ge(this, ["confirmButton", "denyButton", "cancelButton"], !1);
          }
          function We() {
            Ge(this, ["confirmButton", "denyButton", "cancelButton"], !0);
          }
          function Ye() {
            He(this.getInput(), !1);
          }
          function Ke() {
            He(this.getInput(), !0);
          }
          function $e(t) {
            var e = Pt.domCache.get(this),
              n = Pt.innerParams.get(this);
            Q(e.validationMessage, t),
              (e.validationMessage.className = b["validation-message"]),
              n.customClass &&
                n.customClass.validationMessage &&
                it(e.validationMessage, n.customClass.validationMessage),
              lt(e.validationMessage);
            var r = this.getInput();
            r &&
              (r.setAttribute("aria-invalid", "true"),
              r.setAttribute("aria-describedby", b["validation-message"]),
              rt(r),
              it(r, b.inputerror));
          }
          function Xe() {
            var t = Pt.domCache.get(this);
            t.validationMessage && ut(t.validationMessage);
            var e = this.getInput();
            e &&
              (e.removeAttribute("aria-invalid"),
              e.removeAttribute("aria-describedby"),
              at(e, b.inputerror));
          }
          var Je = {
              title: "",
              titleText: "",
              text: "",
              html: "",
              footer: "",
              icon: void 0,
              iconColor: void 0,
              iconHtml: void 0,
              template: void 0,
              toast: !1,
              animation: !0,
              showClass: {
                popup: "swal2-show",
                backdrop: "swal2-backdrop-show",
                icon: "swal2-icon-show",
              },
              hideClass: {
                popup: "swal2-hide",
                backdrop: "swal2-backdrop-hide",
                icon: "swal2-icon-hide",
              },
              customClass: {},
              target: "body",
              color: void 0,
              backdrop: !0,
              heightAuto: !0,
              allowOutsideClick: !0,
              allowEscapeKey: !0,
              allowEnterKey: !0,
              stopKeydownPropagation: !0,
              keydownListenerCapture: !1,
              showConfirmButton: !0,
              showDenyButton: !1,
              showCancelButton: !1,
              preConfirm: void 0,
              preDeny: void 0,
              confirmButtonText: "OK",
              confirmButtonAriaLabel: "",
              confirmButtonColor: void 0,
              denyButtonText: "No",
              denyButtonAriaLabel: "",
              denyButtonColor: void 0,
              cancelButtonText: "Cancel",
              cancelButtonAriaLabel: "",
              cancelButtonColor: void 0,
              buttonsStyling: !0,
              reverseButtons: !1,
              focusConfirm: !0,
              focusDeny: !1,
              focusCancel: !1,
              returnFocus: !0,
              showCloseButton: !1,
              closeButtonHtml: "&times;",
              closeButtonAriaLabel: "Close this dialog",
              loaderHtml: "",
              showLoaderOnConfirm: !1,
              showLoaderOnDeny: !1,
              imageUrl: void 0,
              imageWidth: void 0,
              imageHeight: void 0,
              imageAlt: "",
              timer: void 0,
              timerProgressBar: !1,
              width: void 0,
              padding: void 0,
              background: void 0,
              input: void 0,
              inputPlaceholder: "",
              inputLabel: "",
              inputValue: "",
              inputOptions: {},
              inputAutoFocus: !0,
              inputAutoTrim: !0,
              inputAttributes: {},
              inputValidator: void 0,
              returnInputValueOnDeny: !1,
              validationMessage: void 0,
              grow: !1,
              position: "center",
              progressSteps: [],
              currentProgressStep: void 0,
              progressStepsDistance: void 0,
              willOpen: void 0,
              didOpen: void 0,
              didRender: void 0,
              willClose: void 0,
              didClose: void 0,
              didDestroy: void 0,
              scrollbarPadding: !0,
            },
            Ze = [
              "allowEscapeKey",
              "allowOutsideClick",
              "background",
              "buttonsStyling",
              "cancelButtonAriaLabel",
              "cancelButtonColor",
              "cancelButtonText",
              "closeButtonAriaLabel",
              "closeButtonHtml",
              "color",
              "confirmButtonAriaLabel",
              "confirmButtonColor",
              "confirmButtonText",
              "currentProgressStep",
              "customClass",
              "denyButtonAriaLabel",
              "denyButtonColor",
              "denyButtonText",
              "didClose",
              "didDestroy",
              "footer",
              "hideClass",
              "html",
              "icon",
              "iconColor",
              "iconHtml",
              "imageAlt",
              "imageHeight",
              "imageUrl",
              "imageWidth",
              "preConfirm",
              "preDeny",
              "progressSteps",
              "returnFocus",
              "reverseButtons",
              "showCancelButton",
              "showCloseButton",
              "showConfirmButton",
              "showDenyButton",
              "text",
              "title",
              "titleText",
              "willClose",
            ],
            Qe = {},
            tn = [
              "allowOutsideClick",
              "allowEnterKey",
              "backdrop",
              "focusConfirm",
              "focusDeny",
              "focusCancel",
              "returnFocus",
              "heightAuto",
              "keydownListenerCapture",
            ],
            en = function (t) {
              return Object.prototype.hasOwnProperty.call(Je, t);
            },
            nn = function (t) {
              return -1 !== Ze.indexOf(t);
            },
            rn = function (t) {
              return Qe[t];
            },
            on = function (t) {
              en(t) || C('Unknown parameter "'.concat(t, '"'));
            },
            an = function (t) {
              tn.includes(t) &&
                C('The parameter "'.concat(t, '" is incompatible with toasts'));
            },
            sn = function (t) {
              var e = rn(t);
              e && O(t, e);
            };
          function cn(t) {
            var e = R(),
              n = Pt.innerParams.get(this);
            if (e && !tt(e, n.hideClass.popup)) {
              var r = ln(t),
                o = Object.assign({}, n, r);
              Kt(this, o),
                Pt.innerParams.set(this, o),
                Object.defineProperties(this, {
                  params: {
                    value: Object.assign({}, this.params, t),
                    writable: !1,
                    enumerable: !0,
                  },
                });
            } else
              C(
                "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
              );
          }
          var ln = function (t) {
            var e = {};
            return (
              Object.keys(t).forEach(function (n) {
                nn(n)
                  ? (e[n] = t[n])
                  : C("Invalid parameter to update: ".concat(n));
              }),
              e
            );
          };
          function un() {
            var t = Pt.domCache.get(this),
              e = Pt.innerParams.get(this);
            e
              ? (t.popup &&
                  y.swalCloseEventFinishedCallback &&
                  (y.swalCloseEventFinishedCallback(),
                  delete y.swalCloseEventFinishedCallback),
                "function" == typeof e.didDestroy && e.didDestroy(),
                hn(this))
              : fn(this);
          }
          var hn = function (t) {
              fn(t),
                delete t.params,
                delete y.keydownHandler,
                delete y.keydownTarget,
                delete y.currentInstance;
            },
            fn = function (t) {
              t.isAwaitingPromise
                ? (dn(Pt, t), (t.isAwaitingPromise = !0))
                : (dn(ae, t),
                  dn(Pt, t),
                  delete t.isAwaitingPromise,
                  delete t.disableButtons,
                  delete t.enableButtons,
                  delete t.getInput,
                  delete t.disableInput,
                  delete t.enableInput,
                  delete t.hideLoading,
                  delete t.disableLoading,
                  delete t.showValidationMessage,
                  delete t.resetValidationMessage,
                  delete t.close,
                  delete t.closePopup,
                  delete t.closeModal,
                  delete t.closeToast,
                  delete t.rejectPromise,
                  delete t.update,
                  delete t._destroy);
            },
            dn = function (t, e) {
              for (var n in t) t[n].delete(e);
            },
            pn = Object.freeze({
              __proto__: null,
              _destroy: un,
              close: ve,
              closeModal: ve,
              closePopup: ve,
              closeToast: ve,
              disableButtons: We,
              disableInput: Ke,
              disableLoading: Ue,
              enableButtons: Ve,
              enableInput: Ye,
              getInput: ze,
              handleAwaitingPromise: we,
              hideLoading: Ue,
              rejectPromise: ge,
              resetValidationMessage: Xe,
              showValidationMessage: $e,
              update: cn,
            }),
            mn = function (t, e, n) {
              e.popup.onclick = function () {
                (t && (vn(t) || t.timer || t.input)) || n(Xt.close);
              };
            },
            vn = function (t) {
              return !!(
                t.showConfirmButton ||
                t.showDenyButton ||
                t.showCancelButton ||
                t.showCloseButton
              );
            },
            yn = !1,
            gn = function (t) {
              t.popup.onmousedown = function () {
                t.container.onmouseup = function (e) {
                  (t.container.onmouseup = function () {}),
                    e.target === t.container && (yn = !0);
                };
              };
            },
            wn = function (t) {
              t.container.onmousedown = function (e) {
                e.target === t.container && e.preventDefault(),
                  (t.popup.onmouseup = function (e) {
                    (t.popup.onmouseup = function () {}),
                      (e.target === t.popup ||
                        (e.target instanceof HTMLElement &&
                          t.popup.contains(e.target))) &&
                        (yn = !0);
                  });
              };
            },
            bn = function (t, e, n) {
              e.container.onclick = function (r) {
                yn
                  ? (yn = !1)
                  : r.target === e.container &&
                    L(t.allowOutsideClick) &&
                    n(Xt.backdrop);
              };
            },
            En = function (t) {
              return (
                t instanceof Element ||
                (function (t) {
                  return "object" === i(t) && t.jquery;
                })(t)
              );
            };
          var xn = function () {
              if (y.timeout)
                return (
                  (function () {
                    var t = K();
                    if (t) {
                      var e = parseInt(window.getComputedStyle(t).width);
                      t.style.removeProperty("transition"),
                        (t.style.width = "100%");
                      var n =
                        (e / parseInt(window.getComputedStyle(t).width)) * 100;
                      t.style.width = "".concat(n, "%");
                    }
                  })(),
                  y.timeout.stop()
                );
            },
            kn = function () {
              if (y.timeout) {
                var t = y.timeout.start();
                return yt(t), t;
              }
            },
            Cn = !1,
            Sn = {};
          var Tn,
            On = function (t) {
              for (var e = t.target; e && e !== document; e = e.parentNode)
                for (var n in Sn) {
                  var r = e.getAttribute(n);
                  if (r) return void Sn[n].fire({ template: r });
                }
            },
            Ln = Object.freeze({
              __proto__: null,
              argsToParams: function (t) {
                var e = {};
                return (
                  "object" !== i(t[0]) || En(t[0])
                    ? ["title", "html", "icon"].forEach(function (n, r) {
                        var o = t[r];
                        "string" == typeof o || En(o)
                          ? (e[n] = o)
                          : void 0 !== o &&
                            S(
                              "Unexpected type of "
                                .concat(
                                  n,
                                  '! Expected "string" or "Element", got '
                                )
                                .concat(i(o))
                            );
                      })
                    : Object.assign(e, t[0]),
                  e
                );
              },
              bindClickHandler: function () {
                (Sn[
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "data-swal-template"
                ] = this),
                  Cn ||
                    (document.body.addEventListener("click", On), (Cn = !0));
              },
              clickCancel: function () {
                var t;
                return null === (t = G()) || void 0 === t ? void 0 : t.click();
              },
              clickConfirm: $t,
              clickDeny: function () {
                var t;
                return null === (t = H()) || void 0 === t ? void 0 : t.click();
              },
              enableLoading: Ce,
              fire: function () {
                for (
                  var t = arguments.length, e = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  e[n] = arguments[n];
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var o = [null];
                  o.push.apply(o, e);
                  var i = new (t.bind.apply(t, o))();
                  return n && u(i, n.prototype), i;
                })(this, e);
              },
              getActions: W,
              getCancelButton: G,
              getCloseButton: $,
              getConfirmButton: z,
              getContainer: j,
              getDenyButton: H,
              getFocusableElements: X,
              getFooter: Y,
              getHtmlContainer: F,
              getIcon: D,
              getIconContent: function () {
                return N(b["icon-content"]);
              },
              getImage: q,
              getInputLabel: function () {
                return N(b["input-label"]);
              },
              getLoader: V,
              getPopup: R,
              getProgressSteps: U,
              getTimerLeft: function () {
                return y.timeout && y.timeout.getTimerLeft();
              },
              getTimerProgressBar: K,
              getTitle: I,
              getValidationMessage: M,
              increaseTimer: function (t) {
                if (y.timeout) {
                  var e = y.timeout.increase(t);
                  return yt(e, !0), e;
                }
              },
              isDeprecatedParameter: rn,
              isLoading: function () {
                var t = R();
                return !!t && t.hasAttribute("data-loading");
              },
              isTimerRunning: function () {
                return !(!y.timeout || !y.timeout.isRunning());
              },
              isUpdatableParameter: nn,
              isValidParameter: en,
              isVisible: function () {
                return pt(R());
              },
              mixin: function (t) {
                var n = (function (n) {
                  function r() {
                    return a(this, r), e(this, r, arguments);
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function"
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        Object.defineProperty(t, "prototype", { writable: !1 }),
                        e && u(t, e);
                    })(r, n),
                    c(r, [
                      {
                        key: "_main",
                        value: function (e, n) {
                          return h(l(r.prototype), "_main", this).call(
                            this,
                            e,
                            Object.assign({}, t, n)
                          );
                        },
                      },
                    ])
                  );
                })(this);
                return n;
              },
              resumeTimer: kn,
              showLoading: Ce,
              stopTimer: xn,
              toggleTimer: function () {
                var t = y.timeout;
                return t && (t.running ? xn() : kn());
              },
            }),
            Pn = (function () {
              return c(
                function t(e, n) {
                  a(this, t),
                    (this.callback = e),
                    (this.remaining = n),
                    (this.running = !1),
                    this.start();
                },
                [
                  {
                    key: "start",
                    value: function () {
                      return (
                        this.running ||
                          ((this.running = !0),
                          (this.started = new Date()),
                          (this.id = setTimeout(
                            this.callback,
                            this.remaining
                          ))),
                        this.remaining
                      );
                    },
                  },
                  {
                    key: "stop",
                    value: function () {
                      return (
                        this.started &&
                          this.running &&
                          ((this.running = !1),
                          clearTimeout(this.id),
                          (this.remaining -=
                            new Date().getTime() - this.started.getTime())),
                        this.remaining
                      );
                    },
                  },
                  {
                    key: "increase",
                    value: function (t) {
                      var e = this.running;
                      return (
                        e && this.stop(),
                        (this.remaining += t),
                        e && this.start(),
                        this.remaining
                      );
                    },
                  },
                  {
                    key: "getTimerLeft",
                    value: function () {
                      return (
                        this.running && (this.stop(), this.start()),
                        this.remaining
                      );
                    },
                  },
                  {
                    key: "isRunning",
                    value: function () {
                      return this.running;
                    },
                  },
                ]
              );
            })(),
            An = ["swal-title", "swal-html", "swal-footer"],
            Bn = function (t) {
              var e = {};
              return (
                Array.from(t.querySelectorAll("swal-param")).forEach(function (
                  t
                ) {
                  qn(t, ["name", "value"]);
                  var n = t.getAttribute("name"),
                    r = t.getAttribute("value");
                  "boolean" == typeof Je[n]
                    ? (e[n] = "false" !== r)
                    : "object" === i(Je[n])
                    ? (e[n] = JSON.parse(r))
                    : (e[n] = r);
                }),
                e
              );
            },
            jn = function (t) {
              var e = {};
              return (
                Array.from(t.querySelectorAll("swal-function-param")).forEach(
                  function (t) {
                    var n = t.getAttribute("name"),
                      r = t.getAttribute("value");
                    e[n] = new Function("return ".concat(r))();
                  }
                ),
                e
              );
            },
            _n = function (t) {
              var e = {};
              return (
                Array.from(t.querySelectorAll("swal-button")).forEach(function (
                  t
                ) {
                  qn(t, ["type", "color", "aria-label"]);
                  var n = t.getAttribute("type");
                  (e["".concat(n, "ButtonText")] = t.innerHTML),
                    (e["show".concat(k(n), "Button")] = !0),
                    t.hasAttribute("color") &&
                      (e["".concat(n, "ButtonColor")] =
                        t.getAttribute("color")),
                    t.hasAttribute("aria-label") &&
                      (e["".concat(n, "ButtonAriaLabel")] =
                        t.getAttribute("aria-label"));
                }),
                e
              );
            },
            Nn = function (t) {
              var e = {},
                n = t.querySelector("swal-image");
              return (
                n &&
                  (qn(n, ["src", "width", "height", "alt"]),
                  n.hasAttribute("src") && (e.imageUrl = n.getAttribute("src")),
                  n.hasAttribute("width") &&
                    (e.imageWidth = n.getAttribute("width")),
                  n.hasAttribute("height") &&
                    (e.imageHeight = n.getAttribute("height")),
                  n.hasAttribute("alt") &&
                    (e.imageAlt = n.getAttribute("alt"))),
                e
              );
            },
            Rn = function (t) {
              var e = {},
                n = t.querySelector("swal-icon");
              return (
                n &&
                  (qn(n, ["type", "color"]),
                  n.hasAttribute("type") && (e.icon = n.getAttribute("type")),
                  n.hasAttribute("color") &&
                    (e.iconColor = n.getAttribute("color")),
                  (e.iconHtml = n.innerHTML)),
                e
              );
            },
            Dn = function (t) {
              var e = {},
                n = t.querySelector("swal-input");
              n &&
                (qn(n, ["type", "label", "placeholder", "value"]),
                (e.input = n.getAttribute("type") || "text"),
                n.hasAttribute("label") &&
                  (e.inputLabel = n.getAttribute("label")),
                n.hasAttribute("placeholder") &&
                  (e.inputPlaceholder = n.getAttribute("placeholder")),
                n.hasAttribute("value") &&
                  (e.inputValue = n.getAttribute("value")));
              var r = Array.from(t.querySelectorAll("swal-input-option"));
              return (
                r.length &&
                  ((e.inputOptions = {}),
                  r.forEach(function (t) {
                    qn(t, ["value"]);
                    var n = t.getAttribute("value"),
                      r = t.innerHTML;
                    e.inputOptions[n] = r;
                  })),
                e
              );
            },
            In = function (t, e) {
              var n = {};
              for (var r in e) {
                var o = e[r],
                  i = t.querySelector(o);
                i &&
                  (qn(i, []),
                  (n[o.replace(/^swal-/, "")] = i.innerHTML.trim()));
              }
              return n;
            },
            Fn = function (t) {
              var e = An.concat([
                "swal-param",
                "swal-function-param",
                "swal-button",
                "swal-image",
                "swal-icon",
                "swal-input",
                "swal-input-option",
              ]);
              Array.from(t.children).forEach(function (t) {
                var n = t.tagName.toLowerCase();
                e.includes(n) || C("Unrecognized element <".concat(n, ">"));
              });
            },
            qn = function (t, e) {
              Array.from(t.attributes).forEach(function (n) {
                -1 === e.indexOf(n.name) &&
                  C([
                    'Unrecognized attribute "'
                      .concat(n.name, '" on <')
                      .concat(t.tagName.toLowerCase(), ">."),
                    "".concat(
                      e.length
                        ? "Allowed attributes are: ".concat(e.join(", "))
                        : "To set the value, use HTML within the element."
                    ),
                  ]);
              });
            },
            Un = function (t) {
              var e = j(),
                n = R();
              "function" == typeof t.willOpen && t.willOpen(n);
              var r = window.getComputedStyle(document.body).overflowY;
              Hn(e, n, t),
                setTimeout(function () {
                  zn(e, n);
                }, 10),
                J() &&
                  (Gn(e, t.scrollbarPadding, r),
                  (function () {
                    var t = j();
                    Array.from(document.body.children).forEach(function (e) {
                      e.contains(t) ||
                        (e.hasAttribute("aria-hidden") &&
                          e.setAttribute(
                            "data-previous-aria-hidden",
                            e.getAttribute("aria-hidden") || ""
                          ),
                        e.setAttribute("aria-hidden", "true"));
                    });
                  })()),
                Z() ||
                  y.previousActiveElement ||
                  (y.previousActiveElement = document.activeElement),
                "function" == typeof t.didOpen &&
                  setTimeout(function () {
                    return t.didOpen(n);
                  }),
                at(e, b["no-transition"]);
            },
            Mn = function t(e) {
              var n = R();
              if (e.target === n && St) {
                var r = j();
                n.removeEventListener(St, t), (r.style.overflowY = "auto");
              }
            },
            zn = function (t, e) {
              St && vt(e)
                ? ((t.style.overflowY = "hidden"), e.addEventListener(St, Mn))
                : (t.style.overflowY = "auto");
            },
            Gn = function (t, e, n) {
              (function () {
                if (ce && !tt(document.body, b.iosfix)) {
                  var t = document.body.scrollTop;
                  (document.body.style.top = "".concat(-1 * t, "px")),
                    it(document.body, b.iosfix),
                    le();
                }
              })(),
                e && "hidden" !== n && pe(n),
                setTimeout(function () {
                  t.scrollTop = 0;
                });
            },
            Hn = function (t, e, n) {
              it(t, n.showClass.backdrop),
                n.animation
                  ? (e.style.setProperty("opacity", "0", "important"),
                    lt(e, "grid"),
                    setTimeout(function () {
                      it(e, n.showClass.popup),
                        e.style.removeProperty("opacity");
                    }, 10))
                  : lt(e, "grid"),
                it([document.documentElement, document.body], b.shown),
                n.heightAuto &&
                  n.backdrop &&
                  !n.toast &&
                  it(
                    [document.documentElement, document.body],
                    b["height-auto"]
                  );
            },
            Vn = {
              email: function (t, e) {
                return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(
                  t
                )
                  ? Promise.resolve()
                  : Promise.resolve(e || "Invalid email address");
              },
              url: function (t, e) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
                  t
                )
                  ? Promise.resolve()
                  : Promise.resolve(e || "Invalid URL");
              },
            };
          function Wn(t) {
            (function (t) {
              t.inputValidator ||
                ("email" === t.input && (t.inputValidator = Vn.email),
                "url" === t.input && (t.inputValidator = Vn.url));
            })(t),
              t.showLoaderOnConfirm &&
                !t.preConfirm &&
                C(
                  "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
                ),
              (function (t) {
                (!t.target ||
                  ("string" == typeof t.target &&
                    !document.querySelector(t.target)) ||
                  ("string" != typeof t.target && !t.target.appendChild)) &&
                  (C('Target parameter is not valid, defaulting to "body"'),
                  (t.target = "body"));
              })(t),
              "string" == typeof t.title &&
                (t.title = t.title.split("\n").join("<br />")),
              Et(t);
          }
          var Yn = new WeakMap(),
            Kn = (function () {
              return c(
                function e() {
                  if (
                    (a(this, e),
                    v(this, Yn, void 0),
                    "undefined" != typeof window)
                  ) {
                    Tn = this;
                    for (
                      var n = arguments.length, r = new Array(n), o = 0;
                      o < n;
                      o++
                    )
                      r[o] = arguments[o];
                    var i = Object.freeze(this.constructor.argsToParams(r));
                    (this.params = i),
                      (this.isAwaitingPromise = !1),
                      (s = Yn),
                      (c = this),
                      (l = this._main(Tn.params)),
                      s.set(t(s, c), l);
                  }
                  var s, c, l;
                },
                [
                  {
                    key: "_main",
                    value: function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      if (
                        ((function (t) {
                          for (var e in (!1 === t.backdrop &&
                            t.allowOutsideClick &&
                            C(
                              '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
                            ),
                          t))
                            on(e), t.toast && an(e), sn(e);
                        })(Object.assign({}, e, t)),
                        y.currentInstance)
                      ) {
                        var n = ae.swalPromiseResolve.get(y.currentInstance),
                          r = y.currentInstance.isAwaitingPromise;
                        y.currentInstance._destroy(),
                          r || n({ isDismissed: !0 }),
                          J() && se();
                      }
                      y.currentInstance = Tn;
                      var o = Xn(t, e);
                      Wn(o),
                        Object.freeze(o),
                        y.timeout && (y.timeout.stop(), delete y.timeout),
                        clearTimeout(y.restoreFocusTimeout);
                      var i = Jn(Tn);
                      return Kt(Tn, o), Pt.innerParams.set(Tn, o), $n(Tn, i, o);
                    },
                  },
                  {
                    key: "then",
                    value: function (t) {
                      return n(Yn, this).then(t);
                    },
                  },
                  {
                    key: "finally",
                    value: function (t) {
                      return n(Yn, this).finally(t);
                    },
                  },
                ]
              );
            })(),
            $n = function (t, e, n) {
              return new Promise(function (r, o) {
                var i = function (e) {
                  t.close({ isDismissed: !0, dismiss: e });
                };
                ae.swalPromiseResolve.set(t, r),
                  ae.swalPromiseReject.set(t, o),
                  (e.confirmButton.onclick = function () {
                    !(function (t) {
                      var e = Pt.innerParams.get(t);
                      t.disableButtons(),
                        e.input ? Ne(t, "confirm") : qe(t, !0);
                    })(t);
                  }),
                  (e.denyButton.onclick = function () {
                    !(function (t) {
                      var e = Pt.innerParams.get(t);
                      t.disableButtons(),
                        e.returnInputValueOnDeny ? Ne(t, "deny") : De(t, !1);
                    })(t);
                  }),
                  (e.cancelButton.onclick = function () {
                    !(function (t, e) {
                      t.disableButtons(), e(Xt.cancel);
                    })(t, i);
                  }),
                  (e.closeButton.onclick = function () {
                    i(Xt.close);
                  }),
                  (function (t, e, n) {
                    t.toast ? mn(t, e, n) : (gn(e), wn(e), bn(t, e, n));
                  })(n, e, i),
                  (function (t, e, n) {
                    Jt(t),
                      e.toast ||
                        ((t.keydownHandler = function (t) {
                          return ee(e, t, n);
                        }),
                        (t.keydownTarget = e.keydownListenerCapture
                          ? window
                          : R()),
                        (t.keydownListenerCapture = e.keydownListenerCapture),
                        t.keydownTarget.addEventListener(
                          "keydown",
                          t.keydownHandler,
                          { capture: t.keydownListenerCapture }
                        ),
                        (t.keydownHandlerAdded = !0));
                  })(y, n, i),
                  (function (t, e) {
                    "select" === e.input || "radio" === e.input
                      ? Pe(t, e)
                      : ["text", "email", "number", "tel", "textarea"].some(
                          function (t) {
                            return t === e.input;
                          }
                        ) &&
                        (P(e.inputValue) || B(e.inputValue)) &&
                        (Ce(z()), Ae(t, e));
                  })(t, n),
                  Un(n),
                  Zn(y, n, i),
                  Qn(e, n),
                  setTimeout(function () {
                    e.container.scrollTop = 0;
                  });
              });
            },
            Xn = function (t, e) {
              var n = (function (t) {
                  var e =
                    "string" == typeof t.template
                      ? document.querySelector(t.template)
                      : t.template;
                  if (!e) return {};
                  var n = e.content;
                  return (
                    Fn(n),
                    Object.assign(
                      Bn(n),
                      jn(n),
                      _n(n),
                      Nn(n),
                      Rn(n),
                      Dn(n),
                      In(n, An)
                    )
                  );
                })(t),
                r = Object.assign({}, Je, e, n, t);
              return (
                (r.showClass = Object.assign({}, Je.showClass, r.showClass)),
                (r.hideClass = Object.assign({}, Je.hideClass, r.hideClass)),
                !1 === r.animation &&
                  ((r.showClass = { backdrop: "swal2-noanimation" }),
                  (r.hideClass = {})),
                r
              );
            },
            Jn = function (t) {
              var e = {
                popup: R(),
                container: j(),
                actions: W(),
                confirmButton: z(),
                denyButton: H(),
                cancelButton: G(),
                loader: V(),
                closeButton: $(),
                validationMessage: M(),
                progressSteps: U(),
              };
              return Pt.domCache.set(t, e), e;
            },
            Zn = function (t, e, n) {
              var r = K();
              ut(r),
                e.timer &&
                  ((t.timeout = new Pn(function () {
                    n("timer"), delete t.timeout;
                  }, e.timer)),
                  e.timerProgressBar &&
                    (lt(r),
                    et(r, e, "timerProgressBar"),
                    setTimeout(function () {
                      t.timeout && t.timeout.running && yt(e.timer);
                    })));
            },
            Qn = function (t, e) {
              e.toast || (L(e.allowEnterKey) ? tr(t, e) || Zt(-1, 1) : er());
            },
            tr = function (t, e) {
              return e.focusDeny && pt(t.denyButton)
                ? (t.denyButton.focus(), !0)
                : e.focusCancel && pt(t.cancelButton)
                ? (t.cancelButton.focus(), !0)
                : !(
                    !e.focusConfirm ||
                    !pt(t.confirmButton) ||
                    (t.confirmButton.focus(), 0)
                  );
            },
            er = function () {
              document.activeElement instanceof HTMLElement &&
                "function" == typeof document.activeElement.blur &&
                document.activeElement.blur();
            };
          if (
            "undefined" != typeof window &&
            /^ru\b/.test(navigator.language) &&
            location.host.match(/\.(ru|su|by|xn--p1ai)$/)
          ) {
            var nr = new Date(),
              rr = localStorage.getItem("swal-initiation");
            rr
              ? (nr.getTime() - Date.parse(rr)) / 864e5 > 3 &&
                setTimeout(function () {
                  document.body.style.pointerEvents = "none";
                  var t = document.createElement("audio");
                  (t.src =
                    "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
                    (t.loop = !0),
                    document.body.appendChild(t),
                    setTimeout(function () {
                      t.play().catch(function () {});
                    }, 2500);
                }, 500)
              : localStorage.setItem("swal-initiation", "".concat(nr));
          }
          (Kn.prototype.disableButtons = We),
            (Kn.prototype.enableButtons = Ve),
            (Kn.prototype.getInput = ze),
            (Kn.prototype.disableInput = Ke),
            (Kn.prototype.enableInput = Ye),
            (Kn.prototype.hideLoading = Ue),
            (Kn.prototype.disableLoading = Ue),
            (Kn.prototype.showValidationMessage = $e),
            (Kn.prototype.resetValidationMessage = Xe),
            (Kn.prototype.close = ve),
            (Kn.prototype.closePopup = ve),
            (Kn.prototype.closeModal = ve),
            (Kn.prototype.closeToast = ve),
            (Kn.prototype.rejectPromise = ge),
            (Kn.prototype.update = cn),
            (Kn.prototype._destroy = un),
            Object.assign(Kn, Ln),
            Object.keys(pn).forEach(function (t) {
              Kn[t] = function () {
                var e;
                return Tn && Tn[t] ? (e = Tn)[t].apply(e, arguments) : null;
              };
            }),
            (Kn.DismissReason = Xt),
            (Kn.version = "11.11.0");
          var or = Kn;
          return (or.default = or), or;
        })()),
          void 0 !== this &&
            this.Sweetalert2 &&
            (this.swal =
              this.sweetAlert =
              this.Swal =
              this.SweetAlert =
                this.Sweetalert2),
          "undefined" != typeof document &&
            (function (t, e) {
              var n = t.createElement("style");
              if (
                (t.getElementsByTagName("head")[0].appendChild(n), n.styleSheet)
              )
                n.styleSheet.disabled || (n.styleSheet.cssText = e);
              else
                try {
                  n.innerHTML = e;
                } catch (t) {
                  n.innerText = e;
                }
            })(
              document,
              '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
            );
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { exports: {} });
    return t[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.d = (t, e) => {
    for (var r in e)
      n.o(e, r) &&
        !n.o(t, r) &&
        Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
  }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      var t = {};
      n.r(t),
        n.d(t, {
          hasBrowserEnv: () => ht,
          hasStandardBrowserEnv: () => ft,
          hasStandardBrowserWebWorkerEnv: () => pt,
          origin: () => mt,
        });
      var e = {};
      n.r(e),
        n.d(e, {
          Decoder: () => Yo,
          Encoder: () => Vo,
          PacketType: () => Ho,
          protocol: () => Go,
        });
      var r = n(465);
      function o(t) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          o(t)
        );
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, s(r.key), r);
        }
      }
      function a(t, e, n) {
        return (
          (e = s(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function s(t) {
        var e = (function (t, e) {
          if ("object" != o(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != o(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == o(e) ? e : e + "";
      }
      var c = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              a(this, "text", void 0),
              a(this, "containerElement", void 0),
              a(this, "canvasTextElement", void 0),
              a(this, "ctxElement", void 0),
              (this.canvasElement = document.createElement("canvas"));
          }),
          (e = [
            {
              key: "setDomNode",
              value: function (t) {
                (this.containerElement = document.createElement("div")),
                  (this.canvasElement = document.createElement("canvas")),
                  (this.canvasElement.width = 800),
                  (this.canvasElement.height = 50),
                  (this.canvasElement.className = "canvas-basic-text"),
                  (this.ctxElement = this.canvasElement.getContext("2d"));
                var e = window.localStorage.getItem("font");
                console.log(e),
                  (this.ctxElement.font = "30px ".concat(e)),
                  (this.ctxElement.fillStyle = "#fff"),
                  this.ctxElement.fillRect(
                    0,
                    0,
                    this.canvasElement.width,
                    this.canvasElement.height
                  ),
                  this.drawGrid(),
                  (this.ctxElement.fillStyle = "black");
                for (
                  var n = null == t ? void 0 : t.toString(), r = 0;
                  r < n.length;
                  r++
                )
                  this.ctxElement.fillText(n[r], 50 * r + 13, 35);
                this.containerElement.append(this.canvasElement);
              },
            },
            {
              key: "drawGrid",
              value: function () {
                this.ctxElement.beginPath();
                for (var t = 0; t <= this.canvasElement.width; t += 50)
                  this.ctxElement.moveTo(t, 0),
                    this.ctxElement.lineTo(t, this.canvasElement.height);
                for (var e = 0; e <= this.canvasElement.height; e += 50)
                  this.ctxElement.moveTo(0, e),
                    this.ctxElement.lineTo(this.canvasElement.width, e);
                (this.ctxElement.strokeStyle = "black"),
                  this.ctxElement.stroke();
              },
            },
            {
              key: "render",
              value: function () {
                this.setDomNode();
              },
            },
          ]),
          e && i(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function l(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      }
      const { toString: u } = Object.prototype,
        { getPrototypeOf: h } = Object,
        f = ((t) => (e) => {
          const n = u.call(e);
          return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
        })(Object.create(null)),
        d = (t) => ((t = t.toLowerCase()), (e) => f(e) === t),
        p = (t) => (e) => typeof e === t,
        { isArray: m } = Array,
        v = p("undefined"),
        y = d("ArrayBuffer"),
        g = p("string"),
        w = p("function"),
        b = p("number"),
        E = (t) => null !== t && "object" == typeof t,
        x = (t) => {
          if ("object" !== f(t)) return !1;
          const e = h(t);
          return !(
            (null !== e &&
              e !== Object.prototype &&
              null !== Object.getPrototypeOf(e)) ||
            Symbol.toStringTag in t ||
            Symbol.iterator in t
          );
        },
        k = d("Date"),
        C = d("File"),
        S = d("Blob"),
        T = d("FileList"),
        O = d("URLSearchParams"),
        [L, P, A, B] = ["ReadableStream", "Request", "Response", "Headers"].map(
          d
        );
      function j(t, e, { allOwnKeys: n = !1 } = {}) {
        if (null == t) return;
        let r, o;
        if (("object" != typeof t && (t = [t]), m(t)))
          for (r = 0, o = t.length; r < o; r++) e.call(null, t[r], r, t);
        else {
          const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
            i = o.length;
          let a;
          for (r = 0; r < i; r++) (a = o[r]), e.call(null, t[a], a, t);
        }
      }
      function _(t, e) {
        e = e.toLowerCase();
        const n = Object.keys(t);
        let r,
          o = n.length;
        for (; o-- > 0; ) if (((r = n[o]), e === r.toLowerCase())) return r;
        return null;
      }
      const N =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : global,
        R = (t) => !v(t) && t !== N,
        D =
          ((I = "undefined" != typeof Uint8Array && h(Uint8Array)),
          (t) => I && t instanceof I);
      var I;
      const F = d("HTMLFormElement"),
        q = (
          ({ hasOwnProperty: t }) =>
          (e, n) =>
            t.call(e, n)
        )(Object.prototype),
        U = d("RegExp"),
        M = (t, e) => {
          const n = Object.getOwnPropertyDescriptors(t),
            r = {};
          j(n, (n, o) => {
            let i;
            !1 !== (i = e(n, o, t)) && (r[o] = i || n);
          }),
            Object.defineProperties(t, r);
        },
        z = "abcdefghijklmnopqrstuvwxyz",
        G = "0123456789",
        H = { DIGIT: G, ALPHA: z, ALPHA_DIGIT: z + z.toUpperCase() + G },
        V = d("AsyncFunction"),
        W = {
          isArray: m,
          isArrayBuffer: y,
          isBuffer: function (t) {
            return (
              null !== t &&
              !v(t) &&
              null !== t.constructor &&
              !v(t.constructor) &&
              w(t.constructor.isBuffer) &&
              t.constructor.isBuffer(t)
            );
          },
          isFormData: (t) => {
            let e;
            return (
              t &&
              (("function" == typeof FormData && t instanceof FormData) ||
                (w(t.append) &&
                  ("formdata" === (e = f(t)) ||
                    ("object" === e &&
                      w(t.toString) &&
                      "[object FormData]" === t.toString()))))
            );
          },
          isArrayBufferView: function (t) {
            let e;
            return (
              (e =
                "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(t)
                  : t && t.buffer && y(t.buffer)),
              e
            );
          },
          isString: g,
          isNumber: b,
          isBoolean: (t) => !0 === t || !1 === t,
          isObject: E,
          isPlainObject: x,
          isReadableStream: L,
          isRequest: P,
          isResponse: A,
          isHeaders: B,
          isUndefined: v,
          isDate: k,
          isFile: C,
          isBlob: S,
          isRegExp: U,
          isFunction: w,
          isStream: (t) => E(t) && w(t.pipe),
          isURLSearchParams: O,
          isTypedArray: D,
          isFileList: T,
          forEach: j,
          merge: function t() {
            const { caseless: e } = (R(this) && this) || {},
              n = {},
              r = (r, o) => {
                const i = (e && _(n, o)) || o;
                x(n[i]) && x(r)
                  ? (n[i] = t(n[i], r))
                  : x(r)
                  ? (n[i] = t({}, r))
                  : m(r)
                  ? (n[i] = r.slice())
                  : (n[i] = r);
              };
            for (let t = 0, e = arguments.length; t < e; t++)
              arguments[t] && j(arguments[t], r);
            return n;
          },
          extend: (t, e, n, { allOwnKeys: r } = {}) => (
            j(
              e,
              (e, r) => {
                n && w(e) ? (t[r] = l(e, n)) : (t[r] = e);
              },
              { allOwnKeys: r }
            ),
            t
          ),
          trim: (t) =>
            t.trim
              ? t.trim()
              : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
          inherits: (t, e, n, r) => {
            (t.prototype = Object.create(e.prototype, r)),
              (t.prototype.constructor = t),
              Object.defineProperty(t, "super", { value: e.prototype }),
              n && Object.assign(t.prototype, n);
          },
          toFlatObject: (t, e, n, r) => {
            let o, i, a;
            const s = {};
            if (((e = e || {}), null == t)) return e;
            do {
              for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
                (a = o[i]),
                  (r && !r(a, t, e)) || s[a] || ((e[a] = t[a]), (s[a] = !0));
              t = !1 !== n && h(t);
            } while (t && (!n || n(t, e)) && t !== Object.prototype);
            return e;
          },
          kindOf: f,
          kindOfTest: d,
          endsWith: (t, e, n) => {
            (t = String(t)),
              (void 0 === n || n > t.length) && (n = t.length),
              (n -= e.length);
            const r = t.indexOf(e, n);
            return -1 !== r && r === n;
          },
          toArray: (t) => {
            if (!t) return null;
            if (m(t)) return t;
            let e = t.length;
            if (!b(e)) return null;
            const n = new Array(e);
            for (; e-- > 0; ) n[e] = t[e];
            return n;
          },
          forEachEntry: (t, e) => {
            const n = (t && t[Symbol.iterator]).call(t);
            let r;
            for (; (r = n.next()) && !r.done; ) {
              const n = r.value;
              e.call(t, n[0], n[1]);
            }
          },
          matchAll: (t, e) => {
            let n;
            const r = [];
            for (; null !== (n = t.exec(e)); ) r.push(n);
            return r;
          },
          isHTMLForm: F,
          hasOwnProperty: q,
          hasOwnProp: q,
          reduceDescriptors: M,
          freezeMethods: (t) => {
            M(t, (e, n) => {
              if (w(t) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              const r = t[n];
              w(r) &&
                ((e.enumerable = !1),
                "writable" in e
                  ? (e.writable = !1)
                  : e.set ||
                    (e.set = () => {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'"
                      );
                    }));
            });
          },
          toObjectSet: (t, e) => {
            const n = {},
              r = (t) => {
                t.forEach((t) => {
                  n[t] = !0;
                });
              };
            return m(t) ? r(t) : r(String(t).split(e)), n;
          },
          toCamelCase: (t) =>
            t
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, n) {
                return e.toUpperCase() + n;
              }),
          noop: () => {},
          toFiniteNumber: (t, e) =>
            null != t && Number.isFinite((t = +t)) ? t : e,
          findKey: _,
          global: N,
          isContextDefined: R,
          ALPHABET: H,
          generateString: (t = 16, e = H.ALPHA_DIGIT) => {
            let n = "";
            const { length: r } = e;
            for (; t--; ) n += e[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (t) {
            return !!(
              t &&
              w(t.append) &&
              "FormData" === t[Symbol.toStringTag] &&
              t[Symbol.iterator]
            );
          },
          toJSONObject: (t) => {
            const e = new Array(10),
              n = (t, r) => {
                if (E(t)) {
                  if (e.indexOf(t) >= 0) return;
                  if (!("toJSON" in t)) {
                    e[r] = t;
                    const o = m(t) ? [] : {};
                    return (
                      j(t, (t, e) => {
                        const i = n(t, r + 1);
                        !v(i) && (o[e] = i);
                      }),
                      (e[r] = void 0),
                      o
                    );
                  }
                }
                return t;
              };
            return n(t, 0);
          },
          isAsyncFn: V,
          isThenable: (t) => t && (E(t) || w(t)) && w(t.then) && w(t.catch),
        };
      function Y(t, e, n, r, o) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = t),
          (this.name = "AxiosError"),
          e && (this.code = e),
          n && (this.config = n),
          r && (this.request = r),
          o && (this.response = o);
      }
      W.inherits(Y, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: W.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      const K = Y.prototype,
        $ = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((t) => {
        $[t] = { value: t };
      }),
        Object.defineProperties(Y, $),
        Object.defineProperty(K, "isAxiosError", { value: !0 }),
        (Y.from = (t, e, n, r, o, i) => {
          const a = Object.create(K);
          return (
            W.toFlatObject(
              t,
              a,
              function (t) {
                return t !== Error.prototype;
              },
              (t) => "isAxiosError" !== t
            ),
            Y.call(a, t.message, e, n, r, o),
            (a.cause = t),
            (a.name = t.name),
            i && Object.assign(a, i),
            a
          );
        });
      const X = Y;
      function J(t) {
        return W.isPlainObject(t) || W.isArray(t);
      }
      function Z(t) {
        return W.endsWith(t, "[]") ? t.slice(0, -2) : t;
      }
      function Q(t, e, n) {
        return t
          ? t
              .concat(e)
              .map(function (t, e) {
                return (t = Z(t)), !n && e ? "[" + t + "]" : t;
              })
              .join(n ? "." : "")
          : e;
      }
      const tt = W.toFlatObject(W, {}, null, function (t) {
          return /^is[A-Z]/.test(t);
        }),
        et = function (t, e, n) {
          if (!W.isObject(t)) throw new TypeError("target must be an object");
          e = e || new FormData();
          const r = (n = W.toFlatObject(
              n,
              { metaTokens: !0, dots: !1, indexes: !1 },
              !1,
              function (t, e) {
                return !W.isUndefined(e[t]);
              }
            )).metaTokens,
            o = n.visitor || l,
            i = n.dots,
            a = n.indexes,
            s =
              (n.Blob || ("undefined" != typeof Blob && Blob)) &&
              W.isSpecCompliantForm(e);
          if (!W.isFunction(o))
            throw new TypeError("visitor must be a function");
          function c(t) {
            if (null === t) return "";
            if (W.isDate(t)) return t.toISOString();
            if (!s && W.isBlob(t))
              throw new X("Blob is not supported. Use a Buffer instead.");
            return W.isArrayBuffer(t) || W.isTypedArray(t)
              ? s && "function" == typeof Blob
                ? new Blob([t])
                : Buffer.from(t)
              : t;
          }
          function l(t, n, o) {
            let s = t;
            if (t && !o && "object" == typeof t)
              if (W.endsWith(n, "{}"))
                (n = r ? n : n.slice(0, -2)), (t = JSON.stringify(t));
              else if (
                (W.isArray(t) &&
                  (function (t) {
                    return W.isArray(t) && !t.some(J);
                  })(t)) ||
                ((W.isFileList(t) || W.endsWith(n, "[]")) && (s = W.toArray(t)))
              )
                return (
                  (n = Z(n)),
                  s.forEach(function (t, r) {
                    !W.isUndefined(t) &&
                      null !== t &&
                      e.append(
                        !0 === a ? Q([n], r, i) : null === a ? n : n + "[]",
                        c(t)
                      );
                  }),
                  !1
                );
            return !!J(t) || (e.append(Q(o, n, i), c(t)), !1);
          }
          const u = [],
            h = Object.assign(tt, {
              defaultVisitor: l,
              convertValue: c,
              isVisitable: J,
            });
          if (!W.isObject(t)) throw new TypeError("data must be an object");
          return (
            (function t(n, r) {
              if (!W.isUndefined(n)) {
                if (-1 !== u.indexOf(n))
                  throw Error("Circular reference detected in " + r.join("."));
                u.push(n),
                  W.forEach(n, function (n, i) {
                    !0 ===
                      (!(W.isUndefined(n) || null === n) &&
                        o.call(e, n, W.isString(i) ? i.trim() : i, r, h)) &&
                      t(n, r ? r.concat(i) : [i]);
                  }),
                  u.pop();
              }
            })(t),
            e
          );
        };
      function nt(t) {
        const e = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
          return e[t];
        });
      }
      function rt(t, e) {
        (this._pairs = []), t && et(t, this, e);
      }
      const ot = rt.prototype;
      (ot.append = function (t, e) {
        this._pairs.push([t, e]);
      }),
        (ot.toString = function (t) {
          const e = t
            ? function (e) {
                return t.call(this, e, nt);
              }
            : nt;
          return this._pairs
            .map(function (t) {
              return e(t[0]) + "=" + e(t[1]);
            }, "")
            .join("&");
        });
      const it = rt;
      function at(t) {
        return encodeURIComponent(t)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function st(t, e, n) {
        if (!e) return t;
        const r = (n && n.encode) || at,
          o = n && n.serialize;
        let i;
        if (
          ((i = o
            ? o(e, n)
            : W.isURLSearchParams(e)
            ? e.toString()
            : new it(e, n).toString(r)),
          i)
        ) {
          const e = t.indexOf("#");
          -1 !== e && (t = t.slice(0, e)),
            (t += (-1 === t.indexOf("?") ? "?" : "&") + i);
        }
        return t;
      }
      const ct = class {
          constructor() {
            this.handlers = [];
          }
          use(t, e, n) {
            return (
              this.handlers.push({
                fulfilled: t,
                rejected: e,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(t) {
            this.handlers[t] && (this.handlers[t] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(t) {
            W.forEach(this.handlers, function (e) {
              null !== e && t(e);
            });
          }
        },
        lt = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        ut = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" != typeof URLSearchParams ? URLSearchParams : it,
            FormData: "undefined" != typeof FormData ? FormData : null,
            Blob: "undefined" != typeof Blob ? Blob : null,
          },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        ht = "undefined" != typeof window && "undefined" != typeof document,
        ft =
          ((dt = "undefined" != typeof navigator && navigator.product),
          ht && ["ReactNative", "NativeScript", "NS"].indexOf(dt) < 0);
      var dt;
      const pt =
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" == typeof self.importScripts,
        mt = (ht && window.location.href) || "http://localhost",
        vt = { ...t, ...ut },
        yt = function (t) {
          function e(t, n, r, o) {
            let i = t[o++];
            if ("__proto__" === i) return !0;
            const a = Number.isFinite(+i),
              s = o >= t.length;
            return (
              (i = !i && W.isArray(r) ? r.length : i),
              s
                ? (W.hasOwnProp(r, i) ? (r[i] = [r[i], n]) : (r[i] = n), !a)
                : ((r[i] && W.isObject(r[i])) || (r[i] = []),
                  e(t, n, r[i], o) &&
                    W.isArray(r[i]) &&
                    (r[i] = (function (t) {
                      const e = {},
                        n = Object.keys(t);
                      let r;
                      const o = n.length;
                      let i;
                      for (r = 0; r < o; r++) (i = n[r]), (e[i] = t[i]);
                      return e;
                    })(r[i])),
                  !a)
            );
          }
          if (W.isFormData(t) && W.isFunction(t.entries)) {
            const n = {};
            return (
              W.forEachEntry(t, (t, r) => {
                e(
                  (function (t) {
                    return W.matchAll(/\w+|\[(\w*)]/g, t).map((t) =>
                      "[]" === t[0] ? "" : t[1] || t[0]
                    );
                  })(t),
                  r,
                  n,
                  0
                );
              }),
              n
            );
          }
          return null;
        },
        gt = {
          transitional: lt,
          adapter: ["xhr", "http", "fetch"],
          transformRequest: [
            function (t, e) {
              const n = e.getContentType() || "",
                r = n.indexOf("application/json") > -1,
                o = W.isObject(t);
              if (
                (o && W.isHTMLForm(t) && (t = new FormData(t)), W.isFormData(t))
              )
                return r ? JSON.stringify(yt(t)) : t;
              if (
                W.isArrayBuffer(t) ||
                W.isBuffer(t) ||
                W.isStream(t) ||
                W.isFile(t) ||
                W.isBlob(t) ||
                W.isReadableStream(t)
              )
                return t;
              if (W.isArrayBufferView(t)) return t.buffer;
              if (W.isURLSearchParams(t))
                return (
                  e.setContentType(
                    "application/x-www-form-urlencoded;charset=utf-8",
                    !1
                  ),
                  t.toString()
                );
              let i;
              if (o) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1)
                  return (function (t, e) {
                    return et(
                      t,
                      new vt.classes.URLSearchParams(),
                      Object.assign(
                        {
                          visitor: function (t, e, n, r) {
                            return vt.isNode && W.isBuffer(t)
                              ? (this.append(e, t.toString("base64")), !1)
                              : r.defaultVisitor.apply(this, arguments);
                          },
                        },
                        e
                      )
                    );
                  })(t, this.formSerializer).toString();
                if (
                  (i = W.isFileList(t)) ||
                  n.indexOf("multipart/form-data") > -1
                ) {
                  const e = this.env && this.env.FormData;
                  return et(
                    i ? { "files[]": t } : t,
                    e && new e(),
                    this.formSerializer
                  );
                }
              }
              return o || r
                ? (e.setContentType("application/json", !1),
                  (function (t, e, n) {
                    if (W.isString(t))
                      try {
                        return (0, JSON.parse)(t), W.trim(t);
                      } catch (t) {
                        if ("SyntaxError" !== t.name) throw t;
                      }
                    return (0, JSON.stringify)(t);
                  })(t))
                : t;
            },
          ],
          transformResponse: [
            function (t) {
              const e = this.transitional || gt.transitional,
                n = e && e.forcedJSONParsing,
                r = "json" === this.responseType;
              if (W.isResponse(t) || W.isReadableStream(t)) return t;
              if (t && W.isString(t) && ((n && !this.responseType) || r)) {
                const n = !(e && e.silentJSONParsing) && r;
                try {
                  return JSON.parse(t);
                } catch (t) {
                  if (n) {
                    if ("SyntaxError" === t.name)
                      throw X.from(
                        t,
                        X.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response
                      );
                    throw t;
                  }
                }
              }
              return t;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: vt.classes.FormData, Blob: vt.classes.Blob },
          validateStatus: function (t) {
            return t >= 200 && t < 300;
          },
          headers: {
            common: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": void 0,
            },
          },
        };
      W.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
        gt.headers[t] = {};
      });
      const wt = gt,
        bt = W.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        Et = Symbol("internals");
      function xt(t) {
        return t && String(t).trim().toLowerCase();
      }
      function kt(t) {
        return !1 === t || null == t ? t : W.isArray(t) ? t.map(kt) : String(t);
      }
      function Ct(t, e, n, r, o) {
        return W.isFunction(r)
          ? r.call(this, e, n)
          : (o && (e = n),
            W.isString(e)
              ? W.isString(r)
                ? -1 !== e.indexOf(r)
                : W.isRegExp(r)
                ? r.test(e)
                : void 0
              : void 0);
      }
      class St {
        constructor(t) {
          t && this.set(t);
        }
        set(t, e, n) {
          const r = this;
          function o(t, e, n) {
            const o = xt(e);
            if (!o) throw new Error("header name must be a non-empty string");
            const i = W.findKey(r, o);
            (!i ||
              void 0 === r[i] ||
              !0 === n ||
              (void 0 === n && !1 !== r[i])) &&
              (r[i || e] = kt(t));
          }
          const i = (t, e) => W.forEach(t, (t, n) => o(t, n, e));
          if (W.isPlainObject(t) || t instanceof this.constructor) i(t, e);
          else if (
            W.isString(t) &&
            (t = t.trim()) &&
            !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())
          )
            i(
              ((t) => {
                const e = {};
                let n, r, o;
                return (
                  t &&
                    t.split("\n").forEach(function (t) {
                      (o = t.indexOf(":")),
                        (n = t.substring(0, o).trim().toLowerCase()),
                        (r = t.substring(o + 1).trim()),
                        !n ||
                          (e[n] && bt[n]) ||
                          ("set-cookie" === n
                            ? e[n]
                              ? e[n].push(r)
                              : (e[n] = [r])
                            : (e[n] = e[n] ? e[n] + ", " + r : r));
                    }),
                  e
                );
              })(t),
              e
            );
          else if (W.isHeaders(t)) for (const [e, r] of t.entries()) o(r, e, n);
          else null != t && o(e, t, n);
          return this;
        }
        get(t, e) {
          if ((t = xt(t))) {
            const n = W.findKey(this, t);
            if (n) {
              const t = this[n];
              if (!e) return t;
              if (!0 === e)
                return (function (t) {
                  const e = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let r;
                  for (; (r = n.exec(t)); ) e[r[1]] = r[2];
                  return e;
                })(t);
              if (W.isFunction(e)) return e.call(this, t, n);
              if (W.isRegExp(e)) return e.exec(t);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(t, e) {
          if ((t = xt(t))) {
            const n = W.findKey(this, t);
            return !(!n || void 0 === this[n] || (e && !Ct(0, this[n], n, e)));
          }
          return !1;
        }
        delete(t, e) {
          const n = this;
          let r = !1;
          function o(t) {
            if ((t = xt(t))) {
              const o = W.findKey(n, t);
              !o || (e && !Ct(0, n[o], o, e)) || (delete n[o], (r = !0));
            }
          }
          return W.isArray(t) ? t.forEach(o) : o(t), r;
        }
        clear(t) {
          const e = Object.keys(this);
          let n = e.length,
            r = !1;
          for (; n--; ) {
            const o = e[n];
            (t && !Ct(0, this[o], o, t, !0)) || (delete this[o], (r = !0));
          }
          return r;
        }
        normalize(t) {
          const e = this,
            n = {};
          return (
            W.forEach(this, (r, o) => {
              const i = W.findKey(n, o);
              if (i) return (e[i] = kt(r)), void delete e[o];
              const a = t
                ? (function (t) {
                    return t
                      .trim()
                      .toLowerCase()
                      .replace(
                        /([a-z\d])(\w*)/g,
                        (t, e, n) => e.toUpperCase() + n
                      );
                  })(o)
                : String(o).trim();
              a !== o && delete e[o], (e[a] = kt(r)), (n[a] = !0);
            }),
            this
          );
        }
        concat(...t) {
          return this.constructor.concat(this, ...t);
        }
        toJSON(t) {
          const e = Object.create(null);
          return (
            W.forEach(this, (n, r) => {
              null != n &&
                !1 !== n &&
                (e[r] = t && W.isArray(n) ? n.join(", ") : n);
            }),
            e
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([t, e]) => t + ": " + e)
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(t) {
          return t instanceof this ? t : new this(t);
        }
        static concat(t, ...e) {
          const n = new this(t);
          return e.forEach((t) => n.set(t)), n;
        }
        static accessor(t) {
          const e = (this[Et] = this[Et] = { accessors: {} }).accessors,
            n = this.prototype;
          function r(t) {
            const r = xt(t);
            e[r] ||
              ((function (t, e) {
                const n = W.toCamelCase(" " + e);
                ["get", "set", "has"].forEach((r) => {
                  Object.defineProperty(t, r + n, {
                    value: function (t, n, o) {
                      return this[r].call(this, e, t, n, o);
                    },
                    configurable: !0,
                  });
                });
              })(n, t),
              (e[r] = !0));
          }
          return W.isArray(t) ? t.forEach(r) : r(t), this;
        }
      }
      St.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        W.reduceDescriptors(St.prototype, ({ value: t }, e) => {
          let n = e[0].toUpperCase() + e.slice(1);
          return {
            get: () => t,
            set(t) {
              this[n] = t;
            },
          };
        }),
        W.freezeMethods(St);
      const Tt = St;
      function Ot(t, e) {
        const n = this || wt,
          r = e || n,
          o = Tt.from(r.headers);
        let i = r.data;
        return (
          W.forEach(t, function (t) {
            i = t.call(n, i, o.normalize(), e ? e.status : void 0);
          }),
          o.normalize(),
          i
        );
      }
      function Lt(t) {
        return !(!t || !t.__CANCEL__);
      }
      function Pt(t, e, n) {
        X.call(this, null == t ? "canceled" : t, X.ERR_CANCELED, e, n),
          (this.name = "CanceledError");
      }
      W.inherits(Pt, X, { __CANCEL__: !0 });
      const At = Pt;
      function Bt(t, e, n) {
        const r = n.config.validateStatus;
        n.status && r && !r(n.status)
          ? e(
              new X(
                "Request failed with status code " + n.status,
                [X.ERR_BAD_REQUEST, X.ERR_BAD_RESPONSE][
                  Math.floor(n.status / 100) - 4
                ],
                n.config,
                n.request,
                n
              )
            )
          : t(n);
      }
      const jt = (t, e, n = 3) => {
          let r = 0;
          const o = (function (t, e) {
            t = t || 10;
            const n = new Array(t),
              r = new Array(t);
            let o,
              i = 0,
              a = 0;
            return (
              (e = void 0 !== e ? e : 1e3),
              function (s) {
                const c = Date.now(),
                  l = r[a];
                o || (o = c), (n[i] = s), (r[i] = c);
                let u = a,
                  h = 0;
                for (; u !== i; ) (h += n[u++]), (u %= t);
                if (
                  ((i = (i + 1) % t), i === a && (a = (a + 1) % t), c - o < e)
                )
                  return;
                const f = l && c - l;
                return f ? Math.round((1e3 * h) / f) : void 0;
              }
            );
          })(50, 250);
          return (function (t, e) {
            let n = 0;
            const r = 1e3 / e;
            let o = null;
            return function () {
              const e = !0 === this,
                i = Date.now();
              if (e || i - n > r)
                return (
                  o && (clearTimeout(o), (o = null)),
                  (n = i),
                  t.apply(null, arguments)
                );
              o ||
                (o = setTimeout(
                  () => (
                    (o = null), (n = Date.now()), t.apply(null, arguments)
                  ),
                  r - (i - n)
                ));
            };
          })((n) => {
            const i = n.loaded,
              a = n.lengthComputable ? n.total : void 0,
              s = i - r,
              c = o(s);
            r = i;
            const l = {
              loaded: i,
              total: a,
              progress: a ? i / a : void 0,
              bytes: s,
              rate: c || void 0,
              estimated: c && a && i <= a ? (a - i) / c : void 0,
              event: n,
              lengthComputable: null != a,
            };
            (l[e ? "download" : "upload"] = !0), t(l);
          }, n);
        },
        _t = vt.hasStandardBrowserEnv
          ? (function () {
              const t = /(msie|trident)/i.test(navigator.userAgent),
                e = document.createElement("a");
              let n;
              function r(n) {
                let r = n;
                return (
                  t && (e.setAttribute("href", r), (r = e.href)),
                  e.setAttribute("href", r),
                  {
                    href: e.href,
                    protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
                    host: e.host,
                    search: e.search ? e.search.replace(/^\?/, "") : "",
                    hash: e.hash ? e.hash.replace(/^#/, "") : "",
                    hostname: e.hostname,
                    port: e.port,
                    pathname:
                      "/" === e.pathname.charAt(0)
                        ? e.pathname
                        : "/" + e.pathname,
                  }
                );
              }
              return (
                (n = r(window.location.href)),
                function (t) {
                  const e = W.isString(t) ? r(t) : t;
                  return e.protocol === n.protocol && e.host === n.host;
                }
              );
            })()
          : function () {
              return !0;
            },
        Nt = vt.hasStandardBrowserEnv
          ? {
              write(t, e, n, r, o, i) {
                const a = [t + "=" + encodeURIComponent(e)];
                W.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
                  W.isString(r) && a.push("path=" + r),
                  W.isString(o) && a.push("domain=" + o),
                  !0 === i && a.push("secure"),
                  (document.cookie = a.join("; "));
              },
              read(t) {
                const e = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
                );
                return e ? decodeURIComponent(e[3]) : null;
              },
              remove(t) {
                this.write(t, "", Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function Rt(t, e) {
        return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
          ? (function (t, e) {
              return e
                ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "")
                : t;
            })(t, e)
          : e;
      }
      const Dt = (t) => (t instanceof Tt ? { ...t } : t);
      function It(t, e) {
        e = e || {};
        const n = {};
        function r(t, e, n) {
          return W.isPlainObject(t) && W.isPlainObject(e)
            ? W.merge.call({ caseless: n }, t, e)
            : W.isPlainObject(e)
            ? W.merge({}, e)
            : W.isArray(e)
            ? e.slice()
            : e;
        }
        function o(t, e, n) {
          return W.isUndefined(e)
            ? W.isUndefined(t)
              ? void 0
              : r(void 0, t, n)
            : r(t, e, n);
        }
        function i(t, e) {
          if (!W.isUndefined(e)) return r(void 0, e);
        }
        function a(t, e) {
          return W.isUndefined(e)
            ? W.isUndefined(t)
              ? void 0
              : r(void 0, t)
            : r(void 0, e);
        }
        function s(n, o, i) {
          return i in e ? r(n, o) : i in t ? r(void 0, n) : void 0;
        }
        const c = {
          url: i,
          method: i,
          data: i,
          baseURL: a,
          transformRequest: a,
          transformResponse: a,
          paramsSerializer: a,
          timeout: a,
          timeoutMessage: a,
          withCredentials: a,
          withXSRFToken: a,
          adapter: a,
          responseType: a,
          xsrfCookieName: a,
          xsrfHeaderName: a,
          onUploadProgress: a,
          onDownloadProgress: a,
          decompress: a,
          maxContentLength: a,
          maxBodyLength: a,
          beforeRedirect: a,
          transport: a,
          httpAgent: a,
          httpsAgent: a,
          cancelToken: a,
          socketPath: a,
          responseEncoding: a,
          validateStatus: s,
          headers: (t, e) => o(Dt(t), Dt(e), !0),
        };
        return (
          W.forEach(Object.keys(Object.assign({}, t, e)), function (r) {
            const i = c[r] || o,
              a = i(t[r], e[r], r);
            (W.isUndefined(a) && i !== s) || (n[r] = a);
          }),
          n
        );
      }
      const Ft = (t) => {
          const e = It({}, t);
          let n,
            {
              data: r,
              withXSRFToken: o,
              xsrfHeaderName: i,
              xsrfCookieName: a,
              headers: s,
              auth: c,
            } = e;
          if (
            ((e.headers = s = Tt.from(s)),
            (e.url = st(Rt(e.baseURL, e.url), t.params, t.paramsSerializer)),
            c &&
              s.set(
                "Authorization",
                "Basic " +
                  btoa(
                    (c.username || "") +
                      ":" +
                      (c.password
                        ? unescape(encodeURIComponent(c.password))
                        : "")
                  )
              ),
            W.isFormData(r))
          )
            if (vt.hasStandardBrowserEnv || vt.hasStandardBrowserWebWorkerEnv)
              s.setContentType(void 0);
            else if (!1 !== (n = s.getContentType())) {
              const [t, ...e] = n
                ? n
                    .split(";")
                    .map((t) => t.trim())
                    .filter(Boolean)
                : [];
              s.setContentType([t || "multipart/form-data", ...e].join("; "));
            }
          if (
            vt.hasStandardBrowserEnv &&
            (o && W.isFunction(o) && (o = o(e)), o || (!1 !== o && _t(e.url)))
          ) {
            const t = i && a && Nt.read(a);
            t && s.set(i, t);
          }
          return e;
        },
        qt =
          "undefined" != typeof XMLHttpRequest &&
          function (t) {
            return new Promise(function (e, n) {
              const r = Ft(t);
              let o = r.data;
              const i = Tt.from(r.headers).normalize();
              let a,
                { responseType: s } = r;
              function c() {
                r.cancelToken && r.cancelToken.unsubscribe(a),
                  r.signal && r.signal.removeEventListener("abort", a);
              }
              let l = new XMLHttpRequest();
              function u() {
                if (!l) return;
                const r = Tt.from(
                  "getAllResponseHeaders" in l && l.getAllResponseHeaders()
                );
                Bt(
                  function (t) {
                    e(t), c();
                  },
                  function (t) {
                    n(t), c();
                  },
                  {
                    data:
                      s && "text" !== s && "json" !== s
                        ? l.response
                        : l.responseText,
                    status: l.status,
                    statusText: l.statusText,
                    headers: r,
                    config: t,
                    request: l,
                  }
                ),
                  (l = null);
              }
              l.open(r.method.toUpperCase(), r.url, !0),
                (l.timeout = r.timeout),
                "onloadend" in l
                  ? (l.onloadend = u)
                  : (l.onreadystatechange = function () {
                      l &&
                        4 === l.readyState &&
                        (0 !== l.status ||
                          (l.responseURL &&
                            0 === l.responseURL.indexOf("file:"))) &&
                        setTimeout(u);
                    }),
                (l.onabort = function () {
                  l &&
                    (n(new X("Request aborted", X.ECONNABORTED, r, l)),
                    (l = null));
                }),
                (l.onerror = function () {
                  n(new X("Network Error", X.ERR_NETWORK, r, l)), (l = null);
                }),
                (l.ontimeout = function () {
                  let t = r.timeout
                    ? "timeout of " + r.timeout + "ms exceeded"
                    : "timeout exceeded";
                  const e = r.transitional || lt;
                  r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                    n(
                      new X(
                        t,
                        e.clarifyTimeoutError ? X.ETIMEDOUT : X.ECONNABORTED,
                        r,
                        l
                      )
                    ),
                    (l = null);
                }),
                void 0 === o && i.setContentType(null),
                "setRequestHeader" in l &&
                  W.forEach(i.toJSON(), function (t, e) {
                    l.setRequestHeader(e, t);
                  }),
                W.isUndefined(r.withCredentials) ||
                  (l.withCredentials = !!r.withCredentials),
                s && "json" !== s && (l.responseType = r.responseType),
                "function" == typeof r.onDownloadProgress &&
                  l.addEventListener("progress", jt(r.onDownloadProgress, !0)),
                "function" == typeof r.onUploadProgress &&
                  l.upload &&
                  l.upload.addEventListener("progress", jt(r.onUploadProgress)),
                (r.cancelToken || r.signal) &&
                  ((a = (e) => {
                    l &&
                      (n(!e || e.type ? new At(null, t, l) : e),
                      l.abort(),
                      (l = null));
                  }),
                  r.cancelToken && r.cancelToken.subscribe(a),
                  r.signal &&
                    (r.signal.aborted
                      ? a()
                      : r.signal.addEventListener("abort", a)));
              const h = (function (t) {
                const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
                return (e && e[1]) || "";
              })(r.url);
              h && -1 === vt.protocols.indexOf(h)
                ? n(
                    new X(
                      "Unsupported protocol " + h + ":",
                      X.ERR_BAD_REQUEST,
                      t
                    )
                  )
                : l.send(o || null);
            });
          },
        Ut = (t, e) => {
          let n,
            r = new AbortController();
          const o = function (t) {
            if (!n) {
              (n = !0), a();
              const e = t instanceof Error ? t : this.reason;
              r.abort(
                e instanceof X ? e : new At(e instanceof Error ? e.message : e)
              );
            }
          };
          let i =
            e &&
            setTimeout(() => {
              o(new X(`timeout ${e} of ms exceeded`, X.ETIMEDOUT));
            }, e);
          const a = () => {
            t &&
              (i && clearTimeout(i),
              (i = null),
              t.forEach((t) => {
                t &&
                  (t.removeEventListener
                    ? t.removeEventListener("abort", o)
                    : t.unsubscribe(o));
              }),
              (t = null));
          };
          t.forEach(
            (t) => t && t.addEventListener && t.addEventListener("abort", o)
          );
          const { signal: s } = r;
          return (
            (s.unsubscribe = a),
            [
              s,
              () => {
                i && clearTimeout(i), (i = null);
              },
            ]
          );
        },
        Mt = function* (t, e) {
          let n = t.byteLength;
          if (!e || n < e) return void (yield t);
          let r,
            o = 0;
          for (; o < n; ) (r = o + e), yield t.slice(o, r), (o = r);
        },
        zt = (t, e, n, r, o) => {
          const i = (async function* (t, e, n) {
            for await (const r of t)
              yield* Mt(ArrayBuffer.isView(r) ? r : await n(String(r)), e);
          })(t, e, o);
          let a = 0;
          return new ReadableStream(
            {
              type: "bytes",
              async pull(t) {
                const { done: e, value: o } = await i.next();
                if (e) return t.close(), void r();
                let s = o.byteLength;
                n && n((a += s)), t.enqueue(new Uint8Array(o));
              },
              cancel: (t) => (r(t), i.return()),
            },
            { highWaterMark: 2 }
          );
        },
        Gt = (t, e) => {
          const n = null != t;
          return (r) =>
            setTimeout(() => e({ lengthComputable: n, total: t, loaded: r }));
        },
        Ht = "undefined" != typeof fetch,
        Vt = Ht && "undefined" != typeof ReadableStream,
        Wt =
          Ht &&
          ("undefined" != typeof TextEncoder
            ? ((Yt = new TextEncoder()), (t) => Yt.encode(t))
            : async (t) => new Uint8Array(await new Response(t).arrayBuffer()));
      var Yt;
      const Kt =
          Vt &&
          (() => {
            let t = !1;
            const e = new Request(vt.origin, {
              body: new ReadableStream(),
              method: "POST",
              get duplex() {
                return (t = !0), "half";
              },
            }).headers.has("Content-Type");
            return t && !e;
          })(),
        $t =
          Vt &&
          !!(() => {
            try {
              return W.isReadableStream(new Response("").body);
            } catch (t) {}
          })(),
        Xt = { stream: $t && ((t) => t.body) };
      var Jt;
      Ht &&
        ((Jt = new Response()),
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
          !Xt[t] &&
            (Xt[t] = W.isFunction(Jt[t])
              ? (e) => e[t]()
              : (e, n) => {
                  throw new X(
                    `Response type '${t}' is not supported`,
                    X.ERR_NOT_SUPPORT,
                    n
                  );
                });
        }));
      const Zt = {
        http: null,
        xhr: qt,
        fetch:
          Ht &&
          (async (t) => {
            let {
              url: e,
              method: n,
              data: r,
              signal: o,
              cancelToken: i,
              timeout: a,
              onDownloadProgress: s,
              onUploadProgress: c,
              responseType: l,
              headers: u,
              withCredentials: h = "same-origin",
              fetchOptions: f,
            } = Ft(t);
            l = l ? (l + "").toLowerCase() : "text";
            let d,
              p,
              [m, v] = o || i || a ? Ut([o, i], a) : [];
            const y = () => {
              !d &&
                setTimeout(() => {
                  m && m.unsubscribe();
                }),
                (d = !0);
            };
            let g;
            try {
              if (
                c &&
                Kt &&
                "get" !== n &&
                "head" !== n &&
                0 !==
                  (g = await (async (t, e) => {
                    const n = W.toFiniteNumber(t.getContentLength());
                    return null == n
                      ? (async (t) =>
                          null == t
                            ? 0
                            : W.isBlob(t)
                            ? t.size
                            : W.isSpecCompliantForm(t)
                            ? (await new Request(t).arrayBuffer()).byteLength
                            : W.isArrayBufferView(t)
                            ? t.byteLength
                            : (W.isURLSearchParams(t) && (t += ""),
                              W.isString(t)
                                ? (await Wt(t)).byteLength
                                : void 0))(e)
                      : n;
                  })(u, r))
              ) {
                let t,
                  n = new Request(e, {
                    method: "POST",
                    body: r,
                    duplex: "half",
                  });
                W.isFormData(r) &&
                  (t = n.headers.get("content-type")) &&
                  u.setContentType(t),
                  n.body && (r = zt(n.body, 65536, Gt(g, jt(c)), null, Wt));
              }
              W.isString(h) || (h = h ? "cors" : "omit"),
                (p = new Request(e, {
                  ...f,
                  signal: m,
                  method: n.toUpperCase(),
                  headers: u.normalize().toJSON(),
                  body: r,
                  duplex: "half",
                  withCredentials: h,
                }));
              let o = await fetch(p);
              const i = $t && ("stream" === l || "response" === l);
              if ($t && (s || i)) {
                const t = {};
                ["status", "statusText", "headers"].forEach((e) => {
                  t[e] = o[e];
                });
                const e = W.toFiniteNumber(o.headers.get("content-length"));
                o = new Response(
                  zt(o.body, 65536, s && Gt(e, jt(s, !0)), i && y, Wt),
                  t
                );
              }
              l = l || "text";
              let a = await Xt[W.findKey(Xt, l) || "text"](o, t);
              return (
                !i && y(),
                v && v(),
                await new Promise((e, n) => {
                  Bt(e, n, {
                    data: a,
                    headers: Tt.from(o.headers),
                    status: o.status,
                    statusText: o.statusText,
                    config: t,
                    request: p,
                  });
                })
              );
            } catch (e) {
              if (
                (y(), e && "TypeError" === e.name && /fetch/i.test(e.message))
              )
                throw Object.assign(
                  new X("Network Error", X.ERR_NETWORK, t, p),
                  { cause: e.cause || e }
                );
              throw X.from(e, e && e.code, t, p);
            }
          }),
      };
      W.forEach(Zt, (t, e) => {
        if (t) {
          try {
            Object.defineProperty(t, "name", { value: e });
          } catch (t) {}
          Object.defineProperty(t, "adapterName", { value: e });
        }
      });
      const Qt = (t) => `- ${t}`,
        te = (t) => W.isFunction(t) || null === t || !1 === t,
        ee = (t) => {
          t = W.isArray(t) ? t : [t];
          const { length: e } = t;
          let n, r;
          const o = {};
          for (let i = 0; i < e; i++) {
            let e;
            if (
              ((n = t[i]),
              (r = n),
              !te(n) && ((r = Zt[(e = String(n)).toLowerCase()]), void 0 === r))
            )
              throw new X(`Unknown adapter '${e}'`);
            if (r) break;
            o[e || "#" + i] = r;
          }
          if (!r) {
            const t = Object.entries(o).map(
              ([t, e]) =>
                `adapter ${t} ` +
                (!1 === e
                  ? "is not supported by the environment"
                  : "is not available in the build")
            );
            let n = e
              ? t.length > 1
                ? "since :\n" + t.map(Qt).join("\n")
                : " " + Qt(t[0])
              : "as no adapter specified";
            throw new X(
              "There is no suitable adapter to dispatch the request " + n,
              "ERR_NOT_SUPPORT"
            );
          }
          return r;
        };
      function ne(t) {
        if (
          (t.cancelToken && t.cancelToken.throwIfRequested(),
          t.signal && t.signal.aborted)
        )
          throw new At(null, t);
      }
      function re(t) {
        return (
          ne(t),
          (t.headers = Tt.from(t.headers)),
          (t.data = Ot.call(t, t.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(t.method) &&
            t.headers.setContentType("application/x-www-form-urlencoded", !1),
          ee(t.adapter || wt.adapter)(t).then(
            function (e) {
              return (
                ne(t),
                (e.data = Ot.call(t, t.transformResponse, e)),
                (e.headers = Tt.from(e.headers)),
                e
              );
            },
            function (e) {
              return (
                Lt(e) ||
                  (ne(t),
                  e &&
                    e.response &&
                    ((e.response.data = Ot.call(
                      t,
                      t.transformResponse,
                      e.response
                    )),
                    (e.response.headers = Tt.from(e.response.headers)))),
                Promise.reject(e)
              );
            }
          )
        );
      }
      const oe = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (t, e) => {
          oe[t] = function (n) {
            return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
          };
        }
      );
      const ie = {};
      oe.transitional = function (t, e, n) {
        function r(t, e) {
          return (
            "[Axios v1.7.1] Transitional option '" +
            t +
            "'" +
            e +
            (n ? ". " + n : "")
          );
        }
        return (n, o, i) => {
          if (!1 === t)
            throw new X(
              r(o, " has been removed" + (e ? " in " + e : "")),
              X.ERR_DEPRECATED
            );
          return (
            e &&
              !ie[o] &&
              ((ie[o] = !0),
              console.warn(
                r(
                  o,
                  " has been deprecated since v" +
                    e +
                    " and will be removed in the near future"
                )
              )),
            !t || t(n, o, i)
          );
        };
      };
      const ae = {
          assertOptions: function (t, e, n) {
            if ("object" != typeof t)
              throw new X("options must be an object", X.ERR_BAD_OPTION_VALUE);
            const r = Object.keys(t);
            let o = r.length;
            for (; o-- > 0; ) {
              const i = r[o],
                a = e[i];
              if (a) {
                const e = t[i],
                  n = void 0 === e || a(e, i, t);
                if (!0 !== n)
                  throw new X(
                    "option " + i + " must be " + n,
                    X.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new X("Unknown option " + i, X.ERR_BAD_OPTION);
            }
          },
          validators: oe,
        },
        se = ae.validators;
      class ce {
        constructor(t) {
          (this.defaults = t),
            (this.interceptors = { request: new ct(), response: new ct() });
        }
        async request(t, e) {
          try {
            return await this._request(t, e);
          } catch (t) {
            if (t instanceof Error) {
              let e;
              Error.captureStackTrace
                ? Error.captureStackTrace((e = {}))
                : (e = new Error());
              const n = e.stack ? e.stack.replace(/^.+\n/, "") : "";
              try {
                t.stack
                  ? n &&
                    !String(t.stack).endsWith(n.replace(/^.+\n.+\n/, "")) &&
                    (t.stack += "\n" + n)
                  : (t.stack = n);
              } catch (t) {}
            }
            throw t;
          }
        }
        _request(t, e) {
          "string" == typeof t ? ((e = e || {}).url = t) : (e = t || {}),
            (e = It(this.defaults, e));
          const { transitional: n, paramsSerializer: r, headers: o } = e;
          void 0 !== n &&
            ae.assertOptions(
              n,
              {
                silentJSONParsing: se.transitional(se.boolean),
                forcedJSONParsing: se.transitional(se.boolean),
                clarifyTimeoutError: se.transitional(se.boolean),
              },
              !1
            ),
            null != r &&
              (W.isFunction(r)
                ? (e.paramsSerializer = { serialize: r })
                : ae.assertOptions(
                    r,
                    { encode: se.function, serialize: se.function },
                    !0
                  )),
            (e.method = (
              e.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let i = o && W.merge(o.common, o[e.method]);
          o &&
            W.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (t) => {
                delete o[t];
              }
            ),
            (e.headers = Tt.concat(i, o));
          const a = [];
          let s = !0;
          this.interceptors.request.forEach(function (t) {
            ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
              ((s = s && t.synchronous), a.unshift(t.fulfilled, t.rejected));
          });
          const c = [];
          let l;
          this.interceptors.response.forEach(function (t) {
            c.push(t.fulfilled, t.rejected);
          });
          let u,
            h = 0;
          if (!s) {
            const t = [re.bind(this), void 0];
            for (
              t.unshift.apply(t, a),
                t.push.apply(t, c),
                u = t.length,
                l = Promise.resolve(e);
              h < u;

            )
              l = l.then(t[h++], t[h++]);
            return l;
          }
          u = a.length;
          let f = e;
          for (h = 0; h < u; ) {
            const t = a[h++],
              e = a[h++];
            try {
              f = t(f);
            } catch (t) {
              e.call(this, t);
              break;
            }
          }
          try {
            l = re.call(this, f);
          } catch (t) {
            return Promise.reject(t);
          }
          for (h = 0, u = c.length; h < u; ) l = l.then(c[h++], c[h++]);
          return l;
        }
        getUri(t) {
          return st(
            Rt((t = It(this.defaults, t)).baseURL, t.url),
            t.params,
            t.paramsSerializer
          );
        }
      }
      W.forEach(["delete", "get", "head", "options"], function (t) {
        ce.prototype[t] = function (e, n) {
          return this.request(
            It(n || {}, { method: t, url: e, data: (n || {}).data })
          );
        };
      }),
        W.forEach(["post", "put", "patch"], function (t) {
          function e(e) {
            return function (n, r, o) {
              return this.request(
                It(o || {}, {
                  method: t,
                  headers: e ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                })
              );
            };
          }
          (ce.prototype[t] = e()), (ce.prototype[t + "Form"] = e(!0));
        });
      const le = ce;
      class ue {
        constructor(t) {
          if ("function" != typeof t)
            throw new TypeError("executor must be a function.");
          let e;
          this.promise = new Promise(function (t) {
            e = t;
          });
          const n = this;
          this.promise.then((t) => {
            if (!n._listeners) return;
            let e = n._listeners.length;
            for (; e-- > 0; ) n._listeners[e](t);
            n._listeners = null;
          }),
            (this.promise.then = (t) => {
              let e;
              const r = new Promise((t) => {
                n.subscribe(t), (e = t);
              }).then(t);
              return (
                (r.cancel = function () {
                  n.unsubscribe(e);
                }),
                r
              );
            }),
            t(function (t, r, o) {
              n.reason || ((n.reason = new At(t, r, o)), e(n.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(t) {
          this.reason
            ? t(this.reason)
            : this._listeners
            ? this._listeners.push(t)
            : (this._listeners = [t]);
        }
        unsubscribe(t) {
          if (!this._listeners) return;
          const e = this._listeners.indexOf(t);
          -1 !== e && this._listeners.splice(e, 1);
        }
        static source() {
          let t;
          return {
            token: new ue(function (e) {
              t = e;
            }),
            cancel: t,
          };
        }
      }
      const he = ue,
        fe = {
          Continue: 100,
          SwitchingProtocols: 101,
          Processing: 102,
          EarlyHints: 103,
          Ok: 200,
          Created: 201,
          Accepted: 202,
          NonAuthoritativeInformation: 203,
          NoContent: 204,
          ResetContent: 205,
          PartialContent: 206,
          MultiStatus: 207,
          AlreadyReported: 208,
          ImUsed: 226,
          MultipleChoices: 300,
          MovedPermanently: 301,
          Found: 302,
          SeeOther: 303,
          NotModified: 304,
          UseProxy: 305,
          Unused: 306,
          TemporaryRedirect: 307,
          PermanentRedirect: 308,
          BadRequest: 400,
          Unauthorized: 401,
          PaymentRequired: 402,
          Forbidden: 403,
          NotFound: 404,
          MethodNotAllowed: 405,
          NotAcceptable: 406,
          ProxyAuthenticationRequired: 407,
          RequestTimeout: 408,
          Conflict: 409,
          Gone: 410,
          LengthRequired: 411,
          PreconditionFailed: 412,
          PayloadTooLarge: 413,
          UriTooLong: 414,
          UnsupportedMediaType: 415,
          RangeNotSatisfiable: 416,
          ExpectationFailed: 417,
          ImATeapot: 418,
          MisdirectedRequest: 421,
          UnprocessableEntity: 422,
          Locked: 423,
          FailedDependency: 424,
          TooEarly: 425,
          UpgradeRequired: 426,
          PreconditionRequired: 428,
          TooManyRequests: 429,
          RequestHeaderFieldsTooLarge: 431,
          UnavailableForLegalReasons: 451,
          InternalServerError: 500,
          NotImplemented: 501,
          BadGateway: 502,
          ServiceUnavailable: 503,
          GatewayTimeout: 504,
          HttpVersionNotSupported: 505,
          VariantAlsoNegotiates: 506,
          InsufficientStorage: 507,
          LoopDetected: 508,
          NotExtended: 510,
          NetworkAuthenticationRequired: 511,
        };
      Object.entries(fe).forEach(([t, e]) => {
        fe[e] = t;
      });
      const de = fe,
        pe = (function t(e) {
          const n = new le(e),
            r = l(le.prototype.request, n);
          return (
            W.extend(r, le.prototype, n, { allOwnKeys: !0 }),
            W.extend(r, n, null, { allOwnKeys: !0 }),
            (r.create = function (n) {
              return t(It(e, n));
            }),
            r
          );
        })(wt);
      (pe.Axios = le),
        (pe.CanceledError = At),
        (pe.CancelToken = he),
        (pe.isCancel = Lt),
        (pe.VERSION = "1.7.1"),
        (pe.toFormData = et),
        (pe.AxiosError = X),
        (pe.Cancel = pe.CanceledError),
        (pe.all = function (t) {
          return Promise.all(t);
        }),
        (pe.spread = function (t) {
          return function (e) {
            return t.apply(null, e);
          };
        }),
        (pe.isAxiosError = function (t) {
          return W.isObject(t) && !0 === t.isAxiosError;
        }),
        (pe.mergeConfig = It),
        (pe.AxiosHeaders = Tt),
        (pe.formToJSON = (t) => yt(W.isHTMLForm(t) ? new FormData(t) : t)),
        (pe.getAdapter = ee),
        (pe.HttpStatusCode = de),
        (pe.default = pe);
      const me = pe;
      function ve(t) {
        return (
          (ve =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          ve(t)
        );
      }
      function ye() {
        ye = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var i = e && e.prototype instanceof y ? e : y,
            a = Object.create(i.prototype),
            s = new A(r || []);
          return o(a, "_invoke", { value: T(t, n, s) }), a;
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = u;
        var f = "suspendedStart",
          d = "suspendedYield",
          p = "executing",
          m = "completed",
          v = {};
        function y() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(B([])));
        x && x !== n && r.call(x, a) && (b = x);
        var k = (w.prototype = y.prototype = Object.create(b));
        function C(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function n(o, i, a, s) {
            var c = h(t[o], t, i);
            if ("throw" !== c.type) {
              var l = c.arg,
                u = l.value;
              return u && "object" == ve(u) && r.call(u, "__await")
                ? e.resolve(u.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    }
                  )
                : e.resolve(u).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    }
                  );
            }
            s(c.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function T(e, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = O(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var l = h(e, n, r);
              if ("normal" === l.type) {
                if (((o = r.done ? m : d), l.arg === v)) continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((o = m), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function O(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                O(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              v
            );
          var i = h(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function L(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function P(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(L, this),
            this.reset(!0);
        }
        function B(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(ve(e) + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(k, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(k)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          C(S.prototype),
          l(S.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new S(u(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          C(k),
          l(k, c, "Generator"),
          l(k, a, function () {
            return this;
          }),
          l(k, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = B),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(P),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    l = r.call(a, "finallyLoc");
                  if (c && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), P(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    P(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: B(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function ge(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      var we = (function () {
        var t,
          e =
            ((t = ye().mark(function t(e, n, r, o, i) {
              var a, s, c, l, u, h, f, d;
              return ye().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (a = e.toDataURL("image/png")),
                          (s = n.toDataURL("image/png")),
                          (c = r),
                          (l = o),
                          (t.next = 6),
                          fetch(a).then(function (t) {
                            return t.blob();
                          })
                        );
                      case 6:
                        return (
                          (u = t.sent),
                          (t.next = 9),
                          fetch(s).then(function (t) {
                            return t.blob();
                          })
                        );
                      case 9:
                        return (
                          (h = t.sent),
                          (t.prev = 10),
                          (f = new FormData()).append(
                            "image",
                            u,
                            "textCanvasImage.png"
                          ),
                          f.append("image", h, "userCanvasImage.png"),
                          f.append("text", c),
                          f.append("flag", l),
                          (t.next = 18),
                          me.post(i, f, {
                            headers: { "Content-Type": "multipart/form-data" },
                          })
                        );
                      case 18:
                        return (d = t.sent), t.abrupt("return", d.data);
                      case 22:
                        (t.prev = 22),
                          (t.t0 = t.catch(10)),
                          console.error(
                            "error while sending canvas capture image :" + t.t0
                          );
                      case 25:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[10, 22]]
              );
            })),
            function () {
              var e = this,
                n = arguments;
              return new Promise(function (r, o) {
                var i = t.apply(e, n);
                function a(t) {
                  ge(i, r, o, a, s, "next", t);
                }
                function s(t) {
                  ge(i, r, o, a, s, "throw", t);
                }
                a(void 0);
              });
            });
        return function (t, n, r, o, i) {
          return e.apply(this, arguments);
        };
      })();
      function be(t) {
        return (
          (be =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          be(t)
        );
      }
      function Ee() {
        Ee = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var i = e && e.prototype instanceof y ? e : y,
            a = Object.create(i.prototype),
            s = new A(r || []);
          return o(a, "_invoke", { value: T(t, n, s) }), a;
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = u;
        var f = "suspendedStart",
          d = "suspendedYield",
          p = "executing",
          m = "completed",
          v = {};
        function y() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(B([])));
        x && x !== n && r.call(x, a) && (b = x);
        var k = (w.prototype = y.prototype = Object.create(b));
        function C(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function n(o, i, a, s) {
            var c = h(t[o], t, i);
            if ("throw" !== c.type) {
              var l = c.arg,
                u = l.value;
              return u && "object" == be(u) && r.call(u, "__await")
                ? e.resolve(u.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    }
                  )
                : e.resolve(u).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    }
                  );
            }
            s(c.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function T(e, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = O(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var l = h(e, n, r);
              if ("normal" === l.type) {
                if (((o = r.done ? m : d), l.arg === v)) continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((o = m), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function O(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                O(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              v
            );
          var i = h(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function L(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function P(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(L, this),
            this.reset(!0);
        }
        function B(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(be(e) + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(k, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(k)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          C(S.prototype),
          l(S.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new S(u(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          C(k),
          l(k, c, "Generator"),
          l(k, a, function () {
            return this;
          }),
          l(k, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = B),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(P),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    l = r.call(a, "finallyLoc");
                  if (c && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), P(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    P(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: B(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function xe(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function ke(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              xe(i, r, o, a, s, "next", t);
            }
            function s(t) {
              xe(i, r, o, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Ce(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Te(r.key), r);
        }
      }
      function Se(t, e, n) {
        return (
          (e = Te(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Te(t) {
        var e = (function (t, e) {
          if ("object" != be(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != be(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == be(e) ? e : e + "";
      }
      var Oe = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Se(this, "text", void 0),
              Se(this, "containerElement", void 0),
              Se(this, "canvasTextElement", void 0),
              Se(this, "canvasElement", void 0),
              Se(this, "ctxElement", void 0),
              Se(this, "gridElement", void 0),
              Se(this, "gridCtxElement", void 0),
              Se(this, "tooltipElements", void 0),
              Se(this, "isDrawing", void 0),
              (this.containerElement = document.createElement("div")),
              (this.tooltipElements = []);
          }),
          (e = [
            {
              key: "setDomNode",
              value: function (t) {
                (this.isDrawing = !1),
                  (this.containerElement = document.createElement("div")),
                  this.containerElement.classList.add(
                    "canvas-basic-pair-wrapper"
                  ),
                  (this.canvasTextElement = new c()),
                  this.initializeCanvas(t),
                  this.containerElement.append(
                    this.canvasTextElement.canvasElement
                  ),
                  this.containerElement.append(this.canvasWrapper);
              },
            },
            {
              key: "initializeCanvas",
              value: function (t) {
                var e = this;
                (this.text = t),
                  (this.canvasWrapper = document.createElement("div")),
                  (this.canvasWrapper.className = "canvas-basic-grid-wrapper"),
                  (this.canvasElement = document.createElement("canvas")),
                  (this.canvasElement.width = 800),
                  (this.canvasElement.height = 50),
                  (this.canvasElement.className = "canvas-basic"),
                  (this.gridElement = document.createElement("canvas")),
                  (this.gridElement.className = "grid-basic"),
                  (this.gridElement.width = 800),
                  (this.gridElement.height = 50),
                  (this.gridCtxElement = this.gridElement.getContext("2d")),
                  this.gridCtxElement.clearRect(
                    0,
                    0,
                    this.gridElement.width,
                    this.gridElement.height
                  ),
                  (this.ctxElement = this.canvasElement.getContext("2d")),
                  (this.ctxElement.fillStyle = "#fff"),
                  this.ctxElement.fillRect(
                    0,
                    0,
                    this.canvasElement.width,
                    this.canvasElement.height
                  ),
                  this.canvasElement.addEventListener(
                    "touchmove",
                    function (t) {
                      t.preventDefault();
                    }
                  ),
                  this.canvasElement.addEventListener(
                    "pointerdown",
                    function (t) {
                      t.preventDefault(), (e.isDrawing = !0);
                      var n = [t.offsetX, t.offsetY];
                      (e.lastX = n[0]), (e.lastY = n[1]);
                    }
                  ),
                  this.canvasElement.addEventListener(
                    "pointermove",
                    function (t) {
                      if ((t.preventDefault(), e.isDrawing)) {
                        e.ctxElement.beginPath(),
                          e.ctxElement.moveTo(e.lastX, e.lastY),
                          e.ctxElement.lineTo(t.offsetX, t.offsetY),
                          e.ctxElement.stroke();
                        var n = [t.offsetX, t.offsetY];
                        (e.lastX = n[0]), (e.lastY = n[1]);
                      }
                    }
                  ),
                  this.canvasElement.addEventListener("pointerup", function () {
                    return (e.isDrawing = !1);
                  }),
                  this.canvasElement.addEventListener(
                    "pointerout",
                    function () {
                      return (e.isDrawing = !1);
                    }
                  ),
                  this.canvasTextElement.setDomNode(t),
                  this.drawGrid(),
                  this.canvasWrapper.append(this.canvasElement),
                  this.canvasWrapper.append(this.gridElement);
              },
            },
            {
              key: "render",
              value: function () {
                this.setDomNode();
              },
            },
            {
              key: "drawGrid",
              value: function () {
                this.gridCtxElement.beginPath();
                for (var t = 0; t <= this.canvasElement.width; t += 50)
                  this.gridCtxElement.moveTo(t, 0),
                    this.gridCtxElement.lineTo(t, this.canvasElement.height);
                (this.gridCtxElement.strokeStyle = "black"),
                  this.gridCtxElement.stroke();
              },
            },
            {
              key: "convertToBrush",
              value: function () {
                (this.ctxElement.strokeStyle = "#000"),
                  (this.ctxElement.lineWidth = 1.1),
                  (this.ctxElement.lineCap = "round"),
                  (this.canvasElement.style.cursor = "auto");
              },
            },
            {
              key: "convertToEraser",
              value: function () {
                (this.ctxElement.fillStyle = "#fff"),
                  (this.ctxElement.lineWidth = 5),
                  (this.ctxElement.lineCap = "round"),
                  (this.ctxElement.strokeStyle = "#fff");
              },
            },
            {
              key: "clearCanvas",
              value: function () {
                this.removeFeedback(),
                  this.ctxElement.clearRect(
                    0,
                    0,
                    this.canvasElement.width,
                    this.canvasElement.height
                  );
              },
            },
            {
              key: "prevContent",
              value:
                ((i = ke(
                  Ee().mark(function t(e) {
                    return Ee().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                this.removeFeedback(),
                                (t.next = 3),
                                this.fetchData(e)
                              );
                            case 3:
                              this.containerElement.removeChild(
                                this.canvasTextElement.canvasElement
                              ),
                                this.containerElement.removeChild(
                                  this.canvasWrapper
                                ),
                                this.canvasTextElement.setDomNode(this.text),
                                this.initializeCanvas(this.text),
                                this.containerElement.appendChild(
                                  this.canvasTextElement.canvasElement
                                ),
                                this.containerElement.appendChild(
                                  this.canvasWrapper
                                );
                            case 9:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return i.apply(this, arguments);
                }),
            },
            {
              key: "nextContent",
              value:
                ((o = ke(
                  Ee().mark(function t(e) {
                    return Ee().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                this.removeFeedback(),
                                (t.next = 3),
                                this.fetchData(e)
                              );
                            case 3:
                              this.containerElement.removeChild(
                                this.canvasTextElement.canvasElement
                              ),
                                this.containerElement.removeChild(
                                  this.canvasWrapper
                                ),
                                this.canvasTextElement.setDomNode(this.text),
                                this.initializeCanvas(this.text),
                                this.containerElement.appendChild(
                                  this.canvasTextElement.canvasElement
                                ),
                                this.containerElement.appendChild(
                                  this.canvasWrapper
                                );
                            case 9:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return o.apply(this, arguments);
                }),
            },
            {
              key: "fetchData",
              value:
                ((r = ke(
                  Ee().mark(function t(e) {
                    var n, r, o, i, a, s, c, l;
                    return Ee().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2), fetch("/contents/content.txt")
                              );
                            case 2:
                              return (r = t.sent), (t.next = 5), r.text();
                            case 5:
                              (o = t.sent),
                                (i = e || 0),
                                (a = []),
                                (s = ""),
                                (c = 0),
                                (l = 0);
                            case 11:
                              if (!(l < o.length)) {
                                t.next = 20;
                                break;
                              }
                              if (0 !== c || (" " !== o[l] && "\n" !== o[l])) {
                                t.next = 14;
                                break;
                              }
                              return t.abrupt("continue", 17);
                            case 14:
                              "\n" === o[l] || "\r" === o[l]
                                ? (s += " ")
                                : (s += o[l]),
                                16 == ++c && (a.push(s), (s = ""), (c = 0));
                            case 17:
                              l++, (t.next = 11);
                              break;
                            case 20:
                              s.length > 0 && a.push(s),
                                (this.text =
                                  null === (n = a[i]) || void 0 === n
                                    ? void 0
                                    : n.toString());
                            case 22:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: "convertToImage",
              value:
                ((n = ke(
                  Ee().mark(function t() {
                    var e, n, r, o, i, a, s, c;
                    return Ee().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              for (
                                (n =
                                  document.createElement("canvas")).width = 800,
                                  n.height = 50,
                                  n.className = "canvas-basic-text",
                                  r = n.getContext("2d"),
                                  o = window.localStorage.getItem("font"),
                                  r.font = "30px ".concat(o),
                                  r.fillStyle = "#fff",
                                  r.fillRect(0, 0, n.width, n.height),
                                  r.fillStyle = "black",
                                  i =
                                    null === (e = this.text) || void 0 === e
                                      ? void 0
                                      : e.toString(),
                                  a = 0;
                                a < i.length;
                                a++
                              )
                                r.fillText(i[a], 50 * a + 13, 35);
                              return (
                                this.removeFeedback(),
                                (t.next = 15),
                                we(
                                  n,
                                  this.canvasElement,
                                  this.text,
                                  "canvasBasic",
                                  "".concat(
                                    "https://barmi-server.onrender.com",
                                    "/api/upload_image"
                                  )
                                )
                              );
                            case 15:
                              (s = t.sent),
                                console.log(this.text + ":" + s),
                                console.log(s),
                                (c = s.feedbacks),
                                this.showFeedback(c);
                            case 20:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "showFeedback",
              value: function (t) {
                var e = this;
                t &&
                  t.forEach(function (t) {
                    var n = t.coordinates.x,
                      r = t.coordinates.y,
                      o = t.feedback,
                      i = document.createElement("img");
                    (i.src = "/images/!.png"),
                      (i.position = "absolute"),
                      (i.width = 20),
                      (i.height = 20),
                      (i.style.left = "".concat(n - 15, "px")),
                      (i.style.top = "".concat(r - 15, "px")),
                      (i.style.position = "absolute"),
                      (i.style.zIndex = 5),
                      (i.style.backgroundColor = "transparent");
                    var a = document.createElement("div");
                    a.classList.add("tool-tip"),
                      (a.style.position = "absolute"),
                      (a.style.left = "".concat(n - 15, "px")),
                      (a.style.top = "".concat(r - 45, "px")),
                      (a.style.padding = "5px"),
                      (a.style.backgroundColor = "rgba(0, 0, 0, 0.7)"),
                      (a.style.color = "#fff"),
                      (a.style.borderRadius = "3px"),
                      (a.style.fontSize = "12px"),
                      (a.style.display = "none"),
                      (a.textContent = o),
                      i.addEventListener("click", function () {
                        a.style.display =
                          "none" === a.style.display ? "block" : "none";
                      }),
                      e.canvasWrapper.appendChild(i),
                      e.canvasWrapper.appendChild(a),
                      e.tooltipElements.push(i),
                      e.tooltipElements.push(a);
                  });
              },
            },
            {
              key: "removeFeedback",
              value: function () {
                var t = this;
                this.tooltipElements.forEach(function (e) {
                  t.canvasWrapper.removeChild(e);
                }),
                  (this.tooltipElements = []);
              },
            },
          ]),
          e && Ce(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e, n, r, o, i;
      })();
      function Le(t) {
        return (
          (Le =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Le(t)
        );
      }
      function Pe() {
        Pe = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var i = e && e.prototype instanceof y ? e : y,
            a = Object.create(i.prototype),
            s = new A(r || []);
          return o(a, "_invoke", { value: T(t, n, s) }), a;
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = u;
        var f = "suspendedStart",
          d = "suspendedYield",
          p = "executing",
          m = "completed",
          v = {};
        function y() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(B([])));
        x && x !== n && r.call(x, a) && (b = x);
        var k = (w.prototype = y.prototype = Object.create(b));
        function C(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function n(o, i, a, s) {
            var c = h(t[o], t, i);
            if ("throw" !== c.type) {
              var l = c.arg,
                u = l.value;
              return u && "object" == Le(u) && r.call(u, "__await")
                ? e.resolve(u.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    }
                  )
                : e.resolve(u).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    }
                  );
            }
            s(c.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function T(e, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = O(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var l = h(e, n, r);
              if ("normal" === l.type) {
                if (((o = r.done ? m : d), l.arg === v)) continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((o = m), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function O(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                O(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              v
            );
          var i = h(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function L(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function P(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(L, this),
            this.reset(!0);
        }
        function B(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(Le(e) + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(k, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(k)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          C(S.prototype),
          l(S.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new S(u(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          C(k),
          l(k, c, "Generator"),
          l(k, a, function () {
            return this;
          }),
          l(k, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = B),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(P),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    l = r.call(a, "finallyLoc");
                  if (c && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), P(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    P(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: B(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function Ae(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (t) {
                if ("string" == typeof t) return Be(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Be(t, e)
                    : void 0
                );
              }
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (s = !0), (i = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function Be(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function je(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function _e(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              je(i, r, o, a, s, "next", t);
            }
            function s(t) {
              je(i, r, o, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Ne(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, De(r.key), r);
        }
      }
      function Re(t, e, n) {
        return (
          (e = De(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function De(t) {
        var e = (function (t, e) {
          if ("object" != Le(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != Le(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Le(e) ? e : e + "";
      }
      var Ie = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Re(this, "containerElement", void 0),
              Re(this, "canvasElements", void 0),
              Re(this, "strings", void 0),
              Re(this, "root", void 0),
              (this.containerElement = document.createElement("div")),
              (this.strings = []);
          }),
          (e = [
            {
              key: "setDomNode",
              value:
                ((r = _e(
                  Pe().mark(function t(e) {
                    var n, r, o, i, a, s, c, l, u, h, f;
                    return Pe().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (this.root = e),
                                (this.strings = []),
                                (this.containerElement =
                                  document.createElement("div")),
                                (a = new Oe()),
                                (s = new Oe()),
                                (c = new Oe()),
                                (l = new Oe()),
                                (t.next = 9),
                                this.fetchData()
                              );
                            case 9:
                              a.setDomNode(
                                null === (n = this.strings[0]) || void 0 === n
                                  ? void 0
                                  : n.toString()
                              ),
                                s.setDomNode(
                                  null === (r = this.strings[1]) || void 0 === r
                                    ? void 0
                                    : r.toString()
                                ),
                                c.setDomNode(
                                  null === (o = this.strings[2]) || void 0 === o
                                    ? void 0
                                    : o.toString()
                                ),
                                l.setDomNode(
                                  null === (i = this.strings[3]) || void 0 === i
                                    ? void 0
                                    : i.toString()
                                ),
                                this.containerElement.classList.add(
                                  "canvas-basic-wrapper"
                                ),
                                (this.canvasElements = [a, s, c, l]),
                                (u = Ae(this.canvasElements));
                              try {
                                for (u.s(); !(h = u.n()).done; )
                                  (f = h.value),
                                    this.containerElement.append(
                                      f.containerElement
                                    );
                              } catch (t) {
                                u.e(t);
                              } finally {
                                u.f();
                              }
                            case 17:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: "fetchData",
              value:
                ((n = _e(
                  Pe().mark(function t() {
                    var e, n, r, o, i, a, s, c;
                    return Pe().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2), fetch("/contents/content.txt")
                              );
                            case 2:
                              return (e = t.sent), (t.next = 5), e.text();
                            case 5:
                              (n = t.sent),
                                (r = parseInt(
                                  window.localStorage.getItem("basicPos")
                                )),
                                (o = []),
                                (i = ""),
                                (a = 0),
                                (s = 0);
                            case 11:
                              if (!(s < n.length)) {
                                t.next = 20;
                                break;
                              }
                              if (0 !== a || (" " !== n[s] && "\n" !== n[s])) {
                                t.next = 14;
                                break;
                              }
                              return t.abrupt("continue", 17);
                            case 14:
                              "\n" === n[s] || "\r" === n[s]
                                ? (i += " ")
                                : (i += n[s]),
                                16 == ++a && (o.push(i), (i = ""), (a = 0));
                            case 17:
                              s++, (t.next = 11);
                              break;
                            case 20:
                              for (
                                i.length > 0 && o.push(i), c = r;
                                c < r + 4 && c < o.length;
                                c++
                              )
                                this.strings.push(o[c]);
                            case 22:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "prevContent",
              value: function () {
                var t = parseInt(window.localStorage.getItem("basicPos")) - 4;
                t < 0 && (t = 0);
                var e,
                  n = t,
                  r = Ae(this.canvasElements);
                try {
                  for (r.s(); !(e = r.n()).done; )
                    e.value.prevContent(t), (t += 1);
                } catch (t) {
                  r.e(t);
                } finally {
                  r.f();
                }
                window.localStorage.setItem("basicPos", n);
              },
            },
            {
              key: "nextContent",
              value: function () {
                var t,
                  e = parseInt(window.localStorage.getItem("basicPos")) + 4,
                  n = Ae(this.canvasElements);
                try {
                  for (n.s(); !(t = n.n()).done; )
                    t.value.nextContent(e), (e += 1);
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
                window.localStorage.setItem(
                  "basicPos",
                  parseInt(window.localStorage.getItem("basicPos")) + 4
                );
              },
            },
            {
              key: "render",
              value: function () {
                this.setDomNode(),
                  document
                    .getElementById("right-container")
                    .appendChild(this.containerElement);
              },
            },
          ]),
          e && Ne(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e, n, r;
      })();
      function Fe(t) {
        return (
          (Fe =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Fe(t)
        );
      }
      function qe(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Me(r.key), r);
        }
      }
      function Ue(t, e, n) {
        return (
          (e = Me(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Me(t) {
        var e = (function (t, e) {
          if ("object" != Fe(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != Fe(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Fe(e) ? e : e + "";
      }
      var ze = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Ue(this, "text", void 0),
              Ue(this, "containerElement", void 0),
              Ue(this, "canvasTextElement", void 0),
              Ue(this, "ctxElement", void 0),
              (this.canvasElement = document.createElement("canvas"));
          }),
          (e = [
            {
              key: "setDomNode",
              value: function (t) {
                (this.containerElement = document.createElement("div")),
                  (this.canvasElement = document.createElement("canvas")),
                  (this.canvasElement.width = 800),
                  (this.canvasElement.height = 50),
                  (this.canvasElement.className = "canvas-practice-text"),
                  (this.ctxElement = this.canvasElement.getContext("2d"));
                var e = window.localStorage.getItem("font");
                (this.ctxElement.font = "30px ".concat(e)),
                  (this.ctxElement.fillStyle = "#fff"),
                  this.ctxElement.fillRect(
                    0,
                    0,
                    this.canvasElement.width,
                    this.canvasElement.height
                  ),
                  this.drawGrid(),
                  (this.ctxElement.fillStyle = "black");
                for (
                  var n = null == t ? void 0 : t.toString(), r = 0;
                  r < n.length;
                  r++
                )
                  this.ctxElement.fillText(n[r], 50 * r + 13, 35);
                this.containerElement.append(this.canvasElement);
              },
            },
            {
              key: "drawGrid",
              value: function () {
                this.ctxElement.beginPath();
                for (var t = 0; t <= this.canvasElement.width; t += 50)
                  this.ctxElement.moveTo(t, 0),
                    this.ctxElement.lineTo(t, this.canvasElement.height);
                for (var e = 0; e <= this.canvasElement.height; e += 50)
                  this.ctxElement.moveTo(0, e),
                    this.ctxElement.lineTo(this.canvasElement.width, e);
                (this.ctxElement.strokeStyle = "black"),
                  this.ctxElement.stroke();
              },
            },
            {
              key: "render",
              value: function () {
                this.setDomNode();
              },
            },
          ]),
          e && qe(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function Ge(t) {
        return (
          (Ge =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Ge(t)
        );
      }
      function He() {
        He = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var i = e && e.prototype instanceof y ? e : y,
            a = Object.create(i.prototype),
            s = new A(r || []);
          return o(a, "_invoke", { value: T(t, n, s) }), a;
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = u;
        var f = "suspendedStart",
          d = "suspendedYield",
          p = "executing",
          m = "completed",
          v = {};
        function y() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(B([])));
        x && x !== n && r.call(x, a) && (b = x);
        var k = (w.prototype = y.prototype = Object.create(b));
        function C(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function n(o, i, a, s) {
            var c = h(t[o], t, i);
            if ("throw" !== c.type) {
              var l = c.arg,
                u = l.value;
              return u && "object" == Ge(u) && r.call(u, "__await")
                ? e.resolve(u.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    }
                  )
                : e.resolve(u).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    }
                  );
            }
            s(c.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function T(e, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = O(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var l = h(e, n, r);
              if ("normal" === l.type) {
                if (((o = r.done ? m : d), l.arg === v)) continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((o = m), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function O(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                O(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              v
            );
          var i = h(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function L(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function P(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(L, this),
            this.reset(!0);
        }
        function B(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(Ge(e) + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(k, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(k)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          C(S.prototype),
          l(S.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new S(u(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          C(k),
          l(k, c, "Generator"),
          l(k, a, function () {
            return this;
          }),
          l(k, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = B),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(P),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    l = r.call(a, "finallyLoc");
                  if (c && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), P(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    P(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: B(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function Ve(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function We(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              Ve(i, r, o, a, s, "next", t);
            }
            function s(t) {
              Ve(i, r, o, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Ye(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, $e(r.key), r);
        }
      }
      function Ke(t, e, n) {
        return (
          (e = $e(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function $e(t) {
        var e = (function (t, e) {
          if ("object" != Ge(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != Ge(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Ge(e) ? e : e + "";
      }
      var Xe = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Ke(this, "text", void 0),
              Ke(this, "containerElement", void 0),
              Ke(this, "canvasTextElement", void 0),
              Ke(this, "canvasElement", void 0),
              Ke(this, "ctxElement", void 0),
              Ke(this, "tooltipElements", void 0),
              Ke(this, "isDrawing", void 0),
              (this.canvasElement = document.createElement("canvas")),
              (this.tooltipElements = []);
          }),
          (e = [
            {
              key: "setDomNode",
              value: function (t) {
                (this.text = t),
                  (this.isDrawing = !1),
                  (this.containerElement = document.createElement("div")),
                  this.containerElement.classList.add(
                    "canvas-practice-pair-wrapper"
                  ),
                  (this.canvasTextElement = new ze()),
                  this.initializeCanvas(t),
                  this.containerElement.append(
                    this.canvasTextElement.canvasElement
                  ),
                  this.containerElement.append(this.canvasElement);
              },
            },
            {
              key: "initializeCanvas",
              value: function (t) {
                var e = this;
                (this.text = t),
                  (this.canvasElement = document.createElement("canvas")),
                  (this.canvasElement.width = 800),
                  (this.canvasElement.height = 50),
                  (this.canvasElement.className = "canvas-practice"),
                  (this.ctxElement = this.canvasElement.getContext("2d")),
                  (this.ctxElement.fillStyle = "#fff"),
                  this.ctxElement.fillRect(
                    0,
                    0,
                    this.canvasElement.width,
                    this.canvasElement.height
                  ),
                  this.canvasElement.addEventListener(
                    "touchmove",
                    function (t) {
                      t.preventDefault();
                    }
                  ),
                  this.canvasElement.addEventListener(
                    "pointerdown",
                    function (t) {
                      t.preventDefault(), (e.isDrawing = !0);
                      var n = [t.offsetX, t.offsetY];
                      (e.lastX = n[0]), (e.lastY = n[1]);
                    }
                  ),
                  this.canvasElement.addEventListener(
                    "pointermove",
                    function (t) {
                      if ((t.preventDefault(), e.isDrawing)) {
                        e.ctxElement.beginPath(),
                          e.ctxElement.moveTo(e.lastX, e.lastY),
                          e.ctxElement.lineTo(t.offsetX, t.offsetY),
                          e.ctxElement.stroke();
                        var n = [t.offsetX, t.offsetY];
                        (e.lastX = n[0]), (e.lastY = n[1]);
                      }
                    }
                  ),
                  this.canvasElement.addEventListener("pointerup", function () {
                    return (e.isDrawing = !1);
                  }),
                  this.canvasElement.addEventListener(
                    "pointerout",
                    function () {
                      return (e.isDrawing = !1);
                    }
                  ),
                  this.canvasTextElement.setDomNode(t);
              },
            },
            {
              key: "render",
              value: function () {
                this.setDomNode();
              },
            },
            {
              key: "convertToBrush",
              value: function () {
                (this.ctxElement.strokeStyle = "#000"),
                  (this.ctxElement.lineWidth = 1.1),
                  (this.ctxElement.lineCap = "round"),
                  (this.canvasElement.style.cursor = "auto");
              },
            },
            {
              key: "convertToEraser",
              value: function () {
                (this.ctxElement.fillStyle = "#fff"),
                  (this.ctxElement.lineWidth = 5),
                  (this.ctxElement.lineCap = "round"),
                  (this.ctxElement.strokeStyle = "#fff");
              },
            },
            {
              key: "clearCanvas",
              value: function () {
                this.removeFeedback(),
                  this.ctxElement.clearRect(
                    0,
                    0,
                    this.canvasElement.width,
                    this.canvasElement.height
                  );
              },
            },
            {
              key: "prevContent",
              value:
                ((i = We(
                  He().mark(function t(e) {
                    return He().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                this.removeFeedback(),
                                (t.next = 3),
                                this.fetchData(e)
                              );
                            case 3:
                              this.containerElement.removeChild(
                                this.canvasTextElement.canvasElement
                              ),
                                this.containerElement.removeChild(
                                  this.canvasElement
                                ),
                                this.canvasTextElement.setDomNode(this.text),
                                this.initializeCanvas(this.text),
                                this.containerElement.appendChild(
                                  this.canvasTextElement.canvasElement
                                ),
                                this.containerElement.appendChild(
                                  this.canvasElement
                                );
                            case 9:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return i.apply(this, arguments);
                }),
            },
            {
              key: "nextContent",
              value:
                ((o = We(
                  He().mark(function t(e) {
                    return He().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                this.removeFeedback(),
                                (t.next = 3),
                                this.fetchData(e)
                              );
                            case 3:
                              this.containerElement.removeChild(
                                this.canvasTextElement.canvasElement
                              ),
                                this.containerElement.removeChild(
                                  this.canvasElement
                                ),
                                this.canvasTextElement.setDomNode(this.text),
                                this.initializeCanvas(this.text),
                                this.containerElement.appendChild(
                                  this.canvasTextElement.canvasElement
                                ),
                                this.containerElement.appendChild(
                                  this.canvasElement
                                );
                            case 9:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return o.apply(this, arguments);
                }),
            },
            {
              key: "fetchData",
              value:
                ((r = We(
                  He().mark(function t(e) {
                    var n, r, o, i, a, s, c, l;
                    return He().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2), fetch("/contents/content.txt")
                              );
                            case 2:
                              return (r = t.sent), (t.next = 5), r.text();
                            case 5:
                              (o = t.sent),
                                (i = e || 0),
                                (a = []),
                                (s = ""),
                                (c = 0),
                                (l = 0);
                            case 11:
                              if (!(l < o.length)) {
                                t.next = 20;
                                break;
                              }
                              if (0 !== c || (" " !== o[l] && "\n" !== o[l])) {
                                t.next = 14;
                                break;
                              }
                              return t.abrupt("continue", 17);
                            case 14:
                              "\n" === o[l] || "\r" === o[l]
                                ? (s += " ")
                                : (s += o[l]),
                                16 == ++c && (a.push(s), (s = ""), (c = 0));
                            case 17:
                              l++, (t.next = 11);
                              break;
                            case 20:
                              s.length > 0 && a.push(s),
                                (this.text =
                                  null === (n = a[i]) || void 0 === n
                                    ? void 0
                                    : n.toString());
                            case 22:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: "convertToImage",
              value:
                ((n = We(
                  He().mark(function t() {
                    var e, n, r, o, i, a, s, c;
                    return He().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              for (
                                (n =
                                  document.createElement("canvas")).width = 800,
                                  n.height = 50,
                                  n.className = "canvas-practice-text",
                                  r = n.getContext("2d"),
                                  o = window.localStorage.getItem("font"),
                                  r.font = "30px ".concat(o),
                                  r.fillStyle = "#fff",
                                  r.fillRect(0, 0, n.width, n.height),
                                  r.fillStyle = "black",
                                  i =
                                    null === (e = this.text) || void 0 === e
                                      ? void 0
                                      : e.toString(),
                                  a = 0;
                                a < i.length;
                                a++
                              )
                                r.fillText(i[a], 50 * a + 13, 35);
                              return (
                                this.removeFeedback(),
                                (t.next = 15),
                                we(
                                  n,
                                  this.canvasElement,
                                  this.text,
                                  "canvasPractice",
                                  "".concat(
                                    "https://barmi-server.onrender.com",
                                    "/api/upload_image"
                                  )
                                )
                              );
                            case 15:
                              (s = t.sent),
                                console.log(this.text + ":" + s),
                                console.log(s),
                                (c = s.feedbacks),
                                this.showFeedback(c);
                            case 20:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "showFeedback",
              value: function (t) {
                var e = this;
                t &&
                  t.forEach(function (t) {
                    var n = t.coordinates.x,
                      r = t.coordinates.y,
                      o = t.feedback,
                      i = document.createElement("img");
                    (i.src = "/images/!.png"),
                      (i.position = "absolute"),
                      (i.width = 20),
                      (i.height = 20),
                      (i.style.left = "".concat(n, "px")),
                      (i.style.top = "".concat(r + 35, "px")),
                      (i.style.position = "absolute"),
                      (i.style.zIndex = 5),
                      (i.style.backgroundColor = "transparent");
                    var a = document.createElement("div");
                    a.classList.add("tool-tip"),
                      (a.style.position = "absolute"),
                      (a.style.left = "".concat(n, "px")),
                      (a.style.top = "".concat(r + 5, "px")),
                      (a.style.padding = "5px"),
                      (a.style.backgroundColor = "rgba(0, 0, 0, 0.7)"),
                      (a.style.color = "#fff"),
                      (a.style.borderRadius = "3px"),
                      (a.style.fontSize = "12px"),
                      (a.style.display = "none"),
                      (a.textContent = o),
                      i.addEventListener("click", function () {
                        a.style.display =
                          "none" === a.style.display ? "block" : "none";
                      }),
                      e.containerElement.appendChild(i),
                      e.containerElement.appendChild(a),
                      e.tooltipElements.push(i),
                      e.tooltipElements.push(a);
                  });
              },
            },
            {
              key: "removeFeedback",
              value: function () {
                var t = this;
                this.tooltipElements.forEach(function (e) {
                  t.containerElement.removeChild(e);
                }),
                  (this.tooltipElements = []);
              },
            },
          ]),
          e && Ye(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e, n, r, o, i;
      })();
      function Je(t) {
        return (
          (Je =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Je(t)
        );
      }
      function Ze() {
        Ze = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var i = e && e.prototype instanceof y ? e : y,
            a = Object.create(i.prototype),
            s = new A(r || []);
          return o(a, "_invoke", { value: T(t, n, s) }), a;
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = u;
        var f = "suspendedStart",
          d = "suspendedYield",
          p = "executing",
          m = "completed",
          v = {};
        function y() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(B([])));
        x && x !== n && r.call(x, a) && (b = x);
        var k = (w.prototype = y.prototype = Object.create(b));
        function C(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function n(o, i, a, s) {
            var c = h(t[o], t, i);
            if ("throw" !== c.type) {
              var l = c.arg,
                u = l.value;
              return u && "object" == Je(u) && r.call(u, "__await")
                ? e.resolve(u.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    }
                  )
                : e.resolve(u).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    }
                  );
            }
            s(c.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function T(e, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = O(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var l = h(e, n, r);
              if ("normal" === l.type) {
                if (((o = r.done ? m : d), l.arg === v)) continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((o = m), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function O(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                O(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              v
            );
          var i = h(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function L(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function P(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(L, this),
            this.reset(!0);
        }
        function B(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(Je(e) + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(k, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(k)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          C(S.prototype),
          l(S.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new S(u(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          C(k),
          l(k, c, "Generator"),
          l(k, a, function () {
            return this;
          }),
          l(k, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = B),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(P),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    l = r.call(a, "finallyLoc");
                  if (c && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), P(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    P(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: B(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function Qe(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (t) {
                if ("string" == typeof t) return tn(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? tn(t, e)
                    : void 0
                );
              }
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (s = !0), (i = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function tn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function en(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function nn(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              en(i, r, o, a, s, "next", t);
            }
            function s(t) {
              en(i, r, o, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function rn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, an(r.key), r);
        }
      }
      function on(t, e, n) {
        return (
          (e = an(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function an(t) {
        var e = (function (t, e) {
          if ("object" != Je(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != Je(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Je(e) ? e : e + "";
      }
      var sn = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              on(this, "containerElement", void 0),
              on(this, "canvasElements", void 0),
              on(this, "strings", void 0),
              on(this, "root", void 0),
              (this.containerElement = document.createElement("div")),
              (this.strings = []);
          }),
          (e = [
            {
              key: "setDomNode",
              value:
                ((r = nn(
                  Ze().mark(function t(e) {
                    var n, r, o, i, a, s, c, l, u, h, f;
                    return Ze().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (this.root = e),
                                (this.strings = []),
                                (this.containerElement =
                                  document.createElement("div")),
                                (a = new Xe()),
                                (s = new Xe()),
                                (c = new Xe()),
                                (l = new Xe()),
                                (t.next = 9),
                                this.fetchData()
                              );
                            case 9:
                              a.setDomNode(
                                null === (n = this.strings[0]) || void 0 === n
                                  ? void 0
                                  : n.toString()
                              ),
                                s.setDomNode(
                                  null === (r = this.strings[1]) || void 0 === r
                                    ? void 0
                                    : r.toString()
                                ),
                                c.setDomNode(
                                  null === (o = this.strings[2]) || void 0 === o
                                    ? void 0
                                    : o.toString()
                                ),
                                l.setDomNode(
                                  null === (i = this.strings[3]) || void 0 === i
                                    ? void 0
                                    : i.toString()
                                ),
                                this.containerElement.classList.add(
                                  "canvas-practice-wrapper"
                                ),
                                (this.canvasElements = [a, s, c, l]),
                                (u = Qe(this.canvasElements));
                              try {
                                for (u.s(); !(h = u.n()).done; )
                                  (f = h.value),
                                    this.containerElement.append(
                                      f.containerElement
                                    );
                              } catch (t) {
                                u.e(t);
                              } finally {
                                u.f();
                              }
                            case 17:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: "fetchData",
              value:
                ((n = nn(
                  Ze().mark(function t() {
                    var e, n, r, o, i, a, s, c;
                    return Ze().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2), fetch("/contents/content.txt")
                              );
                            case 2:
                              return (e = t.sent), (t.next = 5), e.text();
                            case 5:
                              (n = t.sent),
                                (r = parseInt(
                                  window.localStorage.getItem("practicePos")
                                )),
                                (o = []),
                                (i = ""),
                                (a = 0),
                                (s = 0);
                            case 11:
                              if (!(s < n.length)) {
                                t.next = 20;
                                break;
                              }
                              if (0 !== a || (" " !== n[s] && "\n" !== n[s])) {
                                t.next = 14;
                                break;
                              }
                              return t.abrupt("continue", 17);
                            case 14:
                              "\n" === n[s] || "\r" === n[s]
                                ? (i += " ")
                                : (i += n[s]),
                                16 == ++a && (o.push(i), (i = ""), (a = 0));
                            case 17:
                              s++, (t.next = 11);
                              break;
                            case 20:
                              for (
                                i.length > 0 && o.push(i), c = r;
                                c < r + 4 && c < o.length;
                                c++
                              )
                                this.strings.push(o[c]);
                            case 22:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "prevContent",
              value: function () {
                var t =
                  parseInt(window.localStorage.getItem("practicePos")) - 4;
                t < 0 && (t = 0);
                var e,
                  n = t,
                  r = Qe(this.canvasElements);
                try {
                  for (r.s(); !(e = r.n()).done; )
                    e.value.prevContent(t), (t += 1);
                } catch (t) {
                  r.e(t);
                } finally {
                  r.f();
                }
                window.localStorage.setItem("practicePos", n);
              },
            },
            {
              key: "nextContent",
              value: function () {
                var t =
                  parseInt(window.localStorage.getItem("practicePos")) + 4;
                console.log(t);
                var e,
                  n = Qe(this.canvasElements);
                try {
                  for (n.s(); !(e = n.n()).done; )
                    e.value.nextContent(t), (t += 1);
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
                window.localStorage.setItem(
                  "practicePos",
                  parseInt(window.localStorage.getItem("practicePos")) + 4
                );
              },
            },
            {
              key: "render",
              value: function () {
                this.setDomNode(),
                  document
                    .getElementById("right-container")
                    .appendChild(this.containerElement);
              },
            },
          ]),
          e && rn(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e, n, r;
      })();
      function cn(t) {
        return (
          (cn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          cn(t)
        );
      }
      function ln(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, hn(r.key), r);
        }
      }
      function un(t, e, n) {
        return (
          (e = hn(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function hn(t) {
        var e = (function (t, e) {
          if ("object" != cn(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != cn(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == cn(e) ? e : e + "";
      }
      var fn = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              un(this, "text", void 0),
              un(this, "containerElement", void 0),
              un(this, "canvasTextElement", void 0),
              un(this, "ctxElement", void 0),
              (this.canvasElement = document.createElement("canvas"));
          }),
          (e = [
            {
              key: "setDomNode",
              value: function (t) {
                (this.containerElement = document.createElement("div")),
                  (this.canvasElement = document.createElement("canvas")),
                  (this.canvasElement.width = 800),
                  (this.canvasElement.height = 50),
                  (this.canvasElement.className = "canvas-game-text"),
                  (this.ctxElement = this.canvasElement.getContext("2d"));
                var e = window.localStorage.getItem("font");
                (this.ctxElement.font = "30px ".concat(e)),
                  (this.ctxElement.fillStyle = "#fff"),
                  this.ctxElement.fillRect(
                    0,
                    0,
                    this.canvasElement.width,
                    this.canvasElement.height
                  ),
                  this.drawGrid(),
                  (this.ctxElement.fillStyle = "black");
                for (
                  var n = null == t ? void 0 : t.toString(), r = 0;
                  r < n.length;
                  r++
                )
                  this.ctxElement.fillText(n[r], 50 * r + 13, 35);
                this.containerElement.append(this.canvasElement);
              },
            },
            {
              key: "drawGrid",
              value: function () {
                this.ctxElement.beginPath();
                for (var t = 0; t <= this.canvasElement.width; t += 50)
                  this.ctxElement.moveTo(t, 0),
                    this.ctxElement.lineTo(t, this.canvasElement.height);
                for (var e = 0; e <= this.canvasElement.height; e += 50)
                  this.ctxElement.moveTo(0, e),
                    this.ctxElement.lineTo(this.canvasElement.width, e);
                (this.ctxElement.strokeStyle = "black"),
                  this.ctxElement.stroke();
              },
            },
            {
              key: "render",
              value: function () {
                this.setDomNode();
              },
            },
          ]),
          e && ln(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function dn(t) {
        return (
          (dn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          dn(t)
        );
      }
      function pn() {
        pn = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var i = e && e.prototype instanceof y ? e : y,
            a = Object.create(i.prototype),
            s = new A(r || []);
          return o(a, "_invoke", { value: T(t, n, s) }), a;
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = u;
        var f = "suspendedStart",
          d = "suspendedYield",
          p = "executing",
          m = "completed",
          v = {};
        function y() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(B([])));
        x && x !== n && r.call(x, a) && (b = x);
        var k = (w.prototype = y.prototype = Object.create(b));
        function C(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function n(o, i, a, s) {
            var c = h(t[o], t, i);
            if ("throw" !== c.type) {
              var l = c.arg,
                u = l.value;
              return u && "object" == dn(u) && r.call(u, "__await")
                ? e.resolve(u.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    }
                  )
                : e.resolve(u).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    }
                  );
            }
            s(c.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function T(e, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = O(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var l = h(e, n, r);
              if ("normal" === l.type) {
                if (((o = r.done ? m : d), l.arg === v)) continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((o = m), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function O(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                O(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              v
            );
          var i = h(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function L(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function P(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(L, this),
            this.reset(!0);
        }
        function B(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(dn(e) + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(k, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(k)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          C(S.prototype),
          l(S.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new S(u(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          C(k),
          l(k, c, "Generator"),
          l(k, a, function () {
            return this;
          }),
          l(k, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = B),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(P),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    l = r.call(a, "finallyLoc");
                  if (c && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), P(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    P(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: B(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function mn(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function vn(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              mn(i, r, o, a, s, "next", t);
            }
            function s(t) {
              mn(i, r, o, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function yn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, wn(r.key), r);
        }
      }
      function gn(t, e, n) {
        return (
          (e = wn(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function wn(t) {
        var e = (function (t, e) {
          if ("object" != dn(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != dn(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == dn(e) ? e : e + "";
      }
      var bn = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              gn(this, "text", void 0),
              gn(this, "containerElement", void 0),
              gn(this, "canvasTextElement", void 0),
              gn(this, "canvasElement", void 0),
              gn(this, "ctxElement", void 0),
              gn(this, "tooltipElements", void 0),
              gn(this, "isDrawing", void 0),
              (this.canvasElement = document.createElement("canvas")),
              (this.tooltipElements = []);
          }),
          (e = [
            {
              key: "setDomNode",
              value: function (t) {
                (this.text = t),
                  (this.isDrawing = !1),
                  (this.containerElement = document.createElement("div")),
                  this.containerElement.classList.add(
                    "canvas-game-pair-wrapper"
                  ),
                  (this.canvasTextElement = new fn()),
                  this.initializeCanvas(t),
                  this.containerElement.append(
                    this.canvasTextElement.canvasElement
                  ),
                  this.containerElement.append(this.canvasElement);
              },
            },
            {
              key: "initializeCanvas",
              value: function (t) {
                var e = this;
                (this.text = t),
                  (this.canvasElement = document.createElement("canvas")),
                  (this.canvasElement.width = 800),
                  (this.canvasElement.height = 50),
                  (this.canvasElement.className = "canvas-game"),
                  (this.ctxElement = this.canvasElement.getContext("2d")),
                  (this.ctxElement.fillStyle = "#fff"),
                  this.ctxElement.fillRect(
                    0,
                    0,
                    this.canvasElement.width,
                    this.canvasElement.height
                  ),
                  this.canvasElement.addEventListener(
                    "touchmove",
                    function (t) {
                      t.preventDefault();
                    }
                  ),
                  this.canvasElement.addEventListener(
                    "pointerdown",
                    function (t) {
                      t.preventDefault(), (e.isDrawing = !0);
                      var n = [t.offsetX, t.offsetY];
                      (e.lastX = n[0]), (e.lastY = n[1]);
                    }
                  ),
                  this.canvasElement.addEventListener(
                    "pointermove",
                    function (t) {
                      if ((t.preventDefault(), e.isDrawing)) {
                        e.ctxElement.beginPath(),
                          e.ctxElement.moveTo(e.lastX, e.lastY),
                          e.ctxElement.lineTo(t.offsetX, t.offsetY),
                          e.ctxElement.stroke();
                        var n = [t.offsetX, t.offsetY];
                        (e.lastX = n[0]), (e.lastY = n[1]);
                      }
                    }
                  ),
                  this.canvasElement.addEventListener("pointerup", function () {
                    return (e.isDrawing = !1);
                  }),
                  this.canvasElement.addEventListener(
                    "pointerout",
                    function () {
                      return (e.isDrawing = !1);
                    }
                  ),
                  this.canvasTextElement.setDomNode(t);
              },
            },
            {
              key: "render",
              value: function () {
                this.setDomNode();
              },
            },
            {
              key: "convertToBrush",
              value: function () {
                (this.ctxElement.strokeStyle = "#000"),
                  (this.ctxElement.lineWidth = 1.1),
                  (this.ctxElement.lineCap = "round"),
                  (this.canvasElement.style.cursor = "auto");
              },
            },
            {
              key: "convertToEraser",
              value: function () {
                (this.ctxElement.fillStyle = "#fff"),
                  (this.ctxElement.lineWidth = 5),
                  (this.ctxElement.lineCap = "round"),
                  (this.ctxElement.strokeStyle = "#fff");
              },
            },
            {
              key: "clearCanvas",
              value: function () {
                this.ctxElement.clearRect(
                  0,
                  0,
                  this.canvasElement.width,
                  this.canvasElement.height
                );
              },
            },
            {
              key: "convertToImage",
              value:
                ((r = vn(
                  pn().mark(function t() {
                    var e, n, r, o, i, a, s;
                    return pn().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (n = parseInt(
                                  window.localStorage.getItem("gamePos")
                                )),
                                window.localStorage.setItem("gamePos", n + 1),
                                (t.next = 4),
                                this.fetchData(n)
                              );
                            case 4:
                              for (
                                (r =
                                  document.createElement("canvas")).width = 800,
                                  r.height = 50,
                                  r.className = "canvas-game-text",
                                  o = r.getContext("2d"),
                                  i = window.localStorage.getItem("font"),
                                  o.font = "30px ".concat(i),
                                  o.fillStyle = "#fff",
                                  o.fillRect(0, 0, r.width, r.height),
                                  o.fillStyle = "black",
                                  a =
                                    null === (e = this.text) || void 0 === e
                                      ? void 0
                                      : e.toString(),
                                  s = 0;
                                s < a.length;
                                s++
                              )
                                o.fillText(a[s], 50 * s + 13, 35);
                              we(
                                r,
                                this.canvasElement,
                                this.text,
                                "game",
                                "".concat(
                                  "https://barmi-server.onrender.com",
                                  "/api/upload_image"
                                )
                              ),
                                this.containerElement.removeChild(
                                  this.canvasTextElement.canvasElement
                                ),
                                this.containerElement.removeChild(
                                  this.canvasElement
                                ),
                                this.canvasTextElement.setDomNode(this.text),
                                this.initializeCanvas(this.text),
                                this.containerElement.appendChild(
                                  this.canvasTextElement.canvasElement
                                ),
                                this.containerElement.appendChild(
                                  this.canvasElement
                                );
                            case 23:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: "fetchData",
              value:
                ((n = vn(
                  pn().mark(function t(e) {
                    var n, r, o, i, a, s, c, l;
                    return pn().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2), fetch("/contents/content.txt")
                              );
                            case 2:
                              return (r = t.sent), (t.next = 5), r.text();
                            case 5:
                              (o = t.sent),
                                (i = e || 0),
                                (a = []),
                                (s = ""),
                                (c = 0),
                                (l = 0);
                            case 11:
                              if (!(l < o.length)) {
                                t.next = 20;
                                break;
                              }
                              if (0 !== c || (" " !== o[l] && "\n" !== o[l])) {
                                t.next = 14;
                                break;
                              }
                              return t.abrupt("continue", 17);
                            case 14:
                              "\n" === o[l] || "\r" === o[l]
                                ? (s += " ")
                                : (s += o[l]),
                                16 == ++c && (a.push(s), (s = ""), (c = 0));
                            case 17:
                              l++, (t.next = 11);
                              break;
                            case 20:
                              s.length > 0 && a.push(s),
                                (this.text =
                                  null === (n = a[i]) || void 0 === n
                                    ? void 0
                                    : n.toString());
                            case 22:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return n.apply(this, arguments);
                }),
            },
          ]),
          e && yn(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e, n, r;
      })();
      function En(t) {
        return (
          (En =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          En(t)
        );
      }
      function xn() {
        xn = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var i = e && e.prototype instanceof y ? e : y,
            a = Object.create(i.prototype),
            s = new A(r || []);
          return o(a, "_invoke", { value: T(t, n, s) }), a;
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = u;
        var f = "suspendedStart",
          d = "suspendedYield",
          p = "executing",
          m = "completed",
          v = {};
        function y() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(B([])));
        x && x !== n && r.call(x, a) && (b = x);
        var k = (w.prototype = y.prototype = Object.create(b));
        function C(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function n(o, i, a, s) {
            var c = h(t[o], t, i);
            if ("throw" !== c.type) {
              var l = c.arg,
                u = l.value;
              return u && "object" == En(u) && r.call(u, "__await")
                ? e.resolve(u.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    }
                  )
                : e.resolve(u).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    }
                  );
            }
            s(c.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function T(e, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = O(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var l = h(e, n, r);
              if ("normal" === l.type) {
                if (((o = r.done ? m : d), l.arg === v)) continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((o = m), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function O(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                O(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              v
            );
          var i = h(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function L(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function P(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(L, this),
            this.reset(!0);
        }
        function B(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(En(e) + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(k, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(k)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          C(S.prototype),
          l(S.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new S(u(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          C(k),
          l(k, c, "Generator"),
          l(k, a, function () {
            return this;
          }),
          l(k, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = B),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(P),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    l = r.call(a, "finallyLoc");
                  if (c && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), P(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    P(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: B(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function kn(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (t) {
                if ("string" == typeof t) return Cn(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Cn(t, e)
                    : void 0
                );
              }
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (s = !0), (i = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function Cn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Sn(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function Tn(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              Sn(i, r, o, a, s, "next", t);
            }
            function s(t) {
              Sn(i, r, o, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function On(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Pn(r.key), r);
        }
      }
      function Ln(t, e, n) {
        return (
          (e = Pn(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Pn(t) {
        var e = (function (t, e) {
          if ("object" != En(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != En(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == En(e) ? e : e + "";
      }
      var An = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Ln(this, "containerElement", void 0),
              Ln(this, "canvasElements", void 0),
              Ln(this, "strings", void 0),
              Ln(this, "root", void 0),
              (this.containerElement = document.createElement("div")),
              (this.strings = []);
          }),
          (e = [
            {
              key: "setDomNode",
              value:
                ((r = Tn(
                  xn().mark(function t(e) {
                    var n, r, o, i, a, s, c, l, u, h, f;
                    return xn().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (this.root = e),
                                (this.strings = []),
                                (this.containerElement =
                                  document.createElement("div")),
                                (a = new bn()),
                                (s = new bn()),
                                (c = new bn()),
                                (l = new bn()),
                                (t.next = 9),
                                this.fetchData()
                              );
                            case 9:
                              a.setDomNode(
                                null === (n = this.strings[0]) || void 0 === n
                                  ? void 0
                                  : n.toString()
                              ),
                                s.setDomNode(
                                  null === (r = this.strings[1]) || void 0 === r
                                    ? void 0
                                    : r.toString()
                                ),
                                c.setDomNode(
                                  null === (o = this.strings[2]) || void 0 === o
                                    ? void 0
                                    : o.toString()
                                ),
                                l.setDomNode(
                                  null === (i = this.strings[3]) || void 0 === i
                                    ? void 0
                                    : i.toString()
                                ),
                                this.containerElement.classList.add(
                                  "canvas-game-wrapper"
                                ),
                                (this.canvasElements = [a, s, c, l]),
                                (u = kn(this.canvasElements));
                              try {
                                for (u.s(); !(h = u.n()).done; )
                                  (f = h.value),
                                    this.containerElement.append(
                                      f.containerElement
                                    );
                              } catch (t) {
                                u.e(t);
                              } finally {
                                u.f();
                              }
                            case 17:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: "fetchData",
              value:
                ((n = Tn(
                  xn().mark(function t() {
                    var e, n, r, o, i, a, s, c;
                    return xn().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2), fetch("/contents/content.txt")
                              );
                            case 2:
                              return (e = t.sent), (t.next = 5), e.text();
                            case 5:
                              (n = t.sent),
                                (r = parseInt(
                                  window.localStorage.getItem("gamePos")
                                )),
                                (o = []),
                                (i = ""),
                                (a = 0),
                                (s = 0);
                            case 11:
                              if (!(s < n.length)) {
                                t.next = 20;
                                break;
                              }
                              if (0 !== a || (" " !== n[s] && "\n" !== n[s])) {
                                t.next = 14;
                                break;
                              }
                              return t.abrupt("continue", 17);
                            case 14:
                              "\n" === n[s] || "\r" === n[s]
                                ? (i += " ")
                                : (i += n[s]),
                                16 == ++a && (o.push(i), (i = ""), (a = 0));
                            case 17:
                              s++, (t.next = 11);
                              break;
                            case 20:
                              for (
                                i.length > 0 && o.push(i), c = r;
                                c < r + 4 && c < o.length;
                                c++
                              )
                                this.strings.push(o[c]);
                              window.localStorage.setItem(
                                "gamePos",
                                parseInt(
                                  window.localStorage.getItem("gamePos")
                                ) + 4
                              );
                            case 23:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
          ]),
          e && On(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e, n, r;
      })();
      function Bn(t) {
        return (
          (Bn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Bn(t)
        );
      }
      function jn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Nn(r.key), r);
        }
      }
      function _n(t, e, n) {
        return (
          (e = Nn(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Nn(t) {
        var e = (function (t, e) {
          if ("object" != Bn(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != Bn(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Bn(e) ? e : e + "";
      }
      var Rn = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              _n(this, "containerElement", void 0),
              _n(this, "pencilBtnElement", void 0),
              _n(this, "eraserBtnElement", void 0),
              _n(this, "clearBtnElement", void 0),
              _n(this, "nextBtnElement", void 0),
              _n(this, "prevBtnElement", void 0),
              _n(this, "feedBackBtnElement", void 0),
              _n(this, "paintingToolContainer", void 0),
              _n(this, "moveContainer", void 0),
              _n(this, "parent", void 0),
              _n(this, "root", void 0),
              (this.containerElement = document.createElement("div"));
          }),
          (e = [
            {
              key: "setDomNode",
              value: function (t, e) {
                var n = this;
                (this.parent = t),
                  (this.root = e),
                  (this.containerElement = document.createElement("div")),
                  this.containerElement.classList.add(
                    "tool-bar",
                    "component-class"
                  ),
                  (this.paintingToolContainer = document.createElement("div")),
                  this.paintingToolContainer.classList.add(
                    "painting-tool-container"
                  ),
                  (this.moveContainer = document.createElement("div")),
                  this.moveContainer.classList.add("move-container"),
                  (this.pencilBtnElement = document.createElement("button")),
                  (this.eraserBtnElement = document.createElement("button")),
                  (this.clearBtnElement = document.createElement("button")),
                  (this.prevBtnElement = document.createElement("button")),
                  (this.nextBtnElement = document.createElement("button")),
                  (this.feedBackBtnElement = document.createElement("button")),
                  (this.pencilBtnElement.id = "brush-btn"),
                  (this.pencilBtnElement.className = "tool-btn"),
                  (this.pencilBtnElement.title = "펜"),
                  (this.eraserBtnElement.id = "eraser-btn"),
                  (this.eraserBtnElement.className = "tool-btn"),
                  (this.eraserBtnElement.title = "지우개"),
                  (this.clearBtnElement.id = "clear-btn"),
                  (this.clearBtnElement.className = "tool-btn"),
                  (this.clearBtnElement.title = "비우기"),
                  this.paintingToolContainer.append(
                    this.pencilBtnElement,
                    this.eraserBtnElement,
                    this.clearBtnElement
                  ),
                  (this.nextBtnElement.id = "next-btn"),
                  (this.nextBtnElement.className = "tool-btn"),
                  (this.nextBtnElement.title = "다음 페이지"),
                  (this.prevBtnElement.id = "prev-btn"),
                  (this.prevBtnElement.className = "tool-btn"),
                  (this.prevBtnElement.title = "이전 페이지"),
                  this.moveContainer.append(
                    this.prevBtnElement,
                    this.nextBtnElement
                  ),
                  (this.feedBackBtnElement.id = "send-btn"),
                  (this.feedBackBtnElement.className = "tool-btn"),
                  (this.feedBackBtnElement.title = "제출하기"),
                  this.pencilBtnElement.addEventListener("click", function () {
                    n.parent.convertToBrush();
                  }),
                  this.eraserBtnElement.addEventListener("click", function () {
                    n.parent.convertToEraser();
                  }),
                  this.clearBtnElement.addEventListener("click", function () {
                    n.parent.clearCanvas();
                  }),
                  this.prevBtnElement.addEventListener("click", function () {
                    n.parent.prevContent();
                  }),
                  this.nextBtnElement.addEventListener("click", function () {
                    n.parent.nextContent();
                  }),
                  this.feedBackBtnElement.addEventListener(
                    "click",
                    function () {
                      n.parent.convertToImage();
                    }
                  ),
                  this.containerElement.append(
                    this.paintingToolContainer,
                    this.moveContainer,
                    this.feedBackBtnElement
                  );
              },
            },
            {
              key: "render",
              value: function () {
                this.setDomNode(),
                  document
                    .getElementById("canvas-wrapper")
                    .appendChild(this.containerElement);
              },
            },
          ]) && jn(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function Dn(t) {
        return (
          (Dn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Dn(t)
        );
      }
      function In(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, qn(r.key), r);
        }
      }
      function Fn(t, e, n) {
        return (
          (e = qn(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function qn(t) {
        var e = (function (t, e) {
          if ("object" != Dn(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != Dn(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Dn(e) ? e : e + "";
      }
      var Un = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Fn(this, "containerElement", void 0),
              Fn(this, "pencilBtnElement", void 0),
              Fn(this, "eraserBtnElement", void 0),
              Fn(this, "clearBtnElement", void 0),
              Fn(this, "feedBackBtnElement", void 0),
              Fn(this, "timerElement", void 0),
              Fn(this, "paintingToolContainer", void 0),
              Fn(this, "parent", void 0),
              Fn(this, "root", void 0),
              (this.containerElement = document.createElement("div"));
          }),
          (e = [
            {
              key: "setDomNode",
              value: function (t, e) {
                var n = this;
                (this.parent = t),
                  (this.root = e),
                  (this.containerElement = document.createElement("div")),
                  this.containerElement.classList.add(
                    "tool-bar",
                    "component-class"
                  ),
                  (this.paintingToolContainer = document.createElement("div")),
                  this.paintingToolContainer.classList.add(
                    "painting-tool-container"
                  ),
                  (this.pencilBtnElement = document.createElement("button")),
                  (this.eraserBtnElement = document.createElement("button")),
                  (this.clearBtnElement = document.createElement("button")),
                  (this.feedBackBtnElement = document.createElement("button")),
                  (this.pencilBtnElement.id = "brush-btn"),
                  (this.pencilBtnElement.className = "tool-btn"),
                  (this.eraserBtnElement.id = "eraser-btn"),
                  (this.eraserBtnElement.className = "tool-btn"),
                  (this.clearBtnElement.id = "clear-btn"),
                  (this.clearBtnElement.className = "tool-btn"),
                  this.paintingToolContainer.append(
                    this.pencilBtnElement,
                    this.eraserBtnElement,
                    this.clearBtnElement
                  ),
                  (this.feedBackBtnElement.id = "send-btn"),
                  (this.feedBackBtnElement.className = "tool-btn"),
                  (this.feedBackBtnElement.textContent = ""),
                  this.pencilBtnElement.addEventListener("click", function () {
                    n.parent.convertToBrush();
                  }),
                  this.eraserBtnElement.addEventListener("click", function () {
                    n.parent.convertToEraser();
                  }),
                  this.clearBtnElement.addEventListener("click", function () {
                    n.parent.clearCanvas();
                  }),
                  this.feedBackBtnElement.addEventListener(
                    "click",
                    function () {
                      n.parent.convertToImage();
                    }
                  ),
                  (this.timerElement = document.createElement("div")),
                  (this.timerElement.id = "timer"),
                  (this.timerElement.className = "timer"),
                  (this.timerElement.textContent = "01:00"),
                  this.containerElement.append(
                    this.paintingToolContainer,
                    this.feedBackBtnElement,
                    this.timerElement
                  ),
                  this.startTimer(60);
              },
            },
            {
              key: "startTimer",
              value: function (t) {
                var e,
                  n,
                  r = this,
                  o = t,
                  i = setInterval(function () {
                    (e = parseInt(o / 60, 10)),
                      (n = parseInt(o % 60, 10)),
                      (e = e < 10 ? "0" + e : e),
                      (n = n < 10 ? "0" + n : n),
                      (r.timerElement.textContent = e + ":" + n),
                      --o < 0 && (clearInterval(i), r.onTimerEnd());
                  }, 1e3);
              },
            },
            { key: "onTimerEnd", value: function () {} },
            {
              key: "render",
              value: function () {
                this.setDomNode(),
                  document
                    .getElementById("canvas-wrapper")
                    .appendChild(this.containerElement);
              },
            },
          ]) && In(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function Mn(t) {
        return (
          (Mn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Mn(t)
        );
      }
      function zn(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (t) {
                if ("string" == typeof t) return Gn(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Gn(t, e)
                    : void 0
                );
              }
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (s = !0), (i = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function Gn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Hn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Wn(r.key), r);
        }
      }
      function Vn(t, e, n) {
        return (
          (e = Wn(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Wn(t) {
        var e = (function (t, e) {
          if ("object" != Mn(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != Mn(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Mn(e) ? e : e + "";
      }
      var Yn = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Vn(this, "canvasFlag", void 0),
              Vn(this, "isDrawing", void 0),
              Vn(this, "containerElement", void 0),
              Vn(this, "canvasElement", void 0),
              Vn(this, "toolBarElement", void 0),
              Vn(this, "root", void 0),
              (this.containerElement = document.createElement("div"));
          }),
          (e = [
            {
              key: "setDomNode",
              value: function (t) {
                (this.canvasFlag = 0),
                  (this.root = t),
                  (this.containerElement = document.createElement("div")),
                  (this.toolBarElement = document.createElement("div")),
                  this.containerElement.classList.add("canvas-page-wrapper"),
                  (this.canvasElement = new Ie()),
                  (this.toolBarElement = new Rn()),
                  this.canvasElement.setDomNode(t),
                  this.toolBarElement.setDomNode(this, t),
                  this.containerElement.appendChild(
                    this.canvasElement.containerElement
                  ),
                  this.containerElement.appendChild(
                    this.toolBarElement.containerElement
                  );
              },
            },
            {
              key: "convertCanvas",
              value: function (t, e) {
                this.removeComponents(),
                  0 == e
                    ? ((this.canvasFlag = 0),
                      (this.canvasElement = new Ie()),
                      (this.toolBarElement = new Rn()),
                      this.canvasElement.setDomNode(t),
                      this.toolBarElement.setDomNode(this, t),
                      this.containerElement.appendChild(
                        this.canvasElement.containerElement
                      ),
                      this.containerElement.appendChild(
                        this.toolBarElement.containerElement
                      ))
                    : 1 == e
                    ? ((this.canvasFlag = 1),
                      (this.canvasElement = new sn()),
                      (this.toolBarElement = new Rn()),
                      this.canvasElement.setDomNode(t),
                      this.toolBarElement.setDomNode(this, t),
                      this.containerElement.appendChild(
                        this.canvasElement.containerElement
                      ),
                      this.containerElement.appendChild(
                        this.toolBarElement.containerElement
                      ))
                    : 2 == e &&
                      ((this.canvasFlag = 2),
                      (this.canvasElement = new An()),
                      (this.toolBarElement = new Un()),
                      this.canvasElement.setDomNode(t),
                      this.toolBarElement.setDomNode(this, t),
                      this.containerElement.appendChild(
                        this.canvasElement.containerElement
                      ),
                      this.containerElement.appendChild(
                        this.toolBarElement.containerElement
                      ));
              },
            },
            {
              key: "convertToBrush",
              value: function () {
                var t,
                  e = zn(this.canvasElement.canvasElements);
                try {
                  for (e.s(); !(t = e.n()).done; ) t.value.convertToBrush();
                } catch (t) {
                  e.e(t);
                } finally {
                  e.f();
                }
              },
            },
            {
              key: "convertToEraser",
              value: function () {
                var t,
                  e = zn(this.canvasElement.canvasElements);
                try {
                  for (e.s(); !(t = e.n()).done; ) t.value.convertToEraser();
                } catch (t) {
                  e.e(t);
                } finally {
                  e.f();
                }
              },
            },
            {
              key: "clearCanvas",
              value: function () {
                var t,
                  e = zn(this.canvasElement.canvasElements);
                try {
                  for (e.s(); !(t = e.n()).done; ) t.value.clearCanvas();
                } catch (t) {
                  e.e(t);
                } finally {
                  e.f();
                }
              },
            },
            {
              key: "prevContent",
              value: function () {
                this.canvasElement.prevContent();
              },
            },
            {
              key: "nextContent",
              value: function () {
                this.canvasElement.nextContent();
              },
            },
            {
              key: "convertToImage",
              value: function () {
                var t = this;
                if (2 == this.canvasFlag) {
                  var e,
                    n = zn(this.canvasElement.canvasElements);
                  try {
                    for (n.s(); !(e = n.n()).done; ) e.value.convertToImage();
                  } catch (t) {
                    n.e(t);
                  } finally {
                    n.f();
                  }
                } else
                  r.fire({
                    title: "피드백을 요청하시겠습니까?",
                    icon: "question",
                    showDenyButton: !0,
                    confirmButtonText: "네",
                    denyButtonText: "아니오",
                    heightAuto: !1,
                  }).then(function (e) {
                    if (e.isConfirmed) {
                      r.fire({
                        title:
                          "요청을 성공적으로 보냈습니다!\n AI가 열심히 분석중이니 잠시만 기다려주세요.😊",
                        icon: "success",
                        heightAuto: !1,
                        showConfirmButton: !1,
                      });
                      var n,
                        o = zn(t.canvasElement.canvasElements);
                      try {
                        for (o.s(); !(n = o.n()).done; )
                          n.value.convertToImage();
                      } catch (t) {
                        o.e(t);
                      } finally {
                        o.f();
                      }
                    } else e.isDenied && r.fire({ title: "피드백 요청을 취소했습니다.", icon: "cancel", heightAuto: !1 });
                  });
              },
            },
            {
              key: "removeComponents",
              value: function () {
                this.containerElement.removeChild(
                  this.canvasElement.containerElement
                ),
                  this.containerElement.removeChild(
                    this.toolBarElement.containerElement
                  );
              },
            },
            {
              key: "render",
              value: function () {
                this.setDomNode(),
                  document
                    .getElementById("right-container")
                    .appendChild(this.containerElement);
              },
            },
          ]) && Hn(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function Kn(t) {
        return (
          (Kn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Kn(t)
        );
      }
      function $n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Jn(r.key), r);
        }
      }
      function Xn(t, e, n) {
        return (
          (e = Jn(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Jn(t) {
        var e = (function (t, e) {
          if ("object" != Kn(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != Kn(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Kn(e) ? e : e + "";
      }
      var Zn = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Xn(this, "containerElement", void 0),
              Xn(this, "fontSelectWrapper", void 0),
              Xn(this, "fontContainer", void 0),
              Xn(this, "previewCanvas", void 0),
              (this.containerElement = document.createElement("div"));
          }),
          (e = [
            {
              key: "setDomNode",
              value: function () {
                (this.containerElement = document.createElement("div")),
                  this.containerElement.classList.add(
                    "component-class",
                    "mypage",
                    "mypage-wrapper"
                  ),
                  (this.fontSelectWrapper = document.createElement("div")),
                  this.fontSelectWrapper.classList.add("font-select-wrapper"),
                  (this.fontContainer = document.createElement("div")),
                  this.fontContainer.classList.add("font-select-container"),
                  this.createFontSelector([
                    "Share",
                    "Share2",
                    "Gulim",
                    "GaramFlower",
                    "Gomshinche",
                    "Ttobagttobag",
                    "Bareunjeongsin",
                    "Okbiche",
                  ]),
                  this.fontSelectWrapper.appendChild(this.fontContainer),
                  this.containerElement.appendChild(this.fontSelectWrapper);
              },
            },
            {
              key: "updateFontPreview",
              value: function (t) {
                var e = "30px " + t;
                console.log(e);
                var n = this.previewCanvas.getContext("2d");
                n.clearRect(
                  0,
                  0,
                  this.previewCanvas.width,
                  this.previewCanvas.height
                ),
                  (n.font = e),
                  (n.fillStyle = "#000"),
                  n.fillText("선택된 폰트입니다.", 10, 50);
              },
            },
            {
              key: "createFontSelector",
              value: function (t) {
                var e = this,
                  n = document.createElement("select");
                n.setAttribute("id", "fontSelect"),
                  n.classList.add("font-select");
                var o = document.createElement("p");
                (o.innerText = "현재 폰트: " + localStorage.getItem("font")),
                  (this.previewCanvas = document.createElement("canvas")),
                  this.previewCanvas.classList.add("font-preview-canvas"),
                  (this.previewCanvas.width = 500),
                  (this.previewCanvas.height = 100);
                var i = document.createElement("button");
                i.classList.add("font-select-button"),
                  (i.innerText = "선택"),
                  n.classList.add("font-select"),
                  t.forEach(function (t) {
                    var e = document.createElement("option");
                    (e.value = t), (e.text = t), n.appendChild(e);
                  });
                var a = document.createElement("h2");
                (a.innerText = "폰트 변경"),
                  n.addEventListener("change", function () {
                    e.updateFontPreview(n.value);
                  }),
                  this.fontContainer.appendChild(a),
                  this.fontContainer.appendChild(o),
                  this.fontContainer.appendChild(n),
                  this.fontContainer.appendChild(i),
                  this.fontContainer.appendChild(this.previewCanvas),
                  (i.onclick = function () {
                    var t = n.value;
                    (o.innerText =
                      "현재 폰트: " + localStorage.getItem("font")),
                      r.fire({
                        position: "top-end",
                        icon: "success",
                        title: "폰트 변경 : ".concat(t),
                        showConfirmButton: !1,
                        heightAuto: !1,
                        timer: 1500,
                      }),
                      window.localStorage.setItem("font", t),
                      me
                        .post(
                          "".concat(
                            "https://barmi-server.onrender.com",
                            "/api/store_fontstyle"
                          ),
                          JSON.stringify({ fontstyle: t }),
                          { headers: { "Content-Type": "application/json" } }
                        )
                        .then(function (t) {
                          console.log(t.data);
                        })
                        .catch(function (t) {
                          console.log(t);
                        });
                  });
              },
            },
            {
              key: "render",
              value: function () {
                this.setDomNode();
              },
            },
          ]),
          e && $n(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function Qn(t) {
        return (
          (Qn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Qn(t)
        );
      }
      function tr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, nr(r.key), r);
        }
      }
      function er(t, e, n) {
        return (
          (e = nr(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function nr(t) {
        var e = (function (t, e) {
          if ("object" != Qn(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != Qn(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Qn(e) ? e : e + "";
      }
      var rr = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              er(this, "status", void 0),
              er(this, "containerElement", void 0),
              er(this, "canvasContainerElement", void 0),
              er(this, "mypageContainerElement", void 0),
              er(this, "root", void 0),
              (this.containerElement = document.createElement("div")),
              (this.canvasContainerElement = new Yn());
          }),
          (e = [
            {
              key: "setDomNode",
              value: function (t) {
                (this.root = t),
                  (this.status = 0),
                  (this.containerElement = document.createElement("div")),
                  (this.containerElement.className = "right-side-wrapper"),
                  (this.canvasContainerElement = new Yn()),
                  (this.canvasContainerElement.id = "canvas-container"),
                  this.canvasContainerElement.setDomNode(),
                  this.containerElement.appendChild(
                    this.canvasContainerElement.containerElement
                  );
              },
            },
            {
              key: "render",
              value: function () {
                this.setDomNode(),
                  document
                    .getElementById("main-page")
                    .appendChild(this.containerElement);
              },
            },
            {
              key: "convertToCanvasBasic",
              value: function () {
                2 == this.status
                  ? (this.removeMyPage(),
                    (this.canvasContainerElement = new Yn()),
                    (this.canvasContainerElement.id = "canvas-container"),
                    this.canvasContainerElement.setDomNode(this.root))
                  : this.removeCanvas(),
                  this.containerElement.appendChild(
                    this.canvasContainerElement.containerElement
                  ),
                  this.canvasContainerElement.convertCanvas(this.root, 0),
                  (this.status = 0);
              },
            },
            {
              key: "convertToCanvasPractice",
              value: function () {
                2 == this.status
                  ? (this.removeMyPage(),
                    (this.canvasContainerElement = new Yn()),
                    (this.canvasContainerElement.id = "canvas-container"),
                    this.canvasContainerElement.setDomNode(this.root))
                  : this.removeCanvas(),
                  this.canvasContainerElement.convertCanvas(this.root, 1),
                  this.containerElement.appendChild(
                    this.canvasContainerElement.containerElement
                  ),
                  (this.status = 1);
              },
            },
            {
              key: "convertToCanvasGame",
              value: function () {
                2 == this.status
                  ? (this.removeMyPage(),
                    (this.canvasContainerElement = new Yn()),
                    (this.canvasContainerElement.id = "canvas-container"),
                    this.canvasContainerElement.setDomNode(this.root))
                  : this.removeCanvas(),
                  this.canvasContainerElement.convertCanvas(this.root, 2),
                  this.containerElement.appendChild(
                    this.canvasContainerElement.containerElement
                  ),
                  (this.status = 3);
              },
            },
            {
              key: "convertToMyPage",
              value: function () {
                2 == this.status ? this.removeMyPage() : this.removeCanvas(),
                  (this.status = 2),
                  (this.mypageContainerElement = new Zn()),
                  this.mypageContainerElement.setDomNode(),
                  this.containerElement.appendChild(
                    this.mypageContainerElement.containerElement
                  );
              },
            },
            {
              key: "removeMyPage",
              value: function () {
                this.containerElement.removeChild(
                  this.mypageContainerElement.containerElement
                );
              },
            },
            {
              key: "removeCanvas",
              value: function () {
                this.containerElement.removeChild(
                  this.canvasContainerElement.containerElement
                );
              },
            },
          ]) && tr(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function or(t) {
        return (
          (or =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          or(t)
        );
      }
      function ir(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, sr(r.key), r);
        }
      }
      function ar(t, e, n) {
        return (
          (e = sr(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function sr(t) {
        var e = (function (t, e) {
          if ("object" != or(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != or(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == or(e) ? e : e + "";
      }
      var cr = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              ar(this, "containerElement", void 0),
              ar(this, "myPageButtonElement", void 0),
              ar(this, "basicPracticeButtonElement", void 0),
              ar(this, "practiceButtonElement", void 0),
              ar(this, "fontGenerateButtonElement", void 0),
              ar(this, "root", void 0),
              ar(this, "parent", void 0),
              (this.containerElement = document.createElement("div")),
              (this.containerElement.id = "menuWrapper"),
              (this.containerElement.className =
                "title-class component-class menu-bar");
          }),
          (e = [
            {
              key: "setDomNode",
              value: function (t, e) {
                var n,
                  r = this;
                (this.root = t),
                  (this.parent = e),
                  (this.myPageButtonElement = document.createElement("button")),
                  (this.basicPracticeButtonElement =
                    document.createElement("button")),
                  (this.practiceButtonElement =
                    document.createElement("button")),
                  (this.myPageButtonElement.className = "button"),
                  (this.myPageButtonElement.innerText = "MyPage"),
                  (this.basicPracticeButtonElement.className = "button"),
                  (this.basicPracticeButtonElement.innerText = "격자 연습장"),
                  (this.practiceButtonElement.className = "button"),
                  (this.practiceButtonElement.innerText = "자유 연습장"),
                  this.myPageButtonElement.addEventListener(
                    "click",
                    function () {
                      r.root.convertToMainPage();
                    }
                  ),
                  this.basicPracticeButtonElement.addEventListener(
                    "click",
                    function () {
                      r.root.convertToCanvasBasic();
                    }
                  ),
                  this.practiceButtonElement.addEventListener(
                    "click",
                    function () {
                      r.root.convertToCanvasPractice();
                    }
                  );
                var o = [
                  this.myPageButtonElement,
                  this.basicPracticeButtonElement,
                  this.practiceButtonElement,
                ];
                (n = this.containerElement).append.apply(n, o);
              },
            },
            {
              key: "render",
              value: function (t, e) {
                this.setDomNode(t), e.appendChild(this.containerElement);
              },
            },
          ]) && ir(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function lr(t) {
        return (
          (lr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          lr(t)
        );
      }
      function ur(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (t) {
                if ("string" == typeof t) return hr(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? hr(t, e)
                    : void 0
                );
              }
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (s = !0), (i = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function hr(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function fr() {
        fr = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          s = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var i = e && e.prototype instanceof y ? e : y,
            a = Object.create(i.prototype),
            s = new A(r || []);
          return o(a, "_invoke", { value: T(t, n, s) }), a;
        }
        function h(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = u;
        var f = "suspendedStart",
          d = "suspendedYield",
          p = "executing",
          m = "completed",
          v = {};
        function y() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(B([])));
        x && x !== n && r.call(x, a) && (b = x);
        var k = (w.prototype = y.prototype = Object.create(b));
        function C(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function n(o, i, a, s) {
            var c = h(t[o], t, i);
            if ("throw" !== c.type) {
              var l = c.arg,
                u = l.value;
              return u && "object" == lr(u) && r.call(u, "__await")
                ? e.resolve(u.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    }
                  )
                : e.resolve(u).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    }
                  );
            }
            s(c.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function T(e, n, r) {
          var o = f;
          return function (i, a) {
            if (o === p) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = O(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === f) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = p;
              var l = h(e, n, r);
              if ("normal" === l.type) {
                if (((o = r.done ? m : d), l.arg === v)) continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((o = m), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function O(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                O(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              v
            );
          var i = h(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function L(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function P(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function A(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(L, this),
            this.reset(!0);
        }
        function B(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(lr(e) + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(k, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(k)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          C(S.prototype),
          l(S.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new S(u(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          C(k),
          l(k, c, "Generator"),
          l(k, a, function () {
            return this;
          }),
          l(k, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = B),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(P),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  s = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    l = r.call(a, "finallyLoc");
                  if (c && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), P(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    P(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: B(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function dr(t, e, n, r, o, i, a) {
        try {
          var s = t[i](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function pr(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              dr(i, r, o, a, s, "next", t);
            }
            function s(t) {
              dr(i, r, o, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function mr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, yr(r.key), r);
        }
      }
      function vr(t, e, n) {
        return (
          (e = yr(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function yr(t) {
        var e = (function (t, e) {
          if ("object" != lr(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != lr(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == lr(e) ? e : e + "";
      }
      var gr = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              vr(this, "containerElement", void 0),
              vr(this, "titleElement", void 0),
              vr(this, "rankListContainer", void 0),
              vr(this, "rankTable", void 0),
              vr(this, "root", void 0),
              (this.containerElement = document.createElement("div")),
              (this.containerElement.id = "leaderboard"),
              (this.titleElement = document.createElement("div"));
          }),
          (e = [
            {
              key: "fetchAndUpdateLeaderboard",
              value:
                ((r = pr(
                  fr().mark(function t() {
                    var e, n;
                    return fr().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                me.get(
                                  "".concat(
                                    "https://barmi-server.onrender.com",
                                    "/api/leaderboard/rows"
                                  )
                                )
                              );
                            case 3:
                              (e = t.sent),
                                (n = e.data.rows),
                                this.updateRankList(n),
                                (t.next = 11);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t0 = t.catch(0)),
                                console.error(
                                  "Error fetching leaderboard rows:",
                                  t.t0
                                );
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[0, 8]]
                    );
                  })
                )),
                function () {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: "updateRankList",
              value:
                ((n = pr(
                  fr().mark(function t(e) {
                    var n, r, o, i, a, s, c, l;
                    return fr().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              n = ur(e);
                              try {
                                for (n.s(); !(r = n.n()).done; )
                                  (o = r.value),
                                    (i = o.username),
                                    (a = o.rank),
                                    ((s =
                                      document.createElement("div")).className =
                                      "rank-row"),
                                    ((c =
                                      document.createElement("div")).className =
                                      "rank"),
                                    (c.textContent = a),
                                    ((l =
                                      document.createElement("div")).className =
                                      "username"),
                                    (l.textContent = i),
                                    s.appendChild(c),
                                    s.appendChild(l),
                                    this.rankTable.appendChild(s);
                              } catch (t) {
                                n.e(t);
                              } finally {
                                n.f();
                              }
                            case 2:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "setDomNode",
              value: function (t) {
                (this.root = t),
                  this.titleElement.classList.add(
                    "title-class",
                    "component-class",
                    "leaderboard-title"
                  ),
                  (this.titleElement.innerText = "leaderboard"),
                  (this.rankListContainer = document.createElement("div")),
                  this.rankListContainer.classList.add("rank-list-container"),
                  (this.rankTable = document.createElement("div")),
                  this.rankTable.classList.add("rank-table"),
                  this.rankListContainer.appendChild(this.rankTable),
                  this.containerElement.appendChild(this.titleElement),
                  this.containerElement.appendChild(this.rankListContainer);
              },
            },
            {
              key: "render",
              value: function (t) {
                this.setDomNode(t),
                  console.log("render called"),
                  this.fetchAndUpdateLeaderboard(),
                  this.root.appendChild(this.containerElement);
              },
            },
          ]),
          e && mr(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e, n, r;
      })();
      function wr(t) {
        return (
          (wr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          wr(t)
        );
      }
      function br(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, xr(r.key), r);
        }
      }
      function Er(t, e, n) {
        return (
          (e = xr(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function xr(t) {
        var e = (function (t, e) {
          if ("object" != wr(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != wr(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == wr(e) ? e : e + "";
      }
      var kr = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Er(this, "status", !0),
              Er(this, "containerElement", void 0),
              Er(this, "logoElement", void 0),
              Er(this, "exceptLogoElement", void 0),
              Er(this, "menuElement", void 0),
              Er(this, "leaderBoardElement", void 0),
              Er(this, "leaderBoardComponent", void 0),
              Er(this, "root", void 0),
              (this.containerElement = document.createElement("div"));
          }),
          (e = [
            {
              key: "setDomNode",
              value: function (t) {
                (this.root = t),
                  (this.containerElement = document.createElement("div")),
                  (this.containerElement.className = "left-side-wrapper"),
                  (this.logoElement = document.createElement("div")),
                  (this.exceptLogoElement = document.createElement("div")),
                  (this.menuElement = document.createElement("div")),
                  (this.menuElement.id = "menuWrapper"),
                  this.logoElement.classList.add("title-class", "logo"),
                  this.exceptLogoElement.classList.add("except-logo"),
                  this.menuElement.classList.add(
                    "title-class",
                    "component-class",
                    "menu-bar"
                  ),
                  (this.logoElement.innerText = "barmi"),
                  this.exceptLogoElement.appendChild(this.logoElement),
                  new cr().render(t, this.exceptLogoElement),
                  (this.leaderBoardComponent = new gr()),
                  this.leaderBoardComponent.render(this.exceptLogoElement),
                  this.containerElement.appendChild(this.exceptLogoElement);
              },
            },
            { key: "render", value: function () {} },
          ]) && br(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function Cr(t) {
        return (
          (Cr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Cr(t)
        );
      }
      function Sr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Or(r.key), r);
        }
      }
      function Tr(t, e, n) {
        return (
          (e = Or(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Or(t) {
        var e = (function (t, e) {
          if ("object" != Cr(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != Cr(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Cr(e) ? e : e + "";
      }
      var Lr = (function () {
        return (
          (t = function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Tr(this, "containerElement", void 0),
              Tr(this, "rightElement", void 0),
              Tr(this, "leftElement", void 0),
              (this.containerElement = document.createElement("div")),
              (this.socket = e);
          }),
          (e = [
            {
              key: "setDomNode",
              value: function () {
                var t;
                (this.flag = !0),
                  (this.containerElement = document.createElement("div")),
                  (this.containerElement.className = "main-page-wrapper"),
                  (this.rightElement = new rr()),
                  (this.leftElement = new kr()),
                  this.rightElement.setDomNode(this),
                  this.leftElement.setDomNode(this);
                var e = [
                  this.leftElement.containerElement,
                  this.rightElement.containerElement,
                ];
                (t = this.containerElement).append.apply(t, e);
              },
            },
            {
              key: "render",
              value: function () {
                this.setDomNode(),
                  document
                    .getElementById("main-page")
                    .appendChild(this.containerElement);
              },
            },
            {
              key: "convertToMainPage",
              value: function () {
                var t = this;
                console.log("mainpageconverter"),
                  "3" == this.rightElement.status
                    ? r
                        .fire({
                          title: "퇴장하시겠습니까?",
                          icon: "warning",
                          showCancelButton: !0,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "퇴장",
                          heightAuto: !1,
                        })
                        .then(function (e) {
                          e.isConfirmed &&
                            (t.socket.emit("game:exit"),
                            t.rightElement.convertToMainPage(t));
                        })
                    : this.rightElement.convertToMyPage(this);
              },
            },
            {
              key: "convertToCanvasBasic",
              value: function () {
                var t = this;
                console.log("basicpageconverter"),
                  "3" == this.rightElement.status
                    ? r
                        .fire({
                          title: "퇴장하시겠습니까?",
                          icon: "warning",
                          showCancelButton: !0,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "퇴장",
                          heightAuto: !1,
                        })
                        .then(function (e) {
                          e.isConfirmed &&
                            (t.socket.emit("game:exit"),
                            t.rightElement.convertToCanvasBasic(t));
                        })
                    : this.rightElement.convertToCanvasBasic(this);
              },
            },
            {
              key: "convertToCanvasPractice",
              value: function () {
                var t = this;
                console.log("practicepageconverter"),
                  "3" == this.rightElement.status
                    ? r
                        .fire({
                          title: "퇴장하시겠습니까?",
                          icon: "warning",
                          showCancelButton: !0,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "퇴장",
                          heightAuto: !1,
                        })
                        .then(function (e) {
                          e.isConfirmed &&
                            (t.socket.emit("game:exit"),
                            t.rightElement.convertToCanvasPractice(t));
                        })
                    : this.rightElement.convertToCanvasPractice(this);
              },
            },
            {
              key: "convertToGame",
              value: function () {
                console.log("gamepageconverter"),
                  this.rightElement.convertToCanvasGame(this);
              },
            },
          ]) && Sr(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function Pr(t) {
        return (
          (Pr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Pr(t)
        );
      }
      function Ar(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, jr(r.key), r);
        }
      }
      function Br(t, e, n) {
        return (
          (e = jr(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function jr(t) {
        var e = (function (t, e) {
          if ("object" != Pr(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != Pr(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Pr(e) ? e : e + "";
      }
      var _r = (function () {
        return (
          (t = function t(e, n) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Br(this, "entirePage", void 0),
              Br(this, "socket", void 0),
              (this.entirePage = e),
              (this.socket = n),
              this.setupSocketListeners();
          }),
          (e = [
            {
              key: "setupSocketListeners",
              value: function () {
                var t = this;
                this.socket.on("lobby", function () {
                  console.log("Connected to server, welcome!");
                }),
                  this.socket.on("game:open", function (e, n) {
                    console.log("arg from server: ", e);
                    var o,
                      i = Number(e),
                      a = setInterval(function () {
                        i -= 100;
                      }, 100);
                    r.fire({
                      title: "게임에 참여하시겠습니까?",
                      html: "<b></b> 초 후에 창이 닫힙니다.",
                      timer: 5e3,
                      timerProgressBar: !0,
                      allowOutsideClick: !1,
                      showConfirmButton: !0,
                      showCancelButton: !0,
                      confirmButtonText: "참가",
                      cancelButtonText: "거절",
                      heightAuto: !1,
                      didOpen: function () {
                        var t = r.getHtmlContainer().querySelector("b");
                        o = setInterval(function () {
                          t.textContent = Math.ceil(r.getTimerLeft() / 1e3);
                        }, 100);
                      },
                      willClose: function () {
                        clearInterval(o);
                      },
                    }).then(function (e) {
                      e.isConfirmed
                        ? (n("yes"),
                          r
                            .fire({
                              title: "게임 준비중",
                              html: "게임이 <b></b> 초 내에 시작합니다.",
                              timer: i,
                              allowOutsideClick: !1,
                              timerProgressBar: !0,
                              heightAuto: !1,
                              didOpen: function () {
                                r.showLoading();
                                var t = r.getPopup().querySelector("b");
                                o = setInterval(function () {
                                  t.textContent = Math.ceil(i / 1e3);
                                }, 100);
                              },
                              willClose: function () {
                                clearInterval(a), clearInterval(o);
                              },
                            })
                            .then(function (e) {
                              e.dismiss === r.DismissReason.timer &&
                                t.entirePage.convertToGame();
                            }),
                          t.socket.once("game:start", function (e) {
                            r.close(), t.entirePage.convertToGame();
                          }))
                        : e.isDenied && n("no");
                    });
                  }),
                  this.socket.on("game:over", function (e) {
                    var n;
                    r.fire({
                      title: "점수 계산중!",
                      timer: 5e3,
                      timerProgressBar: !0,
                      allowOutsideClick: !1,
                      heightAuto: !1,
                      didOpen: function () {
                        r.showLoading();
                        var t = r.getPopup().querySelector("b");
                        n = setInterval(function () {
                          t.textContent = "".concat(r.getTimerLeft());
                        }, 100);
                      },
                      willClose: function () {
                        clearInterval(n);
                      },
                    }).then(function (e) {
                      e.dismiss === r.DismissReason.timer &&
                        (t.entirePage.leftContainer.leaderBoardComponent.fetchAndUpdateLeaderboard(),
                        t.entirePage.convertToBasicPage());
                    });
                  }),
                  this.socket.on("game:over", function (e) {
                    t.entirePage.leftContainer.leaderBoardComponent.fetchAndUpdateLeaderboard();
                  });
              },
            },
          ]) && Ar(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      const Nr = Object.create(null);
      (Nr.open = "0"),
        (Nr.close = "1"),
        (Nr.ping = "2"),
        (Nr.pong = "3"),
        (Nr.message = "4"),
        (Nr.upgrade = "5"),
        (Nr.noop = "6");
      const Rr = Object.create(null);
      Object.keys(Nr).forEach((t) => {
        Rr[Nr[t]] = t;
      });
      const Dr = { type: "error", data: "parser error" },
        Ir =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" ===
              Object.prototype.toString.call(Blob)),
        Fr = "function" == typeof ArrayBuffer,
        qr = (t) =>
          "function" == typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t && t.buffer instanceof ArrayBuffer,
        Ur = ({ type: t, data: e }, n, r) =>
          Ir && e instanceof Blob
            ? n
              ? r(e)
              : Mr(e, r)
            : Fr && (e instanceof ArrayBuffer || qr(e))
            ? n
              ? r(e)
              : Mr(new Blob([e]), r)
            : r(Nr[t] + (e || "")),
        Mr = (t, e) => {
          const n = new FileReader();
          return (
            (n.onload = function () {
              const t = n.result.split(",")[1];
              e("b" + (t || ""));
            }),
            n.readAsDataURL(t)
          );
        };
      function zr(t) {
        return t instanceof Uint8Array
          ? t
          : t instanceof ArrayBuffer
          ? new Uint8Array(t)
          : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
      }
      let Gr;
      const Hr = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
      for (let t = 0; t < 64; t++)
        Hr[
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(
            t
          )
        ] = t;
      const Vr = "function" == typeof ArrayBuffer,
        Wr = (t, e) => {
          if ("string" != typeof t) return { type: "message", data: Kr(t, e) };
          const n = t.charAt(0);
          return "b" === n
            ? { type: "message", data: Yr(t.substring(1), e) }
            : Rr[n]
            ? t.length > 1
              ? { type: Rr[n], data: t.substring(1) }
              : { type: Rr[n] }
            : Dr;
        },
        Yr = (t, e) => {
          if (Vr) {
            const n = ((t) => {
              let e,
                n,
                r,
                o,
                i,
                a = 0.75 * t.length,
                s = t.length,
                c = 0;
              "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
              const l = new ArrayBuffer(a),
                u = new Uint8Array(l);
              for (e = 0; e < s; e += 4)
                (n = Hr[t.charCodeAt(e)]),
                  (r = Hr[t.charCodeAt(e + 1)]),
                  (o = Hr[t.charCodeAt(e + 2)]),
                  (i = Hr[t.charCodeAt(e + 3)]),
                  (u[c++] = (n << 2) | (r >> 4)),
                  (u[c++] = ((15 & r) << 4) | (o >> 2)),
                  (u[c++] = ((3 & o) << 6) | (63 & i));
              return l;
            })(t);
            return Kr(n, e);
          }
          return { base64: !0, data: t };
        },
        Kr = (t, e) =>
          "blob" === e
            ? t instanceof Blob
              ? t
              : new Blob([t])
            : t instanceof ArrayBuffer
            ? t
            : t.buffer,
        $r = String.fromCharCode(30);
      let Xr;
      function Jr(t) {
        return t.reduce((t, e) => t + e.length, 0);
      }
      function Zr(t, e) {
        if (t[0].length === e) return t.shift();
        const n = new Uint8Array(e);
        let r = 0;
        for (let o = 0; o < e; o++)
          (n[o] = t[0][r++]), r === t[0].length && (t.shift(), (r = 0));
        return t.length && r < t[0].length && (t[0] = t[0].slice(r)), n;
      }
      function Qr(t) {
        if (t)
          return (function (t) {
            for (var e in Qr.prototype) t[e] = Qr.prototype[e];
            return t;
          })(t);
      }
      (Qr.prototype.on = Qr.prototype.addEventListener =
        function (t, e) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
            this
          );
        }),
        (Qr.prototype.once = function (t, e) {
          function n() {
            this.off(t, n), e.apply(this, arguments);
          }
          return (n.fn = e), this.on(t, n), this;
        }),
        (Qr.prototype.off =
          Qr.prototype.removeListener =
          Qr.prototype.removeAllListeners =
          Qr.prototype.removeEventListener =
            function (t, e) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this;
              var n,
                r = this._callbacks["$" + t];
              if (!r) return this;
              if (1 == arguments.length)
                return delete this._callbacks["$" + t], this;
              for (var o = 0; o < r.length; o++)
                if ((n = r[o]) === e || n.fn === e) {
                  r.splice(o, 1);
                  break;
                }
              return 0 === r.length && delete this._callbacks["$" + t], this;
            }),
        (Qr.prototype.emit = function (t) {
          this._callbacks = this._callbacks || {};
          for (
            var e = new Array(arguments.length - 1),
              n = this._callbacks["$" + t],
              r = 1;
            r < arguments.length;
            r++
          )
            e[r - 1] = arguments[r];
          if (n) {
            r = 0;
            for (var o = (n = n.slice(0)).length; r < o; ++r)
              n[r].apply(this, e);
          }
          return this;
        }),
        (Qr.prototype.emitReserved = Qr.prototype.emit),
        (Qr.prototype.listeners = function (t) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks["$" + t] || []
          );
        }),
        (Qr.prototype.hasListeners = function (t) {
          return !!this.listeners(t).length;
        });
      const to =
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : Function("return this")();
      function eo(t, ...e) {
        return e.reduce(
          (e, n) => (t.hasOwnProperty(n) && (e[n] = t[n]), e),
          {}
        );
      }
      const no = to.setTimeout,
        ro = to.clearTimeout;
      function oo(t, e) {
        e.useNativeTimers
          ? ((t.setTimeoutFn = no.bind(to)), (t.clearTimeoutFn = ro.bind(to)))
          : ((t.setTimeoutFn = to.setTimeout.bind(to)),
            (t.clearTimeoutFn = to.clearTimeout.bind(to)));
      }
      class io extends Error {
        constructor(t, e, n) {
          super(t),
            (this.description = e),
            (this.context = n),
            (this.type = "TransportError");
        }
      }
      class ao extends Qr {
        constructor(t) {
          super(),
            (this.writable = !1),
            oo(this, t),
            (this.opts = t),
            (this.query = t.query),
            (this.socket = t.socket);
        }
        onError(t, e, n) {
          return super.emitReserved("error", new io(t, e, n)), this;
        }
        open() {
          return (this.readyState = "opening"), this.doOpen(), this;
        }
        close() {
          return (
            ("opening" !== this.readyState && "open" !== this.readyState) ||
              (this.doClose(), this.onClose()),
            this
          );
        }
        send(t) {
          "open" === this.readyState && this.write(t);
        }
        onOpen() {
          (this.readyState = "open"),
            (this.writable = !0),
            super.emitReserved("open");
        }
        onData(t) {
          const e = Wr(t, this.socket.binaryType);
          this.onPacket(e);
        }
        onPacket(t) {
          super.emitReserved("packet", t);
        }
        onClose(t) {
          (this.readyState = "closed"), super.emitReserved("close", t);
        }
        pause(t) {}
        createUri(t, e = {}) {
          return (
            t +
            "://" +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(e)
          );
        }
        _hostname() {
          const t = this.opts.hostname;
          return -1 === t.indexOf(":") ? t : "[" + t + "]";
        }
        _port() {
          return this.opts.port &&
            ((this.opts.secure && Number(443 !== this.opts.port)) ||
              (!this.opts.secure && 80 !== Number(this.opts.port)))
            ? ":" + this.opts.port
            : "";
        }
        _query(t) {
          const e = (function (t) {
            let e = "";
            for (let n in t)
              t.hasOwnProperty(n) &&
                (e.length && (e += "&"),
                (e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n])));
            return e;
          })(t);
          return e.length ? "?" + e : "";
        }
      }
      const so =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
          ),
        co = 64,
        lo = {};
      let uo,
        ho = 0,
        fo = 0;
      function po(t) {
        let e = "";
        do {
          (e = so[t % co] + e), (t = Math.floor(t / co));
        } while (t > 0);
        return e;
      }
      function mo() {
        const t = po(+new Date());
        return t !== uo ? ((ho = 0), (uo = t)) : t + "." + po(ho++);
      }
      for (; fo < co; fo++) lo[so[fo]] = fo;
      let vo = !1;
      try {
        vo =
          "undefined" != typeof XMLHttpRequest &&
          "withCredentials" in new XMLHttpRequest();
      } catch (t) {}
      const yo = vo;
      function go(t) {
        const e = t.xdomain;
        try {
          if ("undefined" != typeof XMLHttpRequest && (!e || yo))
            return new XMLHttpRequest();
        } catch (t) {}
        if (!e)
          try {
            return new to[["Active"].concat("Object").join("X")](
              "Microsoft.XMLHTTP"
            );
          } catch (t) {}
      }
      function wo() {}
      const bo = null != new go({ xdomain: !1 }).responseType;
      class Eo extends Qr {
        constructor(t, e) {
          super(),
            oo(this, e),
            (this.opts = e),
            (this.method = e.method || "GET"),
            (this.uri = t),
            (this.data = void 0 !== e.data ? e.data : null),
            this.create();
        }
        create() {
          var t;
          const e = eo(
            this.opts,
            "agent",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "autoUnref"
          );
          e.xdomain = !!this.opts.xd;
          const n = (this.xhr = new go(e));
          try {
            n.open(this.method, this.uri, !0);
            try {
              if (this.opts.extraHeaders) {
                n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                for (let t in this.opts.extraHeaders)
                  this.opts.extraHeaders.hasOwnProperty(t) &&
                    n.setRequestHeader(t, this.opts.extraHeaders[t]);
              }
            } catch (t) {}
            if ("POST" === this.method)
              try {
                n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (t) {}
            try {
              n.setRequestHeader("Accept", "*/*");
            } catch (t) {}
            null === (t = this.opts.cookieJar) ||
              void 0 === t ||
              t.addCookies(n),
              "withCredentials" in n &&
                (n.withCredentials = this.opts.withCredentials),
              this.opts.requestTimeout &&
                (n.timeout = this.opts.requestTimeout),
              (n.onreadystatechange = () => {
                var t;
                3 === n.readyState &&
                  (null === (t = this.opts.cookieJar) ||
                    void 0 === t ||
                    t.parseCookies(n)),
                  4 === n.readyState &&
                    (200 === n.status || 1223 === n.status
                      ? this.onLoad()
                      : this.setTimeoutFn(() => {
                          this.onError(
                            "number" == typeof n.status ? n.status : 0
                          );
                        }, 0));
              }),
              n.send(this.data);
          } catch (t) {
            return void this.setTimeoutFn(() => {
              this.onError(t);
            }, 0);
          }
          "undefined" != typeof document &&
            ((this.index = Eo.requestsCount++),
            (Eo.requests[this.index] = this));
        }
        onError(t) {
          this.emitReserved("error", t, this.xhr), this.cleanup(!0);
        }
        cleanup(t) {
          if (void 0 !== this.xhr && null !== this.xhr) {
            if (((this.xhr.onreadystatechange = wo), t))
              try {
                this.xhr.abort();
              } catch (t) {}
            "undefined" != typeof document && delete Eo.requests[this.index],
              (this.xhr = null);
          }
        }
        onLoad() {
          const t = this.xhr.responseText;
          null !== t &&
            (this.emitReserved("data", t),
            this.emitReserved("success"),
            this.cleanup());
        }
        abort() {
          this.cleanup();
        }
      }
      function xo() {
        for (let t in Eo.requests)
          Eo.requests.hasOwnProperty(t) && Eo.requests[t].abort();
      }
      (Eo.requestsCount = 0),
        (Eo.requests = {}),
        "undefined" != typeof document &&
          ("function" == typeof attachEvent
            ? attachEvent("onunload", xo)
            : "function" == typeof addEventListener &&
              addEventListener(
                "onpagehide" in to ? "pagehide" : "unload",
                xo,
                !1
              ));
      const ko =
          "function" == typeof Promise && "function" == typeof Promise.resolve
            ? (t) => Promise.resolve().then(t)
            : (t, e) => e(t, 0),
        Co = to.WebSocket || to.MozWebSocket,
        So =
          "undefined" != typeof navigator &&
          "string" == typeof navigator.product &&
          "reactnative" === navigator.product.toLowerCase(),
        To = {
          websocket: class extends ao {
            constructor(t) {
              super(t), (this.supportsBinary = !t.forceBase64);
            }
            get name() {
              return "websocket";
            }
            doOpen() {
              if (!this.check()) return;
              const t = this.uri(),
                e = this.opts.protocols,
                n = So
                  ? {}
                  : eo(
                      this.opts,
                      "agent",
                      "perMessageDeflate",
                      "pfx",
                      "key",
                      "passphrase",
                      "cert",
                      "ca",
                      "ciphers",
                      "rejectUnauthorized",
                      "localAddress",
                      "protocolVersion",
                      "origin",
                      "maxPayload",
                      "family",
                      "checkServerIdentity"
                    );
              this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
              try {
                this.ws = So ? new Co(t, e, n) : e ? new Co(t, e) : new Co(t);
              } catch (t) {
                return this.emitReserved("error", t);
              }
              (this.ws.binaryType = this.socket.binaryType),
                this.addEventListeners();
            }
            addEventListeners() {
              (this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
              }),
                (this.ws.onclose = (t) =>
                  this.onClose({
                    description: "websocket connection closed",
                    context: t,
                  })),
                (this.ws.onmessage = (t) => this.onData(t.data)),
                (this.ws.onerror = (t) => this.onError("websocket error", t));
            }
            write(t) {
              this.writable = !1;
              for (let e = 0; e < t.length; e++) {
                const n = t[e],
                  r = e === t.length - 1;
                Ur(n, this.supportsBinary, (t) => {
                  try {
                    this.ws.send(t);
                  } catch (t) {}
                  r &&
                    ko(() => {
                      (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
                });
              }
            }
            doClose() {
              void 0 !== this.ws && (this.ws.close(), (this.ws = null));
            }
            uri() {
              const t = this.opts.secure ? "wss" : "ws",
                e = this.query || {};
              return (
                this.opts.timestampRequests &&
                  (e[this.opts.timestampParam] = mo()),
                this.supportsBinary || (e.b64 = 1),
                this.createUri(t, e)
              );
            }
            check() {
              return !!Co;
            }
          },
          webtransport: class extends ao {
            get name() {
              return "webtransport";
            }
            doOpen() {
              "function" == typeof WebTransport &&
                ((this.transport = new WebTransport(
                  this.createUri("https"),
                  this.opts.transportOptions[this.name]
                )),
                this.transport.closed
                  .then(() => {
                    this.onClose();
                  })
                  .catch((t) => {
                    this.onError("webtransport error", t);
                  }),
                this.transport.ready.then(() => {
                  this.transport.createBidirectionalStream().then((t) => {
                    const e = (function (t, e) {
                        Xr || (Xr = new TextDecoder());
                        const n = [];
                        let r = 0,
                          o = -1,
                          i = !1;
                        return new TransformStream({
                          transform(a, s) {
                            for (n.push(a); ; ) {
                              if (0 === r) {
                                if (Jr(n) < 1) break;
                                const t = Zr(n, 1);
                                (i = !(128 & ~t[0])),
                                  (o = 127 & t[0]),
                                  (r = o < 126 ? 3 : 126 === o ? 1 : 2);
                              } else if (1 === r) {
                                if (Jr(n) < 2) break;
                                const t = Zr(n, 2);
                                (o = new DataView(
                                  t.buffer,
                                  t.byteOffset,
                                  t.length
                                ).getUint16(0)),
                                  (r = 3);
                              } else if (2 === r) {
                                if (Jr(n) < 8) break;
                                const t = Zr(n, 8),
                                  e = new DataView(
                                    t.buffer,
                                    t.byteOffset,
                                    t.length
                                  ),
                                  i = e.getUint32(0);
                                if (i > Math.pow(2, 21) - 1) {
                                  s.enqueue(Dr);
                                  break;
                                }
                                (o = i * Math.pow(2, 32) + e.getUint32(4)),
                                  (r = 3);
                              } else {
                                if (Jr(n) < o) break;
                                const t = Zr(n, o);
                                s.enqueue(Wr(i ? t : Xr.decode(t), e)), (r = 0);
                              }
                              if (0 === o || o > t) {
                                s.enqueue(Dr);
                                break;
                              }
                            }
                          },
                        });
                      })(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                      n = t.readable.pipeThrough(e).getReader(),
                      r = new TransformStream({
                        transform(t, e) {
                          !(function (t, e) {
                            Ir && t.data instanceof Blob
                              ? t.data.arrayBuffer().then(zr).then(e)
                              : Fr &&
                                (t.data instanceof ArrayBuffer || qr(t.data))
                              ? e(zr(t.data))
                              : Ur(t, !1, (t) => {
                                  Gr || (Gr = new TextEncoder()),
                                    e(Gr.encode(t));
                                });
                          })(t, (n) => {
                            const r = n.length;
                            let o;
                            if (r < 126)
                              (o = new Uint8Array(1)),
                                new DataView(o.buffer).setUint8(0, r);
                            else if (r < 65536) {
                              o = new Uint8Array(3);
                              const t = new DataView(o.buffer);
                              t.setUint8(0, 126), t.setUint16(1, r);
                            } else {
                              o = new Uint8Array(9);
                              const t = new DataView(o.buffer);
                              t.setUint8(0, 127), t.setBigUint64(1, BigInt(r));
                            }
                            t.data &&
                              "string" != typeof t.data &&
                              (o[0] |= 128),
                              e.enqueue(o),
                              e.enqueue(n);
                          });
                        },
                      });
                    r.readable.pipeTo(t.writable),
                      (this.writer = r.writable.getWriter());
                    const o = () => {
                      n.read()
                        .then(({ done: t, value: e }) => {
                          t || (this.onPacket(e), o());
                        })
                        .catch((t) => {});
                    };
                    o();
                    const i = { type: "open" };
                    this.query.sid && (i.data = `{"sid":"${this.query.sid}"}`),
                      this.writer.write(i).then(() => this.onOpen());
                  });
                }));
            }
            write(t) {
              this.writable = !1;
              for (let e = 0; e < t.length; e++) {
                const n = t[e],
                  r = e === t.length - 1;
                this.writer.write(n).then(() => {
                  r &&
                    ko(() => {
                      (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
                });
              }
            }
            doClose() {
              var t;
              null === (t = this.transport) || void 0 === t || t.close();
            }
          },
          polling: class extends ao {
            constructor(t) {
              if (
                (super(t), (this.polling = !1), "undefined" != typeof location)
              ) {
                const e = "https:" === location.protocol;
                let n = location.port;
                n || (n = e ? "443" : "80"),
                  (this.xd =
                    ("undefined" != typeof location &&
                      t.hostname !== location.hostname) ||
                    n !== t.port);
              }
              const e = t && t.forceBase64;
              (this.supportsBinary = bo && !e),
                this.opts.withCredentials && (this.cookieJar = void 0);
            }
            get name() {
              return "polling";
            }
            doOpen() {
              this.poll();
            }
            pause(t) {
              this.readyState = "pausing";
              const e = () => {
                (this.readyState = "paused"), t();
              };
              if (this.polling || !this.writable) {
                let t = 0;
                this.polling &&
                  (t++,
                  this.once("pollComplete", function () {
                    --t || e();
                  })),
                  this.writable ||
                    (t++,
                    this.once("drain", function () {
                      --t || e();
                    }));
              } else e();
            }
            poll() {
              (this.polling = !0), this.doPoll(), this.emitReserved("poll");
            }
            onData(t) {
              ((t, e) => {
                const n = t.split($r),
                  r = [];
                for (let t = 0; t < n.length; t++) {
                  const o = Wr(n[t], e);
                  if ((r.push(o), "error" === o.type)) break;
                }
                return r;
              })(t, this.socket.binaryType).forEach((t) => {
                if (
                  ("opening" === this.readyState &&
                    "open" === t.type &&
                    this.onOpen(),
                  "close" === t.type)
                )
                  return (
                    this.onClose({
                      description: "transport closed by the server",
                    }),
                    !1
                  );
                this.onPacket(t);
              }),
                "closed" !== this.readyState &&
                  ((this.polling = !1),
                  this.emitReserved("pollComplete"),
                  "open" === this.readyState && this.poll());
            }
            doClose() {
              const t = () => {
                this.write([{ type: "close" }]);
              };
              "open" === this.readyState ? t() : this.once("open", t);
            }
            write(t) {
              (this.writable = !1),
                ((t, e) => {
                  const n = t.length,
                    r = new Array(n);
                  let o = 0;
                  t.forEach((t, i) => {
                    Ur(t, !1, (t) => {
                      (r[i] = t), ++o === n && e(r.join($r));
                    });
                  });
                })(t, (t) => {
                  this.doWrite(t, () => {
                    (this.writable = !0), this.emitReserved("drain");
                  });
                });
            }
            uri() {
              const t = this.opts.secure ? "https" : "http",
                e = this.query || {};
              return (
                !1 !== this.opts.timestampRequests &&
                  (e[this.opts.timestampParam] = mo()),
                this.supportsBinary || e.sid || (e.b64 = 1),
                this.createUri(t, e)
              );
            }
            request(t = {}) {
              return (
                Object.assign(
                  t,
                  { xd: this.xd, cookieJar: this.cookieJar },
                  this.opts
                ),
                new Eo(this.uri(), t)
              );
            }
            doWrite(t, e) {
              const n = this.request({ method: "POST", data: t });
              n.on("success", e),
                n.on("error", (t, e) => {
                  this.onError("xhr post error", t, e);
                });
            }
            doPoll() {
              const t = this.request();
              t.on("data", this.onData.bind(this)),
                t.on("error", (t, e) => {
                  this.onError("xhr poll error", t, e);
                }),
                (this.pollXhr = t);
            }
          },
        },
        Oo =
          /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        Lo = [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ];
      function Po(t) {
        if (t.length > 2e3) throw "URI too long";
        const e = t,
          n = t.indexOf("["),
          r = t.indexOf("]");
        -1 != n &&
          -1 != r &&
          (t =
            t.substring(0, n) +
            t.substring(n, r).replace(/:/g, ";") +
            t.substring(r, t.length));
        let o = Oo.exec(t || ""),
          i = {},
          a = 14;
        for (; a--; ) i[Lo[a]] = o[a] || "";
        return (
          -1 != n &&
            -1 != r &&
            ((i.source = e),
            (i.host = i.host
              .substring(1, i.host.length - 1)
              .replace(/;/g, ":")),
            (i.authority = i.authority
              .replace("[", "")
              .replace("]", "")
              .replace(/;/g, ":")),
            (i.ipv6uri = !0)),
          (i.pathNames = (function (t, e) {
            const n = e.replace(/\/{2,9}/g, "/").split("/");
            return (
              ("/" != e.slice(0, 1) && 0 !== e.length) || n.splice(0, 1),
              "/" == e.slice(-1) && n.splice(n.length - 1, 1),
              n
            );
          })(0, i.path)),
          (i.queryKey = (function (t, e) {
            const n = {};
            return (
              e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (t, e, r) {
                e && (n[e] = r);
              }),
              n
            );
          })(0, i.query)),
          i
        );
      }
      class Ao extends Qr {
        constructor(t, e = {}) {
          super(),
            (this.binaryType = "arraybuffer"),
            (this.writeBuffer = []),
            t && "object" == typeof t && ((e = t), (t = null)),
            t
              ? ((t = Po(t)),
                (e.hostname = t.host),
                (e.secure = "https" === t.protocol || "wss" === t.protocol),
                (e.port = t.port),
                t.query && (e.query = t.query))
              : e.host && (e.hostname = Po(e.host).host),
            oo(this, e),
            (this.secure =
              null != e.secure
                ? e.secure
                : "undefined" != typeof location &&
                  "https:" === location.protocol),
            e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
            (this.hostname =
              e.hostname ||
              ("undefined" != typeof location
                ? location.hostname
                : "localhost")),
            (this.port =
              e.port ||
              ("undefined" != typeof location && location.port
                ? location.port
                : this.secure
                ? "443"
                : "80")),
            (this.transports = e.transports || [
              "polling",
              "websocket",
              "webtransport",
            ]),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0),
            (this.opts = Object.assign(
              {
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: { threshold: 1024 },
                transportOptions: {},
                closeOnBeforeunload: !1,
              },
              e
            )),
            (this.opts.path =
              this.opts.path.replace(/\/$/, "") +
              (this.opts.addTrailingSlash ? "/" : "")),
            "string" == typeof this.opts.query &&
              (this.opts.query = (function (t) {
                let e = {},
                  n = t.split("&");
                for (let t = 0, r = n.length; t < r; t++) {
                  let r = n[t].split("=");
                  e[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
                }
                return e;
              })(this.opts.query)),
            (this.id = null),
            (this.upgrades = null),
            (this.pingInterval = null),
            (this.pingTimeout = null),
            (this.pingTimeoutTimer = null),
            "function" == typeof addEventListener &&
              (this.opts.closeOnBeforeunload &&
                ((this.beforeunloadEventListener = () => {
                  this.transport &&
                    (this.transport.removeAllListeners(),
                    this.transport.close());
                }),
                addEventListener(
                  "beforeunload",
                  this.beforeunloadEventListener,
                  !1
                )),
              "localhost" !== this.hostname &&
                ((this.offlineEventListener = () => {
                  this.onClose("transport close", {
                    description: "network connection lost",
                  });
                }),
                addEventListener("offline", this.offlineEventListener, !1))),
            this.open();
        }
        createTransport(t) {
          const e = Object.assign({}, this.opts.query);
          (e.EIO = 4), (e.transport = t), this.id && (e.sid = this.id);
          const n = Object.assign(
            {},
            this.opts,
            {
              query: e,
              socket: this,
              hostname: this.hostname,
              secure: this.secure,
              port: this.port,
            },
            this.opts.transportOptions[t]
          );
          return new To[t](n);
        }
        open() {
          let t;
          if (
            this.opts.rememberUpgrade &&
            Ao.priorWebsocketSuccess &&
            -1 !== this.transports.indexOf("websocket")
          )
            t = "websocket";
          else {
            if (0 === this.transports.length)
              return void this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
              }, 0);
            t = this.transports[0];
          }
          this.readyState = "opening";
          try {
            t = this.createTransport(t);
          } catch (t) {
            return this.transports.shift(), void this.open();
          }
          t.open(), this.setTransport(t);
        }
        setTransport(t) {
          this.transport && this.transport.removeAllListeners(),
            (this.transport = t),
            t
              .on("drain", this.onDrain.bind(this))
              .on("packet", this.onPacket.bind(this))
              .on("error", this.onError.bind(this))
              .on("close", (t) => this.onClose("transport close", t));
        }
        probe(t) {
          let e = this.createTransport(t),
            n = !1;
          Ao.priorWebsocketSuccess = !1;
          const r = () => {
            n ||
              (e.send([{ type: "ping", data: "probe" }]),
              e.once("packet", (t) => {
                if (!n)
                  if ("pong" === t.type && "probe" === t.data) {
                    if (
                      ((this.upgrading = !0),
                      this.emitReserved("upgrading", e),
                      !e)
                    )
                      return;
                    (Ao.priorWebsocketSuccess = "websocket" === e.name),
                      this.transport.pause(() => {
                        n ||
                          ("closed" !== this.readyState &&
                            (l(),
                            this.setTransport(e),
                            e.send([{ type: "upgrade" }]),
                            this.emitReserved("upgrade", e),
                            (e = null),
                            (this.upgrading = !1),
                            this.flush()));
                      });
                  } else {
                    const t = new Error("probe error");
                    (t.transport = e.name),
                      this.emitReserved("upgradeError", t);
                  }
              }));
          };
          function o() {
            n || ((n = !0), l(), e.close(), (e = null));
          }
          const i = (t) => {
            const n = new Error("probe error: " + t);
            (n.transport = e.name), o(), this.emitReserved("upgradeError", n);
          };
          function a() {
            i("transport closed");
          }
          function s() {
            i("socket closed");
          }
          function c(t) {
            e && t.name !== e.name && o();
          }
          const l = () => {
            e.removeListener("open", r),
              e.removeListener("error", i),
              e.removeListener("close", a),
              this.off("close", s),
              this.off("upgrading", c);
          };
          e.once("open", r),
            e.once("error", i),
            e.once("close", a),
            this.once("close", s),
            this.once("upgrading", c),
            -1 !== this.upgrades.indexOf("webtransport") && "webtransport" !== t
              ? this.setTimeoutFn(() => {
                  n || e.open();
                }, 200)
              : e.open();
        }
        onOpen() {
          if (
            ((this.readyState = "open"),
            (Ao.priorWebsocketSuccess = "websocket" === this.transport.name),
            this.emitReserved("open"),
            this.flush(),
            "open" === this.readyState && this.opts.upgrade)
          ) {
            let t = 0;
            const e = this.upgrades.length;
            for (; t < e; t++) this.probe(this.upgrades[t]);
          }
        }
        onPacket(t) {
          if (
            "opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState
          )
            switch (
              (this.emitReserved("packet", t),
              this.emitReserved("heartbeat"),
              this.resetPingTimeout(),
              t.type)
            ) {
              case "open":
                this.onHandshake(JSON.parse(t.data));
                break;
              case "ping":
                this.sendPacket("pong"),
                  this.emitReserved("ping"),
                  this.emitReserved("pong");
                break;
              case "error":
                const e = new Error("server error");
                (e.code = t.data), this.onError(e);
                break;
              case "message":
                this.emitReserved("data", t.data),
                  this.emitReserved("message", t.data);
            }
        }
        onHandshake(t) {
          this.emitReserved("handshake", t),
            (this.id = t.sid),
            (this.transport.query.sid = t.sid),
            (this.upgrades = this.filterUpgrades(t.upgrades)),
            (this.pingInterval = t.pingInterval),
            (this.pingTimeout = t.pingTimeout),
            (this.maxPayload = t.maxPayload),
            this.onOpen(),
            "closed" !== this.readyState && this.resetPingTimeout();
        }
        resetPingTimeout() {
          this.clearTimeoutFn(this.pingTimeoutTimer),
            (this.pingTimeoutTimer = this.setTimeoutFn(() => {
              this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout)),
            this.opts.autoUnref && this.pingTimeoutTimer.unref();
        }
        onDrain() {
          this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            0 === this.writeBuffer.length
              ? this.emitReserved("drain")
              : this.flush();
        }
        flush() {
          if (
            "closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length
          ) {
            const t = this.getWritablePackets();
            this.transport.send(t),
              (this.prevBufferLen = t.length),
              this.emitReserved("flush");
          }
        }
        getWritablePackets() {
          if (
            !(
              this.maxPayload &&
              "polling" === this.transport.name &&
              this.writeBuffer.length > 1
            )
          )
            return this.writeBuffer;
          let t = 1;
          for (let n = 0; n < this.writeBuffer.length; n++) {
            const r = this.writeBuffer[n].data;
            if (
              (r &&
                (t +=
                  "string" == typeof (e = r)
                    ? (function (t) {
                        let e = 0,
                          n = 0;
                        for (let r = 0, o = t.length; r < o; r++)
                          (e = t.charCodeAt(r)),
                            e < 128
                              ? (n += 1)
                              : e < 2048
                              ? (n += 2)
                              : e < 55296 || e >= 57344
                              ? (n += 3)
                              : (r++, (n += 4));
                        return n;
                      })(e)
                    : Math.ceil(1.33 * (e.byteLength || e.size))),
              n > 0 && t > this.maxPayload)
            )
              return this.writeBuffer.slice(0, n);
            t += 2;
          }
          var e;
          return this.writeBuffer;
        }
        write(t, e, n) {
          return this.sendPacket("message", t, e, n), this;
        }
        send(t, e, n) {
          return this.sendPacket("message", t, e, n), this;
        }
        sendPacket(t, e, n, r) {
          if (
            ("function" == typeof e && ((r = e), (e = void 0)),
            "function" == typeof n && ((r = n), (n = null)),
            "closing" === this.readyState || "closed" === this.readyState)
          )
            return;
          (n = n || {}).compress = !1 !== n.compress;
          const o = { type: t, data: e, options: n };
          this.emitReserved("packetCreate", o),
            this.writeBuffer.push(o),
            r && this.once("flush", r),
            this.flush();
        }
        close() {
          const t = () => {
              this.onClose("forced close"), this.transport.close();
            },
            e = () => {
              this.off("upgrade", e), this.off("upgradeError", e), t();
            },
            n = () => {
              this.once("upgrade", e), this.once("upgradeError", e);
            };
          return (
            ("opening" !== this.readyState && "open" !== this.readyState) ||
              ((this.readyState = "closing"),
              this.writeBuffer.length
                ? this.once("drain", () => {
                    this.upgrading ? n() : t();
                  })
                : this.upgrading
                ? n()
                : t()),
            this
          );
        }
        onError(t) {
          (Ao.priorWebsocketSuccess = !1),
            this.emitReserved("error", t),
            this.onClose("transport error", t);
        }
        onClose(t, e) {
          ("opening" !== this.readyState &&
            "open" !== this.readyState &&
            "closing" !== this.readyState) ||
            (this.clearTimeoutFn(this.pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            "function" == typeof removeEventListener &&
              (removeEventListener(
                "beforeunload",
                this.beforeunloadEventListener,
                !1
              ),
              removeEventListener("offline", this.offlineEventListener, !1)),
            (this.readyState = "closed"),
            (this.id = null),
            this.emitReserved("close", t, e),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0));
        }
        filterUpgrades(t) {
          const e = [];
          let n = 0;
          const r = t.length;
          for (; n < r; n++) ~this.transports.indexOf(t[n]) && e.push(t[n]);
          return e;
        }
      }
      (Ao.protocol = 4), Ao.protocol;
      const Bo = "function" == typeof ArrayBuffer,
        jo = (t) =>
          "function" == typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t.buffer instanceof ArrayBuffer,
        _o = Object.prototype.toString,
        No =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" === _o.call(Blob)),
        Ro =
          "function" == typeof File ||
          ("undefined" != typeof File &&
            "[object FileConstructor]" === _o.call(File));
      function Do(t) {
        return (
          (Bo && (t instanceof ArrayBuffer || jo(t))) ||
          (No && t instanceof Blob) ||
          (Ro && t instanceof File)
        );
      }
      function Io(t, e) {
        if (!t || "object" != typeof t) return !1;
        if (Array.isArray(t)) {
          for (let e = 0, n = t.length; e < n; e++) if (Io(t[e])) return !0;
          return !1;
        }
        if (Do(t)) return !0;
        if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length)
          return Io(t.toJSON(), !0);
        for (const e in t)
          if (Object.prototype.hasOwnProperty.call(t, e) && Io(t[e])) return !0;
        return !1;
      }
      function Fo(t) {
        const e = [],
          n = t.data,
          r = t;
        return (
          (r.data = qo(n, e)),
          (r.attachments = e.length),
          { packet: r, buffers: e }
        );
      }
      function qo(t, e) {
        if (!t) return t;
        if (Do(t)) {
          const n = { _placeholder: !0, num: e.length };
          return e.push(t), n;
        }
        if (Array.isArray(t)) {
          const n = new Array(t.length);
          for (let r = 0; r < t.length; r++) n[r] = qo(t[r], e);
          return n;
        }
        if ("object" == typeof t && !(t instanceof Date)) {
          const n = {};
          for (const r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (n[r] = qo(t[r], e));
          return n;
        }
        return t;
      }
      function Uo(t, e) {
        return (t.data = Mo(t.data, e)), delete t.attachments, t;
      }
      function Mo(t, e) {
        if (!t) return t;
        if (t && !0 === t._placeholder) {
          if ("number" == typeof t.num && t.num >= 0 && t.num < e.length)
            return e[t.num];
          throw new Error("illegal attachments");
        }
        if (Array.isArray(t))
          for (let n = 0; n < t.length; n++) t[n] = Mo(t[n], e);
        else if ("object" == typeof t)
          for (const n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (t[n] = Mo(t[n], e));
        return t;
      }
      const zo = [
          "connect",
          "connect_error",
          "disconnect",
          "disconnecting",
          "newListener",
          "removeListener",
        ],
        Go = 5;
      var Ho;
      !(function (t) {
        (t[(t.CONNECT = 0)] = "CONNECT"),
          (t[(t.DISCONNECT = 1)] = "DISCONNECT"),
          (t[(t.EVENT = 2)] = "EVENT"),
          (t[(t.ACK = 3)] = "ACK"),
          (t[(t.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
          (t[(t.BINARY_EVENT = 5)] = "BINARY_EVENT"),
          (t[(t.BINARY_ACK = 6)] = "BINARY_ACK");
      })(Ho || (Ho = {}));
      class Vo {
        constructor(t) {
          this.replacer = t;
        }
        encode(t) {
          return (t.type !== Ho.EVENT && t.type !== Ho.ACK) || !Io(t)
            ? [this.encodeAsString(t)]
            : this.encodeAsBinary({
                type: t.type === Ho.EVENT ? Ho.BINARY_EVENT : Ho.BINARY_ACK,
                nsp: t.nsp,
                data: t.data,
                id: t.id,
              });
        }
        encodeAsString(t) {
          let e = "" + t.type;
          return (
            (t.type !== Ho.BINARY_EVENT && t.type !== Ho.BINARY_ACK) ||
              (e += t.attachments + "-"),
            t.nsp && "/" !== t.nsp && (e += t.nsp + ","),
            null != t.id && (e += t.id),
            null != t.data && (e += JSON.stringify(t.data, this.replacer)),
            e
          );
        }
        encodeAsBinary(t) {
          const e = Fo(t),
            n = this.encodeAsString(e.packet),
            r = e.buffers;
          return r.unshift(n), r;
        }
      }
      function Wo(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      class Yo extends Qr {
        constructor(t) {
          super(), (this.reviver = t);
        }
        add(t) {
          let e;
          if ("string" == typeof t) {
            if (this.reconstructor)
              throw new Error(
                "got plaintext data when reconstructing a packet"
              );
            e = this.decodeString(t);
            const n = e.type === Ho.BINARY_EVENT;
            n || e.type === Ho.BINARY_ACK
              ? ((e.type = n ? Ho.EVENT : Ho.ACK),
                (this.reconstructor = new Ko(e)),
                0 === e.attachments && super.emitReserved("decoded", e))
              : super.emitReserved("decoded", e);
          } else {
            if (!Do(t) && !t.base64) throw new Error("Unknown type: " + t);
            if (!this.reconstructor)
              throw new Error(
                "got binary data when not reconstructing a packet"
              );
            (e = this.reconstructor.takeBinaryData(t)),
              e &&
                ((this.reconstructor = null), super.emitReserved("decoded", e));
          }
        }
        decodeString(t) {
          let e = 0;
          const n = { type: Number(t.charAt(0)) };
          if (void 0 === Ho[n.type])
            throw new Error("unknown packet type " + n.type);
          if (n.type === Ho.BINARY_EVENT || n.type === Ho.BINARY_ACK) {
            const r = e + 1;
            for (; "-" !== t.charAt(++e) && e != t.length; );
            const o = t.substring(r, e);
            if (o != Number(o) || "-" !== t.charAt(e))
              throw new Error("Illegal attachments");
            n.attachments = Number(o);
          }
          if ("/" === t.charAt(e + 1)) {
            const r = e + 1;
            for (; ++e && "," !== t.charAt(e) && e !== t.length; );
            n.nsp = t.substring(r, e);
          } else n.nsp = "/";
          const r = t.charAt(e + 1);
          if ("" !== r && Number(r) == r) {
            const r = e + 1;
            for (; ++e; ) {
              const n = t.charAt(e);
              if (null == n || Number(n) != n) {
                --e;
                break;
              }
              if (e === t.length) break;
            }
            n.id = Number(t.substring(r, e + 1));
          }
          if (t.charAt(++e)) {
            const r = this.tryParse(t.substr(e));
            if (!Yo.isPayloadValid(n.type, r))
              throw new Error("invalid payload");
            n.data = r;
          }
          return n;
        }
        tryParse(t) {
          try {
            return JSON.parse(t, this.reviver);
          } catch (t) {
            return !1;
          }
        }
        static isPayloadValid(t, e) {
          switch (t) {
            case Ho.CONNECT:
              return Wo(e);
            case Ho.DISCONNECT:
              return void 0 === e;
            case Ho.CONNECT_ERROR:
              return "string" == typeof e || Wo(e);
            case Ho.EVENT:
            case Ho.BINARY_EVENT:
              return (
                Array.isArray(e) &&
                ("number" == typeof e[0] ||
                  ("string" == typeof e[0] && -1 === zo.indexOf(e[0])))
              );
            case Ho.ACK:
            case Ho.BINARY_ACK:
              return Array.isArray(e);
          }
        }
        destroy() {
          this.reconstructor &&
            (this.reconstructor.finishedReconstruction(),
            (this.reconstructor = null));
        }
      }
      class Ko {
        constructor(t) {
          (this.packet = t), (this.buffers = []), (this.reconPack = t);
        }
        takeBinaryData(t) {
          if (
            (this.buffers.push(t),
            this.buffers.length === this.reconPack.attachments)
          ) {
            const t = Uo(this.reconPack, this.buffers);
            return this.finishedReconstruction(), t;
          }
          return null;
        }
        finishedReconstruction() {
          (this.reconPack = null), (this.buffers = []);
        }
      }
      function $o(t, e, n) {
        return (
          t.on(e, n),
          function () {
            t.off(e, n);
          }
        );
      }
      const Xo = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1,
      });
      class Jo extends Qr {
        constructor(t, e, n) {
          super(),
            (this.connected = !1),
            (this.recovered = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this._queue = []),
            (this._queueSeq = 0),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = t),
            (this.nsp = e),
            n && n.auth && (this.auth = n.auth),
            (this._opts = Object.assign({}, n)),
            this.io._autoConnect && this.open();
        }
        get disconnected() {
          return !this.connected;
        }
        subEvents() {
          if (this.subs) return;
          const t = this.io;
          this.subs = [
            $o(t, "open", this.onopen.bind(this)),
            $o(t, "packet", this.onpacket.bind(this)),
            $o(t, "error", this.onerror.bind(this)),
            $o(t, "close", this.onclose.bind(this)),
          ];
        }
        get active() {
          return !!this.subs;
        }
        connect() {
          return (
            this.connected ||
              (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              "open" === this.io._readyState && this.onopen()),
            this
          );
        }
        open() {
          return this.connect();
        }
        send(...t) {
          return t.unshift("message"), this.emit.apply(this, t), this;
        }
        emit(t, ...e) {
          if (Xo.hasOwnProperty(t))
            throw new Error('"' + t.toString() + '" is a reserved event name');
          if (
            (e.unshift(t),
            this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
          )
            return this._addToQueue(e), this;
          const n = { type: Ho.EVENT, data: e, options: {} };
          if (
            ((n.options.compress = !1 !== this.flags.compress),
            "function" == typeof e[e.length - 1])
          ) {
            const t = this.ids++,
              r = e.pop();
            this._registerAckCallback(t, r), (n.id = t);
          }
          const r =
            this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
          return (
            (this.flags.volatile && (!r || !this.connected)) ||
              (this.connected
                ? (this.notifyOutgoingListeners(n), this.packet(n))
                : this.sendBuffer.push(n)),
            (this.flags = {}),
            this
          );
        }
        _registerAckCallback(t, e) {
          var n;
          const r =
            null !== (n = this.flags.timeout) && void 0 !== n
              ? n
              : this._opts.ackTimeout;
          if (void 0 === r) return void (this.acks[t] = e);
          const o = this.io.setTimeoutFn(() => {
              delete this.acks[t];
              for (let e = 0; e < this.sendBuffer.length; e++)
                this.sendBuffer[e].id === t && this.sendBuffer.splice(e, 1);
              e.call(this, new Error("operation has timed out"));
            }, r),
            i = (...t) => {
              this.io.clearTimeoutFn(o), e.apply(this, t);
            };
          (i.withError = !0), (this.acks[t] = i);
        }
        emitWithAck(t, ...e) {
          return new Promise((n, r) => {
            const o = (t, e) => (t ? r(t) : n(e));
            (o.withError = !0), e.push(o), this.emit(t, ...e);
          });
        }
        _addToQueue(t) {
          let e;
          "function" == typeof t[t.length - 1] && (e = t.pop());
          const n = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: t,
            flags: Object.assign({ fromQueue: !0 }, this.flags),
          };
          t.push((t, ...r) => {
            if (n === this._queue[0])
              return (
                null !== t
                  ? n.tryCount > this._opts.retries &&
                    (this._queue.shift(), e && e(t))
                  : (this._queue.shift(), e && e(null, ...r)),
                (n.pending = !1),
                this._drainQueue()
              );
          }),
            this._queue.push(n),
            this._drainQueue();
        }
        _drainQueue(t = !1) {
          if (!this.connected || 0 === this._queue.length) return;
          const e = this._queue[0];
          (e.pending && !t) ||
            ((e.pending = !0),
            e.tryCount++,
            (this.flags = e.flags),
            this.emit.apply(this, e.args));
        }
        packet(t) {
          (t.nsp = this.nsp), this.io._packet(t);
        }
        onopen() {
          "function" == typeof this.auth
            ? this.auth((t) => {
                this._sendConnectPacket(t);
              })
            : this._sendConnectPacket(this.auth);
        }
        _sendConnectPacket(t) {
          this.packet({
            type: Ho.CONNECT,
            data: this._pid
              ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
              : t,
          });
        }
        onerror(t) {
          this.connected || this.emitReserved("connect_error", t);
        }
        onclose(t, e) {
          (this.connected = !1),
            delete this.id,
            this.emitReserved("disconnect", t, e),
            this._clearAcks();
        }
        _clearAcks() {
          Object.keys(this.acks).forEach((t) => {
            if (!this.sendBuffer.some((e) => String(e.id) === t)) {
              const e = this.acks[t];
              delete this.acks[t],
                e.withError &&
                  e.call(this, new Error("socket has been disconnected"));
            }
          });
        }
        onpacket(t) {
          if (t.nsp === this.nsp)
            switch (t.type) {
              case Ho.CONNECT:
                t.data && t.data.sid
                  ? this.onconnect(t.data.sid, t.data.pid)
                  : this.emitReserved(
                      "connect_error",
                      new Error(
                        "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                      )
                    );
                break;
              case Ho.EVENT:
              case Ho.BINARY_EVENT:
                this.onevent(t);
                break;
              case Ho.ACK:
              case Ho.BINARY_ACK:
                this.onack(t);
                break;
              case Ho.DISCONNECT:
                this.ondisconnect();
                break;
              case Ho.CONNECT_ERROR:
                this.destroy();
                const e = new Error(t.data.message);
                (e.data = t.data.data), this.emitReserved("connect_error", e);
            }
        }
        onevent(t) {
          const e = t.data || [];
          null != t.id && e.push(this.ack(t.id)),
            this.connected
              ? this.emitEvent(e)
              : this.receiveBuffer.push(Object.freeze(e));
        }
        emitEvent(t) {
          if (this._anyListeners && this._anyListeners.length) {
            const e = this._anyListeners.slice();
            for (const n of e) n.apply(this, t);
          }
          super.emit.apply(this, t),
            this._pid &&
              t.length &&
              "string" == typeof t[t.length - 1] &&
              (this._lastOffset = t[t.length - 1]);
        }
        ack(t) {
          const e = this;
          let n = !1;
          return function (...r) {
            n || ((n = !0), e.packet({ type: Ho.ACK, id: t, data: r }));
          };
        }
        onack(t) {
          const e = this.acks[t.id];
          "function" == typeof e &&
            (delete this.acks[t.id],
            e.withError && t.data.unshift(null),
            e.apply(this, t.data));
        }
        onconnect(t, e) {
          (this.id = t),
            (this.recovered = e && this._pid === e),
            (this._pid = e),
            (this.connected = !0),
            this.emitBuffered(),
            this.emitReserved("connect"),
            this._drainQueue(!0);
        }
        emitBuffered() {
          this.receiveBuffer.forEach((t) => this.emitEvent(t)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((t) => {
              this.notifyOutgoingListeners(t), this.packet(t);
            }),
            (this.sendBuffer = []);
        }
        ondisconnect() {
          this.destroy(), this.onclose("io server disconnect");
        }
        destroy() {
          this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
            this.io._destroy(this);
        }
        disconnect() {
          return (
            this.connected && this.packet({ type: Ho.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
          );
        }
        close() {
          return this.disconnect();
        }
        compress(t) {
          return (this.flags.compress = t), this;
        }
        get volatile() {
          return (this.flags.volatile = !0), this;
        }
        timeout(t) {
          return (this.flags.timeout = t), this;
        }
        onAny(t) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.push(t),
            this
          );
        }
        prependAny(t) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.unshift(t),
            this
          );
        }
        offAny(t) {
          if (!this._anyListeners) return this;
          if (t) {
            const e = this._anyListeners;
            for (let n = 0; n < e.length; n++)
              if (t === e[n]) return e.splice(n, 1), this;
          } else this._anyListeners = [];
          return this;
        }
        listenersAny() {
          return this._anyListeners || [];
        }
        onAnyOutgoing(t) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(t),
            this
          );
        }
        prependAnyOutgoing(t) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(t),
            this
          );
        }
        offAnyOutgoing(t) {
          if (!this._anyOutgoingListeners) return this;
          if (t) {
            const e = this._anyOutgoingListeners;
            for (let n = 0; n < e.length; n++)
              if (t === e[n]) return e.splice(n, 1), this;
          } else this._anyOutgoingListeners = [];
          return this;
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || [];
        }
        notifyOutgoingListeners(t) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const e = this._anyOutgoingListeners.slice();
            for (const n of e) n.apply(this, t.data);
          }
        }
      }
      function Zo(t) {
        (t = t || {}),
          (this.ms = t.min || 100),
          (this.max = t.max || 1e4),
          (this.factor = t.factor || 2),
          (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
          (this.attempts = 0);
      }
      (Zo.prototype.duration = function () {
        var t = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var e = Math.random(),
            n = Math.floor(e * this.jitter * t);
          t = 1 & Math.floor(10 * e) ? t + n : t - n;
        }
        return 0 | Math.min(t, this.max);
      }),
        (Zo.prototype.reset = function () {
          this.attempts = 0;
        }),
        (Zo.prototype.setMin = function (t) {
          this.ms = t;
        }),
        (Zo.prototype.setMax = function (t) {
          this.max = t;
        }),
        (Zo.prototype.setJitter = function (t) {
          this.jitter = t;
        });
      class Qo extends Qr {
        constructor(t, n) {
          var r;
          super(),
            (this.nsps = {}),
            (this.subs = []),
            t && "object" == typeof t && ((n = t), (t = void 0)),
            ((n = n || {}).path = n.path || "/socket.io"),
            (this.opts = n),
            oo(this, n),
            this.reconnection(!1 !== n.reconnection),
            this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(n.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
              null !== (r = n.randomizationFactor) && void 0 !== r ? r : 0.5
            ),
            (this.backoff = new Zo({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor(),
            })),
            this.timeout(null == n.timeout ? 2e4 : n.timeout),
            (this._readyState = "closed"),
            (this.uri = t);
          const o = n.parser || e;
          (this.encoder = new o.Encoder()),
            (this.decoder = new o.Decoder()),
            (this._autoConnect = !1 !== n.autoConnect),
            this._autoConnect && this.open();
        }
        reconnection(t) {
          return arguments.length
            ? ((this._reconnection = !!t), this)
            : this._reconnection;
        }
        reconnectionAttempts(t) {
          return void 0 === t
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = t), this);
        }
        reconnectionDelay(t) {
          var e;
          return void 0 === t
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = t),
              null === (e = this.backoff) || void 0 === e || e.setMin(t),
              this);
        }
        randomizationFactor(t) {
          var e;
          return void 0 === t
            ? this._randomizationFactor
            : ((this._randomizationFactor = t),
              null === (e = this.backoff) || void 0 === e || e.setJitter(t),
              this);
        }
        reconnectionDelayMax(t) {
          var e;
          return void 0 === t
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = t),
              null === (e = this.backoff) || void 0 === e || e.setMax(t),
              this);
        }
        timeout(t) {
          return arguments.length ? ((this._timeout = t), this) : this._timeout;
        }
        maybeReconnectOnOpen() {
          !this._reconnecting &&
            this._reconnection &&
            0 === this.backoff.attempts &&
            this.reconnect();
        }
        open(t) {
          if (~this._readyState.indexOf("open")) return this;
          this.engine = new Ao(this.uri, this.opts);
          const e = this.engine,
            n = this;
          (this._readyState = "opening"), (this.skipReconnect = !1);
          const r = $o(e, "open", function () {
              n.onopen(), t && t();
            }),
            o = (e) => {
              this.cleanup(),
                (this._readyState = "closed"),
                this.emitReserved("error", e),
                t ? t(e) : this.maybeReconnectOnOpen();
            },
            i = $o(e, "error", o);
          if (!1 !== this._timeout) {
            const t = this._timeout,
              n = this.setTimeoutFn(() => {
                r(), o(new Error("timeout")), e.close();
              }, t);
            this.opts.autoUnref && n.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(n);
              });
          }
          return this.subs.push(r), this.subs.push(i), this;
        }
        connect(t) {
          return this.open(t);
        }
        onopen() {
          this.cleanup(),
            (this._readyState = "open"),
            this.emitReserved("open");
          const t = this.engine;
          this.subs.push(
            $o(t, "ping", this.onping.bind(this)),
            $o(t, "data", this.ondata.bind(this)),
            $o(t, "error", this.onerror.bind(this)),
            $o(t, "close", this.onclose.bind(this)),
            $o(this.decoder, "decoded", this.ondecoded.bind(this))
          );
        }
        onping() {
          this.emitReserved("ping");
        }
        ondata(t) {
          try {
            this.decoder.add(t);
          } catch (t) {
            this.onclose("parse error", t);
          }
        }
        ondecoded(t) {
          ko(() => {
            this.emitReserved("packet", t);
          }, this.setTimeoutFn);
        }
        onerror(t) {
          this.emitReserved("error", t);
        }
        socket(t, e) {
          let n = this.nsps[t];
          return (
            n
              ? this._autoConnect && !n.active && n.connect()
              : ((n = new Jo(this, t, e)), (this.nsps[t] = n)),
            n
          );
        }
        _destroy(t) {
          const e = Object.keys(this.nsps);
          for (const t of e) if (this.nsps[t].active) return;
          this._close();
        }
        _packet(t) {
          const e = this.encoder.encode(t);
          for (let n = 0; n < e.length; n++) this.engine.write(e[n], t.options);
        }
        cleanup() {
          this.subs.forEach((t) => t()),
            (this.subs.length = 0),
            this.decoder.destroy();
        }
        _close() {
          (this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose("forced close"),
            this.engine && this.engine.close();
        }
        disconnect() {
          return this._close();
        }
        onclose(t, e) {
          this.cleanup(),
            this.backoff.reset(),
            (this._readyState = "closed"),
            this.emitReserved("close", t, e),
            this._reconnection && !this.skipReconnect && this.reconnect();
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) return this;
          const t = this;
          if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
              this.emitReserved("reconnect_failed"),
              (this._reconnecting = !1);
          else {
            const e = this.backoff.duration();
            this._reconnecting = !0;
            const n = this.setTimeoutFn(() => {
              t.skipReconnect ||
                (this.emitReserved("reconnect_attempt", t.backoff.attempts),
                t.skipReconnect ||
                  t.open((e) => {
                    e
                      ? ((t._reconnecting = !1),
                        t.reconnect(),
                        this.emitReserved("reconnect_error", e))
                      : t.onreconnect();
                  }));
            }, e);
            this.opts.autoUnref && n.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(n);
              });
          }
        }
        onreconnect() {
          const t = this.backoff.attempts;
          (this._reconnecting = !1),
            this.backoff.reset(),
            this.emitReserved("reconnect", t);
        }
      }
      const ti = {};
      function ei(t, e) {
        "object" == typeof t && ((e = t), (t = void 0));
        const n = (function (t, e = "", n) {
            let r = t;
            (n = n || ("undefined" != typeof location && location)),
              null == t && (t = n.protocol + "//" + n.host),
              "string" == typeof t &&
                ("/" === t.charAt(0) &&
                  (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t),
                /^(https?|wss?):\/\//.test(t) ||
                  (t = void 0 !== n ? n.protocol + "//" + t : "https://" + t),
                (r = Po(t))),
              r.port ||
                (/^(http|ws)$/.test(r.protocol)
                  ? (r.port = "80")
                  : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
              (r.path = r.path || "/");
            const o = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
            return (
              (r.id = r.protocol + "://" + o + ":" + r.port + e),
              (r.href =
                r.protocol +
                "://" +
                o +
                (n && n.port === r.port ? "" : ":" + r.port)),
              r
            );
          })(t, (e = e || {}).path || "/socket.io"),
          r = n.source,
          o = n.id,
          i = n.path,
          a = ti[o] && i in ti[o].nsps;
        let s;
        return (
          e.forceNew || e["force new connection"] || !1 === e.multiplex || a
            ? (s = new Qo(r, e))
            : (ti[o] || (ti[o] = new Qo(r, e)), (s = ti[o])),
          n.query && !e.query && (e.query = n.queryKey),
          s.socket(n.path, e)
        );
      }
      Object.assign(ei, { Manager: Qo, Socket: Jo, io: ei, connect: ei }),
        window.localStorage.setItem("basicPos", 0),
        window.localStorage.setItem("practicePos", 0),
        window.localStorage.setItem("gamePos", 0);
      var ni = [
        new FontFace("Share", "url(Fonts/Share.ttf)"),
        new FontFace("Share2", "url(Fonts/Share2.ttf)"),
        new FontFace("Gulim", "url(Fonts/Gulim.ttf)"),
        new FontFace("GaramFlower", "url(Fonts/GaramFlower.ttf)"),
        new FontFace("Gomshinche", "url(Fonts/Gomshinche.ttf)"),
        new FontFace("Ttobagttobag", "url(Fonts/Ttobagttobag.ttf)"),
        new FontFace("Okbiche", "url(Fonts/Okbiche.ttf)"),
        new FontFace("Bareunjeongsin", "url(Fonts/Bareunjeongsin.ttf)"),
      ].map(function (t) {
        return t.load().then(function (t) {
          document.fonts.add(t);
        });
      });
      Promise.all(ni).then(function () {
        var t = ei("".concat("wss://barmi-server.onrender.com")),
          e = new Lr(t);
        new _r(e, t), e.render();
      });
    })();
})();
