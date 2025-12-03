function FilterBar() {
  return (
    <div className="bg-light-gray py-4 px-4 md:px-8">
      <div className="max-w-container mx-auto flex items-center gap-4 flex-wrap">
        <select className="px-4 py-3 border border-medium-gray rounded bg-white text-base min-w-[150px] cursor-pointer">
          <option>Tipo de Fone</option>
          <option>Over-ear</option>
          <option>In-ear</option>
          <option>Earbuds</option>
        </select>
        
        <select className="px-4 py-3 border border-medium-gray rounded bg-white text-base min-w-[150px] cursor-pointer">
          <option>Preço</option>
          <option>Até R$ 100</option>
          <option>R$ 100 - R$ 300</option>
          <option>R$ 300 - R$ 500</option>
          <option>Acima de R$ 500</option>
        </select>
        
        <select className="px-4 py-3 border border-medium-gray rounded bg-white text-base min-w-[150px] cursor-pointer">
          <option>Avaliação</option>
          <option>5 estrelas</option>
          <option>4 estrelas</option>
          <option>3 estrelas</option>
        </select>
        
        <select className="px-4 py-3 border border-medium-gray rounded bg-white text-base min-w-[150px] cursor-pointer">
          <option>Cor</option>
          <option>Preto</option>
          <option>Branco</option>
          <option>Rosa</option>
          <option>Azul</option>
        </select>
        
        <select className="px-4 py-3 border border-medium-gray rounded bg-white text-base min-w-[150px] cursor-pointer">
          <option>Material</option>
          <option>Plástico</option>
          <option>Metal</option>
          <option>Couro</option>
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

