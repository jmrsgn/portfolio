import React from "react"
import { Avatar, 
         Box, 
         Container, 
         InfoBox, 
         NavigationIcon, 
         ContactText, 
         ProfileContactTextsContainer, 
         SocialContainer, 
         AboutMeTextContainer,
         TechInfoContainer,
         TechUsedContainer,
         TechImage } from "./styles/about"

export default function About({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

About.Box = function AboutBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

About.InfoBox = function AboutInfoBox({ children, ...restProps }) {
    return <InfoBox {...restProps}>{children}</InfoBox>
}

About.Avatar = function AboutAvatar({ src, ...restProps }) {
    return <Avatar src={src} {...restProps}/>
}

About.NavigationIcon = function AboutNavigatioIcon({ children, ...restProps }) {
    return <NavigationIcon {...restProps}>{children}</NavigationIcon>
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

About.AboutMeTextContainer = function AboutAboutMeTextContainer({ children, ...restProps }) {
    return <AboutMeTextContainer {...restProps}>{children}</AboutMeTextContainer>
}

About.TechInfoContainer = function AboutTechInfoContainer({ children, ...restProps }) {
    return <TechInfoContainer {...restProps}>{children}</TechInfoContainer>
}

About.TechUsedContainer = function AboutTectUsedContainer({ children, ...restProps }) {
    return <TechUsedContainer {...restProps}>{children}</TechUsedContainer>
}

About.TechImage = function AboutTechImage({ src }) {
    return <TechImage src={src} />
}