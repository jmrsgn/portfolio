import styled from "styled-components";

import * as COLORS from "../../../constants/styles/colors";
import { VIEWPORT } from "../../../constants/viewports";
import { FONTS } from "../../../fonts/fonts";

const CURRENT_BLUE = "#4A96FF";

/**
 * Base
 */

export const Container = styled.section`
  position: relative;

  width: 100%;
  min-height: 100vh;

  background: ${COLORS.BACKGROUND};

  color: ${COLORS.TEXT_PRIMARY};

  overflow: visible;
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
    width: min(1280px, calc(100% - 160px));
    padding: 9rem 0 8rem;
  }
`;

/**
 * Main content
 */

export const ContainerInfo = styled.div`
  display: grid;

  grid-template-columns: 1fr;

  gap: 5rem;

  margin-top: 4rem;

  @media ${VIEWPORT.desktopUp} {
    grid-template-columns: minmax(0, 1.55fr) minmax(320px, 0.8fr);

    gap: 6rem;

    margin-top: 5rem;
  }
`;

/**
 * Experience entries
 */

export const ContainerTimeline = styled.div`
  min-width: 0;
  display: grid;
`;

export const ExperienceItem = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.15rem 1rem;
  min-width: 0;
  padding: 2rem 0;
  border-bottom: 1px solid ${COLORS.BORDER};

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: 0;
  }

  @media ${VIEWPORT.tabletUp} {
    padding-bottom: 2.5rem;
    padding-top: 2.5rem;

    &:first-child {
      padding-top: 0;
    }
  }
`;

export const TimelineDate = styled.div`
  min-width: 0;
  color: ${COLORS.TEXT_TERTIARY};
  font: 0.7rem/1.4 ${FONTS.sfMonoRegular};
  letter-spacing: 0.03em;

  ${ExperienceItem}[data-current="true"] & {
    color: color-mix(in srgb, ${CURRENT_BLUE} 82%, ${COLORS.TEXT_PRIMARY});
    font-weight: 700;
  }
`;

export const ExperienceContent = styled.div`
  grid-column: 1 / -1;
  min-width: 0;
  padding-left: 1.15rem;
  border-left: 2px solid ${COLORS.BORDER};

  ${ExperienceItem}[data-current="true"] & {
    border-left-color: color-mix(in srgb, ${CURRENT_BLUE} 75%, ${COLORS.BORDER});
  }

  @media (max-width: 479px) {
    padding-left: 1rem;
  }
`;

export const TextPosition = styled.h3`
  margin: 0;

  font-family: ${FONTS.calibreBold};

  color: ${COLORS.TEXT_PRIMARY};

  font-size: 1.5rem;
  font-weight: normal;
  line-height: 1.15;

  @media ${VIEWPORT.tabletUp} {
    font-size: 1.875rem;
  }
`;

export const TextCompany = styled.span`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-top: 0.55rem;
  color: color-mix(in srgb, ${COLORS.TEXT_PRIMARY} 35%, ${COLORS.TEXT_SECONDARY});
  font: 600 1rem/1.35 ${FONTS.calibreRegular};
  overflow-wrap: anywhere;

  svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    color: ${COLORS.TEXT_TERTIARY};
  }

  @media ${VIEWPORT.tabletUp} {
    font-size: 1.125rem;
  }
`;

export const ContainerExperienceText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: 1.25rem;
  padding-top: 1.15rem;
  border-top: 1px solid ${COLORS.BORDER};
`;

export const TextDescription = styled.p`
  margin: 0;

  font-family: ${FONTS.calibreRegular};

  color: ${COLORS.TEXT_SECONDARY};

  font-size: 0.95rem;
  line-height: 1.6;

  @media ${VIEWPORT.desktopUp} {
    font-size: 1rem;
  }
`;

/**
 * Certificates
 */

export const BoxCertificates = styled.aside`
  min-width: 0;

  @media ${VIEWPORT.desktopUp} {
    align-self: start;
  }
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
  width: 100%;
  height: 1px;

  margin-top: 1rem;

  background: ${COLORS.PRIMARY};

`;

export const ContainerCertificates = styled.div`
  display: flex;

  flex-direction: column;

  gap: 0;

  margin-top: 2rem;
`;

export const ContainerCertificate = styled.div`
  display: flex;

  align-items: center;

  min-height: 92px;

  padding: 1rem 0;
  border-bottom: 1px solid ${COLORS.BORDER};
  background: transparent;

  transition:
    background-color 0.2s ease;

  &:hover {
    background: ${COLORS.HOVER_TINT};
  }

  @media (max-width: 767px) {
    align-items: flex-start;

    padding: 0.85rem 0;

    min-height: 0;
  }
`;

export const BadgeButton = styled.button`
  flex-shrink: 0;

  width: 58px;
  height: 58px;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 0;

  border: 0;

  background: transparent;

  cursor: pointer;

  @media ${VIEWPORT.desktopUp} {
    width: 64px;
    height: 64px;
  }

  @media (max-width: 767px) {
    width: 52px;
    height: 52px;
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

  @media (max-width: 767px) {
    width: 52px;
    height: 52px;
  }
`;

export const GenericCertificateIcon = styled.div`
  width: 58px;
  height: 58px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  color: ${COLORS.PRIMARY_LIGHT};

  border: 1px solid ${COLORS.BORDER};

  border-radius: 0;

  background: ${COLORS.BACKGROUND};

  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  svg {
    width: 28px;
    height: 28px;
  }

  ${ContainerCertificate}:hover & {
    color: ${COLORS.PRIMARY};

    border-color: ${COLORS.PRIMARY};
  }

  @media ${VIEWPORT.desktopUp} {
    width: 64px;
    height: 64px;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 767px) {
    width: 52px;
    height: 52px;

    svg {
      width: 25px;
      height: 25px;
    }
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

  @media (max-width: 767px) {
    align-items: flex-start;

    flex-direction: column;

    gap: 0.6rem;

    margin-left: 0.75rem;
  }
`;

export const CertificateTextContainer = styled.div`
  min-width: 0;

  flex: 1;
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

  @media (max-width: 767px) {
    font-size: 0.95rem;

    line-height: 1.2;
  }
`;

export const TextCertificateIssuer = styled.span`
  display: block;

  margin-top: 0.2rem;

  font-family: ${FONTS.calibreRegular};

  color: ${COLORS.TEXT_SECONDARY};

  font-size: 0.8rem;

  line-height: 1.2;
`;

export const TextCertificateDate = styled.span`
  display: block;

  margin-top: 0.35rem;

  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.PRIMARY_LIGHT};

  font-size: 0.7rem;
`;

export const ContainerCertificateActions = styled.div`
  display: flex;

  align-items: center;

  justify-content: flex-end;

  gap: 0.35rem;

  flex-shrink: 0;

  @media (max-width: 767px) {
    width: 100%;

    justify-content: flex-start;

    flex-wrap: wrap;
  }
`;

export const CertificateAction = styled.button`
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 0.35rem;

  min-height: 48px;

  padding: 0.35rem 0.55rem;

  border: 1px solid ${COLORS.BORDER};

  border-radius: 0;

  background: transparent;

  color: ${COLORS.TEXT_TERTIARY};

  font-family: ${FONTS.sfMonoRegular};

  font-size: 0.55rem;

  line-height: 1;

  white-space: nowrap;

  cursor: pointer;

  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  svg {
    width: 12px;
    height: 12px;
  }

  &:hover {
    color: ${COLORS.PRIMARY_LIGHT};

    border-color: ${COLORS.PRIMARY};

    background: rgba(255, 255, 255, 0.025);
  }

  @media ${VIEWPORT.tabletUp} {
    font-size: 0.6rem;
  }

  @media (max-width: 767px) {
    min-height: 48px;

    padding: 0.4rem 0.55rem;

    font-size: 0.55rem;
  }
`;

/**
 * Certificate Popup
 */

export const CertificateModalOverlay = styled.div`
  position: fixed;

  inset: 0;

  z-index: 10000;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 1.5rem;

  background: rgba(0, 0, 0, 0.82);


  @media (max-width: 767px) {
    align-items: center;

    padding: 1rem;
  }
`;

export const CertificateModal = styled.div`
  position: relative;

  width: min(900px, 100%);

  max-height: calc(100vh - 3rem);

  overflow: auto;

  padding: 1rem;

  border: 1px solid ${COLORS.BORDER};

  border-radius: 0;

  background: ${COLORS.SURFACE};

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);

  @media (max-width: 767px) {
    max-height: calc(100vh - 2rem);

    padding: 0.75rem;
  }
`;

export const CertificateModalHeader = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 1rem;

  margin-bottom: 1rem;
`;

export const TextModalTitle = styled.h3`
  margin: 0;

  font-family: ${FONTS.calibreBold};

  color: ${COLORS.TEXT_PRIMARY};

  font-size: 1.4rem;

  font-weight: normal;

  line-height: 1.1;
`;

export const CertificateModalClose = styled.button`
  width: 32px;
  height: 32px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid ${COLORS.BORDER};

  border-radius: 0;

  background: transparent;

  color: ${COLORS.TEXT_TERTIARY};

  cursor: pointer;

  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  svg {
    width: 14px;
    height: 14px;
  }

  &:hover {
    color: ${COLORS.TEXT_PRIMARY};

    border-color: ${COLORS.PRIMARY};
  }
`;

export const CertificateModalImage = styled.img`
  display: block;

  width: 100%;

  max-height: calc(100vh - 9rem);

  object-fit: contain;

  border-radius: 5px;

  background: ${COLORS.BACKGROUND};

  @media (max-width: 767px) {
    max-height: calc(100vh - 8rem);
  }
`;
