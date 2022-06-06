import { createGlobalStyle } from "styled-components";
import * as STYLES from './styles.js';

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
        color: ${STYLES.COLOR_ON_BACKGROUND};
    }
`;