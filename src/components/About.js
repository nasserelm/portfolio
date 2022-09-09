import React from "react";
import styled from "styled-components/macro";
import myImg from '../img/about-image1.png';

const ResumeContainer = styled.a`
  padding: 1rem 0rem;
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  color: white;
  text-decoration: none;
  @media (min-width: 800px) {
    font-size: 7vmin;
    :hover {
      text-decoration: none;
      color: #8b9092;
      cursor: pointer;
    }
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  background-image: url(${myImg});
  background-size: cover;
  background-position: 60% 40%;
  background-repeat: no-repeat;
  // filter: brightness(170%); 
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
  h4 {
    font-family: "Raleway", sans-serif;
    padding: 1rem 0rem;
    line-height: 1.6rem;
    font-size: 1rem;
    @media (min-width: 800px){
      font-size: 2.5vmin;
      line-height:5vmin;
    }
  }
`

const PageWrapper = styled.div`
  height: calc(100vh - 3rem);
  overflow: hidden;
  // background-image: linear-gradient(335deg,#003e61,#1e2f59 90%,#ffc700);
  background-color: #1c1c21;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url(${myImg});
    background-size: cover;
    background-position: 40% 10%;
    text-shadow: 1px 1px black;
    padding-top: 1%;
  }
`;

function About() {
  return (
    <PageWrapper id='about'>
      <ImageContainer></ImageContainer>
      <Description>
        <h2>
          <ResumeContainer
            title='My Resume'
            href={process.env.PUBLIC_URL + "MyResume.pdf"}
            target='_blank'
          >
            Nasser Mughrabi
          </ResumeContainer>
        </h2>
        <h4>
          Current computer science student at the University of Utah.
          Passionate about programming and solving problems using the most
          efficient algorithms and data structures accessible.
          <br></br>
          For the past two years, I have been working on Full Stack
          Developement projects. In this time, I have gained extensive
          experience in both front-end and back-end development. I am confident
          in my ability to create high-quality and well-functioning web
          applications. I am also experienced in using various programming
          languages and frameworks, such as React, Django, Node.js, and more.
          <br></br>
          Working on team and personal projects helped put Full Stack
          development skills, problem-solving techniques, and teamwork skills
          into practice. 
        </h4>
      </Description>
    </PageWrapper>
  );
}

export default About;