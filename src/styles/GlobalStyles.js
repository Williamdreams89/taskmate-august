import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *, *::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    ul{
        list-style: none
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    ::-webkit-scrollbar{
        display: none
    }

    html{
        scroll-behavior: smooth;
        user-select: none;
    }

    body{
        font-family: 'Poppins', sans-serif;   
    }

`;

export default GlobalStyle;
