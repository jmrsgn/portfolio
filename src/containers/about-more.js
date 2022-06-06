import React from "react";
import { About } from "../components";
import { Title, Divider, SmallText, TextLink } from '../globalComponents';

export function AboutMoreContainer() {
    return (
        <About type="1">
            <About.Box>
                <About.SubBox>
                    <Title>Greetings</Title>
                    <Divider type="1"/>

                    <SmallText marginTop="48px">
                        Hello! I am John Martin Marasigan, you can call me JM for short, 21 years old from Mandaluyong City.
                    </SmallText>

                    <SmallText marginTop="16px">
                        I graduated Bachelor of Science in Information Technology at Jose Rizal University and, I know a basic knowledge of doing both Android Development and Web Development. 
                    </SmallText>

                    <SmallText marginTop="16px">
                        Programming in my late 4th year in College suddenly boosts my interest to code. It starts when our professor gave a project to make an Android application, and in those moments, we do not have any particular knowledge about Android Development. We are not even taught about it. So I was forced to study alone, burnt some midnight oil, and as soon as I do my progress, I am starting to get the grasp, and slowly falling in love with it.
                    </SmallText>

                    <SmallText marginTop="16px">
                        A couple of weeks passed by, I learned how to make an app using Java and that helped me to survive our capstone project which is ten times more difficult than the previous application. 
                    </SmallText>

                    <SmallText marginTop="16px">
                        I am a very passionate person, I get easily attached to things that I suddently like. I also do a couple of exercises, or even watch anime in my free time whenever I feel stressed. I am great in managing my time, I always make sure that I do my work when it is time to. 
                    </SmallText>

                    <SmallText marginTop="16px" marginBottom="16px">
                        I believe in the phrase hard work is meaningless if you don’t believe in yourself. This world taught me to always give it your all to produce positive return of investments. 
                    </SmallText>

                    <About.QuoteContainer>
                        <About.MiniDivider />

                        <About.Quote>
                            "If you don't like the hand that fate's dealt you with, fight for a new one."
                        </About.Quote>

                        <About.MiniDivider />
                    </About.QuoteContainer>

                    <TextLink type="1" marginTop="48px" to='/'>Return to Home</TextLink>
                </About.SubBox>
            </About.Box>
        </About>
    )
}