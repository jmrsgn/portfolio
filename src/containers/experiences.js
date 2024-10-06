import React, { useState } from "react";

import { Title,
         DescriptionText, 
         SubTitle, 
         Divider, 
         SpaceHeightExtraLarge } from "../globalComponents";
import { Experiences } from "../components";

import experiencesData from '../fixtures/experiences.json';
import certificatesData from '../fixtures/certificates.json';
import badgesData from '../fixtures/badges.json';
import MotionWrap from "../wrapper/motion-wrap";

import { BsArrowUpRight } from "react-icons/bs";

export function ExperiencesContainer() {
    const [active, setActive] = useState(experiencesData[0]);

    return (
        <Experiences id="experiences">
            <MotionWrap
                whileInView={{ y: [100, 0], opacity: [0, 1]}}
            >
                <Experiences.Box>
                    <Experiences.TextTitle>Experiences</Experiences.TextTitle>
                    <Divider type='2' />

                    <Experiences.ContainerInfo>
                        <Experiences.ExperiencesSubBox>
                            <Experiences.ContainerExperiences>
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

                                <Experiences.ContainerExperienceDisplay>
                                    <Experiences.ExperienceContainer>
                                        <Experiences.TextPosition>{active.position}<Experiences.TextCompany> @ {active.company}</Experiences.TextCompany></Experiences.TextPosition>
                                        <Experiences.TextDate>{active.date}</Experiences.TextDate>
                                        <Experiences.ExperienceTextContainer>
                                            {active.learnings.map((item, index) => (
                                                <DescriptionText
                                                    marginTop={index !== 0? '24px':'0px'}
                                                >{item}</DescriptionText>
                                            ))}
                                        </Experiences.ExperienceTextContainer>

                                        <Experiences.TextLink
                                            to={active.link}
                                        >Read more</Experiences.TextLink>
                                    </Experiences.ExperienceContainer>
                                </Experiences.ContainerExperienceDisplay>
                            </Experiences.ContainerExperiences>
                        </Experiences.ExperiencesSubBox>

                        <Experiences.CertificatesSubBox>
                            <Experiences.ContainerCertificates>
                                <>
                                    <Experiences.TextSubTitle
                                        isBold='true'
                                        fontSize='2rem'
                                    >Certificates & Badges</Experiences.TextSubTitle>
                                </>

                                {certificatesData.map((item, index) => (
                                   index !== 3 && (
                                        <Experiences.ContainerCertificate>
                                            <Experiences.ContainerCertificateInfo>
                                                <div>
                                                    <Experiences.CertificateTitle>{item.title}</Experiences.CertificateTitle>
                                                    <Experiences.CertificateYear>{item.year}</Experiences.CertificateYear>
                                                </div>
                                                <>
                                                    <BsArrowUpRight 
                                                        size={20}
                                                    />  
                                                </>
                                            </Experiences.ContainerCertificateInfo>
                                        </Experiences.ContainerCertificate>
                                    )
                                ))}
                            </Experiences.ContainerCertificates>
                            <Experiences.TextLink
                                to="#"
                            >See more</Experiences.TextLink>
                        </Experiences.CertificatesSubBox>
                    </Experiences.ContainerInfo>

                    <Experiences.ContainerBadges>
                        {badgesData.map((item) => (
                            <Experiences.ItemBadge src={item.src} />
                        ))}
                    </Experiences.ContainerBadges>
                </Experiences.Box>
            </MotionWrap>
        </Experiences>
    )
}