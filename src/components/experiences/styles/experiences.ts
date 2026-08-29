import styled from "styled-components/macro";

import * as COLORS from "../../../constants/styles/colors";
import { VIEWPORT } from "../../../constants/viewports";
import { FONTS } from "../../../fonts/fonts";

/**
 * Base
 */

export const Container = styled.section`
  position: relative;

  width: 100%;
  min-height: 100vh;

  background: ${COLORS.BACKGROUND};

  color: ${COLORS.TEXT_PRIMARY};

  overflow: hidden;
`;

/**
 * Layout
 */

export const Box = styled.div`
  position: relative;
  z-index: 1;

  width: min(1400px, calc(100% - 48px));

  margin: 0 auto;

  padding: 7rem 0 6rem;

  @media ${VIEWPORT.tabletUp} {
    padding: 8rem 0 7rem;
  }

  @media ${VIEWPORT.desktopUp} {
    padding: 9rem 0 8rem;
  }
`;

/**
 * Header
 */

export const TextEyebrow = styled.span`
  display: block;

  margin-bottom: 1rem;

  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.PRIMARY_LIGHT};

  font-size: 0.75rem;

  letter-spacing: 0.08em;
`;

export const TextTitle = styled.h2`
  margin: 0;

  font-family: ${FONTS.calibreBlack};

  color: ${COLORS.TEXT_PRIMARY};

  font-size: clamp(3.5rem, 7vw, 6rem);

  font-weight: normal;

  line-height: 0.9;
  letter-spacing: 0.01em;
`;

export const Divider = styled.div`
  width: 52px;
  height: 5px;

  margin-top: 1.5rem;

  border-radius: 2px;

  background: ${COLORS.PRIMARY};
`;

export const TextIntro = styled.p`
  max-width: 650px;

  margin: 2rem 0 0;

  font-family: ${FONTS.calibreRegular};

  color: ${COLORS.TEXT_SECONDARY};

  font-size: clamp(1.25rem, 1.7vw, 1.55rem);

  line-height: 1.45;
`;

/**
 * Main content
 */

export const ContainerInfo = styled.div`
  display: grid;

  grid-template-columns: 1fr;

  gap: 4rem;

  margin-top: 4rem;

  @media ${VIEWPORT.desktopUp} {
    grid-template-columns: minmax(0, 1.55fr) minmax(320px, 0.8fr);

    gap: 5rem;

    margin-top: 5rem;
  }
`;

/**
 * Experience Timeline
 */

export const BoxExperiences = styled.div`
  min-width: 0;
`;

export const ContainerTimeline = styled.div`
  position: relative;

  display: flex;

  flex-direction: column;
`;

export const ExperienceItem = styled.article`
  position: relative;

  display: grid;

  grid-template-columns: 100px 28px minmax(0, 1fr);

  padding-bottom: 3rem;

  &:last-child {
    padding-bottom: 0;
  }

  @media ${VIEWPORT.tabletUp} {
    grid-template-columns: 130px 32px minmax(0, 1fr);

    padding-bottom: 4rem;
  }

  @media ${VIEWPORT.desktopUp} {
    grid-template-columns: 135px 32px minmax(0, 1fr);
  }
`;

export const TimelineDate = styled.div`
  padding-top: 0.3rem;

  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.PRIMARY_LIGHT};

  font-size: 0.65rem;

  line-height: 1.6;

  letter-spacing: 0.03em;

  @media ${VIEWPORT.tabletUp} {
    font-size: 0.7rem;
  }
`;

export const TimelineMarker = styled.div`
  position: relative;

  display: flex;

  justify-content: center;

  min-height: 100%;

  &::after {
    content: "";

    position: absolute;

    top: 18px;
    bottom: -4px;

    width: 1px;

    background: ${COLORS.BORDER};
  }

  ${ExperienceItem}:last-child &::after {
    display: none;
  }
`;

export const TimelineDot = styled.span`
  position: relative;

  z-index: 2;

  width: 11px;
  height: 11px;

  margin-top: 0.35rem;

  border: 2px solid ${COLORS.BACKGROUND};

  border-radius: 50%;

  background: ${COLORS.PRIMARY};

  box-shadow: 0 0 0 1px ${COLORS.PRIMARY_DARK};
`;

export const ExperienceContent = styled.div`
  min-width: 0;

  padding: 0 0 0 1.25rem;

  @media ${VIEWPORT.tabletUp} {
    padding-left: 1.5rem;
  }
`;

export const ExperienceHeader = styled.div`
  display: flex;

  align-items: flex-start;

  justify-content: space-between;

  gap: 1rem;
`;

export const TextPosition = styled.h3`
  margin: 0;

  font-family: ${FONTS.calibreBold};

  color: ${COLORS.TEXT_PRIMARY};

  font-size: 1.5rem;

  font-weight: normal;

  line-height: 1.1;

  @media ${VIEWPORT.tabletUp} {
    font-size: 1.8rem;
  }

  @media ${VIEWPORT.desktopUp} {
    font-size: 2rem;
  }
`;

export const TextCompany = styled.span`
  color: ${COLORS.PRIMARY_LIGHT};
`;

export const CurrentBadge = styled.span`
  display: inline-flex;

  align-items: center;

  gap: 0.4rem;

  margin-top: 0.7rem;

  padding: 0.25rem 0.5rem;

  border: 1px solid rgba(16, 185, 129, 0.3);

  border-radius: 4px;

  background: rgba(16, 185, 129, 0.06);

  color: ${COLORS.SUCCESS};

  font-family: ${FONTS.sfMonoRegular};

  font-size: 0.6rem;

  letter-spacing: 0.04em;
`;

export const CurrentDot = styled.span`
  width: 5px;
  height: 5px;

  border-radius: 50%;

  background: ${COLORS.SUCCESS};
`;

export const ContainerExperienceText = styled.div`
  display: flex;

  flex-direction: column;

  gap: 1rem;

  max-width: 760px;

  margin-top: 1.25rem;
`;

export const TextDescription = styled.p`
  margin: 0;

  font-family: ${FONTS.calibreRegular};

  color: ${COLORS.TEXT_SECONDARY};

  font-size: 1.05rem;

  line-height: 1.5;

  @media ${VIEWPORT.desktopUp} {
    font-size: 1.15rem;
  }
`;

/**
 * Certificates
 */

export const BoxCertificates = styled.aside`
  min-width: 0;
`;

export const TextSubTitle = styled.h3`
  margin: 0;

  font-family: ${FONTS.calibreBold};

  color: ${COLORS.TEXT_PRIMARY};

  font-size: 2rem;

  font-weight: normal;

  line-height: 1;
`;

export const CertificateDivider = styled.div`
  width: 34px;
  height: 3px;

  margin-top: 1rem;

  background: ${COLORS.PRIMARY};

  border-radius: 2px;
`;

export const ContainerCertificates = styled.div`
  display: flex;

  flex-direction: column;

  gap: 0.75rem;

  margin-top: 2rem;
`;

export const ContainerCertificate = styled.div`
  display: flex;

  align-items: center;

  min-height: 92px;

  padding: 1rem;

  border: 1px solid ${COLORS.BORDER};

  border-radius: 8px;

  background: ${COLORS.SURFACE};

  transition:
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: ${COLORS.PRIMARY};

    transform: translateY(-2px);
  }
`;

export const ItemBadge = styled.img`
  width: 58px;
  height: 58px;

  flex-shrink: 0;

  object-fit: contain;

  filter: grayscale(0.5);

  transition: filter 0.2s ease;

  ${ContainerCertificate}:hover & {
    filter: grayscale(0);
  }

  @media ${VIEWPORT.desktopUp} {
    width: 64px;
    height: 64px;
  }
`;

export const ContainerCertificateInfo = styled.div`
  min-width: 0;

  width: 100%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 1rem;

  margin-left: 1rem;
`;

export const TextCertificateTitle = styled.p`
  margin: 0;

  font-family: ${FONTS.calibreRegular};

  color: ${COLORS.TEXT_PRIMARY};

  font-size: 1rem;

  line-height: 1.25;

  @media ${VIEWPORT.desktopUp} {
    font-size: 1.1rem;
  }
`;

export const TextCertificateYear = styled.span`
  display: block;

  margin-top: 0.35rem;

  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.PRIMARY_LIGHT};

  font-size: 0.7rem;
`;

export const CertificateLink = styled.a`
  width: 32px;
  height: 32px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  color: ${COLORS.TEXT_TERTIARY};

  text-decoration: none;

  transition:
    color 0.2s ease,
    transform 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    color: ${COLORS.PRIMARY_LIGHT};

    transform: translate(2px, -2px);
  }
`;
