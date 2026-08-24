import React from "react";
import { Container, Nav } from "./styles/navbar";

type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;
type NavBarProps = StyledProps<typeof Container>;
type NavBarNavProps = StyledProps<typeof Nav>;

export default function NavBar({ children, ...restProps }: NavBarProps) {
  return (
    <>
      <Container {...restProps}>{children}</Container>
    </>
  );
}

NavBar.Nav = function NavBarNav({ children, ...restProps }: NavBarNavProps) {
  return <Nav {...restProps}>{children}</Nav>;
};
