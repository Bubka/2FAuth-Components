import { createElementBlock as n, openBlock as l, normalizeClass as c, renderSlot as j, createTextVNode as L, toDisplayString as y, createElementVNode as s, createCommentVNode as o, createVNode as S, unref as t, withCtx as F, useAttrs as G, computed as B, withDirectives as q, vModelCheckbox as W, withKeys as P, withModifiers as C, createBlock as v, mergeProps as z, ref as w, Fragment as A, renderList as K, vModelSelect as Z } from "vue";
import { LucideChevronRight as x, LucideLock as M, LucideEyeOff as J, LucideEye as Q, LucideLockOpen as X } from "lucide-vue-next";
import { LucideGenericIcon as E } from "@2fauth/ui";
import { UseColorMode as R } from "@vueuse/components";
import { useColorMode as Y } from "@vueuse/core";
const _ = ["type", "disabled"], O = {
  __name: "VueButton",
  props: {
    label: {
      type: String,
      default: "[[label]]"
    },
    color: {
      type: String,
      default: "is-link"
    },
    isLoading: {
      type: Boolean,
      default: !1
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    nativeType: {
      type: String,
      default: "submit",
      required: !0
    }
  },
  setup(e) {
    const i = e;
    return (a, b) => (l(), n("button", {
      type: e.nativeType,
      disabled: e.isLoading || e.isDisabled,
      class: c({
        button: !0,
        [`${e.color}`]: !0,
        "is-loading": e.isLoading
      })
    }, [
      j(a.$slots, "default", {}, () => [
        L(y(a.$t(i.label)), 1)
      ])
    ], 10, _));
  }
}, ee = { class: "field is-grouped" }, te = { class: "control" }, le = {
  key: 0,
  class: "control"
}, mt = {
  __name: "FormButtons",
  props: {
    showCancelButton: {
      type: Boolean,
      default: !1
    },
    isBusy: {
      type: Boolean,
      default: !1
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    submitLabel: {
      type: String,
      default: "message.submit"
    },
    cancelLabel: {
      type: String,
      default: "message.cancel"
    },
    color: {
      type: String,
      default: "is-link"
    },
    submitId: {
      type: String,
      default: "btnSubmit"
    },
    cancelId: {
      type: String,
      default: "btnCancel"
    }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: i }) {
    const a = i;
    return (b, m) => (l(), n("div", ee, [
      s("div", te, [
        S(t(O), {
          onClick: m[0] || (m[0] = (d) => a("submit")),
          id: e.submitId,
          nativeType: "submit",
          color: e.color,
          isLoading: e.isBusy,
          disabled: e.isDisabled
        }, {
          default: F(() => [
            L(y(b.$t(e.submitLabel)), 1)
          ]),
          _: 1
        }, 8, ["id", "color", "isLoading", "disabled"])
      ]),
      e.showCancelButton ? (l(), n("div", le, [
        S(t(O), {
          onClick: m[1] || (m[1] = (d) => a("cancel")),
          id: e.cancelId,
          nativeType: "button",
          color: "is-text"
        }, {
          default: F(() => [
            L(y(b.$t(e.cancelLabel)), 1)
          ]),
          _: 1
        }, 8, ["id"])
      ])) : o("", !0)
    ]));
  }
};
function $(e, i) {
  let a;
  switch (i = i.toString(), e) {
    case "text":
      a = "txt";
      break;
    case "button":
      a = "btn";
      break;
    case "email":
      a = "eml";
      break;
    case "password":
      a = "pwd";
      break;
    case "radio":
      a = "rdo";
      break;
    case "label":
      a = "lbl";
      break;
    case "select":
      a = "sel";
      break;
    case "legend":
      a = "leg";
      break;
    case "error":
      a = "err";
      break;
    default:
      a = "txt";
      break;
  }
  return {
    inputId: a + i[0].toUpperCase() + i.toLowerCase().slice(1)
  };
}
function N(e) {
  return {
    valErrorId: "valError" + e[0].toUpperCase() + e.toLowerCase().slice(1)
  };
}
const ae = { class: "field is-flex" }, ie = ["id", "name", "disabled", "aria-describedby"], se = ["for", "onKeypress"], ne = { class: "icon-text" }, de = {
  key: 0,
  class: "icon"
}, oe = ["id", "innerHTML"], bt = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "FormCheckbox",
  props: {
    modelValue: Boolean,
    fieldName: {
      type: String,
      default: "",
      required: !0
    },
    label: {
      type: String,
      default: ""
    },
    labelClass: {
      type: String,
      default: ""
    },
    help: {
      type: String,
      default: ""
    },
    isIndented: Boolean,
    isDisabled: Boolean,
    isLocked: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: i }) {
    const a = e, b = i, m = $("legend", a.fieldName).inputId, d = G(), r = B({
      get() {
        return a.modelValue;
      },
      set(k) {
        b("update:modelValue", k);
      }
    });
    function f() {
      d.disabled != !0 && (r.value = !r.value);
    }
    return (k, I) => (l(), n("div", ae, [
      e.isIndented ? (l(), n("div", {
        key: 0,
        class: c(["pr-1", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        S(t(x), { class: "has-text-grey rotate-135" })
      ], 2)) : o("", !0),
      s("div", null, [
        q(s("input", {
          id: e.fieldName,
          type: "checkbox",
          name: e.fieldName,
          class: "is-checkradio is-info",
          "onUpdate:modelValue": I[0] || (I[0] = (h) => r.value = h),
          disabled: e.isDisabled || e.isLocked,
          "aria-describedby": e.help ? t(m) : void 0
        }, null, 8, ie), [
          [W, r.value]
        ]),
        s("label", {
          tabindex: "0",
          for: e.fieldName,
          class: c(["label", e.labelClass]),
          onKeypress: P(C(f, ["prevent"]), ["space"])
        }, [
          s("span", ne, [
            s("span", null, y(k.$t(a.label)), 1),
            e.isLocked ? (l(), n("span", de, [
              S(t(M), { class: "icon-size-1" })
            ])) : o("", !0)
          ])
        ], 42, se),
        e.help ? (l(), n("p", {
          key: 0,
          id: t(m),
          class: "help",
          innerHTML: k.$t(e.help)
        }, null, 8, oe)) : o("", !0)
      ])
    ]));
  }
}), re = { role: "alert" }, ue = ["id", "innerHTML"], T = {
  __name: "FormFieldError",
  props: {
    error: {
      type: String,
      required: !0
    },
    field: {
      type: String,
      required: !0
    },
    alertType: {
      type: String,
      default: "is-danger"
    }
  },
  setup(e) {
    const i = e, { valErrorId: a } = N(i.field);
    return (b, m) => (l(), n("div", re, [
      s("p", {
        id: t(a),
        class: c(["help", e.alertType]),
        innerHTML: e.error
      }, null, 10, ue)
    ]));
  }
}, ce = { class: "field" }, fe = ["for"], ge = { class: "icon-text" }, me = {
  key: 0,
  class: "icon"
}, be = ["disabled", "id", "type", "value", "placeholder", "maxlength", "aria-describedby", "aria-invalid", "aria-errormessage"], ye = {
  key: 0,
  class: "icon is-small is-left"
}, he = {
  key: 1,
  class: "icon is-small is-right"
}, ke = ["id", "innerHTML"], yt = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "FormField",
  props: {
    modelValue: [String, Number, Boolean],
    label: {
      type: String,
      default: ""
    },
    fieldName: {
      type: String,
      default: "",
      required: !0
    },
    errorMessage: [String],
    inputType: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    help: {
      type: String,
      default: ""
    },
    hasOffset: {
      type: Boolean,
      default: !1
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    maxLength: {
      type: Number,
      default: null
    },
    isIndented: Boolean,
    isLocked: Boolean,
    leftIcon: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    },
    iconSize: {
      type: Number,
      default: 20
    },
    iconColor: {
      type: String,
      default: "currentColor"
    },
    iconStrokeWidth: {
      type: Number,
      default: 2
    },
    idSuffix: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const i = e, { inputId: a } = $(i.inputType, i.fieldName + i.idSuffix), { valErrorId: b } = N(i.fieldName), m = $("legend", i.fieldName).inputId;
    return (d, r) => (l(), n("div", {
      class: c(["mb-3", { "pt-3": e.hasOffset, "is-flex": e.isIndented }])
    }, [
      e.isIndented ? (l(), n("div", {
        key: 0,
        class: c(["pr-1", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        S(t(x), { class: "has-text-grey rotate-135" })
      ], 2)) : o("", !0),
      s("div", ce, [
        s("label", {
          for: t(a),
          class: c(["label", { "is-opacity-5": e.isDisabled || e.isLocked }])
        }, [
          s("span", ge, [
            s("span", null, y(d.$t(i.label)), 1),
            e.isLocked ? (l(), n("span", me, [
              S(t(M), { class: "icon-size-1" })
            ])) : o("", !0)
          ])
        ], 10, fe),
        s("div", {
          class: c(["control", { "has-icons-left": e.leftIcon, "has-icons-right": e.rightIcon }])
        }, [
          s("input", z({
            disabled: e.isDisabled || e.isLocked,
            id: t(a),
            type: e.inputType,
            class: "input",
            value: e.modelValue,
            placeholder: e.placeholder
          }, d.$attrs, {
            onInput: r[0] || (r[0] = (f) => d.$emit("update:modelValue", f.target.value)),
            onChange: r[1] || (r[1] = (f) => d.$emit("change:modelValue", f.target.value)),
            maxlength: e.maxLength,
            "aria-describedby": e.help ? t(m) : void 0,
            "aria-invalid": e.errorMessage != null,
            "aria-errormessage": e.errorMessage != null ? t(b) : void 0
          }), null, 16, be),
          e.leftIcon ? (l(), n("span", ye, [
            e.leftIcon ? (l(), v(t(E), {
              key: 0,
              name: e.leftIcon,
              "stroke-width": e.iconStrokeWidth,
              size: e.iconSize,
              color: e.iconColor
            }, null, 8, ["name", "stroke-width", "size", "color"])) : o("", !0)
          ])) : o("", !0),
          e.rightIcon ? (l(), n("span", he, [
            e.rightIcon ? (l(), v(t(E), {
              key: 0,
              name: e.rightIcon,
              "stroke-width": e.iconStrokeWidth,
              size: e.iconSize,
              color: e.iconColor
            }, null, 8, ["name", "stroke-width", "size", "color"])) : o("", !0)
          ])) : o("", !0)
        ], 2),
        e.errorMessage != null ? (l(), v(t(T), {
          key: 0,
          error: e.errorMessage,
          field: e.fieldName
        }, null, 8, ["error", "field"])) : o("", !0),
        e.help ? (l(), n("p", {
          key: 1,
          id: t(m),
          class: "help",
          innerHTML: d.$t(e.help)
        }, null, 8, ke)) : o("", !0)
      ])
    ], 2));
  }
}), ve = ["for"], $e = { class: "icon-text" }, Se = {
  key: 0,
  class: "icon"
}, Le = { class: "control has-icons-right" }, Ie = ["disabled", "id", "type", "value", "placeholder", "aria-describedby", "aria-invalid", "aria-errormessage"], pe = ["title"], Be = ["title"], Me = ["innerHTML"], Ce = ["innerHTML"], Te = ["id"], Ne = { class: "column is-one-third" }, Ve = { class: "has-text-weight-semibold" }, we = { class: "column" }, xe = { class: "has-text-weight-semibold" }, ht = /* @__PURE__ */ Object.assign({
  inheritAttrs: !0
}, {
  __name: "FormPasswordField",
  props: {
    modelValue: [String],
    label: {
      type: String,
      default: ""
    },
    fieldName: {
      type: String,
      default: "",
      required: !0
    },
    errorMessage: [String],
    inputType: {
      type: String,
      default: "password"
    },
    placeholder: {
      type: String,
      default: ""
    },
    help: {
      type: String,
      default: ""
    },
    hasOffset: {
      type: Boolean,
      default: !1
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    showRules: {
      type: Boolean,
      default: !1
    },
    idSuffix: {
      type: String,
      default: ""
    },
    isLocked: Boolean
  },
  setup(e) {
    const i = e, { inputId: a } = $(i.inputType, i.fieldName + i.idSuffix), { valErrorId: b } = N(i.fieldName), m = $("legend", i.fieldName).inputId, d = w(i.inputType), r = w(!1), f = B(() => /[a-z]/.test(i.modelValue ?? "")), k = B(() => /[A-Z]/.test(i.modelValue ?? "")), I = B(() => /[0-9]/.test(i.modelValue ?? "")), h = B(() => /[^A-Za-z0-9]/.test(i.modelValue ?? "")), D = B(() => {
      var u;
      return ((u = i.modelValue) == null ? void 0 : u.length) >= 8;
    });
    function H(u) {
      typeof u.getModifierState == "function" && (r.value = !!u.getModifierState("CapsLock"));
    }
    function V(u) {
      d.value != u && (d.value = u);
    }
    return (u, g) => (l(), n("div", {
      class: c(["field", { "pt-3": e.hasOffset }])
    }, [
      s("label", {
        for: t(a),
        class: "label"
      }, [
        s("span", $e, [
          s("span", null, y(u.$t(i.label)), 1),
          e.isLocked ? (l(), n("span", Se, [
            S(t(M), { class: "icon-size-1" })
          ])) : o("", !0)
        ])
      ], 8, ve),
      s("div", Le, [
        s("input", z({
          disabled: e.isDisabled || e.isLocked,
          id: t(a),
          type: d.value,
          class: "input",
          value: e.modelValue,
          placeholder: e.placeholder
        }, u.$attrs, {
          onInput: g[0] || (g[0] = (p) => u.$emit("update:modelValue", p.target.value)),
          onKeyup: H,
          "aria-describedby": e.help ? t(m) : void 0,
          "aria-invalid": e.errorMessage != null,
          "aria-errormessage": e.errorMessage != null ? t(b) : void 0
        }), null, 16, Ie),
        d.value == "password" ? (l(), n("span", {
          key: 0,
          role: "button",
          id: "btnTogglePassword",
          tabindex: "0",
          class: "icon is-small is-right is-clickable",
          onKeyup: g[1] || (g[1] = P((p) => V("text"), ["enter"])),
          onClick: g[2] || (g[2] = (p) => V("text")),
          title: u.$t("tooltip.reveal_password")
        }, [
          S(t(J))
        ], 40, pe)) : (l(), n("span", {
          key: 1,
          role: "button",
          id: "btnTogglePassword",
          tabindex: "0",
          class: "icon is-small is-right is-clickable",
          onKeyup: g[3] || (g[3] = P((p) => V("password"), ["enter"])),
          onClick: g[4] || (g[4] = (p) => V("password")),
          title: u.$t("tooltip.hide_password")
        }, [
          S(t(Q))
        ], 40, Be))
      ]),
      r.value ? (l(), n("p", {
        key: 0,
        class: "help is-warning",
        innerHTML: u.$t("message.caps_lock_is_on")
      }, null, 8, Me)) : o("", !0),
      e.errorMessage != null ? (l(), v(t(T), {
        key: 1,
        error: e.errorMessage,
        field: e.fieldName
      }, null, 8, ["error", "field"])) : o("", !0),
      e.help ? (l(), n("p", {
        key: 2,
        class: "help",
        innerHTML: u.$t(e.help)
      }, null, 8, Ce)) : o("", !0),
      e.showRules ? (l(), n("div", {
        key: 3,
        id: t(m),
        class: "columns is-mobile is-size-7 mt-0"
      }, [
        s("div", Ne, [
          s("span", Ve, y(u.$t("message.mandatory_rules")), 1),
          g[5] || (g[5] = s("br", null, null, -1)),
          s("span", {
            class: c(["is-underscored", { "is-dot": D.value }]),
            id: "valPwdIsLongEnough"
          }, null, 2),
          L(y(u.$t("message.is_long_enough")), 1),
          g[6] || (g[6] = s("br", null, null, -1))
        ]),
        s("div", we, [
          s("span", xe, y(u.$t("message.optional_rules_you_should_follow")), 1),
          g[7] || (g[7] = s("br", null, null, -1)),
          s("span", {
            class: c(["is-underscored", { "is-dot": f.value }]),
            id: "valPwdHasLowerCase"
          }, null, 2),
          L(y(u.$t("message.has_lower_case")), 1),
          g[8] || (g[8] = s("br", null, null, -1)),
          s("span", {
            class: c(["is-underscored", { "is-dot": k.value }]),
            id: "valPwdHasUpperCase"
          }, null, 2),
          L(y(u.$t("message.has_upper_case")), 1),
          g[9] || (g[9] = s("br", null, null, -1)),
          s("span", {
            class: c(["is-underscored", { "is-dot": h.value }]),
            id: "valPwdHasSpecialChar"
          }, null, 2),
          L(y(u.$t("message.has_special_char")), 1),
          g[10] || (g[10] = s("br", null, null, -1)),
          s("span", {
            class: c(["is-underscored", { "is-dot": I.value }]),
            id: "valPwdHasNumber"
          }, null, 2),
          L(y(u.$t("message.has_number")), 1)
        ])
      ], 8, Te)) : o("", !0)
    ], 2));
  }
}), De = { class: "field is-flex" }, Fe = ["for"], ze = ["disabled", "id", "type", "value", "placeholder", "maxlength", "aria-describedby", "aria-invalid", "aria-errormessage"], He = {
  key: 0,
  class: "control"
}, Pe = ["title"], Ee = { class: "icon" }, Oe = {
  key: 1,
  class: "control"
}, qe = ["title"], Ae = { class: "icon has-text-danger" }, Ke = ["id", "innerHTML"], kt = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "FormProtectedField",
  props: {
    modelValue: String,
    modelModifiers: { default: () => ({}) },
    enableProtection: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: ""
    },
    fieldName: {
      type: String,
      default: "",
      required: !0
    },
    errorMessage: [String],
    inputType: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    help: {
      type: String,
      default: ""
    },
    hasOffset: {
      type: Boolean,
      default: !1
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    isExpanded: {
      type: Boolean,
      default: !0
    },
    maxLength: {
      type: Number,
      default: null
    },
    idSuffix: {
      type: String,
      default: ""
    },
    isIndented: Boolean,
    isLocked: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: i }) {
    const a = e, { inputId: b } = $(a.inputType, a.fieldName + a.idSuffix), { valErrorId: m } = N(a.fieldName), d = $("legend", a.fieldName).inputId, r = w(a.enableProtection), f = w(!1), k = w(0), I = B(() => !!(a.isDisabled || a.isLocked || a.enableProtection == !0 && r.value == !0)), h = i;
    function D(u) {
      const g = u.target.value.replace(/\s+/g, "");
      h("update:modelValue", g);
    }
    function H(u) {
      let g = u.target.value;
      f.value = g.includes(" "), h("update:modelValue", g);
    }
    function V(u) {
      f.value = u.target.value.includes(" "), k.value += 1;
    }
    return (u, g) => (l(), n("div", De, [
      e.isIndented ? (l(), n("div", {
        key: 0,
        class: c(["pr-1", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        S(t(x), { class: "has-text-grey rotate-135" })
      ], 2)) : o("", !0),
      s("div", null, [
        s("label", {
          for: t(b),
          class: c(["label", { "is-opacity-5": e.isDisabled || e.isLocked }])
        }, [
          L(y(u.$t(a.label)), 1),
          e.isLocked ? (l(), v(t(M), {
            key: 0,
            class: "ml-2 icon-size-1"
          })) : o("", !0)
        ], 10, Fe),
        s("div", {
          class: c(["field has-addons mb-0", { "pt-3": e.hasOffset }])
        }, [
          s("div", {
            class: c(["control", { "is-expanded": e.isExpanded }])
          }, [
            (l(), n("input", z({
              key: k.value,
              disabled: I.value,
              id: t(b),
              type: e.inputType,
              class: "input",
              value: e.modelValue,
              placeholder: e.placeholder
            }, u.$attrs, {
              onInput: H,
              onChange: D,
              onBlur: V,
              maxlength: e.maxLength,
              "aria-describedby": e.help ? t(d) : void 0,
              "aria-invalid": e.errorMessage != null,
              "aria-errormessage": e.errorMessage != null ? t(m) : void 0
            }), null, 16, ze))
          ], 2),
          e.enableProtection && !e.isLocked ? (l(), v(t(R), { key: 0 }, {
            default: F(({ mode: p }) => [
              r.value ? (l(), n("div", He, [
                s("button", {
                  type: "button",
                  class: c(["button field-lock", { "is-dark": p == "dark" }]),
                  onClick: g[0] || (g[0] = C((U) => r.value = !1, ["stop"])),
                  title: u.$t("tooltip.unlock")
                }, [
                  s("span", Ee, [
                    S(t(M))
                  ])
                ], 10, Pe)
              ])) : (l(), n("div", Oe, [
                s("button", {
                  type: "button",
                  class: c(["button field-unlock", { "is-dark": p == "dark" }]),
                  onClick: g[1] || (g[1] = C((U) => r.value = !0, ["stop"])),
                  title: u.$t("tooltip.lock")
                }, [
                  s("span", Ae, [
                    S(t(X))
                  ])
                ], 10, qe)
              ]))
            ]),
            _: 1
          })) : o("", !0)
        ], 2),
        f.value ? (l(), v(t(T), {
          key: 0,
          error: u.$t("message.spaces_are_ignored"),
          field: "spaces",
          alertType: "is-warning"
        }, null, 8, ["error"])) : o("", !0),
        e.errorMessage != null ? (l(), v(t(T), {
          key: 1,
          error: e.errorMessage,
          field: e.fieldName
        }, null, 8, ["error", "field"])) : o("", !0),
        e.help ? (l(), n("p", {
          key: 2,
          id: t(d),
          class: "help",
          innerHTML: u.$t(e.help)
        }, null, 8, Ke)) : o("", !0)
      ])
    ]));
  }
}), Re = { class: "field is-flex" }, Ue = ["for"], je = { class: "control" }, Ge = { class: "select" }, We = ["id", "disabled", "aria-describedby", "aria-invalid", "aria-errormessage"], Ze = ["value"], Je = ["id", "innerHTML"], vt = {
  __name: "FormSelect",
  props: {
    modelValue: [String, Number, Boolean],
    label: {
      type: String,
      default: ""
    },
    fieldName: {
      type: String,
      default: "",
      required: !0
    },
    errorMessage: [String],
    options: {
      type: Array,
      required: !0
    },
    help: {
      type: String,
      default: ""
    },
    isIndented: Boolean,
    isDisabled: Boolean,
    isLocked: Boolean,
    idSuffix: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const i = e, a = w(i.modelValue), { inputId: b } = $("select", i.fieldName + i.idSuffix), { valErrorId: m } = N(i.fieldName), d = $("legend", i.fieldName + i.idSuffix).inputId;
    return (r, f) => (l(), n("div", Re, [
      e.isIndented ? (l(), n("div", {
        key: 0,
        class: c(["pr-1", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        S(t(x), { class: "has-text-grey rotate-135" })
      ], 2)) : o("", !0),
      s("div", null, [
        s("label", {
          for: t(b),
          class: c(["label", { "is-opacity-5": e.isDisabled || e.isLocked }])
        }, [
          L(y(r.$t(i.label)), 1),
          e.isLocked ? (l(), v(t(M), {
            key: 0,
            class: "ml-2 icon-size-1"
          })) : o("", !0)
        ], 10, Ue),
        s("div", je, [
          s("div", Ge, [
            q(s("select", {
              id: t(b),
              "onUpdate:modelValue": f[0] || (f[0] = (k) => a.value = k),
              onChange: f[1] || (f[1] = (k) => r.$emit("update:modelValue", k.target.value)),
              disabled: e.isDisabled || e.isLocked,
              "aria-describedby": e.help ? t(d) : void 0,
              "aria-invalid": e.errorMessage != null,
              "aria-errormessage": e.errorMessage != null ? t(m) : void 0
            }, [
              (l(!0), n(A, null, K(e.options, (k) => (l(), n("option", {
                key: k.value,
                value: k.value
              }, y(r.$t(k.text)), 9, Ze))), 128))
            ], 40, We), [
              [Z, a.value]
            ])
          ])
        ]),
        e.errorMessage != null ? (l(), v(t(T), {
          key: 0,
          error: e.errorMessage,
          field: e.fieldName
        }, null, 8, ["error", "field"])) : o("", !0),
        e.help ? (l(), n("p", {
          key: 1,
          id: t(d),
          class: "help",
          innerHTML: r.$t(e.help)
        }, null, 8, Je)) : o("", !0)
      ])
    ]));
  }
}, Qe = ["for"], Xe = ["disabled", "id", "value", "placeholder", "maxlength", "aria-describedby", "aria-invalid", "aria-errormessage"], Ye = ["id", "innerHTML"], $t = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "FormTextarea",
  props: {
    modelValue: [String, Number, Boolean],
    label: {
      type: String,
      default: ""
    },
    fieldName: {
      type: String,
      default: "",
      required: !0
    },
    errorMessage: [String],
    placeholder: {
      type: String,
      default: ""
    },
    help: {
      type: String,
      default: ""
    },
    fontSize: {
      type: String,
      default: "is-small"
    },
    hasOffset: {
      type: Boolean,
      default: !1
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    maxLength: {
      type: Number,
      default: null
    },
    isIndented: Boolean,
    isLocked: Boolean,
    leftIcon: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    },
    idSuffix: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const i = e, { inputId: a } = $(i.inputType, i.fieldName + i.idSuffix), { valErrorId: b } = N(i.fieldName), m = $("legend", i.fieldName).inputId;
    return (d, r) => (l(), n("div", {
      class: c(["mb-3", { "pt-3": e.hasOffset, "is-flex": e.isIndented }])
    }, [
      e.isIndented ? (l(), n("div", {
        key: 0,
        class: c(["mx-2 pr-1", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        S(t(x), { class: "has-text-grey rotate-135" })
      ], 2)) : o("", !0),
      s("div", {
        class: c(["field", { "is-flex-grow-5": e.isIndented }])
      }, [
        e.label ? (l(), n("label", {
          key: 0,
          for: t(a),
          class: "label"
        }, [
          L(y(d.$t(i.label)), 1),
          e.isLocked ? (l(), v(t(M), {
            key: 0,
            class: "ml-2 icon-size-1"
          })) : o("", !0)
        ], 8, Qe)) : o("", !0),
        s("div", {
          class: c(["control", { "has-icons-left": e.leftIcon, "has-icons-right": e.rightIcon }])
        }, [
          s("textarea", z({
            disabled: e.isDisabled || e.isLocked,
            id: t(a),
            class: ["textarea has-fixed-size", e.fontSize],
            value: e.modelValue,
            placeholder: e.placeholder
          }, d.$attrs, {
            onInput: r[0] || (r[0] = (f) => d.$emit("update:modelValue", f.target.value)),
            onChange: r[1] || (r[1] = (f) => d.$emit("change:modelValue", f.target.value)),
            maxlength: e.maxLength,
            "aria-describedby": e.help ? t(m) : void 0,
            "aria-invalid": e.errorMessage != null,
            "aria-errormessage": e.errorMessage != null ? t(b) : void 0
          }), null, 16, Xe)
        ], 2),
        e.errorMessage != null ? (l(), v(t(T), {
          key: 1,
          error: e.errorMessage,
          field: e.fieldName
        }, null, 8, ["error", "field"])) : o("", !0),
        e.help ? (l(), n("p", {
          key: 2,
          id: t(m),
          class: "help",
          innerHTML: d.$t(e.help)
        }, null, 8, Ye)) : o("", !0)
      ], 2)
    ], 2));
  }
}), _e = ["aria-describedby", "aria-invalid", "aria-errormessage"], et = ["id", "aria-checked", "disabled", "onClick"], tt = ["id", "checked", "value", "disabled"], lt = ["innerHTML"], at = ["for"], it = ["id"], St = {
  __name: "FormToggle",
  props: {
    modelValue: [String, Number, Boolean],
    choices: {
      type: Array,
      required: !0
    },
    fieldName: {
      type: String,
      required: !0
    },
    errorMessage: [String],
    hasOffset: Boolean,
    isDisabled: Boolean,
    isLocked: Boolean,
    label: {
      type: String,
      default: ""
    },
    help: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: i }) {
    const a = e, b = i, { valErrorId: m } = N(a.fieldName), d = $("legend", a.fieldName).inputId;
    function r(f) {
      b("update:modelValue", f);
    }
    return (f, k) => (l(), n("div", {
      class: c(["field", { "pt-3": e.hasOffset }])
    }, [
      e.label ? (l(), n("span", {
        key: 0,
        class: c(["label", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        L(y(f.$t(a.label)), 1),
        e.isLocked ? (l(), v(t(M), {
          key: 0,
          class: "ml-2 icon-size-1"
        })) : o("", !0)
      ], 2)) : o("", !0),
      s("div", {
        id: "rdoGroup",
        role: "radiogroup",
        "aria-describedby": e.help ? t(d) : void 0,
        "aria-invalid": e.errorMessage != null,
        "aria-errormessage": e.errorMessage != null ? t(m) : void 0,
        class: "is-toggle buttons"
      }, [
        S(t(R), null, {
          default: F(({ mode: I }) => [
            (l(!0), n(A, null, K(e.choices, (h) => (l(), n("button", {
              key: h.value,
              id: t($)("button", e.fieldName + h.value).inputId,
              role: "radio",
              type: "button",
              class: c(["button", {
                "is-link": e.modelValue === h.value,
                "is-dark": I == "dark",
                "is-multiline": h.legend
              }]),
              "aria-checked": e.modelValue === h.value,
              disabled: e.isDisabled || e.isLocked,
              onClick: C((D) => r(h.value), ["stop"])
            }, [
              s("input", {
                id: t($)("radio", h.value).inputId,
                type: "radio",
                class: "is-hidden",
                checked: e.modelValue === h.value,
                value: h.value,
                disabled: e.isDisabled || e.isLocked
              }, null, 8, tt),
              h.legend ? (l(), n("span", {
                key: 0,
                innerHTML: f.$t(h.legend),
                class: "is-block is-size-7"
              }, null, 8, lt)) : o("", !0),
              h.icon ? (l(), v(t(E), {
                key: 1,
                name: h.icon,
                class: "mr-2"
              }, null, 8, ["name"])) : o("", !0),
              s("label", {
                for: t($)("button", e.fieldName + h.value).inputId,
                class: "is-clickable"
              }, y(f.$t(h.text)), 9, at)
            ], 10, et))), 128))
          ]),
          _: 1
        })
      ], 8, _e),
      e.errorMessage != null ? (l(), v(t(T), {
        key: 1,
        error: e.errorMessage,
        field: e.fieldName
      }, null, 8, ["error", "field"])) : o("", !0),
      e.help ? (l(), n("p", {
        key: 2,
        id: t(d),
        class: "help"
      }, y(f.$t(a.help)), 9, it)) : o("", !0)
    ], 2));
  }
}, st = {
  key: 0,
  class: "control"
}, nt = ["aria-label"], dt = ["aria-label"], ot = {
  key: 1,
  class: "control"
}, Lt = {
  __name: "NavigationButton",
  props: {
    currentPageTitle: {
      type: String,
      default: ""
    },
    previousPageTitle: {
      type: String,
      default: ""
    },
    action: {
      type: String,
      default: "close"
    },
    useLinkTag: {
      type: Boolean,
      default: !0
    },
    isText: {
      type: Boolean,
      default: !1
    },
    isCapture: {
      type: Boolean,
      default: !1
    },
    isRounded: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["closed", "goback", "canceled"],
  setup(e, { emit: i }) {
    const a = Y(), b = e, m = B(() => "button" + (a.value === "dark" && b.isText == !1 && b.isCapture == !1 ? " is-dark" : "") + (b.isText == !0 ? " is-text" : "") + (b.isCapture == !0 ? " is-large is-warning" : "") + (b.isRounded == !0 ? " is-rounded" : ""));
    return (d, r) => e.useLinkTag ? (l(), n("p", st, [
      e.action == "close" ? (l(), n("a", {
        key: 0,
        id: "lnkClose",
        onClick: r[0] || (r[0] = C((f) => d.$emit("closed"), ["prevent"])),
        class: c(m.value),
        tabindex: "0",
        role: "button",
        "aria-label": d.$t("message.close_the_x_page", { pagetitle: e.currentPageTitle })
      }, y(d.$t("message.close")), 11, nt)) : e.action == "back" ? (l(), n("a", {
        key: 1,
        id: "lnkBack",
        onClick: r[1] || (r[1] = C((f) => d.$emit("goback"), ["prevent"])),
        class: c(m.value),
        "aria-label": d.$t("message.go_back_to_the_x_page", { pagetitle: e.previousPageTitle })
      }, y(d.$t("message.back")), 11, dt)) : e.action == "cancel" ? (l(), n("a", {
        key: 2,
        id: "lnkCancel",
        onClick: r[2] || (r[2] = C((f) => d.$emit("canceled"), ["prevent"])),
        class: c(m.value)
      }, y(d.$t("message.cancel")), 3)) : o("", !0)
    ])) : (l(), n("p", ot, [
      e.action == "close" ? (l(), n("button", {
        key: 0,
        id: "btnClose",
        class: c(m.value),
        onClick: r[3] || (r[3] = (f) => d.$emit("closed")),
        type: "button"
      }, y(d.$t("message.close")), 3)) : o("", !0),
      e.action == "cancel" ? (l(), n("button", {
        key: 1,
        id: "btnCancel",
        class: c(m.value),
        onClick: r[4] || (r[4] = (f) => d.$emit("canceled")),
        type: "button"
      }, y(d.$t("message.cancel")), 3)) : o("", !0)
    ]));
  }
};
export {
  mt as FormButtons,
  bt as FormCheckbox,
  yt as FormField,
  T as FormFieldError,
  ht as FormPasswordField,
  kt as FormProtectedField,
  vt as FormSelect,
  $t as FormTextarea,
  St as FormToggle,
  Lt as NavigationButton,
  O as VueButton
};
