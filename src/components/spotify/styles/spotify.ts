import styled from "styled-components";
import * as COLORS from "../../../constants/styles/colors";
import { DescriptionText } from "../../../globalComponents";
import { VIEWPORT } from "../../../constants/viewports";

type ContainerProps = {
  isHidden?: boolean;
};

/**
 * * Containers
 */

export const Container = styled.div<ContainerProps>`
  max-width: 250px;
  min-width: 200px;
  min-height: 55px;
  background-color: #121212;
  justify-content: space-between;
  border-radius: 8px;
  align-items: center;
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 0 0.25rem 4.25rem 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  padding: 0.75rem;
  cursor: pointer;

  ${({ isHidden }) =>
    isHidden &&
    `
        transform: translateX(100%);  // Slide off to the right
        opacity: 0;                   // Fade out
    `}

  @media ${VIEWPORT.desktopUp} {
    max-width: 300px;
    min-width: 250px;
    min-height: 75px;
    right: 0;
    bottom: 0;
    margin: 0 2rem 2rem 0;
    padding: 0.75rem;
  }
`;

export const ContainerTrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  height: 100%;
  text-align: left;
  justify-content: center;
  width: 90px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${VIEWPORT.desktopUp} {
    width: 120px;
    margin-right: 1.5rem;
  }
`;

/**
 * * Boxes
 */

export const BoxSpotifyIcon = styled.div`
  color: ${COLORS.COLOR_ON_SURFACE};

  svg {
    height: 32px;
    width: 32px;

    @media ${VIEWPORT.desktopUp} {
      height: 38px;
      width: 38px;
    }
  }
`;

/**
 * * Images
 */

export const Image = styled.img`
  border-radius: 5px;
  height: 50px;
  width: auto;

  @media ${VIEWPORT.desktopUp} {
    height: 60px;
  }
`;

/**
 * * Texts
 */

export const TextNowPlaying = styled(DescriptionText)`
  font-size: 0.75rem;
  color: ${COLORS.COLOR_ON_SURFACE};
  font-weight: bold;
  margin-top: 0rem;
  line-height: 16px;

  @media ${VIEWPORT.desktopUp} {
    font-size: 0.85rem;
    margin-top: 0.25rem;
    line-height: 14px;
  }
`;

export const TextTrackName = styled(DescriptionText)`
  font-weight: bold;
  color: #fefefe;
  font-size: 15px !important;
  line-height: 16px;

  @media ${VIEWPORT.desktopUp} {
    font-size: 18px !important;
    line-height: 18px;
  }
`;

export const TextTrackInfo = styled(DescriptionText)`
  font-size: 12px !important;
  color: #ababab;
  margin-top: 0rem;
  line-height: 16px;

  @media ${VIEWPORT.desktopUp} {
    font-size: 14px !important;
    margin-top: 0.25rem;
    line-height: 14px;
  }
`;
