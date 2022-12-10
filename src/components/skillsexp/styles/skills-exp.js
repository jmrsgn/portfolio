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

export const Arrow = styled.div`
    margin-left: 1rem;
    border-top: 10px solid ${STYLES.COLOR_SURFACE2};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    height: 15px;
    width: 15px;
    
    @media ${VIEWPORT.tabletUp} {
        border-top: 10px solid transparent;
        border-left: 10px solid ${STYLES.COLOR_SURFACE2};;
        border-bottom: 10px solid transparent;
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
    border-radius: 10%;
    padding: 2rem .25rem .75rem .25rem;
    background-color: ${STYLES.COLOR_SURFACE3};
    align-items: center;
    text-align: center;
    transition: .2s ease-in;

    /* @media ${VIEWPORT.tabletUp} {
        width: 100px;
        height: 50px;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        margin: 2rem;
    } */
`;

export const SkillImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
`;

export const SkillTitle = styled(MainText)`
    font-weight: bold;
    font-size: 1rem;
    margin-top: 1rem;
    color: ${STYLES.COLOR_ON_SURFACE};
`

export const ExperiencesContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 2rem;

    @media ${VIEWPORT.tabletUp} {
        margin-top: 5rem;
    }

    @media ${VIEWPORT.desktopUp} {
        flex-direction: row;
    }
`;

export const Experience = styled.div`
    background-color: ${STYLES.COLOR_SURFACE3};
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    max-width: 30rem;
    box-shadow: 0px 5px 5px #161C24;

    @media ${VIEWPORT.tabletUp} {
        border-radius: 15px;
        width: 500px;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        padding: 2rem;
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
        font-size: 1.85rem;
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
        font-size: 1.05rem;
        letter-spacing: 2px;
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
        margin-top: 32px;
    }
`;