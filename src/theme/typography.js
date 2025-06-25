// Typography system
export const typography = {
  fonts: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    serif: ['Georgia', 'serif'],
    mono: ['Fira Code', 'monospace'],
    display: ['Inter', 'system-ui', 'sans-serif']
  },

  sizes: {
    xs: 'text-xs',     // 12px
    sm: 'text-sm',     // 14px
    base: 'text-base', // 16px
    lg: 'text-lg',     // 18px
    xl: 'text-xl',     // 20px
    '2xl': 'text-2xl', // 24px
    '3xl': 'text-3xl', // 30px
    '4xl': 'text-4xl', // 36px
    '5xl': 'text-5xl', // 48px
    '6xl': 'text-6xl', // 60px
    '7xl': 'text-7xl', // 72px
    '8xl': 'text-8xl', // 96px
    '9xl': 'text-9xl'  // 128px
  },

  weights: {
    thin: 'font-thin',         // 100
    extralight: 'font-extralight', // 200
    light: 'font-light',       // 300
    normal: 'font-normal',     // 400
    medium: 'font-medium',     // 500
    semibold: 'font-semibold', // 600
    bold: 'font-bold',         // 700
    extrabold: 'font-extrabold', // 800
    black: 'font-black'        // 900
  },

  headings: {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight',
    h4: 'text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight',
    h5: 'text-lg md:text-xl lg:text-2xl font-semibold tracking-tight',
    h6: 'text-base md:text-lg lg:text-xl font-semibold tracking-tight'
  },

  body: {
    large: 'text-lg leading-relaxed',
    base: 'text-base leading-relaxed',
    small: 'text-sm leading-relaxed'
  },

  display: {
    hero: 'text-4xl md:text-6xl lg:text-7xl font-black tracking-tight',
    feature: 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
    section: 'text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight'
  }
};