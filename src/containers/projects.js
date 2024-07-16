import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Title, 
         Divider, 
         SubBox, 
         DescriptionText, 
         NavigationIcon,
         SpaceWidthSmall}  from "../globalComponents";

import { Projects } from '../components';
import { BsArrowUpRight } from "react-icons/bs";

import ProjectsData from '../fixtures/projects.json';
import { AiFillGithub } from 'react-icons/ai';


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
        // <Projects id="projects">
        //     <motion.div
        //         whileInView={{ y: [100, 0], opacity: [0, 1]}}
        //     >
        //         <Projects.Box>
        //             <Title>Stuffs I’ve built</Title>
        //             <Divider type="2" />

        //             <Projects.ProjectsContainer>
        //                 {filterProjects.map((item) => (
        //                     <motion.div
        //                         key={item.id}
        //                         animate={animateCard}
        //                         transition={{ duration: 0.5 }}
        //                     >
        //                         <Projects.Project>
        //                             <SubBox flexDirection='column'>
        //                                 <Projects.ProjectTitleNavContainer
        //                                     flexDirection='row'
        //                                     justifyContent='space-between'
        //                                 >
        //                                     <Projects.ProjectTitle>{item.title}</Projects.ProjectTitle>
        //                                     <Projects.NavigationContainer>
        //                                         {item.github !== ""? 
        //                                         <>
        //                                             <NavigationIcon 
        //                                                 type='2'
        //                                                 href={item.github} target={"_blank"}>
        //                                                 <AiFillGithub 
        //                                                     size={25}
        //                                                 />
        //                                             </NavigationIcon>

        //                                             <SpaceWidthSmall />
        //                                         </>:<></>
        //                                         }
                                                
        //                                         {item.href !== ""? 
        //                                         <>
        //                                             <NavigationIcon 
        //                                                 type='2'
        //                                                 href={item.href} target={"_blank"}>
        //                                                 <BsArrowUpRight 
        //                                                     size={25}
        //                                                 />
        //                                             </NavigationIcon>
        //                                         </>:<></>
        //                                         }
        //                                     </Projects.NavigationContainer>
        //                                 </Projects.ProjectTitleNavContainer>
                                        
        //                                 <DescriptionText
        //                                     marginTop="24px"
        //                                 >{item.description}</DescriptionText>
        //                                 <Projects.TagsContainer>
        //                                     {item.tech.map(( tag ) => (
        //                                         <Projects.Tag>
        //                                             <Projects.TagText>{tag.name}</Projects.TagText>
        //                                         </Projects.Tag>
        //                                     ))}
        //                                 </Projects.TagsContainer>
        //                             </SubBox>
        //                         </Projects.Project>
        //                     </motion.div>   
        //                 ))}
        //             </Projects.ProjectsContainer>
        //         </Projects.Box>
        //     </motion.div>
        // </Projects>
        <></>
    );
}