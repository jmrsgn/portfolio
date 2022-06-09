import React from "react";
import { Container,
         Box,
         CertificatesContainer,
         Certificate,
         CertificateTitle,
         CertificateDate,
         CertificateImage,
         BadgesContainer,
         Badge } from './styles/certbadges';

export default function CertBadges({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

CertBadges.Box = function CertBadgesBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

CertBadges.CertificatesContainer = function CertBadgesCertificatesContainer({ children, ...restProps }) {
    return <CertificatesContainer {...restProps}>{children}</CertificatesContainer>
}

CertBadges.Certificate = function CertBadgesCertificate({ children, ...restProps }) {
    return <Certificate {...restProps}>{children}</Certificate>
}

CertBadges.CertificateTitle = function CertBadgesCertificateTitle({ children, ...restProps }) {
    return <CertificateTitle {...restProps}>{children}</CertificateTitle>
}

CertBadges.CertificateDate = function CertBadgesCertificateDate({ children, ...restProps }) {
    return <CertificateDate {...restProps}>{children}</CertificateDate>
}

CertBadges.CertificateImage = function CertBadgesCertificateImage({ src, ...restProps }) {
    return <CertificateImage {...restProps} src={src} />
}

CertBadges.BadgesContainer = function CertBadgesBadgesContainer({ children, ...restProps }) {
    return <BadgesContainer {...restProps}>{children}</BadgesContainer>
}

CertBadges.Badge = function CertBadgesBadge({ src, ...restProps }) {
    return <Badge {...restProps} src={src} />
}