import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[]
};

const SendData = createSlice({
    name:'SendDataForBook',
    initialState,
    reducers:{
        sendData:(state,action)=>{
            state.data = [...state.data,action.payload]
        }
    }
})

export const {sendData} = SendData.actions

export default SendData.reducer



