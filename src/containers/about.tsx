import { About } from "../components";
import MotionWrap from "../wrapper/motion-wrap";

import {
  SiDocker,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithub,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiSpringboot,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const TECH_STACK = [
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Flutter", icon: SiFlutter },
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },
];

const WHAT_I_DO = [
  {
    number: "01",
    title: "Web Development",
    description:
      "I build clean and responsive web applications with a focus on reusable components, performance, and modern development practices.",
    tech: ["React JS", "styled-components"],
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "I design simple and modern user interfaces with a focus on clarity, usability, and consistency across screens.",
    tech: ["Figma"],
  },
  {
    number: "03",
    title: "Mobile Development",
    description:
      "I build cross-platform mobile applications using Flutter, applying clean architecture and best practices to deliver reliable experiences.",
    tech: ["Flutter", "Java"],
  },
  {
    number: "04",
    title: "Backend Development",
    description:
      "I build robust backend systems using Java and Spring Boot, focusing on clean architecture, RESTful APIs, and scalable solutions.",
    tech: ["Java", "Spring Boot"],
  },
];

export function AboutContainer() {
  return (
    <About id="about">
      <MotionWrap
        whileInView={{ y: [60, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <About.Box>
          {/* Header */}
          <About.TextEyebrow>// ABOUT ME</About.TextEyebrow>

          <About.TextTitle>Who am I</About.TextTitle>

          <About.Divider />

          {/* Introduction */}
          <About.BoxProfile>
            <About.ContainerAboutMeText>
              <About.TextDescription>
                I&apos;m John Martin I. Marasigan, a{" "}
                <About.TextHighlight>
                  Senior Software Engineer
                </About.TextHighlight>{" "}
                at{" "}
                <About.TextHighlight>
                  Stratpoint Technologies
                </About.TextHighlight>
                .
              </About.TextDescription>

              <About.TextDescription>
                I enjoy building scalable, efficient, and user-focused
                applications that solve real problems. My coding journey started
                in college when I discovered Android Development, and I&apos;ve
                been passionate about creating software ever since.
              </About.TextDescription>

              <About.TextDescription>
                When I&apos;m not coding, you&apos;ll usually find me at the
                gym, chasing strength and discipline, or spending time alone
                with my thoughts.
              </About.TextDescription>
            </About.ContainerAboutMeText>

            {/* Professional Info */}
            <About.ProfileCard>
              <About.ProfileItem>
                <About.ProfileLabel>LOCATION</About.ProfileLabel>
                <About.ProfileValue>Philippines 🇵🇭</About.ProfileValue>
              </About.ProfileItem>

              <About.ProfileItem>
                <About.ProfileLabel>ROLE</About.ProfileLabel>
                <About.ProfileValue>
                  Senior Software Engineer
                  <br />@ Stratpoint Technologies
                </About.ProfileValue>
              </About.ProfileItem>

              <About.ProfileItem>
                <About.ProfileLabel>FOCUS</About.ProfileLabel>
                <About.ProfileValue>Full-stack Development</About.ProfileValue>
              </About.ProfileItem>

              <About.ProfileItem>
                <About.ProfileLabel>EXPERIENCE</About.ProfileLabel>
                <About.ProfileValue>4+ Years</About.ProfileValue>
              </About.ProfileItem>
            </About.ProfileCard>
          </About.BoxProfile>

          {/* What I Do */}
          <About.SectionHeader>
            <About.SectionEyebrow>// WHAT I DO</About.SectionEyebrow>
          </About.SectionHeader>

          <About.ContainerTech>
            {WHAT_I_DO.map((item) => (
              <About.ContainerTechInfo key={item.number}>
                <About.TechCardHeader>
                  <About.TechNumber>{item.number}</About.TechNumber>
                </About.TechCardHeader>

                <About.TextTitleOther>{item.title}</About.TextTitleOther>

                <About.TextDescription>
                  {item.description}
                </About.TextDescription>

                <About.ContainerTechUsed>
                  {item.tech.map((tech) => (
                    <About.TechTag key={tech}>{tech}</About.TechTag>
                  ))}
                </About.ContainerTechUsed>
              </About.ContainerTechInfo>
            ))}
          </About.ContainerTech>

          {/* Tech Stack */}
          <About.TechStack>
            <About.TechStackHeader>
              <About.SectionEyebrow>// TECH STACK</About.SectionEyebrow>
            </About.TechStackHeader>

            <About.TechStackGrid>
              {TECH_STACK.map(({ name, icon: Icon }) => (
                <About.TechStackItem key={name}>
                  <Icon />
                  <span>{name}</span>
                </About.TechStackItem>
              ))}
            </About.TechStackGrid>
          </About.TechStack>
        </About.Box>
      </MotionWrap>
    </About>
  );
}
