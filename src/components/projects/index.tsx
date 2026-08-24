import React from "react";
import {
  ItemProject,
  ItemTag,
  Container,
  ContainerProjectTitleNav,
  ContainerProjects,
  ContainerTags,
  Box,
  TextTag,
  TextDescription,
  TextProjectTitle,
  TextTitle,
} from "./styles/projects";

type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;
type ProjectsProps = StyledProps<typeof Container>;

export default function Projects({ children, ...restProps }: ProjectsProps) {
  return <Container {...restProps}>{children}</Container>;
}

type ItemProjectProps = StyledProps<typeof ItemProject>;
type ItemTagProps = StyledProps<typeof ItemTag>;
type ContainerProjectTitleNavProps = StyledProps<
  typeof ContainerProjectTitleNav
>;
type ContainerProjectsProps = StyledProps<typeof ContainerProjects>;
type ContainerTagsProps = StyledProps<typeof ContainerTags>;
type BoxProps = StyledProps<typeof Box>;
type TextTagProps = StyledProps<typeof TextTag>;
type TextDescriptionProps = StyledProps<typeof TextDescription>;
type TextProjectTitleProps = StyledProps<typeof TextProjectTitle>;
type TextTitleProps = StyledProps<typeof TextTitle>;

/**
 * * Items
 */

Projects.ItemProject = function Component({
  children,
  ...restProps
}: ItemProjectProps) {
  return <ItemProject {...restProps}>{children}</ItemProject>;
};

Projects.ItemTag = function Component({
  children,
  ...restProps
}: ItemTagProps) {
  return <ItemTag {...restProps}>{children}</ItemTag>;
};

/**
 * * Containers
 */

Projects.ContainerProjectTitleNav = function Component({
  children,
  ...restProps
}: ContainerProjectTitleNavProps) {
  return (
    <ContainerProjectTitleNav {...restProps}>
      {children}
    </ContainerProjectTitleNav>
  );
};

Projects.ContainerProjects = function Component({
  children,
  ...restProps
}: ContainerProjectsProps) {
  return <ContainerProjects {...restProps}>{children}</ContainerProjects>;
};

Projects.ContainerTags = function Component({
  children,
  ...restProps
}: ContainerTagsProps) {
  return <ContainerTags {...restProps}>{children}</ContainerTags>;
};

/**
 * * Boxes
 */

Projects.Box = function Component({ children, ...restProps }: BoxProps) {
  return <Box {...restProps}>{children}</Box>;
};

/**
 * * Texts
 */

Projects.TextDescription = function Component({
  children,
  ...restProps
}: TextDescriptionProps) {
  return <TextDescription {...restProps}>{children}</TextDescription>;
};

Projects.TextProjectTitle = function Component({
  children,
  ...restProps
}: TextProjectTitleProps) {
  return <TextProjectTitle {...restProps}>{children}</TextProjectTitle>;
};

Projects.TextTag = function Component({
  children,
  ...restProps
}: TextTagProps) {
  return <TextTag {...restProps}>{children}</TextTag>;
};

Projects.TextTitle = function Component({
  children,
  ...restProps
}: TextTitleProps) {
  return <TextTitle {...restProps}>{children}</TextTitle>;
};
