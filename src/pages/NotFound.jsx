import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="py-5 my-5">
      <div className="container px-4 px-lg-5 text-center">
        <div className="display-1 fw-bolder text-muted opacity-25">404</div>
        <h1 className="fw-bold mb-3">Page not found</h1>
        <p className="text-muted mb-4">
          That page does not exist, or it has moved.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link to="/portfolio" className="btn btn-outline-secondary">
            View the portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
