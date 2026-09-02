import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Bootstrap is bundled rather than loaded from a CDN so the site still renders
// correctly on corporate networks that block third-party script hosts.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './index.css';
import './App.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
