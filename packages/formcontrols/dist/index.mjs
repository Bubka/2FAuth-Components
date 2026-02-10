import { createElementBlock as s, openBlock as l, normalizeClass as f, renderSlot as A, createTextVNode as I, toDisplayString as c, createElementVNode as i, createCommentVNode as o, createVNode as S, unref as t, withCtx as F, useAttrs as H, computed as B, withDirectives as K, vModelCheckbox as W, withKeys as E, withModifiers as N, createBlock as v, mergeProps as z, ref as T, mergeModels as Z, useModel as J, Fragment as R, renderList as U, vModelSelect as Q } from "vue";
import { LucideChevronRight as x, LucideLock as C, LucideEyeOff as X, LucideEye as Y, LucideLockOpen as _ } from "lucide-vue-next";
import { LucideGenericIcon as O } from "@2fauth/ui";
import { UseColorMode as j } from "@vueuse/components";
import { useColorMode as ee } from "@vueuse/core";
const te = ["type", "disabled"], q = {
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
    return (a, y) => (l(), s("button", {
      type: e.nativeType,
      disabled: e.isLoading || e.isDisabled,
      class: f({
        button: !0,
        [`${e.color}`]: !0,
        "is-loading": e.isLoading
      })
    }, [
      A(a.$slots, "default", {}, () => [
        I(c(a.$t(n.label)), 1)
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
      default: "label.submit"
    },
    cancelLabel: {
      type: String,
      default: "label.cancel"
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
    return (y, b) => (l(), s("div", le, [
      i("div", ae, [
        S(t(q), {
          onClick: b[0] || (b[0] = (d) => a("submit")),
          id: e.submitId,
          nativeType: "submit",
          color: e.color,
          isLoading: e.isBusy,
          disabled: e.isDisabled
        }, {
          default: F(() => [
            I(c(y.$t(e.submitLabel)), 1)
          ]),
          _: 1
        }, 8, ["id", "color", "isLoading", "disabled"])
      ]),
      e.showCancelButton ? (l(), s("div", ie, [
        S(t(q), {
          onClick: b[1] || (b[1] = (d) => a("cancel")),
          id: e.cancelId,
          nativeType: "button",
          color: "is-text"
        }, {
          default: F(() => [
            I(c(y.$t(e.cancelLabel)), 1)
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
function w(e) {
  return {
    valErrorId: "valError" + e[0].toUpperCase() + e.toLowerCase().slice(1)
  };
}
const se = { class: "field is-flex" }, ne = ["id", "name", "disabled", "aria-describedby"], de = ["for", "onKeypress"], oe = { class: "icon-text" }, re = {
  key: 0,
  class: "icon"
}, ue = ["id"], ht = /* @__PURE__ */ Object.assign({
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
    const a = e, y = n, b = $("legend", a.fieldName).inputId, d = H(), r = B({
      get() {
        return a.modelValue;
      },
      set(k) {
        y("update:modelValue", k);
      }
    });
    function m() {
      d.disabled != !0 && (r.value = !r.value);
    }
    return (k, L) => (l(), s("div", se, [
      e.isIndented ? (l(), s("div", {
        key: 0,
        class: f(["pr-1", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        S(t(x), { class: "has-text-grey rotate-135" })
      ], 2)) : o("", !0),
      i("div", null, [
        K(i("input", {
          id: e.fieldName,
          type: "checkbox",
          name: e.fieldName,
          class: "is-checkradio is-info",
          "onUpdate:modelValue": L[0] || (L[0] = (h) => r.value = h),
          disabled: e.isDisabled || e.isLocked,
          "aria-describedby": e.help ? t(b) : void 0
        }, null, 8, ne), [
          [W, r.value]
        ]),
        i("label", {
          tabindex: "0",
          for: e.fieldName,
          class: f(["label", e.labelClass]),
          onKeypress: E(N(m, ["prevent"]), ["space"])
        }, [
          i("span", oe, [
            i("span", null, c(k.$t(a.label)), 1),
            e.isLocked ? (l(), s("span", re, [
              S(t(C), { class: "icon-size-1" })
            ])) : o("", !0)
          ])
        ], 42, de),
        e.help ? (l(), s("p", {
          key: 0,
          id: t(b),
          class: "help"
        }, c(k.$t(e.help)), 9, ue)) : o("", !0)
      ])
    ]));
  }
}), ce = { role: "alert" }, fe = ["id"], V = {
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
    const n = e, { valErrorId: a } = w(n.field);
    return (y, b) => (l(), s("div", ce, [
      i("p", {
        id: t(a),
        class: f(["help", e.alertType])
      }, c(e.error), 11, fe)
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
}, $e = ["id"], kt = /* @__PURE__ */ Object.assign({
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
    const n = e, { inputId: a } = $(n.inputType, n.fieldName + n.idSuffix), { valErrorId: y } = w(n.fieldName), b = $("legend", n.fieldName).inputId;
    return (d, r) => (l(), s("div", {
      class: f(["mb-3", { "pt-3": e.hasOffset, "is-flex": e.isIndented }])
    }, [
      e.isIndented ? (l(), s("div", {
        key: 0,
        class: f(["pr-1", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        S(t(x), { class: "has-text-grey rotate-135" })
      ], 2)) : o("", !0),
      i("div", me, [
        i("label", {
          for: t(a),
          class: f(["label", { "is-opacity-5": e.isDisabled || e.isLocked }])
        }, [
          i("span", be, [
            i("span", null, c(d.$t(n.label)), 1),
            e.isLocked ? (l(), s("span", ye, [
              S(t(C), { class: "icon-size-1" })
            ])) : o("", !0)
          ])
        ], 10, ge),
        i("div", {
          class: f(["control", { "has-icons-left": e.leftIcon, "has-icons-right": e.rightIcon }])
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
            "aria-describedby": e.help ? t(b) : void 0,
            "aria-invalid": e.errorMessage != null,
            "aria-errormessage": e.errorMessage != null ? t(y) : void 0
          }), null, 16, he),
          e.leftIcon ? (l(), s("span", ke, [
            e.leftIcon ? (l(), v(t(O), {
              key: 0,
              name: e.leftIcon,
              "stroke-width": e.iconStrokeWidth,
              size: e.iconSize,
              color: e.iconColor
            }, null, 8, ["name", "stroke-width", "size", "color"])) : o("", !0)
          ])) : o("", !0),
          e.rightIcon ? (l(), s("span", ve, [
            e.rightIcon ? (l(), v(t(O), {
              key: 0,
              name: e.rightIcon,
              "stroke-width": e.iconStrokeWidth,
              size: e.iconSize,
              color: e.iconColor
            }, null, 8, ["name", "stroke-width", "size", "color"])) : o("", !0)
          ])) : o("", !0)
        ], 2),
        e.errorMessage != null ? (l(), v(t(V), {
          key: 0,
          error: e.errorMessage,
          field: e.fieldName
        }, null, 8, ["error", "field"])) : o("", !0),
        e.help ? (l(), s("p", {
          key: 1,
          id: t(b),
          class: "help"
        }, c(d.$t(e.help)), 9, $e)) : o("", !0)
      ])
    ], 2));
  }
}), Se = ["for"], Ie = { class: "icon-text" }, Le = {
  key: 0,
  class: "icon"
}, pe = { class: "control has-icons-right" }, Be = ["disabled", "id", "type", "value", "placeholder", "aria-describedby", "aria-invalid", "aria-errormessage"], Ce = ["title"], Ne = ["title"], Ve = {
  key: 0,
  class: "help is-warning"
}, we = {
  key: 2,
  class: "help"
}, Me = ["id"], Te = { class: "column is-one-third" }, xe = { class: "has-text-weight-semibold" }, De = { class: "column" }, Fe = { class: "has-text-weight-semibold" }, vt = /* @__PURE__ */ Object.assign({
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
    const n = e, { inputId: a } = $(n.inputType, n.fieldName + n.idSuffix), { valErrorId: y } = w(n.fieldName), b = $("legend", n.fieldName).inputId, d = T(n.inputType), r = T(!1), m = B(() => /[a-z]/.test(n.modelValue ?? "")), k = B(() => /[A-Z]/.test(n.modelValue ?? "")), L = B(() => /[0-9]/.test(n.modelValue ?? "")), h = B(() => /[^A-Za-z0-9]/.test(n.modelValue ?? "")), D = B(() => {
      var u;
      return ((u = n.modelValue) == null ? void 0 : u.length) >= 8;
    });
    function P(u) {
      typeof u.getModifierState == "function" && (r.value = !!u.getModifierState("CapsLock"));
    }
    function M(u) {
      d.value != u && (d.value = u);
    }
    return (u, g) => (l(), s("div", {
      class: f(["field", { "pt-3": e.hasOffset }])
    }, [
      i("label", {
        for: t(a),
        class: "label"
      }, [
        i("span", Ie, [
          i("span", null, c(u.$t(n.label)), 1),
          e.isLocked ? (l(), s("span", Le, [
            S(t(C), { class: "icon-size-1" })
          ])) : o("", !0)
        ])
      ], 8, Se),
      i("div", pe, [
        i("input", z({
          disabled: e.isDisabled || e.isLocked,
          id: t(a),
          type: d.value,
          class: "input",
          value: e.modelValue,
          placeholder: e.placeholder
        }, u.$attrs, {
          onInput: g[0] || (g[0] = (p) => u.$emit("update:modelValue", p.target.value)),
          onKeyup: P,
          "aria-describedby": e.help ? t(b) : void 0,
          "aria-invalid": e.errorMessage != null,
          "aria-errormessage": e.errorMessage != null ? t(y) : void 0
        }), null, 16, Be),
        d.value == "password" ? (l(), s("span", {
          key: 0,
          role: "button",
          id: "btnTogglePassword",
          tabindex: "0",
          class: "icon is-small is-right is-clickable",
          onKeyup: g[1] || (g[1] = E((p) => M("text"), ["enter"])),
          onClick: g[2] || (g[2] = (p) => M("text")),
          title: u.$t("tooltip.reveal_password")
        }, [
          S(t(X))
        ], 40, Ce)) : (l(), s("span", {
          key: 1,
          role: "button",
          id: "btnTogglePassword",
          tabindex: "0",
          class: "icon is-small is-right is-clickable",
          onKeyup: g[3] || (g[3] = E((p) => M("password"), ["enter"])),
          onClick: g[4] || (g[4] = (p) => M("password")),
          title: u.$t("tooltip.hide_password")
        }, [
          S(t(Y))
        ], 40, Ne))
      ]),
      r.value ? (l(), s("p", Ve, c(u.$t("message.caps_lock_is_on")), 1)) : o("", !0),
      e.errorMessage != null ? (l(), v(t(V), {
        key: 1,
        error: e.errorMessage,
        field: e.fieldName
      }, null, 8, ["error", "field"])) : o("", !0),
      e.help ? (l(), s("p", we, c(u.$t(e.help)), 1)) : o("", !0),
      e.showRules ? (l(), s("div", {
        key: 3,
        id: t(b),
        class: "columns is-mobile is-size-7 mt-0"
      }, [
        i("div", Te, [
          i("span", xe, c(u.$t("message.mandatory_rules")), 1),
          g[5] || (g[5] = i("br", null, null, -1)),
          i("span", {
            class: f(["is-underscored", { "is-dot": D.value }]),
            id: "valPwdIsLongEnough"
          }, null, 2),
          I(c(u.$t("message.is_long_enough")), 1),
          g[6] || (g[6] = i("br", null, null, -1))
        ]),
        i("div", De, [
          i("span", Fe, c(u.$t("message.optional_rules_you_should_follow")), 1),
          g[7] || (g[7] = i("br", null, null, -1)),
          i("span", {
            class: f(["is-underscored", { "is-dot": m.value }]),
            id: "valPwdHasLowerCase"
          }, null, 2),
          I(c(u.$t("message.has_lower_case")), 1),
          g[8] || (g[8] = i("br", null, null, -1)),
          i("span", {
            class: f(["is-underscored", { "is-dot": k.value }]),
            id: "valPwdHasUpperCase"
          }, null, 2),
          I(c(u.$t("message.has_upper_case")), 1),
          g[9] || (g[9] = i("br", null, null, -1)),
          i("span", {
            class: f(["is-underscored", { "is-dot": h.value }]),
            id: "valPwdHasSpecialChar"
          }, null, 2),
          I(c(u.$t("message.has_special_char")), 1),
          g[10] || (g[10] = i("br", null, null, -1)),
          i("span", {
            class: f(["is-underscored", { "is-dot": L.value }]),
            id: "valPwdHasNumber"
          }, null, 2),
          I(c(u.$t("message.has_number")), 1)
        ])
      ], 8, Me)) : o("", !0)
    ], 2));
  }
}), ze = { class: "field is-flex" }, Pe = ["for"], Ee = ["disabled", "id", "type", "value", "placeholder", "maxlength", "aria-describedby", "aria-invalid", "aria-errormessage"], Oe = {
  key: 0,
  class: "control"
}, qe = ["title"], Ae = { class: "icon" }, Ke = {
  key: 1,
  class: "control"
}, Re = ["title"], Ue = { class: "icon has-text-danger" }, je = ["id"], $t = /* @__PURE__ */ Object.assign({
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
    const a = e, { inputId: y } = $(a.inputType, a.fieldName + a.idSuffix), { valErrorId: b } = w(a.fieldName), d = $("legend", a.fieldName).inputId, r = T(a.enableProtection), m = T(!1), k = T(0), L = B(() => !!(a.isDisabled || a.isLocked || a.enableProtection == !0 && r.value == !0)), h = n;
    function D(u) {
      const g = u.target.value.replace(/\s+/g, "");
      h("update:modelValue", g);
    }
    function P(u) {
      let g = u.target.value;
      m.value = g.includes(" "), h("update:modelValue", g);
    }
    function M(u) {
      m.value = u.target.value.includes(" "), k.value += 1;
    }
    return (u, g) => (l(), s("div", ze, [
      e.isIndented ? (l(), s("div", {
        key: 0,
        class: f(["pr-1", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        S(t(x), { class: "has-text-grey rotate-135" })
      ], 2)) : o("", !0),
      i("div", null, [
        i("label", {
          for: t(y),
          class: f(["label", { "is-opacity-5": e.isDisabled || e.isLocked }])
        }, [
          I(c(u.$t(a.label)), 1),
          e.isLocked ? (l(), v(t(C), {
            key: 0,
            class: "ml-2 icon-size-1"
          })) : o("", !0)
        ], 10, Pe),
        i("div", {
          class: f(["field has-addons mb-0", { "pt-3": e.hasOffset }])
        }, [
          i("div", {
            class: f(["control", { "is-expanded": e.isExpanded }])
          }, [
            (l(), s("input", z({
              key: k.value,
              disabled: L.value,
              id: t(y),
              type: e.inputType,
              class: "input",
              value: e.modelValue,
              placeholder: e.placeholder
            }, u.$attrs, {
              onInput: P,
              onChange: D,
              onBlur: M,
              maxlength: e.maxLength,
              "aria-describedby": e.help ? t(d) : void 0,
              "aria-invalid": e.errorMessage != null,
              "aria-errormessage": e.errorMessage != null ? t(b) : void 0
            }), null, 16, Ee))
          ], 2),
          e.enableProtection && !e.isLocked ? (l(), v(t(j), { key: 0 }, {
            default: F(({ mode: p }) => [
              r.value ? (l(), s("div", Oe, [
                i("button", {
                  type: "button",
                  class: f(["button field-lock", { "is-dark": p == "dark" }]),
                  onClick: g[0] || (g[0] = N((G) => r.value = !1, ["stop"])),
                  title: u.$t("tooltip.unlock")
                }, [
                  i("span", Ae, [
                    S(t(C))
                  ])
                ], 10, qe)
              ])) : (l(), s("div", Ke, [
                i("button", {
                  type: "button",
                  class: f(["button field-unlock", { "is-dark": p == "dark" }]),
                  onClick: g[1] || (g[1] = N((G) => r.value = !0, ["stop"])),
                  title: u.$t("tooltip.lock")
                }, [
                  i("span", Ue, [
                    S(t(_))
                  ])
                ], 10, Re)
              ]))
            ]),
            _: 1
          })) : o("", !0)
        ], 2),
        m.value ? (l(), v(t(V), {
          key: 0,
          error: u.$t("error.spaces_are_ignored"),
          field: "spaces",
          alertType: "is-warning"
        }, null, 8, ["error"])) : o("", !0),
        e.errorMessage != null ? (l(), v(t(V), {
          key: 1,
          error: e.errorMessage,
          field: e.fieldName
        }, null, 8, ["error", "field"])) : o("", !0),
        e.help ? (l(), s("p", {
          key: 2,
          id: t(d),
          class: "help"
        }, c(u.$t(e.help)), 9, je)) : o("", !0)
      ])
    ]));
  }
}), Ge = { class: "field is-flex" }, He = ["for"], We = { class: "control" }, Ze = { class: "select" }, Je = ["id", "disabled", "aria-describedby", "aria-invalid", "aria-errormessage"], Qe = ["value"], Xe = ["id"], St = {
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
    const n = J(e, "modelValue"), a = e, { inputId: y } = $("select", a.fieldName + a.idSuffix), { valErrorId: b } = w(a.fieldName), d = $("legend", a.fieldName + a.idSuffix).inputId;
    return (r, m) => (l(), s("div", Ge, [
      e.isIndented ? (l(), s("div", {
        key: 0,
        class: f(["pr-1", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        S(t(x), { class: "has-text-grey rotate-135" })
      ], 2)) : o("", !0),
      i("div", null, [
        i("label", {
          for: t(y),
          class: f(["label", { "is-opacity-5": e.isDisabled || e.isLocked }])
        }, [
          I(c(r.$t(a.label)), 1),
          e.isLocked ? (l(), v(t(C), {
            key: 0,
            class: "ml-2 icon-size-1"
          })) : o("", !0)
        ], 10, He),
        i("div", We, [
          i("div", Ze, [
            K(i("select", {
              id: t(y),
              "onUpdate:modelValue": m[0] || (m[0] = (k) => n.value = k),
              disabled: e.isDisabled || e.isLocked,
              "aria-describedby": e.help ? t(d) : void 0,
              "aria-invalid": e.errorMessage != null,
              "aria-errormessage": e.errorMessage != null ? t(b) : void 0
            }, [
              (l(!0), s(R, null, U(e.options, (k) => (l(), s("option", {
                key: k.value,
                value: k.value
              }, c(r.$t(k.text)), 9, Qe))), 128))
            ], 8, Je), [
              [Q, n.value]
            ])
          ]),
          A(r.$slots, "default")
        ]),
        e.errorMessage != null ? (l(), v(t(V), {
          key: 0,
          error: e.errorMessage,
          field: e.fieldName
        }, null, 8, ["error", "field"])) : o("", !0),
        e.help ? (l(), s("p", {
          key: 1,
          id: t(d),
          class: "help"
        }, c(r.$t(e.help)), 9, Xe)) : o("", !0)
      ])
    ]));
  }
}, Ye = ["for"], _e = ["disabled", "id", "value", "placeholder", "maxlength", "aria-describedby", "aria-invalid", "aria-errormessage"], et = ["id"], It = /* @__PURE__ */ Object.assign({
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
    const n = e, { inputId: a } = $(n.inputType, n.fieldName + n.idSuffix), { valErrorId: y } = w(n.fieldName), b = $("legend", n.fieldName).inputId;
    return (d, r) => (l(), s("div", {
      class: f(["mb-3", { "pt-3": e.hasOffset, "is-flex": e.isIndented }])
    }, [
      e.isIndented ? (l(), s("div", {
        key: 0,
        class: f(["mx-2 pr-1", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        S(t(x), { class: "has-text-grey rotate-135" })
      ], 2)) : o("", !0),
      i("div", {
        class: f(["field", { "is-flex-grow-5": e.isIndented }])
      }, [
        e.label ? (l(), s("label", {
          key: 0,
          for: t(a),
          class: "label"
        }, [
          I(c(d.$t(n.label)), 1),
          e.isLocked ? (l(), v(t(C), {
            key: 0,
            class: "ml-2 icon-size-1"
          })) : o("", !0)
        ], 8, Ye)) : o("", !0),
        i("div", {
          class: f(["control", { "has-icons-left": e.leftIcon, "has-icons-right": e.rightIcon }])
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
            "aria-describedby": e.help ? t(b) : void 0,
            "aria-invalid": e.errorMessage != null,
            "aria-errormessage": e.errorMessage != null ? t(y) : void 0
          }), null, 16, _e)
        ], 2),
        e.errorMessage != null ? (l(), v(t(V), {
          key: 1,
          error: e.errorMessage,
          field: e.fieldName
        }, null, 8, ["error", "field"])) : o("", !0),
        e.help ? (l(), s("p", {
          key: 2,
          id: t(b),
          class: "help"
        }, c(d.$t(e.help)), 9, et)) : o("", !0)
      ], 2)
    ], 2));
  }
}), tt = ["aria-describedby", "aria-invalid", "aria-errormessage"], lt = ["id", "title", "aria-checked", "disabled", "onClick"], at = ["id", "checked", "value", "disabled"], it = {
  key: 0,
  class: "is-block is-size-7"
}, st = ["for"], nt = ["id"], Lt = {
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
    const a = e, y = n, { valErrorId: b } = w(a.fieldName), d = $("legend", a.fieldName).inputId;
    function r(m) {
      y("update:modelValue", m);
    }
    return (m, k) => (l(), s("div", {
      class: f(["field", { "pt-3": e.hasOffset }])
    }, [
      e.label ? (l(), s("span", {
        key: 0,
        class: f(["label", { "is-opacity-5": e.isDisabled || e.isLocked }])
      }, [
        I(c(m.$t(a.label)), 1),
        e.isLocked ? (l(), v(t(C), {
          key: 0,
          class: "ml-2 icon-size-1"
        })) : o("", !0)
      ], 2)) : o("", !0),
      i("div", {
        id: "rdoGroup",
        role: "radiogroup",
        "aria-describedby": e.help ? t(d) : void 0,
        "aria-invalid": e.errorMessage != null,
        "aria-errormessage": e.errorMessage != null ? t(b) : void 0,
        class: "is-toggle buttons"
      }, [
        S(t(j), null, {
          default: F(({ mode: L }) => [
            (l(!0), s(R, null, U(e.choices, (h) => (l(), s("button", {
              key: h.value,
              id: t($)("button", e.fieldName + h.value).inputId,
              role: "radio",
              type: "button",
              class: f(["button", {
                "is-link": e.modelValue === h.value,
                "is-dark": L == "dark",
                "is-multiline": h.legend
              }]),
              title: h.title ? m.$t(h.title) : m.$t(h.text),
              "aria-checked": e.modelValue === h.value,
              disabled: e.isDisabled || e.isLocked,
              onClick: N((D) => r(h.value), ["stop"])
            }, [
              i("input", {
                id: t($)("radio", h.value).inputId,
                type: "radio",
                class: "is-hidden",
                checked: e.modelValue === h.value,
                value: h.value,
                disabled: e.isDisabled || e.isLocked
              }, null, 8, at),
              h.legend ? (l(), s("span", it, c(m.$t(h.legend)), 1)) : o("", !0),
              h.icon ? (l(), v(t(O), {
                key: 1,
                name: h.icon,
                class: "mr-2"
              }, null, 8, ["name"])) : o("", !0),
              i("label", {
                for: t($)("button", e.fieldName + h.value).inputId,
                class: "is-clickable"
              }, c(m.$t(h.text)), 9, st)
            ], 10, lt))), 128))
          ]),
          _: 1
        })
      ], 8, tt),
      e.errorMessage != null ? (l(), v(t(V), {
        key: 1,
        error: e.errorMessage,
        field: e.fieldName
      }, null, 8, ["error", "field"])) : o("", !0),
      e.help ? (l(), s("p", {
        key: 2,
        id: t(d),
        class: "help"
      }, c(m.$t(a.help)), 9, nt)) : o("", !0)
    ], 2));
  }
}, dt = {
  key: 0,
  class: "control"
}, ot = ["aria-label"], rt = ["aria-label"], ut = {
  key: 1,
  class: "control"
}, pt = {
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
    const a = ee(), y = e, b = B(() => "button" + (a.value === "dark" && y.isText == !1 && y.isCapture == !1 ? " is-dark" : "") + (y.isText == !0 ? " is-text" : "") + (y.isCapture == !0 ? " is-large is-warning" : "") + (y.isRounded == !0 ? " is-rounded" : ""));
    return (d, r) => e.useLinkTag ? (l(), s("p", dt, [
      e.action == "close" ? (l(), s("a", {
        key: 0,
        id: "lnkClose",
        onClick: r[0] || (r[0] = N((m) => d.$emit("closed"), ["prevent"])),
        class: f(b.value),
        tabindex: "0",
        role: "button",
        "aria-label": d.$t("tooltip.close_the_x_page", { pagetitle: e.currentPageTitle })
      }, c(d.$t("label.close")), 11, ot)) : e.action == "back" ? (l(), s("a", {
        key: 1,
        id: "lnkBack",
        onClick: r[1] || (r[1] = N((m) => d.$emit("goback"), ["prevent"])),
        class: f(b.value),
        "aria-label": d.$t("tooltip.go_back_to_the_x_page", { pagetitle: e.previousPageTitle })
      }, c(d.$t("label.back")), 11, rt)) : e.action == "cancel" ? (l(), s("a", {
        key: 2,
        id: "lnkCancel",
        onClick: r[2] || (r[2] = N((m) => d.$emit("canceled"), ["prevent"])),
        class: f(b.value)
      }, c(d.$t("label.cancel")), 3)) : o("", !0)
    ])) : (l(), s("p", ut, [
      e.action == "close" ? (l(), s("button", {
        key: 0,
        id: "btnClose",
        class: f(b.value),
        onClick: r[3] || (r[3] = (m) => d.$emit("closed")),
        type: "button"
      }, c(d.$t("label.close")), 3)) : o("", !0),
      e.action == "cancel" ? (l(), s("button", {
        key: 1,
        id: "btnCancel",
        class: f(b.value),
        onClick: r[4] || (r[4] = (m) => d.$emit("canceled")),
        type: "button"
      }, c(d.$t("label.cancel")), 3)) : o("", !0)
    ]));
  }
};
export {
  yt as FormButtons,
  ht as FormCheckbox,
  kt as FormField,
  V as FormFieldError,
  vt as FormPasswordField,
  $t as FormProtectedField,
  St as FormSelect,
  It as FormTextarea,
  Lt as FormToggle,
  pt as NavigationButton,
  q as VueButton
};
