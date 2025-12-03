function FilterBar() {
  return (
    <div className="bg-light-gray py-4 px-4 md:px-8">
      <div className="max-w-container mx-auto flex items-center gap-4 flex-wrap">
        <select className="px-4 py-3 border border-medium-gray rounded bg-white text-base min-w-[150px] cursor-pointer">
          <option>Categoria</option>
          <option>Alianças</option>
          <option>Brincos</option>
          <option>Colares</option>
          <option>Pulseiras</option>
          <option>Anéis</option>
        </select>
        
        <select className="px-4 py-3 border border-medium-gray rounded bg-white text-base min-w-[150px] cursor-pointer">
          <option>Preço</option>
          <option>Até R$ 200</option>
          <option>R$ 200 - R$ 500</option>
          <option>R$ 500 - R$ 1000</option>
          <option>Acima de R$ 1000</option>
        </select>
        
        <select className="px-4 py-3 border border-medium-gray rounded bg-white text-base min-w-[150px] cursor-pointer">
          <option>Avaliação</option>
          <option>5 estrelas</option>
          <option>4 estrelas</option>
          <option>3 estrelas</option>
        </select>
        
        <select className="px-4 py-3 border border-medium-gray rounded bg-white text-base min-w-[150px] cursor-pointer">
          <option>Cor</option>
          <option>Prata</option>
          <option>Ouro</option>
          <option>Rosa</option>
          <option>Dourado</option>
        </select>
        
        <select className="px-4 py-3 border border-medium-gray rounded bg-white text-base min-w-[150px] cursor-pointer">
          <option>Material</option>
          <option>Prata 950</option>
          <option>Ouro 18k</option>
          <option>Ouro 14k</option>
          <option>Banhado a Ouro</option>
        </select>
        
        <select className="px-4 py-3 border border-medium-gray rounded bg-white text-base min-w-[150px] cursor-pointer">
          <option>Oferta</option>
          <option>Em promoção</option>
          <option>Novo</option>
        </select>
        
        <button className="btn-outline">
          Todos os Filtros
        </button>
        
        <select className="px-4 py-3 border border-medium-gray rounded bg-white text-base ml-auto cursor-pointer">
          <option>Ordenar por</option>
          <option>Menor preço</option>
          <option>Maior preço</option>
          <option>Mais vendidos</option>
          <option>Mais recentes</option>
        </select>
      </div>
    </div>
  )
}

export default FilterBar

