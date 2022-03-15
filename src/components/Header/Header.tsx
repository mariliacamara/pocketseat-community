import React, { ReactNode } from 'react';
import { StyledHeader, StyledLogo, StyledMenu,  StyledGithub, StyledLogin } from './Header.style';

const Header = () => (
  <StyledHeader>
    <StyledLogo>
      Pocketseat
    </StyledLogo>  
    <StyledMenu>
      <StyledGithub href='https://github.com/mariliacamara'>Meu Github</StyledGithub>
      <StyledLogin href='#'> Entrar na comunidade </StyledLogin>
    </StyledMenu>  
  </StyledHeader>
);

export { Header };
