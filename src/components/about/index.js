import React from "react"
import { Avatar, Box, Container, InfoBox, Link, ProfileBox, SubBox, NavigationIcon, AvatarInfoContainer, ContactText, ProfileContactTextsContainer, SocialContainer } from "./styles/about"

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

About.NavigationIcon = function AboutNavigatioIcon({ children, ...restProps }) {
    return <NavigationIcon {...restProps}>{children}</NavigationIcon>
}

About.AvatarInfoContainer = function AboutAvatarInfoContainer({ children, ...restProps }) {
    return <AvatarInfoContainer {...restProps}>{children}</AvatarInfoContainer>
}

About.ContactText = function AboutContactText({ children, ...restProps }) {
    return <ContactText {...restProps}>{children}</ContactText>
}

About.ProfileContactTextsContainer = function AboutProfileContactTextsContainer({ children, ...restProps }) {
    return <ProfileContactTextsContainer {...restProps}>{children}</ProfileContactTextsContainer>
}

About.SocialContainer = function AboutSocialContainer({ children, ...restProps }) {
    return <SocialContainer {...restProps}>{children}</SocialContainer>
}