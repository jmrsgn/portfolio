import React, { useContext, useState } from "react";

import { HomeContainer } from "../containers/home";
import { ProjectsContainer } from "../containers/projects";
import { NavBarContainer } from "../containers/navbar";
import { SkillsExpContainer } from "../containers/skills-exp";
import { ContactContainer } from "../containers/contact";
import { useInView } from "react-intersection-observer";


export default function Main() {
    const { ref: homeRef, inView: isHomeVisible } = useInView();
    const { ref: projectsRef, inView: isProjectsVisible } = useInView();

    const [activeTab, setActiveTab] = useState('home');

    return (
        <>
            <NavBarContainer 
                visibleTab={activeTab}
            />    
            
            <div ref={homeRef}>
                <HomeContainer />
            </div>

            <div ref={projectsRef}>
                <ProjectsContainer />
            </div>
            
            <SkillsExpContainer />
            <ContactContainer />
        </>
    )
}