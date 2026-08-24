import React from "react";
import { NavBar } from "../components";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineSquares2X2,
  HiOutlineBriefcase,
  HiOutlineEnvelope,
} from "react-icons/hi2";

import navigationData from "../fixtures/navigation.json";
import * as COLORS from "../constants/styles/colors";

type NavigationName = "home" | "about" | "projects" | "experiences" | "contact";

type NavBarContainerProps = {
  visibleTab?: NavigationName | "";
};

export function NavBarContainer({ visibleTab }: NavBarContainerProps) {
  const navButtons: Record<NavigationName, React.ReactNode> = {
    home: <HiOutlineHome size={25} />,
    about: <HiOutlineUser size={25} />,
    projects: <HiOutlineSquares2X2 size={25} />,
    experiences: <HiOutlineBriefcase size={25} />,
    contact: <HiOutlineEnvelope size={25} />,
  };

  return (
    <NavBar>
      {navigationData.map((item) => {
        const name = item.name as NavigationName;

        return (
          <NavBar.Nav
            key={item.name}
            href={item.to}
            active={visibleTab === name ? "true" : "false"}
            color={COLORS.PRIMARY}
          >
            {navButtons[name]}
          </NavBar.Nav>
        );
      })}
    </NavBar>
  );
}
