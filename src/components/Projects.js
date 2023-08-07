import React from "react";
import styled from "styled-components/macro";
import Carousel from "react-elastic-carousel";
import flipImg from "../img/both-flip.png";
import hustleImg from "../img/both-hustle.png";
import sortingImg from "../img/both-sorting.png";
import naschatsImg from "../img/both-naschats.png";
import mobileFlipImg from "../img/mobile-flip.png";
import mobileHustleImg from "../img/mobile-hustle.png";
import mobileSortingImg from "../img/mobile-sorting.png";
import mobileNaschatsImg from "../img/mobile-naschats.png";
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
  // background-image: linear-gradient(335deg,#003e61,#1e2f59 100%,#ffc700);
  background-color: #1c1c21;
  display: block;
  align-items: center;
  justify-content: center;
  .projects-guide {
    color: white;
    font-size: 1.5rem;
    text-align: center;
    padding-top: 3rem;
  }
  a {
    height: 70vh;
    width: 100%;
  }
  button {
    color: white;
  }
  .rec-pagination {
    button {
      background-color: white;
    }
  }
  #naschats {
    background-image: url(${naschatsImg});
    :hover {
      text-decoration: none;
      cursor: pointer;
    }
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
  }
`;

function Projects() {
  return (
    <PageWrapper id='projects'>
      {/* <TickerWrapper>
        <div class='ticker'>
          <div class='ticker-item'>
            <BsFillArrowDownSquareFill /> Click/Tap To Naviagate{" "}
            <BsFillArrowDownSquareFill />
          </div>
          <div class='ticker-item'>
            <BsFillArrowDownSquareFill /> Click/Tap To Naviagate{" "}
            <BsFillArrowDownSquareFill />
          </div>
          <div class='ticker-item'>
            <BsFillArrowDownSquareFill /> Click/Tap To Naviagate{" "}
            <BsFillArrowDownSquareFill />
          </div>
        </div>
      </TickerWrapper> */}
      <div className='projects-guide'>
        <BsFillArrowDownSquareFill /> Click/Tap To Navigate{" "}
        <BsFillArrowDownSquareFill />
      </div>
      <Carousel breakPoints={breakPoints}>
        <a
          title='Nextjs Project'
          href='https://naschats.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Item id='naschats'></Item>
        </a>
        <a
          title='React Project'
          href='https://sortingalgos-app.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Item id='sorting'></Item>
        </a>
        <a
          title='React Project'
          href='https://hustlecomp.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Item id='hustle'></Item>
        </a>
        <a
          title='Javascript Project'
          href='https://flip-mem-game.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Item id='flip'></Item>
        </a>
      </Carousel>
    </PageWrapper>
  );
}

export default Projects;
