import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ItemCard from '../Home/Inventory/itemCard/ItemCard';
import { auth } from "../../Authintication/firebase-init";
import toast from "react-hot-toast";
import './MyItems.css'

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const email = user?.email;
  const url = `https://obscure-taiga-87074.herokuapp.com/inventory/myitams/${email}`;
  useEffect(() => {
    const getItem = async () => {
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setItems(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
        }
      }
    };
    getItem();
  }, [user]);

  // manage delete 
  const handelDelete = id =>{
    const dUrl = `https://obscure-taiga-87074.herokuapp.com/inventory/${id}`
    const proceed = window.confirm('Are You Sure')
    if(proceed){
      axios.delete(dUrl)
      .then(response => {
        console.log(response)
        const {data} = response;
        if(data.acknowledged){
          toast.success('Delete Successful')
            const newItems = items.filter(x => x._id !== id)
            setItems(newItems)
            return
        }
        else{
          toast.success('something went wrong')

        }
    })
    }
    
}

  return (
    <div className="container">
      <h1 className="text-center header1 mt-5">My Items({items?.length})</h1>
      <div className="my-items">
        {
          items.map(items => <ItemCard handelDelete={handelDelete} key={items._id} items={items} isDelete={true}></ItemCard>)
        }
      </div>
    </div>
  );
};

export default MyItems;
