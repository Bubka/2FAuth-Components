import { createElementBlock as l, openBlock as a, normalizeClass as o, renderSlot as n, createTextVNode as i, toDisplayString as s } from "vue";
const d = ["disabled"], c = {
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
    }
  },
  setup(e) {
    return (t, u) => (a(), l("button", {
      type: "button",
      disabled: e.isLoading || e.isDisabled,
      class: o({
        button: !0,
        [`${e.color}`]: !0,
        "is-loading": e.isLoading
      })
    }, [
      n(t.$slots, "default", {}, () => [
        i(s(e.label), 1)
      ])
    ], 10, d));
  }
};
export {
  c as VueButton
};
