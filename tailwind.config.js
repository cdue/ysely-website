const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('./src/theme/foundations/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
        display: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        'primary-900': colors.primary[900],
        'primary-800': colors.primary[800],
        'primary-700': colors.primary[700],
        'primary-600': colors.primary[600],
        'primary-500': colors.primary[500],
        'primary-400': colors.primary[400],
        'primary-300': colors.primary[300],
        'primary-200': colors.primary[200],
        'primary-100': colors.primary[100],
        'primary-050': colors.primary[50],
        'secondary-900': colors.secondary[900],
        'secondary-800': colors.secondary[800],
        'secondary-700': colors.secondary[700],
        'secondary-600': colors.secondary[600],
        'secondary-500': colors.secondary[500],
        'secondary-400': colors.secondary[400],
        'secondary-300': colors.secondary[300],
        'secondary-200': colors.secondary[200],
        'secondary-100': colors.secondary[100],
        'secondary-050': colors.secondary[50],
        'ternary-900': colors.ternary[900],
        'ternary-800': colors.ternary[800],
        'ternary-700': colors.ternary[700],
        'ternary-600': colors.ternary[600],
        'ternary-500': colors.ternary[500],
        'ternary-400': colors.ternary[400],
        'ternary-300': colors.ternary[300],
        'ternary-200': colors.ternary[200],
        'ternary-100': colors.ternary[100],
        'ternary-050': colors.ternary[50],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
