module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.vue",
    "./src/**/*.jsx",
  ],
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],

  darkMode: "class",
  theme: {
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: "#fffff",
    }),
    extend: {
      colors: {
        theme: {
          // Base Color
          1: "#0A3254",
          2: "#F1F5F8",
          3: "#eef0f3",
          4: "#3151BC",
          5: "#dee7ef",
          6: "#D32929",
          7: "#365A74",
          8: "#D2DFEA",
          9: "#91C714",
          10: "#DECA6C",
          11: "#F78B00",
          12: "#FBC500",
          13: "#7F9EB9",
          14: "#E6F3FF",
          15: "#8DA9BE",
          16: "#607F96",
          17: "#FFEFD9",
          18: "#D8F8BC",
          19: "#E6F3FF",
          20: "#2449AF",
          21: "#284EB2",
          22: "#395EC1",
          23: "#D6E1FF",
          24: "#0A3254",
          25: "#E8EEFF",
          26: "#E8EEFF",
          27: "#98AFF5",
          28: "#1A389F",
          29: "#142C91",
          30: "#8da3e6",
          31: "#ffd8d8",
          32: "#3b5998",
          33: "#4ab3f4",
          34: "#517fa4",
          35: "#0077b5",
          36: "#d18d96",
          37: "#c7d2ff",
          38: "#A1A1AA",
          40: "#ffffff",
          41: "#BBC8FD",
          42: "#293145",
          43: "#FFFFFF",
          44: "#DECA6C",
          45: "#A1A1AA",
        },
        opacity: {
          0: "0",
          25: ".25",
          50: ".5",
          75: ".75",
          10: ".1",
          20: ".2",
          30: ".3",
          40: ".4",
          60: ".6",
          70: ".7",
          80: ".8",
          90: ".9",
          100: "1",
        },
        dark: {
          1: "#293145",
          2: "#232a3b",
          3: "#313a55",
          4: "#1e2533",
          5: "#3f4865",
          6: "#2b3348",
          7: "#181f29",
        },
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
      },
      fontFamily: {
        roboto: ["Roboto"],
        bebas: ["bebas-neue"],
        proxima: ["proxima-nova"],
        inter: ["Inter", "sans-serif"],
        gt: ["GTWalsheimPro"],
      },
      container: {
        center: true,
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      strokeWidth: {
        0.5: 0.5,
        1.5: 1.5,
        2.5: 2.5,
      },
    },
  },

  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1600px",
  },

  variants: {
    extend: {
      zIndex: ["responsive", "hover"],
      position: ["responsive", "hover"],
      padding: ["responsive", "last"],
      margin: ["responsive", "last"],
      borderWidth: ["responsive", "last"],
      backgroundColor: [
        "last",
        "first",
        "odd",
        "responsive",
        "hover",
        "dark",
        "active",
      ],
      borderColor: ["last", "first", "odd", "responsive", "hover", "dark"],
      textColor: ["last", "first", "odd", "responsive", "hover", "dark"],
    },
  },
};