import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunk/fetchUsers";
import { addUser } from "../thunk/addUser";

const userSlice = createSlice({
    name: "user",
    initialState: {
        data : [],
        isLoading : false,
        error : null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state,action)=>{
            state.isLoading = true;
            

        });
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoading =false;
            state.data = action.payload;

        });
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload

        })
        builder.addCase(addUser.pending,(state,action)=>{
            state.isLoading = true;

        })
        builder.addCase(addUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data.push(action.payload);
            
        })
        builder.addCase(addUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload

            
        })
    }
})

export const userReducer= userSlice.reducer