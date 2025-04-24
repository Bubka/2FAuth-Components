import { h as s, computed as p, createBlock as u, openBlock as y, resolveDynamicComponent as m } from "vue";
/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), M = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, o) => o ? o.toUpperCase() : a.toLowerCase()
), g = (e) => {
  const t = M(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, w = (...e) => e.filter((t, a, o) => !!t && t.trim() !== "" && o.indexOf(t) === a).join(" ").trim();
/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var h = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: a, color: o, iconNode: n, name: c, class: q, ...l }, { slots: i }) => s(
  "svg",
  {
    ...h,
    width: e || h.width,
    height: e || h.height,
    stroke: o || h.stroke,
    "stroke-width": a ? Number(t) * 24 / Number(e) : t,
    class: w(
      "lucide",
      ...c ? [`lucide-${d(g(c))}-icon`, `lucide-${d(c)}`] : ["lucide-icon"]
    ),
    ...l
  },
  [...n.map((k) => s(...k)), ...i.default ? [i.default()] : []]
);
/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r = (e, t) => (a, { slots: o }) => s(
  v,
  {
    ...a,
    iconNode: t,
    name: e
  },
  o
);
/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f = r("grid-3x3", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x = r("list", [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
]);
/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C = r("monitor-check", [
  ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z = r("moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b = r("slash", [["path", { d: "M22 2 2 22", key: "y4kqgn" }]]);
/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j = r("sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), S = {
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
    const t = { Sun: j, Moon: z, Grid3X3: f, List: x, MonitorCheck: C, Slash: b }, a = e, o = p(() => t[a.name]);
    return (n, c) => (y(), u(m(o.value), {
      size: e.size,
      color: e.color,
      "stroke-width": e.strokeWidth,
      "default-class": e.defaultClass
    }, null, 8, ["size", "color", "stroke-width", "default-class"]));
  }
};
export {
  S as LucideGenericIcon
};
