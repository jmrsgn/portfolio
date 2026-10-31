import { About } from "../components";
import MotionWrap from "../wrapper/motion-wrap";

import {
  SiDocker,
  SiFigma,
  SiFlutter,
  SiGit,
  SiAndroid,
  SiPython,
  SiTypescript,
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
  { name: "Python", icon: SiPython },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "React", icon: SiReact },
  { name: "Flutter", icon: SiFlutter },
  { name: "Android", icon: SiAndroid },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
];

const WHAT_I_DO = [
  {
    number: "01",
    title: "Web Development",
    description:
      "I develop responsive web applications with a focus on reusable components, maintainable code, and user experience.",
    tech: ["React", "TypeScript", "JavaScript"],
  },
  {
    number: "02",
    title: "Mobile Development",
    description:
      "I build native and cross-platform mobile applications, applying clean architecture and established design patterns.",
    tech: ["Android", "Flutter"],
  },
  {
    number: "03",
    title: "Backend Development",
    description:
      "I develop backend services and APIs, focusing on system integration, data processing, and maintainable software architecture.",
    tech: ["Java", "Spring Boot", "REST APIs"],
  },
  {
    number: "04",
    title: "AI-Assisted Development",
    description:
      "I incorporate AI tools into my development workflow to support coding, debugging, code analysis, and continuous learning.",
    tech: ["Codex", "AI Agents"],
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
          <About.TextEyebrow>{"// ABOUT ME"}</About.TextEyebrow>

          <About.TextTitle>Who am I</About.TextTitle>

          <About.Divider />

          {/* Introduction */}
          <About.BoxProfile>
            <About.ContainerAboutMeText>
              <About.TextIntro>
                I&apos;m John Martin I. Marasigan, a{" "}
                <About.TextHighlight>
                  Senior Software Engineer
                </About.TextHighlight>{" "}
                at{" "}
                <About.TextHighlight>
                  Stratpoint Technologies
                </About.TextHighlight>
                .
              </About.TextIntro>

              <About.TextIntro>
                I enjoy building scalable, efficient, and user-focused
                applications that solve real problems. My coding journey started
                in college when I discovered Android Development, and I&apos;ve
                been passionate about creating software ever since.
              </About.TextIntro>

              <About.TextIntro>
                When I&apos;m not coding, you&apos;ll usually find me at the
                gym, chasing strength and discipline, or spending time alone
                with my thoughts.
              </About.TextIntro>
            </About.ContainerAboutMeText>

            {/* Professional Info */}
            <About.ProfileCard>
              <About.ProfileItem>
                <About.ProfileLabel>LOCATION</About.ProfileLabel>
                <About.ProfileValue>
                  Mandaluyong, Philippines 🇵🇭
                </About.ProfileValue>
              </About.ProfileItem>

              <About.ProfileItem>
                <About.ProfileLabel>ROLE</About.ProfileLabel>
                <About.ProfileValue>
                  Senior Software Engineer
                  <br />@ Stratpoint Technologies
                </About.ProfileValue>
              </About.ProfileItem>

              <About.ProfileItem>
                <About.ProfileLabel>SERVICE</About.ProfileLabel>
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
            <About.SectionEyebrow>{"// WHAT I DO"}</About.SectionEyebrow>
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
              <About.SectionEyebrow>{"// TECH STACK"}</About.SectionEyebrow>
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
