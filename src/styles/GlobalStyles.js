import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Fira Code", sans-serif;
        color: #fff;
        
        
    }

    body{
        width: 100%;
        background-color:#0c0c0c;
        
    }

    html{
        scroll-behavior: smooth;
        
    } 
    video{
        max-width: 500px;
        border-radius: 50px;
        margin-top: 20px;
    }

    a{
        cursor: pointer;
        text-decoration: none;
    }
`;
