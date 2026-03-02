const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    screens: {
      ...defaultTheme.screens,
      md: "810px",
      lg: "1200px",
    },
  },
};
