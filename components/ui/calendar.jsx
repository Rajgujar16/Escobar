'use client';

import *'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months,
        month,
        caption,
        caption_label,
        nav,
        nav_button: cn(
          buttonVariants({ variant),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous,
        nav_button_next,
        table,
        head_row,
        head_cell,
        row,
        cell)])])])])],
        day: cn(
          buttonVariants({ variant),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100'
        ),
        day_range_end,
        day_selected,
        day_today,
        day_outside,
        day_disabled,
        day_range_middle,
        day_hidden,
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
