import { ref as y, computed as R, onMounted as q, createElementBlock as n, openBlock as o, normalizeClass as x, Fragment as te, renderList as se, onUnmounted as oe, inject as J, resolveComponent as de, createCommentVNode as g, unref as _, createElementVNode as u, renderSlot as O, createBlock as P, withCtx as T, toDisplayString as b, createVNode as k, createTextVNode as B, mergeModels as I, useModel as j, watch as me, resolveDynamicComponent as xe, withModifiers as M, toValue as z, useTemplateRef as H, withDirectives as Z, withKeys as K, vShow as pe, nextTick as ve, vModelText as Se } from "vue";
import { UseColorMode as ne } from "@vueuse/components";
import { NavigationButton as _e } from "@2fauth/formcontrols";
import { Slash as Ce, MonitorCheck as Te, List as Oe, Grid3X3 as Pe, Moon as Re, Sun as Ae, LucideLoaderCircle as G, LucideEye as Ue, LucideEyeOff as Be, LucideSearch as Ne } from "lucide-vue-next";
import { useNotification as ze } from "@kyvg/vue3-notification";
import { useClipboard as Me } from "@vueuse/core";
import { createI18n as Ie } from "vue-i18n";
const De = ["data-is-active"], Le = {
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
    const i = t, s = y(0), m = R(() => s.value == -1);
    function f(e) {
      s.value = e < i.stepCount ? e + 1 : 1;
    }
    function d() {
      s.value = -1;
    }
    return q(() => {
      isNaN(i.initialIndex) || f(i.initialIndex);
    }), p({
      turnOn: f,
      turnOff: d,
      props: i
    }), (e, a) => (o(), n("ul", {
      class: x(["dots", { off: m.value, condensed: t.isCondensed }])
    }, [
      (o(!0), n(te, null, se(t.stepCount, (l) => (o(), n("li", {
        key: l,
        "data-is-active": l == s.value ? !0 : null
      }, null, 8, De))), 128))
    ], 2));
  }
}, Ee = {
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
  setup(t, { expose: p, emit: i }) {
    const s = t, m = y(null), f = y(null), d = y(null), e = y(null), a = y(null), l = R(() => m.value % s.period), h = R(() => s.period - l.value), r = R(() => s.period / s.step_count), S = R(() => {
      let A = l.value * s.step_count / s.period;
      return Math.floor(A) + 0;
    }), C = i, D = (A = 0) => {
      w(), m.value = A != 0 ? A : s.generated_at, C("stepping-started", S.value), a.value = S.value, f.value = setTimeout(function() {
        w(), C("stepping-ended");
      }, h.value * 1e3);
      let U = Math.ceil(l.value / r.value) * r.value - l.value;
      d.value = setTimeout(function() {
        U > 0 && (a.value += 1, C("stepped-up", a.value)), e.value = setInterval(function() {
          a.value += 1, C("stepped-up", a.value);
        }, r.value * 1e3);
      }, U * 1e3);
    }, w = () => {
      clearTimeout(f.value), clearTimeout(d.value), clearInterval(e.value), a.value = m.value = null;
    };
    return q(() => {
      s.autostart == !0 && D();
    }), oe(() => {
      w();
    }), p({
      startStepping: D,
      reset: w,
      props: s
    }), (A, U) => (o(), n("div"));
  }
}, Ve = {
  key: 0,
  class: "main"
}, Fe = {
  key: 0,
  class: "columns is-gapless"
}, Ge = { class: "column has-text-centered" }, He = { class: "field is-grouped" }, je = {
  key: 1,
  class: "content has-text-centered"
}, Ke = {
  key: 0,
  class: "columns is-gapless"
}, qe = { class: "column has-text-centered" }, We = { class: "field is-grouped" }, Xe = { class: "content has-text-centered" }, Ye = { key: 0 }, Je = {
  key: 0,
  class: "has-text-weight-bold"
}, Qe = {
  key: 1,
  class: ""
}, Ze = { key: 1 }, et = { key: 1 }, tt = { key: 0 }, st = {
  key: 0,
  class: "release-flag"
}, ot = { key: 1 }, nt = { key: 2 }, at = {
  key: 0,
  class: "ml-0 mt-1"
}, it = { class: "column" }, rt = {
  key: 0,
  class: "column"
}, lt = {
  key: 0,
  class: "release-flag"
}, ut = {
  key: 1,
  class: "column"
}, ct = {
  key: 0,
  class: "release-flag"
}, dt = { class: "mx-2 has-ellipsis" }, he = {
  __name: "VueFooter",
  setup(t) {
    const p = J("appSettingsStore", {
      latestRelease: null,
      checkForUpdate: !0
    }), i = J("userStore", {
      isAdmin: !1,
      isAuthenticated: !1,
      email: null,
      preferences: {
        showEmailInFooter: !0
      },
      logout: function() {
      }
    }), s = J("2fauth", {
      context: "webapp",
      version: "x.y.z",
      config: {
        proxyAuth: !1,
        proxyLogoutUrl: null
      }
    }), m = y(!1), f = y(p.latestRelease && p.checkForUpdate);
    function d(e) {
      confirm(e) && i.logout();
    }
    return (e, a) => {
      const l = de("router-link"), h = de("FontAwesomeIcon");
      return _(s).context == "webext" ? (o(), n("footer", Ve, [
        e.$slots.default ? (o(), n("div", Fe, [
          u("div", Ge, [
            u("div", He, [
              O(e.$slots, "default")
            ])
          ])
        ])) : (o(), n("div", je, [
          O(e.$slots, "default")
        ]))
      ])) : _(s).context == "webapp" ? (o(), n("footer", {
        key: 1,
        class: x(["main", { menu: m.value }])
      }, [
        e.$slots.default && !m.value ? (o(), n("div", Ke, [
          u("div", qe, [
            u("div", We, [
              O(e.$slots, "default")
            ])
          ])
        ])) : g("", !0),
        u("div", Xe, [
          O(e.$slots, "subpart", {}, () => [
            e.$route.meta.showAbout === !0 ? (o(), n("div", Ye, [
              e.$route.name != "about" ? (o(), P(l, {
                key: 0,
                id: "lnkAbout",
                to: { name: "about" },
                class: "has-text-grey"
              }, {
                default: T(() => [
                  _(i).isAuthenticated && e.$route.meta.watchedByKicker ? (o(), n("span", Je, "2FAuth – v" + b(_(s).version), 1)) : (o(), n("span", Qe, b(e.$t("message.about")), 1))
                ]),
                _: 1
              })) : (o(), n("span", Ze, " "))
            ])) : _(i).preferences.showEmailInFooter == !1 ? (o(), n("div", et, [
              k(l, {
                id: "lnkSettings",
                to: { name: "settings.options" },
                class: "has-text-grey"
              }, {
                default: T(() => [
                  B(b(e.$t("message.settings.settings")), 1)
                ]),
                _: 1
              }),
              _(i).isAdmin ? (o(), n("span", tt, [
                a[3] || (a[3] = B(" - ")),
                k(l, {
                  id: "lnkAdmin",
                  to: { name: "admin.appSetup" },
                  class: "has-text-grey"
                }, {
                  default: T(() => [
                    B(b(e.$t("message.admin.admin")), 1),
                    f.value ? (o(), n("span", st)) : g("", !0)
                  ]),
                  _: 1
                })
              ])) : g("", !0),
              !_(s).config.proxyAuth || _(s).config.proxyAuth && _(s).config.proxyLogoutUrl ? (o(), n("span", ot, [
                a[4] || (a[4] = B(" - ")),
                u("button", {
                  type: "button",
                  id: "lnkSignOut",
                  class: "button is-text is-like-text has-text-grey",
                  onClick: a[0] || (a[0] = (r) => d(e.$t("message.auth.confirm.logout")))
                }, b(e.$t("message.auth.sign_out")), 1)
              ])) : g("", !0)
            ])) : (o(), n("div", nt, [
              m.value == !0 ? (o(), n("ul", at, [
                u("li", it, [
                  k(l, {
                    id: "lnkSettings",
                    to: { name: "settings.options" }
                  }, {
                    default: T(() => [
                      B(b(e.$t("message.settings.settings")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _(i).isAdmin ? (o(), n("li", rt, [
                  k(l, {
                    id: "lnkAdmin",
                    to: { name: "admin.appSetup" }
                  }, {
                    default: T(() => [
                      f.value ? (o(), n("span", lt)) : g("", !0),
                      B(" " + b(e.$t("message.admin.admin_panel")), 1)
                    ]),
                    _: 1
                  })
                ])) : g("", !0),
                !_(s).config.proxyAuth || _(s).config.proxyAuth && _(s).config.proxyLogoutUrl ? (o(), n("li", ut, [
                  k(_(ne), null, {
                    default: T(({ mode: r }) => [
                      u("button", {
                        type: "button",
                        id: "lnkSignOut",
                        class: x(["button is-text is-like-text", r == "dark" ? "has-text-grey-lighter" : "has-text-grey-darker"]),
                        onClick: a[1] || (a[1] = (S) => d(e.$t("message.auth.confirm.logout")))
                      }, b(e.$t("message.auth.sign_out")), 3)
                    ]),
                    _: 1
                  })
                ])) : g("", !0)
              ])) : g("", !0),
              u("button", {
                type: "button",
                id: "btnEmailMenu",
                onClick: a[2] || (a[2] = (r) => m.value = !m.value),
                class: "button is-text is-like-text has-text-grey",
                style: { width: "100%" }
              }, [
                _(i).isAdmin && f.value ? (o(), n("span", ct)) : g("", !0),
                u("span", dt, b(_(i).email), 1),
                m.value ? (o(), P(h, {
                  key: 2,
                  icon: ["fas", "times"],
                  class: "mr-2"
                })) : (o(), P(h, {
                  key: 1,
                  icon: ["fas", "bars"],
                  class: "mr-2"
                }))
              ])
            ]))
          ])
        ])
      ], 2)) : g("", !0);
    };
  }
}, pt = {
  key: 0,
  id: "groupSwitch",
  class: "container groups"
}, vt = { class: "columns is-centered" }, ft = { class: "column is-one-third-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd" }, mt = { class: "columns is-multiline" }, _t = ["onClick"], ht = {
  key: 0,
  class: "columns is-centered"
}, yt = { class: "column has-text-centered" }, ds = {
  __name: "GroupSwitch",
  props: /* @__PURE__ */ I({
    groups: Array
  }, {
    activeGroup: {},
    activeGroupModifiers: {},
    isVisible: {},
    isVisibleModifiers: {}
  }),
  emits: /* @__PURE__ */ I(["active-group-changed"], ["update:activeGroup", "update:isVisible"]),
  setup(t, { emit: p }) {
    const i = j(t, "activeGroup"), s = j(t, "isVisible"), m = p;
    function f(d) {
      i.value = d, s.value = !1, m("active-group-changed", d);
    }
    return (d, e) => s.value ? (o(), n("div", pt, [
      u("div", vt, [
        u("div", ft, [
          u("div", mt, [
            k(_(ne), null, {
              default: T(({ mode: a }) => [
                (o(!0), n(te, null, se(t.groups, (l) => (o(), n("div", {
                  class: "column is-full",
                  key: l.id
                }, [
                  u("button", {
                    type: "button",
                    class: x(["button is-fullwidth", { "is-dark has-text-light is-outlined": a == "dark" }]),
                    onClick: (h) => f(l.id)
                  }, b(l.name), 11, _t)
                ]))), 128))
              ]),
              _: 1
            })
          ]),
          d.$slots.default ? (o(), n("div", ht, [
            u("div", yt, [
              O(d.$slots, "default")
            ])
          ])) : g("", !0)
        ])
      ]),
      k(he, { "show-buttons": !0 }, {
        default: T(() => [
          k(_(_e), {
            action: "close",
            "use-link-tag": !1,
            onClosed: e[0] || (e[0] = (a) => s.value = !1)
          })
        ]),
        _: 1
      })
    ])) : g("", !0);
  }
}, ps = {
  __name: "Kicker",
  props: {
    kickAfter: {
      type: Number,
      required: !0
    }
  },
  emits: ["kicked"],
  setup(t, { emit: p }) {
    const i = p, s = y(["mousedown", "scroll", "keypress"]), m = y(null), f = t;
    me(
      () => f.kickAfter,
      () => {
        a();
      }
    ), q(() => {
      s.value.forEach(function(h) {
        window.addEventListener(h, a);
      }, this), d();
    }), oe(() => {
      s.value.forEach(function(h) {
        window.removeEventListener(h, a);
      }, this), l();
    });
    function d() {
      m.value = setTimeout(e, f.kickAfter * 60 * 1e3);
    }
    async function e() {
      clearTimeout(m.value), i("kicked");
    }
    function a() {
      l(), d();
    }
    function l() {
      clearTimeout(m.value);
    }
    return () => {
    };
  }
}, vs = {
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
    const p = { Sun: Ae, Moon: Re, Grid3X3: Pe, List: Oe, MonitorCheck: Te, Slash: Ce }, i = t, s = R(() => p[i.name]);
    return (m, f) => (o(), P(xe(s.value), {
      size: t.size,
      color: t.color,
      "stroke-width": t.strokeWidth,
      "default-class": t.defaultClass
    }, null, 8, ["size", "color", "stroke-width", "default-class"]));
  }
}, bt = () => {
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
}, gt = {
  key: 0,
  class: "modal-content modal-with-footer"
}, kt = { class: "modal-slot p-4 has-text-centered" }, wt = {
  key: 1,
  class: "modal-content modal-with-footer"
}, $t = { class: "section" }, xt = { class: "columns is-centered" }, St = { class: "column is-three-quarters" }, Ct = { class: "modal-slot has-text-centered is-shadowless" }, fs = {
  __name: "Modal",
  props: /* @__PURE__ */ I({
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
    const p = j(t, "modelValue");
    function i(s) {
      bt().clear(), p.value = !1;
    }
    return (s, m) => (o(), n("div", {
      class: x(["modal modal-otp", { "is-active": p.value }])
    }, [
      u("div", {
        class: "modal-background",
        onClick: M(i, ["stop"])
      }),
      t.isFullHeight ? (o(), n("div", gt, [
        u("div", kt, [
          O(s.$slots, "default")
        ])
      ])) : (o(), n("div", wt, [
        u("section", $t, [
          u("div", xt, [
            u("div", St, [
              u("div", Ct, [
                O(s.$slots, "default")
              ])
            ])
          ])
        ])
      ])),
      k(_(he), {
        showButtons: !0,
        internalFooterType: "modal"
      }, {
        default: T(() => [
          k(_(_e), {
            action: "close",
            useLinkTag: !1,
            onClosed: i
          })
        ]),
        _: 1
      })
    ], 2));
  }
}, Q = (t) => t && typeof t == "object" && !Array.isArray(t), ee = (t, ...p) => {
  if (!p.length) return t;
  const i = p.shift();
  if (Q(t) && Q(i))
    for (const s in i)
      Q(i[s]) ? (t[s] || Object.assign(t, { [s]: {} }), ee(t[s], i[s])) : Object.assign(t, { [s]: i[s] });
  return ee(t, ...p);
}, Tt = ee(
  {},
  { ar: {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { bg: {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { da: {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { de: {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { en: {
    "message.reveal_password": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Reveal password" } },
    "message.hide_password": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Hide password" } },
    "message.caps_lock_is_on": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Caps lock is On" } },
    "message.is_long_enough": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "8 characters min." } },
    "message.has_lower_case": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Has lower case" } },
    "message.has_upper_case": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Has upper case" } },
    "message.has_special_char": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Has special char" } },
    "message.has_number": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Has number" } },
    "message.mandatory_rules": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Mandatory" } },
    "message.optional_rules_you_should_follow": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Recommanded (highly)" } },
    "message.spaces_are_ignored": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unwanted spaces will be automatically removed" } },
    "message.close_the_x_page": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Close the :pagetitle page" } },
    "message.back": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Back" } },
    "message.cancel": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Cancel" } },
    "message.close": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Close" } },
    "message.copy_to_clipboard": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Copy to clipboard" } },
    "message.copy_next_password": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Copy next password to clipboard" } },
    "message.counter": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Counter" } },
    "tooltip.lock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Lock it" } },
    "tooltip.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock it (at your own risk)" } },
    "test.success": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "This is a success" } },
    "test.info": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "This is an info" } },
    "test.warn": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "This is a warn" } },
    "test.alert": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "This is an alert" } },
    "test.action": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "This is an action" } },
    "alttext.icon_to_illustrate_the_account": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Icon that illustrates the account" } },
    "error.auth_proxy_failed": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Proxy authentication failed" } },
    "error.auth_proxy_failed.legend": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "2Fauth is configured to run behind an authentication proxy but your proxy does not return the expected header. Check your configuration and try again." } },
    "error.unauthorized": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unauthorized" } },
    "error.unauthorized.legend": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "You do not have permissions to view this resource or to perform this action" } },
    "error.invalid_or_unknown_token": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Invalid or unknown personal access token" } },
    "error.cannot_create_otp_without_secret": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Cannot create an OTP without a secret" } },
    "error.not_a_supported_otp_type": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "This OTP format is not currently supported" } }
  } },
  { "es-ES": {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { fr: {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ui.formcontrols.reveal_password": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Reveal password" } },
    "ui.formcontrols.hide_password": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Hide password" } },
    "ui.formcontrols.caps_lock_is_on": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Caps lock is On" } },
    "ui.formcontrols.is_long_enough": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "8 characters min." } },
    "ui.formcontrols.has_lower_case": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Has lower case" } },
    "ui.formcontrols.has_upper_case": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Has upper case" } },
    "ui.formcontrols.has_special_char": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Has special char" } },
    "ui.formcontrols.has_number": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Has number" } },
    "ui.formcontrols.mandatory_rules": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Mandatory" } },
    "ui.formcontrols.optional_rules_you_should_follow": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Recommandé (fortement)" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { hi: {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { id: {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { it: {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { ja: {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { ko: {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { nl: {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { pl: {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { "pt-BR": {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { "pt-PT": {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { ru: {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { tr: {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { uk: {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { "zh-CN": {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } },
  { "zh-TW": {
    "srv.resource_not_found": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Resource not found" } },
    "ui.save": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Save" } },
    "ext.unlock": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Unlock" } }
  } }
), Ot = Ie({
  legacy: !1,
  locale: "en",
  fallbackLocale: "en",
  globalInjection: !0,
  messages: Tt
});
function fe(t, p, i, s, m) {
  t || (t = "");
  var f = String(z(t));
  const d = () => {
    const a = z(i);
    if (f.length > 0) {
      const l = Math.ceil(a < 1 ? f.length * a : a), h = f.match(new RegExp(`.{1,${l}}`, "g"));
      h && (f = h.join(" "));
    }
  }, e = () => {
    f.length > 0 && !z(m) && (f = f.replace(/[0-9]/g, "●"));
  };
  return z(p) == !0 && d(), z(s) && e(), f;
}
const Pt = { key: 0 }, Rt = {
  key: 0,
  class: "spinner-container"
}, At = { class: "spinner-wrapper" }, Ut = {
  id: "icnSpinnerFull",
  class: "is-size-1 spinner"
}, Bt = {
  key: 1,
  class: "spinner-overlay-container"
}, Nt = { class: "spinner-wrapper" }, zt = {
  id: "icnSpinnerFull",
  class: "is-size-1 spinner"
}, Mt = {
  key: 3,
  class: "has-text-centered mt-6"
}, It = {
  id: "icnSpinner",
  class: "is-size-4"
}, Dt = {
  __name: "Spinner",
  props: {
    isVisible: Boolean,
    type: {
      type: String,
      default: "raw",
      required: !0
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
    return (p, i) => t.isVisible ? (o(), n("div", Pt, [
      t.type == "fullscreen" ? (o(), n("div", Rt, [
        u("div", At, [
          u("span", Ut, [
            k(_(G), { class: "spinning icon-size-3" })
          ]),
          u("span", null, b(p.$t(t.message)), 1)
        ])
      ])) : t.type == "fullscreen-overlay" ? (o(), n("div", Bt, [
        u("div", Nt, [
          u("span", zt, [
            k(_(G), { class: "spinning icon-size-3" })
          ]),
          u("span", null, b(p.$t(t.message)), 1)
        ])
      ])) : t.type == "raw" ? (o(), P(_(G), {
        key: 2,
        class: "spinning lucide-default-size",
        size: t.rawSize
      }, null, 8, ["size"])) : t.type == "list-loading" ? (o(), n("div", Mt, [
        u("span", It, [
          k(_(G), { class: "spinning" })
        ])
      ])) : g("", !0)
    ])) : g("", !0);
  }
}, Lt = ["src", "alt"], Et = ["title"], Vt = {
  key: 1,
  tabindex: "0",
  class: "otp is-size-1"
}, Ft = {
  key: 0,
  class: "mt-3 is-size-4"
}, Gt = ["title"], Ht = { key: 1 }, jt = {
  key: 1,
  class: "mt-3"
}, ms = {
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
    "please-update-activeGroup",
    "kickme",
    "increment-hotp",
    "error",
    "validation-error",
    "otp-copied-to-clipboard"
  ],
  setup(t, { expose: p, emit: i }) {
    const { t: s } = Ot.global, { copy: m, copied: f } = Me({ legacy: !0 }), d = i, e = t, a = e.twofaccountService, l = y(null), h = y(null), r = y({
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
    }), S = y(!1), C = y(""), D = R(() => fe(
      C,
      e.preferences.formatPassword,
      e.preferences.formatPasswordBy,
      e.preferences.showOtpAsDot,
      S
    )), w = y(""), A = R(() => fe(
      w,
      e.preferences.formatPassword,
      e.preferences.formatPasswordBy,
      e.preferences.showOtpAsDot,
      S
    )), U = y(null), L = y(!1), E = y(!1), ae = y("0"), ie = y(null), re = H("dotsController"), W = H("dots"), ye = H("otpSpanTag");
    me(
      () => e.icon,
      (v) => {
        v != null && (r.value.icon = v);
      }
    );
    const be = async (v) => {
      if (S.value = !1, r.value.otp_type = e.accountParams.otp_type, r.value.account = e.accountParams.account, r.value.service = e.accountParams.service, r.value.icon = e.accountParams.icon, r.value.secret = e.accountParams.secret, r.value.digits = e.accountParams.digits, r.value.algorithm = e.accountParams.algorithm, r.value.period = e.accountParams.period, r.value.counter = e.accountParams.counter, ue(), v) {
        l.value = v;
        const { data: c } = await a.get(l.value);
        r.value.service = c.service, r.value.account = c.account, r.value.icon = c.icon, r.value.otp_type = c.otp_type, F(c.otp_type) && c.counter && (r.value.counter = c.counter);
      } else e.uri ? (h.value = e.uri, r.value.otp_type = e.uri.slice(0, 15).toLowerCase() === "otpauth://totp/" ? "totp" : "hotp") : (e.accountParams.secret ? !V(r.value.otp_type) && !F(r.value.otp_type) && d("error", new Error(s("error.not_a_supported_otp_type"))) : d("error", new Error(s("error.cannot_create_otp_without_secret"))), V(r.value.otp_type) && (L.value = !0));
      try {
        await le(), ke(), e.preferences.getOtpOnRequest && parseInt(e.preferences.autoCloseTimeout) > 0 && we();
      } catch {
        X();
      }
    };
    async function le() {
      e.can_showNextOtp && w.value ? (C.value = w.value, w.value = "", W.value.turnOff(), Y(0)) : ue(), await ge().then((v) => {
        let c = v.data;
        C.value = c.password, w.value = e.can_showNextOtp && Object.prototype.hasOwnProperty.call(c, "next_password") ? c.next_password : "", e.preferences.copyOtpOnDisplay && N(c.password), V(c.otp_type) ? (U.value = c.generated_at, r.value.period = c.period, L.value = !0, ve().then(() => {
          re.value.startStepping();
        })) : F(c.otp_type) && (r.value.counter = c.counter, d("increment-hotp", { nextHotpCounter: c.counter, nextUri: c.uri }));
      }).catch((v) => {
        v.response.status === 422 && d("validation-error", v.response);
      }).finally(() => {
        E.value = !1;
      });
    }
    function ue() {
      E.value = !0, W.value.turnOff();
    }
    function ge() {
      return l.value ? a.getOtpById(l.value) : h.value ? a.getOtpByUri(h.value) : a.getOtpByParams(r.value);
    }
    function ce() {
      d("please-close-me"), S.value = !1, X();
    }
    function X() {
      var v;
      l.value = r.value.counter = U.value = null, r.value.service = r.value.account = r.value.icon = r.value.otp_type = r.value.secret = "", C.value = "... ...", w.value = "", L.value = !1, clearTimeout(ie.value), (v = re.value) == null || v.reset();
    }
    function ke() {
      ve().then(() => {
        var v;
        (v = ye.value) == null || v.focus();
      });
    }
    function N(v, c) {
      if (m(v.replace(/ /g, "")), f) {
        if (e.preferences.kickUserAfter == -1 ? d("kickme") : e.preferences.closeOtpOnCopy && (c || !1) === !0 && ce(), e.preferences.clearSearchOnCopy && d("please-clear-search"), e.preferences.viewDefaultGroupOnCopy) {
          const $ = e.preferences.defaultGroup == -1 ? e.preferences.activeGroup : e.preferences.defaultGroup;
          d("please-update-activeGroup", $);
        }
        d("otp-copied-to-clipboard");
      }
    }
    function V(v) {
      return v === "totp" || v === "steamtotp";
    }
    function F(v) {
      return v === "hotp";
    }
    function Y(v) {
      W.value.turnOn(v), ae.value = "is-opacity-" + v;
    }
    p({
      show: be,
      clearOTP: X
    });
    function we() {
      let v = parseInt(e.preferences.autoCloseTimeout);
      ie.value = setTimeout(function() {
        ce();
      }, v * 60 * 1e3);
    }
    return (v, c) => (o(), n("div", null, [
      u("figure", {
        class: x(["image is-64x64", { "no-icon": !r.value.icon }]),
        style: { display: "inline-flex" }
      }, [
        r.value.icon ? (o(), n("img", {
          key: 0,
          src: t.iconPathPrefix + "/storage/icons/" + r.value.icon,
          alt: v.$t("alttext.icon_to_illustrate_the_account")
        }, null, 8, Lt)) : g("", !0)
      ], 2),
      k(_(ne), null, {
        default: T(({ mode: $ }) => [
          u("p", {
            class: x(["is-size-4 has-ellipsis", $ == "dark" ? "has-text-grey-light" : "has-text-grey"])
          }, b(r.value.service), 3),
          u("p", {
            class: x(["is-size-6 has-ellipsis", $ == "dark" ? "has-text-grey" : "has-text-grey-light"])
          }, b(r.value.account), 3),
          u("p", null, [
            E.value ? (o(), n("span", Vt, [
              k(Dt, {
                isVisible: E.value,
                type: "raw"
              }, null, 8, ["isVisible"])
            ])) : (o(), n("span", {
              key: 0,
              id: "otp",
              role: "log",
              ref: "otpSpanTag",
              tabindex: "0",
              class: x(["otp is-size-1 is-clickable px-3", $ == "dark" ? "has-text-white" : "has-text-grey-dark"]),
              onClick: c[0] || (c[0] = ($e) => N(C.value, !0)),
              onKeyup: c[1] || (c[1] = K(($e) => N(C.value, !0), ["enter"])),
              title: v.$t("message.copy_to_clipboard")
            }, b(D.value), 43, Et))
          ])
        ]),
        _: 1
      }),
      Z(k(Le, { ref: "dots" }, null, 512), [
        [pe, V(r.value.otp_type)]
      ]),
      Z(u("p", null, b(v.$t("message.counter")) + ": " + b(r.value.counter), 513), [
        [pe, F(r.value.otp_type)]
      ]),
      e.can_showNextOtp && e.preferences.showNextOtp ? (o(), n("p", Ft, [
        w.value ? (o(), n("span", {
          key: 0,
          class: x(["is-clickable", ae.value]),
          onClick: c[2] || (c[2] = ($) => N(w.value, !0)),
          onKeyup: c[3] || (c[3] = K(($) => N(w.value, !0), ["enter"])),
          title: v.$t("message.copy_next_password")
        }, b(A.value), 43, Gt)) : (o(), n("span", Ht, " "))
      ])) : g("", !0),
      e.preferences.showOtpAsDot && e.preferences.revealDottedOTP ? (o(), n("p", jt, [
        u("button", {
          type: "button",
          class: "button is-ghost has-text-grey-dark",
          onClick: c[4] || (c[4] = M(($) => S.value = !S.value, ["stop"]))
        }, [
          S.value ? (o(), P(_(Ue), { key: 0 })) : (o(), P(_(Be), { key: 1 }))
        ])
      ])) : g("", !0),
      L.value ? (o(), P(Ee, {
        key: 2,
        period: r.value.period,
        generated_at: U.value,
        autostart: !1,
        onSteppingEnded: c[5] || (c[5] = ($) => le()),
        onSteppingStarted: c[6] || (c[6] = ($) => Y($)),
        onSteppedUp: c[7] || (c[7] = ($) => Y($)),
        ref: "dotsController"
      }, null, 8, ["period", "generated_at"])) : g("", !0)
    ]));
  }
}, Kt = {
  key: 0,
  class: "columns is-centered"
}, qt = { class: "form-column column is-two-thirds-tablet is-half-desktop is-half-widescreen is-one-third-fullhd" }, Wt = {
  __name: "ResponsiveWidthWrapper",
  props: {
    isActive: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    return (p, i) => t.isActive ? (o(), n("div", Kt, [
      u("div", qt, [
        O(p.$slots, "default")
      ])
    ])) : O(p.$slots, "default", { key: 1 });
  }
}, Xt = {
  role: "search",
  class: "field"
}, Yt = { class: "control has-icons-right" }, Jt = ["aria-label", "title", "placeholder"], Qt = { class: "icon is-small is-right" }, Zt = ["title"], _s = {
  __name: "SearchBox",
  props: /* @__PURE__ */ I({
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
  emits: /* @__PURE__ */ I(["cleared"], ["update:keyword"]),
  setup(t, { emit: p }) {
    const i = j(t, "keyword"), s = H("searchInput"), m = p;
    q(() => {
      document.addEventListener("keydown", f), document.addEventListener("keypress", e);
    }), oe(() => {
      document.removeEventListener("keydown", f), document.removeEventListener("keypress", e);
    });
    function f(a) {
      var l;
      a.key === "f" && (a.ctrlKey || a.metaKey) && (a.preventDefault(), (l = s.value) == null || l.focus());
    }
    function d() {
      i.value = "", m("cleared");
    }
    function e(a) {
      var l, h;
      a.key !== "Enter" && (i.value = a.key, (l = s.value) == null || l.setSelectionRange(1, 1), (h = s.value) == null || h.focus(), a.preventDefault());
    }
    return (a, l) => (o(), n("div", Xt, [
      u("div", Yt, [
        Z(u("input", {
          "onUpdate:modelValue": l[0] || (l[0] = (h) => i.value = h),
          onKeyup: [
            l[1] || (l[1] = K(M((h) => {
              d(), h.target.blur();
            }, ["prevent"]), ["esc"])),
            l[2] || (l[2] = K(M((h) => h.target.blur(), ["prevent"]), ["enter"]))
          ],
          onKeypress: l[3] || (l[3] = M(() => {
          }, ["stop"])),
          ref: "searchInput",
          id: "txtSearch",
          type: "search",
          tabindex: "1",
          "aria-label": a.$t("message.search"),
          title: a.$t("message.search"),
          placeholder: t.placeholder,
          class: x(["input is-rounded is-search", { "has-no-background": t.hasNoBackground, "is-small": t.isSmall }])
        }, null, 42, Jt), [
          [Se, i.value]
        ]),
        u("span", Qt, [
          i.value != "" ? (o(), n("button", {
            key: 0,
            type: "button",
            id: "btnClearSearch",
            tabindex: "1",
            title: a.$t("message.clear_search"),
            class: "clear-selection delete",
            onClick: d
          }, null, 8, Zt)) : (o(), P(_(Ne), {
            key: 1,
            class: "mr-2 icon-size-1"
          }))
        ])
      ])
    ]));
  }
}, es = { class: "options-header" }, ts = { class: "tabs is-centered is-fullwidth" }, ss = { role: "menubar" }, os = ["id", "onClick"], hs = {
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
    const i = t, s = p;
    return (m, f) => (o(), n("div", es, [
      k(Wt, { "is-active": t.isResponsive }, {
        default: T(() => [
          u("nav", ts, [
            u("ul", ss, [
              (o(!0), n(te, null, se(i.tabs, (d) => (o(), n("li", {
                key: d.view,
                class: x({ "is-active": d.view === i.activeTab })
              }, [
                u("a", {
                  id: d.id,
                  onClick: (e) => s("tab-selected", d.view)
                }, b(m.$t(d.name)), 9, os)
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
  Le as Dots,
  Ee as DotsController,
  ds as GroupSwitch,
  ps as Kicker,
  vs as LucideGenericIcon,
  fs as Modal,
  ms as OtpDisplay,
  Wt as ResponsiveWidthWrapper,
  _s as SearchBox,
  Dt as Spinner,
  hs as TabBar,
  he as VueFooter,
  bt as useNotify,
  fe as useVisiblePassword
};
