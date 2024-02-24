import React from "react";
import { About } from "../components";
import { Title, Divider, DescriptionText, TechText, SubTitle } from '../globalComponents';

import { IoCaretBack } from "react-icons/io5";
import { Greeting } from "../components/home/styles/home";

export function AboutMoreContainer() {
    document.title = "About me";

    return (
        <About type="1">
            <About.Box>
                <About.SubBox>
                    <About.ProfileBox>
                        <About.Avatar src="../images/jm.jpeg" />
                        <TechText
                            fontSize='.85rem'
                        >+63 956 172 3007</TechText>
                        <TechText
                            marginTop='.25rem'
                            fontSize='.85rem'
                        >marasiganjohnmartin@gmail.com</TechText>
                    </About.ProfileBox>

                    
                </About.SubBox>
                
                <About.InfoBox>
                    <Greeting
                        marginTop='0rem'
                    >
                        Hi!
                    </Greeting>

                    <DescriptionText>
                        My name is John Martin, you can call me JM or Em for short. I'm from Mandaluyong City, Philippines. I graduated Bachelor of Science in Information Technology at Jose Rizal University, Cum Laude. 
                    </DescriptionText>

                    <DescriptionText
                        marginTop="24px"
                    >
                        I currently work at Infor, located in Bonifacio Global City, Taguig, Philippines. I am one of the Mobile Developers that provides support and maintenance for customers. I am 
                        working for almost two years now, and still happy participating to get the job done. Working with Infor as my first real job is one of the great decisions I have made. I met 
                        great people that I didn't expect to have such great attitude that always make me feel that I belong to the team, and as co-workers. 
                    </DescriptionText>

                    <DescriptionText
                        marginTop="24px"
                    >
                        Infor is a Software Development company, specializing building apps that help other businesses to their achieve business goals. One thing I like about Infor is, it has a strong bond between 
                        employees that contributes to excellent team work to provide quality results for customers. I also have great leaders that always make sure all of us don't fall behind and always on the right track.
                    </DescriptionText>

                    <DescriptionText
                        marginTop='24px'
                    >
                        To read more about Infor, go to <About.Link href='https://www.infor.com/about'>https://www.infor.com/about</About.Link>
                    </DescriptionText>


                    {/* hobbies */}
                    <SubTitle
                        marginTop="5rem"
                    >
                        Hobbies
                    </SubTitle>

                    <DescriptionText
                        marginTop="16px"
                    >
                        I go to the gym regularly, I find it as my comfort zone after a tiring day that boost my mood, obtain self-discipline, and have a better and healthier body. I also read books, especially
                        books about self-improvement. I usually spend time alone going to places that I never been before. I started doing fitness last 2018, and taking it seriously only started last December 2023. 
                    </DescriptionText>

                    <DescriptionText
                        marginTop='24px'
                    >
                        I am also into music. I love listening to music, and also have a very sharp ear which I believe, helps me know the tune by just listening to a song. I play guitar, both acoustic and electric. I am a former lead 
                        guitarist in our band. I also play bass. I started to learn guitar on 2012, but I still very confident about my current skills in playing said instruments.
                    </DescriptionText>

                </About.InfoBox>
            </About.Box>
        </About>
    )
}