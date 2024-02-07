import React from "react";
import { Container,
         Box,
         SkillsContainer,
         Skill,
         SkillImage,
         SkillTitle,
         ExperiencesContainer,
         ExperienceTabText,
         Experience,
         Date,
         Position,
         Company,
         Arrow, 
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
         BadgesContainer} from './styles/skills-exp';

export default function SkillsExp({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

SkillsExp.Box = function SkillsExpBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

SkillsExp.SkillsContainer = function SkillsExpSkillsContainer({ children, ...restProps }) {
    return <SkillsContainer {...restProps}>{children}</SkillsContainer>
}

SkillsExp.Skill = function SkillsExpSkill({ children, ...restProps }) {
    return <Skill {...restProps}>{children}</Skill>
}

SkillsExp.SkillImage = function SkillsExpSkillImage({ src, ...restProps }) {
    return <SkillImage {...restProps} src={src} />
}

SkillsExp.SkillTitle = function SkillsExpSkillTitle({ children, ...restProps }) {
    return <SkillTitle {...restProps}>{children}</SkillTitle>
}

SkillsExp.InfoContainer = function SkillsExpInfoContainer({ children, ...restProps }) {
    return <InfoContainer {...restProps}>{children}</InfoContainer>
}

SkillsExp.DisplayContainer = function SkillsExpDisplayContainer({ children, ...restProps }) {
    return <DisplayContainer {...restProps}>{children}</DisplayContainer>
}

SkillsExp.ExperiencesContainer = function SkillsExpExperiencesContainer({ children, ...restProps }) {
    return <ExperiencesContainer {...restProps}>{children}</ExperiencesContainer>
}

SkillsExp.Experience = function SkillsExpExperience({ children, ...restProps }) {
    return <Experience {...restProps}>{children}</Experience>
}

SkillsExp.Date = function SkillsExpDate({ children, ...restProps }) {
    return <Date {...restProps}>{children}</Date>
}

SkillsExp.Position = function SkillsExpPosition({ children, ...restProps }) {
    return <Position {...restProps}>{children}</Position>
}

SkillsExp.Company = function SkillsExpCompany({ children, ...restProps }) {
    return <Company {...restProps}>{children}</Company>
}

SkillsExp.Arrow = function SkillsExpArrow({ ...restProps }) {
    return <Arrow {...restProps} />
}

SkillsExp.SubBox = function SkillsExpSubBox({ children, ...restProps }) {
    return <SubBox {...restProps}>{children}</SubBox>
}

SkillsExp.ExperienceTabsContainer = function SkillsExpExperienceTabsContainer({ children, ...restProps }) {
    return <ExperienceTabsContainer {...restProps}>{children}</ExperienceTabsContainer>
}

SkillsExp.ExperienceTab = function SkillsExpExperienceTab({ children, ...restProps }) {
    return <ExperienceTab {...restProps}>{children}</ExperienceTab>
}

SkillsExp.ExperienceTabText = function SkillsExpExperienceTabText({ children, ...restProps }) {
    return <ExperienceTabText {...restProps}>{children}</ExperienceTabText>
}

SkillsExp.ExperienceContainer = function SkillsExpExperienceContainer({ children, ...restProps }) {
    return <ExperienceContainer {...restProps}>{children}</ExperienceContainer>
}

SkillsExp.ExperienceTextContainer = function SkillsExpExperienceTextContainer({ children, ...restProps }) {
    return <ExperienceTextContainer {...restProps}>{children}</ExperienceTextContainer>
}

SkillsExp.ExperienceTextRowContainer = function SkillsExpExperienceTextRowContainer({ children, ...restProps }) {
    return <ExperienceTextRowContainer {...restProps}>{children}</ExperienceTextRowContainer>
}

SkillsExp.CertificatesContainter = function SkillsExpCertificatesContainer({ children, ...restProps }) {
    return <CertificatesContainer {...restProps}>{children}</CertificatesContainer>
}

SkillsExp.CertificateContainer = function SkillsExpCertificateContainer({ children, ...restProps }) {
    return <CertificateContainer {...restProps}>{children}</CertificateContainer>
} 

SkillsExp.Certificate = function SkillsExpCertificate({ src, ...restProps }) {
    return <Certificate src={src} {...restProps} />
}

SkillsExp.CertificateTitle = function SkillsExpCertificateTitle({ children, ...restProps }) {
    return <CertificateTitle {...restProps}>{children}</CertificateTitle>
}

SkillsExp.CertificateYear = function SkillsExpCertificateYear({ children, ...restProps }) {
    return <CertificateYear {...restProps}>{children}</CertificateYear>
}

SkillsExp.CertificateInfoContainer = function SkillsExpCertificateInfoContainer({ children, ...restProps }) {
    return <CertificateInfoContainer {...restProps}>{children}</CertificateInfoContainer>
}

SkillsExp.Badge = function SkillsExpBadge({ src, ...restProps }) {
    return <Badge src={src} {...restProps} />
}

SkillsExp.BadgesContainer = function SkillsExpBadgesContainer({ children, ...restProps }) {
    return <BadgesContainer {...restProps}>{children}</BadgesContainer>
}

