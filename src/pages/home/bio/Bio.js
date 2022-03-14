import { useEffect, useState } from 'react'
//firestore data
import { projectFirestore } from '../../../firebase/config'
//styles
import './Bio.css'

export default function Bio() {
  const [bio, setBio] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore.collection('bio-details').onSnapshot((snapshot) => {
      if(snapshot.empty){
        setError('No data to load')
        setIsPending(false)
      }else {
          let results = []
          snapshot.docs.forEach((doc) => {
              results.push({ id: doc.id, ...doc.data() })
          })
          setBio(results)
          setIsPending(false)
      }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })

    return () => unsub()
   
  }, [])

  return (
    <div className='bio-container'>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
        <div className='bio-header'>
            <h1>Bio</h1>
        </div>
        <div className='bio-content'>
            {bio && bio.map((item, i) => (
                <p key={i}>{item.document}</p>
            ))}
        </div>
    </div>
  )
}
