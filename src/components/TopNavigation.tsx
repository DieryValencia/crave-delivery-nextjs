'use client'

import React from 'react'

import Image from 'next/image'

// Profile image (Woman with red scarf - local asset)
const profileImg = "/profile.png";

export const TopNavigation: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50" style={{background: 'linear-gradient(90deg, #f8e1e7 0%, #fbeee3 100%)'}}>
      <div className="flex items-center justify-between px-4 py-2 w-full max-w-2xl mx-auto min-h-[56px]">
        {/* Left: Profile Image */}
        <div className="flex items-center">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <Image src={profileImg} alt="Profile" width={36} height={36} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Center: Location */}
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-black text-lg">location_on</span>
          <span className="text-base font-semibold text-black">Canada</span>
          <span className="material-symbols-outlined text-black text-base">expand_more</span>
        </div>

        {/* Right: Menu Icon in Circle */}
        <div className="flex items-center">
          <span className="flex items-center justify-center w-9 h-9 rounded-full" style={{background:'#f8e1e7'}}>
            <span className="material-symbols-outlined text-black text-2xl">menu</span>
          </span>
        </div>
      </div>
    </nav>
  )
}
