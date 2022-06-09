import React from "react";
import { Container, 
         Box, 
         SubBox, 
         SocialContainer,
         Image,
         TechBubble,
         TechBubbleContainer,
         GreetingsContainer,
         TechImage } from './styles/home';

export default function Home({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Home.Box = function HomeBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

Home.SubBox = function HomeSubBox({ children, ...restProps }) {
    return <SubBox {...restProps}>{children}</SubBox>
}

Home.SocialContainer = function HomeSocialContainer({ children, ...restProps }) {
    return <SocialContainer {...restProps}>{children}</SocialContainer>
}

Home.Image = function HomeImage({ src, ...restProps }) {
    return <Image {...restProps} src={src} />
}

Home.TechBubble = function HomeTechBubble({ children, ...restProps }) {
    return <TechBubble {...restProps}>{children}</TechBubble>
}

Home.TechBubbleContainer = function HomeTechBubbleContainer({ children, ...restProps }) {
    return <TechBubbleContainer {...restProps}>{children}</TechBubbleContainer>
}

Home.TechImage = function HomeTechImage({ src, ...restProps }) {
    return <TechImage {...restProps} src={src} />
}

Home.GreetingsContainer = function HomeGreetingsContainer({ children, ...restProps }) {
    return <GreetingsContainer {...restProps}>{children}</GreetingsContainer>
}