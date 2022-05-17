import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Login from './Pages/Auth/Login/Login';
import Apoinment from './Pages/Apoinment/Apoinment';
import Signup from './Pages/Auth/Signup';
import RequireAuth from './Pages/Auth/RequireAuth';
import Dashboard from '../src/Pages/Home/Dashboard/Dasboard'
import MyAppoinment from './Pages/Home/Dashboard/MyAppoinment';
import MyReview from './Pages/Home/Dashboard/MyReview';
import Users from './Pages/Home/Dashboard/Users';
import RequireAdmin from './Pages/Auth/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/appointment' element={<RequireAuth>
          <Apoinment></Apoinment>
        </RequireAuth>}></Route>

        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path="myreview" element={<MyReview></MyReview>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
