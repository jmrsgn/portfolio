import styled from 'styled-components/macro';
import * as COLORS from '../../../constants/colors';
import { VIEWPORT } from '../../../constants/viewports';
import { FONT } from '../../../fonts/fonts';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${COLORS.COLOR_BG2};
`;

export const Box = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto 0 auto;
    display: flex;
    padding: 2.25rem 1.25rem;
    flex-direction: column;

    @media ${VIEWPORT.desktopUp} {
        width: 85%;
        padding: 5rem;
    }
`;

export const ProjectTitleNavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const NavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Project = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
    
    box-shadow: 0px 5px 5px #161C24;
    transition: .3s ease-in;
    cursor: default;
    break-inside: avoid;
    margin-bottom: 0.5rem;

    padding: 1.5rem;
    max-width: 370px;
    min-height: 170px;

    svg {
        cursor: pointer;
    }

    @media ${VIEWPORT.desktopUp} {
        padding: 2rem;
        max-width: 450px;
        min-height: 200px;

        &:hover {
            opacity: 1 !important;
        }
    }
`;

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;

    @media ${VIEWPORT.desktopUp} {
        margin: 0 auto;
        margin-top: 5rem;
        margin-bottom: 0;
        gap: 0.5rem;

        display: column;
        flex-direction: row;
        columns: 3;

        &:hover {
            ${Project} {
                opacity: .5;
            }
        }
    }
`;


export const ProjectTitle = styled.p`
    font-size: 1.5rem;
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    font-family: ${FONT.calibreRegular};

    @media ${VIEWPORT.desktopUp} {
        font-size: 2.25rem;
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

export const Tag = styled.div`
    border: 1px solid ${COLORS.COLOR_SURFACE2};
    margin: 0.15rem;
    border-radius: .5rem;
    padding: .25rem .75rem;
`;

export const TagText = styled.p`
    font-family: ${FONT.sfMonoRegular};
    color: ${COLORS.COLOR_SURFACE2};
    font-size: .6rem;

    @media ${VIEWPORT.desktopUp} {
        font-size: .75rem;
    }
`;
