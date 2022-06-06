import styled from 'styled-components/macro';
import * as STYLES from '../../../styles';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${({ type }) => (type === '1' ? `${STYLES.COLOR_BG1}` : `${STYLES.COLOR_BG2}`)};
    padding: 5rem 10rem;
`;

export const Box = styled.div`
    width: ${({ width }) => (width? width : '100%')};
`;

export const SubBox = styled.div`
    width: 50%;
`;

export const SkillsContainer = styled.div`
    margin-top: 48px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const Skill = styled.div`
    padding: 2rem 2rem 5rem 2rem;
    background-color: ${({ type }) => (type === '1' ? `${STYLES.COLOR_SURFACE2}` : `${STYLES.COLOR_SURFACE3}`)};
    border-radius: 15px;
    display: flex;
    width: 350px;
    min-width: 350px;
    flex-direction: column;
    align-items: left;
    box-shadow: 0px 5px 5px #161C24;
`;

export const SkillTitle = styled.p`
    font-family: 'Poppins', sans-serif;
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    font-size: 2rem;
    font-weight: bold;
`;

export const Image = styled.img`
    height: 30px;
    width: 33px;
`;

export const SkillDescription = styled.p`
    margin-top: 12px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: .75rem;
    line-height: 16px;
    color: ${({ type }) => (type === '1' ? `${STYLES.COLOR_ON_BACKGROUND}` : `${STYLES.COLOR_LIGHT_GRAY}`)};
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