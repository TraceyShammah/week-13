import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";
import { User } from "../store/UserSlice"; 

const UserForm = ({ user }: { user?: User }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<User>(
    user || { id: Date.now(), name: "", email: "", address: { city: "" } }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user && user.id) {
      dispatch(updateUser(formData));
    } else {
      dispatch(addUser(formData)); 
    }
    navigate("/"); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="address.city" value={formData.address.city} onChange={handleChange} placeholder="City" required />
      <button type="submit">{user ? "Update User" : "Add User"}</button>
    </form>
  );
};

export default UserForm;
