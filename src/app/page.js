const navLinks = ["About", "Company", "Pricing", "Contact", "Projects", "Jobs"];

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
    </main>
  );
}
