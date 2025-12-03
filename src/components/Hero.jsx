import { useState, useEffect } from 'react'

function Hero() {
  // Lista de imagens do hero - usando as imagens que você adicionou
  const heroImages = [
    '/images/hero/anel-de-ouro-caro-exibido-nas-rochas.jpg',
    '/images/hero/jovem-modelo-demonstrando-joias-caras.jpg',
    '/images/hero/retrato-de-jovem-com-brincos-e-joias-isoladas.jpg',
    '/images/hero/vista-luxuoso-anel-de-ouro-na-exibicao-de-joias-de-feltro.jpg',
  ]

  // Se não houver imagens no hero, usa uma imagem de produto como fallback
  const fallbackImage = '/images/products/Colar_com_pingente_Gota_blogueira.webp'
  const images = heroImages.length > 0 ? heroImages : [fallbackImage]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotacionar imagens a cada 5 segundos
  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Muda a cada 5 segundos

    return () => clearInterval(interval)
  }, [images.length])

  // Navegação manual
  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <section className="relative bg-[#c43484] py-12 md:py-20 lg:py-28 overflow-hidden">
      {/* Background decorative elements com animação */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Image Carousel Section - Primeiro no mobile */}
          <div className="flex-1 w-full md:max-w-[50%] relative order-1 md:order-2">
            <div className="relative w-full aspect-square md:aspect-square rounded-2xl overflow-hidden shadow-large group">
              {/* Container das imagens */}
              <div className="relative w-full h-full">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                      index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                    style={{
                      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <img 
                      src={image} 
                      alt={`Coleção de Joias Bella Joias - Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback se a imagem não carregar
                        e.target.src = fallbackImage
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Botões de navegação */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-primary p-2 md:p-3 rounded-full shadow-medium opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-20"
                    aria-label="Imagem anterior"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-primary p-2 md:p-3 rounded-full shadow-medium opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-20"
                    aria-label="Próxima imagem"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Indicadores de slide */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'w-8 bg-white'
                          : 'w-2 bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            {/* Badge decorativo com animação */}
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-brand-primary text-white px-3 py-2 md:px-5 md:py-3 rounded-full shadow-large transform rotate-12 z-20 animate-bounce" style={{ animationDuration: '2s' }}>
              <span className="text-sm md:text-base font-bold">-50%</span>
            </div>
            
            {/* Elementos decorativos flutuantes */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-secondary/20 rounded-full blur-xl hidden md:block"></div>
            <div className="absolute top-1/2 -right-6 w-20 h-20 bg-brand-primary/20 rounded-full blur-xl hidden md:block"></div>
          </div>

          {/* Content */}
          <div className="flex-1 max-w-full md:max-w-[50%] text-center md:text-left animate-fade-in order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-white">Joias</span> que{' '}
              <span className="text-brand-secondary">Brillham</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Descubra nossa coleção exclusiva de joias finas. Elegância e sofisticação em cada peça cuidadosamente selecionada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-white text-brand-primary hover:bg-white/90 text-lg px-8 py-4 rounded-lg font-semibold transform hover:scale-105 transition-transform">
                Ver Coleção
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-lg font-semibold transform hover:scale-105 transition-transform">
                Ofertas Especiais
              </button>
            </div>
            
            {/* Features destacadas */}
            <div className="mt-8 flex flex-wrap gap-6 justify-center md:justify-start text-sm text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Frete Grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Garantia de Qualidade</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Até 12x sem juros</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
