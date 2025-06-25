// Main theme export - Fixed imports
import { colors, gradients, shadows } from './colors.js';
import { typography } from './typography.js';
import { spacing, layout, breakpoints } from './spacing.js';
import { animations } from './animations.js';
import { components } from './components.js';

// Re-export all theme modules
export { colors, gradients, shadows } from './colors.js';
export { typography } from './typography.js';
export { spacing, layout, breakpoints } from './spacing.js';
export { animations } from './animations.js';
export { components } from './components.js';

// Theme configuration object
export const theme = {
  colors,
  gradients,
  shadows,
  typography,
  spacing,
  layout,
  breakpoints,
  animations,
  components
};

// CSS custom properties for dynamic theming
export const cssVariables = `
:root {
  /* Primary colors */
  --color-primary-50: 240 249 255;
  --color-primary-500: 14 165 233;
  --color-primary-600: 2 132 199;
  --color-primary-700: 3 105 161;

  /* Secondary colors */
  --color-secondary-500: 168 85 247;
  --color-secondary-600: 147 51 234;
  --color-secondary-700: 124 58 237;

  /* Accent colors */
  --color-accent-500: 249 115 22;
  --color-accent-600: 234 88 12;

  /* Success colors */
  --color-success-500: 34 197 94;
  --color-success-600: 22 163 74;

  /* Warning colors */
  --color-warning-500: 245 158 11;
  --color-warning-600: 217 119 6;

  /* Error colors */
  --color-error-500: 239 68 68;
  --color-error-600: 220 38 38;

  /* Gray colors */
  --color-gray-50: 248 250 252;
  --color-gray-100: 241 245 249;
  --color-gray-200: 226 232 240;
  --color-gray-300: 203 213 225;
  --color-gray-400: 148 163 184;
  --color-gray-500: 100 116 139;
  --color-gray-600: 71 85 105;
  --color-gray-700: 51 65 85;
  --color-gray-800: 30 41 59;
  --color-gray-900: 15 23 42;

  /* Theme-specific variables */
  --bg-primary: 255 255 255;
  --bg-secondary: 249 250 251;
  --text-primary: 17 24 39;
  --text-secondary: 55 65 81;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 0.75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;

  /* Border radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

  /* Typography */
  --font-family-sans: 'Inter', system-ui, sans-serif;
  --font-family-serif: Georgia, serif;
  --font-family-mono: 'Fira Code', monospace;

  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 200ms ease-in-out;
  --transition-slow: 300ms ease-in-out;
}

/* Dark mode variables */
.dark {
  --bg-primary: 17 24 39;
  --bg-secondary: 31 41 55;
  --text-primary: 249 250 251;
  --text-secondary: 209 213 219;

  /* Dark mode gray adjustments */
  --color-gray-50: 15 23 42;
  --color-gray-100: 30 41 59;
  --color-gray-200: 51 65 85;
  --color-gray-300: 71 85 105;
  --color-gray-400: 100 116 139;
  --color-gray-500: 148 163 184;
  --color-gray-600: 203 213 225;
  --color-gray-700: 226 232 240;
  --color-gray-800: 241 245 249;
  --color-gray-900: 248 250 252;
}

/* Automatic theme detection */
@media (prefers-color-scheme: dark) {
  :root:not(.light) {
    --bg-primary: 17 24 39;
    --bg-secondary: 31 41 55;
    --text-primary: 249 250 251;
    --text-secondary: 209 213 219;
  }
}
`;

export default theme;