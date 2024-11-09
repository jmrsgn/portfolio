import React from "react";
import { Container,
         ContainerGreetings, 
         ContainerSocials, 
         Box, 
         BoxInfo,
         TextGreeting,  
         TextTech, 
         TextDescription,
         Image, 
         ButtonResume}  from './styles/home';

export default function Home({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

/**
 * * Containers
 */

Home.ContainerGreetings = function HomeContainerGreetings({ children, ...restProps }) {
    return <ContainerGreetings {...restProps}>{children}</ContainerGreetings>
}

Home.ContainerSocials = function HomeContainerSocials({ children, ...restProps }) {
    return <ContainerSocials {...restProps}>{children}</ContainerSocials>
}

/**
 * * Boxes
 */

Home.Box = function HomeBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

Home.BoxInfo = function HomeBoxInfo({ children, ...restProps }) {
    return <BoxInfo {...restProps}>{children}</BoxInfo>
}

/**
 * * Texts
 */

Home.TextTech = function HomeTextTech({ children, ...restProps }) {
    return <TextTech {...restProps}>{children}</TextTech>
}

Home.TextGreeting = function HomeTextGreeting({ children, ...restProps }) {
    return <TextGreeting {...restProps}>{children}</TextGreeting>
}

Home.TextDescription = function HomeTextDescription({ children, ...restProps }) {
    return <TextDescription {...restProps}>{children}</TextDescription>
}

/**
 * * Images
 */

Home.Image = function HomeImage({ src, ...restProps }) {
    return <Image src={src} {...restProps} />
}

/**
 * * Buttons
 */

Home.ButtonResume = function HomeButtonResume({ children, ...restProps }) {
    return <ButtonResume {...restProps}>{children}</ButtonResume>
}