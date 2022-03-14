import React, { ReactNode } from 'react';
import { StyledFooter, StyledFooterLogo, StyledFooterList, StyledItem } from './Footer.style';

type TextColor = 'primary' | 'secondary' | 'purple' | 'green'
type TextSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl' | 'xxxl'
type TextFamily = 'body' | 'title'
export interface FooterProps {
  children: ReactNode
  color?: TextColor
  weight?: string
  size?: TextSize
  font?: TextFamily
  borderColor?: TextColor
}

const Footer = ({ children, color = 'secondary', weight = 'normal', size = 'lg', font = 'body', borderColor='purple' }: FooterProps) => (
  <StyledFooter>
    <StyledFooterLogo color='purple' weight='700' size='xxl' font={font}>
      &copy
    </StyledFooterLogo>  
    <StyledFooterList color='secondary' weight={weight} size='sm' font='title'>
      <StyledItem>2022 - Marília Camara</StyledItem>
      <StyledItem>Pocketseat</StyledItem>
    </StyledFooterList>  
  </StyledFooter>
);

export { Footer };
