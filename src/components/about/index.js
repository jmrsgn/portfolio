import React from "react"
import { Avatar, Box, Container, InfoBox, Link, ProfileBox, SubBox } from "./styles/about"

export default function About({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

About.Box = function AboutBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

About.SubBox = function AboutSubBox({ children, ...restProps }) {
    return <SubBox {...restProps}>{children}</SubBox>
}

About.InfoBox = function AboutInfoBox({ children, ...restProps }) {
    return <InfoBox {...restProps}>{children}</InfoBox>
}

About.Avatar = function AboutAvatar({ src, ...restProps }) {
    return <Avatar src={src} {...restProps}/>
}

About.ProfileBox = function AboutProfileBox({ children, ...restProps }) {
    return <ProfileBox {...restProps}>{children}</ProfileBox>
}

About.Link = function AboutLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}