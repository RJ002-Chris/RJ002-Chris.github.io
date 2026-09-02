import { Link } from 'react-router-dom';
import projects from '../data/projects';
import site from '../data/site';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <>

        {/* Hero */}
        <header className="hero-section py-5">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
              <div className="col-lg-7 text-center text-lg-start">
                <div className="my-5">
                  <h1 className="display-4 fw-bolder text-white mb-3">
                    Hi, I'm Christian Tsao
                  </h1>
                  <p className="lead text-white-50 mb-4">
                    Data and analytics graduate based in Bangkok. I work in SQL,
                    Power BI and Python, turning messy commercial data into
                    decisions people can act on.
                  </p>
                  <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
                    <Link className="btn btn-primary btn-lg px-4" to="/portfolio">
                      View My Work
                    </Link>
                    <Link className="btn btn-outline-light btn-lg px-4" to="/about">
                      About Me
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-flex justify-content-center">
                <img
                  className="avatar-lg"
                  src="/assets/chrisProfilePic.jpg"
                  alt="Christian Tsao"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Quote */}
        <section className="py-5 bg-light">
          <div className="container px-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <i className="bi bi-quote fs-1 text-primary opacity-50"></i>
                <p className="fs-5 fst-italic text-muted mb-4">
                  "The useful part of analysis is not the chart. It is being willing to
                  find out you were wrong, and saying so.""
                </p>
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <img className="avatar-sm" src="/assets/chrisProfilePic.jpg" alt="Christian Tsao" />
                  <div className="text-start">
                    <div className="fw-bold">Christian Tsao</div>
                    <div className="text-muted small">BA Geography, Data Science option · University of Washington</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Strip */}
        <section className="py-4 bg-dark">
          <div className="container px-5">
            <div className="row text-center g-4">
              {[
                { icon: 'bi-database', label: 'SQL' },
                { icon: 'bi-bar-chart', label: 'Power BI' },
                { icon: 'bi-funnel', label: 'Power Query & Excel' },
                { icon: 'bi-code-slash', label: 'Python' },
              ].map(({ icon, label }) => (
                <div className="col-6 col-md-3" key={label}>
                  <i className={`bi ${icon} fs-2 text-primary`}></i>
                  <div className="text-white-50 small mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-5">
          <div className="container px-5">
            <div className="text-center mb-5">
              <h2 className="fw-bolder">Featured Projects</h2>
              <div className="section-divider"></div>
              <p className="text-muted">A selection of my latest work.</p>
            </div>
            <div className="row gx-4 gy-4">
              {featuredProjects.map((project) => (
                <div className="col-md-4" key={project.id}>
                  <div className="card h-100 shadow-sm border-0 project-card">
                    <div className="project-img-wrapper">
                      <img src={project.preview} alt={project.alt} />
                    </div>
                    <div className="card-body p-4">
                      <span className="badge bg-primary bg-gradient rounded-pill mb-2">
                        {project.category}
                      </span>
                      <h5 className="card-title fw-bold mb-2">{project.title}</h5>
                      <p className="card-text text-muted small">{project.description}</p>
                    </div>
                    <div className="card-footer bg-transparent border-top-0 p-4 pt-0">
                      <Link to={project.path} className="btn btn-outline-primary btn-sm stretched-link">
                        View Project →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-5">
              <Link to="/portfolio" className="btn btn-primary btn-lg px-5">
                See All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Resume CTA */}
        <section className="py-5 bg-primary text-white text-center">
          <div className="container px-5">
            <h2 className="fw-bolder mb-3">Interested in Working Together?</h2>
            <p className="lead mb-4 opacity-75">Download my resume or reach out directly.</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href={site.resume} target="_blank" rel="noreferrer" className="btn btn-light btn-lg px-4">
                <i className="bi bi-download me-2"></i>Download Resume
              </a>
              <a href={`mailto:${site.email}`} className="btn btn-outline-light btn-lg px-4">
                <i className="bi bi-envelope me-2"></i>Get in Touch
              </a>
            </div>
          </div>
        </section>

    </>
  );
}