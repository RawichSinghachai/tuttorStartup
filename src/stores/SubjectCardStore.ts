import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {topic:'PAT1',duration:'30 Hour',price:'3500 Bath'},
  {topic:'PAT2',duration:'25 Hour',price:'2000 Bath'},
  {topic:'PAT3',duration:'42 Hour',price:'4500 Bath'},
  {topic:'PAT4',duration:'50 Hour',price:'6000 Bath'},
  {topic:'PAT5',duration:'30 Hour',price:'3500 Bath'},
  {topic:'PAT6',duration:'25 Hour',price:'2000 Bath'},
  {topic:'PAT7',duration:'42 Hour',price:'4500 Bath'},
  {topic:'PAT8',duration:'50 Hour',price:'6000 Bath'},
]


export const SubjectCardStore = createSlice({
    name:'SubjectCardStore',
    initialState,
    reducers:{

    }
})


export default SubjectCardStore.reducer