import React from 'react';
import styled from 'styled-components';
import topLeft from '../../assets/images/topLeft';
import black from '../../assets/themes/black';
import logo from '../../assets/images/logo';
import topMiddle from '../../assets/images/topMiddle';
import mobileBG from '../../assets/images/mobileBG';
import {
  slideFromLeft,
  slideFromRight,
  slideFromBottom,
  bounce,
} from '../../assets/animations';

const StyledDiv = styled.div`
  color: ${black};

  @media (min-width: 1000px) {
    height: 100vh;
  }

  @media (max-width: 1000px) {
    background: url(${mobileBG}) no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
    background-position: center;
    padding-bottom: 30px;
    padding-top: 50px;
  }
`;

const GridContainer = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-areas: 'nameAndPos logo' 'about logo';
    grid-auto-rows: 1fr;
    grid-auto-columns: 2fr 1fr;
    width: 100%;
    position: relative;
    top: 50%;
    transform: translateY(-65%);
  }
`;

const TopLeftBG = styled.div`
  @media (min-width: 1000px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 340px;
    height: 150px;
    background: url('${topLeft}') no-repeat;
    background-size: 100% 100%;
    z-index: -2;
  }
`;

const Container = styled.div`
  @media (min-width: 1000px) {
    grid-area: nameAndPos;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 550px;
    margin: auto;
  }

  @media (max-width: 1000px) {
    width: 80%;
    margin: 50px auto 100px auto;
    text-align: center;
  }

  @media (max-width: 500px) {
    width: 90%;
    margin: 50px auto;
  }
`;

const NameContainer = styled.div`
  line-spacing: 5px;
  letter-spacing: 0.2em;
  animation: ${slideFromLeft} 1s cubic-bezier(0, 0, 0.58, 1);

  @media (max-width: 1000px) {
    font-size: 1.8em;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 500px) {
    font-size: 1.3em;
    margin: 0 auto;
  }

  @media (min-width: 1000px) {
    font-size: 2.5em;
    grid-area: name;
  }
`;

const Position = styled.div`
  font-size: 1.5em;
  letter-spacing: 0.1em;
  animation: ${slideFromRight} 1s cubic-bezier(0, 0, 0.58, 1);

  @media (max-width: 1000px) {
    font-size: 1em;
    margin: 0;
  }

  @media (max-width: 500px) {
    margin: 0 auto;
  }
`;

const LogoContainer = styled.div`
  width: 300px;
  height: 300px;
  background: url(${logo}) no-repeat;
  background-size: 100% 100%;
  grid-area: logo;
  animation: ${bounce} 1s cubic-bezier(0, 0, 0.58, 1);

  @media (max-width: 1000px) {
    width: 200px;
    height: 200px;
    margin: 0 auto -40px auto;
  }
`;

const AboutMe = styled.div`
  font-size: 20px;
  letter-spacing: 0.1em;
  animation: ${slideFromBottom} 1s cubic-bezier(0, 0, 0.58, 1);

  @media (max-width: 1000px) {
    width: 85%;
    margin: 0 auto;
    font-size: 1.2em;
    text-align: center;
  }

  @media (max-width: 500px) {
    margin: 20px auto 40px auto;
    font-size: 1em;
  }

  @media (min-width: 1000px) {
    grid-area: about;
    width: 550px;
    margin: auto;
    font-size: 1.2em;
  }
`;

const BottomBG = styled.div`
  @media (min-width: 1000px) {
    position: absolute;
    background: url(${topMiddle}) no-repeat;
    background-size: 101% 100%;
    bottom: -20px;
    height: 250px;
    z-index: -2;
    width: 100%;
  }
`;

export default () => (
  <StyledDiv>
    <TopLeftBG />
    <GridContainer>
      <LogoContainer />
      <Container>
        <NameContainer>GODFREY ZUBIAGA</NameContainer>
        <Position>Front end Developer & UI Designer</Position>
      </Container>
      <AboutMe>
        I'm a front end developer / designer. I'm a humble yet proud developer
        and a minimalistic designer with a dream of making my own UI Components
        to make other developers' life easier. So, if you think that I'm suited
        for a work from you, don't hesitate to reach me.
      </AboutMe>
    </GridContainer>
    <BottomBG />
  </StyledDiv>
);
