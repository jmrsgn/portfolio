import styled from "styled-components/macro";
import * as COLORS from "../../../constants/styles/colors";
import { VIEWPORT } from "../../../constants/viewports";
import {
  _Box,
  _Button,
  _Container,
  _TextDescription,
  _TextGreeting,
  _TextTech,
} from "../../../globalComponents";

/**
 * * Containers
 */

export const Container = styled(_Container)``;

export const ContainerGreetings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${VIEWPORT.desktopUp} {
    width: 50%;
  }
`;

export const ContainerSocials = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;

  @media ${VIEWPORT.desktopUp} {
    margin-top: 2rem;
  }
`;

/**
 * * Boxes
 */

export const Box = styled(_Box)`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  @media ${VIEWPORT.desktopUp} {
    padding: 5rem;
    flex-direction: row;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
`;

export const BoxInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

/**
 * * Texts
 */

export const TextTech = styled(_TextTech)`
  color: ${COLORS.PRIMARY};
`;

export const TextGreeting = styled(_TextGreeting)`
  margin-top: 1rem;

  @media ${VIEWPORT.desktopUp} {
    margin-top: 2rem;
  }
`;

export const TextDescription = styled(_TextDescription)``;

/**
 * * Images
 */

export const Image = styled.img`
  display: none;

  @media ${VIEWPORT.desktopUp} {
    display: block;
    height: auto;
    width: 90%;
    transform: translateX(20%);
  }
`;

/**
 * * Buttons
 */

export const ButtonResume = styled(_Button)`
  margin-top: 1rem;
`;
