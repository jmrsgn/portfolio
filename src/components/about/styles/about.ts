import styled from "styled-components/macro";

import * as COLORS from "../../../constants/styles/colors";
import { FONTS } from "../../../fonts/fonts";
import { VIEWPORT } from "../../../constants/viewports";

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
  margin-bottom: 3rem;

  border-radius: 2px;

  background: ${COLORS.PRIMARY};

  @media ${VIEWPORT.desktopUp} {
    margin-bottom: 4rem;
  }
`;

/**
 * Introduction
 */

export const BoxProfile = styled.div`
  display: grid;

  grid-template-columns: 1fr;

  gap: 3rem;

  @media ${VIEWPORT.desktopUp} {
    grid-template-columns:
      minmax(0, 1.15fr)
      minmax(360px, 0.85fr);

    align-items: start;

    gap: clamp(4rem, 7vw, 8rem);
  }
`;

export const ContainerAboutMeText = styled.div`
  display: flex;

  flex-direction: column;

  gap: 1.5rem;

  max-width: 680px;
`;

export const TextDescription = styled.p`
  margin: 0;
  margin-top: 0.5rem;

  font-family: ${FONTS.calibreRegular};

  color: ${COLORS.TEXT_SECONDARY};

  font-size: clamp(1.25rem, 1.7vw, 1.55rem);

  line-height: 1.45;

  letter-spacing: -0.01em;
`;

export const TextHighlight = styled.span`
  color: ${COLORS.PRIMARY_LIGHT};
`;

/**
 * Profile
 */

export const ProfileCard = styled.div`
  width: 100%;

  border: 1px solid ${COLORS.BORDER};

  border-radius: 10px;

  background: ${COLORS.SURFACE};

  overflow: hidden;
`;

export const ProfileItem = styled.div`
  display: flex;

  flex-direction: column;

  gap: 0.45rem;

  padding: 1.25rem 1.5rem;

  border-bottom: 1px solid ${COLORS.BORDER};

  &:last-child {
    border-bottom: none;
  }

  @media ${VIEWPORT.desktopUp} {
    padding: 1.4rem 1.75rem;
  }
`;

export const ProfileLabel = styled.span`
  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.TEXT_TERTIARY};

  font-size: 0.65rem;

  letter-spacing: 0.08em;
`;

export const ProfileValue = styled.span`
  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.TEXT_PRIMARY};

  font-size: 0.85rem;

  line-height: 1.6;

  @media ${VIEWPORT.desktopUp} {
    font-size: 0.9rem;
  }
`;

/**
 * Sections
 */

export const SectionHeader = styled.div`
  margin-top: 6rem;

  margin-bottom: 1.5rem;

  @media ${VIEWPORT.desktopUp} {
    margin-top: 8rem;
  }
`;

export const SectionEyebrow = styled.span`
  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.PRIMARY_LIGHT};

  font-size: 0.75rem;

  letter-spacing: 0.08em;
`;

/**
 * What I Do
 */

export const ContainerTech = styled.div`
  display: grid;

  grid-template-columns: 1fr;

  gap: 1rem;

  @media ${VIEWPORT.tabletUp} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${VIEWPORT.desktopUp} {
    grid-template-columns: repeat(4, minmax(0, 1fr));

    gap: 1.25rem;
  }
`;

export const ContainerTechInfo = styled.article`
  min-height: 390px;

  display: flex;

  flex-direction: column;

  padding: 1.5rem;

  border: 1px solid ${COLORS.BORDER};

  border-radius: 10px;

  background: ${COLORS.SURFACE};

  transition:
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: ${COLORS.PRIMARY};

    transform: translateY(-3px);

    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
  }

  @media ${VIEWPORT.desktopUp} {
    min-height: 420px;

    padding: 1.75rem;
  }
`;

export const TechCardHeader = styled.div`
  display: flex;

  justify-content: flex-end;

  margin-bottom: 2.5rem;
`;

export const TechNumber = styled.span`
  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.TEXT_TERTIARY};

  font-size: 0.75rem;
`;

export const TextTitleOther = styled.h3`
  margin: 0;

  font-family: ${FONTS.calibreRegular};

  color: ${COLORS.TEXT_PRIMARY};

  font-size: 1.7rem;

  font-weight: normal;

  line-height: 1.05;

  @media ${VIEWPORT.desktopUp} {
    font-size: 1.9rem;
  }
`;

export const ContainerTechUsed = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 0.5rem;

  margin-top: auto;

  padding-top: 1.5rem;

  border-top: 1px solid ${COLORS.BORDER};
`;

export const TechTag = styled.span`
  display: inline-flex;

  align-items: center;

  min-height: 28px;

  padding: 0.25rem 0.6rem;

  border: 1px solid ${COLORS.PRIMARY_DARK};

  border-radius: 4px;

  background: rgba(37, 99, 235, 0.06);

  color: ${COLORS.PRIMARY_LIGHT};

  font-family: ${FONTS.sfMonoRegular};

  font-size: 0.65rem;

  white-space: nowrap;
`;

/**
 * Tech Stack
 */

export const TechStack = styled.section`
  margin-top: 1.25rem;

  border: 1px solid ${COLORS.BORDER};

  border-radius: 10px;

  background: ${COLORS.SURFACE};

  overflow: hidden;
`;

export const TechStackHeader = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 1.25rem 1.5rem;

  border-bottom: 1px solid ${COLORS.BORDER};

  @media ${VIEWPORT.desktopUp} {
    padding: 1.5rem 1.75rem;
  }
`;

export const TechStackGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  padding: 0.5rem;

  @media ${VIEWPORT.tabletUp} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media ${VIEWPORT.desktopUp} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const TechStackItem = styled.div`
  min-height: 72px;

  display: flex;

  align-items: center;

  gap: 0.85rem;

  padding: 1rem;

  border-bottom: 1px solid ${COLORS.BORDER};

  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.TEXT_PRIMARY};

  font-size: 0.75rem;

  svg {
    width: 22px;
    height: 22px;

    flex-shrink: 0;

    color: ${COLORS.PRIMARY_LIGHT};
  }

  @media ${VIEWPORT.desktopUp} {
    padding: 1.25rem;

    font-size: 0.8rem;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
