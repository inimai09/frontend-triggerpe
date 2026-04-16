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
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F1F5F9',
          foreground: '#64748B',
        },
        accent: {
          DEFAULT: '#E0F7FA',
          foreground: '#006064',
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
        'sparkle': {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'sparkle': 'sparkle 2s infinite',
        'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
