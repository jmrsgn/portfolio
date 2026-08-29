import styled from "styled-components/macro";

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

  width: 200px;
  height: 54px;

  border: 1px solid ${COLORS.PRIMARY};

  color: ${COLORS.PRIMARY};
  background: transparent;

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

  &:hover {
    color: ${COLORS.TEXT_INVERSE};
    background: ${COLORS.PRIMARY};

    transform: translateY(-2px);

    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.2);
  }

  @media ${VIEWPORT.mobileUp} {
    width: 100%;
    max-width: 180px;
  }

  @media ${VIEWPORT.desktopUp} {
    width: 210px;
    height: 56px;

    font-size: 0.8rem;
  }
`;

export const ItemContact = styled.a`
  display: inline-flex;
  align-items: center;
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

  background: ${COLORS.BACKGROUND};

  color: ${COLORS.TEXT_PRIMARY};
`;

export const ContainerContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  gap: 2rem;

  @media ${VIEWPORT.desktopUp} {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 4rem;
  }
`;

export const ContainerContacts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  margin-top: 5rem;
  padding-top: 2rem;

  border-top: 1px solid ${COLORS.BORDER};

  @media ${VIEWPORT.tabletUp} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 3rem;
    row-gap: 2.5rem;
  }

  @media ${VIEWPORT.desktopUp} {
    grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
    align-items: center;
    margin-top: 7rem;
    padding-top: 2.5rem;
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

  width: 66px;
  height: 66px;

  flex-shrink: 0;

  border: 1px solid ${COLORS.BORDER};
  border-radius: 12px;

  color: ${COLORS.PRIMARY};

  svg {
    width: 28px;
    height: 28px;
  }

  @media ${VIEWPORT.desktopUp} {
    width: 68px;
    height: 68px;
  }
`;

export const ContactDivider = styled.div`
  display: none;

  width: 1px;
  height: 68px;

  background: ${COLORS.BORDER};

  @media ${VIEWPORT.desktopUp} {
    display: block;
  }
`;

export const ContainerStatusText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextStatusTitle = styled.span`
  margin-bottom: 0.75rem;

  color: #10b981;

  font-family: ${FONTS.sfMonoRegular};
  font-size: 0.75rem;

  letter-spacing: 0.06em;
`;

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1.5rem;

  @media ${VIEWPORT.tabletUp} {
    margin-top: 0;
  }
`;

export const ContainerStatusIndicator = styled.span`
  width: 7px;
  height: 7px;

  margin-right: 0.65rem;

  border-radius: 50%;

  background: ${COLORS.PRIMARY};

  box-shadow: ${COLORS.SHADOW_GLOW_PRIMARY};
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

  padding: 5rem 0 2rem;

  @media ${VIEWPORT.mobileUp} {
    width: calc(100% - 32px);

    padding: 4rem 0 1.5rem;
  }

  @media ${VIEWPORT.desktopUp} {
    width: min(1400px, calc(100% - 80px));

    padding: 5rem 0 2rem;
  }
`;

export const BoxContact = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  justify-content: center;
`;

/**
 * Texts
 */

export const TextTitle = styled.h2`
  margin: 0;

  color: ${COLORS.TEXT_PRIMARY};

  font-family: ${FONTS.calibreBlack};

  font-size: clamp(4rem, 10vw, 7rem);

  font-weight: normal;
  line-height: 0.85;
  letter-spacing: -0.015em;

  @media ${VIEWPORT.mobileUp} {
    font-size: clamp(3.5rem, 16vw, 5rem);

    line-height: 0.88;
  }

  @media ${VIEWPORT.desktopUp} {
    font-size: clamp(5rem, 7vw, 7rem);

    line-height: 0.85;
  }
`;

export const Divider = styled.div`
  width: 52px;
  height: 5px;

  margin-top: 1.5rem;
  margin-bottom: 2rem;

  border-radius: 2px;

  background: ${COLORS.PRIMARY};
`;

export const TextIntro = styled.p`
  flex: 1;
  min-width: 0;
  max-width: 650px;

  margin: 2rem 0 0;

  color: ${COLORS.TEXT_SECONDARY};

  font-family: ${FONTS.calibreRegular};

  font-size: clamp(1.25rem, 1.7vw, 1.55rem);

  line-height: 1.45;
`;

export const TextContactLabel = styled.span`
  color: ${COLORS.TEXT_TERTIARY};

  font-family: ${FONTS.sfMonoRegular};
  font-size: 0.65rem;

  letter-spacing: 0.08em;

  text-transform: uppercase;
`;

export const TextStatus = styled.span`
  color: ${COLORS.TEXT_SECONDARY};

  font-family: ${FONTS.sfMonoRegular};
  font-size: 0.65rem;

  letter-spacing: 0.03em;

  @media ${VIEWPORT.desktopUp} {
    font-size: 0.7rem;
  }
`;

export const TextCopyright = styled.p`
  margin: 3rem 0 0;

  color: ${COLORS.TEXT_TERTIARY};

  font-family: ${FONTS.sfMonoLight};
  font-size: 0.65rem;

  letter-spacing: 0.02em;

  text-align: center;

  @media ${VIEWPORT.desktopUp} {
    margin-top: 3.5rem;

    font-size: 0.7rem;
  }
`;
