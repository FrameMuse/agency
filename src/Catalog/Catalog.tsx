import "./Catalog.scss"
import { Extras } from "../Extras/Extras"

interface Offer {
  name: string
  description: string
  price: string
  delivery: string
  proof?: string
}

interface Group {
  title: string
  offers: Offer[]
}

const GROUPS: Group[] = [
  {
    title: "Consulting",
    offers: [
      {
        name: "Honest Advice",
        description: "Your project, looked at honestly: what's broken and what to do first",
        price: "free",
        delivery: "15 min",
      },
      {
        name: "Code Audit & Architecture Review",
        description: "Security holes, duplication and shaky architecture found, with a written report",
        price: "~$500",
        delivery: "3-5 days"
      },
      {
        name: "Migration & Modernization",
        description: "Legacy code is unspaghettified: TypeScript, modern frameworks, CI/CD",
        price: "~$500-2000",
        delivery: "1-3 weeks"
      },
    ],
  },
  {
    title: "Infrastructure",
    offers: [
      {
        name: "Server Rescue & Hardening",
        description: "Slow, dying or already hacked server: brought back, locked down, post-mortem report",
        price: "~$300-900",
        delivery: "1-3 days",
        proof: "https://github.com/FrameMuse/FrameMuse/blob/main/work-stories/server-attack.md",
      },
      {
        name: "Deployment & CI/CD",
        description: "Docker, nginx, SSL and pipelines that ship on every push",
        price: "~$250-500",
        delivery: "2-4 days"
      },
      {
        name: "Cloud Development",
        description: "Serverless APIs on AWS Lambda, Cloudflare Workers or Supabase",
        price: "~$400-1000",
        delivery: "1-2 weeks"
      },
      {
        name: "PostgreSQL Performance",
        description: "Slow queries fixed with EXPLAIN and indexes, not guesswork",
        price: "~$200-500",
        delivery: "1-3 days",
        proof: "https://github.com/FrameMuse/FrameMuse/blob/main/work-stories/database.md",
      },
      {
        name: "Maintenance",
        description: "Monthly fixes, updates, monitoring: the project just keeps running",
        price: "~$150-400/mo",
        delivery: "ongoing"
      },
    ],
  },
  {
    title: "Development",
    offers: [
      {
        name: "Backend Development",
        description: "APIs in NestJS, Express, Django, FastAPI or Rust",
        price: "from ~$800",
        delivery: "1-3 weeks",
        proof: "https://github.com/FrameMuse/rest-api-facade",
      },
      {
        name: "Frontend Development",
        description: "React + TypeScript apps, component libraries, state that doesn't bite",
        price: "from ~$600",
        delivery: "1-2 weeks",
        proof: "https://github.com/FrameMuse/react-figma",
      },
      {
        name: "CMS-based Website",
        description: "Content-managed site on Next.js + Payload CMS; your team edits it without me",
        price: "~$800-2000",
        delivery: "1-3 weeks"
      },
      {
        name: "E-commerce & Online Shops",
        description: "Catalogs, payments, orders, even Telegram storefronts",
        price: "from ~$800",
        delivery: "1-3 weeks"
      },
      {
        name: "Chat Bots",
        description: "Telegram / Discord bots for commerce, notifications, integrations",
        price: "~$200-600",
        delivery: "3-7 days",
      },
      {
        name: "Simple 3D Scenes",
        description: "Three.js viewers, configurators and visualizations right in the browser",
        price: "from ~$500",
        delivery: "1-3 weeks"
      },
    ],
  },
]

export function Catalog() {
  return (
    <section id="pricing" className="catalog">
      <div className="catalog__inner">
        <div className="catalog__header">
          <h2 className="catalog__title">Catalog (Pricing)</h2>
          <p className="catalog__subtitle">
            Fixed-price services with clear deliverables and delivery time. No hidden fees.
          </p>
          <p className="catalog__proven">Proven playbook, these paths were walked many times</p>
        </div>

        <div className="catalog__columns">
          {GROUPS.map(group => (
            <div className="catalog__column" key={group.title}>
              <h3 className="catalog__column-title">{group.title}</h3>
              <ul className="catalog__list">
                {group.offers.map(offer => (
                  <li className="catalog__item" key={offer.name}>
                    <div className="catalog__item-top">
                      <span className="catalog__item-name">{offer.name}</span>
                      <span className="catalog__item-price">{offer.price}</span>
                    </div>
                    <p className="catalog__item-description">
                      {offer.description}{" "}
                      <span className="catalog__item-inline-delivery">in {offer.delivery}</span>
                    </p>
                    <div className="catalog__item-bottom">
                      {offer.proof ? (
                        <a
                          className="catalog__item-proof"
                          href={offer.proof}
                          target={offer.proof.startsWith("#") ? undefined : "_blank"}
                          rel="noopener noreferrer"
                        >
                          proof →
                        </a>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Extras />
      </div>
    </section>
  )
}
