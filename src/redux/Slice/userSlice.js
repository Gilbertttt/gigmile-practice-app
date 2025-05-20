// Fetch Users data from an API using Redux Slice
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk("users/fetchUsers", 
    async () => {
        try{
            const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
            if(response.ok){
                const data = await response.json();
                console.log(data)
            } else{
                throw new Error('Failed to fetch data');
            }
        }
            catch(error) {
                console.error('Error', error);
            }

        }
)
const userSlice = createSlice({ 
    name : 'Users',
     initialState : {
        users : [],
    isLoading : false,
    error: null,
},
    reducers : {},  // Because its Axios and we're fetching using API there's no need for a reducer instead ....
    extraReducers:(builder)=> {
       builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
                state.error = action.error.message;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})

export default userSlice.reducer
    
