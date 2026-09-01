import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

/**
 * Every route renders inside this shell, so the navbar and footer exist in one
 * place rather than being repeated in each page component.
 */
export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollToTop />
      <Navbar />
      <main id="main" className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
