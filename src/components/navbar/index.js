import React from "react";
import { Container } from "./styles/navbar";

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