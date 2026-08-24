import React from "react";
import {
  Container,
  ContainerGreetings,
  ContainerSocials,
  Box,
  BoxInfo,
  TextGreeting,
  TextTech,
  TextDescription,
  Image,
  ButtonResume,
} from "./styles/home";

type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;

// Accept props whatever Container accepts
type HomeProps = StyledProps<typeof Container>;

export default function Home({ children, ...restProps }: HomeProps) {
  return <Container {...restProps}>{children}</Container>;
}

type ContainerGreetingsProps = StyledProps<typeof ContainerGreetings>;
type ContainerSocialsProps = StyledProps<typeof ContainerSocials>;
type BoxProps = StyledProps<typeof Box>;
type BoxInfoProps = StyledProps<typeof BoxInfo>;
type TextGreetingProps = StyledProps<typeof TextGreeting>;
type TextTechProps = StyledProps<typeof TextTech>;
type TextDescriptionProps = StyledProps<typeof TextDescription>;
type ImageProps = StyledProps<typeof Image>;
type ButtonResumeProps = StyledProps<typeof ButtonResume>;

/**
 * * Containers
 */

Home.ContainerGreetings = function Component({
  children,
  ...restProps
}: ContainerGreetingsProps) {
  return <ContainerGreetings {...restProps}>{children}</ContainerGreetings>;
};

Home.ContainerSocials = function Component({
  children,
  ...restProps
}: ContainerSocialsProps) {
  return <ContainerSocials {...restProps}>{children}</ContainerSocials>;
};

/**
 * * Boxes
 */

Home.Box = function Component({ children, ...restProps }: BoxProps) {
  return <Box {...restProps}>{children}</Box>;
};

Home.BoxInfo = function Component({ children, ...restProps }: BoxInfoProps) {
  return <BoxInfo {...restProps}>{children}</BoxInfo>;
};

/**
 * * Texts
 */

Home.TextTech = function Component({ children, ...restProps }: TextTechProps) {
  return <TextTech {...restProps}>{children}</TextTech>;
};

Home.TextGreeting = function Component({
  children,
  ...restProps
}: TextGreetingProps) {
  return <TextGreeting {...restProps}>{children}</TextGreeting>;
};

Home.TextDescription = function Component({
  children,
  ...restProps
}: TextDescriptionProps) {
  return <TextDescription {...restProps}>{children}</TextDescription>;
};

/**
 * * Images
 */

Home.Image = function Component({ src, ...restProps }: ImageProps) {
  return <Image src={src} {...restProps} />;
};

/**
 * * Buttons
 */

Home.ButtonResume = function Component({
  children,
  ...restProps
}: ButtonResumeProps) {
  return <ButtonResume {...restProps}>{children}</ButtonResume>;
};
