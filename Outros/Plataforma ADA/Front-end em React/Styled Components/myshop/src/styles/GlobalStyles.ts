import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f7f7f7;
    }
    
    body, button, input {
        font-family: "Poppins", sans-serif;
    }

    button {
        cursor: pointer;
        transition: filter .3s ease;
        &:hover {
            filter: brightness(1.5);
        }
    }

`