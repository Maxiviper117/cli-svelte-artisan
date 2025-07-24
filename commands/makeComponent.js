import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

import { ensureFolder } from './utils.js';

// Removed duplicate createComponent function

export function createComponent(name, options = {}) {
  const dir = './src/lib/components';
  const filePath = path.join(dir, `${name}.svelte`);
  const isTS = options.typescript === true;
  const scriptTag = isTS ? '<script lang="ts">' : '<script>';
  const content = `${scriptTag}\n\n<\/script>\n\n<main>\n  <h1>${name}<\/h1>\n<\/main>`;

  ensureFolder(dir);
  if (fs.existsSync(filePath)) {
    console.log(chalk.yellow(`⚠ Component already exists: ${filePath}`));
    return;
  }
  fs.writeFileSync(filePath, content);
  console.log(chalk.green(`✔ Created component: ${filePath}${isTS ? ' (TypeScript)' : ''}`));
}
