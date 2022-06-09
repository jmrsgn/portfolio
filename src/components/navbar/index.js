import React from "react";
import { Container, Image } from "./styles/navbar";

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