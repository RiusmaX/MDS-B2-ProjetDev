import DishesListItem from './DishesListItem'

function DishesList ({ dishes }) {
  // Récupération des catégories
  const _categories = dishes.data.map(dish => dish.attributes.type)
  const categories = [...new Set(_categories)]
  // On prépare la liste des plats (un tableau vide)
  const elements = []
  for (const category of categories) {
    const cat = (
      <>
        <h1>{category}</h1>
        <div className='list'>
          {
          dishes.data
            .filter(dish => dish.attributes.type === category)
            .map(dish => {
              return <DishesListItem key={dish.id} dish={dish} />
            })
        }
        </div>
      </>
    )
    elements.push(cat)
  }
  // On obtient dans "elements" un tableau de composants React
  return elements
}

export default DishesList
