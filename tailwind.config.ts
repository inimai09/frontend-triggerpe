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
        headline: ["'Fraunces'", 'serif'],
        code: ['monospace'],
      },
      colors: {
        background: '#001A1A',
        foreground: '#FFFFFF',
        card: {
          DEFAULT: '#000000',
          foreground: '#FFFFFF',
        },
        popover: {
          DEFAULT: '#000000',
          foreground: '#FFFFFF',
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
          DEFAULT: '#111827',
          foreground: '#9CA3AF',
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
        border: 'rgba(255,255,255,0.1)',
        input: 'rgba(255,255,255,0.1)',
        ring: '#00ACC1',
        sidebar: {
          DEFAULT: '#000000',
          foreground: '#FFFFFF',
          primary: '#00ACC1',
          'primary-foreground': '#FFFFFF',
          accent: 'rgba(0,172,193,0.1)',
          'accent-foreground': '#00ACC1',
          border: 'rgba(255,255,255,0.1)',
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
