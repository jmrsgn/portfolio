import React from "react";
import { Title, Divider, SmallText, TextLink } from "../globalComponents";
import { About } from '../components';
import whatIDoData from "../fixtures/what-i-do.json";

export function AboutContainer() {
    return (
        <About id="about">
            <About.Box>
                <About.SubBox>
                    <Title>Get to know me</Title>
                    <Divider />

                    <SmallText marginTop="48px">
                        I am John Martin Marasigan, a simple person who has a deep interest in doing Programming.
                    </SmallText>

                    <SmallText marginTop="16px" marginBottom="16px">
                        I only found myself enjoying things out in my 4th year of College, and suddenly fell in love with Android Development. I also have a basic knowledge of doing Web Development using React JS.
                    </SmallText>

                    <TextLink marginTop="48px" to='/about/more'>Read more</TextLink>
                </About.SubBox>

                <About.SkillsContainer>
                    {whatIDoData.map((item) => (

                        <About.Skill key={item.id} 
                                     type={item.popOut? "1" : "0"}
                        >
                            <About.Image src={item.src} />
                            <About.SkillTitle marginTop="24px">{item.title.split(" ")[0]}</About.SkillTitle>
                            <About.SkillTitle>{item.title.split(" ")[1]}</About.SkillTitle>
                            <About.SkillDescription type={item.popOut? "1" : "0"}>
                                {item.description}
                            </About.SkillDescription>
                        </About.Skill>  
                    ))}
                </About.SkillsContainer>
            </About.Box>
        </About>
    )
}