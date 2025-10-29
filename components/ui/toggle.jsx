'use client';

import *'react';
import *'@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover=on]=on],
  {
    variants: {
      variant: {
        default,
        outline,
      },
      size: {
        default,
        sm,
        lg,
      },
    },
    defaultVariants: {
      variant,
      size,
    },
  }
);

const Toggle = React.forwardRef<
  React.ElementRef,
  React.ComponentPropsWithoutRef &
    VariantProps
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
