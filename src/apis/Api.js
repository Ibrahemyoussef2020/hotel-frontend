import axios from "axios";

const api = axios.create({
    baseURL :'https://hotel-data.onrender.com'
})


const fetchData = async (data,setData)=> {
   return await api.get(data).then(res=> {
    setData(res?.data)
   }) 
}

const fetchSlectedData = async (data,setData,id)=> {
    return await api.get(`${data}/${id}`).then(res=> {
     setData(res.data)
    }) 
 }

export {fetchSlectedData} 
export default fetchData