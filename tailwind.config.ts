import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*"],
  theme: {
    screens: {
      md: "58rem",
    },

    fontFamily: {
      body: ["Roboto", "sans-serif"],
    },

    fontSize: {
      "heading-desktop": [
        "3.5rem",
        { lineHeight: "1", letterSpacing: "0px", fontWeight: "700" },
      ],

      "heading-mobile": [
        "2.5rem",
        { lineHeight: "1", letterSpacing: "0px", fontWeight: "700" },
      ],

      body: [
        "1rem",
        { lineHeight: "1.5", letterSpacing: "0px", fontWeight: "400" },
      ],

      "body-bold": [
        "1rem",
        { lineHeight: "1.5", letterSpacing: "0px", fontWeight: "700" },
      ],

      "body-small": [
        "0.75rem",
        { lineHeight: "1.5", letterSpacing: "0px", fontWeight: "700" },
      ],
    },

    colors: {
      transparent: "transparent",
      white: "hsl(0, 0%, 100%)",
      grey: "hsl(236, 7%, 48%)",
      vermellion: "hsl(4, 100%, 67%)",
      navy: {
        pale: "hsl(235, 18%, 26%)",
        dark: "hsl(234, 29%, 20%)",
      },
      gradient: {
        start: "hsl(15, 100%, 61%)",
        end: "hsl(346, 100%, 66%)",
      },
    },

    extend: {
      gridTemplateColumns: {
        "3fr-2fr": "3fr 2fr",
        list: "auto 1fr",
      },
    },
  },
  plugins: [],

  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config
