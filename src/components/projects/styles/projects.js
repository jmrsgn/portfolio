import styled from 'styled-components/macro';
import * as COLORS from '../../../constants/colors';
import { VIEWPORT } from '../../../constants/viewports';
import { TechText, TextMedium } from '../../../globalComponents';
import { FONT } from '../../../fonts/fonts';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${COLORS.COLOR_BG2};
`;

export const Box = styled.div`
    width: 85%;
    height: 100vh;
    margin: 0 auto 0 auto;
    padding: 5rem;
    display: flex;
    flex-direction: column;
`;

export const SubBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media ${VIEWPORT.tabletLandscapeUp} {
        flex-direction: row;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    @media ${VIEWPORT.desktopUp} {
        margin: 0;
    }
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
    padding: 2rem;
    min-width: 450px;
    min-height: 200px;
    width: 450px;
    box-shadow: 0px 5px 5px #161C24;
    transition: .3s ease-in;
    cursor: default;
    break-inside: avoid;
    margin-bottom: 0.5rem;

    svg {
        cursor: pointer;
    }


    &:hover {
        opacity: 1 !important;
    }
`;

export const ProjectsContainer = styled.div`
    margin: 0 auto;
    margin-top: 5rem;
    gap: 0.5rem;

    display: column;
    columns: 3;

    &:hover {
        ${Project} {
            opacity: .5;
        }
    }
`;


export const ProjectTitle = styled(TextMedium)`
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    font-family: ${FONT.calibreRegular};
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

export const TagText = styled(TechText)`
    color: ${COLORS.COLOR_SURFACE2};
    font-size: .75rem;
`;
