import { HashLink } from 'react-router-hash-link';
import UnderLine from '../../utilities/underLine'

import './Cover.css'

const Cover = ({
  title='Luxurios Rooms',
  img='images/defaultBcg.jpg',
  salary= true,
  children
}) => {

  return (
    <section className='Cover position-relative'>
        <div className='cover-img'>
        <img src={img}  alt='Logo' className="h-100 w-100"  />
        </div>

        <div className='cover-content py-2'>
            <h1 className='text-center'>{title}</h1>
            <UnderLine/>
            {salary && <h5 className='text-center mb-4'>Deluxe Rooms</h5>}
            <div className='text-center'>
            {salary && <button className='border-0 py-1 px-4 fw-semibold custom-broun'>
                <HashLink to='#featured' className='text-white'>Ouer Rooms</HashLink>
              </button>
            }
            {children}
            </div>
        </div>
    </section>
  )
}

export default Cover