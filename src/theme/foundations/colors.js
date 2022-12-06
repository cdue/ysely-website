// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindColors = require('tailwindcss/colors');

const colors = {
  slate: tailwindColors.slate,
  primary: {
    50: '#FEE6FF',
    100: '#CABAFA',
    200: '#A98DF2',
    300: '#8C61EB',
    400: '#7845E9',
    500: '#661DDE',
    600: '#521FC0',
    700: '#3A1D97',
    800: '#231371',
    900: '#0D0743',
  },
  secondary: {
    50: '#EDFEDE',
    100: '#D6F7B6',
    200: '#C0F08B',
    300: '#ACEA60',
    400: '#9CE434',
    500: '#88CB1B',
    600: '#609E12',
    700: '#3D710A',
    800: '#1E4403',
    900: '#0A2F00',
  },
  ternary: {
    50: '#FFEFDA',
    100: '#FFDAAD',
    200: '#FFC67D',
    300: '#FFB64B',
    400: '#FFA91A',
    500: '#E69700',
    600: '#B36A00',
    700: '#814300',
    800: '#4E2200',
    900: '#1E0800',
  },
};

module.exports = colors;
