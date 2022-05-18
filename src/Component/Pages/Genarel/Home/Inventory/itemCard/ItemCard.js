import React from "react";
import { Link } from "react-router-dom";
import "./ItemCard.css";

const ItemCard = ({ items, isDelete, handelDelete }) => {
  const { name, img, category, description, quantity, price, suppName } =
    items;
    
  return (
    <div className="item-container">
      <div>
      <img src={img} alt="" />
      <p className="item-name" title={`${name}`}>
        <b>{name?.length < 40 ? name : name.slice(0, 40) + " ..."}</b>
      </p>

      <p className="item-description" title={`${description}`}>
        {description?.length < 100
          ? description
          : description.slice(0, 100) + " ..."}
      </p>

      <p className="item-price">Price: {price}</p>
      <p className="item-quantity">Quantity: {quantity}</p>
      <p className="item-suppName">Supplier: {suppName}</p>
      <p className="item-category">Category: {category}</p>
      </div>
     {
       isDelete ?  <button className="btn btn-dark" onClick={()=>{handelDelete(items?._id)}}>Delete</button> : <button className="btn btn-dark"><Link to={`/update/${items._id}`}>Update</Link></button>
     }
    </div>
  );
};

export default ItemCard;
