import "./Skills.scss"

const SKILL_GROUPS = [
  {
    name: "Languages",
    skills: ["TypeScript", "Rust", "Python", "Go", "Java", "C#"],
  },
  {
    name: "Frontend",
    skills: ["React", "Three.js", "Canvas 2D", "Denshya / Tama"],
  },
  {
    name: "Backend",
    skills: ["NestJS", "Express", "FastAPI", "Django", "Flask", "Axum"],
  },
  {
    name: "Infrastructure",
    skills: ["Docker", "nginx", "AWS", "GCP", "Cloudflare Workers", "Fly.io", "DigitalOcean"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL (50M+ rows)", "Redis", "RabbitMQ", "MongoDB"],
  },
  {
    name: "CI/CD & Tools",
    skills: ["GitHub Actions", "GitLab CI", "Vite", "Bun", "PM2"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <div className="skills__header">
          <h2 className="skills__title">Skills</h2>
          <p className="skills__subtitle">Technologies I work with daily</p>
        </div>

        <div className="skills__grid">
          {SKILL_GROUPS.map(group => (
            <div className="skills__group">
              <h3 className="skills__group-name">{group.name}</h3>
              <div className="skills__tags">
                {group.skills.map(skill => (
                  <span className="skills__tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
