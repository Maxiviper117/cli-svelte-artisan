#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { createComponent } from '../commands/makeComponent.js';
import { createStore } from '../commands/makeStore.js';

const program = new Command();

program
  .name('svelte-artisan')
  .description('Svelte CLI inspired by Laravel Artisan')
  .version('0.1.0');


// Top-level make:component command
program
  .command('make:component <name>')
  .description('Create a new Svelte component')
  .option('-t, --typescript', 'Generate a TypeScript component (with <script lang="ts">)')
  .action((name, options) => {
    createComponent(name, options);
  });

// Top-level make:store command
program
  .command('make:store <name>')
  .description('Create a new writable store')
  .option('-t, --typescript', 'Generate a TypeScript store (with .ts extension)')
  .action((name, options) => {
    createStore(name, options);
  });

program.parse();
