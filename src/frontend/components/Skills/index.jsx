import React from 'react';
import styled from 'styled-components';
import Skill from './Skill';
import reactLogo from '../../assets/images/react';
import css3Logo from '../../assets/images/css3';
import javascriptLogo from '../../assets/images/javascript';
import nodeJSLogo from '../../assets/images/node';
import figmaLogo from '../../assets/images/figma';

const StyledDiv = styled.div`
  @media (min-width: 1000px) {
    height: 300px;
  }

  @media (max-width: 1000px) {
    padding: 50px 0;
  }
`;

const StyledTitle = styled.p`
  letter-spacing: 10px;
  font-size: 2em;
  font-weight: 300;
  color: white;

  @media (min-width: 1000px) {
    margin-left: 100px;
    z-index: 99999;
  }

  @media (max-width: 1000px) {
    text-align: center;
    letter-spacing: 8px;
  }
`;

const SkillsContainer = styled.div`
  width: 80%;
  margin: 50px auto;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const SkillContainer = styled.div`
  flex: 1;
  text-align: center;
  margin: 10px;
`;

export default () => (
  <StyledDiv>
    <StyledTitle>Skills</StyledTitle>
    <SkillsContainer>
      <InnerContainer>
        <SkillContainer>
          <Skill name="ReactJS" logo={reactLogo} link="https://reactjs.org/" />
        </SkillContainer>
        <SkillContainer>
          <Skill
            name="CSS3"
            logo={css3Logo}
            link="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"
          />
        </SkillContainer>
        <SkillContainer>
          <Skill
            name="Javascript"
            logo={javascriptLogo}
            link="https://www.javascript.com/"
          />
        </SkillContainer>
        <SkillContainer>
          <Skill
            name="NodeJS"
            logo={nodeJSLogo}
            link="https://www.nodejs.org/en/"
          />
        </SkillContainer>
        <SkillContainer>
          <Skill name="Figma" logo={figmaLogo} link="https://www.figma.com" />
        </SkillContainer>
      </InnerContainer>
    </SkillsContainer>
  </StyledDiv>
);
