function RestaurantAddress ({ address }) {
  return (
    <div className='address'>
      <h2>Localisation</h2>
      <div className='row'>
        <div className='col'>
          <iframe
            width='100%'
            height='300'
            src={`https://maps.google.com/maps?q=${address.street}&hl=fr&z=14&amp&output=embed`}
          />
        </div>
        <div className='col'>
          <p>Adresse : {`${address.street}, ${address.postcode} - ${address.city}`}</p>
          <p>Téléphone : {`${address.phone}`}</p>
          <p>Email : {`${address.email}`}</p>
        </div>
      </div>
    </div>
  )
}

export default RestaurantAddress
