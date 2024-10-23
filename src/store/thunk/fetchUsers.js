import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchUsers = createAsyncThunk("users/fetch",async ()=>{
    const response = await axios.get("http://localhost:3005/users")
     pause(1000)
    return response.data
})

const pause = (times)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,times)
    })
    
}
export {fetchUsers}