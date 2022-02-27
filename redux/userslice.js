import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    loggedUser : {},
    mobileSidebar : false
 }

const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  
    user(state, action) {
      state.loggedUser = action.payload
    },


    mobileSidebar(state,action){
      const oldvalue = state.mobileSidebar
      state.mobileSidebar = !oldvalue
      console.log(state.mobileSidebar)
    }




  },
})

export const { user,mobileSidebar} = userSlice.actions
export default userSlice.reducer