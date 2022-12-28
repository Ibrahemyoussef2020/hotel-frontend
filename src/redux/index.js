import RoomDetails from './slices/RoomDetailsSlice'
import { addDetailsId } from './slices/RoomDetailsSlice'

import RoomsFilter from './slices/RoomsFilterSlice'
import { addFilter,addData } from './slices/RoomsFilterSlice'

import RoomBook from './slices/RoomBookSlice'
import {addId} from './slices/RoomBookSlice'



import SendData from './slices/SendDataSlice'
import { sendData } from './slices/SendDataSlice'


export {

    RoomDetails,
    addDetailsId,

    RoomsFilter,
    addFilter,
    addData,

    RoomBook,
    addId,
    
    SendData,
    sendData
}
