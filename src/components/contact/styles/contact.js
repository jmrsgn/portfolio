import styled from 'styled-components/macro';
import * as COLORS from '../../../constants/colors';
import { VIEWPORT } from '../../../constants/viewports';
import { FONTS } from '../../../fonts/fonts';
import { _Container, _TextDescription, _TextTitle } from '../../../globalComponents';

/**
 * * Items
 */

export const ItemButton = styled.a`
    background-color: ${COLORS.COLOR_BG1};
    font-family: ${FONTS.sfMonoRegular};
    border: 1px solid ${COLORS.COLOR_SURFACE1};
    color: ${COLORS.COLOR_SURFACE1};
    font-size: 0.75rem;
    padding: 0.75rem;
    width: 150px;
    box-shadow: 0px 0px 0 ${COLORS.COLOR_SURFACE1};

    margin-top: 3rem;
    text-decoration: none;
    outline: none;
    text-align: center;
    cursor: pointer;
    transition: .1s ease-in;

    @media ${VIEWPORT.desktopUp} {
        width: 200px;
        padding: 1rem;
        font-size: 1rem;

        &:hover {
            box-shadow: 5px 5px 0 ${COLORS.COLOR_SURFACE1};
        }
    }
`;

/**
 * * Containers 
 */

export const Container = styled(_Container)`
    background-color: ${COLORS.COLOR_BG1};
`;

export const ContainerInfo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);   

    @media ${VIEWPORT.desktopUp} {
        width: 30%;
    }
`;

/**
 * * Boxes
 */

export const Box = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto 0 auto;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;  
    text-align: center;

    @media ${VIEWPORT.desktopUp} {
        width: 85%;
        padding: 5rem;
    }
`;

export const BoxContact = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

/**
 * * Texts
 */

export const TextCopyright = styled.p`
    font-family: ${FONTS.sfMonoRegular};
    color: ${COLORS.COLOR_LIGHT_GRAY};
    font-size: 0.75rem;
    margin-bottom: 5rem;

    @media ${VIEWPORT.desktopUp} {
        font-size: 1rem;
        margin-bottom: 0;
    }
`;

export const TextTitle = styled(_TextTitle)``;

export const TextDescription = styled(_TextDescription)``;
