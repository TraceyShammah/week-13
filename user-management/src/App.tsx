import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
