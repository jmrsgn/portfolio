import React from "react";
import { Container, Image, ImageLink, Menu } from "./styles/navbar";

export default function NavBar({ showNavBar, children, ...restProps }) {
    return (
        <>
            {showNavBar && 
                (
                    <Container {...restProps}>{children}</Container> 
                )
            }
        </>
    )
}



NavBar.Image = function NavBarImage({ src, ...restProps }) {
    return <Image {...restProps} src={src} />
}

NavBar.ImageLink = function NavBarImageLink({ children, ...restProps }) {
    return <ImageLink {...restProps}>{children}</ImageLink>
}

NavBar.Menu = function NavBarMenu({ children, ...restProps }) {
    return <Menu {...restProps}>{children}</Menu>
}