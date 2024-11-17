import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import HomeButton from "../subComponents/HomeButton";

import { projectsData } from '../data/ProjectsData'
import BigTitle from "../subComponents/BigTitle";
import ProjectCard from "../subComponents/ProjectCard/ProjectCard";
import loaderImg from "../assets/Images/wheel.png"

const Box = styled.div`
  background: #141414;
  height: 300vh;
  position: relative;
  display: flex;
  align-items: center;
  
  @media (max-width: 1000px) {
    height: 270vh;
  }

  @media (max-width: 650px) {
    height: 250vh;
  }

  @media (max-width: 480px) {
    height: 240vh;
  }
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: 12%;
  display: flex;
  gap:2em;
  z-index: 3;
  color: white;

  @media (max-width: 540px) {
    left: 17%;
  }
`;
const Rotate = styled(motion.span)`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 130px;
  height: 130px;
  z-index: 1;

  svg{
    @media (max-width: 40em) {
      width: 60px;
      height: 60px;
    }
  
    @media (max-width: 25em) {
      width: 50px;
      height: 50px;
    }
  }
`;

const StyledImg = styled.img`
   width: 100%;
   height: 100%;
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const isLargeScreen = window.matchMedia("(max-width: 1000px)").matches;
const isMediumScreen = window.matchMedia("(max-width: 800px)").matches;
const isSmallScreen = window.matchMedia("(max-width: 650px)").matches;
const extraSmallScreen = window.matchMedia("(max-width: 450px)").matches;

// Framer-motion Configuration
const wheelVariants = {
  initial: {
    right: extraSmallScreen ? '0.1rem' : (isSmallScreen ? '1rem' : (isMediumScreen ? '1.4rem' : (isLargeScreen ? '1rem' : '2.5rem'))),
    bottom: extraSmallScreen ? '3rem' : (isSmallScreen ? '1rem' : (isMediumScreen ? '1.8rem' : (isLargeScreen ? '3.5rem' : '2.5rem'))),
    width: extraSmallScreen ? '95px' : (isSmallScreen ? '110px' : (isMediumScreen ? '130px' : '150px')),
    height: extraSmallScreen ? '95px' : (isSmallScreen ? '110px' : (isMediumScreen ? '130px' : '150px')),
    filter: "invert(0)",
    rotate: 0
  },

  animate: {
    bottom: '1rem',
    right: '1rem',
    width: '130px',
    height: '130px',
    filter: "invert(1)",
    rotate: 360,
    transition: { duration: 1 }
  }
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);
  const Text = window.matchMedia("(max-width: 550px)").matches ? 'WORK' : 'PROJECTS';

  useEffect(() => {

    const rotate = () => {
      if (ref.current && yinyang.current) {
        ref.current.style.transform = `translateX(${-window.scrollY}px)`;
        yinyang.current.style.transform = "rotate(" + -window.scrollY / 7 + "deg)";
      }
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <HomeButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {projectsData && projectsData.map((data, indx) => (
            <ProjectCard key={indx} data={data} />
          ))}
        </Main>

        <Rotate ref={yinyang} variants={wheelVariants} initial="initial" animate="animate">
          <StyledImg src={loaderImg} alt="loader" />
        </Rotate>

        <BigTitle text={Text} top="5%" right="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;