import React from 'react';
import styled from 'styled-components';
import ProjectContainer from './ProjectContainer';
import projects from './projects.json';

const StyledDiv = styled.div`
  height: auto;
  @media (min-width: 1000px) {
    margin-top: 20px;
  }

  @media (max-width: 1000px) {
    text-align: center;
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
    font-size: 1.7em;
    letter-spacing: 8px;
  }
`;

const Projects = styled.div`
  width: 90%;
  margin: 20px auto 0 auto;
`;

export default () => (
  <StyledDiv>
    <StyledTitle>Works & Projects</StyledTitle>
    <Projects>
      {projects.map((project) => (
        <ProjectContainer key={project.id} project={project} />
      ))}
    </Projects>
  </StyledDiv>
);
