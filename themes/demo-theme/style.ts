/**
  Licensing

  Copyright 2020 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/

/*
* Sample code:
* Uncomment the following sections to add:
* 1. Button component style override: font color and background color change for all Button components based on variant and color.
*/

// import type { ThemeComponentStyleOptions } from 'jimu-theme'


// const buttonStyles: ThemeComponentStyleOptions['Button'] = {
//   root: ({ styleState, theme }) => {
//     // Dynamically changing Button styles based on variant and color:
//     const styles = (styleState.variant === 'contained' && styleState.color === 'primary') ? {
//       backgroundColor: theme.sys.color.secondary.main,
//       color: theme.sys.color.secondary.text,
//       '&:hover': {
//         backgroundColor: theme.sys.color.secondary.dark,
//         color: theme.sys.color.secondary.text
//       }
//     } : {}

//     return styleState.tag === 'a' ? { '&[role="button"]': styles } : styles
//   }
// }

// // Button component styles
// export { buttonStyles as Button }