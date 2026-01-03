import React from "react";
import { ItemProject,
         ItemTag,
         Container, 
         ContainerProjectTitleNav,
         ContainerProjects,
         ContainerTags,
         Box,
         TextTag,
         TextDescription,
         TextProjectTitle, 
         TextTitle } from './styles/projects';

export default function Projects({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

/**
 * * Items
 */

Projects.ItemProject = function ProjectsItemProject({ children, ...restProps }) {
    return <ItemProject {...restProps}>{children}</ItemProject>
}

Projects.ItemTag = function ProjectsItemTag({ children, ...restProps }) {
    return <ItemTag {...restProps}>{children}</ItemTag>
}

/**
 * * Containers
 */

Projects.ContainerProjectTitleNav = function ProjectsContainerProjectTitleNav({ children, ...restProps }) {
    return <ContainerProjectTitleNav {...restProps}>{children}</ContainerProjectTitleNav>
}

Projects.ContainerProjects = function ProjectsContainerProjects({ children, ...restProps}) {
    return <ContainerProjects {...restProps}>{children}</ContainerProjects>
}

Projects.ContainerTags = function ProjectsTagsContainer({ children, ...restProps }) {
    return <ContainerTags {...restProps}>{children}</ContainerTags>
}

/**
 * * Boxes
 */

Projects.Box = function ProjectsBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

/**
 * * Texts
 */

Projects.TextDescription = function ProjectsTextDescription({ children, ...restProps }) {
    return <TextDescription {...restProps}>{children}</TextDescription>
}

Projects.TextProjectTitle = function ProjectsTextProjectTitle({ children, ...restProps }) {
    return <TextProjectTitle {...restProps}>{children}</TextProjectTitle>
}

Projects.TextTag = function ProjectsTextTag({ children, ...restProps }) {
    return <TextTag {...restProps}>{children}</TextTag>
}

Projects.TextTitle = function ProjectsTextTitle({ children, ...restProps }) {
    return <TextTitle {...restProps}>{children}</TextTitle>
}