import { createElementBlock as o, openBlock as a, normalizeClass as l, renderSlot as n } from "vue";
const s = ["disabled"], u = {
  __name: "VueButton",
  props: {
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
    return (t, i) => (a(), o("button", {
      type: "button",
      disabled: e.isLoading || e.isDisabled,
      class: l({
        button: !0,
        [`${e.color}`]: !0,
        "is-loading": e.isLoading
      })
    }, [
      n(t.$slots, "default")
    ], 10, s));
  }
};
export {
  u as VueButton
};
