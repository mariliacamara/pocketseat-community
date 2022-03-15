import styled from "styled-components"

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  gap: 4rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`

const StyledLogo = styled.div`
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
  font-size: ${props => props.theme.functions.toRem(props.theme.fonts.sizes.xxl)};
  line-height: 1.2;
  text-transform: uppercase;
  
  @media screen and (min-width:1200px) {
    width: 30vw;
  }
`
const StyledMenu = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.functions.toRem(props.theme.fonts.sizes.sm)};
  font-weight: 700;
  line-height: 1.2;
`

const StyledGithub = styled.a`
  color: ${props => props.theme.colors.primary};
  padding: 2rem 0;
  margin-right: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    color: ${props => props.theme.colors.purple};
  }
`

const StyledLogin = styled.a`
  border: 1px solid ${props => props.theme.colors.purple};
  border-radius: .4rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    border: 1px solid ${props => props.theme.colors.green};
  }
`

export { StyledHeader, StyledLogo, StyledMenu, StyledGithub, StyledLogin }
