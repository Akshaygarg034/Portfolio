import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Me from '../assets/Images/profile-img.png'
import DecoderText from '../subComponents/DecoderText/DecoderText'
import { introAnimatedText } from "../data/IntroData"
import ScramblingText from "../subComponents/ScramblingText/ScramblingText"


const Box = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 65vw;
    height:55vh;
    display: flex;
    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 3px solid ${props => props.theme.text};
    z-index:1;

    @media (max-width: 1200em) {
        width: 65vw;
    }

    @media (max-width: 60em) {
        width: 70vw;
    }

    @media (max-width: 50em) {
        height: 70vh;
        width: 50vw;
        flex-direction: column;
        -webkit-box-pack: justify;
        justify-content: space-between;

        background: linear-gradient(
            to bottom,
            ${props => props.theme.body} 50%,
            ${props => props.theme.text} 50%) left,
            linear-gradient(
            to bottom,
            ${props => props.theme.body} 50%,
            ${props => props.theme.text} 50%) right;
        background-repeat: no-repeat;
        background-size: 2px 100%;
        border-left: none;
        border-right: none;
        border-top: 2px solid ${props => props.theme.body};
        border-bottom: 2px solid ${props => props.theme.text};
    }

    @media (max-width: 40em) {
        width: 60vw;
    }

    @media (max-width: 30em) {
        width: 70vw;
    }

    @media (max-width: 20em) {
        width: 60vw;
    }
`
const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;

    .pic{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,0%);
        width: 100%;
        height: auto;

        @media (max-width: 50em) {
            width: 70%;
        }

        @media (max-width: 40em) {
            width: 80%;
        }

        @media (max-width: 30em) {
            width: 90%;
        }

        @media (max-width: 20em) {
            width: 80%;
        }
    }

    @media (max-width: 50em) {
        width: 100%;
        height: 50%;
    }
`

const Text = styled.div`
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h3 {
        font-family: 'Quantico';
        overflow: hidden;
        white-space: nowrap;
        font-weight: 500;

        > span {
            color: #ffd29e;
        }
    }

    h6{
        overflow: hidden;
        white-space: nowrap;
        font-family: 'Quantico';
        font-size: calc((24 / 16) * 1rem);
        letter-spacing: 0.1em;
        color: #00e5ff;
        font-weight: 500;
        color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
        font-size: calc(0.5rem + 1.5vw);
    }

    @media (max-width: 40em) {
        font-size: calc(1rem + 1.5vw);
    }

    @media (max-width: 30em) {
        padding: 1.1rem;
        >h3{
            font-size: 1.1em;
        }
    }

    @media (max-width: 20em) {
        padding: 1rem;
        >h3{
            font-size: 0.9em;
        }
    }
`

const Intro = () => {
    const height = window.matchMedia("(max-width: 50em)").matches ? '70vh' : '55vh';

    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: height }}
            transition={{ type: 'tween', ease: 'linear', duration: 1, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h3>Hi,</h3>
                    <h3>
                        I'm <DecoderText text={`AKSHAY GARG`} eachCharClass="namechar" delay={2200} />
                    </h3>
                    <h6><ScramblingText data={introAnimatedText} delay={4000} startDelay={4000} /></h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro