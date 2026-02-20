const navLinks = ["About", "Company", "Pricing", "Contact", "Projects", "Jobs"];
const trustedLogos = ["Lumo", "Acme Corp", "Quantum", "Apex", "Vela"];
const impactStats = [
  {
    value: "1,200+",
    label: "Successful Projects Delivered",
    description:
      "From startups to enterprises, we’ve built high-performing websites and digital experiences that drive real results.",
  },
  {
    value: "5K+",
    label: "Ad Campaigns Optimized",
    description:
      "We’ve helped brands boost acquisition costs and hit ROI with data-driven paid media strategies.",
  },
  {
    value: "$10M+",
    label: "Revenue Generated for Clients",
    description:
      "Our strategic design, marketing, and conversion optimization have helped businesses scale and maximize profits.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <header className="site-header">
        <div className="container">
          <div className="header-pill">
            <div className="logo-group">
              <span className="logo-mark" aria-hidden="true">✻</span>
              <span className="logo-text">Bravio</span>
            </div>
            <nav className="primary-nav" aria-label="Primary">
              {navLinks.map((label) => (
                <a key={label} className="nav-link" href="#">
                  {label}
                </a>
              ))}
            </nav>
            <div className="header-actions">
              <button className="header-cta" type="button">Book a Call</button>
              <button className="header-burger" type="button" aria-label="Open menu">
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="availability-pill">
              <span className="availability-dot" aria-hidden="true" />
              <span className="availability-strong">2 Open Slots</span>
              <span className="availability-muted">Available this month</span>
              <a className="availability-link" href="#">
                Join Now
                <span className="availability-arrow" aria-hidden="true">↗</span>
              </a>
            </div>

            <h1 className="hero-title">
              World-Class Design <span className="emoji">🤝</span> And
              <br className="title-break" />
              {" "}
              Marketing For <span className="emoji">⚡</span> Businesses
            </h1>
            <p className="hero-copy">
              We craft high-performing website design and marketing campaigns that
              attract, engage, and convert your ideal customers.
            </p>

            <div className="hero-actions">
              <button className="hero-cta" type="button">
                <span className="icon" aria-hidden="true">☎</span>
                Book an intro call
              </button>
              <button className="hero-secondary" type="button">
                View Pricing
                <span className="arrow" aria-hidden="true">↗</span>
              </button>
            </div>

            <div className="hero-social">
              <div className="avatar-stack">
                <span className="avatar" aria-hidden="true" />
                <span className="avatar" aria-hidden="true" />
                <span className="avatar" aria-hidden="true" />
                <span className="avatar-chip">+2k</span>
              </div>
              <div className="rating-block">
                <div className="rating-row">
                  <span className="rating-value">5.0</span>
                  <span className="stars" aria-hidden="true">★★★★★</span>
                </div>
                <span className="rating-label">From 1.5K reviews</span>
              </div>
            </div>

            <div className="hero-card hero-card-left">
              <span className="card-icon" aria-hidden="true">✦</span>
              <p className="card-copy">
                "The team designed a stunning site optimized for conversions. We saw a 40% increase in leads!"
              </p>
              <span className="card-author">— Jessica Carter</span>
            </div>

            <div className="hero-card hero-card-right">
              <span className="card-icon" aria-hidden="true">✦</span>
              <p className="card-copy">
                "Bravio nailed our MVP design with a fast turnaround and incredible attention to detail."
              </p>
              <span className="card-author">— Sarah Mitchel</span>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio page-section">
        <div className="container">
          <div className="portfolio-grid">
            <article className="portfolio-card">
              <div className="portfolio-media portfolio-media-cloudash" aria-hidden="true" />
              <div className="portfolio-footer">
                <div>
                  <h3 className="portfolio-title">Cloudash</h3>
                  <p className="portfolio-category">Web design • development</p>
                </div>
                <span className="portfolio-metric">2x Increase in conversion</span>
              </div>
            </article>

            <article className="portfolio-card">
              <div className="portfolio-media portfolio-media-nova" aria-hidden="true" />
              <div className="portfolio-footer">
                <div>
                  <h3 className="portfolio-title">Nova Threads</h3>
                  <p className="portfolio-category">Web design • development</p>
                </div>
                <span className="portfolio-metric">4x Ad performance</span>
              </div>
            </article>

            <article className="portfolio-card">
              <div className="portfolio-media portfolio-media-orbit" aria-hidden="true" />
              <div className="portfolio-footer">
                <div>
                  <h3 className="portfolio-title">OrbitCloud</h3>
                  <p className="portfolio-category">Web design • development</p>
                </div>
                <span className="portfolio-metric">+80% Customer sign-ups</span>
              </div>
            </article>

            <article className="portfolio-card">
              <div className="portfolio-media portfolio-media-asterisk" aria-hidden="true" />
              <div className="portfolio-footer">
                <div>
                  <h3 className="portfolio-title">Asterisk inc</h3>
                  <p className="portfolio-category">Web design • development</p>
                </div>
                <span className="portfolio-metric">4x Increase in conversion</span>
              </div>
            </article>

            <article className="portfolio-card">
              <div className="portfolio-media portfolio-media-vertax" aria-hidden="true" />
              <div className="portfolio-footer">
                <div>
                  <h3 className="portfolio-title">Vertax Labs</h3>
                  <p className="portfolio-category">Web design • development</p>
                </div>
                <span className="portfolio-metric">120% Boost in leads</span>
              </div>
            </article>

            <article className="portfolio-card">
              <div className="portfolio-media portfolio-media-celest" aria-hidden="true" />
              <div className="portfolio-footer">
                <div>
                  <h3 className="portfolio-title">Celestia</h3>
                  <p className="portfolio-category">Web design • development</p>
                </div>
                <span className="portfolio-metric">3x Brand awareness</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="trusted-by">
        <div className="container">
          <p className="trusted-label">TRUSTED BY TOP COMPANIES</p>
          <div className="trusted-logos" aria-label="Trusted by logos">
            {trustedLogos.map((logo) => (
              <span key={logo} className="trusted-logo">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="impact">
        <div className="container">
          <div className="impact-header">
            <div className="impact-label">
              <span className="impact-bracket" aria-hidden="true" />
              <span>Impact</span>
            </div>
            <h2 className="impact-title">
              Bravio simplifies the process,
              <br />
              and delivers results.
            </h2>
          </div>
          <div className="impact-grid">
            {impactStats.map((stat) => (
              <article key={stat.label} className="impact-card">
                <p className="impact-value">{stat.value}</p>
                <h3 className="impact-card-title">{stat.label}</h3>
                <p className="impact-card-copy">{stat.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
