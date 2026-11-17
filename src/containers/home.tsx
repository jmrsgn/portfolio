import { motion } from "framer-motion";

import projects from "../fixtures/projects.json";
import {
  Actions,
  CodeEditor,
  CodeSnippet,
  Hero,
  HeroInner,
  Identity,
  IndexFoot,
  IndexHeading,
  Introduction,
  Kicker,
  PrimaryAction,
  SecondaryAction,
  SocialLinks,
  Status,
  Title,
  WorkIndex,
  WorkName,
  WorkNumber,
  WorkRow,
  WorkType,
} from "../components/home/styles";

const featured = [projects[2], projects[0], projects[3]];

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
          <Kicker>Hello, I&apos;m</Kicker>
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

        <WorkIndex aria-label="Selected projects">
          <IndexHeading>
            <span>Selected work</span>
            <span>{featured.length} projects</span>
          </IndexHeading>
          {featured.map((project, index) => (
            <WorkRow
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WorkNumber>{String(index + 1).padStart(2, "0")}</WorkNumber>
              <WorkName>{project.title}</WorkName>
              <WorkType>{project.filter}</WorkType>
              <span aria-hidden="true">↗</span>
            </WorkRow>
          ))}
          <IndexFoot>
            <span>Projects and experiments</span>
            <a href="#projects">View the collection ↗</a>
          </IndexFoot>
          <CodeEditor aria-label="me.java code sample">
            <div className="file-tab">
              <span className="file-mark" aria-hidden="true">
                ◆
              </span>
              <span>me.java</span>
              <span className="file-state" aria-hidden="true" />
            </div>
            <CodeSnippet>
              <span className="line-number">01</span>
              <code>
                <span className="type">Dev</span> em ={" "}
                <span className="keyword">new</span>{" "}
                <span className="type">Dev</span>();
              </code>
              <span className="line-number">02</span>
              <code>
                em.<span className="method">code</span>();
              </code>
              <span className="line-number">03</span>
              <code>
                em.<span className="method">goGym</span>();
              </code>
              <span className="line-number">04</span>
              <code className="comment-line">
                <span className="comment">// em.sleep();</span>
                <span className="inline-hint">uncomment this block of code</span>
              </code>
            </CodeSnippet>
          </CodeEditor>
          <Status>compiling personality</Status>
        </WorkIndex>
      </HeroInner>
    </Hero>
  );
}
