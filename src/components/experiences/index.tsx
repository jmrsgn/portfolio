import React from "react";

import {
  Container,
  Box,
  TextEyebrow,
  TextTitle,
  Divider,
  TextIntro,
  ContainerInfo,
  BoxExperiences,
  ContainerTimeline,
  ExperienceItem,
  TimelineDate,
  TimelineMarker,
  TimelineDot,
  ExperienceContent,
  ExperienceHeader,
  TextPosition,
  TextCompany,
  CurrentBadge,
  CurrentDot,
  ContainerExperienceText,
  TextDescription,
  BoxCertificates,
  TextSubTitle,
  CertificateDivider,
  ContainerCertificates,
  ContainerCertificate,
  ItemBadge,
  ContainerCertificateInfo,
  TextCertificateTitle,
  TextCertificateYear,
  CertificateLink,
} from "./styles/experiences";

type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;

type ExperiencesProps = StyledProps<typeof Container>;

type ExperiencesComponent = React.FC<ExperiencesProps> & {
  Box: React.FC<StyledProps<typeof Box>>;

  TextEyebrow: React.FC<StyledProps<typeof TextEyebrow>>;

  TextTitle: React.FC<StyledProps<typeof TextTitle>>;

  Divider: React.FC<StyledProps<typeof Divider>>;

  TextIntro: React.FC<StyledProps<typeof TextIntro>>;

  ContainerInfo: React.FC<StyledProps<typeof ContainerInfo>>;

  BoxExperiences: React.FC<StyledProps<typeof BoxExperiences>>;

  ContainerTimeline: React.FC<StyledProps<typeof ContainerTimeline>>;

  ExperienceItem: React.FC<StyledProps<typeof ExperienceItem>>;

  TimelineDate: React.FC<StyledProps<typeof TimelineDate>>;

  TimelineMarker: React.FC<StyledProps<typeof TimelineMarker>>;

  TimelineDot: React.FC<StyledProps<typeof TimelineDot>>;

  ExperienceContent: React.FC<StyledProps<typeof ExperienceContent>>;

  ExperienceHeader: React.FC<StyledProps<typeof ExperienceHeader>>;

  TextPosition: React.FC<StyledProps<typeof TextPosition>>;

  TextCompany: React.FC<StyledProps<typeof TextCompany>>;

  CurrentBadge: React.FC<StyledProps<typeof CurrentBadge>>;

  CurrentDot: React.FC<StyledProps<typeof CurrentDot>>;

  ContainerExperienceText: React.FC<
    StyledProps<typeof ContainerExperienceText>
  >;

  TextDescription: React.FC<StyledProps<typeof TextDescription>>;

  BoxCertificates: React.FC<StyledProps<typeof BoxCertificates>>;

  TextSubTitle: React.FC<StyledProps<typeof TextSubTitle>>;

  CertificateDivider: React.FC<StyledProps<typeof CertificateDivider>>;

  ContainerCertificates: React.FC<StyledProps<typeof ContainerCertificates>>;

  ContainerCertificate: React.FC<StyledProps<typeof ContainerCertificate>>;

  ItemBadge: React.FC<StyledProps<typeof ItemBadge>>;

  ContainerCertificateInfo: React.FC<
    StyledProps<typeof ContainerCertificateInfo>
  >;

  TextCertificateTitle: React.FC<StyledProps<typeof TextCertificateTitle>>;

  TextCertificateYear: React.FC<StyledProps<typeof TextCertificateYear>>;

  CertificateLink: React.FC<StyledProps<typeof CertificateLink>>;
};

const Experiences = function Experiences({
  children,
  ...restProps
}: ExperiencesProps) {
  return <Container {...restProps}>{children}</Container>;
} as ExperiencesComponent;

/**
 * Layout
 */

Experiences.Box = function Component({
  children,
  ...restProps
}: StyledProps<typeof Box>) {
  return <Box {...restProps}>{children}</Box>;
};

/**
 * Header
 */

Experiences.TextEyebrow = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextEyebrow>) {
  return <TextEyebrow {...restProps}>{children}</TextEyebrow>;
};

Experiences.TextTitle = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextTitle>) {
  return <TextTitle {...restProps}>{children}</TextTitle>;
};

Experiences.Divider = function Component({
  children,
  ...restProps
}: StyledProps<typeof Divider>) {
  return <Divider {...restProps}>{children}</Divider>;
};

Experiences.TextIntro = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextIntro>) {
  return <TextIntro {...restProps}>{children}</TextIntro>;
};

/**
 * Experience
 */

Experiences.ContainerInfo = function Component({
  children,
  ...restProps
}: StyledProps<typeof ContainerInfo>) {
  return <ContainerInfo {...restProps}>{children}</ContainerInfo>;
};

Experiences.BoxExperiences = function Component({
  children,
  ...restProps
}: StyledProps<typeof BoxExperiences>) {
  return <BoxExperiences {...restProps}>{children}</BoxExperiences>;
};

Experiences.ContainerTimeline = function Component({
  children,
  ...restProps
}: StyledProps<typeof ContainerTimeline>) {
  return <ContainerTimeline {...restProps}>{children}</ContainerTimeline>;
};

Experiences.ExperienceItem = function Component({
  children,
  ...restProps
}: StyledProps<typeof ExperienceItem>) {
  return <ExperienceItem {...restProps}>{children}</ExperienceItem>;
};

Experiences.TimelineDate = function Component({
  children,
  ...restProps
}: StyledProps<typeof TimelineDate>) {
  return <TimelineDate {...restProps}>{children}</TimelineDate>;
};

Experiences.TimelineMarker = function Component({
  children,
  ...restProps
}: StyledProps<typeof TimelineMarker>) {
  return <TimelineMarker {...restProps}>{children}</TimelineMarker>;
};

Experiences.TimelineDot = function Component({
  children,
  ...restProps
}: StyledProps<typeof TimelineDot>) {
  return <TimelineDot {...restProps}>{children}</TimelineDot>;
};

Experiences.ExperienceContent = function Component({
  children,
  ...restProps
}: StyledProps<typeof ExperienceContent>) {
  return <ExperienceContent {...restProps}>{children}</ExperienceContent>;
};

Experiences.ExperienceHeader = function Component({
  children,
  ...restProps
}: StyledProps<typeof ExperienceHeader>) {
  return <ExperienceHeader {...restProps}>{children}</ExperienceHeader>;
};

Experiences.TextPosition = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextPosition>) {
  return <TextPosition {...restProps}>{children}</TextPosition>;
};

Experiences.TextCompany = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextCompany>) {
  return <TextCompany {...restProps}>{children}</TextCompany>;
};

Experiences.CurrentBadge = function Component({
  children,
  ...restProps
}: StyledProps<typeof CurrentBadge>) {
  return <CurrentBadge {...restProps}>{children}</CurrentBadge>;
};

Experiences.CurrentDot = function Component({
  children,
  ...restProps
}: StyledProps<typeof CurrentDot>) {
  return <CurrentDot {...restProps}>{children}</CurrentDot>;
};

Experiences.ContainerExperienceText = function Component({
  children,
  ...restProps
}: StyledProps<typeof ContainerExperienceText>) {
  return (
    <ContainerExperienceText {...restProps}>{children}</ContainerExperienceText>
  );
};

Experiences.TextDescription = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextDescription>) {
  return <TextDescription {...restProps}>{children}</TextDescription>;
};

/**
 * Certificates
 */

Experiences.BoxCertificates = function Component({
  children,
  ...restProps
}: StyledProps<typeof BoxCertificates>) {
  return <BoxCertificates {...restProps}>{children}</BoxCertificates>;
};

Experiences.TextSubTitle = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextSubTitle>) {
  return <TextSubTitle {...restProps}>{children}</TextSubTitle>;
};

Experiences.CertificateDivider = function Component({
  children,
  ...restProps
}: StyledProps<typeof CertificateDivider>) {
  return <CertificateDivider {...restProps}>{children}</CertificateDivider>;
};

Experiences.ContainerCertificates = function Component({
  children,
  ...restProps
}: StyledProps<typeof ContainerCertificates>) {
  return (
    <ContainerCertificates {...restProps}>{children}</ContainerCertificates>
  );
};

Experiences.ContainerCertificate = function Component({
  children,
  ...restProps
}: StyledProps<typeof ContainerCertificate>) {
  return <ContainerCertificate {...restProps}>{children}</ContainerCertificate>;
};

Experiences.ItemBadge = function Component({
  src,
  ...restProps
}: StyledProps<typeof ItemBadge>) {
  return <ItemBadge src={src} {...restProps} />;
};

Experiences.ContainerCertificateInfo = function Component({
  children,
  ...restProps
}: StyledProps<typeof ContainerCertificateInfo>) {
  return (
    <ContainerCertificateInfo {...restProps}>
      {children}
    </ContainerCertificateInfo>
  );
};

Experiences.TextCertificateTitle = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextCertificateTitle>) {
  return <TextCertificateTitle {...restProps}>{children}</TextCertificateTitle>;
};

Experiences.TextCertificateYear = function Component({
  children,
  ...restProps
}: StyledProps<typeof TextCertificateYear>) {
  return <TextCertificateYear {...restProps}>{children}</TextCertificateYear>;
};

Experiences.CertificateLink = function Component({
  children,
  ...restProps
}: StyledProps<typeof CertificateLink>) {
  return <CertificateLink {...restProps}>{children}</CertificateLink>;
};

export default Experiences;
