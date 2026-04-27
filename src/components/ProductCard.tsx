'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ProductCardProps {
  id: string
  name: string
  image: string
  rating: number
  distance: string
  deliveryTime: string
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  rating,
  distance,
  deliveryTime,
}) => {
  const router = useRouter()
  
  return (
    <div 
      onClick={() => router.push(`/product/${id}`)}
      className="bg-brand-light-salmon rounded-[2.5rem] p-4 flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition-shadow active:scale-95"
    >
      <div className="relative w-28 h-28 mb-3">
        <div className="absolute inset-0 bg-black/5 rounded-full blur-md translate-y-2"></div>
        <Image 
          src={image} 
          alt={name} 
          width={112} 
          height={112} 
          className="rounded-full object-cover relative z-10"
        />
      </div>
      
      <h4 className="text-[16px] font-extrabold text-black mb-1 line-clamp-1">
        {name}
      </h4>
      
      <div className="flex gap-0.5 mb-2">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={`material-symbols-outlined text-[14px] ${i < Math.floor(rating) ? 'text-brand-accent filled' : 'text-gray-300'}`}
          >
            star
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-1 text-[11px] font-medium text-brand-gray">
        <span>{distance}</span>
        <span className="w-1 h-1 bg-brand-accent rounded-full"></span>
        <span>{deliveryTime}</span>
      </div>
    </div>
  )
}
