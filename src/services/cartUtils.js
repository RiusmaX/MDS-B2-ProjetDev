const addToCart_old = (item) => {
  // Etape 1 : Je récupère mon panier sauvegardé
  const savedCart = window.localStorage.getItem('CART')
  // Cas n° 1 J'ai déjà un panier
  if (savedCart) {
    // Je récupère mon panier sauvegardé au format objet
    const cart = JSON.parse(savedCart)
    // J'ajoute mon item au panier
    cart.push(item)

    window.localStorage.setItem('CART', JSON.stringify(cart))
  } else { // Cas n°2 Je n'ai pas de panier
    const cart = [item]

    window.localStorage.setItem('CART', JSON.stringify(cart))
  }

  window.dispatchEvent(new Event('storage'))
}

const addToCart = (item) => {
  // Etape 1 : Je récupère mon panier sauvegardé
  const savedCart = window.localStorage.getItem('CART')
  // Etape 2 : Je récupère le panier ou j'en créé un nouveau
  const cart = savedCart ? JSON.parse(savedCart) : []
  // Etape 3 : J'ajoute mon item
  cart.push(item)
  // Etape 4 : Je sauvegarde mon panier
  window.localStorage.setItem('CART', JSON.stringify(cart))
  // Etape 5 : J'envoi un évèvement pour avertir les autres composants
  window.dispatchEvent(new Event('storage'))
}

export {
  addToCart
}
