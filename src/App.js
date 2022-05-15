import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Pages/Authintication/Login/Login';
import AllRouts from './Component/Pages/Authintication/AllRouts/AllRouts';
import Signup from './Component/Pages/Authintication/Signup/Signup';
import Header from './Component/Pages/Genarel/Header/Header';
import Nav from './Component/Pages/Genarel/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
    <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    </Routes>

     
    </div>
  );
}

export default App;
