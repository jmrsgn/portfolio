import React from "react";
import { motion } from 'framer-motion';

import { About } from "../components";
import { Divider, DescriptionText, SubTitle, SocialIcon } from '../globalComponents';

import { IoCaretBack } from "react-icons/io5";
import {AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaTiktok } from "react-icons/fa";
import { BsInstagram } from 'react-icons/bs';

import { Greeting } from "../components/home/styles/home";
import { Link } from "react-router-dom";

export function AboutMoreContainer() {
    document.title = "About me";

    return (
        <About type="1">
            <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1]}}
            >
                <About.Box>
                    <About.SubBox>
                        <About.ProfileBox>
                            <Link to="/">
                                <About.NavigationIcon type='1'>
                                    <IoCaretBack 
                                        size={25}
                                    />
                                </About.NavigationIcon> 
                            </Link> 

                            <About.AvatarInfoContainer>
                                <About.Avatar src="../images/jm.jpeg" />

                                <About.ProfileContactTextsContainer>
                                    <About.ContactText>John Martin Marasigan</About.ContactText>
                                    <About.ContactText>+63 956 172 3007</About.ContactText>
                                    <About.ContactText>marasiganjohnmartin@gmail.com</About.ContactText>

                                    <About.SocialContainer>
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
                                    </About.SocialContainer>
                                </About.ProfileContactTextsContainer>
                            </About.AvatarInfoContainer>
                        </About.ProfileBox>
                    </About.SubBox>
                    
                    <About.InfoBox>
                        <Greeting
                            marginTop='0rem'
                        >
                            Hi!
                        </Greeting>
                        
                        <Divider type='1'/>

                        <DescriptionText
                            marginTop='48px'
                        >
                            My name is John Martin, JM or Em for short. I'm from Mandaluyong City, Philippines. I graduated Bachelor of Science in Information Technology at Jose Rizal University, Cum Laude. 
                        </DescriptionText>

                        <DescriptionText
                            marginTop="24px"
                        >
                            I currently work at Infor, located in Bonifacio Global City, Taguig, Philippines. I am one of the Mobile Developers that provides support and maintenance for customers. 
                            I am working for almost two years now, and still happy participating to the team to get the job done. Working with Infor as my first real job is one of the great decisions I have made. 
                            I met great people that I didn't expect to have such great philosophy that always make me feel that I belong to the team, and as co-workers.
                        </DescriptionText>

                        <DescriptionText
                            marginTop="24px"
                        >
                            Infor is a Software Development company, specializing building apps that help other businesses to achieve their business goals. One thing I like about Infor is, it has a strong bond between 
                            employees that contributes to excellent team work to provide quality results for customers. I also have great leaders that always make sure all of us don't fall behind and always on the right track.
                        </DescriptionText>

                        <DescriptionText
                            marginTop='24px'
                        >
                            To read more about Infor, go to <About.Link href='https://www.infor.com/about'>https://www.infor.com/about</About.Link>
                        </DescriptionText>


                        {/* hobbies */}
                        <SubTitle
                            marginTop="5rem"
                        >
                            Hobbies
                        </SubTitle>

                        <DescriptionText
                            marginTop="16px"
                        >
                            I go to the gym regularly, I find it as my comfort zone after a tiring day and helps boost my mood, obtain self-discipline, and have a better and healthier mind and body. 
                            I also read books, especially books about self-improvement. I usually spend time alone going to places that puts my mind at ease.
                        </DescriptionText>

                        <DescriptionText
                            marginTop='24px'
                        >
                            I am also into music. I love listening to music. I do play guitar, both acoustic and electric. I am a former lead guitarist in our band. I also play bass. 
                            I started playing guitar year 2012, but I am still very confident about my current skills in playing said instruments.
                        </DescriptionText>
                    </About.InfoBox>
                </About.Box>
            </motion.div>
        </About>
    )
}