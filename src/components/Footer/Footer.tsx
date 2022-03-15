import React, { ReactNode } from 'react';
import { StyledFooter, StyledFooterLogo, StyledFooterList, StyledItem } from './Footer.style';

const Footer = () => (
  <StyledFooter>
    <StyledFooterLogo>
      &copy
    </StyledFooterLogo>  
    <StyledFooterList>
      <StyledItem>2022 - Marília Camara</StyledItem>
      <StyledItem>Pocketseat</StyledItem>
    </StyledFooterList>  
  </StyledFooter>
);

export { Footer };
