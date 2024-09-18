import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ['"Jost", sans-seri'],
      body: ['"Jost", sans-seri'],
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
      "m2xl": { max: "1535.98px" },
      // => @media (max-width: 1535px) { ... }

      mxl: { max: "1279.98px" },
      // => @media (max-width: 1279px) { ... }

      mlg: { max: "1023.98px" },
      // => @media (max-width: 1023px) { ... }

      mmd: { max: "767.98px" },
      // => @media (max-width: 767px) { ... }

      msm: { max: "639.98px" },
      // => @media (max-width: 639px) { ... }
    },

    container: {
      screens: {
        sm: '640px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
export default config;
