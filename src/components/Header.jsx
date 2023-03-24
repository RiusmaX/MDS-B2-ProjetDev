import { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import '../styles/HeaderStyle.css'

function Header () {
  const [cart, setCart] = useState()

  const navigate = useNavigate()

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

  const handleCart = () => {
    navigate('/cart')
  }

  return (
    <header className='header'>
      <div className='header-logo'>
        <img src='/assets/img/logo.png' height={50} />
      </div>
      <div className='header-menu'>
        <nav>
          <span>
            <a href='/'>Accueil</a>
          </span>
          <span>
            <a href='/restaurants'>Restaurants</a>
          </span>
          <span>
            <a href='/about'>A propos</a>
          </span>
        </nav>
      </div>
      <div className='header-cart' onClick={handleCart}>
        <AiOutlineShoppingCart size={30} color='white' />
        <span>{cart && cart.length}</span>
      </div>
    </header>
  )
}

export default Header
