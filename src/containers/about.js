import React from "react";
import { motion } from 'framer-motion';

import { Title, Divider, TextLink } from "../globalComponents";
import { About } from '../components';
import MotionWrap from "../wrapper/motion-wrap";

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
                            <About.AvatarDescription>
                                I am John Martin Marasigan, a simple person who has a deep interest in doing Programming. I only found myself enjoying things out in my 4th year of College, and suddenly fell in love with Android Development.
                            </About.AvatarDescription>
                        </About.DescriptionContainer>


                        {/* <TextLink 
                            marginTop="2rem" 
                            to='/about/more'
                            target="_blank"
                        >
                            Read more
                        </TextLink> */}
                    </About.SubBox>
                    
                    <About.SkillsContainer>
                        {whatIDoData.map((item) => (
                            <About.Skill 
                                type={item.popOut? "1" : "0"} 
                                key={item.id}>
                                    
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
            </motion.div>
        </About>
    )
}