import React from 'react';
import { ProjectContainer } from './common/project';

import { Project } from '../components';
import { BoxFlex, 
         DescriptionText } from "../globalComponents";

export function ProjectCarkilahanContainer() {
    const projectName = "Carkilahan";
    const projectImage = "../../images/projects/carkilahan-1.png"
    const projectInfo = 
        <>
            <BoxFlex flexDirection="column">
                <Project.TextDiv>
                    <DescriptionText>
                        Carkilahan is an Android application created by Java, and used Firebase for the back-end side. It is an application that helps user to book a car for their journey, and also my first application ever built.
                    </DescriptionText>

                    <DescriptionText marginTop="1rem">
                        This is our mini-project in College, and this is also the reason why I fell in love with Android Development. 
                    </DescriptionText>

                    <DescriptionText marginTop="1rem">
                        I have 0% knowledge before our professor gave this task to us, so I have no choice but to study how to make a simple Android application using Java. After hours of studying and searching for solutions online. I didn't notice that I have created my very first Java application with minimal features and connect it to the back-end.
                    </DescriptionText>
                </Project.TextDiv>
            </BoxFlex>
        </>
    
    const whatIDid = "I built the Mobile Application without using any third-party libraries for the UI, so the UI might be a little bit sore in the eyes of other Devs, but I am very happy about the outcome and how it saves me from the semester. It's just a simple Application, nothing special."

    return (
        <ProjectContainer 
            projectName = {projectName}
            projectImage = {projectImage}
            projectInfo = {projectInfo}
            whatIDid = {whatIDid}
        />
    )
}