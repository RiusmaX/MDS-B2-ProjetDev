import Lottie from 'lottie-react'
import cancelAnimation from '../styles/animations/cancel.json'

function Cancel () {
  return (
    <>
      <h1>Oh non, c'est raté ! :'(</h1>
      <Lottie animationData={cancelAnimation} />
    </>
  )
}

export default Cancel
