import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'filled' | 'outlined'
  icon?: string
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'filled',
  icon,
  className = '',
}) => {
  const baseStyles = 'flex-none px-lg py-sm rounded-full flex items-center gap-2 cursor-pointer font-label-md transition-colors whitespace-nowrap'

  const variantStyles = {
    filled: 'bg-primary-container text-white shadow-md',
    outlined: 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high',
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="material-symbols-outlined text-[20px]">{icon}</span>}
      <span>{children}</span>
    </div>
  )
}
