import styled from "styled-components";

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
    width: min(1280px, calc(100% - 160px));
    padding: 9rem 0 8rem;
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
      minmax(0, 1.3fr)
      minmax(320px, 0.7fr);

    align-items: start;

    gap: clamp(4rem, 8vw, 10rem);
  }
`;

export const ContainerAboutMeText = styled.div`
  display: flex;

  flex-direction: column;

  gap: 1.5rem;

  max-width: 680px;

  & > p:first-child {
    color: ${COLORS.TEXT_PRIMARY};
    font-size: clamp(2rem, 3vw, 3.25rem);
    line-height: 1.08;
    letter-spacing: -0.02em;
  }
`;

export const TextDescription = styled.p`
  margin: 0.5rem 0 0;

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

  border-top: 1px solid ${COLORS.BORDER};

  overflow: hidden;
`;

export const ProfileItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 0;

  border-bottom: 1px solid ${COLORS.BORDER};

  &:last-child {
    border-bottom: none;
  }

  @media ${VIEWPORT.desktopUp} {
    padding: 1.25rem 0;
  }
`;

export const ProfileLabel = styled.span`
  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.TEXT_TERTIARY};

  font-size: 0.65rem;

  letter-spacing: 0.08em;

  flex-shrink: 0;
`;

export const ProfileValue = styled.span`
  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.TEXT_PRIMARY};

  font-size: 0.85rem;

  line-height: 1.6;

  text-align: right;

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

/**
 * What I Do
 */

export const ContainerTech = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  border-top: 1px solid ${COLORS.BORDER};
`;

export const ContainerTechInfo = styled.article`
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  gap: 0.5rem 1rem;
  padding: 1.75rem 0;
  border-bottom: 1px solid ${COLORS.BORDER};
  transition: background-color 0.2s ease;

  > p {
    grid-column: 2;
  }

  @media (hover: hover) {
    &:hover {
      background: ${COLORS.HOVER_TINT};
    }
  }

  @media ${VIEWPORT.desktopUp} {
    grid-template-columns: 56px minmax(200px, 0.75fr) minmax(0, 1.25fr);
    gap: 0.75rem 2rem;
    padding: 2.1rem 0;

    > p {
      grid-column: 3;
    }
  }
`;

export const TechCardHeader = styled.div`
  grid-row: 1 / 4;
  padding-top: 0.3rem;

  @media ${VIEWPORT.desktopUp} {
    grid-row: 1 / 3;
  }
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

  grid-column: 2;

  @media ${VIEWPORT.desktopUp} {
    font-size: 1.9rem;
  }
`;

export const ContainerTechUsed = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 0.5rem;

  grid-column: 2;
  margin-top: 0.5rem;

  @media ${VIEWPORT.desktopUp} {
    grid-column: 2 / 4;
  }
`;

export const TechTag = styled.span`
  display: inline-flex;

  align-items: center;

  min-height: 28px;

  padding: 0.25rem 0.6rem;

  border: 1px solid ${COLORS.PRIMARY_DARK};

  border-radius: 4px;

  background: ${COLORS.HOVER_TINT};

  color: ${COLORS.PRIMARY_LIGHT};

  font-family: ${FONTS.sfMonoRegular};

  font-size: 0.65rem;

  white-space: nowrap;
`;

/**
 * Engineering Focus
 */

export const EngineeringFocus = styled.section`
  display: grid;
  gap: 1.25rem 3rem;
  margin-top: 5rem;

  > :first-child {
    grid-column: 1 / -1;
    margin-bottom: 0;
  }

  @media ${VIEWPORT.tabletUp} {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  }
`;

export const EngineeringFocusTitle = styled.h2`
  margin: 0;
  color: ${COLORS.TEXT_PRIMARY};
  font: normal clamp(2.6rem, 4.5vw, 4.25rem)/0.98 ${FONTS.calibreBold};
  letter-spacing: -0.02em;
`;

export const EngineeringFocusIntro = styled.p`
  max-width: 42rem;
  margin: 0;
  color: ${COLORS.TEXT_SECONDARY};
  font: clamp(1.15rem, 1.5vw, 1.35rem)/1.45 ${FONTS.calibreRegular};
`;

export const EngineeringFocusAreas = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0 2.25rem;
  margin-top: 2.25rem;

  @media ${VIEWPORT.tabletUp} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${VIEWPORT.desktopUp} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const EngineeringFocusArea = styled.article`
  position: relative;
  isolation: isolate;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding: 1rem 0.25rem 1.6rem;
  border-top: 1px solid ${COLORS.BORDER};
  transition: border-color 0.35s ease;

  &::before {
    content: "";
    position: absolute;
    top: 1rem;
    left: 0;
    width: 100%;
    height: 140px;
    background: radial-gradient(
      ellipse 47% 50% at 50% 47%,
      rgba(74, 150, 255, 0.13) 0%,
      rgba(74, 150, 255, 0.045) 48%,
      transparent 100%
    );
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s ease;
  }

  > svg {
    position: relative;
    z-index: 1;
    margin-bottom: 0.75rem;
    filter: brightness(0.88);
    transition: filter 0.35s ease;
  }

  > span {
    display: block;
    margin-bottom: 0.6rem;
    color: ${COLORS.TEXT_TERTIARY};
    font: 0.65rem ${FONTS.sfMonoRegular};
  }

  h3 {
    margin: 0;
    color: #B8B8B8;
    font: 600 clamp(1.4rem, 1.8vw, 1.65rem)/1.1 ${FONTS.calibreRegular};
    transition: color 0.35s ease;
  }

  p {
    max-width: 28rem;
    margin: 0.55rem 0 0;
    color: #919191;
    font: 1.05rem/1.35 ${FONTS.calibreRegular};
    transition: color 0.35s ease;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-top-color: ${COLORS.TEXT_SECONDARY};

      h3 { color: #F5F5F5; }
      p { color: ${COLORS.TEXT_SECONDARY}; }
    }
  }

  &:focus-visible {
    outline: none;
    border-top-color: ${COLORS.TEXT_PRIMARY};

    h3 { color: #F5F5F5; }
    p { color: ${COLORS.TEXT_SECONDARY}; }
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover::before { opacity: 1; }
    &:hover > svg { filter: brightness(1.1); }
  }

  &:focus-visible::before { opacity: 1; }
  &:focus-visible > svg { filter: brightness(1.1); }

  @media (max-width: 767px) {
    &[data-in-view="true"] {
      border-top-color: ${COLORS.TEXT_SECONDARY};

      h3 { color: #F5F5F5; }
      p { color: ${COLORS.TEXT_SECONDARY}; }
    }

    &[data-in-view="true"]::before { opacity: 1; }
    &[data-in-view="true"] > svg { filter: brightness(1.1); }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::before,
    > svg,
    h3,
    p {
      transition: none;
    }
  }
`;

/**
 * Tech Stack
 */

export const TechStack = styled.section`
  margin-top: 5rem;
`;

export const TechStackHeader = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 1.25rem 0 0.5rem;

  border-bottom: 1px solid ${COLORS.BORDER};

  > :first-child {
    margin-bottom: 1rem;
  }

  @media ${VIEWPORT.desktopUp} {
    padding: 1.5rem 0 0.65rem;
  }
`;

export const TechStackGrid = styled.div<{ $expanded: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  counter-reset: tech;

  @media (max-width: 767px) {
    > :nth-child(n + 9) {
      display: ${({ $expanded }) => ($expanded ? "flex" : "none")};
    }
  }

  @media ${VIEWPORT.tabletUp} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2rem;
  }
`;

export const TechStackItem = styled.div`
  min-height: 64px;

  display: flex;

  align-items: center;

  gap: 1rem;

  padding: 0.75rem 0.4rem;

  border-bottom: 1px solid ${COLORS.BORDER};

  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.TEXT_PRIMARY};

  font-size: 0.75rem;

  small {
    margin-left: auto;
    color: ${COLORS.TEXT_TERTIARY};
    font: 0.65rem ${FONTS.sfMonoRegular};
  }

  &::before {
    counter-increment: tech;
    content: counter(tech, decimal-leading-zero);
    width: 2.5rem;
    flex-shrink: 0;
    color: ${COLORS.TEXT_TERTIARY};
    font-size: 0.6rem;
  }

  transition: background-color 0.2s ease, color 0.2s ease;

  svg {
    width: 22px;
    height: 22px;

    flex-shrink: 0;

    color: ${COLORS.PRIMARY_LIGHT};

    transition: transform 0.25s ease, color 0.2s ease;
  }

  @media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
    &:hover {
      background: ${COLORS.HOVER_TINT};

      svg {
        color: ${COLORS.PRIMARY_LIGHT};
        transform: translateX(3px);
      }
    }
  }

  @media ${VIEWPORT.desktopUp} {
    padding: 1.1rem 0.6rem;

    font-size: 0.8rem;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const TechStackToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 48px;
  padding: 0.75rem 0.4rem;
  border: 0;
  border-bottom: 1px solid ${COLORS.BORDER};
  background: transparent;
  color: ${COLORS.TEXT_SECONDARY};
  font: 0.7rem ${FONTS.sfMonoRegular};
  text-align: left;
  cursor: pointer;
  transition: color 0.2s ease;

  span {
    font-size: 1rem;
  }

  &:hover {
    color: ${COLORS.TEXT_PRIMARY};
  }

  &:focus-visible {
    outline: 2px solid ${COLORS.TEXT_PRIMARY};
    outline-offset: 2px;
  }

  @media ${VIEWPORT.tabletUp} {
    display: none;
  }
`;
