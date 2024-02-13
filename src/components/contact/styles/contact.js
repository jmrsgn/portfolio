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

export const InfoContainer = styled.div`
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

export const SubBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Button = styled.a`
    background-color: ${COLORS.COLOR_BG1};
    font-family: ${FONT.sfMonoRegular};
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

    &:hover {
        box-shadow: 5px 5px 0 ${COLORS.COLOR_SURFACE1};
    }

    @media ${VIEWPORT.desktopUp} {
        width: 200px;
        padding: 1rem;
        font-size: 1rem;
    }
`;
