import { useMemo, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import { AiFillGithub } from "react-icons/ai";
import { motion, useReducedMotion } from "framer-motion";

import { Projects } from "../components";
import ProjectsData from "../fixtures/projects.json";
import MotionWrap from "../wrapper/motion-wrap";

type ProjectFilter = "All" | "Mobile" | "Web" | "Other";

const FILTERS: ProjectFilter[] = ["All", "Mobile", "Web", "Other"];

export function ProjectsContainer() {
  const reduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return ProjectsData;
    }

    return ProjectsData.filter((project) => project.filter === activeFilter);
  }, [activeFilter]);

  const selectedProject = selectedProjectId === null
    ? null
    : filteredProjects.find((project) => project.id === selectedProjectId) ?? null;

  return (
    <Projects id="projects">
      <MotionWrap
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Projects.Box>
          {/* Header */}

          <Projects.TextEyebrow>{"// SELECTED WORK"}</Projects.TextEyebrow>

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
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Projects.FilterButton>
            ))}
          </Projects.ContainerFilters>

          {/* Projects */}

          <Projects.ProjectWorkspace $hasSelection={selectedProject !== null}>
            <Projects.ContainerProjects>
              {filteredProjects.map((item, index) => (
                <MotionWrap
                  key={item.id}
                  initial={{ y: 16, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <Projects.ItemProject
                    data-selected={selectedProjectId === item.id}
                    tabIndex={0}
                    aria-label={`${item.title} project details`}
                    onClick={(event: MouseEvent<HTMLElement>) => {
                      if ((event.target as HTMLElement).closest("a")) return;
                      setSelectedProjectId((current) => current === item.id ? null : item.id);
                    }}
                    onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
                      if (event.target !== event.currentTarget) return;
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedProjectId((current) => current === item.id ? null : item.id);
                      }
                    }}
                  >
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

                    <Projects.ProjectSelect
                      className="project-select"
                      type="button"
                      aria-expanded={selectedProjectId === item.id}
                      aria-controls="project-detail"
                    >
                      <Projects.TextProjectTitle>{item.title}</Projects.TextProjectTitle>
                      <span className="select-indicator" aria-hidden="true">
                        {selectedProjectId === item.id ? "−" : "+"}
                      </span>
                      <Projects.TextDescription>{item.description}</Projects.TextDescription>
                      <Projects.ContainerTags>
                        {item.tech.map((tech) => (
                          <Projects.ItemTag key={tech.name}>{tech.name}</Projects.ItemTag>
                        ))}
                      </Projects.ContainerTags>
                    </Projects.ProjectSelect>
                  </Projects.ItemProject>
                </MotionWrap>
              ))}
            </Projects.ContainerProjects>

            {selectedProject && <Projects.ProjectPreview id="project-detail" aria-label="Selected project details">
              <div className="preview-bar">
                <span>PROJECT DETAILS</span>
                <span>
                  {String(selectedProject.id).padStart(2, "0")} / {String(ProjectsData.length).padStart(2, "0")}
                </span>
              </div>
              <motion.div
                key={selectedProject.id}
                className="preview-body"
                initial={
                  reduceMotion ? false : { opacity: 0, rotateX: -7, y: 10 }
                }
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <span className="preview-label">
                  // {selectedProject.filter.toUpperCase()} PROJECT
                </span>
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
              </motion.div>
              <dl>
                <dt>TYPE</dt>
                <dd>{selectedProject.filter.toUpperCase()}</dd>
                {selectedProject.development && (
                  <>
                    <dt>STATUS</dt>
                    <dd>IN DEVELOPMENT</dd>
                  </>
                )}
                <dt>STACK</dt>
                <dd>{selectedProject.tech.map((tech) => tech.name).join(" · ")}</dd>
              </dl>
              {selectedProject.github && (
                <a href={selectedProject.github} target="_blank" rel="noreferrer">
                  OPEN REPOSITORY <span aria-hidden="true">↗</span>
                </a>
              )}
            </Projects.ProjectPreview>}
          </Projects.ProjectWorkspace>

          {/* GitHub */}

          <Projects.GithubCta>
            <Projects.GithubCtaContent>
              <Projects.TextEyebrow>{"// MORE ON GITHUB"}</Projects.TextEyebrow>

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
