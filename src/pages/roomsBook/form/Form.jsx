import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {sendData} from '../../../redux'

import './Form.css'

const Form = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [initData,setInitData] = useState({
    name:"",
    phone:"",
    duration:1,
    recommends:""
  })

  const handleChange = (e)=>{
    const {name,value} = e.target
    setInitData({
      ...initData,
      [name]:value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(sendData(initData))
    navigate('/hasSent')
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}
      className='Form px-2 text-center w-100'>
      <div className='name w-100 text-center fz-4 my-2 p-2'>
        <input onChange={(e)=>handleChange(e)}
        name='name' type="text" placeholder='your name'/>
      </div>

      <div className='phone w-100 text-center fz-4 my-2 p-2'>
        <input onChange={(e)=>handleChange(e)}
        name='phone' type="tel" placeholder='your phone'/>
      </div>

      <div className='duration w-100 text-center fz-4 my-2 p-2'>
        <input onChange={(e)=>handleChange(e)}
        name='duration' type="number" placeholder='duration in days'/>
      </div>

      <div className='recommends w-100 text-center fz-4 my-2 p-2'>
        <textarea onChange={(e)=>handleChange(e)}
        name='recommends' type="textarea" placeholder='
        we care about your recommends
        '></textarea>
      </div>

      <div className='duration my-2'>
        <button type="submit" className='w-50 border-0 py-1 px-4 fw-semibold custom-broun'>
            send Data
        </button>
      </div>

    </form>
  )
}

export default Form