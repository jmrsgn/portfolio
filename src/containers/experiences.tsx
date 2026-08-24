import { useState } from "react";

import { Divider, NavigationIcon, SpaceHeightMedium, SpaceHeightSmall, SpaceWidthSmall } from "../globalComponents";
import { Experiences } from "../components";

import experiencesData from '../fixtures/experiences.json';
import certificatesData from '../fixtures/certificates.json';
import MotionWrap from "../wrapper/motion-wrap";

import { BsArrowUpRight } from "react-icons/bs";

export function ExperiencesContainer() {
    const [active, setActive] = useState(experiencesData[0]);

    return (
        <Experiences id="experiences">
            <MotionWrap
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
            >
                <Experiences.Box>
                    <Experiences.TextTitle>Experiences</Experiences.TextTitle>
                    <Divider />

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
                                                <>
                                                    <Experiences.TextDescription
                                                        marginTop={index !== 0 ? '24px' : '0px'}
                                                    >{item}</Experiences.TextDescription>
                                                    <SpaceHeightSmall />
                                                </>
                                            ))}
                                            {active.previous_position && (
                                                <>
                                                    <Experiences.PositionDivider />
                                                    <SpaceHeightMedium />
                                                    <Experiences.TextPreviousPosition>
                                                        {active.previous_position.position}
                                                    </Experiences.TextPreviousPosition>
                                                    <Experiences.TextDate>{active.previous_position.date}</Experiences.TextDate>
                                                    <Experiences.ContainerExperienceText>
                                                        {active.previous_position.learnings.map((item, index) => (
                                                            <>
                                                                <Experiences.TextDescription
                                                                    marginTop={index !== 0 ? '24px' : '0px'}
                                                                >{item}</Experiences.TextDescription>
                                                                <SpaceHeightSmall />
                                                            </>
                                                        ))}
                                                    </Experiences.ContainerExperienceText>
                                                </>
                                            )}
                                        </Experiences.ContainerExperienceText>
                                    </Experiences.ContainerExperience>
                                </Experiences.ContainerExperienceDisplay>
                            </Experiences.ContainerExperiences>
                        </Experiences.BoxExperiences>

                        {/* Certificate Section */}

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
                                                <Experiences.ItemBadge src={item.badge} />
                                                <Experiences.ContainerCertificateInfo>
                                                    <div>
                                                        <Experiences.TextCertificateTitle>{item.title}</Experiences.TextCertificateTitle>
                                                        <Experiences.TextCertificateYear>{item.year}</Experiences.TextCertificateYear>
                                                    </div>
                                                    <SpaceWidthSmall />

                                                    {item.href !== "" ?
                                                        <NavigationIcon
                                                            href={item.href} target={"_blank"}>
                                                            <BsArrowUpRight
                                                                size={20}
                                                            />
                                                        </NavigationIcon> : <></>
                                                    }

                                                </Experiences.ContainerCertificateInfo>
                                            </Experiences.ContainerCertificate>
                                            <SpaceHeightSmall />
                                        </>
                                    )
                                ))}
                            </Experiences.ContainerCertificates>
                        </Experiences.BoxCertificates>
                    </Experiences.ContainerInfo>
                </Experiences.Box>
            </MotionWrap>
        </Experiences>
    )
}