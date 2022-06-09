import React from 'react';

import { Project } from '../components';
import { Title, 
         Divider, 
         TextLink, 
         FilterCell, 
         FilterText, 
         SocialIcon, 
         SmallText, 
         SpanBoldText,
         BoxFlex, 
         MiniDivider,
         SubTitle} from "../globalComponents";

import { AiFillGithub } from 'react-icons/ai';

export function ProjectCarkilahanContainer() {
    return (
        <Project>
            <Project.Box>
                <Title>Carkilahan</Title>
                <Divider type="1"/>

                <Project.ActionContainer>
                    <FilterCell type="1" cursor="default">
                        <FilterText>Mobile App</FilterText>
                    </FilterCell>

                    <SocialIcon href="#" target={"_blank"}> 
                        <AiFillGithub />
                    </SocialIcon>
                </Project.ActionContainer>

                <Project.SubBox>
                    <BoxFlex flexDirection="column">
                        <Project.TextDiv>
                            <SmallText>
                                Carkilahan is an Android application created by <SpanBoldText color="#3AAFC9">Java</SpanBoldText>, and used <SpanBoldText color="#3AAFC9">Firebase</SpanBoldText> for the back-end side. It is our mini-project which capable of helping users to book their ride for their journey, developed by our team Code Brewers. 
                            </SmallText>

                            <SmallText marginTop="1rem">
                                This is our mini-project and this is the first Android application I have ever made.
                            </SmallText>

                            <SmallText marginTop="1rem">
                                It is actually done by accident, we don’t have any idea about Mobile Development and we are tasked to do a Mobile App as our project, so we are forced to learn it ourselves.
                            </SmallText>

                            <SmallText marginTop="1rem">
                                Carkilahan is a very small app, nothing special. It compose of basic implementation of features such as renting a car, and notify the users about it.
                            </SmallText>

                            <BoxFlex marginTop="4rem" alignItems="center">
                                <SubTitle>What I did</SubTitle>
                                <MiniDivider type="1" marginLeft="1rem"/>
                            </BoxFlex>
                            <SmallText>
                                I was the one assigned to make the Mobile application.  I used Java to make the Android application and Firebase for the backend. This is the first application I made and I suddenly fell in love with Mobile Development. 
                            </SmallText>
                        </Project.TextDiv>
                    </BoxFlex>

                    {/* <ProjectImage 
                        height="500px"
                        src="../images/projects/carkilahan-1.png"
                     /> */}
                </Project.SubBox>

                <BoxFlex alignItems="center">
                    <SubTitle>Tech used</SubTitle>
                    <MiniDivider type="1" marginLeft="1rem"/>
                </BoxFlex>
                
                <Project.TechContainer>
                    <BoxFlex
                        margin=".5rem" 
                        flexDirection="column"
                        textAlign="center"
                        width="100px"
                        alignItems="center"
                    >
                        <Project.Tech 
                            src="../images/tech/java.png"
                            width="40px"
                        />
                        <SmallText marginTop="1rem">Java</SmallText>
                    </BoxFlex>

                    <BoxFlex
                        margin=".5rem" 
                        marginLeft="1rem"
                        flexDirection="column"
                        textAlign="center"
                        width="100px"
                        alignItems="center"
                    >
                        <Project.Tech 
                            src="../images/tech/firebase.png" 
                            width="40px"
                        />
                        <SmallText marginTop="1rem">Firebase</SmallText>
                    </BoxFlex>

                    <BoxFlex
                        margin=".5rem" 
                        marginLeft="1rem"
                        flexDirection="column"
                        textAlign="center"
                        width="100px"
                        alignItems="center"
                    >
                        <Project.Tech 
                            src="../images/tech/material-design.png" 
                            width="40px"
                        />
                        <SmallText marginTop="1rem">Material Design</SmallText>
                    </BoxFlex>
                </Project.TechContainer>

                <BoxFlex marginTop="3rem" alignItems="center">
                    <SubTitle>Some screenshots</SubTitle>
                    <MiniDivider type="1" marginLeft="1rem"/>
                </BoxFlex>

                <Project.ScreenshotContainer>
                    <Project.Screenshot 
                        height="500px"
                        width="auto"
                        src="../images/projects/expresso-2.png" />

                <Project.Screenshot 
                        height="500px"
                        width="auto"
                        src="../images/projects/expresso-3.png" />

                <Project.Screenshot 
                        height="500px"
                        width="auto"
                        src="../images/projects/expresso-4.png" />
                </Project.ScreenshotContainer>

                <TextLink type="1" to="/">Return to Home</TextLink>
            </Project.Box>
        </Project>
    )
}