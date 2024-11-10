import { defineConfig, Options } from 'tsup'
import { config } from 'dotenv'
import path from 'path'

const envPath = process.env.ENV_PATH || path.resolve(__dirname, `./config/.env.${process.env.NODE_ENV}`)
config({ path: envPath })

const isProduction = process.env.NODE_ENV === 'production'

const tsupConfig: Options = {
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: !isProduction,
  clean: true,
  minify: isProduction,
  outDir: 'dist',
  env: {
    NODE_ENV: process.env.NODE_ENV || 'development',
    ENV_PATH: envPath,
  },
  esbuildOptions: (options) => {
    options.footer = {
      js: 'module.exports = exports.default || exports;',
    }
  },
  treeshake: true,
  bundle: true,
  platform: 'node',
  metafile: true,
  tsconfig: './tsconfig.json',
  watch: process.env.NODE_ENV === 'development',
  ignoreWatch: [
    '**/.git/**',
    '**/node_modules/**',
    'dist/**',
  ],
  loader: {
    '.json': 'json',
  },
  noExternal: ['lodash'],
}

export default defineConfig(tsupConfig)
