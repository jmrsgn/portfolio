import React from 'react';

import { Project } from '../components';
import { Title, 
         Divider, 
         SocialIcon, 
         SmallText, 
         SpanBoldText,
         BoxFlex, 
         SubTitle } from "../globalComponents";

import { AiFillGithub } from 'react-icons/ai';
import { IoCaretBack } from "react-icons/io5";
import ProjectsData from '../fixtures/projects.json';

export function ProjectCarkilahanContainer() {
    return (
        <Project>
            <Project.Box>
                <Project.NavigationContainer>
                    <IoCaretBack 
                        size={40}
                        onClick={ window.close.bind(this) }
                    />
                    <Title marginLeft="30px">Carkilahan</Title>
                </Project.NavigationContainer>
                
                <Divider  
                    marginTop="10px"
                    marginLeft="70px"
                    type="1"
                />

                <Project.ActionContainer>
                    {/* <FilterCell type="1" cursor="default">
                        <FilterText>Mobile App</FilterText>
                    </FilterCell> */}

                    <SocialIcon href="#" target={"_blank"}> 
                        <AiFillGithub />
                    </SocialIcon>
                </Project.ActionContainer>

                <Project.SubBox>
                    <BoxFlex flexDirection="column">
                        <Project.TextDiv>
                            <SmallText>
                                Carkilahan is an Android application created by <SpanBoldText color="#3AAFC9">Java</SpanBoldText>, and used <SpanBoldText color="#3AAFC9">Firebase</SpanBoldText> for the back-end side. It is an application that helps user to book a car for their journey, and also my first application ever built.
                            </SmallText>

                            <SmallText marginTop="1rem">
                                This is our mini-project in College, and this is also the reason why I fell in love with Android Development. 
                            </SmallText>

                            <SmallText marginTop="1rem">
                                I have 0% knowledge before our professor gave this task to us, so I have no choice but to study how to make a simple Android application using Java. After hours of studying and searching for solutions online. I didn't notice that I have created my very first Java application with minimal features and connect it to the back-end.
                            </SmallText>
                        </Project.TextDiv>
                    </BoxFlex>

                    <Project.ProjectImage 
                        src="../images/projects/carkilahan-1.png"
                    />
                </Project.SubBox>

                <BoxFlex marginTop="4rem" alignItems="center">
                    <SubTitle>What I did</SubTitle>
                </BoxFlex>
                <SmallText marginTop="1rem">
                    I built the Mobile Application without using any third-party libraries for the UI, so the UI might be a little bit sore in the eyes of other Devs, but I am very happy about the outcome and how it saves me from the semester. It's just a simple Application, nothing special. 
                </SmallText>

                <BoxFlex marginTop="4rem" alignItems="center">
                    <SubTitle>Tech Used</SubTitle>
                </BoxFlex>
                
                <Project.TechContainer>
                    {ProjectsData.map((item) => (
                        (item.title === "Carkilahan" && 
                            (item.tech.map((tech) => (
                                <BoxFlex
                                    margin=".5rem" 
                                    flexDirection="column"
                                    textAlign="center"
                                    width="100px"
                                    alignItems="center"
                                >
                                    <Project.Tech 
                                        src={tech.src}
                                        height="40px"
                                    />
                                    <SmallText marginTop="1rem">{tech.name}</SmallText>
                                </BoxFlex>
                            )))
                        )
                    ))}
                </Project.TechContainer>

                <BoxFlex marginTop="3rem" alignItems="center">
                    <SubTitle>Some screenshots</SubTitle>
                </BoxFlex>

                <Project.ScreenshotContainer>
                    {ProjectsData.map((item) => (
                        (item.title === "Carkilahan" && 
                            (item.screenshots.map((screenshot, i) => (
                                (i !== 0 && 
                                    <Project.Screenshot 
                                        height="500px"
                                        width="auto"
                                        src={screenshot} />  
                                )
                            )))
                        )
                    ))}
                </Project.ScreenshotContainer>

                <IoCaretBack 
                    style={{ cursor: 'pointer' }}
                    size={40}
                    onClick={ window.close.bind(this) }
                />
            </Project.Box>
        </Project>
    )
}