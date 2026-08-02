import "./Hero.scss"
import { Icon } from "../Icon/Icon"

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
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
          <a href="#projects" className="hero__btn hero__btn--secondary">
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}
