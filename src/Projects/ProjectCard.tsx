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
    javascript: "tag--js",
    express: "tag--express",
    vite: "tag--vite",
    postgresql: "tag--postgres",
    mongodb: "tag--mongo",
    redis: "tag--redis",
    "docker compose": "tag--compose",
    "github actions": "tag--gha",
    websocket: "tag--ws",
    "socket.io": "tag--socketio",
    redux: "tag--redux",
    graphql: "tag--graphql",
    tailwind: "tag--tailwind",
    scss: "tag--scss",
    "three.js": "tag--three",
    java: "tag--java",
    bun: "tag--bun",
    shadcnui: "tag--shadcn",
    "drizzle orm": "tag--drizzle",
    zod: "tag--zod",
    typeorm: "tag--typeorm",
    "cloudflare workers": "tag--cf",
    "figma plugin api": "tag--figma",
    solana: "tag--solana",
    web3: "tag--web3",
  }
  return map[tag.toLowerCase().replace(/[\s.]/g, "")] ?? ""
}

function parsePrice(raw: string): number {
  return Number(raw.replace(/[^0-9.]/g, ""))
}

export function ProjectCard(props: ProjectCardProps) {
  const p = props.project
  const tags = p.tags.split(",").map(t => t.trim()).filter(Boolean)
  const firstLink = p.links[0] ?? ""
  const showRate = p.price && p.hours
  const rate = showRate ? Math.round(parsePrice(p.price) / Number(p.hours)) : 0

  return (
    <div className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__name">{p.name}</h3>
      </div>
      {showRate ? (
        <span className="project-card__rate">{p.hours}h × ${rate}/h <span className="project-card__rate-total">= {p.price}</span></span>
      ) : p.price ? (
        <span className="project-card__price">{p.price}</span>
      ) : null}
      
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
