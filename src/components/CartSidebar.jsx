import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartSidebar() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  // Exportar função para abrir o carrinho globalmente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.openCart = () => setIsOpen(true)
    }
  }, [])

  const handleCheckout = () => {
    setIsOpen(false)
    window.location.href = '/checkout'
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-large z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-medium-gray">
            <h2 className="text-xl font-bold text-dark-gray">Carrinho</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-dark-gray hover:text-dark-green transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-24 h-24 mx-auto text-medium-gray mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-text-secondary mb-4">Seu carrinho está vazio</p>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary inline-block"
                >
                  Continuar Comprando
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={`${item.id}-${item.selectedColor || 'default'}-${index}`} className="flex gap-4 pb-4 border-b border-medium-gray">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-dark-gray mb-1">{item.name}</h3>
                      {item.selectedColor && (
                        <p className="text-sm text-text-secondary mb-2">Cor: {item.selectedColor}</p>
                      )}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedColor)}
                            className="w-8 h-8 border border-medium-gray rounded flex items-center justify-center hover:border-dark-green transition-colors"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedColor)}
                            className="w-8 h-8 border border-medium-gray rounded flex items-center justify-center hover:border-dark-green transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-dark-green">
                            R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedColor)}
                        className="text-sm text-red-500 hover:text-red-700 mt-2"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-medium-gray p-6 space-y-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-dark-green">
                  R$ {getTotalPrice().toFixed(2).replace('.', ',')}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full btn-primary py-3"
              >
                Finalizar Compra
              </button>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block text-center text-dark-green hover:underline"
              >
                Continuar Comprando
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartSidebar

