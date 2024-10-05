import styled from 'styled-components/macro';
import * as COLORS from '../../../constants/colors';
import { VIEWPORT } from '../../../constants/viewports';
import { _Box, _Container, TechText, TextLink } from '../../../globalComponents';
import { FONT } from '../../../fonts/fonts';

export const Container = styled(_Container)`
    background-color: ${COLORS.COLOR_BG2};
`;

export const Box = styled(_Box)`
    margin: 0 auto 0 auto;
    padding: 2.25rem 1.25rem;
    display: flex;
    flex-direction: column;

    @media ${VIEWPORT.desktopUp} {
        width: 85%;
        padding: 5rem;
    }
`;

export const InfoContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: start;

    @media ${VIEWPORT.desktopUp} {
        flex-direction: row;
    }
`;

export const DisplayContainer = styled.div`
    padding: 6px 12px;
    border-top: none;
    min-width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;

    @media ${VIEWPORT.desktopUp} {
        margin-top: 0;
        margin-left: 2rem;
        min-width: 500px;
    }
`

export const SubTitleSubBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    @media ${VIEWPORT.desktopUp} {
        align-items: end;
        justify-content: end;
    }
`;

export const ExperiencesSubBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CertificatesSubBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;    
`;

export const CertificatesContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;

    @media ${VIEWPORT.desktopUp} {
        margin-top: 0;
        margin-left: 7rem;
    }
`;

export const Certificate = styled.img`
    max-width: 250px;
    border: 1px solid ${COLORS.COLOR_ON_BACKGROUND};
    margin-bottom: 1rem;

    @media ${VIEWPORT.desktopUp} {
        margin-top: 0;
    }
`;

export const CertificateTitle = styled.p`
    font-family: ${FONT.calibreRegular};
    font-size: 1rem;

    @media ${VIEWPORT.desktopUp} {
        font-size: 1.25rem;
    }
`

/**
 * * Certificate Styles
 */


/**
 * * Containers
 */

export const ContainerCertificateInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ContainerCertificate = styled.div`
    max-width: 500px;
    display: flex;
    align-items: center;
    margin-top: 1.25rem;
    border: 1px solid ${COLORS.COLOR_GRAY};
    padding: 2rem 1.25rem;;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        transform: scale(103%);
        transition: 0.1s;
    }
`;

export const CertificateYear = styled(TechText)`
    color: ${COLORS.COLOR_SURFACE2};
`;


export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
`;

export const ExperienceTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`;

export const ExperienceTextRowContainer = styled.div`
   // TODO: remove
`;

export const ExperienceTabsContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background-color: ${COLORS.COLOR_BG2};

    @media ${VIEWPORT.desktopUp} {
        flex-direction: column;
    }
`;

export const ExperienceTabText = styled(TechText)`
    transition: 0.3s ease-in;
    color: ${COLORS.COLOR_LIGHT_GRAY};
`;

export const ExperienceTab = styled.button`
    display: flex;
    flex-direction: row;
    min-width: 100px;
    background-color: ${({ active }) => (active?  "#303057" : `${COLORS.COLOR_BG2}`)};
    border: none;
    outline: none;
    cursor: pointer;
    padding: 1rem 1.5rem;
    transition: 0.3s ease-in;
    border-top: 1px solid ${({ active }) => (active? `${COLORS.COLOR_SURFACE2}` : "#303057")};

    ${ExperienceTabText} {
        color: ${({ active }) => (active? `${COLORS.COLOR_SURFACE2}` : `${COLORS.COLOR_LIGHT_GRAY}`)};
    }

    &:hover {
        background-color: #303057;

        ${ExperienceTabText} {
            color: ${COLORS.COLOR_SURFACE2}
        }
    }

    @media ${VIEWPORT.desktopUp} {
        min-width: 175px;
        border-left: 3px solid ${({ active }) => (active? `${COLORS.COLOR_SURFACE2}` : "#303057")};
        border-top: none;
    }
`;  

export const ExperiencesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    @media ${VIEWPORT.desktopUp} {
        flex-direction: row;
    }
`;

export const Date = styled(TechText)`
    color: ${COLORS.COLOR_LIGHT_GRAY};
`;

export const Position = styled.p`
    font-size: 1.3rem;
    font-family: ${FONT.calibreBold};
    color: ${COLORS.COLOR_ON_SURFACE};

    @media ${VIEWPORT.desktopUp} {
        font-size: 1.75rem;
    }
`;

export const Company = styled.span`
    color: ${COLORS.COLOR_SURFACE2};
`;

export const BadgesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media ${VIEWPORT.desktopUp} {
        align-items: end;
        justify-content: center;
    }
`;

export const Badge = styled.img`
    height: 50px;
    width: auto;
    margin: 1rem;
    filter: grayscale(0);
    transition: .3s ease-in;
    cursor: pointer;

    &:hover {
        filter: grayscale(0);
    }

    @media ${VIEWPORT.desktopUp} {
        filter: grayscale(1);
        height: 70px;
    }
`;

export const LinkExperiencesReadMore = styled(TextLink)`
    color: ${COLORS.COLOR_SURFACE2};
    margin-top: 12px;
`;

export const LinkCertificatesSeeMore = styled(TextLink)`
    color: ${COLORS.COLOR_SURFACE2};
    margin-top: 12px;
`;