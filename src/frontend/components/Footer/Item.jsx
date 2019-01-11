import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const StyledDiv = styled.div`
  margin: 10px;
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  display: inline-block;
`;

const ImageContainer = styled.span`
  height: 50px;
  width: 50px;
  background: url(${(props) => props.image});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  grid-area: image;
  display: inline-block;

  @media (max-width: 1000px) {
    height: 40px;
    width: 40px;
  }
`;

const TextContainer = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-70%);
  grid-area: text;
  margin-left: 10px;
  display: inline-block;
`;

const Item = ({ data, image, link }) => (
  <StyledDiv>
    {link === null ? (
      <div>
        <ImageContainer image={image} />
        <TextContainer> {data} </TextContainer>
      </div>
    ) : (
      <StyledLink href={link}>
        <ImageContainer image={image} />
        <TextContainer> {data} </TextContainer>
      </StyledLink>
    )}
  </StyledDiv>
);

Item.propTypes = {
  data: string.isRequired,
  image: string.isRequired,
  link: string,
};

Item.defaultProps = {
  link: null,
};

export default Item;
