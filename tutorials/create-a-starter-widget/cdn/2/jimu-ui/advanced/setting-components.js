System.register(["jimu-arcgis","jimu-core","jimu-core/data-source","jimu-core/react","jimu-for-builder","jimu-for-builder/templates","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/expression-builder","jimu-ui/advanced/resource-selector","jimu-ui/advanced/setting-components","jimu-ui/advanced/utility-selector","jimu-ui/basic/list-tree"],(function(e,t){var i={},o={},s={},a={},n={},l={},r={},c={},d={},p={},u={},m={},g={},h={},v={};return{setters:[function(e){i.MapViewManager=e.MapViewManager},function(e){o.AllDataSourceTypes=e.AllDataSourceTypes,o.CONSTANTS=e.CONSTANTS,o.ContainerType=e.ContainerType,o.DataSourceComponent=e.DataSourceComponent,o.DataSourceManager=e.DataSourceManager,o.DataSourceStatus=e.DataSourceStatus,o.DataSourceTypes=e.DataSourceTypes,o.DialogMode=e.DialogMode,o.ExpressionPartType=e.ExpressionPartType,o.Immutable=e.Immutable,o.JimuFieldType=e.JimuFieldType,o.LayoutItemType=e.LayoutItemType,o.LayoutParentType=e.LayoutParentType,o.LayoutType=e.LayoutType,o.LinkType=e.LinkType,o.LoadingType=e.LoadingType,o.MultipleDataSourceComponent=e.MultipleDataSourceComponent,o.OrderRule=e.OrderRule,o.PagePart=e.PagePart,o.PageType=e.PageType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.ReactResizeDetector=e.ReactResizeDetector,o.ServiceManager=e.ServiceManager,o.SessionManager=e.SessionManager,o.SupportedUtilityType=e.SupportedUtilityType,o.UtilityManager=e.UtilityManager,o.appConfigUtils=e.appConfigUtils,o.cancelablePromise=e.cancelablePromise,o.classNames=e.classNames,o.css=e.css,o.dataSourceUtils=e.dataSourceUtils,o.defaultMessages=e.defaultMessages,o.esri=e.esri,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.injectIntl=e.injectIntl,o.jsx=e.jsx,o.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,o.lodash=e.lodash,o.moduleLoader=e.moduleLoader,o.polished=e.polished,o.proxyUtils=e.proxyUtils,o.urlUtils=e.urlUtils},function(e){s.dataSourceJsonCreator=e.dataSourceJsonCreator},function(e){a.useEffect=e.useEffect,a.useState=e.useState},function(e){n.builderAppSync=e.builderAppSync,n.getAppConfigAction=e.getAppConfigAction},function(e){l.getAnchoredWindowTemplates=e.getAnchoredWindowTemplates,l.getFixedModalWindowTemplates=e.getFixedModalWindowTemplates,l.getFixedNonModalWindowTemplates=e.getFixedNonModalWindowTemplates,l.getFullScreenGridPageTemplates=e.getFullScreenGridPageTemplates,l.getFullScreenPageTemplates=e.getFullScreenPageTemplates,l.getScrollingPageTemplates=e.getScrollingPageTemplates,l.getWindowTemplates=e.getWindowTemplates},function(e){r.searchUtils=e.searchUtils,r.utils=e.utils},function(e){c.Theme2GlobalStyleClassName=e.Theme2GlobalStyleClassName,c.ThemeGlobalStyleClassName=e.ThemeGlobalStyleClassName,c.ThemeSwitchComponent=e.ThemeSwitchComponent,c.UseTheme2Context=e.UseTheme2Context,c.getBoxStyles=e.getBoxStyles,c.getBuilderThemeVariables=e.getBuilderThemeVariables,c.getTheme=e.getTheme,c.getTheme2=e.getTheme2,c.popperPointer=e.popperPointer,c.registerStyles=e.registerStyles,c.styled=e.styled,c.useTheme=e.useTheme,c.withStyles=e.withStyles,c.withTheme=e.withTheme},function(e){d.AdvancedButtonGroup=e.AdvancedButtonGroup,d.Alert=e.Alert,d.Button=e.Button,d.Checkbox=e.Checkbox,d.CollapsableCheckbox=e.CollapsableCheckbox,d.CollapsablePanel=e.CollapsablePanel,d.CollapsableRadio=e.CollapsableRadio,d.CollapsableToggle=e.CollapsableToggle,d.Collapse=e.Collapse,d.ConfirmDialog=e.ConfirmDialog,d.Container=e.Container,d.Dropdown=e.Dropdown,d.DropdownButton=e.DropdownButton,d.DropdownItem=e.DropdownItem,d.DropdownMenu=e.DropdownMenu,d.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,d.FormGroup=e.FormGroup,d.Icon=e.Icon,d.Input=e.Input,d.Label=e.Label,d.Link=e.Link,d.Loading=e.Loading,d.LoadingType=e.LoadingType,d.Modal=e.Modal,d.ModalBody=e.ModalBody,d.ModalFooter=e.ModalFooter,d.ModalHeader=e.ModalHeader,d.NumericInput=e.NumericInput,d.Option=e.Option,d.PanelHeader=e.PanelHeader,d.Popper=e.Popper,d.Radio=e.Radio,d.Row=e.Row,d.Select=e.Select,d.Switch=e.Switch,d.Tab=e.Tab,d.Tabs=e.Tabs,d.TextInput=e.TextInput,d.Toast=e.Toast,d.ToastType=e.ToastType,d.Tooltip=e.Tooltip,d.UrlInput=e.UrlInput,d.defaultMessages=e.defaultMessages,d.getFallbackPlacementsModifier=e.getFallbackPlacementsModifier,d.isOutBoundary=e.isOutBoundary,d.utils=e.utils},function(e){p.DataSourceSelector=e.DataSourceSelector,p.FieldSelector=e.FieldSelector,p.FieldSelectorWithFullTextIndex=e.FieldSelectorWithFullTextIndex,p.dataComponentsUtils=e.dataComponentsUtils},function(e){u.ExpressionInput=e.ExpressionInput,u.ExpressionInputType=e.ExpressionInputType},function(e){m.IconPicker=e.IconPicker},function(e){g.SettingRow=e.SettingRow,g.SettingSection=e.SettingSection,g.SidePopper=e.SidePopper},function(e){h.UtilitySelector=e.UtilitySelector,h.addNewUtility=e.addNewUtility,h.extractService=e.extractService},function(e){v.List=e.List,v.Tree=e.Tree,v.TreeAlignmentType=e.TreeAlignmentType,v.TreeCollapseStyle=e.TreeCollapseStyle,v.TreeItemActionType=e.TreeItemActionType,v.TreeStyle=e.TreeStyle}],execute:function(){e((()=>{var e={71245:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"><path fill="#000" fill-rule="evenodd" d="M2.596 6.357c.39-.59.944-1.055 1.595-1.337L15.544.094a1.14 1.14 0 0 1 .91 0L30 5.97V23.66a3.6 3.6 0 0 1-.596 1.983 3.65 3.65 0 0 1-1.595 1.337l-11.353 4.927a1.14 1.14 0 0 1-.91 0L2 26.029V8.34a3.6 3.6 0 0 1 .596-1.984m3.419 15.162q.014.024.037.038l9.594 5.351a.72.72 0 0 0 .705 0l9.144-5.103a1 1 0 0 0 .37-.356.95.95 0 0 0 .135-.488v-9.89a.85.85 0 0 0-.122-.438.9.9 0 0 0-.331-.32l-9.497-5.3a.1.1 0 0 0-.104 0l-2.415 1.348a.1.1 0 0 0-.026.025.066.066 0 0 0 .026.092l8.947 4.992c.39.218.716.532.941.91.226.378.345.807.345 1.243v5.514q0 .121-.062.226a.46.46 0 0 1-.172.165l-5.633 3.145a3.9 3.9 0 0 1-1.899.49c-.666 0-1.32-.169-1.898-.49L8.972 19.81a1.46 1.46 0 0 1-.542-.524 1.4 1.4 0 0 1-.198-.715V11.76a.07.07 0 0 1 .07-.068q.018 0 .035.009l7.651 4.268q.076.043.121.117a.3.3 0 0 1 .045.16v2.526q0 .019.009.034a.07.07 0 0 0 .06.033.1.1 0 0 0 .035-.009l1.972-1.1c.28-.156.511-.38.673-.651.161-.27.247-.577.247-.89v-.964c0-.278-.076-.55-.22-.79-.144-.241-.35-.44-.598-.58L9.65 9.011a.89.89 0 0 0-.86 0L6.052 10.54a.104.104 0 0 0-.052.088v10.842q0 .027.015.05" clip-rule="evenodd"></path></svg>'},56499:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707z"></path></svg>'},32881:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1-5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2" clip-rule="evenodd"></path></svg>'},76490:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m1.373 8 2.07-2.071.83.828L2.2 8.828a3.515 3.515 0 0 0 4.97 4.971l2.072-2.071.828.828L8 14.627A4.686 4.686 0 1 1 1.373 8M13.799 7.172l-2.071 2.07.828.83L14.627 8A4.686 4.686 0 1 0 8 1.373l-2.071 2.07.828.83L8.828 2.2a3.515 3.515 0 0 1 4.971 4.97"></path><path fill="#000" d="M5.515 9.657a.586.586 0 0 0 .828.828l4.142-4.142a.586.586 0 0 0-.828-.828z"></path></svg>'},18249:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1 2h14v12H1zm13 1H2v4h12zm0 5h-3v2h3zm0 3h-3v2h3zm-4 2v-2H6v2zm-5 0v-2H2v2zm-3-3h3V8H2zm8-2v2H6V8z" clip-rule="evenodd"></path></svg>'},30655:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .54.54 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.54.54 0 0 1 0-.738" clip-rule="evenodd"></path></svg>'},16435:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M3.646 10.354a.5.5 0 0 0 .708-.708L2.707 8h10.586l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L13.293 7H2.707l1.647-1.646a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708z"></path></svg>'},52943:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},14962:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1.5 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM1 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M1.5 9a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zM1.5 12a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z"></path></svg>'},54578:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1.5 13a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zM1 9.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5M1.5 7a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1zM1.5 4a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1z"></path></svg>'},94064:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .54.54 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.54.54 0 0 1 0 .738" clip-rule="evenodd"></path></svg>'},57993:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M10.354 12.354a.5.5 0 0 0-.708-.708L8 13.293V2.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 1 0 .708.708L7 2.707v10.586l-1.646-1.647a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0z"></path></svg>'},62838:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},12046:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.227 1.312c-.404-.404-1.045-.417-1.432-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431zm-8.114 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402z" clip-rule="evenodd"></path><path fill="#000" d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z"></path></svg>'},23662:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5"></path></svg>'},29435:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M14.938 8A7 7 0 0 1 1.01 9H0a8.001 8.001 0 0 0 15.938-1A8 8 0 0 0 1.02 3.98L1 .702a.5.5 0 1 0-1 .006L.031 5.9l5.128-.826a.5.5 0 0 0-.16-.987L1.819 4.6A7 7 0 0 1 14.938 8"></path></svg>'},50170:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707z" clip-rule="evenodd"></path></svg>'},96745:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m1 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.676 2.228H7.34c-.213-1.138.621-2.13 1.375-3.025C9.28 6.532 9.8 5.914 9.8 5.328 9.8 4.5 9.2 3.9 7.976 3.9c-.816 0-1.572.36-2.268 1.092l-.648-.6C5.852 3.552 6.788 3 8.096 3c1.692 0 2.772.864 2.772 2.244 0 .864-.652 1.628-1.3 2.387-.71.831-1.413 1.655-1.244 2.597m.3 2.172c0 .48-.348.792-.768.792-.432 0-.78-.312-.78-.792s.348-.804.78-.804c.42 0 .768.324.768.804" clip-rule="evenodd"></path></svg>'},28996:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47zM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"></path></svg>'},62686:e=>{"use strict";e.exports=i},79244:e=>{"use strict";e.exports=o},41349:e=>{"use strict";e.exports=s},68972:e=>{"use strict";e.exports=a},4108:e=>{"use strict";e.exports=n},16884:e=>{"use strict";e.exports=l},41496:e=>{"use strict";e.exports=r},1888:e=>{"use strict";e.exports=c},14321:e=>{"use strict";e.exports=d},13089:e=>{"use strict";e.exports=p},84845:e=>{"use strict";e.exports=u},35809:e=>{"use strict";e.exports=m},79298:e=>{"use strict";e.exports=g},71371:e=>{"use strict";e.exports=h},98640:e=>{"use strict";e.exports=v}},t={};function f(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,f),s.exports}f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},f.d=(e,t)=>{for(var i in t)f.o(t,i)&&!f.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var y={};return(()=>{"use strict";f.r(y),f.d(y,{ByFieldSeriesX:()=>Oo,ByFieldSeriesY:()=>Po,CardLayout:()=>oa,CardLayoutSetting:()=>ua,CollapsableCheckbox:()=>Se,CollapsableRadio:()=>ye,CollapsableResetPanel:()=>Si,CollapsableToggle:()=>fe,DEFAULT_GEOCODE_KEY:()=>Io,DEFAULT_MAX_SUGGESTION:()=>wo,DefaultAddress:()=>Ao,DefaultAddressAlias:()=>Eo,DefaultGeocodeLabel:()=>Fo,DefaultGeocodeURL:()=>Uo,DirectionSelector:()=>po,JimuLayerViewSelector:()=>se,JimuLayerViewSelectorDeprecated:()=>H,JimuLayerViewSelectorDropdown:()=>ne,JimuMapViewSelector:()=>ce,LabelReset:()=>bi,LinkSelector:()=>ut,LinkSelectorContent:()=>Ye,LinkSelectorSidePopper:()=>st,LinkSetting:()=>Xe,LinkSettingPopup:()=>at,MAX_RECENT_SEARCHES:()=>Co,MAX_SUGGESTION:()=>xo,MapWidgetSelector:()=>W,MaxCategories:()=>To,MaxPieces:()=>No,MaxSeries:()=>Ro,MultipleJimuMapConfig:()=>ia,ObjectIdSchema:()=>es,OpenTypes:()=>be,OutStatisticFieldNameSplit:()=>Mo,OutputDsAddress:()=>Do,OutputDsObjectField:()=>Lo,PageTemplatePopper:()=>Oi,ProxySetting:()=>At,ProxySettingPopup:()=>zt,QuickStylePopper:()=>bo,RadioGroup:()=>ge,SearchDataSetting:()=>qs,SearchDataType:()=>jo,SearchGeneralSetting:()=>Xs,SearchServiceType:()=>ko,SearchSuggestionSetting:()=>Ys,SettingCollapse:()=>he,SettingLayout:()=>t,SettingRow:()=>D,SettingSection:()=>k,SidePopper:()=>it,SizeMode:()=>uo,SizeModeSelector:()=>go,SortSetting:()=>eo,SortTree:()=>ci,SortTreePopper:()=>pi,Status:()=>sa,StylePicker:()=>pe,TemplateList:()=>Ii,TemplateSelector:()=>Mi,UnControlledSettingCollapse:()=>ve,WidgetList:()=>ii,WidgetListPopper:()=>ni,WindowTemplatePopper:()=>Ni,_JimuLayerViewSelector:()=>oe,_JimuLayerViewSelectorDropdown:()=>ae,_JimuMapViewSelector:()=>re,_LinkSelector:()=>pt,_LinkSelectorContent:()=>Qe,_LinkSelectorSidePopper:()=>ot,_MapWidgetSelector:()=>z,_SidePopper:()=>tt,changeCurrentDialog:()=>va,changeCurrentPage:()=>ha,checkIsUseDsChanged:()=>rs,checkIsWidgetJsonDsChanged:()=>cs,getAddressFieldsSchemaAndDefaultFieldName:()=>os,getAllDataSourceBySearchDataConfig:()=>Ss,getAllDsByDataConfigWithMapCentric:()=>ys,getConfigIdList:()=>ds,getDefaultField:()=>vs,getDefaultGeocodeConfig:()=>Xo,getDsInWidgetJson:()=>bs,getDsJsonOfOriginDs:()=>fs,getInitOutDataSource:()=>ss,getInitSchema:()=>ts,getNameOfDefaultAddressField:()=>is,getNewConfigId:()=>ps,getNewDataSourceConfig:()=>hs,getNewDsConfigItem:()=>gs,getOutputDataSourceId:()=>ms,getOutputDsJson:()=>ws,getOutputJsonOriginDs:()=>as,getWhetherDsInUseDataSources:()=>ns,handelDialogInfos:()=>ma,isDsInDataSources:()=>ls,proxySettingUtils:()=>i,setLayoutAuto:()=>la,setLayoutCustom:()=>ra});var e={};f.r(e),f.d(e,{JimuLayerViewSelector:()=>w,JimuLayerViewSelectorDeprecated:()=>h,JimuLayerViewSelectorDropdown:()=>b,LinkSelectorContent:()=>d,ProxySetting:()=>p,ProxySettingPopup:()=>u,RadioGroup:()=>m,SettingCollapse:()=>c,SettingRow:()=>r,SettingSection:()=>l,SidePopper:()=>g,SortSetting:()=>a,StylePicker:()=>n,WidgetSelector:()=>s});var t={};f.r(t),f.d(t,{SettingRow:()=>D,SettingSection:()=>k});var i={};f.r(i),f.d(i,{deleteProxies:()=>Ct,getCreateProxyUrl:()=>kt,getDeleteProxyUrl:()=>Ot,getNeedProxyDataSources:()=>vt,getNeedProxyItems:()=>ht,getNeedProxyUtilities:()=>ft,getProxyJsonFromSourceUrl:()=>St,getProxyRootUrl:()=>jt,isRegisteredApp:()=>wt,isSameProxy:()=>bt,needToConfigProxy:()=>xt});var o=f(79244);const s=e=>{const t=e.theme;return o.css`
    .component-choose-widget-popup{
      .widget-card-active-btn{
        outline: none;
      }
    }
    div.component-choose-widget-popup-modal{
      width: 850px;
      max-width: 850px;
      height: 600px;
      background: ${t.ref.palette.white};
      border-radius: 4px;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      .component-choose-widget-clear-border{
        border: 0;
        padding: 0;
      }
      .modal-content{
        border: 0;
        padding: 20px 10px 20px 40px;
        position: static;
      }
      .component-choose-widget-modal-header{
        .choose-widget-popup-close{
          width: 50px;
          height: 50px;
          display: inline-block;
          right: 28px;
          position: absolute;
          top: 10px;
          &:hover{
            cursor: pointer;
          }
        }
        .choose-widget-popup-close:after{
          content: '';
          display: inline-block;
          width: 16px;
          height: 16px;
          background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVQ4jaWSLQ7EIBhEv2LxnAzP1cBzAU6DhKCpZneaQHYpP2k6omreCzA9yjf0IgyfGCMZY+g8zy2ADrpgmsA5R977raTC6IJpAiklCSEopTSVVBgddME0AeeclFJTSQ+jCwY5fh9xVERm8E0wkiAzeCjoJcgMbm/wJjdBf4XdOmwF49irdf4Es6l2E7MVXLOSXAJr7XKqkQTMFcwYQiha65JzLruggy4YZPgfPMkHXzQME+F7oHYAAAAASUVORK5CYII="});
          position: relative;
          left: 18px;
          top: 12px;
        }
      }
      .component-choose-widget-modal-body{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        margin: 40px 0 10px 0;
        .widget-card-item{
          width: 70px;
          height: 120px;
          border: 0;
          margin: 0 30px 0 0;
          &:hover{
            cursor: pointer;
          }
          .widget-card-image{
            width: 70px;
            height: 70px;
            border: 1px solid #ccc;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            >div{
              width: 30px;
              height: 30px;
              position: relative;
              &:after{
                display: none;
              }
            }
          }
          .widget-card-content{
            font-size: 12px;
            color: #000;
            letter-spacing: 0.33px;
            padding: 2px;
            text-align: center;
            line-height: 14px;
          }
        }
        .widget-card-selected{
          .widget-card-image{
            border: 2px solid #0C5CB6;
            >div:after{
              content: '';
              display: block;
              width: 16px;
              height: 16px;
              position: absolute;
              top: -20px;
              right: -20px;
              background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA20lEQVQ4jWPkidn2n4ECwESJ5iFgABsLI8PBRiuGS732DKJ8bKQbwMHKzKAqyc0gK8zBIMDNilUNI6FYkBBgBxrExPDg9Xes8iy4NIZYSDJ4GYkx/Pj1j6F25Q2cFuD0wo2nXxi42ZkZYu1lGMItpUg34Mrjzwx//0HYT9//IN0AFiZGBjstIaAh/xkOXntLugHGyvwM/FysDBcefGT48PUP6QaI8ELinZ2FicFGQ4iBnRW7UmY2vegGbBIPXn1j+P//P8OXn38ZPn77zXDxwSesBhBMB4QAxXkBAMaDOywJrob4AAAAAElFTkSuQmCC"});
            }
          }
        }
      }
      .component-choose-widget-modal-footer{
        position: absolute;
        bottom: 20px;
        right: 40px;
        >button{
          font-size: 14px;
          letter-spacing: 0.39px;
          text-align: center;
          vertical-align: middle;
        }
        button:first-of-type {
          background-color: #0075D0;
          border: 1px solid  #0075D0;
          border-radius: 3px;
          color: #ffffff;
        }
        button:last-of-type{
          background-color: #ffffff;
          border: 1px solid #CCCCCC;
          border-radius: 3px;
          color: #000000;
        }
      }
    }
  `},a=e=>{const t=e.theme;return o.css`
    width:100%;
    &.single-row-item {
        .select-con {
            padding: ${o.polished.rem(10)} ${o.polished.rem(0)};
            .option-name-con {
                margin-bottom: 0;
                .close-con>span {
                    margin-left: ${o.polished.rem(10)};
                }
            }
        }
    }
    .padding-0 {
        padding: 0;
    }
    .jimu-tree-item {
        margin-bottom:${o.polished.rem(10)};
    }
    .jimu-tree-item__draggable {
        box-shadow: 0 0 0 2px ${o.polished.rgba(t.ref.palette.white,.3)};
    }
    .add-option-btn {
        & {
            color:${t.sys.color.primary.light};
            margin-top:${o.polished.rem(10)};
            margin-bottom: ${o.polished.rem(17)};
            cursor: pointer;
            font-size:13px;
            overflow: hidden;
            padding: 0;
        }
        .add-option-icon{
            margin-right: 4px;
        }
    }
    .no-sort-remind {
        margin: 70px auto 0;
        color: ${t.ref.palette.neutral[700]};
        font-size: 13px;
        text-align: center;
    }
    .select-con {
        & {
            box-sizing:border-box;
            padding-right: ${o.polished.rem(10)};
            padding: ${o.polished.rem(8)} ${o.polished.rem(10)} ${o.polished.rem(10)} ${o.polished.rem(6)};
        }
        .option-name-con {
            & {
              display: flex;
              align-items: center;
              margin-bottom:${o.polished.rem(5)};
              width: 100%;
            }
            .option-name {
              font-size: 13px;
              line-height: 13px;
              color: ${t.ref.palette.neutral[1100]};
              height: ${o.polished.rem(30)};
              line-height: ${o.polished.rem(25)};
              cursor: pointer;
              overflow: hidden;
              width: 0;
              padding-right: ${o.polished.rem(4)};
              .edit-input {
                max-width: 88%;
                input {
                    width: 80px;
                }
                input:placeholder-shown {
                    text-overflow: ellipsis;
                }
              }
            }
            .option-name input {
                display:inline-block;
                width: auto;
                height: 100%;
            }
            .jimu-input {
                line-height: ${o.polished.rem(30)};
                vertical-align: middle;
            }
            .input-wrapper {
                vertical-align: middle;
            }
            .option-name-icon-con {
                margin-left: ${o.polished.rem(5)};
                svg {
                    margin-top:  ${o.polished.rem(5)};
                }
            }
            .option-name-icon {
                color: ${t.ref.palette.neutral[900]};
                cursor: pointer;
            }
            .option-name span {
                display: inline-block;
                text-overflow: ellipsis;
                overflow:hidden;
            }
            .close-con {
                svg {
                    margin: 0;
                    margin-top:  ${o.polished.rem(2)};
                }
            }
            .close-con>span {
                margin-right: ${o.polished.rem(10)};
                color: ${t.ref.palette.black};
                cursor: pointer;
            }
        }

        .select-down-con {
            & {
                display: flex;
                align-items: center;
                height: ${o.polished.rem(34)};
            }
            .sort-arrow-down-icon {
                margin-right: 0;
            }
            .select-input {
                flex-grow:1;
                color: ${t.ref.palette.neutral[1200]};
            }
            .sort-button {
                margin-left: 5px;
                cursor: pointer;
                border:none;
            }
            .sort-field-selector {
                & {
                    background:${t.sys.color.secondary.light};
                    border-radius: 2px;
                    flex-grow: 1;
                    width: 0;
                }
            }
        }
    }


  `},n=e=>{const t=e.theme;return o.css`
    .widget-setting--stylepicker {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }

    .widget-setting--stylepicker-item {
      height: 93px;
      border: 1px solid ${t.ref.palette.neutral[500]};
      background-color: ${t.ref.palette.white};
      background-repeat: no-repeat;
      background-position: center;
      &:hover {
        border-color: ${t.sys.color.primary.main};
      }
      &.active {
        border: 2px solid ${t.sys.color.primary.main};
      }
      &.full-width {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
  `},l=e=>{const t=e.theme;return o.css`
    padding: ${t.sys.spacing(4)};
    border-bottom: 1px solid ${t.ref.palette.neutral[700]};

    &:last-child {
      border-bottom: 0 none;
    }

    &:nth-of-type(1):nth-last-of-type(1) {
      border-bottom: 0 none;
    }

    .jimu-widget-setting--section-header {
      > h6 {
        color: ${t.ref.palette.neutral[1e3]};
        font-weight: ${t.ref.typeface.fontWeightMedium};
        margin-bottom: 0;
      }
      + * {
        margin-top: ${t.sys.spacing(4)};
      }
    }

    .jimu-widget-setting--section-header {
      &.row {
        margin-left: 0;
        margin-right: 0;
      }
    }
  `},r=e=>{const t=e.theme,i=e.flow,s=e.action;return o.css`
    &.jimu-widget-setting--row {
      margin-bottom: 0;
      margin-left: 0;
      margin-right: 0;
      &:first-of-type {
        margin-top: 0;
      }
      + .jimu-widget-setting--row {
        margin-top: ${t.sys.spacing(4)};
      }
    }
    &.bottom-line {
      padding-bottom: ${t.sys.spacing(4)};
      border-bottom: 1px solid ${t.ref.palette.neutral[500]};
    }
    &,
    .jimu-widget-setting--row-header {
      > .jimu-widget-setting--row-label {
        font-size: 0.8125rem;
        font-weight: 500;
        color: ${t.ref.palette.neutral[900]};
      }
    }
    > .jimu-widget-setting--row-label {
      display: inline-block;
      margin-bottom: ${"wrap"===i?s?"0":t.sys.spacing(2):"0"};
      margin-right: 20px;
    }
    > input {
      &[type='number'] {
        width: 50px;
        flex-shrink: 0;
      }
    }
    input {
      &[type='number'] {
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
    .jimu-widget-setting--row-header {
      display: flex;
      width: 100%;
      align-items: center;
      margin-bottom: 0.75rem;
      > .btn {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }
      .jimu-widget-setting--row-label {
        text-align: left;
        flex: 1;
        margin-bottom: 0;
      }
    }
    &.form-inline {
      flex-wrap: nowrap;
      .jimu-widget-setting--row-label {
        max-width: 80%;
        + * {
          flex-shrink: 0;
        }
      }
    }
  `},c=e=>{var t,i,s,a,n,l;const r=null==e?void 0:e.isOpen,c=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:"default",d=e.theme,p=null===(s=null===(i=null==d?void 0:d.ref.palette)||void 0===i?void 0:i.neutral)||void 0===s?void 0:s[500],u=null===(n=null===(a=null==d?void 0:d.ref.palette)||void 0===a?void 0:a.neutral)||void 0===n?void 0:n[700],m=null===(l=null==d?void 0:d.sys.color)||void 0===l?void 0:l.primary.main;return"primary"!==c?o.css`
    .dividing-line {
      background-color: ${u};
    }
    `:o.css`
    .handle {
      border-top: 2px solid ${r?m:p};
      background-color: ${p};
      .title {
        padding-left: 8px;
        padding-right: 8px;
      }
    }
    .dividing-line {
      background-color: ${u};
    }
    `};function d(e){var t,i,s,a,n;const l=e.theme,r=null!==(s=null===(i=null===(t=null==l?void 0:l.ref)||void 0===t?void 0:t.palette)||void 0===i?void 0:i.neutral[500])&&void 0!==s?s:"#ccc",c=null!==(n=null===(a=null==l?void 0:l.sys)||void 0===a?void 0:a.color.primary.main)&&void 0!==n?n:"blue",d=o.polished.rgba(r,.5);return window.jimuConfig.isInBuilder?o.css`
    .widget-builder-link-selector {
      .collapse-btn{
        margin-right: ${o.polished.rem(-16)};
      }
      .option-name{
        font-size: ${o.polished.rem(13)};
        color: ${l.ref.palette.neutral[900]};
      }
      .link-selector-list {
        .view-border{
          border-width: 1px;
          border-style: solid;
        }
        .link-selector-list-item {
          height: ${o.polished.rem(30)};
          cursor: pointer;

          &:hover {
            background-color: ${d};
          }
        }

        .link-selector-list-select {
          background-color: ${d};
        }
      }

      select {
        padding-top: ${o.polished.rem(2)} !important;
      }

      .item-selected {
        background-color: ${c} !important;
      }

      .form-check-input {
        span {
          background: #00A6B6 !important;
        }
      }

      .form-check-input:hover {
        border-color: gray;
      }

      input[type='radio'].form-check-input {
        -webkit-appearance: none;
        -moz-appearance: none;
        background: transparent;
        border: 1px solid #000;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        transition: all 0.2s ease;
        &:before {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: #00A6B6 !important;
        margin: 8px;
        transition: all 0.2s ease-out;
        }
        &:hover {
        border-color: #00A6B6 !important;
        }
        &:checked {
        &:before {
            width: 8px;
            height: 8px;
            margin: 3px;
        }
        }
      }
      .link-setting-cursor-pointer{
        cursor: pointer;
      }
      .open-type-label{
        width: 100%;
        display: block;
      }
    }
    .url-error-container{
      *{
        color: ${l.sys.color.error.main};
      }
      div{
        width: calc(100% - 20px);
        margin-left: 4px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  `:o.css`
    .widget-builder-link-selector {
      .collapse-btn{
        position: absolute;
        right: ${o.polished.rem(-4)};
      }
      .option-name{
        font-size: ${o.polished.rem(13)};
        color: ${l.ref.palette.neutral[900]};
        font-weight: 500;
      }
      .item-common{
        background: ${l.ref.palette.white};
      }
      .view-border{
        border: 1px solid ${l.ref.palette.neutral[500]};
      }
      .link-selector-list {

        .link-selector-list-item {
          height: ${o.polished.rem(30)};
          cursor: pointer;

          &:hover {
            background-color: ${d};
          }
        }

        .link-selector-list-select {
          background-color: ${d};
        }
      }

      select {
        padding-top: ${o.polished.rem(2)} !important;
      }

      .item-selected {
        background-color: ${c} !important;
      }
      .link-setting-cursor-pointer{
        cursor: pointer;
      }
      .open-type-label{
        width: 100%;
        display: block;
      }
      .url-error-container{
        *{
          color: ${l.sys.color.error.main};
        }
        div{
          width: calc(100% - 20px);
          margin-left: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  `}function p(e){const t=e.theme;return o.css`
    color: ${t.ref.palette.neutral[1e3]};
    .font-size-13{
      font-size: ${o.polished.rem(13)} !important;
    }
    .subscriber-warning{
      font-size: ${o.polished.rem(13)};
    }
    .secondary-title{
      font-size: ${o.polished.rem(14)};
    }
    .content-table{
      font-size: ${o.polished.rem(13)};
      color: ${t.ref.palette.neutral[1100]};
    }
    .content-table-header{
      height: ${o.polished.rem(32)};
      background-color: ${t.ref.palette.neutral[500]};
      display: block;
      line-height: ${o.polished.rem(30)};
    }
    .content-table-tr{
      height: ${o.polished.rem(39)};
      line-height: ${o.polished.rem(39)};
      border-bottom: 1px solid ${t.ref.palette.neutral[500]};
    }
    .col-4, .col-2{
      height: 100%;
    }
    .request-limit{
      margin-top: ${o.polished.rem(6)};
    }
    .request-interval{
      display: block;
      margin-top: ${o.polished.rem(-3)};
    }
  `}function u(e){const t=e.theme;return o.css`
    max-width: ${o.polished.rem(960)} !important;
    .header{
      font-size: ${o.polished.rem(16)};
      color: ${t.ref.palette.neutral[1e3]};
    }
    .proxy-setting-container{
      width: ${o.polished.rem(960)};
      height: ${o.polished.rem(640)};
      border: 0;
      color: ${t.ref.palette.neutral[1e3]};
    }
    .px-30{
      padding-right: ${o.polished.rem(30)};
      padding-left: ${o.polished.rem(30)};
    }
  `}const m=e=>{const t=e.theme,i=e.gutter;return o.css`
    margin-bottom: 0;
    label {
      display: inline-flex;
      align-items: center;
      margin-right: ${i||t.sys.spacing(4)};
      .jimu-radio {
        margin-right: 8px;
      }
    }
  `};function g(e){const t=e.theme;return o.css`
    width: ${o.polished.rem(260)};
    height: calc(100% - 70px);
    padding: 0;
    overflow: hidden;
    border-radius: 0;
    box-shadow: 0 0 0;
    border-left: 1px solid ${t.ref.palette.neutral[700]};
    border-right: 1px solid ${t.ref.palette.neutral[700]};
    border-top: 0;
    border-bottom: 0;
    margin: 0 !important;
  `}const h=e=>{const t=e.theme;return o.css`
    .dropdown-menu--inner {
      background-color: ${t.sys.color.secondary.light};
      padding: 0;
    }

    .dropdown-toggle-content {
      width: 100%;
    }

    .layerviewselector-input {
      width: 100%;
      height: 30px !important;
      background-color: ${t.sys.color.secondary.light};
      &:hover {
        background-color: ${t.sys.color.secondary.light};
      }
      flex-direction: unset !important;
    }

    .layerviewselector-input-text {
      max-width: calc(100% - 13px);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .layerviewselector-bg {
      max-height: 270px;
      overflow-y: auto;
      background-color: ${t.sys.color.secondary.light};
    }

    .layerviewselector-item-bg {
      cursor: pointer;
    }

    .layerviewselector-item-bg:hover {
      background-color: ${t.sys.color.primary.main};
    }

    .layerviewselector-ds-item {
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    .layerviewselector-ds-item:hover {
      background-color: ${t.sys.color.primary.main};
    }

    .layerviewselector-ds-item-selected {
      background-color: ${t.sys.color.primary.main};
    }
  `};var v=f(1888);function S(e,t){const i=e.sizes[t];return`\n    height: ${"auto"!==i.height?i.height:function(e,t){const i=o.polished.math(`\n    ${e.fontSize} * ${e.lineHeight} +\n    ${e.paddingY} * 2`);return"0"===t.toString()?i:`calc(${i} + ${t} * 2)`}(i,e.border.width)};\n    padding: ${i.paddingY} ${i.paddingX};\n    font-size: ${i.fontSize};\n    line-height: ${i.lineHeight};\n    border-radius: ${i.borderRadius};\n  `}const b=e=>{var t,i;const s=e.theme,a=null==e?void 0:e.buttonProps,n=null===(t=null==s?void 0:s.components)||void 0===t?void 0:t.input;return o.css`
    width: 100%;
      > .dropdown{
        > .dropdown-button {
          text-align: start;
        }
      }
      ${null!==(i=null==a?void 0:a.type)&&void 0!==i?i:o.css`
      /* Button override */
        > .dropdown{
          > .dropdown-button {
            &,
            &:hover {
              color: ${n.color};
              background-color: ${n.bg};
              background-clip: padding-box;
              box-shadow: ${n.boxShadow};
              transition: ${n.transition};
              text-decoration: none;
              ${S(n,"sm")}
              ${(0,v.getBoxStyles)(n)}
            }
            &[aria-expanded="true"] {
              color: ${n.color};
              background-color: ${n.focus.bg};
              border-color: ${n.focus.borderColor};
              text-decoration: none;
              box-shadow: ${n.boxShadow}, ${n.focus.boxShadow};
            }
          }
        }
      `}

  `},w=e=>{const t=e.isInDropdown?"366px":"calc(100% - 34px)";return o.css`
    .tree-container{
      margin-top: 16px;
      height: ${t};
    }
    `};var x=f(4108),C=f(14321),I=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};class j extends o.React.PureComponent{render(){const e=this.props,{className:t,style:i,title:s,role:a,children:n}=e,l=I(e,["className","style","title","role","children"]);return o.React.createElement(C.Container,{className:(0,o.classNames)(t,"jimu-widget-setting--section"),style:i,role:a,"aria-label":l["aria-label"],"aria-describedby":l["aria-describedby"]},s&&o.React.createElement(C.Row,{className:"jimu-widget-setting--section-header"},"string"==typeof s?o.React.createElement("h6",{className:"w-100 title2 hint-paper"},s):o.React.createElement("div",{className:"w-100 text-truncate title2 hint-paper"},s)),n)}}const k=(0,v.withStyles)(j,"SettingSection");var O=f(52943),P=f.n(O),T=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const N=e=>{const t=window.SVG,{className:i}=e,s=T(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:P()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var R=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const M=e=>o.React.createElement("div",{className:"jimu-widget-setting--row-header mb-4"},e.children);class L extends o.React.PureComponent{constructor(){super(...arguments),this.onActionClick=e=>{"drilldown"===e&&this.props&&this.props.onDrillDown&&this.props.onDrillDown()}}render(){const e=this.props,{action:t,flow:i,truncateLabel:s,label:a,role:n,indented:l,className:r,level:c=3,bottomLine:d=!1}=e,p=R(e,["action","flow","truncateLabel","label","role","indented","className","level","bottomLine"]),u="string"==typeof a?a:"",m=(0,o.classNames)(r,"jimu-widget-setting--row","form-group","align-items-center",{"form-inline":"wrap"!==i,"bottom-line":d,"pl-5":l}),g=t?"span":"label",h=a&&o.React.createElement(g,{title:u,className:(0,o.classNames)(`jimu-widget-setting--row-label justify-content-start flex-grow-1 text-break setting-row-text-level-${c} ${C.utils.getSetingTextClassesMap(c)}`,{"w-100 mr-0":"wrap"===i,"text-truncate":s})},a);return o.React.createElement(C.Row,{className:m,role:n,"aria-label":p["aria-label"]},"wrap"===i&&t?o.React.createElement(M,null,"drilldown"===t?o.React.createElement(C.Button,{size:"sm",type:"tertiary",onClick:()=>{this.onActionClick("drilldown")}},h,o.React.createElement(N,{className:"right-icon"})):void 0):h,this.props.children)}}const D=(0,v.withStyles)(L,"SettingRow");var A=f(41496);const E={label:"divider",divider:!0},U=(e,t)=>{var i,o;let s=[],a=[];for(let i=1;i<t.length;i++)if("dialogs"===t[i].type){e=i;break}return 1===e&&"dialogs"===(null===(i=t[1])||void 0===i?void 0:i.type)?a=t.slice(1):1===e&&"pages"===(null===(o=t[1])||void 0===o?void 0:o.type)?s=t.slice(1):(s=t.slice(1,e),a=t.slice(e)),{pageList:s,dialogList:a}};var F;!function(e){e.Page="pages",e.Dialog="dialogs",e.Widget="widgets"}(F||(F={}));const B=(e,t,i)=>e.sort(((e,o)=>{const s=i===F.Widget?t[i][e].label:t[i][e.id].label,a=i===F.Widget?t[i][o].label:t[i][o.id].label;return s.localeCompare(a,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})})),{useState:$}=o.React,z=e=>{var t;const{autoSelect:i=!0,onSelect:s,showLabel:a=!1,warningMessage:n="",isNeedConfirmBeforeChange:l}=e,r=o.hooks.useTranslation(C.defaultMessages),[c,d]=$(!1),[p,u]=$(null),m={id:"none",label:r("none")},g=o.ReactRedux.useSelector((e=>{var t,i;return(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig:e.appConfig})),h=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.browserSizeMode})),v=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentPageId})),f=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentDialogId})),y=f?o.ContainerType.Dialog:o.ContainerType.Page,S=f||v,b=o.React.useMemo((()=>((e,t,i,s)=>{const a=[];if(e[0].maps.length>0){a.push(E);const n={header:!0,label:i===o.ContainerType.Dialog?s("currentWindow"):s("currentPage")};a.push(n),B(e[0].maps,t,F.Widget).forEach((e=>{const n={id:e,label:t.widgets[e].label,headerLabel:i===o.ContainerType.Dialog?s("currentWindow"):s("currentPage")};a.push(n)}))}const n=U(1,e);let l=!1;const r=B(n.pageList,t,F.Page);for(let e=0;e<n.pageList.length;e++)if(n.pageList[e].maps.length>0){l||(a.push(E),l=!0);const i={header:!0,label:t.pages[r[e].id].label};a.push(i),B(r[e].maps,t,F.Widget).forEach((i=>{const o={id:i,label:t.widgets[i].label,headerLabel:t.pages[r[e].id].label};a.push(o)}))}if(n.dialogList){let e=!1;const i=B(n.dialogList,t,F.Dialog);for(let o=0;o<n.dialogList.length;o++)if(n.dialogList[o].maps.length>0){e||(a.push(E),e=!0);const s={header:!0,label:t.dialogs[i[o].id].label};a.push(s),B(i[o].maps,t,F.Widget).forEach((e=>{const s={id:e,label:t.widgets[e].label,headerLabel:t.dialogs[i[o].id].label};a.push(s)}))}}return a})(A.searchUtils.getMapWidgets(g,h,y,S),g,y,r)),[g,h,y,S,r]),[w,x]=$((null===(t=e.useMapWidgetIds)||void 0===t?void 0:t[0])||null),I=o.React.useRef(w);o.hooks.useUpdateEffect((()=>{var t,i;x((null===(t=e.useMapWidgetIds)||void 0===t?void 0:t[0])||null),I.current=(null===(i=e.useMapWidgetIds)||void 0===i?void 0:i[0])||null}),[e.useMapWidgetIds]),o.React.useEffect((()=>{if(i&&!e.useMapWidgetIds){const e=A.searchUtils.getMapWidgets(g,h,y,S),t=1===e[0].maps.length?e[0].maps[0]:null;t&&(null==s||s([t]))}}),[]);const j=e=>{const t=e.target.value;if(t===w)return;const i=t===m.id?[]:[t];l?null===I.current?(null==s||s(i),x(t)):d(!0):(null==s||s(i),x(t)),u(t)},k=(()=>{var t;if(!e.useMapWidgetIds||0===(null===(t=e.useMapWidgetIds)||void 0===t?void 0:t.length))return null;const i=e.useMapWidgetIds[0];return b.find((e=>e.id===i))||null})();return o.React.createElement("div",{className:"w-100 component-map-selector"},a&&o.React.createElement(C.Label,{title:r("selectMapWidget"),className:"jimu-widget-setting--row-label justify-content-start flex-grow-1 text-break title3 hint-default w-100 mr-0"},r("selectMapWidget")),o.React.createElement(C.Select,{size:"sm",value:k?k.id:m.id,"aria-label":e["aria-label"]||r("selectMapWidget"),"aria-describedby":e["aria-describedby"],"ally-description":e["ally-description"]},[m].concat(b).map(((e,t)=>o.React.createElement(C.Option,{header:e.header,divider:e.divider,value:e.id,key:t,onClick:j},!e.header&&o.React.createElement("div",{className:"sr-only"},e.headerLabel),e.label)))),n&&o.React.createElement(C.Alert,{tabIndex:0,className:"w-100 mt-2",open:!0,text:n,type:"warning"}),c&&o.React.createElement(C.ConfirmDialog,{level:"info",title:r("confirmTitle"),hasNotShowAgainOption:!1,content:e.confirmMessage,onConfirm:()=>{d(!1);const e=p,t=e===m.id?[]:[e];null==s||s(t),x(p)},onClose:()=>{d(!1)}}))},W=z;class V extends o.React.PureComponent{constructor(e){super(e),this.getIsLoading=()=>!!this.props.fromRootDsIds&&this.props.fromRootDsIds.some((e=>this.getIsSingleDsLoading(e))),this.getIsSingleDsLoading=e=>{const t=o.DataSourceManager.getInstance().getDataSource(e),i=null==t?void 0:t.getInfo();return!!i&&(i.instanceStatus!==o.DataSourceStatus.CreateError&&(i.instanceStatus!==o.DataSourceStatus.Created||!!t.isDataSourceSet()&&!t.areChildDataSourcesCreated()))},this.formatMessage=(e,t)=>{const i=Object.assign({},C.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:i[e]},t)},this.state={isLoading:this.getIsLoading()}}componentDidMount(){this.state.isLoading&&this.waitChildDssReady().finally((()=>{this.setState({isLoading:!1})}))}componentDidUpdate(e){e.fromRootDsIds!==this.props.fromRootDsIds&&this.setState({isLoading:this.getIsLoading()}),this.state.isLoading&&this.waitChildDssReady().finally((()=>{this.setState({isLoading:!1})}))}waitChildDssReady(){return this.props.fromRootDsIds?Promise.all(this.props.fromRootDsIds.map((e=>this.waitChildDssReadyForSingleDs(e)))).catch((e=>[])):Promise.resolve([])}waitChildDssReadyForSingleDs(e){const t=o.DataSourceManager.getInstance().getDataSource(e);return(null==t?void 0:t.isDataSourceSet())&&!t.areChildDataSourcesCreated()?t.childDataSourcesReady().then((()=>t)):Promise.resolve(t)}getContent(){var e,t,i,s;const a=[];for(let e=0;e<this.props.fromRootDsIds.length;e++)a.push(this.props.fromRootDsIds[e]);const n=(null===(e=null===window||void 0===window?void 0:window.jimuConfig)||void 0===e?void 0:e.isBuilder)?null===(i=null===(t=(0,o.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig:null===(s=(0,o.getAppStore)().getState())||void 0===s?void 0:s.appConfig;return o.React.createElement("div",{className:"w-100"},a.map(((e,t)=>{var i;const s=o.DataSourceManager.getInstance().getDataSource(e),a=null===(i=n.dataSources[e])||void 0===i?void 0:i.sourceLabel,l=(e=>{var t,i,s;return(null===(s=null===(i=null===(t=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.dataSourcesInfo)||void 0===i?void 0:i[e])||void 0===s?void 0:s.instanceStatus)===o.DataSourceStatus.CreateError})(e),r=(null==s?void 0:s.isDataSourceSet())&&(null==s?void 0:s.getChildDataSources());return o.React.createElement("div",{key:t},o.React.createElement("div",{className:"hint-paper pl-2 pr-2 d-flex align-items-center justify-content-between",style:{fontSize:"14px"}},a,l&&o.React.createElement(C.Alert,{variant:"text",form:"tooltip",size:"small",type:"error",text:this.formatMessage("dataSourceCreateError")})),null==r?void 0:r.map(((t,i)=>o.React.createElement("div",{key:i,className:"mt-1 mb-1"},o.React.createElement("div",{className:(0,o.classNames)("layerviewselector-ds-item pl-2 pr-2",{"layerviewselector-ds-item-selected":this.props.selectedDsIds&&this.props.selectedDsIds.includes(t.id)}),title:t.getLabel(),onClick:()=>{this.props.onSelect&&this.props.onSelect({rootDataSourceId:e,dataSourceId:t.id})}},null==t?void 0:t.getLabel())))))})))}render(){return this.props.fromRootDsIds&&0!==this.props.fromRootDsIds.length?o.React.createElement("div",{className:"w-100"},this.state.isLoading?o.React.createElement(C.Loading,{type:C.LoadingType.Secondary,width:24,height:16}):this.getContent()):null}}const G=(0,o.injectIntl)(V),_=o.css`
& {
  .ds-selector > span {
    display: none;
  }
}
`;class J extends o.React.PureComponent{constructor(e){super(e),this.toggleList=e=>{this.setState({listOpen:!this.state.listOpen})},this.onResize=e=>{this.setState({width:e})},this.handleChooseLayer=e=>{if(this.props.onSelect)if(e){const t=o.DataSourceManager.getInstance().getDataSource(e.rootDataSourceId),i=o.DataSourceManager.getInstance().getDataSource(e.dataSourceId).id,s=t.isDataSourceSet()&&t.getJimuChildId(i)[0];this.props.onSelect((0,o.Immutable)({jimuMapViewId:`${this.props.useMapWidgetIds[0]}-${e.rootDataSourceId}`,jimuLayerId:s,dataSourceId:e&&e.dataSourceId,rootDataSourceId:e&&e.rootDataSourceId}))}else this.props.onSelect((0,o.Immutable)({}));this.setState({listOpen:!1})},this.handleClickNone=()=>{this.props.onSelect&&this.props.onSelect((0,o.Immutable)({})),this.setState({listOpen:!1})},this.getTitle=()=>this.props.jimuLayerViewInfo&&this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0]&&this.props.jimuLayerViewInfo.dataSourceId?(0,o.jsx)(o.DataSourceComponent,{useDataSource:(0,o.Immutable)({dataSourceId:this.props.jimuLayerViewInfo.dataSourceId,mainDataSourceId:this.props.jimuLayerViewInfo.dataSourceId,rootDataSourceId:this.props.jimuLayerViewInfo.rootDataSourceId})},((e,t,i)=>null==e?void 0:e.getLabel())):this.getNoneString(),this.getContent=()=>{const e=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],t=(0,o.getAppStore)().getState().appStateInBuilder.appConfig.widgets[e];return t&&t.useDataSources&&t.useDataSources[0]?(0,o.jsx)("div",{className:"w-100 mt-1 mb-2"},(0,o.jsx)("div",{onClick:()=>{this.handleClickNone()}},(0,o.jsx)("div",{className:"layerviewselector-ds-item pl-2 pr-2"},this.getNoneString())),(0,o.jsx)("div",{className:"w-100 mt-1 mb-1"},(0,o.jsx)("div",{className:"w-100 border border-bottom-0 border-right-0 border-left-0"})),(0,o.jsx)("div",{className:"ds-selector"},(0,o.jsx)(o.MultipleDataSourceComponent,{useDataSources:t.useDataSources},((e,t)=>{const i=(0,o.Immutable)(Object.keys(e)),s=[];return this.props.jimuLayerViewInfo&&this.props.jimuLayerViewInfo.dataSourceId&&s.push(this.props.jimuLayerViewInfo.dataSourceId),(0,o.jsx)(G,{fromRootDsIds:i,onSelect:e=>{this.handleChooseLayer(e)},selectedDsIds:(0,o.Immutable)(s)})})))):this.getEmptyContent()},this.getNoneString=()=>this.props.intl.formatMessage({id:"none",defaultMessage:"None"}),this.getEmptyContent=()=>(0,o.jsx)("div",{className:"w-100 mt-1 mb-2"},(0,o.jsx)("div",{className:"layerviewselector-ds-item pl-2 pr-2",onClick:()=>{this.handleClickNone()}},this.getNoneString())),this.state={listOpen:!1,width:0}}render(){return(0,o.jsx)("div",{className:(0,o.classNames)("w-100",{[this.props.className]:!!this.props.className})},(0,o.jsx)(C.Dropdown,{size:"sm",toggle:e=>{this.toggleList(e)},isOpen:this.state.listOpen,className:"w-100"},(0,o.jsx)(C.DropdownButton,{size:"sm",type:"tertiary",className:(0,o.classNames)("w-100 d-flex flex-column align-items-center toollist-item","justify-content-between toollist-item-click layerviewselector-input")},(0,o.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center"},(0,o.jsx)("div",{className:"layerviewselector-input-text ml-2"},this.getTitle()))),(0,o.jsx)(C.DropdownMenu,{className:(0,o.classNames)("ml-0 mr-0 mb-0 mt-1 p-0",{[this.props.className]:!!this.props.className}),css:_},(0,o.jsx)("div",{className:"w-100 h-100 layerviewselector-bg"},(0,o.jsx)("div",{style:{width:`${this.state.width}px`}},this.getContent())))),(0,o.jsx)(o.ReactResizeDetector,{handleWidth:!0,onResize:this.onResize}))}}const H=(0,o.injectIntl)((0,v.withStyles)(J,"JimuLayerViewSelectorDeprecated"));var K=f(50170),q=f.n(K),Q=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const Y=e=>{const t=window.SVG,{className:i}=e,s=Q(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:q()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var X=f(98640),Z=f(62686),ee=function(e,t,i,o){return new(i||(i=Promise))((function(s,a){function n(e){try{r(o.next(e))}catch(e){a(e)}}function l(e){try{r(o.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((o=o.apply(e,t||[])).next())}))};const te=(e,t)=>e.itemChildren&&0!==e.itemChildren.length?(e.itemChildren=e.itemChildren.sort(((e,i)=>t[e.itemKey].index-t[i.itemKey].index)),e.itemChildren.forEach((e=>te(e,t))),e):e,ie=(e,t)=>{if(!e.itemChildren||0===e.itemChildren.length)return e.itemStateTitle.toLowerCase().includes(t.toLowerCase())?e:null;const i=e.itemChildren.map((e=>ie(e,t))).filter(Boolean);return i.length>0&&(e.itemStateExpanded=!0),0===i.length?e.itemStateTitle.toLowerCase().includes(t.toLowerCase())?e:null:(e.itemChildren=i,e)},oe=e=>{const{jimuMapViewId:t,hideLayers:i,disableLayers:s,isMultiSelection:a=!1,selectedValues:n,isShowTables:l=!1}=e,r=o.hooks.useTranslation(C.defaultMessages),{useState:c,useEffect:d,useMemo:p}=o.React,[u,m]=c(""),[g,h]=c(null),[v,y]=c(null),[S,b]=c(null),[w,x]=c(!0);d((()=>{x(!0),(e=>ee(void 0,void 0,void 0,(function*(){const t=Z.MapViewManager.getInstance().getJimuMapViewById(e);return yield t.whenAllJimuLayerViewLoaded()})))(t).then((e=>{x(!1),y(e)})),l&&(e=>ee(void 0,void 0,void 0,(function*(){const t=Z.MapViewManager.getInstance().getJimuMapViewById(e);return yield t.whenJimuMapViewLoaded(),t.jimuTables})))(t).then((e=>{b(e)}))}),[l,t]);const[I,j]=c([]);d((()=>{if(!v)return;const e=((e,t,i,o,s,a,n)=>{const l={itemKey:"root item",itemStateTitle:"root item",itemChildren:[]},r={};for(const i of Object.keys(e)){const a=!!t&&t(e[i],e),n=(null==o?void 0:o.length)>0&&o.includes(i);r[i]={itemKey:i,itemStateTitle:e[i].layer.title,itemChildren:[],isItemSelectable:!a,itemStateChecked:!a&&n,itemStateExpanded:s.includes(i)}}for(const[t,o]of Object.entries(e)){const{parentJimuLayerViewId:s}=o;if(!e[t].fromRuntime){const o=r[t];i&&i(e[t],e)||(null===s?l.itemChildren.push(o):r[s].itemChildren.push(o))}}const c=te(l,e);if(a){const e={};for(const t of Object.keys(n)){const i=(null==o?void 0:o.length)>0&&o.includes(t);e[t]={itemKey:t,itemStateTitle:n[t].title,itemChildren:[],isItemSelectable:!0,itemStateChecked:i,itemStateIcon:{icon:f(18249)}},c.itemChildren.push(e[t])}}return c})(v,s,i,n,I,l,S);h(e)}),[v,s,i,n,I,l,S]);const k=p((()=>{if(u){const e=JSON.parse(JSON.stringify(g)),t=ie(e,u);if(t)return t;return{itemKey:"root item",itemStateTitle:"root item",itemChildren:[]}}return g}),[g,u]);return(0,o.jsx)("div",{className:(0,o.classNames)("component-layer-view-selector","w-100 h-100",e.className||"")},(0,o.jsx)("div",{className:"search-container"},(0,o.jsx)(C.TextInput,{prefix:(0,o.jsx)(Y,null),allowClear:!0,size:"sm",type:"text",value:u,placeholder:r("SearchLabel"),onChange:e=>{const t=e.target.value;m(t)}})),(0,o.jsx)("div",{className:"tree-container"},w?(0,o.jsx)(C.Loading,{className:"w-100 h-100",type:C.LoadingType.Secondary}):(0,o.jsx)(X.Tree,{className:"w-100",collapseStyle:X.TreeCollapseStyle.Arrow,dndEnabled:!1,onUpdateItem:(t,i)=>{var o,s;if(t.updateType===X.TreeItemActionType.HandleExpandItem){const e=null===(o=t.currentItemJson)||void 0===o?void 0:o.itemKey,i=null===(s=t.changeItemJson)||void 0===s?void 0:s.itemStateExpanded;e&&j((t=>i?[...t,e]:t.filter((t=>t!==e))))}if(t.updateType===X.TreeItemActionType.HandleCheckboxChanged){const[i]=t.itemJsons;if(a){const t=n?[...n]:[];i.isItemSelectable&&i.itemStateChecked?t.push(i.itemKey):i.isItemSelectable&&!1===i.itemStateChecked&&t.splice(t.indexOf(i.itemKey),1),e.onChange(t)}else i.isItemSelectable&&i.itemStateChecked?e.onChange([i.itemKey]):i.isItemSelectable&&!1===i.itemStateChecked&&e.onChange([])}},rootItemJson:k||g,isMultiSelection:a,checkboxLinkage:!1,size:"sm",treeAlignmentType:X.TreeAlignmentType.Intact,disableDoubleClickTitle:!0,treeStyle:X.TreeStyle.Basic,singleLineText:!0,searchedText:u})))},se=(0,v.withStyles)(oe,"JimuLayerViewSelector"),ae=e=>{const t=o.hooks.useTranslation(C.defaultMessages),{useRef:i,useState:s}=o.React,a=i(null),[n,l]=s(!1);return(0,o.jsx)("div",{className:(0,o.classNames)("component-layer-view-selector-dropdown","w-100",e.className||"")},(0,o.jsx)(C.Dropdown,{className:"w-100",direction:"down",toggle:()=>{l(!n)},isOpen:n,autoWidth:!0},(0,o.jsx)(C.DropdownButton,{ref:e=>{a.current=e}},(()=>{var i;const{selectedValues:o,isMultiSelection:s,jimuMapViewId:a}=e,n=(null==o?void 0:o.length)||0;if(0===n)return t("numSelected",{number:n});if(s)return t("numSelected",{number:n});{const e=Z.MapViewManager.getInstance().getJimuMapViewById(a);return null===(i=null==e?void 0:e.jimuLayerViews[o[0]])||void 0===i?void 0:i.layer.title}})()),(0,o.jsx)(C.DropdownMenu,{className:"shadow-3",css:o.css`
      ${a?`\n          width: ${o.polished.rem(1.5*(null===(r=a.current)||void 0===r?void 0:r.clientWidth))} !important;\n        `:""}
      padding: 16px;
    `,alignment:"end"},(0,o.jsx)(se,Object.assign({},e,{isInDropdown:!0})))));var r},ne=(0,v.withStyles)(ae,"JimuLayerViewSelectorDropdown"),le=e=>{var t,i,s,a,n,l;if(!e)return"";const r=(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(s=null===(i=(0,o.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.appConfig:null===(a=(0,o.getAppStore)().getState())||void 0===a?void 0:a.appConfig;return(null===(n=r.dataSources[e])||void 0===n?void 0:n.label)||(null===(l=r.dataSources[e])||void 0===l?void 0:l.sourceLabel)},re=e=>{const t=o.hooks.useTranslation(C.defaultMessages),i={id:"none",label:t("none")},s=o.ReactRedux.useSelector((e=>{var t,i;return(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig:e.appConfig})),a=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.browserSizeMode})),n=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentPageId})),l=o.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentDialogId})),r=l?o.ContainerType.Dialog:o.ContainerType.Page,c=l||n,d=o.React.useMemo((()=>{const e=A.searchUtils.getMapWidgets(s,a,r,c);return(()=>{const i=[],a=e[0].maps.length>0;let n=!1;if(a){B(e[0].maps,s,F.Widget).forEach(((e,a)=>{if(s.widgets[e].useDataSources&&s.widgets[e].useDataSources.length>0){n||(i.push(E),n=!0);const a={header:!0,label:`${r===o.ContainerType.Dialog?t("currentWindow"):t("currentPage")} | ${s.widgets[e].label}`};i.push(a),s.widgets[e].useDataSources.forEach((a=>{const n={id:`${e}-${a.dataSourceId}`,label:le(a.dataSourceId),headerLabel:`${r===o.ContainerType.Dialog?t("currentWindow"):t("currentPage")} ${s.widgets[e].label}`};i.push(n)}))}}))}const l=U(1,e);let c=!1;const d=B(l.pageList,s,F.Page);for(let e=0;e<l.pageList.length;e++){const t=B(d[e].maps,s,F.Widget);for(let o=0;o<t.length;o++)if(s.widgets[t[o]].useDataSources&&s.widgets[t[o]].useDataSources.length>0){c||(i.push(E),c=!0);const a={header:!0,label:`${s.pages[d[e].id].label} | ${s.widgets[t[o]].label}`};i.push(a),s.widgets[t[o]].useDataSources.forEach((a=>{const n={id:`${t[o]}-${a.dataSourceId}`,label:le(a.dataSourceId),headerLabel:`${s.pages[d[e].id].label} ${s.widgets[t[o]].label}`};i.push(n)}))}}if(l.dialogList){let e=!1;const t=B(l.dialogList,s,F.Dialog);for(let o=0;o<l.dialogList.length;o++){const a=B(t[o].maps,s,F.Widget);for(let n=0;n<a.length;n++)if(s.widgets[a[n]].useDataSources&&s.widgets[a[n]].useDataSources.length>0){e||(i.push(E),e=!0);const l={header:!0,label:`${s.dialogs[t[o].id].label} | ${s.widgets[a[n]].label}`};i.push(l),s.widgets[a[n]].useDataSources.forEach((e=>{const l={id:`${a[n]}-${e.dataSourceId}`,label:le(e.dataSourceId),headerLabel:`${s.dialogs[t[o].id].label} ${s.widgets[a[n]].label}`};i.push(l)}))}}}return i})()}),[s,a,r,c,t]),p=(()=>{var t;if(!e.useMapViewIds||0===(null===(t=e.useMapViewIds)||void 0===t?void 0:t.length))return null;const i=e.useMapViewIds[0];return d.find((e=>e.id===i))||null})();return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"component-map-view-selector"},o.React.createElement(C.Select,{size:"sm",onChange:t=>{var o;const s=t.target.value,a=s===i.id?[]:[s];null===(o=e.onChange)||void 0===o||o.call(e,a)},value:p?p.id:i.id,"aria-label":e["aria-label"]},[i].concat(d).map(((e,i)=>{var s;return(e=>{var t,i,s;return(null===(s=null===(i=null===(t=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.dataSourcesInfo)||void 0===i?void 0:i[e])||void 0===s?void 0:s.instanceStatus)===o.DataSourceStatus.CreateError})(null===(s=e.id)||void 0===s?void 0:s.split("-")[1])?o.React.createElement(C.Option,{disabled:!0,className:"d-flex align-items-center justify-content-start"},o.React.createElement("span",null,e.label),o.React.createElement(C.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:t("dataSourceCreateError"),style:{marginLeft:"auto"}})):o.React.createElement(C.Option,{header:e.header,divider:e.divider,value:e.id,key:i},!e.header&&o.React.createElement("div",{className:"sr-only"},e.headerLabel),e.label)})))))},ce=re;class de extends o.React.PureComponent{constructor(e){super(e),this.onStyleClick=e=>{this.state.selectedValue!==e&&(this.setState({selectedValue:e}),this.props.onChange&&this.props.onChange(e))},this.state={selectedValue:this.props.value}}componentDidUpdate(e,t){e.value!==this.props.value&&this.setState({selectedValue:this.props.value})}render(){const e=this.props.styles;return o.React.createElement("div",{className:(0,o.classNames)("widget-setting--stylepicker w-100",{small:"small"===this.props.size})},Object.keys(e).map(((t,i)=>o.React.createElement("div",{key:t,role:"button",className:(0,o.classNames)("widget-setting--stylepicker-item",{active:t===this.state.selectedValue,"full-width":"full"===e[t].size}),style:{backgroundImage:`url(${e[t].thumbnail})`},onClick:()=>{this.onStyleClick(t)}}))))}}const pe=(0,v.withStyles)(de,"StylePicker");var ue=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};class me extends o.React.PureComponent{constructor(e){super(e),this.state={value:this.props.value},this.onRadioButtonChange=e=>{const t=e.target.value;this.state.value!==t&&(this.setState({value:t}),this.props.onChange&&this.props.onChange(t))},me.count++,this.inputName=`setting-radiogroup-${me.count}`}render(){const e=this.props,{options:t,className:i}=e,s=ue(e,["options","className"]);return o.React.createElement(C.FormGroup,Object.assign({},s,{onChange:this.onRadioButtonChange,className:`setting--button-group ${i}`}),t.map((e=>o.React.createElement(C.Label,{key:e.value},o.React.createElement(C.Radio,{value:e.value,name:this.inputName,checked:this.state.value===e.value}),e.content))))}}me.count=0;const ge=(0,v.withStyles)(me,"RadioGroup"),he=C.CollapsablePanel,ve=C.CollapsablePanel,fe=C.CollapsableToggle,ye=C.CollapsableRadio,Se=C.CollapsableCheckbox;var be;!function(e){e.CurrentWindow="_self",e.TopWindow="_top",e.NewWindow="_blank"}(be||(be={}));class we extends o.React.PureComponent{constructor(){super(...arguments),this.itemOnClick=e=>{this.props.onClick(e),this.setState({selectedItemName:e.name})}}getListContent(){return this.props.datas.map(((e,t)=>o.React.createElement("div",{onClick:()=>{this.itemOnClick(e)},key:t,className:(0,o.classNames)("link-selector-list-item btn w-100 border text-left border-bottom-0 rounded-0 text-truncate",{"item-selected":this.props.linkParam.value===e.id})},e.name)))}render(){const e=this.props.datas.find((e=>this.props.linkParam.value===e.id)),t=e&&e.id;return o.React.createElement("div",{className:"link-selector-list w-100"},o.React.createElement(C.Select,{value:t,className:"w-100",onChange:e=>{this.itemOnClick(this.props.datas.find((t=>t.id===e.target.value)))},"aria-label":this.props["aria-label"],size:"sm"},this.props.datas.map(((e,t)=>o.React.createElement("option",{key:t,value:e.id},e.name)))))}}function xe(e,t){var i,s;const a=null===(i=null==t?void 0:t.pages)||void 0===i?void 0:i[e];if((null==a?void 0:a.type)===o.PageType.Normal){const i=A.searchUtils.getContentsInContainer(t,{type:o.ContainerType.Page,id:e},o.LayoutItemType.Section,A.utils.getCurrentSizeMode());let n=[],l=[];return a.header&&(n=A.searchUtils.getContentsInContainer(t,{type:o.ContainerType.Header,id:"header"},o.LayoutItemType.Section,A.utils.getCurrentSizeMode())),a.footer&&(l=A.searchUtils.getContentsInContainer(t,{type:o.ContainerType.Footer,id:"footer"},o.LayoutItemType.Section,A.utils.getCurrentSizeMode())),null===(s=n.concat(i,l))||void 0===s?void 0:s.sort(((e,i)=>{var o,s,a,n,l;return null===(a=null===(s=null===(o=null==t?void 0:t.sections)||void 0===o?void 0:o[e])||void 0===s?void 0:s.label)||void 0===a?void 0:a.localeCompare(null===(l=null===(n=null==t?void 0:t.sections)||void 0===n?void 0:n[i])||void 0===l?void 0:l.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}))}return[]}function Ce(e,t){var i;return(null===(i=null==t?void 0:t.dialogs)||void 0===i?void 0:i[e])?A.searchUtils.getContentsInContainer(t,{type:o.ContainerType.Dialog,id:e},o.LayoutItemType.Section,A.utils.getCurrentSizeMode()):[]}function Ie(e,t){if(!e)return[];const i=je(e,t);if(i&&i.length>0){let e=[],o=[];return i.forEach((i=>{e=e.concat(ke(i,t).map((e=>e.id)))})),e.length>0&&e.forEach((e=>{o=o.concat(Ie(e,t))})),e.concat(o)}return[]}function je(e,t){return A.searchUtils.getContentsInContainer(t,{type:o.ContainerType.View,id:e},o.LayoutItemType.Section,A.utils.getCurrentSizeMode())||[]}function ke(e,t){const i=t.sections[e].views,o=[];for(let e=0;e<i.length;e++)o.push({id:i[e],label:t.views[i[e]].label});return o.sort(((e,t)=>{var i;return null===(i=e.label)||void 0===i?void 0:i.localeCompare(t.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}))}function Oe(e,t){const i=null==e?void 0:e.pages,s={id:o.CONSTANTS.CURRENT_PAGE,name:t.formatMessage({id:"currentPage",defaultMessage:C.defaultMessages.currentPage})},a=i&&Object.keys(i).filter((e=>i[e].type===o.PageType.Normal)).sort(((e,t)=>{var o;return null===(o=i[e].label)||void 0===o?void 0:o.localeCompare(i[t].label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}));let n=[s];return a&&(n=n.concat(a.map((e=>({id:e,name:i[e].label}))))),n}function Pe(e){const t=null==e?void 0:e.dialogs,i=t&&Object.values(t).filter((e=>(null==e?void 0:e.mode)===o.DialogMode.Fixed))||[],s=t&&Object.values(t).filter((e=>(null==e?void 0:e.mode)===o.DialogMode.Anchored))||[],a=i.concat(s).sort(((e,t)=>{var i;return null===(i=e.label)||void 0===i?void 0:i.localeCompare(t.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})})).map((e=>e.id));return a&&a.filter((e=>!t[e].isSplash)).map((e=>({id:e,name:t[e].label})))}function Te(e){var t;return Ne(e.linkType===o.LinkType.View?null===(t=e.value)||void 0===t?void 0:t.split(",")[0]:null)}function Ne(e){return"string"==typeof e&&e.includes("dialog_")}const Re=["https","mailto","tel","sms","ftp"];class Me extends o.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=this.props.appConfig.pageStructure;if(!e||e.length<1)return(0,o.Immutable)({value:""});if(this.props.originLinkParam.linkType!==o.LinkType.Page){const e=Oe(this.props.appConfig,this.props.intl);return(0,o.Immutable)({linkType:o.LinkType.Page,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id,openType:!this.props.openTypes||this.props.openTypes.includes(be.CurrentWindow)?be.CurrentWindow:this.props.openTypes[0]})}return this.props.originLinkParam},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){const e=Oe(this.props.appConfig,this.props.intl);return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-3 option-name"},this.props.intl.formatMessage({id:"chooseAPage",defaultMessage:C.defaultMessages.chooseAPage})),o.React.createElement("div",null,o.React.createElement(we,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"chooseAPage",defaultMessage:C.defaultMessages.chooseAPage})})))}}class Le extends o.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=this.props.appConfig.dialogs;if(!e||Object.keys(e).length<1)return(0,o.Immutable)({linkType:o.LinkType.Dialog,value:""});if(this.props.originLinkParam.linkType!==o.LinkType.Dialog){const e=Pe(this.props.appConfig);return(0,o.Immutable)({linkType:o.LinkType.Dialog,value:e&&e[0]&&e[0].id})}return this.props.originLinkParam},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}componentDidUpdate(e){if(e.appConfig!==this.props.appConfig){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}}render(){const e=Pe(this.props.appConfig);return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-3 option-name"},this.props.intl.formatMessage({id:"chooseADialog",defaultMessage:C.defaultMessages.chooseADialog})),o.React.createElement("div",null,e&&e.length>0&&o.React.createElement(we,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"chooseADialog",defaultMessage:C.defaultMessages.chooseADialog})})))}}class De extends o.React.PureComponent{constructor(){super(...arguments),this.getInitLinkParam=()=>{const e=A.searchUtils.getBlockAnchorPointsInPage(A.utils.getAppConfig(),A.utils.getCurrentPageId(),A.utils.getCurrentSizeMode());if(!e||e.length<1)return(0,o.Immutable)({linkType:o.LinkType.Block,value:""});if(this.props.originLinkParam.linkType!==o.LinkType.Block){const e=this.getBlockData();return(0,o.Immutable)({linkType:o.LinkType.Block,value:e&&e.some((e=>"default"===e.id))?"default":e&&e[0]&&e[0].id})}return this.props.originLinkParam},this.getBlockData=()=>{var e;return(null===(e=A.searchUtils.getBlockAnchorPointsInPage(A.utils.getAppConfig(),A.utils.getCurrentPageId(),A.utils.getCurrentSizeMode()))||void 0===e?void 0:e.sort(((e,t)=>{var i;return null===(i=e.label)||void 0===i?void 0:i.localeCompare(t.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}))).map((e=>({id:e.id,name:e.label})))},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.id),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){const e=this.getBlockData();return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-3 option-name"},this.props.intl.formatMessage({id:"jumpTo",defaultMessage:C.defaultMessages.jumpTo})),o.React.createElement("div",null,e&&e.length>0&&o.React.createElement(we,{linkParam:this.props.linkParam,datas:e,onClick:this.setLinkParam,"aria-label":this.props.intl.formatMessage({id:"jumpTo",defaultMessage:C.defaultMessages.jumpTo})})))}}class Ae extends o.React.PureComponent{constructor(){super(...arguments),this.screenGroupLabelStyle={marginLeft:"-20px"},this.getInitLinkParam=()=>{const e=this.getScreenData();return!e||e.length<1?(0,o.Immutable)({linkType:o.LinkType.Screen,value:""}):this.props.originLinkParam.linkType!==o.LinkType.Screen?(0,o.Immutable)({linkType:o.LinkType.Screen,value:e[0].screens[0].id}):this.props.originLinkParam},this.getScreenData=()=>{var e;return null===(e=A.searchUtils.getScreenAnchorPointsInPage(A.utils.getAppConfig(),A.utils.getCurrentPageId(),A.utils.getCurrentSizeMode()))||void 0===e?void 0:e.sort(((e,t)=>{var i;return null===(i=e.label)||void 0===i?void 0:i.localeCompare(t.label,null===window||void 0===window?void 0:window.locale,{numeric:!0,sensitivity:"base"})}))},this.setLinkParam=e=>{let t=this.props.linkParam;t=t.set("value",e.target.value),this.props.onLinkParamChange(t)}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}render(){var e;const t=this.getScreenData(),i=[];return t.forEach((e=>{i.push(o.React.createElement("option",{value:e.id,key:e.id,disabled:!0,style:this.screenGroupLabelStyle},e.label)),e.screens.forEach(((t,s)=>i.push(o.React.createElement("option",{value:t.id,key:`${e.id}-${s}`},t.label))))})),o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-3 option-name"},this.props.intl.formatMessage({id:"jumpTo",defaultMessage:C.defaultMessages.jumpTo})),o.React.createElement("div",null,t.length>0&&o.React.createElement(C.Select,{value:null===(e=this.props.linkParam)||void 0===e?void 0:e.value,className:"w-100",onChange:this.setLinkParam,size:"sm","aria-label":this.props.intl.formatMessage({id:"jumpTo",defaultMessage:C.defaultMessages.jumpTo})},i)))}}var Ee=f(30655),Ue=f.n(Ee),Fe=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const Be=e=>{const t=window.SVG,{className:i}=e,s=Fe(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:Ue()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var $e=f(94064),ze=f.n($e),We=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const Ve=e=>{const t=window.SVG,{className:i}=e,s=We(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:ze()},s)):o.React.createElement("svg",Object.assign({className:a},s))};class Ge extends o.React.PureComponent{constructor(){super(...arguments),this.onCollapseClick=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.setState({collapse:!this.state.collapse})}}componentWillMount(){this.setState({collapse:this.props.isOpen})}render(){return o.React.createElement("div",{className:(0,o.classNames)("w-100",this.props.className)},o.React.createElement("div",{title:this.props.title,style:{overflow:"hidden"},className:"w-100 btn pb-2 pr-2 d-flex justify-content-between"},o.React.createElement("div",null,this.props.title),o.React.createElement(C.Button,{type:"tertiary",size:"sm",className:"collapse-btn py-0 jimu-outline-inside pr-0",onClick:this.onCollapseClick,"aria-label":this.props.title,"aria-expanded":this.state.collapse},this.state.collapse?o.React.createElement(Be,{size:"s"}):o.React.createElement(Ve,{size:"s"}))),o.React.createElement(C.Collapse,{isOpen:this.state.collapse,"aria-label":this.props.title},this.props.children))}}class _e extends o.React.PureComponent{constructor(e){super(e),this.noScroll="Do not scroll",this.getInitLinkParam=()=>{if(this.props.originLinkParam.linkType===o.LinkType.View)return this.props.originLinkParam;{let e=(0,o.Immutable)({linkType:o.LinkType.View,value:""});return Ne(this.getDefaultPageOrDialogId())||(e=e.set("openType",this.getInitOpenType())),e}},this.getInitOpenType=()=>!this.props.openTypes||this.props.openTypes.includes(be.CurrentWindow)?be.CurrentWindow:this.props.openTypes[0],this.pageOrDialogChange=e=>{let t=this.props.linkParam;t=t.set("value",e.target.value),t=Te(t)?t.without("openType"):t.set("openType",this.getInitOpenType()),this.props.onLinkParamChange(t)},this.viewChange=(e,t)=>{let i=[];i=Object.assign(i,this.state.viewLinkParamArr),i[0]||(i[0]=this.getDefaultPageOrDialogId());const o=this.props.appConfig.sections[t].views;let s=i.filter((t=>o.some((e=>e===t))&&t!==e)),a=[];const n=i.indexOf(e);if(n>-1?s=s.concat(i[n]):a=a.concat(e),s&&s.length>0){let e=[];s.forEach((t=>{e=e.concat(Ie(t,this.props.appConfig))})),s=s.concat(e)}i=i.filter((e=>!s.some((t=>t===e)))),i=i.concat(a);let l=this.props.linkParam;l=l.set("value",i.join(",")),this.props.onLinkParamChange(l)},this.viewRemove=e=>{let t=[];t=Object.assign(t,this.state.viewLinkParamArr),t[0]||(t[0]=this.getDefaultPageOrDialogId());const i=Ie(e,this.props.appConfig).concat(e);t=t.slice(0,1).concat(t.slice(1).filter((e=>!i.some((t=>t===e)))));let o=this.props.linkParam;o=o.set("value",t.join(",")),this.props.onLinkParamChange(o,!0)},this.onScrollToViewChange=e=>{this.setState({scrollToViewId:e})},this.getDefaultPageOrDialogId=()=>{const e=this.props.appConfig&&this.props.appConfig.pages,t=e&&Object.keys(e).filter((e=>xe(e,this.props.appConfig).length>0)),i=t&&t.find((t=>e[t].isDefault))||(null==t?void 0:t[0]);if(i)return i;const o=this.props.appConfig&&this.props.appConfig.dialogs,s=o&&Object.keys(o).filter((e=>Ce(e,this.props.appConfig).length>0));return null==s?void 0:s[0]},this.getSelectedViewIds=()=>this.state.viewLinkParamArr.slice(1),this.state={viewLinkParamArr:[],scrollToViewId:this.noScroll}}componentDidMount(){const e=this.getInitLinkParam(),{value:t,linkType:i}=e;t&&i===o.LinkType.View?this.setState({viewLinkParamArr:t.split(",")}):this.setState({viewLinkParamArr:[]}),this.props.onLinkParamChange(e)}static getDerivedStateFromProps(e,t){const{value:i,linkType:s}=e.linkParam;return i&&s===o.LinkType.View?Object.assign(Object.assign({},t),{viewLinkParamArr:i.split(",")}):Object.assign(Object.assign({},t),{viewLinkParamArr:[]})}render(){var e,t,i;if(!this.props.appConfig)return null;const s=Oe(this.props.appConfig,this.props.intl),a=Pe(this.props.appConfig);let n=this.state.viewLinkParamArr[0];s.some((e=>e.id===n))||a.some((e=>e.id===n))||(n=this.getDefaultPageOrDialogId());const l=s.filter((e=>xe(e.id,this.props.appConfig).length>0)),r=a.filter((e=>Ce(e.id,this.props.appConfig).length>0));return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-3 option-name"},this.props.intl.formatMessage({id:"chooseViews",defaultMessage:C.defaultMessages.chooseViews})),o.React.createElement("div",null,o.React.createElement(C.Select,{value:n,onChange:this.pageOrDialogChange,className:"w-100 mb-4",size:"sm","aria-label":this.props.intl.formatMessage({id:"chooseViews",defaultMessage:C.defaultMessages.chooseViews})},o.React.createElement(C.Option,{header:!0},this.props.intl.formatMessage({id:"page",defaultMessage:o.defaultMessages.page})),l.map(((e,t)=>o.React.createElement(C.Option,{key:t,value:e.id},e.name))),r.length>0&&o.React.createElement(C.Option,{header:!0},this.props.intl.formatMessage({id:"dialog",defaultMessage:o.defaultMessages.dialog})),r.map(((e,t)=>o.React.createElement(C.Option,{key:t,value:e.id},e.name)))),o.React.createElement("div",{className:(0,o.classNames)("choose-view",{"mb-4":(null===(e=xe(n,this.props.appConfig))||void 0===e?void 0:e.length)>0})},xe(n,this.props.appConfig).map((e=>o.React.createElement(Je,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:ke(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e})))),o.React.createElement("div",{className:(0,o.classNames)("choose-view",{"mb-4":(null===(t=Ce(n,this.props.appConfig))||void 0===t?void 0:t.length)>0})},Ce(n,this.props.appConfig).map((e=>o.React.createElement(Je,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:ke(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e})))),o.React.createElement("div",{className:(0,o.classNames)("choose-view",{"mb-4":(null===(i=this.getSelectedViewIds())||void 0===i?void 0:i.length)>0})},this.getSelectedViewIds().map((e=>je(e,this.props.appConfig).map((e=>o.React.createElement(Je,{sections:this.props.appConfig.sections,sectionId:e,viewsInfo:ke(e,this.props.appConfig),viewLinkParamArr:this.state.viewLinkParamArr,viewChange:this.viewChange,viewRemove:this.viewRemove,key:e}))))))))}}class Je extends o.React.PureComponent{constructor(e){super(e),this.onViewChange=e=>{this.setState({viewId:e}),this.props.viewChange(e,this.props.sectionId)},this.state={viewId:null}}componentWillUnmount(){this.props.viewRemove(this.state.viewId)}render(){return o.React.createElement(Ge,{className:"mb-4 choose-view",title:this.props.sections[this.props.sectionId]&&this.props.sections[this.props.sectionId].label,isOpen:!0,key:this.props.sectionId},o.React.createElement("div",{className:"link-selector-list w-100 view-border border-top-0 border-left-0 border-right-0 rounded-0",role:"listbox"},this.props.viewsInfo.map(((e,t)=>o.React.createElement(C.Button,{role:"option",onClick:()=>{this.onViewChange(e.id)},key:t,className:(0,o.classNames)("jimu-outline-inside link-selector-list-item btn w-100 view-border px-2 pt-1 text-left border-bottom-0 rounded-0 text-truncate",{"item-common":!this.props.viewLinkParamArr.includes(e.id)},{"item-selected":this.props.viewLinkParamArr.includes(e.id)}),title:e.label,"aria-selected":this.props.viewLinkParamArr.includes(e.id)},e.label)))))}}var He=f(84845);const Ke=(0,o.Immutable)([He.ExpressionInputType.Static,He.ExpressionInputType.Attribute,He.ExpressionInputType.Expression]);class qe extends o.React.PureComponent{constructor(e){var t;super(e),this.getInitLinkParam=()=>this.props.originLinkParam.linkType===o.LinkType.WebAddress?this.props.originLinkParam:(0,o.Immutable)({linkType:o.LinkType.WebAddress,openType:!this.props.openTypes||this.props.openTypes.includes(be.NewWindow)?be.NewWindow:this.props.openTypes[0],value:""}),this.webAddressInputChange=e=>{const t=e.value;let i=this.props.linkParam;i=i.set("value",t).set("expression",null),this.props.onLinkParamChange(i)},this.webAddressExpressionChange=e=>{let t=this.props.linkParam;t=t.set("expression",e).set("value",""),this.props.onLinkParamChange(t),this.closeExpPopup()},this.openExpPopup=()=>{this.setState({isExpPopupOpen:!0})},this.closeExpPopup=()=>{this.setState({isExpPopupOpen:!1})},this.getDefaultExp=()=>({name:"Expression",parts:[{type:o.ExpressionPartType.String,exp:'"https://"'}]}),this.onUrlChange=e=>{this.setState({url:e.value})},this.state={isExpPopupOpen:!1,url:(null===(t=this.props.linkParam)||void 0===t?void 0:t.linkType)===o.LinkType.WebAddress?this.props.linkParam.value:""}}componentDidMount(){const e=this.getInitLinkParam();this.props.onLinkParamChange(e)}componentDidUpdate(e){var t,i,s;(null===(t=e.linkParam)||void 0===t?void 0:t.value)!==(null===(i=this.props.linkParam)||void 0===i?void 0:i.value)&&this.setState({url:(null===(s=this.props.linkParam)||void 0===s?void 0:s.linkType)===o.LinkType.WebAddress?this.props.linkParam.value:this.state.url})}render(){return o.React.createElement("div",{className:"w-100"},o.React.createElement("div",{className:"mb-3 option-name"},this.props.intl.formatMessage({id:"url",defaultMessage:C.defaultMessages.url})),o.React.createElement("div",null,this.props.useDataSources&&this.props.useDataSources.length>0?o.React.createElement(He.ExpressionInput,{useDataSources:this.props.useDataSources,onChange:this.webAddressExpressionChange,expression:this.props.linkParam&&this.props.linkParam.expression||this.getDefaultExp(),closeExpPopup:this.closeExpPopup,openExpPopup:this.openExpPopup,isExpPopupOpen:this.state.isExpPopupOpen,types:Ke,widgetId:this.props.widgetId,"aria-label":this.props.intl.formatMessage({id:"url",defaultMessage:C.defaultMessages.url})}):o.React.createElement(C.UrlInput,{value:this.state.url,schemes:Re,onChange:this.onUrlChange,className:"w-100",onAcceptValue:this.webAddressInputChange,"aria-label":this.props.intl.formatMessage({id:"url",defaultMessage:C.defaultMessages.url})})))}}class Qe extends o.React.PureComponent{constructor(e){if(super(e),this.getLinkTypeContent=()=>{const e=this.getHiddenLinks();return this.props.isLinkPageSetting||window.isExpressBuilder?(0,o.jsx)(C.Select,{value:this.state.linkParam.linkType,size:"sm",onChange:this.linkTypeChange,className:"w-100","aria-label":this.props.intl.formatMessage({id:"linkTo",defaultMessage:C.defaultMessages.linkTo})},!e.some((e=>e===o.LinkType.WebAddress))&&(0,o.jsx)("option",{value:o.LinkType.WebAddress},this.props.intl.formatMessage({id:"url",defaultMessage:C.defaultMessages.url})),!e.some((e=>e===o.LinkType.None))&&(0,o.jsx)("option",{value:o.LinkType.None},this.props.intl.formatMessage({id:"none",defaultMessage:C.defaultMessages.none}))):(0,o.jsx)(C.Select,{value:this.state.linkParam.linkType,size:"sm",onChange:this.linkTypeChange,className:"w-100","aria-label":this.props.intl.formatMessage({id:"linkTo",defaultMessage:C.defaultMessages.linkTo})},!e.some((e=>e===o.LinkType.None))&&(0,o.jsx)("option",{value:o.LinkType.None},this.props.intl.formatMessage({id:"none",defaultMessage:C.defaultMessages.none})),!e.some((e=>e===o.LinkType.Page))&&(0,o.jsx)("option",{value:o.LinkType.Page},this.props.intl.formatMessage({id:"page",defaultMessage:o.defaultMessages.page})),!e.some((e=>e===o.LinkType.View))&&(0,o.jsx)("option",{value:o.LinkType.View},this.props.intl.formatMessage({id:"view",defaultMessage:o.defaultMessages.view})),!e.some((e=>e===o.LinkType.Dialog))&&(0,o.jsx)("option",{value:o.LinkType.Dialog},this.props.intl.formatMessage({id:"dialog",defaultMessage:o.defaultMessages.dialog})),!e.some((e=>e===o.LinkType.WebAddress))&&(0,o.jsx)("option",{value:o.LinkType.WebAddress},this.props.intl.formatMessage({id:"url",defaultMessage:C.defaultMessages.url})),!e.some((e=>e===o.LinkType.Block))&&(0,o.jsx)("option",{value:o.LinkType.Block},this.props.intl.formatMessage({id:"block",defaultMessage:o.defaultMessages.block})),!e.some((e=>e===o.LinkType.PageTop))&&(0,o.jsx)("option",{value:o.LinkType.PageTop},this.props.intl.formatMessage({id:"pageTop",defaultMessage:C.defaultMessages.pageTop})),!e.some((e=>e===o.LinkType.PrintPreview))&&(0,o.jsx)("option",{value:o.LinkType.PrintPreview},this.props.intl.formatMessage({id:"printPreview",defaultMessage:C.defaultMessages.printPreview})),!e.some((e=>e===o.LinkType.CookieBanner))&&(0,o.jsx)("option",{value:o.LinkType.CookieBanner},this.props.intl.formatMessage({id:"cookieBanner",defaultMessage:C.defaultMessages.cookieBanner})))},this.getHiddenLinks=()=>{var e,t,i,s,a,n;let l=this.props.hiddenLinks||(0,o.Immutable)([]);const r=A.utils.getCurrentPageId(),c=A.utils.getAppConfig(),d=null===(e=c.pages)||void 0===e?void 0:e[r],p=A.searchUtils.findLayoutId(null==d?void 0:d.layout,A.utils.getCurrentSizeMode(),c.mainSizeMode),u=c.layouts[p],m=(null===(t=null===window||void 0===window?void 0:window.jimuConfig)||void 0===t?void 0:t.isBuilder)?null===(s=null===(i=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===s?void 0:s.currentDialogId:null===(a=(0,o.getAppStore)().getState().appRuntimeInfo)||void 0===a?void 0:a.currentDialogId;return((null==u?void 0:u.type)===o.LayoutType.FixedLayout||m)&&(l=l.concat([o.LinkType.Block,o.LinkType.Screen,o.LinkType.PageTop])),(null===(n=null==c?void 0:c.cookieBanner)||void 0===n?void 0:n.enable)||(l=l.concat([o.LinkType.CookieBanner])),l},this.getLinkContent=e=>{switch(e){case o.LinkType.None:return null;case o.LinkType.Page:return(0,o.jsx)(Me,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,intl:this.props.intl,openTypes:this.props.openTypes});case o.LinkType.Dialog:return(0,o.jsx)(Le,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case o.LinkType.Block:return(0,o.jsx)(De,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case o.LinkType.Screen:return(0,o.jsx)(Ae,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,onLinkParamChange:this.linkParamChange,intl:this.props.intl});case o.LinkType.View:return(0,o.jsx)(_e,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,intl:this.props.intl,openTypes:this.props.openTypes,appConfig:this.props.appConfig,onLinkParamChange:this.linkParamChange,browserSizeMode:this.props.browserSizeMode});case o.LinkType.WebAddress:return(0,o.jsx)(qe,{originLinkParam:this.state.originLinkParam,linkParam:this.state.linkParam,intl:this.props.intl,onLinkParamChange:this.linkParamChange,useDataSources:this.props.useDataSources,openTypes:this.props.openTypes,widgetId:this.props.widgetId});default:return null}},this.linkTypeChange=e=>{const t=e.target.value;let i=(0,o.Immutable)(this.state.linkParam);[o.LinkType.None,o.LinkType.PageTop,o.LinkType.CookieBanner,o.LinkType.PrintPreview].includes(t)&&(i=(0,o.Immutable)({})),i=i.set("linkType",t),this.needOpenIn(i)||(i=i.without("openType")),this.setState({linkParam:i})},this.radioOpenTypeChange=e=>{let t=(0,o.Immutable)(this.state.linkParam);t=t.set("openType",e),this.setState({linkParam:t})},this.linkParamChange=(e,t)=>{t?e&&this.state.linkParam&&e.linkType===this.state.linkParam.linkType&&this.setState({linkParam:this.fixLinkParam(e)}):this.setState({linkParam:this.fixLinkParam(e)})},this.fixLinkParam=e=>{var t;let i=e;if((null==e?void 0:e.linkType)===o.LinkType.View&&(null==e?void 0:e.value)){const o=null===(t=this.props.appConfig)||void 0===t?void 0:t.views,s=e.value.split(","),a=s.slice(1).filter((e=>null==o?void 0:o[e])),n=[s[0]].concat(a).join(",");i=i.set("value",n)}return i},this.settingConfirm=()=>{const e=(0,o.Immutable)(this.state.linkParam);this.setState({originLinkParam:e}),this.props.onSettingConfirm(e)},this.isLinkParamOk=e=>{if(!e||!e.linkType)return!1;if(e.linkType===o.LinkType.View){const t=e.value&&e.value.split(",")[0]||null,i=e.value&&e.value.split(",").slice(1)||[];return!!(t&&"string"==typeof t&&i.length>0)}if(e.linkType===o.LinkType.WebAddress){if(this.props.useDataSources&&this.props.useDataSources.length>0){const t=e.expression&&e.expression.parts;let i=!1;return t&&t.length>0&&(i=1!==t.length||!!t[0].exp&&'""'!==t[0].exp),i}{const t="valid"!==o.urlUtils.checkAbsoluteUrl(e.value,Re);return e.value&&!t}}return e.linkType===o.LinkType.PageTop||e.linkType===o.LinkType.PrintPreview||e.linkType===o.LinkType.None||e.linkType===o.LinkType.CookieBanner||!(!e.value||"string"!=typeof e.value)},this.props.linkParam&&this.props.linkParam.linkType)this.state={linkParam:(0,o.Immutable)(this.props.linkParam),originLinkParam:(0,o.Immutable)(this.props.linkParam)};else{const e={linkType:o.LinkType.None,openType:!this.props.openTypes||this.props.openTypes.includes(be.CurrentWindow)?be.CurrentWindow:this.props.openTypes[0]};this.state={linkParam:(0,o.Immutable)(e),originLinkParam:(0,o.Immutable)(e)}}}needOpenIn(e){if(!e)return!0;return![o.LinkType.Dialog,o.LinkType.Block,o.LinkType.Screen,o.LinkType.PageTop,o.LinkType.PrintPreview,o.LinkType.CookieBanner].some((t=>t===e.linkType))&&!Te(e)}render(){if(this.props.appConfig){const e=this.getLinkTypeContent(),t=this.getLinkContent(this.state.linkParam.linkType);return(0,o.jsx)("div",{className:(0,o.classNames)(this.props.className,"w-100 h-100",{[v.Theme2GlobalStyleClassName]:this.context,[v.ThemeGlobalStyleClassName]:!this.context})},(0,o.jsx)("div",{className:"widget-builder-link-selector w-100 h-100"},(0,o.jsx)("div",{style:{position:"relative"},className:"w-100 h-100"},(0,o.jsx)(C.Container,null,(0,o.jsx)(C.Row,{className:"mb-3 option-name"},this.props.intl.formatMessage({id:"linkTo",defaultMessage:C.defaultMessages.linkTo})),(0,o.jsx)(C.Row,{className:"mb-4"},e),this.state.linkParam.linkType!==o.LinkType.None?(0,o.jsx)("div",null,(0,o.jsx)(C.Row,{className:"mb-4"},t),this.needOpenIn(this.state.linkParam)&&(0,o.jsx)("div",null,(0,o.jsx)(C.Row,{className:"mb-3 option-name"},this.props.intl.formatMessage({id:"openIn",defaultMessage:C.defaultMessages.openIn})),(0,o.jsx)(C.Row,{role:"radiogroup",className:"p-0","aria-label":this.props.intl.formatMessage({id:"openIn",defaultMessage:C.defaultMessages.openIn})},(!this.props.openTypes||this.props.openTypes.some((e=>e===be.CurrentWindow)))&&(0,o.jsx)(C.Label,{className:"link-setting-cursor-pointer open-type-label mb-6 d-flex align-items-center"},(0,o.jsx)(C.Radio,{name:"openIn",className:"mr-2",onChange:()=>{this.radioOpenTypeChange(be.CurrentWindow)},checked:this.state.linkParam.openType===be.CurrentWindow}),this.props.intl.formatMessage({id:"appWindow",defaultMessage:C.defaultMessages.appWindow})),(!this.props.openTypes||this.props.openTypes.some((e=>e===be.TopWindow)))&&(0,o.jsx)(C.Label,{className:"link-setting-cursor-pointer open-type-label mb-6 d-flex align-items-center"},(0,o.jsx)(C.Radio,{name:"openIn",className:"mr-2",onChange:()=>{this.radioOpenTypeChange(be.TopWindow)},checked:this.state.linkParam.openType===be.TopWindow}),this.props.intl.formatMessage({id:"topWindow",defaultMessage:C.defaultMessages.topWindow})),(!this.props.openTypes||this.props.openTypes.some((e=>e===be.NewWindow)))&&(0,o.jsx)(C.Label,{className:"link-setting-cursor-pointer open-type-label mb-6 d-flex align-items-center"},(0,o.jsx)(C.Radio,{name:"openIn",className:"mr-2",onChange:()=>{this.radioOpenTypeChange(be.NewWindow)},checked:this.state.linkParam.openType===be.NewWindow}),this.props.intl.formatMessage({id:"newWindow",defaultMessage:C.defaultMessages.newWindow}))))):null),(0,o.jsx)("div",{className:"w-100 link-setting-ok-btn-container",style:{position:"absolute"}},(0,o.jsx)(C.Button,{className:"w-100 link-setting-ok-btn",type:"primary",onClick:this.settingConfirm,disabled:!this.isLinkParamOk(this.state.linkParam),title:this.props.intl.formatMessage({id:"ok",defaultMessage:o.defaultMessages.ok})},(0,o.jsx)("div",{className:"text-truncate"},this.props.intl.formatMessage({id:"ok",defaultMessage:o.defaultMessages.ok})))))))}return null}componentDidMount(){this.props.isLinkPageSetting&&this.linkTypeChange({target:{value:o.LinkType.WebAddress}})}}Qe.contextType=v.UseTheme2Context;const Ye=o.ReactRedux.connect((e=>{var t,i;return{appConfig:window&&window.jimuConfig&&window.jimuConfig.isBuilder?null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig:e.appConfig,browserSizeMode:window&&window.jimuConfig&&window.jimuConfig.isBuilder?null===(i=e.appStateInBuilder)||void 0===i?void 0:i.browserSizeMode:e.browserSizeMode}}))((0,o.injectIntl)((0,v.withStyles)(Qe,"LinkSelectorContent"))),Xe=Ye;var Ze=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const et=[{name:"preventOverflow",options:{boundariesElement:"viewport"}}];class tt extends o.React.PureComponent{constructor(){super(...arguments),this.closeBtnRef=o.React.createRef(),this.popperRef=o.React.createRef(),this.handleDocumentMousedown=e=>{if(this.props.isOpen){const t=e.target;(!this.props.trigger||(Array.isArray(this.props.trigger)?!this.props.trigger.some((e=>!(0,C.isOutBoundary)(t,e))):(0,C.isOutBoundary)(t,this.props.trigger)))&&this.toggle()}},this.toggle=()=>{this.props.toggle()},this.keepFocusAfterClose=()=>{setTimeout((()=>{var e,t;this.props.backToFocusNode?this.props.backToFocusNode.focus():Array.isArray(this.props.trigger)?null===(e=this.props.trigger[0])||void 0===e||e.focus():null===(t=this.props.trigger)||void 0===t||t.focus()}),200)},this.onKeyDown=e=>{var t,i;if("Esc"===e.key||"Escape"===e.key){if(!(null===(t=this.popperRef.current)||void 0===t?void 0:t.contains(e.target)))return;e.target===this.closeBtnRef.current?this.toggle():null===(i=this.closeBtnRef.current)||void 0===i||i.focus()}}}componentDidMount(){var e;null===(e=this.getReference(this.props.position))||void 0===e||e.addEventListener("mousedown",this.handleDocumentMousedown,!1)}componentDidUpdate(e){var t;const i="left"===this.props.position&&e.leftSidebarCollapse&&!this.props.leftSidebarCollapse||"right"===this.props.position&&e.rightSidebarCollapse&&!this.props.rightSidebarCollapse,o=this.props.widgetId&&this.props.layoutSelection!==e.layoutSelection&&(null===(t=A.searchUtils.findLayoutItem(A.utils.getAppConfig(),this.props.layoutSelection))||void 0===t?void 0:t.widgetId)!==this.props.widgetId,s=!e.isTemplatePage&&this.props.isTemplatePage;(i||o||s)&&this.props.isOpen&&this.toggle(),e.isOpen&&!this.props.isOpen&&this.keepFocusAfterClose()}componentWillUnmount(){var e;null===(e=this.getReference(this.props.position))||void 0===e||e.removeEventListener("mousedown",this.handleDocumentMousedown,!1)}getReference(e){return"left"===e?document&&document.querySelector('[data-layoutid="left-sidebar-left-layout"]'):document&&document.querySelector('[data-layoutid="right-sidebar-right-layout"]')}getPlacement(e){return"left"===e?"right-start":"left-start"}render(){const e=this.props,{isOpen:t,position:i,className:s,dispatch:a,leftSidebarCollapse:n,rightSidebarCollapse:l,trigger:r,backToFocusNode:c,widgetId:d,layoutSelection:p,title:u,isTemplatePage:m,addFocusableContainerClass:g}=e,h=Ze(e,["isOpen","position","className","dispatch","leftSidebarCollapse","rightSidebarCollapse","trigger","backToFocusNode","widgetId","layoutSelection","title","isTemplatePage","addFocusableContainerClass"]);return(0,o.jsx)(C.Popper,Object.assign({reference:this.getReference(i),placement:this.getPlacement(i),open:t,forceLatestFocusElements:!0,className:(0,o.classNames)("bg-light-300",s),modifiers:et},h,{toggle:null,onKeyDown:this.onKeyDown,"aria-label":"string"==typeof this.props["aria-label"]?this.props["aria-label"]:"string"==typeof u?u:void 0}),(0,o.jsx)("div",{className:"w-100 h-100",ref:this.popperRef},void 0!==u&&(0,o.jsx)(C.PanelHeader,{title:u,showClose:!0,onClose:this.toggle,level:1,className:(0,o.classNames)("p-4",{[C.FOCUSABLE_CONTAINER_CLASS]:g}),closeButtonRef:this.closeBtnRef}),void 0!==u?(0,o.jsx)("div",{css:o.css`height: calc(100% - 56px); overflow: auto;`},this.props.children):this.props.children))}}const it=o.ReactRedux.connect(((e,t)=>{var i,o,s,a,n,l,r,c,d,p;return{leftSidebarCollapse:null===(o=null===(i=e.widgetsState)||void 0===i?void 0:i["left-sidebar"])||void 0===o?void 0:o.collapse,rightSidebarCollapse:null===(a=null===(s=e.widgetsState)||void 0===s?void 0:s["right-sidebar"])||void 0===a?void 0:a.collapse,layoutSelection:t.widgetId?(null===(n=null===window||void 0===window?void 0:window.jimuConfig)||void 0===n?void 0:n.isBuilder)?null===(r=null===(l=e.appStateInBuilder)||void 0===l?void 0:l.appRuntimeInfo)||void 0===r?void 0:r.selection:null===(c=e.appRuntimeInfo)||void 0===c?void 0:c.selection:null,isTemplatePage:(null===(d=null===window||void 0===window?void 0:window.jimuConfig)||void 0===d?void 0:d.isBuilder)&&"template"===(null===(p=e.appRuntimeInfo)||void 0===p?void 0:p.currentPageId)}}))((0,v.withStyles)(tt,"SidePopper"));class ot extends o.React.PureComponent{constructor(){super(...arguments),this.close=()=>{this.props.onSettingCancel()},this.getIsOpen=()=>this.props.isOpen||this.props.showDialog}render(){const e=this.props.position||"right",{title:t}=this.props;return o.React.createElement(it,{isOpen:this.getIsOpen(),position:e,toggle:this.close,trigger:this.props.trigger,backToFocusNode:this.props.backToFocusNode,widgetId:this.props.widgetId,title:this.props.intl.formatMessage({id:t?"setLinkForTitle":"setLink",defaultMessage:t?C.defaultMessages.setLinkForTitle:C.defaultMessages.setLink},{title:t})},o.React.createElement("div",{className:"bg-default w-100 h-100 px-4"},o.React.createElement(Ye,{isLinkPageSetting:this.props.isLinkPageSetting,linkParam:this.props.linkParam,onSettingConfirm:this.props.onSettingConfirm,useDataSources:this.props.useDataSources,widgetId:this.props.widgetId,hiddenLinks:this.props.hiddenLinks,openTypes:this.props.openTypes})))}}const st=(0,o.injectIntl)((0,v.withTheme)(ot)),at=st;var nt=f(76490),lt=f.n(nt),rt=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const ct=e=>{const t=window.SVG,{className:i}=e,s=rt(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:lt()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var dt=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};class pt extends o.React.PureComponent{constructor(e){super(e),this.linkSelectorTrigger=o.React.createRef(),this.toggle=()=>{const e=!this.state.isOpen;this.setState({isOpen:e},(()=>{this.setState({renderPopper:e})}))},this.onCancel=()=>{var e,t;null===(t=(e=this.props).onSettingCancel)||void 0===t||t.call(e),this.toggle()},this.onConfirm=e=>{var t,i;null===(i=(t=this.props).onSettingConfirm)||void 0===i||i.call(t,e),this.toggle()},this.getIsOpen=()=>this.state.isOpen&&!o.urlUtils.getAppIdPageIdFromUrl().pageId,this.state={isOpen:!1,renderPopper:!1}}render(){const e=this.props,{theme:t,intl:i,buttonLabel:s}=e,a=dt(e,["theme","intl","buttonLabel"]),n=s||this.props.intl.formatMessage({id:"setLink",defaultMessage:C.defaultMessages.setLink});return o.React.createElement(o.React.Fragment,null,o.React.createElement(C.Button,{className:"w-100 text-overlay",type:"primary",onClick:this.toggle,ref:this.linkSelectorTrigger,title:n},o.React.createElement("div",{className:"w-100 px-2 text-truncate"},o.React.createElement(ct,{className:"text-overlay mr-1"}),n)),this.state.renderPopper&&o.React.createElement(st,Object.assign({},a,{isOpen:this.getIsOpen(),position:"right",onSettingCancel:this.onCancel,onSettingConfirm:this.onConfirm,trigger:this.linkSelectorTrigger.current,widgetId:this.props.widgetId})))}}const ut=(0,v.withTheme)((0,o.injectIntl)(pt));var mt=f(13089),gt=function(e,t,i,o){return new(i||(i=Promise))((function(s,a){function n(e){try{r(o.next(e))}catch(e){a(e)}}function l(e){try{r(o.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((o=o.apply(e,t||[])).next())}))};function ht(){return gt(this,void 0,void 0,(function*(){const e=yield vt(),t=yield ft(),i={};return Object.keys(e).forEach((t=>{i[t]||(i[t]={items:[],isPremium:e[t].isPremium,isSubscriber:e[t].isSubscriber}),i[t].items=i[t].items.concat(e[t].dataSources.map((e=>({label:o.dataSourceUtils.getLabelFromArcGISServiceUrl(t),id:e.id}))))})),Object.keys(t).forEach((e=>{i[e]||(i[e]={items:[],isPremium:t[e].isPremium,isSubscriber:t[e].isSubscriber}),i[e].items=i[e].items.concat(t[e].utilities.map((e=>{const t=o.UtilityManager.getInstance().getUtilityJson(e.utilityId);return{label:(null==t?void 0:t.label)||(null==t?void 0:t.name)||(null==t?void 0:t.sourceLabel),id:e.utilityId}})))})),i}))}function vt(){return gt(this,void 0,void 0,(function*(){var e,t,i,s;const a=null===(s=null===(i=null===(t=null===(e=(0,o.getAppStore)())||void 0===e?void 0:e.getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===s?void 0:s.dataSources,n=[];return a&&Object.keys(a).forEach((e=>{const t=o.DataSourceManager.getInstance().getDataSource(e);n.push(yt(t))})),Promise.allSettled(n).then((e=>{let t={};return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((i=>{t[i]?t[i].dataSources=t[i].dataSources.concat(e[i].dataSources):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function ft(){return gt(this,void 0,void 0,(function*(){var e,t,i,s;const a=null===(s=null===(i=null===(t=null===(e=(0,o.getAppStore)())||void 0===e?void 0:e.getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===s?void 0:s.utilities,n=[];return a&&Object.keys(a).forEach((e=>{n.push(function(e){return gt(this,void 0,void 0,(function*(){var t,i,s,a;const n={};if(!e)return n;const l=null===(a=null===(s=null===(i=null===(t=(0,o.getAppStore)())||void 0===t?void 0:t.getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===a?void 0:a.widgets,r=l&&Object.values(l).some((t=>{var i;return null===(i=t.useUtilities)||void 0===i?void 0:i.some((t=>t.utilityId===e.id))})),c=e.url;if(c&&r){const t=yield o.proxyUtils.isUtilityPremium(e),i=yield o.proxyUtils.isUtilitySubscriber(e);if(t||i){const s=yield o.UtilityManager.getInstance().getUtility(e.id);n[c]={utilities:[s],isPremium:t,isSubscriber:i}}}return n}))}(a[e]))})),Promise.allSettled(n).then((e=>{let t={};return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((i=>{t[i]?t[i].utilities=t[i].utilities.concat(e[i].utilities):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function yt(e){return gt(this,arguments,void 0,(function*(e,t=!1){var i,s,a,n,l,r;const c={};if(!e)return c;e.isDataSourceSet()&&!e.areChildDataSourcesCreated()&&(yield e.childDataSourcesReady());const d=null===(n=null===(a=null===(s=null===(i=(0,o.getAppStore)())||void 0===i?void 0:i.getState())||void 0===s?void 0:s.appStateInBuilder)||void 0===a?void 0:a.appConfig)||void 0===n?void 0:n.widgets,p=(null===(l=e.getMainDataSource())||void 0===l?void 0:l.id)===e.id,u=mt.dataComponentsUtils.getWidgetsUsingDsOrItsViews(e.id,d,!1).length>0,m=o.dataSourceUtils.getFullArcGISServiceUrl(null===(r=e.getDataSourceJson())||void 0===r?void 0:r.url,!1);if(p&&m&&(t||u)){const t=yield o.proxyUtils.isDataSourcePremium(e.getDataSourceJson()),i=yield o.proxyUtils.isDataSourceSubscriber(e.getDataSourceJson());(t||i)&&(c[m]={dataSources:[e],isPremium:t,isSubscriber:i})}const g=[];if(p&&e.isDataSourceSet()){const i=(e.type===o.AllDataSourceTypes.WebMap||e.type===o.AllDataSourceTypes.WebScene)&&u||t;e.getChildDataSources().forEach((e=>{g.push(yt(e,i))}))}return Promise.allSettled(g).then((e=>{let t=c;return e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)).forEach((e=>{e&&Object.keys(e).forEach((i=>{t[i]?t[i].dataSources=t[i].dataSources.concat(e[i].dataSources):t=Object.assign(Object.assign({},t),e)}))})),t}))}))}function St(e,t){var i;if(!e||!t)return null;let o=null;for(const s in t)if((null===(i=t[s])||void 0===i?void 0:i.sourceUrl)===e){o=t[s];break}return o}function bt(e,t,i,o){if(!e||!t)return!1;if(!(e.sourceUrl===t))return!1;if(!(!e.hitsPerInterval&&!i||e.hitsPerInterval===i))return!1;return!((e.intervalSeconds||o)&&e.intervalSeconds!==o)}function wt(){var e,t;const i=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder.appInfo;return null===(t=null==i?void 0:i.typeKeywords)||void 0===t?void 0:t.includes("Registered App")}function xt(){return gt(this,void 0,void 0,(function*(){var e,t,i,s,a,n,l,r,c,d;if(!(!(null===(i=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appContext)||void 0===t?void 0:t.jimuConfig)||void 0===i?void 0:i.isInPortal)&&!(null===(n=null===(a=null===(s=(0,o.getAppStore)().getState())||void 0===s?void 0:s.appContext)||void 0===a?void 0:a.jimuConfig)||void 0===n?void 0:n.isDevEdition)))return yield Promise.resolve(!1);const p=wt();let u=!1;if(!p){const e=null===(l=(0,o.getAppStore)().getState())||void 0===l?void 0:l.appStateInBuilder.appInfo,t=null===(d=null===(c=null===(r=(0,o.getAppStore)().getState())||void 0===r?void 0:r.appStateInBuilder)||void 0===c?void 0:c.user)||void 0===d?void 0:d.username;u=(null==e?void 0:e.owner)===t}if(!(p||u))return yield Promise.resolve(!1);const m=yield ht(),g=Object.keys(m).map((e=>gt(this,void 0,void 0,(function*(){return yield o.ServiceManager.getInstance().fetchServiceInfo(e).then((e=>e.isHostedInSamePortal))}))));return Promise.allSettled(g).then((e=>e.filter((e=>"fulfilled"===e.status)).map((e=>e.value)))).then((e=>(null==e?void 0:e.length)>0&&(null==e?void 0:e.some((e=>e)))))}))}function Ct(e,t){return gt(this,void 0,void 0,(function*(){if(!e||0===e.length||!t)return void(yield Promise.resolve());const i=Ot();yield o.esri.restRequest.request(i,{authentication:o.SessionManager.getInstance().getSessionByUrl((0,o.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{proxies:e.join()}}).then((e=>gt(this,void 0,void 0,(function*(){var i;return e.results&&Object.values(e.results).forEach((e=>{e.success&&It(e.proxyId,t)})),null==t||t.exec(),(null===(i=e.results)||void 0===i?void 0:i.every((e=>!0===e.success)))?Promise.resolve():Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(e)}`)})))).catch((i=>gt(this,void 0,void 0,(function*(){return e.forEach((e=>{It(e,t)})),null==t||t.exec(),Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(i)}`)}))))}))}function It(e,t){var i,s,a;const n=null===(a=null===(s=null===(i=(0,o.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===a?void 0:a.appProxies,l=n&&Object.values(n).find((t=>t.proxyId===e));l&&(null==t||t.removeAppProxy(l.id))}function jt(){var e,t,i,s,a,n,l;const r=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.portalUrl,c=null===(s=null===(i=(0,o.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.appId;return`${r}/sharing/rest/content/users/${null===(l=null===(n=null===(a=(0,o.getAppStore)().getState())||void 0===a?void 0:a.appStateInBuilder)||void 0===n?void 0:n.appInfo)||void 0===l?void 0:l.owner}/items/${c}`}function kt(){return`${jt()}/createProxies`}function Ot(){return`${jt()}/deleteProxies`}var Pt=f(56499),Tt=f.n(Pt),Nt=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const Rt=e=>{const t=window.SVG,{className:i}=e,s=Nt(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:Tt()},s)):o.React.createElement("svg",Object.assign({className:a},s))};class Mt extends o.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.interval={none:this.props.intl.formatMessage({id:"intervalNone",defaultMessage:C.defaultMessages.intervalNone}),second:this.props.intl.formatMessage({id:"intervalSecond",defaultMessage:C.defaultMessages.intervalSecond}),minute:this.props.intl.formatMessage({id:"intervalMinute",defaultMessage:C.defaultMessages.intervalMinute}),hour:this.props.intl.formatMessage({id:"intervalHour",defaultMessage:C.defaultMessages.intervalHour}),day:this.props.intl.formatMessage({id:"intervalDay",defaultMessage:C.defaultMessages.intervalDay})},this.setIsHostedInSamePortal=()=>{this.props.sourceUrl&&o.ServiceManager.getInstance().fetchServiceInfo(this.props.sourceUrl).then((e=>{this.__unmount||this.setState({isHostedInSamePortal:e.isHostedInSamePortal})}))},this.onToggleProxy=()=>{let e;e=this.props.proxySettingConfig?null:(0,o.Immutable)({sourceUrl:this.props.sourceUrl}),this.props.onChange(this.props.sourceUrl,e)},this.onHitsPerIntervalChange=e=>{const t=e,i={sourceUrl:this.props.sourceUrl,hitsPerInterval:t},o=this.props.proxySettingConfig?Object.assign(Object.assign({},this.props.proxySettingConfig),i):i;this.props.onChange(this.props.sourceUrl,o)},this.onIntervalUnitChange=e=>{const t=e.target.value,i=this.getIntervalSeconds(t),o={sourceUrl:this.props.sourceUrl,intervalSeconds:i},s=this.props.proxySettingConfig?Object.assign(Object.assign({},this.props.proxySettingConfig),o):o;this.props.onChange(this.props.sourceUrl,s)},this.state={isHostedInSamePortal:!0}}componentDidMount(){this.__unmount=!1,this.setIsHostedInSamePortal()}componentDidUpdate(e){this.__unmount=!1,e.sourceUrl!==this.props.sourceUrl&&this.setIsHostedInSamePortal()}componentWillUnmount(){this.__unmount=!0}getIntervalUnit(e){if(!e)return"none";switch(e){case 1:return"second";case 60:return"minute";case 3600:return"hour";case 86400:return"day";default:return"none"}}getIntervalSeconds(e){if(!e)return null;switch(e){case"second":return 1;case"minute":return 60;case"hour":return 3600;case"day":return 86400;default:return null}}render(){var e,t;if(!this.props.sourceUrl)return null;const i=this.props.label,s=!!this.props.proxySettingConfig,a=this.getIntervalUnit(null===(e=this.props.proxySettingConfig)||void 0===e?void 0:e.intervalSeconds),n=o.SessionManager.getInstance().getMainSession(),l=`${this.props.sourceUrl}?token=${n.token}`;return o.React.createElement("tr",{className:"row m-0 content-table-tr"},o.React.createElement("td",{className:"col-2",title:this.state.isHostedInSamePortal?null:this.props.intl.formatMessage({id:"disabledProxyTooltip",defaultMessage:C.defaultMessages.disabledProxyTooltip})},o.React.createElement(C.Switch,{onChange:this.onToggleProxy,checked:s,className:"mr-2",disabled:!this.state.isHostedInSamePortal,"aria-label":this.props.intl.formatMessage({id:"authorized",defaultMessage:C.defaultMessages.authorized}),"aria-checked":s})),o.React.createElement("td",{className:"col-4",title:i},o.React.createElement(C.Link,{to:l,target:"_blank",className:"font-size-13 px-0 text-truncate d-block text-left","aria-label":this.props.intl.formatMessage({id:"subscriberContent",defaultMessage:C.defaultMessages.subscriberContent})},i)),o.React.createElement("td",{className:"col-2"},this.props.isPremium&&o.React.createElement(Rt,{size:"m"})),o.React.createElement("td",{className:"col-2"},s&&o.React.createElement(C.NumericInput,{size:"sm",value:null===(t=this.props.proxySettingConfig)||void 0===t?void 0:t.hitsPerInterval,onChange:this.onHitsPerIntervalChange,precision:0,min:1,className:"request-limit","aria-label":this.props.intl.formatMessage({id:"requestLimit",defaultMessage:C.defaultMessages.requestLimit})})),o.React.createElement("td",{className:"col-2"},s&&o.React.createElement(C.Select,{value:a,onChange:this.onIntervalUnitChange,size:"sm",className:"request-interval","aria-label":this.props.intl.formatMessage({id:"requestInterval",defaultMessage:C.defaultMessages.requestInterval})},Object.keys(this.interval).map(((e,t)=>o.React.createElement("option",{value:e,key:t,selected:e===a},this.interval[e]))))))}}var Lt=f(41349);class Dt extends o.React.PureComponent{constructor(){super(...arguments),this.columnName={authorized:this.props.intl.formatMessage({id:"authorized",defaultMessage:C.defaultMessages.authorized}),subscriberContent:this.props.intl.formatMessage({id:"subscriberContent",defaultMessage:C.defaultMessages.subscriberContent}),credits:this.props.intl.formatMessage({id:"credits",defaultMessage:C.defaultMessages.credits}),requestLimit:this.props.intl.formatMessage({id:"requestLimit",defaultMessage:C.defaultMessages.requestLimit}),requestInterval:this.props.intl.formatMessage({id:"requestInterval",defaultMessage:C.defaultMessages.requestInterval})},this.onProxyChange=(e,t)=>{const i=this.props.proxySettingConfigs||{},s=Object.assign({},i),a=Lt.dataSourceJsonCreator.getDataSourceTypeFromArcGISWholeServiceUrl(e)===o.DataSourceTypes.SceneService;if(t){if(s[e]=t,a){const i=e.replace("/SceneServer","/FeatureServer"),o=Object.assign(Object.assign({},t),{sourceUrl:i});s[i]=o}}else if(delete s[e],a){delete s[e.replace("/SceneServer","/FeatureServer")]}this.props.onChange(s)}}render(){const e=this.props.needProxyItems,t=this.props.proxySettingConfigs;return o.React.createElement("div",{className:(0,o.classNames)("h-100 w-100 bg-light-300",{[this.props.className]:!!this.props.className})},o.React.createElement("div",{className:"subscriber-warning"},this.props.intl.formatMessage({id:"subscriberWarning",defaultMessage:C.defaultMessages.subscriberWarning})),o.React.createElement("div",{className:"secondary-title mt-5 mb-4"},this.props.intl.formatMessage({id:"data",defaultMessage:C.defaultMessages.data})),o.React.createElement("table",{className:"content-table w-100"},o.React.createElement("thead",{className:"content-table-header container"},o.React.createElement("tr",{className:"row"},Object.keys(this.columnName).map(((e,t)=>o.React.createElement("th",{key:t,className:(0,o.classNames)("text-truncate",{"col-4":"subscriberContent"===e,"col-2":"subscriberContent"!==e}),title:this.columnName[e]},this.columnName[e]))))),o.React.createElement("tbody",{className:"container"},e&&Object.keys(e).map(((i,s)=>{var a,n;const l=e[i];return o.React.createElement(Mt,{isPremium:l.isPremium,isSubscriber:l.isSubscriber,sourceUrl:i,intl:this.props.intl,key:s,onChange:this.onProxyChange,label:null===(n=null===(a=l.items)||void 0===a?void 0:a[0])||void 0===n?void 0:n.label,proxySettingConfig:null==t?void 0:t[i]})})))))}}const At=(0,o.injectIntl)((0,v.withStyles)(Dt,"ProxySetting"));var Et;!function(e){e.IMAGE="image",e.ICON="icon"}(Et||(Et={}));var Ut=function(e,t,i,o){return new(i||(i=Promise))((function(s,a){function n(e){try{r(o.next(e))}catch(e){a(e)}}function l(e){try{r(o.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((o=o.apply(e,t||[])).next())}))};const Ft={};class Bt extends o.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.getProxySettingConfigs=e=>Ut(this,void 0,void 0,(function*(){var t,i;const s={},a=null===(i=null===(t=(0,o.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.appProxies;return Object.keys(e).forEach((e=>{const t=St(e,a);t&&(s[e]=t.without("id").without("proxyId").without("proxyUrl"))})),s})),this.registerApp=()=>Ut(this,void 0,void 0,(function*(){var e,t,i,s;const a=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appId;if(Ft[a])return yield Ft[a];const n=`${null===(s=null===(i=(0,o.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.portalUrl}/sharing/rest/oauth2/registerApp`;return Ft[a]=o.esri.restRequest.request(n,{authentication:o.SessionManager.getInstance().getSessionByUrl((0,o.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{itemId:a,appType:"browser",redirect_uris:JSON.stringify([this.getAppRootUrl()])}}),yield Ft[a]})),this.createProxies=e=>Ut(this,void 0,void 0,(function*(){var t,i,s;if(!e)return yield Promise.resolve(null);const a=null===(s=null===(i=null===(t=(0,o.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===s?void 0:s.appProxies,n={};let l=[];if(Object.keys(e).forEach((t=>{const i=e[t];if(!i)return;const o=i.hitsPerInterval,s=i.intervalSeconds,r=St(t,a);bt(r,t,o,s)?n[r.id]=r:l=l.concat({sourceUrl:t,hitsPerInterval:o,intervalSeconds:s})})),0===l.length)return(0,o.Immutable)(n);wt()||(yield this.registerApp());const r={referrers:[this.getAppUrl()].concat(o.proxyUtils.getProxyReferrers())},c=kt();return o.esri.restRequest.request(c,{authentication:o.SessionManager.getInstance().getSessionByUrl((0,o.getAppStore)().getState().portalUrl),httpMethod:"POST",params:{serviceProxyParams:r,proxies:l}}).then((e=>{var t,i;const s=(null==e?void 0:e.appProxies)||[],a=n,l=null===(i=null===(t=(0,o.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===i?void 0:i.appConfig,r=null==l?void 0:l.appProxies;return s.forEach((e=>{const t=St(e.sourceUrl,r),i=(null==t?void 0:t.id)||o.appConfigUtils.getUniqueId("appProxy");a[i]=Object.assign(Object.assign({},e),{id:i})})),(0,o.Immutable)(a)}))})),this.getAppRootUrl=()=>{var e;return null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.origin},this.getAppUrl=()=>{var e,t,i,s,a,n;const l=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appId,r=null===(s=null===(i=(0,o.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===s?void 0:s.appInfo,c="Web Experience Template"===(null==r?void 0:r.type),d=null===(a=o.urlUtils.getAppUrl({appId:l,isTemplate:c}))||void 0===a?void 0:a.replace(/^\//,"");return`${null===(n=this.getAppRootUrl())||void 0===n?void 0:n.replace(/\/$/,"")}/${d}`},this.onProxyConfigChange=e=>{this.setState({proxySettingConfigs:e})},this.onFinish=()=>{var e,t,i,s;this.setState({isLoading:!0});const a=this.state.proxySettingConfigs||{},n=null===(i=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.appProxies,l=n&&Object.values(n).filter((e=>{var t;let i=a[null==e?void 0:e.sourceUrl];if(Lt.dataSourceJsonCreator.getDataSourceTypeFromArcGISWholeServiceUrl(null==e?void 0:e.sourceUrl)===o.DataSourceTypes.FeatureService){const o=null===(t=null==e?void 0:e.sourceUrl)||void 0===t?void 0:t.replace("/FeatureServer","/SceneServer"),s=a[o];i=i||(s?Object.assign(Object.assign({},s),{sourceUrl:null==e?void 0:e.sourceUrl}):null)}return!i||!bt(e,i.sourceUrl,i.hitsPerInterval,i.intervalSeconds)}));Ct(null==l?void 0:l.map((e=>e.proxyId)),null===(s=this.state)||void 0===s?void 0:s.getAppConfigAction()).then((()=>{this.createProxies(a).then((e=>{var t;if(!this.__unmount){if(e){const i=null===(t=this.state)||void 0===t?void 0:t.getAppConfigAction();Object.keys(e).forEach((t=>{null==i||i.editAppProxy(e[t])})),null==i||i.exec()}const i=(0,o.getAppStore)().getState().appStateInBuilder.appConfig;this.props.onFinish(i).then((()=>{this.__unmount||setTimeout((()=>{this.setState({isLoading:!1},(()=>{this.props.onToggle()}))}),3e3)}),(()=>{this.__unmount||setTimeout((()=>{this.setState({isLoading:!1},(()=>{this.props.onToggle()}))}),3e3)}))}}))})).catch((e=>{console.error("Creating proxy failed: ",e),this.setState({isLoading:!1,isError:!0},(()=>{setTimeout((()=>{this.setState({isError:!1})}),5500)}))}))},this.getTostStyle=()=>{var e,t,i,s,a,n,l,r,c;return o.css`
      & {
        height:  ${o.polished.rem(40)};
        top: ${o.polished.rem(60)};
      }
      .jimu-toast-info {
        background: ${null===(i=null===(t=null===(e=this.props)||void 0===e?void 0:e.theme)||void 0===t?void 0:t.sys.color)||void 0===i?void 0:i.secondary.light};
        line-height: ${o.polished.rem(40)};
        color: ${null===(n=null===(a=null===(s=this.props)||void 0===s?void 0:s.theme)||void 0===a?void 0:a.ref.palette)||void 0===n?void 0:n.neutral[1100]};
        font-weight: 300;
        padding: 0 ${o.polished.rem(16)};
        box-shadow: 0 0 ${o.polished.rem(10)} ${o.polished.rem(2)} ${o.polished.rgba(null===(c=null===(r=null===(l=this.props)||void 0===l?void 0:l.theme)||void 0===r?void 0:r.ref.palette)||void 0===c?void 0:c.white,.2)};
      }
    `},this.state={getAppConfigAction:null,isLoading:!1,isError:!1,proxySettingConfigs:null,needProxyItems:null}}componentDidMount(){this.__unmount=!1,o.moduleLoader.loadModule("jimu-for-builder").then((e=>{this.__unmount||this.setState({getAppConfigAction:e.getAppConfigAction})})),this.setState({isLoading:!0}),this.initNeedProxyItemsAndProxySettingConfigs()}componentDidUpdate(e){(!e.isOpen&&this.props.isOpen||e.appProxies!==this.props.appProxies)&&this.initNeedProxyItemsAndProxySettingConfigs()}initNeedProxyItemsAndProxySettingConfigs(){return Ut(this,void 0,void 0,(function*(){this.setState({isLoading:!0});try{const e=yield ht(),t=yield this.getProxySettingConfigs(e);this.__unmount||this.setState({proxySettingConfigs:t,needProxyItems:e,isLoading:!1})}catch(e){this.__unmount||this.setState({isLoading:!1}),console.error("Getting proxy config error",e)}}))}componentWillUnmount(){this.__unmount=!0}render(){const e=this.state.proxySettingConfigs,t=this.state.needProxyItems,i=this.props.intl.formatMessage({id:"subscriberContents",defaultMessage:C.defaultMessages.subscriberContents});return(0,o.jsx)(C.Modal,{isOpen:this.props.isOpen,centered:!0,className:(0,o.classNames)({[this.props.className]:!!this.props.className}),returnfocusafterclose:"true",contentClassName:"proxy-setting-container",backdrop:"static","aria-label":i},(0,o.jsx)(C.ModalHeader,{className:"d-flex justify-content-between header px-30",toggle:this.props.onToggle},(0,o.jsx)("div",{className:"flex-grow-1 text-truncate"},i)),(0,o.jsx)(C.ModalBody,{className:"d-flex px-30"},(0,o.jsx)(At,{onChange:this.onProxyConfigChange,proxySettingConfigs:e,needProxyItems:t})),(0,o.jsx)(C.ModalFooter,{className:"px-30"},(0,o.jsx)(C.Button,{className:"mr-2",type:"primary",onClick:this.onFinish},this.props.intl.formatMessage({id:"publish",defaultMessage:o.defaultMessages.publish})),(0,o.jsx)(C.Button,{type:"default",onClick:this.props.onCancel},this.props.intl.formatMessage({id:"cancel",defaultMessage:o.defaultMessages.cancel}))),this.state.isLoading&&(0,o.jsx)(C.Loading,{type:o.LoadingType.Secondary}),this.state.isError&&(0,o.jsx)(C.Toast,{open:this.state.isError,type:C.ToastType.Info,css:this.getTostStyle(),text:this.props.intl.formatMessage({id:"createProxyToPublishAppError",defaultMessage:C.defaultMessages.createProxyToPublishAppError})}))}}const $t=(0,v.withStyles)((0,v.withTheme)((0,o.injectIntl)(Bt)),"ProxySettingPopup"),zt=o.ReactRedux.connect(((e,t)=>{var i,o;return{appProxies:null===(o=null===(i=null==e?void 0:e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===o?void 0:o.appProxies}}))($t);var Wt=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};class Vt extends o.React.PureComponent{componentDidUpdate(e){this.props.pageId===e.pageId&&this.props.sizemode===e.sizemode||this.props.toggle()}getStyle(){const{theme:e}=this.props;return e&&o.css`
      background-color: ${e.ref.palette.neutral[400]};
      ${(0,v.popperPointer)({background:e.ref.palette.neutral[400],border:{color:e.ref.palette.neutral[600],width:"1px"}})}
    `}render(){const e=this.props,{pageId:t,sizemode:i,dispatch:s}=e,a=Wt(e,["pageId","sizemode","dispatch"]);return(0,o.jsx)(C.Popper,Object.assign({className:"page-aware-popper",css:this.getStyle()},a))}}const Gt=o.ReactRedux.connect((function(e){return{pageId:e.appRuntimeInfo.currentPageId,sizemode:e.browserSizeMode}}))(Vt);var _t=f(62838),Jt=f.n(_t),Ht=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const Kt=e=>{const t=window.SVG,{className:i}=e,s=Ht(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:Jt()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var qt=f(71245),Qt=f.n(qt),Yt=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const Xt=e=>{const t=window.SVG,{className:i}=e,s=Yt(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:Qt()},s)):o.React.createElement("svg",Object.assign({className:a},s))},Zt=1e3,ei=o.css`
  color: var(ref-palette-neutral-1100);

  .widget-enterprise-btn {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .px-20 {
    padding-left: 18px;
    padding-right: 18px;
  }

  .pt-20 {
    padding-top: 20px;
  }

  .list-container {
    height: calc(100% - 150px);
    overflow-y: auto;
    padding-bottom: 20px;
  }

  .groups {
    font-size: 13px;
    font-weight: 600;
    color: var(--ref-palette-neutral-900);
  }

  .group-select {
    width: 210px;
  }

  .widget-group {
    .group-label{
      font-size: 13px;
      font-weight: 600;
      color: var(--ref-palette-neutral-900);
    }
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-row-gap: 0.5rem;
    grid-column-gap: 0.5rem;
  }

  .widget-card {
    height: 80px;
    width: 108px;
    padding: 0;
    border: none;
    position: relative;

    > .jimu-btn {
      border-color: var(--ref-palette-neutral-500);
    }

    .widget-card--content {
      padding-top: 12px;
      cursor: pointer;
      background-color: var(--ref-palette-neutral-500);
      &:hover {
        background-color: var(--ref-palette-neutral-600);
      }
    }

    .widget-card-image {
      width: 20px;
      height: 20px;
      &:after {
        display: none;
      }
      img {
        width: 20px;
        height: 20px;
      }
    }

    .widget-card-name {
      line-height: 1rem;
      max-height: 2rem;
      white-space: normal;
      color: var(--ref-palette-neutral-1200);
      padding: 0 10px;
      font-size: 13px;
    }
  }
`;class ti extends o.React.PureComponent{constructor(e){super(e),this.allGroup={value:Zt,label:this.props.intl.formatMessage({id:"all",defaultMessage:C.defaultMessages.all})},this.getRequireEnterpriseIconTooltip=e=>{if((null==e?void 0:e.length)>0){const t=e.join(", ");return this.props.intl.formatMessage({id:"requireEnterpriseAndUserTypeExtensions",defaultMessage:C.defaultMessages.requireEnterpriseAndUserTypeExtensions},{userTypeExtensions:t})}return this.props.intl.formatMessage({id:"requireEnterprise",defaultMessage:C.defaultMessages.requireEnterprise})},this.WidgetCard=({widgetInfo:e})=>{var t,i,s,a;return(0,o.jsx)("div",{className:"d-flex align-items-start justify-content-center widget-card"},(null===(t=e.manifest)||void 0===t?void 0:t.requireEnterprise)&&(0,o.jsx)(C.Button,{title:this.getRequireEnterpriseIconTooltip(null===(i=e.manifest)||void 0===i?void 0:i.requiredUserTypeExtensions),type:"tertiary",className:"widget-enterprise-btn",disableHoverEffect:!0,disableRipple:!0,icon:!0,size:"sm"},(0,o.jsx)(Xt,null)),(0,o.jsx)(C.Button,{className:"w-100 h-100 p-0",key:e.name,onClick:()=>{this.props.onSelect(e)},"aria-label":e.label},(0,o.jsx)("div",{className:"d-flex flex-column w-100 h-100 widget-card--content"},(0,o.jsx)("div",{className:"d-flex justify-content-center"},(0,o.jsx)("div",{className:"widget-card-image"},(0,o.jsx)(C.Icon,{size:20,className:"w-100 m-0",autoFlip:null===(a=null===(s=e.manifest)||void 0===s?void 0:s.properties)||void 0===a?void 0:a.flipIcon,icon:"string"==typeof e.icon?e.icon:e.icon&&e.icon.svg,color:"var(--ref-palette-neutral-1200)"}))),(0,o.jsx)("div",{className:"flex-grow-1 d-flex align-items-center"},(0,o.jsx)("div",{className:"widget-card-name w-100 text-center text-capitalize text-truncate",css:o.css`
                line-height: 1rem;
                max-height: 2.2rem;
                white-space: normal;
              `,title:e.label},e.label)))))},this.WidgetGroup=({group:e})=>{if(!e)return null;const t=this.WidgetCard;return(0,o.jsx)("div",{className:"widget-group w-100 mb-4"},(0,o.jsx)("h4",{className:"group-label w-100 text-break",title:e.label},e.label),(0,o.jsx)("div",{className:"card-grid m-0"},e.itemList.sort(((e,t)=>e.order-t.order)).map(((e,i)=>e?(0,o.jsx)(t,{widgetInfo:e,key:i}):(0,o.jsx)("div",{className:"widget-card",style:{visibility:"hidden"},key:i})))))},this.getGroupList=(e,t,i)=>{var o,s,a,n;const l=[this.allGroup];if(!!e){const t=this.getCommonGroups(e,Zt,i);t&&Object.values(t).forEach((e=>{"number"==typeof e.groupId&&l.push({value:e.groupId,label:this.getGroupLabel(e.groupId)})}))}if(null===(s=null===(o=this.state.jimuForBuilderUtils)||void 0===o?void 0:o.showCustomWidgets)||void 0===s?void 0:s.call(o,e)){this.getCustomGroup(e,t,Zt,i)&&l.push({value:null===(a=this.state.jimuForBuilderUtils)||void 0===a?void 0:a.CUSTOM_GROUP,label:this.getGroupLabel(null===(n=this.state.jimuForBuilderUtils)||void 0===n?void 0:n.CUSTOM_GROUP)})}return l.filter((e=>!!e.label))},this.changeSelectedGroup=e=>{this.setState({selectedGroup:e.target.value})},this.onSearchValueChange=e=>{this.setState({searchValue:e.target.value,selectedGroup:Zt})},this.state={selectedGroup:Zt,commonWidgetList:null,remoteCustomWidgetList:null,searchValue:"",jimuForBuilderUtils:null},this.searchInputRef=o.React.createRef()}componentDidMount(){this.loadJimuForBuilderUtilsPromise=o.cancelablePromise.cancelable(o.moduleLoader.loadModule("jimu-for-builder").then((e=>{this.setState({jimuForBuilderUtils:null==e?void 0:e.utils})}))),o.lodash.defer((()=>{this.searchInputRef.current.focus()}))}componentDidUpdate(e,t){!t.jimuForBuilderUtils&&this.state.jimuForBuilderUtils&&(this.loadCommonWidgetList(this.state.jimuForBuilderUtils.fetchCommonWidgetList),this.loadCustomWidgetList(this.state.jimuForBuilderUtils.fetchRemoteCustomWidgetList))}componentWillUnmount(){var e,t,i;null===(e=this.loadJimuForBuilderUtilsPromise)||void 0===e||e.cancel(),null===(t=this.loadCommonWidgetsPromise)||void 0===t||t.cancel(),null===(i=this.loadCommonWidgetsPromise)||void 0===i||i.cancel()}loadCommonWidgetList(e){e&&(this.loadCommonWidgetsPromise=o.cancelablePromise.cancelable(e().then((e=>{var t,i;const o=null==e?void 0:e.filter((e=>this.props.isAccepted(e,this.props.isPlaceholder)));null===(i=(t=this.props).onWidgetLoaded)||void 0===i||i.call(t),this.setState({commonWidgetList:o})}))))}loadCustomWidgetList(e){e&&(this.loadRemoteCustomWidgetsPromise=o.cancelablePromise.cancelable(e().then((e=>{var t,i;const o=null==e?void 0:e.filter((e=>this.props.isAccepted(e,this.props.isPlaceholder)));null===(i=(t=this.props).onWidgetLoaded)||void 0===i||i.call(t),this.setState({remoteCustomWidgetList:o})}))))}getGroupLabel(e){var t,i;return null===(i=null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.getWidgetsGroupLabel)||void 0===i?void 0:i.call(t,e,this.props.intl)}getCommonGroups(e,t,i){const o=t===Zt?e:null==e?void 0:e.filter((e=>e.group===t)),s={};return null==o||o.forEach((e=>{var t;if(e.group===(null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.CUSTOM_GROUP))return;const o=this.getGroupLabel(e.group);(this.isFuzzySearch(o,i)||this.isFuzzySearch(e.label,i))&&(s[e.group]||(s[e.group]={label:o,groupId:e.group,itemList:[]}),s[e.group].itemList.push(e))})),s}getCustomGroup(e,t,i,o){var s,a,n;if(i===Zt||i===(null===(s=this.state.jimuForBuilderUtils)||void 0===s?void 0:s.CUSTOM_GROUP)){const i=this.getGroupLabel(null===(a=this.state.jimuForBuilderUtils)||void 0===a?void 0:a.CUSTOM_GROUP),s=(t||[]).concat((null==e?void 0:e.filter((e=>{var t;return e.group===(null===(t=this.state.jimuForBuilderUtils)||void 0===t?void 0:t.CUSTOM_GROUP)})))||[]).filter((e=>this.isFuzzySearch(i,o)||this.isFuzzySearch(e.label,o)));if(!o||s.length>0)return{label:i,groupId:null===(n=this.state.jimuForBuilderUtils)||void 0===n?void 0:n.CUSTOM_GROUP,itemList:s}}return null}isFuzzySearch(e,t){return!!e&&(!t||e.toLocaleLowerCase().includes(t.toLocaleLowerCase()))}render(){var e,t,i,s;const a=this.WidgetGroup,{commonWidgetList:n,remoteCustomWidgetList:l,selectedGroup:r,searchValue:c}=this.state,d=!!n;let p=n;const u=null===(t=null===(e=this.state.jimuForBuilderUtils)||void 0===e?void 0:e.getSectionItemForWidgetsList)||void 0===t?void 0:t.call(e,this.props.intl);d&&this.props.isAccepted(u,this.props.isPlaceholder)&&(p=n.concat([u]));const m=d&&this.getCommonGroups(p,r,c),g=null===(s=null===(i=this.state.jimuForBuilderUtils)||void 0===i?void 0:i.showCustomWidgets)||void 0===s?void 0:s.call(i,p),h=g&&this.getCustomGroup(p,l,r,c),v=this.getGroupList(p,l,c);return(0,o.jsx)("div",{className:(0,o.classNames)("content mt-4",this.props.className),css:ei},(0,o.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-4 px-20"},(0,o.jsx)(C.TextInput,{ref:this.searchInputRef,prefix:(0,o.jsx)(Y,{size:16,color:"var(--ref-palette-neutral-800)"}),value:c,onChange:this.onSearchValueChange,className:"w-100",size:"sm",placeholder:this.props.intl.formatMessage({id:"search",defaultMessage:o.defaultMessages.search}),allowClear:!0})),(0,o.jsx)("div",{className:"d-flex justify-content-between align-items-center mb-4 px-20"},(0,o.jsx)("div",{className:"groups"},this.props.intl.formatMessage({id:"category",defaultMessage:C.defaultMessages.category})),(0,o.jsx)(C.Select,{className:"group-select",size:"sm",value:r,onChange:this.changeSelectedGroup},v.map(((e,t)=>(0,o.jsx)("option",{value:e.value,key:t,selected:e.value===r},e.label))))),(0,o.jsx)("div",{className:"w-100 list-container px-20"},!n&&(0,o.jsx)(C.Loading,{type:C.LoadingType.Secondary}),d&&Object.values(m).sort(((e,t)=>e.groupId-t.groupId)).map(((e,t)=>(0,o.jsx)(a,{key:t,group:e}))),g&&(0,o.jsx)(a,{group:h})))}}ti.defaultProps={isPlaceholder:!1,isAccepted:()=>!0};const ii=(0,o.injectIntl)(ti),oi=[(0,C.getFallbackPlacementsModifier)(["top","right","bottom","left"],!0),{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:0}}],si=o.css`
  background-color: var(--sys-color-surface-paper);
  color: var(--ref-palette-neutral-1100);

  .content {
    height: 600px;
    width: 380px;
    overflow: hidden;
    padding: 0;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
    color: var(--ref-palette-neutral-1100);
  }

  .px-20 {
    padding-left: 20px;
    padding-right: 20px;
  }

  .pt-20 {
    padding-top: 20px;
  }
`;class ai extends o.React.PureComponent{constructor(e){super(e),this.togglePopper=e=>{this.state.open&&this.props.onClose&&this.props.onClose(e)},this.onWidgetLoaded=()=>{this.setState({generation:this.state.generation+1})},this.state={open:!0,generation:0}}render(){var e;return this.state.open?(0,o.jsx)(Gt,{className:this.props.className,placement:null!==(e=this.props.placement)&&void 0!==e?e:"bottom",toggle:this.togglePopper,css:si,version:this.state.generation,modifiers:oi,reference:this.props.referenceElement,open:!0,forceLatestFocusElements:!0,autoFocus:!1},(0,o.jsx)("div",{className:"shadow-3 content",css:this.props.css},(0,o.jsx)("div",{className:"d-flex justify-content-between align-items-center px-20 pt-20"},(0,o.jsx)("div",{className:"title"},this.props.intl.formatMessage({id:"addWidget",defaultMessage:C.defaultMessages.addWidget})),(0,o.jsx)(C.Button,{size:"sm",icon:!0,type:"tertiary",onClick:this.togglePopper,title:this.props.intl.formatMessage({id:"close",defaultMessage:o.defaultMessages.close})},(0,o.jsx)(Kt,null))),(0,o.jsx)(ii,{isPlaceholder:this.props.isPlaceholder,isAccepted:this.props.isAccepted,onSelect:this.props.onSelect,onWidgetLoaded:this.onWidgetLoaded}))):null}}ai.defaultProps={isPlaceholder:!1,isAccepted:()=>!0};const ni=(0,o.injectIntl)(ai);var li=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const ri=o.css`button { padding: 0 !important; }`,ci=e=>{const{rootItemJson:t,onSort:i,onRemove:s,css:a,className:n}=e,l=li(e,["rootItemJson","onSort","onRemove","css","className"]),[r,c]=o.React.useState(0),d=o.React.useMemo((()=>0===r?t:Object.assign({},t)),[t,r]),p=o.React.useCallback(((e,t)=>{"handleDidDrop"===e.updateType&&(null==i||i(e))}),[i]),u=o.hooks.useTranslation(C.defaultMessages),m=o.React.useCallback(((e,t)=>{var i;const a=t.props.itemJsons[0];return(0,o.jsx)("div",{css:ri,className:"d-flex align-items-center justify-content-end"},(null===(i=a.itemChildren)||void 0===i?void 0:i.length)>0&&(0,o.jsx)(C.Tooltip,{title:a.itemStateExpanded?u("collapse"):u("expand")},(0,o.jsx)(C.Button,{onClick:()=>{a.itemStateExpanded=!a.itemStateExpanded,c((e=>e+1))},type:"tertiary",disableHoverEffect:!0,disableRipple:!0,icon:!0,"aria-expanded":a.itemStateExpanded},a.itemStateExpanded?(0,o.jsx)(Ve,{size:"s"}):(0,o.jsx)(Be,{size:"s"}))),(0,o.jsx)(C.Tooltip,{title:u("deleteOption")},(0,o.jsx)(C.Button,{onClick:()=>{null==s||s(a)},type:"tertiary",disableHoverEffect:!0,disableRipple:!0,icon:!0},(0,o.jsx)(Kt,{size:"s"}))))}),[s,u]);(0,v.useTheme)();return(0,o.jsx)(X.Tree,Object.assign({css:[o.css`
width: 100%;
.jimu-tree-main {
  padding: 2px 0 2px 0;
  overflow: hidden;
}
.jimu-tree-item__drag-handle, .jimu-tree-item__title {
  cursor: move;
}
.jimu-tree-item__children-toggle {
  display: none;
}
.toggle-placeholder {
  display: none;
}
.jimu-collapse {
  width: 100%;
}
`,a],className:(0,o.classNames)("sort-tree",n),rootItemJson:d,dndEnabled:!0,isMultiSelection:!1,treeAlignmentType:X.TreeAlignmentType.Intact,renderOverrideItemCommands:m},l,{onUpdateItem:p}))},di=[(0,C.getFallbackPlacementsModifier)(["top","right","bottom","left"],!0),{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:0}}],pi=e=>{const{title:t,placement:i,referenceElement:s,onClose:a,css:n,className:l,rootItemJson:r,onSort:c,onRemove:d}=e;return(0,o.jsx)(v.ThemeSwitchComponent,{useTheme2:!0},(0,o.jsx)(Gt,{placement:null!=i?i:"bottom",reference:s,toggle:a,css:n,className:(0,o.classNames)("sort-tree-popper",l),modifiers:di,open:!0,forceLatestFocusElements:!0},(0,o.jsx)(C.PanelHeader,{className:"p-3",title:t,onClose:a}),(0,o.jsx)("div",{className:"panel-body p-3"},(0,o.jsx)(ci,{rootItemJson:r,onSort:c,onRemove:d}))))};var ui=f(29435),mi=f.n(ui),gi=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const hi=e=>{const t=window.SVG,{className:i}=e,s=gi(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:mi()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var vi=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const fi=()=>o.css`
  .jimu-collapse-wrapper-inner {
    padding-top: var(--sys-spacing-2);
  }
`,yi=()=>o.css`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .label {
    color:  var(--sys-color-action-text);
    &.disabled {
      color: var(--sys-color-action-disabled-text);
    }
  }
`;function Si(e){const{label:t,isEmpty:i,onReset:s,children:a}=e,n=vi(e,["label","isEmpty","onReset","children"]),l=(0,o.jsx)(bi,{label:t,isEmpty:i,onReset:s});return(0,o.jsx)(C.CollapsablePanel,Object.assign({css:fi(),label:l,"aria-label":t},n,{defaultIsOpen:!i}),a)}function bi(e){const{label:t,isEmpty:i,onReset:s}=e,a=o.hooks.useTranslation(C.defaultMessages)("reset");return(0,o.jsx)("div",{css:yi()},(0,o.jsx)("span",{className:(0,o.classNames)("label",{disabled:i})},t),!i&&(0,o.jsx)(C.Button,{size:"sm",variant:"text",icon:!0,title:a,"aria-label":t,className:"p-0",onClick:s},(0,o.jsx)(hi,null)))}var wi=f(16884);function xi(e){var t,i,s,a;const{template:n,onClick:l}=e,r=(0,o.getAppStore)().getState().appContext.locale,c=null!==(i=null===(t=n.i18nLabel)||void 0===t?void 0:t[r])&&void 0!==i?i:n.label,d=null!==(a=null===(s=n.i18nDescription)||void 0===s?void 0:s[r])&&void 0!==a?a:n.description,p=null!=n.gifThumbnail,u="templage_desc_"+n.name,m=o.React.useMemo((()=>o.css`
    transform: ${(0,o.getAppStore)().getState().appContext.isRTL&&n.flipThumbnail?"scaleX(-1);":""}  ;
  `),[n]);return(0,o.jsx)("div",{className:"block-item"},(0,o.jsx)(C.Tooltip,{title:d},(0,o.jsx)(C.Button,{role:"option","aria-label":c,"aria-describedby":u,onClick:l,className:"block-item--icon p-0"},(0,o.jsx)("img",{className:(0,o.classNames)("default-icon",{"multiple-icon":p}),css:m,src:n.thumbnail,draggable:!1,width:n.thumbnailWidth/2,height:n.thumbnailHeight/2}),p&&(0,o.jsx)("img",{className:(0,o.classNames)("gif-icon",{"multiple-icon":p}),css:m,draggable:!1,src:n.gifThumbnail}))),(0,o.jsx)("span",{"aria-hidden":!0,className:"block-item-label text-center mt-2",css:o.css`max-width: ${n.thumbnailWidth/2}px`},c),(0,o.jsx)("span",{"aria-hidden":!0,className:"sr-only",id:u},d))}var Ci=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};function Ii(e){const{templates:t,onItemSelect:i}=e,s=Ci(e,["templates","onItemSelect"]),a=o.React.useMemo((()=>(0,v.getBuilderThemeVariables)()),[]),n=o.React.useMemo((()=>o.css`
    width: auto;
    padding: 20px;
    background-color: ${a?a.ref.palette.neutral[400]:"var(--light-300)"};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 10px;
    grid-column-gap: 10px;

    .block-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 0;

      .jimu-btn {
        border-radius: unset !important;
      }

      .block-item--icon {
        background: ${a?a.ref.palette.neutral[300]:"var(--light-200)"};
        border: none;
        position: relative;
        cursor: pointer;

        .default-icon {
          opacity: 1;
        }
        .gif-icon {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
      .block-item--icon:hover {
        outline: 2px solid ${a?a.sys.color.primary.main:"var(--primary-600)"};
        .default-icon.multiple-icon {
          opacity: 0;
        }
        .gif-icon {
          opacity: 1;
        }
      }

      .block-item-label {
        user-select: none;
        color: ${a?a.ref.palette.neutral[900]:"var(--dark-400)"};
      }
    }

    .size-mode-SMALL & .block-item {
      width: 140px;
      height: auto;
    }
  `),[a]);return(0,o.jsx)("div",Object.assign({className:window.jimuConfig.isInBuilder?v.Theme2GlobalStyleClassName:"",css:n},s,{role:"listbox"}),t.map((e=>(0,o.jsx)(xi,{key:e.name,template:e,onClick:()=>{i(e)}}))))}class ji extends o.React.PureComponent{constructor(e){super(e),this.onTabSelect=e=>{this.props.onTabSelect(e)},this.onFullScreenTypeChange=e=>{this.setState({fullScreenType:e.target.value})},this.state={fullScreenType:"all"}}render(){const{theme:e,formatMessage:t}=this.props,{fullScreenType:i}=this.state;let s=[];return s="fixed"===i?(0,wi.getFullScreenPageTemplates)():"grid"===i?(0,wi.getFullScreenGridPageTemplates)():[(0,wi.getFullScreenPageTemplates)()[0],(0,wi.getFullScreenGridPageTemplates)()[0]].concat((0,wi.getFullScreenPageTemplates)().slice(1),(0,wi.getFullScreenGridPageTemplates)().slice(1)),(0,o.jsx)("div",{className:"w-100 h-100"},(0,o.jsx)("h5",{className:"pt-4 px-5 mb-2 hint-paper text-truncate",title:t("addPage")},t("addPage")),(0,o.jsx)(C.Tabs,{defaultValue:"fullScreenApp",fill:!0,type:"underline",css:o.css`
            height: calc(100% - 49px);
            width: 390px;
            .tab-content {
              height: calc(100% - 30px);
              .tab-pane {
                height: 100%;
                overflow-y: scroll;
              }
              .tab-pane:first-of-type {
                overflow-y: hidden;
              }
            }
            .jimu-nav {
              padding-left: ${e&&e.sys.spacing(5)};
              padding-right: ${e&&e.sys.spacing(5)};
            }
            .nav-item {
              width: 50%;
              .tab-title {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          `,onChange:this.onTabSelect},(0,o.jsx)(C.Tab,{id:"fullScreenApp",title:t("fullScreenApp"),className:C.FOCUSABLE_CONTAINER_CLASS},(0,o.jsx)("div",{className:"d-flex flex-column h-100"},(0,o.jsx)("div",{className:"align-self-end my-4",css:o.css`
                width: 120px;
                padding-right: 1.2rem;
              `},(0,o.jsx)(C.Select,{fluid:!0,value:i,"aria-label":t("page"),size:"sm",onChange:this.onFullScreenTypeChange},(0,o.jsx)("option",{value:"all"},t("all")),(0,o.jsx)("option",{value:"fixed"},t("fixed")),(0,o.jsx)("option",{value:"grid"},t("grid")))),(0,o.jsx)(Ii,{className:(0,o.classNames)({[C.FOCUSABLE_CONTAINER_CLASS]:"fullScreenApp"===this.props.tabId}),templates:s,onItemSelect:this.props.onItemSelect,css:o.css`
                  height: calc(100% - 64px);
                  overflow: auto;
                  padding-top: 0;
                `}))),(0,o.jsx)(C.Tab,{id:"scrollingPage",title:t("scrollingPage"),className:C.FOCUSABLE_CONTAINER_CLASS},(0,o.jsx)(Ii,{className:(0,o.classNames)({[C.FOCUSABLE_CONTAINER_CLASS]:"scrollingPage"===this.props.tabId}),templates:(0,wi.getScrollingPageTemplates)(),onItemSelect:this.props.onItemSelect}))))}}const ki=[{name:"preventOverflow",options:{boundariesElement:"viewport",padding:{bottom:20}}}];class Oi extends o.React.PureComponent{constructor(e){super(e),this.togglePopper=()=>{var e;this.state.open&&this.props.onClose&&this.props.onClose(),this.state.open&&(null===(e=this.props.referenceElement)||void 0===e||e.focus()),this.setState({open:!this.state.open})},this.tabSelect=e=>{this.setState({tabId:e})},this.onItemSelect=e=>{this.props.onClose(),this.props.onItemSelect(e)},this.state={open:!0,tabId:"fullScreenApp"}}render(){const{referenceElement:e,theme:t}=this.props;return(0,o.jsx)(Gt,{placement:"bottom",theme:this.props.theme,reference:e,offset:[0,10],open:!0,toggle:this.togglePopper,showArrow:!0,modifiers:ki,forceLatestFocusElements:!0},(0,o.jsx)("div",{css:o.css`
            width: 390px;
            max-height: 640px;
            height: calc(100vh - 150px);
            overflow: hidden;
          `},(0,o.jsx)(ji,{theme:t,tabId:this.state.tabId,onTabSelect:this.tabSelect,formatMessage:this.props.formatMessage,onItemSelect:this.onItemSelect})))}}class Pi extends o.React.PureComponent{constructor(e){super(e),this.onTypeChange=e=>{this.setState({type:e.target.value})},this.state={type:"all"}}render(){const{formatMessage:e}=this.props,{type:t}=this.state;let i=[];return i="fixedModalWindow"===t?(0,wi.getFixedModalWindowTemplates)():"fixedNonModalWindow"===t?(0,wi.getFixedNonModalWindowTemplates)():"anchoredWindow"===t?(0,wi.getAnchoredWindowTemplates)():(0,wi.getWindowTemplates)(),(0,o.jsx)("div",{className:"w-100 h-100"},(0,o.jsx)("h5",{className:"pt-4 px-5 mb-2 hint-paper text-truncate",title:e("addDialog")},e("addDialog")),(0,o.jsx)("div",{className:"d-flex flex-column h-100"},(0,o.jsx)("div",{className:"align-self-end my-4",css:o.css`
              width: 170px;
              padding-right: 1.2rem;
            `},(0,o.jsx)(C.Select,{fluid:!0,value:this.state.type,"aria-label":e("addDialog"),size:"sm",onChange:this.onTypeChange},(0,o.jsx)("option",{value:"all"},e("all")),(0,o.jsx)("option",{value:"fixedModalWindow"},e("fixedModalWindow")),(0,o.jsx)("option",{value:"fixedNonModalWindow"},e("fixedNonModalWindow")),(0,o.jsx)("option",{value:"anchoredWindow"},e("anchoredWindow")))),(0,o.jsx)(Ii,{templates:i,onItemSelect:this.props.onItemSelect,css:o.css`
              height: calc(100% - 110px);
              overflow: auto;
              padding-top: 0;
              .block-item .block-item--icon {
                outline-offset: -2px;
                img { /* TODO: remove these styles when window thumbnail size is reduced. */
                  width: 160px;
                  height: 134px;
                }
              }
            `})))}}const Ti=[{name:"preventOverflow",options:{boundariesElement:"viewport",padding:{bottom:20}}}];class Ni extends o.React.PureComponent{constructor(e){super(e),this.togglePopper=()=>{var e;this.state.open&&this.props.onClose&&this.props.onClose(),this.state.open&&(null===(e=this.props.referenceElement)||void 0===e||e.focus()),this.setState({open:!this.state.open})},this.onItemSelect=e=>{this.props.onClose(),this.props.onItemSelect(e)},this.state={open:!0}}render(){const{referenceElement:e,theme:t}=this.props;return(0,o.jsx)(Gt,{placement:"bottom",theme:t,reference:e,offset:[0,10],open:!0,toggle:this.togglePopper,showArrow:!0,modifiers:Ti,forceLatestFocusElements:!0},(0,o.jsx)("div",{css:o.css`
            width: 390px;
            max-height: 640px;
            height: calc(100vh - 150px);
            overflow: hidden;
          `},(0,o.jsx)(Pi,{formatMessage:this.props.formatMessage,onItemSelect:this.onItemSelect})))}}const Ri=[{name:"preventOverflow",options:{altAxis:!0,boundariesElement:"viewport",padding:{bottom:20}}},{name:"flip",options:{fallbackPlacements:["right","left"]}}];function Mi(e){const{title:t,templates:i,templateContentStyle:s,referenceElement:a,onItemSelect:n,onClose:l}=e,r=o.React.useMemo((()=>e.theme?e.theme:window.jimuConfig.isInBuilder?(0,v.getTheme2)():(0,v.getTheme)()),[e.theme]),c=o.React.useMemo((()=>o.css`
    min-width: 300px;
    width: auto;
    border: 1px solid ${r?r.ref.palette.neutral[600]:"var(--light-600)"};
    box-shadow: 0 4px 20px 4px rgba(0,0,0,0.50);

    .template-content {
      max-height: 600px;
      height: ${t?"calc(100% - 50px)":"100%"};
      overflow: auto;
    }

    .size-mode-SMALL & .template-content {
      width: 320px;
    }
  `),[r,t]),d=o.React.useCallback((()=>{null==l||l(),"function"==typeof(null==a?void 0:a.focus)&&o.lodash.defer((()=>{null==a||a.focus()}))}),[l,a]),p=o.React.useCallback((e=>{d(),n(e)}),[d,n]);return(0,o.jsx)(Gt,{placement:"bottom",theme:r,css:c,reference:a,offset:[0,10],toggle:d,open:!0,showArrow:!0,modifiers:Ri},t&&(0,o.jsx)("h5",{className:"hint-paper text-truncate title px-5 pt-4 mb-0"},t),(0,o.jsx)("div",{className:"template-content",style:s},(0,o.jsx)(Ii,{templates:i,onItemSelect:p})))}var Li=f(12046),Di=f.n(Li),Ai=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const Ei=e=>{const t=window.SVG,{className:i}=e,s=Ai(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:Di()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var Ui=f(23662),Fi=f.n(Ui),Bi=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const $i=e=>{const t=window.SVG,{className:i}=e,s=Bi(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:Fi()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var zi=f(54578),Wi=f.n(zi),Vi=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const Gi=e=>{const t=window.SVG,{className:i}=e,s=Vi(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:Wi()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var _i=f(14962),Ji=f.n(_i),Hi=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const Ki=e=>{const t=window.SVG,{className:i}=e,s=Hi(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:Ji()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var qi=f(32881),Qi=f.n(qi),Yi=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const Xi=e=>{const t=window.SVG,{className:i}=e,s=Yi(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:Qi()},s)):o.React.createElement("svg",Object.assign({className:a},s))};class Zi extends o.React.PureComponent{constructor(e){super(e),this.preValue=null,this.initRuleOptionName=(e,t)=>{var i,s;const a=(null==e?void 0:e.map((e=>null==e?void 0:e.ruleOptionName)))||[],n=(null==t?void 0:t.map((e=>null==e?void 0:e.ruleOptionName)))||[];let l=!1;(null==e?void 0:e.length)===(null==t?void 0:t.length)&&a.join("")===n.join("")||(l=!0,this.initEditOptionNameStatus(e)),(l||!(null===(s=null===(i=this.state)||void 0===i?void 0:i.ruleOptionName)||void 0===s?void 0:s.length)&&(null==a?void 0:a.length)>0)&&this.setState({ruleOptionName:(0,o.Immutable)(a)})},this.initEditOptionNameStatus=e=>{const t=e.map((e=>!1));this.setState({editOptionNameStatus:t})},this.initData=()=>{if(Array.isArray(this.props.value)&&this.props.value.length)return!1;const e=this.deepClone(this.state.option);e.ruleOptionName=this.props.intl.formatMessage({id:"option",defaultMessage:C.defaultMessages.option})+0;const t=[e];this.props.onChange(t)},this.onOptionChange=(e,t,i,o)=>{const s=this.deepClone(this.props.value);s[t].rule[e][i]=o,this.props.onChange(s,t)},this.onOptionKeyUp=(e,t,i,o,s)=>{"Enter"!==e.key&&" "!==e.key||this.onOptionChange(t,i,o,s)},this.onSelectChange=(e,t,i)=>{const o=e[0];if(!o)return;const s=this.deepClone(this.props.value),a=o.name;s[i].rule[t].jimuFieldName=a,this.props.onChange(s,i)},this.addOption=()=>{const e=Array.isArray(this.props.value),t=e?this.props.value.length:0,i=this.createOptionText(t),o=this.deepClone(this.state.option);o.ruleOptionName=i;const s=e?this.deepClone(this.props.value):[];s.push(o),this.props.onChange(s)},this.createOptionText=e=>{const t=this.props.intl.formatMessage({id:"option",defaultMessage:C.defaultMessages.option})+e;if(!this.isOptionNameRepeat(t))return t;const i=e+1;return this.createOptionText(i)},this.deleteOption=(e,t)=>{if(t&&"Enter"!==t.key&&" "!==t.key)return!1;const i=this.deepClone(this.props.value);i.splice(e,1),this.props.onChange(i)},this.deleteAll=()=>{this.props.onChange([])},this.toggleOptionNameDisplay=(e,t=!1,i)=>{const{editOptionNameStatus:s}=this.state;if(i&&"Enter"!==i.key&&" "!==i.key)return!1;const a=(null==s?void 0:s.asMutable({deep:!0}))||[];a[e]=t,this.setState({editOptionNameStatus:(0,o.Immutable)(a)},(()=>{var e;null===(e=this.inputRef)||void 0===e||e.select()}))},this.handleOptionNameChange=(e,t)=>{if(!t)return;const i=this.deepClone(this.props.value),o=t;!this.isOptionNameRepeat(o)&&o&&(i[e].ruleOptionName=o),this.props.onChange(i)},this.isOptionNameRepeat=e=>{if(!Array.isArray(this.props.value))return!1;let t=!1;return this.props.value.forEach((i=>{i.ruleOptionName===e&&(t=!0)})),t},this.deepClone=e=>{const t=Array.isArray(e)?[]:{};for(const i in e){const o=("object"==typeof e[i]||"function"==typeof e[i])&&null!==e[i];t[i]=o?this.deepClone(e[i]):e[i]}return t},this.setInputRef=e=>{e&&(this.inputRef=e,e.focus())},this.createRuleOptionElement=(e,t,i,s)=>{const a=t.jimuFieldName?(0,o.Immutable)([t.jimuFieldName]):(0,o.Immutable)([]);return(0,o.jsx)("div",{className:"select-down-con",key:t.jimuFieldName||i},this.props.useDataSource&&(0,o.jsx)("div",{className:"sort-field-selector"},(0,o.jsx)(mt.FieldSelector,{useDataSources:e,onChange:(e,t)=>{this.onSelectChange(e,i,s)},selectedFields:a,isDataSourceDropDownHidden:!0,useDropdown:!0,useKeyUpEvent:!0})),[{getTitle:()=>this.nls("ascending"),order:o.OrderRule.Asc},{getTitle:()=>this.nls("descending"),order:o.OrderRule.Desc}].map(((e,a,n)=>(0,o.jsx)(C.Button,{key:a,title:e.getTitle(),size:"sm",type:t.order===e.order?"primary":"secondary",className:"sort-button "+(this.props.singleRowItemOnly&&t.order!==e.order?"collapse":""),onClick:()=>{this.onOptionChange(i,s,"order",this.props.singleRowItemOnly?[...n,n[0]][a+1].order:e.order)},onKeyUp:t=>{this.onOptionKeyUp(t,i,s,"order",this.props.singleRowItemOnly?[...n,n[0]][a+1].order:e.order)}},e.order===o.OrderRule.Asc&&(0,o.jsx)(Ki,{size:"12",className:"sort-arrow-down-icon"}),e.order===o.OrderRule.Desc&&(0,o.jsx)(Gi,{size:"12",className:"sort-arrow-down-icon"})))))},this.onRuleOptionNameChange=(e,t)=>{var i;const s=e.target.value,a=(null===(i=this.state.ruleOptionName)||void 0===i?void 0:i.asMutable({deep:!0}))||[];a[t]=s,this.setState({ruleOptionName:(0,o.Immutable)(a)})},this.createOptionNameElement=(e,t)=>{var i;const{editOptionNameStatus:s}=this.state,a=e.ruleOptionName,n=null===(i=this.state.ruleOptionName)||void 0===i?void 0:i[t],l=this.props.intl.formatMessage({id:"optionNamePlaceholder",defaultMessage:C.defaultMessages.optionNamePlaceholder}),r=(0,o.jsx)(C.TextInput,{className:"flex-grow-1 h-100 edit-input",size:"sm",type:"text",defaultValue:a,onChange:e=>{this.onRuleOptionNameChange(e,t)},onAcceptValue:e=>{this.handleOptionNameChange(t,e)},onBlur:()=>{this.toggleOptionNameDisplay(t,!1)},ref:e=>{this.setInputRef(e)},placeholder:l,title:n||l,"aria-label":n||l});return(0,o.jsx)("div",{className:"option-name d-flex align-items-center flex-grow-1","aria-label":a},s[t]?r:(0,o.jsx)("span",{id:"optionNameCon",title:a,onDoubleClick:()=>{this.toggleOptionNameDisplay(t,!0)}},a),(0,o.jsx)(C.Button,{size:"sm",type:"tertiary",icon:!0,className:"padding-0 option-name-icon-con",title:this.nls("edit"),"aria-describedby":"optionNameCon",onClick:()=>{this.toggleOptionNameDisplay(t,!s[t])},onKeyDown:e=>{this.toggleOptionNameDisplay(t,!s[t],e)}},(0,o.jsx)(Ei,{size:"s",className:"option-name-icon"})))},this.createOptionElement=(e,t,i)=>{let s;s=(0,o.jsx)("div",{className:"close-con text-right"},(0,o.jsx)(C.Button,{size:"sm",icon:!0,type:"tertiary",className:"padding-0",title:this.nls("deleteOption"),onClick:()=>{this.deleteOption(i)},onKeyUp:e=>{this.deleteOption(i,e)}},(0,o.jsx)(Kt,{size:this.props.singleRowItemOnly?14:12,className:"sort-arrow-down-icon"})));const a=()=>t.rule.map(((t,o)=>this.createRuleOptionElement(e,t,o,i)));return(0,o.jsx)("div",{className:"select-con flex-grow-1",key:i,role:"group","aria-label":t.ruleOptionName},this.props.singleRowItemOnly&&(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)("div",{className:"option-name-con"},(0,o.jsx)(Xi,{size:14}),a(),s))||(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)("div",{className:"option-name-con d-flex align-items-center"},(()=>this.createOptionNameElement(t,i))(),s),a()))},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:C.defaultMessages[e]}):e,this.onDataSourceCreated=e=>{},this.state={option:{ruleOptionName:"",isEditOptionName:!1,rule:[{jimuFieldName:"",order:o.OrderRule.Asc}]},ruleOptionName:null,editOptionNameStatus:(0,o.Immutable)([])}}componentDidMount(){this.initData()}componentDidUpdate(e,t){var i,o,s,a;this.preValue=null==e?void 0:e.value,this.initRuleOptionName(null===(i=this.props)||void 0===i?void 0:i.value,null==e?void 0:e.value),(null===(o=null==e?void 0:e.useDataSource)||void 0===o?void 0:o.dataSourceId)!==(null===(a=null===(s=this.props)||void 0===s?void 0:s.useDataSource)||void 0===a?void 0:a.dataSourceId)&&Promise.resolve(!0).then((()=>{this.initData()}))}render(){const{value:e}=this.props,t=this.props.intl.formatMessage({id:"invalidExpression",defaultMessage:C.defaultMessages.invalidExpression});return(0,o.jsx)("div",{className:(0,o.classNames)("sort-con",this.props.singleRowItemOnly&&"single-row-item",{[this.props.className]:!!this.props.className})},(0,o.jsx)("div",null,(0,o.jsx)(C.Button,{type:"tertiary",className:"add-option-btn",onClick:this.addOption},(0,o.jsx)($i,{size:"s",className:"add-option-icon"}),(0,o.jsx)("span",null,this.props.intl.formatMessage({id:"addOption",defaultMessage:C.defaultMessages.addOption}))),(0,o.jsx)(o.DataSourceComponent,{useDataSource:this.props.useDataSource,onDataSourceCreated:this.onDataSourceCreated},(i=>Array.isArray(e)?(0,o.jsx)(X.List,{size:"sm",className:"setting-ui-unit-list",itemsJson:e.asMutable({deep:!0}).map(((e,t)=>({itemStateDetailContent:e,itemKey:`${t}`}))),dndEnabled:!0,onUpdateItem:(e,t)=>{const{itemJsons:i}=t.props,[,o]=i,s=o.map((e=>e.itemStateDetailContent));e.updateType===X.TreeItemActionType.HandleDidDrop&&this.props.onChange(s)},overrideItemBlockInfo:({itemBlockInfo:e})=>({name:X.TreeItemActionType.RenderOverrideItem,children:[{name:X.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:X.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:X.TreeItemActionType.RenderOverrideItemBody,children:[{name:X.TreeItemActionType.RenderOverrideItemDragHandle},{name:X.TreeItemActionType.RenderOverrideItemMainLine}]}]}]}]}),renderOverrideItemMainLine:(e,t)=>{var i;const{itemJsons:s}=t.props,a=s[0],n=s[1];return this.createOptionElement((0,o.Immutable)([null===(i=this.props.useDataSource)||void 0===i?void 0:i.asMutable({deep:!0})]),a.itemStateDetailContent,n.indexOf(a))}}):t)),Array.isArray(e)&&0===e.length&&(0,o.jsx)("div",{className:"no-sort-remind"},(0,o.jsx)("div",null,this.props.intl.formatMessage({id:"noOptionRemindText",defaultMessage:C.defaultMessages.noOptionRemindText})),(0,o.jsx)("div",null,this.props.intl.formatMessage({id:"pleaseAddOne",defaultMessage:C.defaultMessages.pleaseAddOne})))))}}const eo=(0,v.withStyles)((0,o.injectIntl)(Zi),"SortSetting");var to=f(16435),io=f.n(to),oo=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const so=e=>{const t=window.SVG,{className:i}=e,s=oo(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:io()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var ao=f(57993),no=f.n(ao),lo=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const ro=e=>{const t=window.SVG,{className:i}=e,s=lo(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:no()},s)):o.React.createElement("svg",Object.assign({className:a},s))};var co=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const po=e=>{const t=o.hooks.useTranslation(C.defaultMessages),{vertical:i=!1,onChange:s,autoFlip:a=!0,className:n,size:l="sm"}=e,r=co(e,["vertical","onChange","autoFlip","className","size"]);return o.React.createElement(C.AdvancedButtonGroup,Object.assign({size:l,className:(0,o.classNames)("setting--direction-selector",n)},r),o.React.createElement(C.Button,{size:l,title:t("horizontal"),"aria-label":t("horizontal"),type:"default",icon:!0,active:!i,onClick:()=>{s(!1)}},o.React.createElement(so,{autoFlip:a})),o.React.createElement(C.Button,{size:l,title:t("vertical"),"aria-label":t("vertical"),type:"default",icon:!0,active:i,onClick:()=>{s(!0)}},o.React.createElement(ro,null)))};var uo;!function(e){e.Auto="AUTO",e.Custom="CUSTOM"}(uo||(uo={}));class mo extends o.React.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{this.setState((e=>({dropdownOpen:!e.dropdownOpen})))},this.state={dropdownOpen:!1},this._onAutoSelected=this.onSelect.bind(this,uo.Auto),this._onCustomSelected=this.onSelect.bind(this,uo.Custom)}onSelect(e){this.props.mode!==e&&this.props.onChange(e)}getStyle(){return o.css`
      .auto-dropdown.jimu-dropdown {
        width: 26px;
        height: 26px;

        .btn {
          padding: 0 !important;
        }
      }

      & > .jimu-dropdown .jimu-dropdown-button,
      & > .jimu-dropdown .jimu-dropdown-button:hover {
        height: 26px;
        padding: 0 0.375rem;
      }
    `}autoInput(){return(0,o.jsx)(C.Input,{style:{width:"110px"},css:o.css`
          background-color: var(--ref-palette-neutral-600);
          border-color: var(--ref-palette-neutral-600);
          color: var(--ref-palette-black);
          height: 1.625rem;
          border-width: 0;
          padding: 0 0.25rem;
        `,disabled:!0,value:this.props.intl.formatMessage({id:"auto"})})}render(){const{mode:e,intl:t}=this.props,i=t.formatMessage({id:"auto"}),s=t.formatMessage({id:"custom"});return(0,o.jsx)("div",{className:"d-flex",css:this.getStyle()},(0,o.jsx)(C.Dropdown,{className:"auto-dropdown",isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown},(0,o.jsx)(C.DropdownButton,{icon:!0}),(0,o.jsx)(C.DropdownMenu,null,(0,o.jsx)(C.DropdownItem,{onClick:this._onAutoSelected},(0,o.jsx)("span",{css:o.css`width: 1rem;`},e===uo.Auto&&(0,o.jsx)(Rt,{size:"s"})),i),(0,o.jsx)(C.DropdownItem,{onClick:this._onCustomSelected},(0,o.jsx)("span",{css:o.css`width: 1rem;`},e===uo.Custom&&(0,o.jsx)(Rt,{size:"s"})),s))),e===uo.Auto&&this.autoInput(),e===uo.Custom&&this.props.children)}}const go=(0,o.injectIntl)(mo);var ho=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const vo=[{name:"preventOverflow",options:{altAxis:!0}},{name:"flip",options:{fallbackPlacements:["bottom-end","top-end"]}}],fo=(0,v.styled)(C.Popper)((()=>{const e=(0,v.getTheme2)(),t=null==e?void 0:e.ref.palette.neutral[1e3],i=null==e?void 0:e.ref.palette.neutral[1100];return`\n    background-color: ${null==e?void 0:e.ref.palette.neutral[400]};\n    color: ${t};\n    border: 1px solid ${null==e?void 0:e.ref.palette.neutral[600]};\n    > .popper-box {\n      > .panel-header {\n        color: ${t};\n        .action-btn {\n          color: ${t};\n          &:hover {\n            color: ${i};\n          }\n        }\n      }\n    }\n  `})),yo=e=>{const{className:t,placement:i="right-start",popperNodeRef:s,onInitResizeHandler:a,onInitDragHandler:n,version:l,modifiers:r}=e,c=ho(e,["className","placement","popperNodeRef","onInitResizeHandler","onInitDragHandler","version","modifiers"]),d=o.React.useRef(null),p=o.hooks.useForkRef(s,d),[u,m]=o.hooks.useControlled({controlled:l,default:0}),g=o.React.useMemo((()=>[...vo,...null!=r?r:[]]),[r]);return o.React.useEffect((()=>{null==a||a((()=>{var e;null===(e=d.current)||void 0===e||e.classList.add("d-none")}),null,(()=>{var e;m((e=>e+1)),null===(e=d.current)||void 0===e||e.classList.remove("d-none")}))}),[a,m]),o.React.useEffect((()=>{null==n||n((()=>{var e;null===(e=d.current)||void 0===e||e.classList.add("d-none")}),null,(()=>{var e;m((e=>e+1)),null===(e=d.current)||void 0===e||e.classList.remove("d-none")}))}),[n,m]),o.React.createElement(fo,Object.assign({className:(0,o.classNames)("shadow-2",t),modifiers:g,placement:i,popperNodeRef:p,version:u},c))};var So=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const bo=e=>{const{onClose:t,children:i,floating:s}=e,a=So(e,["onClose","children","floating"]),n=o.hooks.useTranslation(C.defaultMessages)("quickStyle");return o.React.createElement(yo,Object.assign({},a,{headerTitle:s?n:"",onHeaderClose:t}),o.React.createElement(o.React.Fragment,null,!s&&o.React.createElement(C.PanelHeader,{className:"px-4 py-2",title:n,onClose:t}),i))},wo=6,xo=20,Co=6,Io="default_geocode";var jo,ko;!function(e){e.Both="Both",e.GeocodeService="GeocodeService",e.FeatureService="FeatureService"}(jo||(jo={})),function(e){e.GeocodeService="GeocodeService",e.FeatureService="FeatureService"}(ko||(ko={}));const Oo="FieldName",Po="FieldValue",To=99,No=1e3,Ro=20,Mo="__",Lo="objectid",Do="address",Ao="default_address",Eo="Default Address",Uo="https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",Fo="ArcGIS World Geocoding Service";var Bo,$o=f(71371),zo=function(e,t,i,o){return new(i||(i=Promise))((function(s,a){function n(e){try{r(o.next(e))}catch(e){a(e)}}function l(e){try{r(o.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((o=o.apply(e,t||[])).next())}))};!function(e){e.Pass="Pass",e.NotHttps="Not_Https",e.InvalidURL="Invalid_URL"}(Bo||(Bo={}));const Wo=e=>{if(!e)return"geocoder";const t=e.split("/");return t[t.length-2]||"geocoder"},Vo=e=>!!e&&/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(e);function Go(e){return zo(this,void 0,void 0,(function*(){const{useUtility:t}=e,i=(null==e?void 0:e.geocodeURL)||(yield Qo(t));return Yo(i).then((t=>{if((null==t?void 0:t.urlCheckResultType)!==Bo.Pass)return Promise.resolve({urlCheckResult:t});{const i=t.addressFields.concat(t.candidateFields),o=Object.assign(Object.assign({},e),{urlCheckResult:t,fields:i}),s=_o(o);return Promise.resolve({urlCheckResult:t,dataSourceConfig:s})}}))}))}const _o=e=>{const{urlCheckResult:t,useUtility:i,fields:o,datasourceConfig:s,configId:a,viewId:n,createOutputDs:l,id:r,dataSourceConfigItem:c,geocodeURL:d,notAddNewUtility:p}=e,{singleLineFieldName:u,spatialReference:m,isSupportSuggest:g}=t,h=ds(null==s?void 0:s.asMutable({deep:!0})),v=a||ps(h,n);let f=s?s.asMutable({deep:!0}):[];const y=Ho(i,d),S=Ko(i,d),{addressFieldsSchema:b,defaultAddressFieldName:w}=os(o),x={configId:v,icon:null,label:y,hint:S,useUtility:i,searchServiceType:ko.GeocodeService,singleLineFieldName:u,isSupportSuggest:g,spatialReference:m};return p&&(x.geocodeURL=d),l&&(x.outputDataSourceId=`${r}_output_${v}`,x.addressFields=b,x.displayFields=Jo(b,w),x.defaultAddressFieldName=w),(null==c?void 0:c.configId)?f=s.map((e=>(null==e?void 0:e.configId)===v?x:e)):f.push(x),f},Jo=(e,t)=>{let i;return null==e||e.forEach((e=>{var o;(null===(o=null==e?void 0:e.jimuName)||void 0===o?void 0:o.toLocaleLowerCase())===t&&(i=e)})),i||(i=e[0]),[i]},Ho=(e,t)=>{if(null==e?void 0:e.utilityId)return o.UtilityManager.getInstance().getLabelOfUseUtility(e);if(t){const e=qo(t);return null==e?void 0:e.name}},Ko=(e,t)=>{var i;if(null==e?void 0:e.utilityId){const t=o.UtilityManager.getInstance().getUtilityJson(e.utilityId);return null===(i=null==t?void 0:t.orgSetting)||void 0===i?void 0:i.placeholder}if(t){const e=qo(t);return null==e?void 0:e.placeholder}},qo=e=>{var t;const i=null===(t=(0,o.getAppStore)().getState().portalSelf)||void 0===t?void 0:t.helperServices;return((null==i?void 0:i.geocode)||[]).filter((t=>(null==t?void 0:t.url)===e))[0]},Qo=e=>zo(void 0,void 0,void 0,(function*(){return o.UtilityManager.getInstance().getUrlOfUseUtility(e).then((e=>Promise.resolve(e)),(e=>Promise.reject(e)))})),Yo=e=>zo(void 0,void 0,void 0,(function*(){const t=new RegExp("^(([h][t]{2}[p][s])?://)");if(!e||!t.test(e))return Promise.resolve({urlCheckResultType:Bo.NotHttps});try{return(0,o.loadArcGISJSAPIModules)(["esri/request"]).then((t=>{const[i]=t;return i(e,{query:{f:"json"},responseType:"json"}).then((e=>{var t;const i=(null==e?void 0:e.data)||{};if(null==i?void 0:i.capabilities){const e=(null==i?void 0:i.singleLineAddressField)||{},o=(null==i?void 0:i.addressFields)||[],s=(null==i?void 0:i.spatialReference)||null,a=(null==i?void 0:i.candidateFields)||[],n=(null===(t=null==i?void 0:i.capabilities)||void 0===t?void 0:t.split(","))||[],l=null==n?void 0:n.includes("Suggest");return Promise.resolve({urlCheckResultType:Bo.Pass,singleLineFieldName:null==e?void 0:e.name,addressFields:o,isSupportSuggest:l,candidateFields:a,spatialReference:s})}return Promise.resolve({urlCheckResultType:Bo.InvalidURL})}),(e=>Promise.resolve({urlCheckResultType:Bo.InvalidURL})))}))}catch(e){return Promise.resolve({urlCheckResultType:Bo.InvalidURL})}}));function Xo(e){return zo(this,void 0,void 0,(function*(){var t,i;const{nls:s,isSingle:a,createOutputDs:n,id:l,viewId:r,notAddNewUtility:c}=e,d=(null===(i=null===(t=function(e){var t;const i=null===(t=(0,o.getAppStore)().getState().portalSelf)||void 0===t?void 0:t.helperServices;return(0,$o.extractService)(i,o.SupportedUtilityType.GeoCoding,null,null,e)}(s))||void 0===t?void 0:t[0])||void 0===i?void 0:i.children)||[];if(a){const e={utility:d[0],id:l,createOutputDs:n,viewId:r,notAddNewUtility:c,index:0},t=yield Zo(e);return Promise.resolve(t?[t]:[])}{const e=null==d?void 0:d.map(((e,t)=>Zo({utility:e,id:l,createOutputDs:n,viewId:Io,notAddNewUtility:c,index:t}))),t=yield Promise.all(e),i=null==t?void 0:t.filter((e=>!!e));return Promise.resolve(i)}}))}function Zo(e){return zo(this,void 0,void 0,(function*(){const{utility:t,id:i,createOutputDs:s,viewId:a,notAddNewUtility:n,index:l}=e;if(!t)return Promise.resolve(null);let r=o.UtilityManager.getInstance().getIdOfOrgUtility(t.name,t.url,t.index,t.label);r||n||(r=(0,$o.addNewUtility)(t));const c=a?`${a}_${r||l}`:`${Io}_${r||l}`,d=a?`${a}_${t.index}`:`${Io}_${t.index}`;return Go({id:i,createOutputDs:s,dataSourceConfigItem:null,viewId:n?d:c,configId:null,datasourceConfig:null,useUtility:{utilityId:r},geocodeURL:t.url,notAddNewUtility:n}).then((e=>{var t,i;return(null===(t=e.urlCheckResult)||void 0===t?void 0:t.urlCheckResultType)===Bo.Pass&&(null===(i=e.dataSourceConfig)||void 0===i?void 0:i.length)>0?Promise.resolve(e.dataSourceConfig[0]):Promise.resolve(null)}))}))}const es={jimuName:Lo,alias:"OBJECTID",type:o.JimuFieldType.Number,name:Lo},ts=(e="",t=[])=>{const i={};return null==t||t.forEach(((e,t)=>{i[null==e?void 0:e.jimuName]=e,0===t&&(i[Lo]=es)})),{label:e,idField:Lo,fields:i}},is=(e,t=0)=>{let i=Ao;return null==e||e.forEach((o=>{i=t?`${i}${t}`:i,o.jimuName===i&&(i=is(e,t+=1))})),i},os=(e=[])=>{const t=null==e?void 0:e.map((e=>({jimuName:null==e?void 0:e.name,alias:null==e?void 0:e.alias,type:o.JimuFieldType.String,name:null==e?void 0:e.name}))),i=is(t,0),s={jimuName:i,alias:Eo,type:o.JimuFieldType.String,name:i};return t.unshift(s),{addressFieldsSchema:t,defaultAddressFieldName:i}},ss=(e,t,i,s)=>{const a=s||(e=>Vo(e)?Fo:Wo(e))(i),n=ms(t,e),l=ts(s);return{id:n,type:o.DataSourceTypes.FeatureLayer,label:a,originDataSources:[],isOutputFromWidget:!0,isDataInDataSourceInstance:!1,schema:l,geometryType:"esriGeometryPoint"}},as=e=>e?e.type===o.DataSourceTypes.SceneLayer?e.getAssociatedDataSource():e:null,ns=(e,t)=>!(!e||!t)&&t.some((t=>t.dataSourceId===e.dataSourceId)),ls=(e,t)=>{var i;return(null===(i=t.filter((t=>(null==t?void 0:t.dataSourceId)===(null==e?void 0:e.dataSourceId))))||void 0===i?void 0:i.length)>0},rs=(e,t)=>{var i;if((null==e?void 0:e.length)!==(null==t?void 0:t.length))return!0;const o=[];if(null==e||e.forEach((e=>{var i;const s=t.filter((t=>(null==t?void 0:t.dataSourceId)===(null==e?void 0:e.dataSourceId)));(null==s?void 0:s.length)>0&&o.push({dsFields:null==e?void 0:e.fields,preDsFields:null===(i=s[0])||void 0===i?void 0:i.fields})})),(null==o?void 0:o.length)!==(null==e?void 0:e.length))return!0;return(null===(i=null==o?void 0:o.filter((e=>{var t,i,o,s;const a=(null===(t=null==e?void 0:e.dsFields)||void 0===t?void 0:t.length)!==(null===(i=null==e?void 0:e.preDsFields)||void 0===i?void 0:i.length),n=(null===(s=null===(o=null==e?void 0:e.dsFields)||void 0===o?void 0:o.filter((t=>{var i;return!(null===(i=null==e?void 0:e.preDsFields)||void 0===i?void 0:i.includes(t))})))||void 0===s?void 0:s.length)>0;return a||n})))||void 0===i?void 0:i.length)>0},cs=(e,t,i)=>{var o,s,a;const n=(null===(o=null==e?void 0:e.useDataSources)||void 0===o?void 0:o.asMutable({deep:!0}))||[],l=(null===(s=null==e?void 0:e.outputDataSources)||void 0===s?void 0:s.asMutable({deep:!0}))||[];if((null==n?void 0:n.length)!==(null==t?void 0:t.length)||(null==l?void 0:l.length)!==(null==i?void 0:i.length))return!0;const r=rs(t,n),c=(null===(a=l.filter((e=>!(null==i?void 0:i.includes(e)))))||void 0===a?void 0:a.length)>0;return r||c},ds=e=>null==e?void 0:e.map((e=>e.configId)),ps=(e,t)=>{if(!e||0===(null==e?void 0:e.length))return t?`config_${t}_0`:"config_0";const i=us(e);return t?`config_${t}_${i+1}`:`config_${i+1}`},us=e=>{var t;const i=null==e?void 0:e.map((e=>{var t;const i=null===(t=null==e?void 0:e.split("_"))||void 0===t?void 0:t.pop();return i?Number(i):0}));return null===(t=null==i?void 0:i.sort(((e,t)=>t-e)))||void 0===t?void 0:t[0]},ms=(e,t)=>{var i;if(!e)return`${t}_output_0`;const o=null===(i=null==e?void 0:e.split("_"))||void 0===i?void 0:i.pop();return`${t}_output_${Number(o)}`},gs=e=>{const{datasourceConfig:t,dsJsonOriginDs:i,useDataSource:o,configId:s,viewId:a,fieldsInMapSearchProperties:n,exactMatch:l,label:r}=e,c=ds(null==t?void 0:t.asMutable({deep:!0})),d=s||ps(c,a),p=r||(null==i?void 0:i.getLabel()),u=vs(o,n);o.fields=null==u?void 0:u.map((e=>null==e?void 0:e.jimuName));return{configId:d,icon:null,label:p,displayLabel:!0,useDataSource:o,displayFields:u,searchFields:u,hint:"",searchServiceType:ko.FeatureService,searchExact:!!l}},hs=e=>{const{datasourceConfig:t,datasourceConfigItem:i,configId:o}=e;let s=t?t.asMutable({deep:!0}):[];const a=gs(e);return(null==i?void 0:i.configId)?s=s.map((e=>(null==e?void 0:e.configId)===o?a:e)):s.push(a),{dsConfigItem:a,datasourceConfig:s}},vs=(e,t)=>{var i,s,a,n,l;const r=o.DataSourceManager.getInstance().getDataSource(null==e?void 0:e.dataSourceId),c=(null==r?void 0:r.getLayerDefinition)&&(null===(i=null==r?void 0:r.getLayerDefinition())||void 0===i?void 0:i.displayField);let d;(null==t?void 0:t.length)>0&&(d=t.map((e=>null==e?void 0:e.name)));const p=null===(s=null==r?void 0:r.getSchema())||void 0===s?void 0:s.fields;let u;const m=[];for(const e in p)(null===(a=null==p?void 0:p[e])||void 0===a?void 0:a.type)!==o.JimuFieldType.Date&&m.push(null==p?void 0:p[e]),(null===(n=null==p?void 0:p[e])||void 0===n?void 0:n.name)===c&&(null===(l=null==p?void 0:p[e])||void 0===l?void 0:l.type)!==o.JimuFieldType.Date&&c&&(u=null==p?void 0:p[e]);let g=[];return d?g=null==m?void 0:m.filter((e=>d.includes(e.name))):(null==m?void 0:m.length)>0&&(g=(null==m?void 0:m.length)>1?[(0,o.Immutable)(m[1])]:[(0,o.Immutable)(m[0])]),d&&0===(null==g?void 0:g.length)&&(null==m?void 0:m.length)>0&&(g=(null==m?void 0:m.length)>1?[(0,o.Immutable)(m[1])]:[(0,o.Immutable)(m[0])]),d&&(null==g?void 0:g.length)>0?g:u?[(0,o.Immutable)(u)]:g},fs=e=>o.DataSourceManager.getInstance().createDataSourceByUseDataSource((0,o.Immutable)(e)).then((e=>{const t=as(e);return t||Promise.reject(Error("")),t})),ys=e=>{const t={useDataSources:[],outputDataSources:[]};return Object.keys(e||{}).forEach((i=>{var s;const a=e[i],n=Ss((0,o.Immutable)((null==a?void 0:a.dataSourceConfig)||[]),!0);null===(s=n.useDataSources)||void 0===s||s.forEach((e=>{ls(e,null==t?void 0:t.useDataSources)?t.useDataSources=xs(e,t.useDataSources):t.useDataSources.push(e)})),t.outputDataSources=t.outputDataSources.concat(n.outputDataSources)})),t},Ss=(e,t)=>{var i;return null===(i=null==e?void 0:e.asMutable({deep:!0}))||void 0===i?void 0:i.reduce(((e,i)=>{const o=null==i?void 0:i.useDataSource;if(o&&(ls(o,null==e?void 0:e.useDataSources)?e.useDataSources=xs(o,null==e?void 0:e.useDataSources):null==e||e.useDataSources.push(o)),t){const t=ws(i);t&&e.outputDataSources.push(t)}return e}),{useDataSources:[],outputDataSources:[]})},bs=(e,t,i)=>{var s,a,n,l;const r=(0,o.getAppStore)().getState(),c=null===(n=null===(a=null===(s=null==r?void 0:r.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===a?void 0:a.widgets)||void 0===n?void 0:n[t],d={id:t};return d.useDataSources=null==e?void 0:e.useDataSources,i&&(d.outputDataSources=null===(l=null==e?void 0:e.outputDataSources)||void 0===l?void 0:l.map((e=>null==e?void 0:e.id))),{dsInWidgetJson:d,isWidgetJsonDsChanged:cs(c,d.useDataSources,d.outputDataSources)}},ws=(e,t=!0)=>{let i;return(null==e?void 0:e.searchServiceType)===ko.GeocodeService&&(i={id:null==e?void 0:e.outputDataSourceId,type:o.DataSourceTypes.FeatureLayer,label:null==e?void 0:e.label,originDataSources:[],isOutputFromWidget:t,isDataInDataSourceInstance:!1,schema:ts(null==e?void 0:e.label,null==e?void 0:e.addressFields),geometryType:"esriGeometryPoint"}),i},xs=(e,t)=>t.map((t=>{if((null==e?void 0:e.dataSourceId)===(null==t?void 0:t.dataSourceId)){const i=(null==e?void 0:e.fields)||[],o=(null==t?void 0:t.fields)||[],s=Array.from(new Set(o.concat(i)));t.fields=s}return t}));var Cs=f(79298),Is=f(35809);const js=e=>{const t={overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:X.TreeItemActionType.RenderOverrideItem,children:[{name:X.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:X.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:X.TreeItemActionType.RenderOverrideItemBody,children:[{name:X.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:X.TreeItemActionType.RenderOverrideItemDragHandle},{name:X.TreeItemActionType.RenderOverrideItemIcon,autoCollapsed:!0},{name:X.TreeItemActionType.RenderOverrideItemTitle},{name:X.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})},i=o.css`
    &{
      max-height: 256px;
      overflow-y: auto;
    }
  `,s=(0,v.useTheme)(),{disPlayField:a,useDataSource:n,onFieldChange:l}=e;return(0,o.jsx)("div",{className:"w-100"},(0,o.jsx)(mt.FieldSelector,{useDataSources:n?(0,o.Immutable)([n]):(0,o.Immutable)([]),onChange:e=>{l(e,a,!0)},selectedFields:(0,o.Immutable)(null==a?void 0:a.map((e=>null==e?void 0:e.name))),isMultiple:!0,isDataSourceDropDownHidden:!0,useDropdown:!0,useMultiDropdownBottomTools:!0,types:(0,o.Immutable)([o.JimuFieldType.Number,o.JimuFieldType.String])}),(0,o.jsx)("div",{css:i},(0,o.jsx)(X.List,Object.assign({size:"sm",className:"mt-2",itemsJson:Array.from(a).map(((e,t)=>({itemStateDetailContent:e,itemKey:`${null==e?void 0:e.name}${t}`,itemStateIcon:mt.dataComponentsUtils.getIconFromFieldType(e.type,s),itemStateTitle:e.alias||e.jimuName||e.name,itemStateCommands:[]}))),dndEnabled:!0,onUpdateItem:(e,t)=>{const{itemJsons:i}=t.props,[,o]=i,s=o.map((e=>e.itemStateDetailContent));l(s,a,!0)}},t))))},{useEffect:ks,useRef:Os}=o.React,Ps=(0,o.Immutable)([o.AllDataSourceTypes.FeatureLayer,o.AllDataSourceTypes.SceneLayer,o.AllDataSourceTypes.BuildingComponentSubLayer,o.AllDataSourceTypes.OrientedImageryLayer,o.AllDataSourceTypes.ImageryLayer,o.AllDataSourceTypes.SubtypeGroupLayer,o.AllDataSourceTypes.SubtypeSublayer]),Ts=e=>{var t;const i=o.hooks.useTranslation(C.defaultMessages,o.defaultMessages),s=Os(null),{trigger:a,isOpen:n,id:l,datasourceConfig:r,dsConfigItemIndex:c,popperFocusNode:d,viewId:p,propsForDataSourceSelector:u,toggle:m,updateConfigForLayerOptions:g,onSettingChange:h,dsStatusChange:v,hideIconSetting:f}=e,y=(null==r?void 0:r[c])||(0,o.Immutable)({}),{configId:S,label:b,icon:w,searchFields:x,searchExact:I,displayFields:j,hint:k,useDataSource:O}=y,[P,T]=o.React.useState(null),[N,R]=o.React.useState(b);ks((()=>{S&&R(b)}),[S]),ks((()=>{S&&b!==N&&R(b)}),[y]),ks((()=>{n&&(clearTimeout(s.current),s.current=setTimeout((()=>{const e=document.querySelector(".search-ds-setting-popper .action-close");null==e||e.focus()}),200))}),[n]);const M=()=>{const e=ds(null==r?void 0:r.asMutable({deep:!0})),t=S||ps(e,p);let i=r?r.asMutable({deep:!0}):[];const s={configId:t,icon:null,label:"......",displayLabel:!0,useDataSource:null,displayFields:[],searchFields:[],hint:"",searchServiceType:ko.FeatureService};i=i.map((e=>(null==e?void 0:e.configId)===t?s:e)),g((0,o.Immutable)(i))},L=(e,t,i=!1)=>{var s,a;if(!e)return;const n=i?"displayFields":"searchFields";let l=A(e);0===(null==l?void 0:l.length)&&(l=null===(a=null===(s=(0,o.Immutable)(t))||void 0===s?void 0:s.asMutable({deep:!0}))||void 0===a?void 0:a.splice(0,1));const d=null==r?void 0:r.asMutable({deep:!0});let p=null==y?void 0:y.setIn([n],l);p=D(p),null==d||d.splice(c,1,null==p?void 0:p.asMutable({deep:!0})),g((0,o.Immutable)(d))},D=e=>{var t,i,o,s;const a=(null===(i=null===(t=null==e?void 0:e.searchFields)||void 0===t?void 0:t.asMutable({deep:!0}))||void 0===i?void 0:i.map((e=>null==e?void 0:e.jimuName)))||[],n=(null===(s=null===(o=null==e?void 0:e.displayFields)||void 0===o?void 0:o.asMutable({deep:!0}))||void 0===s?void 0:s.map((e=>null==e?void 0:e.jimuName)))||[],l=Array.from(new Set(a.concat(n)));return e.setIn(["useDataSource","fields"],l)},A=e=>null==e?void 0:e.filter((e=>(null==e?void 0:e.type)!==(null===o.JimuFieldType||void 0===o.JimuFieldType?void 0:o.JimuFieldType.Date))),E=(e,t)=>{const i=null==r?void 0:r.asMutable({deep:!0}),s=null==y?void 0:y.setIn(e,t);null==i||i.splice(c,1,null==s?void 0:s.asMutable({deep:!0})),h((0,o.Immutable)(i),null,p)},U=e=>{E(["searchExact"],!I)},F=e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;R(i)},B=e=>{e?(R(null==e?void 0:e.trim()),E(["label"],null==e?void 0:e.trim())):R(b)},$=e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;E(["hint"],i)},z=(null==y?void 0:y.useDataSource)?[null===(t=null==y?void 0:y.useDataSource)||void 0===t?void 0:t.asMutable({deep:!0})]:[];return(0,o.jsx)(Cs.SidePopper,{className:"search-ds-setting-popper",isOpen:n,position:"right",toggle:m,trigger:a,title:i("setLayerSource"),backToFocusNode:d},(0,o.jsx)("div",{className:"w-100 h-100",css:o.css`overflow: auto;`},(0,o.jsx)(Cs.SettingSection,{style:{paddingTop:0}},(0,o.jsx)(Cs.SettingRow,{flow:"wrap",label:i("data")},(0,o.jsx)(mt.DataSourceSelector,{closeDataSourceListOnChange:!0,types:Ps,useDataSources:(0,o.Immutable)(z),disableRemove:()=>!0,mustUseDataSource:!0,onChange:e=>{e&&e.length>0?1===(null==e?void 0:e.length)||S?(e=>{fs(e).then((t=>{const i=hs({datasourceConfig:r,datasourceConfigItem:y,dsJsonOriginDs:t,useDataSource:e,configId:S});g((0,o.Immutable)(i.datasourceConfig))}))})(e[0]):(e=>{const t=e.map((e=>fs(e).then((t=>{const i=gs({datasourceConfig:r,datasourceConfigItem:y,dsJsonOriginDs:t,useDataSource:e,configId:null});return Promise.resolve(i)}))));Promise.all(t).then((e=>{const t=[];e=e.map((e=>{if(null==t?void 0:t.includes(null==e?void 0:e.configId)){const i=ps(t,p);e.configId=i}return t.push(e.configId),e}));let i=r?r.asMutable({deep:!0}):[];i=i.concat(e),g((0,o.Immutable)(i),!0)}))})(e):M()},widgetId:l,isBatched:!0,isMultiple:!S,disableDataView:null==u?void 0:u.disableDataView,fromDsIds:(null==u?void 0:u.fromDsIds)?(0,o.Immutable)(null==u?void 0:u.fromDsIds):null,fromRootDsIds:(null==u?void 0:u.fromRootDsIds)?(0,o.Immutable)(null==u?void 0:u.fromRootDsIds):null}))),(null==y?void 0:y.configId)&&P&&(0,o.jsx)("div",null,(0,o.jsx)(Cs.SettingSection,null,(0,o.jsx)(Cs.SettingRow,{flow:"wrap",label:i("label")},(0,o.jsx)(C.TextInput,{"aria-label":i("label"),size:"sm",value:N||"",onAcceptValue:B,onChange:F,className:"w-100",placeholder:i("findAddressOrPlace")}))),!f&&(0,o.jsx)(Cs.SettingSection,null,(0,o.jsx)(Cs.SettingRow,{label:i("searchIcon")},(0,o.jsx)(Is.IconPicker,{icon:w,onChange:e=>{E(["icon"],e)},configurableOption:"none",setButtonUseColor:!1}))),(0,o.jsx)(Cs.SettingSection,{title:i("searchOptions"),role:"group","aria-label":i("searchOptions")},(0,o.jsx)(Cs.SettingRow,{flow:"wrap",label:i("selectSearchFields"),role:"group","aria-label":i("selectSearchFields")},(0,o.jsx)(mt.FieldSelectorWithFullTextIndex,{useDataSources:O?(0,o.Immutable)([O]):(0,o.Immutable)([]),onChange:e=>{L(e,x)},selectedFields:(0,o.Immutable)(null==x?void 0:x.map((e=>null==e?void 0:e.name))),isMultiple:!0,isDataSourceDropDownHidden:!0,useDropdown:!0,useMultiDropdownBottomTools:!0,widgetId:l,types:(0,o.Immutable)([o.JimuFieldType.Number,o.JimuFieldType.String])}),(0,o.jsx)("div",{className:"mt-2","aria-label":i("exactMatch"),onClick:U},(0,o.jsx)(C.Checkbox,{title:i("exactMatch"),checked:I,className:"mr-1"}),i("exactMatch"))),(0,o.jsx)(Cs.SettingRow,{flow:"wrap",label:i("displayFields"),role:"group","aria-label":i("displayFields")},(0,o.jsx)(js,{disPlayField:j||[],onFieldChange:L,useDataSource:O})),(0,o.jsx)(Cs.SettingRow,{flow:"wrap",label:i("searchHint")},(0,o.jsx)(C.TextInput,{size:"sm",value:k||"",title:k||i("findAddressOrPlace"),"aria-label":i("searchHint"),onChange:$,className:"w-100",placeholder:i("findAddressOrPlace")})))),(null==z?void 0:z[0])&&(0,o.jsx)("div",{className:"waiting-for-database"},(0,o.jsx)(o.DataSourceComponent,{useDataSource:(0,o.Immutable)(z[0]),onDataSourceCreated:e=>{T(e),e&&v(e.id,!0)},onCreateDataSourceFailed:e=>{if(!(null==y?void 0:y.useDataSource))return!1;const t=y.useDataSource.dataSourceId;v(t,!1)}}))))};var Ns=f(96745),Rs=f.n(Ns),Ms=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const Ls=e=>{const t=window.SVG,{className:i}=e,s=Ms(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:Rs()},s)):o.React.createElement("svg",Object.assign({className:a},s))},{useEffect:Ds,useRef:As}=o.React;var Es;!function(e){e.Pass="Pass",e.NotHttps="Not_Https",e.InvalidURL="Invalid_URL"}(Es||(Es={}));const Us=[o.SupportedUtilityType.GeoCoding],Fs=/http(s)?:\/\/(geocode|geocodedev|geocodeqa)(\.){0,3}\.arcgis\.com\/arcgis\/rest\/services\/World\/GeocodeServer/g,Bs=e=>{const t=o.hooks.useTranslation(C.defaultMessages,o.defaultMessages),i=As(null),{id:s,trigger:a,toggle:n,isOpen:l,datasourceConfig:r,dsConfigItemIndex:c,popperFocusNode:d,createOutputDs:p,viewId:u,onSettingChange:m,updateConfigForLayerOptions:g,hideIconSetting:h}=e,v=(null==r?void 0:r[c])||(0,o.Immutable)({}),{configId:f,label:y,icon:S,hint:b,outputDataSourceId:w,displayFields:x}=v,[I,j]=o.React.useState(y),[k,O]=o.React.useState(!1),[P,T]=o.React.useState(Es.Pass),[N,R]=o.React.useState(null==v?void 0:v.useUtility),[M,L]=o.React.useState(!1),[D,A]=o.React.useState(!1),[E,U]=o.React.useState(null),[F,B]=o.React.useState(null),[$,z]=o.React.useState(!1);Ds((()=>{l&&(clearTimeout(i.current),i.current=setTimeout((()=>{const e=document.querySelector(".search-locator-setting-popper .action-close");null==e||e.focus()}),200))}),[l]),Ds((()=>{l&&(T(Es.Pass),L(!1),(null==v?void 0:v.useUtility)?(Qo(null==v?void 0:v.useUtility).then((e=>{O(!1),B(e),Yo(e).then((e=>{O(!0),T(null==e?void 0:e.urlCheckResultType)}),(e=>{O(!0)}))})),R(null==v?void 0:v.useUtility),j(null==v?void 0:v.label)):(R(null),j(Fo)))}),[c,f,l]),Ds((()=>{j(null==v?void 0:v.label),A(null==v?void 0:v.enableCountryCode),U(null==v?void 0:v.countryCode)}),[v]),Ds((()=>{z(Fs.test(F))}),[F]);const W=(e,t)=>{const i=null==r?void 0:r.asMutable({deep:!0}),s=null==v?void 0:v.setIn(e,t);null==i||i.splice(c,1,null==s?void 0:s.asMutable({deep:!0})),m((0,o.Immutable)(i),null,u)},V=e=>{const t=e[0];if(R(t||null),t){L(!0);const e={id:s,createOutputDs:p,dataSourceConfigItem:v,viewId:u,configId:f,datasourceConfig:r,useUtility:null==t?void 0:t.asMutable({deep:!0})};O(!1),Go(e).then((e=>{O(!0),L(!1);const{urlCheckResult:t,dataSourceConfig:i}=e;(null==t?void 0:t.urlCheckResultType)!==Es.Pass?R(null):g((0,o.Immutable)(i))}),(e=>{O(!0)}))}else G()},G=()=>{const e=ds(null==r?void 0:r.asMutable({deep:!0})),t=f||ps(e,u);let i=r?r.asMutable({deep:!0}):[];const s={configId:t,icon:null,label:".....",hint:"",useUtility:null,searchServiceType:ko.GeocodeService,singleLineFieldName:""};i=r.map((e=>(null==e?void 0:e.configId)===t?s:e)),g((0,o.Immutable)(i))},_=o.css`
    &>div {
      padding: 0!important;
    }
  `,J=e=>{var t;if(!e)return(0,o.Immutable)([]);const i=null===(t=(0,o.getAppStore)().getState().appStateInBuilder.appConfig)||void 0===t?void 0:t.utilities;if(null==i?void 0:i[e.utilityId])return(0,o.Immutable)([e]);(0,o.Immutable)([])};return(0,o.jsx)(Cs.SidePopper,{className:"search-locator-setting-popper",isOpen:l,position:"right",toggle:n,trigger:a,title:t("setLocatorSource"),backToFocusNode:d},(0,o.jsx)("div",{className:"w-100 h-100",css:o.css`overflow: auto;`},(0,o.jsx)(Cs.SettingSection,{style:{paddingTop:0}},(0,o.jsx)(Cs.SettingRow,{flow:"wrap",label:t("locatorSource")},(0,o.jsx)("div",{className:"w-100",css:_},(0,o.jsx)($o.UtilitySelector,{useUtilities:J(N),onChange:V,showRemove:!1,types:Us,closePopupOnSelect:!0})),P!==Es.Pass&&k&&(0,o.jsx)("div",{className:"d-flex w-100 align-items-center justify-content-between mt-1"},(0,o.jsx)(C.Alert,{form:"basic",type:"warning",className:"w-100",open:!0,withIcon:!0,text:t("invalidUrlMessage")})))),M&&(0,o.jsx)(C.Loading,{type:C.LoadingType.Secondary,width:38,height:38}),P===Es.Pass&&f&&N&&(0,o.jsx)("div",null,(0,o.jsx)(Cs.SettingSection,null,(0,o.jsx)(Cs.SettingRow,{flow:"wrap",label:t("label")},(0,o.jsx)(C.TextInput,{"aria-label":t("label"),size:"sm",value:I||"",onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;j(i)},onAcceptValue:e=>{e?(j(null==e?void 0:e.trim()),W(["label"],null==e?void 0:e.trim())):j(y)},className:"w-100"}))),!h&&(0,o.jsx)(Cs.SettingSection,null,(0,o.jsx)(Cs.SettingRow,{label:t("searchIcon")},(0,o.jsx)(Is.IconPicker,{icon:S,onChange:e=>{W(["icon"],e)},configurableOption:"none",setButtonUseColor:!1}))),(0,o.jsx)(Cs.SettingSection,{title:t("searchOptions"),role:"group","aria-label":t("searchOptions")},w&&(0,o.jsx)(Cs.SettingRow,{flow:"wrap",label:t("displayFields"),role:"group","aria-label":t("displayFields")},(0,o.jsx)(js,{disPlayField:x||[],onFieldChange:(e,t,i=!1)=>{var s,a;if(!e)return;0===(null==e?void 0:e.length)&&(e=null===(a=null===(s=(0,o.Immutable)(t))||void 0===s?void 0:s.asMutable({deep:!0}))||void 0===a?void 0:a.splice(0,1));const n=null==r?void 0:r.asMutable({deep:!0}),l=null==v?void 0:v.setIn(["displayFields"],e);null==n||n.splice(c,1,null==l?void 0:l.asMutable({deep:!0})),g((0,o.Immutable)(n))},useDataSource:{dataSourceId:w,mainDataSourceId:w}})),(0,o.jsx)(Cs.SettingRow,{flow:"wrap",label:t("searchHint")},(0,o.jsx)(C.TextInput,{size:"sm","aria-label":t("searchHint"),title:b||t("findAddressOrPlace"),value:b||"",onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;W(["hint"],i)},className:"w-100",placeholder:t("findAddressOrPlace")})),$&&(0,o.jsx)(Cs.SettingRow,null,(0,o.jsx)("div",{className:"d-flex w-100 align-items-center"},(0,o.jsx)(C.Checkbox,{className:"mr-3",checked:D,onChange:()=>{A(!D),W(["enableCountryCode"],!D)}}),(0,o.jsx)("div",null,t("searchCountryCodeLabel")))),(null==v?void 0:v.enableCountryCode)&&(0,o.jsx)(Cs.SettingRow,null,(0,o.jsx)(C.TextInput,{placeholder:t("searchCountryCodeHint"),"aria-label":t("label"),size:"sm",value:E||"",onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;U(i)},onAcceptValue:e=>{U(null==e?void 0:e.trim()),W(["countryCode"],null==e?void 0:e.trim())},className:"w-100",suffix:(0,o.jsx)(C.Button,{disableHoverEffect:!0,disableRipple:!0,type:"tertiary",size:"sm",target:"_blank",icon:!0,href:"https://developers.arcgis.com/rest/geocode/api-reference/geocode-coverage.htm"},(0,o.jsx)(Ls,null))}))))))};var $s=function(e,t,i,o){return new(i||(i=Promise))((function(s,a){function n(e){try{r(o.next(e))}catch(e){a(e)}}function l(e){try{r(o.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,l)}r((o=o.apply(e,t||[])).next())}))};const{useState:zs,useRef:Ws}=o.React,Vs=f(62838),Gs=o.css`
  .warning-alert-con {
    padding: 0 !important;
  }
  .warning-alert-con .jimu-icon-component {
    color: var(--sys-color-warning-light) !important;
  }
  .setting-ui-unit-list-new {
    margin-top: 4px;
  }
`,_s=e=>{const t=o.hooks.useTranslation(o.defaultMessages,C.defaultMessages),i=Ws(!1),s=Ws(null),a=Ws(null),n=Ws(null),{className:l,datasourceConfig:r,useDataSources:c,dsConfigItemIndex:d,createOutputDs:p,showSourcePanel:u,showNewSourceItem:m,id:g,dataSourceCreateStatus:h,onDsConfigIdChange:v,updateConfigForLayerOptions:f,hideSidePopper:y}=e,S=o.ReactRedux.useSelector((e=>{var t,i,o;return null===(o=null===(i=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.widgets)||void 0===o?void 0:o[g]})),b=o.ReactRedux.useSelector((e=>{var t,i;return null===(i=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.widgets})),w={overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:X.TreeItemActionType.RenderOverrideItem,children:[{name:X.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:X.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:X.TreeItemActionType.RenderOverrideItemBody,children:[{name:X.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:X.TreeItemActionType.RenderOverrideItemDragHandle},{name:X.TreeItemActionType.RenderOverrideItemIcon,autoCollapsed:!0},{name:X.TreeItemActionType.RenderOverrideItemTitle},{name:X.TreeItemActionType.RenderOverrideItemDetailToggle},{name:X.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})},[x,I]=zs(null),[j,k]=zs(null),[O,P]=zs(!1),[T,N]=zs(null);o.ReactRedux.useSelector((e=>{var i,s;const n={},l=(null===(s=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===s?void 0:s.utilityStates)||{};null==r||r.forEach((e=>{(null==e?void 0:e.searchServiceType)===ko.GeocodeService&&(n[e.configId]=((e,i)=>{var s,a;if((null==e?void 0:e.searchServiceType)===ko.FeatureService)return null;const n=null===(s=null==e?void 0:e.useUtility)||void 0===s?void 0:s.utilityId;return o.UtilityManager.getInstance().utilityHasSignInError(n)?t("signInErrorDefault"):!1===(null===(a=null==i?void 0:i[n])||void 0===a?void 0:a.success)?t("utilityNotAvailable"):null})(null==e?void 0:e.asMutable({deep:!0}),l))})),a.current=n}));const R=o.hooks.useEventCallback((()=>{const e=null==r?void 0:r.asMutable({deep:!0});null==e||e.splice(j,1),f((0,o.Immutable)(e)),y()})),M=e=>{var t;(null===(t=r[e])||void 0===t?void 0:t.searchServiceType)===ko.GeocodeService?i.current?L(e):$s(void 0,void 0,void 0,(function*(){return!i.current&&o.moduleLoader.loadModule("jimu-ui/advanced/data-source-selector").then((e=>(i.current=!0,s.current=e.dataComponentsUtils,n.current=e.DataSourceRemoveWaringReason,N(e.DataSourceRemoveWarningPopup),Promise.resolve(!0))))})).then((()=>{L(e)})):D(e)},L=o.hooks.useEventCallback((e=>{const t=r[e].outputDataSourceId;0===s.current.getWidgetsUsingDsOrItsDescendantDss(t,b).length?D(e):(I(t),P(!0),k(e))})),D=e=>{const t=null==r?void 0:r.asMutable({deep:!0});null==t||t.splice(e,1),f((0,o.Immutable)(t)),y()},A=o.hooks.useEventCallback((e=>{const t=(null==r?void 0:r.map((e=>null==e?void 0:e.configId)))||[],i=(null==e?void 0:e.map((e=>null==e?void 0:e.configId)))||[];return t.join("")!==i.join("")}));return(0,o.jsx)("div",{className:`w-100 mt-2 ${l||""}`,css:Gs},(0,o.jsx)(X.List,Object.assign({className:"w-100",itemsJson:Array.from(r).map(((e,i)=>{var o;return{itemStateDetailContent:e,itemKey:`${i}`,itemStateChecked:u&&i===d,itemStateTitle:null==e?void 0:e.label,itemStateIcon:{icon:null===(o=e.icon)||void 0===o?void 0:o.svg},itemStateCommands:[{label:t("deleteOption"),iconProps:()=>({icon:Vs,size:12}),action:()=>{M(i)}}]}})),dndEnabled:!0,renderOverrideItemDetailToggle:(e,i)=>{var s,n;const{itemJsons:l}=i.props,[r]=l,d=null==r?void 0:r.itemStateDetailContent,u=(null==d?void 0:d.searchServiceType)===ko.GeocodeService,m=u?null==d?void 0:d.outputDataSourceId:null===(s=null==d?void 0:d.useDataSource)||void 0===s?void 0:s.dataSourceId,g=!!p&&!((e,t=!1)=>{let i,o=!0;if(t){const t=(null==S?void 0:S.outputDataSources)||[];i=(null==t?void 0:t.filter((t=>e===t)).length)>0}else i=(null==c?void 0:c.filter((t=>e===t.dataSourceId)).length)>0;return"boolean"!=typeof(null==h?void 0:h[e])||(null==h?void 0:h[e])||(o=!1),i&&e&&o})(m,u),v=null===(n=a.current)||void 0===n?void 0:n[d.configId];return u&&v?(0,o.jsx)(C.Alert,{className:"warning-alert-con",variant:"text",form:"tooltip",size:"small",type:"warning",text:v}):g&&m?(0,o.jsx)(C.Alert,{variant:"text",form:"tooltip",size:"small",type:"error",text:t("dataSourceCreateError")}):""},onUpdateItem:(e,t)=>{const{itemJsons:i}=t.props,[,s]=i,a=s.map((e=>e.itemStateDetailContent));v(null),A(a)&&f((0,o.Immutable)(a))},onClickItemBody:(e,t)=>{var i;const{itemJsons:[o]}=t.props,s=(null===(i=null==o?void 0:o.itemStateDetailContent)||void 0===i?void 0:i.searchServiceType)===ko.GeocodeService;v(+o.itemKey,s)}},w)),m&&(0,o.jsx)(X.List,Object.assign({className:"setting-ui-unit-list-new",itemsJson:[{name:"......"}].map(((e,t)=>({itemStateDetailContent:"item",itemKey:"index",itemStateChecked:!0,itemStateTitle:"......",itemStateCommands:[]}))),dndEnabled:!1,renderOverrideItemDetailToggle:()=>""},w)),T&&(0,o.jsx)(T,{dataSourceId:x,isOpen:O,toggle:()=>{P(!O)},reason:n.current.DataSourceRemoved,afterRemove:()=>{I(null),k(null),P(!1)},beforeRemove:R}))},{useSelector:Js}=o.ReactRedux,{useRef:Hs,useEffect:Ks}=o.React,qs=e=>{var t,i,s,a;const n=o.hooks.useTranslation(C.defaultMessages,o.defaultMessages),l=(0,v.useTheme)(),{datasourceConfig:r,id:c,useDataSources:d,searchDataSettingType:p,createOutputDs:u,hideIconSetting:m,enableFiltering:g,viewId:h,hideEnableFiltering:f,hideTitleOfNewSearchSource:y,propsForDataSourceSelector:S,autoSelectSingleGeocodeService:b,autoSelectAllOrgGeocodeService:w,onSettingChange:x,onOutputDsSettingChange:I,onEnableFilteringChange:j}=e,k=Hs(null),O=Hs(null),P=Hs(!1),T=Hs(null),N=Hs(null),[R,M]=o.React.useState(!1),[L,D]=o.React.useState(!1),[A,E]=o.React.useState(!1),[U,F]=o.React.useState(!1),[B,$]=o.React.useState(null),[z,W]=o.React.useState(null),[V,G]=o.React.useState((0,o.Immutable)({})),[_,J]=o.React.useState(!1),H=Js((e=>{var t,i,o;return null===(o=null===(i=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.widgets)||void 0===o?void 0:o[c]})),K=Js((e=>e.appStateInBuilder.appConfig.utilities)),q=o.css`
    & {
      background-color: ${null===(i=null===(t=null==l?void 0:l.sys.color)||void 0===t?void 0:t.secondary)||void 0===i?void 0:i.main};
    }
  `,Q=o.css`
    .data-remind {
      color: ${null===(a=null===(s=null==l?void 0:l.ref.palette)||void 0===s?void 0:s.neutral)||void 0===a?void 0:a[1e3]};
      font-size: ${o.polished.rem(12)};
    }
    .loading-con {
      height: 80px;
    }
  `;Ks((()=>{T.current=null==r?void 0:r.asMutable({deep:!0}),u&&X()}),[r]),Ks((()=>{const e=(w||b)&&!N.current&&!P.current&&!r,t=T.current||[];if(e){const e={nls:n,id:c,createOutputDs:u,viewId:h,isSingle:b};P.current=!0,J(!0),Xo(e).then((e=>{if(P.current=!1,N.current=e,J(!1),e){let i=t;i=null==e?void 0:e.concat(i),te((0,o.Immutable)(i))}}),(e=>{J(!1),P.current=!1}))}}),[w,b]),Ks((()=>{Y(K)}),[K]);const Y=e=>{let t=!1;const i=null==r?void 0:r.filter((i=>{var o;if((null==i?void 0:i.searchServiceType)===ko.FeatureService)return!0;{const s=null===(o=null==i?void 0:i.useUtility)||void 0===o?void 0:o.utilityId;return!s||(!!(null==e?void 0:e[s])||(t=!0,!1))}}));t&&te(i)},X=()=>{const e=(null==H?void 0:H.outputDataSources)||[],t=(null==r?void 0:r.asMutable({deep:!0}))||[];for(let i;i<(null==t?void 0:t.length)-1;i++){const o=t[i];if((null==o?void 0:o.searchServiceType)===ko.FeatureService)continue;const s=null==o?void 0:o.outputDataSourceId;if(!(null==e?void 0:e.includes(s))){te(r);break}}},Z=()=>{E(!1),D(!1),$(null)},ee=e=>{const t=e?!A:!L;if(F(t),t){const e=(null==r?void 0:r.length)||0;$(e),se(e,!0)}e?D(t):E(t)},te=(e,t=!1)=>{ie(e)&&F(!1),t&&Z();const i=Ss(e,u),o=bs(i,c,u);u?I&&I(i.outputDataSources,e,o,h):x&&x(e,o,h)},ie=e=>(null==e?void 0:e.length)!==(null==r?void 0:r.length),oe=()=>{var e;const t=null===(e=null==r?void 0:r.asMutable({deep:!0}))||void 0===e?void 0:e.filter((e=>(null==e?void 0:e.useDataSource)||(null==e?void 0:e.useUtility)));te((0,o.Immutable)(t))},se=(e,t=!1)=>{let i;i=t?O.current.getElementsByClassName("add-search-btn")[0]:O.current.getElementsByClassName("jimu-tree-item__body")[e],W(i)};return(0,o.jsx)("div",null,(0,o.jsx)(Cs.SettingSection,{css:Q},!y&&(0,o.jsx)(Cs.SettingRow,{flow:"wrap"},(0,o.jsx)("span",{className:"w-100 data-remind"},n("addSources"))),(0,o.jsx)(Cs.SettingRow,{flow:"wrap"},(0,o.jsx)("div",{className:"w-100",ref:O},(0,o.jsx)("div",null,(!p||p===jo.Both)&&(0,o.jsx)(C.Dropdown,{className:"w-100",size:"sm",toggle:()=>{M(!R)},isOpen:R,autoWidth:!0},(0,o.jsx)(C.DropdownButton,{className:"add-search-btn w-100",title:n("newSearchSource"),arrow:!1,icon:!0,type:"primary"},(0,o.jsx)("div",{className:"w-100 text-truncate"},(0,o.jsx)($i,{className:"mr-1 d-inline-block",autoFlip:!0}),n("newSearchSource"))),(0,o.jsx)(C.DropdownMenu,{css:q},(0,o.jsx)(C.DropdownItem,{className:"w-100",onClick:()=>{ee(!0)},title:n("layerSource")},n("layerSource")),(0,o.jsx)(C.DropdownItem,{className:"w-100",onClick:()=>{ee(!1)},title:n("locatorSource")},n("locatorSource")))),p===jo.FeatureService&&(0,o.jsx)(C.Button,{type:"primary",className:"w-100 add-search-btn",onClick:()=>{ee(!0)}},(0,o.jsx)($i,{className:"mr-1 d-inline-block",autoFlip:!0}),n("layerSource")),p===jo.GeocodeService&&(0,o.jsx)(C.Button,{type:"primary",className:"w-100 add-search-btn",onClick:()=>{ee(!1)}},(0,o.jsx)($i,{className:"mr-1 d-inline-block",autoFlip:!0}),n("locatorSource"))),(0,o.jsx)("div",{className:"w-100",ref:k},(0,o.jsx)(_s,{id:c,dsConfigItemIndex:B,datasourceConfig:r||(0,o.Immutable)([]),showSourcePanel:(()=>{var e;return(null===(e=null==r?void 0:r[B])||void 0===e?void 0:e.searchServiceType)===ko.GeocodeService?A:L})(),useDataSources:d,onDsConfigIdChange:(e,t)=>{F(!1),"number"==typeof e?(se(e,!1),B===e?t?(E(!A),D(!1)):(D(!L),E(!1)):($(e),t?(E(!0),D(!1)):(D(!0),E(!1)))):Z()},showNewSourceItem:U,updateConfigForLayerOptions:te,hideSidePopper:Z,createOutputDs:u,dataSourceCreateStatus:V}))),(0,o.jsx)(Ts,{viewId:h,id:c,dsConfigItemIndex:B,datasourceConfig:r||(0,o.Immutable)([]),useDataSources:d,isOpen:L,onSettingChange:x,trigger:null==k?void 0:k.current,updateConfigForLayerOptions:te,toggle:()=>{L&&$(null),D(!L),F(!1),oe()},dsStatusChange:(e,t=!1)=>{const i=V.set(e,t);G(i)},popperFocusNode:z,hideIconSetting:m,propsForDataSourceSelector:S}),(0,o.jsx)(Bs,{id:c,viewId:h,dsConfigItemIndex:B,datasourceConfig:r||(0,o.Immutable)([]),useDataSources:d,isOpen:A,onSettingChange:x,updateConfigForLayerOptions:te,trigger:null==k?void 0:k.current,toggle:()=>{A&&$(null),E(!A),F(!1),oe()},popperFocusNode:z,hideIconSetting:m,createOutputDs:u})),_&&(0,o.jsx)(Cs.SettingRow,null,(0,o.jsx)("div",{className:"position-relative w-100 loading-con"},(0,o.jsx)(C.Loading,{type:C.LoadingType.Secondary,width:38,height:38})))),(p===jo.Both||p===jo.FeatureService)&&!f&&(0,o.jsx)(Cs.SettingSection,null,(0,o.jsx)(Cs.SettingRow,{label:n("enableSearchFilter")},(0,o.jsx)(C.Switch,{checked:g,onChange:e=>{const t=e.target.checked;j&&j(t)},title:n("enableSearchFilter")}))),(p===jo.Both||p===jo.FeatureService)&&(0,o.jsx)("span",null))};var Qs=f(68972);const Ys=e=>{const t=o.hooks.useTranslation(C.defaultMessages,o.defaultMessages),i=(0,v.useTheme)(),s=o.css`
    .check-box-label {
      color: ${i.ref.palette.neutral[1100]}
    }
    .search-setting-con {
      padding-left: 0;
      padding-right: 0;
    }
    .checkbox-con .jimu-widget-setting--row-label{
      max-width: 100%;
    }
    .cursor-pointer {
      cursor: pointer;
    }
  `,{onSettingChange:a,hideRecentSearchSetting:n}=e,l=e.settingConfig||(0,o.Immutable)({}),{maxSuggestions:r,isUseCurrentLoation:c,isShowRecentSearches:d,recentSearchesMaxNumber:p}=l,[u,m]=o.React.useState(p),[g,h]=o.React.useState(r);(0,Qs.useEffect)((()=>{m(p),h(r)}),[l]);const f=(e,t)=>{const i=l.setIn(e,t);a&&a(i)},y=(e,t=1)=>{if(0===(null==e?void 0:e.length))return!0;if(isNaN(Number(e)))return!1;{const i=Number(e);return Number.isInteger(i)&&i>=t}};return(0,o.jsx)("div",{css:s},(0,o.jsx)(Cs.SettingRow,{flow:"wrap",className:"mt-2 checkbox-con",label:t("maximumSuggestions")},(0,o.jsx)(C.TextInput,{size:"sm","aria-label":t("maximumSuggestions"),value:g,onChange:e=>{const t=e.target.value;y(t,0)&&h(t)},onAcceptValue:e=>{(!e||e>xo)&&h(e=r||wo),y(e,0)&&f(["maxSuggestions"],Number(e))},className:"w-100"})),(0,o.jsx)(Cs.SettingRow,null,(0,o.jsx)("div",{className:"cursor-pointer d-flex align-items-center",onClick:e=>{f(["isUseCurrentLoation"],!c)},"aria-label":t("useCurrentLocation")},(0,o.jsx)(C.Checkbox,{checked:!!c,className:"mr-1",title:t("useCurrentLocation")}),(0,o.jsx)("span",{className:"check-box-label"},t("useCurrentLocation")))),!n&&(0,o.jsx)(Cs.SettingRow,{label:t("recentSearches")},(0,o.jsx)(C.Switch,{checked:d||!1,title:t("recentSearches"),onChange:e=>{f(["isShowRecentSearches"],!d)}})),d&&(0,o.jsx)(Cs.SettingRow,{label:t("maximumNumber")},(0,o.jsx)(C.TextInput,{size:"sm","aria-label":t("maximumNumber"),value:u,onChange:e=>{const t=e.target.value;y(t)&&m(t)},onAcceptValue:e=>{e||m(e=p||Co),y(e)&&f(["recentSearchesMaxNumber"],Number(e))},style:{width:"50px"}})))},Xs=e=>{const t=o.hooks.useTranslation(C.defaultMessages,o.defaultMessages),{hint:i,onSettingChange:s}=e,[a,n]=o.React.useState(i);(0,Qs.useEffect)((()=>{n(i)}),[i]);return(0,o.jsx)("div",{className:"general-setting-con"},(0,o.jsx)(Cs.SettingRow,{flow:"wrap",label:t("multiSearchHint")},(0,o.jsx)(C.TextInput,{"aria-label":t("multiSearchHint"),title:a||t("findAddressOrPlace"),size:"sm",value:a,onChange:e=>{var t;const i=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;n(i)},onAcceptValue:e=>{n(e),s&&s(e)},className:"w-100",placeholder:t("findAddressOrPlace")})))};var Zs=f(28996),ea=f.n(Zs),ta=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const ia=function(e){var t,i;const{mapWidgetId:s,disabled:a,disableSwitchMap:n=!1,onClick:l,sidePopperContent:r,isDataSourceValid:c,showDefaultMapWhenEmpty:d,keepLastTimeMap:p=!1,"aria-describedby":u=""}=e,m=ta(e,["mapWidgetId","disabled","disableSwitchMap","onClick","sidePopperContent","isDataSourceValid","showDefaultMapWhenEmpty","keepLastTimeMap","aria-describedby"]),g=o.React.useRef(""),h=o.React.useRef(null),[v,f]=o.React.useState(!1),[y,S]=o.React.useState(null),[b,w]=o.React.useState(""),[x,I]=o.React.useState(null),[j,k]=o.React.useState(null),O=Z.MapViewManager.getInstance().getJimuMapViewGroup(s),[P,T]=o.React.useState(!1),N=o.hooks.useTranslation(C.defaultMessages),R=o.ReactRedux.useSelector((e=>{var t,i,o;const a=e.appStateInBuilder;return a&&(null===(o=null===(i=null===(t=null==a?void 0:a.appConfig)||void 0===t?void 0:t.widgets)||void 0===i?void 0:i[s])||void 0===o?void 0:o.useDataSources)})),M=o.ReactRedux.useSelector((e=>{const t=e.appStateInBuilder;return t&&(null==t?void 0:t.dataSourcesInfo)}),((e,t)=>{if(R){for(const i of R)if(e&&t&&e[i.dataSourceId]!==t[i.dataSourceId])return!1;return!0}return!0}));o.React.useEffect((()=>{if(!P)if(R&&0!==(null==R?void 0:R.length)){let e=0;for(const t of R){const i=null==M?void 0:M[t.dataSourceId];!i||i.instanceStatus!==o.DataSourceStatus.Created&&i.instanceStatus!==o.DataSourceStatus.CreateError||(e++,e===R.length&&T(!0))}}else T(!0)}),[P,M,R]);const L=o.React.useCallback((()=>{const e=[];for(let t=0;t<2;t++)e.push({itemKey:t.toString(),itemStateCommands:[{iconProps:()=>({icon:" ",size:12,style:{opacity:0}})}]});return(0,o.jsx)(X.List,{className:"w-100",itemsJson:e,dndEnabled:!1,handleClickItemBody:()=>{}})}),[]),D=o.React.useCallback((e=>{if(!e)return"";return e.getLabel()||(null==e?void 0:e.getDataSourceJson().sourceLabel)||e.id}),[]),A=null===(i=null===(t=null==R?void 0:R.asMutable())||void 0===t?void 0:t.sort(((e,t)=>e.dataSourceId.localeCompare(t.dataSourceId))))||void 0===i?void 0:i.map((e=>{var t;const i=o.DataSourceManager.getInstance().getDataSource(e.dataSourceId);let s=null;const n=[];return c&&!c(e.dataSourceId).isValid&&n.push({label:null===(t=c(e.dataSourceId))||void 0===t?void 0:t.invalidMessage,iconProps:()=>({icon:ea(),size:16,color:"var(--warning-700)"})}),s=i?{itemStateTitle:D(i),itemStateChecked:e.dataSourceId===g.current,itemKey:`${e.dataSourceId}`,itemStateDisabled:a,itemStateCommands:n}:{itemStateTitle:N("none"),itemKey:`${e.dataSourceId}`,itemStateDisabled:!0},s})),E=o.React.useCallback((()=>!d||R&&0!==R.length?A:[{itemStateTitle:N("multipleMapDefaultWebMap"),itemKey:"default",itemStateChecked:"default"===g.current,itemStateDisabled:a}]),[A,a,d,N,R]);o.React.useEffect((()=>{if(!(null==O?void 0:O.jimuMapViews))return;const e=Object.keys(null==O?void 0:O.jimuMapViews).map((e=>null==O?void 0:O.jimuMapViews[e].whenJimuMapViewLoaded()));Promise.all(e).then((()=>{var e;const t=(null===(e=null==O?void 0:O.getActiveJimuMapView())||void 0===e?void 0:e.dataSourceId)||"";I(t.length>0?t:" "),k(t.length>0?t:" ")})).catch((e=>{console.error(e)}))}),[O,null==O?void 0:O.jimuMapViews]);const U=o.React.useCallback(((e,t)=>{const{itemJsons:i}=t.props,o=i[0];let s=0;const a=E();for(;s<a.length&&a[s].itemKey!==o.itemKey;s++);const r=h.current.querySelectorAll(".jimu-tree-item__body")[s];S(r),c&&!c(o.itemKey).isValid||(I(o.itemKey),l&&l(o.itemKey),g.current===o.itemKey?(g.current="",f(!1)):(g.current=o.itemKey,w(o.itemStateTitle),f(!0)),n||O&&o.itemKey!==x&&O.switchMap())}),[x,n,E,c,O,l]);return o.React.useEffect((()=>()=>{n||!v||j===x||p||(O.switchMap(),I(j))}),[x,j,n,O,v,p]),(0,o.jsx)("div",{ref:h,className:"w-100 multiple-jimu-map-config-component",css:o.css`
    .jimu-tree-main {
      padding-top: 2px;
    }
    .jimu-tree-item {
      padding: 2px;
    }
    .jimu-tree-item__icon {
      background-color: var(--sys-color-info-main);
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
      svg {
        margin-right: 0!important;
      }
    }
    .jimu-tree-item__body {
      .jimu-icon {
        color: var(--sys-color-warning-main);
      }
      .jimu-tree-item__main-line {
        cursor: pointer;
      }
    }
  `,"aria-describedby":u},P&&x?(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)(X.List,Object.assign({},m,{itemsJson:E(),handleClickItemBody:U})),(0,o.jsx)(Cs.SidePopper,{position:"right",isOpen:v,toggle:()=>{f(!1),g.current="",null==h||h.current.focus()},title:b,trigger:null==h?void 0:h.current,backToFocusNode:y},r)):L())};var oa,sa;!function(e){e.AUTO="Auto",e.CUSTOM="Custom"}(oa||(oa={})),function(e){e.Default="DEFAULT",e.Selected="SELECTED",e.Hover="HOVER"}(sa||(sa={}));var aa=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]])}return i};const na=e=>{const t=window.SVG,{className:i}=e,s=aa(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",i);return t?o.React.createElement(t,Object.assign({className:a,src:ea()},s)):o.React.createElement("svg",Object.assign({className:a},s))},la=e=>{const{layout:t,config:i,widgetId:o,status:s,isCardWidget:a,mainSizeMode:n}=e,l=(null==e?void 0:e.layouts)||{},r=(null==l?void 0:l[s])||{},c=(0,x.getAppConfigAction)();Object.keys(r).forEach((e=>{const t=A.searchUtils.findLayoutId(r,e,n);t&&c.removeLayout(t)}));const d=ca(i,a,t,s);(null==l?void 0:l[s])&&delete l[s],c.editWidgetConfig(o,d),c.editWidgetProperty(o,"layouts",l),c.exec()},ra=e=>{const{layout:t,config:i,widgetId:s,appConfig:a,status:n,label:l,isCardWidget:r,mainSizeMode:c}=e,d=(null==e?void 0:e.layouts)||{},p=(0,x.getAppConfigAction)(),u=(null==d?void 0:d[sa.Default])||{};Object.keys(u).forEach((e=>{var t;const i=null===(t=a.widgets[s].layouts[n])||void 0===t?void 0:t[e];i&&p.removeLayout(i);const r=A.searchUtils.findLayoutId(d[sa.Default],e,c),u=p.duplicateLayout(r,!1);p.editLayoutProperty(u.id,"label",l),p.editWidgetProperty(s,`layouts.${n}.${e}`,u.id),p.editLayoutProperty(u.id,"parent",{type:o.LayoutParentType.Widget,id:s})}));const m=ca(i,r,t,n);p.editWidgetConfig(s,m),p.exec()};function ca(e,t,i,o){let s=e;return s=t?e.set("cardLayout",i):e.setIn(["cardConfigs",o,"listLayout"],i),s}const da=o.css`
  .jimu-radio {
    cursor: pointer;
  }
  .clear-padding {
    padding-left: 0;
    padding-right: 0;
  }
`,pa=o.css`
  & .modal-content {
    border: none;
  }
  .header-con {
    & {
      border: none;
      padding: ${o.polished.rem(30)};
      padding-bottom: 0;
    }
    svg {
      color: var(--sys-color-warning-main);
      border-bottom: none;
      margin-right: ${o.polished.rem(12)} !important;
    }
  }
  .modal-body {
    padding: ${o.polished.rem(24)} ${o.polished.rem(30)};
  }
  .modal-footer {
    & {
      padding: ${o.polished.rem(30)};
      padding-top: 0;
    }
  }
`,ua=e=>{const{id:t,cardLayout:i,status:s,isCardWidget:a,layouts:n,mainSizeMode:l,config:r,appConfig:c}=e,[d,p]=(0,Qs.useState)(!1),[u,m]=(0,Qs.useState)(null),[g,h]=(0,Qs.useState)(null),[v,f]=(0,Qs.useState)(null),y=o.React.useRef(i),S=o.React.useRef(i);(0,Qs.useEffect)((()=>{y.current=e.cardLayout,S.current=e.cardLayout}),[s,e]);const b=()=>{p(!d),y.current=S.current},w=()=>{const e={layout:y.current,config:r,widgetId:t,appConfig:c,status:s,label:I(s.toLowerCase()),isCardWidget:a,layouts:null==n?void 0:n.asMutable({deep:!0}),mainSizeMode:l};y.current===oa.AUTO?la(e):ra(e),p(!1),S.current=y.current},x=e=>{S.current!==e&&(e===oa.AUTO?(m(I("remindAutoLayoutTitle")),h(I("remindAutoLayoutText")),f("")):(m(I("remindCustomLayoutTitle")),h(I("remindCustomLayoutText")),f(I("remindCustomLayoutBottomText"))),p(!0),y.current=e)},I=o.hooks.useTranslation(C.defaultMessages,o.defaultMessages);return(0,o.jsx)("div",{css:da,role:"group","aria-label":I("layout")},(0,o.jsx)(k,{className:"clear-padding",title:I("layout")},(0,o.jsx)(D,{flow:"wrap"},(0,o.jsx)("div",{className:"d-flex align-items-center",onClick:()=>{x(oa.AUTO)}},(0,o.jsx)(C.Radio,{title:I("auto"),checked:i===oa.AUTO,className:"mr-2"})," ",I("auto"))),(0,o.jsx)(D,null,(0,o.jsx)("div",{className:"d-flex align-items-center",onClick:()=>{x(oa.CUSTOM)}},(0,o.jsx)(C.Radio,{title:I("custom"),checked:i===oa.CUSTOM||!i,className:"mr-2"})," ",I("custom"))),(0,o.jsx)(C.Modal,{isOpen:d,toggle:b,centered:!0,css:pa},(0,o.jsx)(C.ModalHeader,{closeIcon:"",className:"header-con"},(0,o.jsx)(na,{className:"mr-2",size:24}),u),(0,o.jsx)(C.ModalBody,null,(0,o.jsx)("div",null,g),v&&(0,o.jsx)("div",{className:"mt-5"},v)),(0,o.jsx)(C.ModalFooter,null,(0,o.jsx)(C.Button,{title:I("ok"),type:"primary",onClick:w},I("ok")),(0,o.jsx)(C.Button,{title:I("cancel"),onClick:()=>{p(!1)}},I("cancel"))))))};function ma(e){var t,i;const s=(0,o.getAppStore)().getState().appStateInBuilder,a=s.appRuntimeInfo.currentPageId,n=s.appRuntimeInfo.currentDialogId;let l=s.appRuntimeInfo.dialogInfos||(0,o.Immutable)({});const r=s.appConfig.dialogs,c=s.appConfig.pages,d={canClose:!0,checked:!0,isClosed:!0};return n&&((null===(t=r[n])||void 0===t?void 0:t.isSplash)&&(l=l.set(n,d)),c[a].autoOpenDialogId&&(l=l.set(a+"-"+c[a].autoOpenDialogId,d)),e&&Object.keys(c).forEach((e=>{c[e].autoOpenDialogId===n&&(l=l.set(e+"-"+n,d))}))),(null===(i=r[n])||void 0===i?void 0:i.isSplash)||Object.keys(r).some((e=>{r[e].isSplash&&(l=l.set(e,d))})),e&&l&&Object.keys(l).forEach((t=>{t!==e&&t!==a+"-"+e||(l=l.set(t,{canClose:ga(e),checked:!1,isClosed:!1}))})),l}function ga(e){const t=(0,o.getAppStore)().getState().appStateInBuilder.appConfig.dialogs[e];return!t.interactionType||!t.confirmBeforeClose}function ha(e){const t=(0,o.getAppStore)().getState().appStateInBuilder,i=t.appRuntimeInfo.currentPageId,s=t.appRuntimeInfo.currentDialogId;if(x.builderAppSync.publishChangeSelectionToApp(null),s){const e=ma();x.builderAppSync.publishDialogInfosChangeToApp(e),x.builderAppSync.publishDialogChangeToApp(null)}i!==e&&x.builderAppSync.publishPageChangeToApp(e),x.builderAppSync.publishActivePagePartChangeToApp(o.PagePart.Body)}function va(e,t=!1){x.builderAppSync.publishChangeSelectionToApp(null);const i=(0,o.getAppStore)().getState().appStateInBuilder.appRuntimeInfo.currentDialogId;if(t||e!==i){x.builderAppSync.publishDialogChangeToApp(e);const t=ma(e);x.builderAppSync.publishDialogInfosChangeToApp(t),x.builderAppSync.publishActivePagePartChangeToApp(null)}}(0,v.registerStyles)("jimu-ui/advanced/setting-components/",e)})(),y})())}}}));