import styled from "styled-components";

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

  background: ${COLORS.SURFACE};

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
 * Filters
 */

export const ContainerFilters = styled.div`
  display: flex;

  align-items: center;

  gap: 0.5rem;

  margin-top: 2.5rem;
  flex-wrap: wrap;

  @media ${VIEWPORT.desktopUp} {
    margin-top: 3rem;
  }
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  min-height: 44px;

  padding: 0.35rem 0.75rem;

  border: 1px solid
    ${({ $active }) => ($active ? COLORS.PRIMARY : COLORS.BORDER)};

  border-radius: 0;

  background: ${({ $active }) =>
    $active ? COLORS.PRIMARY : "transparent"};

  color: ${({ $active }) =>
    $active ? COLORS.TEXT_INVERSE : COLORS.TEXT_SECONDARY};

  font-family: ${FONTS.sfMonoRegular};

  font-size: 0.65rem;

  cursor: pointer;

  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    border-color: ${COLORS.PRIMARY};

    color: ${COLORS.PRIMARY_LIGHT};
  }

  &[aria-pressed="true"]:hover {
    color: ${COLORS.TEXT_INVERSE};
  }

  &:focus-visible {
    outline: 2px solid ${COLORS.PRIMARY_LIGHT};
    outline-offset: 3px;
    box-shadow: 0 0 0 5px ${COLORS.PRIMARY_DARK};
  }
`;

/**
 * Projects
 */

export const ProjectWorkspace = styled.div<{ $hasSelection: boolean }>`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 4rem;

  @media ${VIEWPORT.desktopUp} {
    grid-template-columns: ${({ $hasSelection }) => $hasSelection
      ? "minmax(0, 1.15fr) minmax(330px, 0.85fr)"
      : "minmax(0, 1fr)"};
    align-items: start;
    gap: clamp(3rem, 5vw, 6rem);
  }
`;

export const ContainerProjects = styled.div`
  display: flex;

  flex-direction: column;

  margin-top: 3rem;

  border-top: 1px solid ${COLORS.BORDER};

  @media ${VIEWPORT.desktopUp} {
    margin-top: 5rem;
  }
`;

export const ItemProject = styled.article`
  position: relative;
  display: flex;

  flex-direction: column;

  padding: 2rem 1rem;

  border-bottom: 1px solid ${COLORS.BORDER};

  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${COLORS.PRIMARY_LIGHT};
    outline-offset: 3px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: rgba(201, 175, 232, 0.05);
      border-color: ${COLORS.PRIMARY};
      box-shadow: inset 2px 0 ${COLORS.PRIMARY};
    }
  }

  &[data-selected="true"] {
    background: rgba(201, 175, 232, 0.05);
    border-color: ${COLORS.PRIMARY_LIGHT};
    box-shadow: inset 2px 0 ${COLORS.PRIMARY_LIGHT};
  }

  @media ${VIEWPORT.tabletUp} {
    padding: 2.5rem 0;
  }

  @media ${VIEWPORT.desktopUp} {
    min-height: 114px;
    padding: 1.25rem 0.75rem;

    .project-select p,
    .project-select > div:last-child {
      display: none;
    }

  }
`;

export const ProjectSelect = styled.button`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${COLORS.PRIMARY_LIGHT};
    outline-offset: 6px;
    border-radius: 2px;
  }

  .select-indicator {
    position: absolute;
    top: 0.2rem;
    right: 0.15rem;
    color: ${COLORS.PRIMARY_LIGHT};
    font: 1.4rem ${FONTS.sfMonoRegular};
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover .select-indicator,
  &:focus-visible .select-indicator {
    opacity: 1;
  }

  @media ${VIEWPORT.desktopUp} {
    padding-right: 2rem;
  }
`;

export const ProjectPreview = styled.aside`
  display: none;

  @media ${VIEWPORT.desktopUp} {
    position: sticky;
    top: 6rem;
    display: flex;
    flex-direction: column;
    min-height: 520px;
    margin-top: 3rem;
    padding: 1.5rem 0 2rem;
    border-top: 1px solid ${COLORS.BORDER};
    background: transparent;
  }

  .preview-bar {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${COLORS.BORDER};
    color: ${COLORS.TEXT_TERTIARY};
    font: 0.62rem ${FONTS.sfMonoRegular};
    letter-spacing: 0.06em;
  }

  .preview-body {
    padding: 2.5rem 0;
    transform-origin: center top;
    backface-visibility: hidden;
  }

  .preview-label {
    color: ${COLORS.PRIMARY_LIGHT};
    font: 0.65rem ${FONTS.sfMonoRegular};
    letter-spacing: 0.08em;
  }

  h3 {
    margin: 1rem 0 1.25rem;
    color: ${COLORS.TEXT_PRIMARY};
    font: normal clamp(3rem, 4vw, 5rem)/0.9 ${FONTS.calibreBlack};
    overflow-wrap: anywhere;
  }

  p {
    max-width: 30rem;
    margin: 0;
    color: ${COLORS.TEXT_SECONDARY};
    font: 1.2rem/1.4 ${FONTS.calibreRegular};
  }

  dl {
    display: grid;
    grid-template-columns: 5rem minmax(0, 1fr);
    gap: 0.75rem 1rem;
    margin: auto 0 1.75rem;
    padding-top: 1.25rem;
    border-top: 1px solid ${COLORS.BORDER};
    font: 0.65rem ${FONTS.sfMonoRegular};
  }

  dt {
    color: ${COLORS.TEXT_TERTIARY};
  }

  dd {
    margin: 0;
    color: ${COLORS.TEXT_PRIMARY};
    text-align: right;
    overflow-wrap: anywhere;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.9rem 0;
    border-top: 1px solid ${COLORS.BORDER};
    color: ${COLORS.PRIMARY_LIGHT};
    font: 0.7rem ${FONTS.sfMonoRegular};
    text-decoration: none;
    transition: padding-left 0.2s ease;
  }

  a:hover {
    padding-left: 0.5rem;
  }
`;

/**
 * Project Header
 */

export const ProjectHeader = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 1.25rem;
`;

export const ProjectHeaderRight = styled.div`
  display: flex;

  align-items: center;

  gap: 1rem;
`;

export const ProjectNumber = styled.span`
  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.TEXT_TERTIARY};

  font-size: 0.7rem;

  letter-spacing: 0.04em;
`;

export const ProjectStatus = styled.span`
  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.PRIMARY_LIGHT};

  font-size: 0.6rem;

  letter-spacing: 0.06em;

  @media ${VIEWPORT.mobileLargeUp} {
    font-size: 0.65rem;
  }
`;

export const ProjectGithub = styled.a`
  width: 44px;
  height: 44px;

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

  &:focus-visible {
    outline: 2px solid ${COLORS.PRIMARY_LIGHT};
    outline-offset: 3px;
  }
`;

/**
 * Project Content
 */

export const TextProjectTitle = styled.h3`
  margin: 0;

  font-family: ${FONTS.calibreRegular};

  color: ${COLORS.TEXT_PRIMARY};

  font-size: clamp(2.4rem, 4vw, 3.75rem);

  font-weight: normal;

  line-height: 1;

  letter-spacing: -0.02em;
`;

export const TextDescription = styled.p`
  max-width: 760px;

  margin: 1rem 0 0;

  font-family: ${FONTS.calibreRegular};

  color: ${COLORS.TEXT_SECONDARY};

  font-size: 1.1rem;

  line-height: 1.5;

  @media ${VIEWPORT.desktopUp} {
    font-size: 1.2rem;
  }
`;

/**
 * Tags
 */

export const ContainerTags = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 0.5rem;

  margin-top: 1.5rem;
`;

export const ItemTag = styled.span`
  display: inline-flex;

  align-items: center;

  min-height: 28px;

  padding: 0.25rem 0.6rem;

  border-bottom: 1px solid ${COLORS.BORDER};

  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.TEXT_TERTIARY};

  font-size: 0.65rem;

  white-space: nowrap;
`;

/**
 * GitHub CTA
 */

export const GithubCta = styled.div`
  display: flex;

  flex-direction: column;

  gap: 2rem;

  margin-top: 4rem;

  padding: 2rem;

  border: 1px solid ${COLORS.BORDER};

  border-radius: 0;

  background: ${COLORS.BACKGROUND};

  @media ${VIEWPORT.tabletUp} {
    padding: 2.5rem;
  }

  @media ${VIEWPORT.desktopUp} {
    flex-direction: row;

    align-items: center;

    justify-content: space-between;

    padding: 3rem;
  }
`;

export const GithubCtaContent = styled.div`
  max-width: 650px;
`;

export const GithubCtaTitle = styled.h3`
  margin: 0.75rem 0 0;

  font-family: ${FONTS.calibreRegular};

  color: ${COLORS.TEXT_PRIMARY};

  font-size: clamp(2rem, 4vw, 3rem);

  font-weight: normal;

  line-height: 1;
`;

export const GithubCtaDescription = styled.p`
  margin: 1rem 0 0;

  font-family: ${FONTS.calibreRegular};

  color: ${COLORS.TEXT_SECONDARY};

  font-size: 1.1rem;

  line-height: 1.5;
`;

export const GithubCtaButton = styled.a`
  min-height: 48px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 0.75rem;

  padding: 0 1.25rem;

  border: 0;

  background: ${COLORS.PRIMARY};

  color: ${COLORS.TEXT_INVERSE};

  font-family: ${FONTS.sfMonoRegular};

  font-size: 0.75rem;

  text-decoration: none;

  white-space: nowrap;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  span {
    font-size: 1rem;
    transition: transform 0.2s ease;
  }

  &:hover {
    background: ${COLORS.PRIMARY_HOVER};

    transform: translateY(-2px);

    box-shadow: 4px 4px 0 ${COLORS.PRIMARY_DARK};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover span {
      transform: translate(2px, -2px);
    }
  }

  &:focus-visible {
    outline: 2px solid ${COLORS.PRIMARY_LIGHT};
    outline-offset: 3px;
  }

  @media ${VIEWPORT.mobileUp} {
    width: fit-content;
  }
`;
