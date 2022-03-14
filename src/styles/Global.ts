import { createGlobalStyle } from 'styled-components';
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
  body {
    font-family: ${({theme}) => theme.fonts.types.body};
    font-size: ${({theme}) => theme.functions.toRem(16)};
    background: ${({theme}) => theme.colors.bg};
    color: ${({theme}) => theme.colors.secondary};
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyle