function Hero() {
  return (
    <section className="bg-light-beige py-12 md:py-16 lg:py-20">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 min-h-[400px] md:min-h-[500px]">
          {/* Content */}
          <div className="flex-1 max-w-[50%]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-green mb-6 leading-tight">
              Ganhe Até 50% de Desconto em Fones de Ouvido Selecionados
            </h1>
            <button className="btn-primary">
              Comprar Agora
            </button>
          </div>

          {/* Image Placeholder */}
          <div className="flex-1 max-w-[50%]">
            <div className="w-full aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center">
              <svg className="w-64 h-64 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

