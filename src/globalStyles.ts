import { createGlobalStyle } from "styled-components";
import * as COLORS from "./constants/styles/colors";

export const GlobalStyles = createGlobalStyle`
    * {    
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html { scroll-behavior: smooth; }
    
    html, body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${COLORS.TEXT_PRIMARY};
        background: ${COLORS.BACKGROUND};
    }

    ::selection {
        color: ${COLORS.BACKGROUND};
        background: ${COLORS.PRIMARY_LIGHT};
    }

    a:focus-visible, button:focus-visible {
        outline: 2px solid ${COLORS.PRIMARY_LIGHT};
        outline-offset: 3px;
    }

    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
        }
    }

`;
