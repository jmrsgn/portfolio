import React from "react";

import { HomeContainer } from "../containers/home";
import { ProjectsContainer } from "../containers/projects";
import { NavBarContainer } from "../containers/navbar";
import { ExperiencesContainer } from "../containers/experiences";
import { ContactContainer } from "../containers/contact";
import { useInView } from "react-intersection-observer";

export default function Main() {
    const { ref: homeRef, inView: isHomeVisible } = useInView({ threshold: 0.35 });
    const { ref: projectsRef, inView: isProjectsVisible } = useInView({ threshold: 0.35 });
    const { ref: experiencesRef, inView: isExperiencesVisible } = useInView({ threshold: 0.35 });
    const { ref: contactRef, inView: isContactVisible } = useInView({ threshold: 0.35 });

    const homeActive = isHomeVisible? 'home' : '';
    const projectsActive = isProjectsVisible? 'projects' : '';
    const experiencesActive = isExperiencesVisible? 'experiences' : '';
    const contactActive = isContactVisible? 'contact' : '';

    return (
        <>
            <NavBarContainer 
                visibleTab={homeActive || projectsActive || experiencesActive || contactActive}
            />    
            
            <div ref={homeRef}>
                <HomeContainer />
            </div>

            <div ref={projectsRef}>
                <ProjectsContainer />
            </div>

            <div ref={experiencesRef}>
                <ExperiencesContainer />
            </div>

            <div ref={contactRef}>
                <ContactContainer />
            </div>
        </>
    )
}