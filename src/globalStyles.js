import { createGlobalStyle } from "styled-components";




const GlobalStyle = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}


body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro',sans-serif;
}


::-webkit-scrollbar {
    width: 0.4rem;
    background-color: #1c2935;
}

::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: #647578;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #779ea5;
}

`

export default GlobalStyle;