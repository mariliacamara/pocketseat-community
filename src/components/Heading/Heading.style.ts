import styled from "styled-components"

const StyledHeading = styled.div`
  margin-bottom: 5rem;
`

const StyledTitle = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.types.title};
  font-weight: 700;
  font-size: ${props => props.theme.functions.toRem(props.theme.fonts.sizes.xxxl)};
  line-height: 1.2;
  width: 100vw;

  @media screen and (max-width:445px) {
    font-size: ${props => props.theme.functions.toRem(props.theme.fonts.sizes.xl)};
  }
  
  @media screen and (min-width:1200px) {
    width: 31vw;
  }
`
const StyledSubtitle = styled.h2`
  color: ${props => props.theme.colors.green};
  font-family: ${props => props.theme.fonts.types.title};
  font-weight: 700;
  font-size: ${props => props.theme.functions.toRem(props.theme.fonts.sizes.lg)};
  line-height: 1.2;
  text-transform: uppercase;

  @media screen and (max-width:445px) {
    font-size: ${props => props.theme.functions.toRem(props.theme.fonts.sizes.lg)};
  }
`
const StyledText = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.functions.toRem(props.theme.fonts.sizes.lg)};
  line-height: 1.2;
  text-align: left;

  @media screen and (max-width:445px) {
    font-size: ${props => props.theme.functions.toRem(props.theme.fonts.sizes.lg)};
  }
  
  @media screen and (min-width:1200px) {
    width: 50vw;
  }
`

export { StyledHeading, StyledText, StyledTitle, StyledSubtitle }
