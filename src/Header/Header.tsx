import "./Header.scss"

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
          <a href="https://www.upwork.com/freelancers/~011fb5acc9165ef113" target="_blank" title="Upwork">
            <i className="fab fa-upwork"></i>
          </a>
          <a href="https://t.me/FrameMuse" target="_blank" title="Telegram">
            <i className="fab fa-telegram"></i>
          </a>
          <a href="https://github.com/framemuse" target="_blank" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="http://linkedin.com/in/framemuse" target="_blank" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:valerii.zinchenko.work@gmail.com" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </header>
  )
}
