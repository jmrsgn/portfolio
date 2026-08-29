import React from "react";

import {
  Container,
  DesktopContainer,
  TabletContainer,
  MobileContainer,
  DesktopNavigation,
  TabletNavigation,
  NavigationItem,
  NavigationNumber,
  NavigationLabel,
  MobileIcon,
  Version,
} from "./styles/navbar";

type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;

type NavBarProps = StyledProps<typeof Container>;

type NavBarComponent = React.FC<NavBarProps> & {
  DesktopContainer: React.FC<StyledProps<typeof DesktopContainer>>;
  TabletContainer: React.FC<StyledProps<typeof TabletContainer>>;
  MobileContainer: React.FC<StyledProps<typeof MobileContainer>>;

  DesktopNavigation: React.FC<StyledProps<typeof DesktopNavigation>>;
  TabletNavigation: React.FC<StyledProps<typeof TabletNavigation>>;

  NavigationItem: React.FC<StyledProps<typeof NavigationItem>>;
  NavigationNumber: React.FC<StyledProps<typeof NavigationNumber>>;
  NavigationLabel: React.FC<StyledProps<typeof NavigationLabel>>;

  MobileIcon: React.FC<StyledProps<typeof MobileIcon>>;

  Version: React.FC<StyledProps<typeof Version>>;
};

const NavBar = function NavBar({ children, ...restProps }: NavBarProps) {
  return <Container {...restProps}>{children}</Container>;
} as NavBarComponent;

/**
 * Desktop / Tablet / Mobile containers
 */

NavBar.DesktopContainer = ({ children, ...restProps }) => {
  return <DesktopContainer {...restProps}>{children}</DesktopContainer>;
};

NavBar.TabletContainer = ({ children, ...restProps }) => {
  return <TabletContainer {...restProps}>{children}</TabletContainer>;
};

NavBar.MobileContainer = ({ children, ...restProps }) => {
  return <MobileContainer {...restProps}>{children}</MobileContainer>;
};

/**
 * Navigation
 */

NavBar.DesktopNavigation = ({ children, ...restProps }) => {
  return <DesktopNavigation {...restProps}>{children}</DesktopNavigation>;
};

NavBar.TabletNavigation = ({ children, ...restProps }) => {
  return <TabletNavigation {...restProps}>{children}</TabletNavigation>;
};

NavBar.NavigationItem = ({ children, ...restProps }) => {
  return <NavigationItem {...restProps}>{children}</NavigationItem>;
};

NavBar.NavigationNumber = ({ children, ...restProps }) => {
  return <NavigationNumber {...restProps}>{children}</NavigationNumber>;
};

NavBar.NavigationLabel = ({ children, ...restProps }) => {
  return <NavigationLabel {...restProps}>{children}</NavigationLabel>;
};

/**
 * Icon
 */

NavBar.MobileIcon = ({ children, ...restProps }) => {
  return <MobileIcon {...restProps}>{children}</MobileIcon>;
};

/**
 * Version
 */

NavBar.Version = ({ children, ...restProps }) => {
  return <Version {...restProps}>{children}</Version>;
};

export default NavBar;
