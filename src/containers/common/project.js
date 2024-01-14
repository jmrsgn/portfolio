import React from 'react';
import { Project } from '../../components';

import { Title, 
         Divider, 
         SocialIcon,
         BoxFlex, 
         SubTitle, 
         Description} from "../../globalComponents";

import { AiFillGithub } from 'react-icons/ai';
import { IoCaretBack } from "react-icons/io5";
import ProjectsData from '../../fixtures/projects.json';

export function ProjectContainer(props) {
    document.title = props.projectName;

    return (
        <Project>
            <Project.Box>
                <Project.ActionContainer>
                    <Project.NavigationContainer>
                        <IoCaretBack 
                            size={40}
                            onClick={ window.close.bind(this) }
                        />
                        <Title marginLeft="30px">{props.projectName}</Title>
                    </Project.NavigationContainer>
                    
                    {/* <FilterCell type="1" cursor="default">
                        <FilterText>Mobile App</FilterText>
                    </FilterCell> */}

                    <SocialIcon href="#" target={"_blank"}> 
                        <AiFillGithub />
                    </SocialIcon>
                </Project.ActionContainer>

                <Divider  
                    marginTop="10px"
                    marginLeft="70px"
                    type="1"
                />

                <Project.SubBox>
                    {props.projectInfo}

                    <Project.ProjectImage 
                        src={props.projectImage}
                    />
                </Project.SubBox>
                
                <Project.InfoContainer>
                    <SubTitle>What I did</SubTitle>

                    <Description marginTop="1rem">
                        {props.whatIDid}
                    </Description>
                </Project.InfoContainer>

                <Project.InfoContainer>
                    <SubTitle>Tech used</SubTitle>

                    <Project.TechContainer>
                        {ProjectsData.map((item) => (
                            (item.title === props.projectName && 
                                (item.tech.map((tech) => (
                                    <BoxFlex
                                        margin=".5rem" 
                                        flexDirection="column"
                                        textAlign="center"
                                        width="100px"
                                        alignItems="center"
                                    >
                                        <Project.Tech 
                                            src={tech.src}
                                            height="40px"
                                        />
                                        <Description marginTop="1rem">{tech.name}</Description>
                                    </BoxFlex>
                                )))
                            )
                        ))}
                    </Project.TechContainer>
                </Project.InfoContainer>

                {ProjectsData.map((item) => (
                    (item.title === props.projectName && 
                        (item.screenshots.length > 1 && (
                            <Project.InfoContainer>
                                <SubTitle>Screenshots</SubTitle>

                                <Project.ScreenshotContainer>
                                    {ProjectsData.map((item) => (
                                        (item.screenshots.map((screenshot, i) => (
                                            (i !== 0 && 
                                                <Project.Screenshot 
                                                    height="500px"
                                                    width="auto"
                                                    src={screenshot} />  
                                            )
                                        )))
                                    ))}
                                </Project.ScreenshotContainer>
                            </Project.InfoContainer>
                        )))
                    )
                )}

                <IoCaretBack 
                    style={{ cursor: 'pointer' }}
                    size={40}
                    onClick={ window.close.bind(this) }
                />
            </Project.Box>
        </Project>
    )
}