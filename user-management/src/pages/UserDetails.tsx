import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const user = useSelector((state: RootState) => state.users.users.find((u) => u.id === Number(id)));

  if (!user) return <p>User not found</p>;

  return (
    <div className="user-details">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
};

export default UserDetails;
