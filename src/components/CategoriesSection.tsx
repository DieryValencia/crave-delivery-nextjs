'use client'

import React, { useState } from 'react'
import { Badge } from './Badge'
import { categories } from '@/data'

export const CategoriesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('1')

  return (
    <section className="mb-2xl">
      <div className="flex justify-between items-end mb-xl">
        <div>
          <span className="text-primary-container font-label-bold uppercase tracking-widest text-xs">
            Categories
          </span>
          <h2 className="font-headline-md text-on-surface">Popular Cuisines</h2>
        </div>
        <button className="text-primary font-label-bold flex items-center gap-1 hover:underline">
          See all{' '}
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
      <div className="flex gap-md overflow-x-auto pb-4 no-scrollbar">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            <Badge
              variant={activeCategory === category.id ? 'filled' : 'outlined'}
              icon={category.icon}
            >
              {category.name}
            </Badge>
          </div>
        ))}
      </div>
    </section>
  )
}
