// Spacing and layout system
export const spacing = {
  // Standard spacing scale
  0: '0',
  1: '0.25rem',    // 4px
  2: '0.5rem',     // 8px
  3: '0.75rem',    // 12px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  8: '2rem',       // 32px
  10: '2.5rem',    // 40px
  12: '3rem',      // 48px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  32: '8rem',      // 128px
  40: '10rem',     // 160px
  48: '12rem',     // 192px
  56: '14rem',     // 224px
  64: '16rem'      // 256px
};

export const layout = {
  containers: {
    sm: 'max-w-sm mx-auto',     // 384px
    md: 'max-w-md mx-auto',     // 448px
    lg: 'max-w-lg mx-auto',     // 512px
    xl: 'max-w-xl mx-auto',     // 576px
    '2xl': 'max-w-2xl mx-auto', // 672px
    '3xl': 'max-w-3xl mx-auto', // 768px
    '4xl': 'max-w-4xl mx-auto', // 896px
    '5xl': 'max-w-5xl mx-auto', // 1024px
    '6xl': 'max-w-6xl mx-auto', // 1152px
    '7xl': 'max-w-7xl mx-auto', // 1280px
    full: 'max-w-full mx-auto',
    screen: 'max-w-screen-2xl mx-auto'
  },

  sections: {
    sm: 'py-12',      // Small sections
    md: 'py-16',      // Medium sections
    lg: 'py-20',      // Large sections
    xl: 'py-24',      // Extra large sections
    hero: 'py-20 md:py-24 lg:py-32' // Hero sections
  },

  cards: {
    padding: 'p-6',
    paddingLarge: 'p-8',
    paddingSmall: 'p-4',
    rounded: 'rounded-xl',
    roundedLarge: 'rounded-2xl',
    roundedSmall: 'rounded-lg'
  }
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};