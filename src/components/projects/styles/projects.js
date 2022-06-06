import styled from 'styled-components/macro';
import * as STYLES from '../../../styles';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${STYLES.COLOR_BG1};
    padding: 5rem 10rem;
`;

export const Box = styled.div`
    width: ${({ width }) => (width? width : '100%')};
`;

export const SubBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    &:not(:first-child) {
        margin-top: 48px;
    }

    &:nth-child(even) {
        flex-direction: row-reverse;
    }
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin: 4rem 0 2rem;
`;

export const FilterCell = styled.div`
    border-radius: 15px;
    background-color: ${({ type }) => (type === '1'? `${STYLES.COLOR_SURFACE1}` : `${STYLES.COLOR_SURFACE3}`)};
    padding: 1rem 1.5rem;
    cursor: pointer;
    transition: .3s ease-in;
    margin: 0.5rem;

    &:hover {
        background-color: ${STYLES.COLOR_SURFACE1};
    }
`;

export const FilterText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: ${STYLES.COLOR_ON_SURFACE};
`;

export const ProjectsContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ProjectCell = styled.div`
    border-radius: 15px;
    background-color: ${STYLES.COLOR_SURFACE3};
    padding: 2rem;
    width: 70%;
    min-height: 200px;
    position: relative;
    box-shadow: 0px 5px 5px #161C24;
`;

export const ProjectTitle = styled.p`
    font-family: 'Poppins', sans-serif;
    color: ${STYLES.COLOR_ON_SURFACE};
    font-size: 2.25rem;
`;

export const ProjectDescription = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 12px;
    margin-bottom: ${({ marginBottom }) => (marginBottom? marginBottom : '0')};
    color: ${STYLES.COLOR_LIGHT_GRAY};
    font-size: 1rem;
`;

export const ProjectImage = styled.img`
    height: 300px;
    width: auto;
    margin: 50px;
`;

export const TagsContainer = styled.div`
    margin-top: 36px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
`;

export const TagCell = styled.div`
    border-radius: 10px;
    background-color: ${STYLES.COLOR_LIGHT_RED};
    padding: 0.25rem 0.5rem;

    &:not(:first-child) {
        margin-left: 8px;
    }
`;

export const TagText = styled.p`
    color: ${STYLES.COLOR_RED};
    font-family: 'Poppins', sans-serif;
    font-size: .75rem;
`;

export const DevelopmentTag = styled.div`
    border-radius: 50%;
    padding: 1rem;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${STYLES.COLOR_SURFACE1};
    position: absolute;
    top: -5%;
    right: -5%;
`;

export const DevelopmentText = styled.p`
    font-size: .65rem;
    color: ${STYLES.COLOR_ON_SURFACE};
    font-family: 'Poppins', sans-serif;
    position: absolute;
    margin: auto;
`;
