import { baseStyles, variantStyles } from '@/theme/components/button';
import clsx from 'clsx';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { HTMLProps, FC } from 'react';

type LinkProps = {
  variant?: string;
  color?: string;
} & NextLinkProps &
  Omit<HTMLProps<HTMLAnchorElement>, 'ref'>;

const LinkButton: FC<LinkProps> = ({
  variant = 'solid',
  color = 'primary',
  className,
  ...rest
}) => {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );

  return <NextLink className={className} {...rest} />;
};

export default LinkButton;
