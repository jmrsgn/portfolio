import styled from "styled-components";

import * as COLORS from "../../../constants/styles/colors";
import { VIEWPORT } from "../../../constants/viewports";
import { FONTS } from "../../../fonts/fonts";

/**
 * Items
 */

export const ItemButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: 48px;
  gap: 0.6rem;
  padding: 0 1.25rem;
  flex-shrink: 0;
  white-space: nowrap;

  border: 0;

  color: ${COLORS.TEXT_INVERSE};
  background: ${COLORS.PRIMARY};

  font-family: ${FONTS.sfMonoRegular};
  font-size: 0.75rem;
  letter-spacing: 0.05em;

  text-decoration: none;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    color: ${COLORS.TEXT_INVERSE};
    background: ${COLORS.PRIMARY_HOVER};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover svg {
      transform: translate(2px, -2px);
    }
  }

  @media ${VIEWPORT.mobileUp} {
    width: fit-content;
  }

  @media ${VIEWPORT.desktopUp} {
    width: 210px;
    height: 48px;

    font-size: 0.8rem;
  }
`;

export const ItemContact = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-top: 0.25rem;

  color: ${COLORS.TEXT_SECONDARY};

  font-family: ${FONTS.sfMonoRegular};
  font-size: 0.7rem;

  text-decoration: none;

  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: ${COLORS.PRIMARY_LIGHT};

    transform: translateY(-1px);
  }

  @media ${VIEWPORT.desktopUp} {
    font-size: 0.75rem;
  }
`;

/**
 * Containers
 */

export const Container = styled.section`
  position: relative;

  width: 100%;
  min-height: 100vh;

  overflow: hidden;

  background: ${COLORS.SURFACE_ELEVATED};

  color: ${COLORS.TEXT_PRIMARY};
`;

export const ContainerContactContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: start;
  gap: 1.5rem;
  width: 100%;
  margin-top: 1rem;

  @media ${VIEWPORT.desktopUp} {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: 4rem;
    margin-top: 2rem;
  }
`;

export const ContactActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.65rem;

  @media (max-width: 767px) {
    width: 100%;
    ${ItemButton} { width: 100%; }
  }
`;

export const ContainerContacts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  margin-top: 4rem;
  padding-top: 1.5rem;

  border-top: 1px solid ${COLORS.BORDER};

  @media ${VIEWPORT.tabletUp} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 3rem;
    row-gap: 2.5rem;
  }

  @media ${VIEWPORT.desktopUp} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: center;
    margin-top: 5rem;
    padding-top: 2rem;
    gap: 2.5rem;
  }
`;

export const ContainerContactItem = styled.div`
  display: flex;
  align-items: center;

  min-width: 0;
`;

export const ContainerContactText = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1.25rem;
`;

export const ItemContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  flex-shrink: 0;

  border: 1px solid ${COLORS.BORDER};
  border-radius: 0;

  color: ${COLORS.PRIMARY};

  svg {
    width: 18px;
    height: 18px;
  }

  @media ${VIEWPORT.desktopUp} {
    width: 44px;
    height: 44px;
  }
`;

export const ContactDivider = styled.div`
  display: none;

  width: 1px;
  height: 68px;

  background: ${COLORS.BORDER};

`;


/**
 * Boxes
 */

export const Box = styled.div`
  position: relative;
  z-index: 1;

  width: min(1400px, calc(100% - 48px));
  min-height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  padding: 7rem 0 6rem;

  @media ${VIEWPORT.mobileUp} {
    padding: 5rem 0 4rem;
  }

  @media ${VIEWPORT.desktopUp} {
    width: min(1280px, calc(100% - 160px));

    padding: 8rem 0 6rem;
  }
`;

export const BoxContact = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  justify-content: flex-start;

  > h2 {
    max-width: 800px;
    font-size: clamp(3.5rem, 8vw, 7rem);
    line-height: 0.88;
    letter-spacing: -0.035em;
  }

  @media ${VIEWPORT.desktopUp} {
    > h2 {
      font-size: clamp(5.5rem, 7vw, 7rem);
    }
  }
`;

/**
 * Texts
 */

export const TextContactLabel = styled.span`
  color: ${COLORS.TEXT_TERTIARY};

  font-family: ${FONTS.sfMonoRegular};
  font-size: 0.65rem;

  letter-spacing: 0.08em;

  text-transform: uppercase;
`;

export const TextCopyright = styled.p`
  position: absolute;

  left: 50%;
  bottom: 1.5rem;

  transform: translateX(-50%);

  width: max-content;

  margin: 0;

  color: ${COLORS.TEXT_TERTIARY};

  font-family: ${FONTS.sfMonoLight};

  font-size: 0.65rem;

  letter-spacing: 0.02em;

  text-align: center;

  white-space: nowrap;

  @media ${VIEWPORT.mobileUp} {
    bottom: 1.5rem;

    font-size: 0.6rem;
  }

  @media ${VIEWPORT.desktopUp} {
    bottom: 2rem;

    font-size: 0.7rem;
  }
`;
