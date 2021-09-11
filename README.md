# component-library

This is a demonstration of how a component library look like in real-world

1. Shared components
2. Library creation
3. Shared component patterns
4. Advanced patterns
5. Component testing
6. Build process
7. Deployment & automation

- Update `package.json`:

```json
"name": "@vnscriptkid/component-library",
"version": "0.0.0",
```

- Install deps

```json
"dependencies": {
    "react": ">=16.12.0",
    "react-dom": ">=16.12.0"
},
"devDependencies": {
    "@types/react": "^17.0.20",
    "@types/react-dom": "^17.0.9",
    "typescript": "^4.4.2"
}
```

- Update `tsconfig.json`
- Init storybook, install packages, start

```console
npx sb init
npm install
npm run storybook
```

- Add `prettier`

```
npm install --save-dev prettier
```

- Add config for `prettier` in `.prettierrc`
- Add format && check scripts in `package.json`

```json
"format": "prettier --write .",
"lint:check": "prettier --check ."
```

- Add `eslint`

```console
npm install --save-dev eslint eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

- Add config for `eslint` in `.eslintrc`
- Add lint scripts in `package.json`

```json
"lint": "eslint src/**"
```

- Let people use `Button` component be able to use all props available with normal `button`
by using `React.forwardRef`


## Add testing for lib
- Install deps
```console
npm install --save-dev jest ts-jest @types/jest
npm install --save-dev @testing-library/react @testing-library/jest-dom
```
- Add config for jest in `jest.config.js`
- Add test scripts in `package.json`
```json
"test": "jest",
```
- Add `jest-setup.ts` to inject global stuff
- Include `jest-setup.ts` in `tsconfig.json`

## Add Babel
- Install deps
```console
npm install --save-dev @babel/core babel-loader
npm install --save-dev @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime babel-plugin-styled-components
npm install @babel/runtime
```
- Config babel config in `.babelrc`
- Add entry point to our lib: `src/index.ts` that exports all components

## Add Rollup
- Install deps
```console
npm install --save-dev rollup rollup-plugin-delete rollup-plugin-node-externals @rollup/plugin-babel @rollup/plugin-commonjs @rollup/plugin-node-resolve
```
- Config `rollup` in `rollup.config.js`
- Update `package.json` with build output:
```json
"main": "dist/index.cjs.js",
"module": "dist/index.esm.js",
"sideEffects": false,
"scripts": {
    "build": "npm run build:js",
    "build:js": "rollup -c rollup.config.js",
}
```

## Generate types files for typescript consumers
- Add `tsconfig.build.json`
- Update `package.json`
```json
"types": "dist/typings/index.d.ts",
"scripts": {
    "build": "npm run build:js && npm run build:types",
    "build:js": "rollup -c rollup.config.js",
    "build:types": "tsc -p tsconfig.build.json"
}
```

## Github Actions
- Config workflow in `.github/workflows/publish.yml`
- Bump version at minor
```console
npm version minor
```
- Start workflow
```console
git push --follow-tags
```