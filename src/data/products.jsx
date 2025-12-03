import React from 'react'

export const products = [
  {
    id: 1,
    name: 'Wireless Earbuds, IPX8',
    description: 'Fones de ouvido sem fio à prova d\'água',
    price: 89.00,
    image: 'https://via.placeholder.com/300/000000/FFFFFF?text=Wireless+Earbuds',
    reviews: 121,
    rating: 5,
    colors: ['black', 'white', 'blue']
  },
  {
    id: 2,
    name: 'AirPods Max',
    description: 'Fones de ouvido premium com cancelamento de ruído',
    price: 549.00,
    image: 'https://via.placeholder.com/300/FF69B4/FFFFFF?text=AirPods+Max',
    reviews: 245,
    rating: 5,
    colors: ['pink', 'white', 'black', 'blue', 'red']
  },
  {
    id: 3,
    name: 'Bose BT Earphones',
    description: 'Fones de ouvido Bluetooth de alta qualidade',
    price: 289.00,
    image: 'https://via.placeholder.com/300/000000/FFFFFF?text=Bose+BT',
    reviews: 189,
    rating: 5,
    colors: ['black', 'white']
  },
  {
    id: 4,
    name: 'VIVEFOX Headphones',
    description: 'Fones de ouvido com som estéreo',
    price: 39.00,
    image: 'https://via.placeholder.com/300/FF0000/FFFFFF?text=VIVEFOX',
    reviews: 98,
    rating: 4,
    colors: ['red', 'black']
  },
  {
    id: 5,
    name: 'JBL TUNE 600BTNC',
    description: 'Fones de ouvido com cancelamento de ruído',
    price: 59.00,
    image: 'https://via.placeholder.com/300/000000/FFFFFF?text=JBL+TUNE',
    reviews: 156,
    rating: 5,
    colors: ['black', 'blue']
  },
  {
    id: 6,
    name: 'TAGRY Bluetooth',
    description: 'Earbuds com LED colorido',
    price: 109.00,
    image: 'https://via.placeholder.com/300/000000/FF00FF?text=TAGRY',
    reviews: 203,
    rating: 5,
    colors: ['black', 'blue', 'pink']
  },
  {
    id: 7,
    name: 'Monster MNFLEX',
    description: 'Fones de condução óssea',
    price: 89.75,
    image: 'https://via.placeholder.com/300/000000/FFFFFF?text=Monster',
    reviews: 87,
    rating: 4,
    colors: ['black', 'white']
  },
  {
    id: 8,
    name: 'Mpow CH6',
    description: 'Fones de ouvido over-ear confortáveis',
    price: 569.00,
    image: 'https://via.placeholder.com/300/0066CC/FFFFFF?text=Mpow+CH6',
    reviews: 134,
    rating: 5,
    colors: ['blue', 'black']
  },
]

export const categories = [
  {
    id: 1,
    name: 'Móveis',
    count: 240,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    id: 2,
    name: 'Fones de Ouvido',
    count: 240,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    )
  },
  {
    id: 3,
    name: 'Calçados',
    count: 240,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    )
  },
  {
    id: 4,
    name: 'Bolsas',
    count: 240,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    id: 5,
    name: 'Laptop',
    count: 240,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 6,
    name: 'Livros',
    count: 240,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
]

