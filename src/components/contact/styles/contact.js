import styled from 'styled-components/macro';
import * as STYLES from '../../../constants/styles';
import { VIEWPORT } from '../../../constants/viewports';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${STYLES.COLOR_BG2};
    position: relative;
    padding: 4rem 2rem;

    @media ${VIEWPORT.tabletUp} {
        padding: 5rem 10rem;
    }
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const ImagesContainer = styled.div`
    margin-top: 2rem;
    margin-bottom: 3rem;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${VIEWPORT.desktopUp} {
        width: 60%;
    }
`;

export const Image = styled.img`
    height: 40px;
    width: auto;

    @media ${VIEWPORT.tabletUp} {
        height: 60px;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        height: 50px;
    }
    
    @media ${VIEWPORT.desktopUp} {
        height: 40px;
    }
`;

export const Button = styled.a`
    text-decoration: none;
    margin: auto;
    background-color: ${STYLES.COLOR_SURFACE2};
    font-family: 'Poppins', sans-serif;
    width: 200px;
    border: none;
    outline: none;
    text-align: center;
    color: ${STYLES.COLOR_ON_SURFACE};
    cursor: pointer;
    transition: .3s ease-in;
    width: 40%;
    font-size: 1rem;
    padding: .75rem;
    margin-top: 2rem;
    border-radius: 10px;

    &:hover {
        background-color: ${STYLES.COLOR_SURFACE1};
    }

    @media ${VIEWPORT.tabletUp} {
        width: 200px;
        font-size: 1.5rem;
        padding: 1rem;
        border-radius: 15px;
        margin-top: 4rem;
    } 

    @media ${VIEWPORT.tabletLandscapeUp} {
        width: 180px;
        font-size: 1.25rem;
        padding: .8rem;
    }

    @media ${VIEWPORT.desktopUp} {
        margin-top: 3rem;
        font-size: 1.15rem;
    }
`;

