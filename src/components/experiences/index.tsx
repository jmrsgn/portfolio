import React from "react";
import {
  ItemBadge,
  ItemCertificate,
  ItemExperienceTab,
  ItemNavigationIcon,
  Container,
  ContainerInfo,
  ContainerNavigation,
  ContainerExperienceDisplay,
  ContainerBadges,
  ContainerCertificates,
  ContainerCertificate,
  ContainerCertificateInfo,
  ContainerExperiences,
  ContainerExperience,
  ContainerExperienceText,
  ContainerExperienceTabs,
  Box,
  BoxExperiences,
  BoxCertificates,
  TextExperienceTab,
  TextCertificateTitle,
  TextCertificateYear,
  TextLink,
  TextTitle,
  TextSubTitle,
  TextCompany,
  TextDate,
  TextDescription,
  PositionDivider,
  TextPosition,
  TextPreviousPosition,
} from "./styles/experiences";

// Accept props whatever Container accepts
type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;
type ExperiencesProps = StyledProps<typeof Container>;

export default function Experiences({
  children,
  ...restProps
}: ExperiencesProps) {
  return <Container {...restProps}>{children}</Container>;
}

type ItemBadgeProps = StyledProps<typeof ItemBadge>;
type ItemCertificateProps = StyledProps<typeof ItemCertificate>;
type ItemExperienceTabProps = StyledProps<typeof ItemExperienceTab>;
type ItemNavigationIconProps = StyledProps<typeof ItemNavigationIcon>;
type ContainerInfoProps = StyledProps<typeof ContainerInfo>;
type ContainerNavigationProps = StyledProps<typeof ContainerNavigation>;
type ContainerExperienceDisplayProps = StyledProps<
  typeof ContainerExperienceDisplay
>;
type ContainerBadgesProps = StyledProps<typeof ContainerBadges>;
type ContainerCertificatesProps = StyledProps<typeof ContainerCertificates>;
type ContainerCertificateProps = StyledProps<typeof ContainerCertificate>;
type ContainerCertificateInfoProps = StyledProps<
  typeof ContainerCertificateInfo
>;
type ContainerExperiencesProps = StyledProps<typeof ContainerExperiences>;
type ContainerExperienceProps = StyledProps<typeof ContainerExperience>;
type ContainerExperienceTextProps = StyledProps<typeof ContainerExperienceText>;
type ContainerExperienceTabsProps = StyledProps<typeof ContainerExperienceTabs>;
type BoxProps = StyledProps<typeof Box>;
type BoxExperiencesProps = StyledProps<typeof BoxExperiences>;
type BoxCertificatesProps = StyledProps<typeof BoxCertificates>;
type TextExperienceTabProps = StyledProps<typeof TextExperienceTab>;
type TextCertificateTitleProps = StyledProps<typeof TextCertificateTitle>;
type TextCertificateYearProps = StyledProps<typeof TextCertificateYear>;
type TextLinkProps = StyledProps<typeof TextLink>;
type TextTitleProps = StyledProps<typeof TextTitle>;
type TextSubTitleProps = StyledProps<typeof TextSubTitle>;
type TextCompanyProps = StyledProps<typeof TextCompany>;
type TextDateProps = StyledProps<typeof TextDate>;
type TextDescriptionProps = StyledProps<typeof TextDescription>;
type PositionDividerProps = StyledProps<typeof PositionDivider>;
type TextPositionProps = StyledProps<typeof TextPosition>;
type TextPreviousPositionProps = StyledProps<typeof TextPreviousPosition>;

/**
 * Common Styles
 */
Experiences.PositionDivider = function Component({
  children,
  ...restProps
}: PositionDividerProps) {
  return <PositionDivider {...restProps}>{children}</PositionDivider>;
};

/**
 * Items
 */

Experiences.ItemExperienceTab = function Component({
  children,
  ...restProps
}: ItemExperienceTabProps) {
  return <ItemExperienceTab {...restProps}>{children}</ItemExperienceTab>;
};

Experiences.ItemBadge = function Component({
  src,
  ...restProps
}: ItemBadgeProps) {
  return <ItemBadge src={src} {...restProps} />;
};

Experiences.ItemCertificate = function Component({
  src,
  ...restProps
}: ItemCertificateProps) {
  return <ItemCertificate src={src} {...restProps} />;
};

Experiences.ItemNavigationIcon = function Component({
  children,
  ...restProps
}: ItemNavigationIconProps) {
  return <ItemNavigationIcon {...restProps}>{children}</ItemNavigationIcon>;
};

/**
 * Containers
 */

Experiences.ContainerCertificate = function Component({
  children,
  ...restProps
}: ContainerCertificateProps) {
  return <ContainerCertificate {...restProps}>{children}</ContainerCertificate>;
};

Experiences.ContainerCertificateInfo = function Component({
  children,
  ...restProps
}: ContainerCertificateInfoProps) {
  return (
    <ContainerCertificateInfo {...restProps}>
      {children}
    </ContainerCertificateInfo>
  );
};

Experiences.ContainerInfo = function Component({
  children,
  ...restProps
}: ContainerInfoProps) {
  return <ContainerInfo {...restProps}>{children}</ContainerInfo>;
};

Experiences.ContainerExperienceDisplay = function Component({
  children,
  ...restProps
}: ContainerExperienceDisplayProps) {
  return (
    <ContainerExperienceDisplay {...restProps}>
      {children}
    </ContainerExperienceDisplay>
  );
};

Experiences.ContainerBadges = function Component({
  children,
  ...restProps
}: ContainerBadgesProps) {
  return <ContainerBadges {...restProps}>{children}</ContainerBadges>;
};

Experiences.ContainerCertificates = function Component({
  children,
  ...restProps
}: ContainerCertificatesProps) {
  return (
    <ContainerCertificates {...restProps}>{children}</ContainerCertificates>
  );
};

Experiences.ContainerExperiences = function Component({
  children,
  ...restProps
}: ContainerExperiencesProps) {
  return <ContainerExperiences {...restProps}>{children}</ContainerExperiences>;
};

Experiences.ContainerExperience = function Component({
  children,
  ...restProps
}: ContainerExperienceProps) {
  return <ContainerExperience {...restProps}>{children}</ContainerExperience>;
};

Experiences.ContainerExperienceText = function Component({
  children,
  ...restProps
}: ContainerExperienceTextProps) {
  return (
    <ContainerExperienceText {...restProps}>{children}</ContainerExperienceText>
  );
};

Experiences.ContainerExperienceTabs = function Component({
  children,
  ...restProps
}: ContainerExperienceTabsProps) {
  return (
    <ContainerExperienceTabs {...restProps}>{children}</ContainerExperienceTabs>
  );
};

Experiences.ContainerNavigation = function Component({
  children,
  ...restProps
}: ContainerNavigationProps) {
  return <ContainerNavigation {...restProps}>{children}</ContainerNavigation>;
};

/**
 * Boxes
 */

Experiences.Box = function Component({ children, ...restProps }: BoxProps) {
  return <Box {...restProps}>{children}</Box>;
};

Experiences.BoxExperiences = function Component({
  children,
  ...restProps
}: BoxExperiencesProps) {
  return <BoxExperiences {...restProps}>{children}</BoxExperiences>;
};

Experiences.BoxCertificates = function Component({
  children,
  ...restProps
}: BoxCertificatesProps) {
  return <BoxCertificates {...restProps}>{children}</BoxCertificates>;
};

/**
 * Texts
 */

Experiences.TextTitle = function Component({
  children,
  ...restProps
}: TextTitleProps) {
  return <TextTitle {...restProps}>{children}</TextTitle>;
};

Experiences.TextLink = function Component({
  children,
  ...restProps
}: TextLinkProps) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Experiences.TextSubTitle = function Component({
  children,
  ...restProps
}: TextSubTitleProps) {
  return <TextSubTitle {...restProps}>{children}</TextSubTitle>;
};

Experiences.TextCompany = function Component({
  children,
  ...restProps
}: TextCompanyProps) {
  return <TextCompany {...restProps}>{children}</TextCompany>;
};

Experiences.TextCertificateTitle = function Component({
  children,
  ...restProps
}: TextCertificateTitleProps) {
  return <TextCertificateTitle {...restProps}>{children}</TextCertificateTitle>;
};

Experiences.TextCertificateYear = function Component({
  children,
  ...restProps
}: TextCertificateYearProps) {
  return <TextCertificateYear {...restProps}>{children}</TextCertificateYear>;
};

Experiences.TextDate = function Component({
  children,
  ...restProps
}: TextDateProps) {
  return <TextDate {...restProps}>{children}</TextDate>;
};

Experiences.TextPosition = function Component({
  children,
  ...restProps
}: TextPositionProps) {
  return <TextPosition {...restProps}>{children}</TextPosition>;
};

Experiences.TextPreviousPosition = function Component({
  children,
  ...restProps
}: TextPreviousPositionProps) {
  return <TextPreviousPosition {...restProps}>{children}</TextPreviousPosition>;
};

Experiences.TextExperienceTab = function Component({
  children,
  ...restProps
}: TextExperienceTabProps) {
  return <TextExperienceTab {...restProps}>{children}</TextExperienceTab>;
};

Experiences.TextDescription = function Component({
  children,
  ...restProps
}: TextDescriptionProps) {
  return <TextDescription {...restProps}>{children}</TextDescription>;
};
