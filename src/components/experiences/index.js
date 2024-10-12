import React from "react";
import { ItemBadge,
         ItemCertificate,
         ItemExperienceTab,
         ItemNavigationIcon,
         Container,
         ContainerInfo,
         ContainerNavigation,
         ContainerExperienceDisplay,
         ContainerBadges,
         ContainerCertificates,
         ContainerCertificate,
         ContainerCertificateInfo,
         ContainerExperiences,
         ContainerExperience,
         ContainerExperienceText,
         ContainerExperienceTabs,
         Box,
         BoxExperiences,
         BoxCertificates,
         TextExperienceTab,
         TextCertificateTitle,
         TextCertificateYear, 
         TextLink,
         TextTitle,
         TextSubTitle, 
         TextCompany,
         TextDate,
         TextDescription,
         TextPosition } from './styles/experiences';

export default function Experiences({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

/**
 * * Items
 */

Experiences.ItemExperienceTab = function ExperiencesItemExperienceTab({ children, ...restProps }) {
    return <ItemExperienceTab {...restProps}>{children}</ItemExperienceTab>
}

Experiences.ItemBadge = function ExperiencesItemBadge({ src, ...restProps }) {
    return <ItemBadge src={src} {...restProps} />
}

Experiences.ItemCertificate = function ExperiencesItemCertificate({ src, ...restProps }) {
    return <ItemCertificate src={src} {...restProps} />
}

Experiences.ItemNavigationIcon = function ExperiencesItemNavigationIcon({ children, ...restProps }) {
    return <ItemNavigationIcon {...restProps}>{children}</ItemNavigationIcon>
}

/**
 * * Containers
 */

Experiences.ContainerCertificate = function ExperiencesContainerCertificate({ children, ...restProps }) {
    return <ContainerCertificate {...restProps}>{children}</ContainerCertificate>
}

Experiences.ContainerCertificateInfo = function ExperiencesContainerCertificateInfo({ children, ...restProps }) {
    return <ContainerCertificateInfo {...restProps}>{children}</ContainerCertificateInfo>
}

Experiences.ContainerInfo = function ExperiencesContainerInfo({ children, ...restProps }) {
    return <ContainerInfo {...restProps}>{children}</ContainerInfo>
}

Experiences.ContainerExperienceDisplay = function ExperiencesContainerExperienceDisplay({ children, ...restProps }) {
    return <ContainerExperienceDisplay {...restProps}>{children}</ContainerExperienceDisplay>
}

Experiences.ContainerBadges = function ExperiencesContainerBadges({ children, ...restProps }) {
    return <ContainerBadges {...restProps}>{children}</ContainerBadges>
}

Experiences.ContainerCertificates = function ExperiencesContainerCertificates({ children, ...restProps }) {
    return <ContainerCertificates {...restProps}>{children}</ContainerCertificates>
}

Experiences.ContainerExperiences = function ExperiencesContainerExperiences({ children, ...restProps }) {
    return <ContainerExperiences {...restProps}>{children}</ContainerExperiences>
}

Experiences.ContainerExperience = function ExperiencesContainerExperience({ children, ...restProps }) {
    return <ContainerExperience {...restProps}>{children}</ContainerExperience>
}

Experiences.ContainerExperienceText = function ExperiencesContainerExperienceText({ children, ...restProps }) {
    return <ContainerExperienceText {...restProps}>{children}</ContainerExperienceText>
}

Experiences.ContainerExperienceTabs = function ExperiencesContainerExperienceTabs({ children, ...restProps }) {
    return <ContainerExperienceTabs {...restProps}>{children}</ContainerExperienceTabs>
}

Experiences.ContainerNavigation = function ExperiencesContainerNavigation({ children, ...restProps }) {
    return <ContainerNavigation {...restProps}>{children}</ContainerNavigation>
}

/**
 * * Boxes
 */

Experiences.Box = function ExperiencesBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

Experiences.BoxExperiences = function ExperiencesBoxExperiences({ children, ...restProps }) {
    return <BoxExperiences {...restProps}>{children}</BoxExperiences>
}

Experiences.BoxCertificates = function ExperiencesBoxCertificates({ children, ...restProps }) {
    return <BoxCertificates {...restProps}>{children}</BoxCertificates>
}

/**
 * * Texts
 */

Experiences.TextTitle = function ExperiencesTextTitle({ children, ...restProps }) {
    return <TextTitle {...restProps}>{children}</TextTitle>
}

Experiences.TextLink = function ExperiencesTextLink({ children, ...restProps }) {
    return <TextLink {...restProps}>{children}</TextLink>
}

Experiences.TextSubTitle = function ExperiencesTextSubTitle({ children, ...restProps }) {
    return <TextSubTitle {...restProps}>{children}</TextSubTitle>
}

Experiences.TextCompany = function ExperiencesTextCompany({ children, ...restProps }) {
    return <TextCompany {...restProps}>{children}</TextCompany>
}

Experiences.TextCertificateTitle = function ExperiencesTextCertificateTitle({ children, ...restProps }) {
    return <TextCertificateTitle {...restProps}>{children}</TextCertificateTitle>
}

Experiences.TextCertificateYear = function ExperiencesTextCertificateYear({ children, ...restProps }) {
    return <TextCertificateYear {...restProps}>{children}</TextCertificateYear>
}

Experiences.TextDate = function ExperiencesTextDate({ children, ...restProps }) {
    return <TextDate {...restProps}>{children}</TextDate>
}

Experiences.TextPosition = function ExperiencesTextPosition({ children, ...restProps }) {
    return <TextPosition {...restProps}>{children}</TextPosition>
}

Experiences.TextExperienceTab = function ExperiencesTextExperienceTab({ children, ...restProps }) {
    return <TextExperienceTab {...restProps}>{children}</TextExperienceTab>
}

Experiences.TextDescription = function ExperiencesTextDescription({ children, ...restProps }) {
    return <TextDescription {...restProps}>{children}</TextDescription>
}