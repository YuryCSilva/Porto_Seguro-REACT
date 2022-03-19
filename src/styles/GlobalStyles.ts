import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        box-sizing: border-box;
    }

    body{
        height: 100vh;
        
    }

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
    }

    button{
        border: none;
        box-sizing: border-box
    }

    .bold{
        font-weight: bold
    }
`;
