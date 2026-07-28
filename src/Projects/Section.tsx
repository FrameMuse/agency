import type { Project } from "../types"
import { ProjectCards } from "./ProjectCards"
import "./Section.scss"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection(props: ProjectsSectionProps) {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-section__inner">
        <div className="projects-section__header">
          <h2 className="projects-section__title">Projects</h2>
          <p className="projects-section__subtitle">A selection of work across domains</p>
        </div>

        <ProjectCards projects={props.projects} />
      </div>
    </section>
  )
}
