System.register(["jimu-core","jimu-theme","jimu-ui"],(function(e,t){var n={},i={},r={};return{setters:[function(e){n.Immutable=e.Immutable,n.React=e.React,n.classNames=e.classNames,n.css=e.css,n.defaultMessages=e.defaultMessages,n.esri=e.esri,n.focusElementInKeyboardMode=e.focusElementInKeyboardMode,n.getAppStore=e.getAppStore,n.injectIntl=e.injectIntl,n.isKeyboardMode=e.isKeyboardMode,n.jsx=e.jsx,n.lodash=e.lodash,n.moduleLoader=e.moduleLoader,n.polished=e.polished},function(e){i.withTheme=e.withTheme},function(e){r.Button=e.Button,r.Checkbox=e.Checkbox,r.Collapse=e.Collapse,r.Icon=e.Icon,r.ListGroupItem=e.ListGroupItem,r.Popper=e.Popper,r.TextInput=e.TextInput,r.Tooltip=e.Tooltip,r.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={97213:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 2.443 5.851 14 0 8.115l1.45-1.538 4.31 4.334L14.463 1z" clip-rule="evenodd"></path></svg>'},35737:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m14 4-6 8-6-8z"></path></svg>'},51042:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M12 14 4 8l8-6z"></path></svg>'},23001:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m4 2 8 6-8 6z"></path></svg>'},4651:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0" clip-rule="evenodd"></path></svg>'},62838:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},72259:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0m1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" clip-rule="evenodd"></path></svg>'},64811:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0m1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0M7.5 4.5a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3z" clip-rule="evenodd"></path></svg>'},17610:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 4 16"><path fill="#000" d="M3 1H1v2h2zM3 5H1v2h2zM1 9h2v2H1zM3 13H1v2h2z"></path></svg>'},79244:e=>{"use strict";e.exports=n},1888:e=>{"use strict";e.exports=i},14321:e=>{"use strict";e.exports=r}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";o.r(a),o.d(a,{List:()=>be,ListComponent:()=>he,Tree:()=>ue,TreeActionType:()=>l,TreeAlignmentType:()=>n,TreeCollapseStyle:()=>i,TreeItem:()=>me,TreeItemActionType:()=>d,TreeMainActionType:()=>s,TreeSelectionStyle:()=>r,TreeStyle:()=>t,_Tree:()=>pe,_TreeItem:()=>de,treeUtils:()=>e});var e={};o.r(e),o.d(e,{getActionDataByCBXActionData:()=>v,getActionDataByChangeJson:()=>I,getActionDataByRadioActionData:()=>x,getCheckProgress:()=>p,getInvisibleActionMap:()=>b,getItemChildren:()=>u,getItemJsonsWithCheckState:()=>O,getPathOfItemJsons:()=>f,getSelectionStyle:()=>k,handleAction:()=>g,isTitleEditing:()=>_,shouldHandleKeyEvent:()=>h,showCheckbox:()=>S,showSquireMark:()=>T,updateStatesForParents:()=>C});var t,n,i,r,l,s,d,m=o(79244);!function(e){e.Basic="BASIC",e.Card="CARD"}(t||(t={})),function(e){e.Typical="TYPICAL",e.Intact="INTACT"}(n||(n={})),function(e){e.PlusMinus="PLUS_MINUS",e.Arrow="ARROW"}(i||(i={})),function(e){e.HighlightMark="HIGHLIGHT_MARK",e.CheckSelection="CHECK_SELECTION",e.BoxSelection="BOX_SELECTION",e.CheckboxSelection="CHECKBOX_SELECTION"}(r||(r={})),function(e){e.RenderOverride="renderOverride"}(l||(l={})),function(e){e.RenderOverrideMain="renderOverrideMain"}(s||(s={})),function(e){e.RenderOverrideItemChildrenToggle="renderOverrideItemChildrenToggle",e.RenderOverrideItemDragHandle="renderOverrideItemDragHandle",e.RenderOverrideItemDetailToggle="renderOverrideItemDetailToggle",e.RenderOverrideItemIcon="renderOverrideItemIcon",e.RenderOverrideItemTitle="renderOverrideItemTitle",e.RenderOverrideItemCommands="renderOverrideItemCommands",e.RenderOverrideItemDraggableContainer="renderOverrideItemDraggableContainer",e.RenderOverrideItemMainLine="renderOverrideItemMainLine",e.RenderOverrideItemDetailLine="renderOverrideItemDetailLine",e.RenderOverrideItemBody="renderOverrideItemBody",e.RenderOverrideItemContent="renderOverrideItemContent",e.RenderOverrideItemDroppableContainer="renderOverrideItemDroppableContainer",e.RenderOverrideItemSubitems="renderOverrideItemSubitems",e.RenderOverrideItem="renderOverrideItem",e.OverrideItemBlockInfo="overrideItemBlockInfo",e.HandleInitTreeItemDndDropZone="handleInitTreeItemDndDropZone",e.HandleInitTreeItemDndDrag="handleInitTreeItemDndDrag",e.HandleDidDrop="handleDidDrop",e.HandleDisabledItemRemoved="handleDisabledItemRemoved",e.HandleToggleDetail="handleToggleDetail",e.HandleExpandItem="handleExpandItem",e.HandleEditingTextChange="handleEditingTextChange",e.HandleExitEditing="handleExitEditing",e.HandleStartEditing="handleStartEditing",e.HandleCheckboxChanged="handleCheckboxChanged",e.HandleFindSearchText="handleFindSearchText",e.IsItemDisplayable="isItemDisplayable",e.IsItemFocused="isItemFocused",e.HandleClickItemBody="handleClickItemBody",e.HandleClickItemTitle="handleClickItemTitle",e.HandleDoubleClickItemTitle="handleDoubleClickItemTitle",e.HandleUpdateItem="handleUpdateItem",e.GetDragItemJsons="getDragItemJsons",e.SetDragItemJsons="setDragItemJsons",e.IsItemDroppable="isItemDroppable",e.IsFolder="isFolder",e.OnToggleDetail="onToggleDetail",e.OnExpandItem="onExpandItem",e.OnEditingTextChange="onEditingTextChange",e.OnExitEditing="onExitEditing",e.OnDidDrop="onDidDrop",e.OnClickItemBody="onClickItemBody",e.OnDoubleClickItemTitle="onDoubleClickItemTitle",e.OnClickItemCommand="onClickItemCommand",e.OnUpdateItem="onUpdateItem"}(d||(d={}));const c={},p=(e,t=c)=>{const{getItemChildren:n=([e])=>e.itemChildren,getItemStateChecked:i=([e])=>e.itemStateChecked}=t,r=n([e]),o=i([e]);if(!r)return!!o;const a=r.reduce(((e,t)=>e+(!0===i([t]))),0);return!!a&&(a===r.length||a)},u=e=>{const[t]=e;return t.itemChildren},g=(e,t,n)=>{var i,r;if(!n)return;const[o]=n.props.itemJsons||[];return"function"==typeof(null==o?void 0:o[e])?o[e](t,n):null===(r=(i=n.props)[e])||void 0===r?void 0:r.call(i,t,n)};function h(e){return!["INPUT","TEXTAREA"].includes(e.target.tagName)&&("Enter"===e.key||" "===e.key)}const b=e=>{if(!e||0===e.length)return;const t={};return e.forEach((e=>{t[e]=()=>null})),t},f=e=>e.reduceRight(((t,n,i)=>i<1?t:[...t,Object.entries(u(e.slice(i))).find((([t,n])=>n===e[i-1]))[0]]),[]),I=(e,t)=>{const{itemJsons:n,currentItemJson:i,changeItemJson:r}=t;let o;if(e){const e=f(n).map((e=>["itemChildren",e])).flat();o=Object.entries(r).reduce(((t,[n,i])=>t.setIn([...e,n],i)),(0,m.Immutable)(n[n.length-1])),t=m.Immutable.setIn(t,["itemJsons"],[i,o])}else if(n.length>1){const e=n[1].indexOf(i);o=Object.entries(r).reduce(((t,[n,i])=>t.setIn([e,n],i)),(0,m.Immutable)(n[1])),t=m.Immutable.setIn(t,["itemJsons"],[i,o])}else o=[Object.assign(i,t.changeItemJson)],t=m.Immutable.setIn(t,["itemJsons"],[i]);return t.asMutable({deep:!0})},v=(e,t)=>{const{itemJsons:n,currentItemJson:i,changeItemJson:r}=t;let o;if(e){const e=Object.assign(r,{indeterminate:!1}),a=f(n).map((e=>["itemChildren",e])).flat();let l=(0,m.Immutable)(i).set("itemStateChecked",e.itemStateChecked).set("indeterminate",!1);l=j(l,e),o=(0,m.Immutable)(n[n.length-1]).setIn([...a],l);o=C(o,a.slice(0,a.length-2),r.itemStateChecked),t=(t=m.Immutable.setIn(t,["itemJsons"],[l,o])).asMutable({deep:!0})}else n.length>1&&(t=I(!1,t));return t},x=(e,t,n)=>{const{itemJsons:i,currentItemJson:r,changeItemJson:o}=n;let a;if(e){const e=Object.assign(o,{indeterminate:!1}),l=f(i).map((e=>["itemChildren",e])).flat();let s;t?(s=(0,m.Immutable)(r).set("itemStateChecked",e.itemStateChecked).set("indeterminate",!1),a=i[i.length-1]):(s=y(r),s=(0,m.Immutable)(s).set("itemStateChecked",e.itemStateChecked).set("indeterminate",!1),a=y(i[i.length-1])),a=(0,m.Immutable)(a).setIn([...l],s),n=(n=m.Immutable.setIn(n,["itemJsons"],[s,a])).asMutable({deep:!0})}else if(i.length>1){const e=i[1].indexOf(r);a=i[1].map(((t,n)=>{const i=e===n&&o.itemStateChecked;return Object.assign({},t,{itemStateChecked:i})})),n=m.Immutable.setIn(n,["itemJsons"],[r,a])}return n};function y(e){var t;return(null===(t=e.itemChildren)||void 0===t?void 0:t.length)>0&&(e.itemChildren=e.itemChildren.map((e=>(e.itemStateChecked=!1,delete e.indeterminate,y(e))))),e}function j(e,t){var n;return(null===(n=e.itemChildren)||void 0===n?void 0:n.length)>0&&(e=e.set("itemChildren",e.itemChildren.map((e=>{var n;return j(e=e.set("itemStateChecked",!e.isCheckboxDisabled&&(!e.itemStateDisabled&&(null===(n=e.isItemSelectable)||void 0===n||n)&&t.itemStateChecked)).set("indeterminate",!1),t)})))),e}function C(e,t,n,i=!1){const r=i?t.slice(0,t.length-2):t;if(0===r.length)return e;let o=e.getIn([...r],e);const a=o.itemChildren.some((e=>e.indeterminate||!e.isCheckboxDisabled&&(!e.itemStateDisabled&&e.itemStateChecked!==n))),l=n&&!a;return o=o.set("itemStateChecked",l).set("indeterminate",a),C(e=e.setIn([...r],o),r,l,!0)}function O(e,t){var n;const{dragItemParentChildren:i,dragItemJsons:r,dragItemJson:o,itemJsons:a,targetDropItemJsons:l}=e;let s;if(t.props.isMultiSelection){const e=0===i.length&&(o.itemStateChecked||o.indeterminate);if(r[1].indeterminate||e){if(!i.some((e=>e.itemStateChecked===o.itemStateChecked&&e.indeterminate===o.indeterminate))){let e=i.filter((e=>e.indeterminate)).length>0,t=!1;if(i.length>0&&!e){let n=0,r=0;i.forEach((e=>{e.itemStateChecked?n++:r++})),e=n>0&&r>0,t=n>0&&0===r}if(!e){const e=r.slice(1,r.length),n=f(e).map((e=>["itemChildren",e])).flat();s=C((0,m.Immutable)(a[a.length-1]),n,t)}}}if(!l[0].indeterminate&&l[0].itemStateChecked!==o.itemStateChecked){const e=f(l).map((e=>["itemChildren",e])).flat();s=s||a[a.length-1],s=0!==e.length||(null===(n=o.itemChildren)||void 0===n?void 0:n.length)>0?C((0,m.Immutable)(s),e,o.itemStateChecked):(0,m.Immutable)(s)}}return null==s?void 0:s.asMutable({deep:!0})}function S(e,t,n){return t&&(!e||n)}function k(e,n,i,o){let a=null;return e?(a=i===t.Card?r.BoxSelection:r.CheckSelection,n&&o&&(a=r.CheckboxSelection)):(a=i===t.Card?r.HighlightMark:r.CheckSelection,n&&(a=r.CheckboxSelection)),a}function T(e,t,n,i,o){return n===r.BoxSelection&&e&&i&&(t&&!o||!t)}function _(e){return Array.prototype.slice.call(e.target.querySelectorAll('input[type="text"]','input[type="number"]')).filter((e=>"true"!==e.getAttribute("data-draggable"))).length}var w=o(1888),D=o(14321),E=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};const J=m.React.forwardRef(((e,t)=>{const{onKeyDown:n,onClick:i}=e,r=E(e,["onKeyDown","onClick"]);return m.React.createElement(D.Button,Object.assign({ref:t},r,{onClick:i,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation())},onKeyUp:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),null==i||i(e))}}))})),R=(0,w.withTheme)((0,m.injectIntl)((e=>{var t,n;const{className:i,theme:r,intl:a,itemCommands:l,data:s,moreCommand:d={key:Symbol(),label:a.formatMessage({id:"more",defaultMessage:D.defaultMessages.more}),iconProps:{icon:o(4651)},action:()=>null},maxIconCount:c=3,onClickItemCommand:p=()=>null}=e,u=!!(null===(n=null===(t=null==s?void 0:s.itemJsons)||void 0===t?void 0:t[0])||void 0===n?void 0:n.itemStateDisabled),[g,h]=m.React.useState(!1),[b,f]=m.React.useState(null),I=e=>e.map(((e,t)=>{var n;const i=("function"==typeof e.iconProps?e.iconProps():e.iconProps)||{icon:null};return e&&!e.collapsed&&(0,m.jsx)(D.Tooltip,{key:t,title:e.label},(0,m.jsx)(J,{icon:!0,type:"tertiary",variant:"text",disableHoverEffect:!0,disableRipple:!0,"data-testid":e.label,className:"jimu-tree-command-list__command-item",disabled:u,"aria-label":e.label,"aria-pressed":null!==(n=e.buttonAriaPressed)&&void 0!==n?n:null,onClick:t=>{var n;t.stopPropagation(),h(!g);const i={event:t,data:s,command:e,itemCommands:l};null===(n=e.action)||void 0===n||n.call(e,i),p(i)}},(0,m.jsx)(D.Icon,Object.assign({size:"m",className:"jimu-tree-command-list__command-item-icon"},i)),(0,m.jsx)("div",{className:"jimu-tree-command-list__command-item-label"},e.label)))})),v=l.filter((e=>!e.collapsed)),x=v.length>c,y=x?[...v.slice(0,c-1),d,...v.slice(c-1)]:v;return(0,m.jsx)("div",{ref:e=>{f(e)},className:`jimu-tree-command-list ${i||""}`,css:j},I(y.slice(0,c)),x&&(0,m.jsx)(D.Popper,{open:g,reference:b,toggle:()=>{h(!1)},css:j},(0,m.jsx)("div",{className:"jimu-tree-command-list-dropdown"},I(y.slice(c)))));function j(){return m.css`
      color: ${r.ref.palette.neutral[1e3]};
      .jimu-tree-command-list-dropdown {
        display: flex;
        flex-flow: column;
        background-color: ${r.ref.palette.neutral[500]};
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
        color: ${r.ref.palette.black};
      }
    `}}))),A=m.React.createContext({isTree:!1,uuid:"jimu-tree-0",selectionStyle:r.CheckSelection,multiLevel:!1,isRTL:!1});var N=o(72259),M=o.n(N),B=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};const H=e=>{const t=window.SVG,{className:n}=e,i=B(e,["className"]),r=(0,m.classNames)("jimu-icon jimu-icon-component",n);return t?m.React.createElement(t,Object.assign({className:r,src:M()},i)):m.React.createElement("svg",Object.assign({className:r},i))};var P=o(64811),L=o.n(P),$=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};const z=e=>{const t=window.SVG,{className:n}=e,i=$(e,["className"]),r=(0,m.classNames)("jimu-icon jimu-icon-component",n);return t?m.React.createElement(t,Object.assign({className:r,src:L()},i)):m.React.createElement("svg",Object.assign({className:r},i))};var F=o(35737),U=o.n(F),K=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};const V=e=>{const t=window.SVG,{className:n}=e,i=K(e,["className"]),r=(0,m.classNames)("jimu-icon jimu-icon-component",n);return t?m.React.createElement(t,Object.assign({className:r,src:U()},i)):m.React.createElement("svg",Object.assign({className:r},i))};var G=o(51042),Z=o.n(G),q=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};const X=e=>{const t=window.SVG,{className:n}=e,i=q(e,["className"]),r=(0,m.classNames)("jimu-icon jimu-icon-component",n);return t?m.React.createElement(t,Object.assign({className:r,src:Z()},i)):m.React.createElement("svg",Object.assign({className:r},i))};var W=o(23001),Y=o.n(W),Q=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};const ee=e=>{const t=window.SVG,{className:n}=e,i=Q(e,["className"]),r=(0,m.classNames)("jimu-icon jimu-icon-component",n);return t?m.React.createElement(t,Object.assign({className:r,src:Y()},i)):m.React.createElement("svg",Object.assign({className:r},i))};var te=o(62838),ne=o.n(te),ie=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};const re=e=>{const t=window.SVG,{className:n}=e,i=ie(e,["className"]),r=(0,m.classNames)("jimu-icon jimu-icon-component",n);return t?m.React.createElement(t,Object.assign({className:r,src:ne()},i)):m.React.createElement("svg",Object.assign({className:r},i))};var oe=o(97213),ae=o.n(oe),le=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};const se=e=>{const t=window.SVG,{className:n}=e,i=le(e,["className"]),r=(0,m.classNames)("jimu-icon jimu-icon-component",n);return t?m.React.createElement(t,Object.assign({className:r,src:ae()},i)):m.React.createElement("svg",Object.assign({className:r},i))};class de extends m.React.Component{constructor(e){super(e),this.state={},this.dropZoneRef=m.React.createRef(),this.dragRef=m.React.createRef(),this.dropZoneInteractable=null,this.dragInteractable=null,this.dndInteract=null,this.intl=this.props.intl;const t=m.esri.Sanitizer;this.sanitizer=new t}componentDidMount(){this.props.dndEnabled&&this.dragRef.current&&m.moduleLoader.loadModule("jimu-core/dnd").then((e=>{this.dndInteract=e.interact,this.props.handleAction(d.HandleInitTreeItemDndDropZone,{type:"mount"},this),this.props.handleAction(d.HandleInitTreeItemDndDrag,{type:"mount"},this)}))}componentWillUnmount(){this.dndInteract&&(this.props.handleAction(d.HandleInitTreeItemDndDropZone,{type:"unmount"},this),this.props.handleAction(d.HandleInitTreeItemDndDrag,{type:"unmount"},this))}render(){const{handleAction:e}=this.props,t=this.props.itemBlockInfo||de.itemBlockInfos[this.props.treeAlignmentType],n=e(d.OverrideItemBlockInfo,{itemBlockInfo:t},this);return this.renderChildBlocks({currentBlockInfo:{name:null,children:[n]}},this)}renderChildBlocks(e,t){const{handleAction:n}=t.props,{currentBlockInfo:i}=e;return(i.children||[]).filter((e=>!!e)).map(((i,r)=>(0,m.jsx)(m.React.Fragment,{key:r},n(i.name,Object.assign(Object.assign({},e),{currentBlockInfo:i}),t))))}}de.contextType=A,de.defaultHandleActionMap={overrideItemBlockInfo:(e,t)=>{const{itemBlockInfo:n}=e;return n},renderOverrideItemChildrenToggle:(e,t)=>{var o;const{itemJsons:a,collapseStyle:l,isMultiSelection:s,checkboxLinkage:c,treeAlignmentType:p,theme:g,itemJsons:[{itemStateExpanded:b,itemExpandIconShown:f=!1,itemStateChecked:I,indeterminate:v,isCheckboxDisabled:x,isItemSelectable:y=!0,itemStateTitle:j,itemChildren:C}],handleAction:O}=t.props,k=f||(null===(o=u(a))||void 0===o?void 0:o.length)>0,T=O(d.IsFolder,{draggingItemJsons:null,targetItemJsons:a},t),_=x||!y||t.context.isTree&&T&&(!C||0===(null==C?void 0:C.length))&&2===a.length;let w=null;if(S(t.context.isTree,s,c)?p===n.Intact&&(w=(0,m.jsx)("div",{className:(0,m.classNames)("d-flex align-items-center",{"pr-1":!k})},(0,m.jsx)(D.Checkbox,{"aria-label":j,checked:I,indeterminate:v,disabled:_,onChange:e=>{e.stopPropagation(),_||O(d.HandleCheckboxChanged,{itemStateChecked:e.target.checked},t)}}))):t.context.selectionStyle===r.CheckSelection&&(w=(0,m.jsx)(D.Button,{icon:!0,type:"tertiary",variant:"text",disableHoverEffect:!0,disableRipple:!0,size:"sm",className:"mr-1",tabIndex:-1,onClick:e=>{e.stopPropagation(),O(d.HandleCheckboxChanged,{itemStateChecked:!I,isMultiSelection:s},t)}},I&&!_?(0,m.jsx)(se,{size:"12",color:g.sys.color.primary.light}):(0,m.jsx)("div",null))),!t.context.multiLevel)return w;const E=b?"collapse":"expand",J=t.intl.formatMessage({id:E,defaultMessage:D.defaultMessages[E]}),R=l===i.Arrow?(0,m.jsx)(V,{size:"s"}):(0,m.jsx)(H,null),A=l===i.Arrow?t.context.isRTL?(0,m.jsx)(X,{size:"s"}):(0,m.jsx)(ee,{size:"s"}):(0,m.jsx)(z,null);return(0,m.jsx)(m.React.Fragment,null,k?(0,m.jsx)(D.Button,{icon:!0,type:"tertiary",variant:"text",disableHoverEffect:!0,disableRipple:!0,className:"jimu-tree-item__children-toggle jimu-outline-inside",title:J,"aria-label":J,onClick:e=>{e.stopPropagation(),O(d.HandleExpandItem,{itemStateExpanded:!b},t)},onKeyDown:e=>{h(e)&&(e.preventDefault(),e.stopPropagation())},onKeyUp:e=>{h(e)&&(e.stopPropagation(),O(d.HandleExpandItem,{itemStateExpanded:!b},t))},css:function(){return m.css`
          &.jimu-tree-item__children-toggle {
            cursor: pointer;

            .icon-btn-sizer {
              min-width: 0.75rem;
              min-height: 0.75rem;
            }
          }
        `}},b?R:A):(0,m.jsx)("div",{className:"toggle-placeholder",css:m.css`width: ${l===i.Arrow?18:22}px;`}),w)},renderOverrideItemDragHandle:(e,t)=>{if(!t.props.dndEnabled)return null;const n=o(17610),i=t.intl.formatMessage({id:"dragHandler",defaultMessage:D.defaultMessages.dragHandler});return(0,m.jsx)(J,{icon:!0,type:"tertiary","aria-label":i,className:"jimu-tree-item__drag-handle",css:function(){return m.css`
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
        `}},(0,m.jsx)(D.Icon,{icon:n,width:4,height:16}))},renderOverrideItemDetailToggle:(e,t)=>{const{itemJsons:[{itemStateDetailVisible:n,itemStateDetailContent:i,itemStateDisabled:r}],handleAction:o}=t.props,a=n?V:ee,l=n?"collapse":"expand",s=t.intl.formatMessage({id:l,defaultMessage:D.defaultMessages[l]});return i?(0,m.jsx)(J,{icon:!0,type:"tertiary",title:s,"aria-label":s,disabled:!!r,className:"jimu-tree-item__detail-toggle",onClick:e=>{e.stopPropagation(),o(d.HandleToggleDetail,{itemStateDetailVisible:!n},t)},css:function(){return m.css`
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
        `}},(0,m.jsx)(a,{size:"s",autoFlip:!n})):null},renderOverrideItemIcon:(e,t)=>{var n;const{currentBlockInfo:{autoCollapsed:i=!1}}=e,{itemJsons:[{itemStateIcon:r}]}=t.props,a="function"==typeof r?r():r;return a?(0,m.jsx)("div",{className:"jimu-tree-item__icon",css:function(){return m.css`
          &.jimu-tree-item__icon {
            display: flex;
            align-items: center;
            opacity: ${(null==a?void 0:a.icon)?1:0};
          }
        `},style:i&&!a.icon?{display:"none"}:{}},(0,m.jsx)(D.Icon,Object.assign({},a,{icon:null!==(n=a.icon)&&void 0!==n?n:o(17610),className:"mr-1"}))):null},renderOverrideItemTitle:(e,t)=>{const{currentBlockInfo:{onClick:n=e=>c(d.HandleClickItemTitle,{},t),onDoubleClick:i=e=>{u||c(d.HandleDoubleClickItemTitle,{},t)}}}=e,{itemJsons:r,singleLineText:o,searchedText:a,itemJsons:[{itemStateTitle:l,itemStateEditingText:s}],handleAction:c,theme:p,disableDoubleClickTitle:u}=t.props,g=c(d.IsFolder,{draggingItemJsons:null,targetItemJsons:r},t);let h=null;if("string"==typeof s){m.lodash.debounce((()=>{(0,m.focusElementInKeyboardMode)(h,!0)}),50)()}const b=a?l.replace(new RegExp(`(${a})`,"gi"),"<strong>$1</strong>"):l,f=t.sanitizer.sanitize(b);return(0,m.jsx)("div",{className:"jimu-tree-item__title",onClick:n,onDoubleClick:i,css:function(){const e=`${g&&!s?1:0}px solid ${p.ref.palette.neutral[700]}`;return m.css`
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
        `}},"string"==typeof s?(0,m.jsx)(D.TextInput,{size:"sm",ref:e=>{h=e},className:"jimu-tree-item__editing-input",value:s,onChange:e=>{const n=e.target.value;c(d.HandleEditingTextChange,{itemStateEditingText:n},t)},onBlur:e=>{const n=e.target.value;c(d.HandleExitEditing,{itemStateEditingText:n},t)}}):(0,m.jsx)("div",{className:"jimu-tree-item__title-text",title:l,dangerouslySetInnerHTML:{__html:f}}))},renderOverrideItemCommands:(e,t)=>{const{currentBlockInfo:{commandListProps:n={}}}=e,{itemJsons:i,itemJsons:[{itemStateCommands:r=[]}],handleAction:o}=t.props;return(0,m.jsx)(R,Object.assign({className:"jimu-tree-item__commands",itemCommands:r,data:{refComponent:t,itemJsons:i},onClickItemCommand:e=>{o(d.OnClickItemCommand,e,t)},css:function(){return m.css`
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
        `},"aria-expanded":!0},i)},renderOverrideItemBody:(e,t)=>{const{handleAction:n,isMultiSelection:i,checkboxLinkage:r,itemJsons:[{itemStateTitle:o,itemStateChecked:a,isItemSelectable:l=!0,itemExpandIconShown:s=!1,isCheckboxDisabled:c,itemChildren:p}]}=t.props,u=T(t.context.isTree,i,t.context.selectionStyle,a,r);let g=l;t.context.isTree&&i&&r&&(g=!((null==p?void 0:p.length)>0||s));const b=["jimu-tree-item__body",`jimu-tree-item_selectable_${g}`,`jimu-tree-item_squire_${u}`].join(" ");return(0,m.jsx)("div",{className:b,role:"treeitem",tabIndex:0,"aria-label":o,onClick:e=>{n(d.HandleClickItemBody,{isMultiSelection:i,checkboxLinkage:r,isItemSelectable:g,itemStateChecked:!a,isCheckboxDisabled:c},t)},onKeyDown:e=>{h(e)&&e.preventDefault()},onKeyUp:e=>{h(e)&&(e.preventDefault(),n(d.HandleClickItemBody,{isMultiSelection:i,checkboxLinkage:r,isItemSelectable:g,itemStateChecked:!a,isCheckboxDisabled:c},t))},css:function(){return m.css`
          &.jimu-tree-item__body {
            position: relative;
            display: flex;
            flex-flow: row wrap;
            flex: 1;
            align-items: center;
          }
        `}},u&&(0,m.jsx)("div",{className:"item-active-icon-container item-active-icon-container456"},(0,m.jsx)("div",{className:"item-active-icon"})),t.renderChildBlocks(e,t))},renderOverrideItemContent:(e,t)=>{var i;const{itemJsons:r,handleAction:o,isMultiSelection:a,checkboxLinkage:l,treeAlignmentType:s,itemJsons:[{itemStateChecked:c,indeterminate:p,isCheckboxDisabled:g,itemExpandIconShown:h=!1,itemStateTitle:b,itemChildren:f}]}=t.props,[,...I]=r,v=h||(null===(i=u(r))||void 0===i?void 0:i.length)>0,x=1.25*(s===n.Typical?I.length-(v?1:0):I.length-1)+"rem",y=o(d.IsFolder,{draggingItemJsons:null,targetItemJsons:r},t),j=g||t.context.isTree&&y&&(!f||0===(null==f?void 0:f.length))&&2===r.length,C=S(t.context.isTree,a,l);return(0,m.jsx)("div",{className:"jimu-tree-item__content",css:function(){return m.css`
          &.jimu-tree-item__content {
            display: flex;
            flex: 1;
          }
        `}},C&&s===n.Typical&&(0,m.jsx)("div",{className:(0,m.classNames)("d-flex def align-items-center",{"pr-1":!t.context.multiLevel})},(0,m.jsx)(D.Checkbox,{"aria-label":b,checked:c,indeterminate:p,disabled:j,onChange:e=>{e.stopPropagation(),j||o(d.HandleCheckboxChanged,{itemStateChecked:e.target.checked},t)}})),t.context.multiLevel&&(0,m.jsx)("div",{className:"jimu-tree-item__level-padding",style:{width:x}}),t.renderChildBlocks(e,t))},renderOverrideItemDroppableContainer:(e,t)=>{return(0,m.jsx)("div",{ref:t.dropZoneRef,className:"jimu-tree-item__droppable","data-dndzone-droppable":"true",css:function(){return m.css`
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
        `}},n&&r)},renderOverrideItem:(e,t)=>{const{currentBlockInfo:{additionalClassName:n=""}}=e,{className:i,theme:r,dndEnabled:o,isMultiSelection:a,checkboxLinkage:l,showRemoveIconForDisabledItem:s,itemJsons:[{itemStateDisabled:c,itemStateChecked:p}],handleAction:u,treeStyle:g}=t.props,h=u(d.HandleFindSearchText,{},t),b=u(d.IsItemDisplayable,{},t),f=!!p,I=!!c,v=[n,i,"jimu-tree-item","jimu-tree-item_template",`jimu-tree-item_template-${g.toLowerCase()}`,`jimu-tree-item_dnd-${o}`,`jimu-tree-item_focused-${f}`,`jimu-tree-item_disabled-${!!I}`].join(" ");return(0,m.jsx)("div",{className:`jimu-tree-item ${v}`,css:function(){const{size:e="default"}=t.props,n="default"===e?6:"sm"===e?3:10;let i;i=a&&l?"default"===e?6:"sm"===e?4:11:"default"===e?2:"sm"===e?0:6;return m.css`
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
                background-color: ${window.jimuConfig.isBuilder?r.ref.palette.neutral[400]:"unset"};
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
              &[data-dndon-dragging=true]{
                opacity: 0;
              }
            }
            [data-dndzone-droppable=true] {
              display: flex;
              flex: 0 0 100%;
              border: 2px solid transparent; /** space for focus ring */
              &[data-dndon-droppable=true] {
                border-color: transparent;
                &[data-dndon-drop-type=to-top] {
                  .jimu-tree-item__body {
                    box-shadow: 0 -2px 0 0 ${r.sys.color.primary.main};
                  }
                }
                &[data-dndon-drop-type=to-bottom] {
                  .jimu-tree-item__body {
                    box-shadow: 0 2px 0 0 ${r.sys.color.primary.main};
                  }
                }
                &[data-dndon-drop-type=to-inside] {
                  .jimu-tree-item__body {
                    outline: 2px solid ${r.sys.color.primary.main};
                    outline-offset: -2px;
                  }
                }
                &[data-dndon-drop-type=to-nowhere] {
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
              line-height: 1.3;
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
              color: ${r.ref.palette.black};
            }

            /*
            Can't add bgColor for the whole item since it could contain sub-items.
              &:hover {
                background-color: '';
              }
            */
            .jimu-tree-item__body {
              &:hover {
                background-color: ${window.jimuConfig.isBuilder?r.ref.palette.neutral[500]:r.ref.palette.neutral[200]};
              }

              &.jimu-tree-item_selectable_true {
                border: ${o?"1px solid transparent":"none"};
              }
              &.jimu-tree-item_selectable_false {
                background: ${window.jimuConfig.isBuilder?r.ref.palette.neutral[500]:r.ref.palette.neutral[200]};
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
                  border-left: ${t.context.isTree||a?"none":`.125rem solid ${r.sys.color.primary.light}`} ;
                }
                .item-active-icon-container {
                  position: absolute;
                  top: -1px;
                  right: -1px;
                  .item-active-icon {
                    width: 0;
                    height: 0;
                    border-top: 0.75rem ${r.sys.color.primary.light} solid;
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
              color: ${r.ref.palette.black};
            }
            .jimu-tree-item__body {
              background-color: ${window.jimuConfig.isBuilder?r.ref.palette.neutral[600]:"unset"};
              &.jimu-tree-item_selectable_true {
                border: ${window.jimuConfig.isBuilder?"none":`1px solid ${r.ref.palette.neutral[300]}`};
                &.jimu-tree-item_squire_true {
                  border: 1px solid ${r.sys.color.primary.main};
                }
                &:hover {
                  background-color: ${window.jimuConfig.isBuilder?m.polished.rgba(r.ref.palette.neutral[600],.8):r.ref.palette.neutral[200]};
                }
              }
              .jimu-tree-item__main-line {
                padding: ${m.polished.rem(n)} 0.5rem ${m.polished.rem(n)} 0.125rem;
              }
            }
            &.jimu-tree-item_disabled-false {
              .jimu-tree-item__content .jimu-tree-item__body:hover {
                cursor: default!important;
                background-color: ${window.jimuConfig.isBuilder?r.ref.palette.neutral[600]:r.ref.palette.neutral[200]};
              }
            }
          }
        `},style:{display:h&&b?void 0:"none"}},t.renderChildBlocks(e,t),I&&(0,m.jsx)("div",{className:"jimu-tree-item__mask"},s&&(0,m.jsx)(D.Tooltip,{title:t.intl.formatMessage({id:"delete",defaultMessage:m.defaultMessages.delete})},(0,m.jsx)(D.Button,{icon:!0,type:"default",size:"sm",className:"mr-1",onClick:e=>{e.stopPropagation(),u(d.HandleDisabledItemRemoved,{},t)}},(0,m.jsx)(re,null)))))},handleInitTreeItemDndDropZone:(e,t)=>{const{type:n}=e;if("mount"===n){const e=t.dndInteract;e.dynamicDrop(!0),t.dropZoneInteractable=e(t.dropZoneRef.current).dropzone({accept:"[data-dndzone-draggable=true]",overlap:"pointer",ondropmove:e=>{const{target:n,relatedTarget:i}=e,{itemJsons:r,itemJsons:[{itemStateDisabled:o}],withStates:a,handleAction:l}=t.props,{searchForText:s}=a,m=i.getBoundingClientRect(),c=n.getBoundingClientRect(),p=+i.getAttribute("data-dndon-starty"),u=m.top+p,g=l(d.GetDragItemJsons,{dragEvent:e.dragEvent},t);if(!g)return;const[h]=g.itemJsons,b=["to-nowhere","to-top",...t.context.isTree&&!o?["to-inside"]:[],"to-bottom"].find(((e,t,n)=>"to-nowhere"===e?r.includes(h)||!!s:u<c.top+c.height*t/(n.length-1)?e:null));let f=b;if(t.context.isTree&&!o&&"to-nowhere"!==b){l(d.IsItemDroppable,{draggingItemJsons:g.itemJsons,targetItemJsons:r,dropType:f},t)||(f="to-nowhere")}n.setAttribute("data-dndon-drop-type",f)},ondragenter:e=>{const{target:t}=e;t.setAttribute("data-dndon-droppable","true")},ondragleave:e=>{const{target:t}=e;t.removeAttribute("data-dndon-droppable"),t.removeAttribute("data-dndon-drop-type")},ondrop:e=>{m.lodash.defer((()=>{const{target:n}=e,{itemJsons:i,handleAction:r}=t.props,o=e.target.getAttribute("data-dndon-drop-type"),a=r(d.GetDragItemJsons,{dragEvent:e.dragEvent},t);r(d.SetDragItemJsons,{itemJsons:i,dragEvent:e.dragEvent,type:"dragend"},t),r(d.HandleDidDrop,{dropType:o,dragItem:a},t),n.removeAttribute("data-dndon-droppable"),n.removeAttribute("data-dndon-drop-type")}))}})}"unmount"===n&&t.dropZoneInteractable&&(t.dropZoneInteractable.unset(),t.dropZoneInteractable=null)},handleInitTreeItemDndDrag:(e,t)=>{const{type:n}=e;if("mount"===n){const e=t.dndInteract;t.dragInteractable=e(t.dragRef.current).draggable({inertia:!1,modifiers:[],autoScroll:{container:document.getElementById(t.context.uuid)},onstart:e=>{if(_(e))return;t.dragTriggered=!0;const{target:n,clientX:i,clientY:r}=e;n.style.position="fixed";const{itemJsons:o,handleAction:a}=t.props;a(d.SetDragItemJsons,{itemJsons:o,dragEvent:e,type:"dragstart"},t);const l=n.getBoundingClientRect();n.setAttribute("data-dndon-limitx",Math.abs(l.right-l.left)/2),n.setAttribute("data-dndon-startx",i-l.left),n.setAttribute("data-dndon-starty",r-l.top),n.setAttribute("data-dndon-dragging","true")},onmove:e=>{if(_(e))return;const{target:t,clientX:n,clientY:i,clientX0:r,clientY0:o}=e;let a=n-r;const l=t.getAttribute("data-dndon-limitx");a=a>0?Math.min(a,l):Math.max(a,-l);const s=i-o;t.style.webkitTransform=t.style.transform=`translate(${a}px, ${s}px)`},onend:e=>{if(_(e))return;const{target:t}=e;t.style.position=null,t.style.webkitTransform=t.style.transform="",t.removeAttribute("data-dndon-startx"),t.removeAttribute("data-dndon-starty"),t.removeAttribute("data-dndon-dragging")}}).on("click",(e=>{t.dragTriggered&&e.stopImmediatePropagation(),t.dragTriggered=!1}))}"unmount"===n&&t.dragInteractable&&(t.dragInteractable.unset(),t.dragInteractable=null)},handleDidDrop:(e,t)=>{const{itemJsons:n}=t.props,{dropType:i,dragItem:r}=e;if(["to-top","to-inside","to-bottom"].includes(i)){const e=r.itemJsons,o=n,[a]=e,[l]=o,s=u(e.slice(1)),m=u(o.slice(1)),c=u(o),p=s.indexOf(a),g="to-inside"===i?o:o.slice(1);let h="to-top"===i?m.indexOf(l):"to-bottom"===i?m.indexOf(l)+1:(c||[]).length;const b=u(g);h+=s===b&&p<h?-1:0;const f=(e,t)=>{const{dragItemParentChildren:n,dragItemJson:i,dragItemIndex:r,targetDropItemChildren:o,targetDropItemJsons:a,targetDropItemIndex:l}=e;if(n.splice(r,1),o)o.splice(l,0,i);else{const[e]=a;e.itemChildren=[i]}};let I={updateType:d.HandleDidDrop,parentDragItemJsons:e.slice(1),dragItemParentChildren:s,dragItemIndex:p,dragItemJsons:e,dragItemJson:a,targetDropItemJsons:g,targetDropItemChildren:b,targetDropItemIndex:h,dropType:i,itemJsons:n,muteUpdate:f};f(I,t);const v=O(I,t);v&&(I=Object.assign(I,{itemJsons:[...n.slice(0,n.length-1),v]})),t.props.handleAction(d.HandleUpdateItem,I,t)}t.props.handleAction(d.OnDidDrop,e,t)},handleDisabledItemRemoved:(e,t)=>{const{itemJsons:n}=t.props,i=n,[r]=i,o=u(i.slice(1)),a=o.indexOf(r),l={updateType:d.HandleDisabledItemRemoved,itemJsons:n};o.splice(a,1),t.props.handleAction(d.HandleUpdateItem,l,t)},handleToggleDetail:(e,t)=>{const{itemStateDetailVisible:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(d.HandleUpdateItem,{updateType:d.HandleToggleDetail,changeItemJson:{itemStateDetailVisible:n},currentItemJson:r,itemJsons:i},t),t.props.handleAction(d.OnToggleDetail,e,t)},handleExpandItem:(e,t)=>{const{itemStateExpanded:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(d.HandleUpdateItem,{updateType:d.HandleExpandItem,changeItemJson:{itemStateExpanded:n},currentItemJson:r,itemJsons:i},t),t.props.handleAction(d.OnExpandItem,e,t)},handleEditingTextChange:(e,t)=>{const{itemStateEditingText:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(d.HandleUpdateItem,{updateType:d.HandleEditingTextChange,changeItemJson:{itemStateEditingText:n||""},currentItemJson:r,itemJsons:i},t),t.props.handleAction(d.OnEditingTextChange,e,t)},handleExitEditing:(e,t)=>{const{itemStateEditingText:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(d.HandleUpdateItem,{updateType:d.HandleExitEditing,changeItemJson:{itemStateEditingText:null,itemStateTitle:n||""},currentItemJson:r,itemJsons:i},t),t.props.handleAction(d.OnExitEditing,e,t)},handleFindSearchText:(e,t)=>{const{itemJsons:[{itemKey:n}],withStates:{searchForText:i}}=t.props;return(n||"").match(i||"")},isItemDisplayable:(e,t)=>!0,handleClickItemBody:(e,t)=>{const{itemStateChecked:n,isItemSelectable:i,isCheckboxDisabled:r,isMultiSelection:o,checkboxLinkage:a}=e;if(i&&!r){if(S(t.context.isTree,o,a))return e.isTriggeredByBodyClick=!0,void t.props.handleAction(d.HandleCheckboxChanged,e,t);{const{itemJsons:e}=t.props,[i]=e;let r={updateType:d.HandleCheckboxChanged,changeItemJson:{itemStateChecked:n||!1},currentItemJson:i,itemJsons:e};r=x(t.context.isTree,o,r),t.props.handleAction(d.OnUpdateItem,r,t)}t.props.handleAction(d.OnClickItemBody,{},t)}else t.props.handleAction(d.OnClickItemBody,{},t)},handleDoubleClickItemTitle:(e,t)=>{const{itemJsons:[{itemStateTitle:n}]}=t.props;t.props.handleAction(d.HandleStartEditing,{itemStateEditingText:n},t),t.props.handleAction(d.OnDoubleClickItemTitle,e,t)},handleCheckboxChanged:(e,t)=>{const{itemStateChecked:n,isTriggeredByBodyClick:i,isMultiSelection:o}=e,{itemJsons:a}=t.props,[l]=a;let s={updateType:d.HandleCheckboxChanged,changeItemJson:{itemStateChecked:n||!1},currentItemJson:l,itemJsons:a};s=t.context.selectionStyle===r.CheckSelection?x(t.context.isTree,o,s):v(t.context.isTree,s),t.props.handleAction(d.OnUpdateItem,s,t),i&&t.props.handleAction(d.OnClickItemBody,s,t)},handleStartEditing:(e,t)=>{const{itemStateEditingText:n}=e,{itemJsons:i}=t.props,[r]=i;t.props.handleAction(d.HandleUpdateItem,{updateType:d.HandleStartEditing,changeItemJson:{itemStateEditingText:n||""},currentItemJson:r,itemJsons:i},t)},handleUpdateItem:(e,t)=>{e.changeItemJson&&(e=I(t.context.isTree,e)),t.props.handleAction(d.OnUpdateItem,e,t)},isItemDroppable:(e,t)=>!0,isFolder:(e,t)=>!1,getDragItemJsons:null,setDragItemJsons:null,handleClickItemTitle:null,handleFocusItem:null,onToggleDetail:null,onExpandItem:null,onEditingTextChange:null,onExitEditing:null,onDidDrop:null,onClickItemBody:null,onDoubleClickItemTitle:null,onClickItemCommand:null,onUpdateItem:null},de.itemBlockInfos={[n.Typical]:{name:d.RenderOverrideItem,children:[{name:d.RenderOverrideItemDroppableContainer,children:[{name:d.RenderOverrideItemContent,children:[{name:d.RenderOverrideItemChildrenToggle},{name:d.RenderOverrideItemBody,children:[{name:d.RenderOverrideItemMainLine,children:[{name:d.RenderOverrideItemDraggableContainer,children:[{name:d.RenderOverrideItemDragHandle},{name:d.RenderOverrideItemDetailToggle},{name:d.RenderOverrideItemIcon},{name:d.RenderOverrideItemTitle},{name:d.RenderOverrideItemCommands}]}]},{name:d.RenderOverrideItemDetailLine}]}]}]},{name:d.RenderOverrideItemSubitems}]},[n.Intact]:{name:d.RenderOverrideItem,children:[{name:d.RenderOverrideItemDroppableContainer,children:[{name:d.RenderOverrideItemContent,children:[{name:d.RenderOverrideItemBody,children:[{name:d.RenderOverrideItemMainLine,children:[{name:d.RenderOverrideItemDraggableContainer,children:[{name:d.RenderOverrideItemDragHandle},{name:d.RenderOverrideItemChildrenToggle},{name:d.RenderOverrideItemDetailToggle},{name:d.RenderOverrideItemIcon},{name:d.RenderOverrideItemTitle},{name:d.RenderOverrideItemCommands}]}]},{name:d.RenderOverrideItemDetailLine}]}]}]},{name:d.RenderOverrideItemSubitems}]}},de.defaultProps=Object.assign({theme:{},className:"",treeAlignmentType:n.Typical,treeStyle:t.Card,dndEnabled:!1,withStates:{},handleAction:g},de.defaultHandleActionMap);const me=(0,w.withTheme)((0,m.injectIntl)(de));class ce extends m.React.Component{constructor(e){super(e),this.state={dragItems:[]}}render(){return this.props.handleAction(s.RenderOverrideMain,{},this)}renderItemJson(e){const{treeAlignmentType:t,treeStyle:n,collapseStyle:i,isMultiSelection:r,singleLineText:o,searchedText:a,checkboxLinkage:l,dndEnabled:s,disableDoubleClickTitle:c,withStates:p,size:g="default",showRemoveIconForDisabledItem:h}=this.props,[b,...f]=e,{itemKey:I,itemStateExpanded:v,itemStateEditingText:x}=b,y=u(e),j=["jimu-tree-main__item",`jimu-tree-main__item_level-${f.length}`,`jimu-tree-main__item_editing-${"string"==typeof x}`,...y?[`jimu-tree-main__item_expandable-${!!y}`,`jimu-tree-main__item_expanded-${!!v}`]:[]].join(" ");return(0,m.jsx)(me,Object.assign({key:I,className:j,treeAlignmentType:t,treeStyle:n,singleLineText:o,searchedText:a,collapseStyle:i,isMultiSelection:r,checkboxLinkage:l,itemJsons:e,size:g,dndEnabled:s,disableDoubleClickTitle:c,showRemoveIconForDisabledItem:h,withStates:p},Object.assign({},...Object.values(d).map((e=>{var t;return{[e]:null===(t=this.props[e])||void 0===t?void 0:t.bind(this)}})))),(y||[]).map((t=>this.renderItemJson([t,...e]))))}}ce.defaultHandleActionMap={renderOverrideMain:(e,t)=>{var n,i,r,o;const{className:a,topTag:l,isTree:s,uuid:d,rootItemVisible:c,rootItemJson:p,isMultiSelection:g,checkboxLinkage:h,treeStyle:b}=t.props,f=p?u([p]):null,I=(null===(i=null===(n=null==p?void 0:p.itemChildren)||void 0===n?void 0:n.filter((e=>{var t;return(null===(t=null==e?void 0:e.itemChildren)||void 0===t?void 0:t.length)>0})))||void 0===i?void 0:i.length)>0,v=l,x=k(s,g,b,h),y=null===(o=null===(r=(0,m.getAppStore)().getState())||void 0===r?void 0:r.appContext)||void 0===o?void 0:o.isRTL;return(0,m.jsx)(A.Provider,{value:{isTree:s,selectionStyle:x,multiLevel:I,uuid:d,isRTL:y}},(0,m.jsx)(v,{className:`jimu-tree-main ${a||""}`,css:function(){return m.css`
          &.jimu-tree-main {
            width: 100%;
            overflow-x: hidden;
          }
        `},role:"tree"},c?t.renderItemJson([p]):(f||[]).map((e=>(0,m.jsx)(m.React.Fragment,{key:e.itemKey},t.renderItemJson([e,p]))))))},setDragItemJsons(e,t){this.setState((({dragItems:t})=>({dragItems:[...t.filter((t=>t.dragEvent.target!==e.dragEvent.target)),..."dragstart"===e.type?[e]:[]]})))},getDragItemJsons(e,t){return this.state.dragItems.find((t=>t.dragEvent.target===e.dragEvent.target))}},ce.defaultProps=Object.assign({className:"",topTag:"div",treeAlignmentType:n.Typical,singleLineText:!1,treeStyle:t.Card,rootItemVisible:!1,dndEnabled:!1,withStates:{},handleAction:g},ce.defaultHandleActionMap);class pe extends m.React.Component{constructor(e){super(e),pe.count++,this.localRandomId="jimu-tree-"+pe.count,this.state={searchForText:"",filterEnabled:!1}}render(){return this.props.handleAction(l.RenderOverride,{},this)}}pe.count=-1,pe.defaultHandleActionMap={renderOverride:(e,t)=>{var n;const{className:i,size:r,topTag:o,isTree:a=!0,treeAlignmentType:l,collapseStyle:c,showCheckbox:p=!0,isMultiSelection:u=!0,checkboxLinkage:g=!0,treeStyle:h,singleLineText:b,searchedText:f,disableDoubleClickTitle:I=!1,rootItemJson:v,rootItemVisible:x,dndEnabled:y,showRemoveIconForDisabledItem:j,intl:C,forwardRef:O}=t.props,{searchForText:S,filterEnabled:k}=t.state,T=["jimu-tree",i,`jimu-tree_template-${h.toLowerCase()}`,`jimu-tree_searched-text-${!!S}`,`jimu-tree_filter-enabled-${!!k}`].join(" ");let _="";a||(null===(n=null==v?void 0:v.itemChildren)||void 0===n?void 0:n.length)>0||(_=C.formatMessage({id:"emptyListWarning",defaultMessage:"emptyListWarning"}));const w=o;return(0,m.jsx)(w,{ref:O,className:T,id:t.localRandomId,tabIndex:-1,"aria-label":_,css:function(){return m.css`
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
        `}},(0,m.jsx)(ce,Object.assign({className:"",uuid:t.localRandomId,treeAlignmentType:l,collapseStyle:c,isMultiSelection:null!=u?u:p,checkboxLinkage:g,treeStyle:h,singleLineText:b,searchedText:f,topTag:w,size:r,isTree:a,rootItemJson:v,rootItemVisible:x,dndEnabled:y,disableDoubleClickTitle:I,showRemoveIconForDisabledItem:j,withStates:t.state},Object.assign({},...[...Object.values(d),...Object.values(s)].map((e=>{var n;return{[e]:null===(n=t.props[e])||void 0===n?void 0:n.bind(t)}}))))))},isItemDisplayable(e,t){const{itemJsons:[{itemStateChecked:n}]}=t.props;return!this.state.filterEnabled||!!n}},pe.defaultProps=Object.assign({theme:(0,m.Immutable)({}),className:"",topTag:"div",treeAlignmentType:n.Typical,treeStyle:t.Card,rootItemVisible:!1,dndEnabled:!1,handleAction:g},pe.defaultHandleActionMap);const ue=(0,w.withTheme)((0,m.injectIntl)(pe));var ge=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function he(e){const{className:i="",itemsJson:r=[],showCheckbox:o=!1,isMultiSelection:a=!1,treeAlignmentType:l=n.Intact,treeStyle:s=t.Card}=e,d=ge(e,["className","itemsJson","showCheckbox","isMultiSelection","treeAlignmentType","treeStyle"]),c=m.React.useRef(null),p=m.React.useRef(e.itemsJson);return m.React.useEffect((()=>{if(window.jimuConfig.isBuilder&&(0,m.isKeyboardMode)()&&p.current.length>e.itemsJson.length){const t=document.querySelector(`#${c.current.id}`),n=t.querySelectorAll(".jimu-tree-item__body.jimu-tree-item_selectable_true"),i=e=>{const{itemStateCommands:t}=e;return ge(e,["itemStateCommands"])},r=p.current.findIndex((t=>!e.itemsJson.some((e=>m.lodash.isDeepEqual(i(e),i(t))))));let o=null;o=n.length>r?n[r]:n.length>0?n[n.length-1]:t,(0,m.focusElementInKeyboardMode)(o,!0)}p.current=e.itemsJson}),[e.itemsJson]),(0,m.jsx)(ue,Object.assign({},d,{className:`${i} jimu-list`,isTree:!1,forwardRef:e=>{c.current=e},isMultiSelection:a||o,checkboxLinkage:!1,treeAlignmentType:l,treeStyle:s,rootItemJson:(u=[...r],Object.assign(u,{itemKey:"",itemChildren:u}))}));var u}const be=(0,w.withTheme)(he)})(),a})())}}}));