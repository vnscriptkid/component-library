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
