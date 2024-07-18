import React from "react";
import { About } from "../components";
import { DescriptionText, Divider, FilterText, OtherTitle, SpaceHeightLarge, SpaceHeightMedium, SpaceHeightSmall, SubTitle, TechText, Title } from "../globalComponents";

export function AboutContainer() {
    return (
        <About>
            <About.Box>
                <Title>Who am I</Title>
                <Divider type="2" />

                <About.InfoBox>
                    <About.AboutMeTextContainer>
                        <DescriptionText>
                            My name is John Martin I. Marasigan, a simple person who likes to do Programming. I only enjoyed things out in my 4th year of College and suddenly fell in love with Android Development.
                        </DescriptionText>

                        <DescriptionText
                            marginTop='24px'
                        >
                            I am currently working as an <FilterText>Associate Software Engineer</FilterText> at <FilterText>Infor</FilterText>, and part of the MSCM team providing maintenance and support to mobile applications.
                        </DescriptionText>
                    </About.AboutMeTextContainer>
                    
                    <About.Avatar src="../images/jm.jpeg" />
                </About.InfoBox>

                <SubTitle>What I do</SubTitle>
                <Divider type="2" />

                <SpaceHeightMedium />
                <About.InfoBox>
                    <About.TechInfoContainer>
                        <OtherTitle>Web Development</OtherTitle>
                        <SpaceHeightSmall />
                        <DescriptionText>
                            I have limited experience in Web Development, with basic proficiency in React JS for UI development, fundamental CSS skills for design, and basic feature implementation.
                        </DescriptionText>
                        <SpaceHeightSmall />
                        <About.TechUsedContainer>
                            <TechText>React</TechText>
                            <TechText>HTML/CSS</TechText>
                            <TechText>styled-components</TechText>
                        </About.TechUsedContainer>
                    </About.TechInfoContainer>

                    <About.TechImage src="../images/what_i_do/web-development.svg" />
                </About.InfoBox>

                <SpaceHeightLarge />
            </About.Box>
        </About>
    )
}