import React, { useState } from "react";
import styled from "styled-components/macro";
import Carousel from "react-elastic-carousel";
import flipImg from "../img/both-flip.png";
import hustleImg from "../img/both-hustle.png";
import sortingImg from "../img/both-sorting.png";
import naschatsImg from "../img/both-naschats.png";
import realestateImg from "../img/both-realestate.png";
import fileAutoImg from "../img/fileAuto.png";
import mobileFlipImg from "../img/mobile-flip.png";
import mobileHustleImg from "../img/mobile-hustle.png";
import mobileSortingImg from "../img/mobile-sorting.png";
import mobileNaschatsImg from "../img/mobile-naschats.png";
import mobileRealestateImg from "../img/mobile-realestate.png";
import mobileFileAutoImg from "../img/fileAuto.png";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

const breakPoints = [{ width: 1, itemsToShow: 1 }];

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position: relative;
  @media (max-width: 800px) {
    background-size: 90%;
  }
  transition: 0.5s;
  @media (hover: hover) {
    :hover {
      cursor: pointer;
      transform: scale(0.97);
    }
  }
`;

const PageWrapper = styled.div`
  position: relative;
  height: calc(100vh - 2.65rem);
  min-height: calc(100vh - 3.65rem);
  background-color: #1c1c21;
  display: block;
  align-items: center;
  justify-content: center;
  .projects-guide {
    position: relative;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    padding-top: 2rem;
  }
  // a {
  //   height: 70vh;
  //   width: 100%;
  // }
  button {
    color: white;
  }
  .rec-pagination {
    button {
      background-color: white;
    }
  }
  .website-btn {
    margin-right: 10px;
  }
  #naschats {
    background-image: url(${naschatsImg});
    :hover {
      text-decoration: none;
      cursor: pointer;
    }
  }
  #realestate {
    background-image: url(${realestateImg});
  }
  #flip {
    background-image: url(${flipImg});
  }
  #sorting {
    background-image: url(${sortingImg});
  }
  #hustle {
    background-image: url(${hustleImg});
  }
  #fileauto {
    background-image: url(${fileAutoImg});
  }
  @media (max-width: 760px) {
    #naschats {
      background-image: url(${mobileNaschatsImg});
    }
    #flip {
      background-image: url(${mobileFlipImg});
    }
    #sorting {
      background-image: url(${mobileSortingImg});
    }
    #hustle {
      background-image: url(${mobileHustleImg});
    }
    #realestate {
      background-image: url(${mobileRealestateImg});
    }
    #fileauto {
      background-image: url(${mobileFileAutoImg});
    }
  }
`;

const Button = styled.button`
  color: white;
  background-color: #1e1e1e;
  border: 2px solid #515151;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 22px;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

  &:hover {
    background-color: #515151;
    color: #fff;
    border: 2px solid #1e1e1e;
  }

  &:active {
    background-color: #333;
    border: 2px solid #333;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  padding: 1rem;
  width: 100%;
  // background: rgba(0, 0, 0, 0.5);
`;

const ProjectContainer = styled.div`
  width: 100%;
`;

const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 760px) {
    display: none; /* Correct value to hide the container */
  }
`;

const StyledTag = styled.div`
  color: #2b6cb0;
  border-radius: 9999px;
  border: 1px solid #2b6cb0;
  background-color: transparent;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  height: 35px;
  cursor: pointer;

  &:hover {
    background-color: #2b6cb0;
    color: black;
  }
`;

const NavButton = styled(Button)`
  color: ${(props) => (props.isActive ? "white" : "black !important")};
  background-color: ${(props) => (props.isActive ? "#4a90e2" : "#f0f0f0")};
  margin: 0;
  border: 1px solid #4a90e2;
  border-radius: 0px;
  &:hover {
    background-color: #357abd;
    color: white;
  }
`;

function Projects() {
  const [view, setView] = useState("normal"); // State to manage the view

  const normalProjects = [
    {
      id: "naschats",
      title: "Nextjs Project",
      link: "https://naschats.netlify.app/",
      codeLink: "https://github.com/NasserMughrabi/naschats",
      img: naschatsImg,
      tags: ["Next.js/React", "Firebase", "LangChain", "GPT API"],
    },
    {
      id: "sorting",
      title: "React Project",
      link: "https://sortingalgos-app.netlify.app/",
      codeLink: "https://github.com/NasserMughrabi/sorting-algos",
      img: sortingImg,
      tags: ["React", "JavaScript", "CSS/HTML"],
    },
    {
      id: "realestate",
      title: "Full-Stack Project",
      link: "https://realestate258.netlify.app/",
      codeLink: "https://github.com/NasserMughrabi/real-estate-api",
      img: realestateImg,
      tags: [
        "Java",
        "Spring Boot",
        "MySQL",
        "React",
        "Docker",
        "Docker-Compose",
        "Github Actions",
        "AWS EC2",
      ],
    },
    {
      id: "hustle",
      title: "Hustle Project",
      link: "https://hustle-project.netlify.app/",
      codeLink: "https://github.com/NasserMughrabi/hustle-project",
      img: hustleImg,
      tags: ["JavaScript", "Node.js", "Express"],
    },
    {
      id: "flip",
      title: "Flip Project",
      link: "https://flip-project.netlify.app/",
      codeLink: "https://github.com/NasserMughrabi/flip-project",
      img: flipImg,
      tags: ["JavaScript", "HTML/CSS", "Web Design"],
    },
    {
      id: "fileauto",
      title: "AWS Cloud-Based Project",
      link: "https://awsfileauto.netlify.app/",
      codeLink: "https://github.com/NasserMughrabi/aws-file-auto",
      img: fileAutoImg,
      tags: ["React", "API Gateway", "Lambda", "DynamoDB", "EC2", "S3"],
    },
  ];

  const cloudProjects = [
    {
      id: "fileauto",
      title: "AWS Cloud-Based Project",
      link: "https://awsfileauto.netlify.app/",
      codeLink: "https://github.com/NasserMughrabi/aws-file-auto",
      img: fileAutoImg,
      tags: ["React", "API Gateway", "Lambda", "DynamoDB", "EC2", "S3"],
    },
    // Add more cloud projects here
  ];

  const renderProjects = (projects) =>
    projects.map((project, index) => (
      <ProjectContainer key={index}>
        <a
          title={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Item
            id={project.id}
            style={{ backgroundImage: `url(${project.img})` }}
          ></Item>
        </a>
        <ButtonContainer>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Button>Website</Button>
          </a>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
            <Button>Source Code</Button>
          </a>
        </ButtonContainer>
        <TagsContainer>
          {project.tags.map((tag, i) => (
            <StyledTag key={i}>{tag}</StyledTag>
          ))}
        </TagsContainer>
      </ProjectContainer>
    ));

  return (
    <PageWrapper id="projects">
      {/* <div
        style={{
          position: "absolute",
          top: "4%",
          left: "35%",
          zIndex: "99",
        }}
      >
        <NavButton
          isActive={view === "normal"}
          onClick={() => setView("normal")}
        >
          Development Projects
        </NavButton>
        <NavButton isActive={view === "cloud"} onClick={() => setView("cloud")}>
          Cloud Projects
        </NavButton>
      </div> */}
      <Carousel breakPoints={breakPoints}>
        {renderProjects(normalProjects)}
      </Carousel>
    </PageWrapper>
  );
}

export default Projects;
