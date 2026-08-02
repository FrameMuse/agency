import "./Header.scss"
import { Icon } from "../Icon/Icon"

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <div className="header__brand-text">
            <span className="header__name">Valerý Zinčenko</span>
            <span className="header__tagline">systems engineering</span>
          </div>
        </div>

        <div className="header__links">
          <a href="https://www.upwork.com/freelancers/~011fb5acc9165ef113" rel="noopener noreferrer" target="_blank" aria-label="Upwork">
            <Icon name="upwork" className="icon" />
          </a>
          <a href="https://t.me/FrameMuse" rel="noopener noreferrer" target="_blank" aria-label="Telegram">
            <Icon name="telegram" className="icon" />
          </a>
          <a href="https://github.com/framemuse" rel="noopener noreferrer" target="_blank" aria-label="GitHub">
            <Icon name="github" className="icon" />
          </a>
          <a href="http://linkedin.com/in/framemuse" rel="noopener noreferrer" target="_blank" aria-label="LinkedIn">
            <Icon name="linkedin" className="icon" />
          </a>
          <a href="mailto:valerii.zinchenko.work@gmail.com" aria-label="Email">
            <Icon name="envelope" className="icon" />
          </a>
        </div>
      </div>
    </header>
  )
}
