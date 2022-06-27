import styled from 'styled-components/macro';
import * as STYLES from '../../../constants/styles';
import { VIEWPORT } from '../../../constants/viewports';
import { MainText, SecondaryText } from '../../../globalComponents';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${({ type }) => (type === '1' ? `${STYLES.COLOR_BG1}` : `${STYLES.COLOR_BG2}`)};
    padding: 4rem 2rem;

    @media ${VIEWPORT.tabletUp} {
        padding: 5rem
    }

    @media ${VIEWPORT.desktopUp} {
        padding: 5rem 10rem;
    }
`;

export const Box = styled.div`
    width: ${({ width }) => (width? width : '100%')};
`;

export const SubBox = styled.div`
    width: 100%;

    @media ${VIEWPORT.tabletLandscapeUp} {
        width: 70%;
    }

    @media ${VIEWPORT.desktopUp} {
        width: 50%;
    }
`;


export const Skill = styled.div`
    background-color: ${({ type }) => (type === '1' ? `${STYLES.COLOR_SURFACE2}` : `${STYLES.COLOR_SURFACE3}`)};
    border-radius: 10px;
    display: flex;
    padding: 1.5rem 1.5rem 4.5rem 1.5rem;
    width: 300px;
    min-width: 300px;
    min-height: 300px;
    height: 300px;
    flex-direction: column;
    align-items: left;
    margin: 1rem;
    box-shadow: 0px 5px 5px #161C24;

    &:last-of-type {
        img {
            width: 35px;
        }
    }
 
    @media ${VIEWPORT.tabletUp} {
        border-radius: 15px;
        width: 500px;
        min-width: 500px;
        min-height: 480px;
        padding: 2rem;

        &:last-of-type {
            img {
                width: 50px;
            }
        }
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        min-width: 400px;
        width: 400px;
        height: 450px;
    }

    @media ${VIEWPORT.desktopUp} {
        min-width: 350px;
        width: 350px;
        height: 430px;
        min-height: 430px;
    }
`;

export const SkillsContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media ${VIEWPORT.tabletUp} {
        margin-top: 3rem;
        width: 100%;
        flex-wrap: wrap;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        flex-direction: row;
        justify-content: center;
    }
`;

export const DescriptionContainer = styled.div`
    margin-top: 2rem;

    @media ${VIEWPORT.tabletUp} {
        margin-top: 3rem;
    }
`


export const SkillTitle = styled(MainText)`
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    font-size: 1.5rem;
    font-weight: bold;

    @media ${VIEWPORT.tabletUp} {
        font-size: 2.5rem;
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        font-size: 2.25rem;
    }

    @media ${VIEWPORT.desktopUp} {
        font-size: 2rem;
    }
`;

export const Image = styled.img`
    height: 30px;
    width: 30px;

    @media ${VIEWPORT.tabletUp} {
        height: 45px;
        width: 45px;
        margin-bottom: 1rem;
    }
`;

export const SkillDescription = styled(SecondaryText)`
    margin-top: .75rem;
    font-size: .75rem;
    line-height: 20px;
    color: ${({ type }) => (type === '1' ? `${STYLES.COLOR_ON_BACKGROUND}` : `${STYLES.COLOR_LIGHT_GRAY}`)};

    @media ${VIEWPORT.tabletUp} { 
        font-size: 1.25rem;
        line-height: 32px;
        margin-top: 1rem;
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

export const QuoteContainer = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 48px;
`;

export const MiniDivider = styled.div`
    height: 1px;
    width: 50px;
    background-color: ${STYLES.COLOR_SURFACE1};
`;

export const Quote = styled.p`
    margin-left: 5px;
    margin-right: 5px;
    width: 50%;
    font-family: Arial, Helvetica, sans-serif;
    color: ${STYLES.COLOR_SURFACE1};
    font-style: italic;
    font-size: 1rem;
`