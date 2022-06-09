import React from "react";

import { HomeContainer } from "../containers/home";
import { AboutContainer } from "../containers/about";
import { ProjectsContainer } from "../containers/projects";
import { NavBarContainer } from "../containers/navbar";
import { SkillsExpContainer } from "../containers/skills-exp";
import { CertBadgesContainer } from "../containers/cert-badges";
import { ContactContainer } from "../containers/contact";


export default function Main() {
    return (
        <>
            <NavBarContainer />      
            
            <HomeContainer />
            <AboutContainer />
            <ProjectsContainer />
            <SkillsExpContainer />
            <CertBadgesContainer />
            <ContactContainer />
        </>
    )
}