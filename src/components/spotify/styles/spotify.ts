import styled from "styled-components";

import * as COLORS from "../../../constants/styles/colors";
import { DescriptionText } from "../../../globalComponents";
import { VIEWPORT } from "../../../constants/viewports";

/**
 * Spotify Now Playing
 *
 * Design:
 * - Dark glass surface
 * - Subtle portfolio-green accent
 * - Strong visual hierarchy
 * - Responsive on mobile
 * - Always above page content
 * - Safe-area aware
 */

/**
 * * Container
 */

export const Container = styled.div`
  position: fixed;

  right: 1rem;
  bottom: calc(1rem + env(safe-area-inset-bottom));

  z-index: 9999;

  display: flex;
  align-items: center;

  width: min(320px, calc(100vw - 2rem));
  min-height: 72px;

  padding: 0.65rem 0.75rem;

  box-sizing: border-box;

  background: linear-gradient(
    135deg,
    rgba(28, 28, 28, 0.96),
    rgba(14, 14, 14, 0.96)
  );

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 12px;

  box-shadow:
    0 12px 35px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(255, 255, 255, 0.02),
    0 0 25px rgba(30, 215, 96, 0.08);

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  cursor: pointer;

  overflow: hidden;

  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;

  /*
   * Subtle Spotify-green accent line.
   */
  &::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 2px;

    background: ${COLORS.TEXT_PRIMARY};

    opacity: 0.8;
  }

  &:hover {
    transform: translateY(-3px);

    border-color: rgba(255, 255, 255, 0.16);

    box-shadow:
      0 16px 40px rgba(0, 0, 0, 0.5),
      0 0 30px rgba(30, 215, 96, 0.12);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media ${VIEWPORT.desktopUp} {
    right: 2rem;
    bottom: 2rem;

    width: 320px;
    min-height: 78px;

    padding: 0.75rem;
  }

  /*
   * Mobile
   */
  @media (max-width: 600px) {
    right: 0.75rem;
    bottom: calc(0.75rem + env(safe-area-inset-bottom));

    width: calc(100vw - 1.5rem);
    max-width: 360px;

    min-height: 68px;

    padding: 0.6rem 0.65rem;

    border-radius: 11px;
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

  color: ${COLORS.TEXT_PRIMARY};

  border-left: 1px solid rgba(255, 255, 255, 0.08);

  padding-left: 0.75rem;

  svg {
    width: 28px;
    height: 28px;

    transition:
      transform 180ms ease,
      filter 180ms ease;
  }

  ${Container}:hover & svg {
    transform: scale(1.08);

    filter: drop-shadow(0 0 8px rgba(30, 215, 96, 0.35));
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

  border-radius: 7px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);

  @media ${VIEWPORT.desktopUp} {
    width: 58px;
    height: 58px;

    border-radius: 8px;
  }

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;

    border-radius: 6px;
  }
`;

/**
 * * Track Name
 */

export const TextTrackName = styled(DescriptionText)`
  display: block;

  width: 100%;

  margin: 0;

  color: #f5f5f5;

  font-size: 15px !important;
  font-weight: 600;

  line-height: 18px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${VIEWPORT.desktopUp} {
    font-size: 16px !important;

    line-height: 19px;
  }

  @media (max-width: 600px) {
    font-size: 14px !important;

    line-height: 17px;
  }
`;

/**
 * * Artist
 */

export const TextTrackInfo = styled(DescriptionText)`
  display: block;

  width: 100%;

  margin: 2px 0 0;

  color: #9b9b9b;

  font-size: 12px !important;
  font-weight: 400;

  line-height: 15px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${VIEWPORT.desktopUp} {
    font-size: 13px !important;

    line-height: 16px;
  }

  @media (max-width: 600px) {
    font-size: 11px !important;

    line-height: 14px;
  }
`;

/**
 * * Now Playing
 */

export const TextNowPlaying = styled(DescriptionText)`
  display: flex;
  align-items: center;

  margin: 3px 0 0;

  color: ${COLORS.TEXT_PRIMARY};

  font-size: 9px !important;
  font-weight: 600;

  line-height: 12px;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  &::before {
    content: "";

    width: 5px;
    height: 5px;

    margin-right: 5px;

    border-radius: 50%;

    background: ${COLORS.TEXT_PRIMARY};

    box-shadow: 0 0 6px ${COLORS.TEXT_PRIMARY};
  }

  @media ${VIEWPORT.desktopUp} {
    font-size: 10px !important;

    line-height: 13px;
  }
`;
