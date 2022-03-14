import React, { ReactNode } from 'react';
import { 
  StyledHeader, 
  StyledLogo, 
  StyledMenu, 
  StyledGithub, 
  StyledLogin 
} from './Header.style';

type TextColor = 'primary' | 'secondary' | 'purple' | 'green'
type TextSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl' | 'xxxl'
type TextFamily = 'body' | 'title'
export interface HeaderProps {
  children: ReactNode
  color?: TextColor
  weight?: string
  size?: TextSize
  font?: TextFamily
  borderColor?: TextColor
}

const Header = ({ children, color = 'secondary', weight = 'normal', size = 'lg', font = 'body', borderColor='purple' }: HeaderProps) => (
  <StyledHeader>
    <StyledLogo color='primary' weight='700' size='xxl' font={font} data-testid="Text">
      Pocketseat
    </StyledLogo>  
    <StyledMenu color='primary' weight='700' size='sm' font={font} data-testid="Text">
      <StyledGithub color='primary' href='https://github.com/mariliacamara'>Meu Github</StyledGithub>
      <StyledLogin 
        color='primary' 
        borderColor={borderColor} 
        href='#'>
          Entrar na comunidade
      </StyledLogin>
    </StyledMenu>  
  </StyledHeader>
);

export { Header };
