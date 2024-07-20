import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import HomeButton from '../subComponents/HomeButton'
import SocialIcons from '../subComponents/SocialIcons'
import Intro from './Intro';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner'


const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow:hidden;

    position: relative;

    h2,h3,h4,h5,h6{
    font-family:'Karla', sans-serif ;
    font-weight:500;
    }
`

const Container = styled.div`
    padding: 2rem;
`

const Contact = styled(NavLink)`
    color: ${props => props.loaded ? props.theme.text : props.theme.body};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index:1;

    h2{
        @media (max-width: 40em) {
            font-size: 1.2em;
        }

        @media (max-width: 30em) {
            font-size: 1em;
        }
    }
`
const SKILLS = styled(NavLink)`
    color: ${props => props.loaded ? props.theme.text : props.theme.body};
    position: absolute;
    top: 50%;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index:1;

    @media (max-width: 50em) {
        color: ${props => props.loaded ? props.theme.body : props.theme.text};
        text-shadow: ${props => props.loaded ? 'rgb(0, 0, 0) 0px 0px 4px' : ''};
    }

    h2{
        @media (max-width: 40em) {
            font-size: 1.2em;
        }

        @media (max-width: 30em) {
            font-size: 1em;
        }
    }
`
const ABOUT = styled(NavLink)`
    color: ${props => props.loaded ? props.theme.body : props.theme.text};
    position: absolute;
    top: 50%;
    left: calc(1rem + 2vw);
    transform: translate(-50%, -50%) rotate(-90deg) ;
    text-decoration: none;
    z-index:1;

    @media (max-width: 50em) {
        text-shadow: ${props => props.loaded ? 'rgb(0, 0, 0) 0px 0px 4px' : ''};
    }

    h2{
        @media (max-width: 40em) {
            font-size: 1.2em;
        }

        @media (max-width: 30em) {
            font-size: 1em;
        }
    }
`

const BottomBar = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;

    display: flex;
    justify-content: space-evenly;

    h2{
        @media (max-width: 40em) {
            font-size: 1.2em;
        }

        @media (max-width: 30em) {
            font-size: 1em;
        }
    }
`

const EXPERIENCE = styled(NavLink)`
    color: ${props => props.loaded ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index:1;

    @media (max-width: 50em) {
        color: ${props => props.theme.text};
    }
`
const PROJECTS = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index:1;
`

const DarkDiv = styled.div`
    position: absolute;
    top: 0;
    background-color: #000;
    bottom: 0;
    right: 50%;
    width: ${props => props.loaded ? '50%' : '0%'};
    height: ${props => props.loaded ? '100%' : '0%'};
    z-index:1;
    transition: height 0.5s ease, width 1s ease 0.5s;

    @media (max-width: 50em) {
        width: ${props => props.loaded ? '100%' : '0px'};
        height: ${props => props.loaded ? '50%' : '0px'};
        right: 0px;
        transition: ${props => props.loaded ? 'width 0.5s ease 0s, height 1s ease 0.5s' : ''};
    }
`


const Main = ({ loaded, setLoaded }) => {
    const theme = window.matchMedia("(max-width: 50em)").matches ? 'light' : (loaded ? 'dark' : 'light');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 0);

        return () => clearTimeout(timer);
    }, [setLoaded]);

    return (
        <MainContainer>
            <DarkDiv loaded={loaded} />
            <Container>
                <HomeButton />
                <LoadingSpinner loaded={loaded} />
                <LogoComponent theme={loaded ? 'dark' : 'light'} />
                <SocialIcons theme={theme} />

                <Contact target="_blank" href="mailto:gargakshay034@gmail.com" loaded={+loaded}>
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        Say hi..
                    </motion.h2>
                </Contact>
                
                <SKILLS to="/skills" loaded={+loaded}>
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Skills
                    </motion.h2>
                </SKILLS>

                <ABOUT to="/about" loaded={+loaded}>
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        About
                    </motion.h2>
                </ABOUT>

                <BottomBar>
                    <EXPERIENCE to="/experience" loaded={+loaded}>
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Experience
                        </motion.h2>
                    </EXPERIENCE>
                    <PROJECTS to="/projects">
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Projects
                        </motion.h2>
                    </PROJECTS>

                </BottomBar>

            </Container>
            {loaded ? <Intro /> : null}
        </MainContainer>
    )
}

export default Main