import styled from "styled-components"

const CardWrapper = styled.div`
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 20px;
    align-items: stretch;
  }

  @media screen and (min-width: 1525px) {
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  }
`

const CardItem = styled.div`
  text-align: center;

  border: 1px solid ${props => props.theme.colors.purple};
  border-radius: .5rem;
  padding: 1.5rem;
  margin-bottom: 2rem;

  img { 
    border-radius: .4rem;
  }

  @media screen and (min-width: 700px) {
    text-align: left;
  }
`

const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
`

const CardName = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.types.title};
  font-weight: 500;
  font-size: ${props => props.theme.functions.toRem(props.theme.fonts.sizes.xl)};
`

const CardDescription = styled.p`
  font-size: ${props => props.theme.functions.toRem(props.theme.fonts.sizes.lg)};
`

const CardDemo = styled.a`
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.bg};

  font-size: ${props => props.theme.functions.toRem(props.theme.fonts.sizes.default)};
  font-weight: 200;
  text-transform: uppercase;
  text-decoration: none;

  margin-right: 1rem;
  padding: .5rem 2rem;
  border-radius: .5rem;
  transition: 0.5s;

  &:hover {
    background-color: transparent;
    background-color: ${props => props.theme.colors.purple};
  }
`

const CardGithub = styled.a`
  color: ${props => props.theme.colors.primary};

  font-weight: 200;
  font-size: ${props => props.theme.functions.toRem(props.theme.fonts.sizes.default)};
  text-transform: uppercase;
  text-decoration: none;
  padding: .5rem 2rem;
  border-radius: .5rem;
  border: 1px solid ${props => props.theme.colors.green};
  transition: 0.5s;

  &:hover {
    border: 1px solid ${props => props.theme.colors.purple};
  }
`

export { CardWrapper, CardItem, CardName, CardDescription, CardDemo, CardGithub, CardImage }
