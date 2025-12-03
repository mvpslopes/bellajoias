import { Link } from 'react-router-dom'
import { useState } from 'react'

function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="card">
      <div className="relative w-full aspect-square mb-4 rounded overflow-hidden">
        <img
          src={product.image || `https://via.placeholder.com/300?text=${encodeURIComponent(product.name)}`}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-2 right-2 w-6 h-6 cursor-pointer text-dark-gray hover:text-red-500 transition-colors"
        >
          <svg
            fill={isWishlisted ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      
      <Link to={`/product/${product.id}`}>
        <h3 className="text-xl font-semibold text-dark-gray mb-2 hover:text-dark-green transition-colors">
          {product.name}
        </h3>
      </Link>
      
      {product.description && (
        <p className="text-sm text-text-secondary mb-3 leading-relaxed">
          {product.description}
        </p>
      )}
      
      <div className="flex items-center gap-2 mb-3">
        <div className="flex text-yellow-400">
          {'★'.repeat(5)}
        </div>
        <span className="text-sm text-text-secondary">({product.reviews || 121})</span>
      </div>
      
      <div className="text-xl font-bold text-dark-green mb-4">
        R$ {product.price.toFixed(2).replace('.', ',')}
      </div>
      
      <button className="w-full btn-primary py-3">
        Adicionar ao Carrinho
      </button>
    </div>
  )
}

export default ProductCard

