import React from "react";
import { motion } from 'framer-motion';

import { About } from "../components";
import { Divider, 
         SocialIcon, 
         SpaceHeightExtraSmall, 
         SpaceHeightMedium, 
         SpaceHeightSmall } from '../globalComponents';

import { IoCaretBack } from "react-icons/io5";
import {AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaTiktok, FaStrava } from "react-icons/fa";
import { BsInstagram, BsArrowUpRight } from 'react-icons/bs';

import { Link } from "react-router-dom";

export function AboutMoreContainer() {
    document.title = "jm";

    return (
        <About type="1">
            <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1]}}
            >
                <About.Box>
                    <About.BoxProfile>
                        <About.ContainerNavigaton>
                            <Link to="/">
                                <About.ItemNavigationIcon type='2'>
                                    <IoCaretBack 
                                        size={25}
                                    />
                                </About.ItemNavigationIcon> 
                            </Link> 
                        </About.ContainerNavigaton>                       

                        <About.ContainerAvatarInfo>
                            <About.ImageAvatar src="../images/jm.jpeg" />

                            <About.ContainerProfileContactTexts>
                                <About.ContainerContacts>
                                    <SpaceHeightSmall />
                                    <About.TextSubTitle>John Martin Marasigan</About.TextSubTitle>
                                    <About.TextContact
                                        href="sms:+639561723007"
                                    >+63 956 172 3007</About.TextContact>
                                    <About.TextContact
                                        href="mailto:marasiganjohnmartin@gmail.com"
                                    >marasiganjohnmartin@gmail.com</About.TextContact>

                                    <About.ContainerSocial>
                                        <motion.div
                                            whileInView={{ scale: [0, 1 ]}}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            <About.ItemSocialIcon href="https://github.com/jmrsgn" target={"_blank"}> 
                                                <AiFillGithub />
                                            </About.ItemSocialIcon>
                                        </motion.div>
                                        
                                        <motion.div
                                            whileInView={{ scale: [0, 1 ]}}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                        >
                                            <About.ItemSocialIcon href="https://www.linkedin.com/in/marasiganjohnmartin/" target={"_blank"}>
                                                <AiFillLinkedin />
                                            </About.ItemSocialIcon>
                                        </motion.div>
                                        
                                        <motion.div
                                            whileInView={{ scale: [0, 1 ]}}
                                            transition={{ duration: 0.5, delay: 0.6 }}
                                        >
                                            <About.ItemSocialIcon href="https://www.instagram.com/marasigan.johnmartin/" target={"_blank"}>
                                                <BsInstagram />
                                            </About.ItemSocialIcon>
                                        </motion.div>

                                        <motion.div
                                            whileInView={{ scale: [0, 1 ]}}
                                            transition={{ duration: 0.5, delay: 0.8 }}
                                        >
                                            <About.ItemSocialIcon href="https://www.tiktok.com/@marasigan.johnmartin" target={"_blank"}>
                                                <FaTiktok />
                                            </About.ItemSocialIcon>
                                        </motion.div>

                                        <motion.div
                                            whileInView={{ scale: [0, 1 ]}}
                                            transition={{ duration: 0.5, delay: 1.0 }}
                                        >
                                            <About.ItemSocialIcon href="https://www.strava.com/athletes/140326588" target={"_blank"}>
                                                <FaStrava />
                                            </About.ItemSocialIcon>
                                        </motion.div>
                                    </About.ContainerSocial>
                                </About.ContainerContacts>           
                            </About.ContainerProfileContactTexts>

                            <About.ContainerBusinessShopButtons>
                                <SpaceHeightMedium />
                                <About.TextSubTitle>
                                    Business Shops
                                </About.TextSubTitle>

                                <SpaceHeightSmall />

                                <About.ItemButton
                                    href="https://bit.ly/4e028BB" target="_blank"
                                >
                                    <About.TextBusinessShopTitle>FOOD</About.TextBusinessShopTitle>
                                </About.ItemButton>

                                <SpaceHeightSmall />

                                <About.ItemButton
                                    href="https://bit.ly/3ZmEhrn" target="_blank"
                                >
                                    <About.TextBusinessShopTitle>HEALTH & WELLNESS</About.TextBusinessShopTitle>
                                </About.ItemButton>
                            </About.ContainerBusinessShopButtons>
                        </About.ContainerAvatarInfo>

                        <About.BoxInfo>
                            <About.ContainerDivider>
                                <About.TextSubTitle>
                                    About
                                </About.TextSubTitle>
                                <SpaceHeightExtraSmall />
                                <Divider type="2"/>
                            </About.ContainerDivider>

                            <SpaceHeightSmall />

                            <About.TextDescription>
                                My name is John Martin but you can call me JM or Em. I'm from Mandaluyong City, Philippines, 
                                and I graduated Cum Laude with a Bachelor's degree in Information Technology from Jose Rizal University. 
                            </About.TextDescription>

                            <SpaceHeightSmall />

                            <About.TextDescription>
                                I currently work at Infor, a software development company based in Bonifacio Global City, Taguig. 
                                As a Mobile Developer, I help provide support and maintenance for customer applications. Having been 
                                with Infor for almost two years, I’m still enthusiastic about being part of a team that gets the job done. 
                                Choosing Infor as my first professional job has been one of the best decisions I've made. I’ve had the privilege 
                                of working alongside exceptional people who share a philosophy of teamwork, making me feel 
                                valued and appreciated as part of the team.
                            </About.TextDescription>

                            <SpaceHeightSmall />

                            <About.TextDescription>
                                Infor specializes in developing software solutions that help businesses achieve their goals. One of the things 
                                I admire most about the company is its strong sense of camaraderie, which fosters excellent teamwork and 
                                drives us to deliver high-quality results for our customers. I’m also fortunate to have great leaders who 
                                ensure that none of us fall behind and that we’re always on the right path.
                            </About.TextDescription>
                            
                            <About.TextDescription>
                                To read more about Infor, go to <About.TextLink type="2" to="https://www.infor.com/about">https://www.infor.com/about</About.TextLink>
                            </About.TextDescription>

                            {/* hobbies */}
                            
                            <SpaceHeightMedium />

                            <About.ContainerDivider>
                                <About.TextSubTitle>
                                    Hobbies
                                </About.TextSubTitle>
                                <SpaceHeightExtraSmall />
                                <Divider type="2"/>
                            </About.ContainerDivider>

                            <SpaceHeightSmall />

                            <About.TextDescription>
                                I regularly go to the gym, which has become my comfort zone after a long day. It helps boost my mood, 
                                instills self-discipline, and promotes a healthier mind and body. I also enjoy reading, particularly 
                                books on self-improvement. In my free time, I often seek out peaceful places where I can spend time alone and clear my mind.
                            </About.TextDescription>

                            <SpaceHeightSmall />

                            <About.TextDescription>
                                I do also upload some workout videos. Come check it out!
                                    <About.ItemSocialIconNavigation href="https://www.instagram.com/marasigan.johnmartin/" target={"_blank"}> 
                                        <BsArrowUpRight />    
                                    </About.ItemSocialIconNavigation>
                            </About.TextDescription>

                            <SpaceHeightSmall />

                            <About.TextDescription>
                                I’m also passionate about music. I love listening to various genres and enjoy playing both acoustic and electric guitar. 
                                As a former lead guitarist in a band, I also have experience playing bass. I began my guitar journey back in 2012, and 
                                while there’s always room to grow, I’m confident in my current abilities on these instruments.
                            </About.TextDescription>

                            <SpaceHeightSmall />

                            <About.TextDescription>
                                Here are some of my playlists.
                                    <About.ItemSocialIconNavigation href="https://open.spotify.com/user/aefmkewrqb1omnoiqyqg3wjh2" target={"_blank"}> 
                                        <BsArrowUpRight />    
                                    </About.ItemSocialIconNavigation>
                            </About.TextDescription>

                            {/* business */}

                            <SpaceHeightMedium />

                            <About.ContainerDivider>
                                <About.TextSubTitle>
                                    Business
                                </About.TextSubTitle>
                                <SpaceHeightExtraSmall />
                                <Divider type="2"/>
                            </About.ContainerDivider>

                            <SpaceHeightSmall />

                            <About.TextDescription>
                                I am also a business owner passionate about health and wellness. I manage a business centered on <About.TextDescriptionHighlight>JC Organic Barley,</About.TextDescriptionHighlight> a 
                                premium health drink made from barley grass sourced from the pristine fields of New Zealand. This superfood offers numerous benefits 
                                like boosting immunity, improving digestion, and balancing blood sugar levels. 
                            </About.TextDescription>

                            <SpaceHeightSmall />

                            <About.TextDescription>
                                I chose JC Organic Barley because of its incredible demand 
                                and its reputation as a trusted brand in the wellness industry. Additionally, I’ve ventured into franchising through JC’s comprehensive 
                                franchise system, which offers exciting opportunities to start or expand a business. With a low one-time investment, lifetime membership, 
                                and no renewal fees, this franchise provides the tools and support needed to succeed, from an online selling platform to potential incentives 
                                like cars and house-and-lot bonuses. My decision to engage in these businesses allows me to promote healthier lifestyles while tapping 
                                into a thriving entrepreneurial community.
                            </About.TextDescription>

                            <SpaceHeightSmall />

                            <About.TextDescription>
                                Check out my shops!
                            </About.TextDescription>

                            <SpaceHeightSmall />

                            <About.TextDescription>
                                Food Shop
                                    <About.ItemSocialIconNavigation href="https://open.spotify.com/user/aefmkewrqb1omnoiqyqg3wjh2" target={"_blank"}> 
                                        <BsArrowUpRight />    
                                    </About.ItemSocialIconNavigation>
                            </About.TextDescription>

                            <SpaceHeightSmall />

                            <About.TextDescription>
                                Health & Wellness Shop
                                    <About.ItemSocialIconNavigation href="https://open.spotify.com/user/aefmkewrqb1omnoiqyqg3wjh2" target={"_blank"}> 
                                        <BsArrowUpRight />    
                                    </About.ItemSocialIconNavigation>
                            </About.TextDescription>

                            <SpaceHeightSmall />

                            <About.TextDescription>
                                The good thing is, this is something you can also have with ease. <About.TextDescriptionHighlight>Message me for details! :)</About.TextDescriptionHighlight>
                            </About.TextDescription>
                        </About.BoxInfo>
                    </About.BoxProfile>
                </About.Box>
            </motion.div>
        </About>
    )
}