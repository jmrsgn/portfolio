import React from "react";

import {
  Box,
  BoxContact,
  ContactDivider,
  Container,
  ContainerContactContent,
  ContainerContactItem,
  ContainerContacts,
  ContainerContactText,
  ItemButton,
  ItemContact,
  ItemContactIcon,
  TextContactLabel,
  TextCopyright,
} from "./styles/contact";
import {
  TextEyebrow,
  TextTitle,
  Divider,
  TextIntro,
} from "../../globalComponents";

type StyledProps<T extends React.ElementType> = React.ComponentProps<T>;

type ContactProps = StyledProps<typeof Container>;

type ContactComponent = React.FC<ContactProps> & {
  Box: React.FC<StyledProps<typeof Box>>;
  BoxContact: React.FC<StyledProps<typeof BoxContact>>;

  TextEyebrow: React.FC<StyledProps<typeof TextEyebrow>>;
  TextTitle: React.FC<StyledProps<typeof TextTitle>>;
  Divider: React.FC<StyledProps<typeof Divider>>;
  TextIntro: React.FC<StyledProps<typeof TextIntro>>;

  ContainerContactContent: React.FC<
    StyledProps<typeof ContainerContactContent>
  >;
  ContainerContacts: React.FC<StyledProps<typeof ContainerContacts>>;
  ContainerContactItem: React.FC<StyledProps<typeof ContainerContactItem>>;
  ContainerContactText: React.FC<StyledProps<typeof ContainerContactText>>;

  ItemButton: React.FC<StyledProps<typeof ItemButton>>;
  ItemContact: React.FC<StyledProps<typeof ItemContact>>;
  ItemContactIcon: React.FC<StyledProps<typeof ItemContactIcon>>;
  ContactDivider: React.FC<StyledProps<typeof ContactDivider>>;

  TextContactLabel: React.FC<StyledProps<typeof TextContactLabel>>;
  TextCopyright: React.FC<StyledProps<typeof TextCopyright>>;
};

const Contact = function Contact({ children, ...restProps }: ContactProps) {
  return <Container {...restProps}>{children}</Container>;
} as ContactComponent;

/**
 * Layout
 */

Contact.Box = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>;
};

Contact.BoxContact = ({ children, ...restProps }) => {
  return <BoxContact {...restProps}>{children}</BoxContact>;
};

/**
 * Header
 */

Contact.TextEyebrow = ({ children, ...restProps }) => {
  return <TextEyebrow {...restProps}>{children}</TextEyebrow>;
};

Contact.TextTitle = ({ children, ...restProps }) => {
  return <TextTitle {...restProps}>{children}</TextTitle>;
};

Contact.Divider = ({ children, ...restProps }) => {
  return <Divider {...restProps} />;
};

Contact.TextIntro = ({ children, ...restProps }) => {
  return <TextIntro {...restProps}>{children}</TextIntro>;
};

/**
 * Contact details
 */

Contact.ContainerContactContent = ({ children, ...restProps }) => {
  return (
    <ContainerContactContent {...restProps}>{children}</ContainerContactContent>
  );
};

Contact.ContainerContacts = ({ children, ...restProps }) => {
  return <ContainerContacts {...restProps}>{children}</ContainerContacts>;
};

Contact.ContainerContactItem = ({ children, ...restProps }) => {
  return <ContainerContactItem {...restProps}>{children}</ContainerContactItem>;
};

Contact.ContainerContactText = ({ children, ...restProps }) => {
  return <ContainerContactText {...restProps}>{children}</ContainerContactText>;
};

Contact.ItemButton = ({ children, ...restProps }) => {
  return <ItemButton {...restProps}>{children}</ItemButton>;
};

Contact.ItemContact = ({ children, ...restProps }) => {
  return <ItemContact {...restProps}>{children}</ItemContact>;
};

Contact.ItemContactIcon = ({ children, ...restProps }) => {
  return <ItemContactIcon {...restProps}>{children}</ItemContactIcon>;
};

Contact.ContactDivider = ({ children, ...restProps }) => {
  return <ContactDivider {...restProps} />;
};

Contact.TextContactLabel = ({ children, ...restProps }) => {
  return <TextContactLabel {...restProps}>{children}</TextContactLabel>;
};

Contact.TextCopyright = ({ children, ...restProps }) => {
  return <TextCopyright {...restProps}>{children}</TextCopyright>;
};

export default Contact;
