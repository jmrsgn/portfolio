import React from "react";
import { motion } from "framer-motion";
import { GiHand } from "react-icons/gi";

import { Title, Divider, DescriptionText, Button, TechText } from '../globalComponents';
import { Contact } from '../components';

import techData from '../fixtures/tech.json';

export function ContactContainer() {
    return (
        <Contact id="contact">
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
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

                            <Button to="mailto:marasiganjohnmartin@gmail.com">
                                Say "Hello"
                            </Button>
                        </Contact.InfoContainer>
                        
                        <TechText
                            type='regular'
                        >Designed and developed by John Martin</TechText>
                    </Contact.SubBox>
                </Contact.Box>
            </motion.div>  
        </Contact>
    )
}