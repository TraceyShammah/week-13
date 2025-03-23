import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/UserSlice"; 
import { RootState, AppDispatch } from "../store/store"; 
import UserCard from "./UserCard"; 
import { Link } from "react-router-dom";

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading } = useSelector((state: RootState) => state.users); 

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>User List</h2>
      <Link to="/add-user">Add User</Link>
      {loading ? <p>Loading...</p> : users.map((user) => <UserCard key={user.id} user={user} />)}
    </div>
  );
};

export default UserList;
