import Dashboard from './components/UserList';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Navbar from './components/navbar';
import '../src/App.css';
import About from './Pages/About';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Profil from './Pages/Profil';
import RegisterSukses from './Pages/RegisterSukses';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registersukses" element={<RegisterSukses />} />
          <Route path="profil" element={<Profil />} />
          <Route path="dashboard/add" element={<AddUser />} />
          <Route path="dashboard/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <div>
<Navbar></Navbar>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<UserList />} />
    <Route path="add" element={<AddUser />} />
    <Route path="edit/:id" element={<EditUser />} />
  </Routes>
</BrowserRouter>
<br />
<About></About>
</div> */
}
