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
  TextTech,
  WindowDot,
  CodeWindowControls,
} from "./styles/home";

type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;

type HomeProps = StyledProps<typeof Container>;

type HomeComponent = React.FC<HomeProps> & {
  Box: React.FC<StyledProps<typeof Box>>;
  BoxInfo: React.FC<StyledProps<typeof BoxInfo>>;

  ContainerGreetings: React.FC<StyledProps<typeof ContainerGreetings>>;
  ContainerActions: React.FC<StyledProps<typeof ContainerActions>>;
  ContainerSocials: React.FC<StyledProps<typeof ContainerSocials>>;

  TextTech: React.FC<StyledProps<typeof TextTech>>;
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

Home.Box = function Component({
  children,
  ...restProps
}: StyledProps<typeof Box>) {
  return <Box {...restProps}>{children}</Box>;
};

Home.BoxInfo = function Component({
  children,
  ...restProps
}: StyledProps<typeof BoxInfo>) {
  return <BoxInfo {...restProps}>{children}</BoxInfo>;
};

Home.ContainerGreetings = function Component({
  children,
  ...restProps
}: StyledProps<typeof ContainerGreetings>) {
  return <ContainerGreetings {...restProps}>{children}</ContainerGreetings>;
};

Home.ContainerActions = function Component({
  children,
  ...restProps
}: StyledProps<typeof ContainerActions>) {
  return <ContainerActions {...restProps}>{children}</ContainerActions>;
};

Home.ContainerSocials = function Component({
  children,
  ...restProps
}: StyledProps<typeof ContainerSocials>) {
  return <ContainerSocials {...restProps}>{children}</ContainerSocials>;
};

/**
 * Text
 */

Home.TextTech = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextTech>) {
  return <TextTech {...restProps}>{children}</TextTech>;
};

Home.TextGreeting = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextGreeting>) {
  return <TextGreeting {...restProps}>{children}</TextGreeting>;
};

Home.TextDescription = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextDescription>) {
  return <TextDescription {...restProps}>{children}</TextDescription>;
};

/**
 * Buttons
 */

Home.ButtonResume = function Component({
  children,
  ...restProps
}: StyledProps<typeof ButtonResume>) {
  return <ButtonResume {...restProps}>{children}</ButtonResume>;
};

Home.ButtonAbout = function Component({
  children,
  ...restProps
}: StyledProps<typeof ButtonAbout>) {
  return <ButtonAbout {...restProps}>{children}</ButtonAbout>;
};

Home.ButtonArrow = function Component({
  children,
  ...restProps
}: StyledProps<typeof ButtonArrow>) {
  return <ButtonArrow {...restProps}>{children}</ButtonArrow>;
};

/**
 * Social
 */

Home.SocialLink = function Component({
  children,
  ...restProps
}: StyledProps<typeof SocialLink>) {
  return <SocialLink {...restProps}>{children}</SocialLink>;
};

/**
 * Code panel
 */

Home.CodePanel = function Component({
  children,
  ...restProps
}: StyledProps<typeof CodePanel>) {
  return <CodePanel {...restProps}>{children}</CodePanel>;
};

Home.CodeHeader = function Component({
  children,
  ...restProps
}: StyledProps<typeof CodeHeader>) {
  return <CodeHeader {...restProps}>{children}</CodeHeader>;
};

Home.CodeWindowControls = function Component({
  children,
  ...restProps
}: StyledProps<typeof CodeWindowControls>) {
  return <CodeWindowControls {...restProps}>{children}</CodeWindowControls>;
};

Home.WindowDot = function Component({
  ...restProps
}: StyledProps<typeof WindowDot>) {
  return <WindowDot {...restProps} />;
};

Home.CodeFileName = function Component({
  children,
  ...restProps
}: StyledProps<typeof CodeFileName>) {
  return <CodeFileName {...restProps}>{children}</CodeFileName>;
};

Home.CodeLanguage = function Component({
  children,
  ...restProps
}: StyledProps<typeof CodeLanguage>) {
  return <CodeLanguage {...restProps}>{children}</CodeLanguage>;
};

Home.CodeContent = function Component({
  children,
  ...restProps
}: StyledProps<typeof CodeContent>) {
  return <CodeContent {...restProps}>{children}</CodeContent>;
};

Home.CodeLine = function Component({
  children,
  ...restProps
}: StyledProps<typeof CodeLine>) {
  return <CodeLine {...restProps}>{children}</CodeLine>;
};

Home.LineNumber = function Component({
  children,
  ...restProps
}: StyledProps<typeof LineNumber>) {
  return <LineNumber {...restProps}>{children}</LineNumber>;
};

Home.CodeIndent = function Component({
  ...restProps
}: StyledProps<typeof CodeIndent>) {
  return <CodeIndent {...restProps} />;
};

Home.CodeKeyword = function Component({
  children,
  ...restProps
}: StyledProps<typeof CodeKeyword>) {
  return <CodeKeyword {...restProps}>{children}</CodeKeyword>;
};

Home.CodeVariable = function Component({
  children,
  ...restProps
}: StyledProps<typeof CodeVariable>) {
  return <CodeVariable {...restProps}>{children}</CodeVariable>;
};

Home.CodeOperator = function Component({
  children,
  ...restProps
}: StyledProps<typeof CodeOperator>) {
  return <CodeOperator {...restProps}>{children}</CodeOperator>;
};

Home.CodeComment = function Component({
  children,
  ...restProps
}: StyledProps<typeof CodeComment>) {
  return <CodeComment {...restProps}>{children}</CodeComment>;
};

Home.CodeString = function Component({
  children,
  ...restProps
}: StyledProps<typeof CodeString>) {
  return <CodeString {...restProps}>{children}</CodeString>;
};

Home.CodeFooter = function Component({
  children,
  ...restProps
}: StyledProps<typeof CodeFooter>) {
  return <CodeFooter {...restProps}>{children}</CodeFooter>;
};

Home.CodePrompt = function Component({
  children,
  ...restProps
}: StyledProps<typeof CodePrompt>) {
  return <CodePrompt {...restProps}>{children}</CodePrompt>;
};

/**
 * Tagline
 */

Home.Tagline = function Component({
  children,
  ...restProps
}: StyledProps<typeof Tagline>) {
  return <Tagline {...restProps}>{children}</Tagline>;
};

Home.TaglineAccent = function Component({
  ...restProps
}: StyledProps<typeof TaglineAccent>) {
  return <TaglineAccent {...restProps} />;
};

Home.TaglineStatus = function Component({
  children,
  ...restProps
}: StyledProps<typeof TaglineStatus>) {
  return <TaglineStatus {...restProps}>{children}</TaglineStatus>;
};

export default Home;
