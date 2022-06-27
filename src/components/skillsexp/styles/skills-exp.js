import styled from 'styled-components/macro';
import * as STYLES from '../../../constants/styles';
import { VIEWPORT } from '../../../constants/viewports';
import { MainText, SecondaryText } from '../../../globalComponents';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${STYLES.COLOR_BG2};
    padding: 4rem 2rem;

    @media ${VIEWPORT.tabletUp} {
        padding: 5rem;
    }

    @media ${VIEWPORT.desktopUp} {
        padding: 5rem 10rem;
    }
`;

export const Box = styled.div`
    width: ${({ width }) => (width? width : '100%')};
`;

export const SkillsContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2rem;

    @media ${VIEWPORT.tabletUp} {
        margin-top: 3rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        justify-content: center;
    }

    @media ${VIEWPORT.desktopUp} {
        width: 50%;
        flex-direction: flex-start;
    }
`;

export const Skill = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;
    background-color: ${STYLES.COLOR_SURFACE3};
    transition: .2s ease-in;
    margin: 1rem;

    @media ${VIEWPORT.tabletUp} {
        width: 100px;
        height: 100px;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        margin: 2rem;
    }
`;

export const SkillImage = styled.img`
    width: 20px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media ${VIEWPORT.tabletUp} {
        width: 40px;
    }
`;
export const ExperiencesContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2rem;

    @media ${VIEWPORT.tabletUp} {
        margin-top: 5rem;
    }
`;

export const Experience = styled.div`
    background-color: ${STYLES.COLOR_SURFACE3};
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    min-width: 300px; 
    min-height: 200px;
    width: 300px;
    padding: 1.5rem 1.5rem 3rem 1.5rem;
    box-shadow: 0px 5px 5px #161C24;

    @media ${VIEWPORT.tabletUp} {
        border-radius: 15px;
        width: 500px;
        min-width: 500px;
        padding: 2rem 2rem 4rem 2rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        min-width: 400px;
        width: 400px;
    }
`;

export const Date = styled(SecondaryText)`
    font-size: .75rem;
    color: ${STYLES.COLOR_SURFACE2};
    letter-spacing: 2px;

    @media ${VIEWPORT.tabletUp} {
        font-size: 1.25rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        font-size: 1.1rem;
    }

    @media ${VIEWPORT.desktopUp} {
        font-size: 1rem;
    }
`;

export const Position = styled(MainText)`
    margin-top: 2rem;
    font-size: 1.5rem;
    color: ${STYLES.COLOR_ON_SURFACE};
    font-weight: bold;

    @media ${VIEWPORT.tabletUp} {
        font-size: 2.5rem;
        margin-top: 3rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        font-size: 2.25rem;
    }

    @media ${VIEWPORT.desktopUp} {
        font-size: 2rem;
    }
`;

export const Company = styled(SecondaryText)`
    font-size: 1rem;
    color: ${STYLES.COLOR_SURFACE2};

    @media ${VIEWPORT.tabletUp} {
        font-size: 1.75rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        font-size: 1.5rem;
    }

    @media ${VIEWPORT.desktopUp} {
        font-size: 1.25rem;
    }
`;

export const Learnings = styled(SecondaryText)`
    margin-top: 1.5rem;
    color: ${STYLES.COLOR_LIGHT_GRAY};
    font-size: .75rem;
    line-height: 20px;

    @media ${VIEWPORT.tabletUp} { 
        font-size: 1.25rem;
        line-height: 32px;
        margin-top: 3rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        font-size: 1.15rem;
        line-height: 28px;
    }

    @media ${VIEWPORT.desktopUp} {
        font-size: .95rem;
        line-height: 24px;
    }
`;