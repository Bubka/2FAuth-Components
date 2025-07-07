import { ref as _, computed as P, onMounted as H, createElementBlock as n, openBlock as s, normalizeClass as x, Fragment as Z, renderList as ee, onUnmounted as te, resolveComponent as se, createBlock as O, withCtx as b, createCommentVNode as k, renderSlot as B, toDisplayString as g, inject as Q, unref as y, createElementVNode as r, createVNode as $, createTextVNode as L, mergeModels as V, useModel as U, watch as ve, resolveDynamicComponent as we, withModifiers as D, toValue as z, useTemplateRef as K, withDirectives as Y, withKeys as q, vShow as ce, nextTick as de, vModelText as be } from "vue";
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
  setup(t, { expose: p }) {
    const u = t, a = _(0), m = P(() => a.value == -1);
    function v(e) {
      a.value = e < u.stepCount ? e + 1 : 1;
    }
    function d() {
      a.value = -1;
    }
    return H(() => {
      isNaN(u.initialIndex) || v(u.initialIndex);
    }), p({
      turnOn: v,
      turnOff: d,
      props: u
    }), (e, o) => (s(), n("ul", {
      class: x(["dots", { off: m.value, condensed: t.isCondensed }])
    }, [
      (s(!0), n(Z, null, ee(t.stepCount, (i) => (s(), n("li", {
        key: i,
        "data-is-active": i == a.value ? !0 : null
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
  setup(t, { expose: p, emit: u }) {
    const a = t, m = _(null), v = _(null), d = _(null), e = _(null), o = _(null), i = P(() => m.value % a.period), h = P(() => a.period - i.value), l = P(() => a.period / a.step_count), C = P(() => {
      let A = i.value * a.step_count / a.period;
      return Math.floor(A) + 0;
    }), T = u, E = (A = 0) => {
      w(), m.value = A != 0 ? A : a.generated_at, T("stepping-started", C.value), o.value = C.value, v.value = setTimeout(function() {
        w(), T("stepping-ended");
      }, h.value * 1e3);
      let N = Math.ceil(i.value / l.value) * l.value - i.value;
      d.value = setTimeout(function() {
        N > 0 && (o.value += 1, T("stepped-up", o.value)), e.value = setInterval(function() {
          o.value += 1, T("stepped-up", o.value);
        }, l.value * 1e3);
      }, N * 1e3);
    }, w = () => {
      clearTimeout(v.value), clearTimeout(d.value), clearInterval(e.value), o.value = m.value = null;
    };
    return H(() => {
      a.autostart == !0 && E();
    }), te(() => {
      w();
    }), p({
      startStepping: E,
      reset: w,
      props: a
    }), (A, N) => (s(), n("div"));
  }
}, Re = {
  key: 0,
  class: "title has-text-grey-dark"
}, Ge = {
  key: 1,
  id: "punchline",
  class: "block"
}, vs = {
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
  setup(t) {
    return (p, u) => {
      const a = se("ResponsiveWidthWrapper");
      return s(), O(a, null, {
        default: b(() => [
          t.title ? (s(), n("h1", Re, g(p.$t(t.title)), 1)) : k("", !0),
          t.punchline ? (s(), n("div", Ge, g(p.$t(t.punchline)), 1)) : k("", !0),
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
  setup(t) {
    const p = Q("appSettingsStore", {
      latestRelease: null,
      checkForUpdate: !0
    }), u = Q("userStore", {
      isAdmin: !1,
      isAuthenticated: !1,
      email: null,
      preferences: {
        showEmailInFooter: !0
      },
      logout: function() {
      }
    }), a = Q("2fauth", {
      context: "webapp",
      version: "x.y.z",
      config: {
        proxyAuth: !1,
        proxyLogoutUrl: null
      }
    }), m = _(!1), v = P(() => p.latestRelease && p.checkForUpdate), d = P(() => !a.config.proxyAuth || a.config.proxyAuth && a.config.proxyLogoutUrl);
    function e(o) {
      confirm(o) && u.logout();
    }
    return (o, i) => {
      const h = se("router-link");
      return y(a).context == "webext" ? (s(), n("footer", We, [
        o.$slots.default ? (s(), n("div", Ke, [
          r("div", Ue, [
            r("div", qe, [
              B(o.$slots, "default")
            ])
          ])
        ])) : (s(), n("div", He, [
          B(o.$slots, "default")
        ]))
      ])) : y(a).context == "webapp" ? (s(), n("footer", {
        key: 1,
        class: x(["main", { menu: m.value }])
      }, [
        o.$slots.default && !m.value ? (s(), n("div", je, [
          r("div", Xe, [
            r("div", Je, [
              B(o.$slots, "default")
            ])
          ])
        ])) : k("", !0),
        r("div", Qe, [
          B(o.$slots, "subpart", {}, () => [
            o.$route.meta.showAbout === !0 ? (s(), n("div", Ye, [
              o.$route.name != "about" ? (s(), O(h, {
                key: 0,
                id: "lnkAbout",
                to: { name: "about" },
                class: "has-text-grey"
              }, {
                default: b(() => [
                  y(u).isAuthenticated && o.$route.meta.watchedByKicker ? (s(), n("span", Ze, "2FAuth – v" + g(y(a).version), 1)) : (s(), n("span", et, g(o.$t("message.about")), 1))
                ]),
                _: 1
              })) : (s(), n("span", tt, " "))
            ])) : y(u).preferences.showEmailInFooter == !1 ? (s(), n("div", st, [
              $(h, {
                id: "lnkSettings",
                to: { name: "settings.options" },
                class: "has-text-grey"
              }, {
                default: b(() => [
                  L(g(o.$t("message.settings.settings")), 1)
                ]),
                _: 1
              }),
              y(u).isAdmin ? (s(), n("span", ot, [
                i[3] || (i[3] = L(" - ")),
                $(h, {
                  id: "lnkAdmin",
                  to: { name: "admin.appSetup" },
                  class: "has-text-grey"
                }, {
                  default: b(() => [
                    L(g(o.$t("message.admin.admin")), 1),
                    v.value ? (s(), n("span", nt)) : k("", !0)
                  ]),
                  _: 1
                })
              ])) : k("", !0),
              d.value ? (s(), n("span", at, [
                i[4] || (i[4] = L(" - ")),
                r("button", {
                  type: "button",
                  id: "lnkSignOut",
                  class: "button is-text is-like-text has-text-grey",
                  onClick: i[0] || (i[0] = (l) => e(o.$t("message.auth.confirm.logout")))
                }, g(o.$t("message.auth.sign_out")), 1)
              ])) : k("", !0)
            ])) : (s(), n("div", it, [
              m.value == !0 ? (s(), n("ul", lt, [
                r("li", rt, [
                  $(h, {
                    id: "lnkSettings",
                    to: { name: "settings.options" }
                  }, {
                    default: b(() => [
                      L(g(o.$t("message.settings.settings")), 1)
                    ]),
                    _: 1
                  })
                ]),
                y(u).isAdmin ? (s(), n("li", ut, [
                  $(h, {
                    id: "lnkAdmin",
                    to: { name: "admin.appSetup" }
                  }, {
                    default: b(() => [
                      v.value ? (s(), n("span", ct)) : k("", !0),
                      L(" " + g(o.$t("message.admin.admin_panel")), 1)
                    ]),
                    _: 1
                  })
                ])) : k("", !0),
                d.value ? (s(), n("li", dt, [
                  $(y(oe), null, {
                    default: b(({ mode: l }) => [
                      r("button", {
                        type: "button",
                        id: "lnkSignOut",
                        class: x(["button is-text is-like-text", l == "dark" ? "has-text-grey-lighter" : "has-text-grey-darker"]),
                        onClick: i[1] || (i[1] = (C) => e(o.$t("message.auth.confirm.logout")))
                      }, g(o.$t("message.auth.sign_out")), 3)
                    ]),
                    _: 1
                  })
                ])) : k("", !0)
              ])) : k("", !0),
              r("button", {
                type: "button",
                id: "btnEmailMenu",
                onClick: i[2] || (i[2] = (l) => m.value = !m.value),
                class: "button is-text is-like-text has-text-grey",
                style: { width: "100%" }
              }, [
                y(u).isAdmin && v.value ? (s(), n("span", pt)) : k("", !0),
                r("span", vt, g(y(u).email), 1),
                m.value ? (s(), O(y(xe), {
                  key: 2,
                  class: "mr-2"
                })) : (s(), O(y(Se), {
                  key: 1,
                  class: "mr-2"
                }))
              ])
            ]))
          ])
        ])
      ], 2)) : k("", !0);
    };
  }
}, ft = {
  key: 0,
  id: "groupSwitch",
  class: "container groups"
}, mt = { class: "columns is-centered" }, ht = { class: "column is-one-third-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd" }, yt = { class: "columns is-multiline" }, gt = ["onClick"], _t = {
  key: 0,
  class: "columns is-centered"
}, kt = { class: "column has-text-centered" }, fs = {
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
  setup(t, { emit: p }) {
    const u = U(t, "activeGroup"), a = U(t, "isVisible"), m = p;
    function v(d) {
      u.value = d, a.value = !1, m("active-group-changed", d);
    }
    return (d, e) => a.value ? (s(), n("div", ft, [
      r("div", mt, [
        r("div", ht, [
          r("div", yt, [
            $(y(oe), null, {
              default: b(({ mode: o }) => [
                (s(!0), n(Z, null, ee(t.groups, (i) => (s(), n("div", {
                  class: "column is-full",
                  key: i.id
                }, [
                  r("button", {
                    type: "button",
                    class: x(["button is-fullwidth", { "is-dark has-text-light is-outlined": o == "dark" }]),
                    onClick: (h) => v(i.id)
                  }, g(i.id == 0 ? d.$t("message.all") : i.name), 11, gt)
                ]))), 128))
              ]),
              _: 1
            })
          ]),
          d.$slots.default ? (s(), n("div", _t, [
            r("div", kt, [
              B(d.$slots, "default")
            ])
          ])) : k("", !0)
        ])
      ]),
      $(me, { "show-buttons": !0 }, {
        default: b(() => [
          $(y(fe), {
            action: "close",
            "use-link-tag": !1,
            onClosed: e[0] || (e[0] = (o) => a.value = !1)
          })
        ]),
        _: 1
      })
    ])) : k("", !0);
  }
}, ms = {
  __name: "Kicker",
  props: {
    kickAfter: {
      type: Number,
      required: !0
    }
  },
  emits: ["kicked"],
  setup(t, { emit: p }) {
    const u = p, a = _(["mousedown", "scroll", "keypress"]), m = _(null), v = t;
    ve(
      () => v.kickAfter,
      () => {
        o();
      }
    ), H(() => {
      a.value.forEach(function(h) {
        window.addEventListener(h, o);
      }, this), d();
    }), te(() => {
      a.value.forEach(function(h) {
        window.removeEventListener(h, o);
      }, this), i();
    });
    function d() {
      m.value = setTimeout(e, v.kickAfter * 60 * 1e3);
    }
    async function e() {
      clearTimeout(m.value), u("kicked");
    }
    function o() {
      i(), d();
    }
    function i() {
      clearTimeout(m.value);
    }
    return () => {
    };
  }
}, hs = {
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
  setup(t) {
    const p = { Sun: Ae, Moon: Be, Grid3X3: Pe, List: Oe, MonitorCheck: Te, Slash: Ce }, u = t, a = P(() => p[u.name]);
    return (m, v) => (s(), O(we(a.value), {
      size: t.size,
      color: t.color,
      "stroke-width": t.strokeWidth,
      "default-class": t.defaultClass
    }, null, 8, ["size", "color", "stroke-width", "default-class"]));
  }
}, $t = () => {
  const { notify: t } = ze();
  return {
    info: (e) => {
      t({ type: "is-info", ...e });
    },
    success: (e) => {
      t({ type: "is-success", ...e });
    },
    warn: (e) => {
      t({ type: "is-warning", ...e });
    },
    alert: (e) => {
      t({ type: "is-danger", ...e });
    },
    action: (e) => {
      t({ type: "is-dark", ...e });
    },
    clear: () => {
      t({ clean: !0 });
    }
  };
}, wt = {
  key: 0,
  class: "modal-content modal-with-footer"
}, bt = { class: "modal-slot p-4 has-text-centered" }, St = {
  key: 1,
  class: "modal-content modal-with-footer"
}, xt = { class: "section" }, Ct = { class: "columns is-centered" }, Tt = { class: "column is-three-quarters" }, Ot = { class: "modal-slot has-text-centered is-shadowless" }, Pt = { key: 1 }, ys = {
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
  setup(t) {
    const p = U(t, "modelValue");
    function u(a) {
      $t().clear(), p.value = !1;
    }
    return (a, m) => {
      const v = se("router-link");
      return s(), n("div", {
        class: x(["modal modal-otp", { "is-active": p.value }])
      }, [
        r("div", {
          class: "modal-background",
          onClick: D(u, ["stop"])
        }),
        t.isFullHeight ? (s(), n("div", wt, [
          r("div", bt, [
            B(a.$slots, "default")
          ])
        ])) : (s(), n("div", St, [
          r("section", xt, [
            r("div", Ct, [
              r("div", Tt, [
                r("div", Ot, [
                  B(a.$slots, "default")
                ])
              ])
            ])
          ])
        ])),
        $(y(me), null, {
          default: b(() => [
            $(y(fe), {
              action: "close",
              useLinkTag: !1,
              onClosed: u
            })
          ]),
          subpart: b(() => [
            a.$route.name != "accounts" ? (s(), O(v, {
              key: 0,
              id: "lnkBackToHome",
              to: { name: "accounts" },
              class: "has-text-grey"
            }, {
              default: b(() => [
                L(g(a.$t("message.back_to_home")), 1)
              ]),
              _: 1
            })) : (s(), n("span", Pt, " "))
          ]),
          _: 1
        })
      ], 2);
    };
  }
}, Bt = Ve({
  legacy: !1,
  locale: "en",
  fallbackLocale: "en",
  globalInjection: !0
});
function pe(t, p, u, a, m) {
  t || (t = "");
  var v = String(z(t));
  const d = () => {
    const o = z(u);
    if (v.length > 0) {
      const i = Math.ceil(o < 1 ? v.length * o : o), h = v.match(new RegExp(`.{1,${i}}`, "g"));
      h && (v = h.join(" "));
    }
  }, e = () => {
    v.length > 0 && !z(m) && (v = v.replace(/[0-9]/g, "●"));
  };
  return z(p) == !0 && d(), z(a) && e(), v;
}
const At = { key: 0 }, Nt = {
  key: 0,
  class: "spinner-container"
}, Lt = { class: "spinner-wrapper" }, Mt = {
  id: "icnSpinnerFull",
  class: "is-size-1 spinner"
}, zt = {
  key: 1,
  class: "spinner-overlay-container"
}, Dt = { class: "spinner-wrapper" }, Vt = {
  id: "icnSpinnerFull",
  class: "is-size-1 spinner"
}, Et = {
  key: 3,
  class: "has-text-centered mt-6"
}, It = { id: "icnSpinner" }, Ft = {
  __name: "Spinner",
  props: {
    isVisible: Boolean,
    type: {
      type: String,
      default: "raw",
      required: !0,
      validator(t, p) {
        return ["raw", "list-loading", "fullscreen", "fullscreen-overlay"].includes(t);
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
  setup(t) {
    return (p, u) => t.isVisible ? (s(), n("div", At, [
      t.type == "fullscreen" ? (s(), n("div", Nt, [
        r("div", Lt, [
          r("span", Mt, [
            $(y(W), { class: "spinning icon-size-3" })
          ]),
          r("span", null, g(p.$t(t.message)), 1)
        ])
      ])) : t.type == "fullscreen-overlay" ? (s(), n("div", zt, [
        r("div", Dt, [
          r("span", Vt, [
            $(y(W), { class: "spinning icon-size-3" })
          ]),
          r("span", null, g(p.$t(t.message)), 1)
        ])
      ])) : t.type == "raw" ? (s(), O(y(W), {
        key: 2,
        class: "spinning lucide-default-size",
        size: t.rawSize
      }, null, 8, ["size"])) : t.type == "list-loading" ? (s(), n("div", Et, [
        r("span", It, [
          $(y(W), { class: "spinning icon-size-2" })
        ])
      ])) : k("", !0)
    ])) : k("", !0);
  }
}, Rt = ["src", "alt"], Gt = ["title"], Wt = {
  key: 1,
  tabindex: "0",
  class: "otp is-size-1"
}, Kt = {
  key: 0,
  class: "mt-3 is-size-4"
}, Ut = ["title"], qt = { key: 1 }, Ht = {
  key: 1,
  class: "mt-3"
}, gs = {
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
      default(t) {
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
  setup(t, { expose: p, emit: u }) {
    const { t: a } = Bt.global, { copy: m, copied: v } = De({ legacy: !0 }), d = u, e = t, o = e.twofaccountService, i = _(null), h = _(null), l = _({
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
    }), C = _(!1), T = _(""), E = P(() => pe(
      T,
      e.preferences.formatPassword,
      e.preferences.formatPasswordBy,
      e.preferences.showOtpAsDot,
      C
    )), w = _(""), A = P(() => pe(
      w,
      e.preferences.formatPassword,
      e.preferences.formatPasswordBy,
      e.preferences.showOtpAsDot,
      C
    )), N = _(null), I = _(!1), F = _(!1), ne = _("0"), ae = _(null), ie = K("dotsController"), j = K("dots"), he = K("otpSpanTag");
    ve(
      () => e.icon,
      (f) => {
        f != null && (l.value.icon = f);
      }
    );
    const ye = async (f) => {
      if (C.value = !1, l.value.otp_type = e.accountParams.otp_type, l.value.account = e.accountParams.account, l.value.service = e.accountParams.service, l.value.icon = e.accountParams.icon, l.value.secret = e.accountParams.secret, l.value.digits = e.accountParams.digits, l.value.algorithm = e.accountParams.algorithm, l.value.period = e.accountParams.period, l.value.counter = e.accountParams.counter, re(), f) {
        i.value = f;
        const { data: c } = await o.get(i.value);
        l.value.service = c.service, l.value.account = c.account, l.value.icon = c.icon, l.value.otp_type = c.otp_type, G(c.otp_type) && c.counter && (l.value.counter = c.counter);
      } else e.uri ? (h.value = e.uri, l.value.otp_type = e.uri.slice(0, 15).toLowerCase() === "otpauth://totp/" ? "totp" : "hotp") : (e.accountParams.secret ? !R(l.value.otp_type) && !G(l.value.otp_type) && d("error", new Error(a("error.not_a_supported_otp_type"))) : d("error", new Error(a("error.cannot_create_otp_without_secret"))), R(l.value.otp_type) && (I.value = !0));
      try {
        await le(), _e(), e.preferences.getOtpOnRequest && e.can_autoCloseTimeout && parseInt(e.preferences.autoCloseTimeout) > 0 && ke();
      } catch {
        X();
      }
    };
    async function le() {
      e.can_showNextOtp && w.value ? (T.value = w.value, w.value = "", j.value.turnOff(), J(0)) : re(), await ge().then((f) => {
        let c = f.data;
        T.value = c.password, w.value = e.can_showNextOtp && Object.prototype.hasOwnProperty.call(c, "next_password") ? c.next_password : "", e.preferences.copyOtpOnDisplay && M(c.password), R(c.otp_type) ? (N.value = c.generated_at, l.value.period = c.period, I.value = !0, de().then(() => {
          ie.value.startStepping();
        })) : G(c.otp_type) && (l.value.counter = c.counter, d("increment-hotp", { nextHotpCounter: c.counter, nextUri: c.uri }));
      }).catch((f) => {
        f.response.status === 422 && d("validation-error", f.response);
      }).finally(() => {
        F.value = !1;
      });
    }
    function re() {
      F.value = !0, j.value.turnOff();
    }
    function ge() {
      return i.value ? o.getOtpById(i.value) : h.value ? o.getOtpByUri(h.value) : o.getOtpByParams(l.value);
    }
    function ue() {
      d("please-close-me"), C.value = !1, X();
    }
    function X() {
      var f;
      i.value = l.value.counter = N.value = null, l.value.service = l.value.account = l.value.icon = l.value.otp_type = l.value.secret = "", T.value = "... ...", w.value = "", I.value = !1, clearTimeout(ae.value), (f = ie.value) == null || f.reset();
    }
    function _e() {
      de().then(() => {
        var f;
        (f = he.value) == null || f.focus();
      });
    }
    function M(f, c) {
      if (m(f.replace(/ /g, "")), v) {
        if (e.preferences.kickUserAfter == -1 && (c || !1) === !0 ? d("kickme") : e.preferences.closeOtpOnCopy && (c || !1) === !0 && ue(), e.preferences.clearSearchOnCopy && d("please-clear-search"), e.preferences.viewDefaultGroupOnCopy) {
          const S = e.preferences.defaultGroup == -1 ? e.preferences.activeGroup : e.preferences.defaultGroup;
          d("please-update-active-group", S);
        }
        d("otp-copied-to-clipboard");
      }
    }
    function R(f) {
      return f === "totp" || f === "steamtotp";
    }
    function G(f) {
      return f === "hotp";
    }
    function J(f) {
      j.value.turnOn(f), ne.value = "is-opacity-" + f;
    }
    p({
      show: ye,
      clearOTP: X
    });
    function ke() {
      let f = parseInt(e.preferences.autoCloseTimeout);
      ae.value = setTimeout(function() {
        ue();
      }, f * 60 * 1e3);
    }
    return (f, c) => (s(), n("div", null, [
      r("figure", {
        class: x(["image is-64x64", { "no-icon": !l.value.icon }]),
        style: { display: "inline-flex" }
      }, [
        l.value.icon ? (s(), n("img", {
          key: 0,
          src: t.iconPathPrefix + "/storage/icons/" + l.value.icon,
          alt: f.$t("alttext.icon_to_illustrate_the_account")
        }, null, 8, Rt)) : k("", !0)
      ], 2),
      $(y(oe), null, {
        default: b(({ mode: S }) => [
          r("p", {
            class: x(["is-size-4 has-ellipsis", S == "dark" ? "has-text-grey-light" : "has-text-grey"])
          }, g(l.value.service), 3),
          r("p", {
            class: x(["is-size-6 has-ellipsis", S == "dark" ? "has-text-grey" : "has-text-grey-light"])
          }, g(l.value.account), 3),
          r("p", null, [
            F.value ? (s(), n("span", Wt, [
              $(Ft, {
                isVisible: F.value,
                type: "raw"
              }, null, 8, ["isVisible"])
            ])) : (s(), n("span", {
              key: 0,
              id: "otp",
              role: "log",
              ref: "otpSpanTag",
              tabindex: "0",
              class: x(["otp is-size-1 is-clickable px-3", S == "dark" ? "has-text-white" : "has-text-grey-dark"]),
              onClick: c[0] || (c[0] = ($e) => M(T.value, !0)),
              onKeyup: c[1] || (c[1] = q(($e) => M(T.value, !0), ["enter"])),
              title: f.$t("message.copy_to_clipboard")
            }, g(E.value), 43, Gt))
          ])
        ]),
        _: 1
      }),
      Y($(Ie, { ref: "dots" }, null, 512), [
        [ce, R(l.value.otp_type)]
      ]),
      Y(r("p", null, g(f.$t("message.counter")) + ": " + g(l.value.counter), 513), [
        [ce, G(l.value.otp_type)]
      ]),
      e.can_showNextOtp && e.preferences.showNextOtp ? (s(), n("p", Kt, [
        w.value ? (s(), n("span", {
          key: 0,
          class: x(["is-clickable", ne.value]),
          onClick: c[2] || (c[2] = (S) => M(w.value, !0)),
          onKeyup: c[3] || (c[3] = q((S) => M(w.value, !0), ["enter"])),
          title: f.$t("message.copy_next_password")
        }, g(A.value), 43, Ut)) : (s(), n("span", qt, " "))
      ])) : k("", !0),
      e.preferences.showOtpAsDot && e.preferences.revealDottedOTP ? (s(), n("p", Ht, [
        r("button", {
          type: "button",
          class: "button is-ghost has-text-grey-dark",
          onClick: c[4] || (c[4] = D((S) => C.value = !C.value, ["stop"]))
        }, [
          C.value ? (s(), O(y(Ne), { key: 0 })) : (s(), O(y(Le), { key: 1 }))
        ])
      ])) : k("", !0),
      I.value ? (s(), O(Fe, {
        key: 2,
        period: l.value.period,
        generated_at: N.value,
        autostart: !1,
        onSteppingEnded: c[5] || (c[5] = (S) => le()),
        onSteppingStarted: c[6] || (c[6] = (S) => J(S)),
        onSteppedUp: c[7] || (c[7] = (S) => J(S)),
        ref: "dotsController"
      }, null, 8, ["period", "generated_at"])) : k("", !0)
    ]));
  }
}, jt = {
  key: 0,
  class: "columns is-centered"
}, Xt = { class: "form-column column is-two-thirds-tablet is-half-desktop is-half-widescreen is-one-third-fullhd" }, Jt = {
  __name: "ResponsiveWidthWrapper",
  props: {
    isActive: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    return (p, u) => t.isActive ? (s(), n("div", jt, [
      r("div", Xt, [
        B(p.$slots, "default")
      ])
    ])) : B(p.$slots, "default", { key: 1 });
  }
}, Qt = {
  role: "search",
  class: "field"
}, Yt = { class: "control has-icons-right" }, Zt = ["aria-label", "title", "placeholder"], es = { class: "icon is-small is-right" }, ts = ["title"], _s = {
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
  setup(t, { emit: p }) {
    const u = U(t, "keyword"), a = K("searchInput"), m = p;
    H(() => {
      document.addEventListener("keydown", v), document.addEventListener("keypress", e);
    }), te(() => {
      document.removeEventListener("keydown", v), document.removeEventListener("keypress", e);
    });
    function v(o) {
      var i;
      o.key === "f" && (o.ctrlKey || o.metaKey) && (o.preventDefault(), (i = a.value) == null || i.focus());
    }
    function d() {
      u.value = "", m("cleared");
    }
    function e(o) {
      var i, h;
      o.key !== "Enter" && (u.value = o.key, (i = a.value) == null || i.setSelectionRange(1, 1), (h = a.value) == null || h.focus(), o.preventDefault());
    }
    return (o, i) => (s(), n("div", Qt, [
      r("div", Yt, [
        Y(r("input", {
          "onUpdate:modelValue": i[0] || (i[0] = (h) => u.value = h),
          onKeyup: [
            i[1] || (i[1] = q(D((h) => {
              d(), h.target.blur();
            }, ["prevent"]), ["esc"])),
            i[2] || (i[2] = q(D((h) => h.target.blur(), ["prevent"]), ["enter"]))
          ],
          onKeypress: i[3] || (i[3] = D(() => {
          }, ["stop"])),
          ref: "searchInput",
          id: "txtSearch",
          type: "search",
          tabindex: "1",
          "aria-label": o.$t("message.search"),
          title: o.$t("message.search"),
          placeholder: t.placeholder,
          class: x(["input is-rounded is-search", { "has-no-background": t.hasNoBackground, "is-small": t.isSmall }])
        }, null, 42, Zt), [
          [be, u.value]
        ]),
        r("span", es, [
          u.value != "" ? (s(), n("button", {
            key: 0,
            type: "button",
            id: "btnClearSearch",
            tabindex: "1",
            title: o.$t("message.clear_search"),
            class: "clear-selection delete",
            onClick: d
          }, null, 8, ts)) : (s(), O(y(Me), {
            key: 1,
            class: "mr-2 icon-size-1"
          }))
        ])
      ])
    ]));
  }
}, ss = { class: "options-header" }, os = { class: "tabs is-centered is-fullwidth" }, ns = { role: "menubar" }, as = ["id", "onClick"], ks = {
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
  setup(t, { emit: p }) {
    const u = t, a = p;
    return (m, v) => (s(), n("div", ss, [
      $(Jt, { "is-active": t.isResponsive }, {
        default: b(() => [
          r("nav", os, [
            r("ul", ns, [
              (s(!0), n(Z, null, ee(u.tabs, (d) => (s(), n("li", {
                key: d.view,
                class: x({ "is-active": d.view === u.activeTab })
              }, [
                r("a", {
                  id: d.id,
                  onClick: (e) => a("tab-selected", d.view)
                }, g(m.$t(d.name)), 9, as)
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
  vs as FormWrapper,
  fs as GroupSwitch,
  ms as Kicker,
  hs as LucideGenericIcon,
  ys as Modal,
  gs as OtpDisplay,
  Jt as ResponsiveWidthWrapper,
  _s as SearchBox,
  Ft as Spinner,
  ks as TabBar,
  me as VueFooter,
  $t as useNotify,
  pe as useVisiblePassword
};
