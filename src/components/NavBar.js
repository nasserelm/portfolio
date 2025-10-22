import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-scroll";
import background from "../img/nav-background.png";

// import image from "../images/logo.png";

// --------------------------------------------------- Start Here -------------------------------------------
const NavBarItems = styled.nav`
  // background-image: linear-gradient(335deg,#003e61,#1e2f59 70%,#ffc700);
  /* background-color: #535d61; */
  background-image: url(${background});
  font-family: "Raleway", sans-serif;
  color: white;
  width: 100%;
  height: 3.5rem;
  /* border-bottom: 0.15rem solid white; */
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  /* Display changes to show Logo and LinksList next to each other*/
  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 3.5rem;
  padding: 1rem 1rem;
  /* Display changes to show Logo and LinksList next to each other*/
  @media (min-width: 800px) {
    width: auto;
    justify-content: left;
  }
`;

const Logo = styled.h1`
  font-size: 1.6rem;
  cursor: default;
`;

const MenuIcon = styled.div`
  font-size: 2rem;
  /* Menu icon only shows for phone display */
  @media (min-width: 800px) {
    display: none;
  }
`;

const LinksList = styled.ul`
  background-color: #383d39;
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100vw;
  /* Height and overflow depend on activado to manage animation of menu in phones */
  height: ${(props) => (props.activado ? "300px" : "0px")};
  overflow: ${(props) => (props.activado ? "visible" : "hidden")};
  transition: 0.5s ease-out;
  a {
    display: block;
    padding: 0.5rem 1.5rem;
    text-align: center;
    cursor: pointer;
    color: white;
  }
  .active {
    color: #8b9092;
  }
  /* Extra padding to first and last child so all of them have same overall padding */
  a:first-child {
    padding-top: 1rem;
  }
  a:last-child {
    padding-bottom: 1rem;
  }
  /* Change all the properties related to the animation because pc doesn't have animation */
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    height: fit-content;
    width: auto;
    overflow: visible;
    background-color: inherit;
    font-size: 1.6rem;
    a {
      display: block;
      padding: 0rem 1.5rem !important;
      text-align: center;
    }
    a:hover {
      color: #8b9092; //326fa8
    }
  }
`;

function NavBar() {
  // HandleClick for menuIcon so when it's clicked the display changes value
  function handleClick() {
    setDisplay(!display);
  }
  // HandleClick for menuItems so when they are click display becomes false
  function handleLinkClick(event) {
    console.log(event.target);
    setDisplay(false);
  }
  const [display, setDisplay] = useState(false);

  const sections = ["Home", "About", "Projects", "Contact"];

  const links = sections.map((name) => {
    return (
      <Link
        className="link"
        key={name}
        activeClass="active"
        to={name.toLowerCase()}
        spy={true}
        smooth={true}
        offset={-57}
        duration={500}
        onClick={(e) => handleLinkClick(e)}
      >
        {name}
      </Link>
    );
  });

  return (
    <NavBarItems>
      <Container>
        <Logo>
          Nasser Elmughrabi
        </Logo>
        <MenuIcon onClick={handleClick}>
          <i className="fas fa-bars"></i>
        </MenuIcon>
      </Container>
      <LinksList activado={display}>{links}</LinksList>
    </NavBarItems>
  );
}

export default NavBar;