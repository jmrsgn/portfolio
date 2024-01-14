import React from "react";
import { motion } from "framer-motion";
import { GiHand } from "react-icons/gi";

import { Title, Divider } from '../globalComponents';
import { Contact } from '../components';

import techData from '../fixtures/tech.json';

export function ContactContainer() {
    return (
        <Contact id="contact">
            <Contact.ImagesContainer>
                {techData.map(( item ) => (
                    <motion.div
                        key={item.id}
                        animate={{ scale: [0, 1 ] }}
                        transition={{ duration: 0.5, delay: `0.${(item.id - 1) + 2}` }}
                    >
                        <Contact.Image key={item.id} src={item.src} />
                    </motion.div>
                        
                ))}
            </Contact.ImagesContainer>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <Contact.Box>
                    <Title>Let's get in touch.</Title>
                    <Divider marginTop="2rem"/>
                    <Divider type="1" />

                    <Contact.Button to="mailto:marasiganjohnmartin@gmail.com">
                        <Contact.ButtonText>Say "Hello"</Contact.ButtonText>
                        <GiHand />
                    </Contact.Button>
                </Contact.Box>
            </motion.div>  
        </Contact>
    )
}