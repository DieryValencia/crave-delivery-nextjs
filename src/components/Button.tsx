import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  isLoading = false,
  disabled,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-title-sm rounded-full transition-all active:scale-95 hover:opacity-90 flex items-center justify-center gap-2'

  const variantStyles = {
    primary: 'bg-primary-container text-white shadow-[0_8px_24px_rgba(255,94,94,0.3)]',
    secondary: 'bg-tertiary-fixed text-primary',
    tertiary: 'bg-surface-container-lowest border border-surface-container text-on-surface',
    ghost: 'text-primary hover:bg-primary-fixed/20',
  }

  const sizeStyles = {
    sm: 'px-md py-sm text-label-md',
    md: 'px-lg py-md',
    lg: 'px-xl py-lg',
  }

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin">⏳</span>
      ) : (
        children
      )}
    </button>
  )
}
