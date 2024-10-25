import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";



const store = configureStore({
    reducer :{
        users : userReducer
    }
})
export {store}
export * from "./thunk/fetchUsers"
export * from "./thunk/addUser"