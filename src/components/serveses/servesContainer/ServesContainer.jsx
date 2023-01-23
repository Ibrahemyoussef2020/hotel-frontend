import {useState,useEffect, Fragment} from 'react'
import fetchData from '../../../apis'

import {
FaCocktail,
FaHiking,
FaShuttleVan,
FaBeer
} from 'react-icons/fa';

import ServesItem from '../servesItem'
import UnderLine from '../../../utilities/underLine';

const ServesContainer = () => {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState([])

    useEffect(()=>{
        fetchData('serveses',setData)
        setTimeout(()=>setLoading(false),500)
    },[])


  return (
    <section className='Serves py-3'
    style={{background:'#99999936',overflow:'hidden'}}
    >
        <div>
            <h2 className='text-center'>Serveses</h2>
            <UnderLine/>
        </div>
        <div className='Serves-container row'>
            {data?.map((serve,index)=>{
                const icons = [
                    <FaCocktail/>,
                    <FaHiking/>,
                    <FaShuttleVan/>,
                    <FaBeer/>
                ]
            return <Fragment key ={serve.id}>
                <ServesItem 
                    loading={loading}
                    id={serve.id}
                    title={serve.title}
                    summary={serve.summary}
                    icon={icons[index]}
                />
            </Fragment>})}
        </div>    
    </section>
  )
}

export default ServesContainer