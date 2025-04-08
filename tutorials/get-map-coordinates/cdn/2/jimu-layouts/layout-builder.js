/*! For license information please see layout-builder.js.LICENSE.txt */
System.register(["jimu-core","jimu-for-builder","jimu-ui","jimu-layouts/layout-runtime","jimu-theme","jimu-core/dnd","jimu-ui/advanced/setting-components","jimu-for-builder/templates","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker"],(function(t,e){var o={},i={},n={},s={},a={},l={},r={},d={},u={},c={};return{setters:[function(t){o.APP_FRAME_NAME_IN_BUILDER=t.APP_FRAME_NAME_IN_BUILDER,o.AnimationComponent=t.AnimationComponent,o.AnimationContext=t.AnimationContext,o.AnimationPlayMode=t.AnimationPlayMode,o.AnimationStartMode=t.AnimationStartMode,o.AnimationTriggerType=t.AnimationTriggerType,o.AnimationType=t.AnimationType,o.AppDialog=t.AppDialog,o.AppMode=t.AppMode,o.AppType=t.AppType,o.BrowserSizeMode=t.BrowserSizeMode,o.ContainerType=t.ContainerType,o.DEFAULT_ANIMATION_PROPS=t.DEFAULT_ANIMATION_PROPS,o.ErrorBoundary=t.ErrorBoundary,o.ExtensionManager=t.ExtensionManager,o.FixedPosition=t.FixedPosition,o.GridItemType=t.GridItemType,o.HoverType=t.HoverType,o.Immutable=t.Immutable,o.IntersectionContext=t.IntersectionContext,o.Keyboard=t.Keyboard,o.LayoutItemType=t.LayoutItemType,o.LayoutParentType=t.LayoutParentType,o.LayoutType=t.LayoutType,o.OneByOneAnimation=t.OneByOneAnimation,o.PageMode=t.PageMode,o.PagePart=t.PagePart,o.PageType=t.PageType,o.ParentAnimationMode=t.ParentAnimationMode,o.React=t.React,o.ReactRedux=t.ReactRedux,o.ReactResizeDetector=t.ReactResizeDetector,o.ScreenTransitionType=t.ScreenTransitionType,o.ScreenTriggerType=t.ScreenTriggerType,o.TransitionContainer=t.TransitionContainer,o.TransitionType=t.TransitionType,o.WidgetManager=t.WidgetManager,o.WidgetState=t.WidgetState,o.WidgetType=t.WidgetType,o.appActions=t.appActions,o.appConfigUtils=t.appConfigUtils,o.classNames=t.classNames,o.createSelector=t.createSelector,o.css=t.css,o.extensionSpec=t.extensionSpec,o.focusElementInKeyboardMode=t.focusElementInKeyboardMode,o.getAnimationEffect=t.getAnimationEffect,o.getAppStore=t.getAppStore,o.getHoverStyle=t.getHoverStyle,o.getIndexFromProgress=t.getIndexFromProgress,o.getNextAnimationId=t.getNextAnimationId,o.hooks=t.hooks,o.i18n=t.i18n,o.injectIntl=t.injectIntl,o.jimuHistory=t.jimuHistory,o.jsx=t.jsx,o.lodash=t.lodash,o.moduleLoader=t.moduleLoader,o.polished=t.polished,o.spring=t.spring,o.utils=t.utils},function(t){i.BaseLayoutService=t.BaseLayoutService,i.ContentServiceWrapper=t.ContentServiceWrapper,i.LayoutServiceProvider=t.LayoutServiceProvider,i.appBuilderSync=t.appBuilderSync,i.builderActions=t.builderActions,i.builderAppSync=t.builderAppSync,i.getAppConfigAction=t.getAppConfigAction,i.placeholderService=t.placeholderService,i.screenGroupService=t.screenGroupService,i.widgetService=t.widgetService},function(t){n.AdvancedButtonGroup=t.AdvancedButtonGroup,n.Button=t.Button,n.Checkbox=t.Checkbox,n.DistanceUnits=t.DistanceUnits,n.Dropdown=t.Dropdown,n.DropdownButton=t.DropdownButton,n.DropdownMenu=t.DropdownMenu,n.FOCUSABLE_CONTAINER_CLASS=t.FOCUSABLE_CONTAINER_CLASS,n.FillType=t.FillType,n.Icon=t.Icon,n.Label=t.Label,n.Loading=t.Loading,n.LoadingType=t.LoadingType,n.NumericInput=t.NumericInput,n.PanelHeader=t.PanelHeader,n.Popper=t.Popper,n.Select=t.Select,n.Switch=t.Switch,n.Tab=t.Tab,n.Tabs=t.Tabs,n.TextInput=t.TextInput,n.Tooltip=t.Tooltip,n.defaultMessages=t.defaultMessages,n.getFocusableElements=t.getFocusableElements,n.styleUtils=t.styleUtils,n.useTrapFocusBySelector=t.useTrapFocusBySelector,n.utils=t.utils},function(t){s.CLICK_TOLERANCE=t.CLICK_TOLERANCE,s.CONTEXT_MENU_ICON_SIZE=t.CONTEXT_MENU_ICON_SIZE,s.CONTEXT_MENU_ITEM_SIZE=t.CONTEXT_MENU_ITEM_SIZE,s.LayoutContext=t.LayoutContext,s.LayoutItemSizeModes=t.LayoutItemSizeModes,s.LayoutZIndex=t.LayoutZIndex,s.MIN_LAYOUT_ITEM_SIZE=t.MIN_LAYOUT_ITEM_SIZE,s.PageContext=t.PageContext,s.PageVisibilityContext=t.PageVisibilityContext,s.ViewVisibilityContext=t.ViewVisibilityContext,s.ViewportVisibilityContext=t.ViewportVisibilityContext,s.WidgetRenderer=t.WidgetRenderer,s.findLayoutBuilder=t.findLayoutBuilder,s.registerLayoutBuilder=t.registerLayoutBuilder,s.searchUtils=t.searchUtils,s.utils=t.utils},function(t){a.Theme2GlobalStyleClassName=t.Theme2GlobalStyleClassName,a.ThemeSwitchComponent=t.ThemeSwitchComponent,a.getBuilderThemeVariables=t.getBuilderThemeVariables,a.getTheme=t.getTheme,a.getTheme2=t.getTheme2,a.useTheme=t.useTheme,a.withBuilderTheme=t.withBuilderTheme,a.withTheme=t.withTheme},function(t){l.interact=t.interact},function(t){r.SettingRow=t.SettingRow,r.SettingSection=t.SettingSection,r.SidePopper=t.SidePopper,r.TemplateSelector=t.TemplateSelector,r.WidgetListPopper=t.WidgetListPopper},function(t){d.getBlockTemplates=t.getBlockTemplates,d.getFooterTemplates=t.getFooterTemplates,d.getFullScreenGridPageTemplates=t.getFullScreenGridPageTemplates,d.getFullScreenPageTemplates=t.getFullScreenPageTemplates,d.getGridTemplates=t.getGridTemplates,d.getHeaderTemplates=t.getHeaderTemplates,d.getScreenGroupTemplates=t.getScreenGroupTemplates,d.getScreenTemplates=t.getScreenTemplates,d.getScrollingPageTemplates=t.getScrollingPageTemplates,d.getWindowTemplates=t.getWindowTemplates},function(t){u.AnimationSettingComponent=t.AnimationSettingComponent,u.InputRatio=t.InputRatio,u.InputUnit=t.InputUnit,u.Padding=t.Padding,u.SizeEditor=t.SizeEditor,u.ThemeBackgroundSection=t.ThemeBackgroundSection,u.ThemeBorderSection=t.ThemeBorderSection,u.ThemeBoxShadowSection=t.ThemeBoxShadowSection,u.TransitionSetting=t.TransitionSetting},function(t){c.ThemeColorPicker=t.ThemeColorPicker}],execute:function(){t((()=>{var t={4146:(t,e,o)=>{"use strict";var i=o(4363),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function r(t){return i.isMemo(t)?a:l[t.$$typeof]||n}l[i.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[i.Memo]=a;var d=Object.defineProperty,u=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,g=Object.prototype;t.exports=function t(e,o,i){if("string"!=typeof o){if(g){var n=h(o);n&&n!==g&&t(e,n,i)}var a=u(o);c&&(a=a.concat(c(o)));for(var l=r(e),m=r(o),y=0;y<a.length;++y){var f=a[y];if(!(s[f]||i&&i[f]||m&&m[f]||l&&l[f])){var v=p(o,f);try{d(e,f,v)}catch(t){}}}}return e}},7927:t=>{"use strict";t.exports=function(t,e,o,i,n,s,a,l){if(!t){var r;if(void 0===e)r=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[o,i,n,s,a,l],u=0;(r=new Error(e.replace(/%s/g,(function(){return d[u++]})))).name="Invariant Violation"}throw r.framesToPop=1,r}}},2799:(t,e)=>{"use strict";var o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,n=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,r=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,u=o?Symbol.for("react.async_mode"):60111,c=o?Symbol.for("react.concurrent_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,g=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,f=o?Symbol.for("react.block"):60121,v=o?Symbol.for("react.fundamental"):60117,I=o?Symbol.for("react.responder"):60118,x=o?Symbol.for("react.scope"):60119;function b(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case i:switch(t=t.type){case u:case c:case s:case l:case a:case h:return t;default:switch(t=t&&t.$$typeof){case d:case p:case y:case m:case r:return t;default:return e}}case n:return e}}}function w(t){return b(t)===c}e.AsyncMode=u,e.ConcurrentMode=c,e.ContextConsumer=d,e.ContextProvider=r,e.Element=i,e.ForwardRef=p,e.Fragment=s,e.Lazy=y,e.Memo=m,e.Portal=n,e.Profiler=l,e.StrictMode=a,e.Suspense=h,e.isAsyncMode=function(t){return w(t)||b(t)===u},e.isConcurrentMode=w,e.isContextConsumer=function(t){return b(t)===d},e.isContextProvider=function(t){return b(t)===r},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===i},e.isForwardRef=function(t){return b(t)===p},e.isFragment=function(t){return b(t)===s},e.isLazy=function(t){return b(t)===y},e.isMemo=function(t){return b(t)===m},e.isPortal=function(t){return b(t)===n},e.isProfiler=function(t){return b(t)===l},e.isStrictMode=function(t){return b(t)===a},e.isSuspense=function(t){return b(t)===h},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===s||t===c||t===l||t===a||t===h||t===g||"object"==typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===m||t.$$typeof===r||t.$$typeof===d||t.$$typeof===p||t.$$typeof===v||t.$$typeof===I||t.$$typeof===x||t.$$typeof===f)},e.typeOf=b},4363:(t,e,o)=>{"use strict";t.exports=o(2799)},2756:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path fill="#000" fill-rule="evenodd" d="M1.5 1.5h5v5h-5zM.25 7.75V.25h7.5v7.5zM1.5 11.5h5v5h-5zM.25 17.75v-7.5h7.5v7.5zM16.5 1.5h-5v5h5zM10.25.25v7.5h7.5V.25zm3.125 17.5v-3.125H10.25v-1.25h3.125V10.25h1.25v3.125h3.125v1.25h-3.125v3.125z" clip-rule="evenodd"></path></svg>'},6490:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M3.154 3.154a.527.527 0 0 1 .746 0l1.317 1.317A8.6 8.6 0 0 1 8 4c2.667 0 5.667 1.333 7 4-.696 1.393-1.847 2.422-3.168 3.087l1.014 1.013a.527.527 0 1 1-.746.746l-1.317-1.317A8.6 8.6 0 0 1 8 12c-2.667 0-5.667-1.333-7-4 .696-1.393 1.847-2.422 3.168-3.087L3.154 3.9a.527.527 0 0 1 0-.746m1.698 2.443C3.726 6.087 2.782 6.882 2 8c1.422 2.033 3.382 3 6 3a8.7 8.7 0 0 0 2.03-.225l-.675-.674A2.5 2.5 0 0 1 5.9 6.644zm6.296 4.805C12.275 9.913 13.218 9.119 14 8c-1.422-2.033-3.382-3-6-3q-1.088 0-2.03.225l.675.674a2.5 2.5 0 0 1 3.457 3.456zM6.5 8c0-.221.048-.431.134-.62l1.987 1.986A1.5 1.5 0 0 1 6.5 8m.88-1.366 1.986 1.987a1.5 1.5 0 0 0-1.987-1.987" clip-rule="evenodd"></path></svg>'},462:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"><path fill="#fff" fill-rule="evenodd" d="M12 0H7v1h4v4h1V0M0 12h5v-1H1V7H0v5" clip-rule="evenodd"></path></svg>'},4651:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0" clip-rule="evenodd"></path></svg>'},3303:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.438.994c.213 0 .397.146.44.35q.227 1.084.316 1.852.562.242 1.048.599l1.728-.676a.455.455 0 0 1 .556.188l1.42 2.394a.43.43 0 0 1-.091.547 22 22 0 0 1-1.49 1.194q.03.27.03.552 0 .32-.038.63l1.465 1.12a.43.43 0 0 1 .111.563l-1.42 2.394a.454.454 0 0 1-.53.197 23 23 0 0 1-1.807-.66q-.49.35-1.055.586l-.263 1.794a.446.446 0 0 1-.445.376H6.574a.446.446 0 0 1-.44-.35 21 21 0 0 1-.317-1.853 5.3 5.3 0 0 1-1.047-.598l-1.728.675a.455.455 0 0 1-.556-.187l-1.42-2.395a.43.43 0 0 1 .091-.546q.85-.735 1.49-1.194a5.167 5.167 0 0 1 .008-1.183L1.19 6.243a.43.43 0 0 1-.112-.562l1.42-2.395a.455.455 0 0 1 .531-.196q1.078.35 1.807.66c.324-.233.679-.43 1.056-.587l.262-1.794A.446.446 0 0 1 6.6.994zm-.365 1H6.985l-.28 1.866-.467.19q-.353.144-.672.34l-.207.136-.42.293-.476-.197q-.492-.205-1.169-.433l-.221-.074-1.045 1.719L3.59 6.999l-.06.479a4 4 0 0 0-.021.816l.014.144.058.492-.419.294q-.433.304-.979.746l-.177.145 1.043 1.72 1.845-.703.406.29q.307.219.645.384l.228.103.474.199.059.49q.06.507.19 1.177l.043.219h2.088l.282-1.867.466-.19q.354-.144.672-.34l.207-.136.419-.293.476.198q.495.204 1.17.433l.22.072 1.044-1.718-1.56-1.165.06-.479a4 4 0 0 0 .02-.815l-.013-.144-.06-.492.42-.295a18 18 0 0 0 .98-.746l.176-.146-1.043-1.72-1.844.705-.406-.29a4.5 4.5 0 0 0-.646-.385l-.228-.103-.474-.199-.058-.49q-.049-.405-.14-.916zm-1.067 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clip-rule="evenodd"></path></svg>'},63:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 2H2v2h12zM2 1H1v4h14V1H2m2 7H2v6h2zM2 7H1v8h4V7H2m6 1h6v6H8zM7 7h8v8H7V7" clip-rule="evenodd"></path></svg>'},3529:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4m0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3m0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},5549:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M6 5H2v6h4zM1 4v8h6V4zM14 5h-4v6h4zM9 4v8h6V4z" clip-rule="evenodd"></path></svg>'},7528:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2h12v4H2zM1 7V1h14v6zm1 3h12v4H2zm-1 5V9h14v6z" clip-rule="evenodd"></path></svg>'},8736:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M14 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zM2 1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M20 8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zM8 7h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" clip-rule="evenodd"></path></svg>'},4221:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2v12h3V2zm4 0v12h4V2zm8 12h-3V2h3zM1 14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" clip-rule="evenodd"></path></svg>'},5108:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1 1.5a.5.5 0 0 1 1 0v13a.5.5 0 0 1-1 0zM14 9H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M4 12v-2h10v2zm0-9h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m0 1v2h6V4z" clip-rule="evenodd"></path></svg>'},4005:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="m1 7.5 3-2V7h2v1H4v1.5zm14 0-3 2V8h-2V7h2V5.5zM7 7h2v1H7z" clip-rule="evenodd"></path></svg>'},1291:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14.5 15a.5.5 0 0 0 0-1H7.46l2.348-2.138a.508.508 0 1 0-.684-.752L8 12.133V2h6.5a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1H7v10.207l-1.124-1.024a.508.508 0 1 0-.684.752L7.46 14H.5a.5.5 0 0 0 0 1zM14 6.5a.5.5 0 0 1-.5.5H10V6h3.5a.5.5 0 0 1 .5.5m-13 0a.5.5 0 0 0 .5.5H5V6H1.5a.5.5 0 0 0-.5.5" clip-rule="evenodd"></path></svg>'},1855:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M.5 1a.5.5 0 0 0 0 1h7.04L5.192 4.138a.508.508 0 1 0 .684.752L7 3.867V14H.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1H8V3.793l1.124 1.024a.508.508 0 0 0 .684-.752L7.54 2h6.96a.5.5 0 0 0 0-1zM1 9.5a.5.5 0 0 1 .5-.5H5v1H1.5a.5.5 0 0 1-.5-.5m13 0a.5.5 0 0 0-.5-.5H10v1h3.5a.5.5 0 0 0 .5-.5" clip-rule="evenodd"></path></svg>'},8416:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1 3h14v1H1zM9 7h6v1H9zM5.036 6.146a.5.5 0 0 0-.708 0L1.146 9.328a.5.5 0 1 0 .708.708l2.328-2.329V14.5h1V7.707l2.328 2.329a.5.5 0 1 0 .708-.708z"></path></svg>'},655:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .54.54 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.54.54 0 0 1 0-.738" clip-rule="evenodd"></path></svg>'},5741:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1 3h14v1H1zM9 7h6v1H9zM4.328 14.354a.5.5 0 0 0 .708 0l3.182-3.182a.5.5 0 1 0-.708-.708l-2.328 2.329V6h-1v6.793l-2.328-2.328a.5.5 0 1 0-.708.707z"></path></svg>'},7568:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},5477:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2.707v1.45a.5.5 0 0 1-1 0V1h3.05a.5.5 0 1 1 0 1H2.707L8 7.29 13.293 2H11.95a.5.5 0 1 1 0-1H15v3.156a.5.5 0 0 1-1 0v-1.45L8.707 7.999l5.29 5.289v-1.55a.5.5 0 1 1 1 0V15H11.84a.5.5 0 1 1 0-1h1.456L8 8.705 2.704 14h1.453a.5.5 0 1 1 0 1H1v-3.263a.5.5 0 0 1 1 0v1.553l5.293-5.292z" clip-rule="evenodd"></path></svg>'},2717:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.54 1H14v13H7.46l2.348-2.138a.508.508 0 1 0-.684-.752L8 12.134V9H7v3.206l-1.124-1.022a.508.508 0 1 0-.685.751L7.46 14H1V1zm0 0L5.192 3.138a.508.508 0 1 0 .684.752L7 2.867V6h1V2.794l1.124 1.023a.508.508 0 0 0 .684-.752zM0 1a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1z" clip-rule="evenodd"></path></svg>'},4072:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 1v13H1V7.46l2.138 2.348a.508.508 0 0 0 .752-.684L2.867 8H6V7H2.794l1.023-1.124a.508.508 0 0 0-.752-.685L1 7.46V1zm0-1a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm-1.867 7L11.11 5.876a.508.508 0 1 1 .752-.684L14 7.54l-2.065 2.268a.508.508 0 0 1-.751-.684L12.206 8H9V7z" clip-rule="evenodd"></path></svg>'},2943:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},3377:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.124 12.11 8 13.133V2h6.5a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1H7v11.207l-1.124-1.024a.508.508 0 1 0-.684.752L7.46 15l2.348-2.138a.508.508 0 1 0-.684-.752M13.5 7a.5.5 0 0 0 0-1H10v1zm-12 0a.5.5 0 0 1 0-1H5v1z" clip-rule="evenodd"></path></svg>'},1769:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M5.876 3.89 7 2.867V14H.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1H8V2.794l1.124 1.023a.508.508 0 0 0 .684-.752L7.54 1 5.192 3.138a.508.508 0 0 0 .684.752M1.5 9a.5.5 0 0 0 0 1H5V9zm12 0a.5.5 0 0 1 0 1H10V9z" clip-rule="evenodd"></path></svg>'},8081:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.5 14a.5.5 0 0 0 0-1h-6l3.953-3.459a.5.5 0 0 0-.658-.752L8 11.234V1.5a.5.5 0 0 0-1 0v9.734L4.206 8.789a.5.5 0 0 0-.659.752L7.5 13h-6a.5.5 0 0 0 0 1z" clip-rule="evenodd"></path></svg>'},8710:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 0a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0V.5a.5.5 0 0 0-.5-.5M0 7.5c0 .291.231.527.516.527h3.508L2.527 9.6a.535.535 0 0 0 0 .746.51.51 0 0 0 .73 0L6 7.5 3.257 4.654a.51.51 0 0 0-.73 0 .535.535 0 0 0 0 .746l1.497 1.573H.516A.52.52 0 0 0 0 7.5m15 0a.52.52 0 0 1-.516.527h-3.508L12.473 9.6a.535.535 0 0 1 0 .746.51.51 0 0 1-.73 0L9 7.5l2.743-2.846a.51.51 0 0 1 .73 0 .535.535 0 0 1 0 .746l-1.497 1.573h3.508c.285 0 .516.236.516.527" clip-rule="evenodd"></path></svg>'},2491:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1 13.5a.5.5 0 0 0 1 0v-6l3.459 3.953a.5.5 0 0 0 .752-.658L3.766 8H13.5a.5.5 0 0 0 0-1H3.766l2.445-2.794a.5.5 0 1 0-.752-.659L2 7.5v-6a.5.5 0 0 0-1 0z" clip-rule="evenodd"></path></svg>'},9566:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 1.5a.5.5 0 0 0-1 0v6L9.541 3.547a.5.5 0 1 0-.752.658L11.234 7H1.5a.5.5 0 0 0 0 1h9.734l-2.445 2.794a.5.5 0 1 0 .752.659L13 7.5v6a.5.5 0 0 0 1 0z" clip-rule="evenodd"></path></svg>'},3593:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1.5 1a.5.5 0 0 0 0 1h6L3.547 5.459a.5.5 0 1 0 .658.752L7 3.766V13.5a.5.5 0 0 0 1 0V3.766l2.794 2.445a.5.5 0 1 0 .659-.752L7.5 2h6a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},8056:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15 7.5a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 .5-.5M7.5 0a.52.52 0 0 0-.527.516v3.508L5.4 2.527a.535.535 0 0 0-.746 0 .51.51 0 0 0 0 .73L7.5 6l2.846-2.743a.51.51 0 0 0 0-.73.535.535 0 0 0-.746 0L8.027 4.024V.516A.52.52 0 0 0 7.5 0m0 15a.52.52 0 0 1-.527-.516v-3.508L5.4 12.473a.535.535 0 0 1-.746 0 .51.51 0 0 1 0-.73L7.5 9l2.846 2.743a.51.51 0 0 1 0 .73.535.535 0 0 1-.746 0l-1.573-1.497v3.508A.52.52 0 0 1 7.5 15" clip-rule="evenodd"></path></svg>'},9238:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.146 13.847a.486.486 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 8.26zm0-5a.485.485 0 0 0 .708 0 .54.54 0 0 0 0-.738l-5.5-5.956a.485.485 0 0 0-.708 0l-5.5 5.956a.54.54 0 0 0 0 .738.485.485 0 0 0 .708 0L8 3.26z" clip-rule="evenodd"></path></svg>'},4064:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .54.54 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.54.54 0 0 1 0 .738" clip-rule="evenodd"></path></svg>'},2838:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},5447:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14.994 2.243A1.375 1.375 0 0 0 13.625 1h-7.25l-.132.006A1.375 1.375 0 0 0 5 2.375v1.75h.917v-1.75l.007-.082a.46.46 0 0 1 .451-.376h7.25l.082.007a.46.46 0 0 1 .376.451v7.25l-.007.082a.46.46 0 0 1-.451.376h-1.738V11h1.738l.132-.006A1.375 1.375 0 0 0 15 9.625v-7.25zM9.625 5h-7.25C1.615 5 1 5.616 1 6.375v7.25C1 14.385 1.616 15 2.375 15h7.25c.76 0 1.375-.616 1.375-1.375v-7.25C11 5.615 10.384 5 9.625 5M2.4 6h7.2c.22 0 .4.201.4.45v7.1c0 .248-.18.45-.4.45H2.4c-.22 0-.4-.201-.4-.45v-7.1c0-.249.18-.45.4-.45M4 8h4v1H4zm4 3H4v1h4z" clip-rule="evenodd"></path></svg>'},9869:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1.5 11a.5.5 0 0 0 .5-.5V2h8.5a.5.5 0 0 0 0-1H2a1 1 0 0 0-1 1v8.5a.5.5 0 0 0 .5.5M5 4h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m0 1v9h9V5z" clip-rule="evenodd"></path></svg>'},2046:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.227 1.312c-.404-.404-1.045-.417-1.432-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431zm-8.114 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402z" clip-rule="evenodd"></path><path fill="#000" d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z"></path></svg>'},4548:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 0a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 1H4a3 3 0 0 0-2.995 2.824L1 4v8a3 3 0 0 0 2.824 2.995L4 15h8a3 3 0 0 0 2.995-2.824L15 12V4a3 3 0 0 0-2.824-2.995zM8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clip-rule="evenodd"></path></svg>'},5196:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 15a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm0-1V2h4v12zm5-7V2h4v5zm0 7V8h4v6z" clip-rule="evenodd"></path><path fill="#000" d="M14 14.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0z"></path></svg>'},1625:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2h3v9H2zm0-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm4 5V2h8v4zm0 5V7h8v4zm-4.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},8547:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 0A3.5 3.5 0 0 1 11 3.5V6h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V3.5A3.5 3.5 0 0 1 7.5 0M5 6h5V3.5a2.5 2.5 0 0 0-2.336-2.495L7.5 1a2.5 2.5 0 0 0-2.495 2.336L5 3.5zm6 1H3v8h9V7zm-3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},1993:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 1.914 6.475 2.94a.5.5 0 1 1-.707-.707L8 0l2.157 2.157a.5.5 0 0 1-.707.707l-.95-.95V7.5h5.586l-1.1-1.1a.5.5 0 1 1 .706-.708L16 8l-2.232 2.232a.5.5 0 1 1-.707-.707L14.086 8.5H8.5v5.586l1.025-1.025a.5.5 0 1 1 .707.707L8 16l-2.308-2.308a.5.5 0 1 1 .707-.707l1.101 1.1V8.5H1.914l.95.95a.5.5 0 0 1-.707.707L0 8l2.232-2.232a.5.5 0 1 1 .707.707L1.914 7.5H7.5z" clip-rule="evenodd"></path></svg>'},3387:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 8.002a.5.5 0 0 1-1 0V1H1v12.003h3.5a.5.5 0 1 1 0 1H1a1 1 0 0 1-1-1V1A1 1 0 0 1 .044.706.498.498 0 0 1 .5 0H11a1 1 0 0 1 1 1zm2.218 1.486a.5.5 0 0 0-.708 0l-5.657 5.658a.5.5 0 0 0 .708.707l5.657-5.658a.5.5 0 0 0 0-.707M11 9.928c.376 0 .794.041 1.23.141l-.871.871a5 5 0 0 0-.359-.012c-1 0-2.731.297-3.83 2 .313.486.677.857 1.062 1.14l-.676.676A6.1 6.1 0 0 1 6 12.928c1.333-2.334 3.5-3 5-3m0 5c-.219 0-.472-.014-.746-.054l-.824.825a5.6 5.6 0 0 0 1.57.23c1.5 0 3.667-.667 5-3a6 6 0 0 0-1.804-1.998l-.684.684c.478.299.936.721 1.319 1.313-1.1 1.704-2.831 2-3.831 2M2.5 3.502A.5.5 0 0 1 3 3h6a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},3662:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5"></path></svg>'},9044:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M6 6.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0zM9.5 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M11 0H5a1 1 0 0 0-1 1v2H.5a.5.5 0 0 0 0 1h1.6l.81 11.1a1 1 0 0 0 .995.9h8.19a1 1 0 0 0 .995-.9L13.9 4h1.6a.5.5 0 0 0 0-1H12V1a1 1 0 0 0-1-1m0 3V1H5v2zm1.895 1h-9.79l.8 11h8.19z" clip-rule="evenodd"></path></svg>'},119:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 0a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 1H4a3 3 0 0 0-2.995 2.824L1 4v8a3 3 0 0 0 2.824 2.995L4 15h8a3 3 0 0 0 2.995-2.824L15 12V4a3 3 0 0 0-2.824-2.995zM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8" clip-rule="evenodd"></path></svg>'},1334:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 3.5a3.5 3.5 0 1 0-7 0V6H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2V3.5l.005-.164A2.5 2.5 0 0 1 12.5 1l.164.005A2.5 2.5 0 0 1 15 3.5a.5.5 0 0 0 1 0M9 7H3v8h9V7H9m-1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},914:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="m8 0 8 6-8 6-8-6zM1.887 6 8 10.82 14.113 6 8 1.18zM0 9.81.563 9 8 14.775 15.437 9l.563.81L8 16z" clip-rule="evenodd"></path></svg>'},5508:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},9572:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl9ub25lPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0MS4wMDAwMDAsIC0xOTIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE0MC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzZBNkE2QSIgcG9pbnRzPSI0NiA0OCAzMS44OTMxNTM5IDU1LjQxNjQwNzkgMzQuNTg3MzIxOCAzOS43MDgyMDM5IDIzLjE3NDY0MzYgMjguNTgzNTkyMSAzOC45NDY1NzcgMjYuMjkxNzk2MSA0NiAxMiA1My4wNTM0MjMgMjYuMjkxNzk2MSA2OC44MjUzNTY0IDI4LjU4MzU5MjEgNTcuNDEyNjc4MiAzOS43MDgyMDM5IDYwLjEwNjg0NjEgNTUuNDE2NDA3OSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},6663:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2ZhZGU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2MS4wMDAwMDAsIC0xNTAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCA5OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgb3BhY2l0eT0iMC4xMDAwMDAwMDEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM1MjUyNTIiIHg9IjI4IiB5PSIyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsPSIjMzYzNjM2IiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDgiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY0LDAgTDY0LDQ4IEwwLDQ4IEwwLDAgTDY0LDAgWiBNNjMsMSBMMSwxIEwxLDQ3IEw2Myw0NyBMNjMsMSBaIiBmaWxsPSIjNkE2QTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},8686:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX3B1c2g8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTI3MC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyMTguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTIsMCBMOTIsNzIgTDAsNzIgTDAsMCBMOTIsMCBaIE05MSwzNyBMMSwzNyBMMSw3MSBMOTEsNzEgTDkxLDM3IFogTTQ2LDQ0IEw1Niw1NCBMNTAuMTY2NjY2Nyw1NCBMNTAuMTY2NjY2Nyw2NCBMNDEuODMzMzMzMyw2NCBMNDEuODMzMzMzMyw1NCBMMzYsNTQgTDQ2LDQ0IFoiIGZpbGw9IiM2QTZBNkEiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},9244:t=>{"use strict";t.exports=o},6245:t=>{"use strict";t.exports=l},4108:t=>{"use strict";t.exports=i},6884:t=>{"use strict";t.exports=d},1496:t=>{"use strict";t.exports=s},1888:t=>{"use strict";t.exports=a},4321:t=>{"use strict";t.exports=n},9298:t=>{"use strict";t.exports=r},5562:t=>{"use strict";t.exports=u},4337:t=>{"use strict";t.exports=c}},e={};function p(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,p),n.exports}p.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return p.d(e,{a:e}),e},p.d=(t,e)=>{for(var o in e)p.o(e,o)&&!p.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},p.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),p.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var h={};return(()=>{"use strict";p.r(h),p.d(h,{AccordionLayoutBuilder:()=>va,AccordionLayoutItemSetting:()=>Nl,CanvasPane:()=>Ji,ColumnLayoutBuilder:()=>hn,ColumnLayoutItemSetting:()=>cl,ColumnLayoutService:()=>_d,CommonLayoutItemSetting:()=>ja,CommonTransformSetting:()=>za,DEFAULT_ROW_LAYOUT_SETTING:()=>gn,DropArea:()=>Ye,FixedLayoutItemSetting:()=>Va,FixedLayoutService:()=>Fd,FlexRowLayoutBuilder:()=>Ta,FlexRowLayoutItemSetting:()=>vl,FlowLayoutItemSetting:()=>nl,FlowLayoutService:()=>Wd,FlowLayoutSetting:()=>Ol,GLOBAL_DRAGGING_CLASS_NAME:()=>$t,GLOBAL_H5_DRAGGING_CLASS_NAME:()=>Et,GLOBAL_RESIZING_CLASS_NAME:()=>Gt,GridLayoutBuilder:()=>Ws,GridLayoutItemSetting:()=>Al,GridLayoutService:()=>Ed,GridLayoutSetting:()=>Wl,LIMITED_BOUNDARY_CLASS_NAME:()=>Ot,LayoutBuilder:()=>nn,LayoutEntry:()=>lo,LayoutItemInBuilder:()=>zo,LayoutItemToolbar:()=>Te,PageRenderer:()=>eu,RowLayoutBuilder:()=>zn,RowLayoutItemSetting:()=>Sl,RowLayoutService:()=>kd,SectionRendererInBuilder:()=>wo,ShapeL:()=>le,ShapeRect:()=>ce,Toolbar:()=>Kt,WidgetPlaceholder:()=>oo,WidgetRendererInBuilder:()=>io,addItemToLayout:()=>V,bindDragHandler:()=>Ft,bindResizeHandler:()=>_t,canDeleteInExpressMode:()=>Le,getLabelOfGridTab:()=>$n,getRootLayoutId:()=>D,sectionMenuItems:()=>Nt,splitGridCell:()=>Vn,withRnd:()=>au});var t=p(9244),e=p(4108),o=p(4321);const i=t.lodash.assign({},{gridSize:1}),n=t.lodash.assign({},{order:0},{lockParent:!1,lockLayout:!1,autoProps:{}});var s=p(1496),a=p(4651),l=p.n(a),r=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const d=e=>{const o=window.SVG,{className:i}=e,n=r(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:l()},n)):t.React.createElement("svg",Object.assign({className:s},n))};var u=p(1888);const c=t.React.createContext({}),g={fallbackPlacements:["top","right"]},m={fallbackAxisSideDirection:"start"};class y extends t.React.PureComponent{constructor(){super(...arguments),this.select=t=>{if(null==t||t.stopPropagation(),this.props.onClick){const{parentRef:e}=this.contextProps;this.props.onClick({layoutId:this.contextProps.layoutId,layoutItem:this.contextProps.layoutItem,clientRect:e&&e.getBoundingClientRect()},t),this.contextProps.onItemClick(this.props.uid)}},this.handleDoubleClick=t=>{t.stopPropagation()},this.handleMouseEnter=t=>{t.stopPropagation(),this.props.onMouseEnter&&this.props.onMouseEnter({layoutId:this.contextProps.layoutId,layoutItem:this.contextProps.layoutItem,clientRect:null},t)},this.handleMouseLeave=t=>{t.stopPropagation(),this.props.onMouseLeave&&this.props.onMouseLeave({layoutId:this.contextProps.layoutId,layoutItem:this.contextProps.layoutItem,clientRect:null},t)}}componentDidMount(){const{widgetId:o,extName:i,openWhenAdded:n,isNewAdded:s}=this.props;o&&i&&(n&&s&&this.select(),window.jimuConfig.isInBuilder?(0,t.getAppStore)().dispatch(t.appActions.widgetRuntimeInfoChange(o,"shouldExpandContextTool",!1)):e.builderAppSync.publishWidgetRuntimeInfoChangeToApp(o,"shouldExpandContextTool",!1))}componentDidUpdate(){const t=this.getValue(this.props.visible,this.contextProps),e=this.getValue(this.props.disabled,this.contextProps);t&&!e||this.contextProps.onItemUnSelected(this.props.uid)}componentWillUnmount(){this.contextProps.onItemUnSelected(this.props.uid)}getValue(t,e){return"function"==typeof t?t(e):t}getStyle(){const{theme:e}=this.contextProps;return t.css`
      cursor: pointer;
      width: 32px;
      min-height: 32px;
      display: flex;
      justify-content: flex-start;
      user-select: none;
      background: ${e.ref.palette.neutral[400]};

      &:hover {
        background: ${e.ref.palette.neutral[500]};
      }
      &.selected {
        background: ${e.sys.color.primary.main};
      }

      &.disabled,
      &.no-action {
        cursor: default;
        &:hover {
          background: ${e.ref.palette.neutral[400]};
        }
      }
      &.disabled {
        .jimu-btn {
          cursor: default;
          pointer-events: auto;
        }
        .jimu-btn svg, .toolbar-label {
          color: ${e.ref.palette.neutral[800]} !important;
        }
      }

      &.msg {
        width: auto;
        font-size: 12px;
        color: ${e.ref.palette.black};
        letter-spacing: 0.33px;
        text-align: center;
        padding: 0 8px;
      }

      .toolbar-group & {
        justify-content: flex-start;
      }

      .popper {
        border: 1px solid ${e.ref.palette.neutral[900]};
      }

      .toolbar-label {
        color: ${e.ref.palette.black};
      }
    `}separatorStyle(){const{theme:e}=this.contextProps;return this.props.isInGroup?t.css`
        width: 100%;
        height: 1px;
        background-color: ${e.ref.palette.neutral[600]};
        align-self: center;
      `:t.css`
      div.toolbar-item + &,
      div.toolbar-group + & {
        display: block;
      }
      display: none;
      width: 1px;
      height: 30px;
      border-left: 1px solid ${e.ref.palette.neutral[600]};
      align-self: center;
    `}tooltipStyle(){const{theme:e}=this.contextProps;return t.css`
      border: none;

      .tooltip {
        color: ${e.ref.palette.black};
        background-color: ${e.ref.palette.neutral[600]};
        border-color: ${e.ref.palette.neutral[400]};
      }
    `}createButton({textContent:e,iconContent:i,tooltip:n,isDisabled:s,noAction:a,isChecked:l,rotate:r,iconSize:d,autoFlipIcon:u,ref:c}){const p=e?"":n,h=s?{title:p}:{},m=(0,t.jsx)(o.Button,Object.assign({"aria-label":e||n,ref:c,className:(0,t.classNames)("px-0 w-100",{"justify-content-start":e}),type:"tertiary",disableHoverEffect:!0,size:"sm",icon:i&&!e,role:"menuitem",onClick:s||a?null:this.select,disabled:s,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onDoubleClick:this.handleDoubleClick,"data-extname":this.props.extName},h),i&&(0,t.jsx)(o.Icon,{className:(0,t.classNames)("tool-item-icon",{checked:l}),icon:i,rotate:r,size:d,color:this.contextProps.theme.ref.palette.black,autoFlip:u}),e&&(0,t.jsx)("span",{className:"toolbar-label text-nowrap"},e));return s?m:(0,t.jsx)(o.Tooltip,{placement:"bottom",title:p,flipOptions:g,css:this.tooltipStyle()},m)}render(){const{icon:e,autoFlipIcon:i,label:n,size:s,checked:a,disabled:l,visible:r,rotate:d,settingPanel:p,title:h,uid:g,widgetId:y,className:f,separator:v}=this.props;if(v)return(0,t.jsx)(c.Consumer,null,(e=>(this.contextProps=e,(0,t.jsx)("div",{"data-testid":"toolbarSeparator",css:this.separatorStyle()}))));const I=null==this.props.onClick,x=s||16,b=p;return(0,t.jsx)(c.Consumer,null,(s=>{var c;if(this.contextProps=s,y&&(null===(c=s.layoutItem)||void 0===c?void 0:c.widgetId)!==y)return null;let v="";"function"==typeof h?v=h(s):"string"==typeof h&&(v=h);const w=p&&s.activeItem===g&&s.toggleOn,S=w||this.getValue(a,s),C=this.getValue(l,s),R=this.getValue(r,s),T=this.getValue(n,s),M=this.getValue(e,s);return(0,t.jsx)("div",{className:(0,t.classNames)("toolbar-item",f,{selected:S,disabled:C,msg:T,"no-action":I,"d-none":null!=r&&!R}),css:this.getStyle(),"data-toolstate":this.props.toolState},!b&&this.createButton({textContent:T,iconContent:M,tooltip:v,isDisabled:C,noAction:I,isChecked:S,rotate:d,iconSize:x,autoFlipIcon:i,ref:null}),b&&(0,t.jsx)(u.ThemeSwitchComponent,{useTheme2:window.jimuConfig.isInBuilder},this.createButton({textContent:T,iconContent:M,tooltip:v,isDisabled:C,noAction:I,isChecked:S,rotate:d,iconSize:x,autoFlipIcon:i,ref:t=>{this.reference=t}}),(0,t.jsx)(o.Popper,{placement:"bottom-start",reference:this.reference,flipOptions:m,open:w,disablePortal:!0,autoUpdate:!0},(0,t.jsx)("div",{css:t.css`
                        display: flex;
                        pointer-events: all;
                        border-radius: 2px;
                        box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.2);
                      `,className:"d-flex"},w&&(0,t.jsx)(b,{layoutId:s.layoutId,layoutItemId:s.layoutItem.id,widgetId:s.layoutItem.widgetId})))))}))}}const f=(0,t.createSelector)(((t,e)=>{var o,i,n;const{widgetId:s,extName:a}=e;if(s&&a){const e=t.widgetsRuntimeInfo[s];return null!==(n=null===(i=null===(o=null==e?void 0:e.layoutItemTools)||void 0===o?void 0:o[a])||void 0===i?void 0:i.version)&&void 0!==n?n:0}return 0}),((t,e)=>{var o,i;const{widgetId:n,extName:s}=e;if(n&&s){const e=t.widgetsRuntimeInfo;return null!==(i=null===(o=null==e?void 0:e[n])||void 0===o?void 0:o.shouldExpandContextTool)&&void 0!==i&&i}return!1}),((t,e)=>({toolState:t,isNewAdded:e}))),v=t.ReactRedux.connect(f)(y),I=()=>null;class x extends t.React.PureComponent{constructor(e){super(e),this.togglePopToolItems=t=>{t&&t.stopPropagation(),this.contextProps.onItemClick(this.props.uid)},this.onItemClick=(e,o)=>{const{parentRef:i}=this.contextProps;e.onClick(Object.assign(Object.assign({},o),{clientRect:i.getBoundingClientRect()})),t.lodash.defer((()=>{(0,t.focusElementInKeyboardMode)(this.dropdownBtnRef.current)}))},this.handleDoubleClick=t=>{t.stopPropagation()},this.dropdownBtnRef=t.React.createRef()}getBaseStyle(){const{theme:e}=this.contextProps;return t.css`
      cursor: pointer;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: ${e.ref.palette.neutral[400]};

      &:hover {
        background-color: ${e.ref.palette.neutral[500]} !important;
      }
    `}getValue(t,e){return"function"==typeof t?t(e):t}createToolItem(e,o,i){return e.onClick||e.separator?(0,t.jsx)(v,Object.assign({key:i,uid:`${this.props.uid}_${i+1}`,isInGroup:!0},e,{onClick:()=>{this.onItemClick(e,o)}})):null}getGroupMenu(e,i){const{theme:n}=this.contextProps;return e?(0,t.jsx)(o.Icon,{rotate:e.rotate,icon:e.icon,size:e.size||16,color:n.ref.palette.black}):i[0].icon?(0,t.jsx)(o.Icon,{icon:i[0].icon,size:i[0].size||16,color:n.ref.palette.black}):(0,t.jsx)(v,Object.assign({uid:`${this.props.uid}_0`,onClick:I},i[0]))}tooltipStyle(){const{theme:e}=this.contextProps;return t.css`
      border: none;

      .tooltip {
        color: ${e.ref.palette.black};
        background-color: ${e.ref.palette.neutral[600]};
        border-color: ${e.ref.palette.neutral[400]};
      }
    `}render(){const{tools:e,uid:i}=this.props;return e&&0!==e.length?(0,t.jsx)(c.Consumer,null,(n=>{var s;this.contextProps=n;const{visible:a,caret:l=!0,title:r}=e[0],d=this.getValue(a,n);if(void 0!==a&&!d)return null;const c=e.filter((t=>{const{visible:e}=t,o=this.getValue(e,n);return void 0===e||o}));if(0===c.length)return null;if(1===c.length)return(0,t.jsx)(v,Object.assign({uid:`${i}_0`},c[0]));let p;c.some((t=>{const{checked:e}=t;return!!this.getValue(e,n)&&(p=t,!0)}));let h="";return"function"==typeof r?h=r(n):"string"==typeof r&&(h=r),(0,t.jsx)("div",{className:"toolbar-group",css:this.getBaseStyle()},(0,t.jsx)(o.Dropdown,{direction:"down",size:"sm",className:l?"px-1":"",isOpen:null!==(s=n.toggleOn)&&void 0!==s&&s&&n.activeItem===i,toggle:this.togglePopToolItems},(0,t.jsx)(o.Tooltip,{placement:"bottom",title:h,css:this.tooltipStyle()},(0,t.jsx)(o.DropdownButton,{icon:!0,arrow:l,type:"tertiary",disableHoverEffect:!0,size:"sm",ref:this.dropdownBtnRef,css:t.css`
                      .caret-icon {
                        color: ${n.theme.ref.palette.neutral[1e3]};
                        margin-left: 0.25rem;
                      }
                    `,onDoubleClick:this.handleDoubleClick},this.getGroupMenu(p,c))),(0,t.jsx)(o.DropdownMenu,{className:`p-0 ${window.jimuConfig.isInBuilder?u.Theme2GlobalStyleClassName:""}`,css:t.css`min-width: 5rem;`},c.map(((t,e)=>this.createToolItem(t,n,e))))))})):null}}var b;!function(t){t[t.BringForward=0]="BringForward",t[t.SendBackward=1]="SendBackward",t[t.BringToFront=2]="BringToFront",t[t.SendToBack=3]="SendToBack"}(b||(b={}));const w=3;var S,C;function R(t,e){var o,i,n;if(!e)return null;const{layoutId:s,layoutItemId:a}=e;return null===(n=null===(i=null===(o=t.layouts)||void 0===o?void 0:o[s])||void 0===i?void 0:i.content)||void 0===n?void 0:n[a]}function T(e,o,i){var n,s,a,l,r,d,u,c,p,h;const{layoutId:g}=e,m=o.layouts[g];switch(null===(n=null==m?void 0:m.parent)||void 0===n?void 0:n.type){case t.LayoutParentType.View:{const t=o.views[m.parent.id],e=o.sections[t.parent];return 1===(null===(a=null===(s=null==e?void 0:e.parent)||void 0===s?void 0:s[i])||void 0===a?void 0:a.length)?e.parent[i][0]:(null===(r=null===(l=null==e?void 0:e.parent)||void 0===l?void 0:l[i])||void 0===r?void 0:r.length)>1?T(e.parent[i][0],o,i):null}case t.LayoutParentType.Widget:{const t=o.widgets[m.parent.id];return 1===(null===(u=null===(d=null==t?void 0:t.parent)||void 0===d?void 0:d[i])||void 0===u?void 0:u.length)?t.parent[i][0]:(null===(p=null===(c=null==t?void 0:t.parent)||void 0===c?void 0:c[i])||void 0===p?void 0:p.length)>1?T(t.parent[i][0],o,i):null}case t.LayoutParentType.Screen:{const t=o.screens[m.parent.id];return null===(h=o.screenGroups[t.parent].parent)||void 0===h?void 0:h[i]}default:return null}}function M(t,e,o,i,n=!1){let s=P(t,e,o,i,n),a=i;if(s||(s=P(t,e,o,t.mainSizeMode,n),a=t.mainSizeMode),s)return A(t,s.layoutId,a)}function A(e,o,i){var n;let s=e.layouts[o];for(;(null==s?void 0:s.parent)&&[t.LayoutParentType.Screen,t.LayoutParentType.View,t.LayoutParentType.Widget].includes(s.parent.type);){const t=T({layoutId:o},e,i);o=null==t?void 0:t.layoutId,s=e.layouts[o]}switch(null===(n=null==s?void 0:s.parent)||void 0===n?void 0:n.type){case t.LayoutParentType.Dialog:return{type:t.ContainerType.Dialog,id:s.parent.id};case t.LayoutParentType.Page:return{type:t.ContainerType.Page,id:s.parent.id};case t.LayoutParentType.Header:return{type:t.ContainerType.Header,id:"header"};case t.LayoutParentType.Footer:return{type:t.ContainerType.Footer,id:"footer"};default:return null}}function L(t,e,o){return t?t[e]||t[o]:null}function P(e,o,i,n,s=!0){var a,l,r,d,u;switch(i){case t.LayoutItemType.ScreenGroup:{const t=null===(a=e.screenGroups[o].parent)||void 0===a?void 0:a[n],i=R(e,t);return s||!(null==i?void 0:i.isPending)?t:null}case t.LayoutItemType.Section:case t.LayoutItemType.Widget:{let a;if(i===t.LayoutItemType.Widget&&(a=e.widgets[o]),i===t.LayoutItemType.Section&&(a=e.sections[o]),1===(null===(r=null===(l=null==a?void 0:a.parent)||void 0===l?void 0:l[n])||void 0===r?void 0:r.length)){const t=a.parent[n][0],o=R(e,t);return s||!(null==o?void 0:o.isPending)?t:null}if((null===(u=null===(d=null==a?void 0:a.parent)||void 0===d?void 0:d[n])||void 0===u?void 0:u.length)>1){const o=a.parent[n][0],i=e.layouts[o.layoutId];if(null==i?void 0:i.parent)return P(e,i.parent.id,t.LayoutItemType.Widget,n,s)}}default:return null}}!function(t){t.Auto="auto",t[t.Normal=0]="Normal",t[t.BoundaryDropArea=10]="BoundaryDropArea",t[t.DragMoveTip=20]="DragMoveTip",t[t.HandlerTools=30]="HandlerTools",t[t.DraggingItem=40]="DraggingItem"}(S||(S={})),function(t){t.Auto="AUTO",t.Stretch="STRETCH",t.Custom="CUSTOM"}(C||(C={}));function j(t){return/^-?\d*(\.\d+)?%$/.test(t)}function z(t,e){return null==(null==t?void 0:t[e])?null:"string"==typeof t[e]?t[e]:function(t){const e=parseFloat(t);return!isNaN(e)&&isFinite(e)}(t[e])?`${Math.round(parseFloat(t[e]))}px`:null}function N(t,e){return parseFloat(`${t}`)*e/100}(0,t.createSelector)([t=>t.appConfig.mainSizeMode,t=>t.browserSizeMode,(e,o)=>{var i,n,s,a,l;let r;if(e.browserSizeMode===e.appConfig.mainSizeMode)r=!0;else{let a;(null===(i=o.layouts)||void 0===i?void 0:i[e.browserSizeMode])?a=e.browserSizeMode:(null===(n=o.layouts)||void 0===n?void 0:n[e.appConfig.mainSizeMode])&&(a=e.appConfig.mainSizeMode);const l=null===(s=o.layouts)||void 0===s?void 0:s[a],d=A(e.appConfig,l,a);if((null==d?void 0:d.type)===t.ContainerType.Header)r=null!=e.appConfig.header.layout[e.browserSizeMode];else if((null==d?void 0:d.type)===t.ContainerType.Footer)r=null!=e.appConfig.footer.layout[e.browserSizeMode];else if((null==d?void 0:d.type)===t.ContainerType.Dialog){r=null!=e.appConfig.dialogs[d.id].layout[e.browserSizeMode]}else if((null==d?void 0:d.type)===t.ContainerType.Page){r=null!=e.appConfig.pages[d.id].layout[e.browserSizeMode]}}if(r&&(null===(a=o.layouts)||void 0===a?void 0:a[e.browserSizeMode])){const t=o.layouts[e.browserSizeMode];return e.appConfig.layouts[t]}const d=null===(l=o.layouts)||void 0===l?void 0:l[e.appConfig.mainSizeMode];return e.appConfig.layouts[d]}],((t,e,o)=>({mainSizeMode:t,browserSizeMode:e,layout:o}))),(0,t.createSelector)([(t,e)=>{var o,i,n;const{layoutId:s,layoutItemId:a}=e;return null===(n=null===(i=null===(o=t.appConfig.layouts)||void 0===o?void 0:o[s])||void 0===i?void 0:i.content)||void 0===n?void 0:n[a]},(e,o)=>{var i,n,s,a,l,r;const{layoutId:d,layoutItemId:u}=o,c=null===(s=null===(n=null===(i=e.appConfig.layouts)||void 0===i?void 0:i[d])||void 0===n?void 0:n.content)||void 0===s?void 0:s[u];if((null==c?void 0:c.type)===t.LayoutItemType.Widget&&c.widgetId){const t=e.appConfig.widgets[c.widgetId];return null!==(r=null===(l=null===(a=null==t?void 0:t.manifest)||void 0===a?void 0:a.properties)||void 0===l?void 0:l.watchViewportVisibility)&&void 0!==r&&r}return!1},t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.selection},t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.animationPreview},t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.hoverPreview},(t,e)=>e.layoutId],((t,e,o,i,n,s)=>{var a;if(!t)return{layoutItem:null,selected:!1};let l=!1;const r=null!==(a=t.isPending)&&void 0!==a&&a;o&&(l=o.layoutId===s&&o.layoutItemId===t.id);const d={selected:l,watchViewportVisibility:e,layoutItem:r?null:t,autoScroll:l?o.autoScroll:void 0};if(l&&(null==i?void 0:i.layoutInfo)){const{layoutId:e,layoutItemId:o}=i.layoutInfo;d.animationPreview=e===s&&o===t.id,d.playMode=d.animationPreview?i.playMode:null,d.previewId=d.animationPreview?i.id:null}else if(l&&(null==n?void 0:n.layoutInfo)){const{layoutId:e,layoutItemId:o}=n.layoutInfo;d.hoverPreview=e===s&&o===t.id,d.previewId=d.hoverPreview?n.id:null}return d}));const k=(0,t.createSelector)([(e,o)=>{var i,n,s;const{layoutId:a,layoutItemId:l}=o,r=null===(s=null===(n=null===(i=e.appConfig.layouts)||void 0===i?void 0:i[a])||void 0===n?void 0:n.content)||void 0===s?void 0:s[l];if((null==r?void 0:r.type)===t.LayoutItemType.Widget&&r.widgetId)return e.appConfig.widgets[r.widgetId]},(e,o)=>{var i,n,s,a;const{layoutId:l,layoutItemId:r}=o,d=null===(s=null===(n=null===(i=e.appConfig.layouts)||void 0===i?void 0:i[l])||void 0===n?void 0:n.content)||void 0===s?void 0:s[r];if((null==d?void 0:d.type)===t.LayoutItemType.Widget&&!d.widgetId)return null===(a=d.setting)||void 0===a?void 0:a.placeholderStyle},(e,o)=>{var i,n,s;const{layoutId:a,layoutItemId:l}=o,r=null===(s=null===(n=null===(i=e.appConfig.layouts)||void 0===i?void 0:i[a])||void 0===n?void 0:n.content)||void 0===s?void 0:s[l];if((null==r?void 0:r.type)===t.LayoutItemType.Widget&&r.widgetId)return e.widgetsRuntimeInfo[r.widgetId]},(e,o)=>{var i,n,s;const{layoutId:a,layoutItemId:l}=o,r=null===(s=null===(n=null===(i=e.appConfig.layouts)||void 0===i?void 0:i[a])||void 0===n?void 0:n.content)||void 0===s?void 0:s[l];if((null==r?void 0:r.type)===t.LayoutItemType.Widget&&!r.widgetId)return e.widgetsState[r.widgetId]},(e,o)=>{var i,n;const{layoutId:s}=o,a=null===(i=e.appConfig.layouts)||void 0===i?void 0:i[s];if((null===(n=a.parent)||void 0===n?void 0:n.type)===t.LayoutParentType.Widget){const t=a.parent.id,o=e.appConfig.widgets[t];return/widgets\/common\/controller\/?/.test(o.uri)}return!1}],((e,o,i,n,s)=>{var a,l,r,d,u,c,p,h,g,m,y,f,v,I,x,b;const w=null===(l=null===(a=null==e?void 0:e.manifest)||void 0===a?void 0:a.properties)||void 0===l?void 0:l.supportInlineEditing;return{hasEmbeddedLayout:(null===(d=null===(r=null==e?void 0:e.manifest)||void 0===r?void 0:r.properties)||void 0===d?void 0:d.hasEmbeddedLayout)&&Object.keys(null!==(u=e.layouts)&&void 0!==u?u:{}).length>0,supportInlineEditing:w,supportRepeat:null===(p=null===(c=null==e?void 0:e.manifest)||void 0===c?void 0:c.properties)||void 0===p?void 0:p.supportRepeat,isClassLoaded:null!==(h=null==i?void 0:i.isClassLoaded)&&void 0!==h&&h,isInlineEditing:w&&(null==i?void 0:i.isInlineEditing),isInController:s,useDragHandler:null!==(y=null===(m=null===(g=null==e?void 0:e.manifest)||void 0===g?void 0:g.properties)||void 0===m?void 0:m.useDragHandler)&&void 0!==y&&y,widgetStyle:null!=e?e.style:o,canCrossLayoutBoundary:null===(v=null===(f=null==e?void 0:e.manifest)||void 0===f?void 0:f.properties)||void 0===v?void 0:v.canCrossLayoutBoundary,hasExtension:(null===(x=null===(I=null==e?void 0:e.manifest)||void 0===I?void 0:I.extensions)||void 0===x?void 0:x.length)>0,widgetJson:e,widgetId:null==e?void 0:e.id,isFunctionalWidget:(null===(b=null==e?void 0:e.manifest)||void 0===b?void 0:b.widgetType)!==t.WidgetType.Layout,widgetState:n}}));function $(){var e,o;return null!==(o=null===(e=(0,t.getAppStore)().getState().appContext)||void 0===e?void 0:e.isRTL)&&void 0!==o&&o}function E(){var e,o;return(null===(e=null===window||void 0===window?void 0:window.jimuConfig)||void 0===e?void 0:e.isBuilder)?null===(o=(0,t.getAppStore)().getState().appStateInBuilder)||void 0===o?void 0:o.browserSizeMode:(0,t.getAppStore)().getState().browserSizeMode}function O(t,e,o){const i=null==o?void 0:o[t],n="width"===t?"left":"top",s="width"===t?"right":"bottom";if(!i)return null!=e[t]?C.Custom:null!=e[n]&&null!=e[s]?C.Stretch:C.Auto;if(!0===i)return null!=e[n]&&null!=e[s]?C.Stretch:C.Auto;switch(i){case C.Auto:return C.Auto;case C.Stretch:return C.Stretch;default:return C.Custom}}var B=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}r((i=i.apply(t,e||[])).next())}))};function D(){if(s.utils.getCurrentDialogId())return s.utils.getCurrentDialogRootLayoutId();switch(s.utils.getActivePagePart()){case t.PagePart.Header:return s.utils.getHeaderRootLayoutId();case t.PagePart.Footer:return s.utils.getFooterRootLayoutId();default:return s.utils.getCurrentPageRootLayoutId()}}function F(t,o){if(window.jimuConfig.isBuilder){(0,e.getAppConfigAction)(t).exec(),e.builderAppSync.publishChangeSelectionToApp(o)}else s.utils.changeLayout(t,o)}function H(o,i){var n,a;const l=(0,e.getAppConfigAction)(),{layoutId:r,layoutItemId:d}=o;if(!(null===(a=null===(n=l.appConfig.layouts[r])||void 0===n?void 0:n.content)||void 0===a?void 0:a[d]))return;const u=l.appConfig.layouts[i].type;if(u===t.LayoutType.FlowLayout)!function(o,i){var n,s,a;const l=(0,e.getAppConfigAction)(),{layoutId:r,layoutItemId:d,width:u,height:c}=o,p=l.duplicateLayoutItemToOtherLayout({layoutId:r,layoutItemId:d},i),h={layoutId:i,layoutItemId:p},g=null!==(s=null===(n=(0,t.getAppStore)().getState().appRuntimeInfo)||void 0===n?void 0:n.zoomScale)&&void 0!==s?s:1;l.adjustOrderOfItem(h,-1);const m=function(t,e,o){if(!window.jimuConfig.isInBuilder)return{insertIndex:-1,colSpan:0};const i=window.parent.document.querySelector('iframe[name="_appWindow"]'),n=document.querySelectorAll(`div.flow-layout[data-layoutid="${t}"] > div.trail-container > div.builder-layout-item`);let s=-1,a=2;if(i&&n){const t=i.getBoundingClientRect();n.forEach(((e,o)=>{if(-1===s){const i=e.getBoundingClientRect();(i.top+t.top>=0||i.top+i.height+t.top>=0)&&(s=o+1)}})),a=Math.round(12*e*o/t.width)}return{colSpan:a,insertIndex:s}}(i,u,g);-1===m.insertIndex&&(m.insertIndex=(null===(a=l.appConfig.layouts[i].order)||void 0===a?void 0:a.length)||0);const y=l.appConfig.layouts[r].type;y===t.LayoutType.FlowLayout?F(l.appConfig,h):G({layoutInfo:h},{targetLayoutId:i,containerRect:{left:0,top:0,width:u,height:c},itemRect:{left:0,top:0,width:u,height:c},width:m.colSpan,insertIndex:m.insertIndex,appConfig:l.appConfig}).catch((t=>{console.error(t)}))}(o,i);else if(u===t.LayoutType.FixedLayout)!function(o,i,n=null){var a,l,r,d;const u=(0,e.getAppConfigAction)(),{layoutId:c,layoutItemId:p,width:h,height:g}=o,m=null===(l=null===(a=u.appConfig.layouts[c])||void 0===a?void 0:a.content)||void 0===l?void 0:l[p],y=m.bbox,f=u.duplicateLayoutItemToOtherLayout({layoutId:c,layoutItemId:p},i),v={layoutId:i,layoutItemId:f},I=null!==(d=null===(r=(0,t.getAppStore)().getState().appRuntimeInfo)||void 0===r?void 0:r.zoomScale)&&void 0!==d?d:1;n||(n=function(t){if(!window.jimuConfig.isInBuilder)return;const e=window.parent.document.querySelector('div[data-layoutid="right-sidebar-left-layout"]'),o=window.parent.document.querySelector('iframe[name="_appWindow"]');let i,n,s,a,l;if(e&&o){const r=e.getBoundingClientRect(),d=o.getBoundingClientRect();if(n=d.left,s=d.top,a=d.width,l=d.height,t){if(i=(o.contentDocument||o.contentWindow.document).querySelector(`div.layout[data-layoutid="${t}"]`),i){const t=i.getBoundingClientRect();n+=t.left,s+=t.top,a=t.width,l=t.height}}return{left:n>=r.left?0:r.left-n,top:s>=r.top?0:r.top-s,width:a,height:l}}return null}(i));if(n){const t=n.width/I,e=n.height/I;u.editLayoutItemProperty(v,"bbox",s.utils.replaceBoundingBox(y,{left:0,top:0,right:0,bottom:0,width:Math.round(h),height:Math.round(g)},{width:t,height:e}))}u.editLayoutItemProperty(v,"setting.vCenter",!0).editLayoutItemProperty(v,"setting.hCenter",!0);const x=u.appConfig.layouts[v.layoutId].content[v.layoutItemId].bbox;u.editLayoutItemProperty(v,"bbox",x.set("left","50%").set("top","50%")),u.adjustOrderOfItem(v,-1),s.utils.changeLayout(u.appConfig,v)}(o,i);else if(u===t.LayoutType.GridLayout){const[n,a]=function(o,i,n){var a,l;let r=(0,e.getAppConfigAction)(o);const{layoutId:d,layoutItemId:u}=i,c=o.layouts[n],p=(null===(a=c.content)||void 0===a?void 0:a[null===(l=c.setting)||void 0===l?void 0:l.rootItem])?c.setting.rootItem:null,h=r.duplicateLayoutItemToOtherLayout({layoutId:d,layoutItemId:u},n),g={layoutId:n,layoutItemId:h};if(!p)return r.editLayoutItemProperty(g,"gridType",t.GridItemType.Plain).editLayoutItemProperty(g,"bbox.width",100).editLayoutProperty(n,"setting.rootItem",h),[r.appConfig,g];const m={layoutId:n,layoutItemId:p},y=s.searchUtils.findLayoutItem(r.appConfig,m),f=y.gridType,v=e.LayoutServiceProvider.getService(r.appConfig,n),I=v.createBlankItem(r.appConfig,n);o=I[0];const x=I[1],b={layoutId:n,layoutItemId:x};return r=(0,e.getAppConfigAction)(o),r.editLayoutItemProperty(b,"gridType",f!==t.GridItemType.Row?t.GridItemType.Row:t.GridItemType.Column).editLayoutItemProperty(b,"children",[p,h]).editLayoutItemProperty(b,"bbox.width",100).editLayoutItemProperty(m,"bbox.width",50).editLayoutItemProperty(m,"parent",x).editLayoutItemProperty(g,"bbox.width",50).editLayoutItemProperty(g,"parent",x).editLayoutItemProperty(g,"gridType",t.GridItemType.Plain).editLayoutProperty(n,"setting.rootItem",x),[r.appConfig,g]}(l.appConfig,o,i);s.utils.changeLayout(n,a)}else console.error(`unknown layout type: ${u}`)}function V(o,i,n){return B(this,void 0,void 0,(function*(){const a=i.layoutInfo;return i.id?yield function(t,o,i){return B(this,void 0,void 0,(function*(){var n;const a=(0,e.getAppConfigAction)(t);let l;const r=s.utils.getCurrentSizeMode();l=o.isFromCurrentSizeMode?r:s.searchUtils.getBrowserSizeModeByLayoutId(t,o.layoutInfo.layoutId);const d=s.searchUtils.findLayoutItem(a.appConfig,o.layoutInfo),u=a.moveLayoutItem(o.layoutInfo,i,l,r);return(null===(n=d.setting)||void 0===n?void 0:n.lockParent)&&a.editLayoutItemProperty(u,"setting.lockParent",!0),yield Promise.resolve({layoutInfo:u,updatedAppConfig:a.appConfig})}))}(o,i,n):a&&a.layoutId&&a.layoutItemId?function(t,o,i){const n=(0,e.getAppConfigAction)(t),a=s.utils.getCurrentSizeMode(),l=n.moveLayoutItem(o.layoutInfo,i,a,a),r=s.searchUtils.getWidgetIdThatUseTheLayoutId(t,i);r&&W(t.widgets[r])&&n.editLayoutItemProperty(l,"setting.lockParent",!0);return{layoutInfo:l,updatedAppConfig:n.appConfig}}(o,i,n):i.itemType===t.LayoutItemType.Section?function(t,o){const i=(0,e.getAppConfigAction)(t),n=i.addNewSectionToLayout(o),s={layoutId:o,layoutItemId:n};return{layoutInfo:s,updatedAppConfig:i.appConfig}}(o,n):i.uri||i.itemId?yield function(t,o,i){return B(this,void 0,void 0,(function*(){const n=(0,e.getAppConfigAction)(t),a=yield n.addNewWidgetToLayout(i,{uri:o.uri,itemId:o.itemId}),l={layoutId:i,layoutItemId:a},r=s.searchUtils.getWidgetIdThatUseTheLayoutId(t,i);return r&&W(t.widgets[r])&&n.editLayoutItemProperty(l,"setting.lockParent",!0),{layoutInfo:l,updatedAppConfig:n.appConfig}}))}(o,i,n):function(t,o){const i=(0,e.getAppConfigAction)(t),n=i.addPlaceholderToLayout(o),a={layoutId:o,layoutItemId:n},l=s.searchUtils.getWidgetIdThatUseTheLayoutId(t,o);l&&W(t.widgets[l])&&i.editLayoutItemProperty(a,"setting.lockParent",!0);return{layoutInfo:a,updatedAppConfig:i.appConfig}}(o,n)}))}function W(e){var o,i,n,s,a,l,r;const d=null===(o=null==e?void 0:e.manifest)||void 0===o?void 0:o.widgetType,u=null!==(s=null===(n=null===(i=null==e?void 0:e.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.hasEmbeddedLayout)&&void 0!==s&&s,c=null!==(r=null===(l=null===(a=null==e?void 0:e.manifest)||void 0===a?void 0:a.properties)||void 0===l?void 0:l.lockChildren)&&void 0!==r&&r;return d!==t.WidgetType.Layout&&u&&c}function G(o,i){return B(this,void 0,void 0,(function*(){const{targetLayoutId:n,containerRect:a,itemRect:l,width:r,insertIndex:d,appConfig:u}=i;let c=(0,e.getAppConfigAction)(u);const p={name:"row",label:"row",uri:"widgets/layout/row/",icon:null,itemType:t.LayoutItemType.Widget,manifest:{widgetType:t.WidgetType.Layout,properties:{}}},h=yield V(c.appConfig,p,n),{updatedAppConfig:g,layoutInfo:m}=h,y=s.utils.replaceBoundingBox(null,l,a);c=(0,e.getAppConfigAction)(g),c.editLayoutItemProperty(m,"bbox",y).adjustOrderOfItem(m,d);const f=s.searchUtils.findLayoutItem(g,h.layoutInfo),v=g.widgets[f.widgetId],I=Object.keys(v.layouts)[0],x=v.layouts[I],b=s.searchUtils.findLayoutId(x,(0,t.getAppStore)().getState().browserSizeMode,g.mainSizeMode),w=t.i18n.getIntl().formatMessage({id:"block"}),S=t.appConfigUtils.getUniqueLabel(g,"widget",w);c.editWidgetProperty(v.id,"label",S).editLayoutItemProperty(m,"setting.heightMode","fixed").editLayoutItemProperty(m,"bbox.height",l.height+20).editLayoutProperty(b,"parent",{id:v.id,type:t.LayoutParentType.Widget});const C=yield V(c.appConfig,o,b),{layoutInfo:R,updatedAppConfig:T}=C;c=(0,e.getAppConfigAction)(T),c.editLayoutItemProperty(R,"setting.heightMode","fit").editLayoutItemProperty(R,"bbox.left",0).editLayoutItemProperty(R,"bbox.width",r).editLayoutItemProperty(R,"bbox.height",Math.round(Math.min(l.height,a.height))).adjustOrderOfItem(R,0),window.jimuConfig.isBuilder?((0,e.getAppConfigAction)(c.appConfig).exec(),e.builderAppSync.publishChangeSelectionToApp(R)):s.utils.changeLayout(c.appConfig,R)}))}class U extends t.React.PureComponent{constructor(t){super(t),this.topLeft=this.updateFloatingArea.bind(this,1),this.topCenter=this.updateFloatingArea.bind(this,2),this.topRight=this.updateFloatingArea.bind(this,3),this.middleLeft=this.updateFloatingArea.bind(this,4),this.middleCenter=this.updateFloatingArea.bind(this,5),this.middleRight=this.updateFloatingArea.bind(this,6),this.bottomLeft=this.updateFloatingArea.bind(this,7),this.bottomCenter=this.updateFloatingArea.bind(this,8),this.bottomRight=this.updateFloatingArea.bind(this,9)}updateFloatingArea(t){const{layoutId:o,layoutItemId:i}=this.props;!function(t,o,i){B(this,void 0,void 0,(function*(){const n=s.utils.getCurrentPageRootLayoutId();let a=(0,e.getAppConfigAction)();const l=yield V(a.appConfig,{layoutInfo:t},n);a=(0,e.getAppConfigAction)(l.updatedAppConfig),a.editLayoutItemProperty(l.layoutInfo,"bbox",{top:0,left:0,right:0,width:`${o.width}px`,height:`${o.height}px`}).editLayoutItemProperty(l.layoutInfo,"setting.isFloating",!0).editLayoutItemProperty(l.layoutInfo,"setting.lockParent",!0).editLayoutItemProperty(l.layoutInfo,"setting.floatingArea",i).adjustOrderOfItem(l.layoutInfo,null),window.jimuConfig.isBuilder?((0,e.getAppConfigAction)(a.appConfig).exec(),e.builderAppSync.publishChangeSelectionToApp(l.layoutInfo)):s.utils.changeLayout(a.appConfig,l.layoutInfo)}))}({layoutId:o,layoutItemId:i},this.getSizeOfItem(),t)}getSizeOfItem(){const{layoutId:e,layoutItemId:o}=this.props;let i;if(window.jimuConfig.isBuilder){const e=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);i=(null==e?void 0:e.contentDocument)||(null==e?void 0:e.contentWindow.document)}else i=document;const n=i.querySelector(`div.exb-rnd[data-layoutid="${e}"][data-layoutitemid="${o}"]`);return n?n.getBoundingClientRect():null}getStyle(){let e;e=window.jimuConfig.isBuilder?(0,u.getTheme)():(0,u.getTheme2)();const o=e.ref.palette.neutral[500];return t.css`
      background-color: ${e.ref.palette.neutral[400]};
      position: relative;
      padding: 4px;

      .content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 0;
        grid-column-gap: 0;
        border: 1px solid ${o};

        & > button {
          cursor: pointer;
          height: 50px;
          width: 50px;
          position: relative;
          border: none;
          background-color: transparent;
          border-radius: 0;

          &:after {
            content: '';
            position: absolute;
            left: 1px;
            top: 1px;
            right: 1px;
            bottom: 1px;
          }

          &:hover {
            &:after {
              outline: 1px solid ${e.sys.color.primary.dark};
              background: ${e.sys.color.primary.light};
            }
          }
        }

        & > button:nth-of-type(3n+1) {
          border-right: 1px solid ${o};
        }
        & > button:nth-of-type(3n) {
          border-left: 1px solid ${o};
        }
        & > button:nth-of-type(1), & > button:nth-of-type(2), & > button:nth-of-type(3) {
          border-bottom: 1px solid ${o};
        }
        & > button:nth-of-type(7), & > button:nth-of-type(8), & > button:nth-of-type(9) {
          border-top: 1px solid ${o};
        }

        .selected:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: ${e.sys.color.primary.light};
          border: 1px solid ${e.sys.color.primary.main};
        }
      }
    `}render(){const{area:e}=this.props;return(0,t.jsx)("div",{className:"floating-area-chooser d-flex",css:this.getStyle()},(0,t.jsx)("div",{className:"content w-100"},(0,t.jsx)(o.Button,{className:(0,t.classNames)("top-left",{selected:1===e}),onClick:this.topLeft}),(0,t.jsx)(o.Button,{className:(0,t.classNames)("top-center",{selected:2===e}),onClick:this.topCenter}),(0,t.jsx)(o.Button,{className:(0,t.classNames)("top-right",{selected:3===e}),onClick:this.topRight}),(0,t.jsx)(o.Button,{className:(0,t.classNames)("middle-left",{selected:4===e}),onClick:this.middleLeft}),(0,t.jsx)(o.Button,{className:(0,t.classNames)("middle-center",{selected:5===e}),onClick:this.middleCenter}),(0,t.jsx)(o.Button,{className:(0,t.classNames)("middle-right",{selected:6===e}),onClick:this.middleRight}),(0,t.jsx)(o.Button,{className:(0,t.classNames)("bottom-left",{selected:7===e}),onClick:this.bottomLeft}),(0,t.jsx)(o.Button,{className:(0,t.classNames)("bottom-center",{selected:8===e}),onClick:this.bottomCenter}),(0,t.jsx)(o.Button,{className:(0,t.classNames)("bottom-right",{selected:9===e}),onClick:this.bottomRight})))}}U.defaultProps={area:0};var _=p(9044),Y=p.n(_),X=p(3387),Z=p.n(X),q=p(1993),K=p.n(q),J=p(9869),Q=p.n(J),tt=p(4548),et=p.n(tt),ot=p(119),it=p.n(ot),nt=p(3303),st=p.n(nt);function at(){var e;let o=(0,t.getAppStore)().getState();return window.jimuConfig.isBuilder&&(o=o.appStateInBuilder),null===(e=o.appRuntimeInfo)||void 0===e?void 0:e.appMode}function lt(){var e,o,i;let n=(0,t.getAppStore)().getState();return window.jimuConfig.isBuilder&&(n=n.appStateInBuilder),null!==(i=null===(o=null===(e=n.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}function rt(e){var o,i,n;const s=(0,t.getAppStore)().getState().appConfig;if(e.type===t.LayoutItemType.Widget){const t=s.widgets[e.widgetId];return null!==(o=null==t?void 0:t.label)&&void 0!==o?o:""}if(e.type===t.LayoutItemType.Section){const t=s.sections[e.sectionId];return null!==(i=null==t?void 0:t.label)&&void 0!==i?i:""}if(e.type===t.LayoutItemType.ScreenGroup){const t=s.screenGroups[e.screenGroupId];return null!==(n=null==t?void 0:t.label)&&void 0!==n?n:""}return""}function dt(){return at()===t.AppMode.Design}function ut(){return at()===t.AppMode.Express}function ct(e){var o;let i=(0,t.getAppStore)().getState();if(window.jimuConfig.isBuilder&&(i=i.appStateInBuilder),e.type===t.LayoutItemType.Widget&&e.widgetId){const n=i.appConfig.widgets[e.widgetId];if(n)return(null===(o=n.manifest)||void 0===o?void 0:o.widgetType)!==t.WidgetType.Layout}return!1}const pt={icon:Y(),title:t=>t.formatMessage("delete"),visible:e=>{const o=at();return(o===t.AppMode.Design||o===t.AppMode.Express)&&(!lt()||ct(e.layoutItem))},onClick:t=>{const{layoutItem:o,layoutId:i}=t,n={layoutId:i,layoutItemId:o.id};e.appBuilderSync.publishConfirmDeleteToApp(n)}},ht={icon:Z(),title:t=>t.formatMessage("pendingTip"),visible:e=>at()===t.AppMode.Design&&!lt()&&function(t){const{layoutItem:e}=t;return null!=e.widgetId||null!=e.sectionId||null!=e.screenGroupId}(e),onClick:t=>{const{layoutId:o,layoutItem:i}=t;!function(t){const o=(0,e.getAppConfigAction)();o.setLayoutItemToPending(t,!0),F(o.appConfig,null)}({layoutId:o,layoutItemId:i.id})}},gt={icon:st(),title:t=>t.formatMessage("setting"),onClick:e=>{const{layoutId:o,layoutItem:i}=e;(0,t.getAppStore)().dispatch(t.appActions.selectionChanged({layoutId:o,layoutItemId:i.id}))}},mt={icon:K(),title:t=>{const{layoutItem:e}=t;return t.formatMessage("dragToMove",{label:rt(e)})},visible:()=>at()===t.AppMode.Design&&!lt()},yt={icon:Q(),title:t=>t.formatMessage("duplicate"),visible:e=>{var o,i,n;if(lt()||!dt())return!1;const{layoutId:s}=e,a=null===(o=(0,t.getAppStore)().getState().appConfig)||void 0===o?void 0:o.layouts[s];return"ROW"!==(null==a?void 0:a.type)||(null!==(n=null===(i=a.order)||void 0===i?void 0:i.length)&&void 0!==n?n:0)<12},onClick:t=>{const{layoutId:o,layoutItem:i}=t;!function(t){const{layoutId:o}=t,i=(0,e.getAppConfigAction)(),n={layoutId:o,layoutItemId:i.duplicateLayoutItemInSameLayout(t)};F(i.appConfig,n)}({layoutId:o,layoutItemId:i.id})}},ft={icon:et(),title:t=>t.formatMessage("floating"),visible:o=>{if(lt()||!dt())return!1;const{layoutItem:i,layoutId:n}=o;return function(o){var i,n,a,l,r;const{layoutId:d,layoutItemId:u}=o,c=(0,e.getAppConfigAction)().appConfig,p=null===(a=null===(n=null===(i=null==c?void 0:c.layouts)||void 0===i?void 0:i[d])||void 0===n?void 0:n.content)||void 0===a?void 0:a[u];if(!p||(null===(l=p.setting)||void 0===l?void 0:l.isFloating))return!1;const h=s.utils.getActivePagePart();if(h!==t.PagePart.Header&&h!==t.PagePart.Footer){const e=s.utils.getCurrentPageRootLayoutId();return(null===(r=c.layouts[e])||void 0===r?void 0:r.type)===t.LayoutType.FlowLayout&&d!==e}return!1}({layoutId:n,layoutItemId:i.id})},settingPanel:U,onClick:()=>null},vt={icon:it(),title:t=>t.formatMessage("sinking"),visible:t=>{var e,o;if(lt()||!dt())return!1;const{layoutItem:i}=t;return null!==(o=null===(e=i.setting)||void 0===e?void 0:e.isFloating)&&void 0!==o&&o},onClick:o=>{const{layoutId:i,layoutItem:n,clientRect:a}=o;!function(o,i){var n;const{layoutId:a,layoutItemId:l}=o,r=(0,e.getAppConfigAction)();let d,u,c=-1,p=2;if(window.jimuConfig.isBuilder){const e=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);u=(null==e?void 0:e.contentDocument)||(null==e?void 0:e.contentWindow.document)}else u=document;if(null==i){const t=u.querySelector(`div.exb-rnd[data-layoutid="${a}"][data-layoutitemid="${l}"]`);i=t?t.getBoundingClientRect():{width:100,height:100}}const h=u.querySelectorAll(`div.flow-layout[data-layoutid="${a}"] > div.trail-container > div.builder-layout-item:not(.floating)`);if((null==h?void 0:h.length)>1)for(let t=0;t<h.length;t++){const e=h[t];if(-1===c&&e.getAttribute("data-layoutitemid")!==l){const o=e.getBoundingClientRect();if(p=Math.round(12*i.width/o.width),s.utils.contains(o,i)){c=t,d=o;break}if(s.utils.intersects(o,i)){c=t+1,d=o;break}}}else{const e=t.utils.findViewportSize(s.utils.getAppConfig(),s.utils.getCurrentSizeMode());d={left:0,top:0,width:e.width,height:e.height},p=Math.round(12*i.width/e.width)}-1===c&&(c=(null===(n=r.appConfig.layouts[a].order)||void 0===n?void 0:n.length)||0),G({layoutInfo:o},{targetLayoutId:a,containerRect:d||i,itemRect:i,width:p,insertIndex:c})}({layoutId:i,layoutItemId:n.id},a)}};var It=p(7568),xt=p.n(It),bt=p(2943),wt=p.n(bt),St=p(3662),Ct=p.n(St),Rt=p(5447),Tt=p.n(Rt),Mt=p(2838),At=p.n(Mt);function Lt(e){let o=(0,t.getAppStore)().getState();return window.jimuConfig.isBuilder&&(o=o.appStateInBuilder),s.searchUtils.getSectionInfo(o,e.sectionId)}function Pt(e){var o;const{navInfo:i,views:n,activeView:s}=null!=e?e:{};if(!i)return null==s?void 0:s.id;if(!i.useProgress)return i.currentViewId;const a=(null===(o=i.visibleViews)||void 0===o?void 0:o.length)>0?i.visibleViews:n,{currentIndex:l}=(0,t.getIndexFromProgress)(i.progress,a.length);return a[l]}const jt={icon:Tt(),title:t=>t.formatMessage("duplicateView"),visible:()=>at()===t.AppMode.Design&&!lt(),onClick:o=>{const{layoutItem:i}=o;let n=Pt(Lt(i));if(!n){n=Lt(i).views[0]}const s=(0,e.getAppConfigAction)(),a=s.duplicateView(n,i.sectionId,!0);s.exec(),t.jimuHistory.changeView(i.sectionId,a.id)}},zt={icon:At(),title:t=>t.formatMessage("deleteView"),visible:e=>{if(at()!==t.AppMode.Design||lt())return!1;const{layoutItem:o}=e,i=Lt(o);if(!i)return!1;const{views:n}=i;return n&&n.length>1},onClick:o=>{const{layoutItem:i}=o,n=Lt(i),{views:s}=n,a=Pt(n);if(s.length>1){const n=s.indexOf(a);let l;l=n>0?s[n-1]:s[1],(0,e.getAppConfigAction)().removeView(a,i.sectionId).exec(),t.jimuHistory.changeView(o.layoutItem.sectionId,l)}}},Nt=[{icon:xt(),autoFlipIcon:!0,size:10,title:t=>t.formatMessage("previousView"),onClick:e=>{const{layoutItem:o}=e,i=Lt(o),{views:n}=i,s=Pt(i),a=n.indexOf(s);a>0&&t.jimuHistory.changeView(o.sectionId,n[a-1])},disabled:t=>{const{layoutItem:e}=t,o=Lt(e);if(!o)return!0;const{views:i}=o,n=Pt(o);return i.indexOf(n)<=0}},{label:t=>{const{layoutItem:e}=t,o=Lt(e);if(!o)return"";const{views:i}=o,n=Pt(o);return`${Math.max(0,i.indexOf(n))+1} / ${i.length}`}},{icon:wt(),autoFlipIcon:!0,size:10,title:t=>t.formatMessage("nextView"),onClick:e=>{const{layoutItem:o}=e,i=Lt(o),{views:n}=i,s=Pt(i),a=n.indexOf(s);a>=0&&a<n.length-1&&t.jimuHistory.changeView(o.sectionId,n[a+1])},disabled:t=>{const{layoutItem:e}=t,o=Lt(e);if(!o)return!0;const{views:i}=o,n=Pt(o),s=i.indexOf(n);return s<0||s>=i.length-1}},{icon:Ct(),title:t=>t.formatMessage("addView"),visible:()=>at()===t.AppMode.Design&&!lt(),onClick:o=>{const{layoutItem:i}=o,n=(0,e.getAppConfigAction)(),s=n.addView(i.sectionId);n.exec(),t.jimuHistory.changeView(i.sectionId,s)}},jt,zt,{separator:!0}],kt=[jt,zt],$t="interactjs-dragging",Et="exb-h5-dragging",Ot="limited-drag-boundary";let Bt=!1;function Dt(e){const o=(0,u.getTheme2)(),i=document.createElement("div");return i.setAttribute("id","interact_dragging_placeholder"),i.style.position="fixed",i.style.left=`${e.left}px`,i.style.top=`${e.top}px`,i.style.width=`${e.width}px`,i.style.height=`${e.height}px`,i.style.backgroundColor=t.polished.rgba(o.sys.color.primary.dark,.2),i.style.zIndex="1100",i}function Ft(t,e){if(!t)return null;let o,i,n,a,l,r;const{layoutItemId:d,useDragHandler:u,onDragStart:c,onDragging:p,onDragEnd:h,draggableAtRuntime:g=!1}=e;return t.styleCursor(!1).draggable({inertia:!1,autoScroll:!1,allowFrom:u?".tool-drag-handler":void 0,ignoreFrom:".no-drag-action",listeners:{start:t=>{if(lt()||!g&&!dt())return void t.interaction.stop();const e=t.target;if(e.classList.contains("no-drag-action"))return void(t.target._canDrag=!1);t.target._canDrag=!0,t.stopPropagation(),e.classList.add("is-dragging"),l=e.style.transform,n=t.rect;const r=t.target.parentNode;a=r.getBoundingClientRect(),document.body.classList.add($t);const u=getComputedStyle(e,null).getPropertyValue("transform"),[p,h]=function(t=""){let e="0",o="0";if(t.includes("matrix(")){const i=t.substring(t.indexOf("(")+1,t.indexOf(")")).split(",");return e=`${parseInt(i[4],10)}px`,o=`${parseInt(i[5],10)}px`,[e,o]}if(t.includes("translate(")){const i=t.match(/translate\((.*)\s*,\s*(.*)\)/);return 3===i.length&&(e=i[1],o=i[2]),[e,o]}if(t.includes("translateX(")){const o=t.match(/translateX\((.*)\)/);2===o.length&&(e=o[1])}if(t.includes("translateY(")){const e=t.match(/translateY\((.*)\)/);2===e.length&&(o=e[1])}return[e,o]}(u);o=s.utils.isPercentage(p)?s.utils.fromRatio(p,n.width):parseFloat(p),i=s.utils.isPercentage(h)?s.utils.fromRatio(h,n.height):parseFloat(h),e.setAttribute("data-translatex",o),e.setAttribute("data-translatey",i),c&&c(d)},move:t=>{t.stopPropagation(),o+=t.dx,i+=t.dy;const e=t.target;if(!e.parentElement.classList.contains("d-none")){const s=t.client.x,d=t.client.y;if(!(s>=0&&s<=a.width&&d>=0&&d<=a.height)&&!r)return r=Dt(n),r=document.body.appendChild(r),e.style.transform=l,void(e.style.visibility="hidden");const u=r||e;u.style.webkitTransform=u.style.transform=`translate(${Math.round(o)}px, ${Math.round(i)}px) translateZ(0)`,u.setAttribute("data-translatex",Math.round(o)),u.setAttribute("data-translatey",Math.round(i))}p&&p(d,o,i)},end:t=>{t.stopPropagation();const e=t.target;e.classList.remove("is-dragging"),document.body.classList.remove($t),r&&(document.body.removeChild(r),r=null),e.style.visibility=null,e.style.transform=l,h&&h(d,o,i)}}})}function Ht(t){Bt=t}function Vt(){return Bt}var Wt=p(6245);const Gt="interactjs-resizing";let Ut=!1;function _t(t,e){if(!t)return null;let o,i,n,a,l=null;const{layoutItemId:r,onResizeStart:d,onResizing:u,onResizeEnd:c,restrictEdges:p=!0}=e;return t.resizable({inertia:!1,edges:{top:".rnd-resize-top",left:s.utils.isRTL()?".rnd-resize-right":".rnd-resize-left",bottom:".rnd-resize-bottom",right:s.utils.isRTL()?".rnd-resize-left":".rnd-resize-right"},modifiers:[Wt.interact.modifiers.restrictEdges({outer:p?"parent":null}),Wt.interact.modifiers.restrictSize({min:{width:16,height:16}})],listeners:{start:t=>{t.stopPropagation(),o=0,i=0,n=0,a=0;const e=t.target.getBoundingClientRect();d&&d(r,e.width,e.height),document.body.classList.add(Gt)},move:t=>{t.stopPropagation();const e=t.deltaRect;o+=e.left,i+=e.top,n+=e.width,a+=e.height,l&&(cancelAnimationFrame(l),l=null),l=requestAnimationFrame((()=>{u&&u(r,o,i,n,a,t.shiftKey,t.speed),l=null}))},end:t=>{if(t.stopPropagation(),l&&(cancelAnimationFrame(l),l=null),c){const e=t.deltaRect;o+=e.left,i+=e.top,n+=e.width,a+=e.height,c(r,o,i,n,a,t.shiftKey)}document.body.classList.remove(Gt)}}})}function Yt(t){Ut=t}function Xt(){return Ut}class Zt extends t.React.PureComponent{constructor(){super(...arguments),this.state={activeItem:null},this.onItemClick=t=>{let e=this.state.toggleOn;e=t!==this.state.activeItem||!e,this.setState({activeItem:t,toggleOn:e})},this.onItemUnSelected=t=>{t===this.state.activeItem&&this.setState({activeItem:null,toggleOn:!1})}}getStyle(){const{theme:e}=this.props;return t.css`
      display: flex;
      pointer-events: all;
      border-radius: 2px;
      box-shadow: 0 2px 8px 1px rgba(0,0,0,0.20);
      height: 100%;
      margin: 5px 0;
      background: ${e.ref.palette.neutral[400]};

      .toolbar-item, .toolbar-item {
        .jimu-btn:focus, .jimu-btn:focus-visible {
          z-index: 1;
        }
      }

      .${$t} &,
      .${Gt} &,
      .${Et} & {
        display: none;
      }
    `}reOrganizeTools(){const{tools:e}=this.props;if(s.utils.getCurrentSizeMode()===t.BrowserSizeMode.Small){const t=e.filter((t=>{let e;e=Array.isArray(t)?t[0]:t;const{visible:o,separator:i=!1}=e,n="function"==typeof o?o(this.props):o;return!i&&(void 0===o||n)}));if(t.length>8){const t=e.slice(0,8),o=e.slice(8).map((t=>Object.assign(Object.assign({},t),{label:t.title}))),i=[{icon:l(),caret:!1},...o];return t.push(i),t}}return e}render(){const{tools:e,isLockLayout:o}=this.props;if(!e||0===e.length)return null;const i=this.reOrganizeTools(),{activeItem:n,toggleOn:s}=this.state;return(0,t.jsx)(c.Provider,{value:Object.assign(Object.assign({},this.props),{activeItem:n,toggleOn:s,onItemClick:this.onItemClick,onItemUnSelected:this.onItemUnSelected,isLockLayout:o})},(0,t.jsx)(u.ThemeSwitchComponent,{useTheme2:window.jimuConfig.isInBuilder},(0,t.jsx)("div",{css:this.getStyle(),className:"layout-item-toolbar"},i.map(((e,o)=>Array.isArray(e)?(0,t.jsx)(x,{uid:`${o}`,key:o,tools:e}):(0,t.jsx)(v,Object.assign({uid:`${o}`,key:o},e)))))))}}const qt=(0,t.createSelector)((t=>{var e,o,i;return null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}),((e,o)=>{const{layoutItem:i}=o;if(i.type===t.LayoutItemType.Section){const t=Lt(i);if(t)return Pt(t)}return""}),((e,o)=>{const{layoutItem:i}=o;if(i.type===t.LayoutItemType.Section){let t;return t=window.jimuConfig.isBuilder?e.appStateInBuilder.appConfig.sections[i.sectionId]:e.appConfig.sections[i.sectionId],t.views.length}return 0}),((t,e,o)=>({isLockLayout:t,activeViewId:e,numOfViews:o}))),Kt=t.ReactRedux.connect(qt)(Zt),Jt={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"New view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move {label}",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Hide in design view",showInDesignView:"Show in design view",unlockGridItem:"Unlock this widget to reorganize its internal widgets.",lockGridItem:"Lock this widget.",activeViewTip:"Section. Active view {viewLabel}."};class Qt extends t.React.PureComponent{constructor(){super(...arguments),this.formatMessage=(t,e)=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:Jt[t]},e):Jt[t]}getPositionStyle(){const{positionType:e}=this.props;return"left"===e?t.css`
        position: absolute;
        top: 0;
        left: 0;
      `:"center"===e?t.css`
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      `:t.css`
      position: absolute;
      top: 0;
      right: 0;
    `}getStyle(){const{size:e,builderTheme:o,rotate:i}=this.props;return t.css`
      body:not(.design-mode) & {
        display: none !important;
      }

      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      pointer-events: none;
      transform: ${i>0||i<0?`rotateZ(${i}deg)`:""} ;

      .content {
        ${this.getPositionStyle()};
        pointer-events: all;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 100ms;
        z-index: ${s.LayoutZIndex.HandlerTools};

        .menu-hint {
          background-color: ${o.ref.palette.neutral[400]};
          width: ${e}px;
          height: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          line-height: 10px;
        }

        .menu-content {
          display: none;
          height: ${e}px;
          transform: ${i>0||i<0?`rotateZ(${-i}deg)`:""} ;

          .tool-drag-handler {
            cursor: move;
          }

          .layout-item-toolbar {
            margin: 0;
          }
        }

        &:hover {
          /* height: ${e}px; */
          /* width: auto; */

          .menu-hint {
            display: none;
          }

          .menu-content {
            display: flex;
          }
        }
      }

    `}render(){const{builderTheme:e,menuItems:o,layoutId:i,layoutItem:n,className:s,onMouseEnter:a,onMouseLeave:l}=this.props;return(0,t.jsx)("div",{className:`widget-context-menu ${s}`,css:this.getStyle()},(0,t.jsx)("div",{ref:t=>{this.ref=t},className:"content"},(0,t.jsx)("div",{className:"menu-hint"},(0,t.jsx)(d,{color:e.ref.palette.black,size:"m"})),(0,t.jsx)("div",{className:"menu-content",onMouseLeave:l,onMouseEnter:a},(0,t.jsx)(Kt,{layoutId:i,layoutItem:n,theme:e,parentRef:this.ref,tools:o,formatMessage:this.formatMessage})),this.props.children))}}const te=(0,t.injectIntl)(Qt),ee=(t.React.createContext({viewOnly:!0}),t.React.createContext(!0),t.React.createContext(!0)),oe=(t.React.createContext({isInView:!1,isInCurrentView:!1}),t.React.createContext("")),ie=22.5;function ne(t,e){const o=function(t){if(isNaN(t))return 0;const e=t%360;return e<0?e+360:e}(t+e);return o>=337.5||o<ie||o>=157.5&&o<202.5?"ns-resize":o>=ie&&o<67.5||o>=202.5&&o<247.5?"nesw-resize":o>=67.5&&o<112.5||o>=247.5&&o<292.5?"ew-resize":o>=112.5&&o<157.5||o>=292.5&&o<337.5?"nwse-resize":void 0}const se=9,ae=t.css`
  width: ${se}px;
  height: ${se}px;
  background: transparent;
  position: absolute;
`;function le(e){const{pos:o}=e,i=t.React.useRef();return t.hooks.useEffectOnce((()=>{var t;const e=null!==(t=window.devicePixelRatio)&&void 0!==t?t:1;i.current.width=se*e,i.current.height=se*e;const n=i.current.getContext("2d");n&&(n.scale(e,e),n.strokeStyle="#444",n.fillStyle="#fff",n.lineWidth=2,s.utils.isRTL()?("tl"===o&&(n.translate(se,0),n.rotate(Math.PI/2)),"br"===o&&(n.translate(0,se),n.rotate(-Math.PI/2)),"bl"===o&&(n.translate(se,se),n.rotate(Math.PI))):("tr"===o&&(n.translate(se,0),n.rotate(Math.PI/2)),"br"===o&&(n.translate(se,se),n.rotate(Math.PI)),"bl"===o&&(n.translate(0,se),n.rotate(-Math.PI/2))),n.beginPath(),n.moveTo(1,1),n.lineTo(se-1,1),n.lineTo(se-1,se/3),n.lineTo(se/3,se/3),n.lineTo(se/3,se-1),n.lineTo(1,se-1),n.closePath(),n.stroke(),n.fill())})),(0,t.jsx)("canvas",{css:ae,ref:i})}const re=16,de=4,ue=t.css`
  background: transparent;
  position: absolute;
`;function ce(e){const{direction:o}=e,i=t.React.useRef();return t.hooks.useEffectOnce((()=>{var t;const e=null!==(t=window.devicePixelRatio)&&void 0!==t?t:1;"h"===o?(i.current.width=re*e,i.current.height=de*e):(i.current.width=de*e,i.current.height=re*e);const n=i.current.getContext("2d");n&&(n.scale(e,e),n.strokeStyle="#444",n.fillStyle="#fff",n.lineWidth=2,"h"===o?n.rect(1,1,re-2,de-2):n.rect(1,1,de-2,re-2),n.stroke(),n.fill())})),(0,t.jsx)("canvas",{css:ue,ref:i})}const pe=16,he=10,ge=e=>t.css`
  top: 0;
  left: 0;
  position: absolute;
  /* cursor: nwse-resize; */
  cursor: ${ne(e,135)};
  .jimu-rtl & {
    /* cursor: nesw-resize; */
    cursor: ${ne(e,225)};
  }
  > svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`,me=e=>t.css`
  top: 0;
  right: 0;
  position: absolute;
  /* cursor: nesw-resize; */
  cursor: ${ne(e,225)};
  .jimu-rtl & {
    /* cursor: nwse-resize; */
    cursor: ${ne(e,315)};
  }
`,ye=e=>t.css`
  bottom: 0;
  left: 0;
  position: absolute;
  /* cursor: nesw-resize; */
  cursor: ${ne(e,45)};
  .jimu-rtl & {
    /* cursor: nwse-resize; */
    cursor: ${ne(e,135)};
  }
`,fe=e=>t.css`
  bottom: 0;
  right: 0;
  position: absolute;
  /* cursor: nwse-resize; */
  cursor: ${ne(e,315)};
  .jimu-rtl & {
    /* cursor: nesw-resize; */
    cursor: ${ne(e,405)};
  }
`,ve=e=>t.css`
  height: ${10}px;
  left: ${he}px;
  right: ${he}px;
  top: 0px;
  position: absolute;
  /* cursor: ns-resize; */
  cursor: ${ne(e,180)};

  canvas {
    left: 50%;
    top: 0;
    width: ${pe}px;
    height: ${4}px;
    margin-left: ${-8}px;
    margin-top: 1px;
  }
`,Ie=e=>t.css`
  width: ${10}px;
  top: ${he}px;
  bottom: ${he}px;
  right: 0;
  position: absolute;
  /* cursor: ew-resize; */
  cursor: ${ne(e,270)};

  canvas {
    top: 50%;
    right: 0;
    width: ${4}px;
    height: ${pe}px;
    margin-top: ${-8}px;
    margin-right: 1px;
  }
`,xe=e=>t.css`
  height: ${10}px;
  left: ${he}px;
  right: ${he}px;
  bottom: 0;
  position: absolute;
  /* cursor: ns-resize; */
  cursor: ${ne(e,0)};

  canvas {
    left: 50%;
    bottom: 0;
    width: ${pe}px;
    height: ${4}px;
    margin-left: ${-8}px;
    margin-bottom: 1px;
  }
`,be=e=>t.css`
  width: ${10}px;
  top: ${he}px;
  bottom: ${he}px;
  left: 0;
  position: absolute;
  /* cursor: ew-resize; */
  cursor: ${ne(e,90)};

  canvas {
    top: 50%;
    left: 0;
    width: ${4}px;
    height: ${pe}px;
    margin-top: ${-8}px;
    margin-left: 1px;
  }
`;function we(e){const{rotation:o=0}=e,{top:i,right:n,bottom:a,left:l,topLeft:r,topRight:d,bottomRight:u,bottomLeft:c}=function(t){const{left:e=!0,top:o=!0,right:i=!0,bottom:n=!0}=t;return{top:o,right:i,bottom:n,left:e,topRight:o&&i,bottomRight:n&&i,bottomLeft:n&&e,topLeft:o&&e}}(e),p=t.css`
    width: ${11}px;
    height: ${11}px;
    padding: 1px;
    z-index: ${s.LayoutZIndex.HandlerTools};
  `;return(0,t.jsx)("div",{className:"w-100 h-100 action-area"},i&&(0,t.jsx)("span",{key:"2","data-testid":"top",className:"rnd-resize-top handle no-drag-action",css:ve(o)},(0,t.jsx)(ce,{direction:"h"})),n&&(0,t.jsx)("span",{key:"4","data-testid":"right",className:"rnd-resize-right handle no-drag-action",css:Ie(o)},(0,t.jsx)(ce,{direction:"v"})),a&&(0,t.jsx)("span",{key:"6","data-testid":"bottom",className:"rnd-resize-bottom handle no-drag-action",css:xe(o)},(0,t.jsx)(ce,{direction:"h"})),l&&(0,t.jsx)("span",{key:"8","data-testid":"left",className:"rnd-resize-left handle no-drag-action",css:be(o)},(0,t.jsx)(ce,{direction:"v"})),r&&(0,t.jsx)("span",{key:"1","data-testid":"topLeft",className:"rnd-resize-top rnd-resize-left handle no-drag-action",css:[p,ge(o)]},(0,t.jsx)(le,{pos:"tl"})),d&&(0,t.jsx)("span",{key:"3","data-testid":"topRight",className:"rnd-resize-top rnd-resize-right handle no-drag-action",css:[p,me(o)]},(0,t.jsx)(le,{pos:"tr"})),u&&(0,t.jsx)("span",{key:"5","data-testid":"bottomRight",className:"rnd-resize-bottom rnd-resize-right handle no-drag-action",css:[p,fe(o)]},(0,t.jsx)(le,{pos:"br"})),c&&(0,t.jsx)("span",{key:"7","data-testid":"bottomLeft",className:"rnd-resize-bottom rnd-resize-left handle no-drag-action",css:[p,ye(o)]},(0,t.jsx)(le,{pos:"bl"})))}const Se=[yt,ft,vt,ht,pt],Ce=[].concat(Nt,Se);let Re=0;function Te(i){const{layoutId:n,layoutItem:s,placement:a="top-start",refElement:l,shiftOptions:r,flipOptions:d,formatMessage:u,builderTheme:c,toolItems:p=[],showDefaultTools:h=!0}=i,[g,m]=t.React.useState(!1);let y=[],f=[];const v=s.type===t.LayoutItemType.Section,I=t.React.useMemo((()=>{const o=v?Ce:Se;let i=h?[...p,...o]:p;if(ut()){e.placeholderService.getPlaceholderInfo((0,t.getAppStore)().getState().appConfig,{layoutId:n,layoutItemId:s.id})&&(i=[pt])}return i}),[v,s.id,n,p,h]);return t.hooks.useEffectOnce((()=>{if(s.widgetId){const e=(0,t.getAppStore)().getState().appConfig.widgets[s.widgetId];t.ExtensionManager.getInstance().registerWidgetExtensions(e,!1).then((t=>{t.length>0&&m(!0)}))}})),g&&(y=function(e,o){return o?t.ExtensionManager.getInstance().getExtensions(t.extensionSpec.ExtensionPoints.ContextTool).filter((t=>t.widgetId===o)).map((t=>{var i;return{widgetId:o,icon:t.getIcon(),title:t.getTitle.bind(t),onClick:t.onClick.bind(t),checked:t.checked&&t.checked.bind(t),disabled:t.disabled?"function"==typeof t.disabled?t.disabled.bind(t):t.disabled:null,visible:t.visible?"function"==typeof t.visible?t.visible.bind(t):t.visible:null,openWhenAdded:null!==(i=t.openWhenAdded)&&void 0!==i&&i,settingPanel:t.getSettingPanel({layoutId:e,layoutItem:{widgetId:o},clientRect:null}),index:t.index,extName:t.name}})).sort(((t,e)=>t.index-e.index)):[]}(n,s.widgetId)),y.length>0?f=I.length>0?[].concat(I,{separator:!0},y):y:I.length>0&&(f=I),l&&0!==f.length?(0,t.jsx)(o.Popper,{placement:a,reference:l,open:!0,unstyled:!0,shiftOptions:r,flipOptions:d,version:Re++,trapFocus:!1,autoFocus:!1,css:t.css`
        background: transparent;
        box-shadow: none;
      `},(0,t.jsx)("div",null,(0,t.jsx)(Kt,{layoutId:n,layoutItem:s,theme:c,parentRef:l,tools:f,formatMessage:u}))):null}var Me=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}r((i=i.apply(t,e||[])).next())}))};function Ae(o){const i=(0,e.getAppConfigAction)();if(o.layoutInfo){const{layoutId:e,layoutItemId:n}=o.layoutInfo,s=i.appConfig.layouts[e].content[n];return!(s.type===t.LayoutItemType.Widget&&!s.widgetId)}if(t.utils.isExpressMode()){const t=["widgets/arcgis/arcgis-map/","widgets/common/divider/","widgets/common/menu/","widgets/common/navigator/","widgets/common/controller/","widgets/layout/fixed/","widgets/layout/sidebar/","widgets/layout/row/","widgets/layout/grid/","widgets/layout/column/","widgets/layout/accordion/","widgets/layout/flowrow/"];return o.uri&&!t.includes(o.uri)}return!(o.itemType===t.LayoutItemType.Widget&&o.manifest&&!o.uri)}function Le(o,i){var n,a;const{layoutId:l}=o,r=s.searchUtils.findLayoutItem(i,o);if((null==r?void 0:r.type)===t.LayoutItemType.Widget){const o=(0,e.getAppConfigAction)().appConfig,i=o.layouts[l];if(!r.widgetId)return i.type===t.LayoutType.GridLayout;const s=null===(n=o.widgets)||void 0===n?void 0:n[r.widgetId];return(null===(a=null==s?void 0:s.manifest)||void 0===a?void 0:a.widgetType)!==t.WidgetType.Layout&&("widgets/arcgis/arcgis-map/"!==(null==s?void 0:s.uri)&&"widgets/common/navigator/"!==(null==s?void 0:s.uri)&&"widgets/common/controller/"!==(null==s?void 0:s.uri))}return!1}function Pe(o,i){const n=(0,e.getAppConfigAction)();if(i.layoutInfo){const{layoutId:e,layoutItemId:a}=i.layoutInfo,l=n.appConfig.layouts[e].content[a];n.removeLayoutItem(i.layoutInfo,!1,!1),n.addContentToPlaceholder(o,l.type,l.type===t.LayoutItemType.Widget?l.widgetId:l.sectionId),t.lodash.defer((()=>{s.utils.changeLayout(n.appConfig,o)}))}else i.itemType===t.LayoutItemType.Widget&&i.uri?ze(o,i):i.itemType===t.LayoutItemType.Section&&je(o)}function je(o){const{layoutId:i,layoutItemId:n}=o,a=(0,e.getAppConfigAction)(),l=a.createSection();a.addContentToPlaceholder(o,t.LayoutItemType.Section,l.id),t.lodash.defer((()=>{s.utils.changeLayout(a.appConfig,{layoutId:i,layoutItemId:n})}))}function ze(o,i){return Me(this,void 0,void 0,(function*(){const{layoutId:n,layoutItemId:a}=o,l=(0,e.getAppConfigAction)(),r=yield l.createWidget({uri:i.uri,itemId:i.itemId});l.addContentToPlaceholder(o,t.LayoutItemType.Widget,r.id),t.lodash.defer((()=>{s.utils.changeLayout(l.appConfig,{layoutId:n,layoutItemId:a})}))}))}var Ne=p(8547),ke=p.n(Ne),$e=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Ee=e=>{const o=window.SVG,{className:i}=e,n=$e(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:ke()},n)):t.React.createElement("svg",Object.assign({className:s},n))};class Oe extends t.React.PureComponent{constructor(o){super(o),this.formatMessage=(t,e)=>null!=this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:Jt[t]},e):Jt[t],this.isMac=()=>{var t,e;return"macOS"===(null===(e=null===(t=window.jimuUA)||void 0===t?void 0:t.os)||void 0===e?void 0:e.name)},this.copyItem=()=>{const{layoutId:e,layoutItem:o,lockLayout:i}=this.props;if(!i){const i=this.ref.getBoundingClientRect(),n=i.width,s=i.height;(0,t.getAppStore)().dispatch(t.appActions.clipboardChanged({layoutId:e,width:n,height:s,layoutItemId:o.id}))}},this.deleteSelectedItem=()=>{const{selected:o,layoutId:i,layoutItem:n,lockLayout:s,isFunctionalWidget:a,isDesignMode:l}=this.props;if(o&&(l||t.utils.isExpressMode())){if(t.utils.isExpressMode()){const t=(0,e.getAppConfigAction)().appConfig;if(!Le({layoutId:i,layoutItemId:n.id},t))return}if(!s||a){const t={layoutId:i,layoutItemId:n.id};e.appBuilderSync.publishConfirmDeleteToApp(t)}}},this.state={selected:!1,updateIndex:0},this.screenGroupInfo="",this.isMac()?this.keyBindings={delete:this.deleteSelectedItem,backspace:this.deleteSelectedItem,"command+keyc":this.copyItem}:this.keyBindings={delete:this.deleteSelectedItem,backspace:this.deleteSelectedItem,"ctrl+keyc":this.copyItem}}componentDidMount(){let t;const e=this.screenGroupInfo.split(":");if(e.length>1){const o=e[0],i=e[1];t=document.querySelector(`div.builder-layout-item[data-layoutid="${o}"][data-layoutitemid="${i}"]`)}this.shiftOptions={boundary:null!=t?t:"viewport",crossAxis:!0},this.flipOptions={fallbackPlacements:["top-start","bottom-start","right-start","left-start"]},this.props.selected&&this.setState({selected:!0})}componentDidUpdate(t){this.scrollIntoView(),this.props.selected&&!t.isDesignMode&&this.props.isDesignMode&&this.setState({updateIndex:this.state.updateIndex+1})}doScroll(){const{layoutId:t,layoutItem:e}=this.props,o=document.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);null!=o&&o.scrollIntoView({behavior:"auto",block:"center"})}scrollIntoView(){var o,i;const{selected:n,autoScroll:s}=this.props;if(!n||!s)return;const{layoutId:a}=this.props;let l=!1,r=!1;const d=(0,e.getAppConfigAction)().appConfig,u=d.layouts[a];if((null===(o=u.parent)||void 0===o?void 0:o.type)===t.LayoutParentType.View){const e=d.views[u.parent.id];null!=(null==e?void 0:e.parent)&&(t.jimuHistory.changeView(e.parent,e.id),l=!0)}if((null===(i=u.parent)||void 0===i?void 0:i.type)===t.LayoutParentType.Screen){const e=d.screens[u.parent.id];if(null!=(null==e?void 0:e.parent)){const o=d.screenGroups[e.parent].screens.indexOf(e.id);(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(e.parent,o,!0)),r=!0}}l||r?t.lodash.defer((()=>{this.doScroll()})):this.doScroll()}getStyle(){const{isFunctionalWidget:e,isSection:o,selected:i,isBlock:n,rotate:a=0}=this.props,l=t.polished.rgba(this.pageContext.builderTheme.ref.palette.neutral[900],.6),r=this.pageContext.builderTheme.sys.color.primary.main,d=!e||o?"dashed":"solid";return t.css`
      .${Et} &,
      .${$t} & {
        > .action-area {
          display: none !important;
        }
        > div.selected-tip {
          .tip-content {
            outline-color: ${l};
          }
        }
      }

      transform: ${a>0||a<0?`rotateZ(${a}deg)`:""};
      padding: inherit;
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      right: 0;
      z-index: ${i?s.LayoutZIndex.HandlerTools:"auto"};
      pointer-events: none;

      & > div.selected-tip {
        display: block;
        padding: inherit;
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        pointer-events: none;
        .tip-content {
          height: 100%;
          padding: 1px;
          &:after {
            content: '';
            width: 100%;
            height: 100%;
            outline: ${n&&!i?"none":`1px ${d} ${l}`};
            display: block;
            outline-color: ${!e||o?l:"transparent"};
          }
        }
      }

      .exb-rnd.selected > & > div.selected-tip {
        display: block;
        .tip-content {
          &:after {
            outline-color: ${r};
          }
        }
      }

      & > .action-area {
        position: relative;
        .handle {
          position: absolute;
          pointer-events: all;
        }
      }

      .lock-layout-tip {
        background: ${this.pageContext.builderTheme.ref.palette.neutral[800]};
        border: 1px solid ${this.pageContext.builderTheme.ref.palette.neutral[600]};
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        width: 20px;
        height: 20px;
        position: absolute;
        left: -10px;
        top: -10px;

        svg {
          margin-bottom: 6px;
          margin-left: 4px;
        }
      }
    `}getKeyboardComponent(){return(0,t.jsx)(t.Keyboard,{bindings:this.keyBindings})}isResizable(){const{resizable:e=!0,selected:o,isExpressMode:i}=this.props;return!t.utils.isExpressMode()&&o&&!this.pageContext.viewOnly&&!this.props.lockLayout&&!i&&e}showToolbar(){const{forbidToolbar:e,selected:o}=this.props;return!e&&!this.pageContext.viewOnly&&!t.utils.isExpressMode()&&o}render(){return(0,t.jsx)(oe.Consumer,null,(e=>(this.screenGroupInfo=e,(0,t.jsx)(s.PageContext.Consumer,null,(e=>{if(this.pageContext=e,!this.props.isDesignMode&&!t.utils.isExpressMode())return null;const{layoutId:o,layoutItem:i,resizable:n=!0,draggable:s=!0,selected:a,toolItems:l,showDefaultTools:r,left:d,top:u,right:c,bottom:p,rotate:h,isDesignMode:g}=this.props,m=!s&&!n;return(0,t.jsx)("div",{"data-testid":"select-wrapper",ref:t=>{this.ref=t},css:this.getStyle(),className:(0,t.classNames)("select-wrapper",{selected:a,"no-embed-layout":!this.props.hasEmbeddedLayout})},!e.viewOnly&&(0,t.jsx)("div",{className:"selected-tip"},(0,t.jsx)("div",{className:"tip-content"})),this.showToolbar()&&(0,t.jsx)(Te,{layoutId:o,layoutItem:i,refElement:this.ref,shiftOptions:this.shiftOptions,flipOptions:this.flipOptions,builderTheme:this.pageContext.builderTheme,formatMessage:this.formatMessage,toolItems:g?l:void 0,showDefaultTools:!!g&&r}),this.isResizable()&&(0,t.jsx)(we,{left:d,right:c,top:u,bottom:p,rotation:h,builderTheme:e.builderTheme}),m&&a&&!t.utils.isExpressMode()&&(0,t.jsx)("div",{className:"lock-layout-tip rounded-circle"},(0,t.jsx)(Ee,{size:"s",color:e.builderTheme.ref.palette.black})),a&&this.getKeyboardComponent())})))))}}const Be=(0,t.createSelector)([t=>{var e,o,i;return null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i},e=>e.appRuntimeInfo.appMode===t.AppMode.Design,e=>e.appRuntimeInfo.appMode===t.AppMode.Express,(t,e)=>{var o,i;return e.isSection?null===(i=null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos)||void 0===i?void 0:i[e.layoutItem.sectionId]:null}],((t,e,o,i)=>({lockLayout:t,isDesignMode:e,isExpressMode:o,sectionNavInfo:i}))),De=t.ReactRedux.connect(Be)((0,t.injectIntl)(Oe));function Fe(i){const{layoutId:n,layoutItemId:a,sizemode:l,onSyncChange:r,className:d}=i,u=t.hooks.useTranslation(o.defaultMessages),c=t.React.useMemo((()=>u("syncPlaceholderTip")),[u]),p=t.React.useMemo((()=>{const e=(0,t.getAppStore)().getState().appConfig;return s.searchUtils.getRootContainerInfoOfLayout(e,n,l)}),[n,l]),h=t.ReactRedux.useSelector((t=>{const o=e.placeholderService.getPlaceholderInfo(t.appConfig,{layoutId:n,layoutItemId:a});return o&&o.layoutInfo.layoutId!==n?o.id:-1})),g=t.ReactRedux.useSelector((t=>{const e=t.browserSizeMode,o=t.appConfig.placeholderInfos,i=Object.keys(null!=o?o:{}).filter((t=>{var i;const n=o[t];return!!p&&(n.rootContainer.type===p.type&&n.rootContainer.id===p.id&&null==(null===(i=n.syncs)||void 0===i?void 0:i[e]))})).map((t=>+t));return i.sort(),i.join(",")})),m=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appInfo)||void 0===o?void 0:o.type)===t.AppType.Template})),y=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),f=t.ReactRedux.useSelector((t=>t.appConfig.mainSizeMode)),v=t.React.useCallback((t=>{r(+t.target.value)}),[r]);return m&&y&&l!==f?0===g.length&&null==h?null:(0,t.jsx)("div",{className:"w-100 h-100 d-flex flex-column justify-content-center align-items-center"},(0,t.jsx)(o.Select,{css:t.css`width: auto; .btn, .btn:hover { border: none; border-radius: 1rem; padding: 0 24px; }`,value:h,onChange:v,"aria-label":c,title:c,className:d},(0,t.jsx)("option",{selected:-1===h,value:-1},u("none")),h>0&&(0,t.jsx)("option",{selected:!0,value:h},h),g.split(",").map((e=>(0,t.jsx)("option",{value:+e,key:e},e)))),(0,t.jsx)("span",{className:"mt-2 px-2",css:t.css`font-size: 14px; color: var(--sys-color-action-text);`},c)):null}var He=p(9298);function Ve(e){if(e&&"function"==typeof e.getAttribute){const o=e.getAttribute("data-layoutid"),i=e.getAttribute("data-layoutitemid");if(o&&i)return function(e,o){var i,n,s,a,l,r;const d=(0,t.getAppStore)().getState(),{layouts:u,widgets:c}=d.appConfig,p=u[e],h=null===(i=null==p?void 0:p.content)||void 0===i?void 0:i[o];if(h){const i={layoutId:e,layoutItemId:o},u=function(e,o){var i,n,s;if(o.type===t.LayoutItemType.Widget){const t=o.widgetId;if(t)return null===(s=null===(n=null===(i=e.appConfig)||void 0===i?void 0:i.widgets)||void 0===n?void 0:n[t])||void 0===s?void 0:s.manifest}return null}(d,h);let p=null;return h.type===t.LayoutItemType.Widget&&h.widgetId&&(p=null===(n=c[h.widgetId])||void 0===n?void 0:n.uri),{itemType:h.type,layoutInfo:i,uri:p,manifest:u,rotation:null!==(r=null===(l=null===(a=null===(s=h.setting)||void 0===s?void 0:s.style)||void 0===a?void 0:a.transform)||void 0===l?void 0:l.rotate)&&void 0!==r?r:0}}}(o,i)}return null}function We(t,e){const o={};return o.width=Math.min(t.width,e.width),o.height=Math.min(t.height,e.height),o.left=Math.max(0,t.left),o.top=Math.max(0,t.top),o.left+o.width>e.width&&(o.left=e.width-o.width),o.top+o.height>e.height&&(o.top=e.height-o.height),o}function Ge(e,o,i,n){var a,l;if((null==e?void 0:e.itemType)===t.LayoutItemType.ScreenGroup){const e=s.utils.getCurrentPageId(),o=s.utils.getAppConfig(),i=o.pages[e];return Object.keys(null!==(a=null==i?void 0:i.layout)&&void 0!==a?a:{}).some((e=>{const s=o.layouts[i.layout[e]];return s.type===t.LayoutType.FlowLayout&&s.id===n}))}let r=function(e,o){var i,n,s,a;if(!o)return!1;if(null!==(i=o.isFromCurrentSizeMode)&&void 0!==i&&!i)return!0;const l=o.layoutInfo;if(l){const o=(0,t.getAppStore)().getState(),{layouts:i}=o.appConfig,r=i[l.layoutId],d=null===(n=null==r?void 0:r.content)||void 0===n?void 0:n[l.layoutItemId];if(d){const o=null!==(a=null===(s=d.setting)||void 0===s?void 0:s.lockParent)&&void 0!==a&&a;if(r.type===t.LayoutType.FlowLayout||o)return l.layoutId===e}}return!0}(n,e);return r&&"function"==typeof o.isItemAccepted&&(r=o.isItemAccepted(e,null!==(l=i.isPlaceholder)&&void 0!==l&&l)),r}function Ue(t,e,o){let i,n,s,a,l;return(0,Wt.interact)(t).dropzone({accept:null!=o?o:".exb-rnd",checker:(t,o,n,s,a,l,r)=>{const{props:d,layoutId:u,pageContext:c,layoutContext:p}=e.current;return"none"!==getComputedStyle(a).pointerEvents&&(i=Ve(r),!c.viewOnly&&n&&!r.contains(a)&&Ge(i,p,d,u))},ondragenter:t=>{var o,l,r;const{props:d,layoutId:u,pageContext:c}=e.current;if(t.stopPropagation(),t.target.classList.add("drop-target"),u!==c.rootLayoutId&&t.target.classList.add("drop-active"),n=document.getElementById("interact_dragging_placeholder")||t.relatedTarget,a=t.dropzone.getRect(t.target),(null===(r=null===(l=null===(o=t.dragEvent.interactable)||void 0===o?void 0:o.options)||void 0===l?void 0:l.drag)||void 0===r?void 0:r.allowFrom)&&(s=t.relatedTarget.querySelector(t.dragEvent.interactable.options.drag.allowFrom),s)){const e=s.getBoundingClientRect(),o=t.dragEvent.rect;s.setAttribute("data-dx",""+(e.left-o.left)),s.setAttribute("data-dy",""+(e.top-o.top)),s.setAttribute("data-width",`${e.width}`),s.setAttribute("data-height",`${e.height}`)}d.onDragEnter&&d.onDragEnter(i),d.onToggleDragoverEffect&&d.onToggleDragoverEffect(!0,i)},ondragleave:t=>{const{props:o}=e.current;t.stopPropagation(),t.target.classList.remove("drop-target"),t.target.classList.remove("drop-active"),n=null,a=null,l&&cancelAnimationFrame(l),s&&(s.removeAttribute("data-dx"),s.removeAttribute("data-dy"),s.removeAttribute("data-width"),s.removeAttribute("data-height")),o.onDragLeave&&o.onDragLeave(i),o.onToggleDragoverEffect&&o.onToggleDragoverEffect(!1,i)},ondropmove:t=>{const{props:o}=e.current;t.stopPropagation(),l&&cancelAnimationFrame(l),l=requestAnimationFrame((()=>{const e=t.dragEvent.rect,r=t.dragEvent._interaction.coords.cur.client,d=r.x-(null==a?void 0:a.left),u=r.y-(null==a?void 0:a.top);if(o.onDragOver){let l;s&&(l={left:parseFloat(s.getAttribute("data-dx"))+e.left-(null==a?void 0:a.left),top:parseFloat(s.getAttribute("data-dy"))+e.top-(null==a?void 0:a.top),width:parseFloat(s.getAttribute("data-width")),height:parseFloat(s.getAttribute("data-height"))}),o.onDragOver(i,n,a,{left:e.left-(null==a?void 0:a.left),top:e.top-(null==a?void 0:a.top),width:e.width,height:e.height,right:e.left-(null==a?void 0:a.left)+e.width,bottom:e.top-(null==a?void 0:a.top)+e.height,handlerRect:l},d,u,t.dragEvent.speed)}l=null}))},ondrop:t=>{const{props:o}=e.current;if(t.stopPropagation(),t.target.classList.remove("drop-target"),t.target.classList.remove("drop-active"),o.onToggleDragoverEffect&&o.onToggleDragoverEffect(!1,i),l&&cancelAnimationFrame(l),o.onDrop){const e=t.dragEvent.rect;let n={left:e.left-a.left,top:e.top-a.top,width:e.width,height:e.height};n=We(n,{left:0,top:0,width:a.width,height:a.height}),n.right=n.left+n.width,n.bottom=n.top+n.height;const s=t.dragEvent._interaction.coords.cur.client,l=s.x-a.left,r=s.y-a.top;o.onDrop(i,a,n,l,r)}}})}function _e(e,o){let i,n;const s=t.lodash.throttle((function(t,e,i){if(!t||isNaN(e)||isNaN(i))return;let s=200,a=100;const{props:l}=o.current;t.manifest.defaultSize&&(s=isNaN(t.manifest.defaultSize.width)?s:t.manifest.defaultSize.width,a=isNaN(t.manifest.defaultSize.height)?a:t.manifest.defaultSize.height);l.onDragOver&&l.onDragOver(t,null,n,{left:e-s/2-n.left,top:i-a/2-n.top,width:s,height:a,right:e-s/2-n.left+s,bottom:i-a/2-n.top+a},e-n.left,i-n.top)}),100);function a(){const{props:t,layoutId:n,layoutContext:s,pageContext:a}=o.current;if(a.viewOnly)return;const l=window.jimuConfig.isInBuilder&&window.parent&&window.parent._dragging_widget_item?window.parent._dragging_widget_item:null;i&&i===l||(i=l,Ge(i,s,t,n)&&(e.classList.add("drop-target"),t.onToggleDragoverEffect&&t.onToggleDragoverEffect(!0,i)))}function l(){if(!i)return!1;const{props:t,layoutId:e,pageContext:n,layoutContext:s}=o.current;return!n.viewOnly&&Ge(i,s,t,e)}e.addEventListener("dragenter",(function(t){const{props:s}=o.current;if(t.stopPropagation(),t.preventDefault(),a(),!l())return;n=e.getBoundingClientRect(),i&&s.onDragEnter&&s.onDragEnter(i)})),e.addEventListener("dragleave",(function(t){const{props:n}=o.current;if(t.stopPropagation(),t.preventDefault(),e.classList.remove("drop-target"),e.classList.remove("drop-active"),!l())return;n.onDragLeave&&n.onDragLeave(i);n.onToggleDragoverEffect&&n.onToggleDragoverEffect(!1,i);i=null})),e.addEventListener("dragover",(function(t){const{layoutId:n,pageContext:r}=o.current;if(t.stopPropagation(),t.preventDefault(),a(),!l())return void(t.dataTransfer&&(t.dataTransfer.dropEffect="none"));t.dataTransfer&&(t.dataTransfer.dropEffect="copy");if(e.classList.contains("drop-target")){const{clientX:o,clientY:a}=t;e.classList.contains("drop-active")||n===r.rootLayoutId||e.classList.add("drop-active"),s(i,o,a)}})),e.addEventListener("drop",(function(t){if(t.stopPropagation(),e.classList.remove("drop-target"),e.classList.remove("drop-active"),document.documentElement.classList.remove(Et),!l())return void(i=null);const{props:n}=o.current,{clientX:s,clientY:a}=t,r=e.getBoundingClientRect();let d=200,u=100;i.manifest.defaultSize&&(d=isNaN(i.manifest.defaultSize.width)?d:i.manifest.defaultSize.width,u=isNaN(i.manifest.defaultSize.height)?u:i.manifest.defaultSize.height);let c={width:d,height:u,left:s-d/2-r.left,top:a-u/2-r.top};c=We(c,{left:0,top:0,width:r.width,height:r.height}),c.right=c.left+c.width,c.bottom=c.top+c.height,n.onToggleDragoverEffect&&n.onToggleDragoverEffect(!1,i);n.onDrop&&n.onDrop(i,r,c,s-r.left,a-r.top);i=null}))}function Ye(e){const o=t.React.useRef(),i=t.ReactRedux.useSelector((t=>e.layouts[t.browserSizeMode])),n=t.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode===t.AppMode.Design)),a=t.React.useContext(s.PageContext),l=t.React.useContext(s.LayoutContext),r=t.React.useRef();r.current={props:e,layoutId:i,pageContext:a,layoutContext:l},t.React.useEffect((()=>{let t;return o.current&&(t=Ue(o.current,r)),()=>{t&&t.unset()}}),[]),t.React.useEffect((()=>{o.current&&_e(o.current,r)}),[]);const{className:d,style:u,highlightDragover:c}=e,p=(0,t.classNames)("exb-drop-area d-flex",d);return(0,t.jsx)("div",{className:p,css:t.css`
      background: transparent;
      padding: inherit;
      pointer-events: ${n?"auto":"none !important"};

      & > .highlight-content {
        display: none;
        pointer-events: none;
        position: relative;
      }

      &.drop-target > .highlight-content {
        display: flex;
      }

      &.drop-active {
        background: ${t.polished.rgba(a.builderTheme.sys.color.primary.dark,.2)};
      }
    `,style:u,ref:t=>{o.current=t}},c&&(0,t.jsx)("div",{className:"w-100 highlight-content"},e.children))}var Xe=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Ze=e=>{const o=window.SVG,{className:i}=e,n=Xe(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:Ct()},n)):t.React.createElement("svg",Object.assign({className:s},n))},qe=(0,u.withBuilderTheme)(o.Tooltip),Ke=(0,u.withBuilderTheme)(He.WidgetListPopper),Je=t.css`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  right: 0;
  display: flex;
  z-index: 0;
`;class Qe extends t.React.PureComponent{constructor(o){super(o),this.toggleModal=o=>{o.stopPropagation(),(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?this.setState((t=>({showModal:!t.showModal}))):e.appBuilderSync.publishSidePanelToApp({type:"widget",isPlaceholder:!0,isItemAccepted:this.isItemAccepted,onSelect:this.setContent})},this.closeModal=()=>{this.state.showModal&&this.setState({showModal:!1})},this.toggleDragoverEffect=(t,e)=>{this.ref&&t&&this.isItemAccepted(e)?this.ref.classList.add("dragover"):this.ref.classList.remove("dragover")},this.onDrop=t=>{if(!this.isItemAccepted(t))return;const{layoutId:e,layoutItemId:o}=this.props;Pe({layoutId:e,layoutItemId:o},t)},this.setContent=e=>{const{layoutId:o,layoutItemId:i}=this.props;e.itemType===t.LayoutItemType.Widget?ze({layoutId:o,layoutItemId:i},e).then((()=>{this.setState({isBusy:!1})})):e.itemType===t.LayoutItemType.Section&&je({layoutId:o,layoutItemId:i}),this.setState({showModal:!1,isBusy:!0})},this.handleSyncChange=t=>{const{browserSizeMode:o,layoutId:i,layoutItemId:n}=this.props;(0,e.getAppConfigAction)().syncPlaceholder({layoutId:i,layoutItemId:n},t,o).exec()},this.isItemAccepted=t=>this.layoutContext.isItemAccepted(t,!0)&&Ae(t),this.fakeLayouts=(0,t.Immutable)({[t.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[t.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[t.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.state={showModal:!1,isBusy:!1}}componentDidUpdate(t){t.currentDialogId!==this.props.currentDialogId&&this.setState({showModal:!1})}getStyle(e){return t.css`
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      container-type: inline-size;

      &.is-template {
        border: 1px dashed ${e.sys.color.primary.dark};
      }

      &.dragover .drop-tip {
        background: ${t.polished.rgba(e.sys.color.primary.dark,.5)} !important;
      }

      .add-btn {
        z-index: 1;
      }

      .mask {
        position: absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        z-index:2;
        background: transparent;
      }

      .placeholder-id {
        background: var(--ref-palette-white);
        color: var(--sys-color-surface-background-hint);
        font-size: min(32px, 12.5cqw, 12.5cqh);
        width: min(25cqw, 25cqh);
        height: min(25cqw, 25cqh);
        max-width: 64px;
        max-height: 64px;
        gap: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &.aspect-ratio-wrapper {
        padding-top: ${100*(this.props.aspectRatio||0)}%;
      }

      &.aspect-ratio-wrapper > .exb-drop-area {
        position: absolute;
        padding: 0;
      }

      &.aspect-ratio-wrapper > .add-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}getPopupStyle(){const{builderTheme:e}=this.pageContext;return t.css`
      background-color: ${e.ref.palette.neutral[400]};
      max-height: 400px;
      overflow: auto;
    `}getModalStyle(){const{builderTheme:e}=this.pageContext;return t.css`
      .modal-content {
        background-color: ${e.ref.palette.neutral[400]};
      }

      .modal-header {
        color: ${e.ref.palette.black};
        .close {
          color: ${e.ref.palette.neutral[1100]};
          &:hover {
            color: ${e.ref.palette.black};
          }
        }
      }
    `}render(){const{isTemplate:e,isMainSizeMode:i}=this.props,n=t.utils.isExpressMode();return(0,t.jsx)(s.PageContext.Consumer,null,(a=>(this.pageContext=a,(0,t.jsx)(s.LayoutContext.Consumer,null,(s=>{var l;return this.layoutContext=s,(0,t.jsx)("div",{className:(0,t.classNames)("layout-widget layout-item-content no-widget h-100 w-100 d-flex justify-content-center align-items-center",{"is-template":e}),ref:t=>{this.ref=t},css:this.getStyle(a.builderTheme)},!e&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(Ye,{css:Je,className:"drop-tip",layouts:this.fakeLayouts,isPlaceholder:!0,highlightDragover:!1,onToggleDragoverEffect:this.toggleDragoverEffect,onDrop:this.onDrop}),this.state.isBusy&&(0,t.jsx)(o.Loading,{type:o.LoadingType.Primary}),!this.state.isBusy&&(0,t.jsx)("div",{ref:t=>{this.btnRef=t},className:(0,t.classNames)("add-btn",{"d-none":this.pageContext.viewOnly||n&&!i})},(0,t.jsx)(qe,{title:null===(l=this.props.intl)||void 0===l?void 0:l.formatMessage({id:"addWidget"})},(0,t.jsx)(o.Button,{icon:!0,css:t.css`width: 36px; height: 36px; padding: 0.5rem;`,onClick:this.toggleModal,"aria-haspopup":!0},(0,t.jsx)(Ze,null)))),!this.state.isBusy&&this.state.showModal&&(0,t.jsx)(Ke,{referenceElement:this.btnRef,isAccepted:this.isItemAccepted,onSelect:this.setContent,onClose:this.closeModal}),this.pageContext.viewOnly&&(0,t.jsx)("div",{className:"mask"})),e&&(0,t.jsx)(t.React.Fragment,null,this.props.placeholderId>0&&(0,t.jsx)("div",{className:"placeholder-id rounded-circle"},this.props.placeholderId),!this.pageContext.viewOnly&&(0,t.jsx)(Fe,{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId,sizemode:this.props.browserSizeMode,onSyncChange:this.handleSyncChange,className:"sync-select"})))})))))}}const to=(0,t.createSelector)((t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.currentDialogId}),(t=>t.browserSizeMode),(t=>t.browserSizeMode===t.appConfig.mainSizeMode),(e=>{var o;return(null===(o=e.appInfo)||void 0===o?void 0:o.type)===t.AppType.Template}),((t,o)=>{const{layoutId:i,layoutItemId:n}=o,s=e.placeholderService.getPlaceholderInfo(t.appConfig,{layoutId:i,layoutItemId:n});return s&&s.layoutInfo.layoutId===i?s.id:-1}),((t,e,o,i,n)=>({currentDialogId:t,browserSizeMode:e,isMainSizeMode:o,isTemplate:i,placeholderId:n}))),eo=t.ReactRedux.connect(to)(Qe),oo=(0,t.injectIntl)(eo);class io extends t.React.PureComponent{mask(){return(0,t.jsx)("div",{className:"widget-mask"})}getStyle(){return t.css`
      .${$t} & {
        overflow: visible !important;
      }
      z-index: ${this.props.isInlineEditing?s.LayoutZIndex.HandlerTools:0};

      .widget-mask {
        position: absolute;
        background: transparent;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
      }

      body:not(.design-mode) & .widget-mask {
        display: none !important;
      }
    `}getPlaceholderStyle(){return t.css`
      body:not(.design-mode) & {
        display: none !important;
      }
    `}render(){const{widgetId:e,isInlineEditing:o,isFunctionalWidget:i,hasEmbeddedLayout:n}=this.props,a=!o&&i&&!n;return(0,t.jsx)(s.WidgetRenderer,Object.assign({className:"w-100",css:this.getStyle()},this.props),!e&&(0,t.jsx)(oo,Object.assign({css:this.getPlaceholderStyle()},this.props)),a&&e&&this.mask())}}var no,so=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};!function(t){t[t.ChooseLayoutType=0]="ChooseLayoutType",t[t.RenderLayout=1]="RenderLayout"}(no||(no={}));class ao extends t.React.Component{constructor(){super(...arguments),this.state={mode:no.RenderLayout},this.onLayoutTypeSelected=()=>{this.setState({mode:no.RenderLayout})},this.switchToChoosingMode=()=>{this.setState({mode:no.ChooseLayoutType})}}shouldComponentUpdate(t){return!(t.isPageItem&&!t.visible)&&Object.keys(t).some((e=>t[e]!==this.props[e]))}render(){const{layout:e}=this.props;if(!e)return null;const o=(0,s.findLayoutBuilder)(e.type||t.LayoutType.FlowLayout);if(!o)return null;const i=this.props,{isItemAccepted:n}=i,a=so(i,["isItemAccepted"]);return(0,t.jsx)(s.LayoutContext.Provider,{value:{isItemAccepted:n||ro}},(0,t.jsx)(o,Object.assign({},a)))}}const lo=t.ReactRedux.connect(s.utils.mapStateToLayoutProps)(ao);function ro(t){return null!=t}function uo(t,e){if(!t)return null;let i={};t.backgroundIMage&&(i="string"==typeof t.backgroundIMage?{}:t.backgroundIMage);const n=t.backgroundPosition?o.FillType[t.backgroundPosition.toUpperCase()]:o.FillType.FILL;let s;s=null==t.backgroundColor?e:""===t.backgroundColor?"transparent":t.backgroundColor?t.backgroundColor:"";const a={color:s,fillType:n,image:i};return o.styleUtils.toBackgroundStyle(a)}function co(e){var i,n;const{viewId:s,isActive:a,layoutEntryComponent:l,viewVisibilityContext:r}=e,d=t.ReactRedux.useSelector((t=>{var e,o;return null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.views)||void 0===o?void 0:o[s]})),c=null===(n=null===(i=(0,u.useTheme)())||void 0===i?void 0:i.body)||void 0===n?void 0:n.bg,p=l,h=r,[g,m]=t.React.useState(!1),y=t.React.useMemo((()=>({isInView:!0,isInCurrentView:a})),[a]);return t.React.useEffect((()=>{a&&d.lazyLoad&&!g&&m(!0)}),[a,d.lazyLoad,g]),(0,t.jsx)("div",{className:(0,t.classNames)("w-100 h-100 d-flex section-view",{[o.FOCUSABLE_CONTAINER_CLASS]:a}),style:uo(d,c),css:t.css`&, .exb-drop-area { pointer-events: ${a?"auto":"none"}; }`,key:s,id:`${d.parent}_${d.id}`},(g||!d.lazyLoad)&&(0,t.jsx)(t.ErrorBoundary,null,(0,t.jsx)(h.Provider,{value:y},(0,t.jsx)(p,{layouts:null==d?void 0:d.layout,isInSection:!0,className:"w-100"}))))}function po(e){var o,i;const{views:n,navInfo:s,animationPreview:a,playMode:l,currentIndex:r,previousIndex:d,progress:u,loop:c,viewTransition:p}=e,h=a&&l===t.AnimationPlayMode.OneByOne,{setting:g,playId:m}=t.React.useContext(t.AnimationContext),y=t.ReactRedux.useSelector((e=>{var o;return!g||g.type===t.AnimationType.None||(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),f=!y||h||(null==s?void 0:s.playId)&&(null==s?void 0:s.withOneByOne)?g:null,v=t.React.useMemo((()=>({setting:f,playId:h?m:null})),[f,h,m]);return(0,t.jsx)(t.AnimationContext.Provider,{value:v},(0,t.jsx)("div",{className:"section-content"},(0,t.jsx)(t.TransitionContainer,{useProgress:null!==(o=null==s?void 0:s.useProgress)&&void 0!==o&&o,useStep:null!==(i=null==s?void 0:s.useStep)&&void 0!==i&&i,previousIndex:d,currentIndex:r,progress:u,transitionType:null==p?void 0:p.type,direction:null==p?void 0:p.direction,playId:null==s?void 0:s.playId,withOneByOne:null==s?void 0:s.withOneByOne,loop:c},n.map((o=>{const i=o===n[r];return(0,t.jsx)(co,{key:o,viewId:o,isActive:i,layoutEntryComponent:e.layoutEntryComponent,viewVisibilityContext:e.viewVisibilityContext})})))))}var ho=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const go=e=>{const o=window.SVG,{className:i}=e,n=ho(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:xt()},n)):t.React.createElement("svg",Object.assign({className:s},n))};var mo=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const yo=e=>{const o=window.SVG,{className:i}=e,n=mo(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:wt()},n)):t.React.createElement("svg",Object.assign({className:s},n))};function fo(e){var i,n,s;const{sectionId:a,currentIndex:l,numOfViews:r,onCurrentViewChange:d}=e,u=t.hooks.useTranslation(o.defaultMessages),c=t.ReactRedux.useSelector((t=>{var e;return null===(e=t.appConfig.sections[a])||void 0===e?void 0:e.arrowsNav})),p=t.ReactRedux.useSelector((t=>{var e;return null===(e=t.appConfig.sections[a])||void 0===e?void 0:e.dotsNav})),h=t.ReactRedux.useSelector((t=>{if(null==p?void 0:p.visible){const e=t.appConfig.sections[a],o=null==e?void 0:e.views;if((null==o?void 0:o.length)>0){return o.map((e=>t.appConfig.views[e].label)).join(";")}}return""})),g=t.React.useMemo((()=>h.length>0?h.split(";"):[]),[h]),m=null!==(i=null==p?void 0:p.position)&&void 0!==i?i:"b",y=t.React.useMemo((()=>{const t=[];for(let e=0;e<r;e++)t.push(e);return t}),[r]),f=()=>{var e,o,i,n;return t.css`
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
        left: ${null!==(e=c.offset)&&void 0!==e?e:8}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          top: ${null!==(o=c.offset)&&void 0!==o?o:8}px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        }
      }
      &.second {
        right: ${null!==(i=c.offset)&&void 0!==i?i:8}px;
        top: 50%;
        transform: translateY(-50%);

        &.vertical {
          bottom: ${null!==(n=c.offset)&&void 0!==n?n:8}px;
          left: 50%;
          top: auto;
          right: auto;
          transform: translateX(-50%) rotate(90deg);
        }
      }
    `},v=t.React.useCallback(((e,i)=>{var n;return(0,t.jsx)(o.Button,{key:e,type:"tertiary","aria-label":null!==(n=g[e])&&void 0!==n?n:"",className:(0,t.classNames)("dot p-0 rounded-circle",{active:i,disabled:r<=1}),onClick:i?void 0:()=>{d(e)}})}),[d,r,g]),I=t.React.useCallback((()=>{d(l>0?l-1:r-1)}),[l,r,d]),x=t.React.useCallback((()=>{d(l<r-1?l+1:0)}),[l,r,d]),b=r>1&&0!==l,w=r>1&&l!==r-1;return(0,t.jsx)(t.React.Fragment,null,(null==c?void 0:c.visible)&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(o.Button,{type:"tertiary",disabled:!b,className:(0,t.classNames)("arrows-nav first p-0",{vertical:"v"===c.direction}),css:f(),onClick:b?I:null,"aria-label":u("previous")},(0,t.jsx)(go,{className:"m-0",autoFlip:"v"!==c.direction,size:null!==(n=c.size)&&void 0!==n?n:20})),(0,t.jsx)(o.Button,{type:"tertiary",disabled:!w,className:(0,t.classNames)("arrows-nav second p-0",{vertical:"v"===c.direction}),css:f(),onClick:w?x:null,"aria-label":u("next")},(0,t.jsx)(yo,{className:"m-0",autoFlip:"v"!==c.direction,size:null!==(s=c.size)&&void 0!==s?s:20}))),(null==p?void 0:p.visible)&&(0,t.jsx)("div",{className:(0,t.classNames)("dots-nav",{"snap-left":"l"===m,"snap-top":"t"===m,"snap-right":"r"===m,"snap-bottom":"b"===m}),css:(()=>{var e,o,i,n,s,a,l,r,d,u,c,h,g,y;return t.css`
      position: absolute;
      display: flex;
      flex-direction: ${"l"===m||"r"===m?"column":"row"};
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
        width: ${null!==(e=p.size)&&void 0!==e?e:8}px;
        height: ${null!==(o=p.size)&&void 0!==o?o:8}px;

        &.active {
          border-color: var(--ref-palette-white);
          background: var(--sys-color-primary-main);
          width: ${p.size>0?1.5*p.size:12}px;
          height: ${p.size>0?1.5*p.size:12}px;
        }

        &.disabled {
          cursor: default;
        }
      }

      &.snap-left {
        height: 100%;
        top: 0;
        left: ${null!==(i=p.offset)&&void 0!==i?i:50}px;
        width: ${null!==(n=p.size)&&void 0!==n?n:8}px;

        > button:not(:first-of-type) {
          margin-top: ${null!==(s=p.spacing)&&void 0!==s?s:10}px;
        }
      }
      &.snap-right {
        height: 100%;
        top: 0;
        right: ${null!==(a=p.offset)&&void 0!==a?a:50}px;
        width: ${null!==(l=p.size)&&void 0!==l?l:8}px;

        > button:not(:first-of-type) {
          margin-top: ${null!==(r=p.spacing)&&void 0!==r?r:10}px;
        }
      }
      &.snap-top {
        width: 100%;
        top: ${null!==(d=p.offset)&&void 0!==d?d:50}px;
        height: ${null!==(u=p.size)&&void 0!==u?u:8}px;

        > button:not(:first-of-type) {
          margin-left: ${null!==(c=p.spacing)&&void 0!==c?c:10}px;
        }
      }
      &.snap-bottom {
        width: 100%;
        bottom: ${null!==(h=p.offset)&&void 0!==h?h:50}px;
        height: ${null!==(g=p.size)&&void 0!==g?g:8}px;

        > button:not(:first-of-type) {
          margin-left: ${null!==(y=p.spacing)&&void 0!==y?y:10}px;
        }
      }
    `})()},y.map((t=>v(t,t===l)))))}function vo(e){const{sectionId:o,autoPlay:i,interval:n=w,loop:s=!1}=e,a=t.React.useRef(),l=t.ReactRedux.useSelector((e=>{var o,n;return i?(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design||(null===(n=e.appRuntimeInfo)||void 0===n?void 0:n.isPrintPreview):null})),r=t.React.useRef(l),d=t.React.useCallback((()=>{a.current&&(clearInterval(a.current),a.current=null)}),[]),u=t.React.useCallback((()=>{d(),a.current=setInterval((()=>{const e=function(e,o){var i,n;const s=(0,t.getAppStore)().getState(),a=s.appConfig.sections[e].views;let l=null===(n=null===(i=s.appRuntimeInfo)||void 0===i?void 0:i.sectionNavInfos)||void 0===n?void 0:n[e];const r=(null==l?void 0:l.currentViewId)?a.indexOf(l.currentViewId):0,d=r<a.length-1?r+1:0;return o||0!==d?(l=l?l.set("previousViewId",a[r]).set("currentViewId",a[d]):{previousViewId:a[r],currentViewId:a[d]},(0,t.getAppStore)().dispatch(t.appActions.sectionNavInfoChanged(e,l)),!0):(t.jimuHistory.changeView(e,a[a.length-1]),!1)}(o,s);e||d()}),1e3*n)}),[o,s,n,d]);t.React.useEffect((()=>{if(!r.current){if(!i)return void d();u()}return()=>{d()}}),[i,n,s,d,u]),t.React.useEffect((()=>{if(r.current!==l&&null!==l){if(r.current=l,l)return void d();i&&u()}}),[l,u,d,i])}var Io=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};function xo(e,o){return t.css`
    overflow: visible;
    position: relative;
    aspect-ratio: ${e&&o>0?o:null};

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
  `}function bo(e){var i;const{views:n,navInfo:s,activeView:a,animationPreview:l,playMode:r,transition:d,sectionId:u,autoPlay:c,focusable:p=!0,interval:h=w,loop:g=!0,className:m,sectionStyle:y,rotate:f,forceAspectRatio:v,aspectRatio:I,layoutEntryComponent:x,viewVisibilityContext:b}=e,S=t.React.useRef(),C=t.React.useRef(),R=t.React.useRef(!1),T=t.React.useRef(!1),M=t.React.useRef(null),[A,L]=t.React.useState(!1),P=t.hooks.useTranslation(Jt),j=null==a?void 0:a.id,z=t.React.useMemo((()=>{var e;let o,i,a,l=n;if(s)if(l=null!==(e=s.visibleViews)&&void 0!==e?e:n,s.useProgress){a=s.progress;o=(0,t.getIndexFromProgress)(a,l.length).currentIndex}else o=Math.max(0,l.indexOf(s.currentViewId)),i=s.previousViewId?Math.max(0,l.indexOf(s.previousViewId)):Math.max(0,o-1);else o=Math.max(0,l.indexOf(j)),i=o;return S.current=o,{currentIndex:o,previousIndex:i,progress:a}}),[j,s,n]),N=t.React.useMemo((()=>o.styleUtils.toCSSStyle(y)),[y]),{transform:k}=N,$=Io(N,["transform"]),E=f>0||f<0?`rotateZ(${f}deg)`:"";let O=E;k&&(O=`${k} ${E}`);const B=t.React.useCallback((()=>{L(!0)}),[]),D=t.React.useCallback((()=>{L(!1)}),[]),F=t.React.useCallback((t=>{R.current=!0,T.current=t.target===C.current,null!=M.current&&(clearTimeout(M.current),M.current=null),c&&L(!0)}),[c]),H=t.React.useCallback((t=>{R.current=!1,null!=M.current&&(clearTimeout(M.current),M.current=null),c&&(M.current=setTimeout((()=>{L(!1)}),500))}),[c]),V=c&&!A;vo({sectionId:u,interval:h,loop:g,autoPlay:V});const W=t.React.useCallback((e=>{t.jimuHistory.changeView(u,n[e])}),[u,n]);return(0,t.jsx)("div",{className:(0,t.classNames)(`section-layout layout-item-content w-100 ${null===(i=null==y?void 0:y.boxShadow)||void 0===i?void 0:i.presetStyle}`,m),css:xo(v,I),"data-sectionid":u,style:Object.assign(Object.assign({},$),{transform:O}),onMouseEnter:c?B:null,onMouseLeave:c?D:null,onTouchStart:c?B:null,onTouchEnd:c?D:null,onFocus:F,onBlur:H,tabIndex:p?0:void 0,"aria-label":P("activeViewTip",{viewLabel:(()=>{var e,o,i;const s=n[S.current],a=(0,t.getAppStore)().getState().appConfig;return null!==(i=null===(o=null===(e=null==a?void 0:a.views)||void 0===e?void 0:e[s])||void 0===o?void 0:o.label)&&void 0!==i?i:""})()}),ref:C},(0,t.jsx)(po,{views:n,navInfo:s,animationPreview:l,playMode:r,currentIndex:z.currentIndex,previousIndex:z.previousIndex,progress:z.progress,loop:V&&g,viewTransition:d,layoutEntryComponent:x,viewVisibilityContext:b}),(0,t.jsx)(fo,{sectionId:u,numOfViews:n.length,currentIndex:z.currentIndex,onCurrentViewChange:W}))}class wo extends t.React.PureComponent{render(){return t.React.createElement(bo,Object.assign({},this.props,{layoutEntryComponent:lo,viewVisibilityContext:s.ViewVisibilityContext}))}}function So(t){const{isPreview:e,previewId:o}=t;return e?o:null}function Co(e,o){const[i,n]=t.React.useState(null),a=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),l=t.ReactRedux.useSelector((t=>t.browserSizeMode)),r=t.React.useContext(s.PageVisibilityContext),d=t.React.useRef(r),u=t.React.useRef(l);t.React.useEffect((()=>{null==e||o||a&&d.current||n((0,t.getNextAnimationId)())}),[a,o,e]),t.React.useEffect((()=>{null==e||o||a||u.current===l||(u.current=l,n((0,t.getNextAnimationId)()))}),[l,a,o,e]),t.React.useEffect((()=>{null==e||o||a||d.current===r||(d.current=r,n((0,t.getNextAnimationId)()))}),[r,a,o,e]);const c=t.React.useCallback((()=>{n(null)}),[]);return{playId:i,revert:!a&&!r,onAnimationEnd:c}}function Ro(){const t=[0];for(let e=1;e<=10;e++)t.push(e/10);return t}function To(e,o){const i=t.React.useRef(),[n,s]=t.React.useState(!0);return t.React.useEffect((()=>{if(i.current&&(i.current.unobserve(e),i.current=null),!o)return;if(e&&"function"==typeof IntersectionObserver){const t=new IntersectionObserver((t=>{var e;(e=t[0]).target.classList.contains("playing-animation")||e.boundingClientRect.width>0&&e.boundingClientRect.height>0&&s(e.isIntersecting)}),{threshold:Ro(),root:document,rootMargin:"20%"});return t.observe(e),i.current=t,()=>{i.current.unobserve(e),i.current=null}}}),[e,o]),n}const Mo=Wt.interact.modifiers.restrictRect({restriction:"parent"}),Ao=Wt.interact.modifiers.restrictRect({restriction:`div.${Ot}`});var Lo=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Po=[gt,mt,ht,pt],jo=[mt];function zo(e){var o,i,n,a,l,r,d,u,c,p;const h=t.ReactRedux.useSelector((t=>No(t,e)),t.ReactRedux.shallowEqual),g=Object.assign(Object.assign({},h),e),m=t.React.useContext(s.PageContext),y=t.React.useRef(),f=t.React.useRef(0);let v,I;const{effect:x,oneByOneEffect:b,hoverEffect:w}=null!==(i=null===(o=g.layoutItem)||void 0===o?void 0:o.setting)&&void 0!==i?i:{},{animationPreview:S,hoverPreview:C,previewId:R,playMode:T,layoutType:M}=g,A=t.React.useCallback((()=>m.rootLayoutId),[m.rootLayoutId]),L=To(y.current,g.watchViewportVisibility);let P=null===(n=null==x?void 0:x[t.AnimationTriggerType.ScrollIntoView])||void 0===n?void 0:n.type;P=P&&P!==t.AnimationType.None?P:null;let j=null===(a=null==b?void 0:b[t.AnimationTriggerType.ScrollIntoView])||void 0===a?void 0:a.type;j=j&&j!==t.AnimationType.None?j:null;const[z,N]=t.React.useState({setting:null==b?void 0:b[t.AnimationTriggerType.ScrollIntoView],playId:null,oid:h.innerLayoutId,revert:null,playMode:null}),{setting:k}=t.React.useContext(t.AnimationContext),[$,E,O]=function(t){const{type:e,isPreview:o,previewId:i,hasParentAnimation:n}=t,s=So({isPreview:o,previewId:i}),{playId:a,revert:l,onAnimationEnd:r}=Co(e,n);return e?o?[s,!1,null]:[a,l,r]:[null,!1,null]}({type:P,isPreview:S,previewId:T!==t.AnimationPlayMode.OneByOne?R:null,hasParentAnimation:null!=(null==k?void 0:k.type)&&k.type!==t.AnimationType.None}),[B,D,F]=function(t){const{type:e,isPreview:o,previewId:i,hasParentAnimation:n}=t,s=So({isPreview:o,previewId:i}),{playId:a,revert:l,onAnimationEnd:r}=Co(e,n);return e?o?[s,!1,null]:[a,l,r]:[null,!1,null]}({type:j,isPreview:S,previewId:T!==t.AnimationPlayMode.AsOne?R:null,hasParentAnimation:null!=(null==k?void 0:k.type)&&k.type!==t.AnimationType.None}),{registerWidgetInitDragHandler:H,registerWidgetInitResizeHandler:V,setRefElement:W}=function(e){const{layoutId:o,layoutItemId:i,layoutType:n,layoutItemType:s,useDragHandler:a,restrict:l,getCurrentRootLayoutId:r}=e,d=t.React.useRef(),u=t.React.useRef(),c=t.React.useRef(),p=t.React.useRef(),h=t.React.useRef(),g=t.React.useRef(),m=t.React.useRef(),y=t.React.useRef();function f(t){Ht(!0),Yt(!1),e.onDragStart&&e.onDragStart(t),h.current&&h.current()}function v(t,o,i){e.onDragging&&e.onDragging(t,o,i),g.current&&g.current(o,i)}function I(o,i,n){t.lodash.defer((()=>{Ht(!1)})),e.onDragEnd&&e.onDragEnd(o,i,n),m.current&&m.current(i,n)}function x(t,o,i){Ht(!1),Yt(!0),e.onResizeStart&&e.onResizeStart(t,o,i),u.current&&u.current(o,i)}function b(t,o,i,n,s,a,l){e.onResizing&&e.onResizing(t,o,i,n,s,a,l),c.current&&c.current(o,i,n,s)}function w(o,i,n,s,a,l){t.lodash.defer((()=>{Yt(!1)})),e.onResizeEnd&&e.onResizeEnd(o,i,n,s,a,l),p.current&&p.current(i,n,s,a)}const S=t.React.useCallback(((t,e,o)=>{u.current=t,c.current=e,p.current=o}),[]),C=t.React.useCallback(((t,e,o)=>{h.current=t,g.current=e,m.current=o}),[]),R=t.React.useCallback((u=>{y.current=u,d.current||(d.current=(0,Wt.interact)(u).origin("parent"),d.current=Ft(d.current,{layoutId:o,layoutItemId:i,useDragHandler:a,onDragging:v,onDragStart:f,onDragEnd:I,itemType:s,rootLayoutId:r,restrict:()=>l}),d.current=_t(d.current,{layoutItemId:i,onResizing:b,restrictEdges:n===t.LayoutType.FixedLayout,onResizeStart:x,onResizeEnd:w})),d.current&&(l?d.current.draggable({modifiers:[Mo]}):d.current.draggable({modifiers:[Ao]})),e.resizeObserver&&u&&e.resizeObserver.observe(u)}),[l]);return t.React.useEffect((()=>()=>{d.current&&(d.current.unset(),d.current=null),e.resizeObserver&&y.current&&e.resizeObserver.unobserve(y.current)}),[e.resizeObserver]),{registerWidgetInitDragHandler:C,registerWidgetInitResizeHandler:S,setRefElement:R}}({restrict:e.restrict,layoutId:e.layoutId,layoutItemId:e.layoutItemId,layoutType:M,layoutItemType:null===(l=h.layoutItem)||void 0===l?void 0:l.type,useDragHandler:e.useDragHandler,resizeObserver:e.resizeObserver,getCurrentRootLayoutId:A,onDragStart:e.onDragStart,onDragging:e.onDragging,onDragEnd:e.onDragEnd,onResizeStart:e.onResizeStart,onResizing:e.onResizing,onResizeEnd:e.onResizeEnd});t.hooks.useEffectOnce((()=>{W(y.current)})),t.React.useEffect((()=>{null==$&&B>f.current&&(f.current=B,N({setting:null==b?void 0:b[t.AnimationTriggerType.ScrollIntoView],playId:B,oid:h.innerLayoutId,revert:D,playMode:T,onContextAnimationEnd:D?null:()=>{null==F||F(),S&&(0,t.getAppStore)().dispatch(t.appActions.clearAnimationPreview()),N({setting:null==b?void 0:b[t.AnimationTriggerType.ScrollIntoView],oid:h.innerLayoutId,playId:-1})}}))}),[$,B,F,b,D,T,S,h.innerLayoutId]);const G=()=>{var e;if(S)return T!==t.AnimationPlayMode.AsOne;const o=null===(e=(0,t.getAppStore)().getState().appRuntimeInfo)||void 0===e?void 0:e.animationPreview;return null==o||o.playMode!==t.AnimationPlayMode.OneByOne};function U(){var e;const{selected:o,draggable:i=!0}=g,n=null!==(e=h.isInlineEditing)&&void 0!==e&&e,s=t.utils.isTouchDevice();return i&&!m.viewOnly&&!n&&(!s||o)}const{layoutId:_,layoutItemId:Y,top:X,left:Z,right:q,bottom:K,resizable:J,draggable:Q,isBlock:tt,autoScroll:et,layoutItem:ot,isFunctionalWidget:it,selected:nt,isInlineEditing:st,hasEmbeddedLayout:at,hasExtension:lt}=g;if(!ot)return null;const{className:rt,forbidContextMenu:ut,onClick:ct,onDoubleClick:pt,children:ht,id:gt,isLastChild:mt}=g,yt=Lo(g,["className","forbidContextMenu","onClick","onDoubleClick","children","id","isLastChild"]),ft=ot.type===t.LayoutItemType.Widget,vt=ot.type===t.LayoutItemType.Section,It=!ut&&!m.viewOnly&&(ot.widgetId||ot.sectionId)&&(!it||vt),xt=null===(r=null==x?void 0:x[t.AnimationTriggerType.ScrollIntoView])||void 0===r?void 0:r.option,bt=null!==(p=null===(c=null===(u=null===(d=ot.setting)||void 0===d?void 0:d.style)||void 0===u?void 0:u.transform)||void 0===c?void 0:c.rotate)&&void 0!==p?p:0;return(0,t.jsx)(s.ViewportVisibilityContext.Provider,{value:!!dt()||L},(0,t.jsx)(t.AnimationComponent,{id:gt,parentId:_,type:P,configType:null==xt?void 0:xt.configType,direction:null==xt?void 0:xt.direction,revert:E,delay:e.delay,isLastChild:mt,playId:$,hoverEffect:w,hoverPlayId:R,onAnimationStart:()=>{var e;if(G()){const o=null==b?void 0:b[t.AnimationTriggerType.ScrollIntoView],i=(null===(e=null==o?void 0:o.option)||void 0===e?void 0:e.start)===t.AnimationStartMode.AfterPrevious;N({setting:o,playId:(0,t.getNextAnimationId)(),oid:h.innerLayoutId,revert:i,playMode:T,onContextAnimationEnd:i?null:()=>{N({setting:o,oid:h.innerLayoutId,playId:-1})}})}},onAnimationEnd:()=>{var e;if(G()){const o=null==b?void 0:b[t.AnimationTriggerType.ScrollIntoView];(null===(e=null==o?void 0:o.option)||void 0===e?void 0:e.start)===t.AnimationStartMode.AfterPrevious&&N({setting:o,playId:(0,t.getNextAnimationId)(),oid:h.innerLayoutId,revert:!1,playMode:T,onContextAnimationEnd:()=>{N({setting:o,oid:h.innerLayoutId,playId:-1})}})}null==O||O(),S&&(0,t.getAppStore)().dispatch(t.appActions.clearAnimationPreview())},css:function(e){var o;const i=U(),n=null!==(o=h.isInlineEditing)&&void 0!==o&&o,a=t.polished.rgba(m.builderTheme.ref.palette.neutral[900],.6),l=m.builderTheme.sys.color.primary.main,r=it&&!vt||nt?"solid":"dashed";let d=null;return dt()||(d=(0,t.getHoverStyle)(null==w?void 0:w.type,null==w?void 0:w.setting)),t.css`
      ${d};
      position: relative;
      overflow: visible;
      cursor: ${i?"move":"default"};
      touch-action: ${n||!nt?"auto":"none"};
      user-select: ${n?"auto":"none"};
      min-width: ${s.MIN_LAYOUT_ITEM_SIZE}px;
      min-height: ${s.MIN_LAYOUT_ITEM_SIZE}px;

      & > div.widget-context-menu {
        display: none;
      }

      &:hover > div.widget-context-menu {
        display: flex;
      }

      .${Et} &.functional-widget {
        pointer-events: none;
      }
      .${Et} &.functional-widget .exb-drop-area {
        pointer-events: all;
      }

      .${Et} &,
      .${$t} & {
        > div.highlight-tip {
          .tip-content {
            outline-color: ${a};
          }
        }
      }

      body:not(.design-mode) &,
      body.lock-layout & {
        cursor: default;
      }

      body:not(.design-mode) & > div.highlight-tip {
        display: none !important;
      }

      & > div.highlight-tip {
        display: block;
        padding: inherit;
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        pointer-events: none;
        transform: ${e>0||e<0?`rotateZ(${e}deg)`:""};
        .tip-content {
          height: 100%;
          padding: 1px;
          &:after {
            content: '';
            width: 100%;
            height: 100%;
            outline: ${tt&&!nt?"none":`1px ${r} ${a}`};
            display: block;
            outline-color: ${!it||vt?a:"transparent"};
          }
        }
      }

      &:hover > div.highlight-tip,
      &.hovered > div.highlight-tip {
        display: block;
        .tip-content {
          &:after {
            outline-color: ${l};
          }
        }
      }

      &.functional-widget:not(.selected):hover > div.highlight-tip,
      &.functional-widget:not(.selected).hovered > div.highlight-tip {
        .tip-content {
          &:after {
            outline-width: 2px;
          }
        }
      }
    `}(bt),style:e.style,ref:y,className:(0,t.classNames)("builder-layout-item exb-rnd",rt,{selected:nt,"is-widget":ft,"is-section":vt,"functional-widget":ft&&it,"no-drag-action":!U()}),onDoubleClick:function(o){const{layoutId:i,layoutItemId:n}=e,{supportInlineEditing:s,widgetId:a}=h;e.onDoubleClick&&e.onDoubleClick(o,{layoutId:i,layoutItemId:n});const{browserSizeMode:l,mainBrowserSizeMode:r}=h;m.viewOnly||t.utils.isExpressMode()&&(l!==r||!it)||(o.stopPropagation(),s&&(0,t.getAppStore)().dispatch(t.appActions.setWidgetIsInlineEditingState(a,!0)))},onClick:function(o){if(Math.abs(o.screenX-v)>s.CLICK_TOLERANCE||Math.abs(o.screenY-I)>s.CLICK_TOLERANCE)return void o.stopPropagation();const{viewOnly:i}=m,{browserSizeMode:n,mainBrowserSizeMode:a}=h;if(i||t.utils.isExpressMode()&&(n!==a||!it))return;o.stopPropagation();const l=new CustomEvent("click",{detail:1});if(l.composedPath=()=>o.nativeEvent.composedPath(),window.dispatchEvent(l),!Xt()&&!Vt()){if(e.onClick){const{layoutId:t,layoutItemId:i}=g;e.onClick(o,{layoutId:t,layoutItemId:i})}!function(){const{layoutId:o,layoutItemId:i}=e;h.selected||(0,t.getAppStore)().dispatch(t.appActions.selectionChanged({layoutId:o,layoutItemId:i}))}()}},onMouseDown:function(t){v=t.screenX,I=t.screenY},"data-layoutitemid":Y,"data-layoutid":_},(0,t.jsx)(t.AnimationContext.Provider,{value:z},ft&&(0,t.jsx)(io,Object.assign({rotate:bt,onInitDragHandler:H,onInitResizeHandler:V},yt)),vt&&(0,t.jsx)(wo,Object.assign({rotate:bt},yt))),(It||h.useDragHandler)&&!m.viewOnly&&!h.isInController&&function(o){const{builderTheme:i}=m;return(0,t.jsx)(te,{builderTheme:i,layoutId:e.layoutId,layoutItem:h.layoutItem,positionType:"center",size:s.CONTEXT_MENU_ITEM_SIZE,rotate:o,iconSize:s.CONTEXT_MENU_ICON_SIZE,className:"widget-context-menu",menuItems:e.contextMenuItems||(h.useDragHandler?jo:Po)})}(bt),!m.viewOnly&&nt&&(0,t.jsx)(De,{layoutId:_,layoutItem:ot,top:X,left:Z,right:q,bottom:K,resizable:J,draggable:Q,selected:nt,autoScroll:et,forbidToolbar:e.forbidToolbar,toolItems:e.toolItems,showDefaultTools:e.showDefaultTools,isInlineEditing:st,isFunctionalWidget:it,hasEmbeddedLayout:at,isSection:vt,isBlock:tt,hasExtension:ft&&lt,widgetJson:h.widgetJson,widgetState:h.widgetState,rotate:bt}),!m.viewOnly&&(0,t.jsx)("div",{className:"highlight-tip"},(0,t.jsx)("div",{className:"tip-content"})),e.children))}const No=(0,t.createSelector)([(t,e)=>t.browserSizeMode,(t,e)=>t.appConfig.mainSizeMode,(t,e)=>s.utils.mapStateToLayoutItemProps(t,e),(t,e)=>{var o;return null===(o=t.appConfig.layouts[e.layoutId])||void 0===o?void 0:o.type},(e,o)=>{const i=s.searchUtils.findLayoutItem(e.appConfig,{layoutId:o.layoutId,layoutItemId:o.layoutItemId});if((null==i?void 0:i.type)===t.LayoutItemType.Widget){const i=function(e,o,i){const n=e.appConfig.layouts[o].content[i];if(n.type===t.LayoutItemType.Widget){const t=e.appConfig.widgets[n.widgetId];if(null!=(null==t?void 0:t.layouts)){const o=Object.keys(t.layouts);if(1!==o.length){const i=[];return o.forEach((o=>{const n=t.layouts[o];i.push(n[e.browserSizeMode])})),i}{const i=null==t?void 0:t.layouts[o[0]];if(i)return i[e.browserSizeMode]}}}return null}(e,o.layoutId,o.layoutItemId);return i}return null},(e,o)=>{const i=s.searchUtils.findLayoutItem(e.appConfig,{layoutId:o.layoutId,layoutItemId:o.layoutItemId});return(null==i?void 0:i.type)===t.LayoutItemType.Widget?s.utils.mapStateToWidgetProps(e,o):null},(e,o)=>{const i=s.searchUtils.findLayoutItem(e.appConfig,{layoutId:o.layoutId,layoutItemId:o.layoutItemId});return(null==i?void 0:i.type)===t.LayoutItemType.Section?s.searchUtils.getSectionInfo(e,i.sectionId):null},(e,o)=>{const i=s.searchUtils.findLayoutItem(e.appConfig,{layoutId:o.layoutId,layoutItemId:o.layoutItemId});if((null==i?void 0:i.type)===t.LayoutItemType.Section){const t=Pt(s.searchUtils.getSectionInfo(e,i.sectionId));return e.appConfig.views[t]}return null}],((t,e,o,i,n,s,a,l)=>Object.assign(Object.assign(Object.assign({browserSizeMode:t,mainBrowserSizeMode:e,layoutType:i,innerLayoutId:n,activeView:l},o),null!=s?s:{}),null!=a?a:{})));var ko=p(914),$o=p.n(ko),Eo=p(2717),Oo=p.n(Eo),Bo=p(4072),Do=p.n(Bo),Fo=p(5477),Ho=p.n(Fo),Vo=p(5108),Wo=p.n(Vo),Go=p(2491),Uo=p.n(Go),_o=p(9566),Yo=p.n(_o),Xo=p(3593),Zo=p.n(Xo),qo=p(8081),Ko=p.n(qo),Jo=p(8710),Qo=p.n(Jo),ti=p(8056),ei=p.n(ti),oi=p(3377),ii=p.n(oi),ni=p(1769),si=p.n(ni),ai=p(1291),li=p.n(ai),ri=p(1855),di=p.n(ri),ui=p(1334),ci=p.n(ui),pi=p(7927);function hi(e,o,i){const n={};let s;if(window.jimuConfig.isBuilder){const o=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);if(o){s=(o.contentDocument||o.contentWindow.document).querySelector(`div.fixed-layout[data-layoutid=${e.id}]`)}}else s=document.querySelector(`div.fixed-layout[data-layoutid=${e.id}]`);if(!s)return e;const a=s.querySelectorAll(":scope > div.trail-container > div.exb-rnd");if((null==a?void 0:a.length)>0){a.forEach((t=>{const i=t.getAttribute("data-layoutitemid");if(e.order.includes(i)){const e=t.getBoundingClientRect();n[i]=o?{top:e.top-o.top,left:e.left-o.left,right:e.right-o.right,bottom:e.bottom-o.bottom,width:e.width,height:e.height}:e}})),i&&(n[i.layoutItemId]=i.rect);const t=[...e.order].filter((t=>e.content[t]&&!e.content[t].isPending));return t.sort(((t,e)=>{const o=n[t],i=n[e];if(o.top>i.top)return 1;if(o.top<i.top)return-1;const s=$()?o.right:o.left,a=$()?i.right:i.left;return s>a?1:s<a?-1:o.width>i.width||o.height>i.height?1:o.width<i.width||o.height<i.height?-1:0})),e.set("order",t)}return e}function gi(o,i){const n=(0,e.getAppConfigAction)(),a=n.appConfig,l=s.searchUtils.findLayoutItem(a,o),r=l.bbox;let d,u=l.setting||(0,t.Immutable)({});switch(n.editLayoutItemProperty(o,"bbox",r.set(i,s.utils.isPercentage(r[i])?"0%":"0px")),u=u.setIn(["autoProps",i],!1),i){case"top":d="bottom";break;case"bottom":d="top";break;case"left":d="right";break;case"right":d="left"}if(u=u.setIn(["autoProps",d],!0),"left"===i||"right"===i?u=u.set("hCenter",!1):"top"!==i&&"bottom"!==i||(u=u.set("vCenter",!1)),n.editLayoutItemProperty(o,"setting",u),n.appConfig.useAutoSortInFixedLayout){const t=hi(n.appConfig.layouts[o.layoutId]);n.editLayoutProperty(o.layoutId,"order",t.order)}n.exec()}function mi(o,i){var n,a;const l=(0,e.getAppConfigAction)(),r=l.appConfig,d=s.searchUtils.findLayoutItem(r,o);let u=d.setting||(0,t.Immutable)({}),c=d.bbox;if("h"===i)if((null===(n=u.autoProps)||void 0===n?void 0:n.width)===s.LayoutItemSizeModes.Stretch){if(s.utils.isPercentage(c.left)!==s.utils.isPercentage(c.right))return;{const t=s.utils.isPercentage(c.left)?"%":"px",e=parseFloat(c.left)+parseFloat(c.right);c=c.set("left",`${e/2}${t}`).set("right",`${e/2}${t}`)}}else c=c.set("left","50%"),u=u.set("hCenter",!0).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0);else if((null===(a=u.autoProps)||void 0===a?void 0:a.height)===s.LayoutItemSizeModes.Stretch){if(s.utils.isPercentage(c.top)!==s.utils.isPercentage(c.bottom))return;{const t=s.utils.isPercentage(c.top)?"%":"px",e=parseFloat(c.top)+parseFloat(c.bottom);c=c.set("top",`${e/2}${t}`).set("bottom",`${e/2}${t}`)}}else c=c.set("top","50%"),u=u.set("vCenter",!0).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!0);if(l.editLayoutItemProperty(o,"bbox",c).editLayoutItemProperty(o,"setting",u),l.appConfig.useAutoSortInFixedLayout){const t=hi(l.appConfig.layouts[o.layoutId]);l.editLayoutProperty(o.layoutId,"order",t.order)}l.exec()}const yi=[[{icon:Wo(),visible:()=>at()===t.AppMode.Design&&!lt(),title:t=>t.formatMessage("align")},{icon:Uo(),label:t=>t.formatMessage(s.utils.isRTL()?"snapToRight":"snapToLeft"),title:t=>t.formatMessage(s.utils.isRTL()?"snapToRight":"snapToLeft"),autoFlipIcon:!0,onClick:t=>{const{layoutItem:e,layoutId:o}=t;gi({layoutId:o,layoutItemId:e.id},"left")}},{icon:Qo(),label:t=>t.formatMessage("alignHCenter"),title:t=>t.formatMessage("alignHCenter"),disabled:t=>{var e,o;const{layoutItem:i}=t;return(null===(o=null===(e=i.setting)||void 0===e?void 0:e.autoProps)||void 0===o?void 0:o.width)===s.LayoutItemSizeModes.Stretch&&s.utils.isPercentage(i.bbox.left)!==s.utils.isPercentage(i.bbox.right)},onClick:t=>{const{layoutItem:e,layoutId:o}=t;mi({layoutId:o,layoutItemId:e.id},"h")}},{icon:Yo(),label:t=>t.formatMessage(s.utils.isRTL()?"snapToLeft":"snapToRight"),title:t=>t.formatMessage(s.utils.isRTL()?"snapToLeft":"snapToRight"),autoFlipIcon:!0,onClick:t=>{const{layoutItem:e,layoutId:o}=t;gi({layoutId:o,layoutItemId:e.id},"right")}},{icon:Zo(),label:t=>t.formatMessage("snapToTop"),title:t=>t.formatMessage("snapToTop"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;gi({layoutId:o,layoutItemId:e.id},"top")}},{icon:ei(),label:t=>t.formatMessage("alignVCenter"),title:t=>t.formatMessage("alignVCenter"),disabled:t=>{var e,o;const{layoutItem:i}=t;return(null===(o=null===(e=i.setting)||void 0===e?void 0:e.autoProps)||void 0===o?void 0:o.height)===s.LayoutItemSizeModes.Stretch&&s.utils.isPercentage(i.bbox.top)!==s.utils.isPercentage(i.bbox.bottom)},onClick:t=>{const{layoutItem:e,layoutId:o}=t;mi({layoutId:o,layoutItemId:e.id},"v")}},{icon:Ko(),label:t=>t.formatMessage("snapToBottom"),title:t=>t.formatMessage("snapToBottom"),onClick:t=>{const{layoutItem:e,layoutId:o}=t;gi({layoutId:o,layoutItemId:e.id},"bottom")}},{icon:Do(),label:t=>t.formatMessage("fullWidth"),title:t=>t.formatMessage("fullWidth"),onClick:o=>{const{layoutItem:i,layoutId:n}=o;!function(o){const i=(0,e.getAppConfigAction)(),n=i.appConfig,a=s.searchUtils.findLayoutItem(n,o),l=a.bbox;let r=a.setting||(0,t.Immutable)({});if(r=r.set("hCenter",!1).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!1).setIn(["autoProps","width"],s.LayoutItemSizeModes.Stretch),i.editLayoutItemProperty(o,"bbox",l.set("left",s.utils.isPercentage(l.left)?"0%":"0px").set("right",s.utils.isPercentage(l.right)?"0%":"0px").set("width","100%")).editLayoutItemProperty(o,"setting",r),i.appConfig.useAutoSortInFixedLayout){const t=hi(i.appConfig.layouts[o.layoutId]);i.editLayoutProperty(o.layoutId,"order",t.order)}i.exec()}({layoutId:n,layoutItemId:i.id})}},{icon:Oo(),label:t=>t.formatMessage("fullHeight"),title:t=>t.formatMessage("fullHeight"),onClick:o=>{const{layoutItem:i,layoutId:n}=o;!function(o){const i=(0,e.getAppConfigAction)(),n=i.appConfig,a=s.searchUtils.findLayoutItem(n,o),l=a.bbox;let r=a.setting||(0,t.Immutable)({});if(r=r.set("vCenter",!1).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!1).setIn(["autoProps","height"],s.LayoutItemSizeModes.Stretch),i.editLayoutItemProperty(o,"bbox",l.set("top",s.utils.isPercentage(l.top)?"0%":"0px").set("bottom",s.utils.isPercentage(l.bottom)?"0%":"0px").set("height","100%")).editLayoutItemProperty(o,"setting",r),i.appConfig.useAutoSortInFixedLayout){const t=hi(i.appConfig.layouts[o.layoutId]);i.editLayoutProperty(o.layoutId,"order",t.order)}i.exec()}({layoutId:n,layoutItemId:i.id})}},{icon:Ho(),label:t=>t.formatMessage("fullSize"),title:t=>t.formatMessage("fullSize"),onClick:o=>{const{layoutItem:i,layoutId:n}=o;!function(o){const i=(0,e.getAppConfigAction)(),n=i.appConfig,a=s.searchUtils.findLayoutItem(n,o),l=a.bbox;let r=a.setting||(0,t.Immutable)({});if(r=r.set("vCenter",!1).set("hCenter",!1).setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!1).setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!1).setIn(["autoProps","height"],s.LayoutItemSizeModes.Stretch).setIn(["autoProps","width"],s.LayoutItemSizeModes.Stretch),i.editLayoutItemProperty(o,"bbox",l.set("top",s.utils.isPercentage(l.top)?"0%":"0px").set("bottom",s.utils.isPercentage(l.bottom)?"0%":"0px").set("left",s.utils.isPercentage(l.left)?"0%":"0px").set("right",s.utils.isPercentage(l.right)?"0%":"0px").set("width","100%").set("height","100%")).editLayoutItemProperty(o,"setting",r),i.appConfig.useAutoSortInFixedLayout){const t=hi(i.appConfig.layouts[o.layoutId]);i.editLayoutProperty(o.layoutId,"order",t.order)}i.exec()}({layoutId:n,layoutItemId:i.id})}}],[{icon:$o(),visible:()=>at()===t.AppMode.Design&&!lt(),title:t=>t.formatMessage("arrange")},{icon:ii(),label:t=>t.formatMessage("sendBackward"),title:t=>t.formatMessage("sendBackward"),onClick:t=>{const{layoutItem:o,layoutId:i}=t;!function(t){const o=(0,e.getAppConfigAction)(),i=o.appConfig,{layoutId:n,layoutItemId:s}=t,a=i.layouts[n];pi(a.order,"parent order must not be empty to alter order");const l=[].concat(a.order),r=l.indexOf(s);r<=0||(l[r]=l[r-1],l[r-1]=t.layoutItemId,o.editLayoutProperty(n,"order",l).exec())}({layoutId:i,layoutItemId:o.id})}},{icon:si(),label:t=>t.formatMessage("bringForward"),title:t=>t.formatMessage("bringForward"),onClick:t=>{const{layoutItem:o,layoutId:i}=t;!function(t){const o=(0,e.getAppConfigAction)(),i=o.appConfig,{layoutId:n,layoutItemId:s}=t,a=i.layouts[n];pi(a.order,"parent order must not be empty to alter order");const l=[].concat(a.order),r=l.indexOf(s);r===l.length-1||r<0||(l[r]=l[r+1],l[r+1]=t.layoutItemId,o.editLayoutProperty(n,"order",l).exec())}({layoutId:i,layoutItemId:o.id})}},{icon:li(),label:t=>t.formatMessage("sendToBack"),title:t=>t.formatMessage("sendToBack"),onClick:t=>{const{layoutItem:o,layoutId:i}=t;!function(t){const o=(0,e.getAppConfigAction)(),i=o.appConfig,{layoutId:n,layoutItemId:s}=t,a=i.layouts[n];pi(a.order,"parent order must not be empty to alter order");const l=[].concat(a.order),r=l.indexOf(s);r<=0||(l.splice(r,1),l.splice(0,0,t.layoutItemId),o.editLayoutProperty(n,"order",l).exec())}({layoutId:i,layoutItemId:o.id})}},{icon:di(),label:t=>t.formatMessage("bringToFront"),title:t=>t.formatMessage("bringToFront"),onClick:t=>{const{layoutItem:o,layoutId:i}=t;!function(t){const o=(0,e.getAppConfigAction)(),i=o.appConfig,{layoutId:n,layoutItemId:s}=t,a=i.layouts[n];pi(a.order,"parent order must not be empty to alter order");const l=[].concat(a.order),r=l.indexOf(s);r===l.length-1||r<0||(l.splice(r,1),l.push(t.layoutItemId),o.editLayoutProperty(n,"order",l).exec())}({layoutId:i,layoutItemId:o.id})}}],{icon:t=>{var e,o;const{layoutItem:i}=t;return null!==(o=null===(e=i.setting)||void 0===e?void 0:e.lockLayout)&&void 0!==o&&o?ke():ci()},visible:()=>at()===t.AppMode.Design&&!lt(),title:t=>{var e,o;const{layoutItem:i}=t,n=null!==(o=null===(e=i.setting)||void 0===e?void 0:e.lockLayout)&&void 0!==o&&o;return t.formatMessage(n?"unlockLayout":"lockLayout")},onClick:o=>{const{layoutItem:i,layoutId:n}=o;!function(o){const i=(0,e.getAppConfigAction)(),n=i.appConfig,a=s.searchUtils.findLayoutItem(n,o).setting||(0,t.Immutable)({});i.editLayoutItemProperty(o,"setting.lockLayout",!a.lockLayout).exec()}({layoutId:n,layoutItemId:i.id})}},{separator:!0}];function fi(t,e,o,i=!1){const n={};n.left=t.left+o.dx,n.width=t.width+o.dw;const s=e.right-t.right;0===o.dw?n.right=s-o.dx:0===o.dx?(o.dw>0&&(o.dw=Math.min(s,o.dw)),n.right=s-o.dw,n.width=t.width+o.dw):(n.right=s,o.dx<0&&(o.dx=Math.max(-t.left,o.dx),o.dw=-o.dx,n.left=t.left+o.dx,n.width=t.width+o.dw)),n.top=t.top+o.dy,n.height=t.height+o.dh;const a=e.bottom-t.bottom;return 0===o.dh?n.bottom=a-o.dy:0===o.dy?(o.dh>0&&(o.dh=Math.min(a,o.dh)),n.bottom=a-o.dh,n.height=t.height+o.dh):(n.bottom=a,o.dy<0&&(o.dy=Math.max(-t.top,o.dy),o.dh=-o.dy,n.top=t.top+o.dy,n.height=t.height+o.dh)),i&&$()?Ii(n):n}function vi(t,e){var o,i,n,s,a;const l={};let r=null!==(o=null==e?void 0:e.autoProps)&&void 0!==o?o:{},d=t;const u=O("height",t,r),c=O("width",t,r);if(u===C.Stretch)l.top=d.top,l.bottom=d.bottom;else{const o=null!==(i=r.top)&&void 0!==i&&i,s=null!==(n=r.bottom)&&void 0!==n&&n;u===C.Custom&&(l.height=d.height),o!==s&&!s||null==t.top?l.bottom=d.bottom:l.top=d.top,e.vCenter&&"50%"===d.top&&(l.top="50%")}if(c===C.Stretch)l.left=d.left,l.right=d.right;else{const t=null!==(s=r.left)&&void 0!==s&&s,o=null!==(a=r.right)&&void 0!==a&&a;c===C.Custom&&(l.width=d.width),t===o?null!=d.left?l.left=d.left:l.right=d.right:t&&null!=d.right?l.right=d.right:l.left=d.left,e.hCenter&&"50%"===d.left&&(l.left="50%")}return l}function Ii(e){const o=(0,t.Immutable)(e),i=e.left;return o.set("left",e.right).set("right",i)}function xi(e,o,i,n){var s,a;let l=e,r=(0,t.Immutable)(null!=o?o:{});return(null===(s=null==o?void 0:o.autoProps)||void 0===s?void 0:s.width)!==C.Stretch&&(r=n.left<n.right?$()?r.setIn(["autoProps","right"],!1).setIn(["autoProps","left"],!0):r.setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0):$()?r.setIn(["autoProps","left"],!1).setIn(["autoProps","right"],!0):r.setIn(["autoProps","right"],!1).setIn(["autoProps","left"],!0)),(null===(a=null==o?void 0:o.autoProps)||void 0===a?void 0:a.height)!==C.Stretch&&(r=n.top<n.bottom?r.setIn(["autoProps","top"],!1).setIn(["autoProps","bottom"],!0):r.setIn(["autoProps","top"],!0).setIn(["autoProps","bottom"],!1)),["left","right","top","bottom","width","height"].forEach((t=>{const o="left"===t||"right"===t||"width"===t?i.width:i.height;let s=j(e[t]);$()&&("left"===t?s=j(e.right):"right"===t&&(s=j(e.left))),l=null==e[t]||s?l.set(t,`${(100*n[t]/o).toFixed(1)}%`):l.set(t,`${Math.round(n[t])}px`)})),{bbox:l,setting:r}}class bi extends t.React.PureComponent{constructor(){super(...arguments),this.state={},this.handleResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:a}=this.props;this.props.onResizeEnd(t,e,o,i,n,s,a,this.itemSetting)},this.handleResizing=(t,e,o,i,n,s,a)=>{this.props.onResizing(t,e,o,i,n,s,a)},this.moveUp=()=>{this.props.onMoveByKey(this.props.layoutItemId,0,-1)},this.moveDown=()=>{this.props.onMoveByKey(this.props.layoutItemId,0,1)},this.moveLeft=()=>{this.props.onMoveByKey(this.props.layoutItemId,-1,0)},this.moveRight=()=>{this.props.onMoveByKey(this.props.layoutItemId,1,0)}}getKeyboardComponent(){return this.props.isDesignMode?(0,t.jsx)(t.Keyboard,{bindings:{up:this.moveUp,down:this.moveDown,left:this.moveLeft,right:this.moveRight}}):null}getPositionStyle(){var e,o;const{layoutItem:i,offsetX:n,offsetY:a,dw:l,dh:r,initRect:d,containerRect:u}=this.props;let c=vi(i.bbox,this.itemSetting);const p=i.setting;null!=d&&(c=fi(d,u,{dw:l,dh:"ratio"===this.itemSetting.heightMode?l/s.utils.parseAspectRatio(this.itemSetting.aspectRatio):r,dx:n,dy:a},!0),(null==p?void 0:p.hCenter)&&"50%"===(null===(e=i.bbox)||void 0===e?void 0:e.left)&&(c.left="50%"),(null==p?void 0:p.vCenter)&&"50%"===(null===(o=i.bbox)||void 0===o?void 0:o.top)&&(c.top="50%"));const h=Object.assign(Object.assign({},c),function(t,e,o=!1){const i={},n=e.hCenter&&"50%"===t.left,s=e.vCenter&&"50%"===t.top,a=$()?-1:1;return n&&s?(i.right="auto",i.bottom="auto",i.transform=`translate(${-50*a}%, -50%)`):n?(i.right="auto",i.transform=`translateX(${-50*a}%)`):s&&(i.bottom="auto",i.transform="translateY(-50%)"),!o&&function(t){return"ratio"===t.heightMode&&null!=t.aspectRatio}(e)&&(i.height="auto"),i}(i.bbox,this.itemSetting,Boolean(d)));return 0===l&&0===r||(h.right="auto"),function(e){return[t.css`
      position: absolute;
      left: ${z(e,"left")};
      right: ${z(e,"right")};
      top: ${z(e,"top")};
      bottom: ${z(e,"bottom")};
      width: ${z(e,"width")};
      height: ${z(e,"height")};
    `,e.transform]}(h)}render(){const{layoutId:e,layoutItem:o,isLayoutLockChildren:i,draggable:a=!0,resizable:l=!0,showDefaultTools:r=!0}=this.props;if(null==o||o.isPending)return null;this.itemSetting=t.lodash.assign({},n,o.setting);const d=this.itemSetting.lockLayout,u=s.utils.parseAspectRatio(this.itemSetting.aspectRatio),c=s.utils.shouldUseAspectRatio(this.itemSetting),p=s.utils.getLayoutItemSizeMode("width",o.bbox,this.itemSetting.autoProps),h=s.utils.getLayoutItemSizeMode("height",o.bbox,this.itemSetting.autoProps),g=s.utils.handleOnebyOneAnimation(this.props),[m,y]=this.getPositionStyle();return(0,t.jsx)(zo,Object.assign({className:"d-flex",css:m,style:{transform:y},layoutId:e,layoutItemId:o.id,restrict:this.itemSetting.lockParent||i,draggable:a&&!d,resizable:l&&!d,showDefaultTools:r,toolItems:r?yi:[],onResizeStart:this.props.onResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,onClick:this.props.onClick,top:h!==s.LayoutItemSizeModes.Auto&&!c,bottom:h!==s.LayoutItemSizeModes.Auto&&!c,left:p!==s.LayoutItemSizeModes.Auto,right:p!==s.LayoutItemSizeModes.Auto,forceAspectRatio:c,aspectRatio:u,isInSection:this.props.isInSection,autoWidth:p===s.LayoutItemSizeModes.Auto,autoHeight:h===s.LayoutItemSizeModes.Auto},g),this.props.selected&&this.getKeyboardComponent())}}const wi=(0,t.createSelector)([(t,e)=>{var o;const i=null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.selection;return null!=i&&(i.layoutId===e.layoutId&&i.layoutItemId===e.layoutItemId)},e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design}],((t,e)=>({selected:t,isDesignMode:e}))),Si=t.ReactRedux.connect(wi)(bi);function Ci(t,e){var o,i,n,s;if(e.rect.top>t.rect.bottom||e.rect.bottom<t.rect.top)return!1;if(e.rect.right+5<t.rect.left&&null!=(null===(o=e.right)||void 0===o?void 0:o.value)&&null!=(null===(i=t.left)||void 0===i?void 0:i.value)){const o=e.right.usePercentage;if(o===t.left.usePercentage)return o||e.right.origin===t.left.origin}if(t.rect.right+5<e.rect.left&&null!=(null===(n=t.right)||void 0===n?void 0:n.value)&&null!=(null===(s=e.left)||void 0===s?void 0:s.value)){const o=e.left.usePercentage;if(o===t.right.usePercentage)return o||e.left.origin===t.right.origin}return!1}function Ri(t,e){var o,i,n,s;if(e.rect.left>t.rect.right||e.rect.right<t.rect.left)return!1;if(e.rect.bottom+5<t.rect.top&&null!=(null===(o=e.bottom)||void 0===o?void 0:o.value)&&null!=(null===(i=t.top)||void 0===i?void 0:i.value)){const o=e.bottom.usePercentage;if(o===t.top.usePercentage)return o||e.bottom.origin===t.top.origin}if(t.rect.bottom+5<e.rect.top&&null!=(null===(n=t.bottom)||void 0===n?void 0:n.value)&&null!=(null===(s=e.top)||void 0===s?void 0:s.value)){const o=e.top.usePercentage;if(o===t.bottom.usePercentage)return o||e.top.origin===t.bottom.origin}return!1}function Ti(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.right)||void 0===o?void 0:o.pixelValue)<(null===(i=t.left)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>e.right.pixelValue-t.right.pixelValue)).some((e=>!!Ci(t,e)&&(o={value:e},!0))),null!=o&&(o.next=Ti(o.value,e)),o}function Mi(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.left)||void 0===o?void 0:o.pixelValue)>(null===(i=t.right)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>t.left.pixelValue-e.left.pixelValue)).some((e=>!!Ci(t,e)&&(o={value:e},!0))),null!=o&&(o.next=Mi(o.value,e)),o}function Ai(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.bottom)||void 0===o?void 0:o.pixelValue)<(null===(i=t.top)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>e.bottom.pixelValue-t.bottom.pixelValue)).some((e=>!!Ri(t,e)&&(o={value:e},!0))),null!=o&&(o.next=Ai(o.value,e)),o}function Li(t,e){let o;return e.filter((e=>{var o,i;return(null===(o=e.top)||void 0===o?void 0:o.pixelValue)>(null===(i=t.bottom)||void 0===i?void 0:i.pixelValue)})).sort(((t,e)=>t.top.pixelValue-e.top.pixelValue)).some((e=>!!Ri(t,e)&&(o={value:e},!0))),null!=o&&(o.next=Li(o.value,e)),o}function Pi(e,o,i,n,a,l){const{distance:r,drawLabel:d,reverse:u}=l;if(null!=i&&null!=a){const l=Math.max(e.rect.top,o.rect.top),c=Math.min(e.rect.bottom,o.rect.bottom);i.setColor(t.polished.rgba(a.sys.color.error.light,.35));const p={left:u?o.rect.left-r:e.rect.right,top:l,width:r,height:c-l};if(i.drawRect(p),d){const d=(l+c)/2,p=e.right.usePercentage?t.utils.formatPercentageNumber(s.utils.toRatio(r,n)):t.utils.formatPixelNumber(`${r}px`);i.setColor(a.sys.color.primary.main),i.drawLine(u?o.rect.left-r:e.rect.right,d,u?o.rect.left:e.rect.right+r,d,!1,p)}}}function ji(e,o,i,n,a,l){const{distance:r,drawLabel:d,reverse:u}=l;if(null!=i&&null!=a){const l=Math.max(e.rect.left,o.rect.left),c=Math.min(e.rect.right,o.rect.right);i.setColor(t.polished.rgba(a.sys.color.error.light,.35));const p={left:l,top:u?o.rect.top-r:e.rect.bottom,width:c-l,height:r};if(i.drawRect(p),d){const d=(l+c)/2,p=e.bottom.usePercentage?t.utils.formatPercentageNumber(s.utils.toRatio(r,n)):t.utils.formatPixelNumber(`${r}px`);i.setColor(a.sys.color.primary.main),i.drawLine(d,u?o.rect.top-r:e.rect.bottom,d,u?o.rect.top:e.rect.bottom+r,!1,p)}}}function zi(e,o,i){var n,a,l,r,d;let u=0,c=0;const{delta:p,containerWidth:h,containerHeight:g,canvasPane:m,theme:y}=i,f=0!==p.w||0!==p.h;if(!f||0!==p.w){let i=Ti(e,o);i=function(t,e){const o={id:"",right:{value:e?"0%":"0px",pixelValue:0,usePercentage:e,origin:0,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{left:-100,width:100,right:0,top:Number.NEGATIVE_INFINITY,bottom:Number.POSITIVE_INFINITY}};if(null==t)return{value:o};let i=t;for(;null!=i.next;)i=i.next;return i.next={value:o},t}(i,null==(null===(n=e.left)||void 0===n?void 0:n.value)||(null===(a=e.left)||void 0===a?void 0:a.usePercentage));let r=Mi(e,o);r=function(t,e,o){const i={id:"",left:{value:e?"0%":"0px",pixelValue:o,usePercentage:e,origin:1,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{left:o,width:100,right:o+100,top:Number.NEGATIVE_INFINITY,bottom:Number.POSITIVE_INFINITY}};if(null==t)return{value:i};let n=t;for(;null!=n.next;)n=n.next;return n.next={value:i},t}(r,null==(null===(l=e.right)||void 0===l?void 0:l.value)||e.right.usePercentage,h),u=function(t,e,o,i,n,s){if(e.gridline.rect.top===Number.NEGATIVE_INFINITY&&o.gridline.rect.top===Number.NEGATIVE_INFINITY||null==t.left||null==t.right)return 0;const a=t.left.pixelValue-e.gridline.right.pixelValue,l=o.gridline.left.pixelValue-t.right.pixelValue,r=e.fixed||o.fixed?5:10;if(Math.abs(l-a)<r){let r,d;return r=e.fixed||o.fixed?l-a:(l-a)/2,d=e.fixed?a:o.fixed?l:a+r,Pi(e.gridline,t,i,n,s,{distance:d,drawLabel:!1,reverse:!1}),Pi(t,o.gridline,i,n,s,{distance:d,drawLabel:!1,reverse:!0}),r}return 0}(e,{gridline:i.value,fixed:0!==p.w&&0===p.x},{gridline:r.value,fixed:0!==p.w&&0!==p.x},m,h,y),0!==u||0!==p.w&&0===p.x||(u=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=t.rect.left-e.value.rect.right;let a=e,l=-1;for(;null!=a.next;){const t=a.next,e=a.value.rect.left-t.value.rect.right;-1===l?Math.abs(e-s)<=5&&(l=e,Pi(t.value,a.value,o,i,n,{distance:l,drawLabel:!0,reverse:!1})):e===l&&Pi(t.value,a.value,o,i,n,{distance:l,drawLabel:!0,reverse:!1}),a=t}if(l>0){const a=l-s;return Pi(e.value,t,o,i,n,{distance:l,drawLabel:!1,reverse:!1}),a}return 0}(e,i,m,h,y)),0!==u||0!==p.w&&0!==p.x||(u=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=e.value.rect.left-t.rect.right;let a=e,l=-1;for(;null!=a.next;){const t=a.next,e=t.value.rect.left-a.value.rect.right;-1===l?Math.abs(e-s)<=5&&(l=e,Pi(a.value,t.value,o,i,n,{distance:l,drawLabel:!0,reverse:!0})):e===l&&Pi(a.value,t.value,o,i,n,{distance:l,drawLabel:!0,reverse:!0}),a=t}if(l>0){const a=s-l;return Pi(t,e.value,o,i,n,{distance:l,drawLabel:!1,reverse:!0}),a}return 0}(e,r,m,h,y)),function(e,o,i,n,a,l){var r;const{isResizing:d,dx:u,containerWidth:c}=l;if(null!=n&&null!=a){n.setColor(a.sys.color.primary.main);let l=(null===(r=o.gridline)||void 0===r?void 0:r.rect.top)===Number.NEGATIVE_INFINITY;const p=o.gridline.rect;if(null!=p&&null!=e.left&&(!l||d&&!o.fixed)){const i=(Math.max(e.rect.top,p.top)+Math.min(e.rect.bottom,p.bottom))/2,a=e.left.usePercentage;let l=e.rect.left-p.right;o.fixed||(l+=u);const r=a?t.utils.formatPercentageNumber(s.utils.toRatio(l,c)):t.utils.formatPixelNumber(`${l}px`);n.drawLine(p.right,i,p.right+l,i,!1,r)}l=i.gridline.rect.top===Number.NEGATIVE_INFINITY;const h=i.gridline.rect;if(null!=h&&null!=e.right&&(!l||d&&!i.fixed)){const o=(Math.max(e.rect.top,h.top)+Math.min(e.rect.bottom,h.bottom))/2,a=e.right.usePercentage;let l=h.left-e.rect.right;i.fixed||(l-=u);const r=a?t.utils.formatPercentageNumber(s.utils.toRatio(l,c)):t.utils.formatPixelNumber(`${l}px`);n.drawLine(h.left,o,h.left-l,o,!1,r)}}}(e,{gridline:i.value,fixed:0!==p.w&&0===p.x},{gridline:r.value,fixed:0!==p.w&&0!==p.x},m,y,{isResizing:0!==p.w,dx:u,containerWidth:h})}if(!f||0!==p.h){let i=Ai(e,o);i=function(t,e){const o={id:"",bottom:{value:e?"0%":"0px",pixelValue:0,usePercentage:e,origin:0,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{top:-100,height:100,bottom:0,left:Number.NEGATIVE_INFINITY,right:Number.POSITIVE_INFINITY}};if(null==t)return{value:o};let i=t;for(;null!=i.next;)i=i.next;return i.next={value:o},t}(i,null==(null===(r=e.top)||void 0===r?void 0:r.value)||e.top.usePercentage);let n=Li(e,o);n=function(t,e,o){const i={id:"",top:{value:e?"0%":"0px",pixelValue:o,usePercentage:e,origin:1,from:Number.NEGATIVE_INFINITY,to:Number.POSITIVE_INFINITY},rect:{top:o,height:100,bottom:o+100,left:Number.NEGATIVE_INFINITY,right:Number.POSITIVE_INFINITY}};if(null==t)return{value:i};let n=t;for(;null!=n.next;)n=n.next;return n.next={value:i},t}(n,null==(null===(d=e.bottom)||void 0===d?void 0:d.value)||e.bottom.usePercentage,g),c=function(t,e,o,i,n,s){if(e.gridline.rect.left===Number.NEGATIVE_INFINITY&&o.gridline.rect.left===Number.NEGATIVE_INFINITY||null==t.top||null==t.bottom)return 0;const a=t.top.pixelValue-e.gridline.bottom.pixelValue,l=o.gridline.top.pixelValue-t.bottom.pixelValue,r=e.fixed||o.fixed?5:10;if(Math.abs(l-a)<r){let r,d;return r=e.fixed||o.fixed?l-a:(l-a)/2,d=e.fixed?a:o.fixed?l:a+r,ji(e.gridline,t,i,n,s,{distance:d,drawLabel:!1,reverse:!1}),ji(t,o.gridline,i,n,s,{distance:d,drawLabel:!1,reverse:!0}),r}return 0}(e,{gridline:i.value,fixed:0!==p.h&&0===p.y},{gridline:n.value,fixed:0!==p.h&&0!==p.y},m,g,y),0!==c||0!==p.h&&0===p.y||(c=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=t.rect.top-e.value.rect.bottom;let a=e,l=-1;for(;null!=a.next;){const t=a.next,e=a.value.rect.top-t.value.rect.bottom;-1===l?Math.abs(e-s)<=5&&(l=e,ji(t.value,a.value,o,i,n,{distance:l,drawLabel:!0,reverse:!1})):e===l&&ji(t.value,a.value,o,i,n,{distance:l,drawLabel:!0,reverse:!1}),a=t}if(l>0){const a=l-s;return ji(e.value,t,o,i,n,{distance:l,drawLabel:!1,reverse:!1}),a}return 0}(e,i,m,g,y)),0!==c||0!==p.h&&0!==p.y||(c=function(t,e,o,i,n){if(null==(null==e?void 0:e.next))return 0;const s=e.value.rect.top-t.rect.bottom;let a=e,l=-1;for(;null!=a.next;){const t=a.next,e=t.value.rect.top-a.value.rect.bottom;-1===l?Math.abs(e-s)<=5&&(l=e,ji(a.value,t.value,o,i,n,{distance:l,drawLabel:!0,reverse:!0})):e===l&&ji(a.value,t.value,o,i,n,{distance:l,drawLabel:!0,reverse:!0}),a=t}if(l>0){const a=s-l;return ji(t,e.value,o,i,n,{distance:l,drawLabel:!1,reverse:!0}),a}return 0}(e,n,m,g,y)),function(e,o,i,n,a,l){const{isResizing:r,dy:d,containerHeight:u}=l;if(null!=n&&null!=a){n.setColor(a.sys.color.primary.main);let l=o.gridline.rect.left===Number.NEGATIVE_INFINITY;const c=o.gridline.rect;if(null!=c&&null!=e.top&&(!l||r&&!o.fixed)){const i=(Math.max(e.rect.left,c.left)+Math.min(e.rect.right,c.right))/2,a=e.top.usePercentage;let l=e.rect.top-c.bottom;o.fixed||(l+=d);const r=a?t.utils.formatPercentageNumber(s.utils.toRatio(l,u)):t.utils.formatPixelNumber(`${l}px`);n.drawLine(i,c.bottom,i,c.bottom+l,!1,r)}l=i.gridline.rect.left===Number.NEGATIVE_INFINITY;const p=i.gridline.rect;if(null!=p&&null!=e.bottom&&(!l||r&&!i.fixed)){const o=(Math.max(e.rect.left,p.left)+Math.min(e.rect.right,p.right))/2,a=e.bottom.usePercentage;let l=p.top-e.rect.bottom;i.fixed||(l-=d);const r=a?t.utils.formatPercentageNumber(s.utils.toRatio(l,u)):t.utils.formatPixelNumber(`${l}px`);n.drawLine(o,p.top,o,p.top-l,!1,r)}}}(e,{gridline:null==i?void 0:i.value,fixed:0!==p.h&&0===p.y},{gridline:null==n?void 0:n.value,fixed:0!==p.y&&0!==p.y},m,y,{isResizing:0!==p.h,dy:c,containerHeight:g})}return{dx:u,dy:c}}function Ni(t,e){return Math.abs(e.pixelValue-t.pixelValue)}function ki(t,e,o){if(t.pixelValue+e===o.pixelValue){const e=o.usePercentage;if(e===t.usePercentage)return e||o.origin===t.origin}return!1}function $i(t,e){return e.filter((e=>function(t,e){if(Ni(e,t)<20){const o=e.usePercentage;if(o===t.usePercentage)return o||e.origin===t.origin}return!1}(t,e))).sort(((e,o)=>Ni(e,t)-Ni(o,t)))}function Ei(t,e,o,i){let n=0,s=0;const{canSnapToX:a,canSnapToY:l,canvasPane:r,theme:d}=i;if(!a&&!l)return{dx:n,dy:s};let u=[],c=[];if(e.forEach((e=>{if(a){const i=[e.left,e.xm,e.right].filter((i=>{var n,s,a;return null!=i&&(i.from=null!==(n=e.rect.top)&&void 0!==n?n:e.rect.bottom,i.to=e.rect.top>=0&&e.rect.bottom>=0?e.rect.bottom:t.rect.top,0!==o.w?0===o.x?i.pixelValue>=(null===(s=t.right)||void 0===s?void 0:s.pixelValue):i.pixelValue<=(null===(a=t.left)||void 0===a?void 0:a.pixelValue):0===o.h)}));u=u.concat(i)}if(l){const i=[e.top,e.ym,e.bottom].filter((i=>{var n,s,a;return null!=i&&(i.from=null!==(n=e.rect.left)&&void 0!==n?n:e.rect.right,i.to=e.rect.left>=0&&e.rect.right>=0?e.rect.right:t.rect.left,0!==o.h?0===o.y?i.pixelValue>=(null===(s=t.bottom)||void 0===s?void 0:s.pixelValue):i.pixelValue<=(null===(a=t.top)||void 0===a?void 0:a.pixelValue):0===o.w)}));c=c.concat(i)}})),a){const e=[t.left,t.xm,t.right];e.some((t=>{if(null!=t){const o=$i(t,u);if((null==o?void 0:o.length)>0){null!=r&&null!=d&&o.forEach((t=>{!function(t,e,o){null!=e&&null!=o&&(e.setColor(o.sys.color.error.main),e.drawLine(t.pixelValue,t.from,t.pixelValue,t.to,!0))}(t,r,d)}));const i=o[0];if(Ni(i,t)<=5)return n=i.pixelValue-t.pixelValue,function(t,e,o,i,n){null!=i&&null!=n&&(i.setColor(n.sys.color.error.main),t.forEach((t=>{if(null!=t){let n=t.from,s=t.to,a=!1;if(e.forEach((e=>{ki(t,o,e)&&(n=Math.min(n,e.from),s=Math.max(s,e.to),a=!0)})),a){const e=t.pixelValue+o;i.drawLine(e,n,e,s)}}})))}(e,u,n,r,d),!0}}}))}if(l){const e=[t.top,t.ym,t.bottom];e.some((t=>{if(null!=t){const o=$i(t,c);if((null==o?void 0:o.length)>0){null!=r&&null!=d&&o.forEach((t=>{!function(t,e,o){null!=e&&null!=o&&(e.setColor(o.sys.color.error.main),e.drawLine(t.from,t.pixelValue,t.to,t.pixelValue,!0))}(t,r,d)}));const i=o[0];if(Ni(i,t)<=5)return s=i.pixelValue-t.pixelValue,function(t,e,o,i,n){null!=i&&null!=n&&(i.setColor(n.sys.color.error.main),t.forEach((t=>{if(null!=t){let n=t.from,s=t.to,a=!1;if(e.forEach((e=>{ki(t,o,e)&&(n=Math.min(n,e.from),s=Math.max(s,e.to),a=!0)})),a){const e=t.pixelValue+o;i.drawLine(n,e,s,e)}}})))}(e,c,s,r,d),!0}}}))}return{dx:n,dy:s}}var Oi;function Bi(t,e=!1){const o={};if(["left","right","width","top","bottom","height"].forEach((e=>{null!=(null==t?void 0:t[e])?o[e]=s.utils.isPercentage(t[e])?"%":"px":o[e]="%"})),e){const t=o.left;o.left=o.right,o.right=t}return o}function Di(t,e){const o=t.top,i=e.height-(t.top+t.height),n=t.left;return[e.width-(t.left+t.width)<n?1:0,i<o?1:0]}function Fi(t,e){return s.utils.isPercentage(t)?Math.round(s.utils.fromRatio(t,e)):Math.round(parseFloat(t))}function Hi(t,e,o){var i,n,a,l,r,d,u,c,p;const h=t.bbox,g=Bi(h,$()),m=null!==(i=t.setting)&&void 0!==i?i:{},y=function(t,e,o){var i,n,a;const l={},r=null!==(i=t.bbox)&&void 0!==i?i:{},d=null!==(a=null===(n=t.setting)||void 0===n?void 0:n.autoProps)&&void 0!==a?a:{};return d.width===s.LayoutItemSizeModes.Stretch?(l.left=Fi(r.left,e),l.right=e-Fi(r.right,e),l.width=l.right-l.left):d.width===s.LayoutItemSizeModes.Auto?d.left?l.right=e-Fi(r.right,e):l.left=Fi(r.left,e):(l.width=Fi(r.width,e),d.left?(l.right=e-Fi(r.right,e),l.left=l.right-l.width):(l.left=Fi(r.left,e),l.right=l.left+l.width)),d.height===s.LayoutItemSizeModes.Stretch?(l.top=Fi(r.top,o),l.bottom=o-Fi(r.bottom,o),l.height=l.bottom-l.top):d.height===s.LayoutItemSizeModes.Auto?d.top?l.bottom=o-Fi(r.bottom,o):l.top=Fi(r.top,o):(l.height=Fi(r.height,o),d.top?(l.bottom=o-Fi(r.bottom,o),l.top=l.bottom-l.height):(l.top=Fi(r.top,o),l.bottom=l.top+l.height)),l}(t,e,o),f={id:t.id,rect:y},v=t=>s.utils.isPercentage(t)?100-parseFloat(t)+"%":t,I=t=>s.utils.isPercentage(t)?100-parseFloat(t)+"%":e-parseFloat(t)+"px",x={value:h.left,pixelValue:y.left,usePercentage:"%"===g.left,origin:0},b={value:h.top,pixelValue:y.top,usePercentage:"%"===g.top,origin:0},w={value:v(h.right),pixelValue:y.right,usePercentage:"%"===g.right,origin:1},S={value:v(h.bottom),pixelValue:y.bottom,usePercentage:"%"===g.bottom,origin:1};if((null===(n=m.autoProps)||void 0===n?void 0:n.width)===s.LayoutItemSizeModes.Stretch)f.left=x,f.right=w,g.left===g.right&&"%"===g.left&&(f.xm={value:(parseFloat(f.left.value)+parseFloat(f.right.value))/2+"%",pixelValue:(y.left+y.right)/2,usePercentage:"%"===g.left});else if((null===(a=m.autoProps)||void 0===a?void 0:a.width)===s.LayoutItemSizeModes.Auto)(null===(l=m.autoProps)||void 0===l?void 0:l.left)?f.right=w:f.left=x;else if(null===(r=m.autoProps)||void 0===r?void 0:r.left){if(f.right=w,g.right===g.width){const t=parseFloat(h.right),e=parseFloat(h.width),o="px"===g.right?t+e:100-(t+e),i="px"===g.right?t+e/2:100-(t+e/2);f.left={value:`${o}${g.right}`,pixelValue:y.left,usePercentage:"%"===g.right,origin:1},f.xm={value:`${i}${g.right}`,pixelValue:y.left+y.width/2,usePercentage:"%"===g.right,origin:1}}}else if(f.left=x,g.left===g.width){const t=parseFloat(h.left),e=parseFloat(h.width),o=t+e;f.right={value:`${o}${g.left}`,pixelValue:y.right,usePercentage:"%"===g.left,origin:0},f.xm={value:`${t+e/2}${g.left}`,pixelValue:y.left+y.width/2,usePercentage:"%"===g.left,origin:0}}if($()){let t,o,i;f.rect.left=e-f.rect.right,f.rect.right=f.rect.left+f.rect.width,null!=f.left&&(o={value:I(f.left.value),pixelValue:f.rect.right,usePercentage:"%"===g.left,origin:0===f.left.origin?1:0}),null!=f.right&&(t={value:I(f.right.value),pixelValue:f.rect.left,usePercentage:"%"===g.right,origin:0===f.right.origin?1:0}),null!=f.xm&&(i={value:I(f.xm.value),pixelValue:f.rect.left+f.rect.width/2,usePercentage:f.xm.usePercentage,origin:0===f.xm.origin?1:0}),f.right=o,f.left=t,f.xm=i}if((null===(d=m.autoProps)||void 0===d?void 0:d.height)===s.LayoutItemSizeModes.Stretch)f.top=b,f.bottom=S,g.top===g.bottom&&"%"===g.top&&(f.ym={value:(parseFloat(f.top.value)+parseFloat(f.bottom.value))/2+"%",pixelValue:(y.top+y.bottom)/2,usePercentage:"%"===g.top});else if((null===(u=m.autoProps)||void 0===u?void 0:u.height)===s.LayoutItemSizeModes.Auto)(null===(c=m.autoProps)||void 0===c?void 0:c.top)?f.bottom=S:f.top=b;else if(null===(p=m.autoProps)||void 0===p?void 0:p.top){if(f.bottom=S,g.bottom===g.height){const t=parseFloat(h.bottom),e=parseFloat(h.height),o="px"===g.bottom?t+e:100-(t+e),i="px"===g.bottom?t+e/2:100-(t+e/2);f.top={value:`${o}${g.bottom}`,pixelValue:y.top,usePercentage:"%"===g.bottom,origin:1},f.ym={value:`${i}${g.bottom}`,pixelValue:y.top+y.height/2,usePercentage:"%"===g.bottom,origin:1}}}else if(f.top=b,g.top===g.height){const t=parseFloat(h.top),e=parseFloat(h.height),o=t+e;f.bottom={value:`${o}${g.top}`,pixelValue:y.bottom,usePercentage:"%"===g.top,origin:0},f.ym={value:`${t+e/2}${g.top}`,pixelValue:y.top+y.height/2,usePercentage:"%"===g.top,origin:0}}return f}function Vi(t,e,o,i){var n;const s=[];Object.keys(null!==(n=t.content)&&void 0!==n?n:{}).forEach((n=>{if(n!==i){const i=t.content[n];if(!i.isPending){const t=Hi(i,e,o);s.push(t)}}}));const a={left:0,right:e,width:e,top:0,bottom:o,height:o};return s.push({id:"",left:{value:"0px",pixelValue:0,usePercentage:!1,origin:0,from:0,to:o},right:{value:"0px",pixelValue:e,usePercentage:!1,origin:1,from:0,to:o},top:{value:"0px",pixelValue:0,origin:0,usePercentage:!1,from:0,to:e},bottom:{value:"0px",pixelValue:o,usePercentage:!1,origin:1,from:0,to:e},rect:a}),s.push({id:"",left:{value:"0%",pixelValue:0,usePercentage:!0,origin:0,from:0,to:o},xm:{value:"50%",pixelValue:Math.round(e/2),usePercentage:!0,origin:0,from:0,to:o},right:{value:"0%",pixelValue:e,usePercentage:!0,origin:1,from:0,to:o},top:{value:"0%",pixelValue:0,usePercentage:!0,origin:0,from:0,to:e},ym:{value:"50%",pixelValue:Math.round(o/2),usePercentage:!0,origin:0,from:0,to:e},bottom:{value:"0%",pixelValue:o,usePercentage:!0,origin:1,from:0,to:e},rect:a}),s}function Wi(t,e,o,i,n){var a,l;const{delta:r,shiftKey:d,canvasPane:u,theme:c}=n,p=null!==(a=null==t?void 0:t.setting)&&void 0!==a?a:{},h=null!==(l=null==t?void 0:t.bbox)&&void 0!==l?l:{},g=0!==r.w||0!==r.h;if(g&&(p.hCenter&&"50%"===h.left||p.vCenter&&"50%"===h.top))return r;let m=function(t,e){if(0!==e.w||0!==e.h){const o={x:e.x,y:e.y,w:e.w,h:e.h};return t.width+e.w<16&&(o.w=16-t.width,0!==e.x&&(o.x=-o.w)),t.height+e.h<16&&(o.h=16-t.height,0!==e.y&&(o.y=-o.h)),o}return e}(o,r);d&&(m=function(t,e){if(0===e.w&&0===e.h)return e;const o=t.height/t.width;let i=e.w,n=e.h,s=e.x,a=e.y;Math.abs(i)*o>Math.abs(n)?n=Math.round(i*o):i=Math.round(n/o);0!==s&&(s=-i);0!==a&&(a=-n);return{x:s,y:a,w:i,h:n}}(o,m));const y=function(t,e,o,i,n){var a,l,r,d,u,c,p;const{x:h,y:g,w:m,h:y}=null!=n?n:{x:0,y:0,w:0,h:0},f=null!==(a=null==t?void 0:t.setting)&&void 0!==a?a:{},v={left:Math.round(e.left+h),width:Math.round(e.width+m),right:0,top:Math.round(e.top+g),height:Math.round(e.height+y),bottom:0};v.right=v.left+v.width,v.bottom=v.top+v.height;const I={id:null==t?void 0:t.id,rect:v},x=Di(v,{width:o,height:i}),b=Bi(null==t?void 0:t.bbox,$());if($()){const t=b.left;b.left=b.right,b.right=t}return(null===(l=f.autoProps)||void 0===l?void 0:l.width)===s.LayoutItemSizeModes.Stretch?(I.left={value:`1${b.left}`,pixelValue:v.left,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},I.right={value:`1${b.right}`,pixelValue:v.left+v.width,usePercentage:"%"===b.right,origin:x[1],from:v.top,to:v.bottom}):0===x[0]?(I.left={value:`1${b.left}`,pixelValue:v.left,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},b.width===b.left&&(null===(r=f.autoProps)||void 0===r?void 0:r.width)!==s.LayoutItemSizeModes.Auto&&(I.xm={value:`1${b.left}`,pixelValue:v.left+v.width/2,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom},I.right={value:`1${b.left}`,pixelValue:v.left+v.width,usePercentage:"%"===b.left,origin:x[0],from:v.top,to:v.bottom})):(I.right={value:`1${b.right}`,pixelValue:v.left+v.width,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom},b.width===b.right&&(null===(d=f.autoProps)||void 0===d?void 0:d.width)!==s.LayoutItemSizeModes.Auto&&(I.xm={value:`1${b.right}`,pixelValue:v.left+v.width/2,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom},I.left={value:`1${b.right}`,pixelValue:v.left,usePercentage:"%"===b.right,origin:x[0],from:v.top,to:v.bottom})),(null===(u=f.autoProps)||void 0===u?void 0:u.height)===s.LayoutItemSizeModes.Stretch?(I.top={value:`1${b.top}`,pixelValue:v.top,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},I.bottom={value:`1${b.bottom}`,pixelValue:v.top+v.height,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right}):0===x[1]?(I.top={value:`1${b.top}`,pixelValue:v.top,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},b.height===b.top&&(null===(c=f.autoProps)||void 0===c?void 0:c.height)!==s.LayoutItemSizeModes.Auto&&(I.ym={value:`1${b.top}`,pixelValue:v.top+v.height/2,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right},I.bottom={value:`1${b.top}`,pixelValue:v.top+v.height,usePercentage:"%"===b.top,origin:x[1],from:v.left,to:v.right})):(I.bottom={value:`1${b.bottom}`,pixelValue:v.top+v.height,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right},b.height===b.bottom&&(null===(p=f.autoProps)||void 0===p?void 0:p.height)!==s.LayoutItemSizeModes.Auto&&(I.ym={value:`1${b.bottom}`,pixelValue:v.top+v.height/2,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right},I.top={value:`1${b.bottom}`,pixelValue:v.top,usePercentage:"%"===b.bottom,origin:x[1],from:v.left,to:v.right})),I}(t,o,e.width,e.height,m);let{dx:f,dy:v}=zi(y,i,{delta:m,containerWidth:e.width,containerHeight:e.height,canvasPane:u,theme:c});const I=Ei(y,i,m,{canSnapToX:0===f&&(!g||0!==r.w),canSnapToY:0===v&&(!g||0!==r.h),canvasPane:u,theme:c});f=0!==f?f:I.dx,v=0!==v?v:I.dy;let x=m;return 0===f&&0===v||(x=function(t,e,o){let i,n,{x:s,y:a,w:l,h:r}=t;i=0===l?Oi.None:0===s?Oi.Start:Oi.End;n=0===r?Oi.None:0===a?Oi.Start:Oi.End;0!==e&&(i===Oi.None?s+=e:i===Oi.End?(s+=e,l+=-e):l+=e);0!==o&&(n===Oi.None?a+=o:n===Oi.End?(a+=o,r+=-o):r+=o);return{x:s,y:a,w:l,h:r}}(m,f,v)),x}!function(t){t[t.Start=0]="Start",t[t.End=1]="End",t[t.None=2]="None"}(Oi||(Oi={}));var Gi=p(6884),Ui=p(63),_i=p.n(Ui),Yi=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Xi=e=>{const o=window.SVG,{className:i}=e,n=Yi(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:_i()},n)):t.React.createElement("svg",Object.assign({className:s},n))},Zi=t.css`
  pointer-events: all;
`;function qi(e){return t.css`
    position: relative;
    height: 200px;
    padding: 1rem;
    pointer-events: none;
    z-index: 1;
    .btn-text {
      line-height: 32px;
    }
    .btn {
      background: ${e.ref.palette.neutral[600]};
      &:hover {
        background: ${e.ref.palette.neutral[700]};
      }
    }
    .action-item {
      width: 32px;
    }
    .action-separator {
      width: 300px;
      height: 1px;
      background-color: ${e.ref.palette.neutral[1100]};
    }
  `}function Ki(i){const{pageContext:n,onPageTemplateSelected:s}=i,{builderTheme:a,formatMessage:l,isHeader:r,isFooter:d}=n,[u,c]=t.React.useState(!1),p=t.React.useRef(null),h=t.ReactRedux.useSelector((e=>{var o,i,n;const s=null!==(n=null===(i=null===(o=e.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return e.appRuntimeInfo.appMode===t.AppMode.Design&&!s})),g=()=>{c(!1)};let m;return m=n.isHeader?l("chooseHeaderTemplate"):n.isFooter?l("chooseFooterTemplate"):l("chooseTemplate",{type:n.isDialog?l("dialog").toLocaleLowerCase():l("page").toLocaleLowerCase()}),h?(0,t.jsx)("div",{className:"d-flex w-100 flex-column justify-content-center align-items-center",css:qi(a)},(0,t.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center"},(0,t.jsx)(qe,{placement:"bottom",title:m},(0,t.jsx)("div",{className:"action-item",ref:p},(0,t.jsx)(o.Button,{icon:!0,onClick:o=>{if(o.stopPropagation(),(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small)c(!u);else if(n.isDialog)e.appBuilderSync.publishSidePanelToApp({type:"templateBlock",templateMethod:"getWindowTemplates",onSelect:s});else{const t=r?"getHeaderTemplates":d?"getFooterTemplates":"getFullScreenPageTemplates",o="getFullScreenPageTemplates"===t?"template":"templateBlock";e.appBuilderSync.publishSidePanelToApp({type:o,templateMethod:t,onSelect:s})}},css:Zi,className:"rounded-circle"},(0,t.jsx)(Xi,{autoFlip:!0,size:"m",color:a.ref.palette.neutral[1100]})))),(0,t.jsx)("div",{className:"action-separator mt-4"}),(0,t.jsx)("h5",{className:"btn-text mt-2"},l("dropWidgetToAdd"))),u&&!n.isDialog&&(0,t.jsx)(He.TemplateSelector,{templates:r?(0,Gi.getHeaderTemplates)():d?(0,Gi.getFooterTemplates)():(0,Gi.getFullScreenPageTemplates)(!1),referenceElement:p.current,onItemSelect:s,onClose:g}),u&&n.isDialog&&(0,t.jsx)(He.TemplateSelector,{templates:(0,Gi.getWindowTemplates)(!1),referenceElement:p.current,onItemSelect:s,onClose:g})):null}class Ji{constructor(t,e){this.canvas=t,this.ctx=t.getContext("2d"),this.ctx.font="1rem",this.theme=e}setSize(t,e,o=1){const i=Math.round(e*o),n=Math.round(t*o);o<1?(this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.canvas.width=t,this.canvas.height=e,this.ctx.scale(1,1)):this.canvas.width===n&&this.canvas.height===i||(this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.canvas.width=n,this.canvas.height=i,this.ctx.scale(o,o))}setColor(t){this.ctx.fillStyle=t,this.ctx.strokeStyle=t}drawRect(t){this.ctx.fillRect(t.left,t.top,t.width,t.height)}drawLine(t,e,o,i,n=!1,s){if(n?this.ctx.setLineDash([5,3]):this.ctx.setLineDash([]),this.ctx.beginPath(),t===o){let n=t<this.canvas.width/2?.5:-.5;n=Number.isInteger(t)?n:0,this.ctx.moveTo(t+n,e),this.ctx.lineTo(o+n,i)}if(e===i){let n=e<this.canvas.height/2?.5:-.5;n=Number.isInteger(e)?n:0,this.ctx.moveTo(t,e+n),this.ctx.lineTo(o,i+n)}if(this.ctx.stroke(),null!=s){const n=(t+o)/2,a=(e+i)/2;this.drawLabel(n,a,s,e===i)}}drawTailedLine(t,e,o,i,n=!1,s){if(n?this.ctx.setLineDash([5,3]):this.ctx.setLineDash([]),this.ctx.beginPath(),t===o){let n=t<this.canvas.width/2?.5:-.5;n=Number.isInteger(t)?n:0;const s=Math.min(e,i);let a=s<this.canvas.height/2?.5:-.5;a=Number.isInteger(s)?a:0;const l=Math.max(e,i);let r=l<this.canvas.height/2?.5:-.5;r=Number.isInteger(l)?r:0,this.ctx.moveTo(t+n,e),this.ctx.lineTo(o+n,i),this.ctx.moveTo(t-5,s+a),this.ctx.lineTo(t+5,s+a),this.ctx.moveTo(o-5,l+r),this.ctx.lineTo(o+5,l+r)}if(e===i){let n=e<this.canvas.height/2?.5:-.5;n=Number.isInteger(e)?n:0;const s=Math.min(t,o);let a=s<this.canvas.width/2?.5:-.5;a=Number.isInteger(s)?a:0;const l=Math.max(t,o);let r=l<this.canvas.width/2?.5:-.5;r=Number.isInteger(l)?r:0,this.ctx.moveTo(t,e+n),this.ctx.lineTo(o,i+n),this.ctx.moveTo(s+a,e-5),this.ctx.lineTo(s+a,e+5),this.ctx.moveTo(l+r,i-5),this.ctx.lineTo(l+r,i+5)}if(this.ctx.stroke(),null!=s){const n=(t+o)/2,a=(e+i)/2;this.drawLabel(n,a,s,e===i)}}drawLabel(t,e,o,i=!0){const n=this.ctx.measureText(o),a=n.width,l=n.actualBoundingBoxAscent+n.actualBoundingBoxDescent,r=a+8,d=l+8,u=s.utils.isRTL()?-1:1;this.ctx.save(),this.theme?this.ctx.fillStyle=this.theme.sys.color.primary.main:this.ctx.fillStyle="var(--sys-color-primary-main)",i?(this.drawRoundRect(t-r/2,e-d-8,r,d),this.ctx.fillStyle="#FFFFFF",this.ctx.fillText(o,t-a*u/2,e-12)):(this.drawRoundRect(t+8,e-d/2,r,d),this.ctx.fillStyle="#FFFFFF",-1===u?this.ctx.fillText(o,t+a+12,e+l/2):this.ctx.fillText(o,t+12,e+l/2)),this.ctx.restore()}drawRoundRect(t,e,o,i,n=2){const s=n,a=n,l=n,r=n;this.ctx.beginPath(),this.ctx.moveTo(t+s,e),this.ctx.lineTo(t+o-a,e),this.ctx.quadraticCurveTo(t+o,e,t+o,e+a),this.ctx.lineTo(t+o,e+i-r),this.ctx.quadraticCurveTo(t+o,e+i,t+o-r,e+i),this.ctx.lineTo(t+l,e+i),this.ctx.quadraticCurveTo(t,e+i,t,e+i-l),this.ctx.lineTo(t,e+s),this.ctx.quadraticCurveTo(t,e,t+s,e),this.ctx.closePath(),this.ctx.fill()}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}}var Qi=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}r((i=i.apply(t,e||[])).next())}))};const tn=t.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,en=t.css`
  ${tn};
  pointer-events: none;
`;class on extends t.React.PureComponent{constructor(o){if(super(o),this.handleActivate=e=>{if(!dt()&&!ut())return;if(Math.abs(e.screenX-this.mousedownX)>s.CLICK_TOLERANCE||Math.abs(e.screenY-this.mousedownY)>s.CLICK_TOLERANCE)return void e.stopPropagation();const{isInSection:o,isInWidget:i}=this.props;this.pageContext.viewOnly||o||i||Xt()||Vt()||(e.stopPropagation(),(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(null)))},this.handleMouseDown=t=>{this.mousedownX=t.screenX,this.mousedownY=t.screenY},this.updateDeviceRatio=()=>{this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight,window.devicePixelRatio)},this.handleResizeStart=t=>{const{layout:e}=this.props;this.rndingLayoutId=t;const o=this.ref.querySelector(`div.exb-rnd[data-layoutid="${e.id}"][data-layoutitemid="${t}"]`);this.domRect=this.ref.getBoundingClientRect(),this.bboxGridlines=Vi(this.props.layout,this.domRect.width,this.domRect.height,t);const i=o.getBoundingClientRect(),n=this.getPositionUnit(t);this.resizingRect=Object.assign({units:n},s.utils.relativeClientRect(i,this.domRect))},this.handleResizing=(t,e,o,i,n,s,a)=>{if(this.canvasPane.clear(),a>500)return void this.setState({offsetX:e,offsetY:o,dw:i,dh:n});const l=this.getResizingDelta(t,e,o,i,n,s);this.setState({offsetX:l.x,offsetY:l.y,dw:l.w,dh:l.h})},this.handleResizeEnd=(o,i,n,s,a,l,r,d)=>{var u,c;this.rndingLayoutId=null;const{layout:p}=this.props,h=this.getResizingDelta(o,i,n,s,a,l);this.canvasPane.clear();const g=fi(this.resizingRect,this.domRect,{dx:h.x,dy:h.y,dw:h.w,dh:h.h}),m=(0,e.getAppConfigAction)(),y={layoutId:p.id,layoutItemId:o},{bbox:f,setting:v}=xi((0,t.Immutable)(r.bbox),r.setting,this.domRect,g);let I=f;if((null==d?void 0:d.hCenter)&&"50%"===(null===(u=r.bbox)||void 0===u?void 0:u.left)&&(I=I.set("left","50%")),(null==d?void 0:d.vCenter)&&"50%"===(null===(c=r.bbox)||void 0===c?void 0:c.top)&&(I=I.set("top","50%")),m.editLayoutItemProperty(y,"bbox",this.flipLeftRight?Ii(I):I).editLayoutItemProperty(y,"setting",v),m.appConfig.useAutoSortInFixedLayout){const t=hi(m.appConfig.layouts[y.layoutId]);m.editLayoutProperty(y.layoutId,"order",t.order)}m.exec(),this.bboxGridlines=null,this.setState({offsetX:0,offsetY:0,dw:0,dh:0})},this.handleMoveItemByKey=(o,i,n)=>{var a,l,r;const{layout:d}=this.props;let u,c,p=d.content[o].bbox,h=null!==(a=d.content[o].setting)&&void 0!==a?a:(0,t.Immutable)({});const g=null!==(l=null==h?void 0:h.hCenter)&&void 0!==l&&l||null!==(r=null==h?void 0:h.vCenter)&&void 0!==r&&r;if(g){const t=this.ref.querySelector(`div[data-layoutitemid="${o}"]`);u=t.clientWidth,c=t.clientHeight}if(0!==i){if(s.utils.isPercentage(p.left)){const t=parseFloat(p.left);p=(null==h?void 0:h.hCenter)?p.set("left",`${(50-100*u/2/this.ref.clientWidth+.1*i).toFixed(1)}%`):p.set("left",`${(t+.1*i).toFixed(1)}%`)}else{const t=parseFloat(p.left);p=(null==h?void 0:h.hCenter)?p.set("left",`${(this.ref.clientWidth-u)/2+i}px`):p.set("left",`${t+i}px`)}if(s.utils.isPercentage(p.right)){const t=parseFloat(p.right);p=(null==h?void 0:h.hCenter)?p.set("right",`${(50+100*u/2/this.ref.clientWidth-.1*i).toFixed(1)}%`):p.set("right",`${(t-.1*i).toFixed(1)}%`)}else{const t=parseFloat(p.right);p=(null==h?void 0:h.hCenter)?p.set("right",(this.ref.clientWidth+u)/2-i+"px"):p.set("right",t-i+"px")}(null==h?void 0:h.hCenter)&&(h=h.set("hCenter",!1))}if(0!==n){if(s.utils.isPercentage(p.top)){const t=parseFloat(p.top);p=(null==h?void 0:h.vCenter)?p.set("top",`${(50-100*c/2/this.ref.clientHeight+.1*n).toFixed(1)}%`):p.set("top",`${(t+.1*n).toFixed(1)}%`)}else{const t=parseFloat(p.top);p=(null==h?void 0:h.vCenter)?p.set("top",`${(this.ref.clientHeight-c)/2+n}px`):p.set("top",`${t+n}px`)}if(s.utils.isPercentage(p.bottom)){const t=parseFloat(p.bottom);p=(null==h?void 0:h.vCenter)?p.set("bottom",`${(50+100*c/2/this.ref.clientHeight-.1*n).toFixed(1)}%`):p.set("bottom",`${(t-.1*n).toFixed(1)}%`)}else{const t=parseFloat(p.bottom);p=(null==h?void 0:h.hCenter)?p.set("bottom",(this.ref.clientHeight+c)/2-n+"px"):p.set("bottom",t-n+"px")}(null==h?void 0:h.vCenter)&&(h=h.set("vCenter",!1))}const m=(0,e.getAppConfigAction)();if(g&&m.editLayoutItemProperty({layoutId:d.id,layoutItemId:o},"setting",h),m.editLayoutItemProperty({layoutId:d.id,layoutItemId:o},"bbox",p),m.appConfig.useAutoSortInFixedLayout){const t=hi(m.appConfig.layouts[d.id]);m.editLayoutProperty(d.id,"order",t.order)}m.exec()},this.handleDragOver=(e,o,i,n,a,l,r)=>{var d,u,c;if(this.canvasPane.clear(),!this.state.isDragover||r>500)return;let p,h,g,m=0,y=0;(null===(d=e.layoutInfo)||void 0===d?void 0:d.layoutId)===this.props.layout.id?(p=e.layoutInfo.layoutItemId,g=this.getPositionUnit(p),h=this.props.layout.content[p]):g=Bi({},this.flipLeftRight);const f=e.rotation>0||e.rotation<0,v=Wi(h,this.domRect,n,this.bboxGridlines,{delta:{x:0,w:0,y:0,h:0},shiftKey:!1,canvasPane:f?null:this.canvasPane,theme:f?null:this.pageContext.builderTheme});if(null!=o&&(0!==v.x||0!==v.y)){const t=null!==(u=parseFloat(o.getAttribute("data-translatex")))&&void 0!==u?u:0,e=null!==(c=parseFloat(o.getAttribute("data-translatey")))&&void 0!==c?c:0;o.style.transform=`translate(${t+v.x}px, ${e+v.y}px)`}m=v.x,y=v.y,this.canvasPane.setColor(this.pageContext.builderTheme.sys.color.primary.main);if(function(e,o,i){const n=o.width-(e.left+e.width),a=o.height-(e.top+e.height),l="px"===e.units.left?t.utils.formatPixelNumber(`${Math.round(e.left)}px`):t.utils.formatPercentageNumber(s.utils.toRatio(e.left,o.width)),r="px"===e.units.right?t.utils.formatPixelNumber(`${Math.round(n)}px`):t.utils.formatPercentageNumber(s.utils.toRatio(n,o.width)),d="px"===e.units.top?t.utils.formatPixelNumber(`${Math.round(e.top)}px`):t.utils.formatPercentageNumber(s.utils.toRatio(e.top,o.height)),u="px"===e.units.bottom?t.utils.formatPixelNumber(`${Math.round(a)}px`):t.utils.formatPercentageNumber(s.utils.toRatio(a,o.height));e.left<=n?e.top<=a?(i.drawLine(0,e.top,e.left,e.top,!1,l),i.drawLine(e.left,0,e.left,e.top,!1,d)):(i.drawLine(0,e.top+e.height,e.left,e.top+e.height,!1,l),i.drawLine(e.left,e.top+e.height,e.left,o.height,!1,u)):e.top<=a?(i.drawLine(e.left+e.width,e.top,o.width,e.top,!1,r),i.drawLine(e.left+e.width,0,e.left+e.width,e.top,!1,d)):(i.drawLine(e.left+e.width,e.top+e.height,o.width,e.top+e.height,!1,r),i.drawLine(e.left+e.width,e.top+e.height,e.left+e.width,o.height,!1,u))}({width:n.width,height:n.height,left:n.left+m,top:n.top+y,units:g},this.domRect,this.canvasPane),null==e.layoutInfo||e.isPending){this.canvasPane.setColor(t.polished.rgba(this.pageContext.builderTheme.sys.color.primary.light,.2));const e={left:n.left+m,top:n.top+y,width:n.width,height:n.height};this.canvasPane.drawRect(e)}},this.handleToggleDragoverEffect=(t,e)=>{var o;if(this.canvasPane.clear(),t){let t;this.domRect=this.ref.getBoundingClientRect(),(null===(o=e.layoutInfo)||void 0===o?void 0:o.layoutId)===this.props.layout.id&&(t=e.layoutInfo.layoutItemId),this.bboxGridlines=Vi(this.props.layout,this.domRect.width,this.domRect.height,t)}this.setState({isDragover:t})},this.handleDragEnter=t=>null,this.handleDragLeave=()=>null,this.handleDrop=(t,e,o)=>{let i;i=null==t.layoutInfo||t.layoutInfo.layoutId!==this.props.layout.id?Bi({},this.flipLeftRight):this.getPositionUnit(t.layoutInfo.layoutItemId);const{snappedRect:n,delta:s}=this.calSnappedRect(t,e,Object.assign({units:i},o),t.layoutInfo);this.canvasPane.clear();const a={left:o.left+s.x,top:o.top+s.y,width:o.width,height:o.height,right:e.width-(o.left+s.x+o.width),bottom:e.height-(o.top+s.y+o.height)};this.addWidgetToLayout(t,e,a,n).catch((t=>{console.error(t)})),this.bboxGridlines=null},this.toggleShowWidgetList=t=>{t.stopPropagation(),this.setState({showWidgetList:!this.state.showWidgetList})},this.closeWidgetList=()=>{this.state.showWidgetList&&this.setState({showWidgetList:!1})},this.handlePageTemplateSelected=o=>{const i=(0,e.getAppConfigAction)();this.setState({isLoadingTemplate:!0}),this.pageContext.isHeader?i.applyHeaderTemplate(o).then((()=>{i.exec(),t.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>{console.error(t)})):this.pageContext.isFooter?i.applyFooterTemplate(o).then((()=>{i.exec(),t.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>{console.error(t)})):this.pageContext.isDialog?i.applyDialogTemplate(this.pageContext.dialogId,o).then((()=>{i.exec(),t.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>{console.error(t)})):i.applyPageBodyTemplate(this.pageContext.pageId,o).then((()=>{i.exec(),t.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).catch((t=>{console.error(t)}))},null==this.props.layout)return;const i=t.ExtensionManager.getInstance().getExtensions(`${t.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==i?void 0:i.length)>0){const t=i.find((t=>t.layoutType===this.props.layout.type));this.layoutTransform=null==t?void 0:t.transformLayout}this.flipLeftRight=s.utils.isRTL(),this.state={offsetX:0,offsetY:0,dw:0,dh:0,isDragover:!1,showWidgetList:!1,isLoadingTemplate:!1}}componentDidMount(){var t,e,o;this.canvasPane=new Ji(this.canvasRef,this.pageContext.builderTheme),this.updateDeviceRatio();const i=`(resolution: ${window.devicePixelRatio}dppx)`;this.mediaQueryList=null===(t=window.matchMedia)||void 0===t?void 0:t.call(window,i);const{name:n,version:s}=window.jimuUA.browser;"safari"===n.toLowerCase()&&parseInt(s)<14?null===(e=this.mediaQueryList)||void 0===e||e.addEventListener("change",this.updateDeviceRatio):null===(o=this.mediaQueryList)||void 0===o||o.addEventListener("change",this.updateDeviceRatio)}componentWillUnmount(){var t,e;const{name:o,version:i}=window.jimuUA.browser;"safari"===o.toLowerCase()&&parseInt(i)<14?null===(t=this.mediaQueryList)||void 0===t||t.removeEventListener("change",this.updateDeviceRatio):null===(e=this.mediaQueryList)||void 0===e||e.removeEventListener("change",this.updateDeviceRatio)}componentDidUpdate(){this.updateDeviceRatio()}isResizingItem(){return 0!==this.state.dh||0!==this.state.dw}getResizingDelta(t,e,o,i,n,s){return Wi(this.props.layout.content[t],this.domRect,this.resizingRect,this.bboxGridlines,{delta:{x:e,w:i,y:o,h:n},shiftKey:s,canvasPane:this.canvasPane,theme:this.pageContext.builderTheme})}calSnappedRect(t,e,o,i){let n;(null==i?void 0:i.layoutId)===this.props.layout.id&&(n=this.props.layout.content[i.layoutItemId]);const a=Wi(n,this.domRect,o,this.bboxGridlines,{delta:{x:0,y:0,w:0,h:0},shiftKey:!1}),l={left:o.left+a.x,top:o.top+a.y,width:o.width,height:o.height};return l.right=e.width-(+l.left+ +l.width),l.bottom=e.height-(+l.top+ +l.height),o.width>e.width&&(l.width=e.width,l.left=0),o.height>e.height&&(l.height=e.height,l.top=0),l.left=s.utils.toRatio(l.left,e.width),l.top=s.utils.toRatio(l.top,e.height),l.width=s.utils.toRatio(l.width,e.width),l.height=s.utils.toRatio(l.height,e.height),l.right=s.utils.toRatio(l.right,e.width),l.bottom=s.utils.toRatio(l.bottom,e.height),{snappedRect:l,delta:a}}addWidgetToLayout(o,i,n,a,l){return Qi(this,void 0,void 0,(function*(){const{layout:r,browserSizeMode:d}=this.props,u=(0,e.getAppConfigAction)(l),c=yield V(u.appConfig,o,r.id),{layoutInfo:p,updatedAppConfig:h}=c,g=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.FixedLayout).processAfterItemAdded(h,o,p,{currentSizeMode:d,containerRect:i,itemRect:n,insertIndex:null,others:{snapResult:a}});s.utils.changeLayout(g,p)}))}getPositionUnit(t){return Bi(this.props.layout.content[t].bbox,this.flipLeftRight)}createItem(e,o,i){const{itemResizable:n,itemDraggable:s,itemSelectable:a,showDefaultTools:l}=this.props,{offsetX:r,offsetY:d,dw:u,dh:c}=this.state,p=o===this.rndingLayoutId?r:0,h=o===this.rndingLayoutId?d:0,g=o===this.rndingLayoutId?u:0,m=o===this.rndingLayoutId?c:0,y=o===this.rndingLayoutId?this.resizingRect:void 0,f=o===this.rndingLayoutId?this.domRect:void 0,v=e.content[o];return(0,t.jsx)(Si,{key:`${e.id}_${o}`,index:i,layoutItem:v,offsetX:p,offsetY:h,dw:g,dh:m,initRect:y,containerRect:f,layoutId:e.id,layoutItemId:o,draggable:s,resizable:n,selectable:a,showDefaultTools:l,isLayoutLockChildren:this.layoutSetting.lockChildren,onResizeStart:this.handleResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,onMoveByKey:this.handleMoveItemByKey,isInSection:this.props.isInSection})}render(){const{layout:e,className:n,style:a,layouts:l,isPageItem:r,mainSizeMode:d,browserSizeMode:u}=this.props;return null==e?null:(0,t.jsx)(s.PageContext.Consumer,null,(c=>{var p,h;this.pageContext=c;let g=e;const m=l[u]!==e.id;m&&null!=this.layoutTransform&&(g=this.layoutTransform(e,d,u)),this.layoutSetting=t.lodash.assign({},i,m?{}:e.setting);const y=null!==(p=g.order)&&void 0!==p?p:[],f=(0,t.classNames)("layout fixed-layout",n,{[Ot]:null===(h=e.setting)||void 0===h?void 0:h.lockDescendants}),v=0!==this.state.dh||0!==this.state.dw,I=Object.assign(Object.assign(Object.assign({height:"auto",position:"relative"},a),o.styleUtils.toCSSStyle(this.layoutSetting.style)),{width:"100%",overflow:"hidden"}),x={display:this.state.isDragover||v?"block":"none",zIndex:y.length+1},b=!this.state.isLoadingTemplate&&s.utils.isEmptyLayout(g)&&!c.viewOnly&&e.id===c.rootLayoutId;return(0,t.jsx)("div",{className:f,ref:t=>{this.ref=t},onClick:this.handleActivate,onMouseDown:this.handleMouseDown,style:I,"data-layoutid":g.id},(0,t.jsx)(t.IntersectionContext.Provider,{value:{monitor:!1}},(0,t.jsx)(t.OneByOneAnimation,{oid:g.id,"data-layoutid":g.id,className:"trail-container",css:t.css`
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                  `},(0,t.jsx)(Ye,{css:tn,layouts:this.props.layouts,highlightDragover:!r,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect,isRepeat:this.props.isRepeat}),y.map(((t,e)=>this.createItem(g,t,e))))),b&&(0,t.jsx)(Ki,{pageContext:this.pageContext,onPageTemplateSelected:this.handlePageTemplateSelected}),this.state.isLoadingTemplate&&(0,t.jsx)(o.Loading,{type:o.LoadingType.Primary}),(0,t.jsx)("canvas",{css:en,style:x,ref:t=>{this.canvasRef=t}}))}))}}on.displayName="FixedLayout";const nn=t.ReactRedux.connect(s.utils.mapStateToLayoutProps)(on);function sn(t,e,o){const i=e.top+e.height/2;let n,s,a=!1;if(o.some(((t,e)=>{if(t.top+t.height/2>i){if(0===e)n=t.top/2;else{const i=o[e-1];n=(t.top+i.top+i.height)/2}a=!0,s=t.id}return a})),!a){const e=o[o.length-1];n=(e.top+e.height+t.height)/2}return{refId:s,insertY:n}}const an={min:16,space:10};class ln extends t.React.PureComponent{constructor(){super(...arguments),this.state={isResizing:!1,dw:0,dh:0},this.onResizeStart=(t,e,o)=>{this.initWidth=e,this.initHeight=o,this.props.onResizeStart(t),this.setState({isResizing:!0})},this.onResizing=(t,e,o,i,n)=>{this.props.onResizing(t,e,o,i,n),this.setState({dw:i,dh:n,isResizing:!0})},this.onResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:a}=this.props;this.props.onResizeEnd(t,e,o,i,n,a),this.setState({isResizing:!1,dw:0,dh:0})}}isStretchInCrossAxis(){const{layoutItem:t}=this.props;return function(t){var e,o;return(null===(o=null===(e=t.setting)||void 0===e?void 0:e.autoProps)||void 0===o?void 0:o.width)!==C.Custom}(t)}calHeight(t,e){return function(t,e){var o,i;return(null===(o=t.autoProps)||void 0===o?void 0:o.height)===C.Auto||"ratio"===t.heightMode?"ratio"===t.heightMode?{height:"auto",flex:"0 0 auto"}:{height:"auto"}:(null===(i=t.autoProps)||void 0===i?void 0:i.height)===C.Stretch||"fit"===t.heightMode?{flex:"1 1 auto"}:{height:e.height,flexShrink:0}}(t,e)}getStyle(e,o){const{layoutItem:i}=this.props,{dw:n,dh:s,isResizing:a}=this.state,l=i.bbox||{},r=this.calHeight(e,l);return r.width=o?"auto":l.width,a&&(n||s)&&(r.height=this.initHeight+s,r.width=this.initWidth+n),this.autoHeight="auto"===r.height,function(e,o,i){var n,s,a;const l=(null===(n=o.autoProps)||void 0===n?void 0:n.height)===C.Auto;return t.css`
    align-self: ${i?"stretch":null!==(a=null===(s=o.style)||void 0===s?void 0:s.alignSelf)&&void 0!==a?a:"auto"};
    width: ${z(e,"width")};
    height: ${z(e,"height")};
    flex: ${e.flex};
    flex-shrink: ${e.flexShrink};
    min-height: ${l?"unset":null};
  `}(r,e,o)}render(){var e,o;const{layoutId:i,layoutItem:n,draggable:a,resizable:l,selectable:r,showDefaultTools:d}=this.props;if(!n||n.isPending)return null;const u=n.setting||{},c=null!==(o=null===(e=u.autoProps)||void 0===e?void 0:e.height)&&void 0!==o?o:C.Custom,p=(0,t.classNames)("flexbox-layout-item",{"d-flex":c!==C.Auto}),h=this.isStretchInCrossAxis(),g=s.utils.shouldUseAspectRatio(u),m=s.utils.parseAspectRatio(u.aspectRatio),y=s.utils.handleOnebyOneAnimation(this.props);return(0,t.jsx)(zo,Object.assign({css:this.getStyle(u,h),layoutId:i,layoutItemId:n.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,left:!h,right:!h,top:!1,bottom:c===C.Custom&&!g,draggable:a,resizable:l,selectable:r,showDefaultTools:d,onClick:this.props.onClick,className:p,forceAspectRatio:g,aspectRatio:m,autoHeight:this.autoHeight},y))}}const rn=e=>t.css`
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
`,dn=t.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,un=t.css`
  ${dn};
  z-index: 20;
  pointer-events: none;
`,cn=10;class pn extends t.React.PureComponent{constructor(){super(...arguments),this.state={isDragover:!1},this.handleItemResizeStart=t=>{const{layout:e}=this.props;this.domRect=this.ref.getBoundingClientRect();const o=this.ref.querySelector(`div.exb-rnd[data-layoutid="${e.id}"][data-layoutitemid="${t}"]`).getBoundingClientRect();this.resizingRect=s.utils.relativeClientRect(o,this.domRect)},this.handleItemResizing=()=>null,this.handleItemResizeEnd=(t,o,i,n,a,l)=>{const{layout:r}=this.props,d=r.content[t].bbox;let u;u=s.utils.isPercentage(d.width)?`${(100*(this.resizingRect.width+n)/this.domRect.width).toFixed(4)}%`:`${Math.round(this.resizingRect.width+n)}px`;const c={width:u,height:Math.round(this.resizingRect.height+a)};this.childRects=[],this.domRect=null;(0,e.getAppConfigAction)().editLayoutItemProperty({layoutId:this.props.layout.id,layoutItemId:t},"bbox",c).exec()},this.handleDragOver=(e,o,i,n)=>{var s;let a=n;if(this.canvasPane.clear(),(null===(s=this.childRects)||void 0===s?void 0:s.length)>0){const{insertY:t,refId:e}=sn(i,a,this.childRects);this.referenceId=e,a={top:t-5+this.ref.scrollTop,width:i.width-cn,left:5,height:cn}}else a={top:i.height/2-5,width:i.width-cn,left:5,height:cn};this.canvasPane.setColor(t.polished.rgba(this.builderTheme.sys.color.primary.light,.5)),this.canvasPane.drawRect(a)},this.handleToggleDragoverEffect=t=>{t&&(this.referenceId=null,this.collectBounds(null)),this.setState({isDragover:t})},this.handleDrop=(o,i,n)=>{this.canvasPane.clear();const{layout:a}=this.props;let l=0;null!=this.referenceId?l=a.order.indexOf(this.referenceId):null!=a.order&&(l=a.order.length);V((0,e.getAppConfigAction)().appConfig,o,a.id).then((a=>{const{layoutInfo:r,updatedAppConfig:d}=a,u=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.ColumnLayout).processAfterItemAdded(d,o,r,{currentSizeMode:null,containerRect:i,itemRect:n,insertIndex:l});s.utils.changeLayout(u,r)})).finally(null),this.referenceId=null,this.childRects=[]}}componentDidMount(){this.canvasPane=new Ji(this.canvasRef),this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}componentDidUpdate(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.getBoundingClientRect();const o=this.ref.parentNode.querySelectorAll(`div[data-layoutid="${e.id}"] > .trail-container > div.exb-rnd`);return(null==o?void 0:o.length)>0&&o.forEach((o=>{const i=o.getAttribute("data-layoutitemid");if(t!==i&&e.order.includes(i)){const t=s.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=i,this.childRects.push(t)}})),this.childRects.sort(((t,e)=>t.top-e.top))}createItem(e,o,i){const{layout:n,itemDraggable:s,itemResizable:a,itemSelectable:l,showDefaultTools:r}=this.props;return(0,t.jsx)(ln,{key:e,index:o,space:i.space,layoutId:n.id,layoutItemId:e,layoutItem:n.content[e],draggable:s,resizable:a,selectable:l,showDefaultTools:r,onResizeStart:this.handleItemResizeStart,onResizing:this.handleItemResizing,onResizeEnd:this.handleItemResizeEnd})}isEmpty(){var t;const{layout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return!(o.length>0&&o.some((t=>!e.content[t].isPending)))}render(){var e;const{layout:i,className:n}=this.props,a=null!==(e=i.order)&&void 0!==e?e:[],l=Object.assign({},an,i.setting),r=this.isEmpty();return(0,t.jsx)(s.PageContext.Consumer,null,(e=>{this.builderTheme=e.builderTheme,this.theme=e.theme;const s={position:"relative",minWidth:l.min},d=(0,t.classNames)("layout column-layout",n),u={display:this.state.isDragover?"block":"none"};return(0,t.jsx)("div",{className:d,ref:t=>{this.ref=t},style:s,"data-layoutid":i.id},(0,t.jsx)(t.IntersectionContext.Provider,{value:{monitor:!0,layoutId:i.id}},(0,t.jsx)(t.OneByOneAnimation,{oid:i.id,className:"trail-container d-flex flex-column w-100",css:t.css`
                    position: ${r?"absolute":null};
                    padding: ${o.styleUtils.toCSSPadding(l.padding)};
                    ${rn(l)};
                  `},(0,t.jsx)(Ye,{css:dn,layouts:this.props.layouts,highlightDragover:!0,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),a.map(((t,e)=>this.createItem(t,e,l))))),r&&this.props.children,(0,t.jsx)("canvas",{css:un,style:u,ref:t=>{this.canvasRef=t}}))}))}}const hn=t.ReactRedux.connect(s.utils.mapStateToLayoutProps)(pn),gn={space:10,style:{padding:{number:[10,10,10,10],unit:o.DistanceUnits.PIXEL}}},mn={heightMode:"fixed",aspectRatio:1,offsetX:0,offsetY:0,style:{alignSelf:"flex-start"}},yn=12,fn=t.css`
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
`;function vn(e){return(0,t.Immutable)(e).set("left",yn-parseInt(e.left,10)-parseInt(e.width,10))}const In=t.css`
  position: absolute;
  left: 0;
  max-height: 40px;
  height: 20%;
  right: 0;
  z-index: ${s.LayoutZIndex.BoundaryDropArea};
  display: flex;
  pointer-events: all;
  display: flex;

  &.drop-active {
    background: transparent !important;
  }

  body:not(.design-mode) & {
    display: none !important;
  }
`,xn=t.css`
  ${In};
  top: 0;
`,bn=t.css`
  ${In};
  bottom: 0;
`;class wn extends t.React.PureComponent{constructor(o){super(o),this.state={isResizing:!1,dh:0},this.handleResizeStart=(t,e,o)=>{this.initWidth=e,this.initHeight=o,this.props.onResizeStart(t),this.setState({isResizing:!0})},this.handleResizing=(t,e,o,i,n)=>{this.props.onResizing(t,e,o,i,n),this.setState({dh:n,isResizing:!0})},this.handleResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:a}=this.props;this.props.onResizeEnd(t,e,o,i,n,a),this.setState({isResizing:!1,dh:0})},this.handleDropAtTop=(t,e,o)=>{this.dropAtBoundary(t,e,o,"top")},this.handleDropAtBottom=(t,e,o)=>{this.dropAtBoundary(t,e,o,"bottom")},this.dropAtBoundary=(o,i,n,a)=>{let l=(0,e.getAppConfigAction)();(function(o,i,n,a,l,r){return B(this,void 0,void 0,(function*(){var d;let u=(0,e.getAppConfigAction)(o);const c=o.layouts[l.layoutId].content[l.layoutItemId],p=E(),h=c.without("id").without("type").without("widgetId").without("sectionId").without("screenGroupId"),g=yield u.createWidget({uri:"widgets/layout/column/"}),m=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.RowLayout).createBlankItem(u.appConfig,l.layoutId);let y=m[0];const f=m[1],v=y.layouts[l.layoutId].order;u=(0,e.getAppConfigAction)(y),u.editLayoutProperty(l.layoutId,"order",[].concat(v,f));const I=Object.keys(g.layouts)[0],x=g.layouts[I],b=s.searchUtils.findLayoutId(x,p,u.appConfig.mainSizeMode),w=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.ColumnLayout),S=u.moveLayoutItem(l,b,p,p);y=w.processAfterItemAdded(u.appConfig,i,S,{currentSizeMode:null,containerRect:n,itemRect:a,insertIndex:0});const C=yield V(y,i,b);y=w.processAfterItemAdded(C.updatedAppConfig,i,C.layoutInfo,{currentSizeMode:null,containerRect:n,itemRect:a,insertIndex:"top"===r?0:1}),u=(0,e.getAppConfigAction)(y),u.editLayoutProperty(l.layoutId,`content.${l.layoutItemId}`,h).editLayoutItemProperty(l,"id",l.layoutItemId).editLayoutItemProperty(l,"type",t.LayoutItemType.Widget).editLayoutItemProperty(l,"widgetId",g.id).editLayoutItemProperty(S,"bbox.height",h.bbox.height).editWidgetProperty(g.id,`parent.${p}`,[l]);let R=h.bbox;const T=Math.round(parseFloat(R.height)+a.height+20);return R=R.set("height",`${T}px`),u.editLayoutItemProperty(l,"bbox",R),u.editLayoutProperty(l.layoutId,"content",u.appConfig.layouts[l.layoutId].content.without(f)),(null===(d=i.layoutInfo)||void 0===d?void 0:d.layoutId)===l.layoutId?u.editLayoutProperty(l.layoutId,"order",v.filter((t=>t!==i.layoutInfo.layoutItemId))):u.editLayoutProperty(l.layoutId,"order",v),{updatedAppConfig:u.appConfig,layoutInfo:l}}))})(l.appConfig,o,i,n,{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},a).then((({updatedAppConfig:t})=>{l=(0,e.getAppConfigAction)(t),l.exec()})).finally(null)},this.fakeTopLayouts=(0,t.Immutable)({[t.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[t.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[t.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.fakeBottomLayouts=(0,t.Immutable)({[t.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_blarge`,[t.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_bmedium`,[t.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_bsmall`})}isFunctionalWidget(){var e,o,i;const{layoutItem:n}=this.props;if(n.type===t.LayoutItemType.Widget){let s=!1;const a=null===(o=null===(e=(0,t.getAppStore)().getState().appConfig)||void 0===e?void 0:e.widgets)||void 0===o?void 0:o[n.widgetId];return null!=(null===(i=null==a?void 0:a.manifest)||void 0===i?void 0:i.properties)&&(s=a.manifest.widgetType===t.WidgetType.Layout||a.manifest.properties.hasEmbeddedLayout),!s}return!1}getStyle(e){const{gutter:o,layoutItem:i,isMultiRow:n}=this.props,{dh:a,isResizing:l}=this.state,r=i.bbox,d=s.utils.isRTL()?-1:1,u=function(t,e,o){var i,n,s,a,l,r,d,u,c,p,h,g,m,y;return o?{height:(null===(i=t.autoProps)||void 0===i?void 0:i.height)===C.Auto?"auto":e.height,alignSelf:null!==(s=null===(n=t.style)||void 0===n?void 0:n.alignSelf)&&void 0!==s?s:"flex-start"}:"ratio"===t.heightMode?{alignSelf:null!==(l=null===(a=t.style)||void 0===a?void 0:a.alignSelf)&&void 0!==l?l:"flex-start"}:(null===(r=t.autoProps)||void 0===r?void 0:r.height)===C.Auto?{height:"auto",alignSelf:null!==(u=null===(d=t.style)||void 0===d?void 0:d.alignSelf)&&void 0!==u?u:"flex-start"}:(null===(c=t.autoProps)||void 0===c?void 0:c.height)===C.Custom?{height:e.height,alignSelf:null!==(h=null===(p=t.style)||void 0===p?void 0:p.alignSelf)&&void 0!==h?h:"flex-start"}:(null===(g=t.autoProps)||void 0===g?void 0:g.height)===C.Stretch||"fit"===t.heightMode?{alignSelf:"stretch"}:parseFloat(e.height)>0?{height:e.height,alignSelf:null!==(y=null===(m=t.style)||void 0===m?void 0:m.alignSelf)&&void 0!==y?y:"flex-start"}:{alignSelf:"stretch"}}(e,r,n);return l&&0!==a&&(u.height=this.initHeight+a),function(e,o,i,n,s){var a,l,r,d;return e?[t.css`
        padding: ${i/2}px 0;
        height: ${z(n,"height")};
        align-self: ${n.alignSelf};
      `,0!==s.offsetX||0!==s.offsetY?`translate(${(null!==(a=s.offsetX)&&void 0!==a?a:0)*o}px, ${null!==(l=s.offsetY)&&void 0!==l?l:0}px)`:null]:[t.css`
      padding: 0 ${i/2}px;
      height: ${z(n,"height")};
      align-self: ${n.alignSelf};
    `,0!==s.offsetX||0!==s.offsetY?`translate(${(null!==(r=s.offsetX)&&void 0!==r?r:0)*o}px, ${null!==(d=s.offsetY)&&void 0!==d?d:0}px)`:null]}(n,d,o,u,e)}render(){var e;const{order:o,span:i,offset:n,layoutId:a,layoutItem:l,draggable:r,resizable:d,selectable:u}=this.props;if(null==l||l.isPending)return null;const c=t.lodash.assign({},mn,l.setting),p=s.utils.shouldUseAspectRatio(c),h=null===(e=c.autoProps)||void 0===e?void 0:e.height,g=(0,t.classNames)("row-layout-item d-flex",`col-${i}`,`offset-${n}`,`order-${o}`,{"fix-height":h===s.LayoutItemSizeModes.Custom}),m=this.isFunctionalWidget(),y=t.css`
      width: 100%;
      height: 10px;
      background: ${t.polished.rgba(this.props.builderTheme.sys.color.primary.light,.5)};
    `,f=s.utils.parseAspectRatio(c.aspectRatio),v=s.utils.handleOnebyOneAnimation(this.props),[I,x]=this.getStyle(c);return(0,t.jsx)(zo,Object.assign({css:I,style:{transform:x},layoutId:a,layoutItemId:l.id,onResizeStart:this.handleResizeStart,onResizing:this.handleResizing,onResizeEnd:this.handleResizeEnd,left:!0,right:!0,top:!1,bottom:h===s.LayoutItemSizeModes.Custom&&!p,draggable:r,resizable:d,selectable:u,onClick:this.props.onClick,className:g,forceAspectRatio:p,aspectRatio:f,autoHeight:h===s.LayoutItemSizeModes.Auto},v),(0,t.jsx)(t.React.Fragment,null,m&&(0,t.jsx)(Ye,{css:t.css`
                ${xn};
              `,layouts:this.fakeTopLayouts,highlightDragover:!0,onDrop:this.handleDropAtTop},(0,t.jsx)("div",{css:y})),m&&(0,t.jsx)(Ye,{css:t.css`
                ${bn};
              `,layouts:this.fakeBottomLayouts,highlightDragover:!0,onDrop:this.handleDropAtBottom},(0,t.jsx)("div",{css:t.css`${y};position: absolute; bottom:0;`}))))}}function Sn(t,e){let o=-1;return e.some(((e,i)=>e.id===t&&(o=i,!0))),o}function Cn(e,o,i,n){const a=n.map((e=>(0,t.Immutable)(e))),l=Sn(e,a);if(s.utils.isRTL()&&(o=0!==o?0:-i),o>0){const t=a[l],e=Math.min(o,t.width-1);return a[l]=t.set("left",t.left+e).set("width",t.width-e),a}if(o<0){let t=0;for(let e=0;e<l;e+=1)t+=Math.min(a[e].width,2);const e=a[l].left-t,i=Math.abs(o);if(e>0){let t=0;for(let e=l;e>=0;e-=1){const o=a[e];let n=0;if(e>0){const t=a[e-1];n=o.left-(t.left+t.width)}else n=o.left;if(0===n)continue;const s=t+n>=i?i-t:n;a[l]=a[l].set("width",a[l].width+s);for(let t=e;t<=l;t+=1)a[t]=a[t].set("left",a[t].left-s);if(t+n>=i)return a;t+=n}if(l>0)for(let e=l-1;e>=0;e-=1){const o=a[e],n=o.width-2;if(n<=0)continue;const s=t+n>=i?i-t:n;a[l]=a[l].set("width",a[l].width+s),a[e]=o.set("width",o.width-s);for(let t=e+1;t<=l;t+=1)a[t]=a[t].set("left",a[t].left-s);if(t+n>=i)return a;t+=n}}return a}if(i<0){const t=Math.min(Math.abs(i),a[l].width-1);return a[l]=a[l].set("width",a[l].width-t),a}if(i>0){let t=0;for(let e=l+1;e<a.length;e+=1)t+=Math.min(a[e].width,2);const e=i;if(yn-(a[l].left+a[l].width)-t>0){let t=0;for(let o=l;o<a.length;o+=1){const i=a[o];let n=0;if(o!==a.length-1){n=a[o+1].left-(i.left+i.width)}else n=yn-(i.left+i.width);if(0===n)continue;const s=t+n>=e?e-t:n;a[l]=a[l].set("width",a[l].width+s);for(let t=l+1;t<=o;t+=1)a[t]=a[t].set("left",a[t].left+s);if(t+n>=e)return a;t+=n}if(l!==a.length-1)for(let o=l+1;o<a.length;o+=1){const i=a[o],n=i.width-2;if(n<=0)continue;const s=t+n>=e?e-t:n;a[l]=a[l].set("width",a[l].width+s),a[o]=i.set("width",i.width-s);for(let t=l+1;t<=o;t+=1)a[t]=a[t].set("left",a[t].left+s);if(t+n>=e)return a;t+=n}}return a}return a}function Rn(e,o,i){const n=i.map((e=>(0,t.Immutable)(e))),s=Sn(e,n),a=n[s];return n.splice(s,1),Tn(a,o,n)}function Tn(e,o,i){const n=i.map((e=>(0,t.Immutable)(e)));let s=(0,t.Immutable)(e);const a=Math.max(o,0);if(s=s.set("left",a),null==n||0===n.length)return s=s.set("width",Math.min(s.width,yn-s.left)),[s];let l,r=n.length;const d=()=>{if(0===r)u=n[r].left,l=u;else{const t=n[r-1];u=r<n.length?n[r].left-(t.left+t.width):yn-(t.left+t.width),l=t.left+t.width+u}};n.some(((t,e)=>a<=t.left&&(r=e,!0)));let u=r<n.length?n[r].left-a:yn-a;if(u>=s.width)return n.splice(r,0,s),n;const c=u;if(d(),u>=s.width)return s=s.set("left",l-s.width),n.splice(r,0,s),n;u=c;for(let t=r;t<n.length;t+=1){const e=n[t];let o=0;if(t!==n.length-1){o=n[t+1].left-(e.left+e.width)}else o=yn-(e.left+e.width);if(0===o)continue;const i=u+o>=s.width?s.width-u:o;for(let e=r;e<=t;e+=1)n[e]=n[e].set("left",n[e].left+i);if(u+o>=s.width)return n.splice(r,0,s),n;u+=o}if(d(),u>=s.width)return s=s.set("left",l-s.width),n.splice(r,0,s),n;for(let t=r-1;t>=0;t-=1){const e=n[t];let o=0;if(t>0){const i=n[t-1];o=e.left-(i.left+i.width)}else o=e.left;if(0===o)continue;const i=u+o>=s.width?s.width-u:o;for(let e=t;e<=r-1;e+=1)n[e]=n[e].set("left",n[e].left-i);if(u+o>=s.width)return s=s.set("left",l-s.width),n.splice(r,0,s),n;u+=o}if(d(),u>=2)return s=s.set("left",l-u).set("width",u),n.splice(r,0,s),n;if(r!==n.length)for(let t=r;t<n.length;t+=1){const e=n[t],o=e.width-2;if(o<=0)continue;const i=u+o>=2?2-u:o;n[t]=e.set("width",e.width-i);for(let e=r;e<=t;e+=1)n[e]=n[e].set("left",n[e].left+i);if(u+o>=2)return s=s.set("left",n[r].left-2).set("width",2),n.splice(r,0,s),n;u+=o}if(d(),u>=2)return s=s.set("left",l-u).set("width",u),n.splice(r,0,s),n;for(let t=r-1;t>=0;t-=1){const e=n[t],o=e.width-2;if(o<=0)continue;const i=u+o>=2?2-u:o;n[t]=e.set("width",e.width-i);for(let e=t+1;e<=r-1;e+=1)n[e]=n[e].set("left",n[e].left-i);if(u+o>=2)return s=s.set("left",l-2).set("width",2),n.splice(r,0,s),n;u+=o}return n}function Mn(e){const{builderTheme:o,visible:i,gutter:n=0}=e;return(0,t.jsx)("div",{css:t.css`
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0px;
        position: absolute;
        z-index: 1;
        display: ${i?"flex":"none"};
      `},[0,1,2,3,4,5,6,7,8,9,10,11].map((e=>(0,t.jsx)("div",{key:e,css:t.css`
              width: 8.333333%;
            `},(0,t.jsx)("div",{css:t.css`
                padding-left: ${n/2}px;
                padding-right: ${n/2}px;
                height: 100%;
                width: 100%;
                overflow: hidden;
              `},(0,t.jsx)("div",{css:t.css`
                  transform: translateY(-5%);
                  border: 1px dashed ${t.polished.rgba(o.ref.palette.neutral[900],.6)};
                  height: 110%;
                  width: 100%;
                `}))))))}const An=t.css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`,Ln=t.css`
  ${An};
  bottom: 0;
  top: 0;
  z-index: ${s.LayoutZIndex.DragMoveTip};
  pointer-events: none;
`;class Pn extends t.React.PureComponent{constructor(o){super(o),this.state={isResizing:!1,updatingRects:null,isDragoverCenter:!1},this.handleItemResizeStart=t=>{this.domRect=this.ref.getBoundingClientRect(),this.setState({isResizing:!0})},this.handleItemResizing=(t,e,o,i,n)=>{const s=this.domRect.width/yn,a=Cn(t,Math.round(e/s),Math.round(i/s),this.childRects);this.setState({updatingRects:a})},this.handleItemResizeEnd=(t,o,i,n,a,l)=>{const{layout:r}=this.props,d=this.domRect.width/yn,u=Math.round(o/d),c=Math.round(n/d),p=(0,e.getAppConfigAction)();Cn(t,u,c,this.childRects).forEach((e=>{const o=r.content[e.id].bbox;let i=o.height;e.id===t&&(i=s.utils.isPercentage(o.height)?`${(parseFloat(e.height)+100*a/this.domRect.height).toFixed(4)}%`:`${Math.round(parseFloat(e.height)+a)}px`);const n={left:e.left,width:e.width,height:i};p.editLayoutItemProperty({layoutId:r.id,layoutItemId:e.id},"bbox",n)})),p.exec(),this.setState({isResizing:!1,updatingRects:null})},this.handleToggleDragoverCenterEffect=t=>{this.referenceId=null,t&&this.collectBounds(),this.setState({isDragoverCenter:t})},this.handleDragOver=(t,e,o,i,n,s)=>{var a;const l=null!==(a=t.layoutInfo)&&void 0!==a?a:{layoutId:null},r=this.reCalculateRects(t,o,i,n);let d;r.some((t=>(null==t.id||t.layoutId===l.layoutId&&t.id===l.layoutItemId)&&(d=t,!0)));let u=!0,c=d.left;if(this.flippedChildRects.some((t=>{if(t.layoutId===d.layoutId&&t.id===d.id)return!1;if(t.left<=d.left&&t.left+t.width>d.left&&(u=!1),!u){const e=r.find((e=>e.layoutId===t.layoutId&&e.id===t.id));return c=e.left+e.width<=d.left?t.left+t.width:t.left,!0}return!1})),this.dragInsertPos=c,this.canvasPane.clear(),u)this.canvasPane.drawRect({left:c*this.colWidth+this.space/2,top:0,width:d.width*this.colWidth-this.space,height:i.height});else{const t=Math.min(o.width-this.space/2,Math.max(0,c*this.colWidth-this.space/2));this.canvasPane.drawRect({left:t,top:0,width:10,height:o.height})}},this.handleDragEnter=()=>{this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight),this.canvasPane.setColor(t.polished.rgba(this.builderTheme.sys.color.primary.light,.5))},this.handleDragLeave=()=>{this.canvasPane.clear()},this.handleDrop=(o,i,n)=>{const{layout:a}=this.props,l=(0,e.getAppConfigAction)(),{addedItemRect:r,insertIndex:d,appConfig:u}=this.calDropPosition(l.appConfig,o,i,n,!1);null!=r?V(u,o,a.id).then((n=>{const{layoutInfo:a,updatedAppConfig:l}=n,u=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.RowLayout).processAfterItemAdded(l,o,a,{currentSizeMode:null,containerRect:i,itemRect:r,insertIndex:d});s.utils.changeLayout(u,a)})).finally(null):s.utils.changeLayout(u,o.layoutInfo),this.canvasPane.clear()},this.flipLeftRight=s.utils.isRTL()}componentDidMount(){this.canvasPane=new Ji(this.guideDragOverRef)}getConfig(){var t;const{layout:e}=this.props;return null!==(t=e.setting)&&void 0!==t?t:gn}reCalculateRects(t,e,o,i){var n,s;const a=null!==(n=t.layoutInfo)&&void 0!==n?n:{layoutId:null},{layout:l}=this.props,r=this.getConfig();this.space=null!==(s=r.space)&&void 0!==s?s:0;const d=this.maxPageWidth>0?Math.min(this.maxPageWidth,e.width):e.width,u=i-(e.width-d)/2,c=o.left-(e.width-d)/2;this.colWidth=d/yn;const p=Math.round(u/this.colWidth),h=Math.round(c/this.colWidth),g=Math.max(1,Math.ceil(o.width/this.colWidth)),m=function(t,e,o,i,n,s){var a;let l;const r=null!==(a=e.layoutInfo)&&void 0!==a?a:{layoutId:null},d=r.layoutId===t;return s.some((t=>(!d||t.id!==r.layoutItemId)&&(t.left>=o&&t.left<o+i||o>=t.left&&o<t.left+t.width)))?(s.some(((t,e)=>{if(d&&t.id===r.layoutItemId)return!1;if(n>=t.left&&n<=t.left+t.width)return n>=t.left&&n<t.left+t.width/2?(l=t.left,!0):(l=t.left+t.width,!0);if(o<t.left&&o+i>t.left){let o=0;if(0===e)o=t.left;else{let i;for(let t=e-1;t>=0&&(i=s[t],d&&i.id===r.layoutItemId);t-=1);o=null!=i?t.left-(i.left+i.width):t.left}return l=o>=i?t.left-i:t.left-o,!0}return o>t.left&&o<t.left+t.width&&(l=t.left+t.width,!0)})),l):o}(l.id,t,h,g,p,this.flippedChildRects);return null==t.id&&this.isInRow(a)?Rn(a.layoutItemId,m,this.flippedChildRects):Tn({width:g,height:o.height,layoutId:a.layoutId,id:a.layoutItemId},m,this.flippedChildRects)}calDropPosition(t,o,i,n,s){var a;const l=this.maxPageWidth>0?Math.min(this.maxPageWidth,i.width):i.width,r=null!==(a=o.layoutInfo)&&void 0!==a?a:{layoutId:null},{layout:d}=this.props,u=l/yn,c=this.dragInsertPos,p=Math.max(1,Math.ceil(n.width/u)),h=(0,e.getAppConfigAction)(t);let g,m,y;return g=!s&&null==o.id&&this.isInRow(r)?Rn(r.layoutItemId,c,this.flippedChildRects):Tn({width:p,height:n.height,layoutId:r.layoutId,id:r.layoutItemId},c,this.flippedChildRects),g.forEach(((t,e)=>{var i;let n={left:t.left,width:t.width,height:t.height};if(this.flipLeftRight&&(n=vn(n)),t.layoutId===d.id)h.editLayoutItemProperty({layoutId:t.layoutId,layoutItemId:t.id},"bbox",n),t.id===(null===(i=o.layoutInfo)||void 0===i?void 0:i.layoutItemId)&&null!=o.id&&h.setLayoutItemToPending({layoutId:t.layoutId,layoutItemId:t.id},!1);else{m=n,y=0+e}})),{addedItemRect:m,insertIndex:y,appConfig:h.appConfig}}isInRow(t){const{layout:e}=this.props;return(null==t?void 0:t.layoutId)===e.id}collectBounds(){var t;const{transformedLayout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return this.childRects=[],o.forEach((t=>{var o,i;if(e.content[t].isPending)return;const n=null===(i=null===(o=e.content)||void 0===o?void 0:o[t])||void 0===i?void 0:i.bbox;null!=n&&this.childRects.push({layoutId:e.id,id:t,left:parseInt(n.left,10),width:parseInt(n.width,10),height:n.height})})),this.childRects.sort(((t,e)=>t.left-e.left)),this.flipLeftRight?(this.flippedChildRects=[],this.childRects.forEach((t=>{let e={left:t.left,width:t.width,height:t.height};e=vn(e),this.flippedChildRects.push({layoutId:t.layoutId,id:t.id,left:e.left,width:e.width,height:e.height})})),this.flippedChildRects.sort(((t,e)=>t.left-e.left))):this.flippedChildRects=this.childRects,this.childRects}createItem(e,o){var i;const{transformedLayout:n,itemDraggable:s,itemResizable:a,itemSelectable:l,isMultiRow:r}=this.props,d=this.getConfig(),u=e[o],c=null!==(i=d.space)&&void 0!==i?i:0;let p;if(0===o)p=u.left;else{const t=e[o-1];p=u.left-t.left-t.width}return(0,t.jsx)(wn,{key:`${u.layoutId}_${u.id}`,order:o+1,offset:p,span:u.width,gutter:c,isMultiRow:r,builderTheme:this.builderTheme,layoutId:n.id,layoutItemId:u.id,layoutItem:n.content[u.id],draggable:s,resizable:a,selectable:l,onResizeStart:this.handleItemResizeStart,onResizing:this.handleItemResizing,onResizeEnd:this.handleItemResizeEnd})}render(){var e;const{transformedLayout:o,className:i}=this.props,{isResizing:n,isDragoverCenter:a}=this.state,l=this.getConfig(),r=a;let d;n&&null!=this.state.updatingRects?d=this.state.updatingRects:(this.collectBounds(),d=this.childRects);const u=null!==(e=l.space)&&void 0!==e?e:0;return(0,t.jsx)(s.PageContext.Consumer,null,(e=>(this.maxPageWidth=e.maxWidth,this.builderTheme=e.builderTheme,(0,t.jsx)("div",{className:(0,t.classNames)("row-layout",i,{"row-rtl":this.flipLeftRight}),css:fn,"data-layoutid":o.id},(0,t.jsx)("div",{css:t.css`
                width: 100%;
                max-width: ${e.maxWidth>0?`${e.maxWidth}px`:"none"};
              `},(0,t.jsx)("div",{ref:t=>{this.ref=t},css:t.css`
                    position: relative;
                    height: 100%;
                    margin-left: ${-u/2}px;
                    margin-right: ${-u/2}px;
                    display: flex;
                    flex-direction: column;
                    .row {
                      overflow: ${this.props.isMultiRow?"auto":"unset"};
                    }
                    & > .jimu-widget-placeholder {
                      width: calc(100% - ${u}px);
                      align-self: center;
                    }
                  `},(0,t.jsx)(t.IntersectionContext.Provider,{value:{monitor:!1}},(0,t.jsx)(t.OneByOneAnimation,{className:(0,t.classNames)("row m-0",{"flex-nowrap":!this.props.isMultiRow,"h-100":d.length>0}),oid:o.id,"data-layoutid":o.id},(0,t.jsx)(Ye,{css:An,layouts:this.props.layouts,highlightDragover:!1,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverCenterEffect}),d.map(((t,e)=>this.createItem(d,e))))),0===d.length&&this.props.children,(0,t.jsx)(Mn,{visible:r||n,builderTheme:e.builderTheme,gutter:u}),(0,t.jsx)("canvas",{css:t.css`
                      ${Ln};
                      display: ${r?"block":"none"};
                    `,ref:t=>{this.guideDragOverRef=t}})))))))}}class jn extends t.React.PureComponent{constructor(e){super(e),this.layoutConRef=t.React.createRef(),this.onResize=({width:t,height:e})=>{var o;if(this.props.browserSizeMode!==this.props.mainSizeMode)return;if(0===e)return;const{widgetId:i}=this.props;null!=(null===(o=window.runtimeInfo.widgets)||void 0===o?void 0:o[i])?window.runtimeInfo.widgets[i].height=e:window.runtimeInfo.widgets[i]={height:e}},this.handleDebounceResize=t.lodash.debounce(this.onResize,200)}findExtension(){const e=t.ExtensionManager.getInstance().getExtensions(`${t.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const t=e.find((t=>"ROW"===t.layoutType));this.layoutTransform=null==t?void 0:t.transformLayout}}collectRowItems(){var t;const{layout:e,layouts:o,browserSizeMode:i,mainSizeMode:n}=this.props;null==this.layoutTransform&&this.findExtension();let a=e;o[i]!==e.id&&null!=this.layoutTransform&&(a=this.layoutTransform(e,n,i,s.utils.getAppConfig())),this.finalLayout=a;const l=null!==(t=a.order)&&void 0!==t?t:[],r=[];let d=[],u=0;return r.push(d),l.forEach((t=>{if(a.content[t].isPending)return;const e=a.content[t].bbox,o=parseInt(e.left,10),i=Math.floor(o/yn);i>u&&(d=[],u=i,r.push(d)),d.push(t)})),r}createRow(){const{layout:e,layouts:o}=this.props;return(0,t.jsx)(Pn,{layouts:o,layout:e,transformedLayout:this.finalLayout,isMultiRow:this.numOfRows>1},this.props.children)}render(){var e,i;const{layout:n,className:s}=this.props,a=null!==(i=(null!==(e=n.setting)&&void 0!==e?e:gn).style)&&void 0!==i?i:gn.style;return this.numOfRows=this.collectRowItems().length,(0,t.jsx)("div",{className:(0,t.classNames)("layout d-flex",s),css:t.css`
          width: 100%;
          padding: ${o.styleUtils.toCSSPadding(a.padding)};
        `,"data-layoutid":n.id,ref:this.layoutConRef},this.createRow(),(0,t.jsx)(t.ReactResizeDetector,{targetRef:this.layoutConRef,handleHeight:!0,onResize:this.handleDebounceResize}))}}const zn=t.ReactRedux.connect(s.utils.mapStateToLayoutProps)(jn);var Nn;function kn(t,e){var o;return null===(o=t.content)||void 0===o?void 0:o[e]}function $n(e,o,i){var n,s,a,l,r,d,u;const{layoutId:c,layoutItemId:p}=o,h=e.layouts[c].content[p];if((null==h?void 0:h.type)===t.LayoutItemType.Widget){const t=e.widgets[h.widgetId];return t?null!==(s=null!==(n=null==t?void 0:t.label)&&void 0!==n?n:h.label)&&void 0!==s?s:h.id:i("placeholder")}if((null==h?void 0:h.type)===t.LayoutItemType.Section){return e.sections[h.sectionId].label}return(null==h?void 0:h.gridType)===t.GridItemType.Row?null!==(a=h.label)&&void 0!==a?a:i("gridRow"):(null==h?void 0:h.gridType)===t.GridItemType.Column?null!==(l=h.label)&&void 0!==l?l:i("gridCol"):(null==h?void 0:h.gridType)===t.GridItemType.Tab?null!==(r=h.label)&&void 0!==r?r:i("tabs"):null!==(u=null!==(d=null==h?void 0:h.label)&&void 0!==d?d:null==h?void 0:h.id)&&void 0!==u?u:""}function En(t,e){const o={id:`${s.utils.getMaximumId(t)+1}`,gridType:e};return{outLayout:t.setIn(["content",o.id],o),outItem:o}}function On(t,e,o){return t.setIn(["content",e,"bbox"],{width:o})}function Bn(t,e,o,i){return t.setIn(["content",e,o],i)}function Dn(t,e,o,i,n){const s=kn(t,o),a=[].concat(s.children),l=n?i:i+1;return a.splice(l,0,e),Bn(t,o,"children",a)}function Fn(e,o,i,n,s,a){const l=kn(e,i),{parent:r}=l,d=+l.bbox.width,u=kn(e,r),c=En(e,n);let p=c.outLayout;const h=c.outItem;if(p=Bn(p,h.id,"parent",r),p=On(p,h.id,d),u){const t=u.children.indexOf(i);p=function(t,e,o,i){const n=[...kn(t,o).children];return n.splice(i,1,e),Bn(t,o,"children",n)}(p,h.id,r,t)}return p=Bn(p,o,"parent",h.id),p=Bn(p,i,"parent",h.id),p=On(p,o,a?100:50),p=On(p,i,a?100:50),p=Bn(p,h.id,"children",s?[o,i]:[i,o]),n===t.GridItemType.Tab&&(p=Bn(p,h.id,"activeTab",1)),i===p.setting.rootItem&&(p=p.setIn(["setting","rootItem"],h.id)),p}function Hn(e,o,i,n,s,a){const l=kn(e,o),{gridType:r}=l;switch(r){case t.GridItemType.Column:case t.GridItemType.Row:return function(e,o,i,n,s,a){const l=o.gridType,r=kn(e,i),{parent:d}=r,u=+r.bbox.width,c=kn(e,d);let p=e;if((null==c?void 0:c.gridType)===n){const e=c.children.indexOf(i);if(l===n){const t=o.children,n=[...c.children];s?n.splice(e,0,...t):n.splice(e+1,0,...t),p=Bn(p,d,"children",n),p=p.set("content",p.content.without(o.id)),t.forEach((t=>{const e=+p.content[t].bbox.width;p=On(p,t,e*u/200),p=Bn(p,t,"parent",d)})),p=On(p,i,u/2)}else p=Dn(p,o.id,d,e,s),p=Bn(p,o.id,"parent",d),p=On(p,o.id,a?100:u/2),p=On(p,i,a?100:u/2),n===t.GridItemType.Tab&&(p=Bn(p,d,"activeTab",e+1));return p}if(l===n){const t=c.children.indexOf(i);p=Dn(p,i,o.id,s?o.children.length:0,!s),p=Bn(p,i,"parent",o.id),p=On(p,i,50),o.children.forEach((t=>{const e=+p.content[t].bbox.width;p=On(p,t,.5*e)}));const e=[...c.children];return e.splice(t,1,o.id),p=Bn(p,d,"children",e),p=Bn(p,o.id,"parent",d),p}return Fn(p,o.id,i,n,s,a)}(e,l,i,n,s,a);case t.GridItemType.Tab:return function(e,o,i,n,s,a){const l=kn(e,i),{parent:r}=l,d=+l.bbox.width,u=kn(e,r);let c=e;if(n===t.GridItemType.Tab){if((null==u?void 0:u.gridType)===t.GridItemType.Tab){const t=u.children.indexOf(i),n=[].concat(u.children);return n.splice(t+1,0,...o.children),c=Bn(e,r,"children",n),o.children.forEach((t=>{c=Bn(c,t,"parent",r)})),c=c.set("content",c.content.without(o.id)),c}const n=u.children.indexOf(i),s=[].concat(u.children);return s.splice(n,1,o.id),c=Bn(e,r,"children",s),c=Dn(c,i,o.id,0,!0),c=Bn(c,i,"parent",o.id),c=Bn(c,o.id,"parent",r),c}if((null==u?void 0:u.gridType)===n){const t=u.children.indexOf(i);return c=Dn(c,o.id,r,t,s),c=Bn(c,o.id,"parent",r),c=On(c,o.id,a?100:d/2),c=On(c,i,a?100:d/2),c}return Fn(c,o.id,i,n,s,a)}(e,l,i,n,s,a);default:return function(e,o,i,n,s,a){const l=kn(e,i),{parent:r}=l,d=+l.bbox.width,u=kn(e,r);let c=e;if((null==u?void 0:u.gridType)===n){const e=u.children.indexOf(i);return c=Dn(c,o.id,r,e,s),c=Bn(c,o.id,"parent",r),c=On(c,o.id,a?100:d/2),c=On(c,i,a?100:d/2),n===t.GridItemType.Tab&&(c=Bn(c,r,"activeTab",e+1)),c}return Fn(c,o.id,i,n,s,a)}(e,l,i,n,s,a)}}function Vn(o,i){const{layoutId:n,layoutItemId:s}=o,a=(0,e.getAppConfigAction)(),{layouts:l}=a.appConfig;let r=l[n];const d=En(r,t.GridItemType.Plain);r=d.outLayout,r=r.setIn(["content",d.outItem.id,"type"],t.LayoutItemType.Widget);const u=r.content[d.outItem.id];r=Hn(r,u.id,s,"h"===i?t.GridItemType.Row:t.GridItemType.Column,!1,!1);const c=a.appConfig.setIn(["layouts",n],r);(0,e.getAppConfigAction)(c).exec()}!function(t){t.Top="top",t.Bottom="bottom",t.Left="left",t.Right="right",t.Center="center"}(Nn||(Nn={}));var Wn=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}r((i=i.apply(t,e||[])).next())}))};function Gn(e,o,i){return Wn(this,void 0,void 0,(function*(){var n;const{layoutInfo:{layoutId:s,layoutItemId:a},updatedAppConfig:l}=yield V(e,o,i.layoutId);let r=l;return(null===(n=o.layoutInfo)||void 0===n?void 0:n.layoutId)!==i.layoutId&&(r=l.setIn(["layouts",s,"content",a,"gridType"],t.GridItemType.Plain)),{newLayoutItemId:a,updatedAppConfig:r}}))}function Un(e,o,i,n,s){return Wn(this,void 0,void 0,(function*(){const{layoutId:a}=i;let l=e;const r=yield Gn(e,o,i),d=r.newLayoutItemId;if(l=r.updatedAppConfig,n){const e=function(e,o,i,n){switch(n){case Nn.Center:return Hn(e,o,i,t.GridItemType.Tab,!1,!0);case Nn.Top:return Hn(e,o,i,t.GridItemType.Column,!0,!1);case Nn.Bottom:return Hn(e,o,i,t.GridItemType.Column,!1,!1);case Nn.Left:return Hn(e,o,i,t.GridItemType.Row,!0,!1);case Nn.Right:return Hn(e,o,i,t.GridItemType.Row,!1,!1)}}(l.layouts[a],d,n,s);l=l.setIn(["layouts",a],e)}else l=l.setIn(["layouts",a,"content",d,"bbox"],{width:100}).setIn(["layouts",a,"content",d,"gridType"],t.GridItemType.Plain).setIn(["layouts",a,"setting","rootItem"],d);return{appConfig:l,layoutInfo:{layoutId:a,layoutItemId:d}}}))}function _n(t,e){const o=t.content[e],{parent:i}=o;if(!i)return t.setting.rootItem===e?t.setIn(["setting","rootItem"],null):t;let n=t.setIn(["content",e],o.without("parent"));const s=t.content[i];if(!s||null==(null==s?void 0:s.children))return t;const a=s.children.indexOf(e);if(a<0)return t;const l=s.children.filter((t=>t!==e));if(1===l.length){const e=l[0];if(n=n.setIn(["content",e,"bbox","width"],s.bbox.width),null!=s.parent){n=n.setIn(["content",e,"parent"],s.parent);const o=t.content[s.parent];if(o){const t=[...o.children],a=t.indexOf(i);t.splice(a,1,e),n=n.setIn(["content",s.parent,"children"],t)}}else n=n.setIn(["content",e],n.content[e].without("parent")),n=n.setIn(["setting","rootItem"],e);n=n.set("content",n.content.without(i))}else if(l.length>1){if(a<l.length){const t=n.content[l[a]];n=n.setIn(["content",l[a],"bbox","width"],t.bbox.width+o.bbox.width)}else{const t=n.content[l[l.length-1]];n=n.setIn(["content",l[l.length-1],"bbox","width"],t.bbox.width+o.bbox.width)}n=n.setIn(["content",i,"children"],l)}return n}var Yn=p(5196),Xn=p.n(Yn),Zn=p(1625),qn=p.n(Zn);const Kn=[{icon:Xn(),autoFlipIcon:!0,title:t=>t.formatMessage("splitHorizontally"),visible:()=>!lt(),onClick:t=>{const{layoutId:e,layoutItem:o}=t;Vn({layoutId:e,layoutItemId:o.id},"h")}},{icon:qn(),title:t=>t.formatMessage("splitVertically"),visible:()=>!lt(),onClick:t=>{const{layoutId:e,layoutItem:o}=t;Vn({layoutId:e,layoutItemId:o.id},"v")}},{icon:Q(),title:t=>t.formatMessage("duplicate"),visible:()=>!lt(),onClick:t=>{const{layoutId:o,layoutItem:i}=t;!function(t){const{layoutId:o,layoutItemId:i}=t,n=(0,e.getAppConfigAction)(),s={layoutId:o,layoutItemId:n.duplicateLayoutItemInSameLayout({layoutId:o,layoutItemId:i})};F(n.appConfig,s)}({layoutId:o,layoutItemId:i.id})}},ft,{icon:Z(),title:t=>t.formatMessage("pendingTip"),visible:e=>{const{layoutItem:o}=e,i=o.type===t.LayoutItemType.Widget&&null==o.widgetId;return at()===t.AppMode.Design&&!lt()&&!i},onClick:t=>{const{layoutId:o,layoutItem:i}=t;!function(t){const o=(0,e.getAppConfigAction)();o.setLayoutItemToPending(t,!0),F(o.appConfig,null)}({layoutId:o,layoutItemId:i.id})}},{icon:Y(),title:t=>t.formatMessage("delete"),visible:e=>at()===t.AppMode.Design&&(!lt()||ct(e.layoutItem)),onClick:t=>{const{layoutItem:o,layoutId:i}=t,n={layoutId:i,layoutItemId:o.id};e.appBuilderSync.publishConfirmDeleteToApp(n)}}];var Jn=p(462),Qn=p.n(Jn),ts=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const es=e=>{const o=window.SVG,{className:i}=e,n=ts(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:Qn()},n)):t.React.createElement("svg",Object.assign({className:s},n))};var os=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const is=e=>{const o=window.SVG,{className:i}=e,n=os(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:ci()},n)):t.React.createElement("svg",Object.assign({className:s},n))};var ns=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const ss=e=>{const o=window.SVG,{className:i}=e,n=ns(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:At()},n)):t.React.createElement("svg",Object.assign({className:s},n))},as=(0,u.withBuilderTheme)(He.WidgetListPopper),ls=[].concat(Nt,Kn),rs=t.css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
`,ds=t.css`
  ${rs};
  pointer-events: none;
`,us=e=>{const o=(0,u.getTheme2)();return t.css`
    & > .max-grid-item-btn {
      display: none;
      background: var(--ref-palette-neutral-500);
      width: 26px;
      height: 26px;
      position: absolute;
      top: 0;
      right: 0;
    }

    & > .layout-widget > .add-btn {
      display: ${e?"none":"block"};
    }

    & > .add-btn {
      z-index: 20;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .lock-mask {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 20;
      pointer-events: none;
      transition: all 400ms;

      .mask {
        width: 100%;
        height: 100%;
        background: ${o.ref.palette.white};
        opacity: 0.1;
      }

      .lock-btn {
        background: ${t.polished.rgba(o.ref.palette.white,.6)};
        border-color: ${o.ref.palette.black} !important;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
        width: 38px;
        height: 38px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: all 400ms;
        pointer-events: all;
      }

      &.unlock {
        width: 32px;
        height: 32px;

        .mask {
          background: transparent;
        }

        .lock-btn {
          width: 26px;
          height: 26px;
        }
      }
    }

    body:not(.design-mode) &:hover > .max-grid-item-btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `},cs=t.css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 30;
  background: var(--ref-palette-neutral-200);
`;function ps(i){const{layoutId:n,layoutItemId:a,onDragStart:l,onDragging:r,onDragEnd:d,delay:c,isLastChild:p,className:h}=i,[g,m]=t.React.useState(!1),[y,f]=t.React.useState(!1),[v,I]=t.React.useState(!0),x=t.React.useRef(),b=t.React.useRef(),w=t.React.useRef(),S=t.React.useRef(!1),C=t.React.useRef(),R=(0,u.getTheme2)(),T=t.hooks.useTranslation(Jt),M=t.ReactRedux.useSelector((t=>function(t,e,o){var i,n;const s=t.appConfig.layouts[e],a=s.content[o];if(null!==(i=null==a?void 0:a.expandable)&&void 0!==i&&!i)return!1;const l=null===(n=null==s?void 0:s.setting)||void 0===n?void 0:n.rootItem;let r=!1;if(l===o){const t=kn(s,l);null!=t.children&&0!==t.children.length||(r=!0)}return!r}(t,n,a))),A=t.ReactRedux.useSelector((e=>{var o,i,n;const s=null!==(n=null===(i=null===(o=e.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return!(e.appRuntimeInfo.appMode===t.AppMode.Design)||s})),L=t.ReactRedux.useSelector((e=>{var o,i,s;const l=e.appConfig.layouts[n].content[a];if((null==l?void 0:l.type)===t.LayoutItemType.Section)return!0;if((null==l?void 0:l.type)===t.LayoutItemType.Widget){const n=e.appConfig.widgets[l.widgetId];if((null===(o=null==n?void 0:n.manifest)||void 0===o?void 0:o.widgetType)===t.WidgetType.Layout||(null===(s=null===(i=null==n?void 0:n.manifest)||void 0===i?void 0:i.properties)||void 0===s?void 0:s.hasEmbeddedLayout))return null!=n.layouts}return!1})),P=t.ReactRedux.useSelector((e=>{const o=e.appConfig.layouts[n].content[a];return(null==o?void 0:o.type)===t.LayoutItemType.Widget&&null==(null==o?void 0:o.widgetId)})),j=t.ReactRedux.useSelector((e=>{const o=e.appConfig.layouts[n].content[a];return(null==o?void 0:o.type)===t.LayoutItemType.Section})),z=t.React.useMemo((()=>(0,t.Immutable)({[t.BrowserSizeMode.Large]:`${n}_${a}_tlarge`,[t.BrowserSizeMode.Medium]:`${n}_${a}_tmedium`,[t.BrowserSizeMode.Small]:`${n}_${a}_tsmall`})),[n,a]);t.hooks.useEffectOnce((()=>{const t=(0,u.getTheme)();x.current=new Ji(b.current,t)}));const N=t.hooks.useEventCallback((({width:t,height:e})=>{t&&e&&x.current.setSize(t,e,window.devicePixelRatio)})),k=t.hooks.useEventCallback((t=>{S.current=t,document.querySelectorAll("div.grid-layout").forEach((e=>{e.getAttribute("data-layoutid")===n?t&&!e.classList.contains("drop-target")&&e.classList.add("drop-target"):e.classList.contains("drop-target")&&e.classList.remove("drop-target")})),x.current.clear()})),$=t.React.useCallback(((e,o,i,n,s,a)=>{if(!S.current)return;const{width:l,height:r}=i;x.current.clear();const d=(0,u.getTheme)();if(x.current.setColor(t.polished.rgba(d.sys.color.primary.light,.2)),P&&Ae(e))return void x.current.drawRect({left:0,top:0,width:l,height:r});let c;c=a<=.2*r?{left:0,top:0,width:l,height:r/2}:a>=.8*r?{left:0,top:r/2,width:l,height:r/2}:s<=.2*l?{left:0,top:0,width:l/2,height:r}:s>=.8*l?{left:l/2,top:0,width:l/2,height:r}:{left:.2*l,top:.2*r,width:.6*l,height:.6*r},x.current.drawRect(c)}),[P]),E=t.React.useCallback(((o,i,l,r,d)=>{let u=(0,e.getAppConfigAction)();if(P&&Ae(o))return void Pe({layoutId:n,layoutItemId:a},o);const{width:c,height:p}=i;let h;h=d<=.2*p?Nn.Top:d>=.8*p?Nn.Bottom:r<=.2*c?s.utils.isRTL()?Nn.Right:Nn.Left:r>=.8*c?s.utils.isRTL()?Nn.Left:Nn.Right:Nn.Center;const g={layoutId:n};Un(u.appConfig,o,g,a,h).then((o=>{const{appConfig:i,layoutInfo:n}=o;u=(0,e.getAppConfigAction)(i),u.exec(),(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(n))}))}),[P,n,a]),O=t.React.useCallback((e=>{e.itemType===t.LayoutItemType.Section?je({layoutId:n,layoutItemId:a}):ze({layoutId:n,layoutItemId:a},e),f(!1)}),[n,a]),B=t.React.useCallback((o=>{o.stopPropagation(),(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?f(!y):e.appBuilderSync.publishSidePanelToApp({type:"widget",isPlaceholder:!0,isItemAccepted:Ae,onSelect:O})}),[y,O]),D=t.React.useCallback((()=>{m(!g)}),[g]),F=t.React.useCallback((()=>{I(!v)}),[v]);return(0,t.jsx)(zo,{layoutId:n,layoutItemId:a,resizable:!1,className:h,showDefaultTools:!1,toolItems:j?ls:Kn,delay:c,isLastChild:p,onDragStart:l,onDragging:r,onDragEnd:d,css:t.css`${us(P)};${g?cs:""}`},(!L||v)&&!A&&(0,t.jsx)(Ye,{css:rs,layouts:z,highlightDragover:!0,onDragOver:$,onDrop:E,onToggleDragoverEffect:k}),P&&(0,t.jsx)("div",{className:"add-btn"},(0,t.jsx)(qe,{title:T("addWidget")},(0,t.jsx)(o.Button,{icon:!0,ref:C,css:t.css`width: 36px; height: 36px; padding: 0.5rem;`,onClick:B,"aria-haspopup":!0},(0,t.jsx)(Ze,null)))),P&&y&&(0,t.jsx)(as,{referenceElement:C.current,isAccepted:Ae,onSelect:O,onClose:()=>{f(!1)}}),(0,t.jsx)("canvas",{css:ds,ref:b}),(0,t.jsx)("div",{css:t.css`
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: transparent;
        pointer-events: none;
      `,ref:w}),(0,t.jsx)(t.ReactResizeDetector,{handleWidth:!0,handleHeight:!0,onResize:N,targetRef:w}),M&&(0,t.jsx)(o.Button,{icon:!0,type:"tertiary",className:"max-grid-item-btn p-0",onClick:D,title:T(g?"restore":"maximize")},g&&(0,t.jsx)(ss,null),!g&&(0,t.jsx)(es,null)),L&&!A&&(0,t.jsx)("div",{className:(0,t.classNames)("lock-mask",{unlock:!v})},(0,t.jsx)("div",{className:"mask"}),(0,t.jsx)(o.Tooltip,{title:T(v?"unlockGridItem":"lockGridItem")},(0,t.jsx)(o.Button,{className:"lock-btn rounded-circle",size:"sm",type:"tertiary",icon:!0,onClick:F},!v&&(0,t.jsx)(is,{size:14,color:R.ref.palette.black}),v&&(0,t.jsx)(Ee,{size:20,color:R.ref.palette.black})))))}const hs=32;function gs(t,e,o,i,n,s){let a=i,l=n;if("row"===o){const o=s?e.width:t.width,n=s?t.width:e.width;i<0&&(a=o>hs?-Math.min(Math.abs(i),o-hs):0),i>0&&(a=n>hs?Math.min(i,n-hs):0)}else n<0&&(l=t.height>hs?-Math.min(Math.abs(n),t.height-hs):0),n>0&&(l=e.height>hs?Math.min(n,e.height-hs):0);return{x:a,y:l}}function ms(e){const o=e.getAttribute("data-layoutid"),i=e.getAttribute("data-layoutitemid");return+(0,t.getAppStore)().getState().appConfig.layouts[o].content[i].bbox.width}function ys(e){var o,i;const{referenceItemId:n,direction:s,layoutId:a,onResizeEnd:l}=e,r=t.React.useRef(),d=t.React.useRef(),u=t.React.useRef(null),c=null!==(i=null===(o=(0,t.getAppStore)().getState().appContext)||void 0===o?void 0:o.isRTL)&&void 0!==i&&i,p=t.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode===t.AppMode.Design)),h=t.ReactRedux.useSelector((t=>{var o,i;return null===(i=null===(o=t.appConfig.layouts[e.layoutId].setting)||void 0===o?void 0:o.resizable)||void 0===i||i})),g=t.ReactRedux.useSelector((t=>{var e,o;return null!==(o=null===(e=t.appConfig.layouts[a].setting)||void 0===e?void 0:e.splitSize)&&void 0!==o?o:8})),m=t.ReactRedux.useSelector((t=>{var e,o;return null!==(o=null===(e=t.appConfig.layouts[a].setting)||void 0===e?void 0:e.splitColor)&&void 0!==o?o:"var(--ref-palette-neutral-500)"})),y=t.React.useMemo((()=>{const e=`${g}px`,o=!!p||h;return t.css`
      width: ${"col"===s?"100%":e};
      height: ${"col"===s?e:"100%"};
      background: ${m};
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
          cursor: ${o?"col-resize":"default"};
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
          cursor: ${o?"row-resize":"default"};
        }
      }
    `}),[s,h,p,g,m]);return t.hooks.useEffectOnce((()=>{let e,o,i,a,g,m,y,f,v,I,x,b,w;return t.moduleLoader.loadModule("jimu-core/dnd").then((t=>{const S=t.interact;u.current=S,r.current&&(d.current=S(r.current).origin("parent").draggable({inertia:!1,autoScroll:!1,enabled:!!p||h,modifiers:[S.modifiers.restrict({restriction:"parent"})],lockAxis:"row"===s?"x":"y",onstart:t=>{t.stopPropagation(),e=0,o=0,i=r.current.parentElement.getBoundingClientRect(),a=r.current.previousElementSibling,g=a.getBoundingClientRect(),y=a.style.width,f=a.style.height,m=ms(a),v=r.current.nextElementSibling,I=v.getBoundingClientRect(),b=v.style.width,w=v.style.height,x=ms(v)},onmove:t=>{t.stopPropagation(),e+=t.dx,o+=t.dy;const{x:i,y:n}=gs(g,I,s,e,o,c),l=c?-1:1;"row"===s?(a.style.width=`calc(${m}% + ${i*l}px)`,v.style.width=`calc(${x}% - ${i*l}px)`):(a.style.height=`calc(${m}% + ${n}px)`,v.style.height=`calc(${x}% - ${n}px)`)},onend:t=>{t.stopPropagation(),e+=t.dx,o+=t.dy;const{x:r,y:d}=gs(g,I,s,e,o,c),u=c?-1:1;a.style.width=y,v.style.width=b,a.style.height=f,v.style.height=w,l(n,Math.round(r*u*1e4/i.width)/100,Math.round(1e4*d/i.height)/100)}}))})),()=>{var t;null===(t=d.current)||void 0===t||t.unset(),d.current=null}})),t.React.useEffect((()=>{null!=d.current&&u.current(r.current).draggable(!!p||h)}),[h,p]),(0,t.jsx)("div",{ref:r,css:y,className:"grid-split flex-shrink-0"},(0,t.jsx)("div",{className:(0,t.classNames)("handler",{"horizontal-splitter":"row"===s,"vertical-splitter":"col"===s})}))}var fs=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const vs=t.css`
  .nav-link.grid-tab.highlight-pre {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      height: 100%;
      background-color: var(--sys-color-primary-light);
    }
  }

  .nav-link.grid-tab.highlight-next {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      height: 100%;
      background-color: var(--sys-color-primary-light);
    }
  }
`;function Is(i){const{layoutId:n,layoutItemId:a,onDragStart:l,title:r}=i,d=fs(i,["layoutId","layoutItemId","onDragStart","title"]),u=t.React.useRef(),c=t.React.useRef(!1),p=t.hooks.useTranslation(o.defaultMessages),h=t.React.useContext(s.PageContext),g=t.React.useContext(s.LayoutContext),m=t.ReactRedux.useSelector((t=>{const e=t.appConfig.layouts[n].content[a];return null==e?void 0:e.type})),y=t.ReactRedux.useSelector((t=>$n(t.appConfig,{layoutId:n,layoutItemId:a},p))),f=t.React.useCallback((()=>h.rootLayoutId),[h.rootLayoutId]),v=t.hooks.useEventCallback((()=>{l(a)})),I=t.hooks.useEventCallback(((t,e,o,i,n,s)=>{c.current&&(n<=o.width/2?(u.current.classList.add("highlight-pre"),u.current.classList.remove("highlight-next")):(u.current.classList.remove("highlight-pre"),u.current.classList.add("highlight-next")))})),x=t.hooks.useEventCallback(((o,i,l,r,d)=>{const u={layoutId:n};let c=(0,e.getAppConfigAction)(),p=!1;p=r<=i.width/2?!s.utils.isRTL():s.utils.isRTL(),Un(c.appConfig,o,u,a,Nn.Center).then((o=>{const{appConfig:i,layoutInfo:s}=o;if(c=(0,e.getAppConfigAction)(i),p){const t=i.layouts[n].content[a].parent,e=[...i.layouts[n].content[t].children];e.splice(e.indexOf(a),2,s.layoutItemId,a),c.editLayoutItemProperty({layoutId:n,layoutItemId:t},"children",e)}c.exec(),(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(s))}))})),b=t.hooks.useEventCallback((t=>{c.current=t,t||(u.current.classList.remove("highlight-pre"),u.current.classList.remove("highlight-next"))}));return t.React.useEffect((()=>{u.current.setAttribute("data-layoutid",n),u.current.setAttribute("data-layoutitemid",a);const e=(0,Wt.interact)(u.current).origin("parent");Ft(e,{layoutId:n,layoutItemId:a,itemType:m,useDragHandler:!1,onDragStart:v,rootLayoutId:f,restrict:()=>!0}).draggable({modifiers:[Wt.interact.modifiers.restrictRect({restriction:u.current.parentElement.parentElement})]});const o={current:{props:{layouts:(0,t.Immutable)({[t.BrowserSizeMode.Large]:`${n}_${a}_tlarge`,[t.BrowserSizeMode.Medium]:`${n}_${a}_tmedium`,[t.BrowserSizeMode.Small]:`${n}_${a}_tsmall`}),highlightDragover:!0,onDragOver:I,onDrop:x,onToggleDragoverEffect:b},layoutId:n,pageContext:h,layoutContext:g}},i=Ue(u.current,o,".grid-tab");return _e(u.current,o),()=>{e.unset(),i.unset()}}),[n,a]),(0,t.jsx)(o.Tab,Object.assign({},d,{title:y,innerRef:u,innerClassName:"grid-tab",css:vs}))}var xs=p(4221),bs=p.n(xs);let ws=0;const Ss={rootBoundary:"viewport",crossAxis:!0},Cs={boundary:document.body,fallbackPlacements:["top-start","bottom-start","right-start","left-start"]},Rs=[{icon:bs(),title:e=>{const{layoutItem:o,formatMessage:i}=e,n=o.gridType;let s;return n===t.GridItemType.Row?s="distributeSpaceH":n===t.GridItemType.Column&&(s="distributeSpaceV"),i(s)},visible:e=>{const{layoutItem:o}=e,i=o.gridType;return(i===t.GridItemType.Row||i===t.GridItemType.Column)&&!lt()},onClick:t=>{const{layoutId:o}=t,i=t.layoutItem,n=(0,e.getAppConfigAction)(),s=100/i.children.length;i.children.forEach((t=>{n.editLayoutItemProperty({layoutId:o,layoutItemId:t},"bbox",{width:s})})),n.exec()},onMouseEnter:t=>{const{layoutId:e,layoutItem:o}=t;document.querySelector(`div.grid-layout[data-layoutid="${e}"]`).querySelector(`div[data-layoutid="${e}"][data-layoutitemid="${o.id}"]`).classList.add("menu-active")},onMouseLeave:t=>{const{layoutId:e,layoutItem:o}=t;document.querySelector(`div.grid-layout[data-layoutid="${e}"]`).querySelector(`div[data-layoutid="${e}"][data-layoutitemid="${o.id}"]`).classList.remove("menu-active")}}];function Ts(e){const{layoutId:i,layoutItem:n,refElement:s}=e,a=t.hooks.useTranslation(o.defaultMessages);return s?(0,t.jsx)(o.Popper,{placement:"top-start",reference:s,open:!0,unstyled:!0,shiftOptions:Ss,flipOptions:Cs,version:ws++,trapFocus:!1,autoFocus:!1,css:t.css`
        background: transparent;
        box-shadow: none;
      `},(0,t.jsx)("div",null,(0,t.jsx)(Kt,{layoutId:i,layoutItem:n,theme:(0,u.getTheme2)(),parentRef:s,tools:Rs,formatMessage:a}))):null}function Ms(e){const{layout:o,layoutItemId:i,isLast:n,onDragStart:s,onDragging:a,onDragEnd:l,className:r}=e,d=t.React.useMemo((()=>kn(o,i)),[o,i]),u=t.React.useMemo((()=>{if(null==d?void 0:d.parent){return kn(o,d.parent).gridType}return null}),[d,o]),c=t.ReactRedux.useSelector((t=>{var e,i;const n=null!==(i=null===(e=o.setting)||void 0===e?void 0:e.splitSize)&&void 0!==i?i:8;let s=0;if(null==d?void 0:d.parent){s=kn(o,d.parent).children.length}return n*(s-1)/s})),p=t.React.useContext(t.AnimationContext),h=t.React.useMemo((()=>{var e,o;return(null===(o=null===(e=null==p?void 0:p.setting)||void 0===e?void 0:e.option)||void 0===o?void 0:o.parentMode)===t.ParentAnimationMode.AllAtOnce?0:250}),[p]),g=t.React.useCallback((()=>{let e;return e=c>0?`calc(${+d.bbox.width}% - ${c.toFixed(2)}px)`:+d.bbox.width+"%",u===t.GridItemType.Row?t.css`
        height: 100%;
        width: ${e};
      `:u===t.GridItemType.Column?t.css`
        width: 100%;
        height: ${e};
      `:t.css`
      width: 100%;
      height: 100%;
    `}),[d.bbox.width,c,u]);if(d.gridType===t.GridItemType.Row)return(0,t.jsx)(As,{className:r,css:g(),layout:o,layoutItemId:i,items:d.children});if(d.gridType===t.GridItemType.Column)return(0,t.jsx)(Ls,{className:r,css:g(),layout:o,layoutItemId:i,items:d.children});if(d.gridType===t.GridItemType.Tab)return(0,t.jsx)(Ps,{className:r,css:g(),layout:o,layoutItemId:i,items:d.children,onDragStart:s,onDragEnd:l});const m=function(e,o){var i,n;let s=0;const a=kn(e,e.setting.rootItem);if(a&&(null===(i=a.children)||void 0===i?void 0:i.length)>0){const i=[...a.children];for(;i.length>0;){const a=i.shift(),l=kn(e,a),r=kn(e,l.parent);if(`${l.id}`===o||r.gridType===t.GridItemType.Tab&&r.children.includes(o))return s;(null===(n=l.children)||void 0===n?void 0:n.length)>0?i.unshift(...l.children):(r.gridType!==t.GridItemType.Tab||r.gridType===t.GridItemType.Tab&&0===r.children.indexOf(a))&&(s+=1)}}return s}(o,i),y=function(t,e){var o;let i=kn(t,e);if((null===(o=null==i?void 0:i.children)||void 0===o?void 0:o.length)>0)return!1;for(;null!=i;){const e=i.parent;if(null==e)break;const o=kn(t,e),n=o.children.length;if(+o.children[n-1]!=+i.id)return!1;i=o}return!0}(o,i);return(0,t.jsx)(ps,{css:g(),className:(0,t.classNames)(`d-flex ${r}`,{"is-last":n}),layoutId:o.id,layoutItemId:i,delay:m*h,isLastChild:y,onDragStart:s,onDragging:a,onDragEnd:l})}function As(o){const{layout:i,layoutItemId:n,items:s,className:a}=o,l=t.React.useRef(),r=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),d=t.ReactRedux.useSelector((t=>{const e=t.appRuntimeInfo.selection;return(null==e?void 0:e.layoutId)===i.id&&(null==e?void 0:e.layoutItemId)===n})),c=t.hooks.useEventCallback(((t,o)=>{const n=(0,e.getAppConfigAction)(),a=s.indexOf(t),l=s[a+1],r=i.content[t],d=i.content[l];n.editLayoutItemProperty({layoutId:i.id,layoutItemId:t},"bbox",{width:+r.bbox.width+o},!0).editLayoutItemProperty({layoutId:i.id,layoutItemId:l},"bbox",{width:+d.bbox.width-o},!0).exec()})),p=t.hooks.useEventCallback((t=>{var e;const o=l.current.querySelector(`div[data-layoutitemid="${t}"]`);let i,n;(null===(e=o.nextElementSibling)||void 0===e?void 0:e.classList.contains("grid-split"))?(i=o.nextElementSibling,n=i.nextElementSibling):(i=o.previousElementSibling,n=i.previousElementSibling);const s=o.parentElement.getBoundingClientRect(),a=o.getBoundingClientRect();o.style.width=`${o.clientWidth}px`,o.style.height=`${o.clientHeight}px`,o.style.left=a.left-s.left+"px",o.style.top=a.top-s.top+"px",o.style.position="absolute",n.style.width=`${o.clientWidth+i.clientWidth+n.clientWidth}px`,i.style.display="none"})),h=t.hooks.useEventCallback((t=>{var e;const o=l.current.querySelector(`div[data-layoutitemid="${t}"]`);let i,n;(null===(e=o.nextElementSibling)||void 0===e?void 0:e.classList.contains("grid-split"))?(i=o.nextElementSibling,n=i.nextElementSibling):(i=o.previousElementSibling,n=i.previousElementSibling),o.style.width=null,o.style.height=null,o.style.left=null,o.style.top=null,o.style.position=null,n.style.width=null,i.style.display=null})),g=(0,u.getTheme2)();return(0,t.jsx)("div",{className:`d-flex ${a}`,css:t.css`
        position: ${r?"relative":"initial"};
        .is-last {
          width: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
        &.menu-active > .grid-row-item {
          &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.3;
            background: ${g.sys.color.primary.main};
          }
        }
        &.menu-active > .grid-row-item:nth-of-type(4n-1):after {
          background: ${g.sys.color.error.dark};
          opacity: 0.6;
        }
      `,"data-layoutid":i.id,"data-layoutitemid":n,ref:l},s.map(((e,o)=>{return n=e,a=o===s.length-1,(0,t.jsx)(t.React.Fragment,{key:n},(0,t.jsx)(Ms,{key:n,className:"grid-row-item",layout:i,layoutItemId:n,onDragStart:p,onDragEnd:h}),!a&&(0,t.jsx)(ys,{referenceItemId:n,layoutId:i.id,direction:"row",onResizeEnd:c}));var n,a})),d&&(0,t.jsx)(Ts,{layoutId:i.id,layoutItem:i.content[n],refElement:l.current}))}function Ls(o){const{layout:i,layoutItemId:n,items:s,className:a}=o,l=t.React.useRef(),r=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),d=t.ReactRedux.useSelector((t=>{const e=t.appRuntimeInfo.selection;return(null==e?void 0:e.layoutId)===i.id&&(null==e?void 0:e.layoutItemId)===n})),c=t.hooks.useEventCallback(((t,o,n)=>{const a=(0,e.getAppConfigAction)(),l=s.indexOf(t),r=s[l+1],d=i.content[t],u=i.content[r];a.editLayoutItemProperty({layoutId:i.id,layoutItemId:t},"bbox",{width:+d.bbox.width+n},!0).editLayoutItemProperty({layoutId:i.id,layoutItemId:r},"bbox",{width:+u.bbox.width-n},!0).exec()})),p=t.hooks.useEventCallback((t=>{var e;const o=l.current.querySelector(`div[data-layoutitemid="${t}"]`);let i,n;(null===(e=o.nextElementSibling)||void 0===e?void 0:e.classList.contains("grid-split"))?(i=o.nextElementSibling,n=i.nextElementSibling):(i=o.previousElementSibling,n=i.previousElementSibling);const s=o.parentElement.getBoundingClientRect(),a=o.getBoundingClientRect();o.style.width=`${o.clientWidth}px`,o.style.height=`${o.clientHeight}px`,o.style.left=a.left-s.left+"px",o.style.top=a.top-s.top+"px",o.style.position="absolute",n.style.height=`${o.clientHeight+i.clientHeight+n.clientHeight}px`,i.style.display="none"})),h=t.hooks.useEventCallback((t=>{var e;const o=l.current.querySelector(`div[data-layoutitemid="${t}"]`);let i,n;(null===(e=o.nextElementSibling)||void 0===e?void 0:e.classList.contains("grid-split"))?(i=o.nextElementSibling,n=i.nextElementSibling):(i=o.previousElementSibling,n=i.previousElementSibling),o.style.width=null,o.style.height=null,o.style.left=null,o.style.top=null,o.style.position=null,n.style.height=null,i.style.display=null})),g=(0,u.getTheme2)();return(0,t.jsx)("div",{className:`d-flex flex-column ${a}`,css:t.css`
        position: ${r?"relative":"initial"};
        .is-last {
          height: auto;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        }
        &.menu-active > .grid-col-item {
          &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.3;
            background: ${g.sys.color.primary.main};
          }
        }
        &.menu-active > .grid-col-item:nth-of-type(4n-1):after {
          background: ${g.sys.color.error.dark};
          opacity: 0.6;
        }
      `,"data-layoutid":i.id,"data-layoutitemid":n,ref:l},s.map(((e,o)=>{return n=e,a=o===s.length-1,(0,t.jsx)(t.React.Fragment,{key:n},(0,t.jsx)(Ms,{key:n,className:"grid-col-item",layout:i,layoutItemId:n,onDragStart:p,onDragEnd:h}),!a&&(0,t.jsx)(ys,{referenceItemId:n,layoutId:i.id,direction:"col",onResizeEnd:c}));var n,a})),d&&(0,t.jsx)(Ts,{layoutId:i.id,layoutItem:i.content[n],refElement:l.current}))}function Ps(e){var i;const{layout:n,layoutItemId:s,items:a,className:l,onDragStart:r,onDragEnd:d}=e,u=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),[c,p]=t.React.useState(0),h=t.React.useRef(),g=t.React.useRef(),m=t.React.useRef(),y=(null===(i=n.setting)||void 0===i?void 0:i.rootItem)===s;t.hooks.useEffectOnce((()=>{let e=(0,Wt.interact)(h.current).origin("parent");return e=Ft(e,{layoutId:n.id,layoutItemId:s,useDragHandler:!1,itemType:t.LayoutItemType.Widget,rootLayoutId:null,restrict:null,onDragStart:r,onDragEnd:d}),e.draggable({modifiers:[Wt.interact.modifiers.restrictRect({restriction:`div.grid-layout[data-layoutid="${n.id}"]`})]}),()=>{e&&(e.unset(),e=null)}})),t.React.useEffect((()=>{h.current&&(y?(0,Wt.interact)(h.current).draggable(!1):(0,Wt.interact)(h.current).draggable(!0))}),[y]);const f=t.React.useMemo((()=>{var t;return null!==(t=kn(n,s).activeTab)&&void 0!==t?t:0}),[n,s]);t.React.useEffect((()=>{p(f)}),[f]);const v=t.hooks.useEventCallback((t=>{const e=a.indexOf(t);p(e)})),I=t.hooks.useEventCallback((t=>{const e=a.indexOf(t);e===a.length-1?p(a.length-2):p(e+1)})),x=t.hooks.useEventCallback((t=>{const e=h.current.querySelector(`div[data-layoutitemid="${t}"]`).getBoundingClientRect();g.current=e;const o=Dt(e);m.current=document.body.appendChild(o);const i=a.indexOf(t);i===a.length-1?p(a.length-2):p(i+1)})),b=t.hooks.useEventCallback(((t,e,o)=>{const i=e-g.current.left,n=o-g.current.top;m.current.style.transform=`translate(${Math.round(i)}px, ${Math.round(n)}px) translateZ(0)`})),w=t.hooks.useEventCallback((t=>{document.body.removeChild(m.current),m.current=null}));return(0,t.jsx)("div",{className:(0,t.classNames)(l,"exb-rnd"),"data-layoutid":n.id,"data-layoutitemid":s,css:t.css`${u?"relative":"initial"};`,ref:h},(0,t.jsx)(o.Tabs,{type:"tabs",fill:!0,scrollable:!0,className:"w-100 h-100",value:a[c],onChange:v,css:t.css`
          & > .tab-content {
            overflow: hidden;
          }
        `},[...a].map(((e,o)=>((e,o)=>(0,t.jsx)(Is,{key:e,id:e,title:`${o}`,layoutId:n.id,layoutItemId:e,onDragStart:I},(0,t.jsx)(Ms,{layout:n,layoutItemId:e,onDragStart:x,onDragging:b,onDragEnd:w})))(e,o)))))}var js=p(2756),zs=p.n(js),Ns=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const ks=e=>{const o=window.SVG,{className:i}=e,n=Ns(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:zs()},n)):t.React.createElement("svg",Object.assign({className:s},n))},$s=(0,u.withBuilderTheme)(He.WidgetListPopper),Es=t.css`
  pointer-events: auto;
`;function Os(e){return t.css`
    body.lock-layout &,
    body:not(.design-mode) & {
      display: none !important;
    }

    display: flex;
    height: ${e?"200px":"100%"};
    padding: 1rem;
    pointer-events: none;
    position: relative;
    z-index: 1;
    .btn-text {
      line-height: 32px;
    }
    .btn {
      margin-right: 8px;
    }
    .action-item {
      width: 32px;
    }
    .action-separator {
      width: 300px;
      height: 1px;
      background-color: var(--ref-palette-neutral-400);
    }
  `}function Bs(i){const{layoutId:n,pageContext:s,onTemplateSelected:a,onPageTemplateSelected:l}=i,{formatMessage:r,rootLayoutId:d}=s,[u,c]=t.React.useState(!1),[p,h]=t.React.useState(!1),[g,m]=t.React.useState(!1),y=n===d,f=t.React.useRef(null),v=t.React.useRef(null),I=t.React.useRef(null),x=t.ReactRedux.useSelector((e=>{var o,i,n;const s=null!==(n=null===(i=null===(o=e.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return e.appRuntimeInfo.appMode===t.AppMode.Design&&!s}));t.hooks.useEffectOnce((()=>{y||(0,t.getAppStore)().getState().browserSizeMode===t.BrowserSizeMode.Small||c(!0)}));const b=r("chooseTemplate",{type:r("grid").toLocaleLowerCase()}),w=r("chooseTemplate",{type:r("page").toLocaleLowerCase()}),S=t=>{c(!1),a(t)},C=t=>{h(!1),l(t)},R=o=>{m(!1);const i=(0,e.getAppConfigAction)();let s;s=o.itemType===t.LayoutItemType.Section?new Promise((t=>{t(i.addNewSectionToLayout(n))})):i.addNewWidgetToLayout(n,{uri:o.uri,itemId:o.itemId}),s.then((e=>{const o={layoutId:n,layoutItemId:e};i.editLayoutProperty(n,"setting.rootItem",e).editLayoutItemProperty(o,"bbox",{width:100}).editLayoutItemProperty(o,"gridType",t.GridItemType.Plain),F(i.appConfig,o)}))};return x?(0,t.jsx)("div",{className:"w-100 flex-column justify-content-center align-items-center",css:Os(y)},(0,t.jsx)("div",{className:"d-flex justify-content-center align-items-center"},!y&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(qe,{placement:"bottom",title:r("addWidget")},(0,t.jsx)(o.Button,{icon:!0,ref:f,css:Es,onClick:o=>{o.stopPropagation(),(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?m(!g):e.appBuilderSync.publishSidePanelToApp({type:"widget",isPlaceholder:!1,isItemAccepted:()=>!0,onSelect:R})},"aria-haspopup":!0},(0,t.jsx)(Ze,{size:16}))),(0,t.jsx)(qe,{placement:"bottom",title:b},(0,t.jsx)("div",{className:"action-item"},(0,t.jsx)(o.Button,{ref:v,icon:!0,onClick:o=>{o.stopPropagation(),(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?c(!u):e.appBuilderSync.publishSidePanelToApp({type:"template",templateMethod:"getGridTemplates",onSelect:S})},css:Es,"aria-haspopup":!0},(0,t.jsx)(ks,{autoFlip:!0,size:16}))))),y&&(0,t.jsx)(qe,{placement:"bottom",title:w},(0,t.jsx)("div",{className:"action-item"},(0,t.jsx)(o.Button,{ref:I,icon:!0,onClick:o=>{o.stopPropagation(),(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?h(!p):e.appBuilderSync.publishSidePanelToApp({type:"template",templateMethod:"getFullScreenGridPageTemplates",onSelect:C})},css:Es,className:"rounded-circle","aria-haspopup":!0},(0,t.jsx)(ks,{autoFlip:!0,size:16}))))),y&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"action-separator mt-4"}),(0,t.jsx)("div",null,(0,t.jsx)("h5",{className:"btn-text mt-2"},r("dropWidgetToAdd")))),u&&(0,t.jsx)(He.TemplateSelector,{templates:(0,Gi.getGridTemplates)(),referenceElement:v.current,onItemSelect:S,onClose:()=>{c(!1)}}),g&&(0,t.jsx)($s,{referenceElement:f.current,isAccepted:()=>!0,onSelect:R,onClose:()=>{m(!1)}}),p&&(0,t.jsx)(He.TemplateSelector,{templates:(0,Gi.getFullScreenGridPageTemplates)(!1),referenceElement:I.current,onItemSelect:C,onClose:()=>{h(!1)}})):null}var Ds=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}r((i=i.apply(t,e||[])).next())}))};const Fs=t.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
  display: flex;
`,Hs=e=>{const i=(0,u.getTheme2)(),n=function(e){var i;const n=o.styleUtils.toCSSPadding(null===(i=null==e?void 0:e.style)||void 0===i?void 0:i.padding);if(n){if(e.paddingColor){const o=n.split(" "),i=e.paddingColor;let s="";const a=window.jimuUA.browser.name.toLowerCase();return"firefox"===a?s="-moz-":"safari"!==a&&"chrome"!==a||(s="-webkit-"),t.css`
        padding: ${n};
        background-image:
        ${s}linear-gradient(270deg, ${i} ${o[0]}, transparent ${o[0]}),
        ${s}linear-gradient(180deg, ${i} ${o[1]}, transparent ${o[1]}),
        ${s}linear-gradient(90deg, ${i} ${o[2]}, transparent ${o[2]}),
        ${s}linear-gradient(0deg, ${i} ${o[3]}, transparent ${o[3]});
      `}return t.css`
      padding: ${n};
    `}}(e);return t.css`
    overflow: hidden;
    position: relative;
    ${n}

    .grid-root-drop-area {
      position: absolute;
      background: rgba(0, 0, 0, 0.4);
      border: 2px solid rgba(255, 255, 255, 0.04);
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
      border-radius: 7px;
      display: none !important;
      z-index: 30;

      &.top {
        top: 2px;
        left: 50%;
        width: 60px;
        height: 10px;
        transform: translateX(-50%);
      }

      &.bottom {
        bottom: 2px;
        left: 50%;
        width: 60px;
        height: 10px;
        transform: translateX(-50%);
      }

      &.right {
        right: 2px;
        top: 50%;
        height: 60px;
        width: 10px;
        transform: translateY(-50%);
      }

      &.left {
        left: 2px;
        top: 50%;
        height: 60px;
        width: 10px;
        transform: translateY(-50%);
      }
    }

    .${Et} &.drop-target > .grid-root-drop-area,
    .${$t} &.drop-target > .grid-root-drop-area {
      display: flex !important;
    }

    .highlight-area {
      background: ${t.polished.rgba(i.sys.color.primary.dark,.2)};
      position: absolute;
      opacity: 0.6;
      pointer-events: none;
      display: none;

      &.active {
        display: block;
      }

      &.top {
        top: 0;
        width: 100%;
        height: 50%;
      }
      &.bottom {
        bottom: 0;
        width: 100%;
        height: 50%;
      }
      &.left {
        left: 0;
        width: 50%;
        height: 100%;
      }
      &.right {
        right: 0;
        width: 50%;
        height: 100%;
      }
      &.center {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  `};class Vs extends t.React.PureComponent{constructor(o){super(o),this.handleDragOver=()=>null,this.handleDragEnter=()=>null,this.handleDragLeave=()=>null,this.handleDrop=(o,i,n)=>{const{layout:s}=this.props,a={layoutId:s.id};let l=(0,e.getAppConfigAction)();Un(l.appConfig,o,a,null,Nn.Center).then((o=>{const{appConfig:i,layoutInfo:n}=o;l=(0,e.getAppConfigAction)(i),l.exec(),(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(n))}))},this.handleTemplateSelected=t=>Ds(this,void 0,void 0,(function*(){const o=(0,e.getAppConfigAction)(),{layout:i}=this.props;yield o.applyGridTemplate(i.parent.id,t),o.exec()})),this.handlePageTemplateSelected=o=>{const i=(0,e.getAppConfigAction)();this.setState({isLoadingTemplate:!0}),i.applyPageBodyTemplate(this.pageContext.pageId,o).then((()=>{i.exec(),t.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null)},this.highlight=t=>{this.tipRef.current.classList.add("active",t)},this.clearHighlight=t=>{this.tipRef.current.classList.remove("active",t)};const{layout:i}=this.props;this.fakeLayouts=(0,t.Immutable)({[t.BrowserSizeMode.Large]:`${i.id}_tlarge`,[t.BrowserSizeMode.Medium]:`${i.id}_tmedium`,[t.BrowserSizeMode.Small]:`${i.id}_tsmall`}),this.tipRef=t.React.createRef()}findExtension(){const e=t.ExtensionManager.getInstance().getExtensions(`${t.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==e?void 0:e.length)>0){const o=e.find((e=>e.layoutType===t.LayoutType.GridLayout));this.layoutTransform=null==o?void 0:o.transformLayout}}handleDropAtSide(o,i){this.clearHighlight(i);const n=this.props.layout.id;let a=(0,e.getAppConfigAction)();this.tipRef.current.parentElement.classList.remove("drop-target"),function(e,o,i,n){return Wn(this,void 0,void 0,(function*(){const{layoutInfo:a}=o;let l,r=e;if((null==a?void 0:a.layoutId)===i){const t=s.searchUtils.findLayoutItem(e,a);if(t.isPending)r=r.setIn(["layouts",i,"content",a.layoutItemId],t.without("isPending"));else{const t=_n(r.layouts[i],a.layoutItemId);r=r.setIn(["layouts",i],t)}l=a.layoutItemId}else{const t=yield Gn(e,o,{layoutId:i});l=t.newLayoutItemId,r=t.updatedAppConfig}const d=r.layouts[i],u=d.setting.rootItem,c=d.content[u];let p;if(n===Nn.Left||n===Nn.Right){if(c.gridType===t.GridItemType.Row){let t=d;t=On(t,u,100),t=On(t,l,50),t=Bn(t,l,"parent",u),c.children.forEach((e=>{const o=t.content[e];t=On(t,e,+o.bbox.width/2)}));const e=[...c.children];return n===Nn.Left?e.unshift(l):e.push(l),t=t.setIn(["content",u,"children"],e),r=r.setIn(["layouts",i],t),{appConfig:r,itemId:l}}p=En(d,t.GridItemType.Row)}else{if(c.gridType===t.GridItemType.Column){let t=d;t=On(t,u,100),t=On(t,l,50),t=Bn(t,l,"parent",u),c.children.forEach((e=>{const o=t.content[e];t=On(t,e,+o.bbox.width/2)}));const e=[...c.children];return n===Nn.Top?e.unshift(l):e.push(l),t=t.setIn(["content",u,"children"],e),r=r.setIn(["layouts",i],t),{appConfig:r,itemId:l}}p=En(d,t.GridItemType.Column)}let{outLayout:h,outItem:g}=p;return h=h.setIn(["setting","rootItem"],g.id),h=On(h,g.id,100),h=On(h,u,50),h=Bn(h,u,"parent",g.id),h=On(h,l,50),h=Bn(h,l,"parent",g.id),h=n===Nn.Left||n===Nn.Top?Bn(h,g.id,"children",[l,u]):Bn(h,g.id,"children",[u,l]),r=r.setIn(["layouts",i],h),{appConfig:r,itemId:l}}))}(a.appConfig,o,n,i).then((({appConfig:o,itemId:i})=>{a=(0,e.getAppConfigAction)(o),a.exec(),(0,t.getAppStore)().dispatch(t.appActions.selectionChanged({layoutId:n,layoutItemId:i}))}))}render(){var e,o,i;const{layouts:n,layout:a,browserSizeMode:l,mainSizeMode:r,className:d}=this.props,u=n[l]!==a.id;let c=a;u&&(null==this.layoutTransform&&this.findExtension(),null!=this.layoutTransform&&(c=this.layoutTransform(a,r,l)));const{rootItem:p}=null!==(e=c.setting)&&void 0!==e?e:{},h=kn(c,p),g=(0,t.classNames)("layout grid-layout d-flex w-100 h-100",d),m=null!==(i=null===(o=null==h?void 0:h.children)||void 0===o?void 0:o.length)&&void 0!==i?i:0;return(0,t.jsx)(s.PageContext.Consumer,null,(e=>(this.pageContext=e,(0,t.jsx)("div",{className:g,css:Hs(c.setting),"data-layoutid":c.id},(0,t.jsx)(t.IntersectionContext.Provider,{value:{monitor:!1}},(0,t.jsx)(t.OneByOneAnimation,{oid:c.id,"data-layoutid":c.id,className:"trail-container d-flex w-100 h-100",css:t.css`
                    width: 100%;
                  `},null==h&&(0,t.jsx)(Ye,{css:Fs,layouts:this.props.layouts,highlightDragover:!0,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDragOver:this.handleDragOver,onDrop:this.handleDrop},(0,t.jsx)("div",{css:t.css`
                          width: 100%;
                          background: var(--cyan-500);
                        `})),null==h&&!u&&(0,t.jsx)(Bs,{layoutId:a.id,pageContext:e,onTemplateSelected:this.handleTemplateSelected,onPageTemplateSelected:this.handlePageTemplateSelected}),h?(0,t.jsx)(Ms,{className:"w-100 h-100",layout:c,layoutItemId:p}):this.props.children)),m>1&&[Nn.Top,Nn.Right,Nn.Bottom,Nn.Left].map((e=>(0,t.jsx)(Ye,{key:e,className:`${e} grid-root-drop-area shadow-sm`,layouts:this.fakeLayouts,onDrop:t=>{this.handleDropAtSide(t,e)},onDragEnter:()=>{this.highlight(e)},onDragLeave:()=>{this.clearHighlight(e)}}))),(0,t.jsx)("div",{ref:this.tipRef,className:"highlight-area"})))))}}const Ws=t.ReactRedux.connect(s.utils.mapStateToLayoutProps)(Vs);var Gs=p(8736),Us=p.n(Gs);function _s(e){var i,n;const{layoutId:s,layoutItemId:a}=e,l=t.ReactRedux.useSelector((e=>{var o,i;const n=e.appConfig.layouts[s].content[a];if(n.type===t.LayoutItemType.Widget){const t=n.widgetId,i=e.appConfig.widgets[t];return null!==(o=null==i?void 0:i.label)&&void 0!==o?o:""}const l=n.sectionId,r=e.appConfig.sections[l];return null!==(i=null==r?void 0:r.label)&&void 0!==i?i:""})),r=t.ReactRedux.useSelector((e=>{var o,i,n,l;const r=e.appConfig.layouts[s].content[a];if(r.type===t.LayoutItemType.Widget){const t=r.widgetId,n=e.appConfig.widgets[t];return"string"==typeof(null==n?void 0:n.icon)?n.icon:null!==(i=null===(o=null==n?void 0:n.icon)||void 0===o?void 0:o.svg)&&void 0!==i?i:""}const d=r.sectionId,u=e.appConfig.sections[d];return"string"==typeof(null==u?void 0:u.icon)?u.icon:null!==(l=null===(n=null==u?void 0:u.icon)||void 0===n?void 0:n.svg)&&void 0!==l?l:Us()})),d=t.ReactRedux.useSelector((t=>{var e,o;const i=t.appConfig.layouts[s].parent.id;return null===(o=null===(e=t.appConfig.widgets[i].config)||void 0===e?void 0:e.header)||void 0===o?void 0:o.showWidgetIcon})),u=t.ReactRedux.useSelector((t=>{var e,o;const i=t.appConfig.layouts[s].parent.id;return null===(o=null===(e=t.appConfig.widgets[i].config)||void 0===e?void 0:e.header)||void 0===o?void 0:o.widgetIconSize})),c=t.ReactRedux.useSelector((t=>{var e,o;const i=t.appConfig.layouts[s].parent.id;return null===(o=null===(e=t.appConfig.widgets[i].config)||void 0===e?void 0:e.header)||void 0===o?void 0:o.widgetIconColor})),p=t.ReactRedux.useSelector((t=>{var e,o;const i=t.appConfig.layouts[s].parent.id;return null===(o=null===(e=t.appConfig.widgets[i].config)||void 0===e?void 0:e.header)||void 0===o?void 0:o.textStyle}));return(0,t.jsx)("div",{className:"label d-flex align-items-center h-100"},(0,t.jsx)(t.React.Fragment,null,d&&(0,t.jsx)(o.Icon,{icon:r,size:null!=u?u:16,color:c}),(0,t.jsx)("div",{className:"ml-2 text-truncate",css:t.css`
            font-size: ${null!==(i=null==p?void 0:p.size)&&void 0!==i?i:"1rem"};
            font-weight: ${(null==p?void 0:p.bold)?"bold":"normal"};
            font-style: ${(null==p?void 0:p.italic)?"italic":"normal"};
            text-decoration: ${(null==p?void 0:p.underline)?"underline":""} ${(null==p?void 0:p.strike)?"line-through":""};
            color: ${null!==(n=null==p?void 0:p.color)&&void 0!==n?n:"inherit"};
          `},l)))}var Ys=p(655),Xs=p.n(Ys),Zs=p(4064),qs=p.n(Zs);const Ks=[{icon:Xs(),title:t=>t.formatMessage("movedown"),disabled:t=>{const{layoutId:o,layoutItem:i}=t,n=(0,e.getAppConfigAction)().appConfig.layouts[o];return n.order.indexOf(i.id)===n.order.length-1},visible:()=>at()===t.AppMode.Design&&!lt(),onClick:t=>{const{layoutId:o,layoutItem:i}=t,n=(0,e.getAppConfigAction)(),s=n.appConfig.layouts[o],a=[].concat(s.order),l=a.indexOf(i.id);a.splice(l,2,s.order[l+1],s.order[l]),n.editLayoutProperty(o,"order",a),n.exec()}},{icon:qs(),title:t=>t.formatMessage("moveup"),disabled:t=>{var o;const{layoutId:i,layoutItem:n}=t;return(null===(o=(0,e.getAppConfigAction)().appConfig.layouts[i].order)||void 0===o?void 0:o[0])===n.id},visible:()=>at()===t.AppMode.Design&&!lt(),onClick:t=>{const{layoutId:o,layoutItem:i}=t,n=(0,e.getAppConfigAction)(),s=n.appConfig.layouts[o],a=[].concat(s.order),l=a.indexOf(i.id);a.splice(l-1,2,s.order[l],s.order[l-1]),n.editLayoutProperty(o,"order",a),n.exec()}},{separator:!0}],Js=e=>{const{height:i,gap:n,headerConfig:s,panelConfig:a,isFunctionalWidget:l,isInlineEditing:r,isSection:d}=e,u=null!=s?s:{},c=null!=a?a:{},{padding:p,expandedColor:h,collapsedColor:g,border:m,borderLeft:y,borderRight:f,borderTop:v,borderBottom:I,borderRadius:x}=u,{padding:b,border:w,borderRadius:S,backgroundColor:C}=c;return t.css`
  position: relative;
  touch-action: none;
  user-select: ${r?"auto":"none"};
  & + .foldable-panel {
    margin-top: ${n}px;
  }
  .panel-header {
    padding: ${o.styleUtils.toCSSPadding(p)};
    border: ${o.styleUtils.toCSSBorder(m)};
    border-left: ${o.styleUtils.toCSSBorder(y)};
    border-right: ${o.styleUtils.toCSSBorder(f)};
    border-top: ${o.styleUtils.toCSSBorder(v)};
    border-bottom: ${o.styleUtils.toCSSBorder(I)};
    border-radius: ${o.styleUtils.toCSSBorderRadius(x)};
    background-color: ${null!=h?h:"var(--sys-color-primary-main)"};
    .tool-drag-handler {
      cursor: pointer;
      flex-grow: 1;
      flex-shrink: 1;
    }
  }
  .panel-content {
    padding: ${o.styleUtils.toCSSPadding(b)};
    border: ${o.styleUtils.toCSSBorder(w)};
    border-left: ${o.styleUtils.toCSSBorder(c.borderLeft)};
    border-right: ${o.styleUtils.toCSSBorder(c.borderRight)};
    border-top: ${o.styleUtils.toCSSBorder(c.borderTop)};
    border-bottom: ${o.styleUtils.toCSSBorder(c.borderBottom)};
    border-radius: ${o.styleUtils.toCSSBorderRadius(S)};
    overflow: auto;
    background-color: ${null!=C?C:"none"};
    position: relative;
    height: ${i};
    opacity: 1;
    transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  &.collapsed {
    .panel-header {
      background-color: ${null!=g?g:"var(--sys-color-primary-main)"};
    }
    .panel-content {
      height: 0;
      padding: unset;
      border: none;
      visibility: hidden;
      .layout-item {
        display: none;
      }
    }
  }
  .${Et} &.functional-widget {
     pointer-events: none;
   }
   .${Et} &.functional-widget .exb-drop-area {
     pointer-events: all;
   }

   .${Et} &,
   .${$t} & {
     > div.highlight-tip {
       .tip-content {
         outline-color: var(--ref-palette-neutral-900);
       }
     }
   }
   body:not(.design-mode) &,
      body.lock-layout & {
        cursor: default;
      }

      body:not(.design-mode) & > div.highlight-tip {
        display: none !important;
      }

      & > div.highlight-tip {
        display: block;
        padding: inherit;
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        pointer-events: none;
        .tip-content {
          height: 100%;
          padding: 1px;
          &:after {
            content: '';
            width: 100%;
            height: 100%;
            outline: 1px dashed var(--ref-palette-neutral-900);
            display: block;
            outline-color: ${!l||d?"var(--ref-palette-neutral-900)":"transparent"};
          }
        }
      }

      &:hover > div.highlight-tip,
      &.hovered > div.highlight-tip {
        display: block;
        .tip-content {
          &:after {
            outline-color: var(--sys-color-primary-main);
          }
        }
      }

      &.functional-widget:not(.selected):hover > div.highlight-tip,
      &.functional-widget:not(.selected).hovered > div.highlight-tip {
        .tip-content {
          &:after {
            outline-width: 2px;
          }
        }
      }
  `};function Qs(e){var i,n,a,l,r,d,u,c,p,h,g,m,y,f;const{layoutId:v,layoutItemId:I,expanded:x,selected:b,resizable:w,isResizing:S,isInlineEditing:C,height:R,gap:T,onExpandedChange:M,onClick:A,onDoubleClick:L,onResizeStart:P,onResizeEnd:j,onResizing:z}=e,N=t.React.useRef(null),k=t.React.useRef(null),$=t.React.useRef({x:0,y:0}),E=t.hooks.useTranslation(),{viewOnly:O}=t.React.useContext(s.PageContext),B=t.ReactRedux.useSelector((t=>s.searchUtils.findLayoutItem(t.appConfig,{layoutId:v,layoutItemId:I}))),D=t.ReactRedux.useSelector((e=>{var o,i;if(B.type===t.LayoutItemType.Widget){const t=B.widgetId,i=e.appConfig.widgets[t];return null!==(o=null==i?void 0:i.label)&&void 0!==o?o:""}const n=B.sectionId,s=e.appConfig.sections[n];return null!==(i=null==s?void 0:s.label)&&void 0!==i?i:""})),F=t.ReactRedux.useSelector((e=>B.type===t.LayoutItemType.Widget&&s.utils.isFunctionalWidget(B.widgetId,e.appConfig))),H=t.ReactRedux.useSelector((t=>{var e;const o=t.appConfig.layouts[v].parent.id;return null===(e=t.appConfig.widgets[o].config)||void 0===e?void 0:e.header})),V=t.ReactRedux.useSelector((t=>{var e;const o=t.appConfig.layouts[v].parent.id;return null===(e=t.appConfig.widgets[o].config)||void 0===e?void 0:e.panel})),W=t.ReactRedux.useSelector((e=>B.type===t.LayoutItemType.Section));t.React.useEffect((()=>{let t=(0,Wt.interact)(N.current).origin("parent");t=Ft(t,{layoutId:v,layoutItemId:I,onDragging:null,useDragHandler:!0,itemType:null,rootLayoutId:()=>"",restrict:()=>!1});let e=(0,Wt.interact)(k.current).origin("parent");return e=_t(e,{layoutItemId:I,restrictEdges:!1,onResizeStart:(t,e,o)=>{const i=k.current.querySelector(".panel-header");let n=o;i&&(n=o-i.clientHeight),P(t,e,n)},onResizing:z,onResizeEnd:j}),()=>{null==t||t.unset(),null==e||e.unset()}}),[v,I,P,z,j]),t.React.useEffect((()=>{(0,Wt.interact)(N.current).resizable(w)}),[w]);const G=t.React.useCallback((t=>{const{x:e,y:o}=$.current;Math.abs(t.screenX-e)>s.CLICK_TOLERANCE||Math.abs(t.screenY-o)>s.CLICK_TOLERANCE?t.stopPropagation():M(I,!x)}),[I,x,M]),U=t.React.useCallback((e=>{!O&&(!lt()&&dt()||F||B.type===t.LayoutItemType.Section)&&(e.stopPropagation(),A())}),[O,F,B.type,A]),_=t.React.useCallback((t=>{O||(t.stopPropagation(),L())}),[O,L]),Y=t.React.useCallback((t=>{$.current={x:t.screenX,y:t.screenY}}),[]);const X=null!==(i=null==H?void 0:H.togglePosition)&&void 0!==i?i:"right",Z=(null===(a=null===(n=B.setting)||void 0===n?void 0:n.autoProps)||void 0===a?void 0:a.height)===s.LayoutItemSizeModes.Auto,q=s.utils.shouldUseAspectRatio(null!==(l=B.setting)&&void 0!==l?l:{});let K=R;S?K=R:(Z||q)&&(K="auto");const J=x?null===(r=null==H?void 0:H.collapseIcon)||void 0===r?void 0:r.svg:null===(d=null==H?void 0:H.expandIcon)||void 0===d?void 0:d.svg;return(0,t.jsx)("div",{className:(0,t.classNames)("builder-layout-item exb-rnd foldable-panel",{selected:b,collapsed:!x,"no-drag-action":!function(){const e=t.utils.isTouchDevice();return!O&&!C&&(!e||b)}(),"functional-widget":F}),"data-layoutid":v,"data-layoutitemid":I,ref:N,onClick:U,onDoubleClick:_,onKeyDown:null,css:Js({height:K,gap:T,headerConfig:H,panelConfig:V,isFunctionalWidget:F,isInlineEditing:C,isSection:W})},(0,t.jsx)("div",{className:"panel d-flex flex-column",ref:k},(0,t.jsx)("div",{className:(0,t.classNames)("panel-header d-flex align-items-center",{"flex-row-reverse":"left"===X}),onClick:G,onMouseDown:Y,onKeyDown:null,role:"group","aria-label":D},(0,t.jsx)("div",{className:"tool-drag-handler"},v&&I&&(0,t.jsx)(_s,{layoutId:v,layoutItemId:I})),J&&(0,t.jsx)("div",{className:(0,t.classNames)("actions",{"ml-auto":"right"===X})},(0,t.jsx)(o.Button,{icon:!0,type:"tertiary",size:"sm","aria-expanded":x,title:E(x?"clickToHide":"clickToShow"),"aria-label":E(x?"clickToHide":"clickToShow")},(0,t.jsx)(o.Icon,{icon:J,size:x?null===(c=null===(u=null==H?void 0:H.collapseIcon)||void 0===u?void 0:u.properties)||void 0===c?void 0:c.size:null===(h=null===(p=null==H?void 0:H.expandIcon)||void 0===p?void 0:p.properties)||void 0===h?void 0:h.size,color:x?null===(m=null===(g=null==H?void 0:H.collapseIcon)||void 0===g?void 0:g.properties)||void 0===m?void 0:m.color:null===(f=null===(y=null==H?void 0:H.expandIcon)||void 0===y?void 0:y.properties)||void 0===f?void 0:f.color})))),(0,t.jsx)("div",{className:(0,t.classNames)("panel-content d-flex flex-grow-1 flex-shrink-1")},e.children),b&&(0,t.jsx)(De,{layoutId:v,layoutItem:B,top:!1,left:!1,right:!1,bottom:x&&!Z&&!q,resizable:x&&!Z&&!q,draggable:!0,selected:!0,forbidToolbar:!1,toolItems:Ks,showDefaultTools:!0,isInlineEditing:!1,isFunctionalWidget:!0,hasEmbeddedLayout:!1,isSection:!1,hasExtension:!1})),(0,t.jsx)("div",{className:"highlight-tip"},(0,t.jsx)("div",{className:"tip-content"})))}function ta(e){var o,i,n,a;const{layoutId:l,layoutItem:r,layoutItemId:d,gap:u,expanded:c,onResizeEnd:p,onResizeStart:h,onExpandedChange:g}=e,[m,y]=t.React.useState(!1),[f,v]=t.React.useState(0),I=t.React.useRef(0),x=t.React.useRef(0),b=r.type===t.LayoutItemType.Widget,w=r.type===t.LayoutItemType.Section,S=t.ReactRedux.useSelector((t=>{if(b)return k(t,e)}),t.ReactRedux.shallowEqual),C=t.ReactRedux.useSelector((t=>{if(w)return s.searchUtils.getSectionInfo(t,r.sectionId)}),t.ReactRedux.shallowEqual),R=t.ReactRedux.useSelector((t=>{const e=t.appRuntimeInfo.selection;return(null==e?void 0:e.layoutId)===l&&(null==e?void 0:e.layoutItemId)===d})),T=t.React.useCallback(((t,e,o,i,n)=>{y(!1),p(t,e,o,i,n)}),[p]),M=t.React.useCallback(((t,e,o)=>{x.current=e,I.current=o,y(!0),h(t,e,o)}),[h]),A=t.React.useCallback(((t,e,o,i,n)=>{v(n)}),[]),L=(null===(i=null===(o=r.setting)||void 0===o?void 0:o.autoProps)||void 0===i?void 0:i.height)!==s.LayoutItemSizeModes.Auto,P=s.utils.shouldUseAspectRatio(null!==(n=r.setting)&&void 0!==n?n:{}),j=s.utils.parseAspectRatio(null===(a=r.setting)||void 0===a?void 0:a.aspectRatio);let z;return z=m?`${I.current+f}px`:r.bbox.height,(0,t.jsx)(Qs,{layoutId:l,layoutItemId:d,resizable:L,selected:R,isResizing:m,isInlineEditing:null==S?void 0:S.isInlineEditing,height:z,expanded:c,onExpandedChange:g,onClick:()=>{R||(0,t.getAppStore)().dispatch(t.appActions.selectionChanged({layoutId:l,layoutItemId:d}))},onDoubleClick:()=>{(null==S?void 0:S.supportInlineEditing)&&(0,t.getAppStore)().dispatch(t.appActions.setWidgetIsInlineEditingState(S.widgetId,!0))},onResizeStart:M,onResizing:A,onResizeEnd:T,gap:u},b&&(0,t.jsx)(io,Object.assign({layoutId:l,layoutItemId:d,forceAspectRatio:P,aspectRatio:j},S)),w&&(0,t.jsx)(wo,Object.assign({layoutId:l,layoutItemId:d},C)))}var ea=p(8416),oa=p.n(ea),ia=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const na=e=>{const o=window.SVG,{className:i}=e,n=ia(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:oa()},n)):t.React.createElement("svg",Object.assign({className:s},n))};var sa=p(5741),aa=p.n(sa),la=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const ra=e=>{const o=window.SVG,{className:i}=e,n=la(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:aa()},n)):t.React.createElement("svg",Object.assign({className:s},n))},da=t.css`
  // position: sticky;
  // top: 0;
  margin-bottom: 4px;
  z-index: 1;
`;function ua(e){const{onExpandAll:i,onCollapseAll:n}=e,s=t.hooks.useTranslation();return(0,t.jsx)("div",{css:da,className:"d-flex align-items-center justify-content-end"},(0,t.jsx)(o.Tooltip,{title:s("expandAll")},(0,t.jsx)(o.Button,{type:"tertiary",icon:!0,size:"sm",onClick:i},(0,t.jsx)(ra,null))),(0,t.jsx)(o.Tooltip,{title:s("collapseAll")},(0,t.jsx)(o.Button,{type:"tertiary",icon:!0,size:"sm",onClick:n,className:"ml-1"},(0,t.jsx)(na,null))))}function ca(t,e){const o=t[e.browserSizeMode]||t[e.appConfig.mainSizeMode],i=e.appConfig.layouts[o].parent.id;return e.appConfig.widgets[i]}const pa=t.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,ha=t.css`
  ${pa};
  z-index: 20;
  pointer-events: none;
`,ga=10;function ma(t,e){return e.find((e=>!t.includes(e)))}class ya extends t.React.PureComponent{constructor(o){super(o),this.handleExpandedChange=(t,e)=>{e?this.props.singleMode?this.setState({expandedItems:[t]}):this.state.expandedItems.includes(t)||this.setState({expandedItems:[...this.state.expandedItems,t]}):this.state.expandedItems.includes(t)&&this.setState({expandedItems:this.state.expandedItems.filter((e=>e!==t))})},this.expandAll=()=>{const{layout:t}=this.props;this.setState({expandedItems:[...t.order]})},this.collapseAll=()=>{this.setState({expandedItems:[]})},this.handleItemResizeStart=(t,e,o)=>{const{layout:i}=this.props,n=i.content[t].bbox;s.utils.isPercentage(n.height)&&(this.domRect=this.ref.getBoundingClientRect()),this.resizingRect={width:e,height:o}},this.handleItemResizeEnd=(t,o,i,n,a)=>{const{layout:l}=this.props,r=l.content[t].bbox;let d;d=s.utils.isPercentage(r.height)?`${(100*(this.resizingRect.height+a)/this.domRect.height).toFixed(2)}%`:`${Math.round(this.resizingRect.height+a)}px`,this.childRects=[],this.domRect=null;(0,e.getAppConfigAction)().editLayoutItemProperty({layoutId:this.props.layout.id,layoutItemId:t},"bbox",{height:d}).exec()},this.handleDragOver=(t,e,o,i)=>{var n,s;let a=null!==(n=i.handlerRect)&&void 0!==n?n:i;if(this.canvasPane.clear(),(null===(s=this.childRects)||void 0===s?void 0:s.length)>0){const{insertY:t,refId:e}=sn(o,a,this.childRects);this.referenceId=e,a={top:t-5,width:o.width-ga,left:5,height:ga}}else a={top:o.height/2-5,width:o.width-ga,left:5,height:ga};this.canvasPane.setColor(this.builderTheme.sys.color.primary.light),this.canvasPane.drawRect(a)},this.handleToggleDragoverEffect=t=>{t&&(this.referenceId=null,this.collectBounds(null)),this.setState({isDragover:t})},this.handleDrop=(o,i,n)=>{this.canvasPane.clear();const{layout:a}=this.props;let l=0;null!=this.referenceId?l=a.order.indexOf(this.referenceId):null!=a.order&&(l=a.order.length);V((0,e.getAppConfigAction)().appConfig,o,a.id).then((a=>{const{layoutInfo:r,updatedAppConfig:d}=a,u=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.AccordionLayout).processAfterItemAdded(d,o,r,{currentSizeMode:null,containerRect:i,itemRect:n,insertIndex:l});s.utils.changeLayout(u,r)})).finally(null),this.referenceId=null,this.childRects=[]},this.state={isDragover:!1,expandedItems:this.props.expandByDefault.includes(",")?this.props.expandByDefault.split(","):[]}}componentDidMount(){this.canvasPane=new Ji(this.canvasRef),this.canvasPane.setSize(this.ref.clientWidth,this.ref.scrollHeight)}componentDidUpdate(t){var e,o,i,n,s,a,l,r,d;if(this.canvasPane.setSize(this.ref.clientWidth,this.ref.scrollHeight),t.singleMode!==this.props.singleMode&&this.props.singleMode)this.state.expandedItems.length>1&&this.setState({expandedItems:[this.state.expandedItems[0]]});else if((null===(e=t.layout.order)||void 0===e?void 0:e.length)!==(null===(o=this.props.layout.order)||void 0===o?void 0:o.length)){const e=null!==(n=null===(i=t.layout.order)||void 0===i?void 0:i.length)&&void 0!==n?n:0,o=null!==(a=null===(s=this.props.layout.order)||void 0===s?void 0:s.length)&&void 0!==a?a:0;if(e<o){const e=ma(null!==(l=t.layout.order)&&void 0!==l?l:[],this.props.layout.order);this.props.singleMode?this.setState({expandedItems:[e]}):this.setState({expandedItems:[...this.state.expandedItems,e]})}if(e>o){const e=ma(null!==(r=this.props.layout.order)&&void 0!==r?r:[],t.layout.order);if(null===(d=this.state.expandedItems)||void 0===d?void 0:d.includes(e)){const t=this.state.expandedItems.filter((t=>t!==e));this.setState({expandedItems:t})}}}}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.getBoundingClientRect();const o=this.ref.querySelectorAll(":scope > div.exb-rnd");return(null==o?void 0:o.length)>0&&o.forEach((o=>{const i=o.getAttribute("data-layoutitemid");if(t!==i&&e.order.includes(i)){const t=s.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=i,this.childRects.push(t)}})),this.childRects.sort(((t,e)=>t.top-e.top))}isEmpty(){var t;const{layout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return!(o.length>0&&o.some((t=>!e.content[t].isPending)))}createItem(e,o,i){const{layout:n,showDefaultTools:s,gap:a}=this.props;return n.content[e].isPending?null:(0,t.jsx)(ta,{key:e,layoutId:n.id,layoutItemId:e,gap:a,expanded:this.state.expandedItems.includes(e),layoutItem:n.content[e],draggable:!0,resizable:!0,showDefaultTools:s,onExpandedChange:this.handleExpandedChange,onResizeStart:this.handleItemResizeStart,onResizeEnd:this.handleItemResizeEnd})}render(){var e;const{layout:i,className:n,showToggleAll:a,padding:l}=this.props,r=null!==(e=i.order)&&void 0!==e?e:[],d=Object.assign({},i.setting);return(0,t.jsx)(s.PageContext.Consumer,null,(e=>{this.builderTheme=e.builderTheme;const s={display:this.state.isDragover?"block":"none"};return(0,t.jsx)("div",{className:(0,t.classNames)("layout foldable-layout w-100",n),css:t.css`position: relative;`,"data-layoutid":i.id},(0,t.jsx)("div",{className:"h-100 w-100 d-flex flex-column",ref:t=>{this.ref=t},css:t.css`
                  overflow: auto;
                  overflow-x: hidden;
                  padding: ${o.styleUtils.toCSSPadding(l)}
                `},a&&(0,t.jsx)(ua,{onExpandAll:this.expandAll,onCollapseAll:this.collapseAll}),(0,t.jsx)(Ye,{css:pa,layouts:this.props.layouts,highlightDragover:!0,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),r.map(((t,e)=>this.createItem(t,e,d))),this.isEmpty()&&this.props.children,(0,t.jsx)("canvas",{css:ha,style:s,ref:t=>{this.canvasRef=t}})))}))}}const fa=(0,t.createSelector)([(t,e)=>s.utils.mapStateToLayoutProps(t,e),(t,e)=>{var o,i;return null!==(i=null===(o=ca(e.layouts,t).config)||void 0===o?void 0:o.singleMode)&&void 0!==i&&i},(t,e)=>{var o,i;return null!==(i=null===(o=ca(e.layouts,t).config)||void 0===o?void 0:o.showToggleAll)&&void 0!==i&&i},(t,e)=>{var o,i;return null!==(i=null===(o=ca(e.layouts,t).config)||void 0===o?void 0:o.gap)&&void 0!==i?i:4},(t,e)=>{var o;return null===(o=ca(e.layouts,t).config)||void 0===o?void 0:o.padding},(t,e)=>{var o,i,n;const s=e.layouts[t.browserSizeMode]||e.layouts[t.appConfig.mainSizeMode],a=t.appConfig.layouts[s],l=null!==(i=null===(o=ca(e.layouts,t).config)||void 0===o?void 0:o.expandedItems)&&void 0!==i?i:[],r=[];return l.length>0&&Object.keys(null!==(n=a.content)&&void 0!==n?n:{}).forEach((t=>{const e=a.content[t];l.includes(e.widgetId)&&r.push(t)})),r.join(",")}],((t,e,o,i,n,s)=>Object.assign({singleMode:e,showToggleAll:o,gap:i,padding:n,expandByDefault:s},t))),va=t.ReactRedux.connect(fa)(ya);const Ia={min:16,space:10};class xa extends t.React.PureComponent{constructor(){super(...arguments),this.state={isResizing:!1,dw:0,dh:0},this.onResizeStart=(t,e,o)=>{this.initWidth=e,this.initHeight=o,this.props.onResizeStart(t),this.setState({isResizing:!0})},this.onResizing=(t,e,o,i,n)=>{this.setState({dw:i,dh:n,isResizing:!0})},this.onResizeEnd=(t,e,o,i,n,s)=>{const{layoutItem:a}=this.props;this.props.onResizeEnd(t,e,o,i,n,a),this.setState({isResizing:!1,dw:0,dh:0})}}isStretchInCrossAxis(){const{layoutItem:t}=this.props;return function(t){var e,o,i;return(null!==(i=null===(o=null===(e=t.setting)||void 0===e?void 0:e.autoProps)||void 0===o?void 0:o.height)&&void 0!==i?i:C.Stretch)===C.Stretch}(t)}calWidth(t,e){return function(t,e){var o,i;return(null===(o=t.autoProps)||void 0===o?void 0:o.width)===C.Auto||"ratio"===t.widthMode?"ratio"===t.widthMode?{width:"auto",flex:"0 0 auto"}:{width:"auto"}:(null===(i=t.autoProps)||void 0===i?void 0:i.width)===C.Stretch||"fit"===t.widthMode?{flex:"1 1 auto"}:{width:e.width,flexShrink:0}}(t,e)}getStyle(e,o,i,n){const{layoutItem:s}=this.props,{dw:a,dh:l,isResizing:r}=this.state,d=s.bbox||{},u=this.calWidth(e,d);return u.height=o||i||n?"auto":d.height,r&&(a||l)&&(u.height=this.initHeight+l,u.width=this.initWidth+a),function(e,o,i){var n,s,a;const l=(null===(n=o.autoProps)||void 0===n?void 0:n.width)===C.Auto;return t.css`
    align-self: ${i?"stretch":null!==(a=null===(s=o.style)||void 0===s?void 0:s.alignSelf)&&void 0!==a?a:"flex-start"};
    width: ${z(e,"width")};
    height: ${z(e,"height")};
    flex: ${e.flex};
    flex-shrink: ${e.flexShrink};
    min-width: ${l?"unset":null};
  `}(u,e,o)}render(){var e,o,i;const{layoutId:n,layoutItem:a,draggable:l,resizable:r,selectable:d,showDefaultTools:u}=this.props;if(!a||a.isPending)return null;const c=a.setting||{},p=null!==(o=null===(e=c.autoProps)||void 0===e?void 0:e.width)&&void 0!==o?o:C.Custom,h=(null===(i=c.autoProps)||void 0===i?void 0:i.height)===C.Auto,g=(0,t.classNames)("flex-row-layout-item",{"d-flex":p!==C.Auto}),m=this.isStretchInCrossAxis(),y=s.utils.shouldUseAspectRatio(c),f=s.utils.parseAspectRatio(c.aspectRatio),v=s.utils.handleOnebyOneAnimation(this.props);return(0,t.jsx)(zo,Object.assign({css:this.getStyle(c,m,y,h),layoutId:n,layoutItemId:a.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,top:!h&&!m&&!y,bottom:!h&&!m&&!y,left:p===C.Custom||y,right:p===C.Custom||y,draggable:l,resizable:r,selectable:d,showDefaultTools:u,onClick:this.props.onClick,className:g,forceAspectRatio:y,aspectRatio:f,autoHeight:h},v))}}const ba=e=>t.css`
  height: 100%;
  overflow: hidden;
  justify-content: ${e.justifyContent};
  & > div.flex-row-layout-item ~ div.flex-row-layout-item {
    margin-left: ${e.space}px;
  }
`,wa=t.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,Sa=t.css`
  ${wa};
  z-index: 20;
  pointer-events: none;
`,Ca=10;class Ra extends t.React.PureComponent{constructor(){super(...arguments),this.state={isDragover:!1},this.handleItemResizeStart=t=>{const{layout:e}=this.props;this.domRect=this.ref.getBoundingClientRect();const o=this.ref.querySelector(`div.exb-rnd[data-layoutid="${e.id}"][data-layoutitemid="${t}"]`).getBoundingClientRect();this.resizingRect=s.utils.relativeClientRect(o,this.domRect)},this.handleItemResizeEnd=(t,o,i,n,a,l)=>{const{layout:r}=this.props,d=r.content[t].bbox;let u;u=s.utils.isPercentage(d.width)?`${(100*(this.resizingRect.width+n)/this.domRect.width).toFixed(4)}%`:`${Math.round(this.resizingRect.width+n)}px`;const c={width:u,height:Math.round(this.resizingRect.height+a)};this.childRects=[],this.domRect=null;(0,e.getAppConfigAction)().editLayoutItemProperty({layoutId:this.props.layout.id,layoutItemId:t},"bbox",c).exec()},this.handleDragOver=(e,o,i,n)=>{var a;let l=n;if(this.canvasPane.clear(),(null===(a=this.childRects)||void 0===a?void 0:a.length)>0){const{insertX:t,refId:e}=function(t,e,o){const i=s.utils.isRTL(),n=e.left+e.width/2;let a,l,r=!1;if(o.some(((e,s)=>{const d=e.left+e.width/2;if(i){if(d<n){if(0===s)a=e.left+e.width+(t.width-e.left-e.width)/2;else{const t=o[s-1];a=(e.left+e.width+t.left)/2}r=!0,l=e.id}}else if(d>n){if(0===s)a=e.left/2;else{const t=o[s-1];a=(e.left+t.left+t.width)/2}r=!0,l=e.id}return r})),!r){const e=o[o.length-1];a=i?e.left/2:(e.left+e.width+t.width)/2}return{refId:l,insertX:a}}(i,l,this.childRects);this.referenceId=e,l={left:t-5+this.ref.scrollLeft,height:i.height-Ca,top:5,width:Ca}}else l={left:i.width/2-5,height:i.height-Ca,top:5,width:Ca};this.canvasPane.setColor(t.polished.rgba(this.builderTheme.sys.color.primary.light,.5)),this.canvasPane.drawRect(l)},this.handleToggleDragoverEffect=(t,e)=>{var o;t&&(this.referenceId=null,this.collectBounds((null===(o=e.layoutInfo)||void 0===o?void 0:o.layoutId)===this.props.layout.id?e.layoutInfo.layoutItemId:null)),this.setState({isDragover:t})},this.handleDrop=(o,i,n)=>{var a;this.canvasPane.clear();const{layout:l}=this.props;let r=0;if(null!=this.referenceId){if(r=l.order.indexOf(this.referenceId),(null===(a=o.layoutInfo)||void 0===a?void 0:a.layoutId)===l.id){l.order.indexOf(o.layoutInfo.layoutItemId)<r&&(r-=1)}}else null!=l.order&&(r=l.order.length);V((0,e.getAppConfigAction)().appConfig,o,l.id).then((a=>{const{layoutInfo:l,updatedAppConfig:d}=a,u=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.FlexRowLayout).processAfterItemAdded(d,o,l,{currentSizeMode:null,containerRect:i,itemRect:n,insertIndex:r});s.utils.changeLayout(u,l)})).finally(null),this.referenceId=null,this.childRects=[]}}componentDidMount(){this.canvasPane=new Ji(this.canvasRef),this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}componentDidUpdate(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.getBoundingClientRect();const o=this.ref.parentNode.querySelectorAll(`div[data-layoutid="${e.id}"] > .trail-container > div.exb-rnd`);return(null==o?void 0:o.length)>0&&o.forEach((o=>{const i=o.getAttribute("data-layoutitemid");if(t!==i&&e.order.includes(i)){const t=s.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=i,this.childRects.push(t)}})),this.childRects.sort(((t,e)=>s.utils.isRTL()?e.left-t.left:t.left-e.left))}createItem(e,o){const{layout:i,itemDraggable:n,itemResizable:s,itemSelectable:a,showDefaultTools:l}=this.props;return(0,t.jsx)(xa,{key:e,index:o,layoutId:i.id,layoutItemId:e,layoutItem:i.content[e],draggable:n,resizable:s,selectable:a,showDefaultTools:l,onResizeStart:this.handleItemResizeStart,onResizeEnd:this.handleItemResizeEnd})}isEmpty(){var t;const{layout:e}=this.props,o=null!==(t=e.order)&&void 0!==t?t:[];return!(o.length>0&&o.some((t=>!e.content[t].isPending)))}render(){var e;const{layout:i,className:n}=this.props,a=null!==(e=i.order)&&void 0!==e?e:[],l=Object.assign({},Ia,i.setting),r=this.isEmpty();return(0,t.jsx)(s.PageContext.Consumer,null,(e=>{this.builderTheme=e.builderTheme,this.theme=e.theme;const s={position:"relative",minWidth:l.min},d=(0,t.classNames)("layout flex-row-layout",n),u={display:this.state.isDragover?"block":"none"};return(0,t.jsx)("div",{className:d,ref:t=>{this.ref=t},style:s,"data-layoutid":i.id},(0,t.jsx)(t.IntersectionContext.Provider,{value:{monitor:!0,layoutId:i.id}},(0,t.jsx)(t.OneByOneAnimation,{oid:i.id,className:"trail-container d-flex w-100",css:t.css`
                    position: ${r?"absolute":null};
                    padding: ${o.styleUtils.toCSSPadding(l.padding)};
                    ${ba(l)};
                  `},(0,t.jsx)(Ye,{css:wa,layouts:this.props.layouts,highlightDragover:!0,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),a.map(((t,e)=>this.createItem(t,e))))),r&&!ut()&&this.props.children,(0,t.jsx)("canvas",{css:Sa,style:u,ref:t=>{this.canvasRef=t}}))}))}}const Ta=t.ReactRedux.connect(s.utils.mapStateToLayoutProps)(Ra);var Ma=p(5562);class Aa extends t.React.PureComponent{constructor(o){super(o),this.modalStyle={position:"absolute",top:"0",bottom:"0",width:"100%",height:"auto",paddingBottom:"1px"},this.onTransitionSettingChange=o=>{const{layoutId:i,layoutItemId:n}=this.props,s=(0,e.getAppConfigAction)(),a=s.appConfig.layouts[i].content[n];s.editSectionProperty(a.sectionId,"transition",o).exec(),(null==o?void 0:o.type)!==t.TransitionType.None&&this.previewTransition()},this.onHoverEffectChange=o=>{var i,n;const{layoutId:s,layoutItemId:a}=this.props,l=(0,e.getAppConfigAction)();(null===(n=(null!==(i=l.appConfig.layouts[s].content[a].setting)&&void 0!==i?i:(0,t.Immutable)({})).hoverEffect)||void 0===n?void 0:n.type)!==o.type&&l.editLayoutItemProperty({layoutId:s,layoutItemId:a},"setting.hoverEffect",o).exec(),o.type!==t.HoverType.None&&e.builderAppSync.publishHoverPreviewToApp({layoutInfo:{layoutId:s,layoutItemId:a},id:(0,t.getNextAnimationId)()})},this.onEffectSettingChange=(o,i)=>{const n=t.AnimationTriggerType.ScrollIntoView,{layoutId:s,layoutItemId:a,setting:l}=this.props,r=l||(0,t.Immutable)({}),d=o===t.AnimationPlayMode.OneByOne?"oneByOneEffect":"effect";this.props.onSettingChange({layoutId:s,layoutItemId:a},r.setIn([d,n],i)),(null==i?void 0:i.type)!==t.AnimationType.None&&e.builderAppSync.publishAnimationPreviewToApp({layoutInfo:{layoutId:s,layoutItemId:a},playMode:o,id:(0,t.getNextAnimationId)()})},this.onSectionOneByOneEffectSettingChange=e=>{this.onEffectSettingChange(t.AnimationPlayMode.OneByOne,e)},this.previewAnimation=o=>{this.hasAnimationEffect()&&e.builderAppSync.publishAnimationPreviewToApp({layoutInfo:{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},playMode:o,id:(0,t.getNextAnimationId)()})},this.previewTransition=(o=!1)=>{var i,n,a;const{sectionId:l}=this.props,r=s.searchUtils.getSectionInfo((0,t.getAppStore)().getState().appStateInBuilder,l),{views:d}=r;if((null==d?void 0:d.length)>1){let s=null===(a=null===(n=null===(i=(0,t.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===n?void 0:n.sectionNavInfos)||void 0===a?void 0:a[l];if(!s){const e=Pt(r),o=d.indexOf(e),i=o>0?o-1:o+1;s=(0,t.Immutable)({currentViewId:e,previousViewId:d[i]})}e.builderAppSync.publishSectionNavInfoToApp(l,s.set("playId",(0,t.getNextAnimationId)()).set("withOneByOne",o).asMutable())}},this.previewTransitionAndOnebyOne=()=>{this.previewTransition(!0)},this.previewOneByOneInSection=()=>{this.previewAnimation(t.AnimationPlayMode.OneByOne)},this.previewHover=()=>{this.hasHoverEffect()&&e.builderAppSync.publishHoverPreviewToApp({layoutInfo:{layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},id:(0,t.getNextAnimationId)()})},this.onPlayModeChange=t=>{const{layoutId:o,layoutItemId:i}=this.props;(0,e.getAppConfigAction)().editLayoutItemProperty({layoutId:o,layoutItemId:i},"setting.effectPlayMode",t).exec()},this.switchToIn=()=>{this.setState({animationType:"in"})},this.switchToTransition=()=>{this.setState({animationType:"transition"})},this.switchToHover=()=>{this.setState({animationType:"hover"})},this.state={animationType:"in"}}hasAnimationEffect(){var e,o;const{setting:i}=this.props,n=null===(e=null==i?void 0:i.effect)||void 0===e?void 0:e[t.AnimationTriggerType.ScrollIntoView],s=null===(o=null==i?void 0:i.oneByOneEffect)||void 0===o?void 0:o[t.AnimationTriggerType.ScrollIntoView];return n&&n.type!==t.AnimationType.None||s&&s.type!==t.AnimationType.None}hasHoverEffect(){const{setting:e}=this.props,o=null==e?void 0:e.hoverEffect;return o&&o.type!==t.HoverType.None}render(){var e,i;const{formatMessage:n,supportOneByOne:s,isSection:a,transitionType:l,transitionDirection:r,setting:d}=this.props,{animationType:u}=this.state,c=null===(e=null==d?void 0:d.effect)||void 0===e?void 0:e[t.AnimationTriggerType.ScrollIntoView],p=null===(i=null==d?void 0:d.oneByOneEffect)||void 0===i?void 0:i[t.AnimationTriggerType.ScrollIntoView];return(0,t.jsx)(He.SettingSection,{role:"group","aria-label":n("animation"),title:n("animation")},a&&(0,t.jsx)(He.SettingRow,null,(0,t.jsx)(o.AdvancedButtonGroup,{className:"w-100",css:t.css`
              border-bottom: 1px solid var(--sys-color-primary-main);
              .jimu-btn {
                width: 50%;
                border-radius: 2px 2px 0 0;
              }
            `},(0,t.jsx)(o.Button,{active:"in"===u,onClick:this.switchToIn},n("in")),(0,t.jsx)(o.Button,{className:"ml-1",active:"transition"===u,onClick:this.switchToTransition},n("transition")))),"in"===u&&(0,t.jsx)(He.SettingRow,null,(0,t.jsx)(Ma.AnimationSettingComponent,{effectSetting:c,oneByOneSetting:p,onSettingChange:this.onEffectSettingChange,previewEnabled:!0,supportAsOne:!0,supportOneByOne:s,onPreviewClicked:this.previewAnimation,formatMessage:n})),"transition"===u&&(0,t.jsx)(He.SettingRow,{flow:"wrap"},(0,t.jsx)(Ma.TransitionSetting,{transition:{type:l,direction:r},transitionLabel:n("view"),oneByOneEffect:p,onOneByOneChange:this.onSectionOneByOneEffectSettingChange,onTransitionChange:this.onTransitionSettingChange,onPreviewTransitionClicked:this.previewTransition,onPreviewOneByOneClicked:this.previewOneByOneInSection,onPreviewAsAWhoneClicked:this.previewTransitionAndOnebyOne,formatMessage:n})))}}const La=(0,t.createSelector)([(t,e)=>{var o,i;const{layoutId:n,layoutItemId:s}=e,a=null===(i=null===(o=t.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===i?void 0:i.layouts[n].content[s];return null==a?void 0:a.setting},(e,o)=>{var i,n;const{layoutId:s,layoutItemId:a}=o,l=null===(n=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.layouts[s].content[a];return(null==l?void 0:l.type)===t.LayoutItemType.Widget},(e,o)=>{var i,n,s,a,l,r;const{layoutId:d,layoutItemId:u}=o,c=null===(n=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.layouts[d].content[u];if((null==c?void 0:c.type)===t.LayoutItemType.Widget){const o=null===(s=e.appStateInBuilder)||void 0===s?void 0:s.appConfig.widgets[c.widgetId],i=null===(l=null===(a=null==o?void 0:o.manifest)||void 0===a?void 0:a.properties)||void 0===l?void 0:l.forbidOneByOneEffect;return(null===(r=null==o?void 0:o.manifest)||void 0===r?void 0:r.widgetType)===t.WidgetType.Layout&&!i}return!1},(e,o)=>{var i,n,s;const{layoutId:a,layoutItemId:l}=o,r=null===(n=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===n?void 0:n.layouts[a].content[l];if((null==r?void 0:r.type)===t.LayoutItemType.Section)return null===(s=e.appStateInBuilder)||void 0===s?void 0:s.appConfig.sections[r.sectionId]}],((t,e,o,i)=>{var n,s;return{setting:t,isWidget:e,supportOneByOne:o,isSection:null!=i,transitionType:null===(n=null==i?void 0:i.transition)||void 0===n?void 0:n.type,transitionDirection:null===(s=null==i?void 0:i.transition)||void 0===s?void 0:s.direction,sectionId:null==i?void 0:i.id}})),Pa=t.ReactRedux.connect(La)(Aa);class ja extends t.React.PureComponent{constructor(){super(...arguments),this.onBackgroundStyleChange=t=>{this.updateStyle("background",t)},this.updateBorder=e=>{var o;this.updateStyle("border",e);const i=(0,t.Immutable)(null!==(o=this.props.style)&&void 0!==o?o:{});this.props.onStyleChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},i.set("border",e).without("borderTop").without("borderLeft").without("borderRight").without("borderBottom"))},this.updateBorderSide=(e,o)=>{var i;const n=(0,t.Immutable)(null!==(i=this.props.style)&&void 0!==i?i:{});this.props.onStyleChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},n.set(t.lodash.camelCase(`border-${e}`),o).without("border"))},this.updateRadius=t=>{this.updateStyle("borderRadius",t)},this.updateShadow=t=>{this.updateStyle("boxShadow",t)},this.formatMessage=t=>this.props.formatMessage(t)}updateStyle(e,o){var i;const n=(0,t.Immutable)(null!==(i=this.props.style)&&void 0!==i?i:{});this.props.onStyleChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},n.set(e,o))}allowCoverBackground(){var o,i,n;const{layoutId:s,layoutItemId:a}=this.props,l=(0,e.getAppConfigAction)().appConfig,r=l.layouts[s].content[a];if(r.type===t.LayoutItemType.Widget){const t=r.widgetId;return null===(n=null===(i=null===(o=l.widgets[t])||void 0===o?void 0:o.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.coverLayoutBackground}return!1}allowAnimation(){const{layoutId:o}=this.props;return(0,e.getAppConfigAction)().appConfig.layouts[o].type!==t.LayoutType.AccordionLayout}render(){const{layoutId:e,layoutItemId:o}=this.props,i=this.props.style||{};return(0,t.jsx)("div",{className:"common-layout-item-setting"},this.allowAnimation()&&(0,t.jsx)(Pa,{layoutId:e,layoutItemId:o,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}),!this.props.isSection&&!this.allowCoverBackground()&&(0,t.jsx)(Ma.ThemeBackgroundSection,{background:i.background,onChange:this.onBackgroundStyleChange}),(0,t.jsx)(Ma.ThemeBorderSection,{key:`${e}-${o}`,border:i.border,borderTop:i.borderTop,borderLeft:i.borderLeft,borderRight:i.borderRight,borderBottom:i.borderBottom,borderRadius:i.borderRadius,onBorderChange:this.updateBorder,onBorderSideChange:this.updateBorderSide,onBorderRadiusChange:this.updateRadius}),(0,t.jsx)(Ma.ThemeBoxShadowSection,{value:i.boxShadow,onChange:this.updateShadow}))}}class za extends t.React.PureComponent{constructor(){super(...arguments),this.updateRotation=e=>{var o;const i=(0,t.Immutable)(null!==(o=this.props.setting)&&void 0!==o?o:{});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItemId},i.setIn(["style","transform","rotate"],e))},this.formatMessage=t=>this.props.formatMessage(t)}render(){var e,i,n;const s=this.props.setting||{};return(0,t.jsx)(He.SettingRow,{label:this.formatMessage("rotation"),className:"rotation-setting"},(0,t.jsx)(o.NumericInput,{"aria-label":this.formatMessage("rotation"),value:null!==(n=null===(i=null===(e=s.style)||void 0===e?void 0:e.transform)||void 0===i?void 0:i.rotate)&&void 0!==n?n:0,min:-360,max:360,precision:2,onChange:this.updateRotation,formatter:t=>`${t}\xb0`,parser:t=>t.replace("\xb0",""),css:t.css`width: 72px;`,size:"sm"}))}}var Na=p(4005),ka=p.n(Na),$a=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Ea=e=>{const o=window.SVG,{className:i}=e,n=$a(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:ka()},n)):t.React.createElement("svg",Object.assign({className:s},n))},Oa=[o.DistanceUnits.PIXEL,o.DistanceUnits.PERCENTAGE];class Ba extends t.React.PureComponent{constructor(t){super(t),this.updateBBox=(t,e)=>{const i=this.props.layoutItem.bbox,{distance:n,unit:a}=e,l=i[t];let r=n.toFixed(2);if(s.utils.isPercentage(l)&&a===o.DistanceUnits.PIXEL){const e=this.getSizeOfContainer();null!=e&&(r="left"===t||"right"===t||"width"===t?Math.round(parseFloat(l)*e.width/100):Math.round(parseFloat(l)*e.height/100))}else if(!s.utils.isPercentage(l)&&a===o.DistanceUnits.PERCENTAGE){const e=this.getSizeOfContainer();null!=e&&(r="left"===t||"right"===t||"width"===t?(100*parseFloat(l)/e.width).toFixed(2):(100*parseFloat(l)/e.height).toFixed(2))}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.set(t,e.unit===o.DistanceUnits.PERCENTAGE?`${r}%`:`${r}px`))},this.flipLeftRight=s.utils.isRTL()}getStyle(){return t.css`
      .position-setting {
        background-color: var(--ref-palette-neutral-500);
        position: relative;
        width: 100%;
        padding-top: 60%;
        overflow: visible;
      }

      .content {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        padding: 7px;
      }

      .w-half {
        width: calc(50% - 16px);
        position: relative;
        z-index: 0;
      }
      .h-half {
        height: calc(50% - 16px);
        position: relative;
        z-index: 0;
      }
      .pos-label {
        z-index: 1;
      }

      .box-column {
        width: 32px;
        overflow: visible;
      }

      .box-item {
        width: 24px;
        height: 24px;
        background-color: var(--ref-palette-neutral-800);
        margin: 4px 0;
        position: relative;
        overflow: visible;

        &.stretch {
          background-color: transparent;
          border: 1px solid var(--ref-palette-neutral-800);
        }
        .h-arrow, .v-arrow {
          display: none;
          .arrow-icon {
            color: var(--ref-palette-neutral-800);
            width: 100%;
            height: 100%;
          }
          position: absolute;
          width: 100%;
        }
        .h-arrow {
          top: 50%;
          transform: translateY(-50%);
        }
        .v-arrow {
          left: 50%;
          transform: translateX(-50%);
        }
        &.stretch-w .h-arrow,
        &.stretch-h .v-arrow {
          display: block;
        }
      }

      .anchor {
        position: absolute;
        width: 16px;
        height: 16px;
        background: transparent;
        overflow: visible;

        &.selected {
          width: 10px;
          height: 10px;
          opacity: 1;
          background: var(--sys-color-primary-dark);
          border: 2px solid var(--sys-color-primary-main) !important;
          border-radius: 3px !important;
        }
        &.top.left {
          border-radius: 3px 0 0 0;
        }
        &.top.right {
          border-radius: 0 3px 0 0;
        }
        &.bottom.right {
          border-radius: 0 0 3px 0;
        }
        &.bottom.left {
          border-radius: 0 0 0 3px;
        }
        &.left {
          left: 6px;
          border-left: 2px solid var(--ref-palette-neutral-800);
          &.selected:before {
            position: absolute;
            right: -10px;
            top: 50%;
            transform: translateY(-50%);
            content: '';
            height: 2px;
            width: 10px;
            background-color: var(--sys-color-primary-main);
          }
        }
        &.top {
          top: 6px;
          border-top: 2px solid var(--ref-palette-neutral-800);
          &.selected:after {
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            content: '';
            width: 2px;
            height: 10px;
            background-color: var(--sys-color-primary-main);
          }
        }
        &.bottom {
          bottom: 6px;
          border-bottom: 2px solid var(--ref-palette-neutral-800);
          &.selected:after {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            content: '';
            width: 2px;
            height: 10px;
            background-color: var(--sys-color-primary-main);
          }
        }
        &.right {
          right: 6px;
          border-right: 2px solid var(--ref-palette-neutral-800);
          &.selected:before {
            position: absolute;
            left: -10px;
            top: 50%;
            transform: translateY(-50%);
            content: '';
            height: 2px;
            width: 10px;
            background-color: var(--sys-color-primary-main);
          }
        }
      }

      .from-left {
        border-left: 2px solid var(--sys-color-primary-main);
        &.is-auto {
          border-left-color: var(--ref-palette-neutral-800);
        }
        &.allow-change:hover {
          border-left-color: var(--sys-color-primary-main);
        }
      }
      .from-top {
        border-top: 2px solid var(--sys-color-primary-main);
        &.is-auto {
          border-top-color: var(--ref-palette-neutral-800);
        }
        &.allow-change:hover {
          border-top-color: var(--sys-color-primary-main);
        }
      }
      .from-right {
        border-right: 2px solid var(--sys-color-primary-main);
        &.is-auto {
          border-right-color: var(--ref-palette-neutral-800);
        }
        &.allow-change:hover {
          border-right-color: var(--sys-color-primary-main);
        }
      }
      .from-bottom {
        border-bottom: 2px solid var(--sys-color-primary-main);
        &.is-auto {
          border-bottom-color: var(--ref-palette-neutral-800);
        }
        &.allow-change:hover {
          border-bottom-color: var(--sys-color-primary-main);
        }
      }
      /* .line-h.is-auto,
      .line-v.is-auto {
        border-color: var(--ref-palette-neutral-800);
      } */
      .line-h {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        height: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 0;

        &.allow-change {
          cursor: pointer;
          &:hover:after {
            border-top-color: var(--sys-color-primary-main);
          }
        }
        &:after {
          content: '';
          height: 0;
          width: 100%;
          border-top: 2px solid var(--sys-color-primary-main);
        }
        &.is-auto:after {
          border-top-style: dashed;
          border-top-color: var(--ref-palette-neutral-800);
        }
      }
      .line-v {
        position: absolute;
        height: 100%;
        width: 12px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        z-index: 0;

        &.allow-change {
          cursor: pointer;
          &:hover:after {
            border-left-color: var(--sys-color-primary-main);
          }
        }
        &:after {
          content: '';
          width: 0;
          height: 100%;
          border-left: 2px solid var(--sys-color-primary-main);
        }
        &.is-auto:after {
          border-left-style: dashed;
          border-left-color: var(--ref-palette-neutral-800);
        }
      }

      .auto-label {
        width: 16px;
        height: 16px;
        background: var(--sys-color-primary-main);
        border: 1px solid var(--ref-palette-neutral-500);
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--ref-palette-neutral-400);
      }

      .style-setting--input-unit {
        &:hover {
          input.jimu-numeric-input-input {
            background-color: var(--ref-palette-neutral-300);
          }
          .style-setting--unit-selector {
            background-color: var(--ref-palette-neutral-300);
          }
        }
        border-radius: 2px;
        width: 52px;
        height: 24px;

        input.jimu-numeric-input-input {
          height: 24px;
          font-size: 12px;
          padding: 0;
          text-align: center;
          border: none;
          background-color: var(--ref-palette-neutral-500);
          &:focus {
            background-color: var(--ref-palette-neutral-300);
          }
        }
        .style-setting--unit-selector {
          background-color: var(--ref-palette-neutral-500);
          color: var(--ref-palette-neutral-900);
          height: 24px;
          width: auto;
          min-width: 0;
          padding: 0;
          margin-left: 0;
          font-size: 12px;
          border: none;
        }
      }

      .origin-tip {
        margin-top: 8px;
        font-size: 12px;
        color: var(--ref-palette-neutral-900);
      }
    `}inputUnit(e){const{layoutItem:i,formatMessage:n}=this.props,s=o.utils.stringOfLinearUnit(i.bbox[e]);return(0,t.jsx)("div",{className:"pos-label",role:"group","aria-label":n(e)},(0,t.jsx)(Ma.InputUnit,{units:Oa,min:-1/0,max:1/0,value:s,onChange:t=>{this.updateBBox(e,t)}}))}getSizeOfContainer(){const t=this.querySelector(`div.fixed-layout[data-layoutid="${this.props.layoutId}"]`);return null==t?void 0:t.getBoundingClientRect()}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return null==o?void 0:o.getBoundingClientRect()}querySelector(e){var o;const i=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);if(null!=i){return(null!==(o=i.contentDocument)&&void 0!==o?o:i.contentWindow.document).querySelector(e)}return null}switchAuto(e,o,i){var n,a;const{layoutId:l,layoutItem:r}=this.props,d=null!==(n=r.setting)&&void 0!==n?n:(0,t.Immutable)({});let u=null!==(a=r.bbox)&&void 0!==a?a:(0,t.Immutable)({});if(i&&null==u[e]){const t=this.getSizeOfContainer(),o=this.getSizeOfItem();switch(e){case"left":u=u.set(e,s.utils.toRatio(o.left,t.width));break;case"right":u=u.set(e,s.utils.toRatio(t.width-o.right,t.width));break;case"top":u=u.set(e,s.utils.toRatio(o.top,t.height));break;case"bottom":u=u.set(e,s.utils.toRatio(t.height-o.bottom,t.height))}this.props.onPosChange({layoutId:l,layoutItemId:r.id},u)}this.props.onSettingChange({layoutId:l,layoutItemId:r.id},d.setIn(["autoProps",e],!i).setIn(["autoProps",o],i))}checkAutoProps(t){const e=vi(this.props.layoutItem.bbox,t);return{leftAuto:null==e.left||t.hCenter&&"50%"===e.left,rightAuto:null==e.right||t.hCenter&&"50%"===e.left,topAuto:null==e.top||t.vCenter&&"50%"===e.top,bottomAuto:null==e.bottom||t.vCenter&&"50%"===e.top}}checkOrigin(t,e,o,i){let n=t,a=e,l=o,r=i;return t===e&&(n=s.utils.isRTL(),a=!n),o===i&&(l=!1,r=!0),{top:l,bottom:r,left:n,right:a}}allowChangeAutoProps(t){var e;const o=this.props.layoutItem.setting,i=null!==(e=null==o?void 0:o.autoProps)&&void 0!==e?e:{};return!(s.utils.getLayoutItemSizeMode(t,this.props.layoutItem.bbox,i)===s.LayoutItemSizeModes.Stretch||"width"===t&&(null==o?void 0:o.hCenter)||"height"===t&&(null==o?void 0:o.vCenter))}getOrigin(t,e,o,i){const{formatMessage:n}=this.props;return t||e?o||e?o||i?t||i?"":this.flipLeftRight?n("BR"):n("BL"):this.flipLeftRight?n("BL"):n("BR"):this.flipLeftRight?n("TL"):n("TR"):this.flipLeftRight?n("TR"):n("TL")}render(){const{layoutItem:e,widthMode:i,heightMode:a,formatMessage:l}=this.props;if(null==e)return null;const r=t.lodash.assign({},n,e.setting),{leftAuto:d,rightAuto:u,topAuto:c,bottomAuto:p}=this.checkAutoProps(r),{top:h,bottom:g,left:m,right:y}=this.checkOrigin(d,u,c,p),f=this.allowChangeAutoProps("width"),v=this.allowChangeAutoProps("height");return(0,t.jsx)("div",{css:this.getStyle(),className:"w-100"},(0,t.jsx)("div",{className:"position-setting rounded-2"},(0,t.jsx)("div",{className:"content d-flex justify-content-center align-items-center"},(0,t.jsx)("div",{className:"d-flex w-half flex-column justify-content-center align-items-center"},(0,t.jsx)("div",{className:"d-flex w-100 justify-content-center align-items-center"},(0,t.jsx)(o.Tooltip,{placement:"bottom",title:f?l(d?"changeToCustom":"changeToAuto"):""},(0,t.jsx)("div",{className:(0,t.classNames)("from-left line-h flex-grow-1 flex-shrink-1",{"is-auto":d,"allow-change":f}),onClick:f?this.switchAuto.bind(this,"left","right",d):null})),d?null:this.inputUnit("left"))),(0,t.jsx)("div",{className:"d-flex h-100 flex-column justify-content-center align-items-center box-column"},(0,t.jsx)("div",{className:"d-flex h-half w-100 flex-column justify-content-center align-items-center"},(0,t.jsx)(o.Tooltip,{placement:"bottom",title:v?l(c?"changeToCustom":"changeToAuto"):""},(0,t.jsx)("div",{className:(0,t.classNames)("from-top line-v flex-grow-1 flex-shrink-1",{"is-auto":c,"allow-change":v}),onClick:v?this.switchAuto.bind(this,"top","bottom",c):null})),c?null:this.inputUnit("top")),(0,t.jsx)("div",{className:(0,t.classNames)("box-item rounded-lg",{stretch:i===s.LayoutItemSizeModes.Stretch||a===s.LayoutItemSizeModes.Stretch,"stretch-w":i===s.LayoutItemSizeModes.Stretch,"stretch-h":a===s.LayoutItemSizeModes.Stretch})},(0,t.jsx)("div",{className:"h-arrow"},(0,t.jsx)(Ea,{className:"arrow-icon"})),(0,t.jsx)("div",{className:"v-arrow"},(0,t.jsx)(Ea,{className:"arrow-icon",rotate:90}))),(0,t.jsx)("div",{className:"d-flex h-half w-100 flex-column justify-content-center align-items-center"},(0,t.jsx)(o.Tooltip,{placement:"bottom",title:v?l(p?"changeToCustom":"changeToAuto"):""},(0,t.jsx)("div",{className:(0,t.classNames)("from-bottom line-v flex-grow-1 flex-shrink-1",{"is-auto":p,"allow-change":v}),onClick:v?this.switchAuto.bind(this,"bottom","top",p):null})),p?null:this.inputUnit("bottom"))),(0,t.jsx)("div",{className:"d-flex w-half flex-column justify-content-center align-items-center"},(0,t.jsx)("div",{className:"d-flex w-100 justify-content-center align-items-center"},(0,t.jsx)(o.Tooltip,{placement:"bottom",title:f?l(u?"changeToCustom":"changeToAuto"):""},(0,t.jsx)("div",{className:(0,t.classNames)("from-right line-h flex-grow-1 flex-shrink-1",{"is-auto":u,"allow-change":f}),onClick:f?this.switchAuto.bind(this,"right","left",u):null})),u?null:this.inputUnit("right"))),(0,t.jsx)("div",{className:(0,t.classNames)("anchor top left",{selected:!m&&!h})}),(0,t.jsx)("div",{className:(0,t.classNames)("anchor top right",{selected:!y&&!h})}),(0,t.jsx)("div",{className:(0,t.classNames)("anchor bottom left",{selected:!m&&!g})}),(0,t.jsx)("div",{className:(0,t.classNames)("anchor bottom right",{selected:!g&&!y})}))),(0,t.jsx)("div",{className:"origin-tip d-flex justify-content-center align-item-center"},this.getOrigin(m,h,y,g)))}}const Da=[s.LayoutItemSizeModes.Auto,s.LayoutItemSizeModes.Custom,s.LayoutItemSizeModes.Stretch],Fa=[s.LayoutItemSizeModes.Custom,s.LayoutItemSizeModes.Stretch],Ha=[...[yi[1][1],yi[1][2],yi[1][3],yi[1][4],{separator:!0},yi[0][1],yi[0][2],yi[0][3]].map((t=>Object.assign(Object.assign({},t),{title:t.title,label:null}))),[{icon:l(),caret:!1},yi[0][4],yi[0][5],yi[0][6],{separator:!0},yi[0][7],yi[0][8],yi[0][9]]];class Va extends t.React.PureComponent{constructor(i){super(i),this.updateBBox=(t,e)=>{var i;let n=this.props.layoutItem.bbox;const{distance:a,unit:l}=e,r=n[t],d=this.getSizeOfContainer();let u,c=a.toFixed(2);if(s.utils.isPercentage(r)&&l===o.DistanceUnits.PIXEL?d&&(c="left"===t||"right"===t||"width"===t?Math.round(parseFloat(r)*d.width/100):Math.round(parseFloat(r)*d.height/100),u=c):s.utils.isPercentage(r)||l!==o.DistanceUnits.PERCENTAGE||(d&&(c="left"===t||"right"===t||"width"===t?(100*parseFloat(r)/d.width).toFixed(4):(100*parseFloat(r)/d.height).toFixed(4)),u=parseFloat(r)),u||l!==o.DistanceUnits.PERCENTAGE)u||l!==o.DistanceUnits.PIXEL||(u=a);else{const e="width"===t?d.width:d.height;u=Math.round(a*e/100)}if(n=n.set(t,l===o.DistanceUnits.PERCENTAGE?`${c}%`:`${c}px`),"ratio"===(null===(i=this.props.layoutItem.setting)||void 0===i?void 0:i.heightMode)){const e=s.utils.parseAspectRatio(this.props.layoutItem.setting.aspectRatio);if("width"===t){const t=u*e;if(s.utils.isPercentage(n.height)){const e=(100*t/d.height).toFixed(4);n=n.set("height",`${e}%`)}else n=n.set("height",`${Math.round(t)}px`)}else{const t=u/e;if(s.utils.isPercentage(n.width)){const e=(100*t/d.width).toFixed(4);n=n.set("width",`${e}%`)}else n=n.set("width",`${Math.round(t)}px`)}}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n)},this.updateMode=(o,i)=>{var n;const a=null!==(n=this.props.layoutItem.setting)&&void 0!==n?n:(0,t.Immutable)({}),l={layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id};if(i===s.LayoutItemSizeModes.Custom){const t=this.getSizeOfContainer(),n=this.getSizeOfItem();if(t&&n){const s=(100*n[o]/t[o]).toFixed(4);return void(0,e.getAppConfigAction)().editLayoutItemProperty(l,"setting",a.setIn(["autoProps",o],i)).editLayoutItemProperty(l,`bbox.${o}`,`${s}%`).exec()}}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},a.setIn(["autoProps",o],i))},this.updateLockParent=e=>{let o=this.props.layoutItem.setting||(0,t.Immutable)({});o=o.set("lockParent",e.target.checked),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.toggleHeightMode=()=>{let e=this.props.layoutItem.setting||(0,t.Immutable)({});const o="ratio"===e.heightMode?"fixed":"ratio";if(e=e.set("heightMode",o),"ratio"===o){const t=this.getSizeOfItem();t&&(e=e.set("aspectRatio",Number((t.height/t.width).toFixed(2))).setIn(["autoProps","height","AUTO"]))}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.updateAspectRatio=e=>{let o=this.props.layoutItem.setting||(0,t.Immutable)({});o=o.set("aspectRatio",e),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.flipLeftRight=s.utils.isRTL(),this.state={enableToolbar:!1}}componentDidMount(){this.ref&&this.setState({enableToolbar:!0})}getSizeOfContainer(){const t=this.querySelector(`div.fixed-layout[data-layoutid="${this.props.layoutId}"]`);return t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(e){const o=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);if(o){return(o.contentDocument||o.contentWindow.document).querySelector(e)}return null}getStyle(){return t.css`
      .layout-item-toolbar {
        box-shadow: none;
        background: transparent;

        .toolbar-item, icon-container {
          width: 28px;
          min-height: 28px;
        }
        .toolbar-group {
          background: transparent;
          margin: 0 1px;
        }
        .toolbar-item {
          margin: 0 1px;
          background: transparent;
          &:hover {
            background: var(--ref-palette-neutral-500);
          }

          svg {
            width: 14px;
            height: 14px;
          }
        }
      }

      .ratio-value {
        font-size: 12px;
      }
    `}render(){const{layoutItem:e,layoutId:i,formatMessage:a,isLockLayout:l,supportAutoSize:r}=this.props;if(!e)return null;this.itemSetting=t.lodash.assign({},n,e.setting);const d="ratio"===this.itemSetting.heightMode,c=s.utils.getLayoutItemSizeMode("width",e.bbox,this.itemSetting.autoProps),p=s.utils.getLayoutItemSizeMode("height",e.bbox,this.itemSetting.autoProps),h=e.bbox,g=(0,u.getTheme)(),m=t.css`width: 100px;`;return(0,t.jsx)("div",{className:"fixed-item-setting",css:this.getStyle(),ref:t=>{this.ref=t}},!l&&this.state.enableToolbar&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(He.SettingSection,{className:"p-0 d-flex justify-content-center"},(0,t.jsx)(Kt,{layoutId:i,layoutItem:e,parentRef:this.ref,theme:g,tools:Ha,formatMessage:this.props.formatMessage})),(0,t.jsx)(He.SettingSection,{role:"group","aria-label":`${a("size")} & ${a("position")}`,title:`${a("size")} & ${a("position")}`},(0,t.jsx)(He.SettingRow,{role:"group","aria-label":a("width"),label:a("width")},(0,t.jsx)("div",{css:m},(0,t.jsx)(Ma.SizeEditor,{label:"W",mode:c,sizeModes:r&&!d?Da:Fa,value:o.utils.stringOfLinearUnit(h.width),onChange:t=>{this.updateBBox("width",t)},onModeChange:t=>{this.updateMode("width",t)}}))),c!==s.LayoutItemSizeModes.Auto&&(0,t.jsx)("div",null,(0,t.jsx)(o.Tooltip,{title:a("keepAspectRatio"),placement:"bottom"},(0,t.jsx)(o.Button,{size:"sm",type:"tertiary",className:"ml-1",icon:!0,onClick:this.toggleHeightMode,"aria-pressed":d},d?(0,t.jsx)(Ee,{size:"s"}):(0,t.jsx)(is,{size:"s"})))),(0,t.jsx)(He.SettingRow,{role:"group","aria-label":a("height"),label:a("height"),className:(0,t.classNames)({"mt-0":c!==s.LayoutItemSizeModes.Auto})},(0,t.jsx)("div",{css:m},(0,t.jsx)(Ma.SizeEditor,{label:"H",mode:p,sizeModes:r?Da:Fa,disabled:d,value:o.utils.stringOfLinearUnit(h.height),onChange:t=>{this.updateBBox("height",t)},onModeChange:t=>{this.updateMode("height",t)}}))),d&&(0,t.jsx)(He.SettingRow,{"aria-label":a("aspectRatio"),label:a("aspectRatio")},(0,t.jsx)(Ma.InputRatio,{value:this.itemSetting.aspectRatio,style:{width:100},onChange:this.updateAspectRatio})),(0,t.jsx)(He.SettingRow,null,(0,t.jsx)(Ba,Object.assign({},this.props,{widthMode:c,heightMode:p}))),(0,t.jsx)(za,{layoutId:i,layoutItemId:e.id,setting:e.setting,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage})),(0,t.jsx)(He.SettingSection,null,(0,t.jsx)(He.SettingRow,{tag:"label",label:a("lockParent")},(0,t.jsx)(o.Switch,{checked:this.itemSetting.lockParent,onChange:this.updateLockParent})))),(e.type===t.LayoutItemType.Widget||e.sectionId)&&(0,t.jsx)(ja,{layoutId:i,layoutItemId:e.id,style:this.props.style,isSection:e.type===t.LayoutItemType.Section,onStyleChange:this.props.onStyleChange,formatMessage:this.props.formatMessage,setting:e.setting||(0,t.Immutable)({}),onSettingChange:this.props.onSettingChange}))}}const Wa={gutter:0,style:{padding:{number:[0],unit:"px"},justifyContent:"flex-start",alignItems:"stretch",borderRadius:{number:[0],unit:o.DistanceUnits.PIXEL}}},Ga={lockParent:!0,heightMode:"auto",offsetX:0,offsetY:0},Ua=(0,t.createSelector)([(t,e)=>{var o;const{layoutItem:i}=e,n=null===(o=t.appRuntimeInfo)||void 0===o?void 0:o.selection;return!!n&&(n.layoutId===e.layoutId&&n.layoutItemId===i.id)},(e,i)=>{var n,s,a;const{layoutItem:l}=i;let r=[0,0,0,0];if(l.type===t.LayoutItemType.Widget){const t=l.widgetId,i=e.appConfig.widgets[t];i&&(r=o.styleUtils.expandStyleArray(null===(a=null===(s=null===(n=i.config)||void 0===n?void 0:n.style)||void 0===s?void 0:s.padding)||void 0===a?void 0:a.number))}return r[0]+r[2]},(e,o)=>{const{layoutItem:i}=o;let n=!0;if(i.type===t.LayoutItemType.Widget){const t=i.widgetId,o=e.appConfig.widgets[t];if(o){const t=Object.keys(o.layouts)[0],i=L(o.layouts[t],e.browserSizeMode,e.appConfig.mainSizeMode),s=e.appConfig.layouts[i];s&&Object.keys(s.content||[]).length>0&&Object.keys(s.content||[]).some((t=>!s.content[t].isPending&&(n=!1,!0)))}}return n}],((t,e,o)=>({selected:t,padding:e,isEmpty:o})));function _a(t){const e=parseFloat(null==t?void 0:t.width);return e>0?`${t.width}`.includes("px")?`${Math.round(e)}px`:`${Math.round(e)}%`:"100%"}const Ya={[t.ScreenTransitionType.Push]:p(8686),[t.ScreenTransitionType.Fade]:p(6663),[t.ScreenTransitionType.Cover]:p(8686)};class Xa extends t.React.PureComponent{constructor(){super(...arguments),this.onTypeChanged=(t,e,o)=>{o?this.props.onPanelTransitionTypeChange(e):this.props.onTransitionTypeChange(e)},this.updateFirstPanel=t=>{}}getStyle(){return t.css`
      .animation-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 12px;
        grid-column-gap: 12px;
      }

      .card-item {
        font-size: 13px;
        flex: 0 0 45%;

        user-select: none;
        cursor: pointer;
        position: relative;

        .card-content {
          width: 100%;
          height: 5rem;
          background-color: var(--ref-palette-neutral-300);
        }

        &.selected .card-content {
          outline: 2px solid var(--sys-color-primary-light);
        }

        .card-image {
          width: 100%;
          height: 100%;
          padding: 8px;
          &:after {
            display: none;
          }
        }

        .card-name {
          max-width: 90px;
          margin: 0 auto;
          color: var(--ref-palette-neutral-1100);
          .card-name-content {
            line-height: 1rem;
            max-height: 2rem;
            white-space: normal;
          }
        }
      }
    `}createAnimationCard(e,i,n=!1){const{transitionType:s,panelTransitionType:a}=this.props;let l;return l=n?null!=a?a:t.ScreenTransitionType.Push:null!=s?s:t.ScreenTransitionType.Fade,(0,t.jsx)("div",{className:(0,t.classNames)("d-flex flex-column align-items-center card-item",{selected:e===l}),key:i,onClick:t=>{this.onTypeChanged(t,e,n)}},(0,t.jsx)("div",{className:"d-flex justify-content-center card-content"},(0,t.jsx)("div",{className:"card-image"},(0,t.jsx)(o.Icon,{className:"w-100",currentColor:!1,icon:Ya[e],size:72}))),(0,t.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1"},(0,t.jsx)("span",{className:"text-center text-truncate card-name-content",title:this.props.formatMessage(e.toLowerCase())},this.props.formatMessage(e.toLowerCase()))))}render(){const{formatMessage:e}=this.props;return(0,t.jsx)("div",{className:"bg-default border-color-gray-400",css:this.getStyle()},(0,t.jsx)(He.SettingSection,{title:e("mainStage")},(0,t.jsx)("div",{className:"animation-cards"},[t.ScreenTransitionType.Fade,t.ScreenTransitionType.Cover,t.ScreenTransitionType.Push].map(((t,e)=>this.createAnimationCard(t,e))))),(0,t.jsx)(He.SettingSection,{title:e("scrollingPanel")},(0,t.jsx)("div",{className:"animation-cards"},[t.ScreenTransitionType.Push,t.ScreenTransitionType.Fade].map(((t,e)=>this.createAnimationCard(t,e,!0))))),(0,t.jsx)(He.SettingSection,null,(0,t.jsx)(He.SettingRow,null,(0,t.jsx)(o.Checkbox,{onChange:this.updateFirstPanel,className:"mr-2"}),e("applyToFirstPanel"))))}}const Za=p(9572);class qa extends t.React.PureComponent{constructor(o){super(o),this.sidePopperTrigger=t.React.createRef(),this.onTransitionTypeChange=t=>{const{screenGroupId:o}=this.props.layoutItem;(0,e.getAppConfigAction)().editScreenGroupProperty(o,"transitionType",t).exec()},this.onPanelTransitionTypeChange=t=>{const{screenGroupId:o}=this.props.layoutItem;(0,e.getAppConfigAction)().editScreenGroupProperty(o,"panelTransitionType",t).exec()},this.toggleSidePanel=()=>{this.setState({showSidePanel:!this.state.showSidePanel})},this.state={showSidePanel:!1}}getAnimBoxStyle(){return t.css`
      background-color: transparent;
      width: 100%;
      height: 72px;

      .img-tip {
        position: relative;
        min-width: 90px;
        height: 72px;
        cursor: pointer;
        background: var(--ref-palette-neutral-300);

        .has-sibling {
          position: absolute;
          &.first {
            left: 5px;
            top: 5px;
          }
          &.second {
            bottom: 5px;
            right: 5px;
          }
        }

        .diag-sep {
          position: absolute;
          height: 1px;
          width: 80px;
          top: 36px;
          transform: rotateZ(-45deg);
          background: var(--ref-palette-neutral-500);
        }
      }

      .anim-label {
        align-self: flex-start;
      }
    `}getSidePopperStyle(){return t.css`
      .header {
        height: 60px;
        padding: 0 0.5rem;
      }
      .side-popper-title {
        color: var(--ref-palette-neutral-1000);
        font-size: 13px;
      }
      .side-content {
        position: relative;
        width: 100%;
        height: calc(100% - 60px);
        overflow: auto;
      }
    `}render(){var e,i,n,s,a;const{formatMessage:l}=this.props,r=null!==(e=this.props.transitionType)&&void 0!==e?e:t.ScreenTransitionType.Fade,d=null!==(i=this.props.panelTransitionType)&&void 0!==i?i:t.ScreenTransitionType.Push;return(0,t.jsx)(He.SettingSection,{title:l("transition")},(0,t.jsx)("div",{className:"anima-box d-flex justify-content-between align-items-center",css:this.getAnimBoxStyle()},(0,t.jsx)("div",{className:"img-tip d-flex justify-content-center align-items-center",onClick:this.toggleSidePanel},(0,t.jsx)("div",{className:"anim-icon first has-sibling"},(0,t.jsx)(o.Icon,{icon:null!==(n=Ya[r])&&void 0!==n?n:Za,size:32})),(0,t.jsx)("div",{className:"diag-sep"}),(0,t.jsx)("div",{className:"anim-icon second has-sibling"},(0,t.jsx)(o.Icon,{icon:null!==(s=Ya[d])&&void 0!==s?s:Za,size:32}))),(0,t.jsx)("div",{className:"d-flex flex-column justify-content-between align-items-end h-100"},(0,t.jsx)("div",{className:"anim-label"},(0,t.jsx)("span",null,l(r.toLowerCase())),(0,t.jsx)("span",{className:"mx-1"},"/"),(0,t.jsx)("span",null,l(d.toLowerCase()))),(0,t.jsx)("div",{className:"amin-icons w-100",ref:this.sidePopperTrigger},(0,t.jsx)(o.Button,{size:"sm",onClick:this.toggleSidePanel,className:"text-truncate",title:l("change")},l("change"))))),this.state.showSidePanel&&(0,t.jsx)(He.SidePopper,{isOpen:!0,title:l("transition"),css:this.getSidePopperStyle(),position:"right",toggle:this.toggleSidePanel,trigger:null===(a=this.sidePopperTrigger)||void 0===a?void 0:a.current},(0,t.jsx)("div",{className:"side-content"},(0,t.jsx)(Xa,{transitionType:r,panelTransitionType:d,onTransitionTypeChange:this.onTransitionTypeChange,onPanelTransitionTypeChange:this.onPanelTransitionTypeChange,formatMessage:l}))))}}const Ka=(0,t.createSelector)([(t,e)=>{const{screenGroupId:o}=e.layoutItem,{appConfig:i}=t.appStateInBuilder;return i.screenGroups[o].transitionType},(t,e)=>{const{screenGroupId:o}=e.layoutItem,{appConfig:i}=t.appStateInBuilder;return i.screenGroups[o].panelTransitionType}],((t,e)=>({transitionType:t,panelTransitionType:e}))),Ja=t.ReactRedux.connect(Ka)(qa),Qa={width:110};class tl extends t.React.PureComponent{constructor(){super(...arguments),this.updateWidth=e=>{let i=this.props.layoutItem.setting||(0,t.Immutable)({});i=i.set("width",o.utils.stringOfLinearUnit(e)),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.updateBBoxWidth=e=>{let i=(0,t.Immutable)(this.props.layoutItem.bbox||{});i=i.set("width",o.utils.stringOfLinearUnit(e)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.updateHeight=e=>{let i=(0,t.Immutable)(this.props.layoutItem.bbox||{});i=i.set("height",o.utils.stringOfLinearUnit(e)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.updateOffsetX=e=>{const o=this.props.layoutItem.setting||(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetX",e))},this.updateOffsetY=e=>{const o=this.props.layoutItem.setting||(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetY",e))},this.updateHeightMode=e=>{let o=this.props.layoutItem.setting||(0,t.Immutable)({});o=o.set("heightMode",e===s.LayoutItemSizeModes.Custom?"fixed":"auto"),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)}}updateFloatingArea(e){const o=this.props.layoutItem.setting||(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("floatingArea",e))}getStyle(){return t.css`
      .floating-position {
        margin-bottom: 1rem;
      }

      .floating-area-chooser {
        position: relative;

        .content {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-row-gap: 0;
          grid-column-gap: 0;
          border: 1px solid var(--ref-palette-neutral-500);

          & > div {
            cursor: pointer;
            width: 30px;
            height: 30px;
            position: relative;
          }

          & > div:nth-of-type(3n+1) {
            border-right: 1px solid var(--ref-palette-neutral-500);
          }
          & > div:nth-of-type(3n) {
            border-left: 1px solid var(--ref-palette-neutral-500);
          }
          & > div:nth-of-type(1), & > div:nth-of-type(2), & > div:nth-of-type(3) {
            border-bottom: 1px solid var(--ref-palette-neutral-500);
          }
          & > div:nth-of-type(7), & > div:nth-of-type(8), & > div:nth-of-type(9) {
            border-top: 1px solid var(--ref-palette-neutral-500);
          }

          .selected:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: var(--sys-color-primary-light);
            border: 1px solid var(--sys-color-primary-main);
          }
        }
      }
    `}render(){const{layoutId:e,layoutItem:i,formatMessage:n,isLockLayout:a}=this.props;if(!i)return null;if(i.type===t.LayoutItemType.ScreenGroup)return(0,t.jsx)(Ja,Object.assign({},this.props));this.itemSetting=t.lodash.assign({},Ga,i.setting);const l=i.bbox;return(0,t.jsx)("div",{className:"flow-item-setting",css:this.getStyle()},!a&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(He.SettingSection,{title:`${n("position")} & ${n("size")}`},(0,t.jsx)("div",{className:"floating-position d-flex"},(0,t.jsx)("div",{className:"floating-area-chooser"},(0,t.jsx)("div",{className:"content"},(0,t.jsx)("div",{className:(0,t.classNames)("top-left",{selected:1===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,1)}),(0,t.jsx)("div",{className:(0,t.classNames)("top-center",{selected:2===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,2)}),(0,t.jsx)("div",{className:(0,t.classNames)("top-right",{selected:3===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,3)}),(0,t.jsx)("div",{className:(0,t.classNames)("middle-left",{selected:4===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,4)}),(0,t.jsx)("div",{className:(0,t.classNames)("middle-center",{selected:5===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,5)}),(0,t.jsx)("div",{className:(0,t.classNames)("middle-right",{selected:6===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,6)}),(0,t.jsx)("div",{className:(0,t.classNames)("bottom-left",{selected:7===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,7)}),(0,t.jsx)("div",{className:(0,t.classNames)("bottom-center",{selected:8===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,8)}),(0,t.jsx)("div",{className:(0,t.classNames)("bottom-right",{selected:9===this.itemSetting.floatingArea}),onClick:this.updateFloatingArea.bind(this,9)}))),(0,t.jsx)("div",{className:"d-flex flex-grow-1 flex-column justify-content-between align-items-end"},(0,t.jsx)("div",{className:"d-flex align-items-center",css:t.css`width: 110px`},(0,t.jsx)("span",{className:"mr-2"},"W"),(0,t.jsx)(Ma.SizeEditor,{label:"W",mode:s.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:null==l?void 0:l.width,onChange:this.updateBBoxWidth})),(0,t.jsx)("div",{className:"d-flex align-items-center",css:t.css`width: 110px`},(0,t.jsx)("span",{className:"mr-2"},"H"),(0,t.jsx)(Ma.SizeEditor,{label:"H",mode:s.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:null==l?void 0:l.height,onChange:this.updateHeight})))),(0,t.jsx)(He.SettingRow,{label:n("offsetX")},(0,t.jsx)(o.NumericInput,{style:Qa,value:this.itemSetting.offsetX,precision:0,onChange:this.updateOffsetX,size:"sm"})),(0,t.jsx)(He.SettingRow,{label:n("offsetY")},(0,t.jsx)(o.NumericInput,{style:Qa,precision:0,value:this.itemSetting.offsetY,onChange:this.updateOffsetY,size:"sm"})))),(i.type===t.LayoutItemType.Widget||i.sectionId)&&(0,t.jsx)(ja,{layoutId:e,layoutItemId:i.id,isSection:!1,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const el={width:110},ol=[s.LayoutItemSizeModes.Auto,s.LayoutItemSizeModes.Custom],il=[o.DistanceUnits.PIXEL];class nl extends t.React.PureComponent{constructor(){super(...arguments),this.updateWidth=e=>{let i=this.props.layoutItem.setting||(0,t.Immutable)({});i=i.set("width",o.utils.stringOfLinearUnit(e)),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.updateBBoxWidth=e=>{let i=(0,t.Immutable)(this.props.layoutItem.bbox||{});i=i.set("width",o.utils.stringOfLinearUnit(e)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.updateHeight=e=>{let i=(0,t.Immutable)(this.props.layoutItem.bbox||{});i=i.set("height",o.utils.stringOfLinearUnit(e)),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.updateOffsetX=e=>{const o=this.props.layoutItem.setting||(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetX",e))},this.updateOffsetY=e=>{const o=this.props.layoutItem.setting||(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("offsetY",e))},this.updateHeightMode=e=>{var o,i,n;const{layoutItem:a}=this.props;let l=null!==(o=a.setting)&&void 0!==o?o:(0,t.Immutable)({});if(l=l.set("heightMode",e===s.LayoutItemSizeModes.Custom?"fixed":"auto"),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},l),!(null===(i=a.bbox)||void 0===i?void 0:i.height)){const e=this.getSizeOfItem();if(e){let o=(0,t.Immutable)(null!==(n=a.bbox)&&void 0!==n?n:{});o=o.set("height",`${Math.round(e.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)}}}}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(e){const o=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);if(o){return(o.contentDocument||o.contentWindow.document).querySelector(e)}return null}updateFloatingArea(e){const o=this.props.layoutItem.setting||(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.set("floatingArea",e))}render(){var e,i;const{layoutId:n,layoutItem:a,formatMessage:l,isLockLayout:r}=this.props;if(!a)return null;if(a.type===t.LayoutItemType.ScreenGroup)return(0,t.jsx)(Ja,Object.assign({},this.props));if(this.itemSetting=t.lodash.assign({},Ga,a.setting),this.itemSetting.isFloating)return(0,t.jsx)(tl,Object.assign({},this.props));const d=a.bbox,u=o.utils.stringOfLinearUnit(_a(this.itemSetting)),c=o.utils.stringOfLinearUnit(parseFloat(null===(e=a.bbox)||void 0===e?void 0:e.height)>0?null===(i=a.bbox)||void 0===i?void 0:i.height:100),p="auto"===this.itemSetting.heightMode||s.utils.isPercentage(null==d?void 0:d.height);return(0,t.jsx)("div",{className:"flow-item-setting"},!r&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(He.SettingSection,{title:l("size")},(0,t.jsx)(He.SettingRow,{label:l("width")},(0,t.jsx)("div",{style:el},(0,t.jsx)(Ma.SizeEditor,{label:"W",mode:s.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:u,onChange:this.updateWidth}))),(0,t.jsx)(He.SettingRow,{label:l("height")},(0,t.jsx)("div",{style:el},(0,t.jsx)(Ma.SizeEditor,{label:"H",mode:p?s.LayoutItemSizeModes.Auto:s.LayoutItemSizeModes.Custom,sizeModes:ol,availableUnits:il,disableModeSelect:!1,value:c,onChange:this.updateHeight,onModeChange:this.updateHeightMode})))),(0,t.jsx)(He.SettingSection,{title:l("position")},(0,t.jsx)(He.SettingRow,{label:l("offsetX")},(0,t.jsx)(o.NumericInput,{style:el,value:this.itemSetting.offsetX,onChange:this.updateOffsetX,precision:0,size:"sm"})),(0,t.jsx)(He.SettingRow,{label:l("offsetY")},(0,t.jsx)(o.NumericInput,{style:el,value:this.itemSetting.offsetY,onChange:this.updateOffsetY,precision:0,size:"sm"})))),(a.type===t.LayoutItemType.Widget||a.sectionId)&&(0,t.jsx)(ja,{layoutId:n,layoutItemId:a.id,isSection:!1,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const sl=t.css`width: 100px;`,al=[s.LayoutItemSizeModes.Stretch,s.LayoutItemSizeModes.Custom],ll=[s.LayoutItemSizeModes.Auto,s.LayoutItemSizeModes.Stretch,s.LayoutItemSizeModes.Custom],rl=[s.LayoutItemSizeModes.Stretch,s.LayoutItemSizeModes.Custom],dl=[o.DistanceUnits.PIXEL,o.DistanceUnits.PERCENTAGE],ul=[o.DistanceUnits.PIXEL];class cl extends t.React.PureComponent{constructor(){super(...arguments),this.updateBBox=(t,e)=>{var i;let n=this.props.layoutItem.bbox;const{distance:a,unit:l}=e,r=n[t],d=this.getSizeOfContainer();let u,c=a.toFixed(2);if(s.utils.isPercentage(r)&&l===o.DistanceUnits.PIXEL?d&&(c="left"===t||"right"===t||"width"===t?Math.round(parseFloat(r)*d.width/100):Math.round(parseFloat(r)*d.height/100),u=c):s.utils.isPercentage(r)||l!==o.DistanceUnits.PERCENTAGE||(d&&(c="left"===t||"right"===t||"width"===t?(100*parseFloat(r)/d.width).toFixed(4):(100*parseFloat(r)/d.height).toFixed(4)),u=parseFloat(r)),u||l!==o.DistanceUnits.PERCENTAGE)u||l!==o.DistanceUnits.PIXEL||(u=a);else{const e="width"===t?d.width:d.height;u=Math.round(a*e/100)}if(n=n.set(t,l===o.DistanceUnits.PERCENTAGE?`${c}%`:`${c}px`),"ratio"===(null===(i=this.props.layoutItem.setting)||void 0===i?void 0:i.heightMode)){const e=this.props.layoutItem.setting.aspectRatio;if("width"===t){const t=u*e;if(s.utils.isPercentage(n.height)){const e=(100*t/d.height).toFixed(4);n=n.set("height",`${e}%`)}else n=n.set("height",`${Math.round(t)}px`)}else{const t=u/e;if(s.utils.isPercentage(n.width)){const e=(100*t/d.width).toFixed(4);n=n.set("width",`${e}%`)}else n=n.set("width",`${Math.round(t)}px`)}}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n)},this.toggleHeightMode=()=>{let e=this.props.layoutItem.setting||(0,t.Immutable)({});const o="ratio"===e.heightMode?"fixed":"ratio";if(e=e.set("heightMode",o),"ratio"===o){const t=this.getSizeOfItem();t&&(e=e.set("aspectRatio",Number((t.height/t.width).toFixed(2))))}else{let t=this.props.layoutItem.bbox;const e=this.getSizeOfItem();if(s.utils.isPercentage(t.width)){const o=this.getSizeOfContainer();t=t.set("width",`${(100*e.width/o.width).toFixed(4)}%`)}else t=t.set("width",`${Math.round(e.width)}px`);t=t.set("height",`${Math.round(e.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.updateAlignSelf=e=>{let o=this.props.layoutItem.setting||(0,t.Immutable)({});o=o.setIn(["style","alignSelf"],e.target.value),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateHeightMode=e=>{const o=this.props.layoutItem.setting||(0,t.Immutable)({});let i=(0,t.Immutable)(this.props.layoutItem.bbox);if(e===s.LayoutItemSizeModes.Custom&&isNaN(parseFloat(i.height))){const t=this.getSizeOfItem();i=i.set("height",`${Math.round(t.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","height"],e))},this.updateWidthMode=e=>{const o=this.props.layoutItem.setting||(0,t.Immutable)({});let i=(0,t.Immutable)(this.props.layoutItem.bbox);if(e===s.LayoutItemSizeModes.Custom&&isNaN(parseFloat(i.width))){const t=this.getSizeOfItem();i=i.set("width",`${Math.round(t.width)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","width"],e))},this.updateAspectRatio=e=>{let o=this.props.layoutItem.setting||(0,t.Immutable)({});o=o.set("aspectRatio",e),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.formatMessage=t=>this.props.formatMessage(t)}getSizeOfContainer(){const t=this.querySelector(`div.column-layout[data-layoutid="${this.props.layoutId}"]`);return t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(e){const o=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);if(o){return(o.contentDocument||o.contentWindow.document).querySelector(e)}return null}getStyle(){return t.css`
      .rotation-setting, .rotation-setting input {
        height: 26px;
      }

      .ratio-value {
        font-size: 12px;
      }

      .align-select {
        .dropdown-button, .dropdown-button:hover {
          height: 26px;
        }
      }
    `}render(){var e,i,n,a;const{layoutId:l,layoutItem:r,isLockLayout:d,supportAutoSize:u}=this.props;if(!r)return null;const c=r.setting||{},p=c.style||{},h=r.bbox||{},g=(null===(e=c.autoProps)||void 0===e?void 0:e.width)!==s.LayoutItemSizeModes.Custom,m=null!==(n=null===(i=c.autoProps)||void 0===i?void 0:i.height)&&void 0!==n?n:s.LayoutItemSizeModes.Custom,y="ratio"===c.heightMode;return(0,t.jsx)("div",{className:"column-item-setting",css:this.getStyle()},!d&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(He.SettingSection,{role:"group",title:this.formatMessage("size"),"aria-label":this.formatMessage("size")},(0,t.jsx)(He.SettingRow,{role:"group",label:this.formatMessage("width"),"aria-label":this.formatMessage("width")},(0,t.jsx)("div",{css:sl},(0,t.jsx)(Ma.SizeEditor,{label:"W",mode:g?s.LayoutItemSizeModes.Stretch:s.LayoutItemSizeModes.Custom,sizeModes:al,value:null==h?void 0:h.width,availableUnits:dl,onChange:t=>{this.updateBBox("width",t)},onModeChange:this.updateWidthMode}))),(0,t.jsx)(He.SettingRow,{className:"mt-0",label:(0,t.jsx)(o.Tooltip,{title:this.formatMessage("keepAspectRatio"),placement:"bottom"},(0,t.jsx)(o.Button,{size:"sm",type:"tertiary",className:"ml-1",icon:!0,onClick:this.toggleHeightMode,"aria-pressed":y},y?(0,t.jsx)(Ee,{size:"s"}):(0,t.jsx)(is,{size:"s"})))}),(0,t.jsx)(He.SettingRow,{role:"group",className:"mt-0",label:this.formatMessage("height"),"aria-label":this.formatMessage("height")},(0,t.jsx)("div",{css:sl},(0,t.jsx)(Ma.SizeEditor,{label:"H",mode:m||s.LayoutItemSizeModes.Custom,sizeModes:u?ll:rl,value:h.height,availableUnits:ul,onChange:t=>{this.updateBBox("height",t)},onModeChange:this.updateHeightMode,disabled:y}))),y&&(0,t.jsx)(He.SettingRow,{label:this.formatMessage("aspectRatio"),"aria-label":this.formatMessage("aspectRatio")},(0,t.jsx)(Ma.InputRatio,{value:c.aspectRatio,style:{width:100},onChange:this.updateAspectRatio})),!g&&(0,t.jsx)(He.SettingRow,{label:this.formatMessage("align")},(0,t.jsx)(o.Select,{"aria-label":this.formatMessage("align"),className:"align-select",value:null!==(a=p.alignSelf)&&void 0!==a?a:"flex-start",onChange:this.updateAlignSelf,css:sl},(0,t.jsx)("option",{value:"flex-start"},this.formatMessage("start")),(0,t.jsx)("option",{value:"flex-end"},this.formatMessage("end")),(0,t.jsx)("option",{value:"center"},this.formatMessage("center")))),(0,t.jsx)(za,{layoutId:l,layoutItemId:r.id,setting:c,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))),(r.type===t.LayoutItemType.Widget||r.sectionId)&&(0,t.jsx)(ja,{layoutId:l,layoutItemId:r.id,isSection:r.type===t.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const pl=t.css`width: 100px;`,hl=[s.LayoutItemSizeModes.Auto,s.LayoutItemSizeModes.Stretch,s.LayoutItemSizeModes.Custom],gl=[s.LayoutItemSizeModes.Auto,s.LayoutItemSizeModes.Stretch,s.LayoutItemSizeModes.Custom],ml=[s.LayoutItemSizeModes.Stretch,s.LayoutItemSizeModes.Custom],yl=[o.DistanceUnits.PIXEL,o.DistanceUnits.PERCENTAGE],fl=[o.DistanceUnits.PIXEL];class vl extends t.React.PureComponent{constructor(){super(...arguments),this.updateBBox=(t,e)=>{var i;let n=this.props.layoutItem.bbox;const{distance:a,unit:l}=e,r=n[t],d=this.getSizeOfContainer();let u,c=a.toFixed(2);if(s.utils.isPercentage(r)&&l===o.DistanceUnits.PIXEL?d&&(c="left"===t||"right"===t||"width"===t?Math.round(parseFloat(r)*d.width/100):Math.round(parseFloat(r)*d.height/100),u=c):s.utils.isPercentage(r)||l!==o.DistanceUnits.PERCENTAGE||(d&&(c="left"===t||"right"===t||"width"===t?(100*parseFloat(r)/d.width).toFixed(4):(100*parseFloat(r)/d.height).toFixed(4)),u=parseFloat(r)),u||l!==o.DistanceUnits.PERCENTAGE)u||l!==o.DistanceUnits.PIXEL||(u=a);else{const e="width"===t?d.width:d.height;u=Math.round(a*e/100)}if(n=n.set(t,l===o.DistanceUnits.PERCENTAGE?`${c}%`:`${c}px`),"ratio"===(null===(i=this.props.layoutItem.setting)||void 0===i?void 0:i.heightMode)){const e=this.props.layoutItem.setting.aspectRatio;if("width"===t){const t=u*e;if(s.utils.isPercentage(n.height)){const e=(100*t/d.height).toFixed(4);n=n.set("height",`${e}%`)}else n=n.set("height",`${Math.round(t)}px`)}else{const t=u/e;if(s.utils.isPercentage(n.width)){const e=(100*t/d.width).toFixed(4);n=n.set("width",`${e}%`)}else n=n.set("width",`${Math.round(t)}px`)}}this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},n)},this.toggleHeightMode=()=>{let o=this.props.layoutItem.setting||(0,t.Immutable)({});const i="ratio"===o.heightMode?"fixed":"ratio";o=o.set("heightMode",i);const n=(0,e.getAppConfigAction)();if("ratio"===i){const t=this.getSizeOfItem();t&&(o=o.set("aspectRatio",Number((t.height/t.width).toFixed(2))))}else{let t=this.props.layoutItem.bbox;const e=this.getSizeOfItem();if(s.utils.isPercentage(t.width)){const o=this.getSizeOfContainer();t=t.set("width",`${(100*e.width/o.width).toFixed(4)}%`)}else t=t.set("width",`${Math.round(e.width)}px`);t=t.set("height",`${Math.round(e.height)}px`),n.editLayoutItemProperty({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},"bbox",t)}n.editLayoutItemProperty({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},"setting",o).exec()},this.updateAlignSelf=e=>{let o=this.props.layoutItem.setting||(0,t.Immutable)({});o=o.setIn(["style","alignSelf"],e.target.value),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.updateHeightMode=e=>{const o=this.props.layoutItem.setting||(0,t.Immutable)({});let i=(0,t.Immutable)(this.props.layoutItem.bbox);if(e===s.LayoutItemSizeModes.Custom&&isNaN(parseFloat(i.height))){const t=this.getSizeOfItem();i=i.set("height",`${Math.round(t.height)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","height"],e))},this.updateWidthMode=e=>{const o=this.props.layoutItem.setting||(0,t.Immutable)({});let i=(0,t.Immutable)(this.props.layoutItem.bbox);if(e===s.LayoutItemSizeModes.Custom&&isNaN(parseFloat(i.width))){const t=this.getSizeOfItem();i=i.set("width",`${Math.round(t.width)}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","width"],e))},this.updateAspectRatio=e=>{let o=this.props.layoutItem.setting||(0,t.Immutable)({});o=o.set("aspectRatio",e),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.formatMessage=t=>this.props.formatMessage(t)}getSizeOfContainer(){const t=this.querySelector(`div.column-layout[data-layoutid="${this.props.layoutId}"]`);return t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"]`);return o?o.getBoundingClientRect():null}querySelector(e){const o=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);if(o){return(o.contentDocument||o.contentWindow.document).querySelector(e)}return null}getStyle(){return t.css`
      .rotation-setting, .rotation-setting input {
        height: 26px;
      }

      .ratio-value {
        font-size: 12px;
      }

      .align-select {
        .dropdown-button, .dropdown-button:hover {
          height: 26px;
        }
      }
    `}render(){var e,i,n,a,l;const{layoutId:r,layoutItem:d,isLockLayout:u,supportAutoSize:c}=this.props;if(!d)return null;const p=d.setting||{},h=p.style||{},g=d.bbox||{},m=null!==(i=null===(e=p.autoProps)||void 0===e?void 0:e.height)&&void 0!==i?i:s.LayoutItemSizeModes.Stretch,y=m===s.LayoutItemSizeModes.Stretch,f=null!==(a=null===(n=p.autoProps)||void 0===n?void 0:n.width)&&void 0!==a?a:s.LayoutItemSizeModes.Custom,v="ratio"===p.heightMode;return(0,t.jsx)("div",{className:"flex-row-item-setting",css:this.getStyle()},!u&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(He.SettingSection,{role:"group",title:this.formatMessage("size"),"aria-label":this.formatMessage("size")},(0,t.jsx)(He.SettingRow,{role:"group",label:this.formatMessage("width"),"aria-label":this.formatMessage("width")},(0,t.jsx)("div",{css:pl},(0,t.jsx)(Ma.SizeEditor,{label:"W",mode:f,sizeModes:gl,value:null==g?void 0:g.width,availableUnits:fl,onChange:t=>{this.updateBBox("width",t)},onModeChange:this.updateWidthMode}))),(0,t.jsx)("div",null,(0,t.jsx)(o.Tooltip,{title:this.formatMessage("keepAspectRatio"),placement:"bottom"},(0,t.jsx)(o.Button,{size:"sm",type:"tertiary",className:"ml-1",icon:!0,onClick:this.toggleHeightMode,"aria-pressed":v},v?(0,t.jsx)(Ee,{size:"s"}):(0,t.jsx)(is,{size:"s"})))),(0,t.jsx)(He.SettingRow,{role:"group",className:"mt-0",label:this.formatMessage("height"),"aria-label":this.formatMessage("height")},(0,t.jsx)("div",{css:pl},(0,t.jsx)(Ma.SizeEditor,{label:"H",mode:m,sizeModes:c?hl:ml,value:g.height,availableUnits:yl,onChange:t=>{this.updateBBox("height",t)},onModeChange:this.updateHeightMode,disabled:v}))),v&&(0,t.jsx)(He.SettingRow,{label:this.formatMessage("aspectRatio"),"aria-label":this.formatMessage("aspectRatio")},(0,t.jsx)(Ma.InputRatio,{value:p.aspectRatio,style:{width:100},onChange:this.updateAspectRatio})),!y&&(0,t.jsx)(He.SettingRow,{label:this.formatMessage("align")},(0,t.jsx)(o.Select,{"aria-label":this.formatMessage("align"),className:"align-select",value:null!==(l=h.alignSelf)&&void 0!==l?l:"flex-start",onChange:this.updateAlignSelf,css:pl},(0,t.jsx)("option",{value:"flex-start"},this.formatMessage("start")),(0,t.jsx)("option",{value:"flex-end"},this.formatMessage("end")),(0,t.jsx)("option",{value:"center"},this.formatMessage("center")))),(0,t.jsx)(za,{layoutId:r,layoutItemId:d.id,setting:p,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))),(d.type===t.LayoutItemType.Widget||d.sectionId)&&(0,t.jsx)(ja,{layoutId:r,layoutItemId:d.id,isSection:d.type===t.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const Il=t.css`width: 72px`,xl=t.css`width: 100px;`,bl=[s.LayoutItemSizeModes.Auto,s.LayoutItemSizeModes.Stretch,s.LayoutItemSizeModes.Custom],wl=[s.LayoutItemSizeModes.Stretch,s.LayoutItemSizeModes.Custom];class Sl extends t.React.PureComponent{constructor(){super(...arguments),this.handleAlignChange=t=>{this.updateStyle("alignSelf",t.target.value)},this.handleHeightChange=t=>{let e=this.props.layoutItem.bbox;const{distance:i,unit:n}=t,a=e.height,l=this.getSizeOfContainer();let r=i.toFixed(2);s.utils.isPercentage(a)&&n===o.DistanceUnits.PIXEL?null!=l&&(r=Math.round(parseFloat(a)*l.height/100)):s.utils.isPercentage(a)||n!==o.DistanceUnits.PERCENTAGE||null!=l&&(r=(100*parseFloat(a)/l.height).toFixed(4)),e=e.set("height",n===o.DistanceUnits.PERCENTAGE?`${r}%`:`${r}px`),this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e)},this.handleHeightModeChange=e=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.setIn(["autoProps","height"],e))},this.updateAspectSetting=e=>{var o;let i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,t.Immutable)({});if("fit"===i.heightMode&&(i=i.setIn(["autoProps","height"],s.LayoutItemSizeModes.Stretch)),i=i.set("heightMode",e),"ratio"===e){const t=this.getSizeOfItem();null!=t&&(i=i.set("aspectRatio",Number((t.height/t.width).toFixed(2))))}else{const t=this.props.layoutItem.bbox,e=this.getSizeOfItem();if(s.utils.isPercentage(t.height)){const o=this.getSizeOfContainer();this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t.set("height",`${(100*e.height/o.height).toFixed(4)}%`))}else this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},t.set("height",`${Math.round(e.height)}px`))}this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.handleAspectRatioChange=e=>{var o;let i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,t.Immutable)({});i=i.set("aspectRatio",e),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i)},this.handleOffsetXChange=e=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.set("offsetX",e))},this.handleOffsetYChange=e=>{var o;const i=null!==(o=this.props.layoutItem.setting)&&void 0!==o?o:(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.set("offsetY",e))},this.formatMessage=t=>this.props.formatMessage(t)}updateStyle(e,o){var i;const{layoutItem:n}=this.props,s=(0,t.Immutable)(null!==(i=null==n?void 0:n.setting)&&void 0!==i?i:{});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},s.setIn(["style",e],o))}getSizeOfContainer(){const t=this.querySelector(`div.row-layout[data-layoutid="${this.props.layoutId}"]`);return null!=t?t.getBoundingClientRect():null}getSizeOfItem(){const{layoutId:t,layoutItem:e}=this.props,o=this.querySelector(`div.exb-rnd[data-layoutid="${t}"][data-layoutitemid="${e.id}"] > div.layout-item-content`);return null!=o?o.getBoundingClientRect():null}querySelector(e){var o;const i=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`);if(null!=i){return(null!==(o=i.contentDocument)&&void 0!==o?o:i.contentWindow.document).querySelector(e)}return null}getStyle(){return t.css`
      .align-select {
        .dropdown-button,
        .dropdown-button:hover {
          height: 26px;
        }
      }
    `}render(){var e,i,n,a;const{layoutId:l,layoutItem:r,isLockLayout:d,supportAutoSize:u}=this.props;if(null==r)return null;const c=t.lodash.assign({},mn,r.setting),p=r.bbox,h=null!==(e=c.style)&&void 0!==e?e:{},g=null!==(n=null===(i=c.autoProps)||void 0===i?void 0:i.height)&&void 0!==n?n:s.LayoutItemSizeModes.Stretch,m="ratio"===c.heightMode;return(0,t.jsx)("div",{className:"row-item-setting",css:this.getStyle()},!d&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(He.SettingSection,{role:"group",title:this.formatMessage("size"),"aria-label":this.formatMessage("size")},(0,t.jsx)(He.SettingRow,{role:"group",label:this.formatMessage("height"),"aria-label":this.formatMessage("height")},(0,t.jsx)("div",{css:xl},(0,t.jsx)(Ma.SizeEditor,{label:"H",mode:g,sizeModes:u?bl:wl,value:o.utils.stringOfLinearUnit(p.height),onChange:this.handleHeightChange,onModeChange:this.handleHeightModeChange,disabled:m}))),(0,t.jsx)(He.SettingRow,null,(0,t.jsx)(o.Checkbox,{"aria-label":this.formatMessage("keepAspectRatio"),checked:m,onChange:t=>{this.updateAspectSetting(t.target.checked?"ratio":"fixed")},className:"mr-2"}),this.formatMessage("keepAspectRatio")),m&&(0,t.jsx)(He.SettingRow,{label:this.formatMessage("aspectRatio"),"aria-label":this.formatMessage("aspectRatio")},(0,t.jsx)(Ma.InputRatio,{value:c.aspectRatio,style:{width:100},onChange:this.handleAspectRatioChange})),g!==s.LayoutItemSizeModes.Stretch&&(0,t.jsx)(He.SettingRow,{label:this.formatMessage("align")},(0,t.jsx)(o.Select,{"aria-label":this.formatMessage("align"),className:"align-select",css:xl,value:null!==(a=h.alignSelf)&&void 0!==a?a:"flex-start",onChange:this.handleAlignChange},(0,t.jsx)("option",{value:"flex-start"},this.formatMessage("T")),(0,t.jsx)("option",{value:"flex-end"},this.formatMessage("B")),(0,t.jsx)("option",{value:"center"},this.formatMessage("center"))))),(0,t.jsx)(He.SettingSection,{role:"group",title:this.formatMessage("position"),"aria-label":this.formatMessage("position")},(0,t.jsx)(za,{layoutId:l,layoutItemId:r.id,setting:r.setting,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}),(0,t.jsx)(He.SettingRow,{label:this.formatMessage("offsetX"),"aria-label":this.formatMessage("offsetX")},(0,t.jsx)(o.NumericInput,{css:Il,value:c.offsetX,onChange:this.handleOffsetXChange,precision:0,size:"sm"})),(0,t.jsx)(He.SettingRow,{label:this.formatMessage("offsetY"),"aria-label":this.formatMessage("offsetY")},(0,t.jsx)(o.NumericInput,{css:Il,value:c.offsetY,onChange:this.handleOffsetYChange,precision:0,size:"sm"})))),(r.type===t.LayoutItemType.Widget||null!=r.sectionId)&&(0,t.jsx)(ja,{layoutId:l,layoutItemId:r.id,isSection:r.type===t.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}var Cl=p(5508),Rl=p.n(Cl),Tl=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Ml=e=>{const o=window.SVG,{className:i}=e,n=Tl(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:Rl()},n)):t.React.createElement("svg",Object.assign({className:s},n))};function Al(i){var n,s;const{layoutItem:a,layoutId:l}=i,r=t.hooks.useTranslation(o.defaultMessages),[d,u]=t.React.useState(null!==(n=a.label)&&void 0!==n?n:""),c=t.ReactRedux.useSelector((e=>{const o=e.appStateInBuilder.appConfig.layouts[l];if(a.parent){return o.content[a.parent].gridType===t.GridItemType.Tab}return!1})),p=t.ReactRedux.useSelector((e=>{const o=e.appStateInBuilder.appConfig.layouts[l].content[a.id];return!c||o.gridType!==t.GridItemType.Row&&o.gridType!==t.GridItemType.Column?"":o.label}));t.React.useEffect((()=>{u(p)}),[p]);const h=t.React.useCallback((t=>{(0,e.getAppConfigAction)().editLayoutItemProperty({layoutId:l,layoutItemId:a.id},"label",""!==t?t:void 0,!0).exec()}),[l,a.id]),g=t.React.useCallback((t=>{(0,e.getAppConfigAction)().editLayoutItemProperty({layoutId:l,layoutItemId:a.id},"expandable",t,!0).exec()}),[l,a.id]),m=t.React.useCallback((t=>{u(t.target.value)}),[]);if(!a)return null;const y=a;return!c||y.gridType!==t.GridItemType.Row&&y.gridType!==t.GridItemType.Column?y.gridType===t.GridItemType.Plain?(0,t.jsx)("div",{className:"grid-item-setting h-100"},(0,t.jsx)(He.SettingSection,{title:r("gridItem")},(0,t.jsx)(He.SettingRow,null,(0,t.jsx)(o.Label,{centric:!0},(0,t.jsx)(o.Checkbox,{"aria-label":r("allowExpansion"),checked:null===(s=a.expandable)||void 0===s||s,onChange:(t,e)=>{g(t.target.checked)}}),(0,t.jsx)("span",{className:"ml-2 text-truncate"},r("allowExpansion"))))),(0,t.jsx)(ja,{layoutId:l,layoutItemId:a.id,style:i.style,isSection:a.type===t.LayoutItemType.Section,onStyleChange:i.onStyleChange,formatMessage:i.formatMessage,setting:a.setting||(0,t.Immutable)({}),onSettingChange:i.onSettingChange})):(0,t.jsx)("div",{className:"grid-item-setting h-100"},(0,t.jsx)("div",{className:"h-100 align-items-center justify-content-center d-flex flex-column",css:t.css`color: var(--ref-palette-neutral-1000)`},(0,t.jsx)("div",null,(0,t.jsx)(Ml,{size:48})),(0,t.jsx)("div",{className:"mt-4"},r("noConfigNeeded")))):(0,t.jsx)("div",{className:"grid-item-setting h-100"},(0,t.jsx)(He.SettingSection,null,(0,t.jsx)(He.SettingRow,{label:r("label"),flow:"wrap"},(0,t.jsx)(o.TextInput,{size:"sm",value:d,onChange:m,onAcceptValue:h,className:"w-100"}))))}const Ll=t.css`width: 100px;`,Pl=[s.LayoutItemSizeModes.Auto,s.LayoutItemSizeModes.Custom],jl=[s.LayoutItemSizeModes.Auto,s.LayoutItemSizeModes.Custom],zl=[o.DistanceUnits.PIXEL];class Nl extends t.React.PureComponent{constructor(){super(...arguments),this.updateHeight=t=>{const e=this.props.layoutItem.bbox;this.props.onPosChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},e.set("height",`${t.distance}px`))},this.toggleAspectRatio=(e,o)=>{const i=this.props.layoutItem.setting||(0,t.Immutable)({}),n=o?"ratio":"fixed";this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},i.set("heightMode",n))},this.updateHeightMode=e=>{const o=this.props.layoutItem.setting||(0,t.Immutable)({});this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o.setIn(["autoProps","height"],e))},this.updateAspectRatio=e=>{let o=this.props.layoutItem.setting||(0,t.Immutable)({});o=o.set("aspectRatio",e),this.props.onSettingChange({layoutId:this.props.layoutId,layoutItemId:this.props.layoutItem.id},o)},this.formatMessage=t=>this.props.formatMessage(t)}getStyle(){return t.css`
      .rotation-setting, .rotation-setting input {
        height: 26px;
      }

      .ratio-value {
        font-size: 12px;
      }

      .align-select {
        .dropdown-button, .dropdown-button:hover {
          height: 26px;
        }
      }
    `}render(){var e,i;const{layoutId:n,layoutItem:a,isLockLayout:l,supportAutoSize:r}=this.props;if(!a)return null;const d=a.setting||{},u=a.bbox||{},c=null!==(i=null===(e=d.autoProps)||void 0===e?void 0:e.height)&&void 0!==i?i:s.LayoutItemSizeModes.Custom,p="ratio"===d.heightMode;return(0,t.jsx)("div",{className:"accordion-item-setting",css:this.getStyle()},!l&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(He.SettingSection,{role:"group",title:this.formatMessage("size"),"aria-label":this.formatMessage("size")},(0,t.jsx)(He.SettingRow,{role:"group",label:this.formatMessage("height"),"aria-label":this.formatMessage("height")},(0,t.jsx)("div",{css:Ll},(0,t.jsx)(Ma.SizeEditor,{label:"H",mode:c||s.LayoutItemSizeModes.Custom,sizeModes:r?Pl:jl,value:u.height,availableUnits:zl,onChange:this.updateHeight,onModeChange:this.updateHeightMode,disabled:p}))),(0,t.jsx)(He.SettingRow,null,(0,t.jsx)(o.Label,null,(0,t.jsx)(o.Checkbox,{className:"mr-2",checked:p,onChange:this.toggleAspectRatio}),(0,t.jsx)("span",{className:"checkbox-label"},this.formatMessage("keepAspectRatio")))),p&&(0,t.jsx)(He.SettingRow,{label:this.formatMessage("aspectRatio"),"aria-label":this.formatMessage("aspectRatio")},(0,t.jsx)(Ma.InputRatio,{value:d.aspectRatio||"1:1",style:{width:100},onChange:this.updateAspectRatio})))),(a.type===t.LayoutItemType.Widget||a.sectionId)&&(0,t.jsx)(ja,{layoutId:n,layoutItemId:a.id,isSection:a.type===t.LayoutItemType.Section,style:this.props.style,onStyleChange:this.props.onStyleChange,onSettingChange:this.props.onSettingChange,formatMessage:this.props.formatMessage}))}}const kl={width:110};class $l extends t.React.PureComponent{constructor(){super(...arguments),this.updateSpace=t=>{const{layoutId:o}=this.props;if(!isNaN(t.distance)){(0,e.getAppConfigAction)().editLayoutProperty(o,"setting.gutter",t.distance).exec()}},this.updatePadding=t=>{const{layoutId:o}=this.props;(0,e.getAppConfigAction)().editLayoutProperty(o,"setting.style.padding",t).exec()}}render(){const{formatMessage:e}=this.props,o=this.props.setting||{},i=o.style||{},n=o.gutter>=0?o.gutter:Wa.gutter;return(0,t.jsx)(He.SettingSection,{role:"group",className:"flow-layout-setting",title:e("layout"),"aria-label":e("layout")},(0,t.jsx)(He.SettingRow,{label:e("gap")},(0,t.jsx)(Ma.InputUnit,{style:kl,"aria-label":e("gap"),min:0,value:{distance:n,unit:void 0},onChange:this.updateSpace})),(0,t.jsx)(He.SettingRow,{flow:"wrap",role:"group",label:e("padding"),"aria-label":e("padding")},(0,t.jsx)(Ma.Padding,{value:i.padding,onChange:this.updatePadding})))}}const El=(0,t.createSelector)(((t,e)=>{var o,i,n,s;return null===(s=null===(n=null===(i=null===(o=t.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===i?void 0:i.layouts)||void 0===n?void 0:n[e.layoutId])||void 0===s?void 0:s.setting}),(t=>({setting:t}))),Ol=t.ReactRedux.connect(El)($l);var Bl=p(4337);function Dl(i){const{layoutId:n}=i,s=t.hooks.useTranslation(),a=t.ReactRedux.useSelector((e=>{const o=e.appStateInBuilder.appConfig.layouts[n],i=Object.keys((null==o?void 0:o.content)||{}).map((e=>{const i=o.content[e];return i.isPending?"":i.type===t.LayoutItemType.Widget&&i.widgetId?`widget:${i.widgetId}`:i.type===t.LayoutItemType.Section?`section:${i.sectionId}`:""})).filter((t=>""!==t));return i.sort(),i.join(",")})),l=t.ReactRedux.useSelector((t=>{var e,o;const i=t.appStateInBuilder.appConfig.layouts[n];return null!==(o=null===(e=null==i?void 0:i.setting)||void 0===e?void 0:e.mainItemId)&&void 0!==o?o:""})),r=t.React.useMemo((()=>{if(a.length>0){const e=(0,t.getAppStore)().getState().appStateInBuilder;return a.split(",").map((t=>{const[o,i]=t.split(":");return"widget"===o?{value:i,label:e.appConfig.widgets[i].label}:{value:i,label:e.appConfig.sections[i].label}}))}return[]}),[a]),d=t.React.useCallback((o=>{var i;const s=(0,e.getAppConfigAction)();if(""===o.target.value){const e=null!==(i=s.appConfig.layouts[n].setting)&&void 0!==i?i:(0,t.Immutable)({});s.editLayoutProperty(n,"setting",e.without("mainItemId")).exec()}else s.editLayoutProperty(n,"setting.mainItemId",o.target.value).exec()}),[n]);return(0,t.jsx)(o.Select,{css:t.css`.jimu-dropdown { width: 100%; }`,value:l,onChange:d},(0,t.jsx)("option",{key:"none",value:""},s("none")),r.map((e=>(0,t.jsx)("option",{key:e.value,value:e.value},e.label))))}const Fl=[o.DistanceUnits.PIXEL];class Hl extends t.React.PureComponent{constructor(){super(...arguments),this.handlePaddingChange=t=>{const o=(0,e.getAppConfigAction)();this.getLayoutIds().forEach((e=>{o.editLayoutProperty(e,"setting.style.padding",t)})),o.exec()},this.handleSettingChange=(t,o)=>{const i=(0,e.getAppConfigAction)();this.getLayoutIds().forEach((e=>{i.editLayoutProperty(e,`setting.${t}`,o)})),i.exec()},this.toggleExpandable=()=>{var o;const{layoutId:i,allItemsExpandable:n}=this.props,s=(0,e.getAppConfigAction)(),a=s.appConfig.layouts[i];Object.keys(null!==(o=a.content)&&void 0!==o?o:{}).forEach((e=>{a.content[e].gridType===t.GridItemType.Plain&&s.editLayoutItemProperty({layoutId:i,layoutItemId:e},"expandable",!n,!0)})),s.exec()}}getLayoutIds(){const t=[],{layouts:e}=this.props;return null!=e&&Object.keys(e).forEach((o=>{t.push(e[o])})),t}render(){var e,i,n,s;const{layoutSetting:a,allItemsExpandable:l,allItemsNotExpandable:r,useCustomLayoutInSmallSizeMode:d,formatMessage:u,appTheme:c}=this.props;return(0,t.jsx)("div",{className:"flexbox-layout-setting"},(0,t.jsx)(He.SettingSection,{role:"group",title:u("layout"),"aria-label":u("layout")},(0,t.jsx)(He.SettingRow,{label:u("padding"),role:"group","aria-label":u("padding"),flow:"wrap"},(0,t.jsx)(Ma.Padding,{value:null===(e=a.style)||void 0===e?void 0:e.padding,onChange:this.handlePaddingChange})),(0,t.jsx)(He.SettingRow,{label:u("paddingColor")},(0,t.jsx)(Bl.ThemeColorPicker,{"aria-label":u("paddingColor"),specificTheme:c,value:a.paddingColor,onChange:t=>{this.handleSettingChange("paddingColor",t)}})),(0,t.jsx)(He.SettingRow,{label:u("gap"),truncateLabel:!0},(0,t.jsx)(Bl.ThemeColorPicker,{"aria-label":u("gap"),specificTheme:c,value:null!==(i=a.splitColor)&&void 0!==i?i:"var(--ref-palette-neutral-500)",onChange:t=>{this.handleSettingChange("splitColor",t)}}),(0,t.jsx)(Ma.InputUnit,{css:t.css`width: 74px !important;`,className:"ml-2",units:Fl,min:1,max:100,precision:0,value:{distance:null!==(n=a.splitSize)&&void 0!==n?n:8,unit:o.DistanceUnits.PIXEL},onChange:t=>{this.handleSettingChange("splitSize",t.distance)}}))),(0,t.jsx)(He.SettingSection,{role:"group",title:u("gridItems"),"aria-label":u("gridItems")},(0,t.jsx)(He.SettingRow,null,(0,t.jsx)(o.Label,{centric:!0},(0,t.jsx)(o.Checkbox,{"aria-label":u("allowResize"),checked:null===(s=a.resizable)||void 0===s||s,onChange:(t,e)=>{this.handleSettingChange("resizable",e)}}),(0,t.jsx)("span",{className:"ml-2"},u("allowResize")))),(0,t.jsx)(He.SettingRow,null,(0,t.jsx)("div",{className:"d-flex w-100 align-items-center"},(0,t.jsx)(o.Label,{css:t.css`width: 80%;`,className:"justify-content-start"},(0,t.jsx)(o.Checkbox,{"aria-label":u("allowExpansion"),checked:l,indeterminate:!l&&!r,onClick:this.toggleExpandable}),(0,t.jsx)("span",{className:"ml-2 text-truncate"},u("allowExpansion"))),(0,t.jsx)(o.Tooltip,{title:u("gridSettingOverrideTip"),placement:"bottom"},(0,t.jsx)(o.Button,{className:"ml-auto",type:"tertiary",icon:!0},(0,t.jsx)(Ml,null))))),!d&&(0,t.jsx)(He.SettingRow,{label:u("setMainGridItem"),flow:"wrap"},(0,t.jsx)(Dl,{layoutId:this.props.layoutId}))))}}const Vl=(0,t.createSelector)(((t,e)=>{const o=t.appStateInBuilder;return o?e.layouts[o.browserSizeMode]||e.layouts[o.appConfig.mainSizeMode]:null}),((t,e)=>{var o,i;const n=t.appStateInBuilder;if(!n)return{};const s=e.layouts[n.browserSizeMode]||e.layouts[n.appConfig.mainSizeMode],{layouts:a}=n.appConfig;return null!==(i=null===(o=a[s])||void 0===o?void 0:o.setting)&&void 0!==i?i:{}}),((e,o)=>{var i;const n=e.appStateInBuilder;if(!n)return!1;const s=o.layouts[n.browserSizeMode]||o.layouts[n.appConfig.mainSizeMode],{layouts:a}=n.appConfig,l=a[s],r=Object.keys(null!==(i=l.content)&&void 0!==i?i:{});return!(r.length>0)||r.every((e=>{var o;const i=l.content[e];return i.gridType!==t.GridItemType.Plain||(null===(o=i.expandable)||void 0===o||o)}))}),((e,o)=>{var i;const n=e.appStateInBuilder;if(!n)return!1;const s=o.layouts[n.browserSizeMode]||o.layouts[n.appConfig.mainSizeMode],{layouts:a}=n.appConfig,l=a[s],r=Object.keys(null!==(i=l.content)&&void 0!==i?i:{});return!(r.length>0)||r.every((e=>{const o=l.content[e];return o.gridType!==t.GridItemType.Plain||null!=o.expandable&&!o.expandable}))}),((e,o)=>{const i=e.appStateInBuilder;if(!i)return{};const n=o.layouts[i.browserSizeMode]||o.layouts[i.appConfig.mainSizeMode],a=s.searchUtils.getRootContainerInfoOfLayout(i.appConfig,n,i.browserSizeMode);switch(null==a?void 0:a.type){case t.ContainerType.Page:return null!=i.appConfig.pages[a.id].layout[t.BrowserSizeMode.Small];case t.ContainerType.Dialog:return null!=i.appConfig.dialogs[a.id].layout[t.BrowserSizeMode.Small];case t.ContainerType.Header:return null!=i.appConfig.header.layout[t.BrowserSizeMode.Small];case t.ContainerType.Footer:return null!=i.appConfig.footer.layout[t.BrowserSizeMode.Small];default:return!1}}),((t,e,o,i,n)=>({layoutId:t,layoutSetting:e,allItemsExpandable:o,allItemsNotExpandable:i,useCustomLayoutInSmallSizeMode:n}))),Wl=t.ReactRedux.connect(Vl)(Hl);class Gl{constructor(){this.id="flow-layout-transformer",this.layoutType=t.LayoutType.FlowLayout}transformLayout(e,o,i){if(o!==i&&i===t.BrowserSizeMode.Small){let o=(0,t.Immutable)(e);return(e.order||[]).forEach((t=>{o=o.setIn(["content",t,"setting","heightMode"],"auto")})),o}return e}transformLayoutItem(t,e,o,i,n,s){return{index:e,item:t}}}function Ul(e,o,i){var n;const s=function(e,o){var i;const n=e.layouts[o];return(null===(i=null==n?void 0:n.parent)||void 0===i?void 0:i.type)===t.LayoutParentType.Widget?n.parent.id:null}(e,i),a=function(t,e,o){var i,n,s,a,l,r,d;const u=t.widgets[o];if(null!=u){const p=E(),h=t.mainSizeMode,g=u.layouts.DEFAULT[p],m=u.layouts.DEFAULT[h],y=(c=null!==(l=null===(a=null===(s=null===(n=(null!==(i=t.layouts[g])&&void 0!==i?i:t.layouts[m]).setting)||void 0===n?void 0:n.style)||void 0===s?void 0:s.padding)||void 0===a?void 0:a.number)&&void 0!==l?l:[0])&&0!==c.length?1===c.length?[c[0],c[0],c[0],c[0]]:2===c.length?[c[0],c[1],c[0],c[1]]:3===c.length?[c[0],c[1],c[2],0]:[c[0],c[1],c[2],c[3]]:[0,0,0,0],f=null!==(d=null===(r=null==e?void 0:e[o])||void 0===r?void 0:r.height)&&void 0!==d?d:0;let v=y[0],I=y[2];return j(v)&&(v=N(v,f)),j(I)&&(I=N(I,f)),f-v-I}var c;return 0}(e,o,s);if(a>0){const t=null!==(n=e.layouts[i].order)&&void 0!==n?n:[],o={};return t.forEach((t=>{const n=e.layouts[i].content[t];o[t]=function(t,e){var o,i,n,s;const a=null!==(o=e.setting)&&void 0!==o?o:{},l=O("height",e.bbox,a.autoProps);let r;if("ratio"===a.heightMode)r={setting:{heightMode:"ratio",aspectRatio:null!==(i=a.aspectRatio)&&void 0!==i?i:1,autoProps:{height:C.Custom}}};else{if(l!==C.Custom)return{height:l===C.Stretch?t:null,setting:{autoProps:{height:l}}};{let o=null!==(s=null===(n=e.bbox)||void 0===n?void 0:n.height)&&void 0!==s?s:t;o=j(o)?N(o,t):parseInt(o),r={height:o,setting:{heightMode:"fixed",autoProps:{height:C.Custom}}}}}return r}(a,n)})),o}return null}class _l{constructor(){this.id="row-layout-transformer",this.layoutType=t.LayoutType.RowLayout}transformLayout(e,o,i,n){var s,a;if(o===i)return e;let l=(0,t.Immutable)(e);if(i===t.BrowserSizeMode.Small){const o=Ul(n,null===(s=window.runtimeInfo)||void 0===s?void 0:s.widgets,e.id);let i=0;Object.keys(null!==(a=e.content)&&void 0!==a?a:{}).sort(((t,o)=>parseInt(e.content[t].bbox.left,10)-parseInt(e.content[o].bbox.left,10))).forEach((n=>{var s,a,r;const d=e.content[n];if(!d.isPending){if(l=l.setIn(["content",n,"bbox"],{left:i*yn,width:yn,height:null!==(a=null===(s=d.bbox)||void 0===s?void 0:s.height)&&void 0!==a?a:"auto"}),null!=o){const e=null!==(r=d.setting)&&void 0!==r?r:(0,t.Immutable)({});l=l.setIn(["content",n,"bbox","height"],o[n].height).setIn(["content",n,"setting"],e.merge(o[n].setting))}i+=1}}))}return l}transformLayoutItem(t,e,o,i,n,s){return{item:t,index:e}}}class Yl{constructor(){this.id="grid-layout-transformer",this.layoutType=t.LayoutType.GridLayout,this.transformLayout=(e,o,i)=>{var n,a,l;if(o!==i&&i===t.BrowserSizeMode.Small){let o=(0,t.Immutable)(e);const i=null===(n=e.setting)||void 0===n?void 0:n.rootItem,r=null===(a=e.setting)||void 0===a?void 0:a.mainItemId;if(i&&(null===(l=e.content)||void 0===l?void 0:l[i])){const n=[],a=e.content[i];if(r){let l;if(Object.keys(e.content).some((t=>{const o=e.content[t];return(o.widgetId===r||o.sectionId===r)&&(l=t,!0)})),l){if(o=this.collectItem(e,i,l,a.children,n),(null==n?void 0:n.length)>0){const a=`${s.utils.getMaximumId(e)+1}`,r={id:a,bbox:{width:50},gridType:t.GridItemType.Tab,children:n,parent:i};o=o.setIn(["content",a],r),n.forEach((t=>{o=o.setIn(["content",t,"parent"],a)})),o=o.setIn(["content",i,"gridType"],t.GridItemType.Column),o=o.setIn(["content",i,"children"],[l,a]),o=o.setIn(["content",l,"parent"],i).setIn(["content",l,"bbox","width"],50)}return o}}o=this.collectItem(e,i,null,a.children,n),n.length>0&&(o=o.setIn(["content",i,"gridType"],t.GridItemType.Tab),o=o.setIn(["content",i,"children"],n))}return o}return e},this.collectItem=(e,o,i,n,s)=>{let a=e;return null==n||n.forEach((n=>{var l;if(!e.content[n].isPending&&n!==i){const r=e.content[n];r.gridType!==t.GridItemType.Column&&r.gridType!==t.GridItemType.Row&&r.gridType!==t.GridItemType.Tab?(s.push(n),i||(a=a.setIn(["content",n,"parent"],o))):(null===(l=r.children)||void 0===l?void 0:l.length)>0&&(a=this.collectItem(a,o,i,r.children,s))}})),a}}transformLayoutItem(t,e,o,i,n,s){return{index:e,item:t}}}const Xl=10;var Zl=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};function ql(e){const{isFirst:o,isLast:i,menuItems:n}=e,s=Zl(e,["isFirst","isLast","menuItems"]),[a,l]=t.React.useState(n),r=t.ReactRedux.useSelector((t=>{var e,o,i;return null!==(i=null===(o=null===(e=t.appConfig)||void 0===e?void 0:e.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i}));return t.React.useEffect((()=>{const t=n.filter((t=>{var o;return"function"==typeof t.visible?t.visible({layoutId:e.layoutId,layoutItem:e.layoutItem,clientRect:null}):null===(o=t.visible)||void 0===o||o}));l(t)}),[o,i,n,e.layoutId,e.layoutItem,r]),t.React.createElement(te,Object.assign({menuItems:a},s))}var Kl=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function l(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}r((i=i.apply(t,e||[])).next())}))};function Jl(o,i,n){return Kl(this,void 0,void 0,(function*(){const a={},l=yield e.widgetService.createFromTemplate((0,e.getAppConfigAction)().appConfig,n,null,[s.utils.getCurrentSizeMode()],a,{isBlock:!0});let r=l[0];const d=l[1];r=e.widgetService.afterBatchCopied(r,(0,t.Immutable)(n.config),a);const u=(0,e.getAppConfigAction)(r),c=u.addTemplateContentToLayout(o,t.LayoutItemType.Widget,d),p=(u.appConfig.layouts[o].order||[]).indexOf(i);return u.adjustOrderOfItem(c,p>=0?p+1:NaN),s.utils.changeLayout(u.appConfig,Object.assign(Object.assign({},c),{autoScroll:!0})),c}))}function Ql(o,i,n){return Kl(this,void 0,void 0,(function*(){const a={},l=yield e.screenGroupService.createFromTemplate((0,e.getAppConfigAction)().appConfig,n,null,[s.utils.getCurrentSizeMode()],a);let r=l[0];const d=l[1];r=e.widgetService.afterBatchCopied(r,(0,t.Immutable)(n.config),a);const u=(0,e.getAppConfigAction)(r),c=u.addTemplateContentToLayout(o,t.LayoutItemType.ScreenGroup,d),p=(u.appConfig.layouts[o].order||[]).indexOf(i);return u.adjustOrderOfItem(c,p>=0?p+1:NaN),s.utils.changeLayout(u.appConfig,Object.assign(Object.assign({},c),{autoScroll:!0})),c}))}function tr(t,o){var i;const{layoutId:n,layoutItemId:s}=o,a=(0,e.getAppConfigAction)(t),l=a.appConfig.layouts[n],r=l.order,d=[].concat(r),u=r.indexOf(s);let c=r.length-1;for(let t=u+1;t<r.length;t++){const e=r[t];if(!(null===(i=l.content[e].setting)||void 0===i?void 0:i.isFloating)){c=t;break}}return d.splice(c+1,0,s),d.splice(u,1),a.editLayoutProperty(n,"order",d),a.appConfig}function er(t,o){var i;const{layoutId:n,layoutItemId:s}=o,a=(0,e.getAppConfigAction)(t),l=a.appConfig.layouts[n],r=l.order,d=[].concat(r),u=r.indexOf(s);let c=0;for(let t=u-1;t>=0;t--){const e=r[t];if(!(null===(i=l.content[e].setting)||void 0===i?void 0:i.isFloating)){c=t;break}}return d.splice(u,1),d.splice(c,0,s),a.editLayoutProperty(n,"order",d),a.appConfig}var or=p(5549),ir=p.n(or),nr=p(7528),sr=p.n(nr);class ar extends t.React.PureComponent{constructor(o){super(o),this.state={isResizing:!1,dh:0,showBlockTemplatePopup:!1,showScreenTemplatePopup:!1,referenceElem:null},this.onResizeStart=(t,e,o)=>{const{padding:i}=this.props;this.minHeight=16+i,this.initHeight=o,this.setState({dh:0,isResizing:!0})},this.onResizing=(t,e,o,i,n)=>{let s=n;n<0&&this.initHeight+n<this.minHeight&&(s=this.minHeight-this.initHeight),this.setState({dh:s,isResizing:!0})},this.onResizeEnd=(o,i,n,s,a,l)=>{const{layoutId:r,layoutItem:d}=this.props;let u=a;a<0&&this.initHeight+a<this.minHeight&&(u=this.minHeight-this.initHeight);const c=(0,t.Immutable)(d.bbox||{}).set("height",Math.round(this.initHeight+u));(0,e.getAppConfigAction)().editLayoutItemProperty({layoutId:r,layoutItemId:d.id},"bbox",c).exec(),this.setState({isResizing:!1,dh:0})},this.toggleBlockTemplatePopup=()=>{(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?this.setState({showBlockTemplatePopup:!this.state.showBlockTemplatePopup}):e.appBuilderSync.publishSidePanelToApp({type:"templateBlock",templateMethod:"getBlockTemplates",onSelect:this.onTemplateBlockSelected})},this.toggleScreenTemplatePopup=()=>{(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?this.setState({showScreenTemplatePopup:!this.state.showScreenTemplatePopup}):e.appBuilderSync.publishSidePanelToApp({type:"template",templateMethod:"getScreenGroupTemplates",onSelect:this.onTemplateScreenGroupSelected})},this.removeLayoutItem=()=>{const{layoutId:t,layoutItemId:o}=this.props;(0,e.getAppConfigAction)().removeLayoutItem({layoutId:t,layoutItemId:o},!0).exec()},this.moveLayoutItemUp=()=>{const{layoutId:t,layoutItemId:o}=this.props,i=er((0,e.getAppConfigAction)().appConfig,{layoutId:t,layoutItemId:o});(0,e.getAppConfigAction)(i).exec()},this.moveLayoutItemDown=()=>{const{layoutId:t,layoutItemId:o}=this.props,i=tr((0,e.getAppConfigAction)().appConfig,{layoutId:t,layoutItemId:o});(0,e.getAppConfigAction)(i).exec()},this.switchSetting=()=>{const{layoutId:e,layoutItemId:o,selected:i}=this.props;i||(0,t.getAppStore)().dispatch(t.appActions.selectionChanged({layoutId:e,layoutItemId:o}))},this.onTemplateBlockSelected=t=>{Jl(this.props.layoutId,this.props.layoutItemId,t),this.setState({showBlockTemplatePopup:!1})},this.onTemplateScreenGroupSelected=t=>{Ql(this.props.layoutId,this.props.layoutItemId,t),this.setState({showScreenTemplatePopup:!1})},this.fakeTopLayouts=(0,t.Immutable)({[t.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_tlarge`,[t.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_tmedium`,[t.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_tsmall`}),this.fakeBottomLayouts=(0,t.Immutable)({[t.BrowserSizeMode.Large]:`${this.props.layoutId}_${this.props.layoutItemId}_blarge`,[t.BrowserSizeMode.Medium]:`${this.props.layoutId}_${this.props.layoutItemId}_bmedium`,[t.BrowserSizeMode.Small]:`${this.props.layoutId}_${this.props.layoutItemId}_bsmall`}),this.minHeight=0,this.contextMenus=[{icon:ir(),title:this.props.formatMessage("insertABlock"),onClick:this.toggleBlockTemplatePopup,visible:()=>!lt()},{icon:sr(),title:this.props.formatMessage("insertAScreenGroup"),onClick:this.toggleScreenTemplatePopup,visible:()=>!lt()&&(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small},yt,{icon:st(),title:this.props.formatMessage("setting"),onClick:this.switchSetting},{icon:K(),title:this.props.formatMessage("dragToMove",{label:rt(this.props.layoutItem)}),className:"tool-drag-handler",onClick:()=>null,visible:()=>!lt()},{icon:qs(),onClick:this.moveLayoutItemUp,title:this.props.formatMessage("moveup"),visible:()=>!this.props.isFirst&&!lt()},{icon:qs(),rotate:180,onClick:this.moveLayoutItemDown,title:this.props.formatMessage("movedown"),visible:()=>!this.props.isLast&&!lt()},{icon:Y(),title:this.props.formatMessage("delete"),onClick:this.removeLayoutItem,visible:()=>!lt()}]}calHeight(t){if(this.state.isResizing)return`${this.initHeight+this.state.dh}px`;const e=function(t,e){const o=z(t.bbox||{},"height");if(!o||j(o))return"auto";switch(e.heightMode){case"auto":return"auto";case"fixed":return o;default:return null}}(this.props.layoutItem,t);return this.autoHeight="auto"===e,e}createContextMenu(){const{builderTheme:e}=this.pageContext,{layoutId:o,layoutItem:i,isFirst:n,isLast:s}=this.props;return(0,t.jsx)(ql,{layoutId:o,layoutItem:i,builderTheme:e,positionType:"center",size:28,iconSize:16,className:"widget-context-menu",menuItems:this.contextMenus,isFirst:n,isLast:s},(0,t.jsx)("div",{ref:t=>{this.reference=t},css:t.css`position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;`}),this.state.showBlockTemplatePopup&&(0,t.jsx)(He.TemplateSelector,{templates:(0,Gi.getBlockTemplates)(),referenceElement:this.reference,onItemSelect:this.onTemplateBlockSelected,onClose:this.toggleBlockTemplatePopup}),this.state.showScreenTemplatePopup&&(0,t.jsx)(He.TemplateSelector,{templates:(0,Gi.getScreenGroupTemplates)(),referenceElement:this.reference,onItemSelect:this.onTemplateScreenGroupSelected,onClose:this.toggleScreenTemplatePopup}))}getStyle(e){const{builderTheme:o}=this.pageContext,{index:i,gutter:n}=this.props,a=s.utils.isRTL()?-1:1;return[t.css`
        margin-top: ${i>0?`${n}px`:"unset"};
        width: ${_a(e)};
        height: ${this.calHeight(e)};
        flex-shrink: 0;
        position: relative;
        cursor: default;
        & > div.widget-context-menu {
          display: none;
        }

        &:hover > div.widget-context-menu {
          display: flex;
        }

        .template-popup {
          background-color: ${o.ref.palette.black};
        }

        .tool-drag-handler {
          cursor: move;
        }
      `,e.offsetX||e.offsetY?`translate(${(e.offsetX||0)*a}px, ${e.offsetY||0}px)`:null]}render(){const{layoutId:e,layoutItem:o,draggable:i,selectable:n,isEmpty:a,selected:l}=this.props;if(!o||a)return null;const r=t.lodash.assign({},Ga,o.setting),d=(0,t.classNames)("flow-layout-item d-flex",{selected:l}),u=s.utils.handleOnebyOneAnimation(this.props);return(0,t.jsx)(s.PageContext.Consumer,null,(s=>{this.pageContext=s;const[a,l]=this.getStyle(r);return(0,t.jsx)(zo,Object.assign({id:`${e}_block_${o.id}`,css:a,style:{transform:l},layoutId:e,layoutItemId:o.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,left:!1,right:!1,top:!1,bottom:"fixed"===r.heightMode,restrict:!0,useDragHandler:!0,draggable:i,selectable:n,forbidContextMenu:!0,forbidToolbar:!0,isBlock:!0,className:d,autoHeight:this.autoHeight},u),!s.viewOnly&&this.createContextMenu())}))}}const lr=t.ReactRedux.connect(Ua)(ar);class rr extends t.React.PureComponent{constructor(){super(...arguments),this.state={isResizing:!1,dx:0,dy:0,dw:0,dh:0},this.onResizeStart=(t,e,o)=>{this.setState({isResizing:!0}),this.initHeight=o,this.initWidth=e},this.onResizing=(t,e,o,i,n)=>{this.setState({dx:e,dy:o,dw:i,dh:n})},this.onResizeEnd=(t,o,i,n,s,a)=>{const{layoutId:l,layoutItem:r}=this.props;let d=r.bbox;d=d.set("height",Math.round(parseInt(d.height,10)+s)).set("width",Math.round(parseInt(d.width,10)+n)).set("left",Math.round(parseInt(d.left,10)+o)).set("top",Math.round(parseInt(d.top,10)+i)).set("bottom",Math.round(parseInt(d.top,10)-s+i));(0,e.getAppConfigAction)().editLayoutItemProperty({layoutId:l,layoutItemId:r.id},"bbox",d).exec(),this.setState({isResizing:!1,dx:0,dy:0,dw:0,dh:0})}}calculatePosition(){const{layoutItem:e}=this.props,{dh:o,dw:i,isResizing:n}=this.state;return function(e,o={}){var i,n,s;const a=e.setting,l=null!==(i=null==a?void 0:a.floatingArea)&&void 0!==i?i:1,r=`${null!==(n=null==a?void 0:a.offsetX)&&void 0!==n?n:0}px`,d=`${null!==(s=null==a?void 0:a.offsetY)&&void 0!==s?s:0}px`,{dh:u,dw:c,initWidth:p,initHeight:h,isResizing:g}=o,m=$()?`translateX(calc(50% + ${r}))`:`translateX(calc(-50% + ${r}))`,y={};switch(l){case 1:y.left=r,y.top=d,y.transform=null;break;case 2:y.left="50%",y.top=d,y.transform=m;break;case 3:y.right=r,y.top=d,y.transform=null;break;case 4:y.left=r,y.top="50%",y.transform=`translateY(calc(-50% + ${d}))`;break;case 5:y.left="50%",y.top="50%",y.transform=`${m} translateY(calc(-50% + ${d}))`;break;case 6:y.right=r,y.top="50%",y.transform=`translateY(calc(-50% + ${d}))`;break;case 7:y.left=r,y.bottom=d,y.transform=null;break;case 8:y.left="50%",y.bottom=d,y.transform=m;break;case 9:y.right=r,y.bottom=d,y.transform=null}return t.css`
    position: fixed;
    z-index: 1;
    width: ${g?`${p+c}px`:z(e.bbox,"width")};
    height: ${g?`${h+u}px`:z(e.bbox,"height")};
    left: ${y.left};
    right: ${y.right};
    top: ${y.top};
    bottom: ${y.bottom};
    transform: ${y.transform};
  `}(e,{dh:o,dw:i,isResizing:n,initWidth:this.initWidth,initHeight:this.initHeight})}render(){const{layoutId:e,layoutItem:o,selectable:i,selected:n}=this.props;if(!o)return null;const a=(0,t.classNames)("flexbox-layout-item floating d-flex",{selected:n});return(0,t.jsx)(s.PageContext.Consumer,null,(n=>(this.pageContext=n,(0,t.jsx)(zo,{css:this.calculatePosition(),layoutId:e,layoutItemId:o.id,onResizeStart:this.onResizeStart,onResizing:this.onResizing,onResizeEnd:this.onResizeEnd,restrict:!0,draggable:!1,selectable:i,className:a}))))}}const dr=t.ReactRedux.connect(s.utils.mapStateToLayoutItemProps)(rr);function ur(i){const{formatMessage:n,activeScreenIndex:s,total:a,layoutId:l,layoutItemId:r,screenGroupId:d,browserSizeMode:c,hasPanel:p}=i,h=!t.ReactRedux.useSelector((e=>{var o,i,n;const s=null!==(i=null===(o=e.appConfig.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i;return(null===(n=e.appRuntimeInfo)||void 0===n?void 0:n.appMode)===t.AppMode.Design&&!s}))||c!==t.BrowserSizeMode.Large,[g,m]=t.React.useState(!1),y=t.React.useRef(),f=t.React.useCallback((()=>{m(!1)}),[]),v=t.React.useCallback((()=>{const e=(0,u.getTheme2)();return t.css`
      border: none;

      .tooltip {
        color: ${e.ref.palette.black};
        background-color: ${e.ref.palette.neutral[600]};
        border-color: ${e.ref.palette.neutral[400]};
      }
    `}),[]),I=t.React.useCallback((o=>{const i=(0,e.getAppConfigAction)(),n=i.appConfig.layouts[l].content[r].screenGroupId;i.createScreenFromTemplate(null,o).then((e=>{let o=i.appConfig;o=o.setIn(["screenGroups",n,"screens"],[].concat(o.screenGroups[n].screens,e)).setIn(["screens",e,"parent"],n),t.utils.changeAppConfig(o),(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(n,o.screenGroups[n].screens.length-1))})),f()}),[f,l,r]),x=t.React.useCallback((()=>{if(p)m(!g);else{const t=(0,Gi.getScreenTemplates)().find((t=>"nopanel"===t.name));t&&I(t)}}),[g,p,I]),b=t.React.useCallback((()=>{(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(d,s-1))}),[d,s]),w=t.React.useCallback((()=>{(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(d,s+1))}),[d,s]),S=t.React.useCallback((()=>{(0,e.getAppConfigAction)().removeScreenByIndex(s,d).exec(),s===a-1&&(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(d,s-1))}),[s,a,d]),C=t.React.useCallback((()=>{const o=(0,e.getAppConfigAction)();o.duplicateScreenByIndex(s,d),o.exec(),(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(d,s+1))}),[s,d]);return(0,t.jsx)("div",{className:"menu-bar d-flex justify-content-between align-items-center"},(0,t.jsx)("div",{className:"d-flex justify-content-start align-items-center"},(0,t.jsx)("div",{className:"info ml-2"},n("screen"),": ",s+1," / ",a),(0,t.jsx)(qe,{title:0===s?"":n("previous"),placement:"bottom",css:v()},(0,t.jsx)(o.Button,{icon:!0,className:"rounded-circle",disabled:0===s,type:"tertiary",onClick:b},(0,t.jsx)(o.Icon,{icon:qs(),size:16}))),(0,t.jsx)(qe,{title:s===a-1?"":n("next"),placement:"bottom",css:v()},(0,t.jsx)(o.Button,{icon:!0,className:"rounded-circle",disabled:s===a-1,type:"tertiary",onClick:w},(0,t.jsx)(o.Icon,{icon:qs(),rotate:180,size:16}))),!h&&(0,t.jsx)("div",{ref:y},(0,t.jsx)(qe,{title:n("newScreen"),placement:"bottom",css:v()},(0,t.jsx)(o.Button,{icon:!0,onClick:x,className:"rounded-circle",type:"tertiary","data-testid":"addBtn"},(0,t.jsx)(o.Icon,{icon:Ct(),size:16})))),!h&&g&&(0,t.jsx)(He.TemplateSelector,{templates:(0,Gi.getScreenTemplates)(),referenceElement:y.current,onItemSelect:I,onClose:f}),!h&&(0,t.jsx)(qe,{title:n("duplicateScreen"),placement:"bottom",css:v()},(0,t.jsx)(o.Button,{icon:!0,className:"rounded-circle",type:"tertiary",onClick:C,"data-testid":"duplicateBtn"},(0,t.jsx)(o.Icon,{icon:Tt(),size:16}))),!h&&a>1&&(0,t.jsx)(qe,{title:n("deleteScreen"),placement:"bottom",css:v()},(0,t.jsx)(o.Button,{icon:!0,className:"rounded-circle",type:"tertiary",onClick:S,"data-testid":"removeBtn"},(0,t.jsx)(o.Icon,{icon:Y(),size:16})))))}function cr(){const t=[0];for(let e=1;e<=100;e++)t.push(e/100);return t}function pr(e){switch(e){case t.ScreenTriggerType.Top:return"0% 0% -98% 0%";case t.ScreenTriggerType.Bottom:return"-98% 0% -2px 0%";case t.ScreenTriggerType.Upper:return`-${100/3-1}% 0% -${200/3-1}% 0%`;case t.ScreenTriggerType.Lower:return`-${200/3-1}% 0% -${100/3-1}% 0%`;default:return}}function hr(e,o,i,n){const s=t.React.useRef(),a=t.React.useRef();t.React.useEffect((()=>{s.current&&(s.current.unobserve(e),s.current=null);if(e&&"function"==typeof IntersectionObserver){const t=new IntersectionObserver((t=>{(t=>{const e=t.boundingClientRect,o=t.rootBounds,i=Math.abs(e.bottom-o.top)>=Math.abs(e.top-o.top);if(t.isIntersecting){if(a.current=!0,i)n(!0)}else if(a.current&&(a.current=!1,i))n(!1)})(t[0])}),{threshold:cr(),root:o||document,rootMargin:pr(i)});return t.observe(e),s.current=t,()=>{s.current.unobserve(e),s.current=null}}}),[e,o,n,i])}const gr=.33,mr=.25;function yr(e){const{props:i,viewHeight:n,headerHeight:s,isActive:a,verticalSpace:l,stretched:r,transitionType:d,screenTransitionType:u,isSmallSize:c}=e,{side:p,size:h,offset:g,background:m,overlay:y=!0,padding:f}=i.panel||{},v=(0,t.getAppStore)().getState().appContext.isRTL?"left"===p?"-":"":"right"===p?"-":"",I=o.styleUtils.toBackgroundEmotionStyle(null!=m?m:{}),x=parseFloat(l);if(c){const e=!y;return t.css`
      width: 100%;
      background: transparent;
      pointer-events: none;
      position: relative;
      opacity: ${d===t.ScreenTransitionType.Fade?a?"1":"0.5":null};
      min-height: ${u===t.ScreenTransitionType.Cover?`${n}px`:null};
      padding-top: ${u!==t.ScreenTransitionType.Fade&&e?`${Math.round(n*gr)}px`:null};

      &.top-spacing > .panel-content {
        /* margin-top: ${Math.round(n*gr)}px; */
      }

      .panel-content {
        width: 100%;
        ${y?"":I};
        /* margin-top: ${d===t.ScreenTransitionType.Push?"${Math.round(viewHeight * SCREEN_RATIO_IN_SMALL_SIZE)}px":"unset"}; */

        > .layout, > .layout-wrapper > .layout {
          pointer-events: auto;
          ${y?I:""};
          min-height: ${Math.round(n*mr)}px;
          padding: ${o.styleUtils.toCSSPadding(f)};
        }

        > .layout-wrapper > .column-layout > .trail-container,
        > .column-layout > .trail-container {
          overflow-y: hidden;
        }

        > .layout-wrapper > .placeholder-btn {
          pointer-events: auto;
          ${y?I:""};
        }

        .panel-spacing {
          height: ${Math.round(n*x/100)}px;
        }
      }

      .panel-content-placeholder {
        width: 1px;
        min-height: ${n}px;
      }

      body:not(.design-mode) & {
        min-height: ${u===t.ScreenTransitionType.Cover?"100vh":null};
        min-height: ${u===t.ScreenTransitionType.Cover?"calc(var(--vh) * 100)":null};
        padding-top: ${u!==t.ScreenTransitionType.Fade&&e?"33vh":null};
        padding-top: ${u!==t.ScreenTransitionType.Fade&&e?"calc(var(--vh) * 33)":null};

        > .layout, > .layout-wrapper > .layout {
          min-height: ${Math.round(25)}vh;
          min-height: calc(var(--vh) * ${Math.round(25)});
        }

        .panel-content-placeholder {
          min-height: 100vh;
          min-height: calc(var(--vh) * 100);
        }

        .panel-spacing {
          height: ${x}vh;
          height: calc(var(--vh) * ${x});
        }
      }
    `}return t.css`
    width: 100%;
    background: transparent;
    pointer-events: none;
    display: flex;
    flex-direction: ${"right"===p?"row-reverse":"row"};
    justify-content: ${"center"===p&&y?"center":"flex-start"};
    position: relative;
    opacity: ${d===t.ScreenTransitionType.Fade?a?"1":"0.5":null};

    &.top-spacing > .panel-content {
      /* margin-top: ${Math.round(2*n/3)}px; */
    }

    .panel-content {
      width: ${h};
      transform: ${y&&Math.abs(parseFloat(g))>0?`translateX(${v}${g})`:null};
      flex: 0 auto;
      min-height: ${r?`${n}px`:"unset"};
      ${y?"":I};

      > .layout,
      > .layout-wrapper > .layout {
        pointer-events: auto;
        ${y?I:""};
        min-height: ${Math.round(n*mr)}px;
        padding: ${o.styleUtils.toCSSPadding(f)};
      }

      > .layout-wrapper > .column-layout > .trail-container,
      > .column-layout > .trail-container {
        overflow-y: hidden;
      }

      > .layout-wrapper > .placeholder-btn {
        pointer-events: auto;
        ${y?I:""};
      }

      .panel-spacing {
        height: ${Math.round(n*x/100)}px;

        &.last-item {
          height: ${r?`${Math.round(n*x/100)}`:n}px;
        }
      }
    }

    .panel-content-placeholder {
      width: 1px;
      min-height: ${r?n:Math.round(n*mr)}px;
    }

    body:not(.design-mode) & {
      &.top-spacing > .panel-content {
        /* margin-top: 66.7vh; */
      }

      .panel-content {
        min-height: ${r?s>0?`calc(100vh - ${s}px)`:"100vh":"unset"};
        min-height: ${r?s>0?`calc(var(--vh) * 100 - ${s}px)`:"calc(var(--vh) * 100)":"unset"};
        > .layout, > .layout-wrapper > .layout {
          min-height: unset;
        }

        .panel-spacing {
          height: ${x}vh;
          height: calc(var(--vh) * ${x});

          &.last-item {
            height: ${r?x:100}vh;
            height: calc(var(--vh) * ${r?x:100});
          }
        }
      }
      .panel-content-placeholder {
        min-height: ${r?"100":Math.round(25)}vh;
        min-height: calc(var(--vh) * ${r?"100":Math.round(25)});
      }
    }
  `}var fr=p(3529),vr=p.n(fr),Ir=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const xr=e=>{const o=window.SVG,{className:i}=e,n=Ir(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:vr()},n)):t.React.createElement("svg",Object.assign({className:s},n))};function br(e){const{rootLayoutId:i,viewHeight:n,headerHeight:s,screenId:a,isActive:l,isAbsolute:r,isLast:d,isSmallSize:u,layoutEntry:c,isDesignMode:p,formatMessage:h,builderTheme:g}=e,m=t.ReactRedux.useSelector((t=>t.appConfig.screens[a])),y=t.ReactRedux.useSelector((t=>{var e,o,i;return null===(i=null===(o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.screenPanelStates)||void 0===o?void 0:o[a])||void 0===i||i})),{main:f}=m,{side:v,size:I,overlay:x=!0}=m.panel||{},b=t.React.useRef(),w=t.React.useCallback((()=>{(0,t.getAppStore)().dispatch(t.appActions.screenPanelVisibleChanged(a,!0))}),[a]);const S=(0,t.classNames)("screen-main-panel",{"is-active":l,"last-one":d});return(0,t.jsx)(ee.Provider,{value:!r||l},(0,t.jsx)("div",{id:`${i}_screen_${a}`,className:S,css:function(){var e,i,a,l;if(u){const a=!x&&null!=m.panel,l=a?`${Math.round(n*gr)}px`:`${n}px`,r=a?`${Math.round(33)}`:"100";return t.css`
        pointer-events: none !important;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${n}px;

        > .layout {
          ${o.styleUtils.toBackgroundEmotionStyle(null!==(i=null===(e=m.main)||void 0===e?void 0:e.background)&&void 0!==i?i:{})};
          height: ${l} !important;
          border: none !important;
          pointer-events: auto;
        }

        body:not(.design-mode) & {
          height: ${s>0?`calc(100vh - ${s}px)`:"100vh"};
          height: ${s>0?`calc(var(--vh) * 100 - ${s}px)`:"calc(var(--vh) * 100)"};
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
      `}let d="0px",c="0px";"none"!==v&&(x||"right"===v||(d=I),x||"right"!==v||(c=I));const p=g?t.css`
      color: ${g.ref.palette.neutral[1200]};
      background-color: ${g.ref.palette.neutral[500]};
      border-color: ${g.ref.palette.neutral[600]};
      &:hover {
        color: ${g.ref.palette.black};
        background-color: ${g.ref.palette.neutral[600]};
      }
    `:null;return t.css`
      ${o.styleUtils.toBackgroundEmotionStyle(null!==(l=null===(a=m.main)||void 0===a?void 0:a.background)&&void 0!==l?l:{})};
      left: ${r?d:null};
      right: ${r?c:null};
      margin-left: ${r?null:d};
      margin-right: ${r?null:c};
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
          height: ${s>0?`calc(100vh - ${s}px)`:"100vh"} !important;
          height: ${s>0?`calc(var(--vh) * 100 - ${s}px)`:"calc(var(--vh) * 100)"} !important;
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
          ${p};
          svg {
            margin-right: 0;
            margin-left: 0;
          }
        }
      }
    `}(),ref:b,"data-screenid":a,"data-index":e.index},(0,t.jsx)(c,{layouts:f.layout,isInWidget:!0}),(0,t.jsx)("div",{className:"spacing-area"}),p&&!y&&(0,t.jsx)("div",{className:"toggle-visible-btn",onClick:w,"data-testid":"toggleBtn"},(0,t.jsx)(qe,{placement:"auto",title:h("showInDesignView")},(0,t.jsx)(o.Button,{type:"default",size:"sm",className:"rounded-1"},(0,t.jsx)(xr,{size:"m"}))))))}function wr(e,o,i,n,s){return e===t.ScreenTransitionType.Fade?t.css`
      position: sticky;
      height: ${o}px;
      top: 0;

      body:not(.design-mode) & {
        height: ${i>0?`calc(100vh - ${i}px)`:"100vh"};
        height: ${i>0?`calc(var(--vh) * 100 - ${i}px)`:"calc(var(--vh) * 100)"};
        top: ${i>0?`${i}px`:0};
        .layout .exb-drop-area {
          pointer-events: none !important;
        }
      }

      .screen-main-panel {
        position: absolute;
        opacity: 0;
        visibility: hidden;
        z-index: 0;
        transition: ${n?null:"opacity 400ms"};
        top: 0;
        /* height: ${n?"unset":"100% !important"}; */

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
    `:e===t.ScreenTransitionType.Cover?t.css`
      position: sticky;
      height: ${o}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: 100%;
        overflow: unset;
        position: relative;

        .screen-main-panel {
          top: ${i>0?`${i}px`:0};
        }
      }

      & > div:first-of-type {
        margin-top: 0 !important;
      }

      .screen-main-panel {
        position: sticky;
        top: 0;
        margin-top: ${1===s?"0 !important":null};

        .spacing-area {
          display: none;
        }
      }
    `:e===t.ScreenTransitionType.Push?t.css`
      position: sticky;
      height: ${o}px;
      overflow: hidden;
      top: 0;

      body:not(.design-mode) & {
        height: auto;
        overflow: unset;

        .screen-main-panel > .layout {
          top: ${i>0?`${i}px`:0};
        }
      }

      .screen-main-panel > .layout {
        position: sticky !important;
        top: 0;
      }
    `:void 0}function Sr(e,o,i){return e===t.ScreenTransitionType.Fade?t.css`
      height: calc(100% - ${o}px);
      background: transparent;
      pointer-events: none;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
      }
    `:e===t.ScreenTransitionType.Cover||e===t.ScreenTransitionType.Push?t.css`
      height: calc(100% - ${o}px);
      background: transparent;
      pointer-events: none;
      display: block;

      body:not(.design-mode) & {
        height: calc(100% - 100vh);
        height: calc(100% - var(--vh) * 100);
        display: none;
      }
    `:void 0}function Cr(e){const{rootLayoutId:o,activeIndex:i,viewHeight:n,headerHeight:s,screens:a,transitionType:l,isSmallSize:r,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p}=e;return(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"screen-container",css:wr(l,n,s,r,a.length)},a.map(((e,h)=>(0,t.jsx)(br,{key:e,rootLayoutId:o,index:h,isActive:i===h,screenId:e,viewHeight:n,headerHeight:s,isAbsolute:l===t.ScreenTransitionType.Fade,isLast:h===a.length-1,isSmallSize:r,layoutEntry:d,isDesignMode:u,formatMessage:c,builderTheme:p})))),(0,t.jsx)("div",{className:"screen-placeholder",css:Sr(l,n)}))}const Rr=(0,u.withBuilderTheme)(He.WidgetListPopper),Tr=t.css`
  width: 36px;
  height: 36px;
  padding: 0.5rem;
`,Mr=t.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`;function Ar(e){return t.css`
    display: flex;
    height: 200px;
    position: relative;
    z-index: 1;
    border: 1px dashed ${t.polished.rgba(e.ref.palette.neutral[1e3],.6)};

    body.lock-layout &,
    body:not(.design-mode) & {
      display: none !important;
    }

    .action-item {
      z-index: 1;
    }
  `}function Lr(i){const{layouts:n,builderTheme:a}=i,l=t.ReactRedux.useSelector((t=>n[t.browserSizeMode]||n[t.appConfig.mainSizeMode])),[r,d]=t.React.useState(!1),u=t.React.useRef(null),c=t.React.useCallback((o=>{V((0,e.getAppConfigAction)().appConfig,o,l).then((({layoutInfo:i,updatedAppConfig:n})=>{const a=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.ColumnLayout).processAfterItemAdded(n,o,i,{currentSizeMode:null,containerRect:{width:100,height:100},itemRect:{left:0,top:0},insertIndex:null});s.utils.changeLayout(a,i)})),d(!1)}),[l]),p=t.React.useCallback(((o,i,n)=>{V((0,e.getAppConfigAction)().appConfig,o,l).then((({layoutInfo:a,updatedAppConfig:l})=>{const r=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.ColumnLayout).processAfterItemAdded(l,o,a,{currentSizeMode:null,containerRect:i,itemRect:n,insertIndex:null});s.utils.changeLayout(r,a)}))}),[l]),h=t.React.useCallback((t=>!t.layoutInfo||t.layoutInfo.layoutId!==l),[l]);return(0,t.jsx)(s.LayoutContext.Provider,{value:{isItemAccepted:h}},(0,t.jsx)("div",{className:"placeholder-btn w-100 justify-content-center align-items-center",css:Ar(a)},(0,t.jsx)(Ye,{css:Mr,layouts:n,onDrop:p}),(0,t.jsx)("div",{className:"action-item",ref:u},(0,t.jsx)(o.Button,{icon:!0,css:Tr,onClick:o=>{o.stopPropagation(),(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?d(!r):e.appBuilderSync.publishSidePanelToApp({type:"widget",isPlaceholder:!0,isItemAccepted:h,onSelect:c})}},(0,t.jsx)(Ze,{size:"m"}))),r&&(0,t.jsx)(Rr,{referenceElement:u.current,isAccepted:h,onSelect:c,onClose:()=>{d(!1)}})))}var Pr=p(6490),jr=p.n(Pr),zr=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Nr=e=>{const o=window.SVG,{className:i}=e,n=zr(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:jr()},n)):t.React.createElement("svg",Object.assign({className:s},n))},kr=t.spring.animated;function $r(e){const{props:o,viewHeight:i,headerHeight:n,isActive:s,verticalSpace:a,stretched:l,transitionType:r,screenTransitionType:d,isSmallSize:u,builderTheme:c,isResizing:p,width:h}=e,{side:g,size:m}=o.panel||{},y=t.css`
    color: ${c.ref.palette.neutral[1200]};
    background-color: ${c.ref.palette.neutral[500]};
    border-color: ${c.ref.palette.neutral[600]};
    &:hover {
      color: ${c.ref.palette.black};
      background-color: ${c.ref.palette.neutral[600]};
    }
  `;return u?t.css`
      ${yr({props:o,viewHeight:i,headerHeight:n,isActive:s,verticalSpace:a,stretched:l,transitionType:r,screenTransitionType:d,isSmallSize:u})};

      .panel-content {
        transform: none !important;

        &:not(.visible) {
          pointer-events: none;
          > .layout-wrapper > .layout,
          > .layout-wrapper > .placeholder-btn {
            pointer-events: none;
          }
        }
      }

      &.minimized .exb-drop-area, &.minimized .toggle-visible-btn {
        pointer-events: none !important;
      }

      .resize-handle {
        display: none;
      }

      .layout-wrapper {
        transform-origin: right bottom;
      }

      .toggle-visible-btn {
        display: flex;
        justify-content: flex-end;
        pointer-events: auto;

        > button {
          ${y};
        }
      }
      body:not(.design-mode) & .toggle-visible-btn {
        display: none !important;
      }
    `:t.css`
    ${yr({props:o,viewHeight:i,headerHeight:n,isActive:s,verticalSpace:a,stretched:l,transitionType:r,screenTransitionType:d,isSmallSize:u})};

    .panel-content {
      position: relative;
      touch-action: none;
      width: ${p?`${h}px`:m};

      &:not(.visible) {
        pointer-events: none;
        > .layout-wrapper > .layout,
        > .layout-wrapper > .placeholder-btn {
          pointer-events: none;
        }
      }

      &.simple-mode {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100% !important;
      }

      .layout-wrapper {
        position: relative;
        transform-origin: right bottom;
      }
    }

    .toggle-visible-btn {
      display: flex;
      justify-content: flex-end;
      pointer-events: auto;
      > button {
        ${y};
        svg {
          margin-right: 0;
          margin-left: 0;
        }
      }
    }

    &.minimized .exb-drop-area, &.minimized .toggle-visible-btn {
        pointer-events: none !important;
      }

    .panel-content:hover {
      .resize-handle {
        display: block;
      }
    }
    body:not(.design-mode) & .resize-handle,
    body:not(.design-mode) & .toggle-visible-btn,
    body.lock-layout & .resize-handle {
      display: none !important;
    }
    .resize-handle {
      position: absolute;
      cursor: ew-resize;
      top: 0;
      bottom: 0;
      display: ${p?"block":"none"};
      touch-action: none;
      outline: 1px solid var(--ref-palette-neutral-500);
      width: 5px;
      pointer-events: auto;
      &:after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 50%;
        border-left: 1px dotted var(--ref-palette-neutral-500);
        transform: translate(-50%);
      }

      &.left {
        left: -5px;
        display: ${"left"!==g?"none":"none !important"};
      }
      &.right {
        right: -5px;
        display: ${"right"!==g?"none":"none !important"};
      }
    }
  `}function Er(i){const{index:n,screenId:a,onInteractionChange:l,onHeightChange:r,builderTheme:d,viewHeight:u,headerHeight:c,layoutEntry:p,isActive:h,isSmallSize:g,isDesignMode:m,transitionType:y,screenTransitionType:f,triggerType:v,stretched:I,viewOnly:x,verticalSpace:b="0",useAnimation:w=!0,formatMessage:S}=i,C=t.ReactRedux.useSelector((t=>t.appConfig.screens[a])),R=t.ReactRedux.useSelector((t=>{var e,o,i;return null===(i=null===(o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.screenPanelStates)||void 0===o?void 0:o[a])||void 0===i||i})),{panel:T}=C,M=t.React.useRef(),A=t.React.useRef(),L=t.React.useRef(),[P,j]=t.React.useState(!1),[z,N]=t.React.useState(0),k=t.React.useRef(R),$=t.React.useRef(m),E=t.React.useRef(),O=t.React.useMemo((()=>{if(T&&T.overlay&&Math.abs(parseFloat(T.offset))>0){const e=(0,t.getAppStore)().getState().appContext.isRTL?"left"===T.side?-1:1:"right"===T.side?-1:1;return parseFloat(T.offset)*e}return 0}),[T]),[B,D]=t.spring.useSpring((()=>({opacity:1,size:1,x:0,y:0}))),F=t.React.useCallback(((t,e)=>{E.current=e,j(!0),N(0)}),[]),H=t.React.useCallback(((t,e,o,i,n)=>{N(i)}),[]),V=t.React.useCallback(((t,o,i,n,l)=>{!function(t,o){var i;const n=(0,e.getAppConfigAction)(),a=n.appConfig.screens[t];let l;l=s.utils.isPercentage(null===(i=a.panel)||void 0===i?void 0:i.size)?s.utils.toRatio(o,document.body.clientWidth):`${Math.round(o)}px`,n.editScreenProperty(t,"panel.size",l).exec()}(a,E.current+n),j(!1)}),[a]);t.React.useEffect((()=>{$.current!==m&&($.current=m,m?k.current?D.start({opacity:1,x:0,y:0,immediate:!0,onRest:null}):D.start({opacity:0,immediate:!0,onRest:null}):D.start({opacity:1,x:0,y:0,immediate:!0,onRest:null}))}),[m,D]),t.React.useEffect((()=>{if(!L.current&&A.current)return L.current=(0,Wt.interact)(A.current),_t(L.current,{layoutItemId:a,onResizeStart:F,onResizing:H,onResizeEnd:V}),()=>{L.current&&(L.current.unset(),L.current=null)}}),[a,F,H,V]);const W=t.React.useCallback((t=>{l(n,t)}),[n,l]),G=t.React.useCallback((({width:t,height:e})=>{r(n,e)}),[n,r]),U=t.React.useCallback((e=>{const o=e.target.getBoundingClientRect(),i=M.current.getBoundingClientRect(),n=(0,t.getAppStore)().getState().appContext.isRTL;M.current.classList.add("minimized"),D.start({opacity:0,size:0,x:n?i.left-o.left:i.right-o.right,y:i.bottom-o.bottom,immediate:!w,onRest:()=>{k.current=!1,(0,t.getAppStore)().dispatch(t.appActions.screenPanelVisibleChanged(a,!1))}})}),[D,a,w]),_=t.React.useCallback((()=>{M.current.classList.remove("minimized"),D.start({opacity:1,size:1,x:0,y:0,immediate:!w,onRest:null})}),[D,w]);t.React.useEffect((()=>{k.current!==R&&R&&(_(),k.current=R)}),[R,_]),hr(M.current,i.refElement,g?t.ScreenTriggerType.Lower:null!=v?v:t.ScreenTriggerType.Bottom,W);const Y={opacity:B.opacity,translateX:O,x:B.x,y:B.y},X=t.React.useCallback((()=>!x&&h&&(null==T?void 0:T.overlay)),[T,h,x]);return(0,t.jsx)("div",{className:(0,t.classNames)("screen-side-panel",{"top-spacing":0===n&&((null==T?void 0:T.overlay)||g)}),"data-screenid":a,"data-index":n,ref:M,css:$r({props:C,viewHeight:u,headerHeight:c,isActive:h,verticalSpace:b,stretched:I||null==T,transitionType:y,screenTransitionType:f,isSmallSize:g,panelVisible:R,builderTheme:d,isResizing:P,width:E.current+z})},T&&(0,t.jsx)(kr.div,{className:(0,t.classNames)("panel-content",{visible:R}),ref:A,style:Y},(0,t.jsx)("div",{className:"layout-wrapper"},(0,t.jsx)(p,{layouts:T.layout}),!x&&(0,t.jsx)(Lr,{layouts:T.layout,builderTheme:d}),(0,t.jsx)("span",{className:"resize-handle left rnd-resize-left"}),(0,t.jsx)("span",{className:"resize-handle right rnd-resize-right"})),X()&&(0,t.jsx)("div",{className:"toggle-visible-btn",onClick:U,"data-testid":`toggleBtn-${R}`},(0,t.jsx)(qe,{placement:"auto",title:S("hideInDesignView")},(0,t.jsx)(o.Button,{type:"default",size:"sm",className:"rounded-1"},(0,t.jsx)(Nr,{size:"m"})))),(0,t.jsx)("div",{className:(0,t.classNames)("panel-spacing",{"last-item":i.isLast})})),!T&&R&&(0,t.jsx)("div",{className:"panel-content-placeholder"}),(0,t.jsx)(t.ReactResizeDetector,{targetRef:M,handleHeight:!0,onResize:G}))}function Or(o){const{layoutId:i,layoutItemId:n,builderTheme:a,layoutItem:l,formatMessage:r,isFirst:d,isLast:u}=o,[c,p]=t.React.useState(!1),[h,g]=t.React.useState(!1),m=t.React.useRef(),y=t.React.useCallback((t=>{Jl(i,n,t),p(!1)}),[i,n]),f=t.React.useCallback((()=>{(0,t.getAppStore)().getState().browserSizeMode!==t.BrowserSizeMode.Small?p(!c):e.appBuilderSync.publishSidePanelToApp({type:"templateBlock",templateMethod:"getBlockTemplates",onSelect:y})}),[c,y]),v=t.React.useCallback((()=>{g(!h)}),[h]),I=t.React.useCallback((t=>{Ql(i,n,t),g(!1)}),[i,n]),x=t.React.useCallback((()=>{const t=er((0,e.getAppConfigAction)().appConfig,{layoutId:i,layoutItemId:n});(0,e.getAppConfigAction)(t).exec()}),[i,n]),b=t.React.useCallback((()=>{const t=tr((0,e.getAppConfigAction)().appConfig,{layoutId:i,layoutItemId:n});(0,e.getAppConfigAction)(t).exec()}),[i,n]),w=t.React.useCallback((()=>{e.appBuilderSync.publishConfirmDeleteToApp({layoutId:i,layoutItemId:n})}),[i,n]),S=t.React.useCallback((()=>(0,t.getAppStore)().getState().browserSizeMode===t.BrowserSizeMode.Large),[]),C=[{icon:ir(),title:r("insertABlock"),onClick:f,visible:()=>!lt()},{icon:sr(),title:r("insertAScreenGroup"),onClick:v,visible:()=>S()&&!lt()},ht,Object.assign(Object.assign({},yt),{visible:()=>S()&&!lt()}),{icon:st(),title:r("setting"),onClick:()=>{(0,t.getAppStore)().dispatch(t.appActions.selectionChanged({layoutId:i,layoutItemId:n}))}},{icon:K(),title:r("dragToMove",{label:rt(l)}),className:"tool-drag-handler",onClick:()=>null,visible:()=>!lt()},{icon:qs(),onClick:x,title:r("moveup"),visible:()=>!d&&!lt()},{icon:qs(),rotate:180,onClick:b,title:r("movedown"),visible:()=>!u&&!lt()},{icon:Y(),title:r("delete"),onClick:w,visible:()=>!lt()}];return(0,t.jsx)(ql,{layoutId:i,layoutItem:l,builderTheme:a,positionType:"center",size:s.CONTEXT_MENU_ITEM_SIZE,iconSize:s.CONTEXT_MENU_ICON_SIZE,className:"widget-context-menu",menuItems:C,isFirst:d,isLast:u},(0,t.jsx)("div",{ref:m,css:t.css`position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;`}),c&&(0,t.jsx)(He.TemplateSelector,{templates:(0,Gi.getBlockTemplates)(),referenceElement:m.current,onItemSelect:y,onClose:f}),h&&(0,t.jsx)(He.TemplateSelector,{templates:(0,Gi.getScreenGroupTemplates)(),referenceElement:m.current,onItemSelect:I,onClose:v}))}function Br(e,o,i,n,s,a){return t.css`
    position: relative;
    width: 100%;

    & > div.widget-context-menu {
      display: none;
    }

    &:hover > div.widget-context-menu {
      display: flex;
    }

    body.lock-layout & {
      .screen-menu {
        bottom: ${i?n?"-10px":"-32px":"auto"};
        z-index: ${i&&n?10:null};
      }
    }

    .screen-menu {
      display: ${s?"block":"none"};
      position: absolute;
      opacity: ${s?.8:.5};
      left: 0;
      top: ${i?"auto":"-32px"};
      bottom: ${i?"-32px":"auto"};
      height: 32px;
      width: 100%;
      background-color: ${o.ref.palette.neutral[300]};
      overflow: visible;

      .info {
        color: ${o.ref.palette.black};
      }

      .jimu-btn svg {
        color: ${o.ref.palette.neutral[1e3]};
      }
    }

    .screen-group {
      position: relative;
      height: ${e}px;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .main-panels {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      pointer-events: none;
      z-index: 0;
    }

    &.small-size .main-panels {
      z-index: ${a?0:1};
    }

    &.small-size .side-panels {
      z-index: ${a?1:0};
    }

    .side-panels {
      position: relative;
      z-index: 1;
      pointer-events: none;

      > div:first-of-type > div.panel-content {
        padding-top: ${Math.round(e*gr)}px;
      }

      /* > div:nth-last-of-type(2) {
        min-height: ${e}px;
      } */
    }

    body:not(.design-mode) & {
      .screen-group {
        position: static;
        height: auto;
        overflow-y: unset;
        overflow-x: unset;
      }
      .side-panels {
        > div:first-of-type > div.panel-content {
          padding-top: ${33}vh;
          padding-top: calc(var(--vh) * ${33});
        }
        /* > div:nth-last-of-type(2) {
          min-height: 100vh;
        } */
      }
      .screen-menu {
        display: none !important;
      }
    }

    .group-tip {
      display: none;
      padding: inherit;
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      right: 0;
      pointer-events: none;
      .tip-content {
        height: 100%;
        padding: 2px;
        &:after {
          content: '';
          width: 100%;
          height: 100%;
          outline: 2px solid ${o.sys.color.primary.dark};
          display: block;
        }
      }
    }

    &:hover .group-tip {
      display: block;
    }
  `}function Dr(o){var i;const{layoutId:n,layoutItemId:a,layoutItem:l,formatMessage:r,itemIndex:d,isFirst:u,isLast:c}=o,{screenGroupId:p}=l,h=t.ReactRedux.useSelector((t=>{var e;const o=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.selection;return!!o&&(o.layoutId===n&&o.layoutItemId===a)})),g=t.ReactRedux.useSelector((t=>t.appConfig.screenGroups[l.screenGroupId])),m=t.ReactRedux.useSelector((t=>t.appConfig.screenGroups[l.screenGroupId].screens.some((e=>null!=t.appConfig.screens[e].panel)))),y=t.ReactRedux.useSelector((t=>t.browserSizeMode)),{screens:f,stretchPanel:v=!0,triggerType:I=t.ScreenTriggerType.Bottom,verticalSpace:x="0",panelTransitionType:b=t.ScreenTransitionType.Push}=g;let w=null!==(i=g.transitionType)&&void 0!==i?i:t.ScreenTransitionType.Fade;y!==t.BrowserSizeMode.Small||m||(w=t.ScreenTransitionType.Cover);const S=t.ReactRedux.useSelector((t=>{var e;return null===(e=t.appRuntimeInfo.screenGroupNavInfos)||void 0===e?void 0:e[p]})),C=t.ReactRedux.useSelector((e=>t.utils.findViewportSize(e.appConfig,e.browserSizeMode||t.BrowserSizeMode.Large))),R=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),{viewOnly:T,builderTheme:M,pageId:A}=t.React.useContext(s.PageContext),L=t.ReactRedux.useSelector((t=>{const e=t.appConfig.pages[A];if(null==e?void 0:e.header){const e=t.appConfig.header;if(null==e?void 0:e.sticky){const o=t.browserSizeMode,i=t.appConfig.mainSizeMode,n=e.height[o]||e.height[i]||75;return parseInt(n,10)}}return 0})),P=t.React.useRef(),j=t.React.useRef(),z=t.React.useRef(),N=t.React.useRef(),k=t.React.useRef(!0),$=t.React.useRef(),E=t.React.useRef(),[O,B]=t.React.useState(0);t.React.useEffect((()=>{if(h){const t=document.querySelector(`div.exb-rnd[data-layoutid="${n}"][data-layoutitemid="${a}"]`);null!=t&&t.scrollIntoView({behavior:"auto",block:"center"})}}),[h,n,a]);const D=t.React.useMemo((()=>{var e,o,i;if(y!==t.BrowserSizeMode.Small)return!1;const n=(0,t.getAppStore)().getState().appConfig,s=null===(o=null===(e=n.screenGroups)||void 0===e?void 0:e[p])||void 0===o?void 0:o.screens;if(null==s?void 0:s[O]){return null===(i=n.screens[s[O]].panel)||void 0===i?void 0:i.overlay}return!1}),[p,O,y]),F=t.React.useCallback((e=>{var o;const i=j.current.querySelectorAll("div.screen-side-panel");let n=0;if(i.forEach((t=>{+t.getAttribute("data-index")<e&&(n+=t.clientHeight)})),j.current.scrollTop=n,w!==t.ScreenTransitionType.Fade){const t=null===(o=z.current)||void 0===o?void 0:o.children[0];t&&(t.scrollTop=j.current.scrollTop)}}),[w]),H=t.React.useCallback((()=>{Ht(!0)}),[]),V=t.React.useCallback((()=>{Ht(!1)}),[]);t.React.useEffect((()=>{if(P.current&&!E.current){const{layoutId:t,layoutItemId:e,layoutItem:i}=o;E.current=(0,Wt.interact)(P.current).origin("parent"),E.current=Ft(E.current,{layoutId:t,layoutItemId:e,onDragStart:H,onDragEnd:V,useDragHandler:!0,itemType:i.type,rootLayoutId:()=>t,restrict:()=>!0}),E.current.draggable({modifiers:[Wt.interact.modifiers.restrictRect({restriction:"parent"})]})}return()=>{E.current&&(E.current.unset(),E.current=null)}}),[]),t.React.useEffect((()=>{null!=(null==S?void 0:S.activeIndex)&&S.activeIndex!==O&&(!function(e,o){var i;const n=(0,t.getAppStore)().getState().appConfig,s=(0,t.getAppStore)().getState().browserSizeMode,a=null===(i=(0,t.getAppStore)().getState().appRuntimeInfo)||void 0===i?void 0:i.selection;if(null!=a){const i=n.screenGroups[e].screens[o],l=n.screens[i];if(l){const e=l.main.layout[s];a.layoutId===e&&(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(null)),null!=document.querySelector(`div[data-layoutid="${e}"] div[data-layoutid="${a.layoutId}"][data-layoutitemid="${a.layoutItemId}"]`)&&(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(null))}}}(p,O),B(S.activeIndex),S.scrollIntoView&&(k.current=!1,F(S.activeIndex),setTimeout((()=>{k.current=!0}),200)))}),[S,O,F,p]),t.React.useEffect((()=>{$.current&&(j.current.removeEventListener("scroll",$.current),$.current=null),$.current=()=>{var e;const o=null===(e=z.current)||void 0===e?void 0:e.children[0];o&&w!==t.ScreenTransitionType.Fade&&(o.scrollTop=j.current.scrollTop)},j.current.addEventListener("scroll",$.current)}),[w]),t.React.useEffect((()=>{(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(p,0))}),[R,p]);const W=t.React.useCallback(((e,o)=>{k.current&&(o&&e!==O?(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(p,e,!1)):!o&&e>0&&(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(p,e-1,!1)))}),[O,p]),G=t.React.useCallback((e=>{e.stopPropagation(),lt()||T||y===t.BrowserSizeMode.Small||(0,t.getAppStore)().dispatch(t.appActions.selectionChanged({layoutId:n,layoutItemId:a}))}),[T,y,n,a]),U=t.React.useCallback((()=>{if(!j.current)return;const t=j.current.children[0],e=j.current.children[1];t.style.height=`${e.clientHeight}px`}),[]),_=t.React.useMemo((()=>t.lodash.debounce(U,200)),[U]),Y=t.React.useCallback(((e,o)=>{if(!j.current)return;const i=j.current.children[0],n=j.current.children[1];if(w!==t.ScreenTransitionType.Fade)if(w!==t.ScreenTransitionType.Cover){if(w===t.ScreenTransitionType.Push){const t=i.querySelector(`div.screen-main-panel[data-index="${e}"]`),o=n.querySelector(`div.screen-side-panel[data-index="${e}"]`);t.style.height=`${o.clientHeight}px`,i.style.height=`${n.clientHeight}px`}}else!function(e,o,i){const n=e.querySelectorAll("div.screen-main-panel"),s=o.querySelectorAll("div.screen-side-panel"),a=n.length;for(let t=1;t<a;t++){const e=n.item(t),o=n.item(t-1),i=s.item(t-1);e.style.marginTop=i.clientHeight-o.clientHeight+"px"}i!==t.BrowserSizeMode.Small&&(e.style.height=`${o.clientHeight}px`)}(i,n,y);else i.style.height=`${n.clientHeight}px`}),[y,w]),X=t.React.useCallback((()=>{(0,t.getAppStore)().dispatch(e.builderActions.confirmDeleteContentChanged({layoutId:n,layoutItemId:a}))}),[n,a]),Z=t.React.useMemo((()=>({delete:X,backspace:X})),[X]);return f.length>0?(0,t.jsx)(oe.Provider,{value:`${n}:${a}`},(0,t.jsx)("div",{className:(0,t.classNames)("builder-layout-item exb-rnd",{selected:h,"small-size":y===t.BrowserSizeMode.Small}),css:Br(C.height,M,u,c,h,D),"data-layoutitemid":a,"data-layoutid":n,onClick:G,ref:P},(0,t.jsx)("div",{className:"screen-menu"},(0,t.jsx)(ur,{activeScreenIndex:O,itemIndex:d,total:f.length,screenGroupId:p,layoutId:n,layoutItemId:a,browserSizeMode:y,hasPanel:m,formatMessage:r})),(0,t.jsx)("div",{className:"screen-group",ref:j},(0,t.jsx)("div",{className:"main-panels",ref:z},(0,t.jsx)(Cr,{rootLayoutId:n,activeIndex:O,viewHeight:C.height,headerHeight:L,screens:f,transitionType:w,layoutEntry:lo,isSmallSize:y===t.BrowserSizeMode.Small,isDesignMode:R,builderTheme:M,formatMessage:r})),(0,t.jsx)("div",{className:"side-panels",ref:N},f.map(((e,o)=>(0,t.jsx)(Er,{key:e,index:o,isLast:o===f.length-1,screenId:e,viewHeight:C.height,headerHeight:L,refElement:R?P.current:null,layoutEntry:lo,viewOnly:T,builderTheme:M,isActive:o===O,isSmallSize:y===t.BrowserSizeMode.Small,isDesignMode:R,stretched:v,triggerType:I,verticalSpace:x,transitionType:b,screenTransitionType:w,onHeightChange:Y,onInteractionChange:W,formatMessage:r}))),(0,t.jsx)(t.ReactResizeDetector,{targetRef:N,handleHeight:!0,onResize:_}))),!T&&(0,t.jsx)(Or,{layoutId:n,layoutItemId:a,layoutItem:l,isFirst:u,isLast:c,builderTheme:M,formatMessage:r}),R&&(0,t.jsx)("div",{className:"group-tip"},(0,t.jsx)("div",{className:"tip-content"})),R&&h&&(0,t.jsx)(t.Keyboard,{bindings:Z}))):null}var Fr=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Hr=e=>{const o=window.SVG,{className:i}=e,n=Fr(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:ir()},n)):t.React.createElement("svg",Object.assign({className:s},n))};var Vr=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const Wr=e=>{const o=window.SVG,{className:i}=e,n=Vr(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:sr()},n)):t.React.createElement("svg",Object.assign({className:s},n))},Gr=t.css`
  pointer-events: auto;
`;function Ur(e){return t.css`
    body.lock-layout &,
    body:not(.design-mode) & {
      display: none !important;
    }

    display: flex;
    height: 200px;
    padding: 1rem;
    pointer-events: none;
    position: relative;
    z-index: 1;
    .btn-text {
      line-height: 32px;
    }
    .btn {
      margin-right: 2rem;
      background: ${e.ref.palette.neutral[600]};
      &:hover {
        background: ${e.ref.palette.neutral[700]};
      }
    }
    .action-item {
      width: 32px;
    }

    .action-separator {
      width: 300px;
      height: 1px;
      background-color: ${e.ref.palette.neutral[1100]};
    }
  `}function _r(e){return e===t.BrowserSizeMode.Large}function Yr(i){const{pageContext:n,browserSizeMode:s,onPageTemplateSelected:a,onBlockTemplateSelected:l,onScreenTemplateSelected:r,blockOnly:d}=i,{builderTheme:u,formatMessage:c,isHeader:p,isFooter:h}=n,[g,m]=t.React.useState(!1),[y,f]=t.React.useState(!1),[v,I]=t.React.useState(!1),x=t.React.useRef(null),b=t.React.useRef(null),w=t.React.useRef(null),S=t.ReactRedux.useSelector((e=>{var o,i,n;const s=null!==(n=null===(i=null===(o=e.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===i?void 0:i.lockLayout)&&void 0!==n&&n;return e.appRuntimeInfo.appMode===t.AppMode.Design&&!s})),C=!p&&!h;let R;R=p?c("chooseHeaderTemplate"):h?c("chooseFooterTemplate"):c("chooseTemplate",{type:n.isDialog?c("dialog").toLocaleLowerCase():c("page").toLocaleLowerCase()});return S?(0,t.jsx)("div",{className:"w-100 flex-column justify-content-center align-items-center",css:Ur(u)},(0,t.jsx)("div",{className:"d-flex"},C&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(qe,{placement:"bottom",title:c("insertABlock")},(0,t.jsx)("div",{className:"action-item"},(0,t.jsx)(o.Button,{ref:x,icon:!0,onClick:o=>{o.stopPropagation(),s!==t.BrowserSizeMode.Small?f(!y):e.appBuilderSync.publishSidePanelToApp({type:"templateBlock",templateMethod:"getBlockTemplates",onSelect:l})},css:Gr,className:"rounded-circle"},(0,t.jsx)(Hr,{size:"m",color:u.ref.palette.neutral[1100]})))),_r(s)&&(0,t.jsx)(qe,{placement:"bottom",title:c("insertAScreenGroup")},(0,t.jsx)("div",{className:"action-item ml-5"},(0,t.jsx)(o.Button,{ref:b,icon:!0,onClick:t=>{t.stopPropagation(),I(!v)},css:Gr,className:"rounded-circle"},(0,t.jsx)(Wr,{size:16,color:u.ref.palette.neutral[1100]}))))),!d&&(0,t.jsx)(qe,{placement:"bottom",title:R},(0,t.jsx)("div",{className:(0,t.classNames)("action-item",{"ml-5":C})},(0,t.jsx)(o.Button,{ref:w,icon:!0,onClick:o=>{o.stopPropagation(),s!==t.BrowserSizeMode.Small?m(!g):e.appBuilderSync.publishSidePanelToApp({type:"template",templateMethod:"getScrollingPageTemplates",onSelect:a})},css:Gr,className:"rounded-circle"},(0,t.jsx)(Xi,{autoFlip:!0,size:16,color:u.ref.palette.neutral[1100]}))))),(0,t.jsx)("div",{className:"action-separator mt-4"}),(0,t.jsx)("div",null,(0,t.jsx)("h5",{className:"btn-text mt-2"},c("dropWidgetToAdd"))),C&&y&&(0,t.jsx)(He.TemplateSelector,{templates:(0,Gi.getBlockTemplates)(),referenceElement:x.current,onItemSelect:t=>{f(!1),l(t)},onClose:()=>{f(!1)}}),C&&v&&_r(s)&&(0,t.jsx)(He.TemplateSelector,{templates:(0,Gi.getScreenGroupTemplates)(),referenceElement:b.current,onItemSelect:t=>{I(!1),r(t)},onClose:()=>{I(!1)}}),!d&&g&&(0,t.jsx)(He.TemplateSelector,{templates:(0,Gi.getScrollingPageTemplates)(!1),referenceElement:w.current,onItemSelect:t=>{m(!1),a(t)},onClose:()=>{m(!1)}})):null}const Xr=t.css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: transparent;
`,Zr=t.css`
  ${Xr};
  z-index: ${s.LayoutZIndex.DragMoveTip};
  pointer-events: none;
`;class qr extends t.React.PureComponent{constructor(o){super(o),this.state={isDragover:!1,isLoadingTemplate:!1},this.handleActivate=e=>{if(!dt()&&!ut())return;if(Math.abs(e.screenX-this.mousedownX)>s.CLICK_TOLERANCE||Math.abs(e.screenY-this.mousedownY)>s.CLICK_TOLERANCE)return void e.stopPropagation();const{isInSection:o,isInWidget:i}=this.props;this.pageContext.viewOnly||o||i||Xt()||Vt()||(e.stopPropagation(),(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(null)))},this.handleMouseDown=t=>{this.mousedownX=t.screenX,this.mousedownY=t.screenY},this.handleDragOver=(e,o,i,n,s,a)=>{var l,r,d;const{layout:u}=this.props,c=null!==(l=e.layoutInfo)&&void 0!==l?l:{layoutId:null};let p=n;if(this.canvasPane.clear(),(null===(r=this.childRects)||void 0===r?void 0:r.length)>0){const{insertY:t,refId:e}=function(t,e,o){let i,n,s=!1;if(o.some(((t,a)=>{if(t.top+t.height/2>e){if(0===a)i=Math.max(t.top/2,t.top-5);else{const e=o[a-1];i=(t.top+e.top+e.height)/2}s=!0,n=t.id}return s})),!s){const e=o[o.length-1];i=Math.min(e.top+e.height+5,(e.top+e.height+t.height)/2)}return{refId:n,insertY:i}}(i,a,this.childRects);if(this.referenceId=e,c.layoutId===this.props.layout.id){const t=u.order,o=t.indexOf(c.layoutItemId),i=t.indexOf(e);if((null===(d=u.content[c.layoutItemId].setting)||void 0===d?void 0:d.isFloating)||o===i-1||null==e&&o===t.length-1)return}p={top:t-5+this.ref.scrollTop,width:i.width-Xl,left:5,height:Xl}}else this.referenceId=null,p={top:i.height/2-5,width:i.width-Xl,left:5,height:Xl};this.canvasPane.setColor(t.polished.rgba(this.builderTheme.sys.color.primary.light,.5)),this.canvasPane.drawRect(p)},this.handleToggleDragoverEffect=(t,e)=>{var o;t&&(this.referenceId=null,this.collectBounds(null!==(o=e.layoutInfo)&&void 0!==o?o:{layoutId:null})),this.canvasPane.clear(),this.setState({isDragover:t})},this.handleDrop=(o,i,n)=>{var a,l;this.canvasPane.clear();const{layout:r}=this.props,d=null!==(a=o.layoutInfo)&&void 0!==a?a:{layoutId:null},u=(0,e.getAppConfigAction)();let c=0;if(null!=this.referenceId?c=r.order.indexOf(this.referenceId):null!=r.order&&(c=r.order.length),this.referenceId=null,this.childRects=[],d.layoutId===r.id){if(null===(l=r.content[d.layoutItemId].setting)||void 0===l?void 0:l.isFloating){const t=(0,e.getAppConfigAction)();return t.setLayoutItemToPending(d,!1),void s.utils.changeLayout(t.appConfig,Object.assign(Object.assign({},d),{autoScroll:!1}))}return void V(u.appConfig,o,r.id).then((a=>{const{layoutInfo:l,updatedAppConfig:r}=a,d=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.FlowLayout).processAfterItemAdded(r,o,l,{currentSizeMode:null,containerRect:i,itemRect:n,insertIndex:c});s.utils.changeLayout(d,Object.assign(Object.assign({},l),{autoScroll:!0}))})).finally(null)}const p=(this.maxPageWidth>0?Math.min(this.maxPageWidth,i.width):i.width)/12,h=Math.min(Math.ceil(n.width/p),12);o.itemType===t.LayoutItemType.ScreenGroup?V(u.appConfig,o,r.id).then((a=>{const{layoutInfo:l,updatedAppConfig:r}=a,d=e.LayoutServiceProvider.getInstance().getServiceByType(t.LayoutType.FlowLayout).processAfterItemAdded(r,o,l,{currentSizeMode:null,containerRect:i,itemRect:n,insertIndex:c});s.utils.changeLayout(d,Object.assign(Object.assign({},l),{autoScroll:!0}))})).finally(null):this.addWidgetToLayout(o,i,n,h,c)},this.handleDropAtBoundary=(t,e,o)=>{o<this.props.layout.order.length?this.referenceId=this.props.layout.order[o]:this.referenceId=null,null==this.domRect&&(this.domRect=this.ref.getBoundingClientRect()),this.handleDrop(t,this.domRect,e)},this.onWidgetItemSelected=t=>{var e,o,i;const n=this.ref.getBoundingClientRect(),s={height:null!==(i=null===(o=null===(e=t.manifest)||void 0===e?void 0:e.defaultSize)||void 0===o?void 0:o.height)&&void 0!==i?i:300};this.addWidgetToLayout(t,n,s,4,0)},this.handleBlockTemplateSelected=t=>{this.setState({isLoadingTemplate:!0}),Jl(this.props.layout.id,"",t).finally((()=>{this.setState({isLoadingTemplate:!1})}))},this.handleScreenTemplateSelected=t=>{this.setState({isLoadingTemplate:!0}),Ql(this.props.layout.id,"",t).finally((()=>{this.setState({isLoadingTemplate:!1})}))},this.handlePageTemplateSelected=o=>{const i=(0,e.getAppConfigAction)();this.setState({isLoadingTemplate:!0}),this.pageContext.isHeader?i.applyHeaderTemplate(o).then((()=>{i.exec(),t.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null):this.pageContext.isFooter?i.applyFooterTemplate(o).then((()=>{i.exec(),t.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null):i.applyPageBodyTemplate(this.pageContext.pageId,o).then((()=>{i.exec(),t.lodash.defer((()=>{this.setState({isLoadingTemplate:!1})}))})).finally(null)};const i=t.ExtensionManager.getInstance().getExtensions(`${t.extensionSpec.ExtensionPoints.LayoutTransformer}`);if((null==i?void 0:i.length)>0){const t=i.find((t=>t.layoutType===this.props.layout.type));this.layoutTransform=null==t?void 0:t.transformLayout}}componentDidMount(){this.canvasPane=new Ji(this.canvasRef),this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}componentDidUpdate(){this.canvasPane.setSize(this.ref.clientWidth,this.ref.clientHeight)}addWidgetToLayout(t,e,o,i,n,s){G(t,{targetLayoutId:this.props.layout.id,containerRect:e,itemRect:o,width:i,insertIndex:n,appConfig:s}).finally(null)}collectBounds(t){const{layout:e}=this.props;this.childRects=[],this.domRect=this.ref.getBoundingClientRect();const o=this.ref.parentNode.querySelectorAll(`div[data-layoutid="${e.id}"] > div.exb-rnd`);return(null==o?void 0:o.length)>0&&o.forEach((o=>{var i,n;const a=o.getAttribute("data-layoutitemid");if((t.layoutId!==e.id||t.layoutItemId!==a)&&(null===(i=e.order)||void 0===i?void 0:i.includes(a))){if(!(null===(n=e.content[a].setting)||void 0===n?void 0:n.isFloating)){const t=s.utils.relativeClientRect(o.getBoundingClientRect(),this.domRect);t.id=a,this.childRects.push(t)}}})),this.childRects.sort(((t,e)=>t.top-e.top))}createItem(o,i,n,s){if(null==o?void 0:o.isPending)return null;const{layouts:a,layout:l,itemDraggable:r,itemSelectable:d}=this.props,u=function(t){const{layoutId:o,layoutItemId:i}=t,n=(0,e.getAppConfigAction)().appConfig.layouts[o];let s=!1;return n.order.some((t=>{var e;const o=n.content[t];return!(null===(e=o.setting)||void 0===e?void 0:e.isFloating)&&!o.isPending&&(s=t===i,!0)})),s}({layoutId:l.id,layoutItemId:o.id}),c=function(t){var o;const{layoutId:i,layoutItemId:n}=t,s=(0,e.getAppConfigAction)().appConfig.layouts[i];let a=!1;for(let t=s.order.length-1;t>=0;t--){const e=s.order[t],i=s.content[e];if(!(null===(o=i.setting)||void 0===o?void 0:o.isFloating)&&!i.isPending){a=e===n;break}}return a}({layoutId:l.id,layoutItemId:o.id}),p=o.setting;return o.type===t.LayoutItemType.ScreenGroup?(0,t.jsx)(Dr,{key:`${l.id}_${o.id}`,itemIndex:n,isFirst:u,isLast:c,layoutId:l.id,layoutItemId:o.id,layoutItem:o,theme:this.pageContext.builderTheme,formatMessage:this.pageContext.formatMessage}):(null==p?void 0:p.isFloating)?(0,t.jsx)(dr,{key:`${l.id}_${o.id}`,index:n,total:i,builderTheme:this.builderTheme,layouts:a,layoutId:l.id,layoutItemId:o.id,layoutItem:o,gutter:s.gutter,draggable:r,selectable:d,onDropAtBoundary:this.handleDropAtBoundary,formatMessage:this.pageContext.formatMessage}):(0,t.jsx)(lr,{key:`${l.id}_${o.id}`,index:n,isFirst:u,isLast:c,builderTheme:this.builderTheme,layouts:a,layoutId:l.id,layoutItemId:o.id,layoutItem:o,gutter:s.gutter,draggable:r,selectable:d,onDropAtBoundary:this.handleDropAtBoundary,formatMessage:this.pageContext.formatMessage})}getActionStyle(){return t.css`
      height: 200px;
      padding: 1rem;
      pointer-events: none;
      z-index: 1;
      .btn-text {
        line-height: 32px;
      }
      .btn {
        margin-right: 2rem;
        background: ${this.builderTheme.ref.palette.neutral[600]};
        &:hover {
          background: ${this.builderTheme.ref.palette.neutral[700]};
        }
      }
      .action-item {
        width: 32px;
      }

      .action-separator {
        .sep {
          width: 65px;
          height: 1px;
          background-color: ${this.builderTheme.ref.palette.neutral[1100]};
        }
        .btn-text {
          margin: 0 13px;
        }
      }
    `}getStyle(){const{builderTheme:e}=this.pageContext;return t.css`
      & > .trail-container > .builder-layout-item {
        margin-bottom: 10px;
        border-top: 1px dashed ${t.polished.rgba(e.ref.palette.neutral[1e3],.6)};
        border-bottom: 1px dashed ${t.polished.rgba(e.ref.palette.neutral[1e3],.6)};
        z-index: 0;

        .widget-context-menu {
          width: 100%;
          height: auto;
          top: 0;
        }

        &.selected, &.floating {
          z-index: 1;
        }
      }

      body:not(.design-mode) & {
        & > .trail-container > .builder-layout-item {
          margin-bottom: 0;
          border-top: none;
          border-bottom: none;
        }
      }
    `}createActions(e){const{viewOnly:o,rootLayoutId:i}=this.pageContext,{layout:n}=this.props,s=!this.pageContext.isHeader&&!this.pageContext.isFooter;return this.state.isLoadingTemplate||!s||o||n.id!==i?null:(0,t.jsx)(Yr,{pageContext:this.pageContext,browserSizeMode:this.props.browserSizeMode,blockOnly:e,onPageTemplateSelected:this.handlePageTemplateSelected,onBlockTemplateSelected:this.handleBlockTemplateSelected,onScreenTemplateSelected:this.handleScreenTemplateSelected})}render(){const{layout:e,className:i,isPageItem:n,layouts:a,mainSizeMode:l,browserSizeMode:r}=this.props;if(null==e)return null;const d=(0,t.classNames)("layout flow-layout w-100",i),u={display:this.state.isDragover?"block":"none"};return(0,t.jsx)(s.PageContext.Consumer,null,(i=>{var c;this.builderTheme=i.builderTheme,this.maxPageWidth=i.maxWidth,this.pageContext=i;let p=e;a[r]!==e.id&&null!=this.layoutTransform&&(p=this.layoutTransform(e,l,r));const h=null!==(c=p.order)&&void 0!==c?c:[],g=t.lodash.assign({},Wa,p.setting),m=Object.assign({position:"relative"},o.styleUtils.toCSSStyle(g.style));return(0,t.jsx)("div",{className:d,ref:t=>{this.ref=t},css:this.getStyle(),style:m,"data-layoutid":e.id,onClick:this.handleActivate,onMouseDown:this.handleMouseDown},(0,t.jsx)(t.IntersectionContext.Provider,{value:{monitor:!0}},(0,t.jsx)(t.OneByOneAnimation,{oid:p.id,"data-layoutid":p.id,className:"trail-container d-flex flex-column align-items-center",css:t.css`
                    width: 100%;
                  `},!i.viewOnly&&(0,t.jsx)(Ye,{css:Xr,layouts:this.props.layouts,isRepeat:this.props.isRepeat,highlightDragover:!n,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onToggleDragoverEffect:this.handleToggleDragoverEffect}),h.length>0&&h.map(((t,e)=>this.createItem(p.content[t],h.length,e,g))))),!this.state.isLoadingTemplate&&!i.viewOnly&&s.utils.isEmptyLayout(p)&&e.id===i.rootLayoutId&&this.createActions(!1),h.length>0&&this.createActions(!0),this.state.isLoadingTemplate&&(0,t.jsx)(o.Loading,{type:o.LoadingType.Primary}),(0,t.jsx)("canvas",{css:Zr,style:u,ref:t=>{this.canvasRef=t}}))}))}}const Kr=t.ReactRedux.connect(s.utils.mapStateToLayoutProps)(qr);var Jr=p(2046),Qr=p.n(Jr),td=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};const ed=e=>{const o=window.SVG,{className:i}=e,n=td(e,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?t.React.createElement(o,Object.assign({className:s,src:Qr()},n)):t.React.createElement("svg",Object.assign({className:s},n))},od=t.css`
  .resize-handler {
    height: ${16}px;
    width: 100%;
    cursor: ns-resize;
    position: absolute;
  }
`,id=t.css`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
`;function nd(e){return t.css`
    .edit-btn {
      background: ${e.sys.color.primary.main};
      color: ${e.ref.palette.neutral[1100]};
      border-radius: 2px;
      &:hover {
        background: ${e.sys.color.primary.main};
        color: ${e.ref.palette.black};
      }
    }
  `}function sd(){(0,t.getAppStore)().dispatch(t.appActions.activePagePartChanged(t.PagePart.Header))}function ad(){(0,t.getAppStore)().dispatch(t.appActions.activePagePartChanged(t.PagePart.Footer))}function ld(){(0,t.getAppStore)().dispatch(t.appActions.activePagePartChanged(t.PagePart.Body))}function rd(){const e=(0,t.getAppStore)().getState(),o=e.appConfig.header.layout;return s.searchUtils.findLayoutId(o,e.browserSizeMode,e.appConfig.mainSizeMode)}function dd(){const e=(0,t.getAppStore)().getState(),o=e.appConfig.footer.layout;return s.searchUtils.findLayoutId(o,e.browserSizeMode,e.appConfig.mainSizeMode)}function ud(e){var o;const i=(0,t.getAppStore)().getState(),n=null===(o=i.appConfig.dialogs[e])||void 0===o?void 0:o.layout;return s.searchUtils.findLayoutId(n,i.browserSizeMode,i.appConfig.mainSizeMode)}function cd(t){return Object.keys(t).find((e=>t[e]))}function pd(e,o,i,n){var s,a;return t.css`
    ${od};
    ${nd(i)};
    position: relative;
    z-index: 0;
    top: 0;
    display: flex;
    width: 100%;
    height: auto;
    min-height: ${parseFloat(o)}px;
    overflow: hidden;
    background-color: ${e.backgroundColor||(null===(s=n.comp)||void 0===s?void 0:s.Header.root.vars.bg)||"transparent"};
    background-image: ${e.backgroundIMage};
    background-position: ${e.backgroundPosition};
    color: ${null===(a=n.comp)||void 0===a?void 0:a.Header.root.vars.color};
    border-bottom: 1px dashed ${t.polished.rgba(i.ref.palette.white,.12)};
    flex: 0 0 auto;

    &:hover {
      .edit-mask {
        display: flex;
      }
    }

    .resize-handler {
      bottom: ${-8}px;
      z-index: 1;
      .handler {
        width: 36px;
        height: 4px;
        background: var(--ref-palette-black);
        border: 1px solid var(--ref-palette-white);
        position: absolute;
        left: 50%;
        bottom: 9px;
        transform: translateX(-50%);
      }
    }

    body.lock-layout &,
    body:not(.design-mode) & {
      border-bottom: none;
      > .resize-handler {
        display: none !important;
      }
    }
    body:not(.design-mode) & {
      position: ${e.sticky?"sticky":"relative"};
      z-index: ${e.sticky?2:"0"};

      .edit-mask, .edit-mask-all {
        display: none !important;
      }
    }
  `}function hd(i){const{header:n,browserSizeMode:a,mainSizeMode:l,activePagePart:r,pageContext:d,onHeightChange:u}=i,c=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),p=t.React.useRef(null),h=n.height[a]||n.height[l]||75,g=n.layout,m=!g[a],y=d.builderTheme;t.React.useEffect((()=>{let t;return p.current&&(t=function(t){let o,i;return(0,Wt.interact)(t).origin("parent").resizable({inertia:!1,edges:{bottom:".resize-handler"},onstart:e=>{e.stopPropagation(),o=0,i=t.getBoundingClientRect().height,t.style.minHeight="0px"},onmove:e=>{e.stopPropagation();const n=e.deltaRect;o+=n.height,t.style.height=`${i+o}px`},onend:n=>{n.stopPropagation(),t.style.height=null,t.style.minHeight=null,(0,e.getAppConfigAction)().editHeaderProperty(`height.${s.utils.getCurrentSizeMode()}`,Math.round(i+o)).exec()}})}(p.current)),()=>{t&&t.unset()}}),[]);const f=rd(),v=t.React.useMemo((()=>Object.assign(Object.assign({},d),{isHeader:!0,rootLayoutId:f,viewOnly:m||c&&r!==t.PagePart.Header})),[d,f,m,r,c]),I=t.React.useCallback((({width:t,height:e})=>{u(Math.round(e))}),[u]);return(0,t.jsx)(s.PageContext.Provider,{value:v},(0,t.jsx)("div",{className:"header",css:pd(n,h,d.builderTheme,d.theme),ref:t=>{p.current=t}},(0,t.jsx)("div",{className:"w-100 h-100",css:t.css`
            overflow: auto;
            display: flex;
            position: relative;
            z-index: 0;
            min-height: ${parseFloat(h)}px;
          `},(0,t.jsx)(lo,{layouts:g,isPageItem:!0,visible:!0})),!m&&(0,t.jsx)("span",{className:"resize-handler"},(0,t.jsx)("div",{className:(0,t.classNames)("handler",{"d-none":r!==t.PagePart.Header})})),r!==t.PagePart.Header&&!m&&(0,t.jsx)("div",{className:"edit-mask-all",css:t.css`
              ${id};
              background: ${r===t.PagePart.Body?"transparent":t.polished.rgba(y.ref.palette.neutral[500],.6)};
              z-index: 1;
            `,onClick:ld}),r===t.PagePart.Body&&(!m||a===l)&&(0,t.jsx)("div",{className:"edit-mask justify-content-center align-items-center",css:t.css`
              ${id};
              background: ${t.polished.rgba(y.ref.palette.neutral[500],.6)};
              z-index: 1;
              display: none;
            `},(0,t.jsx)(o.Button,{className:"edit-btn btn-large border-0",onClick:sd},(0,t.jsx)(ed,{size:"m"}),d.formatMessage("editHeader"))),(0,t.jsx)(t.ReactResizeDetector,{targetRef:p,handleHeight:!0,handleWidth:!1,onResize:I})))}function gd(e,o,i,n){var s,a;return t.css`
    ${od};
    ${nd(i)};
    display: flex;
    position: relative;
    width: 100%;
    height: auto;
    min-height: ${parseFloat(o)}px;
    overflow: hidden;
    background-color: ${e.backgroundColor||(null===(s=n.comp)||void 0===s?void 0:s.Footer.root.vars.bg)||"transparent"};
    background-image: ${e.backgroundIMage};
    background-position: ${e.backgroundPosition};
    color: ${null===(a=n.comp)||void 0===a?void 0:a.Footer.root.vars.color};
    border-top: 1px dashed ${t.polished.rgba(i.ref.palette.white,.12)};
    z-index: 0;

    .resize-handler {
      top: ${-8}px;
      z-index: 1;
      .handler {
        width: 36px;
        height: 4px;
        background: var(--ref-palette-black);
        border: 1px solid var(--ref-palette-white);
        position: absolute;
        left: 50%;
        top: 9px;
        transform: translateX(-50%);
      }
    }

    &:hover {
      .edit-mask {
        display: flex;
      }
    }

    body.lock-layout &,
    body:not(.design-mode) & {
      > .resize-handler {
        display: none !important;
      }
    }
    body:not(.design-mode) & {
      .edit-mask, .edit-mask-all {
        display: none !important;
      }
    }
  `}function md(i){const{footer:n,browserSizeMode:a,mainSizeMode:l,activePagePart:r,pageContext:d,onHeightChange:u}=i,c=t.ReactRedux.useSelector((e=>{var o;return(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),p=t.React.useRef(null),h=n.height[a]||n.height[l]||75,g=n.layout,m=!g[a],y=d.builderTheme;t.React.useEffect((()=>{let t;return p.current&&(t=function(t){let o=0,i=0,n=0;const a=window.parent.document.querySelector(".device-frame");return(0,Wt.interact)(t).origin("parent").resizable({inertia:!1,edges:{top:".resize-handler"},onstart:e=>{e.stopPropagation(),o=0,i=t.getBoundingClientRect().height,n=(null==a?void 0:a.getBoundingClientRect().height)||0},onmove:e=>{e.stopPropagation();const s=e.deltaRect;o+=s.height,t.style.height=`${i+o}px`,a&&(a.style.height=`${n+o}px`)},onend:l=>{l.stopPropagation(),t.style.height=null,a&&(a.style.height=`${n}px`),(0,e.getAppConfigAction)().editFooterProperty(`height.${s.utils.getCurrentSizeMode()}`,Math.round(i+o)).exec()}})}(p.current)),()=>{t&&t.unset()}}),[]);const f=dd(),v=t.React.useMemo((()=>Object.assign(Object.assign({},d),{isFooter:!0,rootLayoutId:f,viewOnly:m||c&&r!==t.PagePart.Footer})),[d,f,m,r,c]),I=t.React.useCallback((({width:t,height:e})=>{u(Math.round(e))}),[u]);return(0,t.jsx)(s.PageContext.Provider,{value:v},(0,t.jsx)("div",{className:"footer",css:gd(n,h,d.builderTheme,d.theme),ref:t=>{p.current=t}},!m&&(0,t.jsx)("span",{className:"resize-handler"},(0,t.jsx)("div",{className:(0,t.classNames)("handler",{"d-none":r!==t.PagePart.Footer})})),(0,t.jsx)("div",{className:"w-100 h-100",css:t.css`
            overflow: auto;
            display: flex;
            position: relative;
            z-index: 0;
            min-height: ${parseFloat(h)}px;
          `},(0,t.jsx)(lo,{layouts:g,isPageItem:!0,visible:!0})),r!==t.PagePart.Footer&&!m&&(0,t.jsx)("div",{className:"edit-mask-all",css:t.css`
              ${id};
              background: ${r===t.PagePart.Body?"transparent":t.polished.rgba(y.ref.palette.neutral[500],.6)};
              z-index: 1;
            `,onClick:ld}),r===t.PagePart.Body&&(!m||a===l)&&(0,t.jsx)("div",{className:"edit-mask justify-content-center align-items-center",css:t.css`
              ${id};
              background: ${t.polished.rgba(y.ref.palette.neutral[500],.6)};
              z-index: 1;
              display: none;
            `},(0,t.jsx)(o.Button,{className:"edit-btn btn-large border-0",onClick:ad},(0,t.jsx)(ed,{size:"m"}),d.formatMessage("editFooter"))),(0,t.jsx)(t.ReactResizeDetector,{targetRef:p,handleHeight:!0,handleWidth:!1,onResize:I})))}function yd(e){let o,i,n;switch(null==e?void 0:e.position){case t.FixedPosition.TopLeft:o=t.css`top: 0; left: 0; bottom: auto; right: auto;`;break;case t.FixedPosition.TopRight:o=t.css`top: 0; left: auto; bottom: auto; right: 0;`;break;case t.FixedPosition.BottomLeft:o=t.css`top: auto; left: 0; bottom: 0; right: auto;`;break;case t.FixedPosition.BottomRight:o=t.css`top: auto; left: auto; bottom: 0; right: 0;`;break;case t.FixedPosition.TopCenter:o=t.css`top: 0; left: 50%; bottom: auto; right: auto;`;break;case t.FixedPosition.BottomCenter:o=t.css`top: auto; left: 50%; bottom: 0; right: auto;`;break;case t.FixedPosition.MiddleLeft:o=t.css`top: 50%; left: 0; bottom: auto; right: auto;`;break;case t.FixedPosition.MiddleRight:o=t.css`top: 50%; left: auto; bottom: auto; right: 0;`;break;case t.FixedPosition.MiddleCenter:o=t.css`top: 50%; left: 50%; bottom: auto; right: auto;`;break;default:o=t.css`top: 0; left: 0; bottom: auto; right: auto;`}return e.widthMode===C.Stretch&&(i=t.css`width:auto;left:${e.left};right:${e.right};`),e.heightMode===C.Stretch&&(n=t.css`height:auto;top:${e.top};bottom:${e.bottom};`),t.css`
    position: fixed;
    ${o}
    width: ${null==e?void 0:e.width};
    height: ${null==e?void 0:e.height};
    ${i};
    ${n}
    overflow: visible;
    z-index: 2;
  `}var fd=p(9238),vd=p.n(fd);const{animated:Id,useSpring:xd}=t.spring,bd=t.css`
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
`,wd={rootBoundary:"viewport",crossAxis:!0},Sd={fallbackPlacements:["top-start","bottom-start","right-start","left-start"]};function Cd(e){const{layoutId:i,layoutItemId:n,controllerId:a,minimized:l,onClick:r,onToggle:d,onClose:c}=e,[p,h]=t.React.useState(!1),g=t.React.useRef(),m=t.hooks.useLatest(c),y=t.hooks.useLatest(d),f=t.hooks.useTranslation(),v=t.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode===t.AppMode.Design)),I=t.ReactRedux.useSelector((t=>{var e;const o=t.appRuntimeInfo.selection;if(!o)return!1;if(i===o.layoutId&&n===o.layoutItemId)return!0;return null!=(null===(e=g.current)||void 0===e?void 0:e.querySelector(`div.builder-layout-item[data-layoutid="${o.layoutId}"][data-layoutitemid="${o.layoutItemId}"]`))})),x=t.ReactRedux.useSelector((t=>t.appConfig.layouts[i].content[n].widgetId)),b=t.ReactRedux.useSelector((t=>{var e,o,i;const n=t.appConfig.widgets[x];return(null===(o=null===(e=null==n?void 0:n.manifest)||void 0===e?void 0:e.properties)||void 0===o?void 0:o.hasEmbeddedLayout)&&Object.keys(null!==(i=n.layouts)&&void 0!==i?i:{}).length>0})),w=t.ReactRedux.useSelector((e=>{var o;const i=e.appConfig.widgets[x];return(null===(o=null==i?void 0:i.manifest)||void 0===o?void 0:o.widgetType)!==t.WidgetType.Layout})),S=t.ReactRedux.useSelector((t=>{var e,o,i;const n=t.appConfig.widgets[x];return null!==(i=null===(o=null===(e=null==n?void 0:n.manifest)||void 0===e?void 0:e.properties)||void 0===o?void 0:o.supportInlineEditing)&&void 0!==i&&i})),C=t.ReactRedux.useSelector((t=>{const e=t.widgetsRuntimeInfo[x];return S&&(null==e?void 0:e.isInlineEditing)})),R=t.ReactRedux.useSelector((e=>{var o;const i=null===(o=e.widgetsRuntimeInfo)||void 0===o?void 0:o[x];return(null==i?void 0:i.state)===t.WidgetState.Opened})),T=t.ReactRedux.useSelector((t=>{const e=t.appConfig.widgets[x];return null==e?void 0:e.label}),t.ReactRedux.shallowEqual),M=t.ReactRedux.useSelector((t=>{var e;const o=t.widgetsRuntimeInfo[x];return null!==(e=null==o?void 0:o.isClassLoaded)&&void 0!==e&&e})),A=t.ReactRedux.useSelector((t=>t.appConfig.controllerPanels[a].effect)),L=t.React.useMemo((()=>{var e,o;return(null==A?void 0:A.type)&&A.type!==t.AnimationType.None?(0,t.getAnimationEffect)(A.type,{configType:null===(e=A.option)||void 0===e?void 0:e.configType,direction:null===(o=A.option)||void 0===o?void 0:o.direction}):null}),[A]),[P,j]=xd((()=>t.DEFAULT_ANIMATION_PROPS),[L]),z=t.React.useCallback((e=>{m.current(e,x);const o=document.querySelector(`.widget-controller .avatar-card[data-widgetid='${x}'] button`);if(o)(0,t.focusElementInKeyboardMode)(o);else{const e=document.querySelector(`[data-widgetid='${a}'] .popup-more-button button`);(0,t.focusElementInKeyboardMode)(e)}}),[m,x,a]);(0,o.useTrapFocusBySelector)(g,!0,!0,".first-node",".last-virtual-node",p&&R);const{viewOnly:N}=t.React.useContext(s.PageContext),k=t.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode===t.AppMode.Express)),$=t.ReactRedux.useSelector((t=>t.browserSizeMode!==t.appConfig.mainSizeMode)),E=t.React.useCallback((e=>{var o;if(e.stopPropagation(),N||k&&$)return;const s=null===(o=(0,t.getAppStore)().getState().appRuntimeInfo)||void 0===o?void 0:o.selection;s&&s.layoutId===i&&s.layoutItemId===n||(0,t.getAppStore)().dispatch(t.appActions.selectionChanged({layoutId:i,layoutItemId:n})),null==r||r(e)}),[k,i,n,$,r,N]),O=t.React.useCallback((e=>{e.stopPropagation();const{browserSizeMode:o,appConfig:{mainSizeMode:i}}=(0,t.getAppStore)().getState();!S||N||t.utils.isExpressMode()&&o!==i||(0,t.getAppStore)().dispatch(t.appActions.setWidgetIsInlineEditingState(x,!0))}),[S,N,x]);let B;t.React.useEffect((()=>{R&&!p&&(h(!0),t.WidgetManager.getInstance().loadWidgetClass(x).catch((t=>{console.log(t)}))),R&&!I&&v&&(0,t.getAppStore)().dispatch(t.appActions.closeWidget(x))}),[R,I,x,p,v]),t.React.useEffect((()=>{R&&!v&&null!=L&&j.start(Object.assign(Object.assign({},L.animateProps()),{onRest:()=>{t.lodash.defer((()=>{g.current.style.clipPath=null,g.current.parentElement.style.clipPath=null}))}}))}),[j,R,v,L]),p&&M&&(B=t.WidgetManager.getInstance().getWidgetClass(x));const D=v&&!C&&w&&!b,F=(0,u.getTheme2)(),H=(0,t.getAppStore)().getState().appConfig.layouts[i].content[n],V=(W=g.current,G="first-node",U="last-virtual-node",t.React.useCallback((e=>{if(!W)return;const i=e.key,n=e.shiftKey;if("Tab"===i)if(n){const e=(0,o.getFocusableElements)(W).filter((t=>{var e,o;return!(null===(o=null===(e=null==t?void 0:t.classList)||void 0===e?void 0:e.contains)||void 0===o?void 0:o.call(e,U))}));if(!e||0===e.length)return;(0,t.focusElementInKeyboardMode)(e[e.length-1],!0)}else{const e=W.querySelector(`.${G}`);(0,t.focusElementInKeyboardMode)(e,!0)}}),[W,G,U]));var W,G,U;const _=t.React.useMemo((()=>[{name:"collapse",className:l?"first-node action-collapse collapsed":"first-node action-collapse",label:f(l?"expand":"collapse"),icon:vd(),onClick:y.current},{name:"close",className:"action-close",label:f("close"),icon:At(),onClick:z}]),[z,l,y,f]);return(0,t.jsx)(Id.div,{className:(0,t.classNames)("controller-panel flex-column w-100 h-100",{"d-none":!p||!R}),css:bd,style:null!=L?P:null,onClick:E,onDoubleClick:O,ref:g},(0,t.jsx)(o.PanelHeader,{level:2,type:"primary",title:T,actions:_,moveable:!1}),(0,t.jsx)("div",{className:"panel-content d-flex flex-grow-1"},!M&&(0,t.jsx)(o.Loading,{type:o.LoadingType.Donut}),B&&(0,t.jsx)("div",{className:"w-100 h-100 widget-content p-1"},(0,t.jsx)(t.ErrorBoundary,null,(0,t.jsx)(B,{widgetId:x,layoutId:i,layoutItemId:n}),v&&(0,t.jsx)(Te,{layoutId:i,layoutItem:H,refElement:g.current,shiftOptions:wd,flipOptions:Sd,builderTheme:F,formatMessage:f,showDefaultTools:!1}))),D&&(0,t.jsx)("div",{className:"widget-mask"}),(0,t.jsx)("button",{className:"sr-only last-virtual-node",onKeyUp:V})))}const{useSpring:Rd}=t.spring;const{animated:Td}=t.spring;function Md(o){var i,n,a,l;const{controllerId:r,selected:d,innerSelected:c,isDesignMode:p}=o,h=t.React.useRef(),[g,m]=t.React.useState(!1),[y,f]=t.React.useState(),[v,I]=t.React.useState(!1),x=t.ReactRedux.useSelector((t=>{const e=t.appConfig.widgets[r],o=e.manifest.layouts[0].name,i=e.layouts[o];return s.searchUtils.findLayoutId(i,t.browserSizeMode,t.appConfig.mainSizeMode)})),b=t.ReactRedux.useSelector((t=>{var e;const o=t.appConfig.layouts[x];if(!o)return"";const i=t.appConfig.widgets,n=Object.keys(null!==(e=o.content)&&void 0!==e?e:{}).filter((t=>{const e=o.content[t],n=i[null==e?void 0:e.widgetId];return null!=(null==e?void 0:e.widgetId)&&!e.isPending&&!(null==n?void 0:n.offPanel)}));return n.sort(),n.join(",")})),w=t.ReactRedux.useSelector((e=>{var o,i;if(p)return!1;const n=e.appConfig.widgets,s=Object.keys(null!==(o=e.widgetsRuntimeInfo)&&void 0!==o?o:{}).filter((o=>{var i;return e.widgetsRuntimeInfo[o].state===t.WidgetState.Opened&&!(null===(i=n[o])||void 0===i?void 0:i.offPanel)})),a=e.appConfig.layouts[x];return Object.keys(null!==(i=a.content)&&void 0!==i?i:{}).some((t=>{const e=a.content[t];return null!=(null==e?void 0:e.widgetId)&&!e.isPending&&s.includes(e.widgetId)}))})),S=t.React.useMemo((()=>b.split(",").filter((t=>""!==t))),[b]),R=t.ReactRedux.useSelector((t=>t.appConfig.controllerPanels[r])),T=function(e){const{controllerId:o}=e,i=t.ReactRedux.useSelector((t=>{var e;const i=null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.animationPreview;return(null==i?void 0:i.controllerId)===o?i.id:-1})),n=t.ReactRedux.useSelector((t=>t.appConfig.controllerPanels[o].effect)),s=t.React.useMemo((()=>{var e,o;return(null==n?void 0:n.type)&&n.type!==t.AnimationType.None?(0,t.getAnimationEffect)(n.type,{configType:null===(e=n.option)||void 0===e?void 0:e.configType,direction:null===(o=n.option)||void 0===o?void 0:o.direction}):null}),[n]),[a,l]=Rd((()=>t.DEFAULT_ANIMATION_PROPS),[s]);return t.React.useEffect((()=>{i>0&&null!=s&&l.start(Object.assign(Object.assign({},s.animateProps()),{onRest:()=>{(0,t.getAppStore)().dispatch(t.appActions.clearAnimationPreview())}}))}),[l,i,s]),null!=s?a:null}({controllerId:r});t.React.useEffect((()=>{let t,o;const i=((null==R?void 0:R.position)||"").includes("CENTER")?2:1,n=((null==R?void 0:R.position)||"").includes("MIDDLE")?2:1,a=(e,i,n)=>{t=i,o=n,m(!0),f({dx:0,dy:0,dw:0,dh:0,width:i,height:n})},l=(e,s,a,l,r)=>{f({dx:s,dy:a,dw:l,dh:r,width:t+l*i,height:o+r*n})},d=(a,l,d,u,c)=>{m(!1),function(t){const{controllerId:o,dx:i,dy:n,dw:a,dh:l,width:r,height:d}=t,u=(0,e.getAppConfigAction)();let c=u.appConfig.controllerPanels[o];c.widthMode===s.LayoutItemSizeModes.Stretch?0!==a&&(c=0!==i?s.utils.isPercentage(c.left)?c.set("left",`${(parseFloat(c.left)+100*i/window.innerWidth).toFixed(2)}%`):c.set("left",`${Math.round(parseFloat(c.left)+i)}px`):s.utils.isPercentage(c.right)?c.set("right",`${(parseFloat(c.right)-100*a/window.innerWidth).toFixed(2)}%`):c.set("right",`${Math.round(parseFloat(c.right)-a)}px`)):c=s.utils.isPercentage(c.width)?c.set("width",`${(100*r/window.innerWidth).toFixed(2)}%`):c.set("width",`${Math.round(r)}px`),c.heightMode===s.LayoutItemSizeModes.Stretch?0!==l&&(c=0!==n?s.utils.isPercentage(c.top)?c.set("top",`${(parseFloat(c.top)+100*n/window.innerHeight).toFixed(2)}%`):c.set("top",`${Math.round(parseFloat(c.top)+n)}px`):s.utils.isPercentage(c.bottom)?c.set("bottom",`${(parseFloat(c.bottom)-100*l/window.innerHeight).toFixed(2)}%`):c.set("bottom",`${Math.round(parseFloat(c.bottom)-l)}px`)):c=s.utils.isPercentage(c.height)?c.set("height",`${(100*d/window.innerHeight).toFixed(2)}%`):c.set("height",`${Math.round(d)}px`),u.editControllerPanel(o,c).exec()}({controllerId:r,dx:l,dy:d,dw:u,dh:c,width:t+u*i,height:o+c*n})};if(h.current){_t((0,Wt.interact)(h.current).origin("parent"),{layoutItemId:"controller",restrictEdges:!0,onResizeStart:a,onResizing:l,onResizeEnd:d})}return()=>{}}),[r,null==R?void 0:R.position]);const M=t.React.useCallback((t=>{t.stopPropagation()}),[]),A=t.React.useCallback((()=>{I(!v)}),[v]),L=t.React.useCallback(((e,o)=>{e.stopPropagation(),(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(null)),(0,t.getAppStore)().dispatch(t.appActions.closeWidget(o))}),[]),P=p?d||c:w;let j=T;const z=function(e){if(null==e)return null;const{position:o,offsetX:i=0,offsetY:n=0}=e;let s;return e.widthMode!==C.Stretch&&(0!==i&&(s=`translateX(${i}px)`),o!==t.FixedPosition.TopCenter&&o!==t.FixedPosition.MiddleCenter&&o!==t.FixedPosition.BottomCenter||(s=null!=s?`${s} translateX(-50%)`:"translateX(-50%)")),e.heightMode!==C.Stretch&&(0!==n&&(s=null!=s?`${s} translateY(${n}px)`:`translateY(${n}px)`),o!==t.FixedPosition.MiddleLeft&&o!==t.FixedPosition.MiddleCenter&&o!==t.FixedPosition.MiddleRight||(s=null!=s?`${s} translateY(-50%)`:"translateY(-50%)")),s}(R);return null!=z&&(j=Object.assign({},{transform:z},T)),(0,t.jsx)(Td.div,{ref:h,style:j,css:(()=>{const e=(0,u.getTheme2)();if(g){let o,i;return R.widthMode===s.LayoutItemSizeModes.Stretch&&(o=t.css`
          left: calc(${R.left} + ${y.dx}px);
          right: ${0===y.dx?`calc(${R.right} - ${y.dw}px)`:R.right};
        `),R.heightMode===s.LayoutItemSizeModes.Stretch&&(i=t.css`
          top: calc(${R.top} + ${y.dy}px);
          bottom: ${0===y.dy?`calc(${R.bottom} - ${y.dh}px)`:R.bottom};
        `),t.css`
        ${yd(R)};
        display: ${P?"block":"none"};
        width: ${R.widthMode!==s.LayoutItemSizeModes.Stretch?y.width+"px":"auto"};
        height: ${R.heightMode!==s.LayoutItemSizeModes.Stretch?y.height+"px":"auto"};
        ${o}
        ${i}
        border: ${d?"1px solid var(--sys-color-primary-main)":"none"};
        background: ${d?t.polished.rgba(e.sys.color.primary.main,.2):"transparent"};
      `}return t.css`
      ${yd(R)};
      display: ${P?"block":"none"};
      height: ${v?"36px":null==R?void 0:R.height};
      border: ${d?"1px solid var(--sys-color-primary-main)":"none"};
      transition: height 0.3s ease-in-out;
      background: ${d?t.polished.rgba(e.sys.color.primary.main,.2):"transparent"};
    `})(),onClick:M,className:"panel-container"},d&&(0,t.jsx)(we,{left:!(null===(i=null==R?void 0:R.position)||void 0===i?void 0:i.includes("LEFT"))||R.widthMode===s.LayoutItemSizeModes.Stretch,right:!(null===(n=null==R?void 0:R.position)||void 0===n?void 0:n.includes("RIGHT"))||R.widthMode===s.LayoutItemSizeModes.Stretch,top:!(null===(a=null==R?void 0:R.position)||void 0===a?void 0:a.includes("TOP"))||R.heightMode===s.LayoutItemSizeModes.Stretch,bottom:!(null===(l=null==R?void 0:R.position)||void 0===l?void 0:l.includes("BOTTOM"))||R.heightMode===s.LayoutItemSizeModes.Stretch}),(0,t.jsx)(t.React.Fragment,null,S.map((e=>(0,t.jsx)(Cd,{key:e,controllerId:r,layoutId:x,layoutItemId:e,minimized:v,onToggle:A,onClose:L})))))}function Ad(e){const{pageId:o}=e,i=t.ReactRedux.useSelector((e=>function(e,o,i){var n;const s=Object.keys(null!==(n=e.controllerPanels)&&void 0!==n?n:{}).filter((n=>{const s=M(e,n,t.LayoutItemType.Widget,i);return null!=s&&(s.type!==t.ContainerType.Page||s.id===o)}));return s.sort(),s.join(",")}(e.appConfig,o,e.browserSizeMode))),n=t.React.useMemo((()=>i.split(",").filter((t=>""!==t))),[i]),s=t.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode===t.AppMode.Design)),[a,l]=t.ReactRedux.useSelector((e=>{var o,i;if(!s)return[null,null];const n=e.appRuntimeInfo.selection;if(!n)return[null,null];const{layoutId:a,layoutItemId:l}=n,r=e.appConfig.layouts[a].content[l];if((null==r?void 0:r.type)===t.LayoutItemType.Widget&&r.widgetId){const t=e.appConfig.widgets[r.widgetId];if("widgets/common/controller/"===(null==t?void 0:t.uri)&&(null===(o=e.appConfig.controllerPanels)||void 0===o?void 0:o[r.widgetId]))return[r.widgetId,null]}const d=o=>{var i,n,s,a,l,r,d,u;switch(null==o?void 0:o.type){case t.LayoutParentType.View:{const t=o.id,l=e.appConfig.views[t].parent,r=e.appConfig.sections[l],d=(null===(n=null===(i=r.parent)||void 0===i?void 0:i[e.browserSizeMode])||void 0===n?void 0:n[0])||(null===(a=null===(s=r.parent)||void 0===s?void 0:s[e.appConfig.mainSizeMode])||void 0===a?void 0:a[0]),u=e.appConfig.layouts[null==d?void 0:d.layoutId];return null==u?void 0:u.parent}case t.LayoutParentType.Widget:{const t=o.id,i=e.appConfig.widgets[t],n=(null===(r=null===(l=i.parent)||void 0===l?void 0:l[e.browserSizeMode])||void 0===r?void 0:r[0])||(null===(u=null===(d=i.parent)||void 0===d?void 0:d[e.appConfig.mainSizeMode])||void 0===u?void 0:u[0]),s=e.appConfig.layouts[null==n?void 0:n.layoutId];return null==s?void 0:s.parent}default:return null}};let u=e.appConfig.layouts[a].parent;for(;u;){if(u.type===t.LayoutParentType.Widget){const t=e.appConfig.widgets[u.id];if("widgets/common/controller/"===(null==t?void 0:t.uri)&&(null===(i=e.appConfig.controllerPanels)||void 0===i?void 0:i[t.id]))return[u.id,r.id]}u=d(u)}return[null,null]}),t.ReactRedux.shallowEqual);return t.React.useEffect((()=>{var e;if(a){const o=(0,t.getAppStore)().getState(),i=Object.keys(null!==(e=o.widgetsRuntimeInfo)&&void 0!==e?e:{}).filter((e=>{const i=o.widgetsRuntimeInfo[e];return i.state===t.WidgetState.Opened&&i.controllerWidgetId!==a}));i.length>0&&(0,t.getAppStore)().dispatch(t.appActions.closeWidgets(i))}}),[a]),t.React.useEffect((()=>{var e;const o=(0,t.getAppStore)().getState(),i=Object.keys(null!==(e=o.widgetsRuntimeInfo)&&void 0!==e?e:{}).filter((e=>o.widgetsRuntimeInfo[e].state===t.WidgetState.Opened));i.length>0&&(0,t.getAppStore)().dispatch(t.appActions.closeWidgets(i))}),[s]),(0,t.jsx)(t.React.Fragment,null,n.map((e=>(0,t.jsx)(Md,{key:e,isDesignMode:s,selected:a===e&&null===l,innerSelected:a===e&&null!=l,controllerId:e}))))}function Ld(e){const{pageJson:o,visible:i,renderedPageId:n,browserSizeMode:a,activePagePart:l,pageContext:r,headerFooterHeight:d}=e,[u,c]=t.React.useState(0),{previewId:p,playMode:h}=t.ReactRedux.useSelector((t=>function(t,e){const o=t.appRuntimeInfo.animationPreview;return(null==o?void 0:o.pageId)===e?{previewId:o.id,playMode:o.playMode}:{previewId:0,playMode:null}}(t,o.id)),t.ReactRedux.shallowEqual),g=t.React.useMemo((()=>function(e,o){if(e){const i=(0,t.getAppStore)().getState().appConfig,n=e.layout[i.mainSizeMode],s=i.layouts[n];if((null==s?void 0:s.type)===t.LayoutType.GridLayout)return o>0?`calc(100% - ${o}px)`:"100%"}return"auto"}(o,d)),[d]),m=o.layout,y=o.oneByOneEffect&&o.oneByOneEffect.type!==t.AnimationType.None?o.oneByOneEffect:null,f=t.ReactRedux.useSelector((e=>{var o;return null===y||(null===(o=e.appRuntimeInfo)||void 0===o?void 0:o.appMode)===t.AppMode.Design})),v=t.ReactRedux.useSelector((t=>null===y?null:t.browserSizeMode)),I=t.React.useRef(y),x=t.React.useRef(v),b=t.React.useRef(i),w=y?!i:null;t.React.useEffect((()=>{I.current=y})),t.React.useEffect((()=>{f&&b.current||c((0,t.getNextAnimationId)())}),[f]),t.React.useEffect((()=>{f||x.current===v||c((0,t.getNextAnimationId)()),x.current=v}),[v,f]),t.React.useEffect((()=>{!f&&b.current!==i&&I.current&&c((0,t.getNextAnimationId)()),b.current=i}),[i,f]);const S=!m[a];let C;o.mode!==t.PageMode.FitWindow&&o.maxWidth>0&&(C=o.maxWidth);const R=t.React.useMemo((()=>{const e=(0,t.getAppStore)().getState();let i;return o.layout&&(i=s.searchUtils.findLayoutId(o.layout,a,e.appConfig.mainSizeMode)),Object.assign(Object.assign({},r),{maxWidth:C,viewOnly:S,rootLayoutId:i,pageId:n})}),[r,S,C,n,o.layout,a]),T=t.React.useMemo((()=>({setting:!f||p>0?y:null,revert:w,playId:p>0?p:u,oid:R.rootLayoutId,playMode:h,onContextAnimationEnd:()=>{p>0?(0,t.getAppStore)().dispatch(t.appActions.clearAnimationPreview()):c(-1)}})),[f,w,u,p,y,h,R.rootLayoutId]),M=t.React.useCallback((()=>t.css`
      display: ${i?"flex":"none"};
      position: relative;
      background-color: ${o.bodyBackgroundColor||"transparent"};
      z-index: 1;
      flex: 1 0 auto;
      height: ${g};

      body:not(.design-mode) & {
        .edit-mask {
          display: none !important;
        }
      }

      .exb-drop-area {
        pointer-events: ${l!==t.PagePart.Body?"none !important":"auto"}
      }
    `),[i,g,l,o.bodyBackgroundColor]);if(m)return(0,t.jsx)(s.PageContext.Provider,{key:o.id,value:R},(0,t.jsx)(s.PageVisibilityContext.Provider,{value:i},(0,t.jsx)("div",{id:o.id,"data-pageid":o.id,className:"page",css:M()},(0,t.jsx)(t.AnimationContext.Provider,{value:T},(0,t.jsx)(lo,{layouts:m,isPageItem:!0,visible:i,className:"w-100",css:t.css`
                margin: 0 auto;
                background-color: transparent;
                z-index: 0;
              `})),a!==t.BrowserSizeMode.Small&&(0,t.jsx)(Ad,{pageId:o.id}),l!==t.PagePart.Body&&(0,t.jsx)("div",{className:"edit-mask",css:t.css`
                ${id};
                background: ${t.polished.rgba(r.theme.ref.palette.neutral[1100],.6)};
                z-index: 1;
              `,onClick:ld}))))}function Pd(e){var o,i;let n=(0,t.getAppStore)().getState();window.jimuConfig.isBuilder&&(n=n.appStateInBuilder);const s=null===(o=n.appRuntimeInfo.screenGroupNavInfos)||void 0===o?void 0:o[e];return null!==(i=null==s?void 0:s.activeIndex)&&void 0!==i?i:0}const jd=[{icon:Tt(),title:t=>t.formatMessage("duplicateScreen"),visible:()=>at()===t.AppMode.Design&&!lt(),onClick:o=>{const{layoutItem:i}=o,n=Pd(i.screenGroupId),s=(0,e.getAppConfigAction)();s.duplicateScreenByIndex(n,i.screenGroupId),s.exec(),(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(i.screenGroupId,n+1))}},{icon:Y(),title:t=>t.formatMessage("deleteScreen"),visible:()=>at()===t.AppMode.Design&&!lt(),onClick:o=>{const{layoutItem:i}=o,n=Pd(i.screenGroupId),s=(0,e.getAppConfigAction)(),a=s.appConfig.screenGroups[i.screenGroupId].screens.length;s.removeScreenByIndex(n,i.screenGroupId).exec(),n===a-1&&(0,t.getAppStore)().dispatch(t.appActions.screenGroupNavInfoChanged(i.screenGroupId,n-1))}}],zd=[yt,ft,ht,pt],Nd=[].concat(Nt,zd);class kd extends e.BaseLayoutService{removeItemFromOrder(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o];if(!(null==n?void 0:n.order))return t;let s=[].concat(n.order);return s=s.filter((t=>t!==i)),t.setIn(["layouts",o,"order"],s)}afterItemMoved(t,e,o){let i=super.afterItemMoved(t,e,o);return i=this.removeItemFromOrder(i,e),this.clearEmptyRowInFlowLayout(i,e)}afterItemRemoved(t,e){let o=super.afterItemRemoved(t,e);return o=this.removeItemFromOrder(o,e),this.clearEmptyRowInFlowLayout(o,e)}duplicateItemInSameLayout(t,e,o,i){const n=super.duplicateItemInSameLayout(t,e,o,i);let s=n[0];const a=n[1],l=s.layouts[e.layoutId],r=[].concat(l.order),d=r.indexOf(e.layoutItemId);return r.splice(d,1,e.layoutItemId,a),s=s.setIn(["layouts",e.layoutId,"order"],r),s=this.offsetDuplicateItem(s,e.layoutId),[s,a]}getTocStructure(t,o){var i;const n=t.layouts[o],a=s.utils.getCurrentSizeMode();if((null===(i=null==n?void 0:n.order)||void 0===i?void 0:i.length)>0){return[].concat(n.order).filter((t=>!n.content[t].isPending)).map((i=>{const s=n.content[i];return new e.ContentServiceWrapper(t,s).toTocNode({layoutId:o,layoutItemId:i},a)}))}return[]}processAfterItemAdded(t,o,i,n){var a;const{insertIndex:l,itemRect:r}=n,d=(0,e.getAppConfigAction)(t),u={left:r.left,width:r.width,height:r.height};return(null===(a=o.layoutInfo)||void 0===a?void 0:a.layoutId)!==i.layoutId&&d.editLayoutItemProperty(i,"setting.autoProps.height",s.LayoutItemSizeModes.Stretch),d.editLayoutItemProperty(i,"bbox",u).adjustOrderOfItem(i,l),d.appConfig}getToolItems(e,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return kt;if("screen"===(null==i?void 0:i.toLowerCase()))return jd;return s.searchUtils.findLayoutItem(e,o).type===t.LayoutItemType.Section?Nd:zd}offsetDuplicateItem(t,e){let o=t;const i=t.layouts[e],n=(t,i)=>parseInt(o.layouts[e].content[t].bbox[i],10),s=(t,i,n)=>{o=o.setIn(["layouts",e,"content",t,"bbox",i],n)},a=Object.keys(i.content).sort(((t,e)=>n(t,"left")-n(e,"left")));let l=0;for(let t=0;t<a.length;t++)l+=n(a[t],"width");if(s(a[0],"left",0),l<=12)for(let t=1;t<a.length;t++)s(a[t],"left",n(a[t-1],"left")+n(a[t-1],"width"));else{const t=l/12;s(a[0],"width",Math.max(1,Math.floor(n(a[0],"width")/t)));for(let e=1;e<a.length;e++)s(a[e],"left",n(a[e-1],"left")+n(a[e-1],"width")),s(a[e],"width",Math.max(1,Math.floor(n(a[e],"width")/t)))}return o}clearEmptyRowInFlowLayout(o,i){var n,a,l;const r=o.layouts[i.layoutId];if((null!==(a=null===(n=null==r?void 0:r.order)||void 0===n?void 0:n.length)&&void 0!==a?a:0)>0)return o;const d=s.searchUtils.getWidgetIdThatUseTheLayoutId(o,i.layoutId);if(d){const i=o.widgets[d];if("row"===(null===(l=null==i?void 0:i.manifest)||void 0===l?void 0:l.name)){const i=s.utils.getCurrentSizeMode(),n=e.widgetService.findParent(o,d,i);if(n){const s=o.layouts[n.layoutId];if((null==s?void 0:s.type)===t.LayoutType.FlowLayout){return e.LayoutServiceProvider.getInstance().getServiceByType(s.type).removeItem(o,n,i,!0,!1)}}}}return o}}const $d=[].concat(Nt,Kn);class Ed extends e.BaseLayoutService{beforeItemRemoved(t,e){const{layoutId:o,layoutItemId:i}=e;let n=t.layouts[o];return n=_n(n,i),t.setIn(["layouts",o],n)}pendItem(t,e){let o=t,i=o.layouts[e.layoutId];return i=_n(i,e.layoutItemId),o=o.setIn(["layouts",e.layoutId],i),i.setting.rootItem===e.layoutItemId&&(o=o.setIn(["layouts",e.layoutId,"setting"],i.setting.without("rootItem"))),o=super.pendItem(o,e),o}duplicateItemInSameLayout(e,o,i,n){const s=super.duplicateItemInSameLayout(e,o,i,n);let a=s[0];const l=s[1],{layoutId:r,layoutItemId:d}=o;let u=a.layouts[r];const c=u.content[d];if(c.parent){const e=kn(u,c.parent),o=[...e.children],i=o.indexOf(d);if(o.splice(i,0,l),u=Bn(u,c.parent,"children",o),u=Bn(u,l,"parent",c.parent),e.gridType===t.GridItemType.Tab)u=On(u,l,+c.bbox.width);else{const t=+c.bbox.width/2;u=On(u,l,t),u=On(u,d,t)}}else u=Hn(u,l,d,t.GridItemType.Row,!1,!1);return a=a.setIn(["layouts",r],u),[a,l]}getTocStructure(t,e){var o;const i=t.layouts[e],n=null===(o=i.setting)||void 0===o?void 0:o.rootItem,a=this.fetchGridNode(t,i,`${n}`,s.utils.getCurrentSizeMode());return null!=a?[a]:[]}getToolItems(e,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return kt;if("screen"===(null==i?void 0:i.toLowerCase()))return jd;const n=s.searchUtils.findLayoutItem(e,o);return n.gridType===t.GridItemType.Row||n.gridType===t.GridItemType.Column?Rs:n.gridType===t.GridItemType.Tab?[]:n.type===t.LayoutItemType.Section?$d:Kn}processAfterItemAdded(t){return t}translate(e){return t.i18n.getIntl().formatMessage({id:e})}fetchGridNode(o,i,n,s){var a,l,r,d;const u=null===(a=i.content)||void 0===a?void 0:a[n];if(null==u)return null;const{gridType:c=t.GridItemType.Plain,children:p}=u;if(c===t.GridItemType.Plain){return new e.ContentServiceWrapper(o,u).toTocNode({layoutId:i.id,layoutItemId:n},s)}let h;c===t.GridItemType.Row?h=null!==(l=u.label)&&void 0!==l?l:this.translate("gridRow"):c===t.GridItemType.Column?h=null!==(r=u.label)&&void 0!==r?r:this.translate("gridCol"):c===t.GridItemType.Tab&&(h=null!==(d=u.label)&&void 0!==d?d:this.translate("tabs"));let g=!1;if(u.parent){g=i.content[u.parent].gridType===t.GridItemType.Tab}const m=g&&(c===t.GridItemType.Row||c===t.GridItemType.Column),y={label:h,type:"layoutItem",layoutId:i.id,layoutItemId:n,isLabelReadOnly:!m};return(null==p?void 0:p.length)>0&&(y.children=[...p].map((t=>this.fetchGridNode(o,i,t,s)))),y}}const Od=[yt,ft,ht,pt],Bd=[].concat(yi,Od),Dd=[].concat(yi,Nt,Od);class Fd extends e.BaseLayoutService{removeItemFromOrder(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o];let s=[].concat(n.order);return s=s.filter((t=>t!==i)),t.setIn(["layouts",o,"order"],s)}afterItemMoved(t,e){return this.removeItemFromOrder(t,e)}afterItemRemoved(t,e){const o=super.afterItemRemoved(t,e);return this.removeItemFromOrder(o,e)}updateBBoxAfterAdd(e,o,i,n){var a,l,r,d,u,c;const{containerRect:p,itemRect:h,currentSizeMode:g}=n;let m=n.snapResult;const y=o.layoutInfo,f=s.searchUtils.findLayoutItem(e,i);let v,I=(0,t.Immutable)(null!==(a=f.setting)&&void 0!==a?a:{});if(null==o.id&&(null==y?void 0:y.layoutId)===i.layoutId){const t=s.searchUtils.findLayoutItem(e,o.layoutInfo),i=null==t?void 0:t.bbox;if(i){v=s.utils.replaceBoundingBox(i,m,p).set("width",i.width).set("height",i.height)}else v=s.utils.replaceBoundingBox(null,m,p)}else if(v=s.utils.replaceBoundingBox(null,m,p),null==o.layoutInfo&&f.type===t.LayoutItemType.Widget&&f.widgetId){const t=e.widgets[f.widgetId];if((!m.width||!m.height)&&(null===(l=t.manifest)||void 0===l?void 0:l.defaultSize)){const{width:e,height:o}=t.manifest.defaultSize;m=Object.assign(Object.assign({},h),{width:e,height:o})}(null===(d=null===(r=t.manifest)||void 0===r?void 0:r.defaultSize)||void 0===d?void 0:d.autoWidth)&&(I=I.setIn(["autoProps","width"],s.LayoutItemSizeModes.Auto)),(null===(c=null===(u=t.manifest)||void 0===u?void 0:u.defaultSize)||void 0===c?void 0:c.autoHeight)&&(I=I.setIn(["autoProps","height"],s.LayoutItemSizeModes.Auto))}const x=xi(v,I,p,h);v=x.bbox,I=x.setting;const b=e.layouts[i.layoutId],w=b.parent.type===t.LayoutParentType.Header,S=b.parent.type===t.LayoutParentType.Footer;if(null==o.layoutInfo&&(w||S)){const t=w?parseInt(`${e.header.height[g]}`):parseInt(`${e.footer.height[g]}`);v=v.set("height",s.utils.toRatio(Math.min(h.height,t),t))}return[v,I]}processAfterItemAdded(t,o,i,n){var a;const{currentSizeMode:l,containerRect:r,itemRect:d,others:u}=n,c=t,{snapResult:p}=u,h=(0,e.getAppConfigAction)(c),[g,m]=this.updateBBoxAfterAdd(c,o,i,{containerRect:r,itemRect:d,snapResult:p,currentSizeMode:l});if(h.editLayoutItemProperty(i,"bbox",s.utils.isRTL()?Ii(g):g).editLayoutItemProperty(i,"setting",m),null!=o.layoutInfo&&o.layoutInfo.layoutId===i.layoutId&&h.editLayoutItemProperty(i,"setting.vCenter",!1).editLayoutItemProperty(i,"setting.hCenter",!1),(null===(a=o.layoutInfo)||void 0===a?void 0:a.layoutId)!==i.layoutId&&h.adjustOrderOfItem(i,null),c.useAutoSortInFixedLayout){const t=hi(h.appConfig.layouts[i.layoutId],r,{layoutItemId:i.layoutItemId,rect:d});h.editLayoutProperty(i.layoutId,"order",t.order)}return h.appConfig}duplicateItemInSameLayout(t,e,o,i){const n=super.duplicateItemInSameLayout(t,e,o,i);let s=n[0];const a=n[1],l=s.layouts[e.layoutId],r=[].concat(l.order);return r.push(a),s=s.setIn(["layouts",e.layoutId,"order"],r),s=this.offsetDuplicateItem(s,{layoutId:e.layoutId,layoutItemId:a}),[s,a]}getTocStructure(t,o){var i;const n=t.layouts[o],a=s.utils.getCurrentSizeMode();if((null===(i=null==n?void 0:n.order)||void 0===i?void 0:i.length)>0){return[].concat(n.order).filter((t=>!n.content[t].isPending)).map((i=>{const s=n.content[i];return new e.ContentServiceWrapper(t,s).toTocNode({layoutId:o,layoutItemId:i},a)}))}return[]}getToolItems(e,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return kt;if("screen"===(null==i?void 0:i.toLowerCase()))return jd;return s.searchUtils.findLayoutItem(e,o).type===t.LayoutItemType.Section?Dd:Bd}offsetDuplicateItem(t,e){var o,i;const{layoutId:n,layoutItemId:a}=e,l=t.layouts[n].content[a];let{bbox:r,setting:d}=l;const u=t=>{if(s.utils.isPercentage(t))return`${parseFloat(t)+5}%`;const e=parseInt(t,10);return isNaN(e)?t:e+20};return r=(null===(o=null==d?void 0:d.autoProps)||void 0===o?void 0:o.left)?r.set("right",u(r.right)):r.set("left",u(r.left)),r=(null===(i=null==d?void 0:d.autoProps)||void 0===i?void 0:i.top)?r.set("bottom",u(r.bottom)):r.set("top",u(r.top)),(null==d?void 0:d.hCenter)&&(null==d?void 0:d.vCenter)&&(d=d.set("vCenter",!1)),t.setIn(["layouts",n,"content",a,"bbox"],r).setIn(["layouts",n,"content",a,"setting"],d)}}const Hd=[yt,vt,pt],Vd=[ht,yt,pt];class Wd extends e.BaseLayoutService{removeItemFromOrder(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o];let s=[].concat(n.order);return s=s.filter((t=>t!==i)),t.setIn(["layouts",o,"order"],s)}afterItemMoved(t,e){return this.removeItemFromOrder(t,e)}afterItemRemoved(t,e){const o=super.afterItemRemoved(t,e);return this.removeItemFromOrder(o,e)}duplicateItemInSameLayout(t,e,o,i){var n;const s=super.duplicateItemInSameLayout(t,e,o,i);let a=s[0];const l=s[1],r=a.layouts[e.layoutId],d=[].concat(r.order),u=d.indexOf(e.layoutItemId);d.splice(u,1,e.layoutItemId,l),a=a.setIn(["layouts",e.layoutId,"order"],d);return(null===(n=r.content[l].setting)||void 0===n?void 0:n.isFloating)&&(a=this.offsetDuplicateItem(a,{layoutId:e.layoutId,layoutItemId:l})),[a,l]}getTocStructure(t,o){var i;const n=t.layouts[o],a=s.utils.getCurrentSizeMode();if((null===(i=null==n?void 0:n.order)||void 0===i?void 0:i.length)>0){return[].concat(n.order).filter((t=>!n.content[t].isPending)).map((i=>{const s=n.content[i];return new e.ContentServiceWrapper(t,s).toTocNode({layoutId:o,layoutItemId:i},a)}))}return[]}processAfterItemAdded(t,o,i,n){const{containerRect:a,itemRect:l,insertIndex:r}=n,d=(0,e.getAppConfigAction)(t),u=s.utils.replaceBoundingBox(null,l,a);return d.editLayoutItemProperty(i,"bbox",u).adjustOrderOfItem(i,r),d.appConfig}getToolItems(e,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return kt;if("screen"===(null==i?void 0:i.toLowerCase()))return jd;return s.searchUtils.findLayoutItem(e,o).type===t.LayoutItemType.ScreenGroup?Vd:Hd}offsetDuplicateItem(t,e){var o,i;const{layoutId:n,layoutItemId:a}=e,l=t.layouts[n].content[a];let{bbox:r,setting:d}=l;const u=t=>{if(s.utils.isPercentage(t))return`${parseFloat(t)+5}%`;const e=parseInt(t,10);return isNaN(e)?t:e+20};return r=(null===(o=null==d?void 0:d.autoProps)||void 0===o?void 0:o.left)?r.set("right",u(r.right)):r.set("left",u(r.left)),r=(null===(i=null==d?void 0:d.autoProps)||void 0===i?void 0:i.top)?r.set("bottom",u(r.bottom)):r.set("top",u(r.top)),(null==d?void 0:d.hCenter)&&(null==d?void 0:d.vCenter)&&(d=d.set("vCenter",!1)),t.setIn(["layouts",n,"content",a,"bbox"],r).setIn(["layouts",n,"content",a,"setting"],d)}}const Gd=[yt,ft,ht,pt],Ud=[].concat(Nt,Gd);class _d extends e.BaseLayoutService{removeItemFromOrder(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o];let s=[].concat(n.order);return s=s.filter((t=>t!==i)),t.setIn(["layouts",o,"order"],s)}afterItemMoved(t,e){return this.removeItemFromOrder(t,e)}afterItemRemoved(t,e){const o=super.afterItemRemoved(t,e);return this.removeItemFromOrder(o,e)}duplicateItemInSameLayout(t,e,o,i){const n=super.duplicateItemInSameLayout(t,e,o,i);let s=n[0];const a=n[1],l=s.layouts[e.layoutId],r=[].concat(l.order),d=r.indexOf(e.layoutItemId);return r.splice(d,1,e.layoutItemId,a),s=s.setIn(["layouts",e.layoutId,"order"],r),[s,a]}getTocStructure(t,o){var i;const n=t.layouts[o],a=s.utils.getCurrentSizeMode();if((null===(i=null==n?void 0:n.order)||void 0===i?void 0:i.length)>0){return[].concat(n.order).filter((t=>!n.content[t].isPending)).map((i=>{const s=n.content[i];return new e.ContentServiceWrapper(t,s).toTocNode({layoutId:o,layoutItemId:i},a)}))}return[]}processAfterItemAdded(o,i,n,a){var l,r;const{containerRect:d,itemRect:u,insertIndex:c}=a,p=(0,e.getAppConfigAction)(o);let h=s.utils.replaceBoundingBox(null,u,d);h=h.without("left").without("top").without("right").without("bottom"),p.editLayoutItemProperty(n,"bbox",h).adjustOrderOfItem(n,c);const g=s.searchUtils.findLayoutItem(o,n);if(g.type===t.LayoutItemType.Widget&&g.widgetId){(null===(r=null===(l=o.widgets[g.widgetId].manifest)||void 0===l?void 0:l.defaultSize)||void 0===r?void 0:r.autoHeight)&&p.editLayoutItemProperty(n,"setting.autoProps.height",s.LayoutItemSizeModes.Auto)}return p.appConfig}getToolItems(e,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return kt;if("screen"===(null==i?void 0:i.toLowerCase()))return jd;return s.searchUtils.findLayoutItem(e,o).type===t.LayoutItemType.Section?Ud:Gd}}const Yd=[yt,ft,ht,pt],Xd=[].concat(Nt,Yd);class Zd extends e.BaseLayoutService{removeItemFromOrder(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o];let s=[].concat(n.order);return s=s.filter((t=>t!==i)),t.setIn(["layouts",o,"order"],s)}afterItemMoved(t,e){return this.removeItemFromOrder(t,e)}afterItemRemoved(t,e){const o=super.afterItemRemoved(t,e);return this.removeItemFromOrder(o,e)}duplicateItemInSameLayout(t,e,o,i){const n=super.duplicateItemInSameLayout(t,e,o,i);let s=n[0];const a=n[1],l=s.layouts[e.layoutId],r=[].concat(l.order),d=r.indexOf(e.layoutItemId);return r.splice(d,1,e.layoutItemId,a),s=s.setIn(["layouts",e.layoutId,"order"],r),[s,a]}getTocStructure(t,o){var i;const n=t.layouts[o],a=s.utils.getCurrentSizeMode();if((null===(i=null==n?void 0:n.order)||void 0===i?void 0:i.length)>0){return[].concat(n.order).filter((t=>!n.content[t].isPending)).map((i=>{const s=n.content[i];return new e.ContentServiceWrapper(t,s).toTocNode({layoutId:o,layoutItemId:i},a)}))}return[]}processAfterItemAdded(o,i,n,a){var l,r;const{containerRect:d,itemRect:u,insertIndex:c}=a,p=(0,e.getAppConfigAction)(o);let h=s.utils.replaceBoundingBox(null,u,d);h=h.without("left").without("top").without("right").without("bottom").without("width"),p.editLayoutItemProperty(n,"bbox",h).adjustOrderOfItem(n,c);const g=s.searchUtils.findLayoutItem(o,n);if(g.type===t.LayoutItemType.Widget&&g.widgetId){(null===(r=null===(l=o.widgets[g.widgetId].manifest)||void 0===l?void 0:l.defaultSize)||void 0===r?void 0:r.autoHeight)&&p.editLayoutItemProperty(n,"setting.autoProps.height",s.LayoutItemSizeModes.Auto)}return p.appConfig}getToolItems(e,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return kt;if("screen"===(null==i?void 0:i.toLowerCase()))return jd;return s.searchUtils.findLayoutItem(e,o).type===t.LayoutItemType.Section?Xd:Yd}}const qd=[yt,ft,ht,pt],Kd=[].concat(Nt,qd);class Jd extends e.BaseLayoutService{removeItemFromOrder(t,e){const{layoutId:o,layoutItemId:i}=e,n=t.layouts[o];let s=[].concat(n.order);return s=s.filter((t=>t!==i)),t.setIn(["layouts",o,"order"],s)}afterItemMoved(t,e){return this.removeItemFromOrder(t,e)}afterItemRemoved(t,e){const o=super.afterItemRemoved(t,e);return this.removeItemFromOrder(o,e)}duplicateItemInSameLayout(t,e,o,i){const n=super.duplicateItemInSameLayout(t,e,o,i);let s=n[0];const a=n[1],l=s.layouts[e.layoutId],r=[].concat(l.order),d=r.indexOf(e.layoutItemId);return r.splice(d,1,e.layoutItemId,a),s=s.setIn(["layouts",e.layoutId,"order"],r),[s,a]}getTocStructure(t,o){var i;const n=t.layouts[o],a=s.utils.getCurrentSizeMode();if((null===(i=null==n?void 0:n.order)||void 0===i?void 0:i.length)>0){return[].concat(n.order).filter((t=>!n.content[t].isPending)).map((i=>{const s=n.content[i];return new e.ContentServiceWrapper(t,s).toTocNode({layoutId:o,layoutItemId:i},a)}))}return[]}processAfterItemAdded(o,i,n,a){var l,r,d,u;const{containerRect:c,insertIndex:p,itemRect:h}=a,g=(0,e.getAppConfigAction)(o);let m=s.utils.replaceBoundingBox(null,h,c);m=m.without("left").without("top").without("right").without("bottom"),g.editLayoutItemProperty(n,"bbox",m).adjustOrderOfItem(n,p);const y=s.searchUtils.findLayoutItem(o,n);if(y.type===t.LayoutItemType.Widget&&y.widgetId){const t=o.widgets[y.widgetId];(null===(r=null===(l=t.manifest)||void 0===l?void 0:l.defaultSize)||void 0===r?void 0:r.autoHeight)&&g.editLayoutItemProperty(n,"setting.autoProps.height",s.LayoutItemSizeModes.Auto),(null===(u=null===(d=t.manifest)||void 0===d?void 0:d.defaultSize)||void 0===u?void 0:u.autoWidth)&&g.editLayoutItemProperty(n,"setting.autoProps.width",s.LayoutItemSizeModes.Auto)}return g.appConfig}getToolItems(e,o,i){if("view"===(null==i?void 0:i.toLowerCase()))return kt;if("screen"===(null==i?void 0:i.toLowerCase()))return jd;return s.searchUtils.findLayoutItem(e,o).type===t.LayoutItemType.Section?Kd:qd}}e.LayoutServiceProvider.getInstance().registerService(t.LayoutType.RowLayout,new kd),e.LayoutServiceProvider.getInstance().registerService(t.LayoutType.GridLayout,new Ed),e.LayoutServiceProvider.getInstance().registerService(t.LayoutType.FixedLayout,new Fd),e.LayoutServiceProvider.getInstance().registerService(t.LayoutType.FlowLayout,new Wd),e.LayoutServiceProvider.getInstance().registerService(t.LayoutType.ColumnLayout,new _d),e.LayoutServiceProvider.getInstance().registerService(t.LayoutType.AccordionLayout,new Zd),e.LayoutServiceProvider.getInstance().registerService(t.LayoutType.FlexRowLayout,new Jd),(0,s.registerLayoutBuilder)(t.LayoutType.FixedLayout,nn),(0,s.registerLayoutBuilder)(t.LayoutType.FlowLayout,Kr),(0,s.registerLayoutBuilder)(t.LayoutType.GridLayout,Ws),(0,s.registerLayoutBuilder)(t.LayoutType.ColumnLayout,hn),(0,s.registerLayoutBuilder)(t.LayoutType.AccordionLayout,va),(0,s.registerLayoutBuilder)(t.LayoutType.FlexRowLayout,Ta);class Qd extends t.React.PureComponent{constructor(e){super(e),this.updateHeaderHeight=t=>{this.setState({headerHeight:t})},this.updateFooterHeight=t=>{this.setState({footerHeight:t})},this.startPaste=()=>{var e;const o=null===(e=(0,t.getAppStore)().getState().appRuntimeInfo)||void 0===e?void 0:e.clipboard,{activePagePart:i,pageStatus:n,currentDialogId:a,dialogs:l}=this.props;if(o){let e;if(a&&l[a])e=ud(a);else if(i===t.PagePart.Header)e=rd();else if(i===t.PagePart.Footer)e=dd();else{e=function(e){var o;const i=(0,t.getAppStore)().getState(),n=null===(o=i.appConfig.pages[e])||void 0===o?void 0:o.layout;return n?s.searchUtils.findLayoutId(n,i.browserSizeMode,i.appConfig.mainSizeMode):null}(cd(n))}H(o,e)}},this.isMac=()=>{var t,e;return"macOS"===(null===(e=null===(t=window.jimuUA)||void 0===t?void 0:t.os)||void 0===e?void 0:e.name)},this.clearSelection=e=>{!dt()&&!ut()||Xt()||Vt()||(e.stopPropagation(),(0,t.getAppStore)().dispatch(t.appActions.selectionChanged(null)))},this.formatMessage=(t,e)=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:Jt[t]},e):Jt[t],this.state={headerHeight:0,footerHeight:0},t.ExtensionManager.getInstance().registerExtension({epName:t.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Gl}),t.ExtensionManager.getInstance().registerExtension({epName:t.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new _l}),t.ExtensionManager.getInstance().registerExtension({epName:t.extensionSpec.ExtensionPoints.LayoutTransformer,extension:new Yl}),this.isMac()?this.keyBindings={"command+keyv":this.startPaste}:this.keyBindings={"ctrl+keyv":this.startPaste},this.updatePageContext()}componentDidMount(){dt()&&!document.body.classList.contains("design-mode")&&document.body.classList.add("design-mode"),lt()&&!document.body.classList.contains("lock-layout")&&document.body.classList.add("lock-layout")}componentDidUpdate(t){var e;const o=null===(e=window.document)||void 0===e?void 0:e.documentElement;o&&(window.jimuConfig.isInBuilder&&dt()?o.classList.add("is-in-builder"):o.classList.remove("is-in-builder"));cd(t.pageStatus)!==cd(this.props.pageStatus)&&(this.pageRef.scrollTop=0)}getPageStyle(){const{pageStatus:e,pages:o,minHeight:i}=this.props,n=o[Object.keys(e).find((t=>e[t]))];return t.css`
      position: relative;
      margin: 0 auto;
      overflow: hidden;
      z-index: 0;
      height: ${n.mode===t.PageMode.FitWindow?"100%":"auto"};
      min-height: ${i}px;
      .is-dragging {
        z-index: ${s.LayoutZIndex.DraggingItem};
        opacity: 0.8;
      }

      body:not(.design-mode) & {
        overflow: auto;
        height: 100%;
      }
    `}updatePageContext(){const{theme:e}=this.props,o={theme:e,builderTheme:(0,u.getBuilderThemeVariables)(),formatMessage:this.formatMessage};if(this.pageContext)for(const t in o)this.pageContext[t]!==o[t]&&(this.pageContext=this.pageContext.set(t,o[t]));else this.pageContext=(0,t.Immutable)(o)}render(){const{pageStatus:e,pages:o,headerVisible:i,footerVisible:n}=this.props,s=cd(e);return s&&(null==o?void 0:o[s])?(this.updatePageContext(),(0,t.jsx)("div",{className:"page-renderer d-flex flex-column align-items-center w-100",ref:t=>{this.pageRef=t},css:this.getPageStyle(),"data-testid":"pageRenderer",onClick:this.clearSelection},this.renderDialog(),i&&this.renderHeader(),Object.keys(e).map((t=>this.renderPageBody(t))),n&&this.renderFooter(),(0,t.jsx)(t.Keyboard,{bindings:this.keyBindings}))):null}renderHeader(){if(!this.props.header)return null;const{header:e,browserSizeMode:o,mainSizeMode:i,activePagePart:n}=this.props;return(0,t.jsx)(hd,{header:e,activePagePart:n,browserSizeMode:o,mainSizeMode:i,pageContext:this.pageContext,onHeightChange:this.updateHeaderHeight})}renderFooter(){if(!this.props.footer)return null;const{footer:e,browserSizeMode:o,mainSizeMode:i,activePagePart:n}=this.props;return(0,t.jsx)(md,{footer:e,activePagePart:n,browserSizeMode:o,mainSizeMode:i,pageContext:this.pageContext,onHeightChange:this.updateFooterHeight})}renderPageBody(e){const{pages:o,pageStatus:i,browserSizeMode:n,activePagePart:s}=this.props,a=o[e];if(a&&a.type===t.PageType.Normal)return(0,t.jsx)(Ld,{key:a.id,pageJson:a,renderedPageId:e,activePagePart:s,browserSizeMode:n,pageContext:this.pageContext,visible:!!i[a.id],headerFooterHeight:this.state.headerHeight+this.state.footerHeight})}isDialogViewOnly(e){const{browserSizeMode:o}=this.props;return!!(o!==t.BrowserSizeMode.Large&&!e.layout[o])}renderDialog(){const{currentDialogId:e,urlDialogJson:o,splashDialogJson:i,isSplashClosed:n,isPageDlgClosed:a,pageDialogJson:l,pageDialogId:r}=this.props,d=!n&&i,u=!a&&l,c=o?(null==i?void 0:i.id)===o.id||(null==l?void 0:l.id)===o.id?null:o:null;return(0,t.jsx)(t.React.Fragment,null,c&&(0,t.jsx)(s.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:e,isDialog:!0,viewOnly:this.isDialogViewOnly(o),rootLayoutId:ud(e)})},(0,t.jsx)(t.AppDialog,{dialogJson:o})),u&&(0,t.jsx)(s.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:r,isDialog:!0,viewOnly:this.isDialogViewOnly(l),rootLayoutId:ud(l.id)})},(0,t.jsx)(t.AppDialog,{dialogJson:l,isOpenByPage:!0})),d&&(0,t.jsx)(s.PageContext.Provider,{value:Object.assign(Object.assign({},this.pageContext),{dialogId:i.id,isDialog:!0,viewOnly:this.isDialogViewOnly(i),rootLayoutId:ud(i.id)})},(0,t.jsx)(t.AppDialog,{dialogJson:i})))}}Qd.displayName="BuilderPageRenderer";const tu=(0,t.createSelector)([e=>t.utils.findViewportSize(e.appConfig,e.browserSizeMode).height,(t,e)=>cd(e.pageStatus),(t,e)=>e.dialogId,t=>t.appRuntimeInfo.currentPageId,t=>t.appConfig.pages,t=>t.appConfig.dialogs,t=>t.appConfig.header,t=>t.appConfig.footer,t=>t.appConfig.mainSizeMode,t=>t.browserSizeMode,e=>{var o;return null!==(o=e.appRuntimeInfo.activePagePart)&&void 0!==o?o:t.PagePart.Body},t=>t.appRuntimeInfo.clipboard,t=>t.appRuntimeInfo.currentDialogId,t=>{var e;return null===(e=t.appRuntimeInfo)||void 0===e?void 0:e.dialogInfos},t=>t.appConfig.pages[t.appRuntimeInfo.currentPageId].autoOpenDialogId],((t,e,o,i,n,s,a,l,r,d,u,c,p,h,g)=>{var m,y;if(!e||!n[e])return{};const f=s[Object.keys(s).find((t=>s[t].isSplash))];return{pages:n,dialogs:s,header:a,footer:l,headerVisible:!!n[e].header,footerVisible:!!n[e].footer,mainSizeMode:r,browserSizeMode:d,minHeight:t,activePagePart:u,clipboardItem:c,currentDialogId:p,splashDialogJson:f,isSplashClosed:null===(m=null==h?void 0:h[null==f?void 0:f.id])||void 0===m?void 0:m.isClosed,pageDialogId:g,pageDialogJson:s[g],isPageDlgClosed:null===(y=null==h?void 0:h[i+"-"+g])||void 0===y?void 0:y.isClosed,urlDialogJson:s[o]}})),eu=(0,t.injectIntl)(t.ReactRedux.connect(tu)((0,u.withTheme)(Qd)));var ou=p(4146),iu=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o};function nu(e,o){var i,n,a,l;const r=o.layoutId,d=e.appRuntimeInfo.selection,u=o.layoutItem;let c=!1,p=!1,h=!1,g=!1;if(u&&(c=Boolean(d&&r===d.layoutId&&u.id===d.layoutItemId),u.type===t.LayoutItemType.Widget)){const t=e.appConfig.widgets[u.widgetId],o=null===(n=null===(i=null==t?void 0:t.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.supportInlineEditing;if(h=null===(l=null===(a=null==t?void 0:t.manifest)||void 0===a?void 0:a.properties)||void 0===l?void 0:l.supportRepeat,o){const t=e.widgetsRuntimeInfo[u.widgetId];p=t&&t.isInlineEditing}g=s.utils.isWidgetHasEmbeddedLayout(u.widgetId,e.appConfig)}return{selected:c,supportRepeat:h,isInlineEditing:p,isLayoutWidget:g}}const su=()=>null;function au(e){return e=>{class o extends t.React.PureComponent{constructor(e){super(e),this.ref=t.React.createRef()}componentDidMount(){const{layoutId:t,layoutItemId:e,layoutItem:o,onResizeStart:i,onResizing:n,onResizeEnd:s,onDragStart:a,onDragging:l,onDragEnd:r,useDragHandler:d}=this.props;this.ref.current&&(this.interactable=(0,Wt.interact)(this.ref.current).origin("parent"),this.interactable=Ft(this.interactable,{layoutId:t,layoutItemId:e,useDragHandler:d,onDragging:l,onDragStart:a,onDragEnd:r,itemType:o.type,rootLayoutId:()=>this.rootLayoutId,restrict:()=>this.props.restrict}),this.interactable=_t(this.interactable,{layoutItemId:e,onResizing:n,onResizeStart:i,onResizeEnd:s}))}componentWillUnMount(){this.interactable&&(this.interactable.unset(),this.interactable=null)}getStyle(e){return t.css`
          ${this.aspectRatioStyle()};

          &.dragging {
            opacity: 0.9;
          }

          display: flex;
          position: relative;
          touch-action: ${e?"auto":"none"};
          user-select: ${e?"auto":"none"};
        `}aspectRatioStyle(){const{aspectRatio:e,forceAspectRatio:o}=this.props;return o?t.css`
            & > div.rnd-aspect-ratio-wrapper {
              width: 100%;
              position: relative;
              padding-top: ${100*e}%;

              & > div {
                position: absolute !important;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
              }
            }
          `:t.css`
          & > .rnd-aspect-ratio-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
          }
        `}render(){return(0,t.jsx)(s.PageContext.Consumer,null,(o=>{this.rootLayoutId=o.rootLayoutId;const i=this.props,{gridSize:n,draggable:s,onResizeStart:a,onResizing:l,onResizeEnd:r,style:d,className:u,useDragHandler:c,children:p}=i,h=iu(i,["gridSize","draggable","onResizeStart","onResizing","onResizeEnd","style","className","useDragHandler","children"]),{isInlineEditing:g}=this.props,m=(0,t.classNames)("exb-rnd",u,{"functional-widget":!this.props.isLayoutWidget}),y="string"==typeof d?JSON.parse(d):Object.assign({},d);return this.props.forceAspectRatio&&(y.height="auto"),(0,t.jsx)("div",{className:m,ref:this.ref,css:this.getStyle(g),"data-layoutid":this.props.layoutId,"data-layoutitemid":this.props.layoutItemId,"data-repeatable":this.props.supportRepeat,style:y},(0,t.jsx)("div",{className:"rnd-aspect-ratio-wrapper"},(0,t.jsx)(e,Object.assign({layoutId:this.props.layoutId,className:"w-100",layoutItemId:this.props.layoutItemId},h))),p)}))}}o.defaultProps={left:!0,top:!0,right:!0,bottom:!0,restrict:!1,onResizeStart:su,onResizing:su,onResizeEnd:su,onDragStart:su,onDragging:su,onDragEnd:su};const i=ou(o,e);return t.ReactRedux.connect(nu)(i)}}})(),h})())}}}));