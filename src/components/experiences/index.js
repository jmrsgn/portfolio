import React from "react";
import { Container,
         Box,
         ExperiencesContainer,
         ExperienceTabText,
         Date,
         Position,
         Company,
         SubBox,
         ExperienceTabsContainer,
         ExperienceTab,
         InfoContainer,
         DisplayContainer,
         ExperienceContainer,
         ExperienceTextContainer,
         ExperienceTextRowContainer,
         CertificatesContainer,
         CertificateContainer,
         Certificate,
         CertificateTitle,
         CertificateYear, 
         CertificateInfoContainer,
         Badge,
         BadgesContainer } from './styles/experiences';

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

Experiences.SubBox = function ExperiencesSubBox({ children, ...restProps }) {
    return <SubBox {...restProps}>{children}</SubBox>
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

Experiences.CertificateContainer = function ExperiencesCertificateContainer({ children, ...restProps }) {
    return <CertificateContainer {...restProps}>{children}</CertificateContainer>
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

Experiences.CertificateInfoContainer = function ExperiencesCertificateInfoContainer({ children, ...restProps }) {
    return <CertificateInfoContainer {...restProps}>{children}</CertificateInfoContainer>
}

Experiences.Badge = function ExperiencesBadge({ src, ...restProps }) {
    return <Badge src={src} {...restProps} />
}

Experiences.BadgesContainer = function ExperiencesBadgesContainer({ children, ...restProps }) {
    return <BadgesContainer {...restProps}>{children}</BadgesContainer>
}

