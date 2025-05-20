import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchComplaints = createAsyncThunk("/comments",
        async () => {
             try {
        const response = await fetch ("https://jsonplaceholder.typicode.com");
        if(response.ok) {
            await response.json();
        } else {
            throw new Error('Failed to fetch data');
        }
       
    } catch (error) {
        console.error('Error', error)
    }
    },
     
   {/* async () => {
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

        }*/}
)

const complaintsSlice = createSlice({
    name : "complaints",
    initialState : {
        complaints : [],
        isLoading: false,
        error: null,
        resolved: false,
        
    },
    reducers: {
        lightmode: (state, action) => {
           state.lightmode = action.payload
        },
        darkmode: (state, action) => {
           state.darkmode = action.payload
        },
        resolveComplaints: (state, action) => {
            state.resolved = action.payload
        }

    },
    extraReducer : (builder) => {
        builder
            .addCase(fetchComplaints.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            }) 
            .addCase(fetchComplaints.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.complaints = action.payload;
            })
            .addCase(fetchComplaints.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
    


})

export default complaintsSlice.reducer
