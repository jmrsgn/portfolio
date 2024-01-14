import React from "react";
import { motion } from 'framer-motion';

import { Title, Divider, TextLink, Description } from "../globalComponents";
import { About } from '../components';

import whatIDoData from "../fixtures/what-i-do.json";

export function AboutContainer() {
    return (
        <About id="about">
            <motion.div 
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
            >
                <About.Box>
                    <About.SubBox>
                        <Title>Get to know me</Title>
                        <Divider />

                        <About.DescriptionContainer>
                            <About.Avatar src="../../images/jm.jpeg" />
                            <About.AvatarDescriptionContainer>
                                <Description>
                                    I am John Martin Marasigan, a simple person who has a deep interest in doing Programming. I only enjoyed things out in my 4th year of College, and suddenly fell in love with Android Development.
                                </Description>
                                <TextLink 
                                    marginTop="2rem"
                                    to='/about/more'
                                    target="_blank"
                                >
                                    Read more
                                </TextLink>
                            </About.AvatarDescriptionContainer>
                        </About.DescriptionContainer>
                    </About.SubBox>
                    
                    <About.SkillsContainer>
                        {whatIDoData.map((item) => (
                            <About.Skill 
                                type={item.popOut? "1" : "0"} 
                                key={item.id}>
                                    
                                <About.Image src={item.src} />
                                <About.SkillTitle marginTop="24px">{item.title.split(" ")[0]}</About.SkillTitle>
                                <About.SkillTitle>{item.title.split(" ")[1]}</About.SkillTitle>
                                <Description type={item.popOut? "1" : "0"}>
                                    {item.description}
                                </Description>
                            </About.Skill>  
                        ))}
                    </About.SkillsContainer>
                </About.Box>
            </motion.div>
        </About>
    )
}