System.register(["jimu-core","jimu-ui","jimu-theme","jimu-layouts/layout-runtime"],(function(e,t){var o={},n={},i={},a={};return{setters:[function(e){o.AnimationComponent=e.AnimationComponent,o.AnimationContext=e.AnimationContext,o.AnimationPlayMode=e.AnimationPlayMode,o.AnimationStartMode=e.AnimationStartMode,o.AnimationTriggerType=e.AnimationTriggerType,o.AnimationType=e.AnimationType,o.AppDialog=e.AppDialog,o.AppMode=e.AppMode,o.BrowserSizeMode=e.BrowserSizeMode,o.ContainerType=e.ContainerType,o.ControllerPosition=e.ControllerPosition,o.DEFAULT_ANIMATION_PROPS=e.DEFAULT_ANIMATION_PROPS,o.ErrorBoundary=e.ErrorBoundary,o.ExtensionManager=e.ExtensionManager,o.GridItemType=e.GridItemType,o.Immutable=e.Immutable,o.IntersectionContext=e.IntersectionContext,o.Keyboard=e.Keyboard,o.LayoutItemType=e.LayoutItemType,o.LayoutParentType=e.LayoutParentType,o.LayoutType=e.LayoutType,o.OneByOneAnimation=e.OneByOneAnimation,o.PageMode=e.PageMode,o.PagePart=e.PagePart,o.ParentAnimationMode=e.ParentAnimationMode,o.React=e.React,o.ReactRedux=e.ReactRedux,o.ReactResizeDetector=e.ReactResizeDetector,o.ScreenTransitionType=e.ScreenTransitionType,o.ScreenTriggerType=e.ScreenTriggerType,o.TransitionContainer=e.TransitionContainer,o.WidgetManager=e.WidgetManager,o.WidgetState=e.WidgetState,o.WidgetType=e.WidgetType,o.appActions=e.appActions,o.appConfigUtils=e.appConfigUtils,o.classNames=e.classNames,o.createSelector=e.createSelector,o.css=e.css,o.extensionSpec=e.extensionSpec,o.getAnimationEffect=e.getAnimationEffect,o.getAppStore=e.getAppStore,o.getHoverStyle=e.getHoverStyle,o.getIndexFromProgress=e.getIndexFromProgress,o.getNextAnimationId=e.getNextAnimationId,o.hooks=e.hooks,o.i18n=e.i18n,o.jimuHistory=e.jimuHistory,o.jsx=e.jsx,o.lodash=e.lodash,o.moduleLoader=e.moduleLoader,o.polished=e.polished,o.spring=e.spring,o.translatedLocales=e.translatedLocales},function(e){n.Button=e.Button,n.DistanceUnits=e.DistanceUnits,n.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,n.FillType=e.FillType,n.Loading=e.Loading,n.LoadingType=e.LoadingType,n.Tab=e.Tab,n.Tabs=e.Tabs,n.Tooltip=e.Tooltip,n.defaultMessages=e.defaultMessages,n.styleUtils=e.styleUtils,n.useTrapFocusLoop=e.useTrapFocusLoop},function(e){i.useTheme=e.useTheme,i.withBuilderTheme=e.withBuilderTheme,i.withTheme=e.withTheme},function(e){a.PageVisibilityContext=e.PageVisibilityContext}],execute:function(){e((()=>{var e={7077:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="#fff" fill-rule="evenodd" d="M12 0H7v1h4v4h1V1zM0 12h5v-1H1V7H0v4z" clip-rule="evenodd"></path></svg>'},5467:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4m0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3m0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},1407:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.538.538 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.538.538 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},3273:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},427:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.146 13.847a.486.486 0 0 0 .708 0 .538.538 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.538.538 0 0 0 0 .738.485.485 0 0 0 .708 0L8 8.26zm0-5a.485.485 0 0 0 .708 0 .538.538 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.538.538 0 0 0 0 .738.485.485 0 0 0 .708 0L8 3.26z" clip-rule="evenodd"></path></svg>'},5339:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},8891:e=>{"use strict";e.exports=o},4758:e=>{"use strict";e.exports=a},4796:e=>{"use strict";e.exports=i},726:e=>{"use strict";e.exports=n}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{"use strict";r.r(l),r.d(l,{CLICK_TOLRERANCE:()=>I,COLS_IN_ONE_ROW:()=>v,CONTEXT_MENU_ICON_SIZE:()=>f,CONTEXT_MENU_ITEM_SIZE:()=>h,ColumnLayoutViewer:()=>Ot,DEFAULT_AUTOPLAY_INTERVAL:()=>x,FixedLayoutViewer:()=>jt,GridLayoutViewer:()=>ro,LayoutContext:()=>p,LayoutEntry:()=>at,LayoutItem:()=>Ct,LayoutItemSizeModes:()=>b,LayoutZIndex:()=>w,MIN_LAYOUT_ITEM_SIZE:()=>m,OrderAdjustType:()=>g,PageContext:()=>s,PageRenderer:()=>en,PageVisibilityContext:()=>d,RowLayoutViewer:()=>Ft,SectionRenderer:()=>It,ViewVisibilityContext:()=>c,ViewportVisibilityContext:()=>u,WidgetRenderer:()=>Ze,defaultMessages:()=>n,findLayoutBuilder:()=>ot,findLayoutViewer:()=>nt,init:()=>on,registerLayoutBuilder:()=>et,registerLayoutViewer:()=>tt,searchUtils:()=>t,utils:()=>e});var e={};r.r(e),r.d(e,{autoBindHandlers:()=>ne,calHeightOfLayoutItem:()=>Se,contains:()=>ke,emptyFunc:()=>oe,expandStyleArray:()=>be,fromRatio:()=>de,gcd:()=>Be,getActivePagePart:()=>Pe,getAppConfig:()=>Ce,getCurrentDialogId:()=>je,getCurrentDialogRootLayoutId:()=>Me,getCurrentPageId:()=>Re,getCurrentPageRootLayoutId:()=>$e,getCurrentSizeMode:()=>Te,getFooterRootLayoutId:()=>Oe,getHeaderRootLayoutId:()=>Le,getLayoutItemSizeMode:()=>ze,getMaximumId:()=>ie,getValueOfBBox:()=>se,handleOnebyOneAnimation:()=>Fe,intersects:()=>Ae,isEmptyLayout:()=>re,isFunctionalWidget:()=>ve,isNumber:()=>le,isPercentage:()=>ae,isRTL:()=>xe,isWidgetHasEmbeddedLayout:()=>ye,isWidgetPlaceholder:()=>he,mapStateToLayoutItemProps:()=>pe,mapStateToLayoutProps:()=>ce,mapStateToWidgetProps:()=>ge,normalizeLinearUnit:()=>Ee,parseAspectRatio:()=>we,relativeClientRect:()=>Ie,replaceBoundingBox:()=>fe,shouldUseAspectRatio:()=>Ne,toRatio:()=>ue,updateBoundingBoxProp:()=>me});var t={};r.r(t),r.d(t,{findLayoutId:()=>H,findLayoutItem:()=>C,findParentLayoutInfo:()=>T,getBlockAnchorPointsInPage:()=>Q,getBrowserSizeModeByLayoutId:()=>X,getBrowserSizeModeByLayoutIdAndWidgetId:()=>_,getChildrenContents:()=>G,getContentContainerInfo:()=>A,getContentIdInLayoutItem:()=>R,getContentLayoutInfosInOneSizeMode:()=>U,getContentLayoutItem:()=>$,getContentRootContainerInfo:()=>E,getContentsInContainer:()=>N,getContentsInContainerRecursive:()=>B,getContentsInContainerRecursiveAdv:()=>F,getContentsInLayout:()=>j,getContentsInLayoutRecursive:()=>P,getContentsInLayoutWithRecrusiveLayouts:()=>M,getContentsInTheSameContainer:()=>Z,getContentsInTheSameRootContainer:()=>K,getLayoutInfosByType:()=>O,getLayoutInfosHoldcontent:()=>D,getLayoutItemIds:()=>L,getMapWidgets:()=>te,getParentWidgetIdOfContent:()=>V,getPendingLayoutItemsFromOtherSizeMode:()=>Ye,getPendingLayoutItemsFromOtherSizeModeInDialog:()=>_e,getPendingLayoutItemsFromOtherSizeModeInPage:()=>Ge,getPendingLayoutItemsInDialog:()=>Ue,getPendingLayoutItemsInLayoutWithDeep:()=>Xe,getPendingLayoutItemsInPage:()=>Ve,getRelatedLayoutInfosInWidgetByLayoutInfo:()=>Y,getRelatedLayoutItemsInWidgetByLayoutInfo:()=>J,getScreenAnchorPointsInPage:()=>ee,getSectionInfo:()=>De,getWidgetIdThatUseTheLayoutId:()=>k});var o=r(8891);const n={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"New view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move {label}",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Hide in design view",showInDesignView:"Show in design view",unlockGridItem:"Unlock this widget to reorganize its internal widgets.",lockGridItem:"Lock this widget.",splitHorizontally:"Split horizontally",splitVertically:"Split vertically"};var i=function(e,t,o,n){return new(o||(o=Promise))((function(i,a){function r(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}s((n=n.apply(e,t||[])).next())}))};function a(){return i(this,void 0,void 0,(function*(){let e=(0,o.getAppStore)().getState().appContext.locale;return e=o.i18n.getLocaleToLoad(e,o.translatedLocales),e?yield o.i18n.loadLocaleMessages("jimu-layouts/lib/translations",e).then((e=>((0,o.getAppStore)().dispatch(o.appActions.i18nMessagesLoaded("jimu-layouts",e)),o.i18n.resetIntls(),e))):Promise.resolve(n)}))}const s=o.React.createContext({viewOnly:!0}),u=o.React.createContext(!0),d=o.React.createContext(!0),c=o.React.createContext({isInView:!1,isInCurrentView:!1}),p=(o.React.createContext(""),o.React.createContext({}));var g,y=r(726);!function(e){e[e.BringForward=0]="BringForward",e[e.SendBackward=1]="SendBackward",e[e.BringToFront=2]="BringToFront",e[e.SendToBack=3]="SendToBack"}(g||(g={}));const v=12,h=28,f=16,m=16,I=5,x=3;var w,b,S;function C(e,t){var o,n,i;if(!t)return null;const{layoutId:a,layoutItemId:r}=t;return null===(i=null===(n=null===(o=e.layouts)||void 0===o?void 0:o[a])||void 0===n?void 0:n.content)||void 0===i?void 0:i[r]}function T(e,t,n){var i,a,r,l,s,u,d,c,p,g;const{layoutId:y}=e,v=t.layouts[y];switch(null===(i=null==v?void 0:v.parent)||void 0===i?void 0:i.type){case o.LayoutParentType.View:{const e=t.views[v.parent.id],o=t.sections[e.parent];return 1===(null===(r=null===(a=null==o?void 0:o.parent)||void 0===a?void 0:a[n])||void 0===r?void 0:r.length)?o.parent[n][0]:(null===(s=null===(l=null==o?void 0:o.parent)||void 0===l?void 0:l[n])||void 0===s?void 0:s.length)>1?T(o.parent[n][0],t,n):null}case o.LayoutParentType.Widget:{const e=t.widgets[v.parent.id];return 1===(null===(d=null===(u=null==e?void 0:e.parent)||void 0===u?void 0:u[n])||void 0===d?void 0:d.length)?e.parent[n][0]:(null===(p=null===(c=null==e?void 0:e.parent)||void 0===c?void 0:c[n])||void 0===p?void 0:p.length)>1?T(e.parent[n][0],t,n):null}case o.LayoutParentType.Screen:{const e=t.screens[v.parent.id];return null===(g=t.screenGroups[e.parent].parent)||void 0===g?void 0:g[n]}default:return null}}function R(e){switch(e.type){case o.LayoutItemType.Widget:return"string"==typeof e.widgetId?e.widgetId:null;case o.LayoutItemType.Section:return"string"==typeof e.sectionId?e.sectionId:null;case o.LayoutItemType.ScreenGroup:return"string"==typeof e.screenGroupId?e.screenGroupId:null;default:return null}}function j(e,t,o=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter((n=>e.content[n].type===t&&!!R(e.content[n])&&(o||!e.content[n].isPending))).map((t=>R(e.content[t]))):[]}function P(e,t,n,i,a=!1){let r=[];const l=j(e.layouts[t],o.LayoutItemType.Widget,a),s=j(e.layouts[t],o.LayoutItemType.Section,a),u=j(e.layouts[t],o.LayoutItemType.ScreenGroup,a);return n===o.LayoutItemType.Widget?r=r.concat(l):n===o.LayoutItemType.Section?r=r.concat(s):n===o.LayoutItemType.ScreenGroup&&(r=r.concat(u)),l.filter((t=>{var n,i,a,r,l;return(null===(i=null===(n=e.widgets[t])||void 0===n?void 0:n.manifest)||void 0===i?void 0:i.widgetType)===o.WidgetType.Layout||(null===(l=null===(r=null===(a=e.widgets[t])||void 0===a?void 0:a.manifest)||void 0===r?void 0:r.properties)||void 0===l?void 0:l.hasEmbeddedLayout)})).forEach((t=>{var o;Object.keys(null!==(o=e.widgets[t].layouts)&&void 0!==o?o:{}).forEach((o=>{const l=H(e.widgets[t].layouts[o],i,e.mainSizeMode);r=r.concat(P(e,l,n,i,a))}))})),s.forEach((t=>{var o,l;null===(l=null===(o=e.sections)||void 0===o?void 0:o[t])||void 0===l||l.views.forEach((t=>{const o=H(e.views[t].layout,i,e.mainSizeMode);e.views[t]&&o&&(r=r.concat(P(e,o,n,i,a)))}))})),u.forEach((t=>{var o,l;null===(l=null===(o=e.screenGroups)||void 0===o?void 0:o[t])||void 0===l||l.screens.forEach((t=>{var o,l,s,u,d;const c=H(null===(l=null===(o=e.screens)||void 0===o?void 0:o[t])||void 0===l?void 0:l.main.layout,i,e.mainSizeMode);c&&(r=r.concat(P(e,c,n,i,a)));const p=H(null===(d=null===(u=null===(s=e.screens)||void 0===s?void 0:s[t])||void 0===u?void 0:u.panel)||void 0===d?void 0:d.layout,i,e.mainSizeMode);p&&(r=r.concat(P(e,p,n,i,a)))}))})),r}function M(e,t,n,i,a=!1){let r=[];const l=j(e.layouts[t],o.LayoutItemType.Widget,a),s=j(e.layouts[t],o.LayoutItemType.Section,a),u=j(e.layouts[t],o.LayoutItemType.ScreenGroup,a);return r=n===o.LayoutItemType.Widget?r.concat(l):n===o.LayoutItemType.ScreenGroup?r.concat(u):r.concat(s),l.filter((t=>e.widgets&&e.widgets[t]&&(e.widgets[t].manifest.widgetType===o.WidgetType.Layout||e.widgets[t].manifest.properties.hasEmbeddedLayout))).forEach((t=>{var o;Object.keys(null!==(o=e.widgets[t].layouts)&&void 0!==o?o:{}).forEach((o=>{const l=H(e.widgets[t].layouts[o],i,e.mainSizeMode);r=r.concat(M(e,l,n,i,a))}))})),r}function $(e,t,o){if(!(null==e?void 0:e.content))return null;const n=Object.keys(e.content).find((n=>e.content[n].type===o&&(e.content[n].widgetId===t||e.content[n].sectionId===t||e.content[n].screenGroupId===t)&&!e.content[n].isPending));return e.content[n]}function L(e,t,o=!1){const n=e.layouts[t];return(null==n?void 0:n.content)?o?Object.keys(n.content):Object.keys(n.content).filter((e=>!n.content[e].isPending)):[]}function O(e,t,o=!1){return(null==e?void 0:e.content)?Object.keys(e.content).filter((n=>e.content[n].type===t&&!!R(e.content[n])&&(o||!e.content[n].isPending))).map((t=>({layoutId:e.id,layoutItemId:t}))):[]}function k(e,t){var n;const i=e.layouts[t];return(null===(n=null==i?void 0:i.parent)||void 0===n?void 0:n.type)===o.LayoutParentType.Widget?i.parent.id:null}function A(e,t,n,i,a=!1){var r;const l=W(e,t,n,i,a);if(l){const t=e.layouts[l.layoutId];switch(null===(r=t.parent)||void 0===r?void 0:r.type){case o.LayoutParentType.Page:return{type:o.ContainerType.Page,id:t.parent.id};case o.LayoutParentType.Dialog:return{type:o.ContainerType.Dialog,id:t.parent.id};case o.LayoutParentType.Header:return{type:o.ContainerType.Header,id:"header"};case o.LayoutParentType.Footer:return{type:o.ContainerType.Footer,id:"footer"};case o.LayoutParentType.View:return{type:o.ContainerType.View,id:t.parent.id};case o.LayoutParentType.Screen:return{type:e.screens[t.parent.id].main.layout[i]===l.layoutId?o.ContainerType.ScreenMain:o.ContainerType.ScreenPanel,id:t.parent.id};case o.LayoutParentType.Widget:return A(e,t.parent.id,n,i,a)}}return null}function E(e,t,o,n,i=!1){let a=W(e,t,o,n,i),r=n;if(a||(a=W(e,t,o,e.mainSizeMode,i),r=e.mainSizeMode),a)return z(e,a.layoutId,r)}function z(e,t,n){var i;let a=e.layouts[t];for(;(null==a?void 0:a.parent)&&[o.LayoutParentType.Screen,o.LayoutParentType.View,o.LayoutParentType.Widget].includes(a.parent.type);){const o=T({layoutId:t},e,n);t=null==o?void 0:o.layoutId,a=e.layouts[t]}switch(null===(i=null==a?void 0:a.parent)||void 0===i?void 0:i.type){case o.LayoutParentType.Dialog:return{type:o.ContainerType.Dialog,id:a.parent.id};case o.LayoutParentType.Page:return{type:o.ContainerType.Page,id:a.parent.id};case o.LayoutParentType.Header:return{type:o.ContainerType.Header,id:"header"};case o.LayoutParentType.Footer:return{type:o.ContainerType.Footer,id:"footer"}}}function N(e,t,n,i,a=!1){var r,l,s,u,d,c;let p;switch(t.type){case o.ContainerType.Page:return p=H(null===(l=null===(r=e.pages)||void 0===r?void 0:r[t.id])||void 0===l?void 0:l.layout,i,e.mainSizeMode),p?M(e,p,n,i,a):[];case o.ContainerType.Header:return p=H(null===(s=e.header)||void 0===s?void 0:s.layout,i,e.mainSizeMode),p?M(e,p,n,i,a):[];case o.ContainerType.Footer:return p=H(null===(u=e.footer)||void 0===u?void 0:u.layout,i,e.mainSizeMode),p?M(e,p,n,i,a):[];case o.ContainerType.View:return p=H(null===(c=null===(d=e.views)||void 0===d?void 0:d[t.id])||void 0===c?void 0:c.layout,i,e.mainSizeMode),p?M(e,p,n,i,a):[];case o.ContainerType.Dialog:return p=H(e.dialogs[t.id].layout,i,e.mainSizeMode),p?M(e,p,n,i,a):[];case o.ContainerType.ScreenMain:case o.ContainerType.ScreenPanel:if(!e.screens||!e.screens[t.id])return[];const g=H(e.screens[t.id].main.layout,i,e.mainSizeMode);if(!g)return[];const y=M(e,g,n,i,a);if(e.screens[t.id].panel){const o=M(e,H(e.screens[t.id].panel.layout,i,e.mainSizeMode),n,i,a);return y.concat(o)}return y}}function B(e,t,n,i,a=!1){var r,l,s,u,d,c;let p;switch(t.type){case o.ContainerType.Page:return p=H(null===(l=null===(r=e.pages)||void 0===r?void 0:r[t.id])||void 0===l?void 0:l.layout,i,e.mainSizeMode),p?P(e,p,n,i,a):[];case o.ContainerType.Header:return p=H(null===(s=e.header)||void 0===s?void 0:s.layout,i,e.mainSizeMode),p?P(e,p,n,i,a):[];case o.ContainerType.Footer:return p=H(null===(u=e.footer)||void 0===u?void 0:u.layout,i,e.mainSizeMode),p?P(e,p,n,i,a):[];case o.ContainerType.View:return p=H(null===(c=null===(d=e.views)||void 0===d?void 0:d[t.id])||void 0===c?void 0:c.layout,i,e.mainSizeMode),p?P(e,p,n,i,a):[];case o.ContainerType.Dialog:return p=H(e.dialogs[t.id].layout,i,e.mainSizeMode),p?P(e,p,n,i,a):[];case o.ContainerType.ScreenMain:case o.ContainerType.ScreenPanel:if(!e.screens||!e.screens[t.id])return[];const g=H(e.screens[t.id].main.layout,i,e.mainSizeMode);if(!g)return[];const y=P(e,g,n,i);if(e.screens[t.id].panel){const o=P(e,H(e.screens[t.id].panel.layout,i,e.mainSizeMode),n,i);return y.concat(o)}return y}}function F(e,t,n,i,a){const r=t=>{let r=[];return r=a.includeOtherSizeMode?r.concat(B(e,t,n,o.BrowserSizeMode.Large,a.includePending),B(e,t,n,o.BrowserSizeMode.Medium,a.includePending),B(e,t,n,o.BrowserSizeMode.Small,a.includePending)):B(e,t,n,i,a.includePending),r=Array.from(new Set(r)),r};if(t.type===o.ContainerType.Dialog)return r(t);if(t.type===o.ContainerType.Page){const n=e.pages[t.id];let i=r(t);return n.header&&(i=i.concat(r({type:o.ContainerType.Header,id:"header"}))),n.footer&&(i=i.concat(r({type:o.ContainerType.Footer,id:"footer"}))),i=Array.from(new Set(i)),i}if(t.type===o.ContainerType.Header){const n=e.pages[a.currentPageId];let i=r(t).concat(r({type:o.ContainerType.Page,id:a.currentPageId}));return(null==n?void 0:n.footer)&&(i=i.concat(r({type:o.ContainerType.Footer,id:"footer"}))),i=Array.from(new Set(i)),i}if(t.type===o.ContainerType.Footer){const n=e.pages[a.currentPageId];let i=r(t).concat(r({type:o.ContainerType.Page,id:a.currentPageId}));return(null==n?void 0:n.header)&&(i=i.concat(r({type:o.ContainerType.Header,id:"header"}))),i=Array.from(new Set(i)),i}}function H(e,t,o){return e?e[t]||e[o]:null}function W(e,t,n,i,a=!0){var r,l,s,u,d;switch(n){case o.LayoutItemType.ScreenGroup:{const o=null===(r=e.screenGroups[t].parent)||void 0===r?void 0:r[i],n=C(e,o);return a||!(null==n?void 0:n.isPending)?o:null}case o.LayoutItemType.Section:case o.LayoutItemType.Widget:{let r;if(n===o.LayoutItemType.Widget&&(r=e.widgets[t]),n===o.LayoutItemType.Section&&(r=e.sections[t]),1===(null===(s=null===(l=null==r?void 0:r.parent)||void 0===l?void 0:l[i])||void 0===s?void 0:s.length)){const t=r.parent[i][0],o=C(e,t);return a||!(null==o?void 0:o.isPending)?t:null}if((null===(d=null===(u=null==r?void 0:r.parent)||void 0===u?void 0:u[i])||void 0===d?void 0:d.length)>1){const t=r.parent[i][0],n=e.layouts[t.layoutId];if(null==n?void 0:n.parent)return W(e,n.parent.id,o.LayoutItemType.Widget,i,a)}}}return null}function D(e,t,n,i){switch(t){case o.LayoutItemType.ScreenGroup:{const t=e.screenGroups[n];if(t.parent)return i?[t.parent[i]]:Object.values(t.parent)}case o.LayoutItemType.Section:case o.LayoutItemType.Widget:{let a;if(t===o.LayoutItemType.Widget&&(a=e.widgets[n]),t===o.LayoutItemType.Section&&(a=e.sections[n]),null==a?void 0:a.parent){if(i)return a.parent[i];const e=[];return Object.values(a.parent).forEach((t=>{e.push(...t)})),e}}}return[]}function V(e,t,n,i){var a,r,l,s,u,d,c;let p;if(n===o.LayoutItemType.Widget){const o=e.widgets[t];p=null===(l=null===(r=null===(a=null==o?void 0:o.parent)||void 0===a?void 0:a[i])||void 0===r?void 0:r[0])||void 0===l?void 0:l.layoutId}if(n===o.LayoutItemType.Section){const o=e.sections[t];p=null===(d=null===(u=null===(s=null==o?void 0:o.parent)||void 0===s?void 0:s[i])||void 0===u?void 0:u[0])||void 0===d?void 0:d.layoutId}if(p){const t=e.layouts[p];if((null===(c=null==t?void 0:t.parent)||void 0===c?void 0:c.type)===o.LayoutParentType.Widget)return t.parent.id}return null}function G(e,t,o,n){const i=e.widgets[t];if(!i.layouts)return[];let a=[];return Object.keys(i.layouts).forEach((t=>{Object.keys(i.layouts[t]).forEach((r=>{const l=e.layouts[i.layouts[t][r]];a=a.concat(j(l,o,n))}))})),Array.from(new Set(a))}function U(e,t,n,i){var a,r,l;switch(n){case o.LayoutItemType.ScreenGroup:{const o=e.screenGroups[t];if(null===(a=o.parent)||void 0===a?void 0:a[i])return[o.parent[i]]}case o.LayoutItemType.Section:case o.LayoutItemType.Widget:{let a;if(n===o.LayoutItemType.Widget&&(a=e.widgets[t]),n===o.LayoutItemType.Section&&(a=e.sections[t]),(null===(l=null===(r=null==a?void 0:a.parent)||void 0===r?void 0:r[i])||void 0===l?void 0:l.length)>0)return a.parent[i]}}return[]}function _(e,t,o){const n=e.widgets[o];if(!n)return;let i;return Object.keys(n.layouts).find((e=>{if(Object.keys(n.layouts[e]).find((o=>{if(n.layouts[e][o]===t)return i=o,!0})))return!0})),i}function X(e,t){return o.appConfigUtils.getSizeModeOfALayout(e,t)}function Y(e,t,n,i){if(!e.widgets[n])return[];const a=e.layouts[t.layoutId]&&e.layouts[t.layoutId].content&&e.layouts[t.layoutId].content[t.layoutItemId];if(!a)return[];const r=a.type;let l;return r===o.LayoutItemType.Section?l=a.sectionId:r===o.LayoutItemType.Widget&&(l=a.widgetId),l?q(e,l,r,n,i):function(e,t,o){const n=e.widgets[t];if(!n)return!1;let i=!1;return n.layouts&&Object.keys(n.layouts).some((t=>Object.keys(n.layouts[t]).some((a=>{const r=n.layouts[t][a];return L(e,r,!0).some((e=>o.layoutId===r&&o.layoutItemId===e&&(i=!0,!0)))})))),i}(e,n,t)?[t]:[]}function J(e,t,o,n){return Y(e,t,o,n).map((t=>e.layouts[t.layoutId][t.layoutItemId]))}function q(e,t,n,i,a){const r=e.widgets[i];if(!r||!t)return[];const l=[];return r.layouts&&Object.keys(r.layouts).forEach((i=>{const s=r.layouts[i][a],u=e.layouts[s];u&&u.content&&Object.keys(u.content).forEach((i=>{const r=u.content[i];if(r.type!==n||r.widgetId!==t&&r.sectionId!==t&&r.screenGroupId!==t){if(r.type===o.LayoutItemType.Widget){const i=e.widgets[r.widgetId];i&&i.manifest.widgetType===o.WidgetType.Layout&&l.push(...q(e,t,n,i.id,a))}}else l.push({layoutId:u.id,layoutItemId:r.id})}))})),l}function Z(e,t,o,n,i,a=!1){const r=A(e,t,o,i,a);return r?N(e,r,n,i,a):[]}function K(e,t,o,n,i,a=!1){const r=E(e,t,o,i,a);return r?B(e,r,n,i,a):[]}function Q(e,t,n){var i,a;const r=e.pages[t],l=null===(i=null==r?void 0:r.layout)||void 0===i?void 0:i[n],s=e.layouts[l],u=[];return(null==s?void 0:s.type)===o.LayoutType.FlowLayout&&Object.keys(null!==(a=s.content)&&void 0!==a?a:{}).sort().forEach((t=>{var n;const i=s.content[t];if(!i.isPending&&!(null===(n=i.setting)||void 0===n?void 0:n.isFloating)&&i.type===o.LayoutItemType.Widget){const o=function(e,t){const{layoutId:o,layoutItemId:n}=t,i=e.layouts[o].content[n],a=e.widgets[i.widgetId];return a?{label:a.label,id:`${o}_block_${n}`}:null}(e,{layoutId:l,layoutItemId:t});o&&u.push(o)}})),u}function ee(e,t,n){var i,a;const r=e.pages[t],l=null===(i=null==r?void 0:r.layout)||void 0===i?void 0:i[n],s=e.layouts[l],u=[];return(null==s?void 0:s.type)===o.LayoutType.FlowLayout&&Object.keys(null!==(a=s.content)&&void 0!==a?a:{}).sort().forEach((t=>{var n;const i=s.content[t];if(!i.isPending&&!(null===(n=i.setting)||void 0===n?void 0:n.isFloating)&&i.type===o.LayoutItemType.ScreenGroup){const t=e.screenGroups[i.screenGroupId],o=[];null==t||t.screens.forEach((t=>{const n=function(e,t,o){const n=e.screens[o];return n?{label:n.label,id:`${t}_screen_${o}`}:null}(e,l,t);n&&o.push(n)})),u.push({id:t.id,label:t.label,screens:o})}})),u}function te(e,t,n,i){const a=[],r={id:i,type:n,maps:F(e,{type:n,id:i},o.LayoutItemType.Widget,t,{includePending:!1,includeOtherSizeMode:!1}).filter((t=>e.widgets[t].manifest.properties.canCreateMapView))};return a.push(r),Object.keys(e.pages).forEach((n=>{if(n===i)return;const r={id:n,type:o.ContainerType.Page,maps:B(e,{id:n,type:o.ContainerType.Page},o.LayoutItemType.Widget,t).filter((t=>e.widgets[t].manifest.properties.canCreateMapView))};a.push(r)})),Object.keys(e.dialogs||{}).forEach((n=>{if(n===i)return;const r={id:n,type:o.ContainerType.Dialog,maps:B(e,{id:n,type:o.ContainerType.Dialog},o.LayoutItemType.Widget,t).filter((t=>e.widgets[t].manifest.properties.canCreateMapView))};a.push(r)})),a}!function(e){e.Auto="auto",e[e.Normal=0]="Normal",e[e.BoundaryDropArea=10]="BoundaryDropArea",e[e.DragMoveTip=20]="DragMoveTip",e[e.HandlerTools=30]="HandlerTools",e[e.DraggingItem=40]="DraggingItem"}(w||(w={})),(S=b||(b={})).Auto="AUTO",S.Stretch="STRETCH",S.Custom="CUSTOM";const oe=()=>{};function ne(e,t){t.forEach((t=>{e[t]&&(e[t]=e[t].bind(e))}))}function ie(e){let t=-1;return e.content&&Object.keys(e.content).forEach((e=>{const o=parseInt(e,10);o>t&&(t=o)})),t}function ae(e){return/^-?\d*(\.\d+)?%$/.test(e)}function re(e){var t;const o=Object.keys(null!==(t=e.content)&&void 0!==t?t:{});return 0===o.length||!o.some((t=>!e.content[t].isPending))}function le(e){const t=parseFloat(e);return!isNaN(t)&&isFinite(t)}function se(e,t){return null==(null==e?void 0:e[t])?null:"string"==typeof e[t]?e[t]:le(e[t])?`${Math.round(parseFloat(e[t]))}px`:null}function ue(e,t){return`${(100*e/t).toFixed(1)}%`}function de(e,t){return parseFloat(`${e}`)*t/100}const ce=(0,o.createSelector)([e=>e.appConfig.mainSizeMode,e=>e.browserSizeMode,(e,t)=>{var n,i,a,r,l;let s;if(e.browserSizeMode===e.appConfig.mainSizeMode)s=!0;else{let r;(null===(n=t.layouts)||void 0===n?void 0:n[e.browserSizeMode])?r=e.browserSizeMode:(null===(i=t.layouts)||void 0===i?void 0:i[e.appConfig.mainSizeMode])&&(r=e.appConfig.mainSizeMode);const l=null===(a=t.layouts)||void 0===a?void 0:a[r],u=z(e.appConfig,l,r);(null==u?void 0:u.type)===o.ContainerType.Header?s=null!=e.appConfig.header.layout[e.browserSizeMode]:(null==u?void 0:u.type)===o.ContainerType.Footer?s=null!=e.appConfig.footer.layout[e.browserSizeMode]:(null==u?void 0:u.type)===o.ContainerType.Dialog?s=null!=e.appConfig.dialogs[u.id].layout[e.browserSizeMode]:(null==u?void 0:u.type)===o.ContainerType.Page&&(s=null!=e.appConfig.pages[u.id].layout[e.browserSizeMode])}if(s&&(null===(r=t.layouts)||void 0===r?void 0:r[e.browserSizeMode])){const o=t.layouts[e.browserSizeMode];return e.appConfig.layouts[o]}const u=null===(l=t.layouts)||void 0===l?void 0:l[e.appConfig.mainSizeMode];return e.appConfig.layouts[u]}],((e,t,o)=>({mainSizeMode:e,browserSizeMode:t,layout:o}))),pe=(0,o.createSelector)([(e,t)=>{var o,n,i;const{layoutId:a,layoutItemId:r}=t;return null===(i=null===(n=null===(o=e.appConfig.layouts)||void 0===o?void 0:o[a])||void 0===n?void 0:n.content)||void 0===i?void 0:i[r]},(e,t)=>{var n,i,a,r,l,s;const{layoutId:u,layoutItemId:d}=t,c=null===(a=null===(i=null===(n=e.appConfig.layouts)||void 0===n?void 0:n[u])||void 0===i?void 0:i.content)||void 0===a?void 0:a[d];if((null==c?void 0:c.type)===o.LayoutItemType.Widget&&c.widgetId){const t=e.appConfig.widgets[c.widgetId];return null!==(s=null===(l=null===(r=null==t?void 0:t.manifest)||void 0===r?void 0:r.properties)||void 0===l?void 0:l.watchViewportVisibility)&&void 0!==s&&s}return!1},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.selection},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.animationPreview},e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.hoverPreview},(e,t)=>t.layoutId],((e,t,o,n,i,a)=>{var r;if(!e)return{layoutItem:null,selected:!1};let l=!1;const s=null!==(r=e.isPending)&&void 0!==r&&r;o&&(l=o.layoutId===a&&o.layoutItemId===e.id);const u={selected:l,watchViewportVisibility:t,layoutItem:s?null:e,autoScroll:l?o.autoScroll:void 0};if(l&&(null==n?void 0:n.layoutInfo)){const{layoutId:t,layoutItemId:o}=n.layoutInfo;u.animationPreview=t===a&&o===e.id,u.playMode=u.animationPreview?n.playMode:null,u.previewId=u.animationPreview?n.id:null}else if(l&&(null==i?void 0:i.layoutInfo)){const{layoutId:t,layoutItemId:o}=i.layoutInfo;u.hoverPreview=t===a&&o===e.id,u.previewId=u.hoverPreview?i.id:null}return u})),ge=(0,o.createSelector)([(e,t)=>{var n,i,a;const{layoutId:r,layoutItemId:l}=t,s=null===(a=null===(i=null===(n=e.appConfig.layouts)||void 0===n?void 0:n[r])||void 0===i?void 0:i.content)||void 0===a?void 0:a[l];if((null==s?void 0:s.type)===o.LayoutItemType.Widget&&s.widgetId)return e.appConfig.widgets[s.widgetId]},(e,t)=>{var n,i,a,r;const{layoutId:l,layoutItemId:s}=t,u=null===(a=null===(i=null===(n=e.appConfig.layouts)||void 0===n?void 0:n[l])||void 0===i?void 0:i.content)||void 0===a?void 0:a[s];if((null==u?void 0:u.type)===o.LayoutItemType.Widget&&!u.widgetId)return null===(r=u.setting)||void 0===r?void 0:r.placeholderStyle},(e,t)=>{var n,i,a;const{layoutId:r,layoutItemId:l}=t,s=null===(a=null===(i=null===(n=e.appConfig.layouts)||void 0===n?void 0:n[r])||void 0===i?void 0:i.content)||void 0===a?void 0:a[l];if((null==s?void 0:s.type)===o.LayoutItemType.Widget&&s.widgetId)return e.widgetsRuntimeInfo[s.widgetId]},(e,t)=>{var n,i,a;const{layoutId:r,layoutItemId:l}=t,s=null===(a=null===(i=null===(n=e.appConfig.layouts)||void 0===n?void 0:n[r])||void 0===i?void 0:i.content)||void 0===a?void 0:a[l];if((null==s?void 0:s.type)===o.LayoutItemType.Widget&&!s.widgetId)return e.widgetsState[s.widgetId]},(e,t)=>{var n,i;const{layoutId:a}=t,r=null===(n=e.appConfig.layouts)||void 0===n?void 0:n[a];if((null===(i=r.parent)||void 0===i?void 0:i.type)===o.LayoutParentType.Widget){const t=r.parent.id,o=e.appConfig.widgets[t];return/widgets\/common\/controller\/?/.test(o.uri)}return!1}],((e,t,n,i,a)=>{var r,l,s,u,d,c,p,g,y,v,h,f,m,I,x,w;const b=null===(l=null===(r=null==e?void 0:e.manifest)||void 0===r?void 0:r.properties)||void 0===l?void 0:l.supportInlineEditing;return{hasEmbeddedLayout:(null===(u=null===(s=null==e?void 0:e.manifest)||void 0===s?void 0:s.properties)||void 0===u?void 0:u.hasEmbeddedLayout)&&Object.keys(null!==(d=e.layouts)&&void 0!==d?d:{}).length>0,supportInlineEditing:b,supportRepeat:null===(p=null===(c=null==e?void 0:e.manifest)||void 0===c?void 0:c.properties)||void 0===p?void 0:p.supportRepeat,isClassLoaded:null!==(g=null==n?void 0:n.isClassLoaded)&&void 0!==g&&g,isInlineEditing:b&&(null==n?void 0:n.isInlineEditing),isInController:a,useDragHandler:null!==(h=null===(v=null===(y=null==e?void 0:e.manifest)||void 0===y?void 0:y.properties)||void 0===v?void 0:v.useDragHandler)&&void 0!==h&&h,widgetStyle:null!=e?e.style:t,canCrossLayoutBoundary:null===(m=null===(f=null==e?void 0:e.manifest)||void 0===f?void 0:f.properties)||void 0===m?void 0:m.canCrossLayoutBoundary,hasExtension:(null===(x=null===(I=null==e?void 0:e.manifest)||void 0===I?void 0:I.extensions)||void 0===x?void 0:x.length)>0,widgetJson:e,widgetId:null==e?void 0:e.id,isFunctionalWidget:(null===(w=null==e?void 0:e.manifest)||void 0===w?void 0:w.widgetType)!==o.WidgetType.Layout,widgetState:i}}));function ye(e,t){var o,n,i,a;const r=null===(o=null==t?void 0:t.widgets)||void 0===o?void 0:o[e];return!!(null===(i=null===(n=null==r?void 0:r.manifest)||void 0===n?void 0:n.properties)||void 0===i?void 0:i.hasEmbeddedLayout)&&Object.keys(null!==(a=null==r?void 0:r.layouts)&&void 0!==a?a:{}).length>0}function ve(e,t){var n,i;const a=null===(n=null==t?void 0:t.widgets)||void 0===n?void 0:n[e];return(null===(i=null==a?void 0:a.manifest)||void 0===i?void 0:i.widgetType)!==o.WidgetType.Layout}function he(e,t){var n,i;if(!t||t.itemType!==o.LayoutItemType.Widget)return!1;if(t.layoutInfo){const{layoutId:o,layoutItemId:a}=t.layoutInfo,r=null===(i=null===(n=e.layouts)||void 0===n?void 0:n[o].content)||void 0===i?void 0:i[a];if(r&&!r.widgetId)return!0}return!t.layoutInfo&&!t.uri}function fe(e,t,n){if(!e)return(0,o.Immutable)({left:ae(t.left)?t.left:`${Math.round(t.left)}px`,right:ae(t.right)?t.right:`${Math.round(t.right)}px`,top:ae(t.top)?t.top:`${Math.round(t.top)}px`,bottom:ae(t.bottom)?t.bottom:`${Math.round(t.bottom)}px`,width:ae(t.width)?t.width:`${Math.round(t.width)}px`,height:ae(t.height)?t.height:`${Math.round(t.height)}px`});let i=e;return["left","right","top","bottom","width","height"].forEach((e=>{null!=i[e]?i=me(e,i,t[e],n):null!=t[e]&&(i=i.set(e,`${Math.round(t[e])}px`))})),i}function me(e,t,o,n){if(null==t[e]||"auto"===t[e])return t;let i=t;return i=ae(t[e])?"left"===e||"right"===e||"width"===e?ae(o)?t.set(e,o):t.set(e,`${(100*+o/n.width).toFixed(4)}%`):ae(o)?t.set(e,o):t.set(e,`${(100*+o/n.height).toFixed(4)}%`):ae(o)?"left"===e||"right"===e||"width"===e?t.set(e,Math.round(parseFloat(`${o}`)*n.width/100)):t.set(e,Math.round(parseFloat(`${o}`)*n.height/100)):isNaN(+o)?t.without(e):t.set(e,`${Math.round(+o)}px`),i}function Ie(e,t){return{left:e.left-t.left,top:e.top-t.top,right:e.right,bottom:e.bottom,width:e.width,height:e.height,id:null}}function xe(){var e,t;return null!==(t=null===(e=(0,o.getAppStore)().getState().appContext)||void 0===e?void 0:e.isRTL)&&void 0!==t&&t}function we(e){let t=100,o=100;if("number"==typeof e)t=100,o=Math.round(100*e);else if("string"==typeof e){const n=e.split(":");t=parseInt(n[0],10),o=parseInt(n[1],10)}return t/o}function be(e){return e&&0!==e.length?1===e.length?[e[0],e[0],e[0],e[0]]:2===e.length?[e[0],e[1],e[0],e[1]]:3===e.length?[e[0],e[1],e[2],0]:[e[0],e[1],e[2],e[3]]:[0,0,0,0]}function Se(e,t){var o,n,i,a;const r=null!==(o=t.setting)&&void 0!==o?o:{},l=ze("height",t.bbox,r.autoProps);let s;if("ratio"===r.heightMode)s={setting:{heightMode:"ratio",aspectRatio:null!==(n=r.aspectRatio)&&void 0!==n?n:1,autoProps:{height:b.Custom}}};else{if(l!==b.Custom)return{height:l===b.Stretch?e:null,setting:{autoProps:{height:l}}};{let o=null!==(a=null===(i=t.bbox)||void 0===i?void 0:i.height)&&void 0!==a?a:e;o=ae(o)?de(o,e):parseInt(o),s={height:o,setting:{heightMode:"fixed",autoProps:{height:b.Custom}}}}}return s}function Ce(){var e;return window.jimuConfig.isBuilder?null===(e=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,o.getAppStore)().getState().appConfig}function Te(){var e,t;return(null===(e=null===window||void 0===window?void 0:window.jimuConfig)||void 0===e?void 0:e.isBuilder)?null===(t=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.browserSizeMode:(0,o.getAppStore)().getState().browserSizeMode}function Re(){var e,t,n;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentPageId:null===(n=(0,o.getAppStore)().getState().appRuntimeInfo)||void 0===n?void 0:n.currentPageId}function je(){var e,t,n;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.currentDialogId:null===(n=(0,o.getAppStore)().getState().appRuntimeInfo)||void 0===n?void 0:n.currentDialogId}function Pe(){var e,t,n;return window.jimuConfig.isBuilder?null===(t=null===(e=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.activePagePart:null===(n=(0,o.getAppStore)().getState().appRuntimeInfo)||void 0===n?void 0:n.activePagePart}function Me(){var e,t,n;const i=window.jimuConfig.isBuilder?null===(e=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,o.getAppStore)().getState().appConfig,a=je(),r=Te();return null===(n=null===(t=null==i?void 0:i.dialogs[a])||void 0===t?void 0:t.layout)||void 0===n?void 0:n[r]}function $e(){var e,t,n;const i=window.jimuConfig.isBuilder?null===(e=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,o.getAppStore)().getState().appConfig,a=Re(),r=Te();return null===(n=null===(t=null==i?void 0:i.pages[a])||void 0===t?void 0:t.layout)||void 0===n?void 0:n[r]}function Le(){var e,t,n;const i=window.jimuConfig.isBuilder?null===(e=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,o.getAppStore)().getState().appConfig,a=Te();return null===(n=null===(t=null==i?void 0:i.header)||void 0===t?void 0:t.layout)||void 0===n?void 0:n[a]}function Oe(){var e,t,n;const i=window.jimuConfig.isBuilder?null===(e=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.appConfig:(0,o.getAppStore)().getState().appConfig,a=Te();return null===(n=null===(t=null==i?void 0:i.footer)||void 0===t?void 0:t.layout)||void 0===n?void 0:n[a]}function ke(e,t){return t.left>=e.left&&t.left+t.width<=e.left+e.width&&t.top>=e.top&&t.top+t.height<=e.top+e.height}function Ae(e,t){return!(t.left>e.left+e.width||t.left+t.width<e.left||t.top>e.top+e.height||t.top+t.height<e.top)}function Ee(e){var t,n,i,a;let r,l;if(null!=e&&"object"==typeof e)r=null!==(t=e.unit)&&void 0!==t?t:y.DistanceUnits.PIXEL,l=null!==(n=e.distance)&&void 0!==n?n:0;else{const t=o.polished.getValueAndUnit(e);r=null!==(i=null==t?void 0:t[1])&&void 0!==i?i:y.DistanceUnits.PIXEL,l=null!==(a=null==t?void 0:t[0])&&void 0!==a?a:0}return l=r===y.DistanceUnits.PERCENTAGE?Math.round(10*l)/10:Math.round(l),`${l}${r}`}function ze(e,t,o){const n=null==o?void 0:o[e],i="width"===e?"left":"top",a="width"===e?"right":"bottom";if(!n)return null!=t[e]?b.Custom:null!=t[i]&&null!=t[a]?b.Stretch:b.Auto;if(!0===n)return null!=t[i]&&null!=t[a]?b.Stretch:b.Auto;switch(n){case b.Auto:return b.Auto;case b.Stretch:return b.Stretch;default:return b.Custom}}function Ne(e){return"ratio"===e.heightMode&&null!=e.aspectRatio}function Be(e,t){let o=Math.max(e,t),n=Math.min(e,t);for(;0!==n;){const e=n;n=o%n,o=e}return o}function Fe(e){const{delay:t,isLastChild:o}=e;return{delay:t,isLastChild:o}}const He=o.lodash.assign({},{gridSize:1}),We=o.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}});function De(e,t){var o;const n=e.appConfig.sections[t];if(!n||!n.views)return null;const i=null===(o=e.appRuntimeInfo.sectionNavInfos)||void 0===o?void 0:o[n.id];let a;if(!i){const t=n.views[0];a=e.appConfig.views[t]}return{sectionId:t,navInfo:i,activeView:a,views:n.views,sectionStyle:n.style,transition:n.transition,autoPlay:n.autoPlay,interval:n.interval,loop:n.loop,focusable:n.focusable}}function Ve(e,t,n,i){const a=e.pages[t];return a?i===o.PagePart.Header?a.header&&e.header?Xe(e,e.header.layout[n],n):[]:i===o.PagePart.Footer?a.footer&&e.footer?Xe(e,e.footer.layout[n],n):[]:i===o.PagePart.Body?Xe(e,a.layout[n],n):[]:[]}function Ge(e,t,n,i){const a=e.pages[t];return a?i===o.PagePart.Header?a.header&&e.header?Ye(e,e.header.layout,n):[]:i===o.PagePart.Footer?a.footer&&e.footer?Ye(e,e.footer.layout,n):[]:i===o.PagePart.Body?Ye(e,a.layout,n):[]:[]}function Ue(e,t,o){const n=e.dialogs[t];return n?Xe(e,n.layout[o],o):[]}function _e(e,t,o){const n=e.dialogs[t];return n?Ye(e,n.layout,o):[]}function Xe(e,t,n){let i=[];return O(e.layouts[t],o.LayoutItemType.Widget,!0).forEach((t=>{const o=e.layouts[t.layoutId].content[t.layoutItemId];o.isPending?i.push(t):e.widgets[o.widgetId].layouts&&Object.keys(e.widgets[o.widgetId].layouts).forEach((t=>{i=i.concat(Xe(e,e.widgets[o.widgetId].layouts[t][n],n))}))})),O(e.layouts[t],o.LayoutItemType.Section,!0).forEach((t=>{const o=e.layouts[t.layoutId].content[t.layoutItemId];o.isPending?i.push(t):e.sections[o.sectionId].views&&e.sections[o.sectionId].views.forEach((t=>{i=i.concat(Xe(e,e.views[t].layout[n],n))}))})),O(e.layouts[t],o.LayoutItemType.ScreenGroup,!0).forEach((t=>{var o,a;const r=e.layouts[t.layoutId].content[t.layoutItemId];if(r.isPending)i.push(t);else{const t=r.screenGroupId;null===(a=null===(o=e.screenGroups)||void 0===o?void 0:o[t].screens)||void 0===a||a.forEach((t=>{const o=null==e?void 0:e.screens[t];o.main&&(i=i.concat(Xe(e,o.main.layout[n],n))),o.panel&&(i=i.concat(Xe(e,o.panel.layout[n],n)))}))}})),i}function Ye(e,t,n,i=null,a=null,r=null){const l=[];return i||(i=P(e,t[n],o.LayoutItemType.Widget,n,!0)),a||(a=P(e,t[n],o.LayoutItemType.Section,n,!0)),r||(r=P(e,t[n],o.LayoutItemType.ScreenGroup,n,!0)),Object.keys(o.BrowserSizeMode).filter((e=>o.BrowserSizeMode[e]!==n)).map((e=>o.BrowserSizeMode[e])).forEach((s=>{O(e.layouts[t[s]],o.LayoutItemType.Widget,!0).forEach((t=>{var s;const u=e.layouts[t.layoutId].content[t.layoutItemId];(null===(s=e.widgets[u.widgetId].manifest)||void 0===s?void 0:s.widgetType)!==o.WidgetType.Layout&&i.indexOf(u.widgetId)<0?!Je(e,l,t)&&l.push(t):e.widgets[u.widgetId].layouts&&Object.keys(e.widgets[u.widgetId].layouts).forEach((t=>{Ye(e,e.widgets[u.widgetId].layouts[t],n,i,a,r).forEach((t=>{!Je(e,l,t)&&l.push(t)}))}))})),O(e.layouts[t[s]],o.LayoutItemType.Section,!0).forEach((t=>{const o=e.layouts[t.layoutId].content[t.layoutItemId];a.indexOf(o.sectionId)<0?!Je(e,l,t)&&l.push(t):e.sections[o.sectionId].views&&e.sections[o.sectionId].views.forEach((t=>{Ye(e,e.views[t].layout,n,i,a,r).forEach((t=>{!Je(e,l,t)&&l.push(t)}))}))})),O(e.layouts[t[s]],o.LayoutItemType.ScreenGroup,!0).forEach((t=>{var o,s;const u=e.layouts[t.layoutId].content[t.layoutItemId];r.indexOf(u.screenGroupId)<0?!Je(e,l,t)&&l.push(t):(null===(s=null===(o=e.screenGroups)||void 0===o?void 0:o[u.screenGroupId])||void 0===s?void 0:s.screens)&&e.screenGroups[u.screenGroupId].screens.forEach((t=>{var o;const s=null===(o=e.screens)||void 0===o?void 0:o[t];(null==s?void 0:s.main)&&Ye(e,s.main.layout,n,i,a,r).forEach((t=>{!Je(e,l,t)&&l.push(t)})),(null==s?void 0:s.panel)&&Ye(e,s.panel.layout,n,i,a,r).forEach((t=>{!Je(e,l,t)&&l.push(t)}))}))}))})),l}function Je(e,t,n){const i=e.layouts[n.layoutId].content[n.layoutItemId];return!!t.find((t=>{const n=e.layouts[t.layoutId].content[t.layoutItemId];return n.type===i.type&&(n.type===o.LayoutItemType.Widget&&n.widgetId===i.widgetId||n.type===o.LayoutItemType.Section&&n.sectionId===i.sectionId)}))}class qe extends o.React.PureComponent{constructor(e){super(e),this.onMouseDown=this.onMouseDown.bind(this),this.ref=o.React.createRef(),this.state={error:null}}loadWidgetClass(){const{widgetId:e,isClassLoaded:t}=this.props;e&&!t&&o.WidgetManager.getInstance().loadWidgetClass(e).catch((e=>{console.log(e),this.setState({error:o.i18n.getIntl().formatMessage({id:"widgetLoadError"})})}))}componentDidMount(){this.loadWidgetClass()}componentDidUpdate(){this.loadWidgetClass()}renderWidgetContent(){const{widgetId:e,layoutId:t,layoutItemId:n,autoWidth:i,autoHeight:a,onInitResizeHandler:r,onInitDragHandler:l}=this.props;let s;return e&&(s=o.WidgetManager.getInstance().getWidgetClass(e)),this.state.error?(0,o.jsx)("div",{className:"widget-content"},this.state.error):(0,o.jsx)("div",{className:(0,o.classNames)("widget-content",{"d-none":!e})},s&&(0,o.jsx)(o.ErrorBoundary,null,(0,o.jsx)(s,{widgetId:e,layoutId:t,layoutItemId:n,autoWidth:i,autoHeight:a,onInitResizeHandler:r,onInitDragHandler:l})))}getStyle(){const{forceAspectRatio:e,aspectRatio:t}=this.props,n=o.css`
      -webkit-overflow-scrolling: touch;
    `;return o.css`
      ${"app-loader"===this.props.widgetId?n:""};
      overflow: ${this.props.canCrossLayoutBoundary?"visible":"hidden"};
      position: relative;
      aspect-ratio: ${e&&t>0?t:null};

      .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }
    `}onMouseDown(){var e;this.props.widgetId&&(null===(e=(0,o.getAppStore)().getState().widgetsRuntimeInfo[this.props.widgetId])||void 0===e?void 0:e.state)!==o.WidgetState.Active&&(0,o.getAppStore)().dispatch(o.appActions.activateWidget(this.props.widgetId))}render(){var e,t;const{className:n,widgetStyle:i,widgetId:a,rotate:r}=this.props,l=y.styleUtils.toCSSStyle(i),{transform:s}=l,u=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o}(l,["transform"]),d=r>0||r<0?`rotateZ(${r}deg)`:"";let c=d;return s&&(c=`${s} ${d}`),(0,o.jsx)("div",{className:(0,o.classNames)(`widget-renderer layout-item-content w-100 ${null!==(t=null===(e=null==i?void 0:i.boxShadow)||void 0===e?void 0:e.presetStyle)&&void 0!==t?t:""}`,n),css:this.getStyle(),style:Object.assign(Object.assign({},u),{transform:c}),onMouseDownCapture:this.onMouseDown,"data-widgetid":a,ref:this.ref},this.renderWidgetContent(),this.props.children)}}const Ze=o.ReactRedux.connect(ge)(qe),Ke={},Qe={};function et(e,t){Ke[e]=t}function tt(e,t){Qe[e]=t}function ot(e){return Ke[e]}function nt(e){return Qe[e]}class it extends o.React.PureComponent{render(){const{layout:e}=this.props;if(!e)return null;const t=nt(e.type||o.LayoutType.FlowLayout);return t?o.React.createElement(t,Object.assign({},this.props)):null}}const at=o.ReactRedux.connect(ce)(it);var rt=r(4796);function lt(e,t){if(!e)return null;let o={};e.backgroundIMage&&(o="string"==typeof e.backgroundIMage?{}:e.backgroundIMage);const n=e.backgroundPosition?y.FillType[e.backgroundPosition.toUpperCase()]:y.FillType.FILL;let i;i=null==e.backgroundColor?t:""===e.backgroundColor?"transparent":e.backgroundColor?e.backgroundColor:"";const a={color:i,fillType:n,image:o};return y.styleUtils.toBackgroundStyle(a)}function st(e){var t,n;const{viewId:i,isActive:a,layoutEntryComponent:r,viewVisibilityContext:l}=e,s=o.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=e.appConfig)||void 0===t?void 0:t.views)||void 0===o?void 0:o[i]})),u=null===(n=null===(t=(0,rt.useTheme)())||void 0===t?void 0:t.body)||void 0===n?void 0:n.bg,d=r,c=l,[p,g]=o.React.useState(!1),v=o.React.useMemo((()=>({isInView:!0,isInCurrentView:a})),[a]);return o.React.useEffect((()=>{a&&s.lazyLoad&&!p&&g(!0)}),[a,s.lazyLoad,p]),(0,o.jsx)("div",{className:(0,o.classNames)("w-100 h-100 d-flex section-view",{[y.FOCUSABLE_CONTAINER_CLASS]:a}),style:lt(s,u),css:o.css`&, .exb-drop-area { pointer-events: ${a?"auto":"none"}; }`,key:i,id:`${s.parent}_${s.id}`},(p||!s.lazyLoad)&&(0,o.jsx)(o.ErrorBoundary,null,(0,o.jsx)(c.Provider,{value:v},(0,o.jsx)(d,{layouts:null==s?void 0:s.layout,isInSection:!0,className:"w-100"}))))}function ut(e){var t,n;const{views:i,navInfo:a,animationPreview:r,playMode:l,currentIndex:s,previousIndex:u,progress:d,loop:c,viewTransition:p}=e,g=r&&l===o.AnimationPlayMode.OneByOne,{setting:y,playId:v}=o.React.useContext(o.AnimationContext),h=o.ReactRedux.useSelector((e=>{var t;return!y||y.type===o.AnimationType.None||(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===o.AppMode.Design})),f=!h||g||(null==a?void 0:a.playId)&&(null==a?void 0:a.withOneByOne)?y:null,m=o.React.useMemo((()=>({setting:f,playId:g?v:null})),[f,g,v]);return(0,o.jsx)(o.AnimationContext.Provider,{value:m},(0,o.jsx)("div",{className:"section-content"},(0,o.jsx)(o.TransitionContainer,{useProgress:null!==(t=null==a?void 0:a.useProgress)&&void 0!==t&&t,useStep:null!==(n=null==a?void 0:a.useStep)&&void 0!==n&&n,previousIndex:u,currentIndex:s,progress:d,transitionType:null==p?void 0:p.type,direction:null==p?void 0:p.direction,playId:null==a?void 0:a.playId,withOneByOne:null==a?void 0:a.withOneByOne,loop:c},i.map((t=>{const n=t===i[s];return(0,o.jsx)(st,{key:t,viewId:t,isActive:n,layoutEntryComponent:e.layoutEntryComponent,viewVisibilityContext:e.viewVisibilityContext})})))))}var dt=r(1407),ct=r.n(dt);const pt=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",n);return t?o.React.createElement(t,Object.assign({className:a,src:ct()},i)):o.React.createElement("svg",Object.assign({className:a},i))};var gt=r(3273),yt=r.n(gt);const vt=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",n);return t?o.React.createElement(t,Object.assign({className:a,src:yt()},i)):o.React.createElement("svg",Object.assign({className:a},i))};function ht(e){var t,n,i;const{sectionId:a,currentIndex:r,numOfViews:l,onCurrentViewChange:s}=e,u=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.arrowsNav})),d=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.sections[a])||void 0===t?void 0:t.dotsNav})),c=null!==(t=null==d?void 0:d.position)&&void 0!==t?t:"b",p=o.React.useMemo((()=>{const e=[];for(let t=0;t<l;t++)e.push(t);return e}),[l]),g=()=>{var e,t,n,i;return o.css`
      position: absolute;
      cursor: pointer;
      pointer-events: auto;

      &.disabled {
        cursor: default;
        svg {
          color: var(--light-400);
        }
      }

      &.first {
        left: ${null!==(e=u.offset)&&void 0!==e?e:0}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          top: ${null!==(t=u.offset)&&void 0!==t?t:0}px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        }
      }
      &.second {
        right: ${null!==(n=u.offset)&&void 0!==n?n:0}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          bottom: ${null!==(i=u.offset)&&void 0!==i?i:0}px;
          left: 50%;
          top: auto;
          right: auto;
          transform: translateX(-50%) rotate(90deg);
        }
      }
    `},y=o.React.useCallback(((e,t)=>(0,o.jsx)("div",{key:e,className:(0,o.classNames)("dot rounded-circle",{active:t,disabled:l<=1}),onClick:t?void 0:()=>{s(e)}})),[s,l]),v=o.React.useCallback((()=>{s(r>0?r-1:l-1)}),[r,l,s]),h=o.React.useCallback((()=>{s(r<l-1?r+1:0)}),[r,l,s]),f=l>1&&0!==r,m=l>1&&r!==l-1;return(0,o.jsx)(o.React.Fragment,null,(null==u?void 0:u.visible)&&(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)("div",{className:(0,o.classNames)("arrows-nav first",{vertical:"v"===u.direction,disabled:!f}),css:g(),onClick:f?v:null},(0,o.jsx)(pt,{autoFlip:"v"!==u.direction,size:null!==(n=u.size)&&void 0!==n?n:24})),(0,o.jsx)("div",{className:(0,o.classNames)("arrows-nav second",{vertical:"v"===u.direction,disabled:!m}),css:g(),onClick:m?h:null},(0,o.jsx)(vt,{autoFlip:"v"!==u.direction,size:null!==(i=u.size)&&void 0!==i?i:24}))),(null==d?void 0:d.visible)&&(0,o.jsx)("div",{className:(0,o.classNames)("dots-nav",{"snap-left":"l"===c,"snap-top":"t"===c,"snap-right":"r"===c,"snap-bottom":"b"===c}),css:(()=>{var e,t,n,i,a,r,l,s,u,p,g,y,v,h;return o.css`
      position: absolute;
      display: flex;
      flex-direction: ${"l"===c||"r"===c?"column":"row"};
      justify-content: center;
      align-items: center;
      overflow: visible;
      pointer-events: none;
      background: transparent;

      .dot {
        pointer-events: all;
        cursor: pointer;
        border: 1px solid var(--light-500);
        background: var(--light-100);
        width: ${null!==(e=d.size)&&void 0!==e?e:8}px;
        height: ${null!==(t=d.size)&&void 0!==t?t:8}px;

        &.active {
          border-color: var(--white);
          background: var(--primary-500);
          width: ${d.size>0?1.5*d.size:12}px;
          height: ${d.size>0?1.5*d.size:12}px;
        }

        &.disabled {
          cursor: default;
        }
      }

      &.snap-left {
        height: 100%;
        top: 0;
        left: ${null!==(n=d.offset)&&void 0!==n?n:50}px;
        width: ${null!==(i=d.size)&&void 0!==i?i:8}px;

        > div:not(:first-of-type) {
          margin-top: ${null!==(a=d.spacing)&&void 0!==a?a:10}px;
        }
      }
      &.snap-right {
        height: 100%;
        top: 0;
        right: ${null!==(r=d.offset)&&void 0!==r?r:50}px;
        width: ${null!==(l=d.size)&&void 0!==l?l:8}px;

        > div:not(:first-of-type) {
          margin-top: ${null!==(s=d.spacing)&&void 0!==s?s:10}px;
        }
      }
      &.snap-top {
        width: 100%;
        top: ${null!==(u=d.offset)&&void 0!==u?u:50}px;
        height: ${null!==(p=d.size)&&void 0!==p?p:8}px;

        > div:not(:first-of-type) {
          margin-left: ${null!==(g=d.spacing)&&void 0!==g?g:10}px;
        }
      }
      &.snap-bottom {
        width: 100%;
        bottom: ${null!==(y=d.offset)&&void 0!==y?y:50}px;
        height: ${null!==(v=d.size)&&void 0!==v?v:8}px;

        > div:not(:first-of-type) {
          margin-left: ${null!==(h=d.spacing)&&void 0!==h?h:10}px;
        }
      }
    `})()},p.map((e=>y(e,e===r)))))}function ft(e,t){return o.css`
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
  `}function mt(e){var t;const{views:n,navInfo:i,activeView:a,animationPreview:r,playMode:l,transition:s,sectionId:u,autoPlay:d,focusable:c=!0,interval:p=x,loop:g=!0,className:v,sectionStyle:h,rotate:f,forceAspectRatio:m,aspectRatio:I,layoutEntryComponent:w,viewVisibilityContext:b}=e,S=o.React.useRef(),C=o.React.useRef(),T=o.React.useRef(!1),R=o.React.useRef(!1),j=o.React.useRef(null),[P,M]=o.React.useState(!1),$=null==a?void 0:a.id,L=o.React.useMemo((()=>{var e;let t,a,r,l=n;return i?(l=null!==(e=i.visibleViews)&&void 0!==e?e:n,i.useProgress?(r=i.progress,t=(0,o.getIndexFromProgress)(r,l.length).currentIndex):(t=Math.max(0,l.indexOf(i.currentViewId)),a=i.previousViewId?Math.max(0,l.indexOf(i.previousViewId)):Math.max(0,t-1))):(t=Math.max(0,l.indexOf($)),a=t),S.current=t,{currentIndex:t,previousIndex:a,progress:r}}),[$,i,n]),O=o.React.useMemo((()=>y.styleUtils.toCSSStyle(h)),[h]),{transform:k}=O,A=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o}(O,["transform"]),E=f>0||f<0?`rotateZ(${f}deg)`:"";let z=E;k&&(z=`${k} ${E}`);const N=o.React.useCallback((()=>{M(!0)}),[]),B=o.React.useCallback((()=>{M(!1)}),[]),F=o.React.useCallback((e=>{T.current=!0,R.current=e.target===C.current,null!=j.current&&(clearTimeout(j.current),j.current=null),d&&M(!0)}),[d]),H=o.React.useCallback((e=>{T.current=!1,null!=j.current&&(clearTimeout(j.current),j.current=null),d&&(j.current=setTimeout((()=>{M(!1)}),500))}),[d]),W=d&&!P;!function(e){const{sectionId:t,autoPlay:n,interval:i=x,loop:a=!1}=e,r=o.React.useRef(),l=o.ReactRedux.useSelector((e=>{var t,i;return n?(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===o.AppMode.Design||(null===(i=e.appRuntimeInfo)||void 0===i?void 0:i.isPrintPreview):null})),s=o.React.useRef(l),u=o.React.useCallback((()=>{r.current&&(clearInterval(r.current),r.current=null)}),[]),d=o.React.useCallback((()=>{u(),r.current=setInterval((()=>{const e=function(e,t){var n,i;const a=(0,o.getAppStore)().getState(),r=a.appConfig.sections[e].views;let l=null===(i=null===(n=a.appRuntimeInfo)||void 0===n?void 0:n.sectionNavInfos)||void 0===i?void 0:i[e];const s=(null==l?void 0:l.currentViewId)?r.indexOf(l.currentViewId):0,u=s<r.length-1?s+1:0;return!(!t&&0===u||(l=l?l.set("previousViewId",r[s]).set("currentViewId",r[u]):{previousViewId:r[s],currentViewId:r[u]},(0,o.getAppStore)().dispatch(o.appActions.sectionNavInfoChanged(e,l)),0))}(t,a);e||u()}),1e3*i)}),[t,a,i,u]);o.React.useEffect((()=>{if(!s.current){if(!n)return void u();d()}return()=>{u()}}),[n,i,a,u,d]),o.React.useEffect((()=>{if(s.current!==l&&null!==l){if(s.current=l,l)return void u();n&&d()}}),[l,d,u,n])}({sectionId:u,interval:p,loop:g,autoPlay:W});const D=o.React.useCallback((e=>{o.jimuHistory.changeView(u,n[e])}),[u,n]);return(0,o.jsx)("div",{className:(0,o.classNames)(`section-layout layout-item-content w-100 ${null===(t=null==h?void 0:h.boxShadow)||void 0===t?void 0:t.presetStyle}`,v),css:ft(m,I),"data-sectionid":u,style:Object.assign(Object.assign({},A),{transform:z}),onMouseEnter:d?N:null,onMouseLeave:d?B:null,onTouchStart:d?N:null,onTouchEnd:d?B:null,onFocus:F,onBlur:H,tabIndex:c?0:void 0,ref:C},(0,o.jsx)(ut,{views:n,navInfo:i,animationPreview:r,playMode:l,currentIndex:L.currentIndex,previousIndex:L.previousIndex,progress:L.progress,loop:W&&g,viewTransition:s,layoutEntryComponent:w,viewVisibilityContext:b}),(0,o.jsx)(ht,{sectionId:u,numOfViews:n.length,currentIndex:L.currentIndex,onCurrentViewChange:D}))}class It extends o.React.PureComponent{render(){return o.React.createElement(mt,Object.assign({},this.props,{layoutEntryComponent:at,viewVisibilityContext:c}))}}var xt=r(4758);function wt(e,t){const[n,i]=o.React.useState(null),a=o.React.useContext(xt.PageVisibilityContext),r=o.React.useRef(!1);o.React.useEffect((()=>{null==e||t||r.current===a||(r.current=a,i((0,o.getNextAnimationId)()))}),[a,t,e]);const l=o.React.useCallback((()=>{i(null)}),[]);return[n,!a,l]}function bt(){const e=[0];for(let t=1;t<=10;t++)e.push(t/10);return e}var St=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};function Ct(e){var t,n,i,a,r,l,s,d,c;const p=o.ReactRedux.useSelector((t=>function(e,t){const n=pe(e,t);if(!n.layoutItem)return n;if(n.layoutItem.type===o.LayoutItemType.Widget){const{layoutId:i,layoutItemId:a}=t,r=function(e,t,n){var i;const a=e.appConfig.layouts[t].content[n];if(a.type===o.LayoutItemType.Widget){const t=e.appConfig.widgets[a.widgetId],o=null===(i=null==t?void 0:t.layouts)||void 0===i?void 0:i.DEFAULT;if(o)return o[e.browserSizeMode]}return null}(e,i,a),l=Object.assign({},n);return r&&(l.innerLayoutId=r),l}const i=De(e,n.layoutItem.sectionId);return Object.assign(Object.assign({},n),i)}(t,e)),o.ReactRedux.shallowEqual),g=o.ReactRedux.useSelector((e=>{var t,o;return null!==(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==o&&o})),y=Object.assign(Object.assign({},e),p),v=o.React.useRef(),{layoutId:h,layoutItemId:f,layoutItem:I}=y,{className:x,children:w,id:b,isLastChild:S}=y,C=St(y,["className","children","id","isLastChild"]),T=(null==I?void 0:I.type)===o.LayoutItemType.Widget,R=(null==I?void 0:I.type)===o.LayoutItemType.Section,{effect:j,oneByOneEffect:P,hoverEffect:M}=g?{}:null!==(n=null===(t=y.layoutItem)||void 0===t?void 0:t.setting)&&void 0!==n?n:{};let $=null===(i=null==j?void 0:j[o.AnimationTriggerType.ScrollIntoView])||void 0===i?void 0:i.type;$=$&&$!==o.AnimationType.None?$:null;let L=null===(a=null==P?void 0:P[o.AnimationTriggerType.ScrollIntoView])||void 0===a?void 0:a.type;L=L&&L!==o.AnimationType.None?L:null;const[O,k]=o.React.useState(!1),[A,E]=o.React.useState({setting:null==P?void 0:P[o.AnimationTriggerType.ScrollIntoView],playId:null,oid:p.innerLayoutId,revert:null}),z=function(e,t){const n=o.React.useRef(),[i,a]=o.React.useState(!0);return o.React.useEffect((()=>{if(n.current&&(n.current.unobserve(e),n.current=null),t&&e&&"function"==typeof IntersectionObserver){const t=new IntersectionObserver((e=>{var t;(t=e[0]).target.classList.contains("playing-animation")||t.boundingClientRect.width>0&&t.boundingClientRect.height>0&&a(t.isIntersecting)}),{threshold:bt(),root:document,rootMargin:"20%"});return t.observe(e),n.current=t,()=>{n.current.unobserve(e),n.current=null}}}),[e,t]),i}(v.current,y.watchViewportVisibility);o.React.useEffect((()=>{k(!0)}),[]);const{setting:N}=o.React.useContext(o.AnimationContext),[B,F,H]=wt($,null!=(null==N?void 0:N.type)&&N.type!==o.AnimationType.None),[W,D,V]=wt(L,null!=(null==N?void 0:N.type)&&N.type!==o.AnimationType.None);o.React.useEffect((()=>{null==B&&W&&E({setting:null==P?void 0:P[o.AnimationTriggerType.ScrollIntoView],playId:W,oid:p.innerLayoutId,revert:D,onContextAnimationEnd:D?null:()=>{V(),E({setting:null==P?void 0:P[o.AnimationTriggerType.ScrollIntoView],oid:p.innerLayoutId,playId:-1})}})}),[B,W]);const G=o.React.useCallback((()=>{var e;const t=null==P?void 0:P[o.AnimationTriggerType.ScrollIntoView],n=(null===(e=null==t?void 0:t.option)||void 0===e?void 0:e.start)===o.AnimationStartMode.AfterPrevious;E({setting:t,playId:(0,o.getNextAnimationId)(),oid:p.innerLayoutId,revert:n,onContextAnimationEnd:n?null:()=>{E({setting:t,oid:p.innerLayoutId,playId:-1})}})}),[L]),U=o.React.useCallback((()=>{var e;const t=null==P?void 0:P[o.AnimationTriggerType.ScrollIntoView];(null===(e=null==t?void 0:t.option)||void 0===e?void 0:e.start)===o.AnimationStartMode.AfterPrevious&&E({setting:t,playId:(0,o.getNextAnimationId)(),oid:p.innerLayoutId,revert:!1,onContextAnimationEnd:()=>{E({setting:t,oid:p.innerLayoutId,playId:-1})}}),B>0&&(null==H||H())}),[L,B]);if(!y.layoutItem||R&&!I.sectionId)return null;const _=null===(r=null==j?void 0:j[o.AnimationTriggerType.ScrollIntoView])||void 0===r?void 0:r.option,X=null!==(c=null===(d=null===(s=null===(l=I.setting)||void 0===l?void 0:l.style)||void 0===s?void 0:s.transform)||void 0===d?void 0:d.rotate)&&void 0!==c?c:0;return(0,o.jsx)(u.Provider,{value:z},(0,o.jsx)(o.AnimationComponent,{id:b,parentId:h,type:$,configType:null==_?void 0:_.configType,direction:null==_?void 0:_.direction,revert:F,delay:e.delay,isLastChild:S,playId:B,onAnimationStart:G,onAnimationEnd:U,ref:v,css:o.css`
          ${(0,o.getHoverStyle)(null==M?void 0:M.type,null==M?void 0:M.setting)};
          position: relative;
          overflow: visible;
          min-width: ${m}px;
          min-height: ${m}px;
        `,style:e.style,className:(0,o.classNames)("d-flex layout-item",x,{"is-widget":T,"is-section":R}),"data-layoutitemid":f,"data-layoutid":h},(0,o.jsx)(o.AnimationContext.Provider,{value:A},T&&(0,o.jsx)(Ze,Object.assign({rotate:X},C)),R&&(0,o.jsx)(It,Object.assign({rotate:X},C))),e.children))}class Tt extends o.React.PureComponent{getPositionStyle(e){const{layoutItem:t,transformedBBox:n}=this.props,i=function(e,t){var o,n,i,a,r;const l={};let s=null!==(o=null==t?void 0:t.autoProps)&&void 0!==o?o:{},u=e;const d=ze("height",e,s),c=ze("width",e,s);if(d===b.Stretch)l.top=u.top,l.bottom=u.bottom;else{const o=null!==(n=s.top)&&void 0!==n&&n,a=null!==(i=s.bottom)&&void 0!==i&&i;d===b.Custom&&(l.height=u.height),o!==a&&!a||null==e.top?l.bottom=u.bottom:l.top=u.top,t.vCenter&&"50%"===u.top&&(l.top="50%")}if(c===b.Stretch)l.left=u.left,l.right=u.right;else{const e=null!==(a=s.left)&&void 0!==a&&a,o=null!==(r=s.right)&&void 0!==r&&r;c===b.Custom&&(l.width=u.width),e===o?null!=u.left?l.left=u.left:l.right=u.right:e&&null!=u.right?l.right=u.right:l.left=u.left,t.hCenter&&"50%"===u.left&&(l.left="50%")}return l}(null!=n?n:t.bbox,e),a=Object.assign(Object.assign({},i),function(e,t,o=!1){const n={},i=t.hCenter&&"50%"===e.left,a=t.vCenter&&"50%"===e.top,r=xe()?-1:1;return i&&a?(n.right="auto",n.bottom="auto",n.transform=`translate(${-50*r}%, -50%)`):i?(n.right="auto",n.transform=`translateX(${-50*r}%)`):a&&(n.bottom="auto",n.transform="translateY(-50%)"),!o&&Ne(t)&&(n.height="auto"),n}(t.bbox,e));return function(e){return[o.css`
      position: absolute;
      left: ${se(e,"left")};
      right: ${se(e,"right")};
      top: ${se(e,"top")};
      bottom: ${se(e,"bottom")};
      width: ${se(e,"width")};
      height: ${se(e,"height")};
    `,e.transform]}(a)}render(){const{layoutItem:e,layoutId:t}=this.props;if(null==e||e.isPending)return null;const n=o.lodash.assign({},We,e.setting),i=we(n.aspectRatio),a=Ne(n),r=Fe(this.props),[l,s]=this.getPositionStyle(n),u=ze("width",e.bbox,n.autoProps),d=ze("height",e.bbox,n.autoProps);return(0,o.jsx)(Ct,Object.assign({css:l,style:{transform:s},layoutId:t,layoutItemId:e.id,forceAspectRatio:a,aspectRatio:i,isInSection:this.props.isInSection,autoWidth:u===b.Auto,autoHeight:d===b.Auto},r))}}class Rt extends o.React.PureComponent{createItem(e,t,n,i){const a=e.content[t];return(0,o.jsx)(Tt,{key:`${e.id}_${t}`,index:n,layoutId:e.id,layoutItemId:t,layoutItem:a,transformedBBox:i?e.content[t].bbox:null,isInSection:this.props.isInSection})}render(){const{layout:e,layouts:t,className:n,style:i,browserSizeMode:a}=this.props;if(!e)return null;let r=e,l=!1;if(t[a]!==e.id&&this.layoutTransform){let o;Object.keys(t).some((n=>{if(t[n]===e.id)return o=n,!0})),r=this.layoutTransform(e,o,a),l=!0}const s=o.lodash.assign({},He,r.setting),u=r.order||[],d=(0,o.classNames)("layout fixed-layout d-flex",n);return(0,o.jsx)("div",{className:d,style:Object.assign(Object.assign(Object.assign({position:"relative",height:"auto"},i),y.styleUtils.toCSSStyle(s.style)),{width:"100%",overflow:"hidden"}),"data-layoutid":r.id},u.length>0&&(0,o.jsx)(o.IntersectionContext.Provider,{value:{monitor:!1}},(0,o.jsx)(o.OneByOneAnimation,{css:o.css`
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
              `,oid:e.id,"data-layoutid":e.id},u.map(((e,t)=>this.createItem(r,e,t,l))))))}}const jt=o.ReactRedux.connect(ce)(Rt);class Pt extends o.React.PureComponent{isStretchInCrossAxis(){const{layoutItem:e}=this.props;return function(e){var t,o;return(null===(o=null===(t=e.setting)||void 0===t?void 0:t.autoProps)||void 0===o?void 0:o.width)!==b.Custom}(e)}calHeight(e,t){return function(e,t){var o,n;return(null===(o=e.autoProps)||void 0===o?void 0:o.height)===b.Auto||"ratio"===e.heightMode?"ratio"===e.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(n=e.autoProps)||void 0===n?void 0:n.height)===b.Stretch||"fit"===e.heightMode?{flex:"1 1 auto"}:{height:t.height,flexShrink:0}}(e,t)}getStyle(e,t){const{layoutItem:n}=this.props,i=n.bbox||{},a=this.calHeight(e,i);return a.width=t?"auto":i.width,this.autoHeight="auto"===a.height,function(e,t,n){var i,a,r;const l=(null===(i=t.autoProps)||void 0===i?void 0:i.height)===b.Auto;return o.css`
    align-self: ${n?"stretch":null!==(r=null===(a=t.style)||void 0===a?void 0:a.alignSelf)&&void 0!==r?r:"auto"};
    width: ${se(e,"width")};
    height: ${se(e,"height")};
    flex: ${e.flex};
    flex-shrink: ${e.flexShrink};
    min-height: ${l?"unset":null};
  `}(a,e,t)}render(){var e,t;const{layoutId:n,layoutItem:i,onClick:a}=this.props;if(!i||i.isPending)return null;const r=i.setting||{},l=null!==(t=null===(e=r.autoProps)||void 0===e?void 0:e.height)&&void 0!==t?t:b.Custom,s=(0,o.classNames)("flexbox-layout-item",{"d-flex":l!==b.Auto}),u=this.isStretchInCrossAxis(),d=Ne(r),c=we(r.aspectRatio),p=Fe(this.props);return(0,o.jsx)(Ct,Object.assign({css:this.getStyle(r,u),layoutId:n,layoutItemId:i.id,onClick:a,className:s,forceAspectRatio:d,aspectRatio:c,autoHeight:this.autoHeight},p))}}const Mt={min:16,space:10},$t=e=>o.css`
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
`;class Lt extends o.React.PureComponent{createItem(e,t,n){const{layout:i}=this.props;return(0,o.jsx)(Pt,{key:e,index:t,space:n.space,layoutId:i.id,layoutItemId:e,layoutItem:i.content[e]})}render(){const{layout:e,className:t}=this.props,n=e.order||(0,o.Immutable)([]),i=Object.assign({},Mt,e.setting),a={position:"relative",overflow:"hidden",padding:y.styleUtils.toCSSPadding(i.padding)},r=(0,o.classNames)("layout column-layout d-flex w-100",t);return(0,o.jsx)("div",{className:r,style:a,"data-layoutid":e.id},(0,o.jsx)(o.IntersectionContext.Provider,{value:{monitor:!0,layoutId:e.id}},(0,o.jsx)(o.OneByOneAnimation,{oid:e.id,className:"trail-container d-flex flex-column w-100",css:$t(i)},n.asMutable().map(((e,t)=>this.createItem(e,t,i))))))}}const Ot=o.ReactRedux.connect(ce)(Lt),kt=o.css`
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
`,At={space:10,style:{padding:{number:[10,10,10,10],unit:y.DistanceUnits.PIXEL}}},Et={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}};class zt extends o.React.PureComponent{getStyle(e){const{gutter:t,layoutItem:n,isMultiRow:i}=this.props,a=n.bbox,r=xe()?-1:1,l=function(e,t,o){var n,i,a,r,l,s,u,d,c,p,g,y,v,h;return o?{height:(null===(n=e.autoProps)||void 0===n?void 0:n.height)===b.Auto?"auto":t.height,alignSelf:null!==(a=null===(i=e.style)||void 0===i?void 0:i.alignSelf)&&void 0!==a?a:"flex-start"}:"ratio"===e.heightMode?{alignSelf:null!==(l=null===(r=e.style)||void 0===r?void 0:r.alignSelf)&&void 0!==l?l:"flex-start"}:(null===(s=e.autoProps)||void 0===s?void 0:s.height)===b.Auto?{height:"auto",alignSelf:null!==(d=null===(u=e.style)||void 0===u?void 0:u.alignSelf)&&void 0!==d?d:"flex-start"}:(null===(c=e.autoProps)||void 0===c?void 0:c.height)===b.Custom?{height:t.height,alignSelf:null!==(g=null===(p=e.style)||void 0===p?void 0:p.alignSelf)&&void 0!==g?g:"flex-start"}:(null===(y=e.autoProps)||void 0===y?void 0:y.height)===b.Stretch||"fit"===e.heightMode?{alignSelf:"stretch"}:parseFloat(t.height)>0?{height:t.height,alignSelf:null!==(h=null===(v=e.style)||void 0===v?void 0:v.alignSelf)&&void 0!==h?h:"flex-start"}:{alignSelf:"stretch"}}(e,a,i);return function(e,t,n,i,a){var r,l,s,u;return e?[o.css`
        padding: ${n/2}px 0;
        height: ${se(i,"height")};
        align-self: ${i.alignSelf};
      `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(r=a.offsetX)&&void 0!==r?r:0)*t}px, ${null!==(l=a.offsetY)&&void 0!==l?l:0}px)`:null]:[o.css`
      padding: 0 ${n/2}px;
      height: ${se(i,"height")};
      align-self: ${i.alignSelf};
    `,0!==a.offsetX||0!==a.offsetY?`translate(${(null!==(s=a.offsetX)&&void 0!==s?s:0)*t}px, ${null!==(u=a.offsetY)&&void 0!==u?u:0}px)`:null]}(i,r,t,l,e)}render(){var e;const{span:t,offset:n,layoutId:i,layoutItem:a}=this.props;if(null==a||a.isPending)return null;const r=o.lodash.assign({},Et,a.setting),l=(0,o.classNames)("row-layout-item",`col-${t}`,`offset-${n}`),s=null===(e=r.autoProps)||void 0===e?void 0:e.height,u=we(r.aspectRatio),d=Fe(this.props),[c,p]=this.getStyle(r);return(0,o.jsx)(Ct,Object.assign({css:c,style:{transform:p},className:l,layoutId:i,layoutItemId:a.id,forceAspectRatio:Ne(r),aspectRatio:u,onClick:this.props.onClick,autoHeight:s===b.Auto},d))}}class Nt extends o.React.PureComponent{constructor(e){super(e),this.flipLeftRight=xe()}collectBounds(){var e;const{transformedLayout:t}=this.props,o=null!==(e=t.order)&&void 0!==e?e:[];return this.childRects=[],o.forEach((e=>{var o,n;if(t.content[e].isPending)return;const i=null===(n=null===(o=t.content)||void 0===o?void 0:o[e])||void 0===n?void 0:n.bbox;null!=i&&this.childRects.push({layoutId:t.id,id:e,left:parseInt(i.left,10),width:parseInt(i.width,10),height:parseInt(i.height,10)})})),this.childRects.sort(((e,t)=>e.left-t.left))}getConfig(){var e;const{layout:t}=this.props;return null!==(e=t.setting)&&void 0!==e?e:At}createItem(e,t,n){var i;const{transformedLayout:a,isMultiRow:r}=this.props,l=this.getConfig(),s=e[t],u=null!==(i=l.space)&&void 0!==i?i:0;let d;if(0===t)d=s.left;else{const o=e[t-1];d=s.left-o.left-o.width}return(0,o.jsx)(zt,{key:`${s.layoutId}_${s.id}`,offset:d,gutter:u,span:s.width,isMultiRow:r,layoutId:a.id,layoutItemId:s.id,layoutItem:a.content[s.id],alignItems:n.alignItems})}render(){var e,t;const{layout:n,className:i}=this.props;this.collectBounds();const a=this.childRects,r=this.getConfig(),l=null!==(e=r.style)&&void 0!==e?e:{},u=null!==(t=r.space)&&void 0!==t?t:0;return(0,o.jsx)(s.Consumer,null,(e=>(0,o.jsx)("div",{className:(0,o.classNames)("row-layout",i,{"row-rtl":this.flipLeftRight}),css:kt,"data-layoutid":n.id},(0,o.jsx)("div",{css:o.css`
                  width: 100%;
                  max-width: ${e.maxWidth>0?`${e.maxWidth}px`:"none"};
                `},(0,o.jsx)("div",{css:o.css`
                    position: relative;
                    height: 100%;
                    margin-left: ${-u/2}px;
                    margin-right: ${-u/2}px;
                    display: flex;
                    flex-direction: column;
                  `},a.length>0&&(0,o.jsx)(o.IntersectionContext.Provider,{value:{monitor:!1}},(0,o.jsx)(o.OneByOneAnimation,{oid:n.id,className:(0,o.classNames)("row h-100 m-0",{"flex-nowrap":!this.props.isMultiRow}),css:o.css`
                          position: relative;
                          height: 100%;
                          overflow: ${this.props.isMultiRow?"auto":"unset"};
                        `},a.map(((e,t)=>this.createItem(a,t,l))))))))))}}class Bt extends o.React.PureComponent{constructor(e){super(e),this.onResize=(e,t)=>{var o;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===e&&0===t)return;const{widgetId:n}=this.props;null!=(null===(o=window.runtimeInfo.widgets)||void 0===o?void 0:o[n])?window.runtimeInfo.widgets[n].height=t:window.runtimeInfo.widgets[n]={height:t}},this.handleDebounceResize=o.lodash.debounce(this.onResize,200)}findExtension(){const e=o.ExtensionManager.getInstance().getExtensions(`${o.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find((e=>e.layoutType===o.LayoutType.RowLayout));this.layoutTransform=null==t?void 0:t.transformLayout}}collectRowItems(){var e;const t=null!==(e=this.finalLayout.order)&&void 0!==e?e:[],o=[];let n=[],i=0;return o.push(n),t.forEach((e=>{if(this.finalLayout.content[e].isPending)return;const t=this.finalLayout.content[e].bbox,a=parseInt(t.left,10),r=Math.floor(a/12);r>i&&(n=[],i=r,o.push(n)),n.push(e)})),o}transform(){const{layout:e,layouts:t,browserSizeMode:o,mainSizeMode:n}=this.props;null==this.layoutTransform&&this.findExtension();let i=e;t[o]!==e.id&&null!=this.layoutTransform&&(i=this.layoutTransform(e,n,o,Ce())),this.finalLayout=i,this.numOfRows=this.collectRowItems().length}createRow(){const{layout:e,layouts:t}=this.props;return(0,o.jsx)(Nt,{layouts:t,layout:e,transformedLayout:this.finalLayout,isMultiRow:this.finalLayout!==e||this.numOfRows>1})}render(){var e,t;const{layout:n,className:i}=this.props,a=null!==(t=(null!==(e=n.setting)&&void 0!==e?e:At).style)&&void 0!==t?t:At.style;return this.transform(),(0,o.jsx)("div",{className:(0,o.classNames)("layout d-flex",i),css:o.css`
          width: 100%;
          padding: ${y.styleUtils.toCSSPadding(a.padding)};
        `,"data-layoutid":n.id},this.createRow(),(0,o.jsx)(o.ReactResizeDetector,{handleHeight:!0,onResize:this.handleDebounceResize}))}}const Ft=o.ReactRedux.connect(ce)(Bt);var Ht=r(7077),Wt=r.n(Ht);const Dt=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",n);return t?o.React.createElement(t,Object.assign({className:a,src:Wt()},i)):o.React.createElement("svg",Object.assign({className:a},i))};var Vt=r(5339),Gt=r.n(Vt);const Ut=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",n);return t?o.React.createElement(t,Object.assign({className:a,src:Gt()},i)):o.React.createElement("svg",Object.assign({className:a},i))};function _t(e,t){var o;return null===(o=e.content)||void 0===o?void 0:o[t]}function Xt(e){var t;const n=y.styleUtils.toCSSPadding(null===(t=null==e?void 0:e.style)||void 0===t?void 0:t.padding);if(n){if(e.paddingColor){const t=n.split(" "),i=e.paddingColor;let a="";const r=window.jimuUA.browser.name.toLowerCase();return"firefox"===r?a="-moz-":"safari"!==r&&"chrome"!==r||(a="-webkit-"),o.css`
        padding: ${n};
        background-image:
        ${a}linear-gradient(270deg, ${i} ${t[0]}, transparent ${t[0]}),
        ${a}linear-gradient(180deg, ${i} ${t[1]}, transparent ${t[1]}),
        ${a}linear-gradient(90deg, ${i} ${t[2]}, transparent ${t[2]}),
        ${a}linear-gradient(0deg, ${i} ${t[3]}, transparent ${t[3]});
      `}return o.css`
      padding: ${n};
    `}}const Yt=o.css`
  & > .max-grid-item-btn {
    display: none;
    background: var(--light-500);
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
`,Jt=o.css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 20;
  background: var(--light);
`;function qt(e){const[t,n]=o.React.useState(!1),i=o.ReactRedux.useSelector((t=>function(e,t,o){var n,i;const a=e.appConfig.layouts[t];if(null!==(n=a.content[o].expandable)&&void 0!==n&&!n)return!1;const r=null===(i=null==a?void 0:a.setting)||void 0===i?void 0:i.rootItem;let l=!1;if(r===o){const e=_t(a,r);null!=e.children&&0!==e.children.length||(l=!0)}return!l}(t,e.layoutId,e.layoutItemId))),a=o.React.useCallback((()=>{n(!t)}),[t]);return(0,o.jsx)(Ct,Object.assign({},e,{css:o.css`${Yt};${t?Jt:""}`}),i&&(0,o.jsx)(y.Button,{icon:!0,type:"tertiary",className:"max-grid-item-btn p-0",onClick:a},t&&(0,o.jsx)(Ut,null),!t&&(0,o.jsx)(Dt,null)))}const Zt=32;function Kt(e,t,o,n,i,a){let r=n,l=i;if("row"===o){const o=a?t.width:e.width,i=a?e.width:t.width;n<0&&(r=o>Zt?-Math.min(Math.abs(n),o-Zt):0),n>0&&(r=i>Zt?Math.min(n,i-Zt):0)}else i<0&&(l=e.height>Zt?-Math.min(Math.abs(i),e.height-Zt):0),i>0&&(l=t.height>Zt?Math.min(i,t.height-Zt):0);return{x:r,y:l}}function Qt(e){const t=e.getAttribute("data-layoutid"),n=e.getAttribute("data-layoutitemid");return+(0,o.getAppStore)().getState().appConfig.layouts[t].content[n].bbox.width}function eo(e){var t,n;const{referenceItemId:i,direction:a,layoutId:r,onResizeEnd:l}=e,s=o.React.useRef(),u=o.React.useRef(),d=o.React.useRef(null),c=null!==(n=null===(t=(0,o.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL)&&void 0!==n&&n,p=o.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode===o.AppMode.Design)),g=o.ReactRedux.useSelector((t=>{var o,n;return null===(n=null===(o=t.appConfig.layouts[e.layoutId].setting)||void 0===o?void 0:o.resizable)||void 0===n||n})),y=o.ReactRedux.useSelector((e=>{var t,o;return null!==(o=null===(t=e.appConfig.layouts[r].setting)||void 0===t?void 0:t.splitSize)&&void 0!==o?o:8})),v=o.ReactRedux.useSelector((e=>{var t,o;return null!==(o=null===(t=e.appConfig.layouts[r].setting)||void 0===t?void 0:t.splitColor)&&void 0!==o?o:"var(--light-500)"})),h=o.React.useMemo((()=>{const e=`${y}px`,t=!!p||g;return o.css`
      width: ${"col"===a?"100%":e};
      height: ${"col"===a?e:"100%"};
      background: ${v};
      position: relative;
      z-index: 10;
      flex-shrink: 0;

      .horizontal-splitter {
        cursor: ${t?"col-resize":"default"};
      }

      .vertical-splitter {
        cursor: ${t?"row-resize":"default"};
      }
    `}),[a,g,p,y,v]);return o.hooks.useEffectOnce((()=>{let e,t,n,r,y,v,h,f,m,I,x,w,b;return o.moduleLoader.loadModule("jimu-core/dnd").then((o=>{const S=o.interact;d.current=S,s.current&&(u.current=S(s.current).origin("parent").draggable({inertia:!1,autoScroll:!1,enabled:!!p||g,modifiers:[S.modifiers.restrict({restriction:"parent"})],lockAxis:"row"===a?"x":"y",onstart:o=>{o.stopPropagation(),e=0,t=0,n=s.current.parentElement.getBoundingClientRect(),r=s.current.previousElementSibling,y=r.getBoundingClientRect(),h=r.style.width,f=r.style.height,v=Qt(r),m=s.current.nextElementSibling,I=m.getBoundingClientRect(),w=m.style.width,b=m.style.height,x=Qt(m)},onmove:o=>{o.stopPropagation(),e+=o.dx,t+=o.dy;const{x:n,y:i}=Kt(y,I,a,e,t,c),l=c?-1:1;"row"===a?(r.style.width=`calc(${v}% + ${n*l}px)`,m.style.width=`calc(${x}% - ${n*l}px)`):(r.style.height=`calc(${v}% + ${i}px)`,m.style.height=`calc(${x}% - ${i}px)`)},onend:o=>{o.stopPropagation(),e+=o.dx,t+=o.dy;const{x:s,y:u}=Kt(y,I,a,e,t,c),d=c?-1:1;r.style.width=h,m.style.width=w,r.style.height=f,m.style.height=b,l(i,Math.round(s*d*1e4/n.width)/100,Math.round(1e4*u/n.height)/100)}}))})),()=>{var e;null===(e=u.current)||void 0===e||e.unset(),u.current=null}})),o.React.useEffect((()=>{null!=u.current&&d.current(s.current).draggable(!!p||g)}),[g,p]),(0,o.jsx)("div",{ref:s,css:h,className:"grid-split flex-shrink-0"},(0,o.jsx)("div",{className:(0,o.classNames)("w-100 h-100",{"horizontal-splitter":"row"===a,"vertical-splitter":"col"===a})}))}function to(e){const{layout:t,layoutItemId:n,isLast:i,className:a}=e,r=o.React.useMemo((()=>_t(t,n)),[t,n]),l=o.React.useMemo((()=>r.parent?_t(t,r.parent).gridType:null),[t,r]),s=+r.bbox.width,u=o.React.useContext(o.AnimationContext),d=o.React.useMemo((()=>{var e,t;return(null===(t=null===(e=null==u?void 0:u.setting)||void 0===e?void 0:e.option)||void 0===t?void 0:t.parentMode)===o.ParentAnimationMode.AllAtOnce?0:250}),[u]),c=o.React.useCallback((()=>l===o.GridItemType.Row?o.css`
        height: 100%;
        width: ${s}%;
      `:l===o.GridItemType.Column?o.css`
        width: 100%;
        height: ${s}%;
      `:o.css`
      width: 100%;
      height: 100%;
    `),[s,l]);if(r.gridType===o.GridItemType.Row)return(0,o.jsx)(oo,{className:a,css:c(),layout:t,layoutItemId:n,items:r.children});if(r.gridType===o.GridItemType.Column)return(0,o.jsx)(no,{className:a,css:c(),layout:t,layoutItemId:n,items:r.children});if(r.gridType===o.GridItemType.Tab)return(0,o.jsx)(io,{className:a,css:c(),layout:t,layoutItemId:n,items:r.children});const p=function(e,t){var n,i;let a=0;const r=_t(e,e.setting.rootItem);if(r&&(null===(n=r.children)||void 0===n?void 0:n.length)>0){const n=[...r.children];for(;n.length>0;){const r=n.shift(),l=_t(e,r),s=_t(e,l.parent);if(`${l.id}`===t||s.gridType===o.GridItemType.Tab&&s.children.includes(t))return a;(null===(i=l.children)||void 0===i?void 0:i.length)>0?n.unshift(...l.children):(s.gridType!==o.GridItemType.Tab||s.gridType===o.GridItemType.Tab&&0===s.children.indexOf(r))&&(a+=1)}}return a}(t,n),g=function(e,t){var o;let n=_t(e,t);if((null===(o=null==n?void 0:n.children)||void 0===o?void 0:o.length)>0)return!1;for(;null!=n;){const t=n.parent;if(null==t)break;const o=_t(e,t),i=o.children.length;if(+o.children[i-1]!=+n.id)return!1;n=o}return!0}(t,n);return(0,o.jsx)(qt,{css:c(),className:(0,o.classNames)(`d-flex ${a}`,{"is-last":i}),layoutId:t.id,layoutItemId:n,delay:p*d,isLastChild:g})}function oo(e){const{layout:t,layoutItemId:n,items:i,className:a}=e,r=o.React.useRef();o.hooks.useEffectOnce((()=>{o.moduleLoader.loadModule("jimu-for-builder").then((e=>{r.current=e.getAppConfigAction}))}));const l=o.hooks.useEventCallback(((e,o)=>{const n=r.current(),a=i.indexOf(e),l=i[a+1],s=t.content[e],u=t.content[l];n.editLayoutItemProperty({layoutId:t.id,layoutItemId:e},"bbox",{width:+s.bbox.width+o}).editLayoutItemProperty({layoutId:t.id,layoutItemId:l},"bbox",{width:+u.bbox.width-o}).exec()}));return(0,o.jsx)("div",{className:`d-flex ${a}`,css:o.css`
        .is-last {
          width: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
      `,"data-layoutid":t.id,"data-layoutitemid":n},i.map(((e,n)=>{return a=e,r=n===i.length-1,(0,o.jsx)(o.React.Fragment,{key:a},(0,o.jsx)(to,{key:a,layout:t,layoutItemId:a}),!r&&(0,o.jsx)(eo,{referenceItemId:a,layoutId:t.id,direction:"row",onResizeEnd:l}));var a,r})))}function no(e){const{layout:t,layoutItemId:n,items:i,className:a}=e,r=o.React.useRef();o.hooks.useEffectOnce((()=>{o.moduleLoader.loadModule("jimu-for-builder").then((e=>{r.current=e.getAppConfigAction}))}));const l=o.hooks.useEventCallback(((e,o,n)=>{const a=r.current(),l=i.indexOf(e),s=i[l+1],u=t.content[e],d=t.content[s];a.editLayoutItemProperty({layoutId:t.id,layoutItemId:e},"bbox",{width:+u.bbox.width+n}).editLayoutItemProperty({layoutId:t.id,layoutItemId:s},"bbox",{width:+d.bbox.width-n}).exec()}));return(0,o.jsx)("div",{className:`d-flex flex-column ${a}`,css:o.css`
        .is-last {
          height: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
      `,"data-layoutid":t.id,"data-layoutitemid":n},i.map(((e,n)=>{return a=e,r=n===i.length-1,(0,o.jsx)(o.React.Fragment,{key:a},(0,o.jsx)(to,{key:a,layout:t,layoutItemId:a}),!r&&(0,o.jsx)(eo,{referenceItemId:a,layoutId:t.id,direction:"col",onResizeEnd:l}));var a,r})))}function io(e){const{layout:t,layoutItemId:n,items:i,className:a}=e,r=o.hooks.useTranslation(y.defaultMessages),l=e=>function(e,t,n){var i,a,r,l,s,u,d;const{layoutId:c,layoutItemId:p}=t,g=e.layouts[c].content[p];if((null==g?void 0:g.type)===o.LayoutItemType.Widget){const t=e.widgets[g.widgetId];return t?null!==(a=null!==(i=null==t?void 0:t.label)&&void 0!==i?i:g.label)&&void 0!==a?a:g.id:n("placeholder")}return(null==g?void 0:g.type)===o.LayoutItemType.Section?e.sections[g.sectionId].label:(null==g?void 0:g.gridType)===o.GridItemType.Row?null!==(r=g.label)&&void 0!==r?r:n("gridRow"):(null==g?void 0:g.gridType)===o.GridItemType.Column?null!==(l=g.label)&&void 0!==l?l:n("gridCol"):(null==g?void 0:g.gridType)===o.GridItemType.Tab?null!==(s=g.label)&&void 0!==s?s:n("tabs"):null!==(d=null!==(u=null==g?void 0:g.label)&&void 0!==u?u:null==g?void 0:g.id)&&void 0!==d?d:""}((0,o.getAppStore)().getState().appConfig,{layoutId:t.id,layoutItemId:e},r);return(0,o.jsx)("div",{className:a,"data-layoutid":t.id,"data-layoutitemid":n},(0,o.jsx)(y.Tabs,{type:"tabs",fill:!0,scrollable:!0,className:"w-100 h-100",css:o.css`
          & > .tab-content {
            overflow: hidden;
          }
        `},[...i].map(((e,n)=>((e,n)=>(0,o.jsx)(y.Tab,{key:n,id:`${n}`,title:l(e)},(0,o.jsx)(to,{layout:t,layoutItemId:e})))(e,n)))))}class ao extends o.React.PureComponent{findExtension(){const e=o.ExtensionManager.getInstance().getExtensions(`${o.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find((e=>e.layoutType===o.LayoutType.GridLayout));this.layoutTransform=null==t?void 0:t.transformLayout}}render(){var e,t;const{layouts:n,layout:i,browserSizeMode:a,mainSizeMode:r,className:l}=this.props;let s=i;n[a]!==i.id&&(null==this.layoutTransform&&this.findExtension(),null!=this.layoutTransform&&(s=this.layoutTransform(i,r,a)));const{rootItem:u}=null!==(e=s.setting)&&void 0!==e?e:{},d=null===(t=s.content)||void 0===t?void 0:t[u],c=(0,o.classNames)("layout grid-layout d-flex w-100 h-100",l);return(0,o.jsx)("div",{className:c,css:o.css`overflow: hidden;${Xt(s.setting)};`,"data-layoutid":s.id},(0,o.jsx)(o.IntersectionContext.Provider,{value:{monitor:!1}},(0,o.jsx)(o.OneByOneAnimation,{oid:s.id,"data-layoutid":s.id,className:"trail-container d-flex w-100 h-100",css:o.css`
              width: 100%;
            `},d?(0,o.jsx)(to,{className:"w-100 h-100",layout:s,layoutItemId:u}):this.props.children)))}}const ro=o.ReactRedux.connect(ce)(ao);class lo{constructor(){this.id="flow-layout-transformer",this.layoutType=o.LayoutType.FlowLayout}transformLayout(e,t,n){if(t!==n&&n===o.BrowserSizeMode.Small){let t=(0,o.Immutable)(e);return(e.order||[]).forEach((e=>{t=t.setIn(["content",e,"setting","heightMode"],"auto")})),t}return e}transformLayoutItem(e,t,o,n,i,a){return{index:t,item:e}}}class so{constructor(){this.id="row-layout-transformer",this.layoutType=o.LayoutType.RowLayout}transformLayout(e,t,n,i){var a,r;if(t===n)return e;let l=(0,o.Immutable)(e);if(n===o.BrowserSizeMode.Small){const t=function(e,t,o){var n;const i=k(e,o),a=function(e,t,o){var n,i,a,r,l,s,u;const d=e.widgets[o];if(null!=d){const c=Te(),p=e.mainSizeMode,g=d.layouts.DEFAULT[c],y=d.layouts.DEFAULT[p],v=be(null!==(l=null===(r=null===(a=null===(i=(null!==(n=e.layouts[g])&&void 0!==n?n:e.layouts[y]).setting)||void 0===i?void 0:i.style)||void 0===a?void 0:a.padding)||void 0===r?void 0:r.number)&&void 0!==l?l:[0]),h=null!==(u=null===(s=null==t?void 0:t[o])||void 0===s?void 0:s.height)&&void 0!==u?u:0;let f=v[0],m=v[2];return ae(f)&&(f=de(f,h)),ae(m)&&(m=de(m,h)),h-f-m}return 0}(e,t,i);if(a>0){const t=null!==(n=e.layouts[o].order)&&void 0!==n?n:[],i={};return t.forEach((t=>{const n=e.layouts[o].content[t];i[t]=Se(a,n)})),i}return null}(i,null===(a=window.runtimeInfo)||void 0===a?void 0:a.widgets,e.id);let n=0;Object.keys(null!==(r=e.content)&&void 0!==r?r:{}).sort(((t,o)=>parseInt(e.content[t].bbox.left,10)-parseInt(e.content[o].bbox.left,10))).forEach((i=>{var a,r,s;const u=e.content[i];if(!u.isPending){if(l=l.setIn(["content",i,"bbox"],{left:12*n,width:12,height:null!==(r=null===(a=u.bbox)||void 0===a?void 0:a.height)&&void 0!==r?r:"auto"}),null!=t){const e=null!==(s=u.setting)&&void 0!==s?s:(0,o.Immutable)({});l=l.setIn(["content",i,"bbox","height"],t[i].height).setIn(["content",i,"setting"],e.merge(t[i].setting))}n+=1}}))}return l}transformLayoutItem(e,t,o,n,i,a){return{item:e,index:t}}}class uo{constructor(){this.id="grid-layout-transformer",this.layoutType=o.LayoutType.GridLayout,this.transformLayout=(e,t,n)=>{var i,a;if(t!==n&&n===o.BrowserSizeMode.Small){let t=(0,o.Immutable)(e);const n=null===(i=e.setting)||void 0===i?void 0:i.rootItem;if(n&&(null===(a=e.content)||void 0===a?void 0:a[n])){const i=[],a=e.content[n];t=this.collectItem(e,n,a.children,i),i.length>0&&(t=t.setIn(["content",n,"gridType"],o.GridItemType.Tab),t=t.setIn(["content",n,"children"],i))}return t}return e},this.collectItem=(e,t,n,i)=>{let a=e;return null==n||n.forEach((n=>{var r;if(!e.content[n].isPending){const l=e.content[n];l.gridType!==o.GridItemType.Column&&l.gridType!==o.GridItemType.Row&&l.gridType!==o.GridItemType.Tab?(i.push(n),a=a.setIn(["content",n,"parent"],t)):(null===(r=l.children)||void 0===r?void 0:r.length)>0&&(a=this.collectItem(a,t,l.children,i))}})),a}}transformLayoutItem(e,t,o,n,i,a){return{index:t,item:e}}}const co={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:y.DistanceUnits.PIXEL}}},po={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0},go=(0,o.createSelector)([(e,t)=>{var o;const{layoutItem:n}=t,i=null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.selection;return!!i&&i.layoutId===t.layoutId&&i.layoutItemId===n.id},(e,t)=>{var n,i,a;const{layoutItem:r}=t;let l=[0,0,0,0];if(r.type===o.LayoutItemType.Widget){const t=r.widgetId,o=e.appConfig.widgets[t];o&&(l=y.styleUtils.expandStyleArray(null===(a=null===(i=null===(n=o.config)||void 0===n?void 0:n.style)||void 0===i?void 0:i.padding)||void 0===a?void 0:a.number))}return l[0]+l[2]},(e,t)=>{const{layoutItem:n}=t;let i=!0;if(n.type===o.LayoutItemType.Widget){const t=n.widgetId,o=e.appConfig.widgets[t];if(o){const t=Object.keys(o.layouts)[0],n=H(o.layouts[t],e.browserSizeMode,e.appConfig.mainSizeMode),a=e.appConfig.layouts[n];a&&Object.keys(a.content||[]).length>0&&Object.keys(a.content||[]).some((e=>{if(!a.content[e].isPending)return i=!1,!0}))}}return i}],((e,t,o)=>({selected:e,padding:t,isEmpty:o})));function yo(e){const t=parseFloat(null==e?void 0:e.width);return t>0?`${e.width}`.includes("px")?`${Math.round(t)}px`:`${Math.round(t)}%`:"100%"}class vo extends o.React.PureComponent{componentDidMount(){var e;const t=null!==(e=(0,o.getAppStore)().getState().queryObject)&&void 0!==e?e:{},{layoutId:n,layoutItem:i}=this.props,a=`${n}_block_${i.id}`;if(t.block_id===a){const e=document.getElementById(a);setTimeout((()=>{e.scrollIntoView({behavior:"smooth",block:"start"})}),500)}}calHeight(e){const t=function(e,t){const o=se(e.bbox||{},"height");if(!o||ae(o))return"auto";switch(t.heightMode){case"auto":return"auto";case"fixed":return o}}(this.props.layoutItem,e);return this.autoHeight="auto"===t,t}getStyle(e){const{index:t,gutter:n}=this.props,i=xe()?-1:1;return[o.css`
        margin-top: ${t>0?`${n}px`:"unset"};
        width: ${yo(e)};
        height: ${this.calHeight(e)};
        flex-shrink: 0;
      `,e.offsetX||e.offsetY?`translate(${(e.offsetX||0)*i}px, ${e.offsetY||0}px)`:null]}render(){const{layoutId:e,layoutItem:t,onClick:n,isEmpty:i}=this.props;if(!t||i)return null;const a=(0,o.classNames)("flow-layout-item","d-flex"),r=o.lodash.assign({},po,t.setting),l=Fe(this.props),[s,u]=this.getStyle(r);return(0,o.jsx)(Ct,Object.assign({id:`${e}_block_${t.id}`,css:s,style:{transform:u},layoutId:e,layoutItemId:t.id,onClick:n,className:a,autoHeight:this.autoHeight},l))}}const ho=o.ReactRedux.connect(go)(vo);class fo extends o.React.PureComponent{calculatePosition(){const{layoutItem:e}=this.props;return function(e,t={}){var n,i,a;const r=e.setting,l=null!==(n=null==r?void 0:r.floatingArea)&&void 0!==n?n:1,s=`${null!==(i=null==r?void 0:r.offsetX)&&void 0!==i?i:0}px`,u=`${null!==(a=null==r?void 0:r.offsetY)&&void 0!==a?a:0}px`,{dh:d,dw:c,initWidth:p,initHeight:g,isResizing:y}=t,v=xe()?`translateX(calc(50% + ${s}))`:`translateX(calc(-50% + ${s}))`,h={};switch(l){case 1:h.left=s,h.top=u,h.transform=null;break;case 2:h.left="50%",h.top=u,h.transform=v;break;case 3:h.right=s,h.top=u,h.transform=null;break;case 4:h.left=s,h.top="50%",h.transform=`translateY(calc(-50% + ${u}))`;break;case 5:h.left="50%",h.top="50%",h.transform=`${v} translateY(calc(-50% + ${u}))`;break;case 6:h.right=s,h.top="50%",h.transform=`translateY(calc(-50% + ${u}))`;break;case 7:h.left=s,h.bottom=u,h.transform=null;break;case 8:h.left="50%",h.bottom=u,h.transform=v;break;case 9:h.right=s,h.bottom=u,h.transform=null}return o.css`
    position: fixed;
    z-index: 1;
    width: ${y?`${p+c}px`:se(e.bbox,"width")};
    height: ${y?`${g+d}px`:se(e.bbox,"height")};
    left: ${h.left};
    right: ${h.right};
    top: ${h.top};
    bottom: ${h.bottom};
    transform: ${h.transform};
  `}(e)}render(){const{layoutId:e,layoutItem:t,onClick:n}=this.props;if(!t)return null;const i=(0,o.classNames)("flow-layout-item floating","d-flex");return(0,o.jsx)(Ct,{css:this.calculatePosition(),layoutId:e,layoutItemId:t.id,onClick:n,className:i})}}const mo=2;function Io(){const e=[0];for(let t=1;t<=100;t++)e.push(t/100);return e}function xo(e){switch(e){case o.ScreenTriggerType.Top:return`0% 0% -${100-mo}% 0%`;case o.ScreenTriggerType.Bottom:return`-${100-mo}% 0% -2px 0%`;case o.ScreenTriggerType.Upper:return`-${100/3-mo/2}% 0% -${200/3-mo/2}% 0%`;case o.ScreenTriggerType.Lower:return`-${200/3-mo/2}% 0% -${100/3-mo/2}% 0%`;default:return}}const wo=.33,bo=.25;function So(e,t,n,i,a,r,l,s,u){const{side:d,size:c,offset:p,background:g,overlay:v=!0,padding:h}=e.panel||{},f=(0,o.getAppStore)().getState().appContext.isRTL?"left"===d?"-":"":"right"===d?"-":"",m=y.styleUtils.toBackgroundEmotionStyle(null!=g?g:{}),I=parseFloat(a);if(u){const e=!v;return o.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${l===o.ScreenTransitionType.Fade?i?"1":"0.5":null};
      min-height: ${s===o.ScreenTransitionType.Cover?`${t}px`:null};
      padding-top: ${s!==o.ScreenTransitionType.Fade&&e?`${Math.round(t*wo)}px`:null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(t*wo)}px; */
      }

      .panel-content {
        width: 100%;
        ${v?"":m};
        /* margin-top: ${l===o.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: auto;
          ${v?m:""};
          min-height: ${Math.round(t*bo)}px;
          padding: ${y.styleUtils.toCSSPadding(h)};
        }

        > .layout-wrapper > .column-layout > .trail-container,
        > .column-layout > .trail-container {
          overflow-y: hidden;
        }

        > .layout-wrapper > .placeholder-btn {
          pointer-events: auto;
          ${v?m:""};
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
        min-height: ${s===o.ScreenTransitionType.Cover?"100vh":null};
        min-height: ${s===o.ScreenTransitionType.Cover?"calc(var(--vh) * 100)":null};
        padding-top: ${s!==o.ScreenTransitionType.Fade&&e?100*wo+"vh":null};
        padding-top: ${s!==o.ScreenTransitionType.Fade&&e?`calc(var(--vh) * ${100*wo})`:null};

        > .layout, > .layout-wrapper > .layout {
          min-height: ${Math.round(100*bo)}vh;
          min-height: calc(var(--vh) * ${Math.round(100*bo)});
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
    `}return o.css`
    width: 100%;
    background: transparent;
    pointer-events: none;
    display: flex;
    flex-direction: ${"right"===d?"row-reverse":"row"};
    justify-content: ${"center"===d&&v?"center":"flex-start"};
    position: relative;
    opacity: ${l===o.ScreenTransitionType.Fade?i?"1":"0.5":null};

    &.top-spacing > .panel-content {
      /* margin-top: ${Math.round(2*t/3)}px; */
    }

    .panel-content {
      width: ${c};
      transform: ${v&&Math.abs(parseFloat(p))>0?`translateX(${f}${p})`:null};
      flex: 0 auto;
      min-height: ${r?`${t}px`:"unset"};
      ${v?"":m};

      > .layout,
      > .layout-wrapper > .layout {
        pointer-events: auto;
        ${v?m:""};
        min-height: ${Math.round(t*bo)}px;
        padding: ${y.styleUtils.toCSSPadding(h)};
      }

      > .layout-wrapper > .column-layout > .trail-container,
      > .column-layout > .trail-container {
        overflow-y: hidden;
      }

      > .layout-wrapper > .placeholder-btn {
        pointer-events: auto;
        ${v?m:""};
      }

      .panel-spacing {
        height: ${Math.round(t*I/100)}px;

        &.last-item {
          height: ${r?`${Math.round(t*I/100)}`:t}px;
        }
      }
    }

    .panel-content-placeholder {
      width: 1px;
      min-height: ${r?t:Math.round(t*bo)}px;
    }

    body:not(.design-mode) & {
      &.top-spacing > .panel-content {
        /* margin-top: ${66.7}vh; */
      }

      .panel-content {
        min-height: ${r?n>0?`calc(100vh - ${n}px)`:"100vh":"unset"};
        min-height: ${r?n>0?`calc(var(--vh) * 100 - ${n}px)`:"calc(var(--vh) * 100)":"unset"};
        > .layout, > .layout-wrapper > .layout {
          min-height: unset;
        }

        .panel-spacing {
          height: ${I}vh;
          height: calc(var(--vh) * ${I});

          &.last-item {
            height: ${r?I:100}vh;
            height: calc(var(--vh) * ${r?I:100});
          }
        }
      }
      .panel-content-placeholder {
        min-height: ${r?"100":Math.round(100*bo)}vh;
        min-height: calc(var(--vh) * ${r?"100":Math.round(100*bo)});
      }
    }
  `}function Co(e){var t;const{index:n,screenId:i,onInterctionChange:a,onHeightChange:r,viewHeight:l,headerHeight:s,layoutEntry:u,isActive:d,isSmallSize:c,transitionType:p,screenTransitionType:g,triggerType:y,stretched:v,verticalSpace:h="0"}=e,f=o.ReactRedux.useSelector((e=>e.appConfig.screens[i])),{panel:m}=f,I=o.React.useRef(),[x,w]=o.React.useState(!1),b=o.React.useRef(),S=o.React.useCallback((e=>{a(n,e)}),[n,a]);o.React.useEffect((()=>(b.current=o.lodash.debounce(r,200),()=>{var e;null===(e=b.current)||void 0===e||e.cancel()})),[r]);const C=o.React.useCallback(((e,t)=>{var o;null===(o=b.current)||void 0===o||o.call(b,n,t)}),[n]);return function(e,t,n,i){const a=o.React.useRef(),r=o.React.useRef();o.React.useEffect((()=>{if(a.current&&(a.current.unobserve(e),a.current=null),e&&"function"==typeof IntersectionObserver){const o=new IntersectionObserver((e=>{(e=>{const t=e.boundingClientRect,o=e.rootBounds,n=Math.abs(t.bottom-o.top)>=Math.abs(t.top-o.top);e.isIntersecting?(r.current=!0,n&&i(!0)):r.current&&(r.current=!1,n)&&i(!1)})(e[0])}),{threshold:Io(),root:t||document,rootMargin:xo(n)});return o.observe(e),a.current=o,()=>{a.current.unobserve(e),a.current=null}}}),[e,t,i,n])}(I.current,e.refElement,c?o.ScreenTriggerType.Lower:null!=y?y:o.ScreenTriggerType.Bottom,S),o.React.useEffect((()=>{w(!0)}),[]),(0,o.jsx)("div",{className:(0,o.classNames)("screen-side-panel",{"top-spacing":0===n&&((null===(t=f.panel)||void 0===t?void 0:t.overlay)||c)}),"data-screenid":i,"data-index":n,ref:I,css:So(f,l,s,d,h,v||null==m,p,g,c)},m&&(0,o.jsx)("div",{className:"panel-content"},(0,o.jsx)(u,{layouts:m.layout}),(0,o.jsx)("div",{className:(0,o.classNames)("panel-spacing",{"last-item":e.isLast})})),!m&&(0,o.jsx)("div",{className:"panel-content-placeholder"}),(0,o.jsx)(o.ReactResizeDetector,{handleHeight:!0,onResize:C}))}var To=r(5467),Ro=r.n(To);const jo=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",n);return t?o.React.createElement(t,Object.assign({className:a,src:Ro()},i)):o.React.createElement("svg",Object.assign({className:a},i))},Po=(0,rt.withBuilderTheme)(y.Tooltip);function Mo(e){const{rootLayoutId:t,viewHeight:n,headerHeight:i,screenId:a,isActive:r,isAbsolute:l,isLast:s,isSmallSize:u,layoutEntry:c,isDesignMode:p,formatMessage:g,builderTheme:v}=e,h=o.ReactRedux.useSelector((e=>e.appConfig.screens[a])),f=o.ReactRedux.useSelector((e=>{var t,o,n;return null===(n=null===(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.screenPanelStates)||void 0===o?void 0:o[a])||void 0===n||n})),{main:m}=h,{side:I,size:x,overlay:w=!0}=h.panel||{},b=o.React.useRef(),S=o.React.useCallback((()=>{(0,o.getAppStore)().dispatch(o.appActions.screenPanelVisibleChanged(a,!0))}),[a]),C=(0,o.classNames)("screen-main-panel",{"is-active":r,"last-one":s});return(0,o.jsx)(d.Provider,{value:!l||r},(0,o.jsx)("div",{id:`${t}_screen_${a}`,className:C,css:function(){var e,t,a,r;if(u){const a=!w&&null!=h.panel,r=a?`${Math.round(n*wo)}px`:`${n}px`,l=a?`${Math.round(100*wo)}`:"100";return o.css`
        pointer-events: none !important;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${n}px;

        > .layout {
          ${y.styleUtils.toBackgroundEmotionStyle(null!==(t=null===(e=h.main)||void 0===e?void 0:e.background)&&void 0!==t?t:{})};
          height: ${r} !important;
          border: none !important;
          pointer-events: auto;
        }

        body:not(.design-mode) & {
          height: ${i>0?`calc(100vh - ${i}px)`:"100vh"};
          height: ${i>0?`calc(var(--vh) * 100 - ${i}px)`:"calc(var(--vh) * 100)"};
          > .layout {
            height: ${l}vh !important;
            height: calc(var(--vh) * ${l}) !important;
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
      `}let s="0px",d="0px";"none"!==I&&(w||"right"===I||(s=x),w||"right"!==I||(d=x));const c=v?o.css`
      color: ${v.colors.palette.dark[900]};
      background-color: ${v.colors.palette.light[400]};
      border-color: ${v.colors.palette.light[600]};
      &:hover {
        color: ${v.colors.black};
        background-color: ${v.colors.palette.light[600]};
      }
    `:null;return o.css`
      ${y.styleUtils.toBackgroundEmotionStyle(null!==(r=null===(a=h.main)||void 0===a?void 0:a.background)&&void 0!==r?r:{})};
      left: ${l?s:null};
      right: ${l?d:null};
      margin-left: ${l?null:s};
      margin-right: ${l?null:d};
      pointer-events: auto;
      display: flex;
      flex-direction: column;
      position: relative;

      > .layout {
        height: ${n}px !important;
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
    `}(),ref:b,"data-screenid":a,"data-index":e.index},(0,o.jsx)(c,{layouts:m.layout,isInWidget:!0}),(0,o.jsx)("div",{className:"spacing-area"}),p&&!f&&(0,o.jsx)("div",{className:"toggle-visible-btn",onClick:S,"data-testid":"toggleBtn"},(0,o.jsx)(Po,{placement:"auto",title:g("showInDesignView")},(0,o.jsx)(y.Button,{type:"default",size:"sm",className:"rounded"},(0,o.jsx)(jo,{size:"m"}))))))}function $o(e,t,n,i,a){return e===o.ScreenTransitionType.Fade?o.css`
      position: sticky;
      height: ${t}px;
      top: 0;

      body:not(.design-mode) & {
        height: ${n>0?`calc(100vh - ${n}px)`:"100vh"};
        height: ${n>0?`calc(var(--vh) * 100 - ${n}px)`:"calc(var(--vh) * 100)"};
        top: ${n>0?`${n}px`:0};
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
    `:e===o.ScreenTransitionType.Cover?o.css`
      position: sticky;
      height: ${t}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: 100%;
        overflow: unset;
        position: relative;

        .screen-main-panel {
          top: ${n>0?`${n}px`:0};
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
    `:e===o.ScreenTransitionType.Push?o.css`
      position: sticky;
      height: ${t}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: auto;
        overflow: unset;

        .screen-main-panel > .layout {
          top: ${n>0?`${n}px`:0};
        }
      }

      .screen-main-panel > .layout {
        position: sticky !important;
        top: 0;
      }
    `:void 0}function Lo(e,t,n){return e===o.ScreenTransitionType.Fade?o.css`
      height: calc(100% - ${t}px);
      background: transparent;
      pointer-events: none;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
      }
    `:e===o.ScreenTransitionType.Cover||e===o.ScreenTransitionType.Push?o.css`
      height: calc(100% - ${t}px);
      background: transparent;
      pointer-events: none;
      display: block;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
        display: none;
      }
    `:void 0}function Oo(e){const{rootLayoutId:t,activeIndex:n,viewHeight:i,headerHeight:a,screens:r,transitionType:l,isSmallSize:s,layoutEntry:u,isDesignMode:d,formatMessage:c,builderTheme:p}=e;return(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)("div",{className:"screen-container",css:$o(l,i,a,s,r.length)},r.map(((e,g)=>(0,o.jsx)(Mo,{key:e,rootLayoutId:t,index:g,isActive:n===g,screenId:e,viewHeight:i,headerHeight:a,isAbsolute:l===o.ScreenTransitionType.Fade,isLast:g===r.length-1,isSmallSize:s,layoutEntry:u,isDesignMode:d,formatMessage:c,builderTheme:p})))),(0,o.jsx)("div",{className:"screen-placeholder",css:Lo(l,i)}))}function ko(e,t){return o.css`
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
        padding-top: ${Math.round(100*wo)}vh;
        padding-top: calc(var(--vh) * ${Math.round(100*wo)});
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
  `}function Ao(e){var t;const{layoutId:n,layoutItemId:i,layoutItem:a}=e,{screenGroupId:r}=a,l=o.ReactRedux.useSelector((e=>e.appConfig.screenGroups[a.screenGroupId])),u=o.ReactRedux.useSelector((e=>{var t,o;return null!==(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==o&&o})),d=o.ReactRedux.useSelector((e=>e.appConfig.screenGroups[a.screenGroupId].screens.some((t=>null!=e.appConfig.screens[t].panel)))),c=o.ReactRedux.useSelector((e=>e.browserSizeMode)),{pageId:p}=o.React.useContext(s),g=o.ReactRedux.useSelector((e=>{const t=e.appConfig.pages[p];if(null==t?void 0:t.header){const t=e.appConfig.header;if(null==t?void 0:t.sticky){const o=e.browserSizeMode,n=e.appConfig.mainSizeMode,i=t.height[o]||t.height[n]||75;return parseInt(i,10)}}return 0})),{screens:y,stretchPanel:v=!0,triggerType:h=o.ScreenTriggerType.Bottom,verticalSpace:f="0",panelTransitionType:m=o.ScreenTransitionType.Push}=l;let I=u?null:null!==(t=l.transitionType)&&void 0!==t?t:o.ScreenTransitionType.Fade;u||c!==o.BrowserSizeMode.Small||d||(I=o.ScreenTransitionType.Cover);const x=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appRuntimeInfo.screenGroupNavInfos)||void 0===t?void 0:t[r]})),w=o.React.useRef(),b=o.React.useRef(),S=o.React.useRef(),[C,T]=o.React.useState(0),R=o.React.useMemo((()=>{var e,t,n;if(c!==o.BrowserSizeMode.Small)return!1;const i=(0,o.getAppStore)().getState().appConfig,a=null===(t=null===(e=i.screenGroups)||void 0===e?void 0:e[r])||void 0===t?void 0:t.screens;return!!(null==a?void 0:a[C])&&(null===(n=i.screens[a[C]].panel)||void 0===n?void 0:n.overlay)}),[r,C,c]);o.React.useEffect((()=>{null!=(null==x?void 0:x.activeIndex)&&x.activeIndex!==C&&T(x.activeIndex)}),[x,C]);const j=o.React.useCallback(((e,t)=>{t&&e!==C?(0,o.getAppStore)().dispatch(o.appActions.screenGroupNavInfoChanged(r,e,!1)):!t&&e>0&&(0,o.getAppStore)().dispatch(o.appActions.screenGroupNavInfoChanged(r,e-1,!1))}),[C,r]),P=o.React.useCallback((()=>{if(!b.current)return;const e=b.current.children[0],t=b.current.children[1],o=t.childElementCount;for(let n=0;n<o;n++){const o=t.children[n],i=o.getAttribute("data-screenid"),a=e.querySelector(`[data-screenid="${i}"]`);a&&(a.style.height=u?`${o.clientHeight}px`:null)}e.style.height=`${t.clientHeight}px`}),[u]),M=o.React.useMemo((()=>o.lodash.debounce(P,200)),[P]),$=o.React.useCallback(((e,t)=>{if(!b.current)return;const n=b.current.children[0],i=b.current.children[1];if(I!==o.ScreenTransitionType.Fade)if(I!==o.ScreenTransitionType.Cover){if(I===o.ScreenTransitionType.Push){const t=n.querySelector(`div.screen-main-panel[data-index="${e}"]`),o=i.querySelector(`div.screen-side-panel[data-index="${e}"]`);t.style.height=`${o.clientHeight}px`,n.style.height=`${i.clientHeight}px`}}else!function(e,t,n){const i=e.querySelectorAll("div.screen-main-panel"),a=t.querySelectorAll("div.screen-side-panel"),r=i.length;for(let e=1;e<r;e++){const t=i.item(e),o=i.item(e-1),n=a.item(e-1);t.style.marginTop=n.clientHeight-o.clientHeight+"px"}n!==o.BrowserSizeMode.Small&&(e.style.height=`${t.clientHeight}px`)}(n,i,c);else n.style.height=`${i.clientHeight}px`}),[c,I]);return y.length>0?(0,o.jsx)("div",{className:(0,o.classNames)("flow-layout-item",{"print-preview":u,"small-size":c===o.BrowserSizeMode.Small}),css:ko(0,R),"data-layoutitemid":i,"data-layoutid":n,ref:w},(0,o.jsx)("div",{className:"screen-group",ref:b},(0,o.jsx)("div",{className:"main-panels",ref:S},(0,o.jsx)(Oo,{rootLayoutId:n,activeIndex:C,screens:y,transitionType:I,layoutEntry:at,headerHeight:g,isSmallSize:c===o.BrowserSizeMode.Small})),(0,o.jsx)("div",{className:"side-panels"},y.map(((e,t)=>(0,o.jsx)(Co,{key:e,index:t,isLast:t===y.length-1,screenId:e,refElement:null,layoutEntry:at,isActive:t===C,stretched:v,triggerType:h,verticalSpace:f,transitionType:m,screenTransitionType:I,onHeightChange:$,onInterctionChange:j,isSmallSize:c===o.BrowserSizeMode.Small,headerHeight:g}))),(0,o.jsx)(o.ReactResizeDetector,{handleHeight:!0,onResize:M})))):null}class Eo extends o.React.PureComponent{constructor(e){super(e);const t=o.ExtensionManager.getInstance().getExtensions(`${o.extensionSpec.ExtensionPoints.LayoutTransformer}`);if(t&&t.length>0){const e=t.find((e=>e.layoutType===this.props.layout.type));this.layoutTransform=null==e?void 0:e.transformLayout}}_createItem(e,t,n){var i;const{layout:a}=this.props;return(null==e?void 0:e.isPending)?null:e.type===o.LayoutItemType.ScreenGroup?(0,o.jsx)(Ao,{key:`${e.id}_${t}`,itemIndex:t,layoutId:a.id,layoutItemId:e.id,layoutItem:e}):(null===(i=e.setting)||void 0===i?void 0:i.isFloating)?(0,o.jsx)(fo,{key:e.id,index:t,gutter:n.gutter,layoutId:a.id,layoutItemId:e.id,layoutItem:e}):(0,o.jsx)(ho,{key:e.id,index:t,gutter:n.gutter,layoutId:a.id,layoutItemId:e.id,layoutItem:e})}render(){const{layout:e,className:t,style:n,layouts:i,browserSizeMode:a}=this.props;if(!e)return null;let r=e;if(i[a]!==e.id&&this.layoutTransform){let t;Object.keys(i).some((o=>{if(i[o]===e.id)return t=o,!0})),r=this.layoutTransform(e,t,a)}const l=r.order||[],s=o.lodash.assign({},co,r.setting),u=Object.assign(Object.assign(Object.assign({},n),y.styleUtils.toCSSStyle(s.style)),{position:"relative"}),d=(0,o.classNames)("layout flow-layout w-100",t);return(0,o.jsx)("div",{className:d,style:u,"data-layoutid":e.id},(0,o.jsx)(o.IntersectionContext.Provider,{value:{monitor:!0}},(0,o.jsx)(o.OneByOneAnimation,{oid:r.id,"data-layoutid":r.id,className:"trail-container d-flex flex-column align-items-center",css:o.css`
              width: 100%;
            `},l.map(((e,t)=>this._createItem(r.content[e],t,s))))))}}const zo=o.ReactRedux.connect(ce)(Eo);var No=r(427),Bo=r.n(No);const Fo=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o}(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",n);return t?o.React.createElement(t,Object.assign({className:a,src:Bo()},i)):o.React.createElement("svg",Object.assign({className:a},i))},{animated:Ho,useSpring:Wo}=o.spring,Do=o.css`
  position: relative;
  display: flex;
  background-color: var(--white);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  .panel-header {
    background-color: var(--primary-600);
    color: var(--white);
    font-weight: 500;
    font-size: 0.875rem;
    height: 36px;
    .actions .jimu-btn {
      color: var(--primary-200);
      &:hover {
        color: var(--white);
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
`;function Vo(e){const{layoutId:t,layoutItemId:n,controllerId:i,minimized:a,onClose:r,onToggle:l}=e,[s,u]=o.React.useState(!1),d=o.React.useRef(),c=o.hooks.useTranslation(),p=o.ReactRedux.useSelector((e=>e.appConfig.layouts[t].content[n].widgetId)),g=o.ReactRedux.useSelector((e=>{var t;const n=null===(t=e.widgetsRuntimeInfo)||void 0===t?void 0:t[p];return(null==n?void 0:n.state)===o.WidgetState.Opened})),v=o.ReactRedux.useSelector((e=>{const t=e.appConfig.widgets[p];return null==t?void 0:t.label}),o.ReactRedux.shallowEqual),h=o.ReactRedux.useSelector((e=>{var t;const o=e.widgetsRuntimeInfo[p];return null!==(t=null==o?void 0:o.isClassLoaded)&&void 0!==t&&t})),f=o.ReactRedux.useSelector((e=>e.appConfig.controllerPanels[i].effect)),m=o.React.useMemo((()=>{var e,t;return(null==f?void 0:f.type)&&f.type!==o.AnimationType.None?(0,o.getAnimationEffect)(f.type,{configType:null===(e=f.option)||void 0===e?void 0:e.configType,direction:null===(t=f.option)||void 0===t?void 0:t.direction}):null}),[f]),[I,x]=Wo((()=>o.DEFAULT_ANIMATION_PROPS),[m]),w=o.React.useCallback((e=>{r(e,p);const t=document.querySelector(`.widget-controller .avatar-card[data-widgetid='${p}']`).querySelector("button");null==t||t.focus()}),[p,r]);let b;return(0,y.useTrapFocusLoop)(d,!0,!0,!1,s&&g),o.React.useEffect((()=>{g&&!s&&(u(!0),o.WidgetManager.getInstance().loadWidgetClass(p).catch((e=>{console.log(e)})))}),[g,p,s]),o.React.useEffect((()=>{g&&null!=m&&x.start(Object.assign(Object.assign({},m.animateProps()),{onRest:()=>{o.lodash.defer((()=>{d.current.style.clipPath=null}))}}))}),[x,g,m]),s&&h&&(b=o.WidgetManager.getInstance().getWidgetClass(p)),(0,o.jsx)(Ho.div,{className:(0,o.classNames)("controller-panel flex-column w-100 h-100",{"d-none":!s||!g}),css:Do,ref:d,style:null!=m?I:null},(0,o.jsx)("div",{className:"panel-header d-flex align-items-center flex-shrink-0 px-4"},(0,o.jsx)("div",{className:"label d-flex align-items-center h-100"},(0,o.jsx)("div",{className:"text-truncate"},v)),(0,o.jsx)("div",{className:"actions ml-auto d-flex align-items-center"},(0,o.jsx)(y.Button,{className:"p-0",icon:!0,type:"tertiary",size:"sm",onClick:l,title:c(a?"expand":"collapse"),"aria-label":c(a?"expand":"collapse")},(0,o.jsx)(Fo,{css:o.css`
              transform: rotate(${a?180:0}deg);
              transition: transform 0.3s ease-in-out;
            `})),(0,o.jsx)(y.Button,{className:"p-0 ml-2",icon:!0,type:"tertiary",size:"sm",onClick:w,title:c("close"),"aria-label":c("close")},(0,o.jsx)(Ut,null)))),(0,o.jsx)("div",{className:"panel-content d-flex flex-grow-1"},!h&&(0,o.jsx)(y.Loading,{type:y.LoadingType.Donut}),b&&(0,o.jsx)("div",{className:"w-100 h-100 widget-content p-1"},(0,o.jsx)(o.ErrorBoundary,null,(0,o.jsx)(b,{widgetId:p,layoutId:t,layoutItemId:n})))))}function Go(e){const{controllerId:t}=e,[n,i]=o.React.useState(!1),a=o.ReactRedux.useSelector((e=>{const o=e.appConfig.widgets[t],n=o.manifest.layouts[0].name,i=o.layouts[n];return i[e.browserSizeMode]||i[e.appConfig.mainSizeMode]})),r=o.ReactRedux.useSelector((e=>{var t;const o=e.appConfig.layouts[a],n=Object.keys(null!==(t=o.content)&&void 0!==t?t:{}).filter((e=>{const t=o.content[e];return null!=(null==t?void 0:t.widgetId)&&!t.isPending}));return n.sort(),n.join(",")})),l=o.ReactRedux.useSelector((e=>{var t,n;const i=Object.keys(null!==(t=e.widgetsRuntimeInfo)&&void 0!==t?t:{}).filter((t=>e.widgetsRuntimeInfo[t].state===o.WidgetState.Opened)),r=e.appConfig.layouts[a];return Object.keys(null!==(n=r.content)&&void 0!==n?n:{}).some((e=>{const t=r.content[e];return null!=(null==t?void 0:t.widgetId)&&!t.isPending&&i.includes(t.widgetId)}))})),s=o.React.useMemo((()=>r.split(",").filter((e=>""!==e))),[r]),u=o.ReactRedux.useSelector((e=>e.appConfig.controllerPanels[t])),d=o.React.useCallback(((e,t)=>{e.stopPropagation(),(0,o.getAppStore)().dispatch(o.appActions.closeWidget(t))}),[]),c=o.React.useCallback((()=>{i(!n)}),[n]),p=o.React.useMemo((()=>o.css`
    ${function(e){let t,n,i;switch(null==e?void 0:e.position){case o.ControllerPosition.TopLeft:t=o.css`top: 0; left: 0; bottom: auto; right: auto;`;break;case o.ControllerPosition.TopRight:t=o.css`top: 0; left: auto; bottom: auto; right: 0;`;break;case o.ControllerPosition.BottomLeft:t=o.css`top: auto; left: 0; bottom: 0; right: auto;`;break;case o.ControllerPosition.BottomRight:t=o.css`top: auto; left: auto; bottom: 0; right: 0;`;break;case o.ControllerPosition.TopCenter:t=o.css`top: 0; left: 50%; bottom: auto; right: auto;`;break;case o.ControllerPosition.BottomCenter:t=o.css`top: auto; left: 50%; bottom: 0; right: auto;`;break;case o.ControllerPosition.MiddleLeft:t=o.css`top: 50%; left: 0; bottom: auto; right: auto;`;break;case o.ControllerPosition.MiddleRight:t=o.css`top: 50%; left: auto; bottom: auto; right: 0;`;break;case o.ControllerPosition.MiddleCenter:t=o.css`top: 50%; left: 50%; bottom: auto; right: auto;`;break;default:t=o.css`top: 0; left: 0; bottom: auto; right: auto;`}return e.widthMode===b.Stretch&&(n=o.css`width:auto;left:${e.left};right:${e.right};`),e.heightMode===b.Stretch&&(i=o.css`height:auto;top:${e.top};bottom:${e.bottom};`),o.css`
    position: fixed;
    ${t}
    width: ${null==e?void 0:e.width};
    height: ${null==e?void 0:e.height};
    ${n};
    ${i}
    overflow: visible;
    z-index: 2;
  `}(u)}
    height: ${n?"36px":null==u?void 0:u.height};
    transition: height 0.3s ease-in-out;
    transform: ${function(e){if(null==e)return null;const{position:t,offsetX:n=0,offsetY:i=0}=e;let a;return e.widthMode!==b.Stretch&&(0!==n&&(a=`translateX(${n}px)`),t!==o.ControllerPosition.TopCenter&&t!==o.ControllerPosition.MiddleCenter&&t!==o.ControllerPosition.BottomCenter||(a=null!=a?`${a} translateX(-50%)`:"translateX(-50%)")),e.heightMode!==b.Stretch&&(0!==i&&(a=null!=a?`${a} translateY(${i}px)`:`translateY(${i}px)`),t!==o.ControllerPosition.MiddleLeft&&t!==o.ControllerPosition.MiddleCenter&&t!==o.ControllerPosition.MiddleRight||(a=null!=a?`${a} translateY(-50%)`:"translateY(-50%)")),a}(u)}
  `),[u,n]);return(0,o.jsx)("div",{className:(0,o.classNames)("panel-container",{"d-none":!l}),css:p},(0,o.jsx)(o.React.Fragment,null,s.map((e=>(0,o.jsx)(Vo,{key:e,controllerId:t,layoutId:a,layoutItemId:e,minimized:n,onToggle:c,onClose:d})))))}function Uo(e){const{pageId:t}=e,n=o.ReactRedux.useSelector((e=>function(e,t,n){var i;const a=Object.keys(null!==(i=e.controllerPanels)&&void 0!==i?i:{}).filter((i=>{const a=E(e,i,o.LayoutItemType.Widget,n);return null!=a&&(a.type!==o.ContainerType.Page||a.id===t)}));return a.sort(),a.join(",")}(e.appConfig,t,e.browserSizeMode))),i=o.React.useMemo((()=>n.split(",").filter((e=>""!==e))),[n]);return(0,o.jsx)(o.React.Fragment,null,i.map((e=>(0,o.jsx)(Go,{key:e,controllerId:e}))))}function _o(e){const{pageJson:t,visible:n,pageContext:i,browserSizeMode:a,isPrintPreview:r,headerFooterHeight:l}=e,[u,c]=o.React.useState(),p=t.layout,g=o.React.useMemo((()=>function(e,t){if(e){const n=(0,o.getAppStore)().getState().appConfig,i=e.layout[n.mainSizeMode],a=n.layouts[i];if((null==a?void 0:a.type)===o.LayoutType.GridLayout)return t>0?`calc(100% - ${t}px)`:"100%"}return"auto"}(t,l)),[l]),y=!r&&t.oneByOneEffect&&t.oneByOneEffect.type!==o.AnimationType.None?t.oneByOneEffect:null,v=y?!n:null;let h;o.React.useEffect((()=>{y&&c((0,o.getNextAnimationId)())}),[n]),o.React.useEffect((()=>{var e;if(n&&p){const t=(0,o.getAppStore)().getState().appConfig,n=p[t.mainSizeMode],i=null===(e=t.layouts[n])||void 0===e?void 0:e.type,a=document.getElementsByTagName("html")[0];i===o.LayoutType.FlowLayout?a.classList.add("scrollable"):a.classList.remove("scrollable")}}),[n]),t.mode!==o.PageMode.FitWindow&&t.maxWidth>0&&(h=t.maxWidth);const f=o.React.useMemo((()=>{const e=(0,o.getAppStore)().getState();let n;return t.layout&&(n=H(t.layout,a,e.appConfig.mainSizeMode)),Object.assign(Object.assign({},i),{maxWidth:h,viewOnly:!0,rootLayoutId:n,pageId:t.id})}),[i,h,t.id]),m=o.React.useMemo((()=>({setting:y,revert:v,playId:y?u:null,oid:f.rootLayoutId,onContextAnimationEnd:()=>{c(-1)}})),[y,v,u]);if(p)return(0,o.jsx)(s.Provider,{key:t.id,value:f},(0,o.jsx)(d.Provider,{value:n},(0,o.jsx)("div",{id:t.id,"data-pageid":t.id,className:"page",css:o.css`
            display: ${n?"flex":"none"};
            background-color: ${t.bodyBackgroundColor||"transparent"};
            height: ${g};
            flex: 1 0 auto;
            z-index: 1;
          `},(0,o.jsx)(o.AnimationContext.Provider,{value:m},(0,o.jsx)(at,{layouts:p,className:"w-100 flex-grow-1",css:o.css`
                margin: 0 auto;
                background-color: transparent;
                z-index: 0;
              `})),a!==o.BrowserSizeMode.Small&&(0,o.jsx)(Uo,{pageId:t.id}))))}function Xo(e){var t,n;const{headerJson:i,visible:a,browserSizeMode:r,theme:l,mainSizeMode:u,pageContext:c,onHeightChange:p}=e,g=i.height[r]||i.height[u]||50,y=i.layout;let v;i.backgroundIMage&&("string"==typeof i.backgroundIMage?v=i.backgroundIMage:"object"==typeof i.backgroundIMage&&(v=i.backgroundIMage.url));const h=o.React.useMemo((()=>{var e;return o.css`
      display: ${a?"flex":"none"};
      position: ${i.sticky?"sticky":"relative"};
      z-index: ${i.sticky?2:"0"};
      top: 0;
      width: 100%;
      min-height: ${Math.round(parseFloat(g))}px;
      height: auto;
      overflow: hidden;
      background-color: ${i.backgroundColor||l.header.bg||"transparent"};
      background-image: ${v};
      background-position: ${i.backgroundPosition};
      color: ${null===(e=null==l?void 0:l.header)||void 0===e?void 0:e.color};
      flex: 0 0 auto;
    `}),[a,g,i.sticky,i.backgroundColor,v,i.backgroundPosition,null===(t=null==l?void 0:l.header)||void 0===t?void 0:t.bg,null===(n=null==l?void 0:l.header)||void 0===n?void 0:n.color]),f=o.React.useMemo((()=>Object.assign(Object.assign({},c),{viewOnly:!0})),[c]),m=o.React.useCallback(((e,t)=>{p(t)}),[p]);return(0,o.jsx)(s.Provider,{value:f},(0,o.jsx)(d.Provider,{value:a},(0,o.jsx)("div",{className:"header",css:h},(0,o.jsx)(at,{layouts:y,className:"w-100 flex-grow-1"}),(0,o.jsx)(o.ReactResizeDetector,{handleHeight:!0,handleWidth:!1,onResize:m}))))}function Yo(e){var t,n;const{footerJson:i,visible:a,browserSizeMode:r,theme:l,mainSizeMode:u,pageContext:c,onHeightChange:p}=e,g=i.height[r]||i.height[u]||50,y=i.layout;let v;i.backgroundIMage&&("string"==typeof i.backgroundIMage?v=i.backgroundIMage:"object"==typeof i.backgroundIMage&&(v=i.backgroundIMage.url));const h=o.React.useMemo((()=>{var e;return o.css`
      display: ${a?"flex":"none"};
      width: 100%;
      min-height: ${Math.round(parseFloat(g))}px;
      height: auto;
      overflow: hidden;
      background-color: ${i.backgroundColor||l.footer.bg||"transparent"};
      background-image: ${v};
      background-position: ${i.backgroundPosition};
      color: ${null===(e=null==l?void 0:l.footer)||void 0===e?void 0:e.color};
      z-index: 0;
    `}),[a,g,i.backgroundColor,v,i.backgroundPosition,null===(t=null==l?void 0:l.footer)||void 0===t?void 0:t.bg,null===(n=null==l?void 0:l.footer)||void 0===n?void 0:n.color]),f=o.React.useMemo((()=>Object.assign(Object.assign({},c),{viewOnly:!0})),[c]),m=o.React.useCallback(((e,t)=>{p(t)}),[p]);return(0,o.jsx)(s.Provider,{value:f},(0,o.jsx)(d.Provider,{value:a},(0,o.jsx)("div",{className:"footer",css:h},(0,o.jsx)(at,{layouts:y,className:"w-100 flex-grow-1"}),(0,o.jsx)(o.ReactResizeDetector,{handleHeight:!0,handleWidth:!1,onResize:m}))))}const Jo=o.css`
  display: flex;
  height: 64px;
  background: var(--dark-700);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1500;

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
`;function qo(){const e=o.i18n.getIntl(),t=o.React.useRef();o.React.useEffect((()=>{t.current.focus()}),[]);const n=o.React.useCallback((t=>e.formatMessage({id:t})),[e]),i=o.hooks.useEventCallback((()=>{o.jimuHistory.changeQueryObject({print_preview:null}),(0,o.getAppStore)().dispatch(o.appActions.quitPrintPreview())})),a=o.hooks.useEventCallback((()=>{window.print()}));return(0,o.jsx)("div",{className:"print-preview-tool shadow-lg",css:Jo},(0,o.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-grow-1"},(0,o.jsx)(y.Button,{ref:t,"aria-label":n("printCurrentPage"),type:"primary",onClick:a},n("printCurrentPage"))),(0,o.jsx)(y.Button,{className:"ml-auto",icon:!0,type:"tertiary","aria-label":n("close"),onClick:i},(0,o.jsx)(Ut,{color:"var(--white)"})))}tt(o.LayoutType.FixedLayout,jt),tt(o.LayoutType.FlowLayout,zo),tt(o.LayoutType.GridLayout,ro),tt(o.LayoutType.ColumnLayout,Ot);class Zo extends o.React.PureComponent{constructor(e){super(e),this.updateHeaderHeight=e=>{this.setState({headerHeight:e})},this.updateFooterHeight=e=>{this.setState({footerHeight:e})},this.isMac=()=>{var e,t;return"macOS"===(null===(t=null===(e=window.jimuUA)||void 0===e?void 0:e.os)||void 0===t?void 0:t.name)},this.state={headerHeight:0,footerHeight:0},o.ExtensionManager.getInstance().registerExtension({epName:o.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new lo}),o.ExtensionManager.getInstance().registerExtension({epName:o.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new so}),o.ExtensionManager.getInstance().registerExtension({epName:o.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new uo}),this.pageContext={theme:this.props.theme},window.jimuConfig.isBuilder||(this.isMac()?this.keyBindings={"command+keyp":this.handlePrintEvent}:this.keyBindings={"ctrl+keyp":this.handlePrintEvent})}componentDidUpdate(e){Qo(e.pageStatus)!==Qo(this.props.pageStatus)&&(document.getElementsByTagName("html")[0].scrollTop=0)}handlePrintEvent(e){(0,o.getAppStore)().dispatch(o.appActions.activePrintPreview()),o.jimuHistory.changeQueryObject({print_preview:String(!0)}),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation()}render(){const{pageStatus:e,pages:t,theme:n,isPrintPreview:i}=this.props,a=Qo(e);if(!a||!(null==t?void 0:t[a]))return null;let r="100%";const l=t[a]||{};l&&!isNaN(+l.width)&&(r=+l.width+"px");const s=o.css`
      width: ${r};
      margin: 0 auto;
      min-height: 100%;
      overflow: auto;
      height: 100%;
      background-color: ${l&&l.backgroundColor};

      html.scrollable & {
        height: auto;
        overflow: unset;
        min-height: 100vh;
      }
    `;return(0,o.jsx)("div",{className:"page-renderer d-flex flex-column",css:s,ref:e=>{this.pageRef=e},"data-testid":"pageRenderer"},i&&(0,o.jsx)(qo,null),this.renderDialog(),this.renderHeader(),Object.keys(e).map((e=>this.renderPageBody(e,n))),this.renderFooter(),(0,o.jsx)(o.Keyboard,{bindings:this.keyBindings}))}renderHeader(){if(!this.props.header)return null;const{header:e,headerVisible:t,browserSizeMode:n,theme:i,mainSizeMode:a}=this.props;return(0,o.jsx)(Xo,{headerJson:e,pageContext:this.pageContext,visible:t,browserSizeMode:n,mainSizeMode:a,theme:i,onHeightChange:this.updateHeaderHeight})}renderFooter(){if(!this.props.footer)return null;const{footer:e,footerVisible:t,browserSizeMode:n,mainSizeMode:i,theme:a}=this.props;return(0,o.jsx)(Yo,{footerJson:e,pageContext:this.pageContext,visible:t,browserSizeMode:n,mainSizeMode:i,theme:a,onHeightChange:this.updateFooterHeight})}renderPageBody(e,t){const{pageStatus:n,pages:i,isPrintPreview:a}=this.props,r=i[e];if(!r)return;const l=!!n[e];return(0,o.jsx)(_o,{key:r.id,pageJson:r,pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,visible:l,isPrintPreview:a,headerFooterHeight:this.state.headerHeight+this.state.footerHeight})}renderDialog(){const{dialogId:e,urlDialogJson:t,splashDialogJson:n,isSplashClosed:i,isPageDlgClosed:a,pageDialogJson:r,pageDialogId:l}=this.props;return(0,o.jsx)(o.React.Fragment,null,t&&(0,o.jsx)(s.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:e,viewOnly:!0})},(0,o.jsx)(o.AppDialog,{dialogJson:t,runtime:!0})),!a&&r&&(null==t?void 0:t.id)!==r.id&&(0,o.jsx)(s.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:l,viewOnly:!0})},(0,o.jsx)(o.AppDialog,{dialogJson:r,runtime:!0,isOpenByPage:!0})),!i&&n&&(null==t?void 0:t.id)!==n.id&&(0,o.jsx)(s.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:n.id,viewOnly:!0})},(0,o.jsx)(o.AppDialog,{dialogJson:n,runtime:!0})))}}Zo.displayName="RuntimePageRenderer";const Ko=(0,o.createSelector)([e=>e.appConfig.pages,e=>e.appConfig.dialogs,e=>e.appConfig.header,e=>e.appConfig.footer,e=>e.browserSizeMode,e=>e.appConfig.mainSizeMode,e=>{var t;const o=window.jimuConfig.isBuilder?e.appStateInBuilder:e;return null===(t=null==o?void 0:o.appRuntimeInfo)||void 0===t?void 0:t.dialogInfos},e=>{var t;const o=window.jimuConfig.isBuilder?e.appStateInBuilder:e;return null===(t=null==o?void 0:o.appRuntimeInfo)||void 0===t?void 0:t.currentPageId},e=>{var t,o,n;const i=window.jimuConfig.isBuilder?e.appStateInBuilder:e,a=null===(t=null==i?void 0:i.appRuntimeInfo)||void 0===t?void 0:t.currentPageId;return null===(n=null===(o=null==i?void 0:i.appConfig)||void 0===o?void 0:o.pages[a])||void 0===n?void 0:n.autoOpenDialogId},e=>{var t,o;return null!==(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.isPrintPreview)&&void 0!==o&&o},(e,t)=>Qo(t.pageStatus),(e,t)=>t.dialogId],((e,t,o,n,i,a,r,l,s,u,d,c)=>{var p,g;if(!d||!e[d])return{};const y=t[Object.keys(t).find((e=>t[e].isSplash))];return{pages:e,header:o,headerVisible:!!e[d].header,footer:n,footerVisible:!!e[d].footer,browserSizeMode:i,mainSizeMode:a,splashDialogJson:y,isSplashClosed:null===(p=null==r?void 0:r[null==y?void 0:y.id])||void 0===p?void 0:p.isClosed,pageDialogId:s,pageDialogJson:t[s],isPageDlgClosed:null===(g=null==r?void 0:r[l+"-"+s])||void 0===g?void 0:g.isClosed,urlDialogJson:t[c],isPrintPreview:u}}));function Qo(e){return Object.keys(e).find((t=>e[t]))}const en=o.ReactRedux.connect(Ko)((0,rt.withTheme)(Zo));var tn=function(e,t,o,n){return new(o||(o=Promise))((function(i,a){function r(e){try{s(n.next(e))}catch(e){a(e)}}function l(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,l)}s((n=n.apply(e,t||[])).next())}))};function on(){return tn(this,void 0,void 0,(function*(){return yield Promise.all([a()])}))}})(),l})())}}}));