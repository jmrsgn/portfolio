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

export function ProjectExpressoContainer() {
    return (
        <Project>
            <Project.Box>
                <Project.NavigationContainer>
                    <IoCaretBack 
                        size={40}
                        onClick={ window.close.bind(this) }
                    />
                    <Title marginLeft="30px">Expresso</Title>
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
                                Expresso is an Android application created by <SpanBoldText color="#3AAFC9">Java</SpanBoldText>, and <SpanBoldText color="#3AAFC9">PHP</SpanBoldText>. It provides a friendly interface and uses Machine Learning to help students learn OOP using Java as a tool, developed by our team, Code Brewers.
                            </SmallText>

                            <SmallText marginTop="1rem">
                                This project is also our capstone project in College. We decided to make this system for students to learn how to code OOP using Java. We got the name Expresso as to "Express" your thoughts and skills to the model in the app you are interacting to, and it will guide you to learn in return. 
                            </SmallText>

                            <SmallText marginTop="1rem">
                                According to our research results, a lot of students are struggling to learn OOP with Java due to its code complexity and syntax. Expresso works by testing first the student’s current knowledge about the language to know what part of the module will be given. Once the module is given, each topic has a short quiz that will be recorded, and the student must have a passing mark in order to proceed. After the student passed the topics’, quizzes and the summative tests, exercises will be generated for them to answer.
                            </SmallText>
                            
                            <SmallText marginTop="1rem">
                                How the exercises will be generated? there goes the <SpanBoldText color="#3AAFC9">Microsoft Personalizer</SpanBoldText>.
                            </SmallText>

                            <SmallText marginTop="1rem">
                                Making our own AI model is not possible to given time frame, so we decided to use some of the pre-built tools online. Microsoft Personalizer uses machine learning that uses all the data you give and will present the most relatable content for you. 
                            </SmallText>

                            <SmallText marginTop="1rem">
                                So based on the quiz results from the student, the model will do it’s work to provide the best exercise prior to the student’s performance.
                            </SmallText>

                            <SmallText marginTop="1rem">
                                We also provides visualization of the provided code by the student for the overview of the structure, for that we use <SpanBoldText color="#3AAFC9">plantUML</SpanBoldText> visualization. 
                            </SmallText>
                        </Project.TextDiv>
                    </BoxFlex>

                    <Project.ProjectImage 
                        src="../images/projects/expresso-1.png"
                    />
                </Project.SubBox>

                <BoxFlex marginTop="4rem" alignItems="center">
                    <SubTitle>What I did</SubTitle>
                </BoxFlex>
                <SmallText marginTop="1rem">
                    I built the Mobile Application. I used Java to build the Android application itself, and PHP for the fecthing of data from the database. I used several API’s to make the application have enough features for the user, including the Youtube Player API, and Material Design for a nice interface. Expresso also have a Web Application version that was developed by the other member and also my friend. The two other members are working with our papers. 
                </SmallText>

                <BoxFlex marginTop="4rem" alignItems="center">
                    <SubTitle>Tech Used</SubTitle>
                </BoxFlex>
                
                <Project.TechContainer>
                    {ProjectsData.map((item) => (
                        (item.title === "Expresso" && 
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
                        (item.title === "Expresso" && 
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