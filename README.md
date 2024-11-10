<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/idkgene/static/blob/main/starter-ts/dark-banner.png?raw=true">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/idkgene/static/blob/main/starter-ts/light-banner.png?raw=true">
  <img alt="starter-ts" src="https://github.com/idkgene/static/blob/main/starter-ts/dark-banner.png?raw=true">
</picture>

# starter-ts

<p>
  <a href="https://github.com/idkgene/starter-ts/actions"><img src="https://github.com/idkgene/starter-ts/workflows/CI/badge.svg" alt="CI Status"></a>
  <a href="https://github.com/idkgene/starter-ts/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/starter-ts.svg" alt="license"></a>
</p>

A TypeScript starter template for building robust and maintainable libraries.

## ✨ Features

- 🚀 Lightning-fast builds with [tsup](https://github.com/egoist/tsup)
- 📖 Full [TypeScript](https://www.typescriptlang.org/) support
- ✅ Comprehensive testing setup with [Vitest](https://vitest.dev/)
- 🔍 Code quality ensured by [ESLint](https://eslint.org/) with [typescript-eslint](https://typescript-eslint.io/)
- 💅 Consistent code style with [Prettier](https://prettier.io/)
- 📦 Efficient package management using [pnpm](https://pnpm.io/)
- 🔄 Automated workflows with GitHub Actions
- 📊 Code coverage reporting
- 🚢 Streamlined releases using [bumpp](https://github.com/antfu/bumpp)
- 🌍 Multi-environment configuration support

## 🚀 Quick Start

1. Clone this repository
   ```bash
   git clone https://github.com/idkgene/starter-ts.git my-project
   cd my-project
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Start developing
   ```bash
   pnpm dev
   ```

## 📜 Available Scripts

- `pnpm build` - Build the library
- `pnpm dev` - Build in watch mode
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm lint` - Lint the code
- `pnpm format` - Format the code
- `pnpm release` - Release a new version

## 📁 Project Structure

```
starter-ts/
├── src/
│   └── index.ts
├── tests/
│   └── index.test.ts
├── config/
│   ├── .env.development
│   ├── .env.production
│   └── .env.test
├── .github/
│   └── workflows/
│       └── ci.yml
├── .gitignore
├── .npmrc
├── .prettierrc
├── eslint.config.mjs
├── LICENSE.md
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
├── tsup.config.ts
└── vitest.config.ts
```

## 🛠️ Configuration

Environment-specific variables are stored in the `config/` directory:

- `.env.development` - Development environment
- `.env.production` - Production environment
- `.env.test` - Test environment

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check the [issues page](https://github.com/idkgene/starter-ts/issues).

## 📄 License

This project is [MIT](./LICENSE.md) licensed.

## 🙏 Acknowledgements

This project is inspired by and builds upon the work of many great open-source projects and tools. We'd like to express our gratitude to:

- [tsup](https://github.com/egoist/tsup)
- [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [pnpm](https://pnpm.io/)
- [bumpp](https://github.com/antfu/bumpp)

And many others that make modern TypeScript development a joy.

---

If you find this template useful, please consider giving it a star ⭐️ to show your support!
