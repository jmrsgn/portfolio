import styled from 'styled-components/macro';
import * as STYLES from '../../../constants/styles';
import { VIEWPORT } from '../../../constants/viewports';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${STYLES.COLOR_BG1};
    padding: 4rem 2rem;

    @media ${VIEWPORT.tabletUp} {
        padding: 5rem;
    }
`;

export const Box = styled.div`
    width: ${({ width }) => (width? width : '100%')};
`;

export const SubBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin: 4rem 0 2rem;
`;

export const ProjectsContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 2rem;

    @media ${VIEWPORT.tabletUp} {
        margin-top: 3rem;
    }
`;

export const ProjectCell = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    background-color: ${STYLES.COLOR_SURFACE3};
    padding: 1.5rem;
    position: relative;
    min-width: 300px; 
    min-height: 200px;
    width: 300px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0px 5px 5px #161C24;

    @media ${VIEWPORT.tabletUp} {
        border-radius: 15px;
        width: 500px;
        min-width: 500px;
        padding: 2rem 2rem 4rem 2rem;
    }
`;

export const ProjectTitle = styled.p`
    font-family: 'Poppins', sans-serif;
    color: ${STYLES.COLOR_ON_SURFACE};
    font-size: 1.5rem;

    @media ${VIEWPORT.tabletUp} {
        font-size: 2.5rem;
    }
`;

export const ProjectDescription = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    margin-top: .75rem;
    line-height: 20px;
    color: ${STYLES.COLOR_LIGHT_GRAY};
    font-size: .75rem;

    @media ${VIEWPORT.tabletUp} { 
        font-size: 1.15rem;
        line-height: 28px;
        margin-top: 1rem;
    }
`;

export const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 2rem;

    @media ${VIEWPORT.tabletUp} {
        margin-top: 3rem;
    }
`;

export const TagCell = styled.div`
    /* border-radius: 10px; */
    background-color: ${STYLES.COLOR_LIGHT_RED};
    /* padding: 0.25rem 0.5rem; */
    margin: 0.25rem;

    border-radius: 5px;
    padding: 0.15rem 0.3rem;

    @media ${VIEWPORT.tabletUp} {
        border-radius: 7px;
        padding: 0.3rem 0.75rem;
    }

    /* @media (max-width: 600px) {
        border-radius: 7.5px;
        padding: 0.15rem 0.3rem;
    } */
`;

export const TagText = styled.p`
    color: ${STYLES.COLOR_RED};
    font-family: 'Poppins', sans-serif;
    font-size: .65rem;

    @media ${VIEWPORT.tabletUp} {
        font-size: 1rem;
    }
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

    @media ${VIEWPORT.tabletUp} {
        width: 100px;
        height: 100px;
    }
`;

export const DevelopmentText = styled.p`
    font-size: .65rem;
    color: ${STYLES.COLOR_ON_SURFACE};
    font-family: 'Poppins', sans-serif;
    position: absolute;
    margin: auto;

    @media ${VIEWPORT.tabletUp} {
        font-size: .8rem;
    }
`;
