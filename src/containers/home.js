import React from 'react';
import { motion } from 'framer-motion';

import { TechText, 
         Button, 
         SocialIcon,
         DescriptionText,
         TextLinkContainer,
         TextLink,
         FilterText} from '../globalComponents';

import { Home } from '../components';

import { BsInstagram } from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiOutlineCaretRight } from 'react-icons/ai';
import { Greeting, Tech } from '../components/home/styles/home';

import whatIDoData from "../fixtures/what-i-do.json";
import skillsData from '../fixtures/skills.json';

export function HomeContainer() {
    return (
        <Home id="home">
            <Home.Box>
                <Home.SubBox>
                    <Home.InfoBox>
                        <motion.div
                            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                        >
                            <Home.GreetingsContainer>
                                <TechText>Hello, I'm</TechText>
                                <Greeting>John Martin</Greeting>

                                <DescriptionText
                                    lineHeight="0px"
                                >I'm a Developer.</DescriptionText>
                                <Button 
                                    type="1"
                                    to="../resume/Resume.pdf"
                                    target="_blank"
                                >
                                    Resume
                                </Button>
                            </Home.GreetingsContainer>
                        </motion.div>

                        <Home.SocialContainer>
                            <motion.div
                                whileInView={{ scale: [0, 1 ]}}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <SocialIcon href="https://github.com/jmrsgn" target={"_blank"}> 
                                    <AiFillGithub />
                                </SocialIcon>
                            </motion.div>
                            
                            <motion.div
                                whileInView={{ scale: [0, 1 ]}}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <SocialIcon href="https://www.linkedin.com/in/jmrsgn/" target={"_blank"}>
                                    <AiFillLinkedin />
                                </SocialIcon>
                            </motion.div>
                            
                            <motion.div
                                whileInView={{ scale: [0, 1 ]}}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <SocialIcon href="https://www.instagram.com/jmrsgn_/" target={"_blank"}>
                                    <BsInstagram />
                                </SocialIcon>
                            </motion.div>
                        </Home.SocialContainer>
                    </Home.InfoBox>
        
                    <Home.InfoBox
                        justifyContent='flex-start'
                    >
                        <DescriptionText>
                            My name is John Martin I. Marasigan, a simple person who likes to do Programming. I only enjoyed things out in my 4th year of College and suddenly fell in love with Android Development.
                        </DescriptionText>

                        <DescriptionText
                            marginTop="24px"
                        >
                            I am currently working as an <FilterText>Associate Software Engineer</FilterText> at <FilterText>Infor,</FilterText> and part of the MSCM team providing maintenance and support to mobile applications.
                        </DescriptionText>

                        <DescriptionText
                            marginTop="24px"
                        >
                            In my free time, I work out regularly, spending time alone going to the places that put my mind at ease. I also have great taste in music, love reading books, am a fitness enthusiast, and a guitarist.
                        </DescriptionText>

                        <TextLinkContainer>
                            <TextLink 
                                type="1"
                                to='#'
                            >
                                Know me more
                            </TextLink>

                            <TextLink 
                                type="1"
                                to='#'
                            >
                                Spotify profile
                            </TextLink>
                        </TextLinkContainer>
                    </Home.InfoBox>
                </Home.SubBox>

                <Home.SubBox
                    flexDirection="column"
                >
                    <Home.TechSkillsContainer>
                        {whatIDoData.map((item) => (
                            <Home.TechSkill 
                                key={item.id}>
                                <Home.TechSkillSubBox>
                                    <Home.TechSkillTitle marginTop="24  px">{item.title}</Home.TechSkillTitle>
                                    <Home.TechSkillImage src={item.src} />
                                </Home.TechSkillSubBox>
                                    
                                <Home.TechSkillDescription>
                                    {item.description}
                                </Home.TechSkillDescription>
                            </Home.TechSkill>  
                        ))}
                    </Home.TechSkillsContainer>

                    <Home.TechContainer>
                        {skillsData.map((skill) => (
                            <Tech>
                                <AiOutlineCaretRight />
                                <TechText
                                    fontSize=".75rem"
                                    margin=".25rem"
                                >{skill.name}</TechText>
                            </Tech>
                        ))}
                    </Home.TechContainer>
                </Home.SubBox>
            </Home.Box>
        </Home>
    )
}