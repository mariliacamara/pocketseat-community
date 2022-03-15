import styled from "styled-components"

const StyledFooter = styled.div`
  margin: 6rem 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width:600px) {
    flex-direction: row;
  }
`

const StyledFooterLogo = styled.div`
  color: ${props => props.theme.colors.purple};
  font-size: ${props => props.theme.functions.toRem(props.theme.fonts.sizes.xxl)};
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  

  @media screen and (min-width:1200px) {
    width: 30vw;
  }
`
const StyledFooterList = styled.ul`
  font-family: ${props => props.theme.fonts.types.title};
  font-size: ${props => props.theme.functions.toRem(props.theme.fonts.sizes.sm)};
  line-height: 1.2;
  margin: 0;
  padding: 0;
`

const StyledItem = styled.li`
  list-style: none;
  display: inline-block;

  &:last-child {
    margin-left: 1rem;
  }
`

export { StyledFooter, StyledFooterLogo, StyledFooterList, StyledItem }
