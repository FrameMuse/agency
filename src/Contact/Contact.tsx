import "./Contact.scss"
import { Icon } from "../Icon/Icon"

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
          <a href="https://t.me/FrameMuse" rel="noopener noreferrer" target="_blank" className="contact__card contact__card--telegram">
            <Icon name="telegram" className="icon" />
            <span className="contact__card-label">t.me/FrameMuse</span>
            <span className="contact__card-arrow"><Icon name="arrow-right" className="icon icon--arrow" /></span>
          </a>

          <a href="https://www.upwork.com/freelancers/~011fb5acc9165ef113" rel="noopener noreferrer" target="_blank" className="contact__card contact__card--upwork">
            <Icon name="upwork" className="icon" />
            <span className="contact__card-label">Hire on Upwork</span>
            <span className="contact__card-arrow"><Icon name="arrow-right" className="icon icon--arrow" /></span>
          </a>

          <a href="mailto:valerii.zinchenko.work@gmail.com" className="contact__card contact__card--email">
            <Icon name="envelope" className="icon" />
            <span className="contact__card-label">valerii.zinchenko.work@gmail.com</span>
            <span className="contact__card-arrow"><Icon name="arrow-right" className="icon icon--arrow" /></span>
          </a>

          <a href="https://github.com/framemuse" rel="noopener noreferrer" target="_blank" className="contact__card contact__card--github">
            <Icon name="github" className="icon" />
            <span className="contact__card-label">github.com/framemuse</span>
            <span className="contact__card-arrow"><Icon name="arrow-right" className="icon icon--arrow" /></span>
          </a>

          <a href="http://linkedin.com/in/framemuse" rel="noopener noreferrer" target="_blank" className="contact__card contact__card--linkedin">
            <Icon name="linkedin" className="icon" />
            <span className="contact__card-label">linkedin.com/in/framemuse</span>
            <span className="contact__card-arrow"><Icon name="arrow-right" className="icon icon--arrow" /></span>
          </a>
        </div>
      </div>
    </section>
  )
}
