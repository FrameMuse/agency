import "./Methods.scss"

const METHODS = [
  {
    title: "B2B Contract",
    description: "Preferred engagement model for EU clients. Invoice-based, clear scope, predictable terms.",
    icon: "file-signature",
  },
  {
    title: "EU Independent Contractor",
    description: "Registered in Montenegro. VAT-compliant. Works with EU and US clients across time zones.",
    icon: "passport",
  },
  {
    title: "Stack-Agnostic",
    description: "I use whatever solves the problem best — not locked into any single technology stack.",
    icon: "layer-group",
  },
  {
    title: "Clear Communication",
    description: "Daily updates via Telegram or email. Weekly syncs. Transparent progress reporting.",
    icon: "comments",
  },
  {
    title: "Time Zone Flexible",
    description: "Based in CET/CEST. Works with US East Coast overlap and async-first collaboration.",
    icon: "globe",
  },
  {
    title: "Security First",
    description: "Signed NDAs. Secure code practices. No credentials in repos. SSH key-only auth.",
    icon: "shield-alt",
  },
]

export function Methods() {
  return (
    <section id="methods" className="methods">
      <div className="methods__inner">
        <div className="methods__header">
          <h2 className="methods__title">Working Methods</h2>
          <p className="methods__subtitle">How I engage with clients</p>
        </div>

        <div className="methods__grid">
          {METHODS.map(m => (
            <div className="methods__card">
              <div className="methods__card-icon">
                <i class={`fas fa-${m.icon}`}></i>
              </div>
              <h3 className="methods__card-title">{m.title}</h3>
              <p className="methods__card-desc">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
