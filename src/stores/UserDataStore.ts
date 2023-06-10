import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type UserType = {
    username:string,
    email:string,
    course:string[],
    type:string,
    statuslogin:boolean,
    authcourse:boolean 
}

const initialState:UserType = {
    username:'',
    email:'',
    course:[],
    type:'',
    statuslogin:false,
    authcourse:true //true for test

}

export const UserDataStore = createSlice({
    name:'UserStatusStore',
    initialState,
    reducers:{
        save:(state,action: PayloadAction<any>)=>{
            state.username = action.payload.decoded.username
            state.email = action.payload.decoded.email
            state.course = action.payload.decoded.course
            state.type = action.payload.decoded.type
            if(action.payload.status === 'success'){
                state.statuslogin = true
            }
            
        },
        checkcourse:(state,action)=>{
            
        },
    }
})

export const {save,checkcourse} = UserDataStore.actions
export default UserDataStore.reducer