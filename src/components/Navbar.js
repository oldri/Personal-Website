import { Link } from 'react-router-dom'

//styles
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li className='name' >
                <span>Oldri Kecaj</span> 
            </li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><a 
                href='https://drive.google.com/file/d/1TAO2Y8yLgIBmjgtHXAcbLbcrIuPfqfmb/view?usp=sharing'
            >CV</a></li>
        </ul>
    </div>
  )
}
