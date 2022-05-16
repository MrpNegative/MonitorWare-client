import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Component/Pages/Authintication/Login/Login";

import Signup from "./Component/Pages/Authintication/Signup/Signup";
import ForgotPass from "./Component/Pages/Authintication/ForgotPass/Forgot";
import Home from "./Component/Pages/Genarel/Home/Home";
import Nav from "./Component/Pages/Genarel/Nav/Nav";
import RequireAuth from "./Component/Pages/Authintication/RequarAuth/RequireAuth";
import MainInventory from "./Component/Pages/Genarel/MainInventory/MainInventory";
import AddItem from "./Component/Pages/Genarel/AddItem/AddItem";
import Update from "./Component/Pages/Genarel/Update/Update";

function App() {
  return (
    <div className="App">
      <Nav />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<ForgotPass />} />
        <Route path="/inventory" element={
          <RequireAuth>
            <MainInventory/>
          </RequireAuth>
        } />
        <Route path="/additem" element={
          <RequireAuth>
            <AddItem/>
          </RequireAuth>
        } />
        <Route path="/update/:id" element={
          <RequireAuth>
            <Update/>
          </RequireAuth>
        } />
      </Routes>
    </div>
    
  );
}

export default App;
