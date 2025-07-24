import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

import { ensureFolder } from './utils.js';

export function createAction(route, options = {}) {
  const dir = path.join('./src/routes', route);
  const isTS = options.typescript === true;
  const filePath = path.join(dir, `+page.server.${isTS ? 'ts' : 'js'}`);
  const content = `export const actions = {\n  // define actions here\n};\n`;

  ensureFolder(dir);
  if (fs.existsSync(filePath)) {
    console.log(chalk.yellow(`⚠ Actions file already exists: ${filePath}`));
    return;
  }

  fs.writeFileSync(filePath, content);
  console.log(chalk.green(`✔ Created actions module: ${filePath}`));
}
