import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {addDetailsId} from '../../redux'

import './Card.css'

const Card = ({
  id,
  title,
  price,
  img,
  filter=false,
  layOut = true,
  nav = true,
  children
}) => {


 const dispatch = useDispatch()
  
  const [hover,setHover] = useState(false)

  const navigate = useNavigate()

  const room_details = ()=>{
    dispatch(addDetailsId({id:id}))
    navigate('/roomDetails')
  }

  return (
    <div 
      onMouseEnter={()=>setHover(layOut && true)}
      onMouseLeave={()=>setHover(layOut && false)}
    
      className={`Card col col-${filter?'5':'11'} col-sm-5 col-md-3 position-relative p-0 my-3 mx-1`}>

        {children}
        
        {layOut && <small className='price py-1 text-center text-white'>{price}</small>}
        
        {layOut &&  nav && <div className={`layout ${hover?'d-block':'d-none'} w-100 d-flex justify-content-center align-items-center`}>
          <button onClick={()=>room_details()} className='border-0 py-1 px-2 custom-broun'>{title}</button>
        </div>}

        <div className='img-con w-100'>
            <img className='w-100' src={img} alt={title}/>
        </div>

        {layOut && <footer className='w-100 fw-semibold text-center'>
          <span>{title.split(' ')[0]}</span>
        </footer>}
    </div>
  )
}

export default Card