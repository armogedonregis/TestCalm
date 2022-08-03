module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    fontSize: {
      'sm': ['14px', '18px'],
      'lg': ['18px', '20px'],
      'lgS': ['18px', '24px'],
      'xl': ['24px', '29px'],
      '2xl': ['24px', '33px'],
      '3xl': ['36px', '40px'],
      '4xl': ['36px', '44px'],
      '5xl': ['48px', '52px'],
      '6xl': ['64px', '70px'],
    },
    fontFamily: {
      orchidea: ["OrchideaPro"],
      manrope: ["Manrope"],
    },
    extend: {
      flex: {
        '2': '0 0 100%'
      },
      colors: {
        primary: {
          DEFAULT: "#141414",
        },
        mask: {
          DEFAULT: "#C4C4C4",
        },
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
