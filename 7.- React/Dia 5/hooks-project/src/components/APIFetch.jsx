import { useEffect, useState } from 'react'
import { apiCall } from '../services/photos.js'

function APIFetch() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    apiCall()
      .then(data => setPhotos(data))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    console.log(photos)
  }, [photos])

  return <>
    <h1 className='text-center'>Fotos</h1>
    <div className="row">
      {photos.map(photo => <div key={photo.id} className="card" style={{width: '18rem'}}>
        <img src={photo.thumbnailUrl} className="card-img-top" alt={photo.title} />
        <div className="card-body">
          <p className="card-text">{photo.title}</p>
        </div>
      </div>)}
    </div>
  </>
}

export default APIFetch
