import { Divider, 
         SpaceHeightLarge, 
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
                    <Contact.BoxContact>
                        <Contact.ContainerInfo>
                            <Contact.TextTitle>Let's get in touch.</Contact.TextTitle>
                            <SpaceHeightMedium />
                            <Divider />

                            <SpaceHeightLarge />

                            <Contact.TextDescription>
                                Feel free to message me if you have a question or just wanted to say hello. 
                                I am always free for suggestions on what to improve.
                            </Contact.TextDescription>

                            <Contact.ItemButton href="mailto:marasiganjohnmartin@gmail.com">
                                Say "Hello"
                            </Contact.ItemButton>
                        </Contact.ContainerInfo>
                        
                        <Contact.TextCopyright>Designed and developed by John Martin</Contact.TextCopyright>
                    </Contact.BoxContact>
                </Contact.Box>
            </MotionWrap>  
        </Contact>
    )
}