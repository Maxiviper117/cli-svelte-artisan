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
  // Svelte 5 runes API template
  const propsExample = isTS
    ? '  // Example: let { foo = "bar" } = $props<{ foo?: string }>();'
    : '  // Example: let { foo = "bar" } = $props();';
  const runesComment = '  // Add $state, $derived, $effect runes here';
  const childrenExample = '  // To render children/snippets: {@render children?.()}';
  const content = `${scriptTag}\n${propsExample}\n${runesComment}\n\n</script>\n\n<main>\n  <h1>${name}</h1>\n  <!-- ${childrenExample} -->\n</main>`;

  ensureFolder(dir);
  if (fs.existsSync(filePath)) {
    console.log(chalk.yellow(`⚠ Component already exists: ${filePath}`));
    return;
  }
  fs.writeFileSync(filePath, content);
  console.log(chalk.green(`✔ Created component: ${filePath}${isTS ? ' (TypeScript)' : ''}`));
}
