import React from "react";
import { Container, Nav } from "./styles/navbar";

export default function NavBar({ children, ...restProps }) {
    return (
        <>
            <Container {...restProps}>{children}</Container> 
        </>
    )
}

NavBar.Nav = function NavBarNav({ children, ...restProps }) {
    return <Nav {...restProps}>{children}</Nav>
}