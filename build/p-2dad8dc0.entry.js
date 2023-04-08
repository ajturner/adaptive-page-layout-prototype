import{h as t,r as i,c as e,H as s,g as a}from"./p-a5f4e010.js";import{c as n,d as o,H as c}from"./p-9de4ab76.js";import{g as r}from"./p-30b0f762.js";import{u as l}from"./p-7b97aed3.js";import{c as h,d}from"./p-bd9dda02.js";import{a as u,s as m,c as p}from"./p-04967691.js";import{c as f,d as v}from"./p-1ddddc69.js";import{u as g,c as b,s as y,d as w}from"./p-662302cc.js";import"./p-ca562010.js";import"./p-5f83161a.js";import"./p-62d90ff5.js";import"./p-e6be3162.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const k=({full:i,scale:e,partial:s})=>t("calcite-icon",{...{class:s?undefined:"icon",icon:i?"star-f":"star",scale:e}});const x="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;align-items:center;inline-size:-moz-fit-content;inline-size:fit-content}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){block-size:1.5rem;--calcite-rating-spacing-unit:0.25rem}:host([scale=m]){block-size:2rem;--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){block-size:2.75rem;--calcite-rating-spacing-unit:0.75rem}:host([read-only]){pointer-events:none}.fieldset{margin:0;display:flex;border-width:0;padding:0;align-items:center;gap:var(--calcite-rating-spacing-unit)}.wrapper{display:inline-block}.star{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:relative;display:flex;flex-direction:column;cursor:pointer;color:var(--calcite-ui-border-input)}.focused{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.average,.fraction{color:var(--calcite-ui-warning)}.hovered,.selected{color:var(--calcite-ui-brand)}.fraction{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:absolute;pointer-events:none;inset-block-start:0;overflow:hidden;inset-inline-start:0}calcite-chip{pointer-events:none;cursor:default}.number--average{font-weight:bold}.number--count{color:var(--calcite-ui-text-2);font-style:italic}.number--count:not(:first-child){margin-inline-start:var(--calcite-rating-spacing-unit)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";const j=class{constructor(t){i(this,t);this.calciteRatingChange=e(this,"calciteRatingChange",6);this.handleRatingPointerOver=()=>{this.isKeyboardInteraction=false};this.handleRatingPointerOut=()=>{this.isKeyboardInteraction=true;this.hoverValue=null;this.focusValue=null;this.hasFocus=false};this.handleRatingFocusIn=()=>{const t=this.value>0?this.value-1:0;const i=this.inputRefs[t];const e=Number(i.value);i.select();this.focusValue=e;this.hoverValue=e;this.hasFocus=true};this.handleRatingFocusLeave=()=>{this.focusValue=null;this.hoverValue=null;this.hasFocus=false};this.handleHostKeyDown=()=>{this.isKeyboardInteraction=true};this.handleInputKeyDown=t=>{const i=t.currentTarget;const e=Number(i.value);const s=t.key;const a=s==" "?undefined:Number(s);this.emit=true;if(isNaN(a)){switch(s){case"Enter":case" ":this.value=!this.required&&this.value===e?0:e;break;case"ArrowLeft":this.value=e-1;break;case"ArrowRight":this.value=e+1;break;case"Tab":if(this.hasFocus){this.hasFocus=false;this.focusValue=null;this.hoverValue=null}}}else{if(!this.required&&a>=0&&a<=this.max){this.value=a}else if(this.required&&a>0&&a<=this.max){this.value=a}}};this.handleInputChange=t=>{if(this.isKeyboardInteraction===true){const i=Number(t.target["value"]);this.focusValue=i;this.hoverValue=i;this.value=i}};this.handleLabelPointerOver=t=>{const i=t.currentTarget;const e=Number(i.firstChild["value"]||0);this.hoverValue=e;this.focusValue=null};this.handleLabelPointerDown=t=>{const i=t.currentTarget;const e=Number(i.firstChild["value"]||0);this.focusValue=null;this.hoverValue=null;this.emit=true;this.value=!this.required&&this.value===e?0:e};this.emit=false;this.guid=`calcite-ratings-${r()}`;this.isKeyboardInteraction=true;this.max=5;this.average=undefined;this.count=undefined;this.disabled=false;this.form=undefined;this.messages=undefined;this.messageOverrides=undefined;this.name=undefined;this.readOnly=false;this.required=false;this.scale="m";this.showChip=false;this.value=0;this.effectiveLocale="";this.defaultMessages=undefined;this.hoverValue=undefined;this.focusValue=undefined;this.hasFocus=undefined}onMessagesChange(){}handleValueUpdate(t){this.hoverValue=t;this.focusValue=t;if(this.emit){this.calciteRatingChange.emit()}this.emit=false}effectiveLocaleChange(){g(this,this.effectiveLocale)}connectedCallback(){f(this);b(this);h(this);n(this)}async componentWillLoad(){await y(this);u(this);this.inputRefs=Array(this.max)}componentWillRender(){this.starsMap=Array.from({length:this.max},((t,i)=>{const e=i+1;const s=!this.focusValue&&!this.hoverValue&&this.average&&!this.value&&e<=this.average;const a=e===this.value;const n=this.isKeyboardInteraction&&this.hasFocus&&this.focusValue===e;const o=this.average&&this.average+1-e;const c=e<=this.hoverValue;const r=`${this.guid}-${e}`;const l=!this.focusValue&&!this.hoverValue&&!this.value&&!c&&o>0&&o<1;const h=this.value>=e;return{average:s,checked:a,focused:n,fraction:o,hovered:c,id:r,idx:i,partial:l,selected:h,value:e}}))}componentDidLoad(){m(this)}disconnectedCallback(){v(this);w(this);d(this);o(this)}componentDidRender(){l(this)}render(){var i,e;return t(s,{onBlur:this.handleRatingFocusLeave,onFocus:this.handleRatingFocusIn,onKeyDown:this.handleHostKeyDown,onPointerOut:this.handleRatingPointerOut,onPointerOver:this.handleRatingPointerOver},t("span",{class:"wrapper"},t("fieldset",{class:"fieldset",disabled:this.disabled},t("legend",{class:"visually-hidden"},this.messages.rating),this.starsMap.map((({average:i,checked:e,focused:s,fraction:a,hovered:n,id:o,idx:c,partial:r,selected:l,value:h})=>t("label",{class:{star:true,focused:s,selected:l,hovered:n,average:i,partial:r},htmlFor:o,onPointerDown:this.handleLabelPointerDown,onPointerOver:this.handleLabelPointerOver},t("input",{checked:e,class:"visually-hidden",disabled:this.disabled||this.readOnly,id:o,name:this.guid,onChange:this.handleInputChange,onKeyDown:this.handleInputKeyDown,type:"radio",value:h,ref:t=>{this.inputRefs[c]=t;return(h===1||h===this.value)&&(this.inputFocusRef=t)}}),t(k,{full:l||i,scale:this.scale}),r&&t("div",{class:"fraction",style:{width:`${a*100}%`}},t(k,{full:true,partial:true,scale:this.scale})),t("span",{class:"visually-hidden"},this.messages.stars.replace("${num}",`${h}`))))),(this.count||this.average)&&this.showChip?t("calcite-chip",{scale:this.scale,value:(i=this.count)===null||i===void 0?void 0:i.toString()},!!this.average&&t("span",{class:"number--average"},this.average.toString()),!!this.count&&t("span",{class:"number--count"},"(",(e=this.count)===null||e===void 0?void 0:e.toString(),")")):null),t(c,{component:this})))}onLabelClick(){this.setFocus()}async setFocus(){var t;await p(this);(t=this.inputFocusRef)===null||t===void 0?void 0:t.focus()}static get assetsDirs(){return["assets"]}get el(){return a(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],value:["handleValueUpdate"],effectiveLocale:["effectiveLocaleChange"]}}};j.style=x;export{j as calcite_rating};
//# sourceMappingURL=p-2dad8dc0.entry.js.map