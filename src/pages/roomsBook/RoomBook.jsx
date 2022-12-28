import {useEffect,useState,Fragment}from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import {fetchSlectedData } from '../../apis'

import Cover from '../../components/cover'
import Card from '../../components/card'
import Form from './form'

import Image from './Image'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const RoomBook = () => {
  const [selectRoom,setRoom] = useState({})

  const {id} = useSelector(state => state.RoomBook)

  useEffect(()=>{
    fetchSlectedData('rooms',setRoom,id) 
  },[])

  console.log(selectRoom);
  console.log(id);
 
  return (
    <>
    <section>
          <Cover
            title='Luxurios Rooms'
            img={selectRoom?.img}
            salary={false}
          >
            <button className='border-0 py-1 px-4 fw-semibold custom-broun'>
              <NavLink to='/' className='text-white'>Back To Home</NavLink>
            </button>
          </Cover>

        <div className='Room-details row justify-content-between px-4'>               
          <article className='details col col-12 col-md-6'>
            <div className='fw-semibold mb-4'>{<Form />}</div>
          </article>

          <div style={{paddingLeft:"2rem"}} className='info col col-12 col-md-6'>
            <ul className='h-100 d-flex flex-column justify-content-around py-1'>
              <li className=''><h5 className='m-0 mb-1'>Info : </h5></li>
              <li className=' fw-semibold'>price : {selectRoom?.price}</li>
              <li className=' fw-semibold'>capacey : {selectRoom?.guestsEnd} people</li>
              <li className='fw-semibold'>size : {selectRoom?.size}</li>
              <li className=' fw-semibold'>Pets : {selectRoom?.pets?.includes(true) ? 'Allowed' : 'Not Allowed'}</li>
              <li className=' fw-semibold'>Free Breakfast : {selectRoom?.freeMeals?.includes(true) ? 'Allowed' : 'Not Allowed'}</li>
            </ul>
           </div>  
  </div>
  </section>
  </>

  )
}

export default RoomBook