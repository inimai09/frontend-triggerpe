import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Inter'", 'sans-serif'],
        headline: ["'Space Grotesk'", 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: '#E0F7FA',
        foreground: '#006064',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#006064',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#006064',
        },
        primary: {
          DEFAULT: '#00ACC1',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#00838F',
          foreground: '#E0F7FA',
        },
        muted: {
          DEFAULT: '#F0FDFD',
          foreground: '#00838F',
        },
        accent: {
          DEFAULT: '#00ACC1',
          foreground: '#FFFFFF',
        },
        success: {
          DEFAULT: '#26A69A',
          foreground: '#FFFFFF',
        },
        warning: {
          DEFAULT: '#FFB74D',
          foreground: '#FFFFFF',
        },
        danger: {
          DEFAULT: '#EF5350',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#EF5350',
          foreground: '#FFFFFF',
        },
        border: '#E2E8F0',
        input: '#E2E8F0',
        ring: '#00ACC1',
        sidebar: {
          DEFAULT: '#FFFFFF',
          foreground: '#006064',
          primary: '#00ACC1',
          'primary-foreground': '#FFFFFF',
          accent: '#E0F7FA',
          'accent-foreground': '#00ACC1',
          border: '#E2E8F0',
          ring: '#00ACC1',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
