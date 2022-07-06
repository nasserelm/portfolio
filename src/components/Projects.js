import React from "react";
import styled from "styled-components/macro";
import Carousel from "react-elastic-carousel";
import cryptosImg from '../img/both-cryptos.png';
import flipImg from '../img/both-flip.png';
import socialImg from '../img/both-social.png';
import mobileCryptosImg from '../img/mobile-cryptos.png';
import mobileFlipImg from '../img/mobile-flip.png';
import mobileSocialImg from '../img/mobile-social.png';

const breakPoints = [
  {width: 1, itemsToShow: 1},
]

const Item = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  @media (max-width: 800px) {
    background-size: 90%;
  }
  transition: 0.5s;
  @media(hover: hover){
    :hover{
      cursor: pointer;
      transform: scale(0.97);
    }
  }
`

const PageWrapper = styled.div`
  height: calc(100vh - 3.65rem);
  min-height: calc(100vh - 3.65rem);
  background-color: #1e242c;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    height: 70vh;
    width: 100%;
  }
  button {
    color: white;
  }
  .rec-pagination{
    button {
      background-color: white;
    }
  }
  #cryptos{
    background-image:url(${cryptosImg});
  }
  #flip{
    background-image:url(${flipImg});
  }
  #social{
    background-image:url(${socialImg});
  }
  #social{
    background-image:url(${socialImg});
  }
  @media (max-width: 800px) {
  #cryptos{
    background-image:url(${mobileCryptosImg});
    background-size: cover;
  }
  #flip{
    background-image:url(${mobileFlipImg});
    background-size: cover;
  }
  #social{
    background-image:url(${mobileSocialImg});
    background-size: cover;
  }
  #social{
    background-image:url(${mobileSocialImg});
    background-size: cover;
  }
  }
`;

function Projects() {
  return (
    <PageWrapper id="projects">
      <Carousel breakPoints={breakPoints}>
        <a data-hover="Hello, this is the tooltip" href="https://cryptos-proj.netlify.app/" target="_blank" rel="noopener noreferrer">
          <Item id="cryptos"></Item>
        </a>
        <a href="https://flip-mem-game.netlify.app/" target="_blank" rel="noopener noreferrer">
          <Item id="flip"></Item>
        </a>
        <a href="https://socialme-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <Item id="social"></Item>
        </a>
        <a href="https://socialme-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <Item id="social"></Item>
        </a>
      </Carousel>
    </PageWrapper>
  );
}

export default Projects;