import { Home } from "../components";
import MotionWrap from "../wrapper/motion-wrap";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

export function HomeContainer() {
  return (
    <Home id="home">
      <Home.Box>
        <Home.BoxInfo>
          <MotionWrap
            whileInView={{ x: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6 }}
          >
            <Home.ContainerGreetings>
              <Home.TextEyebrow>// SOFTWARE ENGINEER</Home.TextEyebrow>

              <Home.TextGreeting>
                JOHN MARTIN
                <br />
                MARASIGAN
              </Home.TextGreeting>

              <Home.ContainerActions>
                <Home.ButtonResume href="/resume/Resume_JohnMartinMarasigan.pdf" target="_blank" rel="noopener noreferrer">
                  <Home.ButtonArrow>&gt;_</Home.ButtonArrow>
                  VIEW WORK
                </Home.ButtonResume>

                <Home.ButtonAbout href="#about">ABOUT ME</Home.ButtonAbout>
              </Home.ContainerActions>

              <Home.ContainerSocials>
                <MotionWrap
                  whileInView={{ scale: [0, 1] }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Home.SocialLink
                    href="https://github.com/jmrsgn"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <AiFillGithub />
                  </Home.SocialLink>
                </MotionWrap>

                <MotionWrap
                  whileInView={{ scale: [0, 1] }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Home.SocialLink
                    href="https://www.linkedin.com/in/marasiganjohnmartin/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <AiFillLinkedin />
                  </Home.SocialLink>
                </MotionWrap>

                <MotionWrap
                  whileInView={{ scale: [0, 1] }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Home.SocialLink
                    href="https://www.instagram.com/marasigan.johnmartin/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <BsInstagram />
                  </Home.SocialLink>
                </MotionWrap>
              </Home.ContainerSocials>
            </Home.ContainerGreetings>
          </MotionWrap>
        </Home.BoxInfo>

        <MotionWrap
          whileInView={{ x: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Home.CodePanel>
            <Home.CodeHeader>
              <Home.CodeWindowControls>
                <Home.WindowDot />
                <Home.WindowDot />
                <Home.WindowDot />
              </Home.CodeWindowControls>

              <Home.CodeFileName>profile.java</Home.CodeFileName>

              <Home.CodeLanguage>Java</Home.CodeLanguage>
            </Home.CodeHeader>

            <Home.CodeContent>
              <Home.CodeLine>
                <Home.LineNumber>1</Home.LineNumber>
                <Home.CodeKeyword>Developer</Home.CodeKeyword>{" "}
                <Home.CodeVariable>em = </Home.CodeVariable>
                <Home.CodeKeyword>new Developer();</Home.CodeKeyword>
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>2</Home.LineNumber>
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>3</Home.LineNumber>
                <Home.CodeVariable>em</Home.CodeVariable>
                <Home.CodeOperator>.withName(</Home.CodeOperator>
                <Home.CodeString>
                  &quot;John Martin I. Marasigan&quot;
                </Home.CodeString>
                <Home.CodeOperator>)</Home.CodeOperator>
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>4</Home.LineNumber>
                <Home.CodeIndent />
                <Home.CodeOperator>.withRole(</Home.CodeOperator>
                <Home.CodeString>&quot;Software Engineer&quot;</Home.CodeString>
                <Home.CodeOperator>)</Home.CodeOperator>
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>5</Home.LineNumber>
                <Home.CodeIndent />
                <Home.CodeOperator>.withSkills(List.of(</Home.CodeOperator>
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>6</Home.LineNumber>
                <Home.CodeIndent />
                <Home.CodeIndent />
                <Home.CodeString>&quot;Spring Boot&quot;</Home.CodeString>,
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>7</Home.LineNumber>
                <Home.CodeIndent />
                <Home.CodeIndent />
                <Home.CodeString>&quot;Java&quot;</Home.CodeString>,
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>8</Home.LineNumber>
                <Home.CodeIndent />
                <Home.CodeIndent />
                <Home.CodeString>&quot;Flutter&quot;</Home.CodeString>,
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>9</Home.LineNumber>
                <Home.CodeIndent />
                <Home.CodeIndent />
                <Home.CodeString>&quot;Docker&quot;</Home.CodeString>,
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>10</Home.LineNumber>
                <Home.CodeIndent />
                <Home.CodeIndent />
                <Home.CodeString>&quot;Kubernetes&quot;</Home.CodeString>,
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>11</Home.LineNumber>
                <Home.CodeIndent />
                <Home.CodeIndent />
                <Home.CodeComment>// more...</Home.CodeComment>
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>12</Home.LineNumber>
                <Home.CodeIndent />
                <Home.CodeOperator>))</Home.CodeOperator>;
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>13</Home.LineNumber>
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>14</Home.LineNumber>
                <Home.CodeKeyword>while</Home.CodeKeyword>
                <Home.CodeOperator> (true) {"{"}</Home.CodeOperator>
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>15</Home.LineNumber>
                <Home.CodeIndent />
                <Home.CodeVariable>em</Home.CodeVariable>
                <Home.CodeOperator>.code();</Home.CodeOperator>
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>16</Home.LineNumber>
                <Home.CodeIndent />
                <Home.CodeVariable>em</Home.CodeVariable>
                <Home.CodeOperator>.goToGym();</Home.CodeOperator>
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>17</Home.LineNumber>
                <Home.CodeIndent />
                <Home.CodeComment>// em.sleep();</Home.CodeComment>
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>18</Home.LineNumber>
                <Home.CodeIndent />
                <Home.CodeVariable>em</Home.CodeVariable>
                <Home.CodeOperator>.repeat();</Home.CodeOperator>
              </Home.CodeLine>

              <Home.CodeLine>
                <Home.LineNumber>19</Home.LineNumber>
                <Home.CodeOperator>{"}"}</Home.CodeOperator>
              </Home.CodeLine>
            </Home.CodeContent>

            <Home.CodeFooter>
              <Home.CodePrompt>&gt;</Home.CodePrompt>
              compiling personality_
            </Home.CodeFooter>
          </Home.CodePanel>
        </MotionWrap>
      </Home.Box>

      <Home.Tagline>
        <Home.TaglineAccent />
        Status: <Home.TaglineStatus>Building</Home.TaglineStatus>
      </Home.Tagline>
    </Home>
  );
}
