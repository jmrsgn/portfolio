import React from 'react';

import { SocialIcon, 
         SpaceHeightMedium,
         SpaceHeightSmall} from '../globalComponents';

import { Home } from '../components';

import { BsInstagram } from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaTiktok, FaStrava } from "react-icons/fa";
import MotionWrap from '../wrapper/motion-wrap';

export function HomeContainer() {
    return (
        <Home id="home">
            <Home.Box>
                <Home.BoxInfo>
                    <MotionWrap
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        <Home.ContainerGreetings>
                            <Home.TextTech>Hello, I'm</Home.TextTech>
                            <Home.TextGreeting>John Martin</Home.TextGreeting>

                            <Home.TextDescription>
                                A passionate Developer with a love for fitness. By day, I dive 
                                into code, creating innovative solutions and developing user-friendly 
                                applications. By night, you'll find me pushing my limits at the gym, 
                                running, or exploring new fitness routines.
                            </Home.TextDescription>
                            <SpaceHeightMedium />
                            <Home.ButtonResume 
                                type="1"
                                to="../resume/Resume.pdf"
                                target="_blank"
                            >
                                Resume
                            </Home.ButtonResume>
                        </Home.ContainerGreetings>
                    </MotionWrap>

                    <Home.ContainerSocials>
                        <MotionWrap
                            whileInView={{ scale: [0, 1 ]}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <SocialIcon href="https://github.com/jmrsgn" target={"_blank"}> 
                                <AiFillGithub />
                            </SocialIcon>
                        </MotionWrap>
                        
                        <MotionWrap
                            whileInView={{ scale: [0, 1 ]}}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <SocialIcon href="https://www.linkedin.com/in/marasiganjohnmartin/" target={"_blank"}>
                                <AiFillLinkedin />
                            </SocialIcon>
                        </MotionWrap>
                        
                        <MotionWrap
                            whileInView={{ scale: [0, 1 ]}}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <SocialIcon href="https://www.instagram.com/marasigan.johnmartin/" target={"_blank"}>
                                <BsInstagram />
                            </SocialIcon>
                        </MotionWrap>

                        <MotionWrap
                            whileInView={{ scale: [0, 1 ]}}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <SocialIcon href="https://www.tiktok.com/@marasigan.johnmartin" target={"_blank"}>
                                <FaTiktok />
                            </SocialIcon>
                        </MotionWrap>

                        <MotionWrap
                            whileInView={{ scale: [0, 1 ]}}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <SocialIcon href="https://www.strava.com/athletes/140326588" target={"_blank"}>
                                <FaStrava />
                            </SocialIcon>
                        </MotionWrap>
                    </Home.ContainerSocials>
                </Home.BoxInfo>
    
                <Home.BoxInfo>
                    <Home.Image src="../images/who-am-i-svg.svg" />
                </Home.BoxInfo>
            </Home.Box>
        </Home>
    );
}