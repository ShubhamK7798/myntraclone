import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    loggedUser : {}
 }

const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  
    user(state, action) {
      state.loggedUser = action.payload
    },
  },
})

export const { user} = userSlice.actions
export default userSlice.reducer