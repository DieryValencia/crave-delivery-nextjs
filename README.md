# Crave & Co - Food Delivery App UI

A modern, pixel-perfect food delivery application UI built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🎯 Features

- **Responsive Mobile-First Design** - Optimized for mobile devices with graceful desktop scaling
- **Component-Based Architecture** - Reusable, maintainable components
- **Modern UI/UX** - Clean, minimalist design with smooth transitions and animations
- **Tailwind CSS** - Comprehensive styling with custom theme colors and spacing
- **TypeScript** - Type-safe development with full type coverage
- **Next.js 14** - Latest framework features with App Router

## 📋 Screens Included

1. **Home Screen**
   - Navigation bar with user profile and shopping cart
   - Hero section with food imagery
   - Popular cuisines category selector
   - Featured deals cards
   - Promotional banner ("Join the Crave Club")
   - Floating chat button
   - Bottom navigation bar

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom-built React components
- **Images**: Next.js Image Optimization

## 📦 Installation

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

### Setup

1. **Navigate to the project directory:**
   ```bash
   cd crave-delivery-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 🚀 Development

### Available Scripts

- `npm run dev` - Start development server (hot reload enabled)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable React components
│   ├── Button.tsx
│   ├── Badge.tsx
│   ├── Card.tsx
│   ├── TopNavigation.tsx
│   ├── BottomNavigation.tsx
│   ├── HeroSection.tsx
│   ├── CategoriesSection.tsx
│   ├── FeaturedDealsSection.tsx
│   ├── PromotionSection.tsx
│   ├── FloatingChatButton.tsx
│   └── index.ts
├── types/                # TypeScript interfaces
│   └── index.ts
└── data/                 # Mock data
    └── index.ts
```

## 🎨 Design System

### Color Palette

The app uses a custom Material Design-inspired color palette:
- **Primary**: #b3272e (Deep Red)
- **Primary Container**: #ff5e5e (Bright Red)
- **Secondary**: #5d5f5f (Gray)
- **Tertiary**: #735858 (Muted Brown)
- **Surface**: #fcf9f8 (Off White)

### Typography

- **Display Large**: 32px / 700 weight
- **Headline Medium**: 24px / 700 weight
- **Title Small**: 18px / 600 weight
- **Body Large**: 16px / 400 weight
- **Body Small**: 14px / 400 weight
- **Label Bold**: 12px / 700 weight

### Spacing Scale

- **Base**: 4px
- **XS**: 8px
- **SM**: 12px
- **MD**: 16px
- **LG**: 24px
- **XL**: 32px
- **2XL**: 48px

## 🔧 Component Usage

### Button Component

```tsx
import { Button } from '@/components'

<Button variant="primary" size="lg">
  Get Started
</Button>

// Variants: primary, secondary, tertiary, ghost
// Sizes: sm, md, lg
```

### Card Component

```tsx
import { Card } from '@/components'

<Card
  image="https://..."
  badge="-30% OFF"
  title="Restaurant Name"
  rating={4.8}
  description="Italian • Pizza • $$"
  deliveryTime="20-30 min"
/>
```

### Badge Component

```tsx
import { Badge } from '@/components'

<Badge variant="filled" icon="local_pizza">
  Italian
</Badge>

// Variants: filled, outlined
```

## 📱 Responsive Behavior

The UI is fully responsive:
- **Mobile** (< 640px) - Single column layout, optimized for touch
- **Tablet** (640px - 1024px) - 2-column grids where applicable
- **Desktop** (> 1024px) - 3-column grids, full layout

## 🎭 Mock Data

The app includes mock data for:
- Restaurant listings (with ratings, delivery times, prices)
- Food categories
- Navigation items
- Hero section images

To modify or extend, edit `src/data/index.ts`.

## 🌐 Image Handling

All images are sourced from Google Images and optimized through Next.js Image component. Remote images require configuration in `next.config.js`.

## 📄 License

This project is part of the Stitch Modern Food Delivery UI collection.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on push

### Deploy to Other Platforms

The app can be deployed to any Node.js-compatible hosting:

```bash
npm run build
npm start
```

## 🐛 Troubleshooting

### Images not loading
- Ensure `next.config.js` includes the correct remote image domains
- Check Image component has `fill`, `width/height`, or `placeholder` props

### Styling issues
- Ensure Tailwind CSS is properly configured
- Clear `.next` cache and rebuild: `rm -rf .next && npm run build`

### TypeScript errors
- Run `npm run lint` to check for issues
- Ensure all types are properly imported from `src/types`

## 📞 Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Built with ❤️ using modern web technologies**
