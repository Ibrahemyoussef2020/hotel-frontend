import {Fragment, useEffect,useState} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import fetchData from '../../apis'



import Room from './room'
import RoomFilter from './roomFilter'
import {addFilter,addData} from '../../redux'

const Rooms = () => {
 const [allData,setAllData] = useState([])
 const [rooms,setRooms] = useState([])
 

 const {filterOptions,filterData} = useSelector(state => state.RoomsFilter)
 
 const options = allData?.length ? [...new Set(allData.map(d => d.type))] : []


 useEffect(()=>{
    fetchData('rooms',setAllData)
    fetchData('rooms',setRooms)
},[])


  return (
    <section>        
       <RoomFilter
            rooms={rooms}
            setRooms={setRooms}
        />
        <section>          
            <div>
                <h4 className='px-4 mt-4 text-center fw-bold'>
                    {filterData.length ? 
                    <>
                        <span className='text-primary'>Results :  </span>  
                        <span className='text-success'> {filterData.length}</span>
                    </>
                        :
                        <span className='text-info'>No result </span>  
                    }
                </h4> 
            </div>
        <div className='d-flex flex-wrap px-2 justify-content-around'>          
        {filterData.length && filterData?.map(room =>{
                return <Fragment key={room.id}>
                <Room  room={room}/>
                </Fragment>
            })}
        </div>
        </section>
    </section>
  )
}

export default Rooms
























/*const typeFilter = (e)=>{
     if(e.target.value === 'all'){
        const type = data?.map(d => d)  
        setData(type)
     }else{
        const type = data?.filter(d => d.type === e.target.value)  
        setData(type)
     }
}

const guestsFilter = (e)=>{
    const guests = data?.filter(d => d.guestsStart <= e.target.value && d.guestsEnd <= e.target.value)  
    setData(guests)
}

const priceFilter = (e)=>{
    const price = data?.filter(d => d.price <= e.target.value)  
    setData(price) 
}

const sizeFilter = (e)=>{
    const size = data?.filter(d => d.size >= e.target.value)  
    setData(size) 
}


const MealsFilter = (e)=>{
    if(e.target.checked === true){
        const freeMeals = data.filter(d => d.freeMeals === true)
        setData(freeMeals)
    }else{
        const freeMeals = data.map(d => d)
        setData(freeMeals)
    }
}

const petsFilter = (e)=>{
    if(e.target.checked === true){
        const pets = data.filter(d => d.pets === true)
        setData(pets)
    }else{
        const pets = data.map(d => d)
        setData(pets)
    }
}

const typeTest = (e)=>{
    setType(e.target.value)
    setData()
}

const resetFilter = ()=>{
      
}*/