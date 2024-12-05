System.register(["jimu-core","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/resource-selector","jimu-ui/advanced/setting-components","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker"],(function(e,t){var i={},n={},a={},l={},s={},o={},r={},c={};return{setters:[function(e){i.AnimationDirection=e.AnimationDirection,i.AnimationEffectType=e.AnimationEffectType,i.AnimationPlayMode=e.AnimationPlayMode,i.AnimationStartMode=e.AnimationStartMode,i.AnimationTriggerType=e.AnimationTriggerType,i.AnimationType=e.AnimationType,i.FixedPosition=e.FixedPosition,i.HoverType=e.HoverType,i.Immutable=e.Immutable,i.LayoutItemType=e.LayoutItemType,i.ParentAnimationMode=e.ParentAnimationMode,i.React=e.React,i.ReactRedux=e.ReactRedux,i.TransitionDirection=e.TransitionDirection,i.TransitionType=e.TransitionType,i.classNames=e.classNames,i.css=e.css,i.defaultMessages=e.defaultMessages,i.getAppStore=e.getAppStore,i.hooks=e.hooks,i.injectIntl=e.injectIntl,i.jsx=e.jsx,i.lodash=e.lodash,i.polished=e.polished,i.utils=e.utils},function(e){n.LayoutItemSizeModes=e.LayoutItemSizeModes,n.utils=e.utils},function(e){a.getTheme2=e.getTheme2,a.registerStyles=e.registerStyles,a.styled=e.styled,a.useTheme=e.useTheme,a.useTheme2=e.useTheme2,a.withStyles=e.withStyles,a.withTheme=e.withTheme},function(e){l.AdvancedButtonGroup=e.AdvancedButtonGroup,l.BorderSides=e.BorderSides,l.Button=e.Button,l.ButtonGroup=e.ButtonGroup,l.Collapse=e.Collapse,l.DistanceUnits=e.DistanceUnits,l.Dropdown=e.Dropdown,l.DropdownButton=e.DropdownButton,l.DropdownItem=e.DropdownItem,l.DropdownMenu=e.DropdownMenu,l.EsriSimpleLineSymbolStyle=e.EsriSimpleLineSymbolStyle,l.FillType=e.FillType,l.Icon=e.Icon,l.InputGroup=e.InputGroup,l.NormalLineType=e.NormalLineType,l.NumericInput=e.NumericInput,l.Option=e.Option,l.Select=e.Select,l.Sides=e.Sides,l.Tab=e.Tab,l.Tabs=e.Tabs,l.TextAlignValue=e.TextAlignValue,l.Tooltip=e.Tooltip,l.defaultMessages=e.defaultMessages,l.styleUtils=e.styleUtils,l.utils=e.utils},function(e){s.IconPicker=e.IconPicker,s.ImageSelector=e.ImageSelector},function(e){o.CollapsableResetPanel=e.CollapsableResetPanel,o.SettingRow=e.SettingRow,o.SettingSection=e.SettingSection,o.SidePopper=e.SidePopper},function(e){r.InputUnit=e.InputUnit,r.SizeEditor=e.SizeEditor},function(e){c.ThemeColorPicker=e.ThemeColorPicker}],execute:function(){e((()=>{var e={97213:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 2.443 5.851 14 0 8.115l1.45-1.538 4.31 4.334L14.463 1z" clip-rule="evenodd"></path></svg>'},56499:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707z"></path></svg>'},42909:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#C5C5C5" fill-rule="evenodd" d="M13 3h-2v2h2zm-3-1v4h4V2zm-7 9h2v2H3zm-1 3v-4h4v4zm9-3h2v2h-2zm-1 3v-4h4v4zM3 3h2v2H3zM2 6V2h4v4z" clip-rule="evenodd"></path></svg>'},27961:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M10.373 5.57 8 .5 5.625 5.57 0 6.23l4.158 3.792L3.056 15.5 8 12.773l4.944 2.727-1.103-5.478L16 6.229zM8 2.857l1.705 3.641 4.002.469-2.957 2.697.788 3.918L8 11.631l-3.539 1.951.79-3.918-2.959-2.697 4.002-.469z" clip-rule="evenodd"></path></svg>'},12971:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 1c.291 0 .527.231.527.516v11.508L11.6 9.527a.535.535 0 0 1 .746 0 .51.51 0 0 1 0 .73L7.5 15l-4.846-4.743a.51.51 0 0 1 0-.73.535.535 0 0 1 .746 0l3.573 3.497V1.516c0-.285.236-.516.527-.516"></path></svg>'},96300:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M15 7.5a.52.52 0 0 1-.516.527H2.976L6.473 11.6a.535.535 0 0 1 0 .746.51.51 0 0 1-.73 0L1 7.5l4.743-4.846a.51.51 0 0 1 .73 0 .535.535 0 0 1 0 .746L2.976 6.973h11.508c.285 0 .516.236.516.527"></path></svg>'},45075:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1 7.5c0-.291.231-.527.516-.527h11.508L9.527 3.4a.535.535 0 0 1 0-.746.51.51 0 0 1 .73 0L15 7.5l-4.743 4.846a.51.51 0 0 1-.73 0 .535.535 0 0 1 0-.746l3.497-3.573H1.516A.52.52 0 0 1 1 7.5"></path></svg>'},32004:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 15a.52.52 0 0 1-.527-.516V2.976L3.4 6.473a.535.535 0 0 1-.746 0 .51.51 0 0 1 0-.73L7.5 1l4.846 4.743a.51.51 0 0 1 0 .73.535.535 0 0 1-.746 0L8.027 2.976v11.508A.52.52 0 0 1 7.5 15"></path></svg>'},30655:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .54.54 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.54.54 0 0 1 0-.738" clip-rule="evenodd"></path></svg>'},55066:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4 10.293.646 13.647l.708.707 13-13-.707-.708-3.045 3.045A3.25 3.25 0 0 0 7.75 2H5a1 1 0 0 0-1 1zm1-1 .793-.793H5zM6.793 7.5l3.058-3.058A2.25 2.25 0 0 0 7.75 3H5v4.5zM5 14a1 1 0 0 1-.958-.713L5 12.328V13h4.75a2.25 2.25 0 0 0 0-4.5h-.922l1.86-1.86a3.3 3.3 0 0 1-.609.876A3.25 3.25 0 0 1 9.75 14z" clip-rule="evenodd"></path></svg>'},40403:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4 3a1 1 0 0 1 1-1h2.75a3.25 3.25 0 0 1 2.33 5.516A3.25 3.25 0 0 1 9.75 14H5a1 1 0 0 1-1-1V3m1 4.5h2.75a2.25 2.25 0 0 0 0-4.5H5zm0 1V13h4.75a2.25 2.25 0 0 0 0-4.5H5" clip-rule="evenodd"></path></svg>'},35329:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.802 6.491.646 13.647l.708.707 13-13-.707-.708L12 2.293V2H6v1h2.5zm1.25-1.25L11.293 3H9.5z" clip-rule="evenodd"></path><path fill="#000" d="M4 14v-.672L4.328 13H6.5l.543-2.714 1.25-1.25L7.5 13H10v1z"></path></svg>'},58878:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M6 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-2l-2 10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2l2-10h-2a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></path></svg>'},8547:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 0A3.5 3.5 0 0 1 11 3.5V6h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V3.5A3.5 3.5 0 0 1 7.5 0M5 6h5V3.5a2.5 2.5 0 0 0-2.336-2.495L7.5 1a2.5 2.5 0 0 0-2.495 2.336L5 3.5zm6 1H3v8h9V7zm-3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},97408:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="m2 1 12 7-12 7zm9.983 6.999L3 2.723v10.553z" clip-rule="evenodd"></path></svg>'},27275:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M6.293 8 .646 13.647l.708.707 13-13-.707-.708L11 3.293V2.02a.02.02 0 0 0-.02-.02H8a3 3 0 0 0-2.829 4l1.097.001A2 2 0 0 1 8 3h2v.5a.5.5 0 0 0 .325.468L7.293 7H3.5a.5.5 0 0 0 0 1zM12.5 8H9.328l1-1H12.5a.5.5 0 0 1 0 1M5 12.5q.002-.122.053-.225l.222-.222A.5.5 0 0 1 6 12.5v.499L9 13c1.105 0 2-1.12 2-2.5a2.96 2.96 0 0 0-.311-1.34L10.599 9h1.112c.185.456.289.964.289 1.501 0 1.866-1.252 3.392-2.83 3.495L9 14H6a1 1 0 0 1-1-1z" clip-rule="evenodd"></path></svg>'},41048:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11 2.02a.02.02 0 0 0-.02-.02H8a3 3 0 0 0-2.829 4l1.097.001A2 2 0 0 1 8 3h2v.5a.5.5 0 0 0 1 0zM12.5 7a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm-1.9 1.999h1.111c.185.456.289.964.289 1.501 0 1.866-1.252 3.392-2.83 3.495L9 14H6a1 1 0 0 1-1-1v-.5a.5.5 0 0 1 1 0v.499L9 13c1.105 0 2-1.12 2-2.5a2.96 2.96 0 0 0-.311-1.34z" clip-rule="evenodd"></path></svg>'},90003:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M5.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM2 6.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.5 5.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},81880:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm0 6a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zM2 6.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.5 5.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},93659:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.5 3h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1m-7 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1m6 3h-6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1m5 3h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1" clip-rule="evenodd"></path></svg>'},47038:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M6.5 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm1 6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM4 6.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M2.5 12a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},20057:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="m4.84 10.453-3.194 3.194.708.707 13-13-.707-.708L12 3.293V2.5a.5.5 0 0 0-1 0v1.793L5.555 9.738A3 3 0 0 1 5 8V2.5a.5.5 0 0 0-1 0V8c0 .924.314 1.776.84 2.453M8 12c-.498 0-.975-.091-1.414-.257l.804-.805q.296.061.61.062a3 3 0 0 0 3-3v-.672l1-1V8a4 4 0 0 1-4 4m-3.5 2a.5.5 0 0 1-.149-.023L5.328 13H11.5a.5.5 0 0 1 0 1z" clip-rule="evenodd"></path></svg>'},51366:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M5 2.5a.5.5 0 0 0-1 0V8a4 4 0 0 0 8 0V2.5a.5.5 0 0 0-1 0V8a3 3 0 0 1-6 0zm7 11a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5" clip-rule="evenodd"></path></svg>'},51334:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 3.5a3.5 3.5 0 1 0-7 0V6H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2V3.5l.005-.164A2.5 2.5 0 0 1 12.5 1l.164.005A2.5 2.5 0 0 1 15 3.5a.5.5 0 0 0 1 0M9 7H3v8h9V7H9m-1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},778:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8.829 2.535a.909.909 0 0 0-1.657 0L2.291 13.356a.456.456 0 0 0 .831.377L4.818 10h6.365l1.696 3.733a.456.456 0 0 0 .831-.377zM5.272 9 8 3l2.729 6z" clip-rule="evenodd"></path></svg>'},45508:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},37821:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 1"><path fill="#fff" fill-rule="evenodd" d="M0 0h5v1H0zm10 0h5v1h-5zm15 0h-5v1h5zm5 0h5v1h-5zm16 0h-6v1h6zM7 0h1v1H7zm11 0h-1v1h1zm9 0h1v1h-1zm11 0h-1v1h1z" clip-rule="evenodd"></path></svg>'},33839:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 1"><path fill="#fff" fill-rule="evenodd" d="M5 0H0v1h5zm13 0h-5v1h5zm8 0h5v1h-5zm20 0h-7v1h7zM7 0h1v1H7zm14 0h-1v1h1zm12 0h1v1h-1zM11 0h-1v1h1zm12 0h1v1h-1zm14 0h-1v1h1z" clip-rule="evenodd"></path></svg>'},96002:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 1"><path fill="#fff" d="M0 1h3V0H0zM6 1h3V0H6zM15 1h-3V0h3zM18 1h3V0h-3zM27 1h-3V0h3zM30 1h3V0h-3zM39 1h-3V0h3zM42 1h4V0h-4z"></path></svg>'},23616:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 1"><path fill="#fff" fill-rule="evenodd" d="M0 1h1V0H0zm6 0h1V0H6zm7 0h-1V0h1zm5 0h1V0h-1zm7 0h-1V0h1zm5 0h1V0h-1zm7 0h-1V0h1zM3 1h1V0H3zm7 0H9V0h1zm5 0h1V0h-1zm7 0h-1V0h1zm5 0h1V0h-1zm7 0h-1V0h1zm5 0h1V0h-1zm4 0h-1V0h1zm2 0h1V0h-1z" clip-rule="evenodd"></path></svg>'},10130:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 4"><path fill="#fff" d="M0 1h46V0H0zM0 4h46V3H0z"></path></svg>'},36008:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 1"><path fill="#fff" fill-rule="evenodd" d="M46 1H0V0h46z" clip-rule="evenodd"></path></svg>'},83614:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#000" fill-rule="nonzero" d="M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8"></path></svg>'},62053:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#000" fill-rule="nonzero" d="m10 0 10 10-10 10L0 10z"></path></svg>'},12907:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6"><circle cx="1104" cy="1049" r="3" fill="#000" fill-rule="nonzero" transform="translate(-1101 -1046)"></circle></svg>'},78290:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#000" fill-rule="nonzero" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12"></path></svg>'},5887:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 4"><rect width="8" height="4" x="1103" y="1123" fill="#000" fill-rule="nonzero" rx="2" transform="translate(-1103 -1123)"></rect></svg>'},78296:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYgNDhMMzEuODkzMiA1NS40MTY0TDM0LjU4NzMgMzkuNzA4MkwyMy4xNzQ2IDI4LjU4MzZMMzguOTQ2NiAyNi4yOTE4TDQ2IDEyTDUzLjA1MzQgMjYuMjkxOEw2OC44MjU0IDI4LjU4MzZMNTcuNDEyNyAzOS43MDgyTDYwLjEwNjggNTUuNDE2NEw0NiA0OFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzI5OTApIi8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xXzI5OTAiIHgxPSI2Ny43MjQ5IiB5MT0iMTcuMzMxMyIgeDI9IjM3Ljc5NTEiIHkyPSIxNy4zMzEzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyODI4MjgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},27833:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYgNDhMMzEuODkzMiA1NS40MTY0TDM0LjU4NzMgMzkuNzA4MkwyMy4xNzQ2IDI4LjU4MzZMMzguOTQ2NiAyNi4yOTE4TDQ2IDEyTDUzLjA1MzQgMjYuMjkxOEw2OC44MjU0IDI4LjU4MzZMNTcuNDEyNyAzOS43MDgyTDYwLjEwNjggNTUuNDE2NEw0NiA0OFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzMwMTYpIi8+DQo8cmVjdCB4PSI1MyIgeT0iNTQiIHdpZHRoPSI4IiBoZWlnaHQ9IjIiIHRyYW5zZm9ybT0icm90YXRlKDkwIDUzIDU0KSIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzFfMzAxNikiLz4NCjxyZWN0IHg9IjQxIiB5PSI1NCIgd2lkdGg9IjgiIGhlaWdodD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNDEgNTQpIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfMV8zMDE2KSIvPg0KPHJlY3QgeD0iNDciIHk9IjUxLjUiIHdpZHRoPSIxMSIgaGVpZ2h0PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA0NyA1MS41KSIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyXzFfMzAxNikiLz4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfMzAxNiIgeDE9IjU4LjA3NjMiIHkxPSI1Ni4xODk4IiB4Mj0iNTguMDc2MyIgeTI9IjMyLjAzNzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI4MjgyOCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xXzMwMTYiIHgxPSI1MyIgeTE9IjU2IiB4Mj0iNjEiIHkyPSI1NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfMV8zMDE2IiB4MT0iNDEiIHkxPSI1NiIgeDI9IjQ5IiB5Mj0iNTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZBNkE2QSIgc3RvcC1vcGFjaXR5PSIwLjAxIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzFfMzAxNiIgeDE9IjQ3IiB5MT0iNTMuNSIgeDI9IjU4IiB5Mj0iNTMuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},17143:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcgNDhMMzIuODkzMiA1NS40MTY0TDM1LjU4NzMgMzkuNzA4MkwyNC4xNzQ2IDI4LjU4MzZMMzkuOTQ2NiAyNi4yOTE4TDQ3IDEyTDU0LjA1MzQgMjYuMjkxOEw2OS44MjU0IDI4LjU4MzZMNTguNDEyNyAzOS43MDgyTDYxLjEwNjggNTUuNDE2NEw0NyA0OFoiIGZpbGw9IiM2QTZBNkEiLz4NCjxyZWN0IHg9IjIxIiB5PSIxNiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzMwMDYpIi8+DQo8cmVjdCB4PSIyMSIgeT0iMjIiIHdpZHRoPSIxNyIgaGVpZ2h0PSIyIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfMV8zMDA2KSIvPg0KPHJlY3QgeD0iMjEiIHk9IjM2IiB3aWR0aD0iOSIgaGVpZ2h0PSIyIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfMV8zMDA2KSIvPg0KPHJlY3QgeD0iMjEiIHk9IjQ4IiB3aWR0aD0iOSIgaGVpZ2h0PSIyIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfMV8zMDA2KSIvPg0KPHJlY3QgeD0iMjEiIHk9IjQyIiB3aWR0aD0iMTIiIGhlaWdodD0iMiIgZmlsbD0idXJsKCNwYWludDRfbGluZWFyXzFfMzAwNikiLz4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfMzAwNiIgeDE9IjIxIiB5MT0iMTgiIHgyPSI0MSIgeTI9IjE4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZBNkE2QSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xXzMwMDYiIHgxPSIyMSIgeTE9IjI0IiB4Mj0iMzgiIHkyPSIyNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIgc3RvcC1vcGFjaXR5PSIwLjAxIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfMV8zMDA2IiB4MT0iMjEiIHkxPSIzOCIgeDI9IjMwIiB5Mj0iMzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiM2QTZBNkEiIHN0b3Atb3BhY2l0eT0iMC4wMSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzFfMzAwNiIgeDE9IjIxIiB5MT0iNTAiIHgyPSIzMCIgeTI9IjUwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZBNkE2QSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ0X2xpbmVhcl8xXzMwMDYiIHgxPSIyMSIgeTE9IjQ0IiB4Mj0iMzMiIHkyPSI0NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIgc3RvcC1vcGFjaXR5PSIwLjAxIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},69572:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl9ub25lPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0MS4wMDAwMDAsIC0xOTIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE0MC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzZBNkE2QSIgcG9pbnRzPSI0NiA0OCAzMS44OTMxNTM5IDU1LjQxNjQwNzkgMzQuNTg3MzIxOCAzOS43MDgyMDM5IDIzLjE3NDY0MzYgMjguNTgzNTkyMSAzOC45NDY1NzcgMjYuMjkxNzk2MSA0NiAxMiA1My4wNTM0MjMgMjYuMjkxNzk2MSA2OC44MjUzNTY0IDI4LjU4MzU5MjEgNTcuNDEyNjc4MiAzOS43MDgyMDM5IDYwLjEwNjg0NjEgNTUuNDE2NDA3OSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},26346:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl9zcGluPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwNjEuMDAwMDAwLCAtNTUyLjAwMDAwMCkiPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ0LjAwMDAwMCwgNTAwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsLXJ1bGU9Im5vbnplcm8iIHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDUuNjY2NjY2NywxMyBMNTIuNzIwMDg5NywyNy4yOTE3OTYxIEw2OC40OTIwMjMxLDI5LjU4MzU5MjEgTDU3LjA3OTM0NDksNDAuNzA4MjAzOSBMNTkuNzczNTEyNyw1Ni40MTY0MDc5IEw0NS42NjY2NjY3LDQ5IEwzMS41NTk4MjA2LDU2LjQxNjQwNzkgTDM0LjI1Mzk4ODUsNDAuNzA4MjAzOSBMMjIuODQxMzEwMywyOS41ODM1OTIxIEwzOC42MTMyNDM2LDI3LjI5MTc5NjEgTDQ1LjY2NjY2NjcsMTMgWiBNNzYuNjY2NjY2NywyMy42NjY2NjY3IEw3Ni42NjY2NjY3LDI1IEw3My4wODkzMzMzLDI1IEM3My41MjUzMzMzLDI1LjMzMzMzMzMgNzQuMDg0LDI1Ljc2NjY2NjcgNzQuMzkxMzMzMywyNi4wNDY2NjY3IEM3NS44MjgsMjcuMzU2NjY2NyA3Ni42NjY2NjY3LDI4Ljg0MTMzMzMgNzYuNjY2NjY2NywzMC42NjY2NjY3IEM3Ni42NjY2NjY3LDM0LjkyNjY2NjcgNzMuNzI1MzMzMywzNyA3MCwzNyBMNzAsMzUuNjY2NjY2NyBDNzMuMDY4NjY2NywzNS42NjY2NjY3IDc1LjMzMzMzMzMsMzQuMDcgNzUuMzMzMzMzMywzMC42NjY2NjY3IEM3NS4zMzMzMzMzLDI5LjI3MjY2NjcgNzQuNjc4LDI4LjExMiA3My40OTMzMzMzLDI3LjAzMzMzMzMgQzczLjE4NCwyNi43NTA2NjY3IDcyLjQ3ODY2NjcsMjYuMjEzMzMzMyA3MiwyNS44NDUzMzMzIEw3MiwyOS42NjY2NjY3IEw3MC42NjY2NjY3LDI5LjY2NjY2NjcgTDcwLjY2NjY2NjcsMjMuNjY2NjY2NyBMNzYuNjY2NjY2NywyMy42NjY2NjY3IFogTTE5LDIzLjY2NjY2NjcgTDE5LDI1IEMxNS45MzEzMzMzLDI1IDEzLjY2NjY2NjcsMjYuNTk2NjY2NyAxMy42NjY2NjY3LDMwIEMxMy42NjY2NjY3LDMxLjM5NCAxNC4zMjIsMzIuNTU0NjY2NyAxNS41MDY2NjY3LDMzLjYzMzMzMzMgQzE1LjgxNiwzMy45MTYgMTYuNTIxMzMzMywzNC40NTMzMzMzIDE3LDM0LjgyMTMzMzMgTDE3LDMxIEwxOC4zMzMzMzMzLDMxIEwxOC4zMzMzMzMzLDM3IEwxMi4zMzMzMzMzLDM3IEwxMi4zMzMzMzMzLDM1LjY2NjY2NjcgTDE1LjkxMDY2NjcsMzUuNjY2NjY2NyBDMTUuNDc0NjY2NywzNS4zMzMzMzMzIDE0LjkxNiwzNC45IDE0LjYwODY2NjcsMzQuNjIgQzEzLjE3MiwzMy4zMSAxMi4zMzMzMzMzLDMxLjgyNTMzMzMgMTIuMzMzMzMzMywzMCBDMTIuMzMzMzMzMywyNS43NCAxNS4yNzQ2NjY3LDIzLjY2NjY2NjcgMTksMjMuNjY2NjY2NyBaIE00MC4zMzMzMzMzLDQgTDQwLjMzMzMzMzMsNy41NzczMzMzMyBDNDAuNjY2NjY2Nyw3LjE0MTMzMzMzIDQxLjEsNi41ODI2NjY2NiA0MS4zOCw2LjI3NTMzMzMzIEM0Mi42OSw0LjgzODY2NjY3IDQ0LjE3NDY2NjcsNCA0Niw0IEM1MC4yNiw0IDUyLjMzMzMzMzMsNi45NDEzMzMzMyA1Mi4zMzMzMzMzLDEwLjY2NjY2NjcgTDUxLDEwLjY2NjY2NjcgQzUxLDcuNTk4IDQ5LjQwMzMzMzMsNS4zMzMzMzMzNCA0Niw1LjMzMzMzMzMzIEM0NC42MDYsNS4zMzMzMzMzMyA0My40NDUzMzMzLDUuOTg4NjY2NjYgNDIuMzY2NjY2Nyw3LjE3MzMzMzMzIEM0Mi4wODQsNy40ODI2NjY2NiA0MS41NDY2NjY3LDguMTg4IDQxLjE3ODY2NjcsOC42NjY2NjY2NyBMNDUsOC42NjY2NjY2NyBMNDUsMTAgTDM5LDEwIEwzOSw0IEw0MC4zMzMzMzMzLDQgWiIgZmlsbD0iIzZBNkE2QSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},68623:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYgNDhMMzEuODkzMiA1NS40MTY0TDM0LjU4NzMgMzkuNzA4MkwyMy4xNzQ2IDI4LjU4MzZMMzguOTQ2NiAyNi4yOTE4TDQ2IDEyTDUzLjA1MzQgMjYuMjkxOEw2OC44MjU0IDI4LjU4MzZMNTcuNDEyNyAzOS43MDgyTDYwLjEwNjggNTUuNDE2NEw0NiA0OFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzMwMjMpIi8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xXzMwMjMiIHgxPSI1OC4wNzYzIiB5MT0iNTYuMTg5OCIgeDI9IjU4LjA3NjMiIHkyPSIzMi4wMzcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyODI4MjgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},11047:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl96b29tPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0MS4wMDAwMDAsIC00MzIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDM4MC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuMDAwMDAwLCAxMS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMzNjM2MzYiIHBvaW50cz0iMjYgMzYgMTEuODkzMTUzOSA0My40MTY0MDc5IDE0LjU4NzMyMTggMjcuNzA4MjAzOSAzLjE3NDY0MzYxIDE2LjU4MzU5MjEgMTguOTQ2NTc3IDE0LjI5MTc5NjEgMjYgMCAzMy4wNTM0MjMgMTQuMjkxNzk2MSA0OC44MjUzNTY0IDE2LjU4MzU5MjEgMzcuNDEyNjc4MiAyNy43MDgyMDM5IDQwLjEwNjg0NjEgNDMuNDE2NDA3OSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzZBNkE2QSIgcG9pbnRzPSIyNiAzMCAxOC45NDY1NzcgMzMuNzA4MjAzOSAyMC4yOTM2NjA5IDI1Ljg1NDEwMiAxNC41ODczMjE4IDIwLjI5MTc5NjEgMjIuNDczMjg4NSAxOS4xNDU4OTggMjYgMTIgMjkuNTI2NzExNSAxOS4xNDU4OTggMzcuNDEyNjc4MiAyMC4yOTE3OTYxIDMxLjcwNjMzOTEgMjUuODU0MTAyIDMzLjA1MzQyMyAzMy43MDgyMDM5Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjYuMDk4OTk5NSw0MSBDMjYuMzg5MjQ2Niw0MS4wMDI2ODc3IDI2LjYzNDczNzQsNDEuMjM4NDYxNCAyNi42NDczMTgzLDQxLjUyNjY1NjMgTDI2LjY0OTIyMjIsNDguOTMwMzk5OCBMMzAuMDU3MDE1LDQ1LjQyNTg3NTEgQzMwLjI1MzM1NDgsNDUuMjIzOTYyIDMwLjU4NjEwOCw0NS4yMjY5OTY0IDMwLjgwMDIzOTksNDUuNDMyNjUyNSBDMzEuMDE0MzcxOCw0NS42MzgzMDg1IDMxLjAyODc5NTIsNDUuOTY4NzA4NiAzMC44MzI0NTUzLDQ2LjE3MDYyMTcgTDI2LjIxMDg5MzMsNTAuOTIzMzY5MSBMMjEuMTcwNTMxMiw0Ni4wODI1MTYyIEMyMC45NTYzOTkyLDQ1Ljg3Njg2MDIgMjAuOTQxOTc1OSw0NS41NDY0NjAxIDIxLjEzODMxNTgsNDUuMzQ0NTQ3IEMyMS4zMzQ2NTU2LDQ1LjE0MjYzMzkgMjEuNjY3NDA4OCw0NS4xNDU2NjgyIDIxLjg4MTU0MDcsNDUuMzUxMzI0MyBMMjUuNTk4MTQzNCw0OC45MjA4MTUyIEwyNS41OTYyMzk1LDQxLjUxNzA3MTcgQzI1LjU4MzY1ODYsNDEuMjI4ODc2OCAyNS44MDg3NTE4LDQwLjk5NzM5NDIgMjYuMDk4OTk5NSw0MSBaIE00OS4yMjkxODExLDI3LjIwMzgyIEM0OS40ODgwNDUxLDI3LjA5Mjg4MDEgNDkuNzkxMzMxMywyNy4yMjQ3NTAzIDQ5LjkwNjU4OTcsMjcuNDk4MzYwMiBMNDkuOTA2NTg5NywyNy40OTgzNjAyIEw1Mi42MTk2MTEsMzMuOTM4NzUwMSBMNDYuNTI2MzE5MywzNi41NTAxMTc2IEM0Ni4yNjc0NTUzLDM2LjY2MTA1NzUgNDUuOTY0MTY5MSwzNi41MjkxODc0IDQ1Ljg0ODkxMDYsMzYuMjU1NTc3NSBDNDUuNzMzNjUyMiwzNS45ODE5Njc1IDQ1Ljg1MDA2NzQsMzUuNjcwMjI4MyA0Ni4xMDg5MzE1LDM1LjU1OTI4ODQgTDQ2LjEwODkzMTUsMzUuNTU5Mjg4NCBMNTAuNjAxOTMwOSwzMy42MzM3NDkxIEw0My42OTA2MjMxLDMwLjk3ODcwNzMgQzQzLjQyNjA3ODYsMzAuODYzNjgyMiA0My4yOTM5NDA5LDMwLjU1MDAwMyA0My4zOTU0ODUzLDMwLjI3ODA4NTIgQzQzLjQ5NzAyOTcsMzAuMDA2MTY3NSA0My43OTM4MDM1LDI5Ljg3ODk4MDggNDQuMDU4MzQ4LDI5Ljk5NDAwNTkgTDQ0LjA1ODM0OCwyOS45OTQwMDU5IEw1MC45Njk2NTU4LDMyLjY0OTA0NzcgTDQ4Ljk2OTE2MDMsMjcuOTAwMTA5MSBDNDguODUzOTAxOCwyNy42MjY0OTkxIDQ4Ljk3MDMxNzEsMjcuMzE0NzU5OSA0OS4yMjkxODExLDI3LjIwMzgyIFogTTMuMzkwNDI5OSwyNy4yMDM4MiBDMy42NDkyOTM5MSwyNy4zMTQ3NTk5IDMuNzY1NzA5MTgsMjcuNjI2NDk5MSAzLjY1MDQ1MDcsMjcuOTAwMTA5MSBMMS42NDk5NTUxNiwzMi42NDkwNDc3IEw4LjU2MTI2MjkyLDI5Ljk5NDAwNTkgQzguODI1ODA3NDYsMjkuODc4OTgwOCA5LjEyMjU4MTIyLDMwLjAwNjE2NzUgOS4yMjQxMjU2NiwzMC4yNzgwODUyIEM5LjMyNTY3MDEsMzAuNTUwMDAzIDkuMTkzNTMyNDEsMzAuODYzNjgyMiA4LjkyODk4Nzg2LDMwLjk3ODcwNzMgTDIuMDE3NjgwMTEsMzMuNjMzNzQ5MSBMNi41MTA2Nzk1MSwzNS41NTkyODg0IEM2Ljc2OTU0MzUyLDM1LjY3MDIyODMgNi44ODU5NTg3OSwzNS45ODE5Njc1IDYuNzcwNzAwMzEsMzYuMjU1NTc3NSBDNi42NTU0NDE4MywzNi41MjkxODc0IDYuMzUyMTU1NjQsMzYuNjYxMDU3NSA2LjA5MzI5MTYzLDM2LjU1MDExNzYgTC02LjMxMDg4NzI0ZS0zMCwzMy45Mzg3NTAxIEwyLjcxMzAyMTIyLDI3LjQ5ODM2MDIgQzIuODI4Mjc5NywyNy4yMjQ3NTAzIDMuMTMxNTY1OSwyNy4wOTI4ODAxIDMuMzkwNDI5OSwyNy4yMDM4MiBaIE00My4wMDI2NzIxLDEgTDQzLjk5NDIwNTEsNy45MTc4MDA4NyBDNDQuMDM2MzI4OCw4LjIxMTY5Mjg2IDQzLjg0NDI3OTksOC40ODA5MzE1NiA0My41NjUyNTE5LDguNTE5MTYyMzQgQzQzLjI4NjIyMzksOC41NTczOTMxMiA0My4wMjU4NzksOC4zNTAxMzg3NiA0Mi45ODM3NTUyLDguMDU2MjQ2NzYgTDQyLjI1MjYzMDQsMi45NTUyODA0OCBMMzcuNjk1OTMxLDguNzkwNjgyMTIgQzM3LjUyODQxNDMsOS4wMjU1MjgzOCAzNy4yMDg1MjM2LDkuMDY5MzU3OTMgMzYuOTgxNDM1LDguODg4NTc4MTUgQzM2Ljc1NDM0NjQsOC43MDc3OTgzNyAzNi43MDYwNTM4LDguMzcwODY2ODkgMzYuODczNTcwNSw4LjEzNjAyMDYzIEw0MS40MzAyNjk5LDIuMzAwNjE4OTkgTDM2LjU4NzI5MTYsMi45NjQxNzU0IEMzNi4zMDgyNjM2LDMuMDAyNDA2MTggMzYuMDQ3OTE4NywyLjc5NTE1MTgyIDM2LjAwNTc5NDksMi41MDEyNTk4MiBDMzUuOTYzNjcxMiwyLjIwNzM2NzgzIDM2LjE1NTcyMDEsMS45MzgxMjkxMiAzNi40MzQ3NDgxLDEuODk5ODk4MzUgTDQzLjAwMjY3MjEsMSBaIE04Ljk5NzMyNzg3LDEgTDE1LjU2NTI1MTksMS44OTk4OTgzNSBDMTUuODQ0Mjc5OSwxLjkzODEyOTEyIDE2LjAzNjMyODgsMi4yMDczNjc4MyAxNS45OTQyMDUxLDIuNTAxMjU5ODIgQzE1Ljk1MjA4MTMsMi43OTUxNTE4MiAxNS42OTE3MzY0LDMuMDAyNDA2MTggMTUuNDEyNzA4NCwyLjk2NDE3NTQgTDE1LjQxMjcwODQsMi45NjQxNzU0IEwxMC41Njk3MzAxLDIuMzAwNjE4OTkgTDE1LjEyNjQyOTUsOC4xMzYwMjA2MyBDMTUuMjkzOTQ2Miw4LjM3MDg2Njg5IDE1LjI0NTY1MzYsOC43MDc3OTgzNyAxNS4wMTg1NjUsOC44ODg1NzgxNSBDMTQuNzkxNDc2NCw5LjA2OTM1NzkzIDE0LjQ3MTU4NTcsOS4wMjU1MjgzOCAxNC4zMDQwNjksOC43OTA2ODIxMiBMMTQuMzA0MDY5LDguNzkwNjgyMTIgTDkuNzQ3MzY5NjMsMi45NTUyODA0OCBMOS4wMTYyNDQ3OCw4LjA1NjI0Njc2IEM4Ljk3NDEyMTA1LDguMzUwMTM4NzYgOC43MTM3NzYxMSw4LjU1NzM5MzEyIDguNDM0NzQ4MDksOC41MTkxNjIzNCBDOC4xNTU3MjAwNyw4LjQ4MDkzMTU2IDcuOTYzNjcxMTksOC4yMTE2OTI4NiA4LjAwNTc5NDkzLDcuOTE3ODAwODcgTDguMDA1Nzk0OTMsNy45MTc4MDA4NyBMOC45OTczMjc4NywxIFoiIGZpbGw9IiM2QTZBNkEiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},61851:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHg9IjgiIHdpZHRoPSI3NiIgaGVpZ2h0PSI0MCIgZmlsbD0iIzM2MzYzNiIgZmlsbC1vcGFjaXR5PSIwLjUiLz4NCjxyZWN0IHk9IjI0IiB3aWR0aD0iOTIiIGhlaWdodD0iNDgiIGZpbGw9IiM1MjUyNTIiLz4NCjwvc3ZnPg0K"},55629:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2N1YmU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2MS4wMDAwMDAsIC0yNzAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCAyMTguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiM2QTZBNkEiIHBvaW50cz0iMTIgMTguNCA1MSAxMiA1MSA2MCAxMiA1My42Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMzNjM2MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY1LjUwMDAwMCwgMzYuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC02NS41MDAwMDAsIC0zNi4wMDAwMDApICIgcG9pbnRzPSI1MSAxOC40IDgwIDEyIDgwIDYwIDUxIDUzLjYiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},29903:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2Rvb3J3YXk8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTYzMC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCA1NzguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMzNjM2MzYiIHBvaW50cz0iMCAtMS4xNDAxOTkwNWUtMTMgMjQgMTIgMjQgNjAgMCA3MiI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjNkE2QTZBIiB4PSIyNiIgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBmaWxsPSIjMzYzNjM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MC4wMDAwMDAsIDM2LjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtODAuMDAwMDAwLCAtMzYuMDAwMDAwKSAiIHBvaW50cz0iNjggLTEuMTQwMTk5MDVlLTEzIDkyIDExIDkyIDYwIDY4IDcyIj48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},49044:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2ZhZGU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2MS4wMDAwMDAsIC0xNTAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCA5OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgb3BhY2l0eT0iMC4xMDAwMDAwMDEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM1MjUyNTIiIHg9IjI4IiB5PSIyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsPSIjMzYzNjM2IiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDgiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY0LDAgTDY0LDQ4IEwwLDQ4IEwwLDAgTDY0LDAgWiBNNjMsMSBMMSwxIEwxLDQ3IEw2Myw0NyBMNjMsMSBaIiBmaWxsPSIjNkE2QTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},23976:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX25vbmU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTE1MC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCA5OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM2QTZBNkEiIHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},48686:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX3B1c2g8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTI3MC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyMTguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTIsMCBMOTIsNzIgTDAsNzIgTDAsMCBMOTIsMCBaIE05MSwzNyBMMSwzNyBMMSw3MSBMOTEsNzEgTDkxLDM3IFogTTQ2LDQ0IEw1Niw1NCBMNTAuMTY2NjY2Nyw1NCBMNTAuMTY2NjY2Nyw2NCBMNDEuODMzMzMzMyw2NCBMNDEuODMzMzMzMyw1NCBMMzYsNTQgTDQ2LDQ0IFoiIGZpbGw9IiM2QTZBNkEiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},79244:e=>{"use strict";e.exports=i},41496:e=>{"use strict";e.exports=n},1888:e=>{"use strict";e.exports=a},14321:e=>{"use strict";e.exports=l},35809:e=>{"use strict";e.exports=s},79298:e=>{"use strict";e.exports=o},15562:e=>{"use strict";e.exports=r},54337:e=>{"use strict";e.exports=c}},t={};function p(i){var n=t[i];if(void 0!==n)return n.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,p),a.exports}p.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return p.d(t,{a:t}),t},p.d=(e,t)=>{for(var i in t)p.o(t,i)&&!p.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var d={};return(()=>{"use strict";p.r(d),p.d(d,{AnimationSettingComponent:()=>yn,BackgroundSetting:()=>qt,BorderRadiusSetting:()=>Ee,BorderSetting:()=>ie,BoxShadowSetting:()=>se,ButtonStyleSetting:()=>ji,DateUnitInput:()=>Q,FixedPositionSize:()=>$n,FontFamilySelector:()=>de,FontFamilyValue:()=>ce,FontStyle:()=>Mt,FourEdges:()=>Te,FourSides:()=>re,InputRatio:()=>me,InputUnit:()=>Z,LineStyleSelector:()=>v,MouseActionSetting:()=>Pn,NavIconPicker:()=>ki,NavStyleSettingByState:()=>zi,Padding:()=>Bn,SizeColorSetting:()=>wi,SizeEditor:()=>Jt,TextAlignment:()=>Zt,TextStyle:()=>Nt,ThemeBackgroundSection:()=>ui,ThemeBorderSection:()=>Ii,ThemeBoxShadowSection:()=>xi,TransitionSetting:()=>zn,UnitSelector:()=>O,UnitSelectorDateUnits:()=>w,UnitSelectorDateWeekUnits:()=>j,UnitSelectorTimeUnits:()=>f,_FourSides:()=>oe,_InputRatio:()=>ge,_SizeEditor:()=>Ft,fontValue:()=>pe});var e={};p.r(e),p.d(e,{FourSides:()=>i,SingleColorSelector:()=>n});var t=p(79244);const i=e=>{var i,n,a,l;const{theme:s}=e,o=null!==(n=null===(i=null==s?void 0:s.ref)||void 0===i?void 0:i.palette.neutral[900])&&void 0!==n?n:"#c8cbcd",r=null!==(l=null===(a=null==s?void 0:s.ref)||void 0===a?void 0:a.palette.black)&&void 0!==l?l:"black";return t.css`
    width: 100%;
    .unit-selector-con {
      margin-left: -1px;
    }
    .content {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .input-group {
        width: 87%;
        flex-wrap: nowrap;
        flex-shrink: 0;
        flex-grow: 0;
        > input {
          width: 21%;
        }
        .jimu-numeric-input-input {
          width: calc(100% - 1px);
          z-index: 0;
          &:focus-within {
            z-index: 1;
          }
        }
        .form-control {
          padding-left: 0.25rem;
          padding-right: 0.25rem;
        }
        >.style-setting--unit-selector {
          width: 16%;
          margin-left: -1px;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
        }
      }
      .lock-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10%;
        cursor: pointer;
        .jimu-icon {
          color: ${r};
          &.disabled {
            color: ${o};
          }
        }
      }
    }
    .tips {
      color: ${o};
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-size: ${t.polished.rem(10)};
      .tip-group {
        text-align: center;
        display: flex;
        flex-shrink: 0;
        flex-grow: 0;
        width: 73%;
        > div {
          width: 25%;
          ${t.polished.ellipsis()}
        }
      }
    }
  `},n=e=>{const{theme:i}=e,n=i?i.ref.palette.neutral[500]:"",a=i?i.sys.color.primary.dark:"";return t.css`
    display: flex;
    .btn {
      border-radius: 0;
      height:${t.polished.rem(20)};
      width:${t.polished.rem(20)};
      border: 1px solid ${n};
      &.active {
          outline: 1px solid ${a};
      }
    }
    .btn:not(:last-of-type) {
      margin-right: 6px;
    }
  `};var a=p(1888),l=p(14321),s=p(10130),o=p.n(s),r=p(36008),c=p.n(r),u=p(23616),g=p.n(u),m=p(96002),h=p.n(m),I=p(33839),M=p.n(I),y=p(37821),b=p.n(y);const x={dashed:h(),dotted:g(),double:o(),solid:c(),esriSLSDash:h(),esriSLSDot:g(),esriSLSSolid:c(),esriSLSDashDot:b(),esriSLSDashDotDot:M()},N={dashed:"dashed",dotted:"dotted",double:"double",solid:"solid",esriSLSDash:"dashed",esriSLSDot:"dotted",esriSLSSolid:"solid",esriSLSDashDot:"dashDot",esriSLSDashDotDot:"dashDoubleDot"},v=e=>{var i,n;const a=t.hooks.useTranslation(l.defaultMessages),{type:s="normal",placeholder:o,value:r,className:c,style:p,onChange:d,"aria-label":u}=e,g=t.React.useMemo((()=>("normal"===s?Object.values(l.NormalLineType):Object.values(l.EsriSimpleLineSymbolStyle)).map((e=>({label:a(N[e]),value:e})))),[a,s]),m=null!==(n=null===(i=g.find((e=>e.value===r)))||void 0===i?void 0:i.label)&&void 0!==n?n:"";return t.React.createElement("div",{className:(0,t.classNames)(c,"style-setting--line-style-selector"),style:p},t.React.createElement(l.Select,{size:"sm",placeholder:o,name:"lineType",value:r,title:m,onChange:e=>{const t=e.currentTarget.value;null==d||d(t)},"aria-label":u},g.map(((e,i)=>t.React.createElement(l.Option,{className:"py-0",key:i,title:e.label,value:e.value,label:e.label},t.React.createElement("span",{style:{width:46}},t.React.createElement(l.Icon,{className:"w-100",icon:x[e.value]})))))))},w=["year","month","day"],j=["year","month","week","day"],f=["hour","minute","second"],C=[...j,...f],z=(0,a.styled)(l.DropdownMenu)`
  min-width: 60px !important;
`,D=(0,a.styled)(l.DropdownButton)`
  .dropdown-button-content {
    text-align: center;
  }
`,A=["px"],O=e=>{const i=t.hooks.useTranslation(l.defaultMessages),{className:n,style:a,title:s=i("changeUnit"),disabled:o,value:r="px",units:c=A,onChange:p}=e,d=o||c.length<=1,u=e=>C.includes(e)?i(e):e;return t.React.createElement(l.Dropdown,{direction:"down",size:"sm",disabled:d,style:a,title:s,activeIcon:!0,autoWidth:!0,className:(0,t.classNames)(n,"style-setting--unit-selector","jimu-outline-inside")},t.React.createElement(D,{arrow:!1,size:"sm","aria-label":i("unit")},u(r)),t.React.createElement(z,{alignment:"end"},c.map((e=>{const i=u(e);return t.React.createElement(l.DropdownItem,{className:"px-1",active:r===e,"aria-pressed":r===e,"aria-label":i,key:e,onClick:()=>{var t;(t=e)!==r&&(null==p||p(t))}},t.React.createElement("div",{className:"text-truncate",title:i},i))}))))};var S=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const T=["px"],L=(0,a.styled)("div")`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  .jimu-numeric-input {
    flex: 1;
    z-index: 0;
    &:focus-within {
      z-index: 1;
    }
    padding: 0px;
    width: calc(100% - 26px)
  }

  > .style-setting--unit-selector button {
    width: 26px;
    margin-left: -1px;
    z-index: 0;
    padding: 0px;
  }
`,E=0,k="px",P=e=>{var i,n;const{min:a,max:s,step:o,precision:r,className:c,disabled:p=!1,units:d=T,value:u,applyDefaultValue:g=!0,onChange:m,"aria-label":h,placeholder:I}=e,M=S(e,["min","max","step","precision","className","disabled","units","value","applyDefaultValue","onChange","aria-label","placeholder"]),y=(e=>{if("string"==typeof e){const i=t.polished.getValueAndUnit(e);return{val:null==i?void 0:i[0],unit:(null==i?void 0:i[1])||"px"}}return e})(u),b=g?null!==(i=null==y?void 0:y.val)&&void 0!==i?i:E:null==y?void 0:y.val,x=null!==(n=null==y?void 0:y.unit)&&void 0!==n?n:k,N=null!=y?`${h?`${h}, `:""}${y.unit}`:h;return t.React.createElement(L,Object.assign({className:(0,t.classNames)(c,"style-setting--base-unit-input")},M),t.React.createElement(l.NumericInput,{"aria-label":N,size:"sm",min:a,max:s,step:o,precision:r,value:isNaN(b)?"":b,disabled:p,showHandlers:!1,placeholder:I,onAcceptValue:(e,t)=>{if(null==e&&null==b)return;null==m||m({val:g?null!=e?e:0:e,unit:x},t)}}),t.React.createElement(O,{disabled:p,units:d,value:x,onChange:e=>{null!=b&&(null==m||m({val:b,unit:e}))}}))};var R=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const B=["px"],Z=e=>{const{className:i,units:n=B,value:a,onChange:l,applyDefaultValue:s=!0}=e,o=R(e,["className","units","value","onChange","applyDefaultValue"]),r=((e,t)=>{var i,n;if(e&&"object"==typeof e)return{val:t?null!==(i=e.distance)&&void 0!==i?i:0:e.distance,unit:null!==(n=e.unit)&&void 0!==n?n:"px"};return e})(a,s);return t.React.createElement(P,Object.assign({className:(0,t.classNames)(i,"style-setting--input-unit"),units:n,value:r,onChange:(e,t)=>{null==l||l({distance:e.val,unit:e.unit},t)},applyDefaultValue:s},o))};var Y=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const G=["year"],V=(0,a.styled)(P)`
 .jimu-numeric-input {
    width: calc(100% - 60px)
  }
  > .style-setting--unit-selector button {
    width: 60px;
  }
`,Q=e=>{const{className:i,value:n,units:a=G}=e,l=Y(e,["className","value","units"]);return t.React.createElement(V,Object.assign({className:(0,t.classNames)(i,"style-setting--date-unit-input")},l,{value:n,units:a}))};var H=p(54337),W=p(8547),U=p.n(W),F=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const J=e=>{const i=window.SVG,{className:n}=e,a=F(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:U()},a)):t.React.createElement("svg",Object.assign({className:l},a))};var X=p(51334),K=p.n(X),$=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const _=e=>{const i=window.SVG,{className:n}=e,a=$(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:K()},a)):t.React.createElement("svg",Object.assign({className:l},a))},q=t.css`
  width: 100%;
  .sides {
    width: 56px;
    height: 56px;
    border-radius: 3px;
    background: var(--sys-color-surface-paper);
    position: relative;

    & > .bar {
    cursor: pointer;
    position: absolute;
    border-radius: 3px;
    background: transparent;
    border: 1px solid var(--sys-color-action-text);
    &:hover, &.selected {
    background: var(--sys-color-action-selected);
    border-color: var(--sys-color-action-selected);
    }
    }
    &.locked > .bar {
    cursor: default;
    border: none;
    background: var(--sys-color-action-disabled-text);
    }

    .top {
      left: 16px;
      right: 16px;
      top: 4px;
      width: 24px;
      height: 4px;
    }
    .bottom {
      left: 16px;
      right: 16px;
      bottom: 4px;
      width: 24px;
      height: 4px;
    }
    .left {
      top: 16px;
      bottom: 16px;
      left: 4px;
      height: 24px;
      width: 4px;
    }
    .right {
      top: 16px;
      bottom: 16px;
      right: 4px;
      height: 24px;
      width: 4px;
    }
  }
  .item.style-setting--line-style-selector {
    flex-grow: 1;
  },
  .item.style-setting--input-unit {
    width: 60px;
  }
  .item.color-picker-block {
    height: 26px;
    width: 26px;
    flex-shrink: 0;
  }
`,ee=[l.DistanceUnits.PIXEL],te={type:l.NormalLineType.DASHED,color:void 0,width:"0px"};const ie=e=>{var i,n;const{applyDefaultValue:s=!0,singleMode:o=!1,value:r,top:c,left:p,bottom:d,right:u,onChange:g,onSideChange:m,className:h,style:I}=e,[M,y]=t.React.useState(function(e){let t="top";return["top","right","bottom","left"].some((i=>null!=e[i]&&(t=i,!0))),t}({top:c,right:u,bottom:d,left:p})),[b,x]=t.React.useState(null!=c||null!=p||null!=d||null!=u);let N=r;if(!o&&b)switch(M){case"top":N=c;break;case"left":N=p;break;case"right":N=u;break;case"bottom":N=d;break;default:N=te}const w=s?null!==(i=null==N?void 0:N.type)&&void 0!==i?i:l.NormalLineType.DASHED:null==N?void 0:N.type,j=s?null!==(n=null==N?void 0:N.width)&&void 0!==n?n:"0px":null==N?void 0:N.width,f=null==N?void 0:N.color,C=(0,a.useTheme2)(),z=t.hooks.useTranslation(l.defaultMessages),D=(e,t)=>{const i={type:w,color:f,width:j};i[e]=t,!o&&b?null==m||m(M,i):null==g||g(i)},A=t.React.useCallback((()=>{x(!b)}),[b]);return(0,t.jsx)("div",{className:(0,t.classNames)("style-setting--border-setting d-flex align-items-center",h),style:I,css:q},(0,t.jsx)("div",{className:(0,t.classNames)("sides mr-2 justify-content-center flex-shrink-0 align-items-center",{"d-flex":!o,"d-none":o,locked:!b})},(0,t.jsx)(l.Button,{type:"tertiary",size:"sm",icon:!0,onClick:A,title:z(b?"setForAllSide":"setForEachSide"),"aria-label":z(b?"setForAllSide":"setForEachSide")},b?(0,t.jsx)(_,null):(0,t.jsx)(J,null)),(0,t.jsx)(l.Button,{className:(0,t.classNames)("bar p-0 top",{selected:"top"===M}),"aria-pressed":"top"===M,"aria-label":z("top"),title:z("top"),type:"tertiary",size:"sm",disabled:!b,onClick:()=>{y("top")}}),(0,t.jsx)(l.Button,{className:(0,t.classNames)("bar p-0 right",{selected:"right"===M}),"aria-pressed":"right"===M,"aria-label":z("right"),title:z("right"),type:"tertiary",size:"sm",disabled:!b,onClick:()=>{y("right")}}),(0,t.jsx)(l.Button,{className:(0,t.classNames)("bar p-0 bottom",{selected:"bottom"===M}),"aria-pressed":"bottom"===M,"aria-label":z("bottom"),title:z("bottom"),type:"tertiary",size:"sm",disabled:!b,onClick:()=>{y("bottom")}}),(0,t.jsx)(l.Button,{className:(0,t.classNames)("bar p-0 left",{selected:"left"===M}),"aria-pressed":"left"===M,"aria-label":z("left"),title:z("left"),type:"tertiary",size:"sm",disabled:!b,onClick:()=>{y("left")}})),(0,t.jsx)(H.ThemeColorPicker,{"aria-label":z("color"),specificTheme:C,className:"item",onChange:e=>{D("color",e)},value:f}),(0,t.jsx)(v,{"aria-label":z("lineStyle"),className:"item ml-1",value:w,placeholder:z("none"),onChange:e=>{D("type",e)}}),(0,t.jsx)(Z,{"aria-label":z("width"),min:0,precision:0,units:ee,placeholder:"##",className:"item ml-1",value:j,applyDefaultValue:s,onChange:e=>{var t,i;const n=s?null!==(t=null==e?void 0:e.distance)&&void 0!==t?t:0:null==e?void 0:e.distance,a=null!==(i=null==e?void 0:e.unit)&&void 0!==i?i:ee[0];D("width",null!=n?`${n}${a}`:null)}}))};var ne=p(79298),ae=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const le=(0,a.styled)("div")((({theme:e})=>({display:"flex",flexDirection:"column",width:"100%","> .setting-row":{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:e.sys.spacing(3),marginBottom:"0px"},".box-input":{width:"30%",flex:"0 0 auto"}}))),se=e=>{var i,n,s,o;const{className:r,value:c,applyDefaultValue:p=!0,placeholder:d="##",onChange:u}=e,g=ae(e,["className","value","applyDefaultValue","placeholder","onChange"]),m=t.hooks.useTranslation(l.defaultMessages),h=(0,a.useTheme2)(),I=p?null!==(i=null==c?void 0:c.offsetX)&&void 0!==i?i:"0px":null==c?void 0:c.offsetX,M=p?null!==(n=null==c?void 0:c.offsetY)&&void 0!==n?n:"0px":null==c?void 0:c.offsetY,y=p?null!==(s=null==c?void 0:c.blur)&&void 0!==s?s:"0px":null==c?void 0:c.blur,b=p?null!==(o=null==c?void 0:c.spread)&&void 0!==o?o:"0px":null==c?void 0:c.spread,x=null==c?void 0:c.color,N=(e,t)=>{var i,n;const a=p?null!==(i=null==t?void 0:t.distance)&&void 0!==i?i:0:null==t?void 0:t.distance,l=null!==(n=null==t?void 0:t.unit)&&void 0!==n?n:"px",s=null!=a?`${a}${l}`:null,o=Object.assign({offsetX:I,offsetY:M,blur:y,spread:b,color:x},{[e]:s});null==u||u(o)};return t.React.createElement(le,Object.assign({className:(0,t.classNames)("style-setting--box-shadow-setting",r),role:"group","aria-label":m("boxShadow")},g),t.React.createElement(ne.SettingRow,{label:m("offsetX")},t.React.createElement(Z,{"aria-label":m("offsetX"),precision:0,applyDefaultValue:p,className:"box-input",min:-200,max:200,value:I,placeholder:d,onChange:e=>{N("offsetX",e)}})),t.React.createElement(ne.SettingRow,{label:m("offsetY")},t.React.createElement(Z,{"aria-label":m("offsetY"),precision:0,applyDefaultValue:p,className:"box-input",min:-200,max:200,value:M,placeholder:d,onChange:e=>{N("offsetY",e)}})),t.React.createElement(ne.SettingRow,{label:m("blurRadius")},t.React.createElement(Z,{"aria-label":m("blurRadius"),precision:0,applyDefaultValue:p,className:"box-input",min:0,max:300,value:y,placeholder:d,onChange:e=>{N("blur",e)}})),t.React.createElement(ne.SettingRow,{label:m("spreadRadius")},t.React.createElement(Z,{"aria-label":m("spreadRadius"),precision:0,applyDefaultValue:p,className:"box-input",min:-200,max:200,value:b,placeholder:d,onChange:e=>{N("spread",e)}})),t.React.createElement(ne.SettingRow,{label:m("color")},t.React.createElement(H.ThemeColorPicker,{className:"box-color ml-auto",specificTheme:h,value:x,onChange:e=>{null==u||u({offsetX:I,offsetY:M,blur:y,spread:b,color:e})}})))};class oe extends t.React.PureComponent{constructor(e){super(e),this._onSideValueChange=(e,t)=>{const{bindAll:i}=this.state;if(i)this._onAllSidesValueChange(e);else{const{value:i}=this.props,n=l.styleUtils.expandStyleArray(i.number);n[t]=e,this.props.onChange({number:n,unit:i.unit})}},this._onUnitChange=e=>{const{value:t}=this.props;if(e!==t.unit){const i=l.styleUtils.expandStyleArray(t.number);this.props.onChange({number:i,unit:e})}},this._onAllSidesValueChange=e=>{this.props.onChange({number:[e],unit:this.props.value.unit})},this._toggleBindAll=()=>{const{disabled:e}=this.props;if(!e){if(!this.state.bindAll){const{value:e}=this.props,t=l.styleUtils.expandStyleArray(e.number);this._onAllSidesValueChange(t[0])}this.setState({bindAll:!this.state.bindAll})}},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:l.defaultMessages[e]}):e,this.handleAcceptValue=(e,t)=>{this._onSideValueChange(e,t)},this.state={bindAll:!1}}render(){const{value:e,units:i,showTip:n,sides:a,min:s,max:o,disabled:r,className:c}=this.props,{bindAll:p}=this.state,d=l.styleUtils.expandStyleArray(e.number);return(0,t.jsx)("div",{className:(0,t.classNames)("style-setting--four-sides",c)},(0,t.jsx)("div",{className:"content"},(0,t.jsx)(l.InputGroup,null,a.map(((e,i)=>{const a=this.nls(e);return(0,t.jsx)(l.NumericInput,{size:"sm",key:i,placeholder:n?e:"",title:a,"aria-label":a,min:s,max:o,disabled:r,value:d[i],onAcceptValue:e=>{this.handleAcceptValue(e,i)},showHandlers:!1})})),(0,t.jsx)("div",{className:"unit-selector-con"},(0,t.jsx)(O,{units:i,value:e.unit,onChange:this._onUnitChange}))),(0,t.jsx)(l.Button,{icon:!0,type:"tertiary",className:"lock-btn",onClick:this._toggleBindAll,title:p?this.nls("lock"):this.nls("unlock"),"aria-label":p?this.nls("lock"):this.nls("unlock")},p?(0,t.jsx)(J,{className:(0,t.classNames)({disabled:r})}):(0,t.jsx)(_,{className:(0,t.classNames)({disabled:r})}))),n&&(0,t.jsx)("div",{className:"tips"},(0,t.jsx)("div",{className:"tip-group"},a.map(((e,i)=>(0,t.jsx)("div",{key:i,title:this.nls(e)},e)))),(0,t.jsx)("div",null)))}}oe.defaultProps={units:[l.DistanceUnits.PIXEL,l.DistanceUnits.PERCENTAGE],showTip:!0,value:{number:[0],unit:l.DistanceUnits.PIXEL},disabled:!1,min:0,max:100,sides:[l.Sides.T,l.Sides.R,l.Sides.B,l.Sides.L],onChange:()=>{}};const re=(0,a.withStyles)((0,t.injectIntl)(oe),"FourSides");var ce;!function(e){e.AVENIRNEXT="Avenir Next",e.CALIBRI="Calibri",e.PMINGLIU="PmingLiu",e.IMPACT="Impact",e.GEORGIA="Georgia",e.ARIAL="Arial",e.TIMESNEWROMAN="Times New Roman",e.SIMHEI="SimHei",e.MICROSOFTYAHEI="Microsoft YaHei"}(ce||(ce={}));const pe=[ce.AVENIRNEXT,ce.CALIBRI,ce.PMINGLIU,ce.IMPACT,ce.GEORGIA,ce.ARIAL,ce.TIMESNEWROMAN,ce.SIMHEI,ce.MICROSOFTYAHEI],de=e=>{const{font:i=ce.AVENIRNEXT,"aria-label":n,onChange:a,style:s,className:o}=e;return t.React.createElement(l.Select,{title:i,"aria-label":n,style:s,value:i,onChange:e=>{a(e.target.value)},className:(0,t.classNames)(o,"style-setting--font-family")},pe.map(((e,i)=>t.React.createElement("option",{key:i,value:e,label:e},e))))},ue=t.css`
  font-size: 10px;
  color: var(--ref-palette-neutral-1000);
  text-align: center;
`;class ge extends t.React.PureComponent{constructor(){super(...arguments),this.width=100,this.height=100,this.onWidthChange=e=>{this.props.onChange(`${e}:${this.height}`)},this.onHeightChange=e=>{this.props.onChange(`${this.width}:${e}`)}}parseAspectRatio(e){if("number"==typeof e)this.width=100,this.height=Math.round(100*e);else if("string"==typeof e){const t=e.split(":");this.width=parseInt(t[0],10),this.height=parseInt(t[1],10)}}formatMessage(e){return this.props.intl.formatMessage({id:e,defaultMessage:l.defaultMessages[e]})}render(){const{style:e,disabled:i,value:n}=this.props;return this.parseAspectRatio(n),(0,t.jsx)(l.InputGroup,{className:(0,t.classNames)("style-setting--input-ratio"),style:e},(0,t.jsx)("div",{className:"d-flex flex-column justify-content-start align-items-center",style:{width:"45%"}},(0,t.jsx)(l.NumericInput,{size:"sm",min:1,max:100,value:isNaN(this.width)?"":this.width,showHandlers:!1,onChange:this.onWidthChange,disabled:i,"aria-label":this.formatMessage("width")}),(0,t.jsx)("div",{className:"px-1 mt-1 w-100",css:ue,title:this.formatMessage("width")},"W")),(0,t.jsx)("div",{className:"h-100 text-center",style:{width:"10%"}},":"),(0,t.jsx)("div",{className:"d-flex flex-column justify-content-start align-items-center",style:{width:"45%"}},(0,t.jsx)(l.NumericInput,{size:"sm",min:1,value:isNaN(this.height)?"":this.height,showHandlers:!1,onChange:this.onHeightChange,disabled:i,"aria-label":this.formatMessage("height")}),(0,t.jsx)("div",{className:"px-1 mt-1 w-100",css:ue,title:this.formatMessage("height")},"H")))}}ge.defaultProps={value:1,disabled:!1,onChange:()=>{}};const me=(0,t.injectIntl)(ge),he=(0,a.styled)(l.InputGroup)((()=>({".jimu-numeric-input-input":{padding:"0 6px !important",zIndex:"auto","&:focus":{zIndex:1}},".unit-selector-con":{marginLeft:"-1px"}}))),Ie=[l.Sides.T,l.Sides.R,l.Sides.B,l.Sides.L],Me=[l.BorderSides.TL,l.BorderSides.TR,l.BorderSides.BR,l.BorderSides.BL],ye=[l.DistanceUnits.PIXEL,l.DistanceUnits.PERCENTAGE],be={number:[0,0,0,0],unit:l.DistanceUnits.PIXEL},xe=e=>{var i,n;const a=t.hooks.useTranslation(l.defaultMessages),s=a("unifiedNumericValue"),{type:o="edge",value:r,className:c,style:p,min:d=0,max:u=100,step:g,placeholder:m,units:h=ye,disabled:I=!1,onActivatedChange:M,onChange:y,detached:b,unifiedTitle:x=s,unifiedAriaLabel:N=s,applyDefaultValue:v=!0}=e,w=v?null!==(i=null==r?void 0:r.number)&&void 0!==i?i:be.number:null==r?void 0:r.number,j=null!==(n=null==r?void 0:r.unit)&&void 0!==n?n:be.unit,f=t.React.useMemo((()=>(e=>!!(null==e?void 0:e.every((e=>null!=e))))(w)),[w]),C=t.React.useMemo((()=>"edge"===o?Ie:Me),[o]),z=(e,t)=>{if(null!=e||null!=w)if(e=v?Math.floor(null!=e?e:0):null!=e&&""!==e?Math.floor(e):e,b){const i=[...null!=w?w:[null,null,null,null]];i[t]=e,null==y||y({number:i,unit:j})}else{const t=l.styleUtils.expandStyleArray([e]);null==y||y({number:t,unit:j})}};return t.React.createElement(he,{className:(0,t.classNames)("edges-number",c),style:p},!b&&t.React.createElement(l.NumericInput,{size:"sm",min:d,max:u,step:g,title:x,"aria-label":N,disabled:I,value:null==w?void 0:w[0],placeholder:m,onAcceptValue:e=>{z(e,0)},showHandlers:!1}),b&&C.map(((e,i)=>{const n=a(e);return t.React.createElement(l.NumericInput,{size:"sm",key:e,title:n,"aria-label":n,min:d,max:u,step:g,disabled:I,value:null==w?void 0:w[i],placeholder:m,onAcceptValue:e=>{z(e,i)},onFocus:()=>{M(i)},onBlur:()=>{M(-1)},showHandlers:!1})})),t.React.createElement("div",{className:"unit-selector-con"},t.React.createElement(O,{disabled:I||!f,units:h,value:j,onChange:e=>{null==y||y({number:w,unit:e})}})))};var Ne=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const ve=t.css`
  padding: 4px !important;
  .content {
    width: 16px;
    height: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &.unified {
      border: 1px solid var(--ref-palette-black);
      border-radius: 4px;
    }
    &.none-select {
      .corner {
        opacity: 1;
      }
    }
    > .top,
    > .bottom {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: calc(50% - 3px);
    }

    .corner {
      width: calc(50% - 3px);
      height: 100%;
      opacity: 0.4;
      &.selected {
        opacity: 1;
      }
      &.top-left {
        border-top: 1px solid var(--ref-palette-black);
        border-left: 1px solid var(--ref-palette-black);
        border-radius: 4px 0 0 0;
      }
      &.top-right {
        border-top: 1px solid var(--ref-palette-black);
        border-right: 1px solid var(--ref-palette-black);
        border-radius: 0 4px 0 0;
      }
      &.bottom-left {
        border-bottom: 1px solid var(--ref-palette-black);
        border-left: 1px solid var(--ref-palette-black);
        border-radius: 0 0 0 4px;
      }
      &.bottom-right {
        border-bottom: 1px solid var(--ref-palette-black);
        border-right: 1px solid var(--ref-palette-black);
        border-radius: 0 0 4px 0;
      }
    }
  }
`,we=e=>{const{className:i,activated:n=-1,detached:a}=e,s=Ne(e,["className","activated","detached"]);return(0,t.jsx)(l.Button,Object.assign({css:ve,className:(0,t.classNames)("corner",i)},s),(0,t.jsx)("div",{className:(0,t.classNames)("content",{unified:!a},{"none-select":n<0})},a&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"top"},(0,t.jsx)("div",{className:(0,t.classNames)("top-left corner",{selected:0===n})}),(0,t.jsx)("div",{className:(0,t.classNames)("top-right corner",{selected:1===n})})),(0,t.jsx)("div",{className:"bottom"},(0,t.jsx)("div",{className:(0,t.classNames)("bottom-left corner",{selected:3===n})}),(0,t.jsx)("div",{className:(0,t.classNames)("bottom-right corner",{selected:2===n})})))))};var je=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const fe=t.css`
  padding: 4px !important;
  .content {
    width: 16px;
    height: 16px;
    position: relative;
    &.unified {
      border: 1px solid var(--ref-palette-black);
      > .inner-box {
        opacity: 1;
      }
    }
    &:not(.unified) {
      display: flex;
      flex-direction: column;
      align-items: center;
      &.none-select {
        .edge {
          opacity: 1;
        }
        > .inner-box {
          opacity: 1;
        }
      }
      > .top {
        width: calc(100% - 4px);
        border-top: 1px solid var(--ref-palette-black);
        height: 3px;
      }
      > .middle {
        height: calc(100% - 6px);
        width: 100%;
        display: flex;
        justify-content: space-between;
        > .left {
          border-left: 1px solid var(--ref-palette-black);
          width: 3px;
          height: 100%;
        }
        > .right {
          border-right: 1px solid var(--ref-palette-black);
          width: 3px;
          height: 100%;
        }
      }
      > .bottom {
        border-bottom: 1px solid var(--ref-palette-black);
        width: calc(100% - 4px);
        height: 3px;
      }
      .edge {
        opacity: 0.4;
        &.selected {
          opacity: 1;
        }
      }
    }
    > .inner-box {
      width: 8px;
      height: 8px;
      border: 1px dotted var(--ref-palette-black);
      opacity: 0.4;
      z-index: 1;
      position: absolute;
      left: calc(50% - 4px);
      top: calc(50% - 4px);
    }
  }
`,Ce=e=>{const{className:i,activated:n=-1,detached:a}=e,s=je(e,["className","activated","detached"]);return(0,t.jsx)(l.Button,Object.assign({css:fe,className:(0,t.classNames)("edge",i)},s),(0,t.jsx)("div",{className:(0,t.classNames)("content",{unified:!a},{"none-select":n<0})},a&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:(0,t.classNames)("edge top",{selected:0===n})}),(0,t.jsx)("div",{className:"middle"},(0,t.jsx)("div",{className:(0,t.classNames)("edge left",{selected:3===n})}),(0,t.jsx)("div",{className:(0,t.classNames)("edge right",{selected:1===n})})),(0,t.jsx)("div",{className:(0,t.classNames)("edge bottom",{selected:2===n})})),(0,t.jsx)("div",{className:"inner-box"})))};var ze=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const De=e=>{const{type:i="edge",detached:n,onDetachedChange:a,onClick:s}=e,o=ze(e,["type","detached","onDetachedChange","onClick"]),r=(e,t)=>{null==a||a(e),null==s||s(t)},c=t.hooks.useTranslation(l.defaultMessages),p=c("unified"),d=c("independent");return t.React.createElement(t.React.Fragment,null,"edge"===i&&t.React.createElement(l.AdvancedButtonGroup,null,"edge"===i&&t.React.createElement(Ce,Object.assign({active:!n,detached:!1,title:p,"aria-label":p},o,{onClick:e=>{r(!1,e)}})),"edge"===i&&t.React.createElement(Ce,Object.assign({active:n,detached:!0,title:d,"aria-label":d},o,{onClick:e=>{r(!0,e)}}))),"corner"===i&&t.React.createElement(l.AdvancedButtonGroup,null,t.React.createElement(we,Object.assign({active:!n,detached:!1,title:p,"aria-label":p},o,{onClick:e=>{r(!1,e)}})),t.React.createElement(we,Object.assign({active:n,detached:!0,title:d,"aria-label":d},o,{onClick:e=>{r(!0,e)}}))))};var Ae=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const Oe=(0,a.styled)("div")((()=>({width:"100%",".jimu-numeric-input":{zIndex:0,"&:focus-within":{zIndex:1}},".input-group-append":{zIndex:0,"&:focus-within":{zIndex:1}},".content":{".btn-group":{marginRight:"6px"},".input-group":{".input-group-append":{marginLeft:"0"}}}}))),Se=[l.DistanceUnits.PIXEL,l.DistanceUnits.PERCENTAGE],Te=e=>{var i,n;const{type:a="edge",value:s,units:o=Se,min:r=0,max:c=100,disabled:p=!1,className:d,style:u,onChange:g,separated:m=!0,applyDefaultValue:h=!0}=e,I=Ae(e,["type","value","units","min","max","disabled","className","style","onChange","separated","applyDefaultValue"]),M=(e=>{let t=e;if((null==e?void 0:e.number)&&4!==e.number.length){const i=l.styleUtils.expandStyleArray(e.number);t=Object.assign(Object.assign({},t),{number:i})}return t})(s),y=null!==(n=null!==(i=null==M?void 0:M.unit)&&void 0!==i?i:null==o?void 0:o[0])&&void 0!==n?n:Se[0],[b,x]=t.React.useState((()=>(e=>{const t=null==e?void 0:e.number;return!!t&&!(t[0]===t[1]&&t[1]===t[2]&&t[2]===t[3])})(M))),[N,v]=t.React.useState(-1);return t.React.createElement(Oe,{className:(0,t.classNames)("style-setting--four-edges",d),style:u},t.React.createElement("div",{className:"content d-flex"},m&&t.React.createElement(De,{type:a,detached:b,activated:N,disabled:p,onDetachedChange:e=>{var t;if(!p){if(!e){let e=null===(t=null==M?void 0:M.number)||void 0===t?void 0:t[0];e=h?null!=e?e:0:null!=e&&""!==e?Math.floor(e):e;const i=l.styleUtils.expandStyleArray([e]);null==g||g({number:i,unit:y})}x(e)}}}),t.React.createElement(xe,Object.assign({type:a,detached:b,value:M,min:r,max:c,disabled:p,units:o,onChange:g},I,{onActivatedChange:v,applyDefaultValue:h}))))};var Le=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const Ee=e=>{const{className:i,value:n,placeholder:a="##",onChange:s}=e,o=Le(e,["className","value","placeholder","onChange"]),r=t.React.useMemo((()=>null==n?void 0:n.asMutable({deep:!0})),[n]),c=t.hooks.useTranslation(l.defaultMessages),p=t.React.useMemo((()=>c("borderRadius")),[c]);return t.React.createElement(Te,Object.assign({type:"corner",value:r,onChange:e=>{null==s||s((0,t.Immutable)(e))},unifiedAriaLabel:p,unifiedTitle:p,placeholder:a},o,{className:(0,t.classNames)("style-setting--border-radius",i)}))};var ke=p(40403),Pe=p.n(ke),Re=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const Be=e=>{const i=window.SVG,{className:n}=e,a=Re(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:Pe()},a)):t.React.createElement("svg",Object.assign({className:l},a))};var Ze=p(58878),Ye=p.n(Ze),Ge=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const Ve=e=>{const i=window.SVG,{className:n}=e,a=Ge(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:Ye()},a)):t.React.createElement("svg",Object.assign({className:l},a))};var Qe=p(51366),He=p.n(Qe),We=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const Ue=e=>{const i=window.SVG,{className:n}=e,a=We(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:He()},a)):t.React.createElement("svg",Object.assign({className:l},a))};var Fe=p(41048),Je=p.n(Fe),Xe=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const Ke=e=>{const i=window.SVG,{className:n}=e,a=Xe(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:Je()},a)):t.React.createElement("svg",Object.assign({className:l},a))};var $e=p(27275),_e=p.n($e),qe=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const et=e=>{const i=window.SVG,{className:n}=e,a=qe(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:_e()},a)):t.React.createElement("svg",Object.assign({className:l},a))};var tt=p(20057),it=p.n(tt),nt=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const at=e=>{const i=window.SVG,{className:n}=e,a=nt(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:it()},a)):t.React.createElement("svg",Object.assign({className:l},a))};var lt=p(35329),st=p.n(lt),ot=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const rt=e=>{const i=window.SVG,{className:n}=e,a=ot(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:st()},a)):t.React.createElement("svg",Object.assign({className:l},a))};var ct=p(55066),pt=p.n(ct),dt=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const ut=e=>{const i=window.SVG,{className:n}=e,a=dt(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:pt()},a)):t.React.createElement("svg",Object.assign({className:l},a))};var gt=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const mt=e=>{const{type:i,value:n,size:a,applyDefaultValue:s=!0,onChange:o}=e,r=gt(e,["type","value","size","applyDefaultValue","onChange"]),c=s?null!=n&&n:n,p="lg"===a?"l":"m",d=t.hooks.useTranslation(l.defaultMessages),u=null!=c?d(i):d("fontStyleIneffective",{fontStyle:d(i)});return t.React.createElement(l.Button,Object.assign({icon:!0,size:a,color:c?"primary":"default",variant:"contained","aria-pressed":!!c,title:u,"aria-label":u,onClick:e=>{o(!c,e)}},r),"bold"===i&&(null!=c?t.React.createElement(Be,{size:p}):t.React.createElement(ut,{size:p})),"italic"===i&&(null!=c?t.React.createElement(Ve,{size:p}):t.React.createElement(rt,{size:p})),"underline"===i&&(null!=c?t.React.createElement(Ue,{size:p}):t.React.createElement(at,{size:p})),"strike"===i&&(null!=c?t.React.createElement(Ke,{size:p}):t.React.createElement(et,{size:p})))};var ht=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const It=["bold","italic","underline","strike"],Mt=e=>{const{types:i=It,bold:n,italic:a,underline:s,strike:o,onChange:r,"aria-label":c,size:p="sm",applyDefaultValue:d=!0}=e,u=ht(e,["types","bold","italic","underline","strike","onChange","aria-label","size","applyDefaultValue"]),g=t.hooks.useTranslation(l.defaultMessages),m=c||g("fontStyle");return t.React.createElement(l.ButtonGroup,Object.assign({size:p},u,{role:"group","aria-label":m}),i.map(((i,n)=>t.React.createElement(mt,{key:n,type:i,value:e[i],applyDefaultValue:d,onChange:e=>{null==r||r(i,e)}}))))};var yt=p(778),bt=p.n(yt),xt=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const Nt=e=>{const i=(0,a.useTheme2)(),n=t.hooks.useTranslation(l.defaultMessages),{className:s,bold:o,italic:r,strike:c,underline:p,applyDefaultValue:d=!0,color:u,size:g,onChange:m}=e,h=xt(e,["className","bold","italic","strike","underline","applyDefaultValue","color","size","onChange"]),I=d?null!=g?g:"16px":g,M=(e,t)=>{null==m||m(e,t)};return t.React.createElement("div",Object.assign({className:(0,t.classNames)("d-flex justify-content-between w-100",s)},h),t.React.createElement(Mt,{applyDefaultValue:d,bold:o,italic:r,strike:c,underline:p,onChange:M}),t.React.createElement(H.ThemeColorPicker,{"aria-label":n("fontColor"),icon:bt(),type:"with-icon",specificTheme:i,value:u,onChange:e=>{M("color",e)}}),t.React.createElement(Z,{placeholder:"##",applyDefaultValue:d,"aria-label":n("fontSize"),min:4,max:999,style:{width:"35%"},value:I,onChange:e=>{var t,i;const n=d?null!==(t=null==e?void 0:e.distance)&&void 0!==t?t:0:null==e?void 0:e.distance,a=null!==(i=null==e?void 0:e.unit)&&void 0!==i?i:"px";null==m||m("size",null!=n?`${n}${a}`:null)}}))};var vt=p(93659),wt=p.n(vt),jt=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const ft=e=>{const i=window.SVG,{className:n}=e,a=jt(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:wt()},a)):t.React.createElement("svg",Object.assign({className:l},a))};var Ct=p(90003),zt=p.n(Ct),Dt=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const At=e=>{const i=window.SVG,{className:n}=e,a=Dt(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:zt()},a)):t.React.createElement("svg",Object.assign({className:l},a))};var Ot=p(47038),St=p.n(Ot),Tt=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const Lt=e=>{const i=window.SVG,{className:n}=e,a=Tt(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:St()},a)):t.React.createElement("svg",Object.assign({className:l},a))};var Et=p(81880),kt=p.n(Et),Pt=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const Rt=e=>{const i=window.SVG,{className:n}=e,a=Pt(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:kt()},a)):t.React.createElement("svg",Object.assign({className:l},a))};var Bt=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const Zt=e=>{var i,n;const a=null===(n=null===(i=(0,t.getAppStore)().getState())||void 0===i?void 0:i.appContext)||void 0===n?void 0:n.isRTL,{buttonType:s="default",textAlign:o=(a?l.TextAlignValue.RIGHT:l.TextAlignValue.LEFT),onChange:r,className:c,showJustify:p=!1,autoFlip:d=!1}=e,u=Bt(e,["buttonType","textAlign","onChange","className","showJustify","autoFlip"]),g=t.hooks.useTranslation(l.defaultMessages);return t.React.createElement(l.AdvancedButtonGroup,Object.assign({},u,{className:(0,t.classNames)("text-alignment",c,{"flex-row-reverse":a&&d})}),t.React.createElement(l.Button,{title:g(a&&!d?"right":"left"),type:s,icon:!0,size:"sm",active:o===l.TextAlignValue.LEFT,"aria-pressed":o===l.TextAlignValue.LEFT,onClick:()=>{r(l.TextAlignValue.LEFT)}},t.React.createElement(ft,{autoFlip:!d})),t.React.createElement(l.Button,{title:g("center"),type:s,icon:!0,size:"sm",active:o===l.TextAlignValue.CENTER,"aria-pressed":o===l.TextAlignValue.CENTER,onClick:()=>{r(l.TextAlignValue.CENTER)}},t.React.createElement(At,null)),t.React.createElement(l.Button,{title:g(a&&!d?"left":"right"),type:s,icon:!0,size:"sm",active:o===l.TextAlignValue.RIGHT,"aria-pressed":o===l.TextAlignValue.RIGHT,onClick:()=>{r(l.TextAlignValue.RIGHT)}},t.React.createElement(Lt,{autoFlip:!d})),p&&t.React.createElement(l.Button,{title:g("justify"),type:s,icon:!0,size:"sm",active:o===l.TextAlignValue.JUSTIFY,"aria-pressed":o===l.TextAlignValue.JUSTIFY,onClick:()=>{r(l.TextAlignValue.JUSTIFY)}},t.React.createElement(Rt,null)))};var Yt=p(41496),Gt=p(56499),Vt=p.n(Gt),Qt=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const Ht=e=>{const i=window.SVG,{className:n}=e,a=Qt(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:Vt()},a)):t.React.createElement("svg",Object.assign({className:l},a))},Wt=[l.DistanceUnits.PIXEL,l.DistanceUnits.PERCENTAGE],Ut=[Yt.LayoutItemSizeModes.Auto,Yt.LayoutItemSizeModes.Stretch,Yt.LayoutItemSizeModes.Custom];class Ft extends t.React.PureComponent{constructor(e){super(e),this.handleChange=e=>{e!==this.props.mode&&this.props.onModeChange(e)},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:l.defaultMessages[e]}):e,this.getPopperStyle=()=>t.css`
      .units-list {
        border-radius: 2px;
        background: var(--ref-palette-neutral-500);
        padding: 2px 0;
        .style-setting--markable-item {
          height: ${t.polished.rem(26)};
        }
        .unit-item {
          justify-content: flex-start;
        }
      }
    `}getStyle(){return t.css`
      background: var(--ref-palette-neutral-300);
      height: 26px;

      .side-label {
        font-size: 10px;
      }

      .prop-label {
        background-color: var(--ref-palette-neutral-500);
        font-size: 12px;
        line-height: 26px;
        color: var(--ref-palette-neutral-900);
      }

      .jimu-dropdown {
        z-index: 0;

        &:focus-within {
          z-index: 1;
        }
      }

      .style-setting--input-unit {
        background: var(--ref-palette-neutral-300);
        border-radius: 2px;
        height: 26px;
        flex-grow: 1;
        z-index: 0;

        &:focus-within {
          z-index: 1;
        }

        input {
          height: 100%;
          font-size: 12px;
          padding: 0;
          text-align: center;
        }
        .style-setting--unit-selector {
          background: var(--ref-palette-neutral-300);
          color: var(--ref-palette-black);
          height: 26px;
          width: auto;
          min-width: 0;
          padding: 0;
          margin-left: 0;
          font-size: 12px;
          border: none;
        }
      }
    `}render(){var e;const{mode:i,value:n,disableModeSelect:a=!1,disabled:s}=this.props;if(s)return(0,t.jsx)("div",{className:"d-flex size-editor w-100",css:this.getStyle()},(0,t.jsx)("div",{title:this.nls(Yt.LayoutItemSizeModes.Auto.toLowerCase()),className:"prop-label px-2 text-truncate text-center w-100"},this.nls(Yt.LayoutItemSizeModes.Auto.toLowerCase())));const o=null!==(e=this.props.sizeModes)&&void 0!==e?e:Ut;return(0,t.jsx)("div",{className:"d-flex size-editor w-100",css:this.getStyle()},!a&&(0,t.jsx)(l.Dropdown,{direction:"down",size:"sm",menuItemCheckMode:"singleCheck"},(0,t.jsx)(l.DropdownButton,{arrow:!0,icon:!0,size:"sm",className:"p-0"}),(0,t.jsx)(l.DropdownMenu,{className:"p-0",css:t.css`min-width: 5rem;`},o.map(((e,n)=>(0,t.jsx)(l.DropdownItem,{active:e===i,"aria-label":this.nls(e.toLowerCase()),key:n,onClick:()=>{this.handleChange(e)}},(0,t.jsx)("div",{className:"d-flex alitn-items-center justify-content-end w-100"},e===i&&(0,t.jsx)(Ht,{className:"mr-2"}),this.nls(e.toLowerCase()))))))),i!==Yt.LayoutItemSizeModes.Custom&&(0,t.jsx)("div",{className:"prop-label flex-grow-1 px-2 text-truncate text-center",title:"function"==typeof(null==i?void 0:i.toLowerCase)&&this.nls(i.toLowerCase())},"function"==typeof(null==i?void 0:i.toLowerCase)&&this.nls(i.toLowerCase())),i===Yt.LayoutItemSizeModes.Custom&&(0,t.jsx)(Z,{units:this.props.availableUnits||Wt,min:0,max:1/0,precision:2,value:Yt.utils.normalizeLinearUnit(n,2),onChange:this.props.onChange}))}}Ft.defaultProps={disableModeSelect:!1,onChange:()=>{}};const Jt=(0,t.injectIntl)(Ft);var Xt=p(35809),Kt=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const $t=(0,a.styled)("div")({display:"flex",flexDirection:"column",width:"100%","> .setting-row":{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"0.75rem",marginBottom:"0"},".jimu-builder--color":{width:"40px",height:"20px"},".fill-type":{width:"50%"}}),_t={fillType:l.FillType.FILL,image:{url:""}},qt=e=>{var i,n,s,o;const{className:r,background:c,applyDefaultValue:p=!0,onChange:d}=e,u=Kt(e,["className","background","applyDefaultValue","onChange"]),g=(0,a.useTheme)(),m=(0,a.useTheme2)(),h=t.hooks.useTranslation(l.defaultMessages),I=null!==(n=null===(i=null==c?void 0:c.image)||void 0===i?void 0:i.originalName)&&void 0!==n?n:"",M=t.React.useId(),y=null==c?void 0:c.color,b=null!==(s=null==c?void 0:c.fillType)&&void 0!==s?s:_t.fillType,x=p?null!==(o=null==c?void 0:c.image)&&void 0!==o?o:_t.image:null==c?void 0:c.image,N=t.React.useMemo((()=>[{value:l.FillType.FIT,label:h("fit")},{value:l.FillType.FILL,label:h("fill")},{value:l.FillType.CENTER,label:h("center")},{value:l.FillType.TILE,label:h("tile")},{value:l.FillType.STRETCH,label:h("stretch")}]),[h]);return t.React.createElement($t,Object.assign({className:(0,t.classNames)(r,"jimu-builder--background-setting")},u),t.React.createElement(ne.SettingRow,{label:h("fill")},t.React.createElement(H.ThemeColorPicker,{className:"ml-auto",value:y,title:h("fillColor"),"aria-label":h("fillColor"),specificTheme:m||g,onChange:e=>{null==d||d({color:e,fillType:b,image:x})}})),t.React.createElement(ne.SettingRow,{className:"background-image",label:h("image")},t.React.createElement(Xt.ImageSelector,Object.assign({widgetId:"background-setting",buttonLabel:h("browse"),buttonSize:"sm",className:"w-50",imageParam:x,onChange:e=>{null==d||d({color:y,fillType:b,image:p?null!=e?e:_t.image:e})},"aria-label":h("browseImage")},I?{"aria-describedby":M}:{},{buttonClassName:"text-dark d-flex justify-content-center btn-browse"})),I&&t.React.createElement("div",{id:M,style:{display:"none"},"aria-label":h("numSelected",{number:I})})),t.React.createElement(ne.SettingRow,{className:"background-image-fill-type",label:h("position")},t.React.createElement(l.Select,{size:"sm",name:"bg-position",value:b,className:"fill-type","aria-label":h("position"),onChange:e=>{const t=e.target.value;null==d||d({color:y,fillType:t,image:x})}},N.map(((e,i)=>{var n;return t.React.createElement("option",{key:i,value:e.value},null!==(n=e.label)&&void 0!==n?n:e.value)})))))};var ei=p(42909),ti=p.n(ei),ii=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const ni=e=>{const i=window.SVG,{className:n}=e,a=ii(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:ti()},a)):t.React.createElement("svg",Object.assign({className:l},a))};var ai=p(97213),li=p.n(ai),si=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const oi=e=>{const i=window.SVG,{className:n}=e,a=si(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:li()},a)):t.React.createElement("svg",Object.assign({className:l},a))};function ri(){const e=t.css`
    position: absolute;
    top: -2px;
    right: -2px;
    .icon-container {
      width: 1rem;
      height: 1rem;
      background: linear-gradient(to top right, transparent 50%, var(--sys-color-primary-light) 50% 100%);
      svg {
        margin-top: 1px;
        margin-right: 1px;
      }
    }
  `;return(0,t.jsx)("div",{css:e},(0,t.jsx)("div",{className:"d-flex justify-content-end align-items-start icon-container"},(0,t.jsx)(oi,{color:"var(--white)",size:8})))}const ci=[null,"primary-100","primary-200","primary-300","light-100","light-300","light-500","light-700"];class pi extends t.React.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{this.setState({isDropdownOpen:!this.state.isDropdownOpen})},this.getStyle=e=>{var i,n;const{theme2:a}=this.props;let l,s;if(null!=e){const t=e.split("-");l=t[0],s=t[1]}return t.css`
      width: 88px;
      height: 24px;
      position: relative;
      &:not(.has-color) {
        border: 2px solid ${null==a?void 0:a.ref.palette.neutral[800]};
        background: linear-gradient(
          to top right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) calc(50% - 1.5px),
          ${null==a?void 0:a.ref.palette.neutral[800]} 50%,
          rgba(0, 0, 0, 0) calc(50% + 1.5px),
          rgba(0, 0, 0, 0) 100%
        );
      }
      &.has-color {
        border: 2px solid ${null===(i=null==a?void 0:a.colors.palette[l])||void 0===i?void 0:i[s]};
        background: ${null===(n=null==a?void 0:a.colors.palette[l])||void 0===n?void 0:n[s]};
      }
    `},this.createItem=(e,i)=>{const{background:n,isCustom:a,onChange:s}=this.props,o=!a&&(null==e?null==n||null==n.color:`var(--${e})`===n.color);return(0,t.jsx)(l.DropdownItem,{key:e,className:"jimu-outline-inside",onClick:()=>{s(!1,{color:null!=e?`var(--${e})`:null,fillType:l.FillType.FILL})},title:0===i?this.translate("none"):this.translate(`backgroundStyle${i}`),"aria-label":0===i?this.translate("none"):this.translate(`backgroundStyle${i}`)},(0,t.jsx)("div",{css:this.getStyle(e),className:(0,t.classNames)("d-flex justify-content-center align-items-center",{"has-color":null!=e})},o&&(0,t.jsx)(ri,null)))},this.translate=e=>{var t,i;const n=Object.assign({},l.defaultMessages);return null===(i=null===(t=this.props)||void 0===t?void 0:t.intl)||void 0===i?void 0:i.formatMessage({id:e,defaultMessage:n[e]})},this.state={isDropdownOpen:!1}}render(){const{className:e,onChange:i,isCustom:n}=this.props;return(0,t.jsx)(l.Dropdown,{isOpen:this.state.isDropdownOpen,className:(0,t.classNames)(e,"jimu-builder--theme-background-setting"),toggle:this.toggleDropdown},(0,t.jsx)(l.Tooltip,{title:this.translate("quickStyle")},(0,t.jsx)(l.DropdownButton,{className:"jimu-outline-inside",icon:!0,type:"tertiary",arrow:!1},(0,t.jsx)(ni,null))),(0,t.jsx)(l.DropdownMenu,{className:"text-truncate",css:t.css`
          min-width: unset;
          padding: 0;
          .popper-box {
            padding: 1rem;
          }
          .dropdown-menu--inner {
            overflow: visible;
          }
          .dropdown-item {
            padding: 0 !important;
            margin-top: 0.5rem;
            &:hover {
              background: transparent !important;
            }
          }
          .jimu-keyboard-nav & .jimu-dropdown-item:focus {
            outline: 2px solid var(--sys-color-primary-dark);
            outline-offset: 2px;
            background: transparent;
          }
        `},ci.map(((e,t)=>this.createItem(e,t))),(0,t.jsx)("div",{className:"my-2 px-2",css:t.css`height: 1px; background-color: var(--ref-palette-neutral-600);`}),(0,t.jsx)(l.DropdownItem,{className:"jimu-outline-inside",onClick:()=>{!n&&i(!0,null)},title:this.translate("custom"),"aria-label":this.translate("custom")},(0,t.jsx)("div",{css:t.css`
                width: 88px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                border: 1px solid var(--ref-palette-neutral-700);
                color: var(--ref-palette-neutral-1000);
                position: relative;
              `,className:"text-truncate px-1"},this.translate("custom"),n&&(0,t.jsx)(ri,null)))))}}pi.defaultProps={background:{color:void 0,fillType:l.FillType.FIT,image:{url:""}},onChange:()=>{}};const di=(0,a.withTheme)((0,t.injectIntl)(pi),!0);function ui(e){const{background:i,onChange:n}=e,[a,s]=t.React.useState(!1),o=t.hooks.useTranslation(l.defaultMessages);t.hooks.useEffectOnce((()=>{var e,t;if(null==i)s(!1);else{if(null!=(null===(e=i.image)||void 0===e?void 0:e.url)&&""!==(null===(t=i.image)||void 0===t?void 0:t.url)||i.fillType!==l.FillType.FILL)return void s(!0);const n=null!=i.color&&""!==i.color&&ci.every((e=>null==e||`var(--${e})`!==i.color));s(n)}}));const r=t.React.useCallback(((e,l)=>{if(e!==a){if(s(e),e)return;return void n(l)}let o=(0,t.Immutable)(null!=i?i:{});for(const e in l)switch(e){case"fillType":o.fillType!==l[e]&&(o=o.set("fillType",l[e]));break;case"color":o=o.set("color",l[e]);break;case"image":o=o.set("image",l[e])}n(o)}),[i,a,n]);return(0,t.jsx)(ne.SettingSection,{role:"group","aria-label":o("background"),title:(0,t.jsx)("div",{className:"d-flex w-100 align-items-center justify-content-between"},(0,t.jsx)("div",{className:"text-truncate title2 hint-paper"},o("background")),(0,t.jsx)(di,{background:i,isCustom:a,onChange:r}))},a&&(0,t.jsx)(qt,{className:"mt-4",background:i,onChange:e=>{r(!0,e)}}))}const gi=[null,"primary-200","primary-400","primary-600","light-300","light-600","light-900","dark-300"];class mi extends t.React.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{this.setState({isDropdownOpen:!this.state.isDropdownOpen})},this.getStyle=e=>{var i;const{theme2:n}=this.props;let a,l;if(null!=e){const t=e.split("-");a=t[0],l=t[1]}return t.css`
      width: 88px;
      height: 24px;
      position: relative;
      &:not(.has-color) {
        border: 2px solid ${null==n?void 0:n.ref.palette.neutral[800]};
        background: linear-gradient(
          to top right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) calc(50% - 1.5px),
          ${null==n?void 0:n.ref.palette.neutral[800]} 50%,
          rgba(0, 0, 0, 0) calc(50% + 1.5px),
          rgba(0, 0, 0, 0) 100%
        );
      }
      &.has-color {
        border: 2px solid ${null===(i=null==n?void 0:n.colors.palette[a])||void 0===i?void 0:i[l]};
      }
    `},this.createItem=(e,i)=>{const{value:n,isCustom:a,onChange:s}=this.props,o=!a&&(null==e?null==n||null==n.color:`var(--${e})`===n.color&&n.type===l.NormalLineType.SOLID&&"2px"===n.width);return(0,t.jsx)(l.DropdownItem,{key:e,className:"jimu-outline-inside",onClick:()=>{s(!1,{color:null!=e?`var(--${e})`:null,type:l.NormalLineType.SOLID,width:"2px"})},title:0===i?this.translate("none"):this.translate(`borderStyle${i}`),"aria-label":0===i?this.translate("none"):this.translate(`borderStyle${i}`)},(0,t.jsx)("div",{css:this.getStyle(e),className:(0,t.classNames)({"has-color":null!=e})},o&&(0,t.jsx)(ri,null)))},this.translate=e=>{var t,i;const n=Object.assign({},l.defaultMessages);return null===(i=null===(t=this.props)||void 0===t?void 0:t.intl)||void 0===i?void 0:i.formatMessage({id:e,defaultMessage:n[e]})},this.state={isDropdownOpen:!1}}render(){const{className:e,isCustom:i,onChange:n}=this.props;return(0,t.jsx)(l.Dropdown,{isOpen:this.state.isDropdownOpen,className:(0,t.classNames)(e,"jimu-builder--theme-border-setting"),toggle:this.toggleDropdown},(0,t.jsx)(l.Tooltip,{title:this.translate("quickStyle")},(0,t.jsx)(l.DropdownButton,{className:"jimu-outline-inside",icon:!0,type:"tertiary",arrow:!1},(0,t.jsx)(ni,null))),(0,t.jsx)(l.DropdownMenu,{className:"text-truncate",css:t.css`
          min-width: unset;
          padding: 0;
          .popper-box {
            padding: 1rem;
          }
          .dropdown-menu--inner {
            overflow: visible;
          }
          .dropdown-item {
            padding: 0 !important;
            margin-top: 0.5rem;
            &:hover {
              background: transparent !important;
            }
          }
          .jimu-keyboard-nav & .jimu-dropdown-item:focus {
            outline: 2px solid var(--sys-color-primary-dark);
            outline-offset: 2px;
            background: transparent;
          }
        `},gi.map(((e,t)=>this.createItem(e,t))),(0,t.jsx)("div",{className:"my-2 px-2",css:t.css`height: 1px; background-color: var(--ref-palette-neutral-600);`}),(0,t.jsx)(l.DropdownItem,{className:"jimu-outline-inside",onClick:()=>{!i&&n(!0,null)},title:this.translate("custom"),"aria-label":this.translate("custom")},(0,t.jsx)("div",{css:t.css`
                width: 88px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                border: 1px solid var(--ref-palette-neutral-700);
                color: var(--ref-palette-neutral-1000);
                position: relative;
              `,className:"text-truncate px-1"},this.translate("custom"),i&&(0,t.jsx)(ri,null)))))}}mi.defaultProps={value:{color:void 0,type:l.NormalLineType.SOLID,width:"2px"},onChange:()=>{}};const hi=(0,a.withTheme)((0,t.injectIntl)(mi),!0);function Ii(e){const{border:i,borderTop:n,borderLeft:a,borderRight:s,borderBottom:o,borderRadius:r,onBorderChange:c,onBorderSideChange:p,onBorderRadiusChange:d}=e,[u,g]=t.React.useState(!1),m=t.hooks.useTranslation(l.defaultMessages);t.React.useEffect((()=>{if(null==r)if(null==n&&null==a&&null==s&&null==o)if(null==i)g(!1);else{const e=i.type!==l.NormalLineType.SOLID||"2px"!==i.width||null!=i.color&&""!==i.color&&gi.every((e=>null==e||`var(--${e})`!==i.color));g(e)}else g(!0);else g(!0)}),[i,n,a,s,o,r]);const h=t.React.useCallback(((e,i)=>{e!==u&&(g(e),e)||(d(null),t.lodash.defer((()=>{c(i)})))}),[u,c,d]);return(0,t.jsx)(ne.SettingSection,{role:"group","aria-label":m("border"),title:(0,t.jsx)("div",{className:"d-flex w-100 align-items-center justify-content-between"},(0,t.jsx)("div",{className:"text-truncate title2 hint-paper"},m("border")),(0,t.jsx)(hi,{value:i,isCustom:u,onChange:h}))},u&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(ne.SettingRow,{flow:"wrap"},(0,t.jsx)(ie,{value:i,top:n,left:a,right:s,bottom:o,onSideChange:p,onChange:c})),(0,t.jsx)(ne.SettingRow,{flow:"wrap",label:m("borderRadius")},(0,t.jsx)(Ee,{value:r,onChange:d}))))}const Mi={none:"shadow-none",small:"shadow-sm",default:"shadow",large:"shadow-lg"};class yi extends t.React.PureComponent{constructor(e){super(e),this.translate=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:l.defaultMessages[e]}):e,this.toggleDropdown=()=>{this.setState({isDropdownOpen:!this.state.isDropdownOpen})},this.getStyle=()=>t.css`
      font-size: 13px;
      line-height: 18px;
    `,this.onCustomModeClick=()=>{if(this.props.isCustom)return;const{onChange:e,value:t}=this.props;if(null!=(null==t?void 0:t.presetStyle)){const i=Object.keys(Mi).find((e=>Mi[e]===t.presetStyle));if(i){const t=function(e){const t=(0,a.getTheme2)();let i;switch(e){case"none":i="none";break;case"small":i=t.sys.shadow.shadow1;break;case"large":i=t.sys.shadow.shadow3;break;default:i=t.sys.shadow.shadow2}if(i){const e=i.split(" ");if(e.length>=5){const t=i.lastIndexOf(e[3]);return{offsetX:e[0],offsetY:e[1],blur:e[2],spread:e[3],color:i.substring(t+e[3].length).trim()}}}return null}(i);if(t)return void e(!0,t)}}e(!0,{})},this.createItem=e=>{const{value:i,isCustom:n,onChange:a}=this.props,s=!n&&(i.presetStyle===Mi[e]||"none"===e&&this.isEmpty());return(0,t.jsx)(l.DropdownItem,{css:this.getStyle(),"aria-label":this.translate(e),key:e,active:s,onClick:()=>{a(!1,{presetStyle:Mi[e]})}},(0,t.jsx)("div",{className:"d-flex w-100 align-items-center text-truncate"},s&&(0,t.jsx)(Ht,null),!s&&(0,t.jsx)("div",{css:t.css`width: 1rem;`}),(0,t.jsx)("div",{className:"flex-grow-1 ml-2"},this.translate(e))))},this.state={isDropdownOpen:!1}}isEmpty(){const{value:e}=this.props;return null==e||(null==e.presetStyle||e.presetStyle===Mi.none)&&["offsetX","offsetY","blur","spread"].every((t=>null==e[t]||0===parseInt(e[t])))}render(){const{className:e,isCustom:i}=this.props;return(0,t.jsx)(l.Dropdown,{isOpen:this.state.isDropdownOpen,className:(0,t.classNames)(e,"jimu-builder--theme-bx-setting"),toggle:this.toggleDropdown},(0,t.jsx)(l.Tooltip,{title:this.translate("quickStyle")},(0,t.jsx)(l.DropdownButton,{icon:!0,type:"tertiary",arrow:!1,className:"jimu-outline-inside"},(0,t.jsx)(ni,null))),(0,t.jsx)(l.DropdownMenu,{className:"text-truncate"},Object.keys(Mi).map((e=>this.createItem(e))),(0,t.jsx)("div",{className:"my-2 px-2",css:t.css`height: 1px; background-color: var(--ref-palette-neutral-600);`}),(0,t.jsx)(l.DropdownItem,{active:i,onClick:this.onCustomModeClick},(0,t.jsx)("div",{className:"d-flex w-100 align-items-center text-truncate"},i&&(0,t.jsx)(Ht,null),!i&&(0,t.jsx)("div",{css:t.css`width: 1rem;`}),(0,t.jsx)("div",{className:"flex-grow-1 ml-2"},this.translate("custom"))))))}}yi.defaultProps={value:{offsetX:"0px",offsetY:"0px",blur:"0px",spread:"0px",color:void 0},onChange:()=>{}};const bi=(0,t.injectIntl)(yi);function xi(e){const{value:i,onChange:n}=e,[a,s]=t.React.useState(!1),o=t.hooks.useTranslation(l.defaultMessages);t.React.useEffect((()=>{s(null!=i&&null==(null==i?void 0:i.presetStyle))}),[i]);const r=t.React.useCallback(((e,t)=>{e!==a&&s(e),n(t)}),[a,n]);return(0,t.jsx)(ne.SettingSection,{role:"group","aria-label":o("boxShadow"),title:(0,t.jsx)("div",{className:"d-flex w-100 align-items-center justify-content-between"},(0,t.jsx)("div",{className:"text-truncate title2 hint-paper"},o("boxShadow")),(0,t.jsx)(bi,{value:i,isCustom:a,onChange:r}))},a&&(0,t.jsx)(se,{className:"mt-4",value:i,onChange:n}))}var Ni=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const vi=(0,a.styled)("div")({".color-picker-block":{marginRight:"9px"}}),wi=e=>{const i=(0,a.useTheme2)(),{onChange:n,color:l,applyDefaultValue:s=!0,size:o,className:r}=e,c=Ni(e,["onChange","color","applyDefaultValue","size","className"]),p=s?null!=o?o:"12px":o;return t.React.createElement(vi,Object.assign({className:(0,t.classNames)("size-color-setting d-flex",r)},c),t.React.createElement(H.ThemeColorPicker,{specificTheme:i,value:l,onChange:e=>{null==n||n("color",e)}}),t.React.createElement(Z,{placeholder:"##",applyDefaultValue:s,value:p,onChange:e=>{var t,i;const a=s?null!==(t=null==e?void 0:e.distance)&&void 0!==t?t:0:null==e?void 0:e.distance,l=null!==(i=null==e?void 0:e.unit)&&void 0!==i?i:"px";null==n||n("size",null!=a?`${a}${l}`:null)}}))},ji=e=>{const i=(0,a.useTheme2)(),{onlyBorderColor:n,icon:s,onChange:o,variant:r,hideTextStyle:c,onResetStyles:p}=e,{bold:d,italic:u,underline:g,strike:m,color:h,bg:I,size:M,border:y,borderTop:b,borderBottom:x,borderLeft:N,borderRight:v,borderRadius:w,icon:j}=r||{},f=t.hooks.useTranslation(l.defaultMessages,t.defaultMessages),C=w?t.polished.getValueAndUnit("none"===w?"0px":l.styleUtils.remToPixel(w||"0rem")):null,z=(0,t.Immutable)({number:[null==C?void 0:C[0]],unit:null==C?void 0:C[1]}),D=(e,i)=>{!i||Object.keys(i).every((e=>!i[e]))?o(e,null):o(e,Object.keys(i).reduce(((e,t)=>e[t]?e:e.without(t)),(0,t.Immutable)(i)))},A=e=>null==e||"transparent"===e,O=e=>null==e||!(null==e?void 0:e.width)&&!(null==e?void 0:e.type)&&A(null==e?void 0:e.color),S=null==d&&null==u&&null==g&&null==m&&null==M&&A(h),T=null==j||!(null==j?void 0:j.size)&&A(null==j?void 0:j.color),L=O(y),E=L&&O(b)&&O(x)&&O(N)&&O(v),k=null==w||""===w,P=e=>{p&&p("text"===e?["bold","italic","underline","strike","size","color"]:"border"===e?["border","borderTop","borderBottom","borderLeft","borderRight"]:[e])};return t.React.createElement(t.React.Fragment,null,!c&&t.React.createElement(ne.CollapsableResetPanel,{label:f("text"),role:"group","aria-label":f("text"),isEmpty:S,onReset:()=>{P("text")}},t.React.createElement(Nt,{bold:d,italic:u,underline:g,strike:m,size:M,color:h,applyDefaultValue:!1,onChange:o})),s&&t.React.createElement(ne.CollapsableResetPanel,{label:f("icon"),role:"group","aria-label":f("icon"),isEmpty:T,onReset:()=>{P("icon")}},t.React.createElement(wi,{className:"fill-width",color:null==j?void 0:j.color,size:null==j?void 0:j.size,applyDefaultValue:!1,onChange:(e,t)=>{D("icon",Object.assign(Object.assign({},j),{[e]:t}))}})),t.React.createElement(ne.CollapsableResetPanel,{label:f("background"),role:"group","aria-label":f("background"),isEmpty:A(I),onReset:()=>{P("bg")}},t.React.createElement(ne.SettingRow,{flow:"no-wrap",label:f("fill"),role:"group","aria-label":f("fill")},t.React.createElement(H.ThemeColorPicker,{specificTheme:i,value:I,onChange:e=>{o("bg",e||null)}}))),n&&t.React.createElement(ne.CollapsableResetPanel,{label:f("underline"),role:"group","aria-label":f("underline"),isEmpty:L,onReset:()=>{P("border")}},t.React.createElement(wi,{className:"fill-width",color:null==y?void 0:y.color,size:null==y?void 0:y.width,applyDefaultValue:!1,onChange:(e,t)=>{e="size"===e?"width":e,D("border",Object.assign(Object.assign({},y),{[e]:t}))}})),!n&&t.React.createElement(ne.CollapsableResetPanel,{label:f("border"),role:"group","aria-label":f("border"),isEmpty:E,onReset:()=>{P("border")}},t.React.createElement(ie,{value:y,top:b,bottom:x,left:N,right:v,applyDefaultValue:!1,onChange:e=>{D("border",e)},onSideChange:(e,i)=>{D(t.lodash.camelCase(`border-${e}`),i)}})),t.React.createElement(ne.CollapsableResetPanel,{label:f("borderRadius"),role:"group","aria-label":f("borderRadius"),isEmpty:k,onReset:()=>{P("borderRadius")}},t.React.createElement(Ee,{separated:!1,value:z,applyDefaultValue:!1,onChange:e=>{var t,i;o("borderRadius",null!=(null===(t=e.number)||void 0===t?void 0:t[0])?`${null===(i=e.number)||void 0===i?void 0:i[0]}${null==e?void 0:e.unit}`:null)}})))},fi=e=>{const{onChange:i,variant:n,onResetStyles:a}=e,{icon:l}=n||{},s=t.hooks.useTranslation(t.defaultMessages);return t.React.createElement(ne.CollapsableResetPanel,{label:s("icon"),role:"group","aria-label":s("icon"),isEmpty:null==l,onReset:()=>{null==a||a(["icon"])}},t.React.createElement(wi,{className:"fill-width",color:null==l?void 0:l.color,size:null==l?void 0:l.size,applyDefaultValue:!1,onChange:(e,t)=>{const n=Object.assign(Object.assign({},l||{}),{[e]:t});i("icon",Object.keys(n).every((e=>!n[e]))?null:n)}}))},Ci=e=>"default"===e?"default":"active"===e?"selected":e,zi=e=>{const{variant:i,onChange:n,states:a=["default","active","hover"],icon:s,text:o,hideTextStyle:r,iconInText:c,onlyBorderColor:p,onWholeVariantChange:d}=e,u=t.React.useMemo((()=>{var e;return t.css`
      .tab-title-item{
        width: ${null!==(e=100/(null==a?void 0:a.length))&&void 0!==e?e:1}%;
      }
     .style-setting--input-unit {
        width: ${t.polished.rem(80)};
      }
      ${""}
      .tab-content {
        padding-top: 8px;
        overflow: visible;
        .jimu-collapsable-panel {
          margin: 5px 0;
        }
      }
      .fill-width.size-color-setting {
        .style-setting--input-unit {
          flex: 1;
        }
      }
    `}),[a]),g=t.hooks.useTranslation(l.defaultMessages),m=(e,t)=>{var n;let a=null===(n=null==i?void 0:i.item)||void 0===n?void 0:n[e];if(a)if(t.forEach((e=>{null!=(null==a?void 0:a[e])&&(a=a.without(e))})),Object.keys(a).length)d(i.setIn(["item",e],a));else{const t=i.item.without(e);if(Object.keys(t).length)d(i.set("item",t));else{const e=i.without("item");d(Object.keys(e).length?e:null)}}};return(0,t.jsx)(ne.SettingRow,{flow:"wrap",className:"w-100"},(0,t.jsx)(l.Tabs,{type:"pills",className:"flex-grow-1 w-100 h-100",fill:!0,css:u,defaultValue:"0"},a.map(((e,a)=>{var d,u;return(0,t.jsx)(l.Tab,{id:a+"",key:a,className:"tab-title-item",title:g(Ci(e))},s&&(0,t.jsx)(fi,{variant:null===(d=null==i?void 0:i.item)||void 0===d?void 0:d[e],onChange:(t,i)=>{n(e,t,i)},onResetStyles:t=>{m(e,t)}}),o&&(0,t.jsx)(ji,{variant:null===(u=null==i?void 0:i.item)||void 0===u?void 0:u[e],icon:c,onlyBorderColor:p,hideTextStyle:r,onChange:(t,i)=>{n(e,t,i)},onResetStyles:t=>{m(e,t)}}))}))))};var Di=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const{useMemo:Ai}=t.React,Oi=p(12907),Si=p(5887),Ti=p(62053),Li=p(83614),Ei=p(78290),ki=e=>{const{size:i=12}=e,n=Di(e,["size"]),a=(e=>{const i=t.hooks.useTranslation(l.defaultMessages);return Ai((()=>[l.utils.toIconResult(Oi,i("drawToolDot"),e),l.utils.toIconResult(Si,i("pill"),e),l.utils.toIconResult(Ti,i("rhombus"),e),l.utils.toIconResult(Li,i("hollowCircle"),e),l.utils.toIconResult(Ei,i("filledDoubleCircle"),e)]),[e,i])})(i);return t.React.createElement(Xt.IconPicker,Object.assign({groups:"none",customIcons:a},n))},Pi=p(69572),Ri=p(78296),Bi=p(27833),Zi=p(17143),Yi=p(26346),Gi=p(68623),Vi=p(11047),Qi=[{icon:Pi,type:t.AnimationType.None},{type:t.AnimationType.FadeIn,icon:Ri,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView]},{type:t.AnimationType.FloatIn,icon:Bi,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView],supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{type:t.AnimationType.FlyIn,icon:Zi,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView],supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{type:t.AnimationType.SpinIn,icon:Yi,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView]},{type:t.AnimationType.WipeIn,icon:Gi,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView],supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{type:t.AnimationType.ZoomIn,icon:Vi,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView]}],Hi=[{icon:Pi,type:t.AnimationType.None},{icon:Ri,type:t.AnimationType.FadeIn},{icon:Bi,type:t.AnimationType.FloatIn,supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{icon:Gi,type:t.AnimationType.WipeIn,supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{icon:Vi,type:t.AnimationType.ZoomIn}];var Wi=p(30655),Ui=p.n(Wi),Fi=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const Ji=e=>{const i=window.SVG,{className:n}=e,a=Fi(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:Ui()},a)):t.React.createElement("svg",Object.assign({className:l},a))};var Xi=p(32004),Ki=p.n(Xi),$i=p(12971),_i=p.n($i),qi=p(96300),en=p.n(qi),tn=p(45075),nn=p.n(tn),an=p(27961),ln=p.n(an);class sn extends t.React.PureComponent{constructor(){super(...arguments),this.onWidgetEffectTypeChanged=(e,i)=>{e.stopPropagation();const n=(0,t.Immutable)(this.props.effectSetting||{});(null==n?void 0:n.type)===i?this.props.onPreviewClicked():this.props.isOneByOne?this.props.onSettingChange(n.set("type",i).setIn(["option","direction"],null).setIn(["option","start"],t.AnimationStartMode.AfterPrevious).setIn(["option","parentMode"],t.ParentAnimationMode.OneByOne)):this.props.onSettingChange(n.set("type",i).setIn(["option","direction"],null))},this.onDurationChange=e=>{const i=(0,t.Immutable)(this.props.effectSetting||{});this.props.onSettingChange(i.setIn(["option","configType"],e.target.value))},this.onStartModeChange=e=>{const i=(0,t.Immutable)(this.props.effectSetting||{});this.props.onSettingChange(i.setIn(["option","start"],e.target.value))},this.onParentModeChange=e=>{const i=(0,t.Immutable)(this.props.effectSetting||{});this.props.onSettingChange(i.setIn(["option","parentMode"],e.target.value))},this.onWidgetEffectDirectionChanged=e=>{const i=(0,t.Immutable)(this.props.effectSetting||{});this.props.onSettingChange(i.setIn(["option","direction"],e.target.value))}}createAnimationCard(e,i){const{effectSetting:n}=this.props,a=(null==n?void 0:n.type)||t.AnimationType.None;return(0,t.jsx)("div",{className:(0,t.classNames)("d-flex flex-column align-items-center card-item",{selected:e.type===a}),key:i},(0,t.jsx)(l.Button,{icon:!0,role:"option","aria-label":this.props.formatMessage(e.type.toLowerCase()),"aria-selected":e.type===a,className:"d-flex justify-content-center card-content border-0",onClick:t=>{this.onWidgetEffectTypeChanged(t,e.type)}},(0,t.jsx)(l.Icon,{className:"w-100",currentColor:!1,icon:e.icon||ln(),size:72})),(0,t.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1"},(0,t.jsx)("span",{className:"text-center card-name-content",title:this.props.formatMessage(e.type.toLowerCase())},this.props.formatMessage(e.type.toLowerCase()))))}chooseDirectionIcon(e){switch(e){case t.AnimationDirection.Bottom:return Ki();case t.AnimationDirection.Left:return nn();case t.AnimationDirection.Right:return en();case t.AnimationDirection.Top:return _i();default:return null}}createEffectDirectionChooser(e){var i;const{effectSetting:n}=this.props;return(0,t.jsx)("div",{className:"direction-select px-4 mb-4"},(0,t.jsx)("div",{className:"effect-title mb-2"},this.props.formatMessage("direction")),(0,t.jsx)(l.Select,{defaultValue:t.AnimationDirection.Top,value:null===(i=null==n?void 0:n.option)||void 0===i?void 0:i.direction,onChange:this.onWidgetEffectDirectionChanged,size:"sm","aria-label":this.props.formatMessage("direction")},e.map(((e,i)=>(0,t.jsx)("option",{value:e,key:i},(0,t.jsx)(l.Icon,{className:"mx-1",icon:this.chooseDirectionIcon(e),size:12}),this.props.formatMessage(e.toLowerCase()))))))}getStyle(){return t.css`
      .animation-cards {
        padding: 0 16px 16px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 12px;
        grid-column-gap: 12px;
      }

      .separator {
        width: calc(100% - 2rem);
        height: 1px;
        margin: 0 1rem 1rem;
        background: var(--ref-palette-neutral-500);
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

        .card-name {
          max-width: 90px;
          margin: 0 auto;
          color: var(--ref-palette-neutral-1100);
          .card-name-content {
            line-height: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    `}render(){var e,i,n,a,s,o;const{formatMessage:r,effectSetting:c,metaInfos:p,isRoot:d,isOneByOne:u}=this.props,g=p.find((e=>e.type===(null==c?void 0:c.type))),m=null!=c&&c.type!==t.AnimationType.None;return(0,t.jsx)("div",{className:"bg-default border-color-gray-400",css:this.getStyle()},(0,t.jsx)("div",{className:"w-100 h-100 animation-panel-border"},(0,t.jsx)(l.ButtonGroup,{role:"listbox",className:"animation-cards"},p.map(((e,t)=>this.createAnimationCard(e,t)))),g&&g.type!==t.AnimationType.None&&(0,t.jsx)("div",{className:"separator"}),g&&g.type!==t.AnimationType.None&&(0,t.jsx)("div",{className:"duration-input px-4 mb-4"},(0,t.jsx)("div",{className:"effect-title mb-2"},this.props.formatMessage("effect")),(0,t.jsx)(l.Select,{value:null!==(i=null===(e=null==c?void 0:c.option)||void 0===e?void 0:e.configType)&&void 0!==i?i:t.AnimationEffectType.Default,onChange:this.onDurationChange,size:"sm","aria-label":this.props.formatMessage("effect")},Object.entries(t.AnimationEffectType).map((([e,i],n)=>(0,t.jsx)("option",{key:n,value:i},r(e.toLowerCase())))))),(null==g?void 0:g.supportedDirections)&&this.createEffectDirectionChooser(g.supportedDirections),!d&&m&&u&&(0,t.jsx)("div",{className:"start-input px-4 mb-4"},(0,t.jsx)("div",{className:"effect-title mb-2"},this.props.formatMessage("start")),(0,t.jsx)(l.Select,{value:null!==(a=null===(n=null==c?void 0:c.option)||void 0===n?void 0:n.start)&&void 0!==a?a:t.AnimationStartMode.WithPrevious,onChange:this.onStartModeChange,size:"sm","aria-label":this.props.formatMessage("start")},Object.entries(t.AnimationStartMode).map((([e,i],n)=>(0,t.jsx)("option",{key:n,value:i},r(e.toLowerCase())))))),m&&u&&(0,t.jsx)("div",{className:"start-input px-4 mb-4"},(0,t.jsx)("div",{className:"effect-title mb-2"},this.props.formatMessage("playAnimation")),(0,t.jsx)(l.Select,{value:null!==(o=null===(s=null==c?void 0:c.option)||void 0===s?void 0:s.parentMode)&&void 0!==o?o:t.ParentAnimationMode.OneByOne,onChange:this.onParentModeChange,size:"sm","aria-label":this.props.formatMessage("playAnimation")},Object.entries(t.ParentAnimationMode).map((([e,i],n)=>(0,t.jsx)("option",{key:n,value:i},r(e.toLowerCase()))))))))}}class on extends t.React.PureComponent{constructor(e){super(e),this.onAsOneSettingChange=e=>{this.props.onSettingChange(t.AnimationPlayMode.AsOne,e)},this.onOneByOneSettingChange=e=>{this.props.onSettingChange(t.AnimationPlayMode.OneByOne,e)},this.previewAsOne=()=>{this.props.onPreviewClicked(t.AnimationPlayMode.AsOne)},this.previewOneByOne=()=>{this.props.onPreviewClicked(t.AnimationPlayMode.OneByOne)},this.toggleAsOneOpened=()=>{this.setState({asOneOpened:!this.state.asOneOpened})},this.toggleOneByOneOpened=()=>{this.setState({oneByOneOpened:!this.state.oneByOneOpened})},this.state={asOneOpened:!0,oneByOneOpened:!(this.props.supportAsOne&&this.props.supportOneByOne)}}getStyle(){return t.css`
      .sub-header {
        padding: 0.5rem 0.5rem 0.5rem 1rem;

        .title {
          font-size: 14px;
        }
      }
    `}render(){const{formatMessage:e,supportOneByOne:i,supportAsOne:n,effectSetting:a,oneByOneSetting:s}=this.props,o=i&&n;return(0,t.jsx)("div",{className:"bg-default border-color-gray-400",css:this.getStyle()},n&&(0,t.jsx)(ne.SettingSection,{className:"p-0",title:(0,t.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center sub-header"},(0,t.jsx)("div",{className:"text-truncate title",title:`${i&&this.props.selectedWidgetLabel}`,css:t.css`max-width: 80%;`},i&&this.props.selectedWidgetLabel),o&&(0,t.jsx)(l.Button,{size:"sm",type:"tertiary",icon:!0,onClick:this.toggleAsOneOpened},(0,t.jsx)(Ji,{size:"s",rotate:this.state.asOneOpened?180:0})))},(0,t.jsx)(l.Collapse,{isOpen:this.state.asOneOpened,className:"mt-0"},(0,t.jsx)(sn,{effectSetting:a,metaInfos:Qi,onSettingChange:this.onAsOneSettingChange,previewEnabled:!0,onPreviewClicked:this.previewAsOne,formatMessage:e}))),i&&(0,t.jsx)(ne.SettingSection,{className:"p-0",title:(0,t.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center sub-header"},(0,t.jsx)("div",{className:"text-truncate title",title:`${n&&e("widgetByWidget")}`,css:t.css`max-width: 80%;`},n&&e("widgetByWidget")),o&&(0,t.jsx)(l.Button,{size:"sm",type:"tertiary",icon:!0,onClick:this.toggleOneByOneOpened},(0,t.jsx)(Ji,{size:"s",rotate:this.state.oneByOneOpened?180:0})))},(0,t.jsx)(l.Collapse,{isOpen:this.state.oneByOneOpened,className:"mt-0"},(0,t.jsx)(sn,{effectSetting:s,metaInfos:Hi,onSettingChange:this.onOneByOneSettingChange,previewEnabled:!0,isOneByOne:!0,isRoot:this.props.isRoot,onPreviewClicked:this.previewOneByOne,formatMessage:e}))))}}const rn=t.ReactRedux.connect((function(e){var i,n,a,l,s,o;const r=e.appStateInBuilder,c=null==r?void 0:r.appConfig,p=null===(i=null==r?void 0:r.appRuntimeInfo)||void 0===i?void 0:i.selection;if(p){const{layoutId:e,layoutItemId:i}=p,o=null===(l=null===(a=null===(n=c.layouts)||void 0===n?void 0:n[e])||void 0===a?void 0:a.content)||void 0===l?void 0:l[i];if((null==o?void 0:o.type)===t.LayoutItemType.Widget){const e=c.widgets[o.widgetId];return{selectedWidgetLabel:null!==(s=null==e?void 0:e.label)&&void 0!==s?s:""}}}else{const e=null===(o=null==r?void 0:r.appRuntimeInfo)||void 0===o?void 0:o.currentDialogId;if(e&&c.dialogs[e]){return{selectedWidgetLabel:c.dialogs[e].label}}}return{selectedWidgetLabel:""}}))(on);var cn=p(97408),pn=p.n(cn),dn=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const un=e=>{const i=window.SVG,{className:n}=e,a=dn(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:pn()},a)):t.React.createElement("svg",Object.assign({className:l},a))};var gn=p(45508),mn=p.n(gn),hn=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const In=e=>{const i=window.SVG,{className:n}=e,a=hn(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:mn()},a)):t.React.createElement("svg",Object.assign({className:l},a))},Mn=p(69572);class yn extends t.React.PureComponent{constructor(e){super(e),this.sidePopperTrigger=t.React.createRef(),this.buttonRef=t.React.createRef(),this.toggleSidePanel=()=>{this.setState({showSidePanel:!this.state.showSidePanel})},this.previewAnimation=e=>{e.stopPropagation(),this.props.onPreviewClicked(null)},this.state={showSidePanel:!1}}componentDidUpdate(e){this.props.contentId!==e.contentId&&this.state.showSidePanel&&this.setState({showSidePanel:!1})}getAnimBoxStyle(){return t.css`
      background-color: transparent;
      position: relative;
      width: 100%;
      height: 72px;

      .img-tip {
        position: relative;
        min-width: 90px;
        height: 72px;
        cursor: pointer;

        &, &:hover {
          background: var(--ref-palette-neutral-300);
        }

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

          .jimu-rtl & {
            transform: rotateZ(45deg);
          }
        }
      }

      .amin-icons  {
        display: inline-grid;
        grid-template-columns: auto 26px;
        grid-column-gap: .5rem;
        .jimu-icon {
          margin-right: 0;
        }
      }
      .anim-labels {
        align-self: stretch;
        .anim-label {
          flex-grow: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          word-break: break-word;
          -webkit-line-clamp: 2;
        }
      }
    `}getSidePopperStyle(){return t.css`
      .header {
        height: 60px;
        padding: 0 0.5rem;
      }
      .side-popper-title {
        color: var(--ref-palette-neutral-1000);
        font-size: 16px;
      }
      .effect-title {
        color: var(--ref-palette-neutral-1000);
        font-size: 13px;
      }
      .side-content {
        position: relative;
        width: 100%;
        overflow: auto;
      }
    `}render(){var e,i;const{effectSetting:n,oneByOneSetting:a,formatMessage:s,previewEnabled:o,supportAsOne:r,supportOneByOne:c}=this.props,p=Qi.find((e=>e.type===(null==n?void 0:n.type))),d=Hi.find((e=>e.type===(null==a?void 0:a.type))),u=r&&c,g=u?32:48,m=(null==n?void 0:n.type)?s(n.type.toLowerCase()):s("none"),h=(null==a?void 0:a.type)?s(a.type.toLowerCase()):s("none");let I="";return r&&(I+=m),u&&(I+="/"),c&&(I+=h),(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"anima-box d-flex justify-content-center align-items-center",css:this.getAnimBoxStyle()},(0,t.jsx)(l.Button,{className:"img-tip d-flex justify-content-center align-items-center border-0",onClick:this.toggleSidePanel,title:I,"aria-label":I,icon:!0,type:"tertiary",disableHoverEffect:!0},r&&(0,t.jsx)("div",{className:(0,t.classNames)("anim-icon first",{"has-sibling":u})},(0,t.jsx)(l.Icon,{icon:(null==p?void 0:p.icon)||Mn,size:g})),u&&(0,t.jsx)("div",{className:"diag-sep"}),c&&(0,t.jsx)("div",{className:(0,t.classNames)("anim-icon second",{"has-sibling":u})},(0,t.jsx)(l.Icon,{icon:(null==d?void 0:d.icon)||Mn,size:g}))),(0,t.jsx)("div",{className:"d-flex flex-column justify-content-between align-items-center ml-2 h-100 flex-grow-1"},(0,t.jsx)("div",{className:"anim-labels d-flex"},(0,t.jsx)("div",{className:"anim-label",title:`${m}${u?" / ":""}${c?h:""}`},r&&(0,t.jsx)("span",null,m),u&&(0,t.jsx)("span",{className:"mx-1"},"/"),c&&(0,t.jsx)("span",null,h)),(0,t.jsx)(l.Tooltip,{title:s("scrollIntoView")},(0,t.jsx)(l.Button,{className:"p-0",icon:!0,type:"tertiary",size:"sm",disableHoverEffect:!0,disableRipple:!0},(0,t.jsx)(In,{size:"m"})))),(0,t.jsx)("div",{className:"amin-icons w-100",ref:this.sidePopperTrigger},(0,t.jsx)(l.Button,{size:"sm",ref:this.buttonRef,onClick:this.toggleSidePanel,className:"text-truncate",title:s("change")},s("change")),(0,t.jsx)(l.Tooltip,{title:s("preview"),placement:"bottom"},(0,t.jsx)(l.Button,{type:"default",size:"sm",icon:!0,disabled:!o,onClick:this.previewAnimation},(0,t.jsx)(un,{size:"s"})))))),(0,t.jsx)(ne.SidePopper,{isOpen:this.state.showSidePanel,css:this.getSidePopperStyle(),position:"right",toggle:this.toggleSidePanel,trigger:null===(e=this.sidePopperTrigger)||void 0===e?void 0:e.current,title:s("animationSetting"),backToFocusNode:null===(i=this.buttonRef)||void 0===i?void 0:i.current},(0,t.jsx)("div",{className:"side-content"},(0,t.jsx)(rn,Object.assign({},this.props)))))}}yn.defaultProps={onSettingChange:()=>{},previewEnabled:!0,supportOneByOne:!1,onPreviewClicked:()=>{},formatMessage:e=>e};const bn=p(23976),xn=p(49044),Nn=p(29903),vn=p(55629),wn=p(48686),jn=p(61851),fn=[{icon:bn,type:t.TransitionType.None},{type:t.TransitionType.Box,icon:Nn,supportDirection:!0},{type:t.TransitionType.Cover,icon:jn,supportDirection:!0},{type:t.TransitionType.Cube,icon:vn,supportDirection:!0},{type:t.TransitionType.Fade,icon:xn},{type:t.TransitionType.Push,icon:wn,supportDirection:!0}],Cn=p(69572);class zn extends t.React.PureComponent{constructor(e){super(e),this.sidePopperTrigger=t.React.createRef(),this.buttonRef=t.React.createRef(),this.modalStyle={position:"absolute",top:"60px",bottom:"0",width:"100%",height:"auto",paddingBottom:"1px"},this.toggleSidePanel=()=>{this.setState({showSidePanel:!this.state.showSidePanel})},this.previewTransition=e=>{e.stopPropagation(),this.props.onPreviewTransitionClicked()},this.onTransitionTypeChanged=e=>{var t,i;(null===(t=this.props.transition)||void 0===t?void 0:t.type)===e?this.props.onPreviewTransitionClicked():this.props.onTransitionChange({type:e,direction:null===(i=this.props.transition)||void 0===i?void 0:i.direction})},this.onDirectionChanged=e=>{var t;this.props.onTransitionChange({type:null===(t=this.props.transition)||void 0===t?void 0:t.type,direction:e.target.value})},this.previewOneByOneEffect=()=>{this.props.onPreviewOneByOneClicked()},this.onPreviewAsAWhoneClicked=e=>{e.stopPropagation(),this.props.onPreviewAsAWhoneClicked()},this.onOnebyOneSettingChange=(e,t)=>{this.props.onOneByOneChange(t)},this.state={showSidePanel:!1}}createTransitionCard(e,i){const{transition:n}=this.props,a=n.type||t.TransitionType.None;return(0,t.jsx)("div",{className:(0,t.classNames)("d-flex flex-column align-items-center card-item",{selected:e.type===a}),key:i},(0,t.jsx)(l.Button,{icon:!0,role:"option","aria-label":this.props.formatMessage(e.type.toLowerCase()),"aria-selected":e.type===a,className:"d-flex justify-content-center card-content border-0",onClick:()=>{this.onTransitionTypeChanged(e.type)}},(0,t.jsx)(l.Icon,{className:"w-100 h-100",currentColor:!1,icon:e.icon||Cn})),(0,t.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1"},(0,t.jsx)("span",{className:"text-center card-name-content",title:this.props.formatMessage(e.type.toLowerCase())},this.props.formatMessage(e.type.toLowerCase()))))}createDirectionChooser(){const{transition:e}=this.props;return(0,t.jsx)("div",{className:"direction-select px-4"},(0,t.jsx)("div",{className:"direction-title mb-2"},this.props.formatMessage("direction")),(0,t.jsx)(l.Select,{defaultValue:t.TransitionDirection.Horizontal,value:null==e?void 0:e.direction,onChange:this.onDirectionChanged,size:"sm"},Object.entries(t.TransitionDirection).map(((e,i)=>(0,t.jsx)("option",{value:e[1],key:i},this.props.formatMessage(e[0].toLowerCase()))))))}getSidePopperStyle(){return t.css`
      .tab-pane {
        position: relative;
      }
      .header {
        height: 60px;
        padding: 0 0.5rem;
        border-bottom: none;
      }
      .side-popper-title {
        color: var(--ref-palette-neutral-1000);
        font-size: 16px;
      }
      .direction-title {
        color: var(--ref-palette-neutral-1000);
        font-size: 13px;
      }
      .animation-cards {
        padding: 0 16px 16px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 12px;
        grid-column-gap: 12px;
      }

      .separator {
        width: calc(100% - 2rem);
        height: 1px;
        margin: 0 1rem 1rem;
        background: var(--ref-palette-neutral-500);
      }

      .card-item {
        font-size: 13px;
        flex: 0 0 45%;

        user-select: none;
        cursor: pointer;
        position: relative;

        .card-content {
          width: 100%;
          height: 5.3rem;
          background-color: var(--ref-palette-neutral-300);
        }

        &.selected .card-content {
          outline: 2px solid var(--sys-color-primary-light);
        }

        .card-name {
          max-width: 90px;
          margin: 0 auto;
          color: var(--ref-palette-neutral-1100);
          .card-name-content {
            line-height: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    `}getAnimBoxStyle(){return t.css`
      background-color: transparent;
      width: 100%;
      height: 72px;
      position: relative;

      .img-tip {
        position: relative;
        min-width: 90px;
        height: 72px;
        cursor: pointer;

        &, &:hover {
          background: var(--ref-palette-neutral-300);
        }

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

          .jimu-rtl & {
            transform: rotateZ(45deg);
          }
        }
      }

      .amin-icons  {
        display: inline-grid;
        grid-template-columns: auto 26px;
        grid-column-gap: .5rem;
        .jimu-icon {
          margin-right: 0;
        }
      }

      .anim-labels {
        align-self: stretch;
        .anim-label {
          flex-grow: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          word-break: break-word;
          -webkit-line-clamp: 2;
        }
      }
    `}render(){var e,i;const{formatMessage:n,transition:a,transitionLabel:s,oneByOneEffect:o,showOneByOne:r}=this.props,c=fn.find((e=>e.type===(null==a?void 0:a.type))),p=Hi.find((e=>e.type===(null==o?void 0:o.type))),d=r?32:48,u=(null==a?void 0:a.type)?n(a.type.toLowerCase()):n("none"),g=(null==o?void 0:o.type)?n(o.type.toLowerCase()):n("none");let m=u;return r&&(m=m+"/"+g),(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"anima-box d-flex justify-content-center align-items-center flex-grow-1",css:this.getAnimBoxStyle()},(0,t.jsx)(l.Button,{className:"img-tip d-flex justify-content-center align-items-center border-0",onClick:this.toggleSidePanel,title:m,"aria-label":m,icon:!0,type:"tertiary",disableHoverEffect:!0},(0,t.jsx)("div",{className:(0,t.classNames)("anim-icon first",{"has-sibling":r})},(0,t.jsx)(l.Icon,{icon:(null==c?void 0:c.icon)||Cn,size:d})),r&&(0,t.jsx)("div",{className:"diag-sep"}),r&&(0,t.jsx)("div",{className:(0,t.classNames)("anim-icon second",{"has-sibling":r})},(0,t.jsx)(l.Icon,{icon:(null==p?void 0:p.icon)||Cn,size:d}))),(0,t.jsx)("div",{className:"d-flex flex-column justify-content-between align-items-center ml-2 h-100 flex-grow-1"},(0,t.jsx)("div",{className:"anim-labels d-flex"},(0,t.jsx)("div",{className:"anim-label"},(0,t.jsx)("span",null,u),r&&(0,t.jsx)("span",{className:"mx-1"},"/"),r&&(0,t.jsx)("span",null,g)),(0,t.jsx)(l.Tooltip,{title:n("animationOnTransition")},(0,t.jsx)(l.Button,{className:"p-0",icon:!0,type:"tertiary",size:"sm",disableHoverEffect:!0,disableRipple:!0},(0,t.jsx)(In,{size:"m"})))),(0,t.jsx)("div",{className:"amin-icons w-100",ref:this.sidePopperTrigger},(0,t.jsx)(l.Button,{ref:this.buttonRef,"aria-label":n("change"),size:"sm",onClick:this.toggleSidePanel,className:"text-truncate",title:n("change")},n("change")),(0,t.jsx)(l.Tooltip,{title:n("preview"),placement:"bottom"},(0,t.jsx)(l.Button,{type:"default",size:"sm",icon:!0,onClick:this.onPreviewAsAWhoneClicked},(0,t.jsx)(un,{size:"s"})))))),this.state.showSidePanel&&(0,t.jsx)(ne.SidePopper,{isOpen:!0,position:"right",toggle:this.toggleSidePanel,trigger:null===(e=this.sidePopperTrigger)||void 0===e?void 0:e.current,title:n("setting"),backToFocusNode:null===(i=this.buttonRef)||void 0===i?void 0:i.current},(0,t.jsx)("div",{css:this.getSidePopperStyle(),style:this.modalStyle},!r&&(0,t.jsx)("div",{className:"bg-default border-color-gray-400 mt-4"},(0,t.jsx)("div",{className:"w-100 h-100 animation-panel-border"},(0,t.jsx)(l.ButtonGroup,{role:"listbox",className:"animation-cards"},fn.map(((e,t)=>this.createTransitionCard(e,t)))),(null==c?void 0:c.supportDirection)&&(0,t.jsx)("div",{className:"separator"}),(null==c?void 0:c.supportDirection)&&this.createDirectionChooser())),r&&(0,t.jsx)(l.Tabs,{type:"underline",key:"widget-setting",className:"flex-grow-1 w-100 h-100",fill:!0,defaultValue:"transition"},(0,t.jsx)(l.Tab,{id:"transition",title:s,className:"tab-title-item"},(0,t.jsx)("div",{className:"bg-default border-color-gray-400 mt-4"},(0,t.jsx)("div",{className:"w-100 h-100 animation-panel-border"},(0,t.jsx)("div",{className:"animation-cards",role:"listbox"},fn.map(((e,t)=>this.createTransitionCard(e,t)))),(null==c?void 0:c.supportDirection)&&(0,t.jsx)("div",{className:"separator"}),(null==c?void 0:c.supportDirection)&&this.createDirectionChooser()))),(0,t.jsx)(l.Tab,{id:"widget",title:n("widget"),className:"tab-title-item"},(0,t.jsx)(rn,{effectSetting:null,oneByOneSetting:o,onSettingChange:this.onOnebyOneSettingChange,previewEnabled:!0,supportOneByOne:!0,supportAsOne:!1,onPreviewClicked:this.previewOneByOneEffect,formatMessage:this.props.formatMessage}))))))}}zn.defaultProps={formatMessage:e=>e,showOneByOne:!0,onPreviewOneByOneClicked:()=>{}};var Dn=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const An=e=>{const i=window.SVG,{className:n}=e,a=Dn(e,["className"]),l=(0,t.classNames)("jimu-icon jimu-icon-component",n);return i?t.React.createElement(i,Object.assign({className:l,src:_i()},a)):t.React.createElement("svg",Object.assign({className:l},a))},On=[{name:t.HoverType.None,type:"none"},{name:t.HoverType.Skew,type:"skew",x:-10,y:0},{name:t.HoverType.Grow,type:"scale",x:110,y:110},{name:t.HoverType.Shrink,type:"scale",x:90,y:90},{name:t.HoverType.Float,type:"translate",x:0,y:10},{name:t.HoverType.Sink,type:"translate",x:0,y:-10},{name:t.HoverType.Rotate,type:"rotate",deg:3},{name:t.HoverType.Spin,type:"rotate",deg:-720},{name:t.HoverType.Forward,type:"translate",x:10,y:0},{name:t.HoverType.Backward,type:"translate",x:-10,y:0},{name:t.HoverType.Opacity,type:"opacity",opacity:50}],Sn=t.css`
  .animation-cards {
    padding: 0 16px 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 12px;
    grid-column-gap: 12px;
  }

  .separator {
    width: calc(100% - 2rem);
    height: 1px;
    margin: 0 1rem 1rem;
    background: var(--ref-palette-neutral-500);
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

    .card-name {
      max-width: 90px;
      margin: 0 auto;
      color: var(--ref-palette-neutral-1100);
      .card-name-content {
        line-height: 1rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
`;function Tn(e){const i=t.hooks.useTranslation(l.defaultMessages),{type:n=t.HoverType.None,onTypeChange:a}=e,s=t.hooks.useEventCallback((e=>{a(e)}));return(0,t.jsx)("div",{css:Sn},(0,t.jsx)(l.ButtonGroup,{role:"listbox",className:"animation-cards"},On.map(((e,a)=>((e,a)=>(0,t.jsx)("div",{className:(0,t.classNames)("d-flex flex-column align-items-center card-item",{selected:e.name===n}),key:a},(0,t.jsx)(l.Button,{icon:!0,role:"option","aria-label":i(e.name.toLowerCase()),"aria-selected":e.name===n,className:"d-flex justify-content-center card-content border-0",onClick:()=>s(e.name)},(0,t.jsx)(An,{size:72})),(0,t.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1"},(0,t.jsx)("span",{className:"text-center card-name-content",title:i(e.name.toLowerCase())},i(e.name.toLowerCase())))))(e,a)))))}const Ln=p(69572),En=t.css`
  background-color: transparent;
  position: relative;
  width: 100%;
  height: 72px;

  .img-tip {
    position: relative;
    min-width: 90px;
    height: 72px;
    cursor: pointer;

    &, &:hover {
      background: var(--ref-palette-neutral-300);
    }
  }

  .amin-icons  {
    display: inline-grid;
    grid-template-columns: auto 26px;
    grid-column-gap: .5rem;
    .jimu-icon {
      margin-right: 0;
    }
  }
  .anim-labels {
    align-self: stretch;
    .anim-label {
      flex-grow: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      word-break: break-word;
      -webkit-line-clamp: 2;
    }
  }
`,kn=t.css`
  .header {
    height: 60px;
    padding: 0 0.5rem;
  }
  .side-popper-title {
    color: var(--ref-palette-neutral-1000);
    font-size: 16px;
  }
  .effect-title {
    color: var(--ref-palette-neutral-1000);
    font-size: 13px;
  }
  .side-content {
    position: relative;
    width: 100%;
    overflow: auto;
  }
`;function Pn(e){const{type:i=t.HoverType.None,setting:n,onChange:a,onPreviewClick:s}=e,[o,r]=t.React.useState(!1),c=t.React.useRef(),p=t.React.useRef(),d=t.hooks.useTranslation(l.defaultMessages),u=t.React.useCallback((()=>{r(!o)}),[o]),g=t.hooks.useEventCallback((e=>{a({type:e})})),m=t.hooks.useEventCallback((e=>{a({type:i,setting:e})}));return(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"anima-box d-flex justify-content-center align-items-center",css:En},(0,t.jsx)(l.Button,{className:"img-tip d-flex justify-content-center align-items-center border-0",onClick:u,title:d(i.toLowerCase()),"aria-label":d(i.toLowerCase()),icon:!0,type:"tertiary",disableHoverEffect:!0},(0,t.jsx)("div",{className:"anim-icon"},(0,t.jsx)(l.Icon,{icon:Ln,size:48}))),(0,t.jsx)("div",{className:"d-flex flex-column justify-content-between align-items-center ml-2 h-100 flex-grow-1"},(0,t.jsx)("div",{className:"anim-labels d-flex"},(0,t.jsx)("div",{className:"anim-label"},(0,t.jsx)("span",null,d(i.toLowerCase()))),(0,t.jsx)(l.Tooltip,{title:d("hover")},(0,t.jsx)(l.Button,{className:"p-0",icon:!0,type:"tertiary",size:"sm",disableHoverEffect:!0,disableRipple:!0},(0,t.jsx)(In,{size:"m"})))),(0,t.jsx)("div",{className:"amin-icons w-100",ref:p},(0,t.jsx)(l.Button,{size:"sm",ref:c,onClick:u,className:"text-truncate",title:d("change")},d("change")),(0,t.jsx)(l.Tooltip,{title:d("preview"),placement:"bottom"},(0,t.jsx)("span",null,(0,t.jsx)(l.Button,{type:"default",size:"sm",icon:!0,disabled:null==i||i===t.HoverType.None,onClick:s},(0,t.jsx)(un,{size:"s"}))))))),o&&(0,t.jsx)(ne.SidePopper,{isOpen:!0,css:kn,position:"right",toggle:u,trigger:p.current,title:d("hover"),backToFocusNode:null==c?void 0:c.current},(0,t.jsx)("div",{className:"side-content pt-2"},(0,t.jsx)(Tn,{type:i,setting:n,onTypeChange:g,onSettingChange:m}))))}var Rn=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const Bn=e=>{const{className:i,value:n,placeholder:a="##",onChange:s}=e,o=Rn(e,["className","value","placeholder","onChange"]),r=t.React.useMemo((()=>(null==n?void 0:n.asMutable)?n.asMutable({deep:!0}):n),[n]),c=t.hooks.useTranslation(l.defaultMessages),p=t.React.useMemo((()=>c("padding")),[c]);return t.React.createElement(Te,Object.assign({type:"edge",value:r,onChange:s,unifiedAriaLabel:p,unifiedTitle:p,placeholder:a},o,{className:(0,t.classNames)("style-setting--padding",i)}))};var Zn=p(15562);const Yn=(0,a.styled)((e=>{const{className:i,activate:n,onClick:a,title:l,"aria-label":s}=e;return t.React.createElement("div",{role:"button",tabIndex:0,title:l,"aria-label":s,onClick:a,onKeyDown:e=>{"Enter"===e.key&&a&&a(e)},className:(0,t.classNames)("position-item",{activate:n},i),style:{cursor:"pointer"}})}))`
    width: 22px;
    height: 22px;
    cursor: pointer;
    background-color: transparent;
    border-top: 1px solid var(--ref-palette-neutral-500);
    border-left: 1px solid var(--ref-palette-neutral-500);
    &:nth-of-type(-n+2) {
        border-top: none;
    }
    &:nth-of-type(3n+1){
        border-left: none;
    }
    &.activate {
        background: var(--sys-color-primary-light);
        border: 1px solid var(--sys-color-primary-dark);
    }
`,Gn=[t.FixedPosition.TopLeft,t.FixedPosition.TopCenter,t.FixedPosition.TopRight,t.FixedPosition.MiddleLeft,t.FixedPosition.MiddleCenter,t.FixedPosition.MiddleRight,t.FixedPosition.BottomLeft,t.FixedPosition.BottomCenter,t.FixedPosition.BottomRight],Vn={[t.FixedPosition.TopLeft]:"TL",[t.FixedPosition.TopCenter]:"TC",[t.FixedPosition.TopRight]:"TR",[t.FixedPosition.MiddleLeft]:"ML",[t.FixedPosition.MiddleCenter]:"MC",[t.FixedPosition.MiddleRight]:"MR",[t.FixedPosition.BottomLeft]:"BL",[t.FixedPosition.BottomCenter]:"BC",[t.FixedPosition.BottomRight]:"BR"},Qn=a.styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 0;
    border: 1px solid var(--ref-palette-neutral-500);
  `,Hn=e=>{const{value:i,onChange:n}=e,a=t.hooks.useTranslation(l.defaultMessages);return t.React.createElement(Qn,{className:"position-setting"},Gn.map((e=>t.React.createElement(Yn,{key:e,title:a(Vn[e]),"aria-label":a(Vn[e]),activate:e===i,onClick:()=>{null==n||n(e)}}))))},Wn=(0,t.Immutable)({position:t.FixedPosition.TopRight,width:"300px",height:"300px",offsetX:0,offsetY:0,left:"0px",top:"0px",right:"0px",bottom:"0px",widthMode:"CUSTOM",heightMode:"CUSTOM"}),Un=a.styled.div`
  width: 100%;
  .position-size {
    display: flex;
    justify-content: space-between;
    .sizes-editor {
      width: 121px;
      .size-editor {
        width: 100px !important;
      }
    }
  }
  .jimu-widget-setting--row-label {
    margin-right: auto;
  }
  .offset-numeric-input {
    width: 110px !important;
  }
`,Fn=e=>{const i=(0,t.getAppStore)().getState().appStateInBuilder,{width:n,height:a}=t.utils.findViewportSize(i.appConfig,i.browserSizeMode);return e?a:n},Jn=(e,i,n)=>{if(null==e)return i;let a=i.distance;const l=(e=>{if("string"==typeof e){const i=t.polished.getValueAndUnit(e);return{distance:i[0],unit:i[1]}}return e})(e);return"px"===l.unit&&"%"===i.unit?a=((e,t)=>{const i=Fn(t);return parseFloat((e/i*100).toFixed(3))})(i.distance,n):"%"===l.unit&&"px"===i.unit&&(a=((e,t)=>{const i=Fn(t);return Math.floor(e*i/100)})(i.distance,n)),{distance:a,unit:i.unit}},Xn=[Yt.LayoutItemSizeModes.Custom,Yt.LayoutItemSizeModes.Stretch],Kn=[l.DistanceUnits.PIXEL,l.DistanceUnits.PERCENTAGE],$n=e=>{var i,n,a,s,o,r;const{fixedPositionSizeJson:c,onChange:p}=e;let d=Wn.merge(null!=c?c:(0,t.Immutable)({}));const u=null!==(i=d.widthMode)&&void 0!==i?i:Yt.LayoutItemSizeModes.Custom,g=null!==(n=d.heightMode)&&void 0!==n?n:Yt.LayoutItemSizeModes.Custom;d=u===Yt.LayoutItemSizeModes.Stretch?d.without("width"):d.without("left").without("right"),d=g===Yt.LayoutItemSizeModes.Stretch?d.without("height"):d.without("top").without("bottom");const m=t.hooks.useTranslation(l.defaultMessages),h=(e,t)=>{const i=d.set(e,t);p(i,e)},I=(e,t)=>{var i,n;const a="height"===e||"top"===e||"bottom"===e,l=Jn(d[e],t,a),s=`${null!==(i=null==l?void 0:l.distance)&&void 0!==i?i:0}${null!==(n=null==l?void 0:l.unit)&&void 0!==n?n:"px"}`,o=d.set(e,s);p(o,e)};return t.React.createElement(Un,{className:"style-setting--fixed-position-size"},t.React.createElement("div",{className:"position-size"},t.React.createElement(Hn,{value:d.position,onChange:e=>{h("position",e)}}),t.React.createElement("div",{className:"sizes-editor"},t.React.createElement(ne.SettingRow,{className:"mt-0",label:"W","aria-label":m("width")},t.React.createElement(Zn.SizeEditor,{label:"W",mode:u,sizeModes:Xn,value:d.width,onModeChange:e=>{var i;let n=d.set("widthMode",e);const a=d.width,l=d.position;if(e===Yt.LayoutItemSizeModes.Stretch){const e=100*(null!==(i=d.offsetX)&&void 0!==i?i:0)/Fn(!1);let s;s=Yt.utils.isPercentage(a)?parseFloat(a):100*parseFloat(a)/Fn(!1),n=l===t.FixedPosition.TopLeft||l===t.FixedPosition.BottomLeft||l===t.FixedPosition.MiddleLeft?n.set("left",`${e.toFixed(2)}%`).set("right",`${(100-e-s).toFixed(2)}%`):l===t.FixedPosition.TopRight||l===t.FixedPosition.BottomRight||l===t.FixedPosition.MiddleRight?n.set("right",-e.toFixed(2)+"%").set("left",`${(100+e-s).toFixed(2)}%`):n.set("left",`${((100-s)/2+e).toFixed(2)}%`).set("right",`${((100-s)/2-e).toFixed(2)}%`),n=n.set("offsetX",0).without("width")}else{let e=parseFloat(d.left),t=parseFloat(d.right);Yt.utils.isPercentage(d.left)||(e=100*e/Fn(!1)),Yt.utils.isPercentage(d.right)||(t=100*t/Fn(!1)),n=n.without("left").without("right").set("width",`${(100-e-t).toFixed(2)}%`)}p(n,"widthMode")},onChange:e=>{I("width",e)}})),t.React.createElement(ne.SettingRow,{className:"mt-4",label:"H","aria-label":m("height")},t.React.createElement(Zn.SizeEditor,{label:"H",mode:g,sizeModes:Xn,value:d.height,onModeChange:e=>{var i;let n=d.set("heightMode",e);const a=d.height,l=d.position;if(e===Yt.LayoutItemSizeModes.Stretch){const e=100*(null!==(i=d.offsetY)&&void 0!==i?i:0)/Fn(!0);let s;s=Yt.utils.isPercentage(a)?parseFloat(a):100*parseFloat(a)/Fn(!0),n=l===t.FixedPosition.TopLeft||l===t.FixedPosition.TopCenter||l===t.FixedPosition.TopRight?n.set("top",`${e.toFixed(2)}%`).set("bottom",`${(100-e-s).toFixed(2)}%`):l===t.FixedPosition.BottomLeft||l===t.FixedPosition.BottomRight||l===t.FixedPosition.BottomCenter?n.set("bottom",-e.toFixed(2)+"%").set("top",`${(100+e-s).toFixed(2)}%`):n.set("top",`${((100-s)/2+e).toFixed(2)}%`).set("bottom",`${((100-s)/2-e).toFixed(2)}%`),n=n.set("offsetY",0).without("height")}else{let e=parseFloat(d.top),t=parseFloat(d.bottom);Yt.utils.isPercentage(d.top)||(e=100*e/Fn(!0)),Yt.utils.isPercentage(d.bottom)||(t=100*t/Fn(!0)),n=n.without("top").without("bottom").set("height",`${(100-e-t).toFixed(2)}%`)}p(n,"heightMode")},onChange:e=>{I("height",e)}})))),("STRETCH"===g||"STRETCH"===u)&&t.React.createElement(ne.SettingSection,{className:"mt-4 p-0 border-bottom-0",title:m("margins")},"STRETCH"===d.heightMode&&t.React.createElement(t.React.Fragment,null,t.React.createElement(ne.SettingRow,{className:"mt-4",flow:"no-wrap",label:m("top"),truncateLabel:!0},t.React.createElement(Zn.InputUnit,{className:"offset-numeric-input",units:Kn,precision:2,value:Yt.utils.normalizeLinearUnit(null!==(a=d.top)&&void 0!==a?a:"0%",2),onChange:e=>{I("top",e)}})),t.React.createElement(ne.SettingRow,{className:"mt-4",flow:"no-wrap",label:m("bottom"),truncateLabel:!0},t.React.createElement(Zn.InputUnit,{className:"offset-numeric-input",units:Kn,precision:2,value:Yt.utils.normalizeLinearUnit(null!==(s=d.bottom)&&void 0!==s?s:"0%",2),onChange:e=>{I("bottom",e)}}))),"STRETCH"===d.widthMode&&t.React.createElement(t.React.Fragment,null,t.React.createElement(ne.SettingRow,{className:"mt-4",flow:"no-wrap",label:m("left"),truncateLabel:!0},t.React.createElement(Zn.InputUnit,{className:"offset-numeric-input",units:Kn,precision:2,value:Yt.utils.normalizeLinearUnit(null!==(o=d.left)&&void 0!==o?o:"0%",2),onChange:e=>{I("left",e)}})),t.React.createElement(ne.SettingRow,{className:"mt-4",flow:"no-wrap",label:m("right"),truncateLabel:!0},t.React.createElement(Zn.InputUnit,{className:"offset-numeric-input",units:Kn,precision:2,value:Yt.utils.normalizeLinearUnit(null!==(r=d.right)&&void 0!==r?r:"0%",2),onChange:e=>{I("right",e)}})))),"STRETCH"!==d.widthMode&&t.React.createElement(ne.SettingRow,{className:"mt-4",flow:"no-wrap",label:m("offsetX"),truncateLabel:!0},t.React.createElement(l.NumericInput,{"aria-label":m("offsetX"),className:"offset-numeric-input",size:"sm",value:d.offsetX,onAcceptValue:e=>{h("offsetX",e)}})),"STRETCH"!==d.heightMode&&t.React.createElement(ne.SettingRow,{className:"mt-4",flow:"no-wrap",label:m("offsetY"),truncateLabel:!0},t.React.createElement(l.NumericInput,{"aria-label":m("offsetY"),className:"offset-numeric-input",size:"sm",value:d.offsetY,onAcceptValue:e=>{h("offsetY",e)}})))};(0,a.registerStyles)("jimu-ui/advanced/style-setting-components/",e)})(),d})())}}}));