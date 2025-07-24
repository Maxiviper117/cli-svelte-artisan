import { afterEach, test, expect } from 'vitest';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const LAYOUT_PATH = path.join(__dirname, '../src/routes/admin/+layout.svelte');
const SERVER_PATH = path.join(__dirname, '../src/routes/admin/+layout.server.ts');

afterEach(() => {
  if (fs.existsSync(LAYOUT_PATH)) fs.rmSync(LAYOUT_PATH);
  if (fs.existsSync(SERVER_PATH)) fs.rmSync(SERVER_PATH);
});

test('CLI generates a layout with server module', () => {
  execSync('node ./bin/index.js make:layout admin --server --typescript', { stdio: 'inherit' });
  expect(fs.existsSync(LAYOUT_PATH)).toBe(true);
  expect(fs.existsSync(SERVER_PATH)).toBe(true);
});
