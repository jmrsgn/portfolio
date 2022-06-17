import styled from 'styled-components/macro';
import * as STYLES from '../../../constants/styles';
import { VIEWPORT } from '../../../constants/viewports';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${STYLES.COLOR_BG1};
    display: flex;
    flex-direction: column;

    @media ${VIEWPORT.tabletLandscapeUp} {
        flex-direction: row;
    }
`;

export const SubBox = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection)};
    justify-content: space-between;
    padding: 2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;

    @media ${VIEWPORT.tabletUp} {
        padding: 5rem;
        margin-top: 5rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        margin-top: 0;
        padding: 8rem;
        flex-direction: column;
    }
`;

export const Box = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;

    @media ${VIEWPORT.tabletLandscapeUp} {
        &:last-of-type {
            ${SubBox} {
                padding: 5rem 2rem 5rem 2rem;
            }
        }
    }

    
    @media ${VIEWPORT.desktopUp} {
        &:first-of-type {
            ${SubBox} {
                padding-left: 10rem;
            }
        }   
    }
`;

export const GreetingsContainer = styled.div``;

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media ${VIEWPORT.tabletUp} {
        margin-top: 2rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        flex-direction: row;
    }
`;

export const Image = styled.img`
    width: 200px;
    height: auto;
    margin: auto;
    margin-top: 2rem;
    z-index: 99;

    @media ${VIEWPORT.tabletUp} {
        width: 300px;
    }
`;

export const TechBubbleContainer= styled.div`
    min-width: 275px;
    display: flex;
    margin: auto;
    justify-content: space-between;

    @media ${VIEWPORT.tabletUp} {
        width: 400px;
    }
`;

export const TechBubble = styled.div`
    width: 75px !important;
    height: 75px;
    border-radius: 50%;
    position: relative;
    background-color: ${STYLES.COLOR_SURFACE3};
    transition: .2s ease-in;

    @media ${VIEWPORT.tabletUp} {
        width: 90px !important;
        height: 90px;
    }
`;

export const TechImage = styled.img`
    width: 30px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media ${VIEWPORT.tabletUp} {
        width: 40px;
    }
`;