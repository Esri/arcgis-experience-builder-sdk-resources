System.register(["jimu-core","jimu-theme","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/basic/list-tree","jimu-ui/basic/sql-expression-runtime"],(function(e,t){var s={},a={},i={},l={},o={},r={};return{setters:[function(e){s.CONSTANTS=e.CONSTANTS,s.ClauseCascade=e.ClauseCascade,s.ClauseDisplayType=e.ClauseDisplayType,s.ClauseLabelDisplay=e.ClauseLabelDisplay,s.ClauseLogic=e.ClauseLogic,s.ClauseSourceType=e.ClauseSourceType,s.ClauseType=e.ClauseType,s.DataSourceComponent=e.DataSourceComponent,s.DataSourceTypes=e.DataSourceTypes,s.Immutable=e.Immutable,s.JimuFieldType=e.JimuFieldType,s.OrderRule=e.OrderRule,s.QueryScope=e.QueryScope,s.React=e.React,s.ReactResizeDetector=e.ReactResizeDetector,s.SqlExpressionMode=e.SqlExpressionMode,s.classNames=e.classNames,s.css=e.css,s.dataSourceUtils=e.dataSourceUtils,s.defaultMessages=e.defaultMessages,s.getAppStore=e.getAppStore,s.injectIntl=e.injectIntl,s.jsx=e.jsx,s.lodash=e.lodash,s.polished=e.polished,s.uuidv1=e.uuidv1},function(e){a.registerStyles=e.registerStyles,a.withStyles=e.withStyles,a.withTheme=e.withTheme},function(e){i.AdvancedButtonGroup=e.AdvancedButtonGroup,i.Badge=e.Badge,i.Button=e.Button,i.Checkbox=e.Checkbox,i.Dropdown=e.Dropdown,i.DropdownButton=e.DropdownButton,i.DropdownItem=e.DropdownItem,i.DropdownMenu=e.DropdownMenu,i.Icon=e.Icon,i.Label=e.Label,i.Modal=e.Modal,i.ModalBody=e.ModalBody,i.ModalFooter=e.ModalFooter,i.ModalHeader=e.ModalHeader,i.Option=e.Option,i.Popper=e.Popper,i.QueryScopeContext=e.QueryScopeContext,i.Radio=e.Radio,i.Select=e.Select,i.TextInput=e.TextInput,i.Tooltip=e.Tooltip,i.defaultMessages=e.defaultMessages},function(e){l.FieldSelector=e.FieldSelector},function(e){o.List=e.List,o.TreeItemActionType=e.TreeItemActionType},function(e){r.ClauseInputEditor=e.ClauseInputEditor,r.InputEditorRender=e.InputEditorRender,r.SqlExpressionSizeMode=e.SqlExpressionSizeMode,r.getCamelCase=e.getCamelCase,r.getClauseArrayByChange=e.getClauseArrayByChange,r.getClauseDefaultLabel=e.getClauseDefaultLabel,r.getClauseLabel=e.getClauseLabel,r.getDefaultClauseSet=e.getDefaultClauseSet,r.getDefaultClauseValObj=e.getDefaultClauseValObj,r.getDefaultGroupExpression=e.getDefaultGroupExpression,r.getDefaultSingleClause=e.getDefaultSingleClause,r.getDisplayTypes=e.getDisplayTypes,r.getInputEditorListByOperatorAndSourceType=e.getInputEditorListByOperatorAndSourceType,r.getOperatorsByShortType=e.getOperatorsByShortType,r.isAskForValueSupportedByOperatorAndSourceType=e.isAskForValueSupportedByOperatorAndSourceType,r.isCaseSensitiveSupportedByOperatorAndSourceType=e.isCaseSensitiveSupportedByOperatorAndSourceType,r.isSqlExpressionValid=e.isSqlExpressionValid}],execute:function(){e((()=>{var e={18180:(e,t,s)=>{var a={"./style_date_picker.svg":94461,"./style_date_picker_rtl.svg":23210,"./style_date_time_picker.svg":72849,"./style_date_time_picker_rtl.svg":60550,"./style_double_date_picker.svg":38907,"./style_double_date_picker_rtl.svg":91576,"./style_double_date_time_picker.svg":26047,"./style_double_date_time_picker_rtl.svg":91876,"./style_multiple_pill_wrap_selector.svg":98759,"./style_multiple_pill_wrap_selector_rtl.svg":14444,"./style_multiple_select.svg":6255,"./style_multiple_select_rtl.svg":24564,"./style_simple_select.svg":69425,"./style_simple_select_rtl.svg":10822,"./style_unique_pill_wrap_selector.svg":30880,"./style_unique_pill_wrap_selector_rtl.svg":33679};function i(e){var t=l(e);return s(t)}function l(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=l,e.exports=i,i.id=18180},72823:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 1C4.15 1 1 4.15 1 8s3.15 7 7 7 7-3.15 7-7-3.15-7-7-7m1.167 11.667H6.834v-2.334h2.333zm-2.333-4.5V3.333h2.333v4.834z" clip-rule="evenodd"></path></svg>'},6219:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.839 2.748c-.807-1.294-2.871-1.294-3.678 0L.274 13.163C-.517 14.432.499 16 2.113 16h11.774c1.614 0 2.63-1.568 1.839-2.837zM7 6a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0zm0 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0" clip-rule="evenodd"></path></svg>'},1690:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.5 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM2 9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM7 3.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM7 9.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},81758:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zM2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5M2.5 9a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},93303:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.438.994c.213 0 .397.146.44.35q.227 1.084.316 1.852.562.242 1.048.599l1.728-.676a.455.455 0 0 1 .556.188l1.42 2.394a.43.43 0 0 1-.091.547 22 22 0 0 1-1.49 1.194q.03.27.03.552 0 .32-.038.63l1.465 1.12a.43.43 0 0 1 .111.563l-1.42 2.394a.454.454 0 0 1-.53.197 23 23 0 0 1-1.807-.66q-.49.35-1.055.586l-.263 1.794a.446.446 0 0 1-.445.376H6.574a.446.446 0 0 1-.44-.35 21 21 0 0 1-.317-1.853 5.3 5.3 0 0 1-1.047-.598l-1.728.675a.455.455 0 0 1-.556-.187l-1.42-2.395a.43.43 0 0 1 .091-.546q.85-.735 1.49-1.194a5.167 5.167 0 0 1 .008-1.183L1.19 6.243a.43.43 0 0 1-.112-.562l1.42-2.395a.455.455 0 0 1 .531-.196q1.078.35 1.807.66c.324-.233.679-.43 1.056-.587l.262-1.794A.446.446 0 0 1 6.6.994zm-.365 1H6.985l-.28 1.866-.467.19q-.353.144-.672.34l-.207.136-.42.293-.476-.197q-.492-.205-1.169-.433l-.221-.074-1.045 1.719L3.59 6.999l-.06.479a4 4 0 0 0-.021.816l.014.144.058.492-.419.294q-.433.304-.979.746l-.177.145 1.043 1.72 1.845-.703.406.29q.307.219.645.384l.228.103.474.199.059.49q.06.507.19 1.177l.043.219h2.088l.282-1.867.466-.19q.354-.144.672-.34l.207-.136.419-.293.476.198q.495.204 1.17.433l.22.072 1.044-1.718-1.56-1.165.06-.479a4 4 0 0 0 .02-.815l-.013-.144-.06-.492.42-.295a18 18 0 0 0 .98-.746l.176-.146-1.043-1.72-1.844.705-.406-.29a4.5 4.5 0 0 0-.646-.385l-.228-.103-.474-.199-.058-.49q-.049-.405-.14-.916zm-1.067 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clip-rule="evenodd"></path></svg>'},16428:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15 2H1v5h14zm-1 1v3H2V3zM5 4H3v1h2zM1 9h14v5H1zm13 4v-3H2v3zm-9-2H3v1h2z" clip-rule="evenodd"></path></svg>'},14962:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1.5 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM1 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M1.5 9a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zM1.5 12a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z"></path></svg>'},54578:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1.5 13a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zM1 9.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5M1.5 7a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1zM1.5 4a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1z"></path></svg>'},62838:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},9869:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M1.5 11a.5.5 0 0 0 .5-.5V2h8.5a.5.5 0 0 0 0-1H2a1 1 0 0 0-1 1v8.5a.5.5 0 0 0 .5.5M5 4h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m0 1v9h9V5z" clip-rule="evenodd"></path></svg>'},23662:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5"></path></svg>'},91622:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1.102 12.833H0L4.268 3h.976l4.24 9.833H8.368L7.28 10.25H2.176zm1.45-3.5h4.352L4.728 4.111zM14.996 8.639q0-.847-.447-1.264-.446-.417-1.297-.417-.586 0-1.087.209a2.6 2.6 0 0 0-.851.555l-.53-.625q.405-.402 1.06-.666a4.1 4.1 0 0 1 1.506-.264q.53 0 .99.152.46.14.81.431.348.292.543.736t.195 1.042v2.847q0 .376.028.778.029.402.084.68h-.85a7 7 0 0 1-.07-.514 5 5 0 0 1-.028-.541h-.028q-.447.653-1.018.944-.558.278-1.353.278-.377 0-.781-.111a2.2 2.2 0 0 1-.726-.333 2.05 2.05 0 0 1-.544-.612q-.209-.375-.209-.916 0-.75.377-1.18.39-.446 1.032-.654.642-.222 1.464-.277.837-.07 1.73-.07zm-.28.944q-.585 0-1.185.056-.585.041-1.074.194a2 2 0 0 0-.78.417q-.307.277-.307.736 0 .348.125.583.14.236.363.39.223.138.488.208.279.055.558.055.502 0 .892-.166.391-.18.656-.473.265-.305.404-.694.14-.389.14-.82v-.486z"></path></svg>'},94461:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 68 48"><path fill="#363636" fill-rule="evenodd" d="M4 15.5A1.5 1.5 0 0 1 5.5 14h57a1.5 1.5 0 0 1 1.493 1.355L64 15.5v27a1.5 1.5 0 0 1-1.5 1.5h-57A1.5 1.5 0 0 1 4 42.5zm59 0a.5.5 0 0 0-.5-.5h-57a.5.5 0 0 0-.5.5v27a.5.5 0 0 0 .5.5h57a.5.5 0 0 0 .5-.5z" clip-rule="evenodd"></path><path fill="#363636" d="M8 18h4v4H8zM38 18h4v4h-4zM33 18h1v22h-1zM14 18h4v4h-4zM44 18h4v4h-4zM20 18h4v4h-4zM50 18h4v4h-4zM26 18h4v4h-4zM56 18h4v4h-4zM8 30h4v4H8zM38 30h4v4h-4zM14 30h4v4h-4zM44 30h4v4h-4zM50 30h4v4h-4zM20 30h4v4h-4zM26 30h4v4h-4zM56 30h4v4h-4zM8 36h4v4H8zM38 36h4v4h-4zM14 36h4v4h-4zM44 36h4v4h-4zM20 36h4v4h-4zM8 24h4v4H8zM38 24h4v4h-4z"></path><path fill="#6A6A6A" d="M14 24h4v4h-4z"></path><path fill="#363636" d="M44 24h4v4h-4zM20 24h4v4h-4zM50 24h4v4h-4zM26 24h4v4h-4zM56 24h4v4h-4z"></path><rect width="60" height="8" x="4" y="4" fill="#6A6A6A" rx="1"></rect><path fill="#181818" d="M7 7h54v2H7z"></path></svg>'},23210:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 68 48"><path fill="#363636" fill-rule="evenodd" d="M64 15.5a1.5 1.5 0 0 0-1.5-1.5h-57a1.5 1.5 0 0 0-1.493 1.355L4 15.5v27A1.5 1.5 0 0 0 5.5 44h57a1.5 1.5 0 0 0 1.5-1.5zm-59 0a.5.5 0 0 1 .5-.5h57a.5.5 0 0 1 .5.5v27a.5.5 0 0 1-.5.5h-57a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></path><path fill="#363636" d="M60 18h-4v4h4zM30 18h-4v4h4zM35 18h-1v22h1zM54 18h-4v4h4zM24 18h-4v4h4zM48 18h-4v4h4zM18 18h-4v4h4zM42 18h-4v4h4zM12 18H8v4h4zM60 30h-4v4h4zM30 30h-4v4h4zM54 30h-4v4h4zM24 30h-4v4h4zM18 30h-4v4h4zM48 30h-4v4h4zM42 30h-4v4h4zM12 30H8v4h4zM60 36h-4v4h4zM30 36h-4v4h4zM54 36h-4v4h4zM24 36h-4v4h4zM48 36h-4v4h4zM60 24h-4v4h4zM30 24h-4v4h4z"></path><path fill="#6A6A6A" d="M54 24h-4v4h4z"></path><path fill="#363636" d="M24 24h-4v4h4zM48 24h-4v4h4zM18 24h-4v4h4zM42 24h-4v4h4zM12 24H8v4h4z"></path><rect width="60" height="8" fill="#6A6A6A" rx="1" transform="matrix(-1 0 0 1 64 4)"></rect><path fill="#181818" d="M61 7H7v2h54z"></path></svg>'},72849:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 68 48"><path fill="#363636" fill-rule="evenodd" d="M4 15.5A1.5 1.5 0 0 1 5.5 14h57a1.5 1.5 0 0 1 1.493 1.355L64 15.5v27a1.5 1.5 0 0 1-1.5 1.5h-57A1.5 1.5 0 0 1 4 42.5zm59 0a.5.5 0 0 0-.5-.5h-57a.5.5 0 0 0-.5.5v27a.5.5 0 0 0 .5.5h57a.5.5 0 0 0 .5-.5z" clip-rule="evenodd"></path><path fill="#363636" d="M8 18h4v4H8zM38 18h4v4h-4zM33 18h1v22h-1zM14 18h4v4h-4zM44 18h4v4h-4zM20 18h4v4h-4zM50 18h4v4h-4zM26 18h4v4h-4zM56 18h4v4h-4zM8 30h4v4H8zM38 30h4v4h-4zM14 30h4v4h-4zM20 30h4v4h-4zM26 30h4v4h-4zM8 36h4v4H8zM38 36h4v4h-4zM14 36h4v4h-4zM20 36h4v4h-4zM8 24h4v4H8zM38 24h4v4h-4z"></path><path fill="#6A6A6A" d="M14 24h4v4h-4z"></path><path fill="#363636" d="M44 24h4v4h-4z"></path><path fill="#6A6A6A" fill-rule="evenodd" d="M54.5 41a6.5 6.5 0 1 1 0-13 6.5 6.5 0 1 1 0 13m0-11.782a5.281 5.281 0 1 0 0 10.562 5.281 5.281 0 0 0 0-10.562m0 5.891h2.64a.605.605 0 0 0 .61-.609.61.61 0 0 0-.61-.609H55.11v-3.048a.608.608 0 1 0-1.218 0V34.5c0 .338.273.61.609.61" clip-rule="evenodd"></path><path fill="#363636" d="M20 24h4v4h-4zM26 24h4v4h-4z"></path><rect width="60" height="8" x="4" y="4" fill="#6A6A6A" rx="1"></rect><path fill="#181818" d="M7 7h34v2H7zM44 7h17v2H44z"></path></svg>'},60550:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 68 48"><path fill="#363636" fill-rule="evenodd" d="M64 15.5a1.5 1.5 0 0 0-1.5-1.5h-57a1.5 1.5 0 0 0-1.493 1.355L4 15.5v27A1.5 1.5 0 0 0 5.5 44h57a1.5 1.5 0 0 0 1.5-1.5zm-59 0a.5.5 0 0 1 .5-.5h57a.5.5 0 0 1 .5.5v27a.5.5 0 0 1-.5.5h-57a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></path><path fill="#363636" d="M60 18h-4v4h4zM30 18h-4v4h4zM35 18h-1v22h1zM54 18h-4v4h4zM24 18h-4v4h4zM48 18h-4v4h4zM18 18h-4v4h4zM42 18h-4v4h4zM12 18H8v4h4zM60 30h-4v4h4zM30 30h-4v4h4zM54 30h-4v4h4zM48 30h-4v4h4zM42 30h-4v4h4zM60 36h-4v4h4zM30 36h-4v4h4zM54 36h-4v4h4zM48 36h-4v4h4zM60 24h-4v4h4zM30 24h-4v4h4z"></path><path fill="#6A6A6A" d="M54 24h-4v4h4z"></path><path fill="#363636" d="M24 24h-4v4h4z"></path><path fill="#6A6A6A" fill-rule="evenodd" d="M13.5 41a6.5 6.5 0 1 0 0-13 6.5 6.5 0 1 0 0 13m0-11.782a5.281 5.281 0 1 1 0 10.562 5.281 5.281 0 0 1 0-10.562m.11 5.891h2.639a.605.605 0 0 0 .61-.609.61.61 0 0 0-.61-.609h-2.03v-3.048a.608.608 0 1 0-1.219 0V34.5c0 .338.273.61.61.61" clip-rule="evenodd"></path><path fill="#363636" d="M48 24h-4v4h4zM42 24h-4v4h4z"></path><rect width="60" height="8" fill="#6A6A6A" rx="1" transform="matrix(-1 0 0 1 64 4)"></rect><path fill="#181818" d="M61 7H27v2h34zM24 7H7v2h17z"></path></svg>'},38907:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 68 48"><path fill="#363636" fill-rule="evenodd" d="M4 15.5A1.5 1.5 0 0 1 5.5 14h57a1.5 1.5 0 0 1 1.493 1.355L64 15.5v27a1.5 1.5 0 0 1-1.5 1.5h-57A1.5 1.5 0 0 1 4 42.5zm59 0a.5.5 0 0 0-.5-.5h-57a.5.5 0 0 0-.5.5v27a.5.5 0 0 0 .5.5h57a.5.5 0 0 0 .5-.5z" clip-rule="evenodd"></path><path fill="#363636" d="M8 18h4v4H8z"></path><path fill="#6A6A6A" d="M38 18h4v4h-4z"></path><path fill="#363636" d="M33 18h1v22h-1zM14 18h4v4h-4z"></path><path fill="#6A6A6A" d="M44 18h4v4h-4z"></path><path fill="#363636" d="M20 18h4v4h-4z"></path><path fill="#6A6A6A" d="M50 18h4v4h-4z"></path><path fill="#363636" d="M26 18h4v4h-4z"></path><path fill="#6A6A6A" d="M56 18h4v4h-4z"></path><path fill="#363636" d="M8 30h4v4H8zM38 30h4v4h-4zM14 30h4v4h-4zM44 30h4v4h-4zM20 30h4v4h-4zM50 30h4v4h-4zM26 30h4v4h-4zM56 30h4v4h-4zM8 36h4v4H8zM38 36h4v4h-4z"></path><path fill="#6A6A6A" d="M14 36h4v4h-4z"></path><path fill="#363636" d="M44 36h4v4h-4z"></path><path fill="#6A6A6A" d="M20 36h4v4h-4z"></path><path fill="#363636" d="M8 24h4v4H8z"></path><path fill="#6A6A6A" d="M38 24h4v4h-4z"></path><path fill="#363636" d="M14 24h4v4h-4z"></path><path fill="#6A6A6A" d="M44 24h4v4h-4z"></path><path fill="#363636" d="M20 24h4v4h-4zM50 24h4v4h-4zM26 24h4v4h-4zM56 24h4v4h-4z"></path><rect width="28" height="8" x="4" y="4" fill="#6A6A6A" rx="1"></rect><rect width="28" height="8" x="36" y="4" fill="#6A6A6A" rx="1"></rect><path fill="#181818" d="M7 7h22v2H7zM39 7h22v2H39z"></path></svg>'},91576:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 68 48"><path fill="#363636" fill-rule="evenodd" d="M64 15.5a1.5 1.5 0 0 0-1.5-1.5h-57a1.5 1.5 0 0 0-1.493 1.355L4 15.5v27A1.5 1.5 0 0 0 5.5 44h57a1.5 1.5 0 0 0 1.5-1.5zm-59 0a.5.5 0 0 1 .5-.5h57a.5.5 0 0 1 .5.5v27a.5.5 0 0 1-.5.5h-57a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></path><path fill="#363636" d="M60 18h-4v4h4z"></path><path fill="#6A6A6A" d="M30 18h-4v4h4z"></path><path fill="#363636" d="M35 18h-1v22h1zM54 18h-4v4h4z"></path><path fill="#6A6A6A" d="M24 18h-4v4h4z"></path><path fill="#363636" d="M48 18h-4v4h4z"></path><path fill="#6A6A6A" d="M18 18h-4v4h4z"></path><path fill="#363636" d="M42 18h-4v4h4z"></path><path fill="#6A6A6A" d="M12 18H8v4h4z"></path><path fill="#363636" d="M60 30h-4v4h4zM30 30h-4v4h4zM54 30h-4v4h4zM24 30h-4v4h4zM48 30h-4v4h4zM18 30h-4v4h4zM42 30h-4v4h4zM12 30H8v4h4zM60 36h-4v4h4zM30 36h-4v4h4z"></path><path fill="#6A6A6A" d="M54 36h-4v4h4z"></path><path fill="#363636" d="M24 36h-4v4h4z"></path><path fill="#6A6A6A" d="M48 36h-4v4h4z"></path><path fill="#363636" d="M60 24h-4v4h4z"></path><path fill="#6A6A6A" d="M30 24h-4v4h4z"></path><path fill="#363636" d="M54 24h-4v4h4z"></path><path fill="#6A6A6A" d="M24 24h-4v4h4z"></path><path fill="#363636" d="M48 24h-4v4h4zM18 24h-4v4h4zM42 24h-4v4h4zM12 24H8v4h4z"></path><rect width="28" height="8" fill="#6A6A6A" rx="1" transform="matrix(-1 0 0 1 64 4)"></rect><rect width="28" height="8" fill="#6A6A6A" rx="1" transform="matrix(-1 0 0 1 32 4)"></rect><path fill="#181818" d="M61 7H39v2h22zM29 7H7v2h22z"></path></svg>'},26047:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 68 48"><path fill="#363636" fill-rule="evenodd" d="M4 15.5A1.5 1.5 0 0 1 5.5 14h57a1.5 1.5 0 0 1 1.493 1.355L64 15.5v27a1.5 1.5 0 0 1-1.5 1.5h-57A1.5 1.5 0 0 1 4 42.5zm59 0a.5.5 0 0 0-.5-.5h-57a.5.5 0 0 0-.5.5v27a.5.5 0 0 0 .5.5h57a.5.5 0 0 0 .5-.5z" clip-rule="evenodd"></path><path fill="#363636" d="M8 18h4v4H8z"></path><path fill="#6A6A6A" d="M38 18h4v4h-4z"></path><path fill="#363636" d="M33 18h1v22h-1zM14 18h4v4h-4z"></path><path fill="#6A6A6A" d="M44 18h4v4h-4z"></path><path fill="#363636" d="M20 18h4v4h-4z"></path><path fill="#6A6A6A" d="M50 18h4v4h-4z"></path><path fill="#363636" d="M26 18h4v4h-4z"></path><path fill="#6A6A6A" d="M56 18h4v4h-4z"></path><path fill="#363636" d="M8 30h4v4H8zM38 30h4v4h-4zM14 30h4v4h-4zM20 30h4v4h-4zM26 30h4v4h-4zM8 36h4v4H8zM38 36h4v4h-4z"></path><path fill="#6A6A6A" d="M14 36h4v4h-4zM20 36h4v4h-4z"></path><path fill="#363636" d="M8 24h4v4H8z"></path><path fill="#6A6A6A" d="M38 24h4v4h-4z"></path><path fill="#363636" d="M14 24h4v4h-4z"></path><path fill="#6A6A6A" d="M44 24h4v4h-4z"></path><path fill="#6A6A6A" fill-rule="evenodd" d="M54.5 41a6.5 6.5 0 1 1 0-13 6.5 6.5 0 1 1 0 13m0-11.782a5.281 5.281 0 1 0 0 10.562 5.281 5.281 0 0 0 0-10.562m0 5.891h2.64a.605.605 0 0 0 .61-.609.61.61 0 0 0-.61-.609H55.11v-3.048a.608.608 0 1 0-1.218 0V34.5c0 .338.273.61.609.61" clip-rule="evenodd"></path><path fill="#363636" d="M20 24h4v4h-4zM26 24h4v4h-4z"></path><rect width="28" height="8" x="4" y="4" fill="#6A6A6A" rx="1"></rect><rect width="28" height="8" x="36" y="4" fill="#6A6A6A" rx="1"></rect><path fill="#181818" d="M7 7h13v2H7zM39 7h13v2H39zM22 7h7v2h-7zM54 7h7v2h-7z"></path></svg>'},91876:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 68 48"><path fill="#363636" fill-rule="evenodd" d="M64 15.5a1.5 1.5 0 0 0-1.5-1.5h-57a1.5 1.5 0 0 0-1.493 1.355L4 15.5v27A1.5 1.5 0 0 0 5.5 44h57a1.5 1.5 0 0 0 1.5-1.5zm-59 0a.5.5 0 0 1 .5-.5h57a.5.5 0 0 1 .5.5v27a.5.5 0 0 1-.5.5h-57a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></path><path fill="#363636" d="M60 18h-4v4h4z"></path><path fill="#6A6A6A" d="M30 18h-4v4h4z"></path><path fill="#363636" d="M35 18h-1v22h1zM54 18h-4v4h4z"></path><path fill="#6A6A6A" d="M24 18h-4v4h4z"></path><path fill="#363636" d="M48 18h-4v4h4z"></path><path fill="#6A6A6A" d="M18 18h-4v4h4z"></path><path fill="#363636" d="M42 18h-4v4h4z"></path><path fill="#6A6A6A" d="M12 18H8v4h4z"></path><path fill="#363636" d="M60 30h-4v4h4zM30 30h-4v4h4zM54 30h-4v4h4zM48 30h-4v4h4zM42 30h-4v4h4zM60 36h-4v4h4zM30 36h-4v4h4z"></path><path fill="#6A6A6A" d="M54 36h-4v4h4zM48 36h-4v4h4z"></path><path fill="#363636" d="M60 24h-4v4h4z"></path><path fill="#6A6A6A" d="M30 24h-4v4h4z"></path><path fill="#363636" d="M54 24h-4v4h4z"></path><path fill="#6A6A6A" d="M24 24h-4v4h4z"></path><path fill="#6A6A6A" fill-rule="evenodd" d="M13.5 41a6.5 6.5 0 1 0 0-13 6.5 6.5 0 1 0 0 13m0-11.782a5.281 5.281 0 1 1 0 10.562 5.281 5.281 0 0 1 0-10.562m.11 5.891h2.639a.605.605 0 0 0 .61-.609.61.61 0 0 0-.61-.609h-2.03v-3.048a.608.608 0 1 0-1.219 0V34.5c0 .338.273.61.61.61" clip-rule="evenodd"></path><path fill="#363636" d="M48 24h-4v4h4zM42 24h-4v4h4z"></path><rect width="28" height="8" fill="#6A6A6A" rx="1" transform="matrix(-1 0 0 1 64 4)"></rect><rect width="28" height="8" fill="#6A6A6A" rx="1" transform="matrix(-1 0 0 1 32 4)"></rect><path fill="#181818" d="M61 7H48v2h13zM29 7H16v2h13zM46 7h-7v2h7zM14 7H7v2h7z"></path></svg>'},98759:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 68 48"><rect width="15" height="8" x="32" y="24" fill="#363636" rx="1"></rect><rect width="15" height="8" x="49" y="24" fill="#363636" rx="1"></rect><rect width="26" height="8" x="4" y="24" fill="#363636" rx="1"></rect><rect width="19" height="8" x="4" y="4" fill="#6A6A6A" rx="1"></rect><rect width="34" height="8" x="4" y="14" fill="#6A6A6A" rx="1"></rect><rect width="15" height="8" x="45" y="4" fill="#363636" rx="1"></rect><rect width="18" height="8" x="25" y="4" fill="#6A6A6A" rx="1"></rect><rect width="24" height="8" x="40" y="14" fill="#363636" rx="1"></rect><rect width="24" height="8" x="4" y="34" fill="#363636" rx="1"></rect></svg>'},14444:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 68 48"><rect width="15" height="8" fill="#363636" rx="1" transform="matrix(-1 0 0 1 36 24)"></rect><rect width="15" height="8" fill="#363636" rx="1" transform="matrix(-1 0 0 1 19 24)"></rect><rect width="26" height="8" fill="#363636" rx="1" transform="matrix(-1 0 0 1 64 24)"></rect><rect width="19" height="8" fill="#6A6A6A" rx="1" transform="matrix(-1 0 0 1 64 4)"></rect><rect width="34" height="8" fill="#6A6A6A" rx="1" transform="matrix(-1 0 0 1 64 14)"></rect><rect width="15" height="8" fill="#363636" rx="1" transform="matrix(-1 0 0 1 23 4)"></rect><rect width="18" height="8" fill="#6A6A6A" rx="1" transform="matrix(-1 0 0 1 43 4)"></rect><rect width="24" height="8" fill="#363636" rx="1" transform="matrix(-1 0 0 1 28 14)"></rect><rect width="24" height="8" fill="#363636" rx="1" transform="matrix(-1 0 0 1 64 34)"></rect></svg>'},6255:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 68 48"><path fill="#363636" fill-rule="evenodd" d="M64 15a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h58a1 1 0 0 0 1-1zM5 15h58v28H5z" clip-rule="evenodd"></path><path fill="#6A6A6A" d="M16 20h44v2H16zM13.055 19.16l-2.662 2.623-1.448-1.433a.56.56 0 0 0-.783 0 .546.546 0 0 0 0 .776l1.733 1.715c.117.116.325.168.498.158.173.007.381-.046.494-.157l2.951-2.906a.547.547 0 0 0 0-.776.56.56 0 0 0-.783 0M13.055 27.16l-2.662 2.623-1.448-1.433a.56.56 0 0 0-.783 0 .546.546 0 0 0 0 .776l1.733 1.715c.117.116.325.168.498.158.173.007.381-.046.494-.157l2.951-2.906a.547.547 0 0 0 0-.776.56.56 0 0 0-.783 0M13.055 35.16l-2.662 2.623-1.448-1.433a.56.56 0 0 0-.783 0 .546.546 0 0 0 0 .776l1.733 1.716c.117.115.325.167.498.157.173.007.381-.046.494-.157l2.951-2.907a.547.547 0 0 0 0-.775.56.56 0 0 0-.783 0M16 28h44v2H16zM16 36h44v2H16z"></path><rect width="60" height="8" x="4" y="4" fill="#6A6A6A" rx="2"></rect><path fill="#181818" fill-rule="evenodd" d="M55 6h6l-3 4z" clip-rule="evenodd"></path><path fill="#181818" d="M7 7h46v2H7z"></path></svg>'},24564:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 68 48"><path fill="#363636" fill-rule="evenodd" d="M64 15a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h58a1 1 0 0 0 1-1zM5 15h58v28H5z" clip-rule="evenodd"></path><path fill="#6A6A6A" d="M52 20H8v2h44zM59.055 19.16l-2.662 2.623-1.448-1.433a.56.56 0 0 0-.784 0 .546.546 0 0 0 0 .776l1.734 1.715c.117.116.325.168.498.158.173.007.381-.046.494-.157l2.952-2.906a.547.547 0 0 0 0-.776.56.56 0 0 0-.784 0M59.055 27.16l-2.662 2.623-1.448-1.433a.56.56 0 0 0-.784 0 .546.546 0 0 0 0 .776l1.734 1.715c.117.116.325.168.498.158.173.007.381-.046.494-.157l2.952-2.906a.547.547 0 0 0 0-.776.56.56 0 0 0-.784 0M59.055 35.16l-2.662 2.623-1.448-1.433a.56.56 0 0 0-.784 0 .546.546 0 0 0 0 .776l1.734 1.716c.117.115.325.167.498.157.173.007.381-.046.494-.157l2.952-2.907a.547.547 0 0 0 0-.775.56.56 0 0 0-.784 0M52 28H8v2h44zM52 36H8v2h44z"></path><rect width="60" height="8" fill="#6A6A6A" rx="2" transform="matrix(-1 0 0 1 64 4)"></rect><path fill="#181818" fill-rule="evenodd" d="M13 6H7l3 4z" clip-rule="evenodd"></path><path fill="#181818" d="M61 7H15v2h46z"></path></svg>'},69425:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 68 48"><path fill="#363636" fill-rule="evenodd" d="M64 15a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h58a1 1 0 0 0 1-1zM5 15h58v28H5z" clip-rule="evenodd"></path><path fill="#6A6A6A" d="M16 20h44v2H16z"></path><path fill="#999" d="m13.055 19.16-2.662 2.623-1.448-1.433a.56.56 0 0 0-.783 0 .546.546 0 0 0 0 .776l1.733 1.715c.117.116.325.168.498.158.173.007.381-.046.494-.157l2.951-2.906a.547.547 0 0 0 0-.776.56.56 0 0 0-.783 0"></path><path fill="#363636" d="M16 28h44v2H16zM16 36h44v2H16z"></path><rect width="60" height="8" x="4" y="4" fill="#6A6A6A" rx="2"></rect><path fill="#181818" fill-rule="evenodd" d="M55 6h6l-3 4z" clip-rule="evenodd"></path><path fill="#181818" d="M7 7h46v2H7z"></path></svg>'},10822:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 68 48"><path fill="#363636" fill-rule="evenodd" d="M4 15a1 1 0 0 1 1-1h58a1 1 0 0 1 1 1v28a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm59 0H5v28h58z" clip-rule="evenodd"></path><path fill="#6A6A6A" d="M52 20H8v2h44z"></path><path fill="#999" d="m59.055 19.16-2.662 2.623-1.448-1.433a.56.56 0 0 0-.784 0 .546.546 0 0 0 0 .776l1.734 1.715c.117.116.325.168.498.158.173.007.381-.046.494-.157l2.952-2.906a.547.547 0 0 0 0-.776.56.56 0 0 0-.784 0"></path><path fill="#363636" d="M52 28H8v2h44zM52 36H8v2h44z"></path><rect width="60" height="8" fill="#6A6A6A" rx="2" transform="matrix(-1 0 0 1 64 4)"></rect><path fill="#181818" fill-rule="evenodd" d="M13 6H7l3 4z" clip-rule="evenodd"></path><path fill="#181818" d="M61 7H15v2h46z"></path></svg>'},30880:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 68 48"><rect width="15" height="8" x="32" y="24" fill="#363636" rx="1"></rect><rect width="15" height="8" x="49" y="24" fill="#363636" rx="1"></rect><rect width="26" height="8" x="4" y="24" fill="#363636" rx="1"></rect><rect width="19" height="8" x="4" y="4" fill="#6A6A6A" rx="1"></rect><rect width="34" height="8" x="4" y="14" fill="#363636" rx="1"></rect><rect width="15" height="8" x="45" y="4" fill="#363636" rx="1"></rect><rect width="18" height="8" x="25" y="4" fill="#363636" rx="1"></rect><rect width="24" height="8" x="40" y="14" fill="#363636" rx="1"></rect><rect width="24" height="8" x="4" y="34" fill="#363636" rx="1"></rect></svg>'},33679:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 68 48"><rect width="15" height="8" fill="#363636" rx="1" transform="matrix(-1 0 0 1 36 24)"></rect><rect width="15" height="8" fill="#363636" rx="1" transform="matrix(-1 0 0 1 19 24)"></rect><rect width="26" height="8" fill="#363636" rx="1" transform="matrix(-1 0 0 1 64 24)"></rect><rect width="19" height="8" fill="#6A6A6A" rx="1" transform="matrix(-1 0 0 1 64 4)"></rect><rect width="34" height="8" fill="#363636" rx="1" transform="matrix(-1 0 0 1 64 14)"></rect><rect width="15" height="8" fill="#363636" rx="1" transform="matrix(-1 0 0 1 23 4)"></rect><rect width="18" height="8" fill="#363636" rx="1" transform="matrix(-1 0 0 1 43 4)"></rect><rect width="24" height="8" fill="#363636" rx="1" transform="matrix(-1 0 0 1 28 14)"></rect><rect width="24" height="8" fill="#363636" rx="1" transform="matrix(-1 0 0 1 64 34)"></rect></svg>'},79244:e=>{"use strict";e.exports=s},1888:e=>{"use strict";e.exports=a},14321:e=>{"use strict";e.exports=i},13089:e=>{"use strict";e.exports=l},98640:e=>{"use strict";e.exports=o},76117:e=>{"use strict";e.exports=r}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var p={};return(()=>{"use strict";n.r(p),n.d(p,{GroupSqlExpressionBuilderPopup:()=>Oe,Sort:()=>De,SqlExpressionBuilder:()=>pe,SqlExpressionBuilderPopup:()=>ue,_GroupSqlExpressionBuilderPopup:()=>we,_SqlExpressionBuilder:()=>ne,_SqlExpressionBuilderPopup:()=>ce});var e={};n.r(e),n.d(e,{GroupSqlExpressionBuilder:()=>o,InputEditorTypeSelector:()=>l,Sort:()=>r,SqlExpressionBuilder:()=>s,SqlExpressionClause:()=>a,SqlExpressionClauseSet:()=>i});var t=n(79244);function s(e){return t.css`
    &.use-scroll{
      height: 100%;
      .sql-expression-builder{
          height: 100%;
          .sql-expression-container{
            height: 100%;
            .builder-btn-container{
              padding-right: 2px;
            }
            .sql-expression-list{
              padding-right: 2px;
              max-height: calc(100vh - 255px);
              height: calc(100% - 36px);
              overflow-y: auto;
            }
          }
      }
    }

    .sql-expression-builder {
      padding: 5px;
      .no-data-tip{
        text-align: center;
        height: 22px;
      }

      .builder-btn-container{
        display: flex;
        margin: 0 0 15px 0;
        .add-button-container{
          margin-left: auto;
        }
      }
      .add-button-container{
        display: flex;
      }
    }

    &.small-mode,
    &.medium-mode{
      .sql-expression-builder .sql-expression-clause{
        display: block;
        .clause-controllers-container{
          width: 100%;
          margin-left: 0;
        }
        .clause-style-container{
          .input-editor.is-sql-builder {
            width: ${`calc(100% - ${window.jimuConfig.isBuilder?32:40}px)!important`};
          }
        }
      }
    }

    &.small-mode{ /* 350px */
      .sql-expression-builder{
        padding: 0;
        .sql-expression-container{
          min-width: 300px;
          overflow-x: auto;
          overflow-y: hidden;
          .builder-btn-container{
            margin-bottom: 1rem;
          }
          .sql-expression-single{
            padding: 0.25rem 1rem 0.5rem 1rem;
            margin-bottom: 0.5rem;
            .clause-main-container{
              display: block !important;

              .clause-field-and-operator{
                margin: 0.5rem 0 !important;
                justify-content: space-between;
                .clause-field-container {
                  margin: 0;
                  width: calc(60% - 0.25rem);
                }
                .clause-operator-container{
                  margin: 0;
                  width: calc(40% - 0.25rem);
                }
              }
              .clause-style-container{
                width: 100%;
                margin: 0.5rem 0 !important;
              }
            }
          }
          .sql-expression-set{
            .btn-container{
              padding: 0.5rem 1rem 0.5rem 1rem;
            }
            .sql-expression-single{
              margin-bottom: 0;
            }
          }
          .add-button-container{
            align-content: space-between;
          }
        }
      }
    }
    &.medium-mode{ /* 350px - 614px */
      .sql-expression-builder{
        .clause-field-container,
        .clause-operator-container{
          width: 123px;
        }
        .clause-style-container{
          width: calc(100% - 270px);
        }
      }
    }
    &.large-mode{ /* 915px */
      .sql-expression-builder{
        .clause-field-container,
        .clause-operator-container{
          width: 150px;
        }
        .clause-style-container{
          width: 380px;
        }
      }
    }

  `}function a(e){const s=e.theme;return t.css`
    .sql-expression-single {
      background-color: ${s.ref.palette.neutral[500]};
      padding: 13px 5px;
      margin-bottom: 0.5rem;

      .sql-expression-clause{
        display: flex;
        .clause-main-container{
          display: flex;
          .clause-field-and-operator{
            display: flex;
            .clause-field-container,
            .clause-operator-container{
              margin: 0 4px;
            }
          }
          .clause-style-container{
            display: flex;
            flex-grow: 1;
            margin: 0 4px;
            .source-type-selector{
              margin-right: 8px;
              .jimu-btn{
                &.dropdown-icon-dot .icon-btn-sizer:after {
                  border-top: 2px solid #fff;
                }
                .jimu-icon {
                  color: #fff !important;
                }
              }
            }
          }
        }

        .clause-controllers-container{
          width: 150px;
          margin-left: 12px;
          margin-right: 1px;
          .case-sensitive-btn, .more-input-setting-btn, .duplicate-btn, .delete-btn{
            margin: 0 2px;
            .jimu-badge-badge {
              border-color: ${s.ref.palette.black};
            }
          }
          .case-sensitive-btn.disabled, .case-sensitive-btn.disabled:hover, .case-sensitive-btn:disabled:hover{
            border: none;
          }
          .case-sensitive-btn:disabled .jimu-icon, .more-input-setting-btn:disabled .jimu-icon{
            opacity: 0.5;
          }
          .more-input-setting-btn-active,
          .dropdown-active {
            background-color: ${s.sys.color.primary.main} !important;
            color: ${s.ref.palette.black} !important;
          }
        }
      }

      .ask-for-value-container{
        margin-top: 1.5rem;
        margin-left: 8px;
        .ask-for-value-radio{
          display: flex;
          margin: 10px 0;
        }
        .ask-for-value-options{
          display: flex;
          margin-left: 20px;
          .ask-for-value-item{
            .ask-for-value-item-label{
              color: ${s.ref.palette.neutral[900]};
              margin-bottom: 3px;
            }
          }
          .ask-for-value-middle-item{
            margin: 0 0.1rem;
          }
          .use-label-input {
            margin-left: 0.5rem;
            width: 25%;
          }
        }
      }

      &.for-group-filter {
        .sql-expression-clause {
          .clause-main-container .clause-style-container .input-editor {
            margin: 0 2px;
          }
          .clause-controllers-container {
            width: unset;
            margin: 0;
          }
        }
        .ask-for-value-container {
          .ask-for-value-radio-selector {
            display: block !important;
            .ask-for-value-middle-item {
              width: 100%;
              .style-type-selector {
                width: 100%;
                .style-button {
                  width: 100%;
                  button {
                    width: 100%;
                  }
                }
              }
            }
          }
          .ask-for-value-options {
            display: block;
            flex-direction: column;
            .ask-for-value-item {
              display: block;
            }
            .use-label-input {
              margin-left: 1.5rem;
              margin-top: 0.5rem;
              width: auto;
            }
          }
        }
      }
    }
  `}function i(e){const s=e.theme;return t.css`
    .sql-expression-set {
      margin-bottom: 0.5rem;
      background-color: ${s.ref.palette.neutral[500]};

      .btn-container{
        .jimu-btn{
          font-size: 12px;
        }
        display: flex;
        padding: 11px 5px 11px 10px;

        .and-or-container{
          margin: 0;
        }
        .add-button-container{
          margin-left: auto;
          margin-right: 0.125rem;
        }
      }

      .sql-expression-single{
        margin: 0;
        border: 0 !important;
        border-top: ${window.jimuConfig.isBuilder?4:1}px solid ${s.ref.palette.neutral[400]} !important;
      }
    }

  `}const l=e=>{const s=e.theme;return t.css`
    .style-button{
    }
    .style-warning{
      color: ${s.sys.color.warning.main};
    }
    .style-popper{
      .style-popper-content{
        width: 180px;
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        max-height: 300px;
        height: auto;
        overflow: auto;

        .style-item{
          margin: 5px;
          padding: 0;
          background-color: ${s.ref.palette.neutral[300]};

          &.active {
            outline: 2px solid ${s.sys.color.primary.main};
          }
        }
      }

    }
  `};function o(e){const s=e.theme;return t.css`
    .group-sql-expression-builder {

      margin: 0.875rem;
      margin-bottom: 0;
      .no-data-tip{
        text-align: center;
      }
      .content-container {
        min-height: 425px;
        .fields-container {
          width: 623px;
          .fields-container-label {
            font-size: 16px;
            font-weight: 600;
            color: ${s.ref.palette.neutral[1e3]};
          }
          .type-label {
            font-size: 14px;
            font-weight: 600;
            color: ${s.ref.palette.neutral[900]};
          }
          .main-field {
            padding-right: 0.75rem;
            margin-bottom: 1.5rem;
          }
          .field-list {
            padding-right: 0.75rem;
            max-height: calc(100vh - 380px);
            overflow-y: auto;
          }
          .field-item {
            background-color: ${s.ref.palette.neutral[500]};
            padding: 13px 12px;
            margin-bottom: 0.5rem;
            .data-field-container {
              .data-source-selector {
                width: 240px;
                position: relative;
                .data-source-selector-inner {
                  width: 100%;
                  position: absolute;
                  top: -6px;
                  margin-left: 0.25rem;
                  .main-ds-label {
                    color: ${s.ref.palette.neutral[1100]};
                  }
                  .view-ds-label {
                    margin-top: 0.125rem;
                    font-size: 12px;
                    color: ${s.ref.palette.neutral[900]};
                  }
                }
              }
              .field-selector {
                width: 206px;
              }
              .and-or-container {
                width: 75px;
              }
            }
            .case-sensitive-container {
              width: 120px;
              display: flex;
              justify-content: end;
              .case-sensitive-btn, .more-input-setting-btn, .duplicate-btn, .delete-btn{
                .jimu-badge-badge {
                  border-color: ${s.ref.palette.black};
                }
              }
              .case-sensitive-btn.disabled, .case-sensitive-btn.disabled:hover, .case-sensitive-btn:disabled:hover{
                background: ${s.sys.color.secondary.main};
                background-color: ${s.ref.palette.neutral[500]};
                border: none;
              }
              .case-sensitive-btn:disabled .jimu-icon {
                opacity: 0.5;
              }
              .jimu-badge-badge:not(.badge-badge-primary) {
                top: -2px;
              }
            }
          }
        }
        .clause-container {
          width: 239px;
          margin-top: 42px;
          margin-left: 0.75rem;
          padding-left: ${t.polished.rem(19)};
          border-left: 2px solid ${s.ref.palette.neutral[500]};
          .clause-container-label {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: -0.5rem;
            color: ${s.ref.palette.neutral[900]};
          }
          .sql-expression-single.for-group-filter {
            padding-top: 10px;
            padding-left: 0;
            padding-right: 0;
            background-color: transparent;
            .clause-main-container {
              display: block;
              width: 100%;
              .clause-operator-container {
                width: 100%;
                margin: 0;
              }
              .clause-style-container {
                margin: 0;
                margin-top: 0.75rem;
                .input-editor {
                  width: calc(100% - 35px) !important;
                }
              }
            }
            .ask-for-value-container {
              margin-left: 0;
              margin-right: 0;
            }
          }
        }
      }
    }
  `}const r=e=>{const s=e.theme,{emptyHintTopSpaceSize:a}=e,i=a?t.polished.rem(a-16):t.polished.rem(70);return t.css`
    width:100%;
    .sort-title {
        margin-bottom: 20px;
        color: ${s.ref.palette.black};
        font-size: 16px;
    }
    .padding-0 {
        padding: 0;
    }
    .ml-0 {
        margin-left: 0;
    }
    .delete-all-button {
        cursor: pointer;
    }
    .jimu-tree-item__body {
        margin-bottom: 10px;
        background: ${s.ref.palette.neutral[500]};
        padding: 10px 10px 10px 0;
        box-shadow: 0 0 0 2px ${t.polished.rgba(s.ref.palette.white,.3)};
        flex: 1;
    }
    .multi-sort-select-con {
        & {
            display: flex;
            align-items: center;
            flex: 1;
        }
        .sort-field-selector {
            background:${s.sys.color.secondary.light};
            border-radius: 2px;
            flex: 1;
            width: 0
        }

        .delete-button {
            cursor: pointer;
            text-align:right;
            margin-left: ${t.polished.rem(2)};
        }
        .delete-button svg {
            margin-right:0;
        }
    }
    .delete-sort-con {
        & {
            margin-left:5px;
        }
        .sort-button-l {
            border-radius: 2px 0 0 2px;
            border-right:none;
        }
        .sort-button-r {
            border-radius: 0px 2px 2px 0px;
            border-left:none;
        }
        .sort-button {
            border-color: ${s.sys.color.divider.primary};
        }
        svg {
            margin-right:0;
        }
    }
    .add-option .add-option-button{
        & {
            width:100%;
            font-size:14px;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: ${t.polished.rem(16)};
        }
        svg {
            margin-right:0;
            margin-right:5px;
        }
    }
    .no-sort-remind {
        margin: ${i} auto 0;
        color: ${s.ref.palette.neutral[700]};
        font-size: 13px;
        text-align: center;
    }
  `};var h=n(1888),d=n(14321),c=n(13089),u=n(76117);class m extends t.React.PureComponent{constructor(){super(...arguments),this.i18nMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:d.defaultMessages[e]}),this.onChange=e=>{this.props&&this.props.onChange(e.target.value)}}render(){const e=this.props.list?this.props.list:this.props.value?[this.props.value]:[];return t.React.createElement(d.Select,{value:this.props.value||"",onChange:this.onChange,size:window.jimuConfig.isBuilder?"sm":"default"},e.map(((e,s)=>{const a=this.i18nMessage((0,u.getCamelCase)(e));return t.React.createElement("option",{key:s,value:e,label:a},a)})))}}const g=(0,t.injectIntl)(m);var v=n(16428),f=n.n(v),x=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const y=e=>{const s=window.SVG,{className:a}=e,i=x(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",a);return s?t.React.createElement(s,Object.assign({className:l,src:f()},i)):t.React.createElement("svg",Object.assign({className:l},i))};class M extends t.React.PureComponent{constructor(e){super(e),this.i18nMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:d.defaultMessages[e]}),this.onTypeSelect=e=>{e!==this.props.sourceType&&this.props.onSelect(e)},this.toggle=()=>{this.setState({isOpen:!this.state.isOpen})},this.state={isOpen:!1}}render(){const{list:e,sourceType:s,hideFieldType:a=!1}=this.props;return(0,t.jsx)("div",{className:"source-type-selector"},(0,t.jsx)(d.Dropdown,{menuRole:"listbox",activeIcon:!0},(0,t.jsx)(d.DropdownButton,{icon:!0,arrow:!1,dot:!0,size:window.jimuConfig.isBuilder?"sm":"default",type:"primary","data-toggle":"dropdown",title:this.i18nMessage("sourceType"),"aria-label":this.i18nMessage("sourceType"),onClick:this.toggle},(0,t.jsx)(y,{className:"text-default dropdown-icon"})),(0,t.jsx)(d.DropdownMenu,{showArrow:!0,strategy:"fixed",appendToBody:!window.jimuConfig.isBuilder},(0,t.jsx)(d.DropdownItem,{header:!0},this.i18nMessage("sourceType")),e&&Object.keys(e).map(((e,i)=>a&&e===t.ClauseSourceType.Field?null:(0,t.jsx)(d.DropdownItem,{key:i,onClick:()=>{this.onTypeSelect(e)},active:s===e},this.i18nMessage((0,u.getCamelCase)(e))))))))}}const b=(0,t.injectIntl)(M);var S=n(72823),w=n.n(S),O=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const C=e=>{const s=window.SVG,{className:a}=e,i=O(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",a);return s?t.React.createElement(s,Object.assign({className:l,src:w()},i)):t.React.createElement("svg",Object.assign({className:l},i))},j=[{name:"flip",enabled:!0}];class z extends t.React.PureComponent{constructor(e){super(e),this.i18nMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:d.defaultMessages[e]}),this.onTypeSelect=(e,s)=>{if(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),s!==this.state.inputEditorType){if([u.ClauseInputEditor.UniquePillWrapSelector,u.ClauseInputEditor.MultiplePillWrapSelector].includes(s))if(this.props.codedValues)this.changeValueOptionByInputType(s,this.props.codedValues.length);else{const e={where:"(1=1)",returnGeometry:!1,outFields:[this.props.fieldName],returnDistinctValues:!0};this.props.dataSource.queryCount(e,{scope:t.QueryScope.InConfigView,widgetId:"check_count"}).then((e=>{this.changeValueOptionByInputType(s,e.count)}))}else this.changeValueOptionByInputType(s)}else this.setState({isWarningShown:!1})},this.changeValueOptionByInputType=(e,s)=>{if(s&&s>20)this.setState({isWarningShown:!0});else{this.setState({inputEditorType:e});t.lodash.debounce((()=>{this.props.onSelect(e),this.toggle()}),200)()}},this.toggle=()=>{if(this.state.isOpen){t.lodash.debounce((()=>{var e;null===(e=this.styleBtnRef)||void 0===e||e.focus()}),200)()}this.setState({isWarningShown:!1,isOpen:!this.state.isOpen})},this.getWarningDOM=()=>this.state.isWarningShown&&(0,t.jsx)("div",{className:"style-warning ml-2",role:"alert","aria-live":"polite"},(0,t.jsx)(C,{className:"mr-2"}),this.i18nMessage("invalidStyleWarning")),this.rtl=(0,t.getAppStore)().getState().appContext.isRTL?"_rtl":"",this.state={isOpen:!1,isWarningShown:!1,inputEditorType:this.props.inputEditorType}}componentDidUpdate(e,t){e.inputEditorType!==this.props.inputEditorType&&this.setState({inputEditorType:this.props.inputEditorType})}render(){return(0,t.jsx)("div",{className:(0,t.classNames)(" style-type-selector align-items-center",this.props.className,{"d-flex":!this.props.isForGroupFilter})},this.props.isForGroupFilter&&(0,t.jsx)("div",{className:"mb-1"},this.getWarningDOM()),(0,t.jsx)("div",{className:"style-button"},(0,t.jsx)(d.Button,{ref:e=>{this.styleBtnRef=e},size:"sm",className:"pl-4 pr-4 text-nowrap",type:"primary",onClick:this.toggle,"aria-label":this.i18nMessage("chooseStyle")},this.i18nMessage("chooseStyle"))),!this.props.isForGroupFilter&&this.getWarningDOM(),(0,t.jsx)(d.Popper,{strategy:"fixed",disablePortal:!0,reference:this.styleBtnRef,open:this.state.isOpen,toggle:this.toggle,showArrow:!0,className:this.props.className,modifiers:j},(0,t.jsx)("div",{className:"style-popper"},(0,t.jsx)("div",{className:"style-popper-content"},this.props.list.map(((e,s)=>{const a=this.i18nMessage((0,u.getCamelCase)(e));return(0,t.jsx)(d.Tooltip,{title:a,placement:"bottom",key:s},(0,t.jsx)(d.Button,{icon:!0,type:"tertiary","aria-label":a,onClick:t=>{this.onTypeSelect(t,e)},className:(0,t.classNames)("style-item",{active:this.state.inputEditorType===e})},(0,t.jsx)(d.Icon,{className:"thumbnail",width:68,height:48,currentColor:!1,icon:n(18180)(`./style_${e.toLowerCase()}${this.rtl}.svg`)})))}))))))}}const A=(0,h.withStyles)((0,t.injectIntl)(z),"InputEditorTypeSelector");var N=n(93303),T=n.n(N),k=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const B=e=>{const s=window.SVG,{className:a}=e,i=k(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",a);return s?t.React.createElement(s,Object.assign({className:l,src:T()},i)):t.React.createElement("svg",Object.assign({className:l},i))};var L=n(9869),F=n.n(L),D=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const V=e=>{const s=window.SVG,{className:a}=e,i=D(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",a);return s?t.React.createElement(s,Object.assign({className:l,src:F()},i)):t.React.createElement("svg",Object.assign({className:l},i))};var E=n(62838),I=n.n(E),_=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const H=e=>{const s=window.SVG,{className:a}=e,i=_(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",a);return s?t.React.createElement(s,Object.assign({className:l,src:I()},i)):t.React.createElement("svg",Object.assign({className:l},i))};var q=n(91622),P=n.n(q),R=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const U=e=>{const s=window.SVG,{className:a}=e,i=R(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",a);return s?t.React.createElement(s,Object.assign({className:l,src:P()},i)):t.React.createElement("svg",Object.assign({className:l},i))};var G=n(1690),$=n.n(G),W=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const Q=e=>{const s=window.SVG,{className:a}=e,i=W(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",a);return s?t.React.createElement(s,Object.assign({className:l,src:$()},i)):t.React.createElement("svg",Object.assign({className:l},i))};var J=n(81758),K=n.n(J),X=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const Y=e=>{const s=window.SVG,{className:a}=e,i=X(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",a);return s?t.React.createElement(s,Object.assign({className:l,src:K()},i)):t.React.createElement("svg",Object.assign({className:l},i))},Z=[t.ClauseSourceType.SingleSelectFromUnique,t.ClauseSourceType.MultipleSelectFromUnique];class ee extends t.React.PureComponent{constructor(e){super(e),this.getFieldObj=()=>{const e=this.props.dataSource.getSchema().fields;this.fieldObj=this.props.clause.jimuFieldName?(0,t.Immutable)(e[this.props.clause.jimuFieldName]):null},this._updateTwoStates=(e,t,s)=>{this._updateCaseSensitiveState(e,t),this._updateAskForValueState(e,t),s&&this.setState({rerender:!this.state.rerender})},this.i18nMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:d.defaultMessages[e]}),this.isCascadeSupported=()=>!this.props.isForGroupFilter&&Z.includes(this.props.clause.valueOptions.sourceType),this.getOperatorsByField=e=>{let t=[];return e&&e.type&&(t=(0,u.getOperatorsByShortType)(e.type,this.props.isHosted)),t},this.deleteClause=()=>{this.props.onChange(null)},this.toggleCaseSensitive=()=>{this.onChanged({caseSensitive:!this.props.clause.caseSensitive})},this.duplicateClause=()=>{this.props.onChange(this.props.clause,!0)},this.toggleValueLabelPanel=()=>{this.setState({isValueLabelPanelShown:!this.state.isValueLabelPanelShown})},this.getLabel=(e=this.props.clause)=>{let t="";if(e.operator){const s=this.i18nMessage((0,u.getCamelCase)(e.operator));t=(0,u.getClauseLabel)(e,this.fieldObj,s,this.props.isForGroupFilter)}return t},this.onAskForValueOptsChange=e=>{const t=Object.assign({},this.props.clause.askForValueOptions,e);this.onChanged({askForValueOptions:t})},this.onLabelAccept=(e,s)=>{const a=this.i18nMessage((0,u.getCamelCase)(this.props.clause.operator)),i=(0,u.getClauseDefaultLabel)(this.props.clause,this.fieldObj,a,this.props.isForGroupFilter);if(e=e.trim(),s){if(""===e||e===i){this.setState({displayLabel:i});return void t.lodash.debounce((()=>{this.onChanged({displayLabel:null})}),200)()}this.setState({displayLabel:e}),this.onChanged({displayLabel:e})}else{const t=e===i?null:e;this.onAskForValueOptsChange({label:t})}},this.onLabelChange=e=>{this.setState({displayLabel:e.target.value})},this.setValueLabelStatus=e=>{let s={displayType:e,askForValueOptions:null,displayLabel:null};if(e===t.ClauseDisplayType.UseAskForValue)s.askForValueOptions=this.getAskForValueOptions();else{const e=this.props.clause.valueOptions,t=this.displayTypeList[e.sourceType][0];if(e.inputEditor!==t){const e=Object.assign({},this.props.clause.valueOptions,{inputEditor:t});s=Object.assign({},s,{valueOptions:e})}}this.onChanged(s)},this.setDisplayLabelCheckbox=e=>{let s=t.ClauseDisplayType.None,a=null;e&&(s=t.ClauseDisplayType.UseLabel,a=this.getLabel(Object.assign({},this.props.clause,{displayType:t.ClauseDisplayType.UseLabel}))),this.setState({displayLabel:a}),this.setValueLabelStatus(s)},this.getAskForValueOptions=(e=!1)=>({label:null,display:t.ClauseLabelDisplay.Block,hint:"",cascade:e||this.isCascadeSupported()?t.ClauseCascade.None:null}),this.onFieldChange=e=>{const s=e[0];if(!s)return;this.fieldObj=(0,t.Immutable)(s);const a=this._updateOptionsByField(s);this._updateTwoStates(this.operatorList[0],a.sourceType),this.onChanged({jimuFieldName:s.jimuName,operator:this.operatorList[0],caseSensitive:!1,displayType:t.ClauseDisplayType.None,askForValueOptions:null,displayLabel:null,valueOptions:a})},this._updateOptionsByField=(e,t)=>(this.operatorList=this.getOperatorsByField(e),t=t||this.operatorList[0],this._updateOptionsByOperator(e,t,e.jimuName)),this.onOperatorChange=e=>{const s=this._updateOptionsByOperator(this.fieldObj,e,this.fieldObj.jimuName);this._updateTwoStates(e,s.sourceType);const a=this.shouldOpenAskForValueAutomatically(s.sourceType);this.onChanged({operator:e,caseSensitive:!1,displayType:a?t.ClauseDisplayType.UseAskForValue:t.ClauseDisplayType.None,askForValueOptions:a?this.getAskForValueOptions(a):null,displayLabel:null,valueOptions:s})},this._updateOptionsByOperator=(e,t,s)=>{const a=(0,u.getDisplayTypes)(this.props.mode,e,t,this.props.dataSource,s);return this.displayTypeList=a.displayTypes,this.codedValues=a.codedValues,(0,u.getDefaultClauseValObj)(a.defaultSourceType,a.defaultInputEditorType)},this.onValueOptsChange=e=>{e.inputEditor!==this.props.clause.valueOptions.inputEditor&&(e.inputEditor=this.props.clause.valueOptions.inputEditor),this.onChanged({valueOptions:e})},this.isUniqueOrMultipleOnOutputDS=e=>{const s=this.props.dataSource.getDataSourceJson().isOutputFromWidget,a=[t.ClauseSourceType.SingleSelectFromUnique,t.ClauseSourceType.MultipleSelectFromUnique].includes(e);return s&&a},this.isOutputDsAndNoCodedValuesWhenUniqueOrMultiple=e=>this.isUniqueOrMultipleOnOutputDS(e)&&!this.codedValues,this.shouldOpenAskForValueAutomatically=e=>[t.ClauseSourceType.SingleSelectFromPredefined,t.ClauseSourceType.MultipleSelectFromPredefined].includes(e)||this.isUniqueOrMultipleOnOutputDS(e),this._resetToDefaultDateInputEditor=e=>{var s,a;return this.props.mode===t.SqlExpressionMode.All&&this.fieldObj.type===t.JimuFieldType.Date&&e===t.ClauseSourceType.UserInput&&(null===(a=null===(s=this.fieldObj.format)||void 0===s?void 0:s.dateFormat)||void 0===a?void 0:a.indexOf("Time"))>0},this.onSourceTypeSelect=e=>{let s="";Object.keys(this.displayTypeList).some((t=>{if(t===e)return s=this.displayTypeList[t][0],this._resetToDefaultDateInputEditor(t)&&(s=this.displayTypeList[t][1]),!0})),this._updateAskForValueState(this.props.clause.operator,e);const a=(0,u.getDefaultClauseValObj)(e,s),i=this.shouldOpenAskForValueAutomatically(e);this.onChanged({valueOptions:a,displayType:i?t.ClauseDisplayType.UseAskForValue:t.ClauseDisplayType.None,askForValueOptions:i?this.getAskForValueOptions(i):null,displayLabel:null})},this.onInputTypeSelect=e=>{this.onChanged({valueOptions:Object.assign({},this.props.clause.valueOptions,{inputEditor:e})})},this.getValueOptions=()=>{const e=this.props.clause.valueOptions;if(this.displayTypeList&&this.displayTypeList[e.sourceType]){const s=this.displayTypeList[e.sourceType][0];if(this.fieldObj.type===t.JimuFieldType.Date&&e.sourceType===t.ClauseSourceType.UserInput)return e;if(e.inputEditor!==s)return Object.assign({},e,{inputEditor:s})}return e},this.getControllers=(e,s)=>{const a=!this.props.isHosted&&s&&e.caseSensitive;return(0,t.jsx)("div",{className:"clause-controllers-container d-flex justify-content-end"},this.state.supportCaseSensitive&&(0,t.jsx)(d.Button,{className:"case-sensitive-btn",onClick:this.toggleCaseSensitive,icon:!0,size:"sm",type:"tertiary",disabled:!(!this.props.isHosted&&s),title:this.i18nMessage("caseSensitive"),"aria-label":this.i18nMessage("caseSensitive"),"aria-pressed":a},(0,t.jsx)(d.Badge,{dot:!0,color:"primary",hideBadge:!a},(0,t.jsx)(U,null))),this.props.mode===t.SqlExpressionMode.All&&(0,t.jsx)(d.Button,{type:"tertiary",onClick:this.toggleValueLabelPanel,icon:!0,size:"sm",className:(0,t.classNames)("more-input-setting-btn",{"more-input-setting-btn-active":this.state.isValueLabelPanelShown}),title:this.i18nMessage("moreInputSettings"),"aria-label":this.i18nMessage("moreInputSettings"),"aria-pressed":e.displayType!==t.ClauseDisplayType.None,"aria-expanded":this.state.isValueLabelPanelShown},(0,t.jsx)(d.Badge,{dot:!0,color:"primary",hideBadge:e.displayType===t.ClauseDisplayType.None},(0,t.jsx)(B,null))),(0,t.jsx)(d.Button,{type:"tertiary",onClick:this.duplicateClause,icon:!0,size:"sm",className:"duplicate-btn",title:this.i18nMessage("duplicate"),"aria-label":this.i18nMessage("duplicate")},(0,t.jsx)(V,null)),(0,t.jsx)(d.Button,{type:"tertiary",onClick:this.deleteClause,icon:!0,size:"sm",className:"delete-btn",title:this.i18nMessage("deleteClause"),"aria-label":this.i18nMessage("deleteClause")},(0,t.jsx)(H,null)))},this.isPredefinedWithNoValues=e=>{var s;return[t.ClauseSourceType.SingleSelectFromPredefined,t.ClauseSourceType.MultipleSelectFromPredefined].includes(e.valueOptions.sourceType)&&(!e.valueOptions.value||0===(null===(s=e.valueOptions.value)||void 0===s?void 0:s.length))},this.onChanged=e=>{let t=Object.assign({},this.props.clause,e),s=!0;if(this.isPredefinedWithNoValues(t)?s=!1:null!==t.askForValueOptions||t.operator.includes("BLANK")||(s=!(null===t.valueOptions.value||t.valueOptions.value.filter((e=>null===e||null===(null==e?void 0:e.value))).length>0)),s!==t.valueOptions.isValid){const e=(0,u.getDefaultClauseValObj)(t.valueOptions.sourceType,t.valueOptions.inputEditor,t.valueOptions.value,s);t=Object.assign({},t,{valueOptions:e})}this.props.onChange(t)},this._isMounted=!1,this.getFieldObj(),this.codedValues=this.props.clause&&this.fieldObj?this.getCodedValues():null,this.state={rerender:!1,displayLabel:this.getLabel(),supportCaseSensitive:!1,supportAskForValue:!1,isValueLabelPanelShown:this.props.isForGroupFilter}}getCodedValues(){return(0,u.getInputEditorListByOperatorAndSourceType)(this.props.clause.operator,this.props.clause.valueOptions.sourceType,this.props.dataSource,this.fieldObj.jimuName).codedValues}componentDidMount(){this._isMounted=!1,this.props.clause.operator&&(this._updateOptionsByField(this.fieldObj,this.props.clause.operator),this._updateTwoStates(this.props.clause.operator,this.props.clause.valueOptions.sourceType,!0))}componentDidUpdate(e,t){var s,a;if(this._isMounted)return;const i=this.props.clause.jimuFieldName!==e.clause.jimuFieldName,l=this.props.clause.operator!==e.clause.operator;if(i&&(this.getFieldObj(),this.operatorList=this.getOperatorsByField(this.fieldObj)),i||l){const e=(0,u.getDisplayTypes)(this.props.mode,this.fieldObj,this.props.clause.operator,this.props.dataSource,this.fieldObj.jimuName);this.displayTypeList=e.displayTypes,this.codedValues=e.codedValues,this._updateTwoStates(this.props.clause.operator,this.props.clause.valueOptions.sourceType,!0)}else(null===(s=this.props.clause.valueOptions)||void 0===s?void 0:s.value)!==(null===(a=e.clause.valueOptions)||void 0===a?void 0:a.value)&&null===this.props.clause.displayLabel&&this.setState({displayLabel:this.getLabel()})}componentWillMount(){this._isMounted=!0}_updateCaseSensitiveState(e,t){const s=(0,u.isCaseSensitiveSupportedByOperatorAndSourceType)(e,t);this.setState({supportCaseSensitive:s})}_updateAskForValueState(e,t){const s=(0,u.isAskForValueSupportedByOperatorAndSourceType)(e,t);this.setState({supportAskForValue:s})}render(){var e,s,a,i,l;const{clause:o,className:r="",sizeMode:n,dataSource:p,isForGroupFilter:h=!1}=this.props,m=this.getLabel(),v=!o.operator||!o.operator.includes("BLANK"),f=this.shouldOpenAskForValueAutomatically(null===(e=o.valueOptions)||void 0===e?void 0:e.sourceType);return(0,t.jsx)("div",{className:r},(0,t.jsx)("div",{className:(0,t.classNames)("sql-expression-single",{"surface-1":!window.jimuConfig.isBuilder,"for-group-filter":h})},(0,t.jsx)("div",{className:"sql-expression-clause"},n!==u.SqlExpressionSizeMode.Large&&!h&&this.getControllers(o,v),(0,t.jsx)("div",{className:"w-100 clause-main-container"},(0,t.jsx)("div",{className:"clause-field-and-operator"},!h&&(0,t.jsx)("div",{className:"clause-field-container"},(0,t.jsx)(c.FieldSelector,{dataSources:[p],useDefault:!0,onChange:this.onFieldChange,selectedFields:this.fieldObj?(0,t.Immutable)([this.fieldObj.jimuName]):null,hiddenFields:p.type===t.DataSourceTypes.SubtypeSublayer?(0,t.Immutable)([p.getLayerDefinition().subtypeField]):null,isDataSourceDropDownHidden:!0,useDropdown:!0,dropdownProps:{size:window.jimuConfig.isBuilder?"sm":"default"}})),(0,t.jsx)("div",{className:"clause-operator-container"},(0,t.jsx)(g,{onChange:this.onOperatorChange,value:o.operator,list:this.operatorList}))),(0,t.jsx)("div",{className:"clause-style-container"},v&&(0,t.jsx)(b,{onSelect:this.onSourceTypeSelect,list:this.displayTypeList,sourceType:o.valueOptions.sourceType,hideFieldType:h}),v&&(0,t.jsx)(u.InputEditorRender,{onChange:this.onValueOptsChange,dataSource:p,codedValues:this.codedValues,valueOptions:this.getValueOptions(),fieldObj:this.fieldObj,runtime:!window.jimuConfig.isBuilder,isFromBuilder:!0,isSmallSize:n===u.SqlExpressionSizeMode.Small})),n===u.SqlExpressionSizeMode.Large&&this.getControllers(o,v))),this.state.isValueLabelPanelShown&&(0,t.jsx)("div",{className:"ask-for-value-container"},(0,t.jsx)("div",{className:"ask-for-value-radio d-flex mr-5"},(0,t.jsx)(d.Label,{check:!0,centric:!0},(0,t.jsx)(d.Radio,{style:{cursor:"pointer"},className:"mr-2 align-text-bottom",onChange:e=>{this.setValueLabelStatus(t.ClauseDisplayType.None)},checked:o.displayType!==t.ClauseDisplayType.UseAskForValue,disabled:f}),this.i18nMessage("unAskForValues"))),o.displayType!==t.ClauseDisplayType.UseAskForValue&&(0,t.jsx)("div",{className:"ask-for-value-options align-items-center mt-2"},(0,t.jsx)(d.Label,{check:!0,centric:!0},(0,t.jsx)(d.Checkbox,{style:{cursor:"pointer"},className:"mr-2",checked:o.displayType===t.ClauseDisplayType.UseLabel,onChange:e=>{this.setDisplayLabelCheckbox(e.target.checked)}}),this.i18nMessage("displayLabel")),o.displayType===t.ClauseDisplayType.UseLabel&&(0,t.jsx)("div",{className:"use-label-input"},(0,t.jsx)(d.TextInput,{size:"sm",type:"text","aria-label":this.i18nMessage("displayLabel"),value:this.state.displayLabel,onChange:this.onLabelChange,onAcceptValue:e=>{this.onLabelAccept(e,!0)}}))),(0,t.jsx)("div",{className:"ask-for-value-radio-selector d-flex align-items-center"},this.state.supportAskForValue&&(0,t.jsx)("div",{className:"ask-for-value-radio d-flex"},(0,t.jsx)(d.Label,{check:!0,centric:!0},(0,t.jsx)(d.Radio,{style:{cursor:"pointer"},className:"mr-2 align-text-bottom",onChange:()=>{this.setValueLabelStatus(t.ClauseDisplayType.UseAskForValue)},checked:o.displayType===t.ClauseDisplayType.UseAskForValue,disabled:f}),this.i18nMessage("askForValues"))),this.state.supportAskForValue&&o.displayType===t.ClauseDisplayType.UseAskForValue&&this.displayTypeList&&this.displayTypeList[o.valueOptions.sourceType].length>1&&!this.isOutputDsAndNoCodedValuesWhenUniqueOrMultiple(o.valueOptions.sourceType)&&(0,t.jsx)("div",{className:"ask-for-value-item ask-for-value-middle-item pl-6"},(0,t.jsx)(A,{onSelect:this.onInputTypeSelect,isForGroupFilter:!0,inputEditorType:o.valueOptions.inputEditor,list:this.displayTypeList[o.valueOptions.sourceType],fieldName:null===(s=this.fieldObj)||void 0===s?void 0:s.name,codedValues:this.codedValues,dataSource:p}))),this.state.supportAskForValue&&o.displayType===t.ClauseDisplayType.UseAskForValue&&(0,t.jsx)("div",{className:"ask-for-value-options"},(0,t.jsx)(d.Label,{className:(0,t.classNames)("ask-for-value-item p-1",{"col-md-3":!h})},(0,t.jsx)("div",{className:"ask-for-value-item-label"},this.i18nMessage("label")),(0,t.jsx)("div",{className:"d-flex"},(0,t.jsx)(d.TextInput,{size:"sm",type:"text",style:{width:"calc(100% - 55px)"},defaultValue:m,onChange:e=>{this.onLabelAccept(e.target.value)}}),(0,t.jsx)(d.AdvancedButtonGroup,{className:"label-display-buttons pl-1"},(0,t.jsx)(d.Button,{onClick:()=>{this.onAskForValueOptsChange({display:t.ClauseLabelDisplay.Block})},icon:!0,size:"sm",disabled:""===m,title:this.i18nMessage("inlineLabel"),"aria-label":this.i18nMessage("inlineLabel"),active:(null===(a=o.askForValueOptions)||void 0===a?void 0:a.display)===t.ClauseLabelDisplay.Block},(0,t.jsx)(Y,{autoFlip:!0})),(0,t.jsx)(d.Button,{onClick:()=>{this.onAskForValueOptsChange({display:t.ClauseLabelDisplay.Inline})},icon:!0,size:"sm",disabled:""===m,title:this.i18nMessage("separateLabel"),"aria-label":this.i18nMessage("separateLabel"),active:!(null===(i=o.askForValueOptions)||void 0===i?void 0:i.display)||(null===(l=o.askForValueOptions)||void 0===l?void 0:l.display)===t.ClauseLabelDisplay.Inline},(0,t.jsx)(Q,{autoFlip:!0}))))),(0,t.jsx)(d.Label,{className:(0,t.classNames)("ask-for-value-item ask-for-value-middle-item p-1",{"col-md-3":!h})},(0,t.jsx)("div",{className:"ask-for-value-item-label"},this.i18nMessage("hint")),(0,t.jsx)(d.TextInput,{type:"text",defaultValue:o.askForValueOptions?o.askForValueOptions.hint:"",size:"sm",onBlur:e=>{this.onAskForValueOptsChange({hint:e.target.value})}})),this.isCascadeSupported()&&(0,t.jsx)(d.Label,{className:(0,t.classNames)("ask-for-value-item p-1",{"col-md-5":!h})},(0,t.jsx)("div",{className:"ask-for-value-item-label",title:this.i18nMessage("cascade")},this.i18nMessage("cascade")),(0,t.jsx)(d.Select,{size:"sm",value:o.askForValueOptions?o.askForValueOptions.cascade:t.ClauseCascade.None,onChange:e=>{this.onAskForValueOptsChange({cascade:e.target.value})}},(0,t.jsx)("option",{key:0,value:t.ClauseCascade.None},this.i18nMessage("noneCascadeTip")),(0,t.jsx)("option",{key:1,value:t.ClauseCascade.Previous},this.i18nMessage("previousCascadeTip")),(0,t.jsx)("option",{key:2,value:t.ClauseCascade.All},this.i18nMessage("allCascadeTip"))))))))}}const te=(0,h.withStyles)((0,t.injectIntl)(ee),"SqlExpressionClause");var se=n(23662),ae=n.n(se),ie=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const le=e=>{const s=window.SVG,{className:a}=e,i=ie(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",a);return s?t.React.createElement(s,Object.assign({className:l,src:ae()},i)):t.React.createElement("svg",Object.assign({className:l},i))};class oe extends t.React.PureComponent{constructor(e){super(e),this.i18nMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:d.defaultMessages[e]}),this.addClause=e=>{e.__id=(0,t.uuidv1)(),this.onChange({parts:this.props.clauseSet.parts.concat(e)})},this.duplicateClauseSet=()=>{this.props.onChange(this.props.clauseSet,!0)},this.deleteClauseSet=()=>{this.props.onChange(null)},this.changeAndOR=e=>{this.onChange({logicalOperator:e})},this.onClauseChange=(e,s,a)=>{if(a)return void this.addClause(e.asMutable({deep:!0}));const i=this.props.clauseSet.parts,l={};null===e&&2===i.length&&(l.logicalOperator=t.ClauseLogic.And),2===i.length&&2===i.filter((e=>""===e.jimuFieldName)).length?(l.parts=(0,u.getClauseArrayByChange)(i,e,"clause_set_clause_0"),e.__id=e.__id+"-2",l.parts=(0,u.getClauseArrayByChange)(l.parts,e,"clause_set_clause_1")):l.parts=(0,u.getClauseArrayByChange)(i,e,s),0!==l.parts.length?this.onChange(l):this.props.onChange(null)},this.onChange=e=>{const t=Object.assign({},this.props.clauseSet,e);this.props.onChange(t)},this.LogicalOperator=null}render(){const{logicalOperator:e,parts:s}=this.props.clauseSet,a=s||(0,t.Immutable)([]);return(0,t.jsx)("div",{className:this.props.className?this.props.className:""},0===a.length?null:(0,t.jsx)("div",{className:(0,t.classNames)("sql-expression-set",{"surface-1":!window.jimuConfig.isBuilder})},(0,t.jsx)("div",{className:"btn-container"},a.length<2?null:(0,t.jsx)(d.AdvancedButtonGroup,{className:"and-or-container"},(0,t.jsx)(d.Button,{active:e===t.ClauseLogic.And,onClick:()=>{this.changeAndOR(t.ClauseLogic.And)},size:"sm"},this.i18nMessage("and")),(0,t.jsx)(d.Button,{active:e===t.ClauseLogic.Or,onClick:()=>{this.changeAndOR(t.ClauseLogic.Or)},className:"ml-0",size:"sm"},this.i18nMessage("or"))),(0,t.jsx)("div",{className:"add-button-container"},(0,t.jsx)(d.Button,{type:"tertiary",onClick:e=>{this.addClause((0,u.getDefaultSingleClause)())},className:"mr-1",icon:!0,size:"sm",title:this.i18nMessage("addClause"),"aria-label":this.i18nMessage("addClause")},(0,t.jsx)(le,null)),(0,t.jsx)(d.Button,{type:"tertiary",onClick:e=>{this.duplicateClauseSet()},className:"mr-1",icon:!0,size:"sm",title:this.i18nMessage("duplicate"),"aria-label":this.i18nMessage("duplicate")},(0,t.jsx)(V,null)),(0,t.jsx)(d.Button,{type:"tertiary",onClick:this.deleteClauseSet,icon:!0,size:"sm",title:this.i18nMessage("deleteClauseSet"),"aria-label":this.i18nMessage("deleteClauseSet")},(0,t.jsx)(H,null)))),a.map(((e,s)=>(0,t.jsx)(te,{key:e.__id,clause:e,isHosted:this.props.isHosted,mode:this.props.mode,sizeMode:this.props.sizeMode,dataSource:this.props.dataSource,onChange:(e,t)=>{this.onClauseChange(e,"clause_set_clause_"+s,t)}})))))}}const re=(0,h.withStyles)((0,t.injectIntl)(oe),"SqlExpressionClauseSet");class ne extends t.React.PureComponent{constructor(e){var s;super(e),this.getDataSource=()=>{const e=this.props.dataSource;return e.dataViewId===t.CONSTANTS.SELECTION_DATA_VIEW_ID?e.getMainDataSource():e},this.i18nMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:d.defaultMessages[e]}),this.addClauseByType=(e,s)=>{s||(s=e?(0,u.getDefaultSingleClause)():(0,u.getDefaultClauseSet)(),s=this.getPartsArray((0,t.Immutable)([s]),"add")[0]);const a=this.state.partsArray.concat(s);this.setState({partsArray:a});const i=a.length<2?{parts:a,logicalOperator:t.ClauseLogic.And}:{parts:a};this.onChange(i)},this.changeAndOR=e=>{this.onChange({logicalOperator:e})},this.onClauseChange=(e,s,a)=>{if(a){const s=this.getPartsArray((0,t.Immutable)([e]),"update")[0];return void this.addClauseByType(e.type===t.ClauseType.Single,s)}const i=(0,u.getClauseArrayByChange)(this.state.partsArray.asMutable({deep:!0}),e,s);this.setState({partsArray:(0,t.Immutable)(i)}),this.onChange({parts:i})},this.onChange=e=>{let s=this.props.expression||(0,t.Immutable)({logicalOperator:t.ClauseLogic.And,parts:[]});if(e.parts){const a=this.getPartsArray((0,t.Immutable)(e.parts),"remove");s=s.set("parts",a)}e.logicalOperator&&(s=s.set("logicalOperator",e.logicalOperator));const a=t.dataSourceUtils.getArcGISSQL(s,this.getDataSource());a.sql===s.sql&&a.displaySQL===s.displaySQL||(s=s.set("sql",a.sql).set("displaySQL",a.displaySQL)),this.props.onChange&&this.props.onChange(s)},this.getPartsArray=(e,s)=>{const a=e.map((e=>{var a;if((e=this._getNewClauseOrClauseSet(e,s).clause).type===t.ClauseType.Set){let t=!1;const i=null===(a=e.parts)||void 0===a?void 0:a.map((e=>{const a=this._getNewClauseOrClauseSet(e,s);return t=a.isUpdated||t,a.clause}));t&&(e=e.set("parts",i))}return e}));return a},this._getNewClauseOrClauseSet=(e,s)=>{let a=!0;return"remove"===s?e=t.Immutable.without(e,"__id"):"update"===s?e=t.Immutable.set(e,"__id",(0,t.uuidv1)()):e.__id?a=!1:e=t.Immutable.set(e,"__id",(0,t.uuidv1)()),{clause:e,isUpdated:a}},this.onResize=e=>{let t=u.SqlExpressionSizeMode.Medium;e<600?t=u.SqlExpressionSizeMode.Small:e>900&&(t=u.SqlExpressionSizeMode.Large),this.setState({sizeMode:t})},this.toggle=()=>{this.setState({isOpen:!this.state.isOpen})};const a=this.getDataSource();a&&(this.isHosted=t.dataSourceUtils.isAGOLHostedService(a.url)),this.state={sizeMode:u.SqlExpressionSizeMode.Large,isOpen:!1,partsArray:this.getPartsArray((null===(s=this.props.expression)||void 0===s?void 0:s.parts)||(0,t.Immutable)([]),"add")}}componentDidUpdate(e){const{forceUpdateExpression:s=!1,expression:a}=this.props;s&&e.expression!==a&&this.setState({partsArray:this.getPartsArray((null==a?void 0:a.parts)||(0,t.Immutable)([]),"add")})}render(){var e;const s=(null===(e=this.props.expression)||void 0===e?void 0:e.logicalOperator)||t.ClauseLogic.And,a=this.props.mode?this.props.mode:t.SqlExpressionMode.All,i=this.getDataSource();return(0,t.jsx)("div",{className:(0,t.classNames)(this.props.className,"use-scroll",{"small-mode":this.state.sizeMode===u.SqlExpressionSizeMode.Small,"medium-mode":this.state.sizeMode===u.SqlExpressionSizeMode.Medium,"large-mode":this.state.sizeMode===u.SqlExpressionSizeMode.Large})},(0,t.jsx)(d.QueryScopeContext.Provider,{value:{scope:this.props.queryScope||t.QueryScope.InConfigView,widgetId:this.props.widgetId}},(0,t.jsx)("div",{style:this.props.style,className:"sql-expression-builder"},i?(0,t.jsx)("div",{className:"sql-expression-container"},(0,t.jsx)("div",{className:"builder-btn-container",style:{justifyContent:this.state.partsArray.length<2?"flex-end":"space-between"}},this.state.partsArray.length<2?null:(0,t.jsx)(d.AdvancedButtonGroup,{className:"and-or-container"},(0,t.jsx)(d.Button,{active:s===t.ClauseLogic.And,onClick:()=>{this.changeAndOR(t.ClauseLogic.And)},size:this.state.sizeMode===u.SqlExpressionSizeMode.Small&&window.jimuConfig.isBuilder?"sm":"default",className:"ml-0"},this.i18nMessage("and")),(0,t.jsx)(d.Button,{onClick:()=>{this.changeAndOR(t.ClauseLogic.Or)},active:s===t.ClauseLogic.Or,size:this.state.sizeMode===u.SqlExpressionSizeMode.Small&&window.jimuConfig.isBuilder?"sm":"default",className:"ml-0"},this.i18nMessage("or"))),this.state.sizeMode===u.SqlExpressionSizeMode.Small?(0,t.jsx)(d.Dropdown,{activeIcon:!0},(0,t.jsx)(d.DropdownButton,{arrow:!1,type:"default","data-toggle":"dropdown",size:window.jimuConfig.isBuilder?"sm":"default","a11y-description":0===this.state.partsArray.length?this.i18nMessage("noClauseTip"):"",className:"jimu-outline-inside",onClick:this.toggle},(0,t.jsx)(le,{className:"text-default dropdown-icon"}),this.i18nMessage("add")),(0,t.jsx)(d.DropdownMenu,{alignment:"end",appendToBody:!1},(0,t.jsx)(d.DropdownItem,{"aria-label":this.i18nMessage("clause"),onClick:()=>{this.addClauseByType(!0)}},this.i18nMessage("clause")),(0,t.jsx)(d.DropdownItem,{"aria-label":this.i18nMessage("clauseSet"),onClick:()=>{this.addClauseByType()}},this.i18nMessage("clauseSet")))):(0,t.jsx)("div",{className:"add-button-container"},(0,t.jsx)(d.Button,{className:"pl-6 pr-6","aria-label":this.i18nMessage("addClause"),"aria-describedby":"no-clause-tip",onClick:()=>{this.addClauseByType(!0)}},(0,t.jsx)(le,{className:"mr-1"}),this.i18nMessage("addClause")),(0,t.jsx)(d.Button,{className:"ml-2 pl-6 pr-6","aria-label":this.i18nMessage("addClauseSet"),onClick:()=>{this.addClauseByType()}},(0,t.jsx)(le,{className:"mr-1"}),this.i18nMessage("addClauseSet")))),(0,t.jsx)("div",{className:"sql-expression-list"},(0,t.jsx)(t.ReactResizeDetector,{handleWidth:!0,handleHeight:!0,onResize:this.onResize}),0===this.state.partsArray.length?(0,t.jsx)("div",{className:"no-data-tip",id:"no-clause-tip"},this.i18nMessage("noClauseTip")):this.state.partsArray.map(((e,s)=>e.type===t.ClauseType.Single?(0,t.jsx)(te,{key:e.__id,clause:e,isHosted:this.isHosted,mode:a,sizeMode:this.state.sizeMode,dataSource:i,onChange:(e,t)=>{this.onClauseChange(e,"clause_"+s,t)}}):(0,t.jsx)(re,{key:e.__id,clauseSet:e,isHosted:this.isHosted,mode:a,sizeMode:this.state.sizeMode,dataSource:i,onChange:(e,t)=>{this.onClauseChange(e,"clause_set_"+s,t)}}))))):(0,t.jsx)("div",{className:"no-data-tip"},this.i18nMessage("noDataTip")))))}}const pe=(0,h.withStyles)((0,t.injectIntl)(ne),"SqlExpressionBuilder"),he=pe;var de=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};class ce extends t.React.PureComponent{constructor(e){super(e),this.externalDsStyle={maxWidth:"960px"},this.handleToggle=e=>{var t,s;if(void 0===e)return void(null===(s=null===(t=this.headerRef.parentElement)||void 0===t?void 0:t.nextSibling)||void 0===s||s.focus());this.setState({isOpen:!1});const{toggle:a,isOpen:i}=this.props;void 0!==i&&a&&a(e)},this.handleOkBtn=()=>{(0,u.isSqlExpressionValid)(this.state.expression)?this.handleToggle(!0):this.setState({isValid:!1})},this.handleCancelBtn=()=>{this.setState({isValid:!0,expression:this.props.expression}),this.handleToggle(!1)},this.onModalClose=()=>{this.props.expression!==this.state.expression&&this.props.onChange&&this.props.onChange(this.state.expression)},this.i18nMessage=e=>{const{intl:t}=this.props;return t?t.formatMessage({id:e,defaultMessage:d.defaultMessages[e]}):""},this.onChange=e=>{this.setState({isValid:!0,expression:e})},this.state={isValid:!0,isOpen:!!e.isOpen,expression:this.props.expression}}componentDidUpdate(e,t){this.props.expression!==e.expression&&this.setState({expression:this.props.expression})}render(){let{isOpen:e}=this.props;e=void 0===e?this.state.isOpen:e;const s=this.props.intl.formatMessage({id:"ok",defaultMessage:t.defaultMessages.ok}),a=this.props.intl.formatMessage({id:"cancel",defaultMessage:t.defaultMessages.cancel}),i=this.props,{expression:l}=i,o=de(i,["expression"]);return(0,t.jsx)(d.Modal,{onClosed:this.onModalClose,backdrop:"static",centered:!0,isOpen:e,toggle:()=>{this.handleToggle(void 0)},className:"sql-expression-builder-modal",contentClassName:"border-0 h-100",style:this.externalDsStyle,returnfocusafterclose:"true",size:"lg"},(0,t.jsx)(d.ModalHeader,{tag:"h4",toggle:this.handleCancelBtn},(0,t.jsx)("span",{ref:e=>{this.headerRef=e}},this.i18nMessage("sqlExpressionBuilder"))),(0,t.jsx)(d.ModalBody,null,(0,t.jsx)(he,Object.assign({},o,{expression:this.state.expression,noScrollForList:!0,onChange:this.onChange}))),(0,t.jsx)(d.ModalFooter,null,(0,t.jsx)("div",{className:"m-0 w-100 d-block"},!this.state.isValid&&(0,t.jsx)("div",{role:"alert","aria-live":"polite",style:{color:this.props.theme.sys.color.error.main,fontSize:this.props.theme.sys.spacing(4),marginTop:"-32px",marginBottom:"8px"}},(0,t.jsx)(C,{color:this.props.theme.sys.color.error.main,className:"mr-2"}),this.i18nMessage("sqlExprIncomplete")),(0,t.jsx)("div",{className:"d-flex"},(0,t.jsx)(d.Button,{"aria-label":s,type:"primary",onClick:this.handleOkBtn,className:"ml-auto mr-2",style:{minWidth:"64px"}},s),(0,t.jsx)(d.Button,{"aria-label":a,type:"secondary",onClick:this.handleCancelBtn,style:{minWidth:"64px"}},a)))))}}const ue=(0,h.withTheme)((0,t.injectIntl)(ce));var me=n(6219),ge=n.n(me),ve=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const fe=e=>{const s=window.SVG,{className:a}=e,i=ve(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",a);return s?t.React.createElement(s,Object.assign({className:l,src:ge()},i)):t.React.createElement("svg",Object.assign({className:l},i))};class xe extends t.React.PureComponent{constructor(e){super(e),this.i18nMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:d.defaultMessages[e]}),this.toggleCaseSensitive=()=>{const{clause:e}=this.props,t=Object.assign({},e,{caseSensitive:!e.caseSensitive});this.onChanged({clause:t})},this.onFieldChange=e=>{const{dataSources:s,logicalOperator:a}=this.props,i=this.showClauseLogic(e)?a:t.ClauseLogic.And,l={fieldList:e.map((e=>e.jimuName)),logicalOperator:i};s&&(l.mainField=e[0]),this.onChanged(l)},this.changeAndOR=e=>{this.onChanged({logicalOperator:e})},this.onDataSourceChanged=e=>{this.onChanged({dataSourceId:e.target.value})},this.onChanged=e=>{const{dataSource:t,selectedFieldList:s,logicalOperator:a}=this.props,i=Object.assign({},{dataSourceId:t.id,fieldList:s,logicalOperator:a},e);this.props.onChange(i)},this.showClauseLogic=e=>(null==e?void 0:e.length)>(this.props.dataSources?2:1),this.getDsLabels=e=>{const t={main:e.getLabel(),view:this.i18nMessage("default")};return e.isDataView&&(t.main=e.getMainDataSource().getLabel(),t.view="selection"===e.dataViewId?this.i18nMessage("selectionDataView"):e.getLabel()),t},this._isMounted=!1,this.isHosted=t.dataSourceUtils.isAGOLHostedService(this.props.dataSource.url),this.state={supportCaseSensitive:this.supportCaseSensitive()}}componentDidMount(){this._isMounted=!1}componentDidUpdate(e,t){if(e.mainField!==this.props.mainField){const e=this.supportCaseSensitive();this.setState({supportCaseSensitive:e})}}componentWillMount(){this._isMounted=!0}supportCaseSensitive(){const{clause:e}=this.props;return(0,u.isCaseSensitiveSupportedByOperatorAndSourceType)(e.operator,e.valueOptions.sourceType)}render(){const{className:e="",clause:s,isMainDsHosted:a,logicalOperator:i,dataSources:l,dataSource:o,fieldTypes:r,disabledFields:n,selectedFieldList:p}=this.props,h=!s.operator||!s.operator.includes("BLANK"),u=a||!h,m=!a&&h&&s.caseSensitive,g=!a&&s.caseSensitive&&this.isHosted,v=this.getDsLabels(o);return(0,t.jsx)("div",{className:(0,t.classNames)("field-item w-100 d-flex justify-content-between",e)},(0,t.jsx)("div",{className:"data-field-container d-flex"},(0,t.jsx)("div",{className:"data-source-selector p-0"},l?(0,t.jsx)(d.Select,{size:"sm",value:o.id,onChange:this.onDataSourceChanged,title:`${v.main} | ${v.view}`},l.map((e=>{const s=this.getDsLabels(e);return(0,t.jsx)(d.Option,{key:e.id,value:e.id,active:e.id===o.id,title:`${s.main} | ${s.view}`},(0,t.jsx)("div",{className:"text-truncate"},`${s.main} | ${s.view}`))}))):(0,t.jsx)("div",{className:"data-source-selector-inner",title:v.main+" | "+v.view},(0,t.jsx)("div",{className:"main-ds-label text-truncate"},v.main),(0,t.jsx)("div",{className:"view-ds-label"},v.view))),(0,t.jsx)("div",{className:"field-selector ml-4 d-flex"},(0,t.jsx)(c.FieldSelector,{dataSources:[o],types:r,onChange:this.onFieldChange,isMultiple:!l,disabledFields:n,selectedFields:(0,t.Immutable)(p),isDataSourceDropDownHidden:!0,useMultiDropdownBottomTools:!0,useDropdown:!0,dropdownProps:{size:window.jimuConfig.isBuilder?"sm":"default"}})),(0,t.jsx)("div",{className:"and-or-container ml-4"},this.showClauseLogic(this.props.selectedFieldList)&&(0,t.jsx)(d.AdvancedButtonGroup,{size:"sm"},(0,t.jsx)(d.Button,{active:i===t.ClauseLogic.And,onClick:()=>{this.changeAndOR(t.ClauseLogic.And)},size:"sm"},this.i18nMessage("and")),(0,t.jsx)(d.Button,{active:i===t.ClauseLogic.Or,onClick:()=>{this.changeAndOR(t.ClauseLogic.Or)},className:"ml-0",size:"sm"},this.i18nMessage("or"))))),(0,t.jsx)("div",{className:"case-sensitive-container"},this.state.supportCaseSensitive&&(0,t.jsx)(t.React.Fragment,null,l?(0,t.jsx)(d.Button,{className:"case-sensitive-btn",type:"tertiary",icon:!0,size:"sm",title:this.i18nMessage("caseSensitive"),"aria-label":this.i18nMessage("caseSensitive"),"aria-pressed":m,disabled:u,onClick:this.toggleCaseSensitive},(0,t.jsx)(d.Badge,{dot:!0,color:"primary",hideBadge:!m},(0,t.jsx)(U,null))):(0,t.jsx)(t.React.Fragment,null,g&&(0,t.jsx)(d.Tooltip,{title:this.i18nMessage("hostedDoesNotSupportCaseSensitiveQuery"),placement:"bottom"},(0,t.jsx)("div",null,(0,t.jsx)(d.Button,{className:"case-sensitive-btn",type:"tertiary",icon:!0,size:"sm","aria-pressed":m,disabled:!0},(0,t.jsx)(d.Badge,{badgeClassName:"border-0",badgeContent:(0,t.jsx)(fe,{color:"var(--warning-500)",size:"s"})},(0,t.jsx)(U,null)))))))))}}const ye=(0,t.injectIntl)(xe);class Me extends t.React.PureComponent{constructor(e){super(e),this.i18nMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:d.defaultMessages[e]}),this.getGroupExpression=e=>{const{expression:t}=this.props;return t||(0,u.getDefaultGroupExpression)(e)},this.getMainFieldObject=e=>{const s=this.dataSources[0].getSchema().fields,a=Object.keys(s).filter((t=>t===e.jimuFieldName))[0];return(0,t.Immutable)(s[a])},this.onMainFieldItemChange=e=>{let s;if(e.dataSourceId!==this.state.expression[0].dataSourceId){const t=[...this.dataSources],a=t.findIndex((t=>t.id===e.dataSourceId));t.unshift(t.splice(a,1)[0]),s=(0,u.getDefaultGroupExpression)(t),this.dataSources=t,this.mainField=this.getMainFieldObject(s[0].clause)}else e.mainField?(this.mainField=e.mainField,s=(0,u.getDefaultGroupExpression)(this.dataSources,this.mainField)):(s=(0,t.Immutable)([...this.state.expression]),s=s.setIn(["0","clause","caseSensitive"],e.clause.caseSensitive));this.setState({expression:s})},this.onFieldItemChange=(e,s)=>{0===s&&(e.clause=this.state.expression[0].clause);const a=[...this.state.expression];a.splice(s,1,e),this.setState({expression:(0,t.Immutable)(a)})},this.onClauseChange=e=>{const s=Object.assign({},this.state.expression[0].asMutable({deep:!0}),{clause:e}),a=[...this.state.expression];a.splice(0,1,s),this.setState({expression:(0,t.Immutable)(a)})},this.dataSources=[...this.props.dataSources];const s=this.getGroupExpression(this.dataSources);this.mainField=this.getMainFieldObject(s[0].clause),this.state={expression:s}}componentDidUpdate(e,t){t.expression!==this.state.expression&&this.props.onChange(this.state.expression)}render(){var e;const{className:s,style:a}=this.props,{expression:i}=this.state,l=t.dataSourceUtils.isAGOLHostedService(this.dataSources[0].url);return(0,t.jsx)("div",{className:s},(0,t.jsx)(d.QueryScopeContext.Provider,{value:{scope:t.QueryScope.InConfigView}},(0,t.jsx)("div",{style:a,className:"group-sql-expression-builder"},0===(null===(e=this.dataSources)||void 0===e?void 0:e.length)?(0,t.jsx)("div",{className:"no-data-tip"},this.i18nMessage("noDataTip")):(0,t.jsx)("div",{className:"content-container d-flex"},(0,t.jsx)("div",{className:"fields-container"},(0,t.jsx)(d.Label,{className:"fields-container-label mb-5"},this.i18nMessage("addFields")),(0,t.jsx)("div",{className:"main-field w-100"},(0,t.jsx)(d.Label,{className:"type-label"},this.i18nMessage("mainField")),(0,t.jsx)(ye,{dataSources:this.dataSources,dataSource:this.dataSources[0],isMainDsHosted:l,selectedFieldList:(0,t.Immutable)([i[0].clause.jimuFieldName]),logicalOperator:i[0].logicalOperator,clause:i[0].clause,mainField:this.mainField,onChange:this.onMainFieldItemChange})),(0,t.jsx)(d.Label,{className:"type-label"},this.i18nMessage("fieldList")),(0,t.jsx)("div",{className:"field-list w-100 overflow-auto"},null==i?void 0:i.map(((e,s)=>(0,t.jsx)(ye,{key:s,dataSource:this.dataSources[s],isMainDsHosted:l,selectedFieldList:e.fieldList,logicalOperator:e.logicalOperator,clause:i[0].clause,mainField:this.mainField,fieldTypes:(0,t.Immutable)([this.mainField.type]),disabledFields:0===s?(0,t.Immutable)([this.mainField.jimuName]):null,onChange:e=>{this.onFieldItemChange(e,s)}}))))),(0,t.jsx)("div",{className:"clause-container flex-grow-1 pl-6"},(0,t.jsx)(d.Label,{className:"clause-container-label"},this.i18nMessage("operatorAndValues")),(0,t.jsx)(te,{clause:i[0].clause,isHosted:l,mode:t.SqlExpressionMode.All,sizeMode:u.SqlExpressionSizeMode.Small,dataSource:this.dataSources[0],isForGroupFilter:!0,onChange:this.onClauseChange}))))))}}const be=(0,h.withStyles)((0,t.injectIntl)(Me),"GroupSqlExpressionBuilder");var Se=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};class we extends t.React.PureComponent{constructor(e){super(e),this.externalModalStyle={maxWidth:"960px",minHeight:"548px"},this.handleToggle=e=>{var t,s;if(void 0===e)return void(null===(s=null===(t=this.headerRef.parentElement)||void 0===t?void 0:t.nextSibling)||void 0===s||s.focus());this.setState({isOpen:!1});const{toggle:a,isOpen:i}=this.props;void 0!==i&&a&&a(e)},this.handleOkBtn=()=>{var e;(null===(e=this.state.expression)||void 0===e?void 0:e[0].clause.valueOptions.isValid)?this.handleToggle(!0):this.setState({isValid:!1})},this.handleCancelBtn=()=>{this.setState({isValid:!0,expression:this.props.expression}),this.handleToggle(!1)},this.onModalClose=()=>{this.props.expression!==this.state.expression&&this.props.onChange&&this.props.onChange(this.state.expression)},this.i18nMessage=e=>{const{intl:t}=this.props;return t?t.formatMessage({id:e,defaultMessage:d.defaultMessages[e]}):""},this.onChange=e=>{this.setState({isValid:!0,expression:e})},this.state={isValid:!0,isOpen:!!e.isOpen,expression:this.props.expression}}componentDidUpdate(e,t){this.props.expression!==e.expression&&this.setState({expression:this.props.expression})}render(){let{isOpen:e}=this.props;e=void 0===e?this.state.isOpen:e;const s=this.props.intl.formatMessage({id:"ok",defaultMessage:t.defaultMessages.ok}),a=this.props.intl.formatMessage({id:"cancel",defaultMessage:t.defaultMessages.cancel}),i=this.props,{expression:l}=i,o=Se(i,["expression"]);return(0,t.jsx)(d.Modal,{size:"lg",contentClassName:"border-0 h-100",style:this.externalModalStyle,backdrop:"static",centered:!0,returnfocusafterclose:"true",onClosed:this.onModalClose,isOpen:e,toggle:()=>{this.handleToggle(void 0)}},(0,t.jsx)(d.ModalHeader,{tag:"h4",toggle:this.handleCancelBtn},(0,t.jsx)("span",{ref:e=>{this.headerRef=e}},this.i18nMessage("sqlExpressionBuilderForGroup"))),(0,t.jsx)(d.ModalBody,null,(0,t.jsx)(be,Object.assign({},o,{expression:this.state.expression,onChange:this.onChange}))),(0,t.jsx)(d.ModalFooter,{className:"pt-0"},(0,t.jsx)("div",{className:"m-0 w-100 d-block",css:t.css`padding: 14px;`},!this.state.isValid&&(0,t.jsx)("div",{role:"alert","aria-live":"polite",style:{color:this.props.theme.sys.color.error.main,fontSize:this.props.theme.sys.spacing(4),marginTop:"-32px",marginBottom:"8px"}},(0,t.jsx)(C,{color:this.props.theme.sys.color.error.main,className:"mr-2"}),this.i18nMessage("sqlExprIncomplete")),(0,t.jsx)("div",{className:"d-flex"},(0,t.jsx)(d.Button,{"aria-label":s,type:"primary",onClick:this.handleOkBtn,className:"ml-auto mr-2",style:{minWidth:"76px"}},s),(0,t.jsx)(d.Button,{"aria-label":a,type:"secondary",onClick:this.handleCancelBtn,style:{minWidth:"76px"}},a)))))}}const Oe=(0,h.withTheme)((0,t.injectIntl)(we));var Ce=n(98640),je=n(14962),ze=n.n(je),Ae=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const Ne=e=>{const s=window.SVG,{className:a}=e,i=Ae(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",a);return s?t.React.createElement(s,Object.assign({className:l,src:ze()},i)):t.React.createElement("svg",Object.assign({className:l},i))};var Te=n(54578),ke=n.n(Te),Be=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]])}return s};const Le=e=>{const s=window.SVG,{className:a}=e,i=Be(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",a);return s?t.React.createElement(s,Object.assign({className:l,src:ke()},i)):t.React.createElement("svg",Object.assign({className:l},i))};class Fe extends t.React.PureComponent{constructor(e){super(e),this.onOptionChange=(e,t,s)=>{const a=this.deepClone(this.props.value);a[e][t]=s,this.props.onSortButtonClick?this.props.onSortButtonClick(a,e):this.props.onChange(a,e)},this.onSelectChange=(e,t)=>{const s=e[0];if(!s)return;const a=this.deepClone(this.props.value),i=s.name;a[t].jimuFieldName=i,this.props.onSelect?this.props.onSelect(a,t):this.props.onChange(a,t)},this.addOption=()=>{const e=Array.isArray(this.props.value),t=this.deepClone(this.state.option),s=e?this.deepClone(this.props.value):[];s.push(t),this.props.onAddOption?this.props.onAddOption(s):this.props.onChange(s)},this.delecteOption=e=>{const t=this.deepClone(this.props.value);t.splice(e,1),this.props.onDelete?this.props.onDelete(t):this.props.onChange(t)},this.deepClone=e=>{const t=Array.isArray(e)?[]:{};for(const s in e){const a=("object"==typeof e[s]||"function"==typeof e[s])&&null!==e[s];t[s]=a?this.deepClone(e[s]):e[s]}return t},this.createOptionElement=(e,s,a)=>{const i=this.props.value[a].jimuFieldName?(0,t.Immutable)([this.props.value[a].jimuFieldName]):(0,t.Immutable)([]),l=e=>{"Enter"===e.key&&this.onOptionChange(a,"order",s.order===t.OrderRule.Asc?t.OrderRule.Desc:t.OrderRule.Asc)},o=e=>{"Enter"===e.key&&this.delecteOption(a)};return(0,t.jsx)("div",{className:"multi-sort-select-con"},this.props.useDataSource&&(0,t.jsx)("div",{className:"sort-field-selector"},(0,t.jsx)(c.FieldSelector,{useDataSources:e,onChange:(e,t)=>{this.onSelectChange(e,a)},selectedFields:i,isDataSourceDropDownHidden:!0,useDropdown:!0,dropdownProps:{useKeyUpEvent:!0}})),(0,t.jsx)("div",{className:"delete-sort-con"},(0,t.jsx)(d.Button,{size:"sm",icon:!0,type:"tertiary",className:"delete-button padding-0",title:s.order===t.OrderRule.Asc?this.nls("ascending"):this.nls("descending"),onKeyUp:e=>{l(e)},onClick:()=>{this.onOptionChange(a,"order",s.order===t.OrderRule.Asc?t.OrderRule.Desc:t.OrderRule.Asc)}},s.order===t.OrderRule.Asc&&(0,t.jsx)(Ne,{size:"s",className:"sort-arrow-down-icon ml-0"}),s.order===t.OrderRule.Desc&&(0,t.jsx)(Le,{size:"s",className:"sort-arrow-down-icon ml-0"}))),(0,t.jsx)(d.Button,{size:"sm",icon:!0,type:"tertiary",className:"delete-button padding-0",title:this.nls("deleteOption"),onKeyUp:e=>{o(e)},onClick:()=>{this.delecteOption(a)}},(0,t.jsx)(H,{size:"s",className:"sort-arrow-down-icon ml-0"})))},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:d.defaultMessages[e]}):e,this.onDataSourceCreated=e=>{},this.state={option:{jimuFieldName:"",order:t.OrderRule.Asc}}}render(){const{value:e}=this.props,s=this.props.intl.formatMessage({id:"invalidExpression",defaultMessage:d.defaultMessages.invalidExpression});return(0,t.jsx)("div",{className:(0,t.classNames)("multi-sort",{[this.props.className]:!!this.props.className})},(0,t.jsx)("div",{className:"add-option"},(0,t.jsx)(d.Button,{className:"add-option-button jimu-outline-inside",onClick:this.addOption,title:this.props.intl.formatMessage({id:"addSortField",defaultMessage:d.defaultMessages.addSortField})},(0,t.jsx)(le,{size:"s",className:"sort-arrow-down-icon"}),this.props.intl.formatMessage({id:"addSortField",defaultMessage:d.defaultMessages.addSortField}))),(0,t.jsx)(t.DataSourceComponent,{useDataSource:this.props.useDataSource,onDataSourceCreated:this.onDataSourceCreated},(a=>Array.isArray(this.props.value)?(0,t.jsx)(Ce.List,{size:"sm",className:"setting-ui-unit-list",itemsJson:e.asMutable({deep:!0}).map(((e,t)=>({itemStateDetailContent:e,itemKey:`${t}`}))),dndEnabled:!0,onDidDrop:(e,t)=>{const{itemJsons:[,s]}=t.props;this.props.onChange(s.map((e=>e.itemStateDetailContent)))},overrideItemBlockInfo:({itemBlockInfo:e})=>({name:Ce.TreeItemActionType.RenderOverrideItem,children:[{name:Ce.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:Ce.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:Ce.TreeItemActionType.RenderOverrideItemBody,children:[{name:Ce.TreeItemActionType.RenderOverrideItemDragHandle},{name:Ce.TreeItemActionType.RenderOverrideItemMainLine}]}]}]}]}),renderOverrideItemMainLine:(e,s)=>{var a;const{itemJsons:i}=s.props,l=i[0],o=i[1];return this.createOptionElement((0,t.Immutable)([null===(a=this.props.useDataSource)||void 0===a?void 0:a.asMutable({deep:!0})]),l.itemStateDetailContent,o.indexOf(l))}}):s)),Array.isArray(e)&&0===e.length&&(0,t.jsx)("div",{className:"no-sort-remind"},(0,t.jsx)("div",null,this.props.intl.formatMessage({id:"noSortRemindText",defaultMessage:d.defaultMessages.noSortRemindText})),(0,t.jsx)("div",null,this.props.intl.formatMessage({id:"pleaseAddOne",defaultMessage:d.defaultMessages.pleaseAddOne}))))}}const De=(0,h.withStyles)((0,t.injectIntl)(Fe),"Sort");(0,h.registerStyles)("jimu-ui/advanced/sql-expression-builder/",e)})(),p})())}}}));