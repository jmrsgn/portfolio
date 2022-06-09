import styled from 'styled-components/macro';
import * as STYLES from '../../../constants/styles';
import { VIEWPORT } from '../../../constants/viewports';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${({ type }) => (type === '1' ? `${STYLES.COLOR_BG1}` : `${STYLES.COLOR_BG2}`)};
    padding: 4rem 2rem;

    @media ${VIEWPORT.tabletUp} {
        padding: 5rem
    }
`;

export const Box = styled.div`
    width: ${({ width }) => (width? width : '100%')};
`;

export const SubBox = styled.div`
    width: 100%;
`;

export const SkillsContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media ${VIEWPORT.tabletUp} {
        margin-top: 5rem;
        width: 100%;
        flex-wrap: wrap;
    }
`;

export const Skill = styled.div`
    background-color: ${({ type }) => (type === '1' ? `${STYLES.COLOR_SURFACE2}` : `${STYLES.COLOR_SURFACE3}`)};
    border-radius: 10px;
    display: flex;
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;
    width: 300px;
    min-width: 300px;
    flex-direction: column;
    align-items: left;
    margin: 1rem 0 1rem 0;
    box-shadow: 0px 5px 5px #161C24;

    @media ${VIEWPORT.tabletUp} {
        border-radius: 15px;
        width: 500px;
        min-width: 500px;
        padding: 2rem 2rem 4rem 2rem;
    }
`;

export const SkillTitle = styled.p`
    font-family: 'Poppins', sans-serif;
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    font-size: 1.5rem;
    font-weight: bold;

    @media ${VIEWPORT.tabletUp} {
        font-size: 2.5rem;
    }
`;

export const Image = styled.img`
    height: 20px;
    width: 23px;

    @media ${VIEWPORT.tabletUp} {
        height: 35px;
        width: 38px;
        margin-bottom: 1rem;
    }
`;

export const SkillDescription = styled.p`
    margin-top: .75rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: .75rem;
    line-height: 20px;
    color: ${({ type }) => (type === '1' ? `${STYLES.COLOR_ON_BACKGROUND}` : `${STYLES.COLOR_LIGHT_GRAY}`)};

    @media ${VIEWPORT.tabletUp} { 
        font-size: 1.15rem;
        line-height: 28px;
        margin-top: 1rem;
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