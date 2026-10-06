import "./_group.css";

export function Draft() {
  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.dataset.theme === "dark") {
      root.removeAttribute("data-theme");
    } else {
      root.dataset.theme = "dark";
    }
  };

  return (
    <div className="min-h-screen">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-shell">
        <header className="site-header">
          <a className="brand" href="/" aria-label="Nia Chandler home">
            <span className="brand-mark" aria-hidden="true">
              N
            </span>
            <span className="brand-copy">
              <strong>NIA CHANDLER</strong>
              <small>PERSONAL OPERATIONS READOUT</small>
            </span>
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="/">Home</a>
            <a href="/about/" aria-current="page">
              About
            </a>
            <a href="/experience/">Experience</a>
            <a href="/contact/">Contact</a>
          </nav>
          <button
            className="theme-toggle"
            type="button"
            aria-label="Switch theme"
            onClick={toggleTheme}
          >
            <span className="theme-icon" aria-hidden="true">
              ◐
            </span>
            <span data-theme-label>Dark mode</span>
          </button>
        </header>

        <main id="main-content" className="site-main">
          <div className="page-shell">
            <div className="page-intro">
              <p className="eyebrow">
                <span className="status-dot" aria-hidden="true" /> Personnel
                file / profile
              </p>
              <h1>
                About the
                <br />
                <em>operator</em>
              </h1>
              <p className="lede">
                Aviation supply and fuels experience shaped by environments
                where preparation, accountability, and clear handoffs matter.
              </p>
            </div>

            <div className="content-grid">
              <aside className="margin-note" aria-label="Profile metadata">
                <span className="panel-label">FILE TYPE</span>
                <strong>Professional profile</strong>
                <span className="panel-label">ACCESS</span>
                <strong>Public summary</strong>
              </aside>

              <div className="prose">
                <p>
                  My work has centered on aviation supply, fuels, and the
                  day-to-day systems that support mission-ready teams. I have
                  served in roles at sea and ashore, where preparation and
                  reliable handoffs matter.
                </p>
                <p>
                  Since August 2020, I have served as a Department of
                  Defense-credentialed Sexual Assault Prevention and Response
                  (SAPR) Victim Advocate. I have also volunteered as a youth
                  swim coach and coordinated Family Readiness.
                </p>
                <p>
                  Away from aviation work, I have participated in the Naval
                  Academy Glee Club and admissions outreach.
                </p>
                <div className="callout">
                  <span className="callout-mark" aria-hidden="true">
                    +
                  </span>
                  <p>
                    <strong>Beyond the role:</strong> I speak French fluently,
                    and enjoy reading and collecting books.
                  </p>
                </div>
              </div>
            </div>

            <div className="page-closer">
              <span>Next file</span>
              <a href="/experience/">
                Work experience <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </main>

        <footer className="site-footer">
          <p>
            <span className="status-dot" aria-hidden="true" /> END OF RECORD /
            2026
          </p>
          <a href="https://github.com/niaschandler">
            github.com/niaschandler <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </div>
    </div>
  );
}
