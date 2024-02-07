import styled from 'styled-components/macro';
import * as STYLES from '../../../constants/styles';
import * as COLORS from '../../../constants/styles';
import { VIEWPORT } from '../../../constants/viewports';
import { TechText, Text, TextSmall } from '../../../globalComponents';
import { FONT } from '../../../fonts/fonts';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${STYLES.COLOR_BG1};
`;

export const Box = styled.div`
    width: 85%;
    height: 100vh;
    margin: 0 auto 0 auto;
    padding: 5rem;
    display: flex;
    flex-direction: column;
`;

export const InfoContainer = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
`;

export const DisplayContainer = styled.div`
    padding: 6px 12px;
    border-top: none;
    margin-left: 2rem;
    min-width: 500px;
`

export const SubBox = styled.div`
    margin-top: ${({ marginTop }) => (marginTop)};
    margin-left: ${({ marginLeft }) => (marginLeft)};
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection? flexDirection : 'row')};
    justify-content: center;
`;

export const Arrow = styled.div`

`

export const SkillsContainer = styled.div`
    
`;

export const Skill = styled.div`   
    
`;

export const SkillImage = styled.img`

`;

export const SkillTitle = styled(Text)`
    
`

export const Experience = styled.div`

`;


export const CertificatesContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
    margin-left: 5rem;
`;

export const CertificateContainer = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    margin-top: 2rem;
`;

export const Certificate = styled.img`
    max-width: 250px;
    margin-left: 1rem;
    border: 1px solid ${COLORS.COLOR_ON_BACKGROUND};
`;

export const CertificateTitle = styled(TextSmall)`
    font-family: ${FONT.calibreRegular};
`

export const CertificateInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
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
    flex-direction: column;
    overflow: hidden;
    background-color: ${COLORS.COLOR_BG1};
`;

export const ExperienceTabText = styled(TechText)`
    transition: 0.3s ease-in;
    color: ${COLORS.COLOR_LIGHT_GRAY};
`;

export const ExperienceTab = styled.button`
    display: flex;
    flex-direction: row;
    min-width: 175px;
    background-color: ${({ active }) => (active?  "#284A59" : `${COLORS.COLOR_BG1}`)};
    border: none;
    outline: none;
    cursor: pointer;
    padding: 1rem 1.5rem;
    transition: 0.3s ease-in;
    border-left: 3px solid ${({ active }) => (active? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_LIGHT_GRAY}`)};

    ${ExperienceTabText} {
        color: ${({ active }) => (active? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_LIGHT_GRAY}`)};
    }

    &:hover {
        background-color: #284A59;

        ${ExperienceTabText} {
            color: ${COLORS.COLOR_SURFACE1}
        }
    }
`;  



export const ExperiencesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const Date = styled(TechText)`
    color: ${COLORS.COLOR_LIGHT_GRAY};
`;

export const Position = styled(TextSmall)`
    font-size: 1.75rem;
    font-family: ${FONT.calibreBold};
    color: ${COLORS.COLOR_ON_SURFACE};
`;

export const Company = styled.span`
    color: ${COLORS.COLOR_SURFACE1};
`;

export const BadgesContainer = styled.div`
    margin-top: 2rem;
    margin-left: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
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
        height: 70px;
    }

    @media ${VIEWPORT.desktopUp} {
        filter: grayscale(1);
    }
`;