import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import site from '../data/site';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top bg-dark"
      data-bs-theme="dark"
    >
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand fw-bold" to="/" onClick={close}>
          {site.name}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Bootstrap's collapse plugin does not know about client-side
            navigation, so the menu is driven by React state and closed
            whenever a link inside it is followed. */}
        <div
          className={`collapse navbar-collapse${open ? ' show' : ''}`}
          id="primary-navigation"
          onClick={close}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map(({ to, label, end }) => (
              <li className="nav-item" key={to}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link${isActive ? ' active' : ''}`
                  }
                  to={to}
                  end={end}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item">
              <a
                className="nav-link"
                href={site.resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
