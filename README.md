
# Svelte Artisan CLI

<!-- Badges -->
[![npm](https://img.shields.io/npm/v/@maxiviper117/svelte-artisan)](https://www.npmjs.com/package/@maxiviper117/svelte-artisan)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A CLI tool for Svelte projects inspired by Laravel Artisan.

---

## 🚀 Quick Start

Install and run a command instantly (no install required):

```sh
npx svelte-artisan make:component MyComponent
npx svelte-artisan make:page blog --server
```

Or with pnpm:

```sh
pnpm dlx svelte-artisan make:component MyComponent
pnpm dlx svelte-artisan make:page blog --server
```

---

## 📦 Installation (for local development)

```sh
pnpm install
```

---


## 🛠️ Usage

### Run with npx (no install required):

```sh
npx svelte-artisan make:component MyComponent
npx svelte-artisan make:store MyStore
```

### Run with pnpm dlx (no install required):

```sh
pnpm dlx svelte-artisan make:component MyComponent
pnpm dlx svelte-artisan make:store MyStore
```

---

## 🧑‍💻 Development: Running from Source

If you want to run the CLI directly from the source code (for development or debugging):

```sh
node ./bin/index.js make:component MyComponent
node ./bin/index.js make:store MyStore
node ./bin/index.js make:page blog --server
```

---

## 📋 Commands & Flags

| Command                                 | Description                                      |
|-----------------------------------------|--------------------------------------------------|
| `make:component <name>`                 | Generate a new Svelte component in `src/lib/components/` |
| `make:store <name>`                     | Generate a new Svelte store in `src/lib/stores/`  |
| `make:page <route>`                     | Generate a SvelteKit page in `src/routes/` |
| `make:layout <route>`                   | Generate a SvelteKit layout in `src/routes/` |
| `make:action <route>`                   | Generate a `+page.server` file with actions |
| `--typescript`                          | Generate TypeScript files (optional flag)         |
| `-h`, `--help`                          | Show help                                         |
| `-V`, `--version`                       | Show CLI version                                  |

---

## 🧑‍💻 Example Output

```sh
$ npx svelte-artisan make:component MyComponent
✔ Created src/lib/components/MyComponent.svelte
$ npx svelte-artisan make:page blog --server
✔ Created src/routes/blog/+page.svelte
✔ Created src/routes/blog/+page.server.ts
```

---

## ⚙️ Configuration

No configuration or environment variables required by default.

---

## 🐞 Troubleshooting

- If you see a permissions error, try running with elevated privileges or check your Node.js version (requires Node 20+).
- For help, run:
	```sh
	npx svelte-artisan --help
	```
- If you encounter a bug, please [open an issue](https://github.com/maxiviper117/svelte-artisan/issues).

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests on GitHub.

---

## Development
- Uses ESM (`type: module`)
- Uses Commander.js, Chalk, fs-extra
- Add your own commands and extend as needed!

---

## License

This project is licensed under the [MIT License](./LICENSE).
