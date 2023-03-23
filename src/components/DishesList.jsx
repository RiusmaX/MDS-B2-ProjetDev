function DishesList ({ dishes }) {
  // On prépare la liste des plats (un tableau vide)
  const elements = []
  for (const dish of dishes.data) {
    // Pour chaque plat de la liste, on ajoute un composant visuel (ici un h1) dans le tableau
    elements.push(<h1>{dish.attributes.name}</h1>)
  }
  // On obtient dans "elements" un tableau de composants React
  return dishes && dishes.data && (
    <div className='list'>
      {/* On affiche le tableau contenant les plats */}
      {elements}
    </div>
  )
}

export default DishesList
