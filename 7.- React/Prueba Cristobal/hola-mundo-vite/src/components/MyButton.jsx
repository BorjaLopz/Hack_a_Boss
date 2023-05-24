import { useState } from 'react'

function MyButton() {
  const [liked, setLiked] = useState(false)

  if (liked) {
    return 'React me esta gustando!'
  }

  return <div className="container">
    <button onClick={() => setLiked(true)}>Púlsame</button>
  </div>
}

export default MyButton
