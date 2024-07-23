import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import logo from '../assets/Images/logo.png'

const Logo = styled.div`
  display: inline-block;
  color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  font-family: 'Pacifico';

  position: fixed;
  left: 2rem;
  top: 1.3rem;
  z-index:3;

  >img{
    height: 4rem;
  }

  @media (max-width: 40em) {
    left: 1rem;
    top: 1.3rem;
    >img{
      height:2.8em;
    }
  }
`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      <img src={logo} alt="logo" />
    </Logo>
  )
}

export default LogoComponent