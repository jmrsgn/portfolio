import React from "react";
import {
  ItemButton,
  Container,
  ContainerInfo,
  Box,
  BoxContact,
  TextCopyright,
  TextTitle,
  TextDescription,
} from "./styles/contact";

// Accept props whatever Container accepts
type ContactProps = React.ComponentProps<typeof Container>;

type ItemButtonProps = React.ComponentProps<typeof ItemButton>;
type ContainerInfoProps = React.ComponentProps<typeof ContainerInfo>;
type BoxProps = React.ComponentProps<typeof Box>;
type BoxContactProps = React.ComponentProps<typeof BoxContact>;
type TextCopyrightProps = React.ComponentProps<typeof TextCopyright>;
type TextTitleProps = React.ComponentProps<typeof TextTitle>;
type TextDescriptionProps = React.ComponentProps<typeof TextDescription>;

export default function Contact({ children, ...restProps }: ContactProps) {
  return <Container {...restProps}>{children}</Container>;
}

/**
 * * Items
 */

Contact.ItemButton = function Component({
  children,
  ...restProps
}: ItemButtonProps) {
  return <ItemButton {...restProps}>{children}</ItemButton>;
};

/**
 * * Containers
 */

Contact.ContainerInfo = function Component({
  children,
  ...restProps
}: ContainerInfoProps) {
  return <ContainerInfo {...restProps}>{children}</ContainerInfo>;
};

/**
 * * Boxes
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
 * * Texts
 */

Contact.TextCopyright = function Component({
  children,
  ...restProps
}: TextCopyrightProps) {
  return <TextCopyright {...restProps}>{children}</TextCopyright>;
};

Contact.TextTitle = function Component({
  children,
  ...restProps
}: TextTitleProps) {
  return <TextTitle {...restProps}>{children}</TextTitle>;
};

Contact.TextDescription = function Component({
  children,
  ...restProps
}: TextDescriptionProps) {
  return <TextDescription {...restProps}>{children}</TextDescription>;
};
