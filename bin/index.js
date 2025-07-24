#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { createComponent } from '../commands/makeComponent.js';
import { createStore } from '../commands/makeStore.js';
import { createPage } from '../commands/makePage.js';
import { createLayout } from '../commands/makeLayout.js';
import { createAction } from '../commands/makeAction.js';

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

// make:page command
program
  .command('make:page <route>')
  .description('Create a new SvelteKit page')
  .option('-t, --typescript', 'Generate TypeScript files')
  .option('-s, --server', 'Also create a +page.server file')
  .action((route, options) => {
    createPage(route, options);
  });

// make:layout command
program
  .command('make:layout <route>')
  .description('Create a new SvelteKit layout')
  .option('-t, --typescript', 'Generate TypeScript files')
  .option('-s, --server', 'Also create a +layout.server file')
  .action((route, options) => {
    createLayout(route, options);
  });

// make:action command
program
  .command('make:action <route>')
  .description('Create a +page.server file with actions')
  .option('-t, --typescript', 'Generate a TypeScript file')
  .action((route, options) => {
    createAction(route, options);
  });

program.parse();
