import React from "react";

import {
  Box,
  Container,
  ContainerProjects,
  ContainerTags,
  GithubCta,
  GithubCtaButton,
  GithubCtaContent,
  GithubCtaDescription,
  GithubCtaTitle,
  ItemProject,
  ItemTag,
  ProjectGithub,
  ProjectPreview,
  ProjectSelect,
  ProjectWorkspace,
  ProjectHeader,
  ProjectHeaderRight,
  ProjectNumber,
  ProjectStatus,
  TextDescription,
  TextProjectTitle,
} from "./styles/projects";
import {
  TextEyebrow,
  TextTitle,
  Divider,
  TextIntro,
} from "../../globalComponents";

type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;

type ProjectsProps = StyledProps<typeof Container>;

type ProjectsComponent = React.FC<ProjectsProps> & {
  Box: React.FC<StyledProps<typeof Box>>;

  TextEyebrow: React.FC<StyledProps<typeof TextEyebrow>>;

  TextTitle: React.FC<StyledProps<typeof TextTitle>>;

  TextIntro: React.FC<StyledProps<typeof TextIntro>>;

  Divider: React.FC<StyledProps<typeof Divider>>;

  ContainerProjects: React.FC<StyledProps<typeof ContainerProjects>>;
  ProjectWorkspace: React.FC<StyledProps<typeof ProjectWorkspace>>;
  ProjectPreview: React.FC<StyledProps<typeof ProjectPreview>>;
  ProjectSelect: React.FC<StyledProps<typeof ProjectSelect>>;

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
 * Projects
 */

Projects.ContainerProjects = ({ children, ...restProps }) => {
  return <ContainerProjects {...restProps}>{children}</ContainerProjects>;
};

Projects.ProjectWorkspace = ({ children, ...restProps }) => {
  return <ProjectWorkspace {...restProps}>{children}</ProjectWorkspace>;
};

Projects.ProjectPreview = ({ children, ...restProps }) => {
  return <ProjectPreview {...restProps}>{children}</ProjectPreview>;
};

Projects.ProjectSelect = ({ children, ...restProps }) => {
  return <ProjectSelect {...restProps}>{children}</ProjectSelect>;
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
