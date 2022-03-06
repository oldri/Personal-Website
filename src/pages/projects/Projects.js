//data
import data from '../../data/db.json'

import Project from './project/Project'
//styles
import './Projects.css'

export default function Projects() {
  return (
    <div className='projects-container'>
        <div className='child'>
          {data && data.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </div>
    </div>
  )
}
