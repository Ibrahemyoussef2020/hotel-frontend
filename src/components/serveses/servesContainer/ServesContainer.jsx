import {useState,useEffect, Fragment} from 'react'
import fetchData from '../../../apis'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
FaCocktail,
FaHiking,
FaShuttleVan,
FaBeer
} from 'react-icons/fa';

import ServesItem from '../servesItem'
import UnderLine from '../../../utilities/underLine';

const ServesContainer = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetchData('serveses',setData)
    },[])

    if(!data.length){
        return(
        <section id='featured' className='w-100'>
        <div><h3 className='text-center py-4'>Serveses</h3></div>
        <UnderLine/>  
          <div className={`row text-center bg-inhrit`}>
           <div className='Skeleton-container col-sm-6 col-md-4   my-3 text-center bg-inhrit'>
                <Skeleton height={200} width={'100%'}/>
            </div>
            <div className='Skeleton-container col-sm-6 col-md-4   my-3 text-center bg-inhrit'>
                <Skeleton height={200} width={'100%'}/>
            </div>
            <div className='Skeleton-container col-sm-6 col-md-4  my-3 text-center bg-inhrit'>
                <Skeleton height={200} width={'100%'}/>
            </div>
          </div>
          </section>
        )
    }


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