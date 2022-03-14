import { useEffect, useState } from 'react'
//firestore data
import { projectFirestore } from '../../firebase/config'
//component
import Project from './project/Project'
//styles
import './Projects.css'

export default function Projects() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore.collection('projects').onSnapshot((snapshot) => {
      if(snapshot.empty){
        setError('No data to load')
        setIsPending(false)
      }else {
          let results = []
          snapshot.docs.forEach((doc) => {
              results.push({ id: doc.id, ...doc.data() })
          })
          setData(results)
          setIsPending(false)
      }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })

    return () => unsub()
   
  }, [])

  return (
    <div className='projects-container'>
    {error && <p className="error">{error}</p>}
    {isPending && <p className="loading">Loading...</p>}
        <div className='child'>
          {data && data.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </div>
    </div>
  )
}



