import{r as t,c as i,h as e,H as n,g as a}from"./p-a5f4e010.js";import{h as s,n as c,x as r}from"./p-ca562010.js";import"./p-30b0f762.js";import"./p-5f83161a.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */function o(t){return t?.matches("calcite-tree-item")}function l(t,i){const e=i==="down"?"nextElementSibling":"previousElementSibling";let n=t;let a=null;while(o(n)){if(!n.disabled){a=n;break}n=n[e]}return a}const h="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:block}:host(:focus){outline:2px solid transparent;outline-offset:2px}";const m=class{constructor(e){t(this,e);this.calciteTreeSelect=i(this,"calciteTreeSelect",6);this.lines=false;this.child=undefined;this.scale="m";this.selectionMode="single";this.selectedItems=[]}componentWillRender(){var t;const i=(t=this.el.parentElement)===null||t===void 0?void 0:t.closest("calcite-tree");this.lines=i?i.lines:this.lines;this.scale=i?i.scale:this.scale;this.selectionMode=i?i.selectionMode:this.selectionMode;this.child=!!i}render(){return e(n,{"aria-multiselectable":this.child?undefined:(this.selectionMode==="multiple"||this.selectionMode==="multichildren").toString(),role:!this.child?"tree":undefined,tabIndex:this.getRootTabIndex()},e("slot",null))}onFocus(){if(!this.child){const t=this.el.querySelector("calcite-tree-item[selected]:not([disabled])")||this.el.querySelector("calcite-tree-item:not([disabled])");s(t)}}onFocusIn(t){const i=t.relatedTarget===this.el||!this.el.contains(t.relatedTarget);if(i){this.el.removeAttribute("tabindex")}}onFocusOut(t){const i=!this.el.contains(t.relatedTarget);if(i){this.el.tabIndex=this.getRootTabIndex()}}onClick(t){const i=t.target;const e=c(i.querySelectorAll("calcite-tree-item"));if(this.child){return}if(!this.child){t.preventDefault();t.stopPropagation()}if(this.selectionMode==="ancestors"&&!this.child){this.updateAncestorTree(t);return}const n=this.selectionMode==="none";const a=this.selectionMode!==null&&(!i.hasChildren||i.hasChildren&&(this.selectionMode==="children"||this.selectionMode==="multichildren"));const s=!n&&t.detail.modifyCurrentSelection&&(this.selectionMode==="multiple"||this.selectionMode==="multichildren");const r=this.selectionMode==="multichildren"||this.selectionMode==="children";const o=!s&&((this.selectionMode==="single"||this.selectionMode==="multiple")&&e.length<=0||this.selectionMode==="children"||this.selectionMode==="multichildren");const l=this.selectionMode==="children"||this.selectionMode==="multichildren";if(!this.child){const h=[];if(a){h.push(i)}if(r){e.forEach((t=>{h.push(t)}))}if(o){const t=c(this.el.querySelectorAll("calcite-tree-item[selected]"));t.forEach((t=>{if(!h.includes(t)){t.selected=false}}))}if(l&&!t.detail.forceToggle){i.expanded=true}if(s){window.getSelection().removeAllRanges()}if(s&&i.selected||r&&t.detail.forceToggle){h.forEach((t=>{if(!t.disabled){t.selected=false}}))}else if(!n){h.forEach((t=>{if(!t.disabled){t.selected=true}}))}}this.selectedItems=n?[i]:c(this.el.querySelectorAll("calcite-tree-item")).filter((t=>t.selected));this.calciteTreeSelect.emit();t.stopPropagation()}keyDownHandler(t){var i;const e=this.el.closest("calcite-tree:not([child])");const n=t.target;if(!(e===this.el&&n.tagName==="CALCITE-TREE-ITEM"&&this.el.contains(n))){return}if(t.key==="ArrowDown"){const i=l(n.nextElementSibling,"down");if(i){i.focus();t.preventDefault()}return}if(t.key==="ArrowUp"){const i=l(n.previousElementSibling,"up");if(i){i.focus();t.preventDefault()}}if(t.key==="ArrowLeft"&&!n.disabled){if(n.hasChildren&&n.expanded){n.expanded=false;t.preventDefault();return}const i=n.parentElement.closest("calcite-tree-item");if(i&&(!n.hasChildren||n.expanded===false)){i.focus();t.preventDefault();return}return}if(t.key==="ArrowRight"&&!n.disabled){if(n.hasChildren){if(n.expanded&&r(this.el).activeElement===n){(i=l(n.querySelector("calcite-tree-item"),"down"))===null||i===void 0?void 0:i.focus();t.preventDefault()}else{n.expanded=true;t.preventDefault()}}return}}updateAncestorTree(t){const i=t.target;if(i.disabled){return}const e=[];let n=i.parentElement.closest("calcite-tree-item");while(n){e.push(n);n=n.parentElement.closest("calcite-tree-item")}const a=Array.from(i.querySelectorAll("calcite-tree-item:not([disabled])"));const s=a.filter((t=>!t.hasChildren));const r=a.filter((t=>t.hasChildren));const o=i.hasChildren?!(i.selected||i.indeterminate):!i.selected;s.forEach((t=>{t.selected=o;t.indeterminate=false}));function l(t,i){const e=t.filter((t=>t.selected));const n=t.filter((t=>!t.selected));i.selected=e.length===t.length;i.indeterminate=e.length>0&&n.length>0}r.forEach((t=>{const i=Array.from(t.querySelectorAll(":scope > calcite-tree > calcite-tree-item"));l(i,t)}));if(i.hasChildren){l(a,i)}else{i.selected=o;i.indeterminate=false}e.forEach((t=>{const i=c(t.querySelectorAll("calcite-tree-item"));const e=i.filter((t=>t.selected));if(e.length===0){t.selected=false;t.indeterminate=false;return}const n=e.length<i.length;t.indeterminate=n;t.selected=!n}));this.selectedItems=c(this.el.querySelectorAll("calcite-tree-item")).filter((t=>t.selected));this.calciteTreeSelect.emit()}getRootTabIndex(){return!this.child?0:-1}get el(){return a(this)}};m.style=h;export{m as calcite_tree};
//# sourceMappingURL=p-b2d55b93.entry.js.map