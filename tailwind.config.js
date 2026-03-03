const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
    screens: {
      ...defaultTheme.screens,
      md: "810px",
      lg: "1200px",
    },
  },
};
