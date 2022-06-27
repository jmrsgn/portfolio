import React from "react";
import { Container, 
         Box,
         SubBox,
         FilterContainer,
         ProjectsContainer,
         Project,
         ProjectTitle,
         ProjectDescription,
         TagsContainer,
         Tag,
         TagText,
         DevelopmentTag, 
         DevelopmentText } from './styles/projects';

export default function Projects({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Projects.Box = function ProjectsBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

Projects.SubBox = function ProjectsSubBox({ children, ...restProps }) {
    return <SubBox {...restProps}>{children}</SubBox>
}

Projects.FiltersContainer = function ProjectsFilterContainer({ children, ...restProps }) {
    return <FilterContainer {...restProps}>{children}</FilterContainer>
}

Projects.ProjectsContainer = function ProjectsProjectsContainer({ children, ...restProps}) {
    return <ProjectsContainer {...restProps}>{children}</ProjectsContainer>
}

Projects.Project = function ProjectsProject({ children, ...restProps }) {
    return <Project {...restProps}>{children}</Project>
}

Projects.ProjectTitle = function ProjectsProjectTitle({ children, ...restProps }) {
    return <ProjectTitle {...restProps}>{children}</ProjectTitle>
}

Projects.ProjectDescription = function ProjectsProjectDescription({ children, ...restProps }) {
    return <ProjectDescription {...restProps}>{children}</ProjectDescription>
}

Projects.TagsContainer = function ProjectsTagsContainer({ children, ...restProps }) {
    return <TagsContainer {...restProps}>{children}</TagsContainer>
}

Projects.Tag = function ProjectsTag({ children, ...restProps }) {
    return <Tag {...restProps}>{children}</Tag>
}

Projects.TagText = function ProjectsTagText({ children, ...restProps }) {
    return <TagText {...restProps}>{children}</TagText>
}

Projects.DevelopmentTag = function ProjectsDevelopmentTag({ children, ...restProps }) {
    return <DevelopmentTag {...restProps}>{children}</DevelopmentTag>
}

Projects.DevelopmentText = function ProjectsDevelopmentText({ children, ...restProps }) {
    return <DevelopmentText {...restProps}>{children}</DevelopmentText>
}