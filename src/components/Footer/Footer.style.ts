import styled from "styled-components"
import { FooterProps } from './Footer'

const StyledFooter = styled.div<FooterProps>`
  margin: 6rem 0 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`

const StyledFooterLogo = styled.div<FooterProps>`
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
const StyledFooterList = styled.ul<FooterProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: ${({ theme, font }) => theme.fonts.types[font]};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ theme, size }) => theme.functions.toRem(theme.fonts.sizes[size])};
  line-height: 1.2;
`

const StyledItem = styled.li<FooterProps>`
  list-style: none;
  display: inline-block;
  margin-left: 1rem; 
`

export { StyledFooter, StyledFooterLogo, StyledFooterList, StyledItem }
