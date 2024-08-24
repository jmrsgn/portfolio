import React from "react";
import { About } from "../components";

import {
    DescriptionText,
    Divider,
    FilterText,
    OtherTitle,
    Row,
    SpaceHeightLarge,
    SpaceHeightMedium,
    SpaceHeightSmall,
    TextLink,
    Title,
} from "../globalComponents";

import WhatIDoData from '../fixtures/what-i-do.json';

import { IoIosArrowDroprightCircle } from "react-icons/io";

export function AboutContainer() {
    return (
        <About id="about">
            <About.Box>
                <Title>Who am I</Title>
                <Divider type="2" />

                <About.InfoBox>
                    <About.AboutMeTextContainer>
                        <DescriptionText>
                            My name is John Martin I. Marasigan, a person who has an interest
                            doing Programming. I only enjoyed things out in my 4th year of
                            College and suddenly fell in love with Android Development. I am
                            currently working as an 
                            <FilterText>Associate Software Engineer</FilterText> at 
                            <FilterText>Infor</FilterText>, and part of the MSCM team
                            providing maintenance and support to mobile applications.
                        </DescriptionText>

                        <DescriptionText marginTop="24px">
                            In my free time, I work out regularly, spending time alone going
                            to the places that put my mind at ease. I also have great taste in
                            music, love reading books, am a fitness enthusiast, and a
                            guitarist.
                        </DescriptionText>
                    </About.AboutMeTextContainer>

                    <About.Avatar src="../images/jm.jpeg" />
                </About.InfoBox>

                <TextLink type="2" to="/about/more">
                    Know me more
                </TextLink>

                <SpaceHeightLarge />
                <SpaceHeightLarge />

                {WhatIDoData.map((item) => (
                    <>
                        <About.InfoTechBox>
                            <About.TechInfoContainer>
                                <OtherTitle>{item.title}</OtherTitle>
                                <SpaceHeightSmall />

                                <DescriptionText>{item.description}</DescriptionText>
                                <SpaceHeightSmall />

                                <About.TechUsedContainer>
                                    {item.tech.map((tech) => (
                                        <About.TechUsedTextContainer>
                                            <IoIosArrowDroprightCircle />
                                            <About.TechUsedText>{tech}</About.TechUsedText>
                                        </About.TechUsedTextContainer>
                                    ))}
                                </About.TechUsedContainer>
                            </About.TechInfoContainer>

                            <About.TechImage src={item.src} />
                        </About.InfoTechBox>

                        <Row>
                            <About.TechDivider />
                        </Row>

                        <SpaceHeightLarge />
                    </>
                ))}
            </About.Box>
        </About>
    );
}