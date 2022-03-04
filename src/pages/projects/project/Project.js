//styles
import { FaGithub, FaGlobe  } from "react-icons/fa";
import './Project.css'
import image1 from '../../../images/image.png'
import image2 from '../../../images/image2.png'
import { useState } from 'react'

//project
let project  = {
    "title": "Çanta",
    "project-type": "Freelance",
    "id": "1",
    "toolsUsed": ["JavaScript", "HTML", "CSS", "Bootstrap", "Netlify"],
    "links": {
        "website": "https://canta.xyz/",
        "github": "https://github.com/oldri/Canta_2.0"
    },
    "description": [
        "Programmed responsive website for a client using HTML, CSS, Bootstrap & Javascript, implementing media queries, hamburger menu animation, wide browser compatibility & reusable components ",
        "Designed minimal clothing & accessory blog highlighting client pieces and collections, created interesting and user-friendly interactions, performed extensive user research improving the website design process",
        "Deployed client website with Netlify"
    ]
}


export default function Project() {
  const [currentImage, setCurrentImage] = useState(image1)

  const handleClick = () => {
    if(currentImage === image1){
      setCurrentImage(image2)
    }else{
      setCurrentImage(image1)
    }
  }
  
  return (
    <div className='project-container'>
        <div className='project-item'>
           <div 
            className='project-slideshow'
            style={{ backgroundImage: `url(${currentImage})`  }}
            >
            <button className="btn" onClick={() => handleClick()} >Click</button>
           </div>
           <div className='project-info'>
              <h1 className='project-title'>{project.title}</h1>
              <p className='project-type'>{project['project-type']}</p>
              <br/>
              <ul className='project-tools'>
                {project && project.toolsUsed.map((tool) => (
                  <li key={tool}>{tool}</li>
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
                  {project && project.description.map((note) => (
                    <><p key={note}>{note}</p><br></br></>
                  ))}
              </p>
           </div>
        </div>
    </div>
  )
}
