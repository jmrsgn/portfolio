import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import * as COLORS from './constants/styles/colors';
import { VIEWPORT } from './constants/viewports';
import { FONTS } from './fonts/fonts';

import { numToRem, pxToRem } from './helpers/utils';
import { TEXTS } from './constants/styles/texts';
import { SPACES } from './constants/styles/spaces';
import { PADDINGS } from './constants/styles/paddings';

/**
 * * Texts (Styles)
 */

export const _TextDescription = styled.p`
    font-family: ${FONTS.calibreRegular};
    font-size: ${pxToRem(TEXTS.SIZES.BODY.mobile)};
    line-height: ${numToRem(TEXTS.LINEHEIGHT.BODY.mobile)};
    color: ${COLORS.COLOR_LIGHT_GRAY};
    
    /*
        Adjustable settings
    */

    /* margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    margin-left: ${({ marginLeft }) => (marginLeft)}; */

    @media ${VIEWPORT.tabletUp} {
        font-size: ${pxToRem(TEXTS.SIZES.BODY.tablet)};
    }

    @media ${VIEWPORT.desktopUp} {
        font-size: ${pxToRem(TEXTS.SIZES.BODY.desktop)};
        line-height: ${numToRem(TEXTS.LINEHEIGHT.BODY.desktop)};
    }
`;

export const _TextTech = styled.p`
    font-family: ${FONTS.sfMonoRegular};
    font-size: ${pxToRem(TEXTS.SIZES.OTHER.mobile)};

    @media ${VIEWPORT.desktopUp} {
        font-size: ${pxToRem(TEXTS.SIZES.OTHER.desktop)};
    }
`;

export const _TextGreeting = styled.p`
    font-family: ${FONTS.calibreBold};
    color: ${COLORS.COLOR_ON_BACKGROUND};
    font-size: ${pxToRem(TEXTS.SIZES.GREETING.mobile)};

    @media ${VIEWPORT.desktopUp} {
        font-size: ${pxToRem(TEXTS.SIZES.GREETING.desktop)};
    }
`;

export const _TextTitle = styled.p`
    font-family: ${FONTS.calibreBold};
    color: ${COLORS.COLOR_ON_BACKGROUND};
    font-size: ${pxToRem(TEXTS.SIZES.GREETING.mobile)};

    @media ${VIEWPORT.desktopUp} {
        font-size: ${pxToRem(TEXTS.SIZES.GREETING.desktop)};
    }
`;

// -------------------------------------------

/**
 * * Spaces
 */

export const SpaceHeightExtraSmall = styled.div`
    height: ${pxToRem(SPACES.HEIGHT.extraSmall)};
    width: 100%;
`;

export const SpaceHeightSmall = styled.div`
    height: ${pxToRem(SPACES.HEIGHT.small)};
    width: 100%;
`;

export const SpaceHeightMedium = styled.div`
    height: ${pxToRem(SPACES.HEIGHT.medium)};
    width: 100%;
`;

export const SpaceHeightLarge = styled.div`
    height: ${pxToRem(SPACES.HEIGHT.large)};
    width: 100%;
`;

export const SpaceHeightExtraLarge = styled.div`
    height: ${pxToRem(SPACES.HEIGHT.extraLarge)};
    width: 100%;
`;

// -------------------------------------------

export const TextExtraSmall = styled.p`
    font-size: .75rem;

    @media ${VIEWPORT.desktopUp} {
        font-size: 1rem;
    }
`;

export const TextSmall = styled.p`
    font-size: .95rem;

    @media ${VIEWPORT.desktopUp} {
        font-size: 1.125rem;
    }
`;

export const TextMedium = styled.p`
    font-size: 1.75rem;

    @media ${VIEWPORT.desktopUp} {
        font-size: 2.25rem;
    }
`;

export const TextLarge = styled.p`
    font-size: 2.5rem;

    @media ${VIEWPORT.desktopUp} {
        font-size: 3.25rem;
    }
`;

export const TextExtraLarge = styled.p`
    font-size: 3rem;

    @media ${VIEWPORT.desktopUp} {
        font-size: 5rem;
    }
`;

// -------------------------------------------

export const DescriptionText = styled(TextSmall)`
    font-family: ${FONTS.calibreRegular};
    color: ${COLORS.COLOR_LIGHT_GRAY};
    line-height: 22px;

    /*
        Adjustable settings
    */

    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    margin-left: ${({ marginLeft }) => (marginLeft)};

    @media ${VIEWPORT.desktopUp} {
        line-height: 26px;
    }
`;

export const FilterText = styled(DescriptionText)`
    display: inline;
    font-weight: bold;
    color: ${COLORS.COLOR_ON_BACKGROUND};
`;

export const Title = styled(TextExtraLarge)`
    font-family: ${FONTS.calibreBold};
    color: ${COLORS.COLOR_ON_BACKGROUND};
`;

// export const _TextTitle = styled(TextExtraLarge)`
//     font-family: ${FONTS.calibreBold};
//     color: ${COLORS.COLOR_ON_BACKGROUND};
// `;

export const SubTitle = styled(TextLarge)`
    font-family: ${FONTS.calibreBold};
    color: ${COLORS.COLOR_ON_SURFACE};
`;

export const _TextSubTitle = styled(TextLarge)`
    font-family: ${FONTS.calibreBold};
    color: ${COLORS.COLOR_ON_SURFACE};
`;

export const OtherTitle = styled(TextMedium)`
    font-family: ${FONTS.calibreRegular};
    color: ${COLORS.COLOR_ON_BACKGROUND};
`;

export const _TextTitleOther = styled(TextMedium)`
    font-family: ${FONTS.calibreRegular};
    color: ${COLORS.COLOR_ON_BACKGROUND};
`;

// -------------------------------------------

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

// -------------------------------------------

export const _Container = styled.div`
    min-height: 100vh;
`;

export const _Box = styled.div`
    height: 100%;
    width: 100%;
    min-height: 100vh;

    margin: 0 auto 0 auto;
    display: flex;
    padding: 3.25rem 2.25rem;
    flex-direction: column;

    @media ${VIEWPORT.desktopUp} {
        width: 85%;
        padding: 5rem;
    }


`;

// -------------------------------------------

// TODO: ADD DIMENSION CONSTANTS

export const SpaceWidthSmall = styled.div`
    height: 100%;
    width: 1rem;
`;

export const SpaceWidthLarge = styled.div`
    height: 100%;
    width: 3.75rem;
`;

// -------------------------------------------

export const TechText = styled(TextExtraSmall)`
    font-family: ${FONTS.sfMonoRegular};

    /* 
        Adjustable settings
    */
    
    color: ${({ type }) => (type === 'regular'? `${COLORS.COLOR_LIGHT_GRAY}` : `${COLORS.COLOR_SURFACE1}`)};
    margin: ${({ margin }) => (margin)};
    margin-bottom: ${({ marginBottom }) => (marginBottom)};
    margin-top: ${({ marginTop }) => (marginTop)};
`;

export const TextLink = styled(Link)`
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    color: ${({ type }) => (type === '1' ? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_SURFACE2}`)};
    font-size: 0.75rem;
    font-family: ${FONTS.sfMonoRegular};
    text-decoration: none;
    transition: .1s ease-in;

    display: inline-block;
    margin-block: 2px;
    position: relative;

    @media ${VIEWPORT.desktopUp} {
        font-size: 1rem;
    }
`;

export const _TextLink = styled(Link)`
    margin-top: ${({ marginTop }) => (marginTop? marginTop : '0')};
    color: ${({ type }) => (type === '1' ? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_SURFACE2}`)};
    font-size: 0.90rem;
    font-family: ${FONTS.sfMonoRegular};
    text-decoration: none;
    transition: .1s ease-in;

    display: inline-block;
    margin-block: 2px;
    position: relative;

    @media ${VIEWPORT.desktopUp} {
        font-size: 1rem;
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

export const _ItemSocialIcon = styled.a`
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
    }

    @media ${VIEWPORT.desktopUp} {
        width: 40px;
        height: 40px;
        margin: .25rem 0 .25rem 0;

        svg {
            width: 20px;
            height: 20px;
        }

        &:hover {
            background-color: ${({ type }) => (type === '1' ? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_SURFACE2}`)};
            border-color: ${({ type }) => (type === '1' ? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_SURFACE2}`)};
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

export const Row = styled.div`
    width: 100%;
    display: flex;
    margin-top: 4rem;
    flex-direction: ${({ flexDirection }) => (flexDirection)};
`;


/**
 * * Common Tools
 */

export const _Button = styled(Link)`
    background-color: ${COLORS.COLOR_BG1};
    font-family: ${FONTS.sfMonoRegular};
    border: 1px solid ${COLORS.COLOR_SURFACE1};
    color: ${COLORS.COLOR_SURFACE1};
    box-shadow: 0px 0px 0 ${COLORS.COLOR_SURFACE1};

    text-decoration: none;
    outline: none;
    text-align: center;
    cursor: pointer;
    transition: .1s ease-in;

    font-size: ${pxToRem(TEXTS.SIZES.BUTTON.mobile)};
    padding: ${pxToRem(PADDINGS.BUTTON.TOP_BOTTOM.mobile)} ${pxToRem(PADDINGS.BUTTON.SIDE.mobile)};
    width: 150px;

    @media ${VIEWPORT.desktopUp} {
        width: 200px;
        padding: ${pxToRem(PADDINGS.BUTTON.TOP_BOTTOM.desktop)} ${pxToRem(PADDINGS.BUTTON.SIDE.desktop)};
        font-size: ${pxToRem(TEXTS.SIZES.BUTTON.desktop)};

        &:hover {
            box-shadow: 5px 5px 0 ${COLORS.COLOR_SURFACE1};
        }
    }
`;