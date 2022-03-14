import styled from "styled-components"
import { CardsProps } from './Cards'

const CardWrapper = styled.div<CardsProps>`
  @media screen and (min-width: 978px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    grid-gap: 20px;
    align-items: stretch;
  }
`

const CardItem = styled.div<CardsProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: ${({ theme, font }) => theme.fonts.types[font]};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ theme, size }) => theme.functions.toRem(theme.fonts.sizes[size])};

  border: 1px solid ${({ theme, color }) => theme.colors['purple']};
  border-radius: .5rem;
  padding: 1rem;

  img { 
    border-radius: .4rem;
  }
`

const CardName = styled.h2<CardsProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: ${({ theme, font }) => theme.fonts.types[font]};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ theme, size }) => theme.functions.toRem(theme.fonts.sizes[size])};
`

const CardDescription = styled.p<CardsProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: ${({ theme, font }) => theme.fonts.types[font]};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ theme, size }) => theme.functions.toRem(theme.fonts.sizes[size])};
`

const CardDemo = styled.a<CardsProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: ${({ theme, font }) => theme.fonts.types[font]};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ theme, size }) => theme.functions.toRem(theme.fonts.sizes[size])};
  text-transform: uppercase;
  text-decoration: none;
  padding: .5rem 2rem;
  border-radius: .5rem;
  margin-right: 1rem;
  background-color: ${({ theme, color }) => theme.colors['green']};
  transition: 0.5s;

  &:hover {
    background-color: transparent;
    background-color: ${({ theme, color }) => theme.colors['purple']};
  }
`

const CardGithub = styled.a<CardsProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: ${({ theme, font }) => theme.fonts.types[font]};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ theme, size }) => theme.functions.toRem(theme.fonts.sizes[size])};
  text-transform: uppercase;
  text-decoration: none;
  padding: .5rem 2rem;
  border-radius: .5rem;
  border: 1px solid ${({ theme, color }) => theme.colors['green']};
  transition: 0.5s;

  &:hover {
    border: 1px solid ${({ theme, color }) => theme.colors['purple']};
  }
`

export { CardWrapper, CardItem, CardName, CardDescription, CardDemo, CardGithub }
