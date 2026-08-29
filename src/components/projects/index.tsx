import React from "react";

import {
  Box,
  Container,
  ContainerFilters,
  ContainerProjects,
  ContainerTags,
  Divider,
  FilterButton,
  GithubCta,
  GithubCtaButton,
  GithubCtaContent,
  GithubCtaDescription,
  GithubCtaTitle,
  ItemProject,
  ItemTag,
  ProjectGithub,
  ProjectHeader,
  ProjectHeaderRight,
  ProjectNumber,
  ProjectStatus,
  TextDescription,
  TextIntro,
  TextProjectTitle,
  TextTitle,
} from "./styles/projects";
import { TextEyebrow } from "../../globalComponents";

type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;

type ProjectsProps = StyledProps<typeof Container>;

type ProjectsComponent = React.FC<ProjectsProps> & {
  Box: React.FC<StyledProps<typeof Box>>;

  TextEyebrow: React.FC<StyledProps<typeof TextEyebrow>>;

  TextTitle: React.FC<StyledProps<typeof TextTitle>>;

  TextIntro: React.FC<StyledProps<typeof TextIntro>>;

  Divider: React.FC<StyledProps<typeof Divider>>;

  ContainerFilters: React.FC<StyledProps<typeof ContainerFilters>>;

  FilterButton: React.FC<StyledProps<typeof FilterButton>>;

  ContainerProjects: React.FC<StyledProps<typeof ContainerProjects>>;

  ItemProject: React.FC<StyledProps<typeof ItemProject>>;

  ProjectHeader: React.FC<StyledProps<typeof ProjectHeader>>;

  ProjectHeaderRight: React.FC<StyledProps<typeof ProjectHeaderRight>>;

  ProjectNumber: React.FC<StyledProps<typeof ProjectNumber>>;

  ProjectStatus: React.FC<StyledProps<typeof ProjectStatus>>;

  ProjectGithub: React.FC<StyledProps<typeof ProjectGithub>>;

  TextProjectTitle: React.FC<StyledProps<typeof TextProjectTitle>>;

  TextDescription: React.FC<StyledProps<typeof TextDescription>>;

  ContainerTags: React.FC<StyledProps<typeof ContainerTags>>;

  ItemTag: React.FC<StyledProps<typeof ItemTag>>;

  GithubCta: React.FC<StyledProps<typeof GithubCta>>;

  GithubCtaContent: React.FC<StyledProps<typeof GithubCtaContent>>;

  GithubCtaTitle: React.FC<StyledProps<typeof GithubCtaTitle>>;

  GithubCtaDescription: React.FC<StyledProps<typeof GithubCtaDescription>>;

  GithubCtaButton: React.FC<StyledProps<typeof GithubCtaButton>>;
};

const Projects = function Projects({ children, ...restProps }: ProjectsProps) {
  return <Container {...restProps}>{children}</Container>;
} as ProjectsComponent;

/**
 * Layout
 */

Projects.Box = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>;
};

/**
 * Header
 */

Projects.TextEyebrow = ({ children, ...restProps }) => {
  return <TextEyebrow {...restProps}>{children}</TextEyebrow>;
};

Projects.TextTitle = ({ children, ...restProps }) => {
  return <TextTitle {...restProps}>{children}</TextTitle>;
};

Projects.TextIntro = ({ children, ...restProps }) => {
  return <TextIntro {...restProps}>{children}</TextIntro>;
};

Projects.Divider = ({ children, ...restProps }) => {
  return <Divider {...restProps}>{children}</Divider>;
};

/**
 * Filters
 */

Projects.ContainerFilters = ({ children, ...restProps }) => {
  return <ContainerFilters {...restProps}>{children}</ContainerFilters>;
};

Projects.FilterButton = ({ children, ...restProps }) => {
  return <FilterButton {...restProps}>{children}</FilterButton>;
};

/**
 * Projects
 */

Projects.ContainerProjects = ({ children, ...restProps }) => {
  return <ContainerProjects {...restProps}>{children}</ContainerProjects>;
};

Projects.ItemProject = ({ children, ...restProps }) => {
  return <ItemProject {...restProps}>{children}</ItemProject>;
};

Projects.ProjectHeader = ({ children, ...restProps }) => {
  return <ProjectHeader {...restProps}>{children}</ProjectHeader>;
};

Projects.ProjectHeaderRight = ({ children, ...restProps }) => {
  return <ProjectHeaderRight {...restProps}>{children}</ProjectHeaderRight>;
};

Projects.ProjectNumber = ({ children, ...restProps }) => {
  return <ProjectNumber {...restProps}>{children}</ProjectNumber>;
};

Projects.ProjectStatus = ({ children, ...restProps }) => {
  return <ProjectStatus {...restProps}>{children}</ProjectStatus>;
};

Projects.ProjectGithub = ({ children, ...restProps }) => {
  return <ProjectGithub {...restProps}>{children}</ProjectGithub>;
};

/**
 * Project content
 */

Projects.TextProjectTitle = ({ children, ...restProps }) => {
  return <TextProjectTitle {...restProps}>{children}</TextProjectTitle>;
};

Projects.TextDescription = ({ children, ...restProps }) => {
  return <TextDescription {...restProps}>{children}</TextDescription>;
};

/**
 * Tags
 */

Projects.ContainerTags = ({ children, ...restProps }) => {
  return <ContainerTags {...restProps}>{children}</ContainerTags>;
};

Projects.ItemTag = ({ children, ...restProps }) => {
  return <ItemTag {...restProps}>{children}</ItemTag>;
};

/**
 * GitHub CTA
 */

Projects.GithubCta = ({ children, ...restProps }) => {
  return <GithubCta {...restProps}>{children}</GithubCta>;
};

Projects.GithubCtaContent = ({ children, ...restProps }) => {
  return <GithubCtaContent {...restProps}>{children}</GithubCtaContent>;
};

Projects.GithubCtaTitle = ({ children, ...restProps }) => {
  return <GithubCtaTitle {...restProps}>{children}</GithubCtaTitle>;
};

Projects.GithubCtaDescription = ({ children, ...restProps }) => {
  return <GithubCtaDescription {...restProps}>{children}</GithubCtaDescription>;
};

Projects.GithubCtaButton = ({ children, ...restProps }) => {
  return <GithubCtaButton {...restProps}>{children}</GithubCtaButton>;
};

export default Projects;
