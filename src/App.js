import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Pages/Authintication/Login/Login';

import Signup from './Component/Pages/Authintication/Signup/Signup';
import Home from './Component/Pages/Genarel/Home/Home';
import Nav from './Component/Pages/Genarel/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    </Routes>

     
    </div>
  );
}

export default App;
