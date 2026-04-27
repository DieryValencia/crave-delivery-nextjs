'use client'

import React from 'react'
import Image from 'next/image'
import { userImage } from '@/data'

export const TopNavigation: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FCFCFC] shadow-sm">
      <div className="flex justify-between items-center px-5 py-4 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black text-rose-500 italic tracking-tighter font-['Plus_Jakarta_Sans']">
            Crave & Co
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
            <Image
              src={userImage}
              alt="User"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <button className="material-symbols-outlined text-rose-500 hover:opacity-80 transition-opacity active:scale-95 transition-transform">
            shopping_cart
          </button>
        </div>
      </div>
    </nav>
  )
}
