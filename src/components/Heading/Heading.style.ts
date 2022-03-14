import styled from "styled-components"
import { HeadingProps } from './Heading'

const StyledHeading = styled.div<HeadingProps>`
  margin-bottom: 5rem;
`

const StyledTitle = styled.h1<HeadingProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: ${({ theme, font }) => theme.fonts.types[font]};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ theme, size }) => theme.functions.toRem(theme.fonts.sizes[size])};
  line-height: 1.2;
  

  @media screen and (min-width:1200px) {
    width: 31vw;
  }
`
const StyledSubtitle = styled.h2<HeadingProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: ${({ theme, font }) => theme.fonts.types[font]};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ theme, size }) => theme.functions.toRem(theme.fonts.sizes[size])};
  line-height: 1.2;
  text-transform: uppercase;
`
const StyledText = styled.p<HeadingProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: ${({ theme, font }) => theme.fonts.types[font]};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ theme, size }) => theme.functions.toRem(theme.fonts.sizes[size])};
  line-height: 1.2;
  text-align: left;

  @media screen and (min-width:1200px) {
    width: 50vw;
  }
`

export { StyledHeading, StyledText, StyledTitle, StyledSubtitle }
