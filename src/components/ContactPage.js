import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import HomeButton from '../subComponents/HomeButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'
import astronaut from '../assets/Images/spaceman.png'
import Form from '../subComponents/Form/Form';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
z-index: 4;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  background: #36363638;
  border-radius: 6px;
  box-shadow: 4px 3px 11px 2px #80808042;

  @media (max-width: 40em) {
    width: 60vw;
    height: 50vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 30em) {
   top: 53%;
  }
`

const ContactPage = () => {
  const Text = window.matchMedia("(max-width: 550px)").matches ? 'SAY HI' : 'CONTACT';
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>

        <LogoComponent theme='dark' />
        <SocialIcons theme='dark' />
        <HomeButton />
        <ParticleComponent type='contact' />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          <Form />
        </Main>

        <BigTitle text={Text} top="10%" left="5%" />
      </Box>

    </ThemeProvider>

  )
}

export default ContactPage