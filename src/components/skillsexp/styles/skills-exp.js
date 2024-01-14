import styled from 'styled-components/macro';
import * as STYLES from '../../../constants/styles';
import { VIEWPORT } from '../../../constants/viewports';
import { Text } from '../../../globalComponents';

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

export const Arrow = styled.div`
    border-top: 10px solid ${STYLES.COLOR_SURFACE2};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    height: 15px;
    width: 15px;
    display: block;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    
    @media ${VIEWPORT.tabletUp} {
        border-top: 15px solid ${STYLES.COLOR_SURFACE2};
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        height: 25px;
        width: 25px;
    }

    @media ${VIEWPORT.desktopUp} {
        border-top: 10px solid transparent;
        border-left: 10px solid ${STYLES.COLOR_SURFACE2};
        border-bottom: 10px solid transparent;
        height: 20px;
        width: 20px;
        margin-left: 1rem;
    }
`

export const SkillsContainer = styled.div`
    margin: 0 auto;
    max-width: 30rem;
    gap: .5rem;

    display: column;
    columns: 3;

    * {
        break-inside: avoid;
        margin-bottom: 0.5rem;
    }
`;

export const Skill = styled.div`   
    border-radius: 10px;
    padding: 1rem .15rem .15rem .15rem;
    background-color: ${STYLES.COLOR_SURFACE3};
    align-items: center;
    text-align: center;
    transition: .2s ease-in;

    @media ${VIEWPORT.tabletUp} {
        border-radius: 20px;
        padding: 1.5rem .25rem .25rem .25rem;
    }
`;

export const SkillImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 35%;

    @media ${VIEWPORT.tabletUp} {
        width: 40%;
    }
`;

export const SkillTitle = styled(Text)`
    font-weight: bold;
    font-size: .90rem;
    margin-top: 1rem;
    color: ${STYLES.COLOR_ON_SURFACE};

    @media ${VIEWPORT.tabletUp} {
        font-size: 1.25rem;
        margin-top: 1.5rem;
    }
`

export const Experience = styled.div`
    background-color: ${STYLES.COLOR_SURFACE3};
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 1.5rem;
    width: 300px;
    max-width: 300px;
    width: 100%;
    box-shadow: 0px 5px 5px #161C24;

    @media ${VIEWPORT.tabletUp} {
        border-radius: 20px;
        width: 500px;
        min-width: 500px;
        padding: 2rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        padding: 2rem;
        min-width: 400px;
        width: 400px;
    }

    @media ${VIEWPORT.desktopUp} {
        min-width: 500px;
        width: 500px;
    }
`;

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 1rem;

    @media ${VIEWPORT.desktopUp} {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

export const ExperiencesContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 2rem;
    
    &:first-of-type {
        ${ExperienceContainer} {
            margin-top: 0rem;
        }
    };

    @media ${VIEWPORT.tabletUp} {
        margin-top: 5rem;
    }

    @media ${VIEWPORT.desktopUp} {
        flex-direction: row;
    }
`;

export const Date = styled(Text)`
    font-size: .75rem;
    color: ${STYLES.COLOR_SURFACE2};
    letter-spacing: 2px;

    @media ${VIEWPORT.tabletUp} {
        font-size: 1.25rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        font-size: 1.20rem;
    }

    @media ${VIEWPORT.desktopUp} {
        font-size: 1rem;
    }
`;

export const Position = styled(Text)`
    margin-top: 2rem;
    font-size: 1.5rem;
    line-height: 36px;
    font-weight: bold;

    @media ${VIEWPORT.tabletUp} {
        font-size: 2.5rem;
        line-height: 56px;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        font-size: 2.25rem;
    }

    @media ${VIEWPORT.desktopUp} {
        font-size: 1.85rem;
        line-height: 42px;
    }
`;

export const Company = styled(Text)`
    font-size: .90rem;
    letter-spacing: 2px;
    color: ${STYLES.COLOR_SURFACE2};
    margin-top: .25rem;

    @media ${VIEWPORT.tabletUp} {
        font-size: 1.5rem;
        letter-spacing: 4px;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        font-size: 1.25rem;
    }

    @media ${VIEWPORT.desktopUp} {
        font-size: 1rem;
        letter-spacing: 3px;
    }
`;