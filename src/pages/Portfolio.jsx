import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

export default function Portfolio() {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach((p) => p.tags.forEach((tag) => tags.add(tag)));
    return ['All', ...Array.from(tags)];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );

      const matchesTag =
        selectedTag === 'All' || project.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [search, selectedTag]);

  return (
    <>
        <section className="bg-dark py-5">
          <div className="container px-4 text-center">
            <h1 className="fw-bolder text-white mb-2">My Work</h1>

            <div className="section-divider"></div>

            <p className="lead text-white-50 mb-4">
              GIS, analytics, spatial analysis, and data visualization projects.
            </p>

            <div className="portfolio-controls mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Search projects or skills..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`btn btn-sm ${
                    selectedTag === tag
                      ? 'btn-primary'
                      : 'btn-outline-light'
                  }`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-4 bg-light border-bottom">
          <div className="container px-4">
            <div className="skills-wrapper">
              <span className="skill-pill">Python</span>
              <span className="skill-pill">SQL</span>
              <span className="skill-pill">Power BI</span>
              <span className="skill-pill">Tableau</span>
              <span className="skill-pill">Java</span>
              <span className="skill-pill">Data Analytics</span>
              <span className="skill-pill">GIS</span>
              <span className="skill-pill">Machine Learning</span>
              <span className="skill-pill">React</span>
              <span className="skill-pill">Data Visualization</span>
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container px-4">
            <div className="project-list">
              {filteredProjects.map((project) => (
                <div className="project-row-card" key={project.id}>
                  <div className="project-row-image">
                    <img
                      src={project.preview}
                      alt={project.alt}
                      loading="lazy"
                    />
                  </div>

                  <div className="project-row-content">
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                      <span className="badge bg-primary">
                        {project.category}
                      </span>

                      {project.featured && (
                        <span className="badge bg-warning text-dark">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="fw-bold mb-3">{project.title}</h3>

                    <p className="text-muted mb-3">
                      {project.description}
                    </p>

                    <div className="project-metadata mb-3">
                      <span>{project.timeline}</span>
                      <span>{project.role}</span>
                    </div>

                    <ul className="project-outcomes">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>

                    <div className="mb-4 mt-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge bg-light text-dark border me-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex flex-wrap gap-2">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="btn btn-primary"
                      >
                        View Project
                      </Link>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-dark"
                        >
                          GitHub
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-primary"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}