import{r as t,c as i,h as a,H as e,g as s}from"./p-a5f4e010.js";import{g as n}from"./p-30b0f762.js";import{i as l,v as h}from"./p-ca562010.js";import{c as r,d as o,a as c,H as u}from"./p-9de4ab76.js";import{u as d}from"./p-7b97aed3.js";import{i as m}from"./p-62d90ff5.js";import{c as b,d as f,g as p}from"./p-bd9dda02.js";import{a as v,s as g,c as x}from"./p-04967691.js";import{n as _,c as k,d as y}from"./p-1ddddc69.js";import{d as w,c as V}from"./p-75da41a4.js";import"./p-5f83161a.js";import"./p-e6be3162.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const z={handleLabel:"handle__label",handleLabelMinValue:"handle__label--minValue",handleLabelValue:"handle__label--value",tickMin:"tick__label--min",tickMax:"tick__label--max"};const $='@charset "UTF-8";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}.scale--s{--calcite-slider-handle-size:0.625rem;--calcite-slider-handle-extension-height:0.4rem;--calcite-slider-container-font-size:var(--calcite-font-size--3)}.scale--s .handle__label,.scale--s .tick__label{line-height:.75rem}.scale--m{--calcite-slider-handle-size:0.875rem;--calcite-slider-handle-extension-height:0.5rem;--calcite-slider-container-font-size:var(--calcite-font-size--2)}.scale--m .handle__label,.scale--m .tick__label{line-height:1rem}.scale--l{--calcite-slider-handle-size:1rem;--calcite-slider-handle-extension-height:0.65rem;--calcite-slider-container-font-size:var(--calcite-font-size--1)}.scale--l .handle__label,.scale--l .tick__label{line-height:1rem}.handle__label,.tick__label{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);font-size:var(--calcite-slider-container-font-size)}:host{display:block}.container{position:relative;display:block;overflow-wrap:normal;word-break:normal;padding-inline:calc(var(--calcite-slider-handle-size) * 0.5);padding-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-inline:0;--calcite-slider-full-handle-height:calc(\n    var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height)\n  );touch-action:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-ui-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.375rem}.scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.5rem}.scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.55rem}:host([precise]:not([has-histogram])) .container .thumb--value{--calcite-slider-thumb-y-offset:calc(var(--calcite-slider-full-handle-height) * -1)}.thumb-container{position:relative;max-inline-size:100%}.thumb{--calcite-slider-thumb-x-offset:calc(var(--calcite-slider-handle-size) * 0.5);position:absolute;margin:0px;display:flex;cursor:pointer;flex-direction:column;align-items:center;border-style:none;background-color:transparent;padding:0px;font-family:inherit;outline:2px solid transparent;outline-offset:2px;transform:translate(var(--calcite-slider-thumb-x-offset), var(--calcite-slider-thumb-y-offset))}.thumb .handle__label.static,.thumb .handle__label.transformed{position:absolute;inset-block:0px;opacity:0}.thumb .handle__label.hyphen::after{content:"—";display:inline-block;inline-size:1em}.thumb .handle__label.hyphen--wrap{display:flex}.thumb .handle{box-sizing:border-box;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;block-size:var(--calcite-slider-handle-size);inline-size:var(--calcite-slider-handle-size);box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;transition:border var(--calcite-internal-animation-timing-medium) ease, background-color var(--calcite-internal-animation-timing-medium) ease, box-shadow var(--calcite-animation-timing) ease}.thumb .handle-extension{inline-size:0.125rem;block-size:var(--calcite-slider-handle-extension-height);background-color:var(--calcite-ui-text-3)}.thumb:hover .handle{box-shadow:0 0 0 3px var(--calcite-ui-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-ui-brand)}.thumb:focus .handle{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.thumb:focus .handle-extension{background-color:var(--calcite-ui-brand)}.thumb.thumb--minValue{transform:translate(calc(var(--calcite-slider-thumb-x-offset) * -1), var(--calcite-slider-thumb-y-offset))}.thumb.thumb--precise{--calcite-slider-thumb-y-offset:-0.125rem}:host([label-handles]) .thumb{--calcite-slider-thumb-x-offset:50%}:host([label-handles]):host(:not([has-histogram])) .scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.4375rem}:host([label-handles]):host(:not([has-histogram])) .scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.875rem}:host([label-handles]):host(:not([has-histogram])) .scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-2rem}:host([has-histogram][label-handles]) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--minValue.thumb--precise .handle__label{margin-block-start:0.5em}:host(:not([has-histogram]):not([precise])) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--value .handle__label{margin-block-end:0.5em}:host([label-handles][precise]):host(:not([has-histogram])) .scale--s .thumb--value{--calcite-slider-thumb-y-offset:-2.075rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--m .thumb--value{--calcite-slider-thumb-y-offset:-2.75rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--l .thumb--value{--calcite-slider-thumb-y-offset:-3.0625rem}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-ui-brand);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise:after,.thumb:focus.thumb--precise:after,.thumb--active.thumb--precise:after{background-color:var(--calcite-ui-brand)}.track{position:relative;block-size:0.125rem;border-radius:0px;background-color:var(--calcite-ui-border-2);transition:all var(--calcite-internal-animation-timing-medium) ease-in}.track__range{position:absolute;inset-block-start:0px;block-size:0.125rem;background-color:var(--calcite-ui-brand)}.container--range .track__range:hover{cursor:ew-resize}.container--range .track__range:after{position:absolute;inline-size:100%;content:"";inset-block-start:calc(var(--calcite-slider-full-handle-height) * 0.5 * -1);block-size:calc(var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height))}@media (forced-colors: active){.thumb{outline-width:0;outline-offset:0}.handle{outline:2px solid transparent;outline-offset:2px}.thumb:focus .handle,.thumb .handle-extension,.thumb:hover .handle-extension,.thumb:focus .handle-extension,.thumb:active .handle-extension{background-color:canvasText}.track{background-color:canvasText}.track__range{background-color:highlight}}.tick{position:absolute;block-size:0.25rem;inline-size:0.125rem;border-width:1px;border-style:solid;background-color:var(--calcite-ui-border-input);border-color:var(--calcite-ui-foreground-1);inset-block-start:-2px;pointer-events:none;margin-inline-start:calc(-1 * 0.125rem)}.tick--active{background-color:var(--calcite-ui-brand)}.tick__label{pointer-events:none;margin-block-start:0.875rem;display:flex;justify-content:center}.tick__label--min{transition:opacity var(--calcite-animation-timing)}.tick__label--max{transition:opacity var(--calcite-internal-animation-timing-fast)}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max,:host([has-histogram][precise]) .tick__label--min,:host([has-histogram][precise]) .tick__label--max{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}.graph{color:var(--calcite-ui-foreground-3);block-size:48px}:host([label-ticks][ticks]) .container{padding-block-end:calc(0.875rem + var(--calcite-slider-container-font-size))}:host([has-histogram]):host([precise][label-handles]) .container{padding-block-end:calc(var(--calcite-slider-full-handle-height) + 1em)}:host([has-histogram]):host([label-handles]:not([precise])) .container{padding-block-end:calc(var(--calcite-slider-handle-size) * 0.5 + 1em)}:host([has-histogram]):host([precise]:not([label-handles])) .container{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container{padding-block-start:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container--range{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([label-handles]:not([precise])) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container--range{padding-block-end:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}';function M(t){return Array.isArray(t)}const D=class{constructor(a){t(this,a);this.calciteSliderInput=i(this,"calciteSliderInput",6);this.calciteSliderChange=i(this,"calciteSliderChange",6);this.activeProp="value";this.guid=`calcite-slider-${n()}`;this.dragUpdate=t=>{t.preventDefault();if(this.dragProp){const i=this.translate(t.clientX||t.pageX);if(M(this.value)&&this.dragProp==="minMaxValue"){if(this.minValueDragRange&&this.maxValueDragRange&&this.minMaxValueRange){const t=i-this.minValueDragRange;const a=i+this.maxValueDragRange;if(a<=this.max&&t>=this.min&&a-t===this.minMaxValueRange){this.setValue({minValue:this.clamp(t,"minValue"),maxValue:this.clamp(a,"maxValue")})}}else{this.minValueDragRange=i-this.minValue;this.maxValueDragRange=this.maxValue-i;this.minMaxValueRange=this.maxValue-this.minValue}}else{this.setValue({[this.dragProp]:this.clamp(i,this.dragProp)})}}};this.pointerUpDragEnd=t=>{if(!l(t)){return}this.dragEnd(t)};this.dragEnd=t=>{this.removeDragListeners();this.focusActiveHandle(t.clientX);if(this.lastDragPropValue!=this[this.dragProp]){this.emitChange()}this.dragProp=null;this.lastDragPropValue=null;this.minValueDragRange=null;this.maxValueDragRange=null;this.minMaxValueRange=null};this.storeTrackRef=t=>{this.trackEl=t};this.determineGroupSeparator=t=>{if(typeof t==="number"){_.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};return _.localize(t.toString())}};this.disabled=false;this.form=undefined;this.groupSeparator=false;this.hasHistogram=false;this.histogram=undefined;this.histogramStops=undefined;this.labelHandles=false;this.labelTicks=false;this.max=100;this.maxLabel=undefined;this.maxValue=undefined;this.min=0;this.minLabel=undefined;this.minValue=undefined;this.mirrored=false;this.name=undefined;this.numberingSystem=undefined;this.pageStep=undefined;this.precise=false;this.required=false;this.snap=false;this.step=1;this.ticks=undefined;this.value=0;this.scale="m";this.effectiveLocale="";this.minMaxValueRange=null;this.minValueDragRange=null;this.maxValueDragRange=null;this.tickValues=[]}histogramWatcher(t){this.hasHistogram=!!t}valueHandler(){this.setMinMaxFromValue()}minMaxValueHandler(){this.setValueFromMinMax()}connectedCallback(){k(this);this.setMinMaxFromValue();this.setValueFromMinMax();b(this);r(this)}disconnectedCallback(){f(this);o(this);y(this);this.removeDragListeners()}componentWillLoad(){v(this);this.tickValues=this.generateTickValues();if(!M(this.value)){this.value=this.clamp(this.value)}c(this,this.value);if(this.snap&&!M(this.value)){this.value=this.getClosestStep(this.value)}if(this.histogram){this.hasHistogram=true}}componentDidLoad(){g(this)}componentDidRender(){if(this.labelHandles){this.adjustHostObscuredHandleLabel("value");if(M(this.value)){this.adjustHostObscuredHandleLabel("minValue");if(!(this.precise&&!this.hasHistogram)){this.hyphenateCollidingRangeHandleLabels()}}}this.hideObscuredBoundingTickLabels();d(this)}render(){const t=this.el.id||this.guid;const i=M(this.value)?"maxValue":"value";const s=M(this.value)?this.maxValue:this.value;const n=this.determineGroupSeparator(s);const l=this.determineGroupSeparator(this.minValue);const h=this.minValue||this.min;const r=this.shouldUseMinValue();const o=this.getUnitInterval(r?this.minValue:h)*100;const c=this.getUnitInterval(s)*100;const d=this.shouldMirror();const m=`${d?100-o:o}%`;const b=`${d?c:100-c}%`;const f=M(this.value);const v=`${z.handleLabel} ${z.handleLabelMinValue}`;const g=`${z.handleLabel} ${z.handleLabelValue}`;const x=a("div",{"aria-disabled":this.disabled,"aria-label":f?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":s,class:{thumb:true,"thumb--value":true,"thumb--active":this.lastDragProp!=="minMaxValue"&&this.dragProp===i},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=i,onPointerDown:t=>this.pointerDownDragStart(t,i),role:"slider",style:{right:b},tabIndex:0,ref:t=>this.maxHandle=t},a("div",{class:"handle"}));const _=a("div",{"aria-disabled":this.disabled,"aria-label":f?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":s,class:{thumb:true,"thumb--value":true,"thumb--active":this.lastDragProp!=="minMaxValue"&&this.dragProp===i},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=i,onPointerDown:t=>this.pointerDownDragStart(t,i),role:"slider",style:{right:b},tabIndex:0,ref:t=>this.maxHandle=t},a("span",{"aria-hidden":"true",class:g},n),a("span",{"aria-hidden":"true",class:`${g} static`},n),a("span",{"aria-hidden":"true",class:`${g} transformed`},n),a("div",{class:"handle"}));const k=a("div",{"aria-disabled":this.disabled,"aria-label":f?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":s,class:{thumb:true,"thumb--value":true,"thumb--active":this.lastDragProp!=="minMaxValue"&&this.dragProp===i},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=i,onPointerDown:t=>this.pointerDownDragStart(t,i),role:"slider",style:{right:b},tabIndex:0,ref:t=>this.maxHandle=t},a("div",{class:"handle"}),a("span",{"aria-hidden":"true",class:g},n),a("span",{"aria-hidden":"true",class:`${g} static`},n),a("span",{"aria-hidden":"true",class:`${g} transformed`},n));const y=a("div",{"aria-disabled":this.disabled,"aria-label":f?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":s,class:{thumb:true,"thumb--value":true,"thumb--active":this.lastDragProp!=="minMaxValue"&&this.dragProp===i,"thumb--precise":true},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=i,onPointerDown:t=>this.pointerDownDragStart(t,i),role:"slider",style:{right:b},tabIndex:0,ref:t=>this.maxHandle=t},a("div",{class:"handle"}),a("div",{class:"handle-extension"}));const w=a("div",{"aria-disabled":this.disabled,"aria-label":f?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":s,class:{thumb:true,"thumb--value":true,"thumb--active":this.lastDragProp!=="minMaxValue"&&this.dragProp===i,"thumb--precise":true},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=i,onPointerDown:t=>this.pointerDownDragStart(t,i),role:"slider",style:{right:b},tabIndex:0,ref:t=>this.maxHandle=t},a("div",{class:"handle-extension"}),a("div",{class:"handle"}));const V=a("div",{"aria-disabled":this.disabled,"aria-label":f?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":s,class:{thumb:true,"thumb--value":true,"thumb--active":this.lastDragProp!=="minMaxValue"&&this.dragProp===i,"thumb--precise":true},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=i,onPointerDown:t=>this.pointerDownDragStart(t,i),role:"slider",style:{right:b},tabIndex:0,ref:t=>this.maxHandle=t},a("span",{"aria-hidden":"true",class:g},n),a("span",{"aria-hidden":"true",class:`${g} static`},n),a("span",{"aria-hidden":"true",class:`${g} transformed`},n),a("div",{class:"handle"}),a("div",{class:"handle-extension"}));const $=a("div",{"aria-disabled":this.disabled,"aria-label":f?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":s,class:{thumb:true,"thumb--value":true,"thumb--active":this.lastDragProp!=="minMaxValue"&&this.dragProp===i,"thumb--precise":true},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=i,onPointerDown:t=>this.pointerDownDragStart(t,i),role:"slider",style:{right:b},tabIndex:0,ref:t=>this.maxHandle=t},a("div",{class:"handle-extension"}),a("div",{class:"handle"}),a("span",{"aria-hidden":"true",class:g},n),a("span",{"aria-hidden":"true",class:`${g} static`},n),a("span",{"aria-hidden":"true",class:`${g} transformed`},n));const D=a("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:true,"thumb--minValue":true,"thumb--active":this.dragProp==="minValue"},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:t=>this.pointerDownDragStart(t,"minValue"),role:"slider",style:{left:m},tabIndex:0,ref:t=>this.minHandle=t},a("div",{class:"handle"}));const F=a("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:true,"thumb--minValue":true,"thumb--active":this.dragProp==="minValue"},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:t=>this.pointerDownDragStart(t,"minValue"),role:"slider",style:{left:m},tabIndex:0,ref:t=>this.minHandle=t},a("span",{"aria-hidden":"true",class:v},l),a("span",{"aria-hidden":"true",class:`${v} static`},l),a("span",{"aria-hidden":"true",class:`${v} transformed`},l),a("div",{class:"handle"}));const H=a("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:true,"thumb--minValue":true,"thumb--active":this.dragProp==="minValue"},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:t=>this.pointerDownDragStart(t,"minValue"),role:"slider",style:{left:m},tabIndex:0,ref:t=>this.minHandle=t},a("div",{class:"handle"}),a("span",{"aria-hidden":"true",class:v},l),a("span",{"aria-hidden":"true",class:`${v} static`},l),a("span",{"aria-hidden":"true",class:`${v} transformed`},l));const L=a("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:true,"thumb--minValue":true,"thumb--active":this.dragProp==="minValue","thumb--precise":true},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:t=>this.pointerDownDragStart(t,"minValue"),role:"slider",style:{left:m},tabIndex:0,ref:t=>this.minHandle=t},a("div",{class:"handle-extension"}),a("div",{class:"handle"}));const P=a("div",{"aria-disabled":this.disabled,"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:true,"thumb--minValue":true,"thumb--active":this.dragProp==="minValue","thumb--precise":true},onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onPointerDown:t=>this.pointerDownDragStart(t,"minValue"),role:"slider",style:{left:m},tabIndex:0,ref:t=>this.minHandle=t},a("div",{class:"handle-extension"}),a("div",{class:"handle"}),a("span",{"aria-hidden":"true",class:v},l),a("span",{"aria-hidden":"true",class:`${v} static`},l),a("span",{"aria-hidden":"true",class:`${v} transformed`},l));return a(e,{id:t,onTouchStart:this.handleTouchStart},a("div",{"aria-label":p(this),class:{["container"]:true,["container--range"]:f,[`scale--${this.scale}`]:true}},this.renderGraph(),a("div",{class:"track",ref:this.storeTrackRef},a("div",{class:"track__range",onPointerDown:t=>this.pointerDownDragStart(t,"minMaxValue"),style:{left:`${d?100-c:o}%`,right:`${d?o:100-c}%`}}),a("div",{class:"ticks"},this.tickValues.map((t=>{const i=`${this.getUnitInterval(t)*100}%`;let e=t>=h&&t<=s;if(r){e=t>=this.minValue&&t<=this.maxValue}return a("span",{class:{tick:true,"tick--active":e},style:{left:d?"":i,right:d?i:""}},this.renderTickLabel(t))})))),a("div",{class:"thumb-container"},!this.precise&&!this.labelHandles&&f&&D,!this.hasHistogram&&!this.precise&&this.labelHandles&&f&&F,this.precise&&!this.labelHandles&&f&&L,this.precise&&this.labelHandles&&f&&P,this.hasHistogram&&!this.precise&&this.labelHandles&&f&&H,!this.precise&&!this.labelHandles&&x,!this.hasHistogram&&!this.precise&&this.labelHandles&&_,!this.hasHistogram&&this.precise&&!this.labelHandles&&y,this.hasHistogram&&this.precise&&!this.labelHandles&&w,!this.hasHistogram&&this.precise&&this.labelHandles&&V,this.hasHistogram&&!this.precise&&this.labelHandles&&k,this.hasHistogram&&this.precise&&this.labelHandles&&$,a(u,{component:this}))))}renderGraph(){return this.histogram?a("calcite-graph",{class:"graph",colorStops:this.histogramStops,data:this.histogram,highlightMax:M(this.value)?this.maxValue:this.value,highlightMin:M(this.value)?this.minValue:this.min,max:this.max,min:this.min}):null}renderTickLabel(t){const i=M(this.value);const e=t===this.min;const s=t===this.max;const n=this.determineGroupSeparator(t);const l=a("span",{class:{tick__label:true,[z.tickMin]:e,[z.tickMax]:s}},n);if(this.labelTicks&&!this.hasHistogram&&!i){return l}if(this.labelTicks&&!this.hasHistogram&&i&&!this.precise&&!this.labelHandles){return l}if(this.labelTicks&&!this.hasHistogram&&i&&!this.precise&&this.labelHandles){return l}if(this.labelTicks&&!this.hasHistogram&&i&&this.precise&&(e||s)){return l}if(this.labelTicks&&this.hasHistogram&&!this.precise&&!this.labelHandles){return l}if(this.labelTicks&&this.hasHistogram&&this.precise&&!this.labelHandles&&(e||s)){return l}if(this.labelTicks&&this.hasHistogram&&!this.precise&&this.labelHandles&&(e||s)){return l}if(this.labelTicks&&this.hasHistogram&&this.precise&&this.labelHandles&&(e||s)){return l}return null}keyDownHandler(t){const i=this.shouldMirror();const{activeProp:a,max:e,min:s,pageStep:n,step:l}=this;const h=this[a];const{key:r}=t;if(m(r)){t.preventDefault();return}let o;if(r==="ArrowUp"||r==="ArrowRight"){const t=i&&r==="ArrowRight"?-1:1;o=h+l*t}else if(r==="ArrowDown"||r==="ArrowLeft"){const t=i&&r==="ArrowLeft"?-1:1;o=h-l*t}else if(r==="PageUp"){if(n){o=h+n}}else if(r==="PageDown"){if(n){o=h-n}}else if(r==="Home"){o=s}else if(r==="End"){o=e}if(isNaN(o)){return}t.preventDefault();const c=Number(o.toFixed(w(l)));this.setValue({[a]:this.clamp(c,a)})}pointerDownHandler(t){if(!l(t)){return}const i=t.clientX||t.pageX;const a=this.translate(i);let e="value";if(M(this.value)){const t=a>=this.minValue&&a<=this.maxValue;if(t&&this.lastDragProp==="minMaxValue"){e="minMaxValue"}else{const t=Math.abs(this.maxValue-a)<Math.abs(this.minValue-a);e=t||a>this.maxValue?"maxValue":"minValue"}}this.lastDragPropValue=this[e];this.dragStart(e);const s=this.el.shadowRoot.querySelector(".thumb:active");if(!s){this.setValue({[e]:this.clamp(a,e)})}this.focusActiveHandle(i)}handleTouchStart(t){t.preventDefault()}async setFocus(){await x(this);const t=this.minHandle?this.minHandle:this.maxHandle;t===null||t===void 0?void 0:t.focus()}setValueFromMinMax(){const{minValue:t,maxValue:i}=this;if(typeof t==="number"&&typeof i==="number"){this.value=[t,i]}}setMinMaxFromValue(){const{value:t}=this;if(M(t)){this.minValue=t[0];this.maxValue=t[1]}}onLabelClick(){this.setFocus()}shouldMirror(){return this.mirrored&&!this.hasHistogram}shouldUseMinValue(){if(!M(this.value)){return false}return this.hasHistogram&&this.maxValue===0||!this.hasHistogram&&this.minValue===0}generateTickValues(){const t=[];let i=this.min;while(this.ticks&&i<this.max+this.ticks){t.push(Math.min(i,this.max));i=i+this.ticks}return t}pointerDownDragStart(t,i){if(!l(t)){return}this.dragStart(i)}dragStart(t){this.dragProp=t;this.lastDragProp=this.dragProp;this.activeProp=t;document.addEventListener("pointermove",this.dragUpdate);document.addEventListener("pointerup",this.pointerUpDragEnd);document.addEventListener("pointercancel",this.dragEnd)}focusActiveHandle(t){switch(this.dragProp){case"minValue":this.minHandle.focus();break;case"maxValue":case"value":this.maxHandle.focus();break;case"minMaxValue":this.getClosestHandle(t).focus();break}}emitInput(){this.calciteSliderInput.emit()}emitChange(){this.calciteSliderChange.emit()}removeDragListeners(){document.removeEventListener("pointermove",this.dragUpdate);document.removeEventListener("pointerup",this.pointerUpDragEnd);document.removeEventListener("pointercancel",this.dragEnd)}setValue(t){let i;Object.keys(t).forEach((a=>{const e=t[a];if(!i){const t=this[a];i=t!==e}this[a]=e}));if(!i){return}const a=this.dragProp;if(!a){this.emitChange()}this.emitInput()}clamp(t,i){t=V(t,this.min,this.max);if(i==="maxValue"){t=Math.max(t,this.minValue)}if(i==="minValue"){t=Math.min(t,this.maxValue)}return t}translate(t){const i=this.max-this.min;const{left:a,width:e}=this.trackEl.getBoundingClientRect();const s=(t-a)/e;const n=this.shouldMirror();const l=this.clamp(this.min+i*(n?1-s:s));let h=Number(l.toFixed(w(this.step)));if(this.snap&&this.step){h=this.getClosestStep(h)}return h}getClosestStep(t){t=Number(this.clamp(t).toFixed(w(this.step)));if(this.step){const i=Math.round(t/this.step)*this.step;t=Number(this.clamp(i).toFixed(w(this.step)))}return t}getClosestHandle(t){return this.getDistanceX(this.maxHandle,t)>this.getDistanceX(this.minHandle,t)?this.minHandle:this.maxHandle}getDistanceX(t,i){return Math.abs(t.getBoundingClientRect().left-i)}getFontSizeForElement(t){return Number(window.getComputedStyle(t).getPropertyValue("font-size").match(/\d+/)[0])}getUnitInterval(t){t=this.clamp(t);const i=this.max-this.min;return(t-this.min)/i}adjustHostObscuredHandleLabel(t){const i=this.el.shadowRoot.querySelector(`.handle__label--${t}`);const a=this.el.shadowRoot.querySelector(`.handle__label--${t}.static`);const e=this.el.shadowRoot.querySelector(`.handle__label--${t}.transformed`);const s=a.getBoundingClientRect();const n=this.getHostOffset(s.left,s.right);i.style.transform=`translateX(${n}px)`;e.style.transform=`translateX(${n}px)`}hyphenateCollidingRangeHandleLabels(){const{shadowRoot:t}=this.el;const i=this.shouldMirror();const a=i?"value":"minValue";const e=i?"minValue":"value";const s=t.querySelector(`.handle__label--${a}`);const n=t.querySelector(`.handle__label--${a}.static`);const l=t.querySelector(`.handle__label--${a}.transformed`);const h=this.getHostOffset(n.getBoundingClientRect().left,n.getBoundingClientRect().right);const r=t.querySelector(`.handle__label--${e}`);const o=t.querySelector(`.handle__label--${e}.static`);const c=t.querySelector(`.handle__label--${e}.transformed`);const u=this.getHostOffset(o.getBoundingClientRect().left,o.getBoundingClientRect().right);const d=this.getFontSizeForElement(s);const m=this.getRangeLabelOverlap(l,c);const b=s;const f=d/2;if(m>0){b.classList.add("hyphen","hyphen--wrap");if(u===0&&h===0){let t=m/2-f;t=Math.sign(t)===-1?Math.abs(t):-t;const i=this.getHostOffset(l.getBoundingClientRect().left+t-f,l.getBoundingClientRect().right+t-f);let a=m/2;const e=this.getHostOffset(c.getBoundingClientRect().left+a,c.getBoundingClientRect().right+a);if(i!==0){t+=i;a+=i}if(e!==0){t+=e;a+=e}s.style.transform=`translateX(${t}px)`;l.style.transform=`translateX(${t-f}px)`;r.style.transform=`translateX(${a}px)`;c.style.transform=`translateX(${a}px)`}else if(h>0||u>0){s.style.transform=`translateX(${h+f}px)`;r.style.transform=`translateX(${m+u}px)`;c.style.transform=`translateX(${m+u}px)`}else if(h<0||u<0){let t=Math.abs(h)+m-f;t=Math.sign(t)===-1?Math.abs(t):-t;s.style.transform=`translateX(${t}px)`;l.style.transform=`translateX(${t-f}px)`}}else{b.classList.remove("hyphen","hyphen--wrap");s.style.transform=`translateX(${h}px)`;l.style.transform=`translateX(${h}px)`;r.style.transform=`translateX(${u}px)`;c.style.transform=`translateX(${u}px)`}}hideObscuredBoundingTickLabels(){const t=M(this.value);if(!this.hasHistogram&&!t&&!this.labelHandles&&!this.precise){return}if(!this.hasHistogram&&!t&&this.labelHandles&&!this.precise){return}if(!this.hasHistogram&&!t&&!this.labelHandles&&this.precise){return}if(!this.hasHistogram&&!t&&this.labelHandles&&this.precise){return}if(!this.hasHistogram&&t&&!this.precise){return}if(this.hasHistogram&&!this.precise&&!this.labelHandles){return}const i=this.el.shadowRoot.querySelector(".thumb--minValue");const a=this.el.shadowRoot.querySelector(".thumb--value");const e=this.el.shadowRoot.querySelector(".tick__label--min");const s=this.el.shadowRoot.querySelector(".tick__label--max");if(!i&&a&&e&&s){e.style.opacity=this.isMinTickLabelObscured(e,a)?"0":"1";s.style.opacity=this.isMaxTickLabelObscured(s,a)?"0":"1"}if(i&&a&&e&&s){e.style.opacity=this.isMinTickLabelObscured(e,i)||this.isMinTickLabelObscured(e,a)?"0":"1";s.style.opacity=this.isMaxTickLabelObscured(s,i)||this.isMaxTickLabelObscured(s,a)&&this.hasHistogram?"0":"1"}}getHostOffset(t,i){const a=this.el.getBoundingClientRect();const e=7;if(t+e<a.left){return a.left-t-e}if(i-e>a.right){return-(i-a.right)+e}return 0}getRangeLabelOverlap(t,i){const a=t.getBoundingClientRect();const e=i.getBoundingClientRect();const s=this.getFontSizeForElement(t);const n=a.right+s-e.left;return Math.max(n,0)}isMinTickLabelObscured(t,i){const a=t.getBoundingClientRect();const e=i.getBoundingClientRect();return h(a,e)}isMaxTickLabelObscured(t,i){const a=t.getBoundingClientRect();const e=i.getBoundingClientRect();return h(a,e)}static get delegatesFocus(){return true}get el(){return s(this)}static get watchers(){return{histogram:["histogramWatcher"],value:["valueHandler"],minValue:["minMaxValueHandler"],maxValue:["minMaxValueHandler"]}}};D.style=$;export{D as calcite_slider};
//# sourceMappingURL=p-428539c0.entry.js.map