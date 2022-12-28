import {FaHandPointRight} from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
  return (
    <footer id='Us' className='Footer p-4 mt-4'>
      <div className="summaries row">
        <div className='col col-12 col-md-6'>
          <h4 className='text-white my-2'>you will find here : </h4>
          <h6 className='text-white'><FaHandPointRight/> Discounts up 30%</h6>
          <h6 className='text-white'><FaHandPointRight/> Return serveses within 15 days</h6>
          <h6 className='text-white'><FaHandPointRight/> Export from another continent</h6>
          <h6 className='text-white'><FaHandPointRight/> Draws and gifts</h6>
        </div>
        <div className='col col-12 col-md-6'>
          <h4 className='text-white my-2'>why us : </h4>
          <h6 className='text-white'><FaHandPointRight/> All products are brands</h6>
          <h6 className='text-white'><FaHandPointRight/> Authorized outlet</h6>
          <h6 className='text-white'><FaHandPointRight/> Our Dates are on the time</h6>
          <h6 className='text-white'><FaHandPointRight/> So fast arriving</h6>
        </div>
      </div>
      <hr/>
      <div className='icons mt-4 d-flex justify-content-between'>
        <i className="fa-brands fa-facebook text-white"></i>
        <i className="fa-brands fa-twitter text-white"></i>
        <i className="fa-brands fa-instagram text-white"></i>
        <i className="fa-brands fa-yahoo text-white"></i>
        <i className="fa-brands fa-whatsapp text-white"></i>
        <i className="fa-solid fa-square-phone text-white"></i>
      </div>
    </footer>
  )
}

export default Footer