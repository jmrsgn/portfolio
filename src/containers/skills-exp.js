import React from "react";
import { motion } from 'framer-motion';

import { Title, Divider } from "../globalComponents";
import { SkillsExp } from "../components";
import MotionWrap from "../wrapper/motion-wrap";

import skillsData from '../fixtures/skills.json';
import experiencesData from '../fixtures/experiences.json';

export function SkillsExpContainer() {
    return (
        <SkillsExp id="skills-&-experiences">
            <MotionWrap>
                <SkillsExp.Box>
                    <Title>Skills & Experiences</Title>
                    <Divider />

                    <SkillsExp.SkillsContainer>
                        {skillsData.map(( item ) => (
                            <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                key={item.id}
                            >
                                <SkillsExp.Skill>
                                    <SkillsExp.SkillImage src={item.src} />
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
                            >
                                <SkillsExp.Experience>
                                    <SkillsExp.Date>{item.date}</SkillsExp.Date>
                                    <SkillsExp.Position>{item.position}</SkillsExp.Position>
                                    <SkillsExp.Company>at {item.company}</SkillsExp.Company>
                                    <SkillsExp.Learnings>{item.learnings}</SkillsExp.Learnings>
                                </SkillsExp.Experience>
                            </motion.div>   
                        ))}
                    </SkillsExp.ExperiencesContainer>
                </SkillsExp.Box>
            </MotionWrap>
        </SkillsExp>
    )
}