import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

import { ensureFolder } from './utils.js';

// Removed duplicate createStore function

export function createStore(name, options = {}) {
  const dir = './src/lib/stores';
  // Always use the base name, never add JS/TS suffixes
  const isTS = options.typescript === true;
  const ext = isTS ? 'ts' : 'js';
  const filePath = path.join(dir, `${name}.${ext}`);
  let content;
  if (isTS) {
    content = `import { writable, type Writable } from 'svelte/store';\n\nexport const ${name}: Writable<any> = writable(null);\n`;
  } else {
    content = `import { writable } from 'svelte/store';\n\nexport const ${name} = writable(null);\n`;
  }

  ensureFolder(dir);
  if (fs.existsSync(filePath)) {
    console.log(chalk.yellow(`⚠ Store already exists: ${filePath}`));
    return;
  }
  fs.writeFileSync(filePath, content);
  console.log(chalk.green(`✔ Created store: ${filePath}${isTS ? ' (TypeScript)' : ''}`));
}
