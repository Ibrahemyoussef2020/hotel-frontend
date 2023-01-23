import { Fragment, useEffect, useState } from 'react'
import fetchData from '../../../apis'

import Card from '../../card'
import UnderLine from '../../../utilities/underLine'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FeaturedContainer = () => {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState([])

    useEffect(()=>{
        fetchData('featured',setData)

        setTimeout(()=>setLoading(false),500)
    },[])

    
  return (
    <section id='featured' className='w-100'>
        <div><h3 className='text-center py-4'>Featured Rooms</h3></div>
        <UnderLine/>
        <div className="row justify-content-around">
            {data?.map(room =>(
                <Fragment key={room.id}>
                <Card
                    loading={loading}
                    id={room.id}
                    title={room.title}
                    price={room.price}
                    img={room.img}             
                ></Card>
                </Fragment>
            ))}
        </div>
    </section>
  )
}

export default FeaturedContainer