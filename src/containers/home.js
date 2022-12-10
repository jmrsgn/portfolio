import React from 'react';
import { motion } from 'framer-motion';

import { Text, 
         BigText, 
         Button, 
         SmallText, 
         SocialIcon,
         SpanBoldText } from '../globalComponents';

import { Home } from '../components';

import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export function HomeContainer() {
    return (
        <Home id="home">
            <Home.Box>
                <Home.SubBox>
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        <Home.GreetingsContainer>
                            <Text>Hello,</Text>
                            <BigText>I'm <SpanBoldText color="#FFFFFF">JM</SpanBoldText></BigText>
                            <SmallText marginBottom="2rem">I'm a Developer</SmallText>
                            <Button 
                                type="1"
                                href="../resume/Resume.pdf"
                                target="_blank"
                            >
                                Resume
                            </Button>
                        </Home.GreetingsContainer>
                    </motion.div>

                    <Home.SocialContainer>
                        <motion.div
                            whileInView={{ scale: [0, 1 ]}}
                            transition={{ duration: 0.5 }}
                        >
                            <SocialIcon href="https://github.com/jmrsgn" target={"_blank"}> 
                                <AiFillGithub />
                            </SocialIcon>
                        </motion.div>
                        
                        <motion.div
                            whileInView={{ scale: [0, 1 ]}}
                            transition={{ duration: 0.5, delay: 0.2}}
                        >
                            <SocialIcon href="https://www.linkedin.com/in/jmrsgn/" target={"_blank"}>
                                <AiFillLinkedin />
                            </SocialIcon>
                        </motion.div>
                        
                        <motion.div
                            whileInView={{ scale: [0, 1 ]}}
                            transition={{ duration: 0.5, delay: 0.4}}
                        >
                            <SocialIcon href="https://www.instagram.com/jmrsgn_/" target={"_blank"}>
                                <BsInstagram />
                            </SocialIcon>
                        </motion.div>
                    </Home.SocialContainer>
                </Home.SubBox>
            </Home.Box>

            <Home.Box>
                <Home.SubBox 
                    flexDirection="column"
                >
                    <Home.TechBubbleContainer>
                        <motion.div
                            whileInView={{ x: [100, 0], y: [150, 0] }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <Home.TechBubble>
                                <Home.TechImage src="./images/tech/kotlin.png" />
                            </Home.TechBubble>
                        </motion.div>

                        <motion.div
                            whileInView={{ y: [150, 0] }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <Home.TechBubble>
                                <Home.TechImage src="./images/tech/java.png" />
                            </Home.TechBubble>
                        </motion.div>
                                

                        <motion.div
                            whileInView={{ y: [150, 0], x: [-100, 0] }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <Home.TechBubble>
                                <Home.TechImage src="./images/tech/react.png" />
                            </Home.TechBubble>
                        </motion.div>
                                
                    </Home.TechBubbleContainer>

                    <Home.Image src='./images/other/laptop.png' />
                </Home.SubBox>
            </Home.Box>
        </Home>
    )
}