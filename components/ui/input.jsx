import *'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes {}

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
