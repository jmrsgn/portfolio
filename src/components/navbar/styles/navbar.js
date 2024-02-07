import styled from 'styled-components/macro';
import * as COLORS from '../../../constants/colors';
import { VIEWPORT } from '../../../constants/viewports';
import { COLOR_ON_BACKGROUND, COLOR_SURFACE1 } from '../../../constants/styles';
import { Link } from 'react-router-dom';


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
            color: ${COLOR_SURFACE1};
        }
    }
`;

export const Container = styled.div`
    height: 50vh;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 0px 10px 10px 0px;
    width: 4rem;
    background-color: #151C27;
    position: fixed;
    top: 50%;
    bottom: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

