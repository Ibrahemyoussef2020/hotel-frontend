import { useEffect, useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {addFilter,addData} from '.././../../redux'

import fetchData from '../../../apis'

import './RoomFilter.css'  

const RoomFilter = ({rooms,setRooms}) => {
    const [allData,setAllData] = useState([])
    const [size,setSize] = useState(100)

    useEffect(()=>{
        fetchData('rooms',setAllData)
    },[])

    const {filterOptions,filterData} = useSelector(state => state.RoomsFilter)
    const dispatch = useDispatch()
    
    const options = allData?.length ? [...new Set(allData.map(d => d.type))] : []


    const data = allData.length ? allData.filter(room =>   
            room.type.includes(filterOptions.type) &&
            room.size >= filterOptions.minSize &&
            room.price <= filterOptions.maxPrice && 
            +room.guestsEnd >= +filterOptions.guests &&
            room.freeMeals.includes(filterOptions.freeMeals) &&
            room.pets.includes(filterOptions.pets)      
    ) : []


    const filters = ()=>{
        dispatch(addData(data))
    }

    const handleFilter = async (e)=>{
         const {name} = e.target,    
         
         value = e.target.type === "checkbox" ? e.target.checked : e.target.value

         if(e.target.type === "range"){
            setSize(value)
         }

        dispatch(addFilter({
            ...filterOptions,[name]:value     
          })) 
    }
    
  return (
    <section className='RoomFilter row d-flex text-danger fw-bold'>
        
        <section className="col col-12 col-md-6 border-md-0    d-flex flex-column justify-content-around align-items-center bg-light px-2">
            <div className='my-4 d-flex gap-3'>
                <label htmlFor="">choose type</label>
                <select 
                    name="type" id="room-type"
                    onChange={(e)=>handleFilter(e,'type')}
                    onMouseUp={(e)=>filters(e)}
                    >
                    <option value='all'>all</option>
                { options.map(option => 
                    <option key={option} value={option}>
                        {option}
                    </option>
                )}
                </select>
            </div>

            <div className=" my-4 d-flex gap-3">
                <label htmlFor="guests">guests : </label>
                <input
                    name='guests'
                    id='guests' 
                    type="number" min={1} max={60}
                    defaultValue={1} 
                    onChange={(e)=>handleFilter(e,'guests')} 
                    onMouseUp={(e)=>filters(e)}
                    onKeyUp={(e)=>filters(e)}
                />
            </div>

            <div className='my-4 d-flex gap-3'>
                <label htmlFor="maxPrice">price Range</label>
                <input
                    name="maxPrice"  
                    type="number" id="maxPrice" 
                    min={50} max={4000} step={10}
                    defaultValue={4000} 
                    onChange={(e)=>handleFilter(e,'price')}
                    onMouseUp={(e)=>filters(e)}
                    onKeyUp={(e)=>filters(e)} 
                />
            </div> 
        </section>

        <section className="col col-12 col-md-6 d-flex flex-column justify-content-around align-items-center bg-light px-2">
            <div className="my-4 d-flex gap-3">
                <label htmlFor="minSize">min size</label>
                <input 
                    name='minSize'
                    id='minSize' type='range' 
                    min={90} max={700} step={10}
                    defaultValue={size}
                    onChange={(e)=>handleFilter(e,'size')}
                    onMouseUp={(e)=>filters(e)}
                />
                <label htmlFor="minSize" className='text-secondary'>{size}</label>           
            </div>  
            <div className='my-4 d-flex gap-3'>
                <label htmlFor="pets">Pets Allowed</label>
                <input 
                    name='pets' id='pets' type="checkbox"
                    defaultValue={1} 
                    onChange={(e)=>handleFilter(e,'pets')}
                    onMouseLeave={(e)=>filters(e)}  
                />
            </div>
            <div className='my-4 d-flex gap-3'>
                <label htmlFor="freeMeals">Free Meals</label>
                <input
                    name='freeMeals' id='freeMeals' type="checkbox"
                    defaultValue={1} 
                    onChange={(e)=>handleFilter(e,'freeMeals')}
                    onMouseLeave={(e)=>filters(e)}
                />
            </div>  
        </section>
     </section>    
)}

export default RoomFilter