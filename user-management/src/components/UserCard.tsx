import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/UserSlice";
import { User } from "../store/UserSlice";

const UserCard = ({ user }: { user: User }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
      <Link to={`/edit-user/${user.id}`}>Edit</Link>
      <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
    </div>
  );
};

export default UserCard;
