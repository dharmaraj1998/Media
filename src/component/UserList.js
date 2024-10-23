import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";


const UserList = ()=>{
    const {data} = useSelector((state)=>{
        return state.users
    })

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers());
    },[])
    return(
        <div>
           <h1>{JSON.stringify(data)}</h1>

           
        </div>
    )
}
export default UserList;