import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../redux/userSlice'


import React, { useEffect } from 'react'

const Users = () => {
    const  { users , isLoading, error } =
 useSelector ((state) => state.users)
 const dispatch = useDispatch();

 useEffect(() => {
    dispatch(fetchUsers())
 }, [dispatch]);

 if(isLoading) return <p>Loading users .......</p>
 if(isLoading) return <p>Error: {error}</p>

  return (
    <div>
    <h2>Users List</h2>
    <ul>
    {users.map((user) => (
        <li key={user.id}>{user.title}</li>
    ))}
    </ul>
    </div>
  )
}

export default Users

