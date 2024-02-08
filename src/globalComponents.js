import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import * as COLORS from './constants/colors';
import { VIEWPORT } from './constants/viewports';
import { FONT } from './fonts/fonts';

export const TextExtraSmall = styled.p`
    font-size: 1rem;
`;

export const TextSmall = styled.p`
    font-size: 1.25rem;
`;

export const TextMedium = styled.p`
    font-size: 2.5rem;
`;

export const TextLarge = styled.p`
    font-size: 3.25rem;
`;

export const TextExtraLarge = styled.p`
    font-size: 5rem;
`;

// ======

export const TechText = styled(TextExtraSmall)`
    font-family: ${FONT.sfMonoRegular};
    color: ${({ type }) => (type === 'regular'? `${COLORS.COLOR_LIGHT_GRAY}` : `${COLORS.COLOR_SURFACE1}`)};
    font-size: ${({ fontSize }) => (fontSize)};
    margin: ${({ margin }) => (margin)};

`;

export const DescriptionText = styled(TextSmall)`
    font-family: ${FONT.calibreRegular};
    font-size: ${({ fontSize }) => (fontSize)};
    color: ${COLORS.COLOR_LIGHT_GRAY};
    line-height: ${({ lineHeight }) => (lineHeight? lineHeight : '24px')};
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    margin-left: ${({ marginLeft }) => (marginLeft)};
`;

export const FilterText = styled(DescriptionText)`
    display: inline;
    color: ${COLORS.COLOR_ON_BACKGROUND};
`;

export const SubTitle = styled(TextMedium)`
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    font-family: ${({ isBold }) => (isBold === 'true' ? `${FONT.calibreBold}` : `${FONT.calibreRegular}`)};
    font-size: ${({ fontSize }) => (fontSize)};
`

// ======

export const Title = styled(TextLarge)`
    margin-left: ${({ marginLeft }) => (marginLeft? marginLeft : '0')};
    font-family: ${FONT.calibreBold};
`;

export const Button = styled(Link)`
    background-color: ${COLORS.COLOR_BG1};
    font-family: ${FONT.sfMonoRegular};
    border: 1px solid ${COLORS.COLOR_SURFACE1};
    color: ${COLORS.COLOR_SURFACE1};
    font-size: 1rem;
    padding: 1rem;
    width: 200px;
    box-shadow: 0px 0px 0 ${COLORS.COLOR_SURFACE1};

    margin-top: 3rem;
    text-decoration: none;
    outline: none;
    text-align: center;
    cursor: pointer;
    transition: .1s ease-in;

    &:hover {
        box-shadow: 5px 5px 0 ${COLORS.COLOR_SURFACE1};
    }
`;

export const SubBox = styled.div`
    margin: ${({ margin }) => (margin)};
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection)};
    width: ${({ width }) => (width)};
    justify-content: ${({ justifyContent }) => (justifyContent)};
`;

export const Divider = styled.div`
    margin-left: ${({ marginLeft }) => (marginLeft? marginLeft : '0')};
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    margin-bottom: ${({ marginBottom }) => (marginBottom? marginBottom : '0')};
    width: 30px;
    height: 7px;
    border-radius: 50px;
    background-color: ${({ type }) => (type === '1'? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_SURFACE2}`)};

    @media ${VIEWPORT.tabletUp} {
        width: 50px;
        height: 9px;
    }
`;

export const MiniDivider = styled(Divider)`
    height: 2px;
    border-radius: 10px;
    width: 50px;
    margin-left: ${({ marginLeft }) => (marginLeft? marginLeft : '0')};
`;

export const TextLink = styled(Link)`
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    color: ${({ type }) => (type === '1' ? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_SURFACE2}`)};
    font-size: 1rem;
    font-family: ${FONT.sfMonoRegular};
    text-decoration: none;
    transition: .1s ease-in;

    display: inline-block;
    margin-block: 2px;
    position: relative;

    &::after {
        content: '';
        width: 100%;
        height: 1px;
        background-color: ${COLORS.COLOR_SURFACE1};
        border-radius: 4px;
        position: absolute;
        left: 0;
        bottom: 1;
        margin-top: 1.5rem;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform .25s ease;
    }

    &:hover::after {
        transform: scaleX(1);
    }
`;

export const TextLinkContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const SocialIcon = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    margin: .25rem 0 .25rem 0;

    svg {
        width: 20px;
        height: 20px;
        color: ${COLORS.COLOR_ON_SURFACE};
    }

    &:hover {
        background-color: ${COLORS.COLOR_SURFACE1};
        border-color: ${COLORS.COLOR_SURFACE1};
  
        svg {
          color: ${COLORS.COLOR_ON_SURFACE};
        }
    }

    @media ${VIEWPORT.tabletUp} {
        width: 55px;
        height: 55px;
        margin: 1rem 0 1rem 0;

        svg {
            width: 35px;
            height: 35px;
        }
    }

    @media ${VIEWPORT.tabletLandscapeUp} {
        margin: 0 .5rem 0 .5rem;
        width: 50px;
        height: 50px;

        &:first-of-type {
            margin-left: 0;
        }

        svg {
            width: 30px;
            height: 30px;
        }
    }

    @media ${VIEWPORT.desktopUp} {
        width: 45px;
        height: 45px;

        svg {
            width: 25px;
            height: 25px;
        }
    }
`;

export const NavigationIcon = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    margin: .25rem 0 .25rem 0;

    svg {
        width: 20px;
        height: 20px;
        color: ${COLORS.COLOR_ON_SURFACE};
    }

    &:hover {
        background-color: ${({ type }) => (type === '1' ? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_SURFACE2}`)};
        border-color: ${({ type }) => (type === '1' ? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_SURFACE2}`)};
  
        svg {
          color: ${COLORS.COLOR_ON_SURFACE};
        }
    }
`;

export const ProjectMobileAppImage = styled.img`
    width: 250px;
    height: auto;

    @media ${VIEWPORT.tabletUp} {
        width: 320px;
        margin: 1rem 0 1rem 0;
    }
`;

export const ProjectWebAppImage = styled.img`
    width: auto;
    height: 200px;

    @media ${VIEWPORT.tabletUp} {
        height: 320px;
        margin: 1rem 2rem 1rem 2rem;
    }
`

export const BoxFlex = styled.div`
    width: ${({ width }) => (width)};
    display: flex;
    text-align: ${({ textAlign }) => (textAlign)};
    margin: ${({ margin }) => (margin)};
    margin-left: ${({ marginLeft }) => (marginLeft)};
    margin-right: ${({ marginRight }) => (marginRight)};
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    justify-content: ${({ justifyContent }) => (justifyContent)};
    align-items: ${({ alignItems }) => (alignItems)};
    flex-direction: ${({ flexDirection }) => (flexDirection === "column"? "column" : "row")};
`;

export const SpaceWidthSmall = styled.div`
    height: 100%;
    width: 1rem;
`;

export const SpaceHeightMedium = styled.div`
    height: 3rem;
    width: 100%;
`;