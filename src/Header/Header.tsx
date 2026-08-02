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
      </div>
    </header>
  )
}
