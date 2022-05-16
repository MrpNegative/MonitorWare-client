import React from "react";
import { useParams } from "react-router-dom";
import useItem from "../../../Hooks/useItem";
import "./Update.css";

const Update = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/inventory/${id}`;
  const item = useItem(url);
  const { name, img, category, description, quantity, price, suppName } = item;
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
            <button className="btn my-2 btn-dark">Delivered</button>
            <form className="my-2 mx-2">
            <input className="btn btn-danger" type="submit" value='Restock' required />
            <input className="restock-input" type="number" min="1" required />
            </form>
            <button className="btn my-2 btn-dark">Manage Item</button>
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
