import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import black from '../../assets/themes/black';
import gray from '../../assets/themes/gray';

const StyledDiv = styled.div`
  width: 90%;
  display: grid;

  @media (min-width: 1000px) {
    height: 200px;
    z-index: 9999;
    grid-template-areas: 'left right';
    grid-auto-columns: 200px 1fr;
    grid-auto-rows: 100%;
    padding: 20px auto;
    margin: 30px auto;
  }

  @media (max-width: 1000px) {
    grid-template-areas: 'left' 'right';
    margin: 0 auto;
    padding: 0 0 30px 0;
  }
`;

const ProjectLogoContainer = styled.div`
  height: 120px;
  width: 120px;
  background: url(${(props) => props.logo}) no-repeat;
  background-size: 80% 80%;
  background-color: ${gray};
  background-position: center center;
  margin: 10px auto;
  border-radius: 10px;
  text-align: center;
`;

const ProjectLogo = styled.div`
  height: 80%;
  width: 80%;
  margin: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background: url(${(props) => props.logo}) no-repeat;
  background-size: 100% 100%;
  background-color: white;
  border-radius: 5px;
`;

const ProjectName = styled.div`
  color: white;
  font-size: 1.3em;
`;

const LeftContainer = styled.div`
  grid-area: left;
  text-align: center;
`;

const InnerContainer = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const RightContainer = styled.div`
  grid-area: right;
  z-index: 99999;
`;

const ProjectDescription = styled.div`
  color: white;
  width: 90%;
  margin: 20px auto;

  @media (min-width: 1000px) {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const Description = styled.div`
  font-size: 1.1em;
`;

const LinksContainer = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    justify-content: left;
  }
`;

const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  width: auto;
  padding: 5px 10px;
  font-size: 0.9em;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  border: 1px solid white;
  cursor: pointer;
  transition-duration: 0.3s;

  @media (min-width: 1000px) {
    margin: 0 10px 10px 0;
    &:hover {
      transition-duration: 0.3s;
      background: ${gray};
    }
  }

  @media (max-width: 1000px) {
    margin: 0 auto 10px auto;
  }
`;

const TechnologyUsed = styled.p`
  margin-right: 10px;
  margin-bottom: 10px;
  display: inline-block;
  width: auto;
  padding: 5px 10px;
  font-size: 0.7em;
  font-weight: bold;
  background: white;
  color: ${black};
  border-radius: 5px;
`;

const TechnologyUsedContainer = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const StyledDate = styled.div`
  color: #c7c7c7;
`;

const Role = styled(TechnologyUsed)`
  font-size: 0.8em;
  background: ${black};
  color: white;
  margin-bottom: 0;
  font-style: italic;
`;

export default ({ project }) => (
  <ScrollAnimation
    duration={0.5}
    animateIn="fadeInLeftBig"
    animateOut="fadeOut">
    <StyledDiv>
      <LeftContainer>
        <InnerContainer>
          <ProjectLogoContainer logo={project.logoLink} />
          <ProjectName>{project.name}</ProjectName>
        </InnerContainer>
      </LeftContainer>
      <RightContainer>
        <ProjectDescription>
          <Description>{project.description}</Description>
          <LinksContainer>
            {project.links.map((link, index) => (
              <Link key={index} href={link.url} target="_blank">
                {link.name}
              </Link>
            ))}
          </LinksContainer>
          <Description>
            Roles:{' '}
            {project.roles.map((role, index) => (
              <Role key={index}>{role}</Role>
            ))}
          </Description>
          <TechnologyUsedContainer>
            {project.technologyUsed.map((tech) => (
              <TechnologyUsed key={tech}>{tech}</TechnologyUsed>
            ))}
          </TechnologyUsedContainer>
          <StyledDate>{project.date}</StyledDate>
        </ProjectDescription>
      </RightContainer>
    </StyledDiv>
  </ScrollAnimation>
);
