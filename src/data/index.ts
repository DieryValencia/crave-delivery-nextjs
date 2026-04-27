import type { Restaurant, Category, NavItem } from '@/types'

export const categories: Category[] = [
  { id: '1', name: 'Italian', icon: 'local_pizza' },
  { id: '2', name: 'Japanese', icon: 'set_meal' },
  { id: '3', name: 'American', icon: 'lunch_dining' },
  { id: '4', name: 'Chinese', icon: 'soup_kitchen' },
  { id: '5', name: 'Desserts', icon: 'cake' },
]

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Artisan Pizzeria',
    rating: 4.8,
    category: 'Italian',
    cuisineType: 'Italian • Pizza',
    priceLevel: '$$',
    deliveryTime: '20-30 min',
    deliveryTimeMin: 20,
    deliveryTimeMax: 30,
    badge: '-30% OFF',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByIIezR1PnR_nTnDAKGEr6rigdyxfNTUef_GwgGl--AXeeaNzAWY4esBqubBXalcvAUnTy5a8m30ocxHt5m6FWmnJnq3X4cEbKnA27JNyIJhJtqtOhbJYpNFesXWgAfK6RkEv5OcAyWKv3Igv1lkjTNnhf7kmuMfXFcnXIhiBu-D10zGDoL0plx5MIvUWuFU8KNURpeHysOEuzUokZiiqgxEUEg6TDrSCmE0M3kVVm6-UJnuXNYOJX_QhS6Pbh44Itq1BdJWhqxzjg',
    featured: true,
  },
  {
    id: '2',
    name: 'Smokey Joes BBQ',
    rating: 4.5,
    category: 'American',
    cuisineType: 'American • BBQ',
    priceLevel: '$$$',
    deliveryTime: '35-45 min',
    deliveryTimeMin: 35,
    deliveryTimeMax: 45,
    badge: 'Free Delivery',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALpXQ6YYQuhcY0eC3pHpcPis7LqKH7pPHQyH_wjENrn738D5TaMjIpqdJWdcGvrYROxC99y9EPLN5I4Vhbs6UstHwOor9z2QKQq1IE_DZt_wszV07RF5IowVL9EIGlD1G_YgyaBTQ5190O7ZBiWcHzDNqKmS5_OmKMFXswt_XZOxDuLrI2BFGi1tmhKC8kMhHbWFHhrYhi0oPOaySHOk1jEWU1i81X-8YcqRuKrioE-UZ4-DcAbvdPiHWpbNs8cJ-R_re9qQVxUbAi',
    featured: true,
  },
  {
    id: '3',
    name: 'The Burger Bar',
    rating: 4.9,
    category: 'American',
    cuisineType: 'Fast Food • Burgers',
    priceLevel: '$$',
    deliveryTime: '15-25 min',
    deliveryTimeMin: 15,
    deliveryTimeMax: 25,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM10BhgVFmGd0sJ8VVIwgZnODUw8l3W0mT_mMMfiG4hTPOjkUNzlkPxP4oMMCTEcGxZRRd3PQiLbIiiiWSW0JwPTnG1Fd7UrhqSv9ZXhAvSFWEssdR7IygrgQlsF22UEsZzrb8IzW22kCOv-L0v7H4vhn6QtQEvyu_iQWXvJEVijDzLFaF_56GuDk38zSgOT6OFfRkR4t4maENrlJLUexxwjMKxBi4pUdnMia8ONGewzJWL6NY36IYNBVAotP5akV3Id_u_QA7mB_-',
    featured: true,
  },
]

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'home', active: true },
  { id: 'explore', label: 'Explore', icon: 'search' },
  { id: 'orders', label: 'Orders', icon: 'local_mall' },
  { id: 'profile', label: 'Profile', icon: 'person' },
]

export const heroImages = {
  pizza: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_ucB1u0PtpbtAxU4pH6Xsl-IlpkbdYNfhkOUB6exzlgomBDv56TEna0l1XDci3-SDdxOqxET8wiV7Ofz5ghYTGn7cjhcQY16RdJzSdSbf4Iwh_e7cksvtIx34_g6VSUyubH5PXcgkKFMe1fS8MapfgTo5z8x036n_L_spJOxABw-sp1WeegkMlQ-mzI62qBtcuCeDVqqpNj4CXHBP2lWNeQbXDuDWRHJgmfI5dwIwCBQjH-p4QEtlMT0181sOUpTjfAysm4c6f-KZ',
  burger: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDceCiK7JSxiWF_UfGmtX9GNgthJxw6HVE7xdmi9XfVvuXl1NziiLxiK_GddqL-BtiFCk5gy1VHx6141BzH769CIm7SkzwBbNI9lm--xTOe9o_WBaP28qkNE6WyazWqTGjvt2u5Tl5mKR75zrQ8PDSaSx0fGDAcf_fSYbpBHE73AOaG7cXXpwtMhmzJBhVOK0cOWlyk_2bI3uWxTxs2ydS1yG4jBkBcRgRlagd2TRlPgqiSJsG7Uj8TnczwMNb_ZkJT87f7hK8LHseI',
  pokeBowl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6_fXkqAACtBYlbUhPuSuQW4TmcPDgySmqiU5F4I0o-n-FDu6GvsHYv9suY8oinhskqclv43QF7A0mcumgJB7UW3TUZlZarJgxZY7a9I8VMA29LzOOsdNPXGBNapuvH2UXsfNCby4bR4dmFYrgAnH2oderBtYf01lvKK3ECnolb25WutS9t_sQjOVEdhW8wQ8B-UeAHd-Pa_LzKTNEUtBk1OL65SiV6iFJTrCD7JsnhrWXaT171HL3VxhSrfGZN980lc-XaUC_lw4H',
}

export const userImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ2U0TnodUJwT4dBzWnjiF6w197Z7VnfwBygmrhCTcyK7-A7F6Orszn1iXxgMCPIzeKs5SNkuB9EsSASBy2-uIZworU26WVL6ExmnwmaV7EwT4qQFrc4frMUppZpg0g4ZOjqXmJ0XkFlxkzKPF_BQYTEsaKWGspYjrY6CAtHrmnb_jm2x1mc-e176xQ47s7nDiynLEn7lqh_WE68LTyDmi8xO_SfDYit0fcH1k5l8w3G_hFsqw9V7axQPDfSBZSI1jFZLrFlwW0i3n'
