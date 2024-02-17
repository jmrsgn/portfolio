import React from "react";
import { Container,
         Box,
         SubBox,
         WhatIDoDiv,
         Tech,
         TechContainer,
         ProjectImage,
         Screenshot,
         ScreenshotContainer,
         WhatIDoInfoContainer,
         NavigationContainer,
         ActionContainer, 
         NavigationIcon, 
         ProjectInfoDiv, 
         TechInfoContainer, 
         ScreenshotsInfoContainer } from './styles/project';

export default function Project({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Project.Box = function ProjectBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

Project.ActionContainer = function ProjectActionContainer({ children, ...restProps }) {
    return <ActionContainer {...restProps}>{children}</ActionContainer>
}

Project.SubBox = function ProjectSubBox({ children, ...restProps }) {
    return <SubBox {...restProps}>{children}</SubBox>
}

Project.ProjectInfoDiv = function ProjectProjectInfoDiv({ children, ...restProps }) {
    return <ProjectInfoDiv {...restProps}>{children}</ProjectInfoDiv>
}

Project.WhatIDoDiv = function ProjectWhatIDoDiv({ children, ...restProps }) {
    return <WhatIDoDiv {...restProps}>{children}</WhatIDoDiv>
}

Project.TechContainer = function ProjectTechContainer({ children, ...restProps }) {
    return <TechContainer {...restProps}>{children}</TechContainer>
}

Project.Tech = function ProjectTech({ src, ...restProps }) {
    return <Tech {...restProps} src={src} />
}

Project.ScreenshotContainer = function ProjectScreenshotContainer({ children, ...restProps }) {
    return <ScreenshotContainer {...restProps}>{children}</ScreenshotContainer>
}

Project.Screenshot = function ProjectScreenshot({ src, ...restProps }) {
    return <Screenshot {...restProps} src={src} />
}

Project.ProjectImage = function ProjectProjectImage({ src, ...restProps }) {
    return <ProjectImage {...restProps} src={src} />
}

Project.NavigationContainer = function ProjectNavigationContainer({ children, ...restProps }) {
    return <NavigationContainer {...restProps}>{children}</NavigationContainer>
}

Project.WhatIDoInfoContainer = function ProjectWhatIDoInfoContainer({ children, ...restProps }) {
    return <WhatIDoInfoContainer {...restProps}>{children}</WhatIDoInfoContainer>
}

Project.TechInfoContainer = function ProjectTechInfoContainer ({ children, ...restProps }) {
    return <TechInfoContainer {...restProps}>{children}</TechInfoContainer>
}

Project.NavigationIcon = function ProjectNavigationIcon({ children, ...restProps }) {
    return <NavigationIcon {...restProps}>{children}</NavigationIcon>
}

Project.ScreenshotsInfoContainer = function ProjectScreenshotsInfoContainer({ children, ...restProps }) {
    return <ScreenshotsInfoContainer {...restProps}>{children}</ScreenshotsInfoContainer>
}