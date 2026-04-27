'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from './Button'
import { heroImages } from '@/data'

export const HeroSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center mb-2xl">
      <div className="order-2 lg:order-1">
        <h1 className="font-display-lg text-[48px] md:text-[64px] leading-tight mb-md text-on-surface">
          Test the Joy of <span className="text-primary-container">Delivery</span>
        </h1>
        <p className="font-body-lg text-secondary mb-xl max-w-md">
          Unlock a world of culinary delights, right at your fingertips. From sizzling street food to gourmet fine dining.
        </p>
        <div className="flex flex-col sm:flex-row gap-md">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">View Menu</Button>
        </div>
      </div>

      <div className="order-1 lg:order-2 relative h-[400px] md:h-[550px]">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-md h-full">
          {/* Large pizza image */}
          <div className="col-span-4 row-span-4 rounded-xl overflow-hidden shadow-lg transform -rotate-2">
            <Image
              src={heroImages.pizza}
              alt="Pizza"
              fill
              className="w-full h-full object-cover"
            />
          </div>

          {/* Burger image */}
          <div className="col-span-2 row-span-3 col-start-5 row-start-2 rounded-xl overflow-hidden shadow-lg transform rotate-3">
            <Image
              src={heroImages.burger}
              alt="Burger"
              fill
              className="w-full h-full object-cover"
            />
          </div>

          {/* Poke bowl image */}
          <div className="col-span-3 row-span-2 col-start-2 row-start-5 rounded-xl overflow-hidden shadow-lg transform -rotate-1">
            <Image
              src={heroImages.pokeBowl}
              alt="Poke Bowl"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
