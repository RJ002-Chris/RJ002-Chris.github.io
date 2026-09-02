import { Link } from 'react-router-dom';
import site from '../data/site';

// NOTE: all copy on this page is provisional and drawn strictly from the
// resume PDF in /public. Nothing here is invented. Positioning and tone are
// still open for review.

const experience = [
  {
    org: 'Boonrawd Trading Co., Ltd.',
    role: 'Trade Marketing Analyst Intern',
    period: 'Feb 2025 to Nov 2025',
    location: 'Bangkok, Thailand',
    points: [
      'Cut manual reporting time by 50 percent by automating data consolidation and cleaning workflows in Excel and Power Query.',
      'Built logic-based ROI tracking models for tiered and cumulative trade promotions across three sales channels.',
      'Cleaned and analysed over 1 million transaction records from credit and cash-van operations to surface segmentation and product performance patterns.',
    ],
  },
  {
    org: 'Chememan Public Co., Ltd.',
    role: 'Application Specialist Intern',
    period: 'Jun 2023 to Aug 2023',
    location: 'Thailand',
    points: [
      'Improved application load speed by 30 percent for more than 50 internal users by migrating two business applications onto SAPUI5.',
      'Translated requirements from cross-functional stakeholders into technical specifications for client-facing applications.',
    ],
  },
  {
    org: 'Government Big Data Institute (GBDi)',
    role: 'Data Analyst Intern',
    period: 'Aug 2022 to Sep 2022',
    location: 'Bangkok, Thailand',
    points: [
      'Analysed over 100,000 student records using SQL and Excel to identify nationwide enrolment and equity trends.',
      'Built interactive Power BI dashboards tracking education KPIs to support government policy decisions.',
    ],
  },
];

const skillGroups = [
  {
    label: 'Querying and programming',
    items: ['SQL', 'Python', 'pandas', 'NumPy', 'matplotlib', 'R'],
  },
  {
    label: 'BI and visualisation',
    items: ['Power BI', 'Power Query', 'Excel', 'Tableau', 'qGIS'],
  },
  {
    label: 'Analytics',
    items: [
      'ETL and data pipelines',
      'Data cleaning and wrangling',
      'Statistical analysis',
      'A/B testing',
      'KPI tracking',
      'Customer segmentation',
    ],
  },
  {
    label: 'Workflow',
    items: [
      'Git and GitHub',
      'Stakeholder management',
      'Requirements gathering',
    ],
  },
];

export default function About() {
  return (
    <>
      <header className="hero-section py-5">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center py-4">
              <h1 className="display-5 fw-bolder text-white mb-3">About</h1>
              <div className="section-divider"></div>
              <p className="lead text-white-50 mb-0">
                {site.fullName}, based in {site.location}. Fluent in Thai and
                English, conversational in Mandarin.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4">Education</h2>
              <div className="mb-2 fw-semibold fs-5">
                University of Washington, Seattle
              </div>
              <div className="text-muted mb-2">
                Bachelor of Arts in Geography, Data Science option. Minor in
                Informatics. Sep 2020 to Jun 2024.
              </div>
              <p className="text-muted mb-0">
                Coursework covered statistics, data visualisation, database
                management, and geographic information systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4">Experience</h2>

              {experience.map((job) => (
                <article className="mb-4 pb-4 border-bottom" key={job.org}>
                  <div className="d-flex flex-wrap justify-content-between align-items-baseline gap-2">
                    <h3 className="h5 fw-bold mb-1">{job.org}</h3>
                    <span className="text-muted small">{job.period}</span>
                  </div>
                  <div className="text-muted small mb-3">
                    {job.role} &middot; {job.location}
                  </div>
                  <ul className="project-outcomes">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}

              <article>
                <div className="d-flex flex-wrap justify-content-between align-items-baseline gap-2">
                  <h3 className="h5 fw-bold mb-1">Royal Thai Army</h3>
                  <span className="text-muted small">Nov 2025 to Apr 2026</span>
                </div>
                <div className="text-muted small mb-0">
                  National service, mandatory military conscription. Completed,
                  available immediately.
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4">Skills</h2>
              {skillGroups.map((group) => (
                <div className="mb-4" key={group.label}>
                  <div className="fw-semibold mb-2">{group.label}</div>
                  <div className="skills-wrapper justify-content-start">
                    {group.items.map((item) => (
                      <span className="skill-pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-primary text-white text-center">
        <div className="container px-4 px-lg-5">
          <h2 className="fw-bolder mb-3">Get in touch</h2>
          <p className="lead mb-4 opacity-75">
            Open to analyst and consulting roles in Bangkok and the wider
            region.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn-light btn-lg px-4"
            >
              <i className="bi bi-file-earmark-text me-2"></i>View resume
            </a>
            <a
              href={`mailto:${site.email}`}
              className="btn btn-outline-light btn-lg px-4"
            >
              <i className="bi bi-envelope me-2"></i>Email me
            </a>
            <Link to="/portfolio" className="btn btn-outline-light btn-lg px-4">
              See the work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
