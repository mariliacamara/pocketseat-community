import React, { ReactNode } from 'react';
import { StyledFooter, StyledFooterLogo, StyledFooterList, StyledItem } from './Footer.style';

const Footer = () => (
  <StyledFooter>
    <StyledFooterLogo>
      Codeland
    </StyledFooterLogo>  
    <StyledFooterList>
      <StyledItem>2022 - Marília Camara</StyledItem>
      <StyledItem>Pocketseat</StyledItem>
    </StyledFooterList>  
  </StyledFooter>
);

export { Footer };
