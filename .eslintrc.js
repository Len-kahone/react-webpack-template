module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  "extends": ["plugin:@typescript-eslint/recommended"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-unused-vars":0
  },
};
