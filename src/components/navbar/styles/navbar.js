import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import * as STYLES from '../../../styles';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: fixed;
    z-index: 2;
    top: 0;
    transition: top 0.5s;
    /* backdrop-filter: blur(4px); */
    /* background-color: ${STYLES.COLOR_BG2};
    border: 1px solid ${STYLES.COLOR_SURFACE3}; */
`;

export const Image = styled.img`
    cursor: pointer;
    width: 30px;
    height: auto;
`;

export const ImageLink = styled(Link)`
    padding: .2rem;
`;

export const Menu = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 70%;
        height: 70%;
        color: ${STYLES.COLOR_ON_BACKGROUND};
        cursor: pointer;
    }

    div {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 5;

        padding: 1rem;

        width: 30%;
        height: 100vh;

        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
        background-color: ${STYLES.COLOR_SURFACE3};

        svg {
            width: 30px;
            height: 30px;
            color: ${STYLES.COLOR_ON_BACKGROUND};
            cursor: pointer;
            z-index: 5;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;

            li {
                margin: 1rem;

                a {
                    font-family: 'Poppins', sans-serif;
                    color: ${STYLES.COLOR_ON_BACKGROUND};
                    text-decoration: none;
                    font-size: 1rem;
                    font-weight: 500;

                    transition: all 0.3s ease-in-out;

                    &:hover {
                        color: ${STYLES.COLOR_SURFACE1};
                    }
                }
            }
        }
    }
`;

