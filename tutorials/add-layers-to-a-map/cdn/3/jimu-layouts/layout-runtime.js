System.register(["jimu-core","jimu-ui","jimu-theme","jimu-layouts/layout-runtime"],(function(e,t){var o={},n={},i={},a={};return{setters:[function(e){o.AnimationComponent=e.AnimationComponent,o.AnimationContext=e.AnimationContext,o.AnimationPlayMode=e.AnimationPlayMode,o.AnimationStartMode=e.AnimationStartMode,o.AnimationTriggerType=e.AnimationTriggerType,o.AnimationType=e.AnimationType,o.AppDialog=e.AppDialog,o.AppMode=e.AppMode,o.BrowserSizeMode=e.BrowserSizeMode,o.ContainerType=e.ContainerType,o.DEFAULT_ANIMATION_PROPS=e.DEFAULT_ANIMATION_PROPS,o.ErrorBoundary=e.ErrorBoundary,o.ExtensionManager=e.ExtensionManager,o.FixedPosition=e.FixedPosition,o.GridItemType=e.GridItemType,o.Immutable=e.Immutable,o.IntersectionContext=e.IntersectionContext,o.Keyboard=e.Keyboard,o.LayoutItemType=e.LayoutItemType,o.LayoutParentType=e.LayoutParentType,o.LayoutType=e.LayoutType,o.OneByOneAnimation=e.OneByOneAnimation,o.PageMode=e.PageMode,o.PagePart=e.PagePart,o.ParentAnimationMode=e.ParentAnimationMode,o.React=e.React,o.ReactRedux=e.ReactRedux,o.ReactResizeDetector=e.ReactResizeDetector,o.ScreenTransitionType=e.ScreenTransitionType,o.ScreenTriggerType=e.ScreenTriggerType,o.TransitionContainer=e.TransitionContainer,o.WidgetManager=e.WidgetManager,o.WidgetState=e.WidgetState,o.WidgetType=e.WidgetType,o.appActions=e.appActions,o.appConfigUtils=e.appConfigUtils,o.classNames=e.classNames,o.createSelector=e.createSelector,o.css=e.css,o.extensionSpec=e.extensionSpec,o.getAnimationEffect=e.getAnimationEffect,o.getAppStore=e.getAppStore,o.getHoverStyle=e.getHoverStyle,o.getIndexFromProgress=e.getIndexFromProgress,o.getNextAnimationId=e.getNextAnimationId,o.hooks=e.hooks,o.i18n=e.i18n,o.jimuHistory=e.jimuHistory,o.jsx=e.jsx,o.lodash=e.lodash,o.moduleLoader=e.moduleLoader,o.polished=e.polished,o.spring=e.spring,o.translatedLocales=e.translatedLocales},function(e){n.Button=e.Button,n.DistanceUnits=e.DistanceUnits,n.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,n.FillType=e.FillType,n.Icon=e.Icon,n.Loading=e.Loading,n.LoadingType=e.LoadingType,n.Modal=e.Modal,n.ModalBody=e.ModalBody,n.PanelHeader=e.PanelHeader,n.Tab=e.Tab,n.Tabs=e.Tabs,n.Tooltip=e.Tooltip,n.defaultMessages=e.defaultMessages,n.getFocusableElements=e.getFocusableElements,n.styleUtils=e.styleUtils,n.useTrapFocusBySelector=e.useTrapFocusBySelector},function(e){i.useTheme=e.useTheme,i.withBuilderTheme=e.withBuilderTheme,i.withTheme=e.withTheme},function(e){a.PageVisibilityContext=e.PageVisibilityContext,a.utils=e.utils}],execute:function(){e((()=>{var e={462:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="#fff" fill-rule="evenodd" d="M12 0H7v1h4v4h1V0M0 12h5v-1H1V7H0v5" clip-rule="evenodd"></path></svg>'},3529:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4m0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3m0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},8416:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1 3h14v1H1zM9 7h6v1H9zM5.036 6.146a.5.5 0 0 0-.708 0L1.146 9.328a.5.5 0 1 0 .708.708l2.328-2.329V14.5h1V7.707l2.328 2.329a.5.5 0 1 0 .708-.708z"></path></svg>'},5741:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1 3h14v1H1zM9 7h6v1H9zM4.328 14.354a.5.5 0 0 0 .708 0l3.182-3.182a.5.5 0 1 0-.708-.708l-2.328 2.329V6h-1v6.793l-2.328-2.328a.5.5 0 1 0-.708.707z"></path></svg>'},7568:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},2943:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},9238:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.146 13.847a.486.486 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 8.26zm0-5a.485.485 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 3.26z" clip-rule="evenodd"></path></svg>'},2838:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},9244:e=>{"use strict";e.exports=o},1496:e=>{"use strict";e.exports=a},1888:e=>{"use strict";e.exports=i},4321:e=>{"use strict";e.exports=n}},t={};function l(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,l),i.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";l.r(r),l.d(r,{AccordionLayoutViewer:()=>ko,CLICK_TOLERANCE:()=>x,COLS_IN_ONE_ROW:()=>h,CONTEXT_MENU_ICON_SIZE:()=>m,CONTEXT_MENU_ITEM_SIZE:()=>f,ColumnLayoutViewer:()=>Bt,DEFAULT_AUTOPLAY_INTERVAL:()=>w,FixedLayoutViewer:()=>kt,GridLayoutViewer:()=>vo,LayoutContext:()=>g,LayoutEntry:()=>lt,LayoutItem:()=>Mt,LayoutItemSizeModes:()=>S,LayoutZIndex:()=>b,MIN_LAYOUT_ITEM_SIZE:()=>I,OrderAdjustType:()=>y,PageContext:()=>d,PageRenderer:()=>kn,PageVisibilityContext:()=>c,RowLayoutViewer:()=>Ut,SectionRenderer:()=>Ct,ViewVisibilityContext:()=>p,ViewportVisibilityContext:()=>u,WidgetRenderer:()=>Ke,controlPanelUtils:()=>o,defaultMessages:()=>i,findLayoutBuilder:()=>nt,findLayoutViewer:()=>it,init:()=>En,registerLayoutBuilder:()=>tt,registerLayoutViewer:()=>ot,searchUtils:()=>t,utils:()=>e});var e={};l.r(e),l.d(e,{autoBindHandlers:()=>ne,calHeightOfLayoutItem:()=>Se,contains:()=>ke,emptyFunc:()=>oe,expandStyleArray:()=>be,fromRatio:()=>ue,gcd:()=>Be,getActivePagePart:()=>Pe,getAppConfig:()=>Ce,getCurrentDialogId:()=>je,getCurrentDialogRootLayoutId:()=>$e,getCurrentPageId:()=>Re,getCurrentPageRootLayoutId:()=>Me,getCurrentSizeMode:()=>Te,getFooterRootLayoutId:()=>Oe,getHeaderRootLayoutId:()=>Le,getLayoutItemSizeMode:()=>Ne,getMaximumId:()=>ie,getValueOfBBox:()=>se,handleOnebyOneAnimation:()=>Fe,intersects:()=>Ae,isEmptyLayout:()=>le,isFunctionalWidget:()=>ve,isNumber:()=>re,isPercentage:()=>ae,isRTL:()=>xe,isWidgetHasEmbeddedLayout:()=>ye,isWidgetPlaceholder:()=>he,mapStateToLayoutItemProps:()=>pe,mapStateToLayoutProps:()=>ce,mapStateToWidgetProps:()=>ge,normalizeLinearUnit:()=>Ee,parseAspectRatio:()=>we,relativeClientRect:()=>Ie,replaceBoundingBox:()=>fe,shouldUseAspectRatio:()=>ze,toRatio:()=>de,updateBoundingBoxProp:()=>me});var t={};l.r(t),l.d(t,{findLayoutId:()=>H,findLayoutItem:()=>C,findParentLayoutInfo:()=>T,getBlockAnchorPointsInPage:()=>Q,getBrowserSizeModeByLayoutId:()=>X,getBrowserSizeModeByLayoutIdAndWidgetId:()=>_,getChildrenContents:()=>G,getContentContainerInfo:()=>A,getContentIdInLayoutItem:()=>R,getContentLayoutInfosInOneSizeMode:()=>U,getContentLayoutItem:()=>M,getContentRootContainerInfo:()=>E,getContentsInContainer:()=>z,getContentsInContainerRecursive:()=>B,getContentsInContainerRecursiveAdv:()=>F,getContentsInLayout:()=>j,getContentsInLayoutRecursive:()=>P,getContentsInLayoutWithRecursiveLayouts:()=>$,getContentsInTheSameContainer:()=>Z,getContentsInTheSameRootContainer:()=>K,getLayoutInfosByType:()=>O,getLayoutInfosHoldContent:()=>V,getLayoutItemIds:()=>L,getMapWidgets:()=>te,getParentWidgetIdOfContent:()=>D,getPendingLayoutItemsFromOtherSizeMode:()=>Ye,getPendingLayoutItemsFromOtherSizeModeInDialog:()=>_e,getPendingLayoutItemsFromOtherSizeModeInPage:()=>Ge,getPendingLayoutItemsInDialog:()=>Ue,getPendingLayoutItemsInLayoutWithDeep:()=>Xe,getPendingLayoutItemsInPage:()=>De,getRelatedLayoutInfosInWidgetByLayoutInfo:()=>Y,getRelatedLayoutItemsInWidgetByLayoutInfo:()=>J,getRootContainerInfoOfLayout:()=>N,getScreenAnchorPointsInPage:()=>ee,getSectionInfo:()=>Ve,getWidgetIdThatUseTheLayoutId:()=>k});var o={};l.r(o),l.d(o,{convertToStyle:()=>vn,findPageRelatedControllerIds:()=>gn,panelTransformStyle:()=>yn,useHandleLastVirtualNodeFocus:()=>hn});var n=l(9244);const i={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"New view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move {label}",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Hide in design view",showInDesignView:"Show in design view",unlockGridItem:"Unlock this widget to reorganize its internal widgets.",lockGridItem:"Lock this widget.",activeViewTip:"Section. Active view {viewLabel}."};var a=function(e,t,o,n){return new(o||(o=Promise))((function(i,a){function l(e){try{s(n.next(e))}catch(e){a(e)}}function r(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(l,r)}s((n=n.apply(e,t||[])).next())}))};function s(){return a(this,void 0,void 0,(function*(){let e=(0,n.getAppStore)().getState().appContext.locale;return e=n.i18n.getLocaleToLoad(e,n.translatedLocales),e?yield n.i18n.loadLocaleMessages("jimu-layouts/lib/translations",e).then((e=>((0,n.getAppStore)().dispatch(n.appActions.i18nMessagesLoaded("jimu-layouts",e)),n.i18n.resetIntls(),e))):Promise.resolve(i)}))}const d=n.React.createContext({viewOnly:!0}),u=n.React.createContext(!0),c=n.React.createContext(!0),p=n.React.createContext({isInView:!1,isInCurrentView:!1}),g=(n.React.createContext(""),n.React.createContext({}));var y,v=l(4321);!function(e){e[e.BringForward=0]="BringForward",e[e.SendBackward=1]="SendBackward",e[e.BringToFront=2]="BringToFront",e[e.SendToBack=3]="SendToBack"}(y||(y={}));const h=12,f=28,m=16,I=16,x=5,w=3;var b,S;function C(e,t){var o,n,i;if(!t)return null;const{layoutId:a,layoutItemId:l}=t;return null===(i=null===(n=null===(o=e.layouts)||void 0===o?void 0:o[a])||void 0===n?void 0:n.content)||void 0===i?void 0:i[l]}function T(e,t,o){var i,a,l,r,s,d,u,c,p,g;const{layoutId:y}=e,v=t.layouts[y];switch(null===(i=null==v?void 0:v.parent)||void 0===i?void 0:i.type){case n.LayoutParentType.View:{const e=t.views[v.parent.id],n=t.sections[e.parent];return 1===(null===(l=null===(a=null==n?void 0:n.parent)||void 0===a?void 0:a[o])||void 0===l?void 0:l.length)?n.parent[o][0]:(null===(s=null===(r=null==n?void 0:n.parent)||void 0===r?void 0:r[o])||void 0===s?void 0:s.length)>1?T(n.parent[o][0],t,o):null}case n.LayoutParentType.Widget:{const e=t.widgets[v.parent.id];return 1===(null===(u=null===(d=null==e?void 0:e.parent)||void 0===d?void 0:d[o])||void 0===u?void 0:u.length)?e.parent[o][0]:(null===(p=null===(c=null==e?void 0:e.parent)||void 0===c?void 0:c[o])||void 0===p?void 0:p.length)>1?T(e.parent[o][0],t,o):null}case n.LayoutParentType.Screen:{const e=t.screens[v.parent.id];return null===(g=t.screenGroups[e.parent].parent)||void 0===g?void 0:g[o]}default:return null}}function R(e){switch(e.type){case n.LayoutItemType.Widget:return"string"==typeof e.widgetId?e.widgetId:null;case n.LayoutItemType.Section:return"string"==typeof e.sectionId?e.sectionId:null;case n.LayoutItemType.ScreenGroup:return"string"==typeof e.screenGroupId?e.screenGroupId:null;default:return null}}function j(e,t,o=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter((n=>e.content[n].type===t&&!!R(e.content[n])&&(o||!e.content[n].isPending))).map((t=>R(e.content[t]))):[]}function P(e,t,o,i,a=!1){let l=[];const r=j(e.layouts[t],n.LayoutItemType.Widget,a),s=j(e.layouts[t],n.LayoutItemType.Section,a),d=j(e.layouts[t],n.LayoutItemType.ScreenGroup,a);o===n.LayoutItemType.Widget?l=l.concat(r):o===n.LayoutItemType.Section?l=l.concat(s):o===n.LayoutItemType.ScreenGroup&&(l=l.concat(d));return r.filter((t=>{var o,i,a,l,r;return(null===(i=null===(o=e.widgets[t])||void 0===o?void 0:o.manifest)||void 0===i?void 0:i.widgetType)===n.WidgetType.Layout||(null===(r=null===(l=null===(a=e.widgets[t])||void 0===a?void 0:a.manifest)||void 0===l?void 0:l.properties)||void 0===r?void 0:r.hasEmbeddedLayout)})).forEach((t=>{var n;Object.keys(null!==(n=e.widgets[t].layouts)&&void 0!==n?n:{}).forEach((n=>{const r=H(e.widgets[t].layouts[n],i,e.mainSizeMode);l=l.concat(P(e,r,o,i,a))}))})),s.forEach((t=>{var n,r;null===(r=null===(n=e.sections)||void 0===n?void 0:n[t])||void 0===r||r.views.forEach((t=>{const n=H(e.views[t].layout,i,e.mainSizeMode);e.views[t]&&n&&(l=l.concat(P(e,n,o,i,a)))}))})),d.forEach((t=>{var n,r;null===(r=null===(n=e.screenGroups)||void 0===n?void 0:n[t])||void 0===r||r.screens.forEach((t=>{var n,r,s,d,u;const c=H(null===(r=null===(n=e.screens)||void 0===n?void 0:n[t])||void 0===r?void 0:r.main.layout,i,e.mainSizeMode);c&&(l=l.concat(P(e,c,o,i,a)));const p=H(null===(u=null===(d=null===(s=e.screens)||void 0===s?void 0:s[t])||void 0===d?void 0:d.panel)||void 0===u?void 0:u.layout,i,e.mainSizeMode);p&&(l=l.concat(P(e,p,o,i,a)))}))})),l}function $(e,t,o,i,a=!1){let l=[];const r=j(e.layouts[t],n.LayoutItemType.Widget,a),s=j(e.layouts[t],n.LayoutItemType.Section,a),d=j(e.layouts[t],n.LayoutItemType.ScreenGroup,a);l=o===n.LayoutItemType.Widget?l.concat(r):o===n.LayoutItemType.ScreenGroup?l.concat(d):l.concat(s);return r.filter((t=>e.widgets&&e.widgets[t]&&(e.widgets[t].manifest.widgetType===n.WidgetType.Layout||e.widgets[t].manifest.properties.hasEmbeddedLayout))).forEach((t=>{var n;Object.keys(null!==(n=e.widgets[t].layouts)&&void 0!==n?n:{}).forEach((n=>{const r=H(e.widgets[t].layouts[n],i,e.mainSizeMode);l=l.concat($(e,r,o,i,a))}))})),l}function M(e,t,o){if(!(null==e?void 0:e.content))return null;const n=Object.keys(e.content).find((n=>e.content[n].type===o&&(e.content[n].widgetId===t||e.content[n].sectionId===t||e.content[n].screenGroupId===t)&&!e.content[n].isPending));return e.content[n]}function L(e,t,o=!1){const n=e.layouts[t];return(null==n?void 0:n.content)?o?Object.keys(n.content):Object.keys(n.content).filter((e=>!n.content[e].isPending)):[]}function O(e,t,o=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter((n=>e.content[n].type===t&&!!R(e.content[n])&&(o||!e.content[n].isPending))).map((t=>({layoutId:e.id,layoutItemId:t}))):[]}function k(e,t){var o;const i=e.layouts[t];return(null===(o=null==i?void 0:i.parent)||void 0===o?void 0:o.type)===n.LayoutParentType.Widget?i.parent.id:null}function A(e,t,o,i,a=!1){var l;const r=W(e,t,o,i,a);if(r){const t=e.layouts[r.layoutId];switch(null===(l=t.parent)||void 0===l?void 0:l.type){case n.LayoutParentType.Page:return{type:n.ContainerType.Page,id:t.parent.id};case n.LayoutParentType.Dialog:return{type:n.ContainerType.Dialog,id:t.parent.id};case n.LayoutParentType.Header:return{type:n.ContainerType.Header,id:"header"};case n.LayoutParentType.Footer:return{type:n.ContainerType.Footer,id:"footer"};case n.LayoutParentType.View:return{type:n.ContainerType.View,id:t.parent.id};case n.LayoutParentType.Screen:return{type:e.screens[t.parent.id].main.layout[i]===r.layoutId?n.ContainerType.ScreenMain:n.ContainerType.ScreenPanel,id:t.parent.id};case n.LayoutParentType.Widget:return A(e,t.parent.id,o,i,a)}}return null}function E(e,t,o,n,i=!1){let a=W(e,t,o,n,i),l=n;if(a||(a=W(e,t,o,e.mainSizeMode,i),l=e.mainSizeMode),a)return N(e,a.layoutId,l)}function N(e,t,o){var i;let a=e.layouts[t];for(;(null==a?void 0:a.parent)&&[n.LayoutParentType.Screen,n.LayoutParentType.View,n.LayoutParentType.Widget].includes(a.parent.type);){const n=T({layoutId:t},e,o);t=null==n?void 0:n.layoutId,a=e.layouts[t]}switch(null===(i=null==a?void 0:a.parent)||void 0===i?void 0:i.type){case n.LayoutParentType.Dialog:return{type:n.ContainerType.Dialog,id:a.parent.id};case n.LayoutParentType.Page:return{type:n.ContainerType.Page,id:a.parent.id};case n.LayoutParentType.Header:return{type:n.ContainerType.Header,id:"header"};case n.LayoutParentType.Footer:return{type:n.ContainerType.Footer,id:"footer"}}}function z(e,t,o,i,a=!1){var l,r,s,d,u,c;let p;switch(t.type){case n.ContainerType.Page:return p=H(null===(r=null===(l=e.pages)||void 0===l?void 0:l[t.id])||void 0===r?void 0:r.layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.Header:return p=H(null===(s=e.header)||void 0===s?void 0:s.layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.Footer:return p=H(null===(d=e.footer)||void 0===d?void 0:d.layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.View:return p=H(null===(c=null===(u=e.views)||void 0===u?void 0:u[t.id])||void 0===c?void 0:c.layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.Dialog:return p=H(e.dialogs[t.id].layout,i,e.mainSizeMode),p?$(e,p,o,i,a):[];case n.ContainerType.ScreenMain:case n.ContainerType.ScreenPanel:if(!e.screens||!e.screens[t.id])return[];const g=H(e.screens[t.id].main.layout,i,e.mainSizeMode);if(!g)return[];const y=$(e,g,o,i,a);if(e.screens[t.id].panel){const n=$(e,H(e.screens[t.id].panel.layout,i,e.mainSizeMode),o,i,a);return y.concat(n)}return y}}function B(e,t,o,i,a=!1){var l,r,s,d,u,c;let p;switch(t.type){case n.ContainerType.Page:return p=H(null===(r=null===(l=e.pages)||void 0===l?void 0:l[t.id])||void 0===r?void 0:r.layout,i,e.mainSizeMode),p?P(e,p,o,i,a):[];case n.ContainerType.Header:return p=H(null===(s=e.header)||void 0===s?void 0:s.layout,i,e.mainSizeMode),p?P(e,p,o,i,a):[];case n.ContainerType.Footer:return p=H(null===(d=e.footer)||void 0===d?void 0:d.layout,i,e.mainSizeMode),p?P(e,p,o,i,a):[];case n.ContainerType.View:return p=H(null===(c=null===(u=e.views)||void 0===u?void 0:u[t.id])||void 0===c?void 0:c.layout,i,e.mainSizeMode),p?P(e,p,o,i,a):[];case n.ContainerType.Dialog:return p=H(e.dialogs[t.id].layout,i,e.mainSizeMode),p?P(e,p,o,i,a):[];case n.ContainerType.ScreenMain:case n.ContainerType.ScreenPanel:if(!e.screens||!e.screens[t.id])return[];const g=H(e.screens[t.id].main.layout,i,e.mainSizeMode);if(!g)return[];const y=P(e,g,o,i);if(e.screens[t.id].panel){const n=P(e,H(e.screens[t.id].panel.layout,i,e.mainSizeMode),o,i);return y.concat(n)}return y}}function F(e,t,o,i,a){const l=t=>{let l=[];return l=a.includeOtherSizeMode?l.concat(B(e,t,o,n.BrowserSizeMode.Large,a.includePending),B(e,t,o,n.BrowserSizeMode.Medium,a.includePending),B(e,t,o,n.BrowserSizeMode.Small,a.includePending)):B(e,t,o,i,a.includePending),l=Array.from(new Set(l)),l};if(t.type===n.ContainerType.Dialog)return l(t);if(t.type===n.ContainerType.Page){const o=e.pages[t.id];let i=l(t);return o.header&&(i=i.concat(l({type:n.ContainerType.Header,id:"header"}))),o.footer&&(i=i.concat(l({type:n.ContainerType.Footer,id:"footer"}))),i=Array.from(new Set(i)),i}if(t.type===n.ContainerType.Header){const o=e.pages[a.currentPageId];let i=l(t).concat(l({type:n.ContainerType.Page,id:a.currentPageId}));return(null==o?void 0:o.footer)&&(i=i.concat(l({type:n.ContainerType.Footer,id:"footer"}))),i=Array.from(new Set(i)),i}if(t.type===n.ContainerType.Footer){const o=e.pages[a.currentPageId];let i=l(t).concat(l({type:n.ContainerType.Page,id:a.currentPageId}));return(null==o?void 0:o.header)&&(i=i.concat(l({type:n.ContainerType.Header,id:"header"}))),i=Array.from(new Set(i)),i}}function H(e,t,o){return e?e[t]||e[o]:null}function W(e,t,o,i,a=!0){var l,r,s,d,u;switch(o){case n.LayoutItemType.ScreenGroup:{const o=null===(l=e.screenGroups[t].parent)||void 0===l?void 0:l[i],n=C(e,o);return a||!(null==n?void 0:n.isPending)?o:null}case n.LayoutItemType.Section:case n.LayoutItemType.Widget:{let l;if(o===n.LayoutItemType.Widget&&(l=e.widgets[t]),o===n.LayoutItemType.Section&&(l=e.sections[t]),1===(null===(s=null===(r=null==l?void 0:l.parent)||void 0===r?void 0:r[i])||void 0===s?void 0:s.length)){const t=l.parent[i][0],o=C(e,t);return a||!(null==o?void 0:o.isPending)?t:null}if((null===(u=null===(d=null==l?void 0:l.parent)||void 0===d?void 0:d[i])||void 0===u?void 0:u.length)>1){const t=l.parent[i][0],o=e.layouts[t.layoutId];if(null==o?void 0:o.parent)return W(e,o.parent.id,n.LayoutItemType.Widget,i,a)}}}return null}function V(e,t,o,i){switch(t){case n.LayoutItemType.ScreenGroup:{const t=e.screenGroups[o];if(t.parent)return i?[t.parent[i]]:Object.values(t.parent)}case n.LayoutItemType.Section:case n.LayoutItemType.Widget:{let a;if(t===n.LayoutItemType.Widget&&(a=e.widgets[o]),t===n.LayoutItemType.Section&&(a=e.sections[o]),null==a?void 0:a.parent){if(i)return a.parent[i];const e=[];return Object.values(a.parent).forEach((t=>{e.push(...t)})),e}}}return[]}function D(e,t,o,i){var a,l,r,s,d,u,c;let p;if(o===n.LayoutItemType.Widget){const o=e.widgets[t];p=null===(r=null===(l=null===(a=null==o?void 0:o.parent)||void 0===a?void 0:a[i])||void 0===l?void 0:l[0])||void 0===r?void 0:r.layoutId}if(o===n.LayoutItemType.Section){const o=e.sections[t];p=null===(u=null===(d=null===(s=null==o?void 0:o.parent)||void 0===s?void 0:s[i])||void 0===d?void 0:d[0])||void 0===u?void 0:u.layoutId}if(p){const t=e.layouts[p];if((null===(c=null==t?void 0:t.parent)||void 0===c?void 0:c.type)===n.LayoutParentType.Widget)return t.parent.id}return null}function G(e,t,o,n){const i=e.widgets[t];if(!i.layouts)return[];let a=[];return Object.keys(i.layouts).forEach((t=>{Object.keys(i.layouts[t]).forEach((l=>{const r=e.layouts[i.layouts[t][l]];a=a.concat(j(r,o,n))}))})),Array.from(new Set(a))}function U(e,t,o,i){var a,l,r;switch(o){case n.LayoutItemType.ScreenGroup:{const o=e.screenGroups[t];if(null===(a=o.parent)||void 0===a?void 0:a[i])return[o.parent[i]]}case n.LayoutItemType.Section:case n.LayoutItemType.Widget:{let a;if(o===n.LayoutItemType.Widget&&(a=e.widgets[t]),o===n.LayoutItemType.Section&&(a=e.sections[t]),(null===(r=null===(l=null==a?void 0:a.parent)||void 0===l?void 0:l[i])||void 0===r?void 0:r.length)>0)return a.parent[i]}}return[]}function _(e,t,o){const n=e.widgets[o];if(!n)return;let i;return Object.keys(n.layouts).find((e=>{if(Object.keys(n.layouts[e]).find((o=>{if(n.layouts[e][o]===t)return i=o,!0})))return!0})),i}function X(e,t){return n.appConfigUtils.getSizeModeOfALayout(e,t)}function Y(e,t,o,i){if(!e.widgets[o])return[];const a=e.layouts[t.layoutId]&&e.layouts[t.layoutId].content&&e.layouts[t.layoutId].content[t.layoutItemId];if(!a)return[];const l=a.type;let r;return l===n.LayoutItemType.Section?r=a.sectionId:l===n.LayoutItemType.Widget&&(r=a.widgetId),r?q(e,r,l,o,i):function(e,t,o){const n=e.widgets[t];if(!n)return!1;let i=!1;return n.layouts&&Object.keys(n.layouts).some((t=>Object.keys(n.layouts[t]).some((a=>{const l=n.layouts[t][a];return L(e,l,!0).some((e=>o.layoutId===l&&o.layoutItemId===e&&(i=!0,!0)))})))),i}(e,o,t)?[t]:[]}function J(e,t,o,n){return Y(e,t,o,n).map((t=>e.layouts[t.layoutId][t.layoutItemId]))}function q(e,t,o,i,a){const l=e.widgets[i];if(!l||!t)return[];const r=[];return l.layouts&&Object.keys(l.layouts).forEach((i=>{const s=l.layouts[i][a],d=e.layouts[s];d&&d.content&&Object.keys(d.content).forEach((i=>{const l=d.content[i];if(l.type!==o||l.widgetId!==t&&l.sectionId!==t&&l.screenGroupId!==t){if(l.type===n.LayoutItemType.Widget){const i=e.widgets[l.widgetId];i&&i.manifest.widgetType===n.WidgetType.Layout&&r.push(...q(e,t,o,i.id,a))}}else r.push({layoutId:d.id,layoutItemId:l.id})}))})),r}function Z(e,t,o,n,i,a=!1){const l=A(e,t,o,i,a);return l?z(e,l,n,i,a):[]}function K(e,t,o,n,i,a=!1){const l=E(e,t,o,i,a);return l?B(e,l,n,i,a):[]}function Q(e,t,o){var i,a;const l=e.pages[t],r=null===(i=null==l?void 0:l.layout)||void 0===i?void 0:i[o],s=e.layouts[r],d=[];return(null==s?void 0:s.type)===n.LayoutType.FlowLayout&&Object.keys(null!==(a=s.content)&&void 0!==a?a:{}).sort().forEach((t=>{var o;const i=s.content[t];if(!i.isPending&&!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&i.type===n.LayoutItemType.Widget){const o=function(e,t){const{layoutId:o,layoutItemId:n}=t,i=e.layouts[o].content[n],a=e.widgets[i.widgetId];if(a)return{label:a.label,id:`${o}_block_${n}`};return null}(e,{layoutId:r,layoutItemId:t});o&&d.push(o)}})),d}function ee(e,t,o){var i,a;const l=e.pages[t],r=null===(i=null==l?void 0:l.layout)||void 0===i?void 0:i[o],s=e.layouts[r],d=[];return(null==s?void 0:s.type)===n.LayoutType.FlowLayout&&Object.keys(null!==(a=s.content)&&void 0!==a?a:{}).sort().forEach((t=>{var o;const i=s.content[t];if(!i.isPending&&!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&i.type===n.LayoutItemType.ScreenGroup){const t=e.screenGroups[i.screenGroupId],o=[];null==t||t.screens.forEach((t=>{const n=function(e,t,o){const n=e.screens[o];if(n)return{label:n.label,id:`${t}_screen_${o}`};return null}(e,r,t);n&&o.push(n)})),d.push({id:t.id,label:t.label,screens:o})}})),d}function te(e,t,o,i){const a=[],l={id:i,type:o,maps:F(e,{type:o,id:i},n.LayoutItemType.Widget,t,{includePending:!1,includeOtherSizeMode:!1}).filter((t=>e.widgets[t].manifest.properties.canCreateMapView))};return a.push(l),Object.keys(e.pages).forEach((o=>{if(o===i)return;const l={id:o,type:n.ContainerType.Page,maps:B(e,{id:o,type:n.ContainerType.Page},n.LayoutItemType.Widget,t).filter((t=>e.widgets[t].manifest.properties.canCreateMapView))};a.push(l)})),Object.keys(e.dialogs||{}).forEach((o=>{if(o===i)return;const l={id:o,type:n.ContainerType.Dialog,maps:B(e,{id:o,type:n.ContainerType.Dialog},n.LayoutItemType.Widget,t).filter((t=>e.widgets[t].manifest.properties.canCreateMapView))};a.push(l)})),a}!function(e){e.Auto="auto",e[e.Normal=0]="Normal",e[e.BoundaryDropArea=10]="BoundaryDropArea",e[e.DragMoveTip=20]="DragMoveTip",e[e.HandlerTools=30]="HandlerTools",e[e.DraggingItem=40]="DraggingItem"}(b||(b={})),function(e){e.Auto="AUTO",e.Stretch="STRETCH",e.Custom="CUSTOM"}(S||(S={}));const oe=()=>{};function ne(e,t){t.forEach((t=>{e[t]&&(e[t]=e[t].bind(e))}))}function ie(e){let t=-1;return e.content&&Object.keys(e.content).forEach((e=>{const o=parseInt(e,10);o>t&&(t=o)})),t}function ae(e){return/^-?\d*(\.\d+)?%$/.test(e)}function le(e){var t;const o=Object.keys(null!==(t=e.content)&&void 0!==t?t:{});if(0===o.length)return!0;return!o.some((t=>!e.content[t].isPending))}function re(e){const t=parseFloat(e);return!isNaN(t)&&isFinite(t)}function se(e,t){return null==(null==e?void 0:e[t])?null:"string"==typeof e[t]?e[t]:re(e[t])?`${Math.round(parseFloat(e[t]))}px`:null}function de(e,t){return`${(100*e/t).toFixed(1)}%`}function ue(e,t){return parseFloat(`${e}`)*t/100}const ce=(0,n.createSelector)([e=>e.appConfig.mainSizeMode,e=>e.browserSizeMode,(e,t)=>{var o,i,a,l,r;let s;if(e.browserSizeMode===e.appConfig.mainSizeMode)s=!0;else{let l;(null===(o=t.layouts)||void 0===o?void 0:o[e.browserSizeMode])?l=e.browserSizeMode:(null===(i=t.layouts)||void 0===i?void 0:i[e.appConfig.mainSizeMode])&&(l=e.appConfig.mainSizeMode);const r=null===(a=t.layouts)||void 0===a?void 0:a[l],d=N(e.appConfig,r,l);if((null==d?void 0:d.type)===n.ContainerType.Header)s=null!=e.appConfig.header.layout[e.browserSizeMode];else if((null==d?void 0:d.type)===n.ContainerType.Footer)s=null!=e.appConfig.footer.layout[e.browserSizeMode];else if((null==d?void 0:d.type)===n.ContainerType.Dialog){s=null!=e.appConfig.dialogs[d.id].layout[e.browserSizeMode]}else if((null==d?void 0:d.type)===n.ContainerType.Page){s=null!=e.appConfig.pages[d.id].layout[e.browserSizeMode]}}if(s&&(null===(l=t.layouts)||void 0===l?void 0:l[e.browserSizeMode])){const o=t.layouts[e.browserSizeMode];return e.appConfig.layouts[o]}const d=null===(r=t.layouts)||void 0===r?void 0:r[e.appConfig.mainSizeMode];return e.appConfig.layouts[d]}],((e,t,o)=>({mainSizeMode:e,browserSizeMode:t,layout:o}))),pe=(0,n.createSelector)([(e,t)=>{var o,n,i;const{layoutId:a,layoutItemId:l}=t;return null===(i=null===(n=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[a])||void 0===n?void 0:n.content)||void 0===i?void 0:i[l]},(e,t)=>{var o,i,a,l,r,s;const{layoutId:d,layoutItemId:u}=t,c=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[d])||void 0===i?void 0:i.content)||void 0===a?void 0:a[u];if((null==c?void 0:c.type)===n.LayoutItemType.Widget&&c.widgetId){const t=e.appConfig.widgets[c.widgetId];return null!==(s=null===(r=null===(l=null==t?void 0:t.manifest)||void 0===l?void 0:l.properties)||void 0===r?void 0:r.watchViewportVisibility)&&void 0!==s&&s}return!1},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.selection},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.animationPreview},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.hoverPreview},(e,t)=>t.layoutId],((e,t,o,n,i,a)=>{var l;if(!e)return{layoutItem:null,selected:!1};let r=!1;const s=null!==(l=e.isPending)&&void 0!==l&&l;o&&(r=o.layoutId===a&&o.layoutItemId===e.id);const d={selected:r,watchViewportVisibility:t,layoutItem:s?null:e,autoScroll:r?o.autoScroll:void 0};if(r&&(null==n?void 0:n.layoutInfo)){const{layoutId:t,layoutItemId:o}=n.layoutInfo;d.animationPreview=t===a&&o===e.id,d.playMode=d.animationPreview?n.playMode:null,d.previewId=d.animationPreview?n.id:null}else if(r&&(null==i?void 0:i.layoutInfo)){const{layoutId:t,layoutItemId:o}=i.layoutInfo;d.hoverPreview=t===a&&o===e.id,d.previewId=d.hoverPreview?i.id:null}return d})),ge=(0,n.createSelector)([(e,t)=>{var o,i,a;const{layoutId:l,layoutItemId:r}=t,s=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[l])||void 0===i?void 0:i.content)||void 0===a?void 0:a[r];if((null==s?void 0:s.type)===n.LayoutItemType.Widget&&s.widgetId)return e.appConfig.widgets[s.widgetId]},(e,t)=>{var o,i,a,l;const{layoutId:r,layoutItemId:s}=t,d=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[r])||void 0===i?void 0:i.content)||void 0===a?void 0:a[s];if((null==d?void 0:d.type)===n.LayoutItemType.Widget&&!d.widgetId)return null===(l=d.setting)||void 0===l?void 0:l.placeholderStyle},(e,t)=>{var o,i,a;const{layoutId:l,layoutItemId:r}=t,s=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[l])||void 0===i?void 0:i.content)||void 0===a?void 0:a[r];if((null==s?void 0:s.type)===n.LayoutItemType.Widget&&s.widgetId)return e.widgetsRuntimeInfo[s.widgetId]},(e,t)=>{var o,i,a;const{layoutId:l,layoutItemId:r}=t,s=null===(a=null===(i=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[l])||void 0===i?void 0:i.content)||void 0===a?void 0:a[r];if((null==s?void 0:s.type)===n.LayoutItemType.Widget&&!s.widgetId)return e.widgetsState[s.widgetId]},(e,t)=>{var o,i;const{layoutId:a}=t,l=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[a];if((null===(i=l.parent)||void 0===i?void 0:i.type)===n.LayoutParentType.Widget){const t=l.parent.id,o=e.appConfig.widgets[t];return/widgets\/common\/controller\/?/.test(o.uri)}return!1}],((e,t,o,i,a)=>{var l,r,s,d,u,c,p,g,y,v,h,f,m,I,x,w;const b=null===(r=null===(l=null==e?void 0:e.manifest)||void 0===l?void 0:l.properties)||void 0===r?void 0:r.supportInlineEditing;return{hasEmbeddedLayout:(null===(d=null===(s=null==e?void 0:e.manifest)||void 0===s?void 0:s.properties)||void 0===d?void 0:d.hasEmbeddedLayout)&&Object.keys(null!==(u=e.layouts)&&void 0!==u?u:{}).length>0,supportInlineEditing:b,supportRepeat:null===(p=null===(c=null==e?void 0:e.manifest)||void 0===c?void 0:c.properties)||void 0===p?void 0:p.supportRepeat,isClassLoaded:null!==(g=null==o?void 0:o.isClassLoaded)&&void 0!==g&&g,isInlineEditing:b&&(null==o?void 0:o.isInlineEditing),isInController:a,useDragHandler:null!==(h=null===(v=null===(y=null==e?void 0:e.manifest)||void 0===y?void 0:y.properties)||void 0===v?void 0:v.useDragHandler)&&void 0!==h&&h,widgetStyle:null!=e?e.style:t,canCrossLayoutBoundary:null===(m=null===(f=null==e?void 0:e.manifest)||void 0===f?void 0:f.properties)||void 0===m?void 0:m.canCrossLayoutBoundary,hasExtension:(null===(x=null===(I=null==e?void 0:e.manifest)||void 0===I?void 0:I.extensions)||void 0===x?void 0:x.length)>0,widgetJson:e,widgetId:null==e?void 0:e.id,isFunctionalWidget:(null===(w=null==e?void 0:e.manifest)||void 0===w?void 0:w.widgetType)!==n.WidgetType.Layout,widgetState:i}}));function ye(e,t){var o,n,i,a;const l=null===(o=null==t?void 0:t.widgets)||void 0===o?void 0:o[e];return!!(null===(i=null===(n=null==l?void 0:l.manifest)||void 0===n?void 0:n.properties)||void 0===i?void 0:i.hasEmbeddedLayout)&&Object.keys(null!==(a=null==l?void 0:l.layouts)&&void 0!==a?a:{}).length>0}function ve(e,t){var o,i;const a=null===(o=null==t?void 0:t.widgets)||void 0===o?void 0:o[e];return(null===(i=null==a?void 0:a.manifest)||void 0===i?void 0:i.widgetType)!==n.WidgetType.Layout}function he(e,t){var o,i;if(!t||t.itemType!==n.LayoutItemType.Widget)return!1;if(t.layoutInfo){const{layoutId:n,layoutItemId:a}=t.layoutInfo,l=null===(i=null===(o=e.layouts)||void 0===o?void 0:o[n].content)||void 0===i?void 0:i[a];if(l&&!l.widgetId)return!0}return!t.layoutInfo&&!t.uri}function fe(e,t,o){if(!e)return(0,n.Immutable)({left:ae(t.left)?t.left:`${Math.round(t.left)}px`,right:ae(t.right)?t.right:`${Math.round(t.right)}px`,top:ae(t.top)?t.top:`${Math.round(t.top)}px`,bottom:ae(t.bottom)?t.bottom:`${Math.round(t.bottom)}px`,width:ae(t.width)?t.width:`${Math.round(t.width)}px`,height:ae(t.height)?t.height:`${Math.round(t.height)}px`});let i=e;return["left","right","top","bottom","width","height"].forEach((e=>{null!=i[e]?i=me(e,i,t[e],o):null!=t[e]&&(i=i.set(e,`${Math.round(t[e])}px`))})),i}function me(e,t,o,n){if(null==t[e]||"auto"===t[e])return t;let i=t;return i=ae(t[e])?"left"===e||"right"===e||"width"===e?ae(o)?t.set(e,o):t.set(e,`${(100*+o/n.width).toFixed(4)}%`):ae(o)?t.set(e,o):t.set(e,`${(100*+o/n.height).toFixed(4)}%`):ae(o)?"left"===e||"right"===e||"width"===e?t.set(e,Math.round(parseFloat(`${o}`)*n.width/100)):t.set(e,Math.round(parseFloat(`${o}`)*n.height/100)):isNaN(+o)?t.without(e):t.set(e,`${Math.round(+o)}px`),i}function Ie(e,t){return{left:e.left-t.left,top:e.top-t.top,right:e.right,bottom:e.bottom,width:e.width,height:e.height,id:null}}function xe(){var e,t;return null!==(t=null===(e=(0,n.getAppStore)().getState().appContext)||void 0===e?void 0:e.isRTL)&&void 0!==t&&t}function we(e){let t=100,o=100;if("number"==typeof e)t=100,o=Math.round(100*e);else if("string"==typeof e){const n=e.split(":");t=parseInt(n[0],10),o=parseInt(n[1],10)}return t/o}function be(e){return e&&0!==e.length?1===e.length?[e[0],e[0],e[0],e[0]]:2===e.length?[e[0],e[1],e[0],e[1]]:3===e.length?[e[0],e[1],e[2],0]:[e[0],e[1],e[2],e[3]]:[0,0,0,0]}function Se(e,t){var o,n,i,a;const l=null!==(o=t.setting)&&void 0!==o?o:{},r=Ne("height",t.bbox,l.autoProps);let s;if("ratio"===l.heightMode)s={setting:{heightMode:"ratio",aspectRatio:null!==(n=l.aspectRatio)&&void 0!==n?n:1,autoProps:{height:S.Custom}}};else{if(r!==S.Custom)return{height:r===S.Stretch?e:null,setting:{autoProps:{height:r}}};{let o=null!==(a=null===(i=t.bbox)||void 0===i?void 0:i.height)&&void 0!==a?a:e;o=ae(o)?ue(o,e):parseInt(o),s={height:o,setting:{heightMode:"fixed",autoProps:{height:S.Custom}}}}}return s}function Ce(){var e;return window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig}function Te(){var e,t;return(null===(e=null===window||void 0===window?void 0:window.jimuConfig)||void 0===e?void 0:e.isBuilder)?null===(t=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.browserSizeMode:(0,n.getAppStore)().getState().browserSizeMode}function Re(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentPageId:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentPageId}function je(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentDialogId:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.currentDialogId}function Pe(){var e,t,o;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.activePagePart:null===(o=(0,n.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.activePagePart}function $e(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=je(),l=Te();return null===(o=null===(t=null==i?void 0:i.dialogs[a])||void 0===t?void 0:t.layout)||void 0===o?void 0:o[l]}function Me(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Re(),l=Te();return null===(o=null===(t=null==i?void 0:i.pages[a])||void 0===t?void 0:t.layout)||void 0===o?void 0:o[l]}function Le(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Te();return null===(o=null===(t=null==i?void 0:i.header)||void 0===t?void 0:t.layout)||void 0===o?void 0:o[a]}function Oe(){var e,t,o;const i=window.jimuConfig.isBuilder?null===(e=(0,n.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,n.getAppStore)().getState().appConfig,a=Te();return null===(o=null===(t=null==i?void 0:i.footer)||void 0===t?void 0:t.layout)||void 0===o?void 0:o[a]}function ke(e,t){return t.left>=e.left&&t.left+t.width<=e.left+e.width&&t.top>=e.top&&t.top+t.height<=e.top+e.height}function Ae(e,t){return!(t.left>e.left+e.width||t.left+t.width<e.left||t.top>e.top+e.height||t.top+t.height<e.top)}function Ee(e,t){var o,i,a;let l,r;if(null!=e&&"object"==typeof e)l=null!==(o=e.unit)&&void 0!==o?o:v.DistanceUnits.PIXEL,r=null!==(i=e.distance)&&void 0!==i?i:0;else{const t=n.polished.getValueAndUnit(e);l=null!==(a=null==t?void 0:t[1])&&void 0!==a?a:v.DistanceUnits.PIXEL,r=+(null==t?void 0:t[0])>=0?+t[0]:0}return t>=0||(t=l===v.DistanceUnits.PERCENTAGE?1:0),`${r.toFixed(t)}${l}`}function Ne(e,t,o){const n=null==o?void 0:o[e],i="width"===e?"left":"top",a="width"===e?"right":"bottom";if(!n)return null!=t[e]?S.Custom:null!=t[i]&&null!=t[a]?S.Stretch:S.Auto;if(!0===n)return null!=t[i]&&null!=t[a]?S.Stretch:S.Auto;switch(n){case S.Auto:return S.Auto;case S.Stretch:return S.Stretch;default:return S.Custom}}function ze(e){return"ratio"===e.heightMode&&null!=e.aspectRatio}function Be(e,t){let o=Math.max(e,t),n=Math.min(e,t);for(;0!==n;){const e=n;n=o%n,o=e}return o}function Fe(e){const{delay:t,isLastChild:o}=e;return{delay:t,isLastChild:o}}const He=n.lodash.assign({},{gridSize:1}),We=n.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}});function Ve(e,t){var o;const n=e.appConfig.sections[t];if(!n||!n.views)return null;const i=null===(o=e.appRuntimeInfo.sectionNavInfos)||void 0===o?void 0:o[n.id];let a;if(!i){const t=n.views[0];a=e.appConfig.views[t]}return{sectionId:t,navInfo:i,activeView:a,views:n.views,sectionStyle:n.style,transition:n.transition,autoPlay:n.autoPlay,interval:n.interval,loop:n.loop,focusable:n.focusable}}function De(e,t,o,i){const a=e.pages[t];return a?i===n.PagePart.Header?a.header&&e.header?Xe(e,e.header.layout[o],o):[]:i===n.PagePart.Footer?a.footer&&e.footer?Xe(e,e.footer.layout[o],o):[]:i===n.PagePart.Body?Xe(e,a.layout[o],o):[]:[]}function Ge(e,t,o,i){const a=e.pages[t];return a?i===n.PagePart.Header?a.header&&e.header?Ye(e,e.header.layout,o):[]:i===n.PagePart.Footer?a.footer&&e.footer?Ye(e,e.footer.layout,o):[]:i===n.PagePart.Body?Ye(e,a.layout,o):[]:[]}function Ue(e,t,o){const n=e.dialogs[t];return n?Xe(e,n.layout[o],o):[]}function _e(e,t,o){const n=e.dialogs[t];return n?Ye(e,n.layout,o):[]}function Xe(e,t,o){let i=[];O(e.layouts[t],n.LayoutItemType.Widget,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];n.isPending?i.push(t):e.widgets[n.widgetId].layouts&&Object.keys(e.widgets[n.widgetId].layouts).forEach((t=>{i=i.concat(Xe(e,e.widgets[n.widgetId].layouts[t][o],o))}))}));O(e.layouts[t],n.LayoutItemType.Section,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];n.isPending?i.push(t):e.sections[n.sectionId].views&&e.sections[n.sectionId].views.forEach((t=>{i=i.concat(Xe(e,e.views[t].layout[o],o))}))}));return O(e.layouts[t],n.LayoutItemType.ScreenGroup,!0).forEach((t=>{var n,a;const l=e.layouts[t.layoutId].content[t.layoutItemId];if(l.isPending)i.push(t);else{const t=l.screenGroupId;null===(a=null===(n=e.screenGroups)||void 0===n?void 0:n[t].screens)||void 0===a||a.forEach((t=>{const n=null==e?void 0:e.screens[t];n.main&&(i=i.concat(Xe(e,n.main.layout[o],o))),n.panel&&(i=i.concat(Xe(e,n.panel.layout[o],o)))}))}})),i}function Ye(e,t,o,i=null,a=null,l=null){const r=[];i||(i=P(e,t[o],n.LayoutItemType.Widget,o,!0)),a||(a=P(e,t[o],n.LayoutItemType.Section,o,!0)),l||(l=P(e,t[o],n.LayoutItemType.ScreenGroup,o,!0));return Object.keys(n.BrowserSizeMode).filter((e=>n.BrowserSizeMode[e]!==o)).map((e=>n.BrowserSizeMode[e])).forEach((s=>{O(e.layouts[t[s]],n.LayoutItemType.Widget,!0).forEach((t=>{var s;const d=e.layouts[t.layoutId].content[t.layoutItemId];(null===(s=e.widgets[d.widgetId].manifest)||void 0===s?void 0:s.widgetType)!==n.WidgetType.Layout&&i.indexOf(d.widgetId)<0?!Je(e,r,t)&&r.push(t):e.widgets[d.widgetId].layouts&&Object.keys(e.widgets[d.widgetId].layouts).forEach((t=>{Ye(e,e.widgets[d.widgetId].layouts[t],o,i,a,l).forEach((t=>{!Je(e,r,t)&&r.push(t)}))}))}));O(e.layouts[t[s]],n.LayoutItemType.Section,!0).forEach((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];a.indexOf(n.sectionId)<0?!Je(e,r,t)&&r.push(t):e.sections[n.sectionId].views&&e.sections[n.sectionId].views.forEach((t=>{Ye(e,e.views[t].layout,o,i,a,l).forEach((t=>{!Je(e,r,t)&&r.push(t)}))}))}));O(e.layouts[t[s]],n.LayoutItemType.ScreenGroup,!0).forEach((t=>{var n,s;const d=e.layouts[t.layoutId].content[t.layoutItemId];l.indexOf(d.screenGroupId)<0?!Je(e,r,t)&&r.push(t):(null===(s=null===(n=e.screenGroups)||void 0===n?void 0:n[d.screenGroupId])||void 0===s?void 0:s.screens)&&e.screenGroups[d.screenGroupId].screens.forEach((t=>{var n;const s=null===(n=e.screens)||void 0===n?void 0:n[t];(null==s?void 0:s.main)&&Ye(e,s.main.layout,o,i,a,l).forEach((t=>{!Je(e,r,t)&&r.push(t)})),(null==s?void 0:s.panel)&&Ye(e,s.panel.layout,o,i,a,l).forEach((t=>{!Je(e,r,t)&&r.push(t)}))}))}))})),r}function Je(e,t,o){const i=e.layouts[o.layoutId].content[o.layoutItemId];return!!t.find((t=>{const o=e.layouts[t.layoutId].content[t.layoutItemId];return o.type===i.type&&(o.type===n.LayoutItemType.Widget&&o.widgetId===i.widgetId||o.type===n.LayoutItemType.Section&&o.sectionId===i.sectionId)}))}var qe=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};class Ze extends n.React.PureComponent{constructor(e){super(e),this.onMouseDown=()=>{var e;if(this.props.widgetId){(null===(e=(0,n.getAppStore)().getState().widgetsRuntimeInfo[this.props.widgetId])||void 0===e?void 0:e.state)!==n.WidgetState.Active&&(0,n.getAppStore)().dispatch(n.appActions.activateWidget(this.props.widgetId))}},this.onMouseDown=this.onMouseDown.bind(this),this.ref=n.React.createRef(),this.state={error:null}}loadWidgetClass(){const{widgetId:e,isClassLoaded:t}=this.props;e&&!t&&n.WidgetManager.getInstance().loadWidgetClass(e).catch((e=>{console.log(e),this.setState({error:n.i18n.getIntl().formatMessage({id:"widgetLoadError"})})}))}componentDidMount(){this.loadWidgetClass()}componentDidUpdate(){this.loadWidgetClass()}renderWidgetContent(){const{widgetId:e,layoutId:t,layoutItemId:o,autoWidth:i,autoHeight:a,onInitResizeHandler:l,onInitDragHandler:r}=this.props;let s;return e&&(s=n.WidgetManager.getInstance().getWidgetClass(e)),this.state.error?(0,n.jsx)("div",{className:"widget-content"},this.state.error):(0,n.jsx)("div",{className:(0,n.classNames)("widget-content",{"d-none":!e})},s&&(0,n.jsx)(n.ErrorBoundary,null,(0,n.jsx)(s,{widgetId:e,layoutId:t,layoutItemId:o,autoWidth:i,autoHeight:a,onInitResizeHandler:l,onInitDragHandler:r})))}getStyle(){const{forceAspectRatio:e,aspectRatio:t}=this.props,o=n.css`
      -webkit-overflow-scrolling: touch;
    `;return n.css`
      ${"app-loader"===this.props.widgetId?o:""};
      overflow: ${this.props.canCrossLayoutBoundary?"visible":"hidden"};
      position: relative;
      aspect-ratio: ${e&&t>0?t:null};

      .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }
    `}render(){var e,t;const{className:o,widgetStyle:i,widgetId:a,rotate:l}=this.props,r=v.styleUtils.toCSSStyle(i),{transform:s}=r,d=qe(r,["transform"]),u=l>0||l<0?`rotateZ(${l}deg)`:"";let c=u;return s&&(c=`${s} ${u}`),(0,n.jsx)("div",{className:(0,n.classNames)(`widget-renderer layout-item-content w-100 ${null!==(t=null===(e=null==i?void 0:i.boxShadow)||void 0===e?void 0:e.presetStyle)&&void 0!==t?t:""}`,o),css:this.getStyle(),style:Object.assign(Object.assign({},d),{transform:c}),onMouseDownCapture:this.onMouseDown,"data-widgetid":a,ref:this.ref},this.renderWidgetContent(),this.props.children)}}const Ke=n.ReactRedux.connect(ge)(Ze),Qe={},et={};function tt(e,t){Qe[e]=t}function ot(e,t){et[e]=t}function nt(e){return Qe[e]}function it(e){return et[e]}class at extends n.React.PureComponent{render(){const{layout:e}=this.props;if(!e)return null;const t=it(e.type||n.LayoutType.FlowLayout);return t?n.React.createElement(t,Object.assign({},this.props)):null}}const lt=n.ReactRedux.connect(ce)(at);var rt=l(1888);function st(e,t){if(!e)return null;let o={};e.backgroundIMage&&(o="string"==typeof e.backgroundIMage?{}:e.backgroundIMage);const n=e.backgroundPosition?v.FillType[e.backgroundPosition.toUpperCase()]:v.FillType.FILL;let i;i=null==e.backgroundColor?t:""===e.backgroundColor?"transparent":e.backgroundColor?e.backgroundColor:"";const a={color:i,fillType:n,image:o};return v.styleUtils.toBackgroundStyle(a)}function dt(e){var t,o;const{viewId:i,isActive:a,layoutEntryComponent:l,viewVisibilityContext:r}=e,s=n.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=e.appConfig)||void 0===t?void 0:t.views)||void 0===o?void 0:o[i]})),d=null===(o=null===(t=(0,rt.useTheme)())||void 0===t?void 0:t.body)||void 0===o?void 0:o.bg,u=l,c=r,[p,g]=n.React.useState(!1),y=n.React.useMemo((()=>({isInView:!0,isInCurrentView:a})),[a]);return n.React.useEffect((()=>{a&&s.lazyLoad&&!p&&g(!0)}),[a,s.lazyLoad,p]),(0,n.jsx)("div",{className:(0,n.classNames)("w-100 h-100 d-flex section-view",{[v.FOCUSABLE_CONTAINER_CLASS]:a}),style:st(s,d),css:n.css`&, .exb-drop-area { pointer-events: ${a?"auto":"none"}; }`,key:i,id:`${s.parent}_${s.id}`},(p||!s.lazyLoad)&&(0,n.jsx)(n.ErrorBoundary,null,(0,n.jsx)(c.Provider,{value:y},(0,n.jsx)(u,{layouts:null==s?void 0:s.layout,isInSection:!0,className:"w-100"}))))}function ut(e){var t,o;const{views:i,navInfo:a,animationPreview:l,playMode:r,currentIndex:s,previousIndex:d,progress:u,loop:c,viewTransition:p}=e,g=l&&r===n.AnimationPlayMode.OneByOne,{setting:y,playId:v}=n.React.useContext(n.AnimationContext),h=n.ReactRedux.useSelector((e=>{var t;return!y||y.type===n.AnimationType.None||(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===n.AppMode.Design})),f=!h||g||(null==a?void 0:a.playId)&&(null==a?void 0:a.withOneByOne)?y:null,m=n.React.useMemo((()=>({setting:f,playId:g?v:null})),[f,g,v]);return(0,n.jsx)(n.AnimationContext.Provider,{value:m},(0,n.jsx)("div",{className:"section-content"},(0,n.jsx)(n.TransitionContainer,{useProgress:null!==(t=null==a?void 0:a.useProgress)&&void 0!==t&&t,useStep:null!==(o=null==a?void 0:a.useStep)&&void 0!==o&&o,previousIndex:d,currentIndex:s,progress:u,transitionType:null==p?void 0:p.type,direction:null==p?void 0:p.direction,playId:null==a?void 0:a.playId,withOneByOne:null==a?void 0:a.withOneByOne,loop:c},i.map((t=>{const o=t===i[s];return(0,n.jsx)(dt,{key:t,viewId:t,isActive:o,layoutEntryComponent:e.layoutEntryComponent,viewVisibilityContext:e.viewVisibilityContext})})))))}var ct=l(7568),pt=l.n(ct),gt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const yt=e=>{const t=window.SVG,{className:o}=e,i=gt(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:pt()},i)):n.React.createElement("svg",Object.assign({className:a},i))};var vt=l(2943),ht=l.n(vt),ft=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const mt=e=>{const t=window.SVG,{className:o}=e,i=ft(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:ht()},i)):n.React.createElement("svg",Object.assign({className:a},i))};function It(e){var t,o,i;const{sectionId:a,currentIndex:l,numOfViews:r,onCurrentViewChange:s}=e,d=n.hooks.useTranslation(v.defaultMessages),u=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.arrowsNav})),c=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.dotsNav})),p=n.ReactRedux.useSelector((e=>{if(null==c?void 0:c.visible){const t=e.appConfig.sections[a],o=null==t?void 0:t.views;if((null==o?void 0:o.length)>0){return o.map((t=>e.appConfig.views[t].label)).join(";")}}return""})),g=n.React.useMemo((()=>p.length>0?p.split(";"):[]),[p]),y=null!==(t=null==c?void 0:c.position)&&void 0!==t?t:"b",h=n.React.useMemo((()=>{const e=[];for(let t=0;t<r;t++)e.push(t);return e}),[r]),f=()=>{var e,t,o,i;return n.css`
      position: absolute;
      cursor: pointer;
      pointer-events: auto;

      &.disabled {
        cursor: default;
        svg {
          color: var(--ref-palette-neutral-500);
        }
      }

      &.first {
        left: ${null!==(e=u.offset)&&void 0!==e?e:8}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          top: ${null!==(t=u.offset)&&void 0!==t?t:8}px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        }
      }
      &.second {
        right: ${null!==(o=u.offset)&&void 0!==o?o:8}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          bottom: ${null!==(i=u.offset)&&void 0!==i?i:8}px;
          left: 50%;
          top: auto;
          right: auto;
          transform: translateX(-50%) rotate(90deg);
        }
      }
    `},m=n.React.useCallback(((e,t)=>{var o;return(0,n.jsx)(v.Button,{key:e,type:"tertiary","aria-label":null!==(o=g[e])&&void 0!==o?o:"",className:(0,n.classNames)("dot p-0 rounded-circle",{active:t,disabled:r<=1}),onClick:t?void 0:()=>{s(e)}})}),[s,r,g]),I=n.React.useCallback((()=>{s(l>0?l-1:r-1)}),[l,r,s]),x=n.React.useCallback((()=>{s(l<r-1?l+1:0)}),[l,r,s]),w=r>1&&0!==l,b=r>1&&l!==r-1;return(0,n.jsx)(n.React.Fragment,null,(null==u?void 0:u.visible)&&(0,n.jsx)(n.React.Fragment,null,(0,n.jsx)(v.Button,{type:"tertiary",disabled:!w,className:(0,n.classNames)("arrows-nav first p-0",{vertical:"v"===u.direction}),css:f(),onClick:w?I:null,"aria-label":d("previous")},(0,n.jsx)(yt,{className:"m-0",autoFlip:"v"!==u.direction,size:null!==(o=u.size)&&void 0!==o?o:20})),(0,n.jsx)(v.Button,{type:"tertiary",disabled:!b,className:(0,n.classNames)("arrows-nav second p-0",{vertical:"v"===u.direction}),css:f(),onClick:b?x:null,"aria-label":d("next")},(0,n.jsx)(mt,{className:"m-0",autoFlip:"v"!==u.direction,size:null!==(i=u.size)&&void 0!==i?i:20}))),(null==c?void 0:c.visible)&&(0,n.jsx)("div",{className:(0,n.classNames)("dots-nav",{"snap-left":"l"===y,"snap-top":"t"===y,"snap-right":"r"===y,"snap-bottom":"b"===y}),css:(()=>{var e,t,o,i,a,l,r,s,d,u,p,g,v,h;return n.css`
      position: absolute;
      display: flex;
      flex-direction: ${"l"===y||"r"===y?"column":"row"};
      justify-content: center;
      align-items: center;
      overflow: visible;
      pointer-events: none;
      background: transparent;

      .dot {
        pointer-events: all;
        cursor: pointer;
        border: 1px solid var(--ref-palette-neutral-500);
        background: var(--ref-palette-neutral-200);
        width: ${null!==(e=c.size)&&void 0!==e?e:8}px;
        height: ${null!==(t=c.size)&&void 0!==t?t:8}px;

        &.active {
          border-color: var(--ref-palette-white);
          background: var(--sys-color-primary-main);
          width: ${c.size>0?1.5*c.size:12}px;
          height: ${c.size>0?1.5*c.size:12}px;
        }

        &.disabled {
          cursor: default;
        }
      }

      &.snap-left {
        height: 100%;
        top: 0;
        left: ${null!==(o=c.offset)&&void 0!==o?o:50}px;
        width: ${null!==(i=c.size)&&void 0!==i?i:8}px;

        > button:not(:first-of-type) {
          margin-top: ${null!==(a=c.spacing)&&void 0!==a?a:10}px;
        }
      }
      &.snap-right {
        height: 100%;
        top: 0;
        right: ${null!==(l=c.offset)&&void 0!==l?l:50}px;
        width: ${null!==(r=c.size)&&void 0!==r?r:8}px;

        > button:not(:first-of-type) {
          margin-top: ${null!==(s=c.spacing)&&void 0!==s?s:10}px;
        }
      }
      &.snap-top {
        width: 100%;
        top: ${null!==(d=c.offset)&&void 0!==d?d:50}px;
        height: ${null!==(u=c.size)&&void 0!==u?u:8}px;

        > button:not(:first-of-type) {
          margin-left: ${null!==(p=c.spacing)&&void 0!==p?p:10}px;
        }
      }
      &.snap-bottom {
        width: 100%;
        bottom: ${null!==(g=c.offset)&&void 0!==g?g:50}px;
        height: ${null!==(v=c.size)&&void 0!==v?v:8}px;

        > button:not(:first-of-type) {
          margin-left: ${null!==(h=c.spacing)&&void 0!==h?h:10}px;
        }
      }
    `})()},h.map((e=>m(e,e===l)))))}function xt(e){const{sectionId:t,autoPlay:o,interval:i=w,loop:a=!1}=e,l=n.React.useRef(),r=n.ReactRedux.useSelector((e=>{var t,i;return o?(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===n.AppMode.Design||(null===(i=e.appRuntimeInfo)||void 0===i?void 0:i.isPrintPreview):null})),s=n.React.useRef(r),d=n.React.useCallback((()=>{l.current&&(clearInterval(l.current),l.current=null)}),[]),u=n.React.useCallback((()=>{d(),l.current=setInterval((()=>{const e=function(e,t){var o,i;const a=(0,n.getAppStore)().getState(),l=a.appConfig.sections[e].views;let r=null===(i=null===(o=a.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos)||void 0===i?void 0:i[e];const s=(null==r?void 0:r.currentViewId)?l.indexOf(r.currentViewId):0,d=s<l.length-1?s+1:0;return t||0!==d?(r=r?r.set("previousViewId",l[s]).set("currentViewId",l[d]):{previousViewId:l[s],currentViewId:l[d]},(0,n.getAppStore)().dispatch(n.appActions.sectionNavInfoChanged(e,r)),!0):(n.jimuHistory.changeView(e,l[l.length-1]),!1)}(t,a);e||d()}),1e3*i)}),[t,a,i,d]);n.React.useEffect((()=>{if(!s.current){if(!o)return void d();u()}return()=>{d()}}),[o,i,a,d,u]),n.React.useEffect((()=>{if(s.current!==r&&null!==r){if(s.current=r,r)return void d();o&&u()}}),[r,u,d,o])}var wt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};function bt(e,t){return n.css`
    overflow: visible;
    position: relative;
    aspect-ratio: ${e&&t>0?t:null};

    .section-content {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .section-view {
      position: absolute;
    }

    .hidden {
      display: none !important;
    }
  `}function St(e){var t;const{views:o,navInfo:a,activeView:l,animationPreview:r,playMode:s,transition:d,sectionId:u,autoPlay:c,focusable:p=!0,interval:g=w,loop:y=!0,className:h,sectionStyle:f,rotate:m,forceAspectRatio:I,aspectRatio:x,layoutEntryComponent:b,viewVisibilityContext:S}=e,C=n.React.useRef(),T=n.React.useRef(),R=n.React.useRef(!1),j=n.React.useRef(!1),P=n.React.useRef(null),[$,M]=n.React.useState(!1),L=n.hooks.useTranslation(i),O=null==l?void 0:l.id,k=n.React.useMemo((()=>{var e;let t,i,l,r=o;if(a)if(r=null!==(e=a.visibleViews)&&void 0!==e?e:o,a.useProgress){l=a.progress;t=(0,n.getIndexFromProgress)(l,r.length).currentIndex}else t=Math.max(0,r.indexOf(a.currentViewId)),i=a.previousViewId?Math.max(0,r.indexOf(a.previousViewId)):Math.max(0,t-1);else t=Math.max(0,r.indexOf(O)),i=t;return C.current=t,{currentIndex:t,previousIndex:i,progress:l}}),[O,a,o]),A=n.React.useMemo((()=>v.styleUtils.toCSSStyle(f)),[f]),{transform:E}=A,N=wt(A,["transform"]),z=m>0||m<0?`rotateZ(${m}deg)`:"";let B=z;E&&(B=`${E} ${z}`);const F=n.React.useCallback((()=>{M(!0)}),[]),H=n.React.useCallback((()=>{M(!1)}),[]),W=n.React.useCallback((e=>{R.current=!0,j.current=e.target===T.current,null!=P.current&&(clearTimeout(P.current),P.current=null),c&&M(!0)}),[c]),V=n.React.useCallback((e=>{R.current=!1,null!=P.current&&(clearTimeout(P.current),P.current=null),c&&(P.current=setTimeout((()=>{M(!1)}),500))}),[c]),D=c&&!$;xt({sectionId:u,interval:g,loop:y,autoPlay:D});const G=n.React.useCallback((e=>{n.jimuHistory.changeView(u,o[e])}),[u,o]);return(0,n.jsx)("div",{className:(0,n.classNames)(`section-layout layout-item-content w-100 ${null===(t=null==f?void 0:f.boxShadow)||void 0===t?void 0:t.presetStyle}`,h),css:bt(I,x),"data-sectionid":u,style:Object.assign(Object.assign({},N),{transform:B}),onMouseEnter:c?F:null,onMouseLeave:c?H:null,onTouchStart:c?F:null,onTouchEnd:c?H:null,onFocus:W,onBlur:V,tabIndex:p?0:void 0,"aria-label":L("activeViewTip",{viewLabel:(()=>{var e,t,i;const a=o[C.current],l=(0,n.getAppStore)().getState().appConfig;return null!==(i=null===(t=null===(e=null==l?void 0:l.views)||void 0===e?void 0:e[a])||void 0===t?void 0:t.label)&&void 0!==i?i:""})()}),ref:T},(0,n.jsx)(ut,{views:o,navInfo:a,animationPreview:r,playMode:s,currentIndex:k.currentIndex,previousIndex:k.previousIndex,progress:k.progress,loop:D&&y,viewTransition:d,layoutEntryComponent:b,viewVisibilityContext:S}),(0,n.jsx)(It,{sectionId:u,numOfViews:o.length,currentIndex:k.currentIndex,onCurrentViewChange:G}))}class Ct extends n.React.PureComponent{render(){return n.React.createElement(St,Object.assign({},this.props,{layoutEntryComponent:lt,viewVisibilityContext:p}))}}var Tt=l(1496);function Rt(e,t){const[o,i]=n.React.useState(null),a=n.React.useContext(Tt.PageVisibilityContext),l=n.React.useRef(!1);n.React.useEffect((()=>{null==e||t||l.current===a||(l.current=a,i((0,n.getNextAnimationId)()))}),[a,t,e]);const r=n.React.useCallback((()=>{i(null)}),[]);return[o,!a,r]}function jt(){const e=[0];for(let t=1;t<=10;t++)e.push(t/10);return e}function Pt(e,t){const o=n.React.useRef(),[i,a]=n.React.useState(!0);return n.React.useEffect((()=>{if(o.current&&(o.current.unobserve(e),o.current=null),!t)return;if(e&&"function"==typeof IntersectionObserver){const t=new IntersectionObserver((e=>{var t;(t=e[0]).target.classList.contains("playing-animation")||t.boundingClientRect.width>0&&t.boundingClientRect.height>0&&a(t.isIntersecting)}),{threshold:jt(),root:document,rootMargin:"20%"});return t.observe(e),o.current=t,()=>{o.current.unobserve(e),o.current=null}}}),[e,t]),i}var $t=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};function Mt(e){var t,o,i,a,l,r,s,d,c;const p=n.ReactRedux.useSelector((t=>function(e,t){var o,i;const a=pe(e,t);if(!a.layoutItem)return a;if(a.layoutItem.type===n.LayoutItemType.Widget){const{layoutId:l,layoutItemId:r}=t,s=e.appConfig.widgets[a.layoutItem.widgetId],d=null===(i=null===(o=null==s?void 0:s.manifest)||void 0===o?void 0:o.properties)||void 0===i?void 0:i.supportInlineEditing,u=function(e,t,o){var i;const a=e.appConfig.layouts[t].content[o];if(a.type===n.LayoutItemType.Widget){const t=e.appConfig.widgets[a.widgetId],o=null===(i=null==t?void 0:t.layouts)||void 0===i?void 0:i.DEFAULT;if(o)return o[e.browserSizeMode]}return null}(e,l,r),c=Object.assign({widgetId:a.layoutItem.widgetId,supportInlineEditing:d},a);return u&&(c.innerLayoutId=u),c}const l=Ve(e,a.layoutItem.sectionId);return Object.assign(Object.assign({},a),l)}(t,e)),n.ReactRedux.shallowEqual),g=n.ReactRedux.useSelector((e=>{var t,o;return null!==(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==o&&o})),y=Object.assign(Object.assign({},e),p),v=n.React.useRef(),{layoutId:h,layoutItemId:f,layoutItem:m}=y,{className:x,children:w,id:b,isLastChild:S}=y,C=$t(y,["className","children","id","isLastChild"]),T=(null==m?void 0:m.type)===n.LayoutItemType.Widget,R=(null==m?void 0:m.type)===n.LayoutItemType.Section,{effect:j,oneByOneEffect:P,hoverEffect:$}=g?{}:null!==(o=null===(t=y.layoutItem)||void 0===t?void 0:t.setting)&&void 0!==o?o:{};let M=null===(i=null==j?void 0:j[n.AnimationTriggerType.ScrollIntoView])||void 0===i?void 0:i.type;M=M&&M!==n.AnimationType.None?M:null;let L=null===(a=null==P?void 0:P[n.AnimationTriggerType.ScrollIntoView])||void 0===a?void 0:a.type;L=L&&L!==n.AnimationType.None?L:null;const[O,k]=n.React.useState(!1),[A,E]=n.React.useState({setting:null==P?void 0:P[n.AnimationTriggerType.ScrollIntoView],playId:null,oid:p.innerLayoutId,revert:null}),N=Pt(v.current,y.watchViewportVisibility);n.React.useEffect((()=>{k(!0)}),[]);const{setting:z}=n.React.useContext(n.AnimationContext),[B,F,H]=Rt(M,null!=(null==z?void 0:z.type)&&z.type!==n.AnimationType.None),[W,V,D]=Rt(L,null!=(null==z?void 0:z.type)&&z.type!==n.AnimationType.None);n.React.useEffect((()=>{null==B&&W&&E({setting:null==P?void 0:P[n.AnimationTriggerType.ScrollIntoView],playId:W,oid:p.innerLayoutId,revert:V,onContextAnimationEnd:V?null:()=>{D(),E({setting:null==P?void 0:P[n.AnimationTriggerType.ScrollIntoView],oid:p.innerLayoutId,playId:-1})}})}),[B,W]);const G=n.React.useCallback((()=>{var e;const t=null==P?void 0:P[n.AnimationTriggerType.ScrollIntoView],o=(null===(e=null==t?void 0:t.option)||void 0===e?void 0:e.start)===n.AnimationStartMode.AfterPrevious;E({setting:t,playId:(0,n.getNextAnimationId)(),oid:p.innerLayoutId,revert:o,onContextAnimationEnd:o?null:()=>{E({setting:t,oid:p.innerLayoutId,playId:-1})}})}),[L]),U=n.React.useCallback((()=>{var e;const t=null==P?void 0:P[n.AnimationTriggerType.ScrollIntoView];(null===(e=null==t?void 0:t.option)||void 0===e?void 0:e.start)===n.AnimationStartMode.AfterPrevious&&E({setting:t,playId:(0,n.getNextAnimationId)(),oid:p.innerLayoutId,revert:!1,onContextAnimationEnd:()=>{E({setting:t,oid:p.innerLayoutId,playId:-1})}}),B>0&&(null==H||H())}),[L,B]);if(!y.layoutItem||R&&!m.sectionId)return null;const _=null===(l=null==j?void 0:j[n.AnimationTriggerType.ScrollIntoView])||void 0===l?void 0:l.option,X=null!==(c=null===(d=null===(s=null===(r=m.setting)||void 0===r?void 0:r.style)||void 0===s?void 0:s.transform)||void 0===d?void 0:d.rotate)&&void 0!==c?c:0;return(0,n.jsx)(u.Provider,{value:N},(0,n.jsx)(n.AnimationComponent,{id:b,parentId:h,type:M,configType:null==_?void 0:_.configType,direction:null==_?void 0:_.direction,revert:F,delay:e.delay,isLastChild:S,playId:B,onAnimationStart:G,onAnimationEnd:U,ref:v,css:n.css`
          ${(0,n.getHoverStyle)(null==$?void 0:$.type,null==$?void 0:$.setting)};
          position: relative;
          overflow: visible;
          min-width: ${I}px;
          min-height: ${I}px;
        `,style:e.style,className:(0,n.classNames)("d-flex layout-item",x,{"is-widget":T,"is-section":R}),"data-layoutitemid":f,"data-layoutid":h},(0,n.jsx)(n.AnimationContext.Provider,{value:A},T&&(0,n.jsx)(Ke,Object.assign({rotate:X},C)),R&&(0,n.jsx)(Ct,Object.assign({rotate:X},C))),e.children))}class Lt extends n.React.PureComponent{getPositionStyle(e){const{layoutItem:t,transformedBBox:o}=this.props,i=function(e,t){var o,n,i,a,l;const r={};let s=null!==(o=null==t?void 0:t.autoProps)&&void 0!==o?o:{},d=e;const u=Ne("height",e,s),c=Ne("width",e,s);if(u===S.Stretch)r.top=d.top,r.bottom=d.bottom;else{const o=null!==(n=s.top)&&void 0!==n&&n,a=null!==(i=s.bottom)&&void 0!==i&&i;u===S.Custom&&(r.height=d.height),o!==a&&!a||null==e.top?r.bottom=d.bottom:r.top=d.top,t.vCenter&&"50%"===d.top&&(r.top="50%")}if(c===S.Stretch)r.left=d.left,r.right=d.right;else{const e=null!==(a=s.left)&&void 0!==a&&a,o=null!==(l=s.right)&&void 0!==l&&l;c===S.Custom&&(r.width=d.width),e===o?null!=d.left?r.left=d.left:r.right=d.right:e&&null!=d.right?r.right=d.right:r.left=d.left,t.hCenter&&"50%"===d.left&&(r.left="50%")}return r}(null!=o?o:t.bbox,e),a=Object.assign(Object.assign({},i),function(e,t,o=!1){const n={},i=t.hCenter&&"50%"===e.left,a=t.vCenter&&"50%"===e.top,l=xe()?-1:1;return i&&a?(n.right="auto",n.bottom="auto",n.transform=`translate(${-50*l}%, -50%)`):i?(n.right="auto",n.transform=`translateX(${-50*l}%)`):a&&(n.bottom="auto",n.transform="translateY(-50%)"),!o&&ze(t)&&(n.height="auto"),n}(t.bbox,e));return function(e){return[n.css`
      position: absolute;
      left: ${se(e,"left")};
      right: ${se(e,"right")};
      top: ${se(e,"top")};
      bottom: ${se(e,"bottom")};
      width: ${se(e,"width")};
      height: ${se(e,"height")};
    `,e.transform]}(a)}render(){const{layoutItem:e,layoutId:t}=this.props;if(null==e||e.isPending)return null;const o=n.lodash.assign({},We,e.setting),i=we(o.aspectRatio),a=ze(o),l=Fe(this.props),[r,s]=this.getPositionStyle(o),d=Ne("width",e.bbox,o.autoProps),u=Ne("height",e.bbox,o.autoProps);return(0,n.jsx)(Mt,Object.assign({css:r,style:{transform:s},layoutId:t,layoutItemId:e.id,forceAspectRatio:a,aspectRatio:i,isInSection:this.props.isInSection,autoWidth:d===S.Auto,autoHeight:u===S.Auto},l))}}class Ot extends n.React.PureComponent{createItem(e,t,o,i){const a=e.content[t];return(0,n.jsx)(Lt,{key:`${e.id}_${t}`,index:o,layoutId:e.id,layoutItemId:t,layoutItem:a,transformedBBox:i?e.content[t].bbox:null,isInSection:this.props.isInSection})}render(){const{layout:e,layouts:t,className:o,style:i,browserSizeMode:a}=this.props;if(!e)return null;let l=e,r=!1;if(t[a]!==e.id&&this.layoutTransform){let o;Object.keys(t).some((n=>{if(t[n]===e.id)return o=n,!0})),l=this.layoutTransform(e,o,a),r=!0}const s=n.lodash.assign({},He,l.setting),d=l.order||[],u=(0,n.classNames)("layout fixed-layout d-flex",o);return(0,n.jsx)("div",{className:u,style:Object.assign(Object.assign(Object.assign({position:"relative",height:"auto"},i),v.styleUtils.toCSSStyle(s.style)),{width:"100%",overflow:"hidden"}),"data-layoutid":l.id},d.length>0&&(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!1}},(0,n.jsx)(n.OneByOneAnimation,{css:n.css`
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
              `,oid:e.id,"data-layoutid":e.id},d.map(((e,t)=>this.createItem(l,e,t,r))))))}}const kt=n.ReactRedux.connect(ce)(Ot);class At extends n.React.PureComponent{isStretchInCrossAxis(){const{layoutItem:e}=this.props;return function(e){var t,o;return(null===(o=null===(t=e.setting)||void 0===t?void 0:t.autoProps)||void 0===o?void 0:o.width)!==S.Custom}(e)}calHeight(e,t){return function(e,t){var o,n;return(null===(o=e.autoProps)||void 0===o?void 0:o.height)===S.Auto||"ratio"===e.heightMode?"ratio"===e.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(n=e.autoProps)||void 0===n?void 0:n.height)===S.Stretch||"fit"===e.heightMode?{flex:"1 1 auto"}:{height:t.height,flexShrink:0}}(e,t)}getStyle(e,t){const{layoutItem:o}=this.props,i=o.bbox||{},a=this.calHeight(e,i);return a.width=t?"auto":i.width,this.autoHeight="auto"===a.height,function(e,t,o){var i,a,l;const r=(null===(i=t.autoProps)||void 0===i?void 0:i.height)===S.Auto;return n.css`
    align-self: ${o?"stretch":null!==(l=null===(a=t.style)||void 0===a?void 0:a.alignSelf)&&void 0!==l?l:"auto"};
    width: ${se(e,"width")};
    height: ${se(e,"height")};
    flex: ${e.flex};
    flex-shrink: ${e.flexShrink};
    min-height: ${r?"unset":null};
  `}(a,e,t)}render(){var e,t;const{layoutId:o,layoutItem:i,onClick:a}=this.props;if(!i||i.isPending)return null;const l=i.setting||{},r=null!==(t=null===(e=l.autoProps)||void 0===e?void 0:e.height)&&void 0!==t?t:S.Custom,s=(0,n.classNames)("flexbox-layout-item",{"d-flex":r!==S.Auto}),d=this.isStretchInCrossAxis(),u=ze(l),c=we(l.aspectRatio),p=Fe(this.props);return(0,n.jsx)(Mt,Object.assign({css:this.getStyle(l,d),layoutId:o,layoutItemId:i.id,onClick:a,className:s,forceAspectRatio:u,aspectRatio:c,autoHeight:this.autoHeight},p))}}const Et={min:16,space:10},Nt=e=>n.css`
  height: 100%;
  overflow-x: hidden;
  justify-content: ${e.justifyContent};
  overflow-y: auto !important;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
  &:hover {
    -ms-overflow-style: auto;  /* Internet Explorer 10+ */
    scrollbar-width: thin;  /* Firefox */
    &::-webkit-scrollbar {
      display: block;  /* Safari and Chrome */
    }
  }
  & > div.flexbox-layout-item ~ div.flexbox-layout-item {
    margin-top: ${e.space}px;
  }
`;class zt extends n.React.PureComponent{createItem(e,t,o){const{layout:i}=this.props;return(0,n.jsx)(At,{key:e,index:t,space:o.space,layoutId:i.id,layoutItemId:e,layoutItem:i.content[e]})}render(){const{layout:e,className:t}=this.props,o=e.order||(0,n.Immutable)([]),i=Object.assign({},Et,e.setting),a=(0,n.classNames)("layout column-layout d-flex w-100",t);return(0,n.jsx)("div",{className:a,style:{position:"relative",overflow:"hidden"},"data-layoutid":e.id},(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!0,layoutId:e.id}},(0,n.jsx)(n.OneByOneAnimation,{oid:e.id,className:"trail-container d-flex flex-column w-100",css:n.css`
              ${Nt(i)};
              padding: ${v.styleUtils.toCSSPadding(i.padding)};
            `},o.asMutable().map(((e,t)=>this.createItem(e,t,i))))))}}const Bt=n.ReactRedux.connect(ce)(zt),Ft=n.css`
  width: 100%;
  display: flex;
  justify-content: center;

  .offset-1 {
    margin-left: 8.33333%;
    margin-right: 0;
  }
  .offset-2 {
    margin-left: 16.66667%;
    margin-right: 0;
  }
  .offset-3 {
    margin-left: 25%;
    margin-right: 0;
  }
  .offset-4 {
    margin-left: 33.33333%;
    margin-right: 0;
  }
  .offset-5 {
    margin-left: 41.66667%;
    margin-right: 0;
  }
  .offset-6 {
    margin-left: 50%;
    margin-right: 0;
  }
  .offset-7 {
    margin-left: 58.33333%;
    margin-right: 0;
  }
  .offset-8 {
    margin-left: 66.66667%;
    margin-right: 0;
  }
  .offset-9 {
    margin-left: 75%;
    margin-right: 0;
  }
  .offset-10 {
    margin-left: 83.33333%;
    margin-right: 0;
  }
  .offset-11 {
    margin-left: 91.66667%;
    margin-right: 0;
  }
`;const Ht={space:10,style:{padding:{number:[10,10,10,10],unit:v.DistanceUnits.PIXEL}}},Wt={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}};class Vt extends n.React.PureComponent{getStyle(e){const{gutter:t,layoutItem:o,isMultiRow:i}=this.props,a=o.bbox,l=xe()?-1:1,r=function(e,t,o){var n,i,a,l,r,s,d,u,c,p,g,y,v,h;return o?{height:(null===(n=e.autoProps)||void 0===n?void 0:n.height)===S.Auto?"auto":t.height,alignSelf:null!==(a=null===(i=e.style)||void 0===i?void 0:i.alignSelf)&&void 0!==a?a:"flex-start"}:"ratio"===e.heightMode?{alignSelf:null!==(r=null===(l=e.style)||void 0===l?void 0:l.alignSelf)&&void 0!==r?r:"flex-start"}:(null===(s=e.autoProps)||void 0===s?void 0:s.height)===S.Auto?{height:"auto",alignSelf:null!==(u=null===(d=e.style)||void 0===d?void 0:d.alignSelf)&&void 0!==u?u:"flex-start"}:(null===(c=e.autoProps)||void 0===c?void 0:c.height)===S.Custom?{height:t.height,alignSelf:null!==(g=null===(p=e.style)||void 0===p?void 0:p.alignSelf)&&void 0!==g?g:"flex-start"}:(null===(y=e.autoProps)||void 0===y?void 0:y.height)===S.Stretch||"fit"===e.heightMode?{alignSelf:"stretch"}:parseFloat(t.height)>0?{height:t.height,alignSelf:null!==(h=null===(v=e.style)||void 0===v?void 0:v.alignSelf)&&void 0!==h?h:"flex-start"}:{alignSelf:"stretch"}}(e,a,i);return function(e,t,o,i,a){var l,r,s,d;return e?[n.css`
        padding: ${o/2}px 0;
        height: ${se(i,"height")};
        align-self: ${i.alignSelf};
      `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(l=a.offsetX)&&void 0!==l?l:0)*t}px, ${null!==(r=a.offsetY)&&void 0!==r?r:0}px)`:null]:[n.css`
      padding: 0 ${o/2}px;
      height: ${se(i,"height")};
      align-self: ${i.alignSelf};
    `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(s=a.offsetX)&&void 0!==s?s:0)*t}px, ${null!==(d=a.offsetY)&&void 0!==d?d:0}px)`:null]}(i,l,t,r,e)}render(){var e;const{span:t,offset:o,layoutId:i,layoutItem:a}=this.props;if(null==a||a.isPending)return null;const l=n.lodash.assign({},Wt,a.setting),r=(0,n.classNames)("row-layout-item",`col-${t}`,`offset-${o}`),s=null===(e=l.autoProps)||void 0===e?void 0:e.height,d=we(l.aspectRatio),u=Fe(this.props),[c,p]=this.getStyle(l);return(0,n.jsx)(Mt,Object.assign({css:c,style:{transform:p},className:r,layoutId:i,layoutItemId:a.id,forceAspectRatio:ze(l),aspectRatio:d,onClick:this.props.onClick,autoHeight:s===S.Auto},u))}}class Dt extends n.React.PureComponent{constructor(e){super(e),this.flipLeftRight=xe()}collectBounds(){var e;const{transformedLayout:t}=this.props,o=null!==(e=t.order)&&void 0!==e?e:[];return this.childRects=[],o.forEach((e=>{var o,n;if(t.content[e].isPending)return;const i=null===(n=null===(o=t.content)||void 0===o?void 0:o[e])||void 0===n?void 0:n.bbox;null!=i&&this.childRects.push({layoutId:t.id,id:e,left:parseInt(i.left,10),width:parseInt(i.width,10),height:parseInt(i.height,10)})})),this.childRects.sort(((e,t)=>e.left-t.left))}getConfig(){var e;const{layout:t}=this.props;return null!==(e=t.setting)&&void 0!==e?e:Ht}createItem(e,t,o){var i;const{transformedLayout:a,isMultiRow:l}=this.props,r=this.getConfig(),s=e[t],d=null!==(i=r.space)&&void 0!==i?i:0;let u;if(0===t)u=s.left;else{const o=e[t-1];u=s.left-o.left-o.width}return(0,n.jsx)(Vt,{key:`${s.layoutId}_${s.id}`,offset:u,gutter:d,span:s.width,isMultiRow:l,layoutId:a.id,layoutItemId:s.id,layoutItem:a.content[s.id],alignItems:o.alignItems})}render(){var e,t;const{layout:o,className:i}=this.props;this.collectBounds();const a=this.childRects,l=this.getConfig(),r=null!==(e=l.style)&&void 0!==e?e:{},s=null!==(t=l.space)&&void 0!==t?t:0;return(0,n.jsx)(d.Consumer,null,(e=>(0,n.jsx)("div",{className:(0,n.classNames)("row-layout",i,{"row-rtl":this.flipLeftRight}),css:Ft,"data-layoutid":o.id},(0,n.jsx)("div",{css:n.css`
                  width: 100%;
                  max-width: ${e.maxWidth>0?`${e.maxWidth}px`:"none"};
                `},(0,n.jsx)("div",{css:n.css`
                    position: relative;
                    height: 100%;
                    margin-left: ${-s/2}px;
                    margin-right: ${-s/2}px;
                    display: flex;
                    flex-direction: column;
                  `},a.length>0&&(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!1}},(0,n.jsx)(n.OneByOneAnimation,{oid:o.id,className:(0,n.classNames)("row h-100 m-0",{"flex-nowrap":!this.props.isMultiRow}),css:n.css`
                          position: relative;
                          height: 100%;
                          overflow: ${this.props.isMultiRow?"auto":"unset"};
                        `},a.map(((e,t)=>this.createItem(a,t,r))))))))))}}class Gt extends n.React.PureComponent{constructor(e){super(e),this.onResize=(e,t)=>{var o;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===e&&0===t)return;const{widgetId:n}=this.props;null!=(null===(o=window.runtimeInfo.widgets)||void 0===o?void 0:o[n])?window.runtimeInfo.widgets[n].height=t:window.runtimeInfo.widgets[n]={height:t}},this.handleDebounceResize=n.lodash.debounce(this.onResize,200)}findExtension(){const e=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find((e=>e.layoutType===n.LayoutType.RowLayout));this.layoutTransform=null==t?void 0:t.transformLayout}}collectRowItems(){var e;const t=null!==(e=this.finalLayout.order)&&void 0!==e?e:[],o=[];let n=[],i=0;return o.push(n),t.forEach((e=>{if(this.finalLayout.content[e].isPending)return;const t=this.finalLayout.content[e].bbox,a=parseInt(t.left,10),l=Math.floor(a/12);l>i&&(n=[],i=l,o.push(n)),n.push(e)})),o}transform(){const{layout:e,layouts:t,browserSizeMode:o,mainSizeMode:n}=this.props;null==this.layoutTransform&&this.findExtension();let i=e;t[o]!==e.id&&null!=this.layoutTransform&&(i=this.layoutTransform(e,n,o,Ce())),this.finalLayout=i,this.numOfRows=this.collectRowItems().length}createRow(){const{layout:e,layouts:t}=this.props;return(0,n.jsx)(Dt,{layouts:t,layout:e,transformedLayout:this.finalLayout,isMultiRow:this.finalLayout!==e||this.numOfRows>1})}render(){var e,t;const{layout:o,className:i}=this.props,a=null!==(t=(null!==(e=o.setting)&&void 0!==e?e:Ht).style)&&void 0!==t?t:Ht.style;return this.transform(),(0,n.jsx)("div",{className:(0,n.classNames)("layout d-flex",i),css:n.css`
          width: 100%;
          padding: ${v.styleUtils.toCSSPadding(a.padding)};
        `,"data-layoutid":o.id},this.createRow(),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:this.handleDebounceResize}))}}const Ut=n.ReactRedux.connect(ce)(Gt);var _t=l(462),Xt=l.n(_t),Yt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const Jt=e=>{const t=window.SVG,{className:o}=e,i=Yt(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:Xt()},i)):n.React.createElement("svg",Object.assign({className:a},i))};var qt=l(2838),Zt=l.n(qt),Kt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const Qt=e=>{const t=window.SVG,{className:o}=e,i=Kt(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:Zt()},i)):n.React.createElement("svg",Object.assign({className:a},i))};function eo(e,t){var o;return null===(o=e.content)||void 0===o?void 0:o[t]}function to(e){var t;const o=v.styleUtils.toCSSPadding(null===(t=null==e?void 0:e.style)||void 0===t?void 0:t.padding);if(o){if(e.paddingColor){const t=o.split(" "),i=e.paddingColor;let a="";const l=window.jimuUA.browser.name.toLowerCase();return"firefox"===l?a="-moz-":"safari"!==l&&"chrome"!==l||(a="-webkit-"),n.css`
        padding: ${o};
        background-image:
        ${a}linear-gradient(270deg, ${i} ${t[0]}, transparent ${t[0]}),
        ${a}linear-gradient(180deg, ${i} ${t[1]}, transparent ${t[1]}),
        ${a}linear-gradient(90deg, ${i} ${t[2]}, transparent ${t[2]}),
        ${a}linear-gradient(0deg, ${i} ${t[3]}, transparent ${t[3]});
      `}return n.css`
      padding: ${o};
    `}}const oo=n.css`
  & > .max-grid-item-btn {
    display: none;
    background: var(--ref-palette-neutral-500);
    width: 26px;
    height: 26px;
    position: absolute;
    top: 0;
    right: 0;
  }

  &:hover > .max-grid-item-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,no=n.css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 30;
  background: var(--ref-palette-neutral-200);
`;function io(e){const[t,o]=n.React.useState(!1),i=n.ReactRedux.useSelector((t=>function(e,t,o){var n,i;const a=e.appConfig.layouts[t],l=a.content[o];if(null!==(n=null==l?void 0:l.expandable)&&void 0!==n&&!n)return!1;const r=null===(i=null==a?void 0:a.setting)||void 0===i?void 0:i.rootItem;let s=!1;if(r===o){const e=eo(a,r);null!=e.children&&0!==e.children.length||(s=!0)}return!s}(t,e.layoutId,e.layoutItemId))),a=n.React.useCallback((()=>{o(!t)}),[t]);return(0,n.jsx)(Mt,Object.assign({},e,{css:n.css`${oo};${t?no:""}`}),i&&(0,n.jsx)(v.Button,{icon:!0,type:"tertiary",className:"max-grid-item-btn p-0",onClick:a},t&&(0,n.jsx)(Qt,null),!t&&(0,n.jsx)(Jt,null)))}const ao=32;function lo(e,t,o,n,i,a){let l=n,r=i;if("row"===o){const o=a?t.width:e.width,i=a?e.width:t.width;n<0&&(l=o>ao?-Math.min(Math.abs(n),o-ao):0),n>0&&(l=i>ao?Math.min(n,i-ao):0)}else i<0&&(r=e.height>ao?-Math.min(Math.abs(i),e.height-ao):0),i>0&&(r=t.height>ao?Math.min(i,t.height-ao):0);return{x:l,y:r}}function ro(e){const t=e.getAttribute("data-layoutid"),o=e.getAttribute("data-layoutitemid");return+(0,n.getAppStore)().getState().appConfig.layouts[t].content[o].bbox.width}function so(e){var t,o;const{referenceItemId:i,direction:a,layoutId:l,onResizeEnd:r}=e,s=n.React.useRef(),d=n.React.useRef(),u=n.React.useRef(null),c=null!==(o=null===(t=(0,n.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL)&&void 0!==o&&o,p=n.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode===n.AppMode.Design)),g=n.ReactRedux.useSelector((t=>{var o,n;return null===(n=null===(o=t.appConfig.layouts[e.layoutId].setting)||void 0===o?void 0:o.resizable)||void 0===n||n})),y=n.ReactRedux.useSelector((e=>{var t,o;return null!==(o=null===(t=e.appConfig.layouts[l].setting)||void 0===t?void 0:t.splitSize)&&void 0!==o?o:8})),v=n.ReactRedux.useSelector((e=>{var t,o;return null!==(o=null===(t=e.appConfig.layouts[l].setting)||void 0===t?void 0:t.splitColor)&&void 0!==o?o:"var(--light-500)"})),h=n.React.useMemo((()=>{const e=`${y}px`,t=!!p||g;return n.css`
      width: ${"col"===a?"100%":e};
      height: ${"col"===a?e:"100%"};
      background: ${v};
      position: relative;
      overflow: visible;
      z-index: 20;
      flex-shrink: 0;

      .handler {
        position: absolute;
        background: transparent;
      }
      .horizontal-splitter {
        top: 0;
        bottom: 0;
        left: -5px;
        right: -5px;
        &:after {
          content: '';
          position: absolute;
          inset: 0 5px 0 0;
          cursor: ${t?"col-resize":"default"};
        }
      }

      .vertical-splitter {
        left: 0;
        right: 0;
        top: -5px;
        bottom: -5px;
        &:after {
          content: '';
          position: absolute;
          inset: 0 0 5px 0;
          cursor: ${t?"row-resize":"default"};
        }
      }
    `}),[a,g,p,y,v]);return n.hooks.useEffectOnce((()=>{let e,t,o,l,y,v,h,f,m,I,x,w,b;return n.moduleLoader.loadModule("jimu-core/dnd").then((n=>{const S=n.interact;u.current=S,s.current&&(d.current=S(s.current).origin("parent").draggable({inertia:!1,autoScroll:!1,enabled:!!p||g,modifiers:[S.modifiers.restrict({restriction:"parent"})],lockAxis:"row"===a?"x":"y",onstart:n=>{n.stopPropagation(),e=0,t=0,o=s.current.parentElement.getBoundingClientRect(),l=s.current.previousElementSibling,y=l.getBoundingClientRect(),h=l.style.width,f=l.style.height,v=ro(l),m=s.current.nextElementSibling,I=m.getBoundingClientRect(),w=m.style.width,b=m.style.height,x=ro(m)},onmove:o=>{o.stopPropagation(),e+=o.dx,t+=o.dy;const{x:n,y:i}=lo(y,I,a,e,t,c),r=c?-1:1;"row"===a?(l.style.width=`calc(${v}% + ${n*r}px)`,m.style.width=`calc(${x}% - ${n*r}px)`):(l.style.height=`calc(${v}% + ${i}px)`,m.style.height=`calc(${x}% - ${i}px)`)},onend:n=>{n.stopPropagation(),e+=n.dx,t+=n.dy;const{x:s,y:d}=lo(y,I,a,e,t,c),u=c?-1:1;l.style.width=h,m.style.width=w,l.style.height=f,m.style.height=b,r(i,Math.round(s*u*1e4/o.width)/100,Math.round(1e4*d/o.height)/100)}}))})),()=>{var e;null===(e=d.current)||void 0===e||e.unset(),d.current=null}})),n.React.useEffect((()=>{null!=d.current&&u.current(s.current).draggable(!!p||g)}),[g,p]),(0,n.jsx)("div",{ref:s,css:h,className:"grid-split flex-shrink-0"},(0,n.jsx)("div",{className:(0,n.classNames)("handler",{"horizontal-splitter":"row"===a,"vertical-splitter":"col"===a})}))}function uo(e){const{layout:t,layoutItemId:o,isLast:i,className:a}=e,l=n.React.useMemo((()=>eo(t,o)),[t,o]),r=n.React.useMemo((()=>{if(l.parent){return eo(t,l.parent).gridType}return null}),[t,l]),s=+l.bbox.width,d=n.React.useContext(n.AnimationContext),u=n.React.useMemo((()=>{var e,t;return(null===(t=null===(e=null==d?void 0:d.setting)||void 0===e?void 0:e.option)||void 0===t?void 0:t.parentMode)===n.ParentAnimationMode.AllAtOnce?0:250}),[d]),c=n.React.useCallback((()=>r===n.GridItemType.Row?n.css`
        height: 100%;
        width: ${s}%;
      `:r===n.GridItemType.Column?n.css`
        width: 100%;
        height: ${s}%;
      `:n.css`
      width: 100%;
      height: 100%;
    `),[s,r]);if(l.gridType===n.GridItemType.Row)return(0,n.jsx)(co,{className:a,css:c(),layout:t,layoutItemId:o,items:l.children});if(l.gridType===n.GridItemType.Column)return(0,n.jsx)(po,{className:a,css:c(),layout:t,layoutItemId:o,items:l.children});if(l.gridType===n.GridItemType.Tab)return(0,n.jsx)(go,{className:a,css:c(),layout:t,layoutItemId:o,items:l.children});const p=function(e,t){var o,i;let a=0;const l=eo(e,e.setting.rootItem);if(l&&(null===(o=l.children)||void 0===o?void 0:o.length)>0){const o=[...l.children];for(;o.length>0;){const l=o.shift(),r=eo(e,l),s=eo(e,r.parent);if(`${r.id}`===t||s.gridType===n.GridItemType.Tab&&s.children.includes(t))return a;(null===(i=r.children)||void 0===i?void 0:i.length)>0?o.unshift(...r.children):(s.gridType!==n.GridItemType.Tab||s.gridType===n.GridItemType.Tab&&0===s.children.indexOf(l))&&(a+=1)}}return a}(t,o),g=function(e,t){var o;let n=eo(e,t);if((null===(o=null==n?void 0:n.children)||void 0===o?void 0:o.length)>0)return!1;for(;null!=n;){const t=n.parent;if(null==t)break;const o=eo(e,t),i=o.children.length;if(+o.children[i-1]!=+n.id)return!1;n=o}return!0}(t,o);return(0,n.jsx)(io,{css:c(),className:(0,n.classNames)(`d-flex ${a}`,{"is-last":i}),layoutId:t.id,layoutItemId:o,delay:p*u,isLastChild:g})}function co(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,l=n.React.useRef();n.hooks.useEffectOnce((()=>{n.moduleLoader.loadModule("jimu-for-builder").then((e=>{l.current=e.getAppConfigAction}))}));const r=n.hooks.useEventCallback(((e,o)=>{const n=l.current(),a=i.indexOf(e),r=i[a+1],s=t.content[e],d=t.content[r];n.editLayoutItemProperty({layoutId:t.id,layoutItemId:e},"bbox",{width:+s.bbox.width+o}).editLayoutItemProperty({layoutId:t.id,layoutItemId:r},"bbox",{width:+d.bbox.width-o}).exec()}));return(0,n.jsx)("div",{className:`d-flex ${a}`,css:n.css`
        .is-last {
          width: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
      `,"data-layoutid":t.id,"data-layoutitemid":o},i.map(((e,o)=>{return a=e,l=o===i.length-1,(0,n.jsx)(n.React.Fragment,{key:a},(0,n.jsx)(uo,{key:a,layout:t,layoutItemId:a}),!l&&(0,n.jsx)(so,{referenceItemId:a,layoutId:t.id,direction:"row",onResizeEnd:r}));var a,l})))}function po(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,l=n.React.useRef();n.hooks.useEffectOnce((()=>{n.moduleLoader.loadModule("jimu-for-builder").then((e=>{l.current=e.getAppConfigAction}))}));const r=n.hooks.useEventCallback(((e,o,n)=>{const a=l.current(),r=i.indexOf(e),s=i[r+1],d=t.content[e],u=t.content[s];a.editLayoutItemProperty({layoutId:t.id,layoutItemId:e},"bbox",{width:+d.bbox.width+n}).editLayoutItemProperty({layoutId:t.id,layoutItemId:s},"bbox",{width:+u.bbox.width-n}).exec()}));return(0,n.jsx)("div",{className:`d-flex flex-column ${a}`,css:n.css`
        .is-last {
          height: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
      `,"data-layoutid":t.id,"data-layoutitemid":o},i.map(((e,o)=>{return a=e,l=o===i.length-1,(0,n.jsx)(n.React.Fragment,{key:a},(0,n.jsx)(uo,{key:a,layout:t,layoutItemId:a}),!l&&(0,n.jsx)(so,{referenceItemId:a,layoutId:t.id,direction:"col",onResizeEnd:r}));var a,l})))}function go(e){const{layout:t,layoutItemId:o,items:i,className:a}=e,l=n.hooks.useTranslation(v.defaultMessages),r=e=>function(e,t,o){var i,a,l,r,s,d,u;const{layoutId:c,layoutItemId:p}=t,g=e.layouts[c].content[p];if((null==g?void 0:g.type)===n.LayoutItemType.Widget){const t=e.widgets[g.widgetId];return t?null!==(a=null!==(i=null==t?void 0:t.label)&&void 0!==i?i:g.label)&&void 0!==a?a:g.id:o("placeholder")}if((null==g?void 0:g.type)===n.LayoutItemType.Section)return e.sections[g.sectionId].label;return(null==g?void 0:g.gridType)===n.GridItemType.Row?null!==(l=g.label)&&void 0!==l?l:o("gridRow"):(null==g?void 0:g.gridType)===n.GridItemType.Column?null!==(r=g.label)&&void 0!==r?r:o("gridCol"):(null==g?void 0:g.gridType)===n.GridItemType.Tab?null!==(s=g.label)&&void 0!==s?s:o("tabs"):null!==(u=null!==(d=null==g?void 0:g.label)&&void 0!==d?d:null==g?void 0:g.id)&&void 0!==u?u:""}((0,n.getAppStore)().getState().appConfig,{layoutId:t.id,layoutItemId:e},l);return(0,n.jsx)("div",{className:a,"data-layoutid":t.id,"data-layoutitemid":o},(0,n.jsx)(v.Tabs,{type:"tabs",fill:!0,scrollable:!0,className:"w-100 h-100",css:n.css`
          & > .tab-content {
            overflow: hidden;
          }
        `},[...i].map(((e,o)=>((e,o)=>(0,n.jsx)(v.Tab,{key:o,id:`${o}`,title:r(e)},(0,n.jsx)(uo,{layout:t,layoutItemId:e})))(e,o)))))}class yo extends n.React.PureComponent{findExtension(){const e=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find((e=>e.layoutType===n.LayoutType.GridLayout));this.layoutTransform=null==t?void 0:t.transformLayout}}render(){var e,t;const{layouts:o,layout:i,browserSizeMode:a,mainSizeMode:l,className:r}=this.props;let s=i;o[a]!==i.id&&(null==this.layoutTransform&&this.findExtension(),null!=this.layoutTransform&&(s=this.layoutTransform(i,l,a)));const{rootItem:d}=null!==(e=s.setting)&&void 0!==e?e:{},u=null===(t=s.content)||void 0===t?void 0:t[d],c=(0,n.classNames)("layout grid-layout d-flex w-100 h-100",r);return(0,n.jsx)("div",{className:c,css:n.css`overflow: hidden;${to(s.setting)};`,"data-layoutid":s.id},(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!1}},(0,n.jsx)(n.OneByOneAnimation,{oid:s.id,"data-layoutid":s.id,className:"trail-container d-flex w-100 h-100",css:n.css`
              width: 100%;
            `},u?(0,n.jsx)(uo,{className:"w-100 h-100",layout:s,layoutItemId:d}):this.props.children)))}}const vo=n.ReactRedux.connect(ce)(yo);function ho(e){var t,o;const{layoutId:i,layoutItemId:a}=e,l=n.ReactRedux.useSelector((e=>{var t,o;const l=e.appConfig.layouts[i].content[a];if(l.type===n.LayoutItemType.Widget){const o=l.widgetId,n=e.appConfig.widgets[o];return null!==(t=null==n?void 0:n.label)&&void 0!==t?t:""}const r=l.sectionId,s=e.appConfig.sections[r];return null!==(o=null==s?void 0:s.label)&&void 0!==o?o:""})),r=n.ReactRedux.useSelector((e=>{var t,o,l,r;const s=e.appConfig.layouts[i].content[a];if(s.type===n.LayoutItemType.Widget){const n=s.widgetId,i=e.appConfig.widgets[n];return"string"==typeof(null==i?void 0:i.icon)?i.icon:null!==(o=null===(t=null==i?void 0:i.icon)||void 0===t?void 0:t.svg)&&void 0!==o?o:""}const d=s.sectionId,u=e.appConfig.sections[d];return"string"==typeof(null==u?void 0:u.icon)?u.icon:null!==(r=null===(l=null==u?void 0:u.icon)||void 0===l?void 0:l.svg)&&void 0!==r?r:""})),s=n.ReactRedux.useSelector((e=>{var t,o;const n=e.appConfig.layouts[i].parent.id;return null===(o=null===(t=e.appConfig.widgets[n].config)||void 0===t?void 0:t.header)||void 0===o?void 0:o.showWidgetIcon})),d=n.ReactRedux.useSelector((e=>{var t,o;const n=e.appConfig.layouts[i].parent.id;return null===(o=null===(t=e.appConfig.widgets[n].config)||void 0===t?void 0:t.header)||void 0===o?void 0:o.widgetIconSize})),u=n.ReactRedux.useSelector((e=>{var t,o;const n=e.appConfig.layouts[i].parent.id;return null===(o=null===(t=e.appConfig.widgets[n].config)||void 0===t?void 0:t.header)||void 0===o?void 0:o.widgetIconColor})),c=n.ReactRedux.useSelector((e=>{var t,o;const n=e.appConfig.layouts[i].parent.id;return null===(o=null===(t=e.appConfig.widgets[n].config)||void 0===t?void 0:t.header)||void 0===o?void 0:o.textStyle}));return(0,n.jsx)("div",{className:"label d-flex align-items-center h-100"},(0,n.jsx)(n.React.Fragment,null,s&&(0,n.jsx)(v.Icon,{icon:r,size:null!=d?d:16,color:u}),(0,n.jsx)("div",{className:"ml-2 text-truncate",css:n.css`
            font-size: ${null!==(t=null==c?void 0:c.size)&&void 0!==t?t:"1rem"};
            font-weight: ${(null==c?void 0:c.bold)?"bold":"normal"};
            font-style: ${(null==c?void 0:c.italic)?"italic":"normal"};
            text-decoration: ${(null==c?void 0:c.underline)?"underline":""} ${(null==c?void 0:c.strike)?"line-through":""};
            color: ${null!==(o=null==c?void 0:c.color)&&void 0!==o?o:"inherit"};
          `},l)))}const fo=(e,t,o,i)=>{const a=null!=o?o:{},l=null!=i?i:{},{padding:r,expandedColor:s,collapsedColor:d,border:u,borderLeft:c,borderRight:p,borderTop:g,borderBottom:y,borderRadius:h}=a,{padding:f,border:m,borderRadius:I,backgroundColor:x}=l;return n.css`
  position: relative;
  touch-action: none;
  user-select: none;
  & + .foldable-panel {
    margin-top: ${t}px;
  }
  .panel-header {
    padding: ${v.styleUtils.toCSSPadding(r)};
    border: ${v.styleUtils.toCSSBorder(u)};
    border-left: ${v.styleUtils.toCSSBorder(c)};
    border-right: ${v.styleUtils.toCSSBorder(p)};
    border-top: ${v.styleUtils.toCSSBorder(g)};
    border-bottom: ${v.styleUtils.toCSSBorder(y)};
    border-radius: ${v.styleUtils.toCSSBorderRadius(h)};
    background-color: ${null!=s?s:"var(--sys-color-primary-main)"};
    .tool-drag-handler {
      cursor: pointer;
      flex-grow: 1;
      flex-shrink: 1;
    }
  }
  .panel-content {
    padding: ${v.styleUtils.toCSSPadding(f)};
    border: ${v.styleUtils.toCSSBorder(m)};
    border-left: ${v.styleUtils.toCSSBorder(l.borderLeft)};
    border-right: ${v.styleUtils.toCSSBorder(l.borderRight)};
    border-top: ${v.styleUtils.toCSSBorder(l.borderTop)};
    border-bottom: ${v.styleUtils.toCSSBorder(l.borderBottom)};
    border-radius: ${v.styleUtils.toCSSBorderRadius(I)};
    overflow: auto;
    background-color: ${null!=x?x:"none"};
    position: relative;
    height: ${e};
    opacity: 1;
    transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  &.collapsed {
    .panel-header {
      background-color: ${null!=d?d:"var(--sys-color-primary-main)"};
    }
    .panel-content {
      height: 0;
      padding: unset;
      border: none;
      opacity: 0;
      .layout-item {
        display: none;
      }
    }
  }
  `};function mo(e){var t,o,i,a,l,r,s,d,u,c,p;const{layoutId:g,layoutItemId:y,expanded:h,height:f,gap:m,onExpandedChange:I}=e,x=n.ReactRedux.useSelector((e=>C(e.appConfig,{layoutId:g,layoutItemId:y}))),w=n.ReactRedux.useSelector((e=>{var t;const o=e.appConfig.layouts[g].parent.id;return null===(t=e.appConfig.widgets[o].config)||void 0===t?void 0:t.header})),b=n.ReactRedux.useSelector((e=>{var t;const o=e.appConfig.layouts[g].parent.id;return null===(t=e.appConfig.widgets[o].config)||void 0===t?void 0:t.panel})),S=n.ReactRedux.useSelector((e=>x.type===n.LayoutItemType.Widget&&ve(x.widgetId,e.appConfig))),T=null!==(t=null==w?void 0:w.togglePosition)&&void 0!==t?t:"right",R=n.React.useCallback((()=>{I(y,!h)}),[y,h,I]),j=h?null===(o=null==w?void 0:w.collapseIcon)||void 0===o?void 0:o.svg:null===(i=null==w?void 0:w.expandIcon)||void 0===i?void 0:i.svg;return(0,n.jsx)("div",{className:(0,n.classNames)("layout-item foldable-panel",{collapsed:!h,"functional-widget":S}),"data-layoutid":g,"data-layoutitemid":y,css:fo(f,m,w,b)},(0,n.jsx)("div",{className:"panel d-flex flex-column"},(0,n.jsx)("div",{className:(0,n.classNames)("panel-header d-flex align-items-center",{"flex-row-reverse":"left"===T}),onClick:R,onKeyDown:null},(0,n.jsx)("div",{className:"tool-drag-handler"},g&&y&&(0,n.jsx)(ho,{layoutId:g,layoutItemId:y})),j&&(0,n.jsx)("div",{className:(0,n.classNames)("actions",{"ml-auto":"right"===T})},(0,n.jsx)(v.Button,{icon:!0,type:"tertiary",size:"sm"},(0,n.jsx)(v.Icon,{icon:j,size:h?null===(l=null===(a=null==w?void 0:w.collapseIcon)||void 0===a?void 0:a.properties)||void 0===l?void 0:l.size:null===(s=null===(r=null==w?void 0:w.expandIcon)||void 0===r?void 0:r.properties)||void 0===s?void 0:s.size,color:h?null===(u=null===(d=null==w?void 0:w.collapseIcon)||void 0===d?void 0:d.properties)||void 0===u?void 0:u.color:null===(p=null===(c=null==w?void 0:w.expandIcon)||void 0===c?void 0:c.properties)||void 0===p?void 0:p.color})))),(0,n.jsx)("div",{className:(0,n.classNames)("panel-content d-flex flex-grow-1 flex-shrink-1")},e.children)))}function Io(e){var t,o,i,a;const{layoutId:l,layoutItem:r,layoutItemId:s,expanded:d,gap:u,onExpandedChange:c}=e,p=(null==r?void 0:r.type)===n.LayoutItemType.Widget,g=(null==r?void 0:r.type)===n.LayoutItemType.Section,y=n.ReactRedux.useSelector((t=>ge(t,e)),n.ReactRedux.shallowEqual),v=n.ReactRedux.useSelector((e=>{if(g)return Ve(e,r.sectionId)}),n.ReactRedux.shallowEqual);let h;h=(null===(o=null===(t=r.setting)||void 0===t?void 0:t.autoProps)||void 0===o?void 0:o.height)===S.Auto?"auto":r.bbox.height;const f=ze(null!==(i=r.setting)&&void 0!==i?i:{}),m=we(null===(a=r.setting)||void 0===a?void 0:a.aspectRatio);return(0,n.jsx)(mo,{layoutId:l,layoutItemId:s,height:h,expanded:d,gap:u,onExpandedChange:c},p&&(0,n.jsx)(Ke,Object.assign({layoutId:l,layoutItemId:s,forceAspectRatio:f,aspectRatio:m},y)),g&&(0,n.jsx)(Ct,Object.assign({layoutId:l,layoutItemId:s},v)))}var xo=l(8416),wo=l.n(xo),bo=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const So=e=>{const t=window.SVG,{className:o}=e,i=bo(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:wo()},i)):n.React.createElement("svg",Object.assign({className:a},i))};var Co=l(5741),To=l.n(Co),Ro=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const jo=e=>{const t=window.SVG,{className:o}=e,i=Ro(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:To()},i)):n.React.createElement("svg",Object.assign({className:a},i))},Po=n.css`
  // position: sticky;
  // top: 0;
  margin-bottom: 4px;
  z-index: 1;
`;function $o(e){const{onExpandAll:t,onCollapseAll:o}=e,i=n.hooks.useTranslation();return(0,n.jsx)("div",{css:Po,className:"d-flex align-items-center justify-content-end"},(0,n.jsx)(v.Tooltip,{title:i("expandAll")},(0,n.jsx)(v.Button,{type:"tertiary",icon:!0,size:"sm",onClick:t},(0,n.jsx)(jo,null))),(0,n.jsx)(v.Tooltip,{title:i("collapseAll")},(0,n.jsx)(v.Button,{type:"tertiary",icon:!0,size:"sm",onClick:o,className:"ml-1"},(0,n.jsx)(So,null))))}function Mo(e,t){const o=e[t.browserSizeMode]||e[t.appConfig.mainSizeMode],n=t.appConfig.layouts[o].parent.id;return t.appConfig.widgets[n]}class Lo extends n.React.PureComponent{constructor(e){super(e),this.handleExpandedChange=(e,t)=>{t?this.props.singleMode?this.setState({expandedItems:[e]}):this.state.expandedItems.includes(e)||this.setState({expandedItems:[...this.state.expandedItems,e]}):this.state.expandedItems.includes(e)&&this.setState({expandedItems:this.state.expandedItems.filter((t=>t!==e))})},this.expandAll=()=>{const{layout:e}=this.props;this.setState({expandedItems:[...e.order]})},this.collapseAll=()=>{this.setState({expandedItems:[]})},this.state={expandedItems:this.props.expandByDefault.split(",")}}createItem(e){const{layout:t,gap:o}=this.props;return t.content[e].isPending?null:(0,n.jsx)(Io,{key:e,layoutId:t.id,layoutItemId:e,expanded:this.state.expandedItems.includes(e),gap:o,layoutItem:t.content[e],onExpandedChange:this.handleExpandedChange})}render(){var e;const{layout:t,className:o,showToggleAll:i,padding:a}=this.props,l=null!==(e=t.order)&&void 0!==e?e:[];return(0,n.jsx)("div",{className:(0,n.classNames)("layout foldable-layout w-100 d-flex flex-column",o),css:n.css`position: relative; overflow: auto; padding: ${v.styleUtils.toCSSPadding(a)}`,"data-layoutid":t.id},i&&(0,n.jsx)($o,{onExpandAll:this.expandAll,onCollapseAll:this.collapseAll}),l.map((e=>this.createItem(e))))}}const Oo=(0,n.createSelector)([(e,t)=>ce(e,t),(e,t)=>{var o,n;return null!==(n=null===(o=Mo(t.layouts,e).config)||void 0===o?void 0:o.singleMode)&&void 0!==n&&n},(e,t)=>{var o,n;return null!==(n=null===(o=Mo(t.layouts,e).config)||void 0===o?void 0:o.showToggleAll)&&void 0!==n&&n},(e,t)=>{var o,n;return null!==(n=null===(o=Mo(t.layouts,e).config)||void 0===o?void 0:o.gap)&&void 0!==n?n:4},(e,t)=>{var o;return null===(o=Mo(t.layouts,e).config)||void 0===o?void 0:o.padding},(e,t)=>{var o,n,i;const a=t.layouts[e.browserSizeMode]||t.layouts[e.appConfig.mainSizeMode],l=e.appConfig.layouts[a],r=null!==(n=null===(o=Mo(t.layouts,e).config)||void 0===o?void 0:o.expandedItems)&&void 0!==n?n:[],s=[];return r.length>0&&Object.keys(null!==(i=l.content)&&void 0!==i?i:{}).forEach((e=>{const t=l.content[e];r.includes(t.widgetId)&&s.push(e)})),s.join(",")}],((e,t,o,n,i,a)=>Object.assign({singleMode:t,showToggleAll:o,gap:n,padding:i,expandByDefault:a},e))),ko=n.ReactRedux.connect(Oo)(Lo);class Ao{constructor(){this.id="flow-layout-transformer",this.layoutType=n.LayoutType.FlowLayout}transformLayout(e,t,o){if(t!==o&&o===n.BrowserSizeMode.Small){let t=(0,n.Immutable)(e);return(e.order||[]).forEach((e=>{t=t.setIn(["content",e,"setting","heightMode"],"auto")})),t}return e}transformLayoutItem(e,t,o,n,i,a){return{index:t,item:e}}}function Eo(e,t,o){var n;const i=k(e,o),a=function(e,t,o){var n,i,a,l,r,s,d;const u=e.widgets[o];if(null!=u){const c=Te(),p=e.mainSizeMode,g=u.layouts.DEFAULT[c],y=u.layouts.DEFAULT[p],v=be(null!==(r=null===(l=null===(a=null===(i=(null!==(n=e.layouts[g])&&void 0!==n?n:e.layouts[y]).setting)||void 0===i?void 0:i.style)||void 0===a?void 0:a.padding)||void 0===l?void 0:l.number)&&void 0!==r?r:[0]),h=null!==(d=null===(s=null==t?void 0:t[o])||void 0===s?void 0:s.height)&&void 0!==d?d:0;let f=v[0],m=v[2];return ae(f)&&(f=ue(f,h)),ae(m)&&(m=ue(m,h)),h-f-m}return 0}(e,t,i);if(a>0){const t=null!==(n=e.layouts[o].order)&&void 0!==n?n:[],i={};return t.forEach((t=>{const n=e.layouts[o].content[t];i[t]=Se(a,n)})),i}return null}class No{constructor(){this.id="row-layout-transformer",this.layoutType=n.LayoutType.RowLayout}transformLayout(e,t,o,i){var a,l;if(t===o)return e;let r=(0,n.Immutable)(e);if(o===n.BrowserSizeMode.Small){const t=Eo(i,null===(a=window.runtimeInfo)||void 0===a?void 0:a.widgets,e.id);let o=0;Object.keys(null!==(l=e.content)&&void 0!==l?l:{}).sort(((t,o)=>parseInt(e.content[t].bbox.left,10)-parseInt(e.content[o].bbox.left,10))).forEach((i=>{var a,l,s;const d=e.content[i];if(!d.isPending){if(r=r.setIn(["content",i,"bbox"],{left:12*o,width:12,height:null!==(l=null===(a=d.bbox)||void 0===a?void 0:a.height)&&void 0!==l?l:"auto"}),null!=t){const e=null!==(s=d.setting)&&void 0!==s?s:(0,n.Immutable)({});r=r.setIn(["content",i,"bbox","height"],t[i].height).setIn(["content",i,"setting"],e.merge(t[i].setting))}o+=1}}))}return r}transformLayoutItem(e,t,o,n,i,a){return{item:e,index:t}}}class zo{constructor(){this.id="grid-layout-transformer",this.layoutType=n.LayoutType.GridLayout,this.transformLayout=(e,t,o)=>{var i,a,l;if(t!==o&&o===n.BrowserSizeMode.Small){let t=(0,n.Immutable)(e);const o=null===(i=e.setting)||void 0===i?void 0:i.rootItem,r=null===(a=e.setting)||void 0===a?void 0:a.mainItemId;if(o&&(null===(l=e.content)||void 0===l?void 0:l[o])){const i=[],a=e.content[o];if(r){let l;if(Object.keys(e.content).some((t=>{const o=e.content[t];return(o.widgetId===r||o.sectionId===r)&&(l=t,!0)})),l){if(t=this.collectItem(e,o,l,a.children,i),(null==i?void 0:i.length)>0){const a=`${Tt.utils.getMaximumId(e)+1}`,r={id:a,bbox:{width:50},gridType:n.GridItemType.Tab,children:i,parent:o};t=t.setIn(["content",a],r),i.forEach((e=>{t=t.setIn(["content",e,"parent"],a)})),t=t.setIn(["content",o,"gridType"],n.GridItemType.Column),t=t.setIn(["content",o,"children"],[l,a]),t=t.setIn(["content",l,"parent"],o).setIn(["content",l,"bbox","width"],50)}return t}}t=this.collectItem(e,o,null,a.children,i),i.length>0&&(t=t.setIn(["content",o,"gridType"],n.GridItemType.Tab),t=t.setIn(["content",o,"children"],i))}return t}return e},this.collectItem=(e,t,o,i,a)=>{let l=e;return null==i||i.forEach((i=>{var r;if(!e.content[i].isPending&&i!==o){const s=e.content[i];s.gridType!==n.GridItemType.Column&&s.gridType!==n.GridItemType.Row&&s.gridType!==n.GridItemType.Tab?(a.push(i),o||(l=l.setIn(["content",i,"parent"],t))):(null===(r=s.children)||void 0===r?void 0:r.length)>0&&(l=this.collectItem(l,t,o,s.children,a))}})),l}}transformLayoutItem(e,t,o,n,i,a){return{index:t,item:e}}}const Bo={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:v.DistanceUnits.PIXEL}}},Fo={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0},Ho=(0,n.createSelector)([(e,t)=>{var o;const{layoutItem:n}=t,i=null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.selection;return!!i&&(i.layoutId===t.layoutId&&i.layoutItemId===n.id)},(e,t)=>{var o,i,a;const{layoutItem:l}=t;let r=[0,0,0,0];if(l.type===n.LayoutItemType.Widget){const t=l.widgetId,n=e.appConfig.widgets[t];n&&(r=v.styleUtils.expandStyleArray(null===(a=null===(i=null===(o=n.config)||void 0===o?void 0:o.style)||void 0===i?void 0:i.padding)||void 0===a?void 0:a.number))}return r[0]+r[2]},(e,t)=>{const{layoutItem:o}=t;let i=!0;if(o.type===n.LayoutItemType.Widget){const t=o.widgetId,n=e.appConfig.widgets[t];if(n){const t=Object.keys(n.layouts)[0],o=H(n.layouts[t],e.browserSizeMode,e.appConfig.mainSizeMode),a=e.appConfig.layouts[o];a&&Object.keys(a.content||[]).length>0&&Object.keys(a.content||[]).some((e=>{if(!a.content[e].isPending)return i=!1,!0}))}}return i}],((e,t,o)=>({selected:e,padding:t,isEmpty:o})));function Wo(e){const t=parseFloat(null==e?void 0:e.width);return t>0?`${e.width}`.includes("px")?`${Math.round(t)}px`:`${Math.round(t)}%`:"100%"}class Vo extends n.React.PureComponent{componentDidMount(){var e;const t=null!==(e=(0,n.getAppStore)().getState().queryObject)&&void 0!==e?e:{},{layoutId:o,layoutItem:i}=this.props,a=`${o}_block_${i.id}`;if(t.block_id===a){const e=document.getElementById(a);setTimeout((()=>{e.scrollIntoView({behavior:"smooth",block:"start"})}),500)}}calHeight(e){const t=function(e,t){const o=se(e.bbox||{},"height");if(!o||ae(o))return"auto";switch(t.heightMode){case"auto":return"auto";case"fixed":return o}}(this.props.layoutItem,e);return this.autoHeight="auto"===t,t}getStyle(e){const{index:t,gutter:o}=this.props,i=xe()?-1:1;return[n.css`
        margin-top: ${t>0?`${o}px`:"unset"};
        width: ${Wo(e)};
        height: ${this.calHeight(e)};
        flex-shrink: 0;
      `,e.offsetX||e.offsetY?`translate(${(e.offsetX||0)*i}px, ${e.offsetY||0}px)`:null]}render(){const{layoutId:e,layoutItem:t,onClick:o,isEmpty:i}=this.props;if(!t||i)return null;const a=(0,n.classNames)("flow-layout-item","d-flex"),l=n.lodash.assign({},Fo,t.setting),r=Fe(this.props),[s,d]=this.getStyle(l);return(0,n.jsx)(Mt,Object.assign({id:`${e}_block_${t.id}`,css:s,style:{transform:d},layoutId:e,layoutItemId:t.id,onClick:o,className:a,autoHeight:this.autoHeight},r))}}const Do=n.ReactRedux.connect(Ho)(Vo);class Go extends n.React.PureComponent{calculatePosition(){const{layoutItem:e}=this.props;return function(e,t={}){var o,i,a;const l=e.setting,r=null!==(o=null==l?void 0:l.floatingArea)&&void 0!==o?o:1,s=`${null!==(i=null==l?void 0:l.offsetX)&&void 0!==i?i:0}px`,d=`${null!==(a=null==l?void 0:l.offsetY)&&void 0!==a?a:0}px`,{dh:u,dw:c,initWidth:p,initHeight:g,isResizing:y}=t,v=xe()?`translateX(calc(50% + ${s}))`:`translateX(calc(-50% + ${s}))`,h={};switch(r){case 1:h.left=s,h.top=d,h.transform=null;break;case 2:h.left="50%",h.top=d,h.transform=v;break;case 3:h.right=s,h.top=d,h.transform=null;break;case 4:h.left=s,h.top="50%",h.transform=`translateY(calc(-50% + ${d}))`;break;case 5:h.left="50%",h.top="50%",h.transform=`${v} translateY(calc(-50% + ${d}))`;break;case 6:h.right=s,h.top="50%",h.transform=`translateY(calc(-50% + ${d}))`;break;case 7:h.left=s,h.bottom=d,h.transform=null;break;case 8:h.left="50%",h.bottom=d,h.transform=v;break;case 9:h.right=s,h.bottom=d,h.transform=null}return n.css`
    position: fixed;
    z-index: 1;
    width: ${y?`${p+c}px`:se(e.bbox,"width")};
    height: ${y?`${g+u}px`:se(e.bbox,"height")};
    left: ${h.left};
    right: ${h.right};
    top: ${h.top};
    bottom: ${h.bottom};
    transform: ${h.transform};
  `}(e)}render(){const{layoutId:e,layoutItem:t,onClick:o}=this.props;if(!t)return null;const i=(0,n.classNames)("flow-layout-item floating","d-flex");return(0,n.jsx)(Mt,{css:this.calculatePosition(),layoutId:e,layoutItemId:t.id,onClick:o,className:i})}}const Uo=2;function _o(){const e=[0];for(let t=1;t<=100;t++)e.push(t/100);return e}function Xo(e){switch(e){case n.ScreenTriggerType.Top:return`0% 0% -${100-Uo}% 0%`;case n.ScreenTriggerType.Bottom:return`-${100-Uo}% 0% -2px 0%`;case n.ScreenTriggerType.Upper:return`-${100/3-Uo/2}% 0% -${200/3-Uo/2}% 0%`;case n.ScreenTriggerType.Lower:return`-${200/3-Uo/2}% 0% -${100/3-Uo/2}% 0%`;default:return}}function Yo(e,t,o,i){const a=n.React.useRef(),l=n.React.useRef();n.React.useEffect((()=>{a.current&&(a.current.unobserve(e),a.current=null);if(e&&"function"==typeof IntersectionObserver){const n=new IntersectionObserver((e=>{(e=>{const t=e.boundingClientRect,o=e.rootBounds,n=Math.abs(t.bottom-o.top)>=Math.abs(t.top-o.top);if(e.isIntersecting){if(l.current=!0,n)i(!0)}else if(l.current&&(l.current=!1,n))i(!1)})(e[0])}),{threshold:_o(),root:t||document,rootMargin:Xo(o)});return n.observe(e),a.current=n,()=>{a.current.unobserve(e),a.current=null}}}),[e,t,i,o])}const Jo=.33,qo=.25;function Zo(e,t,o,i,a,l,r,s,d){const{side:u,size:c,offset:p,background:g,overlay:y=!0,padding:h}=e.panel||{},f=(0,n.getAppStore)().getState().appContext.isRTL?"left"===u?"-":"":"right"===u?"-":"",m=v.styleUtils.toBackgroundEmotionStyle(null!=g?g:{}),I=parseFloat(a);if(d){const e=!y;return n.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${r===n.ScreenTransitionType.Fade?i?"1":"0.5":null};
      min-height: ${s===n.ScreenTransitionType.Cover?`${t}px`:null};
      padding-top: ${s!==n.ScreenTransitionType.Fade&&e?`${Math.round(t*Jo)}px`:null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(t*Jo)}px; */
      }

      .panel-content {
        width: 100%;
        ${y?"":m};
        /* margin-top: ${r===n.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: auto;
          ${y?m:""};
          min-height: ${Math.round(t*qo)}px;
          padding: ${v.styleUtils.toCSSPadding(h)};
        }

        > .layout-wrapper > .column-layout > .trail-container,
        > .column-layout > .trail-container {
          overflow-y: hidden;
        }

        > .layout-wrapper > .placeholder-btn {
          pointer-events: auto;
          ${y?m:""};
        }

        .panel-spacing {
          height: ${Math.round(t*I/100)}px;
        }
      }

      .panel-content-placeholder {
        width: 1px;
        min-height: ${t}px;
      }

      body:not(.design-mode) & {
        min-height: ${s===n.ScreenTransitionType.Cover?"100vh":null};
        min-height: ${s===n.ScreenTransitionType.Cover?"calc(var(--vh) * 100)":null};
        padding-top: ${s!==n.ScreenTransitionType.Fade&&e?100*Jo+"vh":null};
        padding-top: ${s!==n.ScreenTransitionType.Fade&&e?`calc(var(--vh) * ${100*Jo})`:null};

        > .layout, > .layout-wrapper > .layout {
          min-height: ${Math.round(100*qo)}vh;
          min-height: calc(var(--vh) * ${Math.round(100*qo)});
        }

        .panel-content-placeholder {
          min-height: 100vh;
          min-height: calc(var(--vh) * 100);
        }

        .panel-spacing {
          height: ${I}vh;
          height: calc(var(--vh) * ${I});
        }
      }
    `}return n.css`
    width: 100%;
    background: transparent;
    pointer-events: none;
    display: flex;
    flex-direction: ${"right"===u?"row-reverse":"row"};
    justify-content: ${"center"===u&&y?"center":"flex-start"};
    position: relative;
    opacity: ${r===n.ScreenTransitionType.Fade?i?"1":"0.5":null};

    &.top-spacing > .panel-content {
      /* margin-top: ${Math.round(2*t/3)}px; */
    }

    .panel-content {
      width: ${c};
      transform: ${y&&Math.abs(parseFloat(p))>0?`translateX(${f}${p})`:null};
      flex: 0 auto;
      min-height: ${l?`${t}px`:"unset"};
      ${y?"":m};

      > .layout,
      > .layout-wrapper > .layout {
        pointer-events: auto;
        ${y?m:""};
        min-height: ${Math.round(t*qo)}px;
        padding: ${v.styleUtils.toCSSPadding(h)};
      }

      > .layout-wrapper > .column-layout > .trail-container,
      > .column-layout > .trail-container {
        overflow-y: hidden;
      }

      > .layout-wrapper > .placeholder-btn {
        pointer-events: auto;
        ${y?m:""};
      }

      .panel-spacing {
        height: ${Math.round(t*I/100)}px;

        &.last-item {
          height: ${l?`${Math.round(t*I/100)}`:t}px;
        }
      }
    }

    .panel-content-placeholder {
      width: 1px;
      min-height: ${l?t:Math.round(t*qo)}px;
    }

    body:not(.design-mode) & {
      &.top-spacing > .panel-content {
        /* margin-top: 66.7vh; */
      }

      .panel-content {
        min-height: ${l?o>0?`calc(100vh - ${o}px)`:"100vh":"unset"};
        min-height: ${l?o>0?`calc(var(--vh) * 100 - ${o}px)`:"calc(var(--vh) * 100)":"unset"};
        > .layout, > .layout-wrapper > .layout {
          min-height: unset;
        }

        .panel-spacing {
          height: ${I}vh;
          height: calc(var(--vh) * ${I});

          &.last-item {
            height: ${l?I:100}vh;
            height: calc(var(--vh) * ${l?I:100});
          }
        }
      }
      .panel-content-placeholder {
        min-height: ${l?"100":Math.round(100*qo)}vh;
        min-height: calc(var(--vh) * ${l?"100":Math.round(100*qo)});
      }
    }
  `}function Ko(e){var t;const{index:o,screenId:i,onInteractionChange:a,onHeightChange:l,viewHeight:r,headerHeight:s,layoutEntry:d,isActive:u,isSmallSize:c,transitionType:p,screenTransitionType:g,triggerType:y,stretched:v,verticalSpace:h="0"}=e,f=n.ReactRedux.useSelector((e=>e.appConfig.screens[i])),{panel:m}=f,I=n.React.useRef(),[x,w]=n.React.useState(!1),b=n.React.useRef(),S=n.React.useCallback((e=>{a(o,e)}),[o,a]);n.React.useEffect((()=>(b.current=n.lodash.debounce(l,200),()=>{var e;null===(e=b.current)||void 0===e||e.cancel()})),[l]);const C=n.React.useCallback(((e,t)=>{var n;null===(n=b.current)||void 0===n||n.call(b,o,t)}),[o]);return Yo(I.current,e.refElement,c?n.ScreenTriggerType.Lower:null!=y?y:n.ScreenTriggerType.Bottom,S),n.React.useEffect((()=>{w(!0)}),[]),(0,n.jsx)("div",{className:(0,n.classNames)("screen-side-panel",{"top-spacing":0===o&&((null===(t=f.panel)||void 0===t?void 0:t.overlay)||c)}),"data-screenid":i,"data-index":o,ref:I,css:Zo(f,r,s,u,h,v||null==m,p,g,c)},m&&(0,n.jsx)("div",{className:"panel-content"},(0,n.jsx)(d,{layouts:m.layout}),(0,n.jsx)("div",{className:(0,n.classNames)("panel-spacing",{"last-item":e.isLast})})),!m&&(0,n.jsx)("div",{className:"panel-content-placeholder"}),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:C}))}var Qo=l(3529),en=l.n(Qo),tn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const on=e=>{const t=window.SVG,{className:o}=e,i=tn(e,["className"]),a=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:a,src:en()},i)):n.React.createElement("svg",Object.assign({className:a},i))},nn=(0,rt.withBuilderTheme)(v.Tooltip);function an(e){const{rootLayoutId:t,viewHeight:o,headerHeight:i,screenId:a,isActive:l,isAbsolute:r,isLast:s,isSmallSize:d,layoutEntry:u,isDesignMode:p,formatMessage:g,builderTheme:y}=e,h=n.ReactRedux.useSelector((e=>e.appConfig.screens[a])),f=n.ReactRedux.useSelector((e=>{var t,o,n;return null===(n=null===(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.screenPanelStates)||void 0===o?void 0:o[a])||void 0===n||n})),{main:m}=h,{side:I,size:x,overlay:w=!0}=h.panel||{},b=n.React.useRef(),S=n.React.useCallback((()=>{(0,n.getAppStore)().dispatch(n.appActions.screenPanelVisibleChanged(a,!0))}),[a]);const C=(0,n.classNames)("screen-main-panel",{"is-active":l,"last-one":s});return(0,n.jsx)(c.Provider,{value:!r||l},(0,n.jsx)("div",{id:`${t}_screen_${a}`,className:C,css:function(){var e,t,a,l;if(d){const a=!w&&null!=h.panel,l=a?`${Math.round(o*Jo)}px`:`${o}px`,r=a?`${Math.round(100*Jo)}`:"100";return n.css`
        pointer-events: none !important;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${o}px;

        > .layout {
          ${v.styleUtils.toBackgroundEmotionStyle(null!==(t=null===(e=h.main)||void 0===e?void 0:e.background)&&void 0!==t?t:{})};
          height: ${l} !important;
          border: none !important;
          pointer-events: auto;
        }

        body:not(.design-mode) & {
          height: ${i>0?`calc(100vh - ${i}px)`:"100vh"};
          height: ${i>0?`calc(var(--vh) * 100 - ${i}px)`:"calc(var(--vh) * 100)"};
          > .layout {
            height: ${r}vh !important;
            height: calc(var(--vh) * ${r}) !important;
          }
        }

        .spacing-area {
          flex: 1;
          background: transparent;
          pointer-events: none;
        }

        .toggle-visible-btn {
          position: absolute;
          bottom: 0;
          right: left;
          pointer-events: auto;
        }
      `}let s="0px",u="0px";"none"!==I&&(w||"right"===I||(s=x),w||"right"!==I||(u=x));const c=y?n.css`
      color: ${y.ref.palette.neutral[1200]};
      background-color: ${y.ref.palette.neutral[500]};
      border-color: ${y.ref.palette.neutral[600]};
      &:hover {
        color: ${y.ref.palette.black};
        background-color: ${y.ref.palette.neutral[600]};
      }
    `:null;return n.css`
      ${v.styleUtils.toBackgroundEmotionStyle(null!==(l=null===(a=h.main)||void 0===a?void 0:a.background)&&void 0!==l?l:{})};
      left: ${r?s:null};
      right: ${r?u:null};
      margin-left: ${r?null:s};
      margin-right: ${r?null:u};
      pointer-events: auto;
      display: flex;
      flex-direction: column;
      position: relative;

      > .layout {
        height: ${o}px !important;
        background: transparent;
        border: none !important;
      }

      body:not(.design-mode) & {
        > .layout {
          height: ${i>0?`calc(100vh - ${i}px)`:"100vh"} !important;
          height: ${i>0?`calc(var(--vh) * 100 - ${i}px)`:"calc(var(--vh) * 100)"} !important;
        }
      }

      .spacing-area {
        flex: 1;
        background: transparent;
        pointer-events: none;
      }

      .toggle-visible-btn {
        position: absolute;
        bottom: 0;
        right: 0;

        > button {
          ${c};
          svg {
            margin-right: 0;
            margin-left: 0;
          }
        }
      }
    `}(),ref:b,"data-screenid":a,"data-index":e.index},(0,n.jsx)(u,{layouts:m.layout,isInWidget:!0}),(0,n.jsx)("div",{className:"spacing-area"}),p&&!f&&(0,n.jsx)("div",{className:"toggle-visible-btn",onClick:S,"data-testid":"toggleBtn"},(0,n.jsx)(nn,{placement:"auto",title:g("showInDesignView")},(0,n.jsx)(v.Button,{type:"default",size:"sm",className:"rounded-1"},(0,n.jsx)(on,{size:"m"}))))))}function ln(e,t,o,i,a){return e===n.ScreenTransitionType.Fade?n.css`
      position: sticky;
      height: ${t}px;
      top: 0;

      body:not(.design-mode) & {
        height: ${o>0?`calc(100vh - ${o}px)`:"100vh"};
        height: ${o>0?`calc(var(--vh) * 100 - ${o}px)`:"calc(var(--vh) * 100)"};
        top: ${o>0?`${o}px`:0};
        .layout .exb-drop-area {
          pointer-events: none !important;
        }
      }

      .screen-main-panel {
        position: absolute;
        opacity: 0;
        visibility: hidden;
        z-index: 0;
        transition: ${i?null:"opacity 400ms"};
        top: 0;
        /* height: ${i?"unset":"100% !important"}; */

        .layout .exb-drop-area {
          pointer-events: none;
        }

        &.is-active {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          z-index: 1;

          .layout .exb-drop-area {
            pointer-events: auto;
          }
        }
      }
    `:e===n.ScreenTransitionType.Cover?n.css`
      position: sticky;
      height: ${t}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: 100%;
        overflow: unset;
        position: relative;

        .screen-main-panel {
          top: ${o>0?`${o}px`:0};
        }
      }

      & > div:first-of-type {
        margin-top: 0 !important;
      }

      .screen-main-panel {
        position: sticky;
        top: 0;
        margin-top: ${1===a?"0 !important":null};

        .spacing-area {
          display: none;
        }
      }
    `:e===n.ScreenTransitionType.Push?n.css`
      position: sticky;
      height: ${t}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: auto;
        overflow: unset;

        .screen-main-panel > .layout {
          top: ${o>0?`${o}px`:0};
        }
      }

      .screen-main-panel > .layout {
        position: sticky !important;
        top: 0;
      }
    `:void 0}function rn(e,t,o){return e===n.ScreenTransitionType.Fade?n.css`
      height: calc(100% - ${t}px);
      background: transparent;
      pointer-events: none;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
      }
    `:e===n.ScreenTransitionType.Cover||e===n.ScreenTransitionType.Push?n.css`
      height: calc(100% - ${t}px);
      background: transparent;
      pointer-events: none;
      display: block;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
        display: none;
      }
    `:void 0}function sn(e){const{rootLayoutId:t,activeIndex:o,viewHeight:i,headerHeight:a,screens:l,transitionType:r,isSmallSize:s,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p}=e;return(0,n.jsx)(n.React.Fragment,null,(0,n.jsx)("div",{className:"screen-container",css:ln(r,i,a,s,l.length)},l.map(((e,g)=>(0,n.jsx)(an,{key:e,rootLayoutId:t,index:g,isActive:o===g,screenId:e,viewHeight:i,headerHeight:a,isAbsolute:r===n.ScreenTransitionType.Fade,isLast:g===l.length-1,isSmallSize:s,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p})))),(0,n.jsx)("div",{className:"screen-placeholder",css:rn(r,i)}))}function dn(e,t){return n.css`
    position: relative;
    width: 100%;

    .main-panels {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 0;
    }

    .side-panels {
      position: relative;
      z-index: 1;
      pointer-events: none;

      > div:first-of-type > div.panel-content {
        padding-top: ${Math.round(100*Jo)}vh;
        padding-top: calc(var(--vh) * ${Math.round(100*Jo)});
      }

      /* > div:nth-last-of-type(2) {
        min-height: 100vh;
      } */
    }

    &.small-size .main-panels {
      z-index: ${t?0:1};
    }

    &.small-size .side-panels {
      z-index: ${t?1:0};
    }

    &.print-preview {
      .screen-container {
        height: auto;
        position: relative;

        .screen-main-panel {
          position: relative;
          opacity: 1 !important;
        }
      }
      .screen-side-panel {
        min-height: calc(var(--vh) * 100);
        opacity: 1 !important;
        .panel-spacing {
          display: none;
        }
      }
      .screen-placeholder {
        display: none;
      }
    }
  `}function un(e){var t;const{layoutId:o,layoutItemId:i,layoutItem:a}=e,{screenGroupId:l}=a,r=n.ReactRedux.useSelector((e=>e.appConfig.screenGroups[a.screenGroupId])),s=n.ReactRedux.useSelector((e=>{var t,o;return null!==(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==o&&o})),u=n.ReactRedux.useSelector((e=>e.appConfig.screenGroups[a.screenGroupId].screens.some((t=>null!=e.appConfig.screens[t].panel)))),c=n.ReactRedux.useSelector((e=>e.browserSizeMode)),{pageId:p}=n.React.useContext(d),g=n.ReactRedux.useSelector((e=>{const t=e.appConfig.pages[p];if(null==t?void 0:t.header){const t=e.appConfig.header;if(null==t?void 0:t.sticky){const o=e.browserSizeMode,n=e.appConfig.mainSizeMode,i=t.height[o]||t.height[n]||75;return parseInt(i,10)}}return 0})),{screens:y,stretchPanel:v=!0,triggerType:h=n.ScreenTriggerType.Bottom,verticalSpace:f="0",panelTransitionType:m=n.ScreenTransitionType.Push}=r;let I=s?null:null!==(t=r.transitionType)&&void 0!==t?t:n.ScreenTransitionType.Fade;s||c!==n.BrowserSizeMode.Small||u||(I=n.ScreenTransitionType.Cover);const x=n.ReactRedux.useSelector((e=>{var t;return null===(t=e.appRuntimeInfo.screenGroupNavInfos)||void 0===t?void 0:t[l]})),w=n.React.useRef(),b=n.React.useRef(),S=n.React.useRef(),[C,T]=n.React.useState(0),R=n.React.useMemo((()=>{var e,t,o;if(c!==n.BrowserSizeMode.Small)return!1;const i=(0,n.getAppStore)().getState().appConfig,a=null===(t=null===(e=i.screenGroups)||void 0===e?void 0:e[l])||void 0===t?void 0:t.screens;if(null==a?void 0:a[C]){return null===(o=i.screens[a[C]].panel)||void 0===o?void 0:o.overlay}return!1}),[l,C,c]);n.React.useEffect((()=>{null!=(null==x?void 0:x.activeIndex)&&x.activeIndex!==C&&T(x.activeIndex)}),[x,C]);const j=n.React.useCallback(((e,t)=>{t&&e!==C?(0,n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(l,e,!1)):!t&&e>0&&(0,n.getAppStore)().dispatch(n.appActions.screenGroupNavInfoChanged(l,e-1,!1))}),[C,l]),P=n.React.useCallback((()=>{if(!b.current)return;const e=b.current.children[0],t=b.current.children[1],o=t.childElementCount;for(let n=0;n<o;n++){const o=t.children[n],i=o.getAttribute("data-screenid"),a=e.querySelector(`[data-screenid="${i}"]`);a&&(a.style.height=s?`${o.clientHeight}px`:null)}e.style.height=`${t.clientHeight}px`}),[s]),$=n.React.useMemo((()=>n.lodash.debounce(P,200)),[P]),M=n.React.useCallback(((e,t)=>{if(!b.current)return;const o=b.current.children[0],i=b.current.children[1];if(I!==n.ScreenTransitionType.Fade)if(I!==n.ScreenTransitionType.Cover){if(I===n.ScreenTransitionType.Push){const t=o.querySelector(`div.screen-main-panel[data-index="${e}"]`),n=i.querySelector(`div.screen-side-panel[data-index="${e}"]`);t.style.height=`${n.clientHeight}px`,o.style.height=`${i.clientHeight}px`}}else!function(e,t,o){const i=e.querySelectorAll("div.screen-main-panel"),a=t.querySelectorAll("div.screen-side-panel"),l=i.length;for(let e=1;e<l;e++){const t=i.item(e),o=i.item(e-1),n=a.item(e-1);t.style.marginTop=n.clientHeight-o.clientHeight+"px"}o!==n.BrowserSizeMode.Small&&(e.style.height=`${t.clientHeight}px`)}(o,i,c);else o.style.height=`${i.clientHeight}px`}),[c,I]);return y.length>0?(0,n.jsx)("div",{className:(0,n.classNames)("flow-layout-item",{"print-preview":s,"small-size":c===n.BrowserSizeMode.Small}),css:dn(0,R),"data-layoutitemid":i,"data-layoutid":o,ref:w},(0,n.jsx)("div",{className:"screen-group",ref:b},(0,n.jsx)("div",{className:"main-panels",ref:S},(0,n.jsx)(sn,{rootLayoutId:o,activeIndex:C,screens:y,transitionType:I,layoutEntry:lt,headerHeight:g,isSmallSize:c===n.BrowserSizeMode.Small})),(0,n.jsx)("div",{className:"side-panels"},y.map(((e,t)=>(0,n.jsx)(Ko,{key:e,index:t,isLast:t===y.length-1,screenId:e,refElement:null,layoutEntry:lt,isActive:t===C,stretched:v,triggerType:h,verticalSpace:f,transitionType:m,screenTransitionType:I,onHeightChange:M,onInteractionChange:j,isSmallSize:c===n.BrowserSizeMode.Small,headerHeight:g}))),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,onResize:$})))):null}class cn extends n.React.PureComponent{constructor(e){super(e);const t=n.ExtensionManager.getInstance().getExtensions(`${n.extensionSpec.ExtensionPoints.LayoutTransformer}`);if(t&&t.length>0){const e=t.find((e=>e.layoutType===this.props.layout.type));this.layoutTransform=null==e?void 0:e.transformLayout}}_createItem(e,t,o){var i;const{layout:a}=this.props;return(null==e?void 0:e.isPending)?null:e.type===n.LayoutItemType.ScreenGroup?(0,n.jsx)(un,{key:`${e.id}_${t}`,itemIndex:t,layoutId:a.id,layoutItemId:e.id,layoutItem:e}):(null===(i=e.setting)||void 0===i?void 0:i.isFloating)?(0,n.jsx)(Go,{key:e.id,index:t,gutter:o.gutter,layoutId:a.id,layoutItemId:e.id,layoutItem:e}):(0,n.jsx)(Do,{key:e.id,index:t,gutter:o.gutter,layoutId:a.id,layoutItemId:e.id,layoutItem:e})}render(){const{layout:e,className:t,style:o,layouts:i,browserSizeMode:a}=this.props;if(!e)return null;let l=e;if(i[a]!==e.id&&this.layoutTransform){let t;Object.keys(i).some((o=>{if(i[o]===e.id)return t=o,!0})),l=this.layoutTransform(e,t,a)}const r=l.order||[],s=n.lodash.assign({},Bo,l.setting),d=Object.assign(Object.assign(Object.assign({},o),v.styleUtils.toCSSStyle(s.style)),{position:"relative"}),u=(0,n.classNames)("layout flow-layout w-100",t);return(0,n.jsx)("div",{className:u,style:d,"data-layoutid":e.id},(0,n.jsx)(n.IntersectionContext.Provider,{value:{monitor:!0}},(0,n.jsx)(n.OneByOneAnimation,{oid:l.id,"data-layoutid":l.id,className:"trail-container d-flex flex-column align-items-center",css:n.css`
              width: 100%;
            `},r.map(((e,t)=>this._createItem(l.content[e],t,s))))))}}const pn=n.ReactRedux.connect(ce)(cn);function gn(e,t,o){var i;const a=Object.keys(null!==(i=e.controllerPanels)&&void 0!==i?i:{}).filter((i=>{const a=E(e,i,n.LayoutItemType.Widget,o);return null!=a&&(a.type!==n.ContainerType.Page||a.id===t)}));return a.sort(),a.join(",")}function yn(e){if(null==e)return null;const{position:t,offsetX:o=0,offsetY:i=0}=e;let a;return e.widthMode!==S.Stretch&&(0!==o&&(a=`translateX(${o}px)`),t!==n.FixedPosition.TopCenter&&t!==n.FixedPosition.MiddleCenter&&t!==n.FixedPosition.BottomCenter||(a=null!=a?`${a} translateX(-50%)`:"translateX(-50%)")),e.heightMode!==S.Stretch&&(0!==i&&(a=null!=a?`${a} translateY(${i}px)`:`translateY(${i}px)`),t!==n.FixedPosition.MiddleLeft&&t!==n.FixedPosition.MiddleCenter&&t!==n.FixedPosition.MiddleRight||(a=null!=a?`${a} translateY(-50%)`:"translateY(-50%)")),a}function vn(e){let t,o,i;switch(null==e?void 0:e.position){case n.FixedPosition.TopLeft:t=n.css`top: 0; left: 0; bottom: auto; right: auto;`;break;case n.FixedPosition.TopRight:t=n.css`top: 0; left: auto; bottom: auto; right: 0;`;break;case n.FixedPosition.BottomLeft:t=n.css`top: auto; left: 0; bottom: 0; right: auto;`;break;case n.FixedPosition.BottomRight:t=n.css`top: auto; left: auto; bottom: 0; right: 0;`;break;case n.FixedPosition.TopCenter:t=n.css`top: 0; left: 50%; bottom: auto; right: auto;`;break;case n.FixedPosition.BottomCenter:t=n.css`top: auto; left: 50%; bottom: 0; right: auto;`;break;case n.FixedPosition.MiddleLeft:t=n.css`top: 50%; left: 0; bottom: auto; right: auto;`;break;case n.FixedPosition.MiddleRight:t=n.css`top: 50%; left: auto; bottom: auto; right: 0;`;break;case n.FixedPosition.MiddleCenter:t=n.css`top: 50%; left: 50%; bottom: auto; right: auto;`;break;default:t=n.css`top: 0; left: 0; bottom: auto; right: auto;`}return e.widthMode===S.Stretch&&(o=n.css`width:auto;left:${e.left};right:${e.right};`),e.heightMode===S.Stretch&&(i=n.css`height:auto;top:${e.top};bottom:${e.bottom};`),n.css`
    position: fixed;
    ${t}
    width: ${null==e?void 0:e.width};
    height: ${null==e?void 0:e.height};
    ${o};
    ${i}
    overflow: visible;
    z-index: 2;
  `}const hn=(e,t,o)=>n.React.useCallback((n=>{var i;if(!e)return;const a=n.key,l=n.shiftKey;if("Tab"===a)if(l){const t=(0,v.getFocusableElements)(e).filter((e=>{var t,n;return!(null===(n=null===(t=null==e?void 0:e.classList)||void 0===t?void 0:t.contains)||void 0===n?void 0:n.call(t,o))}));if(!t||0===t.length)return;t[t.length-1].focus()}else{const o=e.querySelector(`.${t}`);null===(i=null==o?void 0:o.focus)||void 0===i||i.call(o)}}),[e,t,o]);var fn=l(9238),mn=l.n(fn);const{animated:In,useSpring:xn}=n.spring,wn=n.css`
  position: relative;
  display: flex;
  background-color: var(--ref-palette-white);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  .panel-header {
    > .actions > .action-collapse {
      svg {
        transition: transform 0.3s ease-in-out;
      }
      &.collapsed svg {
        transform: rotate(180deg);
      }
    }
  }
  .panel-content {
    position: relative;
    overflow: hidden;

    .widget-content {
      z-index: 0;
    }

    .widget-mask {
      position: absolute;
      background: transparent;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
    }
  }
`;function bn(e){const{layoutId:t,layoutItemId:o,controllerId:i,minimized:a,onClose:l,onToggle:r}=e,[s,d]=n.React.useState(!1),u=n.React.useRef(),c=n.hooks.useLatest(l),p=n.hooks.useLatest(r),g=n.hooks.useTranslation(),y=n.ReactRedux.useSelector((e=>e.appConfig.layouts[t].content[o].widgetId)),h=n.ReactRedux.useSelector((e=>{var t;const o=null===(t=e.widgetsRuntimeInfo)||void 0===t?void 0:t[y];return(null==o?void 0:o.state)===n.WidgetState.Opened})),f=n.ReactRedux.useSelector((e=>{const t=e.appConfig.widgets[y];return null==t?void 0:t.label}),n.ReactRedux.shallowEqual),m=n.ReactRedux.useSelector((e=>{var t;const o=e.widgetsRuntimeInfo[y];return null!==(t=null==o?void 0:o.isClassLoaded)&&void 0!==t&&t})),I=n.ReactRedux.useSelector((e=>e.appConfig.controllerPanels[i].effect)),x=n.React.useMemo((()=>{var e,t;return(null==I?void 0:I.type)&&I.type!==n.AnimationType.None?(0,n.getAnimationEffect)(I.type,{configType:null===(e=I.option)||void 0===e?void 0:e.configType,direction:null===(t=I.option)||void 0===t?void 0:t.direction}):null}),[I]),[w,b]=xn((()=>n.DEFAULT_ANIMATION_PROPS),[x]),S=n.React.useCallback((e=>{c.current(e,y);const t=document.querySelector(`.widget-controller .avatar-card[data-widgetid='${y}'] button`);if(t)t.focus();else{const e=document.querySelector(`[data-widgetid='${i}'] .popup-more-button button`);e&&e.focus()}}),[c,y,i]);let C;(0,v.useTrapFocusBySelector)(u,!0,!0,".first-node",".last-virtual-node",s&&h),n.React.useEffect((()=>{h&&!s&&(d(!0),n.WidgetManager.getInstance().loadWidgetClass(y).catch((e=>{console.log(e)})))}),[h,y,s]),n.React.useEffect((()=>{h&&null!=x&&b.start(Object.assign(Object.assign({},x.animateProps()),{onRest:()=>{n.lodash.defer((()=>{u.current.style.clipPath=null}))}}))}),[b,h,x]),s&&m&&(C=n.WidgetManager.getInstance().getWidgetClass(y));const T=hn(u.current,"first-node","last-virtual-node"),R=n.React.useMemo((()=>[{name:"collapse",className:a?"first-node action-collapse collapsed":"first-node action-collapse",label:g(a?"expand":"collapse"),icon:mn(),onClick:p.current},{name:"close",className:"action-close",label:g("close"),icon:Zt(),onClick:S}]),[S,a,p,g]);return(0,n.jsx)(In.div,{className:(0,n.classNames)("controller-panel flex-column w-100 h-100",{"d-none":!s||!h}),css:wn,ref:u,style:null!=x?w:null},(0,n.jsx)(v.PanelHeader,{level:2,type:"primary",title:f,actions:R,moveable:!1}),(0,n.jsx)("div",{className:"panel-content d-flex flex-grow-1"},!m&&(0,n.jsx)(v.Loading,{type:v.LoadingType.Donut}),C&&(0,n.jsx)("div",{className:"w-100 h-100 widget-content p-1"},(0,n.jsx)(n.ErrorBoundary,null,(0,n.jsx)(C,{widgetId:y,layoutId:t,layoutItemId:o}))),(0,n.jsx)("button",{className:"sr-only last-virtual-node",onKeyUp:T})))}function Sn(e){const{controllerId:t}=e,[o,i]=n.React.useState(!1),a=n.ReactRedux.useSelector((e=>{const o=e.appConfig.widgets[t],n=o.manifest.layouts[0].name,i=o.layouts[n];return i[e.browserSizeMode]||i[e.appConfig.mainSizeMode]})),l=n.ReactRedux.useSelector((e=>{var t;const o=e.appConfig.layouts[a];if(!o)return"";const n=e.appConfig.widgets,i=Object.keys(null!==(t=o.content)&&void 0!==t?t:{}).filter((e=>{const t=o.content[e],i=n[null==t?void 0:t.widgetId];return null!=(null==t?void 0:t.widgetId)&&!t.isPending&&!(null==i?void 0:i.offPanel)}));return i.sort(),i.join(",")})),r=n.ReactRedux.useSelector((e=>{var t,o;const i=e.appConfig.widgets,l=Object.keys(null!==(t=e.widgetsRuntimeInfo)&&void 0!==t?t:{}).filter((t=>{var o;return e.widgetsRuntimeInfo[t].state===n.WidgetState.Opened&&!(null===(o=i[t])||void 0===o?void 0:o.offPanel)})),r=e.appConfig.layouts[a];return Object.keys(null!==(o=r.content)&&void 0!==o?o:{}).some((e=>{const t=r.content[e];return null!=(null==t?void 0:t.widgetId)&&!t.isPending&&l.includes(t.widgetId)}))})),s=n.React.useMemo((()=>l.split(",").filter((e=>""!==e))),[l]),d=n.ReactRedux.useSelector((e=>e.appConfig.controllerPanels[t])),u=n.React.useCallback(((e,t)=>{e.stopPropagation(),(0,n.getAppStore)().dispatch(n.appActions.closeWidget(t))}),[]),c=n.React.useCallback((()=>{i(!o)}),[o]),p=n.React.useMemo((()=>n.css`
    ${vn(d)}
    height: ${o?"36px":null==d?void 0:d.height};
    transition: height 0.3s ease-in-out;
    transform: ${yn(d)}
  `),[d,o]);return 0===s.length?null:(0,n.jsx)("div",{className:(0,n.classNames)("panel-container",{"d-none":!r}),css:p},(0,n.jsx)(n.React.Fragment,null,s.map((e=>(0,n.jsx)(bn,{key:e,controllerId:t,layoutId:a,layoutItemId:e,minimized:o,onToggle:c,onClose:u})))))}function Cn(e){const{pageId:t}=e,o=n.ReactRedux.useSelector((e=>gn(e.appConfig,t,e.browserSizeMode))),i=n.React.useMemo((()=>o.split(",").filter((e=>""!==e))),[o]);return(0,n.jsx)(n.React.Fragment,null,i.map((e=>(0,n.jsx)(Sn,{key:e,controllerId:e}))))}function Tn(e){const{pageJson:t,visible:o,pageContext:i,browserSizeMode:a,isPrintPreview:l,headerFooterHeight:r}=e,[s,u]=n.React.useState(),p=t.layout,g=n.React.useMemo((()=>function(e,t){if(e){const o=(0,n.getAppStore)().getState().appConfig,i=e.layout[o.mainSizeMode],a=o.layouts[i];if((null==a?void 0:a.type)===n.LayoutType.GridLayout)return t>0?`calc(100% - ${t}px)`:"100%"}return"auto"}(t,r)),[r]),y=!l&&t.oneByOneEffect&&t.oneByOneEffect.type!==n.AnimationType.None?t.oneByOneEffect:null,v=y?!o:null;let h;n.React.useEffect((()=>{y&&u((0,n.getNextAnimationId)())}),[o]),n.React.useEffect((()=>{var e;if(o&&p){const t=(0,n.getAppStore)().getState().appConfig,o=p[t.mainSizeMode],i=null===(e=t.layouts[o])||void 0===e?void 0:e.type,a=document.getElementsByTagName("html")[0];i===n.LayoutType.FlowLayout?a.classList.add("scrollable"):a.classList.remove("scrollable")}}),[o]),t.mode!==n.PageMode.FitWindow&&t.maxWidth>0&&(h=t.maxWidth);const f=n.React.useMemo((()=>{const e=(0,n.getAppStore)().getState();let o;return t.layout&&(o=H(t.layout,a,e.appConfig.mainSizeMode)),Object.assign(Object.assign({},i),{maxWidth:h,viewOnly:!0,rootLayoutId:o,pageId:t.id})}),[i,h,t.id]),m=n.React.useMemo((()=>({setting:y,revert:v,playId:y?s:null,oid:f.rootLayoutId,onContextAnimationEnd:()=>{u(-1)}})),[y,v,s]);if(p)return(0,n.jsx)(d.Provider,{key:t.id,value:f},(0,n.jsx)(c.Provider,{value:o},(0,n.jsx)("div",{id:t.id,"data-pageid":t.id,className:"page",css:n.css`
            display: ${o?"flex":"none"};
            background-color: ${t.bodyBackgroundColor||"transparent"};
            height: ${g};
            flex: 1 0 auto;
            z-index: 1;
          `},(0,n.jsx)(n.AnimationContext.Provider,{value:m},(0,n.jsx)(lt,{layouts:p,className:"w-100 flex-grow-1",css:n.css`
                margin: 0 auto;
                background-color: transparent;
                z-index: 0;
              `})),a!==n.BrowserSizeMode.Small&&(0,n.jsx)(Cn,{pageId:t.id}))))}function Rn(e){var t,o,i,a;const{headerJson:l,visible:r,browserSizeMode:s,theme:u,mainSizeMode:p,pageContext:g,onHeightChange:y}=e,v=l.height[s]||l.height[p]||50,h=l.layout;let f;l.backgroundIMage&&("string"==typeof l.backgroundIMage?f=l.backgroundIMage:"object"==typeof l.backgroundIMage&&(f=l.backgroundIMage.url));const m=n.React.useMemo((()=>{var e,t,o;return n.css`
      display: ${r?"flex":"none"};
      position: ${l.sticky?"sticky":"relative"};
      z-index: ${l.sticky?2:"0"};
      top: 0;
      width: 100%;
      min-height: ${Math.round(parseFloat(v))}px;
      height: auto;
      overflow: hidden;
      background-color: ${l.backgroundColor||(null===(e=u.comp)||void 0===e?void 0:e.Header.root.vars.bg)||"transparent"};
      background-image: ${f};
      background-position: ${l.backgroundPosition};
      color: ${null===(o=null===(t=null==u?void 0:u.comp)||void 0===t?void 0:t.Header.root.vars)||void 0===o?void 0:o.color};
      flex: 0 0 auto;
    `}),[r,v,l.sticky,l.backgroundColor,f,l.backgroundPosition,null===(o=null===(t=null==u?void 0:u.comp)||void 0===t?void 0:t.Header.root.vars)||void 0===o?void 0:o.bg,null===(a=null===(i=null==u?void 0:u.comp)||void 0===i?void 0:i.Header.root.vars)||void 0===a?void 0:a.color]),I=n.React.useMemo((()=>Object.assign(Object.assign({},g),{viewOnly:!0})),[g]),x=n.React.useCallback(((e,t)=>{y(t)}),[y]);return(0,n.jsx)(d.Provider,{value:I},(0,n.jsx)(c.Provider,{value:r},(0,n.jsx)("div",{className:"header",css:m},(0,n.jsx)(lt,{layouts:h,className:"w-100 flex-grow-1"}),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,handleWidth:!1,onResize:x}))))}function jn(e){var t,o,i,a;const{footerJson:l,visible:r,browserSizeMode:s,theme:u,mainSizeMode:p,pageContext:g,onHeightChange:y}=e,v=l.height[s]||l.height[p]||50,h=l.layout;let f;l.backgroundIMage&&("string"==typeof l.backgroundIMage?f=l.backgroundIMage:"object"==typeof l.backgroundIMage&&(f=l.backgroundIMage.url));const m=n.React.useMemo((()=>{var e,t,o;return n.css`
      display: ${r?"flex":"none"};
      width: 100%;
      min-height: ${Math.round(parseFloat(v))}px;
      height: auto;
      overflow: hidden;
      background-color: ${l.backgroundColor||(null===(e=u.comp)||void 0===e?void 0:e.Footer.root.vars.bg)||"transparent"};
      background-image: ${f};
      background-position: ${l.backgroundPosition};
      color: ${null===(o=null===(t=null==u?void 0:u.comp)||void 0===t?void 0:t.Footer.root.vars)||void 0===o?void 0:o.color};
      z-index: 0;
    `}),[r,v,l.backgroundColor,f,l.backgroundPosition,null===(o=null===(t=null==u?void 0:u.comp)||void 0===t?void 0:t.Footer.root.vars)||void 0===o?void 0:o.bg,null===(a=null===(i=null==u?void 0:u.comp)||void 0===i?void 0:i.Footer.root.vars)||void 0===a?void 0:a.color]),I=n.React.useMemo((()=>Object.assign(Object.assign({},g),{viewOnly:!0})),[g]),x=n.React.useCallback(((e,t)=>{y(t)}),[y]);return(0,n.jsx)(d.Provider,{value:I},(0,n.jsx)(c.Provider,{value:r},(0,n.jsx)("div",{className:"footer",css:m},(0,n.jsx)(lt,{layouts:h,className:"w-100 flex-grow-1"}),(0,n.jsx)(n.ReactResizeDetector,{handleHeight:!0,handleWidth:!1,onResize:x}))))}const Pn=n.css`
  display: flex;
  height: 100%;
  width: 100%;
  background: var(--ref-palette-neutral-1100);

  .jimu-btn {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .label {
    white-space: nowrap;
  }

  @media print {
    & {
      display: none;
    }
  }
`;function $n(){const e=n.i18n.getIntl(),t=n.React.useRef();n.React.useEffect((()=>{t.current.focus()}),[]);const o=n.React.useCallback((t=>e.formatMessage({id:t})),[e]),i=n.hooks.useEventCallback((()=>{n.jimuHistory.changeQueryObject({print_preview:null}),(0,n.getAppStore)().dispatch(n.appActions.quitPrintPreview())})),a=n.hooks.useEventCallback((()=>{window.print()}));return(0,n.jsx)("div",{className:"print-preview-tool shadow-3",css:Pn},(0,n.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-grow-1"},(0,n.jsx)(v.Button,{ref:t,"aria-label":o("printCurrentPage"),type:"primary",onClick:a},o("printCurrentPage"))),(0,n.jsx)(v.Button,{className:"ml-auto",icon:!0,type:"tertiary","aria-label":o("close"),onClick:i},(0,n.jsx)(Qt,{color:"var(--white)"})))}ot(n.LayoutType.FixedLayout,kt),ot(n.LayoutType.FlowLayout,pn),ot(n.LayoutType.GridLayout,vo),ot(n.LayoutType.ColumnLayout,Bt),ot(n.LayoutType.AccordionLayout,ko);class Mn extends n.React.PureComponent{constructor(e){super(e),this.updateHeaderHeight=e=>{this.setState({headerHeight:e})},this.updateFooterHeight=e=>{this.setState({footerHeight:e})},this.isMac=()=>{var e,t;return"macOS"===(null===(t=null===(e=window.jimuUA)||void 0===e?void 0:e.os)||void 0===t?void 0:t.name)},this.handlePrintEvent=e=>{(0,n.getAppStore)().dispatch(n.appActions.activePrintPreview()),n.jimuHistory.changeQueryObject({print_preview:String(!0)}),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation()},this.state={headerHeight:0,footerHeight:0},n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Ao}),n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new No}),n.ExtensionManager.getInstance().registerExtension({epName:n.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new zo}),this.pageContext={theme:this.props.theme},window.jimuConfig.isBuilder||(this.isMac()?this.keyBindings={"command+keyp":this.handlePrintEvent}:this.keyBindings={"ctrl+keyp":this.handlePrintEvent})}componentDidUpdate(e){if(On(e.pageStatus)!==On(this.props.pageStatus)){document.getElementsByTagName("html")[0].scrollTop=0}}render(){const{pageStatus:e,pages:t,theme:o,isPrintPreview:i}=this.props,a=On(e);if(!a||!(null==t?void 0:t[a]))return null;let l="100%";const r=t[a]||{};r&&!isNaN(+r.width)&&(l=+r.width+"px");const s=n.css`
      width: ${l};
      margin: 0 auto;
      min-height: 100%;
      overflow: auto;
      height: 100%;
      background-color: ${r&&r.backgroundColor};

      html.scrollable & {
        height: auto;
        overflow: unset;
        min-height: 100vh;
      }
    `;return(0,n.jsx)("div",{className:"page-renderer d-flex flex-column",css:s,ref:e=>{this.pageRef=e},"data-testid":"pageRenderer"},i&&(0,n.jsx)(v.Modal,{isOpen:!0,css:n.css`
            max-width: 100% !important;
            margin: 0 !important;

            .modal-body.print-preview-content {
              height: 64px;
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              padding: 0;
            }
          `,backdrop:!1},(0,n.jsx)(v.ModalBody,{className:"print-preview-content"},(0,n.jsx)($n,null))),this.renderDialog(),this.renderHeader(),Object.keys(e).map((e=>this.renderPageBody(e,o))),this.renderFooter(),(0,n.jsx)(n.Keyboard,{bindings:this.keyBindings}))}renderHeader(){if(!this.props.header)return null;const{header:e,headerVisible:t,browserSizeMode:o,theme:i,mainSizeMode:a}=this.props;return(0,n.jsx)(Rn,{headerJson:e,pageContext:this.pageContext,visible:t,browserSizeMode:o,mainSizeMode:a,theme:i,onHeightChange:this.updateHeaderHeight})}renderFooter(){if(!this.props.footer)return null;const{footer:e,footerVisible:t,browserSizeMode:o,mainSizeMode:i,theme:a}=this.props;return(0,n.jsx)(jn,{footerJson:e,pageContext:this.pageContext,visible:t,browserSizeMode:o,mainSizeMode:i,theme:a,onHeightChange:this.updateFooterHeight})}renderPageBody(e,t){const{pageStatus:o,pages:i,isPrintPreview:a}=this.props,l=i[e];if(!l)return;const r=!!o[e];return(0,n.jsx)(Tn,{key:l.id,pageJson:l,pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,visible:r,isPrintPreview:a,headerFooterHeight:this.state.headerHeight+this.state.footerHeight})}renderDialog(){const{dialogId:e,urlDialogJson:t,splashDialogJson:o,isSplashClosed:i,isPageDlgClosed:a,pageDialogJson:l,pageDialogId:r}=this.props;return(0,n.jsx)(n.React.Fragment,null,t&&(0,n.jsx)(d.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:e,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:t,runtime:!0})),!a&&l&&(null==t?void 0:t.id)!==l.id&&(0,n.jsx)(d.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:r,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:l,runtime:!0,isOpenByPage:!0})),!i&&o&&(null==t?void 0:t.id)!==o.id&&(0,n.jsx)(d.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:o.id,viewOnly:!0})},(0,n.jsx)(n.AppDialog,{dialogJson:o,runtime:!0})))}}Mn.displayName="RuntimePageRenderer";const Ln=(0,n.createSelector)([e=>e.appConfig.pages,e=>e.appConfig.dialogs,e=>e.appConfig.header,e=>e.appConfig.footer,e=>e.browserSizeMode,e=>e.appConfig.mainSizeMode,e=>{var t;const o=window.jimuConfig.isBuilder?e.appStateInBuilder:e;return null===(t=null==o?void 0:o.appRuntimeInfo)||void 0===t?void 0:t.dialogInfos},e=>{var t;const o=window.jimuConfig.isBuilder?e.appStateInBuilder:e;return null===(t=null==o?void 0:o.appRuntimeInfo)||void 0===t?void 0:t.currentPageId},e=>{var t,o,n;const i=window.jimuConfig.isBuilder?e.appStateInBuilder:e,a=null===(t=null==i?void 0:i.appRuntimeInfo)||void 0===t?void 0:t.currentPageId;return null===(n=null===(o=null==i?void 0:i.appConfig)||void 0===o?void 0:o.pages[a])||void 0===n?void 0:n.autoOpenDialogId},e=>{var t,o;return null!==(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==o&&o},(e,t)=>On(t.pageStatus),(e,t)=>t.dialogId],((e,t,o,n,i,a,l,r,s,d,u,c)=>{var p,g;if(!u||!e[u])return{};const y=t[Object.keys(t).find((e=>t[e].isSplash))];return{pages:e,header:o,headerVisible:!!e[u].header,footer:n,footerVisible:!!e[u].footer,browserSizeMode:i,mainSizeMode:a,splashDialogJson:y,isSplashClosed:null===(p=null==l?void 0:l[null==y?void 0:y.id])||void 0===p?void 0:p.isClosed,pageDialogId:s,pageDialogJson:t[s],isPageDlgClosed:null===(g=null==l?void 0:l[r+"-"+s])||void 0===g?void 0:g.isClosed,urlDialogJson:t[c],isPrintPreview:d}}));function On(e){return Object.keys(e).find((t=>e[t]))}const kn=n.ReactRedux.connect(Ln)((0,rt.withTheme)(Mn));var An=function(e,t,o,n){return new(o||(o=Promise))((function(i,a){function l(e){try{s(n.next(e))}catch(e){a(e)}}function r(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(l,r)}s((n=n.apply(e,t||[])).next())}))};function En(){return An(this,void 0,void 0,(function*(){return yield Promise.all([s()])}))}})(),r})())}}}));