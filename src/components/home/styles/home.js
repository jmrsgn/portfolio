import styled from 'styled-components/macro';
import * as COLORS from '../../../constants/colors';
import { VIEWPORT } from '../../../constants/viewports';
import { TextExtraLarge, TextExtraSmall, TextSmall } from '../../../globalComponents';
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
    margin-top: ${({ marginTop }) => (marginTop)};
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection? flexDirection : 'row')};
    justify-content: center;
`;

export const Box = styled.div`
    display: flex;
    width: 85%;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto 0 auto;
    padding: 5rem;
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
    margin-top: 3rem;
`;

export const TechSkillImage = styled.img`
    transition: .3s ease-in;
    height: 30px;
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

    &:hover {
        color: ${COLORS.COLOR_SURFACE1} !important;
        opacity: 1 !important;
        
        ${TechSkillImage} {
            filter: grayscale(0) !important;
        }
    }
`;

export const TechSkillDescription = styled(TextExtraSmall)`
    font-family: ${FONT.calibreRegular};
    margin-top: 2rem;
    transition: .3s ease-in;
    color: ${COLORS.COLOR_LIGHT_GRAY};
`;

export const TechSkillsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

    &:hover {
        ${TechSkill} {
            opacity: .5;
        }

        ${TechSkillImage} {
            filter: grayscale(100%);
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

export const TechSkillTitle = styled(TextSmall)`
    font-family: ${FONT.calibreRegular};
`;

// ========

export const Greeting = styled(TextExtraLarge)`
    font-family: ${FONT.calibreBold};
    color: ${COLORS.COLOR_ON_BACKGROUND};

    margin-top: 2rem;
`;