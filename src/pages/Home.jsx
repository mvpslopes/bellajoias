import Hero from '../components/Hero'
import FilterBar from '../components/FilterBar'
import ProductCard from '../components/ProductCard'
import CategoryCard from '../components/CategoryCard'
import { products, categories } from '../data/products.jsx'

function Home() {
  return (
    <div>
      <Hero />
      <FilterBar />
      
      <section className="max-w-container mx-auto px-4 md:px-8 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-dark-gray mb-8">
          Fones de Ouvido Para Você!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      <section className="max-w-container mx-auto px-4 md:px-8 py-8 md:py-12 bg-light-gray">
        <h2 className="text-2xl md:text-3xl font-bold text-dark-gray mb-8">
          Categorias Populares
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home

