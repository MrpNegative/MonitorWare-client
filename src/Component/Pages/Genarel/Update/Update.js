import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import useItem from "../../../Hooks/useItem";
import "./Update.css";

const Update = () => {
  const { id } = useParams();
  const url = `https://obscure-taiga-87074.herokuapp.com/inventory/${id}`;
  const [item, setItem] = useItem(url);
  const { name, img, category, quantity, description, price, suppName } =
    item;

  // handel deliverd
  const handelDeliver = () => {
    if (quantity > 0) {
      const go = window.confirm("1 Item will be deliver");
      if (go) {
        const dq = quantity - 1;
        const newQuantity = { dq };
        console.log(newQuantity);
        axios.put(url, newQuantity).then((response) => {
          console.log(response);
          const { data } = response;
          if (data.acknowledged) {
            toast("Delivery done");
            window.location.reload();
            // setItem({...item, quantity: newQuantity})
          }
        });
      }
    } else {
      toast("Stock Out");
    }
  };
  // handel restock
  const handelReStock = (e) => {
    e.preventDefault();
    const restock = parseInt(e.target.restock.value);
    if (restock > 0) {
      const go = window.confirm(`${restock} Item will be restock`);
      if (go) {
        const numberQuantity = parseInt(quantity);
        const dq = numberQuantity + restock;
        const newQuantity = { dq };
        axios.put(url, newQuantity).then((response) => {
          console.log(response);
          const { data } = response;
          if (data.acknowledged) {
            toast("Delivery done");
            window.location.reload();
            // setItem({...item, quantity: newQuantity})
          }
        });
      }
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
            <button onClick={handelDeliver} className="btn my-2 btn-dark">
              Delivered
            </button>
            <form onSubmit={handelReStock} className="my-2 mx-2">
              <input
                className="btn btn-danger"
                type="submit"
                value="Restock"
                required
              />
              <input
                className="restock-input"
                name="restock"
                type="number"
                min="1"
                required
              />
            </form>
            <button className="btn my-2 btn-dark">
              <Link to="/manageitems">Manage Items</Link>
            </button>
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
