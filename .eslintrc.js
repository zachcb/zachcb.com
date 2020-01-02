module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["airbnb-base", "plugin:vue/strongly-recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: ["error", "double"],
    "no-shadow": ["off"],
    "global-require": ["off"],
    "max-len": ["off"],
    "import/extensions": ["error", "always", {
      js: "never",
      vue: "never",
    }],
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
