import styled from 'styled-components/macro';
import * as COLORS from '../../../constants/colors';
import { VIEWPORT } from '../../../constants/viewports';


export const Nav = styled.a`
    height: 30px;
    margin: 1.25rem 1rem 1.25rem 1rem;
    cursor: pointer;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    svg {
        color: ${({ active }) => (active === 'true'? `${COLORS.COLOR_SURFACE1};` : `${COLORS.COLOR_LIGHT_GRAY};`)};
        transition: .3s ease-in;

        &:hover {
            color: ${COLORS.COLOR_SURFACE1};
        }
    }
`;

export const Container = styled.div`
    /* height: 2rem;
    padding: 2rem;
    width: 100vw;
    bottom: 0;
    overflow: hidden;
    position: fixed;

    background-color: #151C27;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; */

    background-color: #333;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;

    /* @media ${VIEWPORT.desktopUp} {
        padding: 0;
        height: 50vh;
        margin-top: auto;
        margin-bottom: auto;
        border-radius: 0px 10px 10px 0px;
        width: 4rem;
        top: 50%;
        bottom: 50%;
        flex-direction: column;
        justify-content: center;
    } */
`;

