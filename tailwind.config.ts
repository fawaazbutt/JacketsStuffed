import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-fixed": "#ff793d",
        "on-primary-fixed-variant": "#521a00",
        tertiary: "#75525b",
        "surface-container-lowest": "#ffffff",
        "on-primary": "#ffefea",
        "on-surface-variant": "#805031",
        primary: "#a13a00",
        "tertiary-fixed": "#ffd1dc",
        "on-secondary": "#f0f2ff",
        "inverse-on-surface": "#ca906c",
        secondary: "#0056c2",
        "surface-container-high": "#ffdbc8",
        "primary-container": "#ff793d",
        "surface-tint": "#a13a00",
        "tertiary-container": "#ffd1dc",
        "tertiary-fixed-dim": "#f0c3ce",
        "surface-variant": "#ffd4bc",
        "surface-bright": "#fff4f0",
        "on-secondary-fixed-variant": "#004cad",
        "surface-container-low": "#ffede5",
        "secondary-dim": "#004bab",
        "primary-dim": "#8d3200",
        "on-tertiary-fixed": "#52333c",
        "primary-fixed-dim": "#f56721",
        "surface-container": "#ffe3d4",
        "on-secondary-container": "#00439a",
        background: "#fff4f0",
        "tertiary-dim": "#684650",
        "outline-variant": "#dda07b",
        "on-secondary-fixed": "#003175",
        "on-surface": "#4b2409",
        "secondary-fixed-dim": "#abc3ff",
        "error-dim": "#9f0519",
        "on-tertiary-fixed-variant": "#714e58",
        "inverse-surface": "#1d0800",
        error: "#b31b25",
        "surface-container-highest": "#ffd4bc",
        "on-primary-container": "#431300",
        "on-error": "#ffefee",
        "secondary-fixed": "#c0d1ff",
        "inverse-primary": "#f96924",
        "surface-dim": "#ffc9aa",
        "secondary-container": "#c0d1ff",
        "on-tertiary": "#ffeff1",
        surface: "#fff4f0",
        "error-container": "#fb5151",
        "on-tertiary-container": "#66454e",
        "on-background": "#4b2409",
        "on-error-container": "#570008",
        outline: "#9f6b49",
        "on-primary-fixed": "#000000"
      },
      fontFamily: {
        headline: ["Noto Serif"],
        body: ["Inter"],
        label: ["Plus Jakarta Sans"]
      },
      borderRadius: { DEFAULT: "1rem", lg: "2rem", xl: "3rem", full: "9999px" }
    }
  }
};

export default config;

