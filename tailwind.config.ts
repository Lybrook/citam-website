import type { Config } from "tailwindcss";

export default {
      // Enable dark mode
  darkMode: ["class"],
  // Configure content sources
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Configure container
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Configure colors based on the church's theme
      colors: {
        // Red, white, and black theme
        primary: "#E30613", // Red
        secondary: "#FFFFFF", // White
        accent: "#000000", // Black
        
        // Default colors for shadcn
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Theme colors
        "theme-red": {
          DEFAULT: "#E30613",
          50: "#FFCDD2",
          100: "#EF9A9A",
          200: "#E57373",
          300: "#EF5350",
          400: "#F44336",
          500: "#E30613",
          600: "#D32F2F",
          700: "#C62828",
          800: "#B71C1C",
          900: "#8B0000",
        },
      },
      // Configure fonts
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      // Configure border radius
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Configure keyframes
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      // Configure animations
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
