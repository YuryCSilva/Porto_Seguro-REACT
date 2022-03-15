import { createGlobalStyle } from "styled-components";

const GlobalStyle =  createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
    }
`;

export default GlobalStyle;