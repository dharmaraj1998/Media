import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';

function UsersList() {
    const [isLoadingUsers,setIsLoadingUsers] = useState(false)
    const [isLoadingUsersError,setIsLoadingUsersError] = useState(null)
  const dispatch = useDispatch();
  const {  data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
   setIsLoadingUsers(true)
    dispatch(fetchUsers())
    .unwrap()
    // .then(()=>{
    //     console.log("success");
    //     setIsLoadingUsers(false)
        
    // })
    .catch((error)=>{
        console.log("failed");
        setIsLoadingUsersError(error)
        // setIsLoadingUsers(false)
        
    })
    .finally(()=>{
        setIsLoadingUsers(false)
    })
    // console.log(dispatch(fetchUsers()));
    
    
  }, [dispatch]);

  const handleUserAdd = () => {
    dispatch(addUser());
  };

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (isLoadingUsersError) {
    return <div>Error fetching data...</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUserAdd}>+ Add User</Button>
      </div>
      {renderedUsers}
    </div>
  );
}

export default UsersList;
