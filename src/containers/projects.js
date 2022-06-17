import React, { useState, useEffect } from 'react';
import { animate, motion } from 'framer-motion';

import { Title, 
         Divider, 
         TextLink, 
         FilterCell, 
         FilterText, 
         ProjectMobileAppImage, 
         ProjectWebAppImage } from "../globalComponents";

import MotionWrap from "../wrapper/motion-wrap";
import { Projects } from '../components';

import FiltersData from '../fixtures/filters.json';
import ProjectsData from '../fixtures/projects.json';


export function ProjectsContainer() {
    const [projects, setProjects] = useState([]);
    const [filterProjects, setFilterProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    function loadProjects(filter) {
        console.log(animateCard);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (filter === 'All') {
                setFilterProjects(projects);
            } else {
                setFilterProjects(projects.filter((project) => project.filter === filter));
            }
        }, 500);
    }

    function handleProjectFilter(filter) {
        setActiveFilter(filter);
        setAnimateCard([{ y: 100, opacity: 0 }]);
        loadProjects(filter);
    }

    useEffect(() => {
        ProjectsData.map((item) => (
            projects.push(item)
        ))

        setProjects(projects);
        setFilterProjects(projects);
    }, []);

    return (
        <Projects id="projects">
            <MotionWrap>
                <Projects.Box>
                    <Title>Stuffs I’ve already built / will build</Title>
                    <Divider type="1" />

                    <Projects.FiltersContainer>
                        {FiltersData.map((item) => (
                            <FilterCell 
                                key={item.id} 
                                type={activeFilter === item.name ? '1' : ''}
                                onClick={() => handleProjectFilter(item.name)}    
                            >
                                <FilterText>{item.name}</FilterText>
                            </FilterCell>
                        ))}
                    </Projects.FiltersContainer>

                    <Projects.ProjectsContainer>
                        {filterProjects.map((item) => (
                            <motion.div
                                animate={animateCard}
                                transition={{ duration: 0.5 }}
                            >
                                <Projects.SubBox key={item.id}>
                                    <Projects.ProjectCell>
                                        <Projects.ProjectTitle>{item.title}</Projects.ProjectTitle>
                                        <Projects.ProjectDescription>{item.description}</Projects.ProjectDescription>
                                            
                                            {/* <TextLink 
                                                type='1' 
                                                to={item.link}
                                                target={"_blank"}
                                            >
                                                Read more
                                            </TextLink> */}

                                        <Projects.TagsContainer>
                                            {item.tech.map(( tag ) => (
                                                <Projects.TagCell>
                                                    <Projects.TagText>{tag}</Projects.TagText>
                                                </Projects.TagCell>
                                            ))}
                                        </Projects.TagsContainer>

                                        {item.development && (
                                            <Projects.DevelopmentTag>
                                                <Projects.DevelopmentText>Development</Projects.DevelopmentText>
                                            </Projects.DevelopmentTag>
                                        )}
                                    </Projects.ProjectCell>

                                    {item.filter === 'Web App'? <ProjectWebAppImage src={item.src} /> : <ProjectMobileAppImage src={item.src} />}
                                </Projects.SubBox>  
                            </motion.div>   
                        ))}
                    </Projects.ProjectsContainer>
                </Projects.Box>
            </MotionWrap>
        </Projects>
    )
}