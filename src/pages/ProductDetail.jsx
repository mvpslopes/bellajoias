import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../data/products.jsx'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/CartContext'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === parseInt(id)) || products[1]
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || 'black')
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  
  const colorMap = {
    black: '#000000',
    white: '#ffffff',
    pink: '#ff69b4',
    red: '#ff0000',
    blue: '#0066cc',
    prata: '#c0c0c0',
    ouro: '#ffd700',
    dourado: '#d1b273',
    rosa: '#ff69b4',
    gold: '#ffd700'
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 5)

  return (
    <div className="max-w-container mx-auto px-4 md:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-text-secondary mb-6">
        <Link to="/" className="hover:text-dark-green">Bella Joias</Link>
        <span className="mx-2">&gt;</span>
        <Link to="/" className="hover:text-dark-green">Categorias</Link>
        <span className="mx-2">&gt;</span>
        <Link to="/" className="hover:text-dark-green">{product.category || 'Joias'}</Link>
        <span className="mx-2">&gt;</span>
        <span className="text-dark-green font-medium">{product.name}</span>
      </nav>

      {/* Product Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
        {/* Product Image */}
        <div className="w-full">
          <img
            src={product.image || `https://via.placeholder.com/600?text=${encodeURIComponent(product.name)}`}
            alt={product.name}
            className="w-full aspect-square object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {'★'.repeat(product.rating || 5)}
            </div>
            <span className="text-sm text-text-secondary">({product.reviews} avaliações)</span>
          </div>
          
          <div className="mb-6">
            {product.originalPrice && product.originalPrice > product.price ? (
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-2xl md:text-3xl text-text-secondary line-through">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-dark-green">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-base font-semibold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
                <p className="text-sm text-text-secondary">
                  Economize R$ {(product.originalPrice - product.price).toFixed(2).replace('.', ',')}
                </p>
                <p className="text-lg text-text-secondary">
                  ou 12x de R$ {(product.price / 12).toFixed(2).replace('.', ',')} sem juros
                </p>
              </div>
            ) : (
              <div>
                <div className="text-3xl md:text-4xl font-bold text-dark-green mb-2">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </div>
                <p className="text-lg text-text-secondary">
                  ou 12x de R$ {(product.price / 12).toFixed(2).replace('.', ',')} sem juros
                </p>
              </div>
            )}
          </div>

          {/* Color Selector */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="text-base font-semibold mb-3">Escolha uma Cor</h3>
              <div className="flex gap-3 flex-wrap">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`flex flex-col items-center gap-2 p-2 rounded-lg transition-all ${
                      selectedColor === color
                        ? 'border-2 border-dark-green bg-light-beige'
                        : 'border-2 border-medium-gray'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color
                          ? 'border-dark-green border-[3px]'
                          : 'border-medium-gray'
                      }`}
                      style={{ backgroundColor: colorMap[color.toLowerCase()] || color }}
                    />
                    <span className="text-xs capitalize">{color}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-6">
            <h3 className="text-base font-semibold mb-3">Quantidade</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 border border-medium-gray rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-light-gray transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-light-gray transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="mb-6 space-y-4">
            <div>
              <h3 className="text-base font-semibold mb-2">Descrição</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {product.description}
              </p>
            </div>
            
            {product.material && (
              <div>
                <h3 className="text-base font-semibold mb-2">Material</h3>
                <p className="text-sm text-text-secondary">{product.material}</p>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2">
              {product.tags && product.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => {
                addToCart(product, quantity, selectedColor)
                navigate('/checkout')
              }}
              className="flex-1 btn-primary py-4"
            >
              Comprar Agora
            </button>
            <button
              onClick={() => {
                setIsAdding(true)
                addToCart(product, quantity, selectedColor)
                setTimeout(() => setIsAdding(false), 500)
              }}
              className={`flex-1 btn-secondary py-4 ${isAdding ? 'opacity-75' : ''}`}
              disabled={isAdding}
            >
              {isAdding ? 'Adicionado!' : 'Adicionar ao Carrinho'}
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Produtos Relacionados</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {relatedProducts.map(relatedProduct => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetail

