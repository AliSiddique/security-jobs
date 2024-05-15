import type { Config } from 'tailwindcss';
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    fontSize: {
      xs: [
          "0.75rem",
          {
            lineHeight: "1rem",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "2rem",
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "2rem",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        "3xl": [
          "2rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        "4xl": [
          "2.5rem",
          {
            lineHeight: "3.5rem",
          },
        ],
        "5xl": [
          "3rem",
          {
            lineHeight: "3.5rem",
          },
        ],
        "6xl": [
          "3.75rem",
          {
            lineHeight: "1",
          },
        ],
        "7xl": [
          "4.5rem",
          {
            lineHeight: "1.1",
          },
        ],
        "8xl": [
          "6rem",
          {
            lineHeight: "1",
          },
        ],
        "9xl": [
          "8rem",
          {
            lineHeight: "1",
          },
        ],
        "10xl": [
          "8.5rem",
          {
            lineHeight: "1",
          },
        ],
        "11xl": [
          "9rem",
          {
            lineHeight: "1",
          },
        ],
        "12xl": [
          "9.5rem",
          {
            lineHeight: "1",
          },
        ],
        "13xl": [
          "10rem",
          {
            lineHeight: "1",
          },
        ],
        "14xl": [
          "11rem",
          {
            lineHeight: "1",
          },
        ],
      },
    extend: {
      colors: {
        black:"hsl(0,0%,5%)",
        white:"hsl(0,0%,90%)",
                 },
                 fontFamily: {
                  display: ["Clash Display", ...defaultTheme.fontFamily.sans],
                  sans: ["Inter", ...defaultTheme.fontFamily.sans],
                  mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
                },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/forms')],
} satisfies Config;

export default config;
