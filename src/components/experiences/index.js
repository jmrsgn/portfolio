import React from "react";
import { ItemBadge,
         Container,
         ContainerInfo,
         ContainerExperienceDisplay,
         ContainerBadges,
         ContainerCertificates,
         ContainerCertificate,
         ContainerCertificateInfo,
         ContainerExperiences,
         Box,
         ExperienceTabText,
         ExperienceTabsContainer,
         ExperienceTab,
         ExperiencesSubBox,
         CertificatesSubBox,
         ExperienceContainer,
         ExperienceTextContainer,
         ExperienceTextRowContainer,
         Certificate,
         CertificateTitle,
         CertificateYear, 
         TextLink,
         TextTitle,
         TextSubTitle, 
         TextCompany,
         TextDate,
         TextPosition } from './styles/experiences';

export default function Experiences({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Experiences.Box = function ExperiencesBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

Experiences.TextDate = function ExperiencesTextDate({ children, ...restProps }) {
    return <TextDate {...restProps}>{children}</TextDate>
}

Experiences.TextPosition = function ExperiencesTextPosition({ children, ...restProps }) {
    return <TextPosition {...restProps}>{children}</TextPosition>
}

Experiences.ExperiencesSubBox = function ExperiencesExperiencesSubBox({ children, ...restProps }) {
    return <ExperiencesSubBox {...restProps}>{children}</ExperiencesSubBox>
}

Experiences.CertificatesSubBox = function ExperiencesCertificatesSubBox({ children, ...restProps }) {
    return <CertificatesSubBox {...restProps}>{children}</CertificatesSubBox>
}

Experiences.ExperienceTabsContainer = function ExperiencesExperienceTabsContainer({ children, ...restProps }) {
    return <ExperienceTabsContainer {...restProps}>{children}</ExperienceTabsContainer>
}

Experiences.ExperienceTab = function ExperiencesExperienceTab({ children, ...restProps }) {
    return <ExperienceTab {...restProps}>{children}</ExperienceTab>
}

Experiences.ExperienceTabText = function ExperiencesExperienceTabText({ children, ...restProps }) {
    return <ExperienceTabText {...restProps}>{children}</ExperienceTabText>
}

Experiences.ExperienceContainer = function ExperiencesExperienceContainer({ children, ...restProps }) {
    return <ExperienceContainer {...restProps}>{children}</ExperienceContainer>
}

Experiences.ExperienceTextContainer = function ExperiencesExperienceTextContainer({ children, ...restProps }) {
    return <ExperienceTextContainer {...restProps}>{children}</ExperienceTextContainer>
}

Experiences.ExperienceTextRowContainer = function ExperiencesExperienceTextRowContainer({ children, ...restProps }) {
    return <ExperienceTextRowContainer {...restProps}>{children}</ExperienceTextRowContainer>
}

Experiences.Certificate = function ExperiencesCertificate({ src, ...restProps }) {
    return <Certificate src={src} {...restProps} />
}

Experiences.CertificateTitle = function ExperiencesCertificateTitle({ children, ...restProps }) {
    return <CertificateTitle {...restProps}>{children}</CertificateTitle>
}

Experiences.CertificateYear = function ExperiencesCertificateYear({ children, ...restProps }) {
    return <CertificateYear {...restProps}>{children}</CertificateYear>
}

/**
 * * Items
 */

Experiences.ItemBadge = function ExperiencesItemBadge({ src, ...restProps }) {
    return <ItemBadge src={src} {...restProps} />
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
