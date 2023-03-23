function DishesList ({ dishes }) {
  console.log(dishes)
  const elements = []
  for (const dish of dishes.data) {
    elements.push(<h1>{dish.attributes.name}</h1>)
  }
  return dishes && dishes.data && (
    <div className='list'>
      {elements}
    </div>
  )
}

export default DishesList
