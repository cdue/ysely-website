import colors from '@/theme/foundations/colors';

export const baseStyles: Record<string, string> = {
  solid:
    'group inline-flex items-center justify-center rounded-md py-2 px-4 text-base font-medium shadow-md focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-4 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 disabled:focus:outline-none disabled:shadow-sm',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-md py-2 px-4 text-base font-medium shadow-md disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 disabled:focus:outline-none disabled:ring-0 disabled:shadow-sm',
};

export const variantStyles: Record<string, Record<string, string>> = {
  solid: {
    primary:
      'bg-primary-600 text-white hover:text-slate-100 hover:bg-primary-500 active:bg-primary-800 active:text-primary-050 focus-visible:outline-primary-600 disabled:bg-primary-50',
    secondary:
      'bg-secondary-500 text-white hover:text-slate-100 hover:bg-secondary-400 active:bg-secondary-700 active:text-secondary-050 focus-visible:outline-secondary-600',
    ternary:
      'bg-ternary-500 text-white hover:text-slate-100 hover:bg-ternary-400 active:bg-ternary-700 active:text-ternary-050 focus-visible:outline-ternary-600',
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-slate-900 hover:bg-slate-100 active:bg-slate-300 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    primary:
      'ring-primary-300 text-primary-500 hover:text-primary-700 hover:ring-primary-500 hover:ring-2 active:bg-slate-100 active:text-primary-600 focus-visible:outline-primary-600 ',
    secondary:
      'ring-secondary-300 text-secondary-500 hover:text-secondary-700 hover:ring-secondary-500 hover:ring-2 active:bg-slate-100 active:text-secondary-600 focus-visible:outline-secondary-600',
    ternary:
      'ring-ternary-300 text-ternary-500 hover:text-ternary-700 hover:ring-ternary-500 hover:ring-2 active:bg-slate-100 active:text-ternary-600 focus-visible:outline-ternary-600',
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:ring-slate-300',
    white:
      'bg-slate-200 ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },
};

export const disabledSpinnerVariantColors: Record<
  string,
  Record<string, string>
> = {
  solid: {
    primary: colors.slate[500],
    secondary: colors.slate[500],
    ternary: colors.slate[500],
    slate: colors.slate[500],
    blue: colors.slate[500],
    white: colors.slate[500],
  },
  outline: {
    primary: colors.primary[500],
    secondary: colors.slate[500],
    ternary: colors.slate[500],
    slate: colors.slate[500],
    blue: colors.slate[500],
    white: colors.slate[500],
  },
};
