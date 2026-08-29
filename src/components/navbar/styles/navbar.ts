import styled from "styled-components/macro";

import * as COLORS from "../../../constants/styles/colors";
import { FONTS } from "../../../fonts/fonts";
import { VIEWPORT } from "../../../constants/viewports";

/**
 * Base
 */

export const Container = styled.nav`
  position: relative;

  z-index: 1000;

  color: ${COLORS.TEXT_PRIMARY};
`;

/**
 * Desktop rail
 */

export const DesktopContainer = styled.div`
  display: none;

  @media ${VIEWPORT.desktopUp} {
    position: fixed;

    top: 50%;
    left: 1.5rem;

    z-index: 1000;

    width: 64px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0.75rem;

    transform: translateY(-50%);

    border: 1px solid ${COLORS.BORDER};
    border-radius: 10px;

    background: rgba(10, 14, 22, 0.88);

    backdrop-filter: blur(16px);

    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }
`;

/**
 * Tablet top bar
 */

export const TabletContainer = styled.div`
  display: none;

  @media ${VIEWPORT.tabletUp} {
    position: fixed;

    top: 1rem;
    left: 50%;

    z-index: 1000;

    width: min(900px, calc(100% - 32px));

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.75rem 1rem;

    transform: translateX(-50%);

    border: 1px solid ${COLORS.BORDER};
    border-radius: 8px;

    background: rgba(10, 14, 22, 0.9);

    backdrop-filter: blur(16px);

    box-shadow: 0 16px 50px rgba(0, 0, 0, 0.25);
  }

  @media ${VIEWPORT.desktopUp} {
    display: none;
  }
`;

/**
 * Mobile bottom dock
 */

export const MobileContainer = styled.div`
  position: fixed;

  left: 50%;
  bottom: 1rem;

  z-index: 1000;

  width: calc(100% - 32px);
  max-width: 420px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.55rem;

  transform: translateX(-50%);

  border: 1px solid ${COLORS.BORDER};
  border-radius: 10px;

  background: rgba(10, 14, 22, 0.92);

  backdrop-filter: blur(16px);

  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.35);

  @media ${VIEWPORT.tabletUp} {
    display: none;
  }
`;

/**
 * Desktop navigation
 */

export const DesktopNavigation = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.25rem;
`;

/**
 * Tablet navigation
 */

export const TabletNavigation = styled.div`
  display: flex;
  align-items: center;

  gap: 0.35rem;
`;

/**
 * Navigation item
 */

export const NavigationItem = styled.a<{ $active?: boolean }>`
  position: relative;

  display: flex;

  align-items: center;
  justify-content: center;

  color: ${({ $active }) =>
    $active ? COLORS.PRIMARY_LIGHT : COLORS.TEXT_TERTIARY};

  font-family: ${FONTS.sfMonoRegular};

  text-decoration: none;

  cursor: pointer;

  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: ${COLORS.PRIMARY_LIGHT};
  }

  /**
   * Desktop
   */

  @media ${VIEWPORT.desktopUp} {
    width: 42px;
    height: 42px;

    flex-direction: column;

    gap: 0.2rem;

    border: 1px solid
      ${({ $active }) => ($active ? COLORS.PRIMARY : "transparent")};

    border-radius: 6px;

    &:hover {
      background: rgba(37, 99, 235, 0.05);
    }
  }

  /**
   * Tablet
   */

  @media ${VIEWPORT.tabletUp} {
    width: auto;
    min-height: 38px;

    padding: 0 0.65rem;

    flex-direction: row;

    border: 1px solid
      ${({ $active }) => ($active ? COLORS.PRIMARY_DARK : "transparent")};

    border-radius: 5px;

    font-size: 0.65rem;

    &:hover {
      background: rgba(37, 99, 235, 0.05);
    }
  }

  /**
   * Mobile
   */

  @media ${VIEWPORT.mobileUp} {
    width: 44px;
    height: 44px;

    min-height: 44px;

    padding: 0;

    border-radius: 7px;

    ${({ $active }) =>
      $active &&
      `
        background: rgba(37, 99, 235, 0.08);
      `}
  }
`;

/**
 * Navigation number
 */

export const NavigationNumber = styled.span`
  color: ${COLORS.TEXT_DISABLED};

  font-size: 0.55rem;

  line-height: 1;

  @media ${VIEWPORT.tabletUp} {
    display: none;
  }
`;

/**
 * Navigation label
 */

export const NavigationLabel = styled.span`
  font-size: 0.6rem;

  line-height: 1;

  letter-spacing: 0.04em;

  @media ${VIEWPORT.tabletUp} {
    font-size: 0.65rem;
  }

  @media ${VIEWPORT.mobileUp} {
    display: none;
  }
`;

/**
 * Navigation icon
 */

export const MobileIcon = styled.span`
  display: flex;

  align-items: center;
  justify-content: center;

  color: inherit;

  line-height: 0;

  svg {
    width: 18px;
    height: 18px;
  }

  @media ${VIEWPORT.desktopUp} {
    svg {
      width: 17px;
      height: 17px;
    }
  }
`;

/**
 * Version
 */

export const Version = styled.span`
  margin-top: 0.75rem;

  color: ${COLORS.TEXT_DISABLED};

  font-family: ${FONTS.sfMonoLight};

  font-size: 0.5rem;

  letter-spacing: 0.04em;

  white-space: nowrap;
`;
