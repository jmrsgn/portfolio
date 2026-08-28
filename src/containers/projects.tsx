import { useMemo, useState } from "react";
import { AiFillGithub } from "react-icons/ai";

import { Projects } from "../components";
import ProjectsData from "../fixtures/projects.json";
import MotionWrap from "../wrapper/motion-wrap";

type ProjectFilter = "All" | "Mobile" | "Web";

const FILTERS: ProjectFilter[] = ["All", "Mobile", "Web"];

export function ProjectsContainer() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return ProjectsData;
    }

    return ProjectsData.filter((project) => project.filter === activeFilter);
  }, [activeFilter]);

  return (
    <Projects id="projects">
      <MotionWrap
        whileInView={{ y: [60, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Projects.Box>
          {/* Header */}

          <Projects.TextEyebrow>// SELECTED WORK</Projects.TextEyebrow>

          <Projects.TextTitle>Stuff I&apos;ve built</Projects.TextTitle>

          <Projects.Divider />

          <Projects.TextIntro>
            A collection of projects I&apos;ve worked on.
          </Projects.TextIntro>

          {/* Filters */}

          <Projects.ContainerFilters>
            {FILTERS.map((filter) => (
              <Projects.FilterButton
                key={filter}
                type="button"
                $active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Projects.FilterButton>
            ))}
          </Projects.ContainerFilters>

          {/* Projects */}

          <Projects.ContainerProjects>
            {filteredProjects.map((item, index) => (
              <Projects.ItemProject key={item.id}>
                <Projects.ProjectHeader>
                  <Projects.ProjectNumber>
                    {String(index + 1).padStart(2, "0")}
                  </Projects.ProjectNumber>

                  <Projects.ProjectHeaderRight>
                    {item.development && (
                      <Projects.ProjectStatus>
                        IN DEVELOPMENT
                      </Projects.ProjectStatus>
                    )}

                    {item.github && (
                      <Projects.ProjectGithub
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${item.title} GitHub repository`}
                      >
                        <AiFillGithub />
                      </Projects.ProjectGithub>
                    )}
                  </Projects.ProjectHeaderRight>
                </Projects.ProjectHeader>

                <Projects.TextProjectTitle>
                  {item.title}
                </Projects.TextProjectTitle>

                <Projects.TextDescription>
                  {item.description}
                </Projects.TextDescription>

                <Projects.ContainerTags>
                  {item.tech.map((tech) => (
                    <Projects.ItemTag key={tech.name}>
                      <Projects.TextTag>{tech.name}</Projects.TextTag>
                    </Projects.ItemTag>
                  ))}
                </Projects.ContainerTags>
              </Projects.ItemProject>
            ))}
          </Projects.ContainerProjects>

          {/* GitHub */}

          <Projects.GithubCta>
            <Projects.GithubCtaContent>
              <Projects.TextEyebrow>// MORE ON GITHUB</Projects.TextEyebrow>

              <Projects.GithubCtaTitle>
                Want to see more?
              </Projects.GithubCtaTitle>

              <Projects.GithubCtaDescription>
                Explore more of my work, experiments, and projects on GitHub.
              </Projects.GithubCtaDescription>
            </Projects.GithubCtaContent>

            <Projects.GithubCtaButton
              href="https://github.com/jmrsgn"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
              <span>↗</span>
            </Projects.GithubCtaButton>
          </Projects.GithubCta>
        </Projects.Box>
      </MotionWrap>
    </Projects>
  );
}
