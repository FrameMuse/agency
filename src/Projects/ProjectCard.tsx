import type { Project } from "../types"
import "./ProjectCard.scss"

interface ProjectCardProps {
  project: Project
}

function tagClass(tag: string): string {
  const map: Record<string, string> = {
    typescript: "tag--ts",
    react: "tag--react",
    rust: "tag--rust",
    python: "tag--python",
    docker: "tag--docker",
    aws: "tag--aws",
    nestjs: "tag--nestjs",
    django: "tag--django",
  }
  return map[tag.toLowerCase()] ?? ""
}

export function ProjectCard(props: ProjectCardProps) {
  const p = props.project
  const tags = p.tags.split(",").map(t => t.trim()).filter(Boolean)
  const firstLink = p.links[0] ?? ""

  return (
    <div className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__name">{p.name}</h3>
        {p.status !== "active" ? (
          <span className={`project-card__status project-card__status--${p.status}`}>{p.status}</span>
        ) : null}
      </div>
      <p className="project-card__description">{p.description}</p>
      <div className="project-card__tags">
        {tags.map(tag => (
          <span className={`project-card__tag ${tagClass(tag)}`}>{tag}</span>
        ))}
      </div>
      {p.images.length > 0 ? (
        <div className="project-card__images">
          {p.images.map(src => (
            <img src={src.replace(/^\//, "")} alt={p.name} className="project-card__image" />
          ))}
        </div>
      ) : null}
      {firstLink ? (
        <a href={`https://${firstLink}`} className="project-card__link" target="_blank">
          View on GitHub →
        </a>
      ) : null}
    </div>
  )
}
