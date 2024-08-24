import React from 'react';
import { motion } from 'framer-motion';

import { Title, 
         Divider, 
         DescriptionText, 
         NavigationIcon,
         SpaceWidthSmall}  from "../globalComponents";

import { Projects } from '../components';
import { BsArrowUpRight } from "react-icons/bs";

import ProjectsData from '../fixtures/projects.json';
import { AiFillGithub } from 'react-icons/ai';


export function ProjectsContainer() {
    return (
        <Projects id="projects">
            <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1]}}
            >
                <Projects.Box>
                    <Title>Stuffs I’ve built</Title>
                    <Divider type="1" />

                    <Projects.ProjectsContainer>
                        {ProjectsData.map((item) => (
                            <Projects.Project>
                                <div>
                                    <Projects.ProjectTitleNavContainer
                                        flexDirection='row'
                                        justifyContent='space-between'
                                    >
                                        <Projects.ProjectTitle>{item.title}</Projects.ProjectTitle>
                                        <Projects.NavigationContainer>
                                            {item.github !== ""? 
                                            <>
                                                <NavigationIcon 
                                                    type='1'
                                                    href={item.github} target={"_blank"}>
                                                    <AiFillGithub 
                                                        size={25}
                                                    />
                                                </NavigationIcon>

                                                <SpaceWidthSmall />
                                            </>:<></>
                                            }
                                            
                                            {item.href !== ""? 
                                            <>
                                                <NavigationIcon 
                                                    type='1'
                                                    href={item.href} target={"_blank"}>
                                                    <BsArrowUpRight 
                                                        size={25}
                                                    />
                                                </NavigationIcon>
                                            </>:<></>
                                            }
                                        </Projects.NavigationContainer>
                                    </Projects.ProjectTitleNavContainer>
                                    
                                    <DescriptionText
                                        marginTop="24px"
                                    >{item.description}</DescriptionText>
                                    <Projects.TagsContainer>
                                        {item.tech.map(( tag ) => (
                                            <Projects.Tag>
                                                <Projects.TagText>{tag.name}</Projects.TagText>
                                            </Projects.Tag>
                                        ))}
                                    </Projects.TagsContainer>
                                </div>
                            </Projects.Project> 
                        ))}
                    </Projects.ProjectsContainer>
                </Projects.Box>
            </motion.div>
        </Projects>
    );
}