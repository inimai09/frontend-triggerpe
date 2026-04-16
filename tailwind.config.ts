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
        background: '#e0f7fa',
        foreground: '#004d40',
        card: {
          DEFAULT: '#ffffff',
          foreground: '#004d40',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#004d40',
        },
        primary: {
          DEFAULT: '#00acc1',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#b2ebf2',
          foreground: '#006064',
        },
        muted: {
          DEFAULT: '#f0fdfa',
          foreground: '#5eead4',
        },
        accent: {
          DEFAULT: '#00acc1',
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
        border: '#b2ebf2',
        input: '#b2ebf2',
        ring: '#00acc1',
        sidebar: {
          DEFAULT: '#ffffff',
          foreground: '#004d40',
          primary: '#00acc1',
          'primary-foreground': '#ffffff',
          accent: '#e0f7fa',
          'accent-foreground': '#00acc1',
          border: '#b2ebf2',
          ring: '#00acc1',
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
