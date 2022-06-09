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

export const CertificatesContainer = styled.div`
    flex-direction: column;
    margin: auto;
    margin-top: 4rem;
    align-items: center;
    display: flex;
`;

export const Certificate = styled.div`
    background-color: ${STYLES.COLOR_SURFACE3};
    box-shadow: 0px 5px 5px #161C24;
    padding: 2rem .5rem 1rem .5rem;
    border-radius: 15px;
    text-align: center;
    min-width: 300px; 
    min-height: 200px;
    width: 300px;
    margin: 1rem 0 1rem 0;

    @media ${VIEWPORT.tabletUp} {
        min-width: 500px;
    }
`;

export const CertificateTitle = styled.p`
    margin-top: .5rem;
    font-family: 'Poppins', sans-serif;
    font-size: .75rem;
    color: ${STYLES.COLOR_ON_SURFACE};

    @media ${VIEWPORT.tabletUp} {
        font-size: 1.25rem;
        margin-top: 1rem;
    }
`;

export const CertificateDate = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: .75rem;
    color: ${STYLES.COLOR_SURFACE1};

    @media ${VIEWPORT.tabletUp} {
        font-size: 1.25rem;
    }
`;

export const CertificateImage = styled.img`
    width: 280px;   
    height: auto;
    background-size: cover;

    @media ${VIEWPORT.tabletUp} {
        width: 460px;
    }
`;

export const BadgesContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: flex-start;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media ${VIEWPORT.tabletUp} {
        margin-top: 4rem;
    }
`;

export const Badge = styled.img`
    height: 75px;
    width: auto;
    margin: 2rem;
    filter: grayscale(0);
    transition: .3s ease-in;
    cursor: pointer;

    &:hover {
        filter: grayscale(0);
    }

    @media ${VIEWPORT.tabletUp} {
        height: 90px;
    }

    @media ${VIEWPORT.desktopUp} {
        filter: grayscale(1);
    }
`;

