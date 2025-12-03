import React from 'react'

export const products = [
  {
    id: 1,
    name: 'Aliança Prata 950 Canaletada 4mm',
    description: 'Aliança em prata 950 com acabamento canaletado. Peça elegante e atemporal, perfeita para casais que buscam sofisticação e qualidade. A prata 950 garante durabilidade e brilho duradouro, enquanto o acabamento canaletado adiciona um toque de elegância única. Ideal para noivados, casamentos ou como presente especial.',
    shortDescription: 'Aliança em prata 950 com acabamento canaletado',
    price: 199.99,
    originalPrice: 299.99,
    image: '/images/products/Alianca_prata_950_canaletada_4mm.webp',
    reviews: 45,
    rating: 5,
    colors: ['prata'],
    category: 'Alianças',
    material: 'Prata 950',
    inStock: true,
    tags: ['destaque', 'novo']
  },
  {
    id: 2,
    name: 'Brinco Max Filtro dos Sonhos',
    description: 'Brinco Max com design inspirado no filtro dos sonhos. Peça única e moderna que combina tradição com estilo contemporâneo. Cada detalhe foi cuidadosamente elaborado para criar uma joia que transmite proteção e beleza. Perfeito para quem busca um acessório diferenciado e cheio de significado.',
    shortDescription: 'Brinco Max com design filtro dos sonhos',
    price: 149.99,
    originalPrice: 189.99,
    image: '/images/products/Brinco_Max_Filtro_Dos_Sonhos.webp',
    reviews: 32,
    rating: 5,
    colors: ['prata', 'dourado'],
    category: 'Brincos',
    material: 'Prata',
    inStock: true,
    tags: ['novo', 'destaque']
  },
  {
    id: 3,
    name: 'Colar com Pingente Gota Blogueira',
    description: 'Colar elegante com pingente em formato de gota. Peça versátil e moderna, ideal para looks casuais e sofisticados. Perfeito para o dia a dia. O design minimalista e atemporal complementa qualquer estilo, desde um visual despojado até uma produção mais elaborada. A gota simboliza pureza e renovação, tornando esta peça ainda mais especial.',
    shortDescription: 'Colar com pingente gota para looks modernos',
    price: 179.99,
    originalPrice: 249.99,
    image: '/images/products/Colar_com_pingente_Gota_blogueira.webp',
    reviews: 67,
    rating: 5,
    colors: ['prata', 'dourado', 'rosa'],
    category: 'Colares',
    material: 'Prata',
    inStock: true,
    tags: ['destaque', 'promoção']
  },
]

export const categories = [
  {
    id: 1,
    name: 'Alianças',
    count: 12,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    id: 2,
    name: 'Brincos',
    count: 28,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    )
  },
  {
    id: 3,
    name: 'Colares',
    count: 35,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: 4,
    name: 'Pulseiras',
    count: 22,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 5,
    name: 'Anéis',
    count: 18,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    id: 6,
    name: 'Acessórios',
    count: 15,
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    )
  },
]
