import "./Footer.scss"

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">FM</div>
          <span className="footer__name">FrameMuse</span>
        </div>

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Valery Zinchenko. Independent systems engineering.
        </p>

        <div className="footer__links">
          <a href="https://github.com/framemuse" target="_blank"><i class="fab fa-github"></i></a>
          <a href="http://linkedin.com/in/framemuse" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://stackoverflow.com/users/12468111/framemuse" target="_blank"><i class="fab fa-stack-overflow"></i></a>
          <a href="mailto:valerii.zinchenko.work@gmail.com"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
    </footer>
  )
}
