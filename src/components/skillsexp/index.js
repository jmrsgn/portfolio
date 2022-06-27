import React from "react";
import { Container,
         Box,
         SkillsContainer,
         Skill,
         SkillImage,
         ExperiencesContainer,
         Experience,
         Date,
         Position,
         Company,
         Learnings } from './styles/skills-exp';

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

SkillsExp.Learnings = function SkillsExpLearnings({ children, ...restProps }) {
    return <Learnings {...restProps}>{children}</Learnings>
}

