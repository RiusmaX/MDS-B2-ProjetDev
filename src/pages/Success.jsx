import Confetti from 'react-confetti'
import Lottie from 'lottie-react'
import checkAnimation from '../styles/animations/checked.json'

function Success () {
  return (
    <>
      <Confetti
        numberOfPieces={500}
      />
      <h1>YOUPIIIIIIII</h1>
      <Lottie animationData={checkAnimation} />
    </>
  )
}

export default Success
