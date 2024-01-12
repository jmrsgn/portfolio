import React from "react";
import { motion } from 'framer-motion';

import { Title, Divider, Description } from "../globalComponents";
import { SkillsExp } from "../components";

import skillsData from '../fixtures/skills.json';
import experiencesData from '../fixtures/experiences.json';

export function SkillsExpContainer() {
    return (
        <SkillsExp id="skills-&-experiences">
            <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
            >
                <SkillsExp.Box>
                    <Title>Skills & Experiences</Title>
                    <Divider marginBottom='4rem' />

                    <SkillsExp.SkillsContainer>
                        {skillsData.map(( item ) => (
                            <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                key={item.id}
                            >
                                <SkillsExp.Skill>
                                    <SkillsExp.SkillImage src={item.src} />
                                    <SkillsExp.SkillTitle>{item.title}</SkillsExp.SkillTitle>
                                </SkillsExp.Skill>
                            </motion.div>
                        ))}

                    </SkillsExp.SkillsContainer>

                    <SkillsExp.ExperiencesContainer>
                        {experiencesData.map(( item ) => (
                            <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                key={item.id}
                                style={{display: 'flex', alignItems: 'center'}}
                            >

                                <SkillsExp.ExperienceContainer>
                                    <SkillsExp.Experience>
                                        <SkillsExp.Date>{item.date}</SkillsExp.Date>
                                        <SkillsExp.Position>{item.position}</SkillsExp.Position>
                                        <SkillsExp.Company>{item.company}</SkillsExp.Company>
                                        <Description>{item.learnings}</Description>
                                    </SkillsExp.Experience>

                                    <SkillsExp.Arrow />
                                </SkillsExp.ExperienceContainer>                    
                            </motion.div>   
                        ))}
                    </SkillsExp.ExperiencesContainer>
                </SkillsExp.Box>
            </motion.div>
        </SkillsExp>
    )
}