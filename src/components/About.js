import React from "react";
import styled from "styled-components/macro";
import myImg from "../img/myImage.jpg";
import me from "../img/me.jpeg";

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
  background-image: url(${me});
  background-size: cover;
  background-position: 60% 40%;
  background-repeat: no-repeat;
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
  font-family: "Raleway", sans-serif;
  h2 {
    width: fit-content;
  }
  h4 {
    padding: 1rem 0rem;
    line-height: 1.5rem;
    font-size: 1.2rem;
    @media (min-width: 1023px) {
      font-size: 2.5vmin;
      line-height: 5vmin;
    }
  }
  p {
    margin-top: 1rem;
    line-height: 1.5;
    font-size: 1.1rem;
    @media (min-width: 1023px) {
      font-size: 2vmin;
    }
  }
`;

const PageWrapper = styled.div`
  height: calc(100vh - 3rem);
  overflow: hidden;
  background-color: #1c1c21;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: 40% 10%;
    text-shadow: 1px 1px black;
    padding-top: 1%;
  }
`;

const Button = styled.a`
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
  text-align: center;
  &:hover {
    background-color: #0d8bf0;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function About() {
  return (
    <PageWrapper id="about">
      <ImageContainer />
      <Description>
        <h2>
          <ResumeContainer
            title="My Resume"
            // href={process.env.PUBLIC_URL + "Nasser_Mughrabi_Resume.pdf"}
            target="_blank"
          >
            Nasser Mughrabi
          </ResumeContainer>
        </h2>
        <p style={{fontWeight: "bold"}}>Software Developer at TELLUS Networked Sensor Solutions, Inc.</p>
        <p>
          I hold a Bachelor's degree in Computer Science from the University of
          Utah and an Associate of Science from Snow College.
        </p>
        <p>
          As a passionate Software Engineer, I thrive in navigating the dynamic
          tech landscape, tackling complex challenges, and collaborating with
          diverse teams. I’m always excited to embrace the next opportunity for
          innovation and growth.
        </p>
        <p>
          At TELLUS, I focus on building and maintaining scalable microservices
          using technologies like Python, FastAPI, PostgreSQL, MongoDB, and
          CloudFunctions/Lambdas. My work enhances air quality monitoring
          systems, helping to deliver impactful environmental solutions. I
          collaborate closely with cross-functional teams to ensure product
          alignment with business goals and customer needs.
        </p>
      </Description>
    </PageWrapper>
  );
}

export default About;
