import React from "react";
import { Container, 
         Box, 
         SubBox, 
         SocialContainer,
         GreetingsContainer, 
         Greeting, 
         InfoBox,
         Image }  from './styles/home';

export default function Home({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Home.Box = function HomeBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

Home.InfoBox = function HomeInfoBox({ children, ...restProps }) {
    return <InfoBox {...restProps}>{children}</InfoBox>
}

Home.SocialContainer = function HomeSocialContainer({ children, ...restProps }) {
    return <SocialContainer {...restProps}>{children}</SocialContainer>
}

Home.GreetingsContainer = function HomeGreetingsContainer({ children, ...restProps }) {
    return <GreetingsContainer {...restProps}>{children}</GreetingsContainer>
}

Home.Greeting = function HomeGreeting({ children, ...restProps }) {
    return <Greeting {...restProps}>{children}</Greeting>
}

Home.SubBox = function HomeSubBox({ children, ...restProps }) {
    return <SubBox {...restProps}>{children}</SubBox>
}

Home.Image = function HomeImage({ src, ...restProps }) {
    return <Image src={src} {...restProps} />
}
