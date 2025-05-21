import { ref as l } from "vue";
import { defineStore as i } from "pinia";
const d = i("errorHandler", () => {
  const t = l(null), s = l(null), a = l(null), n = l(null);
  function u(e) {
    t.value = e, e.response ? e.response.status === 407 ? (s.value = this.$i18n.t("error.auth_proxy_failed"), a.value = this.$i18n.t("error.auth_proxy_failed.legend")) : e.response.status === 403 ? (s.value = this.$i18n.t("error.unauthorized"), a.value = this.$i18n.t("error.unauthorized.legend")) : e.response.data && (s.value = e.response.data.message, a.value = e.response.data.originalMessage ?? null, n.value = e.response.data.debug ?? null) : (s.value = e.message, n.value = e.stack ?? null);
  }
  return {
    lastError: t,
    message: s,
    originalMessage: a,
    debug: n,
    parse: u
  };
});
export {
  d as useErrorHandler
};
