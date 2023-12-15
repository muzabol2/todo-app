module.exports = {
  plugins: ["autofix"],
  ignorePatterns: ["**/openapi-types.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0, maxBOF: 0 }],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["case", "default"], next: "*" },
      { blankLine: "any", prev: ["case", "default"], next: "case" },
      { blankLine: "always", prev: "import", next: "*" },
      { blankLine: "any", prev: "import", next: "import" },
      { blankLine: "always", prev: ["const", "let"], next: "*" },
      { blankLine: "any", prev: ["const", "let"], next: ["const", "let"] },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "react/prop-types": 0, // for ignoring double check on typescript prop types,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/self-closing-comp": ["error", { component: true, html: true }],
    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": ["error"],
    "react/react-in-jsx-scope": "off",
    "autofix/no-unused-vars": ["off", { varsIgnorePattern: "^_" }],
  },
};
