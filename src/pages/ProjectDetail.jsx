import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="d-flex align-items-center justify-content-center py-5">
          <div className="text-center py-5">
            <h2 className="fw-bold mb-3">Project Not Found</h2>
            <p className="text-muted mb-4">The project you're looking for doesn't exist.</p>
            <Link to="/portfolio" className="btn btn-primary">Back to Portfolio</Link>
          </div>
      </div>
    );
  }

  return (
    <>

        {/* Header */}
        <header className="bg-dark py-5">
          <div className="container px-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center my-4">
                <span className="badge bg-primary mb-3">{project.category}</span>
                <h1 className="fw-bolder text-white mb-3">{project.title}</h1>
                <p className="lead text-white-50 mb-4">{project.description}</p>
                <div className="d-flex gap-2 justify-content-center flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge bg-secondary">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Metadata Strip */}
        <section className="py-3 bg-light border-bottom">
          <div className="container px-5">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="d-flex flex-wrap gap-4 justify-content-center text-muted small fw-semibold">
                  {project.timeline && <span><i className="bi bi-calendar3 me-1"></i>{project.timeline}</span>}
                  {project.role && <span><i className="bi bi-person me-1"></i>{project.role}</span>}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-decoration-none">
                      <i className="bi bi-github me-1"></i>View Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-decoration-none">
                      <i className="bi bi-box-arrow-up-right me-1"></i>Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        {project.outcomes && (
          <section className="py-5">
            <div className="container px-5">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h4 className="fw-bold mb-4">Key Outcomes</h4>
                  <ul className="project-outcomes">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome} className="mb-2">{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Preview Image */}
        <section className="py-5 bg-light">
          <div className="container px-5 text-center">
            <img
              src={project.preview}
              alt={project.alt}
              className="img-fluid rounded-3 shadow"
              style={{ maxHeight: "500px", objectFit: "contain" }}
            />
          </div>
        </section>

        {/* Back Button */}
        <section className="py-4">
          <div className="container px-5 text-center">
            <Link to="/portfolio" className="btn btn-outline-secondary me-3">
              ← Back to Portfolio
            </Link>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-dark">
                <i className="bi bi-github me-2"></i>View on GitHub
              </a>
            )}
          </div>
        </section>

    </>
  );
}
