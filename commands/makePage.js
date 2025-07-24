import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

import { ensureFolder } from './utils.js';

export function createPage(route, options = {}) {
  const dir = path.join('./src/routes', route);
  const filePath = path.join(dir, '+page.svelte');
  const isTS = options.typescript === true;
  const server = options.server === true;
  const scriptTag = isTS ? '<script lang="ts">' : '<script>';
  const content = `${scriptTag}\n\n</script>\n\n<h1>${route}</h1>\n`;

  ensureFolder(dir);
  if (fs.existsSync(filePath)) {
    console.log(chalk.yellow(`⚠ Page already exists: ${filePath}`));
  } else {
    fs.writeFileSync(filePath, content);
    console.log(chalk.green(`✔ Created page: ${filePath}`));
  }

  if (server) {
    const serverExt = isTS ? 'ts' : 'js';
    const serverPath = path.join(dir, `+page.server.${serverExt}`);
    if (fs.existsSync(serverPath)) {
      console.log(chalk.yellow(`⚠ Server file already exists: ${serverPath}`));
    } else {
      const serverContent = `export const load = async () => {\n  return {};\n};\n`;
      fs.writeFileSync(serverPath, serverContent);
      console.log(chalk.green(`✔ Created server module: ${serverPath}`));
    }
  }
}
