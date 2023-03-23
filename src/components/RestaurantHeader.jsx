const IMAGE_URL = 'http://localhost:1337'
function RestaurantHeader ({ restaurant }) {
  const attributes = restaurant?.attributes

  let imageUrl = ''
  if (attributes && attributes.image.data) {
    imageUrl = IMAGE_URL + attributes.image.data.attributes.url
  } else {
    imageUrl = 'https://via.placeholder.com/300x150'
  }
  return (
    <div
      className='restaurant-header'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <div className='backdrop' />
      <h1>{attributes.name}</h1>
      <p>{attributes.description}</p>
    </div>
  )
}

export default RestaurantHeader
