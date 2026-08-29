import { createGlobalStyle } from "styled-components";

import SFMonoRegular from "./fonts/SFMonoRegular.woff";
import SFMonoLight from "./fonts/SFMonoLight.woff";

import CalibreRegular from "./fonts/CalibreRegular.woff";
import CalibreBold from "./fonts/CalibreBold.woff";
import CalibreBlack from "./fonts/CalibreBlack.woff";

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'SF Mono Regular';
        src: local('SF Mono Regular'), local('SF Mono Regular'),
        url(${SFMonoRegular}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'SF Mono Light';
        src: local('SF Mono Light'), local('SF Mono Light'),
        url(${SFMonoLight}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Calibre Regular';
        src: local('Calibre Regular'), local('Calibre Regular'),
        url(${CalibreRegular}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Calibre Bold';
        src: local('Calibre Bold'), local('Calibre Bold'),
        url(${CalibreBold}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Calibre Black';
        src: local('Calibre Black'), local('Calibre Black'),
        url(${CalibreBlack}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;
