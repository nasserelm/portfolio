import React from "react";
import styled from "styled-components/macro";
import myImg from "../img/nassers.jpg";

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
  @media (max-width: 796px) {
    display: none;
  }
`;

const Description = styled.div`
  color: white;
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  align-items: left;
  h2 {
    width: fit-content;
  }
  h4 {
    font-family: "Raleway", sans-serif;
    padding: 1rem 0rem;
    line-height: 1.2rem;
    font-size: 1rem;
    @media (min-width: 1023px) {
      //800px
      font-size: 2.5vmin;
      line-height: 5vmin;
    }
  }
`;

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
    /* background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url(${myImg}); */
    background-size: cover;
    background-position: 40% 10%;
    text-shadow: 1px 1px black;
    padding-top: 1%;
  }
`;

const Button = styled.button`
  /* Button styles */
  padding: 10px 20px;
  font-size: 16px;
  background-color: #2196f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 24px;
  font-weight: bold;

  /* Hover styles */
  &:hover {
    background-color: #0d8bf0;
  }

  /* Disabled styles */
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
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
            href={process.env.PUBLIC_URL + "Nasser_Resume.pdf"}
            target='_blank'
          >
            Nasser Mughrabi
          </ResumeContainer>
        </h2>
        <h4>
          Senior computer science student at the University of Utah and Software
          Developer Intern at Amotions Inc.
          <br></br>
          <br></br>
          Imagine a dedicated software developer who effortlessly navigates the
          ever-changing landscape of technology, fearlessly tackling complex
          problems and seamlessly collaborating with diverse teams. I am that
          developer, always ready to embark on the next exciting challenge.
          <br></br>
          <br></br>
        </h4>
        <Button>
          <a
            href={process.env.PUBLIC_URL + "Nasser_Resume.pdf"}
            style={{ textDecoration: "none", color: "inherit" }}
            target='_blank'
          >
            Resume
          </a>
        </Button>
      </Description>
    </PageWrapper>
  );
}

export default About;
