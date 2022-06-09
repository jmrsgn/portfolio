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

export function ProjectExpressoContainer() {
    return (
        <Project>
            <Project.Box>
                <Title>Expresso</Title>
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
                                Expresso is an Android application created by <SpanBoldText color="#3AAFC9">Java</SpanBoldText>, and <SpanBoldText color="#3AAFC9">Php</SpanBoldText> for the fetching of data. It provides a friendly interface and uses machine learning to help students learn OOP using Java as a tool, developed by our team Code Brewers.
                            </SmallText>

                            <SmallText marginTop="1rem">
                                This project is also our capstone project in our 4th year College. We decided to make this system for students to learn how to code OOP using Java. 
                            </SmallText>

                            <SmallText marginTop="1rem">
                                According to our research results, a lot of students are struggling to learn OOP with Java due to its code complexity and syntax. Expresso works by testing first the student’s current knowledge about the language to know what part of the module will be given to the student.
                            </SmallText>

                            <SmallText marginTop="1rem">
                                Once the fitted module is given, each topic has a short quiz that will be recorded, and the student must have a passing mark in order to proceed. After the student passed the topics’ quizzes and the summative test, exercises will be generated.
                            </SmallText>
                            
                            <SmallText marginTop="1rem">
                                How the exercises will be generated? there goes the <SpanBoldText color="#3AAFC9">Microsoft Personalizer</SpanBoldText>.
                            </SmallText>

                            <SmallText marginTop="1rem">
                                Making our own AI model is far too advanced for us, so we decided to use some of the pre-built tools. Microsoft Personalizer uses machine learning that uses all the data you give and will present the most fitted content for you. 
                            </SmallText>

                            <SmallText marginTop="1rem">
                                So based on the quiz results that the student gave, the machine learning will do it’s work to provide the best exercise prior to the student’s performance.
                            </SmallText>

                            <SmallText marginTop="1rem">
                                We also provides visualization of the provided code by the student for the overview of the structure, for that we use <SpanBoldText color="#3AAFC9">plantUML</SpanBoldText> visualization. 
                            </SmallText>
                        </Project.TextDiv>
                    </BoxFlex>
{/* 
                    <ProjectImage 
                        height="500px"
                        src="../images/projects/expresso-1.png"
                     /> */}
                </Project.SubBox>

                <BoxFlex marginTop="4rem" alignItems="center">
                    <SubTitle>What I did</SubTitle>
                    <MiniDivider type="1" marginLeft="1rem"/>
                </BoxFlex>
                <SmallText>
                    I was the one assigned to make the Mobile application. I used Java to build the Android application itself, and php for the fecthing of data from the database. I used several API’s to make the application have enough features for the user, including the Youtube player API. Expresso also have a Web app version and my friend is the one who built it. The two other members are working with our papers. 
                </SmallText>

                <BoxFlex marginTop="4rem" alignItems="center">
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
                        <Project.Tech src="../images/tech/php.png" />
                        <SmallText marginTop="1rem">Php</SmallText>
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
                            src="../images/tech/plantuml.png"
                            width="40px"        
                        />
                        <SmallText marginTop="1rem">PlantUML</SmallText>
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
                            src="../images/tech/microsoft-personalizer.png"
                            width="40px"    
                        />
                        <SmallText marginTop="1rem">Microsoft Personalizer</SmallText>
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