import "./Pricing.scss"

const RATE = 20

const ROWS = [
  { service: "Frontend", hours: "8–80h", min: 8, max: 80 },
  { service: "Full-Stack", hours: "20–200h", min: 20, max: 200 },
  { service: "Infrastructure & DevOps", hours: "10–60h", min: 10, max: 60 },
  { service: "Code Audit & Consulting", hours: "10–50h", min: 10, max: 50 },
]

function fmt(n: number) {
  return n >= 1000 ? `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K` : `$${n}`
}

export function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing__inner">
        <div className="pricing__header">
          <h2 className="pricing__title">Transparent Pricing</h2>
          <p className="pricing__subtitle">
            Hourly rate, flexible per project. No hidden fees.
          </p>
        </div>

        <div className="pricing__rate">
          <span className="pricing__rate-value">~${RATE}</span>
          <span className="pricing__rate-unit">/hr</span>
        </div>

        <div className="pricing__table-wrap">
          <table className="pricing__table">
            <thead>
              <tr>
                <th className="pricing__th">Service</th>
                <th className="pricing__th">Estimated Hours</th>
                <th className="pricing__th">Price Range</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(row => (
                <tr key={row.service}>
                  <td className="pricing__service">{row.service}</td>
                  <td className="pricing__cell">{row.hours}</td>
                  <td className="pricing__cell">{fmt(row.min * RATE)}–{fmt(row.max * RATE)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="pricing__footnote">
          Exact price depends on scope, timeline, and requirements. Reach out for a free estimate.
        </p>
      </div>
    </section>
  )
}
