import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import Winner from './Winner.jsx'

function NumberGuessing() {
  const [option, setOption] = useState(generateRandomNumber)
  const [guess, setGuess] = useState(1)
  const [score, setScore] = useState(0)
  const [confetti, setConfetti] = useState(false)

  const width = window.innerWidth
  const height = window.innerHeight

  useEffect(() => console.log(option), [option])

  const checkNumber = () => {
    if (!guess) return

    if (guess === option) {
      // setScore(prev => prev + 1)
      setScore(score + 1)
      console.log('Ganaste!')
      setConfetti(true)
    }

    setOption(generateRandomNumber)
  }

  const setNumber = ({ target: { value } }) => {
    if (!value) return

    setGuess(parseInt(value))
  }

  const confettiEndHandler = () => {
    setConfetti(false)
  }

  return (
    <>
      {confetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          onConfettiComplete={confettiEndHandler}
        />
      )}
      {confetti && <Winner score={score} />}
      <h3>¿Qué número entre 1 y 10 estoy pensando?</h3>
      <input
        type="number"
        min={1}
        max={10}
        value={guess}
        onChange={setNumber}
      />
      {""}
      <button className="btn btn-primary" onClick={checkNumber}>
        Adivina!
      </button>{" "}
      {""}
      <p>Has ganado: {score} juegos</p>
    </>
  );
}

export default NumberGuessing

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1
}