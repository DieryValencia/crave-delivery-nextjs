'use client'

import React from 'react'
import Image from 'next/image'

interface WelcomeScreenProps {
  onGetStarted: () => void
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col h-full w-full p-6">
      <div className="flex-1 relative mt-12">
        <Image 
          src="/welcome_collage.png" 
          alt="Food Collage" 
          width={400} 
          height={400} 
          className="w-full object-contain"
        />
      </div>

      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-[36px] font-extrabold text-black leading-tight mb-4">
          Test the Joy of <br /> Delivery
        </h1>
        <p className="text-[16px] font-medium text-brand-gray px-8 mb-10">
          Unlock a world of culinary delights, right at your fingertips
        </p>

        <button 
          onClick={onGetStarted}
          className="w-full max-w-[280px] bg-brand-accent text-white font-bold py-5 rounded-2xl shadow-lg hover:brightness-110 transition-all active:scale-95"
        >
          Get Started
        </button>
      </div>
    </div>
  )
}
