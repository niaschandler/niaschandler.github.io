import "./_group.css";
import "./Draft.css";

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
    <div className="min-h-screen about-draft">
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
                <span className="status-dot" aria-hidden="true" /> Work,
                service &amp; the person behind it
              </p>
              <h1>
                About the
                <br />
                <em>operator</em>
              </h1>
              <p className="lede">
                My work has taken me from aviation supply to advocacy and
                community service. This is a brief view of the work—and the
                interests I carry beyond it.
              </p>
            </div>

            <div className="content-grid">
              <aside className="margin-note" aria-label="Profile metadata">
                <span className="panel-label">A THROUGH-LINE</span>
                <strong>Preparation, care, and showing up for people.</strong>
                <span className="panel-label">IN THIS PROFILE</span>
                <strong>Service · community · life beyond work</strong>
              </aside>

              <div className="prose draft-prose">
                <p className="draft-opening">
                  I trained in the Supply Corps and built my career around
                  aviation supply and fuels. Good work, to me, is careful
                  preparation in service of the people who depend on it.
                </p>

                <section className="draft-context" aria-labelledby="context-heading">
                  <div className="draft-context-heading">
                    <span className="panel-label">A LITTLE MORE CONTEXT</span>
                    <h2 id="context-heading">The work, and the life around it</h2>
                  </div>

                  <div className="draft-entry">
                    <span className="draft-entry-label">Advocacy</span>
                    <p>
                      Since August 2020, I have served as a Department of
                      Defense-credentialed Sexual Assault Prevention and Response
                      (SAPR) Victim Advocate. I have also supervised fellow advocates.
                    </p>
                  </div>
                  <div className="draft-entry">
                    <span className="draft-entry-label">Community</span>
                    <p>
                      I have coordinated the Family Readiness Program, coached youth
                      swimmers, and taken part in Naval Academy Glee Club
                      activities and admissions outreach. Volunteer service
                      has also earned me service medals.
                    </p>
                  </div>
                  <div className="draft-entry draft-entry-personal">
                    <span className="draft-entry-label">Off duty</span>
                    <p>
                      I speak French fluently, and I enjoy reading and collecting books.
                    </p>
                  </div>
                </section>
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
