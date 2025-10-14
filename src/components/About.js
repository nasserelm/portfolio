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
        <p style={{ fontWeight: "bold" }}>
          Software Engineer at TELLUS Networked Sensor Solutions, Inc.
        </p>
        <p>
          Software Engineer with 2+ years of expertise in
          architecting and optimizing scalable APIs, microservices, and data
          pipelines using Python, FastAPI, and SQL technologies.
        </p>
        <p>
          Demonstrated success in reducing system latency across multiple
          microservices through strategic caching implementations and optimized
          system architecture for 1M+ requests per month. Proven track record of end-to-end product
          development and successful launches.
        </p>
        <p>
          Proficient in distributed systems, cloud infrastructure (AWS/GCP), and
          data-driven feature development.
          <br />
          Technical expertise spans Python (FastAPI), Java (Spring Boot),
          TypeScript (React/Next.js), PostgreSQL, Redis, AWS, GCP, Docker, and
          CI/CD pipelines, complemented by strong foundations in algorithms,
          data structures, and system design principles.
        </p>
        <p>
          Passionate about building low-latency, highly available distributed
          systems that serve millions of users.
          <br />
          Thrives on solving complex engineering challenges, architecting
          scalable solutions, and fostering cross-team collaboration to deliver
          high-impact results.
        </p>
      </Description>
    </PageWrapper>
  );
}

export default About;
