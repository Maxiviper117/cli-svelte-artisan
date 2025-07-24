import { afterEach, test, expect } from 'vitest';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const GENERATED_PATH = path.join(__dirname, '../src/lib/components/TestComponent.svelte');

afterEach(() => {
  if (fs.existsSync(GENERATED_PATH)) fs.rmSync(GENERATED_PATH);
});

test('CLI generates a Svelte component', () => {
  execSync('node ./bin/index.js make:component TestComponent', { stdio: 'inherit' });
  expect(fs.existsSync(GENERATED_PATH)).toBe(true);
});
