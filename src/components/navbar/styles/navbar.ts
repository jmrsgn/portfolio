import styled from "styled-components/macro";
import * as COLORS from "../../../constants/styles/colors";
import { VIEWPORT } from "../../../constants/viewports";

type NavProps = {
  active?: string;
};

export const Nav = styled.a<NavProps>`
  height: 30px;
  margin: 1.25rem 1rem 1.25rem 1rem;
  cursor: pointer;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  svg {
    color: ${({ active, color }) =>
      active === "true" ? color : `${COLORS.TEXT_PRIMARY}`};
    transition: 0.3s ease-in;

    &:hover {
      color: ${({ color }) => color};
    }
  }
`;

export const Container = styled.div`
  height: 2rem;
  padding: 2rem;
  width: 100vw;
  bottom: 0;
  overflow: hidden;
  position: fixed;
  z-index: 1;

  background-color: #13171fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media ${VIEWPORT.desktopUp} {
    padding: 0;
    height: 40vh;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 0px 10px 10px 0px;
    width: 4rem;
    top: 50%;
    bottom: 50%;
    flex-direction: column;
    justify-content: center;
  }
`;
