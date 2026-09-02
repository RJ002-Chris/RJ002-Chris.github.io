import { existsSync } from 'node:fs';
import { run } from '../dist-test/ssr-smoke.js';

const { results, hrefs, srcs } = run();

let failed = 0;
console.log('ROUTE RENDER CHECKS');
for (const r of results) {
  if (!r.ok) failed += 1;
  console.log(`  ${r.ok ? 'PASS' : 'FAIL'}  ${r.path.padEnd(32)} ${r.detail}`);
}

console.log('\nASSET AND LINK CHECKS');
const localPaths = [...srcs, ...hrefs].filter((p) => p.startsWith('/'));
const routes = ['/', '/about', '/portfolio'];
for (const p of [...new Set(localPaths)].sort()) {
  if (routes.includes(p) || p.startsWith('/projects/')) {
    console.log(`  ROUTE ${p}`);
    continue;
  }
  const ok = existsSync(`public${p}`);
  if (!ok) failed += 1;
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  file ${p}`);
}

const external = [...hrefs].filter((h) => h.startsWith('http') || h.startsWith('mailto'));
console.log('\nEXTERNAL LINKS');
for (const e of [...new Set(external)].sort()) console.log(`  ${e}`);

console.log(failed === 0 ? '\nALL CHECKS PASSED' : `\n${failed} CHECK(S) FAILED`);
process.exit(failed === 0 ? 0 : 1);
