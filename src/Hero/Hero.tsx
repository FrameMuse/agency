import "./Hero.scss"

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

        <div className="hero__ctas">
          <a href="https://www.upwork.com/freelancers/framemuse" target="_blank" className="hero__btn hero__btn--primary">
            Hire on Upwork <i class="fas fa-arrow-right"></i>
          </a>
          <a href="#projects" className="hero__btn hero__btn--secondary">
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}
