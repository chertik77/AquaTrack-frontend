import type { ButtonHTMLAttributes } from 'react'

import { forwardRef } from 'react'

import { cn } from '@/utils'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'base' | 'cancel' | 'outline'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'base', className, children, ...props }, ref) => (
    <button
      type='button'
      ref={ref}
      className={cn(
        `h-2xl rounded-[30px] bg-brand text-base font-bold transition-colors
        disabled:cursor-not-allowed disabled:opacity-50 hocus:bg-brand-hover
        tablet:h-[60px] tablet:text-md`,
        variant === 'cancel' &&
          'w-full bg-gray-secondary text-gray/30 hocus:text-gray tablet:w-[176px]',
        variant === 'outline' &&
          `border border-gray bg-transparent hocus:border-brand-hover hocus:bg-transparent
          hocus:text-brand-hover`,
        className
      )}
      {...props}>
      {children}
    </button>
  )
)
