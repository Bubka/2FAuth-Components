import { createElementBlock as s, openBlock as l, normalizeClass as c, renderSlot as j, createTextVNode as L, toDisplayString as y, createElementVNode as i, createCommentVNode as o, createVNode as S, unref as t, withCtx as F, useAttrs as G, computed as p, withDirectives as q, vModelCheckbox as W, withKeys as P, withModifiers as C, createBlock as v, mergeProps as z, ref as w, mergeModels as Z, useModel as J, Fragment as A, renderList as K, vModelSelect as Q } from "vue";
import { LucideChevronRight as x, LucideLock as B, LucideEyeOff as X, LucideEye as Y, LucideLockOpen as _ } from "lucide-vue-next";
import { LucideGenericIcon as E } from "@2fauth/ui";
import { UseColorMode as R } from "@vueuse/components";
import { useColorMode as ee } from "@vueuse/core";
const te = ["type", "disabled"], O = {
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
    const n = e;
    return (a, b) => (l(), s("button", {
      type: e.nativeType,
      disabled: e.isLoading || e.isDisabled,
      class: c({
        button: !0,
        [`${e.color}`]: !0,
        "is-loading": e.isLoading
      })
    }, [
      j(a.$slots, "default", {}, () => [
        L(y(a.$t(n.label)), 1)
      ])
    ], 10, te));
  }
}, le = { class: "field is-grouped" }, ae = { class: "control" }, ie = {
  key: 0,
  class: "control"
}, yt = {
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
  setup(e, { emit: n }) {
    const a = n;
    return (b, g) => (l(), s("div", le, [
      i("div", ae, [
        S(t(O), {
          onClick: g[0] || (g[0] = (d) => a("submit")),
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
      e.showCancelButton ? (l(), s("div", ie, [
        S(t(O), {
          onClick: g[1] || (g[1] = (d) => a("cancel")),
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
function $(e, n) {
  let a;
  switch (n = n.toString(), e) {
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
    inputId: a + n[0].toUpperCase() + n.toLowerCase().slice(1)
  };
}
function N(e) {
  return {
    valErrorId: "valError" + e[0].toUpperCase() + e.toLowerCase().slice(1)
  };
}
const se = { class: "field is-flex" }, ne = ["id", "name", "disabled", "aria-describedby"], de = ["for", "onKeypress"], oe = { class: "icon-text" }, re = {
  key: 0,
  class: "icon"
}, ue = ["id", "innerHTML"], ht = /* @__PURE__ */ Object.assign({
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
  setup(e, { emit: n }) {
    const a = e, b = n, g = $("legend", a.fieldName).inputId, d = G(), r = p({
      get() {
        return a.modelValue;
      },
      set(k) {
        b("update:modelValue", k);
      }
    });
    function m() {
      d.disabled != !0 && (r.value = !r.value);
    }
    return (k, I) => (l(), s("div", se, [
      e.isIndented ? (l(), s("div", {
        key: 0,
        class: c(["pr-1", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        S(t(x), { class: "has-text-grey rotate-135" })
      ], 2)) : o("", !0),
      i("div", null, [
        q(i("input", {
          id: e.fieldName,
          type: "checkbox",
          name: e.fieldName,
          class: "is-checkradio is-info",
          "onUpdate:modelValue": I[0] || (I[0] = (h) => r.value = h),
          disabled: e.isDisabled || e.isLocked,
          "aria-describedby": e.help ? t(g) : void 0
        }, null, 8, ne), [
          [W, r.value]
        ]),
        i("label", {
          tabindex: "0",
          for: e.fieldName,
          class: c(["label", e.labelClass]),
          onKeypress: P(C(m, ["prevent"]), ["space"])
        }, [
          i("span", oe, [
            i("span", null, y(k.$t(a.label)), 1),
            e.isLocked ? (l(), s("span", re, [
              S(t(B), { class: "icon-size-1" })
            ])) : o("", !0)
          ])
        ], 42, de),
        e.help ? (l(), s("p", {
          key: 0,
          id: t(g),
          class: "help",
          innerHTML: k.$t(e.help)
        }, null, 8, ue)) : o("", !0)
      ])
    ]));
  }
}), ce = { role: "alert" }, fe = ["id", "innerHTML"], T = {
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
    const n = e, { valErrorId: a } = N(n.field);
    return (b, g) => (l(), s("div", ce, [
      i("p", {
        id: t(a),
        class: c(["help", e.alertType]),
        innerHTML: e.error
      }, null, 10, fe)
    ]));
  }
}, me = { class: "field" }, ge = ["for"], be = { class: "icon-text" }, ye = {
  key: 0,
  class: "icon"
}, he = ["disabled", "id", "type", "value", "placeholder", "maxlength", "aria-describedby", "aria-invalid", "aria-errormessage"], ke = {
  key: 0,
  class: "icon is-small is-left"
}, ve = {
  key: 1,
  class: "icon is-small is-right"
}, $e = ["id", "innerHTML"], kt = /* @__PURE__ */ Object.assign({
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
    const n = e, { inputId: a } = $(n.inputType, n.fieldName + n.idSuffix), { valErrorId: b } = N(n.fieldName), g = $("legend", n.fieldName).inputId;
    return (d, r) => (l(), s("div", {
      class: c(["mb-3", { "pt-3": e.hasOffset, "is-flex": e.isIndented }])
    }, [
      e.isIndented ? (l(), s("div", {
        key: 0,
        class: c(["pr-1", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        S(t(x), { class: "has-text-grey rotate-135" })
      ], 2)) : o("", !0),
      i("div", me, [
        i("label", {
          for: t(a),
          class: c(["label", { "is-opacity-5": e.isDisabled || e.isLocked }])
        }, [
          i("span", be, [
            i("span", null, y(d.$t(n.label)), 1),
            e.isLocked ? (l(), s("span", ye, [
              S(t(B), { class: "icon-size-1" })
            ])) : o("", !0)
          ])
        ], 10, ge),
        i("div", {
          class: c(["control", { "has-icons-left": e.leftIcon, "has-icons-right": e.rightIcon }])
        }, [
          i("input", z({
            disabled: e.isDisabled || e.isLocked,
            id: t(a),
            type: e.inputType,
            class: "input",
            value: e.modelValue,
            placeholder: e.placeholder
          }, d.$attrs, {
            onInput: r[0] || (r[0] = (m) => d.$emit("update:modelValue", m.target.value)),
            onChange: r[1] || (r[1] = (m) => d.$emit("change:modelValue", m.target.value)),
            maxlength: e.maxLength,
            "aria-describedby": e.help ? t(g) : void 0,
            "aria-invalid": e.errorMessage != null,
            "aria-errormessage": e.errorMessage != null ? t(b) : void 0
          }), null, 16, he),
          e.leftIcon ? (l(), s("span", ke, [
            e.leftIcon ? (l(), v(t(E), {
              key: 0,
              name: e.leftIcon,
              "stroke-width": e.iconStrokeWidth,
              size: e.iconSize,
              color: e.iconColor
            }, null, 8, ["name", "stroke-width", "size", "color"])) : o("", !0)
          ])) : o("", !0),
          e.rightIcon ? (l(), s("span", ve, [
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
        e.help ? (l(), s("p", {
          key: 1,
          id: t(g),
          class: "help",
          innerHTML: d.$t(e.help)
        }, null, 8, $e)) : o("", !0)
      ])
    ], 2));
  }
}), Se = ["for"], Le = { class: "icon-text" }, Ie = {
  key: 0,
  class: "icon"
}, Me = { class: "control has-icons-right" }, pe = ["disabled", "id", "type", "value", "placeholder", "aria-describedby", "aria-invalid", "aria-errormessage"], Be = ["title"], Ce = ["title"], Te = ["innerHTML"], Ne = ["innerHTML"], Ve = ["id"], we = { class: "column is-one-third" }, xe = { class: "has-text-weight-semibold" }, De = { class: "column" }, Fe = { class: "has-text-weight-semibold" }, vt = /* @__PURE__ */ Object.assign({
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
    const n = e, { inputId: a } = $(n.inputType, n.fieldName + n.idSuffix), { valErrorId: b } = N(n.fieldName), g = $("legend", n.fieldName).inputId, d = w(n.inputType), r = w(!1), m = p(() => /[a-z]/.test(n.modelValue ?? "")), k = p(() => /[A-Z]/.test(n.modelValue ?? "")), I = p(() => /[0-9]/.test(n.modelValue ?? "")), h = p(() => /[^A-Za-z0-9]/.test(n.modelValue ?? "")), D = p(() => {
      var u;
      return ((u = n.modelValue) == null ? void 0 : u.length) >= 8;
    });
    function H(u) {
      typeof u.getModifierState == "function" && (r.value = !!u.getModifierState("CapsLock"));
    }
    function V(u) {
      d.value != u && (d.value = u);
    }
    return (u, f) => (l(), s("div", {
      class: c(["field", { "pt-3": e.hasOffset }])
    }, [
      i("label", {
        for: t(a),
        class: "label"
      }, [
        i("span", Le, [
          i("span", null, y(u.$t(n.label)), 1),
          e.isLocked ? (l(), s("span", Ie, [
            S(t(B), { class: "icon-size-1" })
          ])) : o("", !0)
        ])
      ], 8, Se),
      i("div", Me, [
        i("input", z({
          disabled: e.isDisabled || e.isLocked,
          id: t(a),
          type: d.value,
          class: "input",
          value: e.modelValue,
          placeholder: e.placeholder
        }, u.$attrs, {
          onInput: f[0] || (f[0] = (M) => u.$emit("update:modelValue", M.target.value)),
          onKeyup: H,
          "aria-describedby": e.help ? t(g) : void 0,
          "aria-invalid": e.errorMessage != null,
          "aria-errormessage": e.errorMessage != null ? t(b) : void 0
        }), null, 16, pe),
        d.value == "password" ? (l(), s("span", {
          key: 0,
          role: "button",
          id: "btnTogglePassword",
          tabindex: "0",
          class: "icon is-small is-right is-clickable",
          onKeyup: f[1] || (f[1] = P((M) => V("text"), ["enter"])),
          onClick: f[2] || (f[2] = (M) => V("text")),
          title: u.$t("tooltip.reveal_password")
        }, [
          S(t(X))
        ], 40, Be)) : (l(), s("span", {
          key: 1,
          role: "button",
          id: "btnTogglePassword",
          tabindex: "0",
          class: "icon is-small is-right is-clickable",
          onKeyup: f[3] || (f[3] = P((M) => V("password"), ["enter"])),
          onClick: f[4] || (f[4] = (M) => V("password")),
          title: u.$t("tooltip.hide_password")
        }, [
          S(t(Y))
        ], 40, Ce))
      ]),
      r.value ? (l(), s("p", {
        key: 0,
        class: "help is-warning",
        innerHTML: u.$t("message.caps_lock_is_on")
      }, null, 8, Te)) : o("", !0),
      e.errorMessage != null ? (l(), v(t(T), {
        key: 1,
        error: e.errorMessage,
        field: e.fieldName
      }, null, 8, ["error", "field"])) : o("", !0),
      e.help ? (l(), s("p", {
        key: 2,
        class: "help",
        innerHTML: u.$t(e.help)
      }, null, 8, Ne)) : o("", !0),
      e.showRules ? (l(), s("div", {
        key: 3,
        id: t(g),
        class: "columns is-mobile is-size-7 mt-0"
      }, [
        i("div", we, [
          i("span", xe, y(u.$t("message.mandatory_rules")), 1),
          f[5] || (f[5] = i("br", null, null, -1)),
          i("span", {
            class: c(["is-underscored", { "is-dot": D.value }]),
            id: "valPwdIsLongEnough"
          }, null, 2),
          L(y(u.$t("message.is_long_enough")), 1),
          f[6] || (f[6] = i("br", null, null, -1))
        ]),
        i("div", De, [
          i("span", Fe, y(u.$t("message.optional_rules_you_should_follow")), 1),
          f[7] || (f[7] = i("br", null, null, -1)),
          i("span", {
            class: c(["is-underscored", { "is-dot": m.value }]),
            id: "valPwdHasLowerCase"
          }, null, 2),
          L(y(u.$t("message.has_lower_case")), 1),
          f[8] || (f[8] = i("br", null, null, -1)),
          i("span", {
            class: c(["is-underscored", { "is-dot": k.value }]),
            id: "valPwdHasUpperCase"
          }, null, 2),
          L(y(u.$t("message.has_upper_case")), 1),
          f[9] || (f[9] = i("br", null, null, -1)),
          i("span", {
            class: c(["is-underscored", { "is-dot": h.value }]),
            id: "valPwdHasSpecialChar"
          }, null, 2),
          L(y(u.$t("message.has_special_char")), 1),
          f[10] || (f[10] = i("br", null, null, -1)),
          i("span", {
            class: c(["is-underscored", { "is-dot": I.value }]),
            id: "valPwdHasNumber"
          }, null, 2),
          L(y(u.$t("message.has_number")), 1)
        ])
      ], 8, Ve)) : o("", !0)
    ], 2));
  }
}), ze = { class: "field is-flex" }, He = ["for"], Pe = ["disabled", "id", "type", "value", "placeholder", "maxlength", "aria-describedby", "aria-invalid", "aria-errormessage"], Ee = {
  key: 0,
  class: "control"
}, Oe = ["title"], qe = { class: "icon" }, Ae = {
  key: 1,
  class: "control"
}, Ke = ["title"], Re = { class: "icon has-text-danger" }, Ue = ["id", "innerHTML"], $t = /* @__PURE__ */ Object.assign({
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
  setup(e, { emit: n }) {
    const a = e, { inputId: b } = $(a.inputType, a.fieldName + a.idSuffix), { valErrorId: g } = N(a.fieldName), d = $("legend", a.fieldName).inputId, r = w(a.enableProtection), m = w(!1), k = w(0), I = p(() => !!(a.isDisabled || a.isLocked || a.enableProtection == !0 && r.value == !0)), h = n;
    function D(u) {
      const f = u.target.value.replace(/\s+/g, "");
      h("update:modelValue", f);
    }
    function H(u) {
      let f = u.target.value;
      m.value = f.includes(" "), h("update:modelValue", f);
    }
    function V(u) {
      m.value = u.target.value.includes(" "), k.value += 1;
    }
    return (u, f) => (l(), s("div", ze, [
      e.isIndented ? (l(), s("div", {
        key: 0,
        class: c(["pr-1", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        S(t(x), { class: "has-text-grey rotate-135" })
      ], 2)) : o("", !0),
      i("div", null, [
        i("label", {
          for: t(b),
          class: c(["label", { "is-opacity-5": e.isDisabled || e.isLocked }])
        }, [
          L(y(u.$t(a.label)), 1),
          e.isLocked ? (l(), v(t(B), {
            key: 0,
            class: "ml-2 icon-size-1"
          })) : o("", !0)
        ], 10, He),
        i("div", {
          class: c(["field has-addons mb-0", { "pt-3": e.hasOffset }])
        }, [
          i("div", {
            class: c(["control", { "is-expanded": e.isExpanded }])
          }, [
            (l(), s("input", z({
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
              "aria-errormessage": e.errorMessage != null ? t(g) : void 0
            }), null, 16, Pe))
          ], 2),
          e.enableProtection && !e.isLocked ? (l(), v(t(R), { key: 0 }, {
            default: F(({ mode: M }) => [
              r.value ? (l(), s("div", Ee, [
                i("button", {
                  type: "button",
                  class: c(["button field-lock", { "is-dark": M == "dark" }]),
                  onClick: f[0] || (f[0] = C((U) => r.value = !1, ["stop"])),
                  title: u.$t("tooltip.unlock")
                }, [
                  i("span", qe, [
                    S(t(B))
                  ])
                ], 10, Oe)
              ])) : (l(), s("div", Ae, [
                i("button", {
                  type: "button",
                  class: c(["button field-unlock", { "is-dark": M == "dark" }]),
                  onClick: f[1] || (f[1] = C((U) => r.value = !0, ["stop"])),
                  title: u.$t("tooltip.lock")
                }, [
                  i("span", Re, [
                    S(t(_))
                  ])
                ], 10, Ke)
              ]))
            ]),
            _: 1
          })) : o("", !0)
        ], 2),
        m.value ? (l(), v(t(T), {
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
        e.help ? (l(), s("p", {
          key: 2,
          id: t(d),
          class: "help",
          innerHTML: u.$t(e.help)
        }, null, 8, Ue)) : o("", !0)
      ])
    ]));
  }
}), je = { class: "field is-flex" }, Ge = ["for"], We = { class: "control" }, Ze = { class: "select" }, Je = ["id", "disabled", "aria-describedby", "aria-invalid", "aria-errormessage"], Qe = ["value"], Xe = ["id", "innerHTML"], St = {
  __name: "FormSelect",
  props: /* @__PURE__ */ Z({
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
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const n = J(e, "modelValue"), a = e, { inputId: b } = $("select", a.fieldName + a.idSuffix), { valErrorId: g } = N(a.fieldName), d = $("legend", a.fieldName + a.idSuffix).inputId;
    return (r, m) => (l(), s("div", je, [
      e.isIndented ? (l(), s("div", {
        key: 0,
        class: c(["pr-1", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        S(t(x), { class: "has-text-grey rotate-135" })
      ], 2)) : o("", !0),
      i("div", null, [
        i("label", {
          for: t(b),
          class: c(["label", { "is-opacity-5": e.isDisabled || e.isLocked }])
        }, [
          L(y(r.$t(a.label)), 1),
          e.isLocked ? (l(), v(t(B), {
            key: 0,
            class: "ml-2 icon-size-1"
          })) : o("", !0)
        ], 10, Ge),
        i("div", We, [
          i("div", Ze, [
            q(i("select", {
              id: t(b),
              "onUpdate:modelValue": m[0] || (m[0] = (k) => n.value = k),
              disabled: e.isDisabled || e.isLocked,
              "aria-describedby": e.help ? t(d) : void 0,
              "aria-invalid": e.errorMessage != null,
              "aria-errormessage": e.errorMessage != null ? t(g) : void 0
            }, [
              (l(!0), s(A, null, K(e.options, (k) => (l(), s("option", {
                key: k.value,
                value: k.value
              }, y(r.$t(k.text)), 9, Qe))), 128))
            ], 8, Je), [
              [Q, n.value]
            ])
          ])
        ]),
        e.errorMessage != null ? (l(), v(t(T), {
          key: 0,
          error: e.errorMessage,
          field: e.fieldName
        }, null, 8, ["error", "field"])) : o("", !0),
        e.help ? (l(), s("p", {
          key: 1,
          id: t(d),
          class: "help",
          innerHTML: r.$t(e.help)
        }, null, 8, Xe)) : o("", !0)
      ])
    ]));
  }
}, Ye = ["for"], _e = ["disabled", "id", "value", "placeholder", "maxlength", "aria-describedby", "aria-invalid", "aria-errormessage"], et = ["id", "innerHTML"], Lt = /* @__PURE__ */ Object.assign({
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
    const n = e, { inputId: a } = $(n.inputType, n.fieldName + n.idSuffix), { valErrorId: b } = N(n.fieldName), g = $("legend", n.fieldName).inputId;
    return (d, r) => (l(), s("div", {
      class: c(["mb-3", { "pt-3": e.hasOffset, "is-flex": e.isIndented }])
    }, [
      e.isIndented ? (l(), s("div", {
        key: 0,
        class: c(["mx-2 pr-1", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        S(t(x), { class: "has-text-grey rotate-135" })
      ], 2)) : o("", !0),
      i("div", {
        class: c(["field", { "is-flex-grow-5": e.isIndented }])
      }, [
        e.label ? (l(), s("label", {
          key: 0,
          for: t(a),
          class: "label"
        }, [
          L(y(d.$t(n.label)), 1),
          e.isLocked ? (l(), v(t(B), {
            key: 0,
            class: "ml-2 icon-size-1"
          })) : o("", !0)
        ], 8, Ye)) : o("", !0),
        i("div", {
          class: c(["control", { "has-icons-left": e.leftIcon, "has-icons-right": e.rightIcon }])
        }, [
          i("textarea", z({
            disabled: e.isDisabled || e.isLocked,
            id: t(a),
            class: ["textarea has-fixed-size", e.fontSize],
            value: e.modelValue,
            placeholder: e.placeholder
          }, d.$attrs, {
            onInput: r[0] || (r[0] = (m) => d.$emit("update:modelValue", m.target.value)),
            onChange: r[1] || (r[1] = (m) => d.$emit("change:modelValue", m.target.value)),
            maxlength: e.maxLength,
            "aria-describedby": e.help ? t(g) : void 0,
            "aria-invalid": e.errorMessage != null,
            "aria-errormessage": e.errorMessage != null ? t(b) : void 0
          }), null, 16, _e)
        ], 2),
        e.errorMessage != null ? (l(), v(t(T), {
          key: 1,
          error: e.errorMessage,
          field: e.fieldName
        }, null, 8, ["error", "field"])) : o("", !0),
        e.help ? (l(), s("p", {
          key: 2,
          id: t(g),
          class: "help",
          innerHTML: d.$t(e.help)
        }, null, 8, et)) : o("", !0)
      ], 2)
    ], 2));
  }
}), tt = ["aria-describedby", "aria-invalid", "aria-errormessage"], lt = ["id", "aria-checked", "disabled", "onClick"], at = ["id", "checked", "value", "disabled"], it = ["innerHTML"], st = ["for"], nt = ["id"], It = {
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
  setup(e, { emit: n }) {
    const a = e, b = n, { valErrorId: g } = N(a.fieldName), d = $("legend", a.fieldName).inputId;
    function r(m) {
      b("update:modelValue", m);
    }
    return (m, k) => (l(), s("div", {
      class: c(["field", { "pt-3": e.hasOffset }])
    }, [
      e.label ? (l(), s("span", {
        key: 0,
        class: c(["label", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        L(y(m.$t(a.label)), 1),
        e.isLocked ? (l(), v(t(B), {
          key: 0,
          class: "ml-2 icon-size-1"
        })) : o("", !0)
      ], 2)) : o("", !0),
      i("div", {
        id: "rdoGroup",
        role: "radiogroup",
        "aria-describedby": e.help ? t(d) : void 0,
        "aria-invalid": e.errorMessage != null,
        "aria-errormessage": e.errorMessage != null ? t(g) : void 0,
        class: "is-toggle buttons"
      }, [
        S(t(R), null, {
          default: F(({ mode: I }) => [
            (l(!0), s(A, null, K(e.choices, (h) => (l(), s("button", {
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
              i("input", {
                id: t($)("radio", h.value).inputId,
                type: "radio",
                class: "is-hidden",
                checked: e.modelValue === h.value,
                value: h.value,
                disabled: e.isDisabled || e.isLocked
              }, null, 8, at),
              h.legend ? (l(), s("span", {
                key: 0,
                innerHTML: m.$t(h.legend),
                class: "is-block is-size-7"
              }, null, 8, it)) : o("", !0),
              h.icon ? (l(), v(t(E), {
                key: 1,
                name: h.icon,
                class: "mr-2"
              }, null, 8, ["name"])) : o("", !0),
              i("label", {
                for: t($)("button", e.fieldName + h.value).inputId,
                class: "is-clickable"
              }, y(m.$t(h.text)), 9, st)
            ], 10, lt))), 128))
          ]),
          _: 1
        })
      ], 8, tt),
      e.errorMessage != null ? (l(), v(t(T), {
        key: 1,
        error: e.errorMessage,
        field: e.fieldName
      }, null, 8, ["error", "field"])) : o("", !0),
      e.help ? (l(), s("p", {
        key: 2,
        id: t(d),
        class: "help"
      }, y(m.$t(a.help)), 9, nt)) : o("", !0)
    ], 2));
  }
}, dt = {
  key: 0,
  class: "control"
}, ot = ["aria-label"], rt = ["aria-label"], ut = {
  key: 1,
  class: "control"
}, Mt = {
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
  setup(e, { emit: n }) {
    const a = ee(), b = e, g = p(() => "button" + (a.value === "dark" && b.isText == !1 && b.isCapture == !1 ? " is-dark" : "") + (b.isText == !0 ? " is-text" : "") + (b.isCapture == !0 ? " is-large is-warning" : "") + (b.isRounded == !0 ? " is-rounded" : ""));
    return (d, r) => e.useLinkTag ? (l(), s("p", dt, [
      e.action == "close" ? (l(), s("a", {
        key: 0,
        id: "lnkClose",
        onClick: r[0] || (r[0] = C((m) => d.$emit("closed"), ["prevent"])),
        class: c(g.value),
        tabindex: "0",
        role: "button",
        "aria-label": d.$t("message.close_the_x_page", { pagetitle: e.currentPageTitle })
      }, y(d.$t("message.close")), 11, ot)) : e.action == "back" ? (l(), s("a", {
        key: 1,
        id: "lnkBack",
        onClick: r[1] || (r[1] = C((m) => d.$emit("goback"), ["prevent"])),
        class: c(g.value),
        "aria-label": d.$t("message.go_back_to_the_x_page", { pagetitle: e.previousPageTitle })
      }, y(d.$t("message.back")), 11, rt)) : e.action == "cancel" ? (l(), s("a", {
        key: 2,
        id: "lnkCancel",
        onClick: r[2] || (r[2] = C((m) => d.$emit("canceled"), ["prevent"])),
        class: c(g.value)
      }, y(d.$t("message.cancel")), 3)) : o("", !0)
    ])) : (l(), s("p", ut, [
      e.action == "close" ? (l(), s("button", {
        key: 0,
        id: "btnClose",
        class: c(g.value),
        onClick: r[3] || (r[3] = (m) => d.$emit("closed")),
        type: "button"
      }, y(d.$t("message.close")), 3)) : o("", !0),
      e.action == "cancel" ? (l(), s("button", {
        key: 1,
        id: "btnCancel",
        class: c(g.value),
        onClick: r[4] || (r[4] = (m) => d.$emit("canceled")),
        type: "button"
      }, y(d.$t("message.cancel")), 3)) : o("", !0)
    ]));
  }
};
export {
  yt as FormButtons,
  ht as FormCheckbox,
  kt as FormField,
  T as FormFieldError,
  vt as FormPasswordField,
  $t as FormProtectedField,
  St as FormSelect,
  Lt as FormTextarea,
  It as FormToggle,
  Mt as NavigationButton,
  O as VueButton
};
