import { useEffect, useState } from 'react'

function Count() {
  const [number, setNumber] = useState([0])

  const buttonHandleClick = () => {
    const n = number.length
    setNumber([...number, n])
  }

  useEffect(() => {
    console.log(number)
  }, [number])

  return (
    <>
      <h1>El número es:</h1>
      <h2>{number[number.length - 1]}</h2>
      <button onClick={buttonHandleClick}>Aumentar</button>
    </>
  )
}

export default Count
