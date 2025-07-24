import { afterEach, test, expect } from 'vitest';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const GENERATED_PATH = path.join(__dirname, '../src/lib/stores/TestStore.js');

// Also test TypeScript variant
const GENERATED_PATH_TS = path.join(__dirname, '../src/lib/stores/TestStore.ts');

afterEach(() => {
  if (fs.existsSync(GENERATED_PATH)) fs.rmSync(GENERATED_PATH);
  if (fs.existsSync(GENERATED_PATH_TS)) fs.rmSync(GENERATED_PATH_TS);
});

test('CLI generates a JS store', () => {
  execSync('node ./bin/index.js make:store TestStore', { stdio: 'inherit' });
  expect(fs.existsSync(GENERATED_PATH)).toBe(true);
});

test('CLI generates a TS store', () => {
  execSync('node ./bin/index.js make:store TestStore --typescript', { stdio: 'inherit' });
  expect(fs.existsSync(GENERATED_PATH_TS)).toBe(true);
});
