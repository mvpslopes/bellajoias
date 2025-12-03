import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Header() {
  const { getTotalItems } = useCart()

  const openCart = () => {
    if (window.openCart) {
      window.openCart()
    }
  }
  return (
    <header className="bg-white shadow-small sticky top-0 z-50">
      <div className="max-w-container mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/logo/LogoBellaJoias.png" 
              alt="Bella Joias" 
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/" className="text-base text-dark-gray px-4 py-2 hover:text-dark-green hover:underline transition-colors">
              Categorias
            </Link>
            <Link to="/" className="text-base text-dark-gray px-4 py-2 hover:text-dark-green hover:underline transition-colors">
              Ofertas
            </Link>
            <Link to="/" className="text-base text-dark-gray px-4 py-2 hover:text-dark-green hover:underline transition-colors">
              Novidades
            </Link>
            <Link to="/" className="text-base text-dark-gray px-4 py-2 hover:text-dark-green hover:underline transition-colors">
              Entrega
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center gap-4 flex-1 md:flex-initial justify-end">
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Buscar Produto"
                className="w-64 md:w-80 px-4 py-2 border border-medium-gray rounded text-base focus:outline-none focus:border-dark-green"
              />
            </div>
            <button className="text-dark-gray hover:text-dark-green transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button
              onClick={openCart}
              className="text-dark-gray hover:text-dark-green transition-colors relative"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

