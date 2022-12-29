import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    filterOptions : {
        type:'all',
        guestsStart:1,
        guestsEnd:60,
        guests:1,
        minSize:100,
        maxPrice:4000,
        freeMeals:false,
        pets:false
    },
    filterData:[
        {
            "id":"room-1",
            "img":"images/room-1.jpg",
            "type":"triple all",
            "guestsStart":10,
            "guestsEnd":60,
            "price":3000,
            "size":300,
            "freeMeals": [ true , false],
            "pets": [ true , false]
        },
        {
            "id":"room-2",
            "img":"images/room-2.jpg",
            "type":"family all",
            "guestsStart":3,
            "guestsEnd":6,
            "price":250,
            "size":200,
            "freeMeals": [ false , false],
            "pets": [ false , false]
        },
        {
            "id":"room-3",
            "img":"images/room-3.jpg",
            "type":"double all",
            "guestsStart":2,
            "guestsEnd":2,
            "price":100,
            "size":150,
            "freeMeals": [ false , false],
            "pets": [ false , false]
        },
        {
            "id":"room-4",
            "img":"images/room-4.jpg",
            "type":"single all",
            "guestsStart":1,
            "guestsEnd":1,
            "price":50,
            "size":100,
            "freeMeals": [ false , false],
            "pets": [ false , false]
        },
        {
            "id":"room-5",
            "img":"images/room-5.jpg",
            "type":"triple all", 
            "guestsStart":20,
            "guestsEnd":50,
            "price":500,
            "size":4000,
            "freeMeals": [ true , false],
            "pets": [ true , false]
        },
        {
            "id":"room-6",
            "img":"images/room-6.jpg",
            "type":"family all",
            "guestsStart":3,
            "guestsEnd":10,
            "price":470,
            "size":300,
            "freeMeals": [ true , false],
            "pets": [ true , false]
        },
        {
            "id":"room-7",
            "img":"images/room-7.jpg",
            "type":"double all",
            "guestsStart":2,
            "guestsEnd":2,
            "price":150,
            "size":200,
            "freeMeals": [ true , false],
            "pets": [ true , false]
        },
        {
            "id":"room-8",
            "img":"images/room-8.jpg",
            "type":"single all",
            "guestsStart":1,
            "guestsEnd":1,
            "price":100,
            "size":120,
            "freeMeals": [ true , false],
            "pets": [ true , false]
        },
        {
            "id":"room-9",
            "img":"images/room-9.jpg",
            "type":"triple all",
            "guestsStart":10,
            "guestsEnd":60,
            "price":3000,
            "size":300,
            "freeMeals": [ true , false],
            "pets": [ true , false]
        },
        {
            "id":"room-10",
            "img":"images/room-10.jpg",
            "type":"family all",
            "guestsStart":3,
            "guestsEnd":6,
            "price":250,
            "size":200,
            "freeMeals": [ false , false],
            "pets": [ false , false]
        },
        {
            "id":"room-11",
            "img":"images/room-11.jpg",
            "type":"double all",
            "guestsStart":2,
            "guestsEnd":2,
            "price":100,
            "size":150,
            "freeMeals": [ false , false],
            "pets": [ false , false]
        },
        {
            "id":"room-12",
            "img":"images/room-12.jpg",
            "type":"single all",
            "guestsStart":1,
            "guestsEnd":1,
            "price":50,
            "size":100,
            "freeMeals": [ false , false],
            "pets": [ false , false]
        },
        {
            "id":"room-13",
            "img":"images/details-2.jpg",
            "type":"triple all",
            "guestsStart":20,
            "guestsEnd":50,
            "price":500,
            "size":4000,
            "freeMeals": [ true , false],
            "pets": [ true , false]
        },
        { 
            "id":"room-14",
            "img":"images/details-3.jpg",
            "type":"family all",
            "guestsStart":3,
            "guestsEnd":10,
            "price":470,
            "size":300,
            "freeMeals": [ true , false],
            "pets": [ true , false]
        },
        {
            "id":"room-15",
            "img":"images/details-4.jpg",
            "type":"double all",
            "guestsStart":2,
            "guestsEnd":2,
            "price":150,
            "size":200,
            "freeMeals": [ true , false],
            "pets": [ true , false]
        },
        {
            "id":"room-16",
            "img":"images/room-5.jpg",
            "type":"single all",
            "guestsStart":1,
            "guestsEnd":1,
            "price":100,
            "size":120,
            "freeMeals": [ true , false],
            "pets": [ true , false]
        },
        {
            "id":"room-17",
            "img":"images/details-3.jpg",
            "type":"triple all",
            "guestsStart":20,
            "guestsEnd":45,
            "price":400,
            "size":3300,
            "freeMeals": [ false , false],
            "pets": [ false , false]
        },
        {
            "id":"room-18",
            "img":"images/details-2.jpg",
            "type":"single all",
            "guestsStart":1,
            "guestsEnd":1,
            "price":600,
            "size":400,
            "freeMeals": [ false , false],
            "pets": [ true , false]
        },
        {
            "id":"room-19",
            "img":"images/room-10.jpg",
            "type":"family all",
            "guestsStart":3,
            "guestsEnd":6,
            "price":250,
            "size":200,
            "freeMeals": [ false , false],
            "pets": [ false , false]
        },
        {
            "id":"room-20",
            "img":"images/room-11.jpg",
            "type":"double all",
            "guestsStart":2,
            "guestsEnd":2,
            "price":400,
            "size":250,
            "freeMeals": [ true , false],
            "pets": [ true , false]
        }
    ]    
}

const RoomsFilter = createSlice({
    name:'RoomsFilter',
    initialState,
    reducers:{
        addFilter: (state,action)=>{
            state.filterOptions = action.payload       
        },
        addData:(state,action)=>{
            state.filterData = action.payload
        }
    }
})

export const {addFilter,addData} = RoomsFilter.actions

export default RoomsFilter.reducer