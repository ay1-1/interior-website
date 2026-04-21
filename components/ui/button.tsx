import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:brightness-110 active:brightness-90 shadow-sm hover:shadow-soft-lg transition-all',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 shadow-sm hover:shadow-md',
        outline:
          'border-2 border-primary bg-transparent text-primary hover:bg-primary/5 shadow-xs hover:shadow-soft transition-all',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md',
        ghost:
          'hover:bg-primary/5 hover:text-primary transition-colors duration-200',
        link: 'text-primary underline-offset-4 hover:underline',
        accent: 'bg-accent text-accent-foreground hover:brightness-110 shadow-sm hover:shadow-soft-lg transition-all',
      },
      size: {
        default: 'h-11 px-6 py-3',
        sm: 'h-9 rounded-md gap-1.5 px-4 text-xs',
        lg: 'h-14 rounded-lg px-9 text-base tracking-wide',
        icon: 'size-11',
        'icon-sm': 'size-9',
        'icon-lg': 'size-14',
      },
      radius: {
        none: 'rounded-none',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      radius: 'lg',
    },
  },
)

function Button({
  className,
  variant,
  size,
  radius,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, radius, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
