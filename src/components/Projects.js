import React from "react";
import styled from "styled-components/macro";
import Carousel from "react-elastic-carousel";
import flipImg from "../img/both-flip.png";
import hustleImg from "../img/both-hustle.png";
import sortingImg from "../img/both-sorting.png";
import naschatsImg from "../img/both-naschats.png";
import realestateImg from "../img/both-realestate.png";
import mobileFlipImg from "../img/mobile-flip.png";
import mobileHustleImg from "../img/mobile-hustle.png";
import mobileSortingImg from "../img/mobile-sorting.png";
import mobileNaschatsImg from "../img/mobile-naschats.png";
import mobileRealestateImg from "../img/mobile-realestate.png";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

const breakPoints = [{ width: 1, itemsToShow: 1 }];

const TickerWrapper = styled.div`
  /* position: fixed; */
  bottom: 0;
  width: 100%;
  overflow: hidden;
  height: 4rem;
  background-color: rgba(#000, 0.9);
  padding-left: 100%;
  box-sizing: content-box;

  @-webkit-keyframes ticker {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  @keyframes ticker {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  .ticker {
    display: inline-block;
    height: 4rem;
    line-height: 4rem;
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;

    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-name: ticker;
    animation-name: ticker;
    -webkit-animation-duration: 30s;
    animation-duration: 30s;
  }

  .ticker-item {
    display: inline-block;
    padding: 0 2rem;
    font-size: 2rem;
    color: white;
  }

  @media (max-width: 760px) {
    .ticker {
      -webkit-animation-duration: 20s;
      animation-duration: 20s;
    }
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
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
  position: relative;
  @media (max-width: 800px) {
    background-size: 90%;
  }
  transition: 0.5s;
  @media (hover: hover) {
    :hover {
      cursor: pointer;
      transform: scale(0.97);
    }
  }
`;

const PageWrapper = styled.div`
  height: calc(100vh - 3.65rem);
  min-height: calc(100vh - 3.65rem);
  background-color: #1c1c21;
  display: block;
  align-items: center;
  justify-content: center;
  .projects-guide {
    position: relative;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    padding-top: 2rem;
  }
  // a {
  //   height: 70vh;
  //   width: 100%;
  // }
  button {
    color: white;
  }
  .rec-pagination {
    button {
      background-color: white;
    }
  }
  .website-btn {
    margin-right: 10px;
  }
  #naschats {
    background-image: url(${naschatsImg});
    :hover {
      text-decoration: none;
      cursor: pointer;
    }
  }
  #realestate {
    background-image: url(${realestateImg});
  }
  #flip {
    background-image: url(${flipImg});
  }
  #sorting {
    background-image: url(${sortingImg});
  }
  #hustle {
    background-image: url(${hustleImg});
  }
  @media (max-width: 760px) {
    #naschats {
      background-image: url(${mobileNaschatsImg});
    }
    #flip {
      background-image: url(${mobileFlipImg});
    }
    #sorting {
      background-image: url(${mobileSortingImg});
    }
    #hustle {
      background-image: url(${mobileHustleImg});
    }
    #realestate {
      background-image: url(${mobileRealestateImg});
    }
  }
`;

const Button = styled.button`
  color: white;
  background-color: #1e1e1e;
  border: 2px solid #515151;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 22px;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

  &:hover {
    background-color: #515151;
    color: #fff;
    border: 2px solid #1e1e1e;
  }

  &:active {
    background-color: #333;
    border: 2px solid #333;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  padding: 1rem;
  width: 100%;
  // background: rgba(0, 0, 0, 0.5);
`;

const ProjectContainer = styled.div`
  width: 100%;
`;

const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 760px) {
    display: none; /* Correct value to hide the container */
  }
`;

const StyledTag = styled.div`
  color: #2b6cb0;
  border-radius: 9999px;
  border: 1px solid #2b6cb0;
  background-color: transparent;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  height: 35px;
  cursor: pointer;

  &:hover {
    background-color: #2b6cb0;
    color: black;
  }
`;

function Projects() {
  return (
    <PageWrapper id="projects">
      <Carousel breakPoints={breakPoints}>
        <ProjectContainer>
          <a
            title="Nextjs Project"
            href="https://naschats.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Item id="naschats"></Item>
          </a>
          <ButtonContainer>
            <a
              href="https://naschats.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Website</Button>
            </a>
            <a
              href="https://github.com/NasserMughrabi/naschats"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Source Code</Button>
            </a>
          </ButtonContainer>
          <TagsContainer>
            <StyledTag>Next.js/React</StyledTag>
            <StyledTag>Firebase</StyledTag> <StyledTag>LangChain</StyledTag>{" "}
            <StyledTag>GPT API</StyledTag>{" "}
          </TagsContainer>
        </ProjectContainer>
        <ProjectContainer>
          <a
            title="Full-Stack Project"
            href="https://realestate258.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Item id="realestate"></Item>
          </a>
          <ButtonContainer>
            <a
              href="https://realestate258.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Website</Button>
            </a>
            <a
              href="https://github.com/NasserMughrabi/real-estate-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Source Code</Button>
            </a>
          </ButtonContainer>
          <TagsContainer>
            <StyledTag>Java</StyledTag>
            <StyledTag>Spring Boot</StyledTag>
            <StyledTag>MySQL</StyledTag>
            <StyledTag>React</StyledTag>
            <StyledTag>Docker</StyledTag>
            <StyledTag>Docker-Compose</StyledTag>
            <StyledTag>Github Actions</StyledTag>
            <StyledTag>AWS EC2</StyledTag>
          </TagsContainer>
        </ProjectContainer>
        <ProjectContainer>
          <a
            title="React Project"
            href="https://sortingalgos-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Item id="sorting"></Item>
          </a>
          <ButtonContainer>
            <a
              href="https://sortingalgos-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Website</Button>
            </a>
            <a
              href="https://github.com/NasserMughrabi/sorting-algos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Source Code</Button>
            </a>
          </ButtonContainer>
          <TagsContainer>
            <StyledTag>React</StyledTag>
            <StyledTag>JavaScript</StyledTag> <StyledTag>CSS/HTML</StyledTag>{" "}
          </TagsContainer>
        </ProjectContainer>
        <ProjectContainer>
          <a
            title="React Project"
            href="https://hustlecomp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Item id="hustle"></Item>
          </a>
          <ButtonContainer>
            <a
              href="https://hustlecomp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Website</Button>
            </a>
            <a
              title="GitHub Repo"
              href="https://github.com/NasserMughrabi/hustle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Source Code</Button>
            </a>
          </ButtonContainer>
          <TagsContainer>
            <StyledTag>React</StyledTag>
            <StyledTag>JavaScript</StyledTag>
            <StyledTag>CSS/HTML</StyledTag>{" "}
          </TagsContainer>
        </ProjectContainer>
        <ProjectContainer>
          <a
            title="JavaScript Project"
            href="https://flip-mem-game.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Item id="flip"></Item>
          </a>
          <ButtonContainer>
            <a
              href="https://flip-mem-game.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Website</Button>
            </a>
            <a
              title="GitHub Repo"
              href="https://github.com/NasserMughrabi/flipGame"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Source Code</Button>
            </a>
          </ButtonContainer>
          <TagsContainer>
            <StyledTag>JavaScript</StyledTag>
            <StyledTag>CSS</StyledTag>
            <StyledTag>HTML</StyledTag>{" "}
          </TagsContainer>
        </ProjectContainer>
      </Carousel>
    </PageWrapper>
  );
}

export default Projects;
