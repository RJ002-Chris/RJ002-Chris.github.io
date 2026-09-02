import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

import ContentAudit from './pages/ContentAudit';
import CreditRisk from './pages/CreditRisk';
import FmcgStrategy from './pages/FmcgStrategy';
import WelcomeToSeattle from './pages/WelcomeToSeattle';
import WhatsHappening from './pages/WhatsHappening';
import GrayAnatomy from './pages/GrayAnatomy';
import HappyPlaces from './pages/HappyPlaces';

// Projects that have a hand-written page of their own. Anything else falls
// through to the generic ProjectDetail template driven by src/data/projects.js,
// so a new project only needs an entry in that file to get a working page.
const customProjectPages = [
  { slug: 'content-audit', element: <ContentAudit /> },
  { slug: 'credit-risk', element: <CreditRisk /> },
  { slug: 'fmcg-strategy', element: <FmcgStrategy /> },
  { slug: 'welcome-to-seattle', element: <WelcomeToSeattle /> },
  { slug: 'whats-happening', element: <WhatsHappening /> },
  { slug: 'gray-anatomy', element: <GrayAnatomy /> },
  { slug: 'happy-places', element: <HappyPlaces /> },
];

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
