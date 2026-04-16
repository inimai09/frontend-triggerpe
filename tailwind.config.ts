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
        background: '#020c1b',
        foreground: '#f8fafc',
        card: {
          DEFAULT: '#051a3d',
          foreground: '#f8fafc',
        },
        popover: {
          DEFAULT: '#051a3d',
          foreground: '#f8fafc',
        },
        primary: {
          DEFAULT: '#0ea5e9',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#0c2447',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#0c2447',
          foreground: '#94a3b8',
        },
        accent: {
          DEFAULT: '#0ea5e9',
          foreground: '#ffffff',
        },
        success: {
          DEFAULT: '#10b981',
          foreground: '#ffffff',
        },
        warning: {
          DEFAULT: '#f59e0b',
          foreground: '#ffffff',
        },
        danger: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        border: '#162e52',
        input: '#162e52',
        ring: '#0ea5e9',
        sidebar: {
          DEFAULT: '#051a3d',
          foreground: '#f8fafc',
          primary: '#0ea5e9',
          'primary-foreground': '#ffffff',
          accent: '#0c2447',
          'accent-foreground': '#0ea5e9',
          border: '#162e52',
          ring: '#0ea5e9',
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
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
