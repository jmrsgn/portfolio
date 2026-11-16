import styled from "styled-components";

import * as COLORS from "../../../constants/styles/colors";
import { VIEWPORT } from "../../../constants/viewports";
import { FONTS } from "../../../fonts/fonts";

/**
 * Spotify Now Playing
 *
 * Compact status module, positioned above the mobile navigation.
 */

/**
 * * Container
 */

export const Container = styled.button`
  position: fixed;

  right: 1rem;
  bottom: calc(1rem + env(safe-area-inset-bottom));

  z-index: 9999;

  display: flex;
  align-items: center;

  width: min(300px, calc(100vw - 2rem));
  min-height: 64px;

  padding: 0.65rem 0.75rem;

  box-sizing: border-box;

  background: ${COLORS.SURFACE};

  border: 1px solid ${COLORS.BORDER};

  border-radius: 0;

  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.22);
  color: ${COLORS.TEXT_PRIMARY};
  text-align: left;
  font: inherit;

  cursor: pointer;

  overflow: hidden;

  transition: border-color 180ms ease, transform 180ms ease;

  &::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 2px;

    background: ${COLORS.PRIMARY_LIGHT};

    opacity: 0.8;
  }

  &:hover {
    border-color: ${COLORS.PRIMARY_LIGHT};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media ${VIEWPORT.desktopUp} {
    right: 2rem;
    bottom: 2rem;

    width: 300px;
    min-height: 68px;

    padding: 0.75rem;
  }

  /*
   * Mobile
   */
  @media (max-width: 600px) {
    right: 0.75rem;
    bottom: calc(0.75rem + env(safe-area-inset-bottom));

    width: min(280px, calc(100vw - 1.5rem));

    min-height: 68px;

    padding: 0.6rem 0.65rem;
  }
`;

/**
 * * Track information
 */

export const ContainerTrackInfo = styled.div`
  flex: 1;

  min-width: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 0.85rem;
  margin-right: 0.85rem;

  text-align: left;

  overflow: hidden;

  @media ${VIEWPORT.desktopUp} {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (max-width: 600px) {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
  }
`;

/**
 * * Spotify Icon
 */

export const BoxSpotifyIcon = styled.div`
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  color: ${COLORS.PRIMARY_LIGHT};

  border-left: 1px solid ${COLORS.BORDER};

  padding-left: 0.75rem;

  svg {
    width: 28px;
    height: 28px;

    transition: transform 180ms ease;
  }

  ${Container}:hover & svg {
    transform: translateX(2px);
  }

  @media ${VIEWPORT.desktopUp} {
    width: 42px;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 600px) {
    width: 34px;

    padding-left: 0.6rem;

    svg {
      width: 26px;
      height: 26px;
    }
  }
`;

/**
 * * Album Image
 */

export const Image = styled.img`
  flex-shrink: 0;

  width: 54px;
  height: 54px;

  object-fit: cover;

  border-radius: 0;

  @media ${VIEWPORT.desktopUp} {
    width: 58px;
    height: 58px;
  }

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

/**
 * * Track Name
 */

export const TextTrackName = styled.span`
  display: block;

  width: 100%;

  margin: 0;

  color: ${COLORS.TEXT_PRIMARY};

  font-family: ${FONTS.calibreBold};
  font-size: 1.05rem;
  line-height: 1.1;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${VIEWPORT.desktopUp} {
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

/**
 * * Artist
 */

export const TextTrackInfo = styled.span`
  display: block;

  width: 100%;

  margin: 2px 0 0;

  color: ${COLORS.TEXT_SECONDARY};

  font-family: ${FONTS.sfMonoRegular};
  font-size: 0.67rem;
  line-height: 1.3;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${VIEWPORT.desktopUp} {
    font-size: 0.7rem;
  }

  @media (max-width: 600px) {
    font-size: 0.64rem;
  }
`;

/**
 * * Now Playing
 */

export const TextNowPlaying = styled.span`
  display: flex;
  align-items: center;

  margin: 3px 0 0;

  color: ${COLORS.PRIMARY_LIGHT};

  font-family: ${FONTS.sfMonoRegular};
  font-size: 0.58rem;
  line-height: 1.3;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  &::before {
    content: "";

    width: 5px;
    height: 5px;

    margin-right: 5px;

    border-radius: 50%;

    background: ${COLORS.PRIMARY_LIGHT};
  }

  @media ${VIEWPORT.desktopUp} {
    font-size: 0.6rem;
  }
`;
