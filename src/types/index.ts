export interface Restaurant {
  id: string
  name: string
  rating: number
  category: string
  cuisineType: string
  priceLevel: string
  deliveryTime: string
  deliveryTimeMin: number
  deliveryTimeMax: number
  badge?: string
  image: string
  featured?: boolean
}

export interface MenuItem {
  id: string
  name: string
  description: string
  image: string
  price: number
  rating: number
}

export interface Category {
  id: string
  name: string
  icon: string
}

export interface NavItem {
  id: string
  label: string
  icon: string
  active?: boolean
}
