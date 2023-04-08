import{a as n}from"./p-a5f4e010.js";import{g as t}from"./p-1ddddc69.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const s={};async function c(t,c){const a=`${c}_${t}`;if(s[a]){return s[a]}s[a]=fetch(n(`./assets/${c}/t9n/messages_${t}.json`)).then((n=>{if(!n.ok){o()}return n.json()})).catch((()=>o()));return s[a]}function o(){throw new Error("could not fetch component message bundle")}function a(n){n.messages={...n.defaultMessages,...n.messageOverrides}}async function e(n){n.defaultMessages=await i(n,n.effectiveLocale);a(n)}async function i(n,s){const{el:o}=n;const a=o.tagName.toLowerCase();const e=a.replace("calcite-","");return c(t(s,"t9n"),e)}async function f(n,t){n.defaultMessages=await i(n,t);a(n)}function r(n){n.onMessagesChange=d}function u(n){n.onMessagesChange=undefined}function d(){a(this)}export{r as c,u as d,e as s,f as u};
//# sourceMappingURL=p-662302cc.js.map