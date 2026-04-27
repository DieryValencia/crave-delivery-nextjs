import React from 'react'
import { Button } from './Button'

export const PromotionSection: React.FC = () => {
  return (
    <section className="bg-primary text-white rounded-xl p-xl overflow-hidden relative mb-2xl">
      <div className="relative z-10 max-w-md">
        <h2 className="font-display-lg mb-md">Join the Crave Club</h2>
        <p className="font-body-lg mb-xl opacity-90">
          Enjoy unlimited free delivery and exclusive member-only discounts at your favorite local spots.
        </p>
        <Button variant="primary" className="bg-white text-primary hover:bg-surface-container">
          Start Free Trial
        </Button>
      </div>
      <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary-container rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute right-12 top-0 w-32 h-32 bg-rose-400 rounded-full opacity-20 blur-xl"></div>
    </section>
  )
}
