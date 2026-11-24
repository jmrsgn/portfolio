import { FiArrowUpRight } from "react-icons/fi";

import { Contact } from "../components";

import MotionWrap from "../wrapper/motion-wrap";

import { FiMail } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export function ContactContainer() {
  return (
    <Contact id="contact">
      <MotionWrap
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Contact.Box>
          <Contact.BoxContact>
            <Contact.TextEyebrow>{"// CONTACT"}</Contact.TextEyebrow>

            <Contact.TextTitle>
              Reach out.
            </Contact.TextTitle>

            <Contact.Divider />

            <Contact.ContainerContactContent>
              <Contact.TextIntro>
                Have an idea, project, or just want to talk tech? I&apos;m
                always open to interesting projects, engineering conversations,
                and new ideas.
              </Contact.TextIntro>

              <Contact.ContactActionGroup>
                <Contact.ItemButton href="mailto:marasiganjohnmartin@gmail.com">
                  Let&apos;s talk
                  <FiArrowUpRight size={15} style={{ marginLeft: "0.6rem" }} />
                </Contact.ItemButton>
              </Contact.ContactActionGroup>
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
