import { useEffect, useState } from "react"

function Clock () {
  // Initialisation de l'état local
  const [date, setDate] = useState(new Date())

  // Fonction appelée automatiquement au montage du composant
  useEffect(() => {
    // Fonction appelée toute les 1000ms
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000)
    // Fonction appelée automatiquement au démontage du composant
    return () => {
      clearInterval(interval)
    }
  }, [])

  // Affichage du composant
  return (
    <h1>{date.toLocaleTimeString()}</h1>
  )
}

export default Clock