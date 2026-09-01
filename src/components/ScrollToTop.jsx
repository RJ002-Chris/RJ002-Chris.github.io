import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Without this, navigating from halfway down the portfolio list into a project
 * page keeps the old scroll position and lands the visitor mid-article.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
