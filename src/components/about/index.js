import React from "react";
import { Container, 
         Box,
         SubBox,
         SkillsContainer,
         DescriptionContainer,
         Skill,
         Image,
         SkillTitle,
         Avatar,
         AvatarDescriptionContainer,
         Quote,
         QuoteContainer,
         MiniDivider } from './styles/about';

export default function About({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

About.Box = function AboutBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
}

About.SubBox = function AboutSubBox({ children, ...restProps }) {
    return <SubBox {...restProps}>{children}</SubBox>
}

About.SkillsContainer = function AboutSkillsContainer({ children, ...restProps }) {
    return <SkillsContainer {...restProps}>{children}</SkillsContainer>
}

About.Avatar = function AboutAvatar({ src, ...restProps }) {
    return <Avatar {...restProps} src={src} />
}

About.AvatarDescriptionContainer = function AboutAvatarDescriptionContainer({ children, ...restProps }) {
    return <AvatarDescriptionContainer {...restProps}>{children}</AvatarDescriptionContainer>
} 

About.DescriptionContainer = function AboutDescriptionContainer({ children, ...restProps }) {
    return <DescriptionContainer {...restProps}>{children}</DescriptionContainer>
}

About.Skill = function AboutSkill({ children, ...restProps }) {
    return <Skill {...restProps}>{children}</Skill>
}

About.Image = function AboutImage({ src, ...restProps }) {
    return <Image {...restProps} src={src} />
}

About.SkillTitle = function AboutSkillTitle({ children, ...restProps }) {
    return <SkillTitle {...restProps}>{children}</SkillTitle>
}

About.Quote = function AboutQuote({ children, ...restProps }) {
    return <Quote {...restProps}>{children}</Quote>
}

About.QuoteContainer = function AboutQuoteContainer({ children, ...restProps }) {
    return <QuoteContainer {...restProps}>{children}</QuoteContainer>
}

About.MiniDivider = function AboutMiniDivider({ ...restProps }) {
    return <MiniDivider {...restProps} />
}