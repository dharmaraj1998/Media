import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, fetchUsers } from "../store";



const UserList = ()=>{
    const {data,isLoading,error} = useSelector((state)=>{
        return state.users
    })

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers());
    },[])

    const handleAddUsers = ()=>{
        dispatch(addUsers())
    }

    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error...</div>
    }
    const renderList = data.map((user)=>{
        return <div key={user.id} className="flex flex-row mb-3">{user.name}</div>
    })
    return(
        <div>
          <button onClick={handleAddUsers}>add</button>
           {renderList}

           
        </div>
    )
}
export default UserList;