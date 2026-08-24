import React from "react";
import { Container, Nav } from "./styles/navbar";

type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;
type NavBarProps = StyledProps<typeof Container>;

export default function NavBar({ children, ...restProps }: NavBarProps) {
  return (
    <>
      <Container {...restProps}>{children}</Container>
    </>
  );
}

type NavBarNavProps = StyledProps<typeof Nav>;

NavBar.Nav = function Component({ children, ...restProps }: NavBarNavProps) {
  return <Nav {...restProps}>{children}</Nav>;
};
