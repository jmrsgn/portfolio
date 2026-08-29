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
 * Filters
 */

export const ContainerFilters = styled.div`
  display: flex;

  align-items: center;

  gap: 0.5rem;

  margin-top: 2.5rem;

  @media ${VIEWPORT.desktopUp} {
    margin-top: 3rem;
  }
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  min-height: 34px;

  padding: 0.35rem 0.75rem;

  border: 1px solid
    ${({ $active }) => ($active ? COLORS.PRIMARY : COLORS.BORDER)};

  border-radius: 4px;

  background: ${({ $active }) =>
    $active ? "rgba(37, 99, 235, 0.12)" : "transparent"};

  color: ${({ $active }) =>
    $active ? COLORS.PRIMARY_LIGHT : COLORS.TEXT_TERTIARY};

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
`;

/**
 * Projects
 */

export const ContainerProjects = styled.div`
  display: flex;

  flex-direction: column;

  margin-top: 4rem;

  border-top: 1px solid ${COLORS.BORDER};

  @media ${VIEWPORT.desktopUp} {
    margin-top: 5rem;
  }
`;

export const ItemProject = styled.article`
  display: flex;

  flex-direction: column;

  padding: 2rem 0;

  border-bottom: 1px solid ${COLORS.BORDER};

  transition:
    padding-left 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    padding-left: 0.75rem;

    border-color: ${COLORS.PRIMARY};
  }

  @media ${VIEWPORT.tabletUp} {
    padding: 2.5rem 0;
  }

  @media ${VIEWPORT.desktopUp} {
    padding: 3rem 1rem 3rem 0;
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
  width: 38px;
  height: 38px;

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
 * Project Content
 */

export const TextProjectTitle = styled.h3`
  margin: 0;

  font-family: ${FONTS.calibreRegular};

  color: ${COLORS.TEXT_PRIMARY};

  font-size: clamp(2rem, 4vw, 3.25rem);

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

  border: 1px solid ${COLORS.PRIMARY_DARK};

  border-radius: 4px;

  background: rgba(37, 99, 235, 0.06);

  font-family: ${FONTS.sfMonoRegular};

  color: ${COLORS.PRIMARY_LIGHT};

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

  border-radius: 10px;

  background: ${COLORS.SURFACE};

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

  border: 1px solid ${COLORS.PRIMARY};

  background: ${COLORS.PRIMARY};

  color: ${COLORS.TEXT_INVERSE};

  font-family: ${FONTS.sfMonoRegular};

  font-size: 0.7rem;

  text-decoration: none;

  white-space: nowrap;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  span {
    font-size: 1rem;
  }

  &:hover {
    background: ${COLORS.PRIMARY_HOVER};

    transform: translateY(-2px);

    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.2);
  }

  @media ${VIEWPORT.mobileUp} {
    width: fit-content;
  }
`;
