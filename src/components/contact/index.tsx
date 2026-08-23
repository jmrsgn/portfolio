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

type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;

// Accept props whatever Container accepts
type ContactProps = StyledProps<typeof Container>;

export default function Contact({ children, ...restProps }: ContactProps) {
  return <Container {...restProps}>{children}</Container>;
}

type ItemButtonProps = StyledProps<typeof ItemButton>;
type ContainerInfoProps = StyledProps<typeof ContainerInfo>;
type BoxProps = StyledProps<typeof Box>;
type BoxContactProps = StyledProps<typeof BoxContact>;
type TextCopyrightProps = StyledProps<typeof TextCopyright>;
type TextTitleProps = StyledProps<typeof TextTitle>;
type TextDescriptionProps = StyledProps<typeof TextDescription>;

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
