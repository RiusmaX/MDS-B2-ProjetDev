import '../styles/HeaderStyle.css'

function Header() {
  return ( 
    <header className="header">
      <div className="header-logo">
        <img src='/assets/img/logo.png' height={50} />
      </div>
      <div className="header-menu">
        <nav>
          <span>
            <a href="#toto">Menu 1</a>
          </span>
          <span>
            <a href="#toto">Menu 2</a>
          </span>
          <span>
            <a href="#toto">Menu 3</a>
          </span>
        </nav>
      </div>
      <div className="header-socials">
        <a href="#toto">
          📷
        </a>
        <a href="#toto">
          📷
        </a>
      </div>
    </header>
   );
}

export default Header;