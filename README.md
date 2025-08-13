# Build Tools

This repository is a monorepo containing various build and development tools for TypeScript projects, distributed as `@duskmoon-dev` packages.

## Packages

This monorepo is managed with pnpm and contains the following packages:

- `cli`: A command-line interface for accessing the build tools.
- `libs/eslint-config`: A shared ESLint configuration.
- `libs/pkg-utils`: A collection of utilities for working with packages.
- `libs/tsconfig`: Shared TypeScript configurations.
- `commands/*`: Individual command packages.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/duskmoon-dev/build-tools.git
   ```
2. Navigate to the project directory:
   ```bash
   cd build-tools
   ```
3. Install the dependencies:
   ```bash
   pnpm install
   ```

## Usage

The primary way to use these tools is through the `@duskmoon-dev/cli` package.

### Commands

The following commands are available:

- `dm-cli build`: Builds the source code from `./src` to `./dist`.
- `dm-cli storybook <cmd>`: Runs a Storybook command.
- `dm-cli bundle`: Bundles the script.
- `dm-cli lint <glob>`: Lints the specified files.
- `dm-cli format <dir>`: Formats the specified directory with Prettier.
- `dm-cli test`: Runs Jest tests.
- `dm-cli e2e`: Runs Playwright end-to-end tests.

For more information on a specific command, you can use the `--help` flag:

```bash
dm-cli <command> --help
```

## Development

This project uses [Turborepo](https://turbo.build/repo) to manage the monorepo. The following scripts are available at the root level:

- `pnpm build`: Builds all packages.
- `pnpm dev`: Runs all packages in development mode.
- `pnpm lint`: Lints all packages.
- `pnpm test`: Runs tests for all packages.
- `pnpm format`: Formats the entire codebase.
