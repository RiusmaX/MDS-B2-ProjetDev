import { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { deleteFromCart } from '../services/cartUtils'

function Cart () {
  const [cart, setCart] = useState()

  useEffect(() => {
    const savedCart = window.localStorage.getItem('CART')
    if (savedCart) {
      const _cart = JSON.parse(savedCart)
      setCart(_cart)
    }
    window.addEventListener('storage', (e) => {
      console.log('UN changement a eu lieu dans le localstorage')
      const savedCart = window.localStorage.getItem('CART')
      if (savedCart) {
        const _cart = JSON.parse(savedCart)
        setCart(_cart)
      }
    })
  }, [])

  const handleDelete = (index) => {
    console.log('SUPPRIMER LE PRODUIT INDEX : ' + index)
    deleteFromCart(index)
  }
  return (
    <>
      <h1>LE PANIER</h1>
      <table>
        <thead>
          <th>Image</th>
          <th>Produit</th>
          <th>Prix</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {
            cart && cart.map((item, index) => {
              return (
                <tr key={index}>
                  <td>IMAGE</td>
                  <td>{item.attributes.name}</td>
                  <td>{item.attributes.price.toFixed(2)}€</td>
                  <td>
                    <AiFillDelete
                      size={18}
                      color='red'
                      onClick={() => handleDelete(index)}
                    />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Cart
