import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {  
  status: 'idle',
  error: null,
}

export const ProfileSlice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //console.log(action)
      state.status = 'ok'
    },
    decrease: (state) => {
      state.status = 'ok'
    },
    fromBackend: (state, action) => {
      /*console.log('fromBackend action', action.payload)*/
    },
  } ,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state, action) => {        
          state.status = 'pending'
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'fulfilled'    
        console.log('fulfilled', action.payload) 
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'rejected'   
      })
  },
})

export const fetchProfile = createAsyncThunk('Profile/fromBackend', async () => {
  const response = await fetch(`https://62cf92c4826a88972d0e8235.mockapi.io/api/v1/lead/1`, {
      headers: {}
    })    
  let data = await response.json();
  return data
})

export const { add, decrease, fromBackend } = ProfileSlice.actions

export default ProfileSlice.reducer