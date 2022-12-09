System.register(["jimu-core","jimu-ui","jimu-for-builder","jimu-layouts/layout-builder","jimu-layouts/layout-runtime","jimu-ui/advanced/setting-components","jimu-theme"],(function(e,t){var o={},a={},l={},r={},i={},n={},s={};return{setters:[function(e){o.Immutable=e.Immutable,o.LayoutItemType=e.LayoutItemType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.WidgetState=e.WidgetState,o.WidgetType=e.WidgetType,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.jsx=e.jsx,o.lodash=e.lodash,o.polished=e.polished},function(e){a.Button=e.Button,a.Icon=e.Icon,a.Loading=e.Loading,a.NavButtonGroup=e.NavButtonGroup,a.Popper=e.Popper,a.Tooltip=e.Tooltip,a.hooks=e.hooks,a.utils=e.utils},function(e){l.getAppConfigAction=e.getAppConfigAction},function(e){r.CanvasPane=e.CanvasPane,r.DropArea=e.DropArea,r.LayoutBuilder=e.LayoutBuilder,r.addItemToLayout=e.addItemToLayout,r.withRnd=e.withRnd},function(e){i.LayoutContext=e.LayoutContext,i.PageContext=e.PageContext,i.searchUtils=e.searchUtils,i.utils=e.utils},function(e){n.WidgetListPopper=e.WidgetListPopper},function(e){s.getBuilderThemeVariables=e.getBuilderThemeVariables,s.styled=e.styled}],execute:function(){e((()=>{var e={25164:e=>{e.exports='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h2v1H4V4ZM8 4h2v1H8V4ZM14 4h-2v1h2V4ZM15 4h1v2h-1V4ZM16 8h-1v2h1V8ZM4 14h1v2H4v-2ZM5 6H4v2h1V6ZM4 10h1v2H4v-2ZM16 12h-1v2h1v-2ZM16 15v1h-2v-1h2ZM12 15h-2v1h2v-1ZM6 15h2v1H6v-1Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18 0a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h16Zm0 1H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" fill="#000"></path></svg>'},55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=o},23137:e=>{"use strict";e.exports=l},77282:e=>{"use strict";e.exports=r},74758:e=>{"use strict";e.exports=i},34796:e=>{"use strict";e.exports=s},30726:e=>{"use strict";e.exports=a},77756:e=>{"use strict";e.exports=n}},t={};function c(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,c),l.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var o in t)c.o(t,o)&&!c.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var d={};return(()=>{"use strict";c.r(d),c.d(d,{default:()=>F});var e=c(48891),t=c(30726);const o="controller",a={sm:24,default:32,lg:48};var l=c(23137),r=c(77282),i=c(74758);const n=(t,o)=>{const a=e.ReactRedux.useSelector((e=>e.widgetsRuntimeInfo)),l=s(t,o),r=p(l);return e.React.useMemo((()=>{const t={};return r.forEach((o=>{var l;const r=null!==(l=null==a?void 0:a[o])&&void 0!==l?l:{isClassLoaded:!1,state:e.WidgetState.Closed};t[o]=(0,e.Immutable)(r)})),(0,e.Immutable)(t)}),[r,a])},s=(t,o)=>e.ReactRedux.useSelector((e=>{var a,l,r,n;const s=null===(r=null===(l=null===(a=e.appConfig.widgets)||void 0===a?void 0:a[t])||void 0===l?void 0:l.layouts)||void 0===r?void 0:r[o],c=e.browserSizeMode,d=e.appConfig.mainSizeMode,u=i.searchUtils.findLayoutId(s,c,d);return null===(n=e.appConfig.layouts)||void 0===n?void 0:n[u]})),u=e=>{var t,o,a;let l=(null!==(a=null===(o=null===(t=null==e?void 0:e.order)||void 0===t?void 0:t.asMutable)||void 0===o?void 0:o.call(t))&&void 0!==a?a:[]).map((t=>{var o;return null===(o=e.content)||void 0===o?void 0:o[t]}));return l=l.filter((e=>e&&e.id&&e.widgetId&&!e.isPending)),l.map((e=>e.id))},p=e=>u(e).map((t=>{var o,a;return null===(a=null===(o=e.content)||void 0===o?void 0:o[t])||void 0===a?void 0:a.widgetId})),v=e.css`
  max-width: 100vw !important; 
  /* hide rnd-resize bar for the outermost layout item */
  .controller-configuration-container > * > * > .builder-layout-item > .select-wrapper > .action-area {
      > .rnd-resize-top,
      > .rnd-resize-right,
      > .rnd-resize-bottom,
      > .rnd-resize-left {
        display: none;
      }
    }

    .controller-configuration-container .builder-layout-item > .select-wrapper > .lock-layout-tip {
      display: none;
    }

  .selectable {
    > div {
      cursor: default;
    }
  }

  .widget-container {
    height: 100%;
    overflow: auto;
  }
`,g={width:150,height:150},h={width:300,height:300},f=()=>!1,m=o=>{const{reference:a,placement:n,widgetId:c,controllerId:d,onClose:u,onSizeChange:p,size:m,version:y}=o,b=e.ReactRedux.useSelector((e=>{var t,o,a;return null===(a=null===(o=null===(t=e.appConfig.widgets)||void 0===t?void 0:t[d])||void 0===o?void 0:o.layouts)||void 0===a?void 0:a._openwidget})),w=e.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=e.appConfig.widgets)||void 0===t?void 0:t[c])||void 0===o?void 0:o.label})),R=s(d,"_openwidget"),S=((t,o)=>{const a=(()=>{var t,o,a,l,r,i,n,s;const c=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.selection)),d=null==c?void 0:c.layoutId,u=null==c?void 0:c.layoutItemId,p=(0,e.getAppStore)().getState().appConfig;return(null===(l=null===(a=null===(o=null===(t=p.layouts)||void 0===t?void 0:t[d])||void 0===o?void 0:o.content)||void 0===a?void 0:a[u])||void 0===l?void 0:l.widgetId)||(null===(s=null===(n=null===(i=null===(r=p.layouts)||void 0===r?void 0:r[d])||void 0===i?void 0:i.content)||void 0===n?void 0:n[u])||void 0===s?void 0:s.sectionId)})();return!!a&&(a===t||a===o||((t,o,a)=>{const l=t.widgets[o];if(!l.layouts)return[];let r=[];return Object.keys(l.layouts).forEach((o=>{Object.keys(l.layouts[o]).forEach((a=>{const n=t.layouts[l.layouts[o][a]];r=r.concat(i.searchUtils.getContentsInLayoutRecursive(t,n.id,e.LayoutItemType.Section,a,!1)),r=r.concat(i.searchUtils.getContentsInLayoutRecursive(t,n.id,e.LayoutItemType.Widget,a,!1))}))})),Array.from(new Set(r))})((0,e.getAppStore)().getState().appConfig,o).includes(a))})(d,c),[x,C]=e.React.useState(!!c);t.hooks.useUpdateEffect((()=>{C(!1),setTimeout((()=>{C(!!c)}),100)}),[c]),e.React.useEffect((()=>{S||null==u||u()}),[S,u]);const I=t.hooks.useRefValue(R);return e.React.useEffect((()=>{c&&((t,o)=>{if(o){let a=(0,l.getAppConfigAction)().appConfig;const r=(e=>({type:"WIDGET",widgetId:e,bbox:{left:0,top:0,bottom:0,right:0},id:"0"}))(t);a=a.setIn(["layouts",o.id,"content",r.id],r).setIn(["layouts",o.id,"order"],[r.id]),(0,l.getAppConfigAction)(a).exec(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged((0,e.Immutable)({layoutId:o.id,layoutItemId:"0"})))}})(c,I.current)}),[c,I]),(0,e.jsx)(e.React.Fragment,null,x&&(0,e.jsx)(t.Popper,{floating:!0,open:!0,headerTitle:w,onHeaderClose:u,minSize:g,onResize:e=>{p(c,e)},dragBounds:"body",defaultSize:m||h,css:v,version:y,className:"flex-grow-1",reference:a,toggle:e=>{if("Escape"===(null==e?void 0:e.key)){null==u||u();const e=null==a?void 0:a.querySelector("button");null==e||e.focus()}},placement:n},(0,e.jsx)("div",{className:"widget-container controller-configuration-container d-flex p-1"},(0,e.jsx)(r.LayoutBuilder,{isItemAccepted:f,layouts:b,itemDraggable:!1,itemResizable:!0,showDefaultTools:!1}))))};var y=c(77756);const b=t=>{var o,a;const l=null==t?void 0:t.itemType,r=null===(o=null==t?void 0:t.manifest)||void 0===o?void 0:o.widgetType,n=null===(a=null==t?void 0:t.manifest)||void 0===a?void 0:a.name;return l!==e.LayoutItemType.Section&&r!==e.WidgetType.Layout&&"controller"!==n&&!i.utils.isWidgetPlaceholder(i.utils.getAppConfig(),t)},w=(t,o,a)=>{var l,r,n;const s=null===(n=null===(r=null===(l=(0,e.getAppStore)().getState().appConfig.widgets)||void 0===l?void 0:l[o])||void 0===r?void 0:r.layouts)||void 0===n?void 0:n[a],c=(t=>{var o;const a=(0,e.getAppStore)().getState(),l=i.searchUtils.findLayoutId(t,a.browserSizeMode,a.appConfig.mainSizeMode);return null===(o=a.appConfig.layouts)||void 0===o?void 0:o[l]})(s),d=(0,e.getAppStore)().getState().browserSizeMode;Object.keys(s).forEach((e=>{d!==e&&t.copyLayoutContent(c.id,s[e])}))},R=(e,t)=>{const o=o=>w(o,e,t);return(e,t,a,i,n)=>((e,t,o,a,i,n)=>{const s={layoutId:e.id};let c=(0,l.getAppConfigAction)();(0,r.addItemToLayout)(c.appConfig,t,s,o,a,i||0).then((e=>{c=(0,l.getAppConfigAction)(e.updatedAppConfig),null==n||n(c),c.exec()}))})(e,t,a,i,n,o)};var S=c(34796),x=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]])}return o};const C=(e,t,o)=>{let l=a[e];return t&&(l+=21),l+=2*I(e,o),l},I=(e,t)=>"circle"===t?"sm"===e?4:"default"===e?2:"lg"===e?0:void 0:6,j=e.React.forwardRef(((o,a)=>{var l;const{label:r,className:i,title:n,showLabel:s,showTooltip:c=!0,labelGrowth:d=0,icon:u,marker:p,onMarkerClick:v,avatar:g,autoFlip:h,active:f,editDraggable:m,disabled:y}=o,b=x(o,["label","className","title","showLabel","showTooltip","labelGrowth","icon","marker","onMarkerClick","avatar","autoFlip","active","editDraggable","disabled"]),w=g||{},{shape:R,style:S}=w,j=x(w,["shape","style"]),O=null==j?void 0:j.size,[A,k]=e.React.useState(null),E=((t,o,a,l)=>e.React.useMemo((()=>{const r=C(t,o,a),i=r+l,n=I(t,a);return e.css`
      display: flex;
      align-items:center;
      flex-direction: column;
      justify-content: ${o?"space-around":"center"};
      width: ${e.polished.rem(i)} !important;
      height: ${e.polished.rem(r)};
      .tool-drag-handler {
        cursor: auto;
      }
      .avatar {
        padding: ${n}px;
        position: relative;
        text-align: center;
        .marker {
          position: absolute;
          right: 0;
          top: 0;
          padding: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon-btn-sizer {
            min-width: .625rem;
            min-height: .625rem;
          }
        }
      }
      .avatar-label {
        text-align: center;
        width: 100%;
        min-height: ${e.polished.rem(21)};
        cursor: default;
      }
    `}),[t,o,a,l]))(O,s,R,d),N=(0,e.jsx)(t.Button,Object.assign({icon:!0,active:f,disabled:y,className:"avatar-button",ref:a},j,{style:Object.assign({borderRadius:"circle"===R?"50%":void 0},S)}),(0,e.jsx)(t.Icon,{color:"string"!=typeof u&&(null===(l=u.properties)||void 0===l?void 0:l.color),icon:"string"!=typeof u?u.svg:u,autoFlip:h}));return(0,e.jsx)("div",Object.assign({},b,{className:(0,e.classNames)("avatar-card",`${i} avatar-card`),css:E}),(0,e.jsx)("div",{className:(0,e.classNames)({"no-drag-action":!m},"avatar tool-drag-handler"),onMouseEnter:()=>{k(!0)},onMouseLeave:()=>{k(!1)}},p&&A&&(0,e.jsx)(t.Button,{className:"marker",size:"sm",icon:!0,onClick:v},(0,e.jsx)(t.Icon,{size:8,icon:p})),c?(0,e.jsx)(t.Tooltip,{title:n||r,style:{pointerEvents:"none"}},N):N),s&&(0,e.jsx)("div",{className:(0,e.classNames)("avatar-label text-truncate",{active:f})},r))}));var O=c(55339),A=c.n(O);const k=(e,t,o)=>{let a=e,l=t;return l-a>o?l=e+o:l-a<o&&(a=0,l=a+o),[a,l]},E=[],N=e.React.forwardRef(((o,a)=>{var l;const{scrollRef:r,className:i,lists:n=E,createItem:s,vertical:c,itemLength:d,space:u,onChange:p,autoHideArrow:v,minLength:g=d,autoScrollEnd:h,onScrollStatusChange:f}=o,m=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]])}return o}(o,["scrollRef","className","lists","createItem","vertical","itemLength","space","onChange","autoHideArrow","minLength","autoScrollEnd","onScrollStatusChange"]),y=t.hooks.useTranslate(),b=null!==(l=null==n?void 0:n.length)&&void 0!==l?l:0,w=((t,o,a)=>e.css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .root {
      flex-direction: ${t?"column":"row"};
      width: 100%;
      height: 100%;
      min-width: ${e.polished.rem(a)};
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;
      .scroll-list-item {
        &:not(:first-of-type) {
          margin-top: ${t?e.polished.rem(o):"unset"};
          margin-left: ${t?"unset":e.polished.rem(o)};
        }
      }
    }
`)(c,u,g),[R,S]=t.hooks.useForwardRef(a),x=((o,a,l=0,r=l)=>{let i=((o,a=500,l)=>{var r,i;const n=l?"clientHeight":"clientWidth",[s,c]=e.React.useState(null!==(i=null===(r=o.current)||void 0===r?void 0:r[n])&&void 0!==i?i:0),d=t.hooks.useLatest((()=>{const e=o.current[n]||0;c(e)})),u=e.React.useMemo((()=>e.lodash.debounce((()=>d.current()),a)),[]);return e.React.useEffect((()=>{const e=o.current;e&&u();const t=new ResizeObserver(u);return t.observe(e),()=>{t.disconnect(),u.cancel()}}),[o,u]),s})(o,500,a);return i+=l,i=Math.max(i,r),i})(R,c,u,g),C=e.React.useMemo((()=>Math.floor(x/d)),[d,x]),[I,j]=e.React.useState(k(0,0,C)[0]),[O,A]=e.React.useState(k(0,0,C)[1]),N=t.hooks.useRefValue(O),L=t.hooks.useRefValue(I),[P,M]=e.React.useState(!0),[z,T]=e.React.useState(!1),[W,B]=e.React.useState(!0),Z=e.React.useMemo((()=>({visibility:W?"hidden":"visible"})),[W]);e.React.useEffect((()=>{null==f||f(W,P,z)}),[z,P,W,f]),e.React.useEffect((()=>{if(0===x)return;const[e,t]=k(L.current,N.current,C);j(e),A(t)}),[C,L,N,x]);const $=e.React.useRef([]),D=t.hooks.useEventCallback((()=>{const e=n.length>0&&$.current.length>0&&n[n.length-1]!==$.current[$.current.length-1];if(h&&e&&$.current.length>b){let e=0,t=0;t=b,e=t-C,e=Math.max(0,e),j(e),A(t)}}));e.React.useEffect((()=>{D(),$.current=n}),[n,D]);const H=t.hooks.useEventCallback(((e,t=!0)=>{const o=t?1:C;let a=0,l=0;e?(a=I-o,a<0?(a=0,l=a+C):l=O-o):(l=O+o,l>b?(l=b,a=l-C):a=I+o),j(a),A(l)}));return e.React.useEffect((()=>{t.utils.setRef(r,H)}),[H,r]),e.React.useEffect((()=>{if(0===x)return;const e=O-I>=b,t=O===b;M(0===I),T(t),B(e)}),[I,O,b,x]),(0,e.jsx)(t.NavButtonGroup,Object.assign({},m,{css:w,type:"tertiary",vertical:c,onChange:e=>{null==p||p(e),H(e,!0)},disablePrevious:P,disableNext:z,previousAriaLabel:y("previous"),nextAriaLabel:y("next"),previousStyle:Z,nextStyle:Z,className:(0,e.classNames)("scroll-list",i)}),(0,e.jsx)("div",{className:"root scroll-list-root",ref:S},n.slice(I,O).map((e=>s(e,"scroll-list-item")))))}));var L=c(25164),P=c.n(L);const M=(0,S.styled)("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${e=>e.vertical?"column":"row"};
  .avatar-placeholder {
    &:not(:first-of-type) {
      margin-top: ${t=>t.vertical?e.polished.rem(t.space):"unset"};
      margin-left: ${t=>t.vertical?"unset":e.polished.rem(t.space)};
    }
  }
`,z=(e=>{const t=[];for(;e>0;)t.push(e),e--;return t})(3),T={type:"secondary",size:"lg",shape:"circle"},W=t=>{const{vertical:o,space:a,size:l="lg"}=t,r=e.React.useMemo((()=>Object.assign(Object.assign({},T),{size:l})),[l]);return e.React.createElement(M,{className:"list-placeholder",vertical:o,space:a},z.map(((t,o)=>e.React.createElement(j,{key:o,disabled:!0,className:"avatar-placeholder",icon:P(),label:"",showTooltip:!1,avatar:r}))))};const B=e.css`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background: transparent;
    > .drop-area {
      width: 100%;
      height: 100%;
    }
    > .overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      right: 0;
      background: transparent;
      z-index: -1;
      &.hide {
        display: none;
      }
    }
  `,Z=e.React.forwardRef(((a,l)=>{const{widgetId:n,layout:s,layouts:c,vertical:d,childClass:u,placeholder:p,className:v}=a,g=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]])}return o}(a,["widgetId","layout","layouts","vertical","childClass","placeholder","className"]),{color:h,size:[f,m]}=p,y=e.React.useRef(null),b=e.React.useRef(null),w=e.React.useRef(null),S=e.React.useRef(null),x=e.React.useRef(null),[C,I]=e.React.useState(!1),j=t.hooks.useForkRef(y,l);e.React.useEffect((()=>{b.current=new r.CanvasPane(x.current)}),[]);const O=R(n,o);return(0,e.jsx)("div",Object.assign({className:(0,e.classNames)("drop-zone",v),ref:j},g,{css:B}),(0,e.jsx)(r.DropArea,{style:B,className:"drop-area",layouts:c,highlightDragover:!0,onDragOver:(t,o,a,l)=>{let r=l;const i=S.current,n=y.current.offsetHeight,s=y.current.offsetWidth;if(i&&i.length)if(d){const{insertY:e,refId:t}=((e,t,o)=>{const a=t.top+t.height/2;let l,r,i=!1;if(o.some(((e,t)=>{if(e.top+e.height/2>a){if(0===t)l=e.top/2;else{const a=o[t-1];l=(e.top+a.top+a.height)/2}i=!0,r=e.id}return i})),!i){const t=o[o.length-1];l=(t.top+t.height+e.height)/2}return{insertY:l,refId:r}})(a,r,i);w.current=t,r={top:e-f/2+y.current.scrollTop,width:f,left:(s-f)/2+y.current.scrollLeft,height:m}}else{const{insertX:e,refId:t}=((e,t,o)=>{const a=t.left+t.width/2;let l,r,i=!1;if(o.some(((e,t)=>{if(e.left+e.width/2>a){if(0===t)l=e.left/2;else{const a=o[t-1];l=(e.left+a.left+a.width)/2}i=!0,r=e.id}return i})),!i){const t=o[o.length-1];l=(t.left+t.width+e.width)/2}return{insertX:l,refId:r}})(a,r,i);w.current=t,r={left:e-m/2+y.current.scrollLeft,width:m,top:(n-f)/2+y.current.scrollTop,height:f}}else r=d?{top:a.height/2-m/2,width:f,left:m/2,height:m}:{left:a.width/2-m/2,width:m,top:(n-f)/2+y.current.scrollTop,height:f};b.current.clear(),b.current.setColor(e.polished.rgba(h,1)),b.current.drawRect(r)},onDrop:(e,t,o)=>{b.current.clear();let a=0;w.current?a=s.order&&s.order.indexOf(w.current)||0:s.order&&(a=s.order.length),O(s,e,t,o,a),w.current=null,S.current=[]},onToggleDragoverEffect:e=>{e&&(w.current=null,(()=>{S.current=[];const e=y.current.getBoundingClientRect(),t=y.current.parentNode.querySelectorAll(`.${u}`);t&&t.length&&t.forEach((t=>{const o=t.getAttribute("data-layoutitemid");if(s.order&&s.order.includes(o)){const a=i.utils.relativeClientRect(t.getBoundingClientRect(),e);a.id=o,S.current.push(a)}})),d?S.current.sort(((e,t)=>e.top-t.top)):S.current.sort(((e,t)=>e.left-t.left))})(),b.current.setSize(y.current.clientWidth,y.current.clientHeight)),I(e)}}),(0,e.jsx)("canvas",{className:(0,e.classNames)("overlay",{hide:!C}),ref:x}))})),$=(0,r.withRnd)(!1)((o=>{var a,l;const{markerEnabled:r,onMarkerClick:i,widgetid:n,showLabel:s,showTooltip:c,labelGrowth:d,avatar:u,onClick:p,active:v,editDraggable:g,className:h}=o,f=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.widgets)||void 0===t?void 0:t[n]}));return f?e.React.createElement(j,{"data-widgetid":n,className:`widget-avatar-card ${h}`,showLabel:s,showTooltip:c,labelGrowth:d,avatar:u,label:f.label,icon:f.icon,autoFlip:null===(l=null===(a=null==f?void 0:f.manifest)||void 0===a?void 0:a.properties)||void 0===l?void 0:l.flipIcon,marker:r?A():"",active:v,editDraggable:g,onMarkerClick:i,onClick:p}):e.React.createElement(t.Loading,null)})),D=t=>{const{className:o,draggable:a,layoutId:l,layoutItem:r,onClick:i,label:n,showLabel:s,showTooltip:c,labelGrowth:d,markerEnabled:u,avatar:p,active:v,removeWidget:g}=t;return e.React.createElement($,{className:(0,e.classNames)(o,"layout-item","align-items-center"),layoutId:l,layoutItem:r,widgetid:r.widgetId,layoutItemId:r.id,label:n,markerEnabled:u,showLabel:s,showTooltip:c,labelGrowth:d,avatar:p,active:v,editDraggable:a,useDragHandler:!0,onClick:i,onMarkerClick:()=>g(r.widgetId)})};const H=e.React.forwardRef(((t,a)=>{const{widgetId:r,draggable:c,itemStyle:d,vertical:p,className:v,space:g,dropZoneRef:h,onItemClick:f,onClick:m,scrollRef:y,markerEnabled:R=!0}=t,x=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]])}return o}(t,["widgetId","draggable","itemStyle","vertical","className","space","dropZoneRef","onItemClick","onClick","scrollRef","markerEnabled"]),I=e.ReactRedux.useSelector((e=>{var t,o,a;return null===(a=null===(o=null===(t=e.appConfig.widgets)||void 0===t?void 0:t[r])||void 0===o?void 0:o.layouts)||void 0===a?void 0:a.controller})),j=s(r,o),O=u(j),A=(0,S.getBuilderThemeVariables)(),k=n(r,o),E=Object.keys(k).filter((t=>k[t].state===e.WidgetState.Opened)),L=((e,t)=>{const o=null==e?void 0:e.showLabel,a=null==e?void 0:e.labelGrowth,l=null==e?void 0:e.avatar.size,r=null==e?void 0:e.avatar.shape;return C(l,o,r)+t+a})(d,g),P={color:null==A?void 0:A.colors.palette.primary[700],size:[L,5]},M=(z=r,o,e=>{const t=(0,l.getAppConfigAction)();t.removeWidget(e),w(t,z,"controller"),t.exec()});var z;return e.React.createElement(i.LayoutContext.Provider,{value:{isItemAccepted:b}},e.React.createElement("div",{ref:a,className:"layout controller-layout w-100 h-100","data-layoutid":j.id,onClick:m},e.React.createElement(Z,{widgetId:r,vertical:p,layout:j,childClass:`layout-${j.id}-item`,placeholder:P,layouts:I}),e.React.createElement(N,Object.assign({},x,{scrollRef:y,className:(0,e.classNames)(v,"layout-item-list"),vertical:p,itemLength:L,space:g,autoHideArrow:!0,lists:O,autoScrollEnd:!0,createItem:(t,o)=>{const a=j.content[t],l=a&&a.widgetId||"",r=E.includes(l);return e.React.createElement(D,Object.assign({},d,{key:t,className:(0,e.classNames)(`layout-${null==j?void 0:j.id}-item layout-item`,o),widgetid:l,layoutId:j.id,layoutItemId:t,draggable:c,markerEnabled:R,layoutItem:a,active:r,removeWidget:M,onClick:f}))}}))))}));const V=S.styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .list-placeholder {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`,G=e.React.forwardRef(((t,o)=>{var a;const{showPlaceholder:l,itemStyle:r,space:i,vertical:n}=t,s=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]])}return o}(t,["showPlaceholder","itemStyle","space","vertical"]),c=n?i:r.labelGrowth;return e.React.createElement(V,null,l&&e.React.createElement(W,{size:null===(a=r.avatar)||void 0===a?void 0:a.size,space:c,vertical:n}),e.React.createElement(H,Object.assign({className:(0,e.classNames)({invisible:l}),ref:o,itemStyle:r,space:i,vertical:n},s)))})),U=e.css`
  width: 300px;
  height: 300px;
  overflow-y: auto;
`,F={Builder:t=>{var a,r,s,c;const{id:d,config:u,version:p}=t,v=null===(a=null==u?void 0:u.behavior)||void 0===a?void 0:a.vertical,g=null===(r=u.behavior)||void 0===r?void 0:r.size,h=v?"right-start":"bottom",{viewOnly:f}=e.React.useContext(i.PageContext),w=e.React.useRef(null),S=e.ReactRedux.useSelector((e=>e.widgetsState[d])),x=null==S?void 0:S.showWidgetsPanel,C=e.React.useRef(),[I,j]=e.React.useState(null),O=n(d,o),A=!Object.keys(null!=O?O:{}).length,k=Object.keys(O).filter((t=>O[t].state===e.WidgetState.Opened)),E=null==k?void 0:k[0],N=null==g?void 0:g[E];e.React.useEffect((()=>{(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(k))}),[p]);const L=e.React.useCallback(((t,o,a)=>{(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(d,"hideArrow",t)),(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(d,"disablePrevious",o)),(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(d,"disableNext",a))}),[d]);e.React.useEffect((()=>{(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(d,"onArrowClick",C.current))}),[d]);const P=()=>{(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(d,"showWidgetsPanel",!1))},M=R(d,o);return(0,e.jsx)("div",{className:"controller-builder w-100 h-100",ref:w,onClick:e=>{const t=e.target,o=w.current;t&&o&&o.contains(t)&&P()}},E&&(0,e.jsx)(m,{reference:I,version:p,widgetId:E,controllerId:d,size:N,onClose:()=>(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(k)),onSizeChange:(t,o)=>{if(!t)return;let a=(null==u?void 0:u.behavior.size)||(0,e.Immutable)({});a=a.set(t,o),(e=>{(0,l.getAppConfigAction)().editWidgetConfig(d,e).exec()})(u.setIn(["behavior","size"],a))},placement:h}),(0,e.jsx)(G,{scrollRef:C,showPlaceholder:A,onScrollStatusChange:L,vertical:null===(s=null==u?void 0:u.behavior)||void 0===s?void 0:s.vertical,widgetId:d,onItemClick:t=>{var o;if(f)return;const a=t.currentTarget,l=null===(o=a.dataset)||void 0===o?void 0:o.widgetid;j(a),(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(k)),(0,e.getAppStore)().dispatch(e.appActions.openWidget(l))},itemStyle:u.appearance.card,draggable:!0,markerEnabled:!f,space:null===(c=null==u?void 0:u.appearance)||void 0===c?void 0:c.space}),x&&(0,e.jsx)(y.WidgetListPopper,{css:U,placement:"right-start",referenceElement:w.current,isAccepted:b,onSelect:t=>{var o,a;const l=((t,o)=>{var a,l,r,n;const s=(0,e.getAppStore)().getState().appConfig,c=(0,e.getAppStore)().getState().browserSizeMode,d=null===(r=null===(l=null===(a=s.widgets)||void 0===a?void 0:a[t])||void 0===l?void 0:l.layouts)||void 0===r?void 0:r.controller,u=i.searchUtils.findLayoutId(d,c,s.mainSizeMode);return null===(n=s.layouts)||void 0===n?void 0:n[u]})(d),r=null!==(a=null===(o=l.order)||void 0===o?void 0:o.length)&&void 0!==a?a:0;M(l,t,{},{},r)},onClose:e=>{(e=>{var t,o;if(!e)return!1;if("controller-add-widget"===(null===(t=e.dataset)||void 0===t?void 0:t.extname))return!0;const a=e.parentElement;return"controller-add-widget"===(null===(o=null==a?void 0:a.dataset)||void 0===o?void 0:o.extname)})(null==e?void 0:e.target)||P()}}))}}})(),d})())}}}));