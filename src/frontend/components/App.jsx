import React from 'react';
import styled from 'styled-components';
import AboutMe from './AboutMe/index';
import Skills from './Skills';
import black from '../assets/themes/black';
import Portfolio from './Portfolio';
import Footer from './Footer';

const StyledDiv = styled.div``;

const MiddlePart = styled.div`
  background: ${black};
  height: auto;

  @media (min-width: 1000px) {
    padding-bottom: 10px;
  }

  @media (max-width: 1000px) {
    margin: 0;
  }
`;

export default () => (
  <StyledDiv>
    <AboutMe />
    <MiddlePart>
      <Skills />
      <Portfolio />
    </MiddlePart>
    <Footer />
  </StyledDiv>
);
