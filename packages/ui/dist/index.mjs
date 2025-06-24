import { ref as g, computed as R, onMounted as K, createElementBlock as a, openBlock as s, normalizeClass as x, Fragment as te, renderList as se, onUnmounted as oe, resolveComponent as ne, createBlock as O, withCtx as $, createCommentVNode as b, renderSlot as P, toDisplayString as y, inject as J, unref as h, createElementVNode as u, createVNode as k, createTextVNode as U, mergeModels as L, useModel as W, watch as me, resolveDynamicComponent as Se, withModifiers as M, toValue as z, useTemplateRef as H, withDirectives as Z, withKeys as j, vShow as pe, nextTick as ve, vModelText as xe } from "vue";
import { UseColorMode as ae } from "@vueuse/components";
import { NavigationButton as _e } from "@2fauth/formcontrols";
import { LucideMenu as Ce, LucideX as Te, Slash as Oe, MonitorCheck as Re, List as Pe, Grid3X3 as Ae, Moon as Be, Sun as Ue, LucideLoaderCircle as G, LucideEye as Ne, LucideEyeOff as ze, LucideSearch as Me } from "lucide-vue-next";
import { useNotification as Le } from "@kyvg/vue3-notification";
import { useClipboard as De } from "@vueuse/core";
import { createI18n as Ee } from "vue-i18n";
const Ie = ["data-is-active"], Ve = {
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
  setup(e, { expose: d }) {
    const r = e, o = g(0), m = R(() => o.value == -1);
    function v(t) {
      o.value = t < r.stepCount ? t + 1 : 1;
    }
    function p() {
      o.value = -1;
    }
    return K(() => {
      isNaN(r.initialIndex) || v(r.initialIndex);
    }), d({
      turnOn: v,
      turnOff: p,
      props: r
    }), (t, n) => (s(), a("ul", {
      class: x(["dots", { off: m.value, condensed: e.isCondensed }])
    }, [
      (s(!0), a(te, null, se(e.stepCount, (i) => (s(), a("li", {
        key: i,
        "data-is-active": i == o.value ? !0 : null
      }, null, 8, Ie))), 128))
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
  setup(e, { expose: d, emit: r }) {
    const o = e, m = g(null), v = g(null), p = g(null), t = g(null), n = g(null), i = R(() => m.value % o.period), _ = R(() => o.period - i.value), l = R(() => o.period / o.step_count), C = R(() => {
      let A = i.value * o.step_count / o.period;
      return Math.floor(A) + 0;
    }), T = r, D = (A = 0) => {
      w(), m.value = A != 0 ? A : o.generated_at, T("stepping-started", C.value), n.value = C.value, v.value = setTimeout(function() {
        w(), T("stepping-ended");
      }, _.value * 1e3);
      let B = Math.ceil(i.value / l.value) * l.value - i.value;
      p.value = setTimeout(function() {
        B > 0 && (n.value += 1, T("stepped-up", n.value)), t.value = setInterval(function() {
          n.value += 1, T("stepped-up", n.value);
        }, l.value * 1e3);
      }, B * 1e3);
    }, w = () => {
      clearTimeout(v.value), clearTimeout(p.value), clearInterval(t.value), n.value = m.value = null;
    };
    return K(() => {
      o.autostart == !0 && D();
    }), oe(() => {
      w();
    }), d({
      startStepping: D,
      reset: w,
      props: o
    }), (A, B) => (s(), a("div"));
  }
}, Ge = {
  key: 0,
  class: "title has-text-grey-dark"
}, He = {
  key: 1,
  id: "punchline",
  class: "block"
}, _s = {
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
  setup(e) {
    return (d, r) => {
      const o = ne("ResponsiveWidthWrapper");
      return s(), O(o, null, {
        default: $(() => [
          e.title ? (s(), a("h1", Ge, y(d.$t(e.title)), 1)) : b("", !0),
          e.punchline ? (s(), a("div", He, y(d.$t(e.punchline)), 1)) : b("", !0),
          P(d.$slots, "default")
        ]),
        _: 3
      });
    };
  }
}, We = {
  key: 0,
  class: "main"
}, je = {
  key: 0,
  class: "columns is-gapless"
}, Ke = { class: "column has-text-centered" }, qe = { class: "field is-grouped" }, Xe = {
  key: 1,
  class: "content has-text-centered"
}, Ye = {
  key: 0,
  class: "columns is-gapless"
}, Je = { class: "column has-text-centered" }, Qe = { class: "field is-grouped" }, Ze = { class: "content has-text-centered" }, et = { key: 0 }, tt = {
  key: 0,
  class: "has-text-weight-bold"
}, st = {
  key: 1,
  class: ""
}, ot = { key: 1 }, nt = { key: 1 }, at = { key: 0 }, it = {
  key: 0,
  class: "release-flag"
}, rt = { key: 1 }, lt = { key: 2 }, ut = {
  key: 0,
  class: "ml-0 mt-1"
}, ct = { class: "column" }, dt = {
  key: 0,
  class: "column"
}, pt = {
  key: 0,
  class: "release-flag"
}, vt = {
  key: 1,
  class: "column"
}, ft = {
  key: 0,
  class: "release-flag"
}, mt = { class: "mx-2 has-ellipsis" }, he = {
  __name: "VueFooter",
  setup(e) {
    const d = J("appSettingsStore", {
      latestRelease: null,
      checkForUpdate: !0
    }), r = J("userStore", {
      isAdmin: !1,
      isAuthenticated: !1,
      email: null,
      preferences: {
        showEmailInFooter: !0
      },
      logout: function() {
      }
    }), o = J("2fauth", {
      context: "webapp",
      version: "x.y.z",
      config: {
        proxyAuth: !1,
        proxyLogoutUrl: null
      }
    }), m = g(!1), v = R(() => d.latestRelease && d.checkForUpdate), p = R(() => !o.config.proxyAuth || o.config.proxyAuth && o.config.proxyLogoutUrl);
    function t(n) {
      confirm(n) && r.logout();
    }
    return (n, i) => {
      const _ = ne("router-link");
      return h(o).context == "webext" ? (s(), a("footer", We, [
        n.$slots.default ? (s(), a("div", je, [
          u("div", Ke, [
            u("div", qe, [
              P(n.$slots, "default")
            ])
          ])
        ])) : (s(), a("div", Xe, [
          P(n.$slots, "default")
        ]))
      ])) : h(o).context == "webapp" ? (s(), a("footer", {
        key: 1,
        class: x(["main", { menu: m.value }])
      }, [
        n.$slots.default && !m.value ? (s(), a("div", Ye, [
          u("div", Je, [
            u("div", Qe, [
              P(n.$slots, "default")
            ])
          ])
        ])) : b("", !0),
        u("div", Ze, [
          P(n.$slots, "subpart", {}, () => [
            n.$route.meta.showAbout === !0 ? (s(), a("div", et, [
              n.$route.name != "about" ? (s(), O(_, {
                key: 0,
                id: "lnkAbout",
                to: { name: "about" },
                class: "has-text-grey"
              }, {
                default: $(() => [
                  h(r).isAuthenticated && n.$route.meta.watchedByKicker ? (s(), a("span", tt, "2FAuth – v" + y(h(o).version), 1)) : (s(), a("span", st, y(n.$t("message.about")), 1))
                ]),
                _: 1
              })) : (s(), a("span", ot, " "))
            ])) : h(r).preferences.showEmailInFooter == !1 ? (s(), a("div", nt, [
              k(_, {
                id: "lnkSettings",
                to: { name: "settings.options" },
                class: "has-text-grey"
              }, {
                default: $(() => [
                  U(y(n.$t("message.settings.settings")), 1)
                ]),
                _: 1
              }),
              h(r).isAdmin ? (s(), a("span", at, [
                i[3] || (i[3] = U(" - ")),
                k(_, {
                  id: "lnkAdmin",
                  to: { name: "admin.appSetup" },
                  class: "has-text-grey"
                }, {
                  default: $(() => [
                    U(y(n.$t("message.admin.admin")), 1),
                    v.value ? (s(), a("span", it)) : b("", !0)
                  ]),
                  _: 1
                })
              ])) : b("", !0),
              p.value ? (s(), a("span", rt, [
                i[4] || (i[4] = U(" - ")),
                u("button", {
                  type: "button",
                  id: "lnkSignOut",
                  class: "button is-text is-like-text has-text-grey",
                  onClick: i[0] || (i[0] = (l) => t(n.$t("message.auth.confirm.logout")))
                }, y(n.$t("message.auth.sign_out")), 1)
              ])) : b("", !0)
            ])) : (s(), a("div", lt, [
              m.value == !0 ? (s(), a("ul", ut, [
                u("li", ct, [
                  k(_, {
                    id: "lnkSettings",
                    to: { name: "settings.options" }
                  }, {
                    default: $(() => [
                      U(y(n.$t("message.settings.settings")), 1)
                    ]),
                    _: 1
                  })
                ]),
                h(r).isAdmin ? (s(), a("li", dt, [
                  k(_, {
                    id: "lnkAdmin",
                    to: { name: "admin.appSetup" }
                  }, {
                    default: $(() => [
                      v.value ? (s(), a("span", pt)) : b("", !0),
                      U(" " + y(n.$t("message.admin.admin_panel")), 1)
                    ]),
                    _: 1
                  })
                ])) : b("", !0),
                p.value ? (s(), a("li", vt, [
                  k(h(ae), null, {
                    default: $(({ mode: l }) => [
                      u("button", {
                        type: "button",
                        id: "lnkSignOut",
                        class: x(["button is-text is-like-text", l == "dark" ? "has-text-grey-lighter" : "has-text-grey-darker"]),
                        onClick: i[1] || (i[1] = (C) => t(n.$t("message.auth.confirm.logout")))
                      }, y(n.$t("message.auth.sign_out")), 3)
                    ]),
                    _: 1
                  })
                ])) : b("", !0)
              ])) : b("", !0),
              u("button", {
                type: "button",
                id: "btnEmailMenu",
                onClick: i[2] || (i[2] = (l) => m.value = !m.value),
                class: "button is-text is-like-text has-text-grey",
                style: { width: "100%" }
              }, [
                h(r).isAdmin && v.value ? (s(), a("span", ft)) : b("", !0),
                u("span", mt, y(h(r).email), 1),
                m.value ? (s(), O(h(Te), {
                  key: 2,
                  class: "mr-2"
                })) : (s(), O(h(Ce), {
                  key: 1,
                  class: "mr-2"
                }))
              ])
            ]))
          ])
        ])
      ], 2)) : b("", !0);
    };
  }
}, _t = {
  key: 0,
  id: "groupSwitch",
  class: "container groups"
}, ht = { class: "columns is-centered" }, yt = { class: "column is-one-third-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd" }, gt = { class: "columns is-multiline" }, bt = ["onClick"], kt = {
  key: 0,
  class: "columns is-centered"
}, wt = { class: "column has-text-centered" }, hs = {
  __name: "GroupSwitch",
  props: /* @__PURE__ */ L({
    groups: Array
  }, {
    activeGroup: {},
    activeGroupModifiers: {},
    isVisible: {},
    isVisibleModifiers: {}
  }),
  emits: /* @__PURE__ */ L(["active-group-changed"], ["update:activeGroup", "update:isVisible"]),
  setup(e, { emit: d }) {
    const r = W(e, "activeGroup"), o = W(e, "isVisible"), m = d;
    function v(p) {
      r.value = p, o.value = !1, m("active-group-changed", p);
    }
    return (p, t) => o.value ? (s(), a("div", _t, [
      u("div", ht, [
        u("div", yt, [
          u("div", gt, [
            k(h(ae), null, {
              default: $(({ mode: n }) => [
                (s(!0), a(te, null, se(e.groups, (i) => (s(), a("div", {
                  class: "column is-full",
                  key: i.id
                }, [
                  u("button", {
                    type: "button",
                    class: x(["button is-fullwidth", { "is-dark has-text-light is-outlined": n == "dark" }]),
                    onClick: (_) => v(i.id)
                  }, y(i.name), 11, bt)
                ]))), 128))
              ]),
              _: 1
            })
          ]),
          p.$slots.default ? (s(), a("div", kt, [
            u("div", wt, [
              P(p.$slots, "default")
            ])
          ])) : b("", !0)
        ])
      ]),
      k(he, { "show-buttons": !0 }, {
        default: $(() => [
          k(h(_e), {
            action: "close",
            "use-link-tag": !1,
            onClosed: t[0] || (t[0] = (n) => o.value = !1)
          })
        ]),
        _: 1
      })
    ])) : b("", !0);
  }
}, ys = {
  __name: "Kicker",
  props: {
    kickAfter: {
      type: Number,
      required: !0
    }
  },
  emits: ["kicked"],
  setup(e, { emit: d }) {
    const r = d, o = g(["mousedown", "scroll", "keypress"]), m = g(null), v = e;
    me(
      () => v.kickAfter,
      () => {
        n();
      }
    ), K(() => {
      o.value.forEach(function(_) {
        window.addEventListener(_, n);
      }, this), p();
    }), oe(() => {
      o.value.forEach(function(_) {
        window.removeEventListener(_, n);
      }, this), i();
    });
    function p() {
      m.value = setTimeout(t, v.kickAfter * 60 * 1e3);
    }
    async function t() {
      clearTimeout(m.value), r("kicked");
    }
    function n() {
      i(), p();
    }
    function i() {
      clearTimeout(m.value);
    }
    return () => {
    };
  }
}, gs = {
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
  setup(e) {
    const d = { Sun: Ue, Moon: Be, Grid3X3: Ae, List: Pe, MonitorCheck: Re, Slash: Oe }, r = e, o = R(() => d[r.name]);
    return (m, v) => (s(), O(Se(o.value), {
      size: e.size,
      color: e.color,
      "stroke-width": e.strokeWidth,
      "default-class": e.defaultClass
    }, null, 8, ["size", "color", "stroke-width", "default-class"]));
  }
}, $t = () => {
  const { notify: e } = Le();
  return {
    info: (t) => {
      e({ type: "is-info", ...t });
    },
    success: (t) => {
      e({ type: "is-success", ...t });
    },
    warn: (t) => {
      e({ type: "is-warning", ...t });
    },
    alert: (t) => {
      e({ type: "is-danger", ...t });
    },
    action: (t) => {
      e({ type: "is-dark", ...t });
    },
    clear: () => {
      e({ clean: !0 });
    }
  };
}, St = {
  key: 0,
  class: "modal-content modal-with-footer"
}, xt = { class: "modal-slot p-4 has-text-centered" }, Ct = {
  key: 1,
  class: "modal-content modal-with-footer"
}, Tt = { class: "section" }, Ot = { class: "columns is-centered" }, Rt = { class: "column is-three-quarters" }, Pt = { class: "modal-slot has-text-centered is-shadowless" }, At = { key: 1 }, bs = {
  __name: "Modal",
  props: /* @__PURE__ */ L({
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
  setup(e) {
    const d = W(e, "modelValue");
    function r(o) {
      $t().clear(), d.value = !1;
    }
    return (o, m) => {
      const v = ne("router-link");
      return s(), a("div", {
        class: x(["modal modal-otp", { "is-active": d.value }])
      }, [
        u("div", {
          class: "modal-background",
          onClick: M(r, ["stop"])
        }),
        e.isFullHeight ? (s(), a("div", St, [
          u("div", xt, [
            P(o.$slots, "default")
          ])
        ])) : (s(), a("div", Ct, [
          u("section", Tt, [
            u("div", Ot, [
              u("div", Rt, [
                u("div", Pt, [
                  P(o.$slots, "default")
                ])
              ])
            ])
          ])
        ])),
        k(h(he), null, {
          default: $(() => [
            k(h(_e), {
              action: "close",
              useLinkTag: !1,
              onClosed: r
            })
          ]),
          subpart: $(() => [
            o.$route.name != "accounts" ? (s(), O(v, {
              key: 0,
              id: "lnkBackToHome",
              to: { name: "accounts" },
              class: "has-text-grey"
            }, {
              default: $(() => [
                U(y(o.$t("message.back_to_home")), 1)
              ]),
              _: 1
            })) : (s(), a("span", At, " "))
          ]),
          _: 1
        })
      ], 2);
    };
  }
}, Q = (e) => e && typeof e == "object" && !Array.isArray(e), ee = (e, ...d) => {
  if (!d.length) return e;
  const r = d.shift();
  if (Q(e) && Q(r))
    for (const o in r)
      Q(r[o]) ? (e[o] || Object.assign(e, { [o]: {} }), ee(e[o], r[o])) : Object.assign(e, { [o]: r[o] });
  return ee(e, ...d);
}, Bt = ee(
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
    "message.about": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "About" } },
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
    "message.settings.settings": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Settings" } },
    "message.admin.admin": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Admin" } },
    "message.admin.admin_panel": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Admin panel" } },
    "message.auth.confirm.logout": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Are you sure you want to log out?" } },
    "message.auth.sign_out": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Sign out" } },
    "message.back_to_home": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Back to home" } },
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
), Ut = Ee({
  legacy: !1,
  locale: "en",
  fallbackLocale: "en",
  globalInjection: !0,
  messages: Bt
});
function fe(e, d, r, o, m) {
  e || (e = "");
  var v = String(z(e));
  const p = () => {
    const n = z(r);
    if (v.length > 0) {
      const i = Math.ceil(n < 1 ? v.length * n : n), _ = v.match(new RegExp(`.{1,${i}}`, "g"));
      _ && (v = _.join(" "));
    }
  }, t = () => {
    v.length > 0 && !z(m) && (v = v.replace(/[0-9]/g, "●"));
  };
  return z(d) == !0 && p(), z(o) && t(), v;
}
const Nt = { key: 0 }, zt = {
  key: 0,
  class: "spinner-container"
}, Mt = { class: "spinner-wrapper" }, Lt = {
  id: "icnSpinnerFull",
  class: "is-size-1 spinner"
}, Dt = {
  key: 1,
  class: "spinner-overlay-container"
}, Et = { class: "spinner-wrapper" }, It = {
  id: "icnSpinnerFull",
  class: "is-size-1 spinner"
}, Vt = {
  key: 3,
  class: "has-text-centered mt-6"
}, Ft = {
  id: "icnSpinner",
  class: "is-size-4"
}, Gt = {
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
  setup(e) {
    return (d, r) => e.isVisible ? (s(), a("div", Nt, [
      e.type == "fullscreen" ? (s(), a("div", zt, [
        u("div", Mt, [
          u("span", Lt, [
            k(h(G), { class: "spinning icon-size-3" })
          ]),
          u("span", null, y(d.$t(e.message)), 1)
        ])
      ])) : e.type == "fullscreen-overlay" ? (s(), a("div", Dt, [
        u("div", Et, [
          u("span", It, [
            k(h(G), { class: "spinning icon-size-3" })
          ]),
          u("span", null, y(d.$t(e.message)), 1)
        ])
      ])) : e.type == "raw" ? (s(), O(h(G), {
        key: 2,
        class: "spinning lucide-default-size",
        size: e.rawSize
      }, null, 8, ["size"])) : e.type == "list-loading" ? (s(), a("div", Vt, [
        u("span", Ft, [
          k(h(G), { class: "spinning" })
        ])
      ])) : b("", !0)
    ])) : b("", !0);
  }
}, Ht = ["src", "alt"], Wt = ["title"], jt = {
  key: 1,
  tabindex: "0",
  class: "otp is-size-1"
}, Kt = {
  key: 0,
  class: "mt-3 is-size-4"
}, qt = ["title"], Xt = { key: 1 }, Yt = {
  key: 1,
  class: "mt-3"
}, ks = {
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
      default(e) {
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
  setup(e, { expose: d, emit: r }) {
    const { t: o } = Ut.global, { copy: m, copied: v } = De({ legacy: !0 }), p = r, t = e, n = t.twofaccountService, i = g(null), _ = g(null), l = g({
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
    }), C = g(!1), T = g(""), D = R(() => fe(
      T,
      t.preferences.formatPassword,
      t.preferences.formatPasswordBy,
      t.preferences.showOtpAsDot,
      C
    )), w = g(""), A = R(() => fe(
      w,
      t.preferences.formatPassword,
      t.preferences.formatPasswordBy,
      t.preferences.showOtpAsDot,
      C
    )), B = g(null), E = g(!1), I = g(!1), ie = g("0"), re = g(null), le = H("dotsController"), q = H("dots"), ye = H("otpSpanTag");
    me(
      () => t.icon,
      (f) => {
        f != null && (l.value.icon = f);
      }
    );
    const ge = async (f) => {
      if (C.value = !1, l.value.otp_type = t.accountParams.otp_type, l.value.account = t.accountParams.account, l.value.service = t.accountParams.service, l.value.icon = t.accountParams.icon, l.value.secret = t.accountParams.secret, l.value.digits = t.accountParams.digits, l.value.algorithm = t.accountParams.algorithm, l.value.period = t.accountParams.period, l.value.counter = t.accountParams.counter, ce(), f) {
        i.value = f;
        const { data: c } = await n.get(i.value);
        l.value.service = c.service, l.value.account = c.account, l.value.icon = c.icon, l.value.otp_type = c.otp_type, F(c.otp_type) && c.counter && (l.value.counter = c.counter);
      } else t.uri ? (_.value = t.uri, l.value.otp_type = t.uri.slice(0, 15).toLowerCase() === "otpauth://totp/" ? "totp" : "hotp") : (t.accountParams.secret ? !V(l.value.otp_type) && !F(l.value.otp_type) && p("error", new Error(o("error.not_a_supported_otp_type"))) : p("error", new Error(o("error.cannot_create_otp_without_secret"))), V(l.value.otp_type) && (E.value = !0));
      try {
        await ue(), ke(), t.preferences.getOtpOnRequest && parseInt(t.preferences.autoCloseTimeout) > 0 && we();
      } catch {
        X();
      }
    };
    async function ue() {
      t.can_showNextOtp && w.value ? (T.value = w.value, w.value = "", q.value.turnOff(), Y(0)) : ce(), await be().then((f) => {
        let c = f.data;
        T.value = c.password, w.value = t.can_showNextOtp && Object.prototype.hasOwnProperty.call(c, "next_password") ? c.next_password : "", t.preferences.copyOtpOnDisplay && N(c.password), V(c.otp_type) ? (B.value = c.generated_at, l.value.period = c.period, E.value = !0, ve().then(() => {
          le.value.startStepping();
        })) : F(c.otp_type) && (l.value.counter = c.counter, p("increment-hotp", { nextHotpCounter: c.counter, nextUri: c.uri }));
      }).catch((f) => {
        f.response.status === 422 && p("validation-error", f.response);
      }).finally(() => {
        I.value = !1;
      });
    }
    function ce() {
      I.value = !0, q.value.turnOff();
    }
    function be() {
      return i.value ? n.getOtpById(i.value) : _.value ? n.getOtpByUri(_.value) : n.getOtpByParams(l.value);
    }
    function de() {
      p("please-close-me"), C.value = !1, X();
    }
    function X() {
      var f;
      i.value = l.value.counter = B.value = null, l.value.service = l.value.account = l.value.icon = l.value.otp_type = l.value.secret = "", T.value = "... ...", w.value = "", E.value = !1, clearTimeout(re.value), (f = le.value) == null || f.reset();
    }
    function ke() {
      ve().then(() => {
        var f;
        (f = ye.value) == null || f.focus();
      });
    }
    function N(f, c) {
      if (m(f.replace(/ /g, "")), v) {
        if (t.preferences.kickUserAfter == -1 ? p("kickme") : t.preferences.closeOtpOnCopy && (c || !1) === !0 && de(), t.preferences.clearSearchOnCopy && p("please-clear-search"), t.preferences.viewDefaultGroupOnCopy) {
          const S = t.preferences.defaultGroup == -1 ? t.preferences.activeGroup : t.preferences.defaultGroup;
          p("please-update-activeGroup", S);
        }
        p("otp-copied-to-clipboard");
      }
    }
    function V(f) {
      return f === "totp" || f === "steamtotp";
    }
    function F(f) {
      return f === "hotp";
    }
    function Y(f) {
      q.value.turnOn(f), ie.value = "is-opacity-" + f;
    }
    d({
      show: ge,
      clearOTP: X
    });
    function we() {
      let f = parseInt(t.preferences.autoCloseTimeout);
      re.value = setTimeout(function() {
        de();
      }, f * 60 * 1e3);
    }
    return (f, c) => (s(), a("div", null, [
      u("figure", {
        class: x(["image is-64x64", { "no-icon": !l.value.icon }]),
        style: { display: "inline-flex" }
      }, [
        l.value.icon ? (s(), a("img", {
          key: 0,
          src: e.iconPathPrefix + "/storage/icons/" + l.value.icon,
          alt: f.$t("alttext.icon_to_illustrate_the_account")
        }, null, 8, Ht)) : b("", !0)
      ], 2),
      k(h(ae), null, {
        default: $(({ mode: S }) => [
          u("p", {
            class: x(["is-size-4 has-ellipsis", S == "dark" ? "has-text-grey-light" : "has-text-grey"])
          }, y(l.value.service), 3),
          u("p", {
            class: x(["is-size-6 has-ellipsis", S == "dark" ? "has-text-grey" : "has-text-grey-light"])
          }, y(l.value.account), 3),
          u("p", null, [
            I.value ? (s(), a("span", jt, [
              k(Gt, {
                isVisible: I.value,
                type: "raw"
              }, null, 8, ["isVisible"])
            ])) : (s(), a("span", {
              key: 0,
              id: "otp",
              role: "log",
              ref: "otpSpanTag",
              tabindex: "0",
              class: x(["otp is-size-1 is-clickable px-3", S == "dark" ? "has-text-white" : "has-text-grey-dark"]),
              onClick: c[0] || (c[0] = ($e) => N(T.value, !0)),
              onKeyup: c[1] || (c[1] = j(($e) => N(T.value, !0), ["enter"])),
              title: f.$t("message.copy_to_clipboard")
            }, y(D.value), 43, Wt))
          ])
        ]),
        _: 1
      }),
      Z(k(Ve, { ref: "dots" }, null, 512), [
        [pe, V(l.value.otp_type)]
      ]),
      Z(u("p", null, y(f.$t("message.counter")) + ": " + y(l.value.counter), 513), [
        [pe, F(l.value.otp_type)]
      ]),
      t.can_showNextOtp && t.preferences.showNextOtp ? (s(), a("p", Kt, [
        w.value ? (s(), a("span", {
          key: 0,
          class: x(["is-clickable", ie.value]),
          onClick: c[2] || (c[2] = (S) => N(w.value, !0)),
          onKeyup: c[3] || (c[3] = j((S) => N(w.value, !0), ["enter"])),
          title: f.$t("message.copy_next_password")
        }, y(A.value), 43, qt)) : (s(), a("span", Xt, " "))
      ])) : b("", !0),
      t.preferences.showOtpAsDot && t.preferences.revealDottedOTP ? (s(), a("p", Yt, [
        u("button", {
          type: "button",
          class: "button is-ghost has-text-grey-dark",
          onClick: c[4] || (c[4] = M((S) => C.value = !C.value, ["stop"]))
        }, [
          C.value ? (s(), O(h(Ne), { key: 0 })) : (s(), O(h(ze), { key: 1 }))
        ])
      ])) : b("", !0),
      E.value ? (s(), O(Fe, {
        key: 2,
        period: l.value.period,
        generated_at: B.value,
        autostart: !1,
        onSteppingEnded: c[5] || (c[5] = (S) => ue()),
        onSteppingStarted: c[6] || (c[6] = (S) => Y(S)),
        onSteppedUp: c[7] || (c[7] = (S) => Y(S)),
        ref: "dotsController"
      }, null, 8, ["period", "generated_at"])) : b("", !0)
    ]));
  }
}, Jt = {
  key: 0,
  class: "columns is-centered"
}, Qt = { class: "form-column column is-two-thirds-tablet is-half-desktop is-half-widescreen is-one-third-fullhd" }, Zt = {
  __name: "ResponsiveWidthWrapper",
  props: {
    isActive: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    return (d, r) => e.isActive ? (s(), a("div", Jt, [
      u("div", Qt, [
        P(d.$slots, "default")
      ])
    ])) : P(d.$slots, "default", { key: 1 });
  }
}, es = {
  role: "search",
  class: "field"
}, ts = { class: "control has-icons-right" }, ss = ["aria-label", "title", "placeholder"], os = { class: "icon is-small is-right" }, ns = ["title"], ws = {
  __name: "SearchBox",
  props: /* @__PURE__ */ L({
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
  emits: /* @__PURE__ */ L(["cleared"], ["update:keyword"]),
  setup(e, { emit: d }) {
    const r = W(e, "keyword"), o = H("searchInput"), m = d;
    K(() => {
      document.addEventListener("keydown", v), document.addEventListener("keypress", t);
    }), oe(() => {
      document.removeEventListener("keydown", v), document.removeEventListener("keypress", t);
    });
    function v(n) {
      var i;
      n.key === "f" && (n.ctrlKey || n.metaKey) && (n.preventDefault(), (i = o.value) == null || i.focus());
    }
    function p() {
      r.value = "", m("cleared");
    }
    function t(n) {
      var i, _;
      n.key !== "Enter" && (r.value = n.key, (i = o.value) == null || i.setSelectionRange(1, 1), (_ = o.value) == null || _.focus(), n.preventDefault());
    }
    return (n, i) => (s(), a("div", es, [
      u("div", ts, [
        Z(u("input", {
          "onUpdate:modelValue": i[0] || (i[0] = (_) => r.value = _),
          onKeyup: [
            i[1] || (i[1] = j(M((_) => {
              p(), _.target.blur();
            }, ["prevent"]), ["esc"])),
            i[2] || (i[2] = j(M((_) => _.target.blur(), ["prevent"]), ["enter"]))
          ],
          onKeypress: i[3] || (i[3] = M(() => {
          }, ["stop"])),
          ref: "searchInput",
          id: "txtSearch",
          type: "search",
          tabindex: "1",
          "aria-label": n.$t("message.search"),
          title: n.$t("message.search"),
          placeholder: e.placeholder,
          class: x(["input is-rounded is-search", { "has-no-background": e.hasNoBackground, "is-small": e.isSmall }])
        }, null, 42, ss), [
          [xe, r.value]
        ]),
        u("span", os, [
          r.value != "" ? (s(), a("button", {
            key: 0,
            type: "button",
            id: "btnClearSearch",
            tabindex: "1",
            title: n.$t("message.clear_search"),
            class: "clear-selection delete",
            onClick: p
          }, null, 8, ns)) : (s(), O(h(Me), {
            key: 1,
            class: "mr-2 icon-size-1"
          }))
        ])
      ])
    ]));
  }
}, as = { class: "options-header" }, is = { class: "tabs is-centered is-fullwidth" }, rs = { role: "menubar" }, ls = ["id", "onClick"], $s = {
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
  setup(e, { emit: d }) {
    const r = e, o = d;
    return (m, v) => (s(), a("div", as, [
      k(Zt, { "is-active": e.isResponsive }, {
        default: $(() => [
          u("nav", is, [
            u("ul", rs, [
              (s(!0), a(te, null, se(r.tabs, (p) => (s(), a("li", {
                key: p.view,
                class: x({ "is-active": p.view === r.activeTab })
              }, [
                u("a", {
                  id: p.id,
                  onClick: (t) => o("tab-selected", p.view)
                }, y(m.$t(p.name)), 9, ls)
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
  Ve as Dots,
  Fe as DotsController,
  _s as FormWrapper,
  hs as GroupSwitch,
  ys as Kicker,
  gs as LucideGenericIcon,
  bs as Modal,
  ks as OtpDisplay,
  Zt as ResponsiveWidthWrapper,
  ws as SearchBox,
  Gt as Spinner,
  $s as TabBar,
  he as VueFooter,
  $t as useNotify,
  fe as useVisiblePassword
};
