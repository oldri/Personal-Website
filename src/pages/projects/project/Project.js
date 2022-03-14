import { useState } from 'react'
//styles
import { FaGithub, FaGlobe  } from "react-icons/fa";
import './Project.css'
//images
import image1 from '../../../images/image.png'
import image2 from '../../../images/image2.png'


export default function Project({ project }) {
  const [currentImage, setCurrentImage] = useState(image1)

  return (
    <div className='project-container'>
        <div className='project-item'>
           <div 
            className='project-slideshow'
            style={{ backgroundImage: `url(${currentImage})`  }}
            >
            <button className="btn" onClick={() => setCurrentImage(currentImage === image1 ? image2 : image1)} >Click</button>
           </div>
           {project.map((p) => (
             <div className='project-info'>
              <h1 className='project-title'>{project.title}</h1>
              <p className='project-type'>{project['project-type']}</p>
              <br/>
              <ul className='project-tools'>
                {project && project.toolsUsed.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
              <div className='links'>
                <ul className='project-links'>
                  <li><a href={project.links.github}>Github<FaGithub/></a></li>
                  <li><a href={project.links.website}>Website<FaGlobe/></a></li>
                </ul>
              </div>
              <p className='project-description'>
                  <p className='project-description-header'>Description:</p>
                  {project && project.description.map((note, i) => (
                    <><p key={i}>{note}</p><br></br></>
                  ))}
              </p>
           </div>))}
        </div>
    </div>
  )
}
