import React, { useState } from "react";
import { motion } from 'framer-motion';

import { Title, SubBox, DescriptionText, SubTitle, Divider } from "../globalComponents";
import { SkillsExp } from "../components";

import experiencesData from '../fixtures/experiences.json';
import certificatesData from '../fixtures/certificates.json';
import badgesData from '../fixtures/badges.json';

export function SkillsExpContainer() {
    const [active, setActive] = useState(experiencesData[0]);

    function setActiveTab(item) {
        setActive(item);
    }

    return (
        <SkillsExp id="experiences">
            <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
            >
                <SkillsExp.Box>
                    <Title>Experiences</Title>
                    <Divider type='1' />

                    <SkillsExp.InfoContainer>
                        <SkillsExp.SubBox>
                            <SkillsExp.ExperiencesContainer>
                                <SkillsExp.ExperienceTabsContainer>
                                    {experiencesData.map((item) => (
                                        <SkillsExp.ExperienceTab
                                            active={active === item}
                                            onClick={setActiveTab.bind(this, item)}
                                        >
                                            <SkillsExp.ExperienceTabText>
                                                {item.company}
                                            </SkillsExp.ExperienceTabText>
                                        </SkillsExp.ExperienceTab>
                                    ))}
                                </SkillsExp.ExperienceTabsContainer>

                                <SkillsExp.DisplayContainer>
                                    <SkillsExp.ExperienceContainer>
                                        <SkillsExp.Position>{active.position}<SkillsExp.Company> @ {active.company}</SkillsExp.Company></SkillsExp.Position>
                                        <SkillsExp.Date>{active.date}</SkillsExp.Date>
                                        <SkillsExp.ExperienceTextContainer>
                                            {active.learnings.map((item) => (
                                                <DescriptionText>{item}</DescriptionText>
                                            ))}
                                        </SkillsExp.ExperienceTextContainer>
                                    </SkillsExp.ExperienceContainer>
                                </SkillsExp.DisplayContainer>
                            </SkillsExp.ExperiencesContainer>
                            
                        </SkillsExp.SubBox>

                        <SkillsExp.SubBox
                            flexDirection='column'
                        >
                            <SkillsExp.CertificatesContainter>
                                <SubBox
                                    flexDirection='row-reverse'
                                >
                                    <SubTitle
                                        isBold='true'
                                        fontSize='2rem'
                                    >Certificates & Badges</SubTitle>
                                </SubBox>

                                {certificatesData.map((item) => (
                                    <SkillsExp.CertificateContainer>
                                        <SkillsExp.CertificateInfoContainer>
                                            <SkillsExp.CertificateTitle>{item.title}</SkillsExp.CertificateTitle>
                                            <SkillsExp.CertificateYear>{item.year}</SkillsExp.CertificateYear>
                                        </SkillsExp.CertificateInfoContainer>
                                        <SkillsExp.Certificate src={item.src} />
                                    </SkillsExp.CertificateContainer>
                                ))}
                            </SkillsExp.CertificatesContainter>

                            <SkillsExp.BadgesContainer>
                                {badgesData.map((item) => (
                                    <SkillsExp.Badge src={item.src} />
                                ))}
                            </SkillsExp.BadgesContainer>
                        </SkillsExp.SubBox>
                    </SkillsExp.InfoContainer>
                </SkillsExp.Box>
            </motion.div>
        </SkillsExp>
    )
}