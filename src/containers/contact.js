import React from "react";

import { Title, 
         Divider, 
         DescriptionText, 
         SpaceHeightMedium } from '../globalComponents';

import { Contact } from '../components';
import MotionWrap from "../wrapper/motion-wrap";

export function ContactContainer() {
    return (
        <Contact id="contact">
            <MotionWrap
                whileInView={{ y: [100, 0], opacity: [0, 1]}}
            >
                <Contact.Box>
                    <Contact.SubBox>
                        <Contact.InfoContainer>
                            <Title>Let's get in touch.</Title>
                            <SpaceHeightMedium />
                            <Divider />
                            <Divider type="1" />

                            <SpaceHeightMedium />

                            <DescriptionText>
                                Feel free to message me if you have a question or just wanted to say hello. 
                                I am always free for suggestions on what to improve.
                            </DescriptionText>

                            <Contact.Button href="mailto:marasiganjohnmartin@gmail.com">
                                Say "Hello"
                            </Contact.Button>
                        </Contact.InfoContainer>
                        
                        <Contact.CopyrightText>Designed and developed by John Martin</Contact.CopyrightText>
                    </Contact.SubBox>
                </Contact.Box>
            </MotionWrap>  
        </Contact>
    )
}