import React, { useState } from "react";

import { Divider, SpaceHeightExtraSmall, SpaceHeightMedium, SpaceHeightSmall, SpaceWidthSmall } from "../globalComponents";
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
                        <Experiences.BoxExperiences>
                            <Experiences.ContainerExperiences>
                                <Experiences.ContainerExperienceTabs>
                                    {experiencesData.map((item) => (
                                        <Experiences.ItemExperienceTab
                                            active={active === item}
                                            onClick={setActive.bind(this, item)}
                                        >
                                            <Experiences.TextExperienceTab>
                                                {item.company}
                                            </Experiences.TextExperienceTab>
                                        </Experiences.ItemExperienceTab>
                                    ))}
                                </Experiences.ContainerExperienceTabs>

                                <Experiences.ContainerExperienceDisplay>
                                    <Experiences.ContainerExperience>
                                        <Experiences.TextPosition>{active.position}<Experiences.TextCompany> @ {active.company}</Experiences.TextCompany></Experiences.TextPosition>
                                        <Experiences.TextDate>{active.date}</Experiences.TextDate>
                                        <Experiences.ContainerExperienceText>
                                            {active.learnings.map((item, index) => (
                                                <Experiences.TextDescription
                                                    marginTop={index !== 0? '24px':'0px'}
                                                >{item}</Experiences.TextDescription>
                                            ))}
                                        </Experiences.ContainerExperienceText>

                                        {/* <Experiences.TextLink
                                            to={active.link}
                                        >Read more</Experiences.TextLink> */}
                                    </Experiences.ContainerExperience>
                                </Experiences.ContainerExperienceDisplay>
                            </Experiences.ContainerExperiences>
                        </Experiences.BoxExperiences>

                        <Experiences.BoxCertificates>
                            <Experiences.ContainerCertificates>
                                <>
                                    <Experiences.TextSubTitle>Certificates & Badges</Experiences.TextSubTitle>
                                </>

                                <SpaceHeightSmall />
                                {certificatesData.map((item, index) => (
                                   index !== 3 && (
                                        <>
                                            <Experiences.ContainerCertificate>
                                                <Experiences.ContainerCertificateInfo>
                                                    <div>
                                                        <Experiences.TextCertificateTitle>{item.title}</Experiences.TextCertificateTitle>
                                                        <Experiences.TextCertificateYear>{item.year}</Experiences.TextCertificateYear>
                                                    </div>
                                                    <>
                                                        <BsArrowUpRight 
                                                            size={20}
                                                        />  
                                                    </>
                                                </Experiences.ContainerCertificateInfo>
                                            </Experiences.ContainerCertificate>
                                            <SpaceHeightExtraSmall />
                                        </>
                                   )
                                ))}
                            </Experiences.ContainerCertificates>
                            {/* <Experiences.TextLink
                                to="/certificates/all"
                            >See more</Experiences.TextLink> */}
                        </Experiences.BoxCertificates>
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