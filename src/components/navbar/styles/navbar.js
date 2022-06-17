import styled from 'styled-components/macro';
import * as STYLES from '../../../constants/styles';
import { VIEWPORT } from '../../../constants/viewports';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 1rem 2rem;
    position: fixed;
    z-index: 2;
    top: 0;

    svg {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    div {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 5;
        padding: 1rem 2rem;
        width: 80%;
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

    @media ${VIEWPORT.tabletUp} {
        padding: 2rem;

        svg {
            width: 30px;
            height: 30px;
        }

        div {
            width: 60%;
            padding: 2rem;

            ul {
                li { 
                    margin: 1.25rem;
                    
                    a {
                        font-size: 1.5rem;
                    }
                }
            }
            
        }
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        div {
            width: 40%;

            ul {
                li {
                    a {
                        font-size: 1.25rem;
                    }
                }
            }
        }
    }

    @media ${VIEWPORT.desktopUp} {
        div {
            width: 30%;

            ul {
                li {
                    a {
                        font-size: 1rem;
                    }
                }
            }
        }
    }
`;

export const Image = styled.img`
    cursor: pointer;
    width: 25px;
    height: 25px;

    @media ${VIEWPORT.tabletUp} {
        width: 30px;
        height: 30px;
    } 
`;

