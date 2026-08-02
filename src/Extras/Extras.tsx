import "./Extras.scss"

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

const STEPS = [
  { num: "01", title: "Discovery" },
  { num: "02", title: "Architecture" },
  { num: "03", title: "Development" },
  { num: "04", title: "Deployment" },
]

const METHODS = [
  "B2B/Escrow",
  "EU/RU/Asia",
  "CET/CEST",
  "Daily updates",
  "NDA",
  "IP stays yours",
]

export function Extras() {
  return (
    <div className="extras">
      <div className="extras__row extras__row--payments">
        <span className="extras__label">Payments</span>
        <span className="extras__payments">
          PayPal · Bank transfer (EU / Montenegro / RU) · Crypto
        </span>
      </div>

      <div className="extras__row extras__row--methods">
        <span className="extras__label">Methods</span>
        <span className="extras__methods">{METHODS.join(" · ")}</span>
      </div>

      <div className="extras__row extras__row--lifecycle">
        <span className="extras__label">Lifecycle</span>
        <div className="extras__steps">
          {STEPS.map((step, i) => (
            <span className="extras__step" key={step.num}>
              <span className="extras__step-num">{step.num}</span>
              {step.title}
              {i < STEPS.length - 1 ? <span className="extras__step-arrow">→</span> : null}
            </span>
          ))}
        </div>
      </div>

      <div className="extras__row extras__row--skills">
        <span className="extras__label">Skills</span>
        <div className="extras__skills">
          {SKILL_GROUPS.map(group => (
            <span className="extras__skill-group" key={group.name}>
              {group.skills.map(skill => (
                <span className="extras__tag" key={skill}>
                  {skill}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
