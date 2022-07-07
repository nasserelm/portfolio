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

const ResumeContainer = styled.a`
  padding: 1rem 0rem;
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: white;
  text-decoration: none;
  @media (min-width: 800px){
    font-size: 7vmin;
    :hover{
      text-decoration: none;
      color: #d91b6a;
      cursor:pointer;
    }
  }
`;

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
    background-color: #1e242c;
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
      padding-top: 40%;
    }
  `;

function About() {
  return (
    <PageWrapper id="about">
      <ImageContainer></ImageContainer>
      <Description>
        <h2><ResumeContainer title="My Resume" href={process.env.PUBLIC_URL + "Resume.pdf"} target="_blank">Nasser Mughrabi</ResumeContainer></h2>
        <h4>I am an international student completing my junior year at the University of Utah where I am pursuing my bachelor's degree in computer science. I am passionate about finding soultions for our modern day to day problems using the most effecient algorithms and data structures.
          <br></br>
          Working on personal and team projects helped me put computer science concepts and problem solving techniques into practice allowing me to showcase my skills.
           <br></br>
          I am quick learner, great communicator, and team player 
        </h4>
      </Description>
    </PageWrapper>
  );
}

export default About;