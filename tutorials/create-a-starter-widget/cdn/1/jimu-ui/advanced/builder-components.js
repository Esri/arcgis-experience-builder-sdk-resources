System.register(["jimu-core","jimu-for-builder","jimu-ui","jimu-ui/advanced/setting-components"],(function(e,t){var o={},a={},n={},s={};return{setters:[function(e){o.GuideLevels=e.GuideLevels,o.GuideManager=e.GuideManager,o.GuideTypes=e.GuideTypes,o.Immutable=e.Immutable,o.React=e.React,o.ReactRedux=e.ReactRedux,o.SessionManager=e.SessionManager,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.i18n=e.i18n,o.jsx=e.jsx,o.translatedLocales=e.translatedLocales,o.useIntl=e.useIntl},function(e){a.defaultMessages=e.defaultMessages},function(e){n.Button=e.Button,n.Checkbox=e.Checkbox,n.FloatingPanel=e.FloatingPanel,n.Label=e.Label,n.Loading=e.Loading,n.LoadingType=e.LoadingType,n.MultiSelect=e.MultiSelect,n.SVG=e.SVG,n.Toast=e.Toast,n.ToastType=e.ToastType,n.Tooltip=e.Tooltip,n.Typography=e.Typography,n.defaultMessages=e.defaultMessages},function(e){s.SettingRow=e.SettingRow}],execute:function(){e((()=>{var e={56499:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707z"></path></svg>'},96745:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m1 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.676 2.228H7.34c-.213-1.138.621-2.13 1.375-3.025C9.28 6.532 9.8 5.914 9.8 5.328 9.8 4.5 9.2 3.9 7.976 3.9c-.816 0-1.572.36-2.268 1.092l-.648-.6C5.852 3.552 6.788 3 8.096 3c1.692 0 2.772.864 2.772 2.244 0 .864-.652 1.628-1.3 2.387-.71.831-1.413 1.655-1.244 2.597m.3 2.172c0 .48-.348.792-.768.792-.432 0-.78-.312-.78-.792s.348-.804.78-.804c.42 0 .768.324.768.804" clip-rule="evenodd"></path></svg>'},28996:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47zM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"></path></svg>'},79244:e=>{"use strict";e.exports=o},4108:e=>{"use strict";e.exports=a},14321:e=>{"use strict";e.exports=n},79298:e=>{"use strict";e.exports=s}},t={};function i(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";i.r(r),i.d(r,{DownloadAppModal:()=>y,ExpressModeSwitch:()=>L});var e=i(79244),t=i(14321),o=i(79298),a=i(56499),n=i.n(a),s=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o};const l=t=>{const o=window.SVG,{className:a}=t,i=s(t,["className"]),r=(0,e.classNames)("jimu-icon jimu-icon-component",a);return o?e.React.createElement(o,Object.assign({className:r,src:n()},i)):e.React.createElement("svg",Object.assign({className:r},i))};var c=i(28996),d=i.n(c),u=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o};const p=t=>{const o=window.SVG,{className:a}=t,n=u(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",a);return o?e.React.createElement(o,Object.assign({className:s,src:d()},n)):e.React.createElement("svg",Object.assign({className:s},n))};var m=function(e,t,o,a){return new(o||(o=Promise))((function(n,s){function i(e){try{l(a.next(e))}catch(e){s(e)}}function r(e){try{l(a.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,r)}l((a=a.apply(e,t||[])).next())}))};const g=e.css`
  width: 360px !important;
  height: auto !important;
  visibility: visible !important;
  background: var(--ref-palette-custom1-300);
  >.floating-header {
    background: var(--ref-palette-custom1-300);
    color: var(--ref-palette-custom2-600);
    height: 55px;
    border-bottom: 1px solid var(--ref-palette-custom1-500);
    >.actions>.jimu-btn {
      color: var(--ref-palette-custom2-600)
    }
  }
  .floating-content {
    padding: 16px 20px 20px;
  }
  .form-label {
    color: var(--ref-palette-custom2-600);
  }
  .jimu-widget-setting--row >.jimu-widget-setting--row-label {
    margin-bottom: 12px;
  }
  .jimu-multi-select .jimu-dropdown {
    width: 100%;
  }
  .message-container {
    .message-line {
      position: relative;
      padding-left: 24px;
      margin-top: 8px;
      line-height: 26px;
      .donut-loading, .icon {
        position: absolute;
        left: 0;
        top: calc(50% - 8px);
        width: 16px;
        height: 16px;
      }
    }
  }
  .error-msg {
    display: flex;
    font-weight: 500;
    color: var(--sys-color-error-dark)
  }
  .popper-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    >.btn {
      min-width: 100px;
    }
  }
`;var f;!function(e){e.Start="001",e.CopyingCode="002",e.CompilingWidget="003",e.GeneratingZip="004",e.Completed="005",e.Fail="006"}(f||(f={}));const h=new Map([[f.Start,1],[f.CopyingCode,2],[f.CompilingWidget,3],[f.GeneratingZip,4],[f.Completed,5],[f.Fail,6]]),x=[{code:f.CopyingCode,key:"copingCode"},{code:f.CompilingWidget,key:"compilingCustomWidgets"},{code:f.GeneratingZip,key:"generateZipFile"}],y=a=>{const{appId:n,isOpen:s,onClose:i}=a,r=e.hooks.useTranslation(t.defaultMessages),c=e.React.useRef(s),d=e.React.useRef("");e.React.useEffect((()=>{c.current=s}),[s]);const u=()=>{i(),c.current=!1};e.hooks.useUpdateEffect((()=>{s||(C(!1),L(0),v(["en"]),k(-1),d.current="")}),[s]);const[y,v]=e.React.useState(["en"]),[w,b]=e.React.useState(!1),[j,C]=e.React.useState(!1),[S,L]=e.React.useState(0),[O,k]=e.React.useState(-1),M=e=>new Promise((t=>{setTimeout((()=>{t()}),e)})),[R,T]=e.React.useState(!1),N=e.ReactRedux.useSelector((e=>e.appContext.isRTL));return(0,e.jsx)(t.FloatingPanel,{reference:"body",open:s,placement:"left",css:g,headerTitle:r("download"),dragBounds:"body",disableResize:!0,"data-test":s,onHeaderClose:u,offsetOptions:[0,-(document.documentElement.clientWidth/2+180)],trapFocus:!0,"aria-label":r("download"),toggle:(e,t)=>{"clickOutside"!==t&&u()}},(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",null,(0,e.jsx)(t.Label,{centric:!0},(0,e.jsx)(t.Checkbox,{className:"mr-2",checked:w,onChange:(e,t)=>{b(t)}}),r("applyBuilderClientId")),(0,e.jsx)(o.SettingRow,{label:(0,e.jsx)("span",null,r("selectRequiredLanguage")),flow:"wrap"},(0,e.jsx)(t.MultiSelect,{className:"w-100",displayByValues:()=>y.length?`${y.length} ${r("SelectionSelected")}`:"","aria-label":r("selectRequiredLanguage"),items:e.translatedLocales.map((o=>{const a={label:r(o),value:o};return"en"===o&&(a.render=()=>(0,e.jsx)("div",{className:"d-flex w-100 align-items-center mb-0"},(0,e.jsx)(t.Checkbox,{checked:!0,disabled:!0}),(0,e.jsx)("div",{style:N?{marginRight:"8px"}:{marginLeft:"8px"},className:"item-text"},a.label))),a})),onClickItem:(e,t,o)=>{"en"!==t&&v([...o])},values:(0,e.Immutable)(y)})),j&&(0,e.jsx)("div",{className:"message-container mt-4"},O>-1&&null!==O&&(0,e.jsx)("div",null,r("indexNumber",{cdnNumber:O})),(R?x:x.filter((e=>e.code!==f.CompilingWidget))).map((o=>{const a=h.get(o.code);return a-1<=S?(0,e.jsx)("div",{className:"message-line",key:o.key},S>a?(0,e.jsx)(l,{color:"var(--sys-color-primary-main)",className:"icon"}):(0,e.jsx)(t.Loading,{type:t.LoadingType.Donut}),r(o.key)):null}))),S===h.get(f.Fail)&&(0,e.jsx)("div",{className:"error-msg mt-4"},(0,e.jsx)(p,{className:"mr-1"}),r("failedToLoad"))),(0,e.jsx)("div",{className:"mt-5 popper-footer"},(0,e.jsx)(t.Button,{type:"primary",disabled:!y.length||j,onClick:()=>m(void 0,void 0,void 0,(function*(){L(0);const t=y.join(","),o=e.SessionManager.getInstance().getMainSession(),a=null==o?void 0:o.token,s=w?(0,e.getAppStore)().getState().clientId:void 0,i=`${window.jimuConfig.mountPath}download/${n}?locale=${t}&token=${a}${s?`&clientId=${s}`:""}`;try{C(!0);const e=(yield fetch(i).then((e=>e.json()))).uuid;d.current=e;const t=`${window.jimuConfig.mountPath}download/${n}/status?token=${a}&uuid=${e}`;let o,s=!1;for(;!s&&d.current===e&&c.current;){o=yield fetch(t).then((e=>e.json()));const{status:{code:i,hasCustomWidget:r},cdnNumber:l}=o;if(T(r),L((()=>h.get(i))),k((()=>l)),!c.current||d.current!==e)break;if(i===f.Fail||i===f.Completed?s=!0:yield M(2e3),!c.current||d.current!==e)break;if(i===f.Completed){u();const t=`${window.jimuConfig.mountPath}download/${n}/getZip?token=${a}&uuid=${e}`;window.open(t)}}}catch(e){L((()=>h.get(f.Fail)))}}))},r("ok")),(0,e.jsx)(t.Button,{className:"ml-2",onClick:u},r("cancel")))))};var v=i(96745),w=i.n(v),b=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o};const j=t=>{const o=window.SVG,{className:a}=t,n=b(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",a);return o?e.React.createElement(o,Object.assign({className:s,src:w()},n)):e.React.createElement("svg",Object.assign({className:s},n))};var C=i(4108);const S=t=>e.css`
    .switch-button.icon-btn {
      border-radius: 12px;
      border: none !important;
      padding: 4px;
      ${t?"padding-left: 20px;":"padding-right: 20px;"}
      background-color: ${t?"var(--sys-color-primary-main)":"var(--sys-color-secondary-light)"};
      >.icon-btn-sizer {
        width: 24px;
        height: 24px;
        border-radius: 8px;
        background: var(--sys-color-secondary-dark);
        svg {
          color: var(--sys-color-primary-text);
        }
      }
    }
  `,L=o=>{const{checked:a,onChange:n}=o,s=e.hooks.useTranslation(C.defaultMessages,t.defaultMessages),[i,r]=e.React.useState(!1),l=e.React.useRef(),c=()=>{const e=window.location.href;return!e.includes("set-portalurl")&&!e.includes("landing")},d=(0,e.useIntl)();return(0,e.jsx)("div",{css:S(a),className:"express-mode-switch-container mr-2"},(0,e.jsx)(t.Typography,{variant:"h6",className:"mb-0"},(0,e.jsx)(t.Tooltip,{placement:"top",title:s(a?"goToFullMode":"goToExpressMode"),id:"express-mode-switch-button-tooltip",enterDelay:0},(0,e.jsx)(t.Button,{icon:!0,className:"switch-button mr-2",type:a?"primary":"default",onClick:()=>{n(!a),c()&&(r(!0),l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{r(!1),clearTimeout(l.current),l.current=null}),2e3))},role:"switch","aria-checked":a,"aria-label":s("expressModeStep1Title"),"aria-describedby":"express-mode-switch-button-tooltip"},(0,e.jsx)(t.SVG,{autoFlip:!0,size:"m",src:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">\r\n                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9541 1H4.0704L7.97869 8L4 15H11.9541L16 8L11.9541 1ZM7.97028 3.49994L10.551 8L7.96979 12.5001H10.9349L13.5 8L10.9187 3.49994H7.97028Z" fill="white"/>\r\n                  <path d="M2.80699 8.0293L4 5.37897L2.62351 3L0 8.0293L2.59333 13L3.98491 10.6499L2.80699 8.0293Z" fill="white"/>\r\n                </svg>'}))),(0,e.jsx)(t.Button,{title:s("help"),className:"border-0",icon:!0,size:"sm",type:"tertiary",onClick:()=>{e.GuideManager.getInstance().startGuide({id:"express-mode",type:e.GuideTypes.Program,level:e.GuideLevels.Builder})},"aria-label":s("help"),"aria-haspopup":"dialog"},(0,e.jsx)(j,{autoFlip:!e.i18n.isSameLanguage(null==d?void 0:d.locale,"he")}))),(0,e.jsx)(t.Toast,{css:e.css`
          top: 104px;
          .jimu-toast-common::before {
            content: '';
            width: 16px;
            height: 16px;
            margin-right: 8px;
            background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_561_41)%22%3E%0A%3Cpath%20d%3D%22M7.35355%2011.0607L12.7071%205.70711L12%205L7.35355%209.64645L4.70711%207L4%207.70711L7.35355%2011.0607Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0%208C0%2012.4183%203.58172%2016%208%2016C12.4183%2016%2016%2012.4183%2016%208C16%203.58172%2012.4183%200%208%200C3.58172%200%200%203.58172%200%208ZM15%208C15%2011.866%2011.866%2015%208%2015C4.13401%2015%201%2011.866%201%208C1%204.13401%204.13401%201%208%201C11.866%201%2015%204.13401%2015%208Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_561_41%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E");
          }
        `,open:i,text:s(a?"switchedToExpressMode":"switchedToFullMode"),type:t.ToastType.Info}))}})(),r})())}}}));