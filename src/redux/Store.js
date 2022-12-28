import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import  {
RoomDetails,
RoomsFilter,  
RoomBook,
SendData,
} from "./";

const Store = configureStore({
    reducer:{
        RoomDetails:RoomDetails,
        RoomBook : RoomBook,
        RoomsFilter:RoomsFilter,
        SendData : SendData,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    devTools:false
})

export default Store