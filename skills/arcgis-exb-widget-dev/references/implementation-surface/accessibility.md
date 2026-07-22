# Implementation Surface: Accessibility

## Accessibility

- Apply this guidance only for custom interactions, controls, icons, or async status UI that `jimu-ui` does not cover automatically.
- For standard `jimu-ui` components, avoid redundant ARIA props or duplicate keyboard handlers.
- Add explicit accessibility handling only when building custom components, custom map controls, or overriding default `jimu-ui` behavior. Prefer semantic HTML before ARIA. Use native elements for their intended purpose
- For custom interactions, preserve keyboard operation and focus management. The interactive elements must be keyboard-reachable, keyboard-operable, visually focusable, and have a meaningful accessible name. Do not create keyboard traps (especially after dialogs/popovers open and close).
- For async-only status updates in custom flows, use `aria-live` or ExB notification patterns.
- For custom visuals, do not rely on color alone and keep disabled/loading states perceivable.
- For custom icons, keep decorative icons hidden from assistive tech and ensure meaningful icons have labels.
- Using the theme variables for a more consistent design, and ensuring enough color contrast to meet the corresponding requirements.