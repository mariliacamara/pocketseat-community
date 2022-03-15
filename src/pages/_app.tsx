import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/Global'
import { defaultTheme } from 'styles/theme'

interface CustomAppProps extends AppProps {}

function CustomApp({ Component, pageProps }: CustomAppProps) {
  return <ThemeProvider theme={defaultTheme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
}

export default CustomApp
