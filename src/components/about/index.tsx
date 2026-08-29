import React from "react";

import {
  Box,
  Container,
  ContainerAboutMeText,
  ContainerTech,
  ContainerTechInfo,
  ContainerTechUsed,
  Divider,
  ProfileCard,
  ProfileItem,
  ProfileLabel,
  ProfileValue,
  SectionHeader,
  TechCardHeader,
  TechNumber,
  TechStack,
  TechStackGrid,
  TechStackHeader,
  TechStackItem,
  TechTag,
  TextDescription,
  TextIntro,
  TextHighlight,
  TextTitle,
  TextTitleOther,
  BoxProfile,
} from "./styles/about";
import { TextEyebrow } from "../../globalComponents";

type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;

type AboutProps = StyledProps<typeof Container>;

type AboutComponent = React.FC<AboutProps> & {
  Box: React.FC<StyledProps<typeof Box>>;
  BoxProfile: React.FC<StyledProps<typeof BoxProfile>>;

  TextEyebrow: React.FC<StyledProps<typeof TextEyebrow>>;
  TextTitle: React.FC<StyledProps<typeof TextTitle>>;
  TextIntro: React.FC<StyledProps<typeof TextIntro>>;
  TextDescription: React.FC<StyledProps<typeof TextDescription>>;
  TextHighlight: React.FC<StyledProps<typeof TextHighlight>>;
  Divider: React.FC<StyledProps<typeof Divider>>;

  ContainerAboutMeText: React.FC<StyledProps<typeof ContainerAboutMeText>>;

  ProfileCard: React.FC<StyledProps<typeof ProfileCard>>;
  ProfileItem: React.FC<StyledProps<typeof ProfileItem>>;
  ProfileLabel: React.FC<StyledProps<typeof ProfileLabel>>;
  ProfileValue: React.FC<StyledProps<typeof ProfileValue>>;

  SectionHeader: React.FC<StyledProps<typeof SectionHeader>>;
  SectionEyebrow: React.FC<StyledProps<typeof TextEyebrow>>;

  ContainerTech: React.FC<StyledProps<typeof ContainerTech>>;
  ContainerTechInfo: React.FC<StyledProps<typeof ContainerTechInfo>>;
  TechCardHeader: React.FC<StyledProps<typeof TechCardHeader>>;
  TechNumber: React.FC<StyledProps<typeof TechNumber>>;
  TextTitleOther: React.FC<StyledProps<typeof TextTitleOther>>;
  ContainerTechUsed: React.FC<StyledProps<typeof ContainerTechUsed>>;
  TechTag: React.FC<StyledProps<typeof TechTag>>;

  TechStack: React.FC<StyledProps<typeof TechStack>>;
  TechStackHeader: React.FC<StyledProps<typeof TechStackHeader>>;
  TechStackGrid: React.FC<StyledProps<typeof TechStackGrid>>;
  TechStackItem: React.FC<StyledProps<typeof TechStackItem>>;
};

const About = function About({ children, ...restProps }: AboutProps) {
  return <Container {...restProps}>{children}</Container>;
} as AboutComponent;

/**
 * Layout
 */

About.Box = ({ children, ...restProps }) => (
  <Box {...restProps}>{children}</Box>
);

About.BoxProfile = ({ children, ...restProps }) => (
  <BoxProfile {...restProps}>{children}</BoxProfile>
);

/**
 * Header
 */

About.TextEyebrow = ({ children, ...restProps }) => (
  <TextEyebrow {...restProps}>{children}</TextEyebrow>
);

About.TextTitle = ({ children, ...restProps }) => (
  <TextTitle {...restProps}>{children}</TextTitle>
);

About.TextIntro = ({ children, ...restProps }) => (
  <TextIntro {...restProps}>{children}</TextIntro>
);

About.TextDescription = ({ children, ...restProps }) => (
  <TextDescription {...restProps}>{children}</TextDescription>
);

About.TextHighlight = ({ children, ...restProps }) => (
  <TextHighlight {...restProps}>{children}</TextHighlight>
);

About.Divider = ({ children, ...restProps }) => (
  <Divider {...restProps}>{children}</Divider>
);

/**
 * Introduction
 */

About.ContainerAboutMeText = ({ children, ...restProps }) => (
  <ContainerAboutMeText {...restProps}>{children}</ContainerAboutMeText>
);

/**
 * Profile
 */

About.ProfileCard = ({ children, ...restProps }) => (
  <ProfileCard {...restProps}>{children}</ProfileCard>
);

About.ProfileItem = ({ children, ...restProps }) => (
  <ProfileItem {...restProps}>{children}</ProfileItem>
);

About.ProfileLabel = ({ children, ...restProps }) => (
  <ProfileLabel {...restProps}>{children}</ProfileLabel>
);

About.ProfileValue = ({ children, ...restProps }) => (
  <ProfileValue {...restProps}>{children}</ProfileValue>
);

/**
 * Sections
 */

About.SectionHeader = ({ children, ...restProps }) => (
  <SectionHeader {...restProps}>{children}</SectionHeader>
);

/**
 * What I Do
 */

About.ContainerTech = ({ children, ...restProps }) => (
  <ContainerTech {...restProps}>{children}</ContainerTech>
);

About.ContainerTechInfo = ({ children, ...restProps }) => (
  <ContainerTechInfo {...restProps}>{children}</ContainerTechInfo>
);

About.TechCardHeader = ({ children, ...restProps }) => (
  <TechCardHeader {...restProps}>{children}</TechCardHeader>
);

About.TechNumber = ({ children, ...restProps }) => (
  <TechNumber {...restProps}>{children}</TechNumber>
);

About.TextTitleOther = ({ children, ...restProps }) => (
  <TextTitleOther {...restProps}>{children}</TextTitleOther>
);

About.ContainerTechUsed = ({ children, ...restProps }) => (
  <ContainerTechUsed {...restProps}>{children}</ContainerTechUsed>
);

About.TechTag = ({ children, ...restProps }) => (
  <TechTag {...restProps}>{children}</TechTag>
);

/**
 * Tech Stack
 */

About.TechStack = ({ children, ...restProps }) => (
  <TechStack {...restProps}>{children}</TechStack>
);

About.TechStackHeader = ({ children, ...restProps }) => (
  <TechStackHeader {...restProps}>{children}</TechStackHeader>
);

About.TechStackGrid = ({ children, ...restProps }) => (
  <TechStackGrid {...restProps}>{children}</TechStackGrid>
);

About.TechStackItem = ({ children, ...restProps }) => (
  <TechStackItem {...restProps}>{children}</TechStackItem>
);

export default About;
