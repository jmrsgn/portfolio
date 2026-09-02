import React from "react";

import {
  Container,
  Box,
  ContainerInfo,
  ContainerTimeline,
  ExperienceItem,
  TimelineDate,
  TimelineMarker,
  TimelineDot,
  ExperienceContent,
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
  TextCertificateIssuer,
  TextCertificateDate,
  BadgeButton,
  GenericCertificateIcon,
  CertificateTextContainer,
  ContainerCertificateActions,
  CertificateAction,
  CertificateModalOverlay,
  CertificateModal,
  CertificateModalHeader,
  TextModalTitle,
  CertificateModalClose,
  CertificateModalImage,
} from "./styles/experiences";
import {
  TextEyebrow,
  TextTitle,
  Divider,
  TextIntro,
} from "../../globalComponents";

type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;

type ExperiencesProps = StyledProps<typeof Container>;

type ExperiencesComponent = React.FC<ExperiencesProps> & {
  Box: React.FC<StyledProps<typeof Box>>;

  TextEyebrow: React.FC<StyledProps<typeof TextEyebrow>>;

  TextTitle: React.FC<StyledProps<typeof TextTitle>>;

  Divider: React.FC<StyledProps<typeof Divider>>;

  TextIntro: React.FC<StyledProps<typeof TextIntro>>;

  ContainerInfo: React.FC<StyledProps<typeof ContainerInfo>>;

  ContainerTimeline: React.FC<StyledProps<typeof ContainerTimeline>>;

  ExperienceItem: React.FC<StyledProps<typeof ExperienceItem>>;

  TimelineDate: React.FC<StyledProps<typeof TimelineDate>>;

  TimelineMarker: React.FC<StyledProps<typeof TimelineMarker>>;

  TimelineDot: React.FC<StyledProps<typeof TimelineDot>>;

  ExperienceContent: React.FC<StyledProps<typeof ExperienceContent>>;

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

  TextCertificateIssuer: React.FC<StyledProps<typeof TextCertificateIssuer>>;

  TextCertificateDate: React.FC<StyledProps<typeof TextCertificateDate>>;

  BadgeButton: React.FC<StyledProps<typeof BadgeButton>>;

  GenericCertificateIcon: React.FC<StyledProps<typeof GenericCertificateIcon>>;

  CertificateTextContainer: React.FC<
    StyledProps<typeof CertificateTextContainer>
  >;

  ContainerCertificateActions: React.FC<
    StyledProps<typeof ContainerCertificateActions>
  >;

  CertificateAction: React.FC<StyledProps<typeof CertificateAction>>;

  CertificateModalOverlay: React.FC<
    StyledProps<typeof CertificateModalOverlay>
  >;

  CertificateModal: React.FC<StyledProps<typeof CertificateModal>>;

  CertificateModalHeader: React.FC<StyledProps<typeof CertificateModalHeader>>;

  TextModalTitle: React.FC<StyledProps<typeof TextModalTitle>>;

  CertificateModalClose: React.FC<StyledProps<typeof CertificateModalClose>>;

  CertificateModalImage: React.FC<StyledProps<typeof CertificateModalImage>>;
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

Experiences.Box = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>;
};

/**
 * Header
 */

Experiences.TextEyebrow = ({ children, ...restProps }) => {
  return <TextEyebrow {...restProps}>{children}</TextEyebrow>;
};

Experiences.TextTitle = ({ children, ...restProps }) => {
  return <TextTitle {...restProps}>{children}</TextTitle>;
};

Experiences.Divider = ({ children, ...restProps }) => {
  return <Divider {...restProps}>{children}</Divider>;
};

Experiences.TextIntro = ({ children, ...restProps }) => {
  return <TextIntro {...restProps}>{children}</TextIntro>;
};

/**
 * Experience
 */

Experiences.ContainerInfo = ({ children, ...restProps }) => {
  return <ContainerInfo {...restProps}>{children}</ContainerInfo>;
};

Experiences.ContainerTimeline = ({ children, ...restProps }) => {
  return <ContainerTimeline {...restProps}>{children}</ContainerTimeline>;
};

Experiences.ExperienceItem = ({ children, ...restProps }) => {
  return <ExperienceItem {...restProps}>{children}</ExperienceItem>;
};

Experiences.TimelineDate = ({ children, ...restProps }) => {
  return <TimelineDate {...restProps}>{children}</TimelineDate>;
};

Experiences.TimelineMarker = ({ children, ...restProps }) => {
  return <TimelineMarker {...restProps}>{children}</TimelineMarker>;
};

Experiences.TimelineDot = ({ children, ...restProps }) => {
  return <TimelineDot {...restProps}>{children}</TimelineDot>;
};

Experiences.ExperienceContent = ({ children, ...restProps }) => {
  return <ExperienceContent {...restProps}>{children}</ExperienceContent>;
};

Experiences.TextPosition = ({ children, ...restProps }) => {
  return <TextPosition {...restProps}>{children}</TextPosition>;
};

Experiences.TextCompany = ({ children, ...restProps }) => {
  return <TextCompany {...restProps}>{children}</TextCompany>;
};

Experiences.CurrentBadge = ({ children, ...restProps }) => {
  return <CurrentBadge {...restProps}>{children}</CurrentBadge>;
};

Experiences.CurrentDot = ({ children, ...restProps }) => {
  return <CurrentDot {...restProps}>{children}</CurrentDot>;
};

Experiences.ContainerExperienceText = ({ children, ...restProps }) => {
  return (
    <ContainerExperienceText {...restProps}>{children}</ContainerExperienceText>
  );
};

Experiences.TextDescription = ({ children, ...restProps }) => {
  return <TextDescription {...restProps}>{children}</TextDescription>;
};

/**
 * Certificates
 */

Experiences.BoxCertificates = ({ children, ...restProps }) => {
  return <BoxCertificates {...restProps}>{children}</BoxCertificates>;
};

Experiences.TextSubTitle = ({ children, ...restProps }) => {
  return <TextSubTitle {...restProps}>{children}</TextSubTitle>;
};

Experiences.CertificateDivider = ({ children, ...restProps }) => {
  return <CertificateDivider {...restProps}>{children}</CertificateDivider>;
};

Experiences.ContainerCertificates = ({ children, ...restProps }) => {
  return (
    <ContainerCertificates {...restProps}>{children}</ContainerCertificates>
  );
};

Experiences.ContainerCertificate = ({ children, ...restProps }) => {
  return <ContainerCertificate {...restProps}>{children}</ContainerCertificate>;
};

Experiences.ItemBadge = ({ src, ...restProps }) => {
  return <ItemBadge src={src} {...restProps} />;
};

Experiences.ContainerCertificateInfo = ({ children, ...restProps }) => {
  return (
    <ContainerCertificateInfo {...restProps}>
      {children}
    </ContainerCertificateInfo>
  );
};

Experiences.TextCertificateTitle = ({ children, ...restProps }) => {
  return <TextCertificateTitle {...restProps}>{children}</TextCertificateTitle>;
};

Experiences.TextCertificateIssuer = ({ children, ...restProps }) => {
  return (
    <TextCertificateIssuer {...restProps}>{children}</TextCertificateIssuer>
  );
};

Experiences.TextCertificateDate = ({ children, ...restProps }) => {
  return <TextCertificateDate {...restProps}>{children}</TextCertificateDate>;
};

Experiences.BadgeButton = ({ children, ...restProps }) => {
  return <BadgeButton {...restProps}>{children}</BadgeButton>;
};

Experiences.GenericCertificateIcon = ({ children, ...restProps }) => {
  return (
    <GenericCertificateIcon {...restProps}>{children}</GenericCertificateIcon>
  );
};

Experiences.CertificateTextContainer = ({ children, ...restProps }) => {
  return (
    <CertificateTextContainer {...restProps}>
      {children}
    </CertificateTextContainer>
  );
};

Experiences.ContainerCertificateActions = ({ children, ...restProps }) => {
  return (
    <ContainerCertificateActions {...restProps}>
      {children}
    </ContainerCertificateActions>
  );
};

Experiences.CertificateAction = ({ children, ...restProps }) => {
  return <CertificateAction {...restProps}>{children}</CertificateAction>;
};

Experiences.CertificateModalOverlay = ({ children, ...restProps }) => {
  return (
    <CertificateModalOverlay {...restProps}>{children}</CertificateModalOverlay>
  );
};

Experiences.CertificateModal = ({ children, ...restProps }) => {
  return <CertificateModal {...restProps}>{children}</CertificateModal>;
};

Experiences.CertificateModalHeader = ({ children, ...restProps }) => {
  return (
    <CertificateModalHeader {...restProps}>{children}</CertificateModalHeader>
  );
};

Experiences.TextModalTitle = ({ children, ...restProps }) => {
  return <TextModalTitle {...restProps}>{children}</TextModalTitle>;
};

Experiences.CertificateModalClose = ({ children, ...restProps }) => {
  return (
    <CertificateModalClose {...restProps}>{children}</CertificateModalClose>
  );
};

Experiences.CertificateModalImage = ({ src, ...restProps }) => {
  return <CertificateModalImage src={src} {...restProps} />;
};

export default Experiences;
