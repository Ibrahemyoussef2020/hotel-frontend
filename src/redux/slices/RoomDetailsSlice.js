import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    Detailsid:'featured-3',
}


const RoomDetails = createSlice({
    name:"RoomDetails",
    initialState,
    reducers:{
        addDetailsId:(state,action)=>{
            state.Detailsid = action.payload.id
        }
    },
})

export const {addDetailsId} = RoomDetails.actions

export default RoomDetails.reducer