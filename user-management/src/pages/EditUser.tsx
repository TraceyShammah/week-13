import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import UserForm from "../components/UserForm";

const EditUser = () => {
  const { id } = useParams<{ id: string }>();
  const user = useSelector((state: RootState) => state.users.users.find((u) => u.id === Number(id)));

  return user ? <UserForm user={user} /> : <p>User not found</p>;
};

export default EditUser;
