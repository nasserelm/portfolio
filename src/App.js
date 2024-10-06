import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import emailjs from "emailjs-com";
import axios from "axios";

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
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        const { city, region, country_name } = response.data;
        const templateParams = {
          message: `Someone visited your website from: ${city}, ${region}, ${country_name}`,
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
              // console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      })
      .catch((error) => {
        console.error("Error fetching geolocation:", error);
      });
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


// import React, { useState, useEffect } from "react";
// import { ChakraProvider, Box } from "@chakra-ui/react";
// import styled, { createGlobalStyle } from "styled-components/macro";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Projects from "./components/Projects";
// import NavBar from "./components/NavBar";
// import emailjs from "emailjs-com";
// import axios from "axios";

// // Sets up global styling
// const GlobalStyle = createGlobalStyle`
//   * {
//       margin:0;
//       padding:0;
//       box-sizing:border-box;
//       font-family: "Lato", Helvetica, Arial, sans-serif;
//       max-width: 100%!important;
//       ::-webkit-scrollbar {
//         display: none;
//       }
//   }
// `;

// // Contains all the content on the page
// const FullPage = styled.div`
//   min-height: 100vh;
// `;

// function App() {
//   // useEffect(() => {
//   //   axios
//   //     .get("https://ipapi.co/json/")
//   //     .then((response) => {
//   //       const { city, region, country_name } = response.data;
//   //       const templateParams = {
//   //         message: `Someone visited your website from: ${city}, ${region}, ${country_name}`,
//   //       };
//   //       emailjs
//   //         .send(
//   //           "service_qx3lqbp",
//   //           "template_h7bivnl",
//   //           templateParams,
//   //           "01pNSYIZiCoEt2dVi"
//   //         )
//   //         .then(
//   //           (result) => {
//   //             // console.log(result.text);
//   //           },
//   //           (error) => {
//   //             console.log(error.text);
//   //           }
//   //         );
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching geolocation:", error);
//   //     });
//   // }, []);

//   return (
//     <ChakraProvider>
//       <Box minHeight="100vh" fontFamily="Lato, Helvetica, Arial, sans-serif">
//         <NavBar />
//         <Home />
//         <About />
//         <Projects />
//         <Contact />
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default App;
