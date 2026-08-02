import "./Hero.scss"
import { Icon } from "../Icon/Icon"

const LINKS = [
  { href: "https://www.upwork.com/freelancers/~011fb5acc9165ef113", aria: "Upwork", icon: "upwork" },
  { href: "https://t.me/FrameMuse", aria: "Telegram", icon: "telegram" },
  { href: "https://github.com/framemuse", aria: "GitHub", icon: "github" },
  { href: "http://linkedin.com/in/framemuse", aria: "LinkedIn", icon: "linkedin" },
  { href: "mailto:valerii.zinchenko.work@gmail.com", aria: "Email", icon: "envelope" },
]

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__links">
          {LINKS.map(link => (
            <a key={link.aria} href={link.href} rel="noopener noreferrer" target="_blank" aria-label={link.aria}>
              <Icon name={link.icon} className="icon" />
            </a>
          ))}
        </div>

        <h1 className="hero__title">
          I plan, design and build every layer.
          <br />
          UI components, API, CI/CD, Linux servers.
        </h1>

        <div className="hero__location">Montenegro, Podgorica · EU Contractor</div>

        <p className="hero__range">
          from <span className="hero__range-highlight">free</span> to{" "}
          <span className="hero__range-highlight">$2000</span>
        </p>

        <div className="hero__ctas">
          <a href="https://t.me/FrameMuse" rel="noopener noreferrer" target="_blank" className="hero__btn hero__btn--primary">
            Write on Telegram <Icon name="telegram" className="icon" />
          </a>
        </div>
      </div>
    </section>
  )
}
