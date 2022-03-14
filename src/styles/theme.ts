const defaultTheme = {
  colors: {
    primary: '#f9f9f9',
    secondary: '#aeaeae',
    purple: '#873eff',
    green: '#04D361',
    bg: '#0C0C0C'
  },
  functions: {
    toRem: (px: number) => `${px/16}rem`
  },
  fonts: {
    types: {
      title: 'IBM Plex Mono',
      body: 'DM Sans',
    },  
    sizes: {
      xs: 10,
      sm: 14,
      default: 16,
      lg: 24,
      xl: 28,
      xxl: 32,
      xxxl: 40,
    }
  }
}

export type ThemeType = typeof defaultTheme
export default defaultTheme