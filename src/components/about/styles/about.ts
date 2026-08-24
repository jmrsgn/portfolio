import styled from "styled-components/macro";
import * as COLORS from "../../../constants/styles/colors";
import { VIEWPORT } from "../../../constants/viewports";
import {
  _Box,
  _Container,
  _ItemSocialIcon,
  _TextDescription,
  _TextLink,
  _TextSubTitle,
  _TextTech,
  _TextTitle,
  _TextTitleOther,
  FlexProps,
  TextProps,
} from "../../../globalComponents";
import { FONTS } from "../../../fonts/fonts";

/**
 * * Items
 */

export const ItemNavigationIcon = styled.a`
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
    color: ${COLORS.COLOR_ON_SURFACE};
    cursor: pointer;
  }

  @media ${VIEWPORT.desktopUp} {
    width: 40px;
    height: 40px;
    margin: 0.25rem 0 0.25rem 0;

    svg {
      width: 25px;
      height: 25px;
    }

    &:hover {
      background-color: ${({ type }) =>
        type === "1" ? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_SURFACE2}`};
      border-color: ${({ type }) =>
        type === "1" ? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_SURFACE2}`};
    }
  }
`;

export const ItemSocialIconNavigation = styled.a`
  margin-left: 0.5rem;

  &:hover {
    transition: 0.1s;

    svg {
      color: ${COLORS.COLOR_SURFACE2};
    }
  }

  svg {
    color: white;
    height: 1.35rem;
    width: 1.35rem;
  }
`;

export const ItemButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 80%;
  padding: 1.25rem 2.5rem;
  border: 1px solid ${COLORS.COLOR_GRAY};
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(101%);
    transition: 0.1s;
  }
`;

export const ItemSocialIcon = styled(_ItemSocialIcon)`
  &:hover {
    background-color: ${COLORS.COLOR_SURFACE2};
    border-color: ${COLORS.COLOR_SURFACE2};

    svg {
      color: ${COLORS.COLOR_ON_SURFACE};
    }
  }
`;

/**
 * * Containers
 */

export const Container = styled(_Container)``;

export const ContainerAboutMeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media ${VIEWPORT.desktopUp} {
    width: 60%;
  }
`;

export const ContainerTechInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 calc(33.333% - 1.5rem);

  background-color: ${COLORS.BACKGROUND_CARD};
  box-shadow: 0px 5px 5px #141c29ff;
  border-radius: 10px;
  cursor: pointer;
  padding: 2.5rem 1.5rem;
  height: 100%;
  margin-top: 1.25rem;

  transition: transform 0.15s ease;

  @media ${VIEWPORT.desktopUp} {
    margin-top: 0;
    padding: 3rem 1.75rem;
    min-height: 450px;
  }

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
  padding: 0.15rem;

  svg {
    color: ${COLORS.PRIMARY};
    width: 12px;
    height: 12px;

    @media ${VIEWPORT.desktopUp} {
      width: 15px;
      height: 15px;
    }
  }
`;

export const ContainerAvatarInfo = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  height: 100%;
  flex-direction: column;

  @media ${VIEWPORT.desktopUp} {
    width: 30%;
  }
`;

export const ContainerProfileContactTexts = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  justify-content: center;

  @media ${VIEWPORT.desktopUp} {
    margin-left: 0;
  }
`;

export const ContainerSocial = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;

  @media ${VIEWPORT.desktopUp} {
    margin-top: 1.25rem;
  }
`;

export const ContainerContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerBusinessShopButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

export const ContainerDivider = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const ContainerNavigaton = styled.div`
  position: absolute;
  top: 50;
  left: 50;
`;

export const ContainerTech = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${VIEWPORT.desktopUp} {
    margin-top: 1rem;
    flex-direction: row;
  }
`;

/**
 * * Boxes
 */

export const Box = styled(_Box)``;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 5rem;

  @media ${VIEWPORT.desktopUp} {
    margin-top: 0;
    padding: 0.5rem 2.5rem;
  }
`;

export const BoxInfoTech = styled(BoxInfo)<FlexProps>`
  padding: 0;
  margin: 0;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: space-between;
  width: 100%;
`;

export const BoxProfile = styled.div`
  display: flex;
  flex-direction: column;

  @media ${VIEWPORT.desktopUp} {
    flex-direction: row;
  }
`;

export const BoxProfileInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 2rem;

  @media ${VIEWPORT.desktopUp} {
    margin-top: 3rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

/**
 * * Texts
 */

export const TextLink = styled(_TextLink)`
  margin-top: 12px;
`;

export const TextDescription = styled(_TextDescription)``;

export const TextTitle = styled(_TextTitle)``;

export const TextTechUsed = styled(_TextTech)`
  line-height: 14px;
  color: ${COLORS.PRIMARY};
  font-size: 0.75rem;
  margin-left: 0.75rem;

  @media ${VIEWPORT.desktopUp} {
    line-height: 18px;
    margin-left: 1rem;
    font-size: 0.85rem;
  }
`;

export const TextTitleOther = styled(_TextTitleOther)``;

export const TextContact = styled.a`
  font-family: ${FONTS.sfMonoLight};
  cursor: pointer;
  color: ${COLORS.COLOR_SURFACE2};
  text-decoration: none;
  font-size: 0.75rem;
  margin-top: 0.25rem;

  &:hover {
    text-decoration: underline;
  }

  @media ${VIEWPORT.desktopUp} {
    font-size: 0.85rem;
  }
`;

export const TextSubTitle = styled(_TextSubTitle)`
  font-size: 1.5rem;
`;

export const TextDescriptionFilter = styled(TextDescription)<TextProps>`
  color: ${({ type }) =>
    type === "1" ? `${COLORS.COLOR_SURFACE1}` : `${COLORS.COLOR_SURFACE2}`};
`;

export const TextDescriptionHighlight = styled(TextDescription)`
  font-weight: bold;
  display: inline-block;
  color: ${COLORS.COLOR_ON_BACKGROUND};
`;

export const TextBusinessShopTitle = styled(TextSubTitle)`
  font-weight: bold;
  font-size: 1.25rem;
`;

/**
 * * Images
 */

export const ImageAvatar = styled.img`
  width: 250px;
  height: auto;
  border-radius: 50%;
  border: 1px solid ${COLORS.COLOR_LIGHT_GRAY};
`;

export const ImageTech = styled.img`
  display: none;

  @media ${VIEWPORT.desktopUp} {
    display: block;
    height: auto;
    width: 25rem;
  }
`;
