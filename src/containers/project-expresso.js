import React from 'react';
import { ProjectContainer } from './common/project';

import { Project } from '../components';
import { DescriptionText,
         BoxFlex } from "../globalComponents";

export function ProjectExpressoContainer() {
    const projectName = "Expresso";
    const projectImage = "../../images/projects/expresso-1.png";
    const projectInfo = 
        <>
            <BoxFlex flexDirection="column">
                <Project.TextDiv>
                    <DescriptionText>
                        Expresso is an Android application created by Java, and PHP. It provides a friendly interface and uses Machine Learning to help students learn OOP using Java as a tool, developed by our team, Code Brewers.
                    </DescriptionText>

                    <DescriptionText marginTop="1rem">
                        This project is also our capstone project in College. We decided to make this system for students to learn how to code OOP using Java. We got the name Expresso as to "Express" your thoughts and skills to the model in the app you are interacting to, and it will guide you to learn in return. 
                    </DescriptionText>

                    <DescriptionText marginTop="1rem">
                        According to our research results, a lot of students are struggling to learn OOP with Java due to its code complexity and syntax. Expresso works by testing first the student’s current knowledge about the language to know what part of the module will be given. Once the module is given, each topic has a short quiz that will be recorded, and the student must have a passing mark in order to proceed. After the student passed the topics’, quizzes and the summative tests, exercises will be generated for them to answer.
                    </DescriptionText>
                            
                    <DescriptionText marginTop="1rem">
                        How the exercises will be generated? there goes the Microsoft Personalizer.
                    </DescriptionText>

                    <DescriptionText marginTop="1rem">
                        Making our own AI model is not possible to given time frame, so we decided to use some of the pre-built tools online. Microsoft Personalizer uses machine learning that uses all the data you give and will present the most relatable content for you. 
                    </DescriptionText>

                    <DescriptionText marginTop="1rem">
                        So based on the quiz results from the student, the model will do it’s work to provide the best exercise prior to the student’s performance.
                    </DescriptionText>

                    <DescriptionText marginTop="1rem">
                        We also provides visualization of the provided code by the student for the overview of the structure, for that we use plantUML visualization. 
                    </DescriptionText>
                </Project.TextDiv>
            </BoxFlex>
        </>

    const whatIDid = "I built the Mobile Application. I used Java to build the Android application itself, and PHP for the fecthing of data from the database. I used several API’s to make the application have enough features for the user, including the Youtube Player API, and Material Design for a nice interface. Expresso also have a Web Application version that was developed by the other member and also my friend. The two other members are working with our papers.";

    return (
        <ProjectContainer 
            projectName = {projectName}
            projectImage = {projectImage}
            projectInfo = {projectInfo}
            whatIDid = {whatIDid}
        />
    )
}