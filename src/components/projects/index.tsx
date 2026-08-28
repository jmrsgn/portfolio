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
  TextEyebrow,
  TextIntro,
  TextProjectTitle,
  TextTag,
  TextTitle,
} from "./styles/projects";

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

  TextTag: React.FC<StyledProps<typeof TextTag>>;

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

Projects.Box = function Component({
  children,
  ...restProps
}: StyledProps<typeof Box>) {
  return <Box {...restProps}>{children}</Box>;
};

/**
 * Header
 */

Projects.TextEyebrow = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextEyebrow>) {
  return <TextEyebrow {...restProps}>{children}</TextEyebrow>;
};

Projects.TextTitle = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextTitle>) {
  return <TextTitle {...restProps}>{children}</TextTitle>;
};

Projects.TextIntro = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextIntro>) {
  return <TextIntro {...restProps}>{children}</TextIntro>;
};

Projects.Divider = function Component({
  children,
  ...restProps
}: StyledProps<typeof Divider>) {
  return <Divider {...restProps}>{children}</Divider>;
};

/**
 * Filters
 */

Projects.ContainerFilters = function Component({
  children,
  ...restProps
}: StyledProps<typeof ContainerFilters>) {
  return <ContainerFilters {...restProps}>{children}</ContainerFilters>;
};

Projects.FilterButton = function Component({
  children,
  ...restProps
}: StyledProps<typeof FilterButton>) {
  return <FilterButton {...restProps}>{children}</FilterButton>;
};

/**
 * Projects
 */

Projects.ContainerProjects = function Component({
  children,
  ...restProps
}: StyledProps<typeof ContainerProjects>) {
  return <ContainerProjects {...restProps}>{children}</ContainerProjects>;
};

Projects.ItemProject = function Component({
  children,
  ...restProps
}: StyledProps<typeof ItemProject>) {
  return <ItemProject {...restProps}>{children}</ItemProject>;
};

Projects.ProjectHeader = function Component({
  children,
  ...restProps
}: StyledProps<typeof ProjectHeader>) {
  return <ProjectHeader {...restProps}>{children}</ProjectHeader>;
};

Projects.ProjectHeaderRight = function Component({
  children,
  ...restProps
}: StyledProps<typeof ProjectHeaderRight>) {
  return <ProjectHeaderRight {...restProps}>{children}</ProjectHeaderRight>;
};

Projects.ProjectNumber = function Component({
  children,
  ...restProps
}: StyledProps<typeof ProjectNumber>) {
  return <ProjectNumber {...restProps}>{children}</ProjectNumber>;
};

Projects.ProjectStatus = function Component({
  children,
  ...restProps
}: StyledProps<typeof ProjectStatus>) {
  return <ProjectStatus {...restProps}>{children}</ProjectStatus>;
};

Projects.ProjectGithub = function Component({
  children,
  ...restProps
}: StyledProps<typeof ProjectGithub>) {
  return <ProjectGithub {...restProps}>{children}</ProjectGithub>;
};

/**
 * Project content
 */

Projects.TextProjectTitle = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextProjectTitle>) {
  return <TextProjectTitle {...restProps}>{children}</TextProjectTitle>;
};

Projects.TextDescription = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextDescription>) {
  return <TextDescription {...restProps}>{children}</TextDescription>;
};

/**
 * Tags
 */

Projects.ContainerTags = function Component({
  children,
  ...restProps
}: StyledProps<typeof ContainerTags>) {
  return <ContainerTags {...restProps}>{children}</ContainerTags>;
};

Projects.ItemTag = function Component({
  children,
  ...restProps
}: StyledProps<typeof ItemTag>) {
  return <ItemTag {...restProps}>{children}</ItemTag>;
};

Projects.TextTag = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextTag>) {
  return <TextTag {...restProps}>{children}</TextTag>;
};

/**
 * GitHub CTA
 */

Projects.GithubCta = function Component({
  children,
  ...restProps
}: StyledProps<typeof GithubCta>) {
  return <GithubCta {...restProps}>{children}</GithubCta>;
};

Projects.GithubCtaContent = function Component({
  children,
  ...restProps
}: StyledProps<typeof GithubCtaContent>) {
  return <GithubCtaContent {...restProps}>{children}</GithubCtaContent>;
};

Projects.GithubCtaTitle = function Component({
  children,
  ...restProps
}: StyledProps<typeof GithubCtaTitle>) {
  return <GithubCtaTitle {...restProps}>{children}</GithubCtaTitle>;
};

Projects.GithubCtaDescription = function Component({
  children,
  ...restProps
}: StyledProps<typeof GithubCtaDescription>) {
  return <GithubCtaDescription {...restProps}>{children}</GithubCtaDescription>;
};

Projects.GithubCtaButton = function Component({
  children,
  ...restProps
}: StyledProps<typeof GithubCtaButton>) {
  return <GithubCtaButton {...restProps}>{children}</GithubCtaButton>;
};

export default Projects;
