import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    setIsAdding(true)
    addToCart(product, 1)
    setTimeout(() => setIsAdding(false), 500)
  }

  return (
    <div className="card flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="relative w-full aspect-square mb-4 rounded overflow-hidden block group">
        <img
          src={product.image || `https://via.placeholder.com/300?text=${encodeURIComponent(product.name)}`}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setIsWishlisted(!isWishlisted)
          }}
          className="absolute top-2 right-2 w-6 h-6 cursor-pointer text-dark-gray hover:text-red-500 transition-colors bg-white/80 rounded-full p-1 z-10"
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
      </Link>
      
      <div className="flex flex-col flex-grow">
        <Link to={`/product/${product.id}`} className="block mb-2">
          <h3 className="text-xl font-semibold text-dark-gray hover:text-dark-green transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        {(product.shortDescription || product.description) && (
          <p className="text-sm text-text-secondary mb-3 leading-relaxed line-clamp-2 flex-grow">
            {product.shortDescription || product.description}
          </p>
        )}
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-yellow-400 text-sm">
            {'★'.repeat(5)}
          </div>
          <span className="text-sm text-text-secondary">({product.reviews || 0})</span>
        </div>
        
        <div className="mb-4">
          {product.originalPrice && product.originalPrice > product.price ? (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-lg text-text-secondary line-through">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
              <span className="text-xl font-bold text-dark-green">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              <span className="text-sm font-semibold text-brand-primary bg-brand-primary/10 px-2 py-1 rounded">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </span>
            </div>
          ) : (
            <div className="text-xl font-bold text-dark-green">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </div>
          )}
        </div>
        
        <button 
          onClick={handleAddToCart}
          className={`w-full btn-primary py-3 mt-auto ${isAdding ? 'opacity-75' : ''}`}
          disabled={isAdding}
        >
          {isAdding ? 'Adicionado!' : 'Adicionar ao Carrinho'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard

