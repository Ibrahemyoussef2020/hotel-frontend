import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

let initialState = {
    id:'room-1',
}


const RoomBook = createSlice({
    name:"RoomBook",
    initialState,
    reducers:{
        addId:(state,action)=>{
            state.id = action.payload.id
        }
    },
})

export const {addId} = RoomBook.actions

export default RoomBook.reducer

