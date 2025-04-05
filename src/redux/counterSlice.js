import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0     //Initial value of the state 
}
const counterSlice = createSlice({
    name: 'Counter',
   initialState,
   reducers: {              //To modify state based on actions 
        increment: (state) => {
            state.count += 1;
        }, 
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount : (state, actions) => {
            state.count += actions.payload;
        }
   }
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
