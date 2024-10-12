import React from 'react';
import { ProjectContainer } from './common/project';

export function ProjectsCarkilahanContainer() {
    const projectName = "Carkilahan";
    const projectImage = "../../images/projects/carkilahan-1.png"
    const projectInfo = 
        [
            'Carkilahan is an Android application created by Java, and used Firebase for the back-end side. It is an application that helps user to reserve a vehicle to use for ther trip, and also this was my first application ever built.',
            'This is during our mini-project in College, we have literally have zero knowlegde in building mobile apps, and we were tasked to do an one to present. This is merely my starting point of being into Android Development.',
            'I did self study, watch tutorial vidoes on Youtube and read articles on basic implementations. There is one 11-hr video on Youtube that I finished, gathering all the lessons taught, I was able to finish the application.',
            'No architectures and proper code structures implemented, just basic codes that will run and present all the needed features. After finishing the app, I looked into the internet on what to use for the back-end side. There goes Firebase, an app development platform made by Google which helps users to implement features on their apps with ease.',
            'I used Firebase\' authentication feature, which let the users log in using their Google Account, and Firebase Firestore for data storage.'
        ]
    
    const whatIDid = "I built the Mobile Application without using any third-party libraries for the UI, so the UI might be a little bit sore in the eyes of other Devs, but I am very happy about the outcome and how it saves me from the semester. It's just a simple Application with CRUD implementation, nothing special.";

    return (
        <ProjectContainer 
            projectName = {projectName}
            projectImage = {projectImage}
            projectInfo = {projectInfo}
            whatIDid = {whatIDid}
        />
    )
}