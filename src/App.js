import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Component/Pages/Authintication/Login/Login";

import Signup from "./Component/Pages/Authintication/Signup/Signup";
import ForgotPass from "./Component/Pages/Authintication/ForgotPass/Forgot";
import Home from "./Component/Pages/Genarel/Home/Home";
import Nav from "./Component/Pages/Genarel/Nav/Nav";
import RequireAuth from "./Component/Pages/Authintication/RequarAuth/RequireAuth";
import AddItem from "./Component/Pages/Genarel/AddItem/AddItem";
import Footer from "./Component/Pages/Genarel/Footer/Footer";
import Update from "./Component/Pages/Genarel/Update/Update";
import ManageItems from "./Component/Pages/Genarel/ManageItems/ManageItems";
import { Toaster } from "react-hot-toast";
import MyItems from "./Component/Pages/Genarel/MyItems/MyItems";
import Blog from "./Component/Pages/Genarel/Blog/Blog";
import NotFound from "./Component/Pages/Genarel/NotFound/NotFound";
import JobReq from "./Component/Pages/Genarel/JobReq/JobReq";

function App() {
  return (
    <div className="App">
      <Nav />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<ForgotPass />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/jobs" element={<JobReq />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/manageitems"
          element={
            <RequireAuth>
              <ManageItems />
            </RequireAuth>
          }
        />
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Update />
            </RequireAuth>
          }
        />
        <Route
          path="/myitems/:email"
          element={
            <RequireAuth>
              <MyItems/>
            </RequireAuth>
          }
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
