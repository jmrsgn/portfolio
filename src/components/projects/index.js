import React from "react";
import { Container, 
         Box,
         SubBox,
         FilterContainer,
         FilterCell,
         FilterText,
         ProjectsContainer,
         ProjectCell,
         ProjectTitle,
         ProjectDescription,
         ProjectImage,
         TagsContainer,
         TagCell,
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

Projects.FilterCell = function ProjectsFilterCell({ children, ...restProps }) {
    return <FilterCell {...restProps}>{children}</FilterCell>
}

Projects.FilterText = function ProjectsFilterText({ children, ...restProps }) {
    return <FilterText {...restProps}>{children}</FilterText>
}

Projects.ProjectsContainer = function ProjectsProjectsContainer({ children, ...restProps}) {
    return <ProjectsContainer {...restProps}>{children}</ProjectsContainer>
}

Projects.ProjectCell = function ProjectsProjectCell({ children, ...restProps }) {
    return <ProjectCell {...restProps}>{children}</ProjectCell>
}

Projects.ProjectTitle = function ProjectsProjectTitle({ children, ...restProps }) {
    return <ProjectTitle {...restProps}>{children}</ProjectTitle>
}

Projects.ProjectDescription = function ProjectsProjectDescription({ children, ...restProps }) {
    return <ProjectDescription {...restProps}>{children}</ProjectDescription>
}

Projects.ProjectImage = function ProjectsProjectImage({ src, ...restProps }) {
    return <ProjectImage {...restProps} src={src} />
}

Projects.TagsContainer = function ProjectsTagsContainer({ children, ...restProps }) {
    return <TagsContainer {...restProps}>{children}</TagsContainer>
}

Projects.TagCell = function ProjectsTagCell({ children, ...restProps }) {
    return <TagCell {...restProps}>{children}</TagCell>
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