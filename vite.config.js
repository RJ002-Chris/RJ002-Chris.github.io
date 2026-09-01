import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * GitHub Pages has no server-side rewrite, so a direct hit on /portfolio or a
 * browser refresh on a project page would return a 404. Pages serves 404.html
 * for any unmatched path while leaving the URL intact, so shipping a copy of
 * index.html under that name lets React Router resolve the route on load.
 */
function githubPagesSpaFallback() {
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    closeBundle() {
      const dist = resolve(import.meta.dirname, 'dist');
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
    },
  };
}

export default defineConfig({
  plugins: [react(), githubPagesSpaFallback()],
  base: '/',
  build: {
    // Surfaces oversized bundles during CI instead of silently shipping them.
    chunkSizeWarningLimit: 600,
  },
});
