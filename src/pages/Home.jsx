import Hero from '../components/Hero'
import FilterBar from '../components/FilterBar'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products.jsx'

function Home() {
  return (
    <div>
      <Hero />
      <FilterBar />
      
      <section className="max-w-container mx-auto px-4 md:px-8 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-dark-gray mb-8">
          Joias Para Você!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
    </div>
  )
}

export default Home

