import React from 'react';

import { Text, BigText, Button, SmallText } from '../globalComponents';
import { Home } from '../components';

import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export function HomeContainer() {
    return (
        <Home id="home">
            <Home.Box>
                <Home.SubBox>
                    <Text>Hello,</Text>
                    <BigText>I'm JM</BigText>
                    <SmallText>An aspiring Developer.</SmallText>
                    <Button buttonType="1" marginTop="48px">Resume</Button>

                    <Home.SocialContainer>
                        <Home.SocialIcon href="https://github.com/jmrsgn" target={"_blank"}> 
                            <AiFillGithub />
                        </Home.SocialIcon>
                        
                        <Home.SocialIcon href="https://www.linkedin.com/in/john-martin-marasigan/" target={"_blank"}>
                            <AiFillLinkedin />
                        </Home.SocialIcon>

                        <Home.SocialIcon href="https://www.instagram.com/jmrsgn_/" target={"_blank"}>
                            <BsInstagram />
                        </Home.SocialIcon>
                    </Home.SocialContainer>
                </Home.SubBox>
            </Home.Box>

            <Home.Box>
                <Home.SubBox>
                    <Home.TechBubbleContainer>
                        <Home.TechBubble>
                            <Home.TechImage src="./images/tech/figma.png" />
                        </Home.TechBubble>

                        <Home.TechBubble>
                            <Home.TechImage src="./images/tech/kotlin.png" />
                        </Home.TechBubble>

                        <Home.TechBubble>
                            <Home.TechImage src="./images/tech/react.png" />
                        </Home.TechBubble>
                    </Home.TechBubbleContainer>

                    <Home.Image marginTop="56px" src='./images/other/laptop.png' />
                </Home.SubBox>
            </Home.Box>
        </Home>
    )
}