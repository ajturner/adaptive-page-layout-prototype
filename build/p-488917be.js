import{f as t}from"./p-a5f4e010.js";import{c as o}from"./p-e6be3162.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const n=new Set;let f;const s={childList:true};function c(t){if(!f){f=o("mutation",i)}f.observe(t.el,s)}function e(t){n.delete(t.el);i(f.takeRecords());f.disconnect();for(const[t]of n.entries()){f.observe(t,s)}}function i(o){o.forEach((({target:o})=>{t(o)}))}export{c,e as d};
//# sourceMappingURL=p-488917be.js.map