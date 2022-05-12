import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Login from './Pages/Auth/Login/Login';
import Apoinment from './Pages/Apoinment/Apoinment';
import Signup from './Pages/Auth/Signup';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/appointment' element={<Apoinment></Apoinment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
