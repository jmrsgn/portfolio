import { motion } from "framer-motion";
import { FiFileText, FiGitBranch, FiSearch } from "react-icons/fi";

import {
  Actions,
  CodeEditor,
  CodeSnippet,
  Hero,
  HeroInner,
  Identity,
  IdeActivityBar,
  IdeExplorer,
  IdeMain,
  IdeOutput,
  IdeStatusBar,
  IdeTabBar,
  IdeTitleBar,
  IdeWindow,
  IdeWorkspace,
  Introduction,
  Kicker,
  PrimaryAction,
  SecondaryAction,
  SocialLinks,
  Status,
  Title,
} from "../components/home/styles";

export function HomeContainer() {
  return (
    <Hero id="home">
      <HeroInner>
        <Identity
          as={motion.div}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Kicker>HELLO, I&apos;M</Kicker>
          <Title>
            John Martin
            <br />
            <span>Marasigan.</span>
          </Title>
          <Introduction>
            I build software across web, mobile, and backend systems. Currently
            at Stratpoint Technologies.
          </Introduction>
          <Actions>
            <PrimaryAction
              href="/resume/RESUME_JohnMartinMarasigan.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View resume <span aria-hidden="true">↗</span>
            </PrimaryAction>
            <SecondaryAction href="#about">
              About me <span aria-hidden="true">↓</span>
            </SecondaryAction>
          </Actions>
          <SocialLinks>
            <a href="https://github.com/jmrsgn" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/marasiganjohnmartin/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.instagram.com/marasigan.johnmartin/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
          </SocialLinks>
        </Identity>

        <IdeWindow aria-label="me.java IDE preview">
          <IdeTitleBar>
            <span className="window-controls" aria-hidden="true">
              <span /><span /><span />
            </span>
            <span>me.java — portfolio</span>
          </IdeTitleBar>

          <IdeWorkspace>
            <IdeActivityBar aria-hidden="true">
              <FiFileText className="active" />
              <FiSearch />
              <FiGitBranch />
            </IdeActivityBar>

            <IdeExplorer aria-hidden="true">
              <span className="explorer-heading">EXPLORER</span>
              <span className="folder">⌄ src</span>
              <span className="file">◆ me.java</span>
            </IdeExplorer>

            <IdeMain>
              <IdeTabBar>
                <span className="file-mark" aria-hidden="true">◆</span>
                <span>me.java</span>
                <span className="file-state" aria-hidden="true" />
              </IdeTabBar>

              <CodeEditor>
                <CodeSnippet>
                  <span className="line-number">01</span>
                  <code>
                    <span className="type">Dev</span>{" "}
                    <span className="variable">em</span> ={" "}
                    <span className="keyword">new</span>{" "}
                    <span className="type">Dev</span>();
                  </code>
                  <span className="line-number">02</span>
                  <code>
                    <span className="variable">em</span>.<span className="method">code</span>();
                  </code>
                  <span className="line-number">03</span>
                  <code>
                    <span className="variable">em</span>.<span className="method">goGym</span>();
                  </code>
                  <span className="line-number">04</span>
                  <code className="comment-line">
                    <span className="comment">// em.sleep();</span>
                    <span className="inline-hint">uncomment this block</span>
                  </code>
                </CodeSnippet>
              </CodeEditor>

              <IdeOutput>
                <span className="output-heading">TERMINAL</span>
                <code className="terminal-directory">
                  <span className="terminal-parent-path">~/Documents/dev/Projects/</span>
                  <span className="terminal-current-directory">portfolio</span>{" "}
                  <span className="terminal-branch">main</span>
                </code>
                <code className="terminal-command">
                  <span>&gt;</span> javac me.java
                </code>
                <Status>compiling personality</Status>
              </IdeOutput>
            </IdeMain>
          </IdeWorkspace>

          <IdeStatusBar>
            <span>○ Java</span>
            <span>Ln 4, Col 16&nbsp;&nbsp; UTF-8</span>
          </IdeStatusBar>
        </IdeWindow>
      </HeroInner>
    </Hero>
  );
}
