import styled from 'styled-components/macro';
import * as STYLES from '../../../styles';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${STYLES.COLOR_BG2};
    padding: 5rem 10rem;
`;

export const Box = styled.div`
    width: ${({ width }) => (width? width : '100%')};
`;

export const SkillsContainer = styled.div`
    margin-top: 48px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
`;

export const SkillCell = styled.div`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    position: relative;
    background-color: ${STYLES.COLOR_SURFACE3};
    transition: .2s ease-in;
    cursor: pointer;

    &:not(:first-child) {
        margin-left: 24px;
    }

    &:hover {
        background-color: ${STYLES.COLOR_BG1};
    }
`;

export const SkillImage = styled.img`
    width: 30px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const ExperiencesContainer = styled.div`
    display: flex;
    margin-top: 64px;
    flex-direction: flex-start;
`;

export const ExperienceCell = styled.div`
    background-color: ${STYLES.COLOR_SURFACE3};
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding: 2rem 2rem 5rem 2rem;
    width: 30%;
    box-shadow: 0px 5px 5px #161C24;
`;

export const Date = styled.p`
    font-size: .85rem;
    color: ${STYLES.COLOR_SURFACE2};
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
`;

export const Position = styled.p`
    margin-top: 3rem;
    font-size: 2rem;
    color: ${STYLES.COLOR_ON_SURFACE};
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
`;

export const Company = styled.p`
    font-size: 1.25rem;
    color: ${STYLES.COLOR_SURFACE2};
    font-family: 'Poppins', sans-serif;
`;

export const Learnings = styled.p`
    margin-top: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    color: ${STYLES.COLOR_LIGHT_GRAY};
    font-size: .85rem;
`;