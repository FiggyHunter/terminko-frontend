/** @type {import('tailwindcss').Config} */

export default {
  // eslint-disable-next-line prettier/prettier
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        108: "37rem",
      },
      borderWidth: {
        0.5: "0.5px",
      },
      borderRadius: {
        "4xl": "1.75rem",
        "5xl": "2rem",
        "6xl": "2.25rem",
      },
      boxShadow: {
        xs: "0 2px 12px 1px rgba(20, 20, 43, 0.08)",
      },
      fontFamily: {
        dm: ["DM Sans"],
        open: ["Open Sans"],
      },
      colors: {
        neutral: {
          DEFAULT: "#212121",
          900: "#212121",
          800: "#424242",
          700: "#616161",
          600: "#757575",
          500: "#9E9E9E",
          400: "#BDBDBD",
          300: "#E0E0E0",
          200: "#EEEEEE",
          100: "#F5F5F5",
          50: "#FAFAFA",
        },
        primary: {
          DEFAULT: "#FF8500",
          900: "#5B3000",
          800: "#934C00",
          700: "#CBA000",
          600: "#E57800",
          500: "#FF8500",
          400: "#FF9E34",
          300: "#FFB360",
          200: "#FFC88C",
          100: "#FFE0BE",
          50: "#FFF7EE",
        },

        secondary: {
          DEFAULT: "#00FF85",
          900: "#00592F",
          800: "#00A757",
          700: "#00CB6A",
          600: "#00E879",
          500: "#00FF85",
          400: "#28FF98",
          300: "#59FFB0",
          200: "#8CFFC8",
          100: "#BEFFE0",
          50: "#E3FFF2",
        },

        error: {
          DEFAULT: "#DE1F1F",
          900: "#6C0E0E",
          800: "#941313",
          700: "#AE1818",
          600: "#CA1C1C",
          500: "#DE1F1F",
          400: "#DC3C3C",
          300: "#DB5252",
          200: "#DA7373",
          100: "#DA9595",
          50: "#D9BABA",
        },

        warning: {
          DEFAULT: "#FAFF00",
          900: "#818400",
          800: "#A9AC00",
          700: "#CBCF00",
          600: "#E3E800",
          500: "#FAFF00",
          400: "#FBFF33",
          300: "#FCFF5E",
          200: "#FDFF9A",
          100: "#FEFFCA",
          50: "#FFFFED",
        },

        success: {
          DEFAULT: "#8FFF00",
          900: "#3A6800",
          800: "#589C00",
          700: "#6ABD00",
          600: "#7EE100",
          500: "#8FFF00",
          400: "#A5FF33",
          300: "#BCFF67",
          200: "#D2FF98",
          100: "#E3FFBE",
          50: "#F1FFE0",
        },
      },
    },
    plugins: [],
  },
};
