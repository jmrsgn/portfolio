import styled from "styled-components/macro";

import * as COLORS from "../../../constants/styles/colors";
import { FONTS } from "../../../fonts/fonts";
import { VIEWPORT } from "../../../constants/viewports";

/**
 * Base
 */

export const Container = styled.section`
  position: relative;

  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 80% 45%,
      rgba(37, 99, 235, 0.08),
      transparent 30%
    ),
    ${COLORS.BACKGROUND};

  color: ${COLORS.TEXT_PRIMARY};

  &::before {
    content: "";

    position: absolute;
    inset: 0;

    pointer-events: none;

    opacity: 0.25;

    background-image:
      linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);

    background-size: 48px 48px;

    mask-image: linear-gradient(to bottom, black, transparent 90%);
  }
`;

/**
 * Layout
 */

export const Box = styled.div`
  position: relative;
  z-index: 1;

  width: calc(100% - 32px);
  max-width: 1400px;

  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;

  align-items: center;

  gap: 3rem;

  padding: 6rem 0 5rem;

  @media ${VIEWPORT.mobileLargeUp} {
    width: calc(100% - 48px);
  }

  @media ${VIEWPORT.tabletUp} {
    gap: 4rem;
    padding: 7rem 0 5rem;
  }

  @media ${VIEWPORT.tabletLandscapeUp} {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);

    gap: 4rem;
  }

  @media ${VIEWPORT.desktopUp} {
    gap: clamp(3rem, 7vw, 8rem);

    padding: 8rem 0 6rem;
  }
`;

export const BoxInfo = styled.div`
  min-width: 0;
`;

/**
 * Greetings
 */

export const ContainerGreetings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

/**
 * Technical label
 */

export const TextTech = styled.div`
  margin-bottom: 1.5rem;

  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.PRIMARY_LIGHT};

  font-size: 0.7rem;
  letter-spacing: 0.08em;
  line-height: 1.5;

  @media ${VIEWPORT.mobileLargeUp} {
    font-size: 0.75rem;
  }

  @media ${VIEWPORT.tabletUp} {
    font-size: 0.8rem;
  }
`;

/**
 * Hero heading
 */

export const TextGreeting = styled.h1`
  margin: 0;

  font-family: ${FONTS.calibreBlack};
  color: ${COLORS.TEXT_PRIMARY};
  font-size: clamp(3.4rem, 17vw, 5rem);

  font-weight: normal;
  line-height: 0.88;
  letter-spacing: -0.015em;

  @media ${VIEWPORT.mobileLargeUp} {
    font-size: clamp(4rem, 14vw, 5.5rem);
  }

  @media ${VIEWPORT.tabletUp} {
    font-size: clamp(4rem, 11vw, 6.5rem);
  }

  @media ${VIEWPORT.desktopUp} {
    font-size: clamp(4rem, 7vw, 7rem);
    line-height: 0.82;
  }
`;

/**
 * Hero description
 */

export const TextDescription = styled.p`
  max-width: 520px;

  margin: 1.5rem 0 0;

  font-family: ${FONTS.calibreRegular};

  color: ${COLORS.TEXT_SECONDARY};

  font-size: 1.35rem;

  line-height: 1.3;
  letter-spacing: -0.01em;

  @media ${VIEWPORT.tabletUp} {
    margin-top: 2rem;

    font-size: 1.5rem;
  }

  @media ${VIEWPORT.desktopUp} {
    font-size: clamp(1.4rem, 2vw, 1.8rem);
  }
`;

/**
 * Actions
 */

export const ContainerActions = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;

  width: 100%;

  margin-top: 2rem;

  @media ${VIEWPORT.mobileLargeUp} {
    width: auto;
  }

  @media ${VIEWPORT.tabletUp} {
    margin-top: 2.5rem;
  }
`;

export const ButtonBase = styled.a`
  height: 52px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0 1.25rem;

  font-family: ${FONTS.sfMonoRegular};
  font-size: 0.7rem;
  letter-spacing: 0.04em;

  text-decoration: none;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  @media ${VIEWPORT.mobileLargeUp} {
    padding: 0 1.5rem;

    font-size: 0.75rem;
  }

  @media ${VIEWPORT.tabletUp} {
    font-size: 0.8rem;
  }
`;

export const ButtonResume = styled(ButtonBase)`
  gap: 0.65rem;

  color: ${COLORS.TEXT_INVERSE};

  background: ${COLORS.PRIMARY};

  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.2);

  &:hover {
    background: ${COLORS.PRIMARY_HOVER};

    transform: translateY(-2px);

    box-shadow: 0 12px 28px rgba(37, 99, 235, 0.3);
  }
`;

export const ButtonAbout = styled(ButtonBase)`
  border: 1px solid ${COLORS.BORDER};

  color: ${COLORS.TEXT_PRIMARY};

  background: transparent;

  &:hover {
    border-color: ${COLORS.PRIMARY};

    color: ${COLORS.PRIMARY_LIGHT};

    transform: translateY(-2px);
  }
`;

export const ButtonArrow = styled.span`
  color: ${COLORS.TEXT_INVERSE};

  font-family: ${FONTS.sfMonoRegular};
`;

/**
 * Social links
 */

export const ContainerSocials = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  margin-top: 2rem;

  @media ${VIEWPORT.tabletUp} {
    margin-top: 2.5rem;
  }
`;

export const SocialLink = styled.a`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${COLORS.BORDER};

  color: ${COLORS.TEXT_TERTIARY};

  text-decoration: none;

  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    border-color: ${COLORS.PRIMARY};
    color: ${COLORS.PRIMARY_LIGHT};

    transform: translateY(-2px);
  }
`;

/**
 * Code panel
 */

export const CodePanel = styled.div`
  width: 100%;

  overflow: hidden;

  border: 1px solid ${COLORS.BORDER};
  border-radius: 8px;

  background: rgba(17, 24, 39, 0.78);

  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.35),
    0 0 50px rgba(37, 99, 235, 0.05);

  backdrop-filter: blur(12px);

  @media ${VIEWPORT.tabletUp} {
    border-radius: 10px;
  }

  @media ${VIEWPORT.desktopUp} {
    border-radius: 12px;
  }
`;

export const CodeHeader = styled.div`
  height: 52px;

  display: flex;
  align-items: center;

  padding: 0 0.75rem;

  border-bottom: 1px solid ${COLORS.BORDER};

  background: ${COLORS.SURFACE};

  @media ${VIEWPORT.tabletUp} {
    height: 58px;

    padding: 0 1.25rem;
  }
`;

export const CodeWindowControls = styled.div`
  display: flex;
  align-items: center;

  gap: 6px;

  @media ${VIEWPORT.tabletUp} {
    gap: 7px;
  }
`;

export const WindowDot = styled.span`
  width: 9px;
  height: 9px;

  display: block;

  border-radius: 50%;

  background: ${COLORS.TEXT_TERTIARY};

  &:first-child {
    background: #ff5f57;
  }

  &:nth-child(2) {
    background: #febc2e;
  }

  &:nth-child(3) {
    background: #28c840;
  }

  @media ${VIEWPORT.tabletUp} {
    width: 11px;
    height: 11px;
  }
`;

export const CodeFileName = styled.span`
  margin-left: 1rem;

  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.TEXT_PRIMARY};

  font-size: 0.7rem;

  @media ${VIEWPORT.tabletUp} {
    margin-left: 1.5rem;

    font-size: 0.8rem;
  }
`;

export const CodeLanguage = styled.span`
  margin-left: auto;

  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.PRIMARY_LIGHT};

  font-size: 0.65rem;

  @media ${VIEWPORT.tabletUp} {
    font-size: 0.75rem;
  }
`;

export const CodeContent = styled.div`
  padding: 1rem 0.75rem;

  overflow-x: auto;

  font-family: ${FONTS.sfMonoRegular};

  font-size: 0.6rem;
  line-height: 1.8;

  @media ${VIEWPORT.mobileLargeUp} {
    font-size: 0.65rem;
  }

  @media ${VIEWPORT.tabletUp} {
    padding: 1.5rem 1.25rem;

    font-size: clamp(0.68rem, 1vw, 0.85rem);

    line-height: 1.9;
  }
`;

export const CodeLine = styled.div`
  display: flex;

  min-width: max-content;

  color: ${COLORS.TEXT_PRIMARY};
`;

export const LineNumber = styled.span`
  width: 24px;

  flex-shrink: 0;

  margin-right: 0.75rem;

  color: ${COLORS.TEXT_DISABLED};

  text-align: right;

  user-select: none;

  @media ${VIEWPORT.tabletUp} {
    width: 34px;

    margin-right: 1.25rem;
  }
`;

export const CodeIndent = styled.span`
  width: 1.25rem;

  flex-shrink: 0;

  @media ${VIEWPORT.tabletUp} {
    width: 1.5rem;
  }
`;

export const CodeKeyword = styled.span`
  color: ${COLORS.PRIMARY_LIGHT};

  &:not(:first-child) {
    margin-left: 0.5rem;
  }
`;

export const CodeVariable = styled.span`
  margin-left: 0.35rem;
  color: ${COLORS.TEXT_PRIMARY};
`;

export const CodeOperator = styled.span`
  color: ${COLORS.TEXT_PRIMARY};

  ${CodeKeyword} + & {
    margin-left: 0.4rem;
  }
`;

export const CodeString = styled.span`
  color: #b7df62;
`;

export const CodeComment = styled.span`
  color: ${COLORS.TEXT_TERTIARY};
`;

export const CodeFooter = styled.div`
  min-height: 52px;

  display: flex;
  align-items: center;

  padding: 0 0.75rem;

  border-top: 1px solid ${COLORS.BORDER};

  background: rgba(22, 31, 45, 0.8);

  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.TEXT_PRIMARY};

  font-size: 0.6rem;

  @media ${VIEWPORT.tabletUp} {
    min-height: 58px;

    padding: 0 1.25rem;

    font-size: 0.75rem;
  }
`;

export const CodePrompt = styled.span`
  margin-right: 0.75rem;

  color: ${COLORS.PRIMARY_LIGHT};
`;

/**
 * Bottom tagline
 */

/**
 * Bottom status
 */

export const Tagline = styled.div`
  position: absolute;

  z-index: 2;

  bottom: 1.25rem;
  left: 50%;

  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: max-content;

  white-space: nowrap;

  font-family: ${FONTS.sfMonoLight};

  color: ${COLORS.TEXT_SECONDARY};

  font-size: 0.6rem;

  letter-spacing: 0.02em;

  @media ${VIEWPORT.mobileLargeUp} {
    font-size: 0.65rem;
  }

  @media ${VIEWPORT.tabletUp} {
    bottom: 1.5rem;

    font-size: 0.75rem;
  }

  @media ${VIEWPORT.desktopUp} {
    bottom: 2rem;

    font-size: 0.85rem;
  }
`;

export const TaglineAccent = styled.span`
  width: 6px;
  height: 6px;

  flex-shrink: 0;

  margin-right: 0.75rem;

  border-radius: 50%;

  background: ${COLORS.PRIMARY};

  box-shadow: ${COLORS.SHADOW_GLOW_PRIMARY};

  @media ${VIEWPORT.tabletUp} {
    width: 7px;
    height: 7px;

    margin-right: 1rem;
  }
`;

export const TaglineStatus = styled.span`
  margin-left: 0.35rem;

  color: ${COLORS.PRIMARY_LIGHT};
`;
