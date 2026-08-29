import React from "react";

import {
  ItemButton,
  ItemContact,
  ItemContactIcon,
  ContactDivider,
  Container,
  ContainerInfo,
  ContainerIntro,
  ContainerContactContent,
  ContainerDescription,
  ContainerAction,
  ContainerContacts,
  ContainerContactItem,
  ContainerContactText,
  ContainerStatus,
  ContainerStatusIndicator,
  ContainerStatusText,
  Box,
  BoxContact,
  TextLabel,
  TextTitle,
  TextAccent,
  TextDescription,
  TextContactLabel,
  TextStatusTitle,
  TextStatus,
  TextCopyright,
} from "./styles/contact";

type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;

type ContactProps = StyledProps<typeof Container>;

/**
 * Items
 */

type ItemButtonProps = StyledProps<typeof ItemButton>;
type ItemContactProps = StyledProps<typeof ItemContact>;
type ItemContactIconProps = StyledProps<typeof ItemContactIcon>;
type ContactDividerProps = StyledProps<typeof ContactDivider>;

/**
 * Containers
 */

type ContainerInfoProps = StyledProps<typeof ContainerInfo>;
type ContainerIntroProps = StyledProps<typeof ContainerIntro>;
type ContainerContactContentProps = StyledProps<typeof ContainerContactContent>;
type ContainerDescriptionProps = StyledProps<typeof ContainerDescription>;
type ContainerActionProps = StyledProps<typeof ContainerAction>;
type ContainerContactsProps = StyledProps<typeof ContainerContacts>;
type ContainerContactItemProps = StyledProps<typeof ContainerContactItem>;
type ContainerContactTextProps = StyledProps<typeof ContainerContactText>;
type ContainerStatusProps = StyledProps<typeof ContainerStatus>;
type ContainerStatusIndicatorProps = StyledProps<
  typeof ContainerStatusIndicator
>;
type ContainerStatusTextProps = StyledProps<typeof ContainerStatusText>;

/**
 * Boxes
 */

type BoxProps = StyledProps<typeof Box>;
type BoxContactProps = StyledProps<typeof BoxContact>;

/**
 * Texts
 */

type TextLabelProps = StyledProps<typeof TextLabel>;
type TextTitleProps = StyledProps<typeof TextTitle>;
type TextAccentProps = StyledProps<typeof TextAccent>;
type TextDescriptionProps = StyledProps<typeof TextDescription>;
type TextContactLabelProps = StyledProps<typeof TextContactLabel>;
type TextStatusTitleProps = StyledProps<typeof TextStatusTitle>;
type TextStatusProps = StyledProps<typeof TextStatus>;
type TextCopyrightProps = StyledProps<typeof TextCopyright>;

export default function Contact({ children, ...restProps }: ContactProps) {
  return <Container {...restProps}>{children}</Container>;
}

/**
 * Items
 */

Contact.ItemButton = function Component({
  children,
  ...restProps
}: ItemButtonProps) {
  return <ItemButton {...restProps}>{children}</ItemButton>;
};

Contact.ItemContact = function Component({
  children,
  ...restProps
}: ItemContactProps) {
  return <ItemContact {...restProps}>{children}</ItemContact>;
};

Contact.ItemContactIcon = function Component({
  children,
  ...restProps
}: ItemContactIconProps) {
  return <ItemContactIcon {...restProps}>{children}</ItemContactIcon>;
};

Contact.ContactDivider = function Component({
  ...restProps
}: ContactDividerProps) {
  return <ContactDivider {...restProps} />;
};

/**
 * Containers
 */

Contact.ContainerInfo = function Component({
  children,
  ...restProps
}: ContainerInfoProps) {
  return <ContainerInfo {...restProps}>{children}</ContainerInfo>;
};

Contact.ContainerIntro = function Component({
  children,
  ...restProps
}: ContainerIntroProps) {
  return <ContainerIntro {...restProps}>{children}</ContainerIntro>;
};

Contact.ContainerContactContent = function Component({
  children,
  ...restProps
}: ContainerContactContentProps) {
  return (
    <ContainerContactContent {...restProps}>{children}</ContainerContactContent>
  );
};

Contact.ContainerDescription = function Component({
  children,
  ...restProps
}: ContainerDescriptionProps) {
  return <ContainerDescription {...restProps}>{children}</ContainerDescription>;
};

Contact.ContainerAction = function Component({
  children,
  ...restProps
}: ContainerActionProps) {
  return <ContainerAction {...restProps}>{children}</ContainerAction>;
};

Contact.ContainerContacts = function Component({
  children,
  ...restProps
}: ContainerContactsProps) {
  return <ContainerContacts {...restProps}>{children}</ContainerContacts>;
};

Contact.ContainerContactItem = function Component({
  children,
  ...restProps
}: ContainerContactItemProps) {
  return <ContainerContactItem {...restProps}>{children}</ContainerContactItem>;
};

Contact.ContainerContactText = function Component({
  children,
  ...restProps
}: ContainerContactTextProps) {
  return <ContainerContactText {...restProps}>{children}</ContainerContactText>;
};

Contact.ContainerStatus = function Component({
  children,
  ...restProps
}: ContainerStatusProps) {
  return <ContainerStatus {...restProps}>{children}</ContainerStatus>;
};

Contact.ContainerStatusIndicator = function Component({
  ...restProps
}: ContainerStatusIndicatorProps) {
  return <ContainerStatusIndicator {...restProps} />;
};

Contact.ContainerStatusText = function Component({
  children,
  ...restProps
}: ContainerStatusTextProps) {
  return <ContainerStatusText {...restProps}>{children}</ContainerStatusText>;
};

/**
 * Boxes
 */

Contact.Box = function Component({ children, ...restProps }: BoxProps) {
  return <Box {...restProps}>{children}</Box>;
};

Contact.BoxContact = function Component({
  children,
  ...restProps
}: BoxContactProps) {
  return <BoxContact {...restProps}>{children}</BoxContact>;
};

/**
 * Texts
 */

Contact.TextLabel = function Component({
  children,
  ...restProps
}: TextLabelProps) {
  return <TextLabel {...restProps}>{children}</TextLabel>;
};

Contact.TextTitle = function Component({
  children,
  ...restProps
}: TextTitleProps) {
  return <TextTitle {...restProps}>{children}</TextTitle>;
};

Contact.TextAccent = function Component({ ...restProps }: TextAccentProps) {
  return <TextAccent {...restProps} />;
};

Contact.TextDescription = function Component({
  children,
  ...restProps
}: TextDescriptionProps) {
  return <TextDescription {...restProps}>{children}</TextDescription>;
};

Contact.TextContactLabel = function Component({
  children,
  ...restProps
}: TextContactLabelProps) {
  return <TextContactLabel {...restProps}>{children}</TextContactLabel>;
};

Contact.TextStatusTitle = function Component({
  children,
  ...restProps
}: TextStatusTitleProps) {
  return <TextStatusTitle {...restProps}>{children}</TextStatusTitle>;
};

Contact.TextStatus = function Component({
  children,
  ...restProps
}: TextStatusProps) {
  return <TextStatus {...restProps}>{children}</TextStatus>;
};

Contact.TextCopyright = function Component({
  children,
  ...restProps
}: TextCopyrightProps) {
  return <TextCopyright {...restProps}>{children}</TextCopyright>;
};
