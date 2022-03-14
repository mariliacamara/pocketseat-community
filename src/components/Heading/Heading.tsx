import React, { ReactNode } from 'react';
import { StyledHeading, StyledText, StyledTitle, StyledSubtitle } from './Heading.style';

type TextColor = 'primary' | 'secondary' | 'purple' | 'green'
type TextSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl' | 'xxxl'
type TextFamily = 'body' | 'title'
export interface HeadingProps {
  children: ReactNode
  color?: TextColor
  weight?: string
  size?: TextSize
  font?: TextFamily
}

const Heading = ({ children, color = 'secondary', weight = 'normal', size = 'lg', font = 'body' }: HeadingProps) => (
  <StyledHeading>
    <StyledSubtitle color='green'weight='700' size={size} font='title' data-testid="Text">
      Comunidade Dev
    </StyledSubtitle>  
    <StyledTitle color='primary' weight='700' size='xxxl' font='title' data-testid="Text">
      Projetos da Comunidade Pocketseat
    </StyledTitle>  
    <StyledText color={color} weight={weight} size={size} font={font} data-testid="Text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.
    </StyledText>
  </StyledHeading>
);

export { Heading };
