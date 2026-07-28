import type { Project } from "../types"
import { ProjectCard } from "./ProjectCard"
import "./ProjectCards.scss"

interface ProjectCardsProps {
  projects: Project[]
}

export function ProjectCards(props: ProjectCardsProps) {
  return (
    <div className="project-cards">
      {props.projects.map(project => (
        <ProjectCard project={project} />
      ))}
    </div>
  )
}
