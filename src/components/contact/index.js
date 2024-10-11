import React from "react";
import { ItemButton,
         Container,
         ContainerInfo,
         Box,
         BoxContact,
         TextCopyright,
         TextTitle,
         TextDescription } from './styles/contact';

export default function Contact({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

/**
 * * Items
 */

Contact.ItemButton = function ContactButton({ children, ...restProps }) {
    return <ItemButton {...restProps}>{children}</ItemButton>
}

/**
 * * Containers
 */

Contact.ContainerInfo = function ContactContainerInfo({ children, ...restProps }) {
    return <ContainerInfo {...restProps}>{children}</ContainerInfo>
}

/**
 * * Boxes
 */

Contact.Box = function ContactBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

Contact.BoxContact = function ContactBoxContact({ children, ...restProps }) {
    return <BoxContact {...restProps}>{children}</BoxContact>
}

/**
 * * Texts
 */

Contact.TextCopyright = function ContactTextCopyright({ children, ...restProps }) {
    return <TextCopyright {...restProps}>{children}</TextCopyright>
}

Contact.TextTitle = function ContactTextTitle({ children, ...restProps }) {
    return <TextTitle {...restProps}>{children}</TextTitle>
}

Contact.TextDescription = function ContactTextDescription({ children, ...restProps }) {
    return <TextDescription {...restProps}>{children}</TextDescription>
}