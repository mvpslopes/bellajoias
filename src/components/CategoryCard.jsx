function CategoryCard({ category }) {
  return (
    <div className="card text-center p-6">
      <div className="w-16 h-16 mx-auto mb-4 text-dark-green">
        {category.icon}
      </div>
      <h3 className="text-base font-semibold text-dark-gray mb-2">
        {category.name}
      </h3>
      <p className="text-sm text-text-secondary">
        {category.count} Itens Disponíveis
      </p>
    </div>
  )
}

export default CategoryCard

