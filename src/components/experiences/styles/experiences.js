import styled from 'styled-components/macro';
import * as COLORS from '../../../constants/styles';
import { VIEWPORT } from '../../../constants/viewports';
import { TechText, Text, TextSmall } from '../../../globalComponents';
import { FONT } from '../../../fonts/fonts';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${COLORS.COLOR_BG1};
`;

export const Box = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto 0 auto;
    padding: 1.5rem;
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

export const CertificateContainer = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;

    @media ${VIEWPORT.desktopUp} {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: start;
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

export const CertificateInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${VIEWPORT.desktopUp} {
        align-items: start;
        justify-content: center;
    }
`;

export const CertificateYear = styled(TechText)``;


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
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    svg {
        color: ${COLORS.COLOR_SURFACE1};
    }
`;

export const ExperienceTabsContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background-color: ${COLORS.COLOR_BG1};

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
    background-color: ${({ active }) => (active?  "#284A59" : `${COLORS.COLOR_BG1}`)};
    border: none;
    outline: none;
    cursor: pointer;
    padding: 1rem 1.5rem;
    transition: 0.3s ease-in;
    border-top: 1px solid ${({ active }) => (active? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_LIGHT_GRAY}`)};

    ${ExperienceTabText} {
        color: ${({ active }) => (active? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_LIGHT_GRAY}`)};
    }

    &:hover {
        background-color: #284A59;

        ${ExperienceTabText} {
            color: ${COLORS.COLOR_SURFACE1}
        }
    }

    @media ${VIEWPORT.desktopUp} {
        min-width: 175px;
        border-left: 2px solid ${({ active }) => (active? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_LIGHT_GRAY}`)};
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

export const Position = styled(TextSmall)`
    font-size: 1.3rem;
    font-family: ${FONT.calibreBold};
    color: ${COLORS.COLOR_ON_SURFACE};

    @media ${VIEWPORT.desktopUp} {
        font-size: 1.75rem;
    }
`;

export const Company = styled.span`
    color: ${COLORS.COLOR_SURFACE1};
`;

export const BadgesContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media ${VIEWPORT.desktopUp} {
        margin-top: 2rem;
        margin-left: 5rem;
        align-items: end;
        justify-content: end;
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