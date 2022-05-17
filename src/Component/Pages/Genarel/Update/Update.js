import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useItem from "../../../Hooks/useItem";
import "./Update.css";

const Update = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/inventory/${id}`;
  const [item, setItem] = useItem(url);
  const { _id, name, img, category, quantity, description, price, suppName } = item;
  
  // handel deliverd
  const handelDeliver = (id) => {
    if(quantity > 0){
        const newQuantity = quantity -1;
        axios.patch(url, newQuantity)
    }
  };
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="updateItem-container">
        <div className="updateIMG-container">
          <img src={img} alt="" />
        </div>
        <div className="UpdateInfo-container">
          <p className="UItem-name">{name}</p>
          <p className="UItem-price">Price: {price} $</p>
          <p className="UItem-suppName">Supplier: {suppName}</p>
          <p className="UItem-category">Category: {category}</p>
          <p className="UItem-quantity">Quantity: {quantity}</p>
          <div className="d-flex flex-wrap justify-content-between">
            <button
              onClick={() => {
                handelDeliver(_id);
              }}
              className="btn my-2 btn-dark"
            >
              Delivered
            </button>
            <form className="my-2 mx-2">
              <input
                className="btn btn-danger"
                type="submit"
                value="Restock"
                required
              />
              <input className="restock-input" type="number" min="1" required />
            </form>
            <button className="btn my-2 btn-dark"><Link to='/manageitems'>Manage Items</Link></button>
          </div>
        </div>
      </div>
      <div className="updateItem-container">
        <h4 className="fw-bold">Description</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Update;
