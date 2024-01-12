import styled from 'styled-components/macro';
import * as STYLES from '../../../constants/styles';
import { VIEWPORT } from '../../../constants/viewports';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${STYLES.COLOR_BG1};
    padding: 5rem 10rem;

    @media (max-width: 600px) {
        padding: 4rem 2rem;
    }
`;

export const Box = styled.div`
    width: ${({ width }) => (width? width : '100%')};
`;

export const ActionContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: flex-start;
    align-items: center;

    @media ${VIEWPORT.desktopUp} {
        margin-top: 5rem;
    }
`;

export const NavigationContainer = styled.div`
    display: flex;
    align-items: center;

    svg {
        cursor: pointer;
    }
`;

export const SubBox = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const TextDiv = styled.div`
    width: 100%;
    margin-bottom: ${({ marginBottom }) => (marginBottom? marginBottom : '0')};

    @media ${VIEWPORT.desktopUp} {
        width: 80%;
    }
`;

export const TechContainer = styled.div`
    padding: 1rem;
    margin-top: 1rem;
    max-width: 30rem;
    gap: .5rem;

    display: column;
    columns: 3;

    * {
        break-inside: avoid;
        margin-bottom: 0.5rem;
    }

    @media ${VIEWPORT.tabletUp} {
        max-width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        /* justify-content: center */
    }
`;

export const Tech = styled.img`
    height: 40px;
    width: ${({ width }) => (width? width : 'auto')};
`;

export const Screenshot = styled.img`
    height: ${({ height }) => (height? height : '0')};
    width: ${({ width }) => (width? width : '0')};
    margin: 1rem;
`;

export const ScreenshotContainer = styled.div`
    margin-top: 4rem;
    margin-bottom: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
`;

export const ProjectImage = styled.img`
    height: auto;
    margin-top: 2rem;
    width: 300px; 

    @media ${VIEWPORT.tabletUp} {
        width: 500px;
        margin-top: 0rem;
    }

    @media ${VIEWPORT.desktopUp} {
        margin-top: 5rem;
    }
`;