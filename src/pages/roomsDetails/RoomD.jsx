import {useEffect,useState,Fragment}from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'


import { fetchSlectedData } from '../../apis'
import Cover from '../../components/cover'
import Card from '../../components/card'

import './RoomD.css'

const RoomD = () => {
  const navigate = useNavigate()

  const [selectRoom,setRoom] = useState({})
  
  const data = [
    {img:"images/room-12.jpg"},
    {img:"images/room-8.jpg"},
    {img:"images/room-4.jpg"}
  ]


const id = useSelector(state => state.RoomDetails.Detailsid)

  useEffect(()=>{
    fetchSlectedData('featured',setRoom,id)
  },[])


  return (
    <section>
        <Cover 
            title={`${selectRoom?.title} Room`}
            img={selectRoom?.img}
            salary={false}>
                <button onClick={()=> navigate('/rooms')} className='border-0 py-1 px-4 fw-semibold custom-broun'>
                    Back to Rooms
                </button>    
        </Cover>

        <div className="row marginTop marginBottom justify-content-around">
            {data?.map(room =>(
                <Fragment key={room.img}>
                <Card            
                    img={room.img}
                    layOut={false}
                />
                </Fragment>
            ))}
        </div>

        <div className='Room-details row justify-content-between px-4'>

          <article className='details col col-12 col-md-7'>
            <h5 className='m-0 mb-3 fw-bold'>Details : </h5>
            <p className='fw-semibold mb-4'>{selectRoom?.details}</p>
          </article>

          <div className='info col col-12 col-md-5'>
           <div><h5 className='m-0 mb-1'>Info : </h5></div>
           <div>
            <ul>
              <li className='mb-4 fw-semibold'>price : {selectRoom?.price}</li>
              <li className='my-4 fw-semibold'>Max Capacey : {selectRoom?.capacity} people</li>
              <li className='my-4 fw-semibold'>Pets {selectRoom?.pets}</li>
              <li className='my-4 fw-semibold'>Free Breakfast : {selectRoom?.freeBrackfast}</li>
            </ul>
           </div>
          </div>  

        </div>

        <div className='extracts col-sm-12'>
            <div className='px-3 mb-4'><h5>Extracts</h5></div>
            
            <div className='row px-4'> 

              <section className='col-12 col-sm-6 col-md-4  marginBottom'>
                {<ul className='h-100 w-100 d-flex flex-column justify-content-around '>
                  {
                    selectRoom?.extras?.map((li,index )=> {if(index <= 2) return <li key={li} className='mt-2 fw-bold'> - {li}</li>})
                  }
                </ul>}
              </section>

              <section className='col-12 col-sm-6 col-md-4 marginBottom'>
                {<ul className='h-100 w-100 d-flex flex-column justify-content-around '>
                  {
                    selectRoom?.extras?.map((li,index )=> {if(index > 2 && index < 5) return <li key={li} className='fw-bold'> - {li}</li>})
                  }
                </ul>}
              </section>

              <section className='col-12 col-sm-6 col-md-4 marginBottom'>
                {<ul className='h-100 w-100 d-flex flex-column justify-content-around '>
                  {
                    selectRoom?.extras?.map((li,index)=> {if(index >= 5) return <li key={li} className='fw-bold'> - {li}</li>})
                  }
                </ul>}
              </section>


            </div>
        </div> 
    </section>
  )
}

export default RoomD