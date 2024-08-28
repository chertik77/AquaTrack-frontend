'use client'

import type { InputHTMLAttributes } from 'react'
import type { FieldErrors } from 'react-hook-form'

import { forwardRef, useState } from 'react'
import { ErrorMessage } from '@hookform/error-message'

import { cn } from '@/utils'

import { Icon } from './Icon'

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  inputName: string
  isPasswordInput?: boolean
  inputPasswordPlaceholder?: string
  errors: FieldErrors
}

export const Field = forwardRef<HTMLInputElement, FieldProps>(
  (
    {
      className,
      inputName,
      isPasswordInput,
      inputPasswordPlaceholder,
      errors,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <>
        {isPasswordInput ? (
          <div className='relative w-full'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder={inputPasswordPlaceholder}
              className={cn(
                `hide-password-toggle h-2xl rounded-[15px] border border-gray/20 bg-transparent
                  px-4 text-md font-normal outline-none transition-colors autofill:bg-clip-text
                  autofill:text-fill-black focus:border-gray/40 tablet:h-[56px]`,
                className
                // {
                //   'mb-3.5': errors[inputName],
                //   'mb-6': !errors[inputName]
                // }
              )}
              {...props}
              ref={ref}
            />
            <button
              type='button'
              className='absolute right-4 top-lg'
              onClick={() => setShowPassword(prev => !prev)}>
              {showPassword ? (
                <Icon
                  name='eye'
                  className='size-5'
                />
              ) : (
                <Icon
                  name='eye-off'
                  className='size-5'
                />
              )}
            </button>
          </div>
        ) : (
          <input
            type='text'
            className={cn(
              `h-2xl rounded-[15px] border border-gray/20 bg-transparent px-4 text-md
                font-normal outline-none transition-colors autofill:bg-clip-text
                autofill:text-fill-black focus:border-gray/40 tablet:h-[56px]`,
              className,
              errors[inputName] && 'mb-2'
            )}
            ref={ref}
            {...props}
          />
        )}
        <ErrorMessage
          errors={errors}
          name={inputName}
          render={({ message }) => (
            <p className='mb-3.5 text-red-600'>{message}</p>
          )}
        />
      </>
    )
  }
)
