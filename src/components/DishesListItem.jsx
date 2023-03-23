import Card from './Card'

function DishesListItem ({ dish }) {
  return (
    <Card item={dish} mode='dish' />
  )
}

export default DishesListItem
