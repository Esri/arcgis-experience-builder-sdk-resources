/*! For license information please see 791df56d0d1124466974362e5a75876d.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[15245],{15245:(t,e,n)=>{n.r(e),n.d(e,{calcite_input_message:()=>c});var i,a=n(30396),r=n(9615);!function(t){t.valid="check-circle",t.invalid="exclamation-mark-triangle",t.idle="information"}(i||(i={}));const c=class{constructor(t){(0,a.r)(this,t),this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.status="idle"}handleIconEl(){this.requestedIcon=(0,r.d)(i,this.icon,this.status)}connectedCallback(){this.scale=(0,r.f)(this.el,"scale",this.scale),this.requestedIcon=(0,r.d)(i,this.icon,this.status)}render(){const t=this.el.hidden;return(0,a.h)(a.H,{"calcite-hydrated-hidden":t},this.renderIcon(this.requestedIcon),(0,a.h)("slot",null))}renderIcon(t){if(t)return(0,a.h)("calcite-icon",{class:"calcite-input-message-icon",flipRtl:this.iconFlipRtl,icon:t,scale:"s"})}get el(){return(0,a.g)(this)}static get watchers(){return{status:["handleIconEl"],icon:["handleIconEl"]}}};c.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([scale=m]),:host([scale=l]){--calcite-input-message-spacing-value:0.25rem}:host{visibility:hidden;box-sizing:border-box;display:flex;block-size:0px;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);visibility:visible;height:auto;opacity:1;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([scale=m]),:host([scale=l]){margin-block-start:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-ui-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-ui-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-ui-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-ui-brand)}:host([status]){color:var(--calcite-ui-text-1)}:host([status][scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([status][scale=m]){margin-block-start:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([status][scale=l]){margin-block-start:0.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}"},9615:(t,e,n)=>{n.d(e,{a:()=>v,b:()=>u,c:()=>g,d:()=>S,e:()=>l,f:()=>m,g:()=>w,h:()=>b,i:()=>$,j:()=>k,k:()=>o,l:()=>c,m:()=>E,n:()=>s,o:()=>z,p:()=>C,q:()=>h,r:()=>_,s:()=>q,t:()=>I,u:()=>f});var i=n(96440),a=n(31964),r=n(90770);const c={getShadowRoot:!0};function o(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,a.g)()}`:""}function s(t){return Array.isArray(t)?t:Array.from(t)}function l(t){const e=g(t,`.${r.C.darkMode}, .${r.C.lightMode}`);return e?.classList.contains("calcite-mode-dark")?"dark":"light"}function u(t){const e=g(t,"[dir]");return e?e.getAttribute("dir"):"ltr"}function m(t,e,n){const i=`[${e}]`,a=t.closest(i);return a?a.getAttribute(e):n}function f(t){return t.getRootNode()}function d(t){return t.host||null}function h(t,{selector:e,id:n}){return function t(i){if(!i)return null;i.assignedSlot&&(i=i.assignedSlot);const a=f(i),r=n?"getElementById"in a?a.getElementById(n):null:e?a.querySelector(e):null,c=d(a);return r||(c?t(c):null)}(t)}function g(t,e){return function t(n){return n?n.closest(e)||t(d(f(n))):null}(t)}function p(t,e){return y(t,e)}function y(t,e){if(!t)return;const n=e(t);if(void 0!==n)return n;const{parentNode:i}=t;return y(i instanceof ShadowRoot?i.host:i,e)}function v(t,e){return!!p(e,(e=>e===t||void 0))}async function b(t){if(t)return function(t){return"function"==typeof t?.setFocus}(t)?t.setFocus():t.focus()}function k(t){((0,i.t)(t,c)[0]||t).focus()}const x=":not([slot])";function w(t,e,n){e&&!Array.isArray(e)&&"string"!=typeof e&&(n=e,e=null);const i=e?Array.isArray(e)?e.map((t=>`[slot="${t}"]`)).join(","):`[slot="${e}"]`:x;return n?.all?function(t,e,n){let i=e===x?A(t,x):Array.from(t.querySelectorAll(e));i=n&&!1===n.direct?i:i.filter((e=>e.parentElement===t)),i=n?.matches?i.filter((t=>t?.matches(n.matches))):i;const a=n?.selector;return a?i.map((t=>Array.from(t.querySelectorAll(a)))).reduce(((t,e)=>[...t,...e]),[]).filter((t=>!!t)):i}(t,i,n):function(t,e,n){let i=e===x?A(t,x)[0]||null:t.querySelector(e);i=n&&!1===n.direct||i?.parentElement===t?i:null,i=n?.matches?i?.matches(n.matches)?i:null:i;const a=n?.selector;return a?i?.querySelector(a):i}(t,i,n)}function A(t,e){return t?Array.from(t.children||[]).filter((t=>t?.matches(e))):[]}function _(t,e){return Array.from(t.children).filter((t=>t.matches(e)))}function S(t,e,n){return"string"==typeof e&&""!==e?e:""===e?t[n]:void 0}function z(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}function I(t){return Boolean(t).toString()}function q(t){return!!E(t).length}function E(t){return t.target.assignedElements({flatten:!0})}function $(t){return!(!t.isPrimary||0!==t.button)}const C=(t,e,n)=>{const i=t.indexOf(e),a=0===i,r=i===t.length-1;let c;switch(n="previous"===n&&a?"last":"next"===n&&r?"first":n){case"first":c=t[0];break;case"last":c=t[t.length-1];break;case"next":c=t[i+1]||t[0];break;case"previous":c=t[i-1]||t[t.length-1]}return b(c),c}},31964:(t,e,n)=>{n.d(e,{g:()=>i});const i=()=>[2,1,1,1,3].map((t=>{let e="";for(let n=0;n<t;n++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}}]);