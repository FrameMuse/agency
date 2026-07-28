import "./Lifecycle.scss"

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    description: "Requirements gathering, feasibility study, timeline estimation, and stack selection.",
  },
  {
    num: "02",
    title: "Architecture",
    description: "System design, data modeling, API contracts, infrastructure planning.",
  },
  {
    num: "03",
    title: "Development",
    description: "Iterative delivery with code reviews, testing, and regular check-ins.",
  },
  {
    num: "04",
    title: "Deployment",
    description: "CI/CD pipelines, infrastructure provisioning, SSL/TLS, DNS configuration.",
  },
  {
    num: "05",
    title: "Operations",
    description: "Monitoring, incident response, performance optimization, ongoing maintenance.",
  },
]

export function Lifecycle() {
  return (
    <section id="lifecycle" className="lifecycle">
      <div className="lifecycle__inner">
        <div className="lifecycle__header">
          <h2 className="lifecycle__title">Project Lifecycle</h2>
          <p className="lifecycle__subtitle">How I take a project from idea to production</p>
        </div>

        <div className="lifecycle__timeline">
          {STEPS.map((step, i) => (
            <div className="lifecycle__step">
              <div className="lifecycle__step-line">
                <div className="lifecycle__step-num">{step.num}</div>
                {i < STEPS.length - 1 ? <div className="lifecycle__step-connector" /> : null}
              </div>
              <div className="lifecycle__step-content">
                <h3 className="lifecycle__step-title">{step.title}</h3>
                <p className="lifecycle__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
