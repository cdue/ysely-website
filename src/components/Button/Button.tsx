import clsx from 'clsx';
import React from 'react';
import {
  baseStyles,
  disabledSpinnerVariantColors,
  variantStyles,
} from '@/theme/components/button';
import Spinner from '../Spinner';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
  color?: string;
  isLoading?: boolean;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'solid',
  color = 'slate',
  isLoading = false,
  disabled = false,
  className,
  children,
  ...props
}) => {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );

  return (
    <button
      type={type}
      className={className}
      {...props}
      disabled={disabled || isLoading}
    >
      {isLoading && (
        <Spinner color={disabledSpinnerVariantColors[variant][color]} />
      )}
      {children}
    </button>
  );
};

export default Button;
