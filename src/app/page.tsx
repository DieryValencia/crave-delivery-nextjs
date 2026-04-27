'use client'

import React from 'react'
import {
  TopNavigation,
  BottomNavigation,
  HeroSection,
  CategoriesSection,
  FeaturedDealsSection,
  PromotionSection,
  FloatingChatButton,
} from '@/components'

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <TopNavigation />

      <main className="relative pt-24 min-h-screen pb-32">
        <div className="max-w-7xl mx-auto px-5">
          <HeroSection />
          <CategoriesSection />
          <FeaturedDealsSection />
          <PromotionSection />
        </div>
      </main>

      <FloatingChatButton />
      <BottomNavigation />
    </div>
  )
}
