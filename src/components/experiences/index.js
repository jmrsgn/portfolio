import React from "react";
import { Container,
         Box,
         ExperiencesContainer,
         ExperienceTabText,
         Date,
         Position,
         Company,
         SubTitleSubBox,
         ExperienceTabsContainer,
         ExperienceTab,
         ExperiencesSubBox,
         CertificatesSubBox,
         InfoContainer,
         DisplayContainer,
         ExperienceContainer,
         ExperienceTextContainer,
         ExperienceTextRowContainer,
         CertificatesContainer,
         Certificate,
         CertificateTitle,
         CertificateYear, 
         ContainerCertificate,
         ContainerCertificateInfo,
         Badge,
         BadgesContainer, 
         LinkCertificatesSeeMore,
         LinkExperiencesReadMore } from './styles/experiences';

export default function Experiences({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Experiences.Box = function ExperiencesBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

Experiences.InfoContainer = function ExperiencesInfoContainer({ children, ...restProps }) {
    return <InfoContainer {...restProps}>{children}</InfoContainer>
}

Experiences.DisplayContainer = function ExperiencesDisplayContainer({ children, ...restProps }) {
    return <DisplayContainer {...restProps}>{children}</DisplayContainer>
}

Experiences.ExperiencesContainer = function ExperiencesExperiencesContainer({ children, ...restProps }) {
    return <ExperiencesContainer {...restProps}>{children}</ExperiencesContainer>
}

Experiences.Date = function ExperiencesDate({ children, ...restProps }) {
    return <Date {...restProps}>{children}</Date>
}

Experiences.Position = function ExperiencesPosition({ children, ...restProps }) {
    return <Position {...restProps}>{children}</Position>
}

Experiences.Company = function ExperiencesCompany({ children, ...restProps }) {
    return <Company {...restProps}>{children}</Company>
}

Experiences.SubTitleSubBox = function ExperiencesSubTitleSubBox({ children, ...restProps }) {
    return <SubTitleSubBox {...restProps}>{children}</SubTitleSubBox>
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

Experiences.CertificatesContainter = function ExperiencesCertificatesContainer({ children, ...restProps }) {
    return <CertificatesContainer {...restProps}>{children}</CertificatesContainer>
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

Experiences.Badge = function ExperiencesBadge({ src, ...restProps }) {
    return <Badge src={src} {...restProps} />
}

Experiences.BadgesContainer = function ExperiencesBadgesContainer({ children, ...restProps }) {
    return <BadgesContainer {...restProps}>{children}</BadgesContainer>
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

/**
 *  * Links
 */

Experiences.LinkExperiencesReadMore = function ExperiencesLinkExperiencesReadMore({ children, ...restProps }) {
    return <LinkExperiencesReadMore {...restProps}>{children}</LinkExperiencesReadMore>
}

Experiences.LinkCertificatesSeeMore = function ExperiencesLinkCertificatesSeeMore({ children, ...restProps }) {
    return <LinkCertificatesSeeMore {...restProps}>{children}</LinkCertificatesSeeMore>
}