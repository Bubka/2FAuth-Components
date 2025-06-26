import { ref as a } from "vue";
import { defineStore as i } from "pinia";
const d = i("errorHandler", () => {
  const t = a(null), s = a(null), l = a(null), n = a(null);
  function u(e) {
    t.value = e, e.response ? e.response.status === 407 ? (s.value = this.$i18n.global.t("error.auth_proxy_failed"), l.value = this.$i18n.global.t("error.auth_proxy_failed.legend")) : e.response.status === 403 ? (s.value = this.$i18n.global.t("error.unauthorized"), l.value = this.$i18n.global.t("error.unauthorized.legend")) : e.response.data && (s.value = e.response.data.message, l.value = e.response.data.originalMessage ?? null, n.value = e.response.data.debug ?? null) : (s.value = e.message, n.value = e.stack ?? null);
  }
  function o(e) {
    u(e), this.$router.push({ name: "genericError" });
  }
  return {
    lastError: t,
    message: s,
    originalMessage: l,
    debug: n,
    parse: u,
    show: o
  };
});
export {
  d as useErrorHandler
};
