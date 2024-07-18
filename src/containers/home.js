import React from 'react';
import { motion } from 'framer-motion';

import { TechText, 
         Button, 
         SocialIcon,
         DescriptionText } from '../globalComponents';

import { Home } from '../components';

import { BsInstagram } from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaTiktok, FaStrava } from "react-icons/fa";
import { Greeting } from '../components/home/styles/home';

export function HomeContainer() {
    return (
        <Home id="home">
            <Home.Box>
                <Home.InfoBox>
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        <Home.GreetingsContainer>
                            <TechText>Hello, I'm</TechText>
                            <Greeting>John Martin</Greeting>

                            <DescriptionText>
                                A passionate Developer with a love for fitness. By day, I dive into code, creating innovative 
                                solutions and developing user-friendly applications. By night, you'll find me pushing my limits at the gym, 
                                running trails, or exploring new fitness routines.
                            </DescriptionText>
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

                        <motion.div
                            whileInView={{ scale: [0, 1 ]}}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <SocialIcon href="https://www.tiktok.com/@jmrsgnn?is_from_webapp=1&sender_device=pc" target={"_blank"}>
                                <FaTiktok />
                            </SocialIcon>
                        </motion.div>

                        <motion.div
                            whileInView={{ scale: [0, 1 ]}}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <SocialIcon href="#" target={"_blank"}>
                                <FaStrava />
                            </SocialIcon>
                        </motion.div>
                    </Home.SocialContainer>
                </Home.InfoBox>
    
                <Home.InfoBox>
                    <Home.Image src="../images/who-am-i-svg.svg" />
                </Home.InfoBox>
            </Home.Box>
        </Home>
    );
}