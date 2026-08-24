import { createGlobalStyle } from "styled-components";
import * as COLORS from "./constants/styles/colors";

export const GlobalStyles = createGlobalStyle`
    * {    
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    
    html, body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${COLORS.COLOR_ON_BACKGROUND};
    }
`;
