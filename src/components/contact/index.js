import React from "react";
import { Container,
         Box,
         ImagesContainer,
         ButtonText,
         Image,
         Button } from './styles/contact';

export default function Contact({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Contact.Box = function ContactBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

Contact.Image = function ContactImage({ src, ...restProps }) {
    return <Image {...restProps} src={src} />
}

Contact.ImagesContainer = function ContactImagesContainer({ children, ...restProps }) {
    return <ImagesContainer {...restProps}>{children}</ImagesContainer>
}

Contact.Button = function ContactButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}   

Contact.ButtonText = function ContactButtonText({ children, ...restProps }) {
    return <ButtonText {...restProps}>{children}</ButtonText>
}