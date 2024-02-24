import styled from 'styled-components/macro';
import * as COLORS from '../../../constants/colors';
import { VIEWPORT } from '../../../constants/viewports';
import { FONT } from '../../../fonts/fonts';


export const Container = styled.div`
    min-height: 100vh;
    background-color: ${COLORS.COLOR_BG1};
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${({ justifyContent }) => (justifyContent)};
    padding: 1rem;
    flex: 1;
`;

export const SubBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${VIEWPORT.desktopUp} {
        flex-direction: row;
    }
`;

export const Box = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto 0 auto;
    padding: 1.5rem;

    @media ${VIEWPORT.desktopUp} {
        width: 85%;
        padding: 5rem;
    }
`;

export const GreetingsContainer = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;

    @media ${VIEWPORT.desktopUp} {
        margin-top: 3rem;
    }
`;

export const TechSkillImage = styled.img`
    transition: .3s ease-in;
    height: 20px;

    @media ${VIEWPORT.desktopUp} {
        height: 30px;
    }
`;

export const TechSkill = styled.div`
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    padding: 1.25rem;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 410px;
    transition: .3s ease-in;
    cursor: default;
    margin: .25rem .5rem;

    @media ${VIEWPORT.desktopUp} {
        &:hover {
            color: ${COLORS.COLOR_SURFACE1} !important;
            opacity: 1 !important;
            
            ${TechSkillImage} {
                filter: grayscale(0) !important;
            }
        }
    }
`;

export const TechSkillDescription = styled.p`
    font-family: ${FONT.calibreRegular};
    font-size: 0.9rem;
    margin-top: 2rem;
    transition: .3s ease-in;
    color: ${COLORS.COLOR_LIGHT_GRAY};

    @media ${VIEWPORT.desktopUp} {
        font-size: 1rem;
        line-height: 22px;
    }
`;

export const TechSkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    width: 100%;

    ${TechSkill} {
        margin-top: 0.5rem;
    }

    @media ${VIEWPORT.desktopUp} {
        flex-direction: row;

        ${TechSkill} {
            margin-top: 0;
        }

        &:hover {
            ${TechSkill} {
                opacity: .5;
            }

            ${TechSkillImage} {
                filter: grayscale(100%);
            }
        }
    }
`;

export const TechContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Tech = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem;


    svg {
        color: ${COLORS.COLOR_SURFACE1};
    }
`;

export const TechImage = styled.img`
    height: 20px;
    width: auto;
    margin: 1rem;
`;


export const TechSkillSubBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TechSkillTitle = styled.p`
    font-family: ${FONT.calibreRegular};
    font-size: 1rem;

    @media ${VIEWPORT.desktopUp} {
        font-size: 1.25rem;
    }
`;

export const Greeting = styled.p`
    font-family: ${FONT.calibreBold};
    color: ${COLORS.COLOR_ON_BACKGROUND};
    font-size: 3rem;
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '2rem')};

    @media ${VIEWPORT.desktopUp} {
        font-size: 5rem;
    }
`;

export const WhatIDoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const TechText = styled.p`
    font-family: ${FONT.sfMonoRegular};
    color: ${COLORS.COLOR_SURFACE1};
    font-size: 0.65rem;

    @media ${VIEWPORT.desktopUp} {
        font-size: 0.75rem;
    }
`;