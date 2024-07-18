import styled from 'styled-components/macro';
import * as COLORS from '../../../constants/colors';
import { VIEWPORT } from '../../../constants/viewports';
import { FONT } from '../../../fonts/fonts';
import { _Box, _Container, TechText } from '../../../globalComponents';

export const Container = styled(_Container)`
    background-color: ${COLORS.COLOR_BG2};
`;

export const Box = styled(_Box)`
    margin: 0 auto 0 auto;
    display: flex;
    padding: 2.25rem 1.25rem;
    flex-direction: column;

    @media ${VIEWPORT.desktopUp} {
        padding: 5rem;
    }
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1.25rem;
    width: 100%;
    justify-content: space-between;
`;

export const AboutMeTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
`;

export const Avatar = styled.img`
    width: 150px;
    height: auto;
    border-radius: 50%;
    margin-top: 2rem;
    border: 1px solid ${COLORS.COLOR_LIGHT_GRAY};
    margin-bottom: 1rem;

    @media ${VIEWPORT.desktopUp} {
        width: 200px;
        margin-top: 0;
        margin-bottom: 2rem;
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

export const TechInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    width: 50%;
`;

export const TechUsedContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TechImage = styled.img`
    height: auto;
    width: 25rem;
`;