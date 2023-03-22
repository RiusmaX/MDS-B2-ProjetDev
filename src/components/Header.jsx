import '../styles/HeaderStyle.css'

function Header () {
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
      <div className='header-socials'>
        <a href='#toto'>
          📷
        </a>
        <a href='#toto'>
          📷
        </a>
      </div>
    </header>
  )
}

export default Header
