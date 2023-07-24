import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { dataset } from '../assets/mock/events';

export const fetchEventsFromAPI = createAsyncThunk(
    'api/events',
    async () => {
      const response = await fetch('api/timeline/data',{
        headers: {'content-type': 'application/json',
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Encoding':'gzip, deflate',
},
      })
      const data = await response.json();
      return data
    }
  )

const initialState = {
    language:'ru',
    events: dataset.events,
    status:null,
}

export const globalSlice = createSlice({
  name: 'mir',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers:{
    [fetchEventsFromAPI.pending]: (state, action) => {
      state.status = 'pending'
    },
    [fetchEventsFromAPI.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      console.log(action.payload)
    },
    [fetchEventsFromAPI.rejected]: (state, action) => {
      state.status = 'rejected'
    },
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = globalSlice.actions

export default globalSlice.reducer