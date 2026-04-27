'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from './Button'
import { heroImages } from '@/data'

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center mb-12 pt-2">
      {/* Food Images Asymmetrical Layout */}
      <div className="relative w-full max-w-md h-[340px] flex items-end justify-center mb-8">
        {/* Pizza (left, large, dominant) */}
        <div className="absolute left-0 top-0 w-[210px] h-[210px] rounded-3xl overflow-hidden shadow-xl border-4 border-white z-20" style={{boxShadow:'0 8px 32px rgba(255,94,94,0.10)'}}>
          <Image src={heroImages.pizza} alt="Pizza" fill className="object-cover" />
        </div>
        {/* Burger (right, vertical align) */}
        <div className="absolute right-0 top-10 w-[140px] h-[140px] rounded-2xl overflow-hidden shadow-lg border-4 border-white z-10" style={{boxShadow:'0 6px 18px rgba(255,94,94,0.10)'}}>
          <Image src={heroImages.burger} alt="Burger" fill className="object-cover" />
        </div>
        {/* Poke Bowl (centered below) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[110px] h-[110px] rounded-xl overflow-hidden shadow-md border-4 border-white z-30 bg-white" style={{boxShadow:'0 4px 12px rgba(255,94,94,0.08)'}}>
          <Image src={heroImages.pokeBowl} alt="Poke Bowl" fill className="object-cover" />
        </div>
      </div>

      {/* Title and Description */}
      <div className="w-full flex flex-col items-center mt-2">
        <h1 className="font-display-lg text-[2.3rem] leading-[2.7rem] md:text-[2.8rem] md:leading-[3.2rem] font-extrabold text-on-surface text-center mb-3 tracking-tight">
          Test the Joy of <span className="text-primary-container">Delivery</span>
        </h1>
        <p className="font-body-lg text-secondary text-base md:text-lg text-center mb-6 max-w-xs md:max-w-md">
          Unlock a world of culinary delights, right at your fingertips. From sizzling street food to gourmet fine dining.
        </p>
        <div className="flex flex-row gap-3 w-full justify-center">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">View Menu</Button>
        </div>
      </div>
    </section>
  )
}
