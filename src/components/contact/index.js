import React from "react";
import { Container,
         Box,
         InfoContainer, 
         SubBox,
         Button, 
         CopyrightText } from './styles/contact';

export default function Contact({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Contact.Box = function ContactBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

Contact.InfoContainer = function ContactInfoContainer({ children, ...restProps }) {
    return <InfoContainer {...restProps}>{children}</InfoContainer>
}

Contact.SubBox = function ContactSubBox({ children, ...restProps }) {
    return <SubBox {...restProps}>{children}</SubBox>
}

Contact.Button = function ContactButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

Contact.CopyrightText = function ContactCopyrightText({ children, ...restProps }) {
    return <CopyrightText {...restProps}>{children}</CopyrightText>
}