import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../data/products.jsx'
import ProductCard from '../components/ProductCard'

function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id)) || products[1]
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || 'black')
  
  const colorMap = {
    black: '#000000',
    white: '#ffffff',
    pink: '#ff69b4',
    red: '#ff0000',
    blue: '#0066cc'
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 5)

  return (
    <div className="max-w-container mx-auto px-4 md:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-text-secondary mb-6">
        <Link to="/" className="hover:text-dark-green">Shopcart</Link>
        <span className="mx-2">&gt;</span>
        <Link to="/" className="hover:text-dark-green">Categorias</Link>
        <span className="mx-2">&gt;</span>
        <Link to="/" className="hover:text-dark-green">Fones de Ouvido</Link>
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
          
          <div className="text-3xl md:text-4xl font-bold text-dark-green mb-6">
            R$ {product.price.toFixed(2).replace('.', ',')}
            <span className="text-lg text-text-secondary font-normal ml-2">
              ou R$ 99,99/mês
            </span>
          </div>

          {/* Color Selector */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="text-base font-semibold mb-3">Escolha uma Cor</h3>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? 'border-dark-green border-[3px]'
                        : 'border-medium-gray'
                    }`}
                    style={{ backgroundColor: colorMap[color] || color }}
                    aria-label={`Cor ${color}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="flex-1 btn-primary py-4">
              Comprar Agora
            </button>
            <button className="flex-1 btn-secondary py-4">
              Adicionar ao Carrinho
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

