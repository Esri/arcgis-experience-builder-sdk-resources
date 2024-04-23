System.register(["jimu-core","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/resource-selector","jimu-ui/advanced/setting-components","jimu-ui/basic/color-picker"],(function(e,t){var i={},s={},n={},a={},o={},l={},r={};return{setters:[function(e){i.AnimationDirection=e.AnimationDirection,i.AnimationEffectType=e.AnimationEffectType,i.AnimationPlayMode=e.AnimationPlayMode,i.AnimationStartMode=e.AnimationStartMode,i.AnimationTriggerType=e.AnimationTriggerType,i.AnimationType=e.AnimationType,i.HoverType=e.HoverType,i.Immutable=e.Immutable,i.LayoutItemType=e.LayoutItemType,i.ParentAnimationMode=e.ParentAnimationMode,i.React=e.React,i.ReactRedux=e.ReactRedux,i.TransitionDirection=e.TransitionDirection,i.TransitionType=e.TransitionType,i.classNames=e.classNames,i.css=e.css,i.defaultMessages=e.defaultMessages,i.getAppStore=e.getAppStore,i.hooks=e.hooks,i.injectIntl=e.injectIntl,i.jsx=e.jsx,i.lodash=e.lodash,i.polished=e.polished,i.utils=e.utils},function(e){s.LayoutItemSizeModes=e.LayoutItemSizeModes,s.utils=e.utils},function(e){n.getTheme2=e.getTheme2,n.registerStyles=e.registerStyles,n.styled=e.styled,n.useTheme2=e.useTheme2,n.withStyles=e.withStyles,n.withTheme=e.withTheme},function(e){a.AdvancedButtonGroup=e.AdvancedButtonGroup,a.BorderSides=e.BorderSides,a.Button=e.Button,a.ButtonGroup=e.ButtonGroup,a.Collapse=e.Collapse,a.DistanceUnits=e.DistanceUnits,a.Dropdown=e.Dropdown,a.DropdownButton=e.DropdownButton,a.DropdownItem=e.DropdownItem,a.DropdownMenu=e.DropdownMenu,a.EsriSimpleLineSymbolStyle=e.EsriSimpleLineSymbolStyle,a.FillType=e.FillType,a.Icon=e.Icon,a.InputGroup=e.InputGroup,a.NormalLineType=e.NormalLineType,a.NumericInput=e.NumericInput,a.Option=e.Option,a.Select=e.Select,a.Sides=e.Sides,a.Tab=e.Tab,a.Tabs=e.Tabs,a.TextAlignValue=e.TextAlignValue,a.Tooltip=e.Tooltip,a.defaultMessages=e.defaultMessages,a.styleUtils=e.styleUtils,a.utils=e.utils},function(e){o.IconPicker=e.IconPicker,o.ImageSelector=e.ImageSelector},function(e){l.SettingRow=e.SettingRow,l.SettingSection=e.SettingSection,l.SidePopper=e.SidePopper},function(e){r.ThemeColorPicker=e.ThemeColorPicker}],execute:function(){e((()=>{var e={42957:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 2.443 5.851 14 0 8.115l1.45-1.538 4.31 4.334L14.463 1z" clip-rule="evenodd"></path></svg>'},18371:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707z"></path></svg>'},59913:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#C5C5C5" fill-rule="evenodd" d="M13 3h-2v2h2zm-3-1v4h4V2zm-7 9h2v2H3zm-1 3v-4h4v4zm9-3h2v2h-2zm-1 3v-4h4v4zM3 3h2v2H3zM2 6V2h4v4z" clip-rule="evenodd"></path></svg>'},53073:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M10.373 5.57 8 .5 5.625 5.57 0 6.23l4.158 3.792L3.056 15.5 8 12.773l4.944 2.727-1.103-5.478L16 6.229zM8 2.857l1.705 3.641 4.002.469-2.957 2.697.788 3.918L8 11.631l-3.539 1.951.79-3.918-2.959-2.697 4.002-.469z" clip-rule="evenodd"></path></svg>'},11587:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 1c.291 0 .527.231.527.516v11.508L11.6 9.527a.535.535 0 0 1 .746 0 .508.508 0 0 1 0 .73L7.5 15l-4.846-4.743a.508.508 0 0 1 0-.73.535.535 0 0 1 .746 0l3.573 3.497V1.516c0-.285.236-.516.527-.516"></path></svg>'},33869:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M15 7.5a.522.522 0 0 1-.516.527H2.976L6.473 11.6a.535.535 0 0 1 0 .746.508.508 0 0 1-.73 0L1 7.5l4.743-4.846a.508.508 0 0 1 .73 0 .535.535 0 0 1 0 .746L2.976 6.973h11.508c.285 0 .516.236.516.527"></path></svg>'},28630:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1 7.5c0-.291.231-.527.516-.527h11.508L9.527 3.4a.535.535 0 0 1 0-.746.508.508 0 0 1 .73 0L15 7.5l-4.743 4.846a.508.508 0 0 1-.73 0 .535.535 0 0 1 0-.746l3.497-3.573H1.516A.522.522 0 0 1 1 7.5"></path></svg>'},35733:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 15a.522.522 0 0 1-.527-.516V2.976L3.4 6.473a.535.535 0 0 1-.746 0 .508.508 0 0 1 0-.73L7.5 1l4.846 4.743a.508.508 0 0 1 0 .73.535.535 0 0 1-.746 0L8.027 2.976v11.508A.522.522 0 0 1 7.5 15"></path></svg>'},59788:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738" clip-rule="evenodd"></path></svg>'},35212:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4 3a1 1 0 0 1 1-1h2.75a3.25 3.25 0 0 1 2.33 5.516A3.25 3.25 0 0 1 9.75 14H5a1 1 0 0 1-1-1V7.5zm1 4.5h2.75a2.25 2.25 0 0 0 0-4.5H5zm0 1V13h4.75a2.25 2.25 0 0 0 0-4.5h-2z" clip-rule="evenodd"></path></svg>'},81874:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M6 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-2l-2 10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2l2-10h-2a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></path></svg>'},30840:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 0A3.5 3.5 0 0 1 11 3.5V6h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V3.5A3.5 3.5 0 0 1 7.5 0M5 6h5V3.5a2.5 2.5 0 0 0-2.336-2.495L7.5 1a2.5 2.5 0 0 0-2.495 2.336L5 3.5zm6 1H3v8h9V7zm-3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},56097:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="m2 1 12 7-12 7zm9.983 6.999L3 2.723v10.553z" clip-rule="evenodd"></path></svg>'},58285:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11 2.02a.02.02 0 0 0-.02-.02H8a3 3 0 0 0-2.829 4l1.097.001A2 2 0 0 1 8 3h2v.5a.5.5 0 0 0 1 0zM12.5 7a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm-1.9 1.999h1.111c.185.456.289.964.289 1.501 0 1.866-1.252 3.392-2.83 3.495L9 14H6a1 1 0 0 1-1-1v-.5a.5.5 0 0 1 1 0v.499L9 13c1.105 0 2-1.12 2-2.5a2.96 2.96 0 0 0-.311-1.34z" clip-rule="evenodd"></path></svg>'},13468:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M5.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM2 6.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.5 5.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},67653:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm0 6a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zM2 6.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.5 5.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},47118:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.5 3h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1m-7 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1m6 3h-6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1m5 3h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1" clip-rule="evenodd"></path></svg>'},192:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M6.5 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm1 6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM4 6.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M2.5 12a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z" clip-rule="evenodd"></path></svg>'},71007:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M5 2.5a.5.5 0 0 0-1 0V8a4 4 0 0 0 8 0V2.5a.5.5 0 0 0-1 0V8a3 3 0 0 1-6 0zm7 11a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5" clip-rule="evenodd"></path></svg>'},57322:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 3.5a3.5 3.5 0 1 0-7 0V6H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2V3.5l.005-.164A2.5 2.5 0 0 1 12.5 1l.164.005A2.5 2.5 0 0 1 15 3.5a.5.5 0 0 0 1 0M9 7H3v8h9V7h-1zm-1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},88866:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},69625:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 1"><path fill="#fff" fill-rule="evenodd" d="M0 0h5v1H0zm10 0h5v1h-5zm15 0h-5v1h5zm5 0h5v1h-5zm16 0h-6v1h6zM7 0h1v1H7zm11 0h-1v1h1zm9 0h1v1h-1zm11 0h-1v1h1z" clip-rule="evenodd"></path></svg>'},68930:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 1"><path fill="#fff" fill-rule="evenodd" d="M5 0H0v1h5zm13 0h-5v1h5zm8 0h5v1h-5zm20 0h-7v1h7zM7 0h1v1H7zm14 0h-1v1h1zm12 0h1v1h-1zM11 0h-1v1h1zm12 0h1v1h-1zm14 0h-1v1h1z" clip-rule="evenodd"></path></svg>'},61733:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 1"><path fill="#fff" d="M0 1h3V0H0zM6 1h3V0H6zM15 1h-3V0h3zM18 1h3V0h-3zM27 1h-3V0h3zM30 1h3V0h-3zM39 1h-3V0h3zM42 1h4V0h-4z"></path></svg>'},1465:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 1"><path fill="#fff" fill-rule="evenodd" d="M0 1h1V0H0zm6 0h1V0H6zm7 0h-1V0h1zm5 0h1V0h-1zm7 0h-1V0h1zm5 0h1V0h-1zm7 0h-1V0h1zM3 1h1V0H3zm7 0H9V0h1zm5 0h1V0h-1zm7 0h-1V0h1zm5 0h1V0h-1zm7 0h-1V0h1zm5 0h1V0h-1zm4 0h-1V0h1zm2 0h1V0h-1z" clip-rule="evenodd"></path></svg>'},21161:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 4"><path fill="#fff" d="M0 1h46V0H0zM0 4h46V3H0z"></path></svg>'},47383:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 1"><path fill="#fff" fill-rule="evenodd" d="M46 1H0V0h46z" clip-rule="evenodd"></path></svg>'},82744:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#000" fill-rule="nonzero" d="M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8"></path></svg>'},29965:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#000" fill-rule="nonzero" d="m10 0 10 10-10 10L0 10z"></path></svg>'},63503:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6"><circle cx="1104" cy="1049" r="3" fill="#000" fill-rule="nonzero" transform="translate(-1101 -1046)"></circle></svg>'},91112:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#000" fill-rule="nonzero" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12"></path></svg>'},38586:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 4"><rect width="8" height="4" x="1103" y="1123" fill="#000" fill-rule="nonzero" rx="2" transform="translate(-1103 -1123)"></rect></svg>'},38275:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="#000" fill-rule="nonzero" d="m6.828.535 4.966 11.01A.323.323 0 0 1 11.5 12a.776.776 0 0 1-.707-.455L9.182 8H2.818l-1.611 3.545A.776.776 0 0 1 .5 12a.323.323 0 0 1-.294-.456L5.172.535a.909.909 0 0 1 1.656 0M6 1 3.272 7h5.456z"></path></svg>'},94850:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYgNDhMMzEuODkzMiA1NS40MTY0TDM0LjU4NzMgMzkuNzA4MkwyMy4xNzQ2IDI4LjU4MzZMMzguOTQ2NiAyNi4yOTE4TDQ2IDEyTDUzLjA1MzQgMjYuMjkxOEw2OC44MjU0IDI4LjU4MzZMNTcuNDEyNyAzOS43MDgyTDYwLjEwNjggNTUuNDE2NEw0NiA0OFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzI5OTApIi8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xXzI5OTAiIHgxPSI2Ny43MjQ5IiB5MT0iMTcuMzMxMyIgeDI9IjM3Ljc5NTEiIHkyPSIxNy4zMzEzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyODI4MjgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},57223:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYgNDhMMzEuODkzMiA1NS40MTY0TDM0LjU4NzMgMzkuNzA4MkwyMy4xNzQ2IDI4LjU4MzZMMzguOTQ2NiAyNi4yOTE4TDQ2IDEyTDUzLjA1MzQgMjYuMjkxOEw2OC44MjU0IDI4LjU4MzZMNTcuNDEyNyAzOS43MDgyTDYwLjEwNjggNTUuNDE2NEw0NiA0OFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzMwMTYpIi8+DQo8cmVjdCB4PSI1MyIgeT0iNTQiIHdpZHRoPSI4IiBoZWlnaHQ9IjIiIHRyYW5zZm9ybT0icm90YXRlKDkwIDUzIDU0KSIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzFfMzAxNikiLz4NCjxyZWN0IHg9IjQxIiB5PSI1NCIgd2lkdGg9IjgiIGhlaWdodD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNDEgNTQpIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfMV8zMDE2KSIvPg0KPHJlY3QgeD0iNDciIHk9IjUxLjUiIHdpZHRoPSIxMSIgaGVpZ2h0PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA0NyA1MS41KSIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyXzFfMzAxNikiLz4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfMzAxNiIgeDE9IjU4LjA3NjMiIHkxPSI1Ni4xODk4IiB4Mj0iNTguMDc2MyIgeTI9IjMyLjAzNzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI4MjgyOCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xXzMwMTYiIHgxPSI1MyIgeTE9IjU2IiB4Mj0iNjEiIHkyPSI1NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfMV8zMDE2IiB4MT0iNDEiIHkxPSI1NiIgeDI9IjQ5IiB5Mj0iNTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZBNkE2QSIgc3RvcC1vcGFjaXR5PSIwLjAxIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzFfMzAxNiIgeDE9IjQ3IiB5MT0iNTMuNSIgeDI9IjU4IiB5Mj0iNTMuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},64037:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDcgNDhMMzIuODkzMiA1NS40MTY0TDM1LjU4NzMgMzkuNzA4MkwyNC4xNzQ2IDI4LjU4MzZMMzkuOTQ2NiAyNi4yOTE4TDQ3IDEyTDU0LjA1MzQgMjYuMjkxOEw2OS44MjU0IDI4LjU4MzZMNTguNDEyNyAzOS43MDgyTDYxLjEwNjggNTUuNDE2NEw0NyA0OFoiIGZpbGw9IiM2QTZBNkEiLz4NCjxyZWN0IHg9IjIxIiB5PSIxNiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzMwMDYpIi8+DQo8cmVjdCB4PSIyMSIgeT0iMjIiIHdpZHRoPSIxNyIgaGVpZ2h0PSIyIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfMV8zMDA2KSIvPg0KPHJlY3QgeD0iMjEiIHk9IjM2IiB3aWR0aD0iOSIgaGVpZ2h0PSIyIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfMV8zMDA2KSIvPg0KPHJlY3QgeD0iMjEiIHk9IjQ4IiB3aWR0aD0iOSIgaGVpZ2h0PSIyIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfMV8zMDA2KSIvPg0KPHJlY3QgeD0iMjEiIHk9IjQyIiB3aWR0aD0iMTIiIGhlaWdodD0iMiIgZmlsbD0idXJsKCNwYWludDRfbGluZWFyXzFfMzAwNikiLz4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfMzAwNiIgeDE9IjIxIiB5MT0iMTgiIHgyPSI0MSIgeTI9IjE4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZBNkE2QSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xXzMwMDYiIHgxPSIyMSIgeTE9IjI0IiB4Mj0iMzgiIHkyPSIyNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIgc3RvcC1vcGFjaXR5PSIwLjAxIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfMV8zMDA2IiB4MT0iMjEiIHkxPSIzOCIgeDI9IjMwIiB5Mj0iMzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiM2QTZBNkEiIHN0b3Atb3BhY2l0eT0iMC4wMSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzFfMzAwNiIgeDE9IjIxIiB5MT0iNTAiIHgyPSIzMCIgeTI9IjUwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZBNkE2QSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ0X2xpbmVhcl8xXzMwMDYiIHgxPSIyMSIgeTE9IjQ0IiB4Mj0iMzMiIHkyPSI0NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIgc3RvcC1vcGFjaXR5PSIwLjAxIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},89781:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl9ub25lPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0MS4wMDAwMDAsIC0xOTIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE0MC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzZBNkE2QSIgcG9pbnRzPSI0NiA0OCAzMS44OTMxNTM5IDU1LjQxNjQwNzkgMzQuNTg3MzIxOCAzOS43MDgyMDM5IDIzLjE3NDY0MzYgMjguNTgzNTkyMSAzOC45NDY1NzcgMjYuMjkxNzk2MSA0NiAxMiA1My4wNTM0MjMgMjYuMjkxNzk2MSA2OC44MjUzNTY0IDI4LjU4MzU5MjEgNTcuNDEyNjc4MiAzOS43MDgyMDM5IDYwLjEwNjg0NjEgNTUuNDE2NDA3OSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},63619:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl9zcGluPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwNjEuMDAwMDAwLCAtNTUyLjAwMDAwMCkiPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ0LjAwMDAwMCwgNTAwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsLXJ1bGU9Im5vbnplcm8iIHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDUuNjY2NjY2NywxMyBMNTIuNzIwMDg5NywyNy4yOTE3OTYxIEw2OC40OTIwMjMxLDI5LjU4MzU5MjEgTDU3LjA3OTM0NDksNDAuNzA4MjAzOSBMNTkuNzczNTEyNyw1Ni40MTY0MDc5IEw0NS42NjY2NjY3LDQ5IEwzMS41NTk4MjA2LDU2LjQxNjQwNzkgTDM0LjI1Mzk4ODUsNDAuNzA4MjAzOSBMMjIuODQxMzEwMywyOS41ODM1OTIxIEwzOC42MTMyNDM2LDI3LjI5MTc5NjEgTDQ1LjY2NjY2NjcsMTMgWiBNNzYuNjY2NjY2NywyMy42NjY2NjY3IEw3Ni42NjY2NjY3LDI1IEw3My4wODkzMzMzLDI1IEM3My41MjUzMzMzLDI1LjMzMzMzMzMgNzQuMDg0LDI1Ljc2NjY2NjcgNzQuMzkxMzMzMywyNi4wNDY2NjY3IEM3NS44MjgsMjcuMzU2NjY2NyA3Ni42NjY2NjY3LDI4Ljg0MTMzMzMgNzYuNjY2NjY2NywzMC42NjY2NjY3IEM3Ni42NjY2NjY3LDM0LjkyNjY2NjcgNzMuNzI1MzMzMywzNyA3MCwzNyBMNzAsMzUuNjY2NjY2NyBDNzMuMDY4NjY2NywzNS42NjY2NjY3IDc1LjMzMzMzMzMsMzQuMDcgNzUuMzMzMzMzMywzMC42NjY2NjY3IEM3NS4zMzMzMzMzLDI5LjI3MjY2NjcgNzQuNjc4LDI4LjExMiA3My40OTMzMzMzLDI3LjAzMzMzMzMgQzczLjE4NCwyNi43NTA2NjY3IDcyLjQ3ODY2NjcsMjYuMjEzMzMzMyA3MiwyNS44NDUzMzMzIEw3MiwyOS42NjY2NjY3IEw3MC42NjY2NjY3LDI5LjY2NjY2NjcgTDcwLjY2NjY2NjcsMjMuNjY2NjY2NyBMNzYuNjY2NjY2NywyMy42NjY2NjY3IFogTTE5LDIzLjY2NjY2NjcgTDE5LDI1IEMxNS45MzEzMzMzLDI1IDEzLjY2NjY2NjcsMjYuNTk2NjY2NyAxMy42NjY2NjY3LDMwIEMxMy42NjY2NjY3LDMxLjM5NCAxNC4zMjIsMzIuNTU0NjY2NyAxNS41MDY2NjY3LDMzLjYzMzMzMzMgQzE1LjgxNiwzMy45MTYgMTYuNTIxMzMzMywzNC40NTMzMzMzIDE3LDM0LjgyMTMzMzMgTDE3LDMxIEwxOC4zMzMzMzMzLDMxIEwxOC4zMzMzMzMzLDM3IEwxMi4zMzMzMzMzLDM3IEwxMi4zMzMzMzMzLDM1LjY2NjY2NjcgTDE1LjkxMDY2NjcsMzUuNjY2NjY2NyBDMTUuNDc0NjY2NywzNS4zMzMzMzMzIDE0LjkxNiwzNC45IDE0LjYwODY2NjcsMzQuNjIgQzEzLjE3MiwzMy4zMSAxMi4zMzMzMzMzLDMxLjgyNTMzMzMgMTIuMzMzMzMzMywzMCBDMTIuMzMzMzMzMywyNS43NCAxNS4yNzQ2NjY3LDIzLjY2NjY2NjcgMTksMjMuNjY2NjY2NyBaIE00MC4zMzMzMzMzLDQgTDQwLjMzMzMzMzMsNy41NzczMzMzMyBDNDAuNjY2NjY2Nyw3LjE0MTMzMzMzIDQxLjEsNi41ODI2NjY2NiA0MS4zOCw2LjI3NTMzMzMzIEM0Mi42OSw0LjgzODY2NjY3IDQ0LjE3NDY2NjcsNCA0Niw0IEM1MC4yNiw0IDUyLjMzMzMzMzMsNi45NDEzMzMzMyA1Mi4zMzMzMzMzLDEwLjY2NjY2NjcgTDUxLDEwLjY2NjY2NjcgQzUxLDcuNTk4IDQ5LjQwMzMzMzMsNS4zMzMzMzMzNCA0Niw1LjMzMzMzMzMzIEM0NC42MDYsNS4zMzMzMzMzMyA0My40NDUzMzMzLDUuOTg4NjY2NjYgNDIuMzY2NjY2Nyw3LjE3MzMzMzMzIEM0Mi4wODQsNy40ODI2NjY2NiA0MS41NDY2NjY3LDguMTg4IDQxLjE3ODY2NjcsOC42NjY2NjY2NyBMNDUsOC42NjY2NjY2NyBMNDUsMTAgTDM5LDEwIEwzOSw0IEw0MC4zMzMzMzMzLDQgWiIgZmlsbD0iIzZBNkE2QSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},19502:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYgNDhMMzEuODkzMiA1NS40MTY0TDM0LjU4NzMgMzkuNzA4MkwyMy4xNzQ2IDI4LjU4MzZMMzguOTQ2NiAyNi4yOTE4TDQ2IDEyTDUzLjA1MzQgMjYuMjkxOEw2OC44MjU0IDI4LjU4MzZMNTcuNDEyNyAzOS43MDgyTDYwLjEwNjggNTUuNDE2NEw0NiA0OFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzMwMjMpIi8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xXzMwMjMiIHgxPSI1OC4wNzYzIiB5MT0iNTYuMTg5OCIgeDI9IjU4LjA3NjMiIHkyPSIzMi4wMzcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyODI4MjgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},63291:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl9pbl96b29tPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0MS4wMDAwMDAsIC00MzIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDM4MC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuMDAwMDAwLCAxMS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMzNjM2MzYiIHBvaW50cz0iMjYgMzYgMTEuODkzMTUzOSA0My40MTY0MDc5IDE0LjU4NzMyMTggMjcuNzA4MjAzOSAzLjE3NDY0MzYxIDE2LjU4MzU5MjEgMTguOTQ2NTc3IDE0LjI5MTc5NjEgMjYgMCAzMy4wNTM0MjMgMTQuMjkxNzk2MSA0OC44MjUzNTY0IDE2LjU4MzU5MjEgMzcuNDEyNjc4MiAyNy43MDgyMDM5IDQwLjEwNjg0NjEgNDMuNDE2NDA3OSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzZBNkE2QSIgcG9pbnRzPSIyNiAzMCAxOC45NDY1NzcgMzMuNzA4MjAzOSAyMC4yOTM2NjA5IDI1Ljg1NDEwMiAxNC41ODczMjE4IDIwLjI5MTc5NjEgMjIuNDczMjg4NSAxOS4xNDU4OTggMjYgMTIgMjkuNTI2NzExNSAxOS4xNDU4OTggMzcuNDEyNjc4MiAyMC4yOTE3OTYxIDMxLjcwNjMzOTEgMjUuODU0MTAyIDMzLjA1MzQyMyAzMy43MDgyMDM5Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjYuMDk4OTk5NSw0MSBDMjYuMzg5MjQ2Niw0MS4wMDI2ODc3IDI2LjYzNDczNzQsNDEuMjM4NDYxNCAyNi42NDczMTgzLDQxLjUyNjY1NjMgTDI2LjY0OTIyMjIsNDguOTMwMzk5OCBMMzAuMDU3MDE1LDQ1LjQyNTg3NTEgQzMwLjI1MzM1NDgsNDUuMjIzOTYyIDMwLjU4NjEwOCw0NS4yMjY5OTY0IDMwLjgwMDIzOTksNDUuNDMyNjUyNSBDMzEuMDE0MzcxOCw0NS42MzgzMDg1IDMxLjAyODc5NTIsNDUuOTY4NzA4NiAzMC44MzI0NTUzLDQ2LjE3MDYyMTcgTDI2LjIxMDg5MzMsNTAuOTIzMzY5MSBMMjEuMTcwNTMxMiw0Ni4wODI1MTYyIEMyMC45NTYzOTkyLDQ1Ljg3Njg2MDIgMjAuOTQxOTc1OSw0NS41NDY0NjAxIDIxLjEzODMxNTgsNDUuMzQ0NTQ3IEMyMS4zMzQ2NTU2LDQ1LjE0MjYzMzkgMjEuNjY3NDA4OCw0NS4xNDU2NjgyIDIxLjg4MTU0MDcsNDUuMzUxMzI0MyBMMjUuNTk4MTQzNCw0OC45MjA4MTUyIEwyNS41OTYyMzk1LDQxLjUxNzA3MTcgQzI1LjU4MzY1ODYsNDEuMjI4ODc2OCAyNS44MDg3NTE4LDQwLjk5NzM5NDIgMjYuMDk4OTk5NSw0MSBaIE00OS4yMjkxODExLDI3LjIwMzgyIEM0OS40ODgwNDUxLDI3LjA5Mjg4MDEgNDkuNzkxMzMxMywyNy4yMjQ3NTAzIDQ5LjkwNjU4OTcsMjcuNDk4MzYwMiBMNDkuOTA2NTg5NywyNy40OTgzNjAyIEw1Mi42MTk2MTEsMzMuOTM4NzUwMSBMNDYuNTI2MzE5MywzNi41NTAxMTc2IEM0Ni4yNjc0NTUzLDM2LjY2MTA1NzUgNDUuOTY0MTY5MSwzNi41MjkxODc0IDQ1Ljg0ODkxMDYsMzYuMjU1NTc3NSBDNDUuNzMzNjUyMiwzNS45ODE5Njc1IDQ1Ljg1MDA2NzQsMzUuNjcwMjI4MyA0Ni4xMDg5MzE1LDM1LjU1OTI4ODQgTDQ2LjEwODkzMTUsMzUuNTU5Mjg4NCBMNTAuNjAxOTMwOSwzMy42MzM3NDkxIEw0My42OTA2MjMxLDMwLjk3ODcwNzMgQzQzLjQyNjA3ODYsMzAuODYzNjgyMiA0My4yOTM5NDA5LDMwLjU1MDAwMyA0My4zOTU0ODUzLDMwLjI3ODA4NTIgQzQzLjQ5NzAyOTcsMzAuMDA2MTY3NSA0My43OTM4MDM1LDI5Ljg3ODk4MDggNDQuMDU4MzQ4LDI5Ljk5NDAwNTkgTDQ0LjA1ODM0OCwyOS45OTQwMDU5IEw1MC45Njk2NTU4LDMyLjY0OTA0NzcgTDQ4Ljk2OTE2MDMsMjcuOTAwMTA5MSBDNDguODUzOTAxOCwyNy42MjY0OTkxIDQ4Ljk3MDMxNzEsMjcuMzE0NzU5OSA0OS4yMjkxODExLDI3LjIwMzgyIFogTTMuMzkwNDI5OSwyNy4yMDM4MiBDMy42NDkyOTM5MSwyNy4zMTQ3NTk5IDMuNzY1NzA5MTgsMjcuNjI2NDk5MSAzLjY1MDQ1MDcsMjcuOTAwMTA5MSBMMS42NDk5NTUxNiwzMi42NDkwNDc3IEw4LjU2MTI2MjkyLDI5Ljk5NDAwNTkgQzguODI1ODA3NDYsMjkuODc4OTgwOCA5LjEyMjU4MTIyLDMwLjAwNjE2NzUgOS4yMjQxMjU2NiwzMC4yNzgwODUyIEM5LjMyNTY3MDEsMzAuNTUwMDAzIDkuMTkzNTMyNDEsMzAuODYzNjgyMiA4LjkyODk4Nzg2LDMwLjk3ODcwNzMgTDIuMDE3NjgwMTEsMzMuNjMzNzQ5MSBMNi41MTA2Nzk1MSwzNS41NTkyODg0IEM2Ljc2OTU0MzUyLDM1LjY3MDIyODMgNi44ODU5NTg3OSwzNS45ODE5Njc1IDYuNzcwNzAwMzEsMzYuMjU1NTc3NSBDNi42NTU0NDE4MywzNi41MjkxODc0IDYuMzUyMTU1NjQsMzYuNjYxMDU3NSA2LjA5MzI5MTYzLDM2LjU1MDExNzYgTC02LjMxMDg4NzI0ZS0zMCwzMy45Mzg3NTAxIEwyLjcxMzAyMTIyLDI3LjQ5ODM2MDIgQzIuODI4Mjc5NywyNy4yMjQ3NTAzIDMuMTMxNTY1OSwyNy4wOTI4ODAxIDMuMzkwNDI5OSwyNy4yMDM4MiBaIE00My4wMDI2NzIxLDEgTDQzLjk5NDIwNTEsNy45MTc4MDA4NyBDNDQuMDM2MzI4OCw4LjIxMTY5Mjg2IDQzLjg0NDI3OTksOC40ODA5MzE1NiA0My41NjUyNTE5LDguNTE5MTYyMzQgQzQzLjI4NjIyMzksOC41NTczOTMxMiA0My4wMjU4NzksOC4zNTAxMzg3NiA0Mi45ODM3NTUyLDguMDU2MjQ2NzYgTDQyLjI1MjYzMDQsMi45NTUyODA0OCBMMzcuNjk1OTMxLDguNzkwNjgyMTIgQzM3LjUyODQxNDMsOS4wMjU1MjgzOCAzNy4yMDg1MjM2LDkuMDY5MzU3OTMgMzYuOTgxNDM1LDguODg4NTc4MTUgQzM2Ljc1NDM0NjQsOC43MDc3OTgzNyAzNi43MDYwNTM4LDguMzcwODY2ODkgMzYuODczNTcwNSw4LjEzNjAyMDYzIEw0MS40MzAyNjk5LDIuMzAwNjE4OTkgTDM2LjU4NzI5MTYsMi45NjQxNzU0IEMzNi4zMDgyNjM2LDMuMDAyNDA2MTggMzYuMDQ3OTE4NywyLjc5NTE1MTgyIDM2LjAwNTc5NDksMi41MDEyNTk4MiBDMzUuOTYzNjcxMiwyLjIwNzM2NzgzIDM2LjE1NTcyMDEsMS45MzgxMjkxMiAzNi40MzQ3NDgxLDEuODk5ODk4MzUgTDQzLjAwMjY3MjEsMSBaIE04Ljk5NzMyNzg3LDEgTDE1LjU2NTI1MTksMS44OTk4OTgzNSBDMTUuODQ0Mjc5OSwxLjkzODEyOTEyIDE2LjAzNjMyODgsMi4yMDczNjc4MyAxNS45OTQyMDUxLDIuNTAxMjU5ODIgQzE1Ljk1MjA4MTMsMi43OTUxNTE4MiAxNS42OTE3MzY0LDMuMDAyNDA2MTggMTUuNDEyNzA4NCwyLjk2NDE3NTQgTDE1LjQxMjcwODQsMi45NjQxNzU0IEwxMC41Njk3MzAxLDIuMzAwNjE4OTkgTDE1LjEyNjQyOTUsOC4xMzYwMjA2MyBDMTUuMjkzOTQ2Miw4LjM3MDg2Njg5IDE1LjI0NTY1MzYsOC43MDc3OTgzNyAxNS4wMTg1NjUsOC44ODg1NzgxNSBDMTQuNzkxNDc2NCw5LjA2OTM1NzkzIDE0LjQ3MTU4NTcsOS4wMjU1MjgzOCAxNC4zMDQwNjksOC43OTA2ODIxMiBMMTQuMzA0MDY5LDguNzkwNjgyMTIgTDkuNzQ3MzY5NjMsMi45NTUyODA0OCBMOS4wMTYyNDQ3OCw4LjA1NjI0Njc2IEM4Ljk3NDEyMTA1LDguMzUwMTM4NzYgOC43MTM3NzYxMSw4LjU1NzM5MzEyIDguNDM0NzQ4MDksOC41MTkxNjIzNCBDOC4xNTU3MjAwNyw4LjQ4MDkzMTU2IDcuOTYzNjcxMTksOC4yMTE2OTI4NiA4LjAwNTc5NDkzLDcuOTE3ODAwODcgTDguMDA1Nzk0OTMsNy45MTc4MDA4NyBMOC45OTczMjc4NywxIFoiIGZpbGw9IiM2QTZBNkEiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},95514:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHg9IjgiIHdpZHRoPSI3NiIgaGVpZ2h0PSI0MCIgZmlsbD0iIzM2MzYzNiIgZmlsbC1vcGFjaXR5PSIwLjUiLz4NCjxyZWN0IHk9IjI0IiB3aWR0aD0iOTIiIGhlaWdodD0iNDgiIGZpbGw9IiM1MjUyNTIiLz4NCjwvc3ZnPg0K"},75046:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2N1YmU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2MS4wMDAwMDAsIC0yNzAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCAyMTguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiM2QTZBNkEiIHBvaW50cz0iMTIgMTguNCA1MSAxMiA1MSA2MCAxMiA1My42Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMzNjM2MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY1LjUwMDAwMCwgMzYuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC02NS41MDAwMDAsIC0zNi4wMDAwMDApICIgcG9pbnRzPSI1MSAxOC40IDgwIDEyIDgwIDYwIDUxIDUzLjYiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},58228:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2Rvb3J3YXk8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTYzMC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCA1NzguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMzNjM2MzYiIHBvaW50cz0iMCAtMS4xNDAxOTkwNWUtMTMgMjQgMTIgMjQgNjAgMCA3MiI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjNkE2QTZBIiB4PSIyNiIgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBmaWxsPSIjMzYzNjM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MC4wMDAwMDAsIDM2LjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtODAuMDAwMDAwLCAtMzYuMDAwMDAwKSAiIHBvaW50cz0iNjggLTEuMTQwMTk5MDVlLTEzIDkyIDExIDkyIDYwIDY4IDcyIj48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},83167:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2ZhZGU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2MS4wMDAwMDAsIC0xNTAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTcuMDAwMDAwLCA1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCA5OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgb3BhY2l0eT0iMC4xMDAwMDAwMDEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM1MjUyNTIiIHg9IjI4IiB5PSIyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsPSIjMzYzNjM2IiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDgiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY0LDAgTDY0LDQ4IEwwLDQ4IEwwLDAgTDY0LDAgWiBNNjMsMSBMMSwxIEwxLDQ3IEw2Myw0NyBMNjMsMSBaIiBmaWxsPSIjNkE2QTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},109:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX25vbmU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTE1MC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCA5OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM2QTZBNkEiIHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},38830:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDkyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX3B1c2g8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTI3MC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyMTguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTIsMCBMOTIsNzIgTDAsNzIgTDAsMCBMOTIsMCBaIE05MSwzNyBMMSwzNyBMMSw3MSBMOTEsNzEgTDkxLDM3IFogTTQ2LDQ0IEw1Niw1NCBMNTAuMTY2NjY2Nyw1NCBMNTAuMTY2NjY2Nyw2NCBMNDEuODMzMzMzMyw2NCBMNDEuODMzMzMzMyw1NCBMMzYsNTQgTDQ2LDQ0IFoiIGZpbGw9IiM2QTZBNkEiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="},48891:e=>{"use strict";e.exports=i},74758:e=>{"use strict";e.exports=s},34796:e=>{"use strict";e.exports=n},30726:e=>{"use strict";e.exports=a},20663:e=>{"use strict";e.exports=o},77756:e=>{"use strict";e.exports=l},41362:e=>{"use strict";e.exports=r}},t={};function c(i){var s=t[i];if(void 0!==s)return s.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,c),n.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var i in t)c.o(t,i)&&!c.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var g={};return(()=>{"use strict";c.r(g),c.d(g,{AnimationSettingComponent:()=>vi,BackgroundSetting:()=>ut,BorderRadiusSetting:()=>De,BorderSetting:()=>J,BoxShadowSetting:()=>$,ButtonStyleSetting:()=>Pt,DateUnitInput:()=>W,FontFamilySelector:()=>re,FontFamilyValue:()=>oe,FontStyle:()=>Ge,FourEdges:()=>Ae,FourSides:()=>ae,InputRatio:()=>pe,InputUnit:()=>R,LineStyleSelector:()=>C,LineStyleTranstions:()=>v,MouseActionSetting:()=>Gi,NavIconPicker:()=>Ht,NavStyleSettingByState:()=>Bt,Padding:()=>Qi,SizeColorSetting:()=>kt,SizeEditor:()=>gt,TextAlignment:()=>it,TextStyle:()=>We,ThemeBackgroundSection:()=>vt,ThemeBorderSection:()=>zt,ThemeBoxShadowSection:()=>Tt,TransitionSetting:()=>Li,UnitSelector:()=>T,UnitSelectorDateUnits:()=>A,UnitSelectorDateWeekUnits:()=>D,UnitSelectorTimeUnits:()=>z,_BackgroundSetting:()=>dt,_BorderSetting:()=>F,_BoxShadowSetting:()=>K,_FourSides:()=>ne,_InputRatio:()=>ge,_SizeEditor:()=>ct,fontValue:()=>le});var e={};c.r(e),c.d(e,{BackgroundSetting:()=>i,BorderSetting:()=>s,BoxShadowSetting:()=>n,FourSides:()=>a,SingleColorSelector:()=>o});var t=c(48891);const i=()=>t.css`
    display: flex;
    flex-direction: column;
    width: 100%;
    > .setting-row {
      display: flex;
      align-items:center;
      justify-content: space-between;
      margin-top: 0.75rem;
      margin-bottom: 0;
    }
    .jimu-builder--color {
      width: ${t.polished.rem(40)};
      height: ${t.polished.rem(20)};
    }
    .fill-type {
      width: 50%;
    }
    `,s=()=>t.css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    >.item {
      flex: 0 1 auto;
    }
    >.item.style-setting--line-style-selector {
      width: 40%;
    }
    >.item.style-setting--input-unit {
      width:30%;
    }
    .jimu-builder--color {
      height: ${t.polished.rem(26)};
    }
  `,n=()=>t.css`
    display: flex;
    flex-direction: column;
    width: 100%;
    > .setting-row {
      display: flex;
      align-items:center;
      justify-content: space-between;
      margin-top: 0.75rem;
      margin-bottom: 0;
    }
    .box-input {
      width: 30%;
      flex: 0 0 auto;
    }
  `,a=e=>{const{theme:i}=e,s=i&&i.colors?i.colors.palette.dark[300]:"#c8cbcd",n=i&&i.colors?i.colors.black:"black";return t.css`
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
          color: ${n};
          &.disabled {
            color: ${s};
          }
        }
      }
    }
    .tips {
      color: ${s};
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
  `},o=e=>{const{theme:i}=e,s=i?i.colors.palette.light[500]:"",n=i?i.colors.palette.primary[700]:"";return t.css`
    display: flex;
    .btn {
      border-radius: 0;
      height:${t.polished.rem(20)};
      width:${t.polished.rem(20)};
      border: 1px solid ${s};
      &.active {
          outline: 1px solid ${n};
      }
    }
    .btn:not(:last-of-type) {
      margin-right: 6px;
    }
  `};var l=c(34796),r=c(30726),p=c(21161),d=c.n(p),u=c(47383),m=c.n(u),I=c(1465),M=c.n(I),h=c(61733),y=c.n(h),N=c(68930),x=c.n(N),j=c(69625),w=c.n(j);const b={dashed:y(),dotted:M(),double:d(),solid:m(),esriSLSDash:y(),esriSLSDot:M(),esriSLSSolid:m(),esriSLSDashDot:w(),esriSLSDashDotDot:x()},v={dashed:"dashed",dotted:"dotted",double:"double",solid:"solid",esriSLSDash:"dashed",esriSLSDot:"dotted",esriSLSSolid:"solid",esriSLSDashDot:"dashDot",esriSLSDashDotDot:"dashDoubleDot"},C=e=>{var i;const s=t.hooks.useTranslation(r.defaultMessages),{type:n="normal",value:a="solid",className:o,style:l,onChange:c,"aria-label":g}=e,p=t.React.useMemo((()=>("normal"===n?Object.values(r.NormalLineType):Object.values(r.EsriSimpleLineSymbolStyle)).map((e=>({label:s(v[e]),value:e})))),[s,n]),d=null===(i=p.find((e=>e.value===a)))||void 0===i?void 0:i.label;return t.React.createElement("div",{className:(0,t.classNames)(o,"style-setting--line-style-selector"),style:l},t.React.createElement(r.Select,{size:"sm",name:"lineType",value:a,title:d,onChange:e=>{const t=e.currentTarget.value;null==c||c(t)},"aria-label":g},p.map(((e,i)=>t.React.createElement(r.Option,{className:"py-0",key:i,title:e.label,value:e.value,label:e.label},t.React.createElement("span",{style:{width:46}},t.React.createElement(r.Icon,{className:"w-100",icon:b[e.value]})))))))},A=["year","month","day"],D=["year","month","week","day"],z=["hour","minute","second"],f=[...D,...z],O=(0,l.styled)(r.DropdownMenu)`
  min-width: 60px !important;
`,S=["px"],T=e=>{const i=t.hooks.useTranslation(r.defaultMessages),{className:s,style:n,title:a=i("changeUnit"),disabled:o,value:l="px",units:c=S,onChange:g}=e,p=o||c.length<=1,d=e=>f.includes(e)?i(e):e;return t.React.createElement(r.Dropdown,{direction:"down",size:"sm",disabled:p,style:n,title:a,activeIcon:!0,autoWidth:!0,className:(0,t.classNames)(s,"style-setting--unit-selector","jimu-outline-inside")},t.React.createElement(r.DropdownButton,{arrow:!1,size:"sm","aria-label":i("unit")},d(l)),t.React.createElement(O,{alignment:"end"},c.map((e=>{const i=d(e);return t.React.createElement(r.DropdownItem,{className:"px-1",active:l===e,"aria-pressed":l===e,"aria-label":i,key:e,onClick:()=>{var t;(t=e)!==l&&(null==g||g(t))}},t.React.createElement("div",{className:"text-truncate",title:i},i))}))))};const L={val:0,unit:"px"},k=["px"],P=(0,l.styled)(r.InputGroup)`
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
`,E=e=>{const{min:i,max:s,precision:n,className:a,disabled:o=!1,units:l=k,value:c=L,onChange:g,"aria-label":p}=e,d=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["min","max","precision","className","disabled","units","value","onChange","aria-label"]),u=(e=>{if(e&&"object"==typeof e)return e;const i=t.polished.getValueAndUnit(e);return{val:null==i?void 0:i[0],unit:(null==i?void 0:i[1])||"px"}})(c),m=null!==u?`${p?`${p}, `:""}${u.unit}`:p;return t.React.createElement(P,Object.assign({className:(0,t.classNames)(a,"style-setting--base-unit-input")},d),t.React.createElement(r.NumericInput,{"aria-label":m,size:"sm",min:i,max:s,precision:n,value:isNaN(u.val)?"":u.val,disabled:o,showHandlers:!1,onAcceptValue:(e,i)=>{null==e&&""===(null==u?void 0:u.val)||null==g||g(t.lodash.assign({},u,{val:e}),i)}}),t.React.createElement(T,{disabled:o,units:l,value:u.unit,onChange:e=>{null==g||g(t.lodash.assign({},u,{unit:e}))}}))};const Z={distance:0,unit:"px"},B=["px"],R=e=>{const{className:i,units:s=B,value:n=Z,onChange:a}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className","units","value","onChange"]),l=(e=>{var t,i;return"string"==typeof e?e:{val:null!==(t=null==e?void 0:e.distance)&&void 0!==t?t:0,unit:null!==(i=null==e?void 0:e.unit)&&void 0!==i?i:"px"}})(n);return t.React.createElement(E,Object.assign({className:(0,t.classNames)(i,"style-setting--input-unit"),units:s,value:l,onChange:(e,t)=>{var i,s;const n=null!==(i=null==e?void 0:e.val)&&void 0!==i?i:0,o=null!==(s=null==e?void 0:e.unit)&&void 0!==s?s:"px";null==a||a({distance:n,unit:o},t)}},o))};const Y={val:0,unit:"year"},G=["year"],Q=(0,l.styled)(E)`
 .jimu-numeric-input {
    width: calc(100% - 60px)
  }
  > .style-setting--unit-selector button {
    width: 60px;
  }
`,W=e=>{const{className:i,value:s=Y,units:n=G}=e,a=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className","value","units"]);return t.React.createElement(Q,Object.assign({className:(0,t.classNames)(i,"style-setting--date-unit-input")},a,{value:s,units:n}))};var U=c(41362);const H=[r.DistanceUnits.PIXEL],V={type:r.NormalLineType.DASHED,color:void 0,width:"0px"},F=e=>{const{value:i=V,onChange:s,className:n,style:a}=e,{type:o,color:c,width:g}=i,p=(0,l.useTheme2)(),d=t.hooks.useTranslation(r.defaultMessages),u=(e,n)=>{const a={};a[e]=n,null==s||s(t.lodash.assign({},i,a))};return t.React.createElement("div",{className:(0,t.classNames)("style-setting--border-setting",n),style:a},t.React.createElement(U.ThemeColorPicker,{"aria-label":d("color"),specificTheme:p,className:"item",onChange:e=>{u("color",e)},value:c}),t.React.createElement(C,{"aria-label":d("lineStyle"),className:"item",value:o,onChange:e=>{u("type",e)}}),t.React.createElement(R,{"aria-label":d("width"),min:0,precision:0,units:H,className:"item",value:g,onChange:e=>{u("width",r.utils.stringOfLinearUnit(e))}}))},J=(0,l.withStyles)(F,"BorderSetting");var X=c(77756);class K extends t.React.PureComponent{constructor(){super(...arguments),this.translate=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:r.defaultMessages[e]}):e,this.getShadows=()=>[{name:"offsetX",label:this.translate("offsetX"),min:-200,max:200},{name:"offsetY",label:this.translate("offsetY"),min:-200,max:200},{name:"blur",label:this.translate("blurRadius"),min:0,max:300},{name:"spread",label:this.translate("spreadRadius"),min:-200,max:200}]}_updateShadow(e,i){const{value:s}=this.props;this.props.onChange(t.lodash.assign({},s,{[e]:i}))}render(){const{value:e,className:i,theme2:s}=this.props;return(0,t.jsx)("div",{className:(0,t.classNames)("style-setting--box-shadow-setting",i),role:"group","aria-label":this.translate("boxShadow")},this.getShadows().map(((i,s)=>(0,t.jsx)(X.SettingRow,{key:s,label:i.label},(0,t.jsx)(R,{"aria-label":i.label,precision:0,className:"box-input",min:i.min,max:i.max,value:e[i.name],onChange:e=>{this._updateShadow(i.name,r.utils.stringOfLinearUnit(e))}})))),(0,t.jsx)(X.SettingRow,{label:this.translate("color")},(0,t.jsx)(U.ThemeColorPicker,{className:"box-color ml-auto",specificTheme:s,value:e.color,onChange:e=>{this._updateShadow("color",e)}})))}}K.defaultProps={value:{offsetX:"0px",offsetY:"0px",blur:"0px",spread:"0px",color:void 0},onChange:()=>{}};const $=(0,l.withStyles)((0,l.withTheme)((0,t.injectIntl)(K),!0),"BoxShadowSetting");var _=c(30840),q=c.n(_);const ee=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:q()},n)):t.React.createElement("svg",Object.assign({className:a},n))};var te=c(57322),ie=c.n(te);const se=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:ie()},n)):t.React.createElement("svg",Object.assign({className:a},n))};class ne extends t.React.PureComponent{constructor(e){super(e),this._onSideValueChange=(e,t)=>{const{bindAll:i}=this.state;if(i)this._onAllSidesValueChange(e);else{const{value:i}=this.props,s=r.styleUtils.expandStyleArray(i.number);s[t]=e,this.props.onChange({number:s,unit:i.unit})}},this._onUnitChange=e=>{const{value:t}=this.props;if(e!==t.unit){const i=r.styleUtils.expandStyleArray(t.number);this.props.onChange({number:i,unit:e})}},this._onAllSidesValueChange=e=>{this.props.onChange({number:[e],unit:this.props.value.unit})},this._toggleBindAll=()=>{const{disabled:e}=this.props;if(!e){if(!this.state.bindAll){const{value:e}=this.props,t=r.styleUtils.expandStyleArray(e.number);this._onAllSidesValueChange(t[0])}this.setState({bindAll:!this.state.bindAll})}},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:r.defaultMessages[e]}):e,this.handleAcceptValue=(e,t)=>{this._onSideValueChange(e,t)},this.state={bindAll:!1}}render(){const{value:e,units:i,showTip:s,sides:n,min:a,max:o,disabled:l,className:c}=this.props,{bindAll:g}=this.state,p=r.styleUtils.expandStyleArray(e.number);return(0,t.jsx)("div",{className:(0,t.classNames)("style-setting--four-sides",c)},(0,t.jsx)("div",{className:"content"},(0,t.jsx)(r.InputGroup,null,n.map(((e,i)=>{const n=this.nls(e);return(0,t.jsx)(r.NumericInput,{size:"sm",key:i,placeholder:s?e:"",title:n,"aria-label":n,min:a,max:o,disabled:l,value:p[i],onAcceptValue:e=>{this.handleAcceptValue(e,i)},showHandlers:!1})})),(0,t.jsx)("div",{className:"unit-selector-con"},(0,t.jsx)(T,{units:i,value:e.unit,onChange:this._onUnitChange}))),(0,t.jsx)(r.Button,{icon:!0,type:"tertiary",className:"lock-btn",onClick:this._toggleBindAll,title:g?this.nls("lock"):this.nls("unlock"),"aria-label":g?this.nls("lock"):this.nls("unlock")},g?(0,t.jsx)(ee,{className:(0,t.classNames)({disabled:l})}):(0,t.jsx)(se,{className:(0,t.classNames)({disabled:l})}))),s&&(0,t.jsx)("div",{className:"tips"},(0,t.jsx)("div",{className:"tip-group"},n.map(((e,i)=>(0,t.jsx)("div",{key:i,title:this.nls(e)},e)))),(0,t.jsx)("div",null)))}}ne.defaultProps={units:[r.DistanceUnits.PIXEL,r.DistanceUnits.PERCENTAGE],showTip:!0,value:{number:[0],unit:r.DistanceUnits.PIXEL},disabled:!1,min:0,max:100,sides:[r.Sides.T,r.Sides.R,r.Sides.B,r.Sides.L],onChange:()=>{}};const ae=(0,l.withStyles)((0,t.injectIntl)(ne),"FourSides");var oe;!function(e){e.AVENIRNEXT="Avenir Next",e.CALIBRI="Calibri",e.PMINGLIU="PmingLiu",e.IMPACT="Impact",e.GEORGIA="Georgia",e.ARIAL="Arial",e.TIMESNEWROMAN="Times New Roman",e.SIMHEI="SimHei",e.MICROSOFTYAHEI="Microsoft YaHei"}(oe||(oe={}));const le=[oe.AVENIRNEXT,oe.CALIBRI,oe.PMINGLIU,oe.IMPACT,oe.GEORGIA,oe.ARIAL,oe.TIMESNEWROMAN,oe.SIMHEI,oe.MICROSOFTYAHEI],re=e=>{const{font:i=oe.AVENIRNEXT,"aria-label":s,onChange:n,style:a,className:o}=e;return t.React.createElement(r.Select,{title:i,"aria-label":s,style:a,value:i,onChange:e=>{n(e.target.value)},className:(0,t.classNames)(o,"style-setting--font-family")},le.map(((e,i)=>t.React.createElement("option",{key:i,value:e,label:e},e))))},ce=t.css`
  font-size: 10px;
  color: var(--dark-600);
  text-align: center;
`;class ge extends t.React.PureComponent{constructor(){super(...arguments),this.width=100,this.height=100,this.onWidthChange=e=>{this.props.onChange(`${e}:${this.height}`)},this.onHeightChange=e=>{this.props.onChange(`${this.width}:${e}`)}}parseAspectRatio(e){if("number"==typeof e)this.width=100,this.height=Math.round(100*e);else if("string"==typeof e){const t=e.split(":");this.width=parseInt(t[0],10),this.height=parseInt(t[1],10)}}formatMessage(e){return this.props.intl.formatMessage({id:e,defaultMessage:r.defaultMessages[e]})}render(){const{style:e,disabled:i,value:s}=this.props;return this.parseAspectRatio(s),(0,t.jsx)(r.InputGroup,{className:(0,t.classNames)("style-setting--input-ratio"),style:e},(0,t.jsx)("div",{className:"d-flex flex-column justify-content-start align-items-center",style:{width:"45%"}},(0,t.jsx)(r.NumericInput,{size:"sm",min:1,max:100,value:isNaN(this.width)?"":this.width,showHandlers:!1,onChange:this.onWidthChange,disabled:i,"aria-label":this.formatMessage("width")}),(0,t.jsx)("div",{className:"px-1 mt-1 w-100",css:ce,title:this.formatMessage("width")},"W")),(0,t.jsx)("div",{className:"h-100 text-center",style:{width:"10%"}},":"),(0,t.jsx)("div",{className:"d-flex flex-column justify-content-start align-items-center",style:{width:"45%"}},(0,t.jsx)(r.NumericInput,{size:"sm",min:1,value:isNaN(this.height)?"":this.height,showHandlers:!1,onChange:this.onHeightChange,disabled:i,"aria-label":this.formatMessage("height")}),(0,t.jsx)("div",{className:"px-1 mt-1 w-100",css:ce,title:this.formatMessage("height")},"H")))}}ge.defaultProps={value:1,disabled:!1,onChange:()=>{}};const pe=(0,t.injectIntl)(ge),de=t.css`
  .jimu-numeric-input-input{
    z-index: auto;
    &:focus {
      z-index: 1;
    }
  }
  .unit-selector-con {
    margin-left: -1px;
  }
`,ue=[r.Sides.T,r.Sides.R,r.Sides.B,r.Sides.L],me=[r.BorderSides.TL,r.BorderSides.TR,r.BorderSides.BR,r.BorderSides.BL],Ie=[r.DistanceUnits.PIXEL,r.DistanceUnits.PERCENTAGE],Me={number:[0,0,0,0],unit:r.DistanceUnits.PIXEL},he=e=>{const i=t.hooks.useTranslation(r.defaultMessages),s=i("unifiedNumericValue"),{type:n="edge",value:a=Me,className:o,min:l=0,max:c=100,units:g=Ie,disabled:p=!1,onActivatedChange:d,onChange:u,detached:m,unifiedTitle:I=s,unifiedAriaLabel:M=s}=e,h=a.number,y=a.unit,N=t.React.useMemo((()=>"edge"===n?ue:me),[n]),x=(e,t)=>{if(e=Math.floor(+e),m){const i=[...h];i[t]=e,null==u||u({number:i,unit:y})}else{const t=r.styleUtils.expandStyleArray([e]);null==u||u({number:t,unit:a.unit})}};return(0,t.jsx)(r.InputGroup,{css:de,className:(0,t.classNames)("edges-number",o)},!m&&(0,t.jsx)(r.NumericInput,{size:"sm",min:l,max:c,title:I,"aria-label":M,disabled:p,value:null==h?void 0:h[0],onAcceptValue:e=>{x(e,0)},showHandlers:!1}),m&&N.map(((e,s)=>{const n=i(e);return(0,t.jsx)(r.NumericInput,{size:"sm",key:e,title:n,"aria-label":n,min:l,max:c,disabled:p,value:h[s],onAcceptValue:e=>{x(e,s)},onFocus:()=>{d(s)},onBlur:()=>{d(-1)},showHandlers:!1})})),(0,t.jsx)("div",{className:"unit-selector-con"},(0,t.jsx)(T,{disabled:p,units:g,value:a.unit,onChange:e=>{null==u||u({number:a.number,unit:e})}})))};const ye=t.css`
  padding: 4px !important;
  .content {
    width: 16px;
    height: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &.unified {
      border: 1px solid var(--black);
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
        border-top: 1px solid var(--black);
        border-left: 1px solid var(--black);
        border-radius: 4px 0 0 0;
      }
      &.top-right {
        border-top: 1px solid var(--black);
        border-right: 1px solid var(--black);
        border-radius: 0 4px 0 0;
      }
      &.bottom-left {
        border-bottom: 1px solid var(--black);
        border-left: 1px solid var(--black);
        border-radius: 0 0 0 4px;
      }
      &.bottom-right {
        border-bottom: 1px solid var(--black);
        border-right: 1px solid var(--black);
        border-radius: 0 0 4px 0;
      }
    }
  }
`,Ne=e=>{const{className:i,activated:s=-1,detached:n}=e,a=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className","activated","detached"]);return(0,t.jsx)(r.Button,Object.assign({css:ye,className:(0,t.classNames)("corner",i)},a),(0,t.jsx)("div",{className:(0,t.classNames)("content",{unified:!n},{"none-select":s<0})},n&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"top"},(0,t.jsx)("div",{className:(0,t.classNames)("top-left corner",{selected:0===s})}),(0,t.jsx)("div",{className:(0,t.classNames)("top-right corner",{selected:1===s})})),(0,t.jsx)("div",{className:"bottom"},(0,t.jsx)("div",{className:(0,t.classNames)("bottom-left corner",{selected:3===s})}),(0,t.jsx)("div",{className:(0,t.classNames)("bottom-right corner",{selected:2===s})})))))};const xe=t.css`
  padding: 4px !important;
  .content {
    width: 16px;
    height: 16px;
    position: relative;
    &.unified {
      border: 1px solid var(--black);
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
        border-top: 1px solid var(--black);
        height: 3px;
      }
      > .middle {
        height: calc(100% - 6px);
        width: 100%;
        display: flex;
        justify-content: space-between;
        > .left {
          border-left: 1px solid var(--black);
          width: 3px;
          height: 100%;
        }
        > .right {
          border-right: 1px solid var(--black);
          width: 3px;
          height: 100%;
        }
      }
      > .bottom {
        border-bottom: 1px solid var(--black);
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
      border: 1px dotted var(--black);
      opacity: 0.4;
      z-index: 1;
      position: absolute;
      left: calc(50% - 4px);
      top: calc(50% - 4px);
    }
  }
`,je=e=>{const{className:i,activated:s=-1,detached:n}=e,a=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className","activated","detached"]);return(0,t.jsx)(r.Button,Object.assign({css:xe,className:(0,t.classNames)("edge",i)},a),(0,t.jsx)("div",{className:(0,t.classNames)("content",{unified:!n},{"none-select":s<0})},n&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:(0,t.classNames)("edge top",{selected:0===s})}),(0,t.jsx)("div",{className:"middle"},(0,t.jsx)("div",{className:(0,t.classNames)("edge left",{selected:3===s})}),(0,t.jsx)("div",{className:(0,t.classNames)("edge right",{selected:1===s})})),(0,t.jsx)("div",{className:(0,t.classNames)("edge bottom",{selected:2===s})})),(0,t.jsx)("div",{className:"inner-box"})))};const we=e=>{const{type:i="edge",detached:s,onDetachedChange:n,onClick:a}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["type","detached","onDetachedChange","onClick"]),l=(e,t)=>{null==n||n(e),null==a||a(t)},c=t.hooks.useTranslation(r.defaultMessages),g=c("unified"),p=c("independent");return t.React.createElement(t.React.Fragment,null,"edge"===i&&t.React.createElement(r.AdvancedButtonGroup,null,"edge"===i&&t.React.createElement(je,Object.assign({active:!s,detached:!1,title:g,"aria-label":g},o,{onClick:e=>{l(!1,e)}})),"edge"===i&&t.React.createElement(je,Object.assign({active:s,detached:!0,title:p,"aria-label":p},o,{onClick:e=>{l(!0,e)}}))),"corner"===i&&t.React.createElement(r.AdvancedButtonGroup,null,t.React.createElement(Ne,Object.assign({active:!s,detached:!1,title:g,"aria-label":g},o,{onClick:e=>{l(!1,e)}})),t.React.createElement(Ne,Object.assign({active:s,detached:!0,title:p,"aria-label":p},o,{onClick:e=>{l(!0,e)}}))))};const be=t.css`
  width: 100%;
  .jimu-numeric-input {
    z-index: 0;
    &:focus-within {
      z-index: 1;
    }
  }
  .input-group-append {
    z-index: 0;
    &:focus-within {
      z-index: 1;
    }
  }
  .content {
    .btn-group {
      margin-right: 6px;
    }
    .input-group {
      .input-group-append {
        margin-left: 0;
      }
    }
  }
`,ve={number:[0,0,0,0],unit:r.DistanceUnits.PIXEL},Ce=[r.DistanceUnits.PIXEL,r.DistanceUnits.PERCENTAGE],Ae=e=>{const{type:i="edge",value:s=ve,units:n=Ce,min:a=0,max:o=100,disabled:l=!1,className:c,style:g,onChange:p,separated:d=!0}=e,u=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["type","value","units","min","max","disabled","className","style","onChange","separated"]),m=(e=>{let t=e;if((null==e?void 0:e.number)&&4!==e.number.length){const i=r.styleUtils.expandStyleArray(e.number);t=Object.assign(Object.assign({},t),{number:i})}return t})(s),I=m.number,M=m.unit,[h,y]=t.React.useState((()=>(e=>{const t=null==e?void 0:e.number;return!(!t||t[0]===t[1]&&t[1]===t[2]&&t[2]===t[3])})(m))),[N,x]=t.React.useState(-1);return(0,t.jsx)("div",{className:(0,t.classNames)("style-setting--four-edges",c),style:g,css:be},(0,t.jsx)("div",{className:"content d-flex"},d&&(0,t.jsx)(we,{type:i,detached:h,activated:N,disabled:l,onDetachedChange:e=>{if(!l){if(!e){const e=r.styleUtils.expandStyleArray([I[0]]);null==p||p({number:e,unit:M})}y(e)}}}),(0,t.jsx)(he,Object.assign({type:i,detached:h,value:m,min:a,max:o,disabled:l,units:n,onChange:p},u,{onActivatedChange:x}))))};const De=e=>{const{className:i,value:s,onChange:n}=e,a=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className","value","onChange"]),o=t.React.useMemo((()=>null==s?void 0:s.asMutable({deep:!0})),[s]),l=t.hooks.useTranslation(r.defaultMessages),c=t.React.useMemo((()=>l("borderRadius")),[l]);return t.React.createElement(Ae,Object.assign({type:"corner",value:o,onChange:e=>{null==n||n((0,t.Immutable)(e))},unifiedAriaLabel:c,unifiedTitle:c},a,{className:(0,t.classNames)("style-setting--border-radius",i)}))};var ze=c(35212),fe=c.n(ze);const Oe=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:fe()},n)):t.React.createElement("svg",Object.assign({className:a},n))};var Se=c(81874),Te=c.n(Se);const Le=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:Te()},n)):t.React.createElement("svg",Object.assign({className:a},n))};var ke=c(71007),Pe=c.n(ke);const Ee=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:Pe()},n)):t.React.createElement("svg",Object.assign({className:a},n))};var Ze=c(58285),Be=c.n(Ze);const Re=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:Be()},n)):t.React.createElement("svg",Object.assign({className:a},n))};const Ye=["bold","italic","underline","strike"],Ge=e=>{const{types:i=Ye,bold:s,italic:n,underline:a,strike:o,onChange:l,"aria-label":c,size:g="sm"}=e,p=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["types","bold","italic","underline","strike","onChange","aria-label","size"]),d=t.hooks.useTranslation(r.defaultMessages),u=c||d("fontStyle");return t.React.createElement(r.ButtonGroup,Object.assign({size:g},p,{role:"group","aria-label":u}),i.map(((i,s)=>{const n=!!e[i];return t.React.createElement(r.Button,{key:s,title:d(i),"aria-label":d(i),"aria-pressed":n,active:n,type:"default",icon:!0,onClick:()=>{l(i,!e[i])}},"bold"===i&&t.React.createElement(Oe,null),"italic"===i&&t.React.createElement(Le,null),"underline"===i&&t.React.createElement(Ee,null),"strike"===i&&t.React.createElement(Re,null))})))};const Qe=c(38275),We=e=>{const i=(0,l.useTheme2)(),s=t.hooks.useTranslation(r.defaultMessages),{className:n,bold:a,italic:o,strike:c,underline:g,color:p,size:d="16px",onChange:u}=e,m=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className","bold","italic","strike","underline","color","size","onChange"]),I=(e,t)=>{null==u||u(e,t)};return t.React.createElement("div",Object.assign({className:(0,t.classNames)("d-flex justify-content-between w-100",n)},m),t.React.createElement(Ge,{bold:a,italic:o,strike:c,underline:g,onChange:I}),t.React.createElement(U.ThemeColorPicker,{"aria-label":s("fontColor"),icon:Qe,type:"with-icon",specificTheme:i,value:p,onChange:e=>{I("color",e)}}),t.React.createElement(R,{"aria-label":s("fontSize"),min:4,max:999,style:{width:"35%"},value:d,onChange:e=>{I("size",`${e.distance}${e.unit}`)}}))};var Ue=c(47118),He=c.n(Ue);const Ve=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:He()},n)):t.React.createElement("svg",Object.assign({className:a},n))};var Fe=c(13468),Je=c.n(Fe);const Xe=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:Je()},n)):t.React.createElement("svg",Object.assign({className:a},n))};var Ke=c(192),$e=c.n(Ke);const _e=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:$e()},n)):t.React.createElement("svg",Object.assign({className:a},n))};var qe=c(67653),et=c.n(qe);const tt=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:et()},n)):t.React.createElement("svg",Object.assign({className:a},n))};const it=e=>{var i,s;const n=null===(s=null===(i=(0,t.getAppStore)().getState())||void 0===i?void 0:i.appContext)||void 0===s?void 0:s.isRTL,{buttonType:a="default",textAlign:o=(n?r.TextAlignValue.RIGHT:r.TextAlignValue.LEFT),onChange:l,className:c,showJustify:g=!1,autoFlip:p=!1}=e,d=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["buttonType","textAlign","onChange","className","showJustify","autoFlip"]),u=t.hooks.useTranslation(r.defaultMessages);return t.React.createElement(r.ButtonGroup,Object.assign({},d,{className:(0,t.classNames)("text-alignment",c,{"flex-row-reverse":n&&p})}),t.React.createElement(r.Button,{title:u(n&&!p?"right":"left"),type:a,icon:!0,size:"sm",active:o===r.TextAlignValue.LEFT,"aria-pressed":o===r.TextAlignValue.LEFT,onClick:()=>{l(r.TextAlignValue.LEFT)}},t.React.createElement(Ve,{autoFlip:!p})),t.React.createElement(r.Button,{title:u("center"),type:a,icon:!0,size:"sm",active:o===r.TextAlignValue.CENTER,"aria-pressed":o===r.TextAlignValue.CENTER,onClick:()=>{l(r.TextAlignValue.CENTER)}},t.React.createElement(Xe,null)),t.React.createElement(r.Button,{title:u(n&&!p?"left":"right"),type:a,icon:!0,size:"sm",active:o===r.TextAlignValue.RIGHT,"aria-pressed":o===r.TextAlignValue.RIGHT,onClick:()=>{l(r.TextAlignValue.RIGHT)}},t.React.createElement(_e,{autoFlip:!p})),g&&t.React.createElement(r.Button,{title:u("justify"),type:a,icon:!0,size:"sm",active:o===r.TextAlignValue.JUSTIFY,"aria-pressed":o===r.TextAlignValue.JUSTIFY,onClick:()=>{l(r.TextAlignValue.JUSTIFY)}},t.React.createElement(tt,null)))};var st=c(74758),nt=c(18371),at=c.n(nt);const ot=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:at()},n)):t.React.createElement("svg",Object.assign({className:a},n))},lt=[r.DistanceUnits.PIXEL,r.DistanceUnits.PERCENTAGE],rt=[st.LayoutItemSizeModes.Auto,st.LayoutItemSizeModes.Stretch,st.LayoutItemSizeModes.Custom];class ct extends t.React.PureComponent{constructor(e){super(e),this.handleChange=e=>{e!==this.props.mode&&this.props.onModeChange(e)},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:r.defaultMessages[e]}):e,this.getPopperStyle=()=>t.css`
      .units-list {
        border-radius: 2px;
        background: var(--light-500);
        padding: 2px 0;
        .style-setting--markable-item {
          height: ${t.polished.rem(26)};
        }
        .unit-item {
          justify-content: flex-start;
        }
      }
    `}getStyle(){return t.css`
      background: var(--light-200);
      height: 26px;

      .side-label {
        font-size: 10px;
      }

      .prop-label {
        background-color: var(--light-400);
        font-size: 12px;
        line-height: 26px;
        color: var(--dark-400);
      }

      .jimu-dropdown {
        z-index: 0;

        &:focus-within {
          z-index: 1;
        }
      }

      .style-setting--input-unit {
        background: var(--light-200);
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
          background: var(--light-200);
          color: var(--black);
          height: 26px;
          width: auto;
          min-width: 0;
          padding: 0;
          margin-left: 0;
          font-size: 12px;
          border: none;
        }
      }
    `}render(){var e;const{mode:i,value:s,disableModeSelect:n=!1,disabled:a}=this.props;if(a)return(0,t.jsx)("div",{className:"d-flex size-editor w-100",css:this.getStyle()},(0,t.jsx)("div",{title:this.nls(st.LayoutItemSizeModes.Auto.toLowerCase()),className:"prop-label px-2 text-truncate text-center w-100"},this.nls(st.LayoutItemSizeModes.Auto.toLowerCase())));const o=null!==(e=this.props.sizeModes)&&void 0!==e?e:rt;return(0,t.jsx)("div",{className:"d-flex size-editor w-100",css:this.getStyle()},!n&&(0,t.jsx)(r.Dropdown,{direction:"down",size:"sm",menuItemCheckMode:"singleCheck"},(0,t.jsx)(r.DropdownButton,{arrow:!0,icon:!0,size:"sm",className:"p-0"}),(0,t.jsx)(r.DropdownMenu,{className:"p-0",css:t.css`min-width: 5rem;`},o.map(((e,s)=>(0,t.jsx)(r.DropdownItem,{active:e===i,"aria-label":this.nls(e.toLowerCase()),key:s,onClick:()=>{this.handleChange(e)}},(0,t.jsx)("div",{className:"d-flex alitn-items-center justify-content-end w-100"},e===i&&(0,t.jsx)(ot,{className:"mr-2"}),this.nls(e.toLowerCase()))))))),i!==st.LayoutItemSizeModes.Custom&&(0,t.jsx)("div",{className:"prop-label flex-grow-1 px-2 text-truncate text-center",title:"function"==typeof(null==i?void 0:i.toLowerCase)&&this.nls(i.toLowerCase())},"function"==typeof(null==i?void 0:i.toLowerCase)&&this.nls(i.toLowerCase())),i===st.LayoutItemSizeModes.Custom&&(0,t.jsx)(R,{units:this.props.availableUnits||lt,min:0,max:1/0,precision:2,value:st.utils.normalizeLinearUnit(s),onChange:this.props.onChange}))}}ct.defaultProps={disableModeSelect:!1,onChange:()=>{}};const gt=(0,t.injectIntl)(ct);var pt=c(20663);class dt extends t.React.PureComponent{constructor(e){super(e),this.openBrowseImage=e=>{const{background:i}=this.props;this.props.onChange(t.lodash.assign({},i,{image:e}))},this._onPositionChange=e=>{const{background:i}=this.props,s=e.target.value;this.props.onChange(t.lodash.assign({},i,{fillType:s}))},this._onColorChange=e=>{const{background:i}=this.props;this.props.onChange(t.lodash.assign({},i,{color:e}))},this.translate=(e,t)=>{var i,s;const n=Object.assign({},r.defaultMessages);return null===(s=null===(i=this.props)||void 0===i?void 0:i.intl)||void 0===s?void 0:s.formatMessage({id:e,defaultMessage:n[e]},t)},this.getFillType=()=>[{value:r.FillType.FIT,label:this.translate("fit")},{value:r.FillType.FILL,label:this.translate("fill")},{value:r.FillType.CENTER,label:this.translate("center")},{value:r.FillType.TILE,label:this.translate("tile")},{value:r.FillType.STRETCH,label:this.translate("stretch")}],this.fileInput=t.React.createRef()}render(){var e;const{background:i,className:s,style:n,theme:a,theme2:o}=this.props,l=null===(e=i.image)||void 0===e?void 0:e.originalName,c=`image-dynamic-selected-${t.utils.getUID()}`;return(0,t.jsx)("div",{className:(0,t.classNames)(s,"jimu-builder--background-setting"),style:n},(0,t.jsx)(X.SettingRow,{label:this.translate("fill")},(0,t.jsx)(U.ThemeColorPicker,{className:"ml-auto",title:this.translate("fillColor"),"aria-label":this.translate("fillColor"),specificTheme:o||a,onChange:this._onColorChange,value:i.color})),(0,t.jsx)(X.SettingRow,{className:"background-image",label:this.translate("image")},(0,t.jsx)(pt.ImageSelector,Object.assign({widgetId:"background-setting",buttonLabel:this.translate("browse"),buttonSize:"sm",className:"w-50",buttonClassName:"text-dark d-flex justify-content-center btn-browse",onChange:this.openBrowseImage,imageParam:i.image,"aria-label":this.translate("browseImage")},l?{"aria-describedby":c}:{})),l&&(0,t.jsx)("div",{id:c,style:{display:"none"},"aria-label":this.translate("numSelected",{number:l})})),(0,t.jsx)(X.SettingRow,{className:"background-image-fill-type",label:this.translate("position")},(0,t.jsx)(r.Select,{"aria-label":this.translate("position"),size:"sm",className:"fill-type",name:"bg-position",value:i.fillType,onChange:this._onPositionChange.bind(this)},this.getFillType().map(((e,i)=>{var s;return(0,t.jsx)("option",{key:i,value:e.value},null!==(s=e.label)&&void 0!==s?s:e.value)})))))}}dt.defaultProps={background:{color:void 0,fillType:r.FillType.FILL,image:{url:""}},onChange:()=>{}};const ut=(0,l.withStyles)((0,l.withTheme)((0,t.injectIntl)(dt),!0),"BackgroundSetting");var mt=c(59913),It=c.n(mt);const Mt=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:It()},n)):t.React.createElement("svg",Object.assign({className:a},n))};var ht=c(42957),yt=c.n(ht);const Nt=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:yt()},n)):t.React.createElement("svg",Object.assign({className:a},n))};function xt(){const e=t.css`
    position: absolute;
    top: -2px;
    right: -2px;
    .icon-container {
      width: 1rem;
      height: 1rem;
      background: linear-gradient(to top right, transparent 50%, var(--primary-600) 50% 100%);
      svg {
        margin-top: 1px;
        margin-right: 1px;
      }
    }
  `;return(0,t.jsx)("div",{css:e},(0,t.jsx)("div",{className:"d-flex justify-content-end align-items-start icon-container"},(0,t.jsx)(Nt,{color:"var(--white)",size:8})))}const jt=[null,"primary-100","primary-200","primary-300","light-100","light-300","light-500","light-700"];class wt extends t.React.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{this.setState({isDropdownOpen:!this.state.isDropdownOpen})},this.getStyle=e=>{var i,s;const{theme2:n}=this.props;let a,o;if(null!=e){const t=e.split("-");a=t[0],o=t[1]}return t.css`
      width: 88px;
      height: 24px;
      position: relative;
      &:not(.has-color) {
        border: 2px solid ${n.colors.palette.dark[200]};
        background: linear-gradient(
          to top right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) calc(50% - 1.5px),
          ${n.colors.palette.dark[200]} 50%,
          rgba(0, 0, 0, 0) calc(50% + 1.5px),
          rgba(0, 0, 0, 0) 100%
        );
      }
      &.has-color {
        border: 2px solid ${null===(i=n.colors.palette[a])||void 0===i?void 0:i[o]};
        background: ${null===(s=n.colors.palette[a])||void 0===s?void 0:s[o]};
      }
    `},this.createItem=(e,i)=>{const{background:s,isCustom:n,onChange:a}=this.props,o=!n&&(null==e?null==s||null==s.color:`var(--${e})`===s.color);return(0,t.jsx)(r.DropdownItem,{key:e,className:"jimu-outline-inside",onClick:()=>{a(!1,{color:null!=e?`var(--${e})`:null,fillType:r.FillType.FILL})},title:0===i?this.translate("none"):this.translate(`backgroundStyle${i}`),"aria-label":0===i?this.translate("none"):this.translate(`backgroundStyle${i}`)},(0,t.jsx)("div",{css:this.getStyle(e),className:(0,t.classNames)("d-flex justify-content-center align-items-center",{"has-color":null!=e})},o&&(0,t.jsx)(xt,null)))},this.translate=e=>{var t,i;const s=Object.assign({},r.defaultMessages);return null===(i=null===(t=this.props)||void 0===t?void 0:t.intl)||void 0===i?void 0:i.formatMessage({id:e,defaultMessage:s[e]})},this.state={isDropdownOpen:!1}}render(){const{className:e,onChange:i,isCustom:s}=this.props;return(0,t.jsx)(r.Dropdown,{isOpen:this.state.isDropdownOpen,className:(0,t.classNames)(e,"jimu-builder--theme-background-setting"),toggle:this.toggleDropdown},(0,t.jsx)(r.Tooltip,{title:this.translate("quickStyle")},(0,t.jsx)(r.DropdownButton,{className:"jimu-outline-inside",icon:!0,type:"tertiary",arrow:!1},(0,t.jsx)(Mt,null))),(0,t.jsx)(r.DropdownMenu,{className:"text-truncate",css:t.css`
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
            outline: 2px solid var(--primary-700);
            outline-offset: 2px;
            background: transparent;
          }
        `},jt.map(((e,t)=>this.createItem(e,t))),(0,t.jsx)("div",{className:"my-2 px-2",css:t.css`height: 1px; background-color: var(--light-700);`}),(0,t.jsx)(r.DropdownItem,{className:"jimu-outline-inside",onClick:()=>{!s&&i(!0,null)},title:this.translate("custom"),"aria-label":this.translate("custom")},(0,t.jsx)("div",{css:t.css`
                width: 88px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                border: 1px solid var(--light-800);
                color: var(--dark-600);
                position: relative;
              `,className:"text-truncate px-1"},this.translate("custom"),s&&(0,t.jsx)(xt,null)))))}}wt.defaultProps={background:{color:void 0,fillType:r.FillType.FIT,image:{url:""}},onChange:()=>{}};const bt=(0,l.withTheme)((0,t.injectIntl)(wt),!0);function vt(e){const{background:i,onChange:s}=e,[n,a]=t.React.useState(!1),o=t.hooks.useTranslation(r.defaultMessages);t.hooks.useEffectOnce((()=>{var e,t;if(null==i)a(!1);else{if(null!=(null===(e=i.image)||void 0===e?void 0:e.url)&&""!==(null===(t=i.image)||void 0===t?void 0:t.url)||i.fillType!==r.FillType.FILL)return void a(!0);const s=null!=i.color&&""!==i.color&&jt.every((e=>null==e||`var(--${e})`!==i.color));a(s)}}));const l=t.React.useCallback(((e,o)=>{if(e!==n){if(a(e),e)return;return void s(o)}let l=(0,t.Immutable)(null!=i?i:{});for(const e in o)switch(e){case"fillType":l.fillType!==o[e]&&(l=l.set("fillType",o[e]));break;case"color":l=l.set("color",o[e]);break;case"image":l=l.set("image",o[e])}s(l)}),[i,n,s]);return(0,t.jsx)(X.SettingSection,{role:"group","aria-label":o("background"),title:(0,t.jsx)("div",{className:"d-flex w-100 align-items-center justify-content-between"},(0,t.jsx)("div",{className:"text-truncate setting-text-level-1"},o("background")),(0,t.jsx)(bt,{background:i,isCustom:n,onChange:l}))},n&&(0,t.jsx)(ut,{className:"mt-4",background:i,onChange:e=>{l(!0,e)}}))}const Ct=[null,"primary-200","primary-400","primary-600","light-300","light-600","light-900","dark-300"];class At extends t.React.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{this.setState({isDropdownOpen:!this.state.isDropdownOpen})},this.getStyle=e=>{var i;const{theme2:s}=this.props;let n,a;if(null!=e){const t=e.split("-");n=t[0],a=t[1]}return t.css`
      width: 88px;
      height: 24px;
      position: relative;
      &:not(.has-color) {
        border: 2px solid ${s.colors.palette.dark[200]};
        background: linear-gradient(
          to top right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) calc(50% - 1.5px),
          ${s.colors.palette.dark[200]} 50%,
          rgba(0, 0, 0, 0) calc(50% + 1.5px),
          rgba(0, 0, 0, 0) 100%
        );
      }
      &.has-color {
        border: 2px solid ${null===(i=s.colors.palette[n])||void 0===i?void 0:i[a]};
      }
    `},this.createItem=(e,i)=>{const{value:s,isCustom:n,onChange:a}=this.props,o=!n&&(null==e?null==s||null==s.color:`var(--${e})`===s.color&&s.type===r.NormalLineType.SOLID&&"2px"===s.width);return(0,t.jsx)(r.DropdownItem,{key:e,className:"jimu-outline-inside",onClick:()=>{a(!1,{color:null!=e?`var(--${e})`:null,type:r.NormalLineType.SOLID,width:"2px"})},title:0===i?this.translate("none"):this.translate(`borderStyle${i}`),"aria-label":0===i?this.translate("none"):this.translate(`borderStyle${i}`)},(0,t.jsx)("div",{css:this.getStyle(e),className:(0,t.classNames)({"has-color":null!=e})},o&&(0,t.jsx)(xt,null)))},this.translate=e=>{var t,i;const s=Object.assign({},r.defaultMessages);return null===(i=null===(t=this.props)||void 0===t?void 0:t.intl)||void 0===i?void 0:i.formatMessage({id:e,defaultMessage:s[e]})},this.state={isDropdownOpen:!1}}render(){const{className:e,isCustom:i,onChange:s}=this.props;return(0,t.jsx)(r.Dropdown,{isOpen:this.state.isDropdownOpen,className:(0,t.classNames)(e,"jimu-builder--theme-border-setting"),toggle:this.toggleDropdown},(0,t.jsx)(r.Tooltip,{title:this.translate("quickStyle")},(0,t.jsx)(r.DropdownButton,{className:"jimu-outline-inside",icon:!0,type:"tertiary",arrow:!1},(0,t.jsx)(Mt,null))),(0,t.jsx)(r.DropdownMenu,{className:"text-truncate",css:t.css`
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
            outline: 2px solid var(--primary-700);
            outline-offset: 2px;
            background: transparent;
          }
        `},Ct.map(((e,t)=>this.createItem(e,t))),(0,t.jsx)("div",{className:"my-2 px-2",css:t.css`height: 1px; background-color: var(--light-700);`}),(0,t.jsx)(r.DropdownItem,{className:"jimu-outline-inside",onClick:()=>{!i&&s(!0,null)},title:this.translate("custom"),"aria-label":this.translate("custom")},(0,t.jsx)("div",{css:t.css`
                width: 88px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                border: 1px solid var(--light-800);
                color: var(--dark-600);
                position: relative;
              `,className:"text-truncate px-1"},this.translate("custom"),i&&(0,t.jsx)(xt,null)))))}}At.defaultProps={value:{color:void 0,type:r.NormalLineType.SOLID,width:"2px"},onChange:()=>{}};const Dt=(0,l.withTheme)((0,t.injectIntl)(At),!0);function zt(e){const{border:i,borderRadius:s,onBorderChange:n,onBorderRasiusChange:a}=e,[o,l]=t.React.useState(!1),c=t.hooks.useTranslation(r.defaultMessages);t.React.useEffect((()=>{if(null==s)if(null==i)l(!1);else{const e=i.type!==r.NormalLineType.SOLID||"2px"!==i.width||null!=i.color&&""!==i.color&&Ct.every((e=>null==e||`var(--${e})`!==i.color));l(e)}else l(!0)}),[i,s]);const g=t.React.useCallback(((e,i)=>{e!==o&&(l(e),e)||(a(null),t.lodash.defer((()=>{n(i)})))}),[o,n,a]);return(0,t.jsx)(X.SettingSection,{role:"group","aria-label":c("border"),title:(0,t.jsx)("div",{className:"d-flex w-100 align-items-center justify-content-between"},(0,t.jsx)("div",{className:"text-truncate setting-text-level-1"},c("border")),(0,t.jsx)(Dt,{value:i,isCustom:o,onChange:g}))},o&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(X.SettingRow,{flow:"wrap"},(0,t.jsx)(J,{value:i,onChange:n})),(0,t.jsx)(X.SettingRow,{flow:"wrap",label:c("borderRadius")},(0,t.jsx)(De,{value:s,onChange:a}))))}const ft={none:"shadow-none",small:"shadow-sm",default:"shadow",large:"shadow-lg"};class Ot extends t.React.PureComponent{constructor(e){super(e),this.translate=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:r.defaultMessages[e]}):e,this.toggleDropdown=()=>{this.setState({isDropdownOpen:!this.state.isDropdownOpen})},this.getStyle=()=>t.css`
      font-size: 13px;
      line-height: 18px;
    `,this.onCustomModeClick=()=>{if(this.props.isCustom)return;const{onChange:e,value:t}=this.props;if(null!=(null==t?void 0:t.presetStyle)){const i=Object.keys(ft).find((e=>ft[e]===t.presetStyle));if(i){const t=function(e){const t=(0,l.getTheme2)();let i;switch(e){case"none":i=t.boxShadows.none;break;case"small":i=t.boxShadows.sm;break;case"large":i=t.boxShadows.lg;break;default:i=t.boxShadows.default}if(i){const e=i.split(" ");if(e.length>=5){const t=i.lastIndexOf(e[3]);return{offsetX:e[0],offsetY:e[1],blur:e[2],spread:e[3],color:i.substring(t+e[3].length).trim()}}}return null}(i);if(t)return void e(!0,t)}}e(!0,{})},this.createItem=e=>{const{value:i,isCustom:s,onChange:n}=this.props,a=!s&&(i.presetStyle===ft[e]||"none"===e&&this.isEmpty());return(0,t.jsx)(r.DropdownItem,{css:this.getStyle(),"aria-label":this.translate(e),key:e,active:a,onClick:()=>{n(!1,{presetStyle:ft[e]})}},(0,t.jsx)("div",{className:"d-flex w-100 align-items-center text-truncate"},a&&(0,t.jsx)(ot,null),!a&&(0,t.jsx)("div",{css:t.css`width: 1rem;`}),(0,t.jsx)("div",{className:"flex-grow-1 ml-2"},this.translate(e))))},this.state={isDropdownOpen:!1}}isEmpty(){const{value:e}=this.props;return null==e||(null==e.presetStyle||e.presetStyle===ft.none)&&["offsetX","offsetY","blur","spread"].every((t=>null==e[t]||0===parseInt(e[t])))}render(){const{className:e,isCustom:i}=this.props;return(0,t.jsx)(r.Dropdown,{isOpen:this.state.isDropdownOpen,className:(0,t.classNames)(e,"jimu-builder--theme-bx-setting"),toggle:this.toggleDropdown},(0,t.jsx)(r.Tooltip,{title:this.translate("quickStyle")},(0,t.jsx)(r.DropdownButton,{icon:!0,type:"tertiary",arrow:!1,className:"jimu-outline-inside"},(0,t.jsx)(Mt,null))),(0,t.jsx)(r.DropdownMenu,{className:"text-truncate"},Object.keys(ft).map((e=>this.createItem(e))),(0,t.jsx)("div",{className:"my-2 px-2",css:t.css`height: 1px; background-color: var(--light-700);`}),(0,t.jsx)(r.DropdownItem,{active:i,onClick:this.onCustomModeClick},(0,t.jsx)("div",{className:"d-flex w-100 align-items-center text-truncate"},i&&(0,t.jsx)(ot,null),!i&&(0,t.jsx)("div",{css:t.css`width: 1rem;`}),(0,t.jsx)("div",{className:"flex-grow-1 ml-2"},this.translate("custom"))))))}}Ot.defaultProps={value:{offsetX:"0px",offsetY:"0px",blur:"0px",spread:"0px",color:void 0},onChange:()=>{}};const St=(0,t.injectIntl)(Ot);function Tt(e){const{value:i,onChange:s}=e,[n,a]=t.React.useState(!1),o=t.hooks.useTranslation(r.defaultMessages);t.React.useEffect((()=>{a(null!=i&&null==(null==i?void 0:i.presetStyle))}),[i]);const l=t.React.useCallback(((e,t)=>{e!==n&&a(e),s(t)}),[n,s]);return(0,t.jsx)(X.SettingSection,{role:"group","aria-label":o("boxShadow"),title:(0,t.jsx)("div",{className:"d-flex w-100 align-items-center justify-content-between"},(0,t.jsx)("div",{className:"text-truncate setting-text-level-1"},o("boxShadow")),(0,t.jsx)(St,{value:i,isCustom:n,onChange:l}))},n&&(0,t.jsx)($,{className:"mt-4",value:i,onChange:s}))}const Lt=t.css`
  .color-picker-block {
    margin-right: 9px;
  }
`,kt=e=>{const i=(0,l.useTheme2)(),{onChange:s,color:n,size:a,className:o}=e,r=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["onChange","color","size","className"]);return(0,t.jsx)("div",Object.assign({css:Lt,className:(0,t.classNames)("size-color-setting d-flex",o)},r),(0,t.jsx)(U.ThemeColorPicker,{specificTheme:i,value:n,onChange:e=>{s("color",e)}}),(0,t.jsx)(R,{value:null!=a?a:"12px",onChange:e=>{s("size",`${e.distance}${e.unit}`)}}))},Pt=e=>{const i=(0,l.useTheme2)(),{onlyBorderColor:s,icon:n,onChange:a,variant:o}=e,{bold:c,italic:g,underline:p,strike:d,color:u,bg:m,size:I,border:M,borderRadius:h,icon:y}=o||{},N=t.hooks.useTranslation(r.defaultMessages,t.defaultMessages),x=t.polished.getValueAndUnit(r.styleUtils.remToPixel(h||"0rem")),j=(0,t.Immutable)({number:[null==x?void 0:x[0]],unit:null==x?void 0:x[1]});return t.React.createElement(t.React.Fragment,null,t.React.createElement(X.SettingRow,{className:"mt-4",flow:"wrap",label:N("text"),role:"group","aria-label":N("text")},t.React.createElement(We,{bold:c,italic:g,underline:p,strike:d,size:I,color:u,onChange:a})),n&&t.React.createElement(X.SettingRow,{className:"mt-4",flow:"no-wrap",label:N("icon"),role:"group","aria-label":N("icon")},t.React.createElement(kt,{className:"w-50",color:null==y?void 0:y.color,size:null==y?void 0:y.size,onChange:(e,t)=>{a("icon",Object.assign(Object.assign({},y),{[e]:t}))}})),t.React.createElement(X.SettingRow,{className:"mt-4",flow:"no-wrap",label:N("background"),role:"group","aria-label":N("background")},t.React.createElement(U.ThemeColorPicker,{specificTheme:i,value:m,onChange:e=>{a("bg",e)}})),s&&t.React.createElement(X.SettingRow,{className:"mt-4",label:N("underline"),flow:"no-wrap",role:"group","aria-label":N("underline")},t.React.createElement(kt,{color:null==M?void 0:M.color,size:null==M?void 0:M.width,onChange:(e,t)=>{e="size"===e?"width":e,a("border",Object.assign(Object.assign({},M),{[e]:t}))}})),!s&&t.React.createElement(X.SettingRow,{className:"mt-4",label:N("border"),flow:"wrap",role:"group","aria-label":N("border")},t.React.createElement(J,{value:M,onChange:e=>{a("border",e)}})),t.React.createElement(X.SettingRow,{className:"mt-4",label:N("borderRadius"),flow:"no-wrap",role:"group","aria-label":N("borderRadius")},t.React.createElement(De,{style:{width:s?"35%":"30%"},separated:!1,value:j,onChange:e=>{var t;a("borderRadius",`${null===(t=e.number)||void 0===t?void 0:t[0]}${null==e?void 0:e.unit}`)}})))},Et=e=>{const{onChange:i,variant:s}=e,{icon:n}=s||{},a=t.hooks.useTranslation(t.defaultMessages);return t.React.createElement(X.SettingRow,{className:"mt-2",flow:"no-wrap",label:a("icon"),role:"group","aria-label":a("icon")},t.React.createElement(kt,{color:null==n?void 0:n.color,size:null==n?void 0:n.size,onChange:(e,t)=>{i("icon",Object.assign(Object.assign({},n),{[e]:t}))}}))},Zt=e=>"default"===e?"default":"active"===e?"selected":e,Bt=e=>{const{variant:i,onChange:s,states:n=["default","active","hover"],icon:a,text:o,iconInText:l,onlyBorderColor:c}=e,g=t.React.useMemo((()=>{var e;return t.css`
      .tab-title-item{
        width: ${null!==(e=100/(null==n?void 0:n.length))&&void 0!==e?e:1}%;
      }
     .style-setting--input-unit {
        width: ${t.polished.rem(80)};
      }
      ${""}
      .tab-content {
        overflow: visible;
      }
    `}),[n]),p=t.hooks.useTranslation(r.defaultMessages);return(0,t.jsx)(X.SettingRow,{flow:"wrap",className:"w-100"},(0,t.jsx)(r.Tabs,{type:"pills",className:"flex-grow-1 w-100 h-100",fill:!0,css:g,defaultValue:"0"},n.map(((e,n)=>{var g,d;return(0,t.jsx)(r.Tab,{id:n+"",key:n,className:"tab-title-item",title:p(Zt(e))},a&&(0,t.jsx)(Et,{variant:null===(g=null==i?void 0:i.item)||void 0===g?void 0:g[e],onChange:(t,i)=>{s(e,t,i)}}),o&&(0,t.jsx)(Pt,{variant:null===(d=null==i?void 0:i.item)||void 0===d?void 0:d[e],icon:l,onlyBorderColor:c,onChange:(t,i)=>{s(e,t,i)}}))}))))};const{useMemo:Rt}=t.React,Yt=c(63503),Gt=c(38586),Qt=c(29965),Wt=c(82744),Ut=c(91112),Ht=e=>{const{size:i=12}=e,s=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["size"]),n=(e=>{const i=t.hooks.useTranslation(r.defaultMessages);return Rt((()=>[r.utils.toIconResult(Yt,i("drawToolDot"),e),r.utils.toIconResult(Gt,i("pill"),e),r.utils.toIconResult(Qt,i("rhombus"),e),r.utils.toIconResult(Wt,i("hollowCircle"),e),r.utils.toIconResult(Ut,i("filledDoubleCircle"),e)]),[e,i])})(i);return t.React.createElement(pt.IconPicker,Object.assign({groups:"none",customIcons:n},s))},Vt=c(89781),Ft=c(94850),Jt=c(57223),Xt=c(64037),Kt=c(63619),$t=c(19502),_t=c(63291),qt=[{icon:Vt,type:t.AnimationType.None},{type:t.AnimationType.FadeIn,icon:Ft,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView]},{type:t.AnimationType.FloatIn,icon:Jt,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView],supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{type:t.AnimationType.FlyIn,icon:Xt,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView],supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{type:t.AnimationType.SpinIn,icon:Kt,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView]},{type:t.AnimationType.WipeIn,icon:$t,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView],supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{type:t.AnimationType.ZoomIn,icon:_t,supportedTriggers:[t.AnimationTriggerType.ScrollIntoView]}],ei=[{icon:Vt,type:t.AnimationType.None},{icon:Ft,type:t.AnimationType.FadeIn},{icon:Jt,type:t.AnimationType.FloatIn,supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{icon:$t,type:t.AnimationType.WipeIn,supportedDirections:[t.AnimationDirection.Top,t.AnimationDirection.Bottom,t.AnimationDirection.Left,t.AnimationDirection.Right]},{icon:_t,type:t.AnimationType.ZoomIn}];var ti=c(59788),ii=c.n(ti);const si=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:ii()},n)):t.React.createElement("svg",Object.assign({className:a},n))};var ni=c(35733),ai=c.n(ni),oi=c(11587),li=c.n(oi),ri=c(33869),ci=c.n(ri),gi=c(28630),pi=c.n(gi),di=c(53073),ui=c.n(di);class mi extends t.React.PureComponent{constructor(){super(...arguments),this.onWidgetEffectTypeChanged=(e,i)=>{e.stopPropagation();const s=(0,t.Immutable)(this.props.effectSetting||{});(null==s?void 0:s.type)===i?this.props.onPreviewClicked():this.props.isOneByOne?this.props.onSettingChange(s.set("type",i).setIn(["option","direction"],null).setIn(["option","start"],t.AnimationStartMode.AfterPrevious).setIn(["option","parentMode"],t.ParentAnimationMode.OneByOne)):this.props.onSettingChange(s.set("type",i).setIn(["option","direction"],null))},this.onDurationChange=e=>{const i=(0,t.Immutable)(this.props.effectSetting||{});this.props.onSettingChange(i.setIn(["option","configType"],e.target.value))},this.onStartModeChange=e=>{const i=(0,t.Immutable)(this.props.effectSetting||{});this.props.onSettingChange(i.setIn(["option","start"],e.target.value))},this.onParentModeChange=e=>{const i=(0,t.Immutable)(this.props.effectSetting||{});this.props.onSettingChange(i.setIn(["option","parentMode"],e.target.value))},this.onWidgetEffectDirectionChanged=e=>{const i=(0,t.Immutable)(this.props.effectSetting||{});this.props.onSettingChange(i.setIn(["option","direction"],e.target.value))}}createAnimationCard(e,i){const{effectSetting:s}=this.props,n=(null==s?void 0:s.type)||t.AnimationType.None;return(0,t.jsx)("div",{className:(0,t.classNames)("d-flex flex-column align-items-center card-item",{selected:e.type===n}),key:i},(0,t.jsx)(r.Button,{icon:!0,role:"option","aria-label":this.props.formatMessage(e.type.toLowerCase()),"aria-selected":e.type===n,className:"d-flex justify-content-center card-content border-0",onClick:t=>{this.onWidgetEffectTypeChanged(t,e.type)}},(0,t.jsx)(r.Icon,{className:"w-100",currentColor:!1,icon:e.icon||ui(),size:72})),(0,t.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1"},(0,t.jsx)("span",{className:"text-center card-name-content",title:this.props.formatMessage(e.type.toLowerCase())},this.props.formatMessage(e.type.toLowerCase()))))}chooseDirectionIcon(e){switch(e){case t.AnimationDirection.Bottom:return ai();case t.AnimationDirection.Left:return pi();case t.AnimationDirection.Right:return ci();case t.AnimationDirection.Top:return li();default:return null}}createEffectDirectionChooser(e){var i;const{effectSetting:s}=this.props;return(0,t.jsx)("div",{className:"direction-select px-4 mb-4"},(0,t.jsx)("div",{className:"effect-title mb-2"},this.props.formatMessage("direction")),(0,t.jsx)(r.Select,{defaultValue:t.AnimationDirection.Top,value:null===(i=null==s?void 0:s.option)||void 0===i?void 0:i.direction,onChange:this.onWidgetEffectDirectionChanged,size:"sm","aria-label":this.props.formatMessage("direction")},e.map(((e,i)=>(0,t.jsx)("option",{value:e,key:i},(0,t.jsx)(r.Icon,{className:"mx-1",icon:this.chooseDirectionIcon(e),size:12}),this.props.formatMessage(e.toLowerCase()))))))}getStyle(){return t.css`
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
        background: var(--light-500);
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
          background-color: var(--light-200);
        }

        &.selected .card-content {
          outline: 2px solid var(--primary-600);
        }

        .card-name {
          max-width: 90px;
          margin: 0 auto;
          color: var(--dark-800);
          .card-name-content {
            line-height: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    `}render(){var e,i,s,n,a,o;const{formatMessage:l,effectSetting:c,metaInfos:g,isRoot:p,isOneByOne:d}=this.props,u=g.find((e=>e.type===(null==c?void 0:c.type))),m=null!=c&&c.type!==t.AnimationType.None;return(0,t.jsx)("div",{className:"bg-light-300 border-color-gray-400",css:this.getStyle()},(0,t.jsx)("div",{className:"w-100 h-100 animation-panel-border"},(0,t.jsx)(r.ButtonGroup,{role:"listbox",className:"animation-cards"},g.map(((e,t)=>this.createAnimationCard(e,t)))),u&&u.type!==t.AnimationType.None&&(0,t.jsx)("div",{className:"separator"}),u&&u.type!==t.AnimationType.None&&(0,t.jsx)("div",{className:"duration-input px-4 mb-4"},(0,t.jsx)("div",{className:"effect-title mb-2"},this.props.formatMessage("effect")),(0,t.jsx)(r.Select,{value:null!==(i=null===(e=null==c?void 0:c.option)||void 0===e?void 0:e.configType)&&void 0!==i?i:t.AnimationEffectType.Default,onChange:this.onDurationChange,size:"sm","aria-label":this.props.formatMessage("effect")},Object.entries(t.AnimationEffectType).map((([e,i],s)=>(0,t.jsx)("option",{key:s,value:i},l(e.toLowerCase())))))),(null==u?void 0:u.supportedDirections)&&this.createEffectDirectionChooser(u.supportedDirections),!p&&m&&d&&(0,t.jsx)("div",{className:"start-input px-4 mb-4"},(0,t.jsx)("div",{className:"effect-title mb-2"},this.props.formatMessage("start")),(0,t.jsx)(r.Select,{value:null!==(n=null===(s=null==c?void 0:c.option)||void 0===s?void 0:s.start)&&void 0!==n?n:t.AnimationStartMode.WithPrevious,onChange:this.onStartModeChange,size:"sm","aria-label":this.props.formatMessage("start")},Object.entries(t.AnimationStartMode).map((([e,i],s)=>(0,t.jsx)("option",{key:s,value:i},l(e.toLowerCase())))))),m&&d&&(0,t.jsx)("div",{className:"start-input px-4 mb-4"},(0,t.jsx)("div",{className:"effect-title mb-2"},this.props.formatMessage("playAnimation")),(0,t.jsx)(r.Select,{value:null!==(o=null===(a=null==c?void 0:c.option)||void 0===a?void 0:a.parentMode)&&void 0!==o?o:t.ParentAnimationMode.OneByOne,onChange:this.onParentModeChange,size:"sm","aria-label":this.props.formatMessage("playAnimation")},Object.entries(t.ParentAnimationMode).map((([e,i],s)=>(0,t.jsx)("option",{key:s,value:i},l(e.toLowerCase()))))))))}}class Ii extends t.React.PureComponent{constructor(e){super(e),this.onAsOneSettingChange=e=>{this.props.onSettingChange(t.AnimationPlayMode.AsOne,e)},this.onOneByOneSettingChange=e=>{this.props.onSettingChange(t.AnimationPlayMode.OneByOne,e)},this.previewAsOne=()=>{this.props.onPreviewClicked(t.AnimationPlayMode.AsOne)},this.previewOneByOne=()=>{this.props.onPreviewClicked(t.AnimationPlayMode.OneByOne)},this.toggleAsOneOpened=()=>{this.setState({asOneOpened:!this.state.asOneOpened})},this.toggleOneByOneOpened=()=>{this.setState({oneByOneOpened:!this.state.oneByOneOpened})},this.state={asOneOpened:!0,oneByOneOpened:!(this.props.supportAsOne&&this.props.supportOneByOne)}}getStyle(){return t.css`
      .sub-header {
        padding: 0.5rem 0.5rem 0.5rem 1rem;

        .title {
          font-size: 14px;
        }
      }
    `}render(){const{formatMessage:e,supportOneByOne:i,supportAsOne:s,effectSetting:n,oneByOneSetting:a}=this.props,o=i&&s;return(0,t.jsx)("div",{className:"bg-light-300 border-color-gray-400",css:this.getStyle()},s&&(0,t.jsx)(X.SettingSection,{className:"p-0",title:(0,t.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center sub-header"},(0,t.jsx)("div",{className:"text-truncate title",title:`${i&&this.props.selectedWidgetLabel}`,css:t.css`max-width: 80%;`},i&&this.props.selectedWidgetLabel),o&&(0,t.jsx)(r.Button,{size:"sm",type:"tertiary",icon:!0,onClick:this.toggleAsOneOpened},(0,t.jsx)(si,{size:"s",rotate:this.state.asOneOpened?180:0})))},(0,t.jsx)(r.Collapse,{isOpen:this.state.asOneOpened,className:"mt-0"},(0,t.jsx)(mi,{effectSetting:n,metaInfos:qt,onSettingChange:this.onAsOneSettingChange,previewEnabled:!0,onPreviewClicked:this.previewAsOne,formatMessage:e}))),i&&(0,t.jsx)(X.SettingSection,{className:"p-0",title:(0,t.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center sub-header"},(0,t.jsx)("div",{className:"text-truncate title",title:`${s&&e("widgetByWidget")}`,css:t.css`max-width: 80%;`},s&&e("widgetByWidget")),o&&(0,t.jsx)(r.Button,{size:"sm",type:"tertiary",icon:!0,onClick:this.toggleOneByOneOpened},(0,t.jsx)(si,{size:"s",rotate:this.state.oneByOneOpened?180:0})))},(0,t.jsx)(r.Collapse,{isOpen:this.state.oneByOneOpened,className:"mt-0"},(0,t.jsx)(mi,{effectSetting:a,metaInfos:ei,onSettingChange:this.onOneByOneSettingChange,previewEnabled:!0,isOneByOne:!0,isRoot:this.props.isRoot,onPreviewClicked:this.previewOneByOne,formatMessage:e}))))}}const Mi=t.ReactRedux.connect((function(e){var i,s,n,a,o,l;const r=e.appStateInBuilder,c=null==r?void 0:r.appConfig,g=null===(i=null==r?void 0:r.appRuntimeInfo)||void 0===i?void 0:i.selection;if(g){const{layoutId:e,layoutItemId:i}=g,l=null===(a=null===(n=null===(s=c.layouts)||void 0===s?void 0:s[e])||void 0===n?void 0:n.content)||void 0===a?void 0:a[i];if((null==l?void 0:l.type)===t.LayoutItemType.Widget){const e=c.widgets[l.widgetId];return{selectedWidgetLabel:null!==(o=null==e?void 0:e.label)&&void 0!==o?o:""}}}else{const e=null===(l=null==r?void 0:r.appRuntimeInfo)||void 0===l?void 0:l.currentDialogId;if(e&&c.dialogs[e])return{selectedWidgetLabel:c.dialogs[e].label}}return{selectedWidgetLabel:""}}))(Ii);var hi=c(56097),yi=c.n(hi);const Ni=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:yi()},n)):t.React.createElement("svg",Object.assign({className:a},n))};var xi=c(88866),ji=c.n(xi);const wi=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:ji()},n)):t.React.createElement("svg",Object.assign({className:a},n))},bi=c(89781);class vi extends t.React.PureComponent{constructor(e){super(e),this.sidePopperTrigger=t.React.createRef(),this.buttonRef=t.React.createRef(),this.toggleSidePanel=()=>{this.setState({showSidePanel:!this.state.showSidePanel})},this.previewAnimation=e=>{e.stopPropagation(),this.props.onPreviewClicked(null)},this.state={showSidePanel:!1}}componentDidUpdate(e){this.props.contentId!==e.contentId&&this.state.showSidePanel&&this.setState({showSidePanel:!1})}getAnimBoxStyle(){return t.css`
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
          background: var(--light-200);
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
          background: var(--light-500);

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
        color: var(--dark-600);
        font-size: 16px;
      }
      .effect-title {
        color: var(--dark-600);
        font-size: 13px;
      }
      .side-content {
        position: relative;
        width: 100%;
        overflow: auto;
      }
    `}render(){var e,i;const{effectSetting:s,oneByOneSetting:n,formatMessage:a,previewEnabled:o,supportAsOne:l,supportOneByOne:c}=this.props,g=qt.find((e=>e.type===(null==s?void 0:s.type))),p=ei.find((e=>e.type===(null==n?void 0:n.type))),d=l&&c,u=d?32:48,m=(null==s?void 0:s.type)?a(s.type.toLowerCase()):a("none"),I=(null==n?void 0:n.type)?a(n.type.toLowerCase()):a("none");let M="";return l&&(M+=m),d&&(M+="/"),c&&(M+=I),(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"anima-box d-flex justify-content-center align-items-center",css:this.getAnimBoxStyle()},(0,t.jsx)(r.Button,{className:"img-tip d-flex justify-content-center align-items-center border-0",onClick:this.toggleSidePanel,title:M,"aria-label":M,icon:!0},l&&(0,t.jsx)("div",{className:(0,t.classNames)("anim-icon first",{"has-sibling":d})},(0,t.jsx)(r.Icon,{icon:(null==g?void 0:g.icon)||bi,size:u})),d&&(0,t.jsx)("div",{className:"diag-sep"}),c&&(0,t.jsx)("div",{className:(0,t.classNames)("anim-icon second",{"has-sibling":d})},(0,t.jsx)(r.Icon,{icon:(null==p?void 0:p.icon)||bi,size:u}))),(0,t.jsx)("div",{className:"d-flex flex-column justify-content-between align-items-center ml-2 h-100 flex-grow-1"},(0,t.jsx)("div",{className:"anim-labels d-flex"},(0,t.jsx)("div",{className:"anim-label",title:`${m}${d?" / ":""}${c?I:""}`},l&&(0,t.jsx)("span",null,m),d&&(0,t.jsx)("span",{className:"mx-1"},"/"),c&&(0,t.jsx)("span",null,I)),(0,t.jsx)(r.Tooltip,{title:a("scrollIntoView")},(0,t.jsx)(r.Button,{className:"p-0",icon:!0,type:"tertiary",size:"sm"},(0,t.jsx)(wi,{size:"m"})))),(0,t.jsx)("div",{className:"amin-icons w-100",ref:this.sidePopperTrigger},(0,t.jsx)(r.Button,{size:"sm",ref:this.buttonRef,onClick:this.toggleSidePanel,className:"text-truncate",title:a("change")},a("change")),(0,t.jsx)(r.Tooltip,{title:a("preview"),placement:"bottom"},(0,t.jsx)(r.Button,{type:"default",size:"sm",icon:!0,disabled:!o,onClick:this.previewAnimation},(0,t.jsx)(Ni,{size:"s"})))))),(0,t.jsx)(X.SidePopper,{isOpen:this.state.showSidePanel,css:this.getSidePopperStyle(),position:"right",toggle:this.toggleSidePanel,trigger:null===(e=this.sidePopperTrigger)||void 0===e?void 0:e.current,title:a("animationSetting"),backToFocusNode:null===(i=this.buttonRef)||void 0===i?void 0:i.current},(0,t.jsx)("div",{className:"side-content"},(0,t.jsx)(Mi,Object.assign({},this.props)))))}}vi.defaultProps={onSettingChange:()=>{},previewEnabled:!0,supportOneByOne:!1,onPreviewClicked:()=>{},formatMessage:e=>e};const Ci=c(109),Ai=c(83167),Di=c(58228),zi=c(75046),fi=c(38830),Oi=c(95514),Si=[{icon:Ci,type:t.TransitionType.None},{type:t.TransitionType.Box,icon:Di,supportDirection:!0},{type:t.TransitionType.Cover,icon:Oi,supportDirection:!0},{type:t.TransitionType.Cube,icon:zi,supportDirection:!0},{type:t.TransitionType.Fade,icon:Ai},{type:t.TransitionType.Push,icon:fi,supportDirection:!0}],Ti=c(89781);class Li extends t.React.PureComponent{constructor(e){super(e),this.sidePopperTrigger=t.React.createRef(),this.buttonRef=t.React.createRef(),this.modalStyle={position:"absolute",top:"60px",bottom:"0",width:"100%",height:"auto",paddingBottom:"1px"},this.toggleSidePanel=()=>{this.setState({showSidePanel:!this.state.showSidePanel})},this.previewTransition=e=>{e.stopPropagation(),this.props.onPreviewTransitionClicked()},this.onTransitionTypeChanged=e=>{var t,i;(null===(t=this.props.transition)||void 0===t?void 0:t.type)===e?this.props.onPreviewTransitionClicked():this.props.onTransitionChange({type:e,direction:null===(i=this.props.transition)||void 0===i?void 0:i.direction})},this.onDirectionChanged=e=>{var t;this.props.onTransitionChange({type:null===(t=this.props.transition)||void 0===t?void 0:t.type,direction:e.target.value})},this.previewOneByOneEffect=()=>{this.props.onPreviewOneByOneClicked()},this.onPreviewAsAWhoneClicked=e=>{e.stopPropagation(),this.props.onPreviewAsAWhoneClicked()},this.onOnebyOneSettingChange=(e,t)=>{this.props.onOneByOneChange(t)},this.state={showSidePanel:!1}}createTransitionCard(e,i){const{transition:s}=this.props,n=s.type||t.TransitionType.None;return(0,t.jsx)("div",{className:(0,t.classNames)("d-flex flex-column align-items-center card-item",{selected:e.type===n}),key:i},(0,t.jsx)(r.Button,{icon:!0,role:"option","aria-label":this.props.formatMessage(e.type.toLowerCase()),"aria-selected":e.type===n,className:"d-flex justify-content-center card-content border-0",onClick:()=>{this.onTransitionTypeChanged(e.type)}},(0,t.jsx)(r.Icon,{className:"w-100 h-100",currentColor:!1,icon:e.icon||Ti})),(0,t.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1"},(0,t.jsx)("span",{className:"text-center card-name-content",title:this.props.formatMessage(e.type.toLowerCase())},this.props.formatMessage(e.type.toLowerCase()))))}createDirectionChooser(){const{transition:e}=this.props;return(0,t.jsx)("div",{className:"direction-select px-4"},(0,t.jsx)("div",{className:"direction-title mb-2"},this.props.formatMessage("direction")),(0,t.jsx)(r.Select,{defaultValue:t.TransitionDirection.Horizontal,value:null==e?void 0:e.direction,onChange:this.onDirectionChanged,size:"sm"},Object.entries(t.TransitionDirection).map(((e,i)=>(0,t.jsx)("option",{value:e[1],key:i},this.props.formatMessage(e[0].toLowerCase()))))))}getSidePopperStyle(){return t.css`
      .tab-pane {
        position: relative;
      }
      .header {
        height: 60px;
        padding: 0 0.5rem;
        border-bottom: none;
      }
      .side-popper-title {
        color: var(--dark-600);
        font-size: 16px;
      }
      .direction-title {
        color: var(--dark-600);
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
        background: var(--light-500);
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
          background-color: var(--light-200);
        }

        &.selected .card-content {
          outline: 2px solid var(--primary-600);
        }

        .card-name {
          max-width: 90px;
          margin: 0 auto;
          color: var(--dark-800);
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
          background: var(--light-200);
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
          background: var(--light-500);

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
    `}render(){var e,i;const{formatMessage:s,transition:n,transitionLabel:a,oneByOneEffect:o,showOneByOne:l}=this.props,c=Si.find((e=>e.type===(null==n?void 0:n.type))),g=ei.find((e=>e.type===(null==o?void 0:o.type))),p=l?32:48,d=(null==n?void 0:n.type)?s(n.type.toLowerCase()):s("none"),u=(null==o?void 0:o.type)?s(o.type.toLowerCase()):s("none");let m=d;return l&&(m=m+"/"+u),(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"anima-box d-flex justify-content-center align-items-center flex-grow-1",css:this.getAnimBoxStyle()},(0,t.jsx)(r.Button,{className:"img-tip d-flex justify-content-center align-items-center border-0",onClick:this.toggleSidePanel,title:m,"aria-label":m,icon:!0},(0,t.jsx)("div",{className:(0,t.classNames)("anim-icon first",{"has-sibling":l})},(0,t.jsx)(r.Icon,{icon:(null==c?void 0:c.icon)||Ti,size:p})),l&&(0,t.jsx)("div",{className:"diag-sep"}),l&&(0,t.jsx)("div",{className:(0,t.classNames)("anim-icon second",{"has-sibling":l})},(0,t.jsx)(r.Icon,{icon:(null==g?void 0:g.icon)||Ti,size:p}))),(0,t.jsx)("div",{className:"d-flex flex-column justify-content-between align-items-center ml-2 h-100 flex-grow-1"},(0,t.jsx)("div",{className:"anim-labels d-flex"},(0,t.jsx)("div",{className:"anim-label"},(0,t.jsx)("span",null,d),l&&(0,t.jsx)("span",{className:"mx-1"},"/"),l&&(0,t.jsx)("span",null,u)),(0,t.jsx)(r.Tooltip,{title:s("animationOnTransition")},(0,t.jsx)(r.Button,{className:"p-0",icon:!0,type:"tertiary",size:"sm"},(0,t.jsx)(wi,{size:"m"})))),(0,t.jsx)("div",{className:"amin-icons w-100",ref:this.sidePopperTrigger},(0,t.jsx)(r.Button,{ref:this.buttonRef,"aria-label":s("change"),size:"sm",onClick:this.toggleSidePanel,className:"text-truncate",title:s("change")},s("change")),(0,t.jsx)(r.Tooltip,{title:s("preview"),placement:"bottom"},(0,t.jsx)(r.Button,{type:"default",size:"sm",icon:!0,onClick:this.onPreviewAsAWhoneClicked},(0,t.jsx)(Ni,{size:"s"})))))),this.state.showSidePanel&&(0,t.jsx)(X.SidePopper,{isOpen:!0,position:"right",toggle:this.toggleSidePanel,trigger:null===(e=this.sidePopperTrigger)||void 0===e?void 0:e.current,title:s("setting"),backToFocusNode:null===(i=this.buttonRef)||void 0===i?void 0:i.current},(0,t.jsx)("div",{css:this.getSidePopperStyle(),style:this.modalStyle},!l&&(0,t.jsx)("div",{className:"bg-light-300 border-color-gray-400 mt-4"},(0,t.jsx)("div",{className:"w-100 h-100 animation-panel-border"},(0,t.jsx)(r.ButtonGroup,{role:"listbox",className:"animation-cards"},Si.map(((e,t)=>this.createTransitionCard(e,t)))),(null==c?void 0:c.supportDirection)&&(0,t.jsx)("div",{className:"separator"}),(null==c?void 0:c.supportDirection)&&this.createDirectionChooser())),l&&(0,t.jsx)(r.Tabs,{type:"underline",key:"widget-setting",className:"flex-grow-1 w-100 h-100",fill:!0,defaultValue:"transition"},(0,t.jsx)(r.Tab,{id:"transition",title:a,className:"tab-title-item"},(0,t.jsx)("div",{className:"bg-light-300 border-color-gray-400 mt-4"},(0,t.jsx)("div",{className:"w-100 h-100 animation-panel-border"},(0,t.jsx)("div",{className:"animation-cards",role:"listbox"},Si.map(((e,t)=>this.createTransitionCard(e,t)))),(null==c?void 0:c.supportDirection)&&(0,t.jsx)("div",{className:"separator"}),(null==c?void 0:c.supportDirection)&&this.createDirectionChooser()))),(0,t.jsx)(r.Tab,{id:"widget",title:s("widget"),className:"tab-title-item"},(0,t.jsx)(Mi,{effectSetting:null,oneByOneSetting:o,onSettingChange:this.onOnebyOneSettingChange,previewEnabled:!0,supportOneByOne:!0,supportAsOne:!1,onPreviewClicked:this.previewOneByOneEffect,formatMessage:this.props.formatMessage}))))))}}Li.defaultProps={formatMessage:e=>e,showOneByOne:!0,onPreviewOneByOneClicked:()=>{}};const ki=e=>{const i=window.SVG,{className:s}=e,n=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",s);return i?t.React.createElement(i,Object.assign({className:a,src:li()},n)):t.React.createElement("svg",Object.assign({className:a},n))},Pi=[{name:t.HoverType.None,type:"none"},{name:t.HoverType.Skew,type:"skew",x:-10,y:0},{name:t.HoverType.Grow,type:"scale",x:110,y:110},{name:t.HoverType.Shrink,type:"scale",x:90,y:90},{name:t.HoverType.Float,type:"translate",x:0,y:10},{name:t.HoverType.Sink,type:"translate",x:0,y:-10},{name:t.HoverType.Rotate,type:"rotate",deg:3},{name:t.HoverType.Spin,type:"rotate",deg:-720},{name:t.HoverType.Forward,type:"translate",x:10,y:0},{name:t.HoverType.Backward,type:"translate",x:-10,y:0},{name:t.HoverType.Opacity,type:"opacity",opacity:50}],Ei=t.css`
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
    background: var(--light-500);
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
      background-color: var(--light-200);
    }

    &.selected .card-content {
      outline: 2px solid var(--primary-600);
    }

    .card-name {
      max-width: 90px;
      margin: 0 auto;
      color: var(--dark-800);
      .card-name-content {
        line-height: 1rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
`;function Zi(e){const i=t.hooks.useTranslation(r.defaultMessages),{type:s=t.HoverType.None,onTypeChange:n}=e,a=t.hooks.useEventCallback((e=>{n(e)}));return(0,t.jsx)("div",{css:Ei},(0,t.jsx)(r.ButtonGroup,{role:"listbox",className:"animation-cards"},Pi.map(((e,n)=>((e,n)=>(0,t.jsx)("div",{className:(0,t.classNames)("d-flex flex-column align-items-center card-item",{selected:e.name===s}),key:n},(0,t.jsx)(r.Button,{icon:!0,role:"option","aria-label":i(e.name.toLowerCase()),"aria-selected":e.name===s,className:"d-flex justify-content-center card-content border-0",onClick:()=>a(e.name)},(0,t.jsx)(ki,{size:72})),(0,t.jsx)("div",{className:"card-name flex-grow-1 d-flex align-items-start mt-1"},(0,t.jsx)("span",{className:"text-center card-name-content",title:i(e.name.toLowerCase())},i(e.name.toLowerCase())))))(e,n)))))}const Bi=c(89781),Ri=t.css`
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
      background: var(--light-200);
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
`,Yi=t.css`
  .header {
    height: 60px;
    padding: 0 0.5rem;
  }
  .side-popper-title {
    color: var(--dark-600);
    font-size: 16px;
  }
  .effect-title {
    color: var(--dark-600);
    font-size: 13px;
  }
  .side-content {
    position: relative;
    width: 100%;
    overflow: auto;
  }
`;function Gi(e){const{type:i=t.HoverType.None,setting:s,onChange:n,onPreviewClick:a}=e,[o,l]=t.React.useState(!1),c=t.React.useRef(),g=t.React.useRef(),p=t.hooks.useTranslation(r.defaultMessages),d=t.React.useCallback((()=>{l(!o)}),[o]),u=t.hooks.useEventCallback((e=>{n({type:e})})),m=t.hooks.useEventCallback((e=>{n({type:i,setting:e})}));return(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)("div",{className:"anima-box d-flex justify-content-center align-items-center",css:Ri},(0,t.jsx)(r.Button,{className:"img-tip d-flex justify-content-center align-items-center border-0",onClick:d,title:p(i.toLowerCase()),"aria-label":p(i.toLowerCase()),icon:!0},(0,t.jsx)("div",{className:"anim-icon"},(0,t.jsx)(r.Icon,{icon:Bi,size:48}))),(0,t.jsx)("div",{className:"d-flex flex-column justify-content-between align-items-center ml-2 h-100 flex-grow-1"},(0,t.jsx)("div",{className:"anim-labels d-flex"},(0,t.jsx)("div",{className:"anim-label"},(0,t.jsx)("span",null,p(i.toLowerCase()))),(0,t.jsx)(r.Tooltip,{title:p("hover")},(0,t.jsx)(r.Button,{className:"p-0",icon:!0,type:"tertiary",size:"sm"},(0,t.jsx)(wi,{size:"m"})))),(0,t.jsx)("div",{className:"amin-icons w-100",ref:g},(0,t.jsx)(r.Button,{size:"sm",ref:c,onClick:d,className:"text-truncate",title:p("change")},p("change")),(0,t.jsx)(r.Tooltip,{title:p("preview"),placement:"bottom"},(0,t.jsx)("span",null,(0,t.jsx)(r.Button,{type:"default",size:"sm",icon:!0,disabled:null==i||i===t.HoverType.None,onClick:a},(0,t.jsx)(Ni,{size:"s"}))))))),o&&(0,t.jsx)(X.SidePopper,{isOpen:!0,css:Yi,position:"right",toggle:d,trigger:g.current,title:p("hover"),backToFocusNode:null==c?void 0:c.current},(0,t.jsx)("div",{className:"side-content pt-2"},(0,t.jsx)(Zi,{type:i,setting:s,onTypeChange:u,onSettingChange:m}))))}const Qi=e=>{const{className:i,value:s,onChange:n}=e,a=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(e,["className","value","onChange"]),o=t.React.useMemo((()=>(null==s?void 0:s.asMutable)?s.asMutable({deep:!0}):s),[s]),l=t.hooks.useTranslation(r.defaultMessages),c=t.React.useMemo((()=>l("padding")),[l]);return t.React.createElement(Ae,Object.assign({type:"edge",value:o,onChange:n,unifiedAriaLabel:c,unifiedTitle:c},a,{className:(0,t.classNames)("style-setting--padding",i)}))};(0,l.registerStyles)("jimu-ui/advanced/style-setting-components/",e)})(),g})())}}}));