import styled from 'styled-components/macro';
import * as STYLES from '../../../constants/styles';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${STYLES.COLOR_BG1};
    padding: 5rem 10rem;

    @media (max-width: 600px) {
        padding: 4rem 2rem;
    }
`;

export const Box = styled.div`
    width: ${({ width }) => (width? width : '100%')};
`;

export const ActionContainer = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: flex-start;
    align-items: center;
`;

export const SubBox = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
`;

export const TextDiv = styled.div`
    width: 80%;
    margin-bottom: ${({ marginBottom }) => (marginBottom? marginBottom : '0')};
`;

export const TechContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: flex-start;
    align-items: center;
`;

export const Tech = styled.img`
    height: 40px;
    width: ${({ width }) => (width? width : 'auto')};
`;

export const Screenshot = styled.img`
    height: ${({ height }) => (height? height : '0')};
    width: ${({ width }) => (width? width : '0')};
    margin: 1rem;
`;

export const ScreenshotContainer = styled.div`
    margin-top: 4rem;
    margin-bottom: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;