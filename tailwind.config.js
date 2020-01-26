module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        invert: "var(--color-invert)",
      },
    },
  },
  variants: {},
  plugins: [
    require("tailwind-css-variables")(
      {
        // modules
      },
      {
        // options
      },
    ),
  ],
};
