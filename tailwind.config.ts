import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Light theme colors
        light: {
          primary: '#1a1a1a',
          secondary: '#2a2a2a',
          accent: '#fbbf24', // yellow-400
          text: '#1f2937',
          'text-secondary': '#6b7280',
          background: '#ffffff',
          'background-secondary': '#f9fafb',
          border: '#e5e7eb',
        },
        // Dark theme colors
        dark: {
          primary: '#0a0a0a',
          secondary: '#1a1a1a',
          accent: '#fbbf24', // yellow-400
          text: '#ffffff',
          'text-secondary': '#d1d5db',
          background: '#0a0a0a',
          'background-secondary': '#1a1a1a',
          border: '#374151',
        }
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
