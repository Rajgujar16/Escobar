import *'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus,
  {
    variants: {
      variant: {
        default,
        secondary,
        destructive,
        outline,
      },
    },
    defaultVariants: {
      variant,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes,
    VariantProps {}

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
