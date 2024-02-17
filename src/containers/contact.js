import React from "react";
import { motion } from "framer-motion";

import { Title, 
         Divider, 
         DescriptionText, 
         TechText } from '../globalComponents';
import { Contact } from '../components';

export function ContactContainer() {
    return (
        <Contact id="contact">
            <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1]}}
            >
                <Contact.Box>
                    <Contact.SubBox>
                        <Contact.InfoContainer>
                            <Title>Let's get in touch.</Title>
                            <Divider marginTop="2rem"/>
                            <Divider type="1" />

                            <DescriptionText
                                marginTop="2rem"
                            >
                                Feel free to message me if you have a question or just wanted to say hello. I am always free for suggestions on what to improve.
                            </DescriptionText>

                            <Contact.Button href="mailto:marasiganjohnmartin@gmail.com">
                                Say "Hello"
                            </Contact.Button>
                        </Contact.InfoContainer>
                        
                        <Contact.CopyrightText>Designed and developed by John Martin</Contact.CopyrightText>
                    </Contact.SubBox>
                </Contact.Box>
            </motion.div>  
        </Contact>
    )
}