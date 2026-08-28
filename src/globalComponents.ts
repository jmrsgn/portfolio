import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import * as COLORS from "./constants/styles/colors";
import { VIEWPORT } from "./constants/viewports";
import { FONTS } from "./fonts/fonts";

import { numToRem, pxToRem } from "./helpers/utils";
import { TEXTS } from "./constants/styles/texts";
import { SPACES } from "./constants/styles/spaces";
import { PADDINGS } from "./constants/styles/paddings";

export type MarginProps = {
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
};

export type FlexProps = {
  width?: string;
  textAlign?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: "row" | "column";
};

export type TextProps = MarginProps & {
  type?: string;
};

/**
 * * Texts (Styles)
 */

export const _TextDescription = styled.p`
  font-family: ${FONTS.calibreRegular};
  font-size: ${pxToRem(TEXTS.SIZES.BODY.mobile)};
  line-height: ${numToRem(TEXTS.LINEHEIGHT.BODY.mobile)};
  color: ${COLORS.TEXT_SECONDARY};

  /*
        Adjustable settings
    */

  @media ${VIEWPORT.tabletUp} {
    font-size: ${pxToRem(TEXTS.SIZES.BODY.mobile)};
  }

  @media ${VIEWPORT.desktopUp} {
    font-size: ${pxToRem(TEXTS.SIZES.BODY.desktop)};
    line-height: ${numToRem(TEXTS.LINEHEIGHT.BODY.desktop)};
  }
`;

export const _TextTech = styled.p`
  font-family: ${FONTS.sfMonoRegular};
  font-size: ${pxToRem(TEXTS.SIZES.BODY.mobile)};

  @media ${VIEWPORT.desktopUp} {
    font-size: ${pxToRem(TEXTS.SIZES.BODY.desktop)};
  }
`;

export const _TextGreeting = styled.p`
  font-family: ${FONTS.calibreBold};
  color: ${COLORS.TEXT_PRIMARY};
  font-size: ${pxToRem(TEXTS.SIZES.BODY.mobile)};

  @media ${VIEWPORT.desktopUp} {
    font-size: ${pxToRem(TEXTS.SIZES.BODY.desktop)};
  }
`;

export const _TextTitle = styled.p`
  font-family: ${FONTS.calibreBold};
  color: ${COLORS.TEXT_PRIMARY};
  font-size: ${pxToRem(TEXTS.SIZES.BODY.mobile)};

  @media ${VIEWPORT.desktopUp} {
    font-size: ${pxToRem(TEXTS.SIZES.BODY.desktop)};
  }
`;

export const _TextLink = styled(Link)<TextProps>`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0")};
  color: ${({ type }) =>
    type === "1" ? `${COLORS.TEXT_PRIMARY}` : `${COLORS.TEXT_PRIMARY}`};
  font-size: ${pxToRem(TEXTS.SIZES.BODY.mobile)};
  font-family: ${FONTS.sfMonoRegular};
  text-decoration: none;
  transition: 0.1s ease-in;

  display: inline-block;
  margin-block: 2px;
  position: relative;

  @media ${VIEWPORT.desktopUp} {
    font-size: ${pxToRem(TEXTS.SIZES.BODY.desktop)};
  }
`;

// -------------------------------------------

export const FilterText = styled(_TextDescription)`
  display: inline;
  font-weight: bold;
  color: ${COLORS.TEXT_PRIMARY};
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
  font-size: 0.75rem;

  @media ${VIEWPORT.desktopUp} {
    font-size: 1rem;
  }
`;

export const TextSmall = styled.p`
  font-size: 0.95rem;

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

export const DescriptionText = styled(TextSmall)<TextProps>`
  font-family: ${FONTS.calibreRegular};
  color: ${COLORS.TEXT_SECONDARY};
  line-height: 22px;

  /*
        Adjustable settings
    */

  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0")};
  margin-left: ${({ marginLeft }) => marginLeft};

  @media ${VIEWPORT.desktopUp} {
    line-height: 26px;
  }
`;

export const Title = styled(TextExtraLarge)`
  font-family: ${FONTS.calibreBold};
  color: ${COLORS.TEXT_PRIMARY};
`;

// export const _TextTitle = styled(TextExtraLarge)`
//     font-family: ${FONTS.calibreBold};
//     color: ${COLORS.COLOR_ON_BACKGROUND};
// `;

export const SubTitle = styled(TextLarge)`
  font-family: ${FONTS.calibreBold};
  color: ${COLORS.TEXT_PRIMARY};
`;

export const _TextSubTitle = styled(TextLarge)`
  font-family: ${FONTS.calibreBold};
  color: ${COLORS.TEXT_PRIMARY};
`;

export const OtherTitle = styled(TextMedium)`
  font-family: ${FONTS.calibreRegular};
  color: ${COLORS.TEXT_PRIMARY};
`;

export const _TextTitleOther = styled(TextMedium)`
  font-family: ${FONTS.calibreRegular};
  color: ${COLORS.TEXT_PRIMARY};
`;

// -------------------------------------------

export const Divider = styled.div<MarginProps>`
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "0")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "0")};
  width: 30px;
  height: 7px;
  border-radius: 50px;
  background-color: ${COLORS.PRIMARY};

  @media ${VIEWPORT.tabletUp} {
    width: 50px;
    height: 9px;
  }
`;

export const MiniDivider = styled(Divider)`
  height: 2px;
  border-radius: 10px;
  width: 50px;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "0")};
`;

// -------------------------------------------

export const _Container = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.TEXT_PRIMARY};
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

export const TechText = styled(TextExtraSmall)<TextProps>`
  font-family: ${FONTS.sfMonoRegular};

  /* 
        Adjustable settings
    */

  color: ${({ type }) =>
    type === "regular"
      ? `${COLORS.TEXT_PRIMARY}`
      : `${COLORS.TEXT_PRIMARY}`};
  margin: ${({ margin }) => margin};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-top: ${({ marginTop }) => marginTop};
`;

export const TextLink = styled(Link)<TextProps>`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0")};
  color: ${({ type }) =>
    type === "1" ? `${COLORS.TEXT_PRIMARY}` : `${COLORS.TEXT_PRIMARY}`};
  font-size: 0.75rem;
  font-family: ${FONTS.sfMonoRegular};
  text-decoration: none;
  transition: 0.1s ease-in;

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
  margin: 0.25rem 0 0.25rem 0;

  svg {
    width: 20px;
    height: 20px;
    color: ${COLORS.TEXT_PRIMARY};
  }

  &:hover {
    background-color: ${COLORS.PRIMARY};

    svg {
      color: ${COLORS.TEXT_PRIMARY};
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
    margin: 0 0.5rem 0 0.5rem;
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
  margin: 0.25rem 0 0.25rem 0;

  svg {
    width: 20px;
    height: 20px;
    color: ${COLORS.TEXT_PRIMARY};
  }

  &:hover {
    background-color: ${COLORS.PRIMARY};
    border-color: ${COLORS.PRIMARY};

    svg {
      color: ${COLORS.TEXT_PRIMARY};
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
    margin: 0 0.5rem 0 0.5rem;
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
  margin: 0.2rem 0 0.2rem 0;

  svg {
    width: 17px;
    height: 17px;
    color: ${COLORS.TEXT_PRIMARY};
  }

  @media ${VIEWPORT.desktopUp} {
    width: 40px;
    height: 40px;
    margin: 0.25rem 0 0.25rem 0;

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background-color: ${COLORS.PRIMARY};
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
`;

export const BoxFlex = styled.div<FlexProps & MarginProps>`
  width: ${({ width }) => width};
  display: flex;
  text-align: ${({ textAlign }) => textAlign};
  margin: ${({ margin }) => margin};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0")};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "column" ? "column" : "row"};
`;

export const Row = styled.div<FlexProps>`
  width: 100%;
  display: flex;
  margin-top: 4rem;
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

/**
 * * Common Tools
 */

export const _Button = styled(Link)`
  font-family: ${FONTS.sfMonoRegular};

  border: 1px solid ${COLORS.PRIMARY};
  color: ${COLORS.PRIMARY};
  box-shadow: 0px 0px 0 ${COLORS.PRIMARY};

  text-decoration: none;
  outline: none;
  text-align: center;
  cursor: pointer;
  transition: 0.15s ease-in-out;

  font-size: ${pxToRem(TEXTS.SIZES.BODY.mobile)};
  // prettier-ignore
  padding: ${pxToRem(PADDINGS.BUTTON.TOP_BOTTOM.mobile)} ${pxToRem(
    PADDINGS.BUTTON.SIDE.mobile,
  )};
  width: 150px;

  @media ${VIEWPORT.desktopUp} {
    width: 200px;
    // prettier-ignore
    padding: ${pxToRem(PADDINGS.BUTTON.TOP_BOTTOM.desktop)} ${pxToRem(
      PADDINGS.BUTTON.SIDE.desktop,
    )};
    font-size: ${pxToRem(TEXTS.SIZES.BODY.desktop)};

    &:hover {
      box-shadow: 5px 5px 0 ${COLORS.PRIMARY};
      border-color: ${COLORS.PRIMARY_HOVER};
    }
  }
`;
