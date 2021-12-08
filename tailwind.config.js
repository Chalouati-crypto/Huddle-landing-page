module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      desktop: "60em",
      "big-desktop": "90em",
    },
    colors: {
      pink: "hsl(322, 100%, 66%)",
      "very-pale-cyan": "hsl(193, 100%, 96%)",
      "very-dark-cyan": "hsl(192, 100%, 9%)",
      "grayish-blue": "hsl(208, 11%, 55%)",
      white: "#fff",
    },
    backgroundImage: {
      "hero-bg-mobile": "url('./src/images/bg-hero-mobile.svg')",
      "hero-bg-desktop": "url('./src/images/bg-hero-desktop.svg')",
    },
    fontFamily: {
      open: "'Open Sans', sans-serif",
      poppins: "'Poppins', sans-serif",
    },
    extend: {
      fontSize: {
        base: "1rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
