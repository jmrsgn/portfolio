import styled from 'styled-components/macro';
import * as COLORS from '../../../constants/colors';
import { VIEWPORT } from '../../../constants/viewports';
import { TechText } from '../../../globalComponents';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${COLORS.COLOR_BG2};
`;

export const Box = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto 0 auto;
    display: flex;
    padding: 2.25rem 1.25rem;
    flex-direction: column;

    @media ${VIEWPORT.desktopUp} {
        width: 85%;
        padding: 5rem;
    }
`;

export const ActionContainer = styled.div`
    display: flex;
    flex-direction: flex-start;
    align-items: center;
    justify-content: space-between;
`;

export const NavigationContainer = styled.div`
    margin-top: ${({ marginTop }) => (marginTop)};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg {
        cursor: pointer;
    }
`;

export const SubBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: ${({ marginTop }) => (marginTop)};

    @media ${VIEWPORT.desktopUp} {
        flex-direction: row;
    }
`;

export const ProjectInfoDiv = styled.div`
    width: 90%;
    text-align: left;

    @media ${VIEWPORT.desktopUp} {
        width: 60%;
    }
`;

export const WhatIDoDiv = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;

    @media ${VIEWPORT.desktopUp} {
        text-align: left;
        margin-left: 0;
        margin-right: 0;
        width: 90%;
    }
`;

export const TechContainer = styled.div`
    margin-top: 2rem;
    max-width: 30rem;
    gap: .25rem;

    display: column;
    columns: 3;

    * {
        break-inside: avoid;
        margin-bottom: 0.5rem;
    }

    @media ${VIEWPORT.desktopUp} {
        max-width: 100%;
        display: flex;
        margin-bottom: 0;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`;

export const Tech = styled.img`
    height: 30px;
    width: ${({ width }) => (width? width : 'auto')};
`;

export const Screenshot = styled.img`
    height: ${({ height }) => (height? height : '0')};
    width: ${({ width }) => (width? width : '0')};
    margin: 1rem;
`;

export const ScreenshotContainer = styled.div`
    margin-top: 1rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    border-radius: 10px;
    border-right: 1.5px solid ${COLORS.COLOR_LIGHT_GRAY};
    border-left: 1.5px solid ${COLORS.COLOR_LIGHT_GRAY};

    @media ${VIEWPORT.desktopUp} {
        border: none;
    }
`;

export const ProjectImage = styled.img`
    width: 350px;
    margin-top: 2rem;
    
    @media ${VIEWPORT.desktopUp} {
        width: 370px;
    }
`;

export const WhatIDoInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ScreenshotsInfoContainer = styled.div`
    text-align: center;
    margin-top: 3rem;

    @media ${VIEWPORT.desktopUp} {
        text-align: left;
    }
`

export const TechInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 3rem;
    width: 90%;
`;

export const NavigationIcon = styled.a`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    margin: .20rem 0 .20rem 0;

    svg {
        width: 17px;
        height: 17px;
        color: ${COLORS.COLOR_ON_SURFACE};
    }

    @media ${VIEWPORT.desktopUp} {
        width: 40px;
        height: 40px;
        margin: .25rem 0 .25rem 0;

        svg {
            width: 25px;
            height: 25px;
        }

        &:hover {
            background-color: ${({ type }) => (type === '1' ? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_SURFACE2}`)};
            border-color: ${({ type }) => (type === '1' ? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_SURFACE2}`)};
        }
    }
`;