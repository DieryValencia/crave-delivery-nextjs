'use client'

import React, { useState } from 'react'
import { navItems } from '@/data'

export const BottomNavigation: React.FC = () => {
  const [active, setActive] = useState('home')

  return (
    <nav className="fixed bottom-0 w-full rounded-t-[32px] z-50 bg-white/90 backdrop-blur-lg shadow-bottom-nav border-t border-gray-100">
      <div className="flex justify-around items-center pt-3 pb-8 px-4 w-full">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex flex-col items-center justify-center px-4 py-1 rounded-2xl transition-colors active:scale-90 duration-200 ease-out ${
              active === item.id
                ? 'text-rose-500 bg-rose-50/50'
                : 'text-gray-400 hover:text-rose-400'
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontVariationSettings: active === item.id ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              {item.icon}
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold tracking-wide">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
