import React from "react";
import { About } from "../components";
import { DescriptionText, Divider, FilterText, OtherTitle, Row, SpaceHeightLarge, SpaceHeightMedium, SpaceHeightSmall, SubTitle, TechText, TextLink, Title } from "../globalComponents";

export function AboutContainer() {
    return (
        <About>
            <About.Box>
                <Title>Who am I</Title>
                <Divider type="2" />

                <About.InfoBox>
                    <About.AboutMeTextContainer>
                        <DescriptionText>
                            My name is John Martin I. Marasigan, a person who has an interest doing Programming. I only enjoyed things out in my 4th year of College and suddenly fell in love with Android Development.
                        </DescriptionText>

                        <DescriptionText
                            marginTop='24px'
                        >
                            I am currently working as an <FilterText>Associate Software Engineer</FilterText> at <FilterText>Infor</FilterText>, and part of the MSCM team providing maintenance and support to mobile applications.
                        </DescriptionText>

                        <DescriptionText
                            marginTop='24px'
                        >
                            In my free time, I work out regularly, spending time alone going to the places that put my mind at ease. I also have great taste in music, love reading books, am a fitness enthusiast, and a guitarist.
                        </DescriptionText>
                    </About.AboutMeTextContainer>
                    
                    <About.Avatar src="../images/jm.jpeg" />
                </About.InfoBox>

                <TextLink 
                    type='2'
                    to='/about/more'
                >Know me more</TextLink>

                <SpaceHeightLarge />
                <SpaceHeightLarge />

                <SubTitle>What I do</SubTitle>
                <Divider type="2" />
                
                <About.InfoTechBox>
                    <About.TechInfoContainer>
                        <OtherTitle>Web Development</OtherTitle>
                        <SpaceHeightSmall />
                        <DescriptionText>
                            I have limited experience in Web Development, with basic proficiency in React JS for UI development, fundamental CSS skills for design, and basic feature implementation.
                        </DescriptionText>
                        <SpaceHeightSmall />
                        <About.TechUsedContainer>
                            <About.TechUsedText>React</About.TechUsedText>
                            <About.TechUsedText>HTML/CSS</About.TechUsedText>
                            <About.TechUsedText>styled-components</About.TechUsedText>
                        </About.TechUsedContainer>
                    </About.TechInfoContainer>

                    <About.TechImage src="../images/what_i_do/web-development.svg" />
                </About.InfoTechBox>

                <Row>
                    <About.TechDivider />
                </Row>
                <SpaceHeightLarge />

                {/* ------- */}

                <About.InfoTechBox
                    flexDirection='row-reverse'
                >
                    <About.TechInfoContainer>
                        <OtherTitle>UI/UX Design</OtherTitle>
                        <SpaceHeightSmall />
                        <DescriptionText>
                            In my previous projects, I developed numerous designs, leveraging my basic UI skills to create modern interfaces using Figma.
                        </DescriptionText>
                        <SpaceHeightSmall />
                        <About.TechUsedContainer>
                            <About.TechUsedText>Figma</About.TechUsedText>
                        </About.TechUsedContainer>
                    </About.TechInfoContainer>

                    <About.TechImage src="../images/what_i_do/ui-ux.svg" />
                </About.InfoTechBox>

                <Row flexDirection='row-reverse'>
                    <About.TechDivider />   
                </Row>
                <SpaceHeightLarge />

                {/* ------- */}

                <SpaceHeightMedium />
                <About.InfoTechBox>
                    <About.TechInfoContainer>
                        <OtherTitle>Mobile Development</OtherTitle>
                        <SpaceHeightSmall />
                        <DescriptionText>
                            Java has been my star performer; I've successfully built two applications with it. Currently, I'm deepening my expertise in Jetpack Compose and Ktor, focusing on robust code architecture and coding principles in my personal projects. Looking ahead, I'm eager to master Flutter for upcoming ventures.
                        </DescriptionText>
                        <SpaceHeightSmall />
                        <About.TechUsedContainer>
                            <About.TechUsedText>Java</About.TechUsedText>
                            <About.TechUsedText>Kotlin</About.TechUsedText>
                            <About.TechUsedText>Flutter</About.TechUsedText>
                        </About.TechUsedContainer>
                    </About.TechInfoContainer>

                    <About.TechImage src="../images/what_i_do/mobile-development.svg" />
                </About.InfoTechBox>

                <Row>
                    <About.TechDivider />
                </Row>
                <SpaceHeightLarge />
            </About.Box>
        </About>
    )
}