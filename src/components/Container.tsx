import clsx from 'clsx';
import React from 'react';

export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...rest}
    >
      {children}
    </div>
  );
};
