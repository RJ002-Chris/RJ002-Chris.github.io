import { Link } from 'react-router-dom';
import site from '../data/site';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark py-4 mt-auto" data-bs-theme="dark">
      <div className="container px-4 px-lg-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <div className="fw-bold text-white">{site.name}</div>
            <div className="small text-white-50">
              {site.role} &middot; {site.location}
            </div>
          </div>

          <div className="col-md-4 text-center mb-3 mb-md-0">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                className="link-light small me-3 text-decoration-none"
                to={to}
              >
                {label}
              </Link>
            ))}
            <a
              className="link-light small text-decoration-none"
              href={site.resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <a
              className="link-light me-3"
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <i className="bi bi-github fs-5"></i>
            </a>
            <a
              className="link-light me-3"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <i className="bi bi-linkedin fs-5"></i>
            </a>
            <a
              className="link-light"
              href={`mailto:${site.email}`}
              aria-label="Send an email"
            >
              <i className="bi bi-envelope fs-5"></i>
            </a>
          </div>
        </div>

        <hr className="border-secondary my-3" />

        <div className="text-center text-white-50 small">
          &copy; {currentYear} {site.name}
        </div>
      </div>
    </footer>
  );
}
