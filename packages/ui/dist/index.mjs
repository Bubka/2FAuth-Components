import { ref as k, computed as P, onMounted as j, createElementBlock as n, openBlock as t, normalizeClass as S, Fragment as U, renderList as ee, onUnmounted as te, resolveComponent as se, createBlock as O, withCtx as b, createCommentVNode as g, renderSlot as B, toDisplayString as y, inject as Y, unref as _, createElementVNode as l, createVNode as $, createTextVNode as L, mergeModels as V, useModel as q, watch as ve, resolveDynamicComponent as we, withModifiers as D, toValue as z, useTemplateRef as K, withDirectives as Z, withKeys as H, vShow as ce, nextTick as de, vModelText as be } from "vue";
import { UseColorMode as oe } from "@vueuse/components";
import { NavigationButton as fe } from "@2fauth/formcontrols";
import { LucideMenu as Se, LucideX as xe, Slash as Ce, MonitorCheck as Te, List as Oe, Grid3X3 as Pe, Moon as Be, Sun as Ae, LucideLoaderCircle as W, LucideEye as Ne, LucideEyeOff as Le, LucideSearch as Me } from "lucide-vue-next";
import { useNotification as ze } from "@kyvg/vue3-notification";
import { useClipboard as De } from "@vueuse/core";
import { createI18n as Ve } from "vue-i18n";
const Ee = ["data-is-active"], Ie = {
  __name: "Dots",
  props: {
    stepCount: {
      type: Number,
      default: 10
    },
    initialIndex: {
      type: Number,
      default: null
    },
    period: {
      // Used only to identify the dots component when accessed using refs
      type: Number,
      default: null
    },
    isCondensed: {
      type: Boolean
    }
  },
  setup(s, { expose: p }) {
    const c = s, i = k(0), m = P(() => i.value == -1);
    function v(e) {
      i.value = e < c.stepCount ? e + 1 : 1;
    }
    function u() {
      i.value = -1;
    }
    return j(() => {
      isNaN(c.initialIndex) || v(c.initialIndex);
    }), p({
      turnOn: v,
      turnOff: u,
      props: c
    }), (e, o) => (t(), n("ul", {
      class: S(["dots", { off: m.value, condensed: s.isCondensed }])
    }, [
      (t(!0), n(U, null, ee(s.stepCount, (a) => (t(), n("li", {
        key: a,
        "data-is-active": a == i.value ? !0 : null
      }, null, 8, Ee))), 128))
    ], 2));
  }
}, Fe = {
  __name: "DotsController",
  props: {
    step_count: {
      type: Number,
      default: 10
    },
    period: {
      type: Number,
      default: 30
    },
    generated_at: Number,
    autostart: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["stepping-started", "stepping-ended", "stepped-up"],
  setup(s, { expose: p, emit: c }) {
    const i = s, m = k(null), v = k(null), u = k(null), e = k(null), o = k(null), a = P(() => m.value % i.period), h = P(() => i.period - a.value), r = P(() => i.period / i.step_count), C = P(() => {
      let A = a.value * i.step_count / i.period;
      return Math.floor(A) + 0;
    }), T = c, E = (A = 0) => {
      w(), m.value = A != 0 ? A : i.generated_at, T("stepping-started", C.value), o.value = C.value, v.value = setTimeout(function() {
        w(), T("stepping-ended");
      }, h.value * 1e3);
      let N = Math.ceil(a.value / r.value) * r.value - a.value;
      u.value = setTimeout(function() {
        N > 0 && (o.value += 1, T("stepped-up", o.value)), e.value = setInterval(function() {
          o.value += 1, T("stepped-up", o.value);
        }, r.value * 1e3);
      }, N * 1e3);
    }, w = () => {
      clearTimeout(v.value), clearTimeout(u.value), clearInterval(e.value), o.value = m.value = null;
    };
    return j(() => {
      i.autostart == !0 && E();
    }), te(() => {
      w();
    }), p({
      startStepping: E,
      reset: w,
      props: i
    }), (A, N) => (t(), n("div"));
  }
}, Re = {
  key: 0,
  class: "title has-text-grey-dark"
}, Ge = {
  key: 1,
  id: "punchline",
  class: "block"
}, ys = {
  __name: "FormWrapper",
  props: {
    title: {
      type: String,
      default: ""
    },
    punchline: {
      type: String,
      default: ""
    }
  },
  setup(s) {
    return (p, c) => {
      const i = se("ResponsiveWidthWrapper");
      return t(), O(i, null, {
        default: b(() => [
          s.title ? (t(), n("h1", Re, y(p.$t(s.title)), 1)) : g("", !0),
          s.punchline ? (t(), n("div", Ge, y(p.$t(s.punchline)), 1)) : g("", !0),
          B(p.$slots, "default")
        ]),
        _: 3
      });
    };
  }
}, We = {
  key: 0,
  class: "main"
}, Ke = {
  key: 0,
  class: "columns is-gapless"
}, Ue = { class: "column has-text-centered" }, qe = { class: "field is-grouped" }, He = {
  key: 1,
  class: "content has-text-centered"
}, je = {
  key: 0,
  class: "columns is-gapless"
}, Xe = { class: "column has-text-centered" }, Je = { class: "field is-grouped" }, Qe = { class: "content has-text-centered" }, Ye = { key: 0 }, Ze = {
  key: 0,
  class: "has-text-weight-bold"
}, et = {
  key: 1,
  class: ""
}, tt = { key: 1 }, st = { key: 1 }, ot = { key: 0 }, nt = {
  key: 0,
  class: "release-flag"
}, at = { key: 1 }, it = { key: 2 }, lt = {
  key: 0,
  class: "ml-0 mt-1"
}, rt = { class: "column" }, ut = {
  key: 0,
  class: "column"
}, ct = {
  key: 0,
  class: "release-flag"
}, dt = {
  key: 1,
  class: "column"
}, pt = {
  key: 0,
  class: "release-flag"
}, vt = { class: "mx-2 has-ellipsis" }, me = {
  __name: "VueFooter",
  setup(s) {
    const p = Y("appSettingsStore", {
      latestRelease: null,
      checkForUpdate: !0
    }), c = Y("userStore", {
      isAdmin: !1,
      isAuthenticated: !1,
      email: null,
      preferences: {
        showEmailInFooter: !0
      },
      logout: function() {
      }
    }), i = Y("2fauth", {
      context: "webapp",
      version: "x.y.z",
      config: {
        proxyAuth: !1,
        proxyLogoutUrl: null
      }
    }), m = k(!1), v = P(() => p.latestRelease && p.checkForUpdate), u = P(() => !i.config.proxyAuth || i.config.proxyAuth && i.config.proxyLogoutUrl);
    function e(o) {
      confirm(o) && c.logout();
    }
    return (o, a) => {
      const h = se("router-link");
      return _(i).context == "webext" ? (t(), n("footer", We, [
        o.$slots.default ? (t(), n("div", Ke, [
          l("div", Ue, [
            l("div", qe, [
              B(o.$slots, "default")
            ])
          ])
        ])) : (t(), n("div", He, [
          B(o.$slots, "default")
        ]))
      ])) : _(i).context == "webapp" ? (t(), n("footer", {
        key: 1,
        class: S(["main", { menu: m.value }])
      }, [
        o.$slots.default && !m.value ? (t(), n("div", je, [
          l("div", Xe, [
            l("div", Je, [
              B(o.$slots, "default")
            ])
          ])
        ])) : g("", !0),
        l("div", Qe, [
          B(o.$slots, "subpart", {}, () => [
            o.$route.meta.showAbout === !0 ? (t(), n("div", Ye, [
              o.$route.name != "about" ? (t(), O(h, {
                key: 0,
                id: "lnkAbout",
                to: { name: "about" },
                class: "has-text-grey"
              }, {
                default: b(() => [
                  _(c).isAuthenticated && o.$route.meta.watchedByKicker ? (t(), n("span", Ze, "2FAuth – v" + y(_(i).version), 1)) : (t(), n("span", et, y(o.$t("link.about")), 1))
                ]),
                _: 1
              })) : (t(), n("span", tt, " "))
            ])) : _(c).preferences.showEmailInFooter == !1 ? (t(), n("div", st, [
              $(h, {
                id: "lnkSettings",
                to: { name: "settings.options" },
                class: "has-text-grey"
              }, {
                default: b(() => [
                  L(y(o.$t("link.settings")), 1)
                ]),
                _: 1
              }),
              _(c).isAdmin ? (t(), n("span", ot, [
                a[3] || (a[3] = L(" - ")),
                $(h, {
                  id: "lnkAdmin",
                  to: { name: "admin.appSetup" },
                  class: "has-text-grey"
                }, {
                  default: b(() => [
                    L(y(o.$t("link.admin_panel")), 1),
                    v.value ? (t(), n("span", nt)) : g("", !0)
                  ]),
                  _: 1
                })
              ])) : g("", !0),
              u.value ? (t(), n("span", at, [
                a[4] || (a[4] = L(" - ")),
                l("button", {
                  type: "button",
                  id: "lnkSignOut",
                  class: "button is-text is-like-text has-text-grey",
                  onClick: a[0] || (a[0] = (r) => e(o.$t("confirmation.logout")))
                }, y(o.$t("label.sign_out")), 1)
              ])) : g("", !0)
            ])) : (t(), n("div", it, [
              m.value == !0 ? (t(), n("ul", lt, [
                l("li", rt, [
                  $(h, {
                    id: "lnkSettings",
                    to: { name: "settings.options" }
                  }, {
                    default: b(() => [
                      L(y(o.$t("link.settings")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _(c).isAdmin ? (t(), n("li", ut, [
                  $(h, {
                    id: "lnkAdmin",
                    to: { name: "admin.appSetup" }
                  }, {
                    default: b(() => [
                      v.value ? (t(), n("span", ct)) : g("", !0),
                      L(" " + y(o.$t("link.admin_panel")), 1)
                    ]),
                    _: 1
                  })
                ])) : g("", !0),
                u.value ? (t(), n("li", dt, [
                  $(_(oe), null, {
                    default: b(({ mode: r }) => [
                      l("button", {
                        type: "button",
                        id: "lnkSignOut",
                        class: S(["button is-text is-like-text", r == "dark" ? "has-text-grey-lighter" : "has-text-grey-darker"]),
                        onClick: a[1] || (a[1] = (C) => e(o.$t("confirmation.logout")))
                      }, y(o.$t("label.sign_out")), 3)
                    ]),
                    _: 1
                  })
                ])) : g("", !0)
              ])) : g("", !0),
              l("button", {
                type: "button",
                id: "btnEmailMenu",
                onClick: a[2] || (a[2] = (r) => m.value = !m.value),
                class: "button is-text is-like-text has-text-grey",
                style: { width: "100%" }
              }, [
                _(c).isAdmin && v.value ? (t(), n("span", pt)) : g("", !0),
                l("span", vt, y(_(c).email), 1),
                m.value ? (t(), O(_(xe), {
                  key: 2,
                  class: "mr-2"
                })) : (t(), O(_(Se), {
                  key: 1,
                  class: "mr-2"
                }))
              ])
            ]))
          ])
        ])
      ], 2)) : g("", !0);
    };
  }
}, ft = {
  key: 0,
  id: "groupSwitch",
  class: "container groups"
}, mt = { class: "columns is-centered" }, ht = { class: "column is-one-third-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd" }, yt = { class: "columns is-multiline" }, _t = { class: "column is-full" }, gt = { class: "column is-full" }, kt = { class: "column has-text-centered" }, $t = {
  key: 0,
  class: "column is-full"
}, wt = ["onClick"], bt = {
  key: 0,
  class: "columns is-centered"
}, St = { class: "column has-text-centered" }, _s = {
  __name: "GroupSwitch",
  props: /* @__PURE__ */ V({
    groups: Array
  }, {
    activeGroup: {},
    activeGroupModifiers: {},
    isVisible: {},
    isVisibleModifiers: {}
  }),
  emits: /* @__PURE__ */ V(["active-group-changed"], ["update:activeGroup", "update:isVisible"]),
  setup(s, { emit: p }) {
    const c = q(s, "activeGroup"), i = q(s, "isVisible"), m = p;
    function v(u) {
      i.value = !1, u > -1 ? (c.value = u, m("active-group-changed", u)) : m("show-group-less", u);
    }
    return (u, e) => i.value ? (t(), n("div", ft, [
      l("div", mt, [
        l("div", ht, [
          l("div", yt, [
            $(_(oe), null, {
              default: b(({ mode: o }) => [
                l("div", _t, [
                  l("button", {
                    type: "button",
                    class: S(["button is-fullwidth", { "is-dark has-text-light is-outlined": o == "dark" }]),
                    onClick: e[0] || (e[0] = (a) => v(0))
                  }, y(u.$t("label.all_accounts")), 3)
                ]),
                l("div", gt, [
                  l("button", {
                    type: "button",
                    class: S(["button is-fullwidth", { "is-dark has-text-light is-outlined": o == "dark" }]),
                    onClick: e[1] || (e[1] = (a) => v(-1))
                  }, y(u.$t("label.group_less_accounts")), 3)
                ]),
                l("div", kt, y(u.$t("message.or_filter_by_group")), 1),
                (t(!0), n(U, null, ee(s.groups, (a) => (t(), n(U, {
                  key: a.id
                }, [
                  a.id > 0 ? (t(), n("div", $t, [
                    l("button", {
                      type: "button",
                      class: S(["button is-fullwidth", { "is-dark has-text-light is-outlined": o == "dark" }]),
                      onClick: (h) => v(a.id)
                    }, y(a.name), 11, wt)
                  ])) : g("", !0)
                ], 64))), 128))
              ]),
              _: 1
            })
          ]),
          u.$slots.default ? (t(), n("div", bt, [
            l("div", St, [
              B(u.$slots, "default")
            ])
          ])) : g("", !0)
        ])
      ]),
      $(me, { "show-buttons": !0 }, {
        default: b(() => [
          $(_(fe), {
            action: "close",
            "use-link-tag": !1,
            onClosed: e[2] || (e[2] = (o) => i.value = !1)
          })
        ]),
        _: 1
      })
    ])) : g("", !0);
  }
}, gs = {
  __name: "Kicker",
  props: {
    kickAfter: {
      type: Number,
      required: !0
    }
  },
  emits: ["kicked"],
  setup(s, { emit: p }) {
    const c = p, i = k(["mousedown", "scroll", "keypress"]), m = k(null), v = s;
    ve(
      () => v.kickAfter,
      () => {
        o();
      }
    ), j(() => {
      i.value.forEach(function(h) {
        window.addEventListener(h, o);
      }, this), u();
    }), te(() => {
      i.value.forEach(function(h) {
        window.removeEventListener(h, o);
      }, this), a();
    });
    function u() {
      m.value = setTimeout(e, v.kickAfter * 60 * 1e3);
    }
    async function e() {
      clearTimeout(m.value), c("kicked");
    }
    function o() {
      a(), u();
    }
    function a() {
      clearTimeout(m.value);
    }
    return () => {
    };
  }
}, ks = {
  __name: "LucideGenericIcon",
  props: {
    name: {
      type: String,
      required: !0
    },
    size: Number,
    color: String,
    strokeWidth: Number,
    defaultClass: String
  },
  setup(s) {
    const p = { Sun: Ae, Moon: Be, Grid3X3: Pe, List: Oe, MonitorCheck: Te, Slash: Ce }, c = s, i = P(() => p[c.name]);
    return (m, v) => (t(), O(we(i.value), {
      size: s.size,
      color: s.color,
      "stroke-width": s.strokeWidth,
      "default-class": s.defaultClass
    }, null, 8, ["size", "color", "stroke-width", "default-class"]));
  }
}, xt = () => {
  const { notify: s } = ze();
  return {
    info: (e) => {
      s({ type: "is-info", ...e });
    },
    success: (e) => {
      s({ type: "is-success", ...e });
    },
    warn: (e) => {
      s({ type: "is-warning", ...e });
    },
    alert: (e) => {
      s({ type: "is-danger", ...e });
    },
    action: (e) => {
      s({ type: "is-dark", ...e });
    },
    clear: () => {
      s({ clean: !0 });
    }
  };
}, Ct = {
  key: 0,
  class: "modal-content modal-with-footer"
}, Tt = { class: "modal-slot p-4 has-text-centered" }, Ot = {
  key: 1,
  class: "modal-content modal-with-footer"
}, Pt = { class: "section" }, Bt = { class: "columns is-centered" }, At = { class: "column is-three-quarters" }, Nt = { class: "modal-slot has-text-centered is-shadowless" }, Lt = { key: 1 }, $s = {
  __name: "Modal",
  props: /* @__PURE__ */ V({
    modelValue: Boolean,
    isFullHeight: {
      type: Boolean,
      default: !1
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(s) {
    const p = q(s, "modelValue");
    function c(i) {
      xt().clear(), p.value = !1;
    }
    return (i, m) => {
      const v = se("router-link");
      return t(), n("div", {
        class: S(["modal modal-otp", { "is-active": p.value }])
      }, [
        l("div", {
          class: "modal-background",
          onClick: D(c, ["stop"])
        }),
        s.isFullHeight ? (t(), n("div", Ct, [
          l("div", Tt, [
            B(i.$slots, "default")
          ])
        ])) : (t(), n("div", Ot, [
          l("section", Pt, [
            l("div", Bt, [
              l("div", At, [
                l("div", Nt, [
                  B(i.$slots, "default")
                ])
              ])
            ])
          ])
        ])),
        $(_(me), null, {
          default: b(() => [
            $(_(fe), {
              action: "close",
              useLinkTag: !1,
              onClosed: c
            })
          ]),
          subpart: b(() => [
            i.$route.name != "accounts" ? (t(), O(v, {
              key: 0,
              id: "lnkBackToHome",
              to: { name: "accounts" },
              class: "has-text-grey"
            }, {
              default: b(() => [
                L(y(i.$t("link.back_to_home")), 1)
              ]),
              _: 1
            })) : (t(), n("span", Lt, " "))
          ]),
          _: 1
        })
      ], 2);
    };
  }
}, Mt = Ve({
  legacy: !1,
  locale: "en",
  fallbackLocale: "en",
  globalInjection: !0
});
function pe(s, p, c, i, m) {
  s || (s = "");
  var v = String(z(s));
  const u = () => {
    const o = z(c);
    if (v.length > 0) {
      const a = Math.ceil(o < 1 ? v.length * o : o), h = v.match(new RegExp(`.{1,${a}}`, "g"));
      h && (v = h.join(" "));
    }
  }, e = () => {
    v.length > 0 && !z(m) && (v = v.replace(/[0-9]/g, "●"));
  };
  return z(p) == !0 && u(), z(i) && e(), v;
}
const zt = { key: 0 }, Dt = {
  key: 0,
  class: "spinner-container"
}, Vt = { class: "spinner-wrapper" }, Et = {
  id: "icnSpinnerFull",
  class: "is-size-1 spinner"
}, It = {
  key: 1,
  class: "spinner-overlay-container"
}, Ft = { class: "spinner-wrapper" }, Rt = {
  id: "icnSpinnerFull",
  class: "is-size-1 spinner"
}, Gt = {
  key: 3,
  class: "has-text-centered mt-6"
}, Wt = { id: "icnSpinner" }, Kt = {
  __name: "Spinner",
  props: {
    isVisible: Boolean,
    type: {
      type: String,
      default: "raw",
      required: !0,
      validator(s, p) {
        return ["raw", "list-loading", "fullscreen", "fullscreen-overlay"].includes(s);
      }
    },
    message: {
      type: String,
      default: "[[awaiting_message]]"
    },
    rawSize: {
      type: Number,
      default: 24
    }
  },
  setup(s) {
    return (p, c) => s.isVisible ? (t(), n("div", zt, [
      s.type == "fullscreen" ? (t(), n("div", Dt, [
        l("div", Vt, [
          l("span", Et, [
            $(_(W), { class: "spinning icon-size-3" })
          ]),
          l("span", null, y(p.$t(s.message)), 1)
        ])
      ])) : s.type == "fullscreen-overlay" ? (t(), n("div", It, [
        l("div", Ft, [
          l("span", Rt, [
            $(_(W), { class: "spinning icon-size-3" })
          ]),
          l("span", null, y(p.$t(s.message)), 1)
        ])
      ])) : s.type == "raw" ? (t(), O(_(W), {
        key: 2,
        class: "spinning lucide-default-size",
        size: s.rawSize
      }, null, 8, ["size"])) : s.type == "list-loading" ? (t(), n("div", Gt, [
        l("span", Wt, [
          $(_(W), { class: "spinning icon-size-2" })
        ])
      ])) : g("", !0)
    ])) : g("", !0);
  }
}, Ut = ["src", "alt"], qt = ["title"], Ht = {
  key: 1,
  tabindex: "0",
  class: "otp is-size-1"
}, jt = {
  key: 0,
  class: "mt-3 is-size-4"
}, Xt = ["title"], Jt = { key: 1 }, Qt = {
  key: 1,
  class: "mt-3"
}, ws = {
  __name: "OtpDisplay",
  props: {
    twofaccountService: {
      required: !0
    },
    preferences: {
      type: Object,
      required: !0
    },
    can_showNextOtp: {
      type: Boolean,
      default: !0
    },
    can_autoCloseTimeout: {
      type: Boolean,
      default: !0
    },
    iconPathPrefix: String,
    accountParams: {
      type: Object,
      default(s) {
        return {
          otp_type: "",
          account: "",
          service: "",
          icon: "",
          secret: "",
          digits: null,
          algorithm: "",
          period: null,
          counter: null,
          image: ""
        };
      }
    },
    uri: String
  },
  emits: [
    "please-close-me",
    "please-clear-search",
    "please-update-active-group",
    "kickme",
    "increment-hotp",
    "error",
    "validation-error",
    "otp-copied-to-clipboard"
  ],
  setup(s, { expose: p, emit: c }) {
    const { t: i } = Mt.global, { copy: m, copied: v } = De({ legacy: !0 }), u = c, e = s, o = e.twofaccountService, a = k(null), h = k(null), r = k({
      otp_type: "",
      account: "",
      service: "",
      icon: "",
      secret: "",
      digits: null,
      algorithm: "",
      period: null,
      counter: null,
      image: ""
    }), C = k(!1), T = k(""), E = P(() => pe(
      T,
      e.preferences.formatPassword,
      e.preferences.formatPasswordBy,
      e.preferences.showOtpAsDot,
      C
    )), w = k(""), A = P(() => pe(
      w,
      e.preferences.formatPassword,
      e.preferences.formatPasswordBy,
      e.preferences.showOtpAsDot,
      C
    )), N = k(null), I = k(!1), F = k(!1), ne = k("0"), ae = k(null), ie = K("dotsController"), X = K("dots"), he = K("otpSpanTag");
    ve(
      () => e.accountParams.icon,
      (f) => {
        f != null && (r.value.icon = f);
      }
    );
    const ye = async (f) => {
      if (C.value = !1, r.value.otp_type = e.accountParams.otp_type, r.value.account = e.accountParams.account, r.value.service = e.accountParams.service, r.value.icon = e.accountParams.icon, r.value.secret = e.accountParams.secret, r.value.digits = e.accountParams.digits, r.value.algorithm = e.accountParams.algorithm, r.value.period = e.accountParams.period, r.value.counter = e.accountParams.counter, re(), f) {
        a.value = f;
        const { data: d } = await o.get(a.value);
        r.value.service = d.service, r.value.account = d.account, r.value.icon = d.icon, r.value.otp_type = d.otp_type, G(d.otp_type) && d.counter && (r.value.counter = d.counter);
      } else e.uri ? (h.value = e.uri, r.value.otp_type = e.uri.slice(0, 15).toLowerCase() === "otpauth://totp/" ? "totp" : "hotp") : (e.accountParams.secret ? !R(r.value.otp_type) && !G(r.value.otp_type) && u("error", new Error(i("error.not_a_supported_otp_type"))) : u("error", new Error(i("error.cannot_create_otp_without_secret"))), R(r.value.otp_type) && (I.value = !0));
      try {
        await le(), ge(), e.preferences.getOtpOnRequest && e.can_autoCloseTimeout && parseInt(e.preferences.autoCloseTimeout) > 0 && ke();
      } catch {
        J();
      }
    };
    async function le() {
      e.can_showNextOtp && w.value ? (T.value = w.value, w.value = "", X.value.turnOff(), Q(0)) : re(), await _e().then((f) => {
        let d = f.data;
        T.value = d.password, w.value = e.can_showNextOtp && Object.prototype.hasOwnProperty.call(d, "next_password") ? d.next_password : "", e.preferences.copyOtpOnDisplay && M(d.password), R(d.otp_type) ? (N.value = d.generated_at, r.value.period = d.period, I.value = !0, de().then(() => {
          ie.value.startStepping();
        })) : G(d.otp_type) && (r.value.counter = d.counter, u("increment-hotp", { nextHotpCounter: d.counter, nextUri: d.uri }));
      }).catch((f) => {
        f.response.status === 422 && u("validation-error", f.response);
      }).finally(() => {
        F.value = !1;
      });
    }
    function re() {
      F.value = !0, X.value.turnOff();
    }
    function _e() {
      return a.value ? o.getOtpById(a.value) : h.value ? o.getOtpByUri(h.value) : o.getOtpByParams(r.value);
    }
    function ue() {
      u("please-close-me"), C.value = !1, J();
    }
    function J() {
      var f;
      a.value = r.value.counter = N.value = null, r.value.service = r.value.account = r.value.icon = r.value.otp_type = r.value.secret = "", T.value = "... ...", w.value = "", I.value = !1, clearTimeout(ae.value), (f = ie.value) == null || f.reset();
    }
    function ge() {
      de().then(() => {
        var f;
        (f = he.value) == null || f.focus();
      });
    }
    function M(f, d) {
      if (m(f.replace(/ /g, "")), v) {
        if (e.preferences.kickUserAfter == -1 && (d || !1) === !0 ? u("kickme") : e.preferences.closeOtpOnCopy && (d || !1) === !0 && ue(), e.preferences.clearSearchOnCopy && u("please-clear-search"), e.preferences.viewDefaultGroupOnCopy) {
          const x = e.preferences.defaultGroup == -1 ? e.preferences.activeGroup : e.preferences.defaultGroup;
          u("please-update-active-group", x);
        }
        u("otp-copied-to-clipboard");
      }
    }
    function R(f) {
      return f === "totp" || f === "steamtotp";
    }
    function G(f) {
      return f === "hotp";
    }
    function Q(f) {
      X.value.turnOn(f), ne.value = "is-opacity-" + f;
    }
    p({
      show: ye,
      clearOTP: J
    });
    function ke() {
      let f = parseInt(e.preferences.autoCloseTimeout);
      ae.value = setTimeout(function() {
        ue();
      }, f * 60 * 1e3);
    }
    return (f, d) => (t(), n("div", null, [
      l("figure", {
        class: S(["image is-64x64", { "no-icon": !r.value.icon }]),
        style: { display: "inline-flex" }
      }, [
        r.value.icon ? (t(), n("img", {
          key: 0,
          src: s.iconPathPrefix + "/storage/icons/" + r.value.icon,
          alt: f.$t("alttext.icon_to_illustrate_the_account")
        }, null, 8, Ut)) : g("", !0)
      ], 2),
      $(_(oe), null, {
        default: b(({ mode: x }) => [
          l("p", {
            class: S(["is-size-4 has-ellipsis", x == "dark" ? "has-text-grey-light" : "has-text-grey"])
          }, y(r.value.service), 3),
          l("p", {
            class: S(["is-size-6 has-ellipsis", x == "dark" ? "has-text-grey" : "has-text-grey-light"])
          }, y(r.value.account), 3),
          l("p", null, [
            F.value ? (t(), n("span", Ht, [
              $(Kt, {
                isVisible: F.value,
                type: "raw"
              }, null, 8, ["isVisible"])
            ])) : (t(), n("span", {
              key: 0,
              id: "otp",
              role: "log",
              ref: "otpSpanTag",
              tabindex: "0",
              class: S(["otp is-size-1 is-clickable px-3", x == "dark" ? "has-text-white" : "has-text-grey-dark"]),
              onClick: d[0] || (d[0] = ($e) => M(T.value, !0)),
              onKeyup: d[1] || (d[1] = H(($e) => M(T.value, !0), ["enter"])),
              title: f.$t("tooltip.copy_to_clipboard")
            }, y(E.value), 43, qt))
          ])
        ]),
        _: 1
      }),
      Z($(Ie, { ref: "dots" }, null, 512), [
        [ce, R(r.value.otp_type)]
      ]),
      Z(l("p", null, y(f.$t("field.counter")) + ": " + y(r.value.counter), 513), [
        [ce, G(r.value.otp_type)]
      ]),
      e.can_showNextOtp && e.preferences.showNextOtp ? (t(), n("p", jt, [
        w.value ? (t(), n("span", {
          key: 0,
          class: S(["is-clickable", ne.value]),
          onClick: d[2] || (d[2] = (x) => M(w.value, !0)),
          onKeyup: d[3] || (d[3] = H((x) => M(w.value, !0), ["enter"])),
          title: f.$t("tooltip.copy_next_password")
        }, y(A.value), 43, Xt)) : (t(), n("span", Jt, " "))
      ])) : g("", !0),
      e.preferences.showOtpAsDot && e.preferences.revealDottedOTP ? (t(), n("p", Qt, [
        l("button", {
          type: "button",
          class: "button is-ghost has-text-grey-dark",
          onClick: d[4] || (d[4] = D((x) => C.value = !C.value, ["stop"]))
        }, [
          C.value ? (t(), O(_(Ne), { key: 0 })) : (t(), O(_(Le), { key: 1 }))
        ])
      ])) : g("", !0),
      I.value ? (t(), O(Fe, {
        key: 2,
        period: r.value.period,
        generated_at: N.value,
        autostart: !1,
        onSteppingEnded: d[5] || (d[5] = (x) => le()),
        onSteppingStarted: d[6] || (d[6] = (x) => Q(x)),
        onSteppedUp: d[7] || (d[7] = (x) => Q(x)),
        ref: "dotsController"
      }, null, 8, ["period", "generated_at"])) : g("", !0)
    ]));
  }
}, Yt = {
  key: 0,
  class: "columns is-centered"
}, Zt = { class: "form-column column is-two-thirds-tablet is-half-desktop is-half-widescreen is-one-third-fullhd" }, es = {
  __name: "ResponsiveWidthWrapper",
  props: {
    isActive: {
      type: Boolean,
      default: !0
    }
  },
  setup(s) {
    return (p, c) => s.isActive ? (t(), n("div", Yt, [
      l("div", Zt, [
        B(p.$slots, "default")
      ])
    ])) : B(p.$slots, "default", { key: 1 });
  }
}, ts = {
  role: "search",
  class: "field"
}, ss = { class: "control has-icons-right" }, os = ["aria-label", "title", "placeholder"], ns = { class: "icon is-small is-right" }, as = ["title"], bs = {
  __name: "SearchBox",
  props: /* @__PURE__ */ V({
    hasNoBackground: {
      type: Boolean,
      default: !1
    },
    placeholder: String,
    isSmall: {
      type: Boolean,
      default: !1
    }
  }, {
    keyword: {},
    keywordModifiers: {}
  }),
  emits: /* @__PURE__ */ V(["cleared"], ["update:keyword"]),
  setup(s, { emit: p }) {
    const c = q(s, "keyword"), i = K("searchInput"), m = p;
    j(() => {
      document.addEventListener("keydown", v), document.addEventListener("keypress", e);
    }), te(() => {
      document.removeEventListener("keydown", v), document.removeEventListener("keypress", e);
    });
    function v(o) {
      var a;
      o.key === "f" && (o.ctrlKey || o.metaKey) && (o.preventDefault(), (a = i.value) == null || a.focus());
    }
    function u() {
      c.value = "", m("cleared");
    }
    function e(o) {
      var a, h;
      o.key !== "Enter" && (c.value = o.key, (a = i.value) == null || a.setSelectionRange(1, 1), (h = i.value) == null || h.focus(), o.preventDefault());
    }
    return (o, a) => (t(), n("div", ts, [
      l("div", ss, [
        Z(l("input", {
          "onUpdate:modelValue": a[0] || (a[0] = (h) => c.value = h),
          onKeyup: [
            a[1] || (a[1] = H(D((h) => {
              u(), h.target.blur();
            }, ["prevent"]), ["esc"])),
            a[2] || (a[2] = H(D((h) => h.target.blur(), ["prevent"]), ["enter"]))
          ],
          onKeypress: a[3] || (a[3] = D(() => {
          }, ["stop"])),
          ref: "searchInput",
          id: "txtSearch",
          type: "search",
          tabindex: "1",
          "aria-label": o.$t("label.search"),
          title: o.$t("tooltip.search"),
          placeholder: s.placeholder,
          class: S(["input is-rounded is-search", { "has-no-background": s.hasNoBackground, "is-small": s.isSmall }])
        }, null, 42, os), [
          [be, c.value]
        ]),
        l("span", ns, [
          c.value != "" ? (t(), n("button", {
            key: 0,
            type: "button",
            id: "btnClearSearch",
            tabindex: "1",
            title: o.$t("tooltip.clear_search"),
            class: "clear-selection delete",
            onClick: u
          }, null, 8, as)) : (t(), O(_(Me), {
            key: 1,
            class: "mr-2 icon-size-1"
          }))
        ])
      ])
    ]));
  }
}, is = { class: "options-header" }, ls = { class: "tabs is-centered is-fullwidth" }, rs = { role: "menubar" }, us = ["id", "onClick"], Ss = {
  __name: "TabBar",
  props: {
    tabs: {
      type: Array
    },
    activeTab: {
      type: String,
      default: ""
    },
    isResponsive: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["tab-selected"],
  setup(s, { emit: p }) {
    const c = s, i = p;
    return (m, v) => (t(), n("div", is, [
      $(es, { "is-active": s.isResponsive }, {
        default: b(() => [
          l("nav", ls, [
            l("ul", rs, [
              (t(!0), n(U, null, ee(c.tabs, (u) => (t(), n("li", {
                key: u.view,
                class: S({ "is-active": u.view === c.activeTab })
              }, [
                l("a", {
                  id: u.id,
                  onClick: (e) => i("tab-selected", u.view)
                }, y(m.$t(u.name)), 9, us)
              ], 2))), 128))
            ])
          ])
        ]),
        _: 1
      }, 8, ["is-active"])
    ]));
  }
};
export {
  Ie as Dots,
  Fe as DotsController,
  ys as FormWrapper,
  _s as GroupSwitch,
  gs as Kicker,
  ks as LucideGenericIcon,
  $s as Modal,
  ws as OtpDisplay,
  es as ResponsiveWidthWrapper,
  bs as SearchBox,
  Kt as Spinner,
  Ss as TabBar,
  me as VueFooter,
  xt as useNotify,
  pe as useVisiblePassword
};
