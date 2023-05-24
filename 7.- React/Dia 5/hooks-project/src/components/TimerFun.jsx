import { useState, useEffect } from 'react'

function TimerFun() {
  const [state, setState] = useState(0)

  useEffect(() => {
    let time = 0
    const interval = setInterval(() => {
      console.log(`Temporizador ${state}: ${time++}`)
    }, 1000)

    return () => clearInterval(interval)
  })

  const handleState = () => {
    setState((prev) => prev + 1)
  }

  return (
    <>
      <p>Revisa la consola para ver el Temporizador</p>
      <button className='btn btn-primary' onClick={handleState}>
        Otro contador
      </button>
    </>
  )
}

export default TimerFun
