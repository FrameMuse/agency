import "./Pricing.scss"

const ROWS = [
  { service: "Frontend", starter: "$350–$1.5K", standard: "$1.5K–$3.5K", complex: "$3.5K–$5K" },
  { service: "Full-Stack", starter: "$800–$2K", standard: "$2K–$5K", complex: "$5K–$20K" },
  { service: "Infrastructure & DevOps", starter: "$500–$1K", standard: "$1K–$3K", complex: "$3K–$5K" },
  { service: "Code Audit & Consulting", starter: "$500–$1K", standard: "$1K–$3K", complex: "$3K–$5K" },
]

export function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing__inner">
        <div className="pricing__header">
          <h2 className="pricing__title">Transparent Pricing</h2>
          <p className="pricing__subtitle">
            Fixed-price or hourly. No hidden fees. Each project quoted individually.
          </p>
        </div>

        <div className="pricing__table-wrap">
          <table className="pricing__table">
            <thead>
              <tr>
                <th></th>
                <th className="pricing__th">Starter</th>
                <th className="pricing__th">Standard</th>
                <th className="pricing__th">Complex</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(row => (
                <tr key={row.service}>
                  <td className="pricing__service">{row.service}</td>
                  <td className="pricing__cell">{row.starter}</td>
                  <td className="pricing__cell">{row.standard}</td>
                  <td className="pricing__cell">{row.complex}</td>
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
