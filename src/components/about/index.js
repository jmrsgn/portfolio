import React from "react"
import { Container, 
         ContainerAboutMeText,
         ContainerTechInfo,
         ContainerTechUsed,
         ContainerTechUsedText,
         Box, 
         BoxInfo, 
         BoxInfoTech,
         NavigationIcon, 
         ContactText, 
         ProfileContactTextsContainer, 
         SocialContainer,
         TechDivider,
         TextLink, 
         TextDescription,
         TextTitle,
         TextTechUsed,
         TextTitleOther,
         ImageAvatar, 
         ImageTech } from "./styles/about"

export default function About({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

/**
 * * Containers
 */

About.ContainerAboutMeText = function AboutContainerAboutMeText({ children, ...restProps }) {
    return <ContainerAboutMeText {...restProps}>{children}</ContainerAboutMeText>
}

About.ContainerTechInfo = function AboutContainerTechInfo({ children, ...restProps }) {
    return <ContainerTechInfo {...restProps}>{children}</ContainerTechInfo>
}

About.ContainerTechUsed = function AboutContainerTechUsed({ children, ...restProps }) {
    return <ContainerTechUsed {...restProps}>{children}</ContainerTechUsed>
}

About.ContainerTechUsedText = function AboutContainerTechUsedText({ children, ...restProps }) {
    return <ContainerTechUsedText { ...restProps}>{children}</ContainerTechUsedText>
}

/**
 * * Boxes
 */

About.Box = function AboutBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

About.BoxInfo = function AboutBoxInfo({ children, ...restProps }) {
    return <BoxInfo {...restProps}>{children}</BoxInfo>
}

About.BoxInfoTech = function AboutBoxInfoTech({ children, ...restProps }) {
    return <BoxInfoTech {...restProps}>{children}</BoxInfoTech>
}


/**
 * ! NOT ORGANIZED
 */

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

About.TechDivider = function AboutTechDivider({ ...restProps }) {
    return <TechDivider {...restProps} />
}

/**
 * * Texts
 */

About.TextLink = function AboutTextLink({ children, ...restProps }) {
    return <TextLink {...restProps}>{children}</TextLink>
}

About.TextDescription = function AboutTextDescription({ children, ...restProps }) {
    return <TextDescription {...restProps}>{children}</TextDescription>
}

About.TextTitle = function AboutTextTitle({ children, ...restProps }) {
    return <TextTitle {...restProps}>{children}</TextTitle>
}

About.TextTechUsed = function AboutTextTechUsed({ children, ...restProps }) {
    return <TextTechUsed {...restProps}>{children}</TextTechUsed>
}

About.TextTitleOther = function AboutTextTitleOther({ children, ...restProps }) {
    return <TextTitleOther {...restProps}>{children}</TextTitleOther>
}

/** 
 * * Images
 */

About.ImageAvatar = function AboutImageAvatar({ src, ...restProps }) {
    return <ImageAvatar src={src} {...restProps}/>
}

About.ImageTech = function AboutImageTech({ src }) {
    return <ImageTech src={src} />
}