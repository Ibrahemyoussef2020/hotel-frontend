import { useState,useEffect} from 'react'
import {ThreeDots} from 'react-loader-spinner'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>setLoading(false),4000)
  },[loading])

  const OutPut = loading ? <div className='full-center'>
  <ThreeDots 
  height="80" 
  width="80" 
  radius="9"
  color="#4fa94d" 
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
   />
  </div> : <>
        <Header/>
          <Outlet/>
        <Footer/>
        </>

  return (
    OutPut
  )
}
export default LayOut
