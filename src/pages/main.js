import React from "react";

import { HomeContainer } from "../containers/home";
import { ProjectsContainer } from "../containers/projects";
import { NavBarContainer } from "../containers/navbar";
import { ExperiencesContainer } from "../containers/experiences";
import { ContactContainer } from "../containers/contact";
import { AboutContainer } from "../containers/about";
import { useInView } from "react-intersection-observer";
import { SpotifyPlayer } from "../spotify/spotify";

export default function Main() {
    const { ref: homeRef, inView: isHomeVisible } = useInView({ threshold: 0.35 });
    const { ref: aboutRef, inView: isAboutActive } = useInView({ threshold: 0.35 });
    const { ref: projectsRef, inView: isProjectsVisible } = useInView({ threshold: 0.35 });
    const { ref: experiencesRef, inView: isExperiencesVisible } = useInView({ threshold: 0.35 });
    const { ref: contactRef, inView: isContactVisible } = useInView({ threshold: 0.35 });

    const homeActive = isHomeVisible? 'home' : '';
    const aboutActive = isAboutActive? 'about' : '';
    const projectsActive = isProjectsVisible? 'projects' : '';
    const experiencesActive = isExperiencesVisible? 'experiences' : '';
    const contactActive = isContactVisible? 'contact' : '';

    return (
        <>
            <NavBarContainer 
                visibleTab={homeActive || aboutActive || projectsActive || experiencesActive || contactActive}
            />    

            <SpotifyPlayer />
            
            <div ref={homeRef}>
                <HomeContainer />
            </div>

            <div ref={aboutRef}>
                <AboutContainer />
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
    );
};