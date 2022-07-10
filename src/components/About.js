import React from "react";
import styled from "styled-components/macro";
import myImg from '../img/newyorks.jpeg';

const ImageContainer = styled.div`
  overflow: hidden;
  background-image: url(${myImg});
  background-size: cover;
  background-position: 60% 40%;
  background-repeat: no-repeat;
  filter: brightness(170%); 
  @media (max-width: 760px) {
    display:none;
  }
`

const Description = styled.div`
  color: white;
  padding: 5% 10% ;
  display: flex;
  flex-direction: column;
  align-items: left;
  h2 {
    width: fit-content;
    }
  }
  h4 {
    font-family: "Raleway", sans-serif;
    padding: 1rem 0rem;
    line-height: 1.5rem;
    font-size: 1rem;
    @media (min-width: 800px){
      font-size: 2.5vmin;
      line-height:5vmin;
    }
  }
`

const PageWrapper = styled.div`
    height: calc(100vh - 3.65rem);
    overflow: hidden;
    background-image: linear-gradient(335deg,#003e61,#1e2f59 90%,#ffc700);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    @media (max-width: 800px) {
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(to bottom, rgba(0,0, 0, .3), rgba(0,0, 0, .3)), url(${myImg});
      background-size: cover;
      background-position: 40% 10%;
      text-shadow: 1px 1px black;
      padding-top: 37%;
    }
  `;

function About() {
  return (
    <PageWrapper id="about">
      <ImageContainer></ImageContainer>
      <Description>
        <h2>Nasser Mughrabi</h2>
        <h4>I am an international student completing my junior year at the University of Utah pursuing a bachelor's degree in computer science. I am passionate about solving problems and finding solutions for modern day-to-day issues using the most effecient algorithms and data structures accessable.
          <br></br>
          Working on team and personal projects helped put computer science concepts, problem solving techniques, and team work skills into practice allowing my skills to be showcased.
           <br></br>
        </h4>
      </Description>
    </PageWrapper>
  );
}

export default About;