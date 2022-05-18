import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useItems from "../../../Hooks/useItems";
import { auth } from "../../Authintication/firebase-init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [item, setItem] = useState([]);
  const email = user?.email;
  const url = `https://obscure-taiga-87074.herokuapp.com/inventory/myitams/${email}`;
  useEffect(() => {
    const getItem = async () => {
      try{
        const { data } = await axios.get(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        setItem(data);
      }
      catch(error){
        if(error.response.status === 401 || error.response.status === 403){
            signOut(auth)
        }
      }
    };
    getItem();
  }, [user]);
  return (
    <div className="container">
      <h1>{item.length}</h1>
    </div>
  );
};

export default MyItems;
