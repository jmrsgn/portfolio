import React from "react";

import { Title, Divider } from "../globalComponents";
import { SkillsExp } from "../components";

import skillsData from '../fixtures/skills.json';
import experiencesData from '../fixtures/experiences.json';

export function SkillsExpContainer() {
    return (
        <SkillsExp id="skills-&-experiences">
            <SkillsExp.Box>
                <Title>Skills & Experiences</Title>
                <Divider />

                <SkillsExp.SkillsContainer>
                    {skillsData.map(( item ) => (
                        <SkillsExp.SkillCell key={item.id}>
                            <SkillsExp.SkillImage src={item.src} />
                        </SkillsExp.SkillCell>
                    ))}

                </SkillsExp.SkillsContainer>

                <SkillsExp.ExperiencesContainer>
                    {experiencesData.map(( item ) => (
                        <SkillsExp.ExperienceCell key={item.id}>
                            <SkillsExp.Date>{item.date}</SkillsExp.Date>
                            <SkillsExp.Position>{item.position}</SkillsExp.Position>
                            <SkillsExp.Company>at {item.company}</SkillsExp.Company>
                            <SkillsExp.Learnings>{item.learnings}</SkillsExp.Learnings>
                        </SkillsExp.ExperienceCell>
                    ))}
                </SkillsExp.ExperiencesContainer>
            </SkillsExp.Box>
        </SkillsExp>
    )
}