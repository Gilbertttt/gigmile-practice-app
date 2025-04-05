import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';  // Add this!
import userReducer from './userSlice'


export const store = configureStore({
    reducer: {                       //reducers here
        counter : counterReducer,   //Adding the count reducer
        users : userReducer,   //Adding the count reducer
    }, 
})