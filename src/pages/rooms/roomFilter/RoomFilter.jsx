import { useEffect, useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {addFilter,addData} from '.././../../redux'

import fetchData from '../../../apis'

import './RoomFilter.css'  

const RoomFilter = ({rooms,setRooms}) => {
    const [allData,setAllData] = useState([])


    useEffect(()=>{
        fetchData('rooms',setAllData)
    },[])

    const {filterOptions,filterData} = useSelector(state => state.RoomsFilter)
    const dispatch = useDispatch()
    
    const options = allData?.length ? [...new Set(allData.map(d => d.type))] : []


    const data = allData.length ? allData.filter(room =>{ 
            
            return(room.type.includes(filterOptions.type) &&
            room.size >= filterOptions.minSize &&
            room.price <= filterOptions.maxPrice && 
            +room.guestsEnd >= +filterOptions.guests &&
            room.freeMeals.toString().includes(filterOptions.freeMeals.toString()) &&
            room.pets.toString().includes(filterOptions.pets.toString()))
        }      
    ) : []


    const filters = ()=>{
        dispatch(addData(data))
    }

    const handleFilter = async (e)=>{
         const {name,value} = e.target  
             
        console.log(value);
        console.log(filterOptions);

        dispatch(addFilter({
            ...filterOptions,[name]:value     
          })) 
    }
  return (
    <section className='RoomFilter row d-flex text-danger fw-bold'>
        
        <section className="col col-12 col-md-6 border-md-0    d-flex flex-column justify-content-around align-items-center bg-light px-2">
            <div className='my-4 d-flex gap-3'>
                <label htmlFor="">Type</label>
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
                <label htmlFor="guests">Guests : </label>
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
                <label htmlFor="maxPrice">Max price</label>
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
                <label htmlFor="minSize">Min size</label>
                <input 
                    name='minSize'
                    id='minSize' type='number' 
                    min={90} max={700} step={10}
                    defaultValue={100}
                    onChange={(e)=>handleFilter(e,'size')}
                    onMouseUp={(e)=>filters(e)}
                    onKeyUp={(e)=>filters(e)}    
                />
            </div>  
            <div className='my-4 d-flex gap-3'>
                <label htmlFor="pets">Pets</label>
                
                <select name='pets' id='pets'
                    onChange={(e)=>handleFilter(e,'pets')}
                    onMouseUp={(e)=>filters(e)} 
                >
                    <option value={false}>don't care</option>
                    <option value={true}>care about</option>
                    
                </select>
                

            </div>
            <div className='my-4 d-flex gap-3'>
                <label htmlFor="freeMeals">Meals</label>
                
                <select  name='freeMeals' id='freeMeals'
                    onChange={(e)=>handleFilter(e,'freeMeals')}
                    onMouseUp={(e)=>filters(e)} 
                >
                    <option value={false}>all meals</option>
                    <option value={true}>free meals</option>
                </select>
            </div>  
        </section>
     </section>    
)}

export default RoomFilter