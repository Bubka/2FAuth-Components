import { ref as n } from "vue";
import { defineStore as d } from "pinia";
const f = d("errorHandler", () => {
  const o = n(null), s = n(null), a = n(null), l = n(null), u = n(null);
  function t(e) {
    o.value = e, e.response ? (e.response.data && (s.value = e.response.data.message ?? null, l.value = e.response.data.originalMessage ?? null, a.value = e.response.data.reason ?? null, u.value = e.response.data.debug ?? null), e.response.status === 407 ? (s.value = "error.auth_proxy_failed", l.value = "error.auth_proxy_failed.legend") : e.response.status === 403 && (s.value = "error.unauthorized", l.value = "error.unauthorized.legend")) : (s.value = e.message, u.value = e.stack ?? null), a.value && !Array.isArray(a.value) && (a.value = new Array(a.value));
  }
  function r(e) {
    t(e), this.$router.push({ name: "genericError" });
  }
  function i() {
    this.$router.push({ name: "404" });
  }
  return {
    // STATE
    lastError: o,
    message: s,
    reasons: a,
    originalMessage: l,
    debug: u,
    // ACTIONS
    parse: t,
    show: r,
    notFound: i
  };
});
export {
  f as useErrorHandler
};
