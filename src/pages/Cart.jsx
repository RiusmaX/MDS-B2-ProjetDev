import { useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { deleteFromCart } from '../services/cartUtils'

function Cart () {
  const [cart, setCart] = useState()
  const stripe = useStripe()

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

  const handlePayment = async () => {
    const checkoutOptions = {
      lineItems: [
        {
          price: 'price_1Mp8GJHoDJ3E1I0xb64veBA6',
          quantity: 1
        }
      ],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`
    }
    const { error } = await stripe.redirectToCheckout(checkoutOptions)
    console.error(error)
  }

  // let total = 0
  // if (cart) {
  //   for (const item of cart) {
  //     total = total + item.attributes.price
  //   }
  // }

  let total = 0
  if (cart) {
    total = cart.reduce((prev, item) => prev + item.attributes.price, 0)
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
        <tfoot>
          <tr>
            <td />
            <th>Total</th>
            <td>
              <strong>{total.toFixed(2)}€</strong>
            </td>
            <td />
          </tr>
        </tfoot>
      </table>
      <div>
        <button onClick={handlePayment}>PAYER MAINTENANT</button>
      </div>
    </>
  )
}

export default Cart
