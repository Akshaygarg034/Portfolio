import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import HomeButton from '../subComponents/HomeButton'
import SocialIcons from '../subComponents/SocialIcons'
import Intro from './Intro';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner'
import { DarkTheme } from './Themes';


const MainContainer = styled.div`
    background-color: #000;
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
    color: ${props => props.theme.text};
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
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%, -50%);
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
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index:1;
`
const PROJECTS = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index:1;
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
        <ThemeProvider theme={DarkTheme}>
            <MainContainer>
                <Container>
                    <HomeButton />
                    <LoadingSpinner loaded={loaded} />
                    <LogoComponent theme={loaded ? 'dark' : 'light'} />
                    <SocialIcons theme={theme} />

                    <Contact to="/contact" loaded={+loaded}>
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
                            Contact
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
        </ThemeProvider>
    )
}

export default Main