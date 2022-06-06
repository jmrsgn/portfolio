import React, { useState, useEffect } from 'react';

import { Title, Divider, TextLink } from "../globalComponents";
import { Projects } from '../components';

import FiltersData from '../fixtures/filters.json';
import ProjectsData from '../fixtures/projects.json';


export function ProjectsContainer() {
    const [projects, setProjects] = useState([]);
    const [filterProjects, setFilterProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    function loadProjects(filter) {
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
    }

    useEffect(() => {
        ProjectsData.map((item) => (
            projects.push(item)
        ))

        setProjects(projects);
        setFilterProjects(projects);
    }, []);

    useEffect(() => {
        loadProjects(activeFilter);
    }, [activeFilter]);

    return (
        <Projects id="projects">
            <Projects.Box>
                <Title>Stuffs I’ve already built / will build</Title>
                <Divider type="1" />

                <Projects.FiltersContainer>
                    {FiltersData.map((item) => (
                        <Projects.FilterCell 
                            key={item.id} 
                            type={activeFilter === item.name ? '1' : ''}
                            onClick={() => handleProjectFilter(item.name)}    
                        >
                            <Projects.FilterText>{item.name}</Projects.FilterText>
                        </Projects.FilterCell>
                    ))}
                </Projects.FiltersContainer>

                <Projects.ProjectsContainer>
                    {filterProjects.map((item) => (
                        <Projects.SubBox>
                            <Projects.ProjectCell key={item.id}>
                                <Projects.ProjectTitle>{item.title}</Projects.ProjectTitle>
                                <Projects.ProjectDescription
                                    marginBottom="24px"
                                >{item.description}</Projects.ProjectDescription>
                                <TextLink 
                                    type='1' 
                                    to={item.link}
                                >
                                    Read more
                                </TextLink>

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

                            <Projects.ProjectImage src={item.src} />
                        </Projects.SubBox>     
                    ))}
                </Projects.ProjectsContainer>
            </Projects.Box>
        </Projects>
    )
}