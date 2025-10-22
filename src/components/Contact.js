import React from "react";
import styled from "styled-components/macro";
import {FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Heading = styled.div`
  color: white;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2.5vh;
  cursor: default;
`;

const Underline = styled.div`
  background-color: white;
  margin-top: .4rem;
  width: 5.5rem;
  height: 0.2rem;
  display:flex;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 2.5vh;
  width: 75vw;
  caret-color: white;
  input {
    // background-image: linear-gradient(335deg,#003e61,#1e2f59 100%,#ffc700);
    background-color: #1c1c21;
    line-height: 1.75rem;
    font-size: 1rem;
    padding: 0px 0.5rem;
    border: 1px solid #637082;
    margin: 2px;
    color: white;
    ::placeholder {
      color: white;
    }
  }
  textarea {
    resize: none;
    // background-image: linear-gradient(335deg,#003e61,#1e2f59 100%,#ffc700);
    background-color: #1c1c21;
    height: 30vh;
    line-height: 1.75rem;
    font-size: 1rem;
    padding: 0px 0.5rem;
    border: 1px solid #637082;
    margin: 2px;
    color: white;
    ::placeholder {
      color: white;
    }
  }
  button {
    // background-image: linear-gradient(335deg,#003e61,#1e2f59 100%,#ffc700);
    background-color: #1c1c21;
    font-weight: 700;
    margin-top: 0.5rem;
    height: 3rem;
    color: white;
    border: 2px solid white;
    width: 7rem;
    align-self: flex-end;
    font-size: 1.35rem;
    cursor: pointer;
  }
  /* Only use hover when the user is not in touchscreen */
  @media (hover: hover) {
    button:hover {
      transition: 0.5s;
      color: #8b9092;
      border-color: #8b9092;
    }
  }
`;

const IconContainer = styled.ul`
  padding-top: 2.5vh;
  margin-top: 5vh;
  width: 100vw;
  // background-color: #003e61;
  background-color: #1c1c21;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-evenly;
  a {
    color: white;
    text-decoration: none;
    /* margin: 0 10vw; */
    transition: transform 1s;
    margin: 2rem 0;
  }
  svg {
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    /* transition: transform 0.5s; */
    transition: color 1s;
  }
  @media (hover: hover) {
    svg:hover {
      color: #8b9092;
      /* transform: scale(1.50); */
    }
    a:hover {
      transform: rotateY(360deg);
    }
  }
`;

const Copyright = styled.div`
  background-color: #1c1c21;
  width: 100vw;
  display: block;
  justify-content: center;
  text-align: center;
  color: white;
  padding-bottom: 1rem;
`;

const PageWrapper = styled.div`
  height: calc(100vh - 3.65rem);
  min-height: calc(100vh - 3.65rem);
  height: auto;
  // background-image: linear-gradient(335deg,#003e61,#1e2f59 100%,#ffc700);
  background-color: #31313b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Contact() {
  // Function to handle submit button click
  // Checks if the form is valid and sends email in case it is 
  function handleClick() {
    let name = document.getElementById('Name').value;
    let message = document.getElementById('Message').value;
    // open email client app or redirect to email browser
    window.open(`mailto:nasser.elmughrabi@gmail.com?subject=Portfolio Email from ${name}&body=${message}`);
  }

  return (
    <PageWrapper id="contact">
      <Heading>
        <h2>Contact</h2>
        <Underline></Underline>
      </Heading>
      <FormContainer>
        <input id='Name' name="Name" type="Text" placeholder="Name" />
        <textarea id='Message'name="Message" placeholder="Leave me a message" rows="20" cols="4"></textarea>
        <button type='button' onClick={handleClick}>Submit</button>
      </FormContainer>
      <IconContainer>
        <a href="https://www.nasserelmughrabi.com" target="_blank" rel="noopener noreferrer" onClick={handleClick}><AiOutlineMail /></a>
        <a href="https://www.instagram.com/nasser_2588/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/nasser258/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/nasserelm/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </IconContainer>
      <Copyright>Nasser Elmughrabi <i className="fa fa-copyright"></i> 2025</Copyright>
    </PageWrapper>
  );
}

export default Contact;
