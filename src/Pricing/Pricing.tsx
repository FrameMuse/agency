import "./Pricing.scss"

const ROWS = [
  { service: "Frontend", starter: "$1K–$3K", standard: "$3K–$10K", complex: "$10K–$20K" },
  { service: "Full-Stack", starter: "$3K–$8K", standard: "$8K–$20K", complex: "$20K–$40K" },
  { service: "Infrastructure & DevOps", starter: "$1K–$3K", standard: "$3K–$8K", complex: "$8K–$15K" },
  { service: "Code Audit & Consulting", starter: "$1K–$2K", standard: "$2K–$5K", complex: "$5K–$10K" },
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
