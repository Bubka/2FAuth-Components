import { createElementBlock as i, openBlock as n, normalizeClass as f, renderSlot as m, createTextVNode as o, toDisplayString as s, createElementVNode as y, createCommentVNode as g, createVNode as d, unref as u, withCtx as c } from "vue";
const B = ["disabled"], r = {
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
    return (l, a) => (n(), i("button", {
      type: "button",
      disabled: e.isLoading || e.isDisabled,
      class: f({
        button: !0,
        [`${e.color}`]: !0,
        "is-loading": e.isLoading
      })
    }, [
      m(l.$slots, "default", {}, () => [
        o(s(e.label), 1)
      ])
    ], 10, B));
  }
}, S = { class: "field is-grouped" }, k = { class: "control" }, L = {
  key: 0,
  class: "control"
}, $ = {
  __name: "VueFormButtons",
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
      default: "[[submit]]"
    },
    cancelLabel: {
      type: String,
      default: "[[cancel]]"
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
  setup(e, { emit: l }) {
    const a = l;
    return (C, t) => (n(), i("div", S, [
      y("div", k, [
        d(u(r), {
          onClick: t[0] || (t[0] = (b) => a("ok")),
          id: e.submitId,
          type: "submit",
          color: e.color,
          isLoading: e.isBusy,
          disabled: e.isDisabled
        }, {
          default: c(() => [
            o(s(e.submitLabel), 1)
          ]),
          _: 1
        }, 8, ["id", "color", "isLoading", "disabled"])
      ]),
      e.showCancelButton ? (n(), i("div", L, [
        d(u(r), {
          onClick: t[1] || (t[1] = (b) => a("ko")),
          id: e.cancelId,
          color: "is-text"
        }, {
          default: c(() => [
            o(s(e.cancelLabel), 1)
          ]),
          _: 1
        }, 8, ["id"])
      ])) : g("", !0)
    ]));
  }
};
export {
  r as VueButton,
  $ as VueFormButtons
};
