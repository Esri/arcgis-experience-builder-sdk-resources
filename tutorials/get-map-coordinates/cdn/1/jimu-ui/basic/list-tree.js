System.register(["jimu-core","jimu-theme","jimu-ui"],(function(e,t){var n={},i={},r={};return{setters:[function(e){n.Immutable=e.Immutable,n.React=e.React,n.classNames=e.classNames,n.css=e.css,n.esri=e.esri,n.getAppStore=e.getAppStore,n.injectIntl=e.injectIntl,n.jsx=e.jsx,n.lodash=e.lodash,n.moduleLoader=e.moduleLoader,n.polished=e.polished},function(e){i.withTheme=e.withTheme},function(e){r.Button=e.Button,r.Checkbox=e.Checkbox,r.Collapse=e.Collapse,r.Icon=e.Icon,r.ListGroupItem=e.ListGroupItem,r.Popper=e.Popper,r.TextInput=e.TextInput,r.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={42957:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 2.443 5.851 14 0 8.115l1.45-1.538 4.31 4.334L14.463 1z" clip-rule="evenodd"></path></svg>'},10119:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m14 4-6 8-6-8z"></path></svg>'},30900:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M12 14 4 8l8-6z"></path></svg>'},98940:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m4 2 8 6-8 6z"></path></svg>'},95369:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0" clip-rule="evenodd"></path></svg>'},55339:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},59455:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0m1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" clip-rule="evenodd"></path></svg>'},80272:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0m1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0M7.5 4.5a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3z" clip-rule="evenodd"></path></svg>'},13209:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 4 16"><path fill="#000" d="M3 1H1v2h2zM3 5H1v2h2zM1 9h2v2H1zM3 13H1v2h2z"></path></svg>'},48891:e=>{"use strict";e.exports=n},34796:e=>{"use strict";e.exports=i},30726:e=>{"use strict";e.exports=r}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";o.r(a),o.d(a,{List:()=>me,Tree:()=>le,TreeActionType:()=>l,TreeAlignmentType:()=>n,TreeCollapseStyle:()=>i,TreeItem:()=>re,TreeItemActionType:()=>d,TreeMainActionType:()=>s,TreeSelctionStyle:()=>r,TreeStyle:()=>t,_List:()=>de,_Tree:()=>ae,_TreeItem:()=>ie,treeUtils:()=>e});var e={};o.r(e),o.d(e,{getActionDataByCBXActionData:()=>v,getActionDataByChangeJson:()=>f,getActionDataByRadioActionData:()=>x,getCheckProgress:()=>p,getInvisibleActionMap:()=>b,getItemChildren:()=>u,getItemJsonsWithCheckState:()=>O,getPathOfItemJsons:()=>I,getSelectionStyle:()=>k,handleAction:()=>g,isTitleEditing:()=>_,shouldHandleKeyEvent:()=>h,showCheckbox:()=>S,showSquireMark:()=>T,updateStatesForParents:()=>C});var t,n,i,r,l,s,d,m=o(48891);!function(e){e.Basic="BASIC",e.Card="CARD"}(t||(t={})),function(e){e.Typical="TYPICAL",e.Intact="INTACT"}(n||(n={})),function(e){e.PlusMinus="PLUS_MINUS",e.Arrow="ARROW"}(i||(i={})),function(e){e.HighlightMark="HIGHLIGHT_MARK",e.CheckSelection="CHECK_SELECTION",e.BoxSelection="BOX_SELECTION",e.CheckboxSelection="CHECKBOX_SELECTION"}(r||(r={})),function(e){e.RenderOverride="renderOverride"}(l||(l={})),function(e){e.RenderOverrideMain="renderOverrideMain"}(s||(s={})),function(e){e.RenderOverrideItemChildrenToggle="renderOverrideItemChildrenToggle",e.RenderOverrideItemDragHandle="renderOverrideItemDragHandle",e.RenderOverrideItemDetailToggle="renderOverrideItemDetailToggle",e.RenderOverrideItemIcon="renderOverrideItemIcon",e.RenderOverrideItemTitle="renderOverrideItemTitle",e.RenderOverrideItemCommands="renderOverrideItemCommands",e.RenderOverrideItemDraggableContainer="renderOverrideItemDraggableContainer",e.RenderOverrideItemMainLine="renderOverrideItemMainLine",e.RenderOverrideItemDetailLine="renderOverrideItemDetailLine",e.RenderOverrideItemBody="renderOverrideItemBody",e.RenderOverrideItemContent="renderOverrideItemContent",e.RenderOverrideItemDroppableContainer="renderOverrideItemDroppableContainer",e.RenderOverrideItemSubitems="renderOverrideItemSubitems",e.RenderOverrideItem="renderOverrideItem",e.OverrideItemBlockInfo="overrideItemBlockInfo",e.HandleInitTreeItemDndDropZone="handleInitTreeItemDndDropZone",e.HandleInitTreeItemDndDrag="handleInitTreeItemDndDrag",e.HandleDidDrop="handleDidDrop",e.HandleDisabledItemRemoved="handleDisabledItemRemoved",e.HandleToggleDetail="handleToggleDetail",e.HandleExpandItem="handleExpandItem",e.HandleEditingTextChange="handleEditingTextChange",e.HandleExitEditing="handleExitEditing",e.HandleStartEditing="handleStartEditing",e.HandleCheckboxChanged="handleCheckboxChanged",e.HandleFindSearchText="handleFindSearchText",e.IsItemDisplayable="isItemDisplayable",e.IsItemFocused="isItemFocused",e.HandleClickItemBody="handleClickItemBody",e.HandleClickItemTitle="handleClickItemTitle",e.HandleDoubleClickItemTitle="handleDoubleClickItemTitle",e.HandleUpdateItem="handleUpdateItem",e.GetDragItemJsons="getDragItemJsons",e.SetDragItemJsons="setDragItemJsons",e.IsItemDroppable="isItemDroppable",e.IsFolder="isFolder",e.OnToggleDetail="onToggleDetail",e.OnExpandItem="onExpandItem",e.OnEditingTextChange="onEditingTextChange",e.OnExitEditing="onExitEditing",e.OnDidDrop="onDidDrop",e.OnClickItemBody="onClickItemBody",e.OnDoubleClickItemTitle="onDoubleClickItemTitle",e.OnClickItemCommand="onClickItemCommand",e.OnUpdateItem="onUpdateItem"}(d||(d={}));const c={},p=(e,t=c)=>{const{getItemChildren:n=(([e])=>e.itemChildren),getItemStateChecked:i=(([e])=>e.itemStateChecked)}=t,r=n([e]),o=i([e]);if(!r)return!!o;const a=r.reduce(((e,t)=>e+(!0===i([t]))),0);return!!a&&(a===r.length||a)},u=e=>{const[t]=e;return t.itemChildren},g=(e,t,n)=>{var i,r;if(!n)return;const[o]=n.props.itemJsons||[];return"function"==typeof(null==o?void 0:o[e])?o[e](t,n):null===(r=(i=n.props)[e])||void 0===r?void 0:r.call(i,t,n)};function h(e){return"INPUT"!==e.target.tagName&&("Enter"===e.key||" "===e.key)}const b=e=>{if(!e||0===e.length)return;const t={};return e.forEach((e=>{t[e]=()=>null})),t},I=e=>e.reduceRight(((t,n,i)=>i<1?t:[...t,Object.entries(u(e.slice(i))).find((([t,n])=>n===e[i-1]))[0]]),[]),f=(e,t)=>{const{itemJsons:n,currentItemJson:i,changeItemJson:r}=t;let o;if(e){const e=I(n).map((e=>["itemChildren",e])).flat();o=Object.entries(r).reduce(((t,[n,i])=>t.setIn([...e,n],i)),(0,m.Immutable)(n[n.length-1])),t=m.Immutable.setIn(t,["itemJsons"],[i,o])}else if(n.length>1){const e=n[1].indexOf(i);o=Object.entries(r).reduce(((t,[n,i])=>t.setIn([e,n],i)),(0,m.Immutable)(n[1])),t=m.Immutable.setIn(t,["itemJsons"],[i,o])}else o=[Object.assign(i,t.changeItemJson)],t=m.Immutable.setIn(t,["itemJsons"],[i]);return t.asMutable({deep:!0})},v=(e,t)=>{const{itemJsons:n,currentItemJson:i,changeItemJson:r}=t;let o;if(e){const e=Object.assign(r,{indeterminate:!1}),a=I(n).map((e=>["itemChildren",e])).flat();let l=(0,m.Immutable)(i).set("itemStateChecked",e.itemStateChecked).set("indeterminate",!1);l=j(l,e),o=(0,m.Immutable)(n[n.length-1]).setIn([...a],l),o=C(o,a.slice(0,a.length-2),r.itemStateChecked),t=(t=m.Immutable.setIn(t,["itemJsons"],[l,o])).asMutable({deep:!0})}else n.length>1&&(t=f(!1,t));return t},x=(e,t,n)=>{const{itemJsons:i,currentItemJson:r,changeItemJson:o}=n;let a;if(e){const e=Object.assign(o,{indeterminate:!1}),l=I(i).map((e=>["itemChildren",e])).flat();let s;t?(s=(0,m.Immutable)(r).set("itemStateChecked",e.itemStateChecked).set("indeterminate",!1),a=i[i.length-1]):(s=y(r),s=(0,m.Immutable)(s).set("itemStateChecked",e.itemStateChecked).set("indeterminate",!1),a=y(i[i.length-1])),a=(0,m.Immutable)(a).setIn([...l],s),n=(n=m.Immutable.setIn(n,["itemJsons"],[s,a])).asMutable({deep:!0})}else if(i.length>1){const e=i[1].indexOf(r);a=i[1].map(((t,n)=>{const i=e===n&&o.itemStateChecked;return Object.assign({},t,{itemStateChecked:i})})),n=m.Immutable.setIn(n,["itemJsons"],[r,a])}return n};function y(e){var t;return(null===(t=e.itemChildren)||void 0===t?void 0:t.length)>0&&(e.itemChildren=e.itemChildren.map((e=>(e.itemStateChecked=!1,delete e.indeterminate,y(e))))),e}function j(e,t){var n;return(null===(n=e.itemChildren)||void 0===n?void 0:n.length)>0&&(e=e.set("itemChildren",e.itemChildren.map((e=>{var n;return j(e=e.set("itemStateChecked",!e.isCheckboxDisabled&&!e.itemStateDisabled&&(null===(n=e.isItemSelectable)||void 0===n||n)&&t.itemStateChecked).set("indeterminate",!1),t)})))),e}function C(e,t,n,i=!1){const r=i?t.slice(0,t.length-2):t;if(0===r.length)return e;let o=e.getIn([...r],e);const a=o.itemChildren.some((e=>e.indeterminate||!e.isCheckboxDisabled&&!e.itemStateDisabled&&e.itemStateChecked!==n)),l=n&&!a;return o=o.set("itemStateChecked",l).set("indeterminate",a),C(e=e.setIn([...r],o),r,l,!0)}function O(e,t){var n;const{dragItemParentChildren:i,dragItemJsons:r,dragItemJson:o,itemJsons:a,targetDropItemJsons:l}=e;let s;if(t.props.isMultiSelection){const e=0===i.length&&(o.itemStateChecked||o.indeterminate);if((r[1].indeterminate||e)&&!i.some((e=>e.itemStateChecked===o.itemStateChecked&&e.indeterminate===o.indeterminate))){let e=i.filter((e=>e.indeterminate)).length>0,t=!1;if(i.length>0&&!e){let n=0,r=0;i.forEach((e=>{e.itemStateChecked?n++:r++})),e=n>0&&r>0,t=n>0&&0===r}if(!e){const e=r.slice(1,r.length),n=I(e).map((e=>["itemChildren",e])).flat();s=C((0,m.Immutable)(a[a.length-1]),n,t)}}if(!l[0].indeterminate&&l[0].itemStateChecked!==o.itemStateChecked){const e=I(l).map((e=>["itemChildren",e])).flat();s=s||a[a.length-1],s=0!==e.length||(null===(n=o.itemChildren)||void 0===n?void 0:n.length)>0?C((0,m.Immutable)(s),e,o.itemStateChecked):(0,m.Immutable)(s)}}return null==s?void 0:s.asMutable({deep:!0})}function S(e,t,n){return t&&(!e||n)}function k(e,n,i,o){let a=null;return e?(a=i===t.Card?r.BoxSelection:r.CheckSelection,n&&o&&(a=r.CheckboxSelection)):(a=i===t.Card?r.HighlightMark:r.CheckSelection,n&&(a=r.CheckboxSelection)),a}function T(e,t,n,i,o){return n===r.BoxSelection&&e&&i&&(t&&!o||!t)}function _(e){return Array.prototype.slice.call(e.target.querySelectorAll('input[type="text"]','input[type="number"]')).filter((e=>"true"!==e.getAttribute("data-draggable"))).length}var w=o(34796),D=o(30726);const E=m.React.forwardRef(((e,t)=>{const{onKeyDown:n,onClick:i}=e,r=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["onKeyDown","onClick"]);return m.React.createElement(D.Button,Object.assign({ref:t},r,{onClick:i,onKeyDown:e=>{!i||"Enter"!==e.key&&" "!==e.key||e.preventDefault()},onKeyUp:e=>{!i||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),i(e))}}))})),J=(0,w.withTheme)((0,m.injectIntl)((e=>{var t,n;const{className:i,theme:r,intl:a,itemCommands:l,data:s,moreCommand:d={key:Symbol(),label:a.formatMessage({id:"more",defaultMessage:D.defaultMessages.more}),iconProps:{icon:o(95369)},action:()=>{}},maxIconCount:c=3,onClickItemCommand:p=(()=>{})}=e,u=!!(null===(n=null===(t=null==s?void 0:s.itemJsons)||void 0===t?void 0:t[0])||void 0===n?void 0:n.itemStateDisabled),[g,h]=m.React.useState(!1),[b,I]=m.React.useState(null),f=e=>e.map(((e,t)=>{const n=("function"==typeof e.iconProps?e.iconProps():e.iconProps)||{icon:null};return e&&!e.collapsed&&(0,m.jsx)(E,{key:t,icon:!0,type:"tertiary",className:"jimu-tree-command-list__command-item",title:e.label,disabled:u,"aria-label":e.label,onClick:t=>{var n;t.stopPropagation(),h(!g);const i={event:t,data:s,command:e,itemCommands:l};null===(n=e.action)||void 0===n||n.call(e,i),p(i)}},(0,m.jsx)(D.Icon,Object.assign({size:"m",className:"jimu-tree-command-list__command-item-icon"},n)),(0,m.jsx)("div",{className:"jimu-tree-command-list__command-item-label"},e.label))})),v=l.filter((e=>!e.collapsed)),x=v.length>c,y=x?[...v.slice(0,c-1),d,...v.slice(c-1)]:v;return(0,m.jsx)("div",{ref:e=>{I(e)},className:`jimu-tree-command-list ${i||""}`,css:j},f(y.slice(0,c)),x&&(0,m.jsx)(D.Popper,{open:g,reference:b,toggle:()=>{h(!1)},css:j},(0,m.jsx)("div",{className:"jimu-tree-command-list-dropdown"},f(y.slice(c)))));function j(){return m.css`
      color: ${r.colors.palette.dark[600]};
      .jimu-tree-command-list-dropdown {
        display: flex;
        flex-flow: column;
        background-color: ${r.colors.palette.light[400]};
        padding: .25rem;
        .jimu-tree-command-list__command-item-label {
          display: flex;
        }
      }
      .jimu-tree-command-list__command-item {
        display: flex;
        cursor: pointer;
        margin: 0 0.25rem;
        &.icon-btn{
          padding: 0;
        }
        .icon-btn-sizer{
          min-width: 0;
          min-height: 0;
        }
      }
      .jimu-tree-command-list__command-item-icon {
      }
      .jimu-tree-command-list__command-item-label {
        display: none;
        color: ${r.colors.black};
      }
    `}}))),R=m.React.createContext({isTree:!1,uuid:"jimu-tree-0",selectionStyle:r.CheckSelection,multiLevel:!1});var A=o(59455),N=o.n(A);const B=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["className"]),r=(0,m.classNames)("jimu-icon jimu-icon-component",n);return t?m.React.createElement(t,Object.assign({className:r,src:N()},i)):m.React.createElement("svg",Object.assign({className:r},i))};var H=o(80272),M=o.n(H);const P=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["className"]),r=(0,m.classNames)("jimu-icon jimu-icon-component",n);return t?m.React.createElement(t,Object.assign({className:r,src:M()},i)):m.React.createElement("svg",Object.assign({className:r},i))};var L=o(10119),$=o.n(L);const z=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["className"]),r=(0,m.classNames)("jimu-icon jimu-icon-component",n);return t?m.React.createElement(t,Object.assign({className:r,src:$()},i)):m.React.createElement("svg",Object.assign({className:r},i))};var F=o(30900),U=o.n(F);const V=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["className"]),r=(0,m.classNames)("jimu-icon jimu-icon-component",n);return t?m.React.createElement(t,Object.assign({className:r,src:U()},i)):m.React.createElement("svg",Object.assign({className:r},i))};var G=o(98940),K=o.n(G);const Z=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["className"]),r=(0,m.classNames)("jimu-icon jimu-icon-component",n);return t?m.React.createElement(t,Object.assign({className:r,src:K()},i)):m.React.createElement("svg",Object.assign({className:r},i))};var q=o(55339),Y=o.n(q);const W=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["className"]),r=(0,m.classNames)("jimu-icon jimu-icon-component",n);return t?m.React.createElement(t,Object.assign({className:r,src:Y()},i)):m.React.createElement("svg",Object.assign({className:r},i))};var X=o(42957),Q=o.n(X);const ee=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(e,["className"]),r=(0,m.classNames)("jimu-icon jimu-icon-component",n);return t?m.React.createElement(t,Object.assign({className:r,src:Q()},i)):m.React.createElement("svg",Object.assign({className:r},i))};var te,ne;class ie extends m.React.Component{constructor(e){super(e),this.state={},this.dropZoneRef=m.React.createRef(),this.dragRef=m.React.createRef(),this.dropZoneInteractable=null,this.dragInteractable=null,this.dndInteract=null,this.intl=this.props.intl;const t=m.esri.Sanitizer;this.sanitizer=new t}componentDidMount(){this.props.dndEnabled&&this.dragRef.current&&m.moduleLoader.loadModule("jimu-core/dnd").then((e=>{this.dndInteract=e.interact,this.props.handleAction(d.HandleInitTreeItemDndDropZone,{type:"mount"},this),this.props.handleAction(d.HandleInitTreeItemDndDrag,{type:"mount"},this)}))}componentWillUnmount(){this.dndInteract&&(this.props.handleAction(d.HandleInitTreeItemDndDropZone,{type:"unmount"},this),this.props.handleAction(d.HandleInitTreeItemDndDrag,{type:"unmount"},this))}render(){const{handleAction:e}=this.props,t=this.props.itemBlockInfo||ie.itemBlockInfos[this.props.treeAlignmentType],n=e(d.OverrideItemBlockInfo,{itemBlockInfo:t},this);return this.renderChildBlocks({currentBlockInfo:{name:null,children:[n]}},this)}renderChildBlocks(e,t){const{handleAction:n}=t.props,{currentBlockInfo:i}=e;return(i.children||[]).filter((e=>!!e)).map(((i,r)=>(0,m.jsx)(m.React.Fragment,{key:r},n(i.name,Object.assign(Object.assign({},e),{currentBlockInfo:i}),t))))}}ie.contextType=R,ie.defaultHandleActionMap={overrideItemBlockInfo:(e,t)=>{const{itemBlockInfo:n}=e;return n},renderOverrideItemChildrenToggle:(e,t)=>{var o;const{itemJsons:a,collapseStyle:l,isMultiSelection:s,checkboxLinkage:c,treeAlignmentType:p,theme:g,itemJsons:[{itemStateExpanded:b,itemStateChecked:I,indeterminate:f,isCheckboxDisabled:v,isItemSelectable:x=!0,itemStateTitle:y,itemChildren:j}],handleAction:C}=t.props,O=(null===(o=u(a))||void 0===o?void 0:o.length)>0,k=C(d.IsFolder,{draggingItemJsons:null,targetItemJsons:a},t),T=v||!x||t.context.isTree&&k&&(!j||0===(null==j?void 0:j.length))&&2===a.length;let _=null;if(S(t.context.isTree,s,c)?p===n.Intact&&(_=(0,m.jsx)("div",{className:(0,m.classNames)("d-flex align-items-center",{"pr-1":!O})},(0,m.jsx)(D.Checkbox,{"aria-label":y,checked:I,indeterminate:f,disabled:T,onChange:e=>{e.stopPropagation(),T||C(d.HandleCheckboxChanged,{itemStateChecked:e.target.checked},t)}}))):t.context.selectionStyle===r.CheckSelection&&(_=(0,m.jsx)(D.Button,{icon:!0,type:"tertiary",size:"sm",className:"mr-1",tabIndex:-1,onClick:e=>{e.stopPropagation(),C(d.HandleCheckboxChanged,{itemStateChecked:!I,isMultiSelection:s},t)}},I&&!T?(0,m.jsx)(ee,{size:"12",color:g.colors.palette.primary[600]}):(0,m.jsx)("div",null))),!t.context.multiLevel)return _;const w=b?"collapse":"expand",E=t.intl.formatMessage({id:w,defaultMessage:D.defaultMessages[w]}),J=l===i.Arrow?(0,m.jsx)(z,{size:"s"}):(0,m.jsx)(B,null),R=l===i.Arrow?ie.isRTL?(0,m.jsx)(V,{size:"s"}):(0,m.jsx)(Z,{size:"s"}):(0,m.jsx)(P,null);return(0,m.jsx)(m.React.Fragment,null,O?(0,m.jsx)(D.Button,{icon:!0,type:"tertiary",className:"jimu-tree-item__children-toggle jimu-outline-inside",title:E,"aria-label":E,onClick:e=>{e.stopPropagation(),C(d.HandleExpandItem,{itemStateExpanded:!b},t)},onKeyDown:e=>{h(e)&&(e.preventDefault(),e.stopPropagation())},onKeyUp:e=>{h(e)&&(e.stopPropagation(),C(d.HandleExpandItem,{itemStateExpanded:!b},t))},css:function(){return m.css`
          &.jimu-tree-item__children-toggle {
            cursor: pointer;

            .icon-btn-sizer {
              min-width: 0.75rem;
              min-height: 0.75rem;
            }
          }
        `}},b?J:R):(0,m.jsx)("div",{className:"toggle-placeholder",css:m.css`width: ${l===i.Arrow?18:22}px;`}),_)},renderOverrideItemDragHandle:(e,t)=>{if(!t.props.dndEnabled)return null;const n=o(13209),i=t.intl.formatMessage({id:"dragHandler",defaultMessage:D.defaultMessages.dragHandler});return(0,m.jsx)(E,{icon:!0,type:"tertiary","aria-label":i,className:"jimu-tree-item__drag-handle",css:function(){return m.css`
          &.jimu-tree-item__drag-handle {
            display: flex;
            align-items: center;
            touch-action: none;
            border: 0;

            .icon-btn-sizer {
              min-width: 0.25rem;
              min-height: 1rem;
            }
          }
        `}},(0,m.jsx)(D.Icon,{icon:n,width:4,height:16}))},renderOverrideItemDetailToggle:(e,t)=>{const{itemJsons:[{itemStateDetailVisible:n,itemStateDetailContent:i,itemStateDisabled:r}],handleAction:o}=t.props,a=n?z:Z,l=n?"collapse":"expand",s=t.intl.formatMessage({id:l,defaultMessage:D.defaultMessages[l]});return i?(0,m.jsx)(E,{icon:!0,type:"tertiary",title:s,"aria-label":s,disabled:!!r,className:"jimu-tree-item__detail-toggle",onClick:e=>{e.stopPropagation(),o(d.HandleToggleDetail,{itemStateDetailVisible:!n},t)},css:function(){return m.css`
          &.jimu-tree-item__detail-toggle {
            display: flex;
            align-items: center;
            cursor: pointer;

            .icon-btn-sizer {
              margin: 0;
              min-width: 0.5rem;
              min-height: 0.5rem;
            }
          }
        `}},(0,m.jsx)(a,{size:"s",autoFlip:!n})):null},renderOverrideItemIcon:(e,t)=>{const{currentBlockInfo:{autoCollapsed:n=!1}}=e,{itemJsons:[{itemStateIcon:i}]}=t.props,r="function"==typeof i?i():i;return r?(0,m.jsx)("div",{className:"jimu-tree-item__icon",css:function(){return m.css`
          &.jimu-tree-item__icon {
            display: flex;
            align-items: center;
            opacity: ${+!!r.icon};
          }
        `},style:n&&!r.icon?{display:"none"}:{}},(0,m.jsx)(D.Icon,Object.assign({},r,{className:"mr-1"}))):null},renderOverrideItemTitle:(e,t)=>{const{currentBlockInfo:{onClick:n=(e=>c(d.HandleClickItemTitle,{},t)),onDoubleClick:i=(e=>{u||c(d.HandleDoubleClickItemTitle,{},t)})}}=e,{itemJsons:r,singleLineText:o,searchedText:a,itemJsons:[{itemStateTitle:l,itemStateEditingText:s}],handleAction:c,theme:p,disableDoubleClickTitle:u}=t.props,g=c(d.IsFolder,{draggingItemJsons:null,targetItemJsons:r},t);let h=null;"string"==typeof s&&m.lodash.debounce((()=>{null==h||h.focus()}),50)();const b=a?l.replace(new RegExp(`(${a})`,"gi"),"<strong>$1</strong>"):l,I=t.sanitizer.sanitize(b);return(0,m.jsx)("div",{className:"jimu-tree-item__title",onClick:n,onDoubleClick:i,css:function(){const e=`${g&&!s?1:0}px solid ${p.colors.palette.light[800]}`;return m.css`
          &.jimu-tree-item__title {
            display: flex;
            flex: 1;
            align-items: center;
            &:hover {
              outline: ${e};
              outline-offset: 2px;
            }
            > .jimu-tree-item__title-text {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              word-break: break-word;
              -webkit-line-clamp: ${o?1:2};
            }
          }
        `}},"string"==typeof s?(0,m.jsx)(D.TextInput,{size:"sm",ref:e=>{h=e},className:"jimu-tree-item__editing-input",value:s,onChange:e=>{const n=e.target.value;c(d.HandleEditingTextChange,{itemStateEditingText:n},t)},onBlur:e=>{const n=e.target.value;c(d.HandleExitEditing,{itemStateEditingText:n},t)}}):(0,m.jsx)("div",{className:"jimu-tree-item__title-text",title:l,dangerouslySetInnerHTML:{__html:I}}))},renderOverrideItemCommands:(e,t)=>{const{currentBlockInfo:{commandListProps:n={}}}=e,{itemJsons:i,itemJsons:[{itemStateCommands:r=[]}],handleAction:o}=t.props;return(0,m.jsx)(J,Object.assign({className:"jimu-tree-item__commands",itemCommands:r,data:{refComponent:t,itemJsons:i},onClickItemCommand:e=>{o(d.OnClickItemCommand,e,t)},css:function(){return m.css`
          &.jimu-tree-item__commands {
            display: flex;
            flex: none;
            align-items: center;
          }
        `}},n))},renderOverrideItemDraggableContainer:(e,t)=>(0,m.jsx)("div",{ref:t.dragRef,className:"jimu-tree-item__draggable","data-dndzone-draggable":"true"},t.renderChildBlocks(e,t)),renderOverrideItemMainLine:(e,t)=>(0,m.jsx)("div",{className:(0,m.classNames)("jimu-tree-item__main-line",{"pl-2":!t.props.dndEnabled}),css:function(){return m.css`
          &.jimu-tree-item__main-line {
            display: flex;
            flex: 1;
            align-items: center;
          }
        `}},t.renderChildBlocks(e,t)),renderOverrideItemDetailLine:(e,t)=>{const{itemJsons:[{itemStateDetailVisible:n,itemStateDetailContent:i}]}=t.props;return n&&(0,m.jsx)("div",{className:"jimu-tree-item__detail-line",css:function(){return m.css`
          &.jimu-tree-item__detail-line {
            display: flex;
            flex: 0 0 100%;
          }
        `},"aria-expanded":!0},i)},renderOverrideItemBody:(e,t)=>{const{handleAction:n,isMultiSelection:i,checkboxLinkage:r,itemJsons:[{itemStateTitle:o,itemStateChecked:a,isItemSelectable:l=!0,isCheckboxDisabled:s,itemChildren:c}]}=t.props,p=T(t.context.isTree,i,t.context.selectionStyle,a,r);let u=l;t.context.isTree&&i&&r&&(u=!((null==c?void 0:c.length)>0));const g=["jimu-tree-item__body",`jimu-tree-item_selectable_${u}`,`jimu-tree-item_squire_${p}`].join(" ");return(0,m.jsx)("div",{className:g,role:"treeitem",tabIndex:0,"aria-label":o,onClick:e=>{n(d.HandleClickItemBody,{isMultiSelection:i,checkboxLinkage:r,isItemSelectable:u,itemStateChecked:!a,isCheckboxDisabled:s},t)},onKeyDown:e=>{h(e)&&e.preventDefault()},onKeyUp:e=>{h(e)&&(e.preventDefault(),n(d.HandleClickItemBody,{isMultiSelection:i,checkboxLinkage:r,isItemSelectable:u,itemStateChecked:!a,isCheckboxDisabled:s},t))},css:function(){return m.css`
          &.jimu-tree-item__body {
            position: relative;
            display: flex;
            flex-flow: row wrap;
            flex: 1;
            align-items: center;
          }
        `}},p&&(0,m.jsx)("div",{className:"item-active-icon-container item-active-icon-container456"},(0,m.jsx)("div",{className:"item-active-icon"})),t.renderChildBlocks(e,t))},renderOverrideItemContent:(e,t)=>{var i;const{itemJsons:r,handleAction:o,isMultiSelection:a,checkboxLinkage:l,treeAlignmentType:s,itemJsons:[{itemStateChecked:c,indeterminate:p,isCheckboxDisabled:g,itemStateTitle:h,itemChildren:b}]}=t.props,[,...I]=r,f=(null===(i=u(r))||void 0===i?void 0:i.length)>0,v=1.25*(s===n.Typical?I.length-(f?1:0):I.length-1)+"rem",x=o(d.IsFolder,{draggingItemJsons:null,targetItemJsons:r},t),y=g||t.context.isTree&&x&&(!b||0===(null==b?void 0:b.length))&&2===r.length,j=S(t.context.isTree,a,l);return(0,m.jsx)("div",{className:"jimu-tree-item__content",css:function(){return m.css`
          &.jimu-tree-item__content {
            display: flex;
            flex: 1;
          }
        `}},j&&s===n.Typical&&(0,m.jsx)("div",{className:(0,m.classNames)("d-flex def align-items-center",{"pr-1":!t.context.multiLevel})},(0,m.jsx)(D.Checkbox,{"aria-label":h,checked:c,indeterminate:p,disabled:y,onChange:e=>{e.stopPropagation(),y||o(d.HandleCheckboxChanged,{itemStateChecked:e.target.checked},t)}})),t.context.multiLevel&&(0,m.jsx)("div",{className:"jimu-tree-item__level-padding",style:{width:`${v}`}}),t.renderChildBlocks(e,t))},renderOverrideItemDroppableContainer:(e,t)=>{return(0,m.jsx)("div",{ref:t.dropZoneRef,className:"jimu-tree-item__droppable","data-dndzone-droppable":"true",css:function(){return m.css`
          &.jimu-tree-item__droppable {
            .jimu-tree-item__list-group-item {
              padding: 0;
              background: unset;
              border: none;
              display: flex;
              flex: 1;
            }
          }
        `}},(n=t.renderChildBlocks(e,t),t.context.isTree?(0,m.jsx)(D.ListGroupItem,{className:"jimu-tree-item__list-group-item"},n):n));var n},renderOverrideItemSubitems:(e,t)=>{const{itemJsons:[{itemStateExpanded:n,itemStateDisabled:i}],children:r}=t.props;return i?null:Array.isArray(r)&&r.length>0&&(0,m.jsx)(D.Collapse,{className:"jimu-tree-item__subitems",isOpen:!!n,role:"group",css:function(){return m.css`
          &.jimu-tree-item__subitems {
            display: flex;
            flex: 0 0 100%;
            flex-flow: wrap;
          }
        `}},n&&r)},renderOverrideItem:(e,t)=>{const{currentBlockInfo:{additionalClassName:n=""}}=e,{className:i,theme:r,dndEnabled:o,isMultiSelection:a,checkboxLinkage:l,showRemoveIconForDisabledItem:s,itemJsons:[{itemStateDisabled:c,itemStateChecked:p}],handleAction:u,treeStyle:g}=t.props,h=u(d.HandleFindSearchText,{},t),b=u(d.IsItemDisplayable,{},t),I=!!p,f=!!c,v=[n,i,"jimu-tree-item","jimu-tree-item_template",`jimu-tree-item_template-${g.toLowerCase()}`,`jimu-tree-item_dnd-${o}`,`jimu-tree-item_focused-${I}`,`jimu-tree-item_disabled-${!!f}`].join(" ");return(0,m.jsx)("div",{className:`jimu-tree-item ${v}`,css:function(){const{size:e="default"}=t.props,n="default"===e?6:"sm"===e?3:10;let i;return i=a&&l?"default"===e?6:"sm"===e?4:11:"default"===e?2:"sm"===e?0:6,m.css`
          &.jimu-tree-item {
            position: relative;
            display: flex;
            flex: 0 0 100%;
            flex-flow: wrap;
            user-select: none;
            &.jimu-tree-item_focused-true {
              .jimu-tree-item__body {
                &:after {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  bottom: 0;
                }
              }
            }
            &.jimu-tree-item_disabled-true {
              .jimu-tree-item__droppable{
                opacity: .7;
                background-color: ${window.jimuConfig.isBuilder?r.colors.palette.light[300]:"unset"};
              }
              .jimu-tree-item__mask {
                position: absolute;
                width: 100%;
                height: calc(100% - 0.25rem);
                display: flex;
                align-items: center;
                justify-content: flex-end;
              }
            }
            &.jimu-tree-item_dnd-true {
              [data-dndzone-draggable=true]:hover {
                cursor: pointer !important;
                .jimu-tree-item__drag-handle {
                  opacity: 1;
                }
              }
            }
            [data-dndzone-draggable=true] {
              display: flex;
              flex: 0 0 100%;
              font-weight: 400;
              touch-action: none;
              &[data-dndon-dragging=true] {
                opacity: 0;
              }
            }
            [data-dndzone-droppable=true] {
              display: flex;
              flex: 0 0 100%;
              border: 2px solid transparent;
              &[data-dndon-droppable=true] {
                border-color: transparent;
                &[data-dndon-droptype=to-top] {
                  border-top-color: ${r.colors.palette.primary[600]};
                }
                &[data-dndon-droptype=to-bottom] {
                  border-bottom-color: ${r.colors.palette.primary[600]};
                }
                &[data-dndon-droptype=to-inside] {
                  border-color: ${r.colors.palette.primary[600]};
                }
                &[data-dndon-droptype=to-nowhere] {
                  opacity: .2;
                }
              }
            }
          }
          &.jimu-tree-item_template {
            padding-top: 0.25rem;
            &:first-of-type {
              padding-top: 0;
            }
            .jimu-tree-item__detail-line {
            }
            .jimu-tree-item__body {
              line-height: ${r.typography.lineHeights.sm};
              &:hover {
              }
              &:focus {
                outline-offset: 0;
              }
            }
            .jimu-tree-item__drag-handle {
              opacity: 0;
              &:focus {
                outline-offset: 1px;
                opacity: 1;
              }
            }
            .jimu-tree-item__children-toggle,
            .jimu-tree-item__drag-handle,
            .jimu-tree-item__detail-toggle,
            .jimu-tree-item__icon {
              padding: 0 .125rem;
            }
          }

          &.jimu-tree-item_template-basic {
            .jimu-tree-item__subitems .jimu-tree-item_template-basic:first-of-type {
              padding-top: 0.25rem;
            }
            .jimu-tree-item__content {
              color: ${r.colors.black};
            }

            /*
            Can't add bgColor for the whole item since it could contain sub-items.
              &:hover {
                background-color: ${r.colors.palette.light[window.jimuConfig.isBuilder?600:100]};
              }
            */

            .jimu-tree-item__body {
              &:hover {
                background-color: ${r.colors.palette.light[window.jimuConfig.isBuilder?500:100]};
              }

              &.jimu-tree-item_selectable_true {
                border: ${o?"1px solid transparent":"none"};
              }
              &.jimu-tree-item_selectable_false {
                background: ${r.colors.palette.light[window.jimuConfig.isBuilder?500:100]};
                opacity: .5;
              }
              .jimu-tree-item__main-line {
                padding: ${m.polished.rem(i)} 0.5rem ${m.polished.rem(i)} 0.125rem;
              }
            }
          }

          &.jimu-tree-item_template-card {
            &.jimu-tree-item_focused-true {
              .jimu-tree-item__body {
                &:after {
                  // Only for List & Single
                  border-left: ${t.context.isTree||a?"none":`.125rem solid ${r.colors.palette.primary[600]}`} ;
                }
                .item-active-icon-container {
                  position: absolute;
                  top: -1px;
                  right: -1px;
                  .item-active-icon {
                    width: 0;
                    height: 0;
                    border-top: 0.75rem ${r.colors.palette.primary[600]} solid;
                    border-left: 0.75rem transparent solid;
                    background-color: transparent;
                  }
                }
              }
            }

            .jimu-tree-item__subitems .jimu-tree-item_template-card:first-of-type {
              padding-top: 0.25rem;
            }
            .jimu-tree-item__content {
              color: ${r.colors.black};
            }
            .jimu-tree-item__body {
              background-color: ${window.jimuConfig.isBuilder?r.colors.palette.light[500]:"unset"};
              &.jimu-tree-item_selectable_true {
                border: ${window.jimuConfig.isBuilder?"none":`1px solid ${r.colors.palette.light[200]}`};
                &.jimu-tree-item_squire_true {
                  border: 1px solid ${r.colors.palette.primary[600]};
                }
                &:hover {
                  background-color: ${r.colors.palette.light[window.jimuConfig.isBuilder?400:100]};
                }
              }
              .jimu-tree-item__main-line {
                padding: ${m.polished.rem(n)} 0.5rem ${m.polished.rem(n)} 0.125rem;
              }
            }
            &.jimu-tree-item_disabled-false {
              .jimu-tree-item__content .jimu-tree-item__body:hover {
                cursor: default!important;
                background-color: ${r.colors.palette.light[window.jimuConfig.isBuilder?600:100]};
              }
            }
          }
        `},style:{display:h&&b?void 0:"none"}},t.renderChildBlocks(e,t),f&&(0,m.jsx)("div",{className:"jimu-tree-item__mask"},s&&(0,m.jsx)(D.Button,{icon:!0,type:"default",size:"sm",className:"mr-1",onClick:e=>{e.stopPropagation(),u(d.HandleDisabledItemRemoved,{},t)}},(0,m.jsx)(W,null))))},handleInitTreeItemDndDropZone:(e,t)=>{const{type:n}=e;if("mount"===n){const e=t.dndInteract;e.dynamicDrop(!0),t.dropZoneInteractable=e(t.dropZoneRef.current).dropzone({accept:"[data-dndzone-draggable=true]",overlap:"pointer",ondropmove:e=>{const{target:n,relatedTarget:i}=e,{itemJsons:r,itemJsons:[{itemStateDisabled:o}],withStates:a,handleAction:l}=t.props,{searchForText:s}=a,m=i.getBoundingClientRect(),c=n.getBoundingClientRect(),p=+i.getAttribute("data-dndon-starty"),u=m.top+p,g=l(d.GetDragItemJsons,{dragEvent:e.dragEvent},t);if(!g)return;const[h]=g.itemJsons,b=l(d.IsItemDroppable,{draggingItemJsons:g.itemJsons,targetItemJsons:r},t),I=["to-nowhere","to-top",...t.context.isTree&&!o&&b?["to-inside"]:[],"to-bottom"].find(((e,t,n)=>"to-nowhere"===e?r.includes(h)||!!s:u<c.top+c.height*t/(n.length-1)?e:void 0));let f=I;t.context.isTree&&!o&&"to-nowhere"!==I&&("to-inside"!==I||b?r.some(((e,n)=>0!==n&&n!==r.length-1&&!l(d.IsItemDroppable,{draggingItemJsons:g.itemJsons,targetItemJsons:[e]},t)))&&(f="to-nowhere"):f="to-nowhere"),n.setAttribute("data-dndon-droptype",f)},ondragenter:e=>{const{target:t}=e;t.setAttribute("data-dndon-droppable","true")},ondragleave:e=>{const{target:t}=e;t.removeAttribute("data-dndon-droppable"),t.removeAttribute("data-dndon-droptype")},ondrop:e=>{m.lodash.defer((()=>{const{target:n}=e,{itemJsons:i,handleAction:r}=t.props,o=e.target.getAttribute("data-dndon-droptype"),a=r(d.GetDragItemJsons,{dragEvent:e.dragEvent},t);r(d.SetDragItemJsons,{itemJsons:i,dragEvent:e.dragEvent,type:"dragend"},t),r(d.HandleDidDrop,{dropType:o,dragItem:a},t),n.removeAttribute("data-dndon-droppable"),n.removeAttribute("data-dndon-droptype")}))}})}"unmount"===n&&t.dropZoneInteractable&&(t.dropZoneInteractable.unset(),t.dropZoneInteractable=null)},handleInitTreeItemDndDrag:(e,t)=>{const{type:n}=e;if("mount"===n){const e=t.dndInteract;t.dragInteractable=e(t.dragRef.current).draggable({inertia:!1,modifiers:[],autoScroll:{container:document.getElementById(t.context.uuid)},onstart:e=>{if(_(e))return;t.dragTriggered=!0;const{target:n,clientY:i}=e;n.style.position="fixed";const{itemJsons:r,handleAction:o}=t.props;o(d.SetDragItemJsons,{itemJsons:r,dragEvent:e,type:"dragstart"},t);const a=n.getBoundingClientRect();n.setAttribute("data-dndon-starty",i-a.top),n.setAttribute("data-dndon-dragging","true")},onmove:e=>{if(_(e))return;const{target:t,clientY:n,clientY0:i}=e,r=n-i;t.style.webkitTransform=t.style.transform=`translate(0, ${r}px)`},onend:e=>{if(_(e))return;const{target:t}=e;t.style.position=null,t.style.webkitTransform=t.style.transform="",t.removeAttribute("data-dndon-starty"),t.removeAttribute("data-dndon-dragging")}}).on("click",(e=>{t.dragTriggered&&e.stopImmediatePropagation(),t.dragTriggered=!1}))}"unmount"===n&&t.dragInteractable&&(t.dragInteractable.unset(),t.dragInteractable=null)},handleDidDrop:(e,t)=>{const{itemJsons:n}=t.props,{dropType:i,dragItem:r}=e;if(["to-top","to-inside","to-bottom"].includes(i)){const e=r.itemJsons,o=n,[a]=e,[l]=o,s=u(e.slice(1)),m=u(o.slice(1)),c=u(o),p=s.indexOf(a),g="to-inside"===i?o:o.slice(1);let h="to-top"===i?m.indexOf(l):"to-bottom"===i?m.indexOf(l)+1:(c||[]).length;const b=u(g);h+=s===b&&p<h?-1:0;const I=(e,t)=>{const{dragItemParentChildren:n,dragItemJson:i,dragItemIndex:r,targetDropItemChildren:o,targetDropItemJsons:a,targetDropItemIndex:l}=e;if(n.splice(r,1),o)o.splice(l,0,i);else{const[e]=a;e.itemChildren=[i]}};let f={updateType:d.HandleDidDrop,parentDragItemJsons:e.slice(1),dragItemParentChildren:s,dragItemIndex:p,dragItemJsons:e,dragItemJson:a,targetDropItemJsons:g,targetDropItemChildren:b,targetDropItemIndex:h,dropType:i,itemJsons:n,muteUpdate:I};I(f,t);const v=O(f,t);v&&(f=Object.assign(f,{itemJsons:[...n.slice(0,n.length-1),v]})),t.props.handleAction(d.HandleUpdateItem,f,t)}t.props.handleAction(d.OnDidDrop,e,t)},handleDisabledItemRemoved:(e,t)=>{const{itemJsons:n}=t.props,i=n,[r]=i,o=u(i.slice(1)),a=o.indexOf(r),l={updateType:d.HandleDisabledItemRemoved,itemJsons:n};o.splice(a,1),t.props.handleAction(d.HandleUpdateItem,l,t)},handleToggleDetail:(e,t)=>{const{itemStateDetailVisible:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(d.HandleUpdateItem,{updateType:d.HandleToggleDetail,changeItemJson:{itemStateDetailVisible:n},currentItemJson:r,itemJsons:i},t),t.props.handleAction(d.OnToggleDetail,e,t)},handleExpandItem:(e,t)=>{const{itemStateExpanded:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(d.HandleUpdateItem,{updateType:d.HandleExpandItem,changeItemJson:{itemStateExpanded:n},currentItemJson:r,itemJsons:i},t),t.props.handleAction(d.OnExpandItem,e,t)},handleEditingTextChange:(e,t)=>{const{itemStateEditingText:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(d.HandleUpdateItem,{updateType:d.HandleEditingTextChange,changeItemJson:{itemStateEditingText:n||""},currentItemJson:r,itemJsons:i},t),t.props.handleAction(d.OnEditingTextChange,e,t)},handleExitEditing:(e,t)=>{const{itemStateEditingText:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(d.HandleUpdateItem,{updateType:d.HandleExitEditing,changeItemJson:{itemStateEditingText:null,itemStateTitle:n||""},currentItemJson:r,itemJsons:i},t),t.props.handleAction(d.OnExitEditing,e,t)},handleFindSearchText:(e,t)=>{const{itemJsons:[{itemKey:n}],withStates:{searchForText:i}}=t.props;return(n||"").match(i||"")},isItemDisplayable:(e,t)=>!0,handleClickItemBody:(e,t)=>{const{itemStateChecked:n,isItemSelectable:i,isCheckboxDisabled:r,isMultiSelection:o,checkboxLinkage:a}=e;if(i&&!r){if(S(t.context.isTree,o,a))return e.isTriggeredByBodyClick=!0,void t.props.handleAction(d.HandleCheckboxChanged,e,t);{const{itemJsons:e}=t.props,[i]=e;let r={updateType:d.HandleCheckboxChanged,changeItemJson:{itemStateChecked:n||!1},currentItemJson:i,itemJsons:e};r=x(t.context.isTree,o,r),t.props.handleAction(d.OnUpdateItem,r,t)}t.props.handleAction(d.OnClickItemBody,{},t)}else t.props.handleAction(d.OnClickItemBody,{},t)},handleDoubleClickItemTitle:(e,t)=>{const{itemJsons:[{itemStateTitle:n}]}=t.props;t.props.handleAction(d.HandleStartEditing,{itemStateEditingText:n},t),t.props.handleAction(d.OnDoubleClickItemTitle,e,t)},handleCheckboxChanged:(e,t)=>{const{itemStateChecked:n,isTriggeredByBodyClick:i,isMultiSelection:o}=e,{itemJsons:a}=t.props,[l]=a;let s={updateType:d.HandleCheckboxChanged,changeItemJson:{itemStateChecked:n||!1},currentItemJson:l,itemJsons:a};s=t.context.selectionStyle===r.CheckSelection?x(t.context.isTree,o,s):v(t.context.isTree,s),t.props.handleAction(d.OnUpdateItem,s,t),i&&t.props.handleAction(d.OnClickItemBody,s,t)},handleStartEditing:(e,t)=>{const{itemStateEditingText:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(d.HandleUpdateItem,{updateType:d.HandleStartEditing,changeItemJson:{itemStateEditingText:n||""},currentItemJson:r,itemJsons:i},t)},handleUpdateItem:(e,t)=>{e.changeItemJson&&(e=f(t.context.isTree,e)),t.props.handleAction(d.OnUpdateItem,e,t)},isItemDroppable:(e,t)=>!0,isFolder:(e,t)=>!1,getDragItemJsons:null,setDragItemJsons:null,handleClickItemTitle:null,handleFocusItem:null,onToggleDetail:null,onExpandItem:null,onEditingTextChange:null,onExitEditing:null,onDidDrop:null,onClickItemBody:null,onDoubleClickItemTitle:null,onClickItemCommand:null,onUpdateItem:null},ie.isRTL=null===(ne=null===(te=(0,m.getAppStore)().getState())||void 0===te?void 0:te.appContext)||void 0===ne?void 0:ne.isRTL,ie.itemBlockInfos={[n.Typical]:{name:d.RenderOverrideItem,children:[{name:d.RenderOverrideItemDroppableContainer,children:[{name:d.RenderOverrideItemContent,children:[{name:d.RenderOverrideItemChildrenToggle},{name:d.RenderOverrideItemBody,children:[{name:d.RenderOverrideItemMainLine,children:[{name:d.RenderOverrideItemDraggableContainer,children:[{name:d.RenderOverrideItemDragHandle},{name:d.RenderOverrideItemDetailToggle},{name:d.RenderOverrideItemIcon},{name:d.RenderOverrideItemTitle},{name:d.RenderOverrideItemCommands}]}]},{name:d.RenderOverrideItemDetailLine}]}]}]},{name:d.RenderOverrideItemSubitems}]},[n.Intact]:{name:d.RenderOverrideItem,children:[{name:d.RenderOverrideItemDroppableContainer,children:[{name:d.RenderOverrideItemContent,children:[{name:d.RenderOverrideItemBody,children:[{name:d.RenderOverrideItemMainLine,children:[{name:d.RenderOverrideItemDraggableContainer,children:[{name:d.RenderOverrideItemDragHandle},{name:d.RenderOverrideItemChildrenToggle},{name:d.RenderOverrideItemDetailToggle},{name:d.RenderOverrideItemIcon},{name:d.RenderOverrideItemTitle},{name:d.RenderOverrideItemCommands}]}]},{name:d.RenderOverrideItemDetailLine}]}]}]},{name:d.RenderOverrideItemSubitems}]}},ie.defaultProps=Object.assign({theme:{},className:"",treeAlignmentType:n.Typical,treeStyle:t.Card,dndEnabled:!1,withStates:{},handleAction:g},ie.defaultHandleActionMap);const re=(0,w.withTheme)((0,m.injectIntl)(ie));class oe extends m.React.Component{constructor(e){super(e),this.state={dragItems:[]}}render(){return this.props.handleAction(s.RenderOverrideMain,{},this)}renderItemJson(e){const{treeAlignmentType:t,treeStyle:n,collapseStyle:i,isMultiSelection:r,singleLineText:o,searchedText:a,checkboxLinkage:l,dndEnabled:s,disableDoubleClickTitle:c,withStates:p,size:g="default",showRemoveIconForDisabledItem:h}=this.props,[b,...I]=e,{itemKey:f,itemStateExpanded:v,itemStateEditingText:x}=b,y=u(e),j=["jimu-tree-main__item",`jimu-tree-main__item_level-${I.length}`,`jimu-tree-main__item_editing-${"string"==typeof x}`,...y?[`jimu-tree-main__item_expandable-${!!y}`,`jimu-tree-main__item_expanded-${!!v}`]:[]].join(" ");return(0,m.jsx)(re,Object.assign({key:f,className:j,treeAlignmentType:t,treeStyle:n,singleLineText:o,searchedText:a,collapseStyle:i,isMultiSelection:r,checkboxLinkage:l,itemJsons:e,size:g,dndEnabled:s,disableDoubleClickTitle:c,showRemoveIconForDisabledItem:h,withStates:p},Object.assign({},...Object.values(d).map((e=>{var t;return{[e]:null===(t=this.props[e])||void 0===t?void 0:t.bind(this)}})))),(y||[]).map((t=>this.renderItemJson([t,...e]))))}}oe.defaultHandleActionMap={renderOverrideMain:(e,t)=>{var n,i;const{className:r,topTag:o,isTree:a,uuid:l,rootItemVisible:s,rootItemJson:d,isMultiSelection:c,checkboxLinkage:p,treeStyle:g}=t.props,h=d?u([d]):null,b=(null===(i=null===(n=null==d?void 0:d.itemChildren)||void 0===n?void 0:n.filter((e=>{var t;return(null===(t=null==e?void 0:e.itemChildren)||void 0===t?void 0:t.length)>0})))||void 0===i?void 0:i.length)>0,I=o,f=k(a,c,g,p);return(0,m.jsx)(R.Provider,{value:{isTree:a,selectionStyle:f,multiLevel:b,uuid:l}},(0,m.jsx)(I,{className:`jimu-tree-main ${r||""}`,css:function(){return m.css`
          &.jimu-tree-main {
            width: 100%;
          }
        `},role:"tree"},s?t.renderItemJson([d]):(h||[]).map(((e,n)=>(0,m.jsx)(m.React.Fragment,{key:n},t.renderItemJson([e,d]))))))},setDragItemJsons(e,t){this.setState((({dragItems:t})=>({dragItems:[...t.filter((t=>t.dragEvent.target!==e.dragEvent.target)),..."dragstart"===e.type?[e]:[]]})))},getDragItemJsons(e,t){return this.state.dragItems.find((t=>t.dragEvent.target===e.dragEvent.target))}},oe.defaultProps=Object.assign({className:"",topTag:"div",treeAlignmentType:n.Typical,singleLineText:!1,treeStyle:t.Card,rootItemVisible:!1,dndEnabled:!1,withStates:{},handleAction:g},oe.defaultHandleActionMap);class ae extends m.React.Component{constructor(e){super(e),ae.count++,this.localRandomId="jimu-tree-"+ae.count,this.state={searchForText:"",filterEnabled:!1}}render(){return this.props.handleAction(l.RenderOverride,{},this)}}ae.count=-1,ae.defaultHandleActionMap={renderOverride:(e,t)=>{const{className:n,size:i,topTag:r,isTree:o=!0,treeAlignmentType:a,collapseStyle:l,showCheckbox:c=!0,isMultiSelection:p=!0,checkboxLinkage:u=!0,treeStyle:g,singleLineText:h,searchedText:b,disableDoubleClickTitle:I=!1,rootItemJson:f,rootItemVisible:v,dndEnabled:x,showRemoveIconForDisabledItem:y,forwardRef:j}=t.props,{searchForText:C,filterEnabled:O}=t.state,S=["jimu-tree",n,`jimu-tree_template-${g.toLowerCase()}`,`jimu-tree_searched-text-${!!C}`,`jimu-tree_filter-enabled-${!!O}`].join(" "),k=r;return(0,m.jsx)(k,{ref:j,className:S,id:t.localRandomId,css:function(){return m.css`
          &.jimu-tree {
            display: flex;
            flex-flow: wrap;
            height: 100%;
            overflow-y: auto;
            &.jimu-tree_is-list-false {
              .jimu-tree-search,
              .jimu-tree-mod__widget_filter {
                visibility: hidden;
              }
            }
            &.jimu-tree_searched-text-true,
            &.jimu-tree_filter-enabled-true {
              .jimu-tree-mod__widget_add {
                visibility: hidden;
              }
            }
          }
        `}},(0,m.jsx)(oe,Object.assign({className:"",uuid:t.localRandomId,treeAlignmentType:a,collapseStyle:l,isMultiSelection:null!=p?p:c,checkboxLinkage:u,treeStyle:g,singleLineText:h,searchedText:b,topTag:k,size:i,isTree:o,rootItemJson:f,rootItemVisible:v,dndEnabled:x,disableDoubleClickTitle:I,showRemoveIconForDisabledItem:y,withStates:t.state},Object.assign({},...[...Object.values(d),...Object.values(s)].map((e=>{var n;return{[e]:null===(n=t.props[e])||void 0===n?void 0:n.bind(t)}}))))))},isItemDisplayable(e,t){const{itemJsons:[{itemStateChecked:n}]}=t.props;return!this.state.filterEnabled||!!n}},ae.defaultProps=Object.assign({theme:(0,m.Immutable)({}),className:"",topTag:"div",treeAlignmentType:n.Typical,treeStyle:t.Card,rootItemVisible:!1,dndEnabled:!1,handleAction:g},ae.defaultHandleActionMap);const le=(0,w.withTheme)(ae);var se=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function de(e){const{className:i="",itemsJson:r=[],showCheckbox:o=!1,isMultiSelection:a=!1,treeAlignmentType:l=n.Intact,treeStyle:s=t.Card}=e,d=se(e,["className","itemsJson","showCheckbox","isMultiSelection","treeAlignmentType","treeStyle"]);return(0,m.jsx)(le,Object.assign({},d,{className:`${i} jimu-list`,isTree:!1,isMultiSelection:a||o,checkboxLinkage:!1,treeAlignmentType:l,treeStyle:s,rootItemJson:(c=[...r],Object.assign(c,{itemKey:"",itemChildren:c}))}));var c}const me=(0,w.withTheme)(de)})(),a})())}}}));