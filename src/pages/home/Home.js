import Bio from './bio/Bio'
import Tools from './tools/Tools'
//styles
import './Home.css'

export default function Home() {
  return (
    <div className='container'>
        <div className='child'>
            <Bio />
        </div>
        <div className='child'>
           <Tools />
        </div>
    </div>
  )
}
