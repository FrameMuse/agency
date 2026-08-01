import "./Contact.scss"

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__header">
          <h2 className="contact__title">Let's Build Something</h2>
          <p className="contact__subtitle">
            Have a project in mind? Reach out through any channel below.
          </p>
        </div>

        <div className="contact__channels">
          <a href="https://t.me/FrameMuse" target="_blank" className="contact__card contact__card--telegram">
            <i className="fab fa-telegram"></i>
            <span className="contact__card-label">t.me/FrameMuse</span>
            <span className="contact__card-arrow"><i className="fas fa-arrow-right"></i></span>
          </a>

          <a href="https://www.upwork.com/freelancers/~011fb5acc9165ef113" target="_blank" className="contact__card contact__card--upwork">
            <i className="fab fa-upwork"></i>
            <span className="contact__card-label">Hire on Upwork</span>
            <span className="contact__card-arrow"><i className="fas fa-arrow-right"></i></span>
          </a>

          <a href="mailto:valerii.zinchenko.work@gmail.com" className="contact__card contact__card--email">
            <i className="fas fa-envelope"></i>
            <span className="contact__card-label">valerii.zinchenko.work@gmail.com</span>
            <span className="contact__card-arrow"><i className="fas fa-arrow-right"></i></span>
          </a>

          <a href="https://github.com/framemuse" target="_blank" className="contact__card contact__card--github">
            <i className="fab fa-github"></i>
            <span className="contact__card-label">github.com/framemuse</span>
            <span className="contact__card-arrow"><i className="fas fa-arrow-right"></i></span>
          </a>

          <a href="http://linkedin.com/in/framemuse" target="_blank" className="contact__card contact__card--linkedin">
            <i className="fab fa-linkedin"></i>
            <span className="contact__card-label">linkedin.com/in/framemuse</span>
            <span className="contact__card-arrow"><i className="fas fa-arrow-right"></i></span>
          </a>
        </div>
      </div>
    </section>
  )
}
