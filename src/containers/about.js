import React from "react";
import { motion } from 'framer-motion';

import { Title, Divider, SmallText, TextLink } from "../globalComponents";
import { About } from '../components';
import MotionWrap from "../wrapper/motion-wrap";

import whatIDoData from "../fixtures/what-i-do.json";

export function AboutContainer() {
    return (
        <About id="about">
            <MotionWrap>
                <About.Box>
                    <About.SubBox>
                        <Title>Get to know me</Title>
                        <Divider />

                        <SmallText marginTop="2rem">
                            I am John Martin Marasigan, a simple person who has a deep interest in doing Programming.
                        </SmallText>

                        <SmallText marginTop="1rem" marginBottom="1rem">
                            I only found myself enjoying things out in my 4th year of College, and suddenly fell in love with Android Development. I also have a basic knowledge of doing Web Development using React JS.
                        </SmallText>

                        <TextLink 
                            marginTop="2rem" 
                            to='/about/more'
                            target="_blank"
                        >
                            Read more
                        </TextLink>
                    </About.SubBox>
                
                    <About.SkillsContainer>
                        {whatIDoData.map((item) => (
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, type: 'tween' }}
                                key={item.id} 
                            >
                                <About.Skill type={item.popOut? "1" : "0"}>
                                    <About.Image src={item.src} />
                                    <About.SkillTitle marginTop="24px">{item.title.split(" ")[0]}</About.SkillTitle>
                                    <About.SkillTitle>{item.title.split(" ")[1]}</About.SkillTitle>
                                    <About.SkillDescription type={item.popOut? "1" : "0"}>
                                        {item.description}
                                    </About.SkillDescription>
                                </About.Skill>  
                            </motion.div> 
                        ))}
                    </About.SkillsContainer>
                </About.Box>
            </MotionWrap>
        </About>
    )
}