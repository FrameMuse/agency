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
          <a href="https://www.upwork.com/freelancers/framemuse" target="_blank" title="Upwork">
            <i class="fab fa-upwork"></i>
          </a>
          <a href="https://github.com/framemuse" target="_blank" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="http://linkedin.com/in/framemuse" target="_blank" title="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:valerii.zinchenko.work@gmail.com" title="Email">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </header>
  )
}
