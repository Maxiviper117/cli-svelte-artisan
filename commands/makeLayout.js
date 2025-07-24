import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

import { ensureFolder } from './utils.js';

export function createLayout(route, options = {}) {
  const dir = path.join('./src/routes', route);
  const filePath = path.join(dir, '+layout.svelte');
  const isTS = options.typescript === true;
  const server = options.server === true;
  const scriptTag = isTS ? '<script lang="ts">' : '<script>';
  const content = `${scriptTag}\n\n</script>\n\n<slot />\n`;

  ensureFolder(dir);
  if (fs.existsSync(filePath)) {
    console.log(chalk.yellow(`⚠ Layout already exists: ${filePath}`));
  } else {
    fs.writeFileSync(filePath, content);
    console.log(chalk.green(`✔ Created layout: ${filePath}`));
  }

  if (server) {
    const serverExt = isTS ? 'ts' : 'js';
    const serverPath = path.join(dir, `+layout.server.${serverExt}`);
    if (fs.existsSync(serverPath)) {
      console.log(chalk.yellow(`⚠ Server file already exists: ${serverPath}`));
    } else {
      const serverContent = `export const load = async () => {\n  return {};\n};\n`;
      fs.writeFileSync(serverPath, serverContent);
      console.log(chalk.green(`✔ Created server module: ${serverPath}`));
    }
  }
}
