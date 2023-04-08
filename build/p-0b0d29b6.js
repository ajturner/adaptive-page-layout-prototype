import{a as n}from"./p-a5f4e010.js";import{c as o}from"./p-78cee83a.js";import{g as s}from"./p-1ddddc69.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const t={};const a={};async function r(o){const e=s(o);if(t[e]){return t[e]}if(!a[e]){a[e]=fetch(n(`./assets/date-picker/nls/${e}.json`)).then((n=>n.json())).catch((()=>{console.error(`Translations for "${e}" not found or invalid, falling back to english`);return r("en")}))}const c=await a[e];t[e]=c;return c}function e(n){return n.map(((n,s)=>o(n,s===1)))}export{r as a,e as g};
//# sourceMappingURL=p-0b0d29b6.js.map