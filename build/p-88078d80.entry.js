import{r as i,c as e,h as t,g as n}from"./p-a5f4e010.js";import{c as a,d as o}from"./p-488917be.js";import{s as c}from"./p-ca562010.js";import{g as r}from"./p-30b0f762.js";import{s,a as l,c as d}from"./p-04967691.js";import{c as h,d as p}from"./p-1ddddc69.js";import{c as m}from"./p-e6be3162.js";import{u,c as b,d as g,s as v}from"./p-662302cc.js";import"./p-5f83161a.js";import"./p-62d90ff5.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const f={title:"title",close:"close",imageContainer:"image-container",chipIcon:"chip-icon",closeIcon:"close-icon",contentSlotted:"content--slotted",container:"container",imageSlotted:"image--slotted"};const k={image:"image"};const x={close:"x"};const z="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([scale=s]){block-size:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-unit-l:0.5rem;--calcite-chip-spacing-unit-s:0.25rem}:host([scale=s]) .image-container{block-size:1.25rem;inline-size:1.25rem;padding-inline-start:0.125rem}:host([scale=m]){block-size:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-unit-l:0.75rem;--calcite-chip-spacing-unit-s:calc(0.75rem / 2)}:host([scale=m]) .image-container{block-size:1.5rem;inline-size:1.5rem;padding-inline-start:0.25rem}:host([scale=l]){block-size:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-unit-l:1rem;--calcite-chip-spacing-unit-s:0.5rem}:host([scale=l]) .image-container{block-size:2rem;inline-size:2rem;padding-inline-start:0.5rem}:host{box-sizing:border-box;display:inline-flex;cursor:default;align-items:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container{display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center}.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-block:0}.content--slotted .title{padding-inline:var(--calcite-chip-spacing-unit-l)}:host([closable][icon]) .container:not(.content--slotted) .title{padding-inline:0 var(--calcite-chip-spacing-unit-s)}:host(:not([closable])) .container:not(.content--slotted) .chip-icon{margin-inline:auto}.container:not(.image--slotted) .image-container{display:none}:host([scale=s][closable]) .container:not(.content--slotted) .image-container{margin-inline-end:0.125rem}:host([scale=m][closable]) .container:not(.content--slotted) .image-container{margin-inline-end:0.25rem}:host([scale=l][closable]) .container:not(.content--slotted) .image-container{margin-inline-end:0.5rem}:host([scale=s]:not([closable])) .container:not(.content--slotted){block-size:1.5rem;inline-size:1.5rem}:host([scale=s]:not([closable])) .container:not(.content--slotted) .image-container{padding-inline:0.125rem}:host([scale=m]:not([closable])) .container:not(.content--slotted){block-size:2rem;inline-size:2rem}:host([scale=m]:not([closable])) .container:not(.content--slotted) .image-container{padding-inline:0.25rem}:host([scale=l]:not([closable])) .container:not(.content--slotted){block-size:2.75rem;inline-size:2.75rem}:host([scale=l]:not([closable])) .container:not(.content--slotted) .image-container{padding-inline:calc(0.75rem / 2)}:host([closable]) .content--slotted .title{padding-inline:var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s)}:host([scale=s]) button{inline-size:1rem;block-size:1rem;margin-inline-end:0.125rem}:host([scale=m]) button{inline-size:1.5rem;block-size:1.5rem;margin-inline-end:0.25rem}:host([scale=l]) button{inline-size:2rem;block-size:2rem;margin-inline-end:0.5rem}button{margin:0px;cursor:pointer;align-items:center;border-style:none;background-color:transparent;color:var(--calcite-ui-text-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;display:flex;border-radius:50%;padding-inline:var(--calcite-chip-spacing-unit-s);color:inherit;align-content:center;justify-content:center;--calcite-chip-transparent-hover:var(--calcite-button-transparent-hover);--calcite-chip-transparent-press:var(--calcite-button-transparent-press)}button:hover{background-color:var(--calcite-chip-transparent-hover)}button:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}button:active{background-color:var(--calcite-chip-transparent-press)}.image-container{display:inline-flex;overflow:hidden}slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:0;margin-inline-start:var(--calcite-chip-spacing-unit-l)}:host([kind=neutral]){border-color:transparent;background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([kind=neutral]) button,:host([kind=neutral]) .close-icon{color:var(--calcite-ui-text-3)}:host([kind=neutral]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([kind=inverse]){border-color:transparent;background-color:var(--calcite-ui-inverse);color:var(--calcite-ui-text-inverse)}:host([kind=inverse]) button,:host([kind=inverse]) .close-icon{color:var(--calcite-ui-text-inverse)}:host([kind=inverse]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([kind=brand]){border-color:transparent;background-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-inverse)}:host([kind=brand]) button,:host([kind=brand]) .close-icon{color:var(--calcite-ui-text-inverse)}:host([kind=brand]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([appearance=outline-fill]),:host([appearance=outline]){background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}:host([appearance=outline-fill]) button,:host([appearance=outline-fill]) .close-icon,:host([appearance=outline]) button,:host([appearance=outline]) .close-icon{color:var(--calcite-ui-text-3)}:host([appearance=outline-fill]) .chip-icon,:host([appearance=outline]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([appearance=outline-fill]){background-color:var(--calcite-ui-foreground-1)}:host([appearance=outline]){background-color:transparent}:host([kind=neutral][appearance=outline-fill]),:host([kind=neutral][appearance=outline]){border-color:var(--calcite-ui-border-1)}:host([kind=inverse][appearance=outline-fill]),:host([kind=inverse][appearance=outline]){border-color:var(--calcite-ui-border-inverse)}:host([kind=brand][appearance=outline-fill]),:host([kind=brand][appearance=outline]){border-color:var(--calcite-ui-brand)}:host([kind=brand][appearance=solid]) button,:host([kind=inverse][appearance=solid]) button{outline-color:var(--calcite-ui-text-inverse)}:host([closed]){display:none}";const y=class{constructor(t){i(this,t);this.calciteChipClose=e(this,"calciteChipClose",6);this.closeClickHandler=i=>{i.preventDefault();this.calciteChipClose.emit();this.closed=true};this.handleSlotImageChange=i=>{this.hasImage=c(i)};this.mutationObserver=m("mutation",(()=>this.updateHasContent()));this.guid=r();this.appearance="solid";this.kind="neutral";this.closable=false;this.icon=undefined;this.iconFlipRtl=false;this.scale="m";this.value=undefined;this.closed=false;this.messageOverrides=undefined;this.messages=undefined;this.defaultMessages=undefined;this.effectiveLocale=undefined;this.hasContent=false;this.hasImage=false}onMessagesChange(){}effectiveLocaleChange(){u(this,this.effectiveLocale)}connectedCallback(){a(this);h(this);b(this);this.setupTextContentObserver()}componentDidLoad(){s(this)}disconnectedCallback(){o(this);p(this);g(this)}async componentWillLoad(){l(this);{await v(this);this.updateHasContent()}}async setFocus(){var i;await d(this);(i=this.closeButton)===null||i===void 0?void 0:i.focus()}updateHasContent(){var i,e;const t=this.el.textContent.trim().length>0||this.el.childNodes.length>0;this.hasContent=this.el.childNodes.length>0&&((i=this.el.childNodes[0])===null||i===void 0?void 0:i.nodeName)==="#text"?((e=this.el.textContent)===null||e===void 0?void 0:e.trim().length)>0:t}setupTextContentObserver(){var i;(i=this.mutationObserver)===null||i===void 0?void 0:i.observe(this.el,{childList:true,subtree:true})}renderChipImage(){return t("div",{class:f.imageContainer,key:"image"},t("slot",{name:k.image,onSlotchange:this.handleSlotImageChange}))}render(){const i=t("calcite-icon",{class:f.chipIcon,flipRtl:this.iconFlipRtl,icon:this.icon,scale:this.scale==="l"?"m":"s"});const e=t("button",{"aria-describedby":this.guid,"aria-label":this.messages.dismissLabel,class:f.close,onClick:this.closeClickHandler,ref:i=>this.closeButton=i},t("calcite-icon",{class:f.closeIcon,icon:x.close,scale:this.scale==="l"?"m":"s"}));return t("div",{class:{[f.container]:true,[f.contentSlotted]:this.hasContent,[f.imageSlotted]:this.hasImage}},this.renderChipImage(),this.icon?i:null,t("span",{class:f.title,id:this.guid},t("slot",null)),this.closable?e:null)}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};y.style=z;export{y as calcite_chip};
//# sourceMappingURL=p-88078d80.entry.js.map