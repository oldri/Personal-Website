//data
import bio from '../../../data/bio.json'
//styles
import './Bio.css'

export default function Bio() {
  return (
    <div className='bio-container'>
        <div className='bio-header'>
            <h1>Bio</h1>
        </div>
        <div className='bio-content'>
            {bio && bio.map((item, i) => (
                <p key={i}>{item}</p>
            ))}
        </div>
    </div>
  )
}
