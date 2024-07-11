import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import emailjs from "emailjs-com";

// Sets up global styling
const GlobalStyle = createGlobalStyle`
  * {
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family: "Lato", Helvetica, Arial, sans-serif;
      max-width: 100%!important;
      ::-webkit-scrollbar {
        display: none;
      }
  }
`;

// Contains all the content on the page
const FullPage = styled.div`
  min-height: 100vh;
`;

function App() {
  useEffect(() => {
    console.log(window.location.pathname, window.location.search);

    const templateParams = {
      message:
        "Someone visited your website from: " +
        window.location.pathname +
        window.location.search,
    };
    emailjs
      .send(
        "service_qx3lqbp",
        "template_h7bivnl",
        templateParams,
        "01pNSYIZiCoEt2dVi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <FullPage>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </FullPage>
    </React.Fragment>
  );
}

export default App;
