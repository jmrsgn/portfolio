import React from "react"
import { ItemNavigationIcon,
         ItemSocialIconNavigation,
         ItemButton,
         ItemSocialIcon,
         Container, 
         ContainerAboutMeText,
         ContainerTechInfo,
         ContainerTechUsed,
         ContainerTechUsedText,
         ContainerAvatarInfo,
         ContainerProfileContactTexts,
         ContainerSocial,
         ContainerContacts,
         ContainerBusinessShopButtons,
         ContainerDivider,
         ContainerNavigaton,
         Box, 
         BoxInfo, 
         BoxInfoTech,
         BoxProfileInfo,
         BoxProfile,
         TextLink, 
         TextDescription,
         TextTitle,
         TextTechUsed,
         TextTitleOther,
         TextSubTitle,
         TextContact,
         TextDescriptionHighlight,
         TextBusinessShopTitle,
         ImageAvatar, 
         ImageTech } from "./styles/about"

export default function About({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

/**
 * * Items
 */

About.ItemNavigationIcon = function AboutItemNavigationIcon({ children, ...restProps }) {
    return <ItemNavigationIcon {...restProps}>{children}</ItemNavigationIcon>
}

About.ItemSocialIconNavigation = function AboutItemSocialIconNavigation({ children, ...restProps }) {
    return <ItemSocialIconNavigation {...restProps}>{children}</ItemSocialIconNavigation>
}

About.ItemButton = function AboutItemButton({ children, ...restProps }) {
    return <ItemButton {...restProps}>{children}</ItemButton>
}

About.ItemSocialIcon = function AboutItemSocialIcon({ children, ...restProps }) {
    return <ItemSocialIcon {...restProps}>{children}</ItemSocialIcon>
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

About.ContainerAvatarInfo = function AboutContainerAvatarInfo({ children, ...restProps }) {
    return <ContainerAvatarInfo { ...restProps}>{children}</ContainerAvatarInfo>
}

About.ContainerProfileContactTexts = function AboutContainerProfileContactTexts({ children, ...restProps }) {
    return <ContainerProfileContactTexts {...restProps}>{children}</ContainerProfileContactTexts>
}

About.ContainerSocial = function AboutContainerSocial({ children, ...restProps }) {
    return <ContainerSocial {...restProps}>{children}</ContainerSocial>
}

About.ContainerContacts = function AboutContainerContacts({ children, ...restProps }) {
    return <ContainerContacts {...restProps}>{children}</ContainerContacts>
}

About.ContainerBusinessShopButtons = function AboutContainerBusinessShopButtons({ children, ...restProps }) {
    return <ContainerBusinessShopButtons {...restProps}>{children}</ContainerBusinessShopButtons>
}

About.ContainerDivider = function AboutContainerDivider({ children, ...restProps }) {
    return <ContainerDivider {...restProps}>{children}</ContainerDivider>
}

About.ContainerNavigaton = function AboutContainerNavigaton({ children, ...restProps }) {
    return <ContainerNavigaton {...restProps}>{children}</ContainerNavigaton>
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

About.BoxProfile = function AboutBoxProfile({ children, ...restProps }) {
    return <BoxProfile {...restProps}>{children}</BoxProfile>
}

About.BoxProfileInfo = function AboutBoxProfileInfo({ children, ...restProps }) {
    return <BoxProfileInfo {...restProps}>{children}</BoxProfileInfo>
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

About.TextContact = function AboutTextContact({ children, ...restProps }) {
    return <TextContact {...restProps}>{children}</TextContact>
}

About.TextSubTitle = function AboutTextSubTitle({ children, ...restProps }) {
    return <TextSubTitle {...restProps}>{children}</TextSubTitle>
}

About.TextDescriptionHighlight = function AboutTextDescriptionHighlight({ children, ...restProps }) {
    return <TextDescriptionHighlight {...restProps}>{children}</TextDescriptionHighlight>
}

About.TextBusinessShopTitle = function AboutTextBusinessShopTitle({ children, ...restProps }) {
    return <TextBusinessShopTitle {...restProps}>{children}</TextBusinessShopTitle>
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