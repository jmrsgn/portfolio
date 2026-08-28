import styled from "styled-components/macro";
import * as COLORS from "../../../constants/styles/colors";
import { VIEWPORT } from "../../../constants/viewports";
import {
  _Box,
  _Container,
  _TextDescription,
  _TextLink,
  _TextSubTitle,
  _TextTech,
  _TextTitle,
  TechText,
} from "../../../globalComponents";
import { FONTS } from "../../../fonts/fonts";

type ItemExperienceTabProps = {
  active?: boolean;
};

/**
 * * Common Styles
 */

export const PositionDivider = styled.div`
  position: relative;
  margin-left: 6px;
  width: 1.5px;
  height: 70px;
  background-color: ${COLORS.TEXT_PRIMARY};

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    width: 5px;
    height: 5px;
    background-color: ${COLORS.TEXT_PRIMARY};
    border-radius: 50%;
    transform: translateX(-50%);
  }

  &::before {
    top: -4px;
  }

  &::after {
    bottom: -4px;
  }
`;

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
    color: ${COLORS.TEXT_PRIMARY};
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
        type === "1" ? `${COLORS.TEXT_PRIMARY}` : `${COLORS.TEXT_PRIMARY}`};
      border-color: ${({ type }) =>
        type === "1" ? `${COLORS.TEXT_PRIMARY}` : `${COLORS.TEXT_PRIMARY}`};
    }
  }
`;

/**
 * * Containers
 */

export const Container = styled(_Container)``;

export const ContainerInfo = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media ${VIEWPORT.desktopUp} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContainerExperienceTabs = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;

  @media ${VIEWPORT.desktopUp} {
    flex-direction: column;
  }
`;

export const ContainerNavigation = styled.div`
  position: absolute;
  top: 50;
  left: 50;
`;

/**
 * * Texts
 */

export const TextTitle = styled(_TextTitle)``;

export const TextSubTitle = styled(_TextSubTitle)`
  font-weight: bold;
`;

export const TextDescription = styled(_TextDescription)``;

export const TextLink = styled(_TextLink)`
  color: ${COLORS.TEXT_PRIMARY};
  margin-top: 12px;
`;

/**
 * * Badges Styles
 */

/**
 * * Items
 */

export const ItemBadge = styled.img`
  height: 50px;
  width: auto;
  margin: 1rem;
  filter: grayscale(0);
  transition: 0.3s ease-in;
  cursor: pointer;

  @media ${VIEWPORT.desktopUp} {
    filter: grayscale(1);
    height: 70px;
  }
`;

/**
 * * Containers
 */

export const ContainerBadges = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5rem;

  @media ${VIEWPORT.desktopUp} {
    align-items: end;
    justify-content: center;
  }
`;

/**
 * * Experiences Styles
 */

/**
 * * Texts
 */

export const TextCompany = styled.span`
  color: ${COLORS.PRIMARY};
`;

export const TextDate = styled(TechText)`
  color: ${COLORS.TEXT_PRIMARY};
`;

export const TextPosition = styled.p`
  font-size: 1.3rem;
  font-family: ${FONTS.calibreBold};
  color: ${COLORS.TEXT_PRIMARY};

  @media ${VIEWPORT.desktopUp} {
    font-size: 1.75rem;
  }
`;

export const TextPreviousPosition = styled(TextPosition)`
  @media ${VIEWPORT.desktopUp} {
    font-size: 1.25rem;
  }
`;

export const TextExperienceTab = styled(TechText)`
  transition: 0.3s ease-in;
  color: ${COLORS.TEXT_PRIMARY};
`;

/**
 * * Items
 */

export const ItemExperienceTab = styled.button<ItemExperienceTabProps>`
  display: flex;
  flex-direction: row;
  min-width: 100px;
  background-color: ${({ active }) => (active ? "#141d38ff" : "#20232cff")};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 1rem 1.5rem;
  transition: 0.3s ease-in;

  ${TextExperienceTab} {
    color: ${({ active }) =>
      active ? `${COLORS.PRIMARY}` : `${COLORS.TEXT_PRIMARY}`};
  }

  @media ${VIEWPORT.desktopUp} {
    min-width: 175px;
    border-left: 3px solid
      ${({ active }) => (active ? `${COLORS.PRIMARY}` : "#20232cff")};
    border-top: none;
  }
`;

/**
 * * Containers
 */

export const ContainerExperienceDisplay = styled.div`
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
`;

export const ContainerExperiences = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${VIEWPORT.desktopUp} {
    flex-direction: row;
  }
`;

export const ContainerExperience = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

export const ContainerExperienceText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

/**
 * * Boxes
 */

export const Box = styled(_Box)``;

export const BoxExperiences = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

/**
 * * Certificates Styles
 */

/**
 * * Items
 */

export const ItemCertificate = styled.img`
  background-color: red;
  max-width: 250px;
  border: 1px solid ${COLORS.TEXT_PRIMARY};
  margin-bottom: 1rem;

  @media ${VIEWPORT.desktopUp} {
    margin-top: 0;
  }
`;

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
  border: 1px solid ${COLORS.TEXT_PRIMARY};
  border-radius: 10px;
  cursor: pointer;
  padding: 1.75rem 1rem;

  &:hover {
    transform: scale(103%);
    transition: 0.1s;
  }

  @media ${VIEWPORT.desktopUp} {
    padding: 1.5rem 1.25rem;

    &:hover {
      ${ItemBadge} {
        filter: grayscale(0);
      }
    }
  }
`;

export const ContainerCertificates = styled.div`
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

/**
 * * Boxes
 */

export const BoxCertificates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/**
 * * Texts
 */

export const TextCertificateTitle = styled.p`
  font-family: ${FONTS.calibreRegular};
  font-size: 1rem;

  @media ${VIEWPORT.desktopUp} {
    font-size: 1.25rem;
  }
`;

export const TextCertificateYear = styled(_TextTech)`
  color: ${COLORS.PRIMARY};
`;
