import React from "react";

import {
  ButtonAbout,
  ButtonArrow,
  ButtonResume,
  Box,
  BoxInfo,
  CodeContent,
  CodeFileName,
  CodeFooter,
  CodeHeader,
  CodeIndent,
  CodeKeyword,
  CodeLanguage,
  CodeLine,
  CodePanel,
  CodePrompt,
  CodeString,
  CodeVariable,
  CodeOperator,
  CodeComment,
  Container,
  ContainerActions,
  ContainerGreetings,
  ContainerSocials,
  LineNumber,
  SocialLink,
  Tagline,
  TaglineAccent,
  TaglineStatus,
  TextDescription,
  TextGreeting,
  WindowDot,
  CodeWindowControls,
} from "./styles/home";
import { TextEyebrow } from "../../globalComponents";

type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;

type HomeProps = StyledProps<typeof Container>;

type HomeComponent = React.FC<HomeProps> & {
  Box: React.FC<StyledProps<typeof Box>>;
  BoxInfo: React.FC<StyledProps<typeof BoxInfo>>;

  ContainerGreetings: React.FC<StyledProps<typeof ContainerGreetings>>;
  ContainerActions: React.FC<StyledProps<typeof ContainerActions>>;
  ContainerSocials: React.FC<StyledProps<typeof ContainerSocials>>;

  TextEyebrow: React.FC<StyledProps<typeof TextEyebrow>>;
  TextGreeting: React.FC<StyledProps<typeof TextGreeting>>;
  TextDescription: React.FC<StyledProps<typeof TextDescription>>;

  ButtonResume: React.FC<StyledProps<typeof ButtonResume>>;
  ButtonAbout: React.FC<StyledProps<typeof ButtonAbout>>;
  ButtonArrow: React.FC<StyledProps<typeof ButtonArrow>>;

  SocialLink: React.FC<StyledProps<typeof SocialLink>>;

  CodePanel: React.FC<StyledProps<typeof CodePanel>>;
  CodeHeader: React.FC<StyledProps<typeof CodeHeader>>;
  CodeWindowControls: React.FC<StyledProps<typeof CodeWindowControls>>;
  WindowDot: React.FC<StyledProps<typeof WindowDot>>;
  CodeFileName: React.FC<StyledProps<typeof CodeFileName>>;
  CodeLanguage: React.FC<StyledProps<typeof CodeLanguage>>;
  CodeContent: React.FC<StyledProps<typeof CodeContent>>;
  CodeLine: React.FC<StyledProps<typeof CodeLine>>;
  LineNumber: React.FC<StyledProps<typeof LineNumber>>;
  CodeIndent: React.FC<StyledProps<typeof CodeIndent>>;
  CodeKeyword: React.FC<StyledProps<typeof CodeKeyword>>;
  CodeVariable: React.FC<StyledProps<typeof CodeVariable>>;
  CodeOperator: React.FC<StyledProps<typeof CodeOperator>>;
  CodeComment: React.FC<StyledProps<typeof CodeComment>>;
  CodeString: React.FC<StyledProps<typeof CodeString>>;
  CodeFooter: React.FC<StyledProps<typeof CodeFooter>>;
  CodePrompt: React.FC<StyledProps<typeof CodePrompt>>;

  Tagline: React.FC<StyledProps<typeof Tagline>>;
  TaglineAccent: React.FC<StyledProps<typeof TaglineAccent>>;
  TaglineStatus: React.FC<StyledProps<typeof TaglineStatus>>;
};

const Home = function Home({ children, ...restProps }: HomeProps) {
  return <Container {...restProps}>{children}</Container>;
} as HomeComponent;

/**
 * Layout
 */

Home.Box = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>;
};

Home.BoxInfo = ({ children, ...restProps }) => {
  return <BoxInfo {...restProps}>{children}</BoxInfo>;
};

Home.ContainerGreetings = ({ children, ...restProps }) => {
  return <ContainerGreetings {...restProps}>{children}</ContainerGreetings>;
};

Home.ContainerActions = ({ children, ...restProps }) => {
  return <ContainerActions {...restProps}>{children}</ContainerActions>;
};

Home.ContainerSocials = ({ children, ...restProps }) => {
  return <ContainerSocials {...restProps}>{children}</ContainerSocials>;
};

/**
 * Text
 */

Home.TextGreeting = ({ children, ...restProps }) => {
  return <TextGreeting {...restProps}>{children}</TextGreeting>;
};

Home.TextEyebrow = ({ children, ...restProps }) => {
  return <TextEyebrow {...restProps}>{children}</TextEyebrow>;
};

Home.TextDescription = ({ children, ...restProps }) => {
  return <TextDescription {...restProps}>{children}</TextDescription>;
};

/**
 * Buttons
 */

Home.ButtonResume = ({ children, ...restProps }) => {
  return <ButtonResume {...restProps}>{children}</ButtonResume>;
};

Home.ButtonAbout = ({ children, ...restProps }) => {
  return <ButtonAbout {...restProps}>{children}</ButtonAbout>;
};

Home.ButtonArrow = ({ children, ...restProps }) => {
  return <ButtonArrow {...restProps}>{children}</ButtonArrow>;
};

/**
 * Social
 */

Home.SocialLink = ({ children, ...restProps }) => {
  return <SocialLink {...restProps}>{children}</SocialLink>;
};

/**
 * Code panel
 */

Home.CodePanel = ({ children, ...restProps }) => {
  return <CodePanel {...restProps}>{children}</CodePanel>;
};

Home.CodeHeader = ({ children, ...restProps }) => {
  return <CodeHeader {...restProps}>{children}</CodeHeader>;
};

Home.CodeWindowControls = ({ children, ...restProps }) => {
  return <CodeWindowControls {...restProps}>{children}</CodeWindowControls>;
};

Home.WindowDot = ({ children, ...restProps }) => {
  return <WindowDot {...restProps} />;
};

Home.CodeFileName = ({ children, ...restProps }) => {
  return <CodeFileName {...restProps}>{children}</CodeFileName>;
};

Home.CodeLanguage = ({ children, ...restProps }) => {
  return <CodeLanguage {...restProps}>{children}</CodeLanguage>;
};

Home.CodeContent = ({ children, ...restProps }) => {
  return <CodeContent {...restProps}>{children}</CodeContent>;
};

Home.CodeLine = ({ children, ...restProps }) => {
  return <CodeLine {...restProps}>{children}</CodeLine>;
};

Home.LineNumber = ({ children, ...restProps }) => {
  return <LineNumber {...restProps}>{children}</LineNumber>;
};

Home.CodeIndent = ({ children, ...restProps }) => {
  return <CodeIndent {...restProps} />;
};

Home.CodeKeyword = ({ children, ...restProps }) => {
  return <CodeKeyword {...restProps}>{children}</CodeKeyword>;
};

Home.CodeVariable = ({ children, ...restProps }) => {
  return <CodeVariable {...restProps}>{children}</CodeVariable>;
};

Home.CodeOperator = ({ children, ...restProps }) => {
  return <CodeOperator {...restProps}>{children}</CodeOperator>;
};

Home.CodeComment = ({ children, ...restProps }) => {
  return <CodeComment {...restProps}>{children}</CodeComment>;
};

Home.CodeString = ({ children, ...restProps }) => {
  return <CodeString {...restProps}>{children}</CodeString>;
};

Home.CodeFooter = ({ children, ...restProps }) => {
  return <CodeFooter {...restProps}>{children}</CodeFooter>;
};

Home.CodePrompt = ({ children, ...restProps }) => {
  return <CodePrompt {...restProps}>{children}</CodePrompt>;
};

/**
 * Tagline
 */

Home.Tagline = ({ children, ...restProps }) => {
  return <Tagline {...restProps}>{children}</Tagline>;
};

Home.TaglineAccent = ({ children, ...restProps }) => {
  return <TaglineAccent {...restProps} />;
};

Home.TaglineStatus = ({ children, ...restProps }) => {
  return <TaglineStatus {...restProps}>{children}</TaglineStatus>;
};

export default Home;
