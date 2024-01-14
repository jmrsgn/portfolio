import React from "react";
import { Container,
         Box,
         SubBox,
         TextDiv,
         Tech,
         TechContainer,
         ProjectImage,
         Screenshot,
         ScreenshotContainer,
         InfoContainer,
         NavigationContainer,
         ActionContainer } from './styles/project';

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

Project.TextDiv = function ProjectTextDiv({ children, ...restProps }) {
    return <TextDiv {...restProps}>{children}</TextDiv>
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

Project.InfoContainer = function ProjectInfoContainer({ children, ...restProps }) {
    return <InfoContainer {...restProps}>{children}</InfoContainer>
}