import React, { ReactNode } from 'react';
import { StyledHeading, StyledText, StyledTitle, StyledSubtitle } from './Heading.style';

const Heading = () => (
  <StyledHeading>
    <StyledSubtitle>
      Comunidade Dev
    </StyledSubtitle>  
    <StyledTitle>
      Projetos da Comunidade Pocketseat
    </StyledTitle>  
    <StyledText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.
    </StyledText>
  </StyledHeading>
);

export { Heading };
