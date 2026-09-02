import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import Layout from '../src/components/Layout';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Portfolio from '../src/pages/Portfolio';
import ProjectDetail from '../src/pages/ProjectDetail';
import NotFound from '../src/pages/NotFound';
import ContentAudit from '../src/pages/ContentAudit';
import CreditRisk from '../src/pages/CreditRisk';
import FmcgStrategy from '../src/pages/FmcgStrategy';
import WelcomeToSeattle from '../src/pages/WelcomeToSeattle';
import WhatsHappening from '../src/pages/WhatsHappening';
import GrayAnatomy from '../src/pages/GrayAnatomy';
import HappyPlaces from '../src/pages/HappyPlaces';

const customProjectPages = [
  { slug: 'content-audit', element: <ContentAudit /> },
  { slug: 'credit-risk', element: <CreditRisk /> },
  { slug: 'fmcg-strategy', element: <FmcgStrategy /> },
  { slug: 'welcome-to-seattle', element: <WelcomeToSeattle /> },
  { slug: 'whats-happening', element: <WhatsHappening /> },
  { slug: 'gray-anatomy', element: <GrayAnatomy /> },
  { slug: 'happy-places', element: <HappyPlaces /> },
];

function renderRoute(path) {
  return renderToString(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {customProjectPages.map(({ slug, element }) => (
            <Route key={slug} path={`/projects/${slug}`} element={element} />
          ))}
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

export function run() {
  const cases = [
    ['/', ['Christian Tsao', 'Featured Projects']],
    ['/about', ['Boonrawd', 'Power BI', 'Royal Thai Army']],
    ['/portfolio', ['My Work', 'Alaskan Airlines Flight Study']],
    ['/projects/content-audit', ['Cross-Platform Content Audit', 'twenty-four claims in total', 'does not generalise']],
    ['/projects/credit-risk', ['Four Errors I Made', 'reject inference', '0.756']],
    ['/projects/fmcg-strategy', ['Builds Almost Nothing', 'One of six finalists', 'Year one is a data year']],
    ['/projects/welcome-to-seattle', ['Alaska Airlines']],
    ['/projects/whats-happening', ['Roosevelt']],
    ['/projects/gray-anatomy', ['Gray Anatomy']],
    ['/projects/happy-places', ['Happy Places']],
    ['/projects/does-not-exist', ['Project Not Found']],
    ['/nonsense-url', ['Page not found']],
    ['/about/extra/segments', ['Page not found']],
  ];

  const results = [];
  for (const [path, expected] of cases) {
    let html = '';
    let error = null;
    try {
      html = renderRoute(path);
    } catch (err) {
      error = err;
    }

    if (error) {
      results.push({ path, ok: false, detail: `THREW: ${error.message}` });
      continue;
    }

    const missing = expected.filter((needle) => !html.includes(needle));
    const hasNav = html.includes('primary-navigation');
    const hasFooter = html.includes('mailto:');

    results.push({
      path,
      ok: missing.length === 0 && hasNav && hasFooter,
      detail:
        missing.length > 0
          ? `missing text: ${missing.join(', ')}`
          : !hasNav
            ? 'navbar missing'
            : !hasFooter
              ? 'footer missing'
              : `ok (${html.length} chars)`,
    });
  }

  // Collect every internal link and image path that appears in rendered output.
  const allHtml = cases.map(([p]) => {
    try {
      return renderRoute(p);
    } catch {
      return '';
    }
  }).join('\n');

  const hrefs = [...allHtml.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  const srcs = [...allHtml.matchAll(/src="([^"]+)"/g)].map((m) => m[1]);

  return { results, hrefs: [...new Set(hrefs)], srcs: [...new Set(srcs)] };
}
