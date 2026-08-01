import "./Footer.scss"
import { Icon } from "../Icon/Icon"

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">FM</div>
          <span className="footer__name">Valerý Zinčenko</span>
        </div>

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Valerý Zinčenko. Independent systems engineering. Montenegro, Podgorica.
        </p>

        <div className="footer__links">
          <a href="https://github.com/framemuse" target="_blank"><Icon name="github" className="icon" /></a>
          <a href="http://linkedin.com/in/framemuse" target="_blank"><Icon name="linkedin" className="icon" /></a>
          <a href="https://stackoverflow.com/users/12468111/framemuse" target="_blank"><Icon name="stack-overflow" className="icon" /></a>
          <a href="mailto:valerii.zinchenko.work@gmail.com"><Icon name="envelope" className="icon" /></a>
        </div>
      </div>
    </footer>
  )
}
