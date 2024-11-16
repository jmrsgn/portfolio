import React from 'react';

import { Divider,
         NavigationIcon,
         SpaceHeightMedium,
         SpaceWidthSmall }  from "../globalComponents";

import { Projects } from '../components';
import { BsArrowUpRight } from "react-icons/bs";

import ProjectsData from '../fixtures/projects.json';
import { AiFillGithub } from 'react-icons/ai';
import MotionWrap from '../wrapper/motion-wrap';

export function ProjectsContainer() {
    return (
        <Projects id="projects">
            <MotionWrap
                whileInView={{ y: [100, 0], opacity: [0, 1]}}
            >
                <Projects.Box>
                    <Projects.TextTitle>Stuffs I’ve built</Projects.TextTitle>
                    <Divider type="1" />

                    <Projects.ContainerProjects>
                        {ProjectsData.map((item) => (
                            <Projects.ItemProject>
                                <div>
                                    <Projects.ContainerProjectTitleNav
                                        flexDirection='row'
                                        justifyContent='space-between'
                                    >
                                        <Projects.TextProjectTitle>{item.title}</Projects.TextProjectTitle>
                                        <Projects.ContainerNavigation>
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
                                        </Projects.ContainerNavigation>
                                    </Projects.ContainerProjectTitleNav>
                                    
                                    <SpaceHeightMedium />
                                    <Projects.TextDescription>{item.description}</Projects.TextDescription>
                                    <Projects.ContainerTags>
                                        {item.tech.map(( tag ) => (
                                            <Projects.ItemTag>
                                                <Projects.TextTag>{tag.name}</Projects.TextTag>
                                            </Projects.ItemTag>
                                        ))}
                                    </Projects.ContainerTags>
                                </div>
                            </Projects.ItemProject> 
                        ))}
                    </Projects.ContainerProjects>
                </Projects.Box>
            </MotionWrap>
        </Projects>
    );
}