import React, { useState } from "react";
import { motion } from 'framer-motion';

import { Title, 
         SubBox, 
         DescriptionText, 
         SubTitle, 
         Divider } from "../globalComponents";
import { Experiences } from "../components";

import experiencesData from '../fixtures/experiences.json';
import certificatesData from '../fixtures/certificates.json';
import badgesData from '../fixtures/badges.json';

export function ExperiencesContainer() {
    const [active, setActive] = useState(experiencesData[0]);

    return (
        <Experiences id="experiences">
            <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1]}}
            >
                <Experiences.Box>
                    <Title>Experiences</Title>
                    <Divider type='1' />

                    <Experiences.InfoContainer>
                        <Experiences.SubBox>
                            <Experiences.ExperiencesContainer>
                                <Experiences.ExperienceTabsContainer>
                                    {experiencesData.map((item) => (
                                        <Experiences.ExperienceTab
                                            active={active === item}
                                            onClick={setActive.bind(this, item)}
                                        >
                                            <Experiences.ExperienceTabText>
                                                {item.company}
                                            </Experiences.ExperienceTabText>
                                        </Experiences.ExperienceTab>
                                    ))}
                                </Experiences.ExperienceTabsContainer>

                                <Experiences.DisplayContainer>
                                    <Experiences.ExperienceContainer>
                                        <Experiences.Position>{active.position}<Experiences.Company> @ {active.company}</Experiences.Company></Experiences.Position>
                                        <Experiences.Date>{active.date}</Experiences.Date>
                                        <Experiences.ExperienceTextContainer>
                                            {active.learnings.map((item, index) => (
                                                <DescriptionText
                                                    marginTop={index !== 0? '24px':'0px'}
                                                >{item}</DescriptionText>
                                            ))}
                                        </Experiences.ExperienceTextContainer>
                                    </Experiences.ExperienceContainer>
                                </Experiences.DisplayContainer>
                            </Experiences.ExperiencesContainer>
                            
                        </Experiences.SubBox>

                        <Experiences.SubBox
                            flexDirection='column'
                        >
                            <Experiences.CertificatesContainter>
                                <SubBox
                                    flexDirection='row-reverse'
                                >
                                    <SubTitle
                                        isBold='true'
                                        fontSize='2rem'
                                    >Certificates & Badges</SubTitle>
                                </SubBox>

                                {certificatesData.map((item) => (
                                    <Experiences.CertificateContainer>
                                        <Experiences.CertificateInfoContainer>
                                            <Experiences.CertificateTitle>{item.title}</Experiences.CertificateTitle>
                                            <Experiences.CertificateYear>{item.year}</Experiences.CertificateYear>
                                        </Experiences.CertificateInfoContainer>
                                        <Experiences.Certificate src={item.src} />
                                    </Experiences.CertificateContainer>
                                ))}
                            </Experiences.CertificatesContainter>

                            <Experiences.BadgesContainer>
                                {badgesData.map((item) => (
                                    <Experiences.Badge src={item.src} />
                                ))}
                            </Experiences.BadgesContainer>
                        </Experiences.SubBox>
                    </Experiences.InfoContainer>
                </Experiences.Box>
            </motion.div>
        </Experiences>
    )
}