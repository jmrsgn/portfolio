import styled from 'styled-components/macro';
import * as COLORS from '../../../constants/styles/colors';
import { VIEWPORT } from '../../../constants/viewports';
import { FONTS } from '../../../fonts/fonts';
import { _Box, _Container, _TextDescription, _TextTitle } from '../../../globalComponents';

/**
 * * Items
 */

export const ItemProject = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 10px;
    background-color: ${COLORS.BACKGROUND_CARD};
    flex: 1 1 calc(33.333% - 1.5rem);
    
    box-shadow: 0px 5px 5px #141c29ff;
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
        padding: 2.75rem 1.75rem;
        max-width: 450px;
        min-height: 200px;

        &:hover {
            opacity: 1 !important;
        }
    }
`;

export const ItemTag = styled.div`
    border: 1px solid ${COLORS.PRIMARY};
    margin: 0.15rem;
    border-radius: .5rem;
    padding: .25rem .75rem;
`;

/**
 * * Containers
 */

export const Container = styled(_Container)``;

export const ContainerProjectTitleNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerProjects = styled.div`
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
            ${ItemProject} {
                opacity: .5;
            }
        }
    }
`;

export const ContainerTags = styled.div`
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

/**
 * * Boxes
 */

export const Box = styled(_Box)``;

/**
 * * Texts
 */

export const TextDescription = styled(_TextDescription)`
`;

export const TextProjectTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-family: ${FONTS.calibreRegular};

  display: flex;
  align-items: center;

  @media ${VIEWPORT.desktopUp} {
    font-size: 2.25rem;
  }
`;

export const TextTag = styled.p`
    font-family: ${FONTS.sfMonoRegular};
    color: ${COLORS.PRIMARY};
    font-size: .6rem;

    @media ${VIEWPORT.desktopUp} {
        font-size: .75rem;
    }
`;

export const TextTitle = styled(_TextTitle)``;