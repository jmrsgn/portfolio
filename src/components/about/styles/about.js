import styled from 'styled-components/macro';
import * as COLORS from '../../../constants/colors';
import { VIEWPORT } from '../../../constants/viewports';
import { FONT } from '../../../fonts/fonts';
import { TechText } from '../../../globalComponents';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${COLORS.COLOR_BG2};
`;

export const Box = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto 0 auto;
    display: flex;
    padding: 2.25rem 1.25rem;
    flex-direction: column;

    @media ${VIEWPORT.desktopUp} {
        width: 85%;
        padding: 5rem;
        flex-direction: column;
    }
`;

export const SubBox = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection};
    margin-top: ${({ marginTop }) => (marginTop)};
    justify-content: ${({ justifyContent }) => justifyContent};
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;

    /* @media ${VIEWPORT.desktopUp} {
        justify-content: start;
        align-items: start;
    } */
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => (width? width: '100%')};
`;

export const Link = styled.a`
    font-family: ${FONT.calibreRegular};
    font-size: 1rem;
    color: ${COLORS.COLOR_SURFACE1};
    font-style: italic;
    line-height: ${({ lineHeight }) => (lineHeight? lineHeight : '22px')};
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    margin-left: ${({ marginLeft }) => (marginLeft)};

    @media ${VIEWPORT.desktopUp} {
        line-height: ${({ lineHeight }) => (lineHeight? lineHeight : '26px')};
        font-size: 1.2rem;
    }
`;

export const Avatar = styled.img`
    width: 150px;
    height: auto;
    border-radius: 50%;
    margin-top: 2rem;
    border: 1px solid ${COLORS.COLOR_LIGHT_GRAY};
    margin-bottom: 1rem;

    @media ${VIEWPORT.desktopUp} {
        width: 250px;
        margin-top: 0;
        margin-bottom: 2rem;
    }
`;

export const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AvatarInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media ${VIEWPORT.desktopUp} {
        flex-direction: column;
    }
`;

export const NavigationIcon = styled.a`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    margin: .20rem 0 .20rem 0;

    svg {
        width: 17px;
        height: 17px;
        color: ${COLORS.COLOR_ON_SURFACE};
        cursor: pointer;
    }

    @media ${VIEWPORT.desktopUp} {
        width: 40px;
        height: 40px;
        margin: .25rem 0 .25rem 0;

        svg {
            width: 25px;
            height: 25px;
        }

        &:hover {
            background-color: ${({ type }) => (type === '1' ? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_SURFACE2}`)};
            border-color: ${({ type }) => (type === '1' ? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_SURFACE2}`)};
        }
    }
`;

export const ContactText = styled(TechText)`
    font-size: .75rem;

    @media ${VIEWPORT.desktopUp} {
        font-size: .85rem;
    }
`;

export const ProfileContactTextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    @media ${VIEWPORT.desktopUp} {
        margin-left: 0;
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;

    @media ${VIEWPORT.desktopUp} {
        margin-top: 3rem;
    }
`;