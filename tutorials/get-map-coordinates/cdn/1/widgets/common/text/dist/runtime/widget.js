System.register(["jimu-core","jimu-theme","jimu-ui"],(function(e,t){var o={},a={},n={};return{setters:[function(e){o.AppMode=e.AppMode,o.BaseVersionManager=e.BaseVersionManager,o.ExpressionResolverComponent=e.ExpressionResolverComponent,o.Immutable=e.Immutable,o.MutableStoreManager=e.MutableStoreManager,o.React=e.React,o.ReactRedux=e.ReactRedux,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.expressionUtils=e.expressionUtils,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.jsx=e.jsx,o.polished=e.polished},function(e){a.useTheme=e.useTheme},function(e){n.RichTextDisplayer=e.RichTextDisplayer,n.Scrollable=e.Scrollable,n.richTextUtils=e.richTextUtils}],execute:function(){e((()=>{var e={72957:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.854 2.153a.485.485 0 0 0-.708 0 .538.538 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.538.538 0 0 0 0-.738.485.485 0 0 0-.708 0L8 7.74zm0 5a.485.485 0 0 0-.708 0 .538.538 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.538.538 0 0 0 0-.738.485.485 0 0 0-.708 0L8 12.74z" clip-rule="evenodd"></path></svg>'},48891:e=>{"use strict";e.exports=o},34796:e=>{"use strict";e.exports=a},30726:e=>{"use strict";e.exports=n}},t={};function s(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var r={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(r),s.d(r,{__set_webpack_public_path__:()=>b,default:()=>h});var e=s(48891),t=s(72957),o=s.n(t);const a=t=>{const a=window.SVG,{className:n}=t,s=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(t,["className"]),r=(0,e.classNames)("jimu-icon jimu-icon-component",n);return a?e.React.createElement(a,Object.assign({className:r,src:o()},s)):e.React.createElement("svg",Object.assign({className:r},s))};var n=s(34796),i=s(30726);const{useState:l,useEffect:u,useRef:c}=e.React;function d(t){var o;const{value:s="",placeholder:r,repeatedDataSource:d,useDataSources:p,widgetId:g,wrap:f,tooltip:m}=t,v=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(t,["value","placeholder","repeatedDataSource","useDataSources","widgetId","wrap","tooltip"]),x=e.React.useMemo((()=>s.replace(/\ufeff/g,"")),[s]),h=(0,n.useTheme)(),b=c(),S=e.expressionUtils.isSingleStringExpression(m),[w,y]=l(""),[R,j]=e.React.useState("24px"),[M,E]=e.React.useState(!1),[O,D]=e.React.useState(!1),[I,N]=e.React.useState(0),[k,P]=e.React.useState(!1),T=((t,o,a)=>{var n,s,r,i,l;const u=null===(n=null==a?void 0:a.colors)||void 0===n?void 0:n.white,c=null!==(l=null===(i=null===(r=null===(s=null==a?void 0:a.colors)||void 0===s?void 0:s.palette)||void 0===r?void 0:r.light)||void 0===i?void 0:i[500])&&void 0!==l?l:"#444";return e.React.useMemo((()=>{const a=e.css`
      .rich-displayer {
        white-space: nowrap !important;
      }
   `;return e.css`
      width: 100%;
      height: 100%;
      position: relative;
      overflow-y: hidden;
      .rich-displayer {
        width: 100%;
        height: fit-content;
      }

      ${!t&&a};
      .text-fade {
        position: absolute;
        left: 0;
        height: ${o};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        pointer-events: none;
        > .arrow {
          position: absolute;
          width: 16px;
          height: 16px;
          background: ${u};
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          &.arrow-bottom {
            bottom: 4px;
          }
        }
        &.text-fade-bottom {
          bottom: 0;
          background: linear-gradient(180deg, rgba(182, 182, 182, 0) 0%, ${e.polished.rgba(c,.5)} 100%);
        }
      }

      .bounce {
        animation-name: bounce;
        animation-duration:0.6s;
        animation-iteration-count:infinite;
        animation-timing-function:linear;
      }

      @keyframes bounce {
        0% {
          transform: translateY(0px)
        }
        50% {
          transform: translateY(2px)
        }
        100%{
          transform: translateY(4px)
        }
      }
    `}),[u,c,o,t])})(f,R,h),A=e.React.useCallback((e=>{if(null==e)return;const{scrollable:t,bottoming:o}=e;E(o),D(t)}),[]);u((()=>{var t;if(null!=m&&S){const o=null!==(t=e.expressionUtils.getSingleStringExpressionText(m))&&void 0!==t?t:m.name;y(o)}}),[m,S]);const U=c();return(0,e.jsx)("div",Object.assign({css:T,title:w,onMouseEnter:()=>{var e,t;null!=U.current&&(clearTimeout(U.current),U.current=null);const o=(a=null!==(t=null===(e=b.current)||void 0===e?void 0:e.clientHeight)&&void 0!==t?t:0)<=80?"0px":a<=140?"24px":"15%";var a;P("0px"!==o),N((e=>e+1)),j(o)},onMouseLeave:()=>{U.current=setTimeout((()=>{P(!1),U.current=null}),500)},ref:b},v),(0,e.jsx)(i.Scrollable,{ref:A,version:I},(0,e.jsx)(i.RichTextDisplayer,{widgetId:g,repeatedDataSource:d,useDataSources:p,value:x,placeholder:r})),k&&O&&!M&&(0,e.jsx)("div",{className:"text-fade text-fade-bottom"},(0,e.jsx)("span",{className:"arrow arrow-bottom rounded-circle mr-1"},(0,e.jsx)(a,{className:"bounce",color:null===(o=null==h?void 0:h.colors)||void 0===o?void 0:o.black}))),!S&&m&&(0,e.jsx)(e.ExpressionResolverComponent,{useDataSources:p,expression:m,widgetId:g,onChange:e=>{(null==e?void 0:e.isSuccessful)?y(e.value):y("")}}))}const p={_widgetLabel:"Text",defaultPlaceholder:"Double click to edit text"};class g extends e.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.13.0",description:"Remove useless line-height: normal;",upgrader:e=>{let t=e.text;return t.includes("line-height: normal;")?(t=t.replace(/line-height: normal;/gm,"line-height: 1.2;"),e.set("text",t)):e}}]}}const f=new g;var m;!function(e){e[e.None=0]="None",e[e.Main=1]="Main",e[e.Sub=2]="Sub"}(m||(m={}));const v=e.css`
  /* Ensure that the cursor can be displayed when automatic width of layout */
  min-width: 12px;
`,x=t=>{var o,a,n;const{builderSupportModules:s,id:r,intl:l,useDataSources:u,repeatedDataSource:c,useDataSourcesEnabled:g,isInlineEditing:f,config:x,onInitResizeHandler:h}=t,b=e.ReactRedux.useDispatch(),{current:S}=e.React.useRef((0,e.getAppStore)().getState().appContext.isInBuilder),w=e.hooks.useWidgetSelected(r),y=e.hooks.useLatest(w),R=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode)),j=null==s?void 0:s.jimuForBuilderLib.getAppConfigAction,M=null==s?void 0:s.widgetModules.Editor,E=null==s?void 0:s.widgetModules.builderUtils,O=null===(a=null===(o=null==x?void 0:x.style)||void 0===o?void 0:o.wrap)||void 0===a||a,D=null==x?void 0:x.text,I=null==x?void 0:x.tooltip,N=((e,t)=>(e===p.defaultPlaceholder&&(e=((e,t)=>null!==t?t.formatMessage({id:e,defaultMessage:p[e]}):"")("defaultPlaceholder",t)),e))(null==x?void 0:x.placeholder,l),k=g?u:void 0,P=null!==(n=null==k?void 0:k.length)&&void 0!==n?n:0,[T,A]=e.React.useState(m.Sub),[U,C]=e.React.useState(null);e.React.useEffect((()=>{let e;e=null==c?m.None:0===c.recordIndex?m.Main:m.Sub,A(e)}),[c]),e.React.useEffect((()=>{y.current&&R===e.AppMode.Run&&b(e.appActions.setWidgetIsInlineEditingState(r,!1))}),[y,R,b,r]),e.hooks.useUpdateEffect((()=>{S&&(f||b(e.appActions.widgetStatePropChange(r,"showExpression",!1)))}),[f,b,r]);const _=R===e.AppMode.Design&&T!==m.Sub,B=_&&w,L=_&&f,V=e.React.useRef(!1);e.React.useEffect((()=>()=>{V.current=!0}),[]),e.hooks.useUpdateEffect((()=>{let t=i.richTextUtils.getAllExpressions(D);t=null!=t?t:(0,e.Immutable)({}),t=t.merge(null!=I?{tooltip:I}:{}),C(t)}),[D,I,P]);const W=e.hooks.useEventCallback((()=>{if(V.current)return;if(!S)return;const t=E.getExpressionParts(U),o=e.expressionUtils.getUseDataSourceFromExpParts(t,k);j().editWidget({id:r,useDataSources:o}).exec()}));return e.hooks.useUpdateEffect((()=>{W()}),[U,W]),(0,e.jsx)("div",{"data-testid":"text-widget",css:v,className:(0,e.classNames)("widget-text jimu-widget p-1")},B&&(0,e.jsx)(M,{className:(0,e.classNames)({"d-none":!L}),widgetId:r,nowrap:!O,onInitResizeHandler:h,useDataSources:k,enabled:!!f,onCreate:t=>{e.MutableStoreManager.getInstance().updateStateValue(r,"editor",t)},onDestory:()=>{e.MutableStoreManager.getInstance().updateStateValue(r,"editor",null)},onComplete:(e,t)=>{V.current||S&&j().editWidget({id:r,config:x.set("text",e).set("placeholder",t)}).exec()},placeholder:N,preserveWhitespace:!0,value:D}),(0,e.jsx)(d,{className:(0,e.classNames)({"d-none":L}),value:D,tooltip:I,wrap:O,placeholder:N,useDataSources:k,widgetId:r,repeatedDataSource:c}))};x.versionManager=f;const h=x;function b(e){s.p=e}})(),r})())}}}));