
import useItems from "../../../Hooks/useItems";
import "./ManageItems.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiUpgrade } from "react-icons/gi";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const ManageItems = () => {
  const url = "https://obscure-taiga-87074.herokuapp.com/inventory";
  const [items, setItems] = useItems(url);
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
        <h1 className="header1 text-center my-3">Manage Items</h1>
      <div className="table-container mb-5">
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Supplier</th>
              <th scope="col">Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
                items.map(item => <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.suppName}</td>
                    <td>{item.category}</td>
                    <td><button title="Delete" onClick={()=>{handelDelete(item._id)}} className="tAbtn"><RiDeleteBin6Line/></button> <button title="Update" className="tAbtn"><Link to={`/inventory/${item._id}`}><GiUpgrade/></Link></button></td>
                  </tr>
                  )
            }
          </tbody>
        </table>
      </div>
      <button className="btn btn-dark d-block mx-auto my-3"><Link to="/additem">Add item</Link></button>
    </div>
  );
};

export default ManageItems;
