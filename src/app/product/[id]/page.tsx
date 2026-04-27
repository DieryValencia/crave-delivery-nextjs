'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter, useParams } from 'next/navigation'
import { foodItems } from '@/data'

export default function ProductDetail() {
  const router = useRouter()
  const params = useParams()
  const product = foodItems.find(item => item.id === params.id)
  
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('Small')

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>
  }

  return (
    <div className="flex flex-col h-full w-full p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 mt-4">
        <button 
          onClick={() => router.back()}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-black">arrow_back</span>
        </button>
        <h2 className="text-[20px] font-extrabold text-black">Details</h2>
        <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-black">favorite</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Title and Rating */}
        <div className="mb-6">
          <h1 className="text-[32px] font-extrabold text-black mb-1">
            {product.name}
          </h1>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-brand-accent text-[18px] filled">star</span>
            <span className="text-[14px] font-medium text-brand-gray">
              {product.rating} ({product.reviews} review)
            </span>
          </div>
        </div>

        {/* Product Image and Stats Grid */}
        <div className="flex gap-4 mb-8">
          {/* Stats */}
          <div className="flex flex-col gap-6 w-24">
            <div>
              <p className="text-[14px] font-extrabold text-gray-400 mb-1">Price</p>
              <p className="text-[20px] font-extrabold text-black">$ {product.price.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-[14px] font-extrabold text-gray-400 mb-1">Calories</p>
              <p className="text-[18px] font-extrabold text-black">{product.calories}</p>
            </div>
            <div>
              <p className="text-[14px] font-extrabold text-gray-400 mb-1">Diameter</p>
              <p className="text-[18px] font-extrabold text-black">{product.diameter}</p>
            </div>
          </div>

          {/* Large Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-black/10 rounded-full blur-2xl translate-y-4"></div>
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="rounded-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-6 mb-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-white shadow-lg active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">remove</span>
            </button>
            <span className="text-[20px] font-extrabold text-black">
              {quantity.toString().padStart(2, '0')}
            </span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-white shadow-lg active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-8">
          <h3 className="text-[18px] font-extrabold text-black mb-4">Size</h3>
          <div className="flex gap-4">
            {['Small', 'Medium', 'Large'].map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-6 py-2 rounded-2xl font-extrabold transition-all ${
                  size === s 
                    ? 'bg-brand-light-salmon text-black' 
                    : 'bg-gray-100 text-black'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-[15px] font-medium text-black leading-relaxed">
            {product.description} <strong>more_</strong>
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-auto pt-4 pb-6">
        <button className="w-full bg-brand-accent text-white font-bold py-5 rounded-2xl shadow-lg hover:brightness-110 transition-all active:scale-95">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
