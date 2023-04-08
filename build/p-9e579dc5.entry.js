import{r as t,c as i,h as a,g as e}from"./p-a5f4e010.js";import{u as n}from"./p-7b97aed3.js";import{c as o,a as c,s as l}from"./p-04967691.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const s={container:"split-button__container",dividerContainer:"split-button__divider-container",divider:"split-button__divider",widthAuto:"width-auto",widthHalf:"width-half",widthFull:"width-full"};const r="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:inline-block}:host .split-button__container{display:flex;align-items:stretch}:host .split-button__container>calcite-dropdown>calcite-button{block-size:100%;vertical-align:top}:host:host([kind=brand]){--calcite-split-button-background:var(--calcite-ui-brand);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host:host([kind=danger]){--calcite-split-button-background:var(--calcite-ui-danger);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host:host([kind=neutral]){--calcite-split-button-background:var(--calcite-ui-foreground-3);--calcite-split-button-divider:var(--calcite-ui-text-1)}:host:host([kind=inverse]){--calcite-split-button-background:var(--calcite-ui-inverse);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host([appearance=transparent]):host([kind=brand]){--calcite-split-button-divider:var(--calcite-ui-brand)}:host([appearance=transparent]):host([kind=danger]){--calcite-split-button-divider:var(--calcite-ui-danger)}:host([appearance=transparent]):host([kind=neutral]){--calcite-split-button-divider:var(--calcite-ui-text-1)}:host([appearance=transparent]):host([kind=inverse]){--calcite-split-button-divider:var(--calcite-ui-foreground-1);--calcite-split-button-background:transparent}:host([appearance=outline]),:host([appearance=transparent]){--calcite-split-button-background:transparent}:host([appearance=outline-fill]){--calcite-split-button-background:var(--calcite-ui-foreground-1)}:host([appearance=outline]):host([kind=brand]),:host([appearance=outline-fill]):host([kind=brand]){--calcite-split-button-divider:var(--calcite-ui-brand)}:host([appearance=outline]):host([kind=danger]),:host([appearance=outline-fill]):host([kind=danger]){--calcite-split-button-divider:var(--calcite-ui-danger)}:host([appearance=outline]):host([kind=neutral]),:host([appearance=outline-fill]):host([kind=neutral]){--calcite-split-button-divider:var(--calcite-ui-foreground-3)}:host([appearance=outline]):host([kind=inverse]),:host([appearance=outline-fill]):host([kind=inverse]){--calcite-split-button-divider:var(--calcite-ui-inverse)}.width-auto{inline-size:auto}.width-half{inline-size:50%}.width-full{inline-size:100%}.split-button__divider-container{display:flex;inline-size:1px;align-items:stretch;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background-color:var(--calcite-split-button-background)}.split-button__divider{margin-block:0.25rem;display:inline-block;inline-size:1px;background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]) .split-button__divider-container,:host([appearance=outline]) .split-button__divider-container{border-block:1px solid var(--calcite-split-button-divider)}:host([appearance=outline-fill]):hover .split-button__divider-container,:host([appearance=outline]):hover .split-button__divider-container{background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]:hover) .split-button__divider-container,:host([appearance=outline]:hover) .split-button__divider-container{background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]:focus-within):host([kind=brand]),:host([appearance=outline]:focus-within):host([kind=brand]){--calcite-split-button-divider:var(--calcite-ui-brand-press)}:host([appearance=outline-fill]:focus-within):host([kind=danger]),:host([appearance=outline]:focus-within):host([kind=danger]){--calcite-split-button-divider:var(--calcite-ui-danger-press)}:host([appearance=outline-fill]:focus-within) .split-button__divider-container,:host([appearance=outline]:focus-within) .split-button__divider-container{background-color:var(--calcite-split-button-divider)}:host([disabled]) .split-button__divider-container{opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) calcite-dropdown>calcite-button{pointer-events:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";const d=class{constructor(a){t(this,a);this.calciteSplitButtonPrimaryClick=i(this,"calciteSplitButtonPrimaryClick",6);this.calciteSplitButtonSecondaryClick=i(this,"calciteSplitButtonSecondaryClick",6);this.calciteSplitButtonPrimaryClickHandler=()=>this.calciteSplitButtonPrimaryClick.emit();this.calciteSplitButtonSecondaryClickHandler=()=>this.calciteSplitButtonSecondaryClick.emit();this.appearance="solid";this.kind="brand";this.disabled=false;this.active=false;this.dropdownIconType="chevron";this.dropdownLabel=undefined;this.loading=false;this.overlayPositioning="absolute";this.primaryIconEnd=undefined;this.primaryIconFlipRtl=undefined;this.primaryIconStart=undefined;this.primaryLabel=undefined;this.primaryText=undefined;this.scale="m";this.width="auto"}handleDisabledChange(t){if(!t){this.active=false}}activeHandler(){if(this.disabled){this.active=false}}async setFocus(){await o(this);this.el.focus()}componentWillLoad(){c(this)}componentDidLoad(){l(this)}componentDidRender(){n(this)}render(){const t={[s.container]:true,[s.widthAuto]:this.width==="auto",[s.widthHalf]:this.width==="half",[s.widthFull]:this.width==="full"};const i=this.width==="auto"?"auto":"full";return a("div",{class:t},a("calcite-button",{appearance:this.appearance,disabled:this.disabled,"icon-end":this.primaryIconEnd?this.primaryIconEnd:null,"icon-start":this.primaryIconStart?this.primaryIconStart:null,iconFlipRtl:this.primaryIconFlipRtl?this.primaryIconFlipRtl:null,kind:this.kind,label:this.primaryLabel,loading:this.loading,onClick:this.calciteSplitButtonPrimaryClickHandler,scale:this.scale,splitChild:"primary",type:"button",width:i},this.primaryText),a("div",{class:s.dividerContainer},a("div",{class:s.divider})),a("calcite-dropdown",{disabled:this.disabled,onClick:this.calciteSplitButtonSecondaryClickHandler,open:this.active,overlayPositioning:this.overlayPositioning,placement:"bottom-end",scale:this.scale,width:this.scale},a("calcite-button",{appearance:this.appearance,disabled:this.disabled,"icon-start":this.dropdownIcon,kind:this.kind,label:this.dropdownLabel,scale:this.scale,slot:"trigger",splitChild:"secondary",type:"button"}),a("slot",null)))}get dropdownIcon(){return this.dropdownIconType==="chevron"?"chevronDown":this.dropdownIconType==="caret"?"caretDown":this.dropdownIconType==="ellipsis"?"ellipsis":"handle-vertical"}static get delegatesFocus(){return true}get el(){return e(this)}static get watchers(){return{disabled:["handleDisabledChange"],active:["activeHandler"]}}};d.style=r;export{d as calcite_split_button};
//# sourceMappingURL=p-9e579dc5.entry.js.map