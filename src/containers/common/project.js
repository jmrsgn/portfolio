import React from 'react';
import { Project } from '../../components';

import { Title, 
         Divider, 
         SocialIcon,
         BoxFlex, 
         SubTitle, 
         DescriptionText, 
         NavigationIcon,
         SpaceWidthSmall,
         TechText} from "../../globalComponents";

import { AiFillGithub } from 'react-icons/ai';
import { IoCaretBack } from "react-icons/io5";
import ProjectsData from '../../fixtures/projects.json';

export function ProjectContainer(props) {
    document.title = props.projectName;

    return (
        <Project>
            <Project.Box>
                <Project.ActionContainer>
                    <Title marginLeft="30px">{props.projectName}</Title>

                    <Project.NavigationContainer>
                        <Project.NavigationIcon>
                            <IoCaretBack 
                                size={25}
                                onClick={ window.close.bind(this) }
                            />
                        </Project.NavigationIcon>

                        <SpaceWidthSmall />

                        <Project.NavigationIcon type='2' href="#" target={"_blank"}> 
                            <AiFillGithub />
                        </Project.NavigationIcon>
                    </Project.NavigationContainer>
                </Project.ActionContainer>

                <Divider  
                   type='2'
                />

                <Project.SubBox
                    marginTop="3rem"
                >
                    <Project.ProjectInfoDiv>
                        {props.projectInfo.map((item, index) => (
                            <DescriptionText
                                marginTop={index !== 0? '1rem':'0'}
                            >{item}</DescriptionText>
                        ))}
                    </Project.ProjectInfoDiv>

                    <Project.ProjectImage 
                        src={props.projectImage}
                    />
                </Project.SubBox>

                <Project.SubBox
                    marginTop='5rem'
                >
                    {/* what i did */}
                    <Project.WhatIDoInfoContainer>
                        <Project.WhatIDoDiv>
                            <SubTitle>What I did</SubTitle>

                            <DescriptionText marginTop="2rem">
                                {props.whatIDid}
                            </DescriptionText>
                        </Project.WhatIDoDiv>
                    </Project.WhatIDoInfoContainer>

                    {/* tech  */}
                    <Project.TechInfoContainer>
                        <SubTitle>Tech used</SubTitle>

                        <Project.TechContainer> 
                            {ProjectsData.map((item) => (
                                (item.title === props.projectName && 
                                    (item.tech.map((tech) => (
                                        <BoxFlex
                                            margin=".5rem" 
                                            flexDirection="column"
                                            textAlign="center"
                                            width="80px"
                                            alignItems="center"
                                        >
                                            <Project.Tech 
                                                src={tech.src}
                                                height="40px"
                                            />
                                            <DescriptionText marginTop="1rem">{tech.name}</DescriptionText>
                                        </BoxFlex>
                                    )))
                                )
                            ))}
                        </Project.TechContainer>
                    </Project.TechInfoContainer>
                </Project.SubBox>
                
                {/* screenshots */}
                {ProjectsData.map((item) => (
                    (item.title === props.projectName && 
                        (item.screenshots.length > 1 && (
                            <Project.ScreenshotsInfoContainer>
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
                            </Project.ScreenshotsInfoContainer>
                        )))
                    )
                )}

                <Project.NavigationContainer
                    marginTop='3rem'
                >
                    <Project.NavigationIcon>
                        <IoCaretBack 
                            size={25}
                            onClick={ window.close.bind(this) }
                        />
                    </Project.NavigationIcon>

                    <SpaceWidthSmall />

                    <TechText 
                        type='regular'
                    >Return to Home</TechText>
                </Project.NavigationContainer>
            </Project.Box>
        </Project>
    )
}