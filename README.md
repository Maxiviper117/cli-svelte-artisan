# Svelte Artisan CLI

A CLI tool for Svelte projects inspired by Laravel Artisan.

## Features
- `svelte make:component <name>`: Generate a new Svelte component in `src/lib/components/`
- `svelte make:store <name>`: Generate a new Svelte store in `src/lib/stores/`

## Usage

Install dependencies:

```
pnpm install
```

Run locally:

```
node ./bin/index.js make:component MyComponent
node ./bin/index.js make:store MyStore
```

Add more commands in `bin/index.js` and handlers in `commands/`.

---

## Development
- Uses ESM (`type: module`)
- Uses Commander.js, Chalk, fs-extra
- Add your own commands and extend as needed!

---

## License

This project is licensed under the [MIT License](./LICENSE).
