'use client'

import React from 'react'
import { Card } from './Card'
import { restaurants } from '@/data'

export const FeaturedDealsSection: React.FC = () => {
  return (
    <section className="mb-2xl">
      <h2 className="font-headline-md text-on-surface mb-xl">Featured Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            image={restaurant.image}
            badge={restaurant.badge}
            title={restaurant.name}
            rating={restaurant.rating}
            description={`${restaurant.cuisineType} • ${restaurant.priceLevel}`}
            deliveryTime={restaurant.deliveryTime}
            className={restaurant.id === '3' ? 'hidden lg:flex' : ''}
          />
        ))}
      </div>
    </section>
  )
}
