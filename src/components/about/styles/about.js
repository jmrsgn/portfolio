import styled from 'styled-components/macro';
import * as COLORS from '../../../constants/colors';
import { VIEWPORT } from '../../../constants/viewports';
import { _Box, _Container, _TextDescription, _TextLink, _TextTitle, _TextTitleOther, TechText } from '../../../globalComponents';

/**
 * * Containers
 */

export const Container = styled(_Container)`
    background-color: ${COLORS.COLOR_BG2};
`;

export const ContainerAboutMeText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
`;

export const ContainerTechInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 3rem 1.75rem;
    border: 1px solid ${COLORS.COLOR_GRAY};
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        transform: scale(101%);
        transition: 0.1s;
    }
`;

export const ContainerTechUsed = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
`;

export const ContainerTechUsedText = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: .15rem;

    svg {
        color: ${COLORS.COLOR_SURFACE2};
    }
`;

/**
 * * Boxes
 */

export const Box = styled(_Box)`
    margin: 0 auto 0 auto;
    display: flex;
    padding: 2.25rem 1.25rem;
    flex-direction: column;

    @media ${VIEWPORT.desktopUp} {
        padding: 5rem;
    }
`;

export const BoxInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1.25rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const BoxInfoTech = styled(BoxInfo)`
    flex-direction: ${({ flexDirection }) => (flexDirection)};
`;

/**
 * ! NOT ORGANIZED
 */

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

/**
 * * Texts
 */

export const TextLink = styled(_TextLink)`
    margin-top: 1.25rem;
`;

export const TextDescription = styled(_TextDescription)`
    margin-top: 12px;
`;

export const TextTitle = styled(_TextTitle)``;

export const TextTechUsed = styled(TechText)`
    line-height: 18px;
    color: ${COLORS.COLOR_SURFACE2};
    font-size: .85rem;
    margin-left: 1.25rem;
`;

export const TextTitleOther = styled(_TextTitleOther)``;

/**
 * * Images
 */

export const ImageAvatar = styled.img`
    width: 250px;
    height: auto;
    border-radius: 50%;
    border: 1px solid ${COLORS.COLOR_LIGHT_GRAY};
    justify-content: center;
    align-items: center;    
`;

export const ImageTech = styled.img`
    height: auto;
    width: 25rem;
`;