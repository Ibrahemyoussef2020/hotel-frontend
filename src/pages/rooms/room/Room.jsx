import { useDispatch } from 'react-redux';
import { NavLink,useNavigate } from 'react-router-dom';

import { addId } from '../../../redux/slices/RoomBookSlice';
import Card from '../../../components/card'
import { useEffect, useState } from 'react';

import{
  FaArrowCircleDown
} from 'react-icons/fa'

import './Room.css'

const Room = ({room}) => {
 const {type,guestsStart,guestsEnd,price,img,
 size,freeMeals,pets} = room
        
const navigate = useNavigate()
const dispatch = useDispatch()

const [hover,setHover] = useState(true)
const [toggleOpen,setToggleOpen] = useState(false)
const [hidden,setHidden] = useState('hidden')

useEffect(()=>{
 // setHidden('')
})


   const hundle_books = async ()=>{
     dispatch(addId({id:room.id}))
     navigate('/roomBook')
   }

   const handle_drop = async ()=>{
    setToggleOpen(toggleOpen => toggleOpen ? false : true)
    setHidden('')
   }

  return (
    <Card
      id={room.id}            
      img={room.img}
      price={room.price}
      title={room.type}
      layOut={true}
      nav={false}
    >
      <div className={`layout ${hover?'d-block':'d-none'} w-100 d-flex justify-content-center align-items-center`}>
          <button 
            className='border-0 py-1 px-2 custom-broun'
            onClick={hundle_books}> 
            Book Room 
          </button>
        </div>
        <div className='d-flex align-items-center flex-column py-1 position-relative'>
          <div className='room-drop-control w-100 px-1 text-end bg-transparent'>

              <button className='drop-btn'
                onClick={handle_drop}>
                <FaArrowCircleDown/>
              </button>

          </div>
          <div className={`room-dropDown ${hidden} w-100 ${toggleOpen === true ? 'down' : 'up'}`}>
            <div><small className='text-primary fw-bold'>pets : </small>  <small className='text-danger fw-bold'>{room.pets[0] === true ? 'Allowed' : 'Not Allowed'}</small></div>
            <div><small className='text-primary fw-bold'>Meals : </small>  <small className='text-danger fw-bold'> {room.freeMeals[0]  === true ? 'Allowed' : 'Not Allowed'} </small></div>
            <div><small className='text-primary fw-bold'>guests : </small>  <small className='text-danger fw-bold'> {room.guestsEnd} </small></div>
            <div><small className='text-primary fw-bold'>price : </small>  <small className='text-danger fw-bold'> {room.price} </small></div>
            <div><small className='text-primary fw-bold'>size : </small>  <small className='text-danger fw-bold'> {room.size} </small></div>
          </div>
        </div>
    </Card>
  )
}

export default Room