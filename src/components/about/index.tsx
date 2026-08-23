import React from "react";
import {
  ItemNavigationIcon,
  ItemSocialIconNavigation,
  ItemButton,
  ItemSocialIcon,
  Container,
  ContainerAboutMeText,
  ContainerTechInfo,
  ContainerTechUsed,
  ContainerTechUsedText,
  ContainerAvatarInfo,
  ContainerProfileContactTexts,
  ContainerSocial,
  ContainerContacts,
  ContainerBusinessShopButtons,
  ContainerDivider,
  ContainerNavigaton,
  ContainerTech,
  Box,
  BoxInfo,
  BoxInfoTech,
  BoxProfileInfo,
  BoxProfile,
  TextLink,
  TextDescription,
  TextTitle,
  TextTechUsed,
  TextTitleOther,
  TextSubTitle,
  TextContact,
  TextDescriptionHighlight,
  TextBusinessShopTitle,
  ImageAvatar,
  ImageTech,
} from "./styles/about";

type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;

// Accept props whatever Container accepts
type AboutProps = StyledProps<typeof Container>;

export default function About({ children, ...restProps }: AboutProps) {
  return <Container {...restProps}>{children}</Container>;
}

type ItemNavigationIconProps = StyledProps<typeof ItemNavigationIcon>;
type ItemSocialIconNavigationProps = StyledProps<typeof ItemSocialIcon>;
type ItemButtonProps = StyledProps<typeof ItemButton>;
type ItemSocialIconProps = StyledProps<typeof ItemSocialIcon>;
type ContainerAboutMeTextProps = StyledProps<typeof ContainerAboutMeText>;
type ContainerTechInfoProps = StyledProps<typeof ContainerTechInfo>;
type ContainerTechUsedProps = StyledProps<typeof ContainerTechUsed>;
type ContainerTechUsedTextProps = StyledProps<typeof ContainerTechUsedText>;
type ContainerAvatarInfoProps = StyledProps<typeof ContainerAvatarInfo>;
type ContainerProfileContactTextsProps = StyledProps<
  typeof ContainerProfileContactTexts
>;
type ContainerSocialProps = StyledProps<typeof ContainerSocial>;
type ContainerContactsProps = StyledProps<typeof ContainerContacts>;
type ContainerBusinessShopButtonsProps = StyledProps<
  typeof ContainerBusinessShopButtons
>;
type ContainerDividerProps = StyledProps<typeof ContainerDivider>;
type ContainerNavigatonProps = StyledProps<typeof ContainerNavigaton>;
type ContainerTechProps = StyledProps<typeof ContainerTech>;
type BoxProps = StyledProps<typeof Box>;
type BoxInfoProps = StyledProps<typeof BoxInfo>;
type BoxInfoTechProps = StyledProps<typeof BoxInfoTech>;
type BoxProfileProps = StyledProps<typeof BoxProfile>;
type BoxProfileInfoProps = StyledProps<typeof BoxProfileInfo>;
type TextLinkProps = StyledProps<typeof TextLink>;
type TextDescriptionProps = StyledProps<typeof TextDescription>;
type TextTitleProps = StyledProps<typeof TextTitle>;
type TextTechUsedProps = StyledProps<typeof TextTechUsed>;
type TextTitleOtherProps = StyledProps<typeof TextTitleOther>;
type TextSubTitleProps = StyledProps<typeof TextSubTitle>;
type TextContactProps = StyledProps<typeof TextContact>;
type TextDescriptionHighlightProps = StyledProps<
  typeof TextDescriptionHighlight
>;
type TextBusinessShopTitleProps = StyledProps<typeof TextBusinessShopTitle>;
type ImageAvatarProps = StyledProps<typeof ImageAvatar>;
type ImageTechProps = StyledProps<typeof ImageTech>;

/**
 * * Items
 */

About.ItemNavigationIcon = function Component({
  children,
  ...restProps
}: ItemNavigationIconProps) {
  return <ItemNavigationIcon {...restProps}>{children}</ItemNavigationIcon>;
};

About.ItemSocialIconNavigation = function Component({
  children,
  ...restProps
}: ItemSocialIconNavigationProps) {
  return (
    <ItemSocialIconNavigation {...restProps}>
      {children}
    </ItemSocialIconNavigation>
  );
};

About.ItemButton = function Component({
  children,
  ...restProps
}: ItemButtonProps) {
  return <ItemButton {...restProps}>{children}</ItemButton>;
};

About.ItemSocialIcon = function Component({
  children,
  ...restProps
}: ItemSocialIconProps) {
  return <ItemSocialIcon {...restProps}>{children}</ItemSocialIcon>;
};

/**
 * * Containers
 */

About.ContainerAboutMeText = function Component({
  children,
  ...restProps
}: ContainerAboutMeTextProps) {
  return <ContainerAboutMeText {...restProps}>{children}</ContainerAboutMeText>;
};

About.ContainerTechInfo = function Component({
  children,
  ...restProps
}: ContainerTechInfoProps) {
  return <ContainerTechInfo {...restProps}>{children}</ContainerTechInfo>;
};

About.ContainerTechUsed = function Component({
  children,
  ...restProps
}: ContainerTechUsedProps) {
  return <ContainerTechUsed {...restProps}>{children}</ContainerTechUsed>;
};

About.ContainerTechUsedText = function Component({
  children,
  ...restProps
}: ContainerTechUsedTextProps) {
  return (
    <ContainerTechUsedText {...restProps}>{children}</ContainerTechUsedText>
  );
};

About.ContainerAvatarInfo = function Component({
  children,
  ...restProps
}: ContainerAvatarInfoProps) {
  return <ContainerAvatarInfo {...restProps}>{children}</ContainerAvatarInfo>;
};

About.ContainerProfileContactTexts = function Component({
  children,
  ...restProps
}: ContainerProfileContactTextsProps) {
  return (
    <ContainerProfileContactTexts {...restProps}>
      {children}
    </ContainerProfileContactTexts>
  );
};

About.ContainerSocial = function Component({
  children,
  ...restProps
}: ContainerSocialProps) {
  return <ContainerSocial {...restProps}>{children}</ContainerSocial>;
};

About.ContainerContacts = function Component({
  children,
  ...restProps
}: ContainerContactsProps) {
  return <ContainerContacts {...restProps}>{children}</ContainerContacts>;
};

About.ContainerBusinessShopButtons = function Component({
  children,
  ...restProps
}: ContainerBusinessShopButtonsProps) {
  return (
    <ContainerBusinessShopButtons {...restProps}>
      {children}
    </ContainerBusinessShopButtons>
  );
};

About.ContainerDivider = function Component({
  children,
  ...restProps
}: ContainerDividerProps) {
  return <ContainerDivider {...restProps}>{children}</ContainerDivider>;
};

About.ContainerNavigaton = function Component({
  children,
  ...restProps
}: ContainerNavigatonProps) {
  return <ContainerNavigaton {...restProps}>{children}</ContainerNavigaton>;
};

About.ContainerTech = function Component({
  children,
  ...restProps
}: ContainerTechProps) {
  return <ContainerTech {...restProps}>{children}</ContainerTech>;
};

/**
 * * Boxes
 */

About.Box = function Component({ children, ...restProps }: BoxProps) {
  return <Box {...restProps}>{children}</Box>;
};

About.BoxInfo = function Component({ children, ...restProps }: BoxInfoProps) {
  return <BoxInfo {...restProps}>{children}</BoxInfo>;
};

About.BoxInfoTech = function Component({
  children,
  ...restProps
}: BoxInfoTechProps) {
  return <BoxInfoTech {...restProps}>{children}</BoxInfoTech>;
};

About.BoxProfile = function Component({
  children,
  ...restProps
}: BoxProfileProps) {
  return <BoxProfile {...restProps}>{children}</BoxProfile>;
};

About.BoxProfileInfo = function Component({
  children,
  ...restProps
}: BoxProfileInfoProps) {
  return <BoxProfileInfo {...restProps}>{children}</BoxProfileInfo>;
};

/**
 * * Texts
 */

About.TextLink = function AboutTextLink({
  children,
  ...restProps
}: TextLinkProps) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

About.TextDescription = function AboutTextDescription({
  children,
  ...restProps
}: TextDescriptionProps) {
  return <TextDescription {...restProps}>{children}</TextDescription>;
};

About.TextTitle = function AboutTextTitle({
  children,
  ...restProps
}: TextTitleProps) {
  return <TextTitle {...restProps}>{children}</TextTitle>;
};

About.TextTechUsed = function AboutTextTechUsed({
  children,
  ...restProps
}: TextTechUsedProps) {
  return <TextTechUsed {...restProps}>{children}</TextTechUsed>;
};

About.TextTitleOther = function AboutTextTitleOther({
  children,
  ...restProps
}: TextTitleOtherProps) {
  return <TextTitleOther {...restProps}>{children}</TextTitleOther>;
};

About.TextContact = function AboutTextContact({
  children,
  ...restProps
}: TextContactProps) {
  return <TextContact {...restProps}>{children}</TextContact>;
};

About.TextSubTitle = function AboutTextSubTitle({
  children,
  ...restProps
}: TextSubTitleProps) {
  return <TextSubTitle {...restProps}>{children}</TextSubTitle>;
};

About.TextDescriptionHighlight = function AboutTextDescriptionHighlight({
  children,
  ...restProps
}: TextDescriptionHighlightProps) {
  return (
    <TextDescriptionHighlight {...restProps}>
      {children}
    </TextDescriptionHighlight>
  );
};

About.TextBusinessShopTitle = function AboutTextBusinessShopTitle({
  children,
  ...restProps
}: TextBusinessShopTitleProps) {
  return (
    <TextBusinessShopTitle {...restProps}>{children}</TextBusinessShopTitle>
  );
};

/**
 * * Images
 */

About.ImageAvatar = function AboutImageAvatar({
  src,
  ...restProps
}: ImageAvatarProps) {
  return <ImageAvatar src={src} {...restProps} />;
};

About.ImageTech = function AboutImageTech({
  src,
  ...restProps
}: ImageTechProps) {
  return <ImageTech src={src} {...restProps} />;
};
