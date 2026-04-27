import React from 'react'
import Image from 'next/image'

interface CardProps {
  children?: React.ReactNode
  image?: string
  badge?: string
  title?: string
  rating?: number
  description?: string
  deliveryTime?: string
  onClick?: () => void
  className?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  image,
  badge,
  title,
  rating,
  description,
  deliveryTime,
  onClick,
  className = '',
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg p-md shadow-card border border-surface-container flex flex-col gap-md group hover:translate-y-[-4px] transition-transform cursor-pointer ${className}`}
    >
      {image && (
        <div className="relative h-48 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title || 'Restaurant'}
            fill
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {badge && (
            <div className="absolute top-4 left-4 bg-primary-container text-white px-md py-base rounded-full font-label-bold text-xs">
              {badge}
            </div>
          )}
        </div>
      )}

      {(title || rating || description || deliveryTime) && (
        <div className="px-base">
          {(title || rating) && (
            <div className="flex justify-between items-start mb-base">
              {title && <h3 className="font-title-sm text-on-surface">{title}</h3>}
              {rating && (
                <div className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-amber-400 text-[18px] filled"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-label-bold text-on-surface">{rating}</span>
                </div>
              )}
            </div>
          )}

          {description && (
            <p className="font-body-sm text-secondary mb-md">{description}</p>
          )}

          {deliveryTime && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-secondary font-label-md">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>{deliveryTime}</span>
              </div>
              <button className="bg-surface-container-low p-sm rounded-full text-primary hover:bg-primary-container hover:text-white transition-colors">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          )}
        </div>
      )}

      {children}
    </div>
  )
}
