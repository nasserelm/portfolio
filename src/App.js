import React from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";

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

  return (
    <React.Fragment>
      <GlobalStyle />
      <FullPage>
        <NavBar/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </FullPage>
    </React.Fragment>
  );
}

export default App;