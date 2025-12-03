import { useState } from 'react'
import { products } from '../data/products.jsx'

function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState('card')
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    email: '',
    mobile: '',
    cardNumber: ''
  })

  // Simulando item no carrinho
  const cartItem = products[1] // AirPods Max
  const total = cartItem.price

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-container mx-auto px-4 md:px-8 py-8">
      <h1 className="text-3xl font-bold text-dark-gray mb-8">Finalizar Pedido</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Forms */}
        <div className="lg:col-span-2 space-y-6">
          {/* Review Item */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Revisar Item e Entrega</h2>
            <div className="flex gap-4">
              <img
                src={cartItem.image}
                alt={cartItem.name}
                className="w-20 h-20 rounded object-cover"
              />
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-2">{cartItem.name}</h3>
                <p className="text-sm text-text-secondary mb-1">Cor: Rosa</p>
                <p className="text-sm text-text-secondary mb-2">Quantidade: 01</p>
                <p className="text-base font-bold text-dark-green">
                  R$ {cartItem.price.toFixed(2).replace('.', ',')}
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Informações de Entrega</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-dark-gray mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-dark-gray mb-2">
                  Endereço
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Rua, número, complemento"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark-gray mb-2">
                    Cidade
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Cidade"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-dark-gray mb-2">
                    Estado
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Estado"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-dark-gray mb-2">
                  CEP
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="00000-000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-dark-gray mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-dark-gray mb-2">
                  Celular
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-base">
                <span>Subtotal</span>
                <span className="font-semibold">R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between text-base">
                <span>Frete</span>
                <span className="font-semibold">R$ 15,00</span>
              </div>
              <div className="border-t border-medium-gray pt-4 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-dark-green">R$ {(total + 15).toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <h3 className="text-base font-semibold mb-4">Detalhes de Pagamento</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedPayment('card')}
                  className={`w-full p-3 border rounded text-left transition-all ${
                    selectedPayment === 'card'
                      ? 'border-dark-green border-2'
                      : 'border-medium-gray'
                  }`}
                >
                  Cartão de Crédito ou Débito
                </button>
                <button
                  onClick={() => setSelectedPayment('cod')}
                  className={`w-full p-3 border rounded text-left transition-all ${
                    selectedPayment === 'cod'
                      ? 'border-dark-green border-2'
                      : 'border-medium-gray'
                  }`}
                >
                  Pagamento na Entrega
                </button>
                <button
                  onClick={() => setSelectedPayment('paypal')}
                  className={`w-full p-3 border rounded text-left transition-all ${
                    selectedPayment === 'paypal'
                      ? 'border-dark-green border-2'
                      : 'border-medium-gray'
                  }`}
                >
                  PayPal
                </button>
              </div>
              
              {selectedPayment === 'card' && (
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="input-field mt-3"
                  placeholder="Número do Cartão"
                />
              )}
            </div>

            <button className="w-full btn-primary py-4 text-lg">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

