import { FiArrowUpRight } from "react-icons/fi";

import { Contact } from "../components";

import MotionWrap from "../wrapper/motion-wrap";

import { FiMail } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export function ContactContainer() {
  return (
    <Contact id="contact">
      <MotionWrap whileInView={{ y: [100, 0], opacity: [0, 1] }}>
        <Contact.Box>
          <Contact.BoxContact>
            <Contact.TextEyebrow>{"// CONTACT"}</Contact.TextEyebrow>

            <Contact.TextTitle>
              Let&apos;s build
              <br />
              something.
            </Contact.TextTitle>

            <Contact.Divider />

            <Contact.ContainerContactContent>
              <Contact.TextIntro>
                Have an idea, project, or just want to talk tech? I&apos;m
                always open to interesting projects, engineering conversations,
                and new ideas.
              </Contact.TextIntro>

              <Contact.ItemButton href="mailto:marasiganjohnmartin@gmail.com">
                LET&apos;S TALK
                <FiArrowUpRight size={15} style={{ marginLeft: "0.6rem" }} />
              </Contact.ItemButton>
            </Contact.ContainerContactContent>

            <Contact.ContainerContacts>
              <Contact.ContainerContactItem>
                <Contact.ItemContactIcon>
                  <FiMail />
                </Contact.ItemContactIcon>

                <Contact.ContainerContactText>
                  <Contact.TextContactLabel>EMAIL</Contact.TextContactLabel>
                  <Contact.ItemContact href="mailto:marasiganjohnmartin@gmail.com">
                    marasiganjohnmartin@gmail.com
                  </Contact.ItemContact>
                </Contact.ContainerContactText>
              </Contact.ContainerContactItem>

              <Contact.ContactDivider />

              <Contact.ContainerContactItem>
                <Contact.ItemContactIcon>
                  <AiFillGithub />
                </Contact.ItemContactIcon>

                <Contact.ContainerContactText>
                  <Contact.TextContactLabel>GITHUB</Contact.TextContactLabel>
                  <Contact.ItemContact
                    href="https://github.com/jmrsgn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    jmrsgn
                  </Contact.ItemContact>
                </Contact.ContainerContactText>
              </Contact.ContainerContactItem>

              <Contact.ContactDivider />

              <Contact.ContainerContactItem>
                <Contact.ItemContactIcon>
                  <FaLinkedinIn />
                </Contact.ItemContactIcon>

                <Contact.ContainerContactText>
                  <Contact.TextContactLabel>LINKEDIN</Contact.TextContactLabel>
                  <Contact.ItemContact
                    href="https://www.linkedin.com/in/marasiganjohnmartin/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    marasiganjohnmartin
                  </Contact.ItemContact>
                </Contact.ContainerContactText>
              </Contact.ContainerContactItem>

              <Contact.ContactDivider />

              <Contact.ContainerStatus>
                <Contact.ContainerStatusIndicator />

                <Contact.ContainerStatusText>
                  <Contact.TextStatusTitle>
                    OPEN TO TALK
                  </Contact.TextStatusTitle>

                  <Contact.TextStatus>
                    Available for a conversation
                    <br />
                    about new opportunities
                    <br />
                    and collaboration.
                  </Contact.TextStatus>
                </Contact.ContainerStatusText>
              </Contact.ContainerStatus>
            </Contact.ContainerContacts>

            <Contact.TextCopyright>
              Designed and developed by John Martin
            </Contact.TextCopyright>
          </Contact.BoxContact>
        </Contact.Box>
      </MotionWrap>
    </Contact>
  );
}
