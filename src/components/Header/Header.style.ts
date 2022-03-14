import styled from "styled-components"
import { HeaderProps } from './Header'

const StyledHeader = styled.div<HeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6.5rem;
  
`

const StyledLogo = styled.div<HeaderProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: ${({ theme, font }) => theme.fonts.types[font]};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ theme, size }) => theme.functions.toRem(theme.fonts.sizes[size])};
  line-height: 1.2;
  text-transform: uppercase;
  

  @media screen and (min-width:1200px) {
    width: 30vw;
  }
`
const StyledMenu = styled.div<HeaderProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: ${({ theme, font }) => theme.fonts.types[font]};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ theme, size }) => theme.functions.toRem(theme.fonts.sizes[size])};
  line-height: 1.2;
`

const StyledGithub = styled.a<HeaderProps>`
  padding: 2rem 0;
  margin-right: 2rem;
  text-transform: uppercase;
  color: ${({ theme, color }) => theme.colors[color]};
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    color: ${({ theme, color }) => theme.colors['purple']};
  }
`

const StyledLogin = styled.a<HeaderProps>`
  border: 1px solid ${({ theme, color }) => theme.colors['purple']};
  border-radius: .4rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  color: ${({ theme, color }) => theme.colors[color]};
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    border: 1px solid ${({ theme, color }) => theme.colors['green']};
  }
`

export { StyledHeader, StyledLogo, StyledMenu, StyledGithub, StyledLogin }
