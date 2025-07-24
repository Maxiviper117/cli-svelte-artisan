import { afterEach, test, expect } from 'vitest';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const PAGE_PATH = path.join(__dirname, '../src/routes/test/+page.svelte');
const SERVER_PATH = path.join(__dirname, '../src/routes/test/+page.server.ts');

afterEach(() => {
  if (fs.existsSync(PAGE_PATH)) fs.rmSync(PAGE_PATH);
  if (fs.existsSync(SERVER_PATH)) fs.rmSync(SERVER_PATH);
});

test('CLI generates a page with server module', () => {
  execSync('node ./bin/index.js make:page test --server --typescript', { stdio: 'inherit' });
  expect(fs.existsSync(PAGE_PATH)).toBe(true);
  expect(fs.existsSync(SERVER_PATH)).toBe(true);
});
