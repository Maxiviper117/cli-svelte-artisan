import { afterEach, test, expect } from 'vitest';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const ACTION_PATH = path.join(__dirname, '../src/routes/form/+page.server.ts');

afterEach(() => {
  if (fs.existsSync(ACTION_PATH)) fs.rmSync(ACTION_PATH);
});

test('CLI generates an actions file', () => {
  execSync('node ./bin/index.js make:action form --typescript', { stdio: 'inherit' });
  expect(fs.existsSync(ACTION_PATH)).toBe(true);
});
