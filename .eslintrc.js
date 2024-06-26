module.exports = {
  root: true,
  extends: ["airbnb-typescript/base", "prettier"],
  plugins: ["import", "prettier"],
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  rules: {
    "lines-between-class-members": "off",
    "@typescript-eslint/indent": "warn",
  },
};
