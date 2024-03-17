# Hybrid Apps - React example

Open [this link in browser](https://users.metropolia.fi/~nooname/react-projekti/) to see the app in action.
HUOM! täytyy olla koulun verkossa!

tunnukset: ilkan tunnukset mitä tunnilla käytettiin tai tee oma.

käytetty open plavelinta
VITE_UPLOAD_SERVER=https://10.120.32.94/upload/api/v1
VITE_MEDIA_API=https://10.120.32.94/media-api/api/v1
VITE_AUTH_API=https://10.120.32.94/auth-api/api/v1
VITE_GRAPHQL_API=https://10.120.32.94/graphql-api/graphql

toteutettu:
minivaatimukset
ammattimainen ulkoasu
lisäsin home sivulle tykkäys napin
käytetty osittain Tailwind ja omia css sääntöjä
nimetty loogisesti 
sisennykset ja risitykset kunnossa.










---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
