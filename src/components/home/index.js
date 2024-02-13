import React from "react";
import { Container, 
         Box, 
         SubBox, 
         SocialContainer,
         GreetingsContainer, 
         Greeting, 
         InfoBox,
         TechSkillsContainer,
         TechSkill,
         TechSkillImage,
         TechSkillTitle,
         TechSkillSubBox,
         TechSkillDescription,
         Tech,
         TechImage,
         TechContainer, 
         WhatIDoContainer, 
         TechText} from './styles/home';

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

Home.TechSkillsContainer = function HomeTechSkillsContainer({ children, ...restProps }) {
    return <TechSkillsContainer {...restProps}>{children}</TechSkillsContainer>
}

Home.TechSkill = function HomeTechSkill({ children, ...restProps }) {
    return <TechSkill {...restProps}>{children}</TechSkill>
}

Home.TechSkillImage = function HomeTechSkillImage({ src, ...restProps }) {
    return <TechSkillImage src={src} {...restProps} />
}

Home.TechSkillTitle = function HomeTechSkillTitle({ children, ...restProps }) {
    return <TechSkillTitle {...restProps}>{children}</TechSkillTitle>
}

Home.TechSkillDescription = function HomeTechSkillDescription({ children, ...restProps }) {
    return <TechSkillDescription {...restProps}>{children}</TechSkillDescription>
}

Home.TechSkillSubBox = function HomeTechSkillSubBox({ children, ...restProps }) {
    return <TechSkillSubBox {...restProps}>{children}</TechSkillSubBox>
}

Home.TechContainer = function HomeTechContainer({ children, ...restProps }) {
    return <TechContainer {...restProps}>{children}</TechContainer>
}

Home.Tech = function HomeTech({ children, ...restProps }) {
    return <Tech {...restProps}>{children}</Tech>
}

Home.TechImage = function HomeTechImage({ src, ...restProps }) {
    return <TechImage {...restProps} src={src} />
}

Home.WhatIDoContainer = function HomeWhatIDoContainer({ children, ...restProps }) {
    return <WhatIDoContainer {...restProps}>{children}</WhatIDoContainer>
}

Home.TechText = function HomeTechText({ children, ...restProps }) {
    return <TechText {...restProps}>{children}</TechText>
}

